import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { J as t, Q as n, w as r } from "./framer.DuFjdl15.mjs";
import { i, r as a } from "./T6200DqYJ.DDATVUMg.mjs";
function o(e, t) {
  let n = e?.MzhzcoVnx,
    r = e?.PZahwkbb4;
  return {
    breakpoints: [
      { hash: `x280fk`, mediaQuery: `(min-width: 1200px)` },
      { hash: `1gxvyon`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
      { hash: `tpquj6`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: `${r === void 0 ? `{{PZahwkbb4}}` : l(r)}`,
    elements: { ZdJs013Mb: `Nav Trigger` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-Wju5q`,
    title: `${n === void 0 ? `{{MzhzcoVnx}}` : l(n)} – ECOM\xae`,
    viewport: `width=device-width`,
  };
}
async function s(e, n) {
  let a = new r(),
    s = {
      from: { alias: `vmJrVFRkR`, data: i, type: `Collection` },
      select: [
        { collection: `vmJrVFRkR`, name: `MzhzcoVnx`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `PZahwkbb4`, type: `Identifier` },
      ],
      where: t(e, `vmJrVFRkR`),
    },
    c = await a.query(s, n);
  if (c.length === 0) throw Error(`No data matches pathVariables`);
  let l = c[0];
  return o(l, n);
}
async function c(e, t) {
  let n = new r(),
    a = {
      from: { alias: `vmJrVFRkR`, data: i, type: `Collection` },
      select: [
        { collection: `vmJrVFRkR`, name: `MzhzcoVnx`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `PZahwkbb4`, type: `Identifier` },
      ],
    };
  for (let t of e) a.select.push({ collection: `vmJrVFRkR`, name: t, type: `Identifier` });
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
//# sourceMappingURL=a1I4iMq8VgANbd720jTO7zPCWw5KMcfjYyuw9L_dUTU.B8UGZQv7.mjs.map
