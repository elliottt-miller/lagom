import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as i,
  c as a,
  g as o,
  l as s,
  o as c,
  w as l,
  y as ee,
} from "./react.CWoGm2_e.mjs";
import { C as u, a as te, r as ne, t as d } from "./motion.DjW49AAR.mjs";
import {
  A as f,
  D as p,
  Et as re,
  H as m,
  K as ie,
  P as h,
  St as ae,
  U as g,
  X as _,
  _t as oe,
  a as se,
  ct as ce,
  dt as le,
  f as v,
  ft as ue,
  gt as de,
  i as fe,
  kt as y,
  lt as pe,
  mt as b,
  nt as x,
  v as me,
  vt as he,
} from "./framer.D9PtOJZM.mjs";
import { i as S, n as C, r as w, t as ge } from "./qZYHjqVrz.Co-qUMV0.mjs";
import { i as T, n as E, r as D, t as _e } from "./O0kpMPYVt.BCUpzF8V.mjs";
import { a as ve, c as O, i as k, o as A, r as ye, s as j } from "./shared-lib.Cln7NIgD.mjs";
import { i as M, n as N, r as P, t as be } from "./jajJzupWJ.Cqa78jPq.mjs";
import { a as xe, r as Se } from "./XoJrXYEJ9.CmumPtIH.mjs";
import {
  a as Ce,
  c as we,
  i as Te,
  n as Ee,
  o as De,
  r as Oe,
  s as ke,
  t as Ae,
} from "./nnEHFMr_u.DRPAPQwO.mjs";
import {
  a as je,
  c as Me,
  i as Ne,
  n as Pe,
  o as Fe,
  r as Ie,
  s as Le,
  t as Re,
} from "./nRMCPrQrv.DBUFJapj.mjs";
import ze, { t as Be } from "./Ixrw6w10S0egu9mp7RKl3vMueKBoW_tHbCepO0UEMLM.CJ1WlGeH.mjs";
var F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $, Ve;
e(() => {
  (c(),
    _(),
    d(),
    l(),
    O(),
    Se(),
    Me(),
    A(),
    we(),
    M(),
    Te(),
    Ne(),
    T(),
    S(),
    Be(),
    (F = y(u.main)),
    (I = m(j)),
    (L = {
      JVU8YODoZ: `(min-width: 810px) and (max-width: 1199.98px)`,
      NSnx4vq6D: `(min-width: 1200px)`,
      t3DMc6tou: `(max-width: 809.98px)`,
    }),
    (R = []),
    (z = `framer-PwSZj`),
    (B = {
      JVU8YODoZ: `framer-v-e9fkfh`,
      NSnx4vq6D: `framer-v-1u1amgx`,
      t3DMc6tou: `framer-v-ijpmxe`,
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
      transition: { delay: 0.3, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
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
      y: 80,
    }),
    (W = {
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
      startDelay: 0.5,
      tokenization: `character`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (G = (e, t, n) => {
      if (typeof e != `string`) return ``;
      let r = new Date(e);
      if (isNaN(r.getTime())) return ``;
      let i = `en-US`;
      try {
        return r.toLocaleString(n || i, t);
      } catch {
        return r.toLocaleString(i, t);
      }
    }),
    (K = { dateStyle: `medium`, timeZone: `UTC` }),
    (q = (e, t) => G(e, K, t)),
    (J = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? t + e
        : typeof e == `string`
          ? e
          : typeof t == `string`
            ? t
            : ``),
    (Y = { Desktop: `NSnx4vq6D`, Phone: `t3DMc6tou`, Tablet: `JVU8YODoZ` }),
    (X = ({ value: e }) =>
      b()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = (e) => ({
      from: { alias: `UxmXEQ74p`, data: xe, type: `Collection` },
      select: [
        { collection: `UxmXEQ74p`, name: `HBdOixS0r`, type: `Identifier` },
        { collection: `UxmXEQ74p`, name: `k3M4RSWtl`, type: `Identifier` },
        { collection: `UxmXEQ74p`, name: `utK29A0B_`, type: `Identifier` },
      ],
      where: e,
    })),
    (Q = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `NSnx4vq6D`,
    })),
    ($ = re(
      o(function (e, o) {
        let c = t(null),
          l = o ?? c,
          d = ee(),
          { activeLocale: f, setLocale: re } = oe();
        ce();
        let m = pe(),
          [g] = ae(Z(ie(m, `UxmXEQ74p`))),
          _ = (e) => {
            if (!g) throw new me(`No data matches path variables: ${JSON.stringify(m)}`);
            return g[e];
          },
          {
            style: y,
            className: b,
            layoutId: x,
            variant: S,
            HBdOixS0r: C = _(`HBdOixS0r`) ?? ``,
            k3M4RSWtl: w = _(`k3M4RSWtl`) ?? ``,
            utK29A0B_: T = _(`utK29A0B_`),
            ...E
          } = Q(e);
        he(i(() => ze({ HBdOixS0r: C }, f), [C, f]));
        let [D, ve] = ue(S, L, !1),
          O = h(z, ye, be, je, Ae, ge, _e, Re, Ce),
          k = r(v)?.isLayoutTemplate,
          A = !!r(te)?.transition?.layout,
          M = V(k, A),
          N = de(),
          P = J(q(T, N), `Last Updated: `);
        return (
          le({}),
          a(v.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Y,
              primaryVariantId: `NSnx4vq6D`,
              variantClassNames: B,
            },
            children: s(ne, {
              id: x ?? d,
              children: [
                a(X, {
                  value: `html body { background: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)); }`,
                }),
                s(u.div, {
                  ...E,
                  className: h(O, `framer-1u1amgx`, b),
                  ref: l,
                  style: { ...y },
                  children: [
                    s(F, {
                      animate: H,
                      className: `framer-xldt4e`,
                      "data-framer-appear-id": `xldt4e`,
                      "data-framer-name": `Main`,
                      initial: U,
                      layout: M,
                      optimized: !0,
                      children: [
                        a(`header`, {
                          className: `framer-1vxax7y`,
                          "data-framer-name": `Header`,
                          children: a(p, {
                            __fromCanvasComponent: !0,
                            children: a(n, {
                              children: a(`h1`, {
                                className: `framer-styles-preset-ul51j9`,
                                "data-styles-preset": `hPRt9GJWZ`,
                                dir: `auto`,
                                children: `Refunds & Exchanges`,
                              }),
                            }),
                            className: `framer-1rf2xl7`,
                            "data-framer-name": `Title`,
                            effect: W,
                            fonts: [`Inter`],
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                        s(`div`, {
                          className: `framer-iu6ihz`,
                          "data-framer-name": `Content`,
                          children: [
                            a(`div`, {
                              className: `framer-roor45`,
                              "data-framer-name": `Last Updated Date`,
                              children: a(p, {
                                __fromCanvasComponent: !0,
                                children: a(n, {
                                  children: a(`h3`, {
                                    className: `framer-styles-preset-1942lag`,
                                    "data-styles-preset": `jajJzupWJ`,
                                    dir: `auto`,
                                    children: `Last Updated: `,
                                  }),
                                }),
                                className: `framer-1ulk22s`,
                                "data-framer-name": `Text`,
                                fonts: [`Inter`],
                                text: a(`time`, { dateTime: T, children: P }),
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            a(`div`, {
                              className: `framer-xvo38t`,
                              "data-framer-name": `Text`,
                              children: a(`div`, {
                                className: `framer-15q2bc7`,
                                "data-framer-name": `Container`,
                                children: a(p, {
                                  __fromCanvasComponent: !0,
                                  children: w,
                                  className: `framer-7zyht9`,
                                  "data-framer-name": `Content`,
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
                      ],
                    }),
                    a(fe, {
                      children: a(se, {
                        className: `framer-1p9mtii-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: M,
                        nodeId: `eIlw966UC`,
                        scopeId: `UxmXEQ74p`,
                        children: a(j, {
                          height: `100%`,
                          id: `eIlw966UC`,
                          intensity: 10,
                          layoutId: `eIlw966UC`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-PwSZj.framer-xtq4ci, .framer-PwSZj .framer-xtq4ci { display: block; }`,
        `.framer-PwSZj.framer-1u1amgx { align-content: center; align-items: center; background-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-PwSZj .framer-xldt4e { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 32px 128px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-PwSZj .framer-1vxax7y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 132px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-PwSZj .framer-1rf2xl7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PwSZj .framer-iu6ihz { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 112px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-PwSZj .framer-roor45 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-PwSZj .framer-1ulk22s { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-PwSZj .framer-xvo38t { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-PwSZj .framer-15q2bc7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 630px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-PwSZj .framer-7zyht9 { --framer-paragraph-spacing: 24px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-PwSZj .framer-1p9mtii-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...k,
        ...N,
        ...Fe,
        ...Ee,
        ...C,
        ...E,
        ...Pe,
        ...De,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-PwSZj.framer-1u1amgx { width: 810px; } .framer-PwSZj .framer-iu6ihz { flex-direction: column; padding: 40px 0px 0px 0px; } .framer-PwSZj .framer-roor45, .framer-PwSZj .framer-xvo38t { flex: none; width: 100%; } .framer-PwSZj .framer-15q2bc7 { max-width: 840px; }}`,
        `@media (max-width: 809.98px) { .framer-PwSZj.framer-1u1amgx { width: 390px; } .framer-PwSZj .framer-xldt4e { padding: 0px 24px 128px 24px; } .framer-PwSZj .framer-iu6ihz { flex-direction: column; padding: 40px 0px 0px 0px; } .framer-PwSZj .framer-roor45, .framer-PwSZj .framer-xvo38t { flex: none; width: 100%; } .framer-PwSZj .framer-15q2bc7 { max-width: unset; }}`,
      ],
      `framer-PwSZj`
    )),
    ($.displayName = `Legal`),
    ($.defaultProps = { height: 2049.5, width: 1200 }),
    f(
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
        ...I,
        ...g(ve),
        ...g(P),
        ...g(Le),
        ...g(Oe),
        ...g(w),
        ...g(D),
        ...g(Ie),
        ...g(ke),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([x.get(Z(ie(t.pathVariables, `UxmXEQ74p`)), n).preload()]);
      },
    }),
    (Ve = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerUxmXEQ74p`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JVU8YODoZ":{"layout":["fixed","auto"]},"t3DMc6tou":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `2049.5`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ve as __FramerMetadata__, $ as default, R as queryParamNames };
//# sourceMappingURL=0F5EalVHDK_zZqIHl1OTOkaqwDPegNuH8u6gVvn20Mk.DQcRlesl.mjs.map
