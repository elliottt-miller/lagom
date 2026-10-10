import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  I as r,
  L as i,
  c as a,
  i as ee,
  j as te,
  l as o,
  o as s,
  s as c,
  u as l,
  v as u,
  x as ne,
} from "./react.ClsXD4bF.mjs";
import { n as re, r as ie, t as d, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  Ct as p,
  Et as ae,
  F as m,
  O as h,
  Ot as oe,
  S as g,
  St as _,
  U as v,
  W as y,
  Z as b,
  _t as x,
  a as S,
  dt as se,
  f as ce,
  ft as le,
  gt as ue,
  ht as de,
  i as C,
  j as w,
  m as fe,
  n as pe,
  pt as me,
  q as he,
  v as ge,
  vt as T,
  wt as _e,
  x as ve,
  yt as ye,
} from "./framer.CbUxDv78.mjs";
import { i as E, n as D, r as be, t as xe } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { i as Se, n as Ce, r as O, t as we } from "./tEGb3dIPL.DmfZkyjB.mjs";
import { i as k, n as A, r as Te, t as Ee } from "./wEX21mXRe.BeCcrLA7.mjs";
import { i as j, n as De, r as M, t as Oe } from "./nmmDHYVNF.EAEqT6nu.mjs";
import { n as N, t as P } from "./UG26Ix8eM.CJdBkykD.mjs";
import { i as ke, r as F } from "./av6kut8C7.DBFa7izQ.mjs";
import { n as I, t as L } from "./GwH1yWh8S.BRSRoa9c.mjs";
import R, { t as z } from "./yBV2SGumeLjYH5xDkfeoOmAawxV5XJaMYYFnlGCUIAw.CS8X3pKN.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, Ae, je, $, Me;
e(() => {
  (c(),
    b(),
    d(),
    t(),
    s(),
    j(),
    I(),
    N(),
    F(),
    De(),
    E(),
    Se(),
    k(),
    z(),
    (B = v(L)),
    (V = v(M)),
    (H = v(P)),
    (U = {
      Dpil6UFUm: `(min-width: 810px) and (max-width: 1199px)`,
      dZhIsupHZ: `(min-width: 1200px)`,
      zcz7dZSjy: `(max-width: 809px)`,
    }),
    (W = `framer-gZvYj`),
    (G = {
      Dpil6UFUm: `framer-v-1iteqke`,
      dZhIsupHZ: `framer-v-uiuja1`,
      zcz7dZSjy: `framer-v-1xk1oma`,
    }),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = (e, t) => `translate(-50%, -50%) ${t}`),
    (J = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Y = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
      let [r, i] = _({ blockDocumentScrolling: t });
      return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
    }),
    (X = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Z = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = T(e, t, `fgZNtby7u`);
      return n(p(r), i, a);
    }),
    (Q = ({ value: e }) =>
      x()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ae = { Desktop: `dZhIsupHZ`, Phone: `zcz7dZSjy`, Tablet: `Dpil6UFUm` }),
    (je = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ae[r.variant] ?? r.variant ?? `dZhIsupHZ`,
    })),
    ($ = oe(
      u(function (e, t) {
        let s = te(null),
          c = t ?? s,
          u = ne(),
          { activeLocale: d, setLocale: oe } = ye(),
          _ = le(),
          v = me(),
          [y] = p({
            from: { alias: `WAj2S0BJD`, data: ke, type: `Collection` },
            select: [
              { collection: `WAj2S0BJD`, name: `id`, type: `Identifier` },
              { collection: `WAj2S0BJD`, name: `EYPAj1SYi`, type: `Identifier` },
            ],
            where: he(v, `WAj2S0BJD`),
          }),
          b = (e) => {
            if (!y) throw new ge(`No data matches path variables: ${JSON.stringify(v)}`);
            return y[e];
          },
          {
            style: x,
            className: w,
            layoutId: T,
            variant: E,
            EYPAj1SYi: D = b(`EYPAj1SYi`) ?? ``,
            bYRDe0uABfgZNtby7u: be,
            VMONvNAcHfgZNtby7u: Se,
            idfgZNtby7u: Ce,
            id: O = b(`id`),
            ...k
          } = je(e);
        (r(() => {
          let e = R(y, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [y, d]),
          n(() => {
            let e = R(y, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [y, d]));
        let [A, Te] = ue(E, U, !1),
          { activeVariantCallback: j, delay: De } = se(void 0),
          N = ({ overlay: e, loadMore: t }) =>
            j(async (...t) => {
              e.toggle();
            }),
          F = ({ overlay: e, loadMore: t }) =>
            j(async (...e) => {
              t();
            }),
          I = m(W, xe, we, Ee),
          z = _e(`GlgyM401z`),
          B = ae();
        return (
          de({}),
          o(ce.Provider, {
            value: { primaryVariantId: `dZhIsupHZ`, variantClassNames: G },
            children: l(ie, {
              id: T ?? u,
              children: [
                o(Q, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                o(f.div, {
                  ...k,
                  className: m(I, `framer-uiuja1`, w),
                  ref: c,
                  style: { ...x },
                  children: o(`section`, {
                    className: `framer-1564r0h`,
                    "data-framer-name": `Component Section`,
                    children: o(`div`, {
                      className: `framer-1d1wa0m`,
                      "data-framer-name": `Container`,
                      id: z,
                      ref: B(z),
                      children: l(`div`, {
                        className: `framer-njtx7t`,
                        "data-framer-name": `Component Blocks`,
                        children: [
                          l(`div`, {
                            className: `framer-dg9hhy`,
                            "data-framer-name": `Left Content`,
                            children: [
                              o(h, {
                                __fromCanvasComponent: !0,
                                children: o(i, {
                                  children: o(`p`, {
                                    className: `framer-styles-preset-158a7l3`,
                                    "data-styles-preset": `qgNkKXaGR`,
                                    children: `Category`,
                                  }),
                                }),
                                className: `framer-1v1vu5k`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              o(g, {
                                breakpoint: A,
                                overrides: {
                                  Dpil6UFUm: {
                                    width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.2333, 280px) - 40px)`,
                                    y: (_?.y || 0) + 0 + 0 + 160 + 0 + 0 + 0 + 0 + 20 + 96,
                                  },
                                  zcz7dZSjy: {
                                    width: `calc(min(${_?.width || `100vw`}, 620px) - 80px)`,
                                    y: (_?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 0 + 0 + 20 + 96,
                                  },
                                },
                                children: o(C, {
                                  height: 340,
                                  width: `calc(min(max(min(${_?.width || `100vw`}, 1320px) - 40px, 1px) * 0.2333, 280px) - 48px)`,
                                  y: (_?.y || 0) + 0 + 0 + 192 + 0 + 0 + 0 + 24 + 100,
                                  children: o(S, {
                                    className: `framer-1vu43c0-container`,
                                    nodeId: `rMW7hNkxh`,
                                    scopeId: `WAj2S0BJD`,
                                    children: o(g, {
                                      breakpoint: A,
                                      overrides: {
                                        Dpil6UFUm: { variant: `KT82erVz3` },
                                        zcz7dZSjy: { variant: `KT82erVz3` },
                                      },
                                      children: o(L, {
                                        height: `100%`,
                                        id: `rMW7hNkxh`,
                                        JbPQSEOaQ: D,
                                        layoutId: `rMW7hNkxh`,
                                        style: { width: `100%` },
                                        variant: `jNBSdAOoN`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          l(`div`, {
                            className: `framer-1tksknh`,
                            "data-framer-name": `Component Block`,
                            children: [
                              o(`div`, {
                                className: `framer-1o87rk6`,
                                "data-framer-name": `Component Description`,
                                children: l(`div`, {
                                  className: `framer-i8n5r0`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    o(h, {
                                      __fromCanvasComponent: !0,
                                      children: o(i, {
                                        children: o(`h6`, {
                                          className: `framer-styles-preset-1aus3b5`,
                                          "data-styles-preset": `tEGb3dIPL`,
                                          children: `Components`,
                                        }),
                                      }),
                                      className: `framer-ztxhaf`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    o(h, {
                                      __fromCanvasComponent: !0,
                                      children: o(i, {
                                        children: o(`p`, {
                                          className: `framer-styles-preset-1pumtl1`,
                                          "data-styles-preset": `wEX21mXRe`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `Discover unlimited components for Framer creators.`,
                                        }),
                                      }),
                                      className: `framer-1jrqsys`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                              }),
                              o(`div`, {
                                className: `framer-vcf434`,
                                children: o(pe, {
                                  children: o(Z, {
                                    pageSize: 6,
                                    query: {
                                      from: { alias: `fgZNtby7u`, data: Oe, type: `Collection` },
                                      select: [
                                        {
                                          collection: `fgZNtby7u`,
                                          name: `bYRDe0uAB`,
                                          type: `Identifier`,
                                        },
                                        {
                                          collection: `fgZNtby7u`,
                                          name: `VMONvNAcH`,
                                          type: `Identifier`,
                                        },
                                        { collection: `fgZNtby7u`, name: `id`, type: `Identifier` },
                                      ],
                                      where: {
                                        left: { type: `LiteralValue`, value: O },
                                        operator: `in`,
                                        right: {
                                          collection: `fgZNtby7u`,
                                          name: `bjbhFPJ5V`,
                                          type: `Identifier`,
                                        },
                                        type: `BinaryOperation`,
                                      },
                                    },
                                    children: (e, t, n) =>
                                      l(a, {
                                        children: [
                                          e?.map(
                                            ({ bYRDe0uAB: e, id: t, VMONvNAcH: r }, te) => (
                                              (r ??= ``),
                                              o(
                                                ie,
                                                {
                                                  id: `fgZNtby7u-${t}`,
                                                  children: o(ve.Provider, {
                                                    value: { VMONvNAcH: r },
                                                    children: o(Y, {
                                                      children: (t) =>
                                                        o(a, {
                                                          children: o(g, {
                                                            breakpoint: A,
                                                            overrides: {
                                                              Dpil6UFUm: {
                                                                width: `max((max((min(${_?.width || `100vw`}, 990px) - 40px) * 0.7667 - 30px, 1px) - 20px) / 2, 10px)`,
                                                                y:
                                                                  (_?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  160 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  163.9992 +
                                                                  0 +
                                                                  0,
                                                              },
                                                              zcz7dZSjy: {
                                                                width: `max(min(${_?.width || `100vw`}, 620px) - 40px, 10px)`,
                                                                y:
                                                                  (_?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  506 +
                                                                  0 +
                                                                  155.9992 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: o(C, {
                                                              height: 364,
                                                              width: `max((max(max(min(${_?.width || `100vw`}, 1320px) - 40px, 1px) * 0.7667 - 32px, 1px) - 32px) / 3, 10px)`,
                                                              y:
                                                                (_?.y || 0) +
                                                                0 +
                                                                0 +
                                                                192 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                163.9992 +
                                                                0 +
                                                                0,
                                                              children: l(S, {
                                                                className: `framer-1qiplhq-container`,
                                                                id: `${r}-1qiplhq`,
                                                                nodeId: `WXtyNh1bx`,
                                                                scopeId: `WAj2S0BJD`,
                                                                children: [
                                                                  o(g, {
                                                                    breakpoint: A,
                                                                    overrides: {
                                                                      Dpil6UFUm: {
                                                                        variant: `ad6RB2tEW`,
                                                                      },
                                                                      zcz7dZSjy: {
                                                                        variant: `ad6RB2tEW`,
                                                                      },
                                                                    },
                                                                    children: o(M, {
                                                                      height: `100%`,
                                                                      id: `WXtyNh1bx`,
                                                                      Jx9wOxqM7: `Category`,
                                                                      layoutId: `WXtyNh1bx`,
                                                                      ltkllGRZX: N({
                                                                        loadMore: n,
                                                                        overlay: t,
                                                                      }),
                                                                      style: { width: `100%` },
                                                                      tEO9cy8VR: K(e),
                                                                      variant: `FpJXJ5VDV`,
                                                                      width: `100%`,
                                                                    }),
                                                                  }),
                                                                  o(re, {
                                                                    children:
                                                                      t.visible &&
                                                                      o(a, {
                                                                        children: ee(
                                                                          l(i, {
                                                                            children: [
                                                                              o(
                                                                                f.div,
                                                                                {
                                                                                  animate: {
                                                                                    opacity: 1,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.5, 0,
                                                                                        0.88, 0.77,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  className: m(
                                                                                    I,
                                                                                    `framer-1gcd5qz`
                                                                                  ),
                                                                                  "data-framer-portal-id": `${r}-1qiplhq`,
                                                                                  exit: {
                                                                                    opacity: 0,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.12, 0.23,
                                                                                        0.5, 1,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  initial: {
                                                                                    opacity: 0,
                                                                                  },
                                                                                  onTap: () =>
                                                                                    t.hide(),
                                                                                },
                                                                                `XsvQtFbFL`
                                                                              ),
                                                                              o(g, {
                                                                                breakpoint: A,
                                                                                overrides: {
                                                                                  Dpil6UFUm: {
                                                                                    background: {
                                                                                      alt: ``,
                                                                                      fit: `fill`,
                                                                                      pixelHeight: 2924,
                                                                                      pixelWidth: 3899,
                                                                                      sizes: `600px`,
                                                                                      ...K(e),
                                                                                      positionX: `center`,
                                                                                      positionY: `top`,
                                                                                    },
                                                                                  },
                                                                                  zcz7dZSjy: {
                                                                                    background: {
                                                                                      alt: ``,
                                                                                      fit: `fill`,
                                                                                      pixelHeight: 2924,
                                                                                      pixelWidth: 3899,
                                                                                      sizes: `90vw`,
                                                                                      ...K(e),
                                                                                      positionX: `center`,
                                                                                      positionY: `top`,
                                                                                    },
                                                                                  },
                                                                                },
                                                                                children: o(fe, {
                                                                                  background: {
                                                                                    alt: ``,
                                                                                    fit: `fill`,
                                                                                    pixelHeight: 2924,
                                                                                    pixelWidth: 3899,
                                                                                    sizes: `800px`,
                                                                                    ...K(e),
                                                                                    positionX: `center`,
                                                                                    positionY: `top`,
                                                                                  },
                                                                                  className: m(
                                                                                    I,
                                                                                    `framer-1r8knar`
                                                                                  ),
                                                                                  "data-framer-portal-id": `${r}-1qiplhq`,
                                                                                  transformTemplate:
                                                                                    q,
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          J()
                                                                        ),
                                                                      }),
                                                                  }),
                                                                ],
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
                                          o(`div`, {
                                            className: `framer-1byq88m`,
                                            "data-framer-name": `Button Wrap`,
                                            children: o(g, {
                                              breakpoint: A,
                                              overrides: {
                                                Dpil6UFUm: {
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    163.9992 +
                                                    0 +
                                                    384 +
                                                    8,
                                                },
                                                zcz7dZSjy: {
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    506 +
                                                    0 +
                                                    155.9992 +
                                                    0 +
                                                    384 +
                                                    8,
                                                },
                                              },
                                              children: o(C, {
                                                height: 48,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  163.9992 +
                                                  0 +
                                                  380 +
                                                  8,
                                                children: o(S, {
                                                  className: `framer-1w9tifo-container`,
                                                  nodeId: `Or6BANfie`,
                                                  scopeId: `WAj2S0BJD`,
                                                  children: o(g, {
                                                    breakpoint: A,
                                                    overrides: {
                                                      Dpil6UFUm: {
                                                        variant: X(
                                                          t,
                                                          {
                                                            disabled: `znBzTNqoD`,
                                                            loading: `LDWqWY6Ab`,
                                                          },
                                                          `ayfIpN8tZ`
                                                        ),
                                                      },
                                                      zcz7dZSjy: {
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
                                                    children: o(P, {
                                                      height: `100%`,
                                                      id: `Or6BANfie`,
                                                      layoutId: `Or6BANfie`,
                                                      variant: X(
                                                        t,
                                                        {
                                                          disabled: `znBzTNqoD`,
                                                          loading: `LDWqWY6Ab`,
                                                        },
                                                        `P9t0j5QoH`
                                                      ),
                                                      width: `100%`,
                                                      Wld3NDzSj: F({ loadMore: n }),
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
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-gZvYj.framer-194whe9, .framer-gZvYj .framer-194whe9 { display: block; }`,
        `.framer-gZvYj.framer-uiuja1 { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-gZvYj .framer-1564r0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-1d1wa0m { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-njtx7t { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gZvYj .framer-dg9hhy { align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 280px; overflow: visible; padding: 24px; position: sticky; top: 120px; width: 23%; z-index: 1; }`,
        `.framer-gZvYj .framer-1v1vu5k, .framer-gZvYj .framer-ztxhaf, .framer-gZvYj .framer-1jrqsys { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-gZvYj .framer-1vu43c0-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-1tksknh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gZvYj .framer-1o87rk6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-i8n5r0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-gZvYj .framer-vcf434 { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(10px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-1qiplhq-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-gZvYj.framer-1gcd5qz { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-gZvYj.framer-1r8knar { aspect-ratio: 1.839080459770115 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 435px); left: 50%; overflow: hidden; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 800px; z-index: 10; }`,
        `.framer-gZvYj .framer-1byq88m { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 8px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-gZvYj .framer-1w9tifo-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gZvYj.framer-uiuja1, .framer-gZvYj .framer-1564r0h, .framer-gZvYj .framer-1d1wa0m, .framer-gZvYj .framer-njtx7t, .framer-gZvYj .framer-dg9hhy, .framer-gZvYj .framer-1tksknh, .framer-gZvYj .framer-i8n5r0, .framer-gZvYj .framer-1byq88m { gap: 0px; } .framer-gZvYj.framer-uiuja1 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-gZvYj.framer-uiuja1 > :first-child, .framer-gZvYj .framer-1564r0h > :first-child, .framer-gZvYj .framer-dg9hhy > :first-child, .framer-gZvYj .framer-1tksknh > :first-child, .framer-gZvYj .framer-i8n5r0 > :first-child { margin-top: 0px; } .framer-gZvYj.framer-uiuja1 > :last-child, .framer-gZvYj .framer-1564r0h > :last-child, .framer-gZvYj .framer-dg9hhy > :last-child, .framer-gZvYj .framer-1tksknh > :last-child, .framer-gZvYj .framer-i8n5r0 > :last-child { margin-bottom: 0px; } .framer-gZvYj .framer-1564r0h > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-gZvYj .framer-1d1wa0m > * { margin: 0px; margin-left: calc(46px / 2); margin-right: calc(46px / 2); } .framer-gZvYj .framer-1d1wa0m > :first-child, .framer-gZvYj .framer-njtx7t > :first-child, .framer-gZvYj .framer-1byq88m > :first-child { margin-left: 0px; } .framer-gZvYj .framer-1d1wa0m > :last-child, .framer-gZvYj .framer-njtx7t > :last-child, .framer-gZvYj .framer-1byq88m > :last-child { margin-right: 0px; } .framer-gZvYj .framer-njtx7t > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-gZvYj .framer-dg9hhy > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-gZvYj .framer-1tksknh > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-gZvYj .framer-i8n5r0 > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-gZvYj .framer-1byq88m > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }`,
        ...D,
        ...Ce,
        ...A,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-gZvYj.framer-uiuja1 { width: 810px; } .framer-gZvYj .framer-1564r0h { padding: 160px 0px 80px 0px; } .framer-gZvYj .framer-1d1wa0m { flex-direction: column; gap: 30px; max-width: 990px; } .framer-gZvYj .framer-njtx7t { flex: none; gap: 30px; width: 100%; } .framer-gZvYj .framer-dg9hhy { gap: 16px; padding: 20px; top: 20px; } .framer-gZvYj .framer-1o87rk6 { align-content: flex-start; align-items: flex-start; gap: 16px; justify-content: center; } .framer-gZvYj .framer-vcf434 { gap: 20px; grid-template-columns: repeat(2, minmax(10px, 1fr)); } .framer-gZvYj.framer-1r8knar { width: 600px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gZvYj .framer-1d1wa0m, .framer-gZvYj .framer-njtx7t, .framer-gZvYj .framer-dg9hhy, .framer-gZvYj .framer-1o87rk6, .framer-gZvYj .framer-vcf434 { gap: 0px; } .framer-gZvYj .framer-1d1wa0m > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-gZvYj .framer-1d1wa0m > :first-child, .framer-gZvYj .framer-dg9hhy > :first-child { margin-top: 0px; } .framer-gZvYj .framer-1d1wa0m > :last-child, .framer-gZvYj .framer-dg9hhy > :last-child { margin-bottom: 0px; } .framer-gZvYj .framer-njtx7t > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-gZvYj .framer-njtx7t > :first-child, .framer-gZvYj .framer-1o87rk6 > :first-child { margin-left: 0px; } .framer-gZvYj .framer-njtx7t > :last-child, .framer-gZvYj .framer-1o87rk6 > :last-child { margin-right: 0px; } .framer-gZvYj .framer-dg9hhy > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-gZvYj .framer-1o87rk6 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-gZvYj .framer-vcf434 > *, .framer-gZvYj .framer-vcf434 > :first-child, .framer-gZvYj .framer-vcf434 > :last-child { margin: 0px; } }}`,
        `@media (max-width: 809px) { .framer-gZvYj.framer-uiuja1 { width: 390px; } .framer-gZvYj .framer-1564r0h { padding: 140px 0px 60px 0px; } .framer-gZvYj .framer-1d1wa0m { flex-direction: column; gap: 24px; max-width: 620px; } .framer-gZvYj .framer-njtx7t { flex: none; flex-direction: column; gap: 30px; width: 100%; } .framer-gZvYj .framer-dg9hhy { gap: 16px; max-width: unset; order: 0; padding: 20px; position: relative; top: unset; width: 100%; } .framer-gZvYj .framer-1tksknh { flex: none; gap: 16px; order: 1; width: 100%; } .framer-gZvYj .framer-1o87rk6 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: center; } .framer-gZvYj .framer-i8n5r0 { flex: none; width: 100%; } .framer-gZvYj .framer-vcf434 { gap: 20px; grid-template-columns: repeat(1, minmax(10px, 1fr)); } .framer-gZvYj.framer-1r8knar { height: var(--framer-aspect-ratio-supported, 109px); width: 90%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-gZvYj .framer-1d1wa0m, .framer-gZvYj .framer-njtx7t, .framer-gZvYj .framer-dg9hhy, .framer-gZvYj .framer-1tksknh, .framer-gZvYj .framer-1o87rk6, .framer-gZvYj .framer-vcf434 { gap: 0px; } .framer-gZvYj .framer-1d1wa0m > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-gZvYj .framer-1d1wa0m > :first-child, .framer-gZvYj .framer-njtx7t > :first-child, .framer-gZvYj .framer-dg9hhy > :first-child, .framer-gZvYj .framer-1tksknh > :first-child, .framer-gZvYj .framer-1o87rk6 > :first-child { margin-top: 0px; } .framer-gZvYj .framer-1d1wa0m > :last-child, .framer-gZvYj .framer-njtx7t > :last-child, .framer-gZvYj .framer-dg9hhy > :last-child, .framer-gZvYj .framer-1tksknh > :last-child, .framer-gZvYj .framer-1o87rk6 > :last-child { margin-bottom: 0px; } .framer-gZvYj .framer-njtx7t > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-gZvYj .framer-dg9hhy > *, .framer-gZvYj .framer-1tksknh > *, .framer-gZvYj .framer-1o87rk6 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-gZvYj .framer-vcf434 > *, .framer-gZvYj .framer-vcf434 > :first-child, .framer-gZvYj .framer-vcf434 > :last-child { margin: 0px; } }}`,
      ],
      `framer-gZvYj`
    )),
    ($.displayName = `Components Category`),
    ($.defaultProps = { height: 2576, width: 1200 }),
    w(
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
        ...B,
        ...V,
        ...H,
        ...y(be),
        ...y(O),
        ...y(Te),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Me = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerWAj2S0BJD`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Dpil6UFUm":{"layout":["fixed","auto"]},"zcz7dZSjy":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"GlgyM401z":{"pattern":":GlgyM401z","name":"container"}}`,
            framerResponsiveScreen: ``,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `2576`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Me as __FramerMetadata__, $ as default };
//# sourceMappingURL=_iH9tRFpGnszPCO9qZbFu-ZC4MXH6dRueuw5LLsXlxM.Buh9b6lw.mjs.map
