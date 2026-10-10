import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  j as a,
  l as o,
  s,
  v as c,
  x as l,
} from "./react.ClsXD4bF.mjs";
import { a as u, r as d, t as f, w as p } from "./motion.ClyXVVeQ.mjs";
import {
  Dt as m,
  F as h,
  M as g,
  O as _,
  Ot as v,
  W as y,
  Z as b,
  ft as x,
  j as S,
  o as C,
  yt as w,
} from "./framer.CbUxDv78.mjs";
import { i as T, n as E, r as D, t as O } from "./wEX21mXRe.BeCcrLA7.mjs";
import { i as k, n as A, r as j, t as M } from "./lV9dxehk9.1IAwn2dx.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W = e(() => {
    (s(),
      b(),
      f(),
      t(),
      k(),
      T(),
      (P = [`Glr7jJa1g`, `i__dyDbM_`, `eIPOCXCPr`, `wJw9g7kb1`]),
      (F = `framer-Q23IG`),
      (I = {
        eIPOCXCPr: `framer-v-3slr00`,
        Glr7jJa1g: `framer-v-162img1`,
        i__dyDbM_: `framer-v-18dlsyd`,
        wJw9g7kb1: `framer-v-1wfk63x`,
      }),
      (L = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (R = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (z = p.create(n)),
      (B = {
        "Light Purple": `wJw9g7kb1`,
        "Light Spring": `eIPOCXCPr`,
        Primary: `Glr7jJa1g`,
        Small: `i__dyDbM_`,
      }),
      (V = ({ badgeText: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        UuBCV5mKS: e ?? i.UuBCV5mKS ?? `Ultimate Template Library `,
        variant: B[i.variant] ?? i.variant ?? `Glr7jJa1g`,
      })),
      (H = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = v(
        c(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = l(),
            { activeLocale: c, setLocale: u } = w();
          x();
          let { style: f, className: g, layoutId: v, variant: y, UuBCV5mKS: b, ...S } = V(e),
            {
              baseVariant: C,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: D,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: B,
              variants: U,
            } = m({
              cycleOrder: P,
              defaultVariant: `Glr7jJa1g`,
              ref: i,
              variant: y,
              variantClassNames: I,
            }),
            W = H(e, U),
            G = h(F, O, M);
          return o(d, {
            id: v ?? s,
            children: o(z, {
              animate: U,
              initial: !1,
              children: o(R, {
                value: L,
                children: o(p.div, {
                  ...S,
                  ...D,
                  className: h(G, `framer-162img1`, g, T),
                  "data-framer-name": `Primary`,
                  layoutDependency: W,
                  layoutId: `Glr7jJa1g`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    ...f,
                  },
                  variants: {
                    eIPOCXCPr: {
                      backgroundColor: `var(--token-89af1331-0dee-4088-ab8b-a84565bdd274, rgb(241, 249, 231))`,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                    wJw9g7kb1: {
                      backgroundColor: `var(--token-50800878-902d-4707-83d0-c0bd60093301, rgb(241, 234, 252))`,
                      borderBottomLeftRadius: 30,
                      borderBottomRightRadius: 30,
                      borderTopLeftRadius: 30,
                      borderTopRightRadius: 30,
                    },
                  },
                  ...N(
                    {
                      eIPOCXCPr: { "data-framer-name": `Light Spring` },
                      i__dyDbM_: { "data-framer-name": `Small` },
                      wJw9g7kb1: { "data-framer-name": `Light Purple` },
                    },
                    C,
                    k
                  ),
                  children: o(_, {
                    __fromCanvasComponent: !0,
                    children: o(n, {
                      children: o(p.p, {
                        className: `framer-styles-preset-1pumtl1`,
                        "data-styles-preset": `wEX21mXRe`,
                        style: {
                          "--framer-text-alignment": `center`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                        },
                        children: `Ultimate Template Library `,
                      }),
                    }),
                    className: `framer-rwr0bl`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    layoutDependency: W,
                    layoutId: `ZkOrtTHYM`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: b,
                    variants: {
                      eIPOCXCPr: {
                        "--extracted-r6o4lv": `var(--token-326b6510-9a98-46ed-afba-a8ff0584c805, rgb(124, 174, 14))`,
                      },
                      wJw9g7kb1: {
                        "--extracted-r6o4lv": `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...N(
                      {
                        eIPOCXCPr: {
                          children: o(n, {
                            children: o(p.p, {
                              className: `framer-styles-preset-gc7lk9`,
                              "data-styles-preset": `lV9dxehk9`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-326b6510-9a98-46ed-afba-a8ff0584c805, rgb(124, 174, 14)))`,
                              },
                              children: `Ultimate Template Library `,
                            }),
                          }),
                        },
                        wJw9g7kb1: {
                          children: o(n, {
                            children: o(p.p, {
                              className: `framer-styles-preset-gc7lk9`,
                              "data-styles-preset": `lV9dxehk9`,
                              style: {
                                "--framer-text-alignment": `center`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251)))`,
                              },
                              children: `Ultimate Template Library `,
                            }),
                          }),
                        },
                      },
                      C,
                      k
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Q23IG.framer-19zxpr2, .framer-Q23IG .framer-19zxpr2 { display: block; }`,
          `.framer-Q23IG.framer-162img1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 20px 12px 20px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Q23IG .framer-rwr0bl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Q23IG.framer-162img1 { gap: 0px; } .framer-Q23IG.framer-162img1 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-Q23IG.framer-162img1 > :first-child { margin-left: 0px; } .framer-Q23IG.framer-162img1 > :last-child { margin-right: 0px; } }`,
          `.framer-Q23IG.framer-v-18dlsyd.framer-162img1 { padding: 10px 16px 10px 16px; }`,
          `.framer-Q23IG.framer-v-3slr00.framer-162img1, .framer-Q23IG.framer-v-1wfk63x.framer-162img1 { padding: 10px 20px 10px 20px; }`,
          ...E,
          ...A,
        ],
        `framer-Q23IG`
      )),
      (U.displayName = `Badge`),
      (U.defaultProps = { height: 45, width: 226 }),
      g(U, {
        variant: {
          options: [`Glr7jJa1g`, `i__dyDbM_`, `eIPOCXCPr`, `wJw9g7kb1`],
          optionTitles: [`Primary`, `Small`, `Light Spring`, `Light Purple`],
          title: `Variant`,
          type: C.Enum,
        },
        UuBCV5mKS: {
          defaultValue: `Ultimate Template Library `,
          displayTextArea: !1,
          title: `Badge Text`,
          type: C.String,
        },
      }),
      S(
        U,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...y(D),
          ...y(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { W as n, U as t };
//# sourceMappingURL=N12TUaohN.txDyUY3q.mjs.map
