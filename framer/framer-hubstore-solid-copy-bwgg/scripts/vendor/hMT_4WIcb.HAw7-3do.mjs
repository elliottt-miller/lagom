import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as n,
  L as r,
  N as i,
  P as a,
  j as o,
  l as s,
  s as c,
  u as l,
  v as u,
  x as d,
} from "./react.ClsXD4bF.mjs";
import { a as f, r as p, t as m, w as h } from "./motion.ClyXVVeQ.mjs";
import {
  A as g,
  Dt as _,
  F as v,
  M as y,
  O as b,
  Ot as x,
  U as S,
  W as C,
  Z as w,
  _ as T,
  ft as E,
  i as D,
  j as O,
  o as k,
  yt as A,
} from "./framer.CbUxDv78.mjs";
import { i as j, n as M, r as N, t as P } from "./ojujRXx3G.BsxJ58M0.mjs";
import { n as F, t as I } from "./Feather.DX1xroew.mjs";
var L = e({ __FramerMetadata__: () => Z, default: () => X });
function R(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var z,
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
  Q = t(() => {
    (c(),
      w(),
      m(),
      n(),
      F(),
      j(),
      (z = S(I)),
      (B = { lE6V16knh: { hover: !0 }, wSgh3QRv3: { hover: !0 } }),
      (V = [`wSgh3QRv3`, `wk2wge9gS`, `lE6V16knh`, `gwfgtKUxL`]),
      (H = `framer-16E2W`),
      (U = {
        gwfgtKUxL: `framer-v-1eezp7t`,
        lE6V16knh: `framer-v-uwu978`,
        wk2wge9gS: `framer-v-qzgmcu`,
        wSgh3QRv3: `framer-v-1yc10z8`,
      }),
      (W = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (G = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(f.Provider, { value: o, children: t });
      }),
      (K = h.create(r)),
      (q = {
        "Black - Small": `gwfgtKUxL`,
        Black: `lE6V16knh`,
        Primary: `wSgh3QRv3`,
        Small: `wk2wge9gS`,
      }),
      (J = ({ height: e, id: t, link: n, text: r, visible: i, width: a, ...o }) => ({
        ...o,
        fAu9uBRMh: r ?? o.fAu9uBRMh ?? `Explore all `,
        mkERkHNl0: i ?? o.mkERkHNl0 ?? !0,
        tQgB2BXSA: n ?? o.tQgB2BXSA,
        variant: q[o.variant] ?? o.variant ?? `wSgh3QRv3`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = x(
        u(function (e, t) {
          let n = o(null),
            i = t ?? n,
            a = d(),
            { activeLocale: c, setLocale: u } = A();
          E();
          let {
              style: f,
              className: m,
              layoutId: y,
              variant: x,
              fAu9uBRMh: S,
              tQgB2BXSA: C,
              mkERkHNl0: w,
              ...O
            } = J(e),
            {
              baseVariant: k,
              classNames: j,
              clearLoadingGesture: M,
              gestureHandlers: N,
              gestureVariant: F,
              isLoading: L,
              setGestureState: z,
              setVariant: q,
              variants: X,
            } = _({
              cycleOrder: V,
              defaultVariant: `wSgh3QRv3`,
              enabledGestures: B,
              ref: i,
              variant: x,
              variantClassNames: U,
            }),
            Z = Y(e, X),
            Q = v(H, P);
          return s(p, {
            id: y ?? a,
            children: s(K, {
              animate: X,
              initial: !1,
              children: s(G, {
                value: W,
                children: s(T, {
                  href: C,
                  motionChild: !0,
                  nodeId: `wSgh3QRv3`,
                  scopeId: `hMT_4WIcb`,
                  smoothScroll: !0,
                  children: l(h.a, {
                    ...O,
                    ...N,
                    className: `${v(Q, `framer-1yc10z8`, m, j)} framer-1k48dlx`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: Z,
                    layoutId: `wSgh3QRv3`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 500,
                      borderBottomRightRadius: 500,
                      borderTopLeftRadius: 500,
                      borderTopRightRadius: 500,
                      ...f,
                    },
                    variants: {
                      "lE6V16knh-hover": {
                        "--border-color": `rgba(173, 255, 0, 0)`,
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      "wSgh3QRv3-hover": {
                        "--border-color": `rgba(232, 235, 226, 0)`,
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      gwfgtKUxL: {
                        "--border-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        borderBottomLeftRadius: 80,
                        borderBottomRightRadius: 80,
                        borderTopLeftRadius: 80,
                        borderTopRightRadius: 80,
                      },
                      lE6V16knh: {
                        "--border-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        borderBottomLeftRadius: 80,
                        borderBottomRightRadius: 80,
                        borderTopLeftRadius: 80,
                        borderTopRightRadius: 80,
                      },
                    },
                    ...R(
                      {
                        "lE6V16knh-hover": { "data-framer-name": void 0 },
                        "wSgh3QRv3-hover": { "data-framer-name": void 0 },
                        gwfgtKUxL: { "data-framer-name": `Black - Small` },
                        lE6V16knh: { "data-framer-name": `Black` },
                        wk2wge9gS: { "data-framer-name": `Small` },
                      },
                      k,
                      F
                    ),
                    children: [
                      s(b, {
                        __fromCanvasComponent: !0,
                        children: s(r, {
                          children: s(h.p, {
                            className: `framer-styles-preset-1n6rbyf`,
                            "data-styles-preset": `ojujRXx3G`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                            },
                            children: `Explore all `,
                          }),
                        }),
                        className: `framer-7yenoh`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: Z,
                        layoutId: `hCfPEY_T_`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: S,
                        variants: {
                          "lE6V16knh-hover": {
                            "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                          },
                          "wSgh3QRv3-hover": {
                            "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...R(
                          {
                            "lE6V16knh-hover": {
                              children: s(r, {
                                children: s(h.p, {
                                  className: `framer-styles-preset-1n6rbyf`,
                                  "data-styles-preset": `ojujRXx3G`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Explore all `,
                                }),
                              }),
                            },
                            "wSgh3QRv3-hover": {
                              children: s(r, {
                                children: s(h.p, {
                                  className: `framer-styles-preset-1n6rbyf`,
                                  "data-styles-preset": `ojujRXx3G`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Explore all `,
                                }),
                              }),
                            },
                          },
                          k,
                          F
                        ),
                      }),
                      w &&
                        s(D, {
                          children: s(g, {
                            className: `framer-143c670-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: Z,
                            layoutId: `M0EX377zN-container`,
                            nodeId: `M0EX377zN`,
                            rendersWithMotion: !0,
                            scopeId: `hMT_4WIcb`,
                            style: { rotate: -45 },
                            variants: {
                              "lE6V16knh-hover": { rotate: 0 },
                              "wSgh3QRv3-hover": { rotate: 0 },
                            },
                            children: s(I, {
                              color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                              height: `100%`,
                              iconSearch: `Home`,
                              iconSelection: `arrow-right`,
                              id: `M0EX377zN`,
                              layoutId: `M0EX377zN`,
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                              ...R(
                                {
                                  "lE6V16knh-hover": {
                                    color: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                  },
                                  "wSgh3QRv3-hover": {
                                    color: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                  },
                                },
                                k,
                                F
                              ),
                            }),
                          }),
                        }),
                    ],
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-16E2W.framer-1k48dlx, .framer-16E2W .framer-1k48dlx { display: block; }`,
          `.framer-16E2W.framer-1yc10z8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 6px 16px 6px 24px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-16E2W .framer-7yenoh { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-16E2W .framer-143c670-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-16E2W.framer-1yc10z8 { gap: 0px; } .framer-16E2W.framer-1yc10z8 > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } .framer-16E2W.framer-1yc10z8 > :first-child { margin-left: 0px; } .framer-16E2W.framer-1yc10z8 > :last-child { margin-right: 0px; } }`,
          `.framer-16E2W.framer-v-qzgmcu.framer-1yc10z8 { padding: 6px 12px 6px 16px; }`,
          `.framer-16E2W.framer-v-qzgmcu .framer-143c670-container { height: 20px; width: 20px; }`,
          `.framer-16E2W.framer-v-uwu978.framer-1yc10z8 { gap: 10px; padding: 8px 20px 8px 24px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-16E2W.framer-v-uwu978.framer-1yc10z8 { gap: 0px; } .framer-16E2W.framer-v-uwu978.framer-1yc10z8 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-16E2W.framer-v-uwu978.framer-1yc10z8 > :first-child { margin-left: 0px; } .framer-16E2W.framer-v-uwu978.framer-1yc10z8 > :last-child { margin-right: 0px; } }`,
          `.framer-16E2W.framer-v-1eezp7t.framer-1yc10z8 { gap: 8px; padding: 8px 16px 8px 20px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-16E2W.framer-v-1eezp7t.framer-1yc10z8 { gap: 0px; } .framer-16E2W.framer-v-1eezp7t.framer-1yc10z8 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } .framer-16E2W.framer-v-1eezp7t.framer-1yc10z8 > :first-child { margin-left: 0px; } .framer-16E2W.framer-v-1eezp7t.framer-1yc10z8 > :last-child { margin-right: 0px; } }`,
          ...M,
          `.framer-16E2W[data-border="true"]::after, .framer-16E2W [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-16E2W`
      )),
      (X.displayName = `Outline`),
      (X.defaultProps = { height: 44, width: 154 }),
      y(X, {
        variant: {
          options: [`wSgh3QRv3`, `wk2wge9gS`, `lE6V16knh`, `gwfgtKUxL`],
          optionTitles: [`Primary`, `Small`, `Black`, `Black - Small`],
          title: `Variant`,
          type: k.Enum,
        },
        fAu9uBRMh: {
          defaultValue: `Explore all `,
          displayTextArea: !1,
          title: `Text`,
          type: k.String,
        },
        tQgB2BXSA: { title: `Link`, type: k.Link },
        mkERkHNl0: { defaultValue: !0, title: `Visible`, type: k.Boolean },
      }),
      O(
        X,
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
          ...z,
          ...C(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Z = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerhMT_4WIcb`,
            slots: [],
            annotations: {
              framerDisplayContentsDiv: `false`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"wk2wge9gS":{"layout":["auto","auto"]},"lE6V16knh":{"layout":["auto","auto"]},"gwfgtKUxL":{"layout":["auto","auto"]},"BxuTlJPVi":{"layout":["auto","auto"]},"YacbUrySi":{"layout":["auto","auto"]}}}`,
              framerContractVersion: `1`,
              framerIntrinsicHeight: `44`,
              framerVariables: `{"fAu9uBRMh":"text","tQgB2BXSA":"link","mkERkHNl0":"visible"}`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `154`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export { L as n, Q as r, X as t };
//# sourceMappingURL=hMT_4WIcb.HAw7-3do.mjs.map
