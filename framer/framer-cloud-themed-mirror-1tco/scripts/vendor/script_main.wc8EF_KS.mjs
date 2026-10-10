import { n as e, t } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as n,
  B as r,
  C as i,
  D as a,
  E as o,
  F as s,
  I as c,
  L as l,
  M as u,
  N as d,
  O as f,
  R as p,
  T as ee,
  _ as m,
  a as h,
  b as g,
  c as _,
  f as v,
  g as te,
  l as ne,
  m as y,
  n as b,
  o as x,
  r as S,
  s as C,
  t as w,
  u as T,
  v as re,
  w as ie,
  x as E,
  z as ae,
} from "./react.DJ2-MjhO.mjs";
import {
  E as oe,
  P as D,
  X as se,
  et as ce,
  i as O,
  it as le,
  lt as ue,
  n as de,
  o as k,
  t as A,
} from "./motion.Bn11pmd7.mjs";
import {
  $ as fe,
  A as pe,
  B as me,
  C as j,
  Ct as he,
  Dt as ge,
  E as M,
  G as N,
  J as _e,
  K as P,
  L as F,
  Q as ve,
  R as ye,
  S as be,
  T as I,
  Tt as xe,
  U as Se,
  W as Ce,
  X as we,
  _ as L,
  _t as Te,
  a as Ee,
  b as R,
  bt as De,
  c as Oe,
  ct as ke,
  d as z,
  et as Ae,
  f as je,
  ft as Me,
  g as Ne,
  h as Pe,
  i as B,
  it as Fe,
  j as V,
  k as H,
  l as Ie,
  mt as Le,
  n as U,
  nt as Re,
  o as ze,
  ot as Be,
  p as Ve,
  r as W,
  rt as He,
  s as Ue,
  st as We,
  u as Ge,
  ut as Ke,
  vt as qe,
  x as Je,
  xt as Ye,
  y as Xe,
  yt as Ze,
  z as G,
} from "./framer.CS_JK_Iv.mjs";
import {
  a as Qe,
  c as $e,
  i as et,
  l as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
  u as st,
} from "./SlideShow.FFGkeE1g.mjs";
import { i as ct, n as lt, r as ut, t as dt } from "./YCYFDwdBK.C-gOSGsQ.mjs";
import { i as ft, n as pt, r as mt, t as ht } from "./ZckC7in5y.CvJcrBli.mjs";
import { i as gt, n as _t, r as vt, t as yt } from "./ilN_pt0Gn.B1pfsNZa.mjs";
import { n as bt, t as xt } from "./DonUKz7Gq.D3Lm9Zni.mjs";
import { a as St, i as Ct, r as wt } from "./FramerAuthV2.kZxb6MRo.mjs";
import { n as Tt, t as Et } from "./iYEILKxH1.Cwf9mGHP.mjs";
var Dt = e({ __FramerMetadata__: () => zt, default: () => K });
function Ot(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  K,
  zt,
  Bt = t(() => {
    (_(),
      N(),
      A(),
      o(),
      gt(),
      (kt = { ji6vQqSJm: { hover: !0 }, zns_HgpwM: { hover: !0 } }),
      (At = [`zns_HgpwM`, `ji6vQqSJm`]),
      (jt = `framer-SNDmx`),
      (Mt = { ji6vQqSJm: `framer-v-1fgtig2`, zns_HgpwM: `framer-v-1waq7s2` }),
      (Nt = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Pt = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (Ft = D.create(c)),
      (It = { "Menu Link White": `ji6vQqSJm`, "Menu Link": `zns_HgpwM` }),
      (Lt = ({ height: e, id: t, link: n, text: r, width: i, ...a }) => ({
        ...a,
        jCPJ6vY2r: r ?? a.jCPJ6vY2r ?? `About`,
        variant: It[a.variant] ?? a.variant ?? `zns_HgpwM`,
        XwPzAT4AE: n ?? a.XwPzAT4AE,
      })),
      (Rt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me();
          Fe();
          let {
              style: s,
              className: l,
              layoutId: u,
              variant: d,
              jCPJ6vY2r: f,
              XwPzAT4AE: p,
              ...m
            } = Lt(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: y,
              setVariant: b,
              variants: x,
            } = qe({
              cycleOrder: At,
              defaultVariant: `zns_HgpwM`,
              enabledGestures: kt,
              ref: r,
              variant: d,
              variantClassNames: Mt,
            }),
            S = Rt(e, x),
            w = H(jt, yt);
          return C(O, {
            id: u ?? i,
            children: C(Ft, {
              animate: x,
              initial: !1,
              children: C(Pt, {
                value: Nt,
                children: C(Ve, {
                  href: p,
                  motionChild: !0,
                  nodeId: `zns_HgpwM`,
                  openInNewTab: !1,
                  scopeId: `dTQckbKo0`,
                  smoothScroll: !0,
                  children: T(D.a, {
                    ...m,
                    ...v,
                    className: `${H(w, `framer-1waq7s2`, l, g)} framer-mk0pm`,
                    "data-framer-name": `Menu Link`,
                    layoutDependency: S,
                    layoutId: `zns_HgpwM`,
                    ref: r,
                    style: { ...s },
                    ...Ot(
                      {
                        "ji6vQqSJm-hover": { "data-framer-name": void 0 },
                        "zns_HgpwM-hover": { "data-framer-name": void 0 },
                        ji6vQqSJm: { "data-framer-name": `Menu Link White` },
                      },
                      h,
                      te
                    ),
                    children: [
                      C(Je, {
                        __fromCanvasComponent: !0,
                        children: C(c, {
                          children: C(D.p, {
                            className: `framer-styles-preset-1edo0ga`,
                            "data-styles-preset": `ilN_pt0Gn`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                            },
                            children: `About.`,
                          }),
                        }),
                        className: `framer-s39cq6`,
                        "data-framer-name": `Home`,
                        fonts: [`Inter`],
                        layoutDependency: S,
                        layoutId: `z9zwRN9TD`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: f,
                        variants: {
                          ji6vQqSJm: {
                            "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Ot(
                          {
                            ji6vQqSJm: {
                              children: C(c, {
                                children: C(D.p, {
                                  className: `framer-styles-preset-1edo0ga`,
                                  "data-styles-preset": `ilN_pt0Gn`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                  },
                                  children: `About.`,
                                }),
                              }),
                            },
                          },
                          h,
                          te
                        ),
                      }),
                      C(D.div, {
                        className: `framer-ml701h`,
                        "data-framer-name": `Line`,
                        layoutDependency: S,
                        layoutId: `IAU3P7_wR`,
                        style: {
                          backgroundColor: `var(--token-7088359f-7c03-4c92-b3b4-21c58eb3e170, rgb(34, 34, 34))`,
                          opacity: 0,
                        },
                        variants: {
                          "ji6vQqSJm-hover": { opacity: 1 },
                          "zns_HgpwM-hover": { opacity: 1 },
                          ji6vQqSJm: {
                            backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                          },
                        },
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
          `.framer-SNDmx.framer-mk0pm, .framer-SNDmx .framer-mk0pm { display: block; }`,
          `.framer-SNDmx.framer-1waq7s2 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 2px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-SNDmx .framer-s39cq6 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-SNDmx .framer-ml701h { bottom: 0px; flex: none; height: 1px; left: calc(50.00000000000002% - 1px / 2); overflow: hidden; position: absolute; width: 1px; z-index: 1; }`,
          `.framer-SNDmx.framer-v-1waq7s2.hover .framer-ml701h, .framer-SNDmx.framer-v-1fgtig2.hover .framer-ml701h { left: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
          ..._t,
        ],
        `framer-SNDmx`
      )),
      (K.displayName = `Nav Link`),
      (K.defaultProps = { height: 16, width: 49 }),
      M(K, {
        variant: {
          options: [`zns_HgpwM`, `ji6vQqSJm`],
          optionTitles: [`Menu Link`, `Menu Link White`],
          title: `Variant`,
          type: B.Enum,
        },
        jCPJ6vY2r: { defaultValue: `About`, displayTextArea: !1, title: `Text`, type: B.String },
        XwPzAT4AE: { title: `Link`, type: B.Link },
      }),
      I(
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
          ...ye(vt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (zt = {
        exports: {
          default: {
            type: `reactComponent`,
            name: `FramerdTQckbKo0`,
            slots: [],
            annotations: {
              framerIntrinsicWidth: `49`,
              framerIntrinsicHeight: `16`,
              framerContractVersion: `1`,
              framerColorSyntax: `true`,
              framerDisplayContentsDiv: `false`,
              framerComponentViewportWidth: `true`,
              framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["auto","auto"]},"ji6vQqSJm":{"layout":["auto","auto"]},"L1Zy4yeUm":{"layout":["auto","auto"]},"klq1Crh7u":{"layout":["auto","auto"]}}}`,
              framerAutoSizeImages: `true`,
              framerVariables: `{"jCPJ6vY2r":"text","XwPzAT4AE":"link"}`,
              framerImmutableVariables: `true`,
            },
          },
          Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
          __FramerMetadata__: { type: `variable` },
        },
      }));
  });
function Vt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ht,
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
  $t = t(() => {
    (_(),
      N(),
      A(),
      o(),
      st(),
      (Ht = F(tt)),
      (Ut = me(tt)),
      (Wt = { MqXMKoPCt: { hover: !0 } }),
      (Gt = `framer-TI85q`),
      (Kt = { MqXMKoPCt: `framer-v-1sx5pd5` }),
      (qt = { delay: 0, duration: 0.35, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Jt = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (Yt = D.create(c)),
      (Xt = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        nGI0PPQPW: r ?? a.nGI0PPQPW,
        WAPpcqZDj: t ?? a.WAPpcqZDj ?? `EnvelopeOpen`,
      })),
      (Zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Qt = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me();
          Fe();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              WAPpcqZDj: d,
              nGI0PPQPW: f,
              ...p
            } = Xt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: te,
              setGestureState: ne,
              setVariant: y,
              variants: b,
            } = qe({
              defaultVariant: `MqXMKoPCt`,
              enabledGestures: Wt,
              ref: r,
              variant: u,
              variantClassNames: Kt,
            }),
            x = Zt(e, b),
            S = H(Gt);
          return C(O, {
            id: l ?? i,
            children: C(Yt, {
              animate: b,
              initial: !1,
              children: C(Jt, {
                value: qt,
                children: C(Ve, {
                  href: f,
                  motionChild: !0,
                  nodeId: `MqXMKoPCt`,
                  openInNewTab: !0,
                  scopeId: `rpE9drOO_`,
                  children: T(D.a, {
                    ...p,
                    ..._,
                    className: `${H(S, `framer-1sx5pd5`, c, h)} framer-le0pit`,
                    "data-framer-name": `Social`,
                    layoutDependency: x,
                    layoutId: `MqXMKoPCt`,
                    ref: r,
                    style: {
                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                      ...s,
                    },
                    ...Vt({ "MqXMKoPCt-hover": { "data-framer-name": void 0 } }, m, v),
                    children: [
                      C(U, {
                        children: C(j, {
                          className: `framer-1g7fcou-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: x,
                          layoutId: `UWBO49ldY-container`,
                          nodeId: `UWBO49ldY`,
                          rendersWithMotion: !0,
                          scopeId: `rpE9drOO_`,
                          children: C(tt, {
                            color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: d,
                            id: `UWBO49ldY`,
                            layoutId: `UWBO49ldY`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
                            width: `100%`,
                          }),
                        }),
                      }),
                      C(U, {
                        children: C(j, {
                          className: `framer-fsz8bg-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: x,
                          layoutId: `kJs2i0eeF-container`,
                          nodeId: `kJs2i0eeF`,
                          rendersWithMotion: !0,
                          scopeId: `rpE9drOO_`,
                          children: C(tt, {
                            color: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                            height: `100%`,
                            iconSearch: `House`,
                            iconSelection: d,
                            id: `kJs2i0eeF`,
                            layoutId: `kJs2i0eeF`,
                            mirrored: !1,
                            selectByList: !0,
                            style: { height: `100%`, width: `100%` },
                            weight: `fill`,
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
          `.framer-TI85q.framer-le0pit, .framer-TI85q .framer-le0pit { display: block; }`,
          `.framer-TI85q.framer-1sx5pd5 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-TI85q .framer-1g7fcou-container { flex: none; height: 20px; left: calc(50.00000000000002% - 20px / 2); position: absolute; top: -30px; width: 20px; z-index: 1; }`,
          `.framer-TI85q .framer-fsz8bg-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-TI85q.framer-v-1sx5pd5.hover .framer-1g7fcou-container { left: unset; position: relative; top: unset; }`,
          `.framer-TI85q.framer-v-1sx5pd5.hover .framer-fsz8bg-container { bottom: -30px; left: calc(50.00000000000002% - 20px / 2); position: absolute; z-index: 1; }`,
        ],
        `framer-TI85q`
      )),
      (Qt.displayName = `Social`),
      (Qt.defaultProps = { height: 40, width: 40 }),
      M(Qt, {
        WAPpcqZDj: Ut?.iconSelection && {
          ...Ut.iconSelection,
          defaultValue: `EnvelopeOpen`,
          description: void 0,
          hidden: void 0,
          title: `Icon`,
        },
        nGI0PPQPW: { title: `Link`, type: B.Link },
      }),
      I(Qt, [{ explicitInter: !0, fonts: [] }, ...Ht], { supportsExplicitInterCodegen: !0 }));
  });
function en(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tn,
  nn,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  q,
  xn = t(() => {
    (_(),
      N(),
      A(),
      o(),
      st(),
      $e(),
      ct(),
      ft(),
      bt(),
      Bt(),
      $t(),
      (tn = Ye(z)),
      (nn = F(Qt)),
      (rn = F(xt)),
      (an = F(K)),
      (on = F(tt)),
      (sn = [`iLiSr8N_l`, `UfjxGbghg`, `FTPJ9L5hl`]),
      (cn = `framer-O0ei9`),
      (ln = {
        FTPJ9L5hl: `framer-v-1uz7uki`,
        iLiSr8N_l: `framer-v-1vwt0ha`,
        UfjxGbghg: `framer-v-4htx08`,
      }),
      (un = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (dn = {
        opacity: 1,
        rotate: -15,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (fn = { bounce: 0.2, delay: 0, duration: 0.75, type: `spring` }),
      (pn = {
        opacity: 1,
        rotate: -15,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: fn,
        x: 0,
        y: 0,
      }),
      (mn = (e, t, n) => {
        switch (e.state) {
          case `success`:
            return t.success ?? n;
          case `pending`:
            return t.pending ?? n;
          case `error`:
            return t.error ?? n;
          case `incomplete`:
            return t.incomplete ?? n;
          default:
            return n;
        }
      }),
      (hn = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.5,
        skewX: 0,
        skewY: 0,
        transition: un,
      }),
      (gn = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (_n = D.create(c)),
      (vn = { "Footer Phone": `FTPJ9L5hl`, "Footer Tablet": `UfjxGbghg`, Footer: `iLiSr8N_l` }),
      (yn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: vn[r.variant] ?? r.variant ?? `iLiSr8N_l`,
      })),
      (bn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me(),
            s = Fe(),
            { style: l, className: u, layoutId: d, variant: f, ...p } = yn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: te,
              setGestureState: y,
              setVariant: b,
              variants: x,
            } = qe({
              cycleOrder: sn,
              defaultVariant: `iLiSr8N_l`,
              ref: r,
              variant: f,
              variantClassNames: ln,
            }),
            S = bn(e, x),
            w = H(cn, dt, Qe, ht),
            re = () => ![`UfjxGbghg`, `FTPJ9L5hl`].includes(m);
          return (
            Te(),
            C(O, {
              id: d ?? i,
              children: C(_n, {
                animate: x,
                initial: !1,
                children: C(gn, {
                  value: un,
                  children: T(D.div, {
                    ...p,
                    ..._,
                    className: H(w, `framer-1vwt0ha`, u, h),
                    "data-framer-name": `Footer`,
                    layoutDependency: S,
                    layoutId: `iLiSr8N_l`,
                    ref: r,
                    style: { ...l },
                    ...en(
                      {
                        FTPJ9L5hl: { "data-framer-name": `Footer Phone` },
                        UfjxGbghg: { "data-framer-name": `Footer Tablet` },
                      },
                      m,
                      v
                    ),
                    children: [
                      T(D.div, {
                        className: `framer-vjzves`,
                        "data-framer-name": `Footer Content`,
                        layoutDependency: S,
                        layoutId: `FwL9rZJB6`,
                        children: [
                          T(D.div, {
                            className: `framer-la23up`,
                            "data-framer-name": `Text and Newsletter`,
                            layoutDependency: S,
                            layoutId: `noVR97FDu`,
                            children: [
                              T(D.div, {
                                className: `framer-4klkiv`,
                                "data-framer-name": `Image and Title`,
                                layoutDependency: S,
                                layoutId: `hqpTxI8AT`,
                                children: [
                                  T(D.div, {
                                    className: `framer-1w5soeq`,
                                    "data-framer-name": `Mentor`,
                                    layoutDependency: S,
                                    layoutId: `KJZNnXxsv`,
                                    children: [
                                      C(Je, {
                                        __fromCanvasComponent: !0,
                                        children: C(c, {
                                          children: C(D.p, {
                                            className: `framer-styles-preset-r0f6qh`,
                                            "data-styles-preset": `YCYFDwdBK`,
                                            style: {
                                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                            },
                                            children: `Mentor`,
                                          }),
                                        }),
                                        className: `framer-86zz9t`,
                                        fonts: [`Inter`],
                                        layoutDependency: S,
                                        layoutId: `YpTWRBZvA`,
                                        style: {
                                          "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                          "--framer-paragraph-spacing": `0px`,
                                        },
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                      re() &&
                                        C(tn, {
                                          __framer__animate: { transition: fn },
                                          __framer__animateOnce: !1,
                                          __framer__enter: dn,
                                          __framer__exit: pn,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __smartComponentFX: !0,
                                          __targetOpacity: 1,
                                          background: {
                                            alt: `Icon`,
                                            fit: `fill`,
                                            pixelHeight: 33,
                                            pixelWidth: 105,
                                            sizes: `101px`,
                                            src: `../../assets/images/FE1ETv4zwcFgrnuzNkSbesJtR0.svg`,
                                          },
                                          className: `framer-1j617ty`,
                                          "data-framer-name": `Icon`,
                                          layoutDependency: S,
                                          layoutId: `pLd0_Zk_v`,
                                        }),
                                    ],
                                  }),
                                  T(D.div, {
                                    className: `framer-1fh18hk`,
                                    "data-framer-name": `Name and Image`,
                                    layoutDependency: S,
                                    layoutId: `MR1zsmDLw`,
                                    children: [
                                      T(D.div, {
                                        className: `framer-1lajt87`,
                                        "data-framer-name": `Image Wrapper`,
                                        layoutDependency: S,
                                        layoutId: `OyA3sOuIN`,
                                        children: [
                                          C(U, {
                                            height: 40,
                                            width: `40px`,
                                            children: C(j, {
                                              className: `framer-k8i3xu-container`,
                                              layoutDependency: S,
                                              layoutId: `m8Yeo3srg-container`,
                                              nodeId: `m8Yeo3srg`,
                                              rendersWithMotion: !0,
                                              scopeId: `BlB6Xenjt`,
                                              children: C(Qt, {
                                                height: `100%`,
                                                id: `m8Yeo3srg`,
                                                layoutId: `m8Yeo3srg`,
                                                nGI0PPQPW: `mailto:hamira@courso.com`,
                                                style: { height: `100%`, width: `100%` },
                                                WAPpcqZDj: `EnvelopeOpen`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                          C(z, {
                                            background: {
                                              alt: `Image`,
                                              fit: `fill`,
                                              pixelHeight: 2400,
                                              pixelWidth: 2400,
                                              sizes: `200px`,
                                              src: `../../assets/images/APLaPOwp9a9f9UpnND4ycL7pew-939950.png`,
                                              srcSet: `../../assets/images/APLaPOwp9a9f9UpnND4ycL7pew.png 512w,../../assets/images/APLaPOwp9a9f9UpnND4ycL7pew-28c70a.png 1024w,../../assets/images/APLaPOwp9a9f9UpnND4ycL7pew-855536.png 2048w,../../assets/images/APLaPOwp9a9f9UpnND4ycL7pew-939950.png 2400w`,
                                            },
                                            className: `framer-c75n6o`,
                                            "data-framer-name": `Image`,
                                            layoutDependency: S,
                                            layoutId: `EwNo_3Ksi`,
                                            style: {
                                              borderBottomLeftRadius: `100%`,
                                              borderBottomRightRadius: `100%`,
                                              borderTopLeftRadius: `100%`,
                                              borderTopRightRadius: `100%`,
                                            },
                                          }),
                                          C(U, {
                                            height: 40,
                                            width: `40px`,
                                            children: C(j, {
                                              className: `framer-6q07et-container`,
                                              layoutDependency: S,
                                              layoutId: `CgA_z2Mqv-container`,
                                              nodeId: `CgA_z2Mqv`,
                                              rendersWithMotion: !0,
                                              scopeId: `BlB6Xenjt`,
                                              children: C(Qt, {
                                                height: `100%`,
                                                id: `CgA_z2Mqv`,
                                                layoutId: `CgA_z2Mqv`,
                                                nGI0PPQPW: `linkedin.com`,
                                                style: { height: `100%`, width: `100%` },
                                                WAPpcqZDj: `LinkedinLogo`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      C(D.div, {
                                        className: `framer-4nnw3b`,
                                        "data-border": !0,
                                        "data-framer-name": `Name Wrapper`,
                                        layoutDependency: S,
                                        layoutId: `A73ecDziY`,
                                        style: {
                                          "--border-bottom-width": `1px`,
                                          "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                          "--border-left-width": `1px`,
                                          "--border-right-width": `1px`,
                                          "--border-style": `solid`,
                                          "--border-top-width": `1px`,
                                          borderBottomLeftRadius: 6,
                                          borderBottomRightRadius: 6,
                                          borderTopLeftRadius: 6,
                                          borderTopRightRadius: 6,
                                        },
                                        children: C(Je, {
                                          __fromCanvasComponent: !0,
                                          children: C(c, {
                                            children: C(D.p, {
                                              className: `framer-styles-preset-1yo9nb5`,
                                              "data-styles-preset": `qN3uIbesA`,
                                              style: {
                                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                              },
                                              children: `Hamira Hoque Mewsi`,
                                            }),
                                          }),
                                          className: `framer-161s80l`,
                                          "data-framer-name": `hamira hoque mewsi`,
                                          fonts: [`Inter`],
                                          layoutDependency: S,
                                          layoutId: `wQoc2s_rK`,
                                          style: {
                                            "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                            "--framer-paragraph-spacing": `0px`,
                                          },
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      }),
                                    ],
                                  }),
                                  C(Je, {
                                    __fromCanvasComponent: !0,
                                    children: C(c, {
                                      children: C(D.h2, {
                                        className: `framer-styles-preset-rsefcq`,
                                        "data-styles-preset": `ZckC7in5y`,
                                        style: {
                                          "--framer-text-alignment": `center`,
                                          "--framer-text-color": `var(--extracted-1of0zx5, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                        },
                                        children: `Meet the mentor behind your low-code  mastery journey`,
                                      }),
                                    }),
                                    className: `framer-g0ohgp`,
                                    "data-framer-name": `Meet the mentor behind your low-code mastery journey`,
                                    fonts: [`Inter`],
                                    layoutDependency: S,
                                    layoutId: `uYcgxJuUW`,
                                    style: {
                                      "--extracted-1of0zx5": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              C(D.div, {
                                className: `framer-axhwl2`,
                                "data-border": !0,
                                "data-framer-name": `Form Wrapper`,
                                layoutDependency: S,
                                layoutId: `GkSr6kWtF`,
                                style: {
                                  "--border-bottom-width": `1px`,
                                  "--border-color": `var(--token-ac7d8170-3f66-4854-911b-9ae90a0f4d9b, rgb(132, 183, 221))`,
                                  "--border-left-width": `1px`,
                                  "--border-right-width": `1px`,
                                  "--border-style": `solid`,
                                  "--border-top-width": `1px`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                                children: C(Ue, {
                                  action: `https://api.framer.com/forms/v1/forms/f4a535ea-9479-40c4-9446-af4172f7b3fa/submit`,
                                  className: `framer-wa1pap`,
                                  layoutDependency: S,
                                  layoutId: `brVihUC9j`,
                                  nodeId: `brVihUC9j`,
                                  style: {
                                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                  },
                                  children: (e) =>
                                    T(ne, {
                                      children: [
                                        C(D.label, {
                                          className: `framer-azgtbo`,
                                          layoutDependency: S,
                                          layoutId: `yDcgWWuUQ`,
                                          children: C(Oe, {
                                            className: `framer-1s8isha`,
                                            inputName: `Email`,
                                            layoutDependency: S,
                                            layoutId: `l4LNkypEE`,
                                            placeholder: `Your email...`,
                                            required: !0,
                                            style: {
                                              "--framer-input-background": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                              "--framer-input-font-color": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                              "--framer-input-icon-color": `rgb(153, 153, 153)`,
                                              "--framer-input-placeholder-color": `var(--token-510340bf-a62c-4e53-96f7-2655027dfec4, rgb(85, 85, 85))`,
                                            },
                                            type: `email`,
                                          }),
                                        }),
                                        C(U, {
                                          height: 54,
                                          ...en(
                                            {
                                              FTPJ9L5hl: {
                                                width: `max(min(${s?.width || `100vw`}, 500px) - 20px, 1px)`,
                                              },
                                            },
                                            m,
                                            v
                                          ),
                                          children: C(j, {
                                            className: `framer-1hpr4r6-container`,
                                            layoutDependency: S,
                                            layoutId: `ts9cFqEzd-container`,
                                            nodeId: `ts9cFqEzd`,
                                            rendersWithMotion: !0,
                                            scopeId: `BlB6Xenjt`,
                                            children: C(xt, {
                                              height: `100%`,
                                              id: `ts9cFqEzd`,
                                              layoutId: `ts9cFqEzd`,
                                              type: `submit`,
                                              variant: mn(
                                                e,
                                                {
                                                  error: `dcgqNJOn7`,
                                                  pending: `oHmzqtc6e`,
                                                  success: `vEaxfHYkt`,
                                                },
                                                `tKmK8QBPt`
                                              ),
                                              width: `100%`,
                                              ZiyCKRJ11: `Subscribe`,
                                              ...en(
                                                { FTPJ9L5hl: { style: { width: `100%` } } },
                                                m,
                                                v
                                              ),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              }),
                            ],
                          }),
                          T(D.div, {
                            className: `framer-zeex2o`,
                            "data-framer-name": `Links`,
                            layoutDependency: S,
                            layoutId: `B1_ZGAGWW`,
                            children: [
                              C(R, {
                                links: [
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `privacy-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `nYAl7t6zS`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `privacy-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `nYAl7t6zS`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `privacy-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `nYAl7t6zS`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    children: C(j, {
                                      className: `framer-16yetdl-container`,
                                      layoutDependency: S,
                                      layoutId: `kczj8AENv-container`,
                                      nodeId: `kczj8AENv`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `kczj8AENv`,
                                        jCPJ6vY2r: `Privacy policy`,
                                        layoutId: `kczj8AENv`,
                                        variant: `ji6vQqSJm`,
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...en(
                                          {
                                            FTPJ9L5hl: { XwPzAT4AE: e[2] },
                                            UfjxGbghg: { XwPzAT4AE: e[1] },
                                          },
                                          m,
                                          v
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `terms-and-conditions` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `SqPaOGLZw`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `terms-and-conditions` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `SqPaOGLZw`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `terms-and-conditions` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `SqPaOGLZw`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    children: C(j, {
                                      className: `framer-2vq186-container`,
                                      layoutDependency: S,
                                      layoutId: `mD11W24u1-container`,
                                      nodeId: `mD11W24u1`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `mD11W24u1`,
                                        jCPJ6vY2r: `T & C`,
                                        layoutId: `mD11W24u1`,
                                        variant: `ji6vQqSJm`,
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...en(
                                          {
                                            FTPJ9L5hl: { XwPzAT4AE: e[2] },
                                            UfjxGbghg: { XwPzAT4AE: e[1] },
                                          },
                                          m,
                                          v
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `refund-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `X1ubmTowH`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `refund-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `X1ubmTowH`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: {
                                      pathVariables: { y3TE1Ijvp: `refund-policy` },
                                      unresolvedPathSlugs: {
                                        y3TE1Ijvp: {
                                          collectionId: `hbTJSza8U`,
                                          collectionItemId: `X1ubmTowH`,
                                        },
                                      },
                                      webPageId: `zSKArY_ps`,
                                    },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    children: C(j, {
                                      className: `framer-ks2yc1-container`,
                                      layoutDependency: S,
                                      layoutId: `gamo5hhST-container`,
                                      nodeId: `gamo5hhST`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `gamo5hhST`,
                                        jCPJ6vY2r: `Refund policy`,
                                        layoutId: `gamo5hhST`,
                                        variant: `ji6vQqSJm`,
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...en(
                                          {
                                            FTPJ9L5hl: { XwPzAT4AE: e[2] },
                                            UfjxGbghg: { XwPzAT4AE: e[1] },
                                          },
                                          m,
                                          v
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `R5WzJToo0` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `R5WzJToo0` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `R5WzJToo0` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    children: C(j, {
                                      className: `framer-rb013v-container`,
                                      layoutDependency: S,
                                      layoutId: `qkbKTuiAq-container`,
                                      nodeId: `qkbKTuiAq`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `qkbKTuiAq`,
                                        jCPJ6vY2r: `404`,
                                        layoutId: `qkbKTuiAq`,
                                        variant: `ji6vQqSJm`,
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...en(
                                          {
                                            FTPJ9L5hl: { XwPzAT4AE: e[2] },
                                            UfjxGbghg: { XwPzAT4AE: e[1] },
                                          },
                                          m,
                                          v
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      T(D.div, {
                        className: `framer-15glaqo`,
                        "data-framer-name": `Copyright`,
                        layoutDependency: S,
                        layoutId: `Td2tomHWo`,
                        children: [
                          C(Je, {
                            __fromCanvasComponent: !0,
                            children: C(c, {
                              children: C(D.p, {
                                className: `framer-styles-preset-1yo9nb5`,
                                "data-styles-preset": `qN3uIbesA`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                },
                                children: `Copyright & design by @templatemunk - 2026`,
                              }),
                            }),
                            className: `framer-al83f7`,
                            "data-framer-name": `copyright & design by @caseflow - 2026`,
                            fonts: [`Inter`],
                            layoutDependency: S,
                            layoutId: `GBYjsyMtS`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                              "--framer-paragraph-spacing": `0px`,
                            },
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                            ...en(
                              {
                                FTPJ9L5hl: {
                                  children: C(c, {
                                    children: C(D.p, {
                                      className: `framer-styles-preset-1yo9nb5`,
                                      "data-styles-preset": `qN3uIbesA`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)))`,
                                      },
                                      children: `Copyright & design by @templatemunk - 2026`,
                                    }),
                                  }),
                                },
                              },
                              m,
                              v
                            ),
                          }),
                          T(D.div, {
                            className: `framer-gxplvb`,
                            "data-framer-name": `Social Wrapper`,
                            layoutDependency: S,
                            layoutId: `QjUQEbVMO`,
                            children: [
                              C(Ve, {
                                href: `facebook.com`,
                                motionChild: !0,
                                nodeId: `Y3SE7dckL`,
                                openInNewTab: !0,
                                scopeId: `BlB6Xenjt`,
                                children: C(D.a, {
                                  className: `framer-e97e3n framer-1ypfmj6`,
                                  "data-framer-name": `Social`,
                                  layoutDependency: S,
                                  layoutId: `Y3SE7dckL`,
                                  whileHover: hn,
                                  children: C(U, {
                                    children: C(j, {
                                      className: `framer-6akus8-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: S,
                                      layoutId: `dtJM9rbEP-container`,
                                      nodeId: `dtJM9rbEP`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(tt, {
                                        color: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `FacebookLogo`,
                                        id: `dtJM9rbEP`,
                                        layoutId: `dtJM9rbEP`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `fill`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              C(Ve, {
                                href: `x.com`,
                                motionChild: !0,
                                nodeId: `fBP8UyLJ0`,
                                openInNewTab: !0,
                                scopeId: `BlB6Xenjt`,
                                children: C(D.a, {
                                  className: `framer-1ue4deo framer-1ypfmj6`,
                                  "data-framer-name": `Social`,
                                  layoutDependency: S,
                                  layoutId: `fBP8UyLJ0`,
                                  whileHover: hn,
                                  children: C(U, {
                                    children: C(j, {
                                      className: `framer-qxdlhe-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: S,
                                      layoutId: `zDtdPQm26-container`,
                                      nodeId: `zDtdPQm26`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(tt, {
                                        color: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `XLogo`,
                                        id: `zDtdPQm26`,
                                        layoutId: `zDtdPQm26`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `fill`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              C(Ve, {
                                href: `instagram.com`,
                                motionChild: !0,
                                nodeId: `s_UvyaNMV`,
                                openInNewTab: !0,
                                scopeId: `BlB6Xenjt`,
                                children: C(D.a, {
                                  className: `framer-1psluy9 framer-1ypfmj6`,
                                  "data-framer-name": `Social`,
                                  layoutDependency: S,
                                  layoutId: `s_UvyaNMV`,
                                  whileHover: hn,
                                  children: C(U, {
                                    children: C(j, {
                                      className: `framer-182qbuh-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: S,
                                      layoutId: `HGi6EiKUw-container`,
                                      nodeId: `HGi6EiKUw`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(tt, {
                                        color: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `InstagramLogo`,
                                        id: `HGi6EiKUw`,
                                        layoutId: `HGi6EiKUw`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `fill`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              C(Ve, {
                                href: `youtube.com`,
                                motionChild: !0,
                                nodeId: `hftcVYUFq`,
                                openInNewTab: !0,
                                scopeId: `BlB6Xenjt`,
                                children: C(D.a, {
                                  className: `framer-1lj36j2 framer-1ypfmj6`,
                                  "data-framer-name": `Social`,
                                  layoutDependency: S,
                                  layoutId: `hftcVYUFq`,
                                  whileHover: hn,
                                  children: C(U, {
                                    children: C(j, {
                                      className: `framer-131x2t0-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      layoutDependency: S,
                                      layoutId: `Njs7T7aDi-container`,
                                      nodeId: `Njs7T7aDi`,
                                      rendersWithMotion: !0,
                                      scopeId: `BlB6Xenjt`,
                                      children: C(tt, {
                                        color: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                        height: `100%`,
                                        iconSearch: `House`,
                                        iconSelection: `YoutubeLogo`,
                                        id: `Njs7T7aDi`,
                                        layoutId: `Njs7T7aDi`,
                                        mirrored: !1,
                                        selectByList: !0,
                                        style: { height: `100%`, width: `100%` },
                                        weight: `fill`,
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
                }),
              }),
            })
          );
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-O0ei9.framer-1ypfmj6, .framer-O0ei9 .framer-1ypfmj6 { display: block; }`,
          `.framer-O0ei9.framer-1vwt0ha { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-O0ei9 .framer-vjzves { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; max-width: 500px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-la23up { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-4klkiv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-1w5soeq { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 10px; overflow: visible; padding: 0px; position: absolute; top: 0px; width: min-content; z-index: 1; }`,
          `.framer-O0ei9 .framer-86zz9t, .framer-O0ei9 .framer-161s80l, .framer-O0ei9 .framer-al83f7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-O0ei9 .framer-1j617ty { flex: none; height: 32px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 101px; will-change: var(--framer-will-change-filter-override, filter); }`,
          `.framer-O0ei9 .framer-1fh18hk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-1lajt87 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 20px 0px 20px; position: relative; width: min-content; }`,
          `.framer-O0ei9 .framer-k8i3xu-container { flex: none; height: 40px; left: 0px; position: absolute; top: calc(50.00000000000002% - 40px / 2); width: 40px; z-index: 1; }`,
          `.framer-O0ei9 .framer-c75n6o { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 200px; }`,
          `.framer-O0ei9 .framer-6q07et-container { flex: none; height: 40px; position: absolute; right: 0px; top: calc(50.00000000000002% - 40px / 2); width: 40px; z-index: 1; }`,
          `.framer-O0ei9 .framer-4nnw3b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 10px 14px 10px 14px; position: relative; width: min-content; }`,
          `.framer-O0ei9 .framer-g0ohgp { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-O0ei9 .framer-axhwl2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 10px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-O0ei9 .framer-wa1pap { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-O0ei9 .framer-azgtbo { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
          `.framer-O0ei9 .framer-1s8isha { --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 100%; --framer-input-font-size: 16px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 0px 20px 0px 20px; --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-1hpr4r6-container, .framer-O0ei9 .framer-16yetdl-container, .framer-O0ei9 .framer-2vq186-container, .framer-O0ei9 .framer-ks2yc1-container, .framer-O0ei9 .framer-rb013v-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-O0ei9 .framer-zeex2o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 34px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-15glaqo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-O0ei9 .framer-gxplvb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-O0ei9 .framer-e97e3n, .framer-O0ei9 .framer-1ue4deo, .framer-O0ei9 .framer-1psluy9, .framer-O0ei9 .framer-1lj36j2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-effect-override, transform); }`,
          `.framer-O0ei9 .framer-6akus8-container, .framer-O0ei9 .framer-qxdlhe-container, .framer-O0ei9 .framer-182qbuh-container, .framer-O0ei9 .framer-131x2t0-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-O0ei9.framer-v-4htx08.framer-1vwt0ha { gap: 50px; width: 750px; }`,
          `.framer-O0ei9.framer-v-4htx08 .framer-vjzves { gap: 60px; }`,
          `.framer-O0ei9.framer-v-4htx08 .framer-la23up, .framer-O0ei9.framer-v-1uz7uki .framer-la23up { gap: 30px; }`,
          `.framer-O0ei9.framer-v-4htx08 .framer-1w5soeq, .framer-O0ei9.framer-v-1uz7uki .framer-1w5soeq { left: unset; position: relative; top: unset; }`,
          `.framer-O0ei9.framer-v-4htx08 .framer-1fh18hk { gap: 30px; padding: 0px; }`,
          `.framer-O0ei9.framer-v-1uz7uki.framer-1vwt0ha { gap: 30px; width: 350px; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-vjzves { gap: 40px; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-1fh18hk { gap: 20px; padding: 0px; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-wa1pap { flex-direction: column; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-azgtbo { flex: none; width: 100%; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-1s8isha { --framer-input-padding: 16px 20px 16px 20px; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-1hpr4r6-container { width: 100%; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-zeex2o { flex-direction: column; gap: 16px; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-15glaqo { flex-direction: column; gap: 16px; justify-content: flex-start; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-al83f7 { order: 1; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-O0ei9.framer-v-1uz7uki .framer-gxplvb { order: 0; }`,
          ...lt,
          ...rt,
          ...pt,
          `.framer-O0ei9[data-border="true"]::after, .framer-O0ei9 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-O0ei9`
      )),
      (q.displayName = `Footer`),
      (q.defaultProps = { height: 789, width: 1200 }),
      M(q, {
        variant: {
          options: [`iLiSr8N_l`, `UfjxGbghg`, `FTPJ9L5hl`],
          optionTitles: [`Footer`, `Footer Tablet`, `Footer Phone`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      I(
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
          ...nn,
          ...rn,
          ...an,
          ...on,
          ...ye(ut),
          ...ye(at),
          ...ye(mt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Sn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn = t(() => {
    (_(),
      N(),
      A(),
      o(),
      (Cn = [`UyHl1p0jF`, `pUszAIH4S`]),
      (wn = `framer-p5edG`),
      (Tn = { pUszAIH4S: `framer-v-1a55vps`, UyHl1p0jF: `framer-v-188xawm` }),
      (En = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (Dn = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (On = D.create(c)),
      (kn = { Closed: `UyHl1p0jF`, Open: `pUszAIH4S` }),
      (An = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        SvZj1atfr: e ?? i.SvZj1atfr,
        variant: kn[i.variant] ?? i.variant ?? `UyHl1p0jF`,
      })),
      (jn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mn = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me();
          Fe();
          let { style: s, className: c, layoutId: l, variant: u, SvZj1atfr: d, ...f } = An(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: v,
              setGestureState: te,
              setVariant: ne,
              variants: y,
            } = qe({
              cycleOrder: Cn,
              defaultVariant: `UyHl1p0jF`,
              ref: r,
              variant: u,
              variantClassNames: Tn,
            }),
            b = jn(e, y),
            { activeVariantCallback: x, delay: S } = He(p),
            w = x(async (...e) => {
              if ((te({ isPressed: !1 }), d && (await d(...e)) === !1)) return !1;
            }),
            T = H(wn);
          return C(O, {
            id: l ?? i,
            children: C(On, {
              animate: y,
              initial: !1,
              children: C(Dn, {
                value: En,
                children: C(D.div, {
                  ...f,
                  ...g,
                  className: H(T, `framer-188xawm`, c, m),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: b,
                  layoutId: `UyHl1p0jF`,
                  onTap: w,
                  ref: r,
                  style: { ...s },
                  ...Sn({ pUszAIH4S: { "data-framer-name": `Open` } }, p, _),
                  children: C(D.div, {
                    className: `framer-1sdwt1c`,
                    "data-framer-name": `Frame`,
                    layoutDependency: b,
                    layoutId: `loJeE7BUc`,
                    style: { rotate: 0 },
                    variants: { pUszAIH4S: { rotate: -180 } },
                    children: C(be, {
                      className: `framer-dx24e9`,
                      "data-framer-name": `Icon`,
                      layout: `position`,
                      layoutDependency: b,
                      layoutId: `bZc4YaflI`,
                      opacity: 1,
                      svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 3 5.5 L 7 9.5 L 11 5.5" fill="transparent" stroke-width="2" stroke="var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)) /* {&quot;name&quot;:&quot;Black&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                      svgContentId: 10313298405,
                      withExternalLayout: !0,
                      ...Sn(
                        {
                          pUszAIH4S: {
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14"><path d="M 3 5.5 L 7 9.5 L 11 5.5" fill="transparent" stroke-width="2" stroke="var(--token-7088359f-7c03-4c92-b3b4-21c58eb3e170, rgb(34, 34, 34)) /* {&quot;name&quot;:&quot;Black&quot;} */" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
                            svgContentId: 11190255107,
                          },
                        },
                        p,
                        _
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
          `.framer-p5edG.framer-fnabz2, .framer-p5edG .framer-fnabz2 { display: block; }`,
          `.framer-p5edG.framer-188xawm { cursor: pointer; gap: 2px; height: 14px; overflow: visible; position: relative; width: 14px; }`,
          `.framer-p5edG .framer-1sdwt1c { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }`,
          `.framer-p5edG .framer-dx24e9 { flex: none; height: 14px; left: calc(50.00000000000002% - 14px / 2); position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 14px; }`,
        ],
        `framer-p5edG`
      )),
      (Mn.displayName = `Nav/Caret Icon`),
      (Mn.defaultProps = { height: 14, width: 14 }),
      M(Mn, {
        variant: {
          options: [`UyHl1p0jF`, `pUszAIH4S`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: B.Enum,
        },
        SvZj1atfr: { title: `Click`, type: B.EventHandler },
      }),
      I(Mn, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function Pn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn = t(() => {
    (_(),
      N(),
      A(),
      o(),
      gt(),
      Nn(),
      (Fn = F(Mn)),
      (In = [`fA4XfInpp`, `hmrUryx1I`]),
      (Ln = `framer-huJa0`),
      (Rn = { fA4XfInpp: `framer-v-1rvq3t0`, hmrUryx1I: `framer-v-ntybn5` }),
      (zn = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (Bn = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (Vn = D.create(c)),
      (Hn = { Closed: `fA4XfInpp`, Open: `hmrUryx1I` }),
      (Un = ({ height: e, hover: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        DApvjrdfG: r ?? a.DApvjrdfG ?? `Product.`,
        PWSlWeqS6: t ?? a.PWSlWeqS6,
        variant: Hn[a.variant] ?? a.variant ?? `fA4XfInpp`,
      })),
      (Wn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Gn = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me(),
            s = Fe(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: f,
              PWSlWeqS6: p,
              DApvjrdfG: m,
              ...h
            } = Un(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: te,
              gestureVariant: ne,
              isLoading: y,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = qe({
              cycleOrder: In,
              defaultVariant: `fA4XfInpp`,
              ref: r,
              variant: f,
              variantClassNames: Rn,
            }),
            w = Wn(e, S),
            { activeVariantCallback: re, delay: ie } = He(g),
            ae = re(async (...e) => {
              if ((b({ isHovered: !0 }), p && (await p(...e)) === !1)) return !1;
            }),
            oe = re(async (...e) => {
              x(`fA4XfInpp`);
            }),
            se = H(Ln, yt);
          return C(O, {
            id: d ?? i,
            children: C(Vn, {
              animate: S,
              initial: !1,
              children: C(Bn, {
                value: zn,
                children: T(D.div, {
                  ...h,
                  ...te,
                  className: H(se, `framer-1rvq3t0`, u, _),
                  "data-framer-name": `Closed`,
                  "data-highlight": !0,
                  layoutDependency: w,
                  layoutId: `fA4XfInpp`,
                  onMouseEnter: ae,
                  ref: r,
                  style: { ...l },
                  ...Pn({ hmrUryx1I: { "data-framer-name": `Open` } }, g, ne),
                  children: [
                    C(Je, {
                      __fromCanvasComponent: !0,
                      children: C(c, {
                        children: C(D.p, {
                          className: `framer-styles-preset-1edo0ga`,
                          "data-styles-preset": `ilN_pt0Gn`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33)))`,
                          },
                          children: `Product.`,
                        }),
                      }),
                      className: `framer-1bj2ujy`,
                      fonts: [`Inter`],
                      layoutDependency: w,
                      layoutId: `seYyzrqMS`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                        "--framer-paragraph-spacing": `0px`,
                      },
                      text: m,
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                    C(U, {
                      height: 14,
                      y: (s?.y || 0) + (0 + ((s?.height || 14) - 0 - 14) / 2),
                      children: C(j, {
                        className: `framer-qvpr18-container`,
                        layoutDependency: w,
                        layoutId: `xRR0EtrK1-container`,
                        nodeId: `xRR0EtrK1`,
                        rendersWithMotion: !0,
                        scopeId: `jYU60PclW`,
                        children: C(Mn, {
                          height: `100%`,
                          id: `xRR0EtrK1`,
                          layoutId: `xRR0EtrK1`,
                          SvZj1atfr: oe,
                          variant: `UyHl1p0jF`,
                          width: `100%`,
                          ...Pn({ hmrUryx1I: { variant: `pUszAIH4S` } }, g, ne),
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
          `.framer-huJa0.framer-1mizaju, .framer-huJa0 .framer-1mizaju { display: block; }`,
          `.framer-huJa0.framer-1rvq3t0 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-huJa0 .framer-1bj2ujy { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-huJa0 .framer-qvpr18-container { flex: none; height: auto; position: relative; width: auto; }`,
          ..._t,
        ],
        `framer-huJa0`
      )),
      (Gn.displayName = `Nav/Dropdown`),
      (Gn.defaultProps = { height: 14, width: 88 }),
      M(Gn, {
        variant: {
          options: [`fA4XfInpp`, `hmrUryx1I`],
          optionTitles: [`Closed`, `Open`],
          title: `Variant`,
          type: B.Enum,
        },
        PWSlWeqS6: { title: `Hover`, type: B.EventHandler },
        DApvjrdfG: {
          defaultValue: `Product.`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
      }),
      I(
        Gn,
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
          ...Fn,
          ...ye(vt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function J(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qn,
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
  ir = t(() => {
    (_(),
      N(),
      A(),
      o(),
      Bt(),
      (qn = F(K)),
      (Jn = [`Cg1KD7DMv`, `TlsjM51NR`]),
      (Yn = `framer-hQjvK`),
      (Xn = { Cg1KD7DMv: `framer-v-160n67d`, TlsjM51NR: `framer-v-1r8s285` }),
      (Zn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Qn = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      ($n = D.create(c)),
      (er = { Desktop: `Cg1KD7DMv`, Responsive: `TlsjM51NR` }),
      (tr = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        qhojt5Bqi: e ?? i.qhojt5Bqi,
        variant: er[i.variant] ?? i.variant ?? `Cg1KD7DMv`,
      })),
      (nr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rr = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me(),
            s = Fe(),
            { style: c, className: l, layoutId: u, variant: d, qhojt5Bqi: f, ...p } = tr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: te,
              setGestureState: ne,
              setVariant: y,
              variants: b,
            } = qe({
              cycleOrder: Jn,
              defaultVariant: `Cg1KD7DMv`,
              ref: r,
              variant: d,
              variantClassNames: Xn,
            }),
            x = nr(e, b),
            { activeVariantCallback: S, delay: w } = He(m),
            re = S(async (...e) => {
              if ((ne({ isPressed: !1 }), f && (await f(...e)) === !1)) return !1;
            }),
            ie = H(Yn);
          Te();
          let ae = () => m !== `TlsjM51NR`,
            oe = () => m === `TlsjM51NR`;
          return C(O, {
            id: u ?? i,
            children: C($n, {
              animate: b,
              initial: !1,
              children: C(Qn, {
                value: Zn,
                children: T(D.div, {
                  ...p,
                  ..._,
                  className: H(ie, `framer-160n67d`, l, h),
                  "data-framer-name": `Desktop`,
                  "data-highlight": !0,
                  layoutDependency: x,
                  layoutId: `Cg1KD7DMv`,
                  onTap: re,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 6,
                    borderBottomRightRadius: 6,
                    borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                    ...c,
                  },
                  variants: { TlsjM51NR: { backgroundColor: `rgba(0, 0, 0, 0)` } },
                  ...J({ TlsjM51NR: { "data-framer-name": `Responsive` } }, m, v),
                  children: [
                    C(D.div, {
                      className: `framer-1y44zz`,
                      "data-framer-name": `Link Wrapper`,
                      layoutDependency: x,
                      layoutId: `EX9wNemKN`,
                      children: T(D.div, {
                        className: `framer-qli8oi`,
                        "data-framer-name": `Links`,
                        layoutDependency: x,
                        layoutId: `eA32V8G8G`,
                        children: [
                          C(R, {
                            links: [
                              {
                                href: { hash: `:F0TAo7Gf5`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:F0TAo7Gf5`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 0,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-rls0ee-container`,
                                  layoutDependency: x,
                                  layoutId: `RnmL_Tmyj-container`,
                                  nodeId: `RnmL_Tmyj`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `RnmL_Tmyj`,
                                    jCPJ6vY2r: `Feature`,
                                    layoutId: `RnmL_Tmyj`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              {
                                href: { hash: `:DdZhzy_GM`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:DdZhzy_GM`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 32,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 32 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-mhzad1-container`,
                                  layoutDependency: x,
                                  layoutId: `Zl2CzUZlK-container`,
                                  nodeId: `Zl2CzUZlK`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `Zl2CzUZlK`,
                                    jCPJ6vY2r: `Curriculum`,
                                    layoutId: `Zl2CzUZlK`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              {
                                href: { hash: `:BllTPa7ax`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:BllTPa7ax`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 64,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 64 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-1e6he97-container`,
                                  layoutDependency: x,
                                  layoutId: `USivLh771-container`,
                                  nodeId: `USivLh771`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `USivLh771`,
                                    jCPJ6vY2r: `Testimoial`,
                                    layoutId: `USivLh771`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              {
                                href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 96,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 96 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-92cnhf-container`,
                                  layoutDependency: x,
                                  layoutId: `PBmbLs7qS-container`,
                                  nodeId: `PBmbLs7qS`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `PBmbLs7qS`,
                                    jCPJ6vY2r: `Pricing`,
                                    layoutId: `PBmbLs7qS`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                        ],
                      }),
                    }),
                    ae() &&
                      C(D.div, {
                        className: `framer-5ucdqv`,
                        "data-framer-name": `Line`,
                        layoutDependency: x,
                        layoutId: `DQsTZIehI`,
                        style: {
                          backgroundColor: `var(--token-554f469f-22cb-46cc-93ad-4d535dc99266, rgb(224, 224, 224))`,
                        },
                      }),
                    C(D.div, {
                      className: `framer-5vllx4`,
                      "data-framer-name": `Link Wrapper`,
                      layoutDependency: x,
                      layoutId: `QwCIgte6T`,
                      children: T(D.div, {
                        className: `framer-1n6bcgt`,
                        "data-framer-name": `Links`,
                        layoutDependency: x,
                        layoutId: `pAwI9tKGF`,
                        children: [
                          C(R, {
                            links: [
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `terms-and-conditions` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `SqPaOGLZw`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `terms-and-conditions` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `SqPaOGLZw`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 0,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 132 + 0 + 0 + 0 + 0 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-l7g1ns-container`,
                                  layoutDependency: x,
                                  layoutId: `JLwok6Z9E-container`,
                                  nodeId: `JLwok6Z9E`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `JLwok6Z9E`,
                                    jCPJ6vY2r: `Terms & conditions`,
                                    layoutId: `JLwok6Z9E`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `privacy-policy` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `nYAl7t6zS`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `privacy-policy` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `nYAl7t6zS`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 32,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 132 + 0 + 0 + 0 + 32 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-1mpl2gy-container`,
                                  layoutDependency: x,
                                  layoutId: `FXTfcggPj-container`,
                                  nodeId: `FXTfcggPj`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `FXTfcggPj`,
                                    jCPJ6vY2r: `Privacy policy`,
                                    layoutId: `FXTfcggPj`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `refund-policy` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `X1ubmTowH`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                              {
                                href: {
                                  pathVariables: { y3TE1Ijvp: `refund-policy` },
                                  unresolvedPathSlugs: {
                                    y3TE1Ijvp: {
                                      collectionId: `hbTJSza8U`,
                                      collectionItemId: `X1ubmTowH`,
                                    },
                                  },
                                  webPageId: `zSKArY_ps`,
                                },
                                implicitPathVariables: void 0,
                              },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 64,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 132 + 0 + 0 + 0 + 64 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-16osvvp-container`,
                                  layoutDependency: x,
                                  layoutId: `TNxkLVHKE-container`,
                                  nodeId: `TNxkLVHKE`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `TNxkLVHKE`,
                                    jCPJ6vY2r: `Refund policy`,
                                    layoutId: `TNxkLVHKE`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          C(R, {
                            links: [
                              { href: { webPageId: `R5WzJToo0` }, implicitPathVariables: void 0 },
                              { href: { webPageId: `R5WzJToo0` }, implicitPathVariables: void 0 },
                            ],
                            children: (e) =>
                              C(U, {
                                height: 16,
                                y: (s?.y || 0) + 30 + 0 + 0 + 0 + 96,
                                ...J(
                                  { TlsjM51NR: { y: (s?.y || 0) + 0 + 132 + 0 + 0 + 0 + 96 } },
                                  m,
                                  v
                                ),
                                children: C(j, {
                                  className: `framer-jx8ro9-container`,
                                  layoutDependency: x,
                                  layoutId: `EjkmskAnp-container`,
                                  nodeId: `EjkmskAnp`,
                                  rendersWithMotion: !0,
                                  scopeId: `knk1IoJuG`,
                                  children: C(K, {
                                    height: `100%`,
                                    id: `EjkmskAnp`,
                                    jCPJ6vY2r: `404`,
                                    layoutId: `EjkmskAnp`,
                                    variant: `zns_HgpwM`,
                                    width: `100%`,
                                    XwPzAT4AE: e[0],
                                    ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
                                  }),
                                }),
                              }),
                          }),
                          oe() &&
                            C(R, {
                              links: [
                                { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                                { href: { webPageId: `lAVKJFGgS` }, implicitPathVariables: void 0 },
                              ],
                              children: (e) =>
                                C(U, {
                                  ...J(
                                    {
                                      TlsjM51NR: {
                                        height: 16,
                                        y: (s?.y || 0) + 0 + 132 + 0 + 0 + 0 + 128,
                                      },
                                    },
                                    m,
                                    v
                                  ),
                                  children: C(j, {
                                    className: `framer-njn8t9-container`,
                                    layoutDependency: x,
                                    layoutId: `ZTtkFt7Ms-container`,
                                    nodeId: `ZTtkFt7Ms`,
                                    rendersWithMotion: !0,
                                    scopeId: `knk1IoJuG`,
                                    children: C(K, {
                                      height: `100%`,
                                      id: `ZTtkFt7Ms`,
                                      jCPJ6vY2r: `Enroll Today`,
                                      layoutId: `ZTtkFt7Ms`,
                                      variant: `zns_HgpwM`,
                                      width: `100%`,
                                      XwPzAT4AE: e[0],
                                      ...J({ TlsjM51NR: { XwPzAT4AE: e[1] } }, m, v),
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
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-hQjvK.framer-5r34nd, .framer-hQjvK .framer-5r34nd { display: block; }`,
          `.framer-hQjvK.framer-160n67d { align-content: flex-start; align-items: flex-start; cursor: default; display: flex; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 30px; position: relative; width: 450px; }`,
          `.framer-hQjvK .framer-1y44zz, .framer-hQjvK .framer-5vllx4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 2; }`,
          `.framer-hQjvK .framer-qli8oi, .framer-hQjvK .framer-1n6bcgt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-hQjvK .framer-rls0ee-container, .framer-hQjvK .framer-mhzad1-container, .framer-hQjvK .framer-1e6he97-container, .framer-hQjvK .framer-92cnhf-container, .framer-hQjvK .framer-l7g1ns-container, .framer-hQjvK .framer-1mpl2gy-container, .framer-hQjvK .framer-16osvvp-container, .framer-hQjvK .framer-jx8ro9-container, .framer-hQjvK .framer-njn8t9-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-hQjvK .framer-5ucdqv { flex: none; height: 118px; overflow: visible; position: relative; width: 1px; }`,
          `.framer-hQjvK.framer-v-1r8s285.framer-160n67d { flex-direction: column; gap: 20px; justify-content: flex-start; padding: 0px; width: 350px; }`,
        ],
        `framer-hQjvK`
      )),
      (rr.displayName = `Nav/Links: Essentials`),
      (rr.defaultProps = { height: 178, width: 450 }),
      M(rr, {
        variant: {
          options: [`Cg1KD7DMv`, `TlsjM51NR`],
          optionTitles: [`Desktop`, `Responsive`],
          title: `Variant`,
          type: B.Enum,
        },
        qhojt5Bqi: { title: `Click`, type: B.EventHandler },
      }),
      I(rr, [{ explicitInter: !0, fonts: [] }, ...qn], { supportsExplicitInterCodegen: !0 }));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ar,
  or,
  sr,
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
  X,
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
  Z,
  Or = t(() => {
    (_(),
      N(),
      A(),
      o(),
      St(),
      Bt(),
      Tt(),
      Kn(),
      ir(),
      (ar = F(K)),
      (or = F(Gn)),
      (sr = F(rr)),
      (cr = Ye(D.div)),
      (lr = he(De(K, { nodeId: `vQuujaJjB`, override: Ct, scopeId: `HkmfLV6tE` }), Dt)),
      (ur = he(De(K, { nodeId: `kDDjSrq7I`, override: Ct, scopeId: `HkmfLV6tE` }), Dt)),
      (dr = he(De(K, { nodeId: `CNGr67VXj`, override: wt, scopeId: `HkmfLV6tE` }), Dt)),
      (fr = F(Et)),
      (pr = [`zkLCGLYDw`, `vfV49TVos`, `fqTJWfruG`, `Mtq8Jujrk`, `lpyseDqrh`]),
      (mr = `framer-KclMQ`),
      (hr = {
        fqTJWfruG: `framer-v-eyy2u1`,
        lpyseDqrh: `framer-v-wq9p1y`,
        Mtq8Jujrk: `framer-v-1du8dtb`,
        vfV49TVos: `framer-v-11qqatt`,
        zkLCGLYDw: `framer-v-uizz9l`,
      }),
      (gr = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: `spring` }),
      (_r = { damping: 40, delay: 0, mass: 1, stiffness: 600, type: `spring` }),
      (X = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (yr = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: vr,
        x: 0,
        y: 0,
      }),
      (br = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: vr,
        x: 0,
        y: 0,
      }),
      (xr = {
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
      (Sr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
        let [i, a] = Le({ blockDocumentScrolling: t, dismissWithEsc: r && n });
        return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
      }),
      (Cr = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (wr = {
        "Large Menu": `zkLCGLYDw`,
        "Phone Closed": `Mtq8Jujrk`,
        "Phone Open": `lpyseDqrh`,
        "Tablet Closed": `vfV49TVos`,
        "Tablet Open": `fqTJWfruG`,
      }),
      (Tr = D.create(c)),
      (Er = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: wr[r.variant] ?? r.variant ?? `zkLCGLYDw`,
      })),
      (Dr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me(),
            s = Fe(),
            { style: c, className: l, layoutId: u, variant: d, ...f } = Er(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: g,
              gestureVariant: _,
              isLoading: v,
              setGestureState: te,
              setVariant: y,
              variants: b,
            } = qe({
              cycleOrder: pr,
              defaultVariant: `zkLCGLYDw`,
              ref: r,
              variant: d,
              variantClassNames: hr,
            }),
            x = Dr(e, b),
            { activeVariantCallback: S, delay: w } = He(p),
            re = S(async (...e) => {
              y(`fqTJWfruG`);
            }),
            ie = S(async (...e) => {
              y(`vfV49TVos`);
            }),
            ae = S(async (...e) => {
              y(`lpyseDqrh`);
            }),
            oe = S(async (...e) => {
              y(`Mtq8Jujrk`);
            }),
            se = ({ overlay: e }) =>
              S(async (...t) => {
                e.show();
              }),
            ce = H(mr),
            le = () => !![`vfV49TVos`, `fqTJWfruG`, `Mtq8Jujrk`, `lpyseDqrh`].includes(p),
            ue = () => ![`vfV49TVos`, `Mtq8Jujrk`].includes(p);
          Te();
          let k = () => ![`fqTJWfruG`, `lpyseDqrh`].includes(p),
            A = E(null),
            fe = E(null),
            pe = () => !![`fqTJWfruG`, `lpyseDqrh`].includes(p),
            me = () => p === `lpyseDqrh`,
            he = () => p === `fqTJWfruG`,
            ge = () => ![`vfV49TVos`, `fqTJWfruG`, `Mtq8Jujrk`, `lpyseDqrh`].includes(p);
          return C(O, {
            id: u ?? i,
            children: C(Tr, {
              animate: b,
              initial: !1,
              children: C(Cr, {
                value: gr,
                children: T(D.nav, {
                  ...f,
                  ...g,
                  className: H(ce, `framer-uizz9l`, l, m),
                  "data-framer-name": `Large Menu`,
                  "data-hide-scrollbars": !0,
                  layoutDependency: x,
                  layoutId: `zkLCGLYDw`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    boxShadow: `inset 0px 4px 4px 0px var(--token-4b8bacc3-8307-4729-a576-992a36088772, rgba(33, 33, 33, 0.1))`,
                    ...c,
                  },
                  variants: {
                    fqTJWfruG: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    lpyseDqrh: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    Mtq8Jujrk: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                    vfV49TVos: {
                      borderBottomLeftRadius: 0,
                      borderBottomRightRadius: 0,
                      borderTopLeftRadius: 0,
                      borderTopRightRadius: 0,
                    },
                  },
                  ...Y(
                    {
                      fqTJWfruG: { "data-framer-name": `Tablet Open` },
                      lpyseDqrh: { "data-framer-name": `Phone Open` },
                      Mtq8Jujrk: { "data-framer-name": `Phone Closed` },
                      vfV49TVos: { "data-framer-name": `Tablet Closed` },
                    },
                    p,
                    _
                  ),
                  children: [
                    T(D.div, {
                      className: `framer-1fqwana`,
                      "data-framer-name": `Name`,
                      layoutDependency: x,
                      layoutId: `I_6kZHMo0`,
                      children: [
                        C(D.div, {
                          className: `framer-1gn5num`,
                          "data-framer-name": `Logo`,
                          layoutDependency: x,
                          layoutId: `wXxCUWx11`,
                          children: C(Ve, {
                            href: { webPageId: `augiA20Il` },
                            motionChild: !0,
                            nodeId: `Qnd7DGh0P`,
                            openInNewTab: !1,
                            scopeId: `HkmfLV6tE`,
                            children: C(z, {
                              as: `a`,
                              background: {
                                alt: `Logo`,
                                fit: `fit`,
                                loading: G(
                                  (s?.y || 0) + (10 + ((s?.height || 72) - 20 - 40) / 2) + 0 + 0
                                ),
                                pixelHeight: 36,
                                pixelWidth: 143,
                                positionX: `center`,
                                positionY: `center`,
                                sizes: `134px`,
                                src: `../../assets/images/qqbOgLEf0be4firOf2gaHvyJk3s.svg`,
                              },
                              className: `framer-12kecx framer-360g76`,
                              "data-framer-name": `Logo`,
                              layoutDependency: x,
                              layoutId: `Qnd7DGh0P`,
                              ...Y(
                                {
                                  fqTJWfruG: {
                                    background: {
                                      alt: `Logo`,
                                      fit: `fit`,
                                      loading: G((s?.y || 0) + 0 + 0 + 22 + 0),
                                      pixelHeight: 36,
                                      pixelWidth: 143,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `134px`,
                                      src: `../../assets/images/qqbOgLEf0be4firOf2gaHvyJk3s.svg`,
                                    },
                                  },
                                  lpyseDqrh: {
                                    background: {
                                      alt: `Logo`,
                                      fit: `fit`,
                                      loading: G((s?.y || 0) + 0 + 0 + 22 + 0),
                                      pixelHeight: 36,
                                      pixelWidth: 143,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `134px`,
                                      src: `../../assets/images/qqbOgLEf0be4firOf2gaHvyJk3s.svg`,
                                    },
                                  },
                                  Mtq8Jujrk: {
                                    background: {
                                      alt: `Logo`,
                                      fit: `fit`,
                                      loading: G(
                                        (s?.y || 0) +
                                          20 +
                                          (((s?.height || 84) - 40 - 44) / 2 + 0 + 0) +
                                          2 +
                                          0
                                      ),
                                      pixelHeight: 36,
                                      pixelWidth: 143,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `134px`,
                                      src: `../../assets/images/qqbOgLEf0be4firOf2gaHvyJk3s.svg`,
                                    },
                                  },
                                  vfV49TVos: {
                                    background: {
                                      alt: `Logo`,
                                      fit: `fit`,
                                      loading: G(
                                        (s?.y || 0) +
                                          (20 + ((s?.height || 84) - 40 - 44) / 2) +
                                          2 +
                                          0
                                      ),
                                      pixelHeight: 36,
                                      pixelWidth: 143,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `134px`,
                                      src: `../../assets/images/qqbOgLEf0be4firOf2gaHvyJk3s.svg`,
                                    },
                                  },
                                },
                                p,
                                _
                              ),
                            }),
                          }),
                        }),
                        le() &&
                          T(D.div, {
                            className: `framer-dfs5fo`,
                            "data-framer-name": `Icon`,
                            layoutDependency: x,
                            layoutId: `SFSZ5eGk0`,
                            ...Y(
                              {
                                fqTJWfruG: { "data-highlight": !0, onTap: ie },
                                lpyseDqrh: { "data-highlight": !0, onTap: oe },
                                Mtq8Jujrk: { "data-highlight": !0, onTap: ae },
                                vfV49TVos: { "data-highlight": !0, onTap: re },
                              },
                              p,
                              _
                            ),
                            children: [
                              C(D.div, {
                                className: `framer-h282gc`,
                                "data-framer-name": `Bottom`,
                                layoutDependency: x,
                                layoutId: `WDnaYrrHp`,
                                style: {
                                  backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  fqTJWfruG: { rotate: -45 },
                                  lpyseDqrh: { rotate: -45 },
                                  Mtq8Jujrk: { rotate: 0 },
                                },
                              }),
                              C(D.div, {
                                className: `framer-1hs1bl3`,
                                "data-framer-name": `Top`,
                                layoutDependency: x,
                                layoutId: `aSRJOogM4`,
                                style: {
                                  backgroundColor: `var(--token-859ca383-5fee-4317-bcbb-704e1efeddd5, rgb(33, 33, 33))`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                  rotate: 0,
                                },
                                variants: {
                                  fqTJWfruG: { rotate: 45 },
                                  lpyseDqrh: { rotate: 45 },
                                  Mtq8Jujrk: { rotate: 0 },
                                },
                              }),
                            ],
                          }),
                      ],
                    }),
                    ue() &&
                      C(D.div, {
                        className: `framer-18px60o`,
                        "data-framer-name": `Menu Wrapper`,
                        layoutDependency: x,
                        layoutId: `xO4MSVmvE`,
                        children: C(Cr, {
                          ...Y({ fqTJWfruG: { value: _r }, lpyseDqrh: { value: _r } }, p, _),
                          children: T(D.div, {
                            className: `framer-4opcjv`,
                            "data-framer-name": `Links`,
                            "data-hide-scrollbars": !0,
                            layoutDependency: x,
                            layoutId: `cGzivjNd3`,
                            style: {
                              "--border-bottom-width": `0px`,
                              "--border-color": `rgba(0, 0, 0, 0)`,
                              "--border-left-width": `0px`,
                              "--border-right-width": `0px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0px`,
                            },
                            variants: {
                              fqTJWfruG: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                              lpyseDqrh: {
                                "--border-bottom-width": `0px`,
                                "--border-color": `var(--token-17ed2c25-75ab-4bc6-9b10-3f3f6f1c8680, rgba(255, 255, 255, 0.16))`,
                                "--border-left-width": `0px`,
                                "--border-right-width": `0px`,
                                "--border-style": `solid`,
                                "--border-top-width": `1px`,
                              },
                            },
                            ...Y(
                              {
                                fqTJWfruG: { "data-border": !0, "data-highlight": !0, onTap: ie },
                                lpyseDqrh: { "data-border": !0, "data-highlight": !0, onTap: oe },
                              },
                              p,
                              _
                            ),
                            children: [
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 0 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 0 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-1y869u4-container`,
                                      layoutDependency: x,
                                      layoutId: `PdKz_khJK-container`,
                                      nodeId: `PdKz_khJK`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `PdKz_khJK`,
                                        jCPJ6vY2r: `Home`,
                                        layoutId: `PdKz_khJK`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: { hash: `:DdZhzy_GM`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:DdZhzy_GM`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { hash: `:DdZhzy_GM`, webPageId: `augiA20Il` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 36 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 36 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-ah6o8m-container`,
                                      layoutDependency: x,
                                      layoutId: `e2n23Biw0-container`,
                                      nodeId: `e2n23Biw0`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `e2n23Biw0`,
                                        jCPJ6vY2r: `Curriculum`,
                                        layoutId: `e2n23Biw0`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              k() &&
                                C(Sr, {
                                  blockDocumentScrolling: !1,
                                  dismissWithEsc: !1,
                                  children: (e) =>
                                    C(ne, {
                                      children: C(U, {
                                        height: 14,
                                        y:
                                          (s?.y || 0) +
                                          (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                          0 +
                                          0,
                                        children: T(j, {
                                          className: `framer-1vryerh-container`,
                                          id: `${u}-1vryerh`,
                                          layoutDependency: x,
                                          layoutId: `o_ao5KPJe-container`,
                                          nodeId: `o_ao5KPJe`,
                                          ref: A,
                                          rendersWithMotion: !0,
                                          scopeId: `HkmfLV6tE`,
                                          children: [
                                            C(Gn, {
                                              DApvjrdfG: `Essentials`,
                                              height: `100%`,
                                              id: `o_ao5KPJe`,
                                              layoutId: `o_ao5KPJe`,
                                              PWSlWeqS6: se({ overlay: e }),
                                              variant: X(
                                                e.visible && `hmrUryx1I`,
                                                e.visible ? `hmrUryx1I` : `fA4XfInpp`
                                              ),
                                              width: `100%`,
                                            }),
                                            C(de, {
                                              children:
                                                e.visible &&
                                                C(ze, {
                                                  alignment: `center`,
                                                  anchorRef: A,
                                                  className: H(ce, m),
                                                  collisionDetection: !0,
                                                  collisionDetectionPadding: 20,
                                                  "data-framer-portal-id": `${u}-1vryerh`,
                                                  offsetX: 0,
                                                  offsetY: 37,
                                                  onDismiss: e.hide,
                                                  placement: `bottom`,
                                                  safeArea: !0,
                                                  zIndex: 11,
                                                  children: C(cr, {
                                                    __perspectiveFX: !1,
                                                    __smartComponentFX: !0,
                                                    __targetOpacity: 1,
                                                    animate: br,
                                                    className: `framer-1chazbv`,
                                                    "data-border": !0,
                                                    exit: yr,
                                                    initial: xr,
                                                    layoutDependency: x,
                                                    layoutId: `Te3NMbJ5M`,
                                                    ref: fe,
                                                    role: `dialog`,
                                                    style: {
                                                      "--border-bottom-width": `1px`,
                                                      "--border-color": `var(--token-ba67796d-5133-462b-8ae0-a73903c6d406, rgba(33, 33, 33, 0.14))`,
                                                      "--border-left-width": `1px`,
                                                      "--border-right-width": `1px`,
                                                      "--border-style": `solid`,
                                                      "--border-top-width": `1px`,
                                                      backgroundColor: `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                                      borderBottomLeftRadius: 10,
                                                      borderBottomRightRadius: 10,
                                                      borderTopLeftRadius: 10,
                                                      borderTopRightRadius: 10,
                                                      boxShadow: `0px 10px 20px 0px rgba(0, 0, 0, 0.05)`,
                                                    },
                                                    children: C(U, {
                                                      children: C(j, {
                                                        className: `framer-hs56tf-container`,
                                                        inComponentSlot: !0,
                                                        layoutDependency: x,
                                                        layoutId: `ssJIgQcMh-container`,
                                                        nodeId: `ssJIgQcMh`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `HkmfLV6tE`,
                                                        children: C(rr, {
                                                          height: `100%`,
                                                          id: `ssJIgQcMh`,
                                                          layoutId: `ssJIgQcMh`,
                                                          variant: X(`Cg1KD7DMv`),
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
                                    }),
                                }),
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `lAVKJFGgS` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 72 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 72 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-9ixbsk-container`,
                                      layoutDependency: x,
                                      layoutId: `eXQtcKxYY-container`,
                                      nodeId: `eXQtcKxYY`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(K, {
                                        height: `100%`,
                                        id: `eXQtcKxYY`,
                                        jCPJ6vY2r: `Contact`,
                                        layoutId: `eXQtcKxYY`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `O1MU31CkI` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `O1MU31CkI` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `O1MU31CkI` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 108 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 108 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-1bfj8w3-container`,
                                      layoutDependency: x,
                                      layoutId: `vQuujaJjB-container`,
                                      nodeId: `vQuujaJjB`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(lr, {
                                        height: `100%`,
                                        id: `vQuujaJjB`,
                                        jCPJ6vY2r: `Sign Up`,
                                        layoutId: `vQuujaJjB`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `KyoFmDI9b` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `KyoFmDI9b` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `KyoFmDI9b` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 144 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 144 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-1noi63r-container`,
                                      layoutDependency: x,
                                      layoutId: `kDDjSrq7I-container`,
                                      nodeId: `kDDjSrq7I`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(ur, {
                                        height: `100%`,
                                        id: `kDDjSrq7I`,
                                        jCPJ6vY2r: `Sign In`,
                                        layoutId: `kDDjSrq7I`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              C(R, {
                                links: [
                                  {
                                    href: { webPageId: `DHYZ8McyT` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `DHYZ8McyT` },
                                    implicitPathVariables: void 0,
                                  },
                                  {
                                    href: { webPageId: `DHYZ8McyT` },
                                    implicitPathVariables: void 0,
                                  },
                                ],
                                children: (e) =>
                                  C(U, {
                                    height: 16,
                                    y:
                                      (s?.y || 0) +
                                      (10 + ((s?.height || 72) - 20 - 16) / 2) +
                                      0 +
                                      0,
                                    ...Y(
                                      {
                                        fqTJWfruG: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 180 },
                                        lpyseDqrh: { y: (s?.y || 0) + 0 + 84 + 0 + 10 + 180 },
                                      },
                                      p,
                                      _
                                    ),
                                    children: C(j, {
                                      className: `framer-37lfmu-container`,
                                      layoutDependency: x,
                                      layoutId: `CNGr67VXj-container`,
                                      nodeId: `CNGr67VXj`,
                                      rendersWithMotion: !0,
                                      scopeId: `HkmfLV6tE`,
                                      children: C(dr, {
                                        height: `100%`,
                                        id: `CNGr67VXj`,
                                        jCPJ6vY2r: `Account`,
                                        layoutId: `CNGr67VXj`,
                                        variant: X(`zns_HgpwM`),
                                        width: `100%`,
                                        XwPzAT4AE: e[0],
                                        ...Y(
                                          {
                                            fqTJWfruG: { XwPzAT4AE: e[1] },
                                            lpyseDqrh: { XwPzAT4AE: e[2] },
                                          },
                                          p,
                                          _
                                        ),
                                      }),
                                    }),
                                  }),
                              }),
                              pe() &&
                                C(U, {
                                  ...Y(
                                    {
                                      fqTJWfruG: {
                                        height: 178,
                                        width: `calc(max(${s?.width || `100vw`}, 1px) - 60px)`,
                                        y: (s?.y || 0) + 0 + 84 + 0 + 10 + 216,
                                      },
                                      lpyseDqrh: {
                                        height: 178,
                                        width: `calc(max(${s?.width || `100vw`}, 1px) - 40px)`,
                                        y: (s?.y || 0) + 0 + 84 + 0 + 10 + 216,
                                      },
                                    },
                                    p,
                                    _
                                  ),
                                  children: C(j, {
                                    className: `framer-1284uxs-container`,
                                    layoutDependency: x,
                                    layoutId: `Lfki97l_7-container`,
                                    nodeId: `Lfki97l_7`,
                                    rendersWithMotion: !0,
                                    scopeId: `HkmfLV6tE`,
                                    children: C(rr, {
                                      height: `100%`,
                                      id: `Lfki97l_7`,
                                      layoutId: `Lfki97l_7`,
                                      style: { width: `100%` },
                                      variant: X(`Cg1KD7DMv`),
                                      width: `100%`,
                                      ...Y(
                                        {
                                          fqTJWfruG: { variant: X(`TlsjM51NR`) },
                                          lpyseDqrh: { variant: X(`TlsjM51NR`) },
                                        },
                                        p,
                                        _
                                      ),
                                    }),
                                  }),
                                }),
                              me() &&
                                C(R, {
                                  links: [
                                    {
                                      href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    C(U, {
                                      ...Y(
                                        {
                                          lpyseDqrh: {
                                            height: 52,
                                            y: (s?.y || 0) + 0 + 84 + 0 + 10 + 414,
                                          },
                                        },
                                        p,
                                        _
                                      ),
                                      children: C(j, {
                                        className: `framer-uf3um1-container`,
                                        layoutDependency: x,
                                        layoutId: `W5oVfBCyU-container`,
                                        nodeId: `W5oVfBCyU`,
                                        rendersWithMotion: !0,
                                        scopeId: `HkmfLV6tE`,
                                        children: C(Et, {
                                          BtsQvUJh8: `Enroll today`,
                                          FoLVmcAEo: e[0],
                                          height: `100%`,
                                          id: `W5oVfBCyU`,
                                          layoutId: `W5oVfBCyU`,
                                          variant: X(`DbpjEfRXU`),
                                          width: `100%`,
                                          ...Y({ lpyseDqrh: { FoLVmcAEo: e[1] } }, p, _),
                                        }),
                                      }),
                                    }),
                                }),
                              he() &&
                                C(R, {
                                  links: [
                                    {
                                      href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                    {
                                      href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                                      implicitPathVariables: void 0,
                                    },
                                  ],
                                  children: (e) =>
                                    C(U, {
                                      ...Y(
                                        {
                                          fqTJWfruG: {
                                            height: 52,
                                            y: (s?.y || 0) + 0 + 84 + 0 + 10 + 414,
                                          },
                                        },
                                        p,
                                        _
                                      ),
                                      children: C(j, {
                                        className: `framer-nplfre-container`,
                                        layoutDependency: x,
                                        layoutId: `YK6shnl_L-container`,
                                        nodeId: `YK6shnl_L`,
                                        rendersWithMotion: !0,
                                        scopeId: `HkmfLV6tE`,
                                        children: C(Et, {
                                          BtsQvUJh8: `Enroll today`,
                                          FoLVmcAEo: e[0],
                                          height: `100%`,
                                          id: `YK6shnl_L`,
                                          layoutId: `YK6shnl_L`,
                                          variant: X(`DbpjEfRXU`),
                                          width: `100%`,
                                          ...Y({ fqTJWfruG: { FoLVmcAEo: e[1] } }, p, _),
                                        }),
                                      }),
                                    }),
                                }),
                            ],
                          }),
                        }),
                      }),
                    ge() &&
                      C(R, {
                        links: [
                          {
                            href: { hash: `:ft_MhHSmH`, webPageId: `augiA20Il` },
                            implicitPathVariables: void 0,
                          },
                        ],
                        children: (e) =>
                          C(U, {
                            height: 52,
                            y: (s?.y || 0) + (10 + ((s?.height || 72) - 20 - 52) / 2),
                            children: C(j, {
                              className: `framer-kun0zn-container`,
                              layoutDependency: x,
                              layoutId: `thEgIg3CR-container`,
                              nodeId: `thEgIg3CR`,
                              rendersWithMotion: !0,
                              scopeId: `HkmfLV6tE`,
                              children: C(Et, {
                                BtsQvUJh8: `Enroll today`,
                                FoLVmcAEo: e[0],
                                height: `100%`,
                                id: `thEgIg3CR`,
                                layoutId: `thEgIg3CR`,
                                variant: X(`DbpjEfRXU`),
                                width: `100%`,
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
          `.framer-KclMQ.framer-360g76, .framer-KclMQ .framer-360g76 { display: block; }`,
          `.framer-KclMQ.framer-uizz9l { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: flex-start; overflow: visible; padding: 10px; position: relative; width: 1200px; }`,
          `.framer-KclMQ .framer-1fqwana { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-KclMQ .framer-1gn5num { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-KclMQ .framer-12kecx { flex: none; height: 40px; position: relative; text-decoration: none; width: 134px; }`,
          `.framer-KclMQ .framer-dfs5fo { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }`,
          `.framer-KclMQ .framer-h282gc { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KclMQ .framer-1hs1bl3 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KclMQ .framer-18px60o { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 64px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-KclMQ .framer-4opcjv { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-end; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-KclMQ .framer-1y869u4-container, .framer-KclMQ .framer-ah6o8m-container, .framer-KclMQ .framer-1vryerh-container, .framer-KclMQ .framer-9ixbsk-container, .framer-KclMQ .framer-1bfj8w3-container, .framer-KclMQ .framer-1noi63r-container, .framer-KclMQ .framer-37lfmu-container, .framer-KclMQ .framer-uf3um1-container, .framer-KclMQ .framer-nplfre-container, .framer-KclMQ .framer-kun0zn-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KclMQ .framer-1chazbv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KclMQ .framer-hs56tf-container { cursor: pointer; flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-KclMQ .framer-1284uxs-container { flex: none; height: auto; position: relative; width: 200px; }`,
          `.framer-KclMQ.framer-v-11qqatt.framer-uizz9l { gap: 4px; justify-content: center; overflow: hidden; padding: 20px 30px 20px 30px; width: 768px; }`,
          `.framer-KclMQ.framer-v-11qqatt .framer-1fqwana { flex: 1 0 0px; gap: unset; justify-content: space-between; order: 0; width: 1px; z-index: 2; }`,
          `.framer-KclMQ.framer-v-11qqatt .framer-1gn5num, .framer-KclMQ.framer-v-eyy2u1 .framer-1gn5num, .framer-KclMQ.framer-v-eyy2u1 .framer-1y869u4-container, .framer-KclMQ.framer-v-1du8dtb .framer-1gn5num, .framer-KclMQ.framer-v-wq9p1y .framer-1gn5num, .framer-KclMQ.framer-v-wq9p1y .framer-1y869u4-container { order: 0; }`,
          `.framer-KclMQ.framer-v-11qqatt .framer-dfs5fo, .framer-KclMQ.framer-v-eyy2u1 .framer-dfs5fo, .framer-KclMQ.framer-v-1du8dtb .framer-dfs5fo, .framer-KclMQ.framer-v-wq9p1y .framer-dfs5fo { cursor: pointer; height: 44px; order: 1; width: 44px; }`,
          `.framer-KclMQ.framer-v-eyy2u1.framer-uizz9l { flex-direction: column; gap: 0px; padding: 0px; width: 768px; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-1fqwana { gap: unset; justify-content: space-between; order: 0; padding: 20px 30px 20px 30px; width: 100%; z-index: 2; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-h282gc, .framer-KclMQ.framer-v-eyy2u1 .framer-1hs1bl3, .framer-KclMQ.framer-v-wq9p1y .framer-h282gc, .framer-KclMQ.framer-v-wq9p1y .framer-1hs1bl3 { top: calc(50.00000000000002% - 2px / 2); }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-18px60o, .framer-KclMQ.framer-v-wq9p1y .framer-18px60o { flex: none; height: calc(var(--framer-viewport-height, 100vh) * 1); justify-content: flex-start; order: 1; width: 100%; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-4opcjv { cursor: default; flex: 1 0 0px; flex-direction: column; gap: 20px; height: 100%; justify-content: flex-start; overflow: auto; padding: 10px 30px 120px 30px; width: 1px; z-index: 2; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-ah6o8m-container, .framer-KclMQ.framer-v-wq9p1y .framer-ah6o8m-container { order: 1; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-9ixbsk-container, .framer-KclMQ.framer-v-wq9p1y .framer-9ixbsk-container { order: 3; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-1bfj8w3-container, .framer-KclMQ.framer-v-wq9p1y .framer-1bfj8w3-container { order: 4; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-1noi63r-container, .framer-KclMQ.framer-v-wq9p1y .framer-1noi63r-container { order: 5; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-37lfmu-container, .framer-KclMQ.framer-v-wq9p1y .framer-37lfmu-container { order: 6; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-1284uxs-container, .framer-KclMQ.framer-v-wq9p1y .framer-1284uxs-container { order: 7; width: 100%; }`,
          `.framer-KclMQ.framer-v-eyy2u1 .framer-nplfre-container { order: 9; }`,
          `.framer-KclMQ.framer-v-1du8dtb.framer-uizz9l { flex-direction: column; gap: 0px; justify-content: center; overflow: hidden; padding: 20px; width: 390px; }`,
          `.framer-KclMQ.framer-v-1du8dtb .framer-1fqwana { gap: unset; justify-content: space-between; order: 0; width: 100%; z-index: 2; }`,
          `.framer-KclMQ.framer-v-wq9p1y.framer-uizz9l { flex-direction: column; gap: 0px; padding: 0px; width: 390px; }`,
          `.framer-KclMQ.framer-v-wq9p1y .framer-1fqwana { gap: unset; justify-content: space-between; order: 0; padding: 20px; width: 100%; z-index: 2; }`,
          `.framer-KclMQ.framer-v-wq9p1y .framer-4opcjv { cursor: default; flex: 1 0 0px; flex-direction: column; gap: 20px; height: 100%; justify-content: flex-start; overflow: auto; padding: 10px 20px 120px 20px; width: 1px; z-index: 2; }`,
          `.framer-KclMQ.framer-v-wq9p1y .framer-uf3um1-container { order: 8; }`,
          `.framer-KclMQ[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-KclMQ [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-KclMQ[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-KclMQ [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-KclMQ[data-hide-scrollbars="true"], .framer-KclMQ [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          `.framer-KclMQ[data-border="true"]::after, .framer-KclMQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-KclMQ`
      )),
      (Z.displayName = `Nav/Navigation`),
      (Z.defaultProps = { height: 72, width: 1200 }),
      M(Z, {
        variant: {
          options: [`zkLCGLYDw`, `vfV49TVos`, `fqTJWfruG`, `Mtq8Jujrk`, `lpyseDqrh`],
          optionTitles: [
            `Large Menu`,
            `Tablet Closed`,
            `Tablet Open`,
            `Phone Closed`,
            `Phone Open`,
          ],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      I(Z, [{ explicitInter: !0, fonts: [] }, ...ar, ...or, ...sr, ...fr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Z.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([V(K, {}, t), V(Gn, {}, t), V(rr, {}, t), V(Et, {}, t)])
        ),
      }));
  });
function kr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  Q,
  zr = t(() => {
    (_(),
      N(),
      A(),
      o(),
      nt(),
      (Ar = F(ot)),
      (jr = { aX_apySiA: { hover: !0 } }),
      (Mr = `framer-yILOq`),
      (Nr = { aX_apySiA: `framer-v-11j0xdm` }),
      (Pr = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Fr = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (Ir = D.create(c)),
      (Lr = ({ height: e, hover: t, id: n, link: r, width: i, ...a }) => ({
        ...a,
        e_PhRTgWu: t ?? a.e_PhRTgWu,
        us9R2YTHv: r ?? a.us9R2YTHv,
      })),
      (Rr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me();
          Fe();
          let {
              style: s,
              className: l,
              layoutId: u,
              variant: d,
              us9R2YTHv: f,
              e_PhRTgWu: p,
              ...m
            } = Lr(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: te,
              isLoading: ne,
              setGestureState: y,
              setVariant: b,
              variants: x,
            } = qe({
              defaultVariant: `aX_apySiA`,
              enabledGestures: jr,
              ref: r,
              variant: d,
              variantClassNames: Nr,
            }),
            S = Rr(e, x),
            { activeVariantCallback: w, delay: re } = He(h),
            ie = w(async (...e) => {
              if ((y({ isHovered: !0 }), p && (await p(...e)) === !1)) return !1;
            }),
            ae = H(Mr);
          return C(O, {
            id: u ?? i,
            children: C(Ir, {
              animate: x,
              initial: !1,
              children: C(Fr, {
                value: Pr,
                children: C(Ve, {
                  href: f,
                  motionChild: !0,
                  nodeId: `aX_apySiA`,
                  openInNewTab: !0,
                  scopeId: `IKsC9BZHZ`,
                  children: T(D.a, {
                    ...m,
                    ...v,
                    className: `${H(ae, `framer-11j0xdm`, l, g)} framer-1d3nxxz`,
                    "data-border": !0,
                    "data-framer-name": `Variant 1`,
                    "data-highlight": !0,
                    layoutDependency: S,
                    layoutId: `aX_apySiA`,
                    onMouseEnter: ie,
                    ref: r,
                    style: {
                      "--border-bottom-width": `1.3px`,
                      "--border-color": `rgb(46, 46, 46)`,
                      "--border-left-width": `1.3px`,
                      "--border-right-width": `1.3px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1.3px`,
                      backgroundColor: `rgb(18, 18, 18)`,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `0px 4px 6px 0px rgba(0, 0, 0, 0.25)`,
                      ...s,
                    },
                    ...kr({ "aX_apySiA-hover": { "data-framer-name": void 0 } }, h, te),
                    children: [
                      C(D.div, {
                        className: `framer-1u1ko57`,
                        layoutDependency: S,
                        layoutId: `se67c2YUE`,
                        style: { borderTopLeftRadius: 5, borderTopRightRadius: 5 },
                        children: C(U, {
                          children: C(j, {
                            className: `framer-1y60cea-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: S,
                            layoutId: `ai2PV0LQb-container`,
                            nodeId: `ai2PV0LQb`,
                            rendersWithMotion: !0,
                            scopeId: `IKsC9BZHZ`,
                            children: C(ot, {
                              alignment: `center`,
                              arrowOptions: {
                                arrowFill: `rgba(0, 0, 0, 0.2)`,
                                arrowGap: 10,
                                arrowPadding: 20,
                                arrowPaddingBottom: 0,
                                arrowPaddingLeft: 0,
                                arrowPaddingRight: 0,
                                arrowPaddingTop: 0,
                                arrowPosition: `auto`,
                                arrowRadius: 40,
                                arrowShouldFadeIn: !1,
                                arrowShouldSpace: !0,
                                arrowSize: 40,
                                showMouseControls: !1,
                              },
                              autoPlayControl: !0,
                              borderRadius: 0,
                              direction: `top`,
                              dragControl: !1,
                              effectsOptions: {
                                effectsHover: !0,
                                effectsOpacity: 1,
                                effectsPerspective: 1200,
                                effectsRotate: 0,
                                effectsScale: 1,
                                playOffscreen: !1,
                              },
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !1,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 0,
                              height: `100%`,
                              id: `ai2PV0LQb`,
                              intervalControl: 3,
                              itemAmount: 1,
                              layoutId: `ai2PV0LQb`,
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              progressOptions: {
                                dotsActiveOpacity: 1,
                                dotsBackground: `rgba(0, 0, 0, 0.2)`,
                                dotsBlur: 0,
                                dotsFill: `rgb(255, 255, 255)`,
                                dotsGap: 10,
                                dotsInset: 10,
                                dotSize: 10,
                                dotsOpacity: 0.5,
                                dotsPadding: 10,
                                dotsRadius: 50,
                                showProgressDots: !1,
                              },
                              slots: [
                                C(z, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1108,
                                    intrinsicWidth: 1600,
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `160px`,
                                    src: `../../assets/images/4rmlW2ejsJGpXZfXzGVGFtfWo-96fbf9.png`,
                                    srcSet: `../../assets/images/4rmlW2ejsJGpXZfXzGVGFtfWo.png 512w,../../assets/images/4rmlW2ejsJGpXZfXzGVGFtfWo-d6e1fc.png 1024w,../../assets/images/4rmlW2ejsJGpXZfXzGVGFtfWo-9307bb.png 2048w,../../assets/images/4rmlW2ejsJGpXZfXzGVGFtfWo-96fbf9.png 2400w`,
                                  },
                                  className: `framer-19rdwwz`,
                                  "data-framer-name": `Cover`,
                                  layoutDependency: S,
                                  layoutId: `Kn080e84y`,
                                }),
                                C(z, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1425,
                                    intrinsicWidth: 2100,
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `160px`,
                                    src: `../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-56cec3.png`,
                                    srcSet: `../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q.png 512w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-34c9ea.png 1024w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-876e2a.png 2048w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-56cec3.png 2400w`,
                                  },
                                  className: `framer-uz4oll`,
                                  "data-framer-name": `Screenshot_1`,
                                  layoutDependency: S,
                                  layoutId: `l_r5ynLxf`,
                                }),
                                C(z, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1425,
                                    intrinsicWidth: 2100,
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `160px`,
                                    src: `../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-56cec3.png`,
                                    srcSet: `../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q.png 512w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-34c9ea.png 1024w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-876e2a.png 2048w,../../assets/images/6r3sVovSbX52abAs62f7YfzU4Q-56cec3.png 2400w`,
                                  },
                                  className: `framer-16paayl`,
                                  "data-framer-name": `Screenshot_3`,
                                  layoutDependency: S,
                                  layoutId: `n4tyKCeGi`,
                                }),
                                C(z, {
                                  background: {
                                    alt: ``,
                                    fit: `fill`,
                                    intrinsicHeight: 1425,
                                    intrinsicWidth: 2100,
                                    pixelHeight: 1800,
                                    pixelWidth: 2400,
                                    sizes: `160px`,
                                    src: `../../assets/images/APfWctGTLQFBQq8hbrls08svxsY-16b775.png`,
                                    srcSet: `../../assets/images/APfWctGTLQFBQq8hbrls08svxsY.png 512w,../../assets/images/APfWctGTLQFBQq8hbrls08svxsY-f7b5b6.png 1024w,../../assets/images/APfWctGTLQFBQq8hbrls08svxsY-860eb3.png 2048w,../../assets/images/APfWctGTLQFBQq8hbrls08svxsY-16b775.png 2400w`,
                                  },
                                  className: `framer-1gtkv69`,
                                  "data-framer-name": `Screenshot_2`,
                                  layoutDependency: S,
                                  layoutId: `BAlENf92E`,
                                }),
                              ],
                              startFrom: 0,
                              style: { height: `100%`, width: `100%` },
                              transitionControl: {
                                damping: 40,
                                delay: 0,
                                mass: 1,
                                stiffness: 200,
                                type: `spring`,
                              },
                              width: `100%`,
                            }),
                          }),
                        }),
                      }),
                      C(D.div, {
                        className: `framer-f7k3ch`,
                        layoutDependency: S,
                        layoutId: `kEw3FWNRl`,
                        children: C(Je, {
                          __fromCanvasComponent: !0,
                          children: C(c, {
                            children: C(D.p, {
                              style: {
                                "--font-selector": `RlI7SW50ZXJEaXNwbGF5LUJvbGQ=`,
                                "--framer-font-family": `"Inter Display", "Inter Display Placeholder", sans-serif`,
                                "--framer-font-size": `11.5px`,
                                "--framer-font-weight": `700`,
                                "--framer-line-height": `1em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(255, 255, 255))`,
                              },
                              children: `GRAB IT FOR FREE`,
                            }),
                          }),
                          className: `framer-1qjebne`,
                          fonts: [`FR;InterDisplay-Bold`],
                          layoutDependency: S,
                          layoutId: `qU5nJ5QHb`,
                          style: {
                            "--extracted-r6o4lv": `rgb(255, 255, 255)`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          verticalAlignment: `center`,
                          withExternalLayout: !0,
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
          `.framer-yILOq.framer-1d3nxxz, .framer-yILOq .framer-1d3nxxz { display: block; }`,
          `.framer-yILOq.framer-11j0xdm { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 7px; height: 110px; justify-content: center; overflow: hidden; padding: 5px; position: relative; text-decoration: none; width: 142px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yILOq .framer-1u1ko57 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-yILOq .framer-1y60cea-container { flex: none; height: 100%; position: relative; width: 100%; }`,
          `.framer-yILOq .framer-19rdwwz { align-content: center; align-items: center; aspect-ratio: 1.444043321299639 / 1; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 160px; }`,
          `.framer-yILOq .framer-uz4oll, .framer-yILOq .framer-16paayl, .framer-yILOq .framer-1gtkv69 { align-content: center; align-items: center; aspect-ratio: 1.4736842105263157 / 1; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: auto; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 160px; }`,
          `.framer-yILOq .framer-f7k3ch { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 4px 0px; position: relative; width: 100%; }`,
          `.framer-yILOq .framer-1qjebne { flex: none; height: 14px; position: relative; white-space: pre; width: auto; }`,
          `.framer-yILOq[data-border="true"]::after, .framer-yILOq [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-yILOq`
      )),
      (Q.displayName = `New Template Card`),
      (Q.defaultProps = { height: 110, width: 142 }),
      M(Q, {
        us9R2YTHv: { title: `Link`, type: B.Link },
        e_PhRTgWu: { title: `Hover`, type: B.EventHandler },
      }),
      I(
        Q,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
                url: `../../assets/fonts/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
                url: `../../assets/fonts/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+1F00-1FFF`,
                url: `../../assets/fonts/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0370-03FF`,
                url: `../../assets/fonts/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
                url: `../../assets/fonts/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
                url: `../../assets/fonts/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2`,
                weight: `700`,
              },
              {
                cssFamilyName: `Inter Display`,
                source: `framer`,
                style: `normal`,
                uiFamilyName: `Inter Display`,
                unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
                url: `../../assets/fonts/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
                weight: `700`,
              },
            ],
          },
          ...Ar,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Br(e) {
  let {
      slots: t = [],
      gap: r,
      padding: i,
      paddingPerSide: o,
      paddingTop: c,
      paddingRight: u,
      paddingBottom: p,
      paddingLeft: ee,
      speed: m,
      hoverFactor: h,
      direction: _,
      alignment: v,
      sizingOptions: te,
      fadeOptions: ne,
      style: y,
    } = e,
    { fadeContent: b, overflow: x, fadeWidth: S, fadeInset: w, fadeAlpha: ie } = ne,
    { widthType: ae, heightType: de } = te,
    k = o ? `${c}px ${u}px ${p}px ${ee}px` : `${i}px`,
    A = Xe.current(),
    fe = A === Xe.canvas || A === Xe.export,
    pe = Vr(),
    me = t.filter(Boolean),
    j = a.count(me),
    he = j > 0,
    ge = ce(0),
    M = Hr(_ === !0 ? `left` : _, pe),
    N = M === `left` || M === `right`,
    _e = Wr[M];
  ue(ge, _e);
  let P = E(null),
    F = d(() => [{ current: null }, { current: null }], []),
    [ve, ye] = re({ parent: null, children: null }),
    be = null,
    I = [],
    xe = 0,
    Se = 0;
  (fe && ((xe = j ? Math.floor(10 / j) : 0), (Se = 1)),
    !fe &&
      he &&
      ve.parent &&
      ((xe = Math.round((ve.parent / ve.children) * 2) + 1), (xe = Math.min(xe, Ur)), (Se = 1)));
  let Ce = n(() => {
      if (he && P.current) {
        let e = N ? P.current.offsetWidth : P.current.offsetHeight,
          t = F[0].current ? (N ? F[0].current.offsetLeft : F[0].current.offsetTop) : 0,
          n =
            (F[1].current
              ? N
                ? F[1].current.offsetLeft + F[1].current.offsetWidth
                : F[1].current.offsetTop + F[1].current.offsetHeight
              : 0) -
            t +
            r;
        s(() => {
          ye({ parent: e, children: n });
        });
      }
    }, []),
    we = fe ? { contentVisibility: `auto` } : {};
  if (he) {
    if (!fe) {
      let e = E(!0);
      f(
        () => (
          oe.read(Ce, !1, !0),
          et(P.current, ({ contentSize: t }) => {
            (!e.current && (t.width || t.height) && oe.read(Ce, !1, !0), (e.current = !1));
          })
        ),
        []
      );
    }
    be = a.map(me, (e, t) => {
      let n;
      (t === 0 && (n = F[pe === `rtl` && N ? 1 : 0]),
        t === me.length - 1 && (n = F[pe === `rtl` && N ? 0 : 1]));
      let r = { width: ae ? e.props?.width : `100%`, height: de ? e.props?.height : `100%` };
      return C(O, {
        inherit: `id`,
        children: C(Gr, {
          ref: n,
          style: r,
          children: l(
            e,
            {
              style: { ...e.props?.style, ...r, flexShrink: 0, ...we },
              layoutId: e.props.layoutId ? e.props.layoutId + `-original-` + t : void 0,
            },
            e.props?.children
          ),
        }),
      });
    });
  }
  let L = fe ? !0 : se(P);
  if (!fe)
    for (let e = 0; e < xe; e++)
      I = I.concat(
        a.map(me, (t, n) => {
          let r = {
            width: ae ? t.props?.width : `100%`,
            height: de ? t.props?.height : `100%`,
            willChange: L ? `transform` : void 0,
          };
          return C(
            O,
            {
              inherit: `id`,
              children: C(
                Gr,
                {
                  style: r,
                  children: l(
                    t,
                    {
                      key: e + ` ` + n,
                      style: {
                        ...t.props?.style,
                        width: ae ? t.props?.width : `100%`,
                        height: de ? t.props?.height : `100%`,
                        flexShrink: 0,
                        ...we,
                      },
                      layoutId: t.props.layoutId ? t.props.layoutId + `-dupe-` + e : void 0,
                    },
                    t.props?.children
                  ),
                },
                e + `li` + n
              ),
            },
            e + `lg` + n
          );
        })
      );
  let Te = ve.children + ve.children * Math.round(ve.parent / ve.children);
  (E(null), E(null), E(0));
  let Ee = E(!1),
    R = le(),
    De = E(null),
    Oe = E(null);
  if (!fe) {
    g(() => {
      if (!(R || !Te || !m))
        return (
          (Oe.current = De.current.animate(
            { transform: [_e(0), _e(Te)] },
            {
              duration: (Math.abs(Te) / m) * 1e3,
              iterations: 1 / 0,
              iterationStart: +(pe === `rtl`),
              easing: `linear`,
            }
          )),
          () => Oe.current.cancel()
        );
    }, [h, Te, m, pe]);
    let e = n(() => {
      if (!Oe.current) return;
      let e = document.hidden;
      L && !e && Oe.current.playState === `paused`
        ? Oe.current.play()
        : (!L || e) && Oe.current.playState === `running` && Oe.current.pause();
    }, [L]);
    (g(() => {
      e();
    }, [L, h, Te, m]),
      g(
        () => (
          document.addEventListener(`visibilitychange`, e),
          () => {
            document.removeEventListener(`visibilitychange`, e);
          }
        ),
        [e]
      ));
  }
  let ke = N ? `to right` : `to bottom`,
    z = S / 2,
    Ae = 100 - S / 2,
    je = `linear-gradient(${ke}, rgba(0, 0, 0, ${ie}) ${Zr(w, 0, z)}%, rgba(0, 0, 0, 1) ${z}%, rgba(0, 0, 0, 1) ${Ae}%, rgba(0, 0, 0, ${ie}) ${100 - w}%)`;
  return he
    ? C(`section`, {
        style: {
          ...Kr,
          opacity: Se,
          WebkitMaskImage: b ? je : void 0,
          maskImage: b ? je : void 0,
          overflow: x ? `visible` : `hidden`,
          padding: k,
        },
        ref: P,
        children: T(D.ul, {
          ref: De,
          style: {
            ...Kr,
            gap: r,
            top: _ === `bottom` && Qr(Te) ? -Te : void 0,
            left: _ === `right` && Qr(Te) ? Te * (pe === `rtl` ? 1 : -1) : void 0,
            placeItems: v,
            position: `relative`,
            flexDirection: N ? `row` : `column`,
            ...y,
            willChange: fe || !L ? `auto` : `transform`,
            transform: _e(0),
          },
          onMouseEnter: () => {
            ((Ee.current = !0), Oe.current && (Oe.current.playbackRate = h));
          },
          onMouseLeave: () => {
            ((Ee.current = !1), Oe.current && (Oe.current.playbackRate = 1));
          },
          children: [be, I],
        }),
      })
    : T(`section`, {
        style: qr,
        children: [
          C(`div`, { style: Jr, children: `✨` }),
          C(`p`, { style: Yr, children: `Connect to Content` }),
          C(`p`, {
            style: Xr,
            children: `Add layers or components to infinitely loop on your page.`,
          }),
        ],
      });
}
function Vr() {
  return !r || !r.document || !r.document.documentElement
    ? `ltr`
    : r.document.documentElement.dir === `rtl`
      ? `rtl`
      : `ltr`;
}
function Hr(e, t) {
  return t === `rtl` ? (e === `left` ? `right` : e === `right` ? `left` : e) : e;
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
  $r = t(() => {
    (p(),
      _(),
      o(),
      N(),
      A(),
      it(),
      (Ur = 100),
      (Wr = {
        left: (e) => `translateX(-${e}px)`,
        right: (e) => `translateX(${e}px)`,
        top: (e) => `translateY(-${e}px)`,
        bottom: (e) => `translateY(${e}px)`,
      }),
      (Gr = y(({ children: e, ...t }, n) => {
        let r = E(),
          i = se(r);
        return (
          ie(n, () => r.current),
          g(() => {
            let e = r.current;
            e &&
              (i
                ? e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.dataset.origTabIndex;
                    t ? (e.tabIndex = t) : e.removeAttribute(`tabIndex`);
                  })
                : e.querySelectorAll(`button,a`).forEach((e) => {
                    let t = e.getAttribute(`tabIndex`);
                    (t && (e.dataset.origTabIndex = t), (e.tabIndex = -1));
                  }));
          }, [i]),
          C(`li`, { ...t, "aria-hidden": !i, ref: r, children: e })
        );
      })),
      (Br.defaultProps = {
        gap: 10,
        padding: 10,
        sizingOptions: { widthType: !0, heightType: !0 },
        fadeOptions: { fadeContent: !0, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        direction: !0,
      }),
      M(Br, {
        slots: { type: B.Array, title: `Children`, control: { type: B.ComponentInstance } },
        speed: {
          type: B.Number,
          title: `Speed`,
          min: 0,
          max: 1e3,
          defaultValue: 100,
          unit: `%`,
          displayStepper: !0,
          step: 5,
        },
        direction: {
          type: B.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          defaultValue: `left`,
          displaySegmentedControl: !0,
        },
        alignment: {
          type: B.Enum,
          title: `Align`,
          options: [`flex-start`, `center`, `flex-end`],
          optionIcons: {
            direction: {
              right: [`align-top`, `align-middle`, `align-bottom`],
              left: [`align-top`, `align-middle`, `align-bottom`],
              top: [`align-left`, `align-center`, `align-right`],
              bottom: [`align-left`, `align-center`, `align-right`],
            },
          },
          defaultValue: `center`,
          displaySegmentedControl: !0,
        },
        gap: { type: B.Number, title: `Gap` },
        padding: {
          title: `Padding`,
          type: B.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        sizingOptions: {
          type: B.Object,
          title: `Sizing`,
          controls: {
            widthType: {
              type: B.Boolean,
              title: `Width`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
            heightType: {
              type: B.Boolean,
              title: `Height`,
              enabledTitle: `Auto`,
              disabledTitle: `Stretch`,
              defaultValue: !0,
            },
          },
        },
        fadeOptions: {
          type: B.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: B.Boolean, title: `Fade`, defaultValue: !0 },
            overflow: {
              type: B.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: B.Number,
              title: `Width`,
              defaultValue: 25,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeInset: {
              type: B.Number,
              title: `Inset`,
              defaultValue: 0,
              min: 0,
              max: 100,
              unit: `%`,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
            fadeAlpha: {
              type: B.Number,
              title: `Opacity`,
              defaultValue: 0,
              min: 0,
              max: 1,
              step: 0.05,
              hidden(e) {
                return e.fadeContent === !1;
              },
            },
          },
        },
        hoverFactor: {
          type: B.Number,
          title: `Hover`,
          min: 0,
          max: 1,
          unit: `x`,
          defaultValue: 1,
          step: 0.1,
          displayStepper: !0,
          description: `Slows down the speed while you are hovering.`,
        },
      }),
      (Kr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        maxWidth: `100%`,
        maxHeight: `100%`,
        placeItems: `center`,
        margin: 0,
        padding: 0,
        listStyleType: `none`,
        textIndent: `none`,
      }),
      (qr = {
        display: `flex`,
        width: `100%`,
        height: `100%`,
        placeContent: `center`,
        placeItems: `center`,
        flexDirection: `column`,
        color: `#96F`,
        background: `rgba(136, 85, 255, 0.1)`,
        fontSize: 11,
        overflow: `hidden`,
        padding: `20px 20px 30px 20px`,
      }),
      (Jr = { fontSize: 32, marginBottom: 10 }),
      (Yr = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Xr = { margin: 0, opacity: 0.7, maxWidth: 150, lineHeight: 1.5, textAlign: `center` }),
      (Zr = (e, t, n) => Math.min(Math.max(e, t), n)),
      (Qr = (e) => typeof e == `number` && !isNaN(e)));
  });
function ei(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  $,
  ui = t(() => {
    (_(),
      N(),
      A(),
      o(),
      $r(),
      (ti = F(Br)),
      (ni = { vwKWxcTQF: { hover: !0 } }),
      (ri = `framer-2ZHUQ`),
      (ii = { vwKWxcTQF: `framer-v-1ic3ef6` }),
      (ai = { duration: 0, type: `tween` }),
      (oi = ({ value: e, children: t }) => {
        let n = u(k),
          r = e ?? n.transition,
          i = d(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return C(k.Provider, { value: i, children: t });
      }),
      (si = D.create(c)),
      (ci = ({ fill: e, height: t, id: n, link: r, text: i, width: a, ...o }) => ({
        ...o,
        gy21iSR9V:
          e ??
          o.gy21iSR9V ??
          `var(--token-4a30d851-0d83-42d8-8d9a-c18d2d681c86, rgb(255, 255, 255))`,
        haMe1kBNN: r ?? o.haMe1kBNN,
        otdsfUVUD: i ?? o.otdsfUVUD ?? `let’s talk now`,
      })),
      (li = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = Ze(
        y(function (e, t) {
          let n = E(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: a, setLocale: o } = Me();
          Fe();
          let {
              style: s,
              className: l,
              layoutId: u,
              variant: d,
              otdsfUVUD: f,
              haMe1kBNN: p,
              gy21iSR9V: m,
              ...h
            } = ci(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: te,
              gestureVariant: ne,
              isLoading: y,
              setGestureState: b,
              setVariant: x,
              variants: S,
            } = qe({
              defaultVariant: `vwKWxcTQF`,
              enabledGestures: ni,
              ref: r,
              variant: d,
              variantClassNames: ii,
            }),
            w = li(e, S),
            re = H(ri),
            ie = () => ne === `vwKWxcTQF-hover`;
          return C(O, {
            id: u ?? i,
            children: C(si, {
              animate: S,
              initial: !1,
              children: C(oi, {
                value: ai,
                children: C(Ve, {
                  href: p,
                  motionChild: !0,
                  nodeId: `vwKWxcTQF`,
                  openInNewTab: !1,
                  scopeId: `UsIFtJG47`,
                  children: T(D.a, {
                    ...h,
                    ...te,
                    className: `${H(re, `framer-1ic3ef6`, l, _)} framer-92ri8k`,
                    "data-framer-name": `Button`,
                    layoutDependency: w,
                    layoutId: `vwKWxcTQF`,
                    ref: r,
                    style: {
                      backgroundColor: m,
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      boxShadow: `0px 4px 8px 0px rgba(0, 0, 0, 0.25)`,
                      ...s,
                    },
                    ...ei({ "vwKWxcTQF-hover": { "data-framer-name": void 0 } }, g, ne),
                    children: [
                      ie() &&
                        C(U, {
                          children: C(j, {
                            className: `framer-q3jsyh-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: w,
                            layoutId: `eMkWJpnxm-container`,
                            nodeId: `eMkWJpnxm`,
                            rendersWithMotion: !0,
                            scopeId: `UsIFtJG47`,
                            children: C(Br, {
                              alignment: `center`,
                              direction: `left`,
                              fadeOptions: {
                                fadeAlpha: 0,
                                fadeContent: !0,
                                fadeInset: 0,
                                fadeWidth: 25,
                                overflow: !1,
                              },
                              gap: 20,
                              height: `100%`,
                              hoverFactor: 1,
                              id: `eMkWJpnxm`,
                              layoutId: `eMkWJpnxm`,
                              padding: 0,
                              paddingBottom: 0,
                              paddingLeft: 0,
                              paddingPerSide: !1,
                              paddingRight: 0,
                              paddingTop: 0,
                              sizingOptions: { heightType: !0, widthType: !0 },
                              slots: [
                                C(D.div, {
                                  className: `framer-7v8jgt`,
                                  "data-framer-name": `Hover Text White`,
                                  layoutDependency: w,
                                  layoutId: `yv1cB7FDS`,
                                  children: C(Je, {
                                    __fromCanvasComponent: !0,
                                    children: C(c, {
                                      children: C(D.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                          "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                          "--framer-font-size": `14px`,
                                          "--framer-font-weight": `600`,
                                          "--framer-line-height": `100%`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(30, 30, 30))`,
                                          "--framer-text-transform": `capitalize`,
                                        },
                                        children: `let’s talk now`,
                                      }),
                                    }),
                                    className: `framer-spyji9`,
                                    "data-framer-name": `let’s talk now`,
                                    fonts: [`GF;Geist-600`],
                                    layoutDependency: w,
                                    layoutId: `H0bDiE3D3`,
                                    style: {
                                      "--extracted-r6o4lv": `rgb(30, 30, 30)`,
                                      "--framer-paragraph-spacing": `0px`,
                                    },
                                    text: f,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              ],
                              speed: 60,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                            }),
                          }),
                        }),
                      C(D.div, {
                        className: `framer-y31qyr`,
                        "data-framer-name": `Text Wrapper`,
                        layoutDependency: w,
                        layoutId: `D36QEqDiH`,
                        style: { opacity: 1 },
                        variants: { "vwKWxcTQF-hover": { opacity: 0 } },
                        children: C(Je, {
                          __fromCanvasComponent: !0,
                          children: C(c, {
                            children: C(D.p, {
                              dir: `auto`,
                              style: {
                                "--font-selector": `R0Y7R2Vpc3QtNjAw`,
                                "--framer-font-family": `"Geist", "Geist Placeholder", sans-serif`,
                                "--framer-font-size": `14px`,
                                "--framer-font-weight": `600`,
                                "--framer-line-height": `100%`,
                                "--framer-text-color": `var(--extracted-r6o4lv, rgb(30, 30, 30))`,
                                "--framer-text-transform": `capitalize`,
                              },
                              children: `let’s talk now`,
                            }),
                          }),
                          className: `framer-5ghnxr`,
                          "data-framer-name": `let’s talk now`,
                          fonts: [`GF;Geist-600`],
                          layoutDependency: w,
                          layoutId: `NZe1bsSMp`,
                          style: {
                            "--extracted-r6o4lv": `rgb(30, 30, 30)`,
                            "--framer-paragraph-spacing": `0px`,
                          },
                          text: f,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
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
          `.framer-2ZHUQ.framer-92ri8k, .framer-2ZHUQ .framer-92ri8k { display: block; }`,
          `.framer-2ZHUQ.framer-1ic3ef6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 16px 26px 16px 26px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2ZHUQ .framer-q3jsyh-container { flex: none; height: 14px; left: 0px; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 100%; z-index: 1; }`,
          `.framer-2ZHUQ .framer-7v8jgt { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-2ZHUQ .framer-spyji9, .framer-2ZHUQ .framer-5ghnxr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-2ZHUQ .framer-y31qyr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        ],
        `framer-2ZHUQ`
      )),
      ($.displayName = `Promotion Button`),
      ($.defaultProps = { height: 46, width: 149.383 }),
      M($, {
        otdsfUVUD: {
          defaultValue: `let’s talk now`,
          displayTextArea: !1,
          title: `Text`,
          type: B.String,
        },
        onotdsfUVUDChange: { changes: `otdsfUVUD`, type: B.ChangeHandler },
        haMe1kBNN: { title: `Link`, type: B.Link },
        gy21iSR9V: {
          defaultValue: `var(--token-4a30d851-0d83-42d8-8d9a-c18d2d681c86, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Fill`,
          type: B.Color,
        },
      }),
      I(
        $,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Geist`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Geist`,
                url: `https://fonts.gstatic.com/s/geist/v5/gyBhhwUxId8gMGYQMKR3pzfaWI_RQuQ4mJPby1QNtA.woff2`,
                weight: `600`,
              },
            ],
          },
          ...ti,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
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
  Bi,
  Vi = t(() => {
    (_(),
      N(),
      A(),
      o(),
      xn(),
      Or(),
      zr(),
      ui(),
      (di = F(Z)),
      (fi = Ye(z)),
      (pi = F(q)),
      (mi = Ye(D.div)),
      (hi = F(Q)),
      (gi = Ye(W)),
      (_i = F($)),
      (vi = {
        bKsePJSbG: `(min-width: 1200px)`,
        ccIjCt5El: `(min-width: 810px) and (max-width: 1199.98px)`,
        HaBsz7X31: `(max-width: 809.98px)`,
      }),
      (yi = () => typeof document < `u`),
      (bi = `framer-fW80r`),
      (xi = {
        bKsePJSbG: `framer-v-fd3ata`,
        ccIjCt5El: `framer-v-vsh3g8`,
        HaBsz7X31: `framer-v-txjn6f`,
      }),
      (Si = (e, t) => `translateX(-50%) ${t}`),
      (Ci = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (wi = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 0,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (Ti = { damping: 60, delay: 0.7, mass: 1.2, stiffness: 300, type: `spring` }),
      (Ei = { delay: 0, duration: 1.2, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (Di = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -500,
      }),
      (Oi = { delay: 0, duration: 1.4, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (ki = {
        opacity: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: -800,
      }),
      (Ai = {
        ccIjCt5El: [
          `.framer-fW80r .framer-5kqoiw { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-fW80r .framer-1dv3zeo-container { max-width: unset; }`,
          `.framer-fW80r .framer-128o37l { padding: 100px 30px 100px 30px; }`,
        ],
        HaBsz7X31: [
          `.framer-fW80r .framer-5kqoiw { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-fW80r .framer-1dv3zeo-container { max-width: unset; }`,
          `.framer-fW80r .framer-128o37l { padding: 80px 20px 80px 20px; }`,
        ],
      }),
      (ji = Object.keys(Ai)),
      (Mi = { ccIjCt5El: `.framer-vsh3g8-override`, HaBsz7X31: `.framer-txjn6f-override` }),
      (Ni = [
        `.framer-fW80r.framer-kp58c0, .framer-fW80r .framer-kp58c0 { display: block; }`,
        `.framer-fW80r.framer-fd3ata { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-fW80r .framer-5kqoiw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; order: -1000; overflow: hidden; padding: 20px 30px 0px 30px; position: absolute; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-fW80r .framer-1dv3zeo-container { flex: none; height: auto; max-width: 1290px; position: relative; width: 100%; }`,
        `.framer-fW80r .framer-1wvxxpf { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-fW80r .framer-128o37l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1002; overflow: hidden; padding: 180px 30px 160px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-fW80r .framer-nv86h6 { aspect-ratio: 0.5561594202898551 / 1; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 80px; top: 0px; width: 195px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-fW80r .framer-mctbyd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 3; }`,
        `.framer-fW80r .framer-16vr2co-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-fW80r .framer-yo4ioe { bottom: -208px; flex: none; height: 338px; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-fW80r .framer-1xaj77t { background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); flex: none; height: 60px; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-fW80r .framer-bvws0r { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(6.333333333333356% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-b7b8ia { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(20.66666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-bzmo9i { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(34.91666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-1eekxz5 { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(50.00000000000002% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-1gkkn8z { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(65.08333333333336% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-5s3nsj { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(79.33333333333336% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-1csvw93 { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(93.66666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-lk8lng { background: linear-gradient(180deg, var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, #bfe8ff) 0%, var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255)) 0%, rgba(255, 255, 255, 0) 100%); flex: none; height: 200px; left: calc(79.33333333333336% - 1px / 2); overflow: hidden; position: absolute; top: calc(50.00000000000002% - 200px / 2); width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-v7rxmh { background: linear-gradient(180deg, var(--token-ac7d8170-3f66-4854-911b-9ae90a0f4d9b, #84b7dd) 0%, var(--token-ac7d8170-3f66-4854-911b-9ae90a0f4d9b, rgb(132, 183, 221)) 0%, rgba(255, 255, 255, 0) 100%); bottom: 100px; flex: none; height: 100px; left: calc(20.634920634920658% - 1px / 2); overflow: hidden; position: absolute; width: 1px; z-index: 0; }`,
        `.framer-fW80r .framer-karqbq { align-content: flex-end; align-items: flex-end; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 61px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1003; overflow: visible; padding: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: min-content; z-index: 10; }`,
        `.framer-fW80r .framer-5h7nbp-container { cursor: pointer; flex: none; height: auto; position: relative; width: 159px; z-index: 10; }`,
        `.framer-fW80r .framer-1wejxzd-container, .framer-fW80r .framer-edr828-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (Pi = {
        bKsePJSbG: `(min-width: 1200px)`,
        ccIjCt5El: `(min-width: 810px) and (max-width: 1199.98px)`,
        HaBsz7X31: `(max-width: 809.98px)`,
      }),
      (Fi = { Desktop: `bKsePJSbG`, Phone: `HaBsz7X31`, Tablet: `ccIjCt5El` }),
      (Ii = ({ value: e }) =>
        Ke()
          ? null
          : C(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Li = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Fi[r.variant] ?? r.variant ?? `bKsePJSbG`,
      })),
      (Ri = y(function (e, t) {
        let n = E(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: o } = Me(),
          { style: s, className: c, layoutId: l, variant: u, children: d, ...f } = Li(e),
          [p, m] = ke(u, vi, !1),
          h = H(bi),
          g = () => !yi() || ![`ccIjCt5El`, `HaBsz7X31`].includes(p),
          _ = () => !yi() || p !== `HaBsz7X31`;
        return (
          We({}),
          C(Ie.Provider, {
            value: {
              activeVariantId: p,
              humanReadableVariantMap: Fi,
              isLayoutTemplate: !0,
              primaryVariantId: `bKsePJSbG`,
              variantClassNames: xi,
            },
            children: T(O, {
              id: l ?? i,
              children: [
                C(Ii, {
                  value: `:root body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                T(D.div, {
                  ...f,
                  className: H(h, `framer-fd3ata`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    C(D.header, {
                      className: `framer-5kqoiw`,
                      "data-framer-layout-hint-center-x": !0,
                      "data-framer-name": `Header`,
                      transformTemplate: Si,
                      children: C(L, {
                        breakpoint: p,
                        overrides: {
                          ccIjCt5El: { width: `100vw`, y: 0 },
                          HaBsz7X31: { width: `100vw`, y: 0 },
                        },
                        children: C(U, {
                          height: 72,
                          width: `min(100vw - 60px, 1290px)`,
                          y: 20,
                          children: C(W, {
                            className: `framer-1dv3zeo-container`,
                            nodeId: `zY5ektp4F`,
                            scopeId: `ZvYhDonOZ`,
                            children: C(L, {
                              breakpoint: p,
                              overrides: {
                                ccIjCt5El: { style: { width: `100%` }, variant: Ci(`vfV49TVos`) },
                                HaBsz7X31: { style: { width: `100%` }, variant: Ci(`Mtq8Jujrk`) },
                              },
                              children: C(Z, {
                                height: `100%`,
                                id: `zY5ektp4F`,
                                layoutId: `zY5ektp4F`,
                                style: { maxWidth: `100%`, width: `100%` },
                                variant: Ci(`zkLCGLYDw`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    d,
                    C(`div`, { className: `framer-1wvxxpf` }),
                    T(z, {
                      as: `footer`,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: G(1e3),
                        pixelHeight: 1940,
                        pixelWidth: 3200,
                        sizes: `100vw`,
                        src: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg`,
                        srcSet: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-8f56c7.jpg 512w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-28a060.jpg 1024w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4.jpg 2048w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg 3200w`,
                      },
                      className: `framer-128o37l`,
                      "data-framer-name": `Footer`,
                      children: [
                        g() &&
                          C(fi, {
                            __framer__animate: { transition: Ti },
                            __framer__animateOnce: !0,
                            __framer__enter: wi,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: `image`,
                              fit: `fill`,
                              loading: G(1e3),
                              pixelHeight: 2208,
                              pixelWidth: 1228,
                              sizes: `195px`,
                              src: `../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-d0c219.png`,
                              srcSet: `../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY.png 569w,../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-bc0231.png 1139w,../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-d0c219.png 1228w`,
                            },
                            className: `framer-nv86h6 hidden-vsh3g8 hidden-txjn6f`,
                          }),
                        C(`div`, {
                          className: `framer-mctbyd`,
                          "data-framer-name": `Container`,
                          children: C(L, {
                            breakpoint: p,
                            overrides: {
                              ccIjCt5El: { y: 1100 },
                              HaBsz7X31: { width: `min(100vw - 40px, 1200px)`, y: 1080 },
                            },
                            children: C(U, {
                              height: 789,
                              width: `min(100vw - 60px, 1200px)`,
                              y: 1180,
                              children: C(W, {
                                className: `framer-16vr2co-container`,
                                nodeId: `yI8QVmh5u`,
                                scopeId: `ZvYhDonOZ`,
                                children: C(L, {
                                  breakpoint: p,
                                  overrides: {
                                    ccIjCt5El: { variant: Ci(`UfjxGbghg`) },
                                    HaBsz7X31: { variant: Ci(`FTPJ9L5hl`) },
                                  },
                                  children: C(q, {
                                    height: `100%`,
                                    id: `yI8QVmh5u`,
                                    layoutId: `yI8QVmh5u`,
                                    style: { width: `100%` },
                                    variant: Ci(`iLiSr8N_l`),
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                        }),
                        g() &&
                          C(z, {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              loading: G(1999),
                              pixelHeight: 1026,
                              pixelWidth: 6400,
                              positionX: `center`,
                              positionY: `top`,
                              sizes: `100vw`,
                              src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                              srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                            },
                            className: `framer-yo4ioe hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Cloud`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-1xaj77t hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `BG`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-bvws0r hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-b7b8ia hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-bzmo9i hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-1eekxz5 hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-1gkkn8z hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-5s3nsj hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(`div`, {
                            className: `framer-1csvw93 hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Line`,
                          }),
                        g() &&
                          C(mi, {
                            __framer__loop: Di,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !1,
                            __framer__loopRepeatDelay: 1,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Ei,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-lk8lng hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Shimmer Right`,
                          }),
                        g() &&
                          C(mi, {
                            __framer__loop: ki,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopPauseOffscreen: !1,
                            __framer__loopRepeatDelay: 0.8,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: Oi,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-v7rxmh hidden-vsh3g8 hidden-txjn6f`,
                            "data-framer-name": `Shimmer Left`,
                          }),
                      ],
                    }),
                    T(D.div, {
                      className: `framer-karqbq`,
                      "data-framer-name": `You Can Remove This`,
                      children: [
                        _() &&
                          C(U, {
                            height: 110,
                            width: `159px`,
                            y: 717,
                            children: C(gi, {
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-5h7nbp-container hidden-txjn6f`,
                              nodeId: `Z3zJx0uj7`,
                              rendersWithMotion: !0,
                              scopeId: `ZvYhDonOZ`,
                              children: C(Q, {
                                height: `100%`,
                                id: `Z3zJx0uj7`,
                                layoutId: `Z3zJx0uj7`,
                                style: { width: `100%` },
                                us9R2YTHv: `https://templatemunk.lemonsqueezy.com/checkout/buy/a25dd3cc-e542-46d0-bfc1-31fe92e52932`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        C(U, {
                          height: 46,
                          y: 837,
                          children: C(W, {
                            className: `framer-1wejxzd-container`,
                            nodeId: `mfcfJ8ieZ`,
                            scopeId: `ZvYhDonOZ`,
                            children: C($, {
                              gy21iSR9V: `var(--token-4a30d851-0d83-42d8-8d9a-c18d2d681c86, rgb(255, 255, 255))`,
                              haMe1kBNN: `https://munks.design/`,
                              height: `100%`,
                              id: `mfcfJ8ieZ`,
                              layoutId: `mfcfJ8ieZ`,
                              otdsfUVUD: `More Templates`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        C(U, {
                          height: 46,
                          y: 893,
                          children: C(W, {
                            className: `framer-edr828-container`,
                            nodeId: `ow6Y96s3I`,
                            scopeId: `ZvYhDonOZ`,
                            children: C($, {
                              gy21iSR9V: `var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255))`,
                              haMe1kBNN: `https://munks.design/all-access`,
                              height: `100%`,
                              id: `ow6Y96s3I`,
                              layoutId: `ow6Y96s3I`,
                              otdsfUVUD: `All Access`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                C(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (zi = (e) =>
        e === Xe.canvas || e === Xe.export
          ? [
              ...Ni,
              ...ji.flatMap((e) => {
                let t = Mi[e];
                return Ai[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...Ni, ...ji.map((e) => `@media ${Pi[e]} { ${Ai[e].join(` `)} }`)]),
      (Bi = Ze(Ri, zi, `framer-fW80r`)),
      (Bi.displayName = `Main Template`),
      (Bi.defaultProps = { height: 2479, width: 1200 }),
      I(Bi, [{ explicitInter: !0, fonts: [] }, ...di, ...pi, ...hi, ..._i], {
        supportsExplicitInterCodegen: !0,
      }),
      (Bi.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([V(Z, {}, t), V(q, {}, t), V(Q, {}, t), V($, {}, t)])
        ),
      }));
  }),
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
  ua = t(() => {
    (_(),
      N(),
      A(),
      o(),
      xn(),
      Or(),
      zr(),
      ui(),
      (Hi = F(Z)),
      (Ui = F(q)),
      (Wi = F(Q)),
      (Gi = Ye(W)),
      (Ki = F($)),
      (qi = {
        l7FC1r0Cu: `(min-width: 810px) and (max-width: 1259.98px)`,
        O5N90Pmsr: `(min-width: 1260px)`,
        sPK7TvILw: `(max-width: 809.98px)`,
      }),
      (Ji = () => typeof document < `u`),
      (Yi = `framer-62bdS`),
      (Xi = {
        l7FC1r0Cu: `framer-v-1avtuqj`,
        O5N90Pmsr: `framer-v-9gj9i4`,
        sPK7TvILw: `framer-v-2qww16`,
      }),
      (Zi = (e, t) => `translateX(-50%) ${t}`),
      (Qi = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      ($i = {
        l7FC1r0Cu: [
          `.framer-62bdS .framer-uwt04f { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-62bdS .framer-1ye5hnh-container { max-width: unset; }`,
          `.framer-62bdS .framer-1envo1r { padding: 50px 30px 30px 30px; }`,
        ],
        sPK7TvILw: [
          `.framer-62bdS .framer-uwt04f { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-62bdS .framer-1ye5hnh-container { max-width: unset; }`,
          `.framer-62bdS .framer-1envo1r { padding: 40px 20px 30px 20px; }`,
        ],
      }),
      (ea = Object.keys($i)),
      (ta = { l7FC1r0Cu: `.framer-1avtuqj-override`, sPK7TvILw: `.framer-2qww16-override` }),
      (na = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-62bdS.framer-1mdig61, .framer-62bdS .framer-1mdig61 { display: block; }`,
        `.framer-62bdS.framer-9gj9i4 { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-62bdS .framer-uwt04f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; order: -1000; overflow: hidden; padding: 20px 30px 0px 30px; position: absolute; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-62bdS .framer-1ye5hnh-container { flex: none; height: auto; max-width: 1290px; position: relative; width: 100%; }`,
        `.framer-62bdS .framer-1trb6dn { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-62bdS .framer-1envo1r { align-content: center; align-items: center; background-color: var(--token-b090181a-49c9-4727-ba81-a73646c8cf58, #448abe); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1002; overflow: var(--overflow-clip-fallback, clip); padding: 60px 30px 30px 30px; position: relative; width: 100%; }`,
        `.framer-62bdS .framer-1fpgrnx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-62bdS .framer-1dtybqk-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-62bdS .framer-1ujhh5m { align-content: flex-end; align-items: flex-end; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 61px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1003; overflow: visible; padding: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: min-content; z-index: 10; }`,
        `.framer-62bdS .framer-ku26n-container { cursor: pointer; flex: none; height: auto; position: relative; width: 159px; z-index: 10; }`,
        `.framer-62bdS .framer-1oxwog9-container, .framer-62bdS .framer-bl8rzs-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
      ]),
      (ra = {
        l7FC1r0Cu: `(min-width: 810px) and (max-width: 1259.98px)`,
        O5N90Pmsr: `(min-width: 1260px)`,
        sPK7TvILw: `(max-width: 809.98px)`,
      }),
      (ia = { Desktop: `O5N90Pmsr`, Phone: `sPK7TvILw`, Tablet: `l7FC1r0Cu` }),
      (aa = ({ value: e }) =>
        Ke()
          ? null
          : C(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (oa = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: ia[r.variant] ?? r.variant ?? `O5N90Pmsr`,
      })),
      (sa = y(function (e, t) {
        let n = E(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: o } = Me(),
          { style: s, className: c, layoutId: l, variant: u, children: d, ...f } = oa(e),
          [p, m] = ke(u, qi, !1),
          h = H(Yi),
          g = () => !Ji() || p !== `sPK7TvILw`;
        return (
          We({}),
          C(Ie.Provider, {
            value: {
              activeVariantId: p,
              humanReadableVariantMap: ia,
              isLayoutTemplate: !0,
              primaryVariantId: `O5N90Pmsr`,
              variantClassNames: Xi,
            },
            children: T(O, {
              id: l ?? i,
              children: [
                C(aa, {
                  value: `:root body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                T(D.div, {
                  ...f,
                  className: H(h, `framer-9gj9i4`, c),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    C(D.header, {
                      className: `framer-uwt04f`,
                      "data-framer-layout-hint-center-x": !0,
                      "data-framer-name": `Header`,
                      transformTemplate: Zi,
                      children: C(L, {
                        breakpoint: p,
                        overrides: {
                          l7FC1r0Cu: { width: `100vw`, y: 0 },
                          sPK7TvILw: { width: `100vw`, y: 0 },
                        },
                        children: C(U, {
                          height: 72,
                          width: `min(100vw - 60px, 1290px)`,
                          y: 20,
                          children: C(W, {
                            className: `framer-1ye5hnh-container`,
                            nodeId: `J8FHs9EMD`,
                            scopeId: `VmTwVphVk`,
                            children: C(L, {
                              breakpoint: p,
                              overrides: {
                                l7FC1r0Cu: { style: { width: `100%` }, variant: Qi(`vfV49TVos`) },
                                sPK7TvILw: { style: { width: `100%` }, variant: Qi(`Mtq8Jujrk`) },
                              },
                              children: C(Z, {
                                height: `100%`,
                                id: `J8FHs9EMD`,
                                layoutId: `J8FHs9EMD`,
                                style: { maxWidth: `100%`, width: `100%` },
                                variant: Qi(`zkLCGLYDw`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    d,
                    C(`div`, { className: `framer-1trb6dn` }),
                    C(D.footer, {
                      className: `framer-1envo1r`,
                      "data-framer-name": `Footer`,
                      children: C(`div`, {
                        className: `framer-1fpgrnx`,
                        "data-framer-name": `Container`,
                        children: C(L, {
                          breakpoint: p,
                          overrides: {
                            l7FC1r0Cu: { y: 1050 },
                            sPK7TvILw: { width: `min(100vw - 40px, 1200px)`, y: 1040 },
                          },
                          children: C(U, {
                            height: 789,
                            width: `min(100vw - 60px, 1200px)`,
                            y: 1060,
                            children: C(W, {
                              className: `framer-1dtybqk-container`,
                              nodeId: `uyn6Se93J`,
                              scopeId: `VmTwVphVk`,
                              children: C(L, {
                                breakpoint: p,
                                overrides: {
                                  l7FC1r0Cu: { variant: Qi(`UfjxGbghg`) },
                                  sPK7TvILw: { variant: Qi(`FTPJ9L5hl`) },
                                },
                                children: C(q, {
                                  height: `100%`,
                                  id: `uyn6Se93J`,
                                  layoutId: `uyn6Se93J`,
                                  style: { width: `100%` },
                                  variant: Qi(`iLiSr8N_l`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    T(D.div, {
                      className: `framer-1ujhh5m`,
                      "data-framer-name": `You Can Remove This`,
                      children: [
                        g() &&
                          C(U, {
                            height: 110,
                            width: `159px`,
                            y: 717,
                            children: C(Gi, {
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-ku26n-container hidden-2qww16`,
                              nodeId: `AGQJMc3KE`,
                              rendersWithMotion: !0,
                              scopeId: `VmTwVphVk`,
                              children: C(Q, {
                                height: `100%`,
                                id: `AGQJMc3KE`,
                                layoutId: `AGQJMc3KE`,
                                style: { width: `100%` },
                                us9R2YTHv: `https://templatemunk.lemonsqueezy.com/checkout/buy/a25dd3cc-e542-46d0-bfc1-31fe92e52932`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        C(U, {
                          height: 46,
                          y: 837,
                          children: C(W, {
                            className: `framer-1oxwog9-container`,
                            nodeId: `Q6XHnp6rZ`,
                            scopeId: `VmTwVphVk`,
                            children: C($, {
                              gy21iSR9V: `var(--token-4a30d851-0d83-42d8-8d9a-c18d2d681c86, rgb(255, 255, 255))`,
                              haMe1kBNN: `https://munks.design/`,
                              height: `100%`,
                              id: `Q6XHnp6rZ`,
                              layoutId: `Q6XHnp6rZ`,
                              otdsfUVUD: `More Templates`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        C(U, {
                          height: 46,
                          y: 893,
                          children: C(W, {
                            className: `framer-bl8rzs-container`,
                            nodeId: `YmqwUla6M`,
                            scopeId: `VmTwVphVk`,
                            children: C($, {
                              gy21iSR9V: `var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255))`,
                              haMe1kBNN: `https://munks.design/all-access`,
                              height: `100%`,
                              id: `YmqwUla6M`,
                              layoutId: `YmqwUla6M`,
                              otdsfUVUD: `All Access`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                C(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (ca = (e) =>
        e === Xe.canvas || e === Xe.export
          ? [
              ...na,
              ...ea.flatMap((e) => {
                let t = ta[e];
                return $i[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...na, ...ea.map((e) => `@media ${ra[e]} { ${$i[e].join(` `)} }`)]),
      (la = Ze(sa, ca, `framer-62bdS`)),
      (la.displayName = `404 Template`),
      (la.defaultProps = { height: 2479, width: 1260 }),
      I(la, [{ explicitInter: !0, fonts: [] }, ...Hi, ...Ui, ...Wi, ...Ki], {
        supportsExplicitInterCodegen: !0,
      }),
      (la.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([V(Z, {}, t), V(q, {}, t), V(Q, {}, t), V($, {}, t)])
        ),
      }));
  }),
  da,
  fa,
  pa,
  ma = t(() => {
    (N(),
      pe.loadFonts([`GF;Funnel Display-600`, `GF;Funnel Display-700`]),
      (da = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYRGTXXcVwIZDKFA.woff2`,
              weight: `600`,
            },
            {
              cssFamilyName: `Funnel Display`,
              source: `google`,
              style: `normal`,
              uiFamilyName: `Funnel Display`,
              url: `https://fonts.gstatic.com/s/funneldisplay/v3/B50bF7FGv37QNVWgE0ga--4PbZSRJXrOHcLHLoAYfWTXXcVwIZDKFA.woff2`,
              weight: `700`,
            },
          ],
        },
      ]),
      (fa = [
        `.framer-I2vtb .framer-styles-preset-1nmw1da:not(.rich-text-wrapper), .framer-I2vtb .framer-styles-preset-1nmw1da.rich-text-wrapper h1 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 120px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 100%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1259px) and (min-width: 810px) { .framer-I2vtb .framer-styles-preset-1nmw1da:not(.rich-text-wrapper), .framer-I2vtb .framer-styles-preset-1nmw1da.rich-text-wrapper h1 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 100%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-I2vtb .framer-styles-preset-1nmw1da:not(.rich-text-wrapper), .framer-I2vtb .framer-styles-preset-1nmw1da.rich-text-wrapper h1 { --framer-font-family: "Funnel Display", sans-serif; --framer-font-family-bold: "Funnel Display", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 54px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-letter-spacing: -0.03em; --framer-line-height: 100%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (pa = `framer-I2vtb`));
  }),
  ha,
  ga,
  _a,
  va,
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
  Pa,
  Fa,
  Ia,
  La = t(() => {
    (_(),
      N(),
      A(),
      o(),
      xn(),
      Or(),
      zr(),
      ui(),
      ma(),
      (ha = F(Z)),
      (ga = F(q)),
      (_a = F(Q)),
      (va = Ye(W)),
      (ya = F($)),
      (ba = {
        GFYgTSRd8: `(min-width: 810px) and (max-width: 1259.98px)`,
        Nkl1C8Ac2: `(min-width: 1260px)`,
        X5kbr1B0N: `(max-width: 809.98px)`,
      }),
      (xa = () => typeof document < `u`),
      (Sa = `framer-AXpUj`),
      (Ca = {
        GFYgTSRd8: `framer-v-1uqfk2w`,
        Nkl1C8Ac2: `framer-v-2rjakn`,
        X5kbr1B0N: `framer-v-al2f27`,
      }),
      (wa = (e, t) => `translateX(-50%) ${t}`),
      (Ta = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ea = {
        GFYgTSRd8: [
          `.framer-AXpUj .framer-1chypsb { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-AXpUj .framer-1utvb7m-container { max-width: unset; }`,
          `.framer-AXpUj .framer-1251p7o { padding: 160px 30px 100px 30px; }`,
          `.framer-AXpUj .framer-1infcp3, .framer-AXpUj .framer-w2sqnl, .framer-AXpUj .framer-x0pkjx, .framer-AXpUj .framer-18uyoxh, .framer-AXpUj .framer-15mcugf, .framer-AXpUj .framer-ocms9m, .framer-AXpUj .framer-1byka0f, .framer-AXpUj .framer-6tl5tq, .framer-AXpUj .framer-vgysau, .framer-AXpUj .framer-seknw4, .framer-AXpUj .framer-1swq94p, .framer-AXpUj .framer-6l4cqi, .framer-AXpUj .framer-1xqahdl, .framer-AXpUj .framer-1qolzs3 { height: 1080px; }`,
          `.framer-AXpUj .framer-1di7enw { padding: 100px 30px 100px 30px; }`,
        ],
        X5kbr1B0N: [
          `.framer-AXpUj .framer-1chypsb { padding: 0px; position: var(--framer-canvas-fixed-position, fixed); }`,
          `.framer-AXpUj .framer-1utvb7m-container { max-width: unset; }`,
          `.framer-AXpUj .framer-1251p7o { padding: 150px 20px 80px 20px; }`,
          `.framer-AXpUj .framer-1qpuah6 { gap: 15px; }`,
          `.framer-AXpUj .framer-1infcp3, .framer-AXpUj .framer-w2sqnl, .framer-AXpUj .framer-x0pkjx, .framer-AXpUj .framer-18uyoxh, .framer-AXpUj .framer-15mcugf, .framer-AXpUj .framer-ocms9m, .framer-AXpUj .framer-1byka0f, .framer-AXpUj .framer-6tl5tq, .framer-AXpUj .framer-vgysau, .framer-AXpUj .framer-seknw4, .framer-AXpUj .framer-1swq94p, .framer-AXpUj .framer-6l4cqi, .framer-AXpUj .framer-1xqahdl, .framer-AXpUj .framer-1qolzs3 { height: 844px; }`,
          `.framer-AXpUj .framer-1di7enw { padding: 80px 20px 80px 20px; }`,
        ],
      }),
      (Da = Object.keys(Ea)),
      (Oa = { GFYgTSRd8: `.framer-1uqfk2w-override`, X5kbr1B0N: `.framer-al2f27-override` }),
      (ka = [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-AXpUj.framer-amfnu4, .framer-AXpUj .framer-amfnu4 { display: block; }`,
        `.framer-AXpUj.framer-2rjakn { align-content: center; align-items: center; background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-AXpUj .framer-1chypsb { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; left: 50%; order: -1000; overflow: hidden; padding: 20px 30px 0px 30px; position: absolute; top: 0px; width: 100%; z-index: 10; }`,
        `.framer-AXpUj .framer-1utvb7m-container { flex: none; height: auto; max-width: 1290px; position: relative; width: 100%; }`,
        `.framer-AXpUj .framer-1251p7o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: -999; overflow: hidden; padding: 255px 30px 175px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-AXpUj .framer-l30ig2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-AXpUj .framer-1qpuah6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AXpUj .framer-1h667w6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-AXpUj .framer-1infcp3 { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(6.349206349206371% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-w2sqnl { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(20.634920634920658% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-x0pkjx { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(34.92063492063494% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-18uyoxh { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(50.00000000000002% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-15mcugf { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(65.0793650793651% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-ocms9m { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(79.36507936507938% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-1byka0f { background: linear-gradient(180deg, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff) 0%, rgba(68, 138, 190, 0) 100%); flex: none; height: 100%; left: calc(93.65079365079367% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-bvl986 { background: transparent; flex-grow: 1; height: 0px; margin: 0px; margin-bottom: -0px; position: relative; width: 0px; }`,
        `.framer-AXpUj .framer-1di7enw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; order: 1003; overflow: hidden; padding: 180px 30px 160px 30px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-AXpUj .framer-rusk7e { aspect-ratio: 0.5561594202898551 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 351px); overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 80px; top: 0px; width: 195px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-AXpUj .framer-crlxad { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1200px; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-AXpUj .framer-9beaep-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-AXpUj .framer-vtwhvd { bottom: -208px; flex: none; height: 338px; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-AXpUj .framer-5b5kk3 { background-color: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, #ffffff); flex: none; height: 60px; left: calc(50.00000000000002% - 100% / 2); overflow: var(--overflow-clip-fallback, clip); position: absolute; top: 0px; width: 100%; z-index: 0; }`,
        `.framer-AXpUj .framer-6tl5tq { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(6.333333333333356% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-vgysau { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(20.66666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-seknw4 { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(34.91666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-1swq94p { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(50.00000000000002% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-6l4cqi { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(65.08333333333336% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-1xqahdl { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(79.33333333333336% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-1qolzs3 { background: linear-gradient(180deg, rgba(68, 138, 190, 0) 0%, var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)) 79.27927927927928%); bottom: 0px; flex: none; height: 90%; left: calc(93.66666666666669% - 1px / 2); opacity: 0.1; overflow: var(--overflow-clip-fallback, clip); position: absolute; width: 1px; z-index: 0; }`,
        `.framer-AXpUj .framer-1der9bn { align-content: flex-end; align-items: flex-end; bottom: calc(calc(100% - min(var(--framer-viewport-height, 100%), 100%)) + 61px); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; order: 1004; overflow: visible; padding: 0px; position: var(--framer-canvas-fixed-position, fixed); right: 20px; width: min-content; z-index: 10; }`,
        `.framer-AXpUj .framer-1cqby93-container { cursor: pointer; flex: none; height: auto; position: relative; width: 159px; z-index: 10; }`,
        `.framer-AXpUj .framer-3zfxdu-container, .framer-AXpUj .framer-popaud-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `[data-layout-template="true"] > #overlay { margin-bottom: -0px; }`,
        ...fa,
      ]),
      (Aa = {
        GFYgTSRd8: `(min-width: 810px) and (max-width: 1259.98px)`,
        Nkl1C8Ac2: `(min-width: 1260px)`,
        X5kbr1B0N: `(max-width: 809.98px)`,
      }),
      (ja = { Desktop: `Nkl1C8Ac2`, Phone: `X5kbr1B0N`, Tablet: `GFYgTSRd8` }),
      (Ma = ({ value: e }) =>
        Ke()
          ? null
          : C(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
      (Na = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        fCqwjMMxm: n ?? i.fCqwjMMxm ?? `Get in touch`,
        variant: ja[i.variant] ?? i.variant ?? `Nkl1C8Ac2`,
      })),
      (Pa = y(function (e, t) {
        let n = E(null),
          r = t ?? n,
          i = ee(),
          { activeLocale: a, setLocale: o } = Me(),
          {
            style: s,
            className: l,
            layoutId: u,
            variant: d,
            fCqwjMMxm: f,
            children: p,
            ...m
          } = Na(e),
          [h, g] = ke(d, ba, !1),
          _ = H(Sa, pa),
          v = () => !xa() || ![`GFYgTSRd8`, `X5kbr1B0N`].includes(h),
          te = () => !xa() || h !== `X5kbr1B0N`;
        return (
          We({}),
          C(Ie.Provider, {
            value: {
              activeVariantId: h,
              humanReadableVariantMap: ja,
              isLayoutTemplate: !0,
              primaryVariantId: `Nkl1C8Ac2`,
              variantClassNames: Ca,
            },
            children: T(O, {
              id: u ?? i,
              children: [
                C(Ma, {
                  value: `:root body { background: var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255)); }`,
                }),
                T(D.div, {
                  ...m,
                  className: H(_, `framer-2rjakn`, l),
                  "data-layout-template": !0,
                  ref: r,
                  style: { ...s },
                  children: [
                    C(D.header, {
                      className: `framer-1chypsb`,
                      "data-framer-layout-hint-center-x": !0,
                      "data-framer-name": `Header`,
                      transformTemplate: wa,
                      children: C(L, {
                        breakpoint: h,
                        overrides: {
                          GFYgTSRd8: { width: `100vw`, y: 0 },
                          X5kbr1B0N: { width: `100vw`, y: 0 },
                        },
                        children: C(U, {
                          height: 72,
                          width: `min(100vw - 60px, 1290px)`,
                          y: 20,
                          children: C(W, {
                            className: `framer-1utvb7m-container`,
                            nodeId: `PTCNfJq1E`,
                            scopeId: `JfNPK1BBD`,
                            children: C(L, {
                              breakpoint: h,
                              overrides: {
                                GFYgTSRd8: { style: { width: `100%` }, variant: Ta(`vfV49TVos`) },
                                X5kbr1B0N: { style: { width: `100%` }, variant: Ta(`Mtq8Jujrk`) },
                              },
                              children: C(Z, {
                                height: `100%`,
                                id: `PTCNfJq1E`,
                                layoutId: `PTCNfJq1E`,
                                style: { maxWidth: `100%`, width: `100%` },
                                variant: Ta(`zkLCGLYDw`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                    T(z, {
                      as: `section`,
                      background: {
                        alt: ``,
                        fit: `fill`,
                        loading: G(0),
                        pixelHeight: 1940,
                        pixelWidth: 3200,
                        sizes: `100vw`,
                        src: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png`,
                        srcSet: `../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5374e3.png 512w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-ecf4d3.png 1024w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk.png 2048w,../../assets/images/svYhEKNRXonkkItV1STNat8o1xk-5cebbf.png 3200w`,
                      },
                      className: `framer-1251p7o`,
                      "data-framer-name": `Banner Section`,
                      children: [
                        C(`div`, {
                          className: `framer-l30ig2`,
                          "data-framer-name": `Container`,
                          children: C(`div`, {
                            className: `framer-1qpuah6`,
                            "data-framer-name": `Content`,
                            children: C(Je, {
                              __fromCanvasComponent: !0,
                              children: C(c, {
                                children: C(`h1`, {
                                  className: `framer-styles-preset-1nmw1da`,
                                  "data-styles-preset": `gSQ5xPqHN`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-52a922b1-3b26-4b43-8a4a-9e877353678b, rgb(255, 255, 255))`,
                                  },
                                  children: `Get in touch`,
                                }),
                              }),
                              className: `framer-1h667w6`,
                              "data-framer-name": `Get in touch`,
                              fonts: [`Inter`],
                              text: f,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        }),
                        C(`div`, { className: `framer-1infcp3`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-w2sqnl`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-x0pkjx`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-18uyoxh`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-15mcugf`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-ocms9m`, "data-framer-name": `Line` }),
                        C(`div`, { className: `framer-1byka0f`, "data-framer-name": `Line` }),
                      ],
                    }),
                    p,
                    C(`div`, { className: `framer-bvl986` }),
                    C(L, {
                      breakpoint: h,
                      overrides: {
                        GFYgTSRd8: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: G(1380),
                            pixelHeight: 1940,
                            pixelWidth: 3200,
                            sizes: `100vw`,
                            src: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg`,
                            srcSet: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-8f56c7.jpg 512w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-28a060.jpg 1024w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4.jpg 2048w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg 3200w`,
                          },
                        },
                        X5kbr1B0N: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: G(1350),
                            pixelHeight: 1940,
                            pixelWidth: 3200,
                            sizes: `100vw`,
                            src: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg`,
                            srcSet: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-8f56c7.jpg 512w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-28a060.jpg 1024w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4.jpg 2048w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg 3200w`,
                          },
                        },
                      },
                      children: T(z, {
                        as: `footer`,
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: G(1550),
                          pixelHeight: 1940,
                          pixelWidth: 3200,
                          sizes: `100vw`,
                          src: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg`,
                          srcSet: `../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-8f56c7.jpg 512w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-28a060.jpg 1024w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4.jpg 2048w,../../assets/images/ADlxnLSiRdgiNVCarrAD9bhrog4-ecbc83.jpg 3200w`,
                        },
                        className: `framer-1di7enw`,
                        "data-framer-name": `Footer`,
                        children: [
                          v() &&
                            C(z, {
                              background: {
                                alt: `image`,
                                fit: `fill`,
                                loading: G(1550),
                                pixelHeight: 2208,
                                pixelWidth: 1228,
                                sizes: `195px`,
                                src: `../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-d0c219.png`,
                                srcSet: `../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY.png 569w,../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-bc0231.png 1139w,../../assets/images/vIaAsYm0X0Llz9bStekLgh9ENY-d0c219.png 1228w`,
                              },
                              className: `framer-rusk7e hidden-1uqfk2w hidden-al2f27`,
                            }),
                          C(`div`, {
                            className: `framer-crlxad`,
                            "data-framer-name": `Container`,
                            children: C(L, {
                              breakpoint: h,
                              overrides: {
                                GFYgTSRd8: { y: 1480 },
                                X5kbr1B0N: { width: `min(100vw - 40px, 1200px)`, y: 1430 },
                              },
                              children: C(U, {
                                height: 789,
                                width: `min(100vw - 60px, 1200px)`,
                                y: 1730,
                                children: C(W, {
                                  className: `framer-9beaep-container`,
                                  nodeId: `ONgItd3xb`,
                                  scopeId: `JfNPK1BBD`,
                                  children: C(L, {
                                    breakpoint: h,
                                    overrides: {
                                      GFYgTSRd8: { variant: Ta(`UfjxGbghg`) },
                                      X5kbr1B0N: { variant: Ta(`FTPJ9L5hl`) },
                                    },
                                    children: C(q, {
                                      height: `100%`,
                                      id: `ONgItd3xb`,
                                      layoutId: `ONgItd3xb`,
                                      style: { width: `100%` },
                                      variant: Ta(`iLiSr8N_l`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                          }),
                          v() &&
                            C(z, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: G(2549),
                                pixelHeight: 1026,
                                pixelWidth: 6400,
                                positionX: `center`,
                                positionY: `top`,
                                sizes: `100vw`,
                                src: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png`,
                                srcSet: `../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-460933.png 512w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-684486.png 1024w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw.png 2048w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-22f744.png 4096w,../../assets/images/LEGU8caadfBTnWPjFDRFCLIhaYw-bf0ec6.png 6400w`,
                              },
                              className: `framer-vtwhvd hidden-1uqfk2w hidden-al2f27`,
                              "data-framer-name": `Cloud`,
                            }),
                          v() &&
                            C(`div`, {
                              className: `framer-5b5kk3 hidden-1uqfk2w hidden-al2f27`,
                              "data-framer-name": `BG`,
                            }),
                          C(`div`, { className: `framer-6tl5tq`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-vgysau`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-seknw4`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-1swq94p`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-6l4cqi`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-1xqahdl`, "data-framer-name": `Line` }),
                          C(`div`, { className: `framer-1qolzs3`, "data-framer-name": `Line` }),
                        ],
                      }),
                    }),
                    T(D.div, {
                      className: `framer-1der9bn`,
                      "data-framer-name": `You Can Remove This`,
                      children: [
                        te() &&
                          C(U, {
                            height: 110,
                            width: `159px`,
                            y: 717,
                            children: C(va, {
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              className: `framer-1cqby93-container hidden-al2f27`,
                              nodeId: `tfXxyaEED`,
                              rendersWithMotion: !0,
                              scopeId: `JfNPK1BBD`,
                              children: C(Q, {
                                height: `100%`,
                                id: `tfXxyaEED`,
                                layoutId: `tfXxyaEED`,
                                style: { width: `100%` },
                                us9R2YTHv: `https://templatemunk.lemonsqueezy.com/checkout/buy/a25dd3cc-e542-46d0-bfc1-31fe92e52932`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        C(U, {
                          height: 46,
                          y: 837,
                          children: C(W, {
                            className: `framer-3zfxdu-container`,
                            nodeId: `oq1yCJbtx`,
                            scopeId: `JfNPK1BBD`,
                            children: C($, {
                              gy21iSR9V: `var(--token-4a30d851-0d83-42d8-8d9a-c18d2d681c86, rgb(255, 255, 255))`,
                              haMe1kBNN: `https://munks.design/`,
                              height: `100%`,
                              id: `oq1yCJbtx`,
                              layoutId: `oq1yCJbtx`,
                              otdsfUVUD: `More Templates`,
                              width: `100%`,
                            }),
                          }),
                        }),
                        C(U, {
                          height: 46,
                          y: 893,
                          children: C(W, {
                            className: `framer-popaud-container`,
                            nodeId: `WNZDsGcxT`,
                            scopeId: `JfNPK1BBD`,
                            children: C($, {
                              gy21iSR9V: `var(--token-ef76006a-71ef-4580-8cc5-023ea34f9970, rgb(191, 232, 255))`,
                              haMe1kBNN: `https://munks.design/all-access`,
                              height: `100%`,
                              id: `WNZDsGcxT`,
                              layoutId: `WNZDsGcxT`,
                              otdsfUVUD: `All Access`,
                              width: `100%`,
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                C(`div`, { id: `template-overlay` }),
              ],
            }),
          })
        );
      })),
      (Fa = (e) =>
        e === Xe.canvas || e === Xe.export
          ? [
              ...ka,
              ...Da.flatMap((e) => {
                let t = Oa[e];
                return Ea[e].map((e) => `${t} {${e}}`);
              }),
            ]
          : [...ka, ...Da.map((e) => `@media ${Aa[e]} { ${Ea[e].join(` `)} }`)]),
      (Ia = Ze(Pa, Fa, `framer-AXpUj`)),
      (Ia.displayName = `Inner Template`),
      (Ia.defaultProps = { height: 2735, width: 1260 }),
      M(Ia, {
        fCqwjMMxm: {
          defaultValue: `Get in touch`,
          displayTextArea: !1,
          title: `Title`,
          type: B.String,
        },
      }),
      I(
        Ia,
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
          ...ha,
          ...ga,
          ..._a,
          ...ya,
          ...ye(da),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Ia.loader = {
        load: (e, t) => (
          t.locale,
          Promise.allSettled([V(Z, {}, t), V(q, {}, t), V(Q, {}, t), V($, {}, t)])
        ),
      }));
  });
function Ra({ webPageId: e, children: t, style: n, ...r }) {
  let i = { fCqwjMMxm: `Get in touch` },
    a = { ...i, fCqwjMMxm: `Sign up` },
    o = { ...i, fCqwjMMxm: `Sign in` },
    s = { ...i, fCqwjMMxm: `Forgot passwor` },
    c = { ...i, fCqwjMMxm: `Reset password` },
    l =
      {
        DHYZ8McyT: { ...i, fCqwjMMxm: `Account` },
        koM6IndlE: s,
        KyoFmDI9b: o,
        lAVKJFGgS: i,
        O1MU31CkI: a,
        PPt3ASS2o: c,
      }[e] ?? {};
  switch (e) {
    case `augiA20Il`:
    case `zSKArY_ps`:
      return v(Bi, { ...l, key: `MainTemplate`, style: n }, t(!0));
    case `lAVKJFGgS`:
    case `O1MU31CkI`:
    case `KyoFmDI9b`:
    case `koM6IndlE`:
    case `PPt3ASS2o`:
    case `DHYZ8McyT`:
      return v(Ia, { ...l, key: `InnerTemplate`, style: n }, t(!0));
    case `R5WzJToo0`:
      return v(la, { ...l, key: `Template1`, style: n }, t(!0));
    default:
      return t(!1);
  }
}
function za(e) {
  switch (e) {
    case `augiA20Il`:
    case `zSKArY_ps`:
      return [
        { hash: `txjn6f`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `vsh3g8`, mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)` },
        { hash: `fd3ata`, mediaQuery: `(min-width: 1200px)` },
      ];
    case `lAVKJFGgS`:
    case `O1MU31CkI`:
    case `KyoFmDI9b`:
    case `koM6IndlE`:
    case `PPt3ASS2o`:
    case `DHYZ8McyT`:
      return [
        { hash: `al2f27`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `1uqfk2w`, mediaQuery: `(min-width: 810px) and (max-width: 1259.98px)` },
        { hash: `2rjakn`, mediaQuery: `(min-width: 1260px)` },
      ];
    case `R5WzJToo0`:
      return [
        { hash: `2qww16`, mediaQuery: `(max-width: 809.98px)` },
        { hash: `1avtuqj`, mediaQuery: `(min-width: 810px) and (max-width: 1259.98px)` },
        { hash: `9gj9i4`, mediaQuery: `(min-width: 1260px)` },
      ];
    default:
      return;
  }
}
async function Ba({
  routeId: e,
  pathVariables: t,
  canonicalPathVariables: a,
  localeId: o,
  collectionItemId: s,
  contentLocaleId: l,
  shouldResolveInitialRouteContentState: u = !1,
}) {
  let d = Ua[e].page.preload();
  (Ae({
    checkServerSideRouter: !0,
    disableCustomCode: !1,
    disableHoverOnMobile: !1,
    editorBarDisableFrameAncestorsSecurity: !1,
    motionDivToDiv: !1,
    onPageLocalizationSupport: !0,
    onPageMoveTool: !0,
    onPageRichTextBlockSelection: !0,
    scrollRestoration: !0,
    synchronousNavigationOnDesktop: !1,
    yieldOnTap: !1,
  }),
    fe(qa));
  let p = v(Pe, {
    children: v(Ge, {
      children: v(Ne, {
        isWebsite: !0,
        environment: `site`,
        routeId: e,
        pathVariables: t,
        canonicalPathVariables: a,
        routes: Ua,
        collectionUtils: Ga,
        serverDatabaseClient: Ka,
        framerSiteId: qa,
        notFoundPage: P(() => import("./be1hUTvFMQC9OYSBeJfF2f1ueYYK-0_t-9Mnf1BbPto.DESNU47b.mjs")),
        isReducedMotion: void 0,
        localeId: o,
        locales: Wa,
        preserveQueryParams: void 0,
        siteCanonicalURL: void 0,
        EditorBar:
          r === void 0
            ? void 0
            : (() => {
                if (Ya) {
                  console.log(`[Framer On-Page Editing] Unavailable because navigator is bot`);
                  return;
                }
                return P(async () => {
                  r.__framer_editorBarDependencies = {
                    __version: 3,
                    framer: { useCurrentRoute: Be, useLocaleInfo: Me, useRouter: Te },
                    react: {
                      createElement: v,
                      Fragment: c,
                      memo: i,
                      useCallback: n,
                      useEffect: g,
                      useRef: E,
                      useState: re,
                      useLayoutEffect: f,
                    },
                    "react-dom": { createPortal: h },
                  };
                  let { createEditorBar: e } = await import(
                    `data:text/javascript,export%20const%20createEditorBar=()=>()=>null`
                  );
                  return { default: e() };
                });
              })(),
        adaptLayoutToTextDirection: !0,
        LayoutTemplate: Ra,
        loadSnippetsModule: new je(
          () => import("./l50CnD6X_tOhpdKRVLauw-xtILdFDp6bOxKOe_-cTdw.xvBIEt5x.mjs")
        ),
        initialCollectionItemId: s,
        initialContentLocaleIdOverride: l,
      }),
    }),
    value: { routes: {} },
  });
  return (await d, p);
}
function Va() {
  Ja && r.__framer_events.push(arguments);
}
async function Ha(e, t) {
  function n(e, t, n = !0) {
    if (e.caught || r.__framer_hadFatalError) return;
    let i = t?.componentStack;
    if (n) {
      if (
        (console.warn(
          `Caught a recoverable error. The site is still functional, but might have some UI flickering or degraded page load performance. If you are the author of this website, update external components and check recently added custom code or code overrides to fix the following server/client mismatches:
`,
          e,
          i
        ),
        Math.random() > 0.01)
      )
        return;
    } else
      console.error(
        `Caught a fatal error. Please report the following to the Framer team via https://www.framer.com/contact/:
`,
        e,
        i
      );
    Va(n ? `published_site_load_recoverable_error` : `published_site_load_error`, {
      message: String(e),
      componentStack: i,
      stack: i ? void 0 : e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    });
  }
  try {
    let i, a, o, c, l, u, d;
    if (e)
      ((d = JSON.parse(t.dataset.framerHydrateV2)),
        (i = d.routeId),
        (a = d.localeId),
        (o = d.contentLocaleId),
        (c = d.pathVariables),
        (l = d.canonicalPathVariables),
        (u = d.breakpoints),
        (i = we(Ua, i)));
    else {
      we(Ua, void 0);
      let e = performance
        .getEntriesByType(`navigation`)[0]
        ?.serverTiming?.find((e) => e.name === `route`)?.description;
      if (e) {
        let t = new URLSearchParams(e);
        ((i = t.get(`id`)), (a = t.get(`locale`)));
        for (let [e, n] of t.entries()) e.startsWith(`var.`) && ((c ??= {}), (c[e.slice(4)] = n));
      }
      if (!i || !a) {
        let e = Se(Ua, decodeURIComponent(location.pathname), !0, Wa);
        ((i = e.routeId), (a = e.localeId), (c = e.pathVariables));
      }
    }
    let f = Ba({
      routeId: i,
      localeId: a,
      contentLocaleId: o,
      pathVariables: c,
      canonicalPathVariables: l,
      collectionItemId: e ? d?.collectionItemId : void 0,
      shouldResolveInitialRouteContentState: !e,
    });
    r !== void 0 &&
      (async () => {
        let e = Ua[i],
          t = Wa.find(({ id: e }) => (a ? e === a : e === "default")).code,
          n = d?.collectionItemId ?? null;
        if (n === null && e?.collectionId && Ga) {
          let r = await Ga[e.collectionId]?.(),
            [i] = Object.values(c);
          r && typeof i == `string` && (n = (await r.getRecordIdBySlug(i, t || void 0)) ?? null);
        }
        let o = Intl.DateTimeFormat().resolvedOptions(),
          s = o.timeZone,
          l = o.locale;
        (await new Promise((e) => {
          document.prerendering
            ? document.addEventListener(`prerenderingchange`, e, { once: !0 })
            : e();
        }),
          r.__framer_events.push([
            `published_site_pageview`,
            {
              framerSiteId: qa,
              version: 2,
              routePath: e?.path || `/`,
              collectionItemId: n,
              framerLocale: t || null,
              webPageId: e?.abTestingVariantId ?? i,
              abTestId: e?.abTestId,
              referrer: document.referrer || null,
              url: r.location.href,
              hostname: r.location.hostname || null,
              pathname: r.location.pathname || null,
              hash: r.location.hash || null,
              search: r.location.search || null,
              timezone: s,
              locale: l,
            },
            `eager`,
          ]),
          await ge({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }),
          document.dispatchEvent(
            new CustomEvent(`framer:pageview`, { detail: { framerLocale: t || null } })
          ));
      })();
    let p = await f;
    e
      ? (xe(`framer-rewrite-breakpoints`, () => {
          (ve(u), r.__framer_onRewriteBreakpoints?.(u));
        }),
        (Ya ? (e) => e() : s)(() => {
          (_e(), Re(), w(t, p, { onRecoverableError: n }));
        }))
      : S(t, { onRecoverableError: n }).render(p);
  } catch (e) {
    throw (n(e, void 0, !1), e);
  }
}
var Ua, Wa, Ga, Ka, qa, Ja, Ya;
t(() => {
  if (
    (p(),
    N(),
    o(),
    x(),
    b(),
    Vi(),
    ua(),
    La(),
    (Ua = {
      augiA20Il: {
        elements: {
          BllTPa7ax: `testimonial`,
          DdZhzy_GM: `curriculum`,
          F0TAo7Gf5: `feature`,
          ft_MhHSmH: `pricing`,
          GWhAx0Im3: `text-trigger`,
        },
        page: P(() => import("./LkGnXQiHMxN-hjWV6clnXSou6YaThIYQ9Yh152Fwb78.Fg98yMW0.mjs")),
        path: `/`,
      },
      lAVKJFGgS: {
        elements: {},
        page: P(() => import("./sdvjZcDXXLofJ0Q0hdoh1FS236VktWFmRlwXSzwlKxs.wWoXrfjC.mjs")),
        path: `/contact`,
      },
      R5WzJToo0: {
        elements: {},
        page: P(() => import("./be1hUTvFMQC9OYSBeJfF2f1ueYYK-0_t-9Mnf1BbPto.DESNU47b.mjs")),
        path: `/404`,
      },
      O1MU31CkI: {
        elements: {},
        page: P(() => import("./AeR1tFad2aua2DdQp_wRuj7tx2RvMc1jpGLeUMp96hQ.BssgSx0f.mjs")),
        path: `/sign-up`,
      },
      KyoFmDI9b: {
        elements: {},
        page: P(() => import("./ItoaC_M3lHS-C7lkkH3fzX_zMd7O9gulNaB1AXeNCaM.2d4uh1TB.mjs")),
        path: `/sign-in`,
      },
      koM6IndlE: {
        elements: {},
        page: P(() => import("./0jVu0ErgscCrY3JSHhSCM5WuOq_T7896_qxQM0zVWVU.C_tpBM_s.mjs")),
        path: `/forgot-password`,
      },
      PPt3ASS2o: {
        elements: {},
        page: P(() => import("./NMLNqwMJcXPJBlgqY2dtf0pSrnPR2yDK2pCuqFCUb2k.D3n060dn.mjs")),
        path: `/reset-password`,
      },
      DHYZ8McyT: {
        elements: {},
        page: P(() => import("./YcTjH1CVJ7BfgV27AwMIvzLVQkhpw4FtqpMiQbBvYnY.CPBclLbg.mjs")),
        path: `/account`,
      },
      zSKArY_ps: {
        collectionId: `hbTJSza8U`,
        elements: {},
        page: P(() => import("./Jwpaqmosqe3UJdo7yv04scIS2Q7fGP74iwR2olLMnyc.CKdRxpm_.mjs")),
        path: `/policy/:y3TE1Ijvp`,
      },
    }),
    (Wa = [{ code: `en-US`, id: `default`, name: `English`, slug: ``, textDirection: `ltr` }]),
    (Ga = {
      hbTJSza8U: async () =>
        (await import("./00WonT2zxY228MbeP5cyo2zkqaSMfVOMFgorknAVt0k.DitH6Vez.mjs"))?.utils,
    }),
    (Ka = void 0),
    (qa = `4aebeb9d1987d811d899bc5aee3081b1053a9c632ee53294c677c78f0903a969`),
    (Ja = typeof document < `u`),
    (Ya = Ja && /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(ae.userAgent)),
    Ja)
  ) {
    ((r.__framer_importFromPackage = (e, t) => () =>
      v(Ee, { error: `Package component not supported: "` + t + `" in "` + e + `"` })),
      (r.__framer_events = r.__framer_events || []),
      Ce());
    let e = document.getElementById(`main`);
    `framerHydrateV2` in e.dataset ? Ha(!0, e) : Ha(!1, e);
  }
})();
export { za as getLayoutTemplateBreakpoints, Ba as getPageRoot };
//# sourceMappingURL=script_main.wc8EF_KS.mjs.map
