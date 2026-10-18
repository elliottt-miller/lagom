#!/usr/bin/env node
/**
 * CSS dependency and ownership audit for Lagom's production entrypoint.
 * No dependencies; run with: npm run audit:css
 * --strict fails on invalid import graph and multiple owners for protected
 * global tokens. Report output is deterministic, making review diffs useful.
 */
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const root=process.cwd();
const entry=path.join(root,'src/styles/index.css');
const protectedTokens=new Set([
 '--lagom-brand-green','--lagom-brand-green-deep','--lagom-brand-ink',
 '--lagom-type-display','--lagom-type-body','--lagom-type-detail',
 '--font-display','--font-primary','--font-ui','--dm-display','--dm-ui',
]);
const visited=new Set();
const visiting=new Set();
const order=[];
const errors=[];
const imports=new Map();
const tokenDeclarations=[];
const important=[];
const selectorOwners=new Map();
function relative(file){return path.relative(root,file).replaceAll(path.sep,'/')}
function read(file){
 if(visiting.has(file)){errors.push('CSS import cycle: '+relative(file));return}
 if(visited.has(file))return;
 if(!fs.existsSync(file)){errors.push('Missing CSS file: '+relative(file));return}
 visiting.add(file);
 const source=fs.readFileSync(file,'utf8');
 const edges=[];
 for(const match of source.matchAll(/@import\s+(?:url\()?['"]([^'"]+\.css)['"]\)?\s*;/g)){
   const target=path.resolve(path.dirname(file),match[1]);
   edges.push(relative(target));
   read(target);
 }
 imports.set(relative(file),edges);
 const clean=source.replace(/\/\*[\s\S]*?\*\//g,'');
 for(const match of clean.matchAll(/:root\s*\{([^{}]*)\}/g)){
   for(const property of match[1].matchAll(/(--[\w-]+)\s*:\s*([^;}]*)/g)){
     if(protectedTokens.has(property[1]))tokenDeclarations.push({
       file:relative(file),token:property[1],value:property[2].trim(),
     });
   }
 }
 const importantMatches=[...clean.matchAll(/!important\b/g)];
 if(importantMatches.length)important.push({file:relative(file),count:importantMatches.length});
 // Heuristic only: repeated selectors are not inherently invalid. This is
 // reported to reviewers, never used as an automatic deletion criterion.
 for(const match of clean.matchAll(/(^|})\s*([^@{}][^{}]{1,150})\s*\{/gm)){
   const selector=match[2].trim().replace(/\s+/g,' ');
   if(!selector||selector.includes(';'))continue;
   if(!selectorOwners.has(selector))selectorOwners.set(selector,new Set());
   selectorOwners.get(selector).add(relative(file));
 }
 visiting.delete(file);
 visited.add(file);
 order.push(relative(file));
}
read(entry);
const collisions=[...selectorOwners].filter(([,owners])=>owners.size>1)
 .map(([selector,owners])=>({selector,files:[...owners]}))
 .sort((a,b)=>b.files.length-a.files.length||a.selector.localeCompare(b.selector));
const protectedConflicts=tokenDeclarations.filter(item=>item.file!=='src/styles/tokens.css');
for(const item of protectedConflicts)errors.push('Protected token outside tokens.css: '+item.token+' in '+item.file);
const report={
 entry:relative(entry),files:order.length,orderedFiles:order,
 protectedTokens:tokenDeclarations,
 protectedTokenConflicts:protectedConflicts,
 importantCount:important.reduce((n,x)=>n+x.count,0),
 importantByFile:important.sort((a,b)=>b.count-a.count),
 crossFileSelectorCollisions:collisions,
 importGraph:Object.fromEntries(imports),
 errors,
};
const output=path.join(root,'tmp/css-ownership-audit.json');
fs.mkdirSync(path.dirname(output),{recursive:true});
fs.writeFileSync(output,JSON.stringify(report,null,2)+'\n');
console.log('CSS files: '+report.files+' | !important: '+report.importantCount+
 ' | shared selectors: '+collisions.length+' | issues: '+errors.length);
console.log('Detailed report: '+relative(output));
for(const issue of errors)console.error('CSS ownership: '+issue);
if(process.argv.includes('--strict')&&errors.length)process.exitCode=1;
