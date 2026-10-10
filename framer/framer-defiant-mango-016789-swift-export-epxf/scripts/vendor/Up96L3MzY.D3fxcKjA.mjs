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
  u,
} from "./react.D0omlcQg.mjs";
import { M as d, a as f, r as p, t as m } from "./motion.Bi2Azsus.mjs";
import {
  Et as h,
  It as ee,
  L as g,
  Lt as _,
  N as v,
  P as y,
  _ as b,
  _t as x,
  at as S,
  et as C,
  k as w,
  o as T,
  q as E,
} from "./framer.zRtTBSC3.mjs";
import { i as D, n as O, r as k, t as A } from "./amNEcipQY.BtEVe7io.mjs";
import { i as j, n as te, r as ne, t as re } from "./CT_DBbR5R.CmeCM4mC.mjs";
var M,
  N,
  P,
  F,
  I = e(() => {
    (s(),
      C(),
      t(),
      (M = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 49.889 1.162 L 79.1 22.039 C 83.864 25.444 86.69 30.939 86.69 36.794 C 86.69 42.649 83.864 48.144 79.1 51.549 L 49.889 72.436 M 0.009 64.527 L 0.009 9.07 C 0.009 5.673 1.907 2.561 4.927 1.006 C 7.947 -0.549 11.583 -0.286 14.347 1.688 L 53.163 29.412 C 55.548 31.114 56.964 33.864 56.964 36.794 C 56.964 39.724 55.548 42.474 53.163 44.176 L 14.338 71.891 C 11.575 73.864 7.941 74.128 4.922 72.575 C 1.902 71.023 0.003 67.913 0 64.518 Z" fill="transparent" height="73.57912869629021px" id="FyvXJoIzd" transform="translate(6.5 12.71)" width="86.69000135301116px"><path d="M 49.889 1.162 L 79.1 22.039 C 83.864 25.444 86.69 30.939 86.69 36.794 C 86.69 42.649 83.864 48.144 79.1 51.549 L 49.889 72.436 M 0.009 64.527 L 0.009 9.07 C 0.009 5.673 1.907 2.561 4.927 1.006 C 7.947 -0.549 11.583 -0.286 14.347 1.688 L 53.163 29.412 C 55.548 31.114 56.964 33.864 56.964 36.794 C 56.964 39.724 55.548 42.474 53.163 44.176 L 14.338 71.891 C 11.575 73.864 7.941 74.128 4.922 72.575 C 1.902 71.023 0.003 67.913 0 64.518 Z" fill="transparent" height="73.57912869629023px" id="B9oQB3Rao" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="13.6" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(0 0)" width="86.69000135301121px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (N = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(d.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (P = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (F = _(
        c(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = P(e);
          return l(N, {
            ...s,
            className: g(`framer-gNe9w`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-gNe9w { -webkit-mask: ${M}; aspect-ratio: 1; background-color: var(--118a55); mask: ${M}; width: 100px; }`,
        ],
        `framer-gNe9w`
      )),
      (F.displayName = `Double Play Arrow`),
      y(F, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: T.Color,
        },
      }));
  }),
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G = e(() => {
    (s(),
      C(),
      m(),
      t(),
      D(),
      j(),
      I(),
      (L = `framer-SP7OG`),
      (R = { IVEhUM0ST: `framer-v-1q50d25` }),
      S(),
      (z = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (B = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (V = d.create(r)),
      (H = ({ height: e, icon: t, id: n, tagline: r, title: i, width: a, ...o }) => ({
        ...o,
        KHTb9ulhF: r ?? o.KHTb9ulhF ?? `Three Word Tag`,
        TE5nvJBv5: t ?? o.TE5nvJBv5 ?? F,
        WCTJ1U4Cv: i ?? o.WCTJ1U4Cv ?? `Title`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = _(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: f } = h();
          x();
          let {
              style: m,
              className: _,
              layoutId: v,
              variant: y,
              WCTJ1U4Cv: S,
              KHTb9ulhF: C,
              TE5nvJBv5: T,
              ...E
            } = H(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: j,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = ee({ defaultVariant: `IVEhUM0ST`, ref: a, variant: y, variantClassNames: R }),
            F = U(e, P),
            I = g(L, re, A);
          return l(p, {
            id: v ?? s,
            children: l(V, {
              animate: P,
              initial: !1,
              children: l(B, {
                value: z,
                children: u(d.div, {
                  ...E,
                  ...j,
                  className: g(I, `framer-1q50d25`, _, O),
                  "data-framer-name": `Base`,
                  layoutDependency: F,
                  layoutId: `IVEhUM0ST`,
                  ref: a,
                  style: {
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...m,
                  },
                  children: [
                    l(b, {
                      animated: !0,
                      className: `framer-19ii2xh`,
                      Component: T,
                      layoutDependency: F,
                      layoutId: `URyoeqFIW`,
                      style: {
                        "--118a55": `var(--token-15d556db-6b65-4633-9f9e-af8ebfb82667, rgb(0, 123, 255))`,
                      },
                    }),
                    u(d.div, {
                      className: `framer-13mzfaa`,
                      "data-framer-name": `Text`,
                      layoutDependency: F,
                      layoutId: `GPWETpCIm`,
                      children: [
                        l(w, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(d.p, {
                              className: `framer-styles-preset-5rfdkx`,
                              "data-styles-preset": `CT_DBbR5R`,
                              dir: `auto`,
                              style: { "--framer-text-alignment": `left` },
                              children: `Runners`,
                            }),
                          }),
                          className: `framer-yrp85n`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `uzePeb3I2`,
                          style: { "--framer-paragraph-spacing": `0px` },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        l(w, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(d.p, {
                              className: `framer-styles-preset-9tj2n0`,
                              "data-styles-preset": `amNEcipQY`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))`,
                              },
                              children: `Sleek minimal joggers.`,
                            }),
                          }),
                          className: `framer-14qoi5z`,
                          fonts: [`Inter`],
                          layoutDependency: F,
                          layoutId: `YeWEz99qP`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: C,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-SP7OG.framer-ux3rwl, .framer-SP7OG .framer-ux3rwl { display: block; }`,
          `.framer-SP7OG.framer-1q50d25 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 44px 24px 44px 24px; position: relative; width: 200px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-SP7OG .framer-19ii2xh { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); position: relative; width: 32px; }`,
          `.framer-SP7OG .framer-13mzfaa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 1px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-SP7OG .framer-yrp85n, .framer-SP7OG .framer-14qoi5z { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          ...te,
          ...O,
        ],
        `framer-SP7OG`
      )),
      (W.displayName = `Feature Card`),
      (W.defaultProps = { height: 179, width: 200 }),
      y(W, {
        WCTJ1U4Cv: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: T.String },
        onWCTJ1U4CvChange: { changes: `WCTJ1U4Cv`, type: T.ChangeHandler },
        KHTb9ulhF: {
          defaultValue: `Three Word Tag`,
          displayTextArea: !1,
          title: `Tagline`,
          type: T.String,
        },
        onKHTb9ulhFChange: { changes: `KHTb9ulhF`, type: T.ChangeHandler },
        TE5nvJBv5: {
          defaultValue: {
            identifier: `local-module:vector/W2Un6h5Ic:default`,
            moduleId: `MzfbH6HK99UgOCNayW22`,
          },
          setModuleId: `v49rTnsQ31Y5gd6DySlU`,
          title: `Icon`,
          type: T.VectorSetItem,
        },
      }),
      v(
        W,
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
          ...E(ne),
          ...E(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  K,
  q,
  J,
  Y,
  ie = e(() => {
    (s(),
      C(),
      t(),
      (K = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g d="M 8.42 29.931 C 7.078 23.885 8.92 17.572 13.304 13.198 C 17.688 8.823 24.004 6.994 30.047 8.349 C 33.373 3.147 39.121 0 45.295 0 C 51.468 0 57.216 3.147 60.542 8.349 C 66.595 6.988 72.923 8.822 77.309 13.209 C 81.696 17.595 83.53 23.923 82.169 29.976 C 87.371 33.302 90.518 39.05 90.518 45.223 C 90.518 51.397 87.371 57.145 82.169 60.471 C 83.524 66.514 81.695 72.83 77.32 77.214 C 72.946 81.598 66.633 83.44 60.587 82.098 C 57.266 87.32 51.506 90.482 45.317 90.482 C 39.128 90.482 33.369 87.32 30.047 82.098 C 24.004 83.453 17.688 81.624 13.304 77.249 C 8.92 72.875 7.078 66.562 8.42 60.516 C 3.178 57.199 0 51.427 0 45.223 C 0 39.02 3.178 33.248 8.42 29.931 Z M 63.393 27.125 L 36.246 27.125 C 31.248 27.125 27.197 31.177 27.197 36.174 C 27.197 41.172 31.248 45.223 36.246 45.223 L 54.344 45.223 C 59.341 45.223 63.393 49.275 63.393 54.272 C 63.393 59.27 59.341 63.321 54.344 63.321 L 27.197 63.321 M 45.295 72.37 L 45.295 18.076" fill="transparent" height="90.48227480137484px" id="eyOZP9Qfo" transform="translate(4.65 4.67)" width="90.5179292074713px"><path d="M 8.42 29.931 C 7.078 23.885 8.92 17.572 13.304 13.198 C 17.688 8.823 24.004 6.994 30.047 8.349 C 33.373 3.147 39.121 0 45.295 0 C 51.468 0 57.216 3.147 60.542 8.349 C 66.595 6.988 72.923 8.822 77.309 13.209 C 81.696 17.595 83.53 23.923 82.169 29.976 C 87.371 33.302 90.518 39.05 90.518 45.223 C 90.518 51.397 87.371 57.145 82.169 60.471 C 83.524 66.514 81.695 72.83 77.32 77.214 C 72.946 81.598 66.633 83.44 60.587 82.098 C 57.266 87.32 51.506 90.482 45.317 90.482 C 39.128 90.482 33.369 87.32 30.047 82.098 C 24.004 83.453 17.688 81.624 13.304 77.249 C 8.92 72.875 7.078 66.562 8.42 60.516 C 3.178 57.199 0 51.427 0 45.223 C 0 39.02 3.178 33.248 8.42 29.931 Z" fill="transparent" height="90.48227480137484px" id="xDs_Zjk_B" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.06" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(0 0)" width="90.5179292074713px"/><path d="M 36.196 9.049 L 9.049 9.049 C 4.051 9.049 0 13.1 0 18.098 C 0 23.096 4.051 27.147 9.049 27.147 L 27.147 27.147 C 32.145 27.147 36.196 31.198 36.196 36.196 C 36.196 41.194 32.145 45.245 27.147 45.245 L 0 45.245 M 18.098 54.294 L 18.098 0" fill="transparent" height="54.294063697606504px" id="tIVPFaKQX" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.06" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(27.197 18.076)" width="36.1960424650708px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (q = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(d.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (J = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (Y = _(
        c(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = J(e);
          return l(q, {
            ...s,
            className: g(`framer-MElzM`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-MElzM { -webkit-mask: ${K}; aspect-ratio: 1; background-color: var(--118a55); mask: ${K}; width: 100px; }`,
        ],
        `framer-MElzM`
      )),
      (Y.displayName = `Dollar Badge`),
      y(Y, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: T.Color,
        },
      }));
  }),
  X,
  Z,
  Q,
  $,
  ae = e(() => {
    (s(),
      C(),
      t(),
      (X = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 89.061 C -0.002 71.842 12.644 57.235 29.687 54.773 M 61.838 65.371 C 58.375 61.512 52.601 60.477 48.261 64.01 C 43.922 67.538 43.313 73.441 46.722 77.617 C 48.642 79.972 53.214 84.103 56.826 87.255 C 58.543 88.749 59.399 89.497 60.438 89.803 C 61.319 90.066 62.353 90.066 63.238 89.803 C 64.277 89.502 65.128 88.749 66.845 87.255 C 70.457 84.103 75.029 79.972 76.954 77.617 C 80.358 73.441 79.824 67.503 75.41 64.01 C 70.997 60.517 65.297 61.517 61.838 65.371 Z M 54.426 19.791 C 54.426 30.722 45.565 39.583 34.635 39.583 C 23.704 39.583 14.844 30.722 14.844 19.791 C 14.844 8.861 23.704 0 34.635 0 C 45.565 0 54.426 8.861 54.426 19.791 Z" fill="transparent" height="90.00000061197157px" id="Vxu_FjUpC" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.9" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(10.82 5)" width="79.16528161121563px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Z = c((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? l(d.div, { ...a, layoutId: r, ref: t }) : l(`div`, { ...a, ref: t });
      })),
      (Q = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      ($ = _(
        c(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = Q(e);
          return l(Z, {
            ...s,
            className: g(`framer-YhgaI`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-YhgaI { -webkit-mask: ${X}; aspect-ratio: 1; background-color: var(--118a55); mask: ${X}; width: 100px; }`,
        ],
        `framer-YhgaI`
      )),
      ($.displayName = `User Heart`),
      y($, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: T.Color,
        },
      }));
  });
export { W as a, I as c, ie as i, ae as n, G as o, Y as r, F as s, $ as t };
//# sourceMappingURL=Up96L3MzY.D3fxcKjA.mjs.map
