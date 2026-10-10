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
  B as h,
  Et as ee,
  It as g,
  J as _,
  K as v,
  L as y,
  Lt as b,
  M as x,
  N as S,
  P as C,
  Ut as w,
  _t as T,
  at as E,
  et as D,
  h as O,
  ht as k,
  i as A,
  k as j,
  o as M,
  q as N,
  zt as P,
} from "./framer.zRtTBSC3.mjs";
import { i as F, n as I, r as L, t as R } from "./amNEcipQY.BtEVe7io.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  V,
  H,
  U,
  W,
  G,
  K,
  te,
  ne,
  q,
  re = e(() => {
    (s(),
      D(),
      m(),
      t(),
      (B = [`Urs_KmaLX`, `K6QRy3tH7`]),
      (V = `framer-9eBBt`),
      (H = { K6QRy3tH7: `framer-v-1de3l6k`, Urs_KmaLX: `framer-v-4oizsp` }),
      (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (W = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (G = { Closed: `Urs_KmaLX`, Open: `K6QRy3tH7` }),
      (K = d.create(r)),
      (te = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: G[r.variant] ?? r.variant ?? `Urs_KmaLX`,
      })),
      (ne = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = b(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: c } = ee(),
            f = T(),
            { style: m, className: h, layoutId: v, variant: b, ...x } = te(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: A,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = g({
              cycleOrder: B,
              defaultVariant: `Urs_KmaLX`,
              ref: i,
              variant: b,
              variantClassNames: H,
            }),
            P = ne(e, N),
            { activeVariantCallback: F, delay: I } = k(S),
            L = F(async (...e) => {
              (j({ isPressed: !1 }), M(`K6QRy3tH7`));
            }),
            R = F(async (...e) => {
              (j({ isPressed: !1 }), M(`Urs_KmaLX`));
            }),
            G = y(V),
            q = () => S !== `K6QRy3tH7`,
            re = () => S === `K6QRy3tH7`;
          return l(p, {
            id: v ?? a,
            children: l(K, {
              animate: N,
              initial: !1,
              children: l(W, {
                value: U,
                children: u(d.div, {
                  ...x,
                  ...E,
                  className: y(G, `framer-4oizsp`, h, C),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: P,
                  layoutId: `Urs_KmaLX`,
                  onTap: L,
                  ref: i,
                  style: { ...m },
                  ...z({ K6QRy3tH7: { "data-framer-name": `Open`, onTap: R } }, S, D),
                  children: [
                    q() &&
                      l(O, {
                        as: `figure`,
                        background: {
                          alt: `Closed Box Illustration`,
                          fit: `fill`,
                          intrinsicHeight: 1728,
                          intrinsicWidth: 2448,
                          loading: _(
                            (f?.y || 0) +
                              0 +
                              (((f?.height || 42.5) -
                                0 -
                                (Math.max(0, ((f?.height || 42.5) - 0 - 0) / 1) * 1 + 0)) /
                                2 +
                                0 +
                                0)
                          ),
                          pixelHeight: 1728,
                          pixelWidth: 2448,
                          sizes: f?.width || `100vw`,
                          src: `../../assets/images/D6NkFPuo8d4TEmjIyT3KDPlVDw-e53e13.png`,
                          srcSet: `../../assets/images/D6NkFPuo8d4TEmjIyT3KDPlVDw.png 512w,../../assets/images/D6NkFPuo8d4TEmjIyT3KDPlVDw-da6d07.png 1024w,../../assets/images/D6NkFPuo8d4TEmjIyT3KDPlVDw-04cecd.png 2048w,../../assets/images/D6NkFPuo8d4TEmjIyT3KDPlVDw-e53e13.png 2448w`,
                        },
                        className: `framer-1cbwaar`,
                        "data-framer-name": `Closed`,
                        draggable: `false`,
                        layoutDependency: P,
                        layoutId: `sbzJSzoo6`,
                        style: { filter: `grayscale(1)`, WebkitFilter: `grayscale(1)` },
                      }),
                    re() &&
                      l(O, {
                        as: `figure`,
                        background: {
                          alt: `Open Box Illustration`,
                          fit: `fill`,
                          intrinsicHeight: 1728,
                          intrinsicWidth: 2448,
                          pixelHeight: 1728,
                          pixelWidth: 2448,
                          src: `../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-dc9a73.png`,
                          srcSet: `../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s.png 512w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-d891b9.png 1024w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-f289dc.png 2048w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-dc9a73.png 2448w`,
                        },
                        className: `framer-1a61r8o`,
                        "data-framer-name": `Open`,
                        draggable: `false`,
                        layoutDependency: P,
                        layoutId: `damPAxZ27`,
                        style: { filter: `grayscale(0)`, WebkitFilter: `grayscale(0)` },
                        ...z(
                          {
                            K6QRy3tH7: {
                              background: {
                                alt: `Open Box Illustration`,
                                fit: `fill`,
                                intrinsicHeight: 1728,
                                intrinsicWidth: 2448,
                                loading: _((f?.y || 0) + 0),
                                pixelHeight: 1728,
                                pixelWidth: 2448,
                                sizes: f?.width || `100vw`,
                                src: `../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-dc9a73.png`,
                                srcSet: `../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s.png 512w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-d891b9.png 1024w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-f289dc.png 2048w,../../assets/images/9shKdUJnYLbJBUHmdJrBFVzkA4s-dc9a73.png 2448w`,
                              },
                            },
                          },
                          S,
                          D
                        ),
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-9eBBt.framer-1p8v5n0, .framer-9eBBt .framer-1p8v5n0 { display: block; }`,
          `.framer-9eBBt.framer-4oizsp { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 43px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 60px; }`,
          `.framer-9eBBt .framer-1cbwaar { -webkit-user-select: none; flex: 1 0 0px; height: 1px; overflow: visible; position: relative; user-select: none; width: 100%; }`,
          `.framer-9eBBt .framer-1a61r8o { -webkit-user-select: none; flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; user-select: none; width: 100%; z-index: 1; }`,
        ],
        `framer-9eBBt`
      )),
      (q.displayName = `Shoe Box Toggle`),
      (q.defaultProps = { height: 42.5, width: 60 }),
      C(q, {
        variant: {
          options: [`Urs_KmaLX`, `K6QRy3tH7`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      S(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ae,
  oe,
  se,
  ce,
  le,
  ue,
  J,
  de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  Y,
  X,
  ve = e(() => {
    (s(),
      D(),
      m(),
      t(),
      F(),
      re(),
      (ae = v(q)),
      (oe = w(P(j))),
      (se = [`wsV422pGM`, `uKFHKrul2`]),
      (ce = `framer-gOi2b`),
      (le = { uKFHKrul2: `framer-v-4ywfv9`, wsV422pGM: `framer-v-sc4ocn` }),
      E(),
      (ue = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (de = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.6, type: `spring` },
        x: 0,
        y: 0,
      }),
      (fe = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (pe = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (me = { Closed: `wsV422pGM`, Open: `uKFHKrul2` }),
      (he = d.create(r)),
      (ge = ({ answer: e, click: t, height: n, id: r, question: i, width: a, ...o }) => ({
        ...o,
        e7dEXJOCV:
          e ??
          o.e7dEXJOCV ??
          `We accept 1 week returns and refunds as well. Any case after that will not be considered.`,
        G3LfTsfet: i ?? o.G3LfTsfet ?? `What does the return & refund policy look like?`,
        j8hwokujt: t ?? o.j8hwokujt,
        variant: me[o.variant] ?? o.variant ?? `wsV422pGM`,
      })),
      (_e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = b(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: f } = ee(),
            m = T(),
            {
              style: h,
              className: _,
              layoutId: v,
              variant: b,
              G3LfTsfet: S,
              e7dEXJOCV: C,
              j8hwokujt: w,
              ...E
            } = ge(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: F,
              setGestureState: I,
              setVariant: L,
              variants: z,
            } = g({
              cycleOrder: se,
              defaultVariant: `wsV422pGM`,
              ref: a,
              variant: b,
              variantClassNames: le,
            }),
            B = _e(e, z),
            { activeVariantCallback: V, delay: H } = k(D),
            U = V(async (...e) => {
              if ((I({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
              L(`uKFHKrul2`);
            }),
            W = V(async (...e) => {
              if ((I({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
              L(`wsV422pGM`);
            }),
            G = y(ce, R),
            K = () => D === `uKFHKrul2`;
          return l(p, {
            id: v ?? s,
            children: l(he, {
              animate: z,
              initial: !1,
              children: l(pe, {
                value: ue,
                children: u(d.div, {
                  ...E,
                  ...N,
                  className: y(G, `framer-sc4ocn`, _, O),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: B,
                  layoutId: `wsV422pGM`,
                  onTap: U,
                  ref: a,
                  style: {
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(20px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...h,
                  },
                  ...ie({ uKFHKrul2: { "data-framer-name": `Open`, onTap: W } }, D, P),
                  children: [
                    l(A, {
                      height: 43,
                      width: `50px`,
                      y: (m?.y || 0) + 18,
                      children: l(x, {
                        className: `framer-vj7ivr-container`,
                        layoutDependency: B,
                        layoutId: `XmfSZ3MLR-container`,
                        nodeId: `XmfSZ3MLR`,
                        rendersWithMotion: !0,
                        scopeId: `u1yOEy5ya`,
                        children: l(q, {
                          height: `100%`,
                          id: `XmfSZ3MLR`,
                          layoutId: `XmfSZ3MLR`,
                          style: { height: `100%`, width: `100%` },
                          variant: J(`Urs_KmaLX`),
                          width: `100%`,
                          ...ie({ uKFHKrul2: { variant: J(`K6QRy3tH7`) } }, D, P),
                        }),
                      }),
                    }),
                    u(d.div, {
                      className: `framer-1ta5z3d`,
                      "data-framer-name": `Text`,
                      layoutDependency: B,
                      layoutId: `p7IC8IqLg`,
                      children: [
                        l(j, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(d.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlERTBMQ0FpZDJkb2RDSWdOVFV3`,
                                "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                "--framer-font-size": `15px`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 14, "wght" 550)`,
                                "--framer-letter-spacing": `-0.02em`,
                                "--framer-line-height": `1.5em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0)))`,
                              },
                              children: `What does the return & refund policy look like?`,
                            }),
                          }),
                          className: `framer-1s3nm6c`,
                          fonts: [`Inter-Variable`],
                          layoutDependency: B,
                          layoutId: `qXqk3xYeU`,
                          style: {
                            "--extracted-2gg91v": `"opsz" 14, "wght" 550`,
                            "--extracted-r6o4lv": `var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: S,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        K() &&
                          l(oe, {
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            animate: de,
                            children: l(r, {
                              children: l(d.p, {
                                className: `framer-styles-preset-9tj2n0`,
                                "data-styles-preset": `amNEcipQY`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))`,
                                },
                                children: `We accept 1 week returns and refunds as well. Any case after that will not be considered.`,
                              }),
                            }),
                            className: `framer-k81muf`,
                            "data-framer-appear-id": `k81muf`,
                            fonts: [`Inter`],
                            initial: fe,
                            layoutDependency: B,
                            layoutId: `YFR1O1RsU`,
                            optimized: !0,
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
          `.framer-gOi2b.framer-18nodmk, .framer-gOi2b .framer-18nodmk { display: block; }`,
          `.framer-gOi2b.framer-sc4ocn { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 18px; position: relative; width: 800px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-gOi2b .framer-vj7ivr-container { aspect-ratio: 1.3953488372093024 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 36px); position: relative; width: 50px; }`,
          `.framer-gOi2b .framer-1ta5z3d { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-gOi2b .framer-1s3nm6c, .framer-gOi2b .framer-k81muf { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          ...I,
        ],
        `framer-gOi2b`
      )),
      (Y.displayName = `FAQ Accordion`),
      (Y.defaultProps = { height: 72, width: 800 }),
      C(Y, {
        variant: {
          options: [`wsV422pGM`, `uKFHKrul2`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: M.Enum,
        },
        G3LfTsfet: {
          defaultValue: `What does the return & refund policy look like?`,
          displayTextArea: !0,
          title: `Question`,
          type: M.String,
        },
        onG3LfTsfetChange: { changes: `G3LfTsfet`, type: M.ChangeHandler },
        e7dEXJOCV: {
          defaultValue: `We accept 1 week returns and refunds as well. Any case after that will not be considered.`,
          displayTextArea: !0,
          title: `Answer`,
          type: M.String,
        },
        one7dEXJOCVChange: { changes: `e7dEXJOCV`, type: M.ChangeHandler },
        j8hwokujt: { title: `Click`, type: M.EventHandler },
      }),
      (X = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      S(
        Y,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: X,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: X,
                weight: `400`,
              },
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
          ...ae,
          ...N(L),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([h(q, {}, t)])) }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ye,
  be,
  xe,
  Se,
  Ce,
  Q,
  we,
  Te,
  Ee,
  De,
  Oe,
  $,
  ke = e(() => {
    (s(),
      D(),
      m(),
      t(),
      ve(),
      (ye = v(Y)),
      (be = [`Eb3YZKRF7`, `SG8QZ8A7e`, `zCo_yt8Fi`, `PhujRBMsa`, `UqjXqlYPI`, `R3Di7TxQg`]),
      (xe = `framer-Nefcd`),
      (Se = {
        Eb3YZKRF7: `framer-v-1ep2ull`,
        PhujRBMsa: `framer-v-mcrzm`,
        R3Di7TxQg: `framer-v-u0vnhe`,
        SG8QZ8A7e: `framer-v-17zuurc`,
        UqjXqlYPI: `framer-v-1owsitk`,
        zCo_yt8Fi: `framer-v-egttx8`,
      }),
      (Ce = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (we = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (Te = {
        "1 Open": `Eb3YZKRF7`,
        "2 Open": `SG8QZ8A7e`,
        "3 Open": `zCo_yt8Fi`,
        "4 Open": `PhujRBMsa`,
        "5 Open": `UqjXqlYPI`,
        "6 Open": `R3Di7TxQg`,
      }),
      (Ee = d.create(r)),
      (De = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Te[r.variant] ?? r.variant ?? `Eb3YZKRF7`,
      })),
      (Oe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = b(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: c } = ee(),
            f = T(),
            { style: m, className: h, layoutId: _, variant: v, ...b } = De(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = g({
              cycleOrder: be,
              defaultVariant: `Eb3YZKRF7`,
              ref: i,
              variant: v,
              variantClassNames: Se,
            }),
            P = Oe(e, N),
            { activeVariantCallback: F, delay: I } = k(S),
            L = F(async (...e) => {
              M(`Eb3YZKRF7`);
            }),
            R = F(async (...e) => {
              M(`SG8QZ8A7e`);
            }),
            z = F(async (...e) => {
              M(`zCo_yt8Fi`);
            }),
            B = F(async (...e) => {
              M(`PhujRBMsa`);
            }),
            V = F(async (...e) => {
              M(`UqjXqlYPI`);
            }),
            H = F(async (...e) => {
              M(`R3Di7TxQg`);
            }),
            U = y(xe);
          return l(p, {
            id: _ ?? a,
            children: l(Ee, {
              animate: N,
              initial: !1,
              children: l(we, {
                value: Ce,
                children: u(d.div, {
                  ...b,
                  ...E,
                  className: y(U, `framer-1ep2ull`, h, C),
                  "data-framer-name": `1 Open`,
                  layoutDependency: P,
                  layoutId: `Eb3YZKRF7`,
                  ref: i,
                  style: { ...m },
                  ...Z(
                    {
                      PhujRBMsa: { "data-framer-name": `4 Open` },
                      R3Di7TxQg: { "data-framer-name": `6 Open` },
                      SG8QZ8A7e: { "data-framer-name": `2 Open` },
                      UqjXqlYPI: { "data-framer-name": `5 Open` },
                      zCo_yt8Fi: { "data-framer-name": `3 Open` },
                    },
                    S,
                    D
                  ),
                  children: [
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 0,
                      children: l(x, {
                        className: `framer-13ga07f-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `rXPvfDpeo-container`,
                        nodeId: `rXPvfDpeo`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Yep — we ship worldwide. Delivery times and shipping costs are calculated at checkout based on your location.`,
                          G3LfTsfet: `Do you ship internationally?`,
                          height: `100%`,
                          id: `rXPvfDpeo`,
                          j8hwokujt: L,
                          layoutId: `rXPvfDpeo`,
                          style: { width: `100%` },
                          variant: Q(`uKFHKrul2`),
                          width: `100%`,
                          ...Z(
                            {
                              PhujRBMsa: { variant: Q(`wsV422pGM`) },
                              R3Di7TxQg: { variant: Q(`wsV422pGM`) },
                              SG8QZ8A7e: { variant: Q(`wsV422pGM`) },
                              UqjXqlYPI: { variant: Q(`wsV422pGM`) },
                              zCo_yt8Fi: { variant: Q(`wsV422pGM`) },
                            },
                            S,
                            D
                          ),
                        }),
                      }),
                    }),
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 82,
                      children: l(x, {
                        className: `framer-zx3t32-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `hORHtCZQ1-container`,
                        nodeId: `hORHtCZQ1`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Each product page includes a detailed sizing guide to help you find your perfect fit. If you’re between sizes, we usually recommend sizing up.`,
                          G3LfTsfet: `How do I find the right size?`,
                          height: `100%`,
                          id: `hORHtCZQ1`,
                          j8hwokujt: R,
                          layoutId: `hORHtCZQ1`,
                          style: { width: `100%` },
                          variant: Q(`wsV422pGM`),
                          width: `100%`,
                          ...Z({ SG8QZ8A7e: { j8hwokujt: void 0, variant: Q(`uKFHKrul2`) } }, S, D),
                        }),
                      }),
                    }),
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 164,
                      children: l(x, {
                        className: `framer-1yiq6g6-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `IoWNlPUCm-container`,
                        nodeId: `IoWNlPUCm`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Most of our sneakers are designed to be worn by everyone. Size conversions are available directly on the product page.`,
                          G3LfTsfet: `Are your sneakers unisex?`,
                          height: `100%`,
                          id: `IoWNlPUCm`,
                          j8hwokujt: z,
                          layoutId: `IoWNlPUCm`,
                          style: { width: `100%` },
                          variant: Q(`wsV422pGM`),
                          width: `100%`,
                          ...Z({ zCo_yt8Fi: { j8hwokujt: void 0, variant: Q(`uKFHKrul2`) } }, S, D),
                        }),
                      }),
                    }),
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 246,
                      children: l(x, {
                        className: `framer-1ssnzgn-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `zDSbTCn0_-container`,
                        nodeId: `zDSbTCn0_`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Absolutely. We offer easy returns and exchanges within 14 days of delivery, as long as the sneakers are unworn and in original condition.`,
                          G3LfTsfet: `Can I return or exchange my order?`,
                          height: `100%`,
                          id: `zDSbTCn0_`,
                          j8hwokujt: B,
                          layoutId: `zDSbTCn0_`,
                          style: { width: `100%` },
                          variant: Q(`wsV422pGM`),
                          width: `100%`,
                          ...Z({ PhujRBMsa: { j8hwokujt: void 0, variant: Q(`uKFHKrul2`) } }, S, D),
                        }),
                      }),
                    }),
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 328,
                      children: l(x, {
                        className: `framer-jpvwnb-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `UYWQJ5bqz-container`,
                        nodeId: `UYWQJ5bqz`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Once your order ships, you’ll receive a tracking link via email so you can follow it every step of the way.`,
                          G3LfTsfet: `How can I track my order?`,
                          height: `100%`,
                          id: `UYWQJ5bqz`,
                          j8hwokujt: V,
                          layoutId: `UYWQJ5bqz`,
                          style: { width: `100%` },
                          variant: Q(`wsV422pGM`),
                          width: `100%`,
                          ...Z({ UqjXqlYPI: { j8hwokujt: void 0, variant: Q(`uKFHKrul2`) } }, S, D),
                        }),
                      }),
                    }),
                    l(A, {
                      height: 72,
                      width: f?.width || `100vw`,
                      y: (f?.y || 0) + 0 + 410,
                      children: l(x, {
                        className: `framer-1khdv2f-container`,
                        layout: `position`,
                        layoutDependency: P,
                        layoutId: `Tf51CoJC8-container`,
                        nodeId: `Tf51CoJC8`,
                        rendersWithMotion: !0,
                        scopeId: `ArkBx20pQ`,
                        children: l(Y, {
                          e7dEXJOCV: `Always. Every pair is carefully sourced and quality-checked to ensure authenticity and premium condition.`,
                          G3LfTsfet: `Are the sneakers authentic?`,
                          height: `100%`,
                          id: `Tf51CoJC8`,
                          j8hwokujt: H,
                          layoutId: `Tf51CoJC8`,
                          style: { width: `100%` },
                          variant: Q(`wsV422pGM`),
                          width: `100%`,
                          ...Z({ R3Di7TxQg: { j8hwokujt: void 0, variant: Q(`uKFHKrul2`) } }, S, D),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Nefcd.framer-8vojrc, .framer-Nefcd .framer-8vojrc { display: block; }`,
          `.framer-Nefcd.framer-1ep2ull { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-Nefcd .framer-13ga07f-container, .framer-Nefcd .framer-zx3t32-container, .framer-Nefcd .framer-1yiq6g6-container, .framer-Nefcd .framer-1ssnzgn-container, .framer-Nefcd .framer-jpvwnb-container, .framer-Nefcd .framer-1khdv2f-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ],
        `framer-Nefcd`
      )),
      ($.displayName = `FAQ's`),
      ($.defaultProps = { height: 513.5, width: 600 }),
      C($, {
        variant: {
          options: [`Eb3YZKRF7`, `SG8QZ8A7e`, `zCo_yt8Fi`, `PhujRBMsa`, `UqjXqlYPI`, `R3Di7TxQg`],
          optionTitles: [`1 Open`, `2 Open`, `3 Open`, `4 Open`, `5 Open`, `6 Open`],
          title: `Variant`,
          type: M.Enum,
        },
      }),
      S($, [{ explicitInter: !0, fonts: [] }, ...ye], { supportsExplicitInterCodegen: !0 }),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([h(Y, {}, t)])) }));
  });
export { ke as n, $ as t };
//# sourceMappingURL=ArkBx20pQ.BU-JxVzl.mjs.map
