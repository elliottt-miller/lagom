import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, Q as n, w as r } from "./framer.DuFjdl15.mjs";
import { a as i, r as a } from "./dQjQF91jO.DYrHel4r.mjs";
function o(e, t) {
  let n = e?.ccvQhG_Kb,
    r = e?.sFrlzjY0j;
  return {
    breakpoints: [
      { hash: `4kc784`, mediaQuery: `(min-width: 1200px)` },
      { hash: `dg1gva`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `1197yei`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{sFrlzjY0j}}` : l(r)}`,
    elements: { tssg3eCuh: `Nav Trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-vtwLN`,
    title: `${n === void 0 ? `{{ccvQhG_Kb}}` : l(n)} – ECOM\xae`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let a = new r(),
    s = {
      from: { alias: `n52CgrMqX`, data: i, type: `Collection` },
      select: [
        { collection: `n52CgrMqX`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `n52CgrMqX`, name: `sFrlzjY0j`, type: `Identifier` },
      ],
      where: t(e, `n52CgrMqX`),
    },
    c = await a.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    a = {
      from: { alias: `n52CgrMqX`, data: i, type: `Collection` },
      select: [
        { collection: `n52CgrMqX`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `n52CgrMqX`, name: `sFrlzjY0j`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `n52CgrMqX`, name: t, type: `Identifier` });
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
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
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
//# sourceMappingURL=HAxEvlcvRzDbb4MMZzKiQOTdjMjrzhG0kXzxl1jYyL8.ChAgcj12.mjs.map
