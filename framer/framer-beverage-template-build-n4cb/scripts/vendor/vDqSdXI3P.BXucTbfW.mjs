import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import { H as t, K as n, b as r } from "./framer.yhOKXYuv.mjs";
import { n as i, t as a } from "./shared-lib.HPuBgTry.mjs";
import { i as o, r as s } from "./pzJ5xx19u.DE3UEQD5.mjs";
function c(e, t) {
  let n = e?.X_CMlkeFh,
    r = e?.xzgpeGi2K;
  return {
    breakpoints: [
      { hash: `1ctx2ni`, mediaQuery: `(min-width: 1800px)` },
      { hash: `xwddqc`, mediaQuery: `(min-width: 1440px) and (max-width: 1799.98px)` },
      { hash: `7rkqcd`, mediaQuery: `(min-width: 810px) and (max-width: 1439.98px)` },
      { hash: `8z87e4`, mediaQuery: `(max-width: 809.98px)` },
    ],
    description: i(e, t).description,
    elements: { ePwJMz2al: `can` },
    framerSearch: { index: !0 },
    robots: `max-image-preview:large`,
    serializationId: `framer-9ppgP`,
    socialImage: f(r),
    title: `${n === void 0 ? `{{X_CMlkeFh}}` : d(n)} `,
    viewport: `width=device-width`,
  };
}
async function l(e, n) {
  let i = new r(),
    a = {
      from: { alias: `vDqSdXI3P`, data: o, type: `Collection` },
      select: [
        { collection: `vDqSdXI3P`, name: `X_CMlkeFh`, type: `Identifier` },
        { collection: `vDqSdXI3P`, name: `xzgpeGi2K`, type: `Identifier` },
      ],
      where: t(e, `vDqSdXI3P`),
    },
    s = await i.query(a, n);
  if (s.length === 0) throw Error(`No data matches pathVariables`);
  let l = s[0];
  return c(l, n);
}
async function u(e, t) {
  let n = new r(),
    i = {
      from: { alias: `vDqSdXI3P`, data: o, type: `Collection` },
      select: [
        { collection: `vDqSdXI3P`, name: `X_CMlkeFh`, type: `Identifier` },
        { collection: `vDqSdXI3P`, name: `xzgpeGi2K`, type: `Identifier` },
      ],
    };
  for (let t of e) i.select.push({ collection: `vDqSdXI3P`, name: t, type: `Identifier` });
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
    (n(),
      s(),
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
//# sourceMappingURL=vDqSdXI3P.BXucTbfW.mjs.map
