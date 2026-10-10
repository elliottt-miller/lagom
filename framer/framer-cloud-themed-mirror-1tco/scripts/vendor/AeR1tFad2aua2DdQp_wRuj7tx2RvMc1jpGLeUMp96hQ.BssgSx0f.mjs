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
  x as h,
} from "./react.DJ2-MjhO.mjs";
import { P as g, i as ee, o as _, t as v } from "./motion.Bn11pmd7.mjs";
import {
  E as y,
  G as b,
  L as x,
  R as S,
  T as C,
  _ as w,
  _t as T,
  b as E,
  ct as D,
  ft as O,
  i as k,
  it as A,
  j,
  k as M,
  l as N,
  n as P,
  p as te,
  pt as F,
  r as I,
  st as L,
  ut as R,
  wt as ne,
  x as re,
  y as z,
  yt as ie,
} from "./framer.CS_JK_Iv.mjs";
import { i as ae, n as oe, r as se, t as ce } from "./ilN_pt0Gn.B1pfsNZa.mjs";
import { a as le, i as ue, l as de, m as fe, n as pe } from "./framerauth.DCor1uou.mjs";
import { i as me, n as he, r as ge, t as _e } from "./Ra2J5G4be.aw5Cg2zO.mjs";
import { n as ve, t as B } from "./ActionButton.CggQ9uPg.mjs";
import { i as V, n as ye, o as be, r as H, s as xe, t as U } from "./HgF6iJ0ds.uditUfiW.mjs";
import { n as Se, t as Ce } from "./GoogleRecaptcha.Owc7lyGw.mjs";
import we, { t as Te } from "./bnH-1Zieog8U1qQJbSWMby60BmXmgPFWjGxOI9IG8gI.ZzQYeehb.mjs";
function Ee(e) {
  return !e || e.provider !== `google-recaptcha`
    ? !1
    : !e.protectedActions || !!e.protectedActions.signUp;
}
function De(e) {
  return e?.siteKey ?? ``;
}
function Oe() {
  let e = z.current();
  return e === z.canvas || e === z.thumbnail;
}
function ke() {
  return n !== void 0 && !!n.FramerAuth;
}
var W,
  Ae,
  je,
  G,
  K,
  q,
  J,
  Y,
  Me = e(() => {
    (s(),
      u(),
      r(),
      b(),
      de(),
      be(),
      Se(),
      (W = [
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
      (Ae = `sign_up`),
      (je = `Sign Up`),
      (G = `${Ae}_button_label`),
      (K = ie(function ({ ...e }) {
        let n = fe(),
          { project: r, fetchProject: i } = n,
          a = n.isLoading ?? n.loading,
          s = le().initializing,
          { user: c } = pe(),
          u = h(!1),
          [d, g] = m(null),
          [ee, _] = m(0),
          v = ke(),
          y = Ee(r?.captcha),
          b = De(r?.captcha),
          x = y && !b,
          S = v && !Oe(),
          C = y,
          w = S && (!!s || !!a),
          T = v && S && !s && !a && !r,
          E = o(() => !!c, [c]);
        l(() => {
          S || u.current || r || ((u.current = !0), i().catch(() => {}));
        }, [S, r, i]);
        let D = o(() => {
            if (r && r?.customFields.length > 0) {
              let e = xe(r?.customFields);
              if (e.success) return e.data.map((e) => ({ ...e }));
            }
            return [];
          }, [r]),
          [O, k] = m(W.filter((t) => e.inputFields[t.name]?.render || !0)),
          A = o(() => ({ ...e.button, label: e.button[G] }), [e.button, e.button[G]]),
          j = e.passwordValidator.shadowObject ? `${e.passwordValidator.shadowObject}` : null,
          [M, N] = m({ uppercase: !1, lowercase: !1, digit: !1, special: !1, length: !1 });
        l(() => {
          if (e.inputFields) {
            let t = [];
            (W.forEach((n, r) => {
              let i = J(n.name);
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
                  ? f(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: f(`path`, {
                        d: `M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z`,
                      }),
                    })
                  : f(`svg`, {
                      xmlns: `http://www.w3.org/2000/svg`,
                      width: `16`,
                      height: `16`,
                      fill: `currentColor`,
                      viewBox: `0 0 16 16`,
                      children: f(`path`, {
                        d: `M7.47 6.97L4.22 3.72a.75.75 0 00-1.06 1.06L6.38 8l-3.22 3.22a.75.75 0 101.06 1.06L7.47 9.06l3.25 3.25a.75.75 0 001.06-1.06L8.53 8l3.25-3.25a.75.75 0 00-1.06-1.06L7.47 6.94v.03z`,
                      }),
                    }),
                ` `,
                f(`span`, {
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
            e.name === `password` && N(q(e.value));
          },
          F = t(() => {
            (_((e) => e + 1), g(null), e.onError?.());
          }, [e.onError]),
          I =
            C && b
              ? f(Ce, {
                  siteKey: b,
                  resetKey: ee,
                  onVerify: g,
                  onExpire: () => g(null),
                  onError: () => g(null),
                })
              : null,
          L = async (e) => {
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
            let r = q(e.password);
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
            if (y && b && !d) return { ok: !1, message: `Please complete the CAPTCHA.` };
            let i = { email: e.email, password: e.password, name: e.name.trim(), ...n };
            y && b && d && (i.fetchOptions = { headers: { "x-captcha-response": d } });
            let a = await ue(i);
            return a.error
              ? (_((e) => e + 1), g(null), { ok: !1, message: a.error.message })
              : (_((e) => e + 1), g(null), { ok: !0, message: `Account created successfully.` });
          },
          R = o(() => {
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
            let i = c || r;
            return f(H, {
              ...e,
              isInitializing: w,
              isDisabled: E,
              fields: n,
              onSubmit: L,
              onInputChange: te,
              defaultValues: { ...i },
              button: A,
              submitAddon: I,
              onError: F,
            });
          }, [e, O, D, E, c, w, A, I, y, b, x, T, d, F]);
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
            R,
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
      (q = (e) => {
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
      (J = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (Y = {}),
      W.forEach((e, t) => {
        let n = J(e.name);
        Y[n] = {
          title: `${e.displayName}`,
          type: k.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: k.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: k.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: k.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      y(K, {
        ...V,
        link: { title: `Redirect`, type: k.Link },
        inputFields: { title: `Fields`, type: k.Object, controls: Y },
        input: {
          ...V.input,
          controls: {
            ...V.input.controls,
            icon: {
              type: k.Object,
              title: `Icon`,
              controls: {
                showPasswordVisibilityIcon: {
                  title: `Activated`,
                  type: k.Boolean,
                  defaultValue: !0,
                },
                color: {
                  title: `Color`,
                  type: k.Color,
                  defaultValue: `#000`,
                  hidden: (e) => !e.showPasswordVisibilityIcon,
                },
              },
            },
          },
        },
        button: {
          ...V.button,
          controls: {
            ...V.button.controls,
            label: void 0,
            [G]: { ...V.button.controls.label, defaultValue: je },
          },
        },
        displayPasswordValidator: {
          title: `Password Validator`,
          type: k.Boolean,
          defaultValue: !0,
          hidden: !1,
        },
        passwordValidator: {
          title: `Password Validator`,
          type: k.Object,
          hidden: (e) => !e.displayPasswordValidator,
          controls: {
            font: { type: k.Font, title: `Font`, controls: `extended` },
            fill: { title: `Fill`, type: k.Color, defaultValue: `transparent` },
            color: { title: `Text`, type: k.Color, defaultValue: `#000` },
            padding: { title: `Padding`, type: k.Padding },
            gap: { title: `Gap`, type: k.Number, defaultValue: 10, min: 0 },
            borderRadius: { title: `Radius`, type: k.BorderRadius },
            labels: {
              type: k.Object,
              title: `Labels`,
              controls: {
                length: { title: `Length`, type: k.String, defaultValue: `At least 8 characters` },
                uppercase: {
                  title: `Uppercase`,
                  type: k.String,
                  defaultValue: `At least one uppercase letter`,
                },
                lowercase: {
                  title: `Lowercase`,
                  type: k.String,
                  defaultValue: `At least one lowercase letter`,
                },
                digit: { title: `Digit`, type: k.String, defaultValue: `At least one digit` },
                special: {
                  title: `Special`,
                  type: k.String,
                  defaultValue: `At least one special character`,
                },
              },
            },
            borderObject: {
              type: k.Border,
              title: `Border`,
              optional: !0,
              defaultValue: {
                borderWidth: 0,
                borderStyle: `solid`,
                borderColor: `rgba(200,200,200,0.5)`,
              },
            },
            shadowObject: { type: k.BoxShadow, title: `Shadow`, optional: !0 },
          },
        },
      }),
      (K.defaultProps = { ...H.defaultProps, ...K.defaultProps }));
  }),
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  X,
  Re,
  ze,
  Be,
  Ve,
  He,
  Z,
  Ue,
  We,
  Q,
  $;
e(() => {
  (u(),
    b(),
    v(),
    r(),
    ve(),
    Me(),
    ye(),
    ae(),
    me(),
    Te(),
    (Ne = x(B)),
    (Pe = x(K)),
    (Fe = x(U)),
    (Ie = ne(g.div)),
    (Le = {
      fCxxAxZxd: `(min-width: 810px) and (max-width: 1259.98px)`,
      gAE8K9T8H: `(max-width: 809.98px)`,
      yrjSw0T5e: `(min-width: 1260px)`,
    }),
    (X = []),
    (Re = `framer-QZbLr`),
    (ze = {
      fCxxAxZxd: `framer-v-mhekoa`,
      gAE8K9T8H: `framer-v-nyjv3`,
      yrjSw0T5e: `framer-v-1fazjuq`,
    }),
    (Be = (e, t, n) => (e && t ? `position` : n)),
    (Ve = {
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
    (He = {
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
    (Z = { Desktop: `yrjSw0T5e`, Phone: `gAE8K9T8H`, Tablet: `fCxxAxZxd` }),
    (Ue = ({ value: e }) =>
      R()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (We = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `yrjSw0T5e`,
    })),
    (Q = ie(
      d(function (e, t) {
        let n = h(null),
          r = t ?? n,
          s = c(),
          { activeLocale: l, setLocale: u } = O(),
          d = A(),
          { style: m, className: v, layoutId: y, variant: b, ...x } = We(e);
        F(o(() => we({}, l), [l]));
        let [S, C] = D(b, Le, !1),
          k = M(Re, ce, _e),
          j = a(N)?.isLayoutTemplate,
          R = !!a(_)?.transition?.layout,
          ne = Be(j, R);
        return (
          T(),
          L({}),
          f(N.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `yrjSw0T5e`,
              variantClassNames: ze,
            },
            children: p(ee, {
              id: y ?? s,
              children: [
                f(Ue, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                f(g.div, {
                  ...x,
                  className: M(k, `framer-1fazjuq`, v),
                  ref: r,
                  style: { ...m },
                  children: p(Ie, {
                    animate: Ve,
                    className: `framer-1uwjap`,
                    "data-framer-appear-id": `1uwjap`,
                    initial: He,
                    layout: ne,
                    optimized: !0,
                    children: [
                      f(`div`, {
                        className: `framer-7625gg`,
                        "data-border": !0,
                        "data-framer-name": `Service Card Wrapper`,
                        children: p(`div`, {
                          className: `framer-6pydjx`,
                          children: [
                            f(E, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(P, {
                                  children: f(I, {
                                    className: `framer-qq03k-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `KTUpdH4uk`,
                                    scopeId: `O1MU31CkI`,
                                    children: f(w, {
                                      breakpoint: S,
                                      overrides: {
                                        fCxxAxZxd: { callback: e[3], link: e[2] },
                                        gAE8K9T8H: { callback: e[5], link: e[4] },
                                      },
                                      children: f(B, {
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
                                        id: `KTUpdH4uk`,
                                        label: `Google`,
                                        layoutId: `KTUpdH4uk`,
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
                            f(E, {
                              links: [
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                f(P, {
                                  children: f(I, {
                                    className: `framer-1z41jc-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `kVx4FrVtO`,
                                    scopeId: `O1MU31CkI`,
                                    children: f(w, {
                                      breakpoint: S,
                                      overrides: {
                                        fCxxAxZxd: { link: e[1] },
                                        gAE8K9T8H: { link: e[2] },
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
                                          sign_up_button_label: `Sign Up`,
                                        },
                                        displayPasswordValidator: !0,
                                        gap: 16,
                                        height: `100%`,
                                        id: `kVx4FrVtO`,
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
                                          name: { displayName: `Name` },
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
                                        layoutId: `kVx4FrVtO`,
                                        link: e[0],
                                        passwordValidator: {
                                          borderRadius: `8px`,
                                          color: `var(--token-4f27970a-6a91-4da2-b1a8-401bbb119321, rgb(41, 41, 41))`,
                                          fill: `rgba(43, 43, 43, 0)`,
                                          font: {
                                            fontFamily: `"Funnel Display", sans-serif`,
                                            fontSize: `14px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `1em`,
                                          },
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
                            f(re, {
                              __fromCanvasComponent: !0,
                              children: f(i, {
                                children: p(`p`, {
                                  className: `framer-styles-preset-1edo0ga`,
                                  "data-styles-preset": `ilN_pt0Gn`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: [
                                    `Already have an account? `,
                                    f(te, {
                                      href: { webPageId: `KyoFmDI9b` },
                                      motionChild: !0,
                                      nodeId: `N2B9DYURe`,
                                      openInNewTab: !0,
                                      preserveParams: !1,
                                      relValues: [],
                                      scopeId: `O1MU31CkI`,
                                      smoothScroll: !1,
                                      children: f(g.a, {
                                        className: `framer-styles-preset-1das0kl`,
                                        "data-styles-preset": `Ra2J5G4be`,
                                        children: `Sign In`,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-1dtd0gi`,
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
                          fCxxAxZxd: { y: (d?.y || 0) + 0 + 0 + 100 + 424 },
                          gAE8K9T8H: {
                            width: `calc(${d?.width || `100vw`} - 40px)`,
                            y: (d?.y || 0) + 0 + 0 + 80 + 424,
                          },
                        },
                        children: f(P, {
                          height: 24,
                          width: `calc(${d?.width || `100vw`} - 60px)`,
                          y: (d?.y || 0) + 0 + 0 + 120 + 424,
                          children: f(I, {
                            className: `framer-1akd4p3-container`,
                            nodeId: `vMLa1swdT`,
                            scopeId: `O1MU31CkI`,
                            children: f(U, {
                              height: `100%`,
                              id: `vMLa1swdT`,
                              layoutId: `vMLa1swdT`,
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
        `.framer-QZbLr.framer-i0i2td, .framer-QZbLr .framer-i0i2td { display: block; }`,
        `.framer-QZbLr.framer-1fazjuq { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-QZbLr .framer-1uwjap { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 120px 30px 120px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-QZbLr .framer-7625gg { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-QZbLr .framer-6pydjx { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-QZbLr .framer-qq03k-container, .framer-QZbLr .framer-1z41jc-container, .framer-QZbLr .framer-1akd4p3-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-QZbLr .framer-1dtd0gi { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...oe,
        ...he,
        `.framer-QZbLr[data-border="true"]::after, .framer-QZbLr [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-QZbLr.framer-1fazjuq { height: 1965px; width: 810px; } .framer-QZbLr .framer-1uwjap { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-QZbLr.framer-1fazjuq { height: 1967px; width: 390px; } .framer-QZbLr .framer-1uwjap { padding: 80px 20px 80px 20px; }}`,
      ],
      `framer-QZbLr`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 2560.8, width: 1260 }),
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
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYmmPXXcVwIZDKFA.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Ne,
        ...Pe,
        ...Fe,
        ...S(se),
        ...S(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([j(U, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerO1MU31CkI`,
          slots: [],
          annotations: {
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `2560.8`,
            framerIntrinsicWidth: `1260`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"fCxxAxZxd":{"layout":["fixed","fixed"]},"gAE8K9T8H":{"layout":["fixed","fixed"]}}}`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, X as queryParamNames };
//# sourceMappingURL=AeR1tFad2aua2DdQp_wRuj7tx2RvMc1jpGLeUMp96hQ.BssgSx0f.mjs.map
