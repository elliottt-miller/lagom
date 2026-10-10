import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as ee,
  c as i,
  g as a,
  l as o,
  o as te,
  s as ne,
  w as re,
  y as ie,
} from "./react.CWoGm2_e.mjs";
import { C as s, a as ae, r as oe, t as c } from "./motion.DjW49AAR.mjs";
import {
  A as l,
  D as u,
  Et as se,
  H as d,
  I as f,
  K as ce,
  P as le,
  S as p,
  St as ue,
  U as m,
  W as h,
  X as g,
  _,
  _t as de,
  a as v,
  ct as fe,
  dt as pe,
  f as me,
  ft as he,
  i as y,
  kt as b,
  l as ge,
  lt as _e,
  m as x,
  mt as S,
  nt as ve,
  u as ye,
  v as be,
  vt as xe,
} from "./framer.D9PtOJZM.mjs";
import { i as Se, n as C, r as w, t as Ce } from "./qZYHjqVrz.Co-qUMV0.mjs";
import { n as we, t as T } from "./O91kqgIxk.BCBG6QJw.mjs";
import { i as E, n as D, r as O, t as Te } from "./O0kpMPYVt.BCUpzF8V.mjs";
import { a as k, c as Ee, i as A, o as j, r as De, s as M } from "./shared-lib.Cln7NIgD.mjs";
import { i as N, n as P, r as Oe, t as ke } from "./jajJzupWJ.Cqa78jPq.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./zWe8uO5eV.D_hz-QQE.mjs";
import { n as Pe, t as F } from "./Phosphor.DhdvwZO7.mjs";
import { a as Fe, i as Ie, n as Le } from "./h78sYrnAz.CN_Z4VaQ.mjs";
import { n as Re, t as I } from "./IGEvnqFgf.DuDYthiU.mjs";
import {
  a as ze,
  c as Be,
  i as Ve,
  n as He,
  o as Ue,
  r as We,
  s as Ge,
  t as Ke,
} from "./nnEHFMr_u.DRPAPQwO.mjs";
import {
  a as qe,
  c as Je,
  i as Ye,
  n as Xe,
  o as Ze,
  r as Qe,
  s as $e,
  t as et,
} from "./nRMCPrQrv.DBUFJapj.mjs";
import tt, { t as nt } from "./p9NQI6aZRJok962HUfb3u_ex_kBehDvXkm5mH_zaWOc.Biuoins1.mjs";
var L, R, z, B, V, H, rt, U, W, it, at, ot, G, st, K, q, J, ct, Y, X, lt, Z, ut, Q, dt, $, ft;
e(() => {
  (te(),
    g(),
    c(),
    re(),
    Pe(),
    Ee(),
    Re(),
    we(),
    Fe(),
    Je(),
    j(),
    Be(),
    N(),
    Ve(),
    Ye(),
    E(),
    Se(),
    Ae(),
    nt(),
    (L = d(F)),
    (R = b(s.div)),
    (z = d(I)),
    (B = d(T)),
    (V = b(s.main)),
    (H = d(M)),
    (rt = {
      avBKEpCeN: `(min-width: 810px) and (max-width: 1199.98px)`,
      cuQV4v5MW: `(max-width: 809.98px)`,
      P5qvx1zfP: `(min-width: 1200px)`,
    }),
    (U = []),
    (W = `framer-vsUa6`),
    (it = {
      avBKEpCeN: `framer-v-10ujles`,
      cuQV4v5MW: `framer-v-pi4fms`,
      P5qvx1zfP: `framer-v-15l3aqc`,
    }),
    (at = (e, t, n) => (e && t ? `position` : n)),
    (ot = {
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
    (st = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.9, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (q = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (J = { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` }),
    (ct = {
      effect: q,
      repeat: !1,
      startDelay: 0.5,
      tokenization: `character`,
      transition: J,
      trigger: `onMount`,
      type: `appear`,
    }),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = {
      effect: q,
      tokenization: `character`,
      transition: J,
      trigger: `onMount`,
      type: `appear`,
    }),
    (lt = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
        default:
          return n;
      }
    }),
    (Z = { Desktop: `P5qvx1zfP`, Phone: `cuQV4v5MW`, Tablet: `avBKEpCeN` }),
    (ut = ({ value: e }) =>
      S()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: { alias: `GW53l1Are`, data: Le, type: `Collection` },
      select: [
        { collection: `GW53l1Are`, name: `i9ILnbAeX`, type: `Identifier` },
        { collection: `GW53l1Are`, name: `MV8vbHLj9`, type: `Identifier` },
        { collection: `GW53l1Are`, name: `btGpJvFlp`, type: `Identifier` },
        { collection: `GW53l1Are`, name: `AlH2wYsQg`, type: `Identifier` },
        { collection: `GW53l1Are`, name: `BGDbqpAj9`, type: `Identifier` },
      ],
      where: e,
    })),
    (dt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `P5qvx1zfP`,
    })),
    ($ = se(
      a(function (e, a) {
        let te = t(null),
          re = a ?? te,
          c = ie(),
          { activeLocale: l, setLocale: se } = de(),
          d = fe(),
          f = _e(),
          [m] = ue(Q(ce(f, `GW53l1Are`))),
          g = (e) => {
            if (!m) throw new be(`No data matches path variables: ${JSON.stringify(f)}`);
            return m[e];
          },
          {
            style: b,
            className: S,
            layoutId: ve,
            variant: Se,
            i9ILnbAeX: C = g(`i9ILnbAeX`),
            MV8vbHLj9: w = g(`MV8vbHLj9`) ?? ``,
            btGpJvFlp: we = g(`btGpJvFlp`) ?? ``,
            AlH2wYsQg: E = g(`AlH2wYsQg`),
            BGDbqpAj9: D = g(`BGDbqpAj9`) ?? ``,
            ...O
          } = dt(e);
        xe(ee(() => tt({ MV8vbHLj9: w }, l), [w, l]));
        let [k, Ee] = he(Se, rt, !1),
          A = le(W, Ce, Te, Ne, ke, De, qe, Ke, et, ze),
          j = r(me)?.isLayoutTemplate,
          N = !!r(ae)?.transition?.layout,
          P = at(j, N);
        return (
          pe({}),
          i(me.Provider, {
            value: {
              activeVariantId: k,
              humanReadableVariantMap: Z,
              primaryVariantId: `P5qvx1zfP`,
              variantClassNames: it,
            },
            children: o(oe, {
              id: ve ?? c,
              children: [
                i(ut, { value: `html body { background: rgb(255, 255, 255); }` }),
                o(s.div, {
                  ...O,
                  className: le(A, `framer-15l3aqc`, S),
                  ref: re,
                  style: { ...b },
                  children: [
                    o(V, {
                      animate: ot,
                      className: `framer-jc6m31`,
                      "data-framer-appear-id": `jc6m31`,
                      "data-framer-name": `Main`,
                      initial: G,
                      layout: P,
                      optimized: !0,
                      children: [
                        o(`div`, {
                          className: `framer-4z0qrh`,
                          "data-framer-name": `Container`,
                          children: [
                            i(R, {
                              animate: st,
                              className: `framer-1gzue78`,
                              "data-framer-appear-id": `1gzue78`,
                              "data-framer-name": `Top`,
                              initial: G,
                              optimized: !0,
                              children: o(`div`, {
                                className: `framer-1k8s28e`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  i(u, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-1u75rap`,
                                        "data-styles-preset": `qZYHjqVrz`,
                                        dir: `auto`,
                                        children: i(_, {
                                          href: { webPageId: `augiA20Il` },
                                          motionChild: !0,
                                          nodeId: `s5X01IBYk`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `GW53l1Are`,
                                          smoothScroll: !1,
                                          children: i(s.a, {
                                            className: `framer-styles-preset-z5vi95`,
                                            "data-styles-preset": `O0kpMPYVt`,
                                            children: `Home`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-19kau92`,
                                    "data-framer-name": `Link`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  i(y, {
                                    children: i(v, {
                                      className: `framer-25mccg-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `cAeTNTdrl`,
                                      scopeId: `GW53l1Are`,
                                      children: i(F, {
                                        color: `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                        height: `100%`,
                                        iconSearch: `caret-right`,
                                        iconSelection: `House`,
                                        id: `cAeTNTdrl`,
                                        layoutId: `cAeTNTdrl`,
                                        mirrored: !1,
                                        selectByList: !1,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `bold`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  i(u, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-1u75rap`,
                                        "data-styles-preset": `qZYHjqVrz`,
                                        dir: `auto`,
                                        children: i(_, {
                                          href: { webPageId: `dnRb93HuB` },
                                          motionChild: !0,
                                          nodeId: `BkoLmpGPZ`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `GW53l1Are`,
                                          smoothScroll: !1,
                                          children: i(s.a, {
                                            className: `framer-styles-preset-z5vi95`,
                                            "data-styles-preset": `O0kpMPYVt`,
                                            children: `Blog`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1ews0h`,
                                    "data-framer-name": `Link`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  i(y, {
                                    children: i(v, {
                                      className: `framer-e1ajdh-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `FZTatKw4z`,
                                      scopeId: `GW53l1Are`,
                                      children: i(F, {
                                        color: `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                        height: `100%`,
                                        iconSearch: `caret-right`,
                                        iconSelection: `House`,
                                        id: `FZTatKw4z`,
                                        layoutId: `FZTatKw4z`,
                                        mirrored: !1,
                                        selectByList: !1,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `bold`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  i(u, {
                                    __fromCanvasComponent: !0,
                                    children: i(n, {
                                      children: i(`p`, {
                                        className: `framer-styles-preset-1u75rap`,
                                        "data-styles-preset": `qZYHjqVrz`,
                                        dir: `auto`,
                                        children: i(_, {
                                          href: {
                                            pathVariables: { btGpJvFlp: we },
                                            webPageId: `GW53l1Are`,
                                          },
                                          motionChild: !0,
                                          nodeId: `vLaFbXr2s`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `GW53l1Are`,
                                          smoothScroll: !1,
                                          children: i(s.a, {
                                            className: `framer-styles-preset-z5vi95`,
                                            "data-styles-preset": `O0kpMPYVt`,
                                            children: `Why Most Websites Feel Expensive — Even Before You Pay For Them`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-jdz1in`,
                                    "data-framer-name": `Link`,
                                    fonts: [`Inter`],
                                    text: w,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                            }),
                            i(`article`, {
                              className: `framer-u7cp4x`,
                              "data-framer-name": `Article`,
                              children: i(`div`, {
                                className: `framer-1wcdji0`,
                                "data-framer-name": `Container`,
                                children: o(`div`, {
                                  className: `framer-seekot`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    o(`div`, {
                                      className: `framer-1bgmffo`,
                                      "data-framer-name": `Top`,
                                      children: [
                                        i(`div`, {
                                          className: `framer-soxl1b`,
                                          "data-framer-name": `Pill`,
                                          children: i(y, {
                                            height: 29,
                                            y:
                                              (d?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              128 +
                                              105 +
                                              40 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                            children: i(v, {
                                              className: `framer-h3pm0o-container`,
                                              nodeId: `ldo8ca2I9`,
                                              scopeId: `GW53l1Are`,
                                              children: i(p, {
                                                breakpoint: k,
                                                overrides: {
                                                  avBKEpCeN: { variant: K(`RoXn7LgPt`) },
                                                  cuQV4v5MW: { variant: K(`RoXn7LgPt`) },
                                                },
                                                children: i(I, {
                                                  c8JjutPIf: Ie.AlH2wYsQg?.(E, l),
                                                  height: `100%`,
                                                  id: `ldo8ca2I9`,
                                                  layoutId: `ldo8ca2I9`,
                                                  uAEp1shrJ: `var(--token-8e5da108-ff57-4406-aa90-3784d3513777, rgb(245, 245, 245))`,
                                                  variant: K(`Qjhs5Lyem`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                        o(`div`, {
                                          className: `framer-1slyh27`,
                                          "data-framer-name": `Date + H1 + intro`,
                                          children: [
                                            i(`div`, {
                                              className: `framer-t988vw`,
                                              "data-framer-name": `Date + H1`,
                                              children: i(u, {
                                                __fromCanvasComponent: !0,
                                                children: i(n, {
                                                  children: i(`h2`, {
                                                    className: `framer-styles-preset-63r6z3`,
                                                    "data-styles-preset": `zWe8uO5eV`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-alignment": `center`,
                                                      "--framer-text-color": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                                    },
                                                    children: `Small changes, big impact: Sustainable habits for everyday living`,
                                                  }),
                                                }),
                                                className: `framer-l57zau`,
                                                effect: ct,
                                                fonts: [`Inter`],
                                                text: w,
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                            i(u, {
                                              __fromCanvasComponent: !0,
                                              children: i(n, {
                                                children: i(`h3`, {
                                                  className: `framer-styles-preset-1942lag`,
                                                  "data-styles-preset": `jajJzupWJ`,
                                                  dir: `auto`,
                                                  style: { "--framer-text-alignment": `center` },
                                                  children: `Many teams move fast on product but fall behind on design. This post breaks down why that happens, how it holds you back, and what to do instead if you want to stay clear and competitive.`,
                                                }),
                                              }),
                                              className: `framer-qs5vzz`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                        i(p, {
                                          breakpoint: k,
                                          overrides: {
                                            avBKEpCeN: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: h(
                                                  (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    105 +
                                                    40 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    162
                                                ),
                                                pixelHeight: 1412,
                                                pixelWidth: 836,
                                                sizes: `max(min(${d?.width || `100vw`}, 900px) - 64px, 1px)`,
                                                ...Y(C),
                                              },
                                            },
                                            cuQV4v5MW: {
                                              background: {
                                                alt: ``,
                                                fit: `fill`,
                                                loading: h(
                                                  (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    105 +
                                                    40 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    156
                                                ),
                                                pixelHeight: 1412,
                                                pixelWidth: 836,
                                                sizes: `max(min(${d?.width || `100vw`}, 900px) - 48px, 1px)`,
                                                ...Y(C),
                                              },
                                            },
                                          },
                                          children: i(x, {
                                            background: {
                                              alt: ``,
                                              fit: `fill`,
                                              loading: h(
                                                (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  105 +
                                                  40 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  156
                                              ),
                                              pixelHeight: 1412,
                                              pixelWidth: 836,
                                              sizes: `max(min(${d?.width || `100vw`}, 900px) - 64px, 1px)`,
                                              ...Y(C),
                                            },
                                            className: `framer-9dve5h`,
                                            "data-framer-name": `Image`,
                                          }),
                                        }),
                                      ],
                                    }),
                                    i(`div`, {
                                      className: `framer-h9dttk`,
                                      "data-framer-name": `Article`,
                                      children: i(`div`, {
                                        className: `framer-39w6cw`,
                                        "data-framer-name": `Text`,
                                        children: i(u, {
                                          __fromCanvasComponent: !0,
                                          children: D,
                                          className: `framer-1bndbka`,
                                          fonts: [`Inter`],
                                          stylesPresetsClassNames: {
                                            a: `framer-styles-preset-z5vi95`,
                                            blockquote: `framer-styles-preset-wdh6xt`,
                                            code: `framer-styles-preset-2whrdr`,
                                            h1: `framer-styles-preset-ul51j9`,
                                            h2: `framer-styles-preset-1n58d1u`,
                                            h5: `framer-styles-preset-1n2hlk7`,
                                            img: `framer-styles-preset-1ohma00`,
                                            p: `framer-styles-preset-1u75rap`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                        i(`section`, {
                          className: `framer-1c28yfh`,
                          "data-framer-name": `CTA`,
                          children: i(p, {
                            breakpoint: k,
                            overrides: {
                              avBKEpCeN: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1848,
                                  intrinsicWidth: 2366,
                                  loading: h((d?.y || 0) + 0 + 0 + 0 + 1279 + 32 + 0),
                                  pixelHeight: 1848,
                                  pixelWidth: 2366,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: d?.width || `100vw`,
                                  src: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png`,
                                  srcSet: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-6df931.png 512w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-c2c62b.png 1024w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI.png 2048w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png 2366w`,
                                },
                              },
                            },
                            children: o(x, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 1848,
                                intrinsicWidth: 2366,
                                loading: h((d?.y || 0) + 0 + 0 + 0 + 1273 + 32 + 0),
                                pixelHeight: 1848,
                                pixelWidth: 2366,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: d?.width || `100vw`,
                                src: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png`,
                                srcSet: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-6df931.png 512w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-c2c62b.png 1024w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI.png 2048w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png 2366w`,
                              },
                              className: `framer-8mixjh`,
                              "data-framer-name": `Container`,
                              children: [
                                o(`div`, {
                                  className: `framer-6bs78e`,
                                  "data-framer-name": `Header+ Form`,
                                  children: [
                                    i(u, {
                                      __fromCanvasComponent: !0,
                                      children: i(n, {
                                        children: i(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--framer-font-size": `20px`,
                                            "--framer-letter-spacing": `-0.05em`,
                                            "--framer-line-height": `1em`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `Subscribe to our newsletter for 10% off.`,
                                        }),
                                      }),
                                      className: `framer-1jcdgs3`,
                                      effect: X,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    i(ge, {
                                      action: `https://api.framer.com/forms/v1/forms/3fa987e1-c745-46ee-843d-fb0db6952be2/submit`,
                                      className: `framer-1a72acw`,
                                      nodeId: `Q6mBteeuX`,
                                      children: (e) =>
                                        o(ne, {
                                          children: [
                                            i(`label`, {
                                              className: `framer-12pp9u0`,
                                              "data-framer-name": `Email`,
                                              children: i(ye, {
                                                className: `framer-h1r53h`,
                                                inputName: `Email`,
                                                placeholder: `YOUR EMAIL ADDRESS`,
                                                required: !0,
                                                type: `email`,
                                              }),
                                            }),
                                            i(p, {
                                              breakpoint: k,
                                              overrides: {
                                                avBKEpCeN: {
                                                  y:
                                                    (d?.y || 0) +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    1279 +
                                                    32 +
                                                    0 +
                                                    0 +
                                                    145.5 +
                                                    0 +
                                                    112 +
                                                    0,
                                                },
                                              },
                                              children: i(y, {
                                                height: 25,
                                                y:
                                                  (d?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1273 +
                                                  32 +
                                                  0 +
                                                  0 +
                                                  145.5 +
                                                  0 +
                                                  112 +
                                                  0,
                                                children: i(v, {
                                                  className: `framer-1whswsf-container`,
                                                  nodeId: `CMIH6eyav`,
                                                  scopeId: `GW53l1Are`,
                                                  children: i(T, {
                                                    height: `100%`,
                                                    id: `CMIH6eyav`,
                                                    layoutId: `CMIH6eyav`,
                                                    style: { height: `100%` },
                                                    type: `submit`,
                                                    variant: lt(
                                                      e,
                                                      {
                                                        error: `FR5D4yuMj`,
                                                        incomplete: `c7sqOOdhc`,
                                                        pending: `RflMXf_z4`,
                                                        success: `iHv2yqCIN`,
                                                      },
                                                      K(`c7sqOOdhc`)
                                                    ),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                    }),
                                  ],
                                }),
                                i(u, {
                                  __fromCanvasComponent: !0,
                                  children: i(n, {
                                    children: i(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `12px`,
                                        "--framer-letter-spacing": `-0.05em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgba(255, 255, 255, 0.54)`,
                                      },
                                      children: `We never send spam.`,
                                    }),
                                  }),
                                  className: `framer-i5tjkf`,
                                  effect: X,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        }),
                      ],
                    }),
                    i(y, {
                      children: i(v, {
                        className: `framer-175gu3d-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: P,
                        nodeId: `zAQwI4Sx2`,
                        scopeId: `GW53l1Are`,
                        children: i(M, {
                          height: `100%`,
                          id: `zAQwI4Sx2`,
                          intensity: 10,
                          layoutId: `zAQwI4Sx2`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                i(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-vsUa6.framer-1s343ez, .framer-vsUa6 .framer-1s343ez { display: block; }`,
        `.framer-vsUa6.framer-15l3aqc { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-vsUa6 .framer-jc6m31 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-vsUa6 .framer-4z0qrh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 900px; padding: 128px 32px 20px 32px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-1gzue78 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: flex-start; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-vsUa6 .framer-1k8s28e { align-content: center; align-items: center; border-bottom-left-radius: 2px; border-bottom-right-radius: 2px; border-top-left-radius: 2px; border-top-right-radius: 2px; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-vsUa6 .framer-19kau92, .framer-vsUa6 .framer-1ews0h { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-vsUa6 .framer-25mccg-container, .framer-vsUa6 .framer-e1ajdh-container { flex: none; height: 12px; position: relative; width: 12px; }`,
        `.framer-vsUa6 .framer-jdz1in { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vsUa6 .framer-u7cp4x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 40px 0px 80px 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-1wcdji0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vsUa6 .framer-seekot { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-vsUa6 .framer-1bgmffo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-end; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-vsUa6 .framer-soxl1b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-h3pm0o-container, .framer-vsUa6 .framer-175gu3d-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-vsUa6 .framer-1slyh27 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: min-content; justify-content: center; max-width: 900px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-t988vw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-l57zau, .framer-vsUa6 .framer-qs5vzz { --framer-paragraph-spacing: 0px; --framer-text-wrap-override: none; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-9dve5h { aspect-ratio: 1.8933333333333333 / 1; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: var(--framer-aspect-ratio-supported, 442px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
        `.framer-vsUa6 .framer-h9dttk { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-39w6cw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-1bndbka { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 700px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vsUa6 .framer-1c28yfh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 32px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-8mixjh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 50vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-vsUa6 .framer-6bs78e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-vsUa6 .framer-1jcdgs3, .framer-vsUa6 .framer-i5tjkf { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-vsUa6 .framer-1a72acw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 400px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-vsUa6 .framer-12pp9u0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-vsUa6 .framer-h1r53h { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); --framer-input-border-left-width: 0px; --framer-input-border-right-width: 0px; --framer-input-border-style: solid; --framer-input-border-top-width: 0px; --framer-input-focused-border-color: #ffffff; --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-focused-transition: all 0.1s cubic-bezier(0,0,1,1) 0s; --framer-input-font-color: #ffffff; --framer-input-font-family: "Fragment Mono"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 12px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 0px; --framer-input-placeholder-color: rgba(255, 255, 255, 0.64); flex: none; height: 25px; position: relative; width: 296px; }`,
        `.framer-vsUa6 .framer-1whswsf-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
        ...C,
        ...D,
        ...je,
        ...P,
        ...A,
        ...Ze,
        ...He,
        ...Xe,
        ...Ue,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-vsUa6.framer-15l3aqc { width: 810px; } .framer-vsUa6 .framer-1wcdji0 { gap: 80px; } .framer-vsUa6 .framer-1slyh27 { gap: 24px; } .framer-vsUa6 .framer-9dve5h { height: var(--framer-aspect-ratio-supported, 394px); } .framer-vsUa6 .framer-h9dttk { gap: 60px; }}`,
        `@media (max-width: 809.98px) { .framer-vsUa6.framer-15l3aqc { width: 390px; } .framer-vsUa6 .framer-4z0qrh { padding: 128px 24px 20px 24px; } .framer-vsUa6 .framer-1k8s28e { align-content: flex-start; align-items: flex-start; } .framer-vsUa6 .framer-1bgmffo { gap: 30px; } .framer-vsUa6 .framer-1slyh27 { gap: 22px; } .framer-vsUa6 .framer-t988vw { gap: 14px; } .framer-vsUa6 .framer-9dve5h { height: var(--framer-aspect-ratio-supported, 181px); } .framer-vsUa6 .framer-h9dttk { gap: 36px; } .framer-vsUa6 .framer-39w6cw { gap: 24px; }}`,
      ],
      `framer-vsUa6`
    )),
    ($.displayName = `Journal`),
    ($.defaultProps = { height: 3134.5, width: 1200 }),
    l(
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
              cssFamilyName: `Fragment Mono`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Fragment Mono`,
              url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
              weight: `400`,
            },
          ],
        },
        ...L,
        ...z,
        ...B,
        ...H,
        ...m(w),
        ...m(O),
        ...m(Me),
        ...m(Oe),
        ...m(k),
        ...m($e),
        ...m(We),
        ...m(Qe),
        ...m(Ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          ve.get(Q(ce(t.pathVariables, `GW53l1Are`)), n).preload(),
          f(I, {}, t),
          f(T, {}, t),
        ]);
      },
    }),
    (ft = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerGW53l1Are`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1200`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"avBKEpCeN":{"layout":["fixed","auto"]},"cuQV4v5MW":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerContractVersion: `1`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `3134.5`,
            framerDisplayContentsDiv: `false`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ft as __FramerMetadata__, $ as default, U as queryParamNames };
//# sourceMappingURL=t-XOWetbWbZr1AY9DDF3xOUlJzjxhYC3AqGjv3O2a1A.Do5ZzWfG.mjs.map
