import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.D0omlcQg.mjs";
import { M as d, a as f, r as p, t as m } from "./motion.Bi2Azsus.mjs";
import {
  Et as h,
  It as g,
  L as _,
  Lt as v,
  N as y,
  P as b,
  _t as x,
  et as S,
  k as C,
  o as w,
  q as T,
} from "./framer.zRtTBSC3.mjs";
import { i as E, n as D, r as O, t as k } from "./amNEcipQY.BtEVe7io.mjs";
import { i as A, n as j, r as M, t as N } from "./CT_DBbR5R.CmeCM4mC.mjs";
var P,
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
      m(),
      t(),
      E(),
      A(),
      (P = `framer-J6Uch`),
      (F = { IFRWjDoNX: `framer-v-5tab0w` }),
      (I = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (L = (e) => (typeof e == `string` ? e : String(e))),
      (R = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (z = d.create(r)),
      (B = ({ height: e, id: t, tagline: n, visibleItems: r, width: i, ...a }) => ({
        ...a,
        BwN_hqFrE: n ?? a.BwN_hqFrE ?? `results`,
        rGomIo08R: r ?? a.rGomIo08R ?? 4,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = v(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: f } = h();
          x();
          let {
              style: m,
              className: v,
              layoutId: y,
              variant: b,
              rGomIo08R: S,
              BwN_hqFrE: w,
              ...T
            } = B(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: M,
              setGestureState: H,
              setVariant: U,
              variants: W,
            } = g({ defaultVariant: `IFRWjDoNX`, ref: a, variant: b, variantClassNames: F }),
            G = V(e, W),
            K = _(P, N, k),
            q = L(S);
          return l(p, {
            id: y ?? s,
            children: l(z, {
              animate: W,
              initial: !1,
              children: l(R, {
                value: I,
                children: u(d.div, {
                  ...T,
                  ...A,
                  className: _(K, `framer-5tab0w`, v, D),
                  "data-framer-name": `Base`,
                  layoutDependency: G,
                  layoutId: `IFRWjDoNX`,
                  ref: a,
                  style: { ...m },
                  children: [
                    l(C, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(d.p, {
                          className: `framer-styles-preset-5rfdkx`,
                          "data-styles-preset": `CT_DBbR5R`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))`,
                          },
                          children: `undefined`,
                        }),
                      }),
                      className: `framer-1uukdzl`,
                      fonts: [`Inter`],
                      layoutDependency: G,
                      layoutId: `ZvQSbmzZB`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: q,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    l(C, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(d.p, {
                          className: `framer-styles-preset-9tj2n0`,
                          "data-styles-preset": `amNEcipQY`,
                          dir: `auto`,
                          style: {
                            "--framer-text-alignment": `left`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))`,
                          },
                          children: `results`,
                        }),
                      }),
                      className: `framer-1vz3pov`,
                      fonts: [`Inter`],
                      layoutDependency: G,
                      layoutId: `GlGCNL3cu`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: w,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-J6Uch.framer-k2ld83, .framer-J6Uch .framer-k2ld83 { display: block; }`,
          `.framer-J6Uch.framer-5tab0w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 324px; }`,
          `.framer-J6Uch .framer-1uukdzl { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-J6Uch .framer-1vz3pov { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...j,
          ...D,
        ],
        `framer-J6Uch`
      )),
      (H.displayName = `CMS Visible Items Count`),
      (H.defaultProps = { height: 21, width: 324 }),
      b(H, {
        rGomIo08R: { defaultValue: 4, min: 0, step: 1, title: `Visible Items`, type: w.Number },
        onrGomIo08RChange: { changes: `rGomIo08R`, type: w.ChangeHandler },
        BwN_hqFrE: {
          defaultValue: `results`,
          displayTextArea: !1,
          title: `Tagline`,
          type: w.String,
        },
        onBwN_hqFrEChange: { changes: `BwN_hqFrE`, type: w.ChangeHandler },
      }),
      y(
        H,
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
          ...T(M),
          ...T(O),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { U as n, H as t };
//# sourceMappingURL=sAat8iFw8.DVzxEiEg.mjs.map
