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
} from "./react.BtSUcPAM.mjs";
import { P as u, i as d, o as f, t as p } from "./motion.B_UOAosx.mjs";
import {
  Ft as m,
  I as h,
  M as g,
  N as _,
  O as v,
  Pt as y,
  Q as b,
  Tt as x,
  ht as S,
  o as C,
  v as w,
} from "./framer.DuFjdl15.mjs";
function T(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (s(),
      b(),
      p(),
      t(),
      (E = {
        FGN7U0zca: { hover: !0 },
        TrdXMFkx6: { hover: !0 },
        TY6QPpYqQ: { hover: !0 },
        U6uNneSRp: { hover: !0 },
      }),
      (D = [`U6uNneSRp`, `TY6QPpYqQ`, `TrdXMFkx6`, `FGN7U0zca`]),
      (O = `framer-G8Kw6`),
      (k = {
        FGN7U0zca: `framer-v-impanp`,
        TrdXMFkx6: `framer-v-1pgarha`,
        TY6QPpYqQ: `framer-v-tpfrsj`,
        U6uNneSRp: `framer-v-1xmxd43`,
      }),
      (A = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (j = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (M = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (N = {
        "Dark Button": `TY6QPpYqQ`,
        "Light Button": `U6uNneSRp`,
        "Light Outline Button": `FGN7U0zca`,
        "Outline Button": `TrdXMFkx6`,
      }),
      (P = u.create(r)),
      (F = ({
        buttonTitle: e,
        fontSize: t,
        height: n,
        id: r,
        link: i,
        newTab: a,
        padding: o,
        width: s,
        ...c
      }) => ({
        ...c,
        cM24uPpbD: a ?? c.cM24uPpbD,
        H6dPn3zGc: t ?? c.H6dPn3zGc ?? 16,
        iXZSHzCME: o ?? c.iXZSHzCME ?? `10px 18px 10px 18px`,
        variant: N[c.variant] ?? c.variant ?? `U6uNneSRp`,
        XhybYdcoB: e ?? c.XhybYdcoB ?? `Shop Now`,
        zTMMog7f6: i ?? c.zTMMog7f6,
      })),
      (I = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (L = m(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: f } = x();
          S();
          let {
              style: p,
              className: m,
              layoutId: g,
              variant: _,
              XhybYdcoB: b,
              zTMMog7f6: C,
              cM24uPpbD: N,
              H6dPn3zGc: L,
              iXZSHzCME: R,
              ...z
            } = F(e),
            {
              baseVariant: B,
              classNames: V,
              clearLoadingGesture: H,
              gestureHandlers: U,
              gestureVariant: W,
              isLoading: G,
              setGestureState: K,
              setVariant: q,
              variants: J,
            } = y({
              cycleOrder: D,
              defaultVariant: `U6uNneSRp`,
              enabledGestures: E,
              ref: a,
              variant: _,
              variantClassNames: k,
            }),
            Y = I(e, J),
            X = h(O);
          return l(d, {
            id: g ?? s,
            children: l(P, {
              animate: J,
              initial: !1,
              children: l(M, {
                value: j,
                children: l(w, {
                  href: C,
                  motionChild: !0,
                  nodeId: `U6uNneSRp`,
                  openInNewTab: N,
                  scopeId: `xPaHsKAuL`,
                  children: l(u.a, {
                    ...z,
                    ...U,
                    className: `${h(X, `framer-1xmxd43`, m, V)} framer-dssnir`,
                    "data-framer-name": `Light Button`,
                    layoutDependency: Y,
                    layoutId: `U6uNneSRp`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `0px`,
                      "--border-color": `rgba(0, 0, 0, 0)`,
                      "--border-left-width": `0px`,
                      "--border-right-width": `0px`,
                      "--border-style": `solid`,
                      "--border-top-width": `0px`,
                      "--eourp2": A(R),
                      backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 100,
                      borderBottomRightRadius: 100,
                      borderTopLeftRadius: 100,
                      borderTopRightRadius: 100,
                      boxShadow: `0px 1px 2px 0px rgba(0, 0, 0, 0.05)`,
                      ...p,
                    },
                    variants: {
                      "FGN7U0zca-hover": { backgroundColor: `rgb(250, 250, 250)` },
                      "TrdXMFkx6-hover": { backgroundColor: `rgb(250, 250, 250)` },
                      "TY6QPpYqQ-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-603d7e0f-6fcc-45a2-988c-5eb69e68e97f, rgb(46, 46, 46))`,
                      },
                      "U6uNneSRp-hover": {
                        "--border-bottom-width": `0px`,
                        "--border-left-width": `0px`,
                        "--border-right-width": `0px`,
                        "--border-top-width": `0px`,
                        backgroundColor: `rgb(232, 232, 232)`,
                        boxShadow: `none`,
                      },
                      FGN7U0zca: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      TrdXMFkx6: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                      },
                      TY6QPpYqQ: {
                        backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      },
                    },
                    ...T(
                      {
                        "FGN7U0zca-hover": { "data-framer-name": void 0 },
                        "TrdXMFkx6-hover": { "data-framer-name": void 0 },
                        "TY6QPpYqQ-hover": { "data-framer-name": void 0 },
                        "U6uNneSRp-hover": { "data-framer-name": void 0 },
                        FGN7U0zca: {
                          "data-border": !0,
                          "data-framer-name": `Light Outline Button`,
                        },
                        TrdXMFkx6: { "data-border": !0, "data-framer-name": `Outline Button` },
                        TY6QPpYqQ: { "data-framer-name": `Dark Button` },
                      },
                      B,
                      W
                    ),
                    children: l(v, {
                      __fromCanvasComponent: !0,
                      children: l(r, {
                        children: l(u.p, {
                          dir: `auto`,
                          style: {
                            "--framer-font-size": `calc(var(--variable-reference-H6dPn3zGc-xPaHsKAuL) * 1px)`,
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                          },
                          children: `Shop Now`,
                        }),
                      }),
                      className: `framer-w0lpxc`,
                      "data-framer-name": `White Text`,
                      fonts: [`Inter`],
                      layoutDependency: Y,
                      layoutId: `oZ61CQ7um`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                        "--variable-reference-H6dPn3zGc-xPaHsKAuL": L,
                      },
                      text: b,
                      variants: {
                        TY6QPpYqQ: {
                          "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...T(
                        {
                          TY6QPpYqQ: {
                            children: l(r, {
                              children: l(u.p, {
                                dir: `auto`,
                                style: {
                                  "--framer-font-size": `calc(var(--variable-reference-H6dPn3zGc-xPaHsKAuL) * 1px)`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))`,
                                },
                                children: `Shop Now`,
                              }),
                            }),
                          },
                        },
                        B,
                        W
                      ),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-G8Kw6.framer-dssnir, .framer-G8Kw6 .framer-dssnir { display: block; }`,
          `.framer-G8Kw6.framer-1xmxd43 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: var(--eourp2); position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-G8Kw6 .framer-w0lpxc { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-G8Kw6[data-border="true"]::after, .framer-G8Kw6 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-G8Kw6`
      )),
      (L.displayName = `Button`),
      (L.defaultProps = { height: 39, width: 114 }),
      _(L, {
        variant: {
          options: [`U6uNneSRp`, `TY6QPpYqQ`, `TrdXMFkx6`, `FGN7U0zca`],
          optionTitles: [`Light Button`, `Dark Button`, `Outline Button`, `Light Outline Button`],
          title: `Variant`,
          type: C.Enum,
        },
        XhybYdcoB: {
          defaultValue: `Shop Now`,
          description: ``,
          displayTextArea: !1,
          title: `Button Title`,
          type: C.String,
        },
        onXhybYdcoBChange: { changes: `XhybYdcoB`, type: C.ChangeHandler },
        zTMMog7f6: { title: `Link`, type: C.Link },
        cM24uPpbD: { defaultValue: !1, title: `New Tab`, type: C.Boolean },
        oncM24uPpbDChange: { changes: `cM24uPpbD`, type: C.ChangeHandler },
        H6dPn3zGc: { defaultValue: 16, title: `Font Size`, type: C.Number },
        onH6dPn3zGcChange: { changes: `H6dPn3zGc`, type: C.ChangeHandler },
        iXZSHzCME: { defaultValue: `10px 18px 10px 18px`, title: `Padding`, type: C.Padding },
      }),
      g(
        L,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { R as n, L as t };
//# sourceMappingURL=xPaHsKAuL.BjgDwkPt.mjs.map
