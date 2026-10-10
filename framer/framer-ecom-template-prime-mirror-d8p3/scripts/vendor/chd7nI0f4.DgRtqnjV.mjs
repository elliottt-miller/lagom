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
  pt as w,
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
      (E = { odZpd01kD: { hover: !0 } }),
      (D = [`odZpd01kD`, `I1VVyLX7t`]),
      (O = `framer-XLULd`),
      (k = { I1VVyLX7t: `framer-v-1qxr6he`, odZpd01kD: `framer-v-13iyi9u` }),
      (A = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (j = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (M = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (N = { "Active Tab": `I1VVyLX7t`, "Disable Tab": `odZpd01kD` }),
      (P = u.create(r)),
      (F = ({ click: e, height: t, id: n, padding: r, title: i, width: a, ...o }) => ({
        ...o,
        R3A8bGfB1: i ?? o.R3A8bGfB1 ?? `All`,
        rvv_MNzYv: r ?? o.rvv_MNzYv ?? `5px 20px 5px 20px`,
        variant: N[o.variant] ?? o.variant ?? `odZpd01kD`,
        wt0MSxg3E: e ?? o.wt0MSxg3E,
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
              R3A8bGfB1: b,
              wt0MSxg3E: C,
              rvv_MNzYv: N,
              ...L
            } = F(e),
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
            } = y({
              cycleOrder: D,
              defaultVariant: `odZpd01kD`,
              enabledGestures: E,
              ref: a,
              variant: _,
              variantClassNames: k,
            }),
            q = I(e, K),
            { activeVariantCallback: J, delay: Y } = w(R),
            X = J(async (...e) => {
              if ((W({ isPressed: !1 }), C && (await C(...e)) === !1)) return !1;
            }),
            Z = h(O);
          return l(d, {
            id: g ?? s,
            children: l(P, {
              animate: K,
              initial: !1,
              children: l(M, {
                value: j,
                children: l(u.div, {
                  ...L,
                  ...V,
                  className: h(Z, `framer-13iyi9u`, m, z),
                  "data-framer-name": `Disable Tab`,
                  "data-highlight": !0,
                  layoutDependency: q,
                  layoutId: `odZpd01kD`,
                  onTap: X,
                  ref: a,
                  style: {
                    "--1bgekz9": A(N),
                    backgroundColor: `var(--token-72534714-0887-42d9-aa5a-709674afb825)`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...p,
                  },
                  variants: {
                    "odZpd01kD-hover": {
                      backgroundColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae)`,
                    },
                    I1VVyLX7t: {
                      backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    },
                  },
                  ...T(
                    {
                      "odZpd01kD-hover": { "data-framer-name": void 0 },
                      I1VVyLX7t: { "data-framer-name": `Active Tab` },
                    },
                    R,
                    H
                  ),
                  children: l(v, {
                    __fromCanvasComponent: !0,
                    children: l(r, {
                      children: l(u.p, {
                        dir: `auto`,
                        style: {
                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                          "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                          "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                        },
                        children: `All`,
                      }),
                    }),
                    className: `framer-cqwmz2`,
                    "data-framer-name": `All`,
                    fonts: [`FS;General Sans-variable`],
                    layoutDependency: q,
                    layoutId: `erxLxCLu4`,
                    style: {
                      "--extracted-2gg91v": `"wght" 450`,
                      "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: b,
                    variants: {
                      I1VVyLX7t: {
                        "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...T(
                      {
                        I1VVyLX7t: {
                          children: l(r, {
                            children: l(u.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `RlM7R2VuZXJhbCBTYW5zLXZhcmlhYmxlVkY9SW5kbmFIUWlJRFExTUE9PQ==`,
                                "--framer-font-family": `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                "--framer-font-variation-axes": `var(--extracted-2gg91v, "wght" 450)`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                              },
                              children: `All`,
                            }),
                          }),
                        },
                      },
                      R,
                      H
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-XLULd.framer-1d925qw, .framer-XLULd .framer-1d925qw { display: block; }`,
          `.framer-XLULd.framer-13iyi9u { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: var(--1bgekz9); position: relative; width: min-content; }`,
          `.framer-XLULd .framer-cqwmz2 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        ],
        `framer-XLULd`
      )),
      (L.displayName = `Tab`),
      (L.defaultProps = { height: 29, width: 58.5 }),
      _(L, {
        variant: {
          options: [`odZpd01kD`, `I1VVyLX7t`],
          optionTitles: [`Disable Tab`, `Active Tab`],
          title: `Variant`,
          type: C.Enum,
        },
        R3A8bGfB1: { defaultValue: `All`, displayTextArea: !1, title: `Title`, type: C.String },
        onR3A8bGfB1Change: { changes: `R3A8bGfB1`, type: C.ChangeHandler },
        wt0MSxg3E: { title: `Click`, type: C.EventHandler },
        rvv_MNzYv: { defaultValue: `5px 20px 5px 20px`, title: `Padding`, type: C.Padding },
      }),
      g(
        L,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans Variable`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
                variationAxes: [
                  { defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` },
                ],
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { R as n, L as t };
//# sourceMappingURL=chd7nI0f4.DgRtqnjV.mjs.map
