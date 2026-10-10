import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  g as a,
  j as o,
  k as s,
  l as c,
  o as l,
  s as u,
  y as ee,
} from "./react.BSDwOlon.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.CxF0nSu_.mjs";
import {
  A as h,
  At as te,
  Dt as g,
  E as _,
  Et as v,
  F as y,
  G as ne,
  H as re,
  Mt as b,
  N as x,
  St as S,
  T as C,
  V as w,
  Y as T,
  _ as ie,
  _t as E,
  a as D,
  b as O,
  ft as ae,
  ht as k,
  i as A,
  jt as oe,
  k as j,
  lt as se,
  n as M,
  o as N,
  pt as ce,
  tt as P,
  u as le,
  ut as ue,
  vt as de,
  wt as fe,
  x as F,
  yt as pe,
} from "./framer.qahQ4u2X.mjs";
import { i as me, n as he, r as ge, t as _e } from "./nqYznXGVD.CwEAfUBz.mjs";
import { n as ve, t as I } from "./JG_j3MT2u.JUuCAjku.mjs";
import { i as ye, t as be } from "./lmAnavhxT.BYm9uwFY.mjs";
import {
  a as xe,
  c as Se,
  i as Ce,
  l as we,
  n as Te,
  o as Ee,
  r as De,
  s as Oe,
  t as L,
  u as ke,
} from "./k6B8SXsLI.4731vwEO.mjs";
import { i as Ae, o as R } from "./nEfD8A7bT.BCM6xOOM.mjs";
import je, { t as Me } from "./2ijQSR_AA8F_KF2oExWjUGHlRHSE2pDdgDwNsVHOeWw.D9HuUvjv.mjs";
var z,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  B,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  V,
  Ke = e(() => {
    (l(),
      T(),
      m(),
      r(),
      (z = te(d.div)),
      (Ne = [`G47S15YSn`, `PX1MOnVXY`]),
      (Pe = `framer-IJaBb`),
      (Fe = { G47S15YSn: `framer-v-1hbo82m`, PX1MOnVXY: `framer-v-17k3l76` }),
      (Ie = { duration: 0, type: `tween` }),
      (Le = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (B = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Re = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: B,
        x: 0,
        y: 0,
      }),
      (ze = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Be = {
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
      (Ve = ({ value: e, children: t }) => {
        let r = o(f),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: t });
      }),
      (He = { Hidden: `PX1MOnVXY`, Loading: `G47S15YSn` }),
      (Ue = d.create(t)),
      (We = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: He[r.variant] ?? r.variant ?? `G47S15YSn`,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (V = g(
        a(function (e, t) {
          let n = s(null),
            r = t ?? n,
            a = ee(),
            { activeLocale: o, setLocale: c } = de();
          se();
          let { style: l, className: u, layoutId: f, variant: m, ...h } = We(e),
            {
              baseVariant: te,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: ne,
              isLoading: re,
              setGestureState: b,
              setVariant: S,
              variants: C,
            } = v({
              cycleOrder: Ne,
              defaultVariant: `G47S15YSn`,
              ref: r,
              variant: m,
              variantClassNames: Fe,
            }),
            w = Ge(e, C),
            T = [],
            ie = () => te !== `PX1MOnVXY`,
            E = x(Pe, ...T);
          return i(p, {
            id: f ?? a,
            children: i(Ue, {
              animate: C,
              initial: !1,
              children:
                ie() &&
                i(Ve, {
                  value: Ie,
                  children: i(d.div, {
                    ...h,
                    ...y,
                    className: x(E, `framer-1hbo82m`, u, g),
                    "data-framer-name": `Loading`,
                    layoutDependency: w,
                    layoutId: `G47S15YSn`,
                    ref: r,
                    style: { ...l },
                    children: i(z, {
                      __framer__animate: { transition: B },
                      __framer__animateOnce: !1,
                      __framer__enter: Le,
                      __framer__exit: Re,
                      __framer__styleAppearEffectEnabled: !0,
                      __framer__threshold: 0.5,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      className: `framer-1qrc6yg`,
                      "data-framer-name": `Spinner`,
                      layoutDependency: w,
                      layoutId: `onOQ0YrdY`,
                      style: {
                        mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                      },
                      children: i(z, {
                        __framer__loop: Be,
                        __framer__loopEffectEnabled: !0,
                        __framer__loopPauseOffscreen: !0,
                        __framer__loopRepeatDelay: 0,
                        __framer__loopRepeatType: `loop`,
                        __framer__loopTransition: ze,
                        __perspectiveFX: !1,
                        __smartComponentFX: !0,
                        __targetOpacity: 1,
                        className: `framer-1jivlv8`,
                        "data-framer-name": `Conic`,
                        layoutDependency: w,
                        layoutId: `rN6xsA2D3`,
                        style: {
                          background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(153, 153, 153) 342deg)`,
                        },
                        children: i(d.div, {
                          className: `framer-m7b4s7`,
                          "data-framer-name": `Round`,
                          layoutDependency: w,
                          layoutId: `KWLYXFUsw`,
                          style: {
                            backgroundColor: `rgb(153, 153, 153)`,
                            borderBottomLeftRadius: 1,
                            borderBottomRightRadius: 1,
                            borderTopLeftRadius: 1,
                            borderTopRightRadius: 1,
                          },
                        }),
                      }),
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-IJaBb.framer-xuzmjz, .framer-IJaBb .framer-xuzmjz { display: block; }`,
          `.framer-IJaBb.framer-1hbo82m { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-IJaBb .framer-1qrc6yg { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-IJaBb .framer-1jivlv8 { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-IJaBb .framer-m7b4s7 { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
        ],
        `framer-IJaBb`
      )),
      (V.displayName = `Spinner`),
      (V.defaultProps = { height: 40, width: 40 }),
      h(V, {
        variant: {
          options: [`G47S15YSn`, `PX1MOnVXY`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: N.Enum,
        },
      }),
      j(V, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  H,
  ot,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  st,
  ct,
  lt,
  ut,
  dt,
  X,
  ft,
  Z,
  pt,
  Q,
  mt,
  $,
  ht;
e(() => {
  (l(),
    T(),
    m(),
    r(),
    ke(),
    Se(),
    Ke(),
    Ee(),
    Ce(),
    ve(),
    Te(),
    ye(),
    Ae(),
    me(),
    Me(),
    (qe = b(_)),
    (Je = w(L)),
    (Ye = b(d.div)),
    (Xe = w(I)),
    (Ze = b(D)),
    (Qe = w(V)),
    ($e = oe(D)),
    (et = {
      O5HpnDELz: `(min-width: 810px) and (max-width: 1199.98px)`,
      Oqv6bgDvM: `(min-width: 1200px)`,
      VfQ_h64Es: `(max-width: 809.98px)`,
    }),
    (tt = []),
    (nt = `framer-bZiBs`),
    (rt = {
      O5HpnDELz: `framer-v-1hue0vn`,
      Oqv6bgDvM: `framer-v-1ybz51s`,
      VfQ_h64Es: `framer-v-wawv2s`,
    }),
    (it = (e, t, n) => (e && t ? `position` : n)),
    (at = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.18, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (H = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (ot = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.18, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (U = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (W = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (G = (e, t) => (e ? `LSONprrc9` : `AWSjxTVrg`)),
    (K = () => ({
      from: { alias: `GYdfbK1MX`, data: R, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 0 },
      select: [
        { collection: `GYdfbK1MX`, name: `uI3y5OxVC`, type: `Identifier` },
        { collection: `GYdfbK1MX`, name: `bYVDyYzAw`, type: `Identifier` },
        { collection: `GYdfbK1MX`, name: `id`, type: `Identifier` },
      ],
    })),
    (q = ({ query: e, pageSize: t, children: n }) => n(S(e))),
    (J = () => ({
      from: { alias: `QZIIEG7LI`, data: R, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 1 },
      select: [
        { collection: `QZIIEG7LI`, name: `uI3y5OxVC`, type: `Identifier` },
        { collection: `QZIIEG7LI`, name: `bYVDyYzAw`, type: `Identifier` },
        { collection: `QZIIEG7LI`, name: `id`, type: `Identifier` },
      ],
    })),
    (Y = () => ({
      from: { alias: `lMQgEEWVO`, data: R, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      offset: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `lMQgEEWVO`, name: `uI3y5OxVC`, type: `Identifier` },
        { collection: `lMQgEEWVO`, name: `bYVDyYzAw`, type: `Identifier` },
        { collection: `lMQgEEWVO`, name: `id`, type: `Identifier` },
      ],
    })),
    (st = { delay: 0.4, duration: 0.5, ease: [0.44, 0, 0.04, 1], type: `tween` }),
    (ct = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (lt = (e, t) => {
      switch (typeof e == `string` ? e.toLowerCase() : e) {
        case `soft baked`:
          return `QXmAHKumC`;
        case `cream filled`:
          return `NPNMwdere`;
        case `extra glazed`:
          return `LSs_Qyvsg`;
        default:
          return `QXmAHKumC`;
      }
    }),
    (ut = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (dt = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (X = (e) => ({
      from: { alias: `N5rTIDUpx`, data: be, type: `Collection` },
      orderBy: [{ collection: `N5rTIDUpx`, name: `umB1EKw1L`, type: `Identifier` }],
      select: [
        { collection: `N5rTIDUpx`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `N5rTIDUpx`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `N5rTIDUpx`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `N5rTIDUpx`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `N5rTIDUpx`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `N5rTIDUpx`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `N5rTIDUpx`, name: `vIcxxiuyk`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: e },
        type: `BinaryOperation`,
      },
    })),
    (ft = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = E(e, t, `N5rTIDUpx`);
      return n(S(r), i, a);
    }),
    (Z = { Desktop: `Oqv6bgDvM`, Phone: `VfQ_h64Es`, Tablet: `O5HpnDELz` }),
    (pt = ({ value: e }) =>
      k()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: { alias: `J_y0pMyxx`, data: R, type: `Collection` },
      select: [
        { collection: `J_y0pMyxx`, name: `bYVDyYzAw`, type: `Identifier` },
        { collection: `J_y0pMyxx`, name: `uI3y5OxVC`, type: `Identifier` },
        { collection: `J_y0pMyxx`, name: `JS_yBacKW`, type: `Identifier` },
      ],
      where: e,
    })),
    (mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Oqv6bgDvM`,
    })),
    ($ = g(
      a(function (e, r) {
        let a = s(null),
          l = r ?? a,
          m = ee(),
          { activeLocale: h, setLocale: te } = de(),
          g = se(),
          _ = ue(),
          [v] = S(Q(ne(_, `J_y0pMyxx`))),
          y = (e) => {
            if (!v) throw new ie(`No data matches path variables: ${JSON.stringify(_)}`);
            return v[e];
          },
          {
            style: re,
            className: b,
            layoutId: w,
            variant: T,
            bYVDyYzAw: E = y(`bYVDyYzAw`) ?? ``,
            uI3y5OxVC: k = y(`uI3y5OxVC`) ?? ``,
            JS_yBacKW: oe = y(`JS_yBacKW`) ?? ``,
            ...j
          } = mt(e);
        pe(n(() => je({ bYVDyYzAw: E }, h), [E, h]));
        let [N, P] = ce(T, et, !1),
          me = x(nt, _e),
          he = o(le)?.isLayoutTemplate,
          ge = !!o(f)?.transition?.layout,
          ve = it(he, ge);
        fe();
        let ye = s(null);
        return (
          ae({}),
          i(le.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: Z,
              primaryVariantId: `Oqv6bgDvM`,
              variantClassNames: rt,
            },
            children: c(p, {
              id: w ?? m,
              children: [
                i(pt, {
                  value: `html body { background: var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)); }`,
                }),
                i(d.div, {
                  ...j,
                  className: x(me, `framer-1ybz51s`, b),
                  ref: l,
                  style: { ...re },
                  children: i(d.section, {
                    className: `framer-lezzhl`,
                    "data-framer-name": `Section: Hero`,
                    layout: ve,
                    children: c(`div`, {
                      className: `framer-1f9ok21`,
                      "data-framer-name": `Container`,
                      children: [
                        c(`div`, {
                          className: `framer-15eov1r`,
                          "data-framer-name": `Title`,
                          children: [
                            i(qe, {
                              __fromCanvasComponent: !0,
                              animate: at,
                              children: i(t, {
                                children: i(`h1`, {
                                  className: `framer-styles-preset-gadxkx`,
                                  "data-styles-preset": `nqYznXGVD`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Sweet Moments Start Here`,
                                }),
                              }),
                              className: `framer-1jahiud`,
                              "data-framer-appear-id": `1jahiud`,
                              fonts: [`Inter`],
                              initial: H,
                              optimized: !0,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            i(`div`, {
                              className: `framer-12y1q8n`,
                              "data-framer-name": `Collection Scroll`,
                              children: c(Ye, {
                                animate: ot,
                                className: `framer-1qfa2xi`,
                                "data-border": !0,
                                "data-framer-appear-id": `1qfa2xi`,
                                "data-framer-name": `Collection Button`,
                                initial: H,
                                optimized: !0,
                                children: [
                                  i(C, {
                                    links: [
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: { webPageId: `Bbzc06U8n` },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      i(F, {
                                        breakpoint: N,
                                        overrides: {
                                          O5HpnDELz: {
                                            y:
                                              (g?.y || 0) + 140 + 0 + 0 + 200 + 0 + 0 + 144 + 0 + 4,
                                          },
                                          VfQ_h64Es: {
                                            y:
                                              (g?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              0 +
                                              200 +
                                              0 +
                                              0 +
                                              136 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: i(A, {
                                          height: 48,
                                          y: (g?.y || 0) + 140 + 0 + 0 + 200 + 0 + 0 + 152 + 0 + 4,
                                          children: i(D, {
                                            className: `framer-pz5ysm-container`,
                                            nodeId: `KyOMWuEfP`,
                                            scopeId: `J_y0pMyxx`,
                                            children: i(F, {
                                              breakpoint: N,
                                              overrides: {
                                                O5HpnDELz: { LHspFmpES: e[1] },
                                                VfQ_h64Es: { LHspFmpES: e[2] },
                                              },
                                              children: i(L, {
                                                height: `100%`,
                                                id: `KyOMWuEfP`,
                                                layoutId: `KyOMWuEfP`,
                                                LHspFmpES: e[0],
                                                q7kleLFsT: `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                                variant: U(`AWSjxTVrg`),
                                                Wbw7SCouJ: `ALL`,
                                                width: `100%`,
                                                Y8_pHcmfZ: we,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                  i(`div`, {
                                    className: `framer-18ar0l6`,
                                    children: i(M, {
                                      children: i(q, {
                                        query: K(),
                                        children: (e, t, n) =>
                                          i(u, {
                                            children: e?.map(
                                              ({ bYVDyYzAw: e, id: t, uI3y5OxVC: n }, r) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                i(
                                                  p,
                                                  {
                                                    id: `GYdfbK1MX-${t}`,
                                                    children: i(O.Provider, {
                                                      value: { uI3y5OxVC: n },
                                                      children: i(C, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (t) =>
                                                          i(F, {
                                                            breakpoint: N,
                                                            overrides: {
                                                              O5HpnDELz: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  144 +
                                                                  0 +
                                                                  4 +
                                                                  0,
                                                              },
                                                              VfQ_h64Es: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  136 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: i(A, {
                                                              height: 48,
                                                              y:
                                                                (g?.y || 0) +
                                                                140 +
                                                                0 +
                                                                0 +
                                                                200 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4 +
                                                                0,
                                                              children: i(D, {
                                                                className: `framer-1yrxdvj-container`,
                                                                nodeId: `cd6XhwJTW`,
                                                                scopeId: `J_y0pMyxx`,
                                                                children: i(F, {
                                                                  breakpoint: N,
                                                                  overrides: {
                                                                    O5HpnDELz: { LHspFmpES: t[1] },
                                                                    VfQ_h64Es: { LHspFmpES: t[2] },
                                                                  },
                                                                  children: i(L, {
                                                                    height: `100%`,
                                                                    id: `cd6XhwJTW`,
                                                                    layoutId: `cd6XhwJTW`,
                                                                    LHspFmpES: t[0],
                                                                    q7kleLFsT: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                                                    variant: U(G(W(n, k), h)),
                                                                    Wbw7SCouJ: e,
                                                                    width: `100%`,
                                                                    Y8_pHcmfZ: De,
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
                                          }),
                                      }),
                                    }),
                                  }),
                                  i(`div`, {
                                    className: `framer-16n4rtu`,
                                    children: i(M, {
                                      children: i(q, {
                                        query: J(),
                                        children: (e, t, n) =>
                                          i(u, {
                                            children: e?.map(
                                              ({ bYVDyYzAw: e, id: t, uI3y5OxVC: n }, r) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                i(
                                                  p,
                                                  {
                                                    id: `QZIIEG7LI-${t}`,
                                                    children: i(O.Provider, {
                                                      value: { uI3y5OxVC: n },
                                                      children: i(C, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (t) =>
                                                          i(F, {
                                                            breakpoint: N,
                                                            overrides: {
                                                              O5HpnDELz: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  144 +
                                                                  0 +
                                                                  4 +
                                                                  0,
                                                              },
                                                              VfQ_h64Es: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  136 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: i(A, {
                                                              height: 48,
                                                              y:
                                                                (g?.y || 0) +
                                                                140 +
                                                                0 +
                                                                0 +
                                                                200 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4 +
                                                                0,
                                                              children: i(D, {
                                                                className: `framer-a4zim1-container`,
                                                                nodeId: `po4MxBJID`,
                                                                scopeId: `J_y0pMyxx`,
                                                                children: i(F, {
                                                                  breakpoint: N,
                                                                  overrides: {
                                                                    O5HpnDELz: { LHspFmpES: t[1] },
                                                                    VfQ_h64Es: { LHspFmpES: t[2] },
                                                                  },
                                                                  children: i(L, {
                                                                    height: `100%`,
                                                                    id: `po4MxBJID`,
                                                                    layoutId: `po4MxBJID`,
                                                                    LHspFmpES: t[0],
                                                                    q7kleLFsT: `var(--token-955a487d-0233-4fc4-9ec9-1e13d781a048, rgb(75, 88, 155))`,
                                                                    variant: U(G(W(n, k), h)),
                                                                    Wbw7SCouJ: e,
                                                                    width: `100%`,
                                                                    Y8_pHcmfZ: xe,
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
                                          }),
                                      }),
                                    }),
                                  }),
                                  i(`div`, {
                                    className: `framer-d2e4li`,
                                    children: i(M, {
                                      children: i(q, {
                                        query: Y(),
                                        children: (e, t, n) =>
                                          i(u, {
                                            children: e?.map(
                                              ({ bYVDyYzAw: e, id: t, uI3y5OxVC: n }, r) => (
                                                (n ??= ``),
                                                (e ??= ``),
                                                i(
                                                  p,
                                                  {
                                                    id: `lMQgEEWVO-${t}`,
                                                    children: i(O.Provider, {
                                                      value: { uI3y5OxVC: n },
                                                      children: i(C, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                          {
                                                            href: {
                                                              pathVariables: { uI3y5OxVC: n },
                                                              webPageId: `J_y0pMyxx`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (t) =>
                                                          i(F, {
                                                            breakpoint: N,
                                                            overrides: {
                                                              O5HpnDELz: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  144 +
                                                                  0 +
                                                                  4 +
                                                                  0,
                                                              },
                                                              VfQ_h64Es: {
                                                                y:
                                                                  (g?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  200 +
                                                                  0 +
                                                                  0 +
                                                                  136 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: i(A, {
                                                              height: 48,
                                                              y:
                                                                (g?.y || 0) +
                                                                140 +
                                                                0 +
                                                                0 +
                                                                200 +
                                                                0 +
                                                                0 +
                                                                152 +
                                                                0 +
                                                                4 +
                                                                0,
                                                              children: i(D, {
                                                                className: `framer-tnavnn-container`,
                                                                nodeId: `R8MwBrbta`,
                                                                scopeId: `J_y0pMyxx`,
                                                                children: i(F, {
                                                                  breakpoint: N,
                                                                  overrides: {
                                                                    O5HpnDELz: { LHspFmpES: t[1] },
                                                                    VfQ_h64Es: { LHspFmpES: t[2] },
                                                                  },
                                                                  children: i(L, {
                                                                    height: `100%`,
                                                                    id: `R8MwBrbta`,
                                                                    layoutId: `R8MwBrbta`,
                                                                    LHspFmpES: t[0],
                                                                    q7kleLFsT: `var(--token-e4fc807d-102e-4839-b91e-d6f174f62c2e, rgb(151, 198, 57))`,
                                                                    variant: U(G(W(n, k), h)),
                                                                    Wbw7SCouJ: e,
                                                                    width: `100%`,
                                                                    Y8_pHcmfZ: Oe,
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
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        i(`div`, {
                          className: `framer-1o0nbpa`,
                          children: i(M, {
                            children: i(ft, {
                              pageSize: 6,
                              query: X(oe),
                              children: (e, t, n) =>
                                c(u, {
                                  children: [
                                    e?.map(
                                      (
                                        {
                                          id: e,
                                          Meh67ADUX: t,
                                          QvNWOjBr7: n,
                                          umB1EKw1L: r,
                                          vIcxxiuyk: a,
                                          zzQZUhJ6B: o,
                                        },
                                        s
                                      ) => (
                                        (a ??= ``),
                                        (n ??= ``),
                                        (r ??= ``),
                                        (t ??= ``),
                                        i(
                                          p,
                                          {
                                            id: `N5rTIDUpx-${e}`,
                                            children: i(O.Provider, {
                                              value: { QvNWOjBr7: n },
                                              children: i(C, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { QvNWOjBr7: n },
                                                      webPageId: `hsuD1wdR7`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { QvNWOjBr7: n },
                                                      webPageId: `hsuD1wdR7`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { QvNWOjBr7: n },
                                                      webPageId: `hsuD1wdR7`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (e) =>
                                                  i(F, {
                                                    breakpoint: N,
                                                    overrides: {
                                                      O5HpnDELz: {
                                                        width: `max((min(max(${g?.width || `100vw`} - 40px, 1px), 1920px) - 84px) / 2, 50px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          140 +
                                                          0 +
                                                          0 +
                                                          200 +
                                                          280 +
                                                          0 +
                                                          0,
                                                      },
                                                      VfQ_h64Es: {
                                                        width: `max(min(${g?.width || `100vw`} - 40px, 1920px) - 40px, 50px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          140 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          200 +
                                                          244 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: i(A, {
                                                      height: 579,
                                                      width: `max((min(max(${g?.width || `100vw`} - 40px, 1px), 1920px) - 120px) / 3, 50px)`,
                                                      y:
                                                        (g?.y || 0) +
                                                        140 +
                                                        0 +
                                                        0 +
                                                        200 +
                                                        308 +
                                                        0 +
                                                        0,
                                                      children: i(Ze, {
                                                        animate: {
                                                          opacity: 1,
                                                          rotate: 0,
                                                          rotateX: 0,
                                                          rotateY: 0,
                                                          scale: 1,
                                                          skewX: 0,
                                                          skewY: 0,
                                                          transition: ct(st, (s % 6) * 0.2),
                                                          x: 0,
                                                          y: 0,
                                                        },
                                                        className: `framer-t6fl5q-container`,
                                                        "data-framer-appear-id": `t6fl5q-${s}`,
                                                        initial: H,
                                                        nodeId: `mhBWvVX9s`,
                                                        optimized: !0,
                                                        rendersWithMotion: !0,
                                                        scopeId: `J_y0pMyxx`,
                                                        children: i(F, {
                                                          breakpoint: N,
                                                          overrides: {
                                                            O5HpnDELz: { zNomss0Hu: e[1] },
                                                            VfQ_h64Es: { zNomss0Hu: e[2] },
                                                          },
                                                          children: i(I, {
                                                            dQFljyQ1P: t,
                                                            height: `100%`,
                                                            id: `mhBWvVX9s`,
                                                            layoutId: `mhBWvVX9s`,
                                                            OY08iNrnQ: r,
                                                            style: { width: `100%` },
                                                            t_wCHCu3L: ut(o),
                                                            variant: U(lt(a, h)),
                                                            width: `100%`,
                                                            zbLf7nA9u: a,
                                                            zNomss0Hu: e[0],
                                                          }),
                                                        }),
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
                                    i(F, {
                                      breakpoint: N,
                                      overrides: {
                                        O5HpnDELz: {
                                          y: (g?.y || 0) + 140 + 0 + 0 + 200 + 280 + 1198 - -40,
                                        },
                                        VfQ_h64Es: {
                                          y: (g?.y || 0) + 140 + 0 + 0 + 0 + 200 + 244 + 1178 - -20,
                                        },
                                      },
                                      children: i(A, {
                                        height: 40,
                                        y: (g?.y || 0) + 140 + 0 + 0 + 200 + 308 + 1198 - -60,
                                        children: i($e, {
                                          __loadMore: n,
                                          __paginationInfo: t,
                                          className: `framer-1yh2nks-container`,
                                          isModuleExternal: !0,
                                          nodeId: `xjfUzP4yH`,
                                          ref: ye,
                                          scopeId: `J_y0pMyxx`,
                                          children: i(V, {
                                            height: `100%`,
                                            id: `xjfUzP4yH`,
                                            layoutId: `xjfUzP4yH`,
                                            variant: dt(
                                              t,
                                              { disabled: `PX1MOnVXY`, loading: `G47S15YSn` },
                                              U(`G47S15YSn`)
                                            ),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-bZiBs.framer-up6dz9, .framer-bZiBs .framer-up6dz9 { display: block; }`,
        `.framer-bZiBs.framer-1ybz51s { align-content: center; align-items: center; background-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-bZiBs .framer-lezzhl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bZiBs .framer-1f9ok21 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 200px 0px 150px 0px; position: relative; width: 1px; }`,
        `.framer-bZiBs .framer-15eov1r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bZiBs .framer-1jahiud { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 850px; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-bZiBs .framer-12y1q8n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bZiBs .framer-1qfa2xi { --border-bottom-width: 1px; --border-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 100px; border-bottom-right-radius: 100px; border-top-left-radius: 100px; border-top-right-radius: 100px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 4px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bZiBs .framer-pz5ysm-container, .framer-bZiBs .framer-1yrxdvj-container, .framer-bZiBs .framer-a4zim1-container, .framer-bZiBs .framer-tnavnn-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bZiBs .framer-18ar0l6, .framer-bZiBs .framer-16n4rtu, .framer-bZiBs .framer-d2e4li { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; padding: 0px; position: relative; width: min-content; }`,
        `.framer-bZiBs .framer-1o0nbpa { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-bZiBs .framer-t6fl5q-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bZiBs .framer-1yh2nks-container { bottom: -100px; flex: none; height: auto; left: 50%; position: absolute; transform: translateX(-50%); width: auto; }`,
        ...he,
        `.framer-bZiBs[data-border="true"]::after, .framer-bZiBs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bZiBs.framer-1ybz51s { width: 810px; } .framer-bZiBs .framer-1f9ok21 { gap: 80px; padding: 200px 0px 120px 0px; } .framer-bZiBs .framer-15eov1r { gap: 32px; } .framer-bZiBs .framer-1jahiud { max-width: 650px; } .framer-bZiBs .framer-1o0nbpa { grid-template-columns: repeat(2, minmax(50px, 1fr)); padding: 0px 32px 0px 32px; } .framer-bZiBs .framer-1yh2nks-container { bottom: -80px; }}`,
        `@media (max-width: 809.98px) { .framer-bZiBs.framer-1ybz51s { width: 390px; } .framer-bZiBs .framer-lezzhl { flex-direction: column; } .framer-bZiBs .framer-1f9ok21 { flex: none; gap: 60px; padding: 200px 0px 120px 0px; width: 100%; } .framer-bZiBs .framer-15eov1r { gap: 24px; } .framer-bZiBs .framer-1jahiud { max-width: 350px; } .framer-bZiBs .framer-12y1q8n { gap: 0px; justify-content: flex-start; padding: 0px 20px 0px 20px; } .framer-bZiBs .framer-1qfa2xi { --border-bottom-width: unset; --border-left-width: unset; --border-right-width: unset; --border-top-width: unset; padding: 0px; } .framer-bZiBs .framer-1o0nbpa { gap: 20px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 0px 20px 0px 20px; } .framer-bZiBs .framer-1yh2nks-container { bottom: -60px; }}`,
      ],
      `framer-bZiBs`
    )),
    ($.displayName = `Style`),
    ($.defaultProps = { height: 1738, width: 1200 }),
    j(
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
        ...Je,
        ...Xe,
        ...Qe,
        ...re(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = P.get(K(), n),
          i = P.get(J(), n),
          a = P.get(Y(), n),
          o = P.get(Q(ne(t.pathVariables, `J_y0pMyxx`)), n).readMaybeAsync();
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          y(L, {}, t),
          (async () => {
            let [e] = (await o) ?? [];
            return P.get(X(e?.JS_yBacKW), n).preload();
          })(),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => y(L, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => y(L, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => y(L, {}, t)));
          })(),
          (async () => {
            let [e] = (await o) ?? [],
              r = (await P.get(X(e?.JS_yBacKW), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(r.flatMap((e) => [y(I, {}, t), y(V, {}, t)]));
          })(),
        ]);
      },
    }),
    (ht = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerJ_y0pMyxx`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `1738`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"O5HpnDELz":{"layout":["fixed","auto"]},"VfQ_h64Es":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ht as __FramerMetadata__, $ as default, tt as queryParamNames };
//# sourceMappingURL=vFexEzHMSfH7YxWoZkXQn1P3T7wrUcRcTIX2xLdWhEw.BJ15xzoU.mjs.map
