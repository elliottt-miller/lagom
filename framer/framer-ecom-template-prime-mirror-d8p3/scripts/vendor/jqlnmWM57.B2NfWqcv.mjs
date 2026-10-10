import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { D as t, c as n, m as r, s as i } from "./react.BtSUcPAM.mjs";
import { P as a } from "./motion.B_UOAosx.mjs";
import { Ft as o, I as s, L as c, Mt as l, N as u, Q as d, o as f } from "./framer.DuFjdl15.mjs";
var p,
  m,
  h,
  g,
  _,
  v,
  y,
  b = e(() => {
    (n(),
      d(),
      t(),
      (p = `var(--framer-icon-mask)`),
      (m = r(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (h = a.create(m)),
      (g = r((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(h, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (_ = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 8 8 L 16 0" fill="transparent" height="8px" id="eWuuEdtb7" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(2 7)" width="16px"/></svg>`),
      (v = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (y = o(
        r(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: a,
              variant: o,
              R8PWEQPqW: c,
              r2cPmBIrU: u,
              ...d
            } = v(e),
            f = l(`53470977`, _);
          return i(g, {
            ...d,
            className: s(`framer-BbYKn`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": u, "--v9s4l2": c, ...n },
            viewBox: `0 0 20 20`,
            children: i(`use`, { href: f }),
          });
        }),
        [
          `.framer-BbYKn { -webkit-mask: ${p}; aspect-ratio: 1; display: block; mask: ${p}; width: 20px; }`,
        ],
        `framer-BbYKn`
      )),
      (y.displayName = `Chevron Down`),
      u(y, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: f.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: f.Number },
      }));
  }),
  x,
  S,
  C,
  w,
  T = e(() => {
    (d(),
      c.loadFonts([`FS;General Sans-variable`]),
      (x = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (S = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: x,
              weight: `400`,
            },
          ],
        },
      ]),
      (C = [
        `.framer-idvbG .framer-styles-preset-hhy7lj:not(.rich-text-wrapper), .framer-idvbG .framer-styles-preset-hhy7lj.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, #757575); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-idvbG .framer-styles-preset-hhy7lj:not(.rich-text-wrapper), .framer-idvbG .framer-styles-preset-hhy7lj.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, #757575); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-idvbG .framer-styles-preset-hhy7lj:not(.rich-text-wrapper), .framer-idvbG .framer-styles-preset-hhy7lj.rich-text-wrapper p { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-variation-axes: "wght" 450; --framer-font-weight: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, #757575); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (w = `framer-idvbG`));
  });
export { y as a, T as i, C as n, b as o, S as r, w as t };
//# sourceMappingURL=jqlnmWM57.B2NfWqcv.mjs.map
