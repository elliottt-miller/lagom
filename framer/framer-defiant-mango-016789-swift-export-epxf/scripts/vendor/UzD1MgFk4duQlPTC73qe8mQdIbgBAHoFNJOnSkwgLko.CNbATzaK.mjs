import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { T as t, X as n, et as r } from "./framer.zRtTBSC3.mjs";
import { n as i, t as a } from "./shared-lib.R4EjmGpr.mjs";
import { a as o, r as s } from "./nRUBpiZY0.D2DPzPid.mjs";
function c(e, t) {
  let n = e?.iHo87M7PO;
  return {
    breakpoints: [
      { hash: `14dag80`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1avt2rn`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `l9h7hh`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-WY3gK`,
    title: `${n === void 0 ? `{{iHo87M7PO}}` : d(n)}`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `hlb0hjsQy`, data: o, type: `Collection` },
      select: [{ collection: `hlb0hjsQy`, name: `iHo87M7PO`, type: `Identifier` }],
      where: n(e, `hlb0hjsQy`),
    },
    s = await i.query(a, r);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `hlb0hjsQy`, data: o, type: `Collection` },
      select: [{ collection: `hlb0hjsQy`, name: `iHo87M7PO`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `hlb0hjsQy`, name: t, type: `Identifier` });
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
      s(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=UzD1MgFk4duQlPTC73qe8mQdIbgBAHoFNJOnSkwgLko.CNbATzaK.mjs.map
