import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, K as n, X as r } from "./framer.D9PtOJZM.mjs";
import { n as i, t as a } from "./shared-lib.Cln7NIgD.mjs";
import { a as o, n as s } from "./h78sYrnAz.CN_Z4VaQ.mjs";
function c(e, t) {
  let n = e?.MV8vbHLj9;
  return {
    breakpoints: [
      { hash: `15l3aqc`, mediaQuery: `(min-width: 1200px)` },
      { hash: `10ujles`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `pi4fms`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-vsUa6`,
    title: `${n === void 0 ? `{{MV8vbHLj9}}` : d(n)} - シュワシュワ Bubbli\xae — Natural Sparkling Water`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `GW53l1Are`, data: s, type: `Collection` },
      select: [{ collection: `GW53l1Are`, name: `MV8vbHLj9`, type: `Identifier` }],
      where: n(e, `GW53l1Are`),
    },
    o = await i.query(a, r);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `GW53l1Are`, data: s, type: `Collection` },
      select: [{ collection: `GW53l1Are`, name: `MV8vbHLj9`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `GW53l1Are`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: c(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var d,
  f,
  p,
  m = e(() => {
    (r(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
m();
export {
  p as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  f as metadataVersion,
  m as t,
};
//# sourceMappingURL=p9NQI6aZRJok962HUfb3u_ex_kBehDvXkm5mH_zaWOc.Biuoins1.mjs.map
