import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
async function t(e, t, i) {
  let a = r[e],
    o = a ? await a(t, i) : void 0,
    s = { bodyEnd: [], bodyStart: [], headEnd: [], headStart: [] };
  for (let t of n) {
    if (t.pageIds && !t.pageIds.has(e)) continue;
    let n = t.code(o);
    n && s[t.placement].push({ ...t, code: n });
  }
  return s;
}
var n, r, i, a;
e(() => {
  ((n = []),
    (r = {}),
    (i = { bodyEnd: [], bodyStart: [`j4gbYx1Dy`], headEnd: [], headStart: [] }),
    (a = {
      exports: {
        getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
        snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { a as __FramerMetadata__, t as getSnippets, i as snippetsSorting };
//# sourceMappingURL=l50CnD6X_tOhpdKRVLauw-xtILdFDp6bOxKOe_-cTdw.xvBIEt5x.mjs.map
