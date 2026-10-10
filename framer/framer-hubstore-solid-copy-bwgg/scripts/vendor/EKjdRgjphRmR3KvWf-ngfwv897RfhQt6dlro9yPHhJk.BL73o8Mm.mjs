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
  j as u,
  l as d,
  s as f,
  u as p,
  v as m,
  x as h,
} from "./react.ClsXD4bF.mjs";
import { a as g, r as ee, t as _, w as v } from "./motion.ClyXVVeQ.mjs";
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
  Tt as O,
  U as k,
  W as A,
  Z as j,
  _ as M,
  _t as N,
  a as P,
  bt as te,
  f as F,
  ft as I,
  gt as ne,
  ht as re,
  i as L,
  j as R,
  o as z,
  yt as ie,
} from "./framer.CbUxDv78.mjs";
import { i as ae, n as oe, r as se, t as ce } from "./ojujRXx3G.BsxJ58M0.mjs";
import { a as le, d as ue, g as de, o as fe, s as pe } from "./framerauth.Bsg5VUt2.mjs";
import { i as me, n as he, r as ge, t as _e } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { n as ve, t as ye } from "./ActionButton.gOvWkmhh.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./lV9dxehk9.1IAwn2dx.mjs";
import { i as B, n as we, o as Te, r as V, s as Ee, t as H } from "./Qf78XOrju.CLVgagNE.mjs";
import { n as De, t as Oe } from "./GoogleRecaptcha.C-8bnre1.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./JT0NI1fXe.CFHqvkLa.mjs";
import Ne, { t as Pe } from "./aEI99cEnaYjphfXRL84DwvJ1a_LGEusl_W26SgI7njM.CQhxn10p.mjs";
function Fe(e) {
  return !e || e.provider !== `google-recaptcha`
    ? !1
    : !e.protectedActions || !!e.protectedActions.signUp;
}
function Ie(e) {
  return e?.siteKey ?? ``;
}
function Le() {
  let e = D.current();
  return e === D.canvas || e === D.thumbnail;
}
function Re() {
  return i !== void 0 && !!i.FramerAuth;
}
var U,
  ze,
  Be,
  W,
  G,
  K,
  q,
  J,
  Ve = e(() => {
    (t(),
      f(),
      n(),
      j(),
      ue(),
      Te(),
      De(),
      (U = [
        {
          displayName: `Name`,
          name: `name`,
          type: `string`,
          required: !0,
          overridable: !1,
          placeholder: `Name`,
          render: !0,
          hidden: !1,
        },
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
      (ze = `sign_up`),
      (Be = `Sign Up`),
      (W = `${ze}_button_label`),
      (G = T(function ({ ...e }) {
        let t = de(),
          { project: n, fetchProject: i } = t,
          o = t.isLoading ?? t.loading,
          s = pe().initializing,
          { user: f } = le(),
          m = u(!1),
          [h, g] = l(null),
          [ee, _] = l(0),
          v = Re(),
          y = Fe(n?.captcha),
          b = Ie(n?.captcha),
          x = y && !b,
          S = v && !Le(),
          C = y,
          w = S && (!!s || !!o),
          T = v && S && !s && !o && !n,
          E = c(() => !!f, [f]);
        a(() => {
          S || m.current || n || ((m.current = !0), i().catch(() => {}));
        }, [S, n, i]);
        let D = c(() => {
            if (n && n?.customFields.length > 0) {
              let e = Ee(n?.customFields);
              if (e.success) return e.data.map((e) => ({ ...e }));
            }
            return [];
          }, [n]),
          [O, k] = l(U.filter((t) => e.inputFields[t.name]?.render || !0)),
          A = c(() => ({ ...e.button, label: e.button[W] }), [e.button, e.button[W]]),
          j = e.passwordValidator.shadowObject ? `${e.passwordValidator.shadowObject}` : null,
          [M, N] = l({ uppercase: !1, lowercase: !1, digit: !1, special: !1, length: !1 });
        a(() => {
          if (e.inputFields) {
            let t = [];
            (U.forEach((n, r) => {
              let i = q(n.name);
              if (!(i in e.inputFields)) return;
              let a = e.inputFields[i],
                o = a.render || !0,
                s = a.hidden || !1,
                c = a.displayName,
                l = c;
              o === !0 && t.push({ ...n, hidden: s, displayName: c, placeholder: l });
            }),
              k(t));
          }
        }, [void 0, e.inputFields]);
        let P = (t, n) =>
            p(`div`, {
              style: {
                color: e.passwordValidator.color || e.label.color,
                ...(e.passwordValidator.font || e.label.font),
                opacity: n ? 1 : 0.5,
                display: `flex`,
                alignItems: `center`,
              },
              children: [
                n
                  ? d(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: d(`path`, {
                        d: `M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z`,
                      }),
                    })
                  : d(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: d(`path`, {
                        d: `M7.47 6.97L4.22 3.72a.75.75 0 00-1.06 1.06L6.38 8l-3.22 3.22a.75.75 0 101.06 1.06L7.47 9.06l3.25 3.25a.75.75 0 001.06-1.06L8.53 8l3.25-3.25a.75.75 0 00-1.06-1.06L7.47 6.94v.03z`,
                      }),
                    }),
                ` `,
                d(`span`, {
                  style: {
                    flex: 1,
                    marginLeft: `5px`,
                    textAlign: e.passwordValidator.font?.textAlign || e.label.font?.textAlign,
                  },
                  children: t,
                }),
              ],
            }),
          te = (e) => {
            e.name === `password` && N(K(e.value));
          },
          F = r(() => {
            (_((e) => e + 1), g(null), e.onError?.());
          }, [e.onError]),
          I =
            C && b
              ? d(Oe, {
                  siteKey: b,
                  resetKey: ee,
                  onVerify: g,
                  onExpire: () => g(null),
                  onError: () => g(null),
                })
              : null,
          ne = async (e) => {
            let t = e,
              n = {};
            D.forEach((e) => {
              let r = t[e.name];
              ((r =
                e.type === `boolean`
                  ? r === `on` || (typeof r == `boolean` && r === !0)
                  : e.type === `number`
                    ? Number(r)
                    : String(r)),
                (n[e.name] = r));
            });
            let r = K(e.password);
            if (Object.values(r).some((e) => e === !1))
              return (N(r), { ok: !1, message: `Password does not meet requirements.` });
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
            if (y && b && !h) return { ok: !1, message: `Please complete the CAPTCHA.` };
            let i = { email: e.email, password: e.password, name: e.name.trim(), ...n };
            y && b && h && (i.fetchOptions = { headers: { "x-captcha-response": h } });
            let a = await fe(i);
            return a.error
              ? (_((e) => e + 1), g(null), { ok: !1, message: a.error.message })
              : (_((e) => e + 1), g(null), { ok: !0, message: `Account created successfully.` });
          },
          re = c(() => {
            let t = D.map((e) => ({ ...e, placeholder: e.placeholder || e.displayName })),
              n = [...O, ...t]
                .map((t) => {
                  let n = t;
                  if (t.overridable) {
                    let r = e.inputFields[t.name];
                    r && (n = { ...n, ...r });
                  }
                  return n;
                })
                .filter((e) => e.render !== !1),
              r = {};
            D.forEach((e) => {
              e.defaultValue !== null && e.defaultValue !== void 0 && (r[e.name] = e.defaultValue);
            });
            let i = f || r;
            return d(V, {
              ...e,
              isInitializing: w,
              isDisabled: E,
              fields: n,
              onSubmit: ne,
              onInputChange: te,
              defaultValues: { ...i },
              button: A,
              submitAddon: I,
              onError: F,
            });
          }, [e, O, D, E, f, w, A, I, y, b, x, T, h, F]);
        return p(`div`, {
          style: {
            width: `100%`,
            height: `auto`,
            display: `flex`,
            flexDirection: `column`,
            position: `relative`,
            gap: e.gap,
          },
          children: [
            re,
            !w &&
              e.displayPasswordValidator &&
              !E &&
              p(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  borderRadius: e.passwordValidator.borderRadius,
                  background: e.passwordValidator.fill,
                  padding: e.passwordValidator.padding,
                  gap: e.passwordValidator.gap,
                  boxShadow: j || `none`,
                  ...(e.passwordValidator.borderObject || {}),
                },
                children: [
                  P(e.passwordValidator.labels.length, M.length),
                  P(e.passwordValidator.labels.uppercase, M.uppercase),
                  P(e.passwordValidator.labels.lowercase, M.lowercase),
                  P(e.passwordValidator.labels.digit, M.digit),
                  P(e.passwordValidator.labels.special, M.special),
                ],
              }),
          ],
        });
      }, [])),
      (K = (e) => {
        let t = {
          uppercase: /[A-Z]/,
          lowercase: /[a-z]/,
          digit: /\d/,
          special: /\W|_/,
          length: /.{8,}/,
        };
        return {
          uppercase: t.uppercase.test(e),
          lowercase: t.lowercase.test(e),
          digit: t.digit.test(e),
          special: t.special.test(e),
          length: t.length.test(e),
        };
      }),
      (q = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (J = {}),
      U.forEach((e, t) => {
        let n = q(e.name);
        J[n] = {
          title: `${e.displayName}`,
          type: z.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: z.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: z.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: z.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      C(G, {
        ...B,
        link: { title: `Redirect`, type: z.Link },
        inputFields: { title: `Fields`, type: z.Object, controls: J },
        input: {
          ...B.input,
          controls: {
            ...B.input.controls,
            icon: {
              type: z.Object,
              title: `Icon`,
              controls: {
                showPasswordVisibilityIcon: {
                  title: `Activated`,
                  type: z.Boolean,
                  defaultValue: !0,
                },
                color: {
                  title: `Color`,
                  type: z.Color,
                  defaultValue: `#000`,
                  hidden: (e) => !e.showPasswordVisibilityIcon,
                },
              },
            },
          },
        },
        button: {
          ...B.button,
          controls: {
            ...B.button.controls,
            label: void 0,
            [W]: { ...B.button.controls.label, defaultValue: Be },
          },
        },
        displayPasswordValidator: {
          title: `Password Validator`,
          type: z.Boolean,
          defaultValue: !0,
          hidden: !1,
        },
        passwordValidator: {
          title: `Password Validator`,
          type: z.Object,
          hidden: (e) => !e.displayPasswordValidator,
          controls: {
            font: { type: z.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: z.Color, defaultValue: `transparent` },
            color: { title: `Text`, type: z.Color, defaultValue: `#000` },
            padding: { title: `Padding`, type: z.Padding },
            gap: { title: `Gap`, type: z.Number, defaultValue: 10, min: 0 },
            borderRadius: { title: `Radius`, type: z.BorderRadius },
            labels: {
              type: z.Object,
              title: `Labels`,
              controls: {
                length: { title: `Length`, type: z.String, defaultValue: `At least 8 characters` },
                uppercase: {
                  title: `Uppercase`,
                  type: z.String,
                  defaultValue: `At least one uppercase letter`,
                },
                lowercase: {
                  title: `Lowercase`,
                  type: z.String,
                  defaultValue: `At least one lowercase letter`,
                },
                digit: { title: `Digit`, type: z.String, defaultValue: `At least one digit` },
                special: {
                  title: `Special`,
                  type: z.String,
                  defaultValue: `At least one special character`,
                },
              },
            },
            borderObject: {
              type: z.Border,
              title: `Border`,
              optional: !0,
              defaultValue: {
                borderWidth: 0,
                borderStyle: `solid`,
                borderColor: `rgba(200,200,200,0.5)`,
              },
            },
            shadowObject: { type: z.BoxShadow, title: `Shadow`, optional: !0 },
          },
        },
      }),
      (G.defaultProps = { ...V.defaultProps, ...G.defaultProps }));
  }),
  Y,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  X,
  Qe,
  $e,
  Z,
  et,
  Q,
  tt,
  nt,
  $,
  rt;
e(() => {
  (f(),
    j(),
    _(),
    n(),
    ve(),
    Ve(),
    we(),
    me(),
    ke(),
    be(),
    ae(),
    Pe(),
    (Y = y(v.div)),
    (He = k(ye)),
    (Ue = k(G)),
    (We = k(H)),
    (Ge = {
      aVdyK4N7b: `(min-width: 1200px)`,
      AVf2JCzfK: `(max-width: 809.98px)`,
      Uc6jmT4Fn: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Ke = () => typeof document < `u`),
    (qe = []),
    (Je = `framer-l9ymc`),
    (Ye = {
      aVdyK4N7b: `framer-v-1iv3myp`,
      AVf2JCzfK: `framer-v-164fum7`,
      Uc6jmT4Fn: `framer-v-lr0qyj`,
    }),
    (Xe = (e, t, n) => (e && t ? `position` : n)),
    (Ze = {
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
    (X = { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (Qe = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: X,
      x: -40,
      y: 0,
    }),
    ($e = {
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
    (Z = { delay: 0.1, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (et = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Z,
      x: 40,
      y: 0,
    }),
    (Q = { Desktop: `aVdyK4N7b`, Phone: `AVf2JCzfK`, Tablet: `Uc6jmT4Fn` }),
    (tt = ({ value: e }) =>
      N()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (nt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `aVdyK4N7b`,
    })),
    ($ = T(
      m(function (e, t) {
        let n = u(null),
          r = t ?? n,
          i = h(),
          { activeLocale: a, setLocale: l } = ie(),
          f = I(),
          { style: m, className: _, layoutId: y, variant: S, ...C } = nt(e);
        te(c(() => Ne({}, a), [a]));
        let [T, D] = ne(S, Ge, !1),
          k = x(Je, _e, ce, Ce, Me),
          A = s(F)?.isLayoutTemplate,
          j = !!s(g)?.transition?.layout,
          N = Xe(A, j),
          R = () => !Ke() || T !== `AVf2JCzfK`;
        return (
          O(),
          re({}),
          d(F.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Q,
              primaryVariantId: `aVdyK4N7b`,
              variantClassNames: Ye,
            },
            children: p(ee, {
              id: y ?? i,
              children: [
                d(tt, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                d(v.div, {
                  ...C,
                  className: x(k, `framer-1iv3myp`, _),
                  ref: r,
                  style: { ...m },
                  children: p(v.div, {
                    className: `framer-m2xqvz`,
                    "data-framer-name": `Contact Section`,
                    layout: N,
                    children: [
                      p(`div`, {
                        className: `framer-r886z3`,
                        "data-framer-name": `Container`,
                        children: [
                          d(E, {
                            breakpoint: T,
                            overrides: {
                              AVf2JCzfK: { __framer__styleAppearEffectEnabled: void 0 },
                              Uc6jmT4Fn: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: p(Y, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Ze,
                              __framer__exit: Qe,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1d7vb4i`,
                              "data-framer-name": `Contact Widget Block`,
                              children: [
                                p(`div`, {
                                  className: `framer-1u5ltnt`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    d(w, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Sign up`,
                                        }),
                                      }),
                                      className: `framer-o0y7gq`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(w, {
                                      __fromCanvasComponent: !0,
                                      children: d(o, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Create your account `,
                                        }),
                                      }),
                                      className: `framer-vncjbd`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                R() &&
                                  d(`div`, {
                                    className: `framer-ee4o5v hidden-164fum7`,
                                    "data-framer-name": `Contact Widget Grid`,
                                  }),
                              ],
                            }),
                          }),
                          p(Y, {
                            __framer__animate: { transition: Z },
                            __framer__animateOnce: !0,
                            __framer__enter: $e,
                            __framer__exit: et,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-hon3bs`,
                            "data-border": !0,
                            children: [
                              d(b, {
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
                                  d(L, {
                                    children: d(P, {
                                      className: `framer-cmzcjw-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `gjM8CVDUb`,
                                      scopeId: `hcaQ2CS_t`,
                                      children: d(E, {
                                        breakpoint: T,
                                        overrides: {
                                          AVf2JCzfK: { callback: e[2] },
                                          Uc6jmT4Fn: { callback: e[1] },
                                        },
                                        children: d(ye, {
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
                                          id: `gjM8CVDUb`,
                                          label: `Google`,
                                          layoutId: `gjM8CVDUb`,
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
                              d(b, {
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
                                  d(L, {
                                    children: d(P, {
                                      className: `framer-obcdfe-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `w033ABmsG`,
                                      scopeId: `hcaQ2CS_t`,
                                      children: d(E, {
                                        breakpoint: T,
                                        overrides: {
                                          AVf2JCzfK: { link: e[2] },
                                          Uc6jmT4Fn: { link: e[1] },
                                        },
                                        children: d(G, {
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
                                            sign_up_button_label: `Sign Up`,
                                          },
                                          displayPasswordValidator: !0,
                                          gap: 16,
                                          height: `100%`,
                                          id: `w033ABmsG`,
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
                                            name: { displayName: `Name` },
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
                                          layoutId: `w033ABmsG`,
                                          link: e[0],
                                          passwordValidator: {
                                            borderObject: {
                                              borderColor: `rgba(200, 200, 200, 0.5)`,
                                              borderStyle: `solid`,
                                              borderWidth: 0,
                                            },
                                            borderRadius: `0px`,
                                            color: `rgb(0, 0, 0)`,
                                            fill: `rgba(0, 0, 0, 0)`,
                                            font: {},
                                            gap: 10,
                                            labels: {
                                              digit: `At least one digit`,
                                              length: `At least 8 characters`,
                                              lowercase: `At least one lowercase letter`,
                                              special: `At least one special character`,
                                              uppercase: `At least one uppercase letter`,
                                            },
                                            padding: `0px`,
                                            shadowObject: ``,
                                          },
                                          style: { width: `100%` },
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                              d(w, {
                                __fromCanvasComponent: !0,
                                children: d(o, {
                                  children: p(`p`, {
                                    className: `framer-styles-preset-gc7lk9`,
                                    "data-styles-preset": `lV9dxehk9`,
                                    dir: `auto`,
                                    children: [
                                      `Already have an account? `,
                                      d(M, {
                                        href: { webPageId: `G7kxX3e30` },
                                        motionChild: !0,
                                        nodeId: `oEeEvBtAE`,
                                        openInNewTab: !1,
                                        relValues: [],
                                        scopeId: `hcaQ2CS_t`,
                                        smoothScroll: !1,
                                        children: d(v.a, {
                                          className: `framer-styles-preset-bv207o`,
                                          "data-styles-preset": `JT0NI1fXe`,
                                          children: `Sign In`,
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                className: `framer-1rdc3k5`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                        ],
                      }),
                      d(E, {
                        breakpoint: T,
                        overrides: {
                          AVf2JCzfK: { y: (f?.y || 0) + 0 + 0 + 60 + 776 },
                          Uc6jmT4Fn: { y: (f?.y || 0) + 0 + 0 + 80 + 450 },
                        },
                        children: d(L, {
                          height: 24,
                          width: f?.width || `100vw`,
                          y: (f?.y || 0) + 0 + 0 + 160 + 452,
                          children: d(P, {
                            className: `framer-igepct-container`,
                            nodeId: `VL4uxTA_U`,
                            scopeId: `hcaQ2CS_t`,
                            children: d(H, {
                              height: `100%`,
                              id: `VL4uxTA_U`,
                              layoutId: `VL4uxTA_U`,
                              style: { width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-l9ymc.framer-r3ayj5, .framer-l9ymc .framer-r3ayj5 { display: block; }`,
        `.framer-l9ymc.framer-1iv3myp { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-l9ymc .framer-m2xqvz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-l9ymc .framer-r886z3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-l9ymc .framer-1d7vb4i { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 584px; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-l9ymc .framer-1u5ltnt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l9ymc .framer-o0y7gq, .framer-l9ymc .framer-vncjbd { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-l9ymc .framer-ee4o5v { display: grid; flex: none; gap: 80px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(10px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; min-height: 144px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-l9ymc .framer-hon3bs { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 630px; overflow: visible; padding: 32px; position: relative; width: 1px; }`,
        `.framer-l9ymc .framer-cmzcjw-container, .framer-l9ymc .framer-obcdfe-container, .framer-l9ymc .framer-igepct-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-l9ymc .framer-1rdc3k5 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ...he,
        ...oe,
        ...xe,
        ...Ae,
        `.framer-l9ymc[data-border="true"]::after, .framer-l9ymc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-l9ymc.framer-1iv3myp { width: 810px; } .framer-l9ymc .framer-m2xqvz { padding: 80px 0px 80px 0px; } .framer-l9ymc .framer-r886z3 { max-width: 990px; } .framer-l9ymc .framer-1d7vb4i { gap: 40px; max-width: 500px; width: 43%; } .framer-l9ymc .framer-ee4o5v { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); min-height: 88px; }}`,
        `@media (max-width: 809.98px) { .framer-l9ymc.framer-1iv3myp { width: 390px; } .framer-l9ymc .framer-m2xqvz { padding: 60px 0px 60px 0px; } .framer-l9ymc .framer-r886z3 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; max-width: 620px; padding: 72px 20px 0px 20px; } .framer-l9ymc .framer-1d7vb4i { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 30px; max-width: unset; width: 100%; } .framer-l9ymc .framer-hon3bs { flex: none; width: 100%; }}`,
      ],
      `framer-l9ymc`
    )),
    ($.displayName = `Contact Us`),
    ($.defaultProps = { height: 2693, width: 1200 }),
    R(
      $,
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
        ...He,
        ...Ue,
        ...We,
        ...A(ge),
        ...A(se),
        ...A(Se),
        ...A(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(H, {}, t)])) }),
    (rt = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerhcaQ2CS_t`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2693`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Uc6jmT4Fn":{"layout":["fixed","auto"]},"AVf2JCzfK":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { rt as __FramerMetadata__, $ as default, qe as queryParamNames };
//# sourceMappingURL=EKjdRgjphRmR3KvWf-ngfwv897RfhQt6dlro9yPHhJk.BL73o8Mm.mjs.map
