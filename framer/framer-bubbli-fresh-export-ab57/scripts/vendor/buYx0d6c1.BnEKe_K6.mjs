import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { c as t, g as n, o as r, w as i } from "./react.CWoGm2_e.mjs";
import { C as a } from "./motion.DjW49AAR.mjs";
import { Et as o, P as s, X as c, j as l, o as u } from "./framer.D9PtOJZM.mjs";
var d,
  f,
  p,
  m,
  h = e(() => {
    (r(),
      c(),
      i(),
      (d = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M 12 0 L 0 12 M 0 0 L 12 12" fill="transparent" height="12px" id="WXnhr_sBZ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="1.5" stroke="var(--1hq5eo6, rgb(0,0,0))" transform="translate(2 2)" width="12px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (f = n((e, n) => {
        let { animated: r, layoutId: i, children: o, ...s } = e;
        return r ? t(a.div, { ...s, layoutId: i, ref: n }) : t(`div`, { ...s, ref: n });
      })),
      (p = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        rbdZVdoTC: e ?? i.rbdZVdoTC ?? `rgb(0, 0, 0)`,
      })),
      (m = o(
        n(function (e, n) {
          let { style: r, className: i, layoutId: a, variant: o, rbdZVdoTC: c, ...l } = p(e);
          return t(f, {
            ...l,
            className: s(`framer-e6YFz`, i),
            layoutId: a,
            ref: n,
            style: { "--1hq5eo6": c, ...r },
          });
        }),
        [
          `.framer-e6YFz { -webkit-mask: ${d}; aspect-ratio: 1; background-color: var(--1hq5eo6); mask: ${d}; width: 16px; }`,
        ],
        `framer-e6YFz`
      )),
      (m.displayName = `x`),
      l(m, {
        rbdZVdoTC: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Color`, type: u.Color },
      }));
  });
export { h as n, m as t };
//# sourceMappingURL=buYx0d6c1.BnEKe_K6.mjs.map
