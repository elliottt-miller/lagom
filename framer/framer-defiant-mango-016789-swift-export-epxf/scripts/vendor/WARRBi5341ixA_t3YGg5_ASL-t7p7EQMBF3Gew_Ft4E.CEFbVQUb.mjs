import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  a as ee,
  c as s,
  l as c,
  m as l,
  o as u,
  s as d,
  u as f,
} from "./react.D0omlcQg.mjs";
import { M as p, a as m, n as h, r as g, t as _ } from "./motion.Bi2Azsus.mjs";
import {
  B as te,
  C as ne,
  Ct as v,
  D as re,
  Dt as ie,
  Et as y,
  Ft as ae,
  It as b,
  K as x,
  L as S,
  Lt as C,
  Mt as w,
  N as T,
  O as E,
  Ot as oe,
  P as D,
  Pt as se,
  St as ce,
  Tt as le,
  Vt as O,
  _t as ue,
  a as k,
  bt as de,
  et as A,
  g as fe,
  gt as pe,
  ht as me,
  i as j,
  jt as M,
  k as he,
  n as ge,
  o as N,
  p as P,
  q as F,
  w as I,
  wt as L,
  zt as R,
} from "./framer.zRtTBSC3.mjs";
import { i as z, t as _e } from "./wWC8EGMFo.DzFEZFNO.mjs";
import { n as B, t as V } from "./URl4ptbYA.BL9HGZoY.mjs";
import { i as ve, n as H, r as ye, t as be } from "./nV6XvMHlN.6LAm4Vcv.mjs";
import { n as xe, r as U } from "./N2cLBMuUA.BCwdznKG.mjs";
import { i as Se, n as Ce, r as W, t as we } from "./qGQWmqjfV.B9CXoPp_.mjs";
import { n as G, t as K } from "./rulyW4hkS.B6GaFbwO.mjs";
import { n as Te, t as Ee } from "./sAat8iFw8.DVzxEiEg.mjs";
import De, { t as Oe } from "./RFns52Lz_g6g3yj6YEv33H7lI4wAFmF6s6-gJIlDduo.DTmYlj_s.mjs";
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Ve,
  q,
  He = e(() => {
    (s(),
      A(),
      _(),
      t(),
      G(),
      (ke = x(K)),
      (Ae = R(K)),
      (je = [`pPX6omJtg`, `MoSf02V4V`]),
      (Me = `framer-8BCJw`),
      (Ne = { MoSf02V4V: `framer-v-13935fc`, pPX6omJtg: `framer-v-14bkqt3` }),
      (Pe = { duration: 0, type: `tween` }),
      (Fe = { delay: 0, duration: 0.65, ease: [0, 0, 1, 1], type: `tween` }),
      (Ie = {
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
      (Le = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: o, children: t });
      }),
      (Re = { Hidden: `MoSf02V4V`, Loading: `pPX6omJtg` }),
      (ze = p.create(r)),
      (Be = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Re[r.variant] ?? r.variant ?? `pPX6omJtg`,
      })),
      (Ve = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = C(
        l(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: ee, setLocale: s } = y();
          ue();
          let { style: c, className: l, layoutId: u, variant: f, ...m } = Be(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: te,
              gestureHandlers: ne,
              gestureVariant: v,
              isLoading: re,
              setGestureState: ie,
              setVariant: ae,
              variants: x,
            } = b({
              cycleOrder: je,
              defaultVariant: `pPX6omJtg`,
              ref: i,
              variant: f,
              variantClassNames: Ne,
            }),
            C = Ve(e, x),
            w = [],
            T = () => h !== `MoSf02V4V`,
            E = S(Me, ...w);
          return d(g, {
            id: u ?? a,
            children: d(ze, {
              animate: x,
              initial: !1,
              children:
                T() &&
                d(Le, {
                  value: Pe,
                  children: d(p.div, {
                    ...m,
                    ...ne,
                    className: S(E, `framer-14bkqt3`, l, _),
                    "data-framer-name": `Loading`,
                    layoutDependency: C,
                    layoutId: `pPX6omJtg`,
                    ref: i,
                    style: { ...c },
                    children: d(Ae, {
                      __framer__loop: Ie,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: Fe,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animated: !0,
                      className: `framer-2hrq2c`,
                      layoutDependency: C,
                      layoutId: `UpqpFQB76`,
                      style: {
                        "--118a55": `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
                      },
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-8BCJw.framer-riwt6z, .framer-8BCJw .framer-riwt6z { display: block; }`,
          `.framer-8BCJw.framer-14bkqt3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-8BCJw .framer-2hrq2c { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
        ],
        `framer-8BCJw`
      )),
      (q.displayName = `Legend Pagination Spinner`),
      (q.defaultProps = { height: 20, width: 40 }),
      D(q, {
        variant: {
          options: [`pPX6omJtg`, `MoSf02V4V`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      T(q, [{ explicitInter: !0, fonts: [] }, ...ke], { supportsExplicitInterCodegen: !0 }));
  }),
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
  $e,
  J,
  Y,
  et,
  tt,
  X,
  nt,
  rt,
  it,
  at,
  ot,
  Z,
  st,
  ct,
  Q,
  $;
e(() => {
  (s(),
    A(),
    _(),
    t(),
    u(),
    Se(),
    He(),
    Ce(),
    Te(),
    B(),
    U(),
    z(),
    ve(),
    Oe(),
    (Ue = x(W)),
    (We = x(Ee)),
    (Ge = x(V)),
    (Ke = x(we)),
    (qe = x(q)),
    (Je = O(k)),
    (Ye = {
      jnelRzpTZ: `(min-width: 1200px)`,
      nsvPRuEBP: `(min-width: 810px) and (max-width: 1199.98px)`,
      WC5tewSmz: `(max-width: 809.98px)`,
    }),
    (Xe = () => typeof document < `u`),
    (Ze = [`product-title`, `categories`, `best-seller`, `gender`]),
    (Qe = `framer-F4LSd`),
    ($e = {
      jnelRzpTZ: `framer-v-1adwqid`,
      nsvPRuEBP: `framer-v-w7i5c`,
      WC5tewSmz: `framer-v-191xban`,
    }),
    (J = (e, t, n) => (e && t ? `position` : n)),
    (Y = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (et = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (tt = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = M({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (X = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (nt = (e, t = {}, n) => {
      let r = `en-US`,
        i = t.locale || n || r,
        {
          useGrouping: a,
          notation: o,
          compactDisplay: ee,
          style: s,
          currency: c,
          currencyDisplay: l,
          unit: u,
          unitDisplay: d,
          minimumFractionDigits: f,
          maximumFractionDigits: p,
          minimumIntegerDigits: m,
        } = t,
        h = {
          useGrouping: a,
          notation: o,
          compactDisplay: ee,
          style: s,
          currency: c,
          currencyDisplay: l,
          unit: u,
          unitDisplay: d,
          minimumFractionDigits: f,
          maximumFractionDigits: p,
          minimumIntegerDigits: m,
        },
        g = Number(e);
      try {
        return g.toLocaleString(i, h);
      } catch {
        try {
          return g.toLocaleString(r, h);
        } catch {
          return g.toLocaleString();
        }
      }
    }),
    (rt = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (it = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (at = (e, t, n, r) => ({
      from: { alias: `flMioGaM6`, data: _e, type: `Collection` },
      select: [
        { collection: `flMioGaM6`, name: `cxkHsOrjz`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `yp6exRXCn`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `X3CtE80s9`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `ULM6scxx_`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `L0XvF6Czl`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `wjbVR4laR`, type: `Identifier` },
        { collection: `flMioGaM6`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: {
            left: {
              left: {
                left: {
                  left: { type: `LiteralValue`, value: e },
                  operator: `==`,
                  right: { type: `LiteralValue`, value: null },
                  type: `BinaryOperation`,
                },
                operator: `or`,
                right: {
                  left: {
                    left: {
                      arguments: [
                        {
                          arguments: [
                            { collection: `flMioGaM6`, name: `nSPJuhtcH`, type: `Identifier` },
                            { type: `LiteralValue`, value: e },
                          ],
                          functionName: `INTERSECT`,
                          type: `FunctionCall`,
                        },
                      ],
                      functionName: `LENGTH`,
                      type: `FunctionCall`,
                    },
                    operator: `>`,
                    right: { type: `LiteralValue`, value: 0 },
                    type: `BinaryOperation`,
                  },
                  operator: `or`,
                  right: {
                    left: {
                      arguments: [{ type: `LiteralValue`, value: e }],
                      functionName: `LENGTH`,
                      type: `FunctionCall`,
                    },
                    operator: `==`,
                    right: { type: `LiteralValue`, value: 0 },
                    type: `BinaryOperation`,
                  },
                  type: `BinaryOperation`,
                },
                type: `BinaryOperation`,
              },
              operator: `and`,
              right: {
                left: {
                  left: { type: `LiteralValue`, value: t },
                  operator: `==`,
                  right: { type: `LiteralValue`, value: null },
                  type: `BinaryOperation`,
                },
                operator: `or`,
                right: {
                  left: { collection: `flMioGaM6`, name: `NF5HioKUo`, type: `Identifier` },
                  operator: `==`,
                  right: { type: `LiteralValue`, value: t },
                  type: `BinaryOperation`,
                },
                type: `BinaryOperation`,
              },
              type: `BinaryOperation`,
            },
            operator: `and`,
            right: {
              left: {
                left: { type: `LiteralValue`, value: n },
                operator: `==`,
                right: { type: `LiteralValue`, value: null },
                type: `BinaryOperation`,
              },
              operator: `or`,
              right: {
                arguments: [
                  { collection: `flMioGaM6`, name: `X3CtE80s9`, type: `Identifier` },
                  { type: `LiteralValue`, value: n },
                ],
                functionName: `CONTAINS`,
                type: `FunctionCall`,
              },
              type: `BinaryOperation`,
            },
            type: `BinaryOperation`,
          },
          operator: `and`,
          right: {
            left: {
              left: { type: `LiteralValue`, value: r },
              operator: `==`,
              right: { type: `LiteralValue`, value: null },
              type: `BinaryOperation`,
            },
            operator: `or`,
            right: {
              left: {
                left: {
                  arguments: [
                    {
                      arguments: [
                        { collection: `flMioGaM6`, name: `vXC_2Qw_g`, type: `Identifier` },
                        { type: `LiteralValue`, value: r },
                      ],
                      functionName: `INTERSECT`,
                      type: `FunctionCall`,
                    },
                  ],
                  functionName: `LENGTH`,
                  type: `FunctionCall`,
                },
                operator: `>`,
                right: { type: `LiteralValue`, value: 0 },
                type: `BinaryOperation`,
              },
              operator: `or`,
              right: {
                left: {
                  arguments: [{ type: `LiteralValue`, value: r }],
                  functionName: `LENGTH`,
                  type: `FunctionCall`,
                },
                operator: `==`,
                right: { type: `LiteralValue`, value: 0 },
                type: `BinaryOperation`,
              },
              type: `BinaryOperation`,
            },
            type: `BinaryOperation`,
          },
          type: `BinaryOperation`,
        },
        operator: `and`,
        right: {
          left: { type: `LiteralValue`, value: `DZPAvW9I7` },
          operator: `in`,
          right: {
            arguments: [
              {
                from: { alias: `WdGHyjYPS`, data: xe, type: `Collection` },
                orderBy: [
                  {
                    arguments: [
                      { collection: `flMioGaM6`, name: `WdGHyjYPS`, type: `Identifier` },
                      { collection: `WdGHyjYPS`, name: `id`, type: `Identifier` },
                    ],
                    functionName: `INDEX_OF`,
                    type: `FunctionCall`,
                  },
                ],
                select: [{ collection: `WdGHyjYPS`, name: `id`, type: `Identifier` }],
                type: `Select`,
                where: {
                  left: { collection: `WdGHyjYPS`, name: `id`, type: `Identifier` },
                  operator: `in`,
                  right: { collection: `flMioGaM6`, name: `WdGHyjYPS`, type: `Identifier` },
                  type: `BinaryOperation`,
                },
              },
            ],
            functionName: `FLAT_ARRAY`,
            type: `FunctionCall`,
          },
          type: `BinaryOperation`,
        },
        type: `BinaryOperation`,
      },
    })),
    (ot = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = L(e, t, `flMioGaM6`);
      return n(w(r), i, a);
    }),
    (Z = { Desktop: `jnelRzpTZ`, Phone: `WC5tewSmz`, Tablet: `nsvPRuEBP` }),
    (st = ({ value: e }) =>
      v()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `jnelRzpTZ`,
    })),
    (Q = C(
      l(function (e, t) {
        let s = o(null),
          l = t ?? s,
          u = n(),
          { activeLocale: _, setLocale: te } = y(),
          v = ue(),
          [b, x] = ae({ optional: !0, parameterName: `product-title` }),
          [C, w] = oe({ collectionId: `N2cLBMuUA`, optional: !0, parameterName: `categories` }),
          [T, D] = pe({ optional: !0, parameterName: `best-seller` }),
          [O, A] = oe({ collectionId: `N2cLBMuUA`, optional: !0, parameterName: `gender` }),
          { style: M, className: N, layoutId: F, variant: L, ...R } = ct(e);
        ie(a(() => De({}, _), [_]));
        let [z, _e] = ce(L, Ye, !1),
          { activeVariantCallback: B, delay: ve } = me(void 0),
          H = ({ overlay: e }) =>
            B(async (...t) => {
              e.toggle();
            }),
          ye = B(async (...e) => {
            (x?.(void 0), w?.(void 0), D?.(void 0), A?.(void 0));
          }),
          xe = B(async (...e) => {
            (x?.(void 0), w?.(void 0), D?.(void 0), A?.(void 0));
          }),
          U = S(Qe, be),
          Se = i(P)?.isLayoutTemplate,
          Ce = !!i(m)?.transition?.layout,
          G = J(Se, Ce),
          K = le();
        se();
        let Te = (e) => !Xe() || (![`nsvPRuEBP`, `WC5tewSmz`].includes(z) && e),
          Oe = o(null);
        return (
          de({}),
          d(P.Provider, {
            value: {
              activeVariantId: z,
              humanReadableVariantMap: Z,
              primaryVariantId: `jnelRzpTZ`,
              variantClassNames: $e,
            },
            children: f(g, {
              id: F ?? u,
              children: [
                d(st, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                f(p.div, {
                  ...R,
                  className: S(U, `framer-1adwqid`, N),
                  ref: l,
                  style: { ...M },
                  children: [
                    d(tt, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !0,
                      children: (e) =>
                        d(c, {
                          children: d(I, {
                            breakpoint: z,
                            overrides: { WC5tewSmz: { width: `90%` } },
                            children: d(j, {
                              height: 47,
                              y: 913,
                              children: f(k, {
                                className: `framer-19qbwmt-container`,
                                id: `19qbwmt`,
                                layout: G,
                                layoutScroll: !0,
                                nodeId: `ACMutZ3VW`,
                                scopeId: `lJgBufJK8`,
                                children: [
                                  d(I, {
                                    breakpoint: z,
                                    overrides: { WC5tewSmz: { style: { maxWidth: `100%` } } },
                                    children: d(W, {
                                      cMjQL3FyO: O,
                                      height: `100%`,
                                      id: `ACMutZ3VW`,
                                      layoutId: `ACMutZ3VW`,
                                      NnDXoDUnx: b,
                                      oncMjQL3FyOChange: A,
                                      onNnDXoDUnxChange: x,
                                      onPPUs8twVgChange: w,
                                      onudm9VeqFiChange: D,
                                      OpuIHcazg: ye,
                                      PPUs8twVg: C,
                                      udm9VeqFi: T,
                                      USIwCqC9j: H({ overlay: e }),
                                      variant: Y(
                                        e.visible && `LKacVAUVI`,
                                        e.visible ? `LKacVAUVI` : `PM02DOoWx`
                                      ),
                                      width: `100%`,
                                    }),
                                  }),
                                  d(h, {
                                    children:
                                      e.visible &&
                                      d(c, {
                                        children: ee(
                                          d(fe, {
                                            triggerId: `19qbwmt`,
                                            children: d(re, {
                                              children: d(
                                                p.div,
                                                {
                                                  animate: {
                                                    opacity: 1,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.5, 0, 0.88, 0.77],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  className: S(U, `framer-1snujhi`),
                                                  "data-framer-portal-id": `19qbwmt`,
                                                  exit: {
                                                    opacity: 0,
                                                    transition: {
                                                      delay: 0,
                                                      duration: 0,
                                                      ease: [0.12, 0.23, 0.5, 1],
                                                      type: `tween`,
                                                    },
                                                  },
                                                  initial: { opacity: 0 },
                                                  onTap: () => e.hide(),
                                                },
                                                `C3K7a5jXi`
                                              ),
                                            }),
                                          }),
                                          et()
                                        ),
                                      }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                    }),
                    d(p.main, {
                      className: `framer-19qsrdi`,
                      "data-framer-name": `Main`,
                      layout: G,
                      children: d(`div`, {
                        className: `framer-fdj05n`,
                        "data-framer-name": `Content`,
                        children: d(`div`, {
                          className: `framer-1my3mdu`,
                          children: d(ge, {
                            children: d(ot, {
                              pageSize: 12,
                              query: at(C, T, b, O),
                              children: (e, t, n) => {
                                let i = e?.length ?? 0,
                                  a = rt(i, 0);
                                return f(c, {
                                  children: [
                                    f(`div`, {
                                      className: `framer-15oqyb7`,
                                      "data-framer-name": `Header`,
                                      children: [
                                        d(he, {
                                          __fromCanvasComponent: !0,
                                          children: d(r, {
                                            children: d(`h3`, {
                                              className: `framer-styles-preset-1cs224s`,
                                              "data-styles-preset": `nV6XvMHlN`,
                                              dir: `auto`,
                                              children: `Legends collection`,
                                            }),
                                          }),
                                          className: `framer-1l4defy`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        d(j, {
                                          height: 21,
                                          width: `1072px`,
                                          y:
                                            (v?.y || 0) +
                                            160 +
                                            0 +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            44.4,
                                          children: d(k, {
                                            className: `framer-wtxcuw-container`,
                                            nodeId: `TCmmLJSb1`,
                                            scopeId: `lJgBufJK8`,
                                            children: d(Ee, {
                                              BwN_hqFrE: `results`,
                                              height: `100%`,
                                              id: `TCmmLJSb1`,
                                              layoutId: `TCmmLJSb1`,
                                              rGomIo08R: i,
                                              style: { width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    e?.map(
                                      (
                                        {
                                          cxkHsOrjz: e,
                                          id: t,
                                          L0XvF6Czl: n,
                                          ULM6scxx_: r,
                                          wjbVR4laR: i,
                                          X3CtE80s9: a,
                                          yp6exRXCn: o,
                                        },
                                        ee
                                      ) => (
                                        (a ??= ``),
                                        (r ??= ``),
                                        (n ??= 0),
                                        (i ??= ``),
                                        d(
                                          g,
                                          {
                                            id: `flMioGaM6-${t}`,
                                            children: d(ne.Provider, {
                                              value: { wjbVR4laR: i },
                                              children: d(`div`, {
                                                className: `framer-9orrmf`,
                                                children: d(E, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { wjbVR4laR: i },
                                                        webPageId: `fIwdA4CC3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { wjbVR4laR: i },
                                                        webPageId: `fIwdA4CC3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { wjbVR4laR: i },
                                                        webPageId: `fIwdA4CC3`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (t) =>
                                                    d(I, {
                                                      breakpoint: z,
                                                      overrides: {
                                                        nsvPRuEBP: {
                                                          width: `max(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 76px) / 3, 50px), 1px)`,
                                                        },
                                                        WC5tewSmz: {
                                                          width: `max(max(min(${v?.width || `100vw`} - 40px, 500px) - 56px, 50px), 1px)`,
                                                        },
                                                      },
                                                      children: d(j, {
                                                        height: 499,
                                                        width: `max(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px), 1px)`,
                                                        y:
                                                          (v?.y || 0) +
                                                          160 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          100 +
                                                          0 +
                                                          0 +
                                                          97.4 +
                                                          0,
                                                        children: d(k, {
                                                          className: `framer-chhywt-container`,
                                                          draggable: `false`,
                                                          nodeId: `VUHdC6aYa`,
                                                          scopeId: `lJgBufJK8`,
                                                          children: d(I, {
                                                            breakpoint: z,
                                                            overrides: {
                                                              nsvPRuEBP: { DpzGN4NEt: t[1] },
                                                              WC5tewSmz: { DpzGN4NEt: t[2] },
                                                            },
                                                            children: d(V, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              fznMvrmZS: `rgb(245, 245, 245)`,
                                                              height: `100%`,
                                                              id: `VUHdC6aYa`,
                                                              layoutId: `VUHdC6aYa`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: X(e),
                                                              Rqo_rbsqg: X(o),
                                                              style: { width: `100%` },
                                                              variant: Y(`x9sTdZGYw`),
                                                              width: `100%`,
                                                              yrXIEPqWT: nt(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                K
                                                              ),
                                                            }),
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
                                    Te(a !== !1) &&
                                      d(j, {
                                        height: 800,
                                        width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px) * 3 + 20px)`,
                                        children: d(k, {
                                          className: S(
                                            `framer-13kfyli-container`,
                                            `hidden-w7i5c`,
                                            `hidden-191xban`,
                                            a === !1 && `hidden-1adwqid`
                                          ),
                                          nodeId: `JKdouuIRr`,
                                          scopeId: `lJgBufJK8`,
                                          children: d(we, {
                                            cIQQTftsx: xe,
                                            height: `100%`,
                                            id: `JKdouuIRr`,
                                            layoutId: `JKdouuIRr`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    d(I, {
                                      breakpoint: z,
                                      overrides: {
                                        nsvPRuEBP: {
                                          width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 76px) / 3, 50px) * 3 + 20px)`,
                                        },
                                        WC5tewSmz: {
                                          width: `max(min(${v?.width || `100vw`} - 40px, 500px) - 56px, 50px)`,
                                        },
                                      },
                                      children: d(j, {
                                        height: 50,
                                        width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px) * 3 + 20px)`,
                                        y: (v?.y || 0) + 160 + 0 + 0 + 0 + 100 + 0 + 0 + 616.4,
                                        children: d(Je, {
                                          __loadMore: n,
                                          __paginationInfo: t,
                                          className: `framer-1khxmq-container`,
                                          nodeId: `raU_oET2D`,
                                          ref: Oe,
                                          scopeId: `lJgBufJK8`,
                                          children: d(q, {
                                            height: `100%`,
                                            id: `raU_oET2D`,
                                            layoutId: `raU_oET2D`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: it(
                                              t,
                                              { disabled: `MoSf02V4V`, loading: `pPX6omJtg` },
                                              Y(`pPX6omJtg`)
                                            ),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                });
                              },
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-F4LSd.framer-d641i8, .framer-F4LSd .framer-d641i8 { display: block; }`,
        `.framer-F4LSd.framer-1adwqid { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-F4LSd .framer-19qbwmt-container { bottom: 40px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: auto; z-index: 10; }`,
        `.framer-F4LSd.framer-1snujhi { inset: 0px; position: fixed; user-select: none; z-index: 8; }`,
        `.framer-F4LSd .framer-19qsrdi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-fdj05n { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200%; overflow: visible; padding: 100px 64px 64px 64px; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-1my3mdu { display: grid; flex: none; gap: 20px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-15oqyb7 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 1072px; }`,
        `.framer-F4LSd .framer-1l4defy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-F4LSd .framer-wtxcuw-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-9orrmf { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-chhywt-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-F4LSd .framer-13kfyli-container { align-self: start; flex: none; grid-column: 1 / -1; height: 80vh; justify-self: start; position: relative; width: 100%; }`,
        `.framer-F4LSd .framer-1khxmq-container { align-self: start; flex: none; grid-column: 1 / -1; height: 50px; justify-self: start; position: relative; width: 100%; }`,
        ...H,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-F4LSd.framer-1adwqid { width: 810px; } .framer-F4LSd .framer-fdj05n { padding: 100px 28px 64px 28px; }}`,
        `@media (max-width: 809.98px) { .framer-F4LSd.framer-1adwqid { width: 390px; } .framer-F4LSd .framer-19qbwmt-container { max-width: 90%; } .framer-F4LSd .framer-fdj05n { align-content: center; align-items: center; justify-content: flex-start; max-width: 500px; padding: 100px 28px 28px 28px; } .framer-F4LSd .framer-1my3mdu { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-F4LSd`
    )),
    (Q.displayName = `Shoes`),
    (Q.defaultProps = { height: 2570, width: 1200 }),
    T(
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
          ],
        },
        ...Ue,
        ...We,
        ...Ge,
        ...Ke,
        ...qe,
        ...F(ye),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([te(W, {}, t)])) }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerlJgBufJK8`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `2570`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"nsvPRuEBP":{"layout":["fixed","auto"]},"WC5tewSmz":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Ze as queryParamNames };
//# sourceMappingURL=WARRBi5341ixA_t3YGg5_ASL-t7p7EQMBF3Gew_Ft4E.CEFbVQUb.mjs.map
