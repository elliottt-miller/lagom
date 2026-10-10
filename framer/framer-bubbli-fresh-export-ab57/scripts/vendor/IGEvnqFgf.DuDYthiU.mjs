import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as i,
  c as a,
  g as o,
  o as s,
  w as c,
  y as l,
} from "./react.CWoGm2_e.mjs";
import { C as u, a as d, r as f, t as p } from "./motion.DjW49AAR.mjs";
import {
  A as m,
  D as h,
  Et as g,
  P as _,
  Tt as v,
  U as y,
  X as b,
  _t as x,
  ct as S,
  j as C,
  o as w,
} from "./framer.D9PtOJZM.mjs";
import { i as T, n as E, r as D, t as O } from "./qZYHjqVrz.Co-qUMV0.mjs";
function k(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (s(),
      b(),
      p(),
      c(),
      T(),
      (A = [`Qjhs5Lyem`, `RoXn7LgPt`]),
      (j = `framer-goZgQ`),
      (M = { Qjhs5Lyem: `framer-v-1sif7ju`, RoXn7LgPt: `framer-v-m6w2la` }),
      (N = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (P = ({ value: e, children: t }) => {
        let n = r(d),
          o = e ?? n.transition,
          s = i(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
        return a(d.Provider, { value: s, children: t });
      }),
      (F = { default: `Qjhs5Lyem`, mobile: `RoXn7LgPt` }),
      (I = u.create(n)),
      (L = ({ height: e, id: t, pillColor: n, postTag: r, width: i, ...a }) => ({
        ...a,
        c8JjutPIf: r ?? a.c8JjutPIf ?? `Ecommerce`,
        uAEp1shrJ:
          n ??
          a.uAEp1shrJ ??
          `var(--token-08c0a1b2-6453-4e0b-b1db-f0593e85b925, rgb(245, 245, 245))`,
        variant: F[a.variant] ?? a.variant ?? `Qjhs5Lyem`,
      })),
      (R = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (z = g(
        o(function (e, r) {
          let i = t(null),
            o = r ?? i,
            s = l(),
            { activeLocale: c, setLocale: d } = x();
          S();
          let {
              style: p,
              className: m,
              layoutId: g,
              variant: y,
              c8JjutPIf: b,
              uAEp1shrJ: C,
              ...w
            } = L(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: D,
              gestureHandlers: F,
              gestureVariant: z,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: U,
            } = v({
              cycleOrder: A,
              defaultVariant: `Qjhs5Lyem`,
              ref: o,
              variant: y,
              variantClassNames: M,
            }),
            W = R(e, U),
            G = _(j, O);
          return a(f, {
            id: g ?? s,
            children: a(I, {
              animate: U,
              initial: !1,
              children: a(P, {
                value: N,
                children: a(u.div, {
                  ...w,
                  ...F,
                  className: _(G, `framer-1sif7ju`, m, E),
                  "data-framer-name": `default`,
                  layoutDependency: W,
                  layoutId: `Qjhs5Lyem`,
                  ref: o,
                  style: {
                    backgroundColor: C,
                    borderBottomLeftRadius: 4,
                    borderBottomRightRadius: 4,
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    ...p,
                  },
                  variants: {
                    RoXn7LgPt: {
                      borderBottomLeftRadius: 2,
                      borderBottomRightRadius: 2,
                      borderTopLeftRadius: 2,
                      borderTopRightRadius: 2,
                    },
                  },
                  ...k({ RoXn7LgPt: { "data-framer-name": `mobile` } }, T, z),
                  children: a(h, {
                    __fromCanvasComponent: !0,
                    children: a(n, {
                      children: a(u.p, {
                        className: `framer-styles-preset-1u75rap`,
                        "data-styles-preset": `qZYHjqVrz`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)))`,
                        },
                        children: `Ecommerce`,
                      }),
                    }),
                    className: `framer-umm3yo`,
                    "data-framer-name": `Title`,
                    fonts: [`Inter`],
                    layoutDependency: W,
                    layoutId: `tCvG66_OV`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                    },
                    text: b,
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-goZgQ.framer-xagrev, .framer-goZgQ .framer-xagrev { display: block; }`,
          `.framer-goZgQ.framer-1sif7ju { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 4px 8px 4px 8px; position: relative; width: min-content; }`,
          `.framer-goZgQ .framer-umm3yo { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-goZgQ.framer-v-m6w2la.framer-1sif7ju { padding: 3px 6px 3px 6px; }`,
          ...E,
        ],
        `framer-goZgQ`
      )),
      (z.displayName = `article.card-pill`),
      (z.defaultProps = { height: 29, width: 88.5 }),
      C(z, {
        variant: {
          options: [`Qjhs5Lyem`, `RoXn7LgPt`],
          optionTitles: [`default`, `mobile`],
          title: `Variant`,
          type: w.Enum,
        },
        c8JjutPIf: { defaultValue: `Ecommerce`, title: `Post Tag`, type: w.String },
        onc8JjutPIfChange: { changes: `c8JjutPIf`, type: w.ChangeHandler },
        uAEp1shrJ: {
          defaultValue: `var(--token-08c0a1b2-6453-4e0b-b1db-f0593e85b925, rgb(245, 245, 245)) /* {"name":"Sage"} */`,
          title: `Pill Color`,
          type: w.Color,
        },
      }),
      m(
        z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...y(D),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { B as n, z as t };
//# sourceMappingURL=IGEvnqFgf.DuDYthiU.mjs.map
