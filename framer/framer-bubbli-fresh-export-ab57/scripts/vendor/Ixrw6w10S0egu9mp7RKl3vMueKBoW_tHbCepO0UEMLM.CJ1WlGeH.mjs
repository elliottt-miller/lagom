import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, K as n, X as r } from "./framer.D9PtOJZM.mjs";
import { n as i, t as a } from "./shared-lib.Cln7NIgD.mjs";
import { a as o, r as s } from "./XoJrXYEJ9.CmumPtIH.mjs";
function c(e, t) {
  let n = e?.HBdOixS0r;
  return {
    breakpoints: [
      { hash: `1u1amgx`, mediaQuery: `(min-width: 1200px)` },
      { hash: `e9fkfh`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `ijpmxe`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-PwSZj`,
    title: `${n === void 0 ? `{{HBdOixS0r}}` : d(n)} - シュワシュワ Bubbli\xae — Framer E-commerce Template`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    a = {
      from: { alias: `UxmXEQ74p`, data: o, type: `Collection` },
      select: [{ collection: `UxmXEQ74p`, name: `HBdOixS0r`, type: `Identifier` }],
      where: n(e, `UxmXEQ74p`),
    },
    s = await i.query(a, r);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `UxmXEQ74p`, data: o, type: `Collection` },
      select: [{ collection: `UxmXEQ74p`, name: `HBdOixS0r`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `UxmXEQ74p`, name: t, type: `Identifier` });
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=Ixrw6w10S0egu9mp7RKl3vMueKBoW_tHbCepO0UEMLM.CJ1WlGeH.mjs.map
