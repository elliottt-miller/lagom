import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { C as t, K as n, X as r } from "./framer.D9PtOJZM.mjs";
import { i, t as a } from "./vDz2snn78.DZVUjcrj.mjs";
import { n as o, t as s } from "./shared-lib.Cln7NIgD.mjs";
function c(e, t) {
  let n = e?.FCIPIBRAL;
  return {
    breakpoints: [
      { hash: `15m06yp`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1p5lyys`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1q8j5kj`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: o(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-mCdPw`,
    title: `${n === void 0 ? `{{FCIPIBRAL}}` : d(n)} - シュワシュワ Bubbli\xae — Natural Sparkling Water`,
    viewport: `width=device-width`,
  };
}
async function l(e, r) {
  let i = new t(),
    o = {
      from: { alias: `unRZtzSgJ`, data: a, type: `Collection` },
      select: [{ collection: `unRZtzSgJ`, name: `FCIPIBRAL`, type: `Identifier` }],
      where: n(e, `unRZtzSgJ`),
    },
    s = await i.query(o, r);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, r);
}
async function u(e, n) {
  let r = new t(),
    i = {
      from: { alias: `unRZtzSgJ`, data: a, type: `Collection` },
      select: [{ collection: `unRZtzSgJ`, name: `FCIPIBRAL`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `unRZtzSgJ`, name: t, type: `Identifier` });
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
      i(),
      s(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = 1),
      (p = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=3Qg8EEIL-XXSfEIeRUAVR3IGzWpBGLhLXezXZeFrM-o.Bkyltuzb.mjs.map
