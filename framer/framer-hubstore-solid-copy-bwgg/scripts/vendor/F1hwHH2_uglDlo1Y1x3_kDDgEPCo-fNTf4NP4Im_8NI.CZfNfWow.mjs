import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { Z as t, q as n, w as r } from "./framer.CbUxDv78.mjs";
import { i, t as a } from "./WOc_qkaMo.DX5U9UcV.mjs";
function o(e, t) {
  let n = e?.GCBaCslbQ,
    r = e?.LDHExcaRt;
  return {
    breakpoints: [
      { hash: `d48rz9`, mediaQuery: `(min-width: 1200px)` },
      { hash: `jog4i9`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1wczu5w`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{LDHExcaRt}}` : l(r)}`,
    elements: { FdfKnx9bG: `container` },
    robots: `max-image-preview:large`,
    serializationId: `framer-3vSvf`,
    socialImage: `../../assets/misc/gPxhpRVfV8Q6eFd8IB8lEFfhnxA.png`,
    title: `${n === void 0 ? `{{GCBaCslbQ}}` : l(n)} - My Framer Site`,
    viewport: `width=device-width`,
  };
}
async function s(e, t) {
  let i = new r(),
    s = {
      from: { alias: `ZGbSr4l4n`, data: a, type: `Collection` },
      select: [
        { collection: `ZGbSr4l4n`, name: `GCBaCslbQ`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `LDHExcaRt`, type: `Identifier` },
      ],
      where: n(e, `ZGbSr4l4n`),
    },
    c = await i.query(s, t);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, t);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `ZGbSr4l4n`, data: a, type: `Collection` },
      select: [
        { collection: `ZGbSr4l4n`, name: `GCBaCslbQ`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `LDHExcaRt`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `ZGbSr4l4n`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (t(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=F1hwHH2_uglDlo1Y1x3_kDDgEPCo-fNTf4NP4Im_8NI.CZfNfWow.mjs.map
