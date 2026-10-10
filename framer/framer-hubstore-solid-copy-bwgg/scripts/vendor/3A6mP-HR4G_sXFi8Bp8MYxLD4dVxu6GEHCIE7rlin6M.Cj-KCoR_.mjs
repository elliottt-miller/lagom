import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  I as n,
  L as r,
  N as i,
  P as a,
  R as o,
  j as s,
  l as c,
  s as l,
  u,
  v as d,
  x as ee,
} from "./react.ClsXD4bF.mjs";
import { a as te, r as ne, t as re, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  At as p,
  F as m,
  L as h,
  M as g,
  O as _,
  Ot as v,
  S as y,
  U as b,
  W as x,
  Z as S,
  _t as ie,
  a as ae,
  bt as oe,
  f as se,
  ft as ce,
  gt as le,
  ht as ue,
  i as C,
  j as w,
  o as T,
  yt as de,
} from "./framer.CbUxDv78.mjs";
import { i as E, n as D, r as O, t as fe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { d as pe, p as me } from "./framerauth.Bsg5VUt2.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { i as k, n as ye, o as be, r as A, t as j } from "./Qf78XOrju.CLVgagNE.mjs";
import xe, { t as Se } from "./2-Mg-JAvtEhlU4ksEjjVX7f0J5JtnLC96jeiRTaBY7s.C3uM2WB-.mjs";
var M,
  Ce,
  N,
  P,
  F,
  I,
  L,
  we = e(() => {
    (l(),
      t(),
      S(),
      pe(),
      be(),
      (M = [
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
      (Ce = `forgot_password`),
      (N = `Send Reset Email`),
      (P = `${Ce}_button_label`),
      (F = v(function ({ ...e }) {
        let [t, r] = o(M),
          i = a(() => ({ ...e.button, label: e.button[P] }), [e.button, e.button[P]]);
        n(() => {
          if (e.inputFields) {
            let t = [];
            (M.forEach((n, r) => {
              let i = I(n.name);
              if (!(i in e.inputFields)) return;
              let a = e.inputFields[i],
                o = a.render || !0,
                s = a.hidden || !1,
                c = a.displayName,
                l = c;
              o === !0 && t.push({ ...n, hidden: s, displayName: c, placeholder: l });
            }),
              r(t));
          }
        }, [void 0, e.inputFields]);
        let s = async (e) => {
          let t = await me(e);
          return t.error
            ? { ok: !1, message: t.error.message }
            : { ok: !0, message: t.data?.message || `Email instructions sent.` };
        };
        return c(A, { ...e, button: i, fields: t, onSubmit: s });
      }, [])),
      (I = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (L = {}),
      M.forEach((e, t) => {
        let n = I(e.name);
        L[n] = {
          title: `${e.displayName}`,
          type: T.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: T.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: T.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: T.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      g(F, {
        ...k,
        inputFields: { title: `Inputs`, type: T.Object, controls: L },
        link: { title: `Redirect`, type: T.Link },
        button: {
          ...k.button,
          controls: {
            ...k.button.controls,
            label: void 0,
            [P]: { ...k.button.controls.label, defaultValue: N },
          },
        },
      }),
      (F.defaultProps = { ...A.defaultProps, ...F.defaultProps }));
  }),
  R,
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
  Te,
  X,
  Ee,
  Z,
  De,
  Oe,
  Q,
  $;
e(() => {
  (l(),
    S(),
    re(),
    t(),
    we(),
    ye(),
    he(),
    E(),
    Se(),
    (R = p(f.div)),
    (z = b(F)),
    (B = b(j)),
    (V = {
      FMouPWSgb: `(min-width: 1200px)`,
      tmUGKED_z: `(min-width: 810px) and (max-width: 1199.98px)`,
      y8NNgKtn6: `(max-width: 809.98px)`,
    }),
    (H = () => typeof document < `u`),
    (U = []),
    (W = `framer-b6QOx`),
    (G = {
      FMouPWSgb: `framer-v-1up3iwa`,
      tmUGKED_z: `framer-v-1m7j2o`,
      y8NNgKtn6: `framer-v-1ffzyb7`,
    }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -40,
      y: 0,
    }),
    (J = { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (Y = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: J,
      x: -40,
      y: 0,
    }),
    (Te = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 40,
      y: 0,
    }),
    (X = { delay: 0.1, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (Ee = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: 40,
      y: 0,
    }),
    (Z = { Desktop: `FMouPWSgb`, Phone: `y8NNgKtn6`, Tablet: `tmUGKED_z` }),
    (De = ({ value: e }) =>
      ie()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Oe = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `FMouPWSgb`,
    })),
    (Q = v(
      d(function (e, t) {
        let n = s(null),
          o = t ?? n,
          l = ee(),
          { activeLocale: d, setLocale: re } = de(),
          p = ce(),
          { style: h, className: g, layoutId: v, variant: b, ...x } = Oe(e);
        oe(a(() => xe({}, d), [d]));
        let [S, ie] = le(b, V, !1),
          w = m(W, ve, fe),
          T = i(se)?.isLayoutTemplate,
          E = !!i(te)?.transition?.layout,
          D = K(T, E),
          O = () => !H() || S !== `y8NNgKtn6`;
        return (
          ue({}),
          c(se.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `FMouPWSgb`,
              variantClassNames: G,
            },
            children: u(ne, {
              id: v ?? l,
              children: [
                c(De, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                c(f.div, {
                  ...x,
                  className: m(w, `framer-1up3iwa`, g),
                  ref: o,
                  style: { ...h },
                  children: u(f.div, {
                    className: `framer-usgvx4`,
                    "data-framer-name": `Contact Section`,
                    layout: D,
                    children: [
                      u(`div`, {
                        className: `framer-60vlcg`,
                        "data-framer-name": `Container`,
                        children: [
                          c(y, {
                            breakpoint: S,
                            overrides: {
                              tmUGKED_z: { __framer__styleAppearEffectEnabled: void 0 },
                              y8NNgKtn6: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: u(R, {
                              __framer__animate: { transition: J },
                              __framer__animateOnce: !0,
                              __framer__enter: q,
                              __framer__exit: Y,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-179u2nl`,
                              "data-framer-name": `Contact Widget Block`,
                              children: [
                                u(`div`, {
                                  className: `framer-w41rwq`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    c(_, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Forgot your password?`,
                                        }),
                                      }),
                                      className: `framer-n7p53d`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(_, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Request a link to your email to reset`,
                                        }),
                                      }),
                                      className: `framer-1hjc6kx`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                O() &&
                                  c(`div`, {
                                    className: `framer-5b0wib hidden-1ffzyb7`,
                                    "data-framer-name": `Contact Widget Grid`,
                                  }),
                              ],
                            }),
                          }),
                          c(R, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: Te,
                            __framer__exit: Ee,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-cqony9`,
                            "data-border": !0,
                            children: c(C, {
                              children: c(ae, {
                                className: `framer-1f0q23g-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `BxNDgpFWf`,
                                scopeId: `KEQJC30te`,
                                children: c(F, {
                                  button: {
                                    align: `start`,
                                    borderRadius: `80px`,
                                    buttonFont: {
                                      fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    buttonPadding: `14px`,
                                    buttonShadow: ``,
                                    color: `rgb(255, 255, 255)`,
                                    fill: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                                    forgot_password_button_label: `Send Reset Email`,
                                    shouldAppear: !0,
                                  },
                                  gap: 16,
                                  height: `100%`,
                                  id: `BxNDgpFWf`,
                                  input: {
                                    borderObject: {
                                      borderColor: `rgb(231, 231, 231)`,
                                      borderWidth: 1,
                                    },
                                    borderRadius: `8px`,
                                    color: `rgb(0, 0, 0)`,
                                    fill: `rgb(255, 255, 255)`,
                                    fixedHeight: 50,
                                    focusObject: {
                                      focusColor: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                                      focusWidthFrom: 0,
                                      focusWidthTo: 1,
                                    },
                                    font: {
                                      fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 400,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    height: !0,
                                    padding: `16px`,
                                    placeholderColor: `rgb(166, 166, 166)`,
                                    shadowObject: ``,
                                  },
                                  inputFields: { email: { displayName: `Email` } },
                                  label: {
                                    borderRadius: `0px`,
                                    color: `rgb(102, 102, 102)`,
                                    display: !0,
                                    displayAsterix: !1,
                                    fill: `rgba(0, 0, 0, 0)`,
                                    font: {
                                      fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 400,
                                      letterSpacing: `0em`,
                                      lineHeight: `1em`,
                                    },
                                    padding: `0px 0px 8px 0px`,
                                    shadowObject: ``,
                                  },
                                  layoutId: `BxNDgpFWf`,
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      c(y, {
                        breakpoint: S,
                        overrides: {
                          tmUGKED_z: { y: (p?.y || 0) + 0 + 0 + 80 + 356 },
                          y8NNgKtn6: { y: (p?.y || 0) + 0 + 0 + 60 + 498 },
                        },
                        children: c(C, {
                          height: 24,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0 + 160 + 452,
                          children: c(ae, {
                            className: `framer-1jgcvxc-container`,
                            nodeId: `lyxyWfMxK`,
                            scopeId: `KEQJC30te`,
                            children: c(j, {
                              height: `100%`,
                              id: `lyxyWfMxK`,
                              layoutId: `lyxyWfMxK`,
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
        `.framer-b6QOx.framer-9aicxr, .framer-b6QOx .framer-9aicxr { display: block; }`,
        `.framer-b6QOx.framer-1up3iwa { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-b6QOx .framer-usgvx4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-b6QOx .framer-60vlcg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-b6QOx .framer-179u2nl { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 584px; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-b6QOx .framer-w41rwq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b6QOx .framer-n7p53d, .framer-b6QOx .framer-1hjc6kx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-b6QOx .framer-5b0wib { display: grid; flex: none; gap: 80px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(10px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; min-height: 144px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-b6QOx .framer-cqony9 { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 630px; min-height: 100px; overflow: visible; padding: 32px; position: relative; width: 1px; }`,
        `.framer-b6QOx .framer-1f0q23g-container, .framer-b6QOx .framer-1jgcvxc-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...ge,
        ...D,
        `.framer-b6QOx[data-border="true"]::after, .framer-b6QOx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-b6QOx.framer-1up3iwa { width: 810px; } .framer-b6QOx .framer-usgvx4 { padding: 80px 0px 80px 0px; } .framer-b6QOx .framer-60vlcg { max-width: 990px; } .framer-b6QOx .framer-179u2nl { gap: 40px; max-width: 500px; width: 43%; } .framer-b6QOx .framer-5b0wib { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-b6QOx.framer-1up3iwa { width: 390px; } .framer-b6QOx .framer-usgvx4 { padding: 60px 0px 60px 0px; } .framer-b6QOx .framer-60vlcg { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; max-width: 620px; padding: 72px 20px 0px 20px; } .framer-b6QOx .framer-179u2nl { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 30px; max-width: unset; width: 100%; } .framer-b6QOx .framer-cqony9 { flex: none; width: 100%; }}`,
      ],
      `framer-b6QOx`
    )),
    (Q.displayName = `Sign In`),
    (Q.defaultProps = { height: 2352, width: 1200 }),
    w(
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
              cssFamilyName: `DM Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `DM Sans`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `DM Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `DM Sans`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
              weight: `500`,
            },
          ],
        },
        ...z,
        ...B,
        ...x(_e),
        ...x(O),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([h(j, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerKEQJC30te`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"tmUGKED_z":{"layout":["fixed","auto"]},"y8NNgKtn6":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2352`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, U as queryParamNames };
//# sourceMappingURL=3A6mP-HR4G_sXFi8Bp8MYxLD4dVxu6GEHCIE7rlin6M.Cj-KCoR_.mjs.map
