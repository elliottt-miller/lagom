import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  I as r,
  j as i,
  l as a,
  s as o,
  u as s,
  v as c,
  x as l,
} from "./react.ClsXD4bF.mjs";
import { r as u, t as d, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  D as p,
  F as m,
  G as h,
  Mt as g,
  Ot as _,
  S as v,
  Tt as y,
  U as b,
  Z as x,
  _t as S,
  a as C,
  f as w,
  ft as T,
  gt as E,
  ht as D,
  i as O,
  j as k,
  m as A,
  wt as j,
  yt as M,
} from "./framer.CbUxDv78.mjs";
import { n as N, t as P } from "./t9wa225Yz.GkMvtcH4.mjs";
import F, { t as I } from "./ndLggDZqGtgM7uuPztaq63TV46v5YFy5sn6nEQ98F-Y.DIi3afKd.mjs";
var L, R, z, B, V, H, U, W, G, K, q, J;
e(() => {
  (o(),
    x(),
    d(),
    t(),
    N(),
    I(),
    (L = g(A)),
    (R = b(P)),
    (z = {
      dO3aCBI0e: `(max-width: 809px)`,
      jyQQ8lljN: `(min-width: 810px) and (max-width: 1199px)`,
      tYkeucO0J: `(min-width: 1200px)`,
    }),
    (B = `framer-hcBU6`),
    (V = {
      dO3aCBI0e: `framer-v-qpxhic`,
      jyQQ8lljN: `framer-v-s8l1p6`,
      tYkeucO0J: `framer-v-19ikr6h`,
    }),
    (H = {
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
    (U = {
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
    (W = ({ value: e }) =>
      S()
        ? null
        : a(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (G = { Desktop: `tYkeucO0J`, Phone: `dO3aCBI0e`, Tablet: `jyQQ8lljN` }),
    (K = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: G[r.variant] ?? r.variant ?? `tYkeucO0J`,
    })),
    (q = _(
      c(function (e, t) {
        let o = i(null),
          c = t ?? o,
          d = l(),
          { activeLocale: g, setLocale: _ } = M(),
          b = T(),
          { style: x, className: S, layoutId: k, variant: A, ...N } = K(e);
        (r(() => {
          let e = F(void 0, g);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, g]),
          n(() => {
            let e = F(void 0, g);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, g]));
        let [I, R] = E(A, z, !1),
          G = m(B),
          q = j(`agj0fU20x`),
          J = i(null);
        return (
          y(),
          D({}),
          a(w.Provider, {
            value: { primaryVariantId: `tYkeucO0J`, variantClassNames: V },
            children: s(u, {
              id: k ?? d,
              children: [
                a(W, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                a(f.div, {
                  ...N,
                  className: m(G, `framer-19ikr6h`, S),
                  ref: c,
                  style: { ...x },
                  children: a(`section`, {
                    className: `framer-lv7m1t`,
                    "data-framer-name": `404 Section`,
                    children: s(`div`, {
                      className: `framer-ihkhxt`,
                      "data-framer-name": `Container`,
                      id: q,
                      ref: J,
                      children: [
                        a(v, {
                          breakpoint: I,
                          overrides: {
                            dO3aCBI0e: {
                              background: {
                                alt: `404 Image`,
                                fit: `fill`,
                                loading: h((b?.y || 0) + 0 + 0 + 140 + 76 + 0 + 0),
                                pixelHeight: 1722,
                                pixelWidth: 1929,
                                sizes: `calc((min(${b?.width || `100vw`}, 620px) - 40px) * 0.9)`,
                                src: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png`,
                                srcSet: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png?scale-down-to=512 512w,../../assets/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1024w,https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1929w`,
                              },
                            },
                            jyQQ8lljN: {
                              background: {
                                alt: `404 Image`,
                                fit: `fill`,
                                loading: h((b?.y || 0) + 0 + 0 + 160 + 56 + 0 + 0),
                                pixelHeight: 1722,
                                pixelWidth: 1929,
                                sizes: `calc((min(${b?.width || `100vw`}, 990px) - 40px) * 0.6)`,
                                src: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png`,
                                srcSet: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png?scale-down-to=512 512w,../../assets/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1024w,https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1929w`,
                              },
                            },
                          },
                          children: a(L, {
                            animate: H,
                            background: {
                              alt: `404 Image`,
                              fit: `fill`,
                              loading: h((b?.y || 0) + 0 + 0 + 192 + 0 + 0 + 0),
                              pixelHeight: 1722,
                              pixelWidth: 1929,
                              sizes: `calc((min(${b?.width || `100vw`}, 1320px) - 40px) * 0.5023)`,
                              src: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png`,
                              srcSet: `https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png?scale-down-to=512 512w,../../assets/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1024w,https://framerusercontent.com/images/FiOGy1MAeTdhCoSGTz3kmYUkrU.png 1929w`,
                            },
                            className: `framer-11d7zkd`,
                            "data-framer-appear-id": `11d7zkd`,
                            initial: U,
                            optimized: !0,
                          }),
                        }),
                        a(p, {
                          links: [
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            a(v, {
                              breakpoint: I,
                              overrides: {
                                dO3aCBI0e: { y: (b?.y || 0) + 0 + 0 + 140 + 76 + 0 + 604 },
                                jyQQ8lljN: { y: (b?.y || 0) + 0 + 0 + 160 + 56 + 0 + 604 },
                              },
                              children: a(O, {
                                height: 44,
                                y: (b?.y || 0) + 0 + 0 + 192 + 0 + 0 + 622,
                                children: a(C, {
                                  className: `framer-18tpsq8-container`,
                                  nodeId: `x_mmDZyLw`,
                                  scopeId: `LNHCZ6DuG`,
                                  children: a(v, {
                                    breakpoint: I,
                                    overrides: {
                                      dO3aCBI0e: { ReFOSYdYI: e[2], variant: `pqCw2VZ9U` },
                                      jyQQ8lljN: { ReFOSYdYI: e[1], variant: `pqCw2VZ9U` },
                                    },
                                    children: a(P, {
                                      height: `100%`,
                                      id: `x_mmDZyLw`,
                                      layoutId: `x_mmDZyLw`,
                                      ReFOSYdYI: e[0],
                                      variant: `WGUYcWd5y`,
                                      width: `100%`,
                                      xjkQsCprR: !1,
                                      Yp279F9q1: `Back to home`,
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
                a(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-hcBU6.framer-u6m4q, .framer-hcBU6 .framer-u6m4q { display: block; }`,
        `.framer-hcBU6.framer-19ikr6h { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-hcBU6 .framer-lv7m1t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-hcBU6 .framer-ihkhxt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-hcBU6 .framer-11d7zkd { aspect-ratio: 1.1202090592334495 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 520px); overflow: visible; position: relative; width: 50%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-hcBU6 .framer-18tpsq8-container { flex: none; height: auto; position: relative; width: auto; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hcBU6.framer-19ikr6h, .framer-hcBU6 .framer-lv7m1t, .framer-hcBU6 .framer-ihkhxt { gap: 0px; } .framer-hcBU6.framer-19ikr6h > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-hcBU6.framer-19ikr6h > :first-child, .framer-hcBU6 .framer-lv7m1t > :first-child, .framer-hcBU6 .framer-ihkhxt > :first-child { margin-top: 0px; } .framer-hcBU6.framer-19ikr6h > :last-child, .framer-hcBU6 .framer-lv7m1t > :last-child, .framer-hcBU6 .framer-ihkhxt > :last-child { margin-bottom: 0px; } .framer-hcBU6 .framer-lv7m1t > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-hcBU6 .framer-ihkhxt > * { margin: 0px; margin-bottom: calc(48px / 2); margin-top: calc(48px / 2); } }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-hcBU6.framer-19ikr6h { width: 810px; } .framer-hcBU6 .framer-lv7m1t { height: 100vh; padding: 160px 0px 80px 0px; } .framer-hcBU6 .framer-ihkhxt { gap: 30px; max-width: 990px; } .framer-hcBU6 .framer-11d7zkd { height: var(--framer-aspect-ratio-supported, 412px); width: 60%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hcBU6 .framer-ihkhxt { gap: 0px; } .framer-hcBU6 .framer-ihkhxt > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-hcBU6 .framer-ihkhxt > :first-child { margin-top: 0px; } .framer-hcBU6 .framer-ihkhxt > :last-child { margin-bottom: 0px; } }}`,
        `@media (max-width: 809px) { .framer-hcBU6.framer-19ikr6h { width: 390px; } .framer-hcBU6 .framer-lv7m1t { height: 100vh; padding: 140px 0px 60px 0px; } .framer-hcBU6 .framer-ihkhxt { gap: 30px; max-width: 620px; } .framer-hcBU6 .framer-11d7zkd { height: var(--framer-aspect-ratio-supported, 179px); width: 90%; } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-hcBU6 .framer-ihkhxt { gap: 0px; } .framer-hcBU6 .framer-ihkhxt > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-hcBU6 .framer-ihkhxt > :first-child { margin-top: 0px; } .framer-hcBU6 .framer-ihkhxt > :last-child { margin-bottom: 0px; } }}`,
      ],
      `framer-hcBU6`
    )),
    (q.displayName = `Contact Us`),
    (q.defaultProps = { height: 1489, width: 1200 }),
    k(q, [{ explicitInter: !0, fonts: [] }, ...R], { supportsExplicitInterCodegen: !0 }),
    (J = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerLNHCZ6DuG`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"jyQQ8lljN":{"layout":["fixed","auto"]},"dO3aCBI0e":{"layout":["fixed","auto"]}}}`,
            framerScrollSections: `{"agj0fU20x":{"pattern":":agj0fU20x","name":"container"}}`,
            framerImmutableVariables: `true`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: ``,
            framerComponentViewportWidth: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicWidth: `1200`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `1489`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { J as __FramerMetadata__, q as default };
//# sourceMappingURL=acPKIHxkFZaUNv6Qx1C4P_i7fBSybVsA2hauztNatFY.D_sPsfkH.mjs.map
