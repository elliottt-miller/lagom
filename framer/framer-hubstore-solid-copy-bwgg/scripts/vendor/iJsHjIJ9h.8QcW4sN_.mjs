import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  j as a,
  l as o,
  s,
  u as c,
  v as l,
  x as u,
} from "./react.ClsXD4bF.mjs";
import { a as d, r as f, t as p, w as m } from "./motion.ClyXVVeQ.mjs";
import {
  Dt as h,
  F as g,
  G as _,
  M as v,
  O as y,
  Ot as b,
  W as x,
  Z as S,
  _ as ee,
  ft as C,
  j as w,
  m as T,
  o as E,
  yt as te,
} from "./framer.CbUxDv78.mjs";
import { i as D, n as O, r as k, t as A } from "./wEX21mXRe.BeCcrLA7.mjs";
import { i as j, n as M, r as N, t as P } from "./IwoeRBoDn.CVNhweph.mjs";
import { i as F, n as I, r as L, t as R } from "./lV9dxehk9.1IAwn2dx.mjs";
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
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
  ne = e(() => {
    (s(),
      S(),
      p(),
      t(),
      j(),
      F(),
      D(),
      (B = { cIxzDVZpn: { hover: !0 } }),
      (V = [`cIxzDVZpn`, `BxbuELPAK`, `Rklwy7teW`]),
      (H = `framer-eTsKS`),
      (U = {
        BxbuELPAK: `framer-v-1rh1kdt`,
        cIxzDVZpn: `framer-v-kwhiuz`,
        Rklwy7teW: `framer-v-1g7micr`,
      }),
      (W = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (K = ({ value: e, children: t }) => {
        let n = r(d),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(d.Provider, { value: s, children: t });
      }),
      (q = m.create(n)),
      (J = { Phone: `BxbuELPAK`, Primary: `cIxzDVZpn`, Tablet: `Rklwy7teW` }),
      (Y = ({
        category: e,
        height: t,
        id: n,
        image: r,
        link: i,
        price: a,
        text: o,
        title: s,
        width: c,
        ...l
      }) => ({
        ...l,
        FGgYTj69k: s ?? l.FGgYTj69k ?? `SAP SaaS`,
        Gu09Z0S1k:
          o ?? l.Gu09Z0S1k ?? `SAP is a landing page template designed to showcase SaaS...`,
        HlznOdTH4: r ??
          l.HlznOdTH4 ?? {
            alt: `template image`,
            src: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-234cd7.jpg`,
            srcSet: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-234cd7.jpg 512w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-1e5e5c.jpg 1024w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-537b1e.jpg 1208w`,
          },
        soVmktXCF: i ?? l.soVmktXCF,
        ttLfm2RuI: a ?? l.ttLfm2RuI ?? `$59`,
        variant: J[l.variant] ?? l.variant ?? `cIxzDVZpn`,
        YUZng7tmN: e ?? l.YUZng7tmN ?? `SaaS`,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = b(
        l(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = u(),
            { activeLocale: l, setLocale: d } = te(),
            p = C(),
            {
              style: v,
              className: b,
              layoutId: x,
              variant: S,
              FGgYTj69k: w,
              YUZng7tmN: E,
              ttLfm2RuI: D,
              Gu09Z0S1k: O,
              HlznOdTH4: k,
              soVmktXCF: j,
              ...M
            } = Y(e),
            {
              baseVariant: N,
              classNames: F,
              clearLoadingGesture: I,
              gestureHandlers: L,
              gestureVariant: J,
              isLoading: Z,
              setGestureState: ne,
              setVariant: re,
              variants: Q,
            } = h({
              cycleOrder: V,
              defaultVariant: `cIxzDVZpn`,
              enabledGestures: B,
              ref: i,
              variant: S,
              variantClassNames: U,
            }),
            $ = X(e, Q),
            ie = g(H, R, P, A);
          return o(f, {
            id: x ?? s,
            children: o(q, {
              animate: Q,
              initial: !1,
              children: o(K, {
                value: W,
                children: o(ee, {
                  href: j,
                  motionChild: !0,
                  nodeId: `cIxzDVZpn`,
                  scopeId: `iJsHjIJ9h`,
                  smoothScroll: !0,
                  children: c(m.a, {
                    ...M,
                    ...L,
                    className: `${g(ie, `framer-kwhiuz`, b, F)} framer-1fvk1qw`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: $,
                    layoutId: `cIxzDVZpn`,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                      borderTopLeftRadius: 24,
                      borderTopRightRadius: 24,
                      ...v,
                    },
                    variants: {
                      BxbuELPAK: {
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                      },
                    },
                    ...z(
                      {
                        "cIxzDVZpn-hover": { "data-framer-name": void 0 },
                        BxbuELPAK: { "data-framer-name": `Phone` },
                        Rklwy7teW: { "data-framer-name": `Tablet` },
                      },
                      N,
                      J
                    ),
                    children: [
                      o(m.div, {
                        className: `framer-1uny200`,
                        "data-framer-name": `Icon Wrap`,
                        layoutDependency: $,
                        layoutId: `YnbO0fGI9`,
                        style: {
                          backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                          borderBottomLeftRadius: 50,
                          borderBottomRightRadius: 50,
                          borderTopLeftRadius: 50,
                          borderTopRightRadius: 50,
                          opacity: 0,
                        },
                        variants: { "cIxzDVZpn-hover": { opacity: 1 } },
                        children: o(T, {
                          background: {
                            alt: `Icon`,
                            fit: `fill`,
                            loading: _((p?.y || 0) + 24 + 8),
                            pixelHeight: 24,
                            pixelWidth: 24,
                            src: `../../assets/images/avNhxIiehtEfrW9sSNvPZ68.svg`,
                          },
                          className: `framer-pnpt`,
                          "data-framer-name": `Icon`,
                          layoutDependency: $,
                          layoutId: `yyz5xrjOc`,
                          ...z(
                            {
                              BxbuELPAK: {
                                background: {
                                  alt: `Icon`,
                                  fit: `fill`,
                                  loading: _((p?.y || 0) + 16 + 6),
                                  pixelHeight: 24,
                                  pixelWidth: 24,
                                  src: `../../assets/images/avNhxIiehtEfrW9sSNvPZ68.svg`,
                                },
                              },
                            },
                            N,
                            J
                          ),
                        }),
                      }),
                      o(m.div, {
                        className: `framer-1aeopna`,
                        "data-framer-name": `Image Wrap`,
                        layoutDependency: $,
                        layoutId: `iI2Cf9JID`,
                        children: o(T, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: _(
                              (p?.y || 0) + 0 + (((p?.height || 388) - 0 - 504) / 2 + 0 + 0) + 0
                            ),
                            pixelHeight: 250,
                            pixelWidth: 302,
                            sizes: p?.width || `100vw`,
                            ...G(k),
                            positionX: `center`,
                            positionY: `center`,
                          },
                          className: `framer-mar9f1`,
                          "data-framer-name": `Card Image`,
                          layoutDependency: $,
                          layoutId: `RRR3JuAax`,
                          style: { scale: 1 },
                          variants: { "cIxzDVZpn-hover": { scale: 1.1 } },
                          ...z(
                            {
                              BxbuELPAK: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: _(
                                    (p?.y || 0) +
                                      0 +
                                      (((p?.height || 380) - 0 - 496) / 2 + 0 + 0) +
                                      0
                                  ),
                                  pixelHeight: 250,
                                  pixelWidth: 302,
                                  sizes: p?.width || `100vw`,
                                  ...G(k),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                              },
                            },
                            N,
                            J
                          ),
                        }),
                      }),
                      c(m.div, {
                        className: `framer-svqmy9`,
                        "data-framer-name": `Card Body`,
                        layoutDependency: $,
                        layoutId: `nSOs8ust0`,
                        children: [
                          c(m.div, {
                            className: `framer-1rk96xx`,
                            "data-framer-name": `Text Block`,
                            layoutDependency: $,
                            layoutId: `hsEBaKAOV`,
                            children: [
                              o(y, {
                                __fromCanvasComponent: !0,
                                children: o(n, {
                                  children: o(m.p, {
                                    className: `framer-styles-preset-gc7lk9`,
                                    "data-styles-preset": `lV9dxehk9`,
                                    children: `SaaS`,
                                  }),
                                }),
                                className: `framer-hrsqy6`,
                                "data-framer-name": `Category`,
                                fonts: [`Inter`],
                                layoutDependency: $,
                                layoutId: `sFXfZBs9m`,
                                style: { "--framer-paragraph-spacing": `0px` },
                                text: E,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              c(m.div, {
                                className: `framer-848wo7`,
                                "data-framer-name": `Title Block`,
                                layoutDependency: $,
                                layoutId: `AjgDPhOwd`,
                                children: [
                                  o(y, {
                                    __fromCanvasComponent: !0,
                                    children: o(n, {
                                      children: o(m.h6, {
                                        className: `framer-styles-preset-1s533c1`,
                                        "data-styles-preset": `IwoeRBoDn`,
                                        children: `SAP SaaS`,
                                      }),
                                    }),
                                    className: `framer-12d9htc`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    layoutDependency: $,
                                    layoutId: `c6yEK5qrm`,
                                    style: { "--framer-paragraph-spacing": `0px` },
                                    text: w,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(m.div, {
                                    className: `framer-1thnw0f`,
                                    "data-framer-name": `Price Block`,
                                    layoutDependency: $,
                                    layoutId: `WVfngj9R0`,
                                    style: {
                                      backgroundColor: `var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246))`,
                                      borderBottomLeftRadius: 60,
                                      borderBottomRightRadius: 60,
                                      borderTopLeftRadius: 60,
                                      borderTopRightRadius: 60,
                                    },
                                    children: o(y, {
                                      __fromCanvasComponent: !0,
                                      children: o(n, {
                                        children: o(m.p, {
                                          className: `framer-styles-preset-1pumtl1`,
                                          "data-styles-preset": `wEX21mXRe`,
                                          children: `$59`,
                                        }),
                                      }),
                                      className: `framer-5qw4mj`,
                                      "data-framer-name": `Price`,
                                      fonts: [`Inter`],
                                      layoutDependency: $,
                                      layoutId: `lqGRWBaBe`,
                                      style: {
                                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                                        "--framer-link-text-decoration": `underline`,
                                      },
                                      text: D,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          o(y, {
                            __fromCanvasComponent: !0,
                            children: o(n, {
                              children: o(m.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                                },
                                children: `SAP is a landing page template designed to showcase SaaS...`,
                              }),
                            }),
                            className: `framer-1uypy85`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            layoutDependency: $,
                            layoutId: `c01hUc1VV`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: O,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
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
          `.framer-eTsKS.framer-1fvk1qw, .framer-eTsKS .framer-1fvk1qw { display: block; }`,
          `.framer-eTsKS.framer-kwhiuz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 302px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-eTsKS .framer-1uny200 { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: var(--framer-aspect-ratio-supported, 40px); justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 24px; top: 24px; width: 40px; will-change: var(--framer-will-change-override, transform); z-index: 2; }`,
          `.framer-eTsKS .framer-pnpt { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }`,
          `.framer-eTsKS .framer-1aeopna { aspect-ratio: 1.208 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 250px); overflow: hidden; position: relative; width: 100%; }`,
          `.framer-eTsKS .framer-mar9f1 { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }`,
          `.framer-eTsKS .framer-svqmy9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 14px 16px 18px 16px; position: relative; width: 100%; }`,
          `.framer-eTsKS .framer-1rk96xx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eTsKS .framer-hrsqy6, .framer-eTsKS .framer-1uypy85 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-eTsKS .framer-848wo7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-eTsKS .framer-12d9htc { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-eTsKS .framer-1thnw0f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 7px 14px 7px 14px; position: relative; width: min-content; }`,
          `.framer-eTsKS .framer-5qw4mj { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-eTsKS.framer-kwhiuz, .framer-eTsKS .framer-1uny200, .framer-eTsKS .framer-svqmy9, .framer-eTsKS .framer-1rk96xx, .framer-eTsKS .framer-848wo7, .framer-eTsKS .framer-1thnw0f { gap: 0px; } .framer-eTsKS.framer-kwhiuz > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-eTsKS.framer-kwhiuz > :first-child, .framer-eTsKS .framer-svqmy9 > :first-child, .framer-eTsKS .framer-1rk96xx > :first-child { margin-top: 0px; } .framer-eTsKS.framer-kwhiuz > :last-child, .framer-eTsKS .framer-svqmy9 > :last-child, .framer-eTsKS .framer-1rk96xx > :last-child { margin-bottom: 0px; } .framer-eTsKS .framer-1uny200 > *, .framer-eTsKS .framer-848wo7 > *, .framer-eTsKS .framer-1thnw0f > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-eTsKS .framer-1uny200 > :first-child, .framer-eTsKS .framer-848wo7 > :first-child, .framer-eTsKS .framer-1thnw0f > :first-child { margin-left: 0px; } .framer-eTsKS .framer-1uny200 > :last-child, .framer-eTsKS .framer-848wo7 > :last-child, .framer-eTsKS .framer-1thnw0f > :last-child { margin-right: 0px; } .framer-eTsKS .framer-svqmy9 > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-eTsKS .framer-1rk96xx > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } }`,
          `.framer-eTsKS.framer-v-1rh1kdt .framer-1uny200 { height: var(--framer-aspect-ratio-supported, 36px); right: 16px; top: 16px; width: 36px; }`,
          `.framer-eTsKS.framer-v-1rh1kdt .framer-pnpt { height: var(--framer-aspect-ratio-supported, 20px); width: 20px; }`,
          `.framer-eTsKS.framer-v-1rh1kdt .framer-svqmy9 { padding: 12px; }`,
          ...I,
          ...M,
          ...O,
          `.framer-eTsKS[data-border="true"]::after, .framer-eTsKS [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-eTsKS`
      )),
      (Z.displayName = `Template Post`),
      (Z.defaultProps = { height: 388, width: 302 }),
      v(Z, {
        variant: {
          options: [`cIxzDVZpn`, `BxbuELPAK`, `Rklwy7teW`],
          optionTitles: [`Primary`, `Phone`, `Tablet`],
          title: `Variant`,
          type: E.Enum,
        },
        FGgYTj69k: {
          defaultValue: `SAP SaaS`,
          displayTextArea: !1,
          title: `Title`,
          type: E.String,
        },
        YUZng7tmN: { defaultValue: `SaaS`, displayTextArea: !1, title: `Category`, type: E.String },
        ttLfm2RuI: { defaultValue: `$59`, displayTextArea: !1, title: `Price`, type: E.String },
        Gu09Z0S1k: {
          defaultValue: `SAP is a landing page template designed to showcase SaaS...`,
          displayTextArea: !1,
          title: `Text`,
          type: E.String,
        },
        HlznOdTH4: {
          __defaultAssetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `template image`,
            assetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          },
          title: `Image`,
          type: E.ResponsiveImage,
        },
        soVmktXCF: { title: `Link`, type: E.Link },
      }),
      w(
        Z,
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
          ...x(L),
          ...x(N),
          ...x(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { ne as n, Z as t };
//# sourceMappingURL=iJsHjIJ9h.8QcW4sN_.mjs.map
