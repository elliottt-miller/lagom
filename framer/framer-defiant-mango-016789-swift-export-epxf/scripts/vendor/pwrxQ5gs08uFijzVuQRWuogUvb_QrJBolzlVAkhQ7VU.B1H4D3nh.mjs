import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as n,
  E as r,
  L as i,
  N as a,
  P as o,
  S as s,
  c,
  l,
  m as u,
  s as d,
  u as f,
} from "./react.D0omlcQg.mjs";
import { M as p, a as m, n as ee, r as te, t as h } from "./motion.Bi2Azsus.mjs";
import {
  A as g,
  At as _,
  B as v,
  Bt as y,
  Ct as b,
  Dt as ne,
  Et as re,
  Ht as x,
  It as S,
  J as C,
  K as w,
  L as T,
  Lt as E,
  M as D,
  N as O,
  Nt as k,
  O as A,
  P as j,
  Pt as ie,
  R as M,
  Rt as N,
  St as ae,
  Ut as P,
  _t as oe,
  a as F,
  bt as se,
  et as I,
  h as L,
  ht as ce,
  i as R,
  j as le,
  jt as z,
  k as B,
  l as ue,
  lt as de,
  o as V,
  p as fe,
  q as H,
  w as U,
  y as pe,
  zt as me,
} from "./framer.zRtTBSC3.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./amNEcipQY.BtEVe7io.mjs";
import { n as ye, t as be } from "./ArkBx20pQ.BU-JxVzl.mjs";
import {
  a as xe,
  c as Se,
  i as Ce,
  n as we,
  o as Te,
  r as Ee,
  s as De,
  t as Oe,
} from "./b_m5Js9Ir.C0kksidw.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./CT_DBbR5R.CmeCM4mC.mjs";
import {
  a as Ne,
  c as Pe,
  i as Fe,
  n as Ie,
  o as Le,
  r as Re,
  s as ze,
  t as Be,
} from "./Up96L3MzY.D3fxcKjA.mjs";
import { n as Ve, t as He } from "./eE2hU3DZQ.Cb4cT7nf.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./PXfjos31S.DX_B23Tr.mjs";
import {
  a as qe,
  c as Je,
  d as W,
  f as Ye,
  i as Xe,
  l as Ze,
  m as Qe,
  n as $e,
  o as et,
  p as tt,
  r as nt,
  s as rt,
  t as it,
  u as at,
} from "./t3Ke7PZ3N.BfJb_Es2.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./X4l3QYsOx.BTlB7_wH.mjs";
import {
  a as ut,
  i as dt,
  n as ft,
  o as pt,
  r as mt,
  s as ht,
  t as gt,
} from "./W76pPiwFl.C8cOrinn.mjs";
import { i as _t, n as vt, r as yt, t as bt } from "./oESEGjQit.Czs91Bwq.mjs";
import { i as xt, n as St, r as Ct, t as wt } from "./cxfU_vRgl.CLfRjdVV.mjs";
import { i as Tt, n as Et, r as Dt, t as Ot } from "./h36udAO3c.CiwmY8BQ.mjs";
import { i as kt, n as At, r as jt, t as Mt } from "./nV6XvMHlN.6LAm4Vcv.mjs";
import { i as Nt, n as Pt, r as Ft, t as It } from "./pN_gL4Xds.CPj-Oone.mjs";
import { i as Lt, n as Rt, r as zt, t as Bt } from "./RoRGeZoiF.Dyk3V9gY.mjs";
import { n as Vt, t as Ht } from "./WWrKfqOcU.-iAiA_m2.mjs";
import Ut, { t as Wt } from "./PXqq9DUgxDyiX-WBnWpx9wji5oUXJ1amUYAE7BTV0P8.BCnxykmx.mjs";
var G,
  Gt = t(() => {
    (I(),
      (G = M({
        title: `Wave Gradient`,
        fragment: `
#define S(a,b,t) smoothstep(a,b,t)

mat2 Rot(float a) {
    float s = sin(a), c = cos(a);
    return mat2(c, -s, s, c);
}

vec2 hash(vec2 p) {
    float s = u_seed;
    vec2 k1 = vec2(2127.1 + s * 13.37, 81.17 + s * 7.31);
    vec2 k2 = vec2(1269.5 + s * 11.13, 283.37 + s * 5.79);
    p = vec2(dot(p, k1), dot(p, k2));
    return fract(sin(p) * (43758.5453 + s * 1.618));
}

float noise(in vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    float n = mix(
        mix(dot(-1.0 + 2.0 * hash(i), f),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 0.0)), f - vec2(1.0, 0.0)), u.x),
        mix(dot(-1.0 + 2.0 * hash(i + vec2(0.0, 1.0)), f - vec2(0.0, 1.0)),
            dot(-1.0 + 2.0 * hash(i + vec2(1.0, 1.0)), f - vec2(1.0, 1.0)), u.x),
        u.y
    );
    return 0.5 + 0.5 * n;
}

vec3 getColor(int idx) {
    if (u_colors_length < 1) return vec3(0.0);
    int safeIdx = clamp(idx, 0, u_colors_length - 1);
    return u_colors[safeIdx].rgb;
}

float seedF(float base) {
    return base * (1.0 + 0.5 * sin(u_seed * 3.17 + base));
}

vec2 warpUV(vec2 uv) {
    float t = u_time * u_waveSpeed;

    float angleOffset = sin(u_seed * 2.73) * 30.0;
    mat2 dirRot = Rot(radians(u_waveAngle + angleOffset));
    vec2 ruv = dirRot * uv;

    float fxMod = seedF(u_waveFreqX);
    float fyMod = seedF(u_waveFreqY);

    float phaseX = fract(sin(u_seed * 7.19) * 437.58) * 6.2832;
    float phaseY = fract(cos(u_seed * 3.41) * 291.37) * 6.2832;

    // Core wave with seed-dependent harmonics
    float harmonic = sin(u_seed * 1.23) * 0.5;
    float a = fyMod * ruv.y - sin(ruv.x * fxMod + ruv.y - t + phaseX);
    a += harmonic * sin(ruv.x * fxMod * 2.0 + ruv.y * 0.5 + t * 0.7 + phaseY);

    // Smoothstep mask (unchanged)
    a = smoothstep(
        cos(a) * u_maskSoftness,
        sin(a) * u_maskSoftness + 3.,
        cos(a - fyMod * ruv.y) - sin(a - fxMod * ruv.x)
    );

    a *= u_waveAmplitude;

    uv = cos(a) * uv + sin(a) * vec2(-uv.y, uv.x);
    return uv;
}

void main() {
    vec2 fragCoord = v_uv * u_resolution;
    vec2 uv = fragCoord / u_resolution.xy;
    float ratio = u_resolution.x / u_resolution.y;
    float t = u_time * u_waveSpeed;

    vec2 tuv = uv - 0.5;

    vec2 seedShift = vec2(sin(u_seed * 4.37), cos(u_seed * 5.91)) * 100.0;
    float degree = noise(vec2(t * 0.1, tuv.x * tuv.y) + seedShift);
    tuv.y *= 1.0 / ratio;
    tuv *= Rot(radians((degree - 0.5) * 720.0 + 180.0));
    tuv.y *= ratio;

    // Seed-rotate uv2 before warping
    vec2 uv2 = (fragCoord * 2.0 - u_resolution.xy) / (u_resolution.x + u_resolution.y) * 2.0;
    float preRotAngle = fract(sin(u_seed * 5.63) * 173.29) * 6.2832;
    uv2 *= Rot(preRotAngle);
    vec2 warped = warpUV(uv2) * 0.5 + 0.5;

    vec2 blendUV = mix(tuv, warped - 0.5, u_blendAmount);

    float layerRot1 = -5.0 + sin(u_seed * 1.83) * 20.0;
    float layerRot2 = 10.0 + cos(u_seed * 2.47) * 20.0;

    vec3 c0 = getColor(0);
    vec3 c1 = getColor(1);
    vec3 c2 = getColor(2);
    vec3 c3 = getColor(3);

    vec3 layer1 = mix(c0, c2, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot1))).x));
    vec3 layer2 = mix(c3, c1, S(-0.3, 0.3, (blendUV * Rot(radians(layerRot2))).x));
    vec3 col = mix(layer1, layer2, S(0.3, -0.3, blendUV.y));

    col = mix(col, col * col + 0.5 * sqrt(col), 0.3);

    fragColor = vec4(col, 1.0);
}
`,
        propertyControls: {
          colors: {
            type: V.Array,
            title: `Colors`,
            control: { type: V.Color },
            maxCount: 4,
            defaultValue: [`#FF3624`, `#9EABFF`, `#FFAE00`, `#E29EFF`],
          },
          seed: { type: V.Number, title: `Seed`, defaultValue: 32, min: 0, max: 100, step: 1 },
          waveSpeed: {
            type: V.Number,
            title: `Speed`,
            defaultValue: 1.5,
            min: 0,
            max: 3,
            step: 0.01,
          },
          waveFreqX: {
            type: V.Number,
            title: `Freq X`,
            defaultValue: 0.9,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveFreqY: {
            type: V.Number,
            title: `Freq Y`,
            defaultValue: 6,
            min: 0.1,
            max: 6,
            step: 0.1,
          },
          waveAngle: {
            type: V.Number,
            title: `Angle`,
            defaultValue: 105,
            min: -180,
            max: 180,
            step: 1,
          },
          waveAmplitude: {
            type: V.Number,
            title: `Amplitude`,
            defaultValue: 2.1,
            min: 0.5,
            max: 3,
            step: 0.01,
          },
          maskSoftness: {
            type: V.Number,
            title: `Softness`,
            defaultValue: 0.74,
            min: 0.01,
            max: 2,
            step: 0.01,
          },
          blendAmount: {
            type: V.Number,
            title: `Blend`,
            defaultValue: 0.54,
            min: 0,
            max: 1,
            step: 0.01,
          },
        },
      })));
  }),
  Kt = e({ __FramerMetadata__: () => fn, default: () => K });
function qt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  K,
  fn,
  pn = t(() => {
    (c(),
      I(),
      h(),
      n(),
      rt(),
      (Jt = me(p.div)),
      (Yt = N(p.div, { nodeId: `zmvW3C9g1`, override: Je, scopeId: `ktCuW9AO8` })),
      (Xt = N(p.div, { nodeId: `AfapntieU`, override: at, scopeId: `ktCuW9AO8` })),
      (Zt = N(p.div, { nodeId: `G6c3mmKje`, override: Ze, scopeId: `ktCuW9AO8` })),
      (Qt = [`hMR2Eczfy`, `Qmz_V_cpa`, `Pp8oChv_V`]),
      ($t = `framer-iIFm0`),
      (en = {
        hMR2Eczfy: `framer-v-1v7trr`,
        Pp8oChv_V: `framer-v-1lo7vce`,
        Qmz_V_cpa: `framer-v-1xzenbz`,
      }),
      (tn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nn = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        transition: tn,
        x: 0,
        y: 0,
      }),
      (rn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: tn,
        x: 0,
        y: 0,
      }),
      (an = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0.8,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (on = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = z({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (sn = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (cn = { "Sky Blue": `Pp8oChv_V`, Beige: `hMR2Eczfy`, Orange: `Qmz_V_cpa` }),
      (ln = p.create(i)),
      (un = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: cn[r.variant] ?? r.variant ?? `hMR2Eczfy`,
      })),
      (dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = E(
        u(function (e, t) {
          let n = s(null),
            a = t ?? n,
            o = r(),
            { activeLocale: c, setLocale: u } = re();
          oe();
          let { style: m, className: h, layoutId: g, variant: _, ...v } = un(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ne,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: E,
              setVariant: D,
              variants: O,
            } = S({
              cycleOrder: Qt,
              defaultVariant: `hMR2Eczfy`,
              ref: a,
              variant: _,
              variantClassNames: en,
            }),
            k = dn(e, O),
            { activeVariantCallback: A, delay: j } = ce(y),
            ie = A(async (...e) => {
              D(`hMR2Eczfy`);
            }),
            M = ({ overlay: e }) =>
              A(async (...t) => {
                e.show();
              }),
            N = A(async (...e) => {
              D(`Pp8oChv_V`);
            }),
            ae = A(async (...e) => {
              D(`Qmz_V_cpa`);
            }),
            P = T($t),
            F = s(null),
            se = s(null),
            I = s(null),
            L = s(null),
            R = s(null),
            le = s(null);
          return d(te, {
            id: g ?? o,
            children: d(ln, {
              animate: O,
              initial: !1,
              children: d(sn, {
                value: tn,
                children: f(p.div, {
                  ...v,
                  ...x,
                  className: T(P, `framer-1v7trr`, h, b),
                  "data-framer-name": `Beige`,
                  layoutDependency: k,
                  layoutId: `hMR2Eczfy`,
                  ref: a,
                  style: {
                    backdropFilter: `blur(5px)`,
                    backgroundColor: `var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.2))`,
                    borderBottomLeftRadius: 1e4,
                    borderBottomRightRadius: 1e4,
                    borderTopLeftRadius: 1e4,
                    borderTopRightRadius: 1e4,
                    WebkitBackdropFilter: `blur(5px)`,
                    ...m,
                  },
                  ...qt(
                    {
                      Pp8oChv_V: { "data-framer-name": `Sky Blue` },
                      Qmz_V_cpa: { "data-framer-name": `Orange` },
                    },
                    y,
                    C
                  ),
                  children: [
                    d(on, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !1,
                      children: (e) =>
                        d(l, {
                          children: d(Yt, {
                            className: `framer-rm2iet`,
                            "data-framer-name": `Color Swatch`,
                            "data-highlight": !0,
                            id: `${g}-rm2iet`,
                            layoutDependency: k,
                            layoutId: `zmvW3C9g1`,
                            onMouseEnter: M({ overlay: e }),
                            onTap: ie,
                            ref: F,
                            style: {
                              backgroundColor: `var(--token-662c738d-2c5a-4b98-aeea-24b6bd59dfd6, rgb(227, 207, 179))`,
                              borderBottomLeftRadius: `100%`,
                              borderBottomRightRadius: `100%`,
                              borderTopLeftRadius: `100%`,
                              borderTopRightRadius: `100%`,
                              boxShadow: `0px 0px 0px 1px rgb(255, 255, 255)`,
                            },
                            variants: {
                              Pp8oChv_V: { boxShadow: `0px 0px 0px 1px rgba(255, 255, 255, 0)` },
                              Qmz_V_cpa: { boxShadow: `0px 0px 0px 1px rgba(255, 255, 255, 0)` },
                            },
                            children: d(ee, {
                              children:
                                e.visible &&
                                d(ue, {
                                  alignment: `center`,
                                  anchorRef: F,
                                  className: T(P, b),
                                  collisionDetection: !0,
                                  collisionDetectionPadding: 20,
                                  "data-framer-portal-id": `${g}-rm2iet`,
                                  offsetX: 0,
                                  offsetY: -20,
                                  onDismiss: e.hide,
                                  placement: `top`,
                                  safeArea: !0,
                                  zIndex: 11,
                                  children: d(Jt, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: rn,
                                    className: `framer-18x2w1b`,
                                    exit: nn,
                                    initial: an,
                                    layoutDependency: k,
                                    layoutId: `I76g2JdJy`,
                                    ref: se,
                                    role: `dialog`,
                                    style: {
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                    children: d(p.div, {
                                      className: `framer-19dwgw8`,
                                      "data-framer-name": `Tooltip`,
                                      layoutDependency: k,
                                      layoutId: `egp8hxgkd`,
                                      style: {
                                        backdropFilter: `blur(5px)`,
                                        backgroundColor: `var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.2))`,
                                        borderBottomLeftRadius: 1e4,
                                        borderBottomRightRadius: 1e4,
                                        borderTopLeftRadius: 1e4,
                                        borderTopRightRadius: 1e4,
                                        WebkitBackdropFilter: `blur(5px)`,
                                      },
                                      children: d(B, {
                                        __fromCanvasComponent: !0,
                                        children: d(i, {
                                          children: d(p.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `12px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                                            },
                                            children: `Beige`,
                                          }),
                                        }),
                                        className: `framer-hqq4pa`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: k,
                                        layoutId: `jgxgTaZjS`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                        }),
                    }),
                    d(on, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !1,
                      children: (e) =>
                        d(l, {
                          children: d(Xt, {
                            className: `framer-p8tprf`,
                            "data-border": !0,
                            "data-framer-name": `Color Swatch`,
                            "data-highlight": !0,
                            id: `${g}-p8tprf`,
                            layoutDependency: k,
                            layoutId: `AfapntieU`,
                            onMouseEnter: M({ overlay: e }),
                            onTap: N,
                            ref: I,
                            style: {
                              "--border-bottom-width": `2.5px`,
                              "--border-color": `var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0))`,
                              "--border-left-width": `2.5px`,
                              "--border-right-width": `2.5px`,
                              "--border-style": `solid`,
                              "--border-top-width": `2.5px`,
                              backgroundColor: `var(--token-f04af15e-7364-47f9-bbfb-f1df2805a355, rgb(204, 237, 255))`,
                              borderBottomLeftRadius: `100%`,
                              borderBottomRightRadius: `100%`,
                              borderTopLeftRadius: `100%`,
                              borderTopRightRadius: `100%`,
                              boxShadow: `0px 0px 0px 1px var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0))`,
                            },
                            variants: {
                              Pp8oChv_V: { boxShadow: `0px 0px 0px 1px rgb(255, 255, 255)` },
                            },
                            children: d(ee, {
                              children:
                                e.visible &&
                                d(ue, {
                                  alignment: `center`,
                                  anchorRef: I,
                                  className: T(P, b),
                                  collisionDetection: !0,
                                  collisionDetectionPadding: 20,
                                  "data-framer-portal-id": `${g}-p8tprf`,
                                  offsetX: 0,
                                  offsetY: -20,
                                  onDismiss: e.hide,
                                  placement: `top`,
                                  safeArea: !0,
                                  zIndex: 11,
                                  children: d(Jt, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: rn,
                                    className: `framer-k3cnyf`,
                                    exit: nn,
                                    initial: an,
                                    layoutDependency: k,
                                    layoutId: `d1WqsDUCv`,
                                    ref: L,
                                    role: `dialog`,
                                    style: {
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                    children: d(p.div, {
                                      className: `framer-atyvoy`,
                                      "data-framer-name": `Tooltip`,
                                      layoutDependency: k,
                                      layoutId: `lEfxstVPR`,
                                      style: {
                                        backdropFilter: `blur(5px)`,
                                        backgroundColor: `var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.2))`,
                                        borderBottomLeftRadius: 1e4,
                                        borderBottomRightRadius: 1e4,
                                        borderTopLeftRadius: 1e4,
                                        borderTopRightRadius: 1e4,
                                        WebkitBackdropFilter: `blur(5px)`,
                                      },
                                      children: d(B, {
                                        __fromCanvasComponent: !0,
                                        children: d(i, {
                                          children: d(p.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `12px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                                            },
                                            children: `Sky Blue`,
                                          }),
                                        }),
                                        className: `framer-105cw4h`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: k,
                                        layoutId: `AdDhWYzzf`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
                            }),
                          }),
                        }),
                    }),
                    d(on, {
                      blockDocumentScrolling: !1,
                      dismissWithEsc: !1,
                      children: (e) =>
                        d(l, {
                          children: d(Zt, {
                            className: `framer-174dc34`,
                            "data-border": !0,
                            "data-framer-name": `Color Swatch`,
                            "data-highlight": !0,
                            id: `${g}-174dc34`,
                            layoutDependency: k,
                            layoutId: `G6c3mmKje`,
                            onMouseEnter: M({ overlay: e }),
                            onTap: ae,
                            ref: R,
                            style: {
                              "--border-bottom-width": `2.5px`,
                              "--border-color": `var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0))`,
                              "--border-left-width": `2.5px`,
                              "--border-right-width": `2.5px`,
                              "--border-style": `solid`,
                              "--border-top-width": `2.5px`,
                              backgroundColor: `var(--token-e109c2ad-518a-4162-a56d-717528e3b2d7, rgb(255, 162, 48))`,
                              borderBottomLeftRadius: `100%`,
                              borderBottomRightRadius: `100%`,
                              borderTopLeftRadius: `100%`,
                              borderTopRightRadius: `100%`,
                              boxShadow: `0px 0px 0px 1px var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0))`,
                            },
                            variants: {
                              Pp8oChv_V: { boxShadow: `0px 0px 0px 1px rgba(255, 255, 255, 0)` },
                              Qmz_V_cpa: { boxShadow: `0px 0px 0px 1px rgb(255, 255, 255)` },
                            },
                            children: d(ee, {
                              children:
                                e.visible &&
                                d(ue, {
                                  alignment: `center`,
                                  anchorRef: R,
                                  className: T(P, b),
                                  collisionDetection: !0,
                                  collisionDetectionPadding: 20,
                                  "data-framer-portal-id": `${g}-174dc34`,
                                  offsetX: 0,
                                  offsetY: -20,
                                  onDismiss: e.hide,
                                  placement: `top`,
                                  safeArea: !0,
                                  zIndex: 11,
                                  children: d(Jt, {
                                    __perspectiveFX: !1,
                                    __smartComponentFX: !0,
                                    __targetOpacity: 1,
                                    animate: rn,
                                    className: `framer-1xbdt7b`,
                                    exit: nn,
                                    initial: an,
                                    layoutDependency: k,
                                    layoutId: `SjKRIDfzr`,
                                    ref: le,
                                    role: `dialog`,
                                    style: {
                                      borderBottomLeftRadius: 10,
                                      borderBottomRightRadius: 10,
                                      borderTopLeftRadius: 10,
                                      borderTopRightRadius: 10,
                                    },
                                    children: d(p.div, {
                                      className: `framer-1j3sr15`,
                                      "data-framer-name": `Tooltip`,
                                      layoutDependency: k,
                                      layoutId: `o9CtQIKYo`,
                                      style: {
                                        backdropFilter: `blur(5px)`,
                                        backgroundColor: `var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.2))`,
                                        borderBottomLeftRadius: 1e4,
                                        borderBottomRightRadius: 1e4,
                                        borderTopLeftRadius: 1e4,
                                        borderTopRightRadius: 1e4,
                                        WebkitBackdropFilter: `blur(5px)`,
                                      },
                                      children: d(B, {
                                        __fromCanvasComponent: !0,
                                        children: d(i, {
                                          children: d(p.p, {
                                            dir: `auto`,
                                            style: {
                                              "--font-selector": `SW50ZXItTWVkaXVt`,
                                              "--framer-font-size": `12px`,
                                              "--framer-font-weight": `500`,
                                              "--framer-letter-spacing": `-0.02em`,
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                                            },
                                            children: `Orange`,
                                          }),
                                        }),
                                        className: `framer-uz1qxu`,
                                        fonts: [`Inter-Medium`],
                                        layoutDependency: k,
                                        layoutId: `HxSAhnBfb`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                                          "--framer-link-text-decoration": `underline`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  }),
                                }),
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
          `.framer-iIFm0.framer-1sy4vxm, .framer-iIFm0 .framer-1sy4vxm { display: block; }`,
          `.framer-iIFm0.framer-1v7trr { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: 30px; justify-content: center; overflow: visible; padding: 8px; position: relative; width: min-content; }`,
          `.framer-iIFm0 .framer-rm2iet, .framer-iIFm0 .framer-p8tprf, .framer-iIFm0 .framer-174dc34 { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 14px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 14px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-iIFm0 .framer-18x2w1b, .framer-iIFm0 .framer-k3cnyf, .framer-iIFm0 .framer-1xbdt7b { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-iIFm0 .framer-19dwgw8, .framer-iIFm0 .framer-atyvoy, .framer-iIFm0 .framer-1j3sr15 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 3px 10px 3px 10px; position: relative; width: min-content; }`,
          `.framer-iIFm0 .framer-hqq4pa, .framer-iIFm0 .framer-105cw4h, .framer-iIFm0 .framer-uz1qxu { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-iIFm0[data-border="true"]::after, .framer-iIFm0 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-iIFm0`
      )),
      (K.displayName = `Color Switcher`),
      (K.defaultProps = { height: 30, width: 70 }),
      j(K, {
        variant: {
          options: [`hMR2Eczfy`, `Qmz_V_cpa`, `Pp8oChv_V`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      O(
        K,
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
                url: `../../assets/fonts/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/6mJuEAguuIuMog10gGvH5d3cl8.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/UjlFhCnUjxhNfep4oYBPqnEssyo.woff2`,
                weight: `500`,
              },
              {
                cssFamilyName: `Inter`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/DolVirEGb34pEXEp8t8FQBSK4.woff2`,
                weight: `500`,
              },
            ],
          },
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (fn = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerktCuW9AO8`,
            slots: [],
            annotations: {
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","fixed"]},"Qmz_V_cpa":{"layout":["auto","fixed"]},"Pp8oChv_V":{"layout":["auto","fixed"]}}}`,
              framerAutoSizeImages: `true`,
              framerDisplayContentsDiv: `false`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerIntrinsicHeight: `30`,
              framerIntrinsicWidth: `70`,
              framerColorSyntax: `true`,
              framerContractVersion: `1`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  mn = e({ __FramerMetadata__: () => Tn, default: () => q });
function hn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  q,
  Tn,
  En = t(() => {
    (c(),
      I(),
      h(),
      n(),
      ot(),
      (gn = [`sme0MR6xw`, `eUP3f9iaq`, `nr_UQipkw`]),
      (_n = `framer-j1vZY`),
      (vn = {
        eUP3f9iaq: `framer-v-x7chn9`,
        nr_UQipkw: `framer-v-epi6ln`,
        sme0MR6xw: `framer-v-1r25u9g`,
      }),
      (yn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (bn = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (xn = { "Sky Blue": `nr_UQipkw`, Beige: `sme0MR6xw`, Orange: `eUP3f9iaq` }),
      (Sn = p.create(i)),
      (Cn = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        variant: xn[i.variant] ?? i.variant ?? `sme0MR6xw`,
        ZPdhXCb4b: n ?? i.ZPdhXCb4b ?? `Air Flexs`,
      })),
      (wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = E(
        u(function (e, t) {
          let n = s(null),
            a = t ?? n,
            o = r(),
            { activeLocale: c, setLocale: l } = re();
          oe();
          let { style: u, className: f, layoutId: m, variant: ee, ZPdhXCb4b: h, ...g } = Cn(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: ne,
              isLoading: x,
              setGestureState: C,
              setVariant: w,
              variants: E,
            } = S({
              cycleOrder: gn,
              defaultVariant: `sme0MR6xw`,
              ref: a,
              variant: ee,
              variantClassNames: vn,
            }),
            D = wn(e, E),
            O = T(_n, lt);
          return d(te, {
            id: m ?? o,
            children: d(Sn, {
              animate: E,
              initial: !1,
              children: d(bn, {
                value: yn,
                children: d(p.div, {
                  ...g,
                  ...b,
                  className: T(O, `framer-1r25u9g`, f, v),
                  "data-framer-name": `Beige`,
                  layoutDependency: D,
                  layoutId: `sme0MR6xw`,
                  ref: a,
                  style: { ...u },
                  ...hn(
                    {
                      eUP3f9iaq: { "data-framer-name": `Orange` },
                      nr_UQipkw: { "data-framer-name": `Sky Blue` },
                    },
                    _,
                    ne
                  ),
                  children: d(B, {
                    __fromCanvasComponent: !0,
                    children: d(i, {
                      children: d(p.h1, {
                        className: `framer-styles-preset-1r5o7uy`,
                        "data-styles-preset": `X4l3QYsOx`,
                        dir: `auto`,
                        style: {
                          "--framer-text-color": `var(--extracted-gdpscs, var(--token-86f4ddbd-7b32-4e2b-b915-97c05602f890, rgb(227, 207, 179)))`,
                        },
                        children: `Air Flexs`,
                      }),
                    }),
                    className: `framer-1ps3hy6`,
                    "data-framer-name": `Title`,
                    "data-selection": !0,
                    fonts: [`Inter`],
                    layoutDependency: D,
                    layoutId: `eJ1RzjNGY`,
                    style: {
                      "--extracted-gdpscs": `var(--token-86f4ddbd-7b32-4e2b-b915-97c05602f890, rgb(227, 207, 179))`,
                      "--framer-paragraph-spacing": `0px`,
                    },
                    text: h,
                    variants: {
                      eUP3f9iaq: {
                        "--extracted-gdpscs": `var(--token-1c027cd7-e03b-4f22-814c-2a2978a206bd, rgb(255, 193, 117))`,
                      },
                      nr_UQipkw: {
                        "--extracted-gdpscs": `var(--token-14b8f2c3-8112-4af3-9cca-76c5a5c29424, rgb(145, 217, 255))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...hn(
                      {
                        eUP3f9iaq: {
                          children: d(i, {
                            children: d(p.h1, {
                              className: `framer-styles-preset-1r5o7uy`,
                              "data-styles-preset": `X4l3QYsOx`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-gdpscs, var(--token-1c027cd7-e03b-4f22-814c-2a2978a206bd, rgb(255, 193, 117)))`,
                              },
                              children: `Air Flexs`,
                            }),
                          }),
                        },
                        nr_UQipkw: {
                          children: d(i, {
                            children: d(p.h1, {
                              className: `framer-styles-preset-1r5o7uy`,
                              "data-styles-preset": `X4l3QYsOx`,
                              dir: `auto`,
                              style: {
                                "--framer-text-color": `var(--extracted-gdpscs, var(--token-14b8f2c3-8112-4af3-9cca-76c5a5c29424, rgb(145, 217, 255)))`,
                              },
                              children: `Air Flexs`,
                            }),
                          }),
                        },
                      },
                      _,
                      ne
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-j1vZY.framer-umtv27, .framer-j1vZY .framer-umtv27 { display: block; }`,
          `.framer-j1vZY.framer-1r25u9g { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 220px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 788px; }`,
          `.framer-j1vZY .framer-1ps3hy6 { --selection-background-color: rgba(227, 207, 179, 0.5); --selection-color: var(--token-86f4ddbd-7b32-4e2b-b915-97c05602f890, #e3cfb3) /* {"name":"Text Beige"} */; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-j1vZY.framer-v-x7chn9 .framer-1ps3hy6 { --selection-color: var(--token-1c027cd7-e03b-4f22-814c-2a2978a206bd, #ffc175) /* {"name":"Text Orange"} */; }`,
          `.framer-j1vZY.framer-v-epi6ln .framer-1ps3hy6 { --selection-background-color: rgba(145, 217, 255, 0.5); --selection-color: var(--token-14b8f2c3-8112-4af3-9cca-76c5a5c29424, #91d9ff) /* {"name":"Text Sky Blue"} */; }`,
          ...st,
          `.framer-j1vZY[data-selection="true"] * ::selection, .framer-j1vZY [data-selection="true"] * ::selection { color: var(--selection-color, none); background-color: var(--selection-background-color, none); }`,
        ],
        `framer-j1vZY`
      )),
      (q.displayName = `Hero Title`),
      (q.defaultProps = { height: 220, width: 788 }),
      j(q, {
        variant: {
          options: [`sme0MR6xw`, `eUP3f9iaq`, `nr_UQipkw`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: V.Enum,
        },
        ZPdhXCb4b: {
          defaultValue: `Air Flexs`,
          displayTextArea: !1,
          title: `Title`,
          type: V.String,
        },
        onZPdhXCb4bChange: { changes: `ZPdhXCb4b`, type: V.ChangeHandler },
      }),
      O(
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
            ],
          },
          ...H(ct),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Tn = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `Framern0v8zOHwO`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerIntrinsicHeight: `220`,
              framerIntrinsicWidth: `788`,
              framerImmutableVariables: `true`,
              framerDisplayContentsDiv: `false`,
              framerColorSyntax: `true`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"eUP3f9iaq":{"layout":["fixed","fixed"]},"nr_UQipkw":{"layout":["fixed","fixed"]}}}`,
              framerAutoSizeImages: `true`,
              framerVariables: `{"ZPdhXCb4b":"title"}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Dn,
  On,
  kn,
  An,
  jn = t(() => {
    (c(),
      I(),
      n(),
      (Dn = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M 0 20 C 0 8.954 8.954 0 20 0 L 70 0 C 81.046 0 90 8.954 90 20 L 90 70 C 90 81.046 81.046 90 70 90 L 20 90 C 8.954 90 0 81.046 0 70 Z" fill="transparent" height="90px" id="MbysBnH8U" stroke-dasharray="0" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="4" stroke-width="9" stroke="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" transform="translate(5 5)" width="90px"/><path d="M 44.857 4.984 L 44.857 8.309 C 44.857 17.483 37.42 24.921 28.245 24.921 L 26.58 24.921 C 17.406 24.921 9.968 17.483 9.968 8.309 L 9.968 4.984 C 9.968 2.231 7.737 0 4.984 0 C 2.231 0 0 2.231 0 4.984 L 0 8.049 C 0 22.872 12.017 34.889 26.84 34.889 L 27.986 34.889 C 42.809 34.889 54.826 22.872 54.826 8.049 L 54.826 4.984 C 54.826 2.231 52.594 0 49.841 0 C 47.089 0 44.857 2.231 44.857 4.984 Z" fill="var(--118a55, var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)))" height="34.888999999999996px" id="yJEqThAF9" transform="translate(22.5 24.222)" width="54.82557142857195px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (On = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? d(p.div, { ...a, layoutId: r, ref: t }) : d(`div`, { ...a, ref: t });
      })),
      (kn = ({ color: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        GaDHsaDms:
          e ?? i.GaDHsaDms ?? `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
      })),
      (An = E(
        u(function (e, t) {
          let { style: n, className: r, layoutId: i, variant: a, GaDHsaDms: o, ...s } = kn(e);
          return d(On, {
            ...s,
            className: T(`framer-3ppw5`, r),
            layoutId: i,
            ref: t,
            style: { "--118a55": o, ...n },
          });
        }),
        [
          `.framer-3ppw5 { -webkit-mask: ${Dn}; aspect-ratio: 1; background-color: var(--118a55); mask: ${Dn}; width: 100px; }`,
        ],
        `framer-3ppw5`
      )),
      (An.displayName = `Shopping Bag`),
      j(An, {
        GaDHsaDms: {
          defaultValue: `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0)) /* {"name":"Icon Black"} */`,
          hidden: !1,
          title: `Color`,
          type: V.Color,
        },
      }));
  }),
  Mn = e({ __FramerMetadata__: () => Un, default: () => J });
function Nn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  J,
  Un,
  Wn = t(() => {
    (c(),
      I(),
      h(),
      n(),
      (Pn = [`AOqf1darv`, `t9Opis00b`, `Qs7gZYDbr`]),
      (Fn = `framer-Ia9xc`),
      (In = {
        AOqf1darv: `framer-v-1ije16d`,
        Qs7gZYDbr: `framer-v-1pq4dpn`,
        t9Opis00b: `framer-v-1i62q2t`,
      }),
      (Ln = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Rn = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (zn = { "Sky Blue": `Qs7gZYDbr`, Beige: `AOqf1darv`, Orange: `t9Opis00b` }),
      (Bn = p.create(i)),
      (Vn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: zn[r.variant] ?? r.variant ?? `AOqf1darv`,
      })),
      (Hn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = E(
        u(function (e, t) {
          let n = s(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: c } = re();
          oe();
          let { style: l, className: u, layoutId: f, variant: m, ...ee } = Vn(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: y,
              isLoading: b,
              setGestureState: ne,
              setVariant: x,
              variants: C,
            } = S({
              cycleOrder: Pn,
              defaultVariant: `AOqf1darv`,
              ref: i,
              variant: m,
              variantClassNames: In,
            }),
            w = Hn(e, C),
            E = T(Fn);
          return d(te, {
            id: f ?? a,
            children: d(Bn, {
              animate: C,
              initial: !1,
              children: d(Rn, {
                value: Ln,
                children: d(p.div, {
                  ...ee,
                  ...v,
                  className: T(E, `framer-1ije16d`, u, g),
                  "data-framer-name": `Beige`,
                  layoutDependency: w,
                  layoutId: `AOqf1darv`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-388df0dc-be7c-4b9c-99ff-20b03d80e91a, rgb(194, 169, 134))`,
                    borderBottomLeftRadius: `100%`,
                    borderBottomRightRadius: `100%`,
                    borderTopLeftRadius: `100%`,
                    borderTopRightRadius: `100%`,
                    ...l,
                  },
                  variants: {
                    Qs7gZYDbr: {
                      backgroundColor: `var(--token-3ee2d369-5709-489b-affd-4ddf13e2421b, rgb(145, 217, 255))`,
                    },
                    t9Opis00b: {
                      backgroundColor: `var(--token-0811ed08-71ff-4889-9a2e-53a63a755add, rgb(255, 195, 122))`,
                    },
                  },
                  ...Nn(
                    {
                      Qs7gZYDbr: { "data-framer-name": `Sky Blue` },
                      t9Opis00b: { "data-framer-name": `Orange` },
                    },
                    h,
                    y
                  ),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Ia9xc.framer-8vak4o, .framer-Ia9xc .framer-8vak4o { display: block; }`,
          `.framer-Ia9xc.framer-1ije16d { height: 111px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 111px; will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-Ia9xc`
      )),
      (J.displayName = `Buy Now Button Bubble`),
      (J.defaultProps = { height: 111, width: 111 }),
      j(J, {
        variant: {
          options: [`AOqf1darv`, `t9Opis00b`, `Qs7gZYDbr`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      O(J, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (Un = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FramerF6mcHeKS5`,
            slots: [],
            annotations: {
              framerImmutableVariables: `true`,
              framerIntrinsicHeight: `111`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"t9Opis00b":{"layout":["fixed","fixed"]},"Qs7gZYDbr":{"layout":["fixed","fixed"]}}}`,
              framerContractVersion: `1`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `111`,
              framerComponentViewportWidth: `true`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Gn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kn,
  qn,
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
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  Y,
  dr = t(() => {
    (c(),
      I(),
      h(),
      n(),
      rt(),
      Se(),
      jn(),
      Ce(),
      Wn(),
      (Kn = w(An)),
      (qn = w(Ee)),
      (Jn = P(me(Ee))),
      (Yn = w(J)),
      (Xn = x(N(J, { nodeId: `sqQgy4iLX`, override: W, scopeId: `tiRz_Cwp2` }), Mn)),
      (Zn = { DUh9czCMs: { pressed: !0 } }),
      (Qn = [`hB5sJux9_`, `rO5JFb8be`, `XzOanXB0Z`, `DUh9czCMs`]),
      ($n = `framer-qJH8W`),
      (er = {
        DUh9czCMs: `framer-v-bmi4up`,
        hB5sJux9_: `framer-v-oonrc8`,
        rO5JFb8be: `framer-v-1sjdnct`,
        XzOanXB0Z: `framer-v-1ta2x5h`,
      }),
      (tr = { duration: 0, type: `tween` }),
      (nr = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (rr = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: nr,
        x: 0,
        y: 0,
      }),
      (ir = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: -20,
        y: 0,
      }),
      (ar = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (or = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (sr = {
        "Animated End": `XzOanXB0Z`,
        "Animated Start": `hB5sJux9_`,
        Animated: `rO5JFb8be`,
        Static: `DUh9czCMs`,
      }),
      (cr = p.create(i)),
      (lr = ({ height: e, id: t, link: n, width: r, ...i }) => ({
        ...i,
        LtuWPY8RR: n ?? i.LtuWPY8RR,
        variant: sr[i.variant] ?? i.variant ?? `hB5sJux9_`,
      })),
      (ur = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = E(
        u(function (e, t) {
          let n = s(null),
            a = t ?? n,
            o = r(),
            { activeLocale: c, setLocale: l } = re(),
            u = oe(),
            { style: m, className: ee, layoutId: h, variant: g, LtuWPY8RR: v, ...y } = lr(e),
            {
              baseVariant: b,
              classNames: ne,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = S({
              cycleOrder: Qn,
              defaultVariant: `hB5sJux9_`,
              enabledGestures: Zn,
              ref: a,
              variant: g,
              variantClassNames: er,
            }),
            j = ur(e, A),
            { activeVariantCallback: ie, delay: M } = ce(b),
            N = ie(async (...e) => {
              (O({ isHovered: !0 }), k(`rO5JFb8be`));
            }),
            ae = ie(async (...e) => {
              (O({ isHovered: !1 }), k(`XzOanXB0Z`));
            });
          _(b, {
            XzOanXB0Z: ie(async (...e) => {
              await M(() => k(`hB5sJux9_`, !0), 400);
            }),
          });
          let P = T($n, xe),
            F = () => b === `rO5JFb8be`;
          return d(te, {
            id: h ?? o,
            children: d(cr, {
              animate: A,
              initial: !1,
              children: d(or, {
                value: tr,
                ...Gn({ rO5JFb8be: { value: nr }, XzOanXB0Z: { value: nr } }, b, w),
                children: d(pe, {
                  href: v,
                  motionChild: !0,
                  nodeId: `hB5sJux9_`,
                  openInNewTab: !1,
                  scopeId: `tiRz_Cwp2`,
                  children: f(p.a, {
                    ...y,
                    ...C,
                    className: `${T(P, `framer-oonrc8`, ee, ne)} framer-1mprnp8`,
                    "data-framer-name": `Animated Start`,
                    "data-highlight": !0,
                    layoutDependency: j,
                    layoutId: `hB5sJux9_`,
                    onMouseEnter: N,
                    ref: a,
                    style: {
                      backdropFilter: `blur(5px)`,
                      backgroundColor: `var(--token-0e502221-6f42-4f77-a99f-3a117329e30d, rgba(0, 0, 0, 0.2))`,
                      borderBottomLeftRadius: 1e3,
                      borderBottomRightRadius: 1e3,
                      borderTopLeftRadius: 1e3,
                      borderTopRightRadius: 1e3,
                      WebkitBackdropFilter: `blur(5px)`,
                      ...m,
                    },
                    variants: {
                      "DUh9czCMs-pressed": {
                        backgroundColor: `var(--token-e45124b5-8b43-4c5c-9f28-dedcc4dd9cdf, rgba(0, 0, 0, 0.3))`,
                      },
                    },
                    ...Gn(
                      {
                        "DUh9czCMs-pressed": {
                          "data-framer-name": void 0,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                        DUh9czCMs: {
                          "data-framer-name": `Static`,
                          "data-highlight": void 0,
                          onMouseEnter: void 0,
                        },
                        rO5JFb8be: { "data-framer-name": `Animated`, onMouseLeave: ae },
                        XzOanXB0Z: { "data-framer-name": `Animated End` },
                      },
                      b,
                      w
                    ),
                    children: [
                      d(An, {
                        animated: !0,
                        className: `framer-1lm7ara`,
                        layoutDependency: j,
                        layoutId: `Zrt5gsQia`,
                        style: {
                          "--118a55": `var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))`,
                          rotate: 0,
                        },
                        variants: {
                          DUh9czCMs: { rotate: 0 },
                          rO5JFb8be: { rotate: -8 },
                          XzOanXB0Z: { rotate: 0 },
                        },
                      }),
                      d(B, {
                        __fromCanvasComponent: !0,
                        children: d(i, {
                          children: d(p.p, {
                            className: `framer-styles-preset-1v7qm6`,
                            "data-styles-preset": `ocOde6Lm9`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                            },
                            children: `Buy now`,
                          }),
                        }),
                        className: `framer-74k20e`,
                        fonts: [`Inter`],
                        layoutDependency: j,
                        layoutId: `G5V3bML4R`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      F() &&
                        d(Jn, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: rr,
                          animated: !0,
                          className: `framer-186suw4`,
                          "data-framer-appear-id": `186suw4`,
                          initial: ir,
                          layoutDependency: j,
                          layoutId: `tP_nrBCll`,
                          optimized: !0,
                          style: {
                            "--118a55": `var(--token-c4652695-7f66-461d-9ec5-551c9e0af1d0, rgb(255, 255, 255))`,
                          },
                        }),
                      d(R, {
                        height: 109,
                        width: `calc(${u?.width || `100vw`} * 1.1989)`,
                        y: (u?.y || 0) + ((u?.height || 27.5) * 1.9636363636363638 - 54.5),
                        ...Gn(
                          {
                            rO5JFb8be: {
                              y: (u?.y || 0) + ((u?.height || 27.5) * 0.5090909090909093 - 54.5),
                            },
                            XzOanXB0Z: {
                              height: 108.5,
                              y: (u?.y || 0) + ((u?.height || 27.5) * -0.9454545454545452 - 54.25),
                            },
                          },
                          b,
                          w
                        ),
                        children: d(D, {
                          className: `framer-1akthty-container`,
                          layoutDependency: j,
                          layoutId: `sqQgy4iLX-container`,
                          nodeId: `sqQgy4iLX`,
                          rendersWithMotion: !0,
                          scopeId: `tiRz_Cwp2`,
                          children: d(Xn, {
                            height: `100%`,
                            id: `sqQgy4iLX`,
                            layoutId: `sqQgy4iLX`,
                            style: { height: `100%`, width: `100%` },
                            variant: ar(`AOqf1darv`),
                            width: `100%`,
                          }),
                        }),
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
          `.framer-qJH8W.framer-1mprnp8, .framer-qJH8W .framer-1mprnp8 { display: block; }`,
          `.framer-qJH8W.framer-oonrc8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 6px 12px 6px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-qJH8W .framer-1lm7ara { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; z-index: 2; }`,
          `.framer-qJH8W .framer-74k20e { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
          `.framer-qJH8W .framer-186suw4 { flex: none; height: var(--framer-aspect-ratio-supported, 10px); position: relative; width: 10px; z-index: 2; }`,
          `.framer-qJH8W .framer-1akthty-container { flex: none; height: 109px; left: calc(-60.7734806629834% - 119.88950276243094% / 2); position: absolute; top: calc(196.36363636363637% - 109px / 2); width: 120%; z-index: 1; }`,
          `.framer-qJH8W.framer-v-1sjdnct .framer-1akthty-container { left: calc(50.828729281767984% - 119.88950276243094% / 2); top: calc(50.90909090909093% - 109px / 2); }`,
          `.framer-qJH8W.framer-v-1ta2x5h .framer-1akthty-container { height: 109px; left: calc(160.22099447513813% - 119.88950276243094% / 2); top: calc(-94.54545454545452% - 108.5px / 2); }`,
          ...Te,
        ],
        `framer-qJH8W`
      )),
      (Y.displayName = `Animated Buy Now Button`),
      (Y.defaultProps = { height: 27.5, width: 92.5 }),
      j(Y, {
        variant: {
          options: [`hB5sJux9_`, `rO5JFb8be`, `XzOanXB0Z`, `DUh9czCMs`],
          optionTitles: [`Animated Start`, `Animated`, `Animated End`, `Static`],
          title: `Variant`,
          type: V.Enum,
        },
        LtuWPY8RR: { title: `Link`, type: V.Link },
      }),
      O(
        Y,
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
          ...Kn,
          ...qn,
          ...Yn,
          ...H(De),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Y.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(J, {}, t)])) }));
  }),
  fr = e({ __FramerMetadata__: () => Or, default: () => X });
function pr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er,
  Dr,
  X,
  Or,
  kr = t(() => {
    (c(),
      I(),
      h(),
      n(),
      ke(),
      ht(),
      dr(),
      (mr = w(Y)),
      (hr = [`pU3JDp4XQ`, `i8LqbqhM_`, `XvtF263f1`]),
      (gr = `framer-3yalT`),
      (_r = {
        i8LqbqhM_: `framer-v-vbkrmx`,
        pU3JDp4XQ: `framer-v-eaa3qa`,
        XvtF263f1: `framer-v-v1ejny`,
      }),
      (vr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yr = (e) => !e),
      (br = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? e.toLowerCase() === t.toLowerCase()
          : e === t),
      (xr = (e, t) => (e ? `DUh9czCMs` : `hB5sJux9_`)),
      (Sr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Cr = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (wr = { "Sky Blue": `XvtF263f1`, Beige: `pU3JDp4XQ`, Orange: `i8LqbqhM_` }),
      (Tr = p.create(i)),
      (Er = ({ height: e, id: t, phoneBreakpoint: n, width: r, ...i }) => ({
        ...i,
        PRmy6BIEU: n ?? i.PRmy6BIEU,
        variant: wr[i.variant] ?? i.variant ?? `pU3JDp4XQ`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = E(
        u(function (e, t) {
          let n = s(null),
            a = t ?? n,
            o = r(),
            { activeLocale: c, setLocale: l } = re(),
            u = oe(),
            { style: m, className: ee, layoutId: h, variant: g, PRmy6BIEU: _, ...v } = Er(e),
            {
              baseVariant: y,
              classNames: b,
              clearLoadingGesture: ne,
              gestureHandlers: x,
              gestureVariant: C,
              isLoading: w,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = S({
              cycleOrder: hr,
              defaultVariant: `pU3JDp4XQ`,
              ref: a,
              variant: g,
              variantClassNames: _r,
            }),
            j = Dr(e, k),
            M = T(gr, Me, dt),
            N = yr(_);
          return (
            ie(),
            d(te, {
              id: h ?? o,
              children: d(Tr, {
                animate: k,
                initial: !1,
                children: d(Cr, {
                  value: vr,
                  children: f(p.div, {
                    ...v,
                    ...x,
                    className: T(M, `framer-eaa3qa`, ee, b),
                    "data-framer-name": `Beige`,
                    layoutDependency: j,
                    layoutId: `pU3JDp4XQ`,
                    ref: a,
                    style: { ...m },
                    ...pr(
                      {
                        i8LqbqhM_: { "data-framer-name": `Orange` },
                        XvtF263f1: { "data-framer-name": `Sky Blue` },
                      },
                      y,
                      C
                    ),
                    children: [
                      N !== !1 &&
                        f(p.div, {
                          className: `framer-dg0nxu`,
                          "data-framer-name": `Title & Description`,
                          layoutDependency: j,
                          layoutId: `sFnbRm3ay`,
                          children: [
                            d(B, {
                              __fromCanvasComponent: !0,
                              children: d(i, {
                                children: d(p.p, {
                                  className: `framer-styles-preset-5rfdkx`,
                                  "data-styles-preset": `CT_DBbR5R`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: `Beige`,
                                }),
                              }),
                              className: `framer-58erhv`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `PcWmucZLM`,
                              style: {
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...pr(
                                {
                                  i8LqbqhM_: {
                                    children: d(i, {
                                      children: d(p.p, {
                                        className: `framer-styles-preset-5rfdkx`,
                                        "data-styles-preset": `CT_DBbR5R`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Orange`,
                                      }),
                                    }),
                                  },
                                  XvtF263f1: {
                                    children: d(i, {
                                      children: d(p.p, {
                                        className: `framer-styles-preset-5rfdkx`,
                                        "data-styles-preset": `CT_DBbR5R`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `Sky Blue`,
                                      }),
                                    }),
                                  },
                                },
                                y,
                                C
                              ),
                            }),
                            d(B, {
                              __fromCanvasComponent: !0,
                              children: d(i, {
                                children: f(p.p, {
                                  className: `framer-styles-preset-y1k16k`,
                                  "data-styles-preset": `WIiaJAMT7`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `left` },
                                  children: [
                                    d(p.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1w3ko1f, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                                      },
                                      children: `A comfort elegance that `,
                                    }),
                                    d(p.br, {}),
                                    d(p.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-c9yw3e, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                                      },
                                      children: `your foot needs.`,
                                    }),
                                  ],
                                }),
                              }),
                              className: `framer-1s453pr`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `rbqSTBo9n`,
                              style: {
                                "--extracted-1w3ko1f": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                "--extracted-c9yw3e": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      d(A, {
                        links: [
                          {
                            href: {
                              pathVariables: { wjbVR4laR: `nyke-air-flex-beige` },
                              unresolvedPathSlugs: {
                                wjbVR4laR: {
                                  collectionId: `wWC8EGMFo`,
                                  collectionItemId: `uhsVpGOLR`,
                                },
                              },
                              webPageId: `fIwdA4CC3`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              pathVariables: { wjbVR4laR: `nyke-air-flex-orange` },
                              unresolvedPathSlugs: {
                                wjbVR4laR: {
                                  collectionId: `wWC8EGMFo`,
                                  collectionItemId: `S2zRi_dPz`,
                                },
                              },
                              webPageId: `fIwdA4CC3`,
                            },
                            implicitPathVariables: void 0,
                          },
                          {
                            href: {
                              pathVariables: { wjbVR4laR: `nyke-air-flex-sky-blue` },
                              unresolvedPathSlugs: {
                                wjbVR4laR: {
                                  collectionId: `wWC8EGMFo`,
                                  collectionItemId: `aDHvRnr63`,
                                },
                              },
                              webPageId: `fIwdA4CC3`,
                            },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          d(R, {
                            height: 27,
                            y: (u?.y || 0) + 0 + 0,
                            children: d(D, {
                              className: `framer-5ug9jl-container`,
                              layoutDependency: j,
                              layoutId: `eRGDaWNg0-container`,
                              nodeId: `eRGDaWNg0`,
                              rendersWithMotion: !0,
                              scopeId: `SUOQExBkZ`,
                              children: d(Y, {
                                height: `100%`,
                                id: `eRGDaWNg0`,
                                layoutId: `eRGDaWNg0`,
                                LtuWPY8RR: e[0],
                                variant: Sr(xr(br(_, !0), c)),
                                width: `100%`,
                                ...pr(
                                  {
                                    i8LqbqhM_: { LtuWPY8RR: e[1] },
                                    XvtF263f1: { LtuWPY8RR: e[2] },
                                  },
                                  y,
                                  C
                                ),
                              }),
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
          `.framer-3yalT.framer-e9pcxu, .framer-3yalT .framer-e9pcxu { display: block; }`,
          `.framer-3yalT.framer-eaa3qa { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3yalT .framer-dg0nxu { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-3yalT .framer-58erhv { align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
          `.framer-3yalT .framer-1s453pr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-3yalT .framer-5ug9jl-container { flex: none; height: auto; position: relative; width: auto; }`,
          ...Ae,
          ...ut,
        ],
        `framer-3yalT`
      )),
      (X.displayName = `Hero Shoe CTA`),
      (X.defaultProps = { height: 109.5, width: 145.5 }),
      j(X, {
        variant: {
          options: [`pU3JDp4XQ`, `i8LqbqhM_`, `XvtF263f1`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: V.Enum,
        },
        PRmy6BIEU: { defaultValue: !1, title: `Phone Breakpoint`, type: V.Boolean },
        onPRmy6BIEUChange: { changes: `PRmy6BIEU`, type: V.ChangeHandler },
      }),
      O(
        X,
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
          ...mr,
          ...H(je),
          ...H(pt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(Y, {}, t)])) }),
      (Or = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerSUOQExBkZ`,
            slots: [],
            annotations: {
              framerContractVersion: `1`,
              framerVariables: `{"PRmy6BIEU":"phoneBreakpoint"}`,
              framerIntrinsicHeight: `109.5`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"i8LqbqhM_":{"layout":["auto","auto"]},"XvtF263f1":{"layout":["auto","auto"]}}}`,
              framerComponentViewportWidth: `true`,
              framerAutoSizeImages: `true`,
              framerImmutableVariables: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerIntrinsicWidth: `145.5`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  }),
  Ar = e({ __FramerMetadata__: () => Vr, default: () => Z });
function jr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br,
  Z,
  Vr,
  Hr = t(() => {
    (c(),
      I(),
      h(),
      n(),
      (Mr = [`Bwu1fW1eT`, `MeiJ2FvC3`, `mEB3wbfeo`]),
      (Nr = `framer-Gj2Iu`),
      (Pr = {
        Bwu1fW1eT: `framer-v-bscnd`,
        mEB3wbfeo: `framer-v-hzw8pc`,
        MeiJ2FvC3: `framer-v-ezw5zh`,
      }),
      (Fr = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Ir = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (Lr = { "Sky Blue": `mEB3wbfeo`, Beige: `Bwu1fW1eT`, Orange: `MeiJ2FvC3` }),
      (Rr = p.create(i)),
      (zr = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Lr[r.variant] ?? r.variant ?? `Bwu1fW1eT`,
      })),
      (Br = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = E(
        u(function (e, t) {
          let n = s(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: c } = re(),
            l = oe(),
            { style: u, className: m, layoutId: ee, variant: h, ...g } = zr(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: ne,
              isLoading: x,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = S({
              cycleOrder: Mr,
              defaultVariant: `Bwu1fW1eT`,
              ref: i,
              variant: h,
              variantClassNames: Pr,
            }),
            O = Br(e, D),
            k = T(Nr);
          return d(te, {
            id: ee ?? a,
            children: d(Rr, {
              animate: D,
              initial: !1,
              children: d(Ir, {
                value: Fr,
                children: f(p.div, {
                  ...g,
                  ...b,
                  className: T(k, `framer-bscnd`, m, v),
                  "data-framer-name": `Beige`,
                  layoutDependency: O,
                  layoutId: `Bwu1fW1eT`,
                  ref: i,
                  style: { ...u },
                  ...jr(
                    {
                      mEB3wbfeo: { "data-framer-name": `Sky Blue` },
                      MeiJ2FvC3: { "data-framer-name": `Orange` },
                    },
                    _,
                    ne
                  ),
                  children: [
                    d(L, {
                      as: `figure`,
                      background: {
                        alt: `Beige Shoe`,
                        fit: `fill`,
                        loading: C(
                          (l?.y || 0) +
                            (0 + ((l?.height || 252) - 0 - ((l?.height || 252) - 0) * 1) / 2)
                        ),
                        pixelHeight: 1152,
                        pixelWidth: 1684,
                        sizes: `max(${l?.width || `100vw`}, 1px)`,
                        src: `../../assets/images/jibHbT6NjlJ5R8OtUjx2Xo908-b5feed.png`,
                        srcSet: `../../assets/images/jibHbT6NjlJ5R8OtUjx2Xo908.png 512w,../../assets/images/jibHbT6NjlJ5R8OtUjx2Xo908-007acb.png 1024w,../../assets/images/jibHbT6NjlJ5R8OtUjx2Xo908-b5feed.png 1684w`,
                      },
                      className: `framer-1cjsvng`,
                      "data-framer-name": `Beige`,
                      draggable: `false`,
                      layoutDependency: O,
                      layoutId: `WmNQL04Pp`,
                      style: { opacity: 1 },
                      variants: { mEB3wbfeo: { opacity: 0 }, MeiJ2FvC3: { opacity: 0 } },
                    }),
                    d(L, {
                      as: `figure`,
                      background: {
                        alt: `Orange Shoe`,
                        fit: `fill`,
                        loading: C((l?.y || 0) + 1),
                        pixelHeight: 1152,
                        pixelWidth: 1684,
                        sizes: l?.width || `100vw`,
                        src: `../../assets/images/E2VNYrCwgJGNo3KH94ilz3fU30-de4efe.png`,
                        srcSet: `../../assets/images/E2VNYrCwgJGNo3KH94ilz3fU30.png 512w,../../assets/images/E2VNYrCwgJGNo3KH94ilz3fU30-72e35b.png 1024w,../../assets/images/E2VNYrCwgJGNo3KH94ilz3fU30-de4efe.png 1684w`,
                      },
                      className: `framer-7tjcp5`,
                      "data-framer-name": `Orange`,
                      draggable: `false`,
                      layoutDependency: O,
                      layoutId: `eCPppvpZ8`,
                      style: { opacity: 0 },
                      variants: { MeiJ2FvC3: { opacity: 1 } },
                    }),
                    d(L, {
                      as: `figure`,
                      background: {
                        alt: `Sky Blue Shoe`,
                        fit: `fill`,
                        loading: C((l?.y || 0) + 1),
                        pixelHeight: 1138,
                        pixelWidth: 1684,
                        sizes: `calc(${l?.width || `100vw`} * 0.9905)`,
                        src: `../../assets/images/Q9BLz2ArbQeufG1cvXTiHUALA-7881f6.png`,
                        srcSet: `../../assets/images/Q9BLz2ArbQeufG1cvXTiHUALA.png 512w,../../assets/images/Q9BLz2ArbQeufG1cvXTiHUALA-817160.png 1024w,../../assets/images/Q9BLz2ArbQeufG1cvXTiHUALA-7881f6.png 1684w`,
                      },
                      className: `framer-ni8e0d`,
                      "data-framer-name": `Sky Blue`,
                      draggable: `false`,
                      layoutDependency: O,
                      layoutId: `C7USoApkt`,
                      style: { opacity: 0 },
                      variants: { mEB3wbfeo: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-Gj2Iu.framer-1my9d6b, .framer-Gj2Iu .framer-1my9d6b { display: block; }`,
          `.framer-Gj2Iu.framer-bscnd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 252px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 369px; }`,
          `.framer-Gj2Iu .framer-1cjsvng { -webkit-user-select: none; flex: 1 0 0px; height: 100%; pointer-events: none; position: relative; user-select: none; width: 1px; z-index: 3; }`,
          `.framer-Gj2Iu .framer-7tjcp5 { -webkit-user-select: none; flex: none; height: 100%; left: 0px; pointer-events: none; position: absolute; top: 1px; user-select: none; width: 100%; z-index: 3; }`,
          `.framer-Gj2Iu .framer-ni8e0d { -webkit-user-select: none; aspect-ratio: 1.4642857142857142 / 1; flex: none; height: auto; left: 2px; pointer-events: none; position: absolute; top: 1px; user-select: none; width: 99%; z-index: 3; }`,
        ],
        `framer-Gj2Iu`
      )),
      (Z.displayName = `Display Shoe`),
      (Z.defaultProps = { height: 252, width: 369 }),
      j(Z, {
        variant: {
          options: [`Bwu1fW1eT`, `MeiJ2FvC3`, `mEB3wbfeo`],
          optionTitles: [`Beige`, `Orange`, `Sky Blue`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      O(Z, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }),
      (Vr = {
        exports: {
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          default: {
            type: `reactComponent`,
            name: `FrameruirOFEYUM`,
            slots: [],
            annotations: {
              framerIntrinsicHeight: `252`,
              framerAutoSizeImages: `true`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerContractVersion: `1`,
              framerIntrinsicWidth: `369`,
              framerImmutableVariables: `true`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"MeiJ2FvC3":{"layout":["fixed","fixed"]},"mEB3wbfeo":{"layout":["fixed","fixed"]}}}`,
            },
          },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Ur(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wr,
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
  Q,
  ni = t(() => {
    (c(),
      I(),
      h(),
      n(),
      _t(),
      Ue(),
      Ce(),
      we(),
      (Wr = w(Oe)),
      (Gr = [`FZIxAnxEe`, `g1Ji0IrSm`]),
      (Kr = `framer-BBa7X`),
      (qr = { FZIxAnxEe: `framer-v-7so62r`, g1Ji0IrSm: `framer-v-i06dmu` }),
      (Jr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Yr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Xr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Zr = ({ value: e, children: t }) => {
        let n = a(m),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(m.Provider, { value: i, children: t });
      }),
      (Qr = { Primary: `FZIxAnxEe`, Secondary: `g1Ji0IrSm` }),
      ($r = p.create(i)),
      (ei = ({ height: e, id: t, image: n, link: r, tagline: i, title: a, width: o, ...s }) => ({
        ...s,
        ai_CPsLVZ: a ?? s.ai_CPsLVZ ?? `Casuals`,
        fhPuRMsJa: n ?? s.fhPuRMsJa,
        l5NssQXWN: r ?? s.l5NssQXWN,
        sB6Lx47cn: i ?? s.sB6Lx47cn ?? `Everyday`,
        variant: Qr[s.variant] ?? s.variant ?? `FZIxAnxEe`,
      })),
      (ti = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = E(
        u(function (e, t) {
          let n = s(null),
            a = t ?? n,
            o = r(),
            { activeLocale: c, setLocale: l } = re(),
            u = oe(),
            {
              style: m,
              className: ee,
              layoutId: h,
              variant: g,
              fhPuRMsJa: _,
              sB6Lx47cn: v,
              ai_CPsLVZ: y,
              l5NssQXWN: b,
              ...ne
            } = ei(e),
            {
              baseVariant: x,
              classNames: w,
              clearLoadingGesture: E,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: A,
              setGestureState: j,
              setVariant: ie,
              variants: M,
            } = S({
              cycleOrder: Gr,
              defaultVariant: `FZIxAnxEe`,
              ref: a,
              variant: g,
              variantClassNames: qr,
            }),
            N = ti(e, M),
            ae = T(Kr, Ke, bt);
          return d(te, {
            id: h ?? o,
            children: d($r, {
              animate: M,
              initial: !1,
              children: d(Zr, {
                value: Jr,
                children: f(p.div, {
                  ...ne,
                  ...O,
                  className: T(ae, `framer-7so62r`, ee, w),
                  "data-framer-name": `Primary`,
                  layoutDependency: N,
                  layoutId: `FZIxAnxEe`,
                  ref: a,
                  style: { ...m },
                  ...Ur({ g1Ji0IrSm: { "data-framer-name": `Secondary` } }, x, k),
                  children: [
                    d(L, {
                      as: `figure`,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 669,
                        intrinsicWidth: 762,
                        loading: C(
                          (u?.y || 0) +
                            (0 + ((u?.height || 583.5) - 0 - ((u?.height || 583.5) - 0) * 1) / 2)
                        ),
                        sizes: `max(${u?.width || `100vw`}, 1px)`,
                        ...Yr(_),
                      },
                      className: `framer-1yzhas9`,
                      "data-framer-name": `Image`,
                      draggable: `false`,
                      layoutDependency: N,
                      layoutId: `ZFaSISlVW`,
                      ...Ur(
                        {
                          g1Ji0IrSm: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 669,
                              intrinsicWidth: 762,
                              loading: C(
                                (u?.y || 0) +
                                  (0 + ((u?.height || 379) - 0 - ((u?.height || 379) - 0) * 1) / 2)
                              ),
                              sizes: `max(${u?.width || `100vw`}, 1px)`,
                              ...Yr(_),
                            },
                          },
                        },
                        x,
                        k
                      ),
                    }),
                    d(p.div, {
                      className: `framer-1etxdgv`,
                      "data-framer-name": `Content`,
                      layoutDependency: N,
                      layoutId: `SDGDWjSlL`,
                      style: {
                        background: `linear-gradient(180deg, var(--token-f8fea787-91d7-4f16-9ffc-1b8878b28370, rgba(255, 255, 255, 0)) 0%, var(--token-e45124b5-8b43-4c5c-9f28-dedcc4dd9cdf, rgba(0, 0, 0, 0.5)) 100%)`,
                      },
                      children: f(p.div, {
                        className: `framer-1gfhf85`,
                        "data-framer-name": `Details`,
                        layoutDependency: N,
                        layoutId: `XrEe_k9oA`,
                        children: [
                          f(p.div, {
                            className: `framer-1cdipo5`,
                            "data-framer-name": `Text`,
                            layoutDependency: N,
                            layoutId: `tMM1yAo2L`,
                            children: [
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(p.p, {
                                    className: `framer-styles-preset-1sjmy9b`,
                                    "data-styles-preset": `PXfjos31S`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                                    },
                                    children: `Everyday`,
                                  }),
                                }),
                                className: `framer-18uzs4`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `bsN77xRzg`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                  opacity: 0.8,
                                },
                                text: v,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(p.p, {
                                    className: `framer-styles-preset-kx3c0q`,
                                    "data-styles-preset": `oESEGjQit`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255)))`,
                                    },
                                    children: `Casuals`,
                                  }),
                                }),
                                className: `framer-gxtfut`,
                                fonts: [`Inter`],
                                layoutDependency: N,
                                layoutId: `qjN8fGRPW`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                text: y,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          d(R, {
                            height: 29,
                            y:
                              (u?.y || 0) +
                              0 +
                              44 +
                              ((u?.height || 583.5) * 1 - 88 - 310) +
                              0 +
                              281,
                            ...Ur(
                              {
                                g1Ji0IrSm: {
                                  y:
                                    (u?.y || 0) +
                                    0 +
                                    28 +
                                    ((u?.height || 379) * 1 - 56 - 310) +
                                    0 +
                                    281,
                                },
                              },
                              x,
                              k
                            ),
                            children: d(D, {
                              className: `framer-hay9cs-container`,
                              layoutDependency: N,
                              layoutId: `lsFlhmmbo-container`,
                              nodeId: `lsFlhmmbo`,
                              rendersWithMotion: !0,
                              scopeId: `z2ABggLcF`,
                              children: d(Oe, {
                                height: `100%`,
                                hZdVwdl_Y: !1,
                                id: `lsFlhmmbo`,
                                layoutId: `lsFlhmmbo`,
                                peKL8pfJA: Ee,
                                TDPWRYXxk: `Shop`,
                                variant: Xr(`zq5haw0aW`),
                                vFRI3q06T: b,
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
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
          `.framer-BBa7X.framer-8f5b3k, .framer-BBa7X .framer-8f5b3k { display: block; }`,
          `.framer-BBa7X.framer-7so62r { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 584px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-BBa7X .framer-1yzhas9 { -webkit-user-select: none; flex: 1 0 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-BBa7X .framer-1etxdgv { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 44px; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-BBa7X .framer-1gfhf85 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
          `.framer-BBa7X .framer-1cdipo5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-BBa7X .framer-18uzs4, .framer-BBa7X .framer-gxtfut { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-BBa7X .framer-hay9cs-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-BBa7X.framer-v-i06dmu.framer-7so62r { height: 379px; width: 390px; }`,
          `.framer-BBa7X.framer-v-i06dmu .framer-1etxdgv { padding: 28px; }`,
          ...We,
          ...vt,
        ],
        `framer-BBa7X`
      )),
      (Q.displayName = `Category Grid Item`),
      (Q.defaultProps = { height: 583.5, width: 600 }),
      j(Q, {
        variant: {
          options: [`FZIxAnxEe`, `g1Ji0IrSm`],
          optionTitles: [`Primary`, `Secondary`],
          title: `Variant`,
          type: V.Enum,
        },
        fhPuRMsJa: { title: `Image`, type: V.ResponsiveImage },
        sB6Lx47cn: {
          defaultValue: `Everyday`,
          displayTextArea: !1,
          title: `Tagline`,
          type: V.String,
        },
        onsB6Lx47cnChange: { changes: `sB6Lx47cn`, type: V.ChangeHandler },
        ai_CPsLVZ: { defaultValue: `Casuals`, displayTextArea: !1, title: `Title`, type: V.String },
        onai_CPsLVZChange: { changes: `ai_CPsLVZ`, type: V.ChangeHandler },
        l5NssQXWN: { title: `Link`, type: V.Link },
      }),
      O(
        Q,
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
          ...Wr,
          ...H(Ge),
          ...H(yt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Q.loader = { load: (e, t) => (t.locale, Promise.allSettled([v(Oe, {}, t)])) }));
  }),
  ri,
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
  gi,
  _i,
  vi,
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
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  $,
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
  ua;
t(() => {
  (c(),
    I(),
    h(),
    n(),
    Gt(),
    ye(),
    we(),
    Le(),
    Ve(),
    Qe(),
    pn(),
    En(),
    et(),
    kr(),
    $e(),
    Hr(),
    mt(),
    ni(),
    rt(),
    he(),
    ke(),
    xt(),
    Tt(),
    kt(),
    Nt(),
    Lt(),
    Fe(),
    Ie(),
    Pe(),
    Ce(),
    Vt(),
    Wt(),
    (ri = w(gt)),
    (ii = x(N(gt, { nodeId: `oWrrmAFqH`, override: W, scopeId: `augiA20Il` }), ft)),
    (ai = w(q)),
    (oi = x(N(q, { nodeId: `ZhlhZIehn`, override: W, scopeId: `augiA20Il` }), mn)),
    (si = P(me(p.div))),
    (ci = w(Z)),
    (li = x(N(Z, { nodeId: `R8HzVTp5q`, override: W, scopeId: `augiA20Il` }), Ar)),
    (ui = P(me(F))),
    (di = w(Xe)),
    (fi = x(N(Xe, { nodeId: `irEjC3wpa`, override: W, scopeId: `augiA20Il` }), qe)),
    (pi = P(L)),
    (mi = P(me(L))),
    (hi = w(K)),
    (gi = x(N(K, { nodeId: `WhMl9F5b6`, override: W, scopeId: `augiA20Il` }), Kt)),
    (_i = w(X)),
    (vi = x(N(X, { nodeId: `HviRObdJH`, override: W, scopeId: `augiA20Il` }), fr)),
    (yi = w(it)),
    (bi = x(N(it, { nodeId: `i2C80HJXJ`, override: W, scopeId: `augiA20Il` }), nt)),
    (xi = w(tt)),
    (Si = x(N(tt, { nodeId: `EhdqsbXEU`, override: W, scopeId: `augiA20Il` }), Ye)),
    (Ci = me(L)),
    (wi = me(p.div)),
    (Ti = w(Oe)),
    (Ei = w(He)),
    (Di = w(Q)),
    (Oi = w(Ne)),
    (ki = w(be)),
    (Ai = y(p.div)),
    (ji = {
      KeIVzqCpY: `(max-width: 809.98px)`,
      OnZaJZ4e_: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (Mi = () => typeof document < `u`),
    (Ni = []),
    (Pi = `framer-bke9J`),
    (Fi = {
      KeIVzqCpY: `framer-v-yhrtj`,
      OnZaJZ4e_: `framer-v-1294ril`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (Ii = (e, t, n) => (e && t ? `position` : n)),
    (Li = (e, t) => `translate(-50%, -50%) ${t}`),
    (Ri = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.5, duration: 1.5, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (zi = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    ($ = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Bi = { delay: 0, duration: 4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
    (Vi = {
      opacity: 1,
      rotate: -3,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -15,
    }),
    (Hi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 1, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Ui = {
      opacity: 0.001,
      rotate: -15,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: -100,
    }),
    (Wi = { delay: 0, duration: 5, ease: [0, 0, 1, 1], type: `tween` }),
    (Gi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.7,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 0,
    }),
    (Ki = (e, t) => `translateX(-50%) ${t}`),
    (qi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 1, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Ji = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 0.3,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (Yi = { delay: 0.1, duration: 0.8, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
    (Xi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Yi,
      x: 0,
      y: 0,
    }),
    (Zi = {
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
    (Qi = {
      opacity: 0.8,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Yi,
      x: 0,
      y: 0,
    }),
    ($i = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.8, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (ea = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 100,
    }),
    (ta = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 0.8, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (na = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.8, ease: [0.12, 0.23, 0.5, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (ra = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 200,
    }),
    (ia = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (aa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (oa = { Desktop: `WQLkyLRf1`, Phone: `KeIVzqCpY`, Tablet: `OnZaJZ4e_` }),
    (sa = ({ value: e }) =>
      b()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (ca = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: oa[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (la = E(
      u(function (e, t) {
        let n = s(null),
          c = t ?? n,
          l = r(),
          { activeLocale: u, setLocale: ee } = re(),
          h = oe(),
          { style: _, className: v, layoutId: y, variant: b, ...x } = ca(e);
        ne(o(() => Ut({}, u), [u]));
        let [S, w] = ae(b, ji, !1),
          E = T(Pi, wt, ve, It, Bt, Ot, Mt, Me),
          D = a(fe)?.isLayoutTemplate,
          O = !!a(m)?.transition?.layout,
          j = Ii(D, O),
          M = s(null),
          N = k(`WZazm3oIl`),
          P = k(`RCLjrfv10`),
          I = s(null);
        ie();
        let ce = k(`yYAnHL4Dd`),
          z = s(null),
          ue = () => !Mi() || S === `KeIVzqCpY`,
          de = () => !Mi() || S !== `KeIVzqCpY`;
        return (
          se({}),
          d(fe.Provider, {
            value: {
              activeVariantId: S,
              humanReadableVariantMap: oa,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Fi,
            },
            children: f(te, {
              id: y ?? l,
              children: [
                d(sa, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                d(p.div, {
                  ...x,
                  className: T(E, `framer-72rtr7`, v),
                  ref: c,
                  style: { ..._ },
                  children: f(p.main, {
                    className: `framer-f4gz0g`,
                    "data-framer-name": `Main`,
                    layout: j,
                    children: [
                      f(`section`, {
                        className: `framer-u49tc2`,
                        "data-framer-name": `Hero`,
                        children: [
                          f(`div`, {
                            className: `framer-1jt61op`,
                            "data-framer-name": `Container`,
                            children: [
                              f(`div`, {
                                className: `framer-85l6b9`,
                                "data-framer-name": `Content`,
                                children: [
                                  f(si, {
                                    __framer__adjustPosition: !1,
                                    __framer__offset: 0,
                                    __framer__parallaxTransformEnabled: !0,
                                    __framer__speed: 80,
                                    __framer__styleTransformEffectEnabled: !0,
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        ref: M,
                                        target: {
                                          opacity: 0,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformTrigger: `onScrollTarget`,
                                    __framer__transformViewportThreshold: 1,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    animate: Ri,
                                    className: `framer-f0rlmn`,
                                    "data-framer-appear-id": `f0rlmn`,
                                    "data-framer-name": `Title & Tag`,
                                    initial: zi,
                                    optimized: !0,
                                    transformTemplate: Li,
                                    children: [
                                      d(U, {
                                        breakpoint: S,
                                        overrides: {
                                          KeIVzqCpY: {
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              238.0024 +
                                              0 +
                                              0,
                                          },
                                        },
                                        children: d(R, {
                                          height: 27,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            187.75 +
                                            0 +
                                            0,
                                          children: d(F, {
                                            className: `framer-t2xyid-container`,
                                            nodeId: `oWrrmAFqH`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: d(ii, {
                                              eez7kHeWw: `Limited edition shoes`,
                                              height: `100%`,
                                              id: `oWrrmAFqH`,
                                              layoutId: `oWrrmAFqH`,
                                              variant: $(`fzTpjTBPb`),
                                              weK3S2rqe: `New`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                      d(U, {
                                        breakpoint: S,
                                        overrides: {
                                          KeIVzqCpY: {
                                            height: 90,
                                            y:
                                              (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              238.0024 +
                                              0 +
                                              43,
                                          },
                                        },
                                        children: d(R, {
                                          height: 220,
                                          width: `min(max(${h?.width || `100vw`}, 1px), 1300px)`,
                                          y:
                                            (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            0 +
                                            187.75 +
                                            0 +
                                            37,
                                          children: d(F, {
                                            className: `framer-1uiwh0j-container`,
                                            nodeId: `ZhlhZIehn`,
                                            rendersWithMotion: !0,
                                            scopeId: `augiA20Il`,
                                            children: d(U, {
                                              breakpoint: S,
                                              overrides: {
                                                KeIVzqCpY: {
                                                  style: { height: `100%`, width: `100%` },
                                                },
                                              },
                                              children: d(oi, {
                                                height: `100%`,
                                                id: `ZhlhZIehn`,
                                                layoutId: `ZhlhZIehn`,
                                                style: { width: `100%` },
                                                variant: $(`sme0MR6xw`),
                                                width: `100%`,
                                                ZPdhXCb4b: `Air Flexs`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        height: 201,
                                        width: `285px`,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 399.5,
                                      },
                                    },
                                    children: d(R, {
                                      height: 252,
                                      width: `369px`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 374,
                                      children: d(ui, {
                                        __framer__loop: Vi,
                                        __framer__loopEffectEnabled: !0,
                                        __framer__loopPauseOffscreen: !0,
                                        __framer__loopRepeatDelay: 0,
                                        __framer__loopRepeatType: `mirror`,
                                        __framer__loopTransition: Bi,
                                        __framer__spring: {
                                          damping: 60,
                                          delay: 0,
                                          duration: 0.3,
                                          ease: [0.44, 0, 0.56, 1],
                                          mass: 1,
                                          stagger: 0,
                                          stiffness: 500,
                                          type: `spring`,
                                        },
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: M,
                                            target: {
                                              opacity: 1,
                                              rotate: -15,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 1,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: -100,
                                            },
                                          },
                                        ],
                                        __framer__transformTrigger: `onScrollTarget`,
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        animate: Hi,
                                        className: `framer-695nz-container`,
                                        "data-framer-appear-id": `695nz`,
                                        initial: Ui,
                                        nodeId: `R8HzVTp5q`,
                                        optimized: !0,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        children: d(li, {
                                          height: `100%`,
                                          id: `R8HzVTp5q`,
                                          layoutId: `R8HzVTp5q`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`Bwu1fW1eT`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(si, {
                                    __framer__loop: Gi,
                                    __framer__loopEffectEnabled: !0,
                                    __framer__loopPauseOffscreen: !0,
                                    __framer__loopRepeatDelay: 0,
                                    __framer__loopRepeatType: `mirror`,
                                    __framer__loopTransition: Wi,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    animate: qi,
                                    className: `framer-qyuvuf`,
                                    "data-framer-appear-id": `qyuvuf`,
                                    "data-framer-name": `Shoe Shadow`,
                                    initial: Ji,
                                    optimized: !0,
                                    transformTemplate: Ki,
                                    children: d(U, {
                                      breakpoint: S,
                                      overrides: {
                                        KeIVzqCpY: {
                                          svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.625 26.853" overflow="visible"><g><path d="M 110.733 4.276 Z" fill="var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.15))"></path></g></svg>`,
                                        },
                                      },
                                      children: d(g, {
                                        className: `framer-oaip9k`,
                                        requiresOverflowVisible: !1,
                                        svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 291.993 49.869" overflow="visible"><g><path d="M 82.304 12.941 L 3.317 26.626 C -1.081 27.388 -1.116 33.69 3.273 34.501 L 86.059 49.803 C 86.551 49.894 87.056 49.892 87.548 49.796 L 187.304 30.441 L 278.263 20.554 C 278.946 20.48 279.597 20.231 280.156 19.832 L 290.316 12.575 C 292.994 10.662 292.345 6.514 289.21 5.51 L 272.584 0.19 C 272.069 0.026 271.527 -0.033 270.988 0.018 L 187.304 7.941 Z" fill="var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.15))"></path></g></svg>`,
                                        withExternalLayout: !0,
                                        children: d(U, {
                                          breakpoint: S,
                                          overrides: {
                                            KeIVzqCpY: {
                                              svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 172.625 26.853" overflow="visible"><path d="M 110.733 4.276 Z" fill="var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.15))"></path></svg>`,
                                            },
                                          },
                                          children: d(g, {
                                            className: `framer-nhexpl`,
                                            requiresOverflowVisible: !1,
                                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 291.993 49.869" overflow="visible"><path d="M 82.304 12.941 L 3.317 26.626 C -1.081 27.388 -1.116 33.69 3.273 34.501 L 86.059 49.803 C 86.551 49.894 87.056 49.892 87.548 49.796 L 187.304 30.441 L 278.263 20.554 C 278.946 20.48 279.597 20.231 280.156 19.832 L 290.316 12.575 C 292.994 10.662 292.345 6.514 289.21 5.51 L 272.584 0.19 C 272.069 0.026 271.527 -0.033 270.988 0.018 L 187.304 7.941 Z" fill="var(--token-f2423658-83c6-4d7f-a30b-1ede7af205cb, rgba(0, 0, 0, 0.15))"></path></svg>`,
                                            withExternalLayout: !0,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        width: `291px`,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1e3 - 525,
                                      },
                                    },
                                    children: d(R, {
                                      height: 795,
                                      width: `460px`,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1e3 - 235,
                                      children: d(F, {
                                        className: `framer-msb7he-container`,
                                        nodeId: `irEjC3wpa`,
                                        rendersWithMotion: !0,
                                        scopeId: `augiA20Il`,
                                        transformTemplate: Ki,
                                        children: d(fi, {
                                          height: `100%`,
                                          id: `irEjC3wpa`,
                                          layoutId: `irEjC3wpa`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`bGtLyJOdT`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        animate: Qi,
                                        background: {
                                          alt: `Clouds`,
                                          fit: `fill`,
                                          loading: C(
                                            (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1e3 - 346
                                          ),
                                          pixelHeight: 2621,
                                          pixelWidth: 4096,
                                          sizes: `560px`,
                                          src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                          srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                        },
                                        transformTemplate: Ki,
                                      },
                                    },
                                    children: d(pi, {
                                      animate: Xi,
                                      as: `figure`,
                                      background: {
                                        alt: `Clouds`,
                                        fit: `fill`,
                                        loading: C(
                                          (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1e3 - 463
                                        ),
                                        pixelHeight: 2621,
                                        pixelWidth: 4096,
                                        sizes: `calc(min(max(${h?.width || `100vw`}, 1px), 1300px) * 0.93)`,
                                        src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                        srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                      },
                                      className: `framer-qvqw2a`,
                                      "data-framer-appear-id": `qvqw2a`,
                                      "data-framer-name": `Cloud Back`,
                                      draggable: `false`,
                                      initial: Zi,
                                      optimized: !0,
                                    }),
                                  }),
                                  f(`div`, {
                                    className: `framer-2qnvqy`,
                                    "data-framer-name": `Clouds Front`,
                                    children: [
                                      d(U, {
                                        breakpoint: S,
                                        overrides: {
                                          KeIVzqCpY: {
                                            animate: ta,
                                            background: {
                                              alt: `Clouds`,
                                              fit: `fill`,
                                              loading: C(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1e3 -
                                                  1e3 +
                                                  804.282
                                              ),
                                              pixelHeight: 2621,
                                              pixelWidth: 4096,
                                              sizes: `566px`,
                                              src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                              srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                            },
                                          },
                                        },
                                        children: d(mi, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 105,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: $i,
                                          as: `figure`,
                                          background: {
                                            alt: `Clouds`,
                                            fit: `fill`,
                                            loading: C(
                                              (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 642.5
                                            ),
                                            pixelHeight: 2621,
                                            pixelWidth: 4096,
                                            sizes: `1116px`,
                                            src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                            srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                          },
                                          className: `framer-hgqndl`,
                                          "data-framer-appear-id": `hgqndl`,
                                          "data-framer-name": `Left`,
                                          draggable: `false`,
                                          initial: ea,
                                          optimized: !0,
                                        }),
                                      }),
                                      d(U, {
                                        breakpoint: S,
                                        overrides: {
                                          KeIVzqCpY: {
                                            animate: ta,
                                            background: {
                                              alt: `Clouds`,
                                              fit: `fill`,
                                              loading: C(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1e3 -
                                                  1e3 +
                                                  804.282
                                              ),
                                              pixelHeight: 2621,
                                              pixelWidth: 4096,
                                              sizes: `566px`,
                                              src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                              srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                            },
                                          },
                                        },
                                        children: d(mi, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 120,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: $i,
                                          as: `figure`,
                                          background: {
                                            alt: `Clouds`,
                                            fit: `fill`,
                                            loading: C(
                                              (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 882.5
                                            ),
                                            pixelHeight: 2621,
                                            pixelWidth: 4096,
                                            sizes: `1116px`,
                                            src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                            srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                          },
                                          className: `framer-diff9p`,
                                          "data-framer-appear-id": `diff9p`,
                                          "data-framer-name": `Center`,
                                          draggable: `false`,
                                          initial: ea,
                                          optimized: !0,
                                        }),
                                      }),
                                      d(U, {
                                        breakpoint: S,
                                        overrides: {
                                          KeIVzqCpY: {
                                            animate: $i,
                                            background: {
                                              alt: `Clouds`,
                                              fit: `fill`,
                                              loading: C(
                                                (h?.y || 0) +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  1e3 -
                                                  1e3 +
                                                  737.2701
                                              ),
                                              pixelHeight: 2621,
                                              pixelWidth: 4096,
                                              sizes: `705px`,
                                              src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                              srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                            },
                                          },
                                        },
                                        children: d(mi, {
                                          __framer__adjustPosition: !1,
                                          __framer__offset: 0,
                                          __framer__parallaxTransformEnabled: !0,
                                          __framer__speed: 105,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          animate: na,
                                          as: `figure`,
                                          background: {
                                            alt: `Clouds`,
                                            fit: `fill`,
                                            loading: C(
                                              (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 588.75
                                            ),
                                            pixelHeight: 2621,
                                            pixelWidth: 4096,
                                            sizes: `1116px`,
                                            src: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png`,
                                            srcSet: `../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-5e67cf.png 512w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-987b38.png 1024w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho.png 2048w,../../assets/images/uP4rhYFOHdLJKowsl4MEjSHho-cd2b7e.png 4096w`,
                                          },
                                          className: `framer-1gfggbi`,
                                          "data-framer-appear-id": `1gfggbi`,
                                          "data-framer-name": `Right`,
                                          draggable: `false`,
                                          initial: ra,
                                          optimized: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  f(`div`, {
                                    className: `framer-yuht6y`,
                                    "data-framer-name": `Actions`,
                                    children: [
                                      d(R, {
                                        height: 30,
                                        y:
                                          (h?.y || 0) +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          0 +
                                          1e3 -
                                          173 +
                                          39.5,
                                        children: d(F, {
                                          className: `framer-114b2zr-container`,
                                          nodeId: `WhMl9F5b6`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(gi, {
                                            height: `100%`,
                                            id: `WhMl9F5b6`,
                                            layoutId: `WhMl9F5b6`,
                                            variant: $(`hMR2Eczfy`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                      d(R, {
                                        height: 109,
                                        y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0 + 1e3 - 173 + 0,
                                        children: d(F, {
                                          className: `framer-1bb3hxg-container`,
                                          nodeId: `HviRObdJH`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(U, {
                                            breakpoint: S,
                                            overrides: { KeIVzqCpY: { PRmy6BIEU: !0 } },
                                            children: d(vi, {
                                              height: `100%`,
                                              id: `HviRObdJH`,
                                              layoutId: `HviRObdJH`,
                                              PRmy6BIEU: !1,
                                              variant: $(`pU3JDp4XQ`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              d(R, {
                                height: 1e3,
                                width: h?.width || `100vw`,
                                y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                children: d(F, {
                                  className: `framer-1rh81pr-container`,
                                  draggable: `false`,
                                  nodeId: `i2C80HJXJ`,
                                  rendersWithMotion: !0,
                                  scopeId: `augiA20Il`,
                                  children: d(bi, {
                                    height: `100%`,
                                    id: `i2C80HJXJ`,
                                    layoutId: `i2C80HJXJ`,
                                    style: { height: `100%`, width: `100%` },
                                    variant: $(`gEYBzTYcK`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                          d(`div`, {
                            className: `framer-o2ifc4`,
                            "data-framer-name": `Scroll Area`,
                            id: N,
                            ref: M,
                            children: d(R, {
                              height: 1e3,
                              width: `max(${h?.width || `100vw`}, 1px)`,
                              y: (h?.y || 0) + 0 + 0 + 0 + 0 + 0 + 1e3 + 0,
                              children: d(F, {
                                className: `framer-1vmfloi-container`,
                                nodeId: `EhdqsbXEU`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: d(Si, {
                                  height: `100%`,
                                  id: `EhdqsbXEU`,
                                  layoutId: `EhdqsbXEU`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: $(`B7R2Vd4T2`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(`section`, {
                        className: `framer-142lr91`,
                        "data-framer-name": `Legends Collection`,
                        id: P,
                        ref: I,
                        children: [
                          f(`div`, {
                            className: `framer-1s6siip`,
                            "data-framer-name": `Header`,
                            children: [
                              d(R, {
                                height: 27,
                                y: (h?.y || 0) + 0 + 0 + 0 + 2e3 + 64 + 0 + 0 + 0,
                                children: d(F, {
                                  className: `framer-1fecm6c-container`,
                                  nodeId: `mQ_FMExI9`,
                                  scopeId: `augiA20Il`,
                                  children: d(gt, {
                                    eez7kHeWw: `The all new collection`,
                                    height: `100%`,
                                    id: `mQ_FMExI9`,
                                    layoutId: `mQ_FMExI9`,
                                    variant: $(`rmDSVRFVj`),
                                    weK3S2rqe: `New`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    children: d(i, {
                                      children: f(`h2`, {
                                        className: `framer-styles-preset-1ll98pl`,
                                        "data-styles-preset": `cxfU_vRgl`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: [`For the `, d(`br`, {}), `Legends`],
                                      }),
                                    }),
                                  },
                                },
                                children: d(B, {
                                  __fromCanvasComponent: !0,
                                  children: d(i, {
                                    children: d(`h2`, {
                                      className: `framer-styles-preset-1ll98pl`,
                                      "data-styles-preset": `cxfU_vRgl`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `For the Legends`,
                                    }),
                                  }),
                                  className: `framer-aufw6u`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-1i8aiwv`,
                            "data-framer-name": `Show & Shadow`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    background: {
                                      alt: `Coffee Color Shoe`,
                                      fit: `fill`,
                                      intrinsicHeight: 550,
                                      intrinsicWidth: 1254,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2e3 + 64 + 149.4 + 0 + 0
                                      ),
                                      pixelHeight: 550,
                                      pixelWidth: 1254,
                                      sizes: `calc(${h?.width || `100vw`} * 0.8)`,
                                      src: `../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-e8b842.png`,
                                      srcSet: `../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE.png 512w,../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-c53f0e.png 1024w,../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-e8b842.png 1254w`,
                                    },
                                  },
                                },
                                children: d(Ci, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 0.5,
                                        rotate: 10,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: I,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  as: `figure`,
                                  background: {
                                    alt: `Coffee Color Shoe`,
                                    fit: `fill`,
                                    intrinsicHeight: 550,
                                    intrinsicWidth: 1254,
                                    loading: C((h?.y || 0) + 0 + 0 + 0 + 2e3 + 64 + 149.4 + 0 + 0),
                                    pixelHeight: 550,
                                    pixelWidth: 1254,
                                    sizes: `400px`,
                                    src: `../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-e8b842.png`,
                                    srcSet: `../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE.png 512w,../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-c53f0e.png 1024w,../../assets/images/78o382ZoAwg00kZkgIHGA5LbLE-e8b842.png 1254w`,
                                  },
                                  className: `framer-1cxydv4`,
                                  "data-framer-name": `Shoe`,
                                  draggable: `false`,
                                  fitImageDimension: `height`,
                                }),
                              }),
                              d(wi, {
                                __framer__spring: {
                                  damping: 60,
                                  delay: 0,
                                  duration: 0.3,
                                  ease: [0.44, 0, 0.56, 1],
                                  mass: 1,
                                  stagger: 0,
                                  stiffness: 500,
                                  type: `spring`,
                                },
                                __framer__styleTransformEffectEnabled: !0,
                                __framer__transformTargets: [
                                  {
                                    target: {
                                      opacity: 0.5,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 0.8,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                  {
                                    ref: I,
                                    target: {
                                      opacity: 1,
                                      rotate: 0,
                                      rotateX: 0,
                                      rotateY: 0,
                                      scale: 1,
                                      skewX: 0,
                                      skewY: 0,
                                      x: 0,
                                      y: 0,
                                    },
                                  },
                                ],
                                __framer__transformTrigger: `onScrollTarget`,
                                __framer__transformViewportThreshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-gkb3ke`,
                                "data-framer-name": `Shoe Shadow`,
                              }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-1rf8da8`,
                            "data-framer-name": `Details.& CTA`,
                            children: [
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`p`, {
                                    className: `framer-styles-preset-9tj2n0`,
                                    "data-styles-preset": `amNEcipQY`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                    },
                                    children: `The Legends collection is now live with premium everyday sneaker essentials designed for modern daily wear.`,
                                  }),
                                }),
                                className: `framer-15ybecb`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(A, {
                                links: [
                                  {
                                    href: { webPageId: `lJgBufJK8` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lJgBufJK8` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lJgBufJK8` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        y: (h?.y || 0) + 0 + 0 + 0 + 2e3 + 64 + 474.4 + 0 + 121,
                                      },
                                    },
                                    children: d(R, {
                                      height: 29,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 2e3 + 64 + 464.4 + 0 + 121,
                                      children: d(F, {
                                        className: `framer-o7lva9-container`,
                                        nodeId: `dMX0qAB0H`,
                                        scopeId: `augiA20Il`,
                                        children: d(U, {
                                          breakpoint: S,
                                          overrides: {
                                            KeIVzqCpY: { vFRI3q06T: e[2] },
                                            OnZaJZ4e_: { vFRI3q06T: e[1] },
                                          },
                                          children: d(Oe, {
                                            height: `100%`,
                                            hZdVwdl_Y: !1,
                                            id: `dMX0qAB0H`,
                                            layoutId: `dMX0qAB0H`,
                                            peKL8pfJA: Ee,
                                            TDPWRYXxk: `Shop Collection`,
                                            variant: $(`fGebBpVaS`),
                                            vFRI3q06T: e[0],
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(`section`, {
                        className: `framer-11rbia9`,
                        "data-framer-name": `Shipping`,
                        id: ce,
                        ref: z,
                        children: [
                          f(`div`, {
                            className: `framer-vr5tr`,
                            "data-framer-name": `Header`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    children: d(i, {
                                      children: f(`h2`, {
                                        className: `framer-styles-preset-1ll98pl`,
                                        "data-styles-preset": `cxfU_vRgl`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: [`World Wide `, d(`br`, {}), `Shipping`],
                                      }),
                                    }),
                                  },
                                },
                                children: d(B, {
                                  __fromCanvasComponent: !0,
                                  children: d(i, {
                                    children: d(`h2`, {
                                      className: `framer-styles-preset-1ll98pl`,
                                      "data-styles-preset": `cxfU_vRgl`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `World Wide Shipping`,
                                    }),
                                  }),
                                  className: `framer-1kbt1jz`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`p`, {
                                    className: `framer-styles-preset-9tj2n0`,
                                    "data-styles-preset": `amNEcipQY`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                    },
                                    children: `We deliver worldwide with trusted shipping partners, secure packaging, and order tracking included.`,
                                  }),
                                }),
                                className: `framer-227qqp`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(A, {
                                links: [
                                  {
                                    href: { webPageId: `NvFHwchNf` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `NvFHwchNf` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `NvFHwchNf` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        y: (h?.y || 0) + 0 + 0 + 0 + 2752.4 + 0 + 326.8 + 0 + 199.4,
                                      },
                                    },
                                    children: d(R, {
                                      height: 29,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 326.8 + 0 + 199.4,
                                      children: d(F, {
                                        className: `framer-14bgm7a-container`,
                                        nodeId: `Z1ii0FFBp`,
                                        scopeId: `augiA20Il`,
                                        children: d(U, {
                                          breakpoint: S,
                                          overrides: {
                                            KeIVzqCpY: { vFRI3q06T: e[2] },
                                            OnZaJZ4e_: { vFRI3q06T: e[1] },
                                          },
                                          children: d(Oe, {
                                            height: `100%`,
                                            hZdVwdl_Y: !1,
                                            id: `Z1ii0FFBp`,
                                            layoutId: `Z1ii0FFBp`,
                                            peKL8pfJA: Ee,
                                            TDPWRYXxk: `Read about shipping`,
                                            variant: $(`zq5haw0aW`),
                                            vFRI3q06T: e[0],
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-1ycssno`,
                            "data-framer-name": `Illustration`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 0,
                                        },
                                      },
                                      {
                                        offset: 0,
                                        ref: z,
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -410,
                                          y: 0,
                                        },
                                      },
                                    ],
                                    __framer__transformViewportThreshold: 0.5,
                                    background: {
                                      alt: `White Plane`,
                                      fit: `fill`,
                                      intrinsicHeight: 360.5,
                                      intrinsicWidth: 1262.5,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2752.4 + 0 + 599.2 + 0 + 0
                                      ),
                                      pixelHeight: 721,
                                      pixelWidth: 2525,
                                      sizes: `min(min(${h?.width || `100vw`}, 1300px) * 1.8, 700px)`,
                                      src: `../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-22958f.png`,
                                      srcSet: `../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-1c1092.png 512w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-a184c9.png 1024w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w.png 2048w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-22958f.png 2525w`,
                                    },
                                  },
                                },
                                children: d(Ci, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -260,
                                        y: 0,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  as: `figure`,
                                  background: {
                                    alt: `White Plane`,
                                    fit: `fill`,
                                    intrinsicHeight: 360.5,
                                    intrinsicWidth: 1262.5,
                                    loading: C(
                                      (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 0 + 0
                                    ),
                                    pixelHeight: 721,
                                    pixelWidth: 2525,
                                    sizes: `calc(min(${h?.width || `100vw`}, 1300px) * 0.8)`,
                                    src: `../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-22958f.png`,
                                    srcSet: `../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-1c1092.png 512w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-a184c9.png 1024w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w.png 2048w,../../assets/images/TTwn3DLRbpyJqqaxFqCYGE1EW8w-22958f.png 2525w`,
                                  },
                                  className: `framer-1805o0f`,
                                  "data-framer-name": `Plane`,
                                  draggable: `false`,
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -20,
                                          y: 0,
                                        },
                                      },
                                      {
                                        offset: 0,
                                        ref: z,
                                        target: {
                                          opacity: 1,
                                          rotate: 12,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 5,
                                          y: 40,
                                        },
                                      },
                                    ],
                                    style: { scale: 0.6 },
                                  },
                                },
                                children: d(wi, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -20,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: 12,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 20,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-19bpks7`,
                                  "data-framer-name": `Delivery Box`,
                                  transformTemplate: Li,
                                  children: d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2752.4 +
                                              0 +
                                              599.2 +
                                              266.9 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 983,
                                          pixelWidth: 1601,
                                          sizes: `112px`,
                                          src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                          srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                        },
                                      },
                                      OnZaJZ4e_: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2742.4 +
                                              0 +
                                              599.2 +
                                              254.3108 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 983,
                                          pixelWidth: 1601,
                                          sizes: `112px`,
                                          src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                          srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                        },
                                      },
                                    },
                                    children: d(L, {
                                      as: `figure`,
                                      background: {
                                        alt: `Cardboard Delivery Box`,
                                        fit: `fill`,
                                        intrinsicHeight: 983,
                                        intrinsicWidth: 1601,
                                        loading: C(
                                          (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            2742.4 +
                                            0 +
                                            599.2 +
                                            224.5 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 983,
                                        pixelWidth: 1601,
                                        sizes: `112px`,
                                        src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                        srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                      },
                                      className: `framer-1sa542r`,
                                      "data-framer-name": `Delivery Box`,
                                      draggable: `false`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: 0,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -60,
                                          y: 0,
                                        },
                                      },
                                      {
                                        offset: 0,
                                        ref: z,
                                        target: {
                                          opacity: 1,
                                          rotate: -12,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: 0,
                                          y: 40,
                                        },
                                      },
                                    ],
                                    style: { scale: 0.6 },
                                  },
                                },
                                children: d(wi, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -60,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: -12,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 20,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1ocq9fk`,
                                  "data-framer-name": `Delivery Box`,
                                  transformTemplate: Li,
                                  children: d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2752.4 +
                                              0 +
                                              599.2 +
                                              247.83 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 987,
                                          pixelWidth: 1594,
                                          sizes: `125px`,
                                          src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                          srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                        },
                                      },
                                      OnZaJZ4e_: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2742.4 +
                                              0 +
                                              599.2 +
                                              250.3108 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 987,
                                          pixelWidth: 1594,
                                          sizes: `125px`,
                                          src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                          srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                        },
                                      },
                                    },
                                    children: d(L, {
                                      as: `figure`,
                                      background: {
                                        alt: `Cardboard Delivery Box`,
                                        fit: `fill`,
                                        intrinsicHeight: 983,
                                        intrinsicWidth: 1601,
                                        loading: C(
                                          (h?.y || 0) +
                                            0 +
                                            0 +
                                            0 +
                                            2742.4 +
                                            0 +
                                            599.2 +
                                            220.5 +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 987,
                                        pixelWidth: 1594,
                                        sizes: `125px`,
                                        src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                        srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                      },
                                      className: `framer-aic6k8`,
                                      "data-framer-name": `Delivery Box`,
                                      draggable: `false`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: { KeIVzqCpY: { style: { rotate: 26, scale: 0.6 } } },
                                children: d(wi, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 5,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -80,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: 8,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 10,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1e7k166`,
                                  "data-framer-name": `Delivery Box`,
                                  style: { rotate: 26 },
                                  transformTemplate: Li,
                                  children: d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2752.4 +
                                              0 +
                                              599.2 +
                                              448.61 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 983,
                                          pixelWidth: 1601,
                                          sizes: `113px`,
                                          src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                          srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                        },
                                      },
                                      OnZaJZ4e_: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2742.4 +
                                              0 +
                                              599.2 +
                                              425.6162 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 983,
                                          pixelWidth: 1601,
                                          sizes: `113px`,
                                          src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                          srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                        },
                                      },
                                    },
                                    children: d(L, {
                                      as: `figure`,
                                      background: {
                                        alt: `Cardboard Delivery Box`,
                                        fit: `fill`,
                                        intrinsicHeight: 983,
                                        intrinsicWidth: 1601,
                                        loading: C(
                                          (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 337 + 0 + 0
                                        ),
                                        pixelHeight: 983,
                                        pixelWidth: 1601,
                                        sizes: `113px`,
                                        src: `../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png`,
                                        srcSet: `../../assets/images/qIFFpweYjb31wPxDBhANycUs.png 512w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-71b1bd.png 1024w,../../assets/images/qIFFpweYjb31wPxDBhANycUs-aeb6ff.png 1601w`,
                                      },
                                      className: `framer-4pbbp0`,
                                      "data-framer-name": `Delivery Box`,
                                      draggable: `false`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    __framer__transformTargets: [
                                      {
                                        target: {
                                          opacity: 1,
                                          rotate: -8,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -40,
                                          y: 0,
                                        },
                                      },
                                      {
                                        offset: 0,
                                        ref: z,
                                        target: {
                                          opacity: 1,
                                          rotate: -8,
                                          rotateX: 0,
                                          rotateY: 0,
                                          scale: 1,
                                          skewX: 0,
                                          skewY: 0,
                                          x: -5,
                                          y: 30,
                                        },
                                      },
                                    ],
                                    style: { scale: 0.6 },
                                  },
                                },
                                children: d(wi, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: -8,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -40,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: -8,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 30,
                                        y: 30,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  className: `framer-1ryxzvp`,
                                  "data-framer-name": `Delivery Box`,
                                  transformTemplate: Li,
                                  children: d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2752.4 +
                                              0 +
                                              599.2 +
                                              371.89 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 987,
                                          pixelWidth: 1594,
                                          sizes: `113px`,
                                          src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                          srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                        },
                                      },
                                      OnZaJZ4e_: {
                                        background: {
                                          alt: `Cardboard Delivery Box`,
                                          fit: `fill`,
                                          intrinsicHeight: 983,
                                          intrinsicWidth: 1601,
                                          loading: C(
                                            (h?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              2742.4 +
                                              0 +
                                              599.2 +
                                              434.5027 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 987,
                                          pixelWidth: 1594,
                                          sizes: `113px`,
                                          src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                          srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                        },
                                      },
                                    },
                                    children: d(L, {
                                      as: `figure`,
                                      background: {
                                        alt: `Cardboard Delivery Box`,
                                        fit: `fill`,
                                        intrinsicHeight: 983,
                                        intrinsicWidth: 1601,
                                        loading: C(
                                          (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 375 + 0 + 0
                                        ),
                                        pixelHeight: 987,
                                        pixelWidth: 1594,
                                        sizes: `113px`,
                                        src: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png`,
                                        srcSet: `../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc.png 512w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-4e8546.png 1024w,../../assets/images/eQAtEEbNdkuff7n6uJpawox2fnc-ac18ad.png 1594w`,
                                      },
                                      className: `framer-jbed44`,
                                      "data-framer-name": `Delivery Box`,
                                      draggable: `false`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    background: {
                                      alt: `Shoe Mockup`,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1536,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2752.4 + 0 + 599.2 + 354.14
                                      ),
                                      pixelHeight: 902,
                                      pixelWidth: 1744,
                                      sizes: `72px`,
                                      src: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png`,
                                      srcSet: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo.png 512w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-09d50d.png 1024w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png 1744w`,
                                    },
                                  },
                                  OnZaJZ4e_: {
                                    background: {
                                      alt: `Shoe Mockup`,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1536,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 276.2351
                                      ),
                                      pixelHeight: 902,
                                      pixelWidth: 1744,
                                      sizes: `72px`,
                                      src: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png`,
                                      srcSet: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo.png 512w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-09d50d.png 1024w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png 1744w`,
                                    },
                                  },
                                },
                                children: d(Ci, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 5,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -30,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: -32,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 10,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  as: `figure`,
                                  background: {
                                    alt: `Shoe Mockup`,
                                    fit: `fill`,
                                    intrinsicHeight: 1034,
                                    intrinsicWidth: 1536,
                                    loading: C(
                                      (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 246.5
                                    ),
                                    pixelHeight: 902,
                                    pixelWidth: 1744,
                                    sizes: `72px`,
                                    src: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png`,
                                    srcSet: `../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo.png 512w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-09d50d.png 1024w,../../assets/images/u8EBgpKmOvuxj56X2pAkM3jARo-3420cc.png 1744w`,
                                  },
                                  className: `framer-13fxww1`,
                                  "data-framer-name": `Shoe`,
                                  draggable: `false`,
                                  style: { rotate: 24 },
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    background: {
                                      alt: `Shoe Mockup`,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1536,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2752.4 + 0 + 599.2 + 435.73
                                      ),
                                      pixelHeight: 527,
                                      pixelWidth: 1254,
                                      sizes: `72px`,
                                      src: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png`,
                                      srcSet: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk.png 512w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-19ef0a.png 1024w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png 1254w`,
                                    },
                                  },
                                  OnZaJZ4e_: {
                                    background: {
                                      alt: `Shoe Mockup`,
                                      fit: `fill`,
                                      intrinsicHeight: 1034,
                                      intrinsicWidth: 1536,
                                      loading: C(
                                        (h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 413.0324
                                      ),
                                      pixelHeight: 527,
                                      pixelWidth: 1254,
                                      sizes: `72px`,
                                      src: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png`,
                                      srcSet: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk.png 512w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-19ef0a.png 1024w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png 1254w`,
                                    },
                                  },
                                },
                                children: d(Ci, {
                                  __framer__spring: {
                                    damping: 60,
                                    delay: 0,
                                    duration: 0.3,
                                    ease: [0.44, 0, 0.56, 1],
                                    mass: 1,
                                    stagger: 0,
                                    stiffness: 500,
                                    type: `spring`,
                                  },
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 5,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: -30,
                                        y: 0,
                                      },
                                    },
                                    {
                                      offset: 0,
                                      ref: z,
                                      target: {
                                        opacity: 1,
                                        rotate: -32,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 10,
                                        y: 40,
                                      },
                                    },
                                  ],
                                  __framer__transformTrigger: `onScrollTarget`,
                                  __framer__transformViewportThreshold: 0.5,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  as: `figure`,
                                  background: {
                                    alt: `Shoe Mockup`,
                                    fit: `fill`,
                                    intrinsicHeight: 1034,
                                    intrinsicWidth: 1536,
                                    loading: C((h?.y || 0) + 0 + 0 + 0 + 2742.4 + 0 + 599.2 + 324),
                                    pixelHeight: 527,
                                    pixelWidth: 1254,
                                    sizes: `72px`,
                                    src: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png`,
                                    srcSet: `../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk.png 512w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-19ef0a.png 1024w,../../assets/images/7CVVEtv2zkXEl4534ReOLl3JUHk-b59b09.png 1254w`,
                                  },
                                  className: `framer-92cbqa`,
                                  "data-framer-name": `Shoe`,
                                  draggable: `false`,
                                  style: { rotate: -15 },
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      d(`div`, { className: `framer-3l2vuv`, "data-framer-name": `Spacer` }),
                      f(`section`, {
                        className: `framer-hfp6rx`,
                        "data-framer-name": `Brands`,
                        children: [
                          d(`div`, {
                            className: `framer-1gne6sm`,
                            "data-framer-name": `Top`,
                            children: f(`div`, {
                              className: `framer-a0ucex`,
                              "data-framer-name": `Content`,
                              children: [
                                ue() &&
                                  d(B, {
                                    __fromCanvasComponent: !0,
                                    children: d(i, {
                                      children: d(`h4`, {
                                        className: `framer-styles-preset-19ynewv`,
                                        "data-styles-preset": `pN_gL4Xds`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                        },
                                        children: `Original`,
                                      }),
                                    }),
                                    className: `framer-bfbap7 hidden-72rtr7 hidden-1294ril`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                f(`div`, {
                                  className: `framer-13r2jrw`,
                                  "data-framer-name": `Content`,
                                  children: [
                                    de() &&
                                      f(`div`, {
                                        className: `framer-5q6m52 hidden-yhrtj`,
                                        "data-framer-name": `Left`,
                                        children: [
                                          d(B, {
                                            __fromCanvasComponent: !0,
                                            children: d(i, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-19ynewv`,
                                                "data-styles-preset": `pN_gL4Xds`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                                },
                                                children: `Original`,
                                              }),
                                            }),
                                            className: `framer-g8lmf9`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(B, {
                                            __fromCanvasComponent: !0,
                                            children: d(i, {
                                              children: d(`p`, {
                                                className: `framer-styles-preset-tsnpik`,
                                                "data-styles-preset": `RoRGeZoiF`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-alignment": `center`,
                                                  "--framer-text-color": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                                },
                                                children: `100%`,
                                              }),
                                            }),
                                            className: `framer-99y62y`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    d(`div`, {
                                      className: `framer-dhv91h`,
                                      "data-framer-name": `Right`,
                                      children: d(B, {
                                        __fromCanvasComponent: !0,
                                        children: d(i, {
                                          children: d(`p`, {
                                            className: `framer-styles-preset-tsnpik`,
                                            "data-styles-preset": `RoRGeZoiF`,
                                            dir: `auto`,
                                            style: {
                                              "--framer-text-color": `var(--token-e0ec22b8-2ee9-41b9-9c9b-068af203c374, rgb(255, 255, 255))`,
                                            },
                                            children: `Brands`,
                                          }),
                                        }),
                                        className: `framer-1idjb5y`,
                                        fonts: [`Inter`],
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                    }),
                                  ],
                                }),
                                d(F, {
                                  className: `framer-27wuwy-container`,
                                  children: d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        fallbackImage: `https://framerusercontent.com/images/eT1gOjF1GCUteaYpx2uMO7g4vo.png?scale-down-to=370&width=400&height=740`,
                                      },
                                      OnZaJZ4e_: {
                                        fallbackImage: `https://framerusercontent.com/images/gBYGbBQ7iMQ4AdV0yU2aDaSeiWc.png?scale-down-to=810&width=1620&height=740`,
                                      },
                                    },
                                    children: d(le, {
                                      __fromCanvasComponent: !0,
                                      animated: G.animated,
                                      buffers: G.buffers,
                                      fallbackImage: `https://framerusercontent.com/images/ZYTnY6DeEwBs4LZlzTamk0VD7Q.png?scale-down-to=1200&width=2400&height=740`,
                                      fragmentShader: G.fragment,
                                      height: `100%`,
                                      heightmapSource: G.heightmapSource,
                                      mode: `progressive`,
                                      mouse: G.mouse && { enabled: G.mouse === `enabledByDefault` },
                                      resolutionScale: G.resolutionScale,
                                      skipInitialFallback: !0,
                                      uniforms: {
                                        u_blendAmount: { type: `number`, value: 1 },
                                        u_colors: {
                                          type: `array`,
                                          value: [
                                            `var(--token-d5dcd97d-793f-4a02-b4b2-f1cfb443a4e6, rgb(0, 136, 255))`,
                                            `var(--token-8ef28781-a0a2-43db-933d-3d729ae85487, rgb(0, 123, 255))`,
                                          ],
                                        },
                                        u_maskSoftness: { type: `number`, value: 2 },
                                        u_seed: { type: `number`, value: 49 },
                                        u_waveAmplitude: { type: `number`, value: 2.14 },
                                        u_waveAngle: { type: `number`, value: 130 },
                                        u_waveFreqX: { type: `number`, value: 6 },
                                        u_waveFreqY: { type: `number`, value: 6 },
                                        u_waveSpeed: { type: `number`, value: 2.18 },
                                      },
                                      vertexShader: G.vertex,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                          }),
                          d(U, {
                            breakpoint: S,
                            overrides: {
                              KeIVzqCpY: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 2426,
                                  intrinsicWidth: 2796,
                                  loading: C((h?.y || 0) + 0 + 0 + 0 + 4152.4 + 183.5),
                                  pixelHeight: 2426,
                                  pixelWidth: 2796,
                                  sizes: `402px`,
                                  src: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png`,
                                  srcSet: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-7b8595.png 512w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4.png 1024w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-6a1314.png 2048w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png 2796w`,
                                },
                                fitImageDimension: void 0,
                                transformTemplate: void 0,
                              },
                              OnZaJZ4e_: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 2426,
                                  intrinsicWidth: 2796,
                                  loading: C((h?.y || 0) + 0 + 0 + 0 + 4142.4 + 159.25),
                                  pixelHeight: 2426,
                                  pixelWidth: 2796,
                                  sizes: `535px`,
                                  src: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png`,
                                  srcSet: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-7b8595.png 512w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4.png 1024w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-6a1314.png 2048w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png 2796w`,
                                },
                                fitImageDimension: void 0,
                                transformTemplate: void 0,
                              },
                            },
                            children: d(Ci, {
                              __framer__spring: {
                                damping: 60,
                                delay: 0,
                                duration: 0.3,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stagger: 0,
                                stiffness: 500,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 50,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: -20,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              as: `figure`,
                              background: {
                                alt: ``,
                                fit: `fill`,
                                intrinsicHeight: 2426,
                                intrinsicWidth: 2796,
                                loading: C((h?.y || 0) + 0 + 0 + 0 + 4142.4 + 97),
                                pixelHeight: 2426,
                                pixelWidth: 2796,
                                sizes: `675px`,
                                src: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png`,
                                srcSet: `../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-7b8595.png 512w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4.png 1024w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-6a1314.png 2048w,../../assets/images/JkJp7l8j69t5XG1pygBykqgL4-435ef3.png 2796w`,
                              },
                              className: `framer-1oo7nd9`,
                              "data-framer-name": `Floating Shoe`,
                              draggable: `false`,
                              fitImageDimension: `height`,
                              transformTemplate: Li,
                            }),
                          }),
                          d(`div`, {
                            className: `framer-pyp0no`,
                            "data-framer-name": `Bottom`,
                            children: f(`div`, {
                              className: `framer-j55qw7`,
                              "data-framer-name": `Content`,
                              children: [
                                d(U, {
                                  breakpoint: S,
                                  overrides: {
                                    KeIVzqCpY: {
                                      children: d(i, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-r0nisa`,
                                          "data-styles-preset": `h36udAO3c`,
                                          dir: `auto`,
                                          style: {
                                            "--framer-text-alignment": `center`,
                                            "--framer-text-color": `var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133))`,
                                          },
                                          children: `Authentic footwear curated from leading brands and verified retail partners.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: d(B, {
                                    __fromCanvasComponent: !0,
                                    children: d(i, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-r0nisa`,
                                        "data-styles-preset": `h36udAO3c`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--token-5c950482-85ac-4716-bcd5-1945331447e4, rgb(133, 133, 133))`,
                                        },
                                        children: `Authentic footwear curated from leading brands and verified retail partners.`,
                                      }),
                                    }),
                                    className: `framer-70gblp`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                d(U, {
                                  breakpoint: S,
                                  overrides: {
                                    KeIVzqCpY: {
                                      children: d(i, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-1cs224s`,
                                          "data-styles-preset": `nV6XvMHlN`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `center` },
                                          children: `Trusted Originals`,
                                        }),
                                      }),
                                    },
                                    OnZaJZ4e_: {
                                      children: d(i, {
                                        children: f(`h5`, {
                                          className: `framer-styles-preset-1cs224s`,
                                          "data-styles-preset": `nV6XvMHlN`,
                                          dir: `auto`,
                                          children: [`Trusted `, d(`br`, {}), `Originals`],
                                        }),
                                      }),
                                    },
                                  },
                                  children: d(B, {
                                    __fromCanvasComponent: !0,
                                    children: d(i, {
                                      children: f(`p`, {
                                        className: `framer-styles-preset-1cs224s`,
                                        "data-styles-preset": `nV6XvMHlN`,
                                        dir: `auto`,
                                        children: [`Trusted `, d(`br`, {}), `Originals`],
                                      }),
                                    }),
                                    className: `framer-1g0qnu4`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                      f(`div`, {
                        className: `framer-1mt72c6`,
                        "data-framer-name": `Best Sellers`,
                        children: [
                          f(`div`, {
                            className: `framer-gsx2eb`,
                            "data-framer-name": `Details & CTA`,
                            children: [
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`h2`, {
                                    className: `framer-styles-preset-1ll98pl`,
                                    "data-styles-preset": `cxfU_vRgl`,
                                    dir: `auto`,
                                    children: `Best sellers`,
                                  }),
                                }),
                                className: `framer-1rq5omq`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(A, {
                                links: [
                                  {
                                    href: { webPageId: `YYV2AyPUN` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `YYV2AyPUN` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `YYV2AyPUN` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  d(U, {
                                    breakpoint: S,
                                    overrides: {
                                      KeIVzqCpY: {
                                        y: (h?.y || 0) + 0 + 0 + 0 + 4802.4 + 100 + 0 + 0 + 78.4,
                                      },
                                    },
                                    children: d(R, {
                                      height: 29,
                                      y: (h?.y || 0) + 0 + 0 + 0 + 4912.4 + 100 + 0 + 0 + 78.4,
                                      children: d(F, {
                                        className: `framer-f3k3w5-container`,
                                        nodeId: `RVAJryelS`,
                                        scopeId: `augiA20Il`,
                                        children: d(U, {
                                          breakpoint: S,
                                          overrides: {
                                            KeIVzqCpY: { vFRI3q06T: e[2] },
                                            OnZaJZ4e_: { vFRI3q06T: e[1] },
                                          },
                                          children: d(Oe, {
                                            height: `100%`,
                                            hZdVwdl_Y: !1,
                                            id: `RVAJryelS`,
                                            layoutId: `RVAJryelS`,
                                            peKL8pfJA: Ee,
                                            TDPWRYXxk: `View all`,
                                            variant: $(`zq5haw0aW`),
                                            vFRI3q06T: e[0],
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                          d(U, {
                            breakpoint: S,
                            overrides: {
                              KeIVzqCpY: {
                                width: `calc(min(${h?.width || `100vw`}, 1200px) - 56px)`,
                                y: (h?.y || 0) + 0 + 0 + 0 + 4802.4 + 100 + 139.4,
                              },
                            },
                            children: d(R, {
                              height: 499,
                              width: `calc(min(${h?.width || `100vw`}, 1200px) - 128px)`,
                              y: (h?.y || 0) + 0 + 0 + 0 + 4912.4 + 100 + 139.4,
                              children: d(F, {
                                className: `framer-102c7uw-container`,
                                nodeId: `gMM7kvuDT`,
                                scopeId: `augiA20Il`,
                                children: d(U, {
                                  breakpoint: S,
                                  overrides: { KeIVzqCpY: { variant: $(`t7J4OXMxa`) } },
                                  children: d(He, {
                                    height: `100%`,
                                    id: `gMM7kvuDT`,
                                    layoutId: `gMM7kvuDT`,
                                    style: { width: `100%` },
                                    variant: $(`YddRK6JtV`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                      f(`div`, {
                        className: `framer-47vgd2`,
                        "data-framer-name": `Categories`,
                        children: [
                          f(`div`, {
                            className: `framer-v29a8c`,
                            "data-framer-name": `Category`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: h?.width || `100vw`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 5640.8 + 0 + 0 + 0 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 583,
                                  width: `max(${h?.width || `100vw`} / 2, 1px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 5750.8 + 0 + 0 + 0,
                                  children: d(F, {
                                    className: `framer-1fzcx00-container`,
                                    nodeId: `w4f1BzVC_`,
                                    scopeId: `augiA20Il`,
                                    children: d(U, {
                                      breakpoint: S,
                                      overrides: { KeIVzqCpY: { variant: $(`g1Ji0IrSm`) } },
                                      children: d(Q, {
                                        ai_CPsLVZ: `Casuals`,
                                        fhPuRMsJa: ia(
                                          {
                                            pixelHeight: 1537,
                                            pixelWidth: 1023,
                                            positionX: `50.7%`,
                                            positionY: `55.1%`,
                                            src: `../../assets/images/wm185ObsBH42czDKHDKdvpyPv0.png`,
                                            srcSet: `../../assets/images/wm185ObsBH42czDKHDKdvpyPv0-fbe3c6.png 681w,../../assets/images/wm185ObsBH42czDKHDKdvpyPv0.png 1023w`,
                                          },
                                          `Casuals Category Thumbnail`
                                        ),
                                        height: `100%`,
                                        id: `w4f1BzVC_`,
                                        l5NssQXWN: `https://sneaks.framer.website/shoes?categories=casual`,
                                        layoutId: `w4f1BzVC_`,
                                        sB6Lx47cn: `Occasional`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`FZIxAnxEe`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: h?.width || `100vw`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 5640.8 + 0 + 0 + 0 + 583,
                                  },
                                },
                                children: d(R, {
                                  height: 583,
                                  width: `max(${h?.width || `100vw`} / 2, 1px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 5750.8 + 0 + 0 + 0,
                                  children: d(F, {
                                    className: `framer-y3v8oj-container`,
                                    nodeId: `vV9KkSi8K`,
                                    scopeId: `augiA20Il`,
                                    children: d(U, {
                                      breakpoint: S,
                                      overrides: { KeIVzqCpY: { variant: $(`g1Ji0IrSm`) } },
                                      children: d(Q, {
                                        ai_CPsLVZ: `Sports`,
                                        fhPuRMsJa: ia(
                                          {
                                            pixelHeight: 1672,
                                            pixelWidth: 941,
                                            positionX: `40.8%`,
                                            positionY: `26.4%`,
                                            src: `../../assets/images/auxTW4PvGVr4RBrSBmuD2slvhbM.png`,
                                            srcSet: `../../assets/images/auxTW4PvGVr4RBrSBmuD2slvhbM-c6f8fd.png 576w,../../assets/images/auxTW4PvGVr4RBrSBmuD2slvhbM.png 941w`,
                                          },
                                          `Sports Category Thumbnail`
                                        ),
                                        height: `100%`,
                                        id: `vV9KkSi8K`,
                                        l5NssQXWN: `https://sneaks.framer.website/shoes?categories=sports`,
                                        layoutId: `vV9KkSi8K`,
                                        sB6Lx47cn: `Power your`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`FZIxAnxEe`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          f(`div`, {
                            className: `framer-1f6xve2`,
                            "data-framer-name": `Category`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: h?.width || `100vw`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 5640.8 + 0 + 1166 + 0 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 583,
                                  width: `max(${h?.width || `100vw`} / 2, 1px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 5750.8 + 0 + 583 + 0,
                                  children: d(F, {
                                    className: `framer-d8e1d4-container`,
                                    nodeId: `gDG7h4aB9`,
                                    scopeId: `augiA20Il`,
                                    children: d(U, {
                                      breakpoint: S,
                                      overrides: { KeIVzqCpY: { variant: $(`g1Ji0IrSm`) } },
                                      children: d(Q, {
                                        ai_CPsLVZ: `Slides`,
                                        fhPuRMsJa: ia(
                                          {
                                            pixelHeight: 1374,
                                            pixelWidth: 1145,
                                            src: `../../assets/images/83TOu0fSl64R9U1Giw9uHbcXk-fa3978.png`,
                                            srcSet: `../../assets/images/83TOu0fSl64R9U1Giw9uHbcXk.png 853w,../../assets/images/83TOu0fSl64R9U1Giw9uHbcXk-fa3978.png 1145w`,
                                          },
                                          `Slides Category Thumbnail`
                                        ),
                                        height: `100%`,
                                        id: `gDG7h4aB9`,
                                        l5NssQXWN: `https://sneaks.framer.website/shoes?categories=slides`,
                                        layoutId: `gDG7h4aB9`,
                                        sB6Lx47cn: `Everyday`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`FZIxAnxEe`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: h?.width || `100vw`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 5640.8 + 0 + 1166 + 0 + 583,
                                  },
                                },
                                children: d(R, {
                                  height: 583,
                                  width: `max(${h?.width || `100vw`} / 2, 1px)`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 5750.8 + 0 + 583 + 0,
                                  children: d(F, {
                                    className: `framer-uoy4as-container`,
                                    nodeId: `pVwZgViNG`,
                                    scopeId: `augiA20Il`,
                                    children: d(U, {
                                      breakpoint: S,
                                      overrides: { KeIVzqCpY: { variant: $(`g1Ji0IrSm`) } },
                                      children: d(Q, {
                                        ai_CPsLVZ: `Running`,
                                        fhPuRMsJa: ia(
                                          {
                                            pixelHeight: 1402,
                                            pixelWidth: 1122,
                                            src: `../../assets/images/PJcQBYtSYcWc7tlc4FCHuXRGaLQ-8783dc.png`,
                                            srcSet: `../../assets/images/PJcQBYtSYcWc7tlc4FCHuXRGaLQ.png 819w,../../assets/images/PJcQBYtSYcWc7tlc4FCHuXRGaLQ-8783dc.png 1122w`,
                                          },
                                          `Running Category Thumbnail`
                                        ),
                                        height: `100%`,
                                        id: `pVwZgViNG`,
                                        l5NssQXWN: `https://sneaks.framer.website/shoes?categories=running`,
                                        layoutId: `pVwZgViNG`,
                                        sB6Lx47cn: `Speed for`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`FZIxAnxEe`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(`div`, {
                        className: `framer-hyutv2`,
                        "data-framer-name": `The Approach`,
                        children: [
                          f(`div`, {
                            className: `framer-2u4mxf`,
                            "data-framer-name": `Header`,
                            children: [
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`p`, {
                                    className: `framer-styles-preset-5rfdkx`,
                                    "data-styles-preset": `CT_DBbR5R`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                    },
                                    children: `Our approach`,
                                  }),
                                }),
                                className: `framer-j47blp`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`h2`, {
                                    className: `framer-styles-preset-1ll98pl`,
                                    "data-styles-preset": `cxfU_vRgl`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))`,
                                    },
                                    children: `Comfort & Looks`,
                                  }),
                                }),
                                className: `framer-yz5b6m`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          d(U, {
                            breakpoint: S,
                            overrides: {
                              KeIVzqCpY: {
                                background: {
                                  alt: `Feature Display Shoe`,
                                  fit: `fill`,
                                  intrinsicHeight: 1599,
                                  intrinsicWidth: 1200,
                                  loading: C((h?.y || 0) + 0 + 0 + 0 + 7972.8 + 28 + 129.4),
                                  pixelHeight: 532,
                                  pixelWidth: 1254,
                                  sizes: `min(min(${h?.width || `100vw`}, 400px) - 56px, 650px)`,
                                  src: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png`,
                                  srcSet: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-b7199e.png 512w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU.png 1024w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png 1254w`,
                                },
                              },
                              OnZaJZ4e_: {
                                background: {
                                  alt: `Feature Display Shoe`,
                                  fit: `fill`,
                                  intrinsicHeight: 1599,
                                  intrinsicWidth: 1200,
                                  loading: C((h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 185.4),
                                  pixelHeight: 532,
                                  pixelWidth: 1254,
                                  sizes: `min(min(${h?.width || `100vw`}, 1200px) - 88px, 600px)`,
                                  src: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png`,
                                  srcSet: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-b7199e.png 512w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU.png 1024w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png 1254w`,
                                },
                              },
                            },
                            children: d(Ci, {
                              __framer__spring: {
                                bounce: 0,
                                damping: 60,
                                delay: 0,
                                duration: 0.8,
                                durationBasedSpring: !0,
                                ease: [0.44, 0, 0.56, 1],
                                mass: 1,
                                stiffness: 500,
                                type: `spring`,
                              },
                              __framer__styleTransformEffectEnabled: !0,
                              __framer__transformTargets: [
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 5,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 40,
                                  },
                                },
                                {
                                  target: {
                                    opacity: 1,
                                    rotate: 0,
                                    rotateX: 0,
                                    rotateY: 0,
                                    scale: 1,
                                    skewX: 0,
                                    skewY: 0,
                                    x: 0,
                                    y: 0,
                                  },
                                },
                              ],
                              __framer__transformTrigger: `onInView`,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              as: `figure`,
                              background: {
                                alt: `Feature Display Shoe`,
                                fit: `fill`,
                                intrinsicHeight: 1599,
                                intrinsicWidth: 1200,
                                loading: C((h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 185.4),
                                pixelHeight: 532,
                                pixelWidth: 1254,
                                sizes: `min(min(${h?.width || `100vw`}, 1200px) - 88px, 650px)`,
                                src: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png`,
                                srcSet: `../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-b7199e.png 512w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU.png 1024w,../../assets/images/Z6ZglOnnmMMpJ4NWZiCqivRMoU-c4510f.png 1254w`,
                              },
                              className: `framer-1u5y6mq`,
                              "data-framer-name": `Shoe`,
                              draggable: `false`,
                              fitImageDimension: `height`,
                            }),
                          }),
                          f(`div`, {
                            className: `framer-kweyv2`,
                            "data-framer-name": `Features`,
                            children: [
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: `calc(min(${h?.width || `100vw`}, 400px) - 56px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7972.8 + 28 + 522.4 + 0 + 0,
                                  },
                                  OnZaJZ4e_: {
                                    width: `max((min(${h?.width || `100vw`}, 1200px) - 118px) / 4, 1px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 540.4 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 179,
                                  width: `200px`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 561.4 + 0,
                                  children: d(F, {
                                    className: `framer-jtbqbt-container`,
                                    nodeId: `TxTHbVnUO`,
                                    scopeId: `augiA20Il`,
                                    children: d(Ne, {
                                      height: `100%`,
                                      id: `TxTHbVnUO`,
                                      KHTb9ulhF: `Designed For Speed`,
                                      layoutId: `TxTHbVnUO`,
                                      style: { width: `100%` },
                                      TE5nvJBv5: ze,
                                      WCTJ1U4Cv: `Motion`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: `calc(min(${h?.width || `100vw`}, 400px) - 56px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7972.8 + 28 + 522.4 + 0 + 189,
                                  },
                                  OnZaJZ4e_: {
                                    width: `max((min(${h?.width || `100vw`}, 1200px) - 118px) / 4, 1px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 540.4 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 179,
                                  width: `200px`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 561.4 + 0,
                                  children: d(F, {
                                    className: `framer-13etkcw-container`,
                                    nodeId: `M4dJno13w`,
                                    scopeId: `augiA20Il`,
                                    children: d(Ne, {
                                      height: `100%`,
                                      id: `M4dJno13w`,
                                      KHTb9ulhF: `Comfort Meets Style`,
                                      layoutId: `M4dJno13w`,
                                      style: { width: `100%` },
                                      TE5nvJBv5: Ht,
                                      WCTJ1U4Cv: `Balance`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: `calc(min(${h?.width || `100vw`}, 400px) - 56px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7972.8 + 28 + 522.4 + 0 + 378,
                                  },
                                  OnZaJZ4e_: {
                                    width: `max((min(${h?.width || `100vw`}, 1200px) - 118px) / 4, 1px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 540.4 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 179,
                                  width: `200px`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 561.4 + 0,
                                  children: d(F, {
                                    className: `framer-ofqc4t-container`,
                                    nodeId: `Fm8OpRF_r`,
                                    scopeId: `augiA20Il`,
                                    children: d(Ne, {
                                      height: `100%`,
                                      id: `Fm8OpRF_r`,
                                      KHTb9ulhF: `Premium Daily Build`,
                                      layoutId: `Fm8OpRF_r`,
                                      style: { width: `100%` },
                                      TE5nvJBv5: Re,
                                      WCTJ1U4Cv: `Quality`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                              d(U, {
                                breakpoint: S,
                                overrides: {
                                  KeIVzqCpY: {
                                    width: `calc(min(${h?.width || `100vw`}, 400px) - 56px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 7972.8 + 28 + 522.4 + 0 + 567,
                                  },
                                  OnZaJZ4e_: {
                                    width: `max((min(${h?.width || `100vw`}, 1200px) - 118px) / 4, 1px)`,
                                    y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 540.4 + 0,
                                  },
                                },
                                children: d(R, {
                                  height: 179,
                                  width: `200px`,
                                  y: (h?.y || 0) + 0 + 0 + 0 + 6916.8 + 150 + 561.4 + 0,
                                  children: d(F, {
                                    className: `framer-7j7y2a-container`,
                                    nodeId: `WeaRQEzwm`,
                                    scopeId: `augiA20Il`,
                                    children: d(Ne, {
                                      height: `100%`,
                                      id: `WeaRQEzwm`,
                                      KHTb9ulhF: `Wear Your Story`,
                                      layoutId: `WeaRQEzwm`,
                                      style: { width: `100%` },
                                      TE5nvJBv5: Be,
                                      WCTJ1U4Cv: `Identity`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      f(Ai, {
                        className: `framer-ms2ker`,
                        "data-framer-name": `FAQ's`,
                        flowEffectEnabled: !0,
                        flowEffectTransition: aa,
                        isNestedFlowEffect: !1,
                        children: [
                          f(p.div, {
                            className: `framer-38hhpd`,
                            "data-framer-name": `Header`,
                            layout: `position`,
                            children: [
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`p`, {
                                    className: `framer-styles-preset-5rfdkx`,
                                    "data-styles-preset": `CT_DBbR5R`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--token-55732a59-bc62-4580-8bcc-abc8c3da47fc, rgb(97, 97, 97))`,
                                    },
                                    children: `Ask us`,
                                  }),
                                }),
                                className: `framer-1fbiwfc`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              d(B, {
                                __fromCanvasComponent: !0,
                                children: d(i, {
                                  children: d(`h2`, {
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
                                className: `framer-5pf4ql`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          d(U, {
                            breakpoint: S,
                            overrides: {
                              KeIVzqCpY: {
                                width: `min(min(${h?.width || `100vw`}, 400px) - 56px, 600px)`,
                                y: (h?.y || 0) + 0 + 0 + 0 + 9297.2 + 28 + 97.4,
                              },
                              OnZaJZ4e_: { y: (h?.y || 0) + 0 + 0 + 0 + 7850.2 + 64 + 97.4 },
                            },
                            children: d(R, {
                              height: 513,
                              width: `min(min(${h?.width || `100vw`}, 1200px) - 88px, 600px)`,
                              y: (h?.y || 0) + 0 + 0 + 0 + 7871.2 + 64 + 109.4,
                              children: d(F, {
                                className: `framer-1uwz58d-container`,
                                layout: `position`,
                                nodeId: `Spa_lExAW`,
                                rendersWithMotion: !0,
                                scopeId: `augiA20Il`,
                                children: d(be, {
                                  height: `100%`,
                                  id: `Spa_lExAW`,
                                  layoutId: `Spa_lExAW`,
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
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-bke9J.framer-lux5qc, .framer-bke9J .framer-lux5qc { display: block; }`,
        `.framer-bke9J.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bke9J .framer-f4gz0g, .framer-bke9J .framer-hfp6rx, .framer-bke9J .framer-47vgd2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-u49tc2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1jt61op { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; max-height: 1000px; min-height: 650px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-85l6b9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 1; }`,
        `.framer-bke9J .framer-f0rlmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 32%; transform: translate(-50%, -50%); width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-bke9J .framer-t2xyid-container, .framer-bke9J .framer-1bb3hxg-container, .framer-bke9J .framer-1fecm6c-container, .framer-bke9J .framer-o7lva9-container, .framer-bke9J .framer-14bgm7a-container, .framer-bke9J .framer-f3k3w5-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bke9J .framer-1uiwh0j-container { flex: none; height: auto; position: relative; width: 100%; z-index: 1; }`,
        `.framer-bke9J .framer-695nz-container { aspect-ratio: 1.4642857142857142 / 1; flex: none; height: auto; pointer-events: none; position: relative; width: 369px; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-bke9J .framer-qyuvuf { -webkit-filter: blur(15px); align-content: center; align-items: center; bottom: 139px; display: flex; filter: blur(15px); flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 0px; pointer-events: none; position: absolute; transform: translateX(-50%); width: min-content; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
        `.framer-bke9J .framer-oaip9k { height: 50px; position: relative; width: 292px; }`,
        `.framer-bke9J .framer-nhexpl { height: 50px; left: 0px; position: absolute; top: 0px; width: 292px; }`,
        `.framer-bke9J .framer-msb7he-container { aspect-ratio: 0.5786163522012578 / 1; bottom: -560px; flex: none; height: auto; left: 50%; pointer-events: none; position: absolute; transform: translateX(-50%); width: 460px; z-index: 2; }`,
        `.framer-bke9J .framer-qvqw2a { -webkit-user-select: none; aspect-ratio: 1.5608391608391607 / 1; bottom: -252px; flex: none; height: auto; left: -63px; pointer-events: none; position: absolute; user-select: none; width: 93%; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-bke9J .framer-2qnvqy { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; left: 0px; overflow: visible; padding: 0px; pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; z-index: 4; }`,
        `.framer-bke9J .framer-hgqndl { flex: none; height: 715px; left: calc(6.833333333333355% - 1116px / 2); position: absolute; top: calc(100.00000000000003% - 715px / 2); width: 1116px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-bke9J .framer-diff9p { flex: none; height: 715px; left: calc(50.00000000000002% - 1116px / 2); position: absolute; top: calc(124.00000000000003% - 715px / 2); width: 1116px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-bke9J .framer-1gfggbi { flex: none; height: 715px; left: calc(80.25000000000003% - 1116px / 2); position: absolute; top: calc(94.62500000000003% - 715px / 2); width: 1116px; will-change: var(--framer-will-change-effect-override, transform); z-index: 1; }`,
        `.framer-bke9J .framer-yuht6y { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 44px 64px 44px; position: absolute; width: 100%; z-index: 4; }`,
        `.framer-bke9J .framer-114b2zr-container { flex: none; height: auto; position: relative; width: auto; z-index: 4; }`,
        `.framer-bke9J .framer-1rh81pr-container { -webkit-user-select: none; flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); pointer-events: none; position: absolute; top: 0px; user-select: none; width: 100%; z-index: 0; }`,
        `.framer-bke9J .framer-o2ifc4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100vh; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1vmfloi-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
        `.framer-bke9J .framer-142lr91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: visible; padding: 64px 0px 64px 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1s6siip { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-aufw6u, .framer-bke9J .framer-99y62y, .framer-bke9J .framer-1idjb5y, .framer-bke9J .framer-1g0qnu4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-bke9J .framer-1i8aiwv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1cxydv4 { -webkit-filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); filter: drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25)); flex: none; height: auto; overflow: visible; pointer-events: none; position: relative; width: 400px; z-index: 2; }`,
        `.framer-bke9J .framer-gkb3ke { -webkit-filter: blur(9px); background-color: var(--token-d40b80ee-6074-49f4-8c08-d5cd11ad308c, rgba(0, 0, 0, 0.2)); border-bottom-left-radius: 129%; border-bottom-right-radius: 129%; border-top-left-radius: 129%; border-top-right-radius: 129%; filter: blur(9px); flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; width: 334px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-bke9J .framer-1rf8da8, .framer-bke9J .framer-vr5tr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 28px 0px 28px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-15ybecb, .framer-bke9J .framer-227qqp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 300px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bke9J .framer-11rbia9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: 120vh; justify-content: center; max-width: 1300px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1kbt1jz, .framer-bke9J .framer-1rq5omq { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bke9J .framer-1ycssno { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; user-select: none; width: 100%; }`,
        `.framer-bke9J .framer-1805o0f { aspect-ratio: 3.502080443828017 / 1; flex: none; height: auto; overflow: visible; pointer-events: none; position: relative; width: 80%; }`,
        `.framer-bke9J .framer-19bpks7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 71%; overflow: visible; padding: 0px; position: absolute; top: 95%; transform: translate(-50%, -50%); width: min-content; z-index: 0; }`,
        `.framer-bke9J .framer-1sa542r { -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); aspect-ratio: 1.6228571428571428 / 1; filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); flex: none; height: auto; overflow: visible; pointer-events: none; position: relative; width: 112px; }`,
        `.framer-bke9J .framer-1ocq9fk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 93%; overflow: visible; padding: 0px; position: absolute; top: 95%; transform: translate(-50%, -50%); width: min-content; z-index: 0; }`,
        `.framer-bke9J .framer-aic6k8 { -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); aspect-ratio: 1.6228571428571428 / 1; filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); flex: none; height: auto; overflow: visible; pointer-events: none; position: relative; width: 125px; }`,
        `.framer-bke9J .framer-1e7k166 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 87%; overflow: visible; padding: 0px; position: absolute; top: 136%; transform: translate(-50%, -50%); width: min-content; z-index: 0; }`,
        `.framer-bke9J .framer-4pbbp0, .framer-bke9J .framer-jbed44 { -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); aspect-ratio: 1.6228571428571428 / 1; filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); flex: none; height: auto; overflow: visible; pointer-events: none; position: relative; width: 113px; }`,
        `.framer-bke9J .framer-1ryxzvp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 75%; overflow: visible; padding: 0px; position: absolute; top: 150%; transform: translate(-50%, -50%); width: min-content; z-index: 0; }`,
        `.framer-bke9J .framer-13fxww1 { -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); flex: none; gap: 10px; height: 37px; left: calc(82.25000000000003% - 72px / 2); overflow: visible; pointer-events: none; position: absolute; top: calc(96.7153284671533% - 37px / 2); width: 72px; z-index: 1; }`,
        `.framer-bke9J .framer-92cbqa { -webkit-filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); filter: drop-shadow(4px 4px 3px rgba(0, 0, 0, 0.05)); flex: none; gap: 10px; height: 30px; left: calc(69.25000000000003% - 72px / 2); overflow: visible; pointer-events: none; position: absolute; top: calc(123.7226277372263% - 30px / 2); width: 72px; z-index: 1; }`,
        `.framer-bke9J .framer-3l2vuv { -webkit-user-select: none; flex: none; height: 20vh; overflow: var(--overflow-clip-fallback, clip); pointer-events: none; position: relative; user-select: none; width: 100%; }`,
        `.framer-bke9J .framer-1gne6sm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-a0ucex { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 370px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 44px; position: relative; width: 1px; }`,
        `.framer-bke9J .framer-bfbap7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-bke9J .framer-13r2jrw { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: 1px; justify-content: space-between; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-5q6m52 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100%; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-bke9J .framer-g8lmf9 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; align-self: stretch; flex: none; height: auto; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bke9J .framer-dhv91h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
        `.framer-bke9J .framer-27wuwy-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-bke9J .framer-1oo7nd9 { -webkit-filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.1)); -webkit-user-select: none; filter: drop-shadow(5px 5px 6px rgba(0, 0, 0, 0.1)); flex: none; height: auto; left: 48%; overflow: visible; pointer-events: none; position: absolute; top: 51%; transform: translate(-50%, -50%); user-select: none; width: 675px; z-index: 2; }`,
        `.framer-bke9J .framer-pyp0no { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-j55qw7 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-bke9J .framer-70gblp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; max-width: 240px; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bke9J .framer-1mt72c6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 64px 100px 64px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-gsx2eb { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-102c7uw-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-v29a8c, .framer-bke9J .framer-1f6xve2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1fzcx00-container, .framer-bke9J .framer-y3v8oj-container, .framer-bke9J .framer-d8e1d4-container, .framer-bke9J .framer-uoy4as-container { aspect-ratio: 1.0291595197255574 / 1; flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-bke9J .framer-hyutv2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 150px 44px 64px 44px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-2u4mxf, .framer-bke9J .framer-38hhpd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-j47blp, .framer-bke9J .framer-1fbiwfc { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 1; }`,
        `.framer-bke9J .framer-yz5b6m, .framer-bke9J .framer-5pf4ql { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
        `.framer-bke9J .framer-1u5y6mq { -webkit-filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1)); -webkit-user-select: none; filter: drop-shadow(0px 6px 6px rgba(0, 0, 0, 0.1)); flex: none; height: auto; max-width: 650px; overflow: visible; position: relative; user-select: none; width: 100%; }`,
        `.framer-bke9J .framer-kweyv2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-jtbqbt-container, .framer-bke9J .framer-13etkcw-container, .framer-bke9J .framer-ofqc4t-container, .framer-bke9J .framer-7j7y2a-container { flex: none; height: auto; position: relative; width: 200px; }`,
        `.framer-bke9J .framer-ms2ker { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 64px 44px 64px 44px; position: relative; width: 100%; }`,
        `.framer-bke9J .framer-1uwz58d-container { flex: none; height: auto; max-width: 600px; position: relative; width: 100%; }`,
        ...St,
        ...ge,
        ...Pt,
        ...Rt,
        ...Et,
        ...At,
        ...Ae,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bke9J.framer-72rtr7 { width: 810px; } .framer-bke9J .framer-19bpks7 { left: 65%; top: 105%; } .framer-bke9J .framer-1ocq9fk { left: 97%; top: 105%; } .framer-bke9J .framer-1e7k166 { left: 95%; top: 168%; } .framer-bke9J .framer-1ryxzvp { left: 75%; top: 171%; } .framer-bke9J .framer-13fxww1 { left: calc(80.98765432098767% - 72px / 2); top: calc(107.56756756756758% - 37px / 2); } .framer-bke9J .framer-92cbqa { left: calc(60.617283950617306% - 72px / 2); top: calc(156.21621621621625% - 30px / 2); } .framer-bke9J .framer-dhv91h { justify-content: flex-start; } .framer-bke9J .framer-1oo7nd9 { height: 462px; left: calc(49.135802469135825% - 535px / 2); top: calc(50.649350649350666% - 461.5px / 2); transform: unset; width: 535px; } .framer-bke9J .framer-j55qw7 { max-width: 670px; } .framer-bke9J .framer-1u5y6mq { max-width: 600px; } .framer-bke9J .framer-jtbqbt-container, .framer-bke9J .framer-13etkcw-container, .framer-bke9J .framer-ofqc4t-container, .framer-bke9J .framer-7j7y2a-container { flex: 1 0 0px; width: 1px; } .framer-bke9J .framer-ms2ker { gap: 12px; }}`,
        `@media (max-width: 809.98px) { .framer-bke9J.framer-72rtr7 { width: 390px; } .framer-bke9J .framer-85l6b9, .framer-bke9J .framer-v29a8c, .framer-bke9J .framer-1f6xve2, .framer-bke9J .framer-kweyv2 { flex-direction: column; } .framer-bke9J .framer-f0rlmn { gap: 16px; top: 30%; } .framer-bke9J .framer-1uiwh0j-container { height: 90px; } .framer-bke9J .framer-695nz-container { width: 285px; } .framer-bke9J .framer-qyuvuf { bottom: 179px; left: 49%; } .framer-bke9J .framer-oaip9k { height: 27px; width: 173px; } .framer-bke9J .framer-nhexpl { height: 27px; left: 0px; top: 0px; width: 173px; } .framer-bke9J .framer-msb7he-container { bottom: -270px; width: 291px; } .framer-bke9J .framer-qvqw2a { bottom: -13px; left: 45%; opacity: 0.8; transform: translateX(-50%); width: 560px; } .framer-bke9J .framer-2qnvqy { bottom: 0px; left: calc(50.00000000000002% - 390px / 2); top: unset; width: 390px; } .framer-bke9J .framer-hgqndl { height: 363px; left: calc(-5.897435897435875% - 566px / 2); top: calc(98.57819905213272% - 363px / 2); width: 566px; } .framer-bke9J .framer-diff9p { height: 363px; left: calc(50.00000000000002% - 566px / 2); top: calc(98.57819905213272% - 363px / 2); width: 566px; } .framer-bke9J .framer-1gfggbi { height: 452px; left: calc(100.00000000000003% - 705px / 2); top: calc(96.3270142180095% - 452px / 2); width: 705px; } .framer-bke9J .framer-yuht6y { gap: 10px; justify-content: center; padding: 0px 28px 64px 28px; } .framer-bke9J .framer-1cxydv4 { width: 80%; } .framer-bke9J .framer-gkb3ke { width: 179px; } .framer-bke9J .framer-1ycssno { align-content: flex-start; align-items: flex-start; } .framer-bke9J .framer-1805o0f { max-width: 700px; width: 180%; } .framer-bke9J .framer-19bpks7 { left: 55%; top: 110%; } .framer-bke9J .framer-1ocq9fk { left: 97%; top: 105%; } .framer-bke9J .framer-1e7k166 { left: 96%; top: 177%; } .framer-bke9J .framer-1ryxzvp { left: 34%; top: 149%; } .framer-bke9J .framer-13fxww1 { left: calc(86.92307692307695% - 72px / 2); top: calc(136.00000000000003% - 37px / 2); } .framer-bke9J .framer-92cbqa { left: calc(58.974358974359% - 72px / 2); top: calc(164.50000000000003% - 30px / 2); } .framer-bke9J .framer-a0ucex { justify-content: flex-start; } .framer-bke9J .framer-13r2jrw { flex: none; gap: 10px; height: min-content; justify-content: center; padding: 0px 0px 0px 18px; } .framer-bke9J .framer-dhv91h { height: min-content; justify-content: flex-start; } .framer-bke9J .framer-1oo7nd9 { height: 347px; left: calc(51.02564102564104% - 402px / 2); top: calc(54.92307692307694% - 347px / 2); transform: unset; width: 402px; } .framer-bke9J .framer-pyp0no { align-content: flex-end; align-items: flex-end; height: 280px; } .framer-bke9J .framer-j55qw7 { flex-direction: column; gap: 10px; justify-content: flex-start; } .framer-bke9J .framer-70gblp { flex: none; max-width: unset; order: 1; width: 100%; } .framer-bke9J .framer-1g0qnu4 { order: 0; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-bke9J .framer-1mt72c6 { padding: 100px 28px 100px 28px; } .framer-bke9J .framer-1fzcx00-container, .framer-bke9J .framer-y3v8oj-container, .framer-bke9J .framer-d8e1d4-container, .framer-bke9J .framer-uoy4as-container { flex: none; width: 100%; } .framer-bke9J .framer-hyutv2 { gap: 44px; max-width: 400px; padding: 28px; } .framer-bke9J .framer-jtbqbt-container, .framer-bke9J .framer-13etkcw-container, .framer-bke9J .framer-ofqc4t-container, .framer-bke9J .framer-7j7y2a-container { width: 100%; } .framer-bke9J .framer-ms2ker { gap: 12px; max-width: 400px; padding: 28px; }}`,
      ],
      `framer-bke9J`
    )),
    (la.displayName = `Home`),
    (la.defaultProps = { height: 8751, width: 1200 }),
    O(
      la,
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
        ...ri,
        ...ai,
        ...ci,
        ...di,
        ...hi,
        ..._i,
        ...yi,
        ...xi,
        ...Ti,
        ...Ei,
        ...Di,
        ...Oi,
        ...ki,
        ...H(Ct),
        ...H(_e),
        ...H(Ft),
        ...H(zt),
        ...H(Dt),
        ...H(jt),
        ...H(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (la.loader = {
      load: (e, t) =>
        de(
          [
            () => v(gt, {}, t),
            () => v(q, {}, t),
            () => v(Z, {}, t),
            () => v(Xe, {}, t),
            () => v(K, {}, t),
            () => v(X, {}, t),
            () => v(it, {}, t),
            () => v(tt, {}, t),
            () => v(Oe, {}, t),
            () => v(He, {}, t),
            () => v(Q, {}, t),
            () => v(Ne, {}, t),
            () => v(be, {}, t),
          ],
          t
        ),
    }),
    (ua = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerIntrinsicHeight: `8751`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"WZazm3oIl":{"pattern":":WZazm3oIl","name":"hero-exit"},"RCLjrfv10":{"pattern":":RCLjrfv10","name":"for-the-legends"},"yYAnHL4Dd":{"pattern":":yYAnHL4Dd","name":"world-wide-shipping"}}`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"OnZaJZ4e_":{"layout":["fixed","auto"]},"KeIVzqCpY":{"layout":["fixed","auto"]}}}`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ua as __FramerMetadata__, la as default, Ni as queryParamNames };
//# sourceMappingURL=pwrxQ5gs08uFijzVuQRWuogUvb_QrJBolzlVAkhQ7VU.B1H4D3nh.mjs.map
