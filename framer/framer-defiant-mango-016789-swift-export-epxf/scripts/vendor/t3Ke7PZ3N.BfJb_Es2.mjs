import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as n,
  E as r,
  L as i,
  N as a,
  P as o,
  S as s,
  c,
  m as l,
  s as u,
  x as d,
  y as f,
} from "./react.D0omlcQg.mjs";
import { M as p, a as m, r as h, t as g } from "./motion.Bi2Azsus.mjs";
import {
  Et as _,
  It as v,
  Kt as y,
  L as b,
  Lt as x,
  N as S,
  P as C,
  Ut as w,
  _ as ee,
  _t as T,
  et as E,
  kt as D,
  o as O,
  s as k,
  zt as A,
} from "./framer.zRtTBSC3.mjs";
var te = e({ __FramerMetadata__: () => F, default: () => P });
function ne(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
  M,
  N,
  re,
  ie,
  ae,
  oe,
  se,
  ce,
  P,
  F,
  le = t(() => {
    (c(),
      E(),
      g(),
      n(),
      (j = [`B7R2Vd4T2`, `DeSzPr0Gb`, `NHX6nPrF6`]),
      (M = `framer-NGkLH`),
      (N = {
        B7R2Vd4T2: `framer-v-ymnmly`,
        DeSzPr0Gb: `framer-v-1487vh4`,
        NHX6nPrF6: `framer-v-1jibmth`,
      }),
      (re = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ie = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(m.Provider, { value: i, children: t });
      }),
      (ae = { "Sky Blue": `NHX6nPrF6`, Beige: `B7R2Vd4T2`, Orange: `DeSzPr0Gb` }),
      (oe = p.create(i)),
      (se = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ae[r.variant] ?? r.variant ?? `B7R2Vd4T2`,
      })),
      (ce = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (P = x(
        l(function (e, t) {
          let n = s(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: c } = _();
          T();
          let { style: l, className: d, layoutId: f, variant: m, ...g } = se(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = v({
              cycleOrder: j,
              defaultVariant: `B7R2Vd4T2`,
              ref: i,
              variant: m,
              variantClassNames: N,
            }),
            k = ce(e, O),
            A = b(M);
          return u(h, {
            id: f ?? a,
            children: u(oe, {
              animate: O,
              initial: !1,
              children: u(ie, {
                value: re,
                children: u(p.div, {
                  ...g,
                  ...C,
                  className: b(A, `framer-ymnmly`, d, x),
                  "data-framer-name": `Beige`,
                  layoutDependency: k,
                  layoutId: `B7R2Vd4T2`,
                  ref: i,
                  style: {
                    background: `linear-gradient(180deg, rgb(228, 208, 180) 0%, rgb(238, 226, 210) 11%, rgb(245, 238, 229) 39%, rgb(251, 248, 244) 60%, rgb(255, 255, 255) 100%)`,
                    ...l,
                  },
                  variants: {
                    DeSzPr0Gb: {
                      background: `linear-gradient(180deg, var(--token-0811ed08-71ff-4889-9a2e-53a63a755add, rgb(255, 195, 122)) 0%, rgb(255, 207, 153) 17.19805743243243%, rgb(255, 228, 201) 37.14984515765766%, rgb(255, 247, 240) 69.9412302927928%, rgb(255, 255, 255) 100%)`,
                    },
                    NHX6nPrF6: {
                      background: `linear-gradient(180deg, var(--token-f04af15e-7364-47f9-bbfb-f1df2805a355, rgb(204, 237, 255)) 0%, rgb(224, 243, 255) 15.521185247747749%, rgb(235, 247, 255) 37.950450450450454%, rgb(247, 252, 255) 73.24746621621621%, rgb(255, 255, 255) 100%)`,
                    },
                  },
                  ...ne(
                    {
                      DeSzPr0Gb: { "data-framer-name": `Orange` },
                      NHX6nPrF6: { "data-framer-name": `Sky Blue` },
                    },
                    y,
                    w
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NGkLH.framer-1aw39df, .framer-NGkLH .framer-1aw39df { display: block; }`,
          `.framer-NGkLH.framer-ymnmly { height: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
        ],
        `framer-NGkLH`
      )),
      (P.displayName = `Hero Background Inverted`),
      (P.defaultProps = { height: 800, width: 1200 }),
      C(P, {
        variant: {
          options: [`B7R2Vd4T2`, `DeSzPr0Gb`, `NHX6nPrF6`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      S(P, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (F = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerFeE2hmrzA`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `1200`,
              framerContractVersion: `1`,
              framerComponentViewportWidth: `true`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicHeight: `800`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"DeSzPr0Gb":{"layout":["fixed","fixed"]},"NHX6nPrF6":{"layout":["fixed","fixed"]}}}`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function ue(e) {
  let t = k({ state: Object.freeze({ ...e }) }),
    n = (e) => {
      (typeof e == `function` && (e = e(t.state)), (t.state = Object.freeze({ ...t.state, ...e })));
    },
    r = typeof e == `object` ? Object.freeze({ ...e }) : e,
    i = new Set(),
    a = (e) => {
      (typeof e == `function` && (e = e(r)),
        (r = typeof e == `object` ? Object.freeze({ ...r, ...e }) : e),
        i.forEach((e) => e(r)));
    };
  function o() {
    let [e, o] = f(r);
    return (d(() => (i.add(o), () => i.delete(o)), []), D() === !0 ? (D(), [t.state, n]) : [e, a]);
  }
  return o;
}
var de = t(() => {
    (n(), E());
  }),
  fe = t(() => {
    de();
  });
function I(e, t) {
  return l((n, r) => {
    let [i, a] = L(),
      o = () => {
        a({ variant: t });
      };
    return u(e, { ref: r, ...n, onClick: o });
  });
}
function pe(e, t) {
  return l((t, n) => {
    let [r] = L();
    return u(e, { ref: n, ...t, variant: r.variant });
  });
}
var L,
  R,
  z,
  B,
  me = t(() => {
    (c(),
      n(),
      fe(),
      (L = ue({ variant: `beige` })),
      (R = (e) => I(e, `Beige`)),
      (z = (e) => I(e, `Orange`)),
      (B = (e) => I(e, `Sky Blue`)));
  }),
  V,
  H,
  U,
  W,
  he = t(() => {
    (c(),
      E(),
      n(),
      (V = `var(--framer-icon-mask)`),
      (H = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(p.img, { ...a, layoutId: r, ref: t }) : u(`img`, { ...a, ref: t });
      })),
      (U = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (W = x(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = U(e);
          return u(H, {
            ...o,
            alt: ``,
            className: b(`framer-1549O`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 460 795" xmlns="http://www.w3.org/2000/svg"><g d="M 0 713.5 L 0 54 L 206 121.5 L 206 794.5 Z M 205 121.5 L 205 794.5 L 457.5 713.5 L 459 51 Z M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="transparent" height="794.5px" id="j_gzSbiuP" width="459.5px"><path d="M 0 659.5 L 0 0 L 206 67.5 L 206 740.5 Z" fill="rgb(177, 206, 224)" height="740.5px" id="mgx38jc1H" transform="translate(0 54)" width="206px"/><path d="M 0 70.5 L 0 743.5 L 252.5 662.5 L 254 0 Z" fill="rgb(120, 169, 191)" height="743.5px" id="R1SYjaFUe" transform="translate(205 51)" width="254px"/><path d="M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="rgb(197, 219, 232)" height="121.5px" id="JavFndJ0X" width="459.5px"/></g></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-1549O { -webkit-mask: ${V}; aspect-ratio: 0.5786163522012578; display: block; mask: ${V}; user-select: none; width: 460px; }`,
        ],
        `framer-1549O`
      )),
      (W.displayName = `Sky Blue`));
  }),
  G,
  K,
  q,
  J,
  ge = t(() => {
    (c(),
      E(),
      n(),
      (G = `var(--framer-icon-mask)`),
      (K = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(p.img, { ...a, layoutId: r, ref: t }) : u(`img`, { ...a, ref: t });
      })),
      (q = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (J = x(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = q(e);
          return u(K, {
            ...o,
            alt: ``,
            className: b(`framer-AE1ec`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 460 795" xmlns="http://www.w3.org/2000/svg"><g d="M 0 713.5 L 0 54 L 206 121.5 L 206 794.5 Z M 205 121.5 L 205 794.5 L 457.5 713.5 L 459 51 Z M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="transparent" height="794.5px" id="AsUmWBJoP" width="459.5px"><path d="M 0 659.5 L 0 0 L 206 67.5 L 206 740.5 Z" fill="rgb(230, 195, 156)" height="740.5px" id="Ir91nWsZ4" transform="translate(0 54)" width="206px"/><path d="M 0 70.5 L 0 743.5 L 252.5 662.5 L 254 0 Z" fill="rgb(209, 159, 102)" height="743.5px" id="AwtqaZCUb" transform="translate(205 51)" width="254px"/><path d="M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="rgb(247, 220, 190)" height="121.5px" id="cd7c3_fg0" width="459.5px"/></g></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-AE1ec { -webkit-mask: ${G}; aspect-ratio: 0.5786163522012578; display: block; mask: ${G}; user-select: none; width: 460px; }`,
        ],
        `framer-AE1ec`
      )),
      (J.displayName = `Orange`));
  }),
  Y,
  _e,
  ve,
  X,
  ye = t(() => {
    (c(),
      E(),
      n(),
      (Y = `var(--framer-icon-mask)`),
      (_e = l((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? u(p.img, { ...a, layoutId: r, ref: t }) : u(`img`, { ...a, ref: t });
      })),
      (ve = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (X = x(
        l(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, ...o } = ve(e);
          return u(_e, {
            ...o,
            alt: ``,
            className: b(`framer-LFyfg`, r),
            layoutId: i,
            ref: t,
            src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 460 795" xmlns="http://www.w3.org/2000/svg"><g d="M 0 713.5 L 0 54 L 206 121.5 L 206 794.5 Z M 205 121.5 L 205 794.5 L 457.5 713.5 L 459 51 Z M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="transparent" height="794.5px" id="XySEFNkMD" width="459.5px"><path d="M 0 659.5 L 0 0 L 206 67.5 L 206 740.5 Z" fill="rgb(224, 206, 178)" height="740.5px" id="zzyPhKAoK" transform="translate(0 54)" width="206px"/><path d="M 0 70.5 L 0 743.5 L 252.5 662.5 L 254 0 Z" fill="rgb(192, 167, 121)" height="743.5px" id="OnBeZPSpH" transform="translate(205 51)" width="254px"/><path d="M 205 121.5 L 0 54 L 235 0 L 459.5 51 Z" fill="rgb(233, 220, 198)" height="121.5px" id="Ouct5ADDv" width="459.5px"/></g></svg>`,
            style: { ...n },
          });
        }),
        [
          `.framer-LFyfg { -webkit-mask: ${Y}; aspect-ratio: 0.5786163522012578; display: block; mask: ${Y}; user-select: none; width: 460px; }`,
        ],
        `framer-LFyfg`
      )),
      (X.displayName = `Beige`));
  }),
  be = e({ __FramerMetadata__: () => Ne, default: () => Q });
function xe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Se,
  Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Z,
  Q,
  Ne,
  Pe = t(() => {
    (c(),
      E(),
      g(),
      n(),
      he(),
      ge(),
      ye(),
      (Se = w(A(y(ee)))),
      (Ce = [`bGtLyJOdT`, `dSh5ifPnF`, `aqlWkhnOz`]),
      (we = `framer-1oXl7`),
      (Te = {
        aqlWkhnOz: `framer-v-8vkpj9`,
        bGtLyJOdT: `framer-v-4ttzd1`,
        dSh5ifPnF: `framer-v-a1qnyk`,
      }),
      (Ee = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (De = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0.1, duration: 0.8, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Oe = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 150,
      }),
      (ke = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(m.Provider, { value: i, children: t });
      }),
      (Ae = { "Sky Blue": `aqlWkhnOz`, Beige: `bGtLyJOdT`, Orange: `dSh5ifPnF` }),
      (je = p.create(i)),
      (Me = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Ae[r.variant] ?? r.variant ?? `bGtLyJOdT`,
      })),
      (Z = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = x(
        l(function (e, t) {
          let n = s(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: c } = _();
          T();
          let { style: l, className: d, layoutId: f, variant: m, ...g } = Me(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = v({
              cycleOrder: Ce,
              defaultVariant: `bGtLyJOdT`,
              ref: i,
              variant: m,
              variantClassNames: Te,
            }),
            k = Z(e, O),
            A = b(we);
          return u(h, {
            id: f ?? a,
            children: u(je, {
              animate: O,
              initial: !1,
              children: u(ke, {
                value: Ee,
                children: u(p.div, {
                  ...g,
                  ...C,
                  className: b(A, `framer-4ttzd1`, d, x),
                  "data-framer-name": `Beige`,
                  layoutDependency: k,
                  layoutId: `bGtLyJOdT`,
                  ref: i,
                  style: { ...l },
                  ...xe(
                    {
                      aqlWkhnOz: { "data-framer-name": `Sky Blue` },
                      dSh5ifPnF: { "data-framer-name": `Orange` },
                    },
                    y,
                    w
                  ),
                  children: u(Se, {
                    __framer__animateOnce: !1,
                    __framer__variantAppearEffectEnabled: !0,
                    __perspectiveFX: !1,
                    __smartComponentFX: !0,
                    __targetOpacity: 1,
                    animate: De,
                    animated: !0,
                    className: `framer-zwncuu`,
                    Component: X,
                    "data-framer-appear-id": `zwncuu`,
                    initial: Oe,
                    layoutDependency: k,
                    layoutId: `h4g8Y23GO`,
                    optimized: !0,
                    style: {
                      "--framer-icon-mask-mode": `intersect`,
                      "--framer-icon-mask": `linear-gradient(0deg, rgba(0,0,0,0) 22%, rgba(0, 0, 0, 0.15462) 47%, rgba(0, 0, 0, 0.31173) 61%, rgba(0,0,0,1) 89%) add`,
                    },
                    ...xe({ aqlWkhnOz: { Component: W }, dSh5ifPnF: { Component: J } }, y, w),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-1oXl7.framer-1khvqi, .framer-1oXl7 .framer-1khvqi { display: block; }`,
          `.framer-1oXl7.framer-4ttzd1 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 460px; }`,
          `.framer-1oXl7 .framer-zwncuu { -webkit-user-select: none; aspect-ratio: 0.5786163522012578 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 795px); pointer-events: none; position: relative; user-select: none; width: 1px; z-index: 2; }`,
        ],
        `framer-1oXl7`
      )),
      (Q.displayName = `Platform`),
      (Q.defaultProps = { height: 795, width: 460 }),
      C(Q, {
        variant: {
          options: [`bGtLyJOdT`, `dSh5ifPnF`, `aqlWkhnOz`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      S(Q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (Ne = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerRI_G_a00p`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `795`,
              framerContractVersion: `1`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"dSh5ifPnF":{"layout":["fixed","auto"]},"aqlWkhnOz":{"layout":["fixed","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicWidth: `460`,
              framerAutoSizeImages: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Fe = e({ __FramerMetadata__: () => Ke, default: () => $ });
function Ie(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Le,
  Re,
  ze,
  Be,
  Ve,
  He,
  Ue,
  We,
  Ge,
  $,
  Ke,
  qe = t(() => {
    (c(),
      E(),
      g(),
      n(),
      (Le = [`gEYBzTYcK`, `hQgeu8mXR`, `hzwJ4li4D`]),
      (Re = `framer-Y5Ddt`),
      (ze = {
        gEYBzTYcK: `framer-v-4kgj8r`,
        hQgeu8mXR: `framer-v-t7o089`,
        hzwJ4li4D: `framer-v-1oq4x0d`,
      }),
      (Be = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ve = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(m.Provider, { value: i, children: t });
      }),
      (He = { "Sky Blue": `hzwJ4li4D`, Beige: `gEYBzTYcK`, Orange: `hQgeu8mXR` }),
      (Ue = p.create(i)),
      (We = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: He[r.variant] ?? r.variant ?? `gEYBzTYcK`,
      })),
      (Ge = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = x(
        l(function (e, t) {
          let n = s(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: c } = _();
          T();
          let { style: l, className: d, layoutId: f, variant: m, ...g } = We(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: ee,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = v({
              cycleOrder: Le,
              defaultVariant: `gEYBzTYcK`,
              ref: i,
              variant: m,
              variantClassNames: ze,
            }),
            k = Ge(e, O),
            A = b(Re);
          return u(h, {
            id: f ?? a,
            children: u(Ue, {
              animate: O,
              initial: !1,
              children: u(Ve, {
                value: Be,
                children: u(p.div, {
                  ...g,
                  ...C,
                  className: b(A, `framer-4kgj8r`, d, x),
                  "data-framer-name": `Beige`,
                  layoutDependency: k,
                  layoutId: `gEYBzTYcK`,
                  ref: i,
                  style: {
                    background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, var(--token-662c738d-2c5a-4b98-aeea-24b6bd59dfd6, rgb(227, 207, 179)) 100%)`,
                    ...l,
                  },
                  variants: {
                    hQgeu8mXR: {
                      background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, var(--token-0811ed08-71ff-4889-9a2e-53a63a755add, rgb(255, 195, 122)) 100%)`,
                    },
                    hzwJ4li4D: {
                      background: `linear-gradient(180deg, rgb(255, 255, 255) 0%, var(--token-f04af15e-7364-47f9-bbfb-f1df2805a355, rgb(204, 237, 255)) 99.80644707207207%)`,
                    },
                  },
                  ...Ie(
                    {
                      hQgeu8mXR: { "data-framer-name": `Orange` },
                      hzwJ4li4D: { "data-framer-name": `Sky Blue` },
                    },
                    y,
                    w
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Y5Ddt.framer-8vpe79, .framer-Y5Ddt .framer-8vpe79 { display: block; }`,
          `.framer-Y5Ddt.framer-4kgj8r { height: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
        ],
        `framer-Y5Ddt`
      )),
      ($.displayName = `Hero Background`),
      ($.defaultProps = { height: 800, width: 1200 }),
      C($, {
        variant: {
          options: [`gEYBzTYcK`, `hQgeu8mXR`, `hzwJ4li4D`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: O.Enum,
        },
      }),
      S($, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (Ke = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framert3Ke7PZ3N`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `800`,
              framerDisplayContentsDiv: `false`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerColorSyntax: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"hQgeu8mXR":{"layout":["fixed","fixed"]},"hzwJ4li4D":{"layout":["fixed","fixed"]}}}`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `1200`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
export {
  be as a,
  R as c,
  pe as d,
  te as f,
  Q as i,
  z as l,
  le as m,
  qe as n,
  Pe as o,
  P as p,
  Fe as r,
  me as s,
  $ as t,
  B as u,
};
//# sourceMappingURL=t3Ke7PZ3N.BfJb_Es2.mjs.map
