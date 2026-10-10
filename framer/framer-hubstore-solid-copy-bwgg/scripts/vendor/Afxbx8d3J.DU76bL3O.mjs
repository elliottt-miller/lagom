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
  _ as C,
  ft as w,
  j as T,
  m as E,
  o as D,
  yt as O,
} from "./framer.CbUxDv78.mjs";
import { i as k, n as A, r as j, t as M } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as N, n as P, r as F, t as I } from "./tEGb3dIPL.DmfZkyjB.mjs";
function L(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var R,
  z,
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
  X = e(() => {
    (s(),
      S(),
      p(),
      t(),
      k(),
      N(),
      (R = { h9r1IVc07: { hover: !0 } }),
      (z = [`h9r1IVc07`, `H2jAsksAC`]),
      (B = `framer-K2E2Q`),
      (V = { H2jAsksAC: `framer-v-1gjanog`, h9r1IVc07: `framer-v-1gct27b` }),
      (H = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (U = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (W = ({ value: e, children: t }) => {
        let n = r(d),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(d.Provider, { value: s, children: t });
      }),
      (G = m.create(n)),
      (K = { Primary: `h9r1IVc07`, Small: `H2jAsksAC` }),
      (q = ({ height: e, id: t, image: n, link: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        M_AVMRQK1: a ?? s.M_AVMRQK1 ?? `From Sketch to Final Design`,
        vAFfI0I1y:
          i ??
          s.vAFfI0I1y ??
          `A detailed look at the design process using Framer, from initial sketch to live website.`,
        variant: K[s.variant] ?? s.variant ?? `h9r1IVc07`,
        wcDLqkwQT: r ?? s.wcDLqkwQT,
        xwUz_Pjz2: n ??
          s.xwUz_Pjz2 ?? {
            src: `../../assets/images/cofLlvrdf71d7i5raChitGnKzB0.jpg`,
            srcSet: `../../assets/images/cofLlvrdf71d7i5raChitGnKzB0.jpg 512w,../../assets/images/cofLlvrdf71d7i5raChitGnKzB0-0973b2.jpg 1024w,../../assets/images/cofLlvrdf71d7i5raChitGnKzB0-563477.jpg 2048w,../../assets/images/cofLlvrdf71d7i5raChitGnKzB0-be42e7.jpg 3882w`,
          },
      })),
      (J = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = b(
        l(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = u(),
            { activeLocale: l, setLocale: d } = O(),
            p = w(),
            {
              style: v,
              className: b,
              layoutId: x,
              variant: S,
              M_AVMRQK1: T,
              vAFfI0I1y: D,
              xwUz_Pjz2: k,
              wcDLqkwQT: A,
              ...j
            } = q(e),
            {
              baseVariant: N,
              classNames: P,
              clearLoadingGesture: F,
              gestureHandlers: K,
              gestureVariant: Y,
              isLoading: X,
              setGestureState: ee,
              setVariant: te,
              variants: Z,
            } = h({
              cycleOrder: z,
              defaultVariant: `h9r1IVc07`,
              enabledGestures: R,
              ref: i,
              variant: S,
              variantClassNames: V,
            }),
            Q = J(e, Z),
            $ = g(B, I, M);
          return o(f, {
            id: x ?? s,
            children: o(G, {
              animate: Z,
              initial: !1,
              children: o(W, {
                value: H,
                children: o(C, {
                  href: A,
                  motionChild: !0,
                  nodeId: `h9r1IVc07`,
                  scopeId: `Afxbx8d3J`,
                  children: c(m.a, {
                    ...j,
                    ...K,
                    className: `${g($, `framer-1gct27b`, b, P)} framer-1dmlbz2`,
                    "data-framer-name": `Primary`,
                    layoutDependency: Q,
                    layoutId: `h9r1IVc07`,
                    ref: i,
                    style: { ...v },
                    ...L(
                      {
                        "h9r1IVc07-hover": { "data-framer-name": void 0 },
                        H2jAsksAC: { "data-framer-name": `Small` },
                      },
                      N,
                      Y
                    ),
                    children: [
                      o(m.div, {
                        className: `framer-x341a1`,
                        "data-framer-name": `Image Wrap`,
                        layoutDependency: Q,
                        layoutId: `KXyp2AE83`,
                        style: {
                          borderBottomLeftRadius: 21,
                          borderBottomRightRadius: 21,
                          borderTopLeftRadius: 21,
                          borderTopRightRadius: 21,
                        },
                        children: o(E, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: _((p?.y || 0) + 0 + 0 + 0),
                            pixelHeight: 351,
                            pixelWidth: 411,
                            sizes: p?.width || `100vw`,
                            ...U(k),
                          },
                          className: `framer-ec1uu9`,
                          "data-framer-name": `Card Image`,
                          layoutDependency: Q,
                          layoutId: `l_KjGJQSs`,
                          style: {
                            borderBottomLeftRadius: 21,
                            borderBottomRightRadius: 21,
                            borderTopLeftRadius: 21,
                            borderTopRightRadius: 21,
                            scale: 1,
                          },
                          variants: { "h9r1IVc07-hover": { scale: 1.1 } },
                        }),
                      }),
                      c(m.div, {
                        className: `framer-fdoi1d`,
                        "data-framer-name": `Card Body`,
                        layoutDependency: Q,
                        layoutId: `A_Ck2_0EQ`,
                        children: [
                          o(y, {
                            __fromCanvasComponent: !0,
                            children: o(n, {
                              children: o(m.h6, {
                                className: `framer-styles-preset-1aus3b5`,
                                "data-styles-preset": `tEGb3dIPL`,
                                children: `From Sketch to Final Design`,
                              }),
                            }),
                            className: `framer-9xjshu`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: Q,
                            layoutId: `CGICwJESj`,
                            style: { "--framer-paragraph-spacing": `0px` },
                            text: T,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
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
                                children: `A detailed look at the design process using Framer, from initial sketch to live website.`,
                              }),
                            }),
                            className: `framer-19276pr`,
                            "data-framer-name": `Text`,
                            fonts: [`Inter`],
                            layoutDependency: Q,
                            layoutId: `JY0Hn_6AB`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: D,
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
          `.framer-K2E2Q.framer-1dmlbz2, .framer-K2E2Q .framer-1dmlbz2 { display: block; }`,
          `.framer-K2E2Q.framer-1gct27b { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 411px; }`,
          `.framer-K2E2Q .framer-x341a1 { aspect-ratio: 1.170940170940171 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 351px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-K2E2Q .framer-ec1uu9 { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; }`,
          `.framer-K2E2Q .framer-fdoi1d { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px 8px 0px 8px; position: relative; width: 100%; }`,
          `.framer-K2E2Q .framer-9xjshu, .framer-K2E2Q .framer-19276pr { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-K2E2Q.framer-1gct27b, .framer-K2E2Q .framer-fdoi1d { gap: 0px; } .framer-K2E2Q.framer-1gct27b > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-K2E2Q.framer-1gct27b > :first-child, .framer-K2E2Q .framer-fdoi1d > :first-child { margin-top: 0px; } .framer-K2E2Q.framer-1gct27b > :last-child, .framer-K2E2Q .framer-fdoi1d > :last-child { margin-bottom: 0px; } .framer-K2E2Q .framer-fdoi1d > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } }`,
          `.framer-K2E2Q.framer-v-1gjanog.framer-1gct27b { cursor: unset; width: 320px; }`,
          `.framer-K2E2Q.framer-v-1gjanog .framer-x341a1 { height: var(--framer-aspect-ratio-supported, 274px); }`,
          `.framer-K2E2Q.framer-v-1gjanog .framer-fdoi1d { padding: 0px; }`,
          ...P,
          ...A,
        ],
        `framer-K2E2Q`
      )),
      (Y.displayName = `Blog Card`),
      (Y.defaultProps = { height: 475, width: 411 }),
      v(Y, {
        variant: {
          options: [`h9r1IVc07`, `H2jAsksAC`],
          optionTitles: [`Primary`, `Small`],
          title: `Variant`,
          type: D.Enum,
        },
        M_AVMRQK1: {
          defaultValue: `From Sketch to Final Design`,
          displayTextArea: !1,
          title: `Title`,
          type: D.String,
        },
        vAFfI0I1y: {
          defaultValue: `A detailed look at the design process using Framer, from initial sketch to live website.`,
          displayTextArea: !1,
          title: `Text`,
          type: D.String,
        },
        xwUz_Pjz2: {
          __defaultAssetReference: `data:framer/asset-reference,cofLlvrdf71d7i5raChitGnKzB0.jpg?originalFilename=photo-1498050108023-c5249f4df085%3Fcrop%3Dentropy%26cs%3Dsrgb%26fm%3Djpg%26ixid%3DM3wxMzc5NjJ8MHwxfHNlYXJjaHw3fHxsYXB0b3B8ZW58MHx8fHwxNzQxMzM4NTg1fDA%26ixlib%3Drb-4.0.jpg&preferredSize=auto`,
          title: `Image`,
          type: D.ResponsiveImage,
        },
        wcDLqkwQT: { title: `Link`, type: D.Link },
      }),
      T(
        Y,
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
          ...x(F),
          ...x(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { X as n, Y as t };
//# sourceMappingURL=Afxbx8d3J.DU76bL3O.mjs.map
