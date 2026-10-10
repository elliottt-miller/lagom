import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as ee,
  a as te,
  c as o,
  l as s,
  m as ne,
  o as re,
  s as c,
  u as l,
} from "./react.D0omlcQg.mjs";
import { M as u, a as ie, n as ae, r as d, t as f } from "./motion.Bi2Azsus.mjs";
import {
  B as p,
  C as m,
  Ct as h,
  D as oe,
  Dt as se,
  Et as ce,
  K as g,
  Kt as _,
  L as v,
  Lt as y,
  Mt as b,
  N as le,
  Nt as ue,
  O as de,
  Pt as fe,
  St as pe,
  _t as me,
  a as x,
  at as S,
  bt as he,
  et as ge,
  g as _e,
  ht as ve,
  i as C,
  jt as w,
  k as T,
  n as E,
  p as D,
  q as O,
  st as k,
  w as A,
  xt as ye,
} from "./framer.zRtTBSC3.mjs";
import { i as j, n as M, r as N, t as be } from "./CT_DBbR5R.CmeCM4mC.mjs";
import { i as P, n as F, r as I, t as xe } from "./PXfjos31S.DX_B23Tr.mjs";
import { i as L, n as R, r as Se, t as Ce } from "./cxfU_vRgl.CLfRjdVV.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./pN_gL4Xds.CPj-Oone.mjs";
import { n as Oe, t as z } from "./WWrKfqOcU.-iAiA_m2.mjs";
import { n as ke, t as B } from "./BbFuZPGaK.ZVDYkDQW.mjs";
import { a as V, i as Ae, n as je, o as Me, r as H, t as U } from "./oSrwdqFj4.DjK9W3ya.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./DAYH3uYfF.CyGAyeDQ.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./hcX8gSJpR.DMQ-zQgz.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./QawiXOoTj.1RoXDsb2.mjs";
import { i as Ge, n as Ke, r as qe, t as Je } from "./RFw1qTA_c.C6xI8Tzc.mjs";
import Ye, { t as Xe } from "./UkEznR2Pj7q04bvnwNdlNhDDYGVGw48-S3H2Idxg4Rs.BGaUN06N.mjs";
var W, Ze, Qe, $e, et, tt, G, K, nt, rt, it, q, J, Y, X, at, ot, Z, st, ct, Q, $;
e(() => {
  (o(),
    ge(),
    f(),
    t(),
    re(),
    ke(),
    Me(),
    je(),
    Ae(),
    j(),
    L(),
    Ne(),
    Le(),
    we(),
    P(),
    Ve(),
    Ge(),
    Oe(),
    Xe(),
    (W = g(B)),
    (Ze = g(z)),
    (Qe = g(V)),
    ($e = _(V)),
    (et = g(U)),
    (tt = {
      CtwehNGUH: `(max-width: 809.98px)`,
      Q9WeOhljp: `(min-width: 1200px)`,
      qDbld8RgU: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (G = () => typeof document < `u`),
    (K = []),
    (nt = `framer-suCrM`),
    (rt = {
      CtwehNGUH: `framer-v-173skgh`,
      Q9WeOhljp: `framer-v-11w5hr4`,
      qDbld8RgU: `framer-v-1lcspkh`,
    }),
    (it = (e, t, n) => (e && t ? `position` : n)),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (J = () => ({
      from: { alias: `rl6qrItbX`, data: H, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `rl6qrItbX`, name: `uQ2JvQyPw`, type: `Identifier` },
        { collection: `rl6qrItbX`, name: `hWqyOEP_3`, type: `Identifier` },
        { collection: `rl6qrItbX`, name: `cGT5udmtH`, type: `Identifier` },
        { collection: `rl6qrItbX`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `rl6qrItbX`, name: `wilSgI4j3`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `rAskz1xe9` },
        type: `BinaryOperation`,
      },
    })),
    (Y = ({ query: e, pageSize: t, children: n }) => n(b(e))),
    S(),
    (X = () => ({
      from: { alias: `Ra5xaYdp8`, data: H, type: `Collection` },
      select: [
        { collection: `Ra5xaYdp8`, name: `hWqyOEP_3`, type: `Identifier` },
        { collection: `Ra5xaYdp8`, name: `uQ2JvQyPw`, type: `Identifier` },
        { collection: `Ra5xaYdp8`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `Ra5xaYdp8`, name: `wilSgI4j3`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `rAskz1xe9` },
        type: `BinaryOperation`,
      },
    })),
    (at = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (ot = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = w({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Z = { Desktop: `Q9WeOhljp`, Phone: `CtwehNGUH`, Tablet: `qDbld8RgU` }),
    (st = ({ value: e }) =>
      h()
        ? null
        : c(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ct = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `Q9WeOhljp`,
    })),
    (Q = y(
      ne(function (e, t) {
        let o = ee(null),
          ne = t ?? o,
          re = n(),
          { activeLocale: f, setLocale: p } = ce(),
          h = me(),
          { style: g, className: _, layoutId: y, variant: b, ...le } = ct(e);
        se(a(() => Ye({}, f), [f]));
        let [S, ge] = pe(b, tt, !1),
          { activeVariantCallback: w, delay: O } = ve(void 0),
          k = ({ overlay: e }) =>
            w(async (...t) => {
              e.toggle();
            }),
          j = v(nt, Ce, xe, De, Be, Je, We, Ie, be),
          M = i(D)?.isLayoutTemplate,
          N = !!i(ie)?.transition?.layout,
          P = it(M, N),
          F = ue(`qSTQ0MGe5`),
          I = ye(),
          L = () => !G() || S !== `CtwehNGUH`;
        fe();
        let R = () => !G() || S === `CtwehNGUH`;
        return (
          he({}),
          c(D.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Z,
              primaryVariantId: `Q9WeOhljp`,
              variantClassNames: rt,
            },
            children: l(d, {
              id: y ?? re,
              children: [
                c(st, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                l(u.div, {
                  ...le,
                  className: v(j, `framer-11w5hr4`, _),
                  ref: ne,
                  style: { ...g },
                  children: [
                    c(u.main, {
                      className: `framer-17jaekf`,
                      "data-framer-name": `Main`,
                      layout: P,
                      children: l(`div`, {
                        className: `framer-2aih0x`,
                        "data-framer-name": `Content`,
                        children: [
                          c(`div`, {
                            className: `framer-12ztkk7`,
                            children: c(E, {
                              children: c(Y, {
                                query: J(),
                                children: (e, t, n) =>
                                  l(s, {
                                    children: [
                                      l(`div`, {
                                        className: `framer-12x7gd`,
                                        "data-framer-name": `Header`,
                                        children: [
                                          c(T, {
                                            __fromCanvasComponent: !0,
                                            children: c(r, {
                                              children: c(`h2`, {
                                                className: `framer-styles-preset-1ll98pl`,
                                                "data-styles-preset": `cxfU_vRgl`,
                                                dir: `auto`,
                                                style: { "--framer-text-alignment": `left` },
                                                children: `Privacy Policy`,
                                              }),
                                            }),
                                            className: `framer-1djgns7`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          c(T, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: [
                                                c(`p`, {
                                                  className: `framer-styles-preset-1sjmy9b`,
                                                  "data-styles-preset": `PXfjos31S`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, rgb(66, 66, 66))`,
                                                  },
                                                  children: `At Sneaks, we value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or place an order with us.`,
                                                }),
                                                c(`p`, {
                                                  className: `framer-styles-preset-1sjmy9b`,
                                                  "data-styles-preset": `PXfjos31S`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-alignment": `left`,
                                                    "--framer-text-color": `var(--token-bbe0c2aa-5207-4997-b514-2bd605315d76, rgb(66, 66, 66))`,
                                                  },
                                                  children: `By using our website, you agree to the practices described in this policy.`,
                                                }),
                                              ],
                                            }),
                                            className: `framer-14mdkb2`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                      c(A, {
                                        breakpoint: S,
                                        overrides: {
                                          CtwehNGUH: {
                                            width: `min(max(min(min(${h?.width || `100vw`}, 1300px), 500px) - 56px, 1px), 630px)`,
                                            y: (h?.y || 0) + 0 + 0 + 0 + 0 + 120 + 0 + 352.4,
                                          },
                                        },
                                        children: c(C, {
                                          height: 1,
                                          width: `min(max((min(min(${h?.width || `100vw`}, 1300px), 1200px) - 100px) / 2, 1px), 630px)`,
                                          y: (h?.y || 0) + 0 + 0 + 0 + 0 + 120 + 0 + 340.4,
                                          children: c(x, {
                                            className: `framer-1dykjbw-container`,
                                            nodeId: `FxUOc6aSj`,
                                            scopeId: `hrBgwOQUm`,
                                            children: c(B, {
                                              height: `100%`,
                                              id: `FxUOc6aSj`,
                                              layoutId: `FxUOc6aSj`,
                                              style: { height: `100%`, width: `100%` },
                                              variant: q(`FveAb6f2W`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      e?.map(
                                        (
                                          { cGT5udmtH: e, hWqyOEP_3: t, id: n, uQ2JvQyPw: i },
                                          a
                                        ) => (
                                          (i ??= ``),
                                          (t ??= ``),
                                          (e ??= ``),
                                          c(
                                            d,
                                            {
                                              id: `rl6qrItbX-${n}`,
                                              children: c(m.Provider, {
                                                value: { uQ2JvQyPw: i },
                                                children: l(`div`, {
                                                  className: `framer-1hmi97x`,
                                                  id: `${i}-${F}`,
                                                  ref: I(`${i}-${F}`),
                                                  children: [
                                                    c(T, {
                                                      __fromCanvasComponent: !0,
                                                      children: c(r, {
                                                        children: c(`h4`, {
                                                          className: `framer-styles-preset-19ynewv`,
                                                          "data-styles-preset": `pN_gL4Xds`,
                                                          dir: `auto`,
                                                          children: `Shipping & Delivery`,
                                                        }),
                                                      }),
                                                      className: `framer-14mxe5k`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`Inter`],
                                                      text: t,
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                    c(T, {
                                                      __fromCanvasComponent: !0,
                                                      children: e,
                                                      className: `framer-8i9fpo`,
                                                      "data-framer-name": `Title`,
                                                      fonts: [`Inter`],
                                                      stylesPresetsClassNames: {
                                                        a: `framer-styles-preset-1eqj9u`,
                                                        h6: `framer-styles-preset-1mts5yh`,
                                                        p: `framer-styles-preset-1ozkt1o`,
                                                        table: `framer-styles-preset-176fugv`,
                                                      },
                                                      verticalAlignment: `top`,
                                                      withExternalLayout: !0,
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            },
                                            n
                                          )
                                        )
                                      ),
                                    ],
                                  }),
                              }),
                            }),
                          }),
                          L() &&
                            c(`aside`, {
                              className: `framer-10aamt1 hidden-173skgh`,
                              "data-border": !0,
                              children: c(E, {
                                children: c(Y, {
                                  query: X(),
                                  children: (e, t, n) =>
                                    l(s, {
                                      children: [
                                        l(`div`, {
                                          className: `framer-71aagw`,
                                          "data-framer-name": `Header`,
                                          children: [
                                            c(z, {
                                              animated: !1,
                                              className: `framer-1ojandc`,
                                              GaDHsaDms: !0,
                                              layoutId: `RNzRkoZ_o`,
                                            }),
                                            c(T, {
                                              __fromCanvasComponent: !0,
                                              children: c(r, {
                                                children: c(`p`, {
                                                  className: `framer-styles-preset-5rfdkx`,
                                                  "data-styles-preset": `CT_DBbR5R`,
                                                  dir: `auto`,
                                                  style: {
                                                    "--framer-text-color": `var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))`,
                                                  },
                                                  children: `Table of contents`,
                                                }),
                                              }),
                                              className: `framer-1h4zzmy`,
                                              "data-framer-name": `Title`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        c(C, {
                                          height: 1,
                                          width: `calc(min(max((min(min(${h?.width || `100vw`}, 1300px), 1200px) - 100px) / 2, 1px), 300px) - 64px)`,
                                          y: (h?.y || 0) + 0 + 0 + 0 + 0 + 120 + 32 + 115,
                                          children: c(x, {
                                            className: `framer-iqv5ez-container`,
                                            nodeId: `zXfJir8q4`,
                                            scopeId: `hrBgwOQUm`,
                                            children: c(B, {
                                              height: `100%`,
                                              id: `zXfJir8q4`,
                                              layoutId: `zXfJir8q4`,
                                              style: { height: `100%`, width: `100%` },
                                              variant: q(`FveAb6f2W`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        e?.map(
                                          ({ hWqyOEP_3: e, id: t, uQ2JvQyPw: n }, r) => (
                                            (e ??= ``),
                                            (n ??= ``),
                                            c(
                                              d,
                                              {
                                                id: `Ra5xaYdp8-${t}`,
                                                children: c(m.Provider, {
                                                  value: { uQ2JvQyPw: n },
                                                  children: c(`div`, {
                                                    className: `framer-h617ru`,
                                                    children: c(de, {
                                                      links: [
                                                        {
                                                          href: {
                                                            hash: `:uQ2JvQyPw-:qSTQ0MGe5`,
                                                            hashVariables: { uQ2JvQyPw: n },
                                                            webPageId: `hrBgwOQUm`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                        {
                                                          href: {
                                                            hash: `:uQ2JvQyPw-:qSTQ0MGe5`,
                                                            hashVariables: { uQ2JvQyPw: n },
                                                            webPageId: `hrBgwOQUm`,
                                                          },
                                                          implicitPathVariables: void 0,
                                                        },
                                                      ],
                                                      children: (t) =>
                                                        c(C, {
                                                          height: 21,
                                                          width: `calc(min(max((min(min(${h?.width || `100vw`}, 1300px), 1200px) - 100px) / 2, 1px), 300px) - 64px)`,
                                                          y:
                                                            (h?.y || 0) +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            0 +
                                                            120 +
                                                            32 +
                                                            126 +
                                                            0 +
                                                            0,
                                                          children: c(x, {
                                                            className: `framer-199h6pj-container`,
                                                            draggable: `false`,
                                                            nodeId: `zHDodcGsm`,
                                                            rendersWithMotion: !0,
                                                            scopeId: `hrBgwOQUm`,
                                                            children: c(A, {
                                                              breakpoint: S,
                                                              overrides: {
                                                                qDbld8RgU: { S8tU6pV6t: t[1] },
                                                              },
                                                              children: c($e, {
                                                                __framer__animateOnce: !1,
                                                                __framer__exitTarget: !0,
                                                                __framer__targets: [
                                                                  {
                                                                    offset: 100,
                                                                    ref: I(`${n}-${F}`),
                                                                    target: `ZEy_EiJQy`,
                                                                  },
                                                                ],
                                                                __framer__threshold: 0,
                                                                __framer__variantAppearEffectEnabled:
                                                                  !0,
                                                                height: `100%`,
                                                                id: `zHDodcGsm`,
                                                                layoutId: `zHDodcGsm`,
                                                                MsA4ziVRH: e,
                                                                S8tU6pV6t: t[0],
                                                                style: { width: `100%` },
                                                                variant: q(`ESexIw2tb`),
                                                                width: `100%`,
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
                                      ],
                                    }),
                                }),
                              }),
                            }),
                        ],
                      }),
                    }),
                    R() &&
                      c(ot, {
                        blockDocumentScrolling: !1,
                        dismissWithEsc: !0,
                        children: (e) =>
                          c(s, {
                            children: c(A, {
                              breakpoint: S,
                              overrides: {
                                CtwehNGUH: { height: 320, width: `min(80vw, 444px)`, y: 636 },
                              },
                              children: c(C, {
                                children: l(x, {
                                  className: `framer-2tg8sv-container hidden-11w5hr4 hidden-1lcspkh`,
                                  id: `2tg8sv`,
                                  layout: P,
                                  layoutScroll: !0,
                                  nodeId: `csYpT_lGZ`,
                                  scopeId: `hrBgwOQUm`,
                                  children: [
                                    c(U, {
                                      H2xgQlxn8: `rAskz1xe9`,
                                      height: `100%`,
                                      id: `csYpT_lGZ`,
                                      layoutId: `csYpT_lGZ`,
                                      style: { maxWidth: `100%`, width: `100%` },
                                      variant: q(
                                        e.visible && `Tp6qSkdDM`,
                                        e.visible ? `Tp6qSkdDM` : `dQd8OGUDa`
                                      ),
                                      width: `100%`,
                                      Y78ORZeN8: k({ overlay: e }),
                                    }),
                                    c(ae, {
                                      children:
                                        e.visible &&
                                        c(s, {
                                          children: te(
                                            c(_e, {
                                              triggerId: `2tg8sv`,
                                              children: c(oe, {
                                                children: c(
                                                  u.div,
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
                                                    className: v(j, `framer-1vffede`),
                                                    "data-framer-portal-id": `2tg8sv`,
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
                                                  `MnhOHC9Fy`
                                                ),
                                              }),
                                            }),
                                            at()
                                          ),
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
                c(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-suCrM.framer-18ui2zl, .framer-suCrM .framer-18ui2zl { display: block; }`,
        `.framer-suCrM.framer-11w5hr4 { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-suCrM .framer-17jaekf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-2aih0x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 28px 28px 28px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-12ztkk7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 630px; padding: 0px; position: relative; width: 1px; }`,
        `.framer-suCrM .framer-12x7gd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-1djgns7, .framer-suCrM .framer-14mdkb2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-suCrM .framer-1dykjbw-container, .framer-suCrM .framer-iqv5ez-container { flex: none; height: 1px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-1hmi97x { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; scroll-margin-top: 100px; width: 100%; }`,
        `.framer-suCrM .framer-14mxe5k, .framer-suCrM .framer-8i9fpo { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-suCrM .framer-10aamt1 { --border-bottom-width: 1px; --border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; --corner-shape-fallback: 0.796; align-content: flex-start; align-items: flex-start; background-color: var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, #fafafa); border-bottom-left-radius: calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(37px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); corner-shape: superellipse(1.4); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 300px; padding: 32px; position: sticky; top: 44px; width: 1px; z-index: 1; }`,
        `.framer-suCrM .framer-71aagw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-1ojandc { --118a55: var(--token-271a8250-cf6c-498c-9a0f-d0b021ee941e, #292929); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
        `.framer-suCrM .framer-1h4zzmy { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-suCrM .framer-h617ru { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-suCrM .framer-199h6pj-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 100%; }`,
        `.framer-suCrM .framer-2tg8sv-container { bottom: 44px; flex: none; height: auto; left: 50%; max-width: 444px; position: fixed; transform: translateX(-50%); width: 80%; z-index: 10; }`,
        `.framer-suCrM.framer-1vffede { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; }`,
        ...R,
        ...F,
        ...Te,
        ...Re,
        ...Ke,
        ...He,
        ...Pe,
        ...M,
        `.framer-suCrM[data-border="true"]::after, .framer-suCrM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-suCrM.framer-11w5hr4 { width: 810px; }}`,
        `@media (max-width: 809.98px) { .framer-suCrM.framer-11w5hr4 { width: 390px; } .framer-suCrM .framer-2aih0x { max-width: 500px; } .framer-suCrM .framer-12ztkk7 { gap: 44px; } .framer-suCrM.framer-1vffede { background-color: unset; }}`,
      ],
      `framer-suCrM`
    )),
    (Q.displayName = `Shipping`),
    (Q.defaultProps = { height: 3305.5, width: 1200 }),
    le(
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
        ...W,
        ...Ze,
        ...Qe,
        ...et,
        ...O(Se),
        ...O(I),
        ...O(Ee),
        ...O(ze),
        ...O(qe),
        ...O(Ue),
        ...O(Fe),
        ...O(N),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = k.get(J(), n),
          i = k.get(X(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          p(U, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => p(B, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [p(B, {}, t), p(V, {}, t)]));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerhrBgwOQUm`,
          slots: [],
          annotations: {
            framerScrollSections: `{"qSTQ0MGe5":{"pattern":":uQ2JvQyPw-:qSTQ0MGe5","name":"point","slugs":{"uQ2JvQyPw":{"identifier":"local-module:collection/QOgS8yO19:default","provider":"rl6qrItbX"}}}}`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"qDbld8RgU":{"layout":["fixed","fixed"]},"CtwehNGUH":{"layout":["fixed","fixed"]}}}`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerImmutableVariables: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicWidth: `1200`,
            framerIntrinsicHeight: `3305.5`,
            framerDisplayContentsDiv: `false`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, K as queryParamNames };
//# sourceMappingURL=bMROh272jkqVPujVl51IO8AZ462YvxX4GZQaGONwoY0.D8gw3fw2.mjs.map
