import { n as e } from "./rolldown-runtime.vRAu6p--.mjs";
import { U as t, b as n, q as r } from "./framer.BWiQWvWz.mjs";
import { i, o as a, s as o, t as s } from "./shared-lib.BrMDeYkr.mjs";
function c(e, t) {
  let n = e?.yWTvZx92m,
    r = e?.tzdqxmwNo;
  return {
    breakpoints: [{ hash: `1f7k0pm` }],
    description: o(e, t).description,
    elements: { enRGksvdL: `hide` },
    robots: `max-image-preview:large`,
    serializationId: `framer-nNpCg`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{yWTvZx92m}}` : d(n)} - My Framer Site`,
    viewport: `width=1200`,
  };
}
async function l(e, r) {
  let i = new n(),
    a = {
      from: { alias: `X0nzOU9lt`, data: s, type: `Collection` },
      select: [
        { collection: `X0nzOU9lt`, name: `yWTvZx92m`, type: `Identifier` },
        { collection: `X0nzOU9lt`, name: `tzdqxmwNo`, type: `Identifier` },
      ],
      where: t(e, `X0nzOU9lt`),
    },
    o = await i.query(a, r);
  if (o.length === 0) throw Error(`No data matches pathVariables`);
  let l = o[0];
  return c(l, r);
}
async function u(e, t) {
  let r = new n(),
    i = {
      from: { alias: `X0nzOU9lt`, data: s, type: `Collection` },
      select: [
        { collection: `X0nzOU9lt`, name: `yWTvZx92m`, type: `Identifier` },
        { collection: `X0nzOU9lt`, name: `tzdqxmwNo`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `X0nzOU9lt`, name: t, type: `Identifier` });
  return (await r.query(i, t)).map((n) => ({
    metadata: c(n, t),
    pathVariables: Object.fromEntries(e.map((e) => [e, n[e]])),
  }));
}
var d,
  f,
  p,
  m,
  h = e(() => {
    (r(),
      i(),
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
          default: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          fetchAllMetadata: { type: `function`, annotations: { framerContractVersion: `1` } },
          metadataVersion: { type: `variable`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { c as a, h as i, u as n, p as o, l as r, m as t };
//# sourceMappingURL=X0nzOU9lt.TmtE1s63.mjs.map
