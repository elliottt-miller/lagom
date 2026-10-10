import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as ee,
  T as te,
  c as i,
  m as a,
  s as o,
  u as s,
  x as ne,
} from "./react.DJ2-MjhO.mjs";
import { P as c, i as l, o as u, t as d } from "./motion.Bn11pmd7.mjs";
import {
  G as f,
  L as p,
  R as m,
  T as h,
  _ as g,
  _t as _,
  b as v,
  ct as y,
  d as b,
  ft as x,
  it as re,
  j as S,
  k as C,
  l as w,
  n as T,
  pt as ie,
  r as E,
  st as ae,
  ut as D,
  x as O,
  yt as k,
  z as A,
} from "./framer.CS_JK_Iv.mjs";
import { n as j, t as M } from "./iYEILKxH1.Cwf9mGHP.mjs";
import { n as N, t as P } from "./SmoothScroll_Prod.D2EtnQ3p.mjs";
import { i as oe, n as F, r as I, t as L } from "./wmi7dzLRt.CHmFiX1M.mjs";
import R, { t as z } from "./rBqgxjcBXedQzxZ7h90RRAW5EHc8xiEjOCTzrRMy7Fk.DRvQVEob.mjs";
var B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (i(),
    f(),
    d(),
    t(),
    N(),
    j(),
    oe(),
    z(),
    (B = p(P)),
    (V = p(M)),
    (H = {
      AnciEdJ8l: `(min-width: 810px) and (max-width: 1259.98px)`,
      sb_LbL5dL: `(min-width: 1260px)`,
      Zo4roUTqC: `(max-width: 809.98px)`,
    }),
    (U = () => typeof document < `u`),
    (W = []),
    (G = `framer-k2AaB`),
    (K = {
      AnciEdJ8l: `framer-v-gqoqm8`,
      sb_LbL5dL: `framer-v-1difb4t`,
      Zo4roUTqC: `framer-v-9czotz`,
    }),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { Desktop: `sb_LbL5dL`, Phone: `Zo4roUTqC`, Tablet: `AnciEdJ8l` }),
    (X = ({ value: e }) =>
      D()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Y[r.variant] ?? r.variant ?? `sb_LbL5dL`,
    })),
    (Q = k(
      a(function (e, t) {
        let i = ne(null),
          a = t ?? i,
          d = te(),
          { activeLocale: f, setLocale: p } = x(),
          m = re(),
          { style: h, className: S, layoutId: D, variant: k, ...j } = Z(e);
        ie(ee(() => R({}, f), [f]));
        let [N, oe] = y(k, H, !1),
          F = C(G, L),
          I = () => !U() || ![`AnciEdJ8l`, `Zo4roUTqC`].includes(N),
          z = r(w)?.isLayoutTemplate,
          B = !!r(u)?.transition?.layout,
          V = q(z, B);
        return (
          _(),
          ae({}),
          o(w.Provider, {
            value: {
              activeVariantId: N,
              humanReadableVariantMap: Y,
              primaryVariantId: `sb_LbL5dL`,
              variantClassNames: K,
            },
            children: s(l, {
              id: D ?? d,
              children: [
                o(X, { value: `html body { background: rgb(255, 255, 255); }` }),
                s(c.div, {
                  ...j,
                  className: C(F, `framer-1difb4t`, S),
                  ref: a,
                  style: { ...h },
                  children: [
                    I() &&
                      o(T, {
                        children: o(E, {
                          className: `framer-zxiks0-container hidden-gqoqm8 hidden-9czotz`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layout: V,
                          nodeId: `e8wkl0fpq`,
                          scopeId: `R5WzJToo0`,
                          children: o(P, {
                            height: `100%`,
                            id: `e8wkl0fpq`,
                            intensity: 12,
                            layoutId: `e8wkl0fpq`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    o(g, {
                      breakpoint: N,
                      overrides: {
                        AnciEdJ8l: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: A((m?.y || 0) + 0 + 0),
                            pixelHeight: 970,
                            pixelWidth: 1600,
                            sizes: m?.width || `100vw`,
                            src: `../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg`,
                            srcSet: `https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=512&width=1600&height=970 512w,https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=1024&width=1600&height=970 1024w,../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg 1600w`,
                          },
                        },
                        Zo4roUTqC: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: A((m?.y || 0) + 0 + 0),
                            pixelHeight: 970,
                            pixelWidth: 1600,
                            sizes: m?.width || `100vw`,
                            src: `../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg`,
                            srcSet: `https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=512&width=1600&height=970 512w,https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=1024&width=1600&height=970 1024w,../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg 1600w`,
                          },
                        },
                      },
                      children: o(b, {
                        as: `section`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: A((m?.y || 0) + 0 + 200),
                          pixelHeight: 970,
                          pixelWidth: 1600,
                          sizes: m?.width || `100vw`,
                          src: `../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg`,
                          srcSet: `https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=512&width=1600&height=970 512w,https://framerusercontent.com/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg?scale-down-to=1024&width=1600&height=970 1024w,../../assets/images/BkKAVtk8PVaJzzFqjYnaa1tXYs.jpg 1600w`,
                        },
                        className: `framer-bt3ykd`,
                        "data-framer-name": `404 Section`,
                        layout: V,
                        children: o(`div`, {
                          className: `framer-ppd1qf`,
                          "data-framer-name": `Container`,
                          children: s(`div`, {
                            className: `framer-j7zcm2`,
                            "data-framer-name": `Content`,
                            children: [
                              s(`div`, {
                                className: `framer-1xl7hl1`,
                                "data-framer-name": `Image and Text`,
                                children: [
                                  o(g, {
                                    breakpoint: N,
                                    overrides: {
                                      AnciEdJ8l: {
                                        background: {
                                          alt: `404`,
                                          fit: `fill`,
                                          loading: A(
                                            (m?.y || 0) + 0 + 0 + 150 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                          ),
                                          pixelHeight: 834,
                                          pixelWidth: 1973,
                                          sizes: `567.1942px`,
                                          src: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834`,
                                          srcSet: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?scale-down-to=512&width=1973&height=834 512w,../../assets/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png 1024w,https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834 1973w`,
                                        },
                                      },
                                      Zo4roUTqC: {
                                        background: {
                                          alt: `404`,
                                          fit: `fill`,
                                          loading: A(
                                            (m?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                          ),
                                          pixelHeight: 834,
                                          pixelWidth: 1973,
                                          sizes: `min(${m?.width || `100vw`} - 40px, 1200px)`,
                                          src: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834`,
                                          srcSet: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?scale-down-to=512&width=1973&height=834 512w,../../assets/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png 1024w,https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834 1973w`,
                                        },
                                      },
                                    },
                                    children: o(b, {
                                      background: {
                                        alt: `404`,
                                        fit: `fill`,
                                        loading: A(
                                          (m?.y || 0) + 0 + 200 + 240 + 0 + 0 + 0 + 0 + 0 + 0 + 0
                                        ),
                                        pixelHeight: 834,
                                        pixelWidth: 1973,
                                        sizes: `657px`,
                                        src: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834`,
                                        srcSet: `https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?scale-down-to=512&width=1973&height=834 512w,../../assets/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png 1024w,https://framerusercontent.com/images/nXC1CuXyn5JNCV8PfhAwK4wzI.png?width=1973&height=834 1973w`,
                                      },
                                      className: `framer-1h59aji`,
                                    }),
                                  }),
                                  o(O, {
                                    __fromCanvasComponent: !0,
                                    children: o(n, {
                                      children: o(`h6`, {
                                        className: `framer-styles-preset-1bk5v37`,
                                        "data-styles-preset": `wmi7dzLRt`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-c3b2313b-4d28-4025-82d1-92dcec9a58fe, rgba(255, 255, 255, 0.8))`,
                                        },
                                        children: `Opps! looks like something is missing.`,
                                      }),
                                    }),
                                    className: `framer-wzgjts`,
                                    "data-framer-name": `Opps! looks like something is missing.`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(v, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  o(g, {
                                    breakpoint: N,
                                    overrides: {
                                      AnciEdJ8l: {
                                        y: (m?.y || 0) + 0 + 0 + 150 + 0 + 0 + 0 + 0 + 340,
                                      },
                                      Zo4roUTqC: {
                                        y: (m?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 0 + 368,
                                      },
                                    },
                                    children: o(T, {
                                      height: 52,
                                      y: (m?.y || 0) + 0 + 200 + 240 + 0 + 0 + 0 + 0 + 378,
                                      children: o(E, {
                                        className: `framer-owscdh-container`,
                                        nodeId: `iOoBv778m`,
                                        scopeId: `R5WzJToo0`,
                                        children: o(g, {
                                          breakpoint: N,
                                          overrides: {
                                            AnciEdJ8l: { FoLVmcAEo: e[1] },
                                            Zo4roUTqC: { FoLVmcAEo: e[2] },
                                          },
                                          children: o(M, {
                                            BtsQvUJh8: `Return Home`,
                                            FoLVmcAEo: e[0],
                                            height: `100%`,
                                            id: `iOoBv778m`,
                                            layoutId: `iOoBv778m`,
                                            variant: J(`JOAp0W7En`),
                                            width: `100%`,
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
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-k2AaB.framer-6wxby6, .framer-k2AaB .framer-6wxby6 { display: block; }`,
        `.framer-k2AaB.framer-1difb4t { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-k2AaB .framer-zxiks0-container, .framer-k2AaB .framer-owscdh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-k2AaB .framer-bt3ykd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 240px 30px 60px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-k2AaB .framer-ppd1qf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-k2AaB .framer-j7zcm2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-k2AaB .framer-1xl7hl1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-k2AaB .framer-1h59aji { flex: none; height: 278px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 657px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-k2AaB .framer-wzgjts { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...F,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-k2AaB.framer-1difb4t { width: 810px; } .framer-k2AaB .framer-bt3ykd { padding: 150px 30px 50px 30px; } .framer-k2AaB .framer-1h59aji { aspect-ratio: 2.3633093525179856 / 1; height: var(--framer-aspect-ratio-supported, 240px); width: 567px; }}`,
        `@media (max-width: 809.98px) { .framer-k2AaB.framer-1difb4t { width: 390px; } .framer-k2AaB .framer-bt3ykd { padding: 140px 20px 40px 20px; } .framer-k2AaB .framer-j7zcm2 { gap: 40px; } .framer-k2AaB .framer-1h59aji { aspect-ratio: 2.3633093525179856 / 1; height: var(--framer-aspect-ratio-supported, 85px); width: 100%; }}`,
      ],
      `framer-k2AaB`
    )),
    (Q.displayName = `Page`),
    (Q.defaultProps = { height: 1609, width: 1260 }),
    h(
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
        ...B,
        ...V,
        ...m(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([S(M, {}, t)])) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerR5WzJToo0`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerIntrinsicHeight: `1609`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"AnciEdJ8l":{"layout":["fixed","fixed"]},"Zo4roUTqC":{"layout":["fixed","fixed"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerDisplayContentsDiv: `false`,
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicWidth: `1260`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=be1hUTvFMQC9OYSBeJfF2f1ueYYK-0_t-9Mnf1BbPto.DESNU47b.mjs.map
