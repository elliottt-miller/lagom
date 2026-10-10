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
  Ct as ae,
  Et as oe,
  F as p,
  Mt as m,
  O as h,
  Ot as g,
  S as _,
  St as v,
  U as y,
  W as b,
  Z as se,
  _t as ce,
  a as x,
  dt as le,
  f as ue,
  ft as de,
  gt as fe,
  ht as pe,
  i as S,
  j as me,
  m as he,
  n as ge,
  vt as C,
  wt as _e,
  x as ve,
  yt as ye,
} from "./framer.CbUxDv78.mjs";
import { i as w, n as be, r as T, t as xe } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { i as Se, n as E, r as D, t as Ce } from "./tEGb3dIPL.DmfZkyjB.mjs";
import { i as O, n as k, r as A, t as we } from "./wEX21mXRe.BeCcrLA7.mjs";
import { i as Te, n as Ee, r as j, t as De } from "./nmmDHYVNF.EAEqT6nu.mjs";
import { n as Oe, t as M } from "./UG26Ix8eM.CJdBkykD.mjs";
import { n as ke, t as N } from "./GwH1yWh8S.BRSRoa9c.mjs";
import P, { t as Ae } from "./l0JadIQl117O_9GcYtaqM5GK1Ox02Vf9pa9E6Dx5o6A.D95C4WEd.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, je, Me, Q, $;
e(() => {
  (c(),
    se(),
    d(),
    t(),
    s(),
    Te(),
    ke(),
    Oe(),
    Ee(),
    w(),
    Se(),
    O(),
    Ae(),
    (F = y(N)),
    (I = m(f.div)),
    (L = y(j)),
    (R = y(M)),
    (z = {
      gwXW7wA48: `(min-width: 1200px)`,
      ncN8VMLzh: `(min-width: 810px) and (max-width: 1199px)`,
      Yph95GriE: `(max-width: 809px)`,
    }),
    (B = `framer-dx6dr`),
    (V = {
      gwXW7wA48: `framer-v-eunlru`,
      ncN8VMLzh: `framer-v-o69uwj`,
      Yph95GriE: `framer-v-1do89ki`,
    }),
    (H = {
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
    (U = {
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
    (W = {
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
    (G = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (K = (e, t) => `translate(-50%, -50%) ${t}`),
    (q = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (J = ({ children: e, blockDocumentScrolling: t, enabled: n = !0 }) => {
      let [r, i] = v({ blockDocumentScrolling: t });
      return e({ hide: () => i(!1), show: () => i(!0), toggle: () => i(!r), visible: n && r });
    }),
    (Y = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (X = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = C(e, t, `cPlF1gvxR`);
      return n(ae(r), i, a);
    }),
    (Z = ({ value: e }) =>
      ce()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (je = { Desktop: `gwXW7wA48`, Phone: `Yph95GriE`, Tablet: `ncN8VMLzh` }),
    (Me = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: je[r.variant] ?? r.variant ?? `gwXW7wA48`,
    })),
    (Q = g(
      u(function (e, t) {
        let s = te(null),
          c = t ?? s,
          u = ne(),
          { activeLocale: d, setLocale: ae } = ye(),
          m = de(),
          {
            style: g,
            className: v,
            layoutId: y,
            variant: b,
            bYRDe0uABcPlF1gvxR: se,
            VMONvNAcHcPlF1gvxR: ce,
            idcPlF1gvxR: me,
            ...C
          } = Me(e);
        (r(() => {
          let e = P(void 0, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, d]),
          n(() => {
            let e = P(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [w, be] = fe(b, z, !1),
          { activeVariantCallback: T, delay: Se } = le(void 0),
          E = ({ overlay: e, loadMore: t }) =>
            T(async (...t) => {
              e.toggle();
            }),
          D = ({ overlay: e, loadMore: t }) =>
            T(async (...e) => {
              t();
            }),
          O = p(B, xe, Ce, we),
          k = _e(`Y518g0rJZ`),
          A = oe();
        return (
          pe({}),
          o(ue.Provider, {
            value: { primaryVariantId: `gwXW7wA48`, variantClassNames: V },
            children: l(ie, {
              id: y ?? u,
              children: [
                o(Z, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                o(f.div, {
                  ...C,
                  className: p(O, `framer-eunlru`, v),
                  ref: c,
                  style: { ...g },
                  children: o(`section`, {
                    className: `framer-o1ud5k`,
                    "data-framer-name": `Component Section`,
                    children: o(`div`, {
                      className: `framer-w6ux2r`,
                      "data-framer-name": `Container`,
                      id: k,
                      ref: A(k),
                      children: l(`div`, {
                        className: `framer-1kk77ve`,
                        "data-framer-name": `Component Blocks`,
                        children: [
                          o(_, {
                            breakpoint: w,
                            overrides: {
                              Yph95GriE: { animate: void 0, initial: void 0, optimized: void 0 },
                            },
                            children: l(I, {
                              animate: H,
                              className: `framer-196x8n6`,
                              "data-framer-appear-id": `196x8n6`,
                              "data-framer-name": `Left Content`,
                              initial: U,
                              optimized: !0,
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
                                  className: `framer-1680qrt`,
                                  "data-framer-name": `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                o(_, {
                                  breakpoint: w,
                                  overrides: {
                                    ncN8VMLzh: {
                                      width: `calc(min((min(${m?.width || `100vw`}, 990px) - 40px) * 0.2333, 280px) - 40px)`,
                                      y: (m?.y || 0) + 0 + 0 + 160 + 0 + 0 + 0 + 0 + 20 + 96,
                                    },
                                    Yph95GriE: {
                                      width: `calc(min(${m?.width || `100vw`}, 620px) - 80px)`,
                                      y: (m?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 0 + 0 + 20 + 96,
                                    },
                                  },
                                  children: o(S, {
                                    height: 340,
                                    width: `calc(min(max(min(${m?.width || `100vw`}, 1320px) - 40px, 1px) * 0.2333, 280px) - 48px)`,
                                    y: (m?.y || 0) + 0 + 0 + 192 + 0 + 0 + 0 + 24 + 100,
                                    children: o(x, {
                                      className: `framer-1c8zj44-container`,
                                      nodeId: `JbUsKhjCK`,
                                      scopeId: `ltFPwgaY6`,
                                      children: o(_, {
                                        breakpoint: w,
                                        overrides: {
                                          ncN8VMLzh: { variant: `KT82erVz3` },
                                          Yph95GriE: { variant: `KT82erVz3` },
                                        },
                                        children: o(N, {
                                          height: `100%`,
                                          id: `JbUsKhjCK`,
                                          JbPQSEOaQ: `All Component`,
                                          layoutId: `JbUsKhjCK`,
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
                          }),
                          o(_, {
                            breakpoint: w,
                            overrides: {
                              Yph95GriE: { animate: void 0, initial: void 0, optimized: void 0 },
                            },
                            children: l(I, {
                              animate: H,
                              className: `framer-bz97q9`,
                              "data-framer-appear-id": `bz97q9`,
                              "data-framer-name": `Component Block`,
                              initial: W,
                              optimized: !0,
                              children: [
                                o(`div`, {
                                  className: `framer-o9xt72`,
                                  "data-framer-name": `Component Description`,
                                  children: l(`div`, {
                                    className: `framer-zyh77i`,
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
                                        className: `framer-1nfjxp7`,
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
                                        className: `framer-1ibty9`,
                                        "data-framer-name": `Text`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    ],
                                  }),
                                }),
                                o(`div`, {
                                  className: `framer-1hypoo7`,
                                  children: o(ge, {
                                    children: o(X, {
                                      pageSize: 6,
                                      query: {
                                        from: { alias: `cPlF1gvxR`, data: De, type: `Collection` },
                                        select: [
                                          {
                                            collection: `cPlF1gvxR`,
                                            name: `bYRDe0uAB`,
                                            type: `Identifier`,
                                          },
                                          {
                                            collection: `cPlF1gvxR`,
                                            name: `VMONvNAcH`,
                                            type: `Identifier`,
                                          },
                                          {
                                            collection: `cPlF1gvxR`,
                                            name: `id`,
                                            type: `Identifier`,
                                          },
                                        ],
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
                                                    id: `cPlF1gvxR-${t}`,
                                                    children: o(ve.Provider, {
                                                      value: { VMONvNAcH: r },
                                                      children: o(J, {
                                                        children: (t) =>
                                                          o(a, {
                                                            children: o(_, {
                                                              breakpoint: w,
                                                              overrides: {
                                                                ncN8VMLzh: {
                                                                  width: `max((max((min(${m?.width || `100vw`}, 990px) - 40px) * 0.7667 - 30px, 1px) - 20px) / 2, 10px)`,
                                                                  y:
                                                                    (m?.y || 0) +
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
                                                                Yph95GriE: {
                                                                  width: `max(min(${m?.width || `100vw`}, 620px) - 40px, 10px)`,
                                                                  y:
                                                                    (m?.y || 0) +
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
                                                              children: o(S, {
                                                                height: 364,
                                                                width: `max((max(max(min(${m?.width || `100vw`}, 1320px) - 40px, 1px) * 0.7667 - 32px, 1px) - 32px) / 3, 10px)`,
                                                                y:
                                                                  (m?.y || 0) +
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
                                                                children: l(x, {
                                                                  className: `framer-xlk4kk-container`,
                                                                  id: `${r}-xlk4kk`,
                                                                  nodeId: `XP6_GP1Eu`,
                                                                  scopeId: `ltFPwgaY6`,
                                                                  children: [
                                                                    o(_, {
                                                                      breakpoint: w,
                                                                      overrides: {
                                                                        ncN8VMLzh: {
                                                                          variant: `ad6RB2tEW`,
                                                                        },
                                                                        Yph95GriE: {
                                                                          variant: `ad6RB2tEW`,
                                                                        },
                                                                      },
                                                                      children: o(j, {
                                                                        height: `100%`,
                                                                        id: `XP6_GP1Eu`,
                                                                        Jx9wOxqM7: `Category`,
                                                                        layoutId: `XP6_GP1Eu`,
                                                                        ltkllGRZX: E({
                                                                          loadMore: n,
                                                                          overlay: t,
                                                                        }),
                                                                        style: { width: `100%` },
                                                                        tEO9cy8VR: G(e),
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
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: p(
                                                                                      O,
                                                                                      `framer-13nole6`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${r}-xlk4kk`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
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
                                                                                  `cBW8IBS9B`
                                                                                ),
                                                                                o(_, {
                                                                                  breakpoint: w,
                                                                                  overrides: {
                                                                                    ncN8VMLzh: {
                                                                                      background: {
                                                                                        alt: ``,
                                                                                        fit: `fill`,
                                                                                        pixelHeight: 2924,
                                                                                        pixelWidth: 3899,
                                                                                        sizes: `600px`,
                                                                                        ...G(e),
                                                                                        positionX: `center`,
                                                                                        positionY: `top`,
                                                                                      },
                                                                                    },
                                                                                    Yph95GriE: {
                                                                                      background: {
                                                                                        alt: ``,
                                                                                        fit: `fill`,
                                                                                        pixelHeight: 2924,
                                                                                        pixelWidth: 3899,
                                                                                        sizes: `90vw`,
                                                                                        ...G(e),
                                                                                        positionX: `center`,
                                                                                        positionY: `top`,
                                                                                      },
                                                                                    },
                                                                                  },
                                                                                  children: o(he, {
                                                                                    background: {
                                                                                      alt: ``,
                                                                                      fit: `fill`,
                                                                                      pixelHeight: 2924,
                                                                                      pixelWidth: 3899,
                                                                                      sizes: `800px`,
                                                                                      ...G(e),
                                                                                      positionX: `center`,
                                                                                      positionY: `top`,
                                                                                    },
                                                                                    className: p(
                                                                                      O,
                                                                                      `framer-1unkmtw`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${r}-xlk4kk`,
                                                                                    transformTemplate:
                                                                                      K,
                                                                                  }),
                                                                                }),
                                                                              ],
                                                                            }),
                                                                            q()
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
                                              className: `framer-qd2gjs`,
                                              children: o(_, {
                                                breakpoint: w,
                                                overrides: {
                                                  ncN8VMLzh: {
                                                    y:
                                                      (m?.y || 0) +
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
                                                  Yph95GriE: {
                                                    y:
                                                      (m?.y || 0) +
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
                                                children: o(S, {
                                                  height: 48,
                                                  y:
                                                    (m?.y || 0) +
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
                                                  children: o(x, {
                                                    className: `framer-ujw47q-container`,
                                                    nodeId: `HF7Za0300`,
                                                    scopeId: `ltFPwgaY6`,
                                                    children: o(_, {
                                                      breakpoint: w,
                                                      overrides: {
                                                        ncN8VMLzh: {
                                                          variant: Y(
                                                            t,
                                                            {
                                                              disabled: `znBzTNqoD`,
                                                              loading: `LDWqWY6Ab`,
                                                            },
                                                            `ayfIpN8tZ`
                                                          ),
                                                        },
                                                        Yph95GriE: {
                                                          variant: Y(
                                                            t,
                                                            {
                                                              disabled: `znBzTNqoD`,
                                                              loading: `LDWqWY6Ab`,
                                                            },
                                                            `ayfIpN8tZ`
                                                          ),
                                                        },
                                                      },
                                                      children: o(M, {
                                                        height: `100%`,
                                                        id: `HF7Za0300`,
                                                        layoutId: `HF7Za0300`,
                                                        variant: Y(
                                                          t,
                                                          {
                                                            disabled: `znBzTNqoD`,
                                                            loading: `LDWqWY6Ab`,
                                                          },
                                                          `P9t0j5QoH`
                                                        ),
                                                        width: `100%`,
                                                        Wld3NDzSj: D({ loadMore: n }),
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
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-dx6dr.framer-1uw0phu, .framer-dx6dr .framer-1uw0phu { display: block; }`,
        `.framer-dx6dr.framer-eunlru { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-dx6dr .framer-o1ud5k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-w6ux2r { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 46px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-1kk77ve { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-dx6dr .framer-196x8n6 { align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 20px; border-bottom-right-radius: 20px; border-top-left-radius: 20px; border-top-right-radius: 20px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; max-width: 280px; overflow: visible; padding: 24px; position: sticky; top: 120px; width: 23%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-dx6dr .framer-1680qrt, .framer-dx6dr .framer-1nfjxp7, .framer-dx6dr .framer-1ibty9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-dx6dr .framer-1c8zj44-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-bz97q9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-dx6dr .framer-o9xt72 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-zyh77i { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-dx6dr .framer-1hypoo7 { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(10px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-xlk4kk-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-dx6dr.framer-13nole6 { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-dx6dr.framer-1unkmtw { aspect-ratio: 1.839080459770115 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 435px); left: 50%; overflow: hidden; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 800px; z-index: 10; }`,
        `.framer-dx6dr .framer-qd2gjs { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: 1 / -1; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 8px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-dx6dr .framer-ujw47q-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-dx6dr.framer-eunlru, .framer-dx6dr .framer-o1ud5k, .framer-dx6dr .framer-w6ux2r, .framer-dx6dr .framer-1kk77ve, .framer-dx6dr .framer-196x8n6, .framer-dx6dr .framer-bz97q9, .framer-dx6dr .framer-zyh77i, .framer-dx6dr .framer-qd2gjs { gap: 0px; } .framer-dx6dr.framer-eunlru > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-dx6dr.framer-eunlru > :first-child, .framer-dx6dr .framer-o1ud5k > :first-child, .framer-dx6dr .framer-196x8n6 > :first-child, .framer-dx6dr .framer-bz97q9 > :first-child, .framer-dx6dr .framer-zyh77i > :first-child { margin-top: 0px; } .framer-dx6dr.framer-eunlru > :last-child, .framer-dx6dr .framer-o1ud5k > :last-child, .framer-dx6dr .framer-196x8n6 > :last-child, .framer-dx6dr .framer-bz97q9 > :last-child, .framer-dx6dr .framer-zyh77i > :last-child { margin-bottom: 0px; } .framer-dx6dr .framer-o1ud5k > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-dx6dr .framer-w6ux2r > * { margin: 0px; margin-left: calc(46px / 2); margin-right: calc(46px / 2); } .framer-dx6dr .framer-w6ux2r > :first-child, .framer-dx6dr .framer-1kk77ve > :first-child, .framer-dx6dr .framer-qd2gjs > :first-child { margin-left: 0px; } .framer-dx6dr .framer-w6ux2r > :last-child, .framer-dx6dr .framer-1kk77ve > :last-child, .framer-dx6dr .framer-qd2gjs > :last-child { margin-right: 0px; } .framer-dx6dr .framer-1kk77ve > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-dx6dr .framer-196x8n6 > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-dx6dr .framer-bz97q9 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-dx6dr .framer-zyh77i > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-dx6dr .framer-qd2gjs > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }`,
        ...be,
        ...E,
        ...k,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-dx6dr.framer-eunlru { width: 810px; } .framer-dx6dr .framer-o1ud5k { padding: 160px 0px 80px 0px; } .framer-dx6dr .framer-w6ux2r { flex-direction: column; gap: 30px; max-width: 990px; } .framer-dx6dr .framer-1kk77ve { flex: none; gap: 30px; width: 100%; } .framer-dx6dr .framer-196x8n6 { gap: 16px; padding: 20px; top: 20px; } .framer-dx6dr .framer-o9xt72 { align-content: flex-start; align-items: flex-start; gap: 16px; justify-content: center; } .framer-dx6dr .framer-1hypoo7 { gap: 20px; grid-template-columns: repeat(2, minmax(10px, 1fr)); } .framer-dx6dr.framer-1unkmtw { width: 600px; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-dx6dr .framer-w6ux2r, .framer-dx6dr .framer-1kk77ve, .framer-dx6dr .framer-196x8n6, .framer-dx6dr .framer-o9xt72, .framer-dx6dr .framer-1hypoo7 { gap: 0px; } .framer-dx6dr .framer-w6ux2r > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-dx6dr .framer-w6ux2r > :first-child, .framer-dx6dr .framer-196x8n6 > :first-child { margin-top: 0px; } .framer-dx6dr .framer-w6ux2r > :last-child, .framer-dx6dr .framer-196x8n6 > :last-child { margin-bottom: 0px; } .framer-dx6dr .framer-1kk77ve > * { margin: 0px; margin-left: calc(30px / 2); margin-right: calc(30px / 2); } .framer-dx6dr .framer-1kk77ve > :first-child, .framer-dx6dr .framer-o9xt72 > :first-child { margin-left: 0px; } .framer-dx6dr .framer-1kk77ve > :last-child, .framer-dx6dr .framer-o9xt72 > :last-child { margin-right: 0px; } .framer-dx6dr .framer-196x8n6 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-dx6dr .framer-o9xt72 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-dx6dr .framer-1hypoo7 > *, .framer-dx6dr .framer-1hypoo7 > :first-child, .framer-dx6dr .framer-1hypoo7 > :last-child { margin: 0px; } }}`,
        `@media (max-width: 809px) { .framer-dx6dr.framer-eunlru { width: 390px; } .framer-dx6dr .framer-o1ud5k { padding: 140px 0px 60px 0px; } .framer-dx6dr .framer-w6ux2r { flex-direction: column; gap: 24px; max-width: 620px; } .framer-dx6dr .framer-1kk77ve { flex: none; flex-direction: column; gap: 30px; width: 100%; } .framer-dx6dr .framer-196x8n6 { gap: 16px; max-width: unset; order: 0; padding: 20px; position: relative; top: unset; width: 100%; will-change: unset; } .framer-dx6dr .framer-bz97q9 { flex: none; gap: 16px; order: 1; width: 100%; will-change: unset; } .framer-dx6dr .framer-o9xt72 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 16px; justify-content: center; } .framer-dx6dr .framer-zyh77i { flex: none; width: 100%; } .framer-dx6dr .framer-1hypoo7 { gap: 20px; grid-template-columns: repeat(1, minmax(10px, 1fr)); } .framer-dx6dr.framer-1unkmtw { height: var(--framer-aspect-ratio-supported, 109px); width: 90%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-dx6dr .framer-w6ux2r, .framer-dx6dr .framer-1kk77ve, .framer-dx6dr .framer-196x8n6, .framer-dx6dr .framer-bz97q9, .framer-dx6dr .framer-o9xt72, .framer-dx6dr .framer-1hypoo7 { gap: 0px; } .framer-dx6dr .framer-w6ux2r > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-dx6dr .framer-w6ux2r > :first-child, .framer-dx6dr .framer-1kk77ve > :first-child, .framer-dx6dr .framer-196x8n6 > :first-child, .framer-dx6dr .framer-bz97q9 > :first-child, .framer-dx6dr .framer-o9xt72 > :first-child { margin-top: 0px; } .framer-dx6dr .framer-w6ux2r > :last-child, .framer-dx6dr .framer-1kk77ve > :last-child, .framer-dx6dr .framer-196x8n6 > :last-child, .framer-dx6dr .framer-bz97q9 > :last-child, .framer-dx6dr .framer-o9xt72 > :last-child { margin-bottom: 0px; } .framer-dx6dr .framer-1kk77ve > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-dx6dr .framer-196x8n6 > *, .framer-dx6dr .framer-bz97q9 > *, .framer-dx6dr .framer-o9xt72 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-dx6dr .framer-1hypoo7 > *, .framer-dx6dr .framer-1hypoo7 > :first-child, .framer-dx6dr .framer-1hypoo7 > :last-child { margin: 0px; } }}`,
      ],
      `framer-dx6dr`
    )),
    (Q.displayName = `Template`),
    (Q.defaultProps = { height: 2576, width: 1200 }),
    me(
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
        ...F,
        ...L,
        ...R,
        ...b(T),
        ...b(D),
        ...b(A),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerltFPwgaY6`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: ``,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
            framerScrollSections: `{"Y518g0rJZ":{"pattern":":Y518g0rJZ","name":"container"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"ncN8VMLzh":{"layout":["fixed","auto"]},"Yph95GriE":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `2576`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=dT3wJsyp0iVTpxn8K8xfTKcmo0H9HPs1o3UkwzHU9eM.Cne2eTdv.mjs.map
