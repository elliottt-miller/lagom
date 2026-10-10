import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  m as c,
  s as l,
} from "./react.D0omlcQg.mjs";
import { M as u, a as d, r as f, t as p } from "./motion.Bi2Azsus.mjs";
import {
  Et as m,
  It as h,
  L as g,
  Lt as _,
  N as v,
  P as y,
  _t as b,
  et as x,
  o as S,
} from "./framer.zRtTBSC3.mjs";
function C(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var w,
  T,
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P = e(() => {
    (s(),
      x(),
      p(),
      t(),
      (w = [`FveAb6f2W`, `I5Li6kC_5`]),
      (T = `framer-axTw0`),
      (E = { FveAb6f2W: `framer-v-zl82vu`, I5Li6kC_5: `framer-v-344k82` }),
      (D = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (O = ({ value: e, children: t }) => {
        let n = i(d),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(d.Provider, { value: o, children: t });
      }),
      (k = { 100: `FveAb6f2W`, 200: `I5Li6kC_5` }),
      (A = u.create(r)),
      (j = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: k[r.variant] ?? r.variant ?? `FveAb6f2W`,
      })),
      (M = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (N = _(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: c } = m();
          b();
          let { style: d, className: p, layoutId: _, variant: v, ...y } = j(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: k,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: F,
              setGestureState: I,
              setVariant: L,
              variants: R,
            } = h({
              cycleOrder: w,
              defaultVariant: `FveAb6f2W`,
              ref: i,
              variant: v,
              variantClassNames: E,
            }),
            z = M(e, R),
            B = g(T);
          return l(f, {
            id: _ ?? a,
            children: l(A, {
              animate: R,
              initial: !1,
              children: l(O, {
                value: D,
                children: l(u.div, {
                  ...y,
                  ...N,
                  className: g(B, `framer-zl82vu`, p, S),
                  "data-framer-name": `100`,
                  layoutDependency: z,
                  layoutId: `FveAb6f2W`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                    ...d,
                  },
                  variants: {
                    I5Li6kC_5: {
                      backgroundColor: `var(--token-fb0f7462-27b2-4a53-b10e-81b2a62b8279, rgb(204, 204, 204))`,
                    },
                  },
                  ...C({ I5Li6kC_5: { "data-framer-name": `200` } }, x, P),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-axTw0.framer-2kef09, .framer-axTw0 .framer-2kef09 { display: block; }`,
          `.framer-axTw0.framer-zl82vu { height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1072px; }`,
        ],
        `framer-axTw0`
      )),
      (N.displayName = `Separator`),
      (N.defaultProps = { height: 1, width: 1072 }),
      y(N, {
        variant: {
          options: [`FveAb6f2W`, `I5Li6kC_5`],
          optionTitles: [`100`, `200`],
          title: `Variant`,
          type: S.Enum,
        },
      }),
      v(N, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
export { P as n, N as t };
//# sourceMappingURL=BbFuZPGaK.ZVDYkDQW.mjs.map
