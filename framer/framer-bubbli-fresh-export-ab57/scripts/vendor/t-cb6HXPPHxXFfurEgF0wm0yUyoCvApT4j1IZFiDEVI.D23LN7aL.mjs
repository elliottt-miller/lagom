import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  H as i,
  I as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  c as d,
  g as f,
  j as p,
  l as m,
  o as h,
  s as g,
  w as _,
  x as v,
  y,
} from "./react.CWoGm2_e.mjs";
import { C as b, N as x, a as S, r as C, t as w } from "./motion.DjW49AAR.mjs";
import {
  A as T,
  D as E,
  Et as D,
  G as O,
  H as k,
  I as A,
  K as j,
  P as M,
  S as N,
  St as P,
  Tt as F,
  U as I,
  W as L,
  X as R,
  _ as z,
  _t as ee,
  a as B,
  ct as te,
  dt as ne,
  f as V,
  ft as re,
  i as H,
  j as U,
  k as W,
  kt as G,
  lt as K,
  m as ie,
  mt as q,
  n as ae,
  nt as oe,
  o as J,
  pt as se,
  st as ce,
  v as le,
  vt as ue,
  w as Y,
  x as de,
} from "./framer.D9PtOJZM.mjs";
import { o as X, t as fe } from "./lodash.Dqvych0p.mjs";
import { n as pe, t as Z } from "./IsBrowser.bF6aX4Tz.mjs";
import {
  D as me,
  S as he,
  T as ge,
  _ as _e,
  a as ve,
  c as ye,
  d as be,
  g as xe,
  h as Se,
  i as Q,
  l as Ce,
  m as we,
  n as Te,
  o as Ee,
  p as De,
  r as Oe,
  s as $,
  t as ke,
  u as Ae,
  v as je,
  x as Me,
} from "./FC_ProductPriceCompare.Cn_pDsnu.mjs";
import { i as Ne, t as Pe } from "./vDz2snn78.DZVUjcrj.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./qZYHjqVrz.Co-qUMV0.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./O0kpMPYVt.BCUpzF8V.mjs";
import { a as Ue, c as We, i as Ge, o as Ke, r as qe, s as Je } from "./shared-lib.Cln7NIgD.mjs";
import { i as Ye, n as Xe, r as Ze, t as Qe } from "./PcZeB9dzj.lfd4RlWt.mjs";
import {
  a as $e,
  c as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from "./Phosphor.DhdvwZO7.mjs";
import { n as st, t as ct } from "./IGEvnqFgf.DuDYthiU.mjs";
import {
  a as lt,
  c as ut,
  i as dt,
  n as ft,
  o as pt,
  r as mt,
  s as ht,
  t as gt,
} from "./nnEHFMr_u.DRPAPQwO.mjs";
import _t, { t as vt } from "./3Qg8EEIL-XXSfEIeRUAVR3IGzWpBGLhLXezXZeFrM-o.Bkyltuzb.mjs";
function yt({ color: e = `#222` }) {
  return {
    type: J.Object,
    optional: !0,
    controls: {
      color: { type: J.Color, defaultValue: e },
      width: { type: J.Padding, defaultValue: `1px` },
      style: {
        type: J.Enum,
        defaultValue: `solid`,
        options: [`solid`, `dashed`, `dotted`, `double`],
        optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
      },
    },
  };
}
function bt({ color: e, width: t, style: n, radius: r = `inherit` }) {
  return d(`div`, {
    style: {
      position: `absolute`,
      inset: 0,
      borderColor: e,
      borderWidth: t,
      borderStyle: n,
      borderRadius: r,
      pointerEvents: `none`,
    },
  });
}
var xt = e(() => {
  (h(), R());
});
function St(e) {
  let { action: n } = e,
    [r, i] = o(!1),
    [a, s] = o([50, 50]),
    c = t(null),
    l = (e) => {
      let { left: t, top: n, width: r, height: i } = c.current.getBoundingClientRect(),
        a = ((e.clientX - t) / r) * 100,
        o = ((e.clientY - n) / i) * 100;
      ((a = Math.max(0, Math.min(100, a))), (o = Math.max(0, Math.min(100, o))), s([a, o]));
    },
    u = () => {
      n == `hover` && i(!0);
    },
    f = () => {
      n == `hover` && i(!1);
    },
    p = (e) => {
      n == `press` &&
        (i(!1),
        l(e),
        document.removeEventListener(`mousemove`, l),
        document.removeEventListener(`mouseup`, p));
    };
  return m(`div`, {
    onMouseEnter: u,
    onMouseLeave: f,
    onMouseDown: (e) => {
      n == `press` &&
        (i(!0),
        l(e),
        document.addEventListener(`mousemove`, l),
        document.addEventListener(`mouseup`, p));
    },
    onMouseUp: p,
    onMouseMove: (e) => {
      r && n == `hover` && l(e);
    },
    onDragStart: (e) => {
      e.preventDefault();
    },
    style: {
      borderRadius: e.radius,
      boxShadow: e.shadows,
      overflow: `hidden`,
      position: `relative`,
      backgroundColor: e.background,
      ...e.style,
    },
    children: [
      d(b.img, {
        ref: c,
        src: e.image?.src,
        alt: e.image?.alt,
        initial: { scale: 1 },
        animate: { scale: r ? e.zoomLevel : 1 },
        draggable: `false`,
        style: {
          transformOrigin: `${a[0]}% ${a[1]}%`,
          width: `100%`,
          height: `100%`,
          objectFit: e.sizing,
          userSelect: `none`,
        },
        transition: e.transition,
      }),
      d(bt, { ...e.border, radius: e.radius }),
    ],
  });
}
var Ct = e(() => {
  (h(),
    R(),
    _(),
    xt(),
    w(),
    (St.displayName = `Image Zoom`),
    U(St, {
      image: { type: J.ResponsiveImage },
      sizing: {
        type: J.Enum,
        defaultValue: `cover`,
        options: [`cover`, `contain`, `fill`],
        optionTitles: [`Fill`, `Fit`, `Stretch`],
      },
      zoomLevel: { type: J.Number, defaultValue: 2, min: 1, step: 0.01, unit: `x`, title: `Zoom` },
      action: {
        type: J.Enum,
        options: [`hover`, `press`],
        optionTitles: [`Hover`, `Press`],
        displaySegmentedControl: !0,
        title: `Zoom On`,
      },
      radius: { type: J.BorderRadius },
      border: yt({}),
      shadows: { type: J.BoxShadow },
      background: { type: J.Color, optional: !0 },
      transition: {
        type: J.Transition,
        defaultValue: { type: `spring`, duration: 0.5, bounce: 0 },
      },
    }));
});
function wt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt = e(() => {
    (h(),
      R(),
      w(),
      _(),
      (Tt = { pK70bkwNb: { hover: !0 } }),
      (Et = [`pK70bkwNb`, `h7JivERf6`]),
      (Dt = `framer-51yyg`),
      (Ot = { h7JivERf6: `framer-v-gwn66y`, pK70bkwNb: `framer-v-129okff` }),
      (kt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (At = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (jt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (Mt = b.create(a)),
      (Nt = { Deselected: `pK70bkwNb`, Selected: `h7JivERf6` }),
      (Pt = ({ click: e, height: t, id: n, image: r, width: i, ...a }) => ({
        ...a,
        GBi9Swc4q: r ?? a.GBi9Swc4q,
        variant: Nt[a.variant] ?? a.variant ?? `pK70bkwNb`,
        WCgcb3OFQ: e ?? a.WCgcb3OFQ,
      })),
      (Ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (It = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = y(),
            { activeLocale: o, setLocale: s } = ee(),
            c = te(),
            {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              GBi9Swc4q: m,
              WCgcb3OFQ: h,
              ...g
            } = Pt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = F({
              cycleOrder: Et,
              defaultVariant: `pK70bkwNb`,
              enabledGestures: Tt,
              ref: i,
              variant: p,
              variantClassNames: Ot,
            }),
            O = Ft(e, D),
            { activeVariantCallback: k, delay: A } = ce(_),
            j = k(async (...e) => {
              if ((T({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            N = M(Dt);
          return d(C, {
            id: f ?? a,
            children: d(Mt, {
              animate: D,
              initial: !1,
              children: d(jt, {
                value: At,
                children: d(ie, {
                  ...g,
                  ...x,
                  background: {
                    alt: ``,
                    fit: `fill`,
                    loading: L(c?.y || 0),
                    pixelHeight: 6325,
                    pixelWidth: 4401,
                    sizes: c?.width || `100vw`,
                    ...kt(m),
                    positionX: `center`,
                    positionY: `center`,
                  },
                  className: M(N, `framer-129okff`, u, v),
                  "data-border": !0,
                  "data-framer-name": `Deselected`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `pK70bkwNb`,
                  onTap: j,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `rgba(29, 59, 19, 0)`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...l,
                  },
                  variants: {
                    "pK70bkwNb-hover": {
                      "--border-color": `var(--token-9dca032e-6ef7-497f-be89-5a137a300252, rgb(28, 58, 19))`,
                    },
                    h7JivERf6: {
                      "--border-color": `var(--token-9dca032e-6ef7-497f-be89-5a137a300252, rgb(28, 58, 19))`,
                    },
                  },
                  ...wt(
                    {
                      "pK70bkwNb-hover": { "data-framer-name": void 0 },
                      h7JivERf6: { "data-framer-name": `Selected` },
                    },
                    _,
                    S
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-51yyg.framer-3l1fmh, .framer-51yyg .framer-3l1fmh { display: block; }`,
          `.framer-51yyg.framer-129okff { cursor: pointer; height: 84px; overflow: hidden; position: relative; width: 84px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-51yyg.framer-v-gwn66y.framer-129okff, .framer-51yyg.framer-v-129okff.hover.framer-129okff { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 84px); }`,
          `.framer-51yyg[data-border="true"]::after, .framer-51yyg [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-51yyg`
      )),
      (It.displayName = `Gallery Item`),
      (It.defaultProps = { height: 84, width: 84 }),
      U(It, {
        variant: {
          options: [`pK70bkwNb`, `h7JivERf6`],
          optionTitles: [`Deselected`, `Selected`],
          title: `Variant`,
          type: J.Enum,
        },
        GBi9Swc4q: { title: `Image`, type: J.ResponsiveImage },
        WCgcb3OFQ: { title: `Click`, type: J.EventHandler },
      }),
      T(It, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t = e(() => {
    (h(),
      R(),
      w(),
      _(),
      Ct(),
      Lt(),
      (zt = k(It)),
      (Bt = k(St)),
      (Vt = [
        `KaEsM2m2J`,
        `bFmyMYOs4`,
        `s3HIkMKaH`,
        `iRaRqk6E5`,
        `ZPZdxQ27E`,
        `cTubdnyzG`,
        `gpU8fasFp`,
        `RrwcyR74Q`,
      ]),
      (Ht = `framer-nmJDl`),
      (Ut = {
        bFmyMYOs4: `framer-v-1pr2w2t`,
        cTubdnyzG: `framer-v-47ab3c`,
        gpU8fasFp: `framer-v-1s7d0od`,
        iRaRqk6E5: `framer-v-tq86ey`,
        KaEsM2m2J: `framer-v-19ahdbf`,
        RrwcyR74Q: `framer-v-12uz77s`,
        s3HIkMKaH: `framer-v-3jj4x4`,
        ZPZdxQ27E: `framer-v-183e4pm`,
      }),
      (Wt = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (Gt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Kt = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (qt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (Jt = b.create(a)),
      (Yt = {
        "Desktop - Image 1": `KaEsM2m2J`,
        "Desktop - Image 2": `bFmyMYOs4`,
        "Desktop - Image 3": `s3HIkMKaH`,
        "Desktop - Image 4": `iRaRqk6E5`,
        "Phone - Image 1": `ZPZdxQ27E`,
        "Phone - Image 2": `cTubdnyzG`,
        "Phone - Image 3": `gpU8fasFp`,
        "Phone - Image 4": `RrwcyR74Q`,
      }),
      (Xt = ({ height: e, id: t, image1: n, image2: r, image3: i, image4: a, width: o, ...s }) => ({
        ...s,
        DAOZEyqc4: a ?? s.DAOZEyqc4,
        EpS2iXyo7: n ?? s.EpS2iXyo7,
        P2lnBz26D: r ?? s.P2lnBz26D,
        UEZPwfUqX: i ?? s.UEZPwfUqX,
        variant: Yt[s.variant] ?? s.variant ?? `KaEsM2m2J`,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qt = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = y(),
            { activeLocale: o, setLocale: s } = ee(),
            c = te(),
            {
              style: l,
              className: u,
              layoutId: f,
              variant: p,
              EpS2iXyo7: h,
              P2lnBz26D: g,
              UEZPwfUqX: _,
              DAOZEyqc4: v,
              ...x
            } = Xt(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = F({
              cycleOrder: Vt,
              defaultVariant: `KaEsM2m2J`,
              ref: i,
              variant: p,
              variantClassNames: Ut,
            }),
            N = Zt(e, j),
            { activeVariantCallback: P, delay: I } = ce(S),
            L = P(async (...e) => {
              A(`KaEsM2m2J`);
            }),
            R = P(async (...e) => {
              A(`ZPZdxQ27E`);
            }),
            z = P(async (...e) => {
              A(`bFmyMYOs4`);
            }),
            B = P(async (...e) => {
              A(`cTubdnyzG`);
            }),
            ne = P(async (...e) => {
              A(`s3HIkMKaH`);
            }),
            V = P(async (...e) => {
              A(`gpU8fasFp`);
            }),
            re = P(async (...e) => {
              A(`iRaRqk6E5`);
            }),
            U = P(async (...e) => {
              A(`RrwcyR74Q`);
            }),
            G = M(Ht),
            K = Kt(g),
            ie = Kt(_),
            q = Kt(v);
          return d(C, {
            id: f ?? a,
            children: d(Jt, {
              animate: j,
              initial: !1,
              children: d(qt, {
                value: Wt,
                children: m(b.div, {
                  ...x,
                  ...E,
                  className: M(G, `framer-19ahdbf`, u, w),
                  "data-framer-name": `Desktop - Image 1`,
                  layoutDependency: N,
                  layoutId: `KaEsM2m2J`,
                  ref: i,
                  style: { ...l },
                  ...Rt(
                    {
                      bFmyMYOs4: { "data-framer-name": `Desktop - Image 2` },
                      cTubdnyzG: { "data-framer-name": `Phone - Image 2` },
                      gpU8fasFp: { "data-framer-name": `Phone - Image 3` },
                      iRaRqk6E5: { "data-framer-name": `Desktop - Image 4` },
                      RrwcyR74Q: { "data-framer-name": `Phone - Image 4` },
                      s3HIkMKaH: { "data-framer-name": `Desktop - Image 3` },
                      ZPZdxQ27E: { "data-framer-name": `Phone - Image 1` },
                    },
                    S,
                    D
                  ),
                  children: [
                    m(b.div, {
                      className: `framer-1v3c3in`,
                      "data-framer-name": `Variant`,
                      layoutDependency: N,
                      layoutId: `HUAap0pnx`,
                      children: [
                        d(H, {
                          height: 90,
                          width: `90px`,
                          y: (c?.y || 0) + 0 + 0 + 0,
                          ...Rt(
                            {
                              cTubdnyzG: {
                                width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                  0,
                              },
                              gpU8fasFp: {
                                width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                  0,
                              },
                              RrwcyR74Q: {
                                width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                  0,
                              },
                              ZPZdxQ27E: {
                                width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                  0,
                              },
                            },
                            S,
                            D
                          ),
                          children: d(W, {
                            className: `framer-1orwobl-container`,
                            "data-framer-name": `Item 1`,
                            layoutDependency: N,
                            layoutId: `jFRYh0diy-container`,
                            name: `Item 1`,
                            nodeId: `jFRYh0diy`,
                            rendersWithMotion: !0,
                            scopeId: `sO1srVNpC`,
                            children: d(It, {
                              GBi9Swc4q: Gt(h),
                              height: `100%`,
                              id: `jFRYh0diy`,
                              layoutId: `jFRYh0diy`,
                              name: `Item 1`,
                              style: { height: `100%`, width: `100%` },
                              variant: `h7JivERf6`,
                              WCgcb3OFQ: L,
                              width: `100%`,
                              ...Rt(
                                {
                                  bFmyMYOs4: { variant: `pK70bkwNb` },
                                  cTubdnyzG: {
                                    style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                    variant: `pK70bkwNb`,
                                    WCgcb3OFQ: R,
                                  },
                                  gpU8fasFp: {
                                    style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                    variant: `pK70bkwNb`,
                                    WCgcb3OFQ: R,
                                  },
                                  iRaRqk6E5: { variant: `pK70bkwNb` },
                                  RrwcyR74Q: {
                                    style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                    variant: `pK70bkwNb`,
                                    WCgcb3OFQ: R,
                                  },
                                  s3HIkMKaH: { variant: `pK70bkwNb` },
                                  ZPZdxQ27E: {
                                    style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                    WCgcb3OFQ: R,
                                  },
                                },
                                S,
                                D
                              ),
                            }),
                          }),
                        }),
                        K &&
                          d(H, {
                            height: 90,
                            width: `90px`,
                            y: (c?.y || 0) + 0 + 0 + 106,
                            ...Rt(
                              {
                                cTubdnyzG: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                gpU8fasFp: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                RrwcyR74Q: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                ZPZdxQ27E: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                              },
                              S,
                              D
                            ),
                            children: d(W, {
                              className: `framer-8r2154-container`,
                              layoutDependency: N,
                              layoutId: `tBrKO8TjB-container`,
                              nodeId: `tBrKO8TjB`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              children: d(It, {
                                GBi9Swc4q: Gt(g),
                                height: `100%`,
                                id: `tBrKO8TjB`,
                                layoutId: `tBrKO8TjB`,
                                style: { height: `100%`, width: `100%` },
                                variant: `pK70bkwNb`,
                                WCgcb3OFQ: z,
                                width: `100%`,
                                ...Rt(
                                  {
                                    cTubdnyzG: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: B,
                                    },
                                    gpU8fasFp: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: B,
                                    },
                                    RrwcyR74Q: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: B,
                                    },
                                    ZPZdxQ27E: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: B,
                                    },
                                  },
                                  S,
                                  D
                                ),
                              }),
                            }),
                          }),
                        ie &&
                          d(H, {
                            height: 90,
                            width: `90px`,
                            y: (c?.y || 0) + 0 + 0 + 106,
                            ...Rt(
                              {
                                cTubdnyzG: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                gpU8fasFp: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                RrwcyR74Q: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                ZPZdxQ27E: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                              },
                              S,
                              D
                            ),
                            children: d(W, {
                              className: `framer-pic9il-container`,
                              layoutDependency: N,
                              layoutId: `xXWi3A7qO-container`,
                              nodeId: `xXWi3A7qO`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              children: d(It, {
                                GBi9Swc4q: Gt(_),
                                height: `100%`,
                                id: `xXWi3A7qO`,
                                layoutId: `xXWi3A7qO`,
                                style: { height: `100%`, width: `100%` },
                                variant: `pK70bkwNb`,
                                WCgcb3OFQ: ne,
                                width: `100%`,
                                ...Rt(
                                  {
                                    cTubdnyzG: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: V,
                                    },
                                    gpU8fasFp: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: V,
                                    },
                                    RrwcyR74Q: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: V,
                                    },
                                    ZPZdxQ27E: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: V,
                                    },
                                  },
                                  S,
                                  D
                                ),
                              }),
                            }),
                          }),
                        q &&
                          d(H, {
                            height: 90,
                            width: `90px`,
                            y: (c?.y || 0) + 0 + 0 + 106,
                            ...Rt(
                              {
                                cTubdnyzG: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                gpU8fasFp: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                RrwcyR74Q: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                                ZPZdxQ27E: {
                                  width: `min(max(${c?.width || `100vw`}, 1px), ${c?.width || `100vw`} / 4)`,
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 897.5) - 0 - 706) / 2 + 600 + 16) +
                                    0,
                                },
                              },
                              S,
                              D
                            ),
                            children: d(W, {
                              className: `framer-hejaov-container`,
                              layoutDependency: N,
                              layoutId: `sCB31z36Z-container`,
                              nodeId: `sCB31z36Z`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              children: d(It, {
                                GBi9Swc4q: Gt(v),
                                height: `100%`,
                                id: `sCB31z36Z`,
                                layoutId: `sCB31z36Z`,
                                style: { height: `100%`, width: `100%` },
                                variant: `pK70bkwNb`,
                                WCgcb3OFQ: re,
                                width: `100%`,
                                ...Rt(
                                  {
                                    cTubdnyzG: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: U,
                                    },
                                    gpU8fasFp: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: U,
                                    },
                                    RrwcyR74Q: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: U,
                                    },
                                    ZPZdxQ27E: {
                                      style: { height: `100%`, maxWidth: `100%`, width: `100%` },
                                      WCgcb3OFQ: U,
                                    },
                                  },
                                  S,
                                  D
                                ),
                              }),
                            }),
                          }),
                      ],
                    }),
                    m(b.div, {
                      className: `framer-jdj676`,
                      "data-framer-name": `Images`,
                      layoutDependency: N,
                      layoutId: `ZT84kzDfB`,
                      children: [
                        q &&
                          d(H, {
                            children: d(W, {
                              className: `framer-18o23gc-container`,
                              "data-framer-name": `Image 4`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: N,
                              layoutId: `JqRMiZ8HA-container`,
                              name: `Image 4`,
                              nodeId: `JqRMiZ8HA`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              style: { opacity: 0 },
                              variants: { iRaRqk6E5: { opacity: 1 }, RrwcyR74Q: { opacity: 1 } },
                              children: d(St, {
                                action: `hover`,
                                height: `100%`,
                                id: `JqRMiZ8HA`,
                                image: Gt(v),
                                layoutId: `JqRMiZ8HA`,
                                name: `Image 4`,
                                radius: `12px`,
                                shadows: ``,
                                sizing: `cover`,
                                style: { height: `100%`, width: `100%` },
                                transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                                width: `100%`,
                                zoomLevel: 1.5,
                              }),
                            }),
                          }),
                        ie &&
                          d(H, {
                            children: d(W, {
                              className: `framer-olkqqt-container`,
                              "data-framer-name": `Image 3`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: N,
                              layoutId: `iOsQXKISs-container`,
                              name: `Image 3`,
                              nodeId: `iOsQXKISs`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              style: { opacity: 0 },
                              variants: { gpU8fasFp: { opacity: 1 }, s3HIkMKaH: { opacity: 1 } },
                              children: d(St, {
                                action: `hover`,
                                height: `100%`,
                                id: `iOsQXKISs`,
                                image: Gt(_),
                                layoutId: `iOsQXKISs`,
                                name: `Image 3`,
                                radius: `12px`,
                                shadows: ``,
                                sizing: `cover`,
                                style: { height: `100%`, width: `100%` },
                                transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                                width: `100%`,
                                zoomLevel: 1.5,
                              }),
                            }),
                          }),
                        K &&
                          d(H, {
                            children: d(W, {
                              className: `framer-fuhpsh-container`,
                              "data-framer-name": `Image 2`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: N,
                              layoutId: `DMEKmn50F-container`,
                              name: `Image 2`,
                              nodeId: `DMEKmn50F`,
                              rendersWithMotion: !0,
                              scopeId: `sO1srVNpC`,
                              style: { opacity: 0 },
                              variants: { bFmyMYOs4: { opacity: 1 }, cTubdnyzG: { opacity: 1 } },
                              children: d(St, {
                                action: `hover`,
                                height: `100%`,
                                id: `DMEKmn50F`,
                                image: Gt(g),
                                layoutId: `DMEKmn50F`,
                                name: `Image 2`,
                                radius: `12px`,
                                shadows: ``,
                                sizing: `cover`,
                                style: { height: `100%`, width: `100%` },
                                transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                                width: `100%`,
                                zoomLevel: 1.5,
                              }),
                            }),
                          }),
                        d(H, {
                          children: d(W, {
                            className: `framer-nvky0c-container`,
                            "data-framer-name": `Image 1`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: N,
                            layoutId: `xXIXUnCAU-container`,
                            name: `Image 1`,
                            nodeId: `xXIXUnCAU`,
                            rendersWithMotion: !0,
                            scopeId: `sO1srVNpC`,
                            style: { opacity: 1 },
                            variants: {
                              bFmyMYOs4: { opacity: 0 },
                              cTubdnyzG: { opacity: 0 },
                              gpU8fasFp: { opacity: 0 },
                              iRaRqk6E5: { opacity: 0 },
                              RrwcyR74Q: { opacity: 0 },
                              s3HIkMKaH: { opacity: 0 },
                              ZPZdxQ27E: { opacity: 1 },
                            },
                            children: d(St, {
                              action: `hover`,
                              height: `100%`,
                              id: `xXIXUnCAU`,
                              image: Gt(h),
                              layoutId: `xXIXUnCAU`,
                              name: `Image 1`,
                              radius: `12px`,
                              shadows: ``,
                              sizing: `cover`,
                              style: { height: `100%`, width: `100%` },
                              transition: { bounce: 0, delay: 0, duration: 1, type: `spring` },
                              width: `100%`,
                              zoomLevel: 1.5,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nmJDl.framer-1e5ixev, .framer-nmJDl .framer-1e5ixev { display: block; }`,
          `.framer-nmJDl.framer-19ahdbf { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 600px; }`,
          `.framer-nmJDl .framer-1v3c3in { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-nmJDl .framer-1orwobl-container, .framer-nmJDl .framer-8r2154-container, .framer-nmJDl .framer-pic9il-container, .framer-nmJDl .framer-hejaov-container { flex: none; height: 90px; position: relative; width: 90px; }`,
          `.framer-nmJDl .framer-jdj676 { align-content: center; align-items: center; aspect-ratio: 0.82 / 1; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 603px); justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-nmJDl .framer-18o23gc-container, .framer-nmJDl .framer-olkqqt-container, .framer-nmJDl .framer-fuhpsh-container { bottom: 0px; flex: none; left: 0px; pointer-events: none; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-nmJDl .framer-nvky0c-container { bottom: 0px; flex: none; left: 0px; pointer-events: auto; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-nmJDl.framer-v-1pr2w2t .framer-fuhpsh-container, .framer-nmJDl.framer-v-3jj4x4 .framer-olkqqt-container, .framer-nmJDl.framer-v-tq86ey .framer-18o23gc-container { pointer-events: auto; }`,
          `.framer-nmJDl.framer-v-1pr2w2t .framer-nvky0c-container, .framer-nmJDl.framer-v-3jj4x4 .framer-nvky0c-container, .framer-nmJDl.framer-v-tq86ey .framer-nvky0c-container { pointer-events: none; }`,
          `.framer-nmJDl.framer-v-183e4pm.framer-19ahdbf, .framer-nmJDl.framer-v-47ab3c.framer-19ahdbf, .framer-nmJDl.framer-v-1s7d0od.framer-19ahdbf, .framer-nmJDl.framer-v-12uz77s.framer-19ahdbf { flex-direction: column; }`,
          `.framer-nmJDl.framer-v-183e4pm .framer-1v3c3in, .framer-nmJDl.framer-v-47ab3c .framer-1v3c3in, .framer-nmJDl.framer-v-1s7d0od .framer-1v3c3in, .framer-nmJDl.framer-v-12uz77s .framer-1v3c3in { flex-direction: row; justify-content: flex-start; order: 1; width: 100%; }`,
          `.framer-nmJDl.framer-v-183e4pm .framer-1orwobl-container, .framer-nmJDl.framer-v-47ab3c .framer-1orwobl-container, .framer-nmJDl.framer-v-1s7d0od .framer-1orwobl-container, .framer-nmJDl.framer-v-12uz77s .framer-1orwobl-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 150px); max-width: 25%; width: 1px; }`,
          `.framer-nmJDl.framer-v-183e4pm .framer-8r2154-container, .framer-nmJDl.framer-v-183e4pm .framer-pic9il-container, .framer-nmJDl.framer-v-183e4pm .framer-hejaov-container, .framer-nmJDl.framer-v-47ab3c .framer-8r2154-container, .framer-nmJDl.framer-v-47ab3c .framer-pic9il-container, .framer-nmJDl.framer-v-47ab3c .framer-hejaov-container, .framer-nmJDl.framer-v-1s7d0od .framer-8r2154-container, .framer-nmJDl.framer-v-1s7d0od .framer-pic9il-container, .framer-nmJDl.framer-v-1s7d0od .framer-hejaov-container, .framer-nmJDl.framer-v-12uz77s .framer-8r2154-container, .framer-nmJDl.framer-v-12uz77s .framer-pic9il-container, .framer-nmJDl.framer-v-12uz77s .framer-hejaov-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 0px); max-width: 25%; width: 1px; }`,
          `.framer-nmJDl.framer-v-183e4pm .framer-jdj676, .framer-nmJDl.framer-v-47ab3c .framer-jdj676, .framer-nmJDl.framer-v-1s7d0od .framer-jdj676, .framer-nmJDl.framer-v-12uz77s .framer-jdj676 { flex: none; height: var(--framer-aspect-ratio-supported, 732px); order: 0; width: 100%; }`,
        ],
        `framer-nmJDl`
      )),
      (Qt.displayName = `Image Gallery`),
      (Qt.defaultProps = { height: 602.5, width: 600 }),
      U(Qt, {
        variant: {
          options: [
            `KaEsM2m2J`,
            `bFmyMYOs4`,
            `s3HIkMKaH`,
            `iRaRqk6E5`,
            `ZPZdxQ27E`,
            `cTubdnyzG`,
            `gpU8fasFp`,
            `RrwcyR74Q`,
          ],
          optionTitles: [
            `Desktop - Image 1`,
            `Desktop - Image 2`,
            `Desktop - Image 3`,
            `Desktop - Image 4`,
            `Phone - Image 1`,
            `Phone - Image 2`,
            `Phone - Image 3`,
            `Phone - Image 4`,
          ],
          title: `Variant`,
          type: J.Enum,
        },
        EpS2iXyo7: { title: `Image 1`, type: J.ResponsiveImage },
        P2lnBz26D: { title: `Image 2`, type: J.ResponsiveImage },
        UEZPwfUqX: { title: `Image 3`, type: J.ResponsiveImage },
        DAOZEyqc4: { title: `Image 4`, type: J.ResponsiveImage },
      }),
      T(Qt, [{ explicitInter: !0, fonts: [] }, ...zt, ...Bt], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function en() {
  if (i !== void 0) {
    ($(), Ee());
    try {
      let e = history.pushState,
        t = history.replaceState;
      ((history.pushState = function () {
        (e.apply(this, arguments), $(), Ee());
      }),
        (history.replaceState = function () {
          (t.apply(this, arguments), $(), Ee());
        }),
        i.addEventListener(`popstate`, () => {
          ($(), Ee());
        }));
    } catch (e) {
      console.error(`Error setting up history listeners:`, e);
    }
  }
}
var tn = e(() => {
  (n(), ye(), en());
});
function nn(e) {
  let {
      shopifyProductID: t,
      text: n = !0,
      display: a = `Buy with`,
      font: s = {
        family: `Inter`,
        style: `normal`,
        weight: 500,
        size: 16,
        lineHeight: 1.5,
        letterSpacing: 0,
        color: `#FFFFFF`,
      },
      color: c = `White on Purple`,
      radius: l = 6,
      required: u = !1,
    } = e,
    [f, p] = o(!0),
    [h, g] = o(null),
    [_, v] = o(null),
    [y, b] = o(null),
    [x, S] = o(1),
    [C, w] = o(1),
    [T, E] = o(!1),
    D = pe(),
    [O, k] = o(null),
    [A, j] = o(!1),
    [M, N] = o(!1),
    [P, F] = o(!1),
    [I, L] = o(!1);
  (r(() => {
    let t = (t) => {
      t.detail.shopifyProductID === `gid://shopify/Product/${e.shopifyProductID}` &&
        (j(t.detail.autoSelectFirst), N(!0));
    };
    return (
      document.addEventListener(`auto_select_first_flag`, t),
      () => {
        document.removeEventListener(`auto_select_first_flag`, t);
      }
    );
  }, []),
    r(() => {
      if (!D) return;
      let e = async (e) => {
        if (Array.isArray(e.detail?.products)) {
          let n = e.detail?.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
          if (n && n.node) {
            if ((g(n), n.node.variants?.edges?.length === 1)) {
              let e = n.node.variants.edges[0]?.node;
              e && (v(e), b(e.id), w(e.quantityAvailable), E(e.availableForSale));
            } else if (n.node.variants?.edges?.length > 1 && A) {
              let e = n.node.variants.edges.find((e) => e.node.availableForSale)?.node;
              e && (v(e), b(e.id), w(e.quantityAvailable), E(e.availableForSale));
            }
          }
        }
        p(!1);
      };
      i.shopXtools?.products
        ? e({ detail: { products: i.shopXtools.products } })
        : document.addEventListener(`data__products-ready`, e);
      let n = (e) => {
          let n = e.detail;
          if (n.productId === `gid://shopify/Product/${t}` && n && n.id) {
            let e = h?.node?.options || [],
              t = Array.isArray(n.selectedOptions) ? n.selectedOptions : [],
              r = new Set(t.map((e) => e?.name).filter(Boolean)),
              i = e.length > 0 && e.every((e) => r.has(e.name));
            n.isCompleteVariant === !0 || i
              ? (v(n), b(n.id), w(n.quantityAvailable), E(n.availableForSale), F(!0))
              : (v(null), b(null), w(0), E(!1), F(!0));
          }
        },
        r = (e) => {
          e.detail && S(e.detail);
        },
        a = async (e) => {
          let { countryCode: t } = e.detail;
          k(t);
        };
      return (
        i.addEventListener(`currency_changed`, a),
        document.addEventListener(`product__active-variant__changed`, n),
        i.addEventListener(`FcQuantitySelectorchanges`, r),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product__active-variant__changed`, n),
            i.removeEventListener(`FcQuantitySelectorchanges`, r),
            i.removeEventListener(`currency_changed`, a));
        }
      );
    }, [D, t, A, h, y]),
    r(() => {
      if (!h) return;
      let e = (h.node?.variants?.edges || []).length > 1;
      L(e && !y);
    }, [h, y]));
  let R = (() => {
      switch (c) {
        case `White on Black`:
          return { bg: `#000000`, hover: `#333333`, text: `#FFFFFF`, logo: `#FFFFFF` };
        case `Purple on White`:
          return { bg: `#FFFFFF`, hover: `#F7F7F7`, text: `#5A31F4`, logo: `#5A31F4` };
        case `Black on White`:
          return { bg: `#FFFFFF`, hover: `#F7F7F7`, text: `#000000`, logo: `#000000` };
        default:
          return { bg: `#5A31F4`, hover: `#4A28CC`, text: `#FFFFFF`, logo: `#FFFFFF` };
      }
    })(),
    [z, ee] = o(!1),
    B = () => {
      if (!e.required) return !0;
      let t = `shopX_cart_attributes_${e.shopifyProductID}`,
        n = sessionStorage.getItem(t);
      if (!n) return !1;
      try {
        let e = JSON.parse(n);
        return e?.Email && e.Email.trim() !== ``;
      } catch {
        return !1;
      }
    };
  (r(() => {
    if (e.required) {
      let e = B();
      ee(!e);
    }
  }, [e.required, e.shopifyProductID]),
    r(() => {
      if (e.required) {
        let e = (e) => {
          let t = B();
          ee(!t);
        };
        return (
          i.addEventListener(`orderFieldChanged`, e),
          () => i.removeEventListener(`orderFieldChanged`, e)
        );
      }
    }, [e.required]));
  let [te, ne] = o(!1);
  r(() => {
    let e = () => {
      let e = `shopX_input_config_${t}`,
        n = sessionStorage.getItem(e);
      if (n) {
        let { required: e } = JSON.parse(n);
        ne(e);
      } else ne(!1);
    };
    return (
      e(),
      i.addEventListener(`inputConfigChanged`, e),
      () => i.removeEventListener(`inputConfigChanged`, e)
    );
  }, [t]);
  let V = async () => {
      try {
        let t = O;
        t || ((t = localStorage.getItem(`selectedCountryCode`)), k(t));
        let n = () => {
          let t = y;
          if (!t) throw Error(`No valid product variant selected`);
          let n = { merchandiseId: t, quantity: x };
          try {
            let t = `shopX_cart_attributes_${e.shopifyProductID}`,
              r = sessionStorage.getItem(t);
            if (!r) return n;
            let i = JSON.parse(r),
              a = i.Email || i[`Order Note`],
              o = i.Email ? `Email` : `Order Note`;
            a && a.trim() && (n.attributes = [{ key: o, value: a.trim() }]);
          } catch {}
          return n;
        };
        if (e.required || te) {
          let t = `shopX_cart_attributes_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t),
            r = document.querySelector(`[data-product-id="${e.shopifyProductID}"]`)?.value || ``;
          if (r && (!n || r !== JSON.parse(n)?.Email)) {
            i.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please save your email before proceeding`,
                },
              })
            );
            return;
          }
          if (!n || !JSON.parse(n)?.Email || JSON.parse(n).Email.trim() === ``) {
            i.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please fill in all required fields`,
                },
              })
            );
            return;
          }
        }
        let r = { lines: [n()], countryCode: t },
          a = await i.shopXtools?.handleTemporaryCartMutation(xe, r);
        if (a?.cartCreate?.cart?.checkoutUrl) {
          let e = a.cartCreate.cart.checkoutUrl,
            t = new URLSearchParams({
              payment: `shop_pay`,
              redirect_source: `direct_checkout_checkout`,
            }),
            n = `${e}${e.includes(`?`) ? `&` : `?`}${t.toString()}`,
            r = _?.price?.currencyCode || `USD`,
            o = parseFloat((parseFloat(_?.price?.amount || `0`) * x).toFixed(2));
          (_?.id,
            _?.title,
            parseFloat(_?.price?.amount || `0`),
            typeof i.fcTrackGAEvent == `function` &&
              i.fcTrackGAEvent(`begin_checkout`, {
                currency: r,
                value: o,
                items: [
                  {
                    item_id: _?.id?.split(`/`).pop() || ``,
                    item_name: h?.title || ``,
                    item_variant: _?.title || ``,
                    price: parseFloat(_?.price?.amount || `0`),
                    quantity: x,
                    item_brand: h?.vendor || null,
                    item_category: h?.productType || null,
                    SKU: _?.id?.split(`/`).pop() || ``,
                    "Item Name": h?.title || ``,
                  },
                ],
              }),
            typeof fbq == `function` &&
              h?.node &&
              be({ variant: _, product: h.node, quantity: x, currency: r, useBeacon: !0 }));
          let s = n;
          ((s = ve(s)), (s = ge(s)), s && !z && i.location.assign(s));
        } else
          a?.cartCreate?.userErrors?.length > 0
            ? console.error(`Cart creation errors:`, a.cartCreate.userErrors)
            : console.error(`No checkout URL in response`);
      } catch (e) {
        console.error(`Error initiating Shop Pay checkout:`, e);
      }
    },
    re = m(`button`, {
      style: {
        backgroundColor: R.bg,
        color: R.text,
        padding: `12px 24px`,
        border: `none`,
        borderRadius: `${l}px`,
        cursor: `pointer`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        gap: `4px`,
        minHeight: `48px`,
        transition: `background-color 0.2s ease`,
      },
      onMouseEnter: (e) => {
        e.currentTarget.style.backgroundColor = R.hover;
      },
      onMouseLeave: (e) => {
        e.currentTarget.style.backgroundColor = R.bg;
      },
      children: [
        n &&
          d(`span`, {
            style: { ...s, color: R.text, display: `block`, maxWidth: `100%` },
            children: a,
          }),
        m(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          fill: `inherit`,
          "aria-hidden": `true`,
          viewBox: `0 0 341 80.035`,
          style: { width: `85px`, height: `20px`, fill: R.logo },
          children: [
            d(`path`, {
              fillRule: `evenodd`,
              d: `M227.297 0c-6.849 0-12.401 5.472-12.401 12.223v55.59c0 6.75 5.552 12.222 12.401 12.222h101.06c6.849 0 12.401-5.472 12.401-12.222v-55.59c0-6.75-5.552-12.223-12.401-12.223zm17.702 55.892v-14.09h8.994c8.217 0 12.586-4.542 12.586-11.423s-4.369-11-12.586-11h-14.788v36.513zm0-31.084h7.664c5.319 0 7.932 2.154 7.932 5.758s-2.518 5.758-7.695 5.758h-7.901zm31.796 31.833c4.417 0 7.314-1.92 8.644-5.196.38 3.65 2.613 5.523 7.457 4.26l.048-3.886c-1.948.187-2.328-.515-2.328-2.528v-9.55c0-5.617-3.752-8.94-10.686-8.94-6.84 0-10.782 3.37-10.782 9.08h5.32c0-2.714 1.947-4.353 5.367-4.353 3.609 0 5.272 1.545 5.224 4.214v1.217l-6.127.655c-6.887.749-10.686 3.324-10.686 7.818 0 3.698 2.659 7.209 8.549 7.209m1.187-4.213c-2.992 0-4.179-1.592-4.179-3.184 0-2.153 2.47-3.136 7.314-3.698l3.8-.421c-.238 4.12-3.04 7.303-6.935 7.303m32.555 5.29c-2.422 5.804-6.317 7.536-12.396 7.536h-2.613V60.48h2.803c3.324 0 4.939-1.03 6.697-3.979l-10.782-24.95h5.984l7.695 18.21 6.839-18.21h5.842z`,
              clipRule: `evenodd`,
            }),
            d(`path`, {
              d: `M29.514 35.18c-7.934-1.697-11.469-2.36-11.469-5.374 0-2.834 2.392-4.246 7.176-4.246 4.207 0 7.283 1.813 9.546 5.363.171.274.524.369.812.222l8.927-4.447a.616.616 0 0 0 .256-.864c-3.705-6.332-10.55-9.798-19.562-9.798-11.843 0-19.2 5.752-19.2 14.898 0 9.714 8.96 12.169 16.904 13.865 7.944 1.697 11.49 2.36 11.49 5.374s-2.584 4.435-7.742 4.435c-4.763 0-8.297-2.15-10.433-6.321a.63.63 0 0 0-.843-.274L6.47 52.364a.623.623 0 0 0-.278.843c3.535 7.006 10.785 10.947 20.47 10.947 12.334 0 19.787-5.658 19.787-15.088s-9.001-12.169-16.935-13.865zM77.353 16.036c-5.062 0-9.536 1.77-12.75 4.92-.203.19-.534.053-.534-.221V.622a.62.62 0 0 0-.63-.622h-11.17a.62.62 0 0 0-.63.622v62.426a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-5.289 4.11-9.345 9.653-9.345 5.542 0 9.557 3.972 9.557 9.345v27.384a.62.62 0 0 0 .63.621h11.17a.62.62 0 0 0 .63-.621V35.664c0-11.505-7.646-19.618-18.356-19.618zM118.389 14.255c-6.065 0-11.767 1.823-15.847 4.467a.62.62 0 0 0-.202.833l4.922 8.292c.182.295.566.4.865.22a19.8 19.8 0 0 1 10.262-2.78c9.749 0 16.914 6.785 16.914 15.75 0 7.64-5.734 13.297-13.006 13.297-5.926 0-10.037-3.403-10.037-8.207 0-2.75 1.185-5.005 4.271-6.596a.607.607 0 0 0 .246-.864l-4.645-7.754a.63.63 0 0 0-.759-.264c-6.225 2.276-10.593 7.755-10.593 15.109 0 11.126 8.981 19.428 21.507 19.428 14.629 0 25.147-9.998 25.147-24.338 0-15.372-12.237-26.603-29.066-26.603zM180.098 15.952c-5.649 0-10.689 2.054-14.373 5.678a.313.313 0 0 1-.534-.22v-4.363a.62.62 0 0 0-.63-.621H153.68a.62.62 0 0 0-.63.621v62.331a.62.62 0 0 0 .63.622h11.169a.62.62 0 0 0 .631-.622v-20.44c0-.274.331-.41.533-.231 3.674 3.371 8.532 5.342 14.096 5.342 13.102 0 23.321-10.463 23.321-24.054 0-13.592-10.23-24.054-23.321-24.054zm-2.103 37.54c-7.454 0-13.103-5.848-13.103-13.582 0-7.733 5.638-13.58 13.103-13.58s13.091 5.752 13.091 13.58-5.553 13.581-13.102 13.581z`,
            }),
          ],
        }),
      ],
    });
  if (Y.current() === Y.canvas) return d(`div`, { style: { height: `100%` }, children: re });
  let H = !y || (C === 0 && T === !1) || !t || I,
    U = f && Y.current() !== Y.preview;
  return d(`div`, {
    onClick: V,
    style: {
      opacity: U ? 0 : H ? 0.5 : 1,
      transition: `opacity 0.2s ease-in-out`,
      pointerEvents: f || H ? `none` : `auto`,
      height: `100%`,
      visibility: U ? `hidden` : `visible`,
    },
    "aria-hidden": U,
    children: re,
  });
}
var rn = e(() => {
  (n(),
    h(),
    _(),
    R(),
    Z(),
    je(),
    ye(),
    me(),
    Ce(),
    tn(),
    (nn.defaultProps = {
      shopifyProductID: ``,
      text: !0,
      display: `Buy with`,
      font: {
        family: `Inter`,
        style: `normal`,
        weight: 500,
        size: 16,
        lineHeight: 1.5,
        letterSpacing: 0,
        color: `#FFFFFF`,
      },
      color: `White on Purple`,
      radius: 6,
    }),
    U(nn, {
      shopifyProductID: { type: J.String, title: `Product ID`, description: `Connect to CMS` },
      text: {
        type: J.Boolean,
        title: `Text`,
        defaultValue: !1,
        enabledTitle: `Yes`,
        disabledTitle: `No`,
      },
      display: {
        type: J.String,
        title: `Display`,
        defaultValue: `Buy with`,
        placeholder: `Buy with`,
        hidden: (e) => !e.text,
      },
      font: { type: J.Font, title: `Font`, controls: `extended`, hidden: (e) => !e.text },
      color: {
        type: J.Enum,
        title: `Color`,
        options: [`White on Purple`, `White on Black`, `Purple on White`, `Black on White`],
        optionTitles: [`White on Purple`, `White on Black`, `Purple on White`, `Black on White`],
        defaultValue: `White on Purple`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
      },
      radius: {
        type: J.Number,
        title: `Radius`,
        defaultValue: 6,
        min: 0,
        max: 100,
        step: 1,
        displayStepper: !0,
      },
    }));
});
function an(e) {
  let { shopifyProductID: n, images: a, behaviorConfigs: s, style: l, variants: f } = e,
    {
      showSingleVariants: p,
      selectOutOfStock: h,
      filterVariants: g,
      action: _,
      triggerCart: v,
      productPage: y = !0,
    } = s || {},
    { autoSelectFirst: b } = s || {},
    [x, S] = o(null),
    [C, w] = o(!1),
    [T, E] = o({}),
    [D, O] = o([]),
    k = (e = x, t = g) => {
      let n = (X(e, `options`, []) || []).map((e) => e.name);
      if (!t || t.variantGroups === `all`) return n;
      let r = t.variantTitles || [];
      return t.variantGroups === `equals` ? r : n.filter((e) => !r.includes(e));
    },
    A = c(
      () =>
        !g || g.variantGroups === `all`
          ? X(x, `options`) || []
          : g.variantGroups === `equals`
            ? (X(x, `options`) || []).filter((e) => g.variantTitles?.includes(e.name))
            : g.variantGroups === `doesn't equal`
              ? (X(x, `options`) || []).filter((e) => !g.variantTitles?.includes(e.name))
              : X(x, `options`) || [],
      [x, g]
    ),
    j = i !== void 0,
    M = !j || !i.shopXtools,
    N = t(!1),
    P = t(Math.random().toString(36).slice(2)),
    F = t(!1),
    I = t(!1),
    L = t(_),
    R = t(!!b);
  (t(0), t(!1));
  let z = t(!1),
    [ee, B] = o(),
    [te, ne] = o(-1),
    [V, re] = o(-1),
    H = t(null),
    [U, W] = o(new Map());
  (r(() => {
    I.current || (E({}), (N.current = !1));
  }, [n]),
    r(() => {
      I.current || (E({}), (N.current = !1));
    }, [g?.variantGroups, (g?.variantTitles || []).join(`|`)]),
    r(() => {
      b || ((N.current = !1), E({}));
    }, [b]));
  let G = e.colors || [],
    [K, ie] = o(e.swatchImages || []),
    [q, ae] = o(e.colorTitles || [`Color`]);
  (e.imageTitles,
    e.variantImageTitles,
    r(() => {
      if (!j) return;
      let t = i.__FcCheckoutConfigs;
      (!e.swatchImages && Array.isArray(t?.variantImageValues) && ie(t.variantImageValues),
        !e.colorTitles && Array.isArray(t?.variantColorTitles) && ae(t.variantColorTitles));
    }, [j, e.swatchImages, e.colorTitles]));
  let oe = new Map([
    [`black`, `#000000`],
    [`white`, `#FFFFFF`],
    [`red`, `#FF0000`],
    [`green`, `#00FF00`],
    [`blue`, `#0000FF`],
    [`yellow`, `#FFFF00`],
    [`purple`, `#800080`],
    [`orange`, `#FFA500`],
    [`pink`, `#FFC0CB`],
    [`brown`, `#A52A2A`],
    [`gray`, `#808080`],
    [`grey`, `#808080`],
    [`navy`, `#000080`],
    [`teal`, `#008080`],
    [`maroon`, `#800000`],
    [`olive`, `#808000`],
    [`lime`, `#00FF00`],
    [`aqua`, `#00FFFF`],
    [`silver`, `#C0C0C0`],
    [`gold`, `#FFD700`],
    [`beige`, `#F5F5DC`],
    [`ivory`, `#FFFFF0`],
    [`lavender`, `#E6E6FA`],
    [`mint`, `#F5FFFA`],
    [`coral`, `#FF7F50`],
    [`indigo`, `#4B0082`],
    [`violet`, `#EE82EE`],
    [`magenta`, `#FF00FF`],
    [`turquoise`, `#40E0D0`],
    [`plum`, `#DDA0DD`],
    [`salmon`, `#FA8072`],
    [`tan`, `#D2B48C`],
    [`khaki`, `#F0E68C`],
    [`azure`, `#F0FFFF`],
    [`bisque`, `#FFE4C4`],
    [`chocolate`, `#D2691E`],
    [`crimson`, `#DC143C`],
    [`fuchsia`, `#FF00FF`],
    [`honeydew`, `#F0FFF0`],
    [`linen`, `#FAF0E6`],
    [`moccasin`, `#FFE4B5`],
    [`oldlace`, `#FDF5E6`],
    [`orchid`, `#DA70D6`],
    [`papayawhip`, `#FFEFD5`],
    [`peachpuff`, `#FFDAB9`],
    [`peru`, `#CD853F`],
    [`rosybrown`, `#BC8F8F`],
    [`sandybrown`, `#F4A460`],
    [`seashell`, `#FFF5EE`],
    [`sienna`, `#A0522D`],
    [`skyblue`, `#87CEEB`],
    [`slateblue`, `#6A5ACD`],
    [`slategray`, `#708090`],
    [`slategrey`, `#708090`],
    [`snow`, `#FFFAFA`],
    [`springgreen`, `#00FF7F`],
    [`steelblue`, `#4682B4`],
    [`thistle`, `#D8BFD8`],
    [`tomato`, `#FF6347`],
    [`wheat`, `#F5DEB3`],
    [`whitesmoke`, `#F5F5F5`],
    [`yellowgreen`, `#9ACD32`],
  ]);
  r(() => {
    let e = new Map();
    if (G && G.length > 0)
      G.forEach((t) => {
        if (t.name) {
          let n = t.name.trim().toLowerCase(),
            r = t.hex || oe.get(n);
          r && e.set(n, r);
        }
      });
    else if (i !== void 0 && i.__FcCheckoutConfigs?.variantColorValues)
      try {
        let t = i.__FcCheckoutConfigs.variantColorValues;
        Array.isArray(t) &&
          t.forEach((t) => {
            t.name && t.hex && e.set(t.name.toLowerCase(), t.hex);
          });
      } catch (e) {
        console.error(`Error parsing color data from window.__FcCheckoutConfigs:`, e);
      }
    W(e);
  }, [G, K, x, q]);
  let J = u(
      (e) => {
        if (i !== void 0 && y && e) {
          let t = e.replace(`gid://shopify/ProductVariant/`, ``),
            r = new URL(i.location.href);
          if (
            (r.searchParams.set(`variant`, t),
            i.history.replaceState({}, ``, r.toString()),
            i !== void 0 && x && n)
          ) {
            let e = new URLSearchParams(i.location.search).get(`variant`);
            if (e) {
              let t = (X(x, `variants.edges`) || []).find(
                ({ node: t }) => t.id.endsWith(e) || t.id === `gid://shopify/ProductVariant/${e}`
              );
              if (t) {
                let e = {};
                (t.node.selectedOptions.forEach((t) => {
                  e[t.name] = t.value;
                }),
                  E(e));
                let r = X(x, `options`, [])
                    .map((e) => e.name)
                    .every((t) => e[t]),
                  i = `fc_active_variant_${n}`;
                (sessionStorage.getItem(i) || de(e, t.node.id, !1),
                  r &&
                    setTimeout(() => {
                      if (un(_)) return;
                      let e = new CustomEvent(`product__active-variant__changed`, {
                        detail: {
                          ...t.node,
                          productId: `gid://shopify/Product/${n}`,
                          isCompleteVariant: r,
                        },
                      });
                      document.dispatchEvent(e);
                    }, 100));
                return;
              }
            }
          }
        }
      },
      [y, x, n]
    ),
    se = u(() => {
      if (i === void 0) return !1;
      try {
        setTimeout(() => {
          let e = i.shopXtools?.products;
          if (!Array.isArray(e)) return !1;
          let t = new URL(i.location.href).pathname.split(`/`).filter(Boolean).pop();
          return t ? e.some(({ node: e }) => e.handle === t) : !1;
        }, 500);
      } catch (e) {
        return (console.error(`Error determining if current page is product page:`, e), !1);
      }
    }, []);
  r(() => {
    i === void 0 || !i.shopXtools?.products || ue();
  }, []);
  let ce = u(() => {
      if (i !== void 0)
        try {
          if (i === void 0) return;
          try {
            for (let e = sessionStorage.length - 1; e >= 0; e--) {
              let t = sessionStorage.key(e);
              t && t.startsWith(`fc_active_variant_`) && sessionStorage.removeItem(t);
            }
          } catch (e) {
            console.error(`Error clearing variant from sessionStorage:`, e);
          }
        } catch (e) {
          console.error(`Error clearing variant from sessionStorage:`, e);
        }
    }, [n, se]),
    le = u(() => {
      if (!(i === void 0 || !T))
        try {
          let e = new URL(i.location.href),
            t = e.searchParams;
          if (t.has(`variant`)) {
            t.delete(`variant`);
            let n = e.toString();
            i.history.replaceState({}, ``, n);
          }
        } catch (e) {
          console.error(`Error stripping variant from URL:`, e);
        }
    }, [n, T, se]),
    ue = u(() => {
      if (i === void 0 || !i.shopXtools?.products) return;
      let e = se(),
        t = new URLSearchParams(i.location.search).has(`variant`);
      e !== void 0 && t && !e && (ce(), le(), E({}));
    }, [se, ce, le, T]),
    Y = u(() => {
      let e = g?.variantGroups || `all`,
        t = (g?.variantTitles || []).join(`|`) || `all`;
      return `fc_active_variant_${n}_${e}__${t}`;
    }, [n, g?.variantGroups, g?.variantTitles]),
    de = u(
      (e, t, r = !1) => {
        if (i !== void 0)
          try {
            let i = Y(),
              a = { selectedOptions: e, variantId: t, timestamp: Date.now(), isPartial: r };
            sessionStorage.setItem(i, JSON.stringify(a));
            let o = `fc_active_variant_${n}`;
            sessionStorage.setItem(o, JSON.stringify(a));
          } catch (e) {
            console.error(`Error saving variant to sessionStorage:`, e);
          }
      },
      [Y]
    ),
    fe = u(() => {
      if (i === void 0) return null;
      try {
        let e = Y(),
          t = sessionStorage.getItem(e);
        if (!t) {
          let e = `fc_active_variant_${n}`;
          t = sessionStorage.getItem(e);
        }
        if (!t) {
          let e = `fc_active_variant_${n}_`,
            r = null;
          for (let t = 0; t < sessionStorage.length; t++) {
            let n = sessionStorage.key(t);
            if (n && n.startsWith(e))
              try {
                let e = sessionStorage.getItem(n);
                if (!e) continue;
                let t = JSON.parse(e),
                  i = t?.timestamp || 0;
                t?.selectedOptions && (!r || i > r.timestamp) && (r = { data: t, timestamp: i });
              } catch {}
          }
          r && (t = JSON.stringify(r.data));
        }
        if (t) {
          let e = JSON.parse(t),
            n = e.timestamp || Date.now();
          if (Date.now() - n < 1440 * 60 * 1e3 && e.selectedOptions) return e;
        }
      } catch (e) {
        console.error(`Error loading variant from sessionStorage:`, e);
      }
      return null;
    }, [n, Y, g?.variantGroups, g?.variantTitles]),
    pe = u(() => {
      if (i === void 0 || !y || !x) return;
      let e = new URLSearchParams(i.location.search).has(`variant`);
      if (e) return !1;
      let t = fe();
      if (t?.variantId && t?.selectedOptions) {
        let r = (X(x, `options`, []) || []).map((e) => e.name),
          a = Object.fromEntries(Object.entries(t.selectedOptions).filter(([e]) => r.includes(e)));
        E((e) => ({ ...(e || {}), ...a }));
        let o = (X(x, `variants.edges`) || []).find(({ node: e }) => e.id === t.variantId);
        if (o) {
          if (g?.variantGroups === `all` && b) {
            let e = X(x, `options`, []).map((e) => e.name),
              t = o.node.selectedOptions;
            e.every((e) => t.some((t) => t.name === e && !!t.value)) &&
              (J(o.node.id), de(o.node.selectedOptions, o.node.id, !1));
          }
          let r = k().filter((e) => !a[e]),
            s = { ...a };
          if (e && b && r.length > 0) {
            let e = o.node?.selectedOptions || [];
            e.length ||
              (e =
                (X(x, `variants.edges`, []) || []).find(({ node: e }) => e.availableForSale)?.node
                  ?.selectedOptions || []);
            let t = {};
            (e.forEach((e) => {
              r.includes(e.name) && (t[e.name] = e.value);
            }),
              Object.keys(t).length > 0 &&
                ((s = { ...a, ...t }),
                E((e) => ({ ...(e || {}), ...s })),
                setTimeout(() => {
                  if (
                    (Object.entries(t).forEach(([e, t]) => {
                      let r = new CustomEvent(`variant_option_selected`, {
                        detail: {
                          optionName: e,
                          value: t,
                          allSelectedOptions: s,
                          isCompleteVariant: !1,
                          isPurchaseAction: !1,
                          productId: `gid://shopify/Product/${n}`,
                        },
                      });
                      document.dispatchEvent(r);
                    }),
                    g?.variantGroups !== `all`)
                  ) {
                    let e = new CustomEvent(`__variant_option_selected`, {
                      detail: {
                        productId: `gid://shopify/Product/${n}`,
                        optionName: Object.keys(t)[0] || ``,
                        value: Object.values(t)[0] || ``,
                        allSelectedOptions: s,
                        allOptionsSelected: !1,
                        isPurchaseAction: !1,
                        autoSelectFirst: b,
                        senderPriority: k()[0] || ``,
                        instanceId: P.current,
                      },
                    });
                    i.dispatchEvent(e);
                  }
                }, 0)));
          }
          let c = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => s[e]);
          (setTimeout(() => {
            let t = e && c;
            if (
              (Object.entries(s).forEach(([e, r]) => {
                let i = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: r,
                    allSelectedOptions: s,
                    isCompleteVariant: t,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(i);
              }),
              g?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  optionName: Object.keys(s)[0] || ``,
                  value: Object.values(s)[0] || ``,
                  allSelectedOptions: s,
                  allOptionsSelected: c,
                  isPurchaseAction: !1,
                  autoSelectFirst: b,
                  senderPriority: k()[0] || ``,
                  instanceId: P.current,
                },
              });
              i.dispatchEvent(e);
            }
          }, 100),
            e && c && J(t.variantId),
            setTimeout(() => {
              if (un(_) || !e) return;
              let t = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...o.node,
                  productId: `gid://shopify/Product/${n}`,
                  isCompleteVariant: c,
                },
              });
              document.dispatchEvent(t);
            }, 100));
        } else if (b) {
          (X(x, `options`, []) || []).map((e) => e.name);
          let e = k().filter((e) => !a[e]);
          if (e.length > 0) {
            let t =
                (X(x, `variants.edges`, []) || []).find(({ node: e }) => e.availableForSale)?.node
                  ?.selectedOptions || [],
              r = {};
            if (
              (t.forEach((t) => {
                e.includes(t.name) && (r[t.name] = t.value);
              }),
              Object.keys(r).length > 0)
            ) {
              let e = { ...a, ...r };
              (E((t) => ({ ...(t || {}), ...e })),
                setTimeout(() => {
                  if (
                    (Object.entries(r).forEach(([t, r]) => {
                      let i = new CustomEvent(`variant_option_selected`, {
                        detail: {
                          optionName: t,
                          value: r,
                          allSelectedOptions: e,
                          isCompleteVariant: !1,
                          isPurchaseAction: !1,
                          productId: `gid://shopify/Product/${n}`,
                        },
                      });
                      document.dispatchEvent(i);
                    }),
                    g?.variantGroups !== `all`)
                  ) {
                    let t = new CustomEvent(`__variant_option_selected`, {
                      detail: {
                        productId: `gid://shopify/Product/${n}`,
                        optionName: Object.keys(r)[0] || ``,
                        value: Object.values(r)[0] || ``,
                        allSelectedOptions: e,
                        allOptionsSelected: !1,
                        isPurchaseAction: !1,
                        autoSelectFirst: b,
                        senderPriority: k()[0] || ``,
                        instanceId: P.current,
                      },
                    });
                    i.dispatchEvent(t);
                  }
                }, 0));
            }
          }
        }
        return !0;
      }
      return !1;
    }, [y, fe, J, x, n]),
    Z = u(() => {
      let e = new URL(i.location.href).pathname.split(`/`).filter(Boolean).pop();
      if (i.shopXtools?.products && Array.isArray(i.shopXtools.products) && e) {
        let t = i.shopXtools.products.find(({ node: t }) => t.handle === e),
          r = t?.node.id.split(`gid://shopify/Product/`)[1];
        if (!t) return;
        let a = new URLSearchParams(i.location.search).get(`variant`);
        if (a) {
          let e = (X(t.node, `variants.edges`) || []).find(
            ({ node: e }) => e.id.endsWith(a) || e.id === `gid://shopify/ProductVariant/${a}`
          );
          if (!e) return;
          if (e) {
            let i = e.node.id.split(`gid://shopify/ProductVariant/`)[1],
              a = {};
            (e.node.selectedOptions.forEach((e) => {
              a[e.name] = e.value;
            }),
              E(a));
            let o = X(t, `options`, [])
              .map((e) => e.name)
              .every((e) => a[e]);
            if (o) {
              let t = `fc_active_variant_${r}`;
              if (sessionStorage.getItem(t)) return;
              let s = { urlOptions: a, matchingVariantId: i, timestamp: Date.now(), isPartial: !1 };
              (sessionStorage.setItem(t, JSON.stringify(s)),
                setTimeout(() => {
                  if (un(_)) return;
                  let t = new CustomEvent(`product__active-variant__changed`, {
                    detail: {
                      ...e.node,
                      productId: `gid://shopify/Product/${n}`,
                      isCompleteVariant: o,
                    },
                  });
                  document.dispatchEvent(t);
                }, 100));
            }
          }
        }
      }
    }, [x]),
    me = t(y),
    he = t(x),
    _e = t(Z);
  r(() => {
    ((me.current = y), (he.current = x), (_e.current = Z));
  }, [y, x, Z]);
  let ye = u(
    (e) => {
      let t = new URLSearchParams(i.location.search).has(`variant`),
        n = i.location.pathname.split(`/`).filter(Boolean).pop(),
        r =
          i.shopXtools?.products && Array.isArray(i.shopXtools.products)
            ? i.shopXtools.products.some(({ node: e }) => e.handle === n)
            : !1;
      if (me.current && r && t) {
        (e.stopImmediatePropagation(), he.current && _e.current());
        return;
      }
      if (me.current && !r) {
        (e.stopImmediatePropagation(), i.location.reload());
        return;
      }
      if (!me.current && t) {
        (e.stopImmediatePropagation(), i.location.reload());
        return;
      }
      if (!me.current && r && !t) {
        e.stopImmediatePropagation();
        return;
      }
      if (me.current && r && !t) {
        e.stopImmediatePropagation();
        return;
      }
    },
    [n]
  );
  (r(() => {
    if (i !== void 0)
      return (
        i.addEventListener(`popstate`, ye, !0),
        () => {
          i.removeEventListener(`popstate`, ye, !0);
        }
      );
  }, [ye, n]),
    r(() => {
      if (y && !M && i !== void 0 && x) {
        let e = setTimeout(() => {
          let e = pe();
          if (((F.current = !!e), !e && !e)) {
            let e = new URLSearchParams(i.location.search).get(`variant`);
            if (e) {
              let t = (X(x, `variants.edges`) || []).find(
                ({ node: t }) => t.id.endsWith(e) || t.id === `gid://shopify/ProductVariant/${e}`
              );
              if (t) {
                let e = {};
                (t.node.selectedOptions.forEach((t) => {
                  e[t.name] = t.value;
                }),
                  E(e));
                let r = X(x, `options`, [])
                  .map((e) => e.name)
                  .every((t) => e[t]);
                r &&
                  (de(e, t.node.id, !1),
                  setTimeout(() => {
                    let e = new CustomEvent(`product__active-variant__changed`, {
                      detail: {
                        ...t.node,
                        productId: `gid://shopify/Product/${n}`,
                        isCompleteVariant: r,
                      },
                    });
                    document.dispatchEvent(e);
                  }, 100));
              }
            }
          }
        }, 100);
        return () => clearTimeout(e);
      }
    }, [y, pe, x, n]),
    r(() => {
      let e = document.getElementById(`fc-product-variants-styles`);
      (e ||
        ((e = document.createElement(`style`)),
        (e.id = `fc-product-variants-styles`),
        document.head.appendChild(e)),
        (e.innerHTML = `
            /* Base z-index for all containers */
            .variant-button-container, .variant-dropdown-container {
                z-index: 0;
                position: relative;
            }
            
            /* Increase z-index on hover */
            .variant-button-container:hover, .variant-dropdown-container:hover {
                z-index: 2 !important;
            }
            
            /* Ensure dropdown inner elements inherit hover state */
            .variant-dropdown-container:hover .dropdown-inner {
                z-index: 2 !important;
                position: relative;
            }
            
            /* Ensure dropdown select elements have proper z-index */
            .dropdown-inner {
                position: relative;
                z-index: 0;
            }

            /* Focus outline via CSS - instant, no React delay */
            .dropdown-inner {
                outline: var(--focus-outline-width, 2px) solid transparent;
                outline-offset: var(--focus-outline-offset, 2px);
                transition: outline-color 0.15s ease-in-out;
            }
            .dropdown-inner:focus-within {
                outline-color: var(--focus-outline-color, var(--hover-border-color, #000));
                border-radius: var(--focus-outline-radius, 0px);
                transition: outline-color 0.15s ease-in-out;
            }

            /* Remove ALL default focus/active styling from select */
            .dropdown-inner select,
            .dropdown-inner select:focus,
            .dropdown-inner select:focus-visible,
            .dropdown-inner select:focus-within,
            .dropdown-inner select:active,
            .dropdown-inner select:-moz-focusring {
                outline: none !important;
                outline-offset: 0 !important;
                border: none !important;
                box-shadow: none !important;
                -webkit-tap-highlight-color: transparent !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
            }

            /* Firefox inner focus ring */
            .dropdown-inner select::-moz-focus-inner {
                border: 0 !important;
                outline: 0 !important;
            }

            /* Force margin-right for horizontal layout */
            .variant-dropdown-container[data-horizontal="true"]:not([data-last="true"]) {
                margin-right: -1px !important;
            }
            
            /* Direct class for horizontal edge-to-edge */
            .horizontal-edge-to-edge {
                margin-right: -1px !important;
            }
            
            /* Focus styles for accessibility - buttons only, dropdown uses inline styles */
            .variant-button-container button:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            /* High contrast mode support */
            @media (forced-colors: active) {
                .variant-button-container button:focus-visible {
                    outline: 2px solid CanvasText !important;
                }
            }

            /* Swatch styles */
            .variant-swatch-container {
                position: relative;
            }
            
            .variant-swatch-container:hover {
                z-index: 10 !important;
            }
            
            .variant-swatch-container:hover .swatch-tooltip {
                opacity: 1;
                visibility: visible;
            }
            
            .variant-swatch-container button:focus-visible {
                outline: 2px solid #0078D4 !important;
                outline-offset: 2px !important;
            }
            
            /* High contrast mode support */
            @media (forced-colors: active) {
                .variant-swatch-container button:focus-visible {
                    outline: 2px solid CanvasText !important;
                }
            }
        `));
    }, []),
    un(_) && (b = !1),
    r(() => {
      if (M) return;
      let e = `gid://shopify/Product/${n}`,
        t = setTimeout(() => {
          let t = i !== void 0 && new URLSearchParams(i.location.search).has(`variant`);
          if (_ === `Add to Cart` || _ === `Buy Now`) {
            let t = new CustomEvent(`auto_select_first_flag`, {
              detail: { autoSelectFirst: !1, shopifyProductID: e, instanceId: P.current },
            });
            document.dispatchEvent(t);
          } else {
            let n = new CustomEvent(`auto_select_first_flag`, {
              detail: {
                autoSelectFirst: y && !t ? !1 : b,
                shopifyProductID: e,
                instanceId: P.current,
              },
            });
            document.dispatchEvent(n);
          }
        }, 100);
      return () => clearTimeout(t);
    }, [b, _, M, n]),
    r(() => {
      let t = document.getElementById(`fc-product-variants-styles`);
      if (
        (t ||
          ((t = document.createElement(`style`)),
          (t.id = `fc-product-variants-styles`),
          document.head.appendChild(t)),
        (t.innerHTML = `
            /* Base z-index for all containers */
            .variant-dropdown-container {
                position: relative;
                z-index: 1;
            }

            /* Increase z-index when focused */
            .variant-dropdown-container:focus-within {
                z-index: 10;
            }

            /* Remove ALL default focus/active styling from select */
            .dropdown-inner select,
            .dropdown-inner select:focus,
            .dropdown-inner select:focus-visible,
            .dropdown-inner select:focus-within,
            .dropdown-inner select:active,
            .dropdown-inner select:-moz-focusring {
                outline: none !important;
                outline-offset: 0 !important;
                border: none !important;
                box-shadow: none !important;
                -webkit-tap-highlight-color: transparent !important;
                -webkit-appearance: none !important;
                -moz-appearance: none !important;
            }

            /* Firefox inner focus ring */
            .dropdown-inner select::-moz-focus-inner {
                border: 0 !important;
                outline: 0 !important;
            }

            /* Focus outline on dropdown wrapper via CSS variable */
            .dropdown-inner {
                outline: var(--focus-outline-width, 2px) solid transparent;
                outline-offset: var(--focus-outline-offset, 2px);
                transition: outline-color 0.15s ease-in-out;
            }
            .dropdown-inner:focus-within {
                outline-color: var(--focus-outline-color, var(--hover-border-color, #000));
                border-radius: var(--focus-outline-radius, 0px);
                transition: outline-color 0.15s ease-in-out;
            }

            /* Special styling for edge-to-edge layout */
            .horizontal-edge-to-edge + .horizontal-edge-to-edge .variant-dropdown {
                border-left: none !important;
            }

            .fc-dropdown-focus {
                outline: 2px solid CanvasText !important;
                outline-offset: 2px !important;
            }

            .fc-dropdown-list-item:focus {
                outline: 2px solid CanvasText !important;
                outline-offset: -2px !important;
            }
        `),
        M && f)
      ) {
        let { options: t, variants: n, productId: r } = ln(f),
          i = {
            id: r || `mock-product`,
            options: t.map((e) => ({ name: e.name, values: e.values })),
            variants: {
              edges: n.map((n, r) => {
                let i = !0;
                return (
                  e.buttonConfigs?.outOfStock?.preview &&
                    t.forEach((e, t) => {
                      e.values.length > 1 && n.combination[t] === e.values[1] && (i = !1);
                    }),
                  {
                    node: {
                      id: n.id.startsWith(`gid://`) ? n.id : `gid://shopify/ProductVariant/${n.id}`,
                      availableForSale: i,
                      quantityAvailable: i ? 50 : 0,
                      selectedOptions: t.map((e, t) => ({ name: e.name, value: n.combination[t] })),
                      price: { amount: `19.99`, currencyCode: `USD` },
                    },
                  }
                );
              }),
            },
            images: {
              edges: [, , , ,].fill(0).map((e, t) => ({ node: { id: `image-${t + 1}` } })),
            },
            priceRange: { minVariantPrice: { amount: `19.99`, currencyCode: `USD` } },
          };
        S(i);
        return;
      }
      if (M) {
        let t = {
          id: `mock-product`,
          variants: {
            edges: [
              {
                node: {
                  id: `mock-variant-1`,
                  availableForSale: h || !0,
                  quantityAvailable: 50,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-2`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-3`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-4`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XS` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-5`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-6`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-7`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-8`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `S` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-9`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-10`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-11`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-12`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `M` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-13`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-14`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-15`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-16`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `L` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-17`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Green` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-18`,
                  availableForSale: h || !e.buttonConfigs?.outOfStock?.preview,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Blue` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-19`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Pink` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
              {
                node: {
                  id: `mock-variant-20`,
                  availableForSale: h || !0,
                  selectedOptions: [
                    { name: `Size`, value: `XL` },
                    { name: `Color`, value: `Black` },
                  ],
                  price: { amount: `19.99`, currencyCode: `USD` },
                },
              },
            ],
          },
          options: [
            { name: `Size`, values: [`XS`, `S`, `M`, `L`, `XL`] },
            { name: `Color`, values: [`Green`, `Blue`, `Pink`, `Black`] },
          ],
          images: { edges: [, , , ,].fill(0).map((e, t) => ({ node: { id: `image-${t + 1}` } })) },
          priceRange: { minVariantPrice: { amount: `19.99`, currencyCode: `USD` } },
        };
        S(t);
        return;
      }
      if (!M) {
        if (i.shopXtools && Array.isArray(i.shopXtools.products)) {
          let e = i.shopXtools.products.find(
            ({ node: e }) => e.id === `gid://shopify/Product/${n}`
          );
          e && S(e.node);
        }
        let e = (e) => {
          if (Array.isArray(e.detail.products)) {
            let t = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
            t && S(t.node);
          }
        };
        return (
          document.addEventListener(`data__products-ready`, e),
          () => {
            document.removeEventListener(`data__products-ready`, e);
          }
        );
      }
      return (
        document.addEventListener(`product__variants__validate`, () => {
          w(!0);
        }),
        () => {
          document.removeEventListener(`product__variants__validate`, () => w(!0));
        }
      );
    }, [n, f, a.imageChange, e.variantImageIds, e.buttonConfigs?.outOfStock?.preview]),
    r(() => {
      if (!y || !x || M || un(_)) return;
      let e = new URLSearchParams(i.location.search).get(`variant`);
      if (e) {
        let t = X(x, `variants.edges`, []).find(
          ({ node: t }) =>
            t.id === `gid://shopify/ProductVariant/${e}` || t.id.split(`/`).pop() === e
        );
        if (
          (t ||
            console.warn(`[FC_ProductVariants] URL variant ${e} not found in product variants:`, {
              urlVariantId: e,
              availableVariantIds: X(x, `variants.edges`, []).map(({ node: e }) => ({
                fullId: e.id,
                numericId: e.id.split(`/`).pop(),
              })),
              productId: n,
            }),
          t)
        ) {
          let e = {};
          (t.node.selectedOptions.forEach((t) => {
            e[t.name] = t.value;
          }),
            E(e),
            b && (N.current = !0));
          let r = X(x, `options`, [])
            .map((e) => e.name)
            .every((t) => e[t]);
          setTimeout(() => {
            if (
              (Object.entries(e).forEach(([t, i]) => {
                let a = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: t,
                    value: i,
                    allSelectedOptions: e,
                    isCompleteVariant: r,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(a);
              }),
              g?.variantGroups !== `all`)
            ) {
              let t = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  optionName: Object.keys(e)[0] || ``,
                  value: Object.values(e)[0] || ``,
                  allSelectedOptions: e,
                  isPurchaseAction: !1,
                  autoSelectFirst: b,
                  senderPriority: k()[0] || ``,
                  instanceId: P.current,
                },
              });
              i.dispatchEvent(t);
            }
            if (r) {
              let e = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...t.node,
                  productId: `gid://shopify/Product/${n}`,
                  isCompleteVariant: r,
                },
              });
              document.dispatchEvent(e);
            }
          }, 100);
        }
      }
    }, [x, y, n, M, _, b, g?.variantGroups, g?.variantTitles]),
    r(() => {
      if (!y || M || un(_)) return;
      let e = new URLSearchParams(i.location.search).get(`variant`);
      if (e && !x) {
        let t = setTimeout(() => {
          i.location.search.includes(`variant=${e}`) && i.dispatchEvent(new Event(`resize`));
        }, 500);
        return () => clearTimeout(t);
      }
    }, [x, y, n, M, _]),
    r(() => {
      if (y && !un(_) && i !== void 0 && !new URLSearchParams(i.location.search).get(`variant`))
        try {
          let e = `fc_active_variant_${n}`,
            t = `fc_active_variant_${n}_`;
          for (let n = sessionStorage.length - 1; n >= 0; n--) {
            let r = sessionStorage.key(n);
            if (r && (r === e || r.startsWith(t)))
              try {
                let e = JSON.parse(sessionStorage.getItem(r) || `null`);
                e && e.isPartial === !1 && sessionStorage.removeItem(r);
              } catch {
                sessionStorage.removeItem(r);
              }
          }
        } catch {}
    }, [y, _, n]),
    r(() => {
      if (!x) return;
      let t = (t) => {
        if (!t.detail) return;
        let n = t.detail.variant_id;
        if (!n) return;
        let r = (X(x, `variants.edges`) || []).find(({ node: e }) => e.id === n);
        if (r) {
          let t = [
              ...(e.variantImageTitles || []),
              ...(e.imageTitles || []),
              ...(e.colorTitles || [`Color`, `Colour`]),
            ].map((e) => String(e).toLowerCase().trim()),
            n =
              (r.node.selectedOptions || []).find((e) =>
                t.includes(
                  String(e?.name || ``)
                    .toLowerCase()
                    .trim()
                )
              ) || (r.node.selectedOptions || [])[0];
          n?.name && n?.value && $(n.name, n.value);
        }
      };
      document.addEventListener(`image__variant__selected`, t);
      let r = (t) => {
        if (!a.imageChange || !t.detail?.imageNumber || !e.variantImageIds) return;
        let r = new Map(),
          o;
        for (; (o = pn.exec(e.variantImageIds)) !== null;) {
          let [, e, t] = o;
          (r.set(e, t), r.set(t, e));
        }
        pn.lastIndex = 0;
        let s = r.get(String(t.detail.imageNumber));
        if (!s) return;
        let c = (X(x, `variants.edges`) || []).find(({ node: e }) => e.id.endsWith(s));
        if (c && c.node.selectedOptions) {
          let e = {};
          for (let t of c.node.selectedOptions || []) t.name && t.value && (e[t.name] = t.value);
          let t = new CustomEvent(`__variant_option_selected`, {
            detail: {
              productId: `gid://shopify/Product/${n}`,
              allSelectedOptions: e,
              isPurchaseAction: !1,
              autoSelectFirst: b,
              senderPriority: k()[0] || ``,
              instanceId: P.current,
              twoWayGallery: !0,
            },
          });
          i.dispatchEvent(t);
        }
      };
      return (
        document.addEventListener(`image__variant__selected`, t),
        document.addEventListener(`image__number__selected`, r),
        () => {
          (document.removeEventListener(`image__variant__selected`, t),
            document.removeEventListener(`image__number__selected`, r));
        }
      );
    }, [x]),
    r(() => {
      if (M && _ === `Update Active` && b) {
        try {
          let e = `fc_active_variant_${n}`;
          sessionStorage.removeItem(e);
        } catch {}
        (E({}), (N.current = !1));
      }
    }, [M, _, b, n]),
    r(() => {
      let e = L.current !== `Update Active` && _ === `Update Active`,
        t = !R.current && !!b;
      if (e || t) {
        try {
          let e = `fc_active_variant_${n}`;
          sessionStorage.removeItem(e);
        } catch {}
        (E({}), (N.current = !1));
      }
      ((L.current = _), (R.current = !!b));
    }, [_, b, n]),
    r(() => {
      if (b && x && !N.current && Object.keys(T).length === 0) {
        let e = X(x, `variants.edges`, []),
          t = e.find(({ node: e }) => e.availableForSale),
          r = `fc_active_variant_${n}`,
          a = M ? null : sessionStorage.getItem(r),
          o = {},
          s = null,
          c = !1;
        if (!a && y && !M && x) {
          let e = new URLSearchParams(i.location.search).get(`variant`);
          ((s = X(x, `variants.edges`, []).find(
            ({ node: t }) => t.id === `gid://shopify/ProductVariant/${e}`
          )),
            s &&
              (s.node.selectedOptions.forEach((e) => {
                o[e.name] = e.value;
              }),
              E(o)),
            (N.current = !0));
          let t = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            (Object.entries(o).forEach(([e, r]) => {
              let i = new CustomEvent(`variant_option_selected`, {
                detail: {
                  optionName: e,
                  value: r,
                  allSelectedOptions: o,
                  isCompleteVariant: t,
                  isPurchaseAction: !1,
                  productId: `gid://shopify/Product/${n}`,
                },
              });
              document.dispatchEvent(i);
            }),
              t &&
                !c &&
                (setTimeout(() => {
                  if (_ !== `Add to Cart` && _ !== `Buy Now`) {
                    let e = new CustomEvent(`product__active-variant__changed`, {
                      detail: {
                        ...s?.node,
                        productId: `gid://shopify/Product/${n}`,
                        isCompleteVariant: t,
                      },
                    });
                    document.dispatchEvent(e);
                  }
                }, 100),
                (I.current = !1)));
          }, 100);
        }
        if (a && y && !M && !F.current) {
          let t = JSON.parse(a).variantId.split(`gid://shopify/ProductVariant/`)[1];
          ((s = X(x, `variants.edges`, []).find(
            ({ node: e }) => e.id === `gid://shopify/ProductVariant/${t}`
          )),
            (c = JSON.parse(a).isPartial),
            (o = JSON.parse(a).selectedOptions),
            (X(x, `options`, []) || []).map((e) => e.name));
          let r = k().filter((e) => !o[e]);
          if (r.length > 0) {
            let t = X(x, `options`, []) || [],
              n = k(),
              i = ((r = {}) => {
                let i = { ...r };
                for (let r of t) {
                  if (!n.includes(r.name)) continue;
                  let t = (r.values || []).find((t) => {
                    let n = { ...i, [r.name]: t };
                    return e.some(({ node: e }) =>
                      e?.availableForSale
                        ? Object.entries(n).every(([t, n]) =>
                            e.selectedOptions?.some((e) => e.name === t && e.value === n)
                          )
                        : !1
                    );
                  });
                  if (!t) return null;
                  i[r.name] = t;
                }
                return i;
              })({}),
              a = i ? Object.entries(i).map(([e, t]) => ({ name: e, value: t })) : [];
            (s?.node?.selectedOptions || a || []).forEach((e) => {
              r.includes(e.name) && (o[e.name] = e.value);
            });
          }
          (E(o), (N.current = !0));
          let l = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([e, t]) => {
                let r = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: t,
                    allSelectedOptions: o,
                    isCompleteVariant: l,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(r);
              }),
              !M && g?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: l,
                  isPurchaseAction: !1,
                  autoSelectFirst: b,
                  senderPriority: g?.variantTitles?.[0] || ``,
                  instanceId: P.current,
                },
              });
              i.dispatchEvent(e);
            }
            l &&
              !c &&
              (setTimeout(() => {
                if (_ !== `Add to Cart` && _ !== `Buy Now`) {
                  let e = new CustomEvent(`product__active-variant__changed`, {
                    detail: {
                      ...s?.node,
                      productId: `gid://shopify/Product/${n}`,
                      isCompleteVariant: l,
                    },
                  });
                  document.dispatchEvent(e);
                }
              }, 100),
              (I.current = !1));
          }, 100);
        }
        if (!s) {
          let t = X(x, `options`, []) || [],
            r = k(),
            a = ((n = {}) => {
              let i = { ...n };
              for (let n of t) {
                if (!r.includes(n.name)) continue;
                let t = (n.values || []).find((t) => {
                  let r = { ...i, [n.name]: t };
                  return e.some(({ node: e }) =>
                    e?.availableForSale
                      ? Object.entries(r).every(([t, n]) =>
                          e.selectedOptions?.some((e) => e.name === t && e.value === n)
                        )
                      : !1
                  );
                });
                if (!t) return null;
                i[n.name] = t;
              }
              return i;
            })({});
          (a && (o = a), E(o), (N.current = !0));
          let s = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([e, t]) => {
                let r = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: e,
                    value: t,
                    allSelectedOptions: o,
                    isCompleteVariant: s,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(r);
              }),
              !M && g?.variantGroups !== `all`)
            ) {
              let e = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: s,
                  isPurchaseAction: !1,
                  autoSelectFirst: b,
                  senderPriority: k()[0] || ``,
                  instanceId: P.current,
                },
              });
              i.dispatchEvent(e);
            }
            if (s && !c) {
              let t = e.find(({ node: e }) =>
                Object.entries(o).every(([t, n]) =>
                  e.selectedOptions?.some((e) => e.name === t && e.value === n)
                )
              );
              if ((y && t?.node?.id && J(t.node.id), _ !== `Add to Cart` && _ !== `Buy Now`)) {
                let e = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...t?.node,
                    productId: `gid://shopify/Product/${n}`,
                    isCompleteVariant: s,
                  },
                });
                document.dispatchEvent(e);
              }
              I.current = !1;
            }
          }, 100);
        }
        if (t && !s) {
          (t.node.selectedOptions.forEach((e) => {
            (g?.variantGroups === `all` || g?.variantTitles?.includes(e.name)) &&
              (o[e.name] = e.value);
          }),
            E(o),
            (N.current = !0));
          let e = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => o[e]);
          setTimeout(() => {
            if (
              (Object.entries(o).forEach(([t, r]) => {
                let i = new CustomEvent(`variant_option_selected`, {
                  detail: {
                    optionName: t,
                    value: r,
                    allSelectedOptions: o,
                    isCompleteVariant: e,
                    isPurchaseAction: !1,
                    productId: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(i);
              }),
              g?.variantGroups !== `all`)
            ) {
              let t = new CustomEvent(`__variant_option_selected`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  optionName: Object.keys(o)[0],
                  value: Object.values(o)[0],
                  allSelectedOptions: o,
                  allOptionsSelected: e,
                  isPurchaseAction: !1,
                  autoSelectFirst: b,
                  senderPriority: k()[0] || ``,
                  instanceId: P.current,
                },
              });
              i.dispatchEvent(t);
            }
            if (e && !c) {
              if ((y && J(t.node.id), _ !== `Add to Cart` && _ !== `Buy Now`)) {
                let r = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...t.node,
                    productId: `gid://shopify/Product/${n}`,
                    isCompleteVariant: e,
                  },
                });
                document.dispatchEvent(r);
              }
              I.current = !1;
            }
          }, 100);
        }
      }
    }, [x, b, n, g?.variantGroups, (g?.variantTitles || []).join(`|`), y, M]));
  let Se = t({});
  (r(() => {
    let e = (e) => {
      let { currency: t } = e.detail;
      if ((B(t), (Se.current = { ...T }), i.shopXtools && Array.isArray(i.shopXtools.products))) {
        let e = i.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
        if (e) {
          let t = e.node;
          S(t);
        }
      }
    };
    return (
      i.addEventListener(`currency_changed`, e),
      () => {
        i.removeEventListener(`currency_changed`, e);
      }
    );
  }, [n, T]),
    r(() => {
      if (!x) return;
      let e = Se.current;
      if (!e || Object.keys(e).length === 0) return;
      let t = {},
        r = X(x, `options`, []);
      for (let n of r) {
        let { name: r, values: i } = n,
          a = e[r];
        a && i.includes(a) && (t[r] = a);
      }
      if ((E(t), Object.keys(t).length > 0)) {
        let e = on(x, t),
          r = X(x, `options`, [])
            .map((e) => e.name)
            .every((e) => t[e]);
        (Object.entries(t).forEach(([e, n]) => {
          let i = new CustomEvent(`variant_option_selected`, {
            detail: {
              optionName: e,
              value: n,
              allSelectedOptions: t,
              isCompleteVariant: r,
              isPurchaseAction: !1,
            },
          });
          document.dispatchEvent(i);
        }),
          e &&
            r &&
            setTimeout(() => {
              if (_ !== `Add to Cart` && _ !== `Buy Now`) {
                let t = new CustomEvent(`product__active-variant__changed`, {
                  detail: { ...e, productId: `gid://shopify/Product/${n}`, isCompleteVariant: r },
                });
                document.dispatchEvent(t);
              }
              let i = new CustomEvent(`variant__visual__sync`, {
                detail: {
                  productId: `gid://shopify/Product/${n}`,
                  selectedOptions: t,
                  variantId: e?.id,
                },
              });
              document.dispatchEvent(i);
            }, 50));
      }
    }, [x, n]));
  let Q = on(x, T),
    [Ce, Te] = o(``),
    Ee = (e) => {
      if (!e) return new Map();
      let t = new Map(),
        n = [],
        r = /\[Image (\d+) • (\d+)\]/g,
        i;
      for (; (i = r.exec(e)) !== null;)
        n.push({ imageNumber: i[1], position: i.index, variantId: i[2], fullMatch: i[0] });
      for (let r = 0; r < n.length; r++) {
        let i = n[r],
          a = n[r + 1];
        t.set(i.variantId, i.imageNumber);
        let o = i.position + i.fullMatch.length,
          s = a ? a.position : e.length,
          c = e.substring(o, s),
          l = /\[(\d+)\]/g,
          u;
        for (; (u = l.exec(c)) !== null;) t.set(u[1], i.imageNumber);
      }
      return t;
    },
    [De, Oe] = o(!1),
    $ = u(
      (t, r) => {
        let a = { ...T, [t]: r };
        E(a);
        let o = X(x, `options`, [])
          .map((e) => e.name)
          .every((e) => a[e]);
        if (g?.variantGroups !== `all` && !un(_)) {
          let e = new CustomEvent(`__variant_option_selected`, {
            detail: {
              productId: `gid://shopify/Product/${n}`,
              optionName: t,
              value: r,
              allSelectedOptions: a,
              allOptionsSelected: o,
              isPurchaseAction: !1,
              autoSelectFirst: b,
              senderPriority: k()[0] || ``,
              instanceId: P.current,
            },
          });
          i.dispatchEvent(e);
        }
        let s = new CustomEvent(`variant_option_selected`, {
          detail: {
            optionName: t,
            value: r,
            allSelectedOptions: a,
            productId: `gid://shopify/Product/${n}`,
            isPurchaseAction: _ === `Add to Cart` || _ === `Buy Now`,
          },
        });
        if ((document.dispatchEvent(s), un(_))) {
          let o = on(x, a);
          if (o && i.shopXtools) {
            let a = () => {
              let t = o?.id || (n ? `gid://shopify/ProductVariant/${n}` : null);
              if (!t) throw Error(`No valid product variant selected`);
              let r = { merchandiseId: t, quantity: 1 };
              try {
                let t = `fc_cart_attributes_${e.shopifyProductID}`,
                  n = sessionStorage.getItem(t);
                if (!n) return r;
                let i = JSON.parse(n),
                  a = [];
                (Object.entries(i).forEach(([e, t]) => {
                  t && String(t).trim() && a.push({ key: e, value: String(t).trim() });
                }),
                  a.length > 0 && (r.attributes = a));
              } catch (e) {
                console.error(`Error adding attributes to cart item:`, e);
              }
              return r;
            };
            ((async () => {
              try {
                let t = `fc_cart_attributes_${e.shopifyProductID}`,
                  n = sessionStorage.getItem(t),
                  r = n ? JSON.parse(n) : {},
                  s = `fc_input_config_${e.shopifyProductID}`,
                  c = sessionStorage.getItem(s),
                  l = c ? JSON.parse(c) : {},
                  u = Object.keys(l),
                  d = !1;
                for (let t of u) {
                  let n = l[t],
                    a = r[t] || ``;
                  if (n.required && (!a || a.trim() === ``)) {
                    (i.dispatchEvent(
                      new CustomEvent(`inputValidationFailed`, {
                        detail: { productId: e.shopifyProductID, key: t },
                      })
                    ),
                      (d = !0));
                    continue;
                  }
                  n.validateEmail &&
                    a &&
                    a.trim() !== `` &&
                    (((e) => {
                      if (!e || !e.includes(`@`) || !e.includes(`.`) || e.length > 254) return !1;
                      let [t, n] = e.split(`@`);
                      return t.length > 64
                        ? !1
                        : /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
                            e
                          );
                    })(a) ||
                      (d = !0));
                }
                if (d) {
                  Oe(!0);
                  return;
                }
                let f = [a()],
                  p = localStorage.getItem(`selectedCountryCode`) || void 0;
                if (_ === `Add to Cart`) {
                  let e = localStorage.getItem(`shopX_cart_id`);
                  if (e) {
                    let t = await i.shopXtools?.handleCartMutation?.(we, { cartId: e, lines: f });
                    if (t?.cartLinesAdd?.cart) {
                      (localStorage.setItem(`shopXtools.cart`, JSON.stringify(t.cartLinesAdd.cart)),
                        i.shopXtools && (i.shopXtools.cart = t.cartLinesAdd.cart),
                        i.dispatchEvent(new Event(`shopXtools-cart-update`)));
                      let e = o?.price?.currencyCode || `USD`,
                        n = parseFloat((parseFloat(o?.price?.amount || `0`) * 1).toFixed(2)),
                        r = o?.id,
                        a = o?.selectedOptions?.map((e) => e.value).join(` / `) || ``,
                        s = parseFloat(o?.price?.amount || `0`),
                        c = x;
                      (typeof i.fcTrackGAEvent == `function` &&
                        i.fcTrackGAEvent(`add_to_cart`, {
                          currency: e,
                          value: n,
                          items: [{ item_id: r, item_name: a, price: s, quantity: 1 }],
                        }),
                        Ae({ variant: o, product: c, quantity: 1, currency: e }),
                        _ === `Add to Cart` &&
                          v &&
                          (i.shopXtools?.dispatchEvent?.(`checkout__changed`, {
                            __triggerCartModal: v,
                          }),
                          document.dispatchEvent(
                            new CustomEvent(`checkout__changed`, {
                              detail: { __triggerCartModal: v },
                            })
                          )),
                        ce(),
                        le());
                    }
                  } else {
                    let e = await i.shopXtools?.handleCartMutation?.(xe, {
                      lines: f,
                      countryCode: p,
                    });
                    e?.cartCreate?.cart &&
                      (localStorage.setItem(`shopX_cart_id`, e.cartCreate.cart.id),
                      localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartCreate.cart)),
                      i.shopXtools && (i.shopXtools.cart = e.cartCreate.cart),
                      i.dispatchEvent(new Event(`shopXtools-cart-update`)),
                      v &&
                        (i.shopXtools?.dispatchEvent?.(`checkout__changed`, {
                          __triggerCartModal: v,
                        }),
                        document.dispatchEvent(
                          new CustomEvent(`checkout__changed`, {
                            detail: { __triggerCartModal: v },
                          })
                        )));
                  }
                } else {
                  let e = await i.shopXtools?.handleCartMutation?.(xe, {
                    lines: f,
                    countryCode: p,
                  });
                  if (e?.cartCreate?.cart?.checkoutUrl) {
                    let t = e.cartCreate.cart.checkoutUrl,
                      n = o?.price?.currencyCode || `USD`,
                      r = parseFloat((parseFloat(o?.price?.amount || `0`) * 1).toFixed(2)),
                      a = o?.id,
                      s = o?.selectedOptions?.map((e) => e.value).join(` / `) || ``,
                      c = parseFloat(o?.price?.amount || `0`);
                    (typeof i.fcTrackGAEvent == `function` &&
                      i.fcTrackGAEvent(`begin_checkout`, {
                        currency: n,
                        value: r,
                        items: [{ item_id: a, item_name: s, price: c, quantity: 1 }],
                      }),
                      be({ variant: o, product: x, quantity: 1, currency: n, useBeacon: !0 }),
                      (t = ve(t)),
                      (t = ge(t)),
                      i.location.assign(t));
                  }
                }
              } catch (e) {
                (console.error(`Error handling purchase:`, e),
                  i.dispatchEvent(
                    new CustomEvent(`errorChanged`, {
                      detail: e.message || `Error processing your request`,
                    })
                  ));
              }
            })(),
              i.dispatchEvent(
                new CustomEvent(`product__purchase__completed`, {
                  detail: { shopifyProductID: n, activeVariant: o, optionName: t, value: r },
                })
              ));
          }
        }
        let c = on(x, a),
          l = new CustomEvent(`variant__visual__sync`, {
            detail: {
              productId: `gid://shopify/Product/${n}`,
              selectedOptions: a,
              variantId: c?.id,
            },
          });
        (document.dispatchEvent(l),
          c &&
            (y && o && J(c.id),
            de(a, c.id, !o),
            o &&
              !un(_) &&
              setTimeout(() => {
                let e = new CustomEvent(`product__active-variant__changed`, {
                  detail: {
                    ...c,
                    productId: `gid://shopify/Product/${n}`,
                    isCompleteVariant: !0,
                    isPurchaseAction: !1,
                  },
                });
                document.dispatchEvent(e);
              }, 300)));
      },
      [T, x, n, b, N.current, g?.variantGroups, y, J, de]
    );
  (r(() => {
    let e = (e) => {
      if (
        e.detail.shopifyProductID === n &&
        (_ === `Add to Cart` || (_ === `Buy Now` && g?.variantTitles?.length))
      ) {
        let t = e.detail.activeVariant,
          r = e.detail.optionName,
          a = e.detail.value,
          o = { [r]: a },
          s = (t?.selectedOptions || []).filter((e) => !(e.name in o)),
          c = {};
        for (let e of s) c[e.name] = e.value;
        (E(c),
          setTimeout(() => {
            t &&
              document.dispatchEvent(
                new CustomEvent(`last_selected_variant`, {
                  detail: { activeVariant: t, shopifyProductID: n },
                })
              );
            let e = new CustomEvent(`__variant_option_selected`, {
              detail: {
                productId: `gid://shopify/Product/${n}`,
                value: null,
                allSelectedOptions: c,
                allOptionsSelected: !1,
                isPurchaseAction: !0,
                autoSelectFirst: !1,
              },
            });
            i.dispatchEvent(e);
          }, 200));
      }
    };
    return (
      i.addEventListener(`product__purchase__completed`, e),
      () => i.removeEventListener(`product__purchase__completed`, e)
    );
  }, [x, _, g?.variantTitles, n, T]),
    r(() => {
      if (M) return;
      let e = (e) => {
        e.detail.productId === `gid://shopify/Product/${n}` &&
          g?.variantGroups === `all` &&
          e.detail &&
          typeof e.detail.selectedOptions == `object` &&
          e.detail.selectedOptions !== null &&
          E(e.detail.selectedOptions);
      };
      return (
        document.addEventListener(`variant__visual__sync`, e),
        () => {
          document.removeEventListener(`variant__visual__sync`, e);
        }
      );
    }, [n, M]));
  let ke = t(null),
    je = t(!1);
  (r(() => {
    let e = (e) => {
      n === e.detail.shopifyProductID && ((ke.current = e.detail.activeVariant), (je.current = !0));
    };
    return (
      document.addEventListener(`last_selected_variant`, e),
      () => {
        document.removeEventListener(`last_selected_variant`, e);
      }
    );
  }, [n]),
    r(() => {
      let t;
      if (((t = je.current && ke.current ? ke.current : Q), t)) {
        let r = t?.id.split(`/`).pop();
        if (e.variantImageIds) {
          let t = Ee(e.variantImageIds).get(r);
          if (t) {
            let e = setTimeout(() => {
              if (a.imageTrigger !== `None`) {
                let e = new CustomEvent(`variant__image__match`, {
                  detail: {
                    imageNumber: parseInt(t),
                    shopifyProductID: `gid://shopify/Product/${n}`,
                  },
                });
                document.dispatchEvent(e);
              }
              if (a.imageTrigger === `Scroll Sections`) {
                if (b && !z.current) {
                  z.current = !0;
                  return;
                }
                let e = `#image-${t}`;
                if (i.location.hash !== e) {
                  history.replaceState(null, ``, e);
                  let n = document.getElementById(`image-${t}`);
                  if (n) {
                    let e = a.offsetY || 0,
                      t = n.getBoundingClientRect().top + i.pageYOffset - e;
                    i.scrollTo({ top: t, behavior: `smooth` });
                  }
                }
              }
            }, 0);
            return ((je.current = !1), (ke.current = null), () => clearTimeout(e));
          }
        }
      }
    }, [Q, a.imageTrigger, a.offsetY, e.variantImageIds, T]),
    X(x, `variants.edges`),
    r(() => {
      let e = (X(x, `variants.edges`) || []).map(({ node: e }) => ({
        id: e.id,
        availableForSale: e.availableForSale,
        ...e.selectedOptions.reduce((e, t) => ({ ...e, [t.name]: t.value }), {}),
      }));
      O(e);
    }, [x]),
    r(() => {
      let e = (e) => {
        if (I.current) return;
        let t = `gid://shopify/Product/${n}`,
          r = e.detail.allSelectedOptions;
        if (
          e.detail.productId === t &&
          g?.variantGroups !== `all` &&
          e.detail.instanceId !== P.current &&
          !e.detail.twoWayGallery
        ) {
          let t = e.detail.isPurchaseAction;
          if ((e.detail.senderPriority || 0) === (k()[0] || ``)) {
            let e = {};
            (k().forEach((t) => {
              r[t] && (e[t] = r[t]);
            }),
              E(e));
            return;
          } else {
            let e = { ...T, ...r };
            E(e);
            let i = on(x, e);
            if (
              X(x, `options`, [])
                .map((e) => e.name)
                .every((t) => e[t]) &&
              i
            ) {
              y && !t && J(i.id);
              let e = new CustomEvent(`product__active-variant__changed`, {
                detail: {
                  ...i,
                  productId: `gid://shopify/Product/${n}`,
                  isCompleteVariant: !0,
                  isPurchaseAction: !1,
                },
              });
              document.dispatchEvent(e);
            }
          }
        } else if (e.detail.productId === t && e.detail.twoWayGallery) {
          let e = { ...T, ...r };
          E(e);
          let t = on(x, e);
          if (
            X(x, `options`, [])
              .map((e) => e.name)
              .every((t) => e[t]) &&
            t
          ) {
            y && J(t.id);
            let e = new CustomEvent(`product__active-variant__changed`, {
              detail: {
                ...t,
                productId: `gid://shopify/Product/${n}`,
                isCompleteVariant: !0,
                isPurchaseAction: !1,
              },
            });
            document.dispatchEvent(e);
          }
        }
      };
      return (
        i.addEventListener(`__variant_option_selected`, e),
        () => {
          i.removeEventListener(`__variant_option_selected`, e);
        }
      );
    }, [n, D, b, _, x, T, g?.variantTitles, y]));
  let Me = (e, t, n, r, i, a, o, s, c, l, u) =>
      d(dn, {
        opt: e,
        filteredValues: t,
        isLast: n,
        valid: r,
        invalidMsg: i,
        props: a,
        dispatchOptionSelectedEvent: o,
        selectedOptions: s,
        combinations: c,
        index: l,
        totalCount: u,
      }),
    Ne = (t, n, r, i, a) =>
      m(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            d(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  X(e, `containerConfigs.gap2`) === void 0
                    ? X(e, `titleConfigs.gap`)
                    : X(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: m(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    d(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...X(e, `titleConfigs.font`),
                        color: X(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: X(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: T[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            m(`div`, {
              style: {
                display: e.buttonConfigs.layout === `grid` ? `grid` : `flex`,
                flexDirection:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `horizontal`
                      ? `row`
                      : `column`,
                flexWrap:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `horizontal`
                      ? `wrap`
                      : `nowrap`,
                gridTemplateColumns:
                  e.buttonConfigs.layout === `grid`
                    ? e.buttonConfigs.columns === `auto`
                      ? (() => {
                          let t = e.buttonConfigs.maxColumns || 4,
                            n = e.buttonConfigs.gap || 8,
                            r = e.buttonConfigs.gridWidth || 100;
                          return t <= 1
                            ? `1fr`
                            : `repeat(auto-fit, minmax(max(${r}px, calc((100% - ${t - 1} * ${n}px) / ${t})), 1fr))`;
                        })()
                      : n.length <= 1
                        ? `1fr`
                        : `repeat(${e.buttonConfigs.columnCount || 3}, 1fr)`
                    : void 0,
                gap:
                  (e.buttonConfigs.layout,
                  `${e.buttonConfigs.gapY || 8}px ${e.buttonConfigs.gap || 8}px`),
                width: `100%`,
                maxWidth: void 0,
                alignItems:
                  e.buttonConfigs.layout === `grid`
                    ? void 0
                    : e.buttonConfigs.direction === `vertical` && e.buttonConfigs.width
                      ? `stretch`
                      : `flex-start`,
              },
              children: [
                n.map((r, i) => {
                  let a = T[t.name] === r,
                    o;
                  if (g?.variantGroups === `all`) {
                    let e = Array.from(Object.entries({ ...T, [t.name]: r }));
                    o = D.find((t) => e.every(([e, n]) => t[e] === n) && t.availableForSale);
                  } else
                    o = Array.from(
                      new Set(
                        D.filter((e) =>
                          e.availableForSale
                            ? Object.entries(T)
                                .filter(([e]) => e !== t.name)
                                .every(([t, n]) => e[t] === n)
                            : !1
                        )
                          .map((e) => e[t.name])
                          .filter(Boolean)
                      )
                    ).includes(r);
                  let s = o || (h && !o),
                    c = i === n.length - 1,
                    l = Number(e.buttonConfigs.gap) === 0,
                    u = e.buttonConfigs.direction === `horizontal`,
                    f = X(e, `buttonConfigs.unselected.border`),
                    p = X(e, `buttonConfigs.selected.border`),
                    _ = X(e, `buttonConfigs.outOfStock.border`),
                    v = X(e, `buttonConfigs.hovered.border`);
                  function y(e) {
                    if (!e) return;
                    let {
                      borderWidth: t,
                      borderStyle: n,
                      borderColor: r,
                      isMixed: i,
                      toggleTitles: a,
                      top: o,
                      right: s,
                      bottom: c,
                      left: l,
                    } = e;
                    return a === `Individual` || i
                      ? {
                          borderTop: `${o ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderRight: `${s ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderBottom: `${c ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                          borderLeft: `${l ?? 0}px ${n ?? `solid`} ${r ?? `#000`}`,
                        }
                      : { border: `${t?.all ?? t ?? 0}px ${n ?? `solid`} ${r ?? `#000`}` };
                  }
                  let b = {};
                  return (
                    l && !c && (u ? (b.marginRight = `-1px`) : (b.marginBottom = `-1px`)),
                    d(
                      `div`,
                      {
                        style: {
                          position: `relative`,
                          width: e.buttonConfigs.layout === `grid` ? `100%` : `auto`,
                        },
                        className: `variant-button-container`,
                        children: m(`button`, {
                          role: `radio`,
                          "aria-checked": a,
                          "aria-label": `${t.name} ${r}`,
                          tabIndex: s ? 0 : -1,
                          onKeyDown: (n) => {
                            if (n.key === `Enter` || n.key === ` `)
                              (n.preventDefault(), s && $(t.name, r));
                            else if (n.key === `Home`) {
                              n.preventDefault();
                              let e = n.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelector(`[role="radio"]:not([aria-disabled="true"])`);
                              e && e.focus();
                            } else if (n.key === `End`) {
                              n.preventDefault();
                              let e = n.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelectorAll(`[role="radio"]:not([aria-disabled="true"])`);
                              e?.length && e[e.length - 1].focus();
                            } else if (
                              n.key === `ArrowRight` ||
                              (n.key === `ArrowDown` && e.buttonConfigs.direction === `vertical`)
                            ) {
                              n.preventDefault();
                              let e = n.target.closest(`[role="radiogroup"]`),
                                t = Array.from(
                                  e?.querySelectorAll(
                                    `[role="radio"]:not([aria-disabled="true"])`
                                  ) || []
                                ),
                                r = (t.indexOf(n.target) + 1) % t.length;
                              t[r] && t[r].focus();
                            } else if (
                              n.key === `ArrowLeft` ||
                              (n.key === `ArrowUp` && e.buttonConfigs.direction === `vertical`)
                            ) {
                              n.preventDefault();
                              let e = n.target.closest(`[role="radiogroup"]`),
                                t = Array.from(
                                  e?.querySelectorAll(
                                    `[role="radio"]:not([aria-disabled="true"])`
                                  ) || []
                                ),
                                r = t.indexOf(n.target),
                                i = r === 0 ? t.length - 1 : r - 1;
                              t[i] && t[i].focus();
                            }
                          },
                          style: {
                            padding: X(e, `buttonConfigs.padding`),
                            width:
                              e.buttonConfigs.layout === `grid` ||
                              (e.buttonConfigs.direction === `vertical` && e.buttonConfigs.width)
                                ? `100%`
                                : `auto`,
                            height:
                              X(e, `buttonConfigs.height`) === `Fixed`
                                ? `${X(e, `buttonConfigs.fixedHeight`)}px`
                                : `Fit`,
                            ...b,
                            borderRadius: X(e, `buttonConfigs.radius`),
                            backgroundColor:
                              a && !o
                                ? X(e, `buttonConfigs.selected.background`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.background`)
                                    : X(e, `buttonConfigs.unselected.background`)
                                  : X(e, `buttonConfigs.outOfStock.background`),
                            ...y(a && !o ? p : o ? (a ? p : f) : _),
                            color:
                              a && !o
                                ? X(e, `buttonConfigs.selected.color`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.color`)
                                    : X(e, `buttonConfigs.unselected.color`)
                                  : X(e, `buttonConfigs.outOfStock.color`),
                            fontFamily:
                              a && !o
                                ? X(e, `buttonConfigs.selected.font.fontFamily`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.font.fontFamily`)
                                    : X(e, `buttonConfigs.unselected.font.fontFamily`)
                                  : X(e, `buttonConfigs.outOfStock.font.fontFamily`),
                            fontSize:
                              a && !o
                                ? X(e, `buttonConfigs.selected.font.fontSize`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.font.fontSize`)
                                    : X(e, `buttonConfigs.unselected.font.fontSize`)
                                  : X(e, `buttonConfigs.outOfStock.font.fontSize`),
                            fontWeight:
                              a && !o
                                ? X(e, `buttonConfigs.selected.font.fontWeight`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.font.fontWeight`)
                                    : X(e, `buttonConfigs.unselected.font.fontWeight`)
                                  : X(e, `buttonConfigs.outOfStock.font.fontWeight`),
                            letterSpacing:
                              a && !o
                                ? X(e, `buttonConfigs.selected.font.letterSpacing`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.font.letterSpacing`)
                                    : X(e, `buttonConfigs.unselected.font.letterSpacing`)
                                  : X(e, `buttonConfigs.outOfStock.font.letterSpacing`),
                            textTransform:
                              a && !o
                                ? X(e, `buttonConfigs.selected.textTransform`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.textTransform`)
                                    : X(e, `buttonConfigs.unselected.textTransform`)
                                  : X(e, `buttonConfigs.outOfStock.textTransform`),
                            textAlign:
                              a && !o
                                ? X(e, `buttonConfigs.selected.font.textAlign`)
                                : o
                                  ? a
                                    ? X(e, `buttonConfigs.selected.font.textAlign`)
                                    : X(e, `buttonConfigs.unselected.font.textAlign`)
                                  : X(e, `buttonConfigs.outOfStock.font.textAlign`),
                            cursor: s ? `pointer` : `not-allowed`,
                            overflow: `hidden`,
                            position: `relative`,
                          },
                          onClick: s ? () => $(t.name, r) : void 0,
                          onMouseEnter: (t) => {
                            if (s) {
                              let n = t.currentTarget;
                              n.style.backgroundColor = X(e, `buttonConfigs.hovered.background`);
                              let r = y(v);
                              (r.border === void 0
                                ? ((n.style.borderTop = r.borderTop),
                                  (n.style.borderRight = r.borderRight),
                                  (n.style.borderBottom = r.borderBottom),
                                  (n.style.borderLeft = r.borderLeft))
                                : (n.style.border = r.border),
                                (n.style.color = X(e, `buttonConfigs.hovered.color`)));
                            }
                          },
                          onMouseLeave: (t) => {
                            let n = t.currentTarget;
                            if (
                              ((n.style.border = ``),
                              (n.style.borderTop = ``),
                              (n.style.borderRight = ``),
                              (n.style.borderBottom = ``),
                              (n.style.borderLeft = ``),
                              a)
                            ) {
                              n.style.backgroundColor = X(e, `buttonConfigs.selected.background`);
                              let t = y(p);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = X(e, `buttonConfigs.selected.color`)));
                            } else if (o) {
                              n.style.backgroundColor = X(e, `buttonConfigs.unselected.background`);
                              let t = y(f);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = X(e, `buttonConfigs.unselected.color`)));
                            } else {
                              n.style.backgroundColor = X(e, `buttonConfigs.outOfStock.background`);
                              let t = y(_);
                              (t && t.border !== void 0
                                ? (n.style.border = t.border ?? ``)
                                : t &&
                                  ((n.style.borderTop = t.borderTop ?? ``),
                                  (n.style.borderRight = t.borderRight ?? ``),
                                  (n.style.borderBottom = t.borderBottom ?? ``),
                                  (n.style.borderLeft = t.borderLeft ?? ``)),
                                (n.style.color = X(e, `buttonConfigs.outOfStock.color`)));
                            }
                          },
                          children: [
                            m(`span`, {
                              style: { position: `relative`, display: `inline-block` },
                              children: [
                                r,
                                a &&
                                  !o &&
                                  X(e, `buttonConfigs.outOfStock.strike.line`) &&
                                  X(e, `buttonConfigs.outOfStock.strike.size`) === `text` &&
                                  d(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `50%`,
                                      left: `0%`,
                                      width: `100%`,
                                      height: `1px`,
                                      backgroundColor: X(
                                        e,
                                        `buttonConfigs.outOfStock.strike.color`
                                      ),
                                      transform: `translateY(-50%)`,
                                      transformOrigin: `center`,
                                      pointerEvents: s ? `auto` : `none`,
                                    },
                                  }),
                                !a &&
                                  !o &&
                                  X(e, `buttonConfigs.outOfStock.strike.line`) &&
                                  X(e, `buttonConfigs.outOfStock.strike.size`) === `text` &&
                                  d(`span`, {
                                    style: {
                                      position: `absolute`,
                                      top: `50%`,
                                      left: `0%`,
                                      width: `100%`,
                                      height: `1px`,
                                      backgroundColor: X(
                                        e,
                                        `buttonConfigs.outOfStock.strike.color`
                                      ),
                                      transform: `translateY(-50%)`,
                                      transformOrigin: `center`,
                                      pointerEvents: `none`,
                                    },
                                  }),
                              ],
                            }),
                            a &&
                              !o &&
                              X(e, `buttonConfigs.outOfStock.strike.line`) &&
                              X(e, `buttonConfigs.outOfStock.strike.size`) === `container` &&
                              d(`svg`, {
                                style: {
                                  position: `absolute`,
                                  top: 0,
                                  left: 0,
                                  width: `100%`,
                                  height: `100%`,
                                  pointerEvents: s ? `auto` : `none`,
                                },
                                preserveAspectRatio: `none`,
                                viewBox: `0 0 100 100`,
                                children: d(`line`, {
                                  x1:
                                    (X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                      `horizontal` ||
                                      X(e, `buttonConfigs.outOfStock.strike.direction`),
                                    `0`),
                                  y1:
                                    X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `100`
                                        : `0`,
                                  x2: (X(e, `buttonConfigs.outOfStock.strike.direction`), `100`),
                                  y2:
                                    X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `0`
                                        : `100`,
                                  stroke: X(e, `buttonConfigs.outOfStock.strike.color`),
                                  strokeWidth: `1`,
                                  vectorEffect: `non-scaling-stroke`,
                                }),
                              }),
                            !a &&
                              !o &&
                              X(e, `buttonConfigs.outOfStock.strike.line`) &&
                              X(e, `buttonConfigs.outOfStock.strike.size`) === `container` &&
                              d(`svg`, {
                                style: {
                                  position: `absolute`,
                                  top: 0,
                                  left: 0,
                                  width: `100%`,
                                  height: `100%`,
                                  pointerEvents: `none`,
                                },
                                preserveAspectRatio: `none`,
                                viewBox: `0 0 100 100`,
                                children: d(`line`, {
                                  x1:
                                    (X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                      `horizontal` ||
                                      X(e, `buttonConfigs.outOfStock.strike.direction`),
                                    `0`),
                                  y1:
                                    X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `100`
                                        : `0`,
                                  x2: (X(e, `buttonConfigs.outOfStock.strike.direction`), `100`),
                                  y2:
                                    X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                    `horizontal`
                                      ? `50`
                                      : X(e, `buttonConfigs.outOfStock.strike.direction`) ===
                                          `diagonal-up`
                                        ? `0`
                                        : `100`,
                                  stroke: X(e, `buttonConfigs.outOfStock.strike.color`),
                                  strokeWidth: `1`,
                                  vectorEffect: `non-scaling-stroke`,
                                }),
                              }),
                          ],
                        }),
                      },
                      r
                    )
                  );
                }),
                !i &&
                  d(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      ),
    Pe = (t, n, r, i, a) => {
      if (
        !q.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) ||
        !e.swatches?.colorEnabled
      )
        return l === `Dropdown`
          ? Me(
              t,
              n,
              r,
              i,
              a,
              e,
              $,
              T,
              D,
              X(x, `options`)?.findIndex((e) => e.name === t.name) || 0,
              X(x, `options`)?.length || 0
            )
          : Ne(t, n, r, i, a);
      let { swatches: o } = e;
      return m(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            d(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  X(e, `containerConfigs.gap2`) === void 0
                    ? X(e, `titleConfigs.gap`)
                    : X(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: m(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    d(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...X(e, `titleConfigs.font`),
                        color: X(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: X(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: T[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            m(`div`, {
              style: {
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                gap: o.gap,
                width: `100%`,
              },
              children: [
                n.map((n, r) => {
                  let i = T[t.name] === n,
                    a;
                  if (g?.variantGroups === `all`) {
                    let e = Array.from(Object.entries({ ...T, [t.name]: n }));
                    a = D.find((t) => e.every(([e, n]) => t[e] === n) && t.availableForSale);
                  } else
                    a = Array.from(
                      new Set(
                        D.filter(
                          (e) =>
                            e.availableForSale &&
                            Object.entries(T)
                              .filter(([e]) => e !== t.name)
                              .every(([t, n]) => e[t] === n)
                        )
                          .map((e) => e[t.name])
                          .filter(Boolean)
                      )
                    ).includes(n);
                  let s = a || (h && !a),
                    c = n.toLowerCase(),
                    l = U.get(c) || `#CCCCCC`,
                    u = () =>
                      i && !a
                        ? o.selected.border
                        : a
                          ? i
                            ? o.selected.border
                            : o.unselected.border
                          : o.outOfStock.border,
                    f = () =>
                      i && !a
                        ? o.selected.background
                        : a
                          ? i
                            ? o.selected.background
                            : o.unselected.background
                          : o.outOfStock.background,
                    p = u(),
                    _ = f();
                  return m(
                    `div`,
                    {
                      className: `variant-swatch-container`,
                      style: { position: `relative` },
                      children: [
                        d(`button`, {
                          role: `radio`,
                          "aria-checked": i,
                          "aria-label": `${t.name} ${n}${a ? `` : ` (Out of Stock)`}`,
                          title: n,
                          disabled: !a && !h,
                          onClick: () => {
                            (a || h) && $(t.name, n);
                          },
                          tabIndex: a || h ? 0 : -1,
                          onKeyDown: (e) => {
                            if (e.key === `Enter` || e.key === ` `)
                              (e.preventDefault(), s && $(t.name, n));
                            else if (e.key === `Home`) {
                              e.preventDefault();
                              let t = e.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelector(`[role="radio"]:not([disabled])`);
                              t && t.focus();
                            } else if (e.key === `End`) {
                              e.preventDefault();
                              let t = e.target
                                .closest(`[role="radiogroup"]`)
                                ?.querySelectorAll(`[role="radio"]:not([disabled])`);
                              t?.length && t[t.length - 1].focus();
                            } else if (e.key === `ArrowRight` || e.key === `ArrowDown`) {
                              e.preventDefault();
                              let t = e.target.closest(`[role="radiogroup"]`),
                                n = Array.from(
                                  t?.querySelectorAll(`[role="radio"]:not([disabled])`) || []
                                ),
                                r = (n.indexOf(e.target) + 1) % n.length;
                              n[r] && n[r].focus();
                            } else if (e.key === `ArrowLeft` || e.key === `ArrowUp`) {
                              e.preventDefault();
                              let t = e.target.closest(`[role="radiogroup"]`),
                                n = Array.from(
                                  t?.querySelectorAll(`[role="radio"]:not([disabled])`) || []
                                ),
                                r = n.indexOf(e.target),
                                i = r === 0 ? n.length - 1 : r - 1;
                              n[i] && n[i].focus();
                            }
                          },
                          onMouseEnter: (e) => {
                            if (s) {
                              let t = e.currentTarget,
                                { borderWidth: n, borderStyle: r } = o.hovered.border;
                              ((t.style.border = `${n}px ${r} ${o.hovered.border.borderColor}`),
                                (t.style.background = o.hovered.background));
                            }
                          },
                          onMouseLeave: (e) => {
                            let t = e.currentTarget,
                              n = u(),
                              r = f();
                            ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                              (t.style.background = r));
                          },
                          style: {
                            width: o.width,
                            height: o.height,
                            borderRadius: o.radius,
                            border: `${p.borderWidth}px ${p.borderStyle} ${p.borderColor}`,
                            padding: o.padding,
                            cursor: a || h ? `pointer` : `not-allowed`,
                            background: _,
                            position: `relative`,
                          },
                          children: m(`div`, {
                            style: {
                              width: `100%`,
                              height: `100%`,
                              borderRadius: o.radius,
                              backgroundColor: l,
                              opacity: a ? 1 : o.outOfStock.opacity,
                              position: `relative`,
                              overflow: `hidden`,
                            },
                            children: [
                              i &&
                                !a &&
                                X(e, `swatches.outOfStock.strike.line`) &&
                                d(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: s ? `auto` : `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: d(`line`, {
                                    x1:
                                      (X(e, `swatches.outOfStock.strike.direction`) ===
                                        `horizontal` ||
                                        X(e, `swatches.outOfStock.strike.direction`),
                                      0),
                                    y1:
                                      X(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : X(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      X(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : X(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 0
                                          : (X(e, `swatches.outOfStock.strike.direction`), 100),
                                    stroke: X(e, `swatches.outOfStock.strike.color`),
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                              !i &&
                                !a &&
                                X(e, `swatches.outOfStock.strike.line`) &&
                                d(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: d(`line`, {
                                    x1:
                                      (X(e, `swatches.outOfStock.strike.direction`) ===
                                        `horizontal` ||
                                        X(e, `swatches.outOfStock.strike.direction`),
                                      0),
                                    y1:
                                      X(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : X(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      X(e, `swatches.outOfStock.strike.direction`) === `horizontal`
                                        ? 50
                                        : X(e, `swatches.outOfStock.strike.direction`) ===
                                            `diagonal-up`
                                          ? 0
                                          : (X(e, `swatches.outOfStock.strike.direction`), 100),
                                    stroke: X(e, `swatches.outOfStock.strike.color`),
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        d(`div`, {
                          className: `swatch-tooltip`,
                          style: {
                            position: `absolute`,
                            top: `100%`,
                            left: `50%`,
                            transform: `translateX(-50%)`,
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                            color: `#FFFFFF`,
                            padding: `4px 8px`,
                            borderRadius: `4px`,
                            fontSize: `12px`,
                            marginTop: `4px`,
                            whiteSpace: `nowrap`,
                            opacity: 0,
                            visibility: `hidden`,
                            transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                            zIndex: 10,
                          },
                          children: n,
                        }),
                      ],
                    },
                    n
                  );
                }),
                !i &&
                  d(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      );
    },
    Fe = (t, n, r, i, a) => {
      if (
        !(e.imageTitles || [`Pattern`]).some(
          (e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()
        ) ||
        !e.imageSwatches?.image
      )
        return Ne(t, n, r, i, a);
      let o = e.imageSwatches.imageStyles === `customize`,
        s = {
          gap: o ? e.imageSwatches.imageGap : (e.swatches?.gap ?? 8),
          height: o ? e.imageSwatches.imageHeight : (e.swatches?.height ?? 40),
          width: o ? e.imageSwatches.imageWidth : (e.swatches?.width ?? 40),
          radius: o ? e.imageSwatches.imageRadius : (e.swatches?.radius ?? `50%`),
          padding: o ? e.imageSwatches.imagePadding : (e.swatches?.padding ?? 2),
          unselected: o
            ? e.imageSwatches.imageUnselected
            : (e.swatches?.unselected ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                background: `#FFFFFF00`,
              }),
          hovered: o
            ? e.imageSwatches.imageHovered
            : (e.swatches?.hovered ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                background: `#FFFFFF00`,
              }),
          selected: o
            ? e.imageSwatches.imageSelected
            : (e.swatches?.selected ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                background: `#FFFFFF00`,
              }),
          outOfStock: o
            ? e.imageSwatches.imageOutOfStock
            : (e.swatches?.outOfStock ?? {
                border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                opacity: 0.5,
                background: `#FFFFFF00`,
                strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
              }),
        };
      return m(
        `div`,
        {
          role: `radiogroup`,
          "aria-label": `Select ${t.name}`,
          "aria-required": !i,
          "aria-invalid": !i,
          children: [
            d(`div`, {
              style: {
                width: `100%`,
                display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                justifyContent:
                  e.titleConfigs.font.textAlign === `center`
                    ? `center`
                    : e.titleConfigs.font.textAlign === `right`
                      ? `flex-end`
                      : `flex-start`,
                marginBottom:
                  X(e, `containerConfigs.gap2`) === void 0
                    ? X(e, `titleConfigs.gap`)
                    : X(e, `containerConfigs.gap2`),
                overflow: `visible`,
              },
              children: m(`div`, {
                style: {
                  width: `100%`,
                  display: `flex`,
                  justifyContent: `flex-start`,
                  alignItems: `center`,
                  overflow: `visible`,
                },
                children: [
                  e.titleConfigs.visible &&
                    d(`label`, {
                      id: `variant-title-${t.name}`,
                      htmlFor: `variant-${t.name}`,
                      style: {
                        ...X(e, `titleConfigs.font`),
                        color: X(e, `titleConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        margin: 0,
                        cursor: `pointer`,
                        textTransform: X(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.titleConfigs.display || `{{Option}}`).replace(
                        `{{Option}}`,
                        t.name
                      ),
                    }),
                  e.selectedConfigs.visible &&
                    T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: T[t.name],
                    }),
                  e.selectedConfigs.visible &&
                    e.selectedConfigs.emptyVisible &&
                    !T[t.name] &&
                    d(`p`, {
                      style: {
                        ...X(e, `selectedConfigs.font`),
                        color: X(e, `selectedConfigs.color`),
                        whiteSpace: `nowrap`,
                        overflow: `visible`,
                        paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                        margin: 0,
                        textTransform: X(e, `selectedConfigs.textTransform`, `None`).toLowerCase(),
                      },
                      children: (e.selectedConfigs.emptyText || `Select {{Option Value}}`).replace(
                        `{{Option Value}}`,
                        t.name
                      ),
                    }),
                ],
              }),
            }),
            m(`div`, {
              style: {
                display: `flex`,
                flexDirection: `row`,
                flexWrap: `wrap`,
                gap: s.gap,
                width: `100%`,
              },
              children: [
                n.map((e, n) => {
                  let r = T[t.name] === e,
                    i = Array.from(Object.entries({ ...T, [t.name]: e })),
                    a = D.find((e) => i.every(([t, n]) => e[t] === n) && e.availableForSale),
                    o = a || (h && !a),
                    c = K.find((t) => t.name.toLowerCase() === e.toLowerCase())?.url || ``,
                    l = () =>
                      r && !a
                        ? s.selected.border
                        : a
                          ? r
                            ? s.selected.border
                            : s.unselected.border
                          : s.outOfStock.border,
                    u = () =>
                      r && !a
                        ? s.selected.background
                        : a
                          ? r
                            ? s.selected.background
                            : s.unselected.background
                          : s.outOfStock.background,
                    f = l(),
                    p = u();
                  return m(
                    `div`,
                    {
                      className: `variant-swatch-container`,
                      style: { position: `relative` },
                      children: [
                        d(`button`, {
                          role: `radio`,
                          "aria-checked": r,
                          "aria-label": `${t.name} ${e}${a ? `` : ` (Out of Stock)`}`,
                          title: e,
                          disabled: !a && !h,
                          onClick: () => {
                            (a || h) && $(t.name, e);
                          },
                          tabIndex: a || h ? 0 : -1,
                          onMouseEnter: (e) => {
                            if (a || h) {
                              let t = e.currentTarget,
                                { borderWidth: n, borderStyle: r } = s.hovered.border;
                              ((t.style.border = `${n}px ${r} ${s.hovered.border.borderColor}`),
                                (t.style.background = s.hovered.background));
                            }
                          },
                          onMouseLeave: (e) => {
                            let t = e.currentTarget,
                              n = l(),
                              r = u();
                            ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                              (t.style.background = r));
                          },
                          style: {
                            width: s.width,
                            height: s.height,
                            borderRadius: s.radius,
                            border: `${f.borderWidth}px ${f.borderStyle} ${f.borderColor}`,
                            padding: s.padding,
                            cursor: a || h ? `pointer` : `not-allowed`,
                            background: p,
                            position: `relative`,
                          },
                          children: m(`div`, {
                            style: {
                              width: `100%`,
                              height: `100%`,
                              borderRadius: s.radius,
                              backgroundImage: `url(${c})`,
                              backgroundSize: `cover`,
                              backgroundPosition: `center`,
                              opacity: a ? 1 : s.outOfStock.opacity,
                              position: `relative`,
                              overflow: `hidden`,
                            },
                            children: [
                              !r &&
                                !a &&
                                s.outOfStock.strike?.line &&
                                d(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: d(`line`, {
                                    x1:
                                      (s.outOfStock.strike?.direction === `horizontal` ||
                                        s.outOfStock.strike?.direction,
                                      0),
                                    y1:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 0
                                          : 100,
                                    stroke: s.outOfStock.strike?.color,
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                              r &&
                                !a &&
                                s.outOfStock.strike?.line &&
                                d(`svg`, {
                                  style: {
                                    position: `absolute`,
                                    top: 0,
                                    left: 0,
                                    width: `100%`,
                                    height: `100%`,
                                    pointerEvents: o ? `auto` : `none`,
                                  },
                                  viewBox: `0 0 100 100`,
                                  preserveAspectRatio: `none`,
                                  children: d(`line`, {
                                    x1:
                                      (s.outOfStock.strike?.direction === `horizontal` ||
                                        s.outOfStock.strike?.direction,
                                      0),
                                    y1:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 100
                                          : 0,
                                    x2: 100,
                                    y2:
                                      s.outOfStock.strike?.direction === `horizontal`
                                        ? 50
                                        : s.outOfStock.strike?.direction === `diagonal-up`
                                          ? 0
                                          : 100,
                                    stroke: s.outOfStock.strike?.color,
                                    strokeWidth: `1`,
                                    vectorEffect: `non-scaling-stroke`,
                                  }),
                                }),
                            ],
                          }),
                        }),
                        d(`div`, {
                          className: `swatch-tooltip`,
                          style: {
                            position: `absolute`,
                            top: `100%`,
                            left: `50%`,
                            transform: `translateX(-50%)`,
                            backgroundColor: `rgba(0, 0, 0, 0.8)`,
                            color: `#FFFFFF`,
                            padding: `4px 8px`,
                            borderRadius: `4px`,
                            fontSize: `12px`,
                            marginTop: `4px`,
                            whiteSpace: `nowrap`,
                            opacity: 0,
                            visibility: `hidden`,
                            transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                            zIndex: 10,
                          },
                          children: e,
                        }),
                      ],
                    },
                    e
                  );
                }),
                !i &&
                  d(`div`, {
                    role: `alert`,
                    style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                    children: `"${t.name}" missing`,
                  }),
              ],
            }),
          ],
        },
        t.name
      );
    },
    Ie = (t, n, r, i, a) => {
      if (
        !(e.variantImageTitles || [`Amount`]).some(
          (e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()
        ) ||
        !e.variantImages?.image
      )
        return Ne(t, n, r, i, a);
      let o = new Map();
      e.variantImageIds && (o = Ee(e.variantImageIds));
      let s;
      return (
        (s =
          e.variantImages.imageStyles === `customize`
            ? {
                gap: e.variantImages.imageGap,
                height: e.variantImages.imageHeight,
                width: e.variantImages.imageWidth,
                radius: e.variantImages.imageRadius,
                padding: e.variantImages.imagePadding,
                unselected: e.variantImages.imageUnselected,
                hovered: e.variantImages.imageHovered,
                selected: e.variantImages.imageSelected,
                imageOutOfStock: e.variantImages.imageOutOfStock,
              }
            : e.variantImages.imageStyles === `inherit`
              ? e.imageSwatches?.image && e.imageSwatches?.imageStyles
                ? {
                    gap: e.imageSwatches.imageGap,
                    height: e.imageSwatches.imageHeight,
                    width: e.imageSwatches.imageWidth,
                    radius: e.imageSwatches.imageRadius,
                    padding: e.imageSwatches.imagePadding,
                    unselected: e.imageSwatches.imageUnselected,
                    hovered: e.imageSwatches.imageHovered,
                    selected: e.imageSwatches.imageSelected,
                    imageOutOfStock: e.imageSwatches.imageOutOfStock,
                  }
                : e.swatches
                  ? {
                      gap: e.swatches.gap ?? 8,
                      height: e.swatches.height ?? 40,
                      width: e.swatches.width ?? 40,
                      radius: e.swatches.radius ?? `50%`,
                      padding: e.swatches.padding ?? 2,
                      unselected: e.swatches.unselected ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        background: `#FFFFFF00`,
                      },
                      hovered: e.swatches.hovered ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                        background: `#FFFFFF00`,
                      },
                      selected: e.swatches.selected ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                        background: `#FFFFFF00`,
                      },
                      imageOutOfStock: e.swatches.outOfStock ?? {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        opacity: 0.5,
                        background: `#FFFFFF00`,
                        strike: {
                          line: !1,
                          color: `rgba(0, 0, 0, 0.16)`,
                          direction: `diagonal-down`,
                        },
                      },
                    }
                  : {
                      gap: 8,
                      height: 40,
                      width: 40,
                      radius: `50%`,
                      padding: 2,
                      unselected: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        background: `#FFFFFF00`,
                      },
                      hovered: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                        background: `#FFFFFF00`,
                      },
                      selected: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                        background: `#FFFFFF00`,
                      },
                      imageOutOfStock: {
                        border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                        opacity: 0.5,
                        background: `#FFFFFF00`,
                        strike: {
                          line: !1,
                          color: `rgba(0, 0, 0, 0.16)`,
                          direction: `diagonal-down`,
                        },
                      },
                    }
              : {
                  gap: 8,
                  height: 40,
                  width: 40,
                  radius: `50%`,
                  padding: 2,
                  unselected: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                    background: `#FFFFFF00`,
                  },
                  hovered: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#CCCCCC` },
                    background: `#FFFFFF00`,
                  },
                  selected: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#000000` },
                    background: `#FFFFFF00`,
                  },
                  imageOutOfStock: {
                    border: { borderWidth: 2, borderStyle: `solid`, borderColor: `#FFFFFF` },
                    opacity: 0.5,
                    background: `#FFFFFF00`,
                    strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
                  },
                }),
        m(
          `div`,
          {
            role: `radiogroup`,
            "aria-label": `Select ${t.name}`,
            "aria-required": !i,
            "aria-invalid": !i,
            children: [
              d(`div`, {
                style: {
                  width: `100%`,
                  display: e.titleConfigs.visible || e.selectedConfigs.visible ? `flex` : `none`,
                  justifyContent:
                    e.titleConfigs.font.textAlign === `center`
                      ? `center`
                      : e.titleConfigs.font.textAlign === `right`
                        ? `flex-end`
                        : `flex-start`,
                  marginBottom:
                    X(e, `containerConfigs.gap2`) === void 0
                      ? X(e, `titleConfigs.gap`)
                      : X(e, `containerConfigs.gap2`),
                  overflow: `visible`,
                },
                children: m(`div`, {
                  style: {
                    width: `100%`,
                    display: `flex`,
                    justifyContent: `flex-start`,
                    alignItems: `center`,
                    overflow: `visible`,
                  },
                  children: [
                    e.titleConfigs.visible &&
                      d(`label`, {
                        id: `variant-title-${t.name}`,
                        htmlFor: `variant-${t.name}`,
                        style: {
                          ...X(e, `titleConfigs.font`),
                          color: X(e, `titleConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          margin: 0,
                          cursor: `pointer`,
                          textTransform: X(e, `titleConfigs.textTransform`, `None`).toLowerCase(),
                        },
                        children: (e.titleConfigs.display || `{{Option}}`).replace(
                          `{{Option}}`,
                          t.name
                        ),
                      }),
                    e.selectedConfigs.visible &&
                      T[t.name] &&
                      d(`p`, {
                        style: {
                          ...X(e, `selectedConfigs.font`),
                          color: X(e, `selectedConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                          margin: 0,
                          textTransform: X(
                            e,
                            `selectedConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: T[t.name],
                      }),
                    e.selectedConfigs.visible &&
                      e.selectedConfigs.emptyVisible &&
                      !T[t.name] &&
                      d(`p`, {
                        style: {
                          ...X(e, `selectedConfigs.font`),
                          color: X(e, `selectedConfigs.color`),
                          whiteSpace: `nowrap`,
                          overflow: `visible`,
                          paddingLeft: e.titleConfigs.visible ? `${e.selectedConfigs.gap}px` : 0,
                          margin: 0,
                          textTransform: X(
                            e,
                            `selectedConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: (
                          e.selectedConfigs.emptyText || `Select {{Option Value}}`
                        ).replace(`{{Option Value}}`, t.name),
                      }),
                  ],
                }),
              }),
              m(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `row`,
                  flexWrap: `wrap`,
                  gap: s.gap,
                  width: `100%`,
                },
                children: [
                  n.map((n, r) => {
                    let i = T[t.name] === n,
                      a = Array.from(Object.entries({ ...T, [t.name]: n })),
                      c = D.find((e) => a.every(([t, n]) => e[t] === n) && e.availableForSale),
                      l = c || (h && !c),
                      u = D.find((e) => a.every(([t, n]) => e[t] === n))
                        ?.id?.split(`/`)
                        .pop(),
                      f,
                      p;
                    u &&
                      x?.variants?.edges &&
                      (p = x.variants.edges.find(({ node: e }) => e.id.split(`/`).pop() === u));
                    let g;
                    if (u && o.size > 0 && ((g = o.get(u)), g)) {
                      let t = e[`image${g}`];
                      t && (f = t);
                    }
                    !f && p && p.node?.image?.url && (f = p.node.image.url);
                    let _ = () =>
                        i && !c
                          ? s.selected.border
                          : c
                            ? i
                              ? s.selected.border
                              : s.unselected.border
                            : s.imageOutOfStock.border,
                      v = () =>
                        i && !c
                          ? s.selected.background
                          : c
                            ? i
                              ? s.selected.background
                              : s.unselected.background
                            : s.imageOutOfStock.background,
                      y = _(),
                      b = v();
                    return m(
                      `div`,
                      {
                        className: `variant-swatch-container`,
                        style: { position: `relative` },
                        children: [
                          d(`button`, {
                            role: `radio`,
                            "aria-checked": i,
                            "aria-label": `${t.name} ${n}${l ? `` : ` (Out of Stock)`}`,
                            title: n,
                            disabled: !l,
                            onClick: () => {
                              l && $(t.name, n);
                            },
                            tabIndex: l ? 0 : -1,
                            onMouseEnter: (e) => {
                              if (l) {
                                let t = e.currentTarget,
                                  { borderWidth: n, borderStyle: r } = s.hovered.border;
                                ((t.style.border = `${n}px ${r} ${s.hovered.border.borderColor}`),
                                  (t.style.background = s.hovered.background));
                              }
                            },
                            onMouseLeave: (e) => {
                              let t = e.currentTarget,
                                n = _(),
                                r = v();
                              ((t.style.border = `${n.borderWidth}px ${n.borderStyle} ${n.borderColor}`),
                                (t.style.background = r));
                            },
                            style: {
                              width: s.width,
                              height: s.height,
                              borderRadius: s.radius,
                              border: `${y.borderWidth}px ${y.borderStyle} ${y.borderColor}`,
                              padding: s.padding,
                              cursor: l ? `pointer` : `not-allowed`,
                              background: b,
                              position: `relative`,
                            },
                            children: m(`div`, {
                              style: {
                                width: `100%`,
                                height: `100%`,
                                borderRadius: s.radius,
                                backgroundImage: f ? `url(${f})` : void 0,
                                backgroundSize: `cover`,
                                backgroundPosition: `center`,
                                opacity: c ? 1 : s.imageOutOfStock.opacity,
                                backgroundColor: f ? void 0 : `#F0F0F0`,
                                position: `relative`,
                                overflow: `hidden`,
                              },
                              children: [
                                !i &&
                                  !c &&
                                  d(`div`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      background: s.imageOutOfStock?.background || `FFFFFF80`,
                                      opacity: s.imageOutOfStock.opacity,
                                      borderRadius: s.radius,
                                      pointerEvents: `none`,
                                      zIndex: 1,
                                    },
                                  }),
                                i &&
                                  !c &&
                                  s.imageOutOfStock.strike?.line &&
                                  d(`svg`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      pointerEvents: l ? `auto` : `none`,
                                    },
                                    viewBox: `0 0 100 100`,
                                    preserveAspectRatio: `none`,
                                    children: d(`line`, {
                                      x1:
                                        (s.imageOutOfStock.strike?.direction === `horizontal` ||
                                          s.imageOutOfStock.strike?.direction,
                                        0),
                                      y1:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 100
                                            : 0,
                                      x2: 100,
                                      y2:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 0
                                            : 100,
                                      stroke: s.imageOutOfStock.strike?.color,
                                      strokeWidth: `1`,
                                      vectorEffect: `non-scaling-stroke`,
                                    }),
                                  }),
                                !i &&
                                  !c &&
                                  s.imageOutOfStock.strike?.line &&
                                  d(`svg`, {
                                    style: {
                                      position: `absolute`,
                                      top: 0,
                                      left: 0,
                                      width: `100%`,
                                      height: `100%`,
                                      pointerEvents: `none`,
                                    },
                                    viewBox: `0 0 100 100`,
                                    preserveAspectRatio: `none`,
                                    children: d(`line`, {
                                      x1:
                                        (s.imageOutOfStock.strike?.direction === `horizontal` ||
                                          s.imageOutOfStock.strike?.direction,
                                        0),
                                      y1:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 100
                                            : 0,
                                      x2: 100,
                                      y2:
                                        s.imageOutOfStock.strike?.direction === `horizontal`
                                          ? 50
                                          : s.imageOutOfStock.strike?.direction === `diagonal-up`
                                            ? 0
                                            : 100,
                                      stroke: s.imageOutOfStock.strike?.color,
                                      strokeWidth: `1`,
                                      vectorEffect: `non-scaling-stroke`,
                                    }),
                                  }),
                              ],
                            }),
                          }),
                          d(`div`, {
                            className: `swatch-tooltip`,
                            style: {
                              position: `absolute`,
                              top: `100%`,
                              left: `50%`,
                              transform: `translateX(-50%)`,
                              backgroundColor: `rgba(0, 0, 0, 0.8)`,
                              color: `#FFFFFF`,
                              padding: `4px 8px`,
                              borderRadius: `4px`,
                              fontSize: `12px`,
                              marginTop: `4px`,
                              whiteSpace: `nowrap`,
                              opacity: 0,
                              visibility: `hidden`,
                              transition: `opacity 0.2s ease-in-out, visibility 0.2s ease-in-out`,
                              zIndex: 10,
                            },
                            children: n,
                          }),
                        ],
                      },
                      n
                    );
                  }),
                  !i &&
                    d(`div`, {
                      role: `alert`,
                      style: { color: `#FF0000`, fontSize: `14px`, paddingTop: `8px` },
                      children: `"${t.name}" missing`,
                    }),
                ],
              }),
            ],
          },
          t.name
        )
      );
    },
    Le =
      !Array.isArray(X(x, `variants.edges`)) ||
      (!p && (X(x, `variants.edges`) || []).length <= 1) ||
      !((e) =>
        e &&
        Array.isArray(X(e, `options`)) &&
        X(e, `options`, []).length > 0 &&
        !(
          X(e, `options`, []).length === 1 &&
          X(e, `options.0.name`) === `Title` &&
          X(e, `options.0.values.0`) === `Default Title`
        ))(x) ||
      (M && f === `None`);
  return x === `404` || Le
    ? null
    : d(`div`, {
        ref: H,
        className: `fc-product-variants-container`,
        style: {
          padding: e.containerConfigs.padding,
          display: `flex`,
          flexDirection: e.containerConfigs.direction === `horizontal` ? `row` : `column`,
          flexWrap: e.containerConfigs.direction === `horizontal` ? `wrap` : `nowrap`,
          gap: e.containerConfigs.gap,
          width: `100%`,
          background: e.containerConfigs.background,
          borderRadius: e.containerConfigs.radius,
        },
        role: `region`,
        "aria-label": `Product Variants`,
        children: A.map((t, n) => {
          let r = n === (X(x, `options`) || [{}]).length - 1,
            i = !C || !!T[t.name],
            a = `"${t.name}" missing`,
            o = t.values;
          if (g?.variantGroups !== `all` && g?.variantTitles) {
            let e = X(x, `variants.edges`, []).filter(({ node: e }) =>
                e.selectedOptions.some((e) => g.variantTitles?.includes(e.name))
              ),
              n = new Set();
            (e.forEach(({ node: e }) => {
              let r = e.selectedOptions.find((e) => e.name === t.name);
              r && n.add(r.value);
            }),
              (o = t.values.filter((e) => n.has(e))));
          }
          let s = e.colorTitles || [`Color`, `Colour`],
            c = e.imageTitles || [],
            u = e.variantImageTitles || [],
            f =
              s.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.swatches?.colorEnabled === !0,
            p =
              c.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.imageSwatches?.image === !0,
            m =
              u.some((e) => e.toLowerCase().trim() === t.name.toLowerCase().trim()) &&
              e.variantImages?.image === !0;
          return d(
            `div`,
            {
              style: {
                flex:
                  l === `Dropdown` && e.containerConfigs.direction === `horizontal`
                    ? `1 1 0`
                    : l === `Dropdown`
                      ? `1 1 auto`
                      : e.containerConfigs.direction === `horizontal`
                        ? `0 0 auto`
                        : `1 1 auto`,
                minWidth: l === `Dropdown` ? `88px` : `auto`,
                maxWidth: `none`,
                width:
                  l === `Dropdown`
                    ? `100%`
                    : e.containerConfigs.direction === `horizontal`
                      ? `auto`
                      : `100%`,
                ...(l === `Dropdown` &&
                e.containerConfigs.direction === `horizontal` &&
                e.containerConfigs.gap === 0 &&
                !r
                  ? { marginRight: `-1px` }
                  : {}),
              },
              children: f
                ? Pe(t, o, r, i, a)
                : p
                  ? Fe(t, o, r, i, a)
                  : m
                    ? Ie(t, o, r, i, a)
                    : l === `Dropdown`
                      ? Me(
                          t,
                          o,
                          r,
                          i,
                          a,
                          e,
                          $,
                          T,
                          D,
                          X(x, `options`)?.findIndex((e) => e.name === t.name) || 0,
                          X(x, `options`)?.length || 0
                        )
                      : Ne(t, o, r, i, a),
            },
            t.name
          );
        }),
      });
}
function on(e, t) {
  if (!e || !e.variants || !e.variants.edges.length || typeof t != `object` || !t) return null;
  let n = e.variants.edges.find(({ node: e }) =>
    Object.entries(t).every(([t, n]) =>
      e.selectedOptions.find((e) => e.name === t && e.value === n)
    )
  );
  return n ? n.node : null;
}
function sn(e) {
  return e
    ? (e.match(fn) || []).map((e) => {
        let [t, n] = e
            .slice(1, -1)
            .split(`•`)
            .map((e) => e.trim()),
          [r, i] = t.split(`:`).map((e) => e.trim());
        return { name: r, values: i.split(`,`).map((e) => e.trim()), id: n || `` };
      })
    : [];
}
function cn(e) {
  if (!e) return [];
  let t = e.match(fn) || [],
    n = [];
  for (let e = 0; e < t.length; e++) {
    let [r, i] = t[e]
        .slice(1, -1)
        .split(`•`)
        .map((e) => e.trim()),
      a = r.includes(` / `) ? r.split(` / `).map((e) => e.trim()) : [r.trim()];
    n.push({ combination: a, id: i || ``, availableForSale: !0 });
  }
  return n;
}
function ln(e) {
  if (!e) return { options: [], variants: [], productId: null };
  let t = e.split(`••`).map((e) => e.trim()),
    n = t[0],
    r = t.length > 1 ? t[1] : ``,
    i = t.length > 2 ? t[2] : null;
  return { options: sn(n), variants: cn(r), productId: i };
}
var un,
  dn,
  fn,
  pn,
  mn = e(() => {
    (n(),
      h(),
      _(),
      R(),
      fe(),
      je(),
      ye(),
      me(),
      Ce(),
      (un = (e) => e === `Add to Cart` || e === `Buy Now`),
      (dn = ({
        opt: e,
        filteredValues: t,
        isLast: n,
        valid: r,
        invalidMsg: a,
        props: s,
        dispatchOptionSelectedEvent: c,
        selectedOptions: l,
        combinations: u,
        index: f,
        totalCount: p,
      }) => {
        let [h, g] = o(!1),
          [_, v] = o(!1),
          { dropdownConfigs: y } = s,
          {
            font: b,
            selected: x,
            hover: S,
            focus: C,
            unselected: w,
            radius: T,
            padding: E,
            icon: D,
          } = y,
          O = String(E).trim().split(/\s+/),
          k = O.length >= 2 ? O[1] : O[0],
          A = (w.text || `Select {{variant}}`).replace(`{{variant}}`, e.name),
          j = l[e.name] || A,
          M = j === A,
          N = f === p - 1,
          P = Number(s.containerConfigs.gap) === 0,
          F = s.containerConfigs.direction === `horizontal`,
          I = {};
        P && !N && (F ? (I.marginRight = `-1px`) : (I.marginBottom = `-1px`));
        let L = M ? w.border.borderWidth : h ? S.border.borderWidth : x.border.borderWidth,
          R = `${L}px solid ${M ? w.border.borderColor : h ? S.border.borderColor : x.border.borderColor}`,
          z = C?.offset === 0 ? -L : C?.offset || 2,
          ee = ((e, t) => {
            let n = e.match(/^(\d+(?:\.\d+)?)(px|%)$/);
            if (!n) return e;
            let [, r, i] = n;
            return i === `px` ? `${Math.max(0, parseFloat(r) + t)}px` : e;
          })(T, z);
        return d(
          `div`,
          {
            style: {
              width: `100%`,
              position: `relative`,
              zIndex: +!!_,
              overflow: `visible`,
              ...(F && P && !N ? { marginRight: `-1px` } : {}),
            },
            className: `variant-dropdown-container ${F && P && !N ? `horizontal-edge-to-edge` : ``}`,
            "data-horizontal": F ? `true` : `false`,
            "data-last": N ? `true` : `false`,
            "data-edge-to-edge": P ? `true` : `false`,
            children: m(`div`, {
              style: { display: `flex`, flexDirection: `column`, gap: `0px` },
              children: [
                d(`div`, {
                  style: {
                    width: `100%`,
                    display: s.titleConfigs.visible || s.selectedConfigs.visible ? `flex` : `none`,
                    justifyContent:
                      s.titleConfigs.font.textAlign === `center`
                        ? `center`
                        : s.titleConfigs.font.textAlign === `right`
                          ? `flex-end`
                          : `flex-start`,
                    marginBottom:
                      X(s, `containerConfigs.gap2`) === void 0
                        ? X(s, `titleConfigs.gap`)
                        : X(s, `containerConfigs.gap2`),
                    overflow: `visible`,
                  },
                  children: m(`div`, {
                    style: {
                      width: `100%`,
                      display: `flex`,
                      justifyContent: `flex-start`,
                      alignItems: `center`,
                      overflow: `visible`,
                    },
                    children: [
                      s.titleConfigs.visible &&
                        d(`label`, {
                          id: `variant-title-${e.name}`,
                          htmlFor: `variant-${e.name}`,
                          style: {
                            ...X(s, `titleConfigs.font`),
                            color: X(s, `titleConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            margin: 0,
                            cursor: `pointer`,
                            textTransform: X(s, `titleConfigs.textTransform`, `None`).toLowerCase(),
                          },
                          children: (s.titleConfigs.display || `{{Option}}`).replace(
                            `{{Option}}`,
                            e.name
                          ),
                        }),
                      s.selectedConfigs.visible &&
                        l[e.name] &&
                        d(`p`, {
                          style: {
                            ...X(s, `selectedConfigs.font`),
                            color: X(s, `selectedConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            paddingLeft: s.titleConfigs.visible ? `${s.selectedConfigs.gap}px` : 0,
                            margin: 0,
                            textTransform: X(
                              s,
                              `selectedConfigs.textTransform`,
                              `None`
                            ).toLowerCase(),
                          },
                          children: l[e.name],
                        }),
                      s.selectedConfigs.visible &&
                        s.selectedConfigs.emptyVisible &&
                        !l[e.name] &&
                        d(`p`, {
                          style: {
                            ...X(s, `selectedConfigs.font`),
                            color: X(s, `selectedConfigs.color`),
                            whiteSpace: `nowrap`,
                            overflow: `visible`,
                            paddingLeft: s.titleConfigs.visible ? `${s.selectedConfigs.gap}px` : 0,
                            margin: 0,
                            textTransform: X(
                              s,
                              `selectedConfigs.textTransform`,
                              `None`
                            ).toLowerCase(),
                          },
                          children: (
                            s.selectedConfigs.emptyText || `Select {{Option Value}}`
                          ).replace(`{{Option Value}}`, e.name),
                        }),
                    ],
                  }),
                }),
                d(`div`, {
                  style: { position: `relative` },
                  children: m(`div`, {
                    className: `dropdown-inner`,
                    style: {
                      position: `relative`,
                      display: `flex`,
                      alignItems: `center`,
                      padding: E,
                      paddingRight: `calc(${k} + ${D.size}px + ${k})`,
                      backgroundColor: M ? w.background : h ? S.background : x.background,
                      borderRadius: T,
                      border: R,
                      cursor: `pointer`,
                      "--hover-border-color": S.border.borderColor,
                      "--focus-outline-color": C?.color || S.border.borderColor,
                      "--focus-outline-width": `${C?.width || 2}px`,
                      "--focus-outline-offset": `${z}px`,
                      "--focus-outline-radius": ee,
                      ...I,
                    },
                    children: [
                      d(`span`, {
                        style: {
                          pointerEvents: `none`,
                          whiteSpace: `nowrap`,
                          minWidth: `max-content`,
                          ...b,
                          color: M ? w.color : _ || h ? S.color : x.color,
                          textTransform: X(
                            s,
                            `dropdownConfigs.textTransform`,
                            `None`
                          ).toLowerCase(),
                        },
                        children: j,
                      }),
                      m(`select`, {
                        id: `variant-${e.name}`,
                        style: {
                          position: `absolute`,
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          width: `100%`,
                          height: `100%`,
                          boxSizing: `border-box`,
                          appearance: `none`,
                          WebkitAppearance: `none`,
                          background: `transparent`,
                          color: `transparent`,
                          border: `none`,
                          padding: 0,
                          margin: 0,
                          cursor: `pointer`,
                          outline: `none`,
                          opacity: 0,
                        },
                        value: j,
                        onChange: (t) => {
                          let n = t.target.value;
                          n !== A && c(e.name, n);
                        },
                        onMouseDown: () => v(!0),
                        onMouseEnter: () => g(!0),
                        onMouseLeave: () => g(!1),
                        onFocus: () => v(!0),
                        onBlur: () => v(!1),
                        onKeyDown: (e) => {
                          if (e.key === `Enter` || e.key === ` `) {
                            e.preventDefault();
                            let t = e.target,
                              n = new MouseEvent(`mousedown`, {
                                bubbles: !0,
                                cancelable: !0,
                                view: i,
                              });
                            t.dispatchEvent(n);
                          } else (e.key === `ArrowDown` || e.key === `ArrowUp`) && v(!0);
                        },
                        "aria-label": `Select ${e.name}`,
                        "aria-invalid": !r,
                        "aria-required": `true`,
                        "aria-describedby": r ? void 0 : `variant-error-${e.name}`,
                        children: [
                          d(`option`, { value: A, disabled: !0, children: A }),
                          t.map((t) => {
                            let n;
                            if (s.behaviorConfigs?.filterVariants?.variantGroups === `all`) {
                              let r = Array.from(Object.entries({ ...l, [e.name]: t }));
                              n = u.find(
                                (e) => r.every(([t, n]) => e[t] === n) && e.availableForSale
                              );
                            } else
                              n = Array.from(
                                new Set(
                                  u
                                    .filter(
                                      (t) =>
                                        t.availableForSale &&
                                        Object.entries(l)
                                          .filter(([t]) => t !== e.name)
                                          .every(([e, n]) => t[e] === n)
                                    )
                                    .map((t) => t[e.name])
                                    .filter(Boolean)
                                )
                              ).includes(t);
                            return d(
                              `option`,
                              {
                                value: t,
                                disabled: !n,
                                style: {
                                  color: n ? x.color : w.color,
                                  backgroundColor: n ? x.background : w.background,
                                },
                                children: t,
                              },
                              t
                            );
                          }),
                        ],
                      }),
                      d(`div`, {
                        "aria-hidden": `true`,
                        style: {
                          position: `absolute`,
                          right: 0,
                          top: 0,
                          bottom: 0,
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `center`,
                          padding: E,
                          pointerEvents: `none`,
                        },
                        children:
                          D.type === `custom` && D.customIcon
                            ? d(`img`, {
                                src: D.customIcon,
                                width: D.size,
                                height: D.size,
                                style: { objectFit: `contain` },
                                alt: `Dropdown icon`,
                              })
                            : d(`svg`, {
                                width: D.size,
                                height: D.size,
                                viewBox: `0 0 24 24`,
                                fill: `none`,
                                stroke:
                                  D.type === "default"
                                    ? D.color
                                    : M
                                      ? w.color
                                      : _ || h
                                        ? S.color
                                        : D.color,
                                strokeWidth: D.weight,
                                strokeLinecap: `butt`,
                                strokeLinejoin: `miter`,
                                children: d(`polyline`, { points: `6 9 12 15 18 9` }),
                              }),
                      }),
                    ],
                  }),
                }),
                !r &&
                  d(`div`, {
                    id: `variant-error-${e.name}`,
                    role: `alert`,
                    "aria-live": `polite`,
                    style: {
                      color: s.ErrorConfigs.errorColor,
                      ...s.ErrorConfigs.errorFont,
                      paddingTop: s.ErrorConfigs.errorPaddingTop,
                    },
                    children: a,
                  }),
              ],
            }),
          },
          e.name
        );
      }),
      (fn = /\[(.*?)\]/g),
      (pn = /\[Image (\d+) • (\d+)\]/g),
      U(an, {
        shopifyProductID: {
          type: J.String,
          title: `Product ID`,
          description: `Connect to Product ID from CMS (required)`,
        },
        variantImageIds: {
          type: J.String,
          title: `Image IDs`,
          description: `Connect to Image Variant IDs from CMS [Learn more](https://framercommerce.com/resources/docs/components/product#gallery)`,
        },
        variants: {
          type: J.String,
          title: `Variants`,
          description: `Connect to Variants from CMS (required)`,
        },
        images: {
          type: J.Object,
          title: `Image Triggers`,
          controls: {
            imageTrigger: {
              type: J.Enum,
              title: `Type`,
              options: [`None`, `Gallery`, `Scroll Sections`],
              defaultValue: `None`,
              description: `Trigger image changes elsewhere on the page. [Learn more](https://framercommerce.com/resources/docs/components/product#gallery)`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            imageChange: {
              type: J.Boolean,
              title: `Two-Way`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
              description: `Allow clicking on an image to change the selected variant.`,
              hidden: ({ imageTrigger: e }) => e !== `Gallery`,
            },
            offsetY: {
              type: J.Number,
              title: `Offset Y`,
              description: `Match your Offset Y to your on-canvas values.`,
              hidden: ({ imageTrigger: e }) => e !== `Scroll Sections`,
              defaultValue: 0,
              min: 0,
              step: 1,
              displayStepper: !0,
            },
          },
        },
        behaviorConfigs: {
          type: J.Object,
          title: `Behavior`,
          controls: {
            filterVariants: {
              type: J.Object,
              title: `Filter`,
              controls: {
                variantGroups: {
                  type: J.Enum,
                  title: `Groups`,
                  options: [`all`, `equals`, `doesn't equal`],
                  optionTitles: [`All`, `Equals`, `Doesn't Equal`],
                  defaultValue: `all`,
                  displaySegmentedControl: !0,
                  segmentedControlDirection: `vertical`,
                },
                variantTitles: {
                  type: J.Array,
                  title: `Titles`,
                  control: { type: J.String },
                  defaultValue: [],
                  description: `Show all variants or filter by title (e.g., "Color", "Size") using multiple components.`,
                  hidden: (e) => e.variantGroups === `all`,
                },
              },
            },
            action: {
              type: J.Enum,
              title: `Action`,
              options: [`Update Active`, `Add to Cart`, `Buy Now`],
              optionTitles: [`Update Active`, `Add to Cart`, `Buy Now`],
              defaultValue: `Update Active`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              description: `Only set Add to Cart or Buy Now when this component displays a single variant group.`,
            },
            triggerCart: {
              type: J.Boolean,
              title: `Cart`,
              description: `Trigger cart after adding item`,
              defaultValue: !0,
              hidden: (e) => e.action !== `Add to Cart`,
            },
            autoSelectFirst: {
              type: J.Boolean,
              title: `Select 1st`,
              description: `Auto-select the first available variant(s)`,
              defaultValue: !1,
              hidden: (e) => e.action === `Add to Cart` || e.action === `Buy Now`,
            },
            productPage: {
              type: J.Boolean,
              title: `PDP`,
              description: `Enable if this component is on a product page`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            showSingleVariants: {
              type: J.Boolean,
              title: `Singles`,
              description: `Show the variant selector if only one variant`,
              defaultValue: !1,
            },
            selectOutOfStock: {
              type: J.Boolean,
              title: `Out of Stock`,
              description: `Allow selecting out of stock variants`,
              defaultValue: !1,
              hidden: (e) => e.action !== `Update Active`,
            },
          },
        },
        containerConfigs: {
          type: J.Object,
          title: `Layout`,
          controls: {
            padding: { type: J.Padding, title: `Padding`, defaultValue: `8px` },
            gap2: { type: J.Number, title: `Title Gap`, min: 0, unit: `px` },
            gap: { type: J.Number, title: `Group Gap`, min: 0, unit: `px` },
            direction: {
              type: J.Enum,
              title: `Direction`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              defaultValue: `vertical`,
            },
            background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
            radius: { type: J.BorderRadius, title: `Radius`, defaultValue: `0px` },
          },
        },
        titleConfigs: {
          type: J.Object,
          title: `Title`,
          controls: {
            visible: {
              type: J.Boolean,
              title: `Title`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !0,
            },
            display: {
              type: J.String,
              title: `Display`,
              defaultValue: `{{Option}}`,
              placeholder: `{{Option}}`,
              description: `Use {{Option}} to dynamically display Color, Size, etc.`,
              hidden: (e) => !e.visible,
            },
            font: { type: J.Font, title: `Font`, controls: `extended`, hidden: (e) => !e.visible },
            textTransform: {
              type: J.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
              hidden: (e) => !e.visible,
            },
            color: { type: J.Color, title: `Color`, hidden: (e) => !e.visible },
            gap: {
              type: J.Number,
              title: `Gap`,
              description: `Space between title and buttons/dropdown`,
              min: 0,
              unit: `px`,
              hidden: (e) => !e.visible || !0,
            },
          },
        },
        selectedConfigs: {
          type: J.Object,
          title: `Selected Value`,
          controls: {
            visible: {
              type: J.Boolean,
              title: `Value`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
            },
            gap: {
              type: J.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              unit: `px`,
              hidden: (e) => !e.visible,
            },
            font: { type: J.Font, title: `Font`, controls: `extended`, hidden: (e) => !e.visible },
            textTransform: {
              type: J.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
              hidden: (e) => !e.visible,
            },
            color: { type: J.Color, title: `Color`, hidden: (e) => !e.visible },
            emptyVisible: {
              type: J.Boolean,
              title: `Empty`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden: (e) => !e.visible,
            },
            emptyText: {
              type: J.String,
              title: `Display`,
              description: `Use {{Option Value}} to dynamically display Blue, Medium, etc.`,
              placeholder: `Select {{Option Value}}`,
              defaultValue: `Select {{Option Value}}`,
              hidden: (e) => !e.visible || !e.emptyVisible,
            },
          },
        },
        style: {
          type: J.Enum,
          title: `Style`,
          options: [`Buttons`, `Dropdown`],
          optionTitles: [`Buttons`, `Dropdown`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          defaultValue: `Buttons`,
        },
        buttonConfigs: {
          type: J.Object,
          title: `Buttons`,
          hidden: (e) => e.style !== `Buttons`,
          controls: {
            layout: {
              type: J.Enum,
              title: `Layout`,
              options: [`stack`, `grid`],
              optionTitles: [`Stack`, `Grid`],
              displaySegmentedControl: !0,
              defaultValue: `stack`,
            },
            direction: {
              type: J.Enum,
              title: `Direction`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              defaultValue: `vertical`,
              hidden: (e) => e.layout === `grid`,
            },
            columns: {
              type: J.Enum,
              title: `Columns`,
              options: [`auto`, `fixed`],
              optionTitles: [`Auto`, `Fixed`],
              displaySegmentedControl: !0,
              defaultValue: `auto`,
              hidden: (e) => e.layout !== `grid`,
            },
            columnCount: {
              type: J.Number,
              title: `Columns`,
              defaultValue: 3,
              min: 1,
              step: 1,
              displayStepper: !0,
              hidden: (e) => e.layout !== `grid` || e.columns === `auto`,
            },
            gridWidth: {
              type: J.Number,
              title: `Min Width`,
              defaultValue: 100,
              min: 1,
              max: 1e3,
              step: 1,
              hidden: (e) => e.layout !== `grid` || e.columns === `fixed`,
            },
            maxColumns: {
              type: J.Number,
              title: `Max Col`,
              defaultValue: 4,
              min: 1,
              step: 1,
              displayStepper: !0,
              hidden: (e) => e.layout !== `grid` || e.columns === `fixed`,
            },
            gap: { type: J.Number, title: `Gap X`, min: 0 },
            gapY: { type: J.Number, title: `Gap Y`, defaultValue: 8, min: 0, step: 1 },
            radius: { type: J.BorderRadius, title: `Radius`, defaultValue: `4px` },
            padding: { type: J.Padding, title: `Padding`, defaultValue: `8px` },
            width: {
              type: J.Boolean,
              title: `Width`,
              enabledTitle: `Fill`,
              disabledTitle: `Fit`,
              defaultValue: !1,
              hidden: (e) => e.direction !== `vertical`,
            },
            unselected: {
              type: J.Object,
              title: `Default`,
              controls: {
                font: {
                  type: J.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontFamily: `Inter` },
                },
                textTransform: {
                  type: J.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0,0,0,0.08)`,
                    },
                  },
                },
              },
            },
            hovered: {
              type: J.Object,
              title: `Hover`,
              controls: {
                font: {
                  type: J.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontFamily: `Inter` },
                },
                textTransform: {
                  type: J.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.03)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
              },
            },
            selected: {
              type: J.Object,
              title: `Selected`,
              controls: {
                font: {
                  type: J.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
                },
                textTransform: {
                  type: J.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                color: { type: J.Color, title: `Text`, defaultValue: `#FFFFFF` },
                background: { type: J.Color, title: `BG`, defaultValue: `#000000` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
              },
            },
            outOfStock: {
              type: J.Object,
              title: `Out Of Stock`,
              controls: {
                preview: {
                  type: J.Boolean,
                  title: `Preview`,
                  enabledTitle: `On`,
                  disabledTitle: `Off`,
                  defaultValue: !1,
                },
                font: {
                  type: J.Font,
                  title: `Font`,
                  controls: `extended`,
                  defaultValue: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
                },
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 0.40)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.08)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(255, 255, 255, 1)`,
                    },
                  },
                },
                textTransform: {
                  type: J.Enum,
                  title: `Transform`,
                  options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
                  defaultValue: `None`,
                },
                strike: {
                  type: J.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: J.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    size: {
                      type: J.Enum,
                      title: `Size`,
                      options: [`text`, `container`],
                      optionTitles: [`Text`, `Container`],
                      defaultValue: `container`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                    color: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: J.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line || e.size === `text`,
                    },
                  },
                },
              },
            },
          },
        },
        dropdownConfigs: {
          type: J.Object,
          title: `Dropdown`,
          hidden: (e) => e.style !== `Dropdown`,
          controls: {
            font: { type: J.Font, title: `Font`, controls: `extended` },
            textTransform: {
              type: J.Enum,
              title: `Transform`,
              options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
              defaultValue: `None`,
            },
            unselected: {
              type: J.Object,
              title: `Unselected`,
              controls: {
                text: {
                  type: J.String,
                  title: `Text`,
                  defaultValue: `Select {{variant}}`,
                  description: `Use {{variant}} to insert the variant name`,
                },
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 0.48)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.08)`,
                    },
                  },
                },
              },
            },
            selected: {
              type: J.Object,
              title: `Selected`,
              controls: {
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
              },
            },
            hover: {
              type: J.Object,
              title: `Hover`,
              controls: {
                color: { type: J.Color, title: `Text`, defaultValue: `rgba(0, 0, 0, 1)` },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(0, 0, 0, 0.04)` },
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
              },
            },
            focus: {
              type: J.Object,
              title: `Focus`,
              controls: {
                width: {
                  type: J.Number,
                  title: `Width`,
                  defaultValue: 2,
                  min: 1,
                  max: 20,
                  step: 1,
                  displayStepper: !0,
                },
                offset: {
                  type: J.Number,
                  title: `Offset`,
                  defaultValue: 2,
                  min: 0,
                  max: 20,
                  step: 1,
                  displayStepper: !0,
                },
                color: { type: J.Color, title: `Color` },
              },
            },
            radius: { type: J.BorderRadius, title: `Radius`, defaultValue: `4px` },
            padding: { type: J.Padding, title: `Padding`, defaultValue: `16px 16px 16px 16px` },
            icon: {
              type: J.Object,
              title: `Icon`,
              controls: {
                type: {
                  type: J.Enum,
                  title: `Type`,
                  options: [`default`, `custom`],
                  optionTitles: [`Default`, `Custom`],
                  defaultValue: `default`,
                  displaySegmentedControl: !0,
                },
                color: {
                  type: J.Color,
                  title: `Color`,
                  defaultValue: `rgba(0, 0, 0, 1)`,
                  hidden: (e) => e.type === `custom`,
                },
                size: { type: J.Number, title: `Size`, defaultValue: 12, min: 8, max: 64, step: 1 },
                weight: {
                  type: J.Number,
                  title: `Weight`,
                  defaultValue: 2,
                  min: 0.5,
                  max: 4,
                  step: 0.5,
                  hidden: (e) => e.type === `custom`,
                },
                customIcon: { type: J.Image, title: `Image`, hidden: (e) => e.type !== `custom` },
              },
            },
          },
        },
        swatches: {
          type: J.Object,
          title: `Color Swatches`,
          controls: {
            colorEnabled: {
              type: J.Boolean,
              title: `Color`,
              defaultValue: !0,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show swatches for Color variants. Set hex codes in the plugin. [Learn more](https://framercommerce.com/resources/academy/variant-colors)`,
            },
            gap: {
              type: J.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.colorEnabled,
            },
            height: {
              type: J.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.colorEnabled,
            },
            width: {
              type: J.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.colorEnabled,
            },
            radius: {
              type: J.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.colorEnabled,
            },
            padding: {
              type: J.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.colorEnabled,
            },
            unselected: {
              type: J.Object,
              title: `Default`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            hovered: {
              type: J.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            selected: {
              type: J.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 1)`,
                    },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 1)` },
              },
              hidden: (e) => !e.colorEnabled,
            },
            outOfStock: {
              type: J.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `rgba(0,0,0,0)` },
                  },
                },
                opacity: {
                  type: J.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: J.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: J.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: J.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.colorEnabled,
            },
          },
        },
        colorTitles: {
          type: J.Array,
          title: `↳ Color Titles`,
          control: { type: J.String },
          defaultValue: [`Color`],
          hidden: (e) => !e.swatches?.colorEnabled,
        },
        colors: {
          type: J.Array,
          title: `↳ Color Values`,
          control: {
            type: J.Object,
            controls: {
              name: { type: J.String, title: `Name` },
              hex: { type: J.Color, title: `Color` },
            },
          },
          defaultValue: [
            [`green`, `#D0EF79`],
            [`blue`, `#053ECF`],
            [`pink`, `#CC7BE4`],
            [`black`, `#333233`],
          ],
          hidden: (e) => !e.swatches?.colorEnabled,
        },
        imageSwatches: {
          type: J.Object,
          title: `Image Swatches`,
          controls: {
            image: {
              type: J.Boolean,
              title: `Images`,
              defaultValue: !1,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show Image swatches for specific variants. [Learn more](https://framercommerce.com/resources/academy/variant-images)`,
            },
            imageStyles: {
              type: J.Enum,
              title: `Styles`,
              options: [`inherit`, `customize`],
              optionTitles: [`Inherit from Colors`, `Customize`],
              defaultValue: `inherit`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: (e) => !e.image,
            },
            imageGap: {
              type: J.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHeight: {
              type: J.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageWidth: {
              type: J.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageRadius: {
              type: J.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imagePadding: {
              type: J.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageUnselected: {
              type: J.Object,
              title: `Default`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `#FFFFFF` },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHovered: {
              type: J.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageSelected: {
              type: J.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFFFFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageOutOfStock: {
              type: J.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                opacity: {
                  type: J.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: J.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: J.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: J.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
          },
        },
        imageTitles: {
          type: J.Array,
          title: `↳ Image Titles`,
          control: { type: J.String },
          defaultValue: [],
          hidden: (e) => !e.imageSwatches?.image,
        },
        swatchImages: {
          type: J.Array,
          title: `↳ Image Values`,
          control: {
            type: J.Object,
            controls: {
              name: { type: J.String, title: `Name` },
              url: { type: J.String, title: `URL` },
            },
          },
          defaultValue: [],
          hidden: (e) => !e.imageSwatches?.image,
        },
        variantImages: {
          type: J.Object,
          title: `Variant Images`,
          controls: {
            image: {
              type: J.Boolean,
              title: `Images`,
              defaultValue: !1,
              enabledTitle: `On`,
              disabledTitle: `Off`,
              description: `Show variant images for specific variants. Uses the variant's associated image from the product data.`,
            },
            imageStyles: {
              type: J.Enum,
              title: `Styles`,
              options: [`inherit`, `customize`],
              optionTitles: [`Inherit from Images`, `Customize`],
              defaultValue: `inherit`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: (e) => !e.image,
            },
            imageGap: {
              type: J.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              step: 4,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHeight: {
              type: J.Number,
              title: `Height`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageWidth: {
              type: J.Number,
              title: `Width`,
              defaultValue: 40,
              min: 8,
              max: 80,
              step: 4,
              displayStepper: !0,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageRadius: {
              type: J.BorderRadius,
              title: `Radius`,
              defaultValue: `50%`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imagePadding: {
              type: J.Padding,
              title: `Padding`,
              defaultValue: `2px`,
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageUnselected: {
              type: J.Object,
              title: `Default`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `#FFFFFF` },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageHovered: {
              type: J.Object,
              title: `Hover`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                    },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageSelected: {
              type: J.Object,
              title: `Selected`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: { type: J.Color, title: `Color`, defaultValue: `#000000` },
                  },
                },
                background: { type: J.Color, title: `BG`, defaultValue: `#FFFFFF` },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
            imageOutOfStock: {
              type: J.Object,
              title: `Out of Stock`,
              controls: {
                border: {
                  type: J.Object,
                  title: `Border`,
                  controls: {
                    borderWidth: {
                      type: J.FusedNumber,
                      title: `Width`,
                      toggleKey: `isMixed`,
                      toggleTitles: [`All`, `Individual`],
                      valueKeys: [`top`, `right`, `bottom`, `left`],
                      valueLabels: [`T`, `R`, `B`, `L`],
                      min: 0,
                      defaultValue: 1,
                    },
                    borderStyle: {
                      type: J.Enum,
                      title: `Style`,
                      options: [`solid`, `dashed`, `dotted`, `double`],
                      optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                      defaultValue: `solid`,
                    },
                    borderColor: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0)`,
                    },
                  },
                },
                opacity: {
                  type: J.Number,
                  title: `Opacity`,
                  defaultValue: 0.5,
                  min: 0,
                  max: 1,
                  step: 0.1,
                },
                background: { type: J.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
                strike: {
                  type: J.Object,
                  title: `Strike`,
                  controls: {
                    line: {
                      type: J.Boolean,
                      title: `Line`,
                      enabledTitle: `Yes`,
                      disabledTitle: `No`,
                      defaultValue: !1,
                    },
                    color: {
                      type: J.Color,
                      title: `Color`,
                      defaultValue: `rgba(0, 0, 0, 0.16)`,
                      hidden: (e) => !e.line,
                    },
                    direction: {
                      type: J.Enum,
                      title: `Direction`,
                      options: [`horizontal`, `diagonal-up`, `diagonal-down`],
                      optionTitles: [`Horizontal`, `Diagonal Up`, `Diagonal Down`],
                      defaultValue: `diagonal-down`,
                      displaySegmentedControl: !0,
                      segmentedControlDirection: `vertical`,
                      hidden: (e) => !e.line,
                    },
                  },
                },
              },
              hidden: (e) => !e.image || e.imageStyles === `inherit`,
            },
          },
        },
        variantImageTitles: {
          type: J.Array,
          title: `↳ Variant Image Titles`,
          control: { type: J.String },
          defaultValue: [],
          hidden: (e) => !e.variantImages?.image,
        },
        ...(() => {
          let e = {};
          for (let t = 1; t <= 100; t++)
            e[`image${t}`] = {
              type: J.Image,
              title: `↳ Image ${t}`,
              hidden: (e) => !e.variantImages?.image || (t !== 1 && !e[`image${t - 1}`]),
            };
          return e;
        })(),
      }),
      (an.defaultProps = {
        shopifyProductID: ``,
        variantImageIds: ``,
        variants: ``,
        images: { imageTrigger: `None`, imageChange: !0, offsetY: 0 },
        behaviorConfigs: {
          autoSelectFirst: !1,
          showSingleVariants: !1,
          selectOutOfStock: !1,
          filterVariants: { variantGroups: `all`, variantTitles: [] },
          onClickAction: { action: `update`, purchaseType: `add to cart`, triggerCart: !0 },
        },
        style: `Buttons`,
        buttonConfigs: {
          gap: 8,
          radius: `4px`,
          padding: `8px`,
          direction: `horizontal`,
          width: !1,
          unselected: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(255, 255, 255, 1)`,
            border: `1px solid rgba(0,0,0,0.08)`,
            textTransform: `None`,
          },
          hovered: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(0, 0, 0, 0.03)`,
            border: `1px solid rgba(0, 0, 0, 1)`,
            textTransform: `None`,
          },
          selected: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(255, 255, 255, 1)`,
            background: `rgba(0, 0, 0, 1)`,
            border: `1px solid rgba(0, 0, 0, 1)`,
            textTransform: `None`,
          },
          outOfStock: {
            font: { fontSize: 14, fontWeight: 500, fontFamily: `Inter` },
            color: `rgba(0, 0, 0, 0.40)`,
            background: `rgba(0, 0, 0, 0.08)`,
            border: `1px solid rgba(255, 255, 255, 1)`,
            textTransform: `None`,
            preview: !1,
            strike: {
              line: !1,
              size: `container`,
              color: `rgba(0, 0, 0, 0.16)`,
              direction: `diagonal-down`,
            },
          },
        },
        dropdownConfigs: {
          font: void 0,
          textTransform: `None`,
          unselected: {
            text: `Select {{variant}}`,
            color: `rgba(0, 0, 0, 0.48)`,
            background: `rgba(255, 255, 255, 1)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0,0,0,0.08)` },
          },
          selected: {
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(255, 255, 255, 1)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0,0,0,1)` },
          },
          hover: {
            color: `rgba(0, 0, 0, 1)`,
            background: `rgba(0, 0, 0, 0.16)`,
            border: { borderWidth: 1, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
          },
          focus: { width: 2, offset: 2 },
          radius: `4px`,
          padding: `16px 16px 16px 16px`,
          icon: { type: `default`, color: `rgba(0, 0, 0, 1)`, size: 12, weight: 2 },
        },
        containerConfigs: { padding: `0px`, gap: 24, gap2: 8, direction: `vertical` },
        titleConfigs: {
          visible: !0,
          font: void 0,
          color: `rgba(0, 0, 0, 1)`,
          gap: 8,
          display: `{{Option}}`,
          textTransform: `None`,
        },
        selectedConfigs: {
          visible: !1,
          gap: 8,
          font: void 0,
          color: `rgba(0, 0, 0, 1)`,
          emptyVisible: !0,
          emptyText: `Select {{Option Value}}`,
          textTransform: `None`,
        },
        swatches: {
          colorEnabled: !0,
          gap: 8,
          height: 40,
          width: 40,
          radius: `50%`,
          padding: 2,
          unselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          hovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0,0,0,0.16)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          selected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          outOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
        imageSwatches: {
          image: !1,
          imageStyles: `inherit`,
          imageGap: 8,
          imageHeight: 40,
          imageWidth: 40,
          imageRadius: `50%`,
          imagePadding: 2,
          imageUnselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageHovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 0.20)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageSelected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageOutOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
        imageTitles: [],
        variantImageTitles: [],
        variantImages: {
          image: !1,
          imageStyles: `inherit`,
          imageGap: 8,
          imageHeight: 40,
          imageWidth: 40,
          imageRadius: `50%`,
          imagePadding: 2,
          imageUnselected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageHovered: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 0.20)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageSelected: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(0, 0, 0, 1)` },
            background: `rgba(255, 255, 255, 0)`,
          },
          imageOutOfStock: {
            border: { borderWidth: 2, borderStyle: `solid`, borderColor: `rgba(255, 255, 255, 1)` },
            opacity: 0,
            background: `rgba(255, 255, 255, 0)`,
            strike: { line: !1, color: `rgba(0, 0, 0, 0.16)`, direction: `diagonal-down` },
          },
        },
      }));
  });
function hn(e) {
  if (Y.current() === Y.canvas)
    return d(`div`, {
      style: {
        display: `inline-flex`,
        width: `auto`,
        boxSizing: `border-box`,
        alignItems: `center`,
        justifyContent: `center`,
        flexShrink: 0,
        flexGrow: 0,
      },
      children: d(`p`, {
        style: {
          ...e.font,
          color: e.textColor,
          margin: 0,
          padding: 0,
          lineHeight: 1,
          whiteSpace: `nowrap`,
        },
        children: e.textFormat.replace(`{{inventory}}`, `5`),
      }),
    });
  let { shopifyProductID: n, showOutOfStock: a, outOfStockText: s, noLimitText: c } = e,
    [l, f] = o(null),
    [p, m] = o(!1),
    h = t(null),
    [g, _] = o(!1),
    [v, y] = o({}),
    b = t(null);
  (r(() => {
    let t = (t) => {
      let n = t.detail?.productId,
        r = `gid://shopify/Product/${e.shopifyProductID}`;
      if (
        !(n && n !== r) &&
        !t.detail?.isPurchaseAction &&
        !(t.detail?.isCompleteVariant && t.detail?.allOptionsSelected) &&
        !(h.current && !t.detail?.isCompleteVariant) &&
        t.detail?.optionName &&
        t.detail?.value
      ) {
        y({ [t.detail.optionName]: t.detail.value });
        let n = { [t.detail.optionName]: t.detail.value },
          r = i.shopXtools?.products.find(
            ({ node: t }) => t.id === `gid://shopify/Product/${e.shopifyProductID}`
          );
        if (r) {
          let e = r.node?.variants?.edges.filter(({ node: e }) =>
            e?.selectedOptions?.every((e) => {
              let t = n[e.name];
              return !t || t === e.value;
            })
          );
          if (e.length > 0) {
            let t = e
              .map(({ node: e }) => e.quantityAvailable || 0)
              .filter((e) => e > 0)
              .reduce((e, t) => e + t, 0);
            ((b.current = t), f(t), m(!0));
            return;
          }
        }
      }
    };
    return (
      document.addEventListener(`variant_option_selected`, t),
      () => {
        document.removeEventListener(`variant_option_selected`, t);
      }
    );
  }, [e.shopifyProductID]),
    r(() => {
      let e = (e) => {
        if (!e.detail) return;
        let t = b.current;
        t != null && (f(t), m(!0));
      };
      return (
        i.addEventListener(`currency_changed`, e),
        () => {
          i.removeEventListener(`currency_changed`, e);
        }
      );
    }, [e.shopifyProductID]),
    r(() => {
      let e = (e) => {
        let t = e.detail,
          r = `gid://shopify/Product/${n}`;
        if (!t?.productId || t.productId !== r || e.detail.onClickAction === `purchase`) return;
        let i = t?.quantityAvailable;
        ((h.current = t.id), (b.current = t.quantityAvailable), m(!0), f(i), y({}));
      };
      return (
        document.addEventListener(`product__active-variant__changed`, e),
        () => {
          document.removeEventListener(`product__active-variant__changed`, e);
        }
      );
    }, [e.shopifyProductID]),
    r(() => {
      let e = (e) => {
        if (!h.current && !b.current && Array.isArray(e.detail.products)) {
          let t = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
          if (t) {
            let e = h.current;
            if (e) {
              let n = t.node.variants.edges.find(({ node: t }) => t.id === e)?.node;
              if (n) {
                (f(n.quantityAvailable), m(!0));
                return;
              }
            }
            if (g) {
              let e = t.node.variants.edges[0]?.node;
              if (e) {
                ((h.current = e.id), f(e.quantityAvailable), m(!0));
                return;
              }
            }
            if (!g && !h.current) {
              let e = t.node;
              if (e?.variants?.edges) {
                let t = e.variants.edges.map((e) => e.node),
                  n = t.length > 1,
                  r = t.reduce((e, t) => e + (t.quantityAvailable || 0), 0);
                (f(r), m(!n));
              }
            }
          }
        }
      };
      if (i?.shopXtools?.products && Array.isArray(i.shopXtools.products)) {
        let e = i.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
        if (e?.node) {
          let t = e.node,
            n = h.current;
          if (n) {
            let e = t.variants.edges.find(({ node: e }) => e.id === n)?.node;
            if (e) {
              (f(e.quantityAvailable), (b.current = e.quantityAvailable), m(!0));
              return;
            }
          }
          if (g) {
            let t = e.node.variants.edges.find((e) => e.node.availableForSale)?.node;
            if (t) {
              ((h.current = t.id),
                f(t.quantityAvailable),
                (b.current = t.quantityAvailable),
                m(!0));
              return;
            }
          }
          if (!g && !n && t?.variants?.edges) {
            let e = t.variants.edges.map((e) => e.node),
              n = e.length > 1,
              r = e.reduce((e, t) => e + (t.quantityAvailable || 0), 0);
            (f(r), (b.current = r), m(!n));
          }
        }
      }
      let t = (e) => {
        e.detail.shopifyProductID === `gid://shopify/Product/${n}` && _(e.detail.autoSelectFirst);
      };
      return (
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`auto_select_first_flag`, t),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`auto_select_first_flag`, t));
        }
      );
    }, [n, g]));
  let x = u(
    (e, t) => {
      if (t == null) return null;
      let r = i?.shopXtools?.products
        ?.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`)
        ?.node?.variants?.edges?.some(
          ({ node: e }) => e.availableForSale && e.quantityAvailable <= 0
        );
      return t <= 0
        ? r
          ? c
          : a
            ? s
            : null
        : e?.replace(`{{inventory}}`, t) || `${t} left in stock`;
    },
    [a, s, c, n]
  );
  return l === null && !a
    ? null
    : d(`div`, {
        style: {
          display: `inline-flex`,
          width: `auto`,
          boxSizing: `border-box`,
          alignItems: `center`,
          justifyContent: `center`,
          flexShrink: 0,
          flexGrow: 0,
        },
        children: d(`p`, {
          style: {
            ...e.font,
            color: e.textColor,
            margin: 0,
            padding: 0,
            lineHeight: 1,
            whiteSpace: `nowrap`,
          },
          children: x(e.textFormat, l),
        }),
      });
}
var gn = e(() => {
  (n(),
    h(),
    R(),
    _(),
    (hn.defaultProps = {
      shopifyProductID: ``,
      font: void 0,
      textColor: `#000`,
      textFormat: `{{inventory}} left in stock`,
      showOutOfStock: !0,
      outOfStockText: `Out of stock`,
      noLimitText: `In Stock`,
    }),
    U(hn, {
      shopifyProductID: { type: J.String, title: `Product ID`, description: `Connect to CMS` },
      font: { type: J.Font, title: `Font`, controls: `extended` },
      textColor: { type: J.Color, title: `Color`, defaultValue: `#000` },
      textFormat: {
        type: J.String,
        title: `Text Format`,
        defaultValue: `{{inventory}} left in stock`,
        description: `Use {{inventory}} to display the stock count`,
      },
      showOutOfStock: {
        type: J.Boolean,
        title: `Out of Stock`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
      outOfStockText: {
        type: J.String,
        title: `Out of Stock Text`,
        defaultValue: `Out of Stock`,
        hidden: (e) => !e.showOutOfStock,
      },
      noLimitText: {
        type: J.String,
        title: `No Limit Text`,
        defaultValue: `In Stock`,
        description: `If you have "Continue Selling When Out Of Stock" selected on Shopify, and the inventory reaches 0.`,
      },
    }));
});
function _n(e) {
  let { isPlus: t, activeContent: n, disabledContent: a, shopifyProductID: s } = e,
    c = t === `plus`,
    [l, u] = o(!0),
    [f, m] = o(0),
    [h, g] = o(1),
    [_, v] = o(null),
    [y, b] = o(!0),
    [x, S] = o(!1);
  r(() => {
    let e = (e) => {
      e.detail.shopifyProductID === `gid://shopify/Product/${s}` && S(e.detail.autoSelectFirst);
    };
    return (
      document.addEventListener(`auto_select_first_flag`, e),
      () => {
        document.removeEventListener(`auto_select_first_flag`, e);
      }
    );
  }, []);
  let C = async (e) => {
    let t = e.detail.currentQuantity || 0,
      n = e.detail.maxInventory || 0;
    if (i !== void 0 && i?.shopXtools?.products) {
      let r = Array.isArray(i.shopXtools?.products)
          ? i.shopXtools.products
          : Object.values(i.shopXtools?.products || {}),
        a = `gid://shopify/Product/${s}`,
        o = r.find((e) => e?.node?.id === a),
        c;
      o?.node?.variants?.edges?.length === 1
        ? ((c = o?.node?.variants?.edges[0]?.node), v(c))
        : ((c = e.detail.activeVariant), v(c));
      let l = c?.availableForSale ?? o?.node?.availableForSale ?? !0,
        u = n;
      if ((l && n <= 0 ? (u = 100) : l || (u = 0), l && o?.node?.handle))
        try {
          let e = await i.shopXtools?.handleCartMutation?.(_e, { handle: o.node.handle }),
            n = e?.product?.metafield_order_max?.value,
            r = i.shopXtools?.cart,
            a = e.product;
          if (n > 0) {
            if (r && a) {
              let e =
                  i.shopXtools.products
                    .find(({ node: e }) => e.id === a.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                o =
                  n -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              ((u = Math.max(0, Math.min(o, u))), m(u), g(t || 1), b(o === 0 || o === 1 ? !1 : l));
              return;
            }
            u = Math.min(parseInt(n, 10), u);
          } else if (r) {
            let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === c.id);
            if (e) {
              let t = e.node.quantity,
                n = c?.quantityAvailable <= 0 && c?.availableForSale ? 100 : c?.quantityAvailable,
                r = Math.max(0, n - t);
              ((u = Math.max(0, Math.min(r, u))), m(u), b(r === 0 || r === 1 ? !1 : l));
            }
          }
        } catch {}
      (m(u), g(t || 1), b(l));
    }
  };
  (r(() => {
    let e = async () => {
      if (i !== void 0 && i?.shopXtools?.products) {
        let e = Array.isArray(i.shopXtools?.products)
            ? i.shopXtools.products
            : Object.values(i.shopXtools?.products || {}),
          t = `gid://shopify/Product/${s}`,
          n = e.find((e) => e?.node?.id === t);
        if (n?.node?.handle)
          try {
            let e = await i.shopXtools?.handleCartMutation?.(_e, { handle: n.node.handle }),
              t = e?.product?.metafield_order_max?.value,
              r = i.shopXtools?.cart,
              a = e.product;
            if (t > 0 && r && a) {
              let e =
                  i.shopXtools.products
                    .find(({ node: e }) => e.id === a.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                n =
                  t -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              (m(Math.max(0, Math.min(n, 100))), b(!(n === 0 || n === 1)));
            } else if (!t && _ && r) {
              let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === _.id);
              if (e) {
                let t = e.node.quantity,
                  n = _.quantityAvailable <= 0 && _.availableForSale ? 100 : _.quantityAvailable,
                  r = Math.max(0, n - t);
                (m(Math.max(0, Math.min(r, 100))), b(!(r === 0 || r === 1)));
              }
            }
          } catch (e) {
            console.error(`Error updating quantity button state:`, e);
          }
      }
    };
    return (
      i.addEventListener(`shopXtools-cart-update`, e),
      () => {
        i.removeEventListener(`shopXtools-cart-update`, e);
      }
    );
  }, [s, _]),
    r(() => {
      let e = async (e) => {
        if (e.detail.productId !== `gid://shopify/Product/${s}`) return;
        let t = e.detail;
        if ((v(t), i !== void 0 && i?.shopXtools?.products)) {
          let e = Array.isArray(i.shopXtools?.products)
              ? i.shopXtools.products
              : Object.values(i.shopXtools?.products || {}),
            n = `gid://shopify/Product/${s}`,
            r = e.find((e) => e?.node?.id === n),
            a = t?.quantityAvailable ?? r?.node?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0,
            o = t?.availableForSale ?? r?.node?.availableForSale ?? !0,
            c = a;
          if ((o && a <= 0 ? (c = 100) : o || (c = 0), o && r?.node?.handle))
            try {
              let e = await i.shopXtools?.handleCartMutation?.(_e, { handle: r.node.handle }),
                n = e?.product?.metafield_order_max?.value,
                a = i.shopXtools?.cart,
                s = e.product;
              if (n > 0) {
                if (a && s) {
                  let e =
                      i.shopXtools.products
                        .find(({ node: e }) => e.id === s.id)
                        ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                    t =
                      n -
                      (
                        a?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                      ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                  ((c = Math.max(0, Math.min(t, c))), m(c), b(t === 0 || t === 1 ? !1 : o));
                  return;
                }
                c = Math.min(parseInt(n, 10), c);
              } else if (a) {
                let e = a?.lines?.edges?.find((e) => e?.node?.merchandise?.id === t.id);
                if (e) {
                  let n = e.node.quantity,
                    r =
                      t?.quantityAvailable <= 0 && t?.availableForSale ? 100 : t?.quantityAvailable,
                    i = Math.max(0, r - n);
                  ((c = Math.max(0, Math.min(i, c))), m(c), b(i === 0 || i === 1 ? !1 : o));
                } else (m(c), b(o));
              }
            } catch {}
          (m(c), b(o));
        }
      };
      return (
        (async () => {
          if (i !== void 0 && i?.shopXtools?.products) {
            let e = Array.isArray(i.shopXtools?.products)
                ? i.shopXtools.products
                : Object.values(i.shopXtools?.products || {}),
              t = `gid://shopify/Product/${s}`,
              n = e.find((e) => e?.node?.id === t),
              r,
              a,
              o;
            x || n?.node?.variants?.edges?.length === 1
              ? ((r = n?.node?.variants?.edges[0]?.node),
                (a = r?.quantityAvailable ?? 0),
                (o = r?.availableForSale ?? !0),
                _ || v(r))
              : n?.node?.variants?.edges?.length > 1 &&
                ((r = void 0),
                (a = (n?.node?.variants?.edges ?? []).reduce(
                  (e, { node: t }) => e + (t.quantityAvailable || 0),
                  0
                )),
                (o = n?.node?.availableForSale ?? !0),
                _ || v(r));
            let c = a;
            if ((o && a <= 0 ? (c = 100) : o || (c = 0), o && n?.node?.handle))
              try {
                let e = await i.shopXtools?.handleCartMutation?.(_e, { handle: n.node.handle }),
                  t = e?.product?.metafield_order_max?.value,
                  a = i.shopXtools?.cart,
                  s = e.product;
                if (t > 0) {
                  if (a && s) {
                    let e =
                        i.shopXtools.products
                          .find(({ node: e }) => e.id === s.id)
                          ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                      n =
                        t -
                        (
                          a?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                        ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                    ((c = Math.max(0, Math.min(n, c))), m(c), b(n === 0 || n === 1 ? !1 : o));
                    return;
                  }
                  c = Math.min(parseInt(t, 10), c);
                } else if (a) {
                  let e = a?.lines?.edges?.find((e) => e?.node?.merchandise?.id === r.id);
                  if (e) {
                    let t = e.node.quantity,
                      n =
                        r?.quantityAvailable <= 0 && r?.availableForSale
                          ? 100
                          : r?.quantityAvailable,
                      i = Math.max(0, n - t);
                    ((c = Math.max(0, Math.min(i, c))), m(c), b(i === 0 || i === 1 ? !1 : o));
                  } else (m(c), b(o));
                }
              } catch {}
          }
        })(),
        document.addEventListener(`product__active-variant__changed`, e),
        i.addEventListener(`FcQuantityStateUpdate`, C),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, e),
            i.removeEventListener(`FcQuantityStateUpdate`, C));
        }
      );
    }, [c, s, x]),
    r(() => {
      u(c ? !(y && h < f) : h <= 1);
    }, [h, f, y, c]));
  let w = async () => {
    if (!l && i !== void 0) {
      let e = Array.isArray(i.shopXtools?.products)
          ? i.shopXtools.products
          : Object.values(i.shopXtools?.products || {}),
        t = `gid://shopify/Product/${s}`;
      e.find((e) => e?.node?.id === t);
      let n = _;
      (n || (!n && i !== void 0 && i?.shopXtools?.products)) &&
        ((c && h < f) || (!c && h > 1)) &&
        (c ? h + 1 : h - 1,
        i.dispatchEvent(
          new CustomEvent(c ? `FcQuantityIncrement` : `FcQuantityDecrement`, {
            detail: { maxInventory: f, variantId: n?.id || null, productId: s, currentQuantity: h },
          })
        ));
    }
  };
  return d(`div`, {
    role: `button`,
    tabIndex: 0,
    style: { flex: 1, height: `100%`, cursor: l ? `not-allowed` : `pointer` },
    onClick: () => {
      l || w();
    },
    onKeyPress: (e) => {
      (e.key === `Enter` || e.key === ` `) && !l && w();
    },
    "aria-disabled": l,
    "aria-label": l ? `Button disabled` : `Button active`,
    children:
      !n?.[0] || !a?.[0]
        ? d(`div`, {
            style: {
              width: `100%`,
              height: `100%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              color: `#666`,
              fontSize: `14px`,
            },
            children: `Connect Instance`,
          })
        : p(l ? a[0] : n[0], {
            style: {
              ...(l ? a[0].props?.style : n[0].props?.style || {}),
              width: `100%`,
              height: `100%`,
            },
          }),
  });
}
var vn = e(() => {
  (n(),
    h(),
    _(),
    R(),
    je(),
    (_n.defaultProps = { shopifyProductID: ``, isPlus: `plus` }),
    U(_n, {
      shopifyProductID: { type: J.String, title: `Product ID`, description: `Connect to CMS` },
      isPlus: {
        type: J.Enum,
        title: `Action`,
        options: [`minus`, `plus`],
        optionTitles: [`➖`, `➕`],
        defaultValue: `plus`,
        displaySegmentedControl: !0,
      },
      activeContent: { type: J.ComponentInstance, title: `Active Button` },
      disabledContent: { type: J.ComponentInstance, title: `Disabled Button` },
    }));
});
function yn(e) {
  let { font: t, textColor: n = `#000000` } = e,
    { shopifyProductID: a } = e,
    [s, c] = o(1),
    [l, u] = o(0),
    [f, p] = o(null),
    m = i !== void 0,
    [h, g] = o(null);
  (r(() => {
    (c(1), u(0), p(null));
  }, [a]),
    r(() => {
      h && c(1);
    }, [h]),
    r(() => {
      if (!m) return;
      let e = (e) => {
        if (e.detail) {
          if (e.detail.productId !== `gid://shopify/Product/${a}`) return;
          g(e.detail);
          let t;
          (e.detail.quantityAvailable >= 0
            ? (t = e.detail.quantityAvailable)
            : e.detail.quantityAvailable < 0 && (t = 100),
            u(t),
            c(1),
            _(1));
        }
      };
      return (
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`product__inventory__changed`, e),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`product__inventory__changed`, e));
        }
      );
    }, [m, a, s]),
    r(() => {
      if (!m) return;
      let t = (t) => {
          if (t.detail?.productId && t.detail.productId !== a) return;
          let n = t.detail?.maxInventory,
            r = Math.min(f === null ? 1 / 0 : f, n === void 0 ? l : n);
          if ((u(r), s < r)) {
            let t = Math.min(s + 1, r);
            (c(t),
              _(t),
              t >= r &&
                i.dispatchEvent(
                  new CustomEvent(`quantityMaxReached`, {
                    detail: { productId: e.shopifyProductID, maxQuantity: r },
                  })
                ));
          } else
            i.dispatchEvent(
              new CustomEvent(`quantityMaxReached`, {
                detail: { productId: e.shopifyProductID, maxQuantity: r },
              })
            );
        },
        n = () => {
          let e = Math.max(s - 1, 1);
          (c(e), _(e));
        };
      return (
        i.addEventListener(`FcQuantityIncrement`, t),
        i.addEventListener(`FcQuantityDecrement`, n),
        () => {
          (i.removeEventListener(`FcQuantityIncrement`, t),
            i.removeEventListener(`FcQuantityDecrement`, n));
        }
      );
    }, [s, l, f, m, e.shopifyProductID]),
    r(() => {
      f !== null && s >= f && (c(f), _(f));
    }, [f, s]),
    r(() => {
      m &&
        i.dispatchEvent(
          new CustomEvent(`FcQuantityStateUpdate`, {
            detail: { currentQuantity: s, maxInventory: l, activeVariant: h },
          })
        );
    }, [s, l, m, h]),
    r(() => {
      let t = (t) => {
        let { productId: n, maxQuantity: r } = t.detail;
        n === e.shopifyProductID && p(r === 0 ? r : (r ?? null));
      };
      return (
        i.addEventListener(`setMaxQuantity`, t),
        () => i.removeEventListener(`setMaxQuantity`, t)
      );
    }, [e.shopifyProductID]),
    r(() => {
      let e = () => {
        (p(null), c(1), _(1));
      };
      return (
        i.addEventListener(`shopXtools-cart-update`, e),
        () => i.removeEventListener(`shopXtools-cart-update`, e)
      );
    }, []));
  let _ = (e) => {
    m && i.dispatchEvent(new CustomEvent(`FcQuantitySelectorchanges`, { detail: e }));
  };
  return d(`div`, {
    style: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `100%`,
      height: `100%`,
    },
    children: d(`p`, { style: { margin: `0`, textAlign: `center`, color: n, ...t }, children: s }),
  });
}
var bn = e(() => {
    (n(),
      h(),
      _(),
      R(),
      (yn.defaultProps = { textColor: `#000000` }),
      U(yn, {
        shopifyProductID: { type: J.String, title: `Product ID`, description: `Connect to CMS` },
        textColor: { type: J.Color, title: `Text Color` },
        font: { type: J.Font, title: `Font`, controls: `extended` },
      }));
  }),
  xn,
  Sn,
  Cn,
  wn = e(() => {
    ((xn = (e) => e),
      (Cn = (e) => (
        (Sn ||= xn(e.createElement(`path`, { d: `M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z` }), `Home`)),
        Sn
      )));
  }),
  Tn = e(() => {
    (wn(), wn());
  });
function En(e) {
  let {
      color: n,
      selectByList: i,
      iconSearch: a,
      iconSelection: s,
      onClick: u,
      onMouseDown: f,
      onMouseUp: p,
      onMouseEnter: m,
      onMouseLeave: h,
      mirrored: g,
      style: _,
    } = e,
    v = t(!1),
    y = rt(An, i, a, s, Nn),
    x = Mn.map((t) => e[t]),
    S = c(() => {
      let t = kn[y];
      if (!t) return;
      let n = e[`iconStyle${t}`];
      if (n !== `Filled`) return n;
    }, [...x]),
    [C, w] = o(y === `Home` ? Cn(l) : null);
  async function T() {
    if (typeof kn[y] != `number`) {
      w(null);
      return;
    }
    try {
      let e = await import(`${On}${y}${S || ``}.js@0.0.32`);
      v.current && w(e.default(l));
    } catch {
      v.current && w(null);
    }
  }
  r(
    () => (
      (v.current = !0),
      T(),
      () => {
        v.current = !1;
      }
    ),
    [y, ...x]
  );
  let E = Y.current() === Y.canvas ? d(et, {}) : null;
  return d(b.div, {
    style: { display: `contents` },
    onClick: u,
    onMouseEnter: m,
    onMouseLeave: h,
    onMouseDown: f,
    onMouseUp: p,
    children: C
      ? d(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: n,
            flexShrink: 0,
            transform: g ? `scale(-1, 1)` : void 0,
            ..._,
          },
          focusable: `false`,
          viewBox: `0 0 24 24`,
          color: n,
          children: C,
        })
      : E,
  });
}
function Dn(e, t) {
  let { selectByList: n, iconSearch: r, iconSelection: i } = e,
    a = parseInt(t),
    o = tt(An, n, r, i, Nn),
    s = kn[o];
  return !s || a === 0 || s !== a;
}
var On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn = e(() => {
    (h(),
      _(),
      R(),
      at(),
      Tn(),
      $e(),
      (On = `https://framer.com/m/material-icons/`),
      (kn = {
        AcUnit: 15,
        AccessAlarm: 15,
        AccessAlarms: 15,
        AccessTime: 15,
        AccessTimeFilled: 0,
        Accessibility: 7,
        AccessibilityNew: 0,
        Accessible: 15,
        AccessibleForward: 0,
        AccountBalance: 2,
        AccountBalanceWallet: 0,
        AccountBox: 15,
        AccountCircle: 7,
        AccountTree: 15,
        AdUnits: 15,
        Adb: 15,
        Add: 15,
        AddAPhoto: 15,
        AddAlarm: 15,
        AddAlert: 15,
        AddBox: 15,
        AddBusiness: 15,
        AddCircle: 15,
        AddCircleOutline: 0,
        AddComment: 15,
        AddIcCall: 15,
        AddLink: 15,
        AddLocation: 15,
        AddLocationAlt: 2,
        AddModerator: 15,
        AddPhotoAlternate: 0,
        AddReaction: 15,
        AddRoad: 15,
        AddShoppingCart: 2,
        AddTask: 15,
        AddToDrive: 15,
        AddToHomeScreen: 2,
        AddToPhotos: 15,
        AddToQueue: 15,
        Addchart: 15,
        Adjust: 15,
        AdminPanelSettings: 0,
        Agriculture: 15,
        Air: 15,
        AirlineSeatFlat: 2,
        AirplaneTicket: 2,
        AirplanemodeActive: 0,
        AirplanemodeInactive: 0,
        Airplay: 15,
        AirportShuttle: 2,
        Alarm: 15,
        AlarmAdd: 15,
        AlarmOff: 15,
        AlarmOn: 15,
        Album: 15,
        AlignHorizontalLeft: 0,
        AlignHorizontalRight: 0,
        AlignVerticalBottom: 0,
        AlignVerticalCenter: 0,
        AlignVerticalTop: 0,
        AllInbox: 15,
        AllInclusive: 15,
        AllOut: 15,
        AltRoute: 15,
        AlternateEmail: 2,
        Analytics: 15,
        Anchor: 15,
        Android: 15,
        Animation: 15,
        Announcement: 15,
        Aod: 15,
        Apartment: 15,
        Api: 15,
        AppBlocking: 15,
        AppRegistration: 2,
        AppSettingsAlt: 2,
        Apple: 0,
        Approval: 15,
        Apps: 15,
        Architecture: 15,
        Archive: 15,
        ArrowBack: 15,
        ArrowBackIos: 15,
        ArrowBackIosNew: 2,
        ArrowCircleDown: 2,
        ArrowCircleUp: 7,
        ArrowDownward: 7,
        ArrowDropDown: 7,
        ArrowDropDownCircle: 0,
        ArrowDropUp: 15,
        ArrowForward: 15,
        ArrowForwardIos: 2,
        ArrowLeft: 15,
        ArrowRight: 15,
        ArrowRightAlt: 7,
        ArrowUpward: 15,
        ArtTrack: 15,
        Article: 15,
        AspectRatio: 15,
        Assessment: 15,
        Assignment: 15,
        AssignmentInd: 7,
        AssignmentLate: 2,
        AssignmentReturn: 0,
        AssignmentReturned: 0,
        AssignmentTurnedIn: 0,
        Assistant: 15,
        AssistantDirection: 0,
        AssistantPhoto: 2,
        Atm: 15,
        AttachEmail: 15,
        AttachFile: 15,
        AttachMoney: 15,
        Attachment: 15,
        Attractions: 15,
        Attribution: 15,
        Audiotrack: 15,
        AutoAwesome: 15,
        AutoAwesomeMosaic: 0,
        AutoAwesomeMotion: 0,
        AutoDelete: 15,
        AutoFixHigh: 15,
        AutoFixNormal: 7,
        AutoFixOff: 15,
        AutoGraph: 15,
        AutoStories: 15,
        AutofpsSelect: 7,
        Autorenew: 15,
        AvTimer: 15,
        BabyChangingStation: 0,
        Backpack: 15,
        Backspace: 15,
        Backup: 15,
        BackupTable: 15,
        Badge: 15,
        BakeryDining: 15,
        Balcony: 15,
        Ballot: 15,
        BarChart: 15,
        BatchPrediction: 2,
        Bathroom: 15,
        Bathtub: 15,
        Battery20: 15,
        Battery30: 15,
        Battery50: 15,
        Battery60: 15,
        Battery80: 15,
        Battery90: 15,
        BatteryAlert: 15,
        BatteryCharging20: 0,
        BatteryCharging30: 0,
        BatteryCharging50: 0,
        BatteryCharging60: 0,
        BatteryCharging80: 0,
        BatteryCharging90: 0,
        BatteryChargingFull: 0,
        BatteryFull: 15,
        BatterySaver: 15,
        BatteryStd: 15,
        BatteryUnknown: 2,
        BeachAccess: 15,
        Bed: 15,
        BedroomBaby: 15,
        BedroomChild: 15,
        BedroomParent: 7,
        Bedtime: 15,
        Beenhere: 15,
        Bento: 15,
        BikeScooter: 15,
        Biotech: 15,
        Blender: 15,
        Block: 15,
        Bloodtype: 15,
        Bluetooth: 15,
        BluetoothAudio: 2,
        BluetoothConnected: 0,
        BluetoothDisabled: 0,
        BluetoothDrive: 2,
        BluetoothSearching: 0,
        BlurCircular: 15,
        BlurLinear: 15,
        BlurOff: 15,
        BlurOn: 15,
        Bolt: 15,
        Book: 15,
        BookOnline: 15,
        Bookmark: 15,
        BookmarkAdd: 15,
        BookmarkAdded: 7,
        BookmarkBorder: 2,
        BookmarkRemove: 2,
        Bookmarks: 15,
        BorderAll: 15,
        BorderBottom: 15,
        BorderClear: 15,
        BorderColor: 15,
        BorderHorizontal: 0,
        BorderInner: 15,
        BorderLeft: 15,
        BorderOuter: 15,
        BorderRight: 15,
        BorderStyle: 15,
        BorderTop: 15,
        BorderVertical: 2,
        BrandingWatermark: 0,
        BreakfastDining: 2,
        Brightness1: 15,
        Brightness2: 15,
        Brightness3: 15,
        Brightness4: 15,
        Brightness5: 15,
        Brightness6: 15,
        Brightness7: 15,
        BrightnessAuto: 2,
        BrightnessHigh: 2,
        BrightnessLow: 7,
        BrightnessMedium: 0,
        BrokenImage: 15,
        BrowserNotSupported: 0,
        BrunchDining: 15,
        Brush: 15,
        BubbleChart: 15,
        BugReport: 15,
        Build: 15,
        BuildCircle: 15,
        Bungalow: 15,
        BurstMode: 15,
        BusAlert: 15,
        Business: 15,
        BusinessCenter: 2,
        Cabin: 15,
        Cable: 15,
        Cached: 15,
        Cake: 15,
        Calculate: 15,
        CalendarToday: 7,
        CalendarViewDay: 2,
        CalendarViewMonth: 0,
        CalendarViewWeek: 0,
        Call: 15,
        CallEnd: 15,
        CallMade: 15,
        CallMerge: 15,
        CallMissed: 15,
        CallMissedOutgoing: 0,
        CallReceived: 15,
        CallSplit: 15,
        CallToAction: 15,
        Camera: 15,
        CameraAlt: 15,
        CameraEnhance: 7,
        CameraFront: 15,
        CameraIndoor: 15,
        CameraOutdoor: 7,
        CameraRear: 15,
        CameraRoll: 15,
        Cameraswitch: 15,
        Campaign: 15,
        Cancel: 15,
        CancelPresentation: 0,
        CancelScheduleSend: 0,
        CarRental: 15,
        CarRepair: 15,
        CardGiftcard: 15,
        CardMembership: 2,
        CardTravel: 15,
        Carpenter: 15,
        Cases: 15,
        Casino: 15,
        Cast: 15,
        CastConnected: 7,
        CastForEducation: 0,
        CatchingPokemon: 2,
        Category: 15,
        Celebration: 15,
        CellWifi: 15,
        CenterFocusStrong: 0,
        CenterFocusWeak: 2,
        Chair: 15,
        ChairAlt: 15,
        Chalet: 15,
        ChangeCircle: 15,
        ChangeHistory: 7,
        ChargingStation: 2,
        Chat: 15,
        ChatBubble: 15,
        ChatBubbleOutline: 0,
        Check: 15,
        CheckBox: 15,
        CheckBoxOutlineBlank: 0,
        CheckCircle: 15,
        CheckCircleOutline: 0,
        Checkroom: 15,
        ChevronLeft: 15,
        ChevronRight: 15,
        ChildCare: 15,
        ChildFriendly: 7,
        ChromeReaderMode: 0,
        Circle: 15,
        CircleNotifications: 0,
        Class: 15,
        CleanHands: 15,
        CleaningServices: 0,
        Clear: 15,
        ClearAll: 15,
        Close: 15,
        CloseFullscreen: 2,
        ClosedCaption: 7,
        ClosedCaptionOff: 0,
        Cloud: 15,
        CloudCircle: 15,
        CloudDone: 15,
        CloudDownload: 7,
        CloudOff: 15,
        CloudQueue: 15,
        CloudUpload: 15,
        Code: 15,
        CodeOff: 15,
        Coffee: 15,
        CoffeeMaker: 15,
        Collections: 15,
        CollectionsBookmark: 0,
        ColorLens: 15,
        Colorize: 15,
        Comment: 15,
        CommentBank: 15,
        Commute: 15,
        Compare: 15,
        CompareArrows: 7,
        CompassCalibration: 0,
        Compress: 15,
        Computer: 15,
        ConfirmationNumber: 0,
        ConnectedTv: 15,
        Construction: 15,
        ContactMail: 15,
        ContactPage: 15,
        ContactPhone: 15,
        ContactSupport: 2,
        Contactless: 15,
        Contacts: 15,
        ContentCopy: 15,
        ContentCut: 15,
        ContentPaste: 15,
        ContentPasteOff: 2,
        ControlCamera: 7,
        ControlPoint: 15,
        CopyAll: 15,
        Copyright: 15,
        Coronavirus: 15,
        CorporateFare: 7,
        Cottage: 15,
        Countertops: 15,
        Create: 15,
        CreateNewFolder: 2,
        CreditCard: 15,
        CreditCardOff: 7,
        CreditScore: 15,
        Crib: 15,
        Crop: 15,
        Crop169: 15,
        Crop32: 15,
        Crop54: 15,
        Crop75: 15,
        CropDin: 15,
        CropFree: 15,
        CropLandscape: 7,
        CropOriginal: 15,
        CropPortrait: 15,
        CropRotate: 15,
        CropSquare: 15,
        Dangerous: 15,
        DarkMode: 15,
        Dashboard: 15,
        DashboardCustomize: 0,
        DataSaverOff: 15,
        DataSaverOn: 15,
        DataUsage: 15,
        DateRange: 15,
        Deck: 15,
        Dehaze: 15,
        Delete: 15,
        DeleteForever: 7,
        DeleteOutline: 7,
        DeleteSweep: 15,
        DeliveryDining: 2,
        DepartureBoard: 2,
        Description: 15,
        DesignServices: 2,
        DesktopMac: 15,
        DesktopWindows: 2,
        Details: 15,
        DeveloperBoard: 2,
        DeveloperBoardOff: 0,
        DeveloperMode: 7,
        DeviceHub: 15,
        DeviceThermostat: 0,
        DeviceUnknown: 7,
        Devices: 15,
        DevicesOther: 15,
        DialerSip: 15,
        Dialpad: 15,
        Dining: 15,
        DinnerDining: 15,
        Directions: 15,
        DirectionsBike: 2,
        DirectionsBoat: 2,
        DirectionsBoatFilled: 0,
        DirectionsBus: 7,
        DirectionsBusFilled: 0,
        DirectionsCar: 7,
        DirectionsCarFilled: 0,
        DirectionsOff: 7,
        DirectionsRailway: 0,
        DirectionsRun: 7,
        DirectionsSubway: 0,
        DirectionsTransit: 0,
        DirectionsWalk: 2,
        DirtyLens: 15,
        DisabledByDefault: 0,
        DiscFull: 15,
        Dns: 15,
        DoDisturb: 15,
        DoDisturbAlt: 15,
        DoDisturbOff: 15,
        DoDisturbOn: 15,
        DoNotDisturb: 15,
        DoNotDisturbAlt: 2,
        DoNotDisturbOff: 2,
        DoNotDisturbOn: 2,
        DoNotStep: 15,
        DoNotTouch: 15,
        Dock: 15,
        DocumentScanner: 2,
        Domain: 15,
        DomainDisabled: 2,
        DomainVerification: 0,
        Done: 15,
        DoneAll: 15,
        DoneOutline: 15,
        DonutLarge: 15,
        DonutSmall: 15,
        DoorBack: 15,
        DoorFront: 15,
        DoorSliding: 15,
        Doorbell: 15,
        DoubleArrow: 15,
        DownhillSkiing: 2,
        Download: 15,
        DownloadDone: 15,
        DownloadForOffline: 0,
        Downloading: 15,
        Drafts: 15,
        DragHandle: 15,
        DragIndicator: 7,
        DriveEta: 15,
        DriveFileMove: 7,
        DriveFolderUpload: 0,
        Dry: 15,
        DryCleaning: 15,
        Duo: 15,
        Dvr: 15,
        DynamicFeed: 15,
        DynamicForm: 15,
        EMobiledata: 15,
        Earbuds: 15,
        EarbudsBattery: 2,
        East: 15,
        Eco: 15,
        EdgesensorHigh: 2,
        EdgesensorLow: 7,
        Edit: 15,
        EditAttributes: 2,
        EditLocation: 15,
        EditLocationAlt: 2,
        EditNotifications: 0,
        EditOff: 15,
        EditRoad: 15,
        EightK: 15,
        EightKPlus: 15,
        EightMp: 15,
        EightteenMp: 15,
        Eject: 15,
        Elderly: 15,
        ElectricBike: 15,
        ElectricCar: 15,
        ElectricMoped: 7,
        ElectricRickshaw: 0,
        ElectricScooter: 2,
        ElectricalServices: 0,
        Elevator: 15,
        ElevenMp: 15,
        Email: 15,
        EmojiEmotions: 7,
        EmojiEvents: 15,
        EmojiFlags: 15,
        EmojiFoodBeverage: 0,
        EmojiNature: 15,
        EmojiObjects: 15,
        EmojiPeople: 15,
        EmojiSymbols: 15,
        EmojiTransportation: 0,
        Engineering: 15,
        EnhancedEncryption: 0,
        Equalizer: 15,
        Error: 15,
        ErrorOutline: 15,
        Escalator: 15,
        EscalatorWarning: 0,
        Euro: 15,
        EuroSymbol: 15,
        EvStation: 15,
        Event: 15,
        EventAvailable: 2,
        EventBusy: 15,
        EventNote: 15,
        EventSeat: 15,
        ExitToApp: 15,
        Expand: 15,
        ExpandLess: 15,
        ExpandMore: 15,
        Explicit: 15,
        Explore: 15,
        ExploreOff: 15,
        Exposure: 15,
        Extension: 15,
        ExtensionOff: 15,
        Face: 15,
        FaceRetouchingOff: 0,
        Facebook: 15,
        FactCheck: 15,
        FamilyRestroom: 2,
        FastForward: 15,
        FastRewind: 15,
        Fastfood: 15,
        Favorite: 15,
        FavoriteBorder: 2,
        FeaturedPlayList: 0,
        FeaturedVideo: 7,
        Feed: 15,
        Feedback: 15,
        Female: 15,
        Fence: 15,
        Festival: 15,
        FiberDvr: 15,
        FiberManualRecord: 0,
        FiberNew: 15,
        FiberPin: 15,
        FiberSmartRecord: 0,
        FileCopy: 15,
        FileDownload: 15,
        FileDownloadDone: 0,
        FileDownloadOff: 2,
        FilePresent: 15,
        FileUpload: 15,
        Filter: 15,
        Filter1: 15,
        Filter2: 15,
        Filter3: 15,
        Filter4: 15,
        Filter5: 15,
        Filter6: 15,
        Filter7: 15,
        Filter8: 15,
        Filter9: 15,
        Filter9Plus: 15,
        FilterAlt: 15,
        FilterBAndW: 15,
        FilterCenterFocus: 0,
        FilterDrama: 15,
        FilterFrames: 15,
        FilterHdr: 15,
        FilterList: 15,
        FilterNone: 15,
        FilterTiltShift: 2,
        FilterVintage: 7,
        FindInPage: 15,
        FindReplace: 15,
        Fingerprint: 15,
        FireExtinguisher: 0,
        Fireplace: 15,
        FirstPage: 15,
        FitScreen: 15,
        FitnessCenter: 7,
        FiveG: 15,
        FiveK: 15,
        FiveKPlus: 15,
        FiveMp: 15,
        FivteenMp: 15,
        Flag: 15,
        Flaky: 15,
        Flare: 15,
        FlashAuto: 15,
        FlashOff: 15,
        FlashOn: 15,
        FlashlightOff: 7,
        FlashlightOn: 15,
        Flatware: 15,
        Flight: 15,
        FlightLand: 15,
        FlightTakeoff: 7,
        Flip: 15,
        FlipCameraAndroid: 0,
        FlipCameraIos: 7,
        FlipToBack: 15,
        FlipToFront: 15,
        Flourescent: 15,
        FlutterDash: 15,
        FmdBad: 15,
        FmdGood: 15,
        Folder: 15,
        FolderOpen: 15,
        FolderShared: 15,
        FolderSpecial: 7,
        FollowTheSigns: 2,
        FontDownload: 15,
        FontDownloadOff: 2,
        FoodBank: 15,
        FormatAlignCenter: 0,
        FormatAlignJustify: 0,
        FormatAlignLeft: 2,
        FormatAlignRight: 0,
        FormatBold: 15,
        FormatClear: 15,
        FormatColorFill: 2,
        FormatColorReset: 0,
        FormatColorText: 2,
        FormatIndentDecrease: 0,
        FormatIndentIncrease: 0,
        FormatItalic: 15,
        FormatLineSpacing: 0,
        FormatListBulleted: 0,
        FormatListNumbered: 0,
        FormatPaint: 15,
        FormatQuote: 15,
        FormatShapes: 15,
        FormatSize: 15,
        FormatStrikethrough: 0,
        FormatUnderlined: 0,
        Forum: 15,
        Forward: 15,
        Forward10: 15,
        Forward30: 15,
        Forward5: 15,
        ForwardToInbox: 2,
        Foundation: 15,
        FourGMobiledata: 2,
        FourGPlusMobiledata: 0,
        FourK: 15,
        FourKPlus: 15,
        FourMp: 15,
        FourteenMp: 15,
        FreeBreakfast: 7,
        Fullscreen: 15,
        FullscreenExit: 2,
        Functions: 15,
        GMobiledata: 15,
        GTranslate: 15,
        Gamepad: 15,
        Games: 15,
        Garage: 15,
        Gavel: 15,
        Gesture: 15,
        GetApp: 15,
        Gif: 15,
        GitHub: 0,
        Gite: 15,
        GolfCourse: 15,
        Google: 0,
        GppBad: 15,
        GppGood: 15,
        GppMaybe: 15,
        GpsFixed: 15,
        GpsNotFixed: 15,
        GpsOff: 15,
        Grade: 15,
        Gradient: 15,
        Grading: 15,
        Grain: 15,
        GraphicEq: 15,
        Grass: 15,
        Grid3x3: 15,
        Grid4x4: 15,
        GridGoldenratio: 2,
        GridOff: 15,
        GridOn: 15,
        GridView: 15,
        Group: 15,
        GroupAdd: 15,
        GroupWork: 15,
        Groups: 15,
        HMobiledata: 15,
        HPlusMobiledata: 2,
        Hail: 15,
        Handyman: 15,
        Hardware: 15,
        Hd: 15,
        HdrAuto: 15,
        HdrAutoSelect: 7,
        HdrEnhancedSelect: 0,
        HdrOff: 15,
        HdrOffSelect: 15,
        HdrOn: 15,
        HdrOnSelect: 15,
        HdrPlus: 15,
        HdrStrong: 15,
        HdrWeak: 15,
        Headphones: 15,
        HeadphonesBattery: 0,
        Headset: 15,
        HeadsetMic: 15,
        HeadsetOff: 15,
        Healing: 15,
        HealthAndSafety: 2,
        Hearing: 15,
        HearingDisabled: 2,
        Height: 15,
        Help: 15,
        HelpCenter: 15,
        HelpOutline: 15,
        Hevc: 15,
        HideImage: 15,
        HideSource: 15,
        HighQuality: 15,
        Highlight: 15,
        HighlightAlt: 15,
        HighlightOff: 15,
        Hiking: 15,
        History: 15,
        HistoryEdu: 15,
        HistoryToggleOff: 0,
        HolidayVillage: 2,
        Home: 15,
        HomeMax: 15,
        HomeMini: 15,
        HomeRepairService: 0,
        HomeWork: 15,
        HorizontalRule: 2,
        HorizontalSplit: 2,
        HotTub: 15,
        Hotel: 15,
        HourglassBottom: 2,
        HourglassDisabled: 0,
        HourglassEmpty: 2,
        HourglassFull: 7,
        HourglassTop: 15,
        House: 15,
        HouseSiding: 15,
        Houseboat: 15,
        HowToReg: 15,
        HowToVote: 15,
        Http: 15,
        Https: 15,
        Hvac: 15,
        IceSkating: 15,
        Icecream: 15,
        Image: 15,
        ImageAspectRatio: 0,
        ImageNotSupported: 0,
        ImageSearch: 15,
        ImagesearchRoller: 0,
        ImportContacts: 2,
        ImportExport: 15,
        ImportantDevices: 0,
        Inbox: 15,
        Info: 15,
        Input: 15,
        InsertChart: 15,
        InsertComment: 7,
        InsertDriveFile: 2,
        InsertEmoticon: 2,
        InsertInvitation: 0,
        InsertLink: 15,
        InsertPhoto: 15,
        Insights: 15,
        Instagram: 0,
        Inventory: 15,
        Inventory2: 15,
        InvertColors: 15,
        InvertColorsOff: 2,
        IosShare: 15,
        Iron: 15,
        Iso: 15,
        Kayaking: 15,
        Keyboard: 15,
        KeyboardAlt: 15,
        KeyboardArrowDown: 0,
        KeyboardArrowLeft: 0,
        KeyboardArrowRight: 0,
        KeyboardArrowUp: 2,
        KeyboardBackspace: 0,
        KeyboardCapslock: 0,
        KeyboardHide: 15,
        KeyboardReturn: 2,
        KeyboardTab: 15,
        KeyboardVoice: 7,
        KingBed: 15,
        Kitchen: 15,
        Kitesurfing: 15,
        Label: 15,
        LabelImportant: 2,
        LabelOff: 15,
        Landscape: 15,
        Language: 15,
        Laptop: 15,
        LaptopChromebook: 0,
        LaptopMac: 15,
        LaptopWindows: 7,
        LastPage: 15,
        Launch: 15,
        Layers: 15,
        LayersClear: 15,
        Leaderboard: 15,
        LeakAdd: 15,
        LeakRemove: 15,
        LegendToggle: 15,
        Lens: 15,
        LensBlur: 15,
        LibraryAdd: 15,
        LibraryAddCheck: 2,
        LibraryBooks: 15,
        LibraryMusic: 15,
        Light: 15,
        LightMode: 15,
        Lightbulb: 15,
        LineStyle: 15,
        LineWeight: 15,
        LinearScale: 15,
        Link: 15,
        LinkOff: 15,
        LinkedCamera: 15,
        LinkedIn: 0,
        Liquor: 15,
        List: 15,
        ListAlt: 15,
        LiveHelp: 15,
        LiveTv: 15,
        Living: 15,
        LocalActivity: 7,
        LocalAirport: 15,
        LocalAtm: 15,
        LocalBar: 15,
        LocalCafe: 15,
        LocalCarWash: 15,
        LocalDining: 15,
        LocalDrink: 15,
        LocalFireDepartment: 0,
        LocalFlorist: 15,
        LocalGasStation: 2,
        LocalGroceryStore: 0,
        LocalHospital: 7,
        LocalHotel: 15,
        LocalLaundryService: 0,
        LocalLibrary: 15,
        LocalMall: 15,
        LocalMovies: 15,
        LocalOffer: 15,
        LocalParking: 15,
        LocalPharmacy: 7,
        LocalPhone: 15,
        LocalPizza: 15,
        LocalPlay: 15,
        LocalPolice: 15,
        LocalPostOffice: 2,
        LocalPrintshop: 2,
        LocalSee: 15,
        LocalShipping: 7,
        LocalTaxi: 15,
        LocationCity: 15,
        LocationDisabled: 0,
        LocationOff: 15,
        LocationOn: 15,
        LocationSearching: 0,
        Lock: 15,
        LockClock: 15,
        LockOpen: 15,
        Login: 15,
        Logout: 15,
        Looks: 15,
        Looks3: 15,
        Looks4: 15,
        Looks5: 15,
        Looks6: 15,
        LooksOne: 15,
        LooksTwo: 15,
        Loop: 15,
        Loupe: 15,
        LowPriority: 15,
        Loyalty: 15,
        LteMobiledata: 7,
        LtePlusMobiledata: 0,
        Luggage: 15,
        LunchDining: 15,
        Mail: 15,
        MailOutline: 15,
        Male: 15,
        ManageAccounts: 2,
        ManageSearch: 15,
        Map: 15,
        MapsHomeWork: 15,
        MapsUgc: 15,
        Margin: 15,
        MarkAsUnread: 15,
        MarkChatRead: 15,
        MarkChatUnread: 2,
        MarkEmailRead: 7,
        MarkEmailUnread: 2,
        Markunread: 15,
        MarkunreadMailbox: 0,
        Masks: 15,
        Maximize: 15,
        MediaBluetoothOff: 0,
        MediaBluetoothOn: 0,
        Mediation: 15,
        MedicalServices: 2,
        Medication: 15,
        MeetingRoom: 15,
        Memory: 15,
        Menu: 15,
        MenuBook: 15,
        MenuOpen: 15,
        MergeType: 15,
        Message: 15,
        Mic: 15,
        MicExternalOff: 2,
        MicExternalOn: 7,
        MicNone: 15,
        MicOff: 15,
        Microwave: 15,
        MilitaryTech: 15,
        Minimize: 15,
        MissedVideoCall: 2,
        Mms: 15,
        MobileFriendly: 2,
        MobileOff: 15,
        MobileScreenShare: 0,
        MobiledataOff: 7,
        Mode: 15,
        ModeComment: 15,
        ModeEdit: 15,
        ModeEditOutline: 2,
        ModeNight: 15,
        ModeStandby: 15,
        ModelTraining: 7,
        MonetizationOn: 2,
        Money: 15,
        MoneyOff: 15,
        MoneyOffCsred: 7,
        Monitor: 15,
        MonitorWeight: 7,
        MonochromePhotos: 0,
        Mood: 15,
        MoodBad: 15,
        Moped: 15,
        More: 15,
        MoreHoriz: 15,
        MoreTime: 15,
        MoreVert: 15,
        MotionPhotosAuto: 0,
        MotionPhotosOff: 2,
        Mouse: 15,
        MoveToInbox: 15,
        Movie: 15,
        MovieCreation: 7,
        MovieFilter: 15,
        Moving: 15,
        Mp: 15,
        MultilineChart: 2,
        MultipleStop: 15,
        Museum: 15,
        MusicNote: 15,
        MusicOff: 15,
        MusicVideo: 15,
        MyLocation: 15,
        Nat: 15,
        Nature: 15,
        NaturePeople: 15,
        NavigateBefore: 2,
        NavigateNext: 15,
        Navigation: 15,
        NearMe: 15,
        NearMeDisabled: 2,
        NearbyError: 15,
        NearbyOff: 15,
        NetworkCell: 15,
        NetworkCheck: 15,
        NetworkLocked: 7,
        NetworkWifi: 15,
        NewReleases: 15,
        NextPlan: 15,
        NextWeek: 15,
        Nfc: 15,
        NightShelter: 15,
        Nightlife: 15,
        Nightlight: 15,
        NightlightRound: 2,
        NightsStay: 15,
        NineK: 15,
        NineKPlus: 15,
        NineMp: 15,
        NineteenMp: 15,
        NoAccounts: 15,
        NoBackpack: 15,
        NoCell: 15,
        NoDrinks: 15,
        NoEncryption: 15,
        NoFlash: 15,
        NoFood: 15,
        NoLuggage: 15,
        NoMeals: 15,
        NoMeetingRoom: 7,
        NoPhotography: 7,
        NoSim: 15,
        NoStroller: 15,
        NoTransfer: 15,
        NordicWalking: 7,
        North: 15,
        NorthEast: 15,
        NorthWest: 15,
        NotAccessible: 7,
        NotInterested: 7,
        NotListedLocation: 0,
        NotStarted: 15,
        Note: 15,
        NoteAdd: 15,
        NoteAlt: 15,
        Notes: 15,
        NotificationAdd: 2,
        Notifications: 7,
        NotificationsActive: 0,
        NotificationsNone: 0,
        NotificationsOff: 0,
        NotificationsPaused: 0,
        OfflineBolt: 15,
        OfflinePin: 15,
        OfflineShare: 15,
        OndemandVideo: 7,
        OneK: 15,
        OneKPlus: 15,
        OneKk: 15,
        OnlinePrediction: 0,
        Opacity: 15,
        OpenInBrowser: 7,
        OpenInFull: 15,
        OpenInNew: 15,
        OpenInNewOff: 15,
        OpenWith: 15,
        OtherHouses: 15,
        Outbound: 15,
        Outbox: 15,
        OutdoorGrill: 15,
        Outlet: 15,
        Padding: 15,
        Pages: 15,
        Pageview: 15,
        Paid: 15,
        Palette: 15,
        PanTool: 15,
        Panorama: 15,
        PanoramaFishEye: 2,
        PanoramaHorizontal: 0,
        PanoramaPhotosphere: 0,
        PanoramaVertical: 0,
        PanoramaWideAngle: 0,
        Paragliding: 15,
        Park: 15,
        PartyMode: 15,
        Password: 15,
        Pattern: 15,
        Pause: 15,
        PauseCircle: 15,
        PauseCircleFilled: 0,
        PauseCircleOutline: 0,
        PausePresentation: 0,
        Payment: 15,
        Payments: 15,
        PedalBike: 15,
        Pending: 15,
        PendingActions: 2,
        People: 15,
        PeopleAlt: 15,
        PeopleOutline: 7,
        PermCameraMic: 7,
        PermContactCalendar: 0,
        PermDataSetting: 2,
        PermIdentity: 15,
        PermMedia: 15,
        PermPhoneMsg: 15,
        PermScanWifi: 15,
        Person: 15,
        PersonAdd: 15,
        PersonAddAlt: 15,
        PersonAddAlt1: 7,
        PersonAddDisabled: 0,
        PersonOff: 15,
        PersonOutline: 7,
        PersonPin: 15,
        PersonPinCircle: 2,
        PersonRemove: 15,
        PersonRemoveAlt1: 0,
        PersonSearch: 15,
        PersonalVideo: 7,
        PestControl: 15,
        PestControlRodent: 0,
        Pets: 15,
        Phone: 15,
        PhoneAndroid: 15,
        PhoneCallback: 7,
        PhoneDisabled: 7,
        PhoneEnabled: 15,
        PhoneForwarded: 2,
        PhoneInTalk: 15,
        PhoneIphone: 15,
        PhoneLocked: 15,
        PhoneMissed: 15,
        PhonePaused: 15,
        Phonelink: 15,
        PhonelinkErase: 2,
        PhonelinkLock: 7,
        PhonelinkOff: 15,
        PhonelinkRing: 7,
        PhonelinkSetup: 2,
        Photo: 15,
        PhotoAlbum: 15,
        PhotoCamera: 15,
        PhotoCameraBack: 2,
        PhotoCameraFront: 0,
        PhotoFilter: 15,
        PhotoLibrary: 15,
        PhotoSizeSelectLarge: 0,
        PhotoSizeSelectSmall: 0,
        Piano: 15,
        PianoOff: 15,
        PictureAsPdf: 15,
        PictureInPicture: 0,
        PictureInPictureAlt: 0,
        PieChart: 15,
        PieChartOutline: 2,
        Pin: 15,
        PinDrop: 15,
        Pinterest: 0,
        PivotTableChart: 2,
        Place: 15,
        Plagiarism: 15,
        PlayArrow: 15,
        PlayCircle: 15,
        PlayCircleFilled: 0,
        PlayCircleOutline: 0,
        PlayDisabled: 15,
        PlayForWork: 15,
        PlayLesson: 15,
        PlaylistAdd: 15,
        PlaylistAddCheck: 0,
        PlaylistPlay: 15,
        Plumbing: 15,
        PlusOne: 15,
        Podcasts: 15,
        PointOfSale: 15,
        Policy: 15,
        Poll: 15,
        Pool: 15,
        PortableWifiOff: 2,
        Portrait: 15,
        PostAdd: 15,
        Power: 15,
        PowerInput: 15,
        PowerOff: 15,
        PowerSettingsNew: 0,
        PregnantWoman: 7,
        PresentToAll: 15,
        Preview: 15,
        PriceChange: 15,
        PriceCheck: 15,
        Print: 15,
        PrintDisabled: 7,
        PriorityHigh: 15,
        PrivacyTip: 15,
        Psychology: 15,
        Public: 15,
        PublicOff: 15,
        Publish: 15,
        PublishedWithChanges: 0,
        PushPin: 15,
        QrCode: 15,
        QrCode2: 15,
        QrCodeScanner: 7,
        QueryBuilder: 15,
        QueryStats: 15,
        QuestionAnswer: 2,
        Queue: 15,
        QueueMusic: 15,
        QueuePlayNext: 7,
        Quickreply: 15,
        Quiz: 15,
        RMobiledata: 15,
        Radar: 15,
        Radio: 15,
        RadioButtonChecked: 0,
        RadioButtonUnchecked: 0,
        RailwayAlert: 15,
        RamenDining: 15,
        RateReview: 15,
        RawOff: 15,
        RawOn: 15,
        ReadMore: 15,
        Receipt: 15,
        ReceiptLong: 15,
        RecentActors: 15,
        Recommend: 15,
        RecordVoiceOver: 2,
        Reddit: 0,
        Redeem: 15,
        Redo: 15,
        ReduceCapacity: 2,
        Refresh: 15,
        RememberMe: 15,
        Remove: 15,
        RemoveCircle: 15,
        RemoveCircleOutline: 0,
        RemoveDone: 15,
        RemoveFromQueue: 2,
        RemoveModerator: 2,
        RemoveRedEye: 15,
        RemoveShoppingCart: 0,
        Reorder: 15,
        Repeat: 15,
        RepeatOn: 15,
        RepeatOne: 15,
        RepeatOneOn: 15,
        Replay: 15,
        Replay10: 15,
        Replay30: 15,
        Replay5: 15,
        ReplayCircleFilled: 0,
        Reply: 15,
        ReplyAll: 15,
        Report: 15,
        ReportGmailerrorred: 0,
        ReportOff: 15,
        ReportProblem: 7,
        RequestPage: 15,
        RequestQuote: 15,
        ResetTv: 15,
        RestartAlt: 15,
        Restaurant: 15,
        RestaurantMenu: 2,
        Restore: 15,
        RestoreFromTrash: 0,
        RestorePage: 15,
        Reviews: 15,
        RiceBowl: 15,
        RingVolume: 15,
        Roofing: 15,
        Room: 15,
        RoomPreferences: 2,
        RoomService: 15,
        Rotate90DegreesCcw: 0,
        RotateLeft: 15,
        RotateRight: 15,
        Router: 15,
        Rowing: 15,
        RssFeed: 15,
        Rsvp: 15,
        Rtt: 15,
        Rule: 15,
        RuleFolder: 15,
        RunCircle: 15,
        RunningWithErrors: 0,
        RvHookup: 15,
        SafetyDivider: 7,
        Sailing: 15,
        Sanitizer: 15,
        Satellite: 15,
        Save: 15,
        SaveAlt: 15,
        SavedSearch: 15,
        Savings: 15,
        Scanner: 15,
        ScatterPlot: 15,
        Schedule: 15,
        ScheduleSend: 15,
        Schema: 15,
        School: 15,
        Science: 15,
        Score: 15,
        ScreenLockLandscape: 0,
        ScreenLockPortrait: 0,
        ScreenLockRotation: 0,
        ScreenRotation: 2,
        ScreenSearchDesktop: 0,
        ScreenShare: 15,
        Screenshot: 15,
        Sd: 15,
        SdCard: 15,
        SdCardAlert: 15,
        SdStorage: 15,
        Search: 15,
        SearchOff: 15,
        Security: 15,
        SecurityUpdate: 2,
        SecurityUpdateGood: 0,
        Segment: 15,
        SelectAll: 15,
        SelfImprovement: 2,
        Sell: 15,
        Send: 15,
        SendAndArchive: 2,
        SendToMobile: 15,
        SensorDoor: 15,
        SensorWindow: 15,
        Sensors: 15,
        SensorsOff: 15,
        SentimentNeutral: 0,
        SentimentSatisfied: 0,
        SetMeal: 15,
        Settings: 15,
        SettingsApplications: 0,
        SettingsBluetooth: 0,
        SettingsBrightness: 0,
        SettingsCell: 15,
        SettingsEthernet: 0,
        SettingsInputAntenna: 0,
        SettingsInputHdmi: 0,
        SettingsInputSvideo: 0,
        SettingsOverscan: 0,
        SettingsPhone: 7,
        SettingsPower: 7,
        SettingsRemote: 2,
        SettingsSuggest: 2,
        SettingsVoice: 7,
        SevenK: 15,
        SevenKPlus: 15,
        SevenMp: 15,
        SeventeenMp: 15,
        Share: 15,
        ShareLocation: 7,
        Shield: 15,
        Shop: 15,
        Shop2: 15,
        ShopTwo: 15,
        ShoppingBag: 15,
        ShoppingBasket: 2,
        ShoppingCart: 15,
        ShortText: 15,
        Shortcut: 15,
        ShowChart: 15,
        Shower: 15,
        Shuffle: 15,
        ShuffleOn: 15,
        ShutterSpeed: 15,
        Sick: 15,
        SignalCellular0Bar: 0,
        SignalCellular1Bar: 0,
        SignalCellular2Bar: 0,
        SignalCellular3Bar: 0,
        SignalCellular4Bar: 0,
        SignalCellularAlt: 0,
        SignalCellularNoSim: 0,
        SignalCellularNodata: 0,
        SignalCellularNull: 0,
        SignalCellularOff: 0,
        SignalWifi0Bar: 2,
        SignalWifi1Bar: 2,
        SignalWifi1BarLock: 0,
        SignalWifi2Bar: 2,
        SignalWifi2BarLock: 0,
        SignalWifi3Bar: 2,
        SignalWifi3BarLock: 0,
        SignalWifi4Bar: 2,
        SignalWifi4BarLock: 0,
        SignalWifiBad: 7,
        SignalWifiOff: 7,
        SimCard: 15,
        SimCardAlert: 15,
        SimCardDownload: 2,
        SingleBed: 15,
        Sip: 15,
        SixK: 15,
        SixKPlus: 15,
        SixMp: 15,
        SixteenMp: 15,
        SixtyFps: 15,
        SixtyFpsSelect: 2,
        Skateboarding: 7,
        SkipNext: 15,
        SkipPrevious: 15,
        Sledding: 15,
        Slideshow: 15,
        SlowMotionVideo: 2,
        SmartButton: 15,
        SmartDisplay: 15,
        SmartScreen: 15,
        SmartToy: 15,
        Smartphone: 15,
        SmokeFree: 15,
        SmokingRooms: 15,
        Sms: 15,
        SmsFailed: 15,
        SnippetFolder: 7,
        Snooze: 15,
        Snowboarding: 15,
        Snowmobile: 15,
        Snowshoeing: 15,
        Soap: 15,
        SocialDistance: 2,
        Sort: 15,
        SortByAlpha: 15,
        Source: 15,
        South: 15,
        SouthEast: 15,
        SouthWest: 15,
        Spa: 15,
        SpaceBar: 15,
        Speaker: 15,
        SpeakerGroup: 15,
        SpeakerNotes: 15,
        SpeakerNotesOff: 2,
        SpeakerPhone: 15,
        Speed: 15,
        Spellcheck: 15,
        Splitscreen: 15,
        Sports: 15,
        SportsBar: 15,
        SportsBaseball: 2,
        SportsBasketball: 0,
        SportsCricket: 7,
        SportsEsports: 7,
        SportsFootball: 2,
        SportsGolf: 15,
        SportsHandball: 2,
        SportsHockey: 15,
        SportsKabaddi: 7,
        SportsMma: 15,
        SportsMotorsports: 0,
        SportsRugby: 15,
        SportsScore: 15,
        SportsSoccer: 15,
        SportsTennis: 15,
        SportsVolleyball: 0,
        SquareFoot: 15,
        StackedBarChart: 2,
        StackedLineChart: 0,
        Stairs: 15,
        Star: 15,
        StarBorder: 15,
        StarBorderPurple500: 0,
        StarHalf: 15,
        StarOutline: 15,
        StarPurple500: 7,
        StarRate: 15,
        Stars: 15,
        StayCurrentLandscape: 0,
        StayCurrentPortrait: 0,
        StayPrimaryLandscape: 0,
        StayPrimaryPortrait: 0,
        StickyNote2: 15,
        Stop: 15,
        StopCircle: 15,
        StopScreenShare: 2,
        Storage: 15,
        Store: 15,
        StoreMallDirectory: 0,
        Storefront: 15,
        Storm: 15,
        Straighten: 15,
        Stream: 15,
        Streetview: 15,
        StrikethroughS: 2,
        Stroller: 15,
        Style: 15,
        Subject: 15,
        Subscript: 15,
        Subscriptions: 7,
        Subtitles: 15,
        SubtitlesOff: 15,
        Subway: 15,
        Summarize: 15,
        Superscript: 15,
        SupervisedUserCircle: 0,
        SupervisorAccount: 0,
        Support: 15,
        SupportAgent: 15,
        Surfing: 15,
        SurroundSound: 7,
        SwapCalls: 15,
        SwapHoriz: 15,
        SwapHorizontalCircle: 0,
        SwapVert: 15,
        SwapVerticalCircle: 0,
        Swipe: 15,
        SwitchAccount: 7,
        SwitchCamera: 15,
        SwitchLeft: 15,
        SwitchRight: 15,
        SwitchVideo: 15,
        Sync: 15,
        SyncAlt: 15,
        SyncDisabled: 15,
        SyncProblem: 15,
        SystemSecurityUpdate: 0,
        SystemUpdate: 15,
        SystemUpdateAlt: 2,
        Tab: 15,
        TabUnselected: 7,
        TableChart: 15,
        TableRows: 15,
        TableView: 15,
        Tablet: 15,
        TabletAndroid: 7,
        TabletMac: 15,
        Tag: 15,
        TagFaces: 15,
        TakeoutDining: 7,
        TapAndPlay: 15,
        Tapas: 15,
        Task: 15,
        TaskAlt: 15,
        TaxiAlert: 15,
        Telegram: 0,
        TenMp: 15,
        Terrain: 15,
        TextFields: 15,
        TextFormat: 15,
        TextRotateUp: 15,
        TextRotateVertical: 0,
        TextRotationAngleup: 0,
        TextRotationDown: 0,
        TextRotationNone: 0,
        TextSnippet: 15,
        Textsms: 15,
        Texture: 15,
        TheaterComedy: 7,
        Theaters: 15,
        Thermostat: 15,
        ThermostatAuto: 2,
        ThirteenMp: 15,
        ThirtyFps: 15,
        ThirtyFpsSelect: 2,
        ThreeDRotation: 2,
        ThreeGMobiledata: 0,
        ThreeK: 15,
        ThreeKPlus: 15,
        ThreeMp: 15,
        ThreeP: 15,
        ThreeSixty: 15,
        ThumbDown: 15,
        ThumbDownAlt: 15,
        ThumbDownOffAlt: 2,
        ThumbUp: 15,
        ThumbUpAlt: 15,
        ThumbUpOffAlt: 7,
        ThumbsUpDown: 15,
        TimeToLeave: 15,
        Timelapse: 15,
        Timeline: 15,
        Timer: 15,
        Timer10: 15,
        Timer10Select: 7,
        Timer3: 15,
        Timer3Select: 15,
        TimerOff: 15,
        TimesOneMobiledata: 0,
        Title: 15,
        Toc: 15,
        Today: 15,
        ToggleOff: 15,
        ToggleOn: 15,
        Toll: 15,
        Tonality: 15,
        Topic: 15,
        TouchApp: 15,
        Tour: 15,
        Toys: 15,
        TrackChanges: 15,
        Traffic: 15,
        Train: 15,
        Tram: 15,
        Transform: 15,
        Transgender: 15,
        TransitEnterexit: 0,
        Translate: 15,
        TravelExplore: 7,
        TrendingDown: 15,
        TrendingFlat: 15,
        TrendingUp: 15,
        TripOrigin: 15,
        Try: 15,
        Tty: 15,
        Tune: 15,
        Tungsten: 15,
        TurnedIn: 15,
        TurnedInNot: 15,
        Tv: 15,
        TvOff: 15,
        TwelveMp: 15,
        TwentyFourMp: 15,
        TwentyOneMp: 15,
        TwentyThreeMp: 7,
        TwentyTwoMp: 15,
        TwentyZeroMp: 15,
        Twitter: 0,
        TwoK: 15,
        TwoKPlus: 15,
        TwoMp: 15,
        TwoWheeler: 15,
        Umbrella: 15,
        Unarchive: 15,
        Undo: 15,
        UnfoldLess: 15,
        UnfoldMore: 15,
        Unpublished: 15,
        Unsubscribe: 15,
        Upcoming: 15,
        Update: 15,
        UpdateDisabled: 2,
        Upgrade: 15,
        Upload: 15,
        UploadFile: 15,
        Usb: 15,
        UsbOff: 15,
        Verified: 15,
        VerifiedUser: 15,
        VerticalAlignBottom: 0,
        VerticalAlignCenter: 0,
        VerticalAlignTop: 0,
        VerticalSplit: 7,
        Vibration: 15,
        VideoCall: 15,
        VideoCameraBack: 2,
        VideoCameraFront: 0,
        VideoLabel: 15,
        VideoLibrary: 15,
        VideoSettings: 7,
        VideoStable: 15,
        Videocam: 15,
        VideocamOff: 15,
        VideogameAsset: 2,
        VideogameAssetOff: 0,
        ViewAgenda: 15,
        ViewArray: 15,
        ViewCarousel: 15,
        ViewColumn: 15,
        ViewComfy: 15,
        ViewCompact: 15,
        ViewDay: 15,
        ViewHeadline: 15,
        ViewInAr: 15,
        ViewList: 15,
        ViewModule: 15,
        ViewQuilt: 15,
        ViewSidebar: 15,
        ViewStream: 15,
        ViewWeek: 15,
        Vignette: 15,
        Villa: 15,
        Visibility: 15,
        VisibilityOff: 7,
        VoiceChat: 15,
        VoiceOverOff: 15,
        Voicemail: 15,
        VolumeDown: 15,
        VolumeMute: 15,
        VolumeOff: 15,
        VolumeUp: 15,
        VolunteerActivism: 0,
        VpnKey: 15,
        VpnLock: 15,
        Vrpano: 15,
        Wallpaper: 15,
        Warning: 15,
        WarningAmber: 15,
        Wash: 15,
        Watch: 15,
        WatchLater: 15,
        Water: 15,
        WaterDamage: 15,
        WaterfallChart: 2,
        Waves: 15,
        WbAuto: 15,
        WbCloudy: 15,
        WbIncandescent: 2,
        WbIridescent: 15,
        WbShade: 15,
        WbSunny: 15,
        WbTwilight: 15,
        Wc: 15,
        Web: 15,
        WebAsset: 15,
        WebAssetOff: 15,
        Weekend: 15,
        West: 15,
        WhatsApp: 0,
        Whatshot: 15,
        WheelchairPickup: 0,
        WhereToVote: 15,
        Widgets: 15,
        Wifi: 15,
        WifiCalling: 15,
        WifiCalling3: 15,
        WifiLock: 15,
        WifiOff: 15,
        WifiProtectedSetup: 0,
        WifiTethering: 7,
        WifiTetheringOff: 0,
        Window: 15,
        WineBar: 15,
        Work: 15,
        WorkOff: 15,
        WorkOutline: 15,
        Workspaces: 15,
        WrapText: 15,
        WrongLocation: 7,
        Wysiwyg: 15,
        Yard: 15,
        YouTube: 0,
        YoutubeSearchedFor: 0,
        ZoomIn: 15,
        ZoomOut: 15,
        ZoomOutMap: 15,
      }),
      (An = Object.keys(kn)),
      (jn = {
        15: [`Filled`, `TwoTone`, `Sharp`, `Rounded`, `Outlined`],
        7: [`Filled`, `TwoTone`, `Sharp`, `Rounded`],
        2: [`Filled`, `Sharp`],
      }),
      (Mn = Object.keys(jn).map((e) => `iconStyle${e}`)),
      (Nn = An.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (En.displayName = `Material`),
      (En.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `Home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        weight: `Filled`,
        mirrored: !1,
      }),
      U(En, {
        selectByList: {
          type: J.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: En.defaultProps.selectByList,
        },
        iconSelection: {
          type: J.Enum,
          options: An,
          defaultValue: En.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Material site](https://fonts.google.com/icons)`,
        },
        iconSearch: {
          type: J.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: J.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: En.defaultProps.mirrored,
        },
        color: { type: J.Color, title: `Color`, defaultValue: En.defaultProps.color },
        ...Object.keys(jn).reduce(
          (e, t) => (
            (e[`iconStyle${t}`] = {
              type: J.Enum,
              title: `Style`,
              defaultValue: `Filled`,
              options: jn[t],
              hidden: (e) => Dn(e, t),
            }),
            e
          ),
          {}
        ),
        ...it,
      }));
  });
function Fn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn = e(() => {
    (h(),
      R(),
      w(),
      _(),
      Pn(),
      (In = k(En)),
      (Ln = [`i9scvqvmF`, `CKBu0Tc_z`, `LfgCsmSh3`, `POS9EHrPf`]),
      (Rn = `framer-85MdA`),
      (zn = {
        CKBu0Tc_z: `framer-v-1ogfjod`,
        i9scvqvmF: `framer-v-ij5vsq`,
        LfgCsmSh3: `framer-v-133v10w`,
        POS9EHrPf: `framer-v-1dw6s9w`,
      }),
      (Bn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Vn = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (Hn = b.create(a)),
      (Un = {
        "minus-disabled": `POS9EHrPf`,
        "plus-disabled": `LfgCsmSh3`,
        minus: `CKBu0Tc_z`,
        plus: `i9scvqvmF`,
      }),
      (Wn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Un[r.variant] ?? r.variant ?? `i9scvqvmF`,
      })),
      (Gn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kn = D(
        f(function (e, n) {
          let { activeLocale: r, setLocale: i } = ee(),
            { style: a, className: o, layoutId: s, variant: c, ...l } = Wn(e),
            {
              baseVariant: u,
              classNames: f,
              clearLoadingGesture: p,
              gestureHandlers: m,
              gestureVariant: h,
              isLoading: g,
              setGestureState: _,
              setVariant: v,
              variants: x,
            } = F({
              cycleOrder: Ln,
              defaultVariant: `i9scvqvmF`,
              variant: c,
              variantClassNames: zn,
            }),
            S = Gn(e, x),
            w = t(null),
            T = y(),
            E = [];
          return (
            te(),
            d(C, {
              id: s ?? T,
              children: d(Hn, {
                animate: x,
                initial: !1,
                children: d(Vn, {
                  value: Bn,
                  children: d(b.div, {
                    ...l,
                    ...m,
                    className: M(Rn, ...E, `framer-ij5vsq`, o, f),
                    "data-framer-name": `plus`,
                    layoutDependency: S,
                    layoutId: `i9scvqvmF`,
                    ref: n ?? w,
                    style: {
                      backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...a,
                    },
                    ...Fn(
                      {
                        CKBu0Tc_z: { "data-framer-name": `minus` },
                        LfgCsmSh3: { "data-framer-name": `plus-disabled` },
                        POS9EHrPf: { "data-framer-name": `minus-disabled` },
                      },
                      u,
                      h
                    ),
                    children: d(H, {
                      children: d(b.div, {
                        className: `framer-1ymglqg-container`,
                        layoutDependency: S,
                        layoutId: `jM5kXjmtQ-container`,
                        children: d(En, {
                          color: `var(--token-2de60d55-30ed-45f4-87e6-158824b868d3, rgb(0, 0, 0))`,
                          height: `100%`,
                          iconSearch: `Home`,
                          iconSelection: `Add`,
                          iconStyle15: `Sharp`,
                          iconStyle2: `Filled`,
                          iconStyle7: `Filled`,
                          id: `jM5kXjmtQ`,
                          layoutId: `jM5kXjmtQ`,
                          mirrored: !1,
                          selectByList: !0,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                          ...Fn(
                            {
                              CKBu0Tc_z: { iconSelection: `Remove` },
                              LfgCsmSh3: {
                                color: `var(--token-32039339-f64a-42c6-a8f4-f7fdfa12eb53, rgba(0, 0, 0, 0.16))`,
                              },
                              POS9EHrPf: {
                                color: `var(--token-32039339-f64a-42c6-a8f4-f7fdfa12eb53, rgba(0, 0, 0, 0.16))`,
                                iconSelection: `Remove`,
                              },
                            },
                            u,
                            h
                          ),
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-85MdA.framer-trji2q, .framer-85MdA .framer-trji2q { display: block; }`,
          `.framer-85MdA.framer-ij5vsq { height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-85MdA .framer-1ymglqg-container { flex: none; height: 18px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 18px / 2); width: 18px; }`,
          `.framer-85MdA.framer-v-1ogfjod.framer-ij5vsq, .framer-85MdA.framer-v-133v10w.framer-ij5vsq, .framer-85MdA.framer-v-1dw6s9w.framer-ij5vsq { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 40px); }`,
        ],
        `framer-85MdA`
      )),
      (Kn.displayName = `FC Quantity / UI Buttons`),
      (Kn.defaultProps = { height: 40, width: 40 }),
      U(Kn, {
        variant: {
          options: [`i9scvqvmF`, `CKBu0Tc_z`, `LfgCsmSh3`, `POS9EHrPf`],
          optionTitles: [`plus`, `minus`, `plus-disabled`, `minus-disabled`],
          title: `Variant`,
          type: J.Enum,
        },
      }),
      T(Kn, [{ explicitInter: !0, fonts: [] }, ...In], { supportsExplicitInterCodegen: !0 }));
  }),
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar = e(() => {
    (h(),
      R(),
      w(),
      _(),
      vn(),
      bn(),
      qn(),
      (Jn = k(Kn)),
      (Yn = k(_n)),
      (Xn = k(yn)),
      (Zn = `framer-0q3sE`),
      (Qn = { VMW7YuWV7: `framer-v-574100` }),
      ($n = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (er = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (tr = b.create(a)),
      (nr = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        bVhYNmEzi: n ?? i.bVhYNmEzi,
      })),
      (rr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ir = D(
        f(function (e, n) {
          let { activeLocale: r, setLocale: i } = ee(),
            { style: a, className: o, layoutId: s, variant: c, bVhYNmEzi: l, ...u } = nr(e),
            {
              baseVariant: f,
              classNames: p,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: v,
              setGestureState: x,
              setVariant: S,
              variants: w,
            } = F({ defaultVariant: `VMW7YuWV7`, variant: c, variantClassNames: Qn }),
            T = rr(e, w),
            E = t(null),
            D = y(),
            O = [];
          return (
            te(),
            d(C, {
              id: s ?? D,
              children: d(tr, {
                animate: w,
                initial: !1,
                children: d(er, {
                  value: $n,
                  children: m(b.div, {
                    ...u,
                    ...g,
                    className: M(Zn, ...O, `framer-574100`, o, p),
                    "data-border": !0,
                    "data-framer-name": `Variant 1`,
                    layoutDependency: T,
                    layoutId: `VMW7YuWV7`,
                    ref: n ?? E,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-ae8ee2a3-db43-4346-aa65-c9685dfafd51, rgba(231, 236, 229, 0.64))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      ...a,
                    },
                    children: [
                      d(H, {
                        children: d(b.div, {
                          className: `framer-1g0d91m-container`,
                          layoutDependency: T,
                          layoutId: `UqH93zmKC-container`,
                          children: d(_n, {
                            activeContent: [
                              d(H, {
                                height: 40,
                                width: `40px`,
                                children: d(b.div, {
                                  className: `framer-3q5j5o-container`,
                                  "data-framer-name": `minus-active`,
                                  layoutDependency: T,
                                  layoutId: `MmoHlXo2k-container`,
                                  name: `minus-active`,
                                  children: d(Kn, {
                                    height: `100%`,
                                    id: `MmoHlXo2k`,
                                    layoutId: `MmoHlXo2k`,
                                    name: `minus-active`,
                                    variant: `CKBu0Tc_z`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            disabledContent: [
                              d(H, {
                                height: 40,
                                width: `40px`,
                                children: d(b.div, {
                                  className: `framer-srquiz-container`,
                                  "data-framer-name": `minus-disabled`,
                                  layoutDependency: T,
                                  layoutId: `RTmOo_TOH-container`,
                                  name: `minus-disabled`,
                                  children: d(Kn, {
                                    height: `100%`,
                                    id: `RTmOo_TOH`,
                                    layoutId: `RTmOo_TOH`,
                                    name: `minus-disabled`,
                                    variant: `POS9EHrPf`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            height: `100%`,
                            id: `UqH93zmKC`,
                            isPlus: `minus`,
                            layoutId: `UqH93zmKC`,
                            shopifyProductID: l,
                            width: `100%`,
                          }),
                        }),
                      }),
                      d(H, {
                        children: d(b.div, {
                          className: `framer-1e1nesk-container`,
                          layoutDependency: T,
                          layoutId: `YDN4Rwg5U-container`,
                          children: d(yn, {
                            font: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 600,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            id: `YDN4Rwg5U`,
                            layoutId: `YDN4Rwg5U`,
                            shopifyProductID: l,
                            style: { height: `100%`, width: `100%` },
                            textColor: `rgb(0, 0, 0)`,
                            width: `100%`,
                          }),
                        }),
                      }),
                      d(H, {
                        children: d(b.div, {
                          className: `framer-1s31gxo-container`,
                          layoutDependency: T,
                          layoutId: `SloJB_X0I-container`,
                          children: d(_n, {
                            activeContent: [
                              d(H, {
                                height: 40,
                                width: `40px`,
                                children: d(b.div, {
                                  className: `framer-hcxguz-container`,
                                  "data-framer-name": `plus-active`,
                                  layoutDependency: T,
                                  layoutId: `UqVA4dK2w-container`,
                                  name: `plus-active`,
                                  children: d(Kn, {
                                    height: `100%`,
                                    id: `UqVA4dK2w`,
                                    layoutId: `UqVA4dK2w`,
                                    name: `plus-active`,
                                    variant: `i9scvqvmF`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            disabledContent: [
                              d(H, {
                                height: 40,
                                width: `40px`,
                                children: d(b.div, {
                                  className: `framer-wpy95m-container`,
                                  "data-framer-name": `plus-disabled`,
                                  layoutDependency: T,
                                  layoutId: `o0vGyClbi-container`,
                                  name: `plus-disabled`,
                                  children: d(Kn, {
                                    height: `100%`,
                                    id: `o0vGyClbi`,
                                    layoutId: `o0vGyClbi`,
                                    name: `plus-disabled`,
                                    variant: `LfgCsmSh3`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                            height: `100%`,
                            id: `SloJB_X0I`,
                            isPlus: `plus`,
                            layoutId: `SloJB_X0I`,
                            shopifyProductID: l,
                            width: `100%`,
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-0q3sE.framer-wsab84, .framer-0q3sE .framer-wsab84 { display: block; }`,
          `.framer-0q3sE.framer-574100 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 56px; justify-content: center; overflow: hidden; padding: 0px 8px 0px 8px; position: relative; width: 165px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-0q3sE .framer-1g0d91m-container, .framer-0q3sE .framer-1s31gxo-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-0q3sE .framer-3q5j5o-container, .framer-0q3sE .framer-srquiz-container, .framer-0q3sE .framer-hcxguz-container, .framer-0q3sE .framer-wpy95m-container { height: auto; position: relative; width: auto; }`,
          `.framer-0q3sE .framer-1e1nesk-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-0q3sE.framer-574100 { gap: 0px; } .framer-0q3sE.framer-574100 > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-0q3sE.framer-574100 > :first-child { margin-left: 0px; } .framer-0q3sE.framer-574100 > :last-child { margin-right: 0px; } }`,
          `.framer-0q3sE[data-border="true"]::after, .framer-0q3sE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-0q3sE`
      )),
      (ir.displayName = `FC Quantity / Quantity Selector`),
      (ir.defaultProps = { height: 56, width: 165 }),
      U(ir, { bVhYNmEzi: { defaultValue: ``, title: `Product ID`, type: J.String } }),
      T(
        ir,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/lEJLP4R0yuCaMCjSXYHtJw72M.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/1ZFS7N918ojhhd0nQWdj3jz4w.woff2`,
                weight: `600`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2`,
                weight: `600`,
              },
            ],
          },
          ...Jn,
          ...Yn,
          ...Xn,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function or(e) {
  if (!v.isValidElement(e)) return e;
  let t = { ...e.props, rendersWithMotion: !1, layoutId: void 0, scopeId: void 0 };
  return (
    e.props.children && (t.children = v.Children.map(e.props.children, or)),
    v.cloneElement(e, t)
  );
}
var sr = e(() => {
  _();
});
function cr(e) {
  let {
      shopifyProductID: n,
      available: a,
      OutOfStock: s,
      SelectVariant: c,
      LoadingState: l,
      maxQuantity: f,
      shopifyProductVariantId: h,
      BuyNowATC: g,
      title: _ = `Add to Cart`,
      required: v = !1,
      openCart: y = !0,
    } = e,
    [b, x] = o(),
    [S, C] = o(),
    [w, T] = o(!0),
    [E, D] = o(!1),
    [O, k] = o(!0),
    [A, j] = o(!1),
    [M, N] = o(),
    P = pe(),
    [F, I] = o(() => {
      if (i !== void 0) {
        let e = i.__fc_activeSubscription?.[n];
        if (e?.subscriptionId) return e.subscriptionId;
      }
      return `one-time`;
    }),
    [L, R] = o(),
    [z, ee] = o(),
    [B, te] = o(1),
    ne = t(!1),
    [V, re] = o(!1),
    [H, U] = o(!1),
    [W, G] = o(!1),
    [K, ie] = o(0);
  r(() => {
    if (!P) return;
    let t = (t) => {
      t.detail.shopifyProductID === `gid://shopify/Product/${e.shopifyProductID}` &&
        (re(t.detail.autoSelectFirst), (i.__fc_autoSelectFirst = t.detail.autoSelectFirst));
    };
    return (
      document.addEventListener(`auto_select_first_flag`, t),
      () => {
        document.removeEventListener(`auto_select_first_flag`, t);
      }
    );
  }, [P]);
  let q = u(
      (e) =>
        !e || e === `404`
          ? 0
          : typeof e.totalInventory == `number`
            ? e.totalInventory
            : X(e, `variants.edges`, []).reduce(
                (e, { node: t }) => e + (t.quantityAvailable || 0),
                0
              ),
      []
    ),
    ae = u((e) => (e ? (e.availableForSale ? !0 : e.quantityAvailable > 0) : !1), []);
  (r(() => {
    if (z && P) {
      let e = new CustomEvent(`errorChanged`, { detail: z });
      i.dispatchEvent(e);
    }
  }, [z]),
    r(() => {
      if (!P || !i.shopXtools) return;
      let e = localStorage.getItem(`shopX_cart_id`);
      e &&
        i.shopXtools
          .handleCartMutation(Se, { cartId: e })
          .then((e) => {
            e?.cart &&
              (R(e.cart),
              (i.shopXtools.cart = e.cart),
              localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cart)));
          })
          .catch((e) => {
            (localStorage.removeItem(`shopX_cart_id`), localStorage.removeItem(`shopXtools.cart`));
          });
      let t = i.__fc_activeSubscription?.[n];
      t?.subscriptionId && I(t.subscriptionId);
      let r = (e) => {
        (e.detail?.productId && e.detail.productId !== n) || I(e.detail.subscriptionId);
      };
      return (
        document.addEventListener(`subscription__selection-sync`, r),
        () => document.removeEventListener(`subscription__selection-sync`, r)
      );
    }, [P, n]));
  let oe = (e) => {
    te(e.detail);
  };
  (r(() => {
    if (P)
      return (
        i.addEventListener(`FcQuantitySelectorchanges`, oe),
        () => {
          i.removeEventListener(`FcQuantitySelectorchanges`, oe);
        }
      );
  }, [P]),
    r(() => {
      !P ||
        !b ||
        ne.current ||
        ((S || b.variants?.edges?.length > 0) &&
          (De({
            variant: S || b.variants?.edges?.[0]?.node,
            product: b,
            currency:
              S?.price?.currencyCode || b.variants?.edges?.[0]?.node?.price?.currencyCode || `USD`,
          }),
          (ne.current = !0)));
    }, [P, b, S]),
    r(() => {
      if (!P) return;
      let e = async (e) => {
        let { countryCode: t } = e.detail;
        N(t);
        let n = localStorage.getItem(`shopX_cart_id`);
        if (n)
          try {
            let e = await i.shopXtools.handleCartMutation(he, { cartId: n, countryCode: t });
            e?.cartBuyerIdentityUpdate?.cart
              ? ((i.shopXtools.cart = e.cartBuyerIdentityUpdate.cart),
                i.dispatchEvent(new Event(`shopXtools-cart-update`)))
              : i.dispatchEvent(
                  new CustomEvent(`errorChanged`, {
                    detail: `Failed to update cart with new country code`,
                  })
                );
          } catch (e) {
            i.dispatchEvent(
              new CustomEvent(`errorChanged`, {
                detail: e.message || `Failed to update cart currency`,
              })
            );
          }
      };
      return (
        i.addEventListener(`currency_changed`, e),
        () => {
          i.removeEventListener(`currency_changed`, e);
        }
      );
    }, [P]),
    r(() => {
      if (!P) return;
      let e = (e) => {
          if (!e) return !1;
          let t = X(e, `variants.edges`, []);
          if (t.length === 1) {
            let e = t[0].node;
            return (C(e), H || (i.__fc_activeVariantId = e.id), T(ae(e)), D(!1), !0);
          }
          return !1;
        },
        t = (t) => {
          if (b && b !== `404`) {
            let e = b?.id,
              n = t?.node?.id;
            if (e && n && e === n) return;
          }
          if (t) {
            let n = t.node;
            if ((x(n || `404`), n?.handle && fe(n.handle), h && n)) {
              let e = `gid://shopify/ProductVariant/${h}`,
                t = X(n, `variants.edges`, []).find(({ node: t }) => t.id === e);
              if (t) {
                (C(t.node), H || (i.__fc_activeVariantId = t.node.id), T(ae(t.node)), D(!1));
                return;
              }
            }
            if (e(n)) return;
            if (V && !H) {
              let e = n.variants.edges.find((e) => e.node.availableForSale)?.node;
              if (e) {
                (C(e), H || (i.__fc_activeVariantId = e.id), T(ae(e)), D(!1));
                return;
              }
            }
            let r = X(n, `variants.edges`, []),
              a = r.length > 1;
            (X(n, `options`, []).length, S || D(!V && a ? !0 : !h && a));
            let o = r.some(({ node: e }) => ae(e));
            (T(o), o || D(!1));
          } else (x(`404`), T(!1));
        };
      if (i.shopXtools?.products && Array.isArray(i.shopXtools.products) && !b) {
        let e = i.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
        e && t(e);
      }
      let r = () => {
          if (i?.shopXtools?.products) {
            let e = i.shopXtools.products.find(
              ({ node: e }) => e.id === `gid://shopify/Product/${n}`
            );
            (!b || b === `404`) && t(e);
          }
        },
        a = (e) => {
          if (e.detail.productId === `gid://shopify/Product/${n}` && e.detail) {
            let t = X(b, `options`, []) || [],
              n = Array.isArray(e.detail.selectedOptions) ? e.detail.selectedOptions : [],
              r = new Set(n.map((e) => e?.name).filter(Boolean)),
              a = t.length > 0 && t.every((e) => r.has(e.name)),
              o = e.detail.isCompleteVariant === !0 || a;
            if (!o) {
              (U(!0), C(null), (i.__fc_activeVariantId = void 0), D(!0));
              return;
            }
            (C(e.detail),
              U(!0),
              (i.__fc_activeVariantId = e.detail.id),
              T(e.detail.quantityAvailable > 0),
              Z(e.detail.id) === e.detail.quantityAvailable && e.detail.quantityAvailable > 0
                ? G(!0)
                : G(!1),
              D(!o));
          }
        };
      return (
        document.addEventListener(`data__products-ready`, r),
        document.addEventListener(`product__active-variant__changed`, a),
        () => {
          (document.removeEventListener(`data__products-ready`, r),
            document.removeEventListener(`product__active-variant__changed`, a));
        }
      );
    }, [n, h, S, P, q, V, b]),
    r(() => {
      if (!b || b === `404`) return;
      let e = X(b, `variants.edges`, []).length > 1;
      D(e && !S && !h);
    }, [b, S, h]));
  let [J, se] = o(!1),
    ce = () => {
      if (!e.required) return (e.required, !0);
      let t = `fc_cart_attributes_${e.shopifyProductID}`,
        n = sessionStorage.getItem(t);
      if (!n) return !1;
      try {
        let e = JSON.parse(n);
        return Object.values(e).some((e) => e && String(e).trim() !== ``);
      } catch {
        return !1;
      }
    };
  (r(() => {
    if (e.required) {
      let t = ce();
      (e.required, se(!t));
    }
  }, [e.required, e.shopifyProductID]),
    r(() => {
      if (e.required) {
        let e = (e) => {
          e.detail;
          let t = ce();
          se(!t);
        };
        return (
          i.addEventListener(`orderFieldChanged`, e),
          () => i.removeEventListener(`orderFieldChanged`, e)
        );
      }
    }, [e.required]));
  let [le, ue] = o(!1);
  r(() => {
    let e = () => {
      let e = `fc_input_config_${n}`,
        t = sessionStorage.getItem(e);
      if (t) {
        let { required: e } = JSON.parse(t);
        ue(e);
      } else ue(!1);
    };
    return (
      e(),
      i.addEventListener(`inputConfigChanged`, e),
      () => i.removeEventListener(`inputConfigChanged`, e)
    );
  }, [n]);
  let de = () => {
      let t =
        S?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null);
      if (!t) throw Error(`No valid product variant selected`);
      let n = { merchandiseId: t, quantity: B };
      F && F !== `one-time` && (n.sellingPlanId = F);
      try {
        let t = `fc_cart_attributes_${e.shopifyProductID}`,
          r = sessionStorage.getItem(t);
        if (!r) return n;
        let i = JSON.parse(r),
          a = [];
        (Object.entries(i).forEach(([e, t]) => {
          t && String(t).trim() && a.push({ key: e, value: String(t).trim() });
        }),
          a.length > 0 && (n.attributes = a));
      } catch (e) {
        console.error(`Error adding attributes to cart item:`, e);
      }
      return n;
    },
    fe = u(async (e) => {
      if (e)
        try {
          let t = await i.shopXtools?.handleCartMutation?.(_e, { handle: e }),
            n = parseInt(t?.product?.metafield_order_max?.value, 10);
          ie(!isNaN(n) && n > 0 ? n : 0);
        } catch (e) {
          (console.warn(`Could not fetch product metafields for order_max:`, e), ie(0));
        }
    }, []),
    Z = u(
      (e) => {
        let t = i?.shopXtools?.cart;
        R(t);
        let n = t?.lines?.edges;
        if (!n) return 0;
        if (b?.handle && K > 0) {
          let e = X(b, `variants.edges`, []).map(({ node: e }) => e.id);
          return n.reduce(
            (t, { node: n }) => (e.includes(n.merchandise.id) ? t + n.quantity : t),
            0
          );
        }
        return n.reduce((t, { node: n }) => (n.merchandise.id === e ? t + n.quantity : t), 0);
      },
      [b, K]
    ),
    me = async () => {
      try {
        if (!P) return;
        let t =
            S?.id ||
            (e.shopifyProductVariantId
              ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
              : null),
          n = Z(t);
        if (K > 0 && n >= K) {
          G(!0);
          return;
        }
        if (K === 0 && S && S.quantityAvailable > 0 && n >= S.quantityAvailable) {
          G(!0);
          return;
        }
        if (e.required || le) {
          let t = `fc_cart_attributes_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t),
            r = document.querySelector(`[data-product-id="${e.shopifyProductID}"]`),
            a = r?.value || ``;
          if (r && a && n)
            try {
              let t = JSON.parse(n);
              if (!Object.values(t).some((e) => String(e).trim() === a.trim())) {
                i.dispatchEvent(
                  new CustomEvent(`inputValidationFailed`, {
                    detail: {
                      productId: e.shopifyProductID,
                      message: `Please save your input before adding to cart`,
                    },
                  })
                );
                return;
              }
            } catch {
              i.dispatchEvent(
                new CustomEvent(`inputValidationFailed`, {
                  detail: {
                    productId: e.shopifyProductID,
                    message: `Please fill in all required fields`,
                  },
                })
              );
              return;
            }
          if (!n) {
            i.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please fill in all required fields`,
                },
              })
            );
            return;
          }
          try {
            let t = JSON.parse(n);
            if (!Object.values(t).some((e) => e && String(e).trim() !== ``)) {
              i.dispatchEvent(
                new CustomEvent(`inputValidationFailed`, {
                  detail: {
                    productId: e.shopifyProductID,
                    message: `Please fill in all required fields`,
                  },
                })
              );
              return;
            }
          } catch {
            i.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please fill in all required fields`,
                },
              })
            );
            return;
          }
        }
        let r = [de()],
          a = localStorage.getItem(`selectedCountryCode`),
          o = localStorage.getItem(`shopX_cart_id`);
        if (!g) {
          if (o)
            try {
              (await i.shopXtools.handleCartMutation(Se, { cartId: o }))?.cart ||
                (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (o = null));
            } catch {
              (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (o = null));
            }
          if (o) {
            let e = await i.shopXtools.handleCartMutation(we, { cartId: o, lines: r });
            if (e?.cartLinesAdd?.cart) {
              (localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartLinesAdd.cart)),
                (i.shopXtools.cart = e.cartLinesAdd.cart),
                R(i.shopXtools.cart),
                i.dispatchEvent(new Event(`shopXtools-cart-update`)));
              let t = S?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(S?.price?.amount || `0`) * B).toFixed(2)),
                r = lr(S?.id),
                a = b?.title || ``,
                o = S?.selectedOptions
                  ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                s = parseFloat(S?.price?.amount || `0`);
              if (r && a && o && s > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: a,
                      item_variant: o,
                      price: s,
                      item_brand: b?.vendor || null,
                      item_category: b?.productType || null,
                      quantity: B,
                      SKU: r,
                      "Item Name": a,
                    },
                  ],
                };
                typeof i.fcTrackGAEvent == `function` && i.fcTrackGAEvent(`add_to_cart`, e);
              } else
                console.warn(`❌ Skipping add_to_cart: missing item data`, {
                  item_id: r,
                  item_name: a,
                  item_variant: o,
                  price: s,
                  value: n,
                });
              (Ae({ variant: S, product: b, quantity: B, currency: t }),
                i.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: y }));
            } else
              i.dispatchEvent(new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` }));
          } else
            try {
              let e = await i.shopXtools.handleCartMutation(xe, { lines: r, countryCode: a });
              if (e?.cartCreate?.cart?.id) {
                (localStorage.setItem(`shopX_cart_id`, e.cartCreate.cart.id),
                  localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartCreate.cart)),
                  (i.shopXtools.cart = e.cartCreate.cart),
                  R(i.shopXtools.cart),
                  i.dispatchEvent(new Event(`shopXtools-cart-update`)));
                let t = S?.price?.currencyCode || `USD`,
                  n = parseFloat((parseFloat(S?.price?.amount || `0`) * B).toFixed(2)),
                  r = lr(S?.id),
                  a = b?.title || ``,
                  o = S?.selectedOptions
                    ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                    : ``,
                  s = parseFloat(S?.price?.amount || `0`);
                if (r && a && o && s > 0) {
                  let e = {
                    currency: t,
                    value: n,
                    items: [
                      {
                        item_id: r,
                        item_name: a,
                        item_variant: o,
                        price: s,
                        item_brand: b?.vendor || null,
                        item_category: b?.productType || null,
                        quantity: B,
                        SKU: r,
                        "Item Name": a,
                      },
                    ],
                  };
                  typeof i.fcTrackGAEvent == `function` && i.fcTrackGAEvent(`add_to_cart`, e);
                } else
                  console.warn(`❌ Skipping add_to_cart: missing item data`, {
                    item_id: r,
                    item_name: a,
                    item_variant: o,
                    price: s,
                    value: n,
                  });
                (Ae({ variant: S, product: b, quantity: B, currency: t }),
                  i.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: y }));
              } else
                i.dispatchEvent(
                  new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` })
                );
            } catch (e) {
              i.dispatchEvent(
                new CustomEvent(`errorChanged`, {
                  detail: e.message || `Failed to create new cart`,
                })
              );
            }
        }
        if (g) {
          let e = { lines: r, countryCode: a },
            t = (await i.shopXtools?.handleTemporaryCartMutation(xe, e)).cartCreate.cart
              .checkoutUrl;
          if (t) {
            let e = t;
            if (e) {
              let t = S?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(S?.price?.amount || `0`) * B).toFixed(2)),
                r = lr(S?.id),
                a = b?.title || ``,
                o = S?.selectedOptions
                  ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                s = parseFloat(S?.price?.amount || `0`);
              if (r && a && o && s > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: a,
                      item_variant: o,
                      price: s,
                      item_brand: b?.vendor || null,
                      item_category: b?.productType || null,
                      quantity: B,
                      SKU: r,
                      "Item Name": a,
                    },
                  ],
                };
                typeof i.fcTrackGAEvent == `function` && i.fcTrackGAEvent(`begin_checkout`, e);
              } else
                console.warn(`❌ Skipping begin_checkout: missing item data`, {
                  item_id: r,
                  item_name: a,
                  item_variant: o,
                  price: s,
                  value: n,
                });
              (be({ variant: S, product: b, quantity: B, currency: t, useBeacon: !0 }),
                (e = ve(e)),
                (e = ge(e)),
                i.location.assign(e));
            }
          } else
            i.dispatchEvent(
              new CustomEvent(`errorChanged`, { detail: `Failed to create cart for checkout` })
            );
        }
        if (r[0].attributes) {
          let e = o;
          await i.shopXtools.handleCartMutation(Me, { cartId: e, attributes: r[0].attributes });
        }
      } catch (e) {
        i.dispatchEvent(
          new CustomEvent(`errorChanged`, { detail: e.message || `Failed to add item to cart` })
        );
      }
    };
  (r(() => {
    b && k(!1);
  }, [b]),
    r(() => {
      if (!A && (b || n)) {
        let e = setTimeout(() => {
          j(!0);
        }, 50);
        return () => clearTimeout(e);
      }
    }, [b]));
  let ye = Y.current() === Y.canvas,
    Q = null;
  Q = ye
    ? a?.[0] || null
    : A
      ? W && f?.[0]
        ? f?.[0] || null
        : (!w && !S?.availableForSale) ||
            (S && !ae(S)) ||
            (b && !X(b, `variants.edges`, []).some(({ node: e }) => ae(e))) ||
            (e.required && J)
          ? s?.[0] || null
          : E
            ? c?.[0] || null
            : a?.[0] || null
      : null;
  let Ce = (w || (S && S.availableForSale)) && !E && !W && (!e.required || !J),
    Te = (e) => {
      Ce && me();
    };
  (r(() => {
    let t =
        S?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null),
      n = Z(t),
      r = !1;
    (K > 0
      ? (r = n >= K)
      : K === 0 &&
        S &&
        S.quantityAvailable > 0 &&
        S.availableForSale &&
        (r = n >= S.quantityAvailable),
      r !== W && G(r));
  }, [K, S, e.shopifyProductVariantId, W, Z]),
    r(() => {
      K > 0 &&
        i.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: K },
          })
        );
    }, [K, e.shopifyProductID]),
    r(() => {
      let t =
          S?.id ||
          (e.shopifyProductVariantId
            ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
            : null),
        n = Z(t);
      if (K > 0 && L) {
        let t = Math.max(0, K - n);
        i.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      } else if (K === 0 && S && L && S.quantityAvailable > 0 && S.availableForSale) {
        let t = Math.max(0, S.quantityAvailable - n);
        i.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      }
    }, [L, K, S, e.shopifyProductVariantId, Z, B]),
    r(() => {
      let t = () => {
        let t = S?.id || null,
          n = Z(t);
        if (K > 0) G(n >= K);
        else if (K === 0 && S && S.quantityAvailable > 0) {
          let e = n >= S.quantityAvailable;
          G(e);
        } else G(!1);
        let r = Math.max(0, K - n),
          a = S?.quantityAvailable <= 0 && S?.availableForSale ? 100 : S?.quantityAvailable,
          o = Math.max(0, a - n);
        i.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: K > 0 ? r : o },
          })
        );
      };
      return (
        i.addEventListener(`shopXtools-cart-update`, t),
        () => i.removeEventListener(`shopXtools-cart-update`, t)
      );
    }, [S, K, Z, e.shopifyProductID]),
    r(() => {
      if (!P) return;
      let e = () => {
        if (
          (i !== void 0 && i.__fc_autoSelectFirst !== void 0 && re(i.__fc_autoSelectFirst),
          i !== void 0 && i.__fc_activeVariantId !== void 0)
        ) {
          let e = i.__fc_activeVariantId;
          if (e) {
            let t = X(b, `variants.edges`, []).find(({ node: t }) => t.id === e);
            t && C(t.node);
          }
        }
        if (b) {
          let e = X(b, `variants.edges`, []).length > 1;
          D(V || S ? !1 : !V && e ? !0 : !h && e);
        }
      };
      return (
        i.addEventListener(`resize`, e),
        () => {
          i.removeEventListener(`resize`, e);
        }
      );
    }, [P, b, S, V, h]));
  let Ee = t(),
    Oe = t(!1);
  (r(() => {
    if (!b) return;
    let e = b.vendor || null,
      t = b.productType || null;
    if (!Oe.current) {
      (lr(b.id), b.title);
      let e = X(b, `variants.edges`, [])[0]?.node;
      (e
        ? (e.price?.currencyCode,
          parseFloat(e.price?.amount || `0`),
          lr(e.id),
          e.title,
          parseFloat(e.price?.amount || `0`),
          lr(e.id))
        : (b.priceRange?.minVariantPrice?.currencyCode,
          parseFloat(b.priceRange?.minVariantPrice?.amount || `0`),
          parseFloat(b.priceRange?.minVariantPrice?.amount || `0`)),
        (Oe.current = !0));
    }
    if (S && b?.title) {
      let n = lr(S.id),
        r = b.title,
        a = S?.selectedOptions
          ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
          : ``,
        o = parseFloat(S.price?.amount || `0`),
        s = S.price?.currencyCode || `USD`,
        c = o;
      if (n && r && a && o > 0 && Ee.current !== n) {
        let l = {
          currency: s,
          value: c,
          items: [
            {
              item_id: n,
              item_name: r,
              item_variant: a,
              price: o,
              item_brand: e,
              item_category: t,
              quantity: 1,
              SKU: n,
              "Item Name": r,
            },
          ],
        };
        l.items &&
          l.items.length > 0 &&
          l.items[0].item_id &&
          l.items[0].item_name &&
          (i.fcTrackGAEvent && i.fcTrackGAEvent(`view_item`, l), (Ee.current = n));
      }
    }
  }, [b, S]),
    r(() => {
      let e = document.activeElement;
      e && e.closest(`.fc-purchase-button-container`) && e.blur();
    }, [Q]));
  let $ = null;
  ye &&
    (a?.[0]
      ? ($ = a[0])
      : c?.[0]
        ? ($ = c[0])
        : s?.[0]
          ? ($ = s[0])
          : f?.[0]
            ? ($ = f[0])
            : l?.[0] && ($ = l[0]));
  let ke = a?.[0] || c?.[0] || s?.[0] || f?.[0] || l?.[0];
  if (ye && !ke)
    return d(`div`, {
      style: {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `#666`,
        fontSize: `14px`,
        border: `1px dashed #ccc`,
        borderRadius: `4px`,
      },
      children: `Connect Instance`,
    });
  let je = (i === void 0 ? `` : i.location.href).includes(`framercanvas.com`),
    Ne = $ ? or($) : null,
    Pe = l?.[0] ? or(l[0]) : null,
    Fe = Q ? or(Q) : null;
  return m(`div`, {
    style: { height: `100%`, position: `relative` },
    role: `none`,
    className: `fc-purchase-button-container`,
    children: [
      d(`style`, {
        children: `
                .fc-purchase-button-container :focus-visible {
                    outline: ${e.focus.width}px solid ${e.focus.color} !important;
                    outline-offset: ${e.focus.padding}px !important;
                    border-radius: ${e.focus.radius}px !important;
                }
            `,
      }),
      ye
        ? Ne &&
          p(Ne, {
            style: {
              ...($?.props?.style || {}),
              width: `100%`,
              height: `100%`,
              cursor: `pointer`,
              outline: `none`,
            },
            onClick: Te,
            role: `button`,
            "aria-label":
              $ === a?.[0]
                ? e.BuyNowATC
                  ? `Buy now`
                  : `Add to cart`
                : $ === c?.[0]
                  ? `Select variant`
                  : $ === s?.[0]
                    ? `Out of stock`
                    : $ === f?.[0]
                      ? `Max quantity reached`
                      : `Loading`,
          })
        : O && !e.skipLoading && Pe && !je
          ? p(Pe, {
              style: {
                ...(l[0].props?.style || {}),
                width: `100%`,
                height: `100%`,
                outline: `none`,
              },
              role: `status`,
              "aria-label": `Loading ${e.BuyNowATC ? `buy now` : `add to cart`} button`,
              "aria-live": `polite`,
              tabIndex: -1,
            })
          : Fe
            ? p(Fe, {
                style: {
                  ...(Q?.props?.style || {}),
                  width: `100%`,
                  height: `100%`,
                  cursor: Ce ? `pointer` : `not-allowed`,
                  outline: `none`,
                },
                onClick: Ce ? Te : void 0,
                onKeyDown: Ce
                  ? (e) => {
                      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), Te(e));
                    }
                  : void 0,
                role: `button`,
                "aria-disabled": !Ce,
                "aria-label":
                  Q === a?.[0]
                    ? e.BuyNowATC
                      ? `Buy now`
                      : `Add to cart`
                    : Q === c?.[0]
                      ? `Select variant`
                      : Q === s?.[0]
                        ? `Out of stock`
                        : `Max quantity reached`,
                tabIndex: A ? 0 : -1,
              })
            : null,
    ],
  });
}
var lr,
  ur = e(() => {
    (n(),
      h(),
      _(),
      je(),
      R(),
      fe(),
      ye(),
      me(),
      Z(),
      Ce(),
      sr(),
      tn(),
      U(cr, {
        shopifyProductID: {
          type: J.String,
          title: `Product ID`,
          description: `Connect to CMS (required)`,
        },
        LoadingState: {
          type: J.ComponentInstance,
          title: `Loading`,
          hidden: (e) => e.skipLoading,
          description: `Display when product/variant is determining state to show.`,
        },
        available: {
          type: J.ComponentInstance,
          title: `Available`,
          description: `Display when product/variant is available (Add to Cart or Buy Now).`,
        },
        SelectVariant: {
          type: J.ComponentInstance,
          title: `Select Variant`,
          description: `Display when product/variant requires a variant selection.`,
        },
        OutOfStock: {
          type: J.ComponentInstance,
          title: `Out of Stock`,
          description: `Display when product/variant is out of stock.`,
        },
        maxQuantity: {
          type: J.ComponentInstance,
          title: `Limit Reached`,
          description: `Display when maximum cart quantity is reached.  

 –––– 

 Connect each state to button component off-page. 

 If you detatch the button component, you'll need to reconnect the states.`,
        },
        BuyNowATC: {
          title: `Buy Now`,
          type: J.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !1,
        },
        skipLoading: {
          title: `Loading State`,
          type: J.Boolean,
          enabledTitle: `No`,
          disabledTitle: `Yes`,
          defaultValue: !1,
        },
        openCart: {
          title: `Trigger Cart`,
          description: `If button is inside the cart, select No to keep the cart open.`,
          type: J.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !0,
          hidden: (e) => e.BuyNowATC,
        },
        focus: {
          type: J.Object,
          title: `Focus`,
          controls: {
            radius: {
              type: J.Number,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
            },
            width: {
              type: J.Number,
              title: `Width`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            padding: {
              type: J.Number,
              title: `Padding`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            color: { type: J.Color, title: `Color`, defaultValue: `#007AFF` },
          },
        },
        shopifyProductVariantId: {
          type: J.String,
          title: `Variant ID`,
          description: `Advanced: Manually set a specific product variant ID (optional).`,
        },
      }),
      (lr = (e) => e?.split(`/`).pop()));
  });
function dr(e) {
  let { shopifyProductID: t, textTemplate: n } = e,
    [a, s] = o(),
    [c, l] = o({}),
    f = u((e) => {
      l((t) => ({ ...t, [e.detail.optionName]: e.detail.value }));
    }, []);
  (r(() => {
    if (i.shopXtools && Array.isArray(i.shopXtools.products)) {
      let e = i.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
      s(e ? e.node : `404`);
    } else
      document.addEventListener(`data__products-ready`, (e) => {
        if (Array.isArray(e.detail.products)) {
          let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
          s(n ? n.node : `404`);
        }
      });
    return (
      document.addEventListener(`variant_option_selected`, f),
      () => {
        document.removeEventListener(`variant_option_selected`, f);
      }
    );
  }, [t, f]),
    r(() => {
      let e = (e) => {
        let { currency: n } = e.detail;
        if (i.shopXtools && Array.isArray(i.shopXtools.products)) {
          let e = i.shopXtools.products.find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          e && s(e.node);
        }
      };
      return (
        i.addEventListener(`currency_changed`, e),
        () => {
          i.removeEventListener(`currency_changed`, e);
        }
      );
    }, [t]));
  let p = X(a, `options`, [])
      .filter((e) => !c[e.name])
      .map((e) => e.name),
    m =
      i === void 0 || !i.shopXtools
        ? n.replace(`{{variant}}`, `Size`)
        : p.length === 0
          ? ``
          : n.replace(`{{variant}}`, p.join(`, `));
  return m
    ? d(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: d(`p`, {
          style: {
            ...e.font,
            color: e.color,
            margin: 0,
            textAlign: `center`,
            textTransform: e.textTransform,
          },
          children: m,
        }),
      })
    : d(`div`, { style: { width: `100%`, height: `100%` } });
}
var fr = e(() => {
    (n(),
      h(),
      R(),
      _(),
      fe(),
      (dr.defaultProps = {
        shopifyProductID: ``,
        textTemplate: `Select {{variant}}`,
        textTransform: `none`,
        color: `#000000`,
      }),
      U(dr, {
        shopifyProductID: { type: J.String, title: `Product ID` },
        textTemplate: {
          type: J.String,
          title: `Format`,
          description: `Use {{variant}} to insert the variant name`,
        },
        font: { type: J.Font, title: `Font`, controls: `extended` },
        color: { type: J.Color, title: `Color`, defaultValue: `#000000` },
        textTransform: {
          type: J.Enum,
          title: `Transform`,
          options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
          defaultValue: `none`,
        },
      }));
  }),
  pr,
  mr,
  hr = e(() => {
    (R(),
      (pr = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...pr },
      (mr = {
        onClick: { type: J.EventHandler },
        onMouseEnter: { type: J.EventHandler },
        onMouseLeave: { type: J.EventHandler },
      }),
      J.Number,
      J.Boolean,
      J.String,
      J.Enum);
  });
function gr(e, t) {
  return vr(!0, e, t);
}
function _r(e, t) {
  return vr(!1, e, t);
}
function vr(e, t, n = !0) {
  let i = se();
  r(() => {
    n && i === e && t();
  }, [i]);
}
var yr = e(() => {
    (R(), _());
  }),
  br = e(() => {
    _();
  }),
  xr = e(() => {
    R();
  }),
  Sr = e(() => {
    R();
  }),
  Cr = e(() => {
    _();
  }),
  wr = e(() => {
    R();
  }),
  Tr = e(() => {
    (n(), _());
  }),
  Er = e(() => {
    (_(), Sr());
  }),
  Dr = e(() => {
    (_(), R(), Sr(), br());
  }),
  Or = e(() => {
    (R(), _(), hr());
  }),
  kr = e(() => {
    (_(), R());
  }),
  Ar = e(() => {
    _();
  }),
  jr = e(() => {
    (_(), R(), J.FusedNumber, J.FusedNumber);
  }),
  Mr = e(() => {
    (hr(), yr(), br(), xr(), Sr(), Cr(), wr(), Tr(), Er(), Dr(), Or(), kr(), Ar(), jr());
  }),
  Nr = e(() => {
    Mr();
  });
function Pr({ color: e, animation: t }) {
  let n = [0, 1, 2],
    { delay: r, ease: i, duration: a, ...o } = t,
    s = t.type === `spring` ? o : { ...o, ease: i, duration: a };
  return d(b.svg, {
    style: { height: `85%`, width: `85%` },
    viewBox: `0 0 30 30`,
    variants: { show: { transition: { delayChildren: 0.1, staggerChildren: 0.12 } } },
    animate: `show`,
    children: n.map((t) =>
      d(
        b.circle,
        {
          style: { fill: e },
          variants: { hidden: { y: 0 }, show: { y: [0, 0, 0, -10, 0, 0, 0] } },
          transition: { ...s, yoyo: 1 / 0 },
          r: 3,
          cx: t * 10 + 5,
          cy: 15,
        },
        t
      )
    ),
  });
}
function Fr({ color: e, animation: t }) {
  return d(b.svg, {
    style: { height: `85%`, width: `85%`, overflow: `visible`, originX: `50%`, originY: `50%` },
    animate: { rotate: 360 },
    transition: { ease: `linear`, loop: 1 / 0, duration: 2 },
    viewBox: `25 25 50 50`,
    children: d(b.circle, {
      style: { stroke: e, strokeLinecap: `round` },
      animate: {
        strokeDasharray: [`1, 200`, `89, 200`, `89, 200`],
        strokeDashoffset: [0, -35, -124],
      },
      transition: { ...t, loop: 1 / 0, ease: `easeInOut` },
      cx: `50`,
      cy: `50`,
      r: `20`,
      fill: `none`,
      strokeWidth: 2,
      strokeMiterlimit: `10`,
    }),
  });
}
function Ir({ color: e, animation: t }) {
  let n = (e, t) => e.slice(t, e.length).concat(e.slice(0, t)),
    r = [...Array(12)].map((e, t) => (0.9 / 12) * t + 0.1).reverse(),
    i = r.map((e, t) => n(r, t));
  return d(b.svg, {
    viewBox: `-15 -15 30 30`,
    style: { width: `100%`, height: `100%` },
    children: i.map((n, r) =>
      d(
        b.g,
        {
          initial: { opacity: n[0] },
          animate: { opacity: n },
          transition: { ...t, loop: 1 / 0, repeatDelay: 5e-4 },
          children: d(`rect`, {
            style: {
              width: 7,
              height: 2,
              fill: e,
              transform: `rotate(${((12 - r) / 12) * 360 - 90}deg)`,
            },
            x: 5,
            y: -1,
            rx: 1,
          }),
        },
        r
      )
    ),
  });
}
function Lr(e, t) {
  switch (e) {
    case Br.DotWave:
      return d(Pr, { ...t });
    case Br.Material:
      return d(Fr, { ...t });
    case Br.IOS:
      return d(Ir, { ...t });
    default:
      return d(Pr, { ...t });
  }
}
function Rr(e, t) {
  let n = setTimeout(t, e * 1e3);
  return () => clearTimeout(n);
}
function zr(e) {
  let {
      duration: n,
      onTimeout: i,
      fadeOut: a,
      hasDuration: o,
      indicator: s,
      onClick: c,
      onMouseDown: l,
      onMouseUp: f,
      onMouseEnter: p,
      onMouseLeave: m,
      style: h,
    } = e,
    g = x(),
    _ = a ? Math.min(n, 0.35) : 0,
    v = a ? n - _ : n,
    y = Lr(s, e),
    S = t([]),
    C = u(() => {
      o && g.start({ opacity: 0, transition: { duration: _, ease: `easeIn` } });
    }, [o, _]),
    w = async () => {
      g.set({ opacity: 1 });
    };
  return (
    gr(() => {
      (w(), o && (S.current = [Rr(n, i), Rr(v, C)]));
    }),
    _r(() => S.current.forEach((e) => e)),
    r(() => () => S.current.forEach((e) => e), []),
    d(b.div, {
      onClick: c,
      onMouseDown: l,
      onMouseUp: f,
      onMouseEnter: p,
      onMouseLeave: m,
      animate: g,
      style: {
        position: `relative`,
        overflow: `show`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        ...h,
      },
      children: y,
    })
  );
}
var Br,
  Vr = e(() => {
    (h(),
      _(),
      R(),
      Nr(),
      (function (e) {
        ((e.DotWave = `Dots`), (e.Material = `Material`), (e.IOS = `iOS`));
      })((Br ||= {})),
      (zr.defaultProps = {
        height: 40,
        width: 40,
        duration: 2,
        color: `#888`,
        animation: { type: `tween`, ease: `linear`, duration: 1.3 },
        hasDuration: !1,
      }),
      U(zr, {
        indicator: { title: `Indicator`, type: J.Enum, options: Object.keys(Br).map((e) => Br[e]) },
        color: { type: J.Color, defaultValue: `#888` },
        hasDuration: {
          title: `Duration`,
          type: J.Boolean,
          defaultValue: zr.defaultProps.hasDuration,
          enabledTitle: `Timeout`,
          disabledTitle: `Infinity`,
        },
        duration: {
          title: `Time`,
          hidden: ({ hasDuration: e }) => !e,
          min: 0.1,
          max: 10,
          defaultValue: zr.defaultProps.duration,
          type: J.Number,
          step: 0.1,
        },
        animation: { type: J.Transition },
        fadeOut: {
          title: `Fade Out`,
          hidden: ({ hasDuration: e }) => !e,
          type: J.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        onTimeout: { type: J.EventHandler },
        ...mr,
      }));
  });
function Hr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri = e(() => {
    (h(),
      R(),
      w(),
      _(),
      fr(),
      Vr(),
      (Ur = k(dr)),
      (Wr = k(zr)),
      (Gr = { Erb5Bb3NL: { hover: !0 } }),
      (Kr = [`Erb5Bb3NL`, `jOg5_ifoq`, `OBRvZcfAm`, `iPfDE_yy2`, `hGIyjB9yv`]),
      (qr = `framer-8EGG8`),
      (Jr = {
        Erb5Bb3NL: `framer-v-1eq3e9l`,
        hGIyjB9yv: `framer-v-10j2b5q`,
        iPfDE_yy2: `framer-v-tuv9cx`,
        jOg5_ifoq: `framer-v-1sa16sd`,
        OBRvZcfAm: `framer-v-1cffymc`,
      }),
      (Yr = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Xr = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (Zr = {
        "Add to Cart": `Erb5Bb3NL`,
        "Max Reached": `iPfDE_yy2`,
        "Out of Stock": `OBRvZcfAm`,
        "Select Variant": `jOg5_ifoq`,
        Loading: `hGIyjB9yv`,
      }),
      (Qr = b.create(a)),
      ($r = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        elgRTGdr9: n ?? i.elgRTGdr9,
        variant: Zr[i.variant] ?? i.variant ?? `Erb5Bb3NL`,
      })),
      (ei = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ti = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = ee();
          te();
          let { style: l, className: u, layoutId: f, variant: p, elgRTGdr9: h, ...g } = $r(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: w,
              isLoading: T,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = F({
              cycleOrder: Kr,
              defaultVariant: `Erb5Bb3NL`,
              enabledGestures: Gr,
              ref: i,
              variant: p,
              variantClassNames: Jr,
            }),
            A = ei(e, k),
            j = M(qr),
            N = () => ![`jOg5_ifoq`, `hGIyjB9yv`].includes(_),
            P = () => _ === `jOg5_ifoq`,
            I = () => _ === `hGIyjB9yv`;
          return d(C, {
            id: f ?? o,
            children: d(Qr, {
              animate: k,
              initial: !1,
              children: d(Xr, {
                value: Yr,
                children: m(b.div, {
                  ...g,
                  ...S,
                  className: M(j, `framer-1eq3e9l`, u, v),
                  "data-framer-name": `Add to Cart`,
                  layoutDependency: A,
                  layoutId: `Erb5Bb3NL`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-2de60d55-30ed-45f4-87e6-158824b868d3, rgb(0, 0, 0))`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...l,
                  },
                  variants: {
                    "Erb5Bb3NL-hover": {
                      backgroundColor: `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                    },
                    hGIyjB9yv: { backgroundColor: `rgb(235, 235, 235)` },
                    iPfDE_yy2: { backgroundColor: `rgb(235, 235, 235)` },
                    jOg5_ifoq: { backgroundColor: `rgb(235, 235, 235)` },
                    OBRvZcfAm: { backgroundColor: `rgb(235, 235, 235)` },
                  },
                  ...Hr(
                    {
                      "Erb5Bb3NL-hover": { "data-framer-name": void 0 },
                      hGIyjB9yv: { "data-framer-name": `Loading` },
                      iPfDE_yy2: { "data-framer-name": `Max Reached` },
                      jOg5_ifoq: { "data-framer-name": `Select Variant` },
                      OBRvZcfAm: { "data-framer-name": `Out of Stock` },
                    },
                    _,
                    w
                  ),
                  children: [
                    N() &&
                      d(E, {
                        __fromCanvasComponent: !0,
                        children: d(a, {
                          children: d(b.p, {
                            dir: `auto`,
                            style: {
                              "--framer-font-size": `14px`,
                              "--framer-letter-spacing": `-0.05em`,
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)))`,
                            },
                            children: `Add to cart`,
                          }),
                        }),
                        className: `framer-nn1d7r`,
                        fonts: [`Inter`],
                        layoutDependency: A,
                        layoutId: `lMastiK7j`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          iPfDE_yy2: {
                            "--extracted-2gg91v": `"opsz" 32, "wght" 555`,
                            "--extracted-r6o4lv": `rgba(0, 0, 0, 0.32)`,
                          },
                          OBRvZcfAm: {
                            "--extracted-r6o4lv": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Hr(
                          {
                            iPfDE_yy2: {
                              children: d(a, {
                                children: d(b.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `SW50ZXItVmFyaWFibGVWRj1JbTl3YzNvaUlETXlMQ0FpZDJkb2RDSWdOVFUx`,
                                    "--framer-font-family": `"Inter Variable", "Inter Variable Placeholder", sans-serif`,
                                    "--framer-font-size": `12px`,
                                    "--framer-font-variation-axes": `var(--extracted-2gg91v, "opsz" 32, "wght" 555)`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, rgba(0, 0, 0, 0.32))`,
                                  },
                                  children: `Max quantity reached`,
                                }),
                              }),
                              fonts: [`Inter-Variable`],
                            },
                            OBRvZcfAm: {
                              children: d(a, {
                                children: d(b.p, {
                                  dir: `auto`,
                                  style: {
                                    "--framer-font-size": `12px`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138)))`,
                                  },
                                  children: `Out of Stock`,
                                }),
                              }),
                            },
                          },
                          _,
                          w
                        ),
                      }),
                    P() &&
                      d(H, {
                        children: d(W, {
                          className: `framer-6sdzev-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: A,
                          layoutId: `eNDcfDZcM-container`,
                          nodeId: `eNDcfDZcM`,
                          rendersWithMotion: !0,
                          scopeId: `LVKdAkbXH`,
                          children: d(dr, {
                            color: `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                            font: {
                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                              fontSize: `12px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `-0.05em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            id: `eNDcfDZcM`,
                            layoutId: `eNDcfDZcM`,
                            shopifyProductID: h,
                            textTemplate: `Select {{variant}}`,
                            textTransform: `None`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    I() &&
                      d(H, {
                        children: d(W, {
                          className: `framer-l9j7zu-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: A,
                          layoutId: `aa3biN0NR-container`,
                          nodeId: `aa3biN0NR`,
                          rendersWithMotion: !0,
                          scopeId: `LVKdAkbXH`,
                          children: d(zr, {
                            animation: {
                              delay: 0,
                              duration: 1.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            color: `var(--token-32039339-f64a-42c6-a8f4-f7fdfa12eb53, rgba(0, 0, 0, 0.16))`,
                            duration: 2,
                            fadeOut: !0,
                            hasDuration: !1,
                            height: `100%`,
                            id: `aa3biN0NR`,
                            indicator: `Material`,
                            layoutId: `aa3biN0NR`,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
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
          `.framer-8EGG8.framer-1q5xtwv, .framer-8EGG8 .framer-1q5xtwv { display: block; }`,
          `.framer-8EGG8.framer-1eq3e9l { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: 56px; justify-content: space-between; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-8EGG8 .framer-nn1d7r { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-8EGG8 .framer-6sdzev-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: auto; }`,
          `.framer-8EGG8 .framer-l9j7zu-container { flex: none; height: 32px; position: relative; width: 32px; }`,
          `.framer-8EGG8.framer-v-1sa16sd.framer-1eq3e9l, .framer-8EGG8.framer-v-1cffymc.framer-1eq3e9l, .framer-8EGG8.framer-v-tuv9cx.framer-1eq3e9l, .framer-8EGG8.framer-v-10j2b5q.framer-1eq3e9l { cursor: unset; gap: 0px; justify-content: center; }`,
        ],
        `framer-8EGG8`
      )),
      (ti.displayName = `FC Purchase Button / Button States`),
      (ti.defaultProps = { height: 56, width: 300 }),
      U(ti, {
        variant: {
          options: [`Erb5Bb3NL`, `jOg5_ifoq`, `OBRvZcfAm`, `iPfDE_yy2`, `hGIyjB9yv`],
          optionTitles: [`Add to Cart`, `Select Variant`, `Out of Stock`, `Max Reached`, `Loading`],
          title: `Variant`,
          type: J.Enum,
        },
        elgRTGdr9: { defaultValue: ``, title: `Product ID`, type: J.String },
        onelgRTGdr9Change: { changes: `elgRTGdr9`, type: J.ChangeHandler },
      }),
      (ni = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      T(
        ti,
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
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
              {
                cssFamilyName: `Inter Variable`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
                variationAxes: ni,
                weight: `400`,
              },
            ],
          },
          ...Ur,
          ...Wr,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi = e(() => {
    (h(),
      R(),
      w(),
      _(),
      ur(),
      ri(),
      (ii = k(ti)),
      (ai = k(cr)),
      (oi = `framer-mrAvC`),
      (si = { odqSpzOSl: `framer-v-7ytqxl` }),
      (ci = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (li = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (ui = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (di = b.create(a)),
      (fi = (e, t) => {
        let [n, r] = o(e),
          [i, a] = o(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (pi = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        Nt_kadLvR: n ?? i.Nt_kadLvR,
      })),
      (mi = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (hi = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = y(),
            { activeLocale: o, setLocale: s } = ee();
          te();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: f,
              Nt_kadLvR: p,
              onNt_kadLvRChange: m,
              ...h
            } = pi(e),
            [g, _] = fi(p, m),
            {
              baseVariant: v,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = F({ defaultVariant: `odqSpzOSl`, ref: i, variant: f, variantClassNames: si }),
            A = mi(e, k),
            j = M(oi);
          return d(C, {
            id: u ?? a,
            children: d(di, {
              animate: k,
              initial: !1,
              children: d(ui, {
                value: ci,
                children: d(b.div, {
                  ...h,
                  ...w,
                  className: M(j, `framer-7ytqxl`, l, x),
                  "data-framer-name": `Button`,
                  layoutDependency: A,
                  layoutId: `odqSpzOSl`,
                  ref: i,
                  style: { ...c },
                  children: d(H, {
                    children: d(W, {
                      className: `framer-c6kue7-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `fgCnyE4ZS-container`,
                      nodeId: `fgCnyE4ZS`,
                      rendersWithMotion: !0,
                      scopeId: `gEVioRN7C`,
                      children: d(cr, {
                        available: [
                          d(H, {
                            height: 56,
                            width: `300px`,
                            children: d(W, {
                              className: `framer-1ygrib9-container`,
                              "data-framer-name": `Available`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `eunHVpGg8-container`,
                              name: `Available`,
                              nodeId: `eunHVpGg8`,
                              rendersWithMotion: !0,
                              scopeId: `gEVioRN7C`,
                              children: d(ti, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `eunHVpGg8`,
                                layoutId: `eunHVpGg8`,
                                name: `Available`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: li(`Erb5Bb3NL`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        BuyNowATC: !1,
                        focus: { color: `rgb(0, 122, 255)`, padding: 2, radius: 0, width: 2 },
                        height: `100%`,
                        id: `fgCnyE4ZS`,
                        layoutId: `fgCnyE4ZS`,
                        LoadingState: [
                          d(H, {
                            height: 56,
                            width: `300px`,
                            children: d(W, {
                              className: `framer-xn2xue-container`,
                              "data-framer-name": `Loading`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `BJ0SuieoM-container`,
                              name: `Loading`,
                              nodeId: `BJ0SuieoM`,
                              rendersWithMotion: !0,
                              scopeId: `gEVioRN7C`,
                              children: d(ti, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `BJ0SuieoM`,
                                layoutId: `BJ0SuieoM`,
                                name: `Loading`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: li(`hGIyjB9yv`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        maxQuantity: [
                          d(H, {
                            height: 56,
                            width: `300px`,
                            children: d(W, {
                              className: `framer-1r5vrx6-container`,
                              "data-framer-name": `Max Reached`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `a7ELyCwsk-container`,
                              name: `Max Reached`,
                              nodeId: `a7ELyCwsk`,
                              rendersWithMotion: !0,
                              scopeId: `gEVioRN7C`,
                              children: d(ti, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `a7ELyCwsk`,
                                layoutId: `a7ELyCwsk`,
                                name: `Max Reached`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: li(`iPfDE_yy2`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        openCart: !0,
                        OutOfStock: [
                          d(H, {
                            height: 56,
                            width: `300px`,
                            children: d(W, {
                              className: `framer-1vtnyf8-container`,
                              "data-framer-name": `Out of Stock`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `CHpCMrlbs-container`,
                              name: `Out of Stock`,
                              nodeId: `CHpCMrlbs`,
                              rendersWithMotion: !0,
                              scopeId: `gEVioRN7C`,
                              children: d(ti, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `CHpCMrlbs`,
                                layoutId: `CHpCMrlbs`,
                                name: `Out of Stock`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: li(`OBRvZcfAm`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        SelectVariant: [
                          d(H, {
                            height: 56,
                            width: `300px`,
                            children: d(W, {
                              className: `framer-1n6qitt-container`,
                              "data-framer-name": `Select Variant`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `N30Xu7noa-container`,
                              name: `Select Variant`,
                              nodeId: `N30Xu7noa`,
                              rendersWithMotion: !0,
                              scopeId: `gEVioRN7C`,
                              children: d(ti, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `N30Xu7noa`,
                                layoutId: `N30Xu7noa`,
                                name: `Select Variant`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: li(`jOg5_ifoq`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        shopifyProductID: g,
                        shopifyProductVariantId: ``,
                        skipLoading: !1,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
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
          `.framer-mrAvC.framer-58eexz, .framer-mrAvC .framer-58eexz { display: block; }`,
          `.framer-mrAvC.framer-7ytqxl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-mrAvC .framer-c6kue7-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-mrAvC .framer-xn2xue-container, .framer-mrAvC .framer-1ygrib9-container, .framer-mrAvC .framer-1n6qitt-container, .framer-mrAvC .framer-1vtnyf8-container, .framer-mrAvC .framer-1r5vrx6-container { height: 56px; position: relative; width: 300px; }`,
        ],
        `framer-mrAvC`
      )),
      (hi.displayName = `FC Purchase Button`),
      (hi.defaultProps = { height: 56, width: 300 }),
      U(hi, {
        Nt_kadLvR: { defaultValue: ``, title: `Product ID`, type: J.String },
        onNt_kadLvRChange: { changes: `Nt_kadLvR`, type: J.ChangeHandler },
      }),
      T(hi, [{ explicitInter: !0, fonts: [] }, ...ii, ...ai], { supportsExplicitInterCodegen: !0 }),
      (hi.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(ti, {}, t)])) }));
  });
function _i(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi = e(() => {
    (h(),
      R(),
      w(),
      _(),
      Q(),
      nt(),
      Te(),
      (vi = k(ot)),
      (yi = k(Oe)),
      (bi = k(ke)),
      (xi = O(Oe)),
      (Si = { MFW5a81YI: { hover: !0 } }),
      (Ci = `framer-kVywL`),
      (wi = { MFW5a81YI: `framer-v-1bzoxy4` }),
      (Ti = void 0),
      (Ei = void 0),
      (Di = { bounce: 0, delay: 0, duration: 0.7, type: `spring` }),
      (Oi = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ki = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: i, children: t });
      }),
      (Ai = b.create(a)),
      (ji = { "Minimum Price": `minimum price`, Range: `range` }),
      (Mi = ({
        height: e,
        id: t,
        imageFront: n,
        imageHover: r,
        itemName: i,
        price: a,
        productID: o,
        varyingPrices: s,
        width: c,
        ...l
      }) => ({
        ...l,
        F7ZmIThq9: n ??
          l.F7ZmIThq9 ?? {
            pixelHeight: 2400,
            pixelWidth: 1800,
            src: `https://framerusercontent.com/images/z8kmzm3lwYaTZVLP94EZJbzPYzI.jpg?width=1800&height=2400`,
            srcSet: `https://framerusercontent.com/images/z8kmzm3lwYaTZVLP94EZJbzPYzI.jpg?scale-down-to=1024&width=1800&height=2400 768w,https://framerusercontent.com/images/z8kmzm3lwYaTZVLP94EZJbzPYzI.jpg?scale-down-to=2048&width=1800&height=2400 1536w,https://framerusercontent.com/images/z8kmzm3lwYaTZVLP94EZJbzPYzI.jpg?width=1800&height=2400 1800w`,
          },
        gt25FBQP6: ji[s] ?? s ?? l.gt25FBQP6 ?? `range`,
        Ml6hijwjh: a ?? l.Ml6hijwjh ?? `50.00`,
        NtVSpkzkZ: r ??
          l.NtVSpkzkZ ?? {
            pixelHeight: 1600,
            pixelWidth: 1336,
            src: `https://framerusercontent.com/images/uAV30NocWsKTPv0KdlYwo5ku4k.jpg?width=1336&height=1600`,
            srcSet: `https://framerusercontent.com/images/uAV30NocWsKTPv0KdlYwo5ku4k.jpg?scale-down-to=1024&width=1336&height=1600 855w,https://framerusercontent.com/images/uAV30NocWsKTPv0KdlYwo5ku4k.jpg?width=1336&height=1600 1336w`,
          },
        qPniXyCJl: i ?? l.qPniXyCJl ?? `Trucker Jacket`,
        wzmJ5q_O3: o ?? l.wzmJ5q_O3,
      })),
      (Ni = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Pi = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = ee(),
            l = te(),
            {
              style: u,
              className: f,
              layoutId: p,
              variant: h,
              F7ZmIThq9: g,
              NtVSpkzkZ: _,
              qPniXyCJl: v,
              wzmJ5q_O3: x,
              Ml6hijwjh: S,
              gt25FBQP6: w,
              ...T
            } = Mi(e),
            {
              baseVariant: D,
              classNames: O,
              clearLoadingGesture: k,
              gestureHandlers: A,
              gestureVariant: j,
              isLoading: N,
              setGestureState: P,
              setVariant: I,
              variants: R,
            } = F({
              defaultVariant: `MFW5a81YI`,
              enabledGestures: Si,
              ref: i,
              variant: h,
              variantClassNames: wi,
            }),
            z = Ni(e, R),
            B = M(Ci);
          return d(C, {
            id: p ?? o,
            children: d(Ai, {
              animate: R,
              initial: !1,
              children: d(ki, {
                value: Di,
                children: m(b.div, {
                  ...T,
                  ...A,
                  className: M(B, `framer-1bzoxy4`, f, O),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: z,
                  layoutId: `MFW5a81YI`,
                  ref: i,
                  style: { ...u },
                  ..._i({ "MFW5a81YI-hover": { "data-framer-name": void 0 } }, D, j),
                  children: [
                    d(b.div, {
                      className: `framer-oh3fo2`,
                      layoutDependency: z,
                      layoutId: `UWHVjRTAS`,
                      children: m(b.div, {
                        className: `framer-jxwl6c`,
                        "data-framer-name": `Image mask`,
                        layoutDependency: z,
                        layoutId: `XjbNFGyYJ`,
                        style: {
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: [
                          d(ie, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: L((l?.y || 0) + 0 + 0 + 0 + 0),
                              sizes: `max(${l?.width || `100vw`}, 1px)`,
                              ...Oi(_),
                              positionX: `center`,
                              positionY: `center`,
                            },
                            className: `framer-gzll0k`,
                            "data-framer-name": `Image hover`,
                            layoutDependency: z,
                            layoutId: `BRh1WzUG3`,
                            style: {
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                          }),
                          d(ie, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: L((l?.y || 0) + 0 + 0 + 0 + 0),
                              pixelHeight: 2400,
                              pixelWidth: 1800,
                              sizes: `max(${l?.width || `100vw`}, 1px)`,
                              ...Oi(g),
                              positionX: `center`,
                              positionY: `center`,
                            },
                            className: `framer-x6plmn`,
                            "data-framer-name": `Image front`,
                            layoutDependency: z,
                            layoutId: `wSYwTY3yH`,
                            style: {
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              opacity: 1,
                            },
                            variants: { "MFW5a81YI-hover": { opacity: 0 } },
                          }),
                          d(b.div, {
                            className: `framer-1735z4i`,
                            "data-framer-name": `Arrow`,
                            layoutDependency: z,
                            layoutId: `eR9hYhlsg`,
                            style: {
                              backgroundColor: `rgba(0, 0, 0, 0.24)`,
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                              opacity: 0,
                            },
                            variants: { "MFW5a81YI-hover": { opacity: 1 } },
                            children: d(H, {
                              children: d(W, {
                                className: `framer-1n3uc2z-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: z,
                                layoutId: `a2IKnc0t9-container`,
                                nodeId: `a2IKnc0t9`,
                                rendersWithMotion: !0,
                                scopeId: `oCgn02MOg`,
                                style: { opacity: 0 },
                                variants: { "MFW5a81YI-hover": { opacity: 1 } },
                                children: d(ot, {
                                  color: `var(--token-4f98d031-00dc-48a2-9f58-f15456bb59b3, rgb(0, 0, 0))`,
                                  height: `100%`,
                                  iconSearch: `House`,
                                  iconSelection: `ArrowUpRight`,
                                  id: `a2IKnc0t9`,
                                  layoutId: `a2IKnc0t9`,
                                  mirrored: !1,
                                  selectByList: !0,
                                  style: { height: `100%`, width: `100%` },
                                  weight: `regular`,
                                  width: `100%`,
                                  ..._i(
                                    {
                                      "MFW5a81YI-hover": {
                                        color: `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                      },
                                    },
                                    D,
                                    j
                                  ),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    m(b.div, {
                      className: `framer-2gcxam`,
                      "data-framer-name": `Text`,
                      layoutDependency: z,
                      layoutId: `fwpH2iLXv`,
                      children: [
                        d(E, {
                          __fromCanvasComponent: !0,
                          children: d(a, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--framer-letter-spacing": `-0.05em`,
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-4f98d031-00dc-48a2-9f58-f15456bb59b3, rgb(0, 0, 0)))`,
                              },
                              children: `Trucker Jacket`,
                            }),
                          }),
                          className: `framer-ehb1f6`,
                          "data-framer-name": `Trucker Jacket`,
                          fonts: [`Inter`],
                          layoutDependency: z,
                          layoutId: `IQqr8qmHp`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-4f98d031-00dc-48a2-9f58-f15456bb59b3, rgb(0, 0, 0))`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: v,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(b.div, {
                          className: `framer-uiv3do`,
                          "data-framer-name": `Price`,
                          layoutDependency: z,
                          layoutId: `AbobkO861`,
                          children: [
                            d(H, {
                              children: d(W, {
                                className: `framer-gin1v9-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: z,
                                layoutId: `h4NVgBhay-container`,
                                nodeId: `h4NVgBhay`,
                                rendersWithMotion: !0,
                                scopeId: `oCgn02MOg`,
                                children: d(Oe, {
                                  canvasPrice: S,
                                  displayPrice: w,
                                  format: {
                                    currencyCode: `USD`,
                                    showCurrency: !0,
                                    showDecimals: `Hide when .00`,
                                    showSymbol: !0,
                                  },
                                  fromText: `from`,
                                  height: `100%`,
                                  id: `h4NVgBhay`,
                                  layoutId: `h4NVgBhay`,
                                  regularColor: `rgb(0, 0, 0)`,
                                  regularFont: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `-0.05em`,
                                    lineHeight: `1em`,
                                  },
                                  saleColor: `rgb(255, 0, 0)`,
                                  saleFont: {},
                                  shopifyProductID: x,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            d(H, {
                              children: d(W, {
                                className: `framer-1ajjj0l-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: z,
                                layoutId: `i3EkNWHlv-container`,
                                nodeId: `i3EkNWHlv`,
                                rendersWithMotion: !0,
                                scopeId: `oCgn02MOg`,
                                children: d(ke, {
                                  canvasPrice: Ei,
                                  color: `rgba(0, 0, 0, 0.54)`,
                                  compareAtPrefix: ``,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `-0.05em`,
                                    lineHeight: `1em`,
                                  },
                                  format: {
                                    currencyCode: `USD`,
                                    showCurrency: !0,
                                    showDecimals: `Always show`,
                                    showSymbol: !0,
                                  },
                                  height: `100%`,
                                  id: `i3EkNWHlv`,
                                  layoutId: `i3EkNWHlv`,
                                  shopifyProductID: Ti,
                                  strikethrough: !0,
                                  strikethroughColor: `rgba(0, 0, 0, 0.54)`,
                                  strikethroughSize: 1,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-kVywL.framer-1w4neas, .framer-kVywL .framer-1w4neas { display: block; }`,
          `.framer-kVywL.framer-1bzoxy4 { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 322px; }`,
          `.framer-kVywL .framer-oh3fo2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kVywL .framer-jxwl6c { aspect-ratio: 0.8277634961439588 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 389px); overflow: visible; position: relative; width: 1px; }`,
          `.framer-kVywL .framer-gzll0k, .framer-kVywL .framer-x6plmn { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; }`,
          `.framer-kVywL .framer-1735z4i { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 8px; position: absolute; right: 12px; top: 12px; width: 32px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-kVywL .framer-1n3uc2z-container { bottom: -24px; flex: none; height: 18px; left: -24px; position: absolute; width: 18px; z-index: 1; }`,
          `.framer-kVywL .framer-2gcxam { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 0px 12px 0px; position: relative; width: 100%; }`,
          `.framer-kVywL .framer-ehb1f6 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-kVywL .framer-uiv3do { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kVywL .framer-gin1v9-container, .framer-kVywL .framer-1ajjj0l-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-kVywL.framer-v-1bzoxy4.hover .framer-1n3uc2z-container { bottom: unset; left: calc(50.00000000000002% - 18px / 2); top: calc(50.00000000000002% - 18px / 2); }`,
        ],
        `framer-kVywL`
      )),
      (Pi.displayName = `Product Item`),
      (Pi.defaultProps = { height: 447, width: 322 }),
      U(Pi, {
        F7ZmIThq9: {
          __defaultAssetReference: `data:framer/asset-reference,z8kmzm3lwYaTZVLP94EZJbzPYzI.jpg?originalFilename=QmXLfxFMzpddmtd8VY9q93ebV3UxJibxda2HehrV29P1Pe%3Fauto%3Dformat%26h%3D2400.jpg&width=1800&height=2400`,
          description: ``,
          title: `Image front`,
          type: J.ResponsiveImage,
        },
        NtVSpkzkZ: {
          __defaultAssetReference: `data:framer/asset-reference,uAV30NocWsKTPv0KdlYwo5ku4k.jpg?originalFilename=image+1+%281%29.jpg&preferredSize=auto`,
          title: `Image hover`,
          type: J.ResponsiveImage,
        },
        qPniXyCJl: {
          defaultValue: `Trucker Jacket`,
          displayTextArea: !1,
          title: `Item name`,
          type: J.String,
        },
        onqPniXyCJlChange: { changes: `qPniXyCJl`, type: J.ChangeHandler },
        wzmJ5q_O3: { defaultValue: ``, placeholder: ``, title: `Product ID`, type: J.String },
        onwzmJ5q_O3Change: { changes: `wzmJ5q_O3`, type: J.ChangeHandler },
        Ml6hijwjh: { defaultValue: `50.00`, title: `Price`, type: J.String },
        onMl6hijwjhChange: { changes: `Ml6hijwjh`, type: J.ChangeHandler },
        gt25FBQP6: xi?.displayPrice && {
          ...xi.displayPrice,
          defaultValue: `range`,
          description: void 0,
          hidden: void 0,
          title: `Varying Prices`,
        },
        ongt25FBQP6Change: { changes: `gt25FBQP6`, type: J.ChangeHandler },
      }),
      T(
        Pi,
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
          ...vi,
          ...yi,
          ...bi,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa;
e(() => {
  (h(),
    R(),
    w(),
    _(),
    $t(),
    rn(),
    mn(),
    gn(),
    Q(),
    nt(),
    We(),
    Te(),
    ar(),
    gi(),
    st(),
    Fi(),
    Xe(),
    Ye(),
    Ne(),
    Ke(),
    ut(),
    dt(),
    ze(),
    Fe(),
    vt(),
    (Ii = k(Qt)),
    (Li = k(hn)),
    (Ri = k(Ze)),
    (zi = k(ct)),
    (Bi = k(Oe)),
    (Vi = k(ke)),
    (Hi = k(an)),
    (Ui = k(ir)),
    (Wi = k(hi)),
    (Gi = k(nn)),
    (Ki = k(ot)),
    (qi = G(b.section)),
    (Ji = k(Pi)),
    (Yi = k(Je)),
    (Xi = {
      rdwciJzcf: `(min-width: 810px) and (max-width: 1199.98px)`,
      UHI4ODTtA: `(max-width: 809.98px)`,
      Zx3_VrhSF: `(min-width: 1200px)`,
    }),
    (Zi = []),
    (Qi = `framer-mCdPw`),
    ($i = {
      rdwciJzcf: `framer-v-1p5lyys`,
      UHI4ODTtA: `framer-v-1q8j5kj`,
      Zx3_VrhSF: `framer-v-15m06yp`,
    }),
    (ea = (e, t, n) => (e && t ? `position` : n)),
    (ta = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.3, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (na = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (ra = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (ia = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (aa = () => ({
      from: { alias: `XpYvs2xmd`, data: Pe, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `XpYvs2xmd`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `knQm7eMgK`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `XpYvs2xmd`, name: `id`, type: `Identifier` },
      ],
    })),
    (oa = ({ query: e, pageSize: t, children: n }) => n(P(e))),
    (sa = { Desktop: `Zx3_VrhSF`, Phone: `UHI4ODTtA`, Tablet: `rdwciJzcf` }),
    (ca = ({ value: e }) =>
      q()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (la = (e) => ({
      from: { alias: `unRZtzSgJ`, data: Pe, type: `Collection` },
      select: [
        { collection: `unRZtzSgJ`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `FnlFsjH5P`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `ltMGpnf5y`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `knQm7eMgK`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `F_kvbBV4R`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `jLiw1ZFth`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `j71CdDouF`, type: `Identifier` },
        { collection: `unRZtzSgJ`, name: `qtxO0uchm`, type: `Identifier` },
      ],
      where: e,
    })),
    (ua = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: sa[r.variant] ?? r.variant ?? `Zx3_VrhSF`,
    })),
    (da = D(
      f(function (e, n) {
        let r = t(null),
          i = n ?? r,
          o = y(),
          { activeLocale: l, setLocale: u } = ee(),
          f = te(),
          p = K(),
          [h] = P(la(j(p, `unRZtzSgJ`))),
          _ = (e) => {
            if (!h) throw new le(`No data matches path variables: ${JSON.stringify(p)}`);
            return h[e];
          },
          {
            style: v,
            className: x,
            layoutId: w,
            variant: T,
            FCIPIBRAL: D = _(`FCIPIBRAL`) ?? ``,
            bf_4Vezhu: O = _(`bf_4Vezhu`) ?? ``,
            FnlFsjH5P: k = _(`FnlFsjH5P`) ?? ``,
            ltMGpnf5y: A = _(`ltMGpnf5y`) ?? ``,
            Gv7QQejjQ: F = _(`Gv7QQejjQ`),
            knQm7eMgK: I = _(`knQm7eMgK`),
            F_kvbBV4R: L = _(`F_kvbBV4R`),
            SbAOTK1XD: R = _(`SbAOTK1XD`) ?? ``,
            jLiw1ZFth: U = _(`jLiw1ZFth`) ?? ``,
            j71CdDouF: W = _(`j71CdDouF`) ?? ``,
            qtxO0uchm: G = _(`qtxO0uchm`) ?? ``,
            ...ie
          } = ua(e);
        ue(c(() => _t({ FCIPIBRAL: D }, l), [D, l]));
        let [q, oe] = re(T, Xi, !1),
          J = M(Qi, qe, gt, Re, He, lt),
          se = s(V)?.isLayoutTemplate,
          ce = !!s(S)?.transition?.layout,
          Y = ea(se, ce);
        return (
          ne({}),
          d(V.Provider, {
            value: {
              activeVariantId: q,
              humanReadableVariantMap: sa,
              primaryVariantId: `Zx3_VrhSF`,
              variantClassNames: $i,
            },
            children: m(C, {
              id: w ?? o,
              children: [
                d(ca, { value: `html body { background: rgb(255, 255, 255); }` }),
                m(b.div, {
                  ...ie,
                  className: M(J, `framer-15m06yp`, x),
                  ref: i,
                  style: { ...v },
                  children: [
                    m(qi, {
                      animate: ta,
                      className: `framer-7bamvn`,
                      "data-framer-appear-id": `7bamvn`,
                      "data-framer-name": `Product`,
                      initial: na,
                      layout: Y,
                      optimized: !0,
                      children: [
                        d(N, {
                          breakpoint: q,
                          overrides: {
                            rdwciJzcf: {
                              width: `calc(${f?.width || `100vw`} - 64px)`,
                              y: (f?.y || 0) + 0 + 0 + 100 + 0,
                            },
                            UHI4ODTtA: {
                              width: `calc(${f?.width || `100vw`} - 48px)`,
                              y: (f?.y || 0) + 0 + 0 + 100 + 0,
                            },
                          },
                          children: d(H, {
                            height: 602,
                            width: `max((${f?.width || `100vw`} - 104px) / 2, 1px)`,
                            y: (f?.y || 0) + 0 + 0 + 417.3,
                            children: d(B, {
                              className: `framer-7gx8na-container`,
                              isModuleExternal: !0,
                              nodeId: `ab6pq9VjU`,
                              scopeId: `unRZtzSgJ`,
                              children: d(N, {
                                breakpoint: q,
                                overrides: { UHI4ODTtA: { variant: ia(`ZPZdxQ27E`) } },
                                children: d(Qt, {
                                  EpS2iXyo7: ra(F),
                                  height: `100%`,
                                  id: `ab6pq9VjU`,
                                  layoutId: `ab6pq9VjU`,
                                  P2lnBz26D: ra(I),
                                  style: { width: `100%` },
                                  UEZPwfUqX: ra(L),
                                  variant: ia(`KaEsM2m2J`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                        m(`div`, {
                          className: `framer-f5q4lm`,
                          "data-framer-name": `Description`,
                          children: [
                            m(`div`, {
                              className: `framer-n511gi`,
                              "data-framer-name": `Stock + Favorite`,
                              children: [
                                d(H, {
                                  children: d(B, {
                                    className: `framer-75pfo5-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `v5cwzMzg_`,
                                    scopeId: `unRZtzSgJ`,
                                    children: d(hn, {
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `14px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `-0.05em`,
                                        lineHeight: `1em`,
                                      },
                                      height: `100%`,
                                      id: `v5cwzMzg_`,
                                      layoutId: `v5cwzMzg_`,
                                      noLimitText: `In Stock`,
                                      outOfStockText: `Out of Stock`,
                                      shopifyProductID: O,
                                      showOutOfStock: !0,
                                      textColor: `rgb(0, 0, 0)`,
                                      textFormat: `{{inventory}} left in stock`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                d(N, {
                                  breakpoint: q,
                                  overrides: {
                                    rdwciJzcf: { y: (f?.y || 0) + 0 + 0 + 100 + 642 + 0 + 0 + 76 },
                                    UHI4ODTtA: { y: (f?.y || 0) + 0 + 0 + 100 + 642 + 0 + 0 + 76 },
                                  },
                                  children: d(H, {
                                    height: 48,
                                    y: (f?.y || 0) + 0 + 0 + 100 + 0 + 0 + 76,
                                    children: d(B, {
                                      className: `framer-sqvpxu-container`,
                                      nodeId: `NHyHXNh3m`,
                                      scopeId: `unRZtzSgJ`,
                                      children: d(Ze, {
                                        height: `100%`,
                                        hpTCa5Ntv: O,
                                        id: `NHyHXNh3m`,
                                        layoutId: `NHyHXNh3m`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              ],
                            }),
                            d(`div`, {
                              className: `framer-1a2k1j9`,
                              "data-framer-name": `Product Tag`,
                              children: d(N, {
                                breakpoint: q,
                                overrides: {
                                  rdwciJzcf: { y: (f?.y || 0) + 0 + 0 + 100 + 642 + 0 + 224 + 0 },
                                  UHI4ODTtA: { y: (f?.y || 0) + 0 + 0 + 100 + 642 + 0 + 224 + 0 },
                                },
                                children: d(H, {
                                  height: 29,
                                  y: (f?.y || 0) + 0 + 0 + 100 + 0 + 224 + 0,
                                  children: d(B, {
                                    className: `framer-kdcykp-container`,
                                    "data-framer-name": `tag`,
                                    name: `tag`,
                                    nodeId: `u5dKUDFJS`,
                                    scopeId: `unRZtzSgJ`,
                                    children: d(N, {
                                      breakpoint: q,
                                      overrides: {
                                        rdwciJzcf: { variant: ia(`RoXn7LgPt`) },
                                        UHI4ODTtA: { variant: ia(`RoXn7LgPt`) },
                                      },
                                      children: d(ct, {
                                        c8JjutPIf: W,
                                        height: `100%`,
                                        id: `u5dKUDFJS`,
                                        layoutId: `u5dKUDFJS`,
                                        name: `tag`,
                                        uAEp1shrJ: `var(--token-08c0a1b2-6453-4e0b-b1db-f0593e85b925, rgb(245, 245, 245))`,
                                        variant: ia(`Qjhs5Lyem`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            d(`div`, {
                              className: `framer-4cjus1`,
                              "data-framer-name": `Product Title`,
                              children: d(E, {
                                __fromCanvasComponent: !0,
                                children: d(a, {
                                  children: d(`h1`, {
                                    className: `framer-styles-preset-ul51j9`,
                                    "data-styles-preset": `hPRt9GJWZ`,
                                    dir: `auto`,
                                    children: `Bubbli Grape`,
                                  }),
                                }),
                                className: `framer-16jjhdw`,
                                "data-framer-name": `Bubbli Grape`,
                                fonts: [`Inter`],
                                text: D,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            m(`div`, {
                              className: `framer-1p3a233`,
                              "data-framer-name": `Details`,
                              children: [
                                d(`div`, {
                                  className: `framer-ok4uf3`,
                                  "data-framer-name": `Description`,
                                  children: d(E, {
                                    __fromCanvasComponent: !0,
                                    children: U,
                                    className: `framer-8pxed8`,
                                    "data-framer-name": `Description`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      a: `framer-styles-preset-z5vi95`,
                                      h5: `framer-styles-preset-1n2hlk7`,
                                      img: `framer-styles-preset-1ohma00`,
                                      p: `framer-styles-preset-1u75rap`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                d(`div`, {
                                  className: `framer-z3lsy7`,
                                  "data-framer-name": `Price`,
                                  children: m(`div`, {
                                    className: `framer-1qn5rfr`,
                                    "data-framer-name": `Container`,
                                    children: [
                                      d(H, {
                                        children: d(B, {
                                          className: `framer-u3g2mo-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `zsIMMzR4Z`,
                                          scopeId: `unRZtzSgJ`,
                                          children: d(Oe, {
                                            canvasPrice: G,
                                            displayPrice: `minimum price`,
                                            format: {
                                              currencyCode: `USD`,
                                              showCurrency: !0,
                                              showDecimals: `Hide when .00`,
                                              showSymbol: !0,
                                            },
                                            fromText: `from`,
                                            height: `100%`,
                                            id: `zsIMMzR4Z`,
                                            layoutId: `zsIMMzR4Z`,
                                            regularColor: `rgb(0, 0, 0)`,
                                            regularFont: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `14px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `-0.05em`,
                                              lineHeight: `1em`,
                                            },
                                            saleColor: `rgb(240, 25, 25)`,
                                            saleFont: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `16px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `-0.05em`,
                                              lineHeight: `1em`,
                                            },
                                            shopifyProductID: O,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(H, {
                                        children: d(B, {
                                          className: `framer-19hi67k-container`,
                                          isAuthoredByUser: !0,
                                          isModuleExternal: !0,
                                          nodeId: `t0l9HXFbZ`,
                                          scopeId: `unRZtzSgJ`,
                                          children: d(ke, {
                                            canvasPrice: R,
                                            color: `rgba(0, 0, 0, 0.54)`,
                                            compareAtPrefix: ``,
                                            font: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `14px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `-0.05em`,
                                              lineHeight: `1em`,
                                            },
                                            format: {
                                              currencyCode: `USD`,
                                              showCurrency: !0,
                                              showDecimals: `Hide when .00`,
                                              showSymbol: !0,
                                            },
                                            height: `100%`,
                                            id: `t0l9HXFbZ`,
                                            layoutId: `t0l9HXFbZ`,
                                            shopifyProductID: O,
                                            strikethrough: !0,
                                            strikethroughColor: `rgba(0, 0, 0, 0.54)`,
                                            strikethroughSize: 1.5,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                d(`div`, {
                                  className: `framer-1m7588f`,
                                  "data-framer-name": `Variant + Stock`,
                                  children: d(H, {
                                    children: d(B, {
                                      className: `framer-1vbr5i6-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `J3SO8BlQ_`,
                                      scopeId: `unRZtzSgJ`,
                                      children: d(an, {
                                        behaviorConfigs: {
                                          action: `Update Active`,
                                          autoSelectFirst: !1,
                                          filterVariants: {
                                            variantGroups: `all`,
                                            variantTitles: [],
                                          },
                                          productPage: !0,
                                          selectOutOfStock: !1,
                                          showSingleVariants: !1,
                                          triggerCart: !0,
                                        },
                                        buttonConfigs: {
                                          columnCount: 3,
                                          columns: `auto`,
                                          direction: `horizontal`,
                                          gap: 8,
                                          gapY: 8,
                                          gridWidth: 100,
                                          hovered: {
                                            background: `rgba(0, 0, 0, 0.03)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgb(0, 0, 0)`,
                                            font: {},
                                            textTransform: `None`,
                                          },
                                          layout: `stack`,
                                          maxColumns: 4,
                                          outOfStock: {
                                            background: `rgba(0, 0, 0, 0.08)`,
                                            border: {
                                              borderColor: `rgb(255, 255, 255)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgba(0, 0, 0, 0.4)`,
                                            font: {},
                                            preview: !1,
                                            strike: {
                                              color: `rgba(0, 0, 0, 0.16)`,
                                              direction: `diagonal-down`,
                                              line: !1,
                                              size: `container`,
                                            },
                                            textTransform: `None`,
                                          },
                                          padding: `8px`,
                                          radius: `4px`,
                                          selected: {
                                            background: `rgb(0, 0, 0)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgb(255, 255, 255)`,
                                            font: {},
                                            textTransform: `None`,
                                          },
                                          unselected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.08)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgb(0, 0, 0)`,
                                            font: {},
                                            textTransform: `None`,
                                          },
                                          width: !1,
                                        },
                                        colors: [],
                                        colorTitles: [`Color`],
                                        containerConfigs: {
                                          background: `rgba(255, 255, 255, 0)`,
                                          direction: `vertical`,
                                          gap: 24,
                                          gap2: 8,
                                          padding: `0px`,
                                          radius: `0px`,
                                        },
                                        dropdownConfigs: {
                                          focus: { color: `rgb(0, 153, 255)`, offset: 2, width: 2 },
                                          font: {},
                                          hover: {
                                            background: `rgba(0, 0, 0, 0.04)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgb(0, 0, 0)`,
                                          },
                                          icon: {
                                            color: `rgb(0, 0, 0)`,
                                            size: 12,
                                            type: `default`,
                                            weight: 2,
                                          },
                                          padding: `16px 16px 16px 16px`,
                                          radius: `4px`,
                                          selected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.16)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgb(0, 0, 0)`,
                                          },
                                          textTransform: `None`,
                                          unselected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.08)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            color: `rgba(0, 0, 0, 0.48)`,
                                            text: `Select {{variant}}`,
                                          },
                                        },
                                        height: `100%`,
                                        id: `J3SO8BlQ_`,
                                        images: {
                                          imageChange: !0,
                                          imageTrigger: `None`,
                                          offsetY: 0,
                                        },
                                        imageSwatches: {
                                          image: !1,
                                          imageGap: 8,
                                          imageHeight: 40,
                                          imageHovered: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.16)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageOutOfStock: {
                                            background: `rgba(255, 255, 255, 0)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            opacity: 0.5,
                                            strike: {
                                              color: `rgba(0, 0, 0, 0.16)`,
                                              direction: `diagonal-down`,
                                              line: !1,
                                            },
                                          },
                                          imagePadding: `2px`,
                                          imageRadius: `50%`,
                                          imageSelected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageStyles: `inherit`,
                                          imageUnselected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgb(255, 255, 255)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageWidth: 40,
                                        },
                                        imageTitles: [],
                                        layoutId: `J3SO8BlQ_`,
                                        selectedConfigs: {
                                          color: `rgb(0, 0, 0)`,
                                          emptyText: `Select {{Option Value}}`,
                                          emptyVisible: !0,
                                          font: {},
                                          gap: 8,
                                          textTransform: `None`,
                                          visible: !1,
                                        },
                                        shopifyProductID: O,
                                        style: `Buttons`,
                                        swatches: {
                                          colorEnabled: !0,
                                          gap: 8,
                                          height: 40,
                                          hovered: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.16)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          outOfStock: {
                                            background: `rgba(255, 255, 255, 0)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            opacity: 0.5,
                                            strike: {
                                              color: `rgba(0, 0, 0, 0.16)`,
                                              direction: `diagonal-down`,
                                              line: !1,
                                            },
                                          },
                                          padding: `2px`,
                                          radius: `50%`,
                                          selected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          unselected: {
                                            background: `rgba(255, 255, 255, 0)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          width: 40,
                                        },
                                        swatchImages: [],
                                        titleConfigs: {
                                          color: `rgb(0, 0, 0)`,
                                          display: `{{Option}}`,
                                          font: {},
                                          gap: 8,
                                          textTransform: `None`,
                                          visible: !0,
                                        },
                                        variantImageIds: A,
                                        variantImages: {
                                          image: !1,
                                          imageGap: 8,
                                          imageHeight: 40,
                                          imageHovered: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0.16)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageOutOfStock: {
                                            background: `rgba(255, 255, 255, 0)`,
                                            border: {
                                              borderColor: `rgba(0, 0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                            opacity: 0.5,
                                            strike: {
                                              color: `rgba(0, 0, 0, 0.16)`,
                                              direction: `diagonal-down`,
                                              line: !1,
                                            },
                                          },
                                          imagePadding: `2px`,
                                          imageRadius: `50%`,
                                          imageSelected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgb(0, 0, 0)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageStyles: `inherit`,
                                          imageUnselected: {
                                            background: `rgb(255, 255, 255)`,
                                            border: {
                                              borderColor: `rgb(255, 255, 255)`,
                                              borderStyle: `solid`,
                                              borderWidth: 1,
                                              bottom: 1,
                                              isMixed: !1,
                                              left: 1,
                                              right: 1,
                                              top: 1,
                                            },
                                          },
                                          imageWidth: 40,
                                        },
                                        variantImageTitles: [],
                                        variants: k,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                d(`div`, {
                                  className: `framer-b5z01r`,
                                  "data-framer-name": `Quantity`,
                                  children: m(`div`, {
                                    className: `framer-10phet0`,
                                    children: [
                                      d(N, {
                                        breakpoint: q,
                                        overrides: {
                                          rdwciJzcf: {
                                            width: `max(min(${f?.width || `100vw`} - 64px, 600px), 1px)`,
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              100 +
                                              642 +
                                              0 +
                                              322.6 +
                                              0 +
                                              568 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          UHI4ODTtA: {
                                            width: `max(min(${f?.width || `100vw`} - 48px, 600px), 1px)`,
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              100 +
                                              642 +
                                              0 +
                                              322.6 +
                                              0 +
                                              568 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: d(H, {
                                          height: 40,
                                          width: `max(min(max((${f?.width || `100vw`} - 104px) / 2, 1px), 600px), 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            322.6 +
                                            0 +
                                            568 +
                                            0 +
                                            0 +
                                            0,
                                          children: d(B, {
                                            className: `framer-fh3ap6-container`,
                                            isModuleExternal: !0,
                                            nodeId: `GVQko6ZBM`,
                                            scopeId: `unRZtzSgJ`,
                                            children: d(ir, {
                                              bVhYNmEzi: O,
                                              height: `100%`,
                                              id: `GVQko6ZBM`,
                                              layoutId: `GVQko6ZBM`,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      d(N, {
                                        breakpoint: q,
                                        overrides: {
                                          rdwciJzcf: {
                                            width: `max(min(${f?.width || `100vw`} - 64px, 600px), 1px)`,
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              100 +
                                              642 +
                                              0 +
                                              322.6 +
                                              0 +
                                              568 +
                                              0 +
                                              0 +
                                              52,
                                          },
                                          UHI4ODTtA: {
                                            width: `max(min(${f?.width || `100vw`} - 48px, 600px), 1px)`,
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              0 +
                                              100 +
                                              642 +
                                              0 +
                                              322.6 +
                                              0 +
                                              568 +
                                              0 +
                                              0 +
                                              52,
                                          },
                                        },
                                        children: d(H, {
                                          height: 40,
                                          width: `max(min(max((${f?.width || `100vw`} - 104px) / 2, 1px), 600px), 1px)`,
                                          y:
                                            (f?.y || 0) +
                                            0 +
                                            0 +
                                            100 +
                                            0 +
                                            322.6 +
                                            0 +
                                            568 +
                                            0 +
                                            0 +
                                            52,
                                          children: d(B, {
                                            className: `framer-15red9h-container`,
                                            nodeId: `qEfYNHNzp`,
                                            scopeId: `unRZtzSgJ`,
                                            children: d(hi, {
                                              height: `100%`,
                                              id: `qEfYNHNzp`,
                                              layoutId: `qEfYNHNzp`,
                                              Nt_kadLvR: O,
                                              style: { height: `100%`, width: `100%` },
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                }),
                                d(H, {
                                  children: d(B, {
                                    className: `framer-h1i28h-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `vRBOE0cey`,
                                    scopeId: `unRZtzSgJ`,
                                    children: d(nn, {
                                      color: `Black on White`,
                                      display: `Buy with`,
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `16px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `-0.05em`,
                                        lineHeight: `1em`,
                                      },
                                      height: `100%`,
                                      id: `vRBOE0cey`,
                                      layoutId: `vRBOE0cey`,
                                      radius: 8,
                                      shopifyProductID: O,
                                      style: { height: `100%`, width: `100%` },
                                      text: !1,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                m(`div`, {
                                  className: `framer-kd9ioo`,
                                  "data-border": !0,
                                  "data-framer-name": `Benefits`,
                                  children: [
                                    m(`div`, {
                                      className: `framer-194ha6a`,
                                      "data-framer-name": `Benefit 1`,
                                      children: [
                                        d(H, {
                                          children: d(B, {
                                            className: `framer-qw9cot-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `g3RyVmrTd`,
                                            scopeId: `unRZtzSgJ`,
                                            children: d(ot, {
                                              color: `rgb(0, 0, 0)`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Lock`,
                                              id: `g3RyVmrTd`,
                                              layoutId: `g3RyVmrTd`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(E, {
                                          __fromCanvasComponent: !0,
                                          children: d(a, {
                                            children: d(`p`, {
                                              className: `framer-styles-preset-1u75rap`,
                                              "data-styles-preset": `qZYHjqVrz`,
                                              dir: `auto`,
                                              children: `Safe Payment`,
                                            }),
                                          }),
                                          className: `framer-160bupw`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    m(`div`, {
                                      className: `framer-xcl59j`,
                                      "data-framer-name": `Benefit 2`,
                                      children: [
                                        d(H, {
                                          children: d(B, {
                                            className: `framer-1w5rluk-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `MbLP6QYKi`,
                                            scopeId: `unRZtzSgJ`,
                                            children: d(ot, {
                                              color: `rgb(0, 0, 0)`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Truck`,
                                              id: `MbLP6QYKi`,
                                              layoutId: `MbLP6QYKi`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(E, {
                                          __fromCanvasComponent: !0,
                                          children: d(a, {
                                            children: d(`p`, {
                                              className: `framer-styles-preset-1u75rap`,
                                              "data-styles-preset": `qZYHjqVrz`,
                                              dir: `auto`,
                                              children: `Free Shipping`,
                                            }),
                                          }),
                                          className: `framer-y75taf`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    m(`div`, {
                                      className: `framer-126xuzo`,
                                      "data-framer-name": `Benefit 3`,
                                      children: [
                                        d(H, {
                                          children: d(B, {
                                            className: `framer-tohqbe-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `BxLIa9AQT`,
                                            scopeId: `unRZtzSgJ`,
                                            children: d(ot, {
                                              color: `rgb(0, 0, 0)`,
                                              height: `100%`,
                                              iconSearch: `House`,
                                              iconSelection: `Package`,
                                              id: `BxLIa9AQT`,
                                              layoutId: `BxLIa9AQT`,
                                              mirrored: !1,
                                              selectByList: !0,
                                              style: { height: `100%`, width: `100%` },
                                              weight: `regular`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                        d(E, {
                                          __fromCanvasComponent: !0,
                                          children: d(a, {
                                            children: d(`p`, {
                                              className: `framer-styles-preset-1u75rap`,
                                              "data-styles-preset": `qZYHjqVrz`,
                                              dir: `auto`,
                                              children: `Delivery in 2-5 days`,
                                            }),
                                          }),
                                          className: `framer-ave99v`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d(`div`, {
                              className: `framer-1k6k4zz`,
                              "data-framer-name": `Guarantee`,
                              children: d(E, {
                                __fromCanvasComponent: !0,
                                children: d(a, {
                                  children: d(`p`, {
                                    className: `framer-styles-preset-1u75rap`,
                                    "data-styles-preset": `qZYHjqVrz`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                    },
                                    children: `30-day risk-free guarantee. `,
                                  }),
                                }),
                                className: `framer-1c7m3l3`,
                                fonts: [`Inter`],
                                verticalAlignment: `center`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    d(b.section, {
                      className: `framer-16232bt`,
                      "data-framer-name": `More Products`,
                      layout: Y,
                      children: m(`div`, {
                        className: `framer-1cr57mo`,
                        "data-framer-name": `Container`,
                        children: [
                          m(`header`, {
                            className: `framer-1y6k4g5`,
                            "data-framer-name": `Header`,
                            children: [
                              d(E, {
                                __fromCanvasComponent: !0,
                                children: d(a, {
                                  children: d(`h1`, {
                                    className: `framer-styles-preset-ul51j9`,
                                    "data-styles-preset": `hPRt9GJWZ`,
                                    dir: `auto`,
                                    children: `More Hydration`,
                                  }),
                                }),
                                className: `framer-1jdghf9`,
                                "data-framer-name": `More Hydration`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(`div`, {
                                className: `framer-19c50mo`,
                                "data-framer-name": `Subtext`,
                                children: d(N, {
                                  breakpoint: q,
                                  overrides: {
                                    rdwciJzcf: {
                                      children: d(a, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-1u75rap`,
                                          "data-styles-preset": `qZYHjqVrz`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Check out our most popular products!`,
                                        }),
                                      }),
                                    },
                                    UHI4ODTtA: {
                                      children: d(a, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-1u75rap`,
                                          "data-styles-preset": `qZYHjqVrz`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `Check out our most popular products!`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: d(E, {
                                    __fromCanvasComponent: !0,
                                    children: d(a, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-1u75rap`,
                                        "data-styles-preset": `qZYHjqVrz`,
                                        dir: `auto`,
                                        children: `Check out our most popular products!`,
                                      }),
                                    }),
                                    className: `framer-iz1m8o`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          d(`div`, {
                            className: `framer-f60lh5`,
                            children: d(ae, {
                              children: d(oa, {
                                query: aa(),
                                children: (e, t, n) =>
                                  d(g, {
                                    children: e?.map(
                                      (
                                        {
                                          bf_4Vezhu: e,
                                          EKLxfLWe8: t,
                                          FCIPIBRAL: n,
                                          Gv7QQejjQ: r,
                                          id: i,
                                          knQm7eMgK: a,
                                          qtxO0uchm: o,
                                        },
                                        s
                                      ) => (
                                        (t ??= ``),
                                        (n ??= ``),
                                        (e ??= ``),
                                        (o ??= ``),
                                        d(
                                          C,
                                          {
                                            id: `XpYvs2xmd-${i}`,
                                            children: d(de.Provider, {
                                              value: { EKLxfLWe8: t },
                                              children: d(z, {
                                                href: {
                                                  pathVariables: { EKLxfLWe8: t },
                                                  webPageId: `unRZtzSgJ`,
                                                },
                                                motionChild: !0,
                                                nodeId: `U18kaJvRN`,
                                                openInNewTab: !1,
                                                scopeId: `unRZtzSgJ`,
                                                children: d(b.a, {
                                                  className: `framer-11pvfzo framer-3lx8fp`,
                                                  children: d(N, {
                                                    breakpoint: q,
                                                    overrides: {
                                                      rdwciJzcf: {
                                                        width: `max(max((${f?.width || `100vw`} - 214px) / 3, 50px), 1px)`,
                                                        y:
                                                          (f?.y || 0) +
                                                          0 +
                                                          2010.6 +
                                                          80 +
                                                          0 +
                                                          0 +
                                                          170.6 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                      UHI4ODTtA: {
                                                        width: `max(${f?.width || `100vw`} - 48px, 1px)`,
                                                        y:
                                                          (f?.y || 0) +
                                                          0 +
                                                          2086.6 +
                                                          64 +
                                                          0 +
                                                          0 +
                                                          170.6 +
                                                          0 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: d(H, {
                                                      height: 447,
                                                      width: `max(max((${f?.width || `100vw`} - 318px) / 3, 50px), 1px)`,
                                                      y:
                                                        (f?.y || 0) +
                                                        0 +
                                                        1368.6 +
                                                        64 +
                                                        0 +
                                                        0 +
                                                        170.6 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: d(B, {
                                                        className: `framer-kxe83e-container`,
                                                        nodeId: `zFVtecJs4`,
                                                        scopeId: `unRZtzSgJ`,
                                                        children: d(Pi, {
                                                          F7ZmIThq9: ra(r),
                                                          gt25FBQP6: `range`,
                                                          height: `100%`,
                                                          id: `zFVtecJs4`,
                                                          layoutId: `zFVtecJs4`,
                                                          Ml6hijwjh: o,
                                                          NtVSpkzkZ: ra(a),
                                                          qPniXyCJl: n,
                                                          style: { width: `100%` },
                                                          width: `100%`,
                                                          wzmJ5q_O3: e,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          i
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                    d(H, {
                      children: d(B, {
                        className: `framer-hj0zku-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: Y,
                        nodeId: `MGDpUXrRz`,
                        scopeId: `unRZtzSgJ`,
                        children: d(Je, {
                          height: `100%`,
                          id: `MGDpUXrRz`,
                          intensity: 10,
                          layoutId: `MGDpUXrRz`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-mCdPw.framer-3lx8fp, .framer-mCdPw .framer-3lx8fp { display: block; }`,
        `.framer-mCdPw.framer-15m06yp { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-mCdPw .framer-7bamvn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 100px 32px 32px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-mCdPw .framer-7gx8na-container, .framer-mCdPw .framer-kxe83e-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-mCdPw .framer-f5q4lm { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; max-width: 600px; overflow: visible; padding: 0px; position: sticky; top: 112px; width: 1px; z-index: 1; }`,
        `.framer-mCdPw .framer-n511gi { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-75pfo5-container, .framer-mCdPw .framer-kdcykp-container, .framer-mCdPw .framer-u3g2mo-container, .framer-mCdPw .framer-19hi67k-container, .framer-mCdPw .framer-1vbr5i6-container, .framer-mCdPw .framer-hj0zku-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-mCdPw .framer-sqvpxu-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-mCdPw .framer-1a2k1j9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-4cjus1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-16jjhdw, .framer-mCdPw .framer-8pxed8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mCdPw .framer-1p3a233 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-ok4uf3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-z3lsy7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-mCdPw .framer-1qn5rfr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-mCdPw .framer-1m7588f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-b5z01r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-10phet0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-mCdPw .framer-fh3ap6-container, .framer-mCdPw .framer-15red9h-container, .framer-mCdPw .framer-h1i28h-container { flex: none; height: 40px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-kd9ioo { --border-bottom-width: 0px; --border-color: #ededed; --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 1px; display: grid; flex: none; gap: 4px 4px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: hidden; padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-194ha6a, .framer-mCdPw .framer-xcl59j, .framer-mCdPw .framer-126xuzo { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-mCdPw .framer-qw9cot-container, .framer-mCdPw .framer-1w5rluk-container, .framer-mCdPw .framer-tohqbe-container { flex: none; height: 18px; position: relative; width: 18px; }`,
        `.framer-mCdPw .framer-160bupw, .framer-mCdPw .framer-y75taf, .framer-mCdPw .framer-ave99v { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-mCdPw .framer-1k6k4zz, .framer-mCdPw .framer-1y6k4g5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-1c7m3l3 { -webkit-user-select: none; flex: none; height: auto; pointer-events: none; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mCdPw .framer-16232bt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 64px 152px 64px 32px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-1cr57mo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 110px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-1jdghf9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mCdPw .framer-19c50mo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-iz1m8o { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-mCdPw .framer-f60lh5 { display: grid; flex: none; gap: 40px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-mCdPw .framer-11pvfzo { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        ...Ge,
        ...ft,
        ...Ie,
        ...Be,
        ...pt,
        `.framer-mCdPw[data-border="true"]::after, .framer-mCdPw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-mCdPw.framer-15m06yp { width: 810px; } .framer-mCdPw .framer-7bamvn { flex-direction: column; } .framer-mCdPw .framer-7gx8na-container, .framer-mCdPw .framer-f5q4lm { flex: none; width: 100%; } .framer-mCdPw .framer-16232bt { padding: 80px 40px 80px 40px; }}`,
        `@media (max-width: 809.98px) { .framer-mCdPw.framer-15m06yp { width: 390px; } .framer-mCdPw .framer-7bamvn { flex-direction: column; padding: 100px 24px 24px 24px; } .framer-mCdPw .framer-7gx8na-container { flex: none; width: 100%; } .framer-mCdPw .framer-f5q4lm { flex: none; position: relative; top: unset; width: 100%; } .framer-mCdPw .framer-kd9ioo { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 21px 12px; } .framer-mCdPw .framer-194ha6a, .framer-mCdPw .framer-xcl59j, .framer-mCdPw .framer-126xuzo, .framer-mCdPw .framer-11pvfzo { align-self: unset; } .framer-mCdPw .framer-16232bt { padding: 64px 24px 64px 24px; } .framer-mCdPw .framer-1cr57mo { padding: 0px; } .framer-mCdPw .framer-f60lh5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; }}`,
      ],
      `framer-mCdPw`
    )),
    (da.displayName = `Framer Commerce`),
    (da.defaultProps = { height: 1792.5, width: 1200 }),
    T(
      da,
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
        ...Ii,
        ...Li,
        ...Ri,
        ...zi,
        ...Bi,
        ...Vi,
        ...Hi,
        ...Ui,
        ...Wi,
        ...Gi,
        ...Ki,
        ...Ji,
        ...Yi,
        ...I(Ue),
        ...I(mt),
        ...I(Le),
        ...I(Ve),
        ...I(ht),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (da.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = oe.get(aa(), n);
        return Promise.allSettled([
          oe.get(la(j(t.pathVariables, `unRZtzSgJ`)), n).preload(),
          r.preload(),
          A(Qt, {}, t),
          A(Ze, {}, t),
          A(ct, {}, t),
          A(ir, {}, t),
          A(hi, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [A(Pi, {}, t), A(Qe, {}, t)]));
          })(),
        ]);
      },
    }),
    (fa = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerunRZtzSgJ`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicHeight: `1792.5`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicWidth: `1200`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"rdwciJzcf":{"layout":["fixed","auto"]},"UHI4ODTtA":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerScrollSections: `false`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { fa as __FramerMetadata__, da as default, Zi as queryParamNames };
//# sourceMappingURL=t-cb6HXPPHxXFfurEgF0wm0yUyoCvApT4j1IZFiDEVI.D23LN7aL.mjs.map
