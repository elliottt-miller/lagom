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
  x as f,
} from "./react.ClsXD4bF.mjs";
import { a as p, r as m, t as h, w as g } from "./motion.ClyXVVeQ.mjs";
import {
  At as _,
  D as ee,
  F as te,
  L as v,
  M as y,
  O as b,
  Ot as x,
  S,
  Tt as ne,
  U as C,
  W as w,
  Z as T,
  _t as re,
  a as E,
  bt as ie,
  f as ae,
  ft as oe,
  gt as se,
  ht as ce,
  i as le,
  j as D,
  o as O,
  yt as ue,
} from "./framer.CbUxDv78.mjs";
import { i as k, n as A, r as j, t as de } from "./ojujRXx3G.BsxJ58M0.mjs";
import { d as fe, l as pe } from "./framerauth.Bsg5VUt2.mjs";
import { i as me, n as he, r as ge, t as _e } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { a as ve, i as M, n as ye, o as be, r as N, t as P } from "./Qf78XOrju.CLVgagNE.mjs";
import xe, { t as Se } from "./61tTyaqDiXhVlOSEL_E3Y1ij5vIh-YiLSFbK7jncrco.W_Y6hubg.mjs";
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  Ce = e(() => {
    (l(),
      t(),
      T(),
      be(),
      fe(),
      (F = [
        {
          displayName: `New Password`,
          name: `new_password`,
          type: `string`,
          format: `password`,
          required: !0,
          overridable: !1,
          placeholder: `Email`,
          render: !0,
          hidden: !1,
        },
      ]),
      (I = `reset_password`),
      (L = `Reset Password`),
      (R = `${I}_button_label`),
      (z = x(function ({ ...e }) {
        let [t, r] = o(F),
          [i, s] = o(null);
        n(() => {
          let e = ve(`token`);
          s(e);
        }, []);
        let l = a(() => ({ ...e.button, label: e.button[R] }), [e.button, e.button[R]]),
          d = e.passwordValidator.shadowObject ? `${e.passwordValidator.shadowObject}` : null,
          [f, p] = o({ uppercase: !1, lowercase: !1, digit: !1, special: !1, length: !1 });
        n(() => {
          if (e.inputFields) {
            let t = [];
            (F.forEach((n, r) => {
              let i = V(n.name);
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
        let m = (t, n) =>
            u(`div`, {
              style: {
                color: e.passwordValidator.color || e.label.color,
                ...(e.passwordValidator.font || e.label.font),
                opacity: n ? 1 : 0.5,
                display: `flex`,
                alignItems: `center`,
              },
              children: [
                n
                  ? c(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: c(`path`, {
                        d: `M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z`,
                      }),
                    })
                  : c(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: c(`path`, {
                        d: `M7.47 6.97L4.22 3.72a.75.75 0 00-1.06 1.06L6.38 8l-3.22 3.22a.75.75 0 101.06 1.06L7.47 9.06l3.25 3.25a.75.75 0 001.06-1.06L8.53 8l3.25-3.25a.75.75 0 00-1.06-1.06L7.47 6.94v.03z`,
                      }),
                    }),
                ` `,
                c(`span`, {
                  style: {
                    flex: 1,
                    marginLeft: `5px`,
                    textAlign: e.passwordValidator.font?.textAlign || e.label.font?.textAlign,
                  },
                  children: t,
                }),
              ],
            }),
          h = (e) => {
            e.name === `new_password` && p(B(e.value));
          },
          g = async (e) => {
            if (!i) return { ok: !1, message: `Token not found.` };
            let t = B(e.new_password);
            if (Object.values(t).some((e) => e === !1))
              return (p(t), { ok: !1, message: `Password does not meet requirements.` });
            let n = await pe({ new_password: e.new_password, token: i });
            return n.error
              ? { ok: !1, message: n.error.message }
              : { ok: !0, message: n.data?.message || `Password has been reset.` };
          };
        return u(`div`, {
          style: {
            width: `100%`,
            height: `auto`,
            display: `flex`,
            flexDirection: `column`,
            position: `relative`,
            gap: e.gap,
          },
          children: [
            c(N, { ...e, button: l, fields: t, onSubmit: g, onInputChange: h }),
            e.displayPasswordValidator &&
              u(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  borderRadius: e.passwordValidator.borderRadius,
                  background: e.passwordValidator.fill,
                  padding: e.passwordValidator.padding,
                  gap: e.passwordValidator.gap,
                  boxShadow: d || `none`,
                  ...(e.passwordValidator.borderObject || {}),
                },
                children: [
                  m(e.passwordValidator.labels.length, f.length),
                  m(e.passwordValidator.labels.uppercase, f.uppercase),
                  m(e.passwordValidator.labels.lowercase, f.lowercase),
                  m(e.passwordValidator.labels.digit, f.digit),
                  m(e.passwordValidator.labels.special, f.special),
                ],
              }),
          ],
        });
      }, [])),
      (B = (e) => {
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
      (V = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (H = {}),
      F.forEach((e, t) => {
        let n = V(e.name);
        H[n] = {
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
      y(z, {
        ...M,
        inputFields: { title: `Inputs`, type: O.Object, controls: H },
        input: {
          ...M.input,
          controls: {
            ...M.input.controls,
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
        link: { title: `Redirect`, type: O.Link },
        button: {
          ...M.button,
          controls: {
            ...M.button.controls,
            label: void 0,
            [R]: { ...M.button.controls.label, defaultValue: L },
          },
        },
        displayPasswordValidator: {
          title: `Password Validator`,
          type: O.Boolean,
          defaultValue: !0,
          hidden: !1,
        },
        passwordValidator: {
          title: `Password Validator`,
          type: O.Object,
          hidden: (e) => !e.displayPasswordValidator,
          controls: {
            font: { type: O.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: O.Color, defaultValue: `transparent` },
            color: { title: `Text`, type: O.Color, defaultValue: `#000` },
            padding: { title: `Padding`, type: O.Padding },
            gap: { title: `Gap`, type: O.Number, defaultValue: 10, min: 0 },
            borderRadius: { title: `Radius`, type: O.BorderRadius },
            labels: {
              type: O.Object,
              title: `Labels`,
              controls: {
                length: { title: `Length`, type: O.String, defaultValue: `At least 8 characters` },
                uppercase: {
                  title: `Uppercase`,
                  type: O.String,
                  defaultValue: `At least one uppercase letter`,
                },
                lowercase: {
                  title: `Lowercase`,
                  type: O.String,
                  defaultValue: `At least one lowercase letter`,
                },
                digit: { title: `Digit`, type: O.String, defaultValue: `At least one digit` },
                special: {
                  title: `Special`,
                  type: O.String,
                  defaultValue: `At least one special character`,
                },
              },
            },
            borderObject: {
              type: O.Border,
              title: `Border`,
              optional: !0,
              defaultValue: {
                borderWidth: 0,
                borderStyle: `solid`,
                borderColor: `rgba(200,200,200,0.5)`,
              },
            },
            shadowObject: { type: O.BoxShadow, title: `Shadow`, optional: !0 },
          },
        },
      }),
      (z.defaultProps = { ...N.defaultProps, ...z.defaultProps }));
  }),
  U,
  W,
  G,
  K,
  q,
  J,
  we,
  Y,
  Te,
  Ee,
  X,
  De,
  Oe,
  Z,
  ke,
  Q,
  Ae,
  je,
  $,
  Me;
e(() => {
  (l(),
    T(),
    h(),
    t(),
    Ce(),
    ye(),
    me(),
    k(),
    Se(),
    (U = _(g.div)),
    (W = C(z)),
    (G = C(P)),
    (K = {
      CwQCNVbcg: `(max-width: 809.98px)`,
      n3P4N_nNh: `(min-width: 1200px)`,
      ZGD4T_NLc: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (q = () => typeof document < `u`),
    (J = []),
    (we = `framer-8nBZr`),
    (Y = {
      CwQCNVbcg: `framer-v-1aajv4h`,
      n3P4N_nNh: `framer-v-11lce6v`,
      ZGD4T_NLc: `framer-v-11u3myp`,
    }),
    (Te = (e, t, n) => (e && t ? `position` : n)),
    (Ee = {
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
    (De = {
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
    (Oe = {
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
    (ke = {
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
    (Q = { Desktop: `n3P4N_nNh`, Phone: `CwQCNVbcg`, Tablet: `ZGD4T_NLc` }),
    (Ae = ({ value: e }) =>
      re()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (je = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `n3P4N_nNh`,
    })),
    ($ = x(
      d(function (e, t) {
        let n = s(null),
          o = t ?? n,
          l = f(),
          { activeLocale: d, setLocale: h } = ue(),
          _ = oe(),
          { style: v, className: y, layoutId: x, variant: C, ...w } = je(e);
        ie(a(() => xe({}, d), [d]));
        let [T, re] = se(C, K, !1),
          D = te(we, _e, de),
          O = i(ae)?.isLayoutTemplate,
          k = !!i(p)?.transition?.layout,
          A = Te(O, k),
          j = () => !q() || T !== `CwQCNVbcg`;
        return (
          ne(),
          ce({}),
          c(ae.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Q,
              primaryVariantId: `n3P4N_nNh`,
              variantClassNames: Y,
            },
            children: u(m, {
              id: x ?? l,
              children: [
                c(Ae, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                c(g.div, {
                  ...w,
                  className: te(D, `framer-11lce6v`, y),
                  ref: o,
                  style: { ...v },
                  children: u(g.div, {
                    className: `framer-155oet6`,
                    "data-framer-name": `Contact Section`,
                    layout: A,
                    children: [
                      u(`div`, {
                        className: `framer-1qlofz3`,
                        "data-framer-name": `Container`,
                        children: [
                          c(S, {
                            breakpoint: T,
                            overrides: {
                              CwQCNVbcg: { __framer__styleAppearEffectEnabled: void 0 },
                              ZGD4T_NLc: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: u(U, {
                              __framer__animate: { transition: X },
                              __framer__animateOnce: !0,
                              __framer__enter: Ee,
                              __framer__exit: De,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-o1u3xn`,
                              "data-framer-name": `Contact Widget Block`,
                              children: [
                                u(`div`, {
                                  className: `framer-g892zg`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    c(b, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Reset password`,
                                        }),
                                      }),
                                      className: `framer-ilkmjp`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    c(b, {
                                      __fromCanvasComponent: !0,
                                      children: c(r, {
                                        children: c(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Set a new password for your account`,
                                        }),
                                      }),
                                      className: `framer-1r5mc0p`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                j() &&
                                  c(`div`, {
                                    className: `framer-onicpa hidden-1aajv4h`,
                                    "data-framer-name": `Contact Widget Grid`,
                                  }),
                              ],
                            }),
                          }),
                          c(U, {
                            __framer__animate: { transition: Z },
                            __framer__animateOnce: !0,
                            __framer__enter: Oe,
                            __framer__exit: ke,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-eemuig`,
                            "data-border": !0,
                            children: c(ee, {
                              links: [
                                { href: { webPageId: `G7kxX3e30` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `G7kxX3e30` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `G7kxX3e30` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                c(le, {
                                  children: c(E, {
                                    className: `framer-bkirn8-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `wNEE5P4Tt`,
                                    scopeId: `KFJtkYQU5`,
                                    children: c(S, {
                                      breakpoint: T,
                                      overrides: {
                                        CwQCNVbcg: { link: e[2] },
                                        ZGD4T_NLc: { link: e[1] },
                                      },
                                      children: c(z, {
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
                                          reset_password_button_label: `Reset Password`,
                                          shouldAppear: !0,
                                        },
                                        displayPasswordValidator: !0,
                                        gap: 16,
                                        height: `100%`,
                                        id: `wNEE5P4Tt`,
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
                                          newPassword: { displayName: `New Password` },
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
                                        layoutId: `wNEE5P4Tt`,
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
                          }),
                        ],
                      }),
                      c(S, {
                        breakpoint: T,
                        overrides: {
                          CwQCNVbcg: { y: (_?.y || 0) + 0 + 0 + 60 + 498 },
                          ZGD4T_NLc: { y: (_?.y || 0) + 0 + 0 + 80 + 356 },
                        },
                        children: c(le, {
                          height: 24,
                          width: _?.width || `100vw`,
                          y: (_?.y || 0) + 0 + 0 + 160 + 452,
                          children: c(E, {
                            className: `framer-172wbra-container`,
                            nodeId: `YNGeLlPNv`,
                            scopeId: `KFJtkYQU5`,
                            children: c(P, {
                              height: `100%`,
                              id: `YNGeLlPNv`,
                              layoutId: `YNGeLlPNv`,
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
        `.framer-8nBZr.framer-iq37v1, .framer-8nBZr .framer-iq37v1 { display: block; }`,
        `.framer-8nBZr.framer-11lce6v { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-8nBZr .framer-155oet6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-8nBZr .framer-1qlofz3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-8nBZr .framer-o1u3xn { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 584px; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-8nBZr .framer-g892zg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-8nBZr .framer-ilkmjp, .framer-8nBZr .framer-1r5mc0p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-8nBZr .framer-onicpa { display: grid; flex: none; gap: 80px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(10px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; min-height: 144px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-8nBZr .framer-eemuig { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 630px; overflow: visible; padding: 32px; position: relative; width: 1px; }`,
        `.framer-8nBZr .framer-bkirn8-container, .framer-8nBZr .framer-172wbra-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...he,
        ...A,
        `.framer-8nBZr[data-border="true"]::after, .framer-8nBZr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-8nBZr.framer-11lce6v { width: 810px; } .framer-8nBZr .framer-155oet6 { padding: 80px 0px 80px 0px; } .framer-8nBZr .framer-1qlofz3 { max-width: 990px; } .framer-8nBZr .framer-o1u3xn { gap: 40px; max-width: 500px; width: 43%; } .framer-8nBZr .framer-onicpa { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-8nBZr.framer-11lce6v { width: 390px; } .framer-8nBZr .framer-155oet6 { padding: 60px 0px 60px 0px; } .framer-8nBZr .framer-1qlofz3 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; max-width: 620px; padding: 72px 20px 0px 20px; } .framer-8nBZr .framer-o1u3xn { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 30px; max-width: unset; width: 100%; } .framer-8nBZr .framer-eemuig { flex: none; width: 100%; }}`,
      ],
      `framer-8nBZr`
    )),
    ($.displayName = `Forgot Password`),
    ($.defaultProps = { height: 2373, width: 1200 }),
    D(
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
        ...W,
        ...G,
        ...w(ge),
        ...w(j),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(P, {}, t)])) }),
    (Me = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerKFJtkYQU5`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2373`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ZGD4T_NLc":{"layout":["fixed","auto"]},"CwQCNVbcg":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default, J as queryParamNames };
//# sourceMappingURL=cgRFZI-16uI12sSM3KFFbsbj0a8-G0H8GRzwvlGEX-E.CTAtzHCP.mjs.map
