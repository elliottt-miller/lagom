import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { G as t, V as n, v as r } from "./framer.CS_JK_Iv.mjs";
import { n as i, t as a } from "./shared-lib.CKjTgJcb.mjs";
import { i as o, n as s } from "./hbTJSza8U.CM4gvI5D.mjs";
function c(e, t) {
  let n = e?.ZXg7OaHZU,
    r = e?.g1ufnXMvw;
  return {
    breakpoints: [
      { hash: `whh1y1`, mediaQuery: `(min-width: 1260px)` },
      { hash: `1ihwgcr`, mediaQuery: `(min-width: 810px) and (max-width: 1259.98px)` },
      { hash: `32mtw8`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: {},
    robots: `max-image-preview:large`,
    serializationId: `framer-IVkTh`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{ZXg7OaHZU}}` : d(n)} - Courso`,
    viewport: `width=device-width`,
  };
}
async function l(e, t) {
  let i = new r(),
    a = {
      from: { alias: `zSKArY_ps`, data: s, type: `Collection` },
      select: [
        { collection: `zSKArY_ps`, name: `ZXg7OaHZU`, type: `Identifier` },
        { collection: `zSKArY_ps`, name: `g1ufnXMvw`, type: `Identifier` },
      ],
      where: n(e, `zSKArY_ps`),
    },
    o = await i.query(a, t);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, t);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `zSKArY_ps`, data: s, type: `Collection` },
      select: [
        { collection: `zSKArY_ps`, name: `ZXg7OaHZU`, type: `Identifier` },
        { collection: `zSKArY_ps`, name: `g1ufnXMvw`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `zSKArY_ps`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (t(),
      o(),
      a(),
      (d = (e) => (typeof e == `string` ? e : String(e))),
      (f = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (p = 1),
      (m = {
        exports: {
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
h();
export {
  m as __FramerMetadata__,
  c as default,
  u as fetchAllMetadata,
  l as fetchMetadata,
  p as metadataVersion,
  h as t,
};
//# sourceMappingURL=KU9yMGI7a8TOiHyFBwp8EHYIpeMA24ub4hGAkYtgeCQ.BwaBkh6i.mjs.map
