import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  E as r,
  H as i,
  L as a,
  N as o,
  P as s,
  R as ee,
  S as c,
  c as l,
  h as u,
  j as d,
  m as f,
  s as p,
  u as m,
  x as h,
  y as g,
} from "./react.BtSUcPAM.mjs";
import { P as _, i as v, o as y, t as b } from "./motion.B_UOAosx.mjs";
import {
  A as x,
  D as S,
  Ft as C,
  G as w,
  I as T,
  L as E,
  Lt as te,
  M as ne,
  N as D,
  O,
  Pt as k,
  Q as A,
  R as j,
  Rt as re,
  Tt as ie,
  W as M,
  g as ae,
  ht as N,
  i as P,
  jt as oe,
  o as F,
} from "./framer.DuFjdl15.mjs";
import { n as se, t as ce } from "./uMfPNtWsK.Ef5pNhkD.mjs";
import { n as le, t as ue } from "./uXshcXf0K.STxmH728.mjs";
import { a as I, i as L, n as R, o as de, r as z, t as B } from "./jqlnmWM57.B2NfWqcv.mjs";
import { n as fe, t as V } from "./xPaHsKAuL.BjgDwkPt.mjs";
var H,
  U,
  W,
  G,
  pe = e(() => {
    (A(),
      E.loadFonts([
        `FS;General Sans-variable`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
      ]),
      (H = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (U = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: H,
              weight: `400`,
            },
          ],
        },
      ]),
      (W = [
        `.framer-PVIfl .framer-styles-preset-1w68sh2:not(.rich-text-wrapper), .framer-PVIfl .framer-styles-preset-1w68sh2.rich-text-wrapper h3 { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 450; --framer-font-variation-axes-bold: "wght" 450; --framer-font-variation-axes-bold-italic: "wght" 450; --framer-font-variation-axes-italic: "wght" 450; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.3em; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (G = `framer-PVIfl`));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var q,
  me,
  J,
  Y,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  Se,
  Ce,
  we,
  X,
  Te = e(() => {
    (l(),
      A(),
      b(),
      n(),
      L(),
      pe(),
      se(),
      le(),
      fe(),
      (q = M(V)),
      (me = re(te(_.div))),
      (J = [`emhr9oPWM`, `LEK2sdhNy`]),
      (Y = `framer-DCSyc`),
      (he = { emhr9oPWM: `framer-v-16zyqnz`, LEK2sdhNy: `framer-v-1buuszo` }),
      (ge = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.4, ease: [0.45, 0, 0.55, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (_e = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 30,
      }),
      (ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ye = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (be = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(y.Provider, { value: i, children: t });
      }),
      (xe = { "Empty Product": `LEK2sdhNy`, "Empty Wishlist": `emhr9oPWM` }),
      (Se = _.create(a)),
      (Ce = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: xe[r.variant] ?? r.variant ?? `emhr9oPWM`,
      })),
      (we = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        f(function (e, t) {
          let n = c(null),
            i = t ?? n,
            o = r(),
            { activeLocale: s, setLocale: ee } = ie(),
            l = N(),
            { style: u, className: d, layoutId: f, variant: h, ...g } = Ce(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: C,
              gestureHandlers: w,
              gestureVariant: E,
              isLoading: te,
              setGestureState: ne,
              setVariant: D,
              variants: A,
            } = k({
              cycleOrder: J,
              defaultVariant: `emhr9oPWM`,
              ref: i,
              variant: h,
              variantClassNames: he,
            }),
            j = we(e, A),
            re = T(Y, G, B);
          return (
            oe(),
            p(v, {
              id: f ?? o,
              children: p(Se, {
                animate: A,
                initial: !1,
                children: p(be, {
                  value: ve,
                  children: p(me, {
                    ...g,
                    ...w,
                    __framer__presenceAnimate: ge,
                    __framer__presenceInitial: _e,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    className: T(re, `framer-16zyqnz`, d, b),
                    "data-framer-appear-id": `16zyqnz`,
                    "data-framer-name": `Empty Wishlist`,
                    layoutDependency: j,
                    layoutId: `emhr9oPWM`,
                    optimized: !0,
                    ref: i,
                    style: { backgroundColor: `rgb(255, 255, 255)`, ...u },
                    ...K({ LEK2sdhNy: { "data-framer-name": `Empty Product` } }, y, E),
                    children: m(_.div, {
                      className: `framer-tavwy3`,
                      "data-framer-name": `Wrap`,
                      layoutDependency: j,
                      layoutId: `lCnaFPPWH`,
                      children: [
                        p(ae, {
                          animated: !0,
                          className: `framer-mxdq0z`,
                          Component: ce,
                          layoutDependency: j,
                          layoutId: `RhxO4thnQ`,
                          style: {
                            "--d1m4u3": 1.2,
                            "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          },
                          ...K({ LEK2sdhNy: { Component: ue } }, y, E),
                        }),
                        m(_.div, {
                          className: `framer-albe35`,
                          "data-framer-name": `Wrap`,
                          layoutDependency: j,
                          layoutId: `X7UiVmBlP`,
                          children: [
                            p(O, {
                              __fromCanvasComponent: !0,
                              children: p(a, {
                                children: p(_.h3, {
                                  className: `framer-styles-preset-1w68sh2`,
                                  "data-styles-preset": `XzDT4tHG3`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Your wishlist is empty`,
                                }),
                              }),
                              className: `framer-6ki3u6`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `hTsfjn7Rr`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...K(
                                {
                                  LEK2sdhNy: {
                                    children: p(a, {
                                      children: p(_.h3, {
                                        className: `framer-styles-preset-1w68sh2`,
                                        "data-styles-preset": `XzDT4tHG3`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `No products found`,
                                      }),
                                    }),
                                  },
                                },
                                y,
                                E
                              ),
                            }),
                            p(O, {
                              __fromCanvasComponent: !0,
                              children: p(a, {
                                children: p(_.p, {
                                  className: `framer-styles-preset-hhy7lj`,
                                  "data-styles-preset": `jqlnmWM57`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Found something you like? Save it to your wishlist and keep all your favorite products in one place until you’re ready to purchase.`,
                                }),
                              }),
                              className: `framer-l0koxa`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `TtVgnwnEF`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...K(
                                {
                                  LEK2sdhNy: {
                                    children: p(a, {
                                      children: p(_.p, {
                                        className: `framer-styles-preset-hhy7lj`,
                                        "data-styles-preset": `jqlnmWM57`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Try another search term or explore our latest collection.`,
                                      }),
                                    }),
                                  },
                                },
                                y,
                                E
                              ),
                            }),
                          ],
                        }),
                        p(S, {
                          links: [
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                            { href: { webPageId: `augiA20Il` }, implicitPathVariables: void 0 },
                          ],
                          children: (e) =>
                            p(P, {
                              height: 39,
                              y:
                                (l?.y || 0) +
                                48 +
                                (((l?.height || 373) - 96 - 334.6) / 2 + 0 + 0) +
                                0 +
                                295.6,
                              ...K(
                                {
                                  LEK2sdhNy: {
                                    y:
                                      (l?.y || 0) +
                                      48 +
                                      (((l?.height || 354) - 96 - 334.6) / 2 + 0 + 0) +
                                      0 +
                                      295.6,
                                  },
                                },
                                y,
                                E
                              ),
                              children: p(x, {
                                className: `framer-1ubm3ae-container`,
                                "data-framer-name": `Shop Now Button`,
                                layoutDependency: j,
                                layoutId: `ZWeDMP2rL-container`,
                                name: `Shop Now Button`,
                                nodeId: `ZWeDMP2rL`,
                                rendersWithMotion: !0,
                                scopeId: `EknRkK7yI`,
                                children: p(V, {
                                  cM24uPpbD: !1,
                                  height: `100%`,
                                  id: `ZWeDMP2rL`,
                                  layoutId: `ZWeDMP2rL`,
                                  name: `Shop Now Button`,
                                  variant: ye(`TY6QPpYqQ`),
                                  width: `100%`,
                                  XhybYdcoB: `Shop Now`,
                                  zTMMog7f6: e[0],
                                  ...K({ LEK2sdhNy: { zTMMog7f6: e[1] } }, y, E),
                                }),
                              }),
                            }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-DCSyc.framer-10erzhy, .framer-DCSyc .framer-10erzhy { display: block; }`,
          `.framer-DCSyc.framer-16zyqnz { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 48px 28px 48px 28px; position: relative; width: 781px; }`,
          `.framer-DCSyc .framer-tavwy3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-DCSyc .framer-mxdq0z { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 100px); position: relative; width: 100px; }`,
          `.framer-DCSyc .framer-albe35 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-DCSyc .framer-6ki3u6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DCSyc .framer-l0koxa { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-DCSyc .framer-1ubm3ae-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...W,
          ...R,
        ],
        `framer-DCSyc`
      )),
      (X.displayName = `Empty State`),
      (X.defaultProps = { height: 373, width: 781 }),
      D(X, {
        variant: {
          options: [`emhr9oPWM`, `LEK2sdhNy`],
          optionTitles: [`Empty Wishlist`, `Empty Product`],
          title: `Variant`,
          type: F.Enum,
        },
      }),
      ne(
        X,
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
          ...q,
          ...w(U),
          ...w(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([j(V, {}, t)])) }));
  });
