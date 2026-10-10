import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  E as r,
  I as i,
  L as a,
  N as o,
  P as s,
  c,
  j as l,
  l as u,
  s as d,
  u as f,
  v as p,
  x as m,
} from "./react.ClsXD4bF.mjs";
import { a as h, r as g, t as _, w as v } from "./motion.ClyXVVeQ.mjs";
import {
  A as y,
  At as b,
  Dt as x,
  Et as S,
  F as C,
  G as w,
  I as T,
  M as E,
  Mt as D,
  O,
  Ot as k,
  S as A,
  U as j,
  W as M,
  Z as N,
  _ as P,
  _t as F,
  a as I,
  d as L,
  dt as R,
  f as z,
  ft as B,
  gt as ee,
  ht as te,
  i as V,
  j as H,
  m as ne,
  o as U,
  u as re,
  wt as ie,
  xt as ae,
  yt as W,
} from "./framer.CbUxDv78.mjs";
import { i as oe, n as se, r as ce, t as le } from "./KKnW9Hd3v.TmuhifDy.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as me, n as he, r as ge, t as _e } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./tEGb3dIPL.DmfZkyjB.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./wEX21mXRe.BeCcrLA7.mjs";
import { i as Ee, n as De, r as Oe, t as ke } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { i as Ae, n as je, r as Me, t as Ne } from "./uYUgOfNpa.CpQT0pAt.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./IwoeRBoDn.CVNhweph.mjs";
import { n as Re, t as ze } from "./N12TUaohN.txDyUY3q.mjs";
import Be, { t as Ve } from "./5Wgcf9_zHyEJb60cFlpZLM16iodi9jazx_jFd1aMwzc.CHJCTMTi.mjs";
var He,
  Ue = e(() => {
    (N(),
      (He = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...He },
      U.EventHandler,
      U.EventHandler,
      U.EventHandler,
      U.Number,
      U.Boolean,
      U.String,
      U.Enum);
  }),
  We = e(() => {
    (N(), n());
  }),
  Ge = e(() => {
    n();
  }),
  Ke = e(() => {
    N();
  }),
  qe = e(() => {
    N();
  }),
  Je = e(() => {
    n();
  }),
  Ye = e(() => {
    N();
  }),
  Xe = e(() => {
    (t(), n());
  }),
  Ze = e(() => {
    (n(), qe());
  }),
  Qe = e(() => {
    (n(), N(), qe(), Ge());
  }),
  $e = e(() => {
    (N(), n(), Ue());
  }),
  et = e(() => {
    (n(), N());
  }),
  tt = e(() => {
    n();
  });
