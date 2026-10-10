import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  C as t,
  F as n,
  I as r,
  M as i,
  N as a,
  P as o,
  T as s,
  V as c,
  _ as l,
  b as u,
  c as d,
  g as f,
  j as p,
  k as m,
  l as h,
  o as g,
  s as _,
  y as v,
  z as y,
} from "./react.BSDwOlon.mjs";
import { L as ee, S as b, V as x, a as S, f as te, r as C, t as w } from "./motion.CxF0nSu_.mjs";
import {
  A as T,
  At as E,
  C as D,
  Ct as O,
  D as k,
  Dt as A,
  E as j,
  Et as M,
  F as N,
  Ft as ne,
  H as P,
  Mt as re,
  N as F,
  O as ie,
  Ot as ae,
  Pt as oe,
  St as se,
  T as ce,
  U as I,
  V as L,
  Y as R,
  a as z,
  b as le,
  bt as ue,
  ct as de,
  f as fe,
  ft as pe,
  gt as me,
  ht as he,
  i as B,
  k as ge,
  lt as _e,
  n as ve,
  o as V,
  pt as ye,
  tt as be,
  u as xe,
  vt as Se,
  wt as Ce,
  x as H,
  yt as we,
} from "./framer.qahQ4u2X.mjs";
import { a as Te, i as Ee, o as De, r as Oe } from "./shared-lib.C3NetiJi.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./KRUEduuRo.CVOp9RB9.mjs";
import { n as Ne, t as Pe } from "./TextRevealScroll.BlaxSwag.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./nqYznXGVD.CwEAfUBz.mjs";
import {
  a as ze,
  c as Be,
  i as Ve,
  n as He,
  o as Ue,
  r as We,
  s as Ge,
  t as Ke,
} from "./kJFpmPtbb.CdkxtvXM.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./zfGqUZJYU.Dkhslrla.mjs";
import { n as Ze, t as Qe } from "./JG_j3MT2u.JUuCAjku.mjs";
import { n as $e, t as et } from "./u6sZbq51Z.ChlA8XFS.mjs";
import { i as tt, t as nt } from "./lmAnavhxT.BYm9uwFY.mjs";
import rt, { t as it } from "./v8W31r2DWRJBPF8ZGnsjla3QN473U1PyQWWk9hcSq9E.Cd4fAYki.mjs";
function at(e) {
  let { sectionId: t, svgPath: n, color: i, strokeWidth: a, viewBox: s, style: u } = e,
    f = m(null),
    [p, h] = r(0),
    g = me(),
    _ =
      n ||
      `M1262.5 257.5C2024.33 551.666 3503.3 982.2 3324.5 351C3101 -438 2293 525 1424 1195.5C555 1866 -562.5 90.4996 468 351C1292.4 559.4 2529.5 1451.83 3045 1872`;
  o(() => {
    if (g) {
      h(0);
      return;
    }
    function e() {
      if (!t) return;
      let e = document.getElementById(t);
      if (!e) return;
      let n = e.getBoundingClientRect(),
        r = c.innerHeight || document.documentElement.clientHeight,
        i = n.height,
        a = 0;
      if (n.top > r) a = 0;
      else if (n.bottom < r) a = 1;
      else {
        let e = r - n.top;
        a = Math.min(1, Math.max(0, e / i));
      }
      l(() => h(a));
    }
    return (
      c.addEventListener(`scroll`, e, { passive: !0 }),
      c.addEventListener(`resize`, e),
      e(),
      () => {
        (c.removeEventListener(`scroll`, e), c.removeEventListener(`resize`, e));
      }
    );
  }, [t, g]);
  let [v, y] = r(1);
  (o(() => {
    f.current && y(f.current.getTotalLength());
  }, [n, a]),
    v * (1 - (g ? 0 : p)));
  let ee = v * (1 - p);
  return d(`svg`, {
    width: `100%`,
    height: `100%`,
    viewBox: s || `0 0 3394 1915`,
    fill: `none`,
    style: { display: `block`, width: `100%`, height: `100%`, overflow: `visible`, ...u },
    "aria-hidden": `true`,
    preserveAspectRatio: `none`,
    children: d(`path`, {
      ref: f,
      d: _,
      stroke: i,
      strokeWidth: a,
      fill: `none`,
      strokeDasharray: v,
      strokeDashoffset: g ? 0 : ee,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    }),
  });
}
var ot = e(() => {
  (y(),
    g(),
    s(),
    R(),
    T(at, {
      sectionId: {
        type: V.String,
        title: `Section ID`,
        defaultValue: `section1`,
        placeholder: `section1`,
      },
      svgPath: {
        type: V.String,
        title: `SVG Path`,
        defaultValue: `M1262.5 257.5C2024.33 551.666 3503.3 982.2 3324.5 351C3101 -438 2293 525 1424 1195.5C555 1866 -562.5 90.4996 468 351C1292.4 559.4 2529.5 1451.83 3045 1872`,
        displayTextArea: !0,
        placeholder: `Paste SVG path data here...`,
      },
      color: { type: V.Color, title: `Stroke Color`, defaultValue: `#000000` },
      strokeWidth: {
        type: V.Number,
        title: `Stroke Width`,
        defaultValue: 109,
        min: 1,
        max: 200,
        step: 1,
        unit: `px`,
      },
      viewBox: {
        type: V.String,
        title: `ViewBox`,
        defaultValue: `0 0 3394 1915`,
        placeholder: `0 0 3394 1915`,
      },
    }));
});
function st(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ct,
  lt,
  ut,
  dt,
  U,
  ft,
  pt,
  mt,
  ht,
  gt,
  W,
  _t = e(() => {
    (g(),
      R(),
      w(),
      s(),
      Fe(),
      (ct = [`gTz9r7EH7`, `vAaswUOa7`, `R9zAwefnt`, `nZJ4FiG06`]),
      (lt = `framer-5vCaE`),
      (ut = {
        gTz9r7EH7: `framer-v-vfob88`,
        nZJ4FiG06: `framer-v-e9waz0`,
        R9zAwefnt: `framer-v-dd3ioh`,
        vAaswUOa7: `framer-v-gwrmmo`,
      }),
      (dt = { duration: 0, type: `tween` }),
      (U = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ft = ({ value: e, children: t }) => {
        let n = p(S),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (pt = {
        "Step 1": `gTz9r7EH7`,
        "Step 2": `vAaswUOa7`,
        "Step 3": `R9zAwefnt`,
        "Step 4": `nZJ4FiG06`,
      }),
      (mt = b.create(n)),
      (ht = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: pt[r.variant] ?? r.variant ?? `gTz9r7EH7`,
      })),
      (gt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (W = A(
        f(function (e, t) {
          let r = m(null),
            i = t ?? r,
            a = v(),
            { activeLocale: o, setLocale: s } = Se();
          _e();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = ht(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: ee,
              gestureVariant: x,
              isLoading: S,
              setGestureState: te,
              setVariant: w,
              variants: T,
            } = M({
              cycleOrder: ct,
              defaultVariant: `gTz9r7EH7`,
              ref: i,
              variant: f,
              variantClassNames: ut,
            }),
            E = gt(e, T),
            { activeVariantCallback: D, delay: O } = de(g),
            k = D(async (...e) => {
              await O(() => w(`vAaswUOa7`, !0), 1e3);
            }),
            A = D(async (...e) => {
              await O(() => w(`R9zAwefnt`, !0), 1500);
            }),
            N = D(async (...e) => {
              await O(() => w(`nZJ4FiG06`, !0), 1500);
            });
          ue(g, {
            default: k,
            nZJ4FiG06: D(async (...e) => {
              await O(() => w(`gTz9r7EH7`, !0), 500);
            }),
            R9zAwefnt: N,
            vAaswUOa7: A,
          });
          let ne = F(lt, Re);
          return d(C, {
            id: u ?? a,
            children: d(mt, {
              animate: T,
              initial: !1,
              children: d(ft, {
                value: dt,
                ...st(
                  { nZJ4FiG06: { value: U }, R9zAwefnt: { value: U }, vAaswUOa7: { value: U } },
                  g,
                  x
                ),
                children: h(b.div, {
                  ...p,
                  ...ee,
                  className: F(ne, `framer-vfob88`, l, _),
                  "data-framer-name": `Step 1`,
                  "data-highlight": !0,
                  layoutDependency: E,
                  layoutId: `gTz9r7EH7`,
                  ref: i,
                  style: { ...c },
                  ...st(
                    {
                      nZJ4FiG06: { "data-framer-name": `Step 4` },
                      R9zAwefnt: { "data-framer-name": `Step 3` },
                      vAaswUOa7: { "data-framer-name": `Step 2` },
                    },
                    g,
                    x
                  ),
                  children: [
                    d(ft, {
                      value: dt,
                      ...st(
                        {
                          nZJ4FiG06: { value: U },
                          R9zAwefnt: { value: U },
                          vAaswUOa7: { value: U },
                        },
                        g,
                        x
                      ),
                      children: d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.h2, {
                            className: `framer-styles-preset-gadxkx`,
                            "data-styles-preset": `nqYznXGVD`,
                            dir: `auto`,
                            children: `bite`,
                          }),
                        }),
                        className: `framer-7peiyd`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `hhtjEdooI`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    d(ft, {
                      value: dt,
                      ...st(
                        {
                          nZJ4FiG06: { value: U },
                          R9zAwefnt: { value: U },
                          vAaswUOa7: { value: U },
                        },
                        g,
                        x
                      ),
                      children: d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.h2, {
                            className: `framer-styles-preset-gadxkx`,
                            "data-styles-preset": `nqYznXGVD`,
                            dir: `auto`,
                            children: `melt`,
                          }),
                        }),
                        className: `framer-22f2fj`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `jW7yirI9h`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    d(ft, {
                      value: dt,
                      ...st(
                        {
                          nZJ4FiG06: { value: U },
                          R9zAwefnt: { value: U },
                          vAaswUOa7: { value: U },
                        },
                        g,
                        x
                      ),
                      children: d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.h2, {
                            className: `framer-styles-preset-gadxkx`,
                            "data-styles-preset": `nqYznXGVD`,
                            dir: `auto`,
                            children: `yum`,
                          }),
                        }),
                        className: `framer-1jniexb`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `rcXwNTgfH`,
                        style: {
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    }),
                    d(ft, {
                      value: dt,
                      ...st(
                        {
                          nZJ4FiG06: { value: U },
                          R9zAwefnt: { value: U },
                          vAaswUOa7: { value: U },
                        },
                        g,
                        x
                      ),
                      children: d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.h2, {
                            className: `framer-styles-preset-gadxkx`,
                            "data-styles-preset": `nqYznXGVD`,
                            dir: `auto`,
                            children: `bite`,
                          }),
                        }),
                        className: `framer-auewig`,
                        fonts: [`Inter`],
                        layoutDependency: E,
                        layoutId: `w3sGab9aG`,
                        style: {
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
          `.framer-5vCaE.framer-1czbti7, .framer-5vCaE .framer-1czbti7 { display: block; }`,
          `.framer-5vCaE.framer-vfob88 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 250px; }`,
          `.framer-5vCaE .framer-7peiyd { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-5vCaE .framer-22f2fj, .framer-5vCaE .framer-1jniexb, .framer-5vCaE .framer-auewig { bottom: -120px; flex: none; height: auto; left: 0px; position: absolute; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-5vCaE.framer-v-gwrmmo .framer-7peiyd, .framer-5vCaE.framer-v-dd3ioh .framer-7peiyd, .framer-5vCaE.framer-v-e9waz0 .framer-7peiyd { left: 0px; position: absolute; top: -120px; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-5vCaE.framer-v-gwrmmo .framer-22f2fj, .framer-5vCaE.framer-v-dd3ioh .framer-1jniexb, .framer-5vCaE.framer-v-e9waz0 .framer-auewig { bottom: unset; left: unset; position: relative; white-space: pre; width: auto; }`,
          `.framer-5vCaE.framer-v-dd3ioh .framer-22f2fj, .framer-5vCaE.framer-v-e9waz0 .framer-22f2fj, .framer-5vCaE.framer-v-e9waz0 .framer-1jniexb { bottom: unset; top: -120px; white-space: pre; width: auto; }`,
          ...Ie,
        ],
        `framer-5vCaE`
      )),
      (W.displayName = `Scroll Text`),
      (W.defaultProps = { height: 112, width: 250 }),
      T(W, {
        variant: {
          options: [`gTz9r7EH7`, `vAaswUOa7`, `R9zAwefnt`, `nZJ4FiG06`],
          optionTitles: [`Step 1`, `Step 2`, `Step 3`, `Step 4`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      ge(
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
          ...P(Le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function vt(e) {
  let { mode: t, start: n, end: i, value: a, decimals: s, commas: c, color: l, animation: u } = e,
    d = D.current() === D.canvas,
    f = e.tag,
    p = b[e.tag],
    g = t == "default",
    v = g ? n : a,
    y = g ? u.transition : e.transition,
    S = (e) => {
      let t = e.toFixed(s);
      return (c && (t = t.replace(/\B(?=(\d{3})+(?!\d))/g, `,`)), t);
    },
    [C, w] = r(v),
    [T, E] = r(C),
    [O, k] = r(null),
    A = m(null),
    j = ee(A, { once: !e.animation.replay, amount: `some` });
  x(a);
  let M = (e, t) => {
    d ||
      (O && O.stop(),
      E(t),
      k(
        te(e, t, {
          ...y,
          onUpdate: (e) => {
            w(e);
          },
        })
      ));
  };
  return (
    o(() => {
      g && u.trigger == `appear` && M(n, i);
    }, []),
    o(() => {
      g && u.trigger == `layerInView` && (j ? M(n, i) : (O && O.stop(), w(n)));
    }, [j]),
    o(() => {
      g || M(C, a);
    }, [a]),
    h(_, {
      children: [
        h(f, {
          style: {
            ...e.style,
            margin: 0,
            opacity: 0,
            pointerEvents: `none`,
            userSelect: `none`,
            textWrap: e.balance ? `balance` : void 0,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            textAlign: `center`,
            ...e.font,
          },
          children: [e.prefix, S(d ? v : T), e.suffix],
        }),
        h(p, {
          ref: A,
          style: {
            position: `absolute`,
            inset: 0,
            userSelect: e.userSelect ? `auto` : `none`,
            fontVariantNumeric: e.monospace ? `tabular-nums` : void 0,
            margin: 0,
            ...(l.mode == `solid`
              ? { color: l.color }
              : {
                  WebkitBackgroundClip: `text`,
                  WebkitTextFillColor: `transparent`,
                  backgroundImage: `linear-gradient(${l.angle}deg, ${l.startColor}, ${l.endColor})`,
                }),
            textDecoration: e.decoration,
            textWrap: e.balance ? `balance` : void 0,
            textAlign: `center`,
            ...e.font,
            ...e.style,
          },
          children: [e.prefix, S(d ? v : C), e.suffix],
        }),
      ],
    })
  );
}
var yt = e(() => {
  (g(),
    R(),
    s(),
    w(),
    (vt.displayName = `Animated Number Counter`),
    T(vt, {
      mode: {
        type: V.Enum,
        options: [`default`, `variants`],
        optionTitles: [`Default`, `Variants`],
        displaySegmentedControl: !0,
      },
      value: { type: V.Number, defaultValue: 0, hidden: (e) => e.mode !== `variants` },
      start: { type: V.Number, defaultValue: 0, hidden: (e) => e.mode !== "default" },
      end: { type: V.Number, defaultValue: 100, hidden: (e) => e.mode !== "default" },
      animation: {
        type: V.Object,
        icon: `effect`,
        hidden: (e) => e.mode !== "default",
        controls: {
          trigger: {
            type: V.Enum,
            defaultValue: `layerInView`,
            options: [`appear`, `layerInView`],
            optionTitles: [`Appear`, `Layer in View`],
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
          },
          replay: {
            type: V.Boolean,
            defaultValue: !0,
            hidden(e) {
              return e.trigger !== `layerInView`;
            },
          },
          transition: {
            type: V.Transition,
            defaultValue: { type: `spring`, duration: 1, bounce: 0 },
          },
        },
      },
      transition: {
        type: V.Transition,
        defaultValue: { type: `spring`, duration: 1, bounce: 0 },
        hidden: (e) => e.mode !== `variants`,
      },
      decimals: {
        type: V.Enum,
        defaultValue: 0,
        options: [0, 1, 2, 3],
        optionTitles: [`Off`, `1`, `2`, `3`],
        displaySegmentedControl: !0,
      },
      commas: { type: V.Boolean, defaultValue: !0 },
      font: {
        type: `font`,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: { fontSize: 16, lineHeight: 1 },
      },
      color: {
        type: V.Object,
        controls: {
          mode: {
            type: V.Enum,
            defaultValue: `solid`,
            options: [`solid`, `gradient`],
            optionTitles: [`Solid`, `Gradient`],
            displaySegmentedControl: !0,
          },
          color: { type: V.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `solid` },
          startColor: { type: V.Color, defaultValue: `#000`, hidden: (e) => e.mode !== `gradient` },
          endColor: { type: V.Color, defaultValue: `#FFF`, hidden: (e) => e.mode !== `gradient` },
          angle: {
            type: V.Number,
            defaultValue: 180,
            min: -360,
            max: 360,
            unit: `°`,
            hidden: (e) => e.mode !== `gradient`,
          },
        },
      },
      prefix: { type: V.String, placeholder: `Prefix` },
      suffix: { type: V.String, placeholder: `Suffix` },
      decoration: {
        type: V.Enum,
        defaultValue: `none`,
        options: [`none`, `underline`, `line-through`],
        optionTitles: [`None`, `Underline`, `Strikethrough`],
      },
      balance: { type: V.Boolean, defaultValue: !1 },
      userSelect: { type: V.Boolean, defaultValue: !0 },
      tag: {
        type: V.Enum,
        defaultValue: `p`,
        displaySegmentedControl: !0,
        options: [`h1`, `h2`, `h3`, `p`],
        optionTitles: [`H1`, `H2`, `H3`, `P`],
      },
      monospace: {
        type: V.Boolean,
        defaultValue: !1,
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function bt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
  St,
  Ct,
  wt,
  Tt,
  G,
  Et,
  K,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  q,
  Pt = e(() => {
    (g(),
      R(),
      w(),
      s(),
      yt(),
      Be(),
      (xt = re(E(fe))),
      (St = L(vt)),
      (Ct = [`pyQuyERBv`, `djOSk7KG6`, `aLBxMee9K`, `udIcyAMZn`, `ZtowqxT7d`, `wSAMy8gmV`]),
      (wt = `framer-IhtTe`),
      (Tt = {
        aLBxMee9K: `framer-v-b99dq0`,
        djOSk7KG6: `framer-v-1q7c5us`,
        pyQuyERBv: `framer-v-8b8b1a`,
        udIcyAMZn: `framer-v-166n7by`,
        wSAMy8gmV: `framer-v-h61o0n`,
        ZtowqxT7d: `framer-v-b2ouo`,
      }),
      (G = { delay: 0, duration: 0.8, ease: [1, 0, 0.56, 1], type: `tween` }),
      (Et = { delay: 0.6, duration: 0.8, ease: [1, 0, 0.56, 1], type: `tween` }),
      (K = ({ value: e, children: t }) => {
        let n = p(S),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Dt = (e, t) => `translate(-50%, -50%) ${t}`),
      (Ot = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 2, ease: [1, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (kt = {
        opacity: 1,
        rotate: -360,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (At = {
        "Desktop 2": `djOSk7KG6`,
        "Phone 2": `wSAMy8gmV`,
        "Tablet 2": `udIcyAMZn`,
        Desktop: `pyQuyERBv`,
        Phone: `ZtowqxT7d`,
        Tablet: `aLBxMee9K`,
      }),
      (jt = b.create(n)),
      (Mt = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: At[r.variant] ?? r.variant ?? `pyQuyERBv`,
      })),
      (Nt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = A(
        f(function (e, t) {
          let r = m(null),
            i = t ?? r,
            a = v(),
            { activeLocale: o, setLocale: s } = Se(),
            c = _e(),
            { style: l, className: u, layoutId: f, variant: p, ...g } = Mt(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: te,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = M({
              cycleOrder: Ct,
              defaultVariant: `pyQuyERBv`,
              ref: i,
              variant: p,
              variantClassNames: Tt,
            }),
            D = Nt(e, E),
            { activeVariantCallback: O, delay: A } = de(_),
            N = O(async (...e) => {
              await A(() => T(`djOSk7KG6`, !0), 2100);
            });
          ue(_, {
            aLBxMee9K: O(async (...e) => {
              await A(() => T(`udIcyAMZn`, !0), 2100);
            }),
            default: N,
            djOSk7KG6: void 0,
            udIcyAMZn: void 0,
            wSAMy8gmV: void 0,
            ZtowqxT7d: O(async (...e) => {
              await A(() => T(`wSAMy8gmV`, !0), 2100);
            }),
          });
          let ne = F(wt, ze);
          return d(C, {
            id: f ?? a,
            children: d(jt, {
              animate: E,
              initial: !1,
              children: d(K, {
                value: G,
                children: h(b.div, {
                  ...g,
                  ...x,
                  className: F(ne, `framer-8b8b1a`, u, y),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `pyQuyERBv`,
                  ref: i,
                  style: { ...l },
                  ...bt(
                    {
                      aLBxMee9K: { "data-framer-name": `Tablet` },
                      djOSk7KG6: { "data-framer-name": `Desktop 2`, "data-highlight": void 0 },
                      udIcyAMZn: { "data-framer-name": `Tablet 2`, "data-highlight": void 0 },
                      wSAMy8gmV: { "data-framer-name": `Phone 2`, "data-highlight": void 0 },
                      ZtowqxT7d: { "data-framer-name": `Phone` },
                    },
                    _,
                    S
                  ),
                  children: [
                    d(K, {
                      value: Et,
                      children: d(b.div, {
                        className: `framer-810g95`,
                        "data-framer-name": `Background`,
                        layoutDependency: D,
                        layoutId: `iaW6SrqO3`,
                        style: {
                          backgroundColor: `var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))`,
                          scale: 1,
                        },
                        variants: {
                          aLBxMee9K: { scale: 1 },
                          djOSk7KG6: { scale: 0 },
                          udIcyAMZn: { scale: 0 },
                          wSAMy8gmV: { scale: 0 },
                          ZtowqxT7d: { scale: 1 },
                        },
                      }),
                    }),
                    d(K, {
                      value: G,
                      children: d(b.div, {
                        className: `framer-fsc9i2`,
                        "data-framer-name": `Loading`,
                        layoutDependency: D,
                        layoutId: `fmuBaR9zR`,
                        transformTemplate: Dt,
                        children: d(K, {
                          value: G,
                          children: h(b.div, {
                            className: `framer-x4hla`,
                            "data-framer-name": `Text`,
                            layoutDependency: D,
                            layoutId: `vctpTT2ZJ`,
                            style: { rotate: 0, scale: 1 },
                            variants: {
                              aLBxMee9K: { rotate: 0, scale: 1 },
                              djOSk7KG6: { rotate: -15, scale: 0 },
                              udIcyAMZn: { rotate: -15, scale: 0 },
                              wSAMy8gmV: { rotate: -15, scale: 0 },
                              ZtowqxT7d: { rotate: 0, scale: 1 },
                            },
                            children: [
                              d(K, {
                                value: G,
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(b.p, {
                                      className: `framer-styles-preset-15fb0k4`,
                                      "data-styles-preset": `Gwy_nKUUa`,
                                      dir: `auto`,
                                      children: `L`,
                                    }),
                                  }),
                                  className: `framer-1dl4iaz`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `i1ulxQSUu`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              d(K, {
                                value: G,
                                children: d(xt, {
                                  __perspectiveFX: !1,
                                  __smartComponentFX: !0,
                                  __targetOpacity: 1,
                                  animate: Ot,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 972,
                                    intrinsicWidth: 977.3333333333334,
                                    loading: I(
                                      (c?.y || 0) +
                                        ((c?.height || 800) * 0.5000000000000002 - 100) +
                                        0 +
                                        0 +
                                        64
                                    ),
                                    pixelHeight: 1458,
                                    pixelWidth: 1466,
                                    sizes: `72px`,
                                    src: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png`,
                                    srcSet: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA.png 512w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-92ed83.png 1024w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png 1466w`,
                                  },
                                  className: `framer-ijok8`,
                                  "data-framer-appear-id": `ijok8`,
                                  initial: kt,
                                  layoutDependency: D,
                                  layoutId: `llDwviRbg`,
                                  optimized: !0,
                                  ...bt(
                                    {
                                      aLBxMee9K: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 972,
                                          intrinsicWidth: 977.3333333333334,
                                          loading: I(
                                            (c?.y || 0) +
                                              ((c?.height || 800) * 0.5000000000000002 - 100) +
                                              0 +
                                              0 +
                                              80
                                          ),
                                          pixelHeight: 1458,
                                          pixelWidth: 1466,
                                          sizes: `56px`,
                                          src: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png`,
                                          srcSet: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA.png 512w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-92ed83.png 1024w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png 1466w`,
                                        },
                                      },
                                      udIcyAMZn: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 972,
                                          intrinsicWidth: 977.3333333333334,
                                          loading: I(
                                            (c?.y || 0) +
                                              ((c?.height || 800) * 0.5000000000000002 - 100) +
                                              0 +
                                              0 +
                                              80
                                          ),
                                          pixelHeight: 1458,
                                          pixelWidth: 1466,
                                          sizes: `56px`,
                                          src: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png`,
                                          srcSet: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA.png 512w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-92ed83.png 1024w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png 1466w`,
                                        },
                                      },
                                      wSAMy8gmV: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 972,
                                          intrinsicWidth: 977.3333333333334,
                                          loading: I(
                                            (c?.y || 0) +
                                              ((c?.height || 800) * 0.5000000000000002 - 100) +
                                              0 +
                                              0 +
                                              80
                                          ),
                                          pixelHeight: 1458,
                                          pixelWidth: 1466,
                                          sizes: `56px`,
                                          src: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png`,
                                          srcSet: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA.png 512w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-92ed83.png 1024w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png 1466w`,
                                        },
                                      },
                                      ZtowqxT7d: {
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 972,
                                          intrinsicWidth: 977.3333333333334,
                                          loading: I(
                                            (c?.y || 0) +
                                              ((c?.height || 800) * 0.5000000000000002 - 100) +
                                              0 +
                                              0 +
                                              71.5
                                          ),
                                          pixelHeight: 1458,
                                          pixelWidth: 1466,
                                          sizes: `45px`,
                                          src: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png`,
                                          srcSet: `../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA.png 512w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-92ed83.png 1024w,../../assets/images/99Ojg3DOD4aQcCwNRptg7cHyA-a523bf.png 1466w`,
                                        },
                                      },
                                    },
                                    _,
                                    S
                                  ),
                                }),
                              }),
                              d(K, {
                                value: G,
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(b.p, {
                                      className: `framer-styles-preset-15fb0k4`,
                                      "data-styles-preset": `Gwy_nKUUa`,
                                      dir: `auto`,
                                      children: `ADING `,
                                    }),
                                  }),
                                  className: `framer-t8zk5j`,
                                  fonts: [`Inter`],
                                  layoutDependency: D,
                                  layoutId: `IrQ0cxEvU`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              d(K, {
                                value: G,
                                children: d(B, {
                                  children: d(k, {
                                    className: `framer-19spi6g-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: D,
                                    layoutId: `VcbyvgU8K-container`,
                                    nodeId: `VcbyvgU8K`,
                                    rendersWithMotion: !0,
                                    scopeId: `B8XA8ff9K`,
                                    children: d(vt, {
                                      animation: {
                                        replay: !0,
                                        transition: {
                                          delay: 0,
                                          duration: 2,
                                          ease: [1, 0, 0.56, 1],
                                          type: `tween`,
                                        },
                                        trigger: `appear`,
                                      },
                                      balance: !1,
                                      color: {
                                        angle: 180,
                                        color: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                        endColor: `rgb(255, 255, 255)`,
                                        mode: `solid`,
                                        startColor: `rgb(0, 0, 0)`,
                                      },
                                      commas: !0,
                                      decimals: 0,
                                      decoration: `none`,
                                      end: 100,
                                      font: {
                                        fontFamily: `"Boldonse", sans-serif`,
                                        fontSize: `52px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `0em`,
                                        lineHeight: `140%`,
                                      },
                                      height: `100%`,
                                      id: `VcbyvgU8K`,
                                      layoutId: `VcbyvgU8K`,
                                      mode: `default`,
                                      monospace: !1,
                                      prefix: ``,
                                      start: 0,
                                      suffix: `%`,
                                      tag: `p`,
                                      transition: {
                                        bounce: 0,
                                        delay: 0,
                                        duration: 1,
                                        type: `spring`,
                                      },
                                      userSelect: !0,
                                      value: 0,
                                      width: `100%`,
                                      ...bt(
                                        {
                                          aLBxMee9K: {
                                            font: {
                                              fontFamily: `"Boldonse", sans-serif`,
                                              fontSize: `40px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `140%`,
                                            },
                                          },
                                          udIcyAMZn: {
                                            font: {
                                              fontFamily: `"Boldonse", sans-serif`,
                                              fontSize: `40px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `140%`,
                                            },
                                          },
                                          wSAMy8gmV: {
                                            font: {
                                              fontFamily: `"Boldonse", sans-serif`,
                                              fontSize: `32px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `140%`,
                                            },
                                          },
                                          ZtowqxT7d: {
                                            font: {
                                              fontFamily: `"Boldonse", sans-serif`,
                                              fontSize: `32px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `0em`,
                                              lineHeight: `140%`,
                                            },
                                          },
                                        },
                                        _,
                                        S
                                      ),
                                    }),
                                  }),
                                }),
                              }),
                            ],
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
          `.framer-IhtTe.framer-li9yrm, .framer-IhtTe .framer-li9yrm { display: block; }`,
          `.framer-IhtTe.framer-8b8b1a { height: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
          `.framer-IhtTe .framer-810g95 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
          `.framer-IhtTe .framer-fsc9i2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; left: 50%; overflow: visible; padding: 0px; position: absolute; top: 50%; width: min-content; }`,
          `.framer-IhtTe .framer-x4hla { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-IhtTe .framer-1dl4iaz, .framer-IhtTe .framer-t8zk5j { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-IhtTe .framer-ijok8 { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: visible; position: relative; width: 72px; z-index: 1; }`,
          `.framer-IhtTe .framer-19spi6g-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-IhtTe.framer-v-b99dq0.framer-8b8b1a, .framer-IhtTe.framer-v-166n7by.framer-8b8b1a { width: 810px; }`,
          `.framer-IhtTe.framer-v-b99dq0 .framer-ijok8, .framer-IhtTe.framer-v-166n7by .framer-ijok8, .framer-IhtTe.framer-v-h61o0n .framer-ijok8 { width: 56px; }`,
          `.framer-IhtTe.framer-v-b2ouo.framer-8b8b1a, .framer-IhtTe.framer-v-h61o0n.framer-8b8b1a { width: 390px; }`,
          `.framer-IhtTe.framer-v-b2ouo .framer-ijok8 { width: 45px; }`,
          ...Ue,
        ],
        `framer-IhtTe`
      )),
      (q.displayName = `Pre-Loading`),
      (q.defaultProps = { height: 800, width: 1200 }),
      T(q, {
        variant: {
          options: [`pyQuyERBv`, `djOSk7KG6`, `aLBxMee9K`, `udIcyAMZn`, `ZtowqxT7d`, `wSAMy8gmV`],
          optionTitles: [`Desktop`, `Desktop 2`, `Tablet`, `Tablet 2`, `Phone`, `Phone 2`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      ge(
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
              {
                cssFamilyName: `Boldonse`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Boldonse`,
                url: `../../assets/fonts/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2`,
                weight: `400`,
              },
            ],
          },
          ...St,
          ...P(Ge),
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
  J,
  Gt = e(() => {
    (g(),
      R(),
      w(),
      s(),
      Be(),
      Ve(),
      qe(),
      (It = [`Lq6qMO1wD`, `wgfKueV3o`]),
      (Lt = `framer-UX7Aw`),
      (Rt = { Lq6qMO1wD: `framer-v-14iq7gg`, wgfKueV3o: `framer-v-19n83yo` }),
      (zt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Bt = ({ value: e, children: t }) => {
        let n = p(S),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Vt = { Desktop: `Lq6qMO1wD`, Tablet: `wgfKueV3o` }),
      (Ht = b.create(n)),
      (Ut = ({ amount: e, contents: t, fill: n, height: r, id: i, title: a, width: o, ...s }) => ({
        ...s,
        HBmxY9Kbe:
          n ??
          s.HBmxY9Kbe ??
          `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
        mn4yvruQw:
          t ??
          s.mn4yvruQw ??
          `We begin with carefully selected ingredients to create soft textures, rich flavor, fresh daily quality, & comforting sweetness in every handcrafted.`,
        RDnk54NNJ: a ?? s.RDnk54NNJ ?? `Premium Ingredients`,
        sY4B1rfYc: e ?? s.sY4B1rfYc ?? `01`,
        variant: Vt[s.variant] ?? s.variant ?? `Lq6qMO1wD`,
      })),
      (Wt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = A(
        f(function (e, t) {
          let r = m(null),
            i = t ?? r,
            a = v(),
            { activeLocale: o, setLocale: s } = Se();
          _e();
          let {
              style: c,
              className: l,
              layoutId: u,
              variant: f,
              sY4B1rfYc: p,
              RDnk54NNJ: g,
              mn4yvruQw: _,
              HBmxY9Kbe: y,
              ...ee
            } = Ut(e),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: te,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = M({
              cycleOrder: It,
              defaultVariant: `Lq6qMO1wD`,
              ref: i,
              variant: f,
              variantClassNames: Rt,
            }),
            A = Wt(e, k),
            N = F(Lt, ze, Xe, Ke);
          return d(C, {
            id: u ?? a,
            children: d(Ht, {
              animate: k,
              initial: !1,
              children: d(Bt, {
                value: zt,
                children: d(b.div, {
                  ...ee,
                  ...w,
                  className: F(N, `framer-14iq7gg`, l, S),
                  "data-framer-name": `Desktop`,
                  layoutDependency: A,
                  layoutId: `Lq6qMO1wD`,
                  ref: i,
                  style: {
                    backgroundColor: y,
                    borderBottomLeftRadius: 20,
                    borderBottomRightRadius: 20,
                    borderTopLeftRadius: 20,
                    borderTopRightRadius: 20,
                    ...c,
                  },
                  ...Ft({ wgfKueV3o: { "data-framer-name": `Tablet` } }, x, T),
                  children: h(b.div, {
                    className: `framer-1p4ftje`,
                    "data-framer-name": `Container`,
                    layoutDependency: A,
                    layoutId: `gsMzVjnv6`,
                    children: [
                      d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.p, {
                            className: `framer-styles-preset-15fb0k4`,
                            "data-styles-preset": `Gwy_nKUUa`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                            },
                            children: `01`,
                          }),
                        }),
                        className: `framer-oks1kz`,
                        fonts: [`Inter`],
                        layoutDependency: A,
                        layoutId: `RsAQ8LSYH`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: p,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      h(b.div, {
                        className: `framer-1u4ullu`,
                        "data-framer-name": `Text`,
                        layoutDependency: A,
                        layoutId: `gH2aDBDVC`,
                        children: [
                          d(j, {
                            __fromCanvasComponent: !0,
                            children: d(n, {
                              children: d(b.h3, {
                                className: `framer-styles-preset-1ik37uq`,
                                "data-styles-preset": `zfGqUZJYU`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-a0htzi, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                },
                                children: `Premium Ingredients`,
                              }),
                            }),
                            className: `framer-aulbli`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `PXtuLqO1o`,
                            style: {
                              "--extracted-a0htzi": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: g,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          d(j, {
                            __fromCanvasComponent: !0,
                            children: d(n, {
                              children: d(b.p, {
                                className: `framer-styles-preset-1u3gdcs`,
                                "data-styles-preset": `kJFpmPtbb`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                },
                                children: `We begin with carefully selected ingredients to create soft textures, rich flavor, fresh daily quality, & comforting sweetness in every handcrafted.`,
                              }),
                            }),
                            className: `framer-1729ciz`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `DWSVzJeXB`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: _,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
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
          `.framer-UX7Aw.framer-12ed0h2, .framer-UX7Aw .framer-12ed0h2 { display: block; }`,
          `.framer-UX7Aw.framer-14iq7gg { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 500px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-UX7Aw .framer-1p4ftje { align-content: center; align-items: center; aspect-ratio: 1.4986666666666666 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: var(--framer-aspect-ratio-supported, 334px); justify-content: space-between; overflow: visible; padding: 20px; position: relative; width: 100%; }`,
          `.framer-UX7Aw .framer-oks1kz, .framer-UX7Aw .framer-aulbli, .framer-UX7Aw .framer-1729ciz { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-UX7Aw .framer-1u4ullu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-UX7Aw.framer-v-19n83yo .framer-1p4ftje { aspect-ratio: 1.0416666666666667 / 1; height: var(--framer-aspect-ratio-supported, 480px); }`,
          ...Ue,
          ...Je,
          ...He,
        ],
        `framer-UX7Aw`
      )),
      (J.displayName = `Key Featured Card`),
      (J.defaultProps = { height: 334, width: 500 }),
      T(J, {
        variant: {
          options: [`Lq6qMO1wD`, `wgfKueV3o`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: V.Enum,
        },
        sY4B1rfYc: { defaultValue: `01`, displayTextArea: !1, title: `Amount`, type: V.String },
        onsY4B1rfYcChange: { changes: `sY4B1rfYc`, type: V.ChangeHandler },
        RDnk54NNJ: {
          defaultValue: `Premium Ingredients`,
          displayTextArea: !1,
          title: `Title`,
          type: V.String,
        },
        onRDnk54NNJChange: { changes: `RDnk54NNJ`, type: V.ChangeHandler },
        mn4yvruQw: {
          defaultValue: `We begin with carefully selected ingredients to create soft textures, rich flavor, fresh daily quality, & comforting sweetness in every handcrafted.`,
          displayTextArea: !0,
          title: `Contents`,
          type: V.String,
        },
        onmn4yvruQwChange: { changes: `mn4yvruQw`, type: V.ChangeHandler },
        HBmxY9Kbe: {
          defaultValue: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)) /* {"name":"Primary"} */`,
          title: `Fill`,
          type: V.Color,
        },
      }),
      ge(
        J,
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
          ...P(Ge),
          ...P(Ye),
          ...P(We),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Kt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  Y,
  nn = e(() => {
    (g(),
      R(),
      w(),
      s(),
      (qt = [`NMN44vku5`, `naGHMe8TJ`]),
      (Jt = `framer-nznb3`),
      (Yt = { naGHMe8TJ: `framer-v-r0j1je`, NMN44vku5: `framer-v-1072s9o` }),
      (Xt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Zt = ({ value: e, children: t }) => {
        let n = p(S),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (Qt = { Primary: `naGHMe8TJ`, White: `NMN44vku5` }),
      ($t = b.create(n)),
      (en = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Qt[r.variant] ?? r.variant ?? `NMN44vku5`,
      })),
      (tn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = A(
        f(function (e, t) {
          let n = m(null),
            r = t ?? n,
            i = v(),
            { activeLocale: a, setLocale: o } = Se();
          _e();
          let { style: s, className: c, layoutId: l, variant: u, ...f } = en(e),
            {
              baseVariant: p,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: ee,
              isLoading: x,
              setGestureState: S,
              setVariant: te,
              variants: w,
            } = M({
              cycleOrder: qt,
              defaultVariant: `NMN44vku5`,
              ref: r,
              variant: u,
              variantClassNames: Yt,
            }),
            T = tn(e, w),
            E = F(Jt);
          return d(C, {
            id: l ?? i,
            children: d($t, {
              animate: w,
              initial: !1,
              children: d(Zt, {
                value: Xt,
                children: h(b.div, {
                  ...f,
                  ...y,
                  className: F(E, `framer-1072s9o`, c, g),
                  "data-framer-name": `White`,
                  layoutDependency: T,
                  layoutId: `NMN44vku5`,
                  ref: r,
                  style: { ...s },
                  ...Kt({ naGHMe8TJ: { "data-framer-name": `Primary` } }, p, ee),
                  children: [
                    d(b.div, {
                      className: `framer-ktg4ly`,
                      "data-framer-name": `White`,
                      layoutDependency: T,
                      layoutId: `sk_WfU_HN`,
                      style: {
                        backgroundColor: `var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, rgb(255, 236, 229))`,
                      },
                    }),
                    d(b.div, {
                      className: `framer-3wojuu`,
                      "data-framer-name": `Primary`,
                      layoutDependency: T,
                      layoutId: `nLKXzB9Da`,
                      style: {
                        backgroundColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                        opacity: 0,
                      },
                      variants: { naGHMe8TJ: { opacity: 1 } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-nznb3.framer-y9rg95, .framer-nznb3 .framer-y9rg95 { display: block; }`,
          `.framer-nznb3.framer-1072s9o { height: 800px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1200px; }`,
          `.framer-nznb3 .framer-ktg4ly, .framer-nznb3 .framer-3wojuu { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; }`,
        ],
        `framer-nznb3`
      )),
      (Y.displayName = `BG Change`),
      (Y.defaultProps = { height: 800, width: 1200 }),
      T(Y, {
        variant: {
          options: [`NMN44vku5`, `naGHMe8TJ`],
          optionTitles: [`White`, `Primary`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      ge(Y, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function rn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  X,
  hn = e(() => {
    (g(),
      R(),
      w(),
      s(),
      Fe(),
      (an = [`pcC4YV22Y`, `GpPZDGlbu`, `T5rFRLP3v`]),
      (on = `framer-JVDXQ`),
      (sn = {
        GpPZDGlbu: `framer-v-1z6zsw`,
        pcC4YV22Y: `framer-v-sfn957`,
        T5rFRLP3v: `framer-v-yxtcom`,
      }),
      (cn = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0.08, 1], type: `tween` }),
      (ln = ({ value: e, children: t }) => {
        let n = p(S),
          r = e ?? n.transition,
          a = i(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(S.Provider, { value: a, children: t });
      }),
      (un = (e, t) => `translateY(-50%) ${t}`),
      (dn = { "Desktop 01": `pcC4YV22Y`, "Desktop 02": `GpPZDGlbu`, Phone: `T5rFRLP3v` }),
      (fn = b.create(n)),
      (pn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: dn[r.variant] ?? r.variant ?? `pcC4YV22Y`,
      })),
      (mn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = A(
        f(function (e, t) {
          let r = m(null),
            i = t ?? r,
            a = v(),
            { activeLocale: o, setLocale: s } = Se(),
            c = _e(),
            { style: l, className: u, layoutId: f, variant: p, ...g } = pn(e),
            {
              baseVariant: _,
              classNames: y,
              clearLoadingGesture: ee,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: te,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = M({
              cycleOrder: an,
              defaultVariant: `pcC4YV22Y`,
              ref: i,
              variant: p,
              variantClassNames: sn,
            }),
            D = mn(e, E),
            O = F(on, Re),
            k = () => _ !== `T5rFRLP3v`;
          return d(C, {
            id: f ?? a,
            children: d(fn, {
              animate: E,
              initial: !1,
              children: d(ln, {
                value: cn,
                children: h(b.div, {
                  ...g,
                  ...x,
                  className: F(O, `framer-sfn957`, u, y),
                  "data-framer-name": `Desktop 01`,
                  layoutDependency: D,
                  layoutId: `pcC4YV22Y`,
                  ref: i,
                  style: { ...l },
                  ...rn(
                    {
                      GpPZDGlbu: { "data-framer-name": `Desktop 02` },
                      T5rFRLP3v: { "data-framer-name": `Phone` },
                    },
                    _,
                    S
                  ),
                  children: [
                    d(ln, {
                      value: cn,
                      children: d(j, {
                        __fromCanvasComponent: !0,
                        children: d(n, {
                          children: d(b.h2, {
                            className: `framer-styles-preset-gadxkx`,
                            "data-styles-preset": `nqYznXGVD`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-1of0zx5, var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23)))`,
                            },
                            children: `Handcrafted for`,
                          }),
                        }),
                        className: `framer-v86k1x`,
                        fonts: [`Inter`],
                        layoutDependency: D,
                        layoutId: `kZvj9Tt5p`,
                        style: {
                          "--extracted-1of0zx5": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        variants: {
                          T5rFRLP3v: {
                            "--extracted-1sp2osd": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                            "--extracted-gdpscs": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...rn(
                          {
                            T5rFRLP3v: {
                              children: d(n, {
                                children: h(b.h1, {
                                  className: `framer-styles-preset-gadxkx`,
                                  "data-styles-preset": `nqYznXGVD`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-gdpscs, var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23)))`,
                                  },
                                  children: [
                                    `Handcrafted for `,
                                    d(b.span, {
                                      style: {
                                        "--framer-text-color": `var(--extracted-1sp2osd, var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)))`,
                                      },
                                      children: `sweet moments`,
                                    }),
                                  ],
                                }),
                              }),
                            },
                          },
                          _,
                          S
                        ),
                      }),
                    }),
                    k() &&
                      d(ln, {
                        value: cn,
                        children: h(b.div, {
                          className: `framer-122mt8t`,
                          "data-framer-name": `Row 2`,
                          layoutDependency: D,
                          layoutId: `NcgHQvqzP`,
                          children: [
                            d(ln, {
                              value: cn,
                              children: d(fe, {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 448,
                                  intrinsicWidth: 560,
                                  loading: I(
                                    (c?.y || 0) +
                                      0 +
                                      (((c?.height || 224) - 0 - 224) / 2 + 112 + 0) +
                                      0
                                  ),
                                  pixelHeight: 448,
                                  pixelWidth: 560,
                                  sizes: `calc(${c?.width || `100vw`} * 0.149)`,
                                  src: `../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M-8e8abc.png`,
                                  srcSet: `../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M.png 512w,../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M-8e8abc.png 560w`,
                                },
                                className: `framer-1pckvia`,
                                "data-framer-name": `Image`,
                                layoutDependency: D,
                                layoutId: `ilHvjYw0_`,
                                style: {
                                  borderBottomLeftRadius: 8,
                                  borderBottomRightRadius: 8,
                                  borderTopLeftRadius: 8,
                                  borderTopRightRadius: 8,
                                  originX: 0,
                                  originY: 0.8,
                                  scale: 0,
                                },
                                transformTemplate: un,
                                variants: { GpPZDGlbu: { scale: 1 } },
                                ...rn(
                                  {
                                    GpPZDGlbu: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 448,
                                        intrinsicWidth: 560,
                                        loading: I(
                                          (c?.y || 0) +
                                            0 +
                                            (((c?.height || 224) - 0 - 224) / 2 + 112 + 0) +
                                            11
                                        ),
                                        pixelHeight: 448,
                                        pixelWidth: 560,
                                        sizes: `calc(${c?.width || `100vw`} * 0.12)`,
                                        src: `../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M-8e8abc.png`,
                                        srcSet: `../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M.png 512w,../../assets/images/KLmba8Clc5ps65QUQvSZCFD7N5M-8e8abc.png 560w`,
                                      },
                                      transformTemplate: void 0,
                                    },
                                  },
                                  _,
                                  S
                                ),
                              }),
                            }),
                            d(ln, {
                              value: cn,
                              children: d(j, {
                                __fromCanvasComponent: !0,
                                children: d(n, {
                                  children: d(b.h2, {
                                    className: `framer-styles-preset-gadxkx`,
                                    "data-styles-preset": `nqYznXGVD`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-1of0zx5, var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)))`,
                                    },
                                    children: `sweet moments`,
                                  }),
                                }),
                                className: `framer-1g6enqv`,
                                fonts: [`Inter`],
                                layoutDependency: D,
                                layoutId: `qkRmhCevw`,
                                style: {
                                  "--extracted-1of0zx5": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
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
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-JVDXQ.framer-cdy641, .framer-JVDXQ .framer-cdy641 { display: block; }`,
          `.framer-JVDXQ.framer-sfn957 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1000px; }`,
          `.framer-JVDXQ .framer-v86k1x { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JVDXQ .framer-122mt8t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JVDXQ .framer-1pckvia { aspect-ratio: 1.3303571428571428 / 1; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; width: 15%; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-JVDXQ .framer-1g6enqv { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JVDXQ.framer-v-1z6zsw .framer-1pckvia { aspect-ratio: 1.3333333333333333 / 1; left: unset; max-height: 100px; position: relative; top: unset; width: 12%; }`,
          ...Ie,
        ],
        `framer-JVDXQ`
      )),
      (X.displayName = `Title`),
      (X.defaultProps = { height: 224, width: 1e3 }),
      T(X, {
        variant: {
          options: [`pcC4YV22Y`, `GpPZDGlbu`, `T5rFRLP3v`],
          optionTitles: [`Desktop 01`, `Desktop 02`, `Phone`],
          title: `Variant`,
          type: V.Enum,
        },
      }),
      ge(
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
          ...P(Le),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function gn(e) {
  return f((n, r) => {
    let i = m(null);
    u(r, () => i.current);
    let s = a(() => {
      let e = i.current;
      if (!e) return;
      ((e.style.scrollSnapType = `none`), (e.style.justifyContent = `flex-start`));
      let t = e.firstElementChild;
      (t &&
        (t.style.marginLeft === `auto` && (t.style.marginLeft = `0`),
        t.style.marginRight === `auto` && (t.style.marginRight = `0`)),
        (e.scrollLeft = 0),
        requestAnimationFrame(() => {
          ((e.scrollLeft = 0),
            requestAnimationFrame(() => {
              e.scrollLeft = 0;
            }));
        }));
    }, []);
    (t(() => {
      s();
    }, [s]),
      o(() => {
        let e = i.current;
        if (!e) return;
        s();
        let t = new ResizeObserver(() => s());
        (t.observe(e), e.firstElementChild && t.observe(e.firstElementChild));
        let n = () => s();
        return (
          c.addEventListener(`load`, n),
          () => {
            (t.disconnect(), c.removeEventListener(`load`, n));
          }
        );
      }, [s]));
    let l = a((e) => {
        let t = i.current;
        if (!t) return;
        let n = Math.max(0, t.scrollWidth - t.clientWidth);
        t.scrollTo({ left: _n(e) * n });
      }, []),
      f = a(() => {
        let e = c.scrollY;
        return ((e += c.innerHeight), (e += yn), e);
      }, []),
      p = a(() => {
        let e = document.getElementById(vn),
          t = i.current;
        if (!e || !t) return;
        let n = e.getBoundingClientRect().top + c.scrollY,
          r = e.offsetHeight || 1,
          a = (f() - n) / r;
        (l(a), a <= 0 && (t.scrollLeft = 0));
      }, [f, l]);
    o(() => {
      let e = 0,
        t = () => {
          (cancelAnimationFrame(e), (e = requestAnimationFrame(p)));
        },
        n = t;
      return (
        p(),
        c.addEventListener(`scroll`, t, { passive: !0 }),
        c.addEventListener(`resize`, n),
        () => {
          (cancelAnimationFrame(e),
            c.removeEventListener(`scroll`, t),
            c.removeEventListener(`resize`, n));
        }
      );
    }, [p]);
    let h = {
      ...n.style,
      overflowX: `auto`,
      overflowY: `hidden`,
      display: `flex`,
      justifyContent: `flex-start`,
      scrollbarWidth: `none`,
      msOverflowStyle: `none`,
      zIndex: n.style?.zIndex ?? 2,
    };
    return d(e, { ref: i, ...n, style: h });
  });
}
var _n,
  vn,
  yn,
  bn = e(() => {
    (y(), g(), s(), (_n = (e) => Math.max(0, Math.min(1, e))), (vn = `hoz-scroll`), (yn = 0));
  }),
  xn,
  Sn,
  Cn,
  Z,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
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
  Hn,
  Q,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  $,
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
  dr;
e(() => {
  (g(),
    R(),
    w(),
    s(),
    Ne(),
    ot(),
    _t(),
    Pt(),
    Gt(),
    nn(),
    Ze(),
    hn(),
    $e(),
    bn(),
    tt(),
    De(),
    Be(),
    Ve(),
    ke(),
    Fe(),
    it(),
    (xn = L(q)),
    (Sn = L(et)),
    (Cn = E(b.div)),
    (Z = E(fe)),
    (wn = L(at)),
    (Tn = L(W)),
    (En = L(X)),
    (Dn = ne(X)),
    (On = L(J)),
    (kn = E(z)),
    (An = ae(b.div, { nodeId: `m5b89GEbs`, override: gn, scopeId: `augiA20Il` })),
    (jn = L(Y)),
    (Mn = ne(Y)),
    (Nn = L(Pe)),
    (Pn = oe(b.div)),
    (Fn = E(j)),
    (In = L(Qe)),
    (Ln = {
      MWLDW4udi: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
      wso0Ira08: `(max-width: 809.98px)`,
    }),
    (Rn = () => typeof document < `u`),
    (zn = []),
    (Bn = `framer-UD4Xq`),
    (Vn = {
      MWLDW4udi: `framer-v-1ypcquw`,
      WQLkyLRf1: `framer-v-72rtr7`,
      wso0Ira08: `framer-v-rmibuk`,
    }),
    (Hn = (e, t, n) => (e && t ? `position` : n)),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Un = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 100,
      y: 0,
    }),
    (Wn = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.1, 1], type: `tween` }),
    (Gn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (Kn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (qn = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.17, 1], type: `tween` }),
    ($ = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (Jn = { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.17, 1], type: `tween` }),
    (Yn = { delay: 0, duration: 0.4, ease: [0.12, 0.23, 0, 1], type: `tween` }),
    (Xn = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` }),
    (Zn = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.18, 1], type: `tween` }),
    (Qn = (e, t) => {
      switch (typeof e == `string` ? e.toLowerCase() : e) {
        case `soft baked`:
          return `QXmAHKumC`;
        case `cream filled`:
          return `NPNMwdere`;
        case `extra glazed`:
          return `LSs_Qyvsg`;
        default:
          return `QXmAHKumC`;
      }
    }),
    ($n = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (er = () => ({
      from: { alias: `YZ5FYWzG8`, data: nt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `YZ5FYWzG8`, direction: `desc`, name: `createdAt`, type: `Identifier` },
      ],
      select: [
        { collection: `YZ5FYWzG8`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `YZ5FYWzG8`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `YZ5FYWzG8`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `YZ5FYWzG8`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `YZ5FYWzG8`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `YZ5FYWzG8`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `YZ5FYWzG8`, name: `vIcxxiuyk`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `Soft baked` },
        type: `BinaryOperation`,
      },
    })),
    (tr = ({ query: e, pageSize: t, children: n }) => n(se(e))),
    (nr = { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.18, 1], type: `tween` }),
    (rr = () => ({
      from: { alias: `LEzktBP8y`, data: nt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `LEzktBP8y`, direction: `desc`, name: `createdAt`, type: `Identifier` },
      ],
      select: [
        { collection: `LEzktBP8y`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `LEzktBP8y`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `LEzktBP8y`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `LEzktBP8y`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `LEzktBP8y`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `LEzktBP8y`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `LEzktBP8y`, name: `vIcxxiuyk`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `Cream filled` },
        type: `BinaryOperation`,
      },
    })),
    (ir = { delay: 0.4, duration: 0.5, ease: [0.44, 0, 0.18, 1], type: `tween` }),
    (ar = () => ({
      from: { alias: `BXQ6AnNUm`, data: nt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 1 },
      orderBy: [
        { collection: `BXQ6AnNUm`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `BXQ6AnNUm`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: { collection: `BXQ6AnNUm`, name: `vIcxxiuyk`, type: `Identifier` },
        operator: `==`,
        right: { type: `LiteralValue`, value: `Extra glazed` },
        type: `BinaryOperation`,
      },
    })),
    (or = () => ({
      from: { alias: `BXQ6AnNUm`, data: nt, type: `Collection` },
      limit: { type: `LiteralValue`, value: 4 },
      orderBy: [
        { collection: `BXQ6AnNUm`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
      ],
      select: [
        { collection: `BXQ6AnNUm`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `BXQ6AnNUm`, name: `id`, type: `Identifier` },
      ],
    })),
    (sr = { Desktop: `WQLkyLRf1`, Phone: `wso0Ira08`, Tablet: `MWLDW4udi` }),
    (cr = ({ value: e }) =>
      he()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (lr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: sr[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    (ur = A(
      f(function (e, t) {
        let r = m(null),
          a = t ?? r,
          o = v(),
          { activeLocale: s, setLocale: c } = Se(),
          l = _e(),
          { style: u, className: f, layoutId: g, variant: y, ...ee } = lr(e);
        we(i(() => rt({}, s), [s]));
        let [x, te] = ye(y, Ln, !1),
          w = F(Bn, Me, Re, Ke, Oe, ze),
          T = p(xe)?.isLayoutTemplate,
          E = !!p(S)?.transition?.layout,
          D = Hn(T, E);
        Ce();
        let k = () => !Rn() || ![`MWLDW4udi`, `wso0Ira08`].includes(x),
          A = O(`ZAc5c_pCg`),
          M = m(null),
          N = O(`g9I5KbRmF`),
          ne = m(null),
          P = O(`vASI_OBhy`),
          re = m(null),
          ae = O(`WyRK_hZvc`),
          oe = m(null),
          se = m(null),
          I = () => !Rn() || x !== `wso0Ira08`,
          L = O(`OvbfIU2KF`),
          R = m(null),
          ue = O(`p9yu6LBJQ`);
        return (
          pe({}),
          d(xe.Provider, {
            value: {
              activeVariantId: x,
              humanReadableVariantMap: sr,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: Vn,
            },
            children: h(C, {
              id: g ?? o,
              children: [
                d(cr, {
                  value: `html body { background: var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)); }`,
                }),
                h(b.div, {
                  ...ee,
                  className: F(w, `framer-72rtr7`, f),
                  ref: a,
                  style: { ...u },
                  children: [
                    d(B, {
                      height: 1e3,
                      width: `100vw`,
                      y: 0,
                      children: d(z, {
                        className: `framer-1xqv0rd-container`,
                        layout: D,
                        layoutScroll: !0,
                        nodeId: `g0o4BZnXp`,
                        scopeId: `augiA20Il`,
                        children: d(H, {
                          breakpoint: x,
                          overrides: {
                            MWLDW4udi: { variant: Q(`aLBxMee9K`) },
                            wso0Ira08: { variant: Q(`ZtowqxT7d`) },
                          },
                          children: d(q, {
                            height: `100%`,
                            id: `g0o4BZnXp`,
                            layoutId: `g0o4BZnXp`,
                            style: { height: `100%`, width: `100%` },
                            variant: Q(`pyQuyERBv`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                    h(b.section, {
                      className: `framer-1v114nh`,
                      "data-framer-name": `Section: Hero`,
                      layout: D,
                      children: [
                        d(fe, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 2430,
                            intrinsicWidth: 4320,
                            pixelHeight: 2430,
                            pixelWidth: 4320,
                            sizes: l?.width || `100vw`,
                            src: `../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE-6f8c9c.png`,
                            srcSet: `../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE-631c6c.png 512w,../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE-12bb2c.png 1024w,../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE.png 2048w,../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE-5e3334.png 4096w,../../assets/images/gH5CZbZhiVGatm6vJCxELymTWGE-6f8c9c.png 4320w`,
                          },
                          className: `framer-1581zpl`,
                          "data-framer-name": `Background`,
                        }),
                        h(`div`, {
                          className: `framer-1had825`,
                          "data-framer-name": `Container`,
                          children: [
                            d(j, {
                              __fromCanvasComponent: !0,
                              children: d(n, {
                                children: d(`h1`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                    "--framer-font-family": `"Boldonse", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on`,
                                    "--framer-font-size": `120px`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `Sweet Morels`,
                                }),
                              }),
                              className: `framer-1dpun7r`,
                              fonts: [`GF;Boldonse-regular`],
                              verticalAlignment: `top`,
                              viewBox: `0 0 1047 168`,
                              withExternalLayout: !0,
                            }),
                            h(`div`, {
                              className: `framer-1gxfli0`,
                              "data-framer-name": `Text`,
                              children: [
                                d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-uis2r6`,
                                      "data-styles-preset": `KRUEduuRo`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                      },
                                      children: `Soft bites and comforting sweetness made for slow mornings and sweeter moments.`,
                                    }),
                                  }),
                                  className: `framer-1xch45t`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(ce, {
                                  links: [
                                    {
                                      href: { webPageId: `Bbzc06U8n` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Bbzc06U8n` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { webPageId: `Bbzc06U8n` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    d(B, {
                                      height: 52,
                                      children: d(z, {
                                        className: `framer-pigvo7-container`,
                                        nodeId: `PFREAp2wm`,
                                        scopeId: `augiA20Il`,
                                        children: d(H, {
                                          breakpoint: x,
                                          overrides: {
                                            MWLDW4udi: { Hd9QGxOtK: e[1], variant: Q(`tJuAPrFeT`) },
                                            wso0Ira08: { Hd9QGxOtK: e[2], variant: Q(`tJuAPrFeT`) },
                                          },
                                          children: d(et, {
                                            Hd9QGxOtK: e[0],
                                            height: `100%`,
                                            id: `PFREAp2wm`,
                                            k6v4IaiQz: !1,
                                            layoutId: `PFREAp2wm`,
                                            suovcfe8I: `Explore Sweetness`,
                                            TGw4ZKdXt: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                            variant: Q(`jgw04tyIQ`),
                                            vGze8YVfr: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
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
                      ],
                    }),
                    h(b.section, {
                      className: `framer-1hmpdj5`,
                      "data-framer-name": `Section: Introduction`,
                      layout: D,
                      children: [
                        d(Cn, {
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
                              target: {
                                opacity: 1,
                                rotate: 0,
                                rotateX: 0,
                                rotateY: 0,
                                scale: 10,
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
                          className: `framer-34o0wy`,
                          "data-framer-name": `Space`,
                          children:
                            k() &&
                            d(`div`, {
                              className: `framer-qyhzbq hidden-1ypcquw hidden-rmibuk`,
                              "data-framer-name": `Circle`,
                            }),
                        }),
                        h(`div`, {
                          className: `framer-1vr29j4`,
                          "data-framer-name": `Container`,
                          children: [
                            d(H, {
                              breakpoint: x,
                              overrides: {
                                wso0Ira08: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3e3,
                                    intrinsicWidth: 3097,
                                    pixelHeight: 3e3,
                                    pixelWidth: 3097,
                                    sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.559)`,
                                    src: `../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-005c99.png`,
                                    srcSet: `../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-2263a8.png 512w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28.png 1024w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-6edd9d.png 2048w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-005c99.png 3097w`,
                                  },
                                },
                              },
                              children: d(Z, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 110,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 3e3,
                                  intrinsicWidth: 3097,
                                  pixelHeight: 3e3,
                                  pixelWidth: 3097,
                                  sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.4)`,
                                  src: `../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-005c99.png`,
                                  srcSet: `../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-2263a8.png 512w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28.png 1024w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-6edd9d.png 2048w,../../assets/images/kBgzKXXLCzLWCvNo0DDMhegR28-005c99.png 3097w`,
                                },
                                className: `framer-12wxb8z`,
                                "data-framer-name": `Top`,
                              }),
                            }),
                            d(H, {
                              breakpoint: x,
                              overrides: {
                                wso0Ira08: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3e3,
                                    intrinsicWidth: 3097,
                                    pixelHeight: 3e3,
                                    pixelWidth: 3097,
                                    sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.559)`,
                                    src: `../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-27f809.png`,
                                    srcSet: `../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-3c3657.png 512w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ.png 1024w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-9b964c.png 2048w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-27f809.png 3097w`,
                                  },
                                },
                              },
                              children: d(Z, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 105,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 3e3,
                                  intrinsicWidth: 3097,
                                  pixelHeight: 3e3,
                                  pixelWidth: 3097,
                                  sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.4)`,
                                  src: `../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-27f809.png`,
                                  srcSet: `../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-3c3657.png 512w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ.png 1024w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-9b964c.png 2048w,../../assets/images/pCEAxRztqSKweYEETxL5slXCXBQ-27f809.png 3097w`,
                                },
                                className: `framer-1wkxulb`,
                                "data-framer-name": `Right`,
                              }),
                            }),
                            d(H, {
                              breakpoint: x,
                              overrides: {
                                wso0Ira08: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 3e3,
                                    intrinsicWidth: 3097,
                                    pixelHeight: 3e3,
                                    pixelWidth: 3097,
                                    sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.559)`,
                                    src: `../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-6c0ae6.png`,
                                    srcSet: `../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-637848.png 512w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0.png 1024w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-5dded6.png 2048w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-6c0ae6.png 3097w`,
                                  },
                                },
                              },
                              children: d(Z, {
                                __framer__adjustPosition: !1,
                                __framer__offset: 0,
                                __framer__parallaxTransformEnabled: !0,
                                __framer__speed: 105,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 3e3,
                                  intrinsicWidth: 3097,
                                  pixelHeight: 3e3,
                                  pixelWidth: 3097,
                                  sizes: `calc(min(${l?.width || `100vw`}, 1920px) * 0.4)`,
                                  src: `../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-6c0ae6.png`,
                                  srcSet: `../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-637848.png 512w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0.png 1024w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-5dded6.png 2048w,../../assets/images/XJB63p2zrUpN7SbHUhBplRhW4e0-6c0ae6.png 3097w`,
                                },
                                className: `framer-7atjaf`,
                                "data-framer-name": `Left`,
                              }),
                            }),
                            d(j, {
                              __fromCanvasComponent: !0,
                              children: d(n, {
                                children: h(`h2`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                    "--framer-font-family": `"Boldonse", sans-serif`,
                                    "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                    "--framer-font-size": `107.43405275779378px`,
                                    "--framer-line-height": `140%`,
                                    "--framer-text-alignment": `justify`,
                                    "--framer-text-color": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: [
                                    `Bite Into Bold.`,
                                    d(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                      },
                                      children: d(`br`, {}),
                                    }),
                                    `Donut Like Never`,
                                    d(`span`, {
                                      style: {
                                        "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                      },
                                      children: d(`br`, {}),
                                    }),
                                    `Before.`,
                                  ],
                                }),
                              }),
                              className: `framer-129wwwz`,
                              fonts: [`GF;Boldonse-regular`],
                              verticalAlignment: `top`,
                              viewBox: `0 0 1120 451`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    h(b.section, {
                      className: `framer-1sr9xqo`,
                      "data-framer-name": `Section: About`,
                      layout: D,
                      children: [
                        d(`div`, {
                          className: `framer-1mcctmv`,
                          "data-framer-name": `Trigger 2`,
                          id: A,
                          ref: M,
                        }),
                        d(`div`, {
                          className: `framer-132w7l7`,
                          "data-framer-name": `Trigger 1`,
                          id: N,
                          ref: ne,
                        }),
                        h(`div`, {
                          className: `framer-19n195a`,
                          "data-framer-name": `Container`,
                          children: [
                            d(B, {
                              children: d(z, {
                                className: `framer-lvl7l-container`,
                                "data-code-component-plugin-id": `84d4c1`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `R4gTrMpHh`,
                                scopeId: `augiA20Il`,
                                children: d(at, {
                                  color: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(246, 184, 208))`,
                                  height: `100%`,
                                  id: `R4gTrMpHh`,
                                  layoutId: `R4gTrMpHh`,
                                  sectionId: `scroll-path-1`,
                                  strokeWidth: 8,
                                  style: { height: `100%`, width: `100%` },
                                  svgPath: `M5.00082 5.00083C9.72304 32.0436 34.1741 93.3265 94.2006 122.116C169.234 158.102 240.171 137.882 256.818 95.3218C273.466 52.7617 185.366 21.3033 216.067 144.513C240.627 243.081 459.917 635.095 1014.42 459.595`,
                                  viewBox: `0 0 1020 510`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            d(B, {
                              children: d(z, {
                                className: `framer-13ziws0-container`,
                                "data-code-component-plugin-id": `84d4c1`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `bAT5mWpdg`,
                                scopeId: `augiA20Il`,
                                children: d(at, {
                                  color: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(246, 184, 208))`,
                                  height: `100%`,
                                  id: `bAT5mWpdg`,
                                  layoutId: `bAT5mWpdg`,
                                  sectionId: `scroll-path`,
                                  strokeWidth: 8,
                                  style: { height: `100%`, maxHeight: `100%`, width: `100%` },
                                  svgPath: `M713.586 5.00141C692.475 66.3748 619.874 173.383 498.353 110.43C346.452 31.7386 680.903 -69.2552 549.845 238.726C444.999 485.111 142.929 312.128 5.00009 194.839`,
                                  viewBox: `0 0 719 370`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                            h(`div`, {
                              className: `framer-178smw4`,
                              "data-framer-name": `Left`,
                              children: [
                                h(`div`, {
                                  className: `framer-5d5ezx`,
                                  "data-framer-name": `Title`,
                                  children: [
                                    d(j, {
                                      __fromCanvasComponent: !0,
                                      children: d(n, {
                                        children: d(`h2`, {
                                          className: `framer-styles-preset-gadxkx`,
                                          "data-styles-preset": `nqYznXGVD`,
                                          dir: `auto`,
                                          children: `Happy `,
                                        }),
                                      }),
                                      className: `framer-1ic8ft1`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(B, {
                                      height: 112,
                                      children: d(z, {
                                        className: `framer-1hsqa3f-container`,
                                        nodeId: `NkT9cYBZ8`,
                                        scopeId: `augiA20Il`,
                                        children: d(W, {
                                          height: `100%`,
                                          id: `NkT9cYBZ8`,
                                          layoutId: `NkT9cYBZ8`,
                                          variant: Q(`gTz9r7EH7`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                                h(`div`, {
                                  className: `framer-17tsxkh`,
                                  "data-framer-name": `Text`,
                                  children: [
                                    d(j, {
                                      __fromCanvasComponent: !0,
                                      children: d(n, {
                                        children: d(`p`, {
                                          className: `framer-styles-preset-1u3gdcs`,
                                          "data-styles-preset": `kJFpmPtbb`,
                                          dir: `auto`,
                                          children: `We have extensive experience across a range of commercial sectors.\xA0We offer a complete end-to-end service from brand strategy to interior design and production.`,
                                        }),
                                      }),
                                      className: `framer-lnk5tr`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    d(B, {
                                      height: 52,
                                      children: d(z, {
                                        className: `framer-1i1rbtn-container`,
                                        nodeId: `UWo0Psk7g`,
                                        scopeId: `augiA20Il`,
                                        children: d(H, {
                                          breakpoint: x,
                                          overrides: {
                                            MWLDW4udi: { variant: Q(`tJuAPrFeT`) },
                                            wso0Ira08: { variant: Q(`tJuAPrFeT`) },
                                          },
                                          children: d(et, {
                                            height: `100%`,
                                            id: `UWo0Psk7g`,
                                            k6v4IaiQz: !1,
                                            layoutId: `UWo0Psk7g`,
                                            suovcfe8I: `MORE ABOUT US`,
                                            TGw4ZKdXt: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                            variant: Q(`jgw04tyIQ`),
                                            vGze8YVfr: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))`,
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d(H, {
                              breakpoint: x,
                              overrides: {
                                MWLDW4udi: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1674,
                                    intrinsicWidth: 1340,
                                    pixelHeight: 1674,
                                    pixelWidth: 1340,
                                    sizes: `max((min(max(${l?.width || `100vw`}, 1px), 1920px) - 64px) / 2 - 20px, 1px)`,
                                    src: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png`,
                                    srcSet: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo.png 819w,../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png 1340w`,
                                  },
                                },
                                wso0Ira08: {
                                  __framer__enter: Gn,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1674,
                                    intrinsicWidth: 1340,
                                    pixelHeight: 1674,
                                    pixelWidth: 1340,
                                    sizes: `calc(min(${l?.width || `100vw`}, 1920px) - 40px)`,
                                    src: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png`,
                                    srcSet: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo.png 819w,../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png 1340w`,
                                  },
                                },
                              },
                              children: d(Z, {
                                __framer__animate: { transition: Wn },
                                __framer__animateOnce: !0,
                                __framer__enter: Un,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0.5,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 1674,
                                  intrinsicWidth: 1340,
                                  pixelHeight: 1674,
                                  pixelWidth: 1340,
                                  sizes: `max((min(max(${l?.width || `100vw`}, 1px), 1920px) - 80px) / 2 - 100px, 1px)`,
                                  src: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png`,
                                  srcSet: `../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo.png 819w,../../assets/images/DySn2XY19oe1P4RYCdcRagOVnZo-eee3cb.png 1340w`,
                                },
                                className: `framer-1ghiipu`,
                                fitImageDimension: `height`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    h(b.section, {
                      className: `framer-3il54z`,
                      "data-framer-name": `Section: Key Featured`,
                      layout: D,
                      children: [
                        h(`div`, {
                          className: `framer-1v7agde`,
                          "data-framer-name": `Container`,
                          children: [
                            d(`div`, {
                              className: `framer-gxugg`,
                              "data-framer-name": `Title`,
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  MWLDW4udi: {
                                    width: `max(min(${l?.width || `100vw`}, 1920px) - 64px, 1px)`,
                                  },
                                  wso0Ira08: {
                                    width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                  },
                                },
                                children: d(B, {
                                  height: 224,
                                  width: `max(min(${l?.width || `100vw`}, 1920px) - 80px, 1px)`,
                                  children: d(z, {
                                    className: `framer-ldclc7-container`,
                                    id: P,
                                    nodeId: `vASI_OBhy`,
                                    ref: re,
                                    rendersWithMotion: !0,
                                    scopeId: `augiA20Il`,
                                    children: d(H, {
                                      breakpoint: x,
                                      overrides: {
                                        wso0Ira08: {
                                          __framer__variantAppearEffectEnabled: void 0,
                                          variant: Q(`T5rFRLP3v`),
                                        },
                                      },
                                      children: d(Dn, {
                                        __framer__animateOnce: !0,
                                        __framer__targets: [{ ref: re, target: `GpPZDGlbu` }],
                                        __framer__threshold: 0.5,
                                        __framer__variantAppearEffectEnabled: !0,
                                        height: `100%`,
                                        id: `vASI_OBhy`,
                                        layoutId: `vASI_OBhy`,
                                        style: { width: `100%` },
                                        variant: Q(`pcC4YV22Y`),
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            d(An, {
                              className: `framer-1fck71q`,
                              "data-framer-name": `Scroll Box`,
                              children: h(b.div, {
                                className: `framer-1cz1enb`,
                                "data-framer-name": `Featured Scroll`,
                                children: [
                                  d(H, {
                                    breakpoint: x,
                                    overrides: {
                                      MWLDW4udi: {
                                        width: `max((max(min(${l?.width || `100vw`}, 1920px) - 64px, 1px) - 20px) / 2, 50px)`,
                                      },
                                      wso0Ira08: {
                                        width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                      },
                                    },
                                    children: d(B, {
                                      height: 334,
                                      width: `max(((min(${l?.width || `100vw`}, 1920px) - 80px) * 1.8 - 60px) / 4, 1px)`,
                                      children: d(H, {
                                        breakpoint: x,
                                        overrides: {
                                          MWLDW4udi: {
                                            __framer__animate: { transition: qn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Kn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                          wso0Ira08: {
                                            __framer__animate: { transition: qn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: $,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                        },
                                        children: d(kn, {
                                          className: `framer-hdtv9b-container`,
                                          nodeId: `Y4XzKp1xz`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(H, {
                                            breakpoint: x,
                                            overrides: {
                                              MWLDW4udi: { variant: Q(`wgfKueV3o`) },
                                              wso0Ira08: { variant: Q(`wgfKueV3o`) },
                                            },
                                            children: d(J, {
                                              HBmxY9Kbe: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                              height: `100%`,
                                              id: `Y4XzKp1xz`,
                                              layoutId: `Y4XzKp1xz`,
                                              mn4yvruQw: `We begin with carefully selected ingredients to create soft textures, rich flavor, fresh daily quality, & comforting sweetness in every handcrafted.`,
                                              RDnk54NNJ: `Premium Ingredients`,
                                              style: { width: `100%` },
                                              sY4B1rfYc: `01`,
                                              variant: Q(`Lq6qMO1wD`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(H, {
                                    breakpoint: x,
                                    overrides: {
                                      MWLDW4udi: {
                                        width: `max((max(min(${l?.width || `100vw`}, 1920px) - 64px, 1px) - 20px) / 2, 50px)`,
                                      },
                                      wso0Ira08: {
                                        width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                      },
                                    },
                                    children: d(B, {
                                      height: 334,
                                      width: `max(((min(${l?.width || `100vw`}, 1920px) - 80px) * 1.8 - 60px) / 4, 1px)`,
                                      children: d(H, {
                                        breakpoint: x,
                                        overrides: {
                                          MWLDW4udi: {
                                            __framer__animate: { transition: Jn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Kn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                          wso0Ira08: {
                                            __framer__animate: { transition: Yn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: $,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                        },
                                        children: d(kn, {
                                          className: `framer-1rczfut-container`,
                                          nodeId: `sNlqJKym8`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(H, {
                                            breakpoint: x,
                                            overrides: {
                                              MWLDW4udi: { variant: Q(`wgfKueV3o`) },
                                              wso0Ira08: { variant: Q(`wgfKueV3o`) },
                                            },
                                            children: d(J, {
                                              HBmxY9Kbe: `var(--token-e4fc807d-102e-4839-b91e-d6f174f62c2e, rgb(151, 198, 57))`,
                                              height: `100%`,
                                              id: `sNlqJKym8`,
                                              layoutId: `sNlqJKym8`,
                                              mn4yvruQw: `Each donut is carefully prepared, shaped, and crafted to deliver soft bites, balanced texture, rich flavor, and consistent freshness in every batch`,
                                              RDnk54NNJ: `Handcrafted Dough`,
                                              style: { width: `100%` },
                                              sY4B1rfYc: `02`,
                                              variant: Q(`Lq6qMO1wD`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(H, {
                                    breakpoint: x,
                                    overrides: {
                                      MWLDW4udi: {
                                        width: `max((max(min(${l?.width || `100vw`}, 1920px) - 64px, 1px) - 20px) / 2, 50px)`,
                                      },
                                      wso0Ira08: {
                                        width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                      },
                                    },
                                    children: d(B, {
                                      height: 334,
                                      width: `max(((min(${l?.width || `100vw`}, 1920px) - 80px) * 1.8 - 60px) / 4, 1px)`,
                                      children: d(H, {
                                        breakpoint: x,
                                        overrides: {
                                          MWLDW4udi: {
                                            __framer__animate: { transition: qn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Kn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                          wso0Ira08: {
                                            __framer__animate: { transition: Yn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: $,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                        },
                                        children: d(kn, {
                                          className: `framer-1t5xsuh-container`,
                                          nodeId: `wG93ai_2v`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(H, {
                                            breakpoint: x,
                                            overrides: {
                                              MWLDW4udi: { variant: Q(`wgfKueV3o`) },
                                              wso0Ira08: { variant: Q(`wgfKueV3o`) },
                                            },
                                            children: d(J, {
                                              HBmxY9Kbe: `var(--token-955a487d-0233-4fc4-9ec9-1e13d781a048, rgb(75, 88, 155))`,
                                              height: `100%`,
                                              id: `wG93ai_2v`,
                                              layoutId: `wG93ai_2v`,
                                              mn4yvruQw: `Creamy fillings, rich glazes, and playful toppings are carefully added to create soft textures, balanced rich flavor, and joyful bites every day.`,
                                              RDnk54NNJ: `Freshly Filled`,
                                              style: { width: `100%` },
                                              sY4B1rfYc: `03`,
                                              variant: Q(`Lq6qMO1wD`),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(H, {
                                    breakpoint: x,
                                    overrides: {
                                      MWLDW4udi: {
                                        width: `max((max(min(${l?.width || `100vw`}, 1920px) - 64px, 1px) - 20px) / 2, 50px)`,
                                      },
                                      wso0Ira08: {
                                        width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                      },
                                    },
                                    children: d(B, {
                                      height: 334,
                                      width: `max(((min(${l?.width || `100vw`}, 1920px) - 80px) * 1.8 - 60px) / 4, 1px)`,
                                      children: d(H, {
                                        breakpoint: x,
                                        overrides: {
                                          MWLDW4udi: {
                                            __framer__animate: { transition: Jn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: Kn,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                          wso0Ira08: {
                                            __framer__animate: { transition: Yn },
                                            __framer__animateOnce: !0,
                                            __framer__enter: $,
                                            __framer__styleAppearEffectEnabled: !0,
                                            __framer__threshold: 0.5,
                                            __perspectiveFX: !1,
                                            __targetOpacity: 1,
                                          },
                                        },
                                        children: d(kn, {
                                          className: `framer-dwdxqr-container`,
                                          nodeId: `YcFESsfSk`,
                                          rendersWithMotion: !0,
                                          scopeId: `augiA20Il`,
                                          children: d(H, {
                                            breakpoint: x,
                                            overrides: {
                                              MWLDW4udi: { variant: Q(`wgfKueV3o`) },
                                              wso0Ira08: { variant: Q(`wgfKueV3o`) },
                                            },
                                            children: d(J, {
                                              HBmxY9Kbe: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(245, 163, 190))`,
                                              height: `100%`,
                                              id: `YcFESsfSk`,
                                              layoutId: `YcFESsfSk`,
                                              mn4yvruQw: `Freshly made donuts are carefully prepared daily to bring comfort, joyful sweetness, soft textures, rich flavors, warm moments, and satisfying bites to every craving`,
                                              RDnk54NNJ: `Daily Sweetness`,
                                              style: { width: `100%` },
                                              sY4B1rfYc: `04`,
                                              variant: Q(`Lq6qMO1wD`),
                                              width: `100%`,
                                            }),
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
                        k() &&
                          d(`div`, {
                            className: `framer-wzhc6s hidden-1ypcquw hidden-rmibuk`,
                            "data-framer-name": `Trigger`,
                            id: ae,
                            ref: oe,
                          }),
                      ],
                    }),
                    h(b.section, {
                      className: `framer-iclodz`,
                      "data-framer-name": `Section: Quote`,
                      layout: D,
                      children: [
                        d(H, {
                          breakpoint: x,
                          overrides: { wso0Ira08: { height: 1826 } },
                          children: d(B, {
                            height: 3e3,
                            width: l?.width || `100vw`,
                            children: d(z, {
                              className: `framer-1q30q0x-container`,
                              nodeId: `NWqEIVfx5`,
                              rendersWithMotion: !0,
                              scopeId: `augiA20Il`,
                              children: d(Mn, {
                                __framer__animateOnce: !1,
                                __framer__targets: [{ ref: se, target: `naGHMe8TJ` }],
                                __framer__threshold: 1,
                                __framer__variantAppearEffectEnabled: !0,
                                height: `100%`,
                                id: `NWqEIVfx5`,
                                layoutId: `NWqEIVfx5`,
                                style: { height: `100%`, width: `100%` },
                                variant: Q(`NMN44vku5`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                        h(`div`, {
                          className: `framer-bondp`,
                          "data-framer-name": `Container`,
                          children: [
                            h(`div`, {
                              className: `framer-lmgr9f`,
                              "data-framer-name": `Top`,
                              children: [
                                d(B, {
                                  children: d(z, {
                                    className: `framer-10pbadm-container`,
                                    "data-code-component-plugin-id": `84d4c1`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `rKcjaEjAf`,
                                    scopeId: `augiA20Il`,
                                    children: d(H, {
                                      breakpoint: x,
                                      overrides: {
                                        MWLDW4udi: {
                                          font: {
                                            fontFamily: `"Boldonse", "Boldonse Placeholder", sans-serif`,
                                            fontSize: `40px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `140%`,
                                          },
                                        },
                                        wso0Ira08: {
                                          font: {
                                            fontFamily: `"Boldonse", "Boldonse Placeholder", sans-serif`,
                                            fontSize: `32px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `0em`,
                                            lineHeight: `140%`,
                                          },
                                          useSectionTrigger: !1,
                                          viewportAnchor: `center`,
                                        },
                                      },
                                      children: d(Pe, {
                                        baseColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                        duration: 0.5,
                                        easeType: `smooth`,
                                        font: {
                                          fontFamily: `"Boldonse", "Boldonse Placeholder", sans-serif`,
                                          fontSize: `52px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `0em`,
                                          lineHeight: `140%`,
                                        },
                                        height: `100%`,
                                        id: `rKcjaEjAf`,
                                        initialBlur: 0,
                                        initialOpacity: 0,
                                        initialScale: 1,
                                        initialX: 0,
                                        initialY: 0,
                                        inViewPercent: 50,
                                        layoutId: `rKcjaEjAf`,
                                        mode: `chars`,
                                        overflowMode: `hidden`,
                                        randomAmount: 0.6,
                                        randomOrder: !1,
                                        replay: !0,
                                        revealColor: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                        sectionId: `text-reavel`,
                                        style: { maxWidth: `100%`, width: `100%` },
                                        text: `FRESHLY GLAZED DONUTS MADE DAILY FOR EVERY SWEET CRAVING, SOFT BITES TO BRIGHTEN DAYS`,
                                        useInViewPercent: !1,
                                        useSectionTrigger: !0,
                                        viewportAnchor: `bottom`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                h(`div`, {
                                  className: `framer-k7evus`,
                                  "data-framer-name": `Image Frame`,
                                  children: [
                                    d(H, {
                                      breakpoint: x,
                                      overrides: {
                                        MWLDW4udi: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2082,
                                            intrinsicWidth: 1665,
                                            pixelHeight: 2082,
                                            pixelWidth: 1665,
                                            sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 64px) * 0.45)`,
                                            src: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png`,
                                            srcSet: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ.png 818w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-3928d8.png 1637w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png 1665w`,
                                          },
                                        },
                                        wso0Ira08: {
                                          __framer__animate: { transition: Yn },
                                          __framer__enter: $,
                                          __framer__styleTransformEffectEnabled: void 0,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2082,
                                            intrinsicWidth: 1665,
                                            pixelHeight: 2082,
                                            pixelWidth: 1665,
                                            sizes: `calc(min(${l?.width || `100vw`}, 1920px) - 40px)`,
                                            src: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png`,
                                            srcSet: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ.png 818w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-3928d8.png 1637w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png 1665w`,
                                          },
                                        },
                                      },
                                      children: d(Z, {
                                        __framer__animate: { transition: Xn },
                                        __framer__animateOnce: !0,
                                        __framer__enter: Kn,
                                        __framer__styleAppearEffectEnabled: !0,
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__threshold: 0.5,
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
                                            ref: se,
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0,
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
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2082,
                                          intrinsicWidth: 1665,
                                          pixelHeight: 2082,
                                          pixelWidth: 1665,
                                          sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 80px) * 0.35)`,
                                          src: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png`,
                                          srcSet: `../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ.png 818w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-3928d8.png 1637w,../../assets/images/v3bBwzVA2zxWGukOt1H0JxWqpQ-8d395f.png 1665w`,
                                        },
                                        className: `framer-1uajrhf`,
                                        style: { originX: 1, originY: 0 },
                                      }),
                                    }),
                                    d(H, {
                                      breakpoint: x,
                                      overrides: {
                                        MWLDW4udi: {
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2082,
                                            intrinsicWidth: 1665,
                                            pixelHeight: 2082,
                                            pixelWidth: 1665,
                                            sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 64px) * 0.45)`,
                                            src: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png`,
                                            srcSet: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw.png 818w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-ddc4c0.png 1637w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png 1665w`,
                                          },
                                        },
                                        wso0Ira08: {
                                          __framer__animate: { transition: Yn },
                                          __framer__animateOnce: !0,
                                          __framer__enter: $,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__styleTransformEffectEnabled: void 0,
                                          __framer__threshold: 0.5,
                                          background: {
                                            alt: ``,
                                            fit: `fill`,
                                            intrinsicHeight: 2082,
                                            intrinsicWidth: 1665,
                                            pixelHeight: 2082,
                                            pixelWidth: 1665,
                                            sizes: `calc(min(${l?.width || `100vw`}, 1920px) - 40px)`,
                                            src: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png`,
                                            srcSet: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw.png 818w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-ddc4c0.png 1637w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png 1665w`,
                                          },
                                        },
                                      },
                                      children: d(Z, {
                                        __framer__styleTransformEffectEnabled: !0,
                                        __framer__transformTargets: [
                                          {
                                            target: {
                                              opacity: 1,
                                              rotate: 0,
                                              rotateX: 0,
                                              rotateY: 0,
                                              scale: 0,
                                              skewX: 0,
                                              skewY: 0,
                                              x: 0,
                                              y: 0,
                                            },
                                          },
                                          {
                                            ref: se,
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
                                        __framer__transformViewportThreshold: 1,
                                        __perspectiveFX: !1,
                                        __targetOpacity: 1,
                                        background: {
                                          alt: ``,
                                          fit: `fill`,
                                          intrinsicHeight: 2082,
                                          intrinsicWidth: 1665,
                                          pixelHeight: 2082,
                                          pixelWidth: 1665,
                                          sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 80px) * 0.35)`,
                                          src: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png`,
                                          srcSet: `../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw.png 818w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-ddc4c0.png 1637w,../../assets/images/G7MiGH7ZAgtPTdmV8SLLAiA2mw-d3d676.png 1665w`,
                                        },
                                        className: `framer-r6fpv8`,
                                        style: { originX: 1, originY: 0 },
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            d(`div`, {
                              className: `framer-kycw06`,
                              "data-framer-name": `Image Frame`,
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  MWLDW4udi: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1713,
                                      intrinsicWidth: 3045,
                                      pixelHeight: 1713,
                                      pixelWidth: 3045,
                                      sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 64px) * 0.84)`,
                                      src: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png`,
                                      srcSet: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-fa2bd1.png 512w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs.png 1024w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-98e3c9.png 2048w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png 3045w`,
                                    },
                                  },
                                  wso0Ira08: {
                                    __framer__animate: { transition: Yn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: $,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__styleTransformEffectEnabled: void 0,
                                    __framer__threshold: 0.5,
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1713,
                                      intrinsicWidth: 3045,
                                      pixelHeight: 1713,
                                      pixelWidth: 3045,
                                      sizes: `calc(min(${l?.width || `100vw`}, 1920px) - 40px)`,
                                      src: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png`,
                                      srcSet: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-fa2bd1.png 512w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs.png 1024w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-98e3c9.png 2048w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png 3045w`,
                                    },
                                  },
                                },
                                children: d(Z, {
                                  __framer__styleTransformEffectEnabled: !0,
                                  __framer__transformTargets: [
                                    {
                                      target: {
                                        opacity: 1,
                                        rotate: 0,
                                        rotateX: 0,
                                        rotateY: 0,
                                        scale: 0,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0,
                                      },
                                    },
                                    {
                                      ref: se,
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
                                  __framer__transformViewportThreshold: 1,
                                  __perspectiveFX: !1,
                                  __targetOpacity: 1,
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1713,
                                    intrinsicWidth: 3045,
                                    pixelHeight: 1713,
                                    pixelWidth: 3045,
                                    sizes: `calc((min(${l?.width || `100vw`}, 1920px) - 80px) * 0.6)`,
                                    src: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png`,
                                    srcSet: `../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-fa2bd1.png 512w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs.png 1024w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-98e3c9.png 2048w,../../assets/images/b0D8D6SaIuBtdyquqcs0T7D3Dfs-aab90d.png 3045w`,
                                  },
                                  className: `framer-6sofmi`,
                                  fitImageDimension: `height`,
                                  style: { originX: 0, originY: 1 },
                                }),
                              }),
                            }),
                          ],
                        }),
                        I() &&
                          d(`div`, {
                            className: `framer-1ctvtzb hidden-rmibuk`,
                            "data-framer-name": `Text Trigger`,
                            id: L,
                            ref: R,
                          }),
                        I() &&
                          d(`div`, {
                            className: `framer-do0kd3 hidden-rmibuk`,
                            "data-framer-name": `BG Trigger`,
                            id: ue,
                            ref: se,
                          }),
                      ],
                    }),
                    d(b.section, {
                      className: `framer-1s039c7`,
                      "data-framer-name": `Section: Ticker`,
                      layout: D,
                      children: d(H, {
                        breakpoint: x,
                        overrides: {
                          MWLDW4udi: { tickerEffectGap: `80px` },
                          wso0Ira08: { tickerEffectGap: `60px` },
                        },
                        children: h(Pn, {
                          className: `framer-1lktlb`,
                          tickerEffectAlign: `center`,
                          tickerEffectDirectionModifier: `default`,
                          tickerEffectDraggable: !1,
                          tickerEffectEnabled: !0,
                          tickerEffectGap: `100px`,
                          tickerEffectHoverModifier: 100,
                          tickerEffectOverflow: `clip`,
                          tickerEffectPosition: `relative`,
                          tickerEffectStackDirection: `row`,
                          tickerEffectVelocity: 60,
                          children: [
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-1eo8lxc`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-xk0m0`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-1etjgs7`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-1gzrrf9`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-1sgft0x`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-m3cimz`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                            d(ie, {
                              children: d(H, {
                                breakpoint: x,
                                overrides: {
                                  wso0Ira08: {
                                    children: d(n, {
                                      children: d(`p`, {
                                        className: `framer-styles-preset-653p1z`,
                                        "data-styles-preset": `cRhro8yAF`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                        },
                                        children: `SWEET MORELS`,
                                      }),
                                    }),
                                  },
                                },
                                children: d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-653p1z`,
                                      "data-styles-preset": `cRhro8yAF`,
                                      dir: `auto`,
                                      children: `SWEET MORELS`,
                                    }),
                                  }),
                                  className: `framer-1yw08l8`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                    d(b.section, {
                      className: `framer-1q3sbgl`,
                      "data-framer-name": `Section: Popular Products`,
                      layout: D,
                      children: h(`div`, {
                        className: `framer-1uy5ykv`,
                        "data-framer-name": `Container`,
                        children: [
                          d(Fn, {
                            __framer__animate: { transition: qn },
                            __framer__animateOnce: !0,
                            __framer__enter: Kn,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: d(n, {
                              children: h(`h2`, {
                                dir: `auto`,
                                style: {
                                  "--font-selector": `R0Y7Qm9sZG9uc2UtcmVndWxhcg==`,
                                  "--framer-font-family": `"Boldonse", sans-serif`,
                                  "--framer-font-open-type-features": `'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on`,
                                  "--framer-font-size": `80px`,
                                  "--framer-line-height": `140%`,
                                  "--framer-text-color": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                  "--framer-text-transform": `uppercase`,
                                },
                                children: [
                                  `Popular`,
                                  d(`span`, {
                                    style: {
                                      "--framer-text-color": `var(--token-a1d1db55-0222-4ade-a9f1-09b6162be2a3, rgb(23, 23, 23))`,
                                    },
                                    children: ` donuts`,
                                  }),
                                ],
                              }),
                            }),
                            className: `framer-a2iwfj`,
                            fonts: [`GF;Boldonse-regular`],
                            verticalAlignment: `top`,
                            viewBox: `0 0 850 112`,
                            withExternalLayout: !0,
                          }),
                          d(`div`, {
                            className: `framer-4hkhax`,
                            "data-framer-name": `Product Frame`,
                            children: h(`div`, {
                              className: `framer-7a4ald`,
                              "data-framer-name": `Products`,
                              children: [
                                k() &&
                                  d(Cn, {
                                    __framer__animate: { transition: Zn },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Gn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-1cczd4b hidden-1ypcquw hidden-rmibuk`,
                                    children: d(ve, {
                                      children: d(tr, {
                                        query: er(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  Meh67ADUX: t,
                                                  QvNWOjBr7: n,
                                                  umB1EKw1L: r,
                                                  vIcxxiuyk: i,
                                                  zzQZUhJ6B: a,
                                                },
                                                o
                                              ) => (
                                                (i ??= ``),
                                                (n ??= ``),
                                                (r ??= ``),
                                                (t ??= ``),
                                                d(
                                                  C,
                                                  {
                                                    id: `YZ5FYWzG8-${e}`,
                                                    children: d(le.Provider, {
                                                      value: { QvNWOjBr7: n },
                                                      children: d(ce, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { QvNWOjBr7: n },
                                                              webPageId: `hsuD1wdR7`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          d(B, {
                                                            height: 579,
                                                            width: `max((min(max(${l?.width || `100vw`}, 1px), 1920px) - 120px) / 3, 1px)`,
                                                            children: d(z, {
                                                              className: `framer-1pnwd4i-container`,
                                                              nodeId: `IBxDKjmeu`,
                                                              scopeId: `augiA20Il`,
                                                              children: d(Qe, {
                                                                dQFljyQ1P: t,
                                                                height: `100%`,
                                                                id: `IBxDKjmeu`,
                                                                layoutId: `IBxDKjmeu`,
                                                                OY08iNrnQ: r,
                                                                style: { width: `100%` },
                                                                t_wCHCu3L: $n(a),
                                                                variant: Q(Qn(i, s)),
                                                                width: `100%`,
                                                                zbLf7nA9u: i,
                                                                zNomss0Hu: e[0],
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
                                k() &&
                                  d(Cn, {
                                    __framer__animate: { transition: nr },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Gn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-hpy8pu hidden-1ypcquw hidden-rmibuk`,
                                    children: d(ve, {
                                      children: d(tr, {
                                        query: rr(),
                                        children: (e, t, n) =>
                                          d(_, {
                                            children: e?.map(
                                              (
                                                {
                                                  id: e,
                                                  Meh67ADUX: t,
                                                  QvNWOjBr7: n,
                                                  umB1EKw1L: r,
                                                  vIcxxiuyk: i,
                                                  zzQZUhJ6B: a,
                                                },
                                                o
                                              ) => (
                                                (i ??= ``),
                                                (n ??= ``),
                                                (r ??= ``),
                                                (t ??= ``),
                                                d(
                                                  C,
                                                  {
                                                    id: `LEzktBP8y-${e}`,
                                                    children: d(le.Provider, {
                                                      value: { QvNWOjBr7: n },
                                                      children: d(ce, {
                                                        links: [
                                                          {
                                                            href: {
                                                              pathVariables: { QvNWOjBr7: n },
                                                              webPageId: `hsuD1wdR7`,
                                                            },
                                                            implicitPathVariables: void 0,
                                                          },
                                                        ],
                                                        children: (e) =>
                                                          d(B, {
                                                            height: 579,
                                                            width: `max((min(max(${l?.width || `100vw`}, 1px), 1920px) - 120px) / 3, 1px)`,
                                                            children: d(z, {
                                                              className: `framer-1t8uqdl-container`,
                                                              nodeId: `RB8kSdGEd`,
                                                              scopeId: `augiA20Il`,
                                                              children: d(Qe, {
                                                                dQFljyQ1P: t,
                                                                height: `100%`,
                                                                id: `RB8kSdGEd`,
                                                                layoutId: `RB8kSdGEd`,
                                                                OY08iNrnQ: r,
                                                                style: { width: `100%` },
                                                                t_wCHCu3L: $n(a),
                                                                variant: Q(Qn(i, s)),
                                                                width: `100%`,
                                                                zbLf7nA9u: i,
                                                                zNomss0Hu: e[0],
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
                                d(H, {
                                  breakpoint: x,
                                  overrides: {
                                    MWLDW4udi: { __framer__styleAppearEffectEnabled: void 0 },
                                    wso0Ira08: { __framer__styleAppearEffectEnabled: void 0 },
                                  },
                                  children: d(Cn, {
                                    __framer__animate: { transition: ir },
                                    __framer__animateOnce: !0,
                                    __framer__enter: Gn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    className: `framer-rnynl7`,
                                    children: d(ve, {
                                      children: d(H, {
                                        breakpoint: x,
                                        overrides: {
                                          MWLDW4udi: { query: or() },
                                          wso0Ira08: { query: or() },
                                        },
                                        children: d(tr, {
                                          query: ar(),
                                          children: (e, t, n) =>
                                            d(_, {
                                              children: e?.map(
                                                (
                                                  {
                                                    id: e,
                                                    Meh67ADUX: t,
                                                    QvNWOjBr7: n,
                                                    umB1EKw1L: r,
                                                    vIcxxiuyk: i,
                                                    zzQZUhJ6B: a,
                                                  },
                                                  o
                                                ) => (
                                                  (i ??= ``),
                                                  (n ??= ``),
                                                  (r ??= ``),
                                                  (t ??= ``),
                                                  d(
                                                    C,
                                                    {
                                                      id: `BXQ6AnNUm-${e}`,
                                                      children: d(le.Provider, {
                                                        value: { QvNWOjBr7: n },
                                                        children: d(ce, {
                                                          links: [
                                                            {
                                                              href: {
                                                                pathVariables: { QvNWOjBr7: n },
                                                                webPageId: `hsuD1wdR7`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { QvNWOjBr7: n },
                                                                webPageId: `hsuD1wdR7`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                            {
                                                              href: {
                                                                pathVariables: { QvNWOjBr7: n },
                                                                webPageId: `hsuD1wdR7`,
                                                              },
                                                              implicitPathVariables: void 0,
                                                            },
                                                          ],
                                                          children: (e) =>
                                                            d(H, {
                                                              breakpoint: x,
                                                              overrides: {
                                                                MWLDW4udi: {
                                                                  width: `max((max(min(max(${l?.width || `100vw`}, 1px), 1920px) - 64px, 1px) - 20px) / 2, 50px)`,
                                                                },
                                                                wso0Ira08: {
                                                                  width: `max(min(${l?.width || `100vw`}, 1920px) - 40px, 1px)`,
                                                                },
                                                              },
                                                              children: d(B, {
                                                                height: 579,
                                                                width: `max((min(max(${l?.width || `100vw`}, 1px), 1920px) - 120px) / 3, 1px)`,
                                                                children: d(H, {
                                                                  breakpoint: x,
                                                                  overrides: {
                                                                    MWLDW4udi: {
                                                                      __framer__animate: {
                                                                        transition: Wn,
                                                                      },
                                                                      __framer__animateOnce: !0,
                                                                      __framer__enter: Gn,
                                                                      __framer__styleAppearEffectEnabled:
                                                                        !0,
                                                                      __framer__threshold: 0.5,
                                                                      __perspectiveFX: !1,
                                                                      __targetOpacity: 1,
                                                                    },
                                                                    wso0Ira08: {
                                                                      __framer__animate: {
                                                                        transition: Wn,
                                                                      },
                                                                      __framer__animateOnce: !0,
                                                                      __framer__enter: Gn,
                                                                      __framer__styleAppearEffectEnabled:
                                                                        !0,
                                                                      __framer__threshold: 0.5,
                                                                      __perspectiveFX: !1,
                                                                      __targetOpacity: 1,
                                                                    },
                                                                  },
                                                                  children: d(kn, {
                                                                    className: `framer-mk2l99-container`,
                                                                    nodeId: `RBTC5jcgr`,
                                                                    rendersWithMotion: !0,
                                                                    scopeId: `augiA20Il`,
                                                                    children: d(H, {
                                                                      breakpoint: x,
                                                                      overrides: {
                                                                        MWLDW4udi: {
                                                                          zNomss0Hu: e[1],
                                                                        },
                                                                        wso0Ira08: {
                                                                          zNomss0Hu: e[2],
                                                                        },
                                                                      },
                                                                      children: d(Qe, {
                                                                        dQFljyQ1P: t,
                                                                        height: `100%`,
                                                                        id: `RBTC5jcgr`,
                                                                        layoutId: `RBTC5jcgr`,
                                                                        OY08iNrnQ: r,
                                                                        style: { width: `100%` },
                                                                        t_wCHCu3L: $n(a),
                                                                        variant: Q(Qn(i, s)),
                                                                        width: `100%`,
                                                                        zbLf7nA9u: i,
                                                                        zNomss0Hu: e[0],
                                                                      }),
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
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    d(fe, {
                      as: `section`,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        intrinsicHeight: 2160,
                        intrinsicWidth: 3840,
                        pixelHeight: 2160,
                        pixelWidth: 3840,
                        sizes: l?.width || `100vw`,
                        src: `../../assets/images/Q4j0oVi5w412uOFkld8IVKgxR8-5cf267.png`,
                        srcSet: `../../assets/images/Q4j0oVi5w412uOFkld8IVKgxR8-d5b628.png 512w,../../assets/images/Q4j0oVi5w412uOFkld8IVKgxR8-16f981.png 1024w,../../assets/images/Q4j0oVi5w412uOFkld8IVKgxR8.png 2048w,../../assets/images/Q4j0oVi5w412uOFkld8IVKgxR8-5cf267.png 3840w`,
                      },
                      className: `framer-ehwn5t`,
                      "data-framer-name": `Section: CTA`,
                      layout: D,
                      children: d(`div`, {
                        className: `framer-55yx1r`,
                        "data-framer-name": `Container`,
                        children: h(`div`, {
                          className: `framer-jbfryd`,
                          "data-framer-name": `CTA`,
                          children: [
                            h(`div`, {
                              className: `framer-1597as8`,
                              "data-framer-name": `Title`,
                              children: [
                                d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`h2`, {
                                      className: `framer-styles-preset-15fb0k4`,
                                      "data-styles-preset": `Gwy_nKUUa`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `Follow the Sweet Perks`,
                                    }),
                                  }),
                                  className: `framer-ma9mfq`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                d(j, {
                                  __fromCanvasComponent: !0,
                                  children: d(n, {
                                    children: d(`p`, {
                                      className: `framer-styles-preset-1u3gdcs`,
                                      "data-styles-preset": `kJFpmPtbb`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `center` },
                                      children: `Follow us for sweet updates, exclusive treats, cozy surprises, seasonal flavors, and special little rewards made for you.`,
                                    }),
                                  }),
                                  className: `framer-dftir2`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            d(B, {
                              height: 52,
                              children: d(z, {
                                className: `framer-rhw2sh-container`,
                                nodeId: `bm346tJyv`,
                                scopeId: `augiA20Il`,
                                children: d(H, {
                                  breakpoint: x,
                                  overrides: {
                                    MWLDW4udi: { variant: Q(`tJuAPrFeT`) },
                                    wso0Ira08: { variant: Q(`tJuAPrFeT`) },
                                  },
                                  children: d(et, {
                                    height: `100%`,
                                    id: `bm346tJyv`,
                                    k6v4IaiQz: !1,
                                    layoutId: `bm346tJyv`,
                                    suovcfe8I: `follow us`,
                                    TGw4ZKdXt: `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                                    variant: Q(`jgw04tyIQ`),
                                    vGze8YVfr: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 236, 229))`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          ],
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
        `.framer-UD4Xq.framer-lux5qc, .framer-UD4Xq .framer-lux5qc { display: block; }`,
        `.framer-UD4Xq.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-UD4Xq .framer-1xqv0rd-container { flex: none; height: 100vh; left: 0px; pointer-events: none; position: fixed; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-UD4Xq .framer-1v114nh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-1581zpl { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-UD4Xq .framer-1had825 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 100vh; justify-content: flex-start; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 40px 50px 40px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-1dpun7r, .framer-UD4Xq .framer-a2iwfj { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: 100%; }`,
        `.framer-UD4Xq .framer-1gxfli0, .framer-UD4Xq .framer-lmgr9f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-1xch45t { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; max-width: 600px; position: relative; white-space: pre-wrap; width: 40%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-UD4Xq .framer-pigvo7-container, .framer-UD4Xq .framer-1hsqa3f-container, .framer-UD4Xq .framer-1i1rbtn-container, .framer-UD4Xq .framer-rhw2sh-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-UD4Xq .framer-1hmpdj5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-34o0wy { flex: none; height: 100vh; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-UD4Xq .framer-qyhzbq { aspect-ratio: 1 / 1; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); border-bottom-left-radius: 1000px; border-bottom-right-radius: 1000px; border-top-left-radius: 1000px; border-top-right-radius: 1000px; flex: none; gap: 10px; height: auto; left: 50%; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 50%; transform: translate(-50%, -50%); width: 40%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-UD4Xq .framer-1vr29j4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 150px 40px 150px 40px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-12wxb8z, .framer-UD4Xq .framer-7atjaf { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 150px; width: 40%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-UD4Xq .framer-1wkxulb { aspect-ratio: 1 / 1; bottom: 0px; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 150px; width: 40%; will-change: var(--framer-will-change-filter-override, filter); z-index: 0; }`,
        `.framer-UD4Xq .framer-129wwwz { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre; width: 1px; }`,
        `.framer-UD4Xq .framer-1sr9xqo { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-UD4Xq .framer-1mcctmv { bottom: -500px; flex: none; height: 50%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; z-index: 0; }`,
        `.framer-UD4Xq .framer-132w7l7 { flex: none; height: 50%; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(48.47058823529414% - 50% / 2); width: 100%; z-index: 0; }`,
        `.framer-UD4Xq .framer-19n195a { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 150px 40px 150px 40px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-UD4Xq .framer-lvl7l-container { aspect-ratio: 1.453125 / 1; flex: none; height: auto; position: absolute; right: 150px; top: -70px; width: 50%; z-index: 0; }`,
        `.framer-UD4Xq .framer-13ziws0-container { aspect-ratio: 1.8161925601750548 / 1; bottom: -40px; flex: none; height: auto; left: 243px; max-height: 400px; position: absolute; width: 45%; z-index: 0; }`,
        `.framer-UD4Xq .framer-178smw4 { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: auto; justify-content: space-between; min-width: 580px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-UD4Xq .framer-5d5ezx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-UD4Xq .framer-1ic8ft1, .framer-UD4Xq .framer-1eo8lxc, .framer-UD4Xq .framer-xk0m0, .framer-UD4Xq .framer-1etjgs7, .framer-UD4Xq .framer-1gzrrf9, .framer-UD4Xq .framer-1sgft0x, .framer-UD4Xq .framer-m3cimz, .framer-UD4Xq .framer-1yw08l8 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-UD4Xq .framer-17tsxkh { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 580px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-lnk5tr, .framer-UD4Xq .framer-ma9mfq, .framer-UD4Xq .framer-dftir2 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-UD4Xq .framer-1ghiipu { flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-UD4Xq .framer-3il54z { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-1v7agde { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: 100vh; justify-content: center; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 150px 0px 150px 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-gxugg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-ldclc7-container, .framer-UD4Xq .framer-hdtv9b-container, .framer-UD4Xq .framer-1rczfut-container, .framer-UD4Xq .framer-1t5xsuh-container, .framer-UD4Xq .framer-dwdxqr-container, .framer-UD4Xq .framer-1pnwd4i-container, .framer-UD4Xq .framer-1t8uqdl-container, .framer-UD4Xq .framer-mk2l99-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-1fck71q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-1cz1enb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 180%; }`,
        `.framer-UD4Xq .framer-wzhc6s, .framer-UD4Xq .framer-1ctvtzb, .framer-UD4Xq .framer-do0kd3 { flex: none; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-iclodz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-1q30q0x-container { flex: none; height: 100%; left: 0px; position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-UD4Xq .framer-bondp { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: 100vh; justify-content: space-between; max-width: 1920px; overflow: var(--overflow-clip-fallback, clip); padding: 100px 40px 100px 40px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-10pbadm-container { flex: none; height: auto; max-width: 700px; position: relative; width: 50%; }`,
        `.framer-UD4Xq .framer-k7evus { aspect-ratio: 0.8 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 35%; }`,
        `.framer-UD4Xq .framer-1uajrhf, .framer-UD4Xq .framer-r6fpv8 { flex: none; height: 100%; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-UD4Xq .framer-kycw06 { flex: 1 0 0px; height: 1px; overflow: visible; position: relative; width: 60%; }`,
        `.framer-UD4Xq .framer-6sofmi { bottom: 0px; flex: none; height: auto; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-UD4Xq .framer-1s039c7 { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-1lktlb { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-1q3sbgl { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-UD4Xq .framer-1uy5ykv { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 150px 40px 150px 40px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-4hkhax { aspect-ratio: 2.488888888888889 / 1; flex: none; height: auto; max-height: 700px; overflow: visible; position: relative; width: 100%; }`,
        `.framer-UD4Xq .framer-7a4ald { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; left: 0px; overflow: visible; padding: 0px; position: absolute; width: 100%; }`,
        `.framer-UD4Xq .framer-1cczd4b { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 100px 0px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-hpy8pu { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 50px 0px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-rnynl7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 40px 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-ehwn5t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-UD4Xq .framer-55yx1r { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1920px; min-height: 75vh; overflow: var(--overflow-clip-fallback, clip); padding: 150px 40px 150px 40px; position: relative; width: 1px; }`,
        `.framer-UD4Xq .framer-jbfryd { align-content: center; align-items: center; background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); border-bottom-left-radius: 40px; border-bottom-right-radius: 40px; border-top-left-radius: 40px; border-top-right-radius: 40px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1400px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 60px 40px; position: relative; width: 80%; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-UD4Xq .framer-1597as8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 800px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        ...Ae,
        ...Ie,
        ...He,
        ...Ee,
        ...Ue,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-UD4Xq.framer-72rtr7 { width: 810px; } .framer-UD4Xq .framer-1had825 { padding: 100px 32px 50px 32px; } .framer-UD4Xq .framer-1hmpdj5 { background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); } .framer-UD4Xq .framer-1vr29j4, .framer-UD4Xq .framer-bondp { padding: 120px 32px 120px 32px; } .framer-UD4Xq .framer-12wxb8z, .framer-UD4Xq .framer-1wkxulb, .framer-UD4Xq .framer-7atjaf { right: 100px; } .framer-UD4Xq .framer-19n195a { gap: 20px; padding: 120px 32px 120px 32px; } .framer-UD4Xq .framer-lvl7l-container { top: -100px; width: 45%; } .framer-UD4Xq .framer-178smw4 { min-width: unset; } .framer-UD4Xq .framer-5d5ezx { align-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; } .framer-UD4Xq .framer-1ic8ft1 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-UD4Xq .framer-1v7agde { gap: 80px; height: min-content; padding: 120px 0px 120px 0px; } .framer-UD4Xq .framer-gxugg, .framer-UD4Xq .framer-1fck71q { padding: 0px 32px 0px 32px; } .framer-UD4Xq .framer-1cz1enb { align-content: unset; align-items: unset; display: grid; flex: 1 0 0px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, minmax(0, 1fr)); width: 1px; } .framer-UD4Xq .framer-hdtv9b-container, .framer-UD4Xq .framer-1rczfut-container, .framer-UD4Xq .framer-1t5xsuh-container, .framer-UD4Xq .framer-dwdxqr-container, .framer-UD4Xq .framer-mk2l99-container { align-self: start; flex: none; justify-self: start; width: 100%; } .framer-UD4Xq .framer-k7evus { width: 45%; } .framer-UD4Xq .framer-kycw06 { width: 84%; } .framer-UD4Xq .framer-1lktlb { gap: 80px; } .framer-UD4Xq .framer-1uy5ykv { gap: 80px; padding: 120px 32px 120px 32px; } .framer-UD4Xq .framer-4hkhax { align-content: center; align-items: center; aspect-ratio: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-height: unset; padding: 0px; } .framer-UD4Xq .framer-7a4ald { bottom: unset; left: unset; position: relative; } .framer-UD4Xq .framer-rnynl7 { align-content: unset; align-items: unset; display: grid; gap: 20px 20px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(2, minmax(50px, 1fr)); justify-content: center; } .framer-UD4Xq .framer-55yx1r { min-height: unset; padding: 120px 32px 120px 32px; } .framer-UD4Xq .framer-jbfryd { flex: 1 0 0px; padding: 40px; width: 1px; }}`,
        `@media (max-width: 809.98px) { .framer-UD4Xq.framer-72rtr7 { width: 390px; } .framer-UD4Xq .framer-1v114nh, .framer-UD4Xq .framer-1sr9xqo, .framer-UD4Xq .framer-1q3sbgl, .framer-UD4Xq .framer-ehwn5t { flex-direction: column; } .framer-UD4Xq .framer-1had825 { flex: none; gap: 12px; padding: 100px 20px 50px 20px; width: 100%; } .framer-UD4Xq .framer-1gxfli0 { flex-direction: column; gap: 40px; justify-content: flex-start; } .framer-UD4Xq .framer-1xch45t, .framer-UD4Xq .framer-10pbadm-container { width: 100%; } .framer-UD4Xq .framer-1hmpdj5 { background-color: var(--token-4afec5b3-c9ca-4318-8586-8033acd8e73b, #ffece5); } .framer-UD4Xq .framer-1vr29j4 { padding: 100px 20px 100px 20px; } .framer-UD4Xq .framer-12wxb8z, .framer-UD4Xq .framer-1wkxulb, .framer-UD4Xq .framer-7atjaf { right: 20px; width: 56%; } .framer-UD4Xq .framer-19n195a { flex: none; flex-direction: column; gap: 60px; padding: 100px 20px 100px 20px; width: 100%; } .framer-UD4Xq .framer-lvl7l-container { right: 43px; top: -20px; } .framer-UD4Xq .framer-13ziws0-container { bottom: -25px; left: unset; right: -11px; width: 72%; } .framer-UD4Xq .framer-178smw4 { align-self: unset; gap: 20px; height: min-content; justify-content: flex-start; min-width: unset; width: 100%; } .framer-UD4Xq .framer-5d5ezx { align-content: flex-start; align-items: flex-start; flex-direction: column; width: 100%; } .framer-UD4Xq .framer-1ic8ft1 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-UD4Xq .framer-1ghiipu, .framer-UD4Xq .framer-hdtv9b-container, .framer-UD4Xq .framer-1rczfut-container, .framer-UD4Xq .framer-1t5xsuh-container, .framer-UD4Xq .framer-dwdxqr-container, .framer-UD4Xq .framer-mk2l99-container { flex: none; width: 100%; } .framer-UD4Xq .framer-1v7agde { gap: 60px; height: min-content; padding: 100px 0px 100px 0px; } .framer-UD4Xq .framer-gxugg, .framer-UD4Xq .framer-1fck71q { padding: 0px 20px 0px 20px; } .framer-UD4Xq .framer-1cz1enb { flex: 1 0 0px; flex-direction: column; width: 1px; } .framer-UD4Xq .framer-bondp { gap: 20px; height: min-content; justify-content: center; padding: 100px 20px 100px 20px; } .framer-UD4Xq .framer-lmgr9f { flex-direction: column; gap: 20px; justify-content: flex-start; } .framer-UD4Xq .framer-k7evus { align-content: center; align-items: center; aspect-ratio: unset; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; width: 100%; } .framer-UD4Xq .framer-1uajrhf, .framer-UD4Xq .framer-r6fpv8 { height: 438px; left: unset; position: relative; top: unset; } .framer-UD4Xq .framer-kycw06 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; width: 100%; } .framer-UD4Xq .framer-6sofmi, .framer-UD4Xq .framer-7a4ald { bottom: unset; left: unset; position: relative; } .framer-UD4Xq .framer-1s039c7 { background-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); flex-direction: column; } .framer-UD4Xq .framer-1lktlb { flex: none; gap: 60px; width: 100%; } .framer-UD4Xq .framer-1uy5ykv { flex: none; gap: 60px; padding: 100px 20px 100px 20px; width: 100%; } .framer-UD4Xq .framer-4hkhax { align-content: center; align-items: center; aspect-ratio: unset; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-height: unset; padding: 0px; } .framer-UD4Xq .framer-rnynl7 { flex-direction: column; gap: 20px 20px; } .framer-UD4Xq .framer-55yx1r { flex: none; min-height: unset; padding: 100px 20px 100px 20px; width: 100%; } .framer-UD4Xq .framer-jbfryd { flex: 1 0 0px; gap: 60px; padding: 24px; width: 1px; }}`,
      ],
      `framer-UD4Xq`
    )),
    (ur.displayName = `Home`),
    (ur.defaultProps = { height: 8539, width: 1200 }),
    ge(
      ur,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Boldonse`,
              openType: !0,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Boldonse`,
              url: `../../assets/fonts/ZgNQjPxGPbbJUZemjC35hmHmNpCO.woff2`,
              weight: `400`,
            },
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
        ...xn,
        ...Sn,
        ...wn,
        ...Tn,
        ...En,
        ...On,
        ...jn,
        ...Nn,
        ...In,
        ...P(je),
        ...P(Le),
        ...P(We),
        ...P(Te),
        ...P(Ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ur.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = be.get(er(), n),
          i = be.get(rr(), n),
          a = be.get(ar(), n),
          o = be.get(or(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          o.preload(),
          N(q, {}, t),
          N(et, {}, t),
          N(W, {}, t),
          N(X, {}, t),
          N(J, {}, t),
          N(Y, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => N(Qe, {}, t)));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => N(Qe, {}, t)));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => N(Qe, {}, t)));
          })(),
        ]);
      },
    }),
    (dr = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerIntrinsicWidth: `1200`,
            framerAcceptsLayoutTemplate: `true`,
            framerScrollSections: `{"ZAc5c_pCg":{"pattern":":ZAc5c_pCg","name":"scroll-path"},"g9I5KbRmF":{"pattern":":g9I5KbRmF","name":"scroll-path-1"},"vASI_OBhy":{"pattern":":vASI_OBhy","name":"title-effect"},"WyRK_hZvc":{"pattern":":WyRK_hZvc","name":"hoz-scroll"},"OvbfIU2KF":{"pattern":":OvbfIU2KF","name":"text-reavel"},"p9yu6LBJQ":{"pattern":":p9yu6LBJQ","name":"bg-change"}}`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"MWLDW4udi":{"layout":["fixed","auto"]},"wso0Ira08":{"layout":["fixed","auto"]}}}`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `8539`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { dr as __FramerMetadata__, ur as default, zn as queryParamNames };
//# sourceMappingURL=F-f8MNDzm6K-XnoBoTFTOISb1mrOw69s_3OZexjB-70.B1zYAfE6.mjs.map
