import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, Q as n, w as r } from "./framer.DuFjdl15.mjs";
import { i, t as a } from "./AckZCFyz8.Cslauf61.mjs";
function o(e, t) {
  let n = e?.C4WwxQMYR,
    r = e?.ntPHN4myl;
  return {
    breakpoints: [
      { hash: `10ney7a`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1cb4s11`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `ngxhi8`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{ntPHN4myl}}` : l(r)}`,
    elements: { O26sZ4cLC: `Nav Trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-ro0me`,
    title: `${n === void 0 ? `{{C4WwxQMYR}}` : l(n)} – ECOM\xae`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let i = new r(),
    s = {
      from: { alias: `kkQdpZCQB`, data: a, type: `Collection` },
      select: [
        { collection: `kkQdpZCQB`, name: `C4WwxQMYR`, type: `Identifier` },
        { collection: `kkQdpZCQB`, name: `ntPHN4myl`, type: `Identifier` },
      ],
      where: t(e, `kkQdpZCQB`),
    },
    c = await i.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    i = {
      from: { alias: `kkQdpZCQB`, data: a, type: `Collection` },
      select: [
        { collection: `kkQdpZCQB`, name: `C4WwxQMYR`, type: `Identifier` },
        { collection: `kkQdpZCQB`, name: `ntPHN4myl`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `kkQdpZCQB`, name: t, type: `Identifier` });
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
//# sourceMappingURL=WwvHoVUAzmBkllYZBUQOXAJR_M323zUnqyQtP70_L4Q.CfVK5_MC.mjs.map
