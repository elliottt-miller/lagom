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
    (i = { bodyEnd: [], bodyStart: [], headEnd: [`y8wNyJpnq`], headStart: [`Vj0dQqRUV`] }),
    (a = {
      exports: {
        getSnippets: { type: `function`, annotations: { framerContractVersion: `1` } },
        snippetsSorting: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { a as __FramerMetadata__, t as getSnippets, i as snippetsSorting };
//# sourceMappingURL=K__Nnr8Rhk6RQngOB4T1X9NzH8ALeJ35Q4ovw-UlvEQ.DwknjhtF.mjs.map
