import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  F as t,
  M as n,
  T as r,
  c as i,
  g as a,
  j as o,
  k as s,
  l as c,
  o as l,
  y as u,
} from "./react.BSDwOlon.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.CxF0nSu_.mjs";
import {
  A as h,
  Dt as g,
  E as _,
  Et as v,
  H as y,
  N as b,
  Tt as x,
  V as S,
  Y as C,
  g as w,
  k as T,
  lt as E,
  o as D,
  vt as O,
} from "./framer.qahQ4u2X.mjs";
import { a as k, i as A, o as j, r as M } from "./shared-lib.C3NetiJi.mjs";
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (l(),
      C(),
      r(),
      (N = `var(--framer-icon-mask)`),
      (P = a(function (e, t) {
        return i(`svg`, { ...e, ref: t, children: e.children });
      })),
      (F = d.create(P)),
      (I = a((e, t) => {
        let { animated: n, layoutId: r, children: a, ...o } = e;
        return n
          ? i(F, { ...o, layoutId: r, ref: t, children: a })
          : i(`svg`, { ...o, ref: t, children: a });
      })),
      (L = `<svg display="block" role="presentation" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 5.5 5.25 L 0 10.5" fill="transparent" height="10.5px" id="pTO_zwTXv" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(13.75 6.75)" width="5.5px"/><path d="M 14.25 0 L 0 0" fill="transparent" height="1px" id="Jh7NTfV71" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--1335ju, 1.5)" stroke="var(--18mrqx2, rgb(0, 0, 0))" transform="translate(4.75 12)" width="14.25px"/></svg>`),
      (R = ({ dots: e, height: t, id: n, stroke: r, width: i, width1: a, ...o }) => ({
        ...o,
        BKVe8Pgvw: e ?? o.BKVe8Pgvw ?? 1,
        fICyAUQY1: r ?? o.fICyAUQY1 ?? `rgb(0, 0, 0)`,
        lKf_CQTz5: a ?? o.lKf_CQTz5 ?? 1.5,
      })),
      (z = g(
        a(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: a,
              variant: o,
              fICyAUQY1: s,
              lKf_CQTz5: c,
              BKVe8Pgvw: l,
              ...u
            } = R(e),
            d = x(`1173457374`, L);
          return i(I, {
            ...u,
            className: b(`framer-EcgqK`, r),
            layoutId: a,
            ref: t,
            role: `presentation`,
            style: { "--1335ju": c, "--18mrqx2": s, ...n },
            viewBox: `0 0 24 24`,
            children: i(`use`, { href: d }),
          });
        }),
        [
          `.framer-EcgqK { -webkit-mask: ${N}; aspect-ratio: 1; display: block; mask: ${N}; width: 24px; }`,
        ],
        `framer-EcgqK`
      )),
      (z.displayName = `Arrow Right`),
      h(z, {
        fICyAUQY1: { defaultValue: `rgb(0, 0, 0)`, hidden: !1, title: `Stroke`, type: D.Color },
        lKf_CQTz5: {
          defaultValue: 1.5,
          displayStepper: !0,
          hidden: !1,
          max: 4,
          min: 0,
          step: 0.5,
          title: `Width`,
          type: D.Number,
        },
        BKVe8Pgvw: {
          defaultValue: 1,
          displayStepper: !0,
          hidden: !0,
          max: 4,
          min: 1,
          title: `Dots`,
          type: D.Number,
        },
      }));
  });
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  ee = e(() => {
    (l(),
      C(),
      m(),
      r(),
      B(),
      j(),
      (H = S(z)),
      (U = { jgw04tyIQ: { hover: !0 } }),
      (W = [`jgw04tyIQ`, `tJuAPrFeT`]),
      (G = `framer-cXo6S`),
      (K = { jgw04tyIQ: `framer-v-iuo8nz`, tJuAPrFeT: `framer-v-1opb2xk` }),
      (q = { delay: 0, duration: 0.6, ease: [0.12, 0.23, 0, 1], type: `tween` }),
      (J = ({ value: e, children: t }) => {
        let r = o(f),
          a = e ?? r.transition,
          s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
        return i(f.Provider, { value: s, children: t });
      }),
      (Y = { "Tablet/Phone": `tJuAPrFeT`, Desktop: `jgw04tyIQ` }),
      (X = d.create(t)),
      (Z = ({
        fill: e,
        height: t,
        id: n,
        link: r,
        newTab: i,
        textColor: a,
        title: o,
        width: s,
        ...c
      }) => ({
        ...c,
        Hd9QGxOtK: r ?? c.Hd9QGxOtK,
        k6v4IaiQz: i ?? c.k6v4IaiQz,
        suovcfe8I: o ?? c.suovcfe8I ?? `Button`,
        TGw4ZKdXt:
          e ??
          c.TGw4ZKdXt ??
          `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
        variant: Y[c.variant] ?? c.variant ?? `jgw04tyIQ`,
        vGze8YVfr:
          a ??
          c.vGze8YVfr ??
          `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))`,
      })),
      (Q = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = g(
        a(function (e, n) {
          let r = s(null),
            a = n ?? r,
            o = u(),
            { activeLocale: l, setLocale: f } = O();
          E();
          let {
              style: m,
              className: h,
              layoutId: g,
              variant: y,
              suovcfe8I: x,
              TGw4ZKdXt: S,
              vGze8YVfr: C,
              k6v4IaiQz: T,
              Hd9QGxOtK: D,
              ...k
            } = Z(e),
            {
              baseVariant: A,
              classNames: j,
              clearLoadingGesture: N,
              gestureHandlers: P,
              gestureVariant: F,
              isLoading: I,
              setGestureState: L,
              setVariant: R,
              variants: B,
            } = v({
              cycleOrder: W,
              defaultVariant: `jgw04tyIQ`,
              enabledGestures: U,
              ref: a,
              variant: y,
              variantClassNames: K,
            }),
            H = Q(e, B),
            Y = b(G, M);
          return i(p, {
            id: g ?? o,
            children: i(X, {
              animate: B,
              initial: !1,
              children: i(J, {
                value: q,
                children: i(w, {
                  href: D,
                  motionChild: !0,
                  nodeId: `jgw04tyIQ`,
                  openInNewTab: T,
                  scopeId: `u6sZbq51Z`,
                  smoothScroll: !0,
                  children: i(d.a, {
                    ...k,
                    ...P,
                    className: `${b(Y, `framer-iuo8nz`, h, j)} framer-152fd7j`,
                    "data-framer-name": `Desktop`,
                    layoutDependency: H,
                    layoutId: `jgw04tyIQ`,
                    ref: a,
                    style: { ...m },
                    ...V(
                      {
                        "jgw04tyIQ-hover": { "data-framer-name": void 0 },
                        tJuAPrFeT: { "data-framer-name": `Tablet/Phone` },
                      },
                      A,
                      F
                    ),
                    children: i(J, {
                      value: q,
                      children: c(d.div, {
                        className: `framer-11abo5p`,
                        "data-framer-name": `Container`,
                        layoutDependency: H,
                        layoutId: `J1BOMNKH4`,
                        style: {
                          backgroundColor: S,
                          borderBottomLeftRadius: 1e3,
                          borderBottomRightRadius: 1e3,
                          borderTopLeftRadius: 1e3,
                          borderTopRightRadius: 1e3,
                          boxShadow: `inset -2px -2px 4px 0px rgba(0, 0, 0, 0.35)`,
                        },
                        children: [
                          i(J, {
                            value: q,
                            children: i(d.div, {
                              className: `framer-1mm4i2c`,
                              "data-framer-name": `Icon Base`,
                              layoutDependency: H,
                              layoutId: `ceDzGrEyh`,
                              style: {
                                backgroundColor: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(246, 184, 208))`,
                                borderBottomLeftRadius: 1e3,
                                borderBottomRightRadius: 1e3,
                                borderTopLeftRadius: 1e3,
                                borderTopRightRadius: 1e3,
                                rotate: 0,
                              },
                              variants: { "jgw04tyIQ-hover": { rotate: 540 } },
                              children: i(J, {
                                value: q,
                                children: i(z, {
                                  animated: !0,
                                  className: `framer-f8evde`,
                                  layoutDependency: H,
                                  layoutId: `BjXcoUuqj`,
                                  style: {
                                    "--1335ju": 2.5,
                                    "--18mrqx2": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                    "--3it368": 1,
                                  },
                                }),
                              }),
                            }),
                          }),
                          i(J, {
                            value: q,
                            children: i(_, {
                              __fromCanvasComponent: !0,
                              children: i(t, {
                                children: i(d.p, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-vGze8YVfr-u6sZbq51Z))`,
                                  },
                                  children: `Button`,
                                }),
                              }),
                              className: `framer-e6tceo`,
                              fonts: [`Inter`],
                              layoutDependency: H,
                              layoutId: `lYNVr8iy_`,
                              style: {
                                "--extracted-r6o4lv": `var(--variable-reference-vGze8YVfr-u6sZbq51Z)`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                                "--variable-reference-vGze8YVfr-u6sZbq51Z": C,
                              },
                              text: x,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
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
          `.framer-cXo6S.framer-152fd7j, .framer-cXo6S .framer-152fd7j { display: block; }`,
          `.framer-cXo6S.framer-iuo8nz { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-cXo6S .framer-11abo5p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 20px 4px 4px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-cXo6S .framer-1mm4i2c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-cXo6S .framer-f8evde { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); position: relative; width: 20px; }`,
          `.framer-cXo6S .framer-e6tceo { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 0; }`,
          `.framer-cXo6S.framer-v-1opb2xk .framer-11abo5p { padding: 4px 16px 4px 4px; }`,
          `.framer-cXo6S.framer-v-1opb2xk .framer-f8evde { height: var(--framer-aspect-ratio-supported, 16px); width: 16px; }`,
          `.framer-cXo6S.framer-v-iuo8nz.hover .framer-11abo5p { padding: 4px 4px 4px 20px; }`,
          `.framer-cXo6S.framer-v-iuo8nz.hover .framer-1mm4i2c { order: 1; }`,
          `.framer-cXo6S.framer-v-iuo8nz.hover .framer-e6tceo { order: 0; }`,
          ...A,
        ],
        `framer-cXo6S`
      )),
      ($.displayName = `Button Main`),
      ($.defaultProps = { height: 52, width: 156 }),
      h($, {
        variant: {
          options: [`jgw04tyIQ`, `tJuAPrFeT`],
          optionTitles: [`Desktop`, `Tablet/Phone`],
          title: `Variant`,
          type: D.Enum,
        },
        suovcfe8I: { defaultValue: `Button`, displayTextArea: !1, title: `Title`, type: D.String },
        onsuovcfe8IChange: { changes: `suovcfe8I`, type: D.ChangeHandler },
        TGw4ZKdXt: {
          defaultValue: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)) /* {"name":"Primary"} */`,
          title: `Fill`,
          type: D.Color,
        },
        vGze8YVfr: {
          defaultValue: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))`,
          title: `Text Color`,
          type: D.Color,
        },
        k6v4IaiQz: { defaultValue: !1, title: `New Tab`, type: D.Boolean },
        onk6v4IaiQzChange: { changes: `k6v4IaiQz`, type: D.ChangeHandler },
        Hd9QGxOtK: { title: `Link`, type: D.Link },
      }),
      T(
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
          ...H,
          ...y(k),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { ee as n, $ as t };
//# sourceMappingURL=u6sZbq51Z.ChlA8XFS.mjs.map
