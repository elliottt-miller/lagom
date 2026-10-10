import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { T as t, X as n, et as r } from "./framer.zRtTBSC3.mjs";
import { i, t as a } from "./wWC8EGMFo.DzFEZFNO.mjs";
function o(e, t) {
  let n = e?.X3CtE80s9,
    r = e?.ULM6scxx_;
  return {
    breakpoints: [
      { hash: `kbxkhz`, mediaQuery: `(min-width: 1200px)` },
      { hash: `w09wkn`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `14hol1r`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{ULM6scxx_}}` : l(r)}`,
    elements: {},
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-9nuRC`,
    title: `${n === void 0 ? `{{X3CtE80s9}}` : l(n)}`,
    viewport: `width=device-width`,
  };
}
async function s(e, r) {
  let i = new t(),
    s = {
      from: { alias: `fIwdA4CC3`, data: a, type: `Collection` },
      select: [
        { collection: `fIwdA4CC3`, name: `X3CtE80s9`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `ULM6scxx_`, type: `Identifier` },
      ],
      where: n(e, `fIwdA4CC3`),
    },
    c = await i.query(s, r);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, r);
}
async function c(e, n) {
  let r = new t(),
    i = {
      from: { alias: `fIwdA4CC3`, data: a, type: `Collection` },
      select: [
        { collection: `fIwdA4CC3`, name: `X3CtE80s9`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `ULM6scxx_`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `fIwdA4CC3`, name: t, type: `Identifier` });
  return (await r.query(i, n)).map((t) => ({
    metadata: o(t, n),
    pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (r(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
f();
export {
  d as __FramerMetadata__,
  o as default,
  c as fetchAllMetadata,
  s as fetchMetadata,
  u as metadataVersion,
  f as t,
};
//# sourceMappingURL=_RLUWtuVlXQry9t808w5ln-B0qstZ79TAJsiB91SrF0.BvdhHjbU.mjs.map
