import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  V as s,
  a as ee,
  c,
  f as l,
  h as u,
  j as te,
  l as d,
  m as f,
  o as p,
  s as m,
  u as h,
  x as g,
  y as _,
  z as ne,
} from "./react.D0omlcQg.mjs";
import { J as re, M as v, a as y, n as ie, r as ae, t as b } from "./motion.Bi2Azsus.mjs";
import {
  B as x,
  Bt as S,
  C,
  Ct as w,
  D as oe,
  Dt as se,
  Et as ce,
  It as le,
  J as ue,
  K as T,
  L as E,
  Lt as D,
  M as O,
  Mt as de,
  N as k,
  O as fe,
  P as A,
  Pt as j,
  St as pe,
  T as me,
  Tt as he,
  X as ge,
  _ as _e,
  _t as ve,
  a as M,
  at as ye,
  b as be,
  bt as xe,
  et as N,
  g as Se,
  h as Ce,
  ht as we,
  i as P,
  jt as Te,
  k as F,
  n as Ee,
  o as I,
  p as De,
  q as L,
  r as Oe,
  st as ke,
  t as Ae,
  vt as je,
  w as R,
  y as Me,
  z,
} from "./framer.zRtTBSC3.mjs";
import { n as Ne, t as Pe } from "./ArkBx20pQ.BU-JxVzl.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./b_m5Js9Ir.C0kksidw.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./CT_DBbR5R.CmeCM4mC.mjs";
import { n as Ue, t as We } from "./eE2hU3DZQ.Cb4cT7nf.mjs";
import { i as Ge, t as Ke } from "./wWC8EGMFo.DzFEZFNO.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./hWdlH0iq7.CPT0J__o.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./PXfjos31S.DX_B23Tr.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./oESEGjQit.Czs91Bwq.mjs";
import { i as at, n as ot, r as st, t as ct } from "./cxfU_vRgl.CLfRjdVV.mjs";
import { n as lt, t as ut } from "./ZpMbXYM0K.BghxFrXN.mjs";
import { n as dt, t as ft } from "./BbFuZPGaK.ZVDYkDQW.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./DAYH3uYfF.CyGAyeDQ.mjs";
import { n as _t, t as vt } from "./MZSquWyWE.FQXmykqU.mjs";
import { n as yt, t as bt } from "./ivqmiAz7z.DqsxATKj.mjs";
import xt, { t as St } from "./_RLUWtuVlXQry9t808w5ln-B0qstZ79TAJsiB91SrF0.BvdhHjbU.mjs";
function Ct(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt = e(() => {
    (c(),
      N(),
      b(),
      t(),
      qe(),
      (wt = [`ghpgB3ukQ`, `aJuD3POVy`]),
      (Tt = `framer-7yVgN`),
      (Et = { aJuD3POVy: `framer-v-nn4x4p`, ghpgB3ukQ: `framer-v-1xt326u` }),
      ye(),
      (Dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ot = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (kt = { Available: `ghpgB3ukQ`, Unavailable: `aJuD3POVy` }),
      (At = v.create(r)),
      (jt = ({ height: e, id: t, shoeSize: n, width: r, ...i }) => ({
        ...i,
        oAyFGEyea: n ?? i.oAyFGEyea ?? `UK 04`,
        variant: kt[i.variant] ?? i.variant ?? `ghpgB3ukQ`,
      })),
      (Mt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Nt = D(
        f(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = ce();
          ve();
          let { style: l, className: u, layoutId: te, variant: d, oAyFGEyea: f, ...p } = jt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: ne,
              gestureVariant: re,
              isLoading: y,
              setGestureState: ie,
              setVariant: b,
              variants: x,
            } = le({
              cycleOrder: wt,
              defaultVariant: `ghpgB3ukQ`,
              ref: a,
              variant: d,
              variantClassNames: Et,
            }),
            S = Mt(e, x),
            C = E(Tt, Xe);
          return m(ae, {
            id: te ?? s,
            children: m(At, {
              animate: x,
              initial: !1,
              children: m(Ot, {
                value: Dt,
                children: m(v.div, {
                  ...p,
                  ...ne,
                  className: E(C, `framer-1xt326u`, u, g),
                  "data-framer-name": `Available`,
                  layoutDependency: S,
                  layoutId: `ghpgB3ukQ`,
                  ref: a,
                  style: {
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(240, 240, 240))`,
                    borderBottomLeftRadius: `calc(13px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(13px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(13px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(13px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...l,
                  },
                  variants: {
                    aJuD3POVy: {
                      backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                    },
                  },
                  ...Ct({ aJuD3POVy: { "data-framer-name": `Unavailable` } }, h, re),
                  children: m(F, {
                    __fromCanvasComponent: !0,
                    children: m(r, {
                      children: m(v.p, {
                        className: `framer-styles-preset-1nkfhjw`,
                        "data-styles-preset": `hWdlH0iq7`,
                        dir: `auto`,
                        children: `UK 04`,
                      }),
                    }),
                    className: `framer-1uz6f1k`,
                    fonts: [`Inter`],
                    layoutDependency: S,
                    layoutId: `S7udQeFgA`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: f,
                    variants: {
                      aJuD3POVy: {
                        "--extracted-r6o4lv": `var(--token-e99fdf97-7de2-4ce1-a9f5-0922d834af49, rgb(179, 179, 179))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Ct(
                      {
                        aJuD3POVy: {
                          children: m(r, {
                            children: m(v.p, {
                              className: `framer-styles-preset-1nkfhjw`,
                              "data-styles-preset": `hWdlH0iq7`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e99fdf97-7de2-4ce1-a9f5-0922d834af49, rgb(179, 179, 179)))`,
                              },
                              children: `UK 04`,
                            }),
                          }),
                        },
                      },
                      h,
                      re
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-7yVgN.framer-1opfydl, .framer-7yVgN .framer-1opfydl { display: block; }`,
          `.framer-7yVgN.framer-1xt326u { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 12px 6px 12px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-7yVgN .framer-1uz6f1k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-7yVgN.framer-v-nn4x4p.framer-1xt326u { cursor: no-drop; }`,
          `.framer-7yVgN.framer-v-nn4x4p .framer-1uz6f1k { -webkit-user-select: none; user-select: none; }`,
          ...Je,
        ],
        `framer-7yVgN`
      )),
      (Nt.displayName = `Shoe Size Chip`),
      (Nt.defaultProps = { height: 31, width: 69.5 }),
      A(Nt, {
        variant: {
          options: [`ghpgB3ukQ`, `aJuD3POVy`],
          optionTitles: [`Available`, `Unavailable`],
          title: `Variant`,
          type: I.Enum,
        },
        oAyFGEyea: {
          defaultValue: `UK 04`,
          displayTextArea: !1,
          title: `Shoe Size`,
          type: I.String,
        },
        onoAyFGEyeaChange: { changes: `oAyFGEyea`, type: I.ChangeHandler },
      }),
      k(
        Nt,
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
          ...L(Ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (c(),
      N(),
      b(),
      t(),
      (It = [`AzjYtLXYE`, `TtR3z9dZH`]),
      (Lt = `framer-vru8S`),
      (Rt = { AzjYtLXYE: `framer-v-10dgo3v`, TtR3z9dZH: `framer-v-a975xb` }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Vt = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (Ht = { Active: `AzjYtLXYE`, Inactive: `TtR3z9dZH` }),
      (Ut = v.create(r)),
      (Wt = ({ click: e, height: t, id: n, productImage: r, width: i, ...a }) => ({
        ...a,
        ByST6mxhk: e ?? a.ByST6mxhk,
        variant: Ht[a.variant] ?? a.variant ?? `AzjYtLXYE`,
        wzQzBe7gb: r ?? a.wzQzBe7gb,
      })),
      (Gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Kt = D(
        f(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = ce(),
            c = ve(),
            {
              style: l,
              className: u,
              layoutId: te,
              variant: d,
              wzQzBe7gb: f,
              ByST6mxhk: p,
              ...h
            } = Wt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: ne,
              gestureHandlers: re,
              gestureVariant: y,
              isLoading: ie,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = le({
              cycleOrder: It,
              defaultVariant: `AzjYtLXYE`,
              ref: i,
              variant: d,
              variantClassNames: Rt,
            }),
            C = Gt(e, S),
            { activeVariantCallback: w, delay: oe } = we(g),
            se = w(async (...e) => {
              if ((b({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            T = E(Lt);
          return m(ae, {
            id: te ?? a,
            children: m(Ut, {
              animate: S,
              initial: !1,
              children: m(Vt, {
                value: zt,
                children: m(v.div, {
                  ...h,
                  ...re,
                  className: E(T, `framer-10dgo3v`, u, _),
                  "data-border": !0,
                  "data-framer-name": `Active`,
                  "data-highlight": !0,
                  layoutDependency: C,
                  layoutId: `AzjYtLXYE`,
                  onTap: se,
                  ref: i,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-2da0c940-421e-44a3-be8a-e5120d5d1053, rgb(0, 123, 255))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    ...l,
                  },
                  variants: { TtR3z9dZH: { "--border-color": `rgba(0, 153, 255, 0)` } },
                  ...Ft({ TtR3z9dZH: { "data-framer-name": `Inactive` } }, g, y),
                  children: m(Ce, {
                    as: `figure`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      loading: ue(
                        (c?.y || 0) +
                          (0 + ((c?.height || 75) - 0 - ((c?.height || 75) - 0) * 1) / 2)
                      ),
                      sizes: `max(${c?.width || `100vw`}, 1px)`,
                      ...Bt(f),
                    },
                    className: `framer-cngggk`,
                    draggable: `false`,
                    layoutDependency: C,
                    layoutId: `GbGxJdOhH`,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-vru8S.framer-1fpz657, .framer-vru8S .framer-1fpz657 { display: block; }`,
          `.framer-vru8S.framer-10dgo3v { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 75px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 75px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-vru8S .framer-cngggk { -webkit-user-select: none; flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-vru8S[data-border="true"]::after, .framer-vru8S [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-vru8S`
      )),
      (Kt.displayName = `Color Variant Selector`),
      (Kt.defaultProps = { height: 75, width: 75 }),
      A(Kt, {
        variant: {
          options: [`AzjYtLXYE`, `TtR3z9dZH`],
          optionTitles: [`Active`, `Inactive`],
          title: `Variant`,
          type: I.Enum,
        },
        wzQzBe7gb: { title: `Product Image`, type: I.ResponsiveImage },
        ByST6mxhk: { title: `Click`, type: I.EventHandler },
      }),
      k(Kt, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Jt(e) {
  let {
      image: t = {
        src: `https://framerusercontent.com/images/i6ynWPDWxplht3ITKrhDjo0E7Qo.jpg`,
        alt: `Product image`,
      },
      type: n = `cover`,
      zoomLevel: r = 2,
      size: i = 200,
      radius: a = 8,
      border: ee,
      disabled: c,
    } = e,
    [l, u] = _(!1),
    [d, f] = _({ width: 400, height: 400 }),
    [p, ne] = _({ width: 400, height: 400, offsetX: 0, offsetY: 0 }),
    [y, ie] = _({ x: 0, y: 0 }),
    [ae, b] = _({ x: 0, y: 0 }),
    x = o(null),
    S = o(null);
  (re(0),
    re(0),
    g(() => {
      let e = () => {
        x.current && f({ width: x.current.offsetWidth, height: x.current.offsetHeight });
      };
      if ((e(), s !== void 0))
        return (s.addEventListener(`resize`, e), () => s.removeEventListener(`resize`, e));
    }, []),
    g(() => {
      if (!S.current || !x.current) return;
      let e = new Image();
      ((e.src = t.src),
        (e.onload = () => {
          let t = x.current.offsetWidth,
            r = x.current.offsetHeight,
            i = e.naturalWidth / e.naturalHeight,
            a = t / r,
            o = t,
            s = r,
            ee = 0,
            c = 0;
          (n === `cover`
            ? i > a
              ? ((o = r * i), (ee = (t - o) / 2))
              : ((s = t / i), (c = (r - s) / 2))
            : n === `contain`
              ? i > a
                ? ((s = t / i), (c = (r - s) / 2))
                : ((o = r * i), (ee = (t - o) / 2))
              : n === `fill`
                ? ((o = t), (s = r))
                : n === `none` &&
                  ((o = e.naturalWidth),
                  (s = e.naturalHeight),
                  (ee = (t - o) / 2),
                  (c = (r - s) / 2)),
            ne({ width: o, height: s, offsetX: ee, offsetY: c }));
        }));
    }, [t.src, d, n]));
  let C = te(
      (e) => {
        if (!x.current) return;
        let t = x.current.getBoundingClientRect(),
          n = e.clientX - t.left,
          r = e.clientY - t.top;
        b({ x: n, y: r });
        let a = n - i / 2,
          o = r - i / 2;
        ie({ x: a, y: o });
      },
      [i]
    ),
    w = te(() => {
      u(!0);
    }, []),
    oe = te(() => {
      u(!1);
    }, []),
    se = i / 2,
    ce = i / 2,
    le = ae.x - p.offsetX,
    ue = ae.y - p.offsetY,
    T = se - le * r,
    E = ce - ue * r;
  return h(`div`, {
    ref: x,
    style: {
      position: `relative`,
      width: `100%`,
      height: `100%`,
      cursor: `default`,
      overflow: `visible`,
    },
    onMouseMove: c ? null : C,
    onMouseEnter: c ? null : w,
    onMouseLeave: c ? null : oe,
    children: [
      m(`img`, {
        ref: S,
        src: t.src,
        alt: t.alt || `Zoomable image`,
        draggable: !1,
        style: {
          width: `100%`,
          height: `100%`,
          objectFit: n,
          display: `block`,
          userSelect: `none`,
        },
      }),
      l &&
        !c &&
        m(v.div, {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.8 },
          transition: { duration: 0.2 },
          style: {
            position: `absolute`,
            width: i,
            height: i,
            left: y.x,
            top: y.y,
            borderRadius: `${a}px`,
            overflow: `hidden`,
            pointerEvents: `none`,
            zIndex: 1e3,
            border: `${ee.width}px solid ${ee.color}`,
          },
          children: m(`div`, {
            style: {
              position: `absolute`,
              width: `100%`,
              height: `100%`,
              backgroundImage: `url(${t.src})`,
              backgroundSize: `${p.width * r}px ${p.height * r}px`,
              backgroundRepeat: `no-repeat`,
              backgroundPosition: `${T}px ${E}px`,
            },
          }),
        }),
    ],
  });
}
var Yt = e(() => {
  (ne(),
    c(),
    t(),
    b(),
    N(),
    A(Jt, {
      image: { type: I.ResponsiveImage, title: `Image` },
      type: {
        type: I.Enum,
        title: `Image Fit`,
        options: [`cover`, `contain`, `fill`, `none`],
        optionTitles: [`Cover`, `Contain`, `Fill`, `None`],
        defaultValue: `cover`,
        displaySegmentedControl: !1,
      },
      zoomLevel: {
        type: I.Number,
        title: `Zoom Level`,
        defaultValue: 2,
        min: 1.5,
        max: 4,
        step: 0.1,
      },
      size: {
        type: I.Number,
        title: `Size`,
        defaultValue: 200,
        min: 100,
        max: 400,
        step: 10,
        unit: `px`,
      },
      radius: { type: I.Number, title: `Radius`, defaultValue: 8, min: 0, step: 1, unit: `px` },
      border: {
        type: I.Object,
        controls: {
          color: { type: I.Color, title: `Color`, defaultValue: `#FFF` },
          width: {
            type: I.Number,
            title: `Width`,
            defaultValue: 2,
            min: 0,
            max: 10,
            step: 1,
            unit: `px`,
          },
        },
      },
      disabled: { type: I.Boolean, defaultValue: !1 },
    }));
});
function Xt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  B,
  cn = e(() => {
    (c(),
      N(),
      b(),
      t(),
      (Zt = [`nPCrUxk0X`, `uUl30LWV5`, `tph7y81Mc`, `YEBtRQmrT`]),
      (Qt = `framer-Y8FLm`),
      ($t = {
        nPCrUxk0X: `framer-v-hqw652`,
        tph7y81Mc: `framer-v-1h87h8o`,
        uUl30LWV5: `framer-v-154hpb6`,
        YEBtRQmrT: `framer-v-1p4e15k`,
      }),
      (en = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (tn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (nn = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (rn = {
        "Active Click": `tph7y81Mc`,
        "Active Mouse Enter": `nPCrUxk0X`,
        "Inactive Click": `YEBtRQmrT`,
        "Inactive Mouse Enter": `uUl30LWV5`,
      }),
      (an = v.create(r)),
      (on = ({ height: e, id: t, mouseEnter: n, productImage: r, width: i, ...a }) => ({
        ...a,
        ByST6mxhk: n ?? a.ByST6mxhk,
        variant: rn[a.variant] ?? a.variant ?? `nPCrUxk0X`,
        wzQzBe7gb: r ?? a.wzQzBe7gb,
      })),
      (sn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (B = D(
        f(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = ce(),
            c = ve(),
            {
              style: l,
              className: u,
              layoutId: te,
              variant: d,
              wzQzBe7gb: f,
              ByST6mxhk: p,
              ...h
            } = on(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: ne,
              gestureHandlers: re,
              gestureVariant: y,
              isLoading: ie,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = le({
              cycleOrder: Zt,
              defaultVariant: `nPCrUxk0X`,
              ref: i,
              variant: d,
              variantClassNames: $t,
            }),
            C = sn(e, S),
            { activeVariantCallback: w, delay: oe } = we(g),
            se = w(async (...e) => {
              if ((b({ isHovered: !0 }), p && (await p(...e)) === !1)) return !1;
            }),
            T = w(async (...e) => {
              if ((b({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            D = E(Qt);
          return m(ae, {
            id: te ?? a,
            children: m(an, {
              animate: S,
              initial: !1,
              children: m(nn, {
                value: en,
                children: m(v.div, {
                  ...h,
                  ...re,
                  className: E(D, `framer-hqw652`, u, _),
                  "data-framer-name": `Active Mouse Enter`,
                  "data-highlight": !0,
                  layoutDependency: C,
                  layoutId: `nPCrUxk0X`,
                  onMouseEnter: se,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 16,
                    borderBottomRightRadius: 16,
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    filter: `brightness(0.95)`,
                    WebkitFilter: `brightness(0.95)`,
                    ...l,
                  },
                  variants: {
                    uUl30LWV5: { filter: `brightness(1)`, WebkitFilter: `brightness(1)` },
                    YEBtRQmrT: { filter: `brightness(1)`, WebkitFilter: `brightness(1)` },
                  },
                  ...Xt(
                    {
                      tph7y81Mc: {
                        "data-framer-name": `Active Click`,
                        onMouseEnter: void 0,
                        onTap: T,
                      },
                      uUl30LWV5: { "data-framer-name": `Inactive Mouse Enter` },
                      YEBtRQmrT: {
                        "data-framer-name": `Inactive Click`,
                        onMouseEnter: void 0,
                        onTap: T,
                      },
                    },
                    g,
                    y
                  ),
                  children: m(Ce, {
                    as: `figure`,
                    background: {
                      alt: ``,
                      fit: `fill`,
                      loading: ue(
                        (c?.y || 0) +
                          (0 + ((c?.height || 75) - 0 - ((c?.height || 75) - 0) * 1) / 2)
                      ),
                      sizes: `max(${c?.width || `100vw`}, 1px)`,
                      ...tn(f),
                    },
                    className: `framer-15oe5lb`,
                    draggable: `false`,
                    layoutDependency: C,
                    layoutId: `DAczXwhI0`,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Y8FLm.framer-ndb7q1, .framer-Y8FLm .framer-ndb7q1 { display: block; }`,
          `.framer-Y8FLm.framer-hqw652 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 75px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 75px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Y8FLm .framer-15oe5lb { -webkit-user-select: none; flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-Y8FLm.framer-v-1h87h8o.framer-hqw652, .framer-Y8FLm.framer-v-1p4e15k.framer-hqw652 { cursor: pointer; }`,
        ],
        `framer-Y8FLm`
      )),
      (B.displayName = `Product Image Selector`),
      (B.defaultProps = { height: 75, width: 75 }),
      A(B, {
        variant: {
          options: [`nPCrUxk0X`, `uUl30LWV5`, `tph7y81Mc`, `YEBtRQmrT`],
          optionTitles: [
            `Active Mouse Enter`,
            `Inactive Mouse Enter`,
            `Active Click`,
            `Inactive Click`,
          ],
          title: `Variant`,
          type: I.Enum,
        },
        wzQzBe7gb: { title: `Product Image`, type: I.ResponsiveImage },
        ByST6mxhk: { title: `Mouse Enter`, type: I.EventHandler },
      }),
      k(B, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function V(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ln,
  un,
  dn,
  fn,
  pn,
  mn,
  H,
  hn,
  gn,
  U,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn = e(() => {
    (c(),
      N(),
      b(),
      t(),
      Yt(),
      cn(),
      (ln = T(Jt)),
      (un = T(B)),
      (dn = [
        `vD7ResBLh`,
        `qteZTm5ew`,
        `bqkbl1SGL`,
        `ZdYuQqXOO`,
        `B5KInVMTO`,
        `h0iw_iLBx`,
        `mSTY0kxBq`,
        `J_ZeRoJJY`,
        `ZWbt4iFai`,
        `bMhBy6mVY`,
      ]),
      (fn = `framer-MRSJ7`),
      (pn = {
        B5KInVMTO: `framer-v-jgfqm8`,
        bMhBy6mVY: `framer-v-o0pn1`,
        bqkbl1SGL: `framer-v-13fqjjj`,
        h0iw_iLBx: `framer-v-5f48px`,
        J_ZeRoJJY: `framer-v-u8lpnk`,
        mSTY0kxBq: `framer-v-1kyg3gs`,
        qteZTm5ew: `framer-v-1qxzq0q`,
        vD7ResBLh: `framer-v-6k7uvy`,
        ZdYuQqXOO: `framer-v-14i5xnl`,
        ZWbt4iFai: `framer-v-x2fvr1`,
      }),
      (mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (H = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (hn = (e, t) => typeof e == `number` && typeof t == `number` && e < t),
      (gn = (e) => !e),
      (U = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (_n = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (vn = {
        1: `vD7ResBLh`,
        10: `bMhBy6mVY`,
        2: `qteZTm5ew`,
        3: `bqkbl1SGL`,
        4: `ZdYuQqXOO`,
        5: `B5KInVMTO`,
        6: `h0iw_iLBx`,
        7: `mSTY0kxBq`,
        8: `J_ZeRoJJY`,
        9: `ZWbt4iFai`,
      }),
      (yn = v.create(r)),
      (bn = ({
        height: e,
        id: t,
        productImage1: n,
        productImage10: r,
        productImage2: i,
        productImage3: a,
        productImage4: o,
        productImage5: s,
        productImage6: ee,
        productImage7: c,
        productImage8: l,
        productImage9: u,
        totalImages: te,
        width: d,
        ...f
      }) => ({
        ...f,
        FHJhqwh6P: n ?? f.FHJhqwh6P,
        HA7VIWGgB: l ?? f.HA7VIWGgB,
        Mg31pcY3f: r ?? f.Mg31pcY3f,
        mHn_lbk5y: s ?? f.mHn_lbk5y,
        qG3F78iay: i ?? f.qG3F78iay,
        rigk0jMiu: ee ?? f.rigk0jMiu,
        tddPAE1ai: c ?? f.tddPAE1ai,
        variant: vn[f.variant] ?? f.variant ?? `vD7ResBLh`,
        vOrscV2eC: o ?? f.vOrscV2eC,
        VZjOGPd_o: u ?? f.VZjOGPd_o,
        WiHntCqUE: te ?? f.WiHntCqUE ?? 1,
        xLdXoPZRN: a ?? f.xLdXoPZRN,
      })),
      (xn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Sn = D(
        f(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = ce(),
            c = ve(),
            {
              style: l,
              className: u,
              layoutId: te,
              variant: d,
              WiHntCqUE: f,
              FHJhqwh6P: p,
              qG3F78iay: g,
              xLdXoPZRN: _,
              vOrscV2eC: ne,
              mHn_lbk5y: re,
              rigk0jMiu: y,
              tddPAE1ai: ie,
              HA7VIWGgB: b,
              VZjOGPd_o: x,
              Mg31pcY3f: S,
              ...C
            } = bn(e),
            {
              baseVariant: w,
              classNames: oe,
              clearLoadingGesture: se,
              gestureHandlers: ue,
              gestureVariant: T,
              isLoading: D,
              setGestureState: de,
              setVariant: k,
              variants: fe,
            } = le({
              cycleOrder: dn,
              defaultVariant: `vD7ResBLh`,
              ref: i,
              variant: d,
              variantClassNames: pn,
            }),
            A = xn(e, fe),
            { activeVariantCallback: j, delay: pe } = we(w),
            me = j(async (...e) => {
              k(`vD7ResBLh`);
            }),
            he = j(async (...e) => {
              k(`qteZTm5ew`);
            }),
            ge = j(async (...e) => {
              k(`bqkbl1SGL`);
            }),
            _e = j(async (...e) => {
              k(`ZdYuQqXOO`);
            }),
            M = j(async (...e) => {
              k(`B5KInVMTO`);
            }),
            ye = j(async (...e) => {
              k(`h0iw_iLBx`);
            }),
            be = j(async (...e) => {
              k(`mSTY0kxBq`);
            }),
            xe = j(async (...e) => {
              k(`J_ZeRoJJY`);
            }),
            N = j(async (...e) => {
              k(`ZWbt4iFai`);
            }),
            Se = j(async (...e) => {
              k(`bMhBy6mVY`);
            }),
            Ce = E(fn),
            Te = gn(hn(f, 1)),
            F = gn(hn(f, 2)),
            Ee = gn(hn(f, 3)),
            I = gn(hn(f, 4)),
            De = gn(hn(f, 5)),
            L = gn(hn(f, 6)),
            Oe = gn(hn(f, 7)),
            ke = gn(hn(f, 8)),
            Ae = gn(hn(f, 9)),
            je = gn(hn(f, 10));
          return m(ae, {
            id: te ?? a,
            children: m(yn, {
              animate: fe,
              initial: !1,
              children: m(_n, {
                value: mn,
                children: h(v.div, {
                  ...C,
                  ...ue,
                  className: E(Ce, `framer-6k7uvy`, u, oe),
                  "data-framer-name": `1`,
                  layoutDependency: A,
                  layoutId: `vD7ResBLh`,
                  ref: i,
                  style: { ...l },
                  ...V(
                    {
                      B5KInVMTO: { "data-framer-name": `5` },
                      bMhBy6mVY: { "data-framer-name": `10` },
                      bqkbl1SGL: { "data-framer-name": `3` },
                      h0iw_iLBx: { "data-framer-name": `6` },
                      J_ZeRoJJY: { "data-framer-name": `8` },
                      mSTY0kxBq: { "data-framer-name": `7` },
                      qteZTm5ew: { "data-framer-name": `2` },
                      ZdYuQqXOO: { "data-framer-name": `4` },
                      ZWbt4iFai: { "data-framer-name": `9` },
                    },
                    w,
                    T
                  ),
                  children: [
                    m(v.div, {
                      className: `framer-2o96vf`,
                      "data-framer-name": `Image`,
                      layoutDependency: A,
                      layoutId: `CAJQy6QN_`,
                      children: m(P, {
                        children: m(O, {
                          className: `framer-4anmq9-container`,
                          isAuthoredByUser: !0,
                          layoutDependency: A,
                          layoutId: `cE5RDAO5n-container`,
                          nodeId: `cE5RDAO5n`,
                          rendersWithMotion: !0,
                          scopeId: `n3uUQkOe5`,
                          children: m(Jt, {
                            border: { color: `rgba(0, 0, 0, 0.1)`, width: 1 },
                            disabled: !0,
                            height: `100%`,
                            id: `cE5RDAO5n`,
                            image: H(p),
                            layoutId: `cE5RDAO5n`,
                            radius: 50,
                            size: 400,
                            style: { height: `100%`, width: `100%` },
                            type: `cover`,
                            width: `100%`,
                            zoomLevel: 2,
                            ...V(
                              {
                                B5KInVMTO: { image: H(re) },
                                bMhBy6mVY: { image: H(S) },
                                bqkbl1SGL: { image: H(_) },
                                h0iw_iLBx: { image: H(y) },
                                J_ZeRoJJY: { image: H(b) },
                                mSTY0kxBq: { image: H(ie) },
                                qteZTm5ew: { image: H(g) },
                                ZdYuQqXOO: { image: H(ne) },
                                ZWbt4iFai: { image: H(x) },
                              },
                              w,
                              T
                            ),
                          }),
                        }),
                      }),
                    }),
                    h(v.div, {
                      className: `framer-1nyklta`,
                      "data-framer-name": `Selectors Phone`,
                      "data-hide-scrollbars": !0,
                      layoutDependency: A,
                      layoutId: `lLQGm1jnE`,
                      style: {
                        mask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 11%) add`,
                        WebkitMask: `linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 11%) add`,
                      },
                      children: [
                        Te !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-1vp8mqy-container`,
                              layoutDependency: A,
                              layoutId: `dxeMc2Cuh-container`,
                              nodeId: `dxeMc2Cuh`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: me,
                                height: `100%`,
                                id: `dxeMc2Cuh`,
                                layoutId: `dxeMc2Cuh`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`tph7y81Mc`),
                                width: `100%`,
                                wzQzBe7gb: H(p),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`YEBtRQmrT`) },
                                    bMhBy6mVY: { variant: U(`YEBtRQmrT`) },
                                    bqkbl1SGL: { variant: U(`YEBtRQmrT`) },
                                    h0iw_iLBx: { variant: U(`YEBtRQmrT`) },
                                    J_ZeRoJJY: { variant: U(`YEBtRQmrT`) },
                                    mSTY0kxBq: { variant: U(`YEBtRQmrT`) },
                                    qteZTm5ew: { variant: U(`YEBtRQmrT`) },
                                    ZdYuQqXOO: { variant: U(`YEBtRQmrT`) },
                                    ZWbt4iFai: { variant: U(`YEBtRQmrT`) },
                                  },
                                  w,
                                  T
                                ),
                              }),
                            }),
                          }),
                        F !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-wa1y3r-container`,
                              layoutDependency: A,
                              layoutId: `f3MK39LBU-container`,
                              nodeId: `f3MK39LBU`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: he,
                                height: `100%`,
                                id: `f3MK39LBU`,
                                layoutId: `f3MK39LBU`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(g),
                                ...V({ qteZTm5ew: { variant: U(`tph7y81Mc`) } }, w, T),
                              }),
                            }),
                          }),
                        Ee !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-1y67t15-container`,
                              layoutDependency: A,
                              layoutId: `CKs5y7vGA-container`,
                              nodeId: `CKs5y7vGA`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: ge,
                                height: `100%`,
                                id: `CKs5y7vGA`,
                                layoutId: `CKs5y7vGA`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(_),
                                ...V({ bqkbl1SGL: { variant: U(`tph7y81Mc`) } }, w, T),
                              }),
                            }),
                          }),
                        I !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-t1i9fo-container`,
                              layoutDependency: A,
                              layoutId: `P20MsWsXI-container`,
                              nodeId: `P20MsWsXI`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: _e,
                                height: `100%`,
                                id: `P20MsWsXI`,
                                layoutId: `P20MsWsXI`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(_),
                                ...V({ ZdYuQqXOO: { variant: U(`tph7y81Mc`) } }, w, T),
                              }),
                            }),
                          }),
                        De !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-19ifbta-container`,
                              layoutDependency: A,
                              layoutId: `jGNFETuhk-container`,
                              nodeId: `jGNFETuhk`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: M,
                                height: `100%`,
                                id: `jGNFETuhk`,
                                layoutId: `jGNFETuhk`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(re),
                                ...V({ B5KInVMTO: { variant: U(`tph7y81Mc`) } }, w, T),
                              }),
                            }),
                          }),
                        L !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-irq5ik-container`,
                              layoutDependency: A,
                              layoutId: `ywc71b1QS-container`,
                              nodeId: `ywc71b1QS`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: ye,
                                height: `100%`,
                                id: `ywc71b1QS`,
                                layoutId: `ywc71b1QS`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(y),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`nPCrUxk0X`) },
                                    h0iw_iLBx: { variant: U(`tph7y81Mc`) },
                                  },
                                  w,
                                  T
                                ),
                              }),
                            }),
                          }),
                        Oe !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-khn1qc-container`,
                              layoutDependency: A,
                              layoutId: `jzV0p8E37-container`,
                              nodeId: `jzV0p8E37`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: be,
                                height: `100%`,
                                id: `jzV0p8E37`,
                                layoutId: `jzV0p8E37`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(ie),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`nPCrUxk0X`) },
                                    h0iw_iLBx: { variant: U(`nPCrUxk0X`) },
                                    mSTY0kxBq: { variant: U(`tph7y81Mc`) },
                                  },
                                  w,
                                  T
                                ),
                              }),
                            }),
                          }),
                        ke !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-1blv1u8-container`,
                              layoutDependency: A,
                              layoutId: `KvOPPKEkE-container`,
                              nodeId: `KvOPPKEkE`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: xe,
                                height: `100%`,
                                id: `KvOPPKEkE`,
                                layoutId: `KvOPPKEkE`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(b),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`nPCrUxk0X`) },
                                    h0iw_iLBx: { variant: U(`nPCrUxk0X`) },
                                    J_ZeRoJJY: { variant: U(`tph7y81Mc`) },
                                    mSTY0kxBq: { variant: U(`nPCrUxk0X`) },
                                  },
                                  w,
                                  T
                                ),
                              }),
                            }),
                          }),
                        Ae !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-v8vhuj-container`,
                              layoutDependency: A,
                              layoutId: `MPaZgf6zJ-container`,
                              nodeId: `MPaZgf6zJ`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: N,
                                height: `100%`,
                                id: `MPaZgf6zJ`,
                                layoutId: `MPaZgf6zJ`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(x),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`nPCrUxk0X`) },
                                    h0iw_iLBx: { variant: U(`nPCrUxk0X`) },
                                    J_ZeRoJJY: { variant: U(`nPCrUxk0X`) },
                                    mSTY0kxBq: { variant: U(`nPCrUxk0X`) },
                                    ZWbt4iFai: { variant: U(`tph7y81Mc`) },
                                  },
                                  w,
                                  T
                                ),
                              }),
                            }),
                          }),
                        je !== !1 &&
                          m(P, {
                            height: 75,
                            width: `75px`,
                            y:
                              (c?.y || 0) +
                              0 +
                              (((c?.height || 541) - 12 - 528) / 2 + 443 + 10) +
                              0,
                            ...V(
                              {
                                B5KInVMTO: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                                bMhBy6mVY: {
                                  y:
                                    (c?.y || 0) +
                                    0 +
                                    (((c?.height || 200) - 12 - 528) / 2 + 443 + 10) +
                                    0,
                                },
                              },
                              w,
                              T
                            ),
                            children: m(O, {
                              className: `framer-abfzc1-container`,
                              layoutDependency: A,
                              layoutId: `HsmwThUqH-container`,
                              nodeId: `HsmwThUqH`,
                              rendersWithMotion: !0,
                              scopeId: `n3uUQkOe5`,
                              children: m(B, {
                                ByST6mxhk: Se,
                                height: `100%`,
                                id: `HsmwThUqH`,
                                layoutId: `HsmwThUqH`,
                                style: { height: `100%`, width: `100%` },
                                variant: U(`YEBtRQmrT`),
                                width: `100%`,
                                wzQzBe7gb: H(S),
                                ...V(
                                  {
                                    B5KInVMTO: { variant: U(`nPCrUxk0X`) },
                                    bMhBy6mVY: { variant: U(`tph7y81Mc`) },
                                    h0iw_iLBx: { variant: U(`nPCrUxk0X`) },
                                    J_ZeRoJJY: { variant: U(`nPCrUxk0X`) },
                                    mSTY0kxBq: { variant: U(`nPCrUxk0X`) },
                                    ZWbt4iFai: { variant: U(`nPCrUxk0X`) },
                                  },
                                  w,
                                  T
                                ),
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
          `.framer-MRSJ7.framer-1n4s8ql, .framer-MRSJ7 .framer-1n4s8ql { display: block; }`,
          `.framer-MRSJ7.framer-6k7uvy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 12px 0px; position: relative; width: 500px; }`,
          `.framer-MRSJ7 .framer-2o96vf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
          `.framer-MRSJ7 .framer-4anmq9-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 444px); position: relative; width: 1px; }`,
          `.framer-MRSJ7 .framer-1nyklta { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: auto; padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
          `.framer-MRSJ7 .framer-1vp8mqy-container, .framer-MRSJ7 .framer-wa1y3r-container, .framer-MRSJ7 .framer-1y67t15-container, .framer-MRSJ7 .framer-t1i9fo-container, .framer-MRSJ7 .framer-19ifbta-container, .framer-MRSJ7 .framer-irq5ik-container, .framer-MRSJ7 .framer-khn1qc-container, .framer-MRSJ7 .framer-1blv1u8-container, .framer-MRSJ7 .framer-v8vhuj-container, .framer-MRSJ7 .framer-abfzc1-container { flex: none; height: 75px; position: relative; width: 75px; }`,
          `.framer-MRSJ7.framer-v-jgfqm8 .framer-4anmq9-container, .framer-MRSJ7.framer-v-o0pn1 .framer-4anmq9-container { height: var(--framer-aspect-ratio-supported, 200px); }`,
          `.framer-MRSJ7[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-MRSJ7 [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-MRSJ7[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-MRSJ7 [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-MRSJ7[data-hide-scrollbars="true"], .framer-MRSJ7 [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-MRSJ7`
      )),
      (Sn.displayName = `Product Images Phone`),
      (Sn.defaultProps = { height: 541, width: 500 }),
      A(Sn, {
        variant: {
          options: [
            `vD7ResBLh`,
            `qteZTm5ew`,
            `bqkbl1SGL`,
            `ZdYuQqXOO`,
            `B5KInVMTO`,
            `h0iw_iLBx`,
            `mSTY0kxBq`,
            `J_ZeRoJJY`,
            `ZWbt4iFai`,
            `bMhBy6mVY`,
          ],
          optionTitles: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`],
          title: `Variant`,
          type: I.Enum,
        },
        WiHntCqUE: { defaultValue: 1, title: `Total Images`, type: I.Number },
        onWiHntCqUEChange: { changes: `WiHntCqUE`, type: I.ChangeHandler },
        FHJhqwh6P: { title: `Product Image 1`, type: I.ResponsiveImage },
        qG3F78iay: { title: `Product Image 2`, type: I.ResponsiveImage },
        xLdXoPZRN: { title: `Product Image 3`, type: I.ResponsiveImage },
        vOrscV2eC: { title: `Product Image 4`, type: I.ResponsiveImage },
        mHn_lbk5y: { title: `Product Image 5`, type: I.ResponsiveImage },
        rigk0jMiu: { title: `Product Image 6`, type: I.ResponsiveImage },
        tddPAE1ai: { title: `Product Image 7`, type: I.ResponsiveImage },
        HA7VIWGgB: { title: `Product Image 8`, type: I.ResponsiveImage },
        VZjOGPd_o: { title: `Product Image 9`, type: I.ResponsiveImage },
        Mg31pcY3f: { title: `Product Image 10`, type: I.ResponsiveImage },
      }),
      k(Sn, [{ explicitInter: !0, fonts: [] }, ...ln, ...un], { supportsExplicitInterCodegen: !0 }),
      (Sn.loader = { load: (e, t) => (t.locale, Promise.allSettled([x(B, {}, t)])) }));
  }),
  wn,
  Tn,
  En,
  Dn,
  On = e(() => {
    (N(),
      z.loadFonts([
        `Inter-Variable`,
        `Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTc1`,
        `Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTc1`,
        `Inter-VariableVF=Im9wc3oiIDE0LCAid2dodCIgNTc1`,
      ]),
      (wn = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      (Tn = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
              variationAxes: wn,
              weight: `400`,
            },
          ],
        },
      ]),
      (En = [
        `.framer-qrfRk .framer-styles-preset-mt3e3o:not(.rich-text-wrapper), .framer-qrfRk .framer-styles-preset-mt3e3o.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-italic: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "opsz" 14, "wght" 575; --framer-font-variation-axes-bold: "opsz" 14, "wght" 575; --framer-font-variation-axes-bold-italic: "opsz" 14, "wght" 575; --framer-font-variation-axes-italic: "opsz" 14, "wght" 575; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.2em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Dn = `framer-qrfRk`));
  });
function kn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn = e(() => {
    (c(),
      N(),
      b(),
      t(),
      On(),
      Ze(),
      lt(),
      (An = T(ut)),
      (jn = [`IC8YKBOjQ`, `dPHlGnkdx`]),
      (Mn = `framer-H8cC1`),
      (Nn = { dPHlGnkdx: `framer-v-61fgwn`, IC8YKBOjQ: `framer-v-1pbh6tn` }),
      (Pn = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Fn = (e, t) => `translateY(-50%) ${t}`),
      (In = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (Ln = { Closed: `IC8YKBOjQ`, Open: `dPHlGnkdx` }),
      (Rn = v.create(r)),
      (zn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        ATpvsBtxp: n ?? i.ATpvsBtxp ?? `Return Policy`,
        variant: Ln[i.variant] ?? i.variant ?? `IC8YKBOjQ`,
      })),
      (Bn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Vn = D(
        f(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = ce();
          ve();
          let { style: l, className: u, layoutId: te, variant: d, ATpvsBtxp: f, ...p } = zn(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: ne,
              gestureHandlers: re,
              gestureVariant: y,
              isLoading: ie,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = le({
              cycleOrder: jn,
              defaultVariant: `IC8YKBOjQ`,
              ref: a,
              variant: d,
              variantClassNames: Nn,
            }),
            C = Bn(e, S),
            { activeVariantCallback: w, delay: oe } = we(g),
            se = w(async (...e) => {
              x(`dPHlGnkdx`);
            }),
            ue = w(async (...e) => {
              x(`IC8YKBOjQ`);
            }),
            T = E(Mn, Dn, et);
          return m(ae, {
            id: te ?? s,
            children: m(Rn, {
              animate: S,
              initial: !1,
              children: m(In, {
                value: Pn,
                children: h(v.div, {
                  ...p,
                  ...re,
                  className: E(T, `framer-1pbh6tn`, u, _),
                  "data-framer-name": `Closed`,
                  layoutDependency: C,
                  layoutId: `IC8YKBOjQ`,
                  ref: a,
                  style: {
                    backgroundColor: `var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(240, 240, 240))`,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...l,
                  },
                  ...kn({ dPHlGnkdx: { "data-framer-name": `Open` } }, g, y),
                  children: [
                    h(v.div, {
                      className: `framer-1pgfgls`,
                      "data-framer-name": `Header`,
                      "data-highlight": !0,
                      layoutDependency: C,
                      layoutId: `lGHn4FCds`,
                      onTap: se,
                      ...kn({ dPHlGnkdx: { onTap: ue } }, g, y),
                      children: [
                        m(F, {
                          __fromCanvasComponent: !0,
                          children: m(r, {
                            children: m(v.p, {
                              className: `framer-styles-preset-mt3e3o`,
                              "data-styles-preset": `nsfWs9ORv`,
                              dir: `auto`,
                              children: `Return Policy`,
                            }),
                          }),
                          className: `framer-9os62a`,
                          fonts: [`Inter`],
                          layoutDependency: C,
                          layoutId: `jsTQ00fd4`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: f,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        m(ut, {
                          animated: !0,
                          className: `framer-cjj73v`,
                          layoutDependency: C,
                          layoutId: `xToGPoRgA`,
                          style: {
                            "--118a55": `var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, rgb(148, 148, 148))`,
                            rotate: 0,
                          },
                          variants: { dPHlGnkdx: { rotate: -180 } },
                        }),
                      ],
                    }),
                    m(v.div, {
                      className: `framer-bkseb0`,
                      "data-framer-name": `Body`,
                      layoutDependency: C,
                      layoutId: `HamljsNPT`,
                      style: { opacity: 0 },
                      transformTemplate: Fn,
                      variants: { dPHlGnkdx: { opacity: 1 } },
                      ...kn({ dPHlGnkdx: { transformTemplate: void 0 } }, g, y),
                      children: m(F, {
                        __fromCanvasComponent: !0,
                        children: m(r, {
                          children: m(v.p, {
                            className: `framer-styles-preset-1sjmy9b`,
                            "data-styles-preset": `PXfjos31S`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97)))`,
                            },
                            children: `This product is eligible for returns or replacement. Please initiate returns/replacements from the 'My Orders' section in the App within 14 days of delivery. Kindly ensure the product is in its original condition with all tags attached.`,
                          }),
                        }),
                        className: `framer-1t7pd7o`,
                        fonts: [`Inter`],
                        layoutDependency: C,
                        layoutId: `mUi_0D0eb`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-H8cC1.framer-1g4p4kh, .framer-H8cC1 .framer-1g4p4kh { display: block; }`,
          `.framer-H8cC1.framer-1pbh6tn { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 326px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-H8cC1 .framer-1pgfgls { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px; position: relative; width: 100%; }`,
          `.framer-H8cC1 .framer-9os62a, .framer-H8cC1 .framer-1t7pd7o { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-H8cC1 .framer-cjj73v { flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 14px; }`,
          `.framer-H8cC1 .framer-bkseb0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px 20px 20px 20px; position: absolute; top: 296%; width: 100%; z-index: 1; }`,
          `.framer-H8cC1.framer-v-61fgwn .framer-1pgfgls { padding: 20px 20px 0px 20px; }`,
          `.framer-H8cC1.framer-v-61fgwn .framer-bkseb0 { left: unset; position: relative; top: unset; }`,
          ...En,
          ...Qe,
        ],
        `framer-H8cC1`
      )),
      (Vn.displayName = `Shoe Data Accordion`),
      (Vn.defaultProps = { height: 59, width: 325.5 }),
      A(Vn, {
        variant: {
          options: [`IC8YKBOjQ`, `dPHlGnkdx`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: I.Enum,
        },
        ATpvsBtxp: {
          defaultValue: `Return Policy`,
          displayTextArea: !1,
          title: `Title`,
          type: I.String,
        },
        onATpvsBtxpChange: { changes: `ATpvsBtxp`, type: I.ChangeHandler },
      }),
      k(
        Vn,
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
          ...An,
          ...L(Tn),
          ...L($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Un(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  W,
  er = e(() => {
    (c(),
      N(),
      b(),
      t(),
      Ze(),
      (Wn = [`mqMUrxGyN`, `yFFl_lkaI`]),
      (Gn = `framer-FyWcA`),
      (Kn = { mqMUrxGyN: `framer-v-1u3oybf`, yFFl_lkaI: `framer-v-1n6j0at` }),
      (qn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Jn = (e, t = {}, n) => {
        let r = `en-US`,
          i = t.locale || n || r,
          {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: ee,
            currency: c,
            currencyDisplay: l,
            unit: u,
            unitDisplay: te,
            minimumFractionDigits: d,
            maximumFractionDigits: f,
            minimumIntegerDigits: p,
          } = t,
          m = {
            useGrouping: a,
            notation: o,
            compactDisplay: s,
            style: ee,
            currency: c,
            currencyDisplay: l,
            unit: u,
            unitDisplay: te,
            minimumFractionDigits: d,
            maximumFractionDigits: f,
            minimumIntegerDigits: p,
          },
          h = Number(e);
        try {
          return h.toLocaleString(i, m);
        } catch {
          try {
            return h.toLocaleString(r, m);
          } catch {
            return h.toLocaleString();
          }
        }
      }),
      (Yn = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (Xn = { Large: `mqMUrxGyN`, Small: `yFFl_lkaI` }),
      (Zn = v.create(r)),
      (Qn = ({ eU: e, foot: t, height: n, id: r, size: i, uS: a, width: o, ...s }) => ({
        ...s,
        KnIOtOEIQ: i ?? s.KnIOtOEIQ ?? `UK 4`,
        lIhw5r7E9: t ?? s.lIhw5r7E9,
        TnDye81BM: a ?? s.TnDye81BM,
        variant: Xn[s.variant] ?? s.variant ?? `mqMUrxGyN`,
        yDSc0kaYR: e ?? s.yDSc0kaYR,
      })),
      ($n = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = D(
        f(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = ce();
          ve();
          let {
              style: l,
              className: u,
              layoutId: te,
              variant: d,
              KnIOtOEIQ: f,
              TnDye81BM: p,
              yDSc0kaYR: g,
              lIhw5r7E9: _,
              ...ne
            } = Qn(e),
            {
              baseVariant: re,
              classNames: y,
              clearLoadingGesture: ie,
              gestureHandlers: b,
              gestureVariant: x,
              isLoading: S,
              setGestureState: C,
              setVariant: w,
              variants: oe,
            } = le({
              cycleOrder: Wn,
              defaultVariant: `mqMUrxGyN`,
              ref: a,
              variant: d,
              variantClassNames: Kn,
            }),
            se = $n(e, oe),
            ue = E(Gn, et),
            T = he(),
            D = Jn(p, { locale: ``, notation: `standard`, style: `decimal` }, T),
            O = Jn(g, { locale: ``, notation: `standard`, style: `decimal` }, T),
            de = Jn(_, { locale: ``, notation: `standard`, style: `decimal` }, T);
          return m(ae, {
            id: te ?? s,
            children: m(Zn, {
              animate: oe,
              initial: !1,
              children: m(Yn, {
                value: qn,
                children: h(v.div, {
                  ...ne,
                  ...b,
                  className: E(ue, `framer-1u3oybf`, u, y),
                  "data-framer-name": `Large`,
                  layoutDependency: se,
                  layoutId: `mqMUrxGyN`,
                  ref: a,
                  style: { ...l },
                  ...Un({ yFFl_lkaI: { "data-framer-name": `Small` } }, re, x),
                  children: [
                    m(v.div, {
                      className: `framer-sfqx3v`,
                      "data-framer-name": `Cell`,
                      layoutDependency: se,
                      layoutId: `RxAkjgMrf`,
                      children: m(F, {
                        __fromCanvasComponent: !0,
                        children: m(r, {
                          children: m(v.p, {
                            className: `framer-styles-preset-1sjmy9b`,
                            "data-styles-preset": `PXfjos31S`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                            },
                            children: `UK 4`,
                          }),
                        }),
                        className: `framer-xrlxsu`,
                        fonts: [`Inter`],
                        layoutDependency: se,
                        layoutId: `aUF36Lkau`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: f,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    m(v.div, {
                      className: `framer-1e2r28s`,
                      "data-border": !0,
                      "data-framer-name": `Cell`,
                      layoutDependency: se,
                      layoutId: `qNJH7b_44`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                      },
                      children: m(F, {
                        __fromCanvasComponent: !0,
                        children: m(r, {
                          children: m(v.p, {
                            className: `framer-styles-preset-1sjmy9b`,
                            "data-styles-preset": `PXfjos31S`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                            },
                            children: `0`,
                          }),
                        }),
                        className: `framer-17lpd5h`,
                        fonts: [`Inter`],
                        layoutDependency: se,
                        layoutId: `lb_jLL48I`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: D,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    m(v.div, {
                      className: `framer-7x7iu1`,
                      "data-framer-name": `Cell`,
                      layoutDependency: se,
                      layoutId: `yhhiQlVAr`,
                      children: m(F, {
                        __fromCanvasComponent: !0,
                        children: m(r, {
                          children: m(v.p, {
                            className: `framer-styles-preset-1sjmy9b`,
                            "data-styles-preset": `PXfjos31S`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                            },
                            children: `0`,
                          }),
                        }),
                        className: `framer-1v8iaj4`,
                        fonts: [`Inter`],
                        layoutDependency: se,
                        layoutId: `a3YAQPYeC`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: O,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    m(v.div, {
                      className: `framer-1z0xm43`,
                      "data-border": !0,
                      "data-framer-name": `Cell`,
                      layoutDependency: se,
                      layoutId: `ibZvzH3lz`,
                      style: {
                        "--border-bottom-width": `0px`,
                        "--border-color": `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `0px`,
                        "--border-style": `solid`,
                        "--border-top-width": `0px`,
                        backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                      },
                      children: m(F, {
                        __fromCanvasComponent: !0,
                        children: m(r, {
                          children: m(v.p, {
                            className: `framer-styles-preset-1sjmy9b`,
                            "data-styles-preset": `PXfjos31S`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                            },
                            children: `0`,
                          }),
                        }),
                        className: `framer-1ulbovl`,
                        fonts: [`Inter`],
                        layoutDependency: se,
                        layoutId: `XUHCecV9O`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: de,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-FyWcA.framer-1osvov5, .framer-FyWcA .framer-1osvov5 { display: block; }`,
          `.framer-FyWcA.framer-1u3oybf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 612px; }`,
          `.framer-FyWcA .framer-sfqx3v, .framer-FyWcA .framer-1e2r28s, .framer-FyWcA .framer-7x7iu1, .framer-FyWcA .framer-1z0xm43 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 16px 24px; position: relative; width: 1px; }`,
          `.framer-FyWcA .framer-xrlxsu, .framer-FyWcA .framer-17lpd5h, .framer-FyWcA .framer-1v8iaj4, .framer-FyWcA .framer-1ulbovl { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-FyWcA.framer-v-1n6j0at .framer-sfqx3v, .framer-FyWcA.framer-v-1n6j0at .framer-1e2r28s, .framer-FyWcA.framer-v-1n6j0at .framer-7x7iu1, .framer-FyWcA.framer-v-1n6j0at .framer-1z0xm43 { padding: 16px 12px 16px 12px; }`,
          ...Qe,
          `.framer-FyWcA[data-border="true"]::after, .framer-FyWcA [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-FyWcA`
      )),
      (W.displayName = `Size Chart Row`),
      (W.defaultProps = { height: 53, width: 612 }),
      A(W, {
        variant: {
          options: [`mqMUrxGyN`, `yFFl_lkaI`],
          optionTitles: [`Large`, `Small`],
          title: `Variant`,
          type: I.Enum,
        },
        KnIOtOEIQ: { defaultValue: `UK 4`, displayTextArea: !1, title: `Size`, type: I.String },
        onKnIOtOEIQChange: { changes: `KnIOtOEIQ`, type: I.ChangeHandler },
        TnDye81BM: { defaultValue: 0, title: `US`, type: I.Number },
        onTnDye81BMChange: { changes: `TnDye81BM`, type: I.ChangeHandler },
        yDSc0kaYR: { defaultValue: 0, step: 0.5, title: `EU`, type: I.Number },
        onyDSc0kaYRChange: { changes: `yDSc0kaYR`, type: I.ChangeHandler },
        lIhw5r7E9: { defaultValue: 0, title: `Foot`, type: I.Number },
        onlIhw5r7E9Change: { changes: `lIhw5r7E9`, type: I.ChangeHandler },
      }),
      k(
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
          ...L($e),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  tr,
  nr,
  rr,
  ir,
  ar = e(() => {
    (c(),
      N(),
      t(),
      (tr = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 36.148 0 L 3.43 32.718 C -1.143 37.292 -1.143 44.708 3.43 49.282 L 36.148 82" fill="transparent" height="82px" id="YKlfiVBsl" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="17.57" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(32 9)" width="36.14778417249727px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (nr = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? m(v.div, { ...a, layoutId: r, ref: t }) : m(`div`, { ...a, ref: t });
      })),
      (rr = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (ir = D(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = rr(e);
          return m(nr, {
            ...s,
            className: E(`framer-mQRrK`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-mQRrK { -webkit-mask: ${tr}; aspect-ratio: 1; background-color: var(--118a55); mask: ${tr}; width: 100px; }`,
        ],
        `framer-mQRrK`
      )),
      (ir.displayName = `Chevron Left`),
      A(ir, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  });