function nt(e) {
  let {
    borderRadius: t,
    isMixedBorderRadius: n,
    topLeftRadius: r,
    topRightRadius: i,
    bottomRightRadius: a,
    bottomLeftRadius: o,
  } = e;
  return s(() => (n ? `${r}px ${i}px ${a}px ${o}px` : `${t}px`), [t, n, r, i, a, o]);
}
var rt,
  it = e(() => {
    (n(),
      N(),
      (rt = {
        borderRadius: {
          title: `Radius`,
          type: U.FusedNumber,
          toggleKey: `isMixedBorderRadius`,
          toggleTitles: [`Radius`, `Radius per corner`],
          valueKeys: [`topLeftRadius`, `topRightRadius`, `bottomRightRadius`, `bottomLeftRadius`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
        },
      }),
      U.FusedNumber);
  }),
  at = e(() => {
    (Ue(), We(), Ge(), Ke(), qe(), Je(), Ye(), Xe(), Ze(), Qe(), $e(), et(), tt(), it());
  }),
  ot = e(() => {
    at();
  });
function st({ coordinates: e, zoom: t, style: n, ...r }) {
  let i = nt(r);
  return u(v.div, {
    style: { ...n, ...He, overflow: `hidden`, borderRadius: i },
    ...r,
    children: u(`iframe`, {
      style: { height: `100%`, width: `100%`, border: 0 },
      src: `https://maps.google.com/maps?q=${encodeURIComponent(e)}&z=${t}&output=embed`,
    }),
  });
}
var ct = e(() => {
    (d(),
      N(),
      ot(),
      E(st, {
        coordinates: {
          type: U.String,
          title: `Location`,
          placeholder: `Framer B.V.`,
          defaultValue: `Framer B.V.`,
          description: `The name of the place or its GPS coordinates.`,
        },
        zoom: { type: U.Number, step: 1, min: 0, max: 25, title: `Zoom`, defaultValue: 15 },
        ...rt,
      }));
  }),
  lt,
  ut,
  dt,
  ft = e(() => {
    (N(),
      T.loadFonts([
        `GF;DM Sans-500`,
        `GF;DM Sans-700`,
        `GF;DM Sans-700italic`,
        `GF;DM Sans-500italic`,
      ]),
      (lt = [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `../../assets/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAkJxhS2f3ZGMZpg.woff2`,
              weight: `500`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `../../assets/fonts/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwARZthS2f3ZGMZpg.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `../../assets/fonts/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat9uCm32RmYJpso5.woff2`,
              weight: `700`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `italic`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2rp2ywxg089UriCZaSExd86J3t9jz86Mvy4qCRAL19DksVat-7DW32RmYJpso5.woff2`,
              weight: `500`,
            },
          ],
        },
      ]),
      (ut = [
        `.framer-l8pa9 .framer-styles-preset-1tt45on:not(.rich-text-wrapper), .framer-l8pa9 .framer-styles-preset-1tt45on.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 18px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3333333em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-text-decoration: underline; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-l8pa9 .framer-styles-preset-1tt45on:not(.rich-text-wrapper), .framer-l8pa9 .framer-styles-preset-1tt45on.rich-text-wrapper p { --framer-font-family: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-family-italic: "DM Sans", "DM Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 500; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 500; --framer-letter-spacing: -0.02em; --framer-line-height: 1.3333333em; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-text-decoration: underline; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (dt = `framer-l8pa9`));
  });
function pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  G,
  Ct = e(() => {
    (d(),
      N(),
      _(),
      n(),
      ft(),
      ve(),
      Se(),
      (mt = [`WzhC_oRg_`, `CwvzJbdEI`, `dRqiP0qwa`]),
      (ht = `framer-ENABB`),
      (gt = {
        CwvzJbdEI: `framer-v-bw4s4q`,
        dRqiP0qwa: `framer-v-1xd4vgd`,
        WzhC_oRg_: `framer-v-12doioa`,
      }),
      (_t = { delay: 0.1, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (vt = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (yt = v.create(a)),
      (bt = { Primary: `WzhC_oRg_`, Small: `dRqiP0qwa`, Tablet: `CwvzJbdEI` }),
      (xt = ({ height: e, id: t, link: n, location: r, width: i, ...a }) => ({
        ...a,
        OxRPsN5Qm: r ?? a.OxRPsN5Qm ?? `17700 Avalon BLVD Carson California, USA`,
        POnGm2Ylw: n ?? a.POnGm2Ylw,
        variant: bt[a.variant] ?? a.variant ?? `WzhC_oRg_`,
      })),
      (St = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = k(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = W();
          B();
          let {
              style: c,
              className: d,
              layoutId: p,
              variant: h,
              OxRPsN5Qm: _,
              POnGm2Ylw: y,
              ...b
            } = xt(e),
            {
              baseVariant: S,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = x({
              cycleOrder: mt,
              defaultVariant: `WzhC_oRg_`,
              ref: r,
              variant: h,
              variantClassNames: gt,
            }),
            N = St(e, M),
            F = C(ht, xe, Te, dt);
          return u(g, {
            id: p ?? i,
            children: u(yt, {
              animate: M,
              initial: !1,
              children: u(vt, {
                value: _t,
                children: u(P, {
                  href: y,
                  motionChild: !0,
                  nodeId: `WzhC_oRg_`,
                  openInNewTab: !0,
                  scopeId: `X4t_BR9aj`,
                  children: f(v.a, {
                    ...b,
                    ...E,
                    className: `${C(F, `framer-12doioa`, d, w)} framer-gmhcq6`,
                    "data-border": !0,
                    "data-framer-name": `Primary`,
                    layoutDependency: N,
                    layoutId: `WzhC_oRg_`,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `var(--token-89af1331-0dee-4088-ab8b-a84565bdd274, rgb(241, 249, 231))`,
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                      boxShadow: `0px 6px 24px 3px rgba(0, 0, 0, 0.06)`,
                      ...c,
                    },
                    variants: {
                      dRqiP0qwa: {
                        borderBottomLeftRadius: 8,
                        borderBottomRightRadius: 8,
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      },
                    },
                    ...pt(
                      {
                        CwvzJbdEI: { "data-framer-name": `Tablet` },
                        dRqiP0qwa: { "data-framer-name": `Small` },
                      },
                      S,
                      D
                    ),
                    children: [
                      u(O, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(v.div, {
                            className: `framer-styles-preset-1aus3b5`,
                            "data-styles-preset": `tEGb3dIPL`,
                            children: `Headquarter`,
                          }),
                        }),
                        className: `framer-177x22o`,
                        "data-framer-name": `Title`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `w6Shn6rgM`,
                        style: { "--framer-paragraph-spacing": `0px` },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      u(O, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(v.p, {
                            className: `framer-styles-preset-1pumtl1`,
                            "data-styles-preset": `wEX21mXRe`,
                            style: { "--framer-text-alignment": `left` },
                            children: `17700 Avalon BLVD Carson California, USA`,
                          }),
                        }),
                        className: `framer-qfzum3`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `ik4q1CZS8`,
                        style: { "--framer-paragraph-spacing": `0px` },
                        text: _,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                      u(O, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(v.p, {
                            className: `framer-styles-preset-1tt45on`,
                            "data-styles-preset": `IXaTOl2E6`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                            },
                            children: `Know more `,
                          }),
                        }),
                        className: `framer-u5kf5a`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: N,
                        layoutId: `KPHFJGhR6`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
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
          `.framer-ENABB.framer-gmhcq6, .framer-ENABB .framer-gmhcq6 { display: block; }`,
          `.framer-ENABB.framer-12doioa { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 18px 24px 18px 24px; position: relative; text-decoration: none; width: 317px; }`,
          `.framer-ENABB .framer-177x22o { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ENABB .framer-qfzum3 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 78%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-ENABB .framer-u5kf5a { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ENABB.framer-12doioa { gap: 0px; } .framer-ENABB.framer-12doioa > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-ENABB.framer-12doioa > :first-child { margin-top: 0px; } .framer-ENABB.framer-12doioa > :last-child { margin-bottom: 0px; } }`,
          `.framer-ENABB.framer-v-bw4s4q.framer-12doioa { gap: 8px; padding: 12px; width: 250px; }`,
          `.framer-ENABB.framer-v-bw4s4q .framer-qfzum3, .framer-ENABB.framer-v-1xd4vgd .framer-qfzum3 { width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ENABB.framer-v-bw4s4q.framer-12doioa { gap: 0px; } .framer-ENABB.framer-v-bw4s4q.framer-12doioa > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-ENABB.framer-v-bw4s4q.framer-12doioa > :first-child { margin-top: 0px; } .framer-ENABB.framer-v-bw4s4q.framer-12doioa > :last-child { margin-bottom: 0px; } }`,
          `.framer-ENABB.framer-v-1xd4vgd.framer-12doioa { gap: 5px; padding: 8px; width: 250px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-ENABB.framer-v-1xd4vgd.framer-12doioa { gap: 0px; } .framer-ENABB.framer-v-1xd4vgd.framer-12doioa > * { margin: 0px; margin-bottom: calc(5px / 2); margin-top: calc(5px / 2); } .framer-ENABB.framer-v-1xd4vgd.framer-12doioa > :first-child { margin-top: 0px; } .framer-ENABB.framer-v-1xd4vgd.framer-12doioa > :last-child { margin-bottom: 0px; } }`,
          ...ye,
          ...Ce,
          ...ut,
          `.framer-ENABB[data-border="true"]::after, .framer-ENABB [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-ENABB`
      )),
      (G.displayName = `Location Widget`),
      (G.defaultProps = { height: 164, width: 317 }),
      E(G, {
        variant: {
          options: [`WzhC_oRg_`, `CwvzJbdEI`, `dRqiP0qwa`],
          optionTitles: [`Primary`, `Tablet`, `Small`],
          title: `Variant`,
          type: U.Enum,
        },
        OxRPsN5Qm: {
          defaultValue: `17700 Avalon BLVD Carson California, USA`,
          displayTextArea: !1,
          title: `Location`,
          type: U.String,
        },
        POnGm2Ylw: { title: `Link`, type: U.Link },
      }),
      H(
        G,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(be),
          ...M(we),
          ...M(lt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
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
  K,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  q,
  It = e(() => {
    (d(),
      N(),
      _(),
      n(),
      Ct(),
      (Tt = j(G)),
      (Et = {
        DuFXHzEti: { hover: !0 },
        Efqo8BFWQ: { hover: !0 },
        gQ7dJPMSH: { hover: !0 },
        w21iAnTEM: { hover: !0 },
        Wg46WydI4: { hover: !0 },
      }),
      (Dt = [`Wg46WydI4`, `w21iAnTEM`, `gQ7dJPMSH`, `DuFXHzEti`, `Efqo8BFWQ`, `zIXZOhmPZ`]),
      (Ot = `framer-vy5o9`),
      (kt = {
        DuFXHzEti: `framer-v-nw083x`,
        Efqo8BFWQ: `framer-v-4dn80t`,
        gQ7dJPMSH: `framer-v-cqcxje`,
        w21iAnTEM: `framer-v-1iskocq`,
        Wg46WydI4: `framer-v-xslkeh`,
        zIXZOhmPZ: `framer-v-1w0c58i`,
      }),
      (At = { delay: 0, duration: 1.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (K = (e, t) => `translate(-50%, -50%) ${t}`),
      (jt = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (Mt = v.create(a)),
      (Nt = {
        "Step 2": `w21iAnTEM`,
        "Step 3": `gQ7dJPMSH`,
        "Step 4": `DuFXHzEti`,
        "Step 5": `Efqo8BFWQ`,
        Default: `Wg46WydI4`,
        Small: `zIXZOhmPZ`,
      }),
      (Pt = ({ cardVisisbility: e, height: t, id: n, link: r, location: i, width: a, ...o }) => ({
        ...o,
        j9xdcEK2l: i ?? o.j9xdcEK2l ?? `17700 Avalon BLVD Carson California, USA`,
        jHgLt03lP: r ?? o.jHgLt03lP,
        variant: Nt[o.variant] ?? o.variant ?? `Wg46WydI4`,
        vFSx_rKBW: e ?? o.vFSx_rKBW ?? !0,
      })),
      (Ft = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = k(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: a, setLocale: o } = W(),
            s = B(),
            {
              style: c,
              className: d,
              layoutId: p,
              variant: h,
              j9xdcEK2l: _,
              jHgLt03lP: b,
              vFSx_rKBW: S,
              ...T
            } = Pt(e),
            {
              baseVariant: E,
              classNames: D,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: F,
            } = x({
              cycleOrder: Dt,
              defaultVariant: `Wg46WydI4`,
              enabledGestures: Et,
              ref: r,
              variant: h,
              variantClassNames: kt,
            }),
            I = Ft(e, F),
            { activeVariantCallback: L, delay: z } = R(E),
            ee = L(async (...e) => {
              M({ isPressed: !1 });
            }),
            te = L(async (...e) => {
              N(`w21iAnTEM`);
            }),
            H = L(async (...e) => {
              await z(() => N(`gQ7dJPMSH`), 250);
            }),
            U = L(async (...e) => {
              await z(() => N(`DuFXHzEti`), 500);
            });
          ae(E, {
            default: te,
            DuFXHzEti: L(async (...e) => {
              await z(() => N(`Efqo8BFWQ`), 750);
            }),
            Efqo8BFWQ: L(async (...e) => {
              await z(() => N(`Wg46WydI4`), 1e3);
            }),
            gQ7dJPMSH: U,
            w21iAnTEM: H,
            zIXZOhmPZ: void 0,
          });
          let re = C(Ot),
            ie = () =>
              !![
                `Wg46WydI4-hover`,
                `w21iAnTEM-hover`,
                `gQ7dJPMSH-hover`,
                `DuFXHzEti-hover`,
                `Efqo8BFWQ-hover`,
              ].includes(A),
            oe = (e) =>
              [
                `Wg46WydI4-hover`,
                `w21iAnTEM-hover`,
                `gQ7dJPMSH-hover`,
                `DuFXHzEti-hover`,
                `Efqo8BFWQ-hover`,
              ].includes(A)
                ? e
                : !1,
            se = () =>
              ![
                `Wg46WydI4-hover`,
                `w21iAnTEM-hover`,
                `gQ7dJPMSH-hover`,
                `DuFXHzEti-hover`,
                `Efqo8BFWQ-hover`,
              ].includes(A);
          return u(g, {
            id: p ?? i,
            children: u(Mt, {
              animate: F,
              initial: !1,
              children: u(jt, {
                value: At,
                children: u(P, {
                  href: b,
                  motionChild: !0,
                  nodeId: `Wg46WydI4`,
                  scopeId: `A6wfIqF90`,
                  children: f(v.a, {
                    ...T,
                    ...k,
                    className: `${C(re, `framer-xslkeh`, d, D)} framer-1b3uoam`,
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: I,
                    layoutId: `Wg46WydI4`,
                    onTap: ee,
                    ref: r,
                    style: { ...c },
                    ...wt(
                      {
                        "DuFXHzEti-hover": { "data-framer-name": void 0, onTap: void 0 },
                        "Efqo8BFWQ-hover": { "data-framer-name": void 0, onTap: void 0 },
                        "gQ7dJPMSH-hover": { "data-framer-name": void 0 },
                        "w21iAnTEM-hover": { "data-framer-name": void 0 },
                        "Wg46WydI4-hover": { "data-framer-name": void 0 },
                        DuFXHzEti: { "data-framer-name": `Step 4`, onTap: void 0 },
                        Efqo8BFWQ: { "data-framer-name": `Step 5`, onTap: void 0 },
                        gQ7dJPMSH: { "data-framer-name": `Step 3` },
                        w21iAnTEM: { "data-framer-name": `Step 2` },
                        zIXZOhmPZ: {
                          "data-framer-name": `Small`,
                          "data-highlight": void 0,
                          onTap: void 0,
                        },
                      },
                      E,
                      A
                    ),
                    children: [
                      ie() &&
                        u(ne, {
                          background: {
                            alt: `Location`,
                            fit: `fill`,
                            pixelHeight: 56,
                            pixelWidth: 56,
                            src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                          },
                          className: `framer-8dgyqy`,
                          "data-framer-name": `Icon`,
                          layoutDependency: I,
                          layoutId: `iLoEX3meU`,
                          ...wt(
                            {
                              "DuFXHzEti-hover": {
                                background: {
                                  alt: `Location`,
                                  fit: `fill`,
                                  loading: w(
                                    (s?.y || 0) +
                                      (0 +
                                        ((s?.height || 56) - 0 - ((s?.height || 56) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 56,
                                  pixelWidth: 56,
                                  src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                                },
                              },
                              "Efqo8BFWQ-hover": {
                                background: {
                                  alt: `Location`,
                                  fit: `fill`,
                                  loading: w(
                                    (s?.y || 0) +
                                      (0 +
                                        ((s?.height || 56) - 0 - ((s?.height || 56) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 56,
                                  pixelWidth: 56,
                                  src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                                },
                              },
                              "gQ7dJPMSH-hover": {
                                background: {
                                  alt: `Location`,
                                  fit: `fill`,
                                  loading: w(
                                    (s?.y || 0) +
                                      (0 +
                                        ((s?.height || 56) - 0 - ((s?.height || 56) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 56,
                                  pixelWidth: 56,
                                  src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                                },
                              },
                              "w21iAnTEM-hover": {
                                background: {
                                  alt: `Location`,
                                  fit: `fill`,
                                  loading: w(
                                    (s?.y || 0) +
                                      (0 +
                                        ((s?.height || 56) - 0 - ((s?.height || 56) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 56,
                                  pixelWidth: 56,
                                  src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                                },
                              },
                              "Wg46WydI4-hover": {
                                background: {
                                  alt: `Location`,
                                  fit: `fill`,
                                  loading: w(
                                    (s?.y || 0) +
                                      (0 +
                                        ((s?.height || 56) - 0 - ((s?.height || 56) - 0) * 1) / 2)
                                  ),
                                  pixelHeight: 56,
                                  pixelWidth: 56,
                                  src: `https://framerusercontent.com/images/0R1lFaQEgXmgo9GUtDVbhQZwtE.svg`,
                                },
                              },
                            },
                            E,
                            A
                          ),
                        }),
                      oe(S) &&
                        u(V, {
                          ...wt(
                            {
                              "DuFXHzEti-hover": {
                                height: 164,
                                width: `317px`,
                                y: (s?.y || 0) + ((s?.height || 56) * 3.2678571428571432 - 82),
                              },
                              "Efqo8BFWQ-hover": {
                                height: 164,
                                width: `317px`,
                                y: (s?.y || 0) + ((s?.height || 56) * 3.2678571428571432 - 82),
                              },
                              "gQ7dJPMSH-hover": {
                                height: 164,
                                width: `317px`,
                                y: (s?.y || 0) + ((s?.height || 56) * 3.2678571428571432 - 82),
                              },
                              "w21iAnTEM-hover": {
                                height: 164,
                                width: `317px`,
                                y: (s?.y || 0) + ((s?.height || 56) * 3.2678571428571432 - 82),
                              },
                              "Wg46WydI4-hover": {
                                height: 164,
                                width: `317px`,
                                y: (s?.y || 0) + ((s?.height || 56) * 3.2678571428571432 - 82),
                              },
                            },
                            E,
                            A
                          ),
                          children: u(y, {
                            className: `framer-r4m75q-container`,
                            layoutDependency: I,
                            layoutId: `mqt4osoUl-container`,
                            nodeId: `mqt4osoUl`,
                            rendersWithMotion: !0,
                            scopeId: `A6wfIqF90`,
                            transformTemplate: K,
                            children: u(G, {
                              height: `100%`,
                              id: `mqt4osoUl`,
                              layoutId: `mqt4osoUl`,
                              OxRPsN5Qm: _,
                              POnGm2Ylw: b,
                              style: { width: `100%` },
                              variant: `WzhC_oRg_`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      se() &&
                        f(v.div, {
                          className: `framer-ck4r5y`,
                          "data-framer-name": `Pulse Frame`,
                          layoutDependency: I,
                          layoutId: `ohopXEcU6`,
                          children: [
                            u(v.div, {
                              className: `framer-e69izp`,
                              "data-framer-name": `Outer circle`,
                              layoutDependency: I,
                              layoutId: `g3SyD5ulN`,
                              style: {
                                backgroundColor: `var(--token-326b6510-9a98-46ed-afba-a8ff0584c805, rgb(124, 174, 14))`,
                                borderBottomLeftRadius: 28,
                                borderBottomRightRadius: 28,
                                borderTopLeftRadius: 28,
                                borderTopRightRadius: 28,
                                opacity: 0.5,
                              },
                              transformTemplate: K,
                              variants: {
                                DuFXHzEti: { opacity: 0 },
                                Efqo8BFWQ: { opacity: 0 },
                                gQ7dJPMSH: { opacity: 1 },
                                w21iAnTEM: { opacity: 1 },
                                zIXZOhmPZ: { opacity: 0 },
                              },
                            }),
                            u(v.div, {
                              className: `framer-alabih`,
                              "data-framer-name": `Middle circle`,
                              layoutDependency: I,
                              layoutId: `CVtKw_1Pi`,
                              style: {
                                backgroundColor: `var(--token-326b6510-9a98-46ed-afba-a8ff0584c805, rgb(124, 174, 14))`,
                                borderBottomLeftRadius: 28,
                                borderBottomRightRadius: 28,
                                borderTopLeftRadius: 28,
                                borderTopRightRadius: 28,
                                opacity: 0.75,
                              },
                              transformTemplate: K,
                              variants: {
                                DuFXHzEti: { opacity: 0.5 },
                                Efqo8BFWQ: { opacity: 0 },
                                gQ7dJPMSH: { opacity: 1 },
                                w21iAnTEM: { opacity: 1 },
                                zIXZOhmPZ: { opacity: 0 },
                              },
                            }),
                            u(v.div, {
                              className: `framer-1dk9dax`,
                              "data-framer-name": `Inner circle`,
                              layoutDependency: I,
                              layoutId: `WAg8nByOi`,
                              style: {
                                backgroundColor: `var(--token-326b6510-9a98-46ed-afba-a8ff0584c805, rgb(124, 174, 14))`,
                                borderBottomLeftRadius: 28,
                                borderBottomRightRadius: 28,
                                borderTopLeftRadius: 28,
                                borderTopRightRadius: 28,
                              },
                              transformTemplate: K,
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
          `.framer-vy5o9.framer-1b3uoam, .framer-vy5o9 .framer-1b3uoam { display: block; }`,
          `.framer-vy5o9.framer-xslkeh { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 56px; }`,
          `.framer-vy5o9 .framer-8dgyqy { flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }`,
          `.framer-vy5o9 .framer-r4m75q-container { flex: none; height: auto; left: -89%; position: absolute; top: 327%; width: 317px; z-index: 5; }`,
          `.framer-vy5o9 .framer-ck4r5y { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); overflow: hidden; position: relative; width: 40px; z-index: 0; }`,
          `.framer-vy5o9 .framer-e69izp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 8px; z-index: 0; }`,
          `.framer-vy5o9 .framer-alabih { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 8px; z-index: 1; }`,
          `.framer-vy5o9 .framer-1dk9dax { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 8px); left: 50%; overflow: visible; position: absolute; top: 50%; width: 8px; z-index: 2; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-vy5o9.framer-xslkeh { gap: 0px; } .framer-vy5o9.framer-xslkeh > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-vy5o9.framer-xslkeh > :first-child { margin-left: 0px; } .framer-vy5o9.framer-xslkeh > :last-child { margin-right: 0px; } }`,
          `.framer-vy5o9.framer-v-1iskocq.framer-xslkeh, .framer-vy5o9.framer-v-cqcxje.framer-xslkeh, .framer-vy5o9.framer-v-nw083x.framer-xslkeh, .framer-vy5o9.framer-v-4dn80t.framer-xslkeh, .framer-vy5o9.framer-v-xslkeh.hover.framer-xslkeh { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 56px); }`,
          `.framer-vy5o9.framer-v-1iskocq .framer-e69izp, .framer-vy5o9.framer-v-1iskocq .framer-alabih, .framer-vy5o9.framer-v-cqcxje .framer-alabih, .framer-vy5o9.framer-v-nw083x .framer-alabih, .framer-vy5o9.framer-v-4dn80t .framer-alabih { height: var(--framer-aspect-ratio-supported, 24px); width: 24px; }`,
          `.framer-vy5o9.framer-v-cqcxje .framer-e69izp, .framer-vy5o9.framer-v-nw083x .framer-e69izp, .framer-vy5o9.framer-v-4dn80t .framer-e69izp { height: var(--framer-aspect-ratio-supported, 40px); width: 40px; }`,
          `.framer-vy5o9.framer-v-nw083x .framer-1dk9dax { z-index: 3; }`,
          `.framer-vy5o9.framer-v-1w0c58i.framer-xslkeh { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 40px); width: 36px; }`,
        ],
        `framer-vy5o9`
      )),
      (q.displayName = `Pulse`),
      (q.defaultProps = { height: 56, width: 56 }),
      E(q, {
        variant: {
          options: [`Wg46WydI4`, `w21iAnTEM`, `gQ7dJPMSH`, `DuFXHzEti`, `Efqo8BFWQ`, `zIXZOhmPZ`],
          optionTitles: [`Default`, `Step 2`, `Step 3`, `Step 4`, `Step 5`, `Small`],
          title: `Variant`,
          type: U.Enum,
        },
        j9xdcEK2l: {
          defaultValue: `17700 Avalon BLVD Carson California, USA`,
          displayTextArea: !1,
          title: `Location`,
          type: U.String,
        },
        jHgLt03lP: { title: `Link`, type: U.Link },
        vFSx_rKBW: { defaultValue: !0, title: `Card Visisbility`, type: U.Boolean },
      }),
      H(q, [{ explicitInter: !0, fonts: [] }, ...Tt], { supportsExplicitInterCodegen: !0 }));
  });
function Lt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Rt,
  zt,
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
  J,
  $t = e(() => {
    (d(),
      N(),
      _(),
      n(),
      oe(),
      (Rt = b(v.div)),
      (zt = { QtZ39DBuB: { hover: !0, pressed: !0 } }),
      (Bt = [`QtZ39DBuB`, `S8QOd7voj`, `xpfu1xKZo`, `QkpHiumw2`, `T_wCFiYEo`, `lDq6hksLo`]),
      (Vt = `framer-Ohima`),
      (Ht = {
        lDq6hksLo: `framer-v-hbmr1a`,
        QkpHiumw2: `framer-v-19c27oq`,
        QtZ39DBuB: `framer-v-4niyq6`,
        S8QOd7voj: `framer-v-2nst3b`,
        T_wCFiYEo: `framer-v-132qxfm`,
        xpfu1xKZo: `framer-v-1b2lh44`,
      }),
      (Ut = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Wt = { damping: 57, delay: 0, mass: 1.2, stiffness: 274, type: `spring` }),
      (Gt = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (Kt = {
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
      (qt = (e, t) => `translateX(-50%) ${t}`),
      (Jt = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (Yt = v.create(a)),
      (Xt = {
        Default: `QtZ39DBuB`,
        Disabled: `xpfu1xKZo`,
        Error: `T_wCFiYEo`,
        Loading: `S8QOd7voj`,
        Small: `lDq6hksLo`,
        Success: `QkpHiumw2`,
      }),
      (Zt = ({ height: e, id: t, padding: n, width: r, ...i }) => ({
        ...i,
        esMFASHlH: n ?? i.esMFASHlH ?? `12px 32px 12px 32px`,
        variant: Xt[i.variant] ?? i.variant ?? `QtZ39DBuB`,
      })),
      (Qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = k(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = W();
          B();
          let { style: c, className: d, layoutId: p, variant: h, esMFASHlH: _, ...y } = Zt(e),
            {
              baseVariant: b,
              classNames: S,
              clearLoadingGesture: w,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = x({
              cycleOrder: Bt,
              defaultVariant: `QtZ39DBuB`,
              enabledGestures: zt,
              ref: r,
              variant: h,
              variantClassNames: Ht,
            }),
            M = Qt(e, j),
            N = C(Vt, le),
            P = () => b === `S8QOd7voj`,
            F = () => b !== `S8QOd7voj`;
          return u(g, {
            id: p ?? i,
            children: u(Yt, {
              animate: j,
              initial: !1,
              children: u(Jt, {
                value: Wt,
                children: f(v.button, {
                  ...y,
                  ...T,
                  className: C(N, `framer-4niyq6`, d, S),
                  "data-framer-name": `Default`,
                  "data-reset": `button`,
                  layoutDependency: M,
                  layoutId: `QtZ39DBuB`,
                  ref: r,
                  style: {
                    "--1vh6as8": Ut(_),
                    backgroundColor: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    opacity: 1,
                    ...c,
                  },
                  variants: {
                    "QtZ39DBuB-hover": {
                      backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      opacity: 1,
                    },
                    "QtZ39DBuB-pressed": { opacity: 1 },
                    lDq6hksLo: { opacity: 1 },
                    QkpHiumw2: { opacity: 1 },
                    T_wCFiYEo: { backgroundColor: `rgba(255, 34, 68, 0.15)`, opacity: 1 },
                    xpfu1xKZo: { opacity: 0.5 },
                  },
                  ...Lt(
                    {
                      "QtZ39DBuB-hover": { "data-framer-name": void 0 },
                      "QtZ39DBuB-pressed": { "data-framer-name": void 0 },
                      lDq6hksLo: { "data-framer-name": `Small` },
                      QkpHiumw2: { "data-framer-name": `Success` },
                      S8QOd7voj: { "data-framer-name": `Loading` },
                      T_wCFiYEo: { "data-framer-name": `Error` },
                      xpfu1xKZo: { "data-framer-name": `Disabled` },
                    },
                    b,
                    E
                  ),
                  children: [
                    P() &&
                      u(v.div, {
                        className: `framer-cnfmas`,
                        "data-framer-name": `Spinner`,
                        layoutDependency: M,
                        layoutId: `KR8TrJYLA`,
                        style: {
                          mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                        },
                        children: u(Rt, {
                          __framer__loop: Kt,
                          __framer__loopEffectEnabled: !0,
                          __framer__loopRepeatDelay: 0,
                          __framer__loopRepeatType: `loop`,
                          __framer__loopTransition: Gt,
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          className: `framer-vnbf5n`,
                          "data-framer-name": `Conic`,
                          layoutDependency: M,
                          layoutId: `gJU3rIYSG`,
                          style: {
                            background: `conic-gradient(from 180deg at 50% 50%, rgb(68, 204, 255) 0deg, rgb(68, 204, 255) 360deg)`,
                            backgroundColor: `rgb(68, 204, 255)`,
                            mask: `none`,
                            WebkitMask: `none`,
                          },
                          variants: {
                            S8QOd7voj: {
                              background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
                              backgroundColor: `rgba(0, 0, 0, 0)`,
                              mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                              WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            },
                          },
                          children: u(v.div, {
                            className: `framer-1ca13ww`,
                            "data-framer-name": `Rounding`,
                            layoutDependency: M,
                            layoutId: `PtCnqKxxq`,
                            style: {
                              backgroundColor: `rgb(255, 255, 255)`,
                              borderBottomLeftRadius: 1,
                              borderBottomRightRadius: 1,
                              borderTopLeftRadius: 1,
                              borderTopRightRadius: 1,
                            },
                            transformTemplate: qt,
                          }),
                        }),
                      }),
                    F() &&
                      u(O, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(v.p, {
                            className: `framer-styles-preset-1kyzkuu`,
                            "data-styles-preset": `KKnW9Hd3v`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                            },
                            children: `Send Message`,
                          }),
                        }),
                        className: `framer-12aig04`,
                        "data-framer-name": `Text`,
                        fonts: [`Inter`],
                        layoutDependency: M,
                        layoutId: `MRKe4HXUI`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        variants: {
                          "QtZ39DBuB-hover": {
                            "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                          },
                          T_wCFiYEo: {
                            "--extracted-r6o4lv": `var(--token-49f879dd-3e8d-4c80-9cf2-156ffc23b2c0, rgb(255, 34, 68))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Lt(
                          {
                            "QtZ39DBuB-hover": {
                              children: u(a, {
                                children: u(v.p, {
                                  className: `framer-styles-preset-1kyzkuu`,
                                  "data-styles-preset": `KKnW9Hd3v`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                  },
                                  children: `Send Message`,
                                }),
                              }),
                            },
                            QkpHiumw2: {
                              children: u(a, {
                                children: u(v.p, {
                                  className: `framer-styles-preset-1kyzkuu`,
                                  "data-styles-preset": `KKnW9Hd3v`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Thank You`,
                                }),
                              }),
                            },
                            T_wCFiYEo: {
                              children: u(a, {
                                children: u(v.p, {
                                  className: `framer-styles-preset-1kyzkuu`,
                                  "data-styles-preset": `KKnW9Hd3v`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-49f879dd-3e8d-4c80-9cf2-156ffc23b2c0, rgb(255, 34, 68)))`,
                                  },
                                  children: `Something went wrong`,
                                }),
                              }),
                            },
                          },
                          b,
                          E
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
          `.framer-Ohima.framer-1u5uxga, .framer-Ohima .framer-1u5uxga { display: block; }`,
          `.framer-Ohima.framer-4niyq6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: var(--1vh6as8); position: relative; width: min-content; }`,
          `.framer-Ohima .framer-cnfmas { flex: none; height: 24px; overflow: hidden; position: relative; width: 24px; }`,
          `.framer-Ohima .framer-vnbf5n { bottom: -2px; flex: none; left: 0px; overflow: visible; position: absolute; right: -2px; top: 0px; }`,
          `.framer-Ohima .framer-1ca13ww { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `.framer-Ohima .framer-12aig04 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Ohima.framer-4niyq6 { gap: 0px; } .framer-Ohima.framer-4niyq6 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-Ohima.framer-4niyq6 > :first-child { margin-top: 0px; } .framer-Ohima.framer-4niyq6 > :last-child { margin-bottom: 0px; } }`,
          `.framer-Ohima.framer-v-2nst3b .framer-vnbf5n { overflow: hidden; }`,
          ...se,
        ],
        `framer-Ohima`
      )),
      (J.displayName = `Submit`),
      (J.defaultProps = { height: 48, width: 182 }),
      E(J, {
        variant: {
          options: [`QtZ39DBuB`, `S8QOd7voj`, `xpfu1xKZo`, `QkpHiumw2`, `T_wCFiYEo`, `lDq6hksLo`],
          optionTitles: [`Default`, `Loading`, `Disabled`, `Success`, `Error`, `Small`],
          title: `Variant`,
          type: U.Enum,
        },
        esMFASHlH: { defaultValue: `12px 32px 12px 32px`, title: `Padding`, type: U.Padding },
      }),
      H(
        J,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var en,
  tn,
  nn,
  rn,
  an,
  X,
  on,
  sn,
  cn,
  ln,
  un,
  Z,
  dn = e(() => {
    (d(),
      N(),
      _(),
      n(),
      Pe(),
      oe(),
      (en = { Eef0yK0DV: { hover: !0 }, UwSgGF3x7: { hover: !0 } }),
      (tn = [`UwSgGF3x7`, `pvq5tdXmm`, `Eef0yK0DV`, `A5T0fr65U`]),
      (nn = `framer-5jddJ`),
      (rn = {
        A5T0fr65U: `framer-v-g4459a`,
        Eef0yK0DV: `framer-v-1xzjzn6`,
        pvq5tdXmm: `framer-v-1kw4un3`,
        UwSgGF3x7: `framer-v-twwo8d`,
      }),
      (an = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (on = ({ value: e, children: t }) => {
        let n = o(h),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(h.Provider, { value: i, children: t });
      }),
      (sn = v.create(a)),
      (cn = {
        "Secondary - Small": `A5T0fr65U`,
        Primary: `UwSgGF3x7`,
        Secondary: `Eef0yK0DV`,
        Small: `pvq5tdXmm`,
      }),
      (ln = ({ height: e, icon: t, id: n, link: r, text: i, title: a, width: o, ...s }) => ({
        ...s,
        dr8KDAXSw: t ??
          s.dr8KDAXSw ?? { alt: `Mail`, src: `../../assets/images/HilMM4ernKjl1Or661JuNoBreM.svg` },
        gHpNkTbCf: i ?? s.gHpNkTbCf ?? `hello@Framertemp.com`,
        lOGkGwZnv: r ?? s.lOGkGwZnv,
        Ptx3BvwUn: a ?? s.Ptx3BvwUn ?? `Email`,
        variant: cn[s.variant] ?? s.variant ?? `UwSgGF3x7`,
      })),
      (un = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = k(
        p(function (e, t) {
          let n = l(null),
            r = t ?? n,
            i = m(),
            { activeLocale: o, setLocale: s } = W(),
            c = B(),
            {
              style: d,
              className: p,
              layoutId: h,
              variant: _,
              Ptx3BvwUn: y,
              gHpNkTbCf: b,
              dr8KDAXSw: S,
              lOGkGwZnv: T,
              ...E
            } = ln(e),
            {
              baseVariant: D,
              classNames: k,
              clearLoadingGesture: A,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: N,
              setGestureState: F,
              setVariant: I,
              variants: L,
            } = x({
              cycleOrder: tn,
              defaultVariant: `UwSgGF3x7`,
              enabledGestures: en,
              ref: r,
              variant: _,
              variantClassNames: rn,
            }),
            R = un(e, L),
            z = C(nn, Le, le);
          return u(g, {
            id: h ?? i,
            children: u(sn, {
              animate: L,
              initial: !1,
              children: u(on, {
                value: an,
                children: u(P, {
                  href: T,
                  motionChild: !0,
                  nodeId: `UwSgGF3x7`,
                  scopeId: `k5HH3x1Y3`,
                  children: f(v.a, {
                    ...E,
                    ...j,
                    className: `${C(z, `framer-twwo8d`, p, k)} framer-bcqsrv`,
                    "data-framer-name": `Primary`,
                    layoutDependency: R,
                    layoutId: `UwSgGF3x7`,
                    ref: r,
                    style: { ...d },
                    ...Y(
                      {
                        "Eef0yK0DV-hover": { "data-framer-name": void 0 },
                        "UwSgGF3x7-hover": { "data-framer-name": void 0 },
                        A5T0fr65U: { "data-framer-name": `Secondary - Small` },
                        Eef0yK0DV: { "data-framer-name": `Secondary` },
                        pvq5tdXmm: { "data-framer-name": `Small` },
                      },
                      D,
                      M
                    ),
                    children: [
                      f(v.div, {
                        className: `framer-1sj9lr9`,
                        "data-framer-name": `Card Body`,
                        layoutDependency: R,
                        layoutId: `Vjnndir11`,
                        children: [
                          u(ne, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: w(
                                (c?.y || 0) + 0 + (((c?.height || 64) - 0 - 160) / 2 + 0 + 0) + 4
                              ),
                              pixelHeight: 24,
                              pixelWidth: 24,
                              sizes: `24px`,
                              ...X(S),
                            },
                            className: `framer-1fuyx4l`,
                            "data-framer-name": `Icon`,
                            layoutDependency: R,
                            layoutId: `SL0O6T_RN`,
                            ...Y(
                              {
                                A5T0fr65U: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: w((c?.y || 0) + 0 + 0 + 4),
                                    pixelHeight: 24,
                                    pixelWidth: 24,
                                    sizes: `24px`,
                                    ...X(S),
                                  },
                                },
                                Eef0yK0DV: {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    loading: w(
                                      (c?.y || 0) +
                                        0 +
                                        (((c?.height || 64) - 0 - 64) / 2 + 0 + 0) +
                                        4
                                    ),
                                    pixelHeight: 24,
                                    pixelWidth: 24,
                                    sizes: `24px`,
                                    ...X(S),
                                  },
                                },
                              },
                              D,
                              M
                            ),
                          }),
                          u(O, {
                            __fromCanvasComponent: !0,
                            children: u(a, {
                              children: u(v.h6, {
                                className: `framer-styles-preset-1s533c1`,
                                "data-styles-preset": `IwoeRBoDn`,
                                style: {
                                  "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                                },
                                children: `Email`,
                              }),
                            }),
                            className: `framer-fak3i8`,
                            fonts: [`Inter`],
                            layoutDependency: R,
                            layoutId: `oxqxKe4bg`,
                            style: {
                              "--extracted-1w1cjl5": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: y,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      u(v.div, {
                        className: `framer-1uavd5g`,
                        "data-framer-name": `Text Wrap`,
                        layoutDependency: R,
                        layoutId: `uydqtT3Gk`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `rgba(0, 0, 0, 0)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        variants: {
                          "Eef0yK0DV-hover": {
                            "--border-color": `var(--token-ff93da5b-f3da-40f2-a62c-a7e9481d476b, rgb(164, 83, 245))`,
                          },
                          "UwSgGF3x7-hover": {
                            "--border-bottom-width": `0px`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-top-width": `0px`,
                          },
                          A5T0fr65U: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-fe85db5c-2648-48cc-9916-449eabb978cf, rgb(16, 4, 28))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                          Eef0yK0DV: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-fe85db5c-2648-48cc-9916-449eabb978cf, rgb(16, 4, 28))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                        },
                        ...Y(
                          { A5T0fr65U: { "data-border": !0 }, Eef0yK0DV: { "data-border": !0 } },
                          D,
                          M
                        ),
                        children: u(O, {
                          __fromCanvasComponent: !0,
                          children: u(a, {
                            children: u(v.p, {
                              className: `framer-styles-preset-1kyzkuu`,
                              "data-styles-preset": `KKnW9Hd3v`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `hello@Framertemp.com`,
                            }),
                          }),
                          className: `framer-1txp62c`,
                          "data-framer-name": `Text`,
                          fonts: [`Inter`],
                          layoutDependency: R,
                          layoutId: `Jh2n_05xw`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: b,
                          variants: {
                            "Eef0yK0DV-hover": {
                              "--extracted-r6o4lv": `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                            },
                            "UwSgGF3x7-hover": {
                              "--extracted-r6o4lv": `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...Y(
                            {
                              "Eef0yK0DV-hover": {
                                children: u(a, {
                                  children: u(v.p, {
                                    className: `framer-styles-preset-1kyzkuu`,
                                    "data-styles-preset": `KKnW9Hd3v`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251)))`,
                                    },
                                    children: `hello@Framertemp.com`,
                                  }),
                                }),
                              },
                              "UwSgGF3x7-hover": {
                                children: u(a, {
                                  children: u(v.p, {
                                    className: `framer-styles-preset-1kyzkuu`,
                                    "data-styles-preset": `KKnW9Hd3v`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251)))`,
                                    },
                                    children: `hello@Framertemp.com`,
                                  }),
                                }),
                              },
                            },
                            D,
                            M
                          ),
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
          `.framer-5jddJ.framer-bcqsrv, .framer-5jddJ .framer-bcqsrv { display: block; }`,
          `.framer-5jddJ.framer-twwo8d { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 234px; }`,
          `.framer-5jddJ .framer-1sj9lr9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5jddJ .framer-1fuyx4l { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 24px); overflow: hidden; position: relative; width: 24px; }`,
          `.framer-5jddJ .framer-fak3i8 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-5jddJ .framer-1uavd5g { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-5jddJ .framer-1txp62c { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5jddJ.framer-twwo8d, .framer-5jddJ .framer-1sj9lr9, .framer-5jddJ .framer-1uavd5g { gap: 0px; } .framer-5jddJ.framer-twwo8d > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } .framer-5jddJ.framer-twwo8d > :first-child, .framer-5jddJ .framer-1uavd5g > :first-child { margin-top: 0px; } .framer-5jddJ.framer-twwo8d > :last-child, .framer-5jddJ .framer-1uavd5g > :last-child { margin-bottom: 0px; } .framer-5jddJ .framer-1sj9lr9 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5jddJ .framer-1sj9lr9 > :first-child { margin-left: 0px; } .framer-5jddJ .framer-1sj9lr9 > :last-child { margin-right: 0px; } .framer-5jddJ .framer-1uavd5g > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } }`,
          `.framer-5jddJ.framer-v-1xzjzn6 .framer-1uavd5g, .framer-5jddJ.framer-v-g4459a .framer-1uavd5g { flex-direction: row; gap: 10px; width: min-content; }`,
          `.framer-5jddJ.framer-v-1xzjzn6 .framer-1txp62c, .framer-5jddJ.framer-v-g4459a .framer-1txp62c { white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5jddJ.framer-v-1xzjzn6 .framer-1uavd5g { gap: 0px; } .framer-5jddJ.framer-v-1xzjzn6 .framer-1uavd5g > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5jddJ.framer-v-1xzjzn6 .framer-1uavd5g > :first-child { margin-left: 0px; } .framer-5jddJ.framer-v-1xzjzn6 .framer-1uavd5g > :last-child { margin-right: 0px; } }`,
          `.framer-5jddJ.framer-v-g4459a.framer-twwo8d { justify-content: flex-start; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-5jddJ.framer-v-g4459a .framer-1uavd5g { gap: 0px; } .framer-5jddJ.framer-v-g4459a .framer-1uavd5g > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-5jddJ.framer-v-g4459a .framer-1uavd5g > :first-child { margin-left: 0px; } .framer-5jddJ.framer-v-g4459a .framer-1uavd5g > :last-child { margin-right: 0px; } }`,
          ...Fe,
          ...se,
          `.framer-5jddJ[data-border="true"]::after, .framer-5jddJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-5jddJ`
      )),
      (Z.displayName = `Contact Widget`),
      (Z.defaultProps = { height: 64, width: 234 }),
      E(Z, {
        variant: {
          options: [`UwSgGF3x7`, `pvq5tdXmm`, `Eef0yK0DV`, `A5T0fr65U`],
          optionTitles: [`Primary`, `Small`, `Secondary`, `Secondary - Small`],
          title: `Variant`,
          type: U.Enum,
        },
        Ptx3BvwUn: { defaultValue: `Email`, displayTextArea: !1, title: `Title`, type: U.String },
        gHpNkTbCf: {
          defaultValue: `hello@Framertemp.com`,
          displayTextArea: !1,
          title: `Text`,
          type: U.String,
        },
        dr8KDAXSw: {
          __defaultAssetReference: `data:framer/asset-reference,HilMM4ernKjl1Or661JuNoBreM.svg?originalFilename=mail-01+%281%29.svg&preferredSize=auto`,
          __vekterDefault: {
            alt: `Mail`,
            assetReference: `data:framer/asset-reference,HilMM4ernKjl1Or661JuNoBreM.svg?originalFilename=mail-01+%281%29.svg&preferredSize=auto`,
          },
          title: `Icon`,
          type: U.ResponsiveImage,
        },
        lOGkGwZnv: { title: `Link`, type: U.Link },
      }),
      H(
        Z,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
                weight: `400`,
              },
              {
                family: `Inter`,
                source: `framer`,
                style: `normal`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
                weight: `400`,
              },
            ],
          },
          ...M(Ie),
          ...M(ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  Q,
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
  $,
  zn;
e(() => {
  (d(),
    N(),
    _(),
    n(),
    ct(),
    It(),
    $t(),
    dn(),
    Re(),
    Ee(),
    ue(),
    me(),
    Ae(),
    Ve(),
    (fn = j(ze)),
    (pn = D(I)),
    (mn = D(v.div)),
    (hn = j(Z)),
    (gn = b(v.div)),
    (_n = j(J)),
    (vn = b(re)),
    (yn = j(q)),
    (bn = j(st)),
    (xn = {
      lKfMN1aRJ: `(min-width: 1200px)`,
      ooQV82U0Q: `(max-width: 809px)`,
      X2NB9D3PK: `(min-width: 810px) and (max-width: 1199px)`,
    }),
    (Sn = `framer-tpaQc`),
    (Cn = {
      lKfMN1aRJ: `framer-v-dgr4ax`,
      ooQV82U0Q: `framer-v-9hsbva`,
      X2NB9D3PK: `framer-v-zmlcbc`,
    }),
    (Q = { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (wn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Q,
      x: 0,
      y: 0,
    }),
    (Tn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 40,
    }),
    (En = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Dn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -40,
      y: 0,
    }),
    (On = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Q,
      x: -40,
      y: 0,
    }),
    (kn = (e, t) => {
      if (!(!e || typeof e != `object`)) return { ...e, alt: t };
    }),
    (An = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 40,
      y: 0,
    }),
    (jn = { delay: 0.1, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (Mn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: jn,
      x: 40,
      y: 0,
    }),
    (Nn = (e, t, n) => {
      switch (e.state) {
        case `success`:
          return t.success ?? n;
        case `pending`:
          return t.pending ?? n;
        case `error`:
          return t.error ?? n;
        case `incomplete`:
          return t.incomplete ?? n;
      }
    }),
    (Pn = {
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
    (Fn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Q,
      x: 0,
      y: 60,
    }),
    (In = ({ value: e }) =>
      F()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ln = { Desktop: `lKfMN1aRJ`, Phone: `ooQV82U0Q`, Tablet: `X2NB9D3PK` }),
    (Rn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ln[r.variant] ?? r.variant ?? `lKfMN1aRJ`,
    })),
    ($ = k(
      p(function (e, t) {
        let n = l(null),
          o = t ?? n,
          s = m(),
          { activeLocale: d, setLocale: p } = W(),
          h = B(),
          { style: _, className: y, layoutId: b, variant: x, ...w } = Rn(e);
        (i(() => {
          let e = Be(void 0, d);
          if (e.robots) {
            let t = document.querySelector(`meta[name="robots"]`);
            t
              ? t.setAttribute(`content`, e.robots)
              : ((t = document.createElement(`meta`)),
                t.setAttribute(`name`, `robots`),
                t.setAttribute(`content`, e.robots),
                document.head.appendChild(t));
          }
        }, [void 0, d]),
          r(() => {
            let e = Be(void 0, d);
            ((document.title = e.title || ``),
              e.viewport &&
                document
                  .querySelector(`meta[name="viewport"]`)
                  ?.setAttribute(`content`, e.viewport));
          }, [void 0, d]));
        let [T, E] = ee(x, xn, !1),
          D = C(Sn, Ne, pe, ke, _e),
          k = ie(`xKzrRVfI1`),
          j = S();
        return (
          te({}),
          u(z.Provider, {
            value: { primaryVariantId: `lKfMN1aRJ`, variantClassNames: Cn },
            children: f(g, {
              id: b ?? s,
              children: [
                u(In, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                f(v.div, {
                  ...w,
                  className: C(D, `framer-dgr4ax`, y),
                  ref: o,
                  style: { ..._ },
                  children: [
                    f(`section`, {
                      className: `framer-mumece`,
                      "data-framer-name": `Banner Section`,
                      children: [
                        f(`div`, {
                          className: `framer-1a2ihjv`,
                          "data-framer-name": `Container`,
                          id: k,
                          ref: j(k),
                          children: [
                            u(V, {
                              height: 45,
                              children: u(pn, {
                                animate: wn,
                                className: `framer-1otmv6e-container`,
                                "data-framer-appear-id": `1otmv6e`,
                                initial: Tn,
                                nodeId: `yiap0XHEj`,
                                optimized: !0,
                                rendersWithMotion: !0,
                                scopeId: `rEDzZ3luj`,
                                children: u(A, {
                                  breakpoint: T,
                                  overrides: {
                                    ooQV82U0Q: { variant: `i__dyDbM_` },
                                    X2NB9D3PK: { variant: `i__dyDbM_` },
                                  },
                                  children: u(ze, {
                                    height: `100%`,
                                    id: `yiap0XHEj`,
                                    layoutId: `yiap0XHEj`,
                                    UuBCV5mKS: `Contact us`,
                                    variant: `Glr7jJa1g`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                            f(mn, {
                              animate: En,
                              className: `framer-1bchdir`,
                              "data-framer-appear-id": `1bchdir`,
                              "data-framer-name": `Title Block`,
                              initial: Tn,
                              optimized: !0,
                              children: [
                                u(A, {
                                  breakpoint: T,
                                  overrides: {
                                    ooQV82U0Q: {
                                      children: u(a, {
                                        children: u(`h2`, {
                                          className: `framer-styles-preset-1mdyd08`,
                                          "data-styles-preset": `uYUgOfNpa`,
                                          style: { "--framer-text-alignment": `left` },
                                          children: `We’re Here to Help You`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: u(O, {
                                    __fromCanvasComponent: !0,
                                    children: u(a, {
                                      children: u(`h2`, {
                                        className: `framer-styles-preset-1mdyd08`,
                                        "data-styles-preset": `uYUgOfNpa`,
                                        children: `We’re Here to Help You`,
                                      }),
                                    }),
                                    className: `framer-th2b19`,
                                    "data-framer-name": `Title`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                u(A, {
                                  breakpoint: T,
                                  overrides: {
                                    ooQV82U0Q: {
                                      children: u(a, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          style: {
                                            "--framer-text-alignment": `left`,
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Have a question or need assistance with our templates and components? Reach out to our dedicated support team.`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: u(O, {
                                    __fromCanvasComponent: !0,
                                    children: u(a, {
                                      children: u(`p`, {
                                        className: `framer-styles-preset-1n6rbyf`,
                                        "data-styles-preset": `ojujRXx3G`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                        },
                                        children: `Have a question or need assistance with our templates and components? Reach out to our dedicated support team.`,
                                      }),
                                    }),
                                    className: `framer-1xbbyh`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        u(ne, {
                          background: {
                            alt: `Background`,
                            fit: `fill`,
                            pixelHeight: 598,
                            pixelWidth: 1440,
                            sizes: h?.width || `100vw`,
                            src: `../../assets/images/9uvqOwNucn4h6f6nWDDrZEmezU.png`,
                            srcSet: `../../assets/images/9uvqOwNucn4h6f6nWDDrZEmezU-ef37b7.png 512w,../../assets/images/9uvqOwNucn4h6f6nWDDrZEmezU-33e010.png 1024w,../../assets/images/9uvqOwNucn4h6f6nWDDrZEmezU.png 1440w`,
                          },
                          className: `framer-1ktwxmj`,
                          "data-framer-name": `Background Image`,
                        }),
                        u(`div`, {
                          className: `framer-1sdmavh`,
                          "data-framer-name": `Left Bottom Blur`,
                        }),
                        u(`div`, {
                          className: `framer-167gk4t`,
                          "data-border": !0,
                          "data-framer-name": `Right Bottom Blur`,
                        }),
                      ],
                    }),
                    u(`div`, {
                      className: `framer-1knc5fs`,
                      "data-framer-name": `Contact Section`,
                      children: f(`div`, {
                        className: `framer-7w4i4s`,
                        "data-framer-name": `Container`,
                        children: [
                          u(A, {
                            breakpoint: T,
                            overrides: {
                              ooQV82U0Q: { __framer__styleAppearEffectEnabled: void 0 },
                              X2NB9D3PK: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: f(gn, {
                              __framer__animate: { transition: Q },
                              __framer__animateOnce: !0,
                              __framer__enter: Dn,
                              __framer__exit: On,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-dhizja`,
                              "data-framer-name": `Contact Widget Block`,
                              children: [
                                f(`div`, {
                                  className: `framer-1wireos`,
                                  "data-framer-name": `Title Block`,
                                  children: [
                                    u(O, {
                                      __fromCanvasComponent: !0,
                                      children: u(a, {
                                        children: u(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Get in Touch`,
                                        }),
                                      }),
                                      className: `framer-e1fqq0`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    u(O, {
                                      __fromCanvasComponent: !0,
                                      children: u(a, {
                                        children: u(`p`, {
                                          className: `framer-styles-preset-1n6rbyf`,
                                          "data-styles-preset": `ojujRXx3G`,
                                          style: {
                                            "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                          },
                                          children: `Feel free to reach out - we'd love to connect.`,
                                        }),
                                      }),
                                      className: `framer-qyq7j4`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                f(`div`, {
                                  className: `framer-17v5vnl`,
                                  "data-framer-name": `Contact Widget Grid`,
                                  children: [
                                    u(A, {
                                      breakpoint: T,
                                      overrides: {
                                        ooQV82U0Q: {
                                          width: `max(min(${h?.width || `100vw`}, 620px) - 40px, 10px)`,
                                        },
                                        X2NB9D3PK: {
                                          width: `min(max(min((min(${h?.width || `100vw`}, 990px) - 40px) * 0.43, 500px), 10px), 234px)`,
                                        },
                                      },
                                      children: u(V, {
                                        height: 64,
                                        width: `min(max((min((min(${h?.width || `100vw`}, 1320px) - 40px) * 0.4563, 584px) - 80px) / 2, 10px), 234px)`,
                                        children: u(I, {
                                          className: `framer-hhtups-container`,
                                          nodeId: `iwf3qNup8`,
                                          scopeId: `rEDzZ3luj`,
                                          children: u(A, {
                                            breakpoint: T,
                                            overrides: {
                                              ooQV82U0Q: {
                                                style: { width: `100%` },
                                                variant: `pvq5tdXmm`,
                                              },
                                              X2NB9D3PK: { variant: `pvq5tdXmm` },
                                            },
                                            children: u(Z, {
                                              gHpNkTbCf: `hello@pentaclay.com`,
                                              height: `100%`,
                                              id: `iwf3qNup8`,
                                              layoutId: `iwf3qNup8`,
                                              lOGkGwZnv: `mailto:hello@pentaclay.com`,
                                              Ptx3BvwUn: `Email`,
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: `UwSgGF3x7`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(A, {
                                      breakpoint: T,
                                      overrides: {
                                        ooQV82U0Q: {
                                          width: `max(min(${h?.width || `100vw`}, 620px) - 40px, 10px)`,
                                        },
                                        X2NB9D3PK: {
                                          width: `min(max(min((min(${h?.width || `100vw`}, 990px) - 40px) * 0.43, 500px), 10px), 234px)`,
                                        },
                                      },
                                      children: u(V, {
                                        height: 64,
                                        width: `min(max((min((min(${h?.width || `100vw`}, 1320px) - 40px) * 0.4563, 584px) - 80px) / 2, 10px), 234px)`,
                                        children: u(I, {
                                          className: `framer-1k29vrh-container`,
                                          nodeId: `Nf9iwJH5R`,
                                          scopeId: `rEDzZ3luj`,
                                          children: u(A, {
                                            breakpoint: T,
                                            overrides: {
                                              ooQV82U0Q: {
                                                style: { width: `100%` },
                                                variant: `A5T0fr65U`,
                                              },
                                              X2NB9D3PK: { variant: `A5T0fr65U` },
                                            },
                                            children: u(Z, {
                                              gHpNkTbCf: `Let’s Chat with us`,
                                              height: `100%`,
                                              id: `Nf9iwJH5R`,
                                              layoutId: `Nf9iwJH5R`,
                                              lOGkGwZnv: `whatsapp.com`,
                                              Ptx3BvwUn: `Get support`,
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: `Eef0yK0DV`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(A, {
                                      breakpoint: T,
                                      overrides: {
                                        ooQV82U0Q: {
                                          width: `max(min(${h?.width || `100vw`}, 620px) - 40px, 10px)`,
                                        },
                                        X2NB9D3PK: {
                                          width: `min(max(min((min(${h?.width || `100vw`}, 990px) - 40px) * 0.43, 500px), 10px), 234px)`,
                                        },
                                      },
                                      children: u(V, {
                                        height: 64,
                                        width: `min(max((min((min(${h?.width || `100vw`}, 1320px) - 40px) * 0.4563, 584px) - 80px) / 2, 10px), 234px)`,
                                        children: u(I, {
                                          className: `framer-ooogzy-container`,
                                          nodeId: `OCgNGnXgZ`,
                                          scopeId: `rEDzZ3luj`,
                                          children: u(A, {
                                            breakpoint: T,
                                            overrides: {
                                              ooQV82U0Q: {
                                                style: { width: `100%` },
                                                variant: `pvq5tdXmm`,
                                              },
                                              X2NB9D3PK: { variant: `pvq5tdXmm` },
                                            },
                                            children: u(Z, {
                                              dr8KDAXSw: kn(
                                                {
                                                  src: `../../assets/images/WkFVsqsKx5nTQ9ZzD0gdDwEN9M.svg`,
                                                },
                                                `Location`
                                              ),
                                              gHpNkTbCf: `18 Metro DG, California, USA`,
                                              height: `100%`,
                                              id: `OCgNGnXgZ`,
                                              layoutId: `OCgNGnXgZ`,
                                              lOGkGwZnv: `https://www.google.com/maps/search/18+Metro+DG,+California,+USA/@37.1514633,-124.5947982,6z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDEyNy4wIKXMDSoASAFQAw%3D%3D`,
                                              Ptx3BvwUn: `Visit my office `,
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: `UwSgGF3x7`,
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                    u(A, {
                                      breakpoint: T,
                                      overrides: {
                                        ooQV82U0Q: {
                                          width: `max(min(${h?.width || `100vw`}, 620px) - 40px, 10px)`,
                                        },
                                        X2NB9D3PK: {
                                          width: `min(max(min((min(${h?.width || `100vw`}, 990px) - 40px) * 0.43, 500px), 10px), 234px)`,
                                        },
                                      },
                                      children: u(V, {
                                        height: 64,
                                        width: `min(max((min((min(${h?.width || `100vw`}, 1320px) - 40px) * 0.4563, 584px) - 80px) / 2, 10px), 234px)`,
                                        children: u(I, {
                                          className: `framer-1jp5dos-container`,
                                          nodeId: `NkC9Eke6b`,
                                          scopeId: `rEDzZ3luj`,
                                          children: u(A, {
                                            breakpoint: T,
                                            overrides: {
                                              ooQV82U0Q: {
                                                style: { width: `100%` },
                                                variant: `A5T0fr65U`,
                                              },
                                              X2NB9D3PK: { variant: `A5T0fr65U` },
                                            },
                                            children: u(Z, {
                                              gHpNkTbCf: `Schedule here any where `,
                                              height: `100%`,
                                              id: `NkC9Eke6b`,
                                              layoutId: `NkC9Eke6b`,
                                              lOGkGwZnv: `http://meet.google.com/`,
                                              Ptx3BvwUn: `Schedule a meeting`,
                                              style: { maxWidth: `100%`, width: `100%` },
                                              variant: `Eef0yK0DV`,
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
                          }),
                          u(A, {
                            breakpoint: T,
                            overrides: {
                              ooQV82U0Q: { __framer__styleAppearEffectEnabled: void 0 },
                              X2NB9D3PK: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: u(vn, {
                              __framer__animate: { transition: jn },
                              __framer__animateOnce: !0,
                              __framer__enter: An,
                              __framer__exit: Mn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              action: `https://api.framer.com/forms/v1/forms/ef7c62aa-36df-42da-b0fa-8318705cc852/submit`,
                              className: `framer-it6h9n`,
                              "data-border": !0,
                              nodeId: `fOpa4wT_8`,
                              children: (e) =>
                                f(c, {
                                  children: [
                                    f(`div`, {
                                      className: `framer-119rvdy`,
                                      "data-framer-name": `Form Input Block`,
                                      children: [
                                        f(`div`, {
                                          className: `framer-1ctxaax`,
                                          "data-framer-name": `Input Group`,
                                          children: [
                                            f(`label`, {
                                              className: `framer-1ode1nx`,
                                              "data-framer-name": `Input Block`,
                                              children: [
                                                u(O, {
                                                  __fromCanvasComponent: !0,
                                                  children: u(a, {
                                                    children: u(`p`, {
                                                      className: `framer-styles-preset-158a7l3`,
                                                      "data-styles-preset": `qgNkKXaGR`,
                                                      children: `Full Name`,
                                                    }),
                                                  }),
                                                  className: `framer-getr92`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                u(L, {
                                                  className: `framer-1lmygr9`,
                                                  "data-framer-name": `Input`,
                                                  inputName: `Name`,
                                                  placeholder: `Enter your Name`,
                                                  required: !0,
                                                  type: `text`,
                                                }),
                                              ],
                                            }),
                                            f(`label`, {
                                              className: `framer-u3kah4`,
                                              "data-framer-name": `Input Block`,
                                              children: [
                                                u(O, {
                                                  __fromCanvasComponent: !0,
                                                  children: u(a, {
                                                    children: u(`p`, {
                                                      className: `framer-styles-preset-158a7l3`,
                                                      "data-styles-preset": `qgNkKXaGR`,
                                                      children: `Email Address`,
                                                    }),
                                                  }),
                                                  className: `framer-tomnt5`,
                                                  "data-framer-name": `Text`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                u(L, {
                                                  className: `framer-mgj3ae`,
                                                  "data-framer-name": `Input`,
                                                  inputName: `Email`,
                                                  placeholder: `Email address`,
                                                  required: !0,
                                                  type: `email`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                        f(`label`, {
                                          className: `framer-14lju4m`,
                                          "data-framer-name": `Input Block`,
                                          children: [
                                            u(O, {
                                              __fromCanvasComponent: !0,
                                              children: u(a, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-158a7l3`,
                                                  "data-styles-preset": `qgNkKXaGR`,
                                                  children: `Subject`,
                                                }),
                                              }),
                                              className: `framer-365oh5`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            u(L, {
                                              className: `framer-10002iu`,
                                              "data-framer-name": `Input`,
                                              inputName: `Subject`,
                                              placeholder: `Subject`,
                                              required: !0,
                                              type: `text`,
                                            }),
                                          ],
                                        }),
                                        f(`label`, {
                                          className: `framer-rtyzy1`,
                                          "data-framer-name": `Input Block`,
                                          children: [
                                            u(O, {
                                              __fromCanvasComponent: !0,
                                              children: u(a, {
                                                children: u(`p`, {
                                                  className: `framer-styles-preset-158a7l3`,
                                                  "data-styles-preset": `qgNkKXaGR`,
                                                  children: `Message`,
                                                }),
                                              }),
                                              className: `framer-14sbnjn`,
                                              "data-framer-name": `Text`,
                                              fonts: [`Inter`],
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                            u(L, {
                                              className: `framer-f5g0fl`,
                                              "data-framer-name": `Input`,
                                              inputName: `Message`,
                                              placeholder: `Write Something`,
                                              required: !0,
                                              type: `textarea`,
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    u(V, {
                                      height: 48,
                                      children: u(I, {
                                        className: `framer-1tdwye0-container`,
                                        nodeId: `r8HOYKu7u`,
                                        scopeId: `rEDzZ3luj`,
                                        children: u(A, {
                                          breakpoint: T,
                                          overrides: {
                                            ooQV82U0Q: {
                                              esMFASHlH: `12px 20px 12px 20px`,
                                              variant: Nn(
                                                e,
                                                {
                                                  error: `T_wCFiYEo`,
                                                  pending: `S8QOd7voj`,
                                                  success: `QkpHiumw2`,
                                                },
                                                `lDq6hksLo`
                                              ),
                                            },
                                            X2NB9D3PK: {
                                              esMFASHlH: `12px 20px 12px 20px`,
                                              variant: Nn(
                                                e,
                                                {
                                                  error: `T_wCFiYEo`,
                                                  pending: `S8QOd7voj`,
                                                  success: `QkpHiumw2`,
                                                },
                                                `lDq6hksLo`
                                              ),
                                            },
                                          },
                                          children: u(J, {
                                            esMFASHlH: `12px 32px 12px 32px`,
                                            height: `100%`,
                                            id: `r8HOYKu7u`,
                                            layoutId: `r8HOYKu7u`,
                                            type: `submit`,
                                            variant: Nn(
                                              e,
                                              {
                                                error: `T_wCFiYEo`,
                                                pending: `S8QOd7voj`,
                                                success: `QkpHiumw2`,
                                              },
                                              `QtZ39DBuB`
                                            ),
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
                    }),
                    u(`div`, {
                      className: `framer-36v4bx`,
                      "data-framer-name": `Contact Map Section`,
                      children: u(`div`, {
                        className: `framer-1j71eyb`,
                        "data-framer-name": `Container`,
                        children: u(A, {
                          breakpoint: T,
                          overrides: {
                            ooQV82U0Q: { __framer__styleAppearEffectEnabled: void 0 },
                            X2NB9D3PK: { __framer__styleAppearEffectEnabled: void 0 },
                          },
                          children: f(gn, {
                            __framer__animate: { transition: Q },
                            __framer__animateOnce: !0,
                            __framer__enter: Pn,
                            __framer__exit: Fn,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-o1hvte`,
                            "data-framer-name": `Map with Pulse`,
                            children: [
                              u(A, {
                                breakpoint: T,
                                overrides: { ooQV82U0Q: { width: `20px` } },
                                children: u(V, {
                                  height: 40,
                                  width: `40px`,
                                  children: u(I, {
                                    className: `framer-1rko50u-container`,
                                    nodeId: `eiGHaaY29`,
                                    scopeId: `rEDzZ3luj`,
                                    children: u(A, {
                                      breakpoint: T,
                                      overrides: {
                                        ooQV82U0Q: { variant: `zIXZOhmPZ` },
                                        X2NB9D3PK: { variant: `zIXZOhmPZ` },
                                      },
                                      children: u(q, {
                                        height: `100%`,
                                        id: `eiGHaaY29`,
                                        j9xdcEK2l: `17700 Avalon BLVD Carson California, USA`,
                                        jHgLt03lP: `https://www.google.com/maps/place/Sitalpur+Forest+Office/@22.4557419,91.7246867,15z/data=!4m6!3m5!1s0x30acd1cfd7679b71:0xb05724abbeef18f6!8m2!3d22.4626666!4d91.7370797!16s%2Fg%2F11rqkhqqs3?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D`,
                                        layoutId: `eiGHaaY29`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: `Wg46WydI4`,
                                        vFSx_rKBW: !0,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              u(V, {
                                children: u(I, {
                                  className: `framer-1mvlbq5-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `sMXQFXHmY`,
                                  scopeId: `rEDzZ3luj`,
                                  children: u(st, {
                                    borderRadius: 0,
                                    bottomLeftRadius: 0,
                                    bottomRightRadius: 0,
                                    coordinates: `Framer B.V.`,
                                    height: `100%`,
                                    id: `sMXQFXHmY`,
                                    isMixedBorderRadius: !1,
                                    layoutId: `sMXQFXHmY`,
                                    style: { height: `100%`, width: `100%` },
                                    topLeftRadius: 0,
                                    topRightRadius: 0,
                                    width: `100%`,
                                    zoom: 15,
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
                u(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-tpaQc.framer-jvne8, .framer-tpaQc .framer-jvne8 { display: block; }`,
        `.framer-tpaQc.framer-dgr4ax { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-tpaQc .framer-mumece { align-content: center; align-items: center; background-color: var(--token-c13496af-9d74-466a-bd24-b702e33e6193, #adff00); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: hidden; padding: 192px 0px 124px 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1a2ihjv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-tpaQc .framer-1otmv6e-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-tpaQc .framer-1bchdir { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-tpaQc .framer-th2b19 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tpaQc .framer-1xbbyh { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 578px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tpaQc .framer-1ktwxmj { flex: none; height: 100%; left: 0px; overflow: visible; position: absolute; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-tpaQc .framer-1sdmavh { -webkit-filter: blur(325px); -webkit-user-select: none; aspect-ratio: 0.6374695863746959 / 1; background-color: var(--token-33d8d9fe-2eb6-4868-993e-82bd136d2a3c, #018af4); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; filter: blur(325px); flex: none; height: var(--framer-aspect-ratio-supported, 342px); left: 15%; max-width: 218px; position: absolute; top: 126%; transform: translate(-50%, -50%); user-select: none; width: 18%; z-index: 1; }`,
        `.framer-tpaQc .framer-167gk4t { --border-bottom-width: 1px; --border-color: #000000; --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; -webkit-filter: blur(325px); -webkit-user-select: none; aspect-ratio: 0.638095238095238 / 1; background-color: var(--token-39fdc6bf-aa89-4159-af3c-713a445c7545, #ffa401); border-bottom-left-radius: 100%; border-bottom-right-radius: 100%; border-top-left-radius: 100%; border-top-right-radius: 100%; filter: blur(325px); flex: none; height: var(--framer-aspect-ratio-supported, 349px); left: 85%; max-width: 223px; position: absolute; top: 96%; transform: translate(-50%, -50%); user-select: none; width: 19%; z-index: 1; }`,
        `.framer-tpaQc .framer-1knc5fs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 96px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-7w4i4s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-dhizja { align-content: center; align-items: center; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 584px; overflow: visible; padding: 0px; position: relative; width: 46%; }`,
        `.framer-tpaQc .framer-1wireos { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-e1fqq0, .framer-tpaQc .framer-qyq7j4 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tpaQc .framer-17v5vnl { display: grid; flex: none; gap: 80px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(10px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-hhtups-container, .framer-tpaQc .framer-1k29vrh-container, .framer-tpaQc .framer-ooogzy-container, .framer-tpaQc .framer-1jp5dos-container { align-self: start; flex: none; height: auto; justify-self: start; max-width: 234px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-it6h9n { --border-bottom-width: 1px; --border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: flex-start; align-items: flex-start; background-color: var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, #ffffff); border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; max-width: 630px; overflow: visible; padding: 32px; position: relative; width: 49%; }`,
        `.framer-tpaQc .framer-119rvdy { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1ctxaax { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1ode1nx, .framer-tpaQc .framer-u3kah4 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
        `.framer-tpaQc .framer-getr92, .framer-tpaQc .framer-tomnt5, .framer-tpaQc .framer-365oh5, .framer-tpaQc .framer-14sbnjn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-tpaQc .framer-1lmygr9, .framer-tpaQc .framer-mgj3ae, .framer-tpaQc .framer-10002iu { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 10px; --framer-input-border-radius-bottom-right: 10px; --framer-input-border-radius-top-left: 10px; --framer-input-border-radius-top-right: 10px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-font-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-input-font-family: "DM Sans"; --framer-input-font-letter-spacing: -0.02em; --framer-input-font-line-height: 1.5em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 12px 16px 12px 16px; --framer-input-placeholder-color: var(--token-6a34fe72-cc21-4a00-af16-4726d9dd233b, #939393); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-14lju4m, .framer-tpaQc .framer-rtyzy1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-f5g0fl { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, #e8ebe2); --framer-input-border-left-width: 1px; --framer-input-border-radius-bottom-left: 16px; --framer-input-border-radius-bottom-right: 16px; --framer-input-border-radius-top-left: 16px; --framer-input-border-radius-top-right: 16px; --framer-input-border-right-width: 1px; --framer-input-border-style: solid; --framer-input-border-top-width: 1px; --framer-input-font-color: var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, #101703); --framer-input-font-family: "DM Sans"; --framer-input-font-letter-spacing: -0.02em; --framer-input-font-line-height: 1.5em; --framer-input-font-size: 16px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-padding: 9px 16px 9px 16px; --framer-input-placeholder-color: var(--token-6a34fe72-cc21-4a00-af16-4726d9dd233b, #939393); --framer-input-wrapper-height: auto; flex: none; height: auto; min-height: 102px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1tdwye0-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-tpaQc .framer-36v4bx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1j71eyb { align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 96px 20px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-o1hvte { align-content: center; align-items: center; border-bottom-left-radius: 32px; border-bottom-right-radius: 32px; border-top-left-radius: 32px; border-top-right-radius: 32px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-tpaQc .framer-1rko50u-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 24%; position: absolute; top: 58%; transform: translate(-50%, -50%); width: 40px; z-index: 1; }`,
        `.framer-tpaQc .framer-1mvlbq5-container { aspect-ratio: 2.038664323374341 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 569px); position: relative; width: 100%; }`,
        `@supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-tpaQc.framer-dgr4ax, .framer-tpaQc .framer-mumece, .framer-tpaQc .framer-1a2ihjv, .framer-tpaQc .framer-1bchdir, .framer-tpaQc .framer-1knc5fs, .framer-tpaQc .framer-dhizja, .framer-tpaQc .framer-1wireos, .framer-tpaQc .framer-it6h9n, .framer-tpaQc .framer-119rvdy, .framer-tpaQc .framer-1ctxaax, .framer-tpaQc .framer-1ode1nx, .framer-tpaQc .framer-u3kah4, .framer-tpaQc .framer-14lju4m, .framer-tpaQc .framer-rtyzy1, .framer-tpaQc .framer-36v4bx, .framer-tpaQc .framer-1j71eyb, .framer-tpaQc .framer-o1hvte { gap: 0px; } .framer-tpaQc.framer-dgr4ax > *, .framer-tpaQc .framer-1j71eyb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-tpaQc.framer-dgr4ax > :first-child, .framer-tpaQc .framer-mumece > :first-child, .framer-tpaQc .framer-1a2ihjv > :first-child, .framer-tpaQc .framer-1bchdir > :first-child, .framer-tpaQc .framer-1knc5fs > :first-child, .framer-tpaQc .framer-dhizja > :first-child, .framer-tpaQc .framer-1wireos > :first-child, .framer-tpaQc .framer-it6h9n > :first-child, .framer-tpaQc .framer-119rvdy > :first-child, .framer-tpaQc .framer-1ode1nx > :first-child, .framer-tpaQc .framer-u3kah4 > :first-child, .framer-tpaQc .framer-14lju4m > :first-child, .framer-tpaQc .framer-rtyzy1 > :first-child, .framer-tpaQc .framer-36v4bx > :first-child, .framer-tpaQc .framer-1j71eyb > :first-child { margin-top: 0px; } .framer-tpaQc.framer-dgr4ax > :last-child, .framer-tpaQc .framer-mumece > :last-child, .framer-tpaQc .framer-1a2ihjv > :last-child, .framer-tpaQc .framer-1bchdir > :last-child, .framer-tpaQc .framer-1knc5fs > :last-child, .framer-tpaQc .framer-dhizja > :last-child, .framer-tpaQc .framer-1wireos > :last-child, .framer-tpaQc .framer-it6h9n > :last-child, .framer-tpaQc .framer-119rvdy > :last-child, .framer-tpaQc .framer-1ode1nx > :last-child, .framer-tpaQc .framer-u3kah4 > :last-child, .framer-tpaQc .framer-14lju4m > :last-child, .framer-tpaQc .framer-rtyzy1 > :last-child, .framer-tpaQc .framer-36v4bx > :last-child, .framer-tpaQc .framer-1j71eyb > :last-child { margin-bottom: 0px; } .framer-tpaQc .framer-mumece > *, .framer-tpaQc .framer-1knc5fs > *, .framer-tpaQc .framer-36v4bx > * { margin: 0px; margin-bottom: calc(68px / 2); margin-top: calc(68px / 2); } .framer-tpaQc .framer-1a2ihjv > *, .framer-tpaQc .framer-1wireos > *, .framer-tpaQc .framer-119rvdy > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-tpaQc .framer-1bchdir > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-tpaQc .framer-dhizja > * { margin: 0px; margin-bottom: calc(80px / 2); margin-top: calc(80px / 2); } .framer-tpaQc .framer-it6h9n > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-tpaQc .framer-1ctxaax > * { margin: 0px; margin-left: calc(40px / 2); margin-right: calc(40px / 2); } .framer-tpaQc .framer-1ctxaax > :first-child, .framer-tpaQc .framer-o1hvte > :first-child { margin-left: 0px; } .framer-tpaQc .framer-1ctxaax > :last-child, .framer-tpaQc .framer-o1hvte > :last-child { margin-right: 0px; } .framer-tpaQc .framer-1ode1nx > *, .framer-tpaQc .framer-u3kah4 > *, .framer-tpaQc .framer-14lju4m > *, .framer-tpaQc .framer-rtyzy1 > * { margin: 0px; margin-bottom: calc(6px / 2); margin-top: calc(6px / 2); } .framer-tpaQc .framer-o1hvte > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }`,
        ...je,
        ...de,
        ...De,
        ...he,
        `.framer-tpaQc[data-border="true"]::after, .framer-tpaQc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199px) { .framer-tpaQc.framer-dgr4ax { width: 810px; } .framer-tpaQc .framer-mumece { gap: 40px; padding: 160px 0px 80px 0px; } .framer-tpaQc .framer-1a2ihjv, .framer-tpaQc .framer-7w4i4s { max-width: 990px; } .framer-tpaQc .framer-1bchdir { gap: 16px; } .framer-tpaQc .framer-1sdmavh { height: var(--framer-aspect-ratio-supported, 231px); } .framer-tpaQc .framer-167gk4t { height: var(--framer-aspect-ratio-supported, 236px); } .framer-tpaQc .framer-1knc5fs { padding: 80px 0px 80px 0px; } .framer-tpaQc .framer-dhizja { gap: 40px; max-width: 500px; width: 43%; } .framer-tpaQc .framer-17v5vnl { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); } .framer-tpaQc .framer-it6h9n { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 24px; padding: 24px 20px 24px 20px; width: 53%; } .framer-tpaQc .framer-1ctxaax { flex-direction: column; gap: 24px; } .framer-tpaQc .framer-1ode1nx, .framer-tpaQc .framer-u3kah4 { flex: none; width: 100%; } .framer-tpaQc .framer-1j71eyb { max-width: 990px; padding: 0px 20px 80px 20px; } .framer-tpaQc .framer-o1hvte { border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; } .framer-tpaQc .framer-1rko50u-container { left: 19%; top: 67%; } .framer-tpaQc .framer-1mvlbq5-container { height: var(--framer-aspect-ratio-supported, 377px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-tpaQc .framer-mumece, .framer-tpaQc .framer-1bchdir, .framer-tpaQc .framer-dhizja, .framer-tpaQc .framer-17v5vnl, .framer-tpaQc .framer-it6h9n, .framer-tpaQc .framer-1ctxaax { gap: 0px; } .framer-tpaQc .framer-mumece > *, .framer-tpaQc .framer-dhizja > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-tpaQc .framer-mumece > :first-child, .framer-tpaQc .framer-1bchdir > :first-child, .framer-tpaQc .framer-dhizja > :first-child, .framer-tpaQc .framer-it6h9n > :first-child, .framer-tpaQc .framer-1ctxaax > :first-child { margin-top: 0px; } .framer-tpaQc .framer-mumece > :last-child, .framer-tpaQc .framer-1bchdir > :last-child, .framer-tpaQc .framer-dhizja > :last-child, .framer-tpaQc .framer-it6h9n > :last-child, .framer-tpaQc .framer-1ctxaax > :last-child { margin-bottom: 0px; } .framer-tpaQc .framer-1bchdir > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-tpaQc .framer-17v5vnl > *, .framer-tpaQc .framer-17v5vnl > :first-child, .framer-tpaQc .framer-17v5vnl > :last-child { margin: 0px; } .framer-tpaQc .framer-it6h9n > *, .framer-tpaQc .framer-1ctxaax > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } }}`,
        `@media (max-width: 809px) { .framer-tpaQc.framer-dgr4ax { width: 390px; } .framer-tpaQc .framer-mumece { gap: 30px; padding: 140px 0px 60px 0px; } .framer-tpaQc .framer-1a2ihjv { align-content: flex-start; align-items: flex-start; max-width: 620px; } .framer-tpaQc .framer-1bchdir { gap: 16px; } .framer-tpaQc .framer-1xbbyh, .framer-tpaQc .framer-hhtups-container, .framer-tpaQc .framer-1k29vrh-container, .framer-tpaQc .framer-ooogzy-container, .framer-tpaQc .framer-1jp5dos-container { max-width: unset; } .framer-tpaQc .framer-1sdmavh { height: var(--framer-aspect-ratio-supported, 314px); } .framer-tpaQc .framer-167gk4t { height: var(--framer-aspect-ratio-supported, 313px); } .framer-tpaQc .framer-1knc5fs { padding: 60px 0px 60px 0px; } .framer-tpaQc .framer-7w4i4s { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 30px; justify-content: center; max-width: 620px; } .framer-tpaQc .framer-dhizja { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 30px; max-width: unset; width: 100%; } .framer-tpaQc .framer-17v5vnl { gap: 24px; grid-template-columns: repeat(1, minmax(10px, 1fr)); } .framer-tpaQc .framer-it6h9n { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; gap: 16px; max-width: unset; padding: 16px; width: 100%; } .framer-tpaQc .framer-1ctxaax { flex-direction: column; gap: 16px; } .framer-tpaQc .framer-1ode1nx, .framer-tpaQc .framer-u3kah4 { flex: none; width: 100%; } .framer-tpaQc .framer-f5g0fl { min-height: 80px; } .framer-tpaQc .framer-1j71eyb { align-content: flex-start; align-items: flex-start; gap: 30px; max-width: 620px; padding: 0px 20px 60px 20px; } .framer-tpaQc .framer-o1hvte { border-bottom-left-radius: 16px; border-bottom-right-radius: 16px; border-top-left-radius: 16px; border-top-right-radius: 16px; flex-direction: column; } .framer-tpaQc .framer-1rko50u-container { width: 20px; } .framer-tpaQc .framer-1mvlbq5-container { aspect-ratio: 1.4583333333333333 / 1; height: var(--framer-aspect-ratio-supported, 137px); } @supports (background: -webkit-named-image(i)) and (not (scale:1)) { .framer-tpaQc .framer-mumece, .framer-tpaQc .framer-1bchdir, .framer-tpaQc .framer-7w4i4s, .framer-tpaQc .framer-dhizja, .framer-tpaQc .framer-17v5vnl, .framer-tpaQc .framer-it6h9n, .framer-tpaQc .framer-1ctxaax, .framer-tpaQc .framer-1j71eyb, .framer-tpaQc .framer-o1hvte { gap: 0px; } .framer-tpaQc .framer-mumece > *, .framer-tpaQc .framer-7w4i4s > *, .framer-tpaQc .framer-dhizja > *, .framer-tpaQc .framer-1j71eyb > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-tpaQc .framer-mumece > :first-child, .framer-tpaQc .framer-1bchdir > :first-child, .framer-tpaQc .framer-7w4i4s > :first-child, .framer-tpaQc .framer-dhizja > :first-child, .framer-tpaQc .framer-it6h9n > :first-child, .framer-tpaQc .framer-1ctxaax > :first-child, .framer-tpaQc .framer-1j71eyb > :first-child, .framer-tpaQc .framer-o1hvte > :first-child { margin-top: 0px; } .framer-tpaQc .framer-mumece > :last-child, .framer-tpaQc .framer-1bchdir > :last-child, .framer-tpaQc .framer-7w4i4s > :last-child, .framer-tpaQc .framer-dhizja > :last-child, .framer-tpaQc .framer-it6h9n > :last-child, .framer-tpaQc .framer-1ctxaax > :last-child, .framer-tpaQc .framer-1j71eyb > :last-child, .framer-tpaQc .framer-o1hvte > :last-child { margin-bottom: 0px; } .framer-tpaQc .framer-1bchdir > *, .framer-tpaQc .framer-it6h9n > *, .framer-tpaQc .framer-1ctxaax > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-tpaQc .framer-17v5vnl > *, .framer-tpaQc .framer-17v5vnl > :first-child, .framer-tpaQc .framer-17v5vnl > :last-child { margin: 0px; } .framer-tpaQc .framer-o1hvte > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } }}`,
      ],
      `framer-tpaQc`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 3509, width: 1200 }),
    H(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
              url: `../../assets/fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
              url: `../../assets/fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+1F00-1FFF`,
              url: `../../assets/fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0370-03FF`,
              url: `../../assets/fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
              url: `../../assets/fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
              url: `../../assets/fonts/vQyevYAyHtARFwPqUzQGpnDs.woff2`,
              weight: `400`,
            },
            {
              family: `Inter`,
              source: `framer`,
              style: `normal`,
              unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
              url: `../../assets/fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
              weight: `400`,
            },
            {
              family: `DM Sans`,
              source: `google`,
              style: `normal`,
              url: `https://fonts.gstatic.com/s/dmsans/v15/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
              weight: `400`,
            },
          ],
        },
        ...fn,
        ...hn,
        ..._n,
        ...yn,
        ...bn,
        ...M(Me),
        ...M(fe),
        ...M(Oe),
        ...M(ge),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (zn = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerrEDzZ3luj`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"X2NB9D3PK":{"layout":["fixed","auto"]},"ooQV82U0Q":{"layout":["fixed","auto"]}}}`,
            framerImmutableVariables: `true`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: ``,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `3509`,
            framerIntrinsicWidth: `1200`,
            framerScrollSections: `{"xKzrRVfI1":{"pattern":":xKzrRVfI1","name":"container"}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { zn as __FramerMetadata__, $ as default };
//# sourceMappingURL=cK9Gl_pNpt6ywyfIPXb1pMJvvhI_c3oqXUIb7jOX63U.BcoY6t1e.mjs.map
