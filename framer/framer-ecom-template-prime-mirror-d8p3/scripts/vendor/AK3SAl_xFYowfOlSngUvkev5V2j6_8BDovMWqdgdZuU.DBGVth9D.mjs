import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  l as ee,
  m as c,
  s as l,
  u,
} from "./react.BtSUcPAM.mjs";
import { P as d, i as f, o as p, t as m } from "./motion.B_UOAosx.mjs";
import {
  At as te,
  C as h,
  Ct as g,
  D as ne,
  Et as _,
  Ft as v,
  G as y,
  I as b,
  Lt as x,
  M as S,
  N as re,
  Nt as ie,
  O as C,
  Pt as ae,
  Q as w,
  R as T,
  Rt as E,
  S as D,
  Tt as oe,
  W as O,
  a as k,
  at as A,
  f as j,
  ht as se,
  i as M,
  jt as ce,
  kt as N,
  m as le,
  mt as ue,
  n as de,
  o as P,
  pt as fe,
  vt as pe,
  xt as F,
  yt as me,
} from "./framer.DuFjdl15.mjs";
import { i as I, n as L, r as R, t as z } from "./UOFERiKNL.BLQejQ4n.mjs";
import { n as B, t as V } from "./chd7nI0f4.DgRtqnjV.mjs";
import { n as H, t as U } from "./Xls5ElYro.A-ZUPcam.mjs";
import { a as he, r as ge } from "./dQjQF91jO.DYrHel4r.mjs";
import { i as _e, n as ve, r as ye, t as be } from "./OrFaou4jp.DoaP9WJQ.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./AeW2_n5fC.D-uaYwh6.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./egz88BsrP.BIROQOPJ.mjs";
import { n as ke, r as Ae } from "./Z96E_5A48.D_6h6YkF.mjs";
import je, { t as Me } from "./bq6vI4P1GSOXau_8L3Me3EbGyzxspaO6kYvN1tbtykc.DgSSS98A.mjs";
function Ne(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  W,
  Xe = e(() => {
    (s(),
      w(),
      m(),
      t(),
      I(),
      (Pe = x(d.div)),
      (Fe = E(x(d.div))),
      (Ie = { Lqm78AHBH: { hover: !0 } }),
      (Le = [`Lqm78AHBH`, `lNzO86HEH`, `umEv8r_MR`]),
      (Re = `framer-2DCKh`),
      (ze = {
        lNzO86HEH: `framer-v-d7l4vi`,
        Lqm78AHBH: `framer-v-yoy41u`,
        umEv8r_MR: `framer-v-zi4zvr`,
      }),
      (Be = { duration: 0, type: `tween` }),
      (Ve = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
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
        y: 0,
      }),
      (Ue = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (We = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ge = ({ value: e, children: t }) => {
        let n = i(p),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(p.Provider, { value: o, children: t });
      }),
      (Ke = { Default: `Lqm78AHBH`, Hidden: `umEv8r_MR`, Loading: `lNzO86HEH` }),
      (qe = d.create(r)),
      (Je = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: Ke[i.variant] ?? i.variant ?? `Lqm78AHBH`,
        Wld3NDzSj: e ?? i.Wld3NDzSj,
      })),
      (Ye = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = v(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = oe();
          se();
          let { style: p, className: m, layoutId: te, variant: h, Wld3NDzSj: g, ...ne } = Je(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: re,
              setGestureState: ie,
              setVariant: w,
              variants: T,
            } = ae({
              cycleOrder: Le,
              defaultVariant: `Lqm78AHBH`,
              enabledGestures: Ie,
              ref: a,
              variant: h,
              variantClassNames: ze,
            }),
            E = Ye(e, T),
            { activeVariantCallback: D, delay: O } = fe(_),
            k = D(async (...e) => {
              if ((ie({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            A = [z],
            j = () => _ !== `umEv8r_MR`,
            M = b(Re, ...A),
            ce = () => _ !== `lNzO86HEH`,
            N = () => _ === `lNzO86HEH`;
          return l(f, {
            id: te ?? s,
            children: l(qe, {
              animate: T,
              initial: !1,
              children:
                j() &&
                l(Ge, {
                  value: Be,
                  children: u(d.button, {
                    ...ne,
                    ...x,
                    className: b(M, `framer-yoy41u`, m, v),
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    "data-reset": `button`,
                    layoutDependency: E,
                    layoutId: `Lqm78AHBH`,
                    onTap: k,
                    ref: a,
                    style: {
                      backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      borderBottomLeftRadius: 200,
                      borderBottomRightRadius: 200,
                      borderTopLeftRadius: 200,
                      borderTopRightRadius: 200,
                      ...p,
                    },
                    variants: { "Lqm78AHBH-hover": { backgroundColor: `rgba(8, 10, 15, 0.77)` } },
                    ...Ne(
                      {
                        "Lqm78AHBH-hover": { "data-framer-name": void 0 },
                        lNzO86HEH: { "data-framer-name": `Loading` },
                      },
                      _,
                      S
                    ),
                    children: [
                      ce() &&
                        l(C, {
                          __fromCanvasComponent: !0,
                          children: l(r, {
                            children: l(d.p, {
                              className: `framer-styles-preset-arb5du`,
                              "data-styles-preset": `UOFERiKNL`,
                              dir: `auto`,
                              style: {
                                "--framer-text-alignment": `start`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                              },
                              children: `Load More`,
                            }),
                          }),
                          className: `framer-1hiuixr`,
                          fonts: [`Inter`],
                          layoutDependency: E,
                          layoutId: `JxNAV2D_v`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      N() &&
                        l(Fe, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: Ve,
                          className: `framer-2fryap`,
                          "data-framer-appear-id": `2fryap`,
                          "data-framer-name": `Spinner`,
                          initial: He,
                          layoutDependency: E,
                          layoutId: `QJcKK866Q`,
                          optimized: !0,
                          style: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          },
                          children: l(Pe, {
                            __framer__loop: We,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Ue,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-wetfjm`,
                            "data-framer-name": `Conic`,
                            layoutDependency: E,
                            layoutId: `GzAQF9BhX`,
                            style: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, var(--token-b1f89d39-57aa-4efb-8816-14116952e648) 342deg)`,
                            },
                            children: l(d.div, {
                              className: `framer-1ql0cck`,
                              "data-framer-name": `Round`,
                              layoutDependency: E,
                              layoutId: `jk8Ty6Etb`,
                              style: {
                                backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-2DCKh.framer-notjl2, .framer-2DCKh .framer-notjl2 { display: block; }`,
          `.framer-2DCKh.framer-yoy41u { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px 24px 0px 24px; position: relative; width: 118px; }`,
          `.framer-2DCKh .framer-1hiuixr { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-2DCKh .framer-2fryap { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-2DCKh .framer-wetfjm { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-2DCKh .framer-1ql0cck { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          ...L,
        ],
        `framer-2DCKh`
      )),
      (W.displayName = `Load More Button`),
      (W.defaultProps = { height: 40, width: 118 }),
      re(W, {
        variant: {
          options: [`Lqm78AHBH`, `lNzO86HEH`, `umEv8r_MR`],
          optionTitles: [`Default`, `Loading`, `Hidden`],
          title: `Variant`,
          type: P.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: P.EventHandler },
      }),
      S(
        W,
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
            ],
          },
          ...y(R),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  G,
  K,
  q,
  ut,
  dt,
  ft,
  J,
  pt,
  mt,
  Y,
  ht,
  X,
  gt,
  Z,
  _t,
  Q,
  vt,
  yt,
  $,
  bt;
e(() => {
  (s(),
    w(),
    m(),
    t(),
    B(),
    H(),
    Xe(),
    ge(),
    Ae(),
    xe(),
    Te(),
    _e(),
    Me(),
    (Ze = x(le)),
    (Qe = x(C)),
    ($e = O(V)),
    (et = O(U)),
    (tt = O(W)),
    (nt = x(d.div)),
    (rt = {
      HrRlsWeDD: `(max-width: 809.98px)`,
      n7Z9yfktq: `(min-width: 1200px)`,
      QIhNs4Ktw: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (it = [`category`]),
    (at = `framer-qMdeo`),
    (ot = {
      HrRlsWeDD: `framer-v-n7e9j7`,
      n7Z9yfktq: `framer-v-17ht38g`,
      QIhNs4Ktw: `framer-v-vooxzr`,
    }),
    (st = (e, t, n) => (e && t ? `position` : n)),
    (ct = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 20, y: 0 },
      repeat: !1,
      startDelay: 0,
      tokenization: `character`,
      transition: { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (lt = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 },
      repeat: !1,
      startDelay: 0.4,
      tokenization: `character`,
      transition: { delay: 0.01, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (K = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (ut = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 34,
    }),
    (dt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (ft = (e, t) => (e ? `odZpd01kD` : `I1VVyLX7t`)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (pt = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (mt = (e, t) => (e ? `I1VVyLX7t` : `odZpd01kD`)),
    (Y = () => ({
      from: { alias: `P6nEnWQxZ`, data: ke, type: `Collection` },
      select: [
        { collection: `P6nEnWQxZ`, name: `id`, type: `Identifier` },
        { collection: `P6nEnWQxZ`, name: `kZ4ugiTUA`, type: `Identifier` },
        { collection: `P6nEnWQxZ`, name: `wwxn0okJ1`, type: `Identifier` },
      ],
    })),
    (ht = ({ query: e, pageSize: t, children: n }) => n(N(e))),
    (X = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (gt = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Z = (e) => ({
      from: {
        constraint: {
          left: { collection: `qQstW0Aw0`, name: `cDKGALqtu`, type: `Identifier` },
          operator: `==`,
          right: { collection: `cDKGALqtu`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: { alias: `qQstW0Aw0`, data: he, type: `Collection` },
        right: { alias: `cDKGALqtu`, data: ke, type: `Collection` },
        type: `LeftJoin`,
      },
      orderBy: [
        { collection: `qQstW0Aw0`, direction: `desc`, name: `tbTDWaq4j`, type: `Identifier` },
      ],
      select: [
        { collection: `qQstW0Aw0`, name: `YI4pSm49t`, type: `Identifier` },
        { collection: `qQstW0Aw0`, name: `kEbrIvftN`, type: `Identifier` },
        { collection: `qQstW0Aw0`, name: `ccvQhG_Kb`, type: `Identifier` },
        { collection: `qQstW0Aw0`, name: `sFrlzjY0j`, type: `Identifier` },
        { collection: `qQstW0Aw0`, name: `tbTDWaq4j`, type: `Identifier` },
        { collection: `qQstW0Aw0`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          left: { collection: `cDKGALqtu`, name: `id`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (_t = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = g(e, t, `qQstW0Aw0`);
      return n(N(r), i, a);
    }),
    (Q = { Desktop: `n7Z9yfktq`, Phone: `HrRlsWeDD`, Tablet: `QIhNs4Ktw` }),
    (vt = ({ value: e }) =>
      F()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (yt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `n7Z9yfktq`,
    })),
    ($ = v(
      c(function (e, t) {
        let s = o(null),
          c = t ?? s,
          m = n(),
          { activeLocale: g, setLocale: v } = oe(),
          y = se(),
          [x, S] = ue({ collectionId: `Z96E_5A48`, optional: !0, parameterName: `category` }),
          { style: re, className: ae, layoutId: w, variant: T, ...E } = yt(e);
        _(a(() => je({}, g), [g]));
        let [O, A] = me(T, rt, !1),
          { activeVariantCallback: N, delay: le } = fe(void 0),
          P = N(async (...e) => {
            S?.(void 0);
          }),
          F = ({ arg1rkps67: e }) =>
            N(async (...t) => {
              S?.(e);
            }),
          I = ({ loadMore: e }) =>
            N(async (...t) => {
              e();
            }),
          L = b(at, Oe, we, be),
          R = i(j)?.isLayoutTemplate,
          z = !!i(p)?.transition?.layout,
          B = st(R, z),
          H = te(`ecrDROSX9`),
          he = ie();
        return (
          ce(),
          pe({}),
          l(j.Provider, {
            value: {
              activeVariantId: O,
              humanReadableVariantMap: Q,
              primaryVariantId: `n7Z9yfktq`,
              variantClassNames: ot,
            },
            children: u(f, {
              id: w ?? m,
              children: [
                l(vt, { value: `html body { background: rgb(0, 0, 0); }` }),
                l(d.div, {
                  ...E,
                  className: b(L, `framer-17ht38g`, ae),
                  ref: c,
                  style: { ...re },
                  children: u(d.main, {
                    className: `framer-1e2lego`,
                    "data-framer-name": `Main`,
                    layout: B,
                    children: [
                      u(`section`, {
                        className: `framer-1a9d093`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          u(`div`, {
                            className: `framer-1fepa3b`,
                            "data-framer-name": `Content`,
                            children: [
                              l(C, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(`h1`, {
                                    className: `framer-styles-preset-6khajo`,
                                    "data-styles-preset": `egz88BsrP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Journal`,
                                  }),
                                }),
                                className: `framer-1rgrhds`,
                                "data-framer-name": `Title`,
                                effect: ct,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(C, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-g91u7x`,
                                    "data-styles-preset": `AeW2_n5fC`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                    children: `Explore style guides, seasonal trends, and fashion insights designed to inspire your everyday wardrobe.`,
                                  }),
                                }),
                                className: `framer-iiy69u`,
                                "data-framer-name": `Description`,
                                effect: lt,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          l(Ze, {
                            __framer__adjustPosition: !1,
                            __framer__offset: 0,
                            __framer__parallaxTransformEnabled: !0,
                            __framer__speed: 60,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 698,
                              intrinsicWidth: 1440,
                              pixelHeight: 698,
                              pixelWidth: 1440,
                              sizes: `calc(${y?.width || `100vw`} - 40px)`,
                              src: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png`,
                              srcSet: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-01c22e.png 512w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-33db11.png 1024w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png 1440w`,
                            },
                            className: `framer-16wg3zr`,
                            "data-framer-name": `BG`,
                          }),
                          l(`div`, {
                            className: `framer-d5l9on`,
                            "data-framer-name": `Nav Trigger`,
                            id: H,
                            ref: he(H),
                          }),
                        ],
                      }),
                      l(`section`, {
                        className: `framer-187716d`,
                        "data-framer-name": `Section - Content`,
                        children: u(`div`, {
                          className: `framer-y5nxs5`,
                          "data-framer-name": `Container`,
                          children: [
                            l(`div`, {
                              className: `framer-197tap9`,
                              "data-framer-name": `Headline Wrap`,
                              children: l(h, {
                                breakpoint: O,
                                overrides: { HrRlsWeDD: { __framer__enter: ut } },
                                children: l(Qe, {
                                  __framer__animate: { transition: K },
                                  __framer__animateOnce: !0,
                                  __framer__enter: G,
                                  __framer__exit: q,
                                  __framer__styleAppearEffectEnabled: !0,
                                  __framer__threshold: 0,
                                  __fromCanvasComponent: !0,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  children: l(r, {
                                    children: l(`h2`, {
                                      className: `framer-styles-preset-1lt80ed`,
                                      "data-styles-preset": `OrFaou4jp`,
                                      dir: `auto`,
                                      children: `From the Journal`,
                                    }),
                                  }),
                                  className: `framer-ls77am`,
                                  "data-framer-name": `Headline`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            u(nt, {
                              __framer__animate: { transition: K },
                              __framer__animateOnce: !0,
                              __framer__enter: G,
                              __framer__exit: q,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1aos848`,
                              "data-framer-name": `Wrap`,
                              children: [
                                l(`div`, {
                                  className: `framer-g12jsw`,
                                  children: l(de, {
                                    children: l(ht, {
                                      query: Y(),
                                      children: (e, t, n) =>
                                        u(ee, {
                                          children: [
                                            l(M, {
                                              height: 29,
                                              children: l(k, {
                                                className: `framer-b4zzs7-container`,
                                                nodeId: `wwM8B5V2s`,
                                                scopeId: `THPIb7xGu`,
                                                children: l(h, {
                                                  breakpoint: O,
                                                  overrides: {
                                                    HrRlsWeDD: { rvv_MNzYv: `3px 12px 3px 12px` },
                                                  },
                                                  children: l(V, {
                                                    height: `100%`,
                                                    id: `wwM8B5V2s`,
                                                    layoutId: `wwM8B5V2s`,
                                                    R3A8bGfB1: `All`,
                                                    rvv_MNzYv: `5px 20px 5px 20px`,
                                                    variant: J(ft(dt(x), g)),
                                                    width: `100%`,
                                                    wt0MSxg3E: P,
                                                  }),
                                                }),
                                              }),
                                            }),
                                            e?.map(
                                              ({ id: e, kZ4ugiTUA: t, wwxn0okJ1: n }, r) => (
                                                (t ??= ``),
                                                (n ??= ``),
                                                l(
                                                  f,
                                                  {
                                                    id: `P6nEnWQxZ-${e}`,
                                                    children: l(D.Provider, {
                                                      value: { wwxn0okJ1: n },
                                                      children: l(M, {
                                                        height: 29,
                                                        children: l(k, {
                                                          className: `framer-8ow5fb-container`,
                                                          nodeId: `tWhx3aO0Y`,
                                                          scopeId: `THPIb7xGu`,
                                                          children: l(h, {
                                                            breakpoint: O,
                                                            overrides: {
                                                              HrRlsWeDD: {
                                                                rvv_MNzYv: `3px 12px 3px 12px`,
                                                              },
                                                            },
                                                            children: l(V, {
                                                              height: `100%`,
                                                              id: `tWhx3aO0Y`,
                                                              layoutId: `tWhx3aO0Y`,
                                                              R3A8bGfB1: t,
                                                              rvv_MNzYv: `5px 20px 5px 20px`,
                                                              variant: J(mt(pt(x, e), g)),
                                                              width: `100%`,
                                                              wt0MSxg3E: F({ arg1rkps67: e }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  e
                                                )
                                              )
                                            ),
                                          ],
                                        }),
                                    }),
                                  }),
                                }),
                                l(`div`, {
                                  className: `framer-izo5r0`,
                                  "data-framer-name": `Blog Grid`,
                                  children: l(`div`, {
                                    className: `framer-lbbh8e`,
                                    children: l(de, {
                                      children: l(_t, {
                                        pageSize: 9,
                                        query: Z(x),
                                        children: (e, t, n) =>
                                          u(ee, {
                                            children: [
                                              e?.map(
                                                (
                                                  {
                                                    ccvQhG_Kb: e,
                                                    id: t,
                                                    kEbrIvftN: n,
                                                    sFrlzjY0j: r,
                                                    tbTDWaq4j: i,
                                                    YI4pSm49t: a,
                                                  },
                                                  o
                                                ) => (
                                                  (a ??= ``),
                                                  (e ??= ``),
                                                  (r ??= ``),
                                                  l(
                                                    f,
                                                    {
                                                      id: `qQstW0Aw0-${t}`,
                                                      children: l(D.Provider, {
                                                        value: { YI4pSm49t: a },
                                                        children: l(ne, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { YI4pSm49t: a },
                                                                webPageId: `n52CgrMqX`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (t) =>
                                                            l(h, {
                                                              breakpoint: O,
                                                              overrides: {
                                                                HrRlsWeDD: {
                                                                  width: `max(min(min(${y?.width || `100vw`} - 40px, 1360px) - 60px, 400px), 50px)`,
                                                                },
                                                                QIhNs4Ktw: {
                                                                  width: `max((min(min(${y?.width || `100vw`} - 40px, 1360px) - 60px, 810px) - 20px) / 2, 50px)`,
                                                                },
                                                              },
                                                              children: l(M, {
                                                                height: 518,
                                                                width: `max((min(${y?.width || `100vw`} - 40px, 1360px) - 140px) / 3, 50px)`,
                                                                children: l(k, {
                                                                  className: `framer-1nd8xe-container`,
                                                                  nodeId: `AriMJCd4L`,
                                                                  scopeId: `THPIb7xGu`,
                                                                  children: l(h, {
                                                                    breakpoint: O,
                                                                    overrides: {
                                                                      HrRlsWeDD: {
                                                                        mejnfXFJg: t[2],
                                                                      },
                                                                      QIhNs4Ktw: {
                                                                        mejnfXFJg: t[1],
                                                                      },
                                                                    },
                                                                    children: l(U, {
                                                                      caxJYOAxG: i,
                                                                      height: `100%`,
                                                                      id: `AriMJCd4L`,
                                                                      jZaKHpWJZ: `10px`,
                                                                      layoutId: `AriMJCd4L`,
                                                                      lzt3mmvNo: e,
                                                                      mejnfXFJg: t[0],
                                                                      p3oejAZGk: `12px`,
                                                                      RKPUUbfKk: X(n),
                                                                      style: { width: `100%` },
                                                                      variant: J(`mEms5n36b`),
                                                                      width: `100%`,
                                                                      wUAUbLgbN: r,
                                                                    }),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                        }),
                                                      }),
                                                    },
                                                    t
                                                  )
                                                )
                                              ),
                                              l(M, {
                                                height: 40,
                                                children: l(k, {
                                                  className: `framer-s2ol5d-container`,
                                                  nodeId: `aGVgD96YQ`,
                                                  scopeId: `THPIb7xGu`,
                                                  children: l(W, {
                                                    height: `100%`,
                                                    id: `aGVgD96YQ`,
                                                    layoutId: `aGVgD96YQ`,
                                                    variant: gt(
                                                      t,
                                                      {
                                                        disabled: `umEv8r_MR`,
                                                        loading: `lNzO86HEH`,
                                                      },
                                                      J(`Lqm78AHBH`)
                                                    ),
                                                    width: `100%`,
                                                    Wld3NDzSj: I({ loadMore: n }),
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-qMdeo.framer-28dipu, .framer-qMdeo .framer-28dipu { display: block; }`,
        `.framer-qMdeo.framer-17ht38g { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-qMdeo .framer-1e2lego { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-1a9d093 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 80vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 108px 50px 108px 50px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-1fepa3b { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-qMdeo .framer-1rgrhds, .framer-qMdeo .framer-ls77am { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-qMdeo .framer-iiy69u { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 473px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-qMdeo .framer-16wg3zr { -webkit-filter: brightness(0.85); bottom: 0px; filter: brightness(0.85); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-qMdeo .framer-d5l9on { flex: none; height: 1px; left: calc(50.00000000000002% - 1200px / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 100px; width: 1200px; z-index: 1; }`,
        `.framer-qMdeo .framer-187716d { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 54px 50px 128px 50px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-y5nxs5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-197tap9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-1aos848 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-g12jsw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 13px 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-b4zzs7-container, .framer-qMdeo .framer-8ow5fb-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-qMdeo .framer-izo5r0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-lbbh8e { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-1nd8xe-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-qMdeo .framer-s2ol5d-container { bottom: 4px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; z-index: 1; }`,
        ...Ee,
        ...Se,
        ...ve,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-qMdeo.framer-17ht38g { width: 810px; } .framer-qMdeo .framer-1a9d093 { height: 70vh; max-height: 756px; padding: 80px 50px 80px 50px; } .framer-qMdeo .framer-iiy69u { max-width: 443px; } .framer-qMdeo .framer-187716d { padding: 54px 30px 128px 30px; } .framer-qMdeo .framer-y5nxs5 { max-width: 810px; } .framer-qMdeo .framer-lbbh8e { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-qMdeo.framer-17ht38g { width: 390px; } .framer-qMdeo .framer-1a9d093 { height: 65vh; max-height: 550px; padding: 64px 50px 64px 50px; } .framer-qMdeo .framer-187716d { padding: 54px 30px 128px 30px; } .framer-qMdeo .framer-y5nxs5 { gap: 40px; max-width: 400px; } .framer-qMdeo .framer-lbbh8e { gap: 30px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-qMdeo`
    )),
    ($.displayName = `Blog`),
    ($.defaultProps = { height: 4415, width: 1200 }),
    S(
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
          ],
        },
        ...$e,
        ...et,
        ...tt,
        ...y(De),
        ...y(Ce),
        ...y(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({
            edvTSG_7j1: await (async () => {
              let e = t.pathVariables?.category ?? ``;
              if (!e) return ``;
              let r = t.collectionUtils?.get(`Z96E_5A48`);
              return r ? ((await r.getRecordIdBySlug(e, n)) ?? ``) : ``;
            })(),
          }))(),
          i = A.get(Y(), n);
        return Promise.allSettled([
          i.preload(),
          r.then(({ edvTSG_7j1: e }) => A.get(Z(e), n).preload()),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [T(V, {}, t), T(V, {}, t)]));
          })(),
          (async () => {
            let { edvTSG_7j1: e } = await r,
              i = (await A.get(Z(e), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => [T(U, {}, t), T(W, {}, t)]));
          })(),
        ]);
      },
    }),
    (bt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerTHPIb7xGu`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `4415`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QIhNs4Ktw":{"layout":["fixed","auto"]},"HrRlsWeDD":{"layout":["fixed","auto"]}}}`,
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"ecrDROSX9":{"pattern":":ecrDROSX9","name":"Nav Trigger"}}`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { bt as __FramerMetadata__, $ as default, it as queryParamNames };
//# sourceMappingURL=AK3SAl_xFYowfOlSngUvkev5V2j6_8BDovMWqdgdZuU.DBGVth9D.mjs.map
