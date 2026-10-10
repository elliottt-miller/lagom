import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  E as r,
  I as i,
  M as a,
  N as o,
  R as s,
  T as c,
  b as l,
  c as u,
  m as d,
  s as f,
  u as p,
  v as m,
  x as ee,
} from "./react.DJ2-MjhO.mjs";
import { P as h, i as g, o as _, t as v } from "./motion.Bn11pmd7.mjs";
import {
  E as y,
  G as b,
  L as x,
  R as S,
  T as C,
  _ as w,
  _t as te,
  b as T,
  ct as E,
  ft as D,
  i as O,
  it as ne,
  j as k,
  k as A,
  l as j,
  n as M,
  p as re,
  pt as ie,
  r as N,
  st as ae,
  ut as P,
  wt as F,
  x as oe,
  y as I,
  yt as L,
} from "./framer.CS_JK_Iv.mjs";
import { i as se, n as ce, r as le, t as ue } from "./ilN_pt0Gn.B1pfsNZa.mjs";
import { a as de, l as fe, m as pe, o as me } from "./framerauth.DCor1uou.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./Ra2J5G4be.aw5Cg2zO.mjs";
import { n as ye, t as R } from "./ActionButton.CggQ9uPg.mjs";
import { i as z, n as be, o as xe, r as B, t as V } from "./HgF6iJ0ds.uditUfiW.mjs";
import { n as Se, t as Ce } from "./GoogleRecaptcha.Owc7lyGw.mjs";
import we, { t as Te } from "./zrWF1055Lu-he8LUQ209-rOO19lOJ3KbHSsM902o9Mw.CHpQpPJY.mjs";
function Ee(e) {
  return !e || e.provider !== `google-recaptcha`
    ? !1
    : !e.protectedActions || !!e.protectedActions.signIn;
}
function De(e) {
  return e?.siteKey ?? ``;
}
function Oe() {
  let e = I.current();
  return e === I.canvas || e === I.thumbnail;
}
function ke() {
  return n !== void 0 && !!n.FramerAuth;
}
var H,
  U,
  W,
  G,
  K,
  q,
  J,
  Ae = e(() => {
    (s(),
      u(),
      r(),
      b(),
      fe(),
      xe(),
      Se(),
      (H = [
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
        {
          displayName: `Password`,
          name: `password`,
          type: `string`,
          format: `password`,
          required: !0,
          overridable: !1,
          placeholder: `Password`,
          render: !0,
          hidden: !1,
        },
      ]),
      (U = `sign_in`),
      (W = `Sign In`),
      (G = `${U}_button_label`),
      (K = L(function ({ ...e }) {
        let [n, r] = m(H),
          i = pe(),
          { project: a, fetchProject: s } = i,
          c = i.isLoading ?? i.loading,
          u = de().initializing,
          d = ee(!1),
          [p, h] = m(null),
          [g, _] = m(0),
          v = ke(),
          y = Ee(a?.captcha),
          b = De(a?.captcha),
          x = y && !b,
          S = v && !Oe(),
          C = y,
          w = S && (!!u || !!c),
          te = v && S && !u && !c && !a;
        l(() => {
          S || d.current || a || ((d.current = !0), s().catch(() => {}));
        }, [S, a, s]);
        let T = o(() => ({ ...e.button, label: e.button[G] }), [e.button, e.button[G]]);
        l(() => {
          if (e.inputFields) {
            let t = [];
            (H.forEach((n, r) => {
              let i = q(n.name);
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
        let E = t(() => {
            (_((e) => e + 1), h(null), e.onError?.());
          }, [e.onError]),
          D =
            C && b
              ? f(Ce, {
                  siteKey: b,
                  resetKey: g,
                  onVerify: h,
                  onExpire: () => h(null),
                  onError: () => h(null),
                })
              : null,
          O = async (e) => {
            if (te)
              return {
                ok: !1,
                message: `FramerAuth is unavailable because the project configuration could not be loaded. Please refresh or contact support.`,
              };
            if (x)
              return {
                ok: !1,
                message: `CAPTCHA is not configured correctly. Please contact support.`,
              };
            if (y && b && !p) return { ok: !1, message: `Please complete the CAPTCHA.` };
            let t = { email: e.email, password: e.password };
            y && b && p && (t.fetchOptions = { headers: { "x-captcha-response": p } });
            let n = await me(t);
            return n.error
              ? (_((e) => e + 1), h(null), { ok: !1, message: n.error.message })
              : (_((e) => e + 1), h(null), { ok: !0, message: `Successfully Signed in.` });
          };
        return f(B, {
          ...e,
          link: e.link,
          button: T,
          fields: n,
          isInitializing: w,
          onSubmit: O,
          submitAddon: D,
          onError: E,
        });
      }, [])),
      (q = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (J = {}),
      H.forEach((e, t) => {
        let n = q(e.name);
        J[n] = {
          title: `${e.displayName}`,
          type: O.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: O.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: O.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: O.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      y(K, {
        ...z,
        link: { title: `Redirect`, type: O.Link },
        inputFields: { title: `Inputs`, type: O.Object, controls: J },
        input: {
          ...z.input,
          controls: {
            ...z.input.controls,
            icon: {
              type: O.Object,
              title: `Icon`,
              controls: {
                showPasswordVisibilityIcon: {
                  title: `Activated`,
                  type: O.Boolean,
                  defaultValue: !0,
                },
                color: {
                  title: `Color`,
                  type: O.Color,
                  defaultValue: `#000`,
                  hidden: (e) => !e.showPasswordVisibilityIcon,
                },
              },
            },
          },
        },
        button: {
          ...z.button,
          controls: {
            ...z.button.controls,
            label: void 0,
            [G]: { ...z.button.controls.label, defaultValue: W },
          },
        },
      }),
      (K.defaultProps = { ...B.defaultProps, ...K.defaultProps }));
  }),
  Y,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Re,
  ze,
  Z,
  Be,
  Ve,
  Q,
  $;
e(() => {
  (u(),
    b(),
    v(),
    r(),
    ye(),
    Ae(),
    be(),
    se(),
    he(),
    Te(),
    (Y = x(R)),
    (je = x(K)),
    (Me = x(V)),
    (Ne = F(h.div)),
    (Pe = {
      glG2jaHlK: `(max-width: 809.98px)`,
      Hxn8Xj_Ah: `(min-width: 1260px)`,
      Qp6doUnlv: `(min-width: 810px) and (max-width: 1259.98px)`,
    }),
    (Fe = []),
    (Ie = `framer-m3dOQ`),
    (Le = {
      glG2jaHlK: `framer-v-q2kag4`,
      Hxn8Xj_Ah: `framer-v-1mn6vcg`,
      Qp6doUnlv: `framer-v-1a972rw`,
    }),
    (X = (e, t, n) => (e && t ? `position` : n)),
    (Re = {
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
    (ze = {
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
    (Z = { Desktop: `Hxn8Xj_Ah`, Phone: `glG2jaHlK`, Tablet: `Qp6doUnlv` }),
    (Be = ({ value: e }) =>
      P()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ve = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Hxn8Xj_Ah`,
    })),
    (Q = L(
      d(function (e, t) {
        let n = ee(null),
          r = t ?? n,
          s = c(),
          { activeLocale: l, setLocale: u } = D(),
          d = ne(),
          { style: m, className: v, layoutId: y, variant: b, ...x } = Ve(e);
        ie(o(() => we({}, l), [l]));
        let [S, C] = E(b, Pe, !1),
          O = A(Ie, ue, ve),
          k = a(j)?.isLayoutTemplate,
          P = !!a(_)?.transition?.layout,
          F = X(k, P);
        return (
          te(),
          ae({}),
          f(j.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `Hxn8Xj_Ah`,
              variantClassNames: Le,
            },
            children: p(g, {
              id: y ?? s,
              children: [
                f(Be, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                f(h.div, {
                  ...x,
                  className: A(O, `framer-1mn6vcg`, v),
                  ref: r,
                  style: { ...m },
                  children: p(Ne, {
                    animate: Re,
                    className: `framer-1xcbk40`,
                    "data-framer-appear-id": `1xcbk40`,
                    initial: ze,
                    layout: F,
                    optimized: !0,
                    children: [
                      f(`div`, {
                        className: `framer-10w3rmd`,
                        "data-border": !0,
                        "data-framer-name": `Service Card Wrapper`,
                        children: p(`div`, {
                          className: `framer-18jmejm`,
                          children: [
                            f(T, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(M, {
                                  children: f(N, {
                                    className: `framer-2j39t8-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `IcojkHLf5`,
                                    scopeId: `KyoFmDI9b`,
                                    children: f(w, {
                                      breakpoint: S,
                                      overrides: {
                                        glG2jaHlK: { callback: e[5], link: e[4] },
                                        Qp6doUnlv: { callback: e[3], link: e[2] },
                                      },
                                      children: f(R, {
                                        actionType: `auth`,
                                        authAction: `googleSignIn`,
                                        button: {
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
                                          buttonMargin: `0px`,
                                          buttonPadding: `20px 30px 20px 30px`,
                                          buttonShadow: ``,
                                          color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                          fill: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        },
                                        callback: e[1],
                                        height: `100%`,
                                        id: `IcojkHLf5`,
                                        label: `Google`,
                                        layoutId: `IcojkHLf5`,
                                        link: e[0],
                                        newTab: !1,
                                        pluginId: `stripe`,
                                        priceId: ``,
                                        quantity: 1,
                                        storeAction: `portal`,
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            f(T, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(M, {
                                  children: f(N, {
                                    className: `framer-a6p5ek-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `ywX0PffBC`,
                                    scopeId: `KyoFmDI9b`,
                                    children: f(w, {
                                      breakpoint: S,
                                      overrides: {
                                        glG2jaHlK: { link: e[2] },
                                        Qp6doUnlv: { link: e[1] },
                                      },
                                      children: f(K, {
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
                                          shouldAppear: !0,
                                          sign_in_button_label: `Sign In`,
                                        },
                                        gap: 16,
                                        height: `100%`,
                                        id: `ywX0PffBC`,
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
                                          icon: {
                                            color: `rgb(171, 171, 171)`,
                                            showPasswordVisibilityIcon: !0,
                                          },
                                          padding: `16px`,
                                          placeholderColor: `rgb(136, 143, 159)`,
                                          shadowObject: ``,
                                        },
                                        inputFields: {
                                          email: { displayName: `Email` },
                                          password: { displayName: `Password` },
                                        },
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
                                        layoutId: `ywX0PffBC`,
                                        link: e[0],
                                        style: { width: `100%` },
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                            f(oe, {
                              __fromCanvasComponent: !0,
                              children: f(i, {
                                children: p(`p`, {
                                  className: `framer-styles-preset-1edo0ga`,
                                  "data-styles-preset": `ilN_pt0Gn`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: [
                                    `Don't have an account? `,
                                    f(re, {
                                      href: { webPageId: `O1MU31CkI` },
                                      motionChild: !0,
                                      nodeId: `P8Zot9gKA`,
                                      openInNewTab: !0,
                                      preserveParams: !1,
                                      relValues: [],
                                      scopeId: `KyoFmDI9b`,
                                      smoothScroll: !1,
                                      children: f(h.a, {
                                        className: `framer-styles-preset-1das0kl`,
                                        "data-styles-preset": `Ra2J5G4be`,
                                        children: `Sign Up`,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-u5jhxk`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                      f(w, {
                        breakpoint: S,
                        overrides: {
                          glG2jaHlK: {
                            width: `calc(${d?.width || `100vw`} - 40px)`,
                            y: (d?.y || 0) + 0 + 0 + 80 + 424,
                          },
                          Qp6doUnlv: { y: (d?.y || 0) + 0 + 0 + 100 + 424 },
                        },
                        children: f(M, {
                          height: 24,
                          width: `calc(${d?.width || `100vw`} - 60px)`,
                          y: (d?.y || 0) + 0 + 0 + 130 + 424,
                          children: f(N, {
                            className: `framer-1az99s7-container`,
                            nodeId: `Ca9_Hfbpe`,
                            scopeId: `KyoFmDI9b`,
                            children: f(V, {
                              height: `100%`,
                              id: `Ca9_Hfbpe`,
                              layoutId: `Ca9_Hfbpe`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-m3dOQ.framer-a400dn, .framer-m3dOQ .framer-a400dn { display: block; }`,
        `.framer-m3dOQ.framer-1mn6vcg { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-m3dOQ .framer-1xcbk40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 30px 130px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-m3dOQ .framer-10w3rmd { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-m3dOQ .framer-18jmejm { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-m3dOQ .framer-2j39t8-container, .framer-m3dOQ .framer-a6p5ek-container, .framer-m3dOQ .framer-1az99s7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-m3dOQ .framer-u5jhxk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...ce,
        ...ge,
        `.framer-m3dOQ[data-border="true"]::after, .framer-m3dOQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-m3dOQ.framer-1mn6vcg { height: 1839px; width: 810px; } .framer-m3dOQ .framer-1xcbk40 { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-m3dOQ.framer-1mn6vcg { height: 1810px; width: 390px; } .framer-m3dOQ .framer-1xcbk40 { padding: 80px 20px 80px 20px; }}`,
      ],
      `framer-m3dOQ`
    )),
    (Q.displayName = `Sign Up`),
    (Q.defaultProps = { height: 2334.8, width: 1260 }),
    C(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYqGPXXcVwIZDKFA.woff2`,
              weight: `500`,
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
        ...Y,
        ...je,
        ...Me,
        ...S(le),
        ...S(_e),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(V, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerKyoFmDI9b`,
          slots: [],
          annotations: {
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"Qp6doUnlv":{"layout":["fixed","fixed"]},"glG2jaHlK":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `2334.8`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1260`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Fe as queryParamNames };
//# sourceMappingURL=ItoaC_M3lHS-C7lkkH3fzX_zMd7O9gulNaB1AXeNCaM.2d4uh1TB.mjs.map
