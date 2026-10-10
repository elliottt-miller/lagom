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
import { r as te, t as d, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  Ct as p,
  D as ne,
  Et as re,
  F as m,
  Mt as ie,
  O as h,
  Ot as g,
  S as _,
  Tt as ae,
  U as v,
  W as y,
  Z as b,
  _t as x,
  a as S,
  at as oe,
  dt as se,
  f as ce,
  ft as le,
  gt as ue,
  ht as de,
  i as C,
  j as fe,
  n as pe,
  vt as me,
  wt as he,
  x as ge,
  yt as _e,
} from "./framer.CbUxDv78.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as Se, n as Ce, r as w, t as we } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { n as T, t as E } from "./Search.vpU9eIwN.mjs";
import { n as Te, t as D } from "./Phosphor.B88JeVu1.mjs";
import { n as O, t as k } from "./iJsHjIJ9h.8QcW4sN_.mjs";
import { i as Ee, t as De } from "./WOc_qkaMo.DX5U9UcV.mjs";
import { n as A, t as j } from "./UG26Ix8eM.CJdBkykD.mjs";
import { n as M, t as N } from "./U6SshL4Hh.Dse_OzdZ.mjs";
import P, { t as F } from "./lwuLq3X96rAL8kTrsb_YpZD1kB5QZQJ9Ovqa1WEpJX0.xtSMCtsz.mjs";
var I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, Oe, ke, $, Ae;
e(() => {
  (c(),
    b(),
    d(),
    t(),
    T(),
    Te(),
    O(),
    M(),
    A(),
    Ee(),
    ve(),
    Se(),
    F(),
    (I = v(N)),
    (L = ie(f.div)),
    (R = v(E)),
    (z = v(D)),
    (B = v(k)),
    (V = v(j)),
    (H = {
      buNiHspen: `(max-width: 809px)`,
      QWbagcGZO: `(min-width: 810px) and (max-width: 1199px)`,
      vhxXfFmCQ: `(min-width: 1200px)`,
    }),
    (U = `framer-mzWcU`),
    (W = {
      buNiHspen: `framer-v-is8pqa`,
      QWbagcGZO: `framer-v-p05v41`,
      vhxXfFmCQ: `framer-v-9n8kqq`,
    }),
    (G = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (K = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -40,
      y: 0,
    }),
    (q = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.1, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (J = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 40,
      y: 0,
    }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Z = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = me(e, t, `hdFbHGuqP`);
      return n(p(r), i, a);
    }),
    (Q = ({ value: e }) =>
      x()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Oe = { Desktop: `vhxXfFmCQ`, Phone: `buNiHspen`, Tablet: `QWbagcGZO` }),
    (ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Oe[r.variant] ?? r.variant ?? `vhxXfFmCQ`,
    })),
    ($ = g(
      u(function (e, t) {
        let c = o(null),
          u = t ?? c,
          d = ee(),
          { activeLocale: p, setLocale: ie } = _e(),
          g = le(),
          {
            style: v,
            className: y,
            layoutId: b,
            variant: x,
            GCBaCslbQhdFbHGuqP: fe,
            seX5k3wijhdFbHGuqP: me,
            fQS7li1vghdFbHGuqP: ve,
            LDHExcaRthdFbHGuqP: ye,
            JT6vEPTLbhdFbHGuqP: be,
            Ra5emMuHkhdFbHGuqP: Se,
            idhdFbHGuqP: Ce,
            ...w
          } = ke(e);
        (r(() => {
          let e = P(void 0, p);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, p]),
          n(() => {
            let e = P(void 0, p);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, p]));
        let [T, Te] = ue(x, H, !1),
          { activeVariantCallback: O, delay: Ee } = se(void 0),
          A = ({ overlay: e, loadMore: t }) =>
            O(async (...e) => {
              t();
            }),
          M = m(U, we, xe),
          F = he(`jxlyODM_m`),
          I = re(),
          R = ae();
        return (
          de({}),
          s(ce.Provider, {
            value: { primaryVariantId: `vhxXfFmCQ`, variantClassNames: W },
            children: l(te, {
              id: b ?? d,
              children: [
                s(Q, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                s(f.div, {
                  ...w,
                  className: m(M, `framer-9n8kqq`, y),
                  ref: u,
                  style: { ...v },
                  children: s(`section`, {
                    className: `framer-14xj9fp`,
                    "data-framer-name": `Template Section`,
                    children: l(`div`, {
                      className: `framer-18ycvjq`,
                      "data-framer-name": `Container`,
                      id: F,
                      ref: I(F),
                      children: [
                        s(_, {
                          breakpoint: T,
                          overrides: {
                            buNiHspen: { animate: void 0, initial: void 0, optimized: void 0 },
                            QWbagcGZO: { animate: void 0, initial: void 0, optimized: void 0 },
                          },
                          children: l(L, {
                            animate: G,
                            className: `framer-vkx1t0`,
                            "data-framer-appear-id": `vkx1t0`,
                            "data-framer-name": `Left Content`,
                            initial: K,
                            optimized: !0,
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
                                className: `framer-70n8i2`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              s(_, {
                                breakpoint: T,
                                overrides: {
                                  buNiHspen: {
                                    width: `calc(min(${g?.width || `100vw`}, 620px) - 72px)`,
                                    y: (g?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 16 + 100,
                                  },
                                  QWbagcGZO: {
                                    width: `calc(min(max((min(${g?.width || `100vw`}, 990px) - 60px) / 2, 1px), 231px) - 32px)`,
                                    y: (g?.y || 0) + 0 + 0 + 160 + 0 + 0 + 16 + 100,
                                  },
                                },
                                children: s(C, {
                                  height: 232,
                                  width: `calc(min((min(${g?.width || `100vw`}, 1320px) - 40px) * 0.219, 280px) - 48px)`,
                                  y: (g?.y || 0) + 0 + 0 + 192 + 0 + 0 + 24 + 100,
                                  children: s(S, {
                                    className: `framer-19b82aq-container`,
                                    nodeId: `XeXp_gUHD`,
                                    scopeId: `xRn_kYZqM`,
                                    children: s(_, {
                                      breakpoint: T,
                                      overrides: {
                                        buNiHspen: { variant: `pvIW0rRZN` },
                                        QWbagcGZO: { variant: `pvIW0rRZN` },
                                      },
                                      children: s(N, {
                                        height: `100%`,
                                        id: `XeXp_gUHD`,
                                        layoutId: `XeXp_gUHD`,
                                        style: { width: `100%` },
                                        v9h57AbX4: `All Template`,
                                        variant: `Z9YOVMygp`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        s(_, {
                          breakpoint: T,
                          overrides: {
                            buNiHspen: { animate: void 0, initial: void 0, optimized: void 0 },
                            QWbagcGZO: { animate: void 0, initial: void 0, optimized: void 0 },
                          },
                          children: l(L, {
                            animate: q,
                            className: `framer-1h1b0py`,
                            "data-framer-appear-id": `1h1b0py`,
                            "data-framer-name": `Right Content Wrapper`,
                            initial: J,
                            optimized: !0,
                            children: [
                              l(`div`, {
                                className: `framer-egic85`,
                                "data-framer-name": `Search bar`,
                                children: [
                                  s(C, {
                                    children: s(S, {
                                      className: `framer-1l53nh1-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `dO0PwoOiW`,
                                      scopeId: `xRn_kYZqM`,
                                      children: s(E, {
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
                                        id: `dO0PwoOiW`,
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
                                        layoutId: `dO0PwoOiW`,
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
                                        urlScope: oe({ webPageId: `ZGbSr4l4n` }, R),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  l(`div`, {
                                    className: `framer-j1lft0`,
                                    "data-border": !0,
                                    "data-framer-name": `Input`,
                                    children: [
                                      s(C, {
                                        children: s(S, {
                                          className: `framer-1h8a9xy-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `nXMSIv2K3`,
                                          scopeId: `xRn_kYZqM`,
                                          children: s(D, {
                                            color: `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                            height: `100%`,
                                            iconSearch: `House`,
                                            iconSelection: `MagnifyingGlass`,
                                            id: `nXMSIv2K3`,
                                            layoutId: `nXMSIv2K3`,
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
                                        className: `framer-11yc3eb`,
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
                                className: `framer-1q7fj0d`,
                                "data-framer-name": `Right Content`,
                                children: s(pe, {
                                  children: s(Z, {
                                    pageSize: 6,
                                    query: {
                                      from: { alias: `hdFbHGuqP`, data: De, type: `Collection` },
                                      select: [
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `GCBaCslbQ`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `seX5k3wij`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `fQS7li1vg`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `LDHExcaRt`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `JT6vEPTLb`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `hdFbHGuqP`,
                                          name: `Ra5emMuHk`,
                                          type: `Identifier`,
                                        },
                                        { collection: `hdFbHGuqP`, name: `id`, type: `Identifier` },
                                      ],
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
                                                te,
                                                {
                                                  id: `hdFbHGuqP-${n}`,
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
                                                          breakpoint: T,
                                                          overrides: {
                                                            buNiHspen: {
                                                              width: `max(min(min(${g?.width || `100vw`}, 620px) - 40px, 954px), 10px)`,
                                                              y:
                                                                (g?.y || 0) +
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
                                                            QWbagcGZO: {
                                                              width: `max((min(max((min(${g?.width || `100vw`}, 990px) - 60px) / 2, 1px), 954px) - 16px) / 2, 10px)`,
                                                              y:
                                                                (g?.y || 0) +
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
                                                            width: `max((min(max((min(${g?.width || `100vw`}, 1320px) - 40px) * 0.781 - 32px, 1px), 954px) - 32px) / 3, 10px)`,
                                                            y:
                                                              (g?.y || 0) +
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
                                                              className: `framer-12o85ig-container`,
                                                              nodeId: `g01bKiiu8`,
                                                              scopeId: `xRn_kYZqM`,
                                                              children: s(_, {
                                                                breakpoint: T,
                                                                overrides: {
                                                                  buNiHspen: {
                                                                    soVmktXCF: n[2],
                                                                    variant: `BxbuELPAK`,
                                                                  },
                                                                  QWbagcGZO: {
                                                                    soVmktXCF: n[1],
                                                                    variant: `Rklwy7teW`,
                                                                  },
                                                                },
                                                                children: s(k, {
                                                                  FGgYTj69k: t,
                                                                  Gu09Z0S1k: i,
                                                                  height: `100%`,
                                                                  HlznOdTH4: Y(r),
                                                                  id: `g01bKiiu8`,
                                                                  layoutId: `g01bKiiu8`,
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
                                            className: `framer-fvduvh`,
                                            "data-framer-name": `Button Wrap`,
                                            children: s(_, {
                                              breakpoint: T,
                                              overrides: {
                                                buNiHspen: {
                                                  y:
                                                    (g?.y || 0) +
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
                                                QWbagcGZO: {
                                                  y:
                                                    (g?.y || 0) +
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
                                                  (g?.y || 0) +
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
                                                  className: `framer-yayblu-container`,
                                                  nodeId: `GWF4eA_KX`,
                                                  scopeId: `xRn_kYZqM`,
                                                  children: s(_, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      buNiHspen: {
                                                        variant: X(
                                                          t,
                                                          {
                                                            disabled: `znBzTNqoD`,
                                                            loading: `LDWqWY6Ab`,
                                                          },
                                                          `ayfIpN8tZ`
                                                        ),
                                                      },
                                                      QWbagcGZO: {
                                                        variant: X(
                                                          t,
                                                          {
                                                            disabled: `znBzTNqoD`,
                                                            loading: `LDWqWY6Ab`,
                                                          },
                                                          `ayfIpN8tZ`
                                                        ),
                                                      },
                                                    },
                                                    children: s(j, {
                                                      height: `100%`,
                                                      id: `GWF4eA_KX`,
                                                      layoutId: `GWF4eA_KX`,
                                                      variant: X(
                                                        t,
                                                        {
                                                          disabled: `znBzTNqoD`,
                                                          loading: `LDWqWY6Ab`,
                                                        },
                                                        `P9t0j5QoH`
                                                      ),
                                                      width: `100%`,
                                                      Wld3NDzSj: A({ loadMore: n }),
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
        `.framer-mzWcU.framer-1yojdir, .framer-mzWcU .framer-1yojdir { display: block; }`,
        `.framer-mzWcU.framer-9n8kqq { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-mzWcU .framer-14xj9fp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-18ycvjq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-vkx1t0 { align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 280px; overflow: visible; padding: 24px; position: sticky; top: 120px; width: 22%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-mzWcU .framer-70n8i2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mzWcU .framer-19b82aq-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-1h1b0py { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 954px; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-mzWcU .framer-egic85 { align-content: center; align-items: center; border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-1l53nh1-container { cursor: pointer; flex: none; height: 100%; left: 0px; opacity: 0; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-mzWcU .framer-j1lft0 { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 12px; border-bottom-right-radius: 12px; border-top-left-radius: 12px; border-top-right-radius: 12px; box-shadow: 8px 8px 72px 0px rgba(0, 0, 0, 0.08); display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 12px 24px 12px 24px; position: relative; width: 1px; }`,
        `.framer-mzWcU .framer-1h8a9xy-container { flex: none; height: 24px; position: relative; width: 24px; }`,
        `.framer-mzWcU .framer-11yc3eb { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mzWcU .framer-1q7fj0d { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(10px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-12o85ig-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-fvduvh { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mzWcU .framer-yayblu-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-mzWcU.framer-9n8kqq, .framer-mzWcU .framer-14xj9fp, .framer-mzWcU .framer-18ycvjq, .framer-mzWcU .framer-vkx1t0, .framer-mzWcU .framer-1h1b0py, .framer-mzWcU .framer-egic85, .framer-mzWcU .framer-j1lft0, .framer-mzWcU .framer-fvduvh { gap: 0px; } .framer-mzWcU.framer-9n8kqq > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-mzWcU.framer-9n8kqq > :first-child, .framer-mzWcU .framer-14xj9fp > :first-child, .framer-mzWcU .framer-vkx1t0 > :first-child, .framer-mzWcU .framer-1h1b0py > :first-child { margin-top: 0px; } .framer-mzWcU.framer-9n8kqq > :last-child, .framer-mzWcU .framer-14xj9fp > :last-child, .framer-mzWcU .framer-vkx1t0 > :last-child, .framer-mzWcU .framer-1h1b0py > :last-child { margin-bottom: 0px; } .framer-mzWcU .framer-14xj9fp > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-mzWcU .framer-18ycvjq > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-mzWcU .framer-18ycvjq > :first-child, .framer-mzWcU .framer-egic85 > :first-child, .framer-mzWcU .framer-j1lft0 > :first-child, .framer-mzWcU .framer-fvduvh > :first-child { margin-left: 0px; } .framer-mzWcU .framer-18ycvjq > :last-child, .framer-mzWcU .framer-egic85 > :last-child, .framer-mzWcU .framer-j1lft0 > :last-child, .framer-mzWcU .framer-fvduvh > :last-child { margin-right: 0px; } .framer-mzWcU .framer-vkx1t0 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-mzWcU .framer-1h1b0py > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-mzWcU .framer-egic85 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-mzWcU .framer-j1lft0 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-mzWcU .framer-fvduvh > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } }`,
        ...Ce,
        ...ye,
        `.framer-mzWcU[data-border="true"]::after, .framer-mzWcU [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-mzWcU.framer-9n8kqq { width: 810px; } .framer-mzWcU .framer-14xj9fp { padding: 160px 0px 80px 0px; } .framer-mzWcU .framer-18ycvjq { gap: 20px; max-width: 990px; } .framer-mzWcU .framer-vkx1t0 { flex: 1 0 0px; max-width: 231px; padding: 16px; top: 20px; width: 1px; will-change: unset; } .framer-mzWcU .framer-1h1b0py { will-change: unset; } .framer-mzWcU .framer-j1lft0 { padding: 10px 16px 10px 16px; } .framer-mzWcU .framer-1q7fj0d { grid-template-columns: repeat(2, minmax(10px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-mzWcU .framer-18ycvjq { gap: 0px; } .framer-mzWcU .framer-18ycvjq > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-mzWcU .framer-18ycvjq > :first-child { margin-left: 0px; } .framer-mzWcU .framer-18ycvjq > :last-child { margin-right: 0px; } }}`,
        `@media (max-width: 809px) { .framer-mzWcU.framer-9n8kqq { width: 390px; } .framer-mzWcU .framer-14xj9fp { padding: 140px 0px 60px 0px; } .framer-mzWcU .framer-18ycvjq { flex-direction: column; gap: 24px; max-width: 620px; } .framer-mzWcU .framer-vkx1t0 { max-width: unset; padding: 16px; position: relative; top: unset; width: 100%; will-change: unset; } .framer-mzWcU .framer-1h1b0py { flex: none; gap: 20px; width: 100%; will-change: unset; } .framer-mzWcU .framer-egic85 { border-bottom-left-radius: 30px; border-bottom-right-radius: 30px; border-top-left-radius: 30px; border-top-right-radius: 30px; } .framer-mzWcU .framer-j1lft0 { padding: 10px 16px 10px 16px; } .framer-mzWcU .framer-1h8a9xy-container { height: 18px; width: 18px; } .framer-mzWcU .framer-1q7fj0d { grid-template-columns: repeat(1, minmax(10px, 1fr)); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-mzWcU .framer-18ycvjq, .framer-mzWcU .framer-1h1b0py { gap: 0px; } .framer-mzWcU .framer-18ycvjq > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-mzWcU .framer-18ycvjq > :first-child, .framer-mzWcU .framer-1h1b0py > :first-child { margin-top: 0px; } .framer-mzWcU .framer-18ycvjq > :last-child, .framer-mzWcU .framer-1h1b0py > :last-child { margin-bottom: 0px; } .framer-mzWcU .framer-1h1b0py > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } }}`,
      ],
      `framer-mzWcU`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 2873, width: 1200 }),
    fe(
      $,
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
        ...I,
        ...R,
        ...z,
        ...B,
        ...V,
        ...y(w),
        ...y(be),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Ae = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerxRn_kYZqM`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"QWbagcGZO":{"layout":["fixed","auto"]},"buNiHspen":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: ``,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `2873`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerScrollSections: `{"jxlyODM_m":{"pattern":":jxlyODM_m","name":"container"}}`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ae as __FramerMetadata__, $ as default };
//# sourceMappingURL=XF1-xwSKl9WQjR3b_YIX2BVBUJqotccHqgrUUeYpXkY.DHfhJRpH.mjs.map
