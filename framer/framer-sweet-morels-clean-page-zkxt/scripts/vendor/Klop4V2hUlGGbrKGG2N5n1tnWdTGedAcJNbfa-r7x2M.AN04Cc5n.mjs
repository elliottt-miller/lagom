import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  g as a,
  j as o,
  k as ee,
  l as s,
  o as c,
  s as l,
  y as te,
} from "./react.BSDwOlon.mjs";
import { S as u, a as ne, r as re, t as d } from "./motion.CxF0nSu_.mjs";
import {
  Dt as f,
  E as p,
  F as ie,
  H as m,
  Mt as h,
  N as g,
  V as _,
  Y as v,
  a as ae,
  c as y,
  f as b,
  ft as x,
  ht as S,
  i as C,
  k as oe,
  l as w,
  lt as se,
  pt as ce,
  u as T,
  vt as le,
  x as E,
  yt as D,
} from "./framer.qahQ4u2X.mjs";
import { i as O, n as k, r as A, t as ue } from "./KRUEduuRo.CVOp9RB9.mjs";
import { n as j, t as M } from "./ZfH87FYIp.WwxwA01a.mjs";
import de, { t as fe } from "./FDHZqB0iXtNQmQMMnxyEpDaRdJdBHpL5CD2Pxehh64s.CNIQoi1v.mjs";
var N, P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    v(),
    d(),
    r(),
    j(),
    O(),
    fe(),
    (N = h(p)),
    (P = h(b)),
    (F = _(M)),
    (I = h(y)),
    (L = {
      qdw2RUhTM: `(min-width: 1200px)`,
      TZoNed8fH: `(min-width: 810px) and (max-width: 1199.98px)`,
      ZxWtE3Mo8: `(max-width: 809.98px)`,
    }),
    (R = []),
    (z = `framer-fi9yY`),
    (B = {
      qdw2RUhTM: `framer-v-ukeso9`,
      TZoNed8fH: `framer-v-98u3b3`,
      ZxWtE3Mo8: `framer-v-1m1xlqz`,
    }),
    (V = (e, t, n) => (e && t ? `position` : n)),
    (H = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.17, 1], type: `tween` },
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
      x: 0,
      y: 50,
    }),
    (W = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.17, 1], type: `tween` },
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
      x: -100,
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
      x: 100,
      y: 0,
    }),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (J = (e, t, n) => {
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
    (Y = { Desktop: `qdw2RUhTM`, Phone: `ZxWtE3Mo8`, Tablet: `TZoNed8fH` }),
    (X = ({ value: e }) =>
      S()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `qdw2RUhTM`,
    })),
    (Q = f(
      a(function (e, r) {
        let a = ee(null),
          c = r ?? a,
          d = te(),
          { activeLocale: f, setLocale: ie } = le(),
          m = se(),
          { style: h, className: _, layoutId: v, variant: y, ...b } = Z(e);
        D(n(() => de({}, f), [f]));
        let [S, oe] = ce(y, L, !1),
          O = g(z, ue),
          k = o(T)?.isLayoutTemplate,
          A = !!o(ne)?.transition?.layout,
          j = V(k, A);
        return (
          x({}),
          i(T.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: Y,
              primaryVariantId: `qdw2RUhTM`,
              variantClassNames: B,
            },
            children: s(re, {
              id: v ?? d,
              children: [
                i(X, {
                  value: `html body { background: var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)); }`,
                }),
                i(u.div, {
                  ...b,
                  className: g(O, `framer-ukeso9`, _),
                  ref: c,
                  style: { ...h },
                  children: i(u.section, {
                    className: `framer-1go038z`,
                    "data-framer-name": `Section: Hero`,
                    layout: j,
                    children: s(`div`, {
                      className: `framer-1h90spb`,
                      "data-framer-name": `Container`,
                      children: [
                        i(E, {
                          breakpoint: S,
                          overrides: {
                            ZxWtE3Mo8: {
                              children: i(t, {
                                children: i(`h1`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                    "--framer-font-family": `"Boldonse", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `33.803982891045386px`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-color": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: s(`span`, {
                                    style: { "--framer-font-size": `54.77497227715688px` },
                                    children: [`Sweet talk`, i(`br`, {}), `starts`],
                                  }),
                                }),
                              }),
                              viewBox: `0 0 350 153`,
                            },
                          },
                          children: i(N, {
                            __fromCanvasComponent: !0,
                            animate: H,
                            children: i(t, {
                              children: i(`h1`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                  "--framer-font-family": `"Boldonse", sans-serif`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                  "--framer-font-size": `120px`,
                                  "--framer-line-height": `140%`,
                                  "--framer-text-color": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                  "--framer-text-transform": `uppercase`,
                                },
                                children: `Sweet talk starts`,
                              }),
                            }),
                            className: `framer-suz2od`,
                            "data-framer-appear-id": `suz2od`,
                            fonts: [`GF;Boldonse-regular`],
                            initial: U,
                            optimized: !0,
                            verticalAlignment: `top`,
                            viewBox: `0 0 1279 168`,
                            withExternalLayout: !0,
                          }),
                        }),
                        s(`div`, {
                          className: `framer-in8lnq`,
                          "data-framer-name": `Contents`,
                          children: [
                            i(E, {
                              breakpoint: S,
                              overrides: {
                                TZoNed8fH: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1650,
                                    intrinsicWidth: 1320,
                                    pixelHeight: 1650,
                                    pixelWidth: 1320,
                                    sizes: `max((min(max(${m?.width || `100vw`}, 1px), 1920px) - 64px) * 0.4 - 32px, 1px)`,
                                    src: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png`,
                                    srcSet: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc.png 819w,../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png 1320w`,
                                  },
                                },
                                ZxWtE3Mo8: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1650,
                                    intrinsicWidth: 1320,
                                    pixelHeight: 1650,
                                    pixelWidth: 1320,
                                    sizes: `calc(min(${m?.width || `100vw`}, 1920px) - 40px)`,
                                    src: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png`,
                                    srcSet: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc.png 819w,../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png 1320w`,
                                  },
                                  initial: U,
                                },
                              },
                              children: i(P, {
                                animate: W,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1650,
                                  intrinsicWidth: 1320,
                                  pixelHeight: 1650,
                                  pixelWidth: 1320,
                                  sizes: `calc((min(max(${m?.width || `100vw`}, 1px), 1920px) - 80px) * 0.4)`,
                                  src: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png`,
                                  srcSet: `../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc.png 819w,../../assets/images/PPApiy1rra7zzAHWyYy3ElER4qc-47c5e8.png 1320w`,
                                },
                                className: `framer-xkc9rn`,
                                "data-framer-appear-id": `xkc9rn`,
                                fitImageDimension: `height`,
                                initial: G,
                                optimized: !0,
                              }),
                            }),
                            i(E, {
                              breakpoint: S,
                              overrides: { ZxWtE3Mo8: { initial: U } },
                              children: i(I, {
                                action: `https://api.framer.com/forms/v1/forms/7abf60d5-0cb4-4e6f-a218-1f4b2fece3c8/submit`,
                                animate: W,
                                className: `framer-1s638xv`,
                                "data-framer-appear-id": `1s638xv`,
                                initial: K,
                                nodeId: `QTeWBBgyx`,
                                optimized: !0,
                                submitTrackingId: ``,
                                children: (e) =>
                                  s(l, {
                                    children: [
                                      s(`div`, {
                                        className: `framer-1de179u`,
                                        "data-framer-name": `Placeholder`,
                                        children: [
                                          s(`div`, {
                                            className: `framer-1bznpbz`,
                                            children: [
                                              s(`label`, {
                                                className: `framer-1jqp7w4`,
                                                children: [
                                                  i(p, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(t, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-uis2r6`,
                                                        "data-styles-preset": `KRUEduuRo`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                                        },
                                                        children: `Name*`,
                                                      }),
                                                    }),
                                                    className: `framer-w5kzde`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  i(w, {
                                                    className: `framer-1lhz4wo`,
                                                    inputName: `Name`,
                                                    placeholder: `Enter your name`,
                                                    required: !0,
                                                    type: `text`,
                                                  }),
                                                ],
                                              }),
                                              s(`label`, {
                                                className: `framer-1o7qxng`,
                                                children: [
                                                  i(p, {
                                                    __fromCanvasComponent: !0,
                                                    children: i(t, {
                                                      children: i(`p`, {
                                                        className: `framer-styles-preset-uis2r6`,
                                                        "data-styles-preset": `KRUEduuRo`,
                                                        dir: `auto`,
                                                        style: {
                                                          "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                                        },
                                                        children: `Phone`,
                                                      }),
                                                    }),
                                                    className: `framer-1y0ardj`,
                                                    fonts: [`Inter`],
                                                    verticalAlignment: `top`,
                                                    withExternalLayout: !0,
                                                  }),
                                                  i(w, {
                                                    className: `framer-1ccfozu`,
                                                    inputName: `Phone`,
                                                    placeholder: `Enter your phone number`,
                                                    required: !1,
                                                    type: `tel`,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          s(`label`, {
                                            className: `framer-oam2j8`,
                                            children: [
                                              i(p, {
                                                __fromCanvasComponent: !0,
                                                children: i(t, {
                                                  children: i(`p`, {
                                                    className: `framer-styles-preset-uis2r6`,
                                                    "data-styles-preset": `KRUEduuRo`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                                    },
                                                    children: `Your digital address*`,
                                                  }),
                                                }),
                                                className: `framer-12hyvs2`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              i(w, {
                                                className: `framer-178hlpe`,
                                                inputName: `Email`,
                                                placeholder: `Enter your email`,
                                                required: !0,
                                                type: `email`,
                                              }),
                                            ],
                                          }),
                                          s(`label`, {
                                            className: `framer-vyjfmn`,
                                            children: [
                                              i(p, {
                                                __fromCanvasComponent: !0,
                                                children: i(t, {
                                                  children: i(`p`, {
                                                    className: `framer-styles-preset-uis2r6`,
                                                    "data-styles-preset": `KRUEduuRo`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                                    },
                                                    children: `Message`,
                                                  }),
                                                }),
                                                className: `framer-z04osk`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              i(w, {
                                                className: `framer-kgbnpy`,
                                                inputName: `Message`,
                                                placeholder: `Tell me your idea`,
                                                type: `textarea`,
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      i(E, {
                                        breakpoint: S,
                                        overrides: {
                                          TZoNed8fH: {
                                            width: `calc((min(max(${m?.width || `100vw`}, 1px), 1920px) - 64px) * 0.6)`,
                                          },
                                          ZxWtE3Mo8: {
                                            width: `calc(min(${m?.width || `100vw`}, 1920px) - 40px)`,
                                          },
                                        },
                                        children: i(C, {
                                          height: 56,
                                          width: `calc((min(max(${m?.width || `100vw`}, 1px), 1920px) - 80px) * 0.55)`,
                                          children: i(ae, {
                                            className: `framer-1xqr745-container`,
                                            nodeId: `oe9h9A6N7`,
                                            scopeId: `o6ceITeut`,
                                            children: i(M, {
                                              height: `100%`,
                                              id: `oe9h9A6N7`,
                                              layoutId: `oe9h9A6N7`,
                                              style: { width: `100%` },
                                              type: `submit`,
                                              variant: J(
                                                e,
                                                { pending: `WwnBHTRwy`, success: `HkMJJGQzK` },
                                                q(`M4jHlzzqe`)
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
                          ],
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
        `.framer-fi9yY.framer-xkjs5, .framer-fi9yY .framer-xkjs5 { display: block; }`,
        `.framer-fi9yY.framer-ukeso9 { align-content: center; align-items: center; background-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-fi9yY .framer-1go038z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-1h90spb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 150px 40px 150px 40px; position: relative; width: 1px; }`,
        `.framer-fi9yY .framer-suz2od { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-fi9yY .framer-in8lnq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-xkc9rn { flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 40%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-fi9yY .framer-1s638xv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 55%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-fi9yY .framer-1de179u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-1bznpbz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-1jqp7w4, .framer-fi9yY .framer-1o7qxng { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-fi9yY .framer-w5kzde, .framer-fi9yY .framer-1y0ardj, .framer-fi9yY .framer-12hyvs2, .framer-fi9yY .framer-z04osk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-fi9yY .framer-1lhz4wo, .framer-fi9yY .framer-1ccfozu, .framer-fi9yY .framer-178hlpe { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-9f934226-8073-4603-9f51-fca416659f29, #bfbfbf); --framer-input-border-left-width: 1px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, #171717); --framer-input-font-family: "Chillax"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 20px; --framer-input-placeholder-color: var(--token-24a3f659-fe6c-4365-b978-da49d1fb6a4a, #808080); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-oam2j8, .framer-fi9yY .framer-vyjfmn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-kgbnpy { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-9f934226-8073-4603-9f51-fca416659f29, #bfbfbf); --framer-input-border-left-width: 1px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-focused-border-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 1px; --framer-input-font-color: var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, #171717); --framer-input-font-family: "Chillax"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 20px; --framer-input-placeholder-color: var(--token-24a3f659-fe6c-4365-b978-da49d1fb6a4a, #808080); --framer-input-wrapper-height: auto; --framer-textarea-resize: vertical; flex: none; height: auto; min-height: 150px; position: relative; width: 100%; }`,
        `.framer-fi9yY .framer-1xqr745-container { flex: none; height: auto; position: relative; width: 100%; }`,
        ...k,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-fi9yY.framer-ukeso9 { width: 810px; } .framer-fi9yY .framer-1h90spb { gap: 80px; padding: 150px 32px 120px 32px; } .framer-fi9yY .framer-in8lnq { gap: 32px; justify-content: flex-start; } .framer-fi9yY .framer-xkc9rn { flex: 1 0 0px; width: 1px; } .framer-fi9yY .framer-1s638xv { gap: 32px; width: 60%; } .framer-fi9yY .framer-1de179u { gap: 16px; } .framer-fi9yY .framer-1bznpbz { flex-direction: column; gap: 16px; } .framer-fi9yY .framer-1jqp7w4, .framer-fi9yY .framer-1o7qxng { flex: none; width: 100%; } .framer-fi9yY .framer-1lhz4wo, .framer-fi9yY .framer-1ccfozu, .framer-fi9yY .framer-178hlpe, .framer-fi9yY .framer-kgbnpy { --framer-input-font-size: 14px; }}`,
        `@media (max-width: 809.98px) { .framer-fi9yY.framer-ukeso9 { width: 390px; } .framer-fi9yY .framer-1go038z { flex-direction: column; } .framer-fi9yY .framer-1h90spb { flex: none; gap: 60px; padding: 150px 20px 100px 20px; width: 100%; } .framer-fi9yY .framer-in8lnq { flex-direction: column; gap: 32px; justify-content: flex-start; } .framer-fi9yY .framer-xkc9rn { order: 1; width: 100%; } .framer-fi9yY .framer-1s638xv { gap: 20px; order: 0; width: 100%; } .framer-fi9yY .framer-1de179u { gap: 16px; } .framer-fi9yY .framer-1bznpbz { flex-direction: column; gap: 16px; } .framer-fi9yY .framer-1jqp7w4, .framer-fi9yY .framer-1o7qxng { flex: none; gap: 4px; width: 100%; } .framer-fi9yY .framer-1lhz4wo, .framer-fi9yY .framer-1ccfozu, .framer-fi9yY .framer-178hlpe, .framer-fi9yY .framer-kgbnpy { --framer-input-font-size: 14px; } .framer-fi9yY .framer-oam2j8, .framer-fi9yY .framer-vyjfmn { gap: 4px; }}`,
      ],
      `framer-fi9yY`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1537, width: 1200 }),
    oe(
      Q,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Boldonse`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Boldonse`,
              url: `../../assets/fonts/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2`,
              weight: `400`,
            },
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
              cssFamilyName: `Chillax`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `Chillax`,
              url: `../../assets/misc/XESIRBQU62YFBC7YQZI6D2NT5CNZ4PPU.woff2`,
              weight: `400`,
            },
          ],
        },
        ...F,
        ...m(A),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([ie(M, {}, t)])) }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `Framero6ceITeut`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1537`,
            framerResponsiveScreen: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"TZoNed8fH":{"layout":["fixed","fixed"]},"ZxWtE3Mo8":{"layout":["fixed","fixed"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerAutoSizeImages: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, R as queryParamNames };
//# sourceMappingURL=Klop4V2hUlGGbrKGG2N5n1tnWdTGedAcJNbfa-r7x2M.AN04Cc5n.mjs.map
