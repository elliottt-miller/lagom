import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import {
  A as t,
  C as n,
  D as r,
  N as i,
  c as a,
  g as o,
  k as s,
  l as c,
  o as l,
  v as u,
} from "./react.CAGFp8w4.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.D9nDYnVb.mjs";
import {
  C as h,
  D as g,
  E as _,
  K as v,
  M as y,
  at as b,
  bt as x,
  j as S,
  mt as C,
  o as w,
  w as T,
  xt as E,
} from "./framer.yhOKXYuv.mjs";
function D(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z,
  B = e(() => {
    (l(),
      v(),
      m(),
      n(),
      (O = { t6QjBJQH9: { hover: !0, pressed: !0 }, XRjP5Cd09: { hover: !0 } }),
      (k = [`t6QjBJQH9`, `E69HO_QGe`, `XRjP5Cd09`, `pa39K6aJp`, `KXrVBqbl1`]),
      (A = `framer-CsLk2`),
      (j = {
        E69HO_QGe: `framer-v-1wkxkmn`,
        KXrVBqbl1: `framer-v-1xxsamo`,
        pa39K6aJp: `framer-v-oew5n0`,
        t6QjBJQH9: `framer-v-1cq7gl9`,
        XRjP5Cd09: `framer-v-1k3b2ki`,
      }),
      (M = { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (N = ({ value: e, children: n }) => {
        let r = s(f),
          i = e ?? r.transition,
          o = t(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
        return a(f.Provider, { value: o, children: n });
      }),
      (P = {
        "Variant 1": `t6QjBJQH9`,
        "Variant 2": `E69HO_QGe`,
        "Variant 3": `XRjP5Cd09`,
        "Variant 4": `pa39K6aJp`,
        "Variant 5": `KXrVBqbl1`,
      }),
      (F = d.create(i)),
      (I = ({ fill: e, height: t, id: n, textColor: r, title: i, width: a, ...o }) => ({
        ...o,
        Jt36NHN_f:
          r ?? o.Jt36NHN_f ?? `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5))`,
        OfHRPOZED: i ?? o.OfHRPOZED ?? `Add to Cart`,
        RyAdtOSXK: e ?? o.RyAdtOSXK ?? `rgb(255, 255, 255)`,
        variant: P[o.variant] ?? o.variant ?? `t6QjBJQH9`,
      })),
      (L = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (R = E(
        o(function (e, t) {
          let n = r(null),
            o = t ?? n,
            s = u(),
            { activeLocale: l, setLocale: f } = C();
          b();
          let {
              style: m,
              className: g,
              layoutId: _,
              variant: v,
              OfHRPOZED: y,
              RyAdtOSXK: w,
              Jt36NHN_f: E,
              ...P
            } = I(e),
            {
              baseVariant: R,
              classNames: z,
              clearLoadingGesture: B,
              gestureHandlers: V,
              gestureVariant: H,
              isLoading: U,
              setGestureState: W,
              setVariant: G,
              variants: K,
            } = x({
              cycleOrder: k,
              defaultVariant: `t6QjBJQH9`,
              enabledGestures: O,
              ref: o,
              variant: v,
              variantClassNames: j,
            }),
            q = L(e, K),
            J = S(A);
          return a(p, {
            id: _ ?? s,
            children: a(F, {
              animate: K,
              initial: !1,
              children: a(N, {
                value: M,
                children: c(d.div, {
                  ...P,
                  ...V,
                  className: S(J, `framer-1cq7gl9`, g, z),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: q,
                  layoutId: `t6QjBJQH9`,
                  ref: o,
                  style: {
                    backgroundColor: w,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...m,
                  },
                  variants: {
                    "t6QjBJQH9-hover": { backgroundColor: `rgb(5, 4, 4)` },
                    "t6QjBJQH9-pressed": { backgroundColor: `rgb(5, 4, 4)` },
                  },
                  ...D(
                    {
                      "t6QjBJQH9-hover": { "data-framer-name": void 0 },
                      "t6QjBJQH9-pressed": { "data-framer-name": void 0 },
                      "XRjP5Cd09-hover": { "data-framer-name": void 0 },
                      E69HO_QGe: { "data-framer-name": `Variant 2` },
                      KXrVBqbl1: { "data-framer-name": `Variant 5` },
                      pa39K6aJp: { "data-framer-name": `Variant 4` },
                      XRjP5Cd09: { "data-framer-name": `Variant 3` },
                    },
                    R,
                    H
                  ),
                  children: [
                    a(T, {
                      className: `framer-18nhv1n`,
                      layoutDependency: q,
                      layoutId: `h68xUsXgn`,
                      requiresOverflowVisible: !1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 397 397" overflow="visible"><path d="M 198.5 0 C 308.129 0 397 88.871 397 198.5 C 397 308.129 308.129 397 198.5 397 C 88.871 397 0 308.129 0 198.5 C 0 88.871 88.871 0 198.5 0 Z" fill="var(--token-a87a1b5b-5ffb-4186-aa38-97c8281399f0, rgb(255, 249, 224)) /* {&quot;name&quot;:&quot;Background&quot;} */"></path></svg>`,
                      withExternalLayout: !0,
                      ...D(
                        {
                          "t6QjBJQH9-hover": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 397 397" overflow="visible"><path d="M 198.5 0 C 308.129 0 397 88.871 397 198.5 C 397 308.129 308.129 397 198.5 397 C 88.871 397 0 308.129 0 198.5 C 0 88.871 88.871 0 198.5 0 Z" fill="var(--token-a87a1b5b-5ffb-4186-aa38-97c8281399f0, rgb(255, 249, 224))"></path></svg>`,
                          },
                          "t6QjBJQH9-pressed": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 397 397" overflow="visible"><path d="M 198.5 0 C 308.129 0 397 88.871 397 198.5 C 397 308.129 308.129 397 198.5 397 C 88.871 397 0 308.129 0 198.5 C 0 88.871 88.871 0 198.5 0 Z" fill="rgb(238, 203, 58)"></path></svg>`,
                          },
                          "XRjP5Cd09-hover": {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 397 397" overflow="visible"><path d="M 198.5 0 C 308.129 0 397 88.871 397 198.5 C 397 308.129 308.129 397 198.5 397 C 88.871 397 0 308.129 0 198.5 C 0 88.871 88.871 0 198.5 0 Z" fill="rgb(238, 203, 58)"></path></svg>`,
                          },
                        },
                        R,
                        H
                      ),
                    }),
                    a(h, {
                      __fromCanvasComponent: !0,
                      children: a(i, {
                        children: a(d.p, {
                          dir: `auto`,
                          style: {
                            "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                            "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                            "--framer-font-size": `28px`,
                            "--framer-font-weight": `700`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Jt36NHN_f-i0fKFuY2o))`,
                          },
                          children: `Add to Cart`,
                        }),
                      }),
                      className: `framer-19pjv8j`,
                      fonts: [`CUSTOMV2;Mona Sans Condensed Bold`],
                      layoutDependency: q,
                      layoutId: `SDRFr4rhL`,
                      style: {
                        "--extracted-r6o4lv": `var(--variable-reference-Jt36NHN_f-i0fKFuY2o)`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-Jt36NHN_f-i0fKFuY2o": E,
                      },
                      text: y,
                      variants: {
                        "t6QjBJQH9-hover": { "--extracted-r6o4lv": `rgb(5, 4, 4)` },
                        "t6QjBJQH9-pressed": { "--extracted-r6o4lv": `rgb(5, 4, 4)` },
                        "XRjP5Cd09-hover": {
                          "--extracted-r6o4lv": `var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...D(
                        {
                          "t6QjBJQH9-hover": {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `28px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(5, 4, 4))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                          "t6QjBJQH9-pressed": {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `28px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, rgb(5, 4, 4))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                          "XRjP5Cd09-hover": {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-419394a1-565d-4952-8ba3-b4f1eb92339c, rgb(5, 5, 5)))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                          E69HO_QGe: {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Jt36NHN_f-i0fKFuY2o))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                          KXrVBqbl1: {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Jt36NHN_f-i0fKFuY2o))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                          XRjP5Cd09: {
                            children: a(i, {
                              children: a(d.p, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `Q1VTVE9NVjI7TW9uYSBTYW5zIENvbmRlbnNlZCBCb2xk`,
                                  "--framer-font-family": `"Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif`,
                                  "--framer-font-size": `18px`,
                                  "--framer-font-weight": `700`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-Jt36NHN_f-i0fKFuY2o))`,
                                },
                                children: `Add to Cart`,
                              }),
                            }),
                          },
                        },
                        R,
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
          `.framer-CsLk2.framer-1hlc6je, .framer-CsLk2 .framer-1hlc6je { display: block; }`,
          `.framer-CsLk2.framer-1cq7gl9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 18px 36px 18px 36px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-CsLk2 .framer-18nhv1n { height: 397px; left: -84px; position: absolute; top: 75px; width: 397px; }`,
          `.framer-CsLk2 .framer-19pjv8j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-CsLk2.framer-v-1wkxkmn.framer-1cq7gl9, .framer-CsLk2.framer-v-1xxsamo.framer-1cq7gl9 { cursor: unset; padding: 12px 32px 12px 32px; }`,
          `.framer-CsLk2.framer-v-1k3b2ki.framer-1cq7gl9 { padding: 8px 26px 8px 26px; }`,
          `.framer-CsLk2.framer-v-1k3b2ki .framer-18nhv1n { left: -74px; }`,
          `.framer-CsLk2.framer-v-oew5n0.framer-1cq7gl9 { cursor: unset; }`,
          `.framer-CsLk2.framer-v-1cq7gl9.hover .framer-18nhv1n, .framer-CsLk2.framer-v-1cq7gl9.pressed .framer-18nhv1n { top: -55px; }`,
          `.framer-CsLk2.framer-v-1k3b2ki.hover .framer-18nhv1n { top: -65px; }`,
        ],
        `framer-CsLk2`
      )),
      (z = R),
      (R.displayName = `Cta Button`),
      (R.defaultProps = { height: 69.5, width: 178.5 }),
      g(R, {
        variant: {
          options: [`t6QjBJQH9`, `E69HO_QGe`, `XRjP5Cd09`, `pa39K6aJp`, `KXrVBqbl1`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`, `Variant 5`],
          title: `Variant`,
          type: w.Enum,
        },
        OfHRPOZED: {
          defaultValue: `Add to Cart`,
          displayTextArea: !1,
          title: `Title`,
          type: w.String,
        },
        onOfHRPOZEDChange: { changes: `OfHRPOZED`, type: w.ChangeHandler },
        RyAdtOSXK: { defaultValue: `rgb(255, 255, 255)`, title: `Fill`, type: w.Color },
        Jt36NHN_f: {
          defaultValue: `var(--token-42ea8082-5244-4850-882c-34ee79535faf, rgb(5, 5, 5)) /* {"name":"Title"} */`,
          title: `Text color`,
          type: w.Color,
        },
      }),
      _(
        R,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Mona Sans Condensed Bold`,
                source: `custom`,
                style: `normal`,
                uiFamilyName: `Mona Sans Condensed`,
                url: `../../assets/fonts/6iwC6STWvic4aW9ENkaXYx1Abto.woff2`,
                weight: `700`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  V,
  H,
  U,
  W = e(() => {
    (v(),
      y.loadFonts([`CUSTOMV2;Mona Sans Condensed Bold`]),
      (V = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Mona Sans Condensed Bold`,
              source: `custom`,
              style: `normal`,
              uiFamilyName: `Mona Sans Condensed`,
              url: `../../assets/fonts/6iwC6STWvic4aW9ENkaXYx1Abto.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (H = [
        `.framer-htgeB .framer-styles-preset-qs6dm5:not(.rich-text-wrapper), .framer-htgeB .framer-styles-preset-qs6dm5.rich-text-wrapper h2 { --framer-font-family: "Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 60px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.9em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-42ea8082-5244-4850-882c-34ee79535faf, #262626); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1439px) and (min-width: 810px) { .framer-htgeB .framer-styles-preset-qs6dm5:not(.rich-text-wrapper), .framer-htgeB .framer-styles-preset-qs6dm5.rich-text-wrapper h2 { --framer-font-family: "Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 48px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.9em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-42ea8082-5244-4850-882c-34ee79535faf, #262626); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-htgeB .framer-styles-preset-qs6dm5:not(.rich-text-wrapper), .framer-htgeB .framer-styles-preset-qs6dm5.rich-text-wrapper h2 { --framer-font-family: "Mona Sans Condensed Bold", "Mona Sans Condensed Bold Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 36px; --framer-font-style: normal; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-letter-spacing: 0em; --framer-line-height: 0.9em; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-42ea8082-5244-4850-882c-34ee79535faf, #262626); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (U = `framer-htgeB`));
  });
export { z as a, W as i, H as n, B as o, V as r, U as t };
//# sourceMappingURL=peANJhUp3.CwfrSljs.mjs.map
