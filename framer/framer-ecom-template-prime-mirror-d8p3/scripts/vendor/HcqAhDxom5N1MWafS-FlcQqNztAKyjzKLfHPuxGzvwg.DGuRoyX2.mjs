import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, Q as n, w as r } from "./framer.DuFjdl15.mjs";
import { i, t as a } from "./bYJxnvWan.CSz-fWFi.mjs";
function o(e, t) {
  let n = e?.hGtMrm6Ue;
  return {
    breakpoints: [
      { hash: `1xihr3k`, mediaQuery: `(min-width: 1200px)` },
      { hash: `mqwnn3`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `qhub3f`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `Explore curated fashion collections featuring timeless essentials, seasonal arrivals, and everyday styles designed for comfort, quality, and modern living.`,
    elements: { kEz2u8H60: `Nav Trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-n6zWU`,
    title: `${n === void 0 ? `{{hGtMrm6Ue}}` : l(n)} - Modern Fashion & Apparel – ECOM\xae`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `Ug98Cl58K`, data: a, type: `Collection` },
      select: [{ collection: `Ug98Cl58K`, name: `hGtMrm6Ue`, type: `Identifier` }],
      where: t(e, `Ug98Cl58K`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `Ug98Cl58K`, data: a, type: `Collection` },
      select: [{ collection: `Ug98Cl58K`, name: `hGtMrm6Ue`, type: `Identifier` }],
    };
  for (let t of e) i.select.push({ collection: `Ug98Cl58K`, name: t, type: `Identifier` });
  return (await n.query(i, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (n(),
      i(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=HcqAhDxom5N1MWafS-FlcQqNztAKyjzKLfHPuxGzvwg.DGuRoyX2.mjs.map
