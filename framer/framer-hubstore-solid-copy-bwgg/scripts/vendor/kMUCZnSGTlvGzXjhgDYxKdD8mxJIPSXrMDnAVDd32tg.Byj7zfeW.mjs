import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  I as r,
  L as i,
  c as a,
  j as o,
  l as s,
  s as c,
  u as l,
  v as u,
  x as ee,
} from "./react.ClsXD4bF.mjs";
import { r as d, t as f, w as te } from "./motion.ClyXVVeQ.mjs";
import {
  Ct as p,
  D as ne,
  Et as re,
  F as m,
  O as h,
  Ot as g,
  S as _,
  Tt as ie,
  U as v,
  W as y,
  Z as b,
  _t as x,
  a as S,
  at as ae,
  dt as oe,
  f as se,
  ft as ce,
  gt as le,
  ht as ue,
  i as C,
  j as w,
  n as de,
  pt as fe,
  q as pe,
  v as me,
  vt as T,
  wt as he,
  x as ge,
  yt as _e,
} from "./framer.CbUxDv78.mjs";
import { i as E, n as D, r as O, t as ve } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as k, n as ye, r as be, t as xe } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { n as Se, t as A } from "./Search.vpU9eIwN.mjs";
import { n as Ce, t as we } from "./Phosphor.B88JeVu1.mjs";
import { n as Te, t as j } from "./iJsHjIJ9h.8QcW4sN_.mjs";
import { i as Ee, t as De } from "./WOc_qkaMo.DX5U9UcV.mjs";
import { n as Oe, t as M } from "./UG26Ix8eM.CJdBkykD.mjs";
import { i as ke, r as N } from "./dZGFy1Qiv.CnyrEsDr.mjs";
import { n as P, t as F } from "./U6SshL4Hh.Dse_OzdZ.mjs";
import I, { t as L } from "./fxtudtT3B8R5hiQO5Uz0TVg34RT1iX44Tv_zwnif-ec.BC5O1yzi.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    b(),
    f(),
    t(),
    Se(),
    Ce(),
    Te(),
    P(),
    Oe(),
    N(),
    Ee(),
    E(),
    k(),
    L(),
    (R = v(F)),
    (z = v(A)),
    (B = v(we)),
    (V = v(j)),
    (H = v(M)),
    (U = {
      IlfGGVjNX: `(max-width: 809px)`,
      xY69lNk_V: `(min-width: 810px) and (max-width: 1199px)`,
      ZNte4eBaW: `(min-width: 1200px)`,
    }),
    (W = `framer-01wwN`),
    (G = {
      IlfGGVjNX: `framer-v-nyea7u`,
      xY69lNk_V: `framer-v-11r49er`,
      ZNte4eBaW: `framer-v-teuocw`,
    }),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (J = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = T(e, t, `FkD8_KhWK`);
      return n(p(r), i, a);
    }),
    (Y = ({ value: e }) =>
      x()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = { Desktop: `ZNte4eBaW`, Phone: `IlfGGVjNX`, Tablet: `xY69lNk_V` }),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: X[r.variant] ?? r.variant ?? `ZNte4eBaW`,
    })),
    (Q = g(
      u(function (e, t) {
        let c = o(null),
          u = t ?? c,
          f = ee(),
          { activeLocale: g, setLocale: v } = _e(),
          y = ce(),
          b = fe(),
          [x] = p({
            from: { alias: `bzyG_wjT2`, data: ke, type: `Collection` },
            select: [
              { collection: `bzyG_wjT2`, name: `id`, type: `Identifier` },
              { collection: `bzyG_wjT2`, name: `V16NXyNwY`, type: `Identifier` },
            ],
            where: pe(b, `bzyG_wjT2`),
          }),
          w = (e) => {
            if (!x) throw new me(`No data matches path variables: ${JSON.stringify(b)}`);
            return x[e];
          },
          {
            style: T,
            className: E,
            layoutId: D,
            variant: O,
            V16NXyNwY: k = w(`V16NXyNwY`) ?? ``,
            GCBaCslbQFkD8_KhWK: ye,
            seX5k3wijFkD8_KhWK: be,
            fQS7li1vgFkD8_KhWK: Se,
            LDHExcaRtFkD8_KhWK: Ce,
            JT6vEPTLbFkD8_KhWK: Te,
            Ra5emMuHkFkD8_KhWK: Ee,
            idFkD8_KhWK: Oe,
            id: N = w(`id`),
            ...P
          } = Z(e);
        (r(() => {
          let e = I(x, g);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [x, g]),
          n(() => {
            let e = I(x, g);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [x, g]));
        let [L, R] = le(O, U, !1),
          { activeVariantCallback: z, delay: B } = oe(void 0),
          V = ({ overlay: e, loadMore: t }) =>
            z(async (...e) => {
              t();
            }),
          H = m(W, xe, ve),
          X = he(`CsEC2uaeK`),
          Q = re(),
          $ = ie();
        return (
          ue({}),
          s(se.Provider, {
            value: { primaryVariantId: `ZNte4eBaW`, variantClassNames: G },
            children: l(d, {
              id: D ?? f,
              children: [
                s(Y, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                s(te.div, {
                  ...P,
                  className: m(H, `framer-teuocw`, E),
                  ref: u,
                  style: { ...T },
                  children: s(`section`, {
                    className: `framer-1e1x7p8`,
                    "data-framer-name": `Template Section`,
                    children: l(`div`, {
                      className: `framer-1v1wp4x`,
                      "data-framer-name": `Container`,
                      id: X,
                      ref: Q(X),
                      children: [
                        l(`div`, {
                          className: `framer-rl7n6x`,
                          "data-framer-name": `Left Content`,
                          children: [
                            s(h, {
                              __fromCanvasComponent: !0,
                              children: s(i, {
                                children: s(`p`, {
                                  className: `framer-styles-preset-158a7l3`,
                                  "data-styles-preset": `qgNkKXaGR`,
                                  children: `Category`,
                                }),
                              }),
                              className: `framer-1gfqk0u`,
                              "data-framer-name": `Text`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(_, {
                              breakpoint: L,
                              overrides: {
                                IlfGGVjNX: {
                                  width: `calc(min(${y?.width || `100vw`}, 620px) - 72px)`,
                                  y: (y?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 16 + 100,
                                },
                                xY69lNk_V: {
                                  width: `calc(min(max((min(${y?.width || `100vw`}, 990px) - 60px) / 2, 1px), 231px) - 32px)`,
                                  y: (y?.y || 0) + 0 + 0 + 160 + 0 + 0 + 16 + 100,
                                },
                              },
                              children: s(C, {
                                height: 232,
                                width: `calc(min((min(${y?.width || `100vw`}, 1320px) - 40px) * 0.219, 280px) - 48px)`,
                                y: (y?.y || 0) + 0 + 0 + 192 + 0 + 0 + 24 + 100,
                                children: s(S, {
                                  className: `framer-1tshsf4-container`,
                                  nodeId: `bUJBP0iUB`,
                                  scopeId: `bzyG_wjT2`,
                                  children: s(_, {
                                    breakpoint: L,
                                    overrides: {
                                      IlfGGVjNX: { variant: `pvIW0rRZN` },
                                      xY69lNk_V: { variant: `pvIW0rRZN` },
                                    },
                                    children: s(F, {
                                      height: `100%`,
                                      id: `bUJBP0iUB`,
                                      layoutId: `bUJBP0iUB`,
                                      style: { width: `100%` },
                                      v9h57AbX4: k,
                                      variant: `Z9YOVMygp`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          ],
                        }),
                        l(`div`, {
                          className: `framer-m2mcvf`,
                          "data-framer-name": `Right Content Wrapper`,
                          children: [
                            l(`div`, {
                              className: `framer-1ci58eh`,
                              "data-framer-name": `Search bar`,
                              children: [
                                s(C, {
                                  children: s(S, {
                                    className: `framer-mx5ufq-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `iQsD8Ihxo`,
                                    scopeId: `bzyG_wjT2`,
                                    children: s(A, {
                                      backdropOptions: {
                                        backgroundColor: `rgba(0, 0, 0, 0.8)`,
                                        transition: {
                                          damping: 60,
                                          delay: 0,
                                          mass: 1,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                        zIndex: 10,
                                      },
                                      height: `100%`,
                                      iconColor: `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                      iconSize: 24,
                                      iconType: `default`,
                                      id: `iQsD8Ihxo`,
                                      inputOptions: {
                                        clearButtonText: `Clear`,
                                        clearButtonType: `icon`,
                                        dividerType: `fullWidth`,
                                        iconOptions: {
                                          iconColor: `rgba(0, 0, 0, 0.45)`,
                                          iconSize: 18,
                                          iconType: `default`,
                                        },
                                        inputFont: {},
                                        placeholderOptions: {
                                          placeholderColor: `rgba(0, 0, 0, 0.4)`,
                                          placeholderText: `Search...`,
                                        },
                                        textColor: `rgb(51, 51, 51)`,
                                      },
                                      layoutId: `iQsD8Ihxo`,
                                      modalOptions: {
                                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                        borderRadius: 16,
                                        heightIsStatic: !0,
                                        heightTransition: {
                                          damping: 60,
                                          delay: 0,
                                          mass: 1,
                                          stiffness: 800,
                                          type: `spring`,
                                        },
                                        layoutType: `QuickMenu`,
                                        shadow: {
                                          blur: 40,
                                          color: `rgba(0, 0, 0, 0.2)`,
                                          spread: 0,
                                          x: 0,
                                          y: 20,
                                        },
                                        top: 0,
                                        width: 500,
                                      },
                                      resultOptions: {
                                        itemType: `fullWidth`,
                                        subtitleOptions: {
                                          subtitleColor: `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                          subtitleFont: {},
                                          subtitleType: `path`,
                                        },
                                        titleColor: `rgb(51, 51, 51)`,
                                        titleFont: {},
                                        titleType: `h1`,
                                      },
                                      style: { height: `100%`, width: `100%` },
                                      urlScope: ae({ webPageId: `ZGbSr4l4n` }, $),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                l(`div`, {
                                  className: `framer-17pwia0`,
                                  "data-border": !0,
                                  "data-framer-name": `Input`,
                                  children: [
                                    s(C, {
                                      children: s(S, {
                                        className: `framer-1u8my0z-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `GSNd1FxxN`,
                                        scopeId: `bzyG_wjT2`,
                                        children: s(we, {
                                          color: `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                          height: `100%`,
                                          iconSearch: `House`,
                                          iconSelection: `MagnifyingGlass`,
                                          id: `GSNd1FxxN`,
                                          layoutId: `GSNd1FxxN`,
                                          mirrored: !1,
                                          selectByList: !0,
                                          style: { height: `100%`, width: `100%` },
                                          weight: `regular`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                    s(h, {
                                      __fromCanvasComponent: !0,
                                      children: s(i, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `Search Template`,
                                        }),
                                      }),
                                      className: `framer-1rd4a4a`,
                                      "data-framer-name": `Placeholder Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            s(`div`, {
                              className: `framer-124ui2v`,
                              "data-framer-name": `Right Content`,
                              children: s(de, {
                                children: s(J, {
                                  pageSize: 6,
                                  query: {
                                    from: { alias: `FkD8_KhWK`, data: De, type: `Collection` },
                                    select: [
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `GCBaCslbQ`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `seX5k3wij`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `fQS7li1vg`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `LDHExcaRt`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `JT6vEPTLb`,
                                        type: `Identifier`,
                                      },
                                      {
                                        collection: `FkD8_KhWK`,
                                        name: `Ra5emMuHk`,
                                        type: `Identifier`,
                                      },
                                      { collection: `FkD8_KhWK`, name: `id`, type: `Identifier` },
                                    ],
                                    where: {
                                      left: { type: `LiteralValue`, value: N },
                                      operator: `in`,
                                      right: {
                                        collection: `FkD8_KhWK`,
                                        name: `LPeuNRBG8`,
                                        type: `Identifier`,
                                      },
                                      type: `BinaryOperation`,
                                    },
                                  },
                                  children: (e, t, n) =>
                                    l(a, {
                                      children: [
                                        e?.map(
                                          (
                                            {
                                              fQS7li1vg: e,
                                              GCBaCslbQ: t,
                                              id: n,
                                              JT6vEPTLb: r,
                                              LDHExcaRt: i,
                                              Ra5emMuHk: a,
                                              seX5k3wij: o,
                                            },
                                            c
                                          ) => (
                                            (t ??= ``),
                                            (o ??= ``),
                                            (e ??= ``),
                                            (i ??= ``),
                                            (a ??= ``),
                                            s(
                                              d,
                                              {
                                                id: `FkD8_KhWK-${n}`,
                                                children: s(ge.Provider, {
                                                  value: { Ra5emMuHk: a },
                                                  children: s(ne, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { Ra5emMuHk: a },
                                                          webPageId: `ZGbSr4l4n`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { Ra5emMuHk: a },
                                                          webPageId: `ZGbSr4l4n`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { Ra5emMuHk: a },
                                                          webPageId: `ZGbSr4l4n`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (n) =>
                                                      s(_, {
                                                        breakpoint: L,
                                                        overrides: {
                                                          IlfGGVjNX: {
                                                            width: `max(min(min(${y?.width || `100vw`}, 620px) - 40px, 954px), 10px)`,
                                                            y:
                                                              (y?.y || 0) +
                                                              0 +
                                                              0 +
                                                              140 +
                                                              0 +
                                                              0 +
                                                              388 +
                                                              0 +
                                                              200 +
                                                              0 +
                                                              0,
                                                          },
                                                          xY69lNk_V: {
                                                            width: `max((min(max((min(${y?.width || `100vw`}, 990px) - 60px) / 2, 1px), 954px) - 16px) / 2, 10px)`,
                                                            y:
                                                              (y?.y || 0) +
                                                              0 +
                                                              0 +
                                                              160 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              204 +
                                                              0 +
                                                              0,
                                                          },
                                                        },
                                                        children: s(C, {
                                                          height: 388,
                                                          width: `max((min(max((min(${y?.width || `100vw`}, 1320px) - 40px) * 0.781 - 32px, 1px), 954px) - 32px) / 3, 10px)`,
                                                          y:
                                                            (y?.y || 0) +
                                                            0 +
                                                            0 +
                                                            192 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            208 +
                                                            0 +
                                                            0,
                                                          children: s(S, {
                                                            className: `framer-3w44vb-container`,
                                                            nodeId: `P5PN5M0vd`,
                                                            scopeId: `bzyG_wjT2`,
                                                            children: s(_, {
                                                              breakpoint: L,
                                                              overrides: {
                                                                IlfGGVjNX: {
                                                                  soVmktXCF: n[2],
                                                                  variant: `BxbuELPAK`,
                                                                },
                                                                xY69lNk_V: {
                                                                  soVmktXCF: n[1],
                                                                  variant: `Rklwy7teW`,
                                                                },
                                                              },
                                                              children: s(j, {
                                                                FGgYTj69k: t,
                                                                Gu09Z0S1k: i,
                                                                height: `100%`,
                                                                HlznOdTH4: K(r),
                                                                id: `P5PN5M0vd`,
                                                                layoutId: `P5PN5M0vd`,
                                                                soVmktXCF: n[0],
                                                                style: { width: `100%` },
                                                                ttLfm2RuI: e,
                                                                variant: `cIxzDVZpn`,
                                                                width: `100%`,
                                                                YUZng7tmN: o,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                }),
                                              },
                                              n
                                            )
                                          )
                                        ),
                                        s(`div`, {
                                          className: `framer-11zwwfp`,
                                          "data-framer-name": `Button Wrap`,
                                          children: s(_, {
                                            breakpoint: L,
                                            overrides: {
                                              IlfGGVjNX: {
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  388 +
                                                  0 +
                                                  200 +
                                                  0 +
                                                  404 +
                                                  0,
                                              },
                                              xY69lNk_V: {
                                                y:
                                                  (y?.y || 0) +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  204 +
                                                  0 +
                                                  404 +
                                                  0,
                                              },
                                            },
                                            children: s(C, {
                                              height: 48,
                                              y:
                                                (y?.y || 0) +
                                                0 +
                                                0 +
                                                192 +
                                                0 +
                                                0 +
                                                0 +
                                                208 +
                                                0 +
                                                404 +
                                                0,
                                              children: s(S, {
                                                className: `framer-1igy40m-container`,
                                                nodeId: `zcZ7kRhSs`,
                                                scopeId: `bzyG_wjT2`,
                                                children: s(_, {
                                                  breakpoint: L,
                                                  overrides: {
                                                    IlfGGVjNX: {
                                                      variant: q(
                                                        t,
                                                        {
                                                          disabled: `znBzTNqoD`,
                                                          loading: `LDWqWY6Ab`,
                                                        },
                                                        `ayfIpN8tZ`
                                                      ),
                                                    },
                                                    xY69lNk_V: {
                                                      variant: q(
                                                        t,
                                                        {
                                                          disabled: `znBzTNqoD`,
                                                          loading: `LDWqWY6Ab`,
                                                        },
                                                        `ayfIpN8tZ`
                                                      ),
                                                    },
                                                  },
                                                  children: s(M, {
                                                    height: `100%`,
                                                    id: `zcZ7kRhSs`,
                                                    layoutId: `zcZ7kRhSs`,
                                                    variant: q(
                                                      t,
                                                      {
                                                        disabled: `znBzTNqoD`,
                                                        loading: `LDWqWY6Ab`,
                                                      },
                                                      `P9t0j5QoH`
                                                    ),
                                                    width: `100%`,
                                                    Wld3NDzSj: V({ loadMore: n }),
                                                  }),
                                                }),
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
                      ],
                    }),
                  }),
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-01wwN.framer-fziu2g, .framer-01wwN .framer-fziu2g { display: block; }`,
        `.framer-01wwN.framer-teuocw { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-01wwN .framer-1e1x7p8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-1v1wp4x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-rl7n6x { align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 280px; overflow: visible; padding: 24px; position: sticky; top: 120px; width: 22%; z-index: 1; }`,
        `.framer-01wwN .framer-1gfqk0u { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-01wwN .framer-1tshsf4-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-m2mcvf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 954px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-01wwN .framer-1ci58eh { align-content: center; align-items: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-mx5ufq-container { cursor: pointer; flex: none; height: 100%; left: 0px; opacity: 0; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-01wwN .framer-17pwia0 { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.08); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 24px 12px 24px; position: relative; width: 1px; }`,
        `.framer-01wwN .framer-1u8my0z-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-01wwN .framer-1rd4a4a { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-01wwN .framer-124ui2v { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(10px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-3w44vb-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-11zwwfp { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-01wwN .framer-1igy40m-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-01wwN.framer-teuocw, .framer-01wwN .framer-1e1x7p8, .framer-01wwN .framer-1v1wp4x, .framer-01wwN .framer-rl7n6x, .framer-01wwN .framer-m2mcvf, .framer-01wwN .framer-1ci58eh, .framer-01wwN .framer-17pwia0, .framer-01wwN .framer-11zwwfp { gap: 0px; } .framer-01wwN.framer-teuocw > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-01wwN.framer-teuocw > :first-child, .framer-01wwN .framer-1e1x7p8 > :first-child, .framer-01wwN .framer-rl7n6x > :first-child, .framer-01wwN .framer-m2mcvf > :first-child { margin-top: 0px; } .framer-01wwN.framer-teuocw > :last-child, .framer-01wwN .framer-1e1x7p8 > :last-child, .framer-01wwN .framer-rl7n6x > :last-child, .framer-01wwN .framer-m2mcvf > :last-child { margin-bottom: 0px; } .framer-01wwN .framer-1e1x7p8 > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-01wwN .framer-1v1wp4x > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-01wwN .framer-1v1wp4x > :first-child, .framer-01wwN .framer-1ci58eh > :first-child, .framer-01wwN .framer-17pwia0 > :first-child, .framer-01wwN .framer-11zwwfp > :first-child { margin-left: 0px; } .framer-01wwN .framer-1v1wp4x > :last-child, .framer-01wwN .framer-1ci58eh > :last-child, .framer-01wwN .framer-17pwia0 > :last-child, .framer-01wwN .framer-11zwwfp > :last-child { margin-right: 0px; } .framer-01wwN .framer-rl7n6x > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-01wwN .framer-m2mcvf > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-01wwN .framer-1ci58eh > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-01wwN .framer-17pwia0 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-01wwN .framer-11zwwfp > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } }`,
        ...ye,
        ...D,
        `.framer-01wwN[data-border="true"]::after, .framer-01wwN [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-01wwN.framer-teuocw { width: 810px; } .framer-01wwN .framer-1e1x7p8 { padding: 160px 0px 80px 0px; } .framer-01wwN .framer-1v1wp4x { gap: 20px; max-width: 990px; } .framer-01wwN .framer-rl7n6x { flex: 1 0 0px; max-width: 231px; padding: 16px; top: 20px; width: 1px; } .framer-01wwN .framer-17pwia0 { padding: 10px 16px 10px 16px; } .framer-01wwN .framer-124ui2v { grid-template-columns: repeat(2, minmax(10px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-01wwN .framer-1v1wp4x { gap: 0px; } .framer-01wwN .framer-1v1wp4x > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-01wwN .framer-1v1wp4x > :first-child { margin-left: 0px; } .framer-01wwN .framer-1v1wp4x > :last-child { margin-right: 0px; } }}`,
        `@media (max-width: 809px) { .framer-01wwN.framer-teuocw { width: 390px; } .framer-01wwN .framer-1e1x7p8 { padding: 140px 0px 60px 0px; } .framer-01wwN .framer-1v1wp4x { flex-direction: column; gap: 24px; max-width: 620px; } .framer-01wwN .framer-rl7n6x { max-width: unset; padding: 16px; position: relative; top: unset; width: 100%; } .framer-01wwN .framer-m2mcvf { flex: none; gap: 20px; width: 100%; } .framer-01wwN .framer-1ci58eh { border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; } .framer-01wwN .framer-17pwia0 { padding: 10px 16px 10px 16px; } .framer-01wwN .framer-1u8my0z-container { height: 18px; width: 18px; } .framer-01wwN .framer-124ui2v { grid-template-columns: repeat(1, minmax(10px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-01wwN .framer-1v1wp4x, .framer-01wwN .framer-m2mcvf { gap: 0px; } .framer-01wwN .framer-1v1wp4x > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-01wwN .framer-1v1wp4x > :first-child, .framer-01wwN .framer-m2mcvf > :first-child { margin-top: 0px; } .framer-01wwN .framer-1v1wp4x > :last-child, .framer-01wwN .framer-m2mcvf > :last-child { margin-bottom: 0px; } .framer-01wwN .framer-m2mcvf > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}`,
      ],
      `framer-01wwN`
    )),
    (Q.displayName = `Template Category`),
    (Q.defaultProps = { height: 2873, width: 1200 }),
    w(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
          ],
        },
        ...R,
        ...z,
        ...B,
        ...V,
        ...H,
        ...y(be),
        ...y(O),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerbzyG_wjT2`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `2873`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: ``,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"xY69lNk_V":{"layout":["fixed","auto"]},"IlfGGVjNX":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"CsEC2uaeK":{"pattern":":CsEC2uaeK","name":"container"}}`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=kMUCZnSGTlvGzXjhgDYxKdD8mxJIPSXrMDnAVDd32tg.Byj7zfeW.mjs.map