function Z(e) {
  let {
      DropdownVisual: t,
      relevanceText: n = `Relevance`,
      titleAscText: r = `A-Z`,
      titleDescText: a = `Z-A`,
      priceAscText: o = `Price (lowest first)`,
      priceDescText: l = `Price (highest first)`,
      newestText: f = `Newest`,
      bestSellingText: _ = `Best Selling`,
      defaultSort: v = `relevance`,
    } = e,
    y = c(null),
    [b, x] = g(v),
    S = () => {
      if (y.current) {
        y.current.focus();
        let e = new MouseEvent(`mousedown`, { bubbles: !0, cancelable: !0, view: i });
        y.current.dispatchEvent(e);
      }
    },
    C = s(
      () =>
        [
          { value: `relevance`, text: n },
          { value: `title_asc`, text: r },
          { value: `title_desc`, text: a },
          { value: `price_asc`, text: o },
          { value: `price_desc`, text: l },
          { value: `newest`, text: f },
          { value: `best_selling`, text: _ },
        ].filter((e) => e.text),
      [n, r, a, o, l, f, _]
    ),
    w = d(() => C.find((e) => e.value === b)?.text || n, [b, C, n]),
    T = (e) => {
      if (!e || typeof e != `object`) return e;
      if (Array.isArray(e)) return e.map((e) => T(e));
      if (!u(e)) return e;
      let { children: t, ...n } = e.props;
      if (e.type?.displayName?.includes(`Text`)) {
        let t = (e.props.text || ``).replace(/{{param}}/g, w());
        return ee(e, { ...n, text: t });
      }
      let r = t;
      return (
        t &&
          (typeof t == `string`
            ? (r = t.replace(/{{param}}/g, w()))
            : (u(t) || Array.isArray(t)) && (r = T(t))),
        ee(e, { ...n, children: r })
      );
    },
    E = d((e) => {
      let t = e.target.value;
      (x(t), i !== void 0 && sessionStorage.setItem(`sortBy`, t));
      let n;
      switch (t) {
        case `relevance`:
          n = { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
          break;
        case `title_asc`:
          n = { type: `name`, sortBy: `name`, sortDirection: `aToZ` };
          break;
        case `title_desc`:
          n = { type: `name`, sortBy: `name`, sortDirection: `zToA` };
          break;
        case `price_asc`:
          n = { type: `price`, sortBy: `price`, sortDirection: `lowToHigh` };
          break;
        case `price_desc`:
          n = { type: `price`, sortBy: `price`, sortDirection: `highToLow` };
          break;
        case `newest`:
          n = { type: `created`, sortBy: `created`, sortDirection: `newest` };
          break;
        case `best_selling`:
          n = { type: `best-selling`, sortBy: `best-selling`, sortDirection: null };
          break;
      }
      if (i !== void 0) {
        let e = new URL(i.location.href);
        (e.searchParams.set(`sort`, t), i.history.pushState({ sortConfig: n }, ``, e.toString()));
      }
      document.dispatchEvent(new CustomEvent(`product-sort-change`, { detail: n }));
    }, []);
  return (
    h(() => {
      if (i === void 0) return;
      let e = () => {
        let e = new URLSearchParams(i.location.search).get(`sort`);
        if (e && C.some((t) => t.value === e)) (x(e), sessionStorage.setItem(`sortBy`, e));
        else {
          let e = sessionStorage.getItem(`sortBy`);
          if (e && C.some((t) => t.value === e)) {
            x(e);
            let t = new URL(i.location.href);
            (t.searchParams.set(`sort`, e), i.history.pushState({ sort: e }, ``, t.toString()));
          }
        }
      };
      return (
        e(),
        i.addEventListener(`popstate`, e),
        () => {
          i.removeEventListener(`popstate`, e);
        }
      );
    }, [C]),
    m(`div`, {
      style: { position: `relative`, width: `100%`, height: `100%`, cursor: `pointer` },
      onClick: S,
      children: [
        p(`div`, {
          style: { width: `100%`, height: `100%`, pointerEvents: `none` },
          children: T(t),
        }),
        p(`select`, {
          ref: y,
          value: b,
          onChange: E,
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            opacity: 0,
            cursor: `pointer`,
          },
          children: C.map((e) => p(`option`, { value: e.value, children: e.text }, e.value)),
        }),
      ],
    })
  );
}
var Ee = e(() => {
    (t(),
      l(),
      n(),
      A(),
      D(Z, {
        DropdownVisual: {
          type: F.ComponentInstance,
          title: `Component`,
          description: `Connect to native Framer component, on-canvas but off-page. Use {{param}} in text to show the current sort option`,
        },
        defaultSort: {
          type: F.Enum,
          title: `Default Sort`,
          options: [
            `relevance`,
            `title_asc`,
            `title_desc`,
            `price_asc`,
            `price_desc`,
            `newest`,
            `best_selling`,
          ],
          optionTitles: [
            `Relevance`,
            `Title A-Z`,
            `Title Z-A`,
            `Price Low-High`,
            `Price High-Low`,
            `Newest`,
            `Best Selling`,
          ],
          defaultValue: `relevance`,
        },
        relevanceText: { type: F.String, title: `Relevance`, defaultValue: `Relevance` },
        titleAscText: { type: F.String, title: `Title (A-Z)`, defaultValue: `A-Z` },
        titleDescText: { type: F.String, title: `Title (Z-A)`, defaultValue: `Z-A` },
        priceAscText: {
          type: F.String,
          title: `Price (Low)`,
          defaultValue: `Price (lowest first)`,
        },
        priceDescText: {
          type: F.String,
          title: `Price (High)`,
          defaultValue: `Price (highest first)`,
        },
        newestText: { type: F.String, title: `Newest`, defaultValue: `Newest` },
        bestSellingText: {
          type: F.String,
          title: `Best Selling`,
          defaultValue: `Best Selling`,
          description: `Empty fields won't be displayed`,
        },
      }));
  }),
  De,
  Oe,
  ke,
  Ae,
  je,
  Q,
  Me,
  Ne,
  Pe,
  Fe,
  $,
  Ie = e(() => {
    (l(),
      A(),
      b(),
      n(),
      Ee(),
      L(),
      de(),
      (De = M(I)),
      (Oe = M(Z)),
      (ke = `framer-FCXiW`),
      (Ae = { mlU7nKXIq: `framer-v-1xgh32` }),
      (je = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Q = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Me = ({ value: e, children: t }) => {
        let n = o(y),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return p(y.Provider, { value: i, children: t });
      }),
      (Ne = _.create(a)),
      (Pe = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        TsK1ncLbC: n ?? i.TsK1ncLbC ?? `10px 14px 10px 16px`,
      })),
      (Fe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        f(function (e, t) {
          let n = c(null),
            i = t ?? n,
            o = r(),
            { activeLocale: s, setLocale: ee } = ie();
          N();
          let { style: l, className: u, layoutId: d, variant: f, TsK1ncLbC: h, ...g } = Pe(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: te,
              setVariant: ne,
              variants: D,
            } = k({ defaultVariant: `mlU7nKXIq`, ref: i, variant: f, variantClassNames: Ae }),
            A = Fe(e, D),
            j = T(ke, B);
          return p(v, {
            id: d ?? o,
            children: p(Ne, {
              animate: D,
              initial: !1,
              children: p(Me, {
                value: je,
                children: p(_.div, {
                  ...g,
                  ...C,
                  className: T(j, `framer-1xgh32`, u, b),
                  "data-framer-name": `Component`,
                  layoutDependency: A,
                  layoutId: `mlU7nKXIq`,
                  ref: i,
                  style: { ...l },
                  children: p(P, {
                    children: p(x, {
                      className: `framer-109334z-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `luAg4w6y9-container`,
                      nodeId: `luAg4w6y9`,
                      rendersWithMotion: !0,
                      scopeId: `h9MxdvA8e`,
                      children: p(Z, {
                        bestSellingText: `Best Selling`,
                        defaultSort: `relevance`,
                        DropdownVisual: [
                          m(_.div, {
                            className: `framer-49qch4`,
                            "data-border": !0,
                            "data-framer-name": `Sort Design`,
                            layoutDependency: A,
                            layoutId: `kRvsiYNHY`,
                            style: {
                              "--1tr6fem": Q(h),
                              "--border-bottom-width": `1px`,
                              "--border-color": `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                              "--border-left-width": `1px`,
                              "--border-right-width": `1px`,
                              "--border-style": `solid`,
                              "--border-top-width": `1px`,
                              backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 200,
                              borderBottomRightRadius: 200,
                              borderTopLeftRadius: 200,
                              borderTopRightRadius: 200,
                            },
                            children: [
                              p(O, {
                                __fromCanvasComponent: !0,
                                children: p(a, {
                                  children: p(_.p, {
                                    className: `framer-styles-preset-hhy7lj`,
                                    "data-styles-preset": `jqlnmWM57`,
                                    dir: `auto`,
                                    children: `{{param}}`,
                                  }),
                                }),
                                className: `framer-10ff1wj`,
                                fonts: [`Inter`],
                                layoutDependency: A,
                                layoutId: `T7aOx_GQJ`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              p(I, {
                                animated: !0,
                                className: `framer-1n88hys`,
                                layoutDependency: A,
                                layoutId: `M2QEeJNgO`,
                                style: {
                                  "--d1m4u3": 1.6,
                                  "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                },
                              }),
                            ],
                          }),
                        ],
                        height: `100%`,
                        id: `luAg4w6y9`,
                        layoutId: `luAg4w6y9`,
                        newestText: `Newest`,
                        priceAscText: `Price (lowest first)`,
                        priceDescText: `Price (highest first)`,
                        relevanceText: `Relevance`,
                        titleAscText: `A-Z`,
                        titleDescText: `Z-A`,
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-FCXiW.framer-1jovvk2, .framer-FCXiW .framer-1jovvk2 { display: block; }`,
          `.framer-FCXiW.framer-1xgh32 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-FCXiW .framer-109334z-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-FCXiW .framer-49qch4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: var(--1tr6fem); position: relative; width: min-content; }`,
          `.framer-FCXiW .framer-10ff1wj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-FCXiW .framer-1n88hys { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 14px; }`,
          ...R,
          `.framer-FCXiW[data-border="true"]::after, .framer-FCXiW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FCXiW`
      )),
      ($.displayName = `Sort button`),
      ($.defaultProps = { height: 39, width: 114.5 }),
      D($, {
        TsK1ncLbC: { defaultValue: `10px 14px 10px 16px`, title: `Padding`, type: F.Padding },
      }),
      ne(
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
          ...De,
          ...Oe,
          ...w(z),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { Te as i, Ie as n, X as r, $ as t };
//# sourceMappingURL=h9MxdvA8e.1EV1m79h.mjs.map
