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
  x as d,
} from "./react.DJ2-MjhO.mjs";
import { P as f, i as p, o as m, t as h } from "./motion.Bn11pmd7.mjs";
import {
  E as g,
  G as _,
  L as v,
  T as y,
  _ as b,
  _t as ee,
  b as te,
  ct as ne,
  ft as re,
  i as x,
  it as ie,
  j as S,
  k as C,
  l as w,
  n as ae,
  pt as oe,
  r as T,
  st as se,
  ut as E,
  wt as ce,
  yt as D,
} from "./framer.CS_JK_Iv.mjs";
import { l as O, s as k } from "./framerauth.DCor1uou.mjs";
import { a as A, i as j, n as le, o as ue, r as M, t as N } from "./HgF6iJ0ds.uditUfiW.mjs";
import de, { t as fe } from "./-tnLvFGPevupfZOcsktADEFUt4FCtd6OY9PwRQEq7Kw.C-qBG6uK.mjs";
var P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  pe = e(() => {
    (o(),
      t(),
      _(),
      ue(),
      O(),
      (P = [
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
      (F = `reset_password`),
      (I = `Reset Password`),
      (L = `${F}_button_label`),
      (R = D(function ({ ...e }) {
        let [t, n] = u(P),
          [i, o] = u(null);
        a(() => {
          let e = A(`token`);
          o(e);
        }, []);
        let s = r(() => ({ ...e.button, label: e.button[L] }), [e.button, e.button[L]]),
          d = e.passwordValidator.shadowObject ? `${e.passwordValidator.shadowObject}` : null,
          [f, p] = u({ uppercase: !1, lowercase: !1, digit: !1, special: !1, length: !1 });
        a(() => {
          if (e.inputFields) {
            let t = [];
            (P.forEach((n, r) => {
              let i = B(n.name);
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
        let m = (t, n) =>
            l(`div`, {
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
            e.name === `new_password` && p(z(e.value));
          },
          g = async (e) => {
            if (!i) return { ok: !1, message: `Token not found.` };
            let t = z(e.new_password);
            if (Object.values(t).some((e) => e === !1))
              return (p(t), { ok: !1, message: `Password does not meet requirements.` });
            let n = await k({ new_password: e.new_password, token: i });
            return n.error
              ? { ok: !1, message: n.error.message }
              : { ok: !0, message: n.data?.message || `Password has been reset.` };
          };
        return l(`div`, {
          style: {
            width: `100%`,
            height: `auto`,
            display: `flex`,
            flexDirection: `column`,
            position: `relative`,
            gap: e.gap,
          },
          children: [
            c(M, { ...e, button: s, fields: t, onSubmit: g, onInputChange: h }),
            e.displayPasswordValidator &&
              l(`div`, {
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
      (z = (e) => {
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
      (B = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (V = {}),
      P.forEach((e, t) => {
        let n = B(e.name);
        V[n] = {
          title: `${e.displayName}`,
          type: x.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: x.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: x.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: x.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      g(R, {
        ...j,
        inputFields: { title: `Inputs`, type: x.Object, controls: V },
        input: {
          ...j.input,
          controls: {
            ...j.input.controls,
            icon: {
              type: x.Object,
              title: `Icon`,
              controls: {
                showPasswordVisibilityIcon: {
                  title: `Activated`,
                  type: x.Boolean,
                  defaultValue: !0,
                },
                color: {
                  title: `Color`,
                  type: x.Color,
                  defaultValue: `#000`,
                  hidden: (e) => !e.showPasswordVisibilityIcon,
                },
              },
            },
          },
        },
        link: { title: `Redirect`, type: x.Link },
        button: {
          ...j.button,
          controls: {
            ...j.button.controls,
            label: void 0,
            [L]: { ...j.button.controls.label, defaultValue: I },
          },
        },
        displayPasswordValidator: {
          title: `Password Validator`,
          type: x.Boolean,
          defaultValue: !0,
          hidden: !1,
        },
        passwordValidator: {
          title: `Password Validator`,
          type: x.Object,
          hidden: (e) => !e.displayPasswordValidator,
          controls: {
            font: { type: x.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: x.Color, defaultValue: `transparent` },
            color: { title: `Text`, type: x.Color, defaultValue: `#000` },
            padding: { title: `Padding`, type: x.Padding },
            gap: { title: `Gap`, type: x.Number, defaultValue: 10, min: 0 },
            borderRadius: { title: `Radius`, type: x.BorderRadius },
            labels: {
              type: x.Object,
              title: `Labels`,
              controls: {
                length: { title: `Length`, type: x.String, defaultValue: `At least 8 characters` },
                uppercase: {
                  title: `Uppercase`,
                  type: x.String,
                  defaultValue: `At least one uppercase letter`,
                },
                lowercase: {
                  title: `Lowercase`,
                  type: x.String,
                  defaultValue: `At least one lowercase letter`,
                },
                digit: { title: `Digit`, type: x.String, defaultValue: `At least one digit` },
                special: {
                  title: `Special`,
                  type: x.String,
                  defaultValue: `At least one special character`,
                },
              },
            },
            borderObject: {
              type: x.Border,
              title: `Border`,
              optional: !0,
              defaultValue: {
                borderWidth: 0,
                borderStyle: `solid`,
                borderColor: `rgba(200,200,200,0.5)`,
              },
            },
            shadowObject: { type: x.BoxShadow, title: `Shadow`, optional: !0 },
          },
        },
      }),
      (R.defaultProps = { ...M.defaultProps, ...R.defaultProps }));
  }),
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
  me,
  he,
  $,
  ge;
e(() => {
  (o(),
    _(),
    h(),
    t(),
    pe(),
    le(),
    fe(),
    (H = v(R)),
    (U = v(N)),
    (W = ce(f.div)),
    (G = {
      LcbAYphhp: `(min-width: 1260px)`,
      MhKjNjW7Y: `(min-width: 810px) and (max-width: 1259.98px)`,
      oR35JkQPe: `(max-width: 809.98px)`,
    }),
    (K = []),
    (q = `framer-MwkVk`),
    (J = {
      LcbAYphhp: `framer-v-jvaozs`,
      MhKjNjW7Y: `framer-v-155kzbc`,
      oR35JkQPe: `framer-v-m09hnj`,
    }),
    (Y = (e, t, n) => (e && t ? `position` : n)),
    (X = {
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
    (Z = {
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
    (Q = { Desktop: `LcbAYphhp`, Phone: `oR35JkQPe`, Tablet: `MhKjNjW7Y` }),
    (me = ({ value: e }) =>
      E()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (he = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `LcbAYphhp`,
    })),
    ($ = D(
      s(function (e, t) {
        let a = d(null),
          o = t ?? a,
          s = i(),
          { activeLocale: u, setLocale: h } = re(),
          g = ie(),
          { style: _, className: v, layoutId: y, variant: x, ...S } = he(e);
        oe(r(() => de({}, u), [u]));
        let [E, ce] = ne(x, G, !1),
          D = C(q),
          O = n(w)?.isLayoutTemplate,
          k = !!n(m)?.transition?.layout,
          A = Y(O, k);
        return (
          ee(),
          se({}),
          c(w.Provider, {
            value: {
              activeVariantId: E,
              humanReadableVariantMap: Q,
              primaryVariantId: `LcbAYphhp`,
              variantClassNames: J,
            },
            children: l(p, {
              id: y ?? s,
              children: [
                c(me, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                c(f.div, {
                  ...S,
                  className: C(D, `framer-jvaozs`, v),
                  ref: o,
                  style: { ..._ },
                  children: l(W, {
                    animate: X,
                    className: `framer-12geqrl`,
                    "data-framer-appear-id": `12geqrl`,
                    initial: Z,
                    layout: A,
                    optimized: !0,
                    children: [
                      c(`div`, {
                        className: `framer-twrywx`,
                        "data-border": !0,
                        "data-framer-name": `Service Card Wrapper`,
                        children: c(`div`, {
                          className: `framer-2v0ml3`,
                          children: c(te, {
                            links: [
                              { href: { webPageId: `KyoFmDI9b` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `KyoFmDI9b` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `KyoFmDI9b` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              c(ae, {
                                children: c(T, {
                                  className: `framer-q6ebvn-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `C_B7Winav`,
                                  scopeId: `PPt3ASS2o`,
                                  children: c(b, {
                                    breakpoint: E,
                                    overrides: {
                                      MhKjNjW7Y: { link: e[1] },
                                      oR35JkQPe: { link: e[2] },
                                    },
                                    children: c(R, {
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
                                        reset_password_button_label: `Reset Password`,
                                        shouldAppear: !0,
                                      },
                                      displayPasswordValidator: !0,
                                      gap: 16,
                                      height: `100%`,
                                      id: `C_B7Winav`,
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
                                      inputFields: { newPassword: { displayName: `New Password` } },
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
                                      layoutId: `C_B7Winav`,
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
                      }),
                      c(b, {
                        breakpoint: E,
                        overrides: {
                          MhKjNjW7Y: { y: (g?.y || 0) + 0 + 0 + 100 + 122 },
                          oR35JkQPe: {
                            width: `calc(${g?.width || `100vw`} - 40px)`,
                            y: (g?.y || 0) + 0 + 0 + 80 + 122,
                          },
                        },
                        children: c(ae, {
                          height: 24,
                          width: `calc(${g?.width || `100vw`} - 60px)`,
                          y: (g?.y || 0) + 0 + 0 + 130 + 122,
                          children: c(T, {
                            className: `framer-f9gtfr-container`,
                            nodeId: `L6CAqEcu8`,
                            scopeId: `PPt3ASS2o`,
                            children: c(N, {
                              height: `100%`,
                              id: `L6CAqEcu8`,
                              layoutId: `L6CAqEcu8`,
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
        `.framer-MwkVk.framer-1xpvvij, .framer-MwkVk .framer-1xpvvij { display: block; }`,
        `.framer-MwkVk.framer-jvaozs { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-MwkVk .framer-12geqrl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 30px 130px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MwkVk .framer-twrywx { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwkVk .framer-2v0ml3 { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MwkVk .framer-q6ebvn-container, .framer-MwkVk .framer-f9gtfr-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-MwkVk[data-border="true"]::after, .framer-MwkVk [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-MwkVk.framer-jvaozs { height: 1807px; width: 810px; } .framer-MwkVk .framer-12geqrl { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-MwkVk.framer-jvaozs { height: 1832px; width: 390px; } .framer-MwkVk .framer-12geqrl { padding: 80px 20px 80px 20px; }}`,
      ],
      `framer-MwkVk`
    )),
    ($.displayName = `Forgot Password`),
    ($.defaultProps = { height: 2302.8, width: 1260 }),
    y(
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
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYqGPXXcVwIZDKFA.woff2`,
              weight: `500`,
            },
          ],
        },
        ...H,
        ...U,
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(N, {}, t)])) }),
    (ge = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerPPt3ASS2o`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1260`,
            framerIntrinsicHeight: `2302.8`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"MhKjNjW7Y":{"layout":["fixed","fixed"]},"oR35JkQPe":{"layout":["fixed","fixed"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ge as __FramerMetadata__, $ as default, K as queryParamNames };
//# sourceMappingURL=NMLNqwMJcXPJBlgqY2dtf0pSrnPR2yDK2pCuqFCUb2k.D3n060dn.mjs.map
