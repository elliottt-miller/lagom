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
  Ot as v,
  P as y,
  Tt as b,
  X as x,
  _t as S,
  ct as C,
  j as w,
  o as T,
  st as E,
} from "./framer.D9PtOJZM.mjs";
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
  B,
  V,
  H,
  U = e(() => {
    (c(),
      x(),
      m(),
      l(),
      (O = v(d.div)),
      (k = { c7sqOOdhc: { hover: !0, pressed: !0 } }),
      (A = [`c7sqOOdhc`, `RflMXf_z4`, `VJd37mXLK`, `iHv2yqCIN`, `FR5D4yuMj`]),
      (j = `framer-EbsmL`),
      (M = {
        c7sqOOdhc: `framer-v-1ql2mwg`,
        FR5D4yuMj: `framer-v-1ruxefp`,
        iHv2yqCIN: `framer-v-1xyqch8`,
        RflMXf_z4: `framer-v-1jb2a9h`,
        VJd37mXLK: `framer-v-6xbpdt`,
      }),
      (N = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (P = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (F = {
        opacity: 1,
        rotate: 360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (I = (e, t) => `translateX(-50%) ${t}`),
      (L = ({ value: e, children: t }) => {
        let n = r(f),
          o = e ?? n.transition,
          s = i(() => ({ ...n, transition: o }), [JSON.stringify(o)]);
        return a(f.Provider, { value: s, children: t });
      }),
      (R = {
        Default: `c7sqOOdhc`,
        Disabled: `VJd37mXLK`,
        Error: `FR5D4yuMj`,
        Loading: `RflMXf_z4`,
        Success: `iHv2yqCIN`,
      }),
      (z = d.create(n)),
      (B = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        QK76J_qMC: e ?? i.QK76J_qMC,
        variant: R[i.variant] ?? i.variant ?? `c7sqOOdhc`,
      })),
      (V = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (H = _(
        o(function (e, r) {
          let i = t(null),
            o = r ?? i,
            c = u(),
            { activeLocale: l, setLocale: f } = S();
          C();
          let { style: m, className: h, layoutId: _, variant: v, QK76J_qMC: x, ...w } = B(e),
            {
              baseVariant: T,
              classNames: R,
              clearLoadingGesture: H,
              gestureHandlers: U,
              gestureVariant: W,
              isLoading: G,
              setGestureState: K,
              setVariant: ee,
              variants: q,
            } = b({
              cycleOrder: A,
              defaultVariant: `c7sqOOdhc`,
              enabledGestures: k,
              ref: o,
              variant: v,
              variantClassNames: M,
            }),
            J = V(e, q),
            { activeVariantCallback: Y, delay: te } = E(T),
            X = Y(async (...e) => {
              if ((K({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
            }),
            Z = y(j),
            Q = () => T !== `RflMXf_z4`,
            $ = () => T === `RflMXf_z4`;
          return a(p, {
            id: _ ?? c,
            children: a(z, {
              animate: q,
              initial: !1,
              children: a(L, {
                value: N,
                children: s(d.button, {
                  ...w,
                  ...U,
                  className: y(Z, `framer-1ql2mwg`, h, R),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: J,
                  layoutId: `c7sqOOdhc`,
                  onTap: X,
                  ref: o,
                  style: {
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    opacity: 1,
                    ...m,
                  },
                  variants: {
                    "c7sqOOdhc-hover": { opacity: 1 },
                    "c7sqOOdhc-pressed": { opacity: 1 },
                    FR5D4yuMj: { opacity: 1 },
                    iHv2yqCIN: { opacity: 1 },
                    VJd37mXLK: { opacity: 0.5 },
                  },
                  ...D(
                    {
                      "c7sqOOdhc-hover": { "data-framer-name": void 0 },
                      "c7sqOOdhc-pressed": { "data-framer-name": void 0 },
                      FR5D4yuMj: { "data-framer-name": `Error` },
                      iHv2yqCIN: { "data-framer-name": `Success` },
                      RflMXf_z4: { "data-framer-name": `Loading` },
                      VJd37mXLK: { "data-framer-name": `Disabled` },
                    },
                    T,
                    W
                  ),
                  children: [
                    Q() &&
                      a(g, {
                        __fromCanvasComponent: !0,
                        children: a(n, {
                          children: a(d.p, {
                            dir: `auto`,
                            style: {
                              "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                              "--framer-font-family": `"Fragment Mono", monospace`,
                              "--framer-font-size": `12px`,
                              "--framer-letter-spacing": `-0.01em`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                            },
                            children: `SUBMIT`,
                          }),
                        }),
                        className: `framer-1owfz50`,
                        fonts: [`GF;Fragment Mono-regular`],
                        layoutDependency: J,
                        layoutId: `Q0iPKATpL`,
                        style: { "--extracted-r6o4lv": `rgb(255, 255, 255)` },
                        variants: {
                          "c7sqOOdhc-hover": { "--extracted-r6o4lv": `rgba(255, 255, 255, 0.79)` },
                          FR5D4yuMj: { "--extracted-r6o4lv": `rgb(255, 34, 68)` },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...D(
                          {
                            "c7sqOOdhc-hover": {
                              children: a(n, {
                                children: a(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `12px`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(255, 255, 255, 0.79))`,
                                  },
                                  children: `SUBMIT`,
                                }),
                              }),
                            },
                            FR5D4yuMj: {
                              children: a(n, {
                                children: a(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 34, 68))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                            iHv2yqCIN: {
                              children: a(n, {
                                children: a(d.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                                  },
                                  children: `THANK YOU`,
                                }),
                              }),
                            },
                          },
                          T,
                          W
                        ),
                      }),
                    $() &&
                      a(d.div, {
                        className: `framer-1217ebl`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: J,
                        layoutId: `vtaZQU_MV`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                        },
                        children: a(O, {
                          __framer__loop: F,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: P,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-vei7dp`,
                          "data-framer-name": `Conic`,
                          layoutDependency: J,
                          layoutId: `ceI8l1ymn`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            RflMXf_z4: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg?width=20&height=20') alpha no-repeat center / cover add`,
                            },
                          },
                          children: a(d.div, {
                            className: `framer-1pvh7wv`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: J,
                            layoutId: `mlCOL5AZX`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: I,
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
          `.framer-EbsmL.framer-aztwip, .framer-EbsmL .framer-aztwip { display: block; }`,
          `.framer-EbsmL.framer-1ql2mwg { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-EbsmL .framer-1owfz50 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-EbsmL .framer-1217ebl { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }`,
          `.framer-EbsmL .framer-vei7dp { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-EbsmL .framer-1pvh7wv { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-EbsmL.framer-v-1jb2a9h .framer-vei7dp { overflow: hidden; }`,
        ],
        `framer-EbsmL`
      )),
      (H.displayName = `Submit`),
      (H.defaultProps = { height: 14.5, width: 44 }),
      w(H, {
        variant: {
          options: [`c7sqOOdhc`, `RflMXf_z4`, `VJd37mXLK`, `iHv2yqCIN`, `FR5D4yuMj`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`],
          title: `Variant`,
          type: T.Enum,
        },
        QK76J_qMC: { title: `Click`, type: T.EventHandler },
      }),
      h(
        H,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Fragment Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Fragment Mono`,
                url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
                weight: `400`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { U as n, H as t };
//# sourceMappingURL=O91kqgIxk.BCBG6QJw.mjs.map
