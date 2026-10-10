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
import { P as c, i as re, o as ie, t as l } from "./motion.Bn11pmd7.mjs";
import {
  A as u,
  G as d,
  R as f,
  T as p,
  V as m,
  Z as h,
  at as ae,
  ct as oe,
  d as se,
  ft as ce,
  ht as le,
  it as ue,
  k as g,
  l as _,
  m as de,
  pt as fe,
  st as pe,
  ut as v,
  x as y,
  yt as b,
  z as me,
} from "./framer.CS_JK_Iv.mjs";
import { i as x, n as S, r as C, t as he } from "./ZckC7in5y.CvJcrBli.mjs";
import { i as w, n as T, r as E, t as ge } from "./cUaervyv9.Cq2R8eDj.mjs";
import {
  a as _e,
  c as D,
  d as ve,
  f as O,
  i as k,
  l as ye,
  n as A,
  o as j,
  r as M,
  s as N,
  t as P,
  u as be,
} from "./RI1oCWoIH.ohrf7dbZ.mjs";
import { i as xe, n as Se, r as F, t as Ce } from "./wmi7dzLRt.CHmFiX1M.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./wPUaRRY1K.B7o3ogx6.mjs";
import { i as Oe, n as ke } from "./hbTJSza8U.CM4gvI5D.mjs";
import Ae, { t as je } from "./KU9yMGI7a8TOiHyFBwp8EHYIpeMA24ub4hGAkYtgeCQ.BwaBkh6i.mjs";
var I,
  L,
  R,
  Me = e(() => {
    (d(),
      u.loadFonts([`GF;Fragment Mono-regular`]),
      (I = [
        {
          explicitInter: !0,
          fonts: [
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
      ]),
      (L = [
        `.framer-MG3tv .framer-styles-preset-f76khx:not(.rich-text-wrapper), .framer-MG3tv .framer-styles-preset-f76khx.rich-text-wrapper code { --framer-code-font-family: "Fragment Mono", monospace; --framer-code-font-style: normal; --framer-code-font-weight: 400; --framer-code-text-color: #333; --framer-font-size-scale: 1; background-color: rgba(0, 0, 0, 0.1); border-bottom-left-radius: 6px; border-bottom-right-radius: 6px; border-top-left-radius: 6px; border-top-right-radius: 6px; padding-bottom: 0.1em; padding-left: 0.2em; padding-right: 0.2em; padding-top: 0.1em; }`,
      ]),
      (R = `framer-MG3tv`));
  }),
  z,
  B,
  V,
  Ne = e(() => {
    (d(),
      u.loadFonts([]),
      (z = [{ explicitInter: !0, fonts: [] }]),
      (B = [
        `.framer-VVzWy .framer-styles-preset-bhslkv:not(.rich-text-wrapper), .framer-VVzWy .framer-styles-preset-bhslkv.rich-text-wrapper a { --framer-link-hover-text-decoration: underline; --framer-link-text-color: var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, #212121); }`,
      ]),
      (V = `framer-VVzWy`));
  }),
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
  (i(),
    d(),
    l(),
    t(),
    Oe(),
    Me(),
    w(),
    O(),
    Ne(),
    D(),
    k(),
    xe(),
    we(),
    x(),
    je(),
    (H = {
      dTsBwvxHb: `(max-width: 809.98px)`,
      kaPpikwhw: `(min-width: 810px) and (max-width: 1259.98px)`,
      sv5QjzXU2: `(min-width: 1260px)`,
    }),
    (U = []),
    (W = `framer-IVkTh`),
    (G = {
      dTsBwvxHb: `framer-v-32mtw8`,
      kaPpikwhw: `framer-v-1ihwgcr`,
      sv5QjzXU2: `framer-v-whh1y1`,
    }),
    (K = void 0),
    (q = (e, t, n) => (e && t ? `position` : n)),
    (J = { Desktop: `sv5QjzXU2`, Phone: `dTsBwvxHb`, Tablet: `kaPpikwhw` }),
    (Y = ({ value: e }) =>
      v()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = (e) => ({
      from: { alias: `zSKArY_ps`, data: ke, type: `Collection` },
      select: [
        { collection: `zSKArY_ps`, name: `ZXg7OaHZU`, type: `Identifier` },
        { collection: `zSKArY_ps`, name: `GLHodVpv0`, type: `Identifier` },
      ],
      where: e,
    })),
    (Z = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: J[r.variant] ?? r.variant ?? `sv5QjzXU2`,
    })),
    (Q = b(
      a(function (e, t) {
        let i = ne(null),
          a = t ?? i,
          l = te(),
          { activeLocale: u, setLocale: d } = ce(),
          f = ue(),
          p = ae(),
          [h] = le(X(m(p, `zSKArY_ps`))),
          v = (e) => {
            if (!h) throw new de(`No data matches path variables: ${JSON.stringify(p)}`);
            return h[e];
          },
          {
            style: b,
            className: x,
            layoutId: S,
            variant: C,
            ZXg7OaHZU: w = v(`ZXg7OaHZU`) ?? ``,
            GLHodVpv0: T = v(`GLHodVpv0`) ?? ``,
            ...E
          } = Z(e);
        fe(ee(() => Ae({ g1ufnXMvw: K, ZXg7OaHZU: w }, u), [w, K, u]));
        let [D, ve] = oe(C, H, !1),
          O = g(W, _e, he, ye, De, P, Ce, ge, V, R),
          k = r(_)?.isLayoutTemplate,
          A = !!r(ie)?.transition?.layout,
          j = q(k, A);
        return (
          pe({}),
          o(_.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: J,
              primaryVariantId: `sv5QjzXU2`,
              variantClassNames: G,
            },
            children: s(re, {
              id: S ?? l,
              children: [
                o(Y, {
                  value: `html body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                s(c.div, {
                  ...E,
                  className: g(O, `framer-whh1y1`, x),
                  ref: a,
                  style: { ...b },
                  children: [
                    s(se, {
                      as: `section`,
                      background: {
                        alt: `Image`,
                        fit: `fill`,
                        loading: me((f?.y || 0) + 0 + 0),
                        pixelHeight: 1600,
                        pixelWidth: 3200,
                        sizes: f?.width || `100vw`,
                        src: `https://framerusercontent.com/images/xIwdhjdOxqvj3MdvIc8GnAZTb9g.jpg?width=3200&height=1600`,
                        srcSet: `https://framerusercontent.com/images/xIwdhjdOxqvj3MdvIc8GnAZTb9g.jpg?scale-down-to=512&width=3200&height=1600 512w,https://framerusercontent.com/images/xIwdhjdOxqvj3MdvIc8GnAZTb9g.jpg?scale-down-to=1024&width=3200&height=1600 1024w,../../assets/images/xIwdhjdOxqvj3MdvIc8GnAZTb9g.jpg 2048w,https://framerusercontent.com/images/xIwdhjdOxqvj3MdvIc8GnAZTb9g.jpg?width=3200&height=1600 3200w`,
                      },
                      className: `framer-1y0582a`,
                      "data-framer-name": `Banner Section`,
                      layout: j,
                      children: [
                        o(`div`, {
                          className: `framer-1cvus3t`,
                          "data-framer-name": `Container`,
                          children: o(`div`, {
                            className: `framer-1tbkh4m`,
                            "data-framer-name": `Content`,
                            children: o(y, {
                              __fromCanvasComponent: !0,
                              children: o(n, {
                                children: o(`h1`, {
                                  className: `framer-styles-preset-u1do24`,
                                  "data-styles-preset": `MD8xx2tR5`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                  },
                                  children: `re`,
                                }),
                              }),
                              className: `framer-1p5s3j9`,
                              fonts: [`Inter`],
                              text: w,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        o(`div`, { className: `framer-6zo3gv`, "data-framer-name": `Overlay` }),
                      ],
                    }),
                    o(c.section, {
                      className: `framer-ak106v`,
                      "data-framer-name": `Review Section`,
                      layout: j,
                      children: o(`div`, {
                        className: `framer-6yqigl`,
                        "data-framer-name": `Container`,
                        children: o(`div`, {
                          className: `framer-hkojoq`,
                          "data-framer-name": `Content`,
                          children: o(y, {
                            __fromCanvasComponent: !0,
                            children: T,
                            className: `framer-ubdbbp`,
                            "data-framer-name": `We want every student to feel confident when joining our online solo course. Since this is a digital learning program with immediate access to all lessons, resources, and downloadable files, our refund rules are designed to ensure fairness while protecting the value of our content. Please read the policy below carefully before enrolling.`,
                            fonts: [`Inter`],
                            stylesPresetsClassNames: {
                              a: `framer-styles-preset-bhslkv`,
                              code: `framer-styles-preset-f76khx`,
                              h1: `framer-styles-preset-u1do24`,
                              h2: `framer-styles-preset-rsefcq`,
                              h3: `framer-styles-preset-y0pgu2`,
                              h4: `framer-styles-preset-1sq5yw0`,
                              h5: `framer-styles-preset-4n21a3`,
                              h6: `framer-styles-preset-1bk5v37`,
                              p: `framer-styles-preset-1gmq7go`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
        `.framer-IVkTh.framer-1sbwxen, .framer-IVkTh .framer-1sbwxen { display: block; }`,
        `.framer-IVkTh.framer-whh1y1 { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1260px; }`,
        `.framer-IVkTh .framer-1y0582a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 630px 30px 120px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-IVkTh .framer-1cvus3t, .framer-IVkTh .framer-6yqigl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-IVkTh .framer-1tbkh4m { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-IVkTh .framer-1p5s3j9, .framer-IVkTh .framer-ubdbbp { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-IVkTh .framer-6zo3gv { background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 100%); bottom: 0px; flex: none; height: 100%; left: 0px; opacity: 0.6; position: absolute; width: 100%; z-index: 1; }`,
        `.framer-IVkTh .framer-ak106v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 130px 30px 130px 30px; position: relative; width: 100%; }`,
        `.framer-IVkTh .framer-hkojoq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 800px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        ...j,
        ...S,
        ...be,
        ...Te,
        ...A,
        ...Se,
        ...T,
        ...B,
        ...L,
        `@media (min-width: 810px) and (max-width: 1259.98px) { .framer-IVkTh.framer-whh1y1 { width: 810px; } .framer-IVkTh .framer-1y0582a { padding: 210px 30px 100px 30px; } .framer-IVkTh .framer-6zo3gv { opacity: 0.7; } .framer-IVkTh .framer-ak106v { padding: 100px 30px 100px 30px; }}`,
        `@media (max-width: 809.98px) { .framer-IVkTh.framer-whh1y1 { width: 390px; } .framer-IVkTh .framer-1y0582a { padding: 160px 20px 80px 20px; } .framer-IVkTh .framer-1tbkh4m, .framer-IVkTh .framer-hkojoq { gap: 15px; } .framer-IVkTh .framer-6zo3gv { opacity: 0.8; } .framer-IVkTh .framer-ak106v { padding: 80px 20px 80px 20px; }}`,
      ],
      `framer-IVkTh`
    )),
    (Q.displayName = `Policy`),
    (Q.defaultProps = { height: 3570, width: 1260 }),
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
        ...f(N),
        ...f(C),
        ...f(ve),
        ...f(Ee),
        ...f(M),
        ...f(F),
        ...f(E),
        ...f(z),
        ...f(I),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([h.get(X(m(t.pathVariables, `zSKArY_ps`)), n).preload()]);
      },
    }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerzSKArY_ps`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1260`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `3570`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerComponentViewportWidth: `true`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"kaPpikwhw":{"layout":["fixed","auto"]},"dTsBwvxHb":{"layout":["fixed","auto"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, U as queryParamNames };
//# sourceMappingURL=Jwpaqmosqe3UJdo7yv04scIS2Q7fGP74iwR2olLMnyc.CKdRxpm_.mjs.map
