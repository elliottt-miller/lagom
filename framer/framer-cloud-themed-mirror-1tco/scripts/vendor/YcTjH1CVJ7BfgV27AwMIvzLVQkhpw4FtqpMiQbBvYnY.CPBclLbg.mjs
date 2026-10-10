import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  E as n,
  F as r,
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
import { P as g, i as _, o as v, t as y } from "./motion.Bn11pmd7.mjs";
import {
  E as b,
  G as x,
  L as S,
  R as C,
  T as w,
  _ as T,
  _t as E,
  b as D,
  bt as O,
  ct as k,
  ft as A,
  i as j,
  it as ee,
  j as M,
  k as N,
  l as P,
  n as F,
  pt as te,
  r as I,
  st as ne,
  ut as re,
  wt as ie,
  x as ae,
  y as L,
  yt as oe,
} from "./framer.CS_JK_Iv.mjs";
import { a as se, f as ce, l as le, m as ue, n as de, p as fe } from "./framerauth.DCor1uou.mjs";
import { a as pe, n as me, t as he } from "./FramerAuthV2.kZxb6MRo.mjs";
import { i as ge, n as _e, r as ve, t as ye } from "./wmi7dzLRt.CHmFiX1M.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./aZ0GztYsn.BtzrpC73.mjs";
import { n as we, t as Te } from "./ActionButton.CggQ9uPg.mjs";
import {
  c as R,
  i as z,
  n as Ee,
  o as De,
  r as Oe,
  s as ke,
  t as B,
} from "./HgF6iJ0ds.uditUfiW.mjs";
import Ae, { t as je } from "./h0N-sERb169Mo56TPL1-MOltXxhpnfYzgW8exkvTq-4.DrRvXL2v.mjs";
function Me() {
  let e = L.current();
  return e === L.canvas || e === L.thumbnail;
}
function Ne() {
  return t !== void 0 && !!t.FramerAuth;
}
var V,
  Pe,
  Fe,
  H,
  Ie,
  U,
  W,
  G,
  K,
  q,
  J,
  Le = e(() => {
    (s(),
      u(),
      n(),
      x(),
      le(),
      De(),
      (V = [
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
      ]),
      (Pe = [
        {
          displayName: `Set password`,
          name: `new_password`,
          type: `string`,
          format: `password`,
          required: !1,
          overridable: !1,
          placeholder: `Set password`,
          description: `Set a password to sign-in with Email & Password`,
          render: !0,
          hidden: !1,
        },
        {
          displayName: `Confirm password`,
          name: `confirm_password`,
          type: `string`,
          format: `password`,
          required: !1,
          overridable: !1,
          placeholder: `Confirm password`,
          render: !0,
          hidden: !1,
        },
      ]),
      (Fe = [
        {
          displayName: `Current Password`,
          name: `current_password`,
          type: `string`,
          format: `password`,
          required: !1,
          overridable: !1,
          placeholder: `Current Password`,
          render: !0,
          hidden: !1,
        },
        {
          displayName: `New Password`,
          name: `new_password`,
          type: `string`,
          format: `password`,
          required: !1,
          overridable: !1,
          placeholder: `New Password`,
          render: !0,
          hidden: !1,
        },
      ]),
      (H = `member_profile`),
      (Ie = `Save Changes`),
      (U = `${H}_button_label`),
      (W = `${H}_secondary_button_label`),
      (G = `${H}_secondary_button_cancel_label`),
      (K = oe(function ({ ...e }) {
        let t = de(),
          { user: n, setUser: r } = t,
          i = t.isLoading ?? t.loading,
          a = ue(),
          { project: s, fetchProject: c } = a,
          u = a.isLoading ?? a.loading,
          d = se().initializing,
          p = h(!1),
          g = Ne(),
          [_, v] = m(void 0),
          y = g && !Me();
        l(() => {
          y || p.current || s || ((p.current = !0), c().catch(() => {}));
        }, [y, s, c]);
        let b = o(() => {
            if (s && s?.customFields.length > 0) {
              let e = ke(s?.customFields);
              if (e.success) return e.data;
            }
            return [];
          }, [s]),
          [x, S] = m(V),
          [C, w] = m(!1),
          T = !!n?.has_password,
          E = Me(),
          D = E || T,
          O = E || !!n;
        l(() => {
          n && v(n);
        }, [n]);
        let k = y && (!!d || !!u || !!i),
          A = o(() => ({ ...e.button, label: e.button[U] }), [e.button, e.button[U]]),
          j = o(
            () => ({
              ...e.secondaryButton,
              label: e.secondaryButton?.[W],
              cancelLabel: e.secondaryButton?.[G],
            }),
            [e.secondaryButton]
          );
        l(() => {
          if (e.inputFields) {
            let t = [];
            (V.forEach((n, r) => {
              let i = q(n.name);
              if (!(i in e.inputFields)) return;
              let a = e.inputFields[i],
                o = a.render || !0,
                s = a.hidden || !1,
                c = a.displayName,
                l = c;
              o === !0 && t.push({ ...n, hidden: s, displayName: c, placeholder: l });
            }),
              S(t));
          }
        }, [e.inputFields]);
        let ee = async (e) => {
            let t = e,
              i = t.current_password ?? ``,
              a = t.new_password ?? ``,
              o = t.confirm_password ?? ``,
              s = {};
            if (i || a || o) {
              if (!T && a !== o) return { ok: !1, message: `Passwords do not match.` };
              (a && (s.newPassword = a), i && (s.currentPassword = i));
            }
            let c = {};
            b.forEach((e) => {
              let n = t[e.name];
              ((n =
                e.type === `boolean`
                  ? n === `on` || (typeof n == `boolean` && n === !0)
                  : e.type === `number`
                    ? Number(n)
                    : String(n)),
                (c[e.name] = n));
            });
            let l = await fe({ email: e.email, name: e.name, ...c, ...s });
            if (l.error) return { ok: !1, message: l.error.message };
            w(!1);
            let u = !!s.newPassword;
            return (
              r({ ...n, ...l.data, has_password: T || u }),
              { ok: !0, message: `Profile updated successfully.` }
            );
          },
          M = o(() => (O ? (D ? (C ? Fe : []) : Pe) : []), [O, D, C]),
          N = o(() => {
            let t = b.map((e) => ({ ...e, placeholder: e.placeholder || e.displayName }));
            return [...x, ...t, ...M]
              .map((t) => {
                let n = t;
                if (t.overridable) {
                  let r = e.inputFields[t.name];
                  r && (n = { ...n, ...r });
                }
                return n;
              })
              .filter((e) => e.render !== !1);
          }, [x, b, M]),
          P = O && D ? { active: C, onClick: () => w((e) => !e) } : null;
        return f(Oe, {
          ...e,
          isInitializing: k,
          button: A,
          fields: N,
          defaultValues: _,
          onSubmit: ee,
          secondaryButton: j,
          secondaryButtonAction: P,
        });
      }, [])),
      (q = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (J = {}),
      V.forEach((e, t) => {
        let n = q(e.name);
        J[n] = {
          title: `${e.displayName}`,
          type: j.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: j.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: j.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: j.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      b(K, {
        label: z.label,
        input: { ...z.input, controls: { ...z.input.controls, iconColor: void 0 } },
        button: {
          ...z.button,
          controls: {
            ...z.button.controls,
            label: void 0,
            [U]: { ...z.button.controls.label, defaultValue: Ie },
          },
        },
        secondaryButton: {
          ...R,
          controls: {
            ...R.controls,
            label: void 0,
            cancelLabel: void 0,
            [W]: R.controls.label,
            [G]: R.controls.cancelLabel,
          },
        },
        gap: z.gap,
        inputFields: { title: `Inputs`, type: j.Object, controls: J },
        link: void 0,
        onSuccess: z.onSuccess,
        onError: z.onError,
      }),
      (K.defaultProps = { ...Oe.defaultProps, ...K.defaultProps }));
  });
function Y(e) {
  let {
      image: t,
      borderRadius: n,
      iconColor: i,
      iconSize: a,
      border: s,
      backgroundColor: c,
      viewOnly: u,
      style: d,
    } = e,
    [h, g] = m(!1),
    [_, v] = m(!1),
    [y, b] = m(!1),
    [x, S] = m(null),
    { user: C, setUser: w } = de(),
    T = o(() => !C || u === !0, [C, u]),
    E = `https://framerauth.b-cdn.net/pictures/ProfilePic.png`,
    [D, O] = m(E);
  l(() => {
    let e = x || C?.image || t?.src || E;
    O(e);
  }, [C, t, E, x]);
  let k = () => {
      r(() => g(!0));
    },
    A = () => {
      r(() => g(!1));
    },
    j = () => {
      if (T || y) return;
      let e = document.createElement(`input`);
      ((e.type = `file`),
        (e.accept = `image/*`),
        (e.onchange = async (e) => {
          let t = e.target.files?.[0];
          if (t) {
            (b(!0), v(!0));
            let e = URL.createObjectURL(t);
            S(e);
            try {
              let n = new FormData();
              n.append(`file`, t);
              let r = await ce(n);
              r.data
                ? (URL.revokeObjectURL(e), S(null), w({ ...C, image: r.data.url }))
                : (console.error(`Upload failed:`, r.error), URL.revokeObjectURL(e), S(null));
            } catch (t) {
              (console.error(`Upload error:`, t), URL.revokeObjectURL(e), S(null));
            } finally {
              (b(!1), setTimeout(() => v(!1), 150));
            }
          }
        }),
        e.click());
    };
  return f(`div`, {
    style: {
      ...d,
      width: `100%`,
      height: `100%`,
      borderRadius: n,
      backgroundColor: c,
      position: `relative`,
      overflow: `hidden`,
      cursor: T || y ? `default` : `pointer`,
      ...s,
      backgroundImage: `url(${D})`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      opacity: _ ? 0.8 : 1,
      filter: y ? `brightness(0.9)` : `brightness(1)`,
    },
    onMouseEnter: T || y ? void 0 : k,
    onMouseLeave: T || y ? void 0 : A,
    onClick: T ? void 0 : j,
    role: T ? `img` : `button`,
    tabIndex: T ? -1 : 0,
    "aria-label": T ? `Profile image` : y ? `Uploading...` : `Upload profile image`,
    children: f(`div`, {
      style: {
        position: `absolute`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: `rgba(0, 0, 0, 0.5)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        opacity: (h && !T) || y ? 1 : 0,
        transition: `opacity 0.2s ease`,
        borderRadius: n,
      },
      children: f(
        y
          ? () => {
              let [e, t] = m(0);
              return (
                l(() => {
                  let e = Date.now(),
                    n = () => {
                      let r = Date.now() - e;
                      (t((r / 8) % 360), requestAnimationFrame(n));
                    },
                    r = requestAnimationFrame(n);
                  return () => cancelAnimationFrame(r);
                }, []),
                p(`svg`, {
                  width: a,
                  height: a,
                  viewBox: `0 0 24 24`,
                  style: { transform: `rotate(${e}deg)` },
                  children: [
                    f(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `10`,
                      fill: `none`,
                      stroke: i,
                      strokeWidth: `2`,
                      opacity: `0.2`,
                    }),
                    f(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `10`,
                      fill: `none`,
                      stroke: i,
                      strokeWidth: `2`,
                      strokeDasharray: `15 85`,
                      strokeLinecap: `round`,
                      opacity: `1`,
                    }),
                  ],
                })
              );
            }
          : () =>
              p(`svg`, {
                width: a,
                height: a,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: i,
                strokeWidth: `2`,
                children: [
                  f(`line`, { x1: `12`, y1: `5`, x2: `12`, y2: `19` }),
                  f(`line`, { x1: `5`, y1: `12`, x2: `19`, y2: `12` }),
                ],
              }),
        {}
      ),
    }),
  });
}
var Re = e(() => {
    (u(),
      n(),
      x(),
      le(),
      b(Y, {
        viewOnly: {
          type: j.Boolean,
          title: `View Only`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        image: { type: j.ResponsiveImage, title: `Placeholder` },
        borderRadius: { type: j.BorderRadius, title: `Radius`, defaultValue: `50%` },
        border: {
          type: j.Border,
          title: `Border`,
          defaultValue: { borderWidth: 2, borderStyle: `solid`, borderColor: `#EEEEEE` },
        },
        iconColor: { type: j.Color, title: `Icon`, defaultValue: `#FFFFFF` },
        iconSize: {
          type: j.Number,
          title: `Icon Size`,
          defaultValue: 24,
          min: 12,
          max: 48,
          step: 2,
          unit: `px`,
        },
      }));
  }),
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  X,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  Z,
  $e,
  et,
  Q,
  $;
e(() => {
  (u(),
    x(),
    y(),
    n(),
    Le(),
    we(),
    Re(),
    Ee(),
    pe(),
    be(),
    ge(),
    je(),
    (ze = S(Y)),
    (Be = O(ae, { nodeId: `o6c9jJFR4`, override: me, scopeId: `DHYZ8McyT` })),
    (Ve = O(ae, { nodeId: `dnpxU3xeR`, override: he, scopeId: `DHYZ8McyT` })),
    (He = S(K)),
    (Ue = S(Te)),
    (We = S(B)),
    (X = ie(g.div)),
    (Ge = {
      eShwqPAPv: `(min-width: 1260px)`,
      n79Alakco: `(max-width: 809.98px)`,
      W4l3IMrEN: `(min-width: 810px) and (max-width: 1259.98px)`,
    }),
    (Ke = []),
    (qe = `framer-MT6Gl`),
    (Je = {
      eShwqPAPv: `framer-v-5h9mxu`,
      n79Alakco: `framer-v-s7pu5c`,
      W4l3IMrEN: `framer-v-d5bh7v`,
    }),
    (Ye = (e, t, n) => (e && t ? `position` : n)),
    (Xe = {
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
    (Ze = {
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
    (Qe = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Z = { Desktop: `eShwqPAPv`, Phone: `n79Alakco`, Tablet: `W4l3IMrEN` }),
    ($e = ({ value: e }) =>
      re()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (et = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `eShwqPAPv`,
    })),
    (Q = oe(
      d(function (e, t) {
        let n = h(null),
          r = t ?? n,
          s = c(),
          { activeLocale: l, setLocale: u } = A(),
          d = ee(),
          { style: m, className: y, layoutId: b, variant: x, ...S } = et(e);
        te(o(() => Ae({}, l), [l]));
        let [C, w] = k(x, Ge, !1),
          O = N(qe, ye, Ce),
          j = a(P)?.isLayoutTemplate,
          M = !!a(v)?.transition?.layout,
          re = Ye(j, M);
        return (
          E(),
          ne({}),
          f(P.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Z,
              primaryVariantId: `eShwqPAPv`,
              variantClassNames: Je,
            },
            children: p(_, {
              id: b ?? s,
              children: [
                f($e, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                f(g.div, {
                  ...S,
                  className: N(O, `framer-5h9mxu`, y),
                  ref: r,
                  style: { ...m },
                  children: p(X, {
                    animate: Xe,
                    className: `framer-1szh1qu`,
                    "data-framer-appear-id": `1szh1qu`,
                    initial: Ze,
                    layout: re,
                    optimized: !0,
                    children: [
                      f(`div`, {
                        className: `framer-1xyaner`,
                        "data-border": !0,
                        "data-framer-name": `Service Card Wrapper`,
                        children: p(`div`, {
                          className: `framer-1an98lf`,
                          children: [
                            f(F, {
                              children: f(I, {
                                className: `framer-1d15dbb-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `QuycGWkYg`,
                                scopeId: `DHYZ8McyT`,
                                children: f(Y, {
                                  border: {
                                    borderColor: `rgb(238, 238, 238)`,
                                    borderStyle: `solid`,
                                    borderWidth: 0,
                                  },
                                  borderRadius: `50%`,
                                  height: `100%`,
                                  iconColor: `rgb(255, 255, 255)`,
                                  iconSize: 24,
                                  id: `QuycGWkYg`,
                                  image: Qe(
                                    {
                                      pixelHeight: 460,
                                      pixelWidth: 460,
                                      src: `https://framerusercontent.com/images/GhOxDHBpBfPJwbNie9J7QrhHu3U.png?width=460&height=460`,
                                    },
                                    ``
                                  ),
                                  layoutId: `QuycGWkYg`,
                                  style: { height: `100%`, width: `100%` },
                                  viewOnly: !1,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            f(Be, {
                              __fromCanvasComponent: !0,
                              children: f(i, {
                                children: f(`h6`, {
                                  className: `framer-styles-preset-1bk5v37`,
                                  "data-styles-preset": `wmi7dzLRt`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Name`,
                                }),
                              }),
                              className: `framer-28s5tx`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(Ve, {
                              __fromCanvasComponent: !0,
                              children: f(i, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-30j4q8`,
                                  "data-styles-preset": `aZ0GztYsn`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                  },
                                  children: `Email Address`,
                                }),
                              }),
                              className: `framer-1vwqlyy`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            f(F, {
                              children: f(I, {
                                className: `framer-1hgwuv-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `hzrOt1cnP`,
                                scopeId: `DHYZ8McyT`,
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
                                    member_profile_button_label: `Save Changes`,
                                    shouldAppear: !0,
                                  },
                                  gap: 16,
                                  height: `100%`,
                                  id: `hzrOt1cnP`,
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
                                  inputFields: {
                                    email: { displayName: `Email` },
                                    name: { displayName: `Name` },
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
                                  layoutId: `hzrOt1cnP`,
                                  secondaryButton: {
                                    borderObject: {
                                      borderColor: `rgba(200, 200, 200, 0.5)`,
                                      borderStyle: `solid`,
                                      borderWidth: 1,
                                    },
                                    borderRadius: `8px`,
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
                                    color: `rgb(51, 51, 51)`,
                                    fill: `rgb(255, 255, 255)`,
                                    member_profile_secondary_button_cancel_label: `Cancel`,
                                    member_profile_secondary_button_label: `Change Password`,
                                  },
                                  style: { width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      f(D, {
                        links: [
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                        ],
                        children: (e) =>
                          f(F, {
                            children: f(I, {
                              className: `framer-nrl5kr-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `EYvpUi7nz`,
                              scopeId: `DHYZ8McyT`,
                              children: f(T, {
                                breakpoint: C,
                                overrides: {
                                  n79Alakco: { callback: e[5], link: e[4] },
                                  W4l3IMrEN: { callback: e[3], link: e[2] },
                                },
                                children: f(Te, {
                                  actionType: `auth`,
                                  authAction: `signOut`,
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
                                  id: `EYvpUi7nz`,
                                  label: `Sign Out`,
                                  layoutId: `EYvpUi7nz`,
                                  link: e[0],
                                  newTab: !1,
                                  pluginId: `stripe`,
                                  priceId: ``,
                                  quantity: 1,
                                  storeAction: `portal`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      }),
                      f(T, {
                        breakpoint: C,
                        overrides: {
                          n79Alakco: {
                            width: `calc(${d?.width || `100vw`} - 40px)`,
                            y: (d?.y || 0) + 0 + 0 + 80 + 710,
                          },
                          W4l3IMrEN: { y: (d?.y || 0) + 0 + 0 + 100 + 710 },
                        },
                        children: f(F, {
                          height: 24,
                          width: `calc(${d?.width || `100vw`} - 60px)`,
                          y: (d?.y || 0) + 0 + 0 + 130 + 710,
                          children: f(I, {
                            className: `framer-1ghfykz-container`,
                            nodeId: `bGj6UmPAH`,
                            scopeId: `DHYZ8McyT`,
                            children: f(B, {
                              height: `100%`,
                              id: `bGj6UmPAH`,
                              layoutId: `bGj6UmPAH`,
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
        `.framer-MT6Gl.framer-w0b7lf, .framer-MT6Gl .framer-w0b7lf { display: block; }`,
        `.framer-MT6Gl.framer-5h9mxu { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 2575px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-MT6Gl .framer-1szh1qu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 130px 30px 130px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-MT6Gl .framer-1xyaner { --border-bottom-width: 1px; --border-color: var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1)); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-3e32f75e-dc20-48b0-b24e-f004012e928c, #ebeef3); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MT6Gl .framer-1an98lf { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-MT6Gl .framer-1d15dbb-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 100px; }`,
        `.framer-MT6Gl .framer-28s5tx, .framer-MT6Gl .framer-1vwqlyy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-MT6Gl .framer-1hgwuv-container, .framer-MT6Gl .framer-1ghfykz-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-MT6Gl .framer-nrl5kr-container { flex: none; height: auto; position: relative; width: auto; }`,
        ..._e,
        ...xe,
        `.framer-MT6Gl[data-border="true"]::after, .framer-MT6Gl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-MT6Gl.framer-5h9mxu { height: 1959px; width: 810px; } .framer-MT6Gl .framer-1szh1qu { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-MT6Gl.framer-5h9mxu { height: 1970px; width: 390px; } .framer-MT6Gl .framer-1szh1qu { padding: 80px 20px 80px 20px; }}`,
      ],
      `framer-MT6Gl`
    )),
    (Q.displayName = `Reset Password`),
    (Q.defaultProps = { height: 2574.8, width: 1260 }),
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
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYqGPXXcVwIZDKFA.woff2`,
              weight: `500`,
            },
          ],
        },
        ...ze,
        ...He,
        ...Ue,
        ...We,
        ...C(ve),
        ...C(Se),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([M(B, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerDHYZ8McyT`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2574.8`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"W4l3IMrEN":{"layout":["fixed","fixed"]},"n79Alakco":{"layout":["fixed","fixed"]}}}`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1260`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Ke as queryParamNames };
//# sourceMappingURL=YcTjH1CVJ7BfgV27AwMIvzLVQkhpw4FtqpMiQbBvYnY.CPBclLbg.mjs.map
