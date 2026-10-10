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
import { n as B, t as ve } from "./URl4ptbYA.BL9HGZoY.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./nV6XvMHlN.6LAm4Vcv.mjs";
import { i as Ce, n as V, r as H, t as we } from "./qGQWmqjfV.B9CXoPp_.mjs";
import { n as Te, t as U } from "./rulyW4hkS.B6GaFbwO.mjs";
import { n as W, t as Ee } from "./sAat8iFw8.DVzxEiEg.mjs";
import De, { t as Oe } from "./4rKLf-nE0WI5WDDpPpkNfU0lmWLD5sbI07Q4nbWsHbw.BLU_0Fhw.mjs";
var G,
  K,
  ke,
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
  q,
  Be = e(() => {
    (s(),
      A(),
      _(),
      t(),
      Te(),
      (G = x(U)),
      (K = R(U)),
      (ke = [`xGU0Yvsx6`, `ecQjn7JF8`]),
      (Ae = `framer-dPTVE`),
      (je = { ecQjn7JF8: `framer-v-17pgbrw`, xGU0Yvsx6: `framer-v-1x90scj` }),
      (Me = { duration: 0, type: `tween` }),
      (Ne = { delay: 0, duration: 0.65, ease: [0, 0, 1, 1], type: `tween` }),
      (Pe = {
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
      (Fe = ({ value: e, children: t }) => {
        let n = i(m),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: o, children: t });
      }),
      (Ie = { Hidden: `ecQjn7JF8`, Loading: `xGU0Yvsx6` }),
      (Le = p.create(r)),
      (Re = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ie[r.variant] ?? r.variant ?? `xGU0Yvsx6`,
      })),
      (ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = C(
        l(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: ee, setLocale: s } = y();
          ue();
          let { style: c, className: l, layoutId: u, variant: f, ...m } = Re(e),
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
              cycleOrder: ke,
              defaultVariant: `xGU0Yvsx6`,
              ref: i,
              variant: f,
              variantClassNames: je,
            }),
            C = ze(e, x),
            w = [],
            T = () => h !== `ecQjn7JF8`,
            E = S(Ae, ...w);
          return d(g, {
            id: u ?? a,
            children: d(Le, {
              animate: x,
              initial: !1,
              children:
                T() &&
                d(Fe, {
                  value: Me,
                  children: d(p.div, {
                    ...m,
                    ...ne,
                    className: S(E, `framer-1x90scj`, l, _),
                    "data-framer-name": `Loading`,
                    layoutDependency: C,
                    layoutId: `xGU0Yvsx6`,
                    ref: i,
                    style: { ...c },
                    children: d(K, {
                      __framer__loop: Pe,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: Ne,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animated: !0,
                      className: `framer-ivc6i8`,
                      layoutDependency: C,
                      layoutId: `DiWabWybu`,
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
          `.framer-dPTVE.framer-1u0vv2p, .framer-dPTVE .framer-1u0vv2p { display: block; }`,
          `.framer-dPTVE.framer-1x90scj { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-dPTVE .framer-ivc6i8 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
        ],
        `framer-dPTVE`
      )),
      (q.displayName = `Shoes Pagination Spinner`),
      (q.defaultProps = { height: 20, width: 40 }),
      D(q, {
        variant: {
          options: [`xGU0Yvsx6`, `ecQjn7JF8`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      T(q, [{ explicitInter: !0, fonts: [] }, ...G], { supportsExplicitInterCodegen: !0 }));
  }),
  Ve,
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
  J,
  Y,
  $e,
  X,
  et,
  tt,
  nt,
  rt,
  it,
  Z,
  at,
  ot,
  Q,
  $;
e(() => {
  (s(),
    A(),
    _(),
    t(),
    u(),
    Ce(),
    Be(),
    V(),
    W(),
    B(),
    z(),
    ye(),
    Oe(),
    (Ve = x(H)),
    (He = x(Ee)),
    (Ue = x(ve)),
    (We = x(we)),
    (Ge = x(q)),
    (Ke = O(k)),
    (qe = {
      H8WBkTxQ7: `(max-width: 809.98px)`,
      tO0iNLvsd: `(min-width: 1200px)`,
      yyfbrgAn_: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Je = () => typeof document < `u`),
    (Ye = [`product-title`, `categories`, `best-seller`, `gender`]),
    (Xe = `framer-2GgBS`),
    (Ze = {
      H8WBkTxQ7: `framer-v-1xdopta`,
      tO0iNLvsd: `framer-v-xfbfv5`,
      yyfbrgAn_: `framer-v-aw9qjj`,
    }),
    (Qe = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    ($e = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = M({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (X = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (et = (e, t = {}, n) => {
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
    (tt = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (nt = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (rt = (e, t, n, r) => ({
      from: { alias: `vv8nJPtOY`, data: _e, type: `Collection` },
      select: [
        { collection: `vv8nJPtOY`, name: `cxkHsOrjz`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `yp6exRXCn`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `X3CtE80s9`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `ULM6scxx_`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `L0XvF6Czl`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `wjbVR4laR`, type: `Identifier` },
        { collection: `vv8nJPtOY`, name: `id`, type: `Identifier` },
      ],
      where: {
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
                          { collection: `vv8nJPtOY`, name: `nSPJuhtcH`, type: `Identifier` },
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
                left: { collection: `vv8nJPtOY`, name: `NF5HioKUo`, type: `Identifier` },
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
                { collection: `vv8nJPtOY`, name: `X3CtE80s9`, type: `Identifier` },
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
                      { collection: `vv8nJPtOY`, name: `vXC_2Qw_g`, type: `Identifier` },
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
    })),
    (it = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = L(e, t, `vv8nJPtOY`);
      return n(w(r), i, a);
    }),
    (Z = { Desktop: `tO0iNLvsd`, Phone: `H8WBkTxQ7`, Tablet: `yyfbrgAn_` }),
    (at = ({ value: e }) =>
      v()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ot = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `tO0iNLvsd`,
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
          { style: M, className: N, layoutId: F, variant: L, ...R } = ot(e);
        ie(a(() => De({}, _), [_]));
        let [z, _e] = ce(L, qe, !1),
          { activeVariantCallback: B, delay: ye } = me(void 0),
          be = ({ overlay: e }) =>
            B(async (...t) => {
              e.toggle();
            }),
          xe = B(async (...e) => {
            (x?.(void 0), w?.(void 0), D?.(void 0), A?.(void 0));
          }),
          Ce = B(async (...e) => {
            (x?.(void 0), w?.(void 0), D?.(void 0), A?.(void 0));
          }),
          V = S(Xe, Se),
          Te = i(P)?.isLayoutTemplate,
          U = !!i(m)?.transition?.layout,
          W = Qe(Te, U),
          Oe = le();
        se();
        let G = (e) => !Je() || (![`yyfbrgAn_`, `H8WBkTxQ7`].includes(z) && e),
          K = o(null);
        return (
          de({}),
          d(P.Provider, {
            value: {
              activeVariantId: z,
              humanReadableVariantMap: Z,
              primaryVariantId: `tO0iNLvsd`,
              variantClassNames: Ze,
            },
            children: f(g, {
              id: F ?? u,
              children: [
                d(at, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                f(p.div, {
                  ...R,
                  className: S(V, `framer-xfbfv5`, N),
                  ref: l,
                  style: { ...M },
                  children: [
                    d($e, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !0,
                      children: (e) =>
                        d(c, {
                          children: d(I, {
                            breakpoint: z,
                            overrides: { H8WBkTxQ7: { width: `90%` } },
                            children: d(j, {
                              height: 47,
                              y: 913,
                              children: f(k, {
                                className: `framer-1dzow2d-container`,
                                id: `1dzow2d`,
                                layout: W,
                                layoutScroll: !0,
                                nodeId: `RXbMGQjlM`,
                                scopeId: `YYV2AyPUN`,
                                children: [
                                  d(I, {
                                    breakpoint: z,
                                    overrides: { H8WBkTxQ7: { style: { maxWidth: `100%` } } },
                                    children: d(H, {
                                      cMjQL3FyO: O,
                                      height: `100%`,
                                      id: `RXbMGQjlM`,
                                      layoutId: `RXbMGQjlM`,
                                      NnDXoDUnx: b,
                                      oncMjQL3FyOChange: A,
                                      onNnDXoDUnxChange: x,
                                      onPPUs8twVgChange: w,
                                      onudm9VeqFiChange: D,
                                      OpuIHcazg: xe,
                                      PPUs8twVg: C,
                                      udm9VeqFi: T,
                                      USIwCqC9j: be({ overlay: e }),
                                      variant: J(
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
                                            triggerId: `1dzow2d`,
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
                                                  className: S(V, `framer-1m7j179`),
                                                  "data-framer-portal-id": `1dzow2d`,
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
                                                `v20eXpUv6`
                                              ),
                                            }),
                                          }),
                                          Y()
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
                      className: `framer-1tus31w`,
                      "data-framer-name": `Main`,
                      layout: W,
                      children: d(`div`, {
                        className: `framer-1bxeggy`,
                        "data-framer-name": `Content`,
                        children: d(`div`, {
                          className: `framer-17pubas`,
                          children: d(ge, {
                            children: d(it, {
                              pageSize: 12,
                              query: rt(C, T, b, O),
                              children: (e, t, n) => {
                                let i = e?.length ?? 0,
                                  a = tt(i, 0);
                                return f(c, {
                                  children: [
                                    f(`div`, {
                                      className: `framer-1y1vkhi`,
                                      "data-framer-name": `Header`,
                                      children: [
                                        d(he, {
                                          __fromCanvasComponent: !0,
                                          children: d(r, {
                                            children: d(`h3`, {
                                              className: `framer-styles-preset-1cs224s`,
                                              "data-styles-preset": `nV6XvMHlN`,
                                              dir: `auto`,
                                              children: `Full collection`,
                                            }),
                                          }),
                                          className: `framer-1atnfhb`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        d(I, {
                                          breakpoint: z,
                                          overrides: {
                                            H8WBkTxQ7: {
                                              width: `max(min(${v?.width || `100vw`} - 40px, 500px) - 56px, 50px)`,
                                            },
                                            yyfbrgAn_: {
                                              width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 66px) / 2, 50px) * 2 + 10px)`,
                                            },
                                          },
                                          children: d(j, {
                                            height: 21,
                                            width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px) * 3 + 20px)`,
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
                                              className: `framer-1pry550-container`,
                                              nodeId: `MiHvbhh4s`,
                                              scopeId: `YYV2AyPUN`,
                                              children: d(Ee, {
                                                BwN_hqFrE: `results`,
                                                height: `100%`,
                                                id: `MiHvbhh4s`,
                                                layoutId: `MiHvbhh4s`,
                                                rGomIo08R: i,
                                                style: { width: `100%` },
                                                width: `100%`,
                                              }),
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
                                            id: `vv8nJPtOY-${t}`,
                                            children: d(ne.Provider, {
                                              value: { wjbVR4laR: i },
                                              children: d(`div`, {
                                                className: `framer-1nuiso6`,
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
                                                        H8WBkTxQ7: {
                                                          width: `max(max(min(${v?.width || `100vw`} - 40px, 500px) - 56px, 50px), 1px)`,
                                                        },
                                                        yyfbrgAn_: {
                                                          width: `max(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 66px) / 2, 50px), 1px)`,
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
                                                          className: `framer-jmk9rr-container`,
                                                          draggable: `false`,
                                                          nodeId: `yxzpeo4qT`,
                                                          scopeId: `YYV2AyPUN`,
                                                          children: d(I, {
                                                            breakpoint: z,
                                                            overrides: {
                                                              H8WBkTxQ7: { DpzGN4NEt: t[2] },
                                                              yyfbrgAn_: { DpzGN4NEt: t[1] },
                                                            },
                                                            children: d(ve, {
                                                              c1lLI8Tpf: a,
                                                              DpzGN4NEt: t[0],
                                                              fznMvrmZS: `rgb(245, 245, 245)`,
                                                              height: `100%`,
                                                              id: `yxzpeo4qT`,
                                                              layoutId: `yxzpeo4qT`,
                                                              ogzYrzUEQ: r,
                                                              owbnoSkUH: X(e),
                                                              Rqo_rbsqg: X(o),
                                                              style: { width: `100%` },
                                                              variant: J(`x9sTdZGYw`),
                                                              width: `100%`,
                                                              yrXIEPqWT: et(
                                                                n,
                                                                {
                                                                  currency: `USD`,
                                                                  currencyDisplay: `symbol`,
                                                                  locale: ``,
                                                                  notation: `standard`,
                                                                  style: `currency`,
                                                                },
                                                                Oe
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
                                    G(a !== !1) &&
                                      d(j, {
                                        height: 800,
                                        width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px) * 3 + 20px)`,
                                        children: d(k, {
                                          className: S(
                                            `framer-xh32ay-container`,
                                            `hidden-aw9qjj`,
                                            `hidden-1xdopta`,
                                            a === !1 && `hidden-xfbfv5`
                                          ),
                                          nodeId: `E6JubqHjR`,
                                          scopeId: `YYV2AyPUN`,
                                          children: d(we, {
                                            cIQQTftsx: Ce,
                                            height: `100%`,
                                            id: `E6JubqHjR`,
                                            layoutId: `E6JubqHjR`,
                                            style: { height: `100%`, width: `100%` },
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    d(I, {
                                      breakpoint: z,
                                      overrides: {
                                        H8WBkTxQ7: {
                                          width: `max(min(${v?.width || `100vw`} - 40px, 500px) - 56px, 50px)`,
                                        },
                                        yyfbrgAn_: {
                                          width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 66px) / 2, 50px) * 2 + 10px)`,
                                        },
                                      },
                                      children: d(j, {
                                        height: 50,
                                        width: `calc(max((min(${v?.width || `100vw`} - 40px, (${v?.width || `100vw`} - 40px) * 12) - 148px) / 3, 50px) * 3 + 20px)`,
                                        y: (v?.y || 0) + 160 + 0 + 0 + 0 + 100 + 0 + 0 + 616.4,
                                        children: d(Ke, {
                                          __loadMore: n,
                                          __paginationInfo: t,
                                          className: `framer-1ileqsy-container`,
                                          nodeId: `ukoZFs9p2`,
                                          ref: K,
                                          scopeId: `YYV2AyPUN`,
                                          children: d(q, {
                                            height: `100%`,
                                            id: `ukoZFs9p2`,
                                            layoutId: `ukoZFs9p2`,
                                            style: { height: `100%`, width: `100%` },
                                            variant: nt(
                                              t,
                                              { disabled: `ecQjn7JF8`, loading: `xGU0Yvsx6` },
                                              J(`xGU0Yvsx6`)
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
        `.framer-2GgBS.framer-juqcaq, .framer-2GgBS .framer-juqcaq { display: block; }`,
        `.framer-2GgBS.framer-xfbfv5 { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-2GgBS .framer-1dzow2d-container { bottom: 40px; flex: none; height: auto; left: 50%; position: fixed; transform: translateX(-50%); width: auto; z-index: 10; }`,
        `.framer-2GgBS.framer-1m7j179 { inset: 0px; position: fixed; user-select: none; z-index: 8; }`,
        `.framer-2GgBS .framer-1tus31w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-1bxeggy { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1200%; overflow: visible; padding: 100px 64px 64px 64px; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-17pubas { display: grid; flex: none; gap: 20px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-1y1vkhi { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 12px 0px; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-1atnfhb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2GgBS .framer-1pry550-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-1nuiso6 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-jmk9rr-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-2GgBS .framer-xh32ay-container { align-self: start; flex: none; grid-column: 1 / -1; height: 80vh; justify-self: start; position: relative; width: 100%; }`,
        `.framer-2GgBS .framer-1ileqsy-container { align-self: center; flex: none; grid-column: 1 / -1; height: 50px; justify-self: center; position: relative; width: 100%; }`,
        ...be,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2GgBS.framer-xfbfv5 { width: 810px; } .framer-2GgBS .framer-1bxeggy { padding: 100px 28px 64px 28px; } .framer-2GgBS .framer-17pubas { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-2GgBS.framer-xfbfv5 { width: 390px; } .framer-2GgBS .framer-1dzow2d-container { max-width: 90%; } .framer-2GgBS .framer-1bxeggy { align-content: center; align-items: center; justify-content: flex-start; max-width: 500px; padding: 100px 28px 28px 28px; } .framer-2GgBS .framer-17pubas { grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-2GgBS`
    )),
    (Q.displayName = `Shoes`),
    (Q.defaultProps = { height: 3040, width: 1200 }),
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
        ...Ve,
        ...He,
        ...Ue,
        ...We,
        ...Ge,
        ...F(xe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([te(H, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerYYV2AyPUN`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"yyfbrgAn_":{"layout":["fixed","auto"]},"H8WBkTxQ7":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `3040`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, Ye as queryParamNames };
//# sourceMappingURL=gWTmudMYuV0vSsnw3tjzKILHZsxKizTkQ_04vPPnxK0.CZEjaptt.mjs.map
