import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  E as t,
  I as n,
  M as r,
  N as i,
  T as a,
  c as o,
  m as s,
  s as c,
  u as l,
  x as u,
} from "./react.DJ2-MjhO.mjs";
import { P as d, i as f, o as p, t as m } from "./motion.Bn11pmd7.mjs";
import {
  E as h,
  G as g,
  R as _,
  T as v,
  d as y,
  ft as b,
  i as x,
  it as S,
  k as C,
  p as w,
  vt as T,
  x as E,
  yt as D,
  z as O,
} from "./framer.CS_JK_Iv.mjs";
import { i as k, n as A, r as j, t as M } from "./ilN_pt0Gn.B1pfsNZa.mjs";
function N(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var P,
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
  G = e(() => {
    (o(),
      g(),
      m(),
      t(),
      k(),
      (P = { DbpjEfRXU: { hover: !0 }, JOAp0W7En: { hover: !0 } }),
      (F = [`JOAp0W7En`, `DbpjEfRXU`]),
      (I = `framer-Mvr2u`),
      (L = { DbpjEfRXU: `framer-v-1aovyqm`, JOAp0W7En: `framer-v-m9k1o9` }),
      (R = { delay: 0, duration: 0.45, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (z = ({ value: e, children: t }) => {
        let n = r(p),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return c(p.Provider, { value: o, children: t });
      }),
      (B = d.create(n)),
      (V = { "Button Black": `DbpjEfRXU`, "Button White": `JOAp0W7En` }),
      (H = ({ height: e, id: t, link: n, text: r, width: i, ...a }) => ({
        ...a,
        BtsQvUJh8: r ?? a.BtsQvUJh8 ?? `enroll now for $399`,
        FoLVmcAEo: n ?? a.FoLVmcAEo,
        variant: V[a.variant] ?? a.variant ?? `JOAp0W7En`,
      })),
      (U = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = D(
        s(function (e, t) {
          let r = u(null),
            i = t ?? r,
            o = a(),
            { activeLocale: s, setLocale: p } = b(),
            m = S(),
            {
              style: h,
              className: g,
              layoutId: _,
              variant: v,
              BtsQvUJh8: x,
              FoLVmcAEo: D,
              ...k
            } = H(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: V,
              gestureHandlers: W,
              gestureVariant: G,
              isLoading: K,
              setGestureState: q,
              setVariant: J,
              variants: Y,
            } = T({
              cycleOrder: F,
              defaultVariant: `JOAp0W7En`,
              enabledGestures: P,
              ref: i,
              variant: v,
              variantClassNames: L,
            }),
            X = U(e, Y),
            Z = C(I, M);
          return c(f, {
            id: _ ?? o,
            children: c(B, {
              animate: Y,
              initial: !1,
              children: c(z, {
                value: R,
                children: c(w, {
                  href: D,
                  motionChild: !0,
                  nodeId: `JOAp0W7En`,
                  openInNewTab: !1,
                  scopeId: `iYEILKxH1`,
                  smoothScroll: !0,
                  children: l(d.a, {
                    ...k,
                    ...W,
                    className: `${C(Z, `framer-m9k1o9`, g, j)} framer-d4n2o0`,
                    "data-framer-name": `Button White`,
                    layoutDependency: X,
                    layoutId: `JOAp0W7En`,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `inset 0px 4px 4px 0px rgba(0, 0, 0, 0.16)`,
                      ...h,
                    },
                    variants: {
                      "DbpjEfRXU-hover": {
                        backgroundColor: `var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, rgb(68, 138, 190))`,
                      },
                      "JOAp0W7En-hover": {
                        backgroundColor: `var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, rgb(68, 138, 190))`,
                      },
                      DbpjEfRXU: {
                        backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        boxShadow: `inset 0px 4px 4px 0px rgba(255, 255, 255, 0.16)`,
                      },
                    },
                    ...N(
                      {
                        "DbpjEfRXU-hover": { "data-framer-name": void 0 },
                        "JOAp0W7En-hover": { "data-framer-name": void 0 },
                        DbpjEfRXU: { "data-framer-name": `Button Black` },
                      },
                      A,
                      G
                    ),
                    children: [
                      c(d.div, {
                        className: `framer-1sqevau`,
                        "data-framer-name": `Text Wrapper`,
                        layoutDependency: X,
                        layoutId: `b_URJmYPl`,
                        children: c(E, {
                          __fromCanvasComponent: !0,
                          children: c(n, {
                            children: c(d.p, {
                              className: `framer-styles-preset-1edo0ga`,
                              "data-styles-preset": `ilN_pt0Gn`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                              },
                              children: `enroll now for $399`,
                            }),
                          }),
                          className: `framer-18se7ci`,
                          "data-framer-name": `enroll now for $399`,
                          fonts: [`Inter`],
                          layoutDependency: X,
                          layoutId: `RszUo0WR5`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: x,
                          variants: {
                            "DbpjEfRXU-hover": {
                              "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            },
                            DbpjEfRXU: {
                              "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...N(
                            {
                              "DbpjEfRXU-hover": {
                                children: c(n, {
                                  children: c(d.p, {
                                    className: `framer-styles-preset-1edo0ga`,
                                    "data-styles-preset": `ilN_pt0Gn`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                                    },
                                    children: `enroll now for $399`,
                                  }),
                                }),
                              },
                              DbpjEfRXU: {
                                children: c(n, {
                                  children: c(d.p, {
                                    className: `framer-styles-preset-1edo0ga`,
                                    "data-styles-preset": `ilN_pt0Gn`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                    },
                                    children: `enroll now for $399`,
                                  }),
                                }),
                              },
                            },
                            A,
                            G
                          ),
                        }),
                      }),
                      c(y, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: O((m?.y || 0) + (m?.height || 52) - -10),
                          pixelHeight: 1026,
                          pixelWidth: 6400,
                          positionX: `center`,
                          positionY: `top`,
                          sizes: `calc(${m?.width || `100vw`} * 1.0991)`,
                          src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                          srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                        },
                        className: `framer-1k6rqn`,
                        "data-framer-name": `Cloud`,
                        layoutDependency: X,
                        layoutId: `iLyjJz0ky`,
                        ...N(
                          {
                            "DbpjEfRXU-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: O((m?.y || 0) + (m?.height || 52) - 63),
                                pixelHeight: 1026,
                                pixelWidth: 6400,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: `calc(${m?.width || `100vw`} * 1.0991)`,
                                src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                                srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                              },
                            },
                            "JOAp0W7En-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: O((m?.y || 0) + (m?.height || 52) - 63),
                                pixelHeight: 1026,
                                pixelWidth: 6400,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: `calc(${m?.width || `100vw`} * 1.0991)`,
                                src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                                srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                              },
                            },
                          },
                          A,
                          G
                        ),
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
          `.framer-Mvr2u.framer-d4n2o0, .framer-Mvr2u .framer-d4n2o0 { display: block; }`,
          `.framer-Mvr2u.framer-m9k1o9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 19px 30px 19px 30px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Mvr2u .framer-1sqevau { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-Mvr2u .framer-18se7ci { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
          `.framer-Mvr2u .framer-1k6rqn { bottom: -118px; flex: none; height: 108px; left: -11px; overflow: visible; position: absolute; width: 110%; z-index: 1; }`,
          `.framer-Mvr2u.framer-v-m9k1o9.hover .framer-1k6rqn, .framer-Mvr2u.framer-v-1aovyqm.hover .framer-1k6rqn { bottom: -45px; }`,
          ...A,
        ],
        `framer-Mvr2u`
      )),
      (W.displayName = `Button`),
      (W.defaultProps = { height: 52, width: 188 }),
      h(W, {
        variant: {
          options: [`JOAp0W7En`, `DbpjEfRXU`],
          optionTitles: [`Button White`, `Button Black`],
          title: `Variant`,
          type: x.Enum,
        },
        BtsQvUJh8: {
          defaultValue: `enroll now for $399`,
          displayTextArea: !1,
          title: `Text`,
          type: x.String,
        },
        FoLVmcAEo: { title: `Link`, type: x.Link },
      }),
      v(
        W,
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
          ..._(j),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { G as n, W as t };
//# sourceMappingURL=iYEILKxH1.Cwf9mGHP.mjs.map
