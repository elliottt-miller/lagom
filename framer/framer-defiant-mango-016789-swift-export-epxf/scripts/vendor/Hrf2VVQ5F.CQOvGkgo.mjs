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
      (d = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 25 C 0 11.193 11.193 0 25 0 L 75 0 C 88.807 0 100 11.193 100 25 L 100 75 C 100 88.807 88.807 100 75 100 L 25 100 C 11.193 100 0 88.807 0 75 Z M 66.5 75 C 68.078 75 69.521 74.108 70.227 72.697 C 70.933 71.285 70.78 69.596 69.833 68.333 L 49 41.667 C 48.209 40.681 47.014 40.107 45.75 40.107 C 44.486 40.107 43.291 40.681 42.5 41.667 L 21.917 68.333 C 20.97 69.596 20.817 71.285 21.523 72.697 C 22.229 74.108 23.672 75 25.25 75 Z M 62.5 27.083 C 62.5 32.836 67.164 37.5 72.917 37.5 C 78.67 37.5 83.333 32.836 83.333 27.083 C 83.333 21.33 78.67 16.667 72.917 16.667 C 67.164 16.667 62.5 21.33 62.5 27.083 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="100px" id="fW412M7Ut" width="100px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
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
            className: o(`framer-yRL2U`, r),
            layoutId: a,
            ref: t,
            style: { "--118a55": c, ...n },
          });
        }),
        [
          `.framer-yRL2U { -webkit-mask: ${d}; aspect-ratio: 1; background-color: var(--118a55); mask: ${d}; width: 100px; }`,
        ],
        `framer-yRL2U`
      )),
      (m.displayName = `Image`),
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
//# sourceMappingURL=Hrf2VVQ5F.CQOvGkgo.mjs.map
