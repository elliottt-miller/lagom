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
  s as ee,
  w as l,
  y as te,
} from "./react.CWoGm2_e.mjs";
import { C as u, a as ne, r as d, t as f } from "./motion.DjW49AAR.mjs";
import {
  A as p,
  D as m,
  Et as h,
  H as g,
  P as _,
  St as v,
  U as y,
  X as b,
  _ as re,
  _t as ie,
  a as ae,
  ct as oe,
  dt as se,
  f as x,
  ft as ce,
  gt as le,
  i as ue,
  kt as S,
  mt as C,
  n as de,
  nt as fe,
  vt as pe,
  x as me,
} from "./framer.D9PtOJZM.mjs";
import { i as w, n as T, r as E, t as he } from "./qZYHjqVrz.Co-qUMV0.mjs";
import { a as D, c as O, i as ge, o as _e, r as ve, s as k } from "./shared-lib.Cln7NIgD.mjs";
import { i as ye, n as A, r as j, t as M } from "./jajJzupWJ.Cqa78jPq.mjs";
import { a as N, r as be } from "./XoJrXYEJ9.CmumPtIH.mjs";
import xe, { t as Se } from "./lNubTagQ-nAwMzew9ozJPXQQIaASLdUE4LiasPBj_q4.D4zGRa-P.mjs";
var P, F, I, L, R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (c(),
    b(),
    f(),
    l(),
    O(),
    be(),
    _e(),
    ye(),
    w(),
    Se(),
    (P = S(u.main)),
    (F = g(k)),
    (I = {
      JorU8n3J6: `(max-width: 809.98px)`,
      OUmSE1W_z: `(min-width: 1200px)`,
      qrIAike6H: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (L = []),
    (R = `framer-He2Na`),
    (z = {
      JorU8n3J6: `framer-v-12h526m`,
      OUmSE1W_z: `framer-v-vo2d0s`,
      qrIAike6H: `framer-v-6v5ph0`,
    }),
    (B = (e, t, n) => (e && t ? `position` : n)),
    (V = {
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
    (H = {
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
    (U = {
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
    (W = (e, t, n) => {
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
    (G = { dateStyle: `medium`, timeZone: `UTC` }),
    (K = (e, t) => W(e, G, t)),
    (q = () => ({
      from: { alias: `UTRwUmu_e`, data: N, type: `Collection` },
      select: [
        { collection: `UTRwUmu_e`, name: `FIH0wr47B`, type: `Identifier` },
        { collection: `UTRwUmu_e`, name: `HBdOixS0r`, type: `Identifier` },
        { collection: `UTRwUmu_e`, name: `utK29A0B_`, type: `Identifier` },
        { collection: `UTRwUmu_e`, name: `id`, type: `Identifier` },
      ],
    })),
    (J = ({ query: e, pageSize: t, children: n }) => n(v(e))),
    (Y = { Desktop: `OUmSE1W_z`, Phone: `JorU8n3J6`, Tablet: `qrIAike6H` }),
    (X = ({ value: e }) =>
      C()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `OUmSE1W_z`,
    })),
    (Q = h(
      o(function (e, o) {
        let c = t(null),
          l = o ?? c,
          f = te(),
          { activeLocale: p, setLocale: h } = ie();
        oe();
        let { style: g, className: v, layoutId: y, variant: b, ...S } = Z(e);
        pe(i(() => xe({}, p), [p]));
        let [C, fe] = ce(b, I, !1),
          w = _(R, ve, M, he),
          T = r(x)?.isLayoutTemplate,
          E = !!r(ne)?.transition?.layout,
          D = B(T, E),
          O = le();
        return (
          se({}),
          a(x.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Y,
              primaryVariantId: `OUmSE1W_z`,
              variantClassNames: z,
            },
            children: s(d, {
              id: y ?? f,
              children: [
                a(X, {
                  value: `html body { background: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)); }`,
                }),
                s(u.div, {
                  ...S,
                  className: _(w, `framer-vo2d0s`, v),
                  ref: l,
                  style: { ...g },
                  children: [
                    a(P, {
                      animate: V,
                      className: `framer-16fjajj`,
                      "data-framer-appear-id": `16fjajj`,
                      "data-framer-name": `Main`,
                      initial: H,
                      layout: D,
                      optimized: !0,
                      children: s(`article`, {
                        className: `framer-1wd3gyw`,
                        "data-framer-name": `Privacy Policy`,
                        children: [
                          a(`header`, {
                            className: `framer-1tr9717`,
                            "data-framer-name": `Header`,
                            children: a(`div`, {
                              className: `framer-6vvktu`,
                              "data-framer-name": `Container`,
                              children: a(`div`, {
                                className: `framer-mbgrof`,
                                "data-framer-name": `Wrapper`,
                                children: a(m, {
                                  __fromCanvasComponent: !0,
                                  children: a(n, {
                                    children: a(`h1`, {
                                      className: `framer-styles-preset-ul51j9`,
                                      "data-styles-preset": `hPRt9GJWZ`,
                                      dir: `auto`,
                                      children: `Our Policies`,
                                    }),
                                  }),
                                  className: `framer-53o0iq`,
                                  "data-framer-name": `Title`,
                                  effect: U,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                          s(`div`, {
                            className: `framer-jkbq9a`,
                            "data-framer-name": `Content`,
                            children: [
                              a(`div`, {
                                className: `framer-ikv32a`,
                                "data-framer-name": `Last Updated Date`,
                                children: a(m, {
                                  __fromCanvasComponent: !0,
                                  children: a(n, {
                                    children: a(`h3`, {
                                      className: `framer-styles-preset-1942lag`,
                                      "data-styles-preset": `jajJzupWJ`,
                                      dir: `auto`,
                                      children: `Last Updated: Jun 26, 2025`,
                                    }),
                                  }),
                                  className: `framer-1wedyc0`,
                                  "data-framer-name": `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              a(`div`, {
                                className: `framer-1gpjgrh`,
                                "data-framer-name": `Policies`,
                                children: a(`div`, {
                                  className: `framer-1w9oil5`,
                                  "data-framer-name": `Container`,
                                  children: a(`div`, {
                                    className: `framer-172wi9r`,
                                    "data-framer-name": `Legal`,
                                    children: a(de, {
                                      children: a(J, {
                                        query: q(),
                                        children: (e, t, r) =>
                                          a(ee, {
                                            children: e?.map(
                                              (
                                                { FIH0wr47B: e, HBdOixS0r: t, id: r, utK29A0B_: i },
                                                o
                                              ) => {
                                                ((e ??= ``), (t ??= ``));
                                                let c = K(i, O);
                                                return a(
                                                  d,
                                                  {
                                                    id: `UTRwUmu_e-${r}`,
                                                    children: a(me.Provider, {
                                                      value: { FIH0wr47B: e },
                                                      children: a(re, {
                                                        href: {
                                                          pathVariables: { FIH0wr47B: e },
                                                          webPageId: `UxmXEQ74p`,
                                                        },
                                                        motionChild: !0,
                                                        nodeId: `R4UoNNgCH`,
                                                        openInNewTab: !1,
                                                        scopeId: `miCzP0HfU`,
                                                        children: s(u.a, {
                                                          className: `framer-1mkukc3 framer-xm02ab`,
                                                          "data-framer-name": `Legal`,
                                                          children: [
                                                            a(m, {
                                                              __fromCanvasComponent: !0,
                                                              children: a(n, {
                                                                children: a(`h6`, {
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-letter-spacing": `-0.05em`,
                                                                  },
                                                                  children: `Refunds & Exchanges`,
                                                                }),
                                                              }),
                                                              className: `framer-1yzth1q`,
                                                              "data-framer-name": `Title`,
                                                              fonts: [`Inter`],
                                                              text: t,
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                            a(m, {
                                                              __fromCanvasComponent: !0,
                                                              children: a(n, {
                                                                children: a(`p`, {
                                                                  className: `framer-styles-preset-1u75rap`,
                                                                  "data-styles-preset": `qZYHjqVrz`,
                                                                  dir: `auto`,
                                                                  style: {
                                                                    "--framer-text-color": `rgb(136, 136, 136)`,
                                                                  },
                                                                  children: `Content`,
                                                                }),
                                                              }),
                                                              className: `framer-1rwknp3`,
                                                              "data-framer-name": `Last Updated`,
                                                              fonts: [`Inter`],
                                                              text: a(`time`, {
                                                                dateTime: i,
                                                                children: c,
                                                              }),
                                                              verticalAlignment: `top`,
                                                              withExternalLayout: !0,
                                                            }),
                                                          ],
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  r
                                                );
                                              }
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                    a(ue, {
                      children: a(ae, {
                        className: `framer-1vu5o61-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: D,
                        nodeId: `O8KFKz8QY`,
                        scopeId: `miCzP0HfU`,
                        children: a(k, {
                          height: `100%`,
                          id: `O8KFKz8QY`,
                          intensity: 10,
                          layoutId: `O8KFKz8QY`,
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
        `.framer-He2Na.framer-xm02ab, .framer-He2Na .framer-xm02ab { display: block; }`,
        `.framer-He2Na.framer-vo2d0s { align-content: center; align-items: center; background-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-He2Na .framer-16fjajj { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 32px 0px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-He2Na .framer-1wd3gyw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-He2Na .framer-1tr9717 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 132px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-He2Na .framer-6vvktu, .framer-He2Na .framer-mbgrof { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-He2Na .framer-53o0iq, .framer-He2Na .framer-1yzth1q, .framer-He2Na .framer-1rwknp3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-He2Na .framer-jkbq9a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 112px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-He2Na .framer-ikv32a { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-He2Na .framer-1wedyc0 { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-He2Na .framer-1gpjgrh { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-He2Na .framer-1w9oil5 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 630px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-He2Na .framer-172wi9r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-He2Na .framer-1mkukc3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-He2Na .framer-1vu5o61-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...ge,
        ...A,
        ...T,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-He2Na.framer-vo2d0s { width: 810px; } .framer-He2Na .framer-1w9oil5 { max-width: 840px; }}`,
        `@media (max-width: 809.98px) { .framer-He2Na.framer-vo2d0s { width: 390px; } .framer-He2Na .framer-16fjajj { padding: 0px 24px 0px 24px; } .framer-He2Na .framer-jkbq9a { gap: 12px; } .framer-He2Na .framer-1w9oil5 { max-width: unset; }}`,
      ],
      `framer-He2Na`
    )),
    (Q.displayName = `Legal`),
    (Q.defaultProps = { height: 1e3, width: 1200 }),
    p(
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
        ...F,
        ...y(D),
        ...y(j),
        ...y(E),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = fe.get(q(), n);
        return Promise.allSettled([r.preload()]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramermiCzP0HfU`,
          slots: [],
          annotations: {
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"qrIAike6H":{"layout":["fixed","auto"]},"JorU8n3J6":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicHeight: `1000`,
            framerIntrinsicWidth: `1200`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, L as queryParamNames };
//# sourceMappingURL=U6Y5SYPEPorZdVVcCW2E-pwlnE07zFxmHgDgL0kmDw4.BNXklI61.mjs.map
