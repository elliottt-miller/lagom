import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  F as r,
  H as i,
  I as a,
  L as o,
  N as s,
  P as c,
  R as l,
  j as ee,
  l as u,
  s as d,
  u as f,
  v as p,
  x as m,
} from "./react.ClsXD4bF.mjs";
import { a as h, r as g, t as _, w as v } from "./motion.ClyXVVeQ.mjs";
import {
  At as y,
  D as b,
  F as x,
  L as S,
  M as C,
  O as w,
  Ot as T,
  S as E,
  T as D,
  Tt as te,
  U as O,
  W as k,
  Z as A,
  _ as ne,
  _t as j,
  a as M,
  bt as re,
  f as N,
  ft as ie,
  gt as ae,
  ht as oe,
  i as P,
  j as se,
  o as F,
  yt as ce,
} from "./framer.CbUxDv78.mjs";
import { i as le, n as ue, r as de, t as fe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { c as pe, d as me, g as he, s as ge } from "./framerauth.Bsg5VUt2.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { n as xe, t as I } from "./ActionButton.gOvWkmhh.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./lV9dxehk9.1IAwn2dx.mjs";
import { i as L, n as Ee, o as De, r as R, t as z } from "./Qf78XOrju.CLVgagNE.mjs";
import { n as Oe, t as ke } from "./GoogleRecaptcha.C-8bnre1.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./JT0NI1fXe.CFHqvkLa.mjs";
import Pe, { t as Fe } from "./a3MovCIHZaAUS1eJszynMiYhve8C27xStEEQ_wCJ6mg.sHVwVtTF.mjs";
function Ie(e) {
  return !e || e.provider !== `google-recaptcha`
    ? !1
    : !e.protectedActions || !!e.protectedActions.signIn;
}
function Le(e) {
  return e?.siteKey ?? ``;
}
function Re() {
  let e = D.current();
  return e === D.canvas || e === D.thumbnail;
}
function ze() {
  return i !== void 0 && !!i.FramerAuth;
}
var B,
  V,
  H,
  U,
  W,
  G,
  K,
  Be = e(() => {
    (t(),
      d(),
      n(),
      A(),
      me(),
      De(),
      Oe(),
      (B = [
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
      (V = `sign_in`),
      (H = `Sign In`),
      (U = `${V}_button_label`),
      (W = T(function ({ ...e }) {
        let [t, n] = l(B),
          i = he(),
          { project: o, fetchProject: s } = i,
          d = i.isLoading ?? i.loading,
          f = ge().initializing,
          p = ee(!1),
          [m, h] = l(null),
          [g, _] = l(0),
          v = ze(),
          y = Ie(o?.captcha),
          b = Le(o?.captcha),
          x = y && !b,
          S = v && !Re(),
          C = y,
          w = S && (!!f || !!d),
          T = v && S && !f && !d && !o;
        a(() => {
          S || p.current || o || ((p.current = !0), s().catch(() => {}));
        }, [S, o, s]);
        let E = c(() => ({ ...e.button, label: e.button[U] }), [e.button, e.button[U]]);
        a(() => {
          if (e.inputFields) {
            let t = [];
            (B.forEach((n, r) => {
              let i = G(n.name);
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
        let D = r(() => {
            (_((e) => e + 1), h(null), e.onError?.());
          }, [e.onError]),
          te =
            C && b
              ? u(ke, {
                  siteKey: b,
                  resetKey: g,
                  onVerify: h,
                  onExpire: () => h(null),
                  onError: () => h(null),
                })
              : null,
          O = async (e) => {
            if (T)
              return {
                ok: !1,
                message: `FramerAuth is unavailable because the project configuration could not be loaded. Please refresh or contact support.`,
              };
            if (x)
              return {
                ok: !1,
                message: `CAPTCHA is not configured correctly. Please contact support.`,
              };
            if (y && b && !m) return { ok: !1, message: `Please complete the CAPTCHA.` };
            let t = { email: e.email, password: e.password };
            y && b && m && (t.fetchOptions = { headers: { "x-captcha-response": m } });
            let n = await pe(t);
            return n.error
              ? (_((e) => e + 1), h(null), { ok: !1, message: n.error.message })
              : (_((e) => e + 1), h(null), { ok: !0, message: `Successfully Signed in.` });
          };
        return u(R, {
          ...e,
          link: e.link,
          button: E,
          fields: t,
          isInitializing: w,
          onSubmit: O,
          submitAddon: te,
          onError: D,
        });
      }, [])),
      (G = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (K = {}),
      B.forEach((e, t) => {
        let n = G(e.name);
        K[n] = {
          title: `${e.displayName}`,
          type: F.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: F.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: F.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: F.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      C(W, {
        ...L,
        link: { title: `Redirect`, type: F.Link },
        inputFields: { title: `Inputs`, type: F.Object, controls: K },
        input: {
          ...L.input,
          controls: {
            ...L.input.controls,
            icon: {
              type: F.Object,
              title: `Icon`,
              controls: {
                showPasswordVisibilityIcon: {
                  title: `Activated`,
                  type: F.Boolean,
                  defaultValue: !0,
                },
                color: {
                  title: `Color`,
                  type: F.Color,
                  defaultValue: `#000`,
                  hidden: (e) => !e.showPasswordVisibilityIcon,
                },
              },
            },
          },
        },
        button: {
          ...L.button,
          controls: {
            ...L.button.controls,
            label: void 0,
            [U]: { ...L.button.controls.label, defaultValue: H },
          },
        },
      }),
      (W.defaultProps = { ...R.defaultProps, ...W.defaultProps }));
  }),
  q,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  J,
  qe,
  Je,
  Ye,
  Y,
  Xe,
  Ze,
  X,
  Qe,
  Z,
  $e,
  et,
  Q,
  $;
e(() => {
  (d(),
    A(),
    _(),
    n(),
    xe(),
    Be(),
    Ee(),
    _e(),
    Ae(),
    Se(),
    le(),
    Fe(),
    (q = y(v.div)),
    (Ve = O(I)),
    (He = O(W)),
    (Ue = O(z)),
    (We = {
      mSrWSHqzQ: `(max-width: 809.98px)`,
      NW4yBvNmw: `(min-width: 810px) and (max-width: 1199.98px)`,
      YeANL0HNU: `(min-width: 1200px)`,
    }),
    (Ge = () => typeof document < `u`),
    (Ke = []),
    (J = `framer-WVsd5`),
    (qe = {
      mSrWSHqzQ: `framer-v-nn4wrv`,
      NW4yBvNmw: `framer-v-1kpa5ii`,
      YeANL0HNU: `framer-v-1ees9wd`,
    }),
    (Je = (e, t, n) => (e && t ? `position` : n)),
    (Ye = {
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
    (Y = { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (Xe = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: -40,
      y: 0,
    }),
    (Ze = {
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
    (Qe = {
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
    (Z = { Desktop: `YeANL0HNU`, Phone: `mSrWSHqzQ`, Tablet: `NW4yBvNmw` }),
    ($e = ({ value: e }) =>
      j()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (et = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `YeANL0HNU`,
    })),
    (Q = T(
      p(function (e, t) {
        let n = ee(null),
          r = t ?? n,
          i = m(),
          { activeLocale: a, setLocale: l } = ce(),
          d = ie(),
          { style: p, className: _, layoutId: y, variant: S, ...C } = et(e);
        re(c(() => Pe({}, a), [a]));
        let [T, D] = ae(S, We, !1),
          O = x(J, be, fe, Te, Ne),
          k = s(N)?.isLayoutTemplate,
          A = !!s(h)?.transition?.layout,
          j = Je(k, A),
          se = () => !Ge() || T !== `mSrWSHqzQ`;
        return (
          te(),
          oe({}),
          u(N.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Z,
              primaryVariantId: `YeANL0HNU`,
              variantClassNames: qe,
            },
            children: f(g, {
              id: y ?? i,
              children: [
                u($e, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                u(v.div, {
                  ...C,
                  className: x(O, `framer-1ees9wd`, _),
                  ref: r,
                  style: { ...p },
                  children: f(v.div, {
                    className: `framer-5czqdv`,
                    "data-framer-name": `Contact Section`,
                    layout: j,
                    children: [
                      f(`div`, {
                        className: `framer-obegbq`,
                        "data-framer-name": `Container`,
                        children: [
                          u(E, {
                            breakpoint: T,
                            overrides: {
                              mSrWSHqzQ: { __framer__styleAppearEffectEnabled: void 0 },
                              NW4yBvNmw: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: f(q, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: Ye,
                              __framer__exit: Xe,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-a8nlyo`,
                              "data-framer-name": `Contact Widget Block`,
                              children: [
                                f(`div`, {
                                  className: `framer-eu40nd`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    u(w, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Sign in`,
                                        }),
                                      }),
                                      className: `framer-1r0bfhf`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(w, {
                                      __fromCanvasComponent: !0,
                                      children: u(o, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Sign in to access your account `,
                                        }),
                                      }),
                                      className: `framer-1d9v61q`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                se() &&
                                  u(`div`, {
                                    className: `framer-y9lcj8 hidden-nn4wrv`,
                                    "data-framer-name": `Contact Widget Grid`,
                                  }),
                              ],
                            }),
                          }),
                          f(q, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: Ze,
                            __framer__exit: Qe,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-zmf0jj`,
                            "data-border": !0,
                            children: [
                              u(b, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(P, {
                                    children: u(M, {
                                      className: `framer-1bg1s51-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `hPp472b5B`,
                                      scopeId: `G7kxX3e30`,
                                      children: u(E, {
                                        breakpoint: T,
                                        overrides: {
                                          mSrWSHqzQ: { callback: e[2] },
                                          NW4yBvNmw: { callback: e[1] },
                                        },
                                        children: u(I, {
                                          actionType: `auth`,
                                          authAction: `googleSignIn`,
                                          button: {
                                            borderObject: {
                                              borderColor: `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                            },
                                            borderRadius: `24px`,
                                            buttonFont: {
                                              fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                              fontSize: `16px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `0em`,
                                              lineHeight: `1em`,
                                            },
                                            buttonMargin: `0px`,
                                            buttonPadding: `16px`,
                                            buttonShadow: `0px 8px 15px 0px rgba(0, 0, 0, 0.05)`,
                                            color: `rgb(33, 33, 33)`,
                                            fill: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                          },
                                          callback: e[0],
                                          height: `100%`,
                                          id: `hPp472b5B`,
                                          label: `Google`,
                                          layoutId: `hPp472b5B`,
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
                              u(b, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  u(P, {
                                    children: u(M, {
                                      className: `framer-f795ug-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `ibk1IUWSJ`,
                                      scopeId: `G7kxX3e30`,
                                      children: u(E, {
                                        breakpoint: T,
                                        overrides: {
                                          mSrWSHqzQ: { link: e[2] },
                                          NW4yBvNmw: { link: e[1] },
                                        },
                                        children: u(W, {
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
                                            shouldAppear: !0,
                                            sign_in_button_label: `Sign In`,
                                          },
                                          gap: 16,
                                          height: `100%`,
                                          id: `ibk1IUWSJ`,
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
                                            icon: {
                                              color: `rgb(196, 196, 196)`,
                                              showPasswordVisibilityIcon: !0,
                                            },
                                            padding: `16px`,
                                            placeholderColor: `rgb(166, 166, 166)`,
                                            shadowObject: ``,
                                          },
                                          inputFields: {
                                            email: { displayName: `Email` },
                                            password: { displayName: `Password` },
                                          },
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
                                          layoutId: `ibk1IUWSJ`,
                                          link: e[0],
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              u(w, {
                                __fromCanvasComponent: !0,
                                children: u(o, {
                                  children: f(`p`, {
                                    className: `framer-styles-preset-gc7lk9`,
                                    "data-styles-preset": `lV9dxehk9`,
                                    dir: `auto`,
                                    children: [
                                      `Don't have an account? `,
                                      u(ne, {
                                        href: { webPageId: `hcaQ2CS_t` },
                                        motionChild: !0,
                                        nodeId: `qMe2_SKXN`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `G7kxX3e30`,
                                        smoothScroll: !1,
                                        children: u(v.a, {
                                          className: `framer-styles-preset-bv207o`,
                                          "data-styles-preset": `JT0NI1fXe`,
                                          children: `Sign Up`,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-vie6d2`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      u(E, {
                        breakpoint: T,
                        overrides: {
                          mSrWSHqzQ: { y: (d?.y || 0) + 0 + 0 + 60 + 776 },
                          NW4yBvNmw: { y: (d?.y || 0) + 0 + 0 + 80 + 450 },
                        },
                        children: u(P, {
                          height: 24,
                          width: d?.width || `100vw`,
                          y: (d?.y || 0) + 0 + 0 + 160 + 452,
                          children: u(M, {
                            className: `framer-gpw7yo-container`,
                            nodeId: `xJKkT0Prf`,
                            scopeId: `G7kxX3e30`,
                            children: u(z, {
                              height: `100%`,
                              id: `xJKkT0Prf`,
                              layoutId: `xJKkT0Prf`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-WVsd5.framer-1c880i3, .framer-WVsd5 .framer-1c880i3 { display: block; }`,
        `.framer-WVsd5.framer-1ees9wd { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-WVsd5 .framer-5czqdv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-WVsd5 .framer-obegbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-WVsd5 .framer-a8nlyo { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 584px; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-WVsd5 .framer-eu40nd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WVsd5 .framer-1r0bfhf, .framer-WVsd5 .framer-1d9v61q { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-WVsd5 .framer-y9lcj8 { display: grid; flex: none; gap: 80px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(10px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; min-height: 144px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-WVsd5 .framer-zmf0jj { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 630px; overflow: visible; padding: 32px; position: relative; width: 1px; }`,
        `.framer-WVsd5 .framer-1bg1s51-container, .framer-WVsd5 .framer-f795ug-container, .framer-WVsd5 .framer-gpw7yo-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-WVsd5 .framer-vie6d2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...ve,
        ...ue,
        ...Ce,
        ...je,
        `.framer-WVsd5[data-border="true"]::after, .framer-WVsd5 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-WVsd5.framer-1ees9wd { width: 810px; } .framer-WVsd5 .framer-5czqdv { padding: 80px 0px 80px 0px; } .framer-WVsd5 .framer-obegbq { max-width: 990px; } .framer-WVsd5 .framer-a8nlyo { gap: 40px; max-width: 500px; width: 43%; } .framer-WVsd5 .framer-y9lcj8 { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-WVsd5.framer-1ees9wd { width: 390px; } .framer-WVsd5 .framer-5czqdv { padding: 60px 0px 60px 0px; } .framer-WVsd5 .framer-obegbq { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; max-width: 620px; padding: 72px 20px 0px 20px; } .framer-WVsd5 .framer-a8nlyo { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 30px; max-width: unset; width: 100%; } .framer-WVsd5 .framer-zmf0jj { flex: none; width: 100%; }}`,
      ],
      `framer-WVsd5`
    )),
    (Q.displayName = `Sign Up`),
    (Q.defaultProps = { height: 2460, width: 1200 }),
    se(
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
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `DM Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `DM Sans`,
              url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Ve,
        ...He,
        ...Ue,
        ...k(ye),
        ...k(de),
        ...k(we),
        ...k(Me),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(z, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerG7kxX3e30`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NW4yBvNmw":{"layout":["fixed","auto"]},"mSrWSHqzQ":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2460`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Ke as queryParamNames };
//# sourceMappingURL=uLXXjOw5xn92i4D_UJ9qkN3ohr2AI2-WR590HuCBb0w.Ds4TmgqY.mjs.map
