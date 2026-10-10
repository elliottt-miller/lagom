import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  H as i,
  I as a,
  L as o,
  M as s,
  N as c,
  c as l,
  g as u,
  l as d,
  o as f,
  s as p,
  w as m,
  y as h,
} from "./react.CWoGm2_e.mjs";
import { C as g, a as ee, r as _, t as v } from "./motion.DjW49AAR.mjs";
import {
  A as y,
  D as te,
  Et as ne,
  H as b,
  I as x,
  Ot as S,
  P as C,
  S as w,
  St as re,
  U as T,
  X as E,
  _ as ie,
  _t as ae,
  a as D,
  ct as oe,
  dt as se,
  f as ce,
  ft as le,
  i as O,
  j as k,
  kt as A,
  mt as ue,
  n as j,
  nt as M,
  o as N,
  vt as de,
  x as P,
} from "./framer.D9PtOJZM.mjs";
import { i as fe, t as F } from "./vDz2snn78.DZVUjcrj.mjs";
import { a as pe, c as me, i as he, o as ge, r as _e, s as I } from "./shared-lib.Cln7NIgD.mjs";
import { n as ve, t as L } from "./PcZeB9dzj.lfd4RlWt.mjs";
import { i as ye, n as be, r as R, t as z } from "./aaovIUHpV.CditPMM4.mjs";
import xe, { t as Se } from "./bWIh0ZeWeivkRCSyReletK4EuY1N5AyEBBOICF66svI.10ks6Snf.mjs";
function B(e) {
  let { content: t, font: n, color: a, transform: s } = e,
    [c, u] = o(``),
    [d, f] = o(0),
    p = () => {
      if (i === void 0) return !1;
      try {
        return (
          i.document?.location?.href.includes(`framer`) ||
          i.document?.location?.pathname.includes(`preview`) ||
          !i.document?.location?.host ||
          i.parent !== i
        );
      } catch {
        return !0;
      }
    },
    m = (e, t) => {
      switch (t) {
        case `Uppercase`:
          return e.toUpperCase();
        case `Lowercase`:
          return e.toLowerCase();
        case `Capitalize`:
          return e
            .split(` `)
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
            .join(` `);
        default:
          return e;
      }
    },
    h = (e) => {
      let t = p() && !c ? `term` : c;
      return e.replace(/\{\{term\}\}/g, t).replace(/\{\{\#\}\}/g, d.toString());
    },
    g = () => t;
  return (
    r(() => {
      let e = (e) => {
          V(`SearchResults`, `Received search event`, e.detail);
          let t = e.detail.term || e.detail.search;
          (u(t), e.detail.term === `` && e.detail.count && f(e.detail.count));
        },
        t = (e) => {
          (V(`SearchResults`, `Received results count`, e.detail),
            f(e.detail.count || 0),
            e.detail.search === `` && f(e.detail.count));
        },
        n = () => {
          if (i !== void 0) {
            let e = new URLSearchParams(i.location.search).get(`search`);
            e && u(e);
          }
        };
      return (
        n(),
        i.addEventListener(`popstate`, n),
        document.addEventListener(`product-search-change`, e),
        document.addEventListener(`product-search-results`, e),
        document.addEventListener(`filter-navigation`, e),
        document.addEventListener(`product-search-results`, t),
        () => {
          (i.removeEventListener(`popstate`, n),
            document.removeEventListener(`product-search-change`, e),
            document.removeEventListener(`filter-navigation`, e),
            document.removeEventListener(`product-search-results`, t));
        }
      );
    }, []),
    l(`div`, {
      style: { width: `100%`, height: `100%`, display: `flex`, alignItems: `center` },
      children: l(`span`, {
        style: { ...n, color: a, textTransform: s.toLowerCase() },
        children: m(h(g()), s),
      }),
    })
  );
}
var V,
  Ce = e(() => {
    (n(),
      f(),
      E(),
      m(),
      (V = (e, t, n) => {
        console.log(`🔍 [${e}] ${t}:`, n);
      }),
      (B.defaultProps = {
        content: `{{#}} items`,
        font: { family: `Inter`, fontSize: 16, weight: 400 },
        color: `#000000`,
        transform: `None`,
      }),
      k(B, {
        content: {
          type: N.String,
          title: `Text`,
          defaultValue: `{{#}} items`,
          description: `Use {{#}} for item count. 
 
 If on a dedicated Search page, use {{term}} for the search value.`,
        },
        font: { type: N.Font, title: `Font`, controls: `extended` },
        color: { type: N.Color, title: `Color`, defaultValue: `#000000` },
        transform: {
          type: N.Enum,
          title: `Transform`,
          options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
          defaultValue: `None`,
        },
      }));
  }),
  H,
  we,
  U,
  W,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  G,
  K,
  Fe,
  q,
  J,
  Y,
  X,
  Z,
  Ie,
  Le,
  Q,
  Re,
  ze,
  $,
  Be;
e(() => {
  (f(),
    E(),
    v(),
    m(),
    ye(),
    Ce(),
    me(),
    be(),
    ve(),
    fe(),
    ge(),
    Se(),
    (H = A(te)),
    (we = b(B)),
    (U = b(z)),
    (W = b(L)),
    (Te = S(g.div)),
    (Ee = b(R)),
    (De = A(g.main)),
    (Oe = b(I)),
    (ke = {
      gZ49hBlr4: `(min-width: 810px) and (max-width: 1199.98px)`,
      Q24KqvXVg: `(min-width: 1200px)`,
      vosz6XlN6: `(max-width: 809.98px)`,
    }),
    (Ae = []),
    (je = `framer-oypac`),
    (Me = {
      gZ49hBlr4: `framer-v-tvv7r7`,
      Q24KqvXVg: `framer-v-zc38c2`,
      vosz6XlN6: `framer-v-1ox4f7l`,
    }),
    (Ne = (e, t, n) => (e && t ? `position` : n)),
    (Pe = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.3, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (G = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (K = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Fe = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      repeat: !1,
      startDelay: 0.8,
      tokenization: `character`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (q = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = () => ({
      from: { alias: `dxaO_UFOW`, data: F, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `dxaO_UFOW`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `dxaO_UFOW`, name: `id`, type: `Identifier` },
      ],
    })),
    (X = ({ query: e, pageSize: t, children: n }) => n(re(e))),
    (Z = () => ({
      from: { alias: `wJkwL1n9_`, data: F, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `wJkwL1n9_`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `wJkwL1n9_`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ie = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (Le = { damping: 40, delay: 0, mass: 1, stiffness: 180, type: `spring` }),
    (Q = { Desktop: `Q24KqvXVg`, Phone: `vosz6XlN6`, Tablet: `gZ49hBlr4` }),
    (Re = ({ value: e }) =>
      ue()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ze = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Q[r.variant] ?? r.variant ?? `Q24KqvXVg`,
    })),
    ($ = ne(
      u(function (e, n) {
        let r = t(null),
          i = n ?? r,
          o = h(),
          { activeLocale: u, setLocale: f } = ae(),
          m = oe(),
          { style: v, className: y, layoutId: ne, variant: b, ...x } = ze(e);
        de(c(() => xe({}, u), [u]));
        let [S, re] = le(b, ke, !1),
          T = C(je, _e),
          E = s(ce)?.isLayoutTemplate,
          k = !!s(ee)?.transition?.layout,
          A = Ne(E, k);
        return (
          se({}),
          l(ce.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Q,
              primaryVariantId: `Q24KqvXVg`,
              variantClassNames: Me,
            },
            children: d(_, {
              id: ne ?? o,
              children: [
                l(Re, {
                  value: `html body { background: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)); }`,
                }),
                d(g.div, {
                  ...x,
                  className: C(T, `framer-zc38c2`, y),
                  ref: i,
                  style: { ...v },
                  children: [
                    d(De, {
                      animate: Pe,
                      className: `framer-1wrmj1t`,
                      "data-framer-appear-id": `1wrmj1t`,
                      "data-framer-name": `Main`,
                      initial: G,
                      layout: A,
                      optimized: !0,
                      children: [
                        d(`div`, {
                          className: `framer-13lm32s`,
                          "data-framer-name": `Content`,
                          children: [
                            l(`header`, {
                              className: `framer-143x45c`,
                              "data-border": !0,
                              "data-framer-name": `Header`,
                              children: l(H, {
                                __fromCanvasComponent: !0,
                                animate: K,
                                children: l(a, {
                                  children: l(`h1`, {
                                    className: `framer-styles-preset-ul51j9`,
                                    "data-styles-preset": `hPRt9GJWZ`,
                                    dir: `auto`,
                                    children: `My favorites`,
                                  }),
                                }),
                                className: `framer-67ql3u`,
                                "data-framer-appear-id": `67ql3u`,
                                effect: Fe,
                                fonts: [`Inter`],
                                initial: G,
                                optimized: !0,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            d(`div`, {
                              className: `framer-1dk58mv`,
                              "data-framer-name": `Bar`,
                              children: [
                                l(O, {
                                  children: l(D, {
                                    className: `framer-dtyr5u-container`,
                                    isModuleExternal: !0,
                                    nodeId: `RguyxwQ7x`,
                                    scopeId: `CUJ6QeiFM`,
                                    children: l(w, {
                                      breakpoint: S,
                                      overrides: {
                                        gZ49hBlr4: {
                                          font: {
                                            fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                            fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                            fontSize: `13px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `110%`,
                                          },
                                        },
                                        vosz6XlN6: {
                                          font: {
                                            fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                            fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                            fontSize: `12px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `110%`,
                                          },
                                        },
                                      },
                                      children: l(B, {
                                        color: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                        content: `{{#}} total`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `15px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `-0.05em`,
                                          lineHeight: `1em`,
                                        },
                                        height: `100%`,
                                        id: `RguyxwQ7x`,
                                        layoutId: `RguyxwQ7x`,
                                        transform: `None`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                l(w, {
                                  breakpoint: S,
                                  overrides: {
                                    gZ49hBlr4: { y: (m?.y || 0) + 0 + 0 + 140 + 0 + 0 + 93.6 + 92 },
                                    vosz6XlN6: { y: (m?.y || 0) + 0 + 0 + 140 + 0 + 0 + 85.6 + 92 },
                                  },
                                  children: l(O, {
                                    height: 16,
                                    y: (m?.y || 0) + 0 + 0 + 128 + 0 + 0 + 93.6 + 92,
                                    children: l(D, {
                                      className: `framer-19ohcst-container`,
                                      nodeId: `BVzDdvawn`,
                                      scopeId: `CUJ6QeiFM`,
                                      children: l(z, {
                                        height: `100%`,
                                        id: `BVzDdvawn`,
                                        layoutId: `BVzDdvawn`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        l(`section`, {
                          className: `framer-sbfwkt`,
                          "data-framer-name": `Product Cards`,
                          children: l(O, {
                            children: l(D, {
                              className: `framer-1twn1yj-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              nodeId: `Z6vQxk8vA`,
                              scopeId: `CUJ6QeiFM`,
                              children: l(w, {
                                breakpoint: S,
                                overrides: {
                                  gZ49hBlr4: {
                                    layout: {
                                      align: `start`,
                                      alignH: `start`,
                                      background: `rgba(255, 255, 255, 0)`,
                                      columnCount: 2,
                                      columns: `fixed`,
                                      direction: `vertical`,
                                      distribute: `start`,
                                      gap: 32,
                                      gapY: 24,
                                      gridAlign: `center`,
                                      gridWidth: 156,
                                      maxColumns: 2,
                                      padding: 0,
                                      paddingBottom: 0,
                                      paddingLeft: 0,
                                      paddingPerSide: !1,
                                      paddingRight: 0,
                                      paddingTop: 0,
                                      radius: 0,
                                      radiusBottomLeft: 0,
                                      radiusBottomRight: 0,
                                      radiusPerSide: !1,
                                      radiusTopLeft: 0,
                                      radiusTopRight: 0,
                                      stackMinWidth: 200,
                                      type: `grid`,
                                      wrap: !1,
                                    },
                                  },
                                  vosz6XlN6: {
                                    displayMode: `Phone`,
                                    layout: {
                                      align: `start`,
                                      alignH: `start`,
                                      background: `rgba(255, 255, 255, 0)`,
                                      columnCount: 1,
                                      columns: `fixed`,
                                      direction: `vertical`,
                                      distribute: `start`,
                                      gap: 32,
                                      gapY: 24,
                                      gridAlign: `center`,
                                      gridWidth: 320,
                                      maxColumns: 4,
                                      padding: 0,
                                      paddingBottom: 0,
                                      paddingLeft: 0,
                                      paddingPerSide: !1,
                                      paddingRight: 0,
                                      paddingTop: 0,
                                      radius: 0,
                                      radiusBottomLeft: 0,
                                      radiusBottomRight: 0,
                                      radiusPerSide: !1,
                                      radiusTopLeft: 0,
                                      radiusTopRight: 0,
                                      stackMinWidth: 200,
                                      type: `grid`,
                                      wrap: !1,
                                    },
                                  },
                                },
                                children: l(R, {
                                  Collection: [
                                    l(g.div, {
                                      className: `framer-fmc2uk`,
                                      "data-framer-name": `Products (L)`,
                                      children: l(j, {
                                        children: l(X, {
                                          query: Y(),
                                          children: (e, t, n) =>
                                            l(p, {
                                              children: e?.map(
                                                (
                                                  {
                                                    bf_4Vezhu: e,
                                                    EKLxfLWe8: t,
                                                    FCIPIBRAL: n,
                                                    Gv7QQejjQ: r,
                                                    id: i,
                                                    qtxO0uchm: a,
                                                    SbAOTK1XD: o,
                                                  },
                                                  s
                                                ) => (
                                                  (t ??= ``),
                                                  (e ??= ``),
                                                  (n ??= ``),
                                                  (a ??= ``),
                                                  (o ??= ``),
                                                  l(
                                                    _,
                                                    {
                                                      id: `dxaO_UFOW-${i}`,
                                                      children: l(P.Provider, {
                                                        value: { EKLxfLWe8: t },
                                                        children: l(ie, {
                                                          href: {
                                                            pathVariables: { EKLxfLWe8: t },
                                                            webPageId: `unRZtzSgJ`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `UJcHssp75`,
                                                          scopeId: `CUJ6QeiFM`,
                                                          children: l(g.a, {
                                                            className: `framer-d6baeu framer-ds0bx8`,
                                                            children: l(O, {
                                                              height: 444,
                                                              width: `290.6667px`,
                                                              children: l(D, {
                                                                className: `framer-vfqmgq-container`,
                                                                inComponentSlot: !0,
                                                                nodeId: `BWBJGDJXe`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `CUJ6QeiFM`,
                                                                children: l(L, {
                                                                  a8hn4hdTB: `View Product`,
                                                                  gzQ2Nlesr: a,
                                                                  height: `100%`,
                                                                  hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                  id: `BWBJGDJXe`,
                                                                  layoutId: `BWBJGDJXe`,
                                                                  nNQ5K9K0l: n,
                                                                  pDK2H0NwC: q(r),
                                                                  rHB2d7ei8: o,
                                                                  style: { width: `100%` },
                                                                  UTuSJqO5M: e,
                                                                  variant: J(`gmSnlM4V7`),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    i
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  ],
                                  CustomInitialState: [],
                                  defaultSort: `relevance`,
                                  display: `All`,
                                  displayMode: `Desktop`,
                                  EmptyState: [
                                    l(Te, {
                                      __framer__animate: { transition: Le },
                                      __framer__animateOnce: !0,
                                      __framer__enter: Ie,
                                      __framer__styleAppearEffectEnabled: !0,
                                      __framer__threshold: 0.5,
                                      __perspectiveFX: !1,
                                      __targetOpacity: 1,
                                      className: `framer-1vw7sa2`,
                                      "data-framer-name": `empty-state`,
                                      children: l(g.div, {
                                        className: `framer-1cdqno3`,
                                        "data-framer-name": `content`,
                                        children: l(g.div, {
                                          className: `framer-1sia4am`,
                                          "data-framer-name": `headline`,
                                          children: l(te, {
                                            __fromCanvasComponent: !0,
                                            children: l(a, {
                                              children: l(`h6`, {
                                                dir: `auto`,
                                                style: {
                                                  "--framer-font-size": `20px`,
                                                  "--framer-letter-spacing": `-0.05em`,
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `rgb(3, 6, 7)`,
                                                },
                                                children: `No items found.`,
                                              }),
                                            }),
                                            className: `framer-o0yslh`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                  EmptyStatePhone: [],
                                  height: `100%`,
                                  id: `Z6vQxk8vA`,
                                  layout: {
                                    align: `start`,
                                    alignH: `start`,
                                    background: `rgba(255, 255, 255, 0)`,
                                    columnCount: 3,
                                    columns: `fixed`,
                                    direction: `vertical`,
                                    distribute: `start`,
                                    gap: 32,
                                    gapY: 24,
                                    gridAlign: `center`,
                                    gridWidth: 320,
                                    maxColumns: 4,
                                    padding: 0,
                                    paddingBottom: 0,
                                    paddingLeft: 0,
                                    paddingPerSide: !1,
                                    paddingRight: 0,
                                    paddingTop: 0,
                                    radius: 0,
                                    radiusBottomLeft: 0,
                                    radiusBottomRight: 0,
                                    radiusPerSide: !1,
                                    radiusTopLeft: 0,
                                    radiusTopRight: 0,
                                    stackMinWidth: 200,
                                    type: `grid`,
                                    wrap: !1,
                                  },
                                  layoutId: `Z6vQxk8vA`,
                                  Metafields: { include: !1 },
                                  pageType: `favorites`,
                                  Pagination: { enable: !1, items: 12, type: `load_more` },
                                  phoneInstance: [
                                    l(g.div, {
                                      className: `framer-1y4uvxm`,
                                      "data-framer-name": `Products (S)`,
                                      children: l(j, {
                                        children: l(X, {
                                          query: Z(),
                                          children: (e, t, n) =>
                                            l(p, {
                                              children: e?.map(
                                                (
                                                  {
                                                    bf_4Vezhu: e,
                                                    EKLxfLWe8: t,
                                                    FCIPIBRAL: n,
                                                    Gv7QQejjQ: r,
                                                    id: i,
                                                    qtxO0uchm: a,
                                                    SbAOTK1XD: o,
                                                  },
                                                  s
                                                ) => (
                                                  (t ??= ``),
                                                  (e ??= ``),
                                                  (n ??= ``),
                                                  (a ??= ``),
                                                  (o ??= ``),
                                                  l(
                                                    _,
                                                    {
                                                      id: `wJkwL1n9_-${i}`,
                                                      children: l(P.Provider, {
                                                        value: { EKLxfLWe8: t },
                                                        children: l(ie, {
                                                          href: {
                                                            pathVariables: { EKLxfLWe8: t },
                                                            webPageId: `unRZtzSgJ`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `eN6WkSe5W`,
                                                          scopeId: `CUJ6QeiFM`,
                                                          children: l(g.a, {
                                                            className: `framer-1bmpebd framer-ds0bx8`,
                                                            children: l(O, {
                                                              height: 444,
                                                              width: `320px`,
                                                              children: l(D, {
                                                                className: `framer-d1zftg-container`,
                                                                inComponentSlot: !0,
                                                                nodeId: `aNNo4SWQV`,
                                                                rendersWithMotion: !0,
                                                                scopeId: `CUJ6QeiFM`,
                                                                children: l(L, {
                                                                  a8hn4hdTB: `View Product`,
                                                                  gzQ2Nlesr: a,
                                                                  height: `100%`,
                                                                  hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                  id: `aNNo4SWQV`,
                                                                  layoutId: `aNNo4SWQV`,
                                                                  nNQ5K9K0l: n,
                                                                  pDK2H0NwC: q(r),
                                                                  rHB2d7ei8: o,
                                                                  style: {
                                                                    maxWidth: `100%`,
                                                                    width: `100%`,
                                                                  },
                                                                  UTuSJqO5M: e,
                                                                  variant: J(`F4L40vjcL`),
                                                                  width: `100%`,
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    i
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  ],
                                  Products: { show: `all` },
                                  Search: {
                                    enableSearch: !0,
                                    initialSearchState: `all`,
                                    Scope: {
                                      collection: !0,
                                      productTag: !0,
                                      productType: !0,
                                      title: !0,
                                      variants: !0,
                                      vendor: !0,
                                    },
                                  },
                                  style: { width: `100%` },
                                  value: ``,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    l(O, {
                      children: l(D, {
                        className: `framer-159u53e-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: A,
                        nodeId: `FArf2nbeS`,
                        scopeId: `CUJ6QeiFM`,
                        children: l(I, {
                          height: `100%`,
                          id: `FArf2nbeS`,
                          intensity: 10,
                          layoutId: `FArf2nbeS`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-oypac.framer-ds0bx8, .framer-oypac .framer-ds0bx8 { display: block; }`,
        `.framer-oypac.framer-zc38c2 { align-content: center; align-items: center; background-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-oypac .framer-1wrmj1t { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 128px 0px 120px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-oypac .framer-13lm32s { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-oypac .framer-143x45c { --border-bottom-width: 1px; --border-color: rgba(3, 6, 7, 0.08); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 40px 0px; position: relative; width: 100%; }`,
        `.framer-oypac .framer-67ql3u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-oypac .framer-1dk58mv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oypac .framer-dtyr5u-container { flex: none; height: auto; opacity: 0.54; position: relative; width: auto; }`,
        `.framer-oypac .framer-19ohcst-container, .framer-oypac .framer-159u53e-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-oypac .framer-sbfwkt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-oypac .framer-1twn1yj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-oypac .framer-fmc2uk { display: grid; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 896px; }`,
        `.framer-oypac .framer-d6baeu, .framer-oypac .framer-1bmpebd { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-oypac .framer-vfqmgq-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-oypac .framer-1y4uvxm { display: grid; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 320px; }`,
        `.framer-oypac .framer-d1zftg-container { flex: 1 0 0px; height: auto; max-width: 100%; position: relative; width: 1px; }`,
        `.framer-oypac .framer-1vw7sa2 { align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 896px; }`,
        `.framer-oypac .framer-1cdqno3, .framer-oypac .framer-1sia4am { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-oypac .framer-o0yslh { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...he,
        `.framer-oypac[data-border="true"]::after, .framer-oypac [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-oypac.framer-zc38c2 { width: 810px; } .framer-oypac .framer-1wrmj1t { gap: 40px; padding: 140px 0px 60px 0px; } .framer-oypac .framer-13lm32s, .framer-oypac .framer-dtyr5u-container { order: 0; } .framer-oypac .framer-19ohcst-container, .framer-oypac .framer-sbfwkt { order: 1; }}`,
        `@media (max-width: 809.98px) { .framer-oypac.framer-zc38c2 { width: 390px; } .framer-oypac .framer-1wrmj1t { gap: 40px; padding: 140px 0px 60px 0px; } .framer-oypac .framer-13lm32s { order: 0; padding: 0px 24px 0px 24px; } .framer-oypac .framer-143x45c { padding: 0px 0px 32px 0px; } .framer-oypac .framer-sbfwkt { gap: 0px; order: 1; padding: 0px 24px 0px 24px; } .framer-oypac .framer-1twn1yj-container { order: 0; }}`,
      ],
      `framer-oypac`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 1793.5, width: 1200 }),
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
              cssFamilyName: `Instrument Sans`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Instrument Sans`,
              url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-QfwmS0v3_7Y.woff2`,
              weight: `400`,
            },
          ],
        },
        ...we,
        ...U,
        ...W,
        ...Ee,
        ...Oe,
        ...T(pe),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = M.get(Y(), n),
          i = M.get(Z(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          x(z, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => x(L, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => x(L, {}, t)));
          })(),
        ]);
      },
    }),
    (Be = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerCUJ6QeiFM`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `1793.5`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"gZ49hBlr4":{"layout":["fixed","fixed"]},"vosz6XlN6":{"layout":["fixed","fixed"]}}}`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `false`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Be as __FramerMetadata__, $ as default, Ae as queryParamNames };
//# sourceMappingURL=KJJDCLa0pXv-J3cEIjLSrqeTOXRbE8XXnBtccJSOE5s.CeFsQ1vo.mjs.map