function or(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr = e(() => {
    (c(),
      N(),
      b(),
      t(),
      ar(),
      (sr = { R2hKtddzg: { hover: !0 }, RQ9lDMdDf: { hover: !0 } }),
      (cr = [`RQ9lDMdDf`, `v6vSkeZvz`, `R2hKtddzg`, `IMR_Dk4vR`]),
      (lr = `framer-Z5xFS`),
      (ur = {
        IMR_Dk4vR: `framer-v-8gb9xv`,
        R2hKtddzg: `framer-v-96j9mk`,
        RQ9lDMdDf: `framer-v-14arh5g`,
        v6vSkeZvz: `framer-v-p9oyz8`,
      }),
      (dr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (fr = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (pr = {
        "Left Disabled": `v6vSkeZvz`,
        "Right Disabled": `IMR_Dk4vR`,
        Left: `RQ9lDMdDf`,
        Right: `R2hKtddzg`,
      }),
      (mr = v.create(r)),
      (hr = ({ click: e, height: t, icon: n, id: r, width: i, ...a }) => ({
        ...a,
        k1iE3TsE8: e ?? a.k1iE3TsE8,
        mNcL0cGat: n ?? a.mNcL0cGat ?? ir,
        variant: pr[a.variant] ?? a.variant ?? `RQ9lDMdDf`,
      })),
      (gr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (_r = D(
        f(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = ce();
          ve();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: te,
              k1iE3TsE8: d,
              mNcL0cGat: f,
              ...p
            } = hr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: ne,
              gestureVariant: re,
              isLoading: y,
              setGestureState: ie,
              setVariant: b,
              variants: x,
            } = le({
              cycleOrder: cr,
              defaultVariant: `RQ9lDMdDf`,
              enabledGestures: sr,
              ref: i,
              variant: te,
              variantClassNames: ur,
            }),
            S = gr(e, x),
            { activeVariantCallback: C, delay: w } = we(h),
            oe = C(async (...e) => {
              if ((ie({ isPressed: !1 }), d && (await d(...e)) === !1)) return !1;
            }),
            se = E(lr);
          return m(ae, {
            id: u ?? a,
            children: m(mr, {
              animate: x,
              initial: !1,
              children: m(fr, {
                value: dr,
                children: m(v.button, {
                  ...p,
                  ...ne,
                  "aria-label": `Carousel Navigation Button`,
                  className: E(se, `framer-14arh5g`, l, g),
                  "data-framer-name": `Left`,
                  "data-highlight": !0,
                  "data-reset": `button`,
                  layoutDependency: S,
                  layoutId: `RQ9lDMdDf`,
                  onTap: oe,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: `100%`,
                    borderBottomRightRadius: `100%`,
                    borderTopLeftRadius: `100%`,
                    borderTopRightRadius: `100%`,
                    opacity: 1,
                    ...c,
                  },
                  variants: {
                    "R2hKtddzg-hover": {
                      backgroundColor: `var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(240, 240, 240))`,
                    },
                    "RQ9lDMdDf-hover": {
                      backgroundColor: `var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, rgb(240, 240, 240))`,
                      opacity: 1,
                    },
                    IMR_Dk4vR: { opacity: 0.3 },
                    R2hKtddzg: { opacity: 1 },
                    v6vSkeZvz: { opacity: 0.3 },
                  },
                  ...or(
                    {
                      "R2hKtddzg-hover": { "data-framer-name": void 0 },
                      "RQ9lDMdDf-hover": { "data-framer-name": void 0 },
                      IMR_Dk4vR: { "data-framer-name": `Right Disabled` },
                      R2hKtddzg: { "data-framer-name": `Right` },
                      v6vSkeZvz: { "data-framer-name": `Left Disabled` },
                    },
                    h,
                    re
                  ),
                  children: m(_e, {
                    animated: !0,
                    className: `framer-k3xf0q`,
                    Component: f,
                    layoutDependency: S,
                    layoutId: `rL7ygkWz4`,
                    style: {
                      "--118a55": `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Z5xFS.framer-f9ztt0, .framer-Z5xFS .framer-f9ztt0 { display: block; }`,
          `.framer-Z5xFS.framer-14arh5g { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 33px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 4px 5px 4px 4px; position: relative; width: 33px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Z5xFS .framer-k3xf0q { aspect-ratio: 1 / 1; flex: none; height: 65%; position: relative; width: var(--framer-aspect-ratio-supported, 16px); }`,
          `.framer-Z5xFS.framer-v-96j9mk.framer-14arh5g, .framer-Z5xFS.framer-v-8gb9xv.framer-14arh5g { padding: 4px 5px 4px 6px; }`,
        ],
        `framer-Z5xFS`
      )),
      (_r.displayName = `Navigation Button`),
      (_r.defaultProps = { height: 32.5, width: 32.5 }),
      A(_r, {
        variant: {
          options: [`RQ9lDMdDf`, `v6vSkeZvz`, `R2hKtddzg`, `IMR_Dk4vR`],
          optionTitles: [`Left`, `Left Disabled`, `Right`, `Right Disabled`],
          title: `Variant`,
          type: I.Enum,
        },
        k1iE3TsE8: { title: `Click`, type: I.EventHandler },
        mNcL0cGat: {
          defaultValue: {
            identifier: `local-module:vector/J2F4eP2v_:default`,
            moduleId: `SdfiFzYxv6PgBPDaufJ9`,
          },
          setModuleId: `v49rTnsQ31Y5gd6DySlU`,
          title: `Icon`,
          type: I.VectorSetItem,
        },
      }),
      k(_r, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function yr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  Or,
  G,
  K,
  q,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr = e(() => {
    (c(),
      N(),
      b(),
      t(),
      Yt(),
      yt(),
      ar(),
      vr(),
      cn(),
      (br = T(B)),
      (xr = T(_r)),
      (Sr = T(Jt)),
      (Cr = [
        `uk4JWx8cK`,
        `FgDJVyT8N`,
        `hvM9dfLWI`,
        `QmqWXnMV0`,
        `EBE0N04bP`,
        `w9pyAdHuB`,
        `sk_6ZJd1e`,
        `eUFrBv_vj`,
        `LS879bXgX`,
        `wV8N2tOv_`,
      ]),
      (wr = `framer-UFM0A`),
      (Tr = {
        EBE0N04bP: `framer-v-v7pdm9`,
        eUFrBv_vj: `framer-v-11njlz0`,
        FgDJVyT8N: `framer-v-1f5nlsl`,
        hvM9dfLWI: `framer-v-qq0vew`,
        LS879bXgX: `framer-v-huu00x`,
        QmqWXnMV0: `framer-v-1ojrtew`,
        sk_6ZJd1e: `framer-v-1ed10t3`,
        uk4JWx8cK: `framer-v-1r14yi5`,
        w9pyAdHuB: `framer-v-15dqktm`,
        wV8N2tOv_: `framer-v-15iwvgu`,
      }),
      (Er = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dr = (e, t) => typeof e == `number` && typeof t == `number` && e < t),
      (Or = (e) => !e),
      (G = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (K = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (q = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (kr = (e, t) => (e ? `none` : `auto`)),
      (Ar = (e, t) => (e ? `IMR_Dk4vR` : `R2hKtddzg`)),
      (jr = ({ value: e, children: t }) => {
        let n = i(y),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(y.Provider, { value: o, children: t });
      }),
      (Mr = {
        1: `uk4JWx8cK`,
        10: `wV8N2tOv_`,
        2: `FgDJVyT8N`,
        3: `hvM9dfLWI`,
        4: `QmqWXnMV0`,
        5: `EBE0N04bP`,
        6: `w9pyAdHuB`,
        7: `sk_6ZJd1e`,
        8: `eUFrBv_vj`,
        9: `LS879bXgX`,
      }),
      (Nr = v.create(r)),
      (Pr = ({
        height: e,
        id: t,
        productImage1: n,
        productImage10: r,
        productImage2: i,
        productImage3: a,
        productImage4: o,
        productImage5: s,
        productImage6: ee,
        productImage7: c,
        productImage8: l,
        productImage9: u,
        totalImages: te,
        width: d,
        ...f
      }) => ({
        ...f,
        FHJhqwh6P: n ?? f.FHJhqwh6P,
        fQ_FxoPLF: ee ?? f.fQ_FxoPLF,
        hr8MgRXlx: r ?? f.hr8MgRXlx,
        mHn_lbk5y: s ?? f.mHn_lbk5y,
        Nj53hr3fB: l ?? f.Nj53hr3fB,
        qG3F78iay: i ?? f.qG3F78iay,
        qo_LjSK80: c ?? f.qo_LjSK80,
        Rt0ORFrPQ: u ?? f.Rt0ORFrPQ,
        variant: Mr[f.variant] ?? f.variant ?? `uk4JWx8cK`,
        vOrscV2eC: o ?? f.vOrscV2eC,
        WiHntCqUE: te ?? f.WiHntCqUE ?? 10,
        xLdXoPZRN: a ?? f.xLdXoPZRN,
      })),
      (Fr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ir = D(
        f(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = ce(),
            c = ve(),
            {
              style: l,
              className: u,
              layoutId: te,
              variant: d,
              WiHntCqUE: f,
              FHJhqwh6P: p,
              qG3F78iay: g,
              xLdXoPZRN: _,
              vOrscV2eC: ne,
              mHn_lbk5y: re,
              fQ_FxoPLF: y,
              qo_LjSK80: ie,
              Nj53hr3fB: b,
              Rt0ORFrPQ: x,
              hr8MgRXlx: S,
              ...C
            } = Pr(e),
            {
              baseVariant: w,
              classNames: oe,
              clearLoadingGesture: se,
              gestureHandlers: ue,
              gestureVariant: T,
              isLoading: D,
              setGestureState: de,
              setVariant: k,
              variants: fe,
            } = le({
              cycleOrder: Cr,
              defaultVariant: `uk4JWx8cK`,
              ref: i,
              variant: d,
              variantClassNames: Tr,
            }),
            A = Fr(e, fe),
            { activeVariantCallback: j, delay: pe } = we(w),
            me = j(async (...e) => {
              k(`uk4JWx8cK`);
            }),
            he = j(async (...e) => {
              k(`FgDJVyT8N`);
            }),
            ge = j(async (...e) => {
              k(`hvM9dfLWI`);
            }),
            _e = j(async (...e) => {
              k(`QmqWXnMV0`);
            }),
            M = j(async (...e) => {
              k(`EBE0N04bP`);
            }),
            ye = j(async (...e) => {
              k(`w9pyAdHuB`);
            }),
            be = j(async (...e) => {
              k(`sk_6ZJd1e`);
            }),
            xe = j(async (...e) => {
              k(`eUFrBv_vj`);
            }),
            N = j(async (...e) => {
              k(`LS879bXgX`);
            }),
            Se = j(async (...e) => {
              k(`wV8N2tOv_`);
            }),
            Ce = j(async (...e) => {
              k(`uk4JWx8cK`);
            }),
            Te = j(async (...e) => {
              k(`FgDJVyT8N`);
            }),
            F = j(async (...e) => {
              k(`hvM9dfLWI`);
            }),
            Ee = j(async (...e) => {
              k(`QmqWXnMV0`);
            }),
            I = j(async (...e) => {
              k(`EBE0N04bP`);
            }),
            De = j(async (...e) => {
              k(`w9pyAdHuB`);
            }),
            L = j(async (...e) => {
              k(`sk_6ZJd1e`);
            }),
            Oe = j(async (...e) => {
              k(`eUFrBv_vj`);
            }),
            ke = j(async (...e) => {
              k(`LS879bXgX`);
            }),
            Ae = j(async (...e) => {
              k(`wV8N2tOv_`);
            }),
            je = E(wr),
            R = Or(Dr(f, 1)),
            Me = Or(Dr(f, 2)),
            z = Or(Dr(f, 3)),
            Ne = Or(Dr(f, 4)),
            Pe = Or(Dr(f, 5)),
            Fe = Or(Dr(f, 6)),
            Ie = Or(Dr(f, 7)),
            Le = Or(Dr(f, 8)),
            Re = Or(Dr(f, 9)),
            ze = Or(Dr(f, 10)),
            Be = kr(q(f, 1), s),
            Ve = kr(q(f, 2), s),
            He = kr(q(f, 3), s),
            Ue = kr(q(f, 4), s),
            We = kr(q(f, 5), s),
            Ge = kr(q(f, 6), s),
            Ke = kr(q(f, 7), s),
            qe = kr(q(f, 8), s),
            Je = kr(q(f, 9), s),
            Ye = kr(q(f, 10), s);
          return m(ae, {
            id: te ?? a,
            children: m(Nr, {
              animate: fe,
              initial: !1,
              children: m(jr, {
                value: Er,
                children: h(v.div, {
                  ...C,
                  ...ue,
                  className: E(je, `framer-1r14yi5`, u, oe),
                  "data-framer-name": `1`,
                  layoutDependency: A,
                  layoutId: `uk4JWx8cK`,
                  ref: i,
                  style: { ...l },
                  ...yr(
                    {
                      EBE0N04bP: { "data-framer-name": `5` },
                      eUFrBv_vj: { "data-framer-name": `8` },
                      FgDJVyT8N: { "data-framer-name": `2` },
                      hvM9dfLWI: { "data-framer-name": `3` },
                      LS879bXgX: { "data-framer-name": `9` },
                      QmqWXnMV0: { "data-framer-name": `4` },
                      sk_6ZJd1e: { "data-framer-name": `7` },
                      w9pyAdHuB: { "data-framer-name": `6` },
                      wV8N2tOv_: { "data-framer-name": `10` },
                    },
                    w,
                    T
                  ),
                  children: [
                    h(v.div, {
                      className: `framer-4qhy2w`,
                      "data-framer-name": `Selectors & Navigation`,
                      layoutDependency: A,
                      layoutId: `Z0gKiddiV`,
                      children: [
                        h(v.div, {
                          className: `framer-1k0nu2y`,
                          "data-framer-name": `Selectors`,
                          "data-hide-scrollbars": !0,
                          layoutDependency: A,
                          layoutId: `lLJJOl18t`,
                          style: {
                            mask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 90%, rgba(0, 0, 0, 0) 100%) add`,
                            WebkitMask: `linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 90%, rgba(0, 0, 0, 0) 100%) add`,
                          },
                          children: [
                            R !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-utmusv-container`,
                                  layoutDependency: A,
                                  layoutId: `Kg7MdLBar-container`,
                                  nodeId: `Kg7MdLBar`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: me,
                                    height: `100%`,
                                    id: `Kg7MdLBar`,
                                    layoutId: `Kg7MdLBar`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`nPCrUxk0X`),
                                    width: `100%`,
                                    wzQzBe7gb: G(p),
                                    ...yr(
                                      {
                                        EBE0N04bP: { variant: K(`uUl30LWV5`) },
                                        eUFrBv_vj: { variant: K(`uUl30LWV5`) },
                                        FgDJVyT8N: { variant: K(`uUl30LWV5`) },
                                        hvM9dfLWI: { variant: K(`uUl30LWV5`) },
                                        LS879bXgX: { variant: K(`uUl30LWV5`) },
                                        QmqWXnMV0: { variant: K(`uUl30LWV5`) },
                                        sk_6ZJd1e: { variant: K(`uUl30LWV5`) },
                                        w9pyAdHuB: { variant: K(`uUl30LWV5`) },
                                        wV8N2tOv_: { variant: K(`uUl30LWV5`) },
                                      },
                                      w,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                            Me !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-10icu31-container`,
                                  layoutDependency: A,
                                  layoutId: `bU5ML05zZ-container`,
                                  nodeId: `bU5ML05zZ`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: he,
                                    height: `100%`,
                                    id: `bU5ML05zZ`,
                                    layoutId: `bU5ML05zZ`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(g),
                                    ...yr({ FgDJVyT8N: { variant: K(`nPCrUxk0X`) } }, w, T),
                                  }),
                                }),
                              }),
                            z !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-1n3l2cd-container`,
                                  layoutDependency: A,
                                  layoutId: `SGhh1LBeg-container`,
                                  nodeId: `SGhh1LBeg`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: ge,
                                    height: `100%`,
                                    id: `SGhh1LBeg`,
                                    layoutId: `SGhh1LBeg`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(_),
                                    ...yr({ hvM9dfLWI: { variant: K(`nPCrUxk0X`) } }, w, T),
                                  }),
                                }),
                              }),
                            Ne !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-1wg8gcd-container`,
                                  layoutDependency: A,
                                  layoutId: `T27UrVWUG-container`,
                                  nodeId: `T27UrVWUG`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: _e,
                                    height: `100%`,
                                    id: `T27UrVWUG`,
                                    layoutId: `T27UrVWUG`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(ne),
                                    ...yr({ QmqWXnMV0: { variant: K(`nPCrUxk0X`) } }, w, T),
                                  }),
                                }),
                              }),
                            Pe !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-101qh6o-container`,
                                  layoutDependency: A,
                                  layoutId: `vhPGuAWXx-container`,
                                  nodeId: `vhPGuAWXx`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: M,
                                    height: `100%`,
                                    id: `vhPGuAWXx`,
                                    layoutId: `vhPGuAWXx`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(re),
                                    ...yr({ EBE0N04bP: { variant: K(`nPCrUxk0X`) } }, w, T),
                                  }),
                                }),
                              }),
                            Fe !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-dnl5up-container`,
                                  layoutDependency: A,
                                  layoutId: `avSSbFPN4-container`,
                                  nodeId: `avSSbFPN4`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: ye,
                                    height: `100%`,
                                    id: `avSSbFPN4`,
                                    layoutId: `avSSbFPN4`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(y),
                                    ...yr({ w9pyAdHuB: { variant: K(`nPCrUxk0X`) } }, w, T),
                                  }),
                                }),
                              }),
                            Ie !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-wco54y-container`,
                                  layoutDependency: A,
                                  layoutId: `JcU26Sxod-container`,
                                  nodeId: `JcU26Sxod`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: be,
                                    height: `100%`,
                                    id: `JcU26Sxod`,
                                    layoutId: `JcU26Sxod`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(ie),
                                    ...yr(
                                      {
                                        EBE0N04bP: { variant: K(`nPCrUxk0X`) },
                                        sk_6ZJd1e: { variant: K(`nPCrUxk0X`) },
                                      },
                                      w,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                            Le !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-1c2tyls-container`,
                                  layoutDependency: A,
                                  layoutId: `cPWzRwwf6-container`,
                                  nodeId: `cPWzRwwf6`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: xe,
                                    height: `100%`,
                                    id: `cPWzRwwf6`,
                                    layoutId: `cPWzRwwf6`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(b),
                                    ...yr(
                                      {
                                        EBE0N04bP: { variant: K(`nPCrUxk0X`) },
                                        eUFrBv_vj: { variant: K(`nPCrUxk0X`) },
                                      },
                                      w,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                            Re !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-1dt05hh-container`,
                                  layoutDependency: A,
                                  layoutId: `nX6sO__SF-container`,
                                  nodeId: `nX6sO__SF`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: N,
                                    height: `100%`,
                                    id: `nX6sO__SF`,
                                    layoutId: `nX6sO__SF`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(x),
                                    ...yr(
                                      {
                                        EBE0N04bP: { variant: K(`nPCrUxk0X`) },
                                        LS879bXgX: { variant: K(`nPCrUxk0X`) },
                                      },
                                      w,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                            ze !== !1 &&
                              m(P, {
                                height: 75,
                                width: `75px`,
                                y:
                                  (c?.y || 0) +
                                  0 +
                                  0 +
                                  ((((c?.height || 500) - 0) * 1 -
                                    0 -
                                    (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                      28 +
                                      10)) /
                                    2 +
                                    0 +
                                    0) +
                                  40 +
                                  0,
                                children: m(O, {
                                  className: `framer-1lpeo9n-container`,
                                  layoutDependency: A,
                                  layoutId: `nG9KeQbyA-container`,
                                  nodeId: `nG9KeQbyA`,
                                  rendersWithMotion: !0,
                                  scopeId: `ZD117HneS`,
                                  children: m(B, {
                                    ByST6mxhk: Se,
                                    height: `100%`,
                                    id: `nG9KeQbyA`,
                                    layoutId: `nG9KeQbyA`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: K(`uUl30LWV5`),
                                    width: `100%`,
                                    wzQzBe7gb: G(S),
                                    ...yr(
                                      {
                                        EBE0N04bP: { variant: K(`nPCrUxk0X`) },
                                        wV8N2tOv_: { variant: K(`nPCrUxk0X`) },
                                      },
                                      w,
                                      T
                                    ),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        h(v.div, {
                          className: `framer-1xneumb`,
                          "data-framer-name": `Navigators`,
                          layoutDependency: A,
                          layoutId: `vH56uQjVe`,
                          children: [
                            m(P, {
                              height: 28,
                              width: `28px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                0 +
                                ((((c?.height || 500) - 0) * 1 -
                                  0 -
                                  (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                    28 +
                                    10)) /
                                  2 +
                                  Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                  10) +
                                0,
                              children: m(O, {
                                className: `framer-mszv7z-container`,
                                layoutDependency: A,
                                layoutId: `BuxxAlh0q-container`,
                                nodeId: `BuxxAlh0q`,
                                rendersWithMotion: !0,
                                scopeId: `ZD117HneS`,
                                children: m(_r, {
                                  height: `100%`,
                                  id: `BuxxAlh0q`,
                                  k1iE3TsE8: Ce,
                                  layoutId: `BuxxAlh0q`,
                                  mNcL0cGat: ir,
                                  style: { height: `100%`, width: `100%` },
                                  variant: K(`v6vSkeZvz`),
                                  width: `100%`,
                                  ...yr(
                                    {
                                      EBE0N04bP: { k1iE3TsE8: Ee, variant: K(`RQ9lDMdDf`) },
                                      eUFrBv_vj: { k1iE3TsE8: L, variant: K(`RQ9lDMdDf`) },
                                      FgDJVyT8N: { variant: K(`RQ9lDMdDf`) },
                                      hvM9dfLWI: { k1iE3TsE8: Te, variant: K(`RQ9lDMdDf`) },
                                      LS879bXgX: { k1iE3TsE8: Oe, variant: K(`RQ9lDMdDf`) },
                                      QmqWXnMV0: { k1iE3TsE8: F, variant: K(`RQ9lDMdDf`) },
                                      sk_6ZJd1e: { k1iE3TsE8: De, variant: K(`RQ9lDMdDf`) },
                                      w9pyAdHuB: { k1iE3TsE8: I, variant: K(`RQ9lDMdDf`) },
                                      wV8N2tOv_: { k1iE3TsE8: ke, variant: K(`RQ9lDMdDf`) },
                                    },
                                    w,
                                    T
                                  ),
                                }),
                              }),
                            }),
                            m(P, {
                              height: 28,
                              width: `28px`,
                              y:
                                (c?.y || 0) +
                                0 +
                                0 +
                                ((((c?.height || 500) - 0) * 1 -
                                  0 -
                                  (Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                    28 +
                                    10)) /
                                  2 +
                                  Math.max(0, (((c?.height || 500) - 0) * 1 - 0 - 38) / 1) * 1 +
                                  10) +
                                0,
                              children: m(O, {
                                className: `framer-4p7jnf-container`,
                                layoutDependency: A,
                                layoutId: `dqH8S3RAR-container`,
                                nodeId: `dqH8S3RAR`,
                                rendersWithMotion: !0,
                                scopeId: `ZD117HneS`,
                                style: {
                                  "--14qv2j9": Ue,
                                  "--15r58hp": qe,
                                  "--1ahy7iu": Ye,
                                  "--1fqcd61": He,
                                  "--1kecrkj": Be,
                                  "--al31w": We,
                                  "--g8mwr2": Ke,
                                  "--icmru3": Ve,
                                  "--o3xr8t": Je,
                                  "--siuxa5": Ge,
                                },
                                children: m(_r, {
                                  height: `100%`,
                                  id: `dqH8S3RAR`,
                                  k1iE3TsE8: Te,
                                  layoutId: `dqH8S3RAR`,
                                  mNcL0cGat: bt,
                                  style: { height: `100%`, width: `100%` },
                                  variant: K(Ar(q(f, 1), s)),
                                  width: `100%`,
                                  ...yr(
                                    {
                                      EBE0N04bP: { k1iE3TsE8: De, variant: K(Ar(q(f, 5), s)) },
                                      eUFrBv_vj: { k1iE3TsE8: ke, variant: K(Ar(q(f, 8), s)) },
                                      FgDJVyT8N: { k1iE3TsE8: F, variant: K(Ar(q(f, 2), s)) },
                                      hvM9dfLWI: { k1iE3TsE8: Ee, variant: K(Ar(q(f, 3), s)) },
                                      LS879bXgX: { k1iE3TsE8: Ae, variant: K(Ar(q(f, 9), s)) },
                                      QmqWXnMV0: { k1iE3TsE8: I, variant: K(Ar(q(f, 4), s)) },
                                      sk_6ZJd1e: { k1iE3TsE8: Oe, variant: K(Ar(q(f, 7), s)) },
                                      w9pyAdHuB: { k1iE3TsE8: L, variant: K(Ar(q(f, 6), s)) },
                                      wV8N2tOv_: { k1iE3TsE8: void 0, variant: K(`IMR_Dk4vR`) },
                                    },
                                    w,
                                    T
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    m(v.div, {
                      className: `framer-1ui87q9`,
                      "data-framer-name": `Image`,
                      layoutDependency: A,
                      layoutId: `E14t27Dxp`,
                      children: m(P, {
                        children: m(O, {
                          className: `framer-smgyi7-container`,
                          isAuthoredByUser: !0,
                          layoutDependency: A,
                          layoutId: `VmpDtbFNM-container`,
                          nodeId: `VmpDtbFNM`,
                          rendersWithMotion: !0,
                          scopeId: `ZD117HneS`,
                          children: m(Jt, {
                            border: { color: `rgba(0, 0, 0, 0.1)`, width: 1 },
                            disabled: !1,
                            height: `100%`,
                            id: `VmpDtbFNM`,
                            image: G(p),
                            layoutId: `VmpDtbFNM`,
                            radius: 50,
                            size: 400,
                            style: { height: `100%`, width: `100%` },
                            type: `contain`,
                            width: `100%`,
                            zoomLevel: 2,
                            ...yr(
                              {
                                EBE0N04bP: { image: G(re) },
                                eUFrBv_vj: { image: G(b) },
                                FgDJVyT8N: { image: G(g) },
                                hvM9dfLWI: { image: G(_) },
                                LS879bXgX: { image: G(x) },
                                QmqWXnMV0: { image: G(ne) },
                                sk_6ZJd1e: { image: G(ie) },
                                w9pyAdHuB: { image: G(y) },
                                wV8N2tOv_: { image: G(S) },
                              },
                              w,
                              T
                            ),
                          }),
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
          `.framer-UFM0A.framer-mct44b, .framer-UFM0A .framer-mct44b { display: block; }`,
          `.framer-UFM0A.framer-1r14yi5 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 500px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 528px; }`,
          `.framer-UFM0A .framer-4qhy2w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-UFM0A .framer-1k0nu2y { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; overflow: auto; padding: 40px 0px 100px 0px; position: relative; width: 75px; }`,
          `.framer-UFM0A .framer-utmusv-container, .framer-UFM0A .framer-10icu31-container, .framer-UFM0A .framer-1n3l2cd-container, .framer-UFM0A .framer-1wg8gcd-container, .framer-UFM0A .framer-101qh6o-container, .framer-UFM0A .framer-dnl5up-container, .framer-UFM0A .framer-wco54y-container, .framer-UFM0A .framer-1c2tyls-container, .framer-UFM0A .framer-1dt05hh-container, .framer-UFM0A .framer-1lpeo9n-container { flex: none; height: 75px; position: relative; width: 100%; }`,
          `.framer-UFM0A .framer-1xneumb { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-UFM0A .framer-mszv7z-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); position: relative; width: 28px; }`,
          `.framer-UFM0A .framer-4p7jnf-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 28px); pointer-events: var(--1kecrkj); position: relative; width: 28px; }`,
          `.framer-UFM0A .framer-1ui87q9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-UFM0A .framer-smgyi7-container { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 443px); position: relative; width: 1px; }`,
          `.framer-UFM0A.framer-v-1f5nlsl .framer-4p7jnf-container { pointer-events: var(--icmru3); }`,
          `.framer-UFM0A.framer-v-qq0vew .framer-4p7jnf-container { pointer-events: var(--1fqcd61); }`,
          `.framer-UFM0A.framer-v-1ojrtew .framer-4p7jnf-container { pointer-events: var(--14qv2j9); }`,
          `.framer-UFM0A.framer-v-v7pdm9 .framer-4p7jnf-container { pointer-events: var(--al31w); }`,
          `.framer-UFM0A.framer-v-15dqktm .framer-4p7jnf-container { pointer-events: var(--siuxa5); }`,
          `.framer-UFM0A.framer-v-1ed10t3 .framer-4p7jnf-container { pointer-events: var(--g8mwr2); }`,
          `.framer-UFM0A.framer-v-11njlz0 .framer-4p7jnf-container { pointer-events: var(--15r58hp); }`,
          `.framer-UFM0A.framer-v-huu00x .framer-4p7jnf-container { pointer-events: var(--o3xr8t); }`,
          `.framer-UFM0A.framer-v-15iwvgu .framer-4p7jnf-container { pointer-events: var(--1ahy7iu); }`,
          `.framer-UFM0A[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-UFM0A [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-UFM0A[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-UFM0A [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-UFM0A[data-hide-scrollbars="true"], .framer-UFM0A [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-UFM0A`
      )),
      (Ir.displayName = `Product Images Desktop`),
      (Ir.defaultProps = { height: 500, width: 528 }),
      A(Ir, {
        variant: {
          options: [
            `uk4JWx8cK`,
            `FgDJVyT8N`,
            `hvM9dfLWI`,
            `QmqWXnMV0`,
            `EBE0N04bP`,
            `w9pyAdHuB`,
            `sk_6ZJd1e`,
            `eUFrBv_vj`,
            `LS879bXgX`,
            `wV8N2tOv_`,
          ],
          optionTitles: [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`],
          title: `Variant`,
          type: I.Enum,
        },
        WiHntCqUE: { defaultValue: 10, title: `Total Images`, type: I.Number },
        onWiHntCqUEChange: { changes: `WiHntCqUE`, type: I.ChangeHandler },
        FHJhqwh6P: { title: `Product Image 1`, type: I.ResponsiveImage },
        qG3F78iay: { title: `Product Image 2`, type: I.ResponsiveImage },
        xLdXoPZRN: { title: `Product Image 3`, type: I.ResponsiveImage },
        vOrscV2eC: { title: `Product Image 4`, type: I.ResponsiveImage },
        mHn_lbk5y: { title: `Product Image 5`, type: I.ResponsiveImage },
        fQ_FxoPLF: { title: `Product Image 6`, type: I.ResponsiveImage },
        qo_LjSK80: { title: `Product Image 7`, type: I.ResponsiveImage },
        Nj53hr3fB: { title: `Product Image 8`, type: I.ResponsiveImage },
        Rt0ORFrPQ: { title: `Product Image 9`, type: I.ResponsiveImage },
        hr8MgRXlx: { title: `Product Image 10`, type: I.ResponsiveImage },
      }),
      k(Ir, [{ explicitInter: !0, fonts: [] }, ...br, ...xr, ...Sr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Ir.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([x(B, {}, t), x(_r, {}, t)])),
      }));
  });
function Rr(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function J(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function zr(e) {
  throw Error(`Unexpected value: ${e}`);
}
function Br(e, t, n, r) {
  (J(e >= t, e, `outside lower bound for`, r), J(e <= n, e, `outside upper bound for`, r));
}
function Vr(e) {
  return typeof e == `string`;
}
function Hr(e) {
  return Number.isFinite(e);
}
function Ur(e) {
  return e === null;
}
function Wr(e) {
  if (Ur(e)) return 0;
  switch (e.type) {
    case I.Array:
      return 1;
    case I.Boolean:
      return 2;
    case I.Color:
      return 3;
    case I.Date:
      return 4;
    case I.Enum:
      return 5;
    case I.File:
      return 6;
    case I.ResponsiveImage:
      return 10;
    case I.Link:
      return 7;
    case I.Number:
      return 8;
    case I.Object:
      return 9;
    case I.RichText:
      return 11;
    case I.String:
      return 12;
    case I.VectorSetItem:
      return 13;
    default:
      zr(e);
  }
}
function Gr(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = Y.read(e);
    n.push(t);
  }
  return { type: I.Array, value: n };
}
function Kr(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) Y.write(e, n);
}
function qr(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Y.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Jr(e) {
  return { type: I.Boolean, value: e.readUint8() !== 0 };
}
function Yr(e, t) {
  e.writeUint8(+!!t.value);
}
function Xr(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Zr(e) {
  return { type: I.Color, value: e.readString() };
}
function Qr(e, t) {
  e.writeString(t.value);
}
function $r(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ei(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: I.Date, value: n.toISOString() };
}
function ti(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function ni(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function ri(e) {
  return { type: I.Enum, value: e.readString() };
}
function ii(e, t) {
  e.writeString(t.value);
}
function ai(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function oi(e) {
  return { type: I.File, value: e.readString() };
}
function si(e, t) {
  e.writeString(t.value);
}
function ci(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function li(e) {
  return { type: I.Link, value: e.readJson() };
}
function ui(e, t) {
  e.writeJson(t.value);
}
function di(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function fi(e) {
  return { type: I.Number, value: e.readFloat64() };
}
function pi(e, t) {
  e.writeFloat64(t.value);
}
function mi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function hi(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = Y.read(e);
  }
  return { type: I.Object, value: n };
}
function gi(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), Y.write(e, r));
}
function _i(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let ee = e.value[o] ?? null,
      c = t.value[s] ?? null,
      l = Y.compare(ee, c, n);
    if (l !== 0) return l;
  }
  return 0;
}
function vi(e) {
  return { type: I.ResponsiveImage, value: e.readJson() };
}
function yi(e, t) {
  e.writeJson(t.value);
}
function bi(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function xi(e) {
  let t = e.readInt8();
  if (t === 0) return { type: I.RichText, value: e.readUint32() };
  if (t === 1) return { type: I.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Si(e, t) {
  if (Hr(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (Vr(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function Ci(e, t) {
  let n = e.value,
    r = t.value;
  if ((Hr(n) && Hr(r)) || (Vr(n) && Vr(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function wi(e) {
  return { type: I.String, value: e.readString() };
}
function Ti(e, t) {
  e.writeString(t.value);
}
function Ei(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Di(e) {
  return { type: I.VectorSetItem, value: e.readUint32() };
}
function Oi(e, t) {
  e.writeUint32(t.value);
}
function ki(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ai(e) {
  let t = Math.floor(ra * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function ji(e, t) {
  let n = Ni(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await aa(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let ee = await s.arrayBuffer(),
    c = new Uint8Array(ee);
  if (c.length !== i) throw Error(`Request failed: Unexpected response length`);
  let l = new oa(),
    u = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = u + t,
      r = c.subarray(u, n);
    (l.write(e.from, r), (u = n));
  }
  return t.map((e) => l.read(e.from, e.to - e.from));
}
function Mi(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Ni(e) {
  J(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var Y,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  X,
  Wi,
  Z,
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
  da = e(() => {
    (ne(),
      N(),
      (Pi = Object.create),
      (Fi = Object.defineProperty),
      (Ii = Object.getOwnPropertyDescriptor),
      (Li = Object.getOwnPropertyNames),
      (Ri = Object.getPrototypeOf),
      (zi = Object.prototype.hasOwnProperty),
      (Bi = (e, t, n) =>
        t in e
          ? Fi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (Vi = (e, t) =>
        function () {
          return (t || (0, e[Li(e)[0]])((t = { exports: {} }).exports, t), t.exports);
        }),
      (Hi = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of Li(t))
            zi.call(e, i) ||
              i === n ||
              Fi(e, i, { get: () => t[i], enumerable: !(r = Ii(t, i)) || r.enumerable });
        return e;
      }),
      (Ui = (e, t, n) => (
        (n = e == null ? {} : Pi(Ri(e))),
        Hi(!t && e && e.__esModule ? n : Fi(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      (X = (e, t, n) => Bi(e, typeof t == `symbol` ? t : t + ``, n)),
      (Wi = Ui(
        Vi({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var ee = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          ee.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var c = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, c), c);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (Z = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (Gi = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = Z.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = Z.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = Z.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = Z.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = Z.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = Z.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = Z.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = Z.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = Z.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = Z.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ((this.bytes = e),
            X(this, `offset`, 0),
            X(this, `view`),
            X(this, `decoder`, new TextDecoder()),
            (this.view = Rr(this.bytes)));
        }
      }),
      s !== void 0 && s.requestIdleCallback,
      (Ki = 1024),
      (qi = 1.5),
      (Ji = (e) => 2 ** e - 1),
      (Yi = (e) => -(2 ** (e - 1))),
      (Xi = (e) => 2 ** (e - 1) - 1),
      (Zi = {
        Uint8: 0,
        Uint16: 0,
        Uint32: 0,
        Uint64: 0,
        BigUint64: 0,
        Int8: Yi(8),
        Int16: Yi(16),
        Int32: Yi(32),
        Int64: -(2 ** 53 - 1),
        BigInt64: -(BigInt(2) ** BigInt(63)),
      }),
      (Qi = {
        Uint8: Ji(8),
        Uint16: Ji(16),
        Uint32: Ji(32),
        Uint64: 2 ** 53 - 1,
        BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
        Int8: Xi(8),
        Int16: Xi(16),
        Int32: Xi(32),
        Int64: 2 ** 53 - 1,
        BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
      }),
      ($i = class {
        getOffset() {
          return this.offset;
        }
        slice(e = 0, t = this.offset) {
          return this.bytes.slice(e, t);
        }
        subarray(e = 0, t = this.offset) {
          return this.bytes.subarray(e, t);
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (this.offset + e <= t) return;
          let n = new Uint8Array(Math.ceil(t * qi) + e);
          (n.set(this.bytes), (this.bytes = n), (this.view = Rr(n)));
        }
        writeUint8(e) {
          Br(e, Zi.Uint8, Qi.Uint8, `Uint8`);
          let t = Z.Uint8;
          (this.ensureLength(t), this.view.setUint8(this.offset, e), (this.offset += t));
        }
        writeUint16(e) {
          Br(e, Zi.Uint16, Qi.Uint16, `Uint16`);
          let t = Z.Uint16;
          (this.ensureLength(t), this.view.setUint16(this.offset, e), (this.offset += t));
        }
        writeUint32(e) {
          Br(e, Zi.Uint32, Qi.Uint32, `Uint32`);
          let t = Z.Uint32;
          (this.ensureLength(t), this.view.setUint32(this.offset, e), (this.offset += t));
        }
        writeUint64(e) {
          Br(e, Zi.Uint64, Qi.Uint64, `Uint64`);
          let t = BigInt(e);
          this.writeBigUint64(t);
        }
        writeBigUint64(e) {
          Br(e, Zi.BigUint64, Qi.BigUint64, `BigUint64`);
          let t = Z.BigUint64;
          (this.ensureLength(t), this.view.setBigUint64(this.offset, e), (this.offset += t));
        }
        writeInt8(e) {
          Br(e, Zi.Int8, Qi.Int8, `Int8`);
          let t = Z.Int8;
          (this.ensureLength(t), this.view.setInt8(this.offset, e), (this.offset += t));
        }
        writeInt16(e) {
          Br(e, Zi.Int16, Qi.Int16, `Int16`);
          let t = Z.Int16;
          (this.ensureLength(t), this.view.setInt16(this.offset, e), (this.offset += t));
        }
        writeInt32(e) {
          Br(e, Zi.Int32, Qi.Int32, `Int32`);
          let t = Z.Int32;
          (this.ensureLength(t), this.view.setInt32(this.offset, e), (this.offset += t));
        }
        writeInt64(e) {
          Br(e, Zi.Int64, Qi.Int64, `Int64`);
          let t = BigInt(e);
          this.writeBigInt64(t);
        }
        writeBigInt64(e) {
          Br(e, Zi.BigInt64, Qi.BigInt64, `BigInt64`);
          let t = Z.BigInt64;
          (this.ensureLength(t), this.view.setBigInt64(this.offset, e), (this.offset += t));
        }
        writeFloat32(e) {
          let t = Z.Float32;
          (this.ensureLength(t), this.view.setFloat32(this.offset, e), (this.offset += t));
        }
        writeFloat64(e) {
          let t = Z.Float64;
          (this.ensureLength(t), this.view.setFloat64(this.offset, e), (this.offset += t));
        }
        writeBytes(e) {
          let t = e.length;
          (this.ensureLength(t), this.bytes.set(e, this.offset), (this.offset += t));
        }
        encodeString(e) {
          let t = this.encodedStrings.get(e);
          if (t) return t;
          let n = this.encoder.encode(e);
          return (this.encodedStrings.set(e, n), n);
        }
        writeString(e) {
          let t = this.encodeString(e),
            n = t.length;
          (this.writeUint32(n), this.writeBytes(t));
        }
        writeJson(e) {
          let t = JSON.stringify(e);
          this.writeString(t);
        }
        constructor() {
          (X(this, `offset`, 0),
            X(this, `bytes`, new Uint8Array(Ki)),
            X(this, `view`, Rr(this.bytes)),
            X(this, `encoder`, new TextEncoder()),
            X(this, `encodedStrings`, new Map()));
        }
      }),
      (ea = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            J(Hr(n), `Invalid chunkId`),
            J(Hr(r), `Invalid offset`),
            J(Hr(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (J(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ((this.chunkId = e), (this.offset = t), (this.length = n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return Gr(e);
            case 2:
              return Jr(e);
            case 3:
              return Zr(e);
            case 4:
              return ei(e);
            case 5:
              return ri(e);
            case 6:
              return oi(e);
            case 7:
              return li(e);
            case 8:
              return fi(e);
            case 9:
              return hi(e);
            case 10:
              return vi(e);
            case 11:
              return xi(e);
            case 12:
              return wi(e);
            case 13:
              return Di(e);
            default:
              zr(t);
          }
        }),
          (e.write = function (e, t) {
            let n = Wr(t);
            if ((e.writeUint8(n), !Ur(t)))
              switch (t.type) {
                case I.Array:
                  return Kr(e, t);
                case I.Boolean:
                  return Yr(e, t);
                case I.Color:
                  return Qr(e, t);
                case I.Date:
                  return ti(e, t);
                case I.Enum:
                  return ii(e, t);
                case I.File:
                  return si(e, t);
                case I.Link:
                  return ui(e, t);
                case I.Number:
                  return pi(e, t);
                case I.Object:
                  return gi(e, t);
                case I.ResponsiveImage:
                  return yi(e, t);
                case I.RichText:
                  return Si(e, t);
                case I.VectorSetItem:
                  return Oi(e, t);
                case I.String:
                  return Ti(e, t);
                default:
                  zr(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = Wr(e),
              i = Wr(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (Ur(e) || Ur(t)) return 0;
            switch (e.type) {
              case I.Array:
                return (J(t.type === I.Array), qr(e, t, n));
              case I.Boolean:
                return (J(t.type === I.Boolean), Xr(e, t));
              case I.Color:
                return (J(t.type === I.Color), $r(e, t));
              case I.Date:
                return (J(t.type === I.Date), ni(e, t));
              case I.Enum:
                return (J(t.type === I.Enum), ai(e, t));
              case I.File:
                return (J(t.type === I.File), ci(e, t));
              case I.Link:
                return (J(t.type === I.Link), di(e, t));
              case I.Number:
                return (J(t.type === I.Number), mi(e, t));
              case I.Object:
                return (J(t.type === I.Object), _i(e, t, n));
              case I.ResponsiveImage:
                return (J(t.type === I.ResponsiveImage), bi(e, t));
              case I.RichText:
                return (J(t.type === I.RichText), Ci(e, t));
              case I.VectorSetItem:
                return (J(t.type === I.VectorSetItem), ki(e, t));
              case I.String:
                return (J(t.type === I.String), Ei(e, t, n));
              default:
                zr(e);
            }
          }));
      })((Y ||= {})),
      (ta = class e {
        sortEntries() {
          this.entries.sort((e, t) => {
            for (let n = 0; n < this.fieldNames.length; n++) {
              let r = e.values[n],
                i = t.values[n],
                a = Y.compare(r, i, this.options.collation);
              if (a !== 0) return a;
            }
            return e.pointer.compare(t.pointer);
          });
        }
        static deserialize(t) {
          let n = new Gi(t),
            r = n.readJson(),
            i = n.readUint8(),
            a = [];
          for (let e = 0; e < i; e++) {
            let e = n.readString();
            a.push(e);
          }
          let o = new e(a, { collation: r }),
            s = n.readUint32();
          for (let e = 0; e < s; e++) {
            let e = [];
            for (let t = 0; t < i; t++) {
              let t = Y.read(n);
              e.push(t);
            }
            let t = ea.read(n);
            o.entries.push({ values: e, pointer: t });
          }
          return o;
        }
        serialize() {
          let e = new $i();
          for (let t of (e.writeJson(this.options.collation),
          e.writeUint8(this.fieldNames.length),
          this.fieldNames))
            e.writeString(t);
          for (let t of (this.sortEntries(), e.writeUint32(this.entries.length), this.entries)) {
            let { values: n, pointer: r } = t;
            for (let t of n) Y.write(e, t);
            r.write(e);
          }
          return e.subarray();
        }
        addItem(e, t) {
          let n = this.fieldNames.map((t) => e.getField(t) ?? null);
          this.entries.push({ values: n, pointer: t });
        }
        constructor(e, t) {
          ((this.fieldNames = e), (this.options = t), X(this, `entries`, []));
        }
      }),
      (na = 3),
      (ra = 250),
      (ia = [408, 429, 500, 502, 503, 504]),
      (aa = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!ia.includes(r.status) || ++n > na) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > na) throw e;
          }
          await Ai(n);
        }
      }),
      (oa = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((J(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Mi(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((J(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Mi(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          X(this, `chunks`, []);
        }
      }),
      (sa = class {
        async loadModel() {
          let [e] = await ji(this.options.url, [this.options.range]);
          return (J(e, `Failed to load model`), ta.deserialize(e));
        }
        async getModel() {
          return (
            (this.modelPromise ??= this.loadModel()),
            (this.model ??= await this.modelPromise),
            this.model
          );
        }
        async lookupItems(e) {
          J(e.length === this.fields.length, `Invalid query length`);
          let t = await this.getModel(),
            n = e.reduce(
              (e, t, n) =>
                e.flatMap((e) => {
                  switch (t.type) {
                    case `All`:
                      return [e];
                    case `Equals`:
                      return this.queryEquals(e, t, n);
                    case `NotEquals`:
                      return this.queryNotEquals(e, t, n);
                    case `LessThan`:
                      return this.queryLessThan(e, t, n);
                    case `GreaterThan`:
                      return this.queryGreaterThan(e, t, n);
                    case `Contains`:
                      return this.queryContains(e, t, n);
                    case `StartsWith`:
                      return this.queryStartsWith(e, t, n);
                    case `EndsWith`:
                      return this.queryEndsWith(e, t, n);
                    default:
                      zr(t);
                  }
                }),
              [t.entries]
            ),
            r = [];
          for (let e of n)
            for (let t of e) {
              let e = {};
              for (let n = 0; n < this.options.fieldNames.length; n++) {
                let r = this.options.fieldNames[n];
                e[r] = t.values[n];
              }
              r.push({ pointer: t.pointer.toString(), data: e });
            }
          return r;
        }
        queryEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = e.slice(r, i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryNotEquals(e, t, n) {
          let r = this.getLeftMost(e, n, t.value),
            i = this.getRightMost(e, n, t.value),
            a = [],
            o = e.slice(0, r);
          o.length > 0 && a.push(o);
          let s = e.slice(i + 1);
          return (s.length > 0 && a.push(s), a);
        }
        queryLessThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getRightMost(e, n, t.value),
              i = e.slice(0, r + 1);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getLeftMost(e, n, t.value),
            a = e.slice(0, i);
          return a.length > 0 ? [a] : [];
        }
        queryGreaterThan(e, t, n) {
          let r = this.getRightMost(e, n, null);
          if (((e = e.slice(r + 1)), t.inclusive)) {
            let r = this.getLeftMost(e, n, t.value),
              i = e.slice(r);
            return i.length > 0 ? [i] : [];
          }
          let i = this.getRightMost(e, n, t.value),
            a = e.slice(i + 1);
          return a.length > 0 ? [a] : [];
        }
        queryContains(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.includes(r)
            );
          });
        }
        queryStartsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.startsWith(r)
            );
          });
        }
        queryEndsWith(e, t, n) {
          return this.findItems(e, n, (e) => {
            if (e?.type !== I.String || t.value?.type !== I.String) return !1;
            let n = e.value,
              r = t.value.value;
            return (
              this.collation.type === 0 && ((n = n.toLowerCase()), (r = r.toLowerCase())),
              n.endsWith(r)
            );
          });
        }
        getLeftMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            0 > Y.compare(o, n, this.collation) ? (r = a + 1) : (i = a);
          }
          return r;
        }
        getRightMost(e, t, n) {
          let r = 0,
            i = e.length;
          for (; r < i;) {
            let a = (r + i) >> 1,
              o = e[a].values[t];
            Y.compare(o, n, this.collation) > 0 ? (i = a) : (r = a + 1);
          }
          return i - 1;
        }
        findItems(e, t, n) {
          let r = [],
            i = 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a].values[t];
            if (!n(o)) {
              if (i < a) {
                let t = e.slice(i, a);
                r.push(t);
              }
              i = a + 1;
            }
          }
          if (i < e.length) {
            let t = e.slice(i);
            r.push(t);
          }
          return r;
        }
        constructor(e) {
          ((this.options = e),
            X(this, `schema`),
            X(this, `fields`),
            X(this, `supportedLookupTypes`, [
              `All`,
              `Equals`,
              `NotEquals`,
              `LessThan`,
              `GreaterThan`,
              `Contains`,
              `StartsWith`,
              `EndsWith`,
            ]),
            X(this, `modelPromise`),
            X(this, `model`),
            X(this, `collation`));
          let t = {},
            n = [];
          for (let e of this.options.fieldNames) {
            let r = this.options.collectionSchema[e];
            (J(r, `Missing definition for field`, e),
              (t[e] = r),
              n.push({ type: `Identifier`, name: e }));
          }
          ((this.schema = t), (this.fields = n), (this.collation = this.options.collation));
        }
      }),
      (ca = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = Y.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), Y.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          X(this, `fields`, new Map());
        }
      }),
      (la = class {
        scanItems() {
          return (
            (this.itemsPromise ??= aa(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new Gi(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = ca.read(n),
                  i = n.getOffset() - e,
                  a = new ea(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ((this.id = e),
            (this.url = t),
            X(this, `itemsPromise`),
            X(
              this,
              `itemLoader`,
              new Wi.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = ea.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await ji(this.url, t)).map((t, n) => {
                    let r = new Gi(t),
                      i = ca.read(r),
                      a = e[n];
                    return (J(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (ua = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = ea.fromString(e),
                n = this.chunks[t.chunkId];
              return (J(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = ea.fromString(e.pointer),
            r = ea.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return Y.compare(e, t, n);
        }
        constructor(e) {
          ((this.options = e),
            X(this, `id`),
            X(this, `schema`),
            X(this, `indexes`),
            X(this, `resolveRichText`),
            X(this, `resolveVectorSetItem`),
            X(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new la(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function fa(e) {
  return typeof e == `object` && !!e && !u(e) && ga in e;
}
function pa(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ma(e) {
  let t = new Map();
  return (n) => {
    let i = t.get(n);
    if (i) return i;
    let a = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return l(r, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return l(Me, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (fa(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            pa(s, `Module not found`),
            fa(s) && s.preload(),
            m(Oe, {
              componentIdentifier: r,
              children: (e) => m(Ae, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return l(e === `a` ? v.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, a), a);
  };
}
var ha,
  ga,
  _a,
  va = e(() => {
    (ne(),
      c(),
      N(),
      t(),
      s !== void 0 && s.requestIdleCallback,
      (ga = `preload`),
      (_a =
        (((ha = _a || {})[(ha.Fragment = 1)] = `Fragment`),
        (ha[(ha.Link = 2)] = `Link`),
        (ha[(ha.Module = 3)] = `Module`),
        (ha[(ha.Tag = 4)] = `Tag`),
        (ha[(ha.Text = 5)] = `Text`),
        ha)));
  }),
  ya,
  ba,
  xa,
  Sa,
  Ca,
  wa,
  Ta,
  Ea,
  Da,
  Oa,
  ka,
  Aa,
  ja,
  Ma,
  Na,
  Pa = e(() => {
    (N(),
      da(),
      va(),
      (ya = {
        afw8SDSDw: { isNullable: !0, type: I.String },
        createdAt: { isNullable: !0, type: I.Date },
        Hj8ZI4BM4: { isNullable: !0, type: I.String },
        id: { isNullable: !1, type: I.String },
        nextItemId: { isNullable: !0, type: I.String },
        previousItemId: { isNullable: !0, type: I.String },
        updatedAt: { isNullable: !0, type: I.Date },
        wlcNJFK7W: { isNullable: !0, type: I.String },
      }),
      (ba = [`id`]),
      (xa = { type: 1 }),
      (Sa = [`previousItemId`]),
      (Ca = [`nextItemId`]),
      (wa = [`id`, `afw8SDSDw`]),
      (Ta = [`afw8SDSDw`, `id`]),
      (Ea = [`Hj8ZI4BM4`]),
      (Da = { type: 0 }),
      (Oa = [`wlcNJFK7W`]),
      (ka = [`afw8SDSDw`]),
      (Aa = []),
      (ja = (e) => {
        let t = Aa[e];
        if (t) return t().then((e) => e.default);
      }),
      (Ma = ma({})),
      new me(),
      (Na = {
        collectionByLocaleId: {
          default: new ua({
            chunks: [
              new URL(
                `./fHBgVg8VC-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `cb9376c0-66f9-4b7a-b466-2f06ae854fffdefault`,
            indexes: [
              new sa({
                collation: xa,
                collectionSchema: ya,
                fieldNames: ba,
                range: { from: 0, to: 649 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: xa,
                collectionSchema: ya,
                fieldNames: Sa,
                range: { from: 649, to: 1297 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: xa,
                collectionSchema: ya,
                fieldNames: Ca,
                range: { from: 1297, to: 1941 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: xa,
                collectionSchema: ya,
                fieldNames: wa,
                range: { from: 1941, to: 3142 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: xa,
                collectionSchema: ya,
                fieldNames: Ta,
                range: { from: 3142, to: 4343 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: Da,
                collectionSchema: ya,
                fieldNames: Ea,
                range: { from: 4343, to: 5221 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: Da,
                collectionSchema: ya,
                fieldNames: Oa,
                range: { from: 5221, to: 5773 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
              new sa({
                collation: Da,
                collectionSchema: ya,
                fieldNames: ka,
                range: { from: 5773, to: 6604 },
                url: new URL(
                  `./fHBgVg8VC-indexes-default-0.framercms`,
                  `https://framerusercontent.com/modules/Hu0itBarpY1HZ64sBARu/z3mVeqxJsxkGYhwDJeIm/fHBgVg8VC.js`
                ).href.replace(`/modules/`, `/cms/`),
              }),
            ],
            resolveRichText: Ma,
            resolveVectorSetItem: ja,
            schema: ya,
          }),
        },
        displayName: `Sizes`,
        id: `cb9376c0-66f9-4b7a-b466-2f06ae854fff`,
      }),
      A(Na, {
        Hj8ZI4BM4: { defaultValue: ``, title: `Name`, type: I.String },
        wlcNJFK7W: { defaultValue: ``, title: `Title`, type: I.String },
        afw8SDSDw: { preventLocalization: !0, title: `Slug`, type: I.String },
        createdAt: { title: `Created`, type: I.Date },
        updatedAt: { title: `Updated`, type: I.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/fHBgVg8VC:default`,
          title: `Previous`,
          type: I.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/fHBgVg8VC:default`,
          title: `Next`,
          type: I.CollectionReference,
        },
      }));
  }),
  Fa,
  Ia,
  La,
  Ra,
  za = e(() => {
    (N(),
      z.loadFonts([`Inter-Variable`, `Inter-Bold`, `Inter-BoldItalic`, `Inter-Italic`]),
      (Fa = [
        { defaultValue: 14, maxValue: 32, minValue: 14, name: `Optical size`, tag: `opsz` },
        { defaultValue: 400, maxValue: 900, minValue: 100, name: `Weight`, tag: `wght` },
      ]),
      (Ia = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/mYcqTSergLb16PdbJJQMl9ebYm4.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/ZRl8AlxwsX1m7xS1eJCiSPbztg.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/nhSQpBRqFmXNUBY2p5SENQ8NplQ.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/DYHjxG0qXjopUuruoacfl5SA.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/s7NH6sl7w4NU984r5hcmo1tPSYo.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/7lw0VWkeXrGYJT05oB3DsFy8BaY.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter Variable`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/wx5nfqEgOXnxuFaxB0Mn9OhmcZA.woff2`,
              variationAxes: Fa,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/1K3W8DizY3v4emK8Mb08YHxTbs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/VgYFWiwsAC5OYxAycRXXvhze58.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/syRNPWzAMIrcJ3wIlPIP43KjQs.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `normal`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/GIryZETIX4IFypco5pYZONKhJIo.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/H89BbHkbHDzlxZzxi8uPzTsp90.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/ia3uin3hQWqDrVloC1zEtYHWw.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/2A4Xx7CngadFGlVV4xrO06OBHY.woff2`,
              weight: `700`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/CfMzU8w2e7tHgF4T4rATMPuWosA.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/867QObYax8ANsfX4TGEVU9YiCM.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Oyn2ZbENFdnW7mt2Lzjk1h9Zb9k.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/cdAe8hgZ1cMyLu9g005pAW3xMo.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/DOfvtmE1UplCq161m6Hj8CSQYg.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/pKRFNWFoZl77qYCAIp84lN1h944.woff2`,
              weight: `400`,
            },
            {
              cssFamilyName: `Inter`,
              source: `framer`,
              style: `italic`,
              uiFamilyName: `Inter`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/tKtBcDnBMevsEEJKdNGhhkLzYo.woff2`,
              weight: `400`,
            },
          ],
        },
      ]),
      (La = [
        `.framer-8zSiL .framer-styles-preset-1sfpnlb:not(.rich-text-wrapper), .framer-8zSiL .framer-styles-preset-1sfpnlb.rich-text-wrapper p { --framer-font-family: "Inter Variable", "Inter Variable Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 14px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: "opsz" 14, "wght" 475; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.02em; --framer-line-height: 1.5em; --framer-paragraph-spacing: 20px; --framer-text-alignment: left; --framer-text-color: var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, #616161); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (Ra = `framer-8zSiL`));
  }),
  Ba,
  Va,
  Ha,
  Ua,
  Wa = e(() => {
    (c(),
      N(),
      t(),
      (Ba = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 13.05 49.5 L 73.95 49.5 C 82.65 49.5 87 44.55 87 34.65 L 87 14.85 C 87 4.95 82.65 0 73.95 0 L 13.05 0 C 4.35 0 0 4.95 0 14.85 L 0 34.65 C 0 44.55 4.35 49.5 13.05 49.5 Z M 64.4 0.5 L 64.4 23.75 M 23.433 0.5 L 23.2 23.75 M 43.8 0.5 L 43.8 14.45" fill="transparent" height="49.5px" id="UqB0RKtC1" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="miter" stroke-miterlimit="10" stroke-width="12" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(6.5 40.5)" width="87px"/><path d="M 0.176 8.154 L 79.297 8.154 M 80 0 L 80 16.264 M 0 0 L 0 16.264" fill="transparent" height="16.26400000000001px" id="Hcom8Y5u8" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(9.8 9)" width="80px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Va = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? m(v.div, { ...a, layoutId: r, ref: t }) : m(`div`, { ...a, ref: t });
      })),
      (Ha = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (Ua = D(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = Ha(e);
          return m(Va, {
            ...s,
            className: E(`framer-xKAj0`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-xKAj0 { -webkit-mask: ${Ba}; aspect-ratio: 1; background-color: var(--118a55); mask: ${Ba}; width: 100px; }`,
        ],
        `framer-xKAj0`
      )),
      (Ua.displayName = `Ruler`),
      A(Ua, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Ga,
  Ka,
  qa,
  Ja,
  Ya = e(() => {
    (c(),
      N(),
      t(),
      (Ga = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 79.901 23.438 L 41.092 44.997 M 41.092 44.997 L 2.283 23.438 M 41.092 44.997 L 41.092 88.372 M 50.223 85.582 L 44.639 88.687 C 43.343 89.404 42.699 89.765 42.014 89.906 C 41.407 90.031 40.781 90.031 40.174 89.906 C 39.489 89.765 38.841 89.404 37.544 88.683 L 3.758 69.917 C 2.388 69.155 1.703 68.776 1.21 68.233 C 0.768 67.755 0.433 67.188 0.228 66.571 C 0 65.877 0 65.091 0 63.534 L 0 26.47 C 0 24.903 0 24.123 0.228 23.424 C 0.433 22.807 0.768 22.24 1.21 21.762 C 1.708 21.219 2.388 20.84 3.758 20.082 L 37.544 1.312 C 38.841 0.591 39.485 0.23 40.174 0.093 C 40.78 -0.031 41.404 -0.031 42.01 0.093 C 42.694 0.23 43.343 0.595 44.639 1.312 L 78.426 20.077 C 79.796 20.84 80.481 21.219 80.974 21.762 C 81.416 22.24 81.75 22.807 81.955 23.424 C 82.184 24.123 82.184 24.903 82.184 26.47 L 82.184 47.28 M 20.546 10.754 L 61.638 33.583 M 59.355 72.392 L 68.486 81.523 L 86.749 63.26" fill="transparent" height="90px" id="sIx_su2cm" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="9.14" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(7.12 5)" width="86.74935709989677px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (Ka = f((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? m(v.div, { ...a, layoutId: r, ref: t }) : m(`div`, { ...a, ref: t });
      })),
      (qa = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (Ja = D(
        f(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = qa(e);
          return m(Ka, {
            ...s,
            className: E(`framer-lfFYr`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-lfFYr { -webkit-mask: ${Ga}; aspect-ratio: 1; background-color: var(--118a55); mask: ${Ga}; width: 100px; }`,
        ],
        `framer-lfFYr`
      )),
      (Ja.displayName = `Package Tick`),
      A(Ja, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: I.Color,
        },
      }));
  }),
  Xa,
  Za,
  Qa,
  $a,
  eo,
  to,
  no,
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo,
  ho,
  go,
  _o,
  vo,
  yo,
  Q,
  $,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo,
  Do,
  Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro,
  zo,
  Bo,
  Vo;
e(() => {
  (c(),
    N(),
    b(),
    t(),
    p(),
    Ne(),
    Ie(),
    dt(),
    Ue(),
    Pt(),
    qt(),
    Cn(),
    Hn(),
    er(),
    Lr(),
    Pa(),
    Ge(),
    za(),
    ze(),
    at(),
    pt(),
    qe(),
    tt(),
    Ze(),
    Wa(),
    Ya(),
    _t(),
    Fe(),
    St(),
    (Xa = T(Ir)),
    (Za = T(Sn)),
    (Qa = T(Kt)),
    ($a = T(Ua)),
    (eo = T(vt)),
    (to = T(W)),
    (no = T(Nt)),
    (ro = T(Re)),
    (io = T(ft)),
    (ao = T(Ja)),
    (oo = T(Vn)),
    (so = S(v.div)),
    (co = S(v.section)),
    (lo = T(We)),
    (uo = T(Pe)),
    (fo = S(v.main)),
    (po = {
      fMsUd1hB5: `(min-width: 1200px)`,
      HpMPVxev7: `(max-width: 809.98px)`,
      JHincc2Ex: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (mo = () => typeof document < `u`),
    (ho = [`image`]),
    (go = `framer-9nuRC`),
    (_o = {
      fMsUd1hB5: `framer-v-kbxkhz`,
      HpMPVxev7: `framer-v-14hol1r`,
      JHincc2Ex: `framer-v-w09wkn`,
    }),
    (vo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (yo = (e, t, n) => (e && t ? `position` : n)),
    (Q = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (bo = (e, t = {}, n) => {
      let r = `en-US`,
        i = t.locale || n || r,
        {
          useGrouping: a,
          notation: o,
          compactDisplay: s,
          style: ee,
          currency: c,
          currencyDisplay: l,
          unit: u,
          unitDisplay: te,
          minimumFractionDigits: d,
          maximumFractionDigits: f,
          minimumIntegerDigits: p,
        } = t,
        m = {
          useGrouping: a,
          notation: o,
          compactDisplay: s,
          style: ee,
          currency: c,
          currencyDisplay: l,
          unit: u,
          unitDisplay: te,
          minimumFractionDigits: d,
          maximumFractionDigits: f,
          minimumIntegerDigits: p,
        },
        h = Number(e);
      try {
        return h.toLocaleString(i, m);
      } catch {
        try {
          return h.toLocaleString(r, m);
        } catch {
          return h.toLocaleString();
        }
      }
    }),
    (xo = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (So = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (Co = (e, t) => (e ? `AzjYtLXYE` : `TtR3z9dZH`)),
    (wo = (e) => ({
      from: { alias: `JXtGPBBAa`, data: Ke, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      orderBy: [
        {
          arguments: [
            { type: `LiteralValue`, value: e },
            { collection: `JXtGPBBAa`, name: `id`, type: `Identifier` },
          ],
          direction: `asc`,
          functionName: `INDEX_OF`,
          type: `FunctionCall`,
        },
      ],
      select: [
        { collection: `JXtGPBBAa`, name: `wjbVR4laR`, type: `Identifier` },
        { collection: `JXtGPBBAa`, name: `yYNW6Sz6Q`, type: `Identifier` },
        { collection: `JXtGPBBAa`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `JXtGPBBAa`, name: `id`, type: `Identifier` },
        operator: `in`,
        right: { type: `LiteralValue`, value: e },
        type: `BinaryOperation`,
      },
    })),
    (To = ({ query: e, pageSize: t, children: n }) => n(de(e))),
    ye(),
    (Eo = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.1, ease: [0.5, 0, 0.88, 0.77], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Do = (e, t) => `translate(-50%, -50%) ${t}`),
    (Oo = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { bounce: 0, delay: 0, duration: 0.4, type: `spring` },
      x: 0,
      y: 0,
    }),
    (ko = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ao = {
      backgroundColor: `var(--token-8bac5f11-507c-413f-b3a4-632beefe55cb, rgb(227, 227, 227))`,
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: vo,
    }),
    (jo = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Mo = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = Te({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (No = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase().includes(t.toLowerCase())
        : Array.isArray(e) && typeof t == `string`
          ? e.includes(t)
          : !1),
    (Po = (e, t) => (e ? `aJuD3POVy` : `ghpgB3ukQ`)),
    (Fo = (e) => ({
      from: { alias: `DgXlBggfS`, data: Na, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      orderBy: [
        {
          arguments: [
            { type: `LiteralValue`, value: e },
            { collection: `DgXlBggfS`, name: `id`, type: `Identifier` },
          ],
          direction: `asc`,
          functionName: `INDEX_OF`,
          type: `FunctionCall`,
        },
      ],
      select: [
        { collection: `DgXlBggfS`, name: `Hj8ZI4BM4`, type: `Identifier` },
        { collection: `DgXlBggfS`, name: `wlcNJFK7W`, type: `Identifier` },
        { collection: `DgXlBggfS`, name: `afw8SDSDw`, type: `Identifier` },
        { collection: `DgXlBggfS`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `DgXlBggfS`, name: `id`, type: `Identifier` },
        operator: `in`,
        right: { type: `LiteralValue`, value: e },
        type: `BinaryOperation`,
      },
    })),
    (Io = { Desktop: `fMsUd1hB5`, Phone: `HpMPVxev7`, Tablet: `JHincc2Ex` }),
    (Lo = ({ value: e }) =>
      w()
        ? null
        : m(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ro = (e) => ({
      from: { alias: `fIwdA4CC3`, data: Ke, type: `Collection` },
      select: [
        { collection: `fIwdA4CC3`, name: `wjbVR4laR`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `X3CtE80s9`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `L0XvF6Czl`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `ULM6scxx_`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `uEVRVrN3G`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `WpJ3gRydg`, type: `Identifier` },
        {
          alias: `fc8SWJvvh`,
          arguments: [
            {
              from: { alias: `fc8SWJvvh`, data: Na, type: `Collection` },
              orderBy: [
                {
                  arguments: [
                    { collection: `fIwdA4CC3`, name: `fc8SWJvvh`, type: `Identifier` },
                    { collection: `fc8SWJvvh`, name: `id`, type: `Identifier` },
                  ],
                  functionName: `INDEX_OF`,
                  type: `FunctionCall`,
                },
              ],
              select: [{ collection: `fc8SWJvvh`, name: `id`, type: `Identifier` }],
              type: `Select`,
              where: {
                left: { collection: `fc8SWJvvh`, name: `id`, type: `Identifier` },
                operator: `in`,
                right: { collection: `fIwdA4CC3`, name: `fc8SWJvvh`, type: `Identifier` },
                type: `BinaryOperation`,
              },
            },
          ],
          functionName: `FLAT_ARRAY`,
          type: `FunctionCall`,
        },
        {
          alias: `rPQCyIqtZ`,
          arguments: [
            {
              from: { alias: `rPQCyIqtZ`, data: Ke, type: `Collection` },
              orderBy: [
                {
                  arguments: [
                    { collection: `fIwdA4CC3`, name: `rPQCyIqtZ`, type: `Identifier` },
                    { collection: `rPQCyIqtZ`, name: `id`, type: `Identifier` },
                  ],
                  functionName: `INDEX_OF`,
                  type: `FunctionCall`,
                },
              ],
              select: [{ collection: `rPQCyIqtZ`, name: `id`, type: `Identifier` }],
              type: `Select`,
              where: {
                left: { collection: `rPQCyIqtZ`, name: `id`, type: `Identifier` },
                operator: `in`,
                right: { collection: `fIwdA4CC3`, name: `rPQCyIqtZ`, type: `Identifier` },
                type: `BinaryOperation`,
              },
            },
          ],
          functionName: `FLAT_ARRAY`,
          type: `FunctionCall`,
        },
        { collection: `fIwdA4CC3`, name: `ENbbVp8vc`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `yYNW6Sz6Q`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `BVHw1asXj`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `txBAYRkX5`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `MmZDiJKCx`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `bRLi7BvJJ`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `YFdaPgYa5`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `kEAdWZ6bN`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `MyF9IreYr`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `ho7bJj83Y`, type: `Identifier` },
        { collection: `fIwdA4CC3`, name: `eDZ42NszQ`, type: `Identifier` },
      ],
      where: e,
    })),
    (zo = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Io[r.variant] ?? r.variant ?? `fMsUd1hB5`,
    })),
    (Bo = D(
      f(function (e, t) {
        let s = o(null),
          c = t ?? s,
          l = n(),
          { activeLocale: u, setLocale: te } = ce(),
          f = ve(),
          p = je(),
          [g] = de(Ro(ge(p, `fIwdA4CC3`))),
          _ = (e) => {
            if (!g) throw new be(`No data matches path variables: ${JSON.stringify(p)}`);
            return g[e];
          },
          {
            style: ne,
            className: re,
            layoutId: b,
            variant: x,
            wjbVR4laR: S = _(`wjbVR4laR`) ?? ``,
            X3CtE80s9: w = _(`X3CtE80s9`) ?? ``,
            L0XvF6Czl: le = _(`L0XvF6Czl`) ?? 0,
            ULM6scxx_: ue = _(`ULM6scxx_`) ?? ``,
            uEVRVrN3G: T = _(`uEVRVrN3G`) ?? ``,
            WpJ3gRydg: D = _(`WpJ3gRydg`) ?? ``,
            fc8SWJvvh: O = _(`fc8SWJvvh`),
            rPQCyIqtZ: k = _(`rPQCyIqtZ`),
            ENbbVp8vc: A = _(`ENbbVp8vc`) ?? 0,
            yYNW6Sz6Q: me = _(`yYNW6Sz6Q`),
            BVHw1asXj: _e = _(`BVHw1asXj`),
            txBAYRkX5: ye = _(`txBAYRkX5`),
            MmZDiJKCx: N = _(`MmZDiJKCx`),
            bRLi7BvJJ: Ce = _(`bRLi7BvJJ`),
            YFdaPgYa5: Te = _(`YFdaPgYa5`),
            kEAdWZ6bN: I = _(`kEAdWZ6bN`),
            MyF9IreYr: L = _(`MyF9IreYr`),
            ho7bJj83Y: Oe = _(`ho7bJj83Y`),
            eDZ42NszQ: ke = _(`eDZ42NszQ`),
            ...Ae
          } = zo(e);
        se(a(() => xt({ ULM6scxx_: ue, X3CtE80s9: w }, u), [w, ue, u]));
        let [z, Ne] = pe(x, po, !1),
          { activeVariantCallback: Fe, delay: Ie } = we(void 0),
          ze = ({ overlay: e }) =>
            Fe(async (...t) => {
              e.toggle();
            }),
          Be = ({ overlay: e }) =>
            Fe(async (...t) => {
              e.hide();
            }),
          Ve = E(go, Xe, et, He, it, Ra, gt, ct),
          Ue = i(De)?.isLayoutTemplate,
          Ge = !!i(y)?.transition?.layout,
          Ke = yo(Ue, Ge),
          qe = () => !mo() || ![`JHincc2Ex`, `HpMPVxev7`].includes(z),
          Je = he(),
          Ye = bo(
            le,
            {
              currency: `USD`,
              currencyDisplay: `symbol`,
              locale: ``,
              notation: `standard`,
              style: `currency`,
            },
            Je
          ),
          Ze = () => !!(!mo() || [`JHincc2Ex`, `HpMPVxev7`].includes(z)),
          Qe = xo(k);
        return (
          j(),
          xe({}),
          m(De.Provider, {
            value: {
              activeVariantId: z,
              humanReadableVariantMap: Io,
              primaryVariantId: `fMsUd1hB5`,
              variantClassNames: _o,
            },
            children: h(ae, {
              id: b ?? l,
              children: [
                m(Lo, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                m(v.div, {
                  ...Ae,
                  className: E(Ve, `framer-kbxkhz`, re),
                  ref: c,
                  style: { ...ne },
                  children: h(fo, {
                    className: `framer-4c5ymu`,
                    "data-framer-name": `Main`,
                    flowEffectEnabled: !0,
                    flowEffectTransition: vo,
                    isNestedFlowEffect: !1,
                    layout: Ke,
                    children: [
                      h(co, {
                        className: `framer-1mvanom`,
                        "data-framer-name": `Product`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: vo,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          qe() &&
                            m(P, {
                              height: 500,
                              width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 1.5, 1px)`,
                              y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120,
                              children: m(M, {
                                className: `framer-9mexth-container hidden-w09wkn hidden-14hol1r`,
                                layout: `position`,
                                nodeId: `H4DPgA8pL`,
                                rendersWithMotion: !0,
                                scopeId: `fIwdA4CC3`,
                                children: m(Ir, {
                                  FHJhqwh6P: Q(me),
                                  fQ_FxoPLF: Q(Te),
                                  height: `100%`,
                                  hr8MgRXlx: Q(ke),
                                  id: `H4DPgA8pL`,
                                  layoutId: `H4DPgA8pL`,
                                  mHn_lbk5y: Q(Ce),
                                  Nj53hr3fB: Q(L),
                                  qG3F78iay: Q(_e),
                                  qo_LjSK80: Q(I),
                                  Rt0ORFrPQ: Q(Oe),
                                  style: { width: `100%` },
                                  variant: $(`uk4JWx8cK`),
                                  vOrscV2eC: Q(N),
                                  width: `100%`,
                                  WiHntCqUE: A,
                                  xLdXoPZRN: Q(ye),
                                }),
                              }),
                            }),
                          h(so, {
                            className: `framer-11ellni`,
                            "data-framer-name": `Product Details`,
                            flowEffectEnabled: !0,
                            flowEffectTransition: vo,
                            isNestedFlowEffect: !0,
                            layout: `position`,
                            children: [
                              h(v.div, {
                                className: `framer-kodflv`,
                                "data-framer-name": `Details`,
                                layout: `position`,
                                children: [
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: m(r, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1nkfhjw`,
                                        "data-styles-preset": `hWdlH0iq7`,
                                        dir: `auto`,
                                        children: `Nike Jordi`,
                                      }),
                                    }),
                                    className: `framer-ll7gth`,
                                    fonts: [`Inter`],
                                    text: w,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: m(r, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1sjmy9b`,
                                        "data-styles-preset": `PXfjos31S`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))`,
                                        },
                                        children: `Men's Slides`,
                                      }),
                                    }),
                                    className: `framer-1hcb3w7`,
                                    fonts: [`Inter`],
                                    text: ue,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: m(r, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-5rfdkx`,
                                        "data-styles-preset": `CT_DBbR5R`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `₹2,500`,
                                      }),
                                    }),
                                    className: `framer-xqhgl3`,
                                    fonts: [`Inter`],
                                    text: Ye,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              Ze() &&
                                m(R, {
                                  breakpoint: z,
                                  overrides: {
                                    HpMPVxev7: {
                                      height: 541,
                                      width: `min(${f?.width || `100vw`} - 40px, 500px)`,
                                      y: (f?.y || 0) + 140 + 0 + 0 + 0 + 100 + 0 + 0 + 344,
                                    },
                                    JHincc2Ex: {
                                      height: 541,
                                      width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px)`,
                                      y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 344,
                                    },
                                  },
                                  children: m(P, {
                                    children: m(M, {
                                      className: `framer-1orem77-container hidden-kbxkhz`,
                                      layout: `position`,
                                      nodeId: `wP4afQky1`,
                                      rendersWithMotion: !0,
                                      scopeId: `fIwdA4CC3`,
                                      children: m(Sn, {
                                        FHJhqwh6P: Q(me),
                                        HA7VIWGgB: Q(L),
                                        height: `100%`,
                                        id: `wP4afQky1`,
                                        layoutId: `wP4afQky1`,
                                        Mg31pcY3f: Q(ke),
                                        mHn_lbk5y: Q(Ce),
                                        qG3F78iay: Q(_e),
                                        rigk0jMiu: Q(Te),
                                        style: { width: `100%` },
                                        tddPAE1ai: Q(I),
                                        variant: $(`vD7ResBLh`),
                                        vOrscV2eC: Q(N),
                                        VZjOGPd_o: Q(Oe),
                                        width: `100%`,
                                        WiHntCqUE: A,
                                        xLdXoPZRN: Q(ye),
                                      }),
                                    }),
                                  }),
                                }),
                              Qe !== !1 &&
                                h(v.div, {
                                  className: `framer-b6df0n`,
                                  "data-framer-name": `Colors`,
                                  layout: `position`,
                                  children: [
                                    m(F, {
                                      __fromCanvasComponent: !0,
                                      children: m(r, {
                                        children: m(`p`, {
                                          className: `framer-styles-preset-1sjmy9b`,
                                          "data-styles-preset": `PXfjos31S`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))`,
                                          },
                                          children: `Colors`,
                                        }),
                                      }),
                                      className: `framer-13ftxg4`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    m(`div`, {
                                      className: `framer-1pivnpq`,
                                      "data-hide-scrollbars": !0,
                                      children: m(Ee, {
                                        children: m(To, {
                                          query: wo(k),
                                          children: (e, t, n) =>
                                            m(d, {
                                              children: e?.map(
                                                ({ id: e, wjbVR4laR: t, yYNW6Sz6Q: n }, r) => (
                                                  (t ??= ``),
                                                  m(
                                                    ae,
                                                    {
                                                      id: `JXtGPBBAa-${e}`,
                                                      children: m(C.Provider, {
                                                        value: { wjbVR4laR: t },
                                                        children: m(Me, {
                                                          href: {
                                                            pathVariables: { wjbVR4laR: t },
                                                            webPageId: `fIwdA4CC3`,
                                                          },
                                                          motionChild: !0,
                                                          nodeId: `FxZbBNvcO`,
                                                          scopeId: `fIwdA4CC3`,
                                                          children: m(v.a, {
                                                            className: `framer-6cugqb framer-168patu`,
                                                            draggable: `false`,
                                                            children: m(R, {
                                                              breakpoint: z,
                                                              overrides: {
                                                                HpMPVxev7: {
                                                                  y:
                                                                    (f?.y || 0) +
                                                                    140 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    100 +
                                                                    0 +
                                                                    0 +
                                                                    909 +
                                                                    0 +
                                                                    115 +
                                                                    12 +
                                                                    0,
                                                                },
                                                                JHincc2Ex: {
                                                                  y:
                                                                    (f?.y || 0) +
                                                                    140 +
                                                                    0 +
                                                                    0 +
                                                                    0 +
                                                                    120 +
                                                                    0 +
                                                                    909 +
                                                                    0 +
                                                                    115 +
                                                                    12 +
                                                                    0,
                                                                },
                                                              },
                                                              children: m(P, {
                                                                height: 75,
                                                                width: `75px`,
                                                                y:
                                                                  (f?.y || 0) +
                                                                  140 +
                                                                  0 +
                                                                  0 +
                                                                  0 +
                                                                  120 +
                                                                  0 +
                                                                  344 +
                                                                  0 +
                                                                  115 +
                                                                  12 +
                                                                  0,
                                                                children: m(M, {
                                                                  className: `framer-1sb03q8-container`,
                                                                  nodeId: `f7RZgmgyZ`,
                                                                  scopeId: `fIwdA4CC3`,
                                                                  children: m(Kt, {
                                                                    height: `100%`,
                                                                    id: `f7RZgmgyZ`,
                                                                    layoutId: `f7RZgmgyZ`,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    variant: $(Co(So(S, t), u)),
                                                                    width: `100%`,
                                                                    wzQzBe7gb: Q(n),
                                                                  }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    },
                                                    e
                                                  )
                                                )
                                              ),
                                            }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              h(v.div, {
                                className: `framer-1dfqhmb`,
                                "data-framer-name": `Sizes`,
                                layout: `position`,
                                children: [
                                  h(`div`, {
                                    className: `framer-65s1w3`,
                                    "data-framer-name": `Header`,
                                    children: [
                                      m(F, {
                                        __fromCanvasComponent: !0,
                                        children: m(r, {
                                          children: m(`p`, {
                                            className: `framer-styles-preset-1sjmy9b`,
                                            "data-styles-preset": `PXfjos31S`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))`,
                                            },
                                            children: `Sizes`,
                                          }),
                                        }),
                                        className: `framer-vzxp60`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      m(Mo, {
                                        dismissWithEsc: !0,
                                        children: (e) =>
                                          m(d, {
                                            children: h(v.div, {
                                              className: `framer-1k1eg3m`,
                                              "data-framer-name": `Size Chart`,
                                              id: `1k1eg3m`,
                                              onTap: ze({ overlay: e }),
                                              children: [
                                                m(Ua, {
                                                  animated: !1,
                                                  className: `framer-xyu096`,
                                                  GaDHsaDms: !0,
                                                  layoutId: `oNnNzzxTp`,
                                                }),
                                                m(F, {
                                                  __fromCanvasComponent: !0,
                                                  children: m(r, {
                                                    children: m(`p`, {
                                                      className: `framer-styles-preset-1sjmy9b`,
                                                      "data-styles-preset": `PXfjos31S`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-alignment": `left`,
                                                        "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                                      },
                                                      children: `Size chart`,
                                                    }),
                                                  }),
                                                  className: `framer-3she2l`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                m(ie, {
                                                  children:
                                                    e.visible &&
                                                    m(d, {
                                                      children: ee(
                                                        m(Se, {
                                                          triggerId: `1k1eg3m`,
                                                          children: h(oe, {
                                                            children: [
                                                              m(
                                                                v.div,
                                                                {
                                                                  animate: {
                                                                    opacity: 1,
                                                                    transition: {
                                                                      delay: 0,
                                                                      duration: 0.2,
                                                                      ease: [0.5, 0, 0.88, 0.77],
                                                                      type: `tween`,
                                                                    },
                                                                  },
                                                                  className: E(Ve, `framer-uva732`),
                                                                  "data-framer-portal-id": `1k1eg3m`,
                                                                  exit: {
                                                                    opacity: 0,
                                                                    transition: {
                                                                      delay: 0,
                                                                      duration: 0.2,
                                                                      ease: [0.12, 0.23, 0.5, 1],
                                                                      type: `tween`,
                                                                    },
                                                                  },
                                                                  initial: { opacity: 0 },
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `ULRJ5LDVq`
                                                              ),
                                                              m(R, {
                                                                breakpoint: z,
                                                                overrides: {
                                                                  HpMPVxev7: {
                                                                    transformTemplate: void 0,
                                                                  },
                                                                },
                                                                children: h(v.div, {
                                                                  animate: Oo,
                                                                  className: E(
                                                                    Ve,
                                                                    `framer-1qanuut`
                                                                  ),
                                                                  "data-framer-name": `Size Chart`,
                                                                  "data-framer-portal-id": `1k1eg3m`,
                                                                  "data-hide-scrollbars": !0,
                                                                  exit: Eo,
                                                                  initial: ko,
                                                                  transformTemplate: Do,
                                                                  children: [
                                                                    h(`div`, {
                                                                      className: `framer-53ej7q`,
                                                                      "data-framer-name": `Header`,
                                                                      children: [
                                                                        h(`div`, {
                                                                          className: `framer-hjh7d1`,
                                                                          "data-framer-name": `Title`,
                                                                          children: [
                                                                            m(Ua, {
                                                                              animated: !1,
                                                                              className: `framer-1ntkw93`,
                                                                              GaDHsaDms: !0,
                                                                              layoutId: `IRYHfO9SI`,
                                                                            }),
                                                                            m(F, {
                                                                              __fromCanvasComponent:
                                                                                !0,
                                                                              children: m(r, {
                                                                                children: m(`h4`, {
                                                                                  className: `framer-styles-preset-kx3c0q`,
                                                                                  "data-styles-preset": `oESEGjQit`,
                                                                                  dir: `auto`,
                                                                                  children: `Size chart`,
                                                                                }),
                                                                              }),
                                                                              className: `framer-2enzzo`,
                                                                              fonts: [`Inter`],
                                                                              verticalAlignment: `top`,
                                                                              withExternalLayout:
                                                                                !0,
                                                                            }),
                                                                          ],
                                                                        }),
                                                                        m(v.button, {
                                                                          "aria-label": `Size Chart Close Button`,
                                                                          className: `framer-ombu57`,
                                                                          "data-framer-name": `Close Button`,
                                                                          "data-reset": `button`,
                                                                          onTap: Be({ overlay: e }),
                                                                          whileHover: Ao,
                                                                          children: m(vt, {
                                                                            animated: !1,
                                                                            className: `framer-9iesc6`,
                                                                            GaDHsaDms: !0,
                                                                            layoutId: `HJV991g7e`,
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                    m(`div`, {
                                                                      className: `framer-ncbkx`,
                                                                      "data-framer-name": `Body`,
                                                                      children: h(`div`, {
                                                                        className: `framer-2urt7n`,
                                                                        "data-border": !0,
                                                                        "data-framer-name": `Table`,
                                                                        children: [
                                                                          h(`div`, {
                                                                            className: `framer-uxai2a`,
                                                                            "data-border": !0,
                                                                            "data-framer-name": `Header`,
                                                                            children: [
                                                                              m(`div`, {
                                                                                className: `framer-4i4rq8`,
                                                                                "data-framer-name": `Cell`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      children: m(
                                                                                        r,
                                                                                        {
                                                                                          children:
                                                                                            m(`p`, {
                                                                                              className: `framer-styles-preset-5rfdkx`,
                                                                                              "data-styles-preset": `CT_DBbR5R`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `left`,
                                                                                                },
                                                                                              children: `Size`,
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    },
                                                                                  },
                                                                                  children: m(F, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: m(r, {
                                                                                      children: m(
                                                                                        `p`,
                                                                                        {
                                                                                          className: `framer-styles-preset-1nkfhjw`,
                                                                                          "data-styles-preset": `hWdlH0iq7`,
                                                                                          dir: `auto`,
                                                                                          children: `Size`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1yjq52a`,
                                                                                    fonts: [
                                                                                      `Inter`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                              m(`div`, {
                                                                                className: `framer-okvere`,
                                                                                "data-border": !0,
                                                                                "data-framer-name": `Cell`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      children: m(
                                                                                        r,
                                                                                        {
                                                                                          children:
                                                                                            m(`p`, {
                                                                                              className: `framer-styles-preset-5rfdkx`,
                                                                                              "data-styles-preset": `CT_DBbR5R`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `left`,
                                                                                                },
                                                                                              children: `US`,
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    },
                                                                                  },
                                                                                  children: m(F, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: m(r, {
                                                                                      children: m(
                                                                                        `p`,
                                                                                        {
                                                                                          className: `framer-styles-preset-1nkfhjw`,
                                                                                          "data-styles-preset": `hWdlH0iq7`,
                                                                                          dir: `auto`,
                                                                                          children: `US`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1s80375`,
                                                                                    fonts: [
                                                                                      `Inter`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                              m(`div`, {
                                                                                className: `framer-bura9n`,
                                                                                "data-framer-name": `Cell`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      children: m(
                                                                                        r,
                                                                                        {
                                                                                          children:
                                                                                            m(`p`, {
                                                                                              className: `framer-styles-preset-5rfdkx`,
                                                                                              "data-styles-preset": `CT_DBbR5R`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `left`,
                                                                                                },
                                                                                              children: `EU`,
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    },
                                                                                  },
                                                                                  children: m(F, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: m(r, {
                                                                                      children: m(
                                                                                        `p`,
                                                                                        {
                                                                                          className: `framer-styles-preset-1nkfhjw`,
                                                                                          "data-styles-preset": `hWdlH0iq7`,
                                                                                          dir: `auto`,
                                                                                          children: `EU`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-1q3hm6m`,
                                                                                    fonts: [
                                                                                      `Inter`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                              m(`div`, {
                                                                                className: `framer-1bwnwu`,
                                                                                "data-border": !0,
                                                                                "data-framer-name": `Cell`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      children: m(
                                                                                        r,
                                                                                        {
                                                                                          children:
                                                                                            m(`p`, {
                                                                                              className: `framer-styles-preset-5rfdkx`,
                                                                                              "data-styles-preset": `CT_DBbR5R`,
                                                                                              dir: `auto`,
                                                                                              style:
                                                                                                {
                                                                                                  "--framer-text-alignment": `left`,
                                                                                                },
                                                                                              children: `Foot`,
                                                                                            }),
                                                                                        }
                                                                                      ),
                                                                                    },
                                                                                  },
                                                                                  children: m(F, {
                                                                                    __fromCanvasComponent:
                                                                                      !0,
                                                                                    children: m(r, {
                                                                                      children: m(
                                                                                        `p`,
                                                                                        {
                                                                                          className: `framer-styles-preset-1nkfhjw`,
                                                                                          "data-styles-preset": `hWdlH0iq7`,
                                                                                          dir: `auto`,
                                                                                          children: `Foot (cm)`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    className: `framer-nekq9u`,
                                                                                    fonts: [
                                                                                      `Inter`,
                                                                                    ],
                                                                                    verticalAlignment: `top`,
                                                                                    withExternalLayout:
                                                                                      !0,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1p33kom-container`,
                                                                                nodeId: `bFWzwScAi`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `bFWzwScAi`,
                                                                                    KnIOtOEIQ: `UK 4`,
                                                                                    layoutId: `bFWzwScAi`,
                                                                                    lIhw5r7E9: 23,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 5,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 37.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1esrocr-container`,
                                                                                nodeId: `qK2PirTIa`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `qK2PirTIa`,
                                                                                    KnIOtOEIQ: `UK 5`,
                                                                                    layoutId: `qK2PirTIa`,
                                                                                    lIhw5r7E9: 24,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 6,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 38.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-a9yiq8-container`,
                                                                                nodeId: `u9oXC_ojV`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `u9oXC_ojV`,
                                                                                    KnIOtOEIQ: `UK 6`,
                                                                                    layoutId: `u9oXC_ojV`,
                                                                                    lIhw5r7E9: 25,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 7,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 40,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1sy5q3b-container`,
                                                                                nodeId: `kKrP2iqtA`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `kKrP2iqtA`,
                                                                                    KnIOtOEIQ: `UK 7`,
                                                                                    layoutId: `kKrP2iqtA`,
                                                                                    lIhw5r7E9: 26,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 8,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 41,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1ot31np-container`,
                                                                                nodeId: `phyMel8n3`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `phyMel8n3`,
                                                                                    KnIOtOEIQ: `UK 8`,
                                                                                    layoutId: `phyMel8n3`,
                                                                                    lIhw5r7E9: 27,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 9,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 42.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-eh31b9-container`,
                                                                                nodeId: `FnfMWp6LM`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `FnfMWp6LM`,
                                                                                    KnIOtOEIQ: `UK 9`,
                                                                                    layoutId: `FnfMWp6LM`,
                                                                                    lIhw5r7E9: 28,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 10,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 44,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-5wuh8i-container`,
                                                                                nodeId: `wIWsngr6F`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `wIWsngr6F`,
                                                                                    KnIOtOEIQ: `UK 10`,
                                                                                    layoutId: `wIWsngr6F`,
                                                                                    lIhw5r7E9: 29,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 11,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 45,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-19pkcgg-container`,
                                                                                nodeId: `qFGYoAVFo`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `qFGYoAVFo`,
                                                                                    KnIOtOEIQ: `UK 11`,
                                                                                    layoutId: `qFGYoAVFo`,
                                                                                    lIhw5r7E9: 30,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 12,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 46,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1xbvp0t-container`,
                                                                                nodeId: `oVlbkVVmb`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `oVlbkVVmb`,
                                                                                    KnIOtOEIQ: `UK 12`,
                                                                                    layoutId: `oVlbkVVmb`,
                                                                                    lIhw5r7E9: 31,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 13,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 47.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-17a6cti-container`,
                                                                                nodeId: `xEX4uwvOT`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `xEX4uwvOT`,
                                                                                    KnIOtOEIQ: `UK 13`,
                                                                                    layoutId: `xEX4uwvOT`,
                                                                                    lIhw5r7E9: 32,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 14,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 48.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1xfylzq-container`,
                                                                                nodeId: `KPUErUb1n`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `KPUErUb1n`,
                                                                                    KnIOtOEIQ: `UK 14`,
                                                                                    layoutId: `KPUErUb1n`,
                                                                                    lIhw5r7E9: 33,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 15,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 49.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-93lso6-container`,
                                                                                nodeId: `N8vx6MkWT`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `N8vx6MkWT`,
                                                                                    KnIOtOEIQ: `UK 15`,
                                                                                    layoutId: `N8vx6MkWT`,
                                                                                    lIhw5r7E9: 34,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 16,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 50.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1j4bpv1-container`,
                                                                                nodeId: `FA5lORlPv`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `FA5lORlPv`,
                                                                                    KnIOtOEIQ: `UK 16`,
                                                                                    layoutId: `FA5lORlPv`,
                                                                                    lIhw5r7E9: 35,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 17,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 51.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                          m(R, {
                                                                            breakpoint: z,
                                                                            overrides: {
                                                                              HpMPVxev7: {
                                                                                width: `calc(100vw - 48px)`,
                                                                              },
                                                                            },
                                                                            children: m(P, {
                                                                              width: `612px`,
                                                                              children: m(M, {
                                                                                className: `framer-1p77nqu-container`,
                                                                                nodeId: `HpruK7IQH`,
                                                                                scopeId: `fIwdA4CC3`,
                                                                                children: m(R, {
                                                                                  breakpoint: z,
                                                                                  overrides: {
                                                                                    HpMPVxev7: {
                                                                                      variant:
                                                                                        $(
                                                                                          `yFFl_lkaI`
                                                                                        ),
                                                                                    },
                                                                                  },
                                                                                  children: m(W, {
                                                                                    height: `100%`,
                                                                                    id: `HpruK7IQH`,
                                                                                    KnIOtOEIQ: `UK 16`,
                                                                                    layoutId: `HpruK7IQH`,
                                                                                    lIhw5r7E9: 36,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TnDye81BM: 18,
                                                                                    variant:
                                                                                      $(
                                                                                        `mqMUrxGyN`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    yDSc0kaYR: 52.5,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        ],
                                                                      }),
                                                                    }),
                                                                  ],
                                                                }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                        jo()
                                                      ),
                                                    }),
                                                }),
                                              ],
                                            }),
                                          }),
                                      }),
                                    ],
                                  }),
                                  m(`div`, {
                                    className: `framer-q46j8i`,
                                    children: m(Ee, {
                                      children: m(To, {
                                        query: Fo(O),
                                        children: (e, t, n) =>
                                          m(d, {
                                            children: e?.map(
                                              (
                                                { afw8SDSDw: e, Hj8ZI4BM4: t, id: n, wlcNJFK7W: r },
                                                i
                                              ) => (
                                                (t ??= ``),
                                                (r ??= ``),
                                                (e ??= ``),
                                                m(
                                                  ae,
                                                  {
                                                    id: `DgXlBggfS-${n}`,
                                                    children: m(C.Provider, {
                                                      value: { afw8SDSDw: e },
                                                      children: m(`div`, {
                                                        className: `framer-er3uhj`,
                                                        draggable: `false`,
                                                        children: m(R, {
                                                          breakpoint: z,
                                                          overrides: {
                                                            HpMPVxev7: {
                                                              width: `max(max((min(${f?.width || `100vw`} - 40px, 500px) - 68px) / 3, 50px), 1px)`,
                                                              y:
                                                                (f?.y || 0) +
                                                                140 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                100 +
                                                                0 +
                                                                0 +
                                                                909 +
                                                                0 +
                                                                115 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                            JHincc2Ex: {
                                                              width: `max(max((max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px) - 12px) / 3, 50px), 1px)`,
                                                              y:
                                                                (f?.y || 0) +
                                                                140 +
                                                                0 +
                                                                0 +
                                                                0 +
                                                                120 +
                                                                0 +
                                                                909 +
                                                                0 +
                                                                115 +
                                                                0 +
                                                                0 +
                                                                0,
                                                            },
                                                          },
                                                          children: m(P, {
                                                            height: 31,
                                                            width: `max(max((max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 3, 1px) - 12px) / 3, 50px), 1px)`,
                                                            y:
                                                              (f?.y || 0) +
                                                              140 +
                                                              0 +
                                                              0 +
                                                              0 +
                                                              120 +
                                                              0 +
                                                              344 +
                                                              0 +
                                                              115 +
                                                              0 +
                                                              0 +
                                                              0,
                                                            children: m(M, {
                                                              className: `framer-8olnal-container`,
                                                              nodeId: `DzVPaYooX`,
                                                              scopeId: `fIwdA4CC3`,
                                                              children: m(Nt, {
                                                                height: `100%`,
                                                                id: `DzVPaYooX`,
                                                                layoutId: `DzVPaYooX`,
                                                                oAyFGEyea: r,
                                                                style: { width: `100%` },
                                                                variant: $(
                                                                  Po(No(t, `Unavailable`), u)
                                                                ),
                                                                width: `100%`,
                                                              }),
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                  },
                                                  n
                                                )
                                              )
                                            ),
                                          }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              m(v.div, {
                                className: `framer-121af6y`,
                                "data-framer-name": `CTA`,
                                layout: `position`,
                                children: m(fe, {
                                  links: [
                                    { href: D, implicitPathVariables: void 0 },
                                    { href: D, implicitPathVariables: void 0 },
                                    { href: D, implicitPathVariables: void 0 },
                                  ],
                                  children: (e) =>
                                    m(R, {
                                      breakpoint: z,
                                      overrides: {
                                        HpMPVxev7: {
                                          y: (f?.y || 0) + 140 + 0 + 0 + 0 + 100 + 0 + 0 + 1116 + 0,
                                        },
                                        JHincc2Ex: {
                                          y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 1116 + 0,
                                        },
                                      },
                                      children: m(P, {
                                        height: 29,
                                        y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 551 + 0,
                                        children: m(M, {
                                          className: `framer-1wldva3-container`,
                                          nodeId: `zB0BHQKTA`,
                                          scopeId: `fIwdA4CC3`,
                                          children: m(R, {
                                            breakpoint: z,
                                            overrides: {
                                              HpMPVxev7: { vFRI3q06T: e[2] },
                                              JHincc2Ex: { vFRI3q06T: e[1] },
                                            },
                                            children: m(Re, {
                                              height: `100%`,
                                              hZdVwdl_Y: !1,
                                              id: `zB0BHQKTA`,
                                              layoutId: `zB0BHQKTA`,
                                              peKL8pfJA: Le,
                                              TDPWRYXxk: `Buy now`,
                                              variant: $(`fGebBpVaS`),
                                              vFRI3q06T: e[0],
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                }),
                              }),
                              m(R, {
                                breakpoint: z,
                                overrides: {
                                  HpMPVxev7: {
                                    width: `min(${f?.width || `100vw`} - 40px, 500px)`,
                                    y: (f?.y || 0) + 140 + 0 + 0 + 0 + 100 + 0 + 0 + 1169,
                                  },
                                  JHincc2Ex: {
                                    width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px)`,
                                    y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 1169,
                                  },
                                },
                                children: m(P, {
                                  height: 1,
                                  width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 3, 1px)`,
                                  y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 604,
                                  children: m(M, {
                                    className: `framer-1lk5e5g-container`,
                                    layout: `position`,
                                    nodeId: `lcCxQwwPL`,
                                    rendersWithMotion: !0,
                                    scopeId: `fIwdA4CC3`,
                                    children: m(ft, {
                                      height: `100%`,
                                      id: `lcCxQwwPL`,
                                      layoutId: `lcCxQwwPL`,
                                      style: { height: `100%`, width: `100%` },
                                      variant: $(`FveAb6f2W`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              h(v.div, {
                                className: `framer-z7q4px`,
                                "data-framer-name": `Product Description`,
                                layout: `position`,
                                children: [
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: m(r, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1sjmy9b`,
                                        "data-styles-preset": `PXfjos31S`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))`,
                                        },
                                        children: `Description`,
                                      }),
                                    }),
                                    className: `framer-1ahsbyx`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: T,
                                    className: `framer-vwwgvv`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      p: `framer-styles-preset-1sfpnlb`,
                                      table: `framer-styles-preset-176fugv`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(v.div, {
                                className: `framer-1sjvbwz`,
                                "data-framer-name": `Return Statement`,
                                layout: `position`,
                                children: [
                                  m(Ja, {
                                    animated: !1,
                                    className: `framer-1iev5f2`,
                                    GaDHsaDms: !0,
                                    layoutId: `fvop0YoJz`,
                                  }),
                                  m(F, {
                                    __fromCanvasComponent: !0,
                                    children: m(r, {
                                      children: m(`p`, {
                                        className: `framer-styles-preset-1sjmy9b`,
                                        "data-styles-preset": `PXfjos31S`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                        },
                                        children: `14-day return and size exchange`,
                                      }),
                                    }),
                                    className: `framer-1tk486p`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              h(so, {
                                className: `framer-1jy55s2`,
                                "data-framer-name": `Accordions`,
                                flowEffectEnabled: !0,
                                isNestedFlowEffect: !0,
                                layout: `position`,
                                children: [
                                  m(R, {
                                    breakpoint: z,
                                    overrides: {
                                      HpMPVxev7: {
                                        width: `calc(min(${f?.width || `100vw`} - 40px, 500px) - 56px)`,
                                        y:
                                          (f?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          1554 +
                                          0 +
                                          0,
                                      },
                                      JHincc2Ex: {
                                        width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px)`,
                                        y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 1554 + 0 + 0,
                                      },
                                    },
                                    children: m(P, {
                                      height: 59,
                                      width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 3, 1px)`,
                                      y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 989 + 0 + 0,
                                      children: m(M, {
                                        className: `framer-1ig2nmz-container`,
                                        layout: `position`,
                                        nodeId: `OBLaxXUVx`,
                                        rendersWithMotion: !0,
                                        scopeId: `fIwdA4CC3`,
                                        children: m(Vn, {
                                          ATpvsBtxp: `Product Details`,
                                          height: `100%`,
                                          id: `OBLaxXUVx`,
                                          layoutId: `OBLaxXUVx`,
                                          style: { width: `100%` },
                                          variant: $(`IC8YKBOjQ`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(R, {
                                    breakpoint: z,
                                    overrides: {
                                      HpMPVxev7: {
                                        width: `calc(min(${f?.width || `100vw`} - 40px, 500px) - 56px)`,
                                        y:
                                          (f?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          1554 +
                                          0 +
                                          69,
                                      },
                                      JHincc2Ex: {
                                        width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px)`,
                                        y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 1554 + 0 + 69,
                                      },
                                    },
                                    children: m(P, {
                                      height: 59,
                                      width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 3, 1px)`,
                                      y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 989 + 0 + 69,
                                      children: m(M, {
                                        className: `framer-7yooi5-container`,
                                        layout: `position`,
                                        nodeId: `VLr9LKhG5`,
                                        rendersWithMotion: !0,
                                        scopeId: `fIwdA4CC3`,
                                        children: m(Vn, {
                                          ATpvsBtxp: `Vendor Details`,
                                          height: `100%`,
                                          id: `VLr9LKhG5`,
                                          layoutId: `VLr9LKhG5`,
                                          style: { width: `100%` },
                                          variant: $(`IC8YKBOjQ`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  m(R, {
                                    breakpoint: z,
                                    overrides: {
                                      HpMPVxev7: {
                                        width: `calc(min(${f?.width || `100vw`} - 40px, 500px) - 56px)`,
                                        y:
                                          (f?.y || 0) +
                                          140 +
                                          0 +
                                          0 +
                                          0 +
                                          100 +
                                          0 +
                                          0 +
                                          1554 +
                                          0 +
                                          138,
                                      },
                                      JHincc2Ex: {
                                        width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 56px) * 1, 1px)`,
                                        y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 1554 + 0 + 138,
                                      },
                                    },
                                    children: m(P, {
                                      height: 59,
                                      width: `max((min(${f?.width || `100vw`} - 40px, 1000px) - 24px) / 3, 1px)`,
                                      y: (f?.y || 0) + 140 + 0 + 0 + 0 + 120 + 0 + 989 + 0 + 138,
                                      children: m(M, {
                                        className: `framer-1yqryot-container`,
                                        layout: `position`,
                                        nodeId: `dsawfeDbI`,
                                        rendersWithMotion: !0,
                                        scopeId: `fIwdA4CC3`,
                                        children: m(Vn, {
                                          ATpvsBtxp: `Return Policy`,
                                          height: `100%`,
                                          id: `dsawfeDbI`,
                                          layoutId: `dsawfeDbI`,
                                          style: { width: `100%` },
                                          variant: $(`IC8YKBOjQ`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      m(co, {
                        className: `framer-12vo0cf`,
                        "data-framer-name": `Recommendations`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: vo,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: m(R, {
                          breakpoint: z,
                          overrides: {
                            HpMPVxev7: {
                              width: `calc(min(${f?.width || `100vw`} - 40px, 500px) - 29px)`,
                              y: (f?.y || 0) + 140 + 0 + 0 + 1889 + 100 + 0,
                            },
                            JHincc2Ex: {
                              width: `calc(min(${f?.width || `100vw`} - 40px, 1000px) - 56px)`,
                              y: (f?.y || 0) + 140 + 0 + 0 + 1945 + 0 + 0,
                            },
                          },
                          children: m(P, {
                            height: 499,
                            width: `min(${f?.width || `100vw`} - 40px, 1000px)`,
                            y: (f?.y || 0) + 140 + 0 + 0 + 1380 + 0 + 0,
                            children: m(M, {
                              className: `framer-1eb71cp-container`,
                              layout: `position`,
                              nodeId: `gi0tyfEY_`,
                              rendersWithMotion: !0,
                              scopeId: `fIwdA4CC3`,
                              children: m(R, {
                                breakpoint: z,
                                overrides: { HpMPVxev7: { variant: $(`t7J4OXMxa`) } },
                                children: m(We, {
                                  height: `100%`,
                                  id: `gi0tyfEY_`,
                                  layoutId: `gi0tyfEY_`,
                                  style: { width: `100%` },
                                  variant: $(`YddRK6JtV`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      h(co, {
                        className: `framer-9s8lb6`,
                        "data-framer-name": `FAQ's`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: vo,
                        isNestedFlowEffect: !0,
                        layout: `position`,
                        children: [
                          h(v.div, {
                            className: `framer-sfxd1n`,
                            "data-framer-name": `Header`,
                            layout: `position`,
                            children: [
                              m(F, {
                                __fromCanvasComponent: !0,
                                children: m(r, {
                                  children: m(`p`, {
                                    className: `framer-styles-preset-5rfdkx`,
                                    "data-styles-preset": `CT_DBbR5R`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                    },
                                    children: `Ask us`,
                                  }),
                                }),
                                className: `framer-8ackol`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              m(F, {
                                __fromCanvasComponent: !0,
                                children: m(r, {
                                  children: m(`h2`, {
                                    className: `framer-styles-preset-1ll98pl`,
                                    "data-styles-preset": `cxfU_vRgl`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))`,
                                    },
                                    children: `Clear the confusions.`,
                                  }),
                                }),
                                className: `framer-1om81ko`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          m(R, {
                            breakpoint: z,
                            overrides: {
                              HpMPVxev7: {
                                width: `min(min(${f?.width || `100vw`} - 40px, 400px) - 56px, 600px)`,
                                y: (f?.y || 0) + 140 + 0 + 0 + 2526 + 28 + 97.4,
                              },
                              JHincc2Ex: { y: (f?.y || 0) + 140 + 0 + 0 + 2518 + 64 + 97.4 },
                            },
                            children: m(P, {
                              height: 513,
                              width: `min(min(${f?.width || `100vw`} - 40px, 1200px) - 88px, 600px)`,
                              y: (f?.y || 0) + 140 + 0 + 0 + 1953 + 64 + 109.4,
                              children: m(M, {
                                className: `framer-13dfu87-container`,
                                layout: `position`,
                                nodeId: `PXeIKlssa`,
                                rendersWithMotion: !0,
                                scopeId: `fIwdA4CC3`,
                                children: m(Pe, {
                                  height: `100%`,
                                  id: `PXeIKlssa`,
                                  layoutId: `PXeIKlssa`,
                                  style: { maxWidth: `100%`, width: `100%` },
                                  variant: $(`Eb3YZKRF7`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                m(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-9nuRC.framer-168patu, .framer-9nuRC .framer-168patu { display: block; }`,
        `.framer-9nuRC.framer-kbxkhz { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-9nuRC .framer-4c5ymu, .framer-9nuRC .framer-b6df0n, .framer-9nuRC .framer-1dfqhmb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-1mvanom { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 120px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-9mexth-container { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: sticky; top: 120px; user-select: none; width: 1px; z-index: 1; }`,
        `.framer-9nuRC .framer-11ellni { align-content: flex-start; align-items: flex-start; display: flex; flex: 0.5 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-kodflv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-ll7gth, .framer-9nuRC .framer-1hcb3w7, .framer-9nuRC .framer-xqhgl3, .framer-9nuRC .framer-13ftxg4, .framer-9nuRC .framer-1yjq52a, .framer-9nuRC .framer-1s80375, .framer-9nuRC .framer-1q3hm6m, .framer-9nuRC .framer-nekq9u, .framer-9nuRC .framer-1ahsbyx, .framer-9nuRC .framer-vwwgvv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9nuRC .framer-1orem77-container { flex: none; height: auto; position: relative; width: 100%; z-index: 4; }`,
        `.framer-9nuRC .framer-1pivnpq { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; background-color: var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, #f0f0f0); border-bottom-left-radius: 23px; border-bottom-right-radius: 23px; border-top-left-radius: 23px; border-top-right-radius: 23px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px 10px; height: min-content; justify-content: flex-start; overflow: auto; padding: 12px; position: relative; user-select: none; width: 100%; }`,
        `.framer-9nuRC .framer-6cugqb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 75px; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 75px; }`,
        `.framer-9nuRC .framer-1sb03q8-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-65s1w3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-vzxp60, .framer-9nuRC .framer-1tk486p { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-9nuRC .framer-1k1eg3m { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-9nuRC .framer-xyu096 { --118a55: var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, #949494); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
        `.framer-9nuRC .framer-3she2l, .framer-9nuRC .framer-2enzzo { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-9nuRC.framer-uva732 { background-color: var(--token-d40b80ee-6074-49f4-8c08-d5cd11ad308c, rgba(0, 0, 0, 0.2)); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-9nuRC.framer-1qanuut { --corner-shape-fallback: 0.796; align-content: flex-start; align-items: flex-start; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); border-bottom-left-radius: calc(44px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-bottom-right-radius: calc(44px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-left-radius: calc(44px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); border-top-right-radius: calc(44px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.05); corner-shape: superellipse(1.4); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; left: 50%; max-height: 80%; overflow: auto; padding: 0px; position: fixed; top: 50%; transform: translate(-50%, -50%); width: 700px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-9nuRC .framer-53ej7q { -webkit-backdrop-filter: blur(10px); align-content: center; align-items: center; backdrop-filter: blur(10px); background-color: var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0)); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 44px 44px 24px 44px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-9nuRC .framer-hjh7d1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-9nuRC .framer-1ntkw93 { --118a55: var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, #000000); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 26px); position: relative; width: 26px; }`,
        `.framer-9nuRC .framer-ombu57 { align-content: center; align-items: center; background-color: var(--token-ef4d7bc1-0431-483d-9665-aeb18fbabc63, #f0f0f0); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-9nuRC .framer-9iesc6 { --118a55: var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, #949494); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; }`,
        `.framer-9nuRC .framer-ncbkx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 44px 44px 44px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-2urt7n { --border-bottom-width: 1px; --border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-9nuRC .framer-uxai2a { --border-bottom-width: 1px; --border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-4i4rq8, .framer-9nuRC .framer-bura9n { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 16px 20px; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-okvere { --border-bottom-width: 0px; --border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, #fafafa); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 16px 20px; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-1bwnwu { --border-bottom-width: 0px; --border-color: var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, #e3e3e3); --border-left-width: 1px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: flex-start; align-items: flex-start; background-color: var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, #fafafa); display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 16px 16px 20px; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-1p33kom-container, .framer-9nuRC .framer-1esrocr-container, .framer-9nuRC .framer-a9yiq8-container, .framer-9nuRC .framer-1sy5q3b-container, .framer-9nuRC .framer-1ot31np-container, .framer-9nuRC .framer-eh31b9-container, .framer-9nuRC .framer-5wuh8i-container, .framer-9nuRC .framer-19pkcgg-container, .framer-9nuRC .framer-1xbvp0t-container, .framer-9nuRC .framer-17a6cti-container, .framer-9nuRC .framer-1xfylzq-container, .framer-9nuRC .framer-93lso6-container, .framer-9nuRC .framer-1j4bpv1-container, .framer-9nuRC .framer-1p77nqu-container, .framer-9nuRC .framer-1ig2nmz-container, .framer-9nuRC .framer-7yooi5-container, .framer-9nuRC .framer-1yqryot-container, .framer-9nuRC .framer-1eb71cp-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-q46j8i { display: grid; flex: none; gap: 6px 6px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-er3uhj { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-8olnal-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-9nuRC .framer-121af6y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-1wldva3-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-9nuRC .framer-1lk5e5g-container { flex: none; height: 1px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-z7q4px { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-1sjvbwz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-1iev5f2 { --118a55: var(--token-b4c72fe1-799d-45da-8343-92aab29b00d1, #949494); aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 18px; }`,
        `.framer-9nuRC .framer-1jy55s2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-12vo0cf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1000px; overflow: visible; padding: 0px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-9s8lb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 64px 44px 64px 44px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-sfxd1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-9nuRC .framer-8ackol { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-9nuRC .framer-1om81ko { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-9nuRC .framer-13dfu87-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        ...Je,
        ...Qe,
        ...Be,
        ...nt,
        ...La,
        ...mt,
        ...ot,
        `.framer-9nuRC[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-9nuRC [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `.framer-9nuRC[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-9nuRC [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `.framer-9nuRC[data-hide-scrollbars="true"], .framer-9nuRC [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        `.framer-9nuRC[data-border="true"]::after, .framer-9nuRC [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-9nuRC.framer-kbxkhz { width: 810px; } .framer-9nuRC .framer-1mvanom { padding: 120px 28px 64px 28px; } .framer-9nuRC .framer-11ellni { flex: 0.75 0 0px; } .framer-9nuRC .framer-12vo0cf { padding: 0px 28px 64px 28px; } .framer-9nuRC .framer-9s8lb6 { gap: 12px; }}`,
        `@media (max-width: 809.98px) { .framer-9nuRC.framer-kbxkhz { width: 390px; } .framer-9nuRC .framer-1mvanom { align-content: center; align-items: center; flex-direction: column; justify-content: flex-start; max-width: 500px; padding: 100px 0px 28px 0px; } .framer-9nuRC .framer-11ellni { flex: none; order: 0; width: 100%; } .framer-9nuRC .framer-kodflv, .framer-9nuRC .framer-b6df0n, .framer-9nuRC .framer-1dfqhmb, .framer-9nuRC .framer-121af6y, .framer-9nuRC .framer-z7q4px, .framer-9nuRC .framer-1sjvbwz, .framer-9nuRC .framer-1jy55s2 { padding: 0px 28px 0px 28px; } .framer-9nuRC.framer-1qanuut { border-bottom-left-radius: unset; border-bottom-right-radius: unset; border-top-left-radius: unset; border-top-right-radius: unset; height: 100vh; left: calc(50.00000000000002% - 100% / 2); max-height: unset; top: calc(50.00000000000002% - 100vh / 2); transform: unset; width: 100%; } .framer-9nuRC .framer-53ej7q { padding: 24px; } .framer-9nuRC .framer-ncbkx { padding: 0px 24px 24px 24px; } .framer-9nuRC .framer-2urt7n { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; } .framer-9nuRC .framer-4i4rq8, .framer-9nuRC .framer-okvere, .framer-9nuRC .framer-bura9n, .framer-9nuRC .framer-1bwnwu { padding: 16px 12px 16px 12px; } .framer-9nuRC .framer-12vo0cf { align-content: center; align-items: center; justify-content: flex-start; max-width: 500px; padding: 100px 0px 28px 29px; } .framer-9nuRC .framer-1eb71cp-container { order: 0; } .framer-9nuRC .framer-9s8lb6 { gap: 12px; max-width: 400px; padding: 28px; }}`,
      ],
      `framer-9nuRC`
    )),
    (Bo.displayName = `Shoes`),
    (Bo.defaultProps = { height: 3272, width: 1200 }),
    k(
      Bo,
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
        ...Xa,
        ...Za,
        ...Qa,
        ...$a,
        ...eo,
        ...to,
        ...no,
        ...ro,
        ...io,
        ...ao,
        ...oo,
        ...lo,
        ...uo,
        ...L(Ye),
        ...L($e),
        ...L(Ve),
        ...L(rt),
        ...L(Ia),
        ...L(ht),
        ...L(st),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Bo.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = ke.get(Ro(ge(t.pathVariables, `fIwdA4CC3`)), n).readMaybeAsync();
        return Promise.allSettled([
          x(Ir, {}, t),
          x(Sn, {}, t),
          x(W, {}, t),
          x(Re, {}, t),
          x(ft, {}, t),
          x(Vn, {}, t),
          x(We, {}, t),
          x(Pe, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return Promise.allSettled([
              ke.get(wo(e?.rPQCyIqtZ), n).preload(),
              ke.get(Fo(e?.fc8SWJvvh), n).preload(),
            ]);
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await ke.get(wo(e?.rPQCyIqtZ), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => x(Kt, {}, t)));
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await ke.get(Fo(e?.fc8SWJvvh), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => x(Nt, {}, t)));
          })(),
        ]);
      },
    }),
    (Vo = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerfIwdA4CC3`,
          slots: [],
          annotations: {
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"JHincc2Ex":{"layout":["fixed","auto"]},"HpMPVxev7":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `false`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `3272`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Vo as __FramerMetadata__, Bo as default, ho as queryParamNames };
//# sourceMappingURL=DB0XDMvFiZusnGFh5IAMDaqc4K-TDCm7EjJERGxYVC8.DlKfM4F6.mjs.map
