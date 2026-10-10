import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  c as a,
  j as o,
  l as s,
  s as ee,
  u as c,
  v as l,
  x as te,
} from "./react.ClsXD4bF.mjs";
import { a as u, r as ne, t as d, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  A as p,
  At as m,
  Ct as h,
  D as g,
  Dt as _,
  Et as v,
  F as y,
  G as b,
  L as x,
  M as S,
  Mt as C,
  O as w,
  Ot as re,
  S as T,
  Tt as ie,
  U as E,
  W as D,
  Z as ae,
  _ as O,
  _t as k,
  a as A,
  bt as j,
  dt as M,
  f as oe,
  ft as se,
  gt as ce,
  ht as le,
  i as N,
  j as P,
  jt as F,
  kt as I,
  m as L,
  n as ue,
  o as R,
  pt as de,
  q as fe,
  rt as z,
  v as pe,
  wt as B,
  x as me,
  yt as he,
} from "./framer.CbUxDv78.mjs";
import { i as V, n as ge, r as H, t as _e } from "./KKnW9Hd3v.TmuhifDy.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./tEGb3dIPL.DmfZkyjB.mjs";
import { a as Ee, i as De, s as Oe } from "./FramerAuthV2.C6xJz_Rm.mjs";
import { n as ke, r as Ae, t as je } from "./t9wa225Yz.GkMvtcH4.mjs";
import { i as Me, n as Ne, r as U, t as Pe } from "./DvIQKtnpQ.vN-Iv-RN.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./hlnA5U_q8.BHcvhXEy.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./J8amzom6A.B1vaRlC_.mjs";
import { n as Ue, r as We, t as Ge } from "./hMT_4WIcb.HAw7-3do.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./uYUgOfNpa.CpQT0pAt.mjs";
import { n as Xe, t as W } from "./kQEMcmtw4.DU6hy3T2.mjs";
import { n as Ze, t as Qe } from "./iJsHjIJ9h.8QcW4sN_.mjs";
import { i as $e, t as et } from "./WOc_qkaMo.DX5U9UcV.mjs";
import { i as tt, n as nt, r as rt, t as it } from "./ZP459Pync.B8Xb2kUo.mjs";
import { i as at, n as ot, r as st, t as ct } from "./JT0NI1fXe.CFHqvkLa.mjs";
import { i as lt, n as ut, r as dt, t as ft } from "./LHPtOUqDF.DUJgW-uu.mjs";
import pt, { t as mt } from "./F1hwHH2_uglDlo1Y1x3_kDDgEPCo-fNTf4NP4Im_8NI.CZfNfWow.mjs";
function ht(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  G,
  Dt = e(() => {
    (ee(),
      ae(),
      d(),
      t(),
      (gt = { bjPeJQsCQ: { hover: !0 }, LSbAhFz0P: { hover: !0 } }),
      (_t = [`bjPeJQsCQ`, `RJM3TFy_e`, `LSbAhFz0P`]),
      (vt = `framer-Krvzl`),
      (yt = {
        bjPeJQsCQ: `framer-v-1mvi8e7`,
        LSbAhFz0P: `framer-v-7tzdcv`,
        RJM3TFy_e: `framer-v-1kskvv`,
      }),
      (bt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (xt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (St = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(u.Provider, { value: o, children: t });
      }),
      (Ct = f.create(n)),
      (wt = { "Default Overlay": `LSbAhFz0P`, Default: `bjPeJQsCQ`, Small: `RJM3TFy_e` }),
      (Tt = ({ click: e, height: t, id: n, image: r, width: i, ...a }) => ({
        ...a,
        HgDDhdKnN: r ??
          a.HgDDhdKnN ?? {
            alt: `template image`,
            src: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-234cd7.jpg`,
            srcSet: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-234cd7.jpg 512w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-1e5e5c.jpg 1024w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-537b1e.jpg 1208w`,
          },
        variant: wt[a.variant] ?? a.variant ?? `bjPeJQsCQ`,
        ysgm5mp2t: e ?? a.ysgm5mp2t,
      })),
      (Et = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = re(
        l(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: ee } = he(),
            c = se(),
            {
              style: l,
              className: u,
              layoutId: d,
              variant: p,
              HgDDhdKnN: m,
              ysgm5mp2t: h,
              ...g
            } = Tt(e),
            {
              baseVariant: v,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: re,
              setGestureState: T,
              setVariant: ie,
              variants: E,
            } = _({
              cycleOrder: _t,
              defaultVariant: `bjPeJQsCQ`,
              enabledGestures: gt,
              ref: r,
              variant: p,
              variantClassNames: yt,
            }),
            D = Et(e, E),
            { activeVariantCallback: ae, delay: O } = M(v),
            k = ae(async (...e) => {
              if ((T({ isPressed: !1 }), h && (await h(...e)) === !1)) return !1;
            }),
            A = y(vt);
          return s(ne, {
            id: d ?? i,
            children: s(Ct, {
              animate: E,
              initial: !1,
              children: s(St, {
                value: bt,
                children: s(f.div, {
                  ...g,
                  ...C,
                  className: y(A, `framer-1mvi8e7`, u, x),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: D,
                  layoutId: `bjPeJQsCQ`,
                  onTap: k,
                  ref: r,
                  style: {
                    backgroundColor: `rgba(0, 0, 0, 0)`,
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    ...l,
                  },
                  variants: {
                    "bjPeJQsCQ-hover": { backgroundColor: `rgba(0, 0, 0, 0)` },
                    LSbAhFz0P: { backgroundColor: `rgb(217, 217, 217)` },
                    RJM3TFy_e: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                  },
                  ...ht(
                    {
                      "bjPeJQsCQ-hover": { "data-framer-name": void 0 },
                      "LSbAhFz0P-hover": { "data-framer-name": void 0 },
                      LSbAhFz0P: { "data-framer-name": `Default Overlay` },
                      RJM3TFy_e: { "data-framer-name": `Small` },
                    },
                    v,
                    w
                  ),
                  children: s(L, {
                    background: {
                      alt: ``,
                      fit: `fill`,
                      loading: b(
                        (c?.y || 0) +
                          (0 + ((c?.height || 160) - 0 - ((c?.height || 160) - 0) * 1) / 2)
                      ),
                      pixelHeight: 640,
                      pixelWidth: 592,
                      sizes: c?.width || `100vw`,
                      ...xt(m),
                      positionX: `center`,
                      positionY: `center`,
                    },
                    className: `framer-1bbofh0`,
                    "data-framer-name": `Image`,
                    layoutDependency: D,
                    layoutId: `maNtKHFdF`,
                    style: {
                      borderBottomLeftRadius: 10,
                      borderBottomRightRadius: 10,
                      borderTopLeftRadius: 10,
                      borderTopRightRadius: 10,
                      scale: 1,
                    },
                    variants: {
                      "bjPeJQsCQ-hover": { scale: 1.1 },
                      "LSbAhFz0P-hover": { scale: 1.1 },
                    },
                    ...ht(
                      {
                        RJM3TFy_e: {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: b(
                              (c?.y || 0) +
                                (0 + ((c?.height || 148) - 0 - ((c?.height || 148) - 0) * 1) / 2)
                            ),
                            pixelHeight: 640,
                            pixelWidth: 592,
                            sizes: c?.width || `100vw`,
                            ...xt(m),
                            positionX: `center`,
                            positionY: `center`,
                          },
                        },
                      },
                      v,
                      w
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-Krvzl.framer-u68l04, .framer-Krvzl .framer-u68l04 { display: block; }`,
          `.framer-Krvzl.framer-1mvi8e7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 160px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 234px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Krvzl .framer-1bbofh0 { flex: none; height: 100%; position: relative; width: 100%; z-index: 4; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-Krvzl.framer-1mvi8e7 { gap: 0px; } .framer-Krvzl.framer-1mvi8e7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-Krvzl.framer-1mvi8e7 > :first-child { margin-left: 0px; } .framer-Krvzl.framer-1mvi8e7 > :last-child { margin-right: 0px; } }`,
          `.framer-Krvzl.framer-v-1kskvv.framer-1mvi8e7 { aspect-ratio: 0.8783783783783784 / 1; height: var(--framer-aspect-ratio-supported, 148px); width: 130px; }`,
          `.framer-Krvzl.framer-v-7tzdcv.framer-1mvi8e7, .framer-Krvzl.framer-v-1mvi8e7.hover.framer-1mvi8e7 { aspect-ratio: 1.4625 / 1; height: var(--framer-aspect-ratio-supported, 160px); }`,
          `.framer-Krvzl.framer-v-7tzdcv .framer-1bbofh0 { mix-blend-mode: luminosity; z-index: 0; }`,
        ],
        `framer-Krvzl`
      )),
      (G.displayName = `Single Image`),
      (G.defaultProps = { height: 160, width: 234 }),
      S(G, {
        variant: {
          options: [`bjPeJQsCQ`, `RJM3TFy_e`, `LSbAhFz0P`],
          optionTitles: [`Default`, `Small`, `Default Overlay`],
          title: `Variant`,
          type: R.Enum,
        },
        HgDDhdKnN: {
          __defaultAssetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `template image`,
            assetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          },
          title: `Image`,
          type: R.ResponsiveImage,
        },
        ysgm5mp2t: { title: `Click`, type: R.EventHandler },
      }),
      P(G, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  });
function K(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  q,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  J,
  Ut = e(() => {
    (ee(),
      ae(),
      d(),
      t(),
      Dt(),
      (Ot = C(m(L))),
      (kt = E(G)),
      (At = [
        `beqi5RKJ3`,
        `Dddvw5nzx`,
        `MCCwOEIqC`,
        `QkfD21ASd`,
        `JKiYZeVpy`,
        `d9T50UHoy`,
        `dSU5omABq`,
        `pm_Vz_mXb`,
      ]),
      (jt = `framer-8CMRd`),
      (Mt = {
        beqi5RKJ3: `framer-v-rkz9gw`,
        d9T50UHoy: `framer-v-1ksrshi`,
        Dddvw5nzx: `framer-v-geoee3`,
        dSU5omABq: `framer-v-1bvkv2d`,
        JKiYZeVpy: `framer-v-184ymne`,
        MCCwOEIqC: `framer-v-o3xlt`,
        pm_Vz_mXb: `framer-v-2qam7q`,
        QkfD21ASd: `framer-v-quu4yi`,
      }),
      (Nt = { damping: 40, delay: 0.3, mass: 1, stiffness: 200, type: `spring` }),
      (q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Pt = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.6, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (Ft = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1.1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (It = (e, t) => `translate(-50%, -50%) ${t}`),
      (Lt = (e, t) => `translateY(-50%) ${t}`),
      (Rt = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          o = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return s(u.Provider, { value: o, children: t });
      }),
      (zt = f.create(n)),
      (Bt = {
        "Small Step-01": `QkfD21ASd`,
        "Small Step-02": `JKiYZeVpy`,
        "Small Step-03": `d9T50UHoy`,
        "Small Step-04": `dSU5omABq`,
        "Step -04": `pm_Vz_mXb`,
        "Step 01": `beqi5RKJ3`,
        "Step 02": `Dddvw5nzx`,
        "Step 03": `MCCwOEIqC`,
      }),
      (Vt = ({
        height: e,
        id: t,
        image01: n,
        image02: r,
        image03: i,
        image04: a,
        width: o,
        ...s
      }) => ({
        ...s,
        fshar_Uy9: a ??
          s.fshar_Uy9 ?? {
            alt: `image 3`,
            src: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg`,
            srcSet: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E.jpg 512w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg 1024w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-bd3cd7.jpg 2048w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg 2400w`,
          },
        Hv1dw2yrC: i ??
          s.Hv1dw2yrC ?? {
            alt: `image 2`,
            src: `https://framerusercontent.com/images/YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg 2400w`,
          },
        kGXiFi0YT: r ??
          s.kGXiFi0YT ?? {
            alt: `image 01`,
            src: `https://framerusercontent.com/images/Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?scale-down-to=1024`,
            srcSet: `https://framerusercontent.com/images/Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg 2400w`,
          },
        rUVoOR8Zb: n ??
          s.rUVoOR8Zb ?? {
            alt: `template image`,
            src: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-1e5e5c.jpg`,
            srcSet: `../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-234cd7.jpg 512w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-1e5e5c.jpg 1024w,../../assets/images/8zvtKVafLdQFjCL5Ahk2ihCaTk-537b1e.jpg 1208w`,
          },
        variant: Bt[s.variant] ?? s.variant ?? `beqi5RKJ3`,
      })),
      (Ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = re(
        l(function (e, t) {
          let n = o(null),
            r = t ?? n,
            i = te(),
            { activeLocale: a, setLocale: ee } = he(),
            l = se(),
            {
              style: u,
              className: d,
              layoutId: m,
              variant: h,
              rUVoOR8Zb: g,
              kGXiFi0YT: v,
              Hv1dw2yrC: x,
              fshar_Uy9: S,
              ...C
            } = Vt(e),
            {
              baseVariant: w,
              classNames: re,
              clearLoadingGesture: T,
              gestureHandlers: ie,
              gestureVariant: E,
              isLoading: D,
              setGestureState: ae,
              setVariant: O,
              variants: k,
            } = _({
              cycleOrder: At,
              defaultVariant: `beqi5RKJ3`,
              ref: r,
              variant: h,
              variantClassNames: Mt,
            }),
            A = Ht(e, k),
            { activeVariantCallback: j, delay: oe } = M(w),
            ce = j(async (...e) => {
              O(`Dddvw5nzx`);
            }),
            le = j(async (...e) => {
              O(`MCCwOEIqC`);
            }),
            P = j(async (...e) => {
              O(`pm_Vz_mXb`);
            }),
            F = j(async (...e) => {
              O(`JKiYZeVpy`);
            }),
            I = j(async (...e) => {
              O(`d9T50UHoy`);
            }),
            ue = j(async (...e) => {
              O(`dSU5omABq`);
            }),
            R = j(async (...e) => {
              O(`QkfD21ASd`);
            }),
            de = j(async (...e) => {
              O(`beqi5RKJ3`);
            }),
            fe = j(async (...e) => {
              O(`beqi5RKJ3`);
            }),
            z = j(async (...e) => {
              O(`QkfD21ASd`);
            }),
            pe = j(async (...e) => {
              O(`Dddvw5nzx`);
            }),
            B = j(async (...e) => {
              O(`JKiYZeVpy`);
            }),
            me = j(async (...e) => {
              O(`MCCwOEIqC`);
            }),
            V = j(async (...e) => {
              O(`d9T50UHoy`);
            }),
            ge = j(async (...e) => {
              O(`pm_Vz_mXb`);
            }),
            H = j(async (...e) => {
              O(`dSU5omABq`);
            }),
            _e = y(jt),
            ve = () =>
              ![
                `Dddvw5nzx`,
                `MCCwOEIqC`,
                `JKiYZeVpy`,
                `d9T50UHoy`,
                `dSU5omABq`,
                `pm_Vz_mXb`,
              ].includes(w),
            ye = () => !![`Dddvw5nzx`, `JKiYZeVpy`].includes(w),
            be = () => !![`MCCwOEIqC`, `d9T50UHoy`].includes(w),
            xe = () => !![`dSU5omABq`, `pm_Vz_mXb`].includes(w);
          return s(ne, {
            id: m ?? i,
            children: s(zt, {
              animate: k,
              initial: !1,
              children: s(Rt, {
                value: Nt,
                children: c(f.div, {
                  ...C,
                  ...ie,
                  className: y(_e, `framer-rkz9gw`, d, re),
                  "data-framer-name": `Step 01`,
                  layoutDependency: A,
                  layoutId: `beqi5RKJ3`,
                  ref: r,
                  style: { ...u },
                  ...K(
                    {
                      d9T50UHoy: { "data-framer-name": `Small Step-03` },
                      Dddvw5nzx: { "data-framer-name": `Step 02` },
                      dSU5omABq: { "data-framer-name": `Small Step-04` },
                      JKiYZeVpy: { "data-framer-name": `Small Step-02` },
                      MCCwOEIqC: { "data-framer-name": `Step 03` },
                      pm_Vz_mXb: { "data-framer-name": `Step -04` },
                      QkfD21ASd: { "data-framer-name": `Small Step-01` },
                    },
                    w,
                    E
                  ),
                  children: [
                    c(f.div, {
                      className: `framer-ccbw01`,
                      "data-framer-name": `Image Wrap`,
                      layoutDependency: A,
                      layoutId: `BMFBNNlIV`,
                      children: [
                        c(f.div, {
                          className: `framer-1o8jqmc`,
                          "data-framer-name": `Big Image`,
                          layoutDependency: A,
                          layoutId: `h0JmNNWey`,
                          children: [
                            ve() &&
                              s(Ot, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Pt,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 612,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 744) - 0 - 744) / 2 + 0 + 0) +
                                      0 +
                                      0
                                  ),
                                  pixelHeight: 3416,
                                  pixelWidth: 2560,
                                  sizes: l?.width || `100vw`,
                                  ...q(g),
                                  positionX: `center`,
                                  positionY: `center`,
                                },
                                className: `framer-1569tzt`,
                                "data-framer-appear-id": `1569tzt`,
                                "data-framer-name": `Image O1`,
                                initial: Ft,
                                layoutDependency: A,
                                layoutId: `X76eyV9uE`,
                                optimized: !0,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                                variants: {
                                  QkfD21ASd: {
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                  },
                                },
                                ...K(
                                  {
                                    QkfD21ASd: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 3416,
                                        pixelWidth: 2560,
                                        sizes: l?.width || `100vw`,
                                        ...q(g),
                                        positionX: `center`,
                                        positionY: `center`,
                                      },
                                    },
                                  },
                                  w,
                                  E
                                ),
                              }),
                            ye() &&
                              s(Ot, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Pt,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 612,
                                  pixelHeight: 640,
                                  pixelWidth: 592,
                                  ...q(v),
                                },
                                className: `framer-hjz8ru`,
                                "data-framer-appear-id": `hjz8ru`,
                                "data-framer-name": `Image O2`,
                                initial: Ft,
                                layoutDependency: A,
                                layoutId: `NyLSowRoQ`,
                                optimized: !0,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                                variants: {
                                  Dddvw5nzx: {
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                  },
                                  JKiYZeVpy: {
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                  },
                                },
                                ...K(
                                  {
                                    Dddvw5nzx: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 744) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(v),
                                      },
                                    },
                                    JKiYZeVpy: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(v),
                                      },
                                    },
                                  },
                                  w,
                                  E
                                ),
                              }),
                            be() &&
                              s(Ot, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Pt,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 612,
                                  pixelHeight: 640,
                                  pixelWidth: 592,
                                  ...q(x),
                                },
                                className: `framer-izzibk`,
                                "data-framer-appear-id": `izzibk`,
                                "data-framer-name": `Image 03`,
                                initial: Ft,
                                layoutDependency: A,
                                layoutId: `lbAU4WXdW`,
                                optimized: !0,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                                variants: {
                                  d9T50UHoy: {
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                  },
                                  MCCwOEIqC: {
                                    borderBottomLeftRadius: 10,
                                    borderBottomRightRadius: 10,
                                    borderTopLeftRadius: 10,
                                    borderTopRightRadius: 10,
                                  },
                                },
                                ...K(
                                  {
                                    d9T50UHoy: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(x),
                                      },
                                    },
                                    MCCwOEIqC: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(x),
                                      },
                                    },
                                  },
                                  w,
                                  E
                                ),
                              }),
                            xe() &&
                              s(Ot, {
                                __perspectiveFX: !1,
                                __smartComponentFX: !0,
                                __targetOpacity: 1,
                                animate: Pt,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  intrinsicHeight: 720,
                                  intrinsicWidth: 612,
                                  pixelHeight: 640,
                                  pixelWidth: 592,
                                  ...q(S),
                                },
                                className: `framer-wlowoe`,
                                "data-framer-appear-id": `wlowoe`,
                                "data-framer-name": `Image 04`,
                                initial: Ft,
                                layoutDependency: A,
                                layoutId: `z4T9rsL8N`,
                                optimized: !0,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                                variants: {
                                  dSU5omABq: {
                                    borderBottomLeftRadius: 16,
                                    borderBottomRightRadius: 16,
                                    borderTopLeftRadius: 16,
                                    borderTopRightRadius: 16,
                                  },
                                },
                                ...K(
                                  {
                                    dSU5omABq: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(S),
                                      },
                                    },
                                    pm_Vz_mXb: {
                                      background: {
                                        alt: ``,
                                        fit: `fill`,
                                        intrinsicHeight: 720,
                                        intrinsicWidth: 612,
                                        loading: b(
                                          (l?.y || 0) +
                                            0 +
                                            (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                            0 +
                                            0
                                        ),
                                        pixelHeight: 640,
                                        pixelWidth: 592,
                                        sizes: l?.width || `100vw`,
                                        ...q(S),
                                      },
                                    },
                                  },
                                  w,
                                  E
                                ),
                              }),
                          ],
                        }),
                        s(L, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: b(
                              (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 0 + 0) + 264
                            ),
                            pixelHeight: 48,
                            pixelWidth: 48,
                            src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                          },
                          className: `framer-1q01odr`,
                          "data-framer-name": `Arrow Righr`,
                          "data-highlight": !0,
                          layoutDependency: A,
                          layoutId: `lIr4FVQfg`,
                          onTap: ce,
                          style: {
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                          },
                          transformTemplate: It,
                          ...K(
                            {
                              d9T50UHoy: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: ue,
                              },
                              Dddvw5nzx: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 744) - 0 - 744) / 2 + 0 + 0) +
                                      262.6809
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: le,
                                transformTemplate: Lt,
                              },
                              dSU5omABq: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: R,
                              },
                              JKiYZeVpy: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: I,
                              },
                              MCCwOEIqC: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      264
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: P,
                              },
                              pm_Vz_mXb: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      264
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: de,
                              },
                              QkfD21ASd: {
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/AqVrTJNjJmRBc8aNAy0YZgcRh9E.svg`,
                                },
                                onTap: F,
                              },
                            },
                            w,
                            E
                          ),
                        }),
                        s(L, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            loading: b(
                              (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 0 + 0) + 264
                            ),
                            pixelHeight: 48,
                            pixelWidth: 48,
                            src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                          },
                          className: `framer-frqjrj`,
                          "data-framer-name": `Arrow Left`,
                          layoutDependency: A,
                          layoutId: `F8h60LAHM`,
                          style: {
                            borderBottomLeftRadius: 40,
                            borderBottomRightRadius: 40,
                            borderTopLeftRadius: 40,
                            borderTopRightRadius: 40,
                          },
                          transformTemplate: It,
                          ...K(
                            {
                              d9T50UHoy: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: F,
                              },
                              Dddvw5nzx: { "data-highlight": !0, onTap: de },
                              dSU5omABq: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: I,
                              },
                              JKiYZeVpy: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: R,
                              },
                              MCCwOEIqC: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      264
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: ce,
                              },
                              pm_Vz_mXb: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      264
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: le,
                              },
                              QkfD21ASd: {
                                "data-highlight": !0,
                                background: {
                                  alt: ``,
                                  fit: `fill`,
                                  loading: b(
                                    (l?.y || 0) +
                                      0 +
                                      (((l?.height || 200) - 0 - 744) / 2 + 0 + 0) +
                                      268.5
                                  ),
                                  pixelHeight: 48,
                                  pixelWidth: 48,
                                  src: `../../assets/images/ww7WFHPtSma9cSvD2LfqTtHuYDw.svg`,
                                },
                                onTap: ue,
                              },
                            },
                            w,
                            E
                          ),
                        }),
                      ],
                    }),
                    c(f.div, {
                      className: `framer-12tg8m0`,
                      "data-framer-name": `Image Stack`,
                      layoutDependency: A,
                      layoutId: `sEg3QmTfa`,
                      children: [
                        s(N, {
                          height: 152,
                          width: `max((${l?.width || `100vw`} - 48px) / 4, 1px)`,
                          y: (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 576 + 16) + 0,
                          ...K(
                            {
                              d9T50UHoy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              dSU5omABq: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              JKiYZeVpy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              MCCwOEIqC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              pm_Vz_mXb: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              QkfD21ASd: {
                                width: `max((${l?.width || `100vw`} - 30px) / 4, 1px)`,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                            },
                            w,
                            E
                          ),
                          children: s(p, {
                            className: `framer-rh0a9y-container`,
                            "data-framer-name": `Single Image 01`,
                            layoutDependency: A,
                            layoutId: `pbClT0Z8g-container`,
                            name: `Single Image 01`,
                            nodeId: `pbClT0Z8g`,
                            rendersWithMotion: !0,
                            scopeId: `UzyRYfah6`,
                            children: s(G, {
                              height: `100%`,
                              HgDDhdKnN: q(g),
                              id: `pbClT0Z8g`,
                              layoutId: `pbClT0Z8g`,
                              name: `Single Image 01`,
                              style: { height: `100%`, width: `100%` },
                              variant: `bjPeJQsCQ`,
                              width: `100%`,
                              ysgm5mp2t: fe,
                              ...K(
                                {
                                  d9T50UHoy: { variant: `RJM3TFy_e`, ysgm5mp2t: z },
                                  dSU5omABq: { variant: `RJM3TFy_e`, ysgm5mp2t: z },
                                  JKiYZeVpy: { variant: `RJM3TFy_e`, ysgm5mp2t: z },
                                  QkfD21ASd: { variant: `RJM3TFy_e`, ysgm5mp2t: z },
                                },
                                w,
                                E
                              ),
                            }),
                          }),
                        }),
                        s(N, {
                          height: 152,
                          width: `max((${l?.width || `100vw`} - 48px) / 4, 1px)`,
                          y: (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 576 + 16) + 0,
                          ...K(
                            {
                              d9T50UHoy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              dSU5omABq: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              JKiYZeVpy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              MCCwOEIqC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              pm_Vz_mXb: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              QkfD21ASd: {
                                width: `max((${l?.width || `100vw`} - 30px) / 4, 1px)`,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                            },
                            w,
                            E
                          ),
                          children: s(p, {
                            className: `framer-p4087j-container`,
                            layoutDependency: A,
                            layoutId: `KHwBOTE6M-container`,
                            nodeId: `KHwBOTE6M`,
                            rendersWithMotion: !0,
                            scopeId: `UzyRYfah6`,
                            children: s(G, {
                              height: `100%`,
                              HgDDhdKnN: q(v),
                              id: `KHwBOTE6M`,
                              layoutId: `KHwBOTE6M`,
                              style: { height: `100%`, width: `100%` },
                              variant: `bjPeJQsCQ`,
                              width: `100%`,
                              ysgm5mp2t: pe,
                              ...K(
                                {
                                  d9T50UHoy: { variant: `RJM3TFy_e`, ysgm5mp2t: B },
                                  dSU5omABq: { variant: `RJM3TFy_e`, ysgm5mp2t: B },
                                  JKiYZeVpy: { variant: `RJM3TFy_e`, ysgm5mp2t: B },
                                  QkfD21ASd: { variant: `RJM3TFy_e`, ysgm5mp2t: B },
                                },
                                w,
                                E
                              ),
                            }),
                          }),
                        }),
                        s(N, {
                          height: 152,
                          width: `max((${l?.width || `100vw`} - 48px) / 4, 1px)`,
                          y: (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 576 + 16) + 0,
                          ...K(
                            {
                              d9T50UHoy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              dSU5omABq: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              JKiYZeVpy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              MCCwOEIqC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              pm_Vz_mXb: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              QkfD21ASd: {
                                width: `max((${l?.width || `100vw`} - 30px) / 4, 1px)`,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                            },
                            w,
                            E
                          ),
                          children: s(p, {
                            className: `framer-wv5uw7-container`,
                            layoutDependency: A,
                            layoutId: `yANsTeB09-container`,
                            nodeId: `yANsTeB09`,
                            rendersWithMotion: !0,
                            scopeId: `UzyRYfah6`,
                            children: s(G, {
                              height: `100%`,
                              HgDDhdKnN: q(x),
                              id: `yANsTeB09`,
                              layoutId: `yANsTeB09`,
                              style: { height: `100%`, width: `100%` },
                              variant: `bjPeJQsCQ`,
                              width: `100%`,
                              ysgm5mp2t: me,
                              ...K(
                                {
                                  d9T50UHoy: { variant: `RJM3TFy_e`, ysgm5mp2t: V },
                                  dSU5omABq: { variant: `RJM3TFy_e`, ysgm5mp2t: V },
                                  JKiYZeVpy: { variant: `RJM3TFy_e`, ysgm5mp2t: V },
                                  QkfD21ASd: { variant: `RJM3TFy_e`, ysgm5mp2t: V },
                                },
                                w,
                                E
                              ),
                            }),
                          }),
                        }),
                        s(N, {
                          height: 152,
                          width: `max((${l?.width || `100vw`} - 48px) / 4, 1px)`,
                          y: (l?.y || 0) + 0 + (((l?.height || 744) - 0 - 744) / 2 + 576 + 16) + 0,
                          ...K(
                            {
                              d9T50UHoy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              dSU5omABq: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              JKiYZeVpy: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              MCCwOEIqC: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              pm_Vz_mXb: {
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                              QkfD21ASd: {
                                width: `max((${l?.width || `100vw`} - 30px) / 4, 1px)`,
                                y:
                                  (l?.y || 0) +
                                  0 +
                                  (((l?.height || 200) - 0 - 744) / 2 + 576 + 16) +
                                  0,
                              },
                            },
                            w,
                            E
                          ),
                          children: s(p, {
                            className: `framer-1pukilb-container`,
                            layoutDependency: A,
                            layoutId: `aEcN4TIjT-container`,
                            nodeId: `aEcN4TIjT`,
                            rendersWithMotion: !0,
                            scopeId: `UzyRYfah6`,
                            children: s(G, {
                              height: `100%`,
                              HgDDhdKnN: q(S),
                              id: `aEcN4TIjT`,
                              layoutId: `aEcN4TIjT`,
                              style: { height: `100%`, width: `100%` },
                              variant: `bjPeJQsCQ`,
                              width: `100%`,
                              ysgm5mp2t: ge,
                              ...K(
                                {
                                  d9T50UHoy: { variant: `RJM3TFy_e`, ysgm5mp2t: H },
                                  dSU5omABq: { variant: `RJM3TFy_e`, ysgm5mp2t: H },
                                  JKiYZeVpy: { variant: `RJM3TFy_e`, ysgm5mp2t: H },
                                  QkfD21ASd: { variant: `RJM3TFy_e`, ysgm5mp2t: H },
                                },
                                w,
                                E
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
          `.framer-8CMRd.framer-3tx1z0, .framer-8CMRd .framer-3tx1z0 { display: block; }`,
          `.framer-8CMRd.framer-rkz9gw { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 840px; }`,
          `.framer-8CMRd .framer-ccbw01 { aspect-ratio: 1.4583333333333333 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 576px); overflow: hidden; position: relative; width: 100%; }`,
          `.framer-8CMRd .framer-1o8jqmc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: 100%; justify-content: flex-start; left: 0px; overflow: hidden; padding: 0px; position: absolute; top: 0px; width: 100%; }`,
          `.framer-8CMRd .framer-1569tzt, .framer-8CMRd .framer-hjz8ru, .framer-8CMRd .framer-izzibk, .framer-8CMRd .framer-wlowoe { flex: none; height: 100%; position: relative; width: 100%; }`,
          `.framer-8CMRd .framer-1q01odr { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 94%; overflow: visible; position: absolute; top: 50%; width: 5%; }`,
          `.framer-8CMRd .framer-frqjrj { aspect-ratio: 1 / 1; cursor: pointer; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 6%; overflow: visible; position: absolute; top: 50%; width: 5%; }`,
          `.framer-8CMRd .framer-12tg8m0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-8CMRd .framer-rh0a9y-container, .framer-8CMRd .framer-p4087j-container, .framer-8CMRd .framer-wv5uw7-container, .framer-8CMRd .framer-1pukilb-container { aspect-ratio: 1.3026315789473684 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 152px); position: relative; width: 1px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8CMRd.framer-rkz9gw, .framer-8CMRd .framer-1o8jqmc, .framer-8CMRd .framer-12tg8m0 { gap: 0px; } .framer-8CMRd.framer-rkz9gw > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-8CMRd.framer-rkz9gw > :first-child { margin-top: 0px; } .framer-8CMRd.framer-rkz9gw > :last-child { margin-bottom: 0px; } .framer-8CMRd .framer-1o8jqmc > *, .framer-8CMRd .framer-12tg8m0 > * { margin: 0px; margin-left: calc(16px / 2); margin-right: calc(16px / 2); } .framer-8CMRd .framer-1o8jqmc > :first-child, .framer-8CMRd .framer-12tg8m0 > :first-child { margin-left: 0px; } .framer-8CMRd .framer-1o8jqmc > :last-child, .framer-8CMRd .framer-12tg8m0 > :last-child { margin-right: 0px; } }`,
          `.framer-8CMRd.framer-v-geoee3 .framer-1q01odr { left: unset; right: 39px; top: 50%; }`,
          `.framer-8CMRd.framer-v-geoee3 .framer-rh0a9y-container { order: 0; }`,
          `.framer-8CMRd.framer-v-geoee3 .framer-p4087j-container { order: 1; }`,
          `.framer-8CMRd.framer-v-geoee3 .framer-wv5uw7-container { order: 2; }`,
          `.framer-8CMRd.framer-v-geoee3 .framer-1pukilb-container { order: 3; }`,
          `.framer-8CMRd.framer-v-o3xlt .framer-ccbw01, .framer-8CMRd.framer-v-quu4yi .framer-ccbw01, .framer-8CMRd.framer-v-184ymne .framer-ccbw01, .framer-8CMRd.framer-v-1ksrshi .framer-ccbw01, .framer-8CMRd.framer-v-1bvkv2d .framer-ccbw01, .framer-8CMRd.framer-v-2qam7q .framer-ccbw01 { height: var(--framer-aspect-ratio-supported, 137px); }`,
          `.framer-8CMRd.framer-v-o3xlt .framer-1q01odr, .framer-8CMRd.framer-v-o3xlt .framer-frqjrj, .framer-8CMRd.framer-v-2qam7q .framer-1q01odr, .framer-8CMRd.framer-v-2qam7q .framer-frqjrj { height: var(--framer-aspect-ratio-supported, 200px); }`,
          `.framer-8CMRd.framer-v-o3xlt .framer-rh0a9y-container, .framer-8CMRd.framer-v-o3xlt .framer-p4087j-container, .framer-8CMRd.framer-v-o3xlt .framer-wv5uw7-container, .framer-8CMRd.framer-v-o3xlt .framer-1pukilb-container, .framer-8CMRd.framer-v-quu4yi .framer-rh0a9y-container, .framer-8CMRd.framer-v-quu4yi .framer-p4087j-container, .framer-8CMRd.framer-v-quu4yi .framer-wv5uw7-container, .framer-8CMRd.framer-v-quu4yi .framer-1pukilb-container, .framer-8CMRd.framer-v-184ymne .framer-rh0a9y-container, .framer-8CMRd.framer-v-184ymne .framer-p4087j-container, .framer-8CMRd.framer-v-184ymne .framer-wv5uw7-container, .framer-8CMRd.framer-v-184ymne .framer-1pukilb-container, .framer-8CMRd.framer-v-1ksrshi .framer-rh0a9y-container, .framer-8CMRd.framer-v-1ksrshi .framer-p4087j-container, .framer-8CMRd.framer-v-1ksrshi .framer-wv5uw7-container, .framer-8CMRd.framer-v-1ksrshi .framer-1pukilb-container, .framer-8CMRd.framer-v-1bvkv2d .framer-rh0a9y-container, .framer-8CMRd.framer-v-1bvkv2d .framer-p4087j-container, .framer-8CMRd.framer-v-1bvkv2d .framer-wv5uw7-container, .framer-8CMRd.framer-v-1bvkv2d .framer-1pukilb-container, .framer-8CMRd.framer-v-2qam7q .framer-rh0a9y-container, .framer-8CMRd.framer-v-2qam7q .framer-p4087j-container, .framer-8CMRd.framer-v-2qam7q .framer-wv5uw7-container, .framer-8CMRd.framer-v-2qam7q .framer-1pukilb-container { height: var(--framer-aspect-ratio-supported, 154px); }`,
          `.framer-8CMRd.framer-v-quu4yi.framer-rkz9gw, .framer-8CMRd.framer-v-184ymne.framer-rkz9gw, .framer-8CMRd.framer-v-1ksrshi.framer-rkz9gw, .framer-8CMRd.framer-v-1bvkv2d.framer-rkz9gw { width: 810px; }`,
          `.framer-8CMRd.framer-v-quu4yi .framer-1q01odr, .framer-8CMRd.framer-v-184ymne .framer-1q01odr, .framer-8CMRd.framer-v-1ksrshi .framer-1q01odr, .framer-8CMRd.framer-v-1bvkv2d .framer-1q01odr { height: var(--framer-aspect-ratio-supported, 200px); left: 96%; width: 5%; }`,
          `.framer-8CMRd.framer-v-quu4yi .framer-frqjrj, .framer-8CMRd.framer-v-184ymne .framer-frqjrj, .framer-8CMRd.framer-v-1ksrshi .framer-frqjrj, .framer-8CMRd.framer-v-1bvkv2d .framer-frqjrj { height: var(--framer-aspect-ratio-supported, 200px); left: 4%; width: 5%; }`,
          `.framer-8CMRd.framer-v-quu4yi .framer-12tg8m0, .framer-8CMRd.framer-v-184ymne .framer-12tg8m0, .framer-8CMRd.framer-v-1ksrshi .framer-12tg8m0, .framer-8CMRd.framer-v-1bvkv2d .framer-12tg8m0 { gap: unset; justify-content: space-between; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8CMRd.framer-v-quu4yi .framer-12tg8m0 { gap: 0px; } .framer-8CMRd.framer-v-quu4yi .framer-12tg8m0 > *, .framer-8CMRd.framer-v-quu4yi .framer-12tg8m0 > :first-child, .framer-8CMRd.framer-v-quu4yi .framer-12tg8m0 > :last-child { margin: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8CMRd.framer-v-184ymne .framer-12tg8m0 { gap: 0px; } .framer-8CMRd.framer-v-184ymne .framer-12tg8m0 > *, .framer-8CMRd.framer-v-184ymne .framer-12tg8m0 > :first-child, .framer-8CMRd.framer-v-184ymne .framer-12tg8m0 > :last-child { margin: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8CMRd.framer-v-1ksrshi .framer-12tg8m0 { gap: 0px; } .framer-8CMRd.framer-v-1ksrshi .framer-12tg8m0 > *, .framer-8CMRd.framer-v-1ksrshi .framer-12tg8m0 > :first-child, .framer-8CMRd.framer-v-1ksrshi .framer-12tg8m0 > :last-child { margin: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-8CMRd.framer-v-1bvkv2d .framer-12tg8m0 { gap: 0px; } .framer-8CMRd.framer-v-1bvkv2d .framer-12tg8m0 > *, .framer-8CMRd.framer-v-1bvkv2d .framer-12tg8m0 > :first-child, .framer-8CMRd.framer-v-1bvkv2d .framer-12tg8m0 > :last-child { margin: 0px; } }`,
        ],
        `framer-8CMRd`
      )),
      (J.displayName = `Image Slider`),
      (J.defaultProps = { height: 744, width: 840 }),
      S(J, {
        variant: {
          options: [
            `beqi5RKJ3`,
            `Dddvw5nzx`,
            `MCCwOEIqC`,
            `QkfD21ASd`,
            `JKiYZeVpy`,
            `d9T50UHoy`,
            `dSU5omABq`,
            `pm_Vz_mXb`,
          ],
          optionTitles: [
            `Step 01`,
            `Step 02`,
            `Step 03`,
            `Small Step-01`,
            `Small Step-02`,
            `Small Step-03`,
            `Small Step-04`,
            `Step -04`,
          ],
          title: `Variant`,
          type: R.Enum,
        },
        rUVoOR8Zb: {
          __defaultAssetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `template image`,
            assetReference: `data:framer/asset-reference,8zvtKVafLdQFjCL5Ahk2ihCaTk.jpg?originalFilename=487.jpg&preferredSize=auto`,
          },
          title: `Image 01`,
          type: R.ResponsiveImage,
        },
        kGXiFi0YT: {
          __defaultAssetReference: `data:framer/asset-reference,Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?originalFilename=Framer-SaaS-Startup-Template.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `image 01`,
            assetReference: `data:framer/asset-reference,Dxu9VlGHTgxkeB6VFTSN5u4tuM.jpg?originalFilename=Framer-SaaS-Startup-Template.jpg&preferredSize=auto`,
          },
          description: ``,
          title: `Image 02`,
          type: R.ResponsiveImage,
        },
        Hv1dw2yrC: {
          __defaultAssetReference: `data:framer/asset-reference,YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?originalFilename=Framer-SaaS-Template.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `image 2`,
            assetReference: `data:framer/asset-reference,YcJds7dqHiZkKXz9ag9F4wUN4Y.jpg?originalFilename=Framer-SaaS-Template.jpg&preferredSize=auto`,
          },
          title: `Image 03`,
          type: R.ResponsiveImage,
        },
        fshar_Uy9: {
          __defaultAssetReference: `data:framer/asset-reference,hGL7BXqgqKl04n3duaYwyZA58E.jpg?originalFilename=Framer-Startup-Template.jpg&preferredSize=auto`,
          __vekterDefault: {
            alt: `image 3`,
            assetReference: `data:framer/asset-reference,hGL7BXqgqKl04n3duaYwyZA58E.jpg?originalFilename=Framer-Startup-Template.jpg&preferredSize=auto`,
          },
          title: `Image 04`,
          type: R.ResponsiveImage,
        },
      }),
      P(J, [{ explicitInter: !0, fonts: [] }, ...kt], { supportsExplicitInterCodegen: !0 }));
  }),
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
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
  Y,
  cn,
  ln,
  X,
  Z,
  Q,
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
  $,
  xn;
e(() => {
  (ee(),
    ae(),
    d(),
    t(),
    We(),
    Ze(),
    Xe(),
    ke(),
    Ut(),
    Oe(),
    $e(),
    Me(),
    Fe(),
    ze(),
    at(),
    V(),
    lt(),
    ve(),
    Se(),
    Ke(),
    tt(),
    mt(),
    (Wt = C(f.div)),
    (Gt = E(J)),
    (Kt = C(A)),
    (qt = m(w)),
    (Jt = E(W)),
    (Yt = E(Ge)),
    (Xt = E(je)),
    (Zt = F(I(je, { nodeId: `QPVnt_B7t`, override: Ee, scopeId: `ZGbSr4l4n` }), Ae)),
    (Qt = F(I(Ge, { nodeId: `FcIXbEcvx`, override: De, scopeId: `ZGbSr4l4n` }), Ue)),
    ($t = E(Qe)),
    (en = m(A)),
    (tn = {
      L1YP5idQM: `(min-width: 1200px)`,
      rwvuaPs28: `(max-width: 809.98px)`,
      XKnTgP9FY: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (nn = []),
    (rn = `framer-3vSvf`),
    (an = {
      L1YP5idQM: `framer-v-d48rz9`,
      rwvuaPs28: `framer-v-1wczu5w`,
      XKnTgP9FY: `framer-v-jog4i9`,
    }),
    (on = void 0),
    (sn = (e, t, n) => (e && t ? `position` : n)),
    (Y = { delay: 0, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (cn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 0,
    }),
    (ln = {
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
    (X = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Z = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (un = {
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
    (dn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 40,
    }),
    (fn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 40,
      y: 0,
    }),
    (pn = { delay: 0.2, duration: 0.6, ease: [0.5, 1, 0.89, 1], type: `tween` }),
    (mn = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: pn,
      x: 0,
      y: 40,
    }),
    (hn = (e) => ({
      from: { alias: `Mp7JLmO10`, data: et, type: `Collection` },
      limit: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `Mp7JLmO10`, name: `GCBaCslbQ`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `seX5k3wij`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `fQS7li1vg`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `LDHExcaRt`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `JT6vEPTLb`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `Ra5emMuHk`, type: `Identifier` },
        { collection: `Mp7JLmO10`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `Mp7JLmO10`, name: `Ra5emMuHk`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (gn = ({ query: e, pageSize: t, children: n }) => n(h(e))),
    (_n = { Desktop: `L1YP5idQM`, Phone: `rwvuaPs28`, Tablet: `XKnTgP9FY` }),
    (vn = ({ value: e }) =>
      k()
        ? null
        : s(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (yn = (e) => ({
      from: { alias: `ZGbSr4l4n`, data: et, type: `Collection` },
      select: [
        { collection: `ZGbSr4l4n`, name: `Ra5emMuHk`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `GCBaCslbQ`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `seX5k3wij`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `LDHExcaRt`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `MNh0KCumB`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `CwE5gF9l8`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `Kbk2S6YLd`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `HXd7yxd6U`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `cGkBih0_w`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `KhO6imaZ8`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `KxRx6VB3Y`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `qDZNM0WvY`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `cy_FnSY85`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `JJ3W4wplW`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `RLLaLkmGK`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `lratHPm36`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `CIQtkN_r6`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `k6Oq9hk39`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `hNnYrr9hP`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `HiguWtjNl`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `bnheIOceb`, type: `Identifier` },
        { collection: `ZGbSr4l4n`, name: `VPBL0GLLP`, type: `Identifier` },
      ],
      where: e,
    })),
    (bn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: _n[r.variant] ?? r.variant ?? `L1YP5idQM`,
    })),
    ($ = re(
      l(function (e, t) {
        let ee = o(null),
          l = t ?? ee,
          d = te(),
          { activeLocale: p, setLocale: m } = he(),
          _ = se(),
          x = de(),
          [S] = h(yn(fe(x, `ZGbSr4l4n`))),
          C = (e) => {
            if (!S) throw new pe(`No data matches path variables: ${JSON.stringify(x)}`);
            return S[e];
          },
          {
            style: re,
            className: E,
            layoutId: D,
            variant: ae,
            Ra5emMuHk: k = C(`Ra5emMuHk`) ?? ``,
            GCBaCslbQ: M = C(`GCBaCslbQ`) ?? ``,
            seX5k3wij: P = C(`seX5k3wij`) ?? ``,
            LDHExcaRt: F = C(`LDHExcaRt`) ?? ``,
            MNh0KCumB: I = C(`MNh0KCumB`) ?? ``,
            CwE5gF9l8: R = C(`CwE5gF9l8`) ?? ``,
            Kbk2S6YLd: z = C(`Kbk2S6YLd`) ?? ``,
            HXd7yxd6U: V = C(`HXd7yxd6U`),
            cGkBih0_w: ge = C(`cGkBih0_w`),
            KhO6imaZ8: H = C(`KhO6imaZ8`),
            KxRx6VB3Y: ve = C(`KxRx6VB3Y`),
            qDZNM0WvY: ye = C(`qDZNM0WvY`) ?? ``,
            cy_FnSY85: be = C(`cy_FnSY85`) ?? ``,
            JJ3W4wplW: Se = C(`JJ3W4wplW`) ?? ``,
            RLLaLkmGK: Ce = C(`RLLaLkmGK`) ?? ``,
            lratHPm36: we = C(`lratHPm36`) ?? ``,
            CIQtkN_r6: Ee = C(`CIQtkN_r6`) ?? ``,
            k6Oq9hk39: De = C(`k6Oq9hk39`) ?? ``,
            hNnYrr9hP: Oe = C(`hNnYrr9hP`) ?? ``,
            HiguWtjNl: ke = C(`HiguWtjNl`) ?? ``,
            bnheIOceb: Ae = C(`bnheIOceb`) ?? ``,
            VPBL0GLLP: Me = C(`VPBL0GLLP`) ?? ``,
            ...Ne
          } = bn(e);
        j(i(() => pt({ GCBaCslbQ: M, LDHExcaRt: F }, p), [F, M, p]));
        let [U, Fe] = ce(ae, tn, !1),
          Ie = y(rn, _e, ct, Re, xe, it, Ye, ft, He, Te, Pe),
          Le = r(oe)?.isLayoutTemplate,
          ze = !!r(u)?.transition?.layout,
          Be = sn(Le, ze),
          Ve = B(`FdfKnx9bG`),
          Ue = v(),
          We = X(ke),
          Ke = X(Ae),
          qe = X(Me),
          Je = X(we);
        ie();
        let Xe = X(on),
          Ze = X(R),
          $e = X(I);
        return (
          le({}),
          s(oe.Provider, {
            value: {
              activeVariantId: U,
              humanReadableVariantMap: _n,
              primaryVariantId: `L1YP5idQM`,
              variantClassNames: an,
            },
            children: c(ne, {
              id: D ?? d,
              children: [
                s(vn, {
                  value: `html body { background: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, rgb(246, 246, 246)); }`,
                }),
                c(f.div, {
                  ...Ne,
                  className: y(Ie, `framer-d48rz9`, E),
                  ref: l,
                  style: { ...re },
                  children: [
                    s(f.section, {
                      className: `framer-lp8rl1`,
                      "data-framer-name": `Details Template Section`,
                      layout: Be,
                      children: c(`div`, {
                        className: `framer-1sfeaae`,
                        "data-framer-name": `Container`,
                        id: Ve,
                        ref: Ue(Ve),
                        children: [
                          c(`div`, {
                            className: `framer-xko8wv`,
                            "data-framer-name": `Left Content`,
                            children: [
                              s(T, {
                                breakpoint: U,
                                overrides: {
                                  rwvuaPs28: {
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                  XKnTgP9FY: {
                                    animate: void 0,
                                    initial: void 0,
                                    optimized: void 0,
                                  },
                                },
                                children: c(Wt, {
                                  animate: cn,
                                  className: `framer-12irp6e`,
                                  "data-framer-appear-id": `12irp6e`,
                                  "data-framer-name": `Template Description`,
                                  initial: ln,
                                  optimized: !0,
                                  children: [
                                    c(`div`, {
                                      className: `framer-1pm6ihv`,
                                      "data-framer-name": `Breadcrump`,
                                      children: [
                                        s(w, {
                                          __fromCanvasComponent: !0,
                                          children: s(n, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1kyzkuu`,
                                              "data-styles-preset": `KKnW9Hd3v`,
                                              children: s(O, {
                                                href: { webPageId: `augiA20Il` },
                                                motionChild: !0,
                                                nodeId: `L6ONRW_vm`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `ZGbSr4l4n`,
                                                smoothScroll: !1,
                                                children: s(f.a, {
                                                  className: `framer-styles-preset-bv207o`,
                                                  "data-styles-preset": `JT0NI1fXe`,
                                                  children: `Home`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-68g55b`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        s(T, {
                                          breakpoint: U,
                                          overrides: {
                                            rwvuaPs28: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fill`,
                                                loading: b(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    0 +
                                                    92 +
                                                    0
                                                ),
                                                pixelHeight: 24,
                                                pixelWidth: 24,
                                                sizes: `24px`,
                                                src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                              },
                                            },
                                            XKnTgP9FY: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fill`,
                                                loading: b(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    0 +
                                                    92 +
                                                    0
                                                ),
                                                pixelHeight: 24,
                                                pixelWidth: 24,
                                                sizes: `24px`,
                                                src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                              },
                                            },
                                          },
                                          children: s(L, {
                                            background: {
                                              alt: `Icon`,
                                              fit: `fill`,
                                              loading: b(
                                                (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  0 +
                                                  92 +
                                                  0
                                              ),
                                              pixelHeight: 24,
                                              pixelWidth: 24,
                                              sizes: `24px`,
                                              src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                            },
                                            className: `framer-wngiyu`,
                                            "data-framer-name": `Icon`,
                                          }),
                                        }),
                                        s(w, {
                                          __fromCanvasComponent: !0,
                                          children: s(n, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1kyzkuu`,
                                              "data-styles-preset": `KKnW9Hd3v`,
                                              children: s(O, {
                                                href: { webPageId: `xRn_kYZqM` },
                                                motionChild: !0,
                                                nodeId: `sxQa4DRE7`,
                                                openInNewTab: !1,
                                                relValues: [],
                                                scopeId: `ZGbSr4l4n`,
                                                smoothScroll: !1,
                                                children: s(f.a, {
                                                  className: `framer-styles-preset-bv207o`,
                                                  "data-styles-preset": `JT0NI1fXe`,
                                                  children: `Templates`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          className: `framer-145j53l`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                        s(T, {
                                          breakpoint: U,
                                          overrides: {
                                            rwvuaPs28: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fill`,
                                                loading: b(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    0 +
                                                    92 +
                                                    0
                                                ),
                                                pixelHeight: 24,
                                                pixelWidth: 24,
                                                sizes: `24px`,
                                                src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                              },
                                            },
                                            XKnTgP9FY: {
                                              background: {
                                                alt: `Icon`,
                                                fit: `fill`,
                                                loading: b(
                                                  (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    128 +
                                                    0 +
                                                    92 +
                                                    0
                                                ),
                                                pixelHeight: 24,
                                                pixelWidth: 24,
                                                sizes: `24px`,
                                                src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                              },
                                            },
                                          },
                                          children: s(L, {
                                            background: {
                                              alt: `Icon`,
                                              fit: `fill`,
                                              loading: b(
                                                (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  128 +
                                                  0 +
                                                  92 +
                                                  0
                                              ),
                                              pixelHeight: 24,
                                              pixelWidth: 24,
                                              sizes: `24px`,
                                              src: `../../assets/images/oqnF0kKgSr7G6UWN0XfV6C887kE.svg`,
                                            },
                                            className: `framer-1tz7mp3`,
                                            "data-framer-name": `Icon`,
                                          }),
                                        }),
                                        s(w, {
                                          __fromCanvasComponent: !0,
                                          children: s(n, {
                                            children: s(`p`, {
                                              className: `framer-styles-preset-1kyzkuu`,
                                              "data-styles-preset": `KKnW9Hd3v`,
                                              children: `SAP SaaS`,
                                            }),
                                          }),
                                          className: `framer-ze7ps4`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          text: M,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                        }),
                                      ],
                                    }),
                                    s(w, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`h4`, {
                                          className: `framer-styles-preset-tf4vz6`,
                                          "data-styles-preset": `hlnA5U_q8`,
                                          children: `ClayAI`,
                                        }),
                                      }),
                                      className: `framer-cximdn`,
                                      "data-framer-name": `Title`,
                                      fonts: [`Inter`],
                                      text: M,
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    We !== !1 &&
                                      s(w, {
                                        __fromCanvasComponent: !0,
                                        children: s(n, {
                                          children: s(`p`, {
                                            className: `framer-styles-preset-1n6rbyf`,
                                            "data-styles-preset": `ojujRXx3G`,
                                            style: {
                                              "--framer-text-alignment": `left`,
                                              "--framer-text-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                            },
                                            children: `SAP is a landing page template designed to showcase SaaS and app information effectively, featuring a clean and modern look. Explore a library of high-quality, customizable components to power your next project. And Instantly enhance your design process with pre-built templates`,
                                          }),
                                        }),
                                        className: `framer-1curnaa`,
                                        "data-framer-name": `Text`,
                                        fonts: [`Inter`],
                                        text: ke,
                                        verticalAlignment: `top`,
                                        withExternalLayout: !0,
                                      }),
                                  ],
                                }),
                              }),
                              s(T, {
                                breakpoint: U,
                                overrides: {
                                  rwvuaPs28: {
                                    width: `calc(min(${_?.width || `100vw`}, 620px) - 40px)`,
                                    y: (_?.y || 0) + 0 + 0 + 140 + 0 + 0 + 0 + 0 + 440,
                                  },
                                  XKnTgP9FY: {
                                    width: `min(max((min(${_?.width || `100vw`}, 990px) - 40px) * 0.61 - 30px, 1px), 840px)`,
                                    y: (_?.y || 0) + 0 + 0 + 160 + 0 + 0 + 0 + 440,
                                  },
                                },
                                children: s(N, {
                                  height: 744,
                                  width: `min(max((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.7031 - 32px, 1px), 840px)`,
                                  y: (_?.y || 0) + 0 + 0 + 192 + 0 + 0 + 0 + 440,
                                  children: s(T, {
                                    breakpoint: U,
                                    overrides: {
                                      rwvuaPs28: {
                                        animate: void 0,
                                        initial: void 0,
                                        optimized: void 0,
                                      },
                                      XKnTgP9FY: {
                                        animate: void 0,
                                        initial: void 0,
                                        optimized: void 0,
                                      },
                                    },
                                    children: s(Kt, {
                                      animate: cn,
                                      className: `framer-xifh67-container`,
                                      "data-framer-appear-id": `xifh67`,
                                      initial: ln,
                                      nodeId: `AAwcDr00X`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `ZGbSr4l4n`,
                                      children: s(T, {
                                        breakpoint: U,
                                        overrides: {
                                          rwvuaPs28: { variant: Q(`QkfD21ASd`) },
                                          XKnTgP9FY: { variant: Q(`QkfD21ASd`) },
                                        },
                                        children: s(J, {
                                          fshar_Uy9: Z(ve),
                                          height: `100%`,
                                          Hv1dw2yrC: Z(H),
                                          id: `AAwcDr00X`,
                                          kGXiFi0YT: Z(ge),
                                          layoutId: `AAwcDr00X`,
                                          rUVoOR8Zb: Z(V),
                                          style: { width: `100%` },
                                          variant: Q(`beqi5RKJ3`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                              Ke !== !1 &&
                                s(T, {
                                  breakpoint: U,
                                  overrides: {
                                    rwvuaPs28: { __framer__styleAppearEffectEnabled: void 0 },
                                    XKnTgP9FY: { __framer__styleAppearEffectEnabled: void 0 },
                                  },
                                  children: s(qt, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: un,
                                    __framer__exit: dn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: Ae,
                                    className: `framer-1fo05vw`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      h1: `framer-styles-preset-dqr4hh`,
                                      h2: `framer-styles-preset-1mdyd08`,
                                      h3: `framer-styles-preset-fw0ea9`,
                                      h4: `framer-styles-preset-tf4vz6`,
                                      h5: `framer-styles-preset-12j0pqu`,
                                      h6: `framer-styles-preset-1aus3b5`,
                                      p: `framer-styles-preset-1n6rbyf`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                              qe !== !1 &&
                                s(T, {
                                  breakpoint: U,
                                  overrides: {
                                    rwvuaPs28: { __framer__styleAppearEffectEnabled: void 0 },
                                    XKnTgP9FY: { __framer__styleAppearEffectEnabled: void 0 },
                                  },
                                  children: s(qt, {
                                    __framer__animate: { transition: Y },
                                    __framer__animateOnce: !0,
                                    __framer__enter: un,
                                    __framer__exit: dn,
                                    __framer__styleAppearEffectEnabled: !0,
                                    __framer__threshold: 0.5,
                                    __fromCanvasComponent: !0,
                                    __perspectiveFX: !1,
                                    __targetOpacity: 1,
                                    children: Me,
                                    className: `framer-dnyx71`,
                                    "data-framer-name": `Text`,
                                    fonts: [`Inter`],
                                    stylesPresetsClassNames: {
                                      h1: `framer-styles-preset-dqr4hh`,
                                      h2: `framer-styles-preset-1mdyd08`,
                                      h3: `framer-styles-preset-fw0ea9`,
                                      h4: `framer-styles-preset-tf4vz6`,
                                      h5: `framer-styles-preset-12j0pqu`,
                                      h6: `framer-styles-preset-1aus3b5`,
                                      p: `framer-styles-preset-1n6rbyf`,
                                    },
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                            ],
                          }),
                          s(T, {
                            breakpoint: U,
                            overrides: {
                              rwvuaPs28: { animate: void 0, initial: void 0, optimized: void 0 },
                              XKnTgP9FY: { animate: void 0, initial: void 0, optimized: void 0 },
                            },
                            children: c(Wt, {
                              animate: cn,
                              className: `framer-gaglxw`,
                              "data-framer-appear-id": `gaglxw`,
                              "data-framer-name": `Right Content`,
                              initial: fn,
                              optimized: !0,
                              children: [
                                c(`div`, {
                                  className: `framer-od6mun`,
                                  "data-framer-name": `Card Block`,
                                  children: [
                                    Je !== !1 &&
                                      c(`div`, {
                                        className: `framer-9yqhm5`,
                                        "data-framer-name": `List Item Block`,
                                        children: [
                                          s(T, {
                                            breakpoint: U,
                                            overrides: {
                                              rwvuaPs28: {
                                                width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  1336 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  90 +
                                                  0 +
                                                  0,
                                              },
                                              XKnTgP9FY: {
                                                width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  94 +
                                                  0 +
                                                  0,
                                              },
                                            },
                                            children: s(N, {
                                              height: 32,
                                              width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                192 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                32 +
                                                98 +
                                                0 +
                                                0,
                                              children: s(A, {
                                                className: `framer-ds9x8z-container`,
                                                nodeId: `JjiwaN1B9`,
                                                scopeId: `ZGbSr4l4n`,
                                                children: s(W, {
                                                  height: `100%`,
                                                  id: `JjiwaN1B9`,
                                                  layoutId: `JjiwaN1B9`,
                                                  style: { width: `100%` },
                                                  tmUhrLcx1: we,
                                                  variant: Q(`nwFGpMZoJ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(T, {
                                            breakpoint: U,
                                            overrides: {
                                              rwvuaPs28: {
                                                width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  1336 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  90 +
                                                  0 +
                                                  44,
                                              },
                                              XKnTgP9FY: {
                                                width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  94 +
                                                  0 +
                                                  44,
                                              },
                                            },
                                            children: s(N, {
                                              height: 32,
                                              width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                192 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                32 +
                                                98 +
                                                0 +
                                                44,
                                              children: s(A, {
                                                className: `framer-1w02h9s-container`,
                                                nodeId: `EbhM_pxKo`,
                                                scopeId: `ZGbSr4l4n`,
                                                children: s(W, {
                                                  height: `100%`,
                                                  id: `EbhM_pxKo`,
                                                  layoutId: `EbhM_pxKo`,
                                                  style: { width: `100%` },
                                                  tmUhrLcx1: Ee,
                                                  variant: Q(`nwFGpMZoJ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(T, {
                                            breakpoint: U,
                                            overrides: {
                                              rwvuaPs28: {
                                                width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  1336 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  90 +
                                                  0 +
                                                  88,
                                              },
                                              XKnTgP9FY: {
                                                width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  94 +
                                                  0 +
                                                  88,
                                              },
                                            },
                                            children: s(N, {
                                              height: 32,
                                              width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                192 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                32 +
                                                98 +
                                                0 +
                                                88,
                                              children: s(A, {
                                                className: `framer-qlgi23-container`,
                                                nodeId: `mmzBk2VoV`,
                                                scopeId: `ZGbSr4l4n`,
                                                children: s(W, {
                                                  height: `100%`,
                                                  id: `mmzBk2VoV`,
                                                  layoutId: `mmzBk2VoV`,
                                                  style: { width: `100%` },
                                                  tmUhrLcx1: De,
                                                  variant: Q(`nwFGpMZoJ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          s(T, {
                                            breakpoint: U,
                                            overrides: {
                                              rwvuaPs28: {
                                                width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  1336 +
                                                  0 +
                                                  0 +
                                                  20 +
                                                  90 +
                                                  0 +
                                                  132,
                                              },
                                              XKnTgP9FY: {
                                                width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  160 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  24 +
                                                  94 +
                                                  0 +
                                                  132,
                                              },
                                            },
                                            children: s(N, {
                                              height: 32,
                                              width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                              y:
                                                (_?.y || 0) +
                                                0 +
                                                0 +
                                                192 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                32 +
                                                98 +
                                                0 +
                                                132,
                                              children: s(A, {
                                                className: `framer-ttyrqs-container`,
                                                nodeId: `IwazTjK5c`,
                                                scopeId: `ZGbSr4l4n`,
                                                children: s(W, {
                                                  height: `100%`,
                                                  id: `IwazTjK5c`,
                                                  layoutId: `IwazTjK5c`,
                                                  style: { width: `100%` },
                                                  tmUhrLcx1: Oe,
                                                  variant: Q(`nwFGpMZoJ`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    c(`div`, {
                                      className: `framer-18wwt1w`,
                                      "data-framer-name": `Button Group`,
                                      children: [
                                        s(g, {
                                          links: [
                                            { href: ye, implicitPathVariables: void 0 },
                                            { href: ye, implicitPathVariables: void 0 },
                                            { href: ye, implicitPathVariables: void 0 },
                                          ],
                                          children: (e) =>
                                            s(T, {
                                              breakpoint: U,
                                              overrides: {
                                                rwvuaPs28: {
                                                  width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    1336 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    90 +
                                                    0 +
                                                    0,
                                                },
                                                XKnTgP9FY: {
                                                  width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    24 +
                                                    94 +
                                                    0 +
                                                    0,
                                                },
                                              },
                                              children: s(N, {
                                                height: 44,
                                                width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  98 +
                                                  0 +
                                                  0,
                                                children: s(A, {
                                                  className: `framer-g59prn-container`,
                                                  nodeId: `EIrTsljnW`,
                                                  scopeId: `ZGbSr4l4n`,
                                                  children: s(T, {
                                                    breakpoint: U,
                                                    overrides: {
                                                      rwvuaPs28: {
                                                        tQgB2BXSA: e[2],
                                                        variant: Q(`wk2wge9gS`),
                                                      },
                                                      XKnTgP9FY: {
                                                        tQgB2BXSA: e[1],
                                                        variant: Q(`wk2wge9gS`),
                                                      },
                                                    },
                                                    children: s(Ge, {
                                                      fAu9uBRMh: `Live Preview`,
                                                      height: `100%`,
                                                      id: `EIrTsljnW`,
                                                      layoutId: `EIrTsljnW`,
                                                      mkERkHNl0: !1,
                                                      style: { width: `100%` },
                                                      tQgB2BXSA: e[0],
                                                      variant: Q(`wSgh3QRv3`),
                                                      width: `100%`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        s(g, {
                                          links: [
                                            { href: be, implicitPathVariables: void 0 },
                                            { href: be, implicitPathVariables: void 0 },
                                            { href: be, implicitPathVariables: void 0 },
                                          ],
                                          children: (e) =>
                                            s(T, {
                                              breakpoint: U,
                                              overrides: {
                                                rwvuaPs28: {
                                                  width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    1336 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    90 +
                                                    0 +
                                                    60,
                                                },
                                                XKnTgP9FY: {
                                                  width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    24 +
                                                    94 +
                                                    0 +
                                                    60,
                                                },
                                              },
                                              children: s(N, {
                                                height: 44,
                                                width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  98 +
                                                  0 +
                                                  60,
                                                children: s(A, {
                                                  className: `framer-fj4sah-container`,
                                                  nodeId: `jfdOiLrkH`,
                                                  scopeId: `ZGbSr4l4n`,
                                                  children: s(T, {
                                                    breakpoint: U,
                                                    overrides: {
                                                      rwvuaPs28: {
                                                        ReFOSYdYI: e[2],
                                                        variant: Q(`pqCw2VZ9U`),
                                                      },
                                                      XKnTgP9FY: {
                                                        ReFOSYdYI: e[1],
                                                        variant: Q(`pqCw2VZ9U`),
                                                      },
                                                    },
                                                    children: s(je, {
                                                      height: `100%`,
                                                      id: `jfdOiLrkH`,
                                                      layoutId: `jfdOiLrkH`,
                                                      ReFOSYdYI: e[0],
                                                      style: { width: `100%` },
                                                      variant: Q(`WGUYcWd5y`),
                                                      width: `100%`,
                                                      xjkQsCprR: !1,
                                                      Yp279F9q1: Se,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        s(g, {
                                          links: [
                                            {
                                              href: { webPageId: `TUgBiXt4p` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TUgBiXt4p` },
                                              implicitPathVariables: void 0,
                                            },
                                            {
                                              href: { webPageId: `TUgBiXt4p` },
                                              implicitPathVariables: void 0,
                                            },
                                          ],
                                          children: (e) =>
                                            s(T, {
                                              breakpoint: U,
                                              overrides: {
                                                rwvuaPs28: {
                                                  width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    1336 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    90 +
                                                    0 +
                                                    120,
                                                },
                                                XKnTgP9FY: {
                                                  width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    24 +
                                                    94 +
                                                    0 +
                                                    120,
                                                },
                                              },
                                              children: s(N, {
                                                height: 44,
                                                width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  98 +
                                                  0 +
                                                  120,
                                                children: s(A, {
                                                  className: `framer-1gzr6o0-container`,
                                                  nodeId: `QPVnt_B7t`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ZGbSr4l4n`,
                                                  children: s(T, {
                                                    breakpoint: U,
                                                    overrides: {
                                                      rwvuaPs28: {
                                                        ReFOSYdYI: e[2],
                                                        variant: Q(`BRHDFs7rp`),
                                                      },
                                                      XKnTgP9FY: {
                                                        ReFOSYdYI: e[1],
                                                        variant: Q(`BRHDFs7rp`),
                                                      },
                                                    },
                                                    children: s(Zt, {
                                                      height: `100%`,
                                                      id: `QPVnt_B7t`,
                                                      layoutId: `QPVnt_B7t`,
                                                      ReFOSYdYI: e[0],
                                                      style: { width: `100%` },
                                                      variant: Q(`h5lSVatuj`),
                                                      width: `100%`,
                                                      xjkQsCprR: !1,
                                                      Yp279F9q1: `Get All Access`,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                        }),
                                        s(g, {
                                          links: [
                                            { href: Ce, implicitPathVariables: void 0 },
                                            { href: Ce, implicitPathVariables: void 0 },
                                            { href: Ce, implicitPathVariables: void 0 },
                                          ],
                                          children: (e) =>
                                            s(T, {
                                              breakpoint: U,
                                              overrides: {
                                                rwvuaPs28: {
                                                  width: `calc(min(min(${_?.width || `100vw`}, 620px) - 40px, 380px) - 40px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    140 +
                                                    0 +
                                                    0 +
                                                    1336 +
                                                    0 +
                                                    0 +
                                                    20 +
                                                    90 +
                                                    0 +
                                                    180,
                                                },
                                                XKnTgP9FY: {
                                                  width: `calc(min((min(${_?.width || `100vw`}, 990px) - 40px) * 0.39, 380px) - 48px)`,
                                                  y:
                                                    (_?.y || 0) +
                                                    0 +
                                                    0 +
                                                    160 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    24 +
                                                    94 +
                                                    0 +
                                                    180,
                                                },
                                              },
                                              children: s(N, {
                                                height: 44,
                                                width: `calc(min((min(${_?.width || `100vw`}, 1320px) - 40px) * 0.2969, 380px) - 64px)`,
                                                y:
                                                  (_?.y || 0) +
                                                  0 +
                                                  0 +
                                                  192 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  32 +
                                                  98 +
                                                  0 +
                                                  180,
                                                children: s(A, {
                                                  className: `framer-189wchw-container`,
                                                  nodeId: `FcIXbEcvx`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `ZGbSr4l4n`,
                                                  children: s(T, {
                                                    breakpoint: U,
                                                    overrides: {
                                                      rwvuaPs28: {
                                                        tQgB2BXSA: e[2],
                                                        variant: Q(`wk2wge9gS`),
                                                      },
                                                      XKnTgP9FY: {
                                                        tQgB2BXSA: e[1],
                                                        variant: Q(`wk2wge9gS`),
                                                      },
                                                    },
                                                    children: s(Qt, {
                                                      fAu9uBRMh: `Access Resource`,
                                                      height: `100%`,
                                                      id: `FcIXbEcvx`,
                                                      layoutId: `FcIXbEcvx`,
                                                      mkERkHNl0: !0,
                                                      style: { width: `100%` },
                                                      tQgB2BXSA: e[0],
                                                      variant: Q(`wSgh3QRv3`),
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
                                c(`div`, {
                                  className: `framer-n2mt4y`,
                                  "data-framer-name": `Page Block`,
                                  children: [
                                    s(w, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-1kyzkuu`,
                                          "data-styles-preset": `KKnW9Hd3v`,
                                          style: {
                                            "--framer-text-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                          },
                                          children: `Pages Included`,
                                        }),
                                      }),
                                      className: `framer-17e3uup`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    s(w, {
                                      __fromCanvasComponent: !0,
                                      children: z,
                                      className: `framer-1gekhpr`,
                                      "data-framer-name": `Page`,
                                      fonts: [`Inter`],
                                      stylesPresetsClassNames: {
                                        a: `framer-styles-preset-bv207o`,
                                        h1: `framer-styles-preset-dqr4hh`,
                                        h2: `framer-styles-preset-1mdyd08`,
                                        h3: `framer-styles-preset-fw0ea9`,
                                        h4: `framer-styles-preset-tf4vz6`,
                                        h5: `framer-styles-preset-12j0pqu`,
                                        h6: `framer-styles-preset-1aus3b5`,
                                        p: `framer-styles-preset-1n6rbyf`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  ],
                                }),
                                c(`div`, {
                                  className: `framer-sw1ymc`,
                                  "data-framer-name": `Product Info Block`,
                                  children: [
                                    s(w, {
                                      __fromCanvasComponent: !0,
                                      children: s(n, {
                                        children: s(`p`, {
                                          className: `framer-styles-preset-1kyzkuu`,
                                          "data-styles-preset": `KKnW9Hd3v`,
                                          style: {
                                            "--framer-text-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                                          },
                                          children: `Product Description`,
                                        }),
                                      }),
                                      className: `framer-1k96wen`,
                                      "data-framer-name": `Text`,
                                      fonts: [`Inter`],
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                    Xe !== !1 &&
                                      c(`div`, {
                                        className: `framer-1bvuupg`,
                                        "data-framer-name": `Text Block`,
                                        children: [
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `Category`,
                                              }),
                                            }),
                                            className: `framer-qjwye9`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `SaaS`,
                                              }),
                                            }),
                                            className: `framer-1ylhyac`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            text: P,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    Ze !== !1 &&
                                      c(`div`, {
                                        className: `framer-2j99lg`,
                                        "data-framer-name": `Text Block`,
                                        children: [
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `Release`,
                                              }),
                                            }),
                                            className: `framer-i6rvzd`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `Sep 25, 2024`,
                                              }),
                                            }),
                                            className: `framer-m8h7yj`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            text: R,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    $e !== !1 &&
                                      c(`div`, {
                                        className: `framer-zafbn0`,
                                        "data-framer-name": `Text Block`,
                                        children: [
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `Author`,
                                              }),
                                            }),
                                            className: `framer-10on3s7`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          s(w, {
                                            __fromCanvasComponent: !0,
                                            children: s(n, {
                                              children: s(`p`, {
                                                className: `framer-styles-preset-1hhv5k3`,
                                                "data-styles-preset": `DvIQKtnpQ`,
                                                children: `Phara`,
                                              }),
                                            }),
                                            className: `framer-e42sa7`,
                                            "data-framer-name": `Text`,
                                            fonts: [`Inter`],
                                            text: I,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    s(f.div, {
                      className: `framer-1cdko9k`,
                      "data-framer-name": `Related Template Section`,
                      layout: Be,
                      children: c(`div`, {
                        className: `framer-1lz4lu3`,
                        "data-framer-name": `Container`,
                        children: [
                          s(T, {
                            breakpoint: U,
                            overrides: {
                              rwvuaPs28: { __framer__styleAppearEffectEnabled: void 0 },
                              XKnTgP9FY: { __framer__styleAppearEffectEnabled: void 0 },
                            },
                            children: s(qt, {
                              __framer__animate: { transition: Y },
                              __framer__animateOnce: !0,
                              __framer__enter: un,
                              __framer__exit: dn,
                              __framer__styleAppearEffectEnabled: !0,
                              __framer__threshold: 0.5,
                              __fromCanvasComponent: !0,
                              __perspectiveFX: !1,
                              __targetOpacity: 1,
                              children: s(n, {
                                children: s(`h4`, {
                                  className: `framer-styles-preset-tf4vz6`,
                                  "data-styles-preset": `hlnA5U_q8`,
                                  style: {
                                    "--framer-text-color": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                  },
                                  children: `Related Templates`,
                                }),
                              }),
                              className: `framer-gtjoxd`,
                              "data-framer-name": `Title`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          s(`div`, {
                            className: `framer-yd0p3j`,
                            children: s(ue, {
                              children: s(gn, {
                                query: hn(k),
                                children: (e, t, n) =>
                                  s(a, {
                                    children: e?.map(
                                      (
                                        {
                                          fQS7li1vg: e,
                                          GCBaCslbQ: t,
                                          id: n,
                                          JT6vEPTLb: r,
                                          LDHExcaRt: i,
                                          Ra5emMuHk: a,
                                          seX5k3wij: o,
                                        },
                                        ee
                                      ) => (
                                        (t ??= ``),
                                        (o ??= ``),
                                        (e ??= ``),
                                        (i ??= ``),
                                        (a ??= ``),
                                        s(
                                          ne,
                                          {
                                            id: `Mp7JLmO10-${n}`,
                                            children: s(me.Provider, {
                                              value: { Ra5emMuHk: a },
                                              children: s(g, {
                                                links: [
                                                  {
                                                    href: {
                                                      pathVariables: { Ra5emMuHk: a },
                                                      webPageId: `ZGbSr4l4n`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { Ra5emMuHk: a },
                                                      webPageId: `ZGbSr4l4n`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                  {
                                                    href: {
                                                      pathVariables: { Ra5emMuHk: a },
                                                      webPageId: `ZGbSr4l4n`,
                                                    },
                                                    implicitPathVariables: void 0,
                                                  },
                                                ],
                                                children: (n) =>
                                                  s(T, {
                                                    breakpoint: U,
                                                    overrides: {
                                                      rwvuaPs28: {
                                                        width: `max(min(${_?.width || `100vw`}, 620px) - 40px, 10px)`,
                                                        y:
                                                          (_?.y || 0) +
                                                          0 +
                                                          2524 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          78 +
                                                          0 +
                                                          0,
                                                      },
                                                      XKnTgP9FY: {
                                                        width: `max((min(${_?.width || `100vw`}, 990px) - 56px) / 2, 10px)`,
                                                        y:
                                                          (_?.y || 0) +
                                                          0 +
                                                          1552 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          88 +
                                                          0 +
                                                          0,
                                                      },
                                                    },
                                                    children: s(N, {
                                                      height: 388,
                                                      width: `max((min(${_?.width || `100vw`}, 1320px) - 88px) / 4, 10px)`,
                                                      y:
                                                        (_?.y || 0) +
                                                        0 +
                                                        1600 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        104 +
                                                        0 +
                                                        0,
                                                      children: s(T, {
                                                        breakpoint: U,
                                                        overrides: {
                                                          rwvuaPs28: {
                                                            __framer__styleAppearEffectEnabled:
                                                              void 0,
                                                          },
                                                          XKnTgP9FY: {
                                                            __framer__styleAppearEffectEnabled:
                                                              void 0,
                                                          },
                                                        },
                                                        children: s(en, {
                                                          __framer__animate: { transition: pn },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: un,
                                                          __framer__exit: mn,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0.5,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-1n41t02-container`,
                                                          nodeId: `C6Xeek2jT`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `ZGbSr4l4n`,
                                                          children: s(T, {
                                                            breakpoint: U,
                                                            overrides: {
                                                              rwvuaPs28: {
                                                                soVmktXCF: n[2],
                                                                variant: Q(`BxbuELPAK`),
                                                              },
                                                              XKnTgP9FY: {
                                                                soVmktXCF: n[1],
                                                                variant: Q(`BxbuELPAK`),
                                                              },
                                                            },
                                                            children: s(Qe, {
                                                              FGgYTj69k: t,
                                                              Gu09Z0S1k: i,
                                                              height: `100%`,
                                                              HlznOdTH4: Z(r),
                                                              id: `C6Xeek2jT`,
                                                              layoutId: `C6Xeek2jT`,
                                                              soVmktXCF: n[0],
                                                              style: { width: `100%` },
                                                              ttLfm2RuI: e,
                                                              variant: Q(`cIxzDVZpn`),
                                                              width: `100%`,
                                                              YUZng7tmN: o,
                                                            }),
                                                          }),
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
                    }),
                  ],
                }),
                s(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-3vSvf.framer-q4yh31, .framer-3vSvf .framer-q4yh31 { display: block; }`,
        `.framer-3vSvf.framer-d48rz9 { align-content: center; align-items: center; background-color: var(--token-d759accc-5fb3-457a-814d-12c2ee655a67, #f6f6f6); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }`,
        `.framer-3vSvf .framer-lp8rl1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 68px; height: min-content; justify-content: center; overflow: visible; padding: 192px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-1sfeaae { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-xko8wv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 840px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-3vSvf .framer-12irp6e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-3vSvf .framer-1pm6ihv { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-68g55b, .framer-3vSvf .framer-145j53l { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-3vSvf .framer-wngiyu, .framer-3vSvf .framer-1tz7mp3 { aspect-ratio: 1 / 1; flex: none; height: auto; overflow: hidden; position: relative; width: 24px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-3vSvf .framer-ze7ps4, .framer-3vSvf .framer-qjwye9, .framer-3vSvf .framer-1ylhyac, .framer-3vSvf .framer-i6rvzd, .framer-3vSvf .framer-m8h7yj, .framer-3vSvf .framer-10on3s7, .framer-3vSvf .framer-e42sa7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-3vSvf .framer-cximdn, .framer-3vSvf .framer-gtjoxd { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-3vSvf .framer-1curnaa, .framer-3vSvf .framer-1fo05vw, .framer-3vSvf .framer-17e3uup, .framer-3vSvf .framer-1gekhpr, .framer-3vSvf .framer-1k96wen { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-3vSvf .framer-xifh67-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-3vSvf .framer-dnyx71 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 24px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-3vSvf .framer-gaglxw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; max-width: 380px; overflow: visible; padding: 0px; position: relative; width: 30%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-3vSvf .framer-od6mun { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-9yqhm5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-ds9x8z-container, .framer-3vSvf .framer-1w02h9s-container, .framer-3vSvf .framer-qlgi23-container, .framer-3vSvf .framer-ttyrqs-container, .framer-3vSvf .framer-g59prn-container, .framer-3vSvf .framer-fj4sah-container, .framer-3vSvf .framer-1gzr6o0-container, .framer-3vSvf .framer-189wchw-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-18wwt1w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-n2mt4y { align-content: flex-start; align-items: flex-start; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 32px 32px 23px 32px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-sw1ymc { align-content: center; align-items: center; background-color: #ffffff; border-bottom-left-radius: 24px; border-bottom-right-radius: 24px; border-top-left-radius: 24px; border-top-right-radius: 24px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 32px 32px 23px 32px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-1bvuupg, .framer-3vSvf .framer-2j99lg, .framer-3vSvf .framer-zafbn0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-1cdko9k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 96px 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-1lz4lu3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 56px; height: min-content; justify-content: center; max-width: 1320px; overflow: visible; padding: 0px 20px 0px 20px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-yd0p3j { display: grid; flex: none; gap: 16px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(10px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-3vSvf .framer-1n41t02-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        ...ge,
        ...ot,
        ...Ie,
        ...ye,
        ...nt,
        ...qe,
        ...ut,
        ...Be,
        ...Ce,
        ...Ne,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-3vSvf.framer-d48rz9 { width: 810px; } .framer-3vSvf .framer-lp8rl1 { padding: 160px 0px 80px 0px; } .framer-3vSvf .framer-1sfeaae { gap: 30px; max-width: 990px; } .framer-3vSvf .framer-12irp6e, .framer-3vSvf .framer-xifh67-container { will-change: unset; } .framer-3vSvf .framer-gaglxw { gap: 16px; width: 39%; will-change: unset; } .framer-3vSvf .framer-od6mun { gap: 24px; padding: 24px; } .framer-3vSvf .framer-n2mt4y { gap: 24px; padding: 24px 24px 20px 24px; } .framer-3vSvf .framer-sw1ymc { padding: 24px 32px 20px 32px; } .framer-3vSvf .framer-1cdko9k { padding: 0px 0px 80px 0px; } .framer-3vSvf .framer-1lz4lu3 { align-content: flex-start; align-items: flex-start; gap: 40px; max-width: 990px; } .framer-3vSvf .framer-yd0p3j { grid-template-columns: repeat(2, minmax(10px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-3vSvf.framer-d48rz9 { width: 390px; } .framer-3vSvf .framer-lp8rl1 { padding: 140px 0px 60px 0px; } .framer-3vSvf .framer-1sfeaae { flex-direction: column; gap: 24px; max-width: 620px; } .framer-3vSvf .framer-xko8wv { flex: none; max-width: unset; width: 100%; } .framer-3vSvf .framer-12irp6e, .framer-3vSvf .framer-xifh67-container { will-change: unset; } .framer-3vSvf .framer-gaglxw { gap: 16px; width: 100%; will-change: unset; } .framer-3vSvf .framer-od6mun, .framer-3vSvf .framer-n2mt4y { gap: 16px; padding: 20px; } .framer-3vSvf .framer-sw1ymc { padding: 20px; } .framer-3vSvf .framer-1cdko9k { padding: 0px 0px 60px 0px; } .framer-3vSvf .framer-1lz4lu3 { align-content: flex-start; align-items: flex-start; gap: 30px; max-width: 620px; } .framer-3vSvf .framer-yd0p3j { grid-template-columns: repeat(1, minmax(10px, 1fr)); }}`,
      ],
      `framer-3vSvf`
    )),
    ($.displayName = `Template`),
    ($.defaultProps = { height: 4422.5, width: 1200 }),
    P(
      $,
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
        ...Gt,
        ...Jt,
        ...Yt,
        ...Xt,
        ...$t,
        ...D(H),
        ...D(st),
        ...D(Le),
        ...D(be),
        ...D(rt),
        ...D(Je),
        ...D(dt),
        ...D(Ve),
        ...D(we),
        ...D(U),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = z.get(yn(fe(t.pathVariables, `ZGbSr4l4n`)), n).readMaybeAsync();
        return Promise.allSettled([
          x(J, {}, t),
          x(W, {}, t),
          x(Ge, {}, t),
          x(je, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return z.get(hn(e?.Ra5emMuHk), n).preload();
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await z.get(hn(e?.Ra5emMuHk), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => x(Qe, {}, t)));
          })(),
        ]);
      },
    }),
    (xn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerZGbSr4l4n`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `4422.5`,
            framerColorSyntax: `true`,
            framerResponsiveScreen: `true`,
            framerImmutableVariables: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"XKnTgP9FY":{"layout":["fixed","auto"]},"rwvuaPs28":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"FdfKnx9bG":{"pattern":":FdfKnx9bG","name":"container"}}`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { xn as __FramerMetadata__, $ as default, nn as queryParamNames };
//# sourceMappingURL=pD307sE3RTE21uNtLO_bNVXBax_UNE2n5kChyI4gmJk.BDMiY0yV.mjs.map
