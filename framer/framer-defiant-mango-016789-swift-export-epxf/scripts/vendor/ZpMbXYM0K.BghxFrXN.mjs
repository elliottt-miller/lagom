import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import { D as t, c as n, m as r, s as i } from "./react.D0omlcQg.mjs";
import { M as a } from "./motion.Bi2Azsus.mjs";
import { L as o, Lt as s, P as c, et as l, o as u } from "./framer.zRtTBSC3.mjs";
var d,
  f,
  p,
  m,
  h = e(() => {
    (n(),
      l(),
      t(),
      (d = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 28.875 23.1 C 34.501 27.605 42.499 27.605 48.125 23.1 L 77 0" fill="transparent" height="26.47837885308308px" id="NhRxta1f0" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="23.1" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(11.5 36.61)" width="77px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (f = r((e, t) => {
        let { animated: n, layoutId: r, children: o, ...s } = e;
        return n ? i(a.div, { ...s, layoutId: r, ref: t }) : i(`div`, { ...s, ref: t });
      })),
      (p = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (m = s(
        r(function (e, t) {
          let { style: n, className: r, layoutId: a, variant: s, GaDHsaDms: c, ...l } = p(e);
          return i(f, {
            ...l,
            className: o(`framer-RalHz`, r),
            layoutId: a,
            ref: t,
            style: { "--118a55": c, ...n },
          });
        }),
        [
          `.framer-RalHz { -webkit-mask: ${d}; aspect-ratio: 1; background-color: var(--118a55); mask: ${d}; width: 100px; }`,
        ],
        `framer-RalHz`
      )),
      (m.displayName = `Chevron Down`),
      c(m, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: u.Color,
        },
      }));
  });
export { h as n, m as t };
//# sourceMappingURL=ZpMbXYM0K.BghxFrXN.mjs.map
