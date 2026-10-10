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
  ft as C,
  j as w,
  m as T,
  o as E,
  yt as D,
} from "./framer.CbUxDv78.mjs";
import { i as O, n as k, r as A, t as j } from "./ojujRXx3G.BsxJ58M0.mjs";
function M(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (s(),
      S(),
      p(),
      t(),
      O(),
      (N = [`nwFGpMZoJ`, `Nclsjk6GQ`]),
      (P = `framer-vMl5s`),
      (F = { Nclsjk6GQ: `framer-v-4wp7ce`, nwFGpMZoJ: `framer-v-17z0ef4` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = ({ value: e, children: t }) => {
        let n = r(d),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(d.Provider, { value: s, children: t });
      }),
      (R = m.create(n)),
      (z = { Primary: `nwFGpMZoJ`, Secondary: `Nclsjk6GQ` }),
      (B = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        tmUhrLcx1: n ?? i.tmUhrLcx1 ?? `Access to 5 free templates`,
        variant: z[i.variant] ?? i.variant ?? `nwFGpMZoJ`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = b(
        l(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = u(),
            { activeLocale: l, setLocale: d } = D(),
            p = C(),
            { style: v, className: b, layoutId: x, variant: S, tmUhrLcx1: w, ...E } = B(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: z,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = h({
              cycleOrder: N,
              defaultVariant: `nwFGpMZoJ`,
              ref: i,
              variant: S,
              variantClassNames: F,
            }),
            q = V(e, K),
            J = g(P, j);
          return o(f, {
            id: x ?? s,
            children: o(R, {
              animate: K,
              initial: !1,
              children: o(L, {
                value: I,
                children: c(m.div, {
                  ...E,
                  ...z,
                  className: g(J, `framer-17z0ef4`, b, k),
                  "data-framer-name": `Primary`,
                  layoutDependency: q,
                  layoutId: `nwFGpMZoJ`,
                  ref: i,
                  style: { ...v },
                  ...M({ Nclsjk6GQ: { "data-framer-name": `Secondary` } }, O, H),
                  children: [
                    o(T, {
                      background: {
                        alt: `Features Icon`,
                        fit: `fill`,
                        loading: _((p?.y || 0) + (0 + ((p?.height || 32) - 0 - 24) / 2)),
                        pixelHeight: 24,
                        pixelWidth: 24,
                        src: `../../assets/images/LvQ2MHzHLgVCmZPm0sQrjCB33oM.svg`,
                      },
                      className: `framer-3izp7q`,
                      "data-framer-name": `Icon`,
                      layoutDependency: q,
                      layoutId: `DN03KYzh4`,
                      ...M(
                        {
                          Nclsjk6GQ: {
                            background: {
                              alt: `Features Icon`,
                              fit: `fill`,
                              loading: _((p?.y || 0) + (0 + ((p?.height || 32) - 0 - 24) / 2)),
                              pixelHeight: 24,
                              pixelWidth: 24,
                              src: `https://framerusercontent.com/images/efB8YCXumqFbTmnlRuKj8GdJM.svg`,
                            },
                          },
                        },
                        O,
                        H
                      ),
                    }),
                    o(y, {
                      __fromCanvasComponent: !0,
                      children: o(n, {
                        children: o(m.p, {
                          className: `framer-styles-preset-1n6rbyf`,
                          "data-styles-preset": `ojujRXx3G`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                          },
                          children: `Access to 5 free templates`,
                        }),
                      }),
                      className: `framer-mbmlwv`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      layoutDependency: q,
                      layoutId: `sm9SYU5mr`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: w,
                      variants: {
                        Nclsjk6GQ: {
                          "--extracted-r6o4lv": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...M(
                        {
                          Nclsjk6GQ: {
                            children: o(n, {
                              children: o(m.p, {
                                className: `framer-styles-preset-1n6rbyf`,
                                "data-styles-preset": `ojujRXx3G`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                                },
                                children: `Access to 5 free templates`,
                              }),
                            }),
                          },
                        },
                        O,
                        H
                      ),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vMl5s.framer-1f72fnx, .framer-vMl5s .framer-1f72fnx { display: block; }`,
          `.framer-vMl5s.framer-17z0ef4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 341px; }`,
          `.framer-vMl5s .framer-3izp7q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: visible; position: relative; width: 24px; }`,
          `.framer-vMl5s .framer-mbmlwv { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vMl5s.framer-17z0ef4 { gap: 0px; } .framer-vMl5s.framer-17z0ef4 > * { margin: 0px; margin-left: calc(12px / 2); margin-right: calc(12px / 2); } .framer-vMl5s.framer-17z0ef4 > :first-child { margin-left: 0px; } .framer-vMl5s.framer-17z0ef4 > :last-child { margin-right: 0px; } }`,
          ...k,
        ],
        `framer-vMl5s`
      )),
      (H.displayName = `List Item`),
      (H.defaultProps = { height: 32, width: 341 }),
      v(H, {
        variant: {
          options: [`nwFGpMZoJ`, `Nclsjk6GQ`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: E.Enum,
        },
        tmUhrLcx1: {
          defaultValue: `Access to 5 free templates`,
          displayTextArea: !1,
          title: `Text`,
          type: E.String,
        },
      }),
      w(
        H,
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
          ...x(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { U as n, H as t };
//# sourceMappingURL=kQEMcmtw4.DU6hy3T2.mjs.map
