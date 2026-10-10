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
  v as ee,
} from "./react.CAGFp8w4.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.D9nDYnVb.mjs";
import {
  B as m,
  C as h,
  D as g,
  E as _,
  K as v,
  N as y,
  S as te,
  a as b,
  at as ne,
  ft as x,
  ht as S,
  i as C,
  j as w,
  l as T,
  lt as E,
  mt as D,
  o as O,
  pt as k,
  ut as A,
  vt as re,
  xt as j,
  y as M,
  z as N,
} from "./framer.yhOKXYuv.mjs";
import { a as P, i as F, n as I, o as L, r as ie, t as ae } from "./peANJhUp3.CwfrSljs.mjs";
import { n as oe, r as se } from "./gEMThqlDf.B0ibLEwd.mjs";
function R(e) {
  let {
    text: t = `404`,
    textColor: n,
    animationType: r = `wave`,
    font: i,
    letterSpacing: o = 0,
    style: s,
  } = e;
  k();
  let c = t.split(``);
  return a(`div`, {
    role: `region`,
    "aria-label": `404 Not Found Page`,
    tabIndex: 0,
    style: {
      ...s,
      width: `100%`,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      overflow: `hidden`,
      padding: 32,
      color: n,
      ...i,
    },
    children: a(`div`, {
      style: { display: `flex`, justifyContent: `center` },
      children: c.map((e, t) =>
        a(
          u.div,
          {
            custom: t,
            animate: { y: [0, -15, 0] },
            transition: { repeat: 1 / 0, duration: 2, delay: t * 0.2, ease: `easeInOut` },
            style: { lineHeight: 1, marginRight: t < c.length - 1 ? o : 0 },
            "aria-hidden": `true`,
            children: e,
          },
          t
        )
      ),
    }),
  });
}
var z = e(() => {
    (l(),
      v(),
      p(),
      g(R, {
        text: { type: O.String, title: `Text`, defaultValue: `404` },
        textColor: { type: O.Color, title: `Text Color`, defaultValue: `#333333` },
        letterSpacing: {
          type: O.Number,
          title: `Letter Gap`,
          defaultValue: 0,
          min: -100,
          max: 50,
          step: 1,
          unit: `px`,
        },
        font: {
          type: O.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: {
            fontSize: `120px`,
            variant: `Bold`,
            letterSpacing: `-0.01em`,
            lineHeight: `1em`,
          },
        },
      }),
      (R.displayName = `Animated 404`));
  }),
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $;
e(() => {
  (l(),
    v(),
    p(),
    n(),
    z(),
    L(),
    F(),
    oe(),
    (B = N(R)),
    (V = N(P)),
    (H = {
      C9k7_kFYK: `(min-width: 1440px)`,
      dDC8pL4Dx: `(min-width: 810px) and (max-width: 1439.98px)`,
      qB4zPAZ28: `(max-width: 809.98px)`,
    }),
    (U = []),
    (W = `framer-Vz62a`),
    (G = {
      C9k7_kFYK: `framer-v-j18c73`,
      dDC8pL4Dx: `framer-v-1m2qexi`,
      qB4zPAZ28: `framer-v-b48env`,
    }),
    (K = (e, t, n) => (e && t ? `position` : n)),
    (q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (J = { Desktop: `C9k7_kFYK`, Phone: `qB4zPAZ28`, Tablet: `dDC8pL4Dx` }),
    (Y = ({ value: e }) =>
      x()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `C9k7_kFYK`,
    })),
    (Z = j(
      o(function (e, n) {
        let o = r(null),
          l = n ?? o,
          p = ee(),
          { activeLocale: m, setLocale: g } = D(),
          _ = ne(),
          { style: v, className: y, layoutId: x, variant: O, ...k } = X(e);
        S(t(() => se({}, m), [m]));
        let [j, N] = A(O, H, !1),
          F = w(W, ae),
          I = s(T)?.isLayoutTemplate,
          L = K(I, !!s(d)?.transition?.layout);
        return (
          re(),
          E({}),
          a(T.Provider, {
            value: {
              activeVariantId: j,
              humanReadableVariantMap: J,
              primaryVariantId: `C9k7_kFYK`,
              variantClassNames: G,
            },
            children: c(f, {
              id: x ?? p,
              children: [
                a(Y, { value: `html body { background: rgb(0, 171, 225); }` }),
                a(u.div, {
                  ...k,
                  className: w(F, `framer-j18c73`, y),
                  ref: l,
                  style: { ...v },
                  children: a(u.div, {
                    className: `framer-2y7byp`,
                    "data-framer-name": `main`,
                    layout: L,
                    children: c(`div`, {
                      className: `framer-1na4r6n`,
                      children: [
                        a(C, {
                          children: a(b, {
                            className: `framer-zsvxne-container`,
                            "data-code-component-plugin-id": `84d4c1`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `uyNsTbLkl`,
                            scopeId: `gEMThqlDf`,
                            children: a(R, {
                              font: {
                                fontFamily: `"Berlin Sans FB Regular", "Berlin Sans FB Regular Placeholder", sans-serif`,
                                fontSize: `180px`,
                                fontStyle: `normal`,
                                fontWeight: 400,
                                letterSpacing: `-0.01em`,
                                lineHeight: `1em`,
                              },
                              height: `100%`,
                              id: `uyNsTbLkl`,
                              layoutId: `uyNsTbLkl`,
                              letterSpacing: 10,
                              style: { width: `100%` },
                              text: `404`,
                              textColor: `rgb(250, 250, 250)`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        c(`div`, {
                          className: `framer-hm6cb3`,
                          children: [
                            c(`div`, {
                              className: `framer-1ssg6wa`,
                              children: [
                                a(h, {
                                  __fromCanvasComponent: !0,
                                  children: a(i, {
                                    children: a(`h2`, {
                                      className: `framer-styles-preset-qs6dm5`,
                                      "data-styles-preset": `peANJhUp3`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `rgb(255, 255, 255)`,
                                      },
                                      children: `Page Not Found`,
                                    }),
                                  }),
                                  className: `framer-blbw0t`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(M, {
                                  breakpoint: j,
                                  overrides: {
                                    qB4zPAZ28: {
                                      children: a(i, {
                                        children: a(`p`, {
                                          dir: `auto`,
                                          style: {
                                            "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                            "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                            "--framer-font-size": `18px`,
                                            "--framer-font-weight": `600`,
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `rgb(255, 255, 255)`,
                                          },
                                          children: `The page you are looking for doesn't exist or another error has occured.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: a(h, {
                                    __fromCanvasComponent: !0,
                                    children: a(i, {
                                      children: a(`p`, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `Q1VTVE9NVjI7Um9kZ2VyIFRlc3QgU2VtaWJvbGQ=`,
                                          "--framer-font-family": `"Rodger Test Semibold", "Rodger Test Semibold Placeholder", sans-serif`,
                                          "--framer-font-size": `24px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `rgb(255, 255, 255)`,
                                        },
                                        children: `The page you are looking for doesn't exist or another error has occured.`,
                                      }),
                                    }),
                                    className: `framer-1rz3dsw`,
                                    fonts: [`CUSTOMV2;Rodger Test Semibold`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                            a(te, {
                              links: [
                                { href: { webPageId: `Jt77tlfGm` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Jt77tlfGm` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `Jt77tlfGm` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                a(M, {
                                  breakpoint: j,
                                  overrides: {
                                    qB4zPAZ28: { y: (_?.y || 0) + 0 + 0 + 0 + 0 + 529.5 + 0 + 202 },
                                  },
                                  children: a(C, {
                                    height: 69,
                                    y: (_?.y || 0) + 0 + 0 + 0 + 0 + 511.5 + 0 + 238,
                                    children: a(b, {
                                      className: `framer-1fllpte-container`,
                                      nodeId: `Xstj2DK8L`,
                                      scopeId: `gEMThqlDf`,
                                      children: a(M, {
                                        breakpoint: j,
                                        overrides: {
                                          dDC8pL4Dx: { RhThpS6xc: e[1], variant: q(`E69HO_QGe`) },
                                          qB4zPAZ28: { RhThpS6xc: e[2], variant: q(`E69HO_QGe`) },
                                        },
                                        children: a(P, {
                                          height: `100%`,
                                          id: `Xstj2DK8L`,
                                          Jt36NHN_f: `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5))`,
                                          layoutId: `Xstj2DK8L`,
                                          OfHRPOZED: `BACK TO HOME`,
                                          RhThpS6xc: e[0],
                                          RyAdtOSXK: `rgb(255, 255, 255)`,
                                          variant: q(`pa39K6aJp`),
                                          width: `100%`,
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
                }),
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Vz62a.framer-3lzh3y, .framer-Vz62a .framer-3lzh3y { display: block; }`,
        `.framer-Vz62a.framer-j18c73 { align-content: center; align-items: center; background-color: #00abe1; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1440px; }`,
        `.framer-Vz62a .framer-2y7byp { align-content: center; align-items: center; background-color: #fe2f81; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vz62a .framer-1na4r6n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; max-width: 1400px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-Vz62a .framer-zsvxne-container { flex: none; height: auto; position: relative; width: 400px; }`,
        `.framer-Vz62a .framer-hm6cb3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vz62a .framer-1ssg6wa { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Vz62a .framer-blbw0t, .framer-Vz62a .framer-1rz3dsw { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Vz62a .framer-1fllpte-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...I,
        `@media (min-width: 810px) and (max-width: 1439.98px) { .framer-Vz62a.framer-j18c73 { width: 810px; } .framer-Vz62a .framer-1na4r6n { max-width: 800px; }}`,
        `@media (max-width: 809.98px) { .framer-Vz62a.framer-j18c73 { width: 390px; } .framer-Vz62a .framer-1na4r6n { max-width: 400px; }}`,
      ],
      `framer-Vz62a`
    )),
    (Q = Z),
    (Z.displayName = `404`),
    (Z.defaultProps = { height: 800, width: 1440 }),
    _(
      Z,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Berlin Sans FB Regular`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Berlin Sans FB`,
              url: `../../assets/fonts/3d15JVmtyLZN0iNcDls5sfJ2P8.woff2`,
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
              cssFamilyName: `Rodger Test Semibold`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Rodger Test`,
              url: `../../assets/fonts/qIrlO9Uvv4OUyN9hielysbov2o.woff2`,
              weight: `600`,
            },
          ],
        },
        ...B,
        ...V,
        ...m(ie),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Z.loader = { load: (e, t) => (t.locale, Promise.allSettled([y(P, {}, t)])) }),
    ($ = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramergEMThqlDf`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `800`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1440`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"dDC8pL4Dx":{"layout":["fixed","auto"]},"qB4zPAZ28":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, U as queryParamNames };
//# sourceMappingURL=spNLlU6_JN9gfd-KfZ5aLl7_Lb82yn4izumIGce3uts.CFCAjN0M.mjs.map
