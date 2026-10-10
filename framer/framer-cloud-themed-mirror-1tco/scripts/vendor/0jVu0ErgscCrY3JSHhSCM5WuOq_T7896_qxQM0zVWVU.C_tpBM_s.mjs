import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  M as n,
  N as r,
  T as i,
  b as a,
  c as o,
  m as s,
  s as c,
  u as l,
  v as u,
  x as ee,
} from "./react.DJ2-MjhO.mjs";
import { P as d, i as te, o as ne, t as f } from "./motion.Bn11pmd7.mjs";
import {
  E as p,
  G as m,
  L as h,
  T as g,
  _ as re,
  ct as ie,
  ft as ae,
  i as _,
  it as oe,
  j as v,
  k as y,
  l as b,
  n as x,
  pt as se,
  r as S,
  st as ce,
  ut as C,
  wt as le,
  yt as w,
} from "./framer.CS_JK_Iv.mjs";
import { d as T, l as E } from "./framerauth.DCor1uou.mjs";
import { i as D, n as O, o as ue, r as k, t as A } from "./HgF6iJ0ds.uditUfiW.mjs";
import de, { t as fe } from "./Z8aXb-q5-fUi7wRbexJPWbViqp96h05wgULGa9IdWuQ.Bd8UBi5x.mjs";
var j,
  M,
  N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (o(),
      t(),
      m(),
      E(),
      ue(),
      (j = [
        {
          displayName: `Email`,
          name: `email`,
          type: `string`,
          format: `email`,
          required: !0,
          overridable: !1,
          placeholder: `Email`,
          render: !0,
          hidden: !1,
        },
      ]),
      (M = `forgot_password`),
      (N = `Send Reset Email`),
      (P = `${M}_button_label`),
      (F = w(function ({ ...e }) {
        let [t, n] = u(j),
          i = r(() => ({ ...e.button, label: e.button[P] }), [e.button, e.button[P]]);
        a(() => {
          if (e.inputFields) {
            let t = [];
            (j.forEach((n, r) => {
              let i = I(n.name);
              if (!(i in e.inputFields)) return;
              let a = e.inputFields[i],
                o = a.render || !0,
                s = a.hidden || !1,
                c = a.displayName,
                l = c;
              o === !0 && t.push({ ...n, hidden: s, displayName: c, placeholder: l });
            }),
              n(t));
          }
        }, [void 0, e.inputFields]);
        let o = async (e) => {
          let t = await T(e);
          return t.error
            ? { ok: !1, message: t.error.message }
            : { ok: !0, message: t.data?.message || `Email instructions sent.` };
        };
        return c(k, { ...e, button: i, fields: t, onSubmit: o });
      }, [])),
      (I = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (L = {}),
      j.forEach((e, t) => {
        let n = I(e.name);
        L[n] = {
          title: `${e.displayName}`,
          type: _.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: _.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: _.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: _.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      p(F, {
        ...D,
        inputFields: { title: `Inputs`, type: _.Object, controls: L },
        link: { title: `Redirect`, type: _.Link },
        button: {
          ...D.button,
          controls: {
            ...D.button.controls,
            label: void 0,
            [P]: { ...D.button.controls.label, defaultValue: N },
          },
        },
      }),
      (F.defaultProps = { ...k.defaultProps, ...F.defaultProps }));
  }),
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $;
e(() => {
  (o(),
    m(),
    f(),
    t(),
    R(),
    O(),
    fe(),
    (z = h(F)),
    (B = h(A)),
    (V = le(d.div)),
    (H = {
      gcpmdFfbK: `(min-width: 810px) and (max-width: 1259.98px)`,
      hwiWrV9Qm: `(min-width: 1260px)`,
      jKZC1Mx8t: `(max-width: 809.98px)`,
    }),
    (U = []),
    (W = `framer-1eh07`),
    (G = {
      gcpmdFfbK: `framer-v-rwirf4`,
      hwiWrV9Qm: `framer-v-ub3c3i`,
      jKZC1Mx8t: `framer-v-1pwe6uz`,
    }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (J = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 150,
    }),
    (Y = { Desktop: `hwiWrV9Qm`, Phone: `jKZC1Mx8t`, Tablet: `gcpmdFfbK` }),
    (X = ({ value: e }) =>
      C()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `hwiWrV9Qm`,
    })),
    (Q = w(
      s(function (e, t) {
        let a = ee(null),
          o = t ?? a,
          s = i(),
          { activeLocale: u, setLocale: f } = ae(),
          p = oe(),
          { style: m, className: h, layoutId: g, variant: _, ...v } = Z(e);
        se(r(() => de({}, u), [u]));
        let [C, le] = ie(_, H, !1),
          w = y(W),
          T = n(b)?.isLayoutTemplate,
          E = !!n(ne)?.transition?.layout,
          D = K(T, E);
        return (
          ce({}),
          c(b.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Y,
              primaryVariantId: `hwiWrV9Qm`,
              variantClassNames: G,
            },
            children: l(te, {
              id: g ?? s,
              children: [
                c(X, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                c(d.div, {
                  ...v,
                  className: y(w, `framer-ub3c3i`, h),
                  ref: o,
                  style: { ...m },
                  children: l(V, {
                    animate: q,
                    className: `framer-pgm1kj`,
                    "data-framer-appear-id": `pgm1kj`,
                    initial: J,
                    layout: D,
                    optimized: !0,
                    children: [
                      c(`div`, {
                        className: `framer-yr210p`,
                        "data-border": !0,
                        "data-framer-name": `Service Card Wrapper`,
                        children: c(`div`, {
                          className: `framer-5q9hzs`,
                          children: c(x, {
                            children: c(S, {
                              className: `framer-1brqeh8-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `sedjWYp9y`,
                              scopeId: `koM6IndlE`,
                              children: c(F, {
                                button: {
                                  align: `stretch`,
                                  borderObject: {
                                    borderColor: `rgba(200, 200, 200, 0.5)`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                  },
                                  borderRadius: `10px`,
                                  buttonFont: {
                                    fontFamily: `"Funnel Display", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 500,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  buttonPadding: `20px 30px 20px 30px`,
                                  buttonShadow: ``,
                                  color: `var(--token-5ed62a7a-86a8-40f1-be1b-c777c2c91cc8, rgb(255, 255, 255))`,
                                  fill: `var(--token-4f27970a-6a91-4da2-b1a8-401bbb119321, rgb(41, 41, 41))`,
                                  forgot_password_button_label: `Send Reset Email`,
                                  shouldAppear: !0,
                                },
                                gap: 16,
                                height: `100%`,
                                id: `sedjWYp9y`,
                                input: {
                                  borderObject: {
                                    borderColor: `rgb(206, 212, 218)`,
                                    borderWidth: 1,
                                  },
                                  borderRadius: `10px`,
                                  color: `rgb(0, 0, 0)`,
                                  fill: `rgb(255, 255, 255)`,
                                  fixedHeight: 50,
                                  focusObject: {
                                    focusColor: `var(--token-98bdbbdf-860d-46ce-a5fe-954f3944e402, rgb(0, 148, 247))`,
                                    focusWidthFrom: 0,
                                    focusWidthTo: 1,
                                  },
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  height: !0,
                                  padding: `16px`,
                                  placeholderColor: `rgb(136, 143, 159)`,
                                  shadowObject: ``,
                                },
                                inputFields: { email: { displayName: `Email` } },
                                label: {
                                  borderRadius: `0px`,
                                  color: `rgb(102, 102, 102)`,
                                  display: !1,
                                  displayAsterix: !1,
                                  fill: `rgba(0, 0, 0, 0)`,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  padding: `0px 0px 18px 0px`,
                                  shadowObject: ``,
                                },
                                layoutId: `sedjWYp9y`,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                      c(re, {
                        breakpoint: C,
                        overrides: {
                          gcpmdFfbK: { y: (p?.y || 0) + 0 + 0 + 100 + 122 },
                          jKZC1Mx8t: { y: (p?.y || 0) + 0 + 0 + 80 + 122 },
                        },
                        children: c(x, {
                          height: 24,
                          width: `calc(${p?.width || `100vw`} - 60px)`,
                          y: (p?.y || 0) + 0 + 0 + 130 + 122,
                          children: c(S, {
                            className: `framer-c4qbx0-container`,
                            nodeId: `LPewuf0gI`,
                            scopeId: `koM6IndlE`,
                            children: c(A, {
                              height: `100%`,
                              id: `LPewuf0gI`,
                              layoutId: `LPewuf0gI`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-1eh07.framer-l100q9, .framer-1eh07 .framer-l100q9 { display: block; }`,
        `.framer-1eh07.framer-ub3c3i { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-1eh07 .framer-pgm1kj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 30px 130px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-1eh07 .framer-yr210p { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-1eh07 .framer-5q9hzs { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-1eh07 .framer-1brqeh8-container, .framer-1eh07 .framer-c4qbx0-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-1eh07[data-border="true"]::after, .framer-1eh07 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-1eh07.framer-ub3c3i { height: 1671px; width: 810px; } .framer-1eh07 .framer-pgm1kj { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-1eh07.framer-ub3c3i { height: 1696px; width: 390px; } .framer-1eh07 .framer-pgm1kj { padding: 80px 30px 80px 30px; }}`,
      ],
      `framer-1eh07`
    )),
    (Q.displayName = `Sign In`),
    (Q.defaultProps = { height: 2166.8, width: 1260 }),
    g(
      Q,
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
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYqGPXXcVwIZDKFA.woff2`,
              weight: `500`,
            },
          ],
        },
        ...z,
        ...B,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(A, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerkoM6IndlE`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"gcpmdFfbK":{"layout":["fixed","fixed"]},"jKZC1Mx8t":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicHeight: `2166.8`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1260`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, U as queryParamNames };
//# sourceMappingURL=0jVu0ErgscCrY3JSHhSCM5WuOq_T7896_qxQM0zVWVU.C_tpBM_s.mjs.map
