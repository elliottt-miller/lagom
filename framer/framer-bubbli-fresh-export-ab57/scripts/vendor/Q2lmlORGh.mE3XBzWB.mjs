import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as i,
  c as a,
  g as o,
  l as s,
  o as c,
  w as l,
  y as u,
} from "./react.CWoGm2_e.mjs";
import { C as d, a as f, r as p, t as m } from "./motion.DjW49AAR.mjs";
import {
  A as h,
  D as g,
  Et as _,
  H as v,
  P as y,
  Tt as b,
  W as x,
  X as S,
  _t as C,
  ct as w,
  i as T,
  j as E,
  k as D,
  m as O,
  o as k,
} from "./framer.D9PtOJZM.mjs";
import { n as A, t as j } from "./Phosphor.DhdvwZO7.mjs";
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
  U,
  W,
  G,
  K,
  q,
  J = e(() => {
    (c(),
      S(),
      m(),
      l(),
      A(),
      (N = v(j)),
      (P = { PCX51OaaK: { hover: !0 } }),
      (F = [`PCX51OaaK`, `Dq7Ou47HX`]),
      (I = `framer-yGueb`),
      (L = { Dq7Ou47HX: `framer-v-11ilrr4`, PCX51OaaK: `framer-v-46ga9f` }),
      (R = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (z = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (B = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` },
      }),
      (V = { damping: 40, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (H = ({ value: e, children: t }) => {
        let n = r(f),
          o = e ?? n.transition,
          s = i(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (U = { "Blog Card": `PCX51OaaK`, "Feature Card": `Dq7Ou47HX` }),
      (W = d.create(n)),
      (G = ({
        category: e,
        height: t,
        id: n,
        image: r,
        readTime: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        G28a3xS1l: r ??
          s.G28a3xS1l ?? {
            pixelHeight: 904,
            pixelWidth: 1200,
            src: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg`,
            srcSet: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ.jpg 512w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-9f06eb.jpg 1024w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg 1200w`,
          },
        Pjf9geszM: e ?? s.Pjf9geszM ?? `Audience`,
        variant: U[s.variant] ?? s.variant ?? `PCX51OaaK`,
        VtVUt2K0x: a ?? s.VtVUt2K0x ?? `Serenity height villas`,
        zMelyq2xf: i ?? s.zMelyq2xf ?? `6 min`,
      })),
      (K = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = _(
        o(function (e, r) {
          let i = t(null),
            o = r ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = C(),
            m = w(),
            {
              style: h,
              className: _,
              layoutId: v,
              variant: S,
              G28a3xS1l: E,
              VtVUt2K0x: k,
              Pjf9geszM: A,
              zMelyq2xf: N,
              ...U
            } = G(e),
            {
              baseVariant: q,
              classNames: J,
              clearLoadingGesture: ee,
              gestureHandlers: Y,
              gestureVariant: X,
              isLoading: te,
              setGestureState: ne,
              setVariant: re,
              variants: Z,
            } = b({
              cycleOrder: F,
              defaultVariant: `PCX51OaaK`,
              enabledGestures: P,
              ref: o,
              variant: S,
              variantClassNames: L,
            }),
            Q = K(e, Z),
            $ = y(I),
            ie = () => X === `PCX51OaaK-hover`;
          return a(p, {
            id: v ?? c,
            children: a(W, {
              animate: Z,
              initial: !1,
              children: a(H, {
                value: R,
                children: s(d.div, {
                  ...U,
                  ...Y,
                  className: y($, `framer-46ga9f`, _, J),
                  "data-framer-name": `Blog Card`,
                  layoutDependency: Q,
                  layoutId: `PCX51OaaK`,
                  ref: o,
                  style: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...h,
                  },
                  ...M(
                    {
                      "PCX51OaaK-hover": { "data-framer-name": void 0 },
                      Dq7Ou47HX: { "data-framer-name": `Feature Card` },
                    },
                    q,
                    X
                  ),
                  children: [
                    s(d.div, {
                      className: `framer-saejla`,
                      "data-framer-name": `Image Wrap`,
                      layoutDependency: Q,
                      layoutId: `r75UmnQ5f`,
                      style: {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      },
                      children: [
                        a(O, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: x((m?.y || 0) + 0 + 0 + 0),
                            pixelHeight: 904,
                            pixelWidth: 1200,
                            sizes: `min(max(${m?.width || `100vw`}, 1px), ${m?.width || `100vw`})`,
                            ...z(E),
                          },
                          className: `framer-zyg8hz`,
                          fitImageDimension: `height`,
                          layoutDependency: Q,
                          layoutId: `Zjxb3butO`,
                          style: {
                            borderTopLeftRadius: 8,
                            borderTopRightRadius: 8,
                            filter: `none`,
                            WebkitFilter: `none`,
                          },
                          variants: {
                            "PCX51OaaK-hover": { filter: `blur(5px)`, WebkitFilter: `blur(5px)` },
                          },
                          whileHover: B,
                          ...M({ Dq7Ou47HX: { fitImageDimension: void 0 } }, q, X),
                        }),
                        ie() &&
                          a(d.div, {
                            className: `framer-8sv17g`,
                            "data-framer-name": `Icon`,
                            layoutDependency: Q,
                            layoutId: `KhIYlqP6e`,
                            children: a(H, {
                              value: V,
                              children: a(T, {
                                children: a(D, {
                                  className: `framer-4pikw7-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: Q,
                                  layoutId: `GDMWG1JAA-container`,
                                  nodeId: `GDMWG1JAA`,
                                  rendersWithMotion: !0,
                                  scopeId: `Q2lmlORGh`,
                                  style: { rotate: -43 },
                                  children: a(j, {
                                    color: `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                    height: `100%`,
                                    iconSearch: `House`,
                                    iconSelection: `ArrowRight`,
                                    id: `GDMWG1JAA`,
                                    layoutId: `GDMWG1JAA`,
                                    mirrored: !1,
                                    selectByList: !0,
                                    style: { height: `100%`, width: `100%` },
                                    weight: `regular`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    a(d.div, {
                      className: `framer-vkeys`,
                      "data-framer-name": `Details`,
                      layoutDependency: Q,
                      layoutId: `xR9pv6V_P`,
                      children: a(d.div, {
                        className: `framer-zbt0uu`,
                        "data-framer-name": `About`,
                        layoutDependency: Q,
                        layoutId: `wpjpU4f5R`,
                        children: s(d.div, {
                          className: `framer-1iqbmnb`,
                          "data-framer-name": `Content`,
                          layoutDependency: Q,
                          layoutId: `fYZ5Wbk2f`,
                          children: [
                            a(g, {
                              __fromCanvasComponent: !0,
                              children: a(n, {
                                children: a(d.h6, {
                                  dir: `auto`,
                                  style: {
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `18px`,
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)))`,
                                  },
                                  children: `Serenity height villas`,
                                }),
                              }),
                              className: `framer-gd651l`,
                              fonts: [`Inter`],
                              layoutDependency: Q,
                              layoutId: `cbbr1O3EA`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                              },
                              text: k,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            s(d.div, {
                              className: `framer-1jrn3sh`,
                              "data-framer-name": `Information`,
                              layoutDependency: Q,
                              layoutId: `uV6zj7gOZ`,
                              children: [
                                a(g, {
                                  __fromCanvasComponent: !0,
                                  children: a(n, {
                                    children: a(d.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `-0.05em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138)))`,
                                      },
                                      children: `Audience`,
                                    }),
                                  }),
                                  className: `framer-i2lzbb`,
                                  fonts: [`Inter`],
                                  layoutDependency: Q,
                                  layoutId: `eHyAQrPzz`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: A,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(g, {
                                  __fromCanvasComponent: !0,
                                  children: a(n, {
                                    children: a(d.p, {
                                      dir: `auto`,
                                      style: {
                                        "--font-selector": `RlM7TWFucm9wZS1tZWRpdW0=`,
                                        "--framer-font-family": `"Manrope", "Manrope Placeholder", sans-serif`,
                                        "--framer-font-size": `12px`,
                                        "--framer-font-weight": `500`,
                                        "--framer-letter-spacing": `-0.04em`,
                                        "--framer-line-height": `100%`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138)))`,
                                      },
                                      children: `•`,
                                    }),
                                  }),
                                  className: `framer-1hcdoh`,
                                  fonts: [`FS;Manrope-medium`],
                                  layoutDependency: Q,
                                  layoutId: `L6Km0bejR`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                a(g, {
                                  __fromCanvasComponent: !0,
                                  children: a(n, {
                                    children: a(d.p, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `14px`,
                                        "--framer-letter-spacing": `-0.05em`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138)))`,
                                      },
                                      children: `6 min`,
                                    }),
                                  }),
                                  className: `framer-nercz6`,
                                  fonts: [`Inter`],
                                  layoutDependency: Q,
                                  layoutId: `gj0w152lo`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: N,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-yGueb.framer-1uesde8, .framer-yGueb .framer-1uesde8 { display: block; }`,
          `.framer-yGueb.framer-46ga9f { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 440px; }`,
          `.framer-yGueb .framer-saejla { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yGueb .framer-zyg8hz { flex: 1 0 0px; height: auto; max-width: 100%; position: relative; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-yGueb .framer-8sv17g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: absolute; right: 24px; top: 24px; width: min-content; z-index: 1; }`,
          `.framer-yGueb .framer-4pikw7-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-yGueb .framer-vkeys { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yGueb .framer-zbt0uu { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-yGueb .framer-1iqbmnb { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-yGueb .framer-gd651l { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-yGueb .framer-1jrn3sh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-yGueb .framer-i2lzbb, .framer-yGueb .framer-1hcdoh, .framer-yGueb .framer-nercz6 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-yGueb.framer-v-11ilrr4.framer-46ga9f { cursor: unset; width: 900px; }`,
          `.framer-yGueb.framer-v-11ilrr4 .framer-zyg8hz { height: 383px; }`,
        ],
        `framer-yGueb`
      )),
      (q.displayName = `Blog Card`),
      (q.defaultProps = { height: 382.5, width: 440 }),
      E(q, {
        variant: {
          options: [`PCX51OaaK`, `Dq7Ou47HX`],
          optionTitles: [`Blog Card`, `Feature Card`],
          title: `Variant`,
          type: k.Enum,
        },
        G28a3xS1l: {
          __defaultAssetReference: `data:framer/asset-reference,jM4LbFZsm3SjiRzVElOxTevcfQ.jpg?originalFilename=Athlete+in+Motion.jpg&width=1200&height=904`,
          title: `Image`,
          type: k.ResponsiveImage,
        },
        VtVUt2K0x: {
          defaultValue: `Serenity height villas`,
          displayTextArea: !1,
          title: `Title`,
          type: k.String,
        },
        onVtVUt2K0xChange: { changes: `VtVUt2K0x`, type: k.ChangeHandler },
        Pjf9geszM: {
          defaultValue: `Audience`,
          displayTextArea: !1,
          title: `Category`,
          type: k.String,
        },
        onPjf9geszMChange: { changes: `Pjf9geszM`, type: k.ChangeHandler },
        zMelyq2xf: {
          defaultValue: `6 min`,
          displayTextArea: !1,
          title: `Read Time`,
          type: k.String,
        },
        onzMelyq2xfChange: { changes: `zMelyq2xf`, type: k.ChangeHandler },
      }),
      h(
        q,
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
              {
                cssFamilyName: `Manrope`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Manrope`,
                url: `../../assets/misc/CIM4KQCLZSMMLWPVH25IDDSTY4ENPHEY.woff2`,
                weight: `500`,
              },
            ],
          },
          ...N,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { J as n, q as t };
//# sourceMappingURL=Q2lmlORGh.mE3XBzWB.mjs.map
