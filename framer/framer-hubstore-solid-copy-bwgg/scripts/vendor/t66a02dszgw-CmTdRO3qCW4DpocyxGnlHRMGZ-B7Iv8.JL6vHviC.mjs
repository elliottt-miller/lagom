import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as ee,
  I as n,
  L as r,
  j as te,
  l as i,
  s as a,
  u as o,
  v as s,
  x as ne,
} from "./react.ClsXD4bF.mjs";
import { r as re, t as c, w as l } from "./motion.ClyXVVeQ.mjs";
import {
  Ct as ie,
  Et as u,
  F as d,
  Mt as f,
  O as p,
  Ot as ae,
  S as m,
  W as h,
  Z as g,
  _t as _,
  f as oe,
  ft as v,
  gt as y,
  ht as se,
  j as b,
  pt as ce,
  q as le,
  v as ue,
  wt as de,
  yt as fe,
} from "./framer.CbUxDv78.mjs";
import { i as x, n as S, r as C, t as pe } from "./KKnW9Hd3v.TmuhifDy.mjs";
import { i as w, n as T, r as E, t as me } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as D, n as O, r as he, t as ge } from "./tEGb3dIPL.DmfZkyjB.mjs";
import { i as k, n as A, r as j, t as _e } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { i as M, n as N, r as P, t as F } from "./J8amzom6A.B1vaRlC_.mjs";
import { i as I, n as ve, r as ye, t as be } from "./uYUgOfNpa.CpQT0pAt.mjs";
import { i as xe, n as Se, r as Ce, t as we } from "./ZP459Pync.B8Xb2kUo.mjs";
import { i as Te, n as Ee, r as De, t as L } from "./LHPtOUqDF.DUJgW-uu.mjs";
import { i as Oe, r as ke } from "./SHak_BE6T.DOICfAY_.mjs";
import R, { t as Ae } from "./1qJmIYKP1l6xx0fF1qGOVv1vcEfe8rHK7AD1a7dJfxg.DbnEXFgS.mjs";
var z, B, V, H, U, W, G, K, q, J, Y, X, Z, Q, $;
e(() => {
  (a(),
    g(),
    c(),
    t(),
    ke(),
    k(),
    M(),
    x(),
    Te(),
    w(),
    D(),
    I(),
    xe(),
    Ae(),
    (z = f(l.div)),
    (B = f(p)),
    (V = {
      HM9x6FSul: `(min-width: 810px) and (max-width: 1199px)`,
      kXu8h1UF3: `(max-width: 809px)`,
      wSS8DxqWY: `(min-width: 1200px)`,
    }),
    (H = () => typeof document < `u`),
    (U = `framer-6ex1z`),
    (W = {
      HM9x6FSul: `framer-v-z6148b`,
      kXu8h1UF3: `framer-v-1x5f1h7`,
      wSS8DxqWY: `framer-v-1i9ksni`,
    }),
    (G = {
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
    (K = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (q = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (J = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Y = ({ value: e }) =>
      _()
        ? null
        : i(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (X = { Desktop: `wSS8DxqWY`, Phone: `kXu8h1UF3`, Tablet: `HM9x6FSul` }),
    (Z = ({ height: e, id: t, width: ee, ...n }) => ({
      ...n,
      variant: X[n.variant] ?? n.variant ?? `wSS8DxqWY`,
    })),
    (Q = ae(
      s(function (e, t) {
        let a = te(null),
          s = t ?? a,
          c = ne(),
          { activeLocale: f, setLocale: ae } = fe();
        v();
        let h = ce(),
          [g] = ie({
            from: { alias: `OWUmdnUQu`, data: Oe, type: `Collection` },
            select: [
              { collection: `OWUmdnUQu`, name: `RBwlvynaS`, type: `Identifier` },
              { collection: `OWUmdnUQu`, name: `Wkl4aKag8`, type: `Identifier` },
              { collection: `OWUmdnUQu`, name: `gMWfl7PNL`, type: `Identifier` },
            ],
            where: le(h, `OWUmdnUQu`),
          }),
          _ = (e) => {
            if (!g) throw new ue(`No data matches path variables: ${JSON.stringify(h)}`);
            return g[e];
          },
          {
            style: b,
            className: x,
            layoutId: S,
            variant: C,
            RBwlvynaS: w = _(`RBwlvynaS`) ?? ``,
            Wkl4aKag8: T = _(`Wkl4aKag8`) ?? ``,
            gMWfl7PNL: E = _(`gMWfl7PNL`) ?? ``,
            ...D
          } = Z(e);
        (n(() => {
          let e = R(g, f);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [g, f]),
          ee(() => {
            let e = R(g, f);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [g, f]));
        let [O, he] = y(C, V, !1),
          k = d(U, L, pe, we, be, _e, F, ge, me),
          A = de(`bMt8cRVIJ`),
          j = u(),
          M = q(w),
          N = q(T),
          P = q(E),
          I = (e) => !H() || O === `HM9x6FSul` || e;
        return (
          se({}),
          i(oe.Provider, {
            value: { primaryVariantId: `wSS8DxqWY`, variantClassNames: W },
            children: o(re, {
              id: S ?? c,
              children: [
                i(Y, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                i(l.div, {
                  ...D,
                  className: d(k, `framer-1i9ksni`, x),
                  ref: s,
                  style: { ...b },
                  children: i(`section`, {
                    className: `framer-1376dwn`,
                    "data-framer-name": `Terms Section`,
                    children: i(`div`, {
                      className: `framer-1t3ur5w`,
                      "data-framer-name": `Container`,
                      id: A,
                      ref: j(A),
                      children: o(`div`, {
                        className: `framer-1filqoi`,
                        "data-framer-name": `Content Wrapper`,
                        children: [
                          i(m, {
                            breakpoint: O,
                            overrides: {
                              HM9x6FSul: { animate: void 0, initial: void 0, optimized: void 0 },
                              kXu8h1UF3: { animate: void 0, initial: void 0, optimized: void 0 },
                            },
                            children: o(z, {
                              animate: G,
                              className: `framer-1u872c8`,
                              "data-framer-appear-id": `1u872c8`,
                              "data-framer-name": `Title Block`,
                              initial: K,
                              optimized: !0,
                              children: [
                                M &&
                                  i(p, {
                                    __fromCanvasComponent: !0,
                                    children: i(r, {
                                      children: i(`h3`, {
                                        className: `framer-styles-preset-fw0ea9`,
                                        "data-styles-preset": `LHPtOUqDF`,
                                        children: `Terms of Service `,
                                      }),
                                    }),
                                    className: `framer-1q5xfsm`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    text: w,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                o(`div`, {
                                  className: `framer-1c2v39g`,
                                  "data-framer-name": `Date Block`,
                                  children: [
                                    i(p, {
                                      __fromCanvasComponent: !0,
                                      children: i(r, {
                                        children: i(`p`, {
                                          className: `framer-styles-preset-1kyzkuu`,
                                          "data-styles-preset": `KKnW9Hd3v`,
                                          style: {
                                            "--framer-text-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                          },
                                          children: `Last Updated: `,
                                        }),
                                      }),
                                      className: `framer-19vvwio`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    N &&
                                      i(p, {
                                        __fromCanvasComponent: !0,
                                        children: i(r, {
                                          children: i(`p`, {
                                            className: `framer-styles-preset-1kyzkuu`,
                                            "data-styles-preset": `KKnW9Hd3v`,
                                            style: {
                                              "--framer-text-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                            },
                                            children: `24 Sep,2024`,
                                          }),
                                        }),
                                        className: `framer-1kw74bv`,
                                        "data-framer-name": `Date`,
                                        fonts: [`Inter`],
                                        text: T,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          I(P) &&
                            i(m, {
                              breakpoint: O,
                              overrides: {
                                HM9x6FSul: { animate: void 0, initial: void 0, optimized: void 0 },
                                kXu8h1UF3: { animate: void 0, initial: void 0, optimized: void 0 },
                              },
                              children: i(B, {
                                __fromCanvasComponent: !0,
                                animate: J,
                                children: E,
                                className: d(
                                  `framer-86bp5n`,
                                  !P && `hidden-1i9ksni`,
                                  !P && `hidden-1x5f1h7`
                                ),
                                "data-framer-appear-id": `86bp5n`,
                                "data-framer-name": `Content`,
                                fonts: [`Inter`],
                                initial: K,
                                optimized: !0,
                                stylesPresetsClassNames: {
                                  h1: `framer-styles-preset-dqr4hh`,
                                  h2: `framer-styles-preset-1mdyd08`,
                                  h3: `framer-styles-preset-fw0ea9`,
                                  h4: `framer-styles-preset-tf4vz6`,
                                  h5: `framer-styles-preset-12j0pqu`,
                                  h6: `framer-styles-preset-1aus3b5`,
                                  img: `framer-styles-preset-1nq51r1`,
                                  p: `framer-styles-preset-1n6rbyf`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                        ],
                      }),
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
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-6ex1z.framer-1913k2e, .framer-6ex1z .framer-1913k2e { display: block; }`,
        `.framer-6ex1z.framer-1i9ksni { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-6ex1z .framer-1376dwn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-6ex1z .framer-1t3ur5w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-6ex1z .framer-1filqoi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 856px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6ex1z .framer-1u872c8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-6ex1z .framer-1q5xfsm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6ex1z .framer-1c2v39g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6ex1z .framer-19vvwio, .framer-6ex1z .framer-1kw74bv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-6ex1z .framer-86bp5n { --framer-paragraph-spacing: 32px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6ex1z.framer-1i9ksni, .framer-6ex1z .framer-1376dwn, .framer-6ex1z .framer-1t3ur5w, .framer-6ex1z .framer-1filqoi, .framer-6ex1z .framer-1u872c8, .framer-6ex1z .framer-1c2v39g { gap: 0px; } .framer-6ex1z.framer-1i9ksni > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-6ex1z.framer-1i9ksni > :first-child, .framer-6ex1z .framer-1376dwn > :first-child, .framer-6ex1z .framer-1filqoi > :first-child, .framer-6ex1z .framer-1u872c8 > :first-child { margin-top: 0px; } .framer-6ex1z.framer-1i9ksni > :last-child, .framer-6ex1z .framer-1376dwn > :last-child, .framer-6ex1z .framer-1filqoi > :last-child, .framer-6ex1z .framer-1u872c8 > :last-child { margin-bottom: 0px; } .framer-6ex1z .framer-1376dwn > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-6ex1z .framer-1t3ur5w > *, .framer-6ex1z .framer-1c2v39g > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-6ex1z .framer-1t3ur5w > :first-child, .framer-6ex1z .framer-1c2v39g > :first-child { margin-left: 0px; } .framer-6ex1z .framer-1t3ur5w > :last-child, .framer-6ex1z .framer-1c2v39g > :last-child { margin-right: 0px; } .framer-6ex1z .framer-1filqoi > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-6ex1z .framer-1u872c8 > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }`,
        ...Ee,
        ...S,
        ...Se,
        ...ve,
        ...A,
        ...N,
        ...O,
        ...T,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-6ex1z.framer-1i9ksni { width: 810px; } .framer-6ex1z .framer-1376dwn { padding: 160px 0px 80px 0px; } .framer-6ex1z .framer-1t3ur5w { max-width: 990px; } .framer-6ex1z .framer-1filqoi { max-width: unset; } .framer-6ex1z .framer-1u872c8 { gap: 30px; will-change: unset; } .framer-6ex1z .framer-86bp5n { --framer-paragraph-spacing: 24px; will-change: unset; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6ex1z .framer-1u872c8 { gap: 0px; } .framer-6ex1z .framer-1u872c8 > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-6ex1z .framer-1u872c8 > :first-child { margin-top: 0px; } .framer-6ex1z .framer-1u872c8 > :last-child { margin-bottom: 0px; } }}`,
        `@media (max-width: 809px) { .framer-6ex1z.framer-1i9ksni { width: 390px; } .framer-6ex1z .framer-1376dwn { padding: 140px 0px 60px 0px; } .framer-6ex1z .framer-1t3ur5w { max-width: 620px; } .framer-6ex1z .framer-1filqoi { max-width: unset; } .framer-6ex1z .framer-1u872c8 { gap: 24px; will-change: unset; } .framer-6ex1z .framer-1kw74bv { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; } .framer-6ex1z .framer-86bp5n { --framer-paragraph-spacing: 16px; will-change: unset; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-6ex1z .framer-1u872c8 { gap: 0px; } .framer-6ex1z .framer-1u872c8 > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-6ex1z .framer-1u872c8 > :first-child { margin-top: 0px; } .framer-6ex1z .framer-1u872c8 > :last-child { margin-bottom: 0px; } }}`,
      ],
      `framer-6ex1z`
    )),
    (Q.displayName = `Terms and Privacy`),
    (Q.defaultProps = { height: 3290, width: 1200 }),
    b(
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
        ...h(De),
        ...h(C),
        ...h(Ce),
        ...h(ye),
        ...h(j),
        ...h(P),
        ...h(he),
        ...h(E),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($ = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerOWUmdnUQu`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HM9x6FSul":{"layout":["fixed","auto"]},"kXu8h1UF3":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `3290`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: ``,
            framerComponentViewportWidth: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"bMt8cRVIJ":{"pattern":":bMt8cRVIJ","name":"container"}}`,
            framerIntrinsicWidth: `1200`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default };
//# sourceMappingURL=t66a02dszgw-CmTdRO3qCW4DpocyxGnlHRMGZ-B7Iv8.JL6vHviC.mjs.map
