import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, Q as n, w as r } from "./framer.DuFjdl15.mjs";
import { a as i, r as a } from "./r8bgkClkr.B4V6O7Q4.mjs";
function o(e, t) {
  let n = e?.PvOcv1Fi7;
  return {
    breakpoints: [
      { hash: `1m62fn`, mediaQuery: `(min-width: 1200px)` },
      { hash: `141cnr6`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `pretq8`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `Explore the ${n === void 0 ? `{{PvOcv1Fi7}}` : l(n)} collection featuring premium styles, modern fits, and wardrobe essentials designed for everyday comfort.`,
    elements: { s0OfEH9Fb: `Nav Trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-kKKLn`,
    title: `${n === void 0 ? `{{PvOcv1Fi7}}` : l(n)} - Fashion Collection – ECOM\xae`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let a = new r(),
    s = {
      from: { alias: `NntD4buY8`, data: i, type: `Collection` },
      select: [{ collection: `NntD4buY8`, name: `PvOcv1Fi7`, type: `Identifier` }],
      where: t(e, `NntD4buY8`),
    },
    c = await a.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    a = {
      from: { alias: `NntD4buY8`, data: i, type: `Collection` },
      select: [{ collection: `NntD4buY8`, name: `PvOcv1Fi7`, type: `Identifier` }],
    };
  for (let t of e) a.select.push({ collection: `NntD4buY8`, name: t, type: `Identifier` });
  return (await n.query(a, t)).map((n) => ({
    metadata: o(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var l,
  u,
  d,
  f = e(() => {
    (n(),
      a(),
      (l = (e) => (typeof e == `string` ? e : String(e))),
      (u = 1),
      (d = {
        exports: {
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=YNStzAjWQI0Nw7i_1nYjU8aZEYrS42_DbnB9InMh0mY.DU_WxQ14.mjs.map
