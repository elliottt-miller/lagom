import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  H as r,
  I as i,
  L as a,
  N as o,
  P as s,
  R as c,
  j as l,
  l as u,
  s as d,
  u as f,
  v as p,
  x as m,
  y as h,
} from "./react.ClsXD4bF.mjs";
import { a as g, r as _, t as v, w as y } from "./motion.ClyXVVeQ.mjs";
import {
  At as b,
  F as x,
  L as S,
  M as C,
  O as w,
  Ot as T,
  S as E,
  T as D,
  U as O,
  W as k,
  Z as A,
  _t as j,
  a as M,
  bt as N,
  f as P,
  ft as ee,
  gt as te,
  ht as ne,
  i as F,
  j as re,
  kt as ie,
  o as I,
  yt as ae,
} from "./framer.CbUxDv78.mjs";
import { i as oe, n as se, r as ce, t as le } from "./nWUDA6LQ3.CzRvIxSa.mjs";
import { a as ue, d as de, g as fe, h as pe, m as me, s as he } from "./framerauth.Bsg5VUt2.mjs";
import { n as ge, s as _e, t as ve } from "./FramerAuthV2.C6xJz_Rm.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { n as Ce, t as we } from "./ActionButton.gOvWkmhh.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./IwoeRBoDn.CVNhweph.mjs";
import {
  c as L,
  i as R,
  n as ke,
  o as Ae,
  r as je,
  s as Me,
  t as z,
} from "./Qf78XOrju.CLVgagNE.mjs";
import Ne, { t as Pe } from "./fu27UeGsbfV4GOI0MiLPI1RXlp_1TCsh7KiLEQ_eLmU.CE9-U9-G.mjs";
function Fe() {
  let e = D.current();
  return e === D.canvas || e === D.thumbnail;
}
function Ie() {
  return r !== void 0 && !!r.FramerAuth;
}
var B,
  Le,
  Re,
  V,
  ze,
  H,
  U,
  W,
  G,
  K,
  q,
  Be = e(() => {
    (t(),
      d(),
      n(),
      A(),
      de(),
      Ae(),
      (B = [
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
      (Le = [
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
      (Re = [
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
      (V = `member_profile`),
      (ze = `Save Changes`),
      (H = `${V}_button_label`),
      (U = `${V}_secondary_button_label`),
      (W = `${V}_secondary_button_cancel_label`),
      (G = T(function ({ ...e }) {
        let t = ue(),
          { user: n, setUser: r } = t,
          a = t.isLoading ?? t.loading,
          o = fe(),
          { project: d, fetchProject: f } = o,
          p = o.isLoading ?? o.loading,
          m = he().initializing,
          h = l(!1),
          g = Ie(),
          [_, v] = c(void 0),
          y = g && !Fe();
        i(() => {
          y || h.current || d || ((h.current = !0), f().catch(() => {}));
        }, [y, d, f]);
        let b = s(() => {
            if (d && d?.customFields.length > 0) {
              let e = Me(d?.customFields);
              if (e.success) return e.data;
            }
            return [];
          }, [d]),
          [x, S] = c(B),
          [C, w] = c(!1),
          T = !!n?.has_password,
          E = Fe(),
          D = E || T,
          O = E || !!n;
        i(() => {
          n && v(n);
        }, [n]);
        let k = y && (!!m || !!p || !!a),
          A = s(() => ({ ...e.button, label: e.button[H] }), [e.button, e.button[H]]),
          j = s(
            () => ({
              ...e.secondaryButton,
              label: e.secondaryButton?.[U],
              cancelLabel: e.secondaryButton?.[W],
            }),
            [e.secondaryButton]
          );
        i(() => {
          if (e.inputFields) {
            let t = [];
            (B.forEach((n, r) => {
              let i = K(n.name);
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
        let M = async (e) => {
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
            let l = await pe({ email: e.email, name: e.name, ...c, ...s });
            if (l.error) return { ok: !1, message: l.error.message };
            w(!1);
            let u = !!s.newPassword;
            return (
              r({ ...n, ...l.data, has_password: T || u }),
              { ok: !0, message: `Profile updated successfully.` }
            );
          },
          N = s(() => (O ? (D ? (C ? Re : []) : Le) : []), [O, D, C]),
          P = s(() => {
            let t = b.map((e) => ({ ...e, placeholder: e.placeholder || e.displayName }));
            return [...x, ...t, ...N]
              .map((t) => {
                let n = t;
                if (t.overridable) {
                  let r = e.inputFields[t.name];
                  r && (n = { ...n, ...r });
                }
                return n;
              })
              .filter((e) => e.render !== !1);
          }, [x, b, N]),
          ee = O && D ? { active: C, onClick: () => w((e) => !e) } : null;
        return u(je, {
          ...e,
          isInitializing: k,
          button: A,
          fields: P,
          defaultValues: _,
          onSubmit: M,
          secondaryButton: j,
          secondaryButtonAction: ee,
        });
      }, [])),
      (K = (e) =>
        e
          .split(`_`)
          .map((e, t) => (t === 0 ? e : e.charAt(0).toUpperCase() + e.slice(1)))
          .join(``)),
      (q = {}),
      B.forEach((e, t) => {
        let n = K(e.name);
        q[n] = {
          title: `${e.displayName}`,
          type: I.Object,
          controls: {
            render:
              e.overridable === !0
                ? { title: `Render`, type: I.Boolean, defaultValue: !0 }
                : void 0,
            hidden:
              e.overridable === !0
                ? {
                    title: `Hidden`,
                    type: I.Boolean,
                    defaultValue: !1,
                    hidden: (e) => e.render === !0,
                  }
                : void 0,
            displayName: {
              title: `Display Name`,
              type: I.String,
              defaultValue: e.displayName,
              hidden: (e) => e.render === !0 && e.hidden === !1,
            },
          },
        };
      }),
      C(G, {
        label: R.label,
        input: { ...R.input, controls: { ...R.input.controls, iconColor: void 0 } },
        button: {
          ...R.button,
          controls: {
            ...R.button.controls,
            label: void 0,
            [H]: { ...R.button.controls.label, defaultValue: ze },
          },
        },
        secondaryButton: {
          ...L,
          controls: {
            ...L.controls,
            label: void 0,
            cancelLabel: void 0,
            [U]: L.controls.label,
            [W]: L.controls.cancelLabel,
          },
        },
        gap: R.gap,
        inputFields: { title: `Inputs`, type: I.Object, controls: q },
        link: void 0,
        onSuccess: R.onSuccess,
        onError: R.onError,
      }),
      (G.defaultProps = { ...je.defaultProps, ...G.defaultProps }));
  });
function J(e) {
  let {
      image: t,
      borderRadius: n,
      iconColor: r,
      iconSize: a,
      border: o,
      backgroundColor: l,
      viewOnly: d,
      style: p,
    } = e,
    [m, g] = c(!1),
    [_, v] = c(!1),
    [y, b] = c(!1),
    [x, S] = c(null),
    { user: C, setUser: w } = ue(),
    T = s(() => !C || d === !0, [C, d]),
    E = `https://framerauth.b-cdn.net/pictures/ProfilePic.png`,
    [D, O] = c(E);
  i(() => {
    let e = x || C?.image || t?.src || E;
    O(e);
  }, [C, t, E, x]);
  let k = () => {
      h(() => g(!0));
    },
    A = () => {
      h(() => g(!1));
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
              let r = await me(n);
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
  return u(`div`, {
    style: {
      ...p,
      width: `100%`,
      height: `100%`,
      borderRadius: n,
      backgroundColor: l,
      position: `relative`,
      overflow: `hidden`,
      cursor: T || y ? `default` : `pointer`,
      ...o,
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
    children: u(`div`, {
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
        opacity: (m && !T) || y ? 1 : 0,
        transition: `opacity 0.2s ease`,
        borderRadius: n,
      },
      children: u(
        y
          ? () => {
              let [e, t] = c(0);
              return (
                i(() => {
                  let e = Date.now(),
                    n = () => {
                      let r = Date.now() - e;
                      (t((r / 8) % 360), requestAnimationFrame(n));
                    },
                    r = requestAnimationFrame(n);
                  return () => cancelAnimationFrame(r);
                }, []),
                f(`svg`, {
                  width: a,
                  height: a,
                  viewBox: `0 0 24 24`,
                  style: { transform: `rotate(${e}deg)` },
                  children: [
                    u(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `10`,
                      fill: `none`,
                      stroke: r,
                      strokeWidth: `2`,
                      opacity: `0.2`,
                    }),
                    u(`circle`, {
                      cx: `12`,
                      cy: `12`,
                      r: `10`,
                      fill: `none`,
                      stroke: r,
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
              f(`svg`, {
                width: a,
                height: a,
                viewBox: `0 0 24 24`,
                fill: `none`,
                stroke: r,
                strokeWidth: `2`,
                children: [
                  u(`line`, { x1: `12`, y1: `5`, x2: `12`, y2: `19` }),
                  u(`line`, { x1: `5`, y1: `12`, x2: `19`, y2: `12` }),
                ],
              }),
        {}
      ),
    }),
  });
}
var Ve = e(() => {
    (d(),
      n(),
      A(),
      de(),
      C(J, {
        viewOnly: {
          type: I.Boolean,
          title: `View Only`,
          defaultValue: !1,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        image: { type: I.ResponsiveImage, title: `Placeholder` },
        borderRadius: { type: I.BorderRadius, title: `Radius`, defaultValue: `50%` },
        border: {
          type: I.Border,
          title: `Border`,
          defaultValue: { borderWidth: 2, borderStyle: `solid`, borderColor: `#EEEEEE` },
        },
        iconColor: { type: I.Color, title: `Icon`, defaultValue: `#FFFFFF` },
        iconSize: {
          type: I.Number,
          title: `Icon Size`,
          defaultValue: 24,
          min: 12,
          max: 48,
          step: 2,
          unit: `px`,
        },
      }));
  }),
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
  Qe,
  Y,
  $e,
  X,
  et,
  tt,
  Z,
  nt,
  rt,
  Q,
  $;
e(() => {
  (d(),
    A(),
    v(),
    n(),
    Be(),
    Ce(),
    Ve(),
    ke(),
    _e(),
    ye(),
    Te(),
    oe(),
    Pe(),
    (He = O(J)),
    (Ue = ie(w, { nodeId: `PGU6Su0YI`, override: ge, scopeId: `IwWLXbeyg` })),
    (We = ie(w, { nodeId: `a1OGh1A1Q`, override: ve, scopeId: `IwWLXbeyg` })),
    (Ge = O(G)),
    (Ke = b(y.div)),
    (qe = O(we)),
    (Je = O(z)),
    (Ye = {
      DMX1gnCFc: `(min-width: 1200px)`,
      gvnoxsc4k: `(max-width: 809.98px)`,
      lvs26UW3V: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Xe = []),
    (Ze = `framer-OceGR`),
    (Qe = {
      DMX1gnCFc: `framer-v-39j758`,
      gvnoxsc4k: `framer-v-1ypkdvf`,
      lvs26UW3V: `framer-v-1xfejsz`,
    }),
    (Y = (e, t, n) => (e && t ? `position` : n)),
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
    (X = { delay: 0.1, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (et = {
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
    (tt = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (Z = { Desktop: `DMX1gnCFc`, Phone: `gvnoxsc4k`, Tablet: `lvs26UW3V` }),
    (nt = ({ value: e }) =>
      j()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (rt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `DMX1gnCFc`,
    })),
    (Q = T(
      p(function (e, t) {
        let n = l(null),
          r = t ?? n,
          i = m(),
          { activeLocale: c, setLocale: d } = ae(),
          p = ee(),
          { style: h, className: v, layoutId: b, variant: S, ...C } = rt(e);
        N(s(() => Ne({}, c), [c]));
        let [T, D] = te(S, Ye, !1),
          O = x(Ze, Se, le, Oe),
          k = o(P)?.isLayoutTemplate,
          A = !!o(g)?.transition?.layout,
          j = Y(k, A);
        return (
          ne({}),
          u(P.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: Z,
              primaryVariantId: `DMX1gnCFc`,
              variantClassNames: Qe,
            },
            children: f(_, {
              id: b ?? i,
              children: [
                u(nt, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                u(y.div, {
                  ...C,
                  className: x(O, `framer-39j758`, v),
                  ref: r,
                  style: { ...h },
                  children: f(y.div, {
                    className: `framer-gqvclk`,
                    "data-framer-name": `Contact Section`,
                    layout: j,
                    children: [
                      f(`div`, {
                        className: `framer-wfhk23`,
                        "data-framer-name": `Container`,
                        children: [
                          u(w, {
                            __fromCanvasComponent: !0,
                            children: u(a, {
                              children: u(`h4`, {
                                className: `framer-styles-preset-tf4vz6`,
                                "data-styles-preset": `hlnA5U_q8`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                },
                                children: `Account`,
                              }),
                            }),
                            className: `framer-hblpm0`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          f(Ke, {
                            __framer__animate: { transition: X },
                            __framer__animateOnce: !0,
                            __framer__enter: $e,
                            __framer__exit: et,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1ddxkz0`,
                            "data-border": !0,
                            children: [
                              f(`div`, {
                                className: `framer-1s9lbtm`,
                                children: [
                                  u(F, {
                                    children: u(M, {
                                      className: `framer-1d3690s-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `eENa0onWH`,
                                      scopeId: `IwWLXbeyg`,
                                      children: u(J, {
                                        border: {
                                          borderColor: `rgb(238, 238, 238)`,
                                          borderStyle: `solid`,
                                          borderWidth: 0,
                                        },
                                        borderRadius: `74%`,
                                        height: `100%`,
                                        iconColor: `rgb(255, 255, 255)`,
                                        iconSize: 24,
                                        id: `eENa0onWH`,
                                        image: tt(
                                          {
                                            pixelHeight: 460,
                                            pixelWidth: 460,
                                            src: `https://framerusercontent.com/images/FYPMcjSnBhvs5cJgk3pzBVJVCH8.png?width=460&height=460`,
                                          },
                                          ``
                                        ),
                                        layoutId: `eENa0onWH`,
                                        style: { height: `100%`, width: `100%` },
                                        viewOnly: !1,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  u(Ue, {
                                    __fromCanvasComponent: !0,
                                    children: u(a, {
                                      children: u(`h6`, {
                                        className: `framer-styles-preset-vlman3`,
                                        "data-styles-preset": `nWUDA6LQ3`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Name`,
                                      }),
                                    }),
                                    className: `framer-1lzvuxb`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  u(We, {
                                    __fromCanvasComponent: !0,
                                    children: u(a, {
                                      children: u(`h6`, {
                                        className: `framer-styles-preset-1s533c1`,
                                        "data-styles-preset": `IwoeRBoDn`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-6a34fe72-cc21-4a00-af16-4726d9dd233b, rgb(147, 147, 147))`,
                                        },
                                        children: `Email address`,
                                      }),
                                    }),
                                    className: `framer-q546zx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              u(F, {
                                children: u(M, {
                                  className: `framer-lr6y9u-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `CwBhAb8nb`,
                                  scopeId: `IwWLXbeyg`,
                                  children: u(G, {
                                    button: {
                                      align: `stretch`,
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
                                      member_profile_button_label: `Save Changes`,
                                      shouldAppear: !0,
                                    },
                                    gap: 16,
                                    height: `100%`,
                                    id: `CwBhAb8nb`,
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
                                    inputFields: {
                                      email: { displayName: `Email` },
                                      name: { displayName: `Name` },
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
                                    layoutId: `CwBhAb8nb`,
                                    secondaryButton: {
                                      borderObject: {
                                        borderColor: `rgba(200, 200, 200, 0.5)`,
                                        borderStyle: `solid`,
                                        borderWidth: 1,
                                      },
                                      borderRadius: `48px`,
                                      buttonFont: {
                                        fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                        fontSize: `16px`,
                                        fontStyle: `normal`,
                                        fontWeight: 500,
                                        letterSpacing: `0em`,
                                        lineHeight: `1em`,
                                      },
                                      buttonPadding: `15px`,
                                      buttonShadow: ``,
                                      color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
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
                          u(F, {
                            children: u(M, {
                              className: `framer-kq0raz-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `wQzXwGBK1`,
                              scopeId: `IwWLXbeyg`,
                              children: u(we, {
                                actionType: `auth`,
                                authAction: `signOut`,
                                button: {
                                  borderRadius: `80px`,
                                  buttonFont: {
                                    fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 500,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  buttonMargin: `0px`,
                                  buttonPadding: `14px`,
                                  buttonShadow: ``,
                                  color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                  fill: `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                                },
                                height: `100%`,
                                id: `wQzXwGBK1`,
                                label: `Sign Out`,
                                layoutId: `wQzXwGBK1`,
                                newTab: !1,
                                pluginId: `stripe`,
                                priceId: ``,
                                quantity: 1,
                                storeAction: `checkout`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                      }),
                      u(E, {
                        breakpoint: T,
                        overrides: {
                          gvnoxsc4k: { y: (p?.y || 0) + 0 + 0 + 60 + 751.9992 },
                          lvs26UW3V: { y: (p?.y || 0) + 0 + 0 + 80 + 739.9992 },
                        },
                        children: u(F, {
                          height: 24,
                          width: p?.width || `100vw`,
                          y: (p?.y || 0) + 0 + 0 + 160 + 667.9992,
                          children: u(M, {
                            className: `framer-1mls1c7-container`,
                            nodeId: `XCMeiThQb`,
                            scopeId: `IwWLXbeyg`,
                            children: u(z, {
                              height: `100%`,
                              id: `XCMeiThQb`,
                              layoutId: `XCMeiThQb`,
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
        `.framer-OceGR.framer-li80, .framer-OceGR .framer-li80 { display: block; }`,
        `.framer-OceGR.framer-39j758 { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-OceGR .framer-gqvclk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 160px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-OceGR .framer-wfhk23 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-OceGR .framer-hblpm0, .framer-OceGR .framer-1lzvuxb, .framer-OceGR .framer-q546zx { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-OceGR .framer-1ddxkz0 { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 500px; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-OceGR .framer-1s9lbtm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-OceGR .framer-1d3690s-container { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 80px; }`,
        `.framer-OceGR .framer-lr6y9u-container, .framer-OceGR .framer-1mls1c7-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-OceGR .framer-kq0raz-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...be,
        ...se,
        ...Ee,
        `.framer-OceGR[data-border="true"]::after, .framer-OceGR [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-OceGR.framer-39j758 { width: 810px; } .framer-OceGR .framer-gqvclk { padding: 80px 0px 80px 0px; } .framer-OceGR .framer-wfhk23 { max-width: 990px; padding: 72px 20px 0px 20px; }}`,
        `@media (max-width: 809.98px) { .framer-OceGR.framer-39j758 { width: 390px; } .framer-OceGR .framer-gqvclk { padding: 60px 0px 60px 0px; } .framer-OceGR .framer-wfhk23 { gap: 30px; justify-content: center; max-width: 620px; padding: 72px 20px 0px 20px; }}`,
      ],
      `framer-OceGR`
    )),
    (Q.displayName = `Reset Password`),
    (Q.defaultProps = { height: 2736, width: 1200 }),
    re(
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
        ...He,
        ...Ge,
        ...qe,
        ...Je,
        ...k(xe),
        ...k(ce),
        ...k(De),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(z, {}, t)])) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerIwWLXbeyg`,
          slots: [],
          annotations: {
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lvs26UW3V":{"layout":["fixed","auto"]},"gvnoxsc4k":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `2736`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Xe as queryParamNames };
//# sourceMappingURL=XnbOeB2fz1Uhq4jaKrpefFIXpc-2bQ7fcRfaoPGGPDQ.xOI-qjqz.mjs.map
