import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  s as ee,
  v as te,
} from "./react.CAGFp8w4.mjs";
import { S as u, a as ne, r as d, t as f } from "./motion.D9nDYnVb.mjs";
import {
  $ as p,
  B as m,
  C as h,
  E as g,
  K as _,
  N as v,
  S as re,
  a as ie,
  at as ae,
  ft as y,
  gt as b,
  ht as oe,
  i as se,
  j as x,
  l as S,
  lt as ce,
  mt as le,
  n as ue,
  ut as de,
  v as fe,
  vt as pe,
  xt as C,
  y as w,
  z as T,
} from "./framer.yhOKXYuv.mjs";
import { i as me, n as E, r as D, t as O } from "./peANJhUp3.CwfrSljs.mjs";
import { a as k, i as A, n as he, o as j, r as M, t as N } from "./pMn1GYsaH.CCsmHROa.mjs";
import { i as P, r as F } from "./pzJ5xx19u.DE3UEQD5.mjs";
import { n as I, r as L } from "./WCxlBmStO.DosjniCc.mjs";
var R, z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (l(),
    _(),
    f(),
    n(),
    j(),
    F(),
    me(),
    A(),
    I(),
    (R = T(k)),
    (z = {
      jAoapGc50: `(min-width: 1440px)`,
      NOwkkZXKp: `(min-width: 810px) and (max-width: 1439.98px)`,
      R7Prmc6k2: `(max-width: 809.98px)`,
    }),
    (B = []),
    (V = `framer-M3mTX`),
    (H = {
      jAoapGc50: `framer-v-q1j7kz`,
      NOwkkZXKp: `framer-v-nc66w9`,
      R7Prmc6k2: `framer-v-vpl2zy`,
    }),
    (U = (e, t, n) => (e && t ? `position` : n)),
    (W = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (G = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (K = () => ({
      from: { alias: `yAMqSbURF`, data: P, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `yAMqSbURF`, name: `xzgpeGi2K`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `X_CMlkeFh`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `r_URlGY20`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `MsVBfQxXr`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `ka_F8xG9I`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `JA6qQ1w19`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `r3WyAmTow`, type: `Identifier` },
        { collection: `yAMqSbURF`, name: `id`, type: `Identifier` },
      ],
    })),
    (q = ({ query: e, pageSize: t, children: n }) => n(b(e))),
    (J = { Desktop: `jAoapGc50`, Phone: `R7Prmc6k2`, Tablet: `NOwkkZXKp` }),
    (Y = ({ value: e }) =>
      y()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `jAoapGc50`,
    })),
    (Z = C(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          f = te(),
          { activeLocale: p, setLocale: m } = le(),
          g = ae(),
          { style: _, className: v, layoutId: y, variant: b, ...C } = X(e);
        oe(t(() => L({}, p), [p]));
        let [T, me] = de(b, z, !1),
          E = x(V, O, N),
          D = s(S)?.isLayoutTemplate,
          A = U(D, !!s(ne)?.transition?.layout);
        return (
          pe(),
          ce({}),
          a(S.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: J,
              primaryVariantId: `jAoapGc50`,
              variantClassNames: H,
            },
            children: c(d, {
              id: y ?? f,
              children: [
                a(Y, { value: `html body { background: rgb(255, 246, 214); }` }),
                a(u.div, {
                  ...C,
                  className: x(E, `framer-q1j7kz`, v),
                  ref: l,
                  style: { ..._ },
                  children: c(u.div, {
                    className: `framer-1534dyf`,
                    "data-framer-name": `Main`,
                    layout: A,
                    children: [
                      c(`div`, {
                        className: `framer-dhnpg2`,
                        "data-framer-name": `Text`,
                        children: [
                          a(`div`, {
                            className: `framer-13ayi5u`,
                            "data-framer-name": `Heading`,
                            children: a(h, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`h2`, {
                                  className: `framer-styles-preset-qs6dm5`,
                                  "data-styles-preset": `peANJhUp3`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-94f1f73b-1649-4fd6-aeca-936a2a849189, rgb(255, 58, 36))`,
                                  },
                                  children: `EXPLORE THE BURST LINEUP`,
                                }),
                              }),
                              className: `framer-1wmi1qq`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          a(`div`, {
                            className: `framer-1oqe5hw`,
                            "data-framer-name": `Sub heading`,
                            children: a(h, {
                              __fromCanvasComponent: !0,
                              children: a(i, {
                                children: a(`p`, {
                                  className: `framer-styles-preset-1sa5jw2`,
                                  "data-styles-preset": `pMn1GYsaH`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-94f1f73b-1649-4fd6-aeca-936a2a849189, rgb(255, 58, 36))`,
                                  },
                                  children: `Bold flavors. Powerful energy. Find your perfect boost.`,
                                }),
                              }),
                              className: `framer-8v7lci`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                      a(`div`, {
                        className: `framer-1gieem4`,
                        "data-framer-name": `Products`,
                        children: a(`div`, {
                          className: `framer-22o8uu`,
                          children: a(ue, {
                            children: a(q, {
                              query: K(),
                              children: (e, t, n) =>
                                a(ee, {
                                  children: e?.map(
                                    (
                                      {
                                        id: e,
                                        JA6qQ1w19: t,
                                        ka_F8xG9I: n,
                                        MsVBfQxXr: r,
                                        r_URlGY20: i,
                                        r3WyAmTow: o,
                                        X_CMlkeFh: s,
                                        xzgpeGi2K: c,
                                      },
                                      l
                                    ) => (
                                      (s ??= ``),
                                      (i ??= ``),
                                      (t ??= `#09F`),
                                      (o ??= `#09F`),
                                      a(
                                        d,
                                        {
                                          id: `yAMqSbURF-${e}`,
                                          children: a(fe.Provider, {
                                            value: { r_URlGY20: i },
                                            children: a(`div`, {
                                              className: `framer-ngutb6`,
                                              children: a(re, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { r_URlGY20: i },
                                                      webPageId: `vDqSdXI3P`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { r_URlGY20: i },
                                                      webPageId: `vDqSdXI3P`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { r_URlGY20: i },
                                                      webPageId: `vDqSdXI3P`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (e) =>
                                                  a(w, {
                                                    breakpoint: T,
                                                    overrides: {
                                                      NOwkkZXKp: {
                                                        width: void 0,
                                                        y:
                                                          (g?.y || 0) +
                                                          0 +
                                                          0 +
                                                          160 +
                                                          224 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      R7Prmc6k2: {
                                                        width: `max(max(min(${g?.width || `100vw`} - 40px, 400px) - 40px, 50px), 1px)`,
                                                        y:
                                                          (g?.y || 0) +
                                                          0 +
                                                          0 +
                                                          120 +
                                                          224 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: a(se, {
                                                      height: 726,
                                                      width: `413px`,
                                                      y:
                                                        (g?.y || 0) +
                                                        0 +
                                                        0 +
                                                        160 +
                                                        244 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: a(ie, {
                                                        className: `framer-11c79os-container`,
                                                        nodeId: `kWU3mgxrv`,
                                                        scopeId: `WCxlBmStO`,
                                                        children: a(w, {
                                                          breakpoint: T,
                                                          overrides: {
                                                            NOwkkZXKp: {
                                                              variant: G(`wta07JwAV`),
                                                              WbXqoe5LM: e[1],
                                                            },
                                                            R7Prmc6k2: {
                                                              variant: G(`wta07JwAV`),
                                                              WbXqoe5LM: e[2],
                                                            },
                                                          },
                                                          children: a(k, {
                                                            FBLHQo0Rr: W(c),
                                                            height: `100%`,
                                                            id: `kWU3mgxrv`,
                                                            l8C0eFENG: W(n),
                                                            layoutId: `kWU3mgxrv`,
                                                            lplyZs_3H: t,
                                                            mcp4Al6x5: `Explosive flavor meets powerful energy to keep you moving, focused, and unstoppable.`,
                                                            style: { width: `100%` },
                                                            UcVM9nVk_: s,
                                                            variant: G(`MyY7527Es`),
                                                            WbXqoe5LM: e[0],
                                                            width: `100%`,
                                                            YoLT70GTJ: o,
                                                            zvGM69mDq: W(r),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                              }),
                                            }),
                                          }),
                                        },
                                        e
                                      )
                                    )
                                  ),
                                }),
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-M3mTX.framer-1aspq2l, .framer-M3mTX .framer-1aspq2l { display: block; }`,
        `.framer-M3mTX.framer-q1j7kz { align-content: center; align-items: center; background-color: #fff6d6; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-M3mTX .framer-1534dyf { align-content: center; align-items: center; background-color: #ffdeff; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 160px 60px 80px 60px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-dhnpg2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-13ayi5u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-1wmi1qq { flex: 1 0 0px; height: auto; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-M3mTX .framer-1oqe5hw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-8v7lci { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-M3mTX .framer-1gieem4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1400px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-22o8uu { display: grid; flex: none; gap: 40px 40px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-ngutb6 { align-content: center; align-items: center; align-self: start; border-top-left-radius: 16px; border-top-right-radius: 16px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-M3mTX .framer-11c79os-container { flex: none; height: auto; position: relative; width: 413px; }`,
        ...E,
        ...he,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-M3mTX.framer-q1j7kz { width: 810px; } .framer-M3mTX .framer-1534dyf { gap: 40px; padding: 160px 60px 60px 60px; } .framer-M3mTX .framer-8v7lci { max-width: 500px; } .framer-M3mTX .framer-1gieem4 { max-width: 900px; } .framer-M3mTX .framer-22o8uu { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-M3mTX .framer-11c79os-container { width: auto; }}`,
        `@media (max-width: 809.98px) { .framer-M3mTX.framer-q1j7kz { width: 390px; } .framer-M3mTX .framer-1534dyf { gap: 40px; padding: 120px 20px 40px 20px; } .framer-M3mTX .framer-dhnpg2 { max-width: 400px; } .framer-M3mTX .framer-1gieem4 { max-width: 400px; padding: 0px 20px 0px 20px; } .framer-M3mTX .framer-22o8uu { gap: 20px 40px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-M3mTX .framer-11c79os-container { flex: 1 0 0px; width: 1px; }}`,
      ],
      `framer-M3mTX`
    )),
    (Q = Z),
    (Z.displayName = `Product Page`),
    (Z.defaultProps = { height: 2286, width: 1440 }),
    g(
      Z,
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
        ...R,
        ...m(D),
        ...m(M),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Z.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = p.get(K(), n);
        return Promise.allSettled([
          r.preload(),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => v(k, {}, t)));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerWCxlBmStO`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `2286`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"NOwkkZXKp":{"layout":["fixed","auto"]},"R7Prmc6k2":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1440`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, B as queryParamNames };
//# sourceMappingURL=nfufx9FrqaFRxQ9U33wp0HZwcHv2TB_GmHU56Tv_Oi0.Dx7t1cAx.mjs.map
