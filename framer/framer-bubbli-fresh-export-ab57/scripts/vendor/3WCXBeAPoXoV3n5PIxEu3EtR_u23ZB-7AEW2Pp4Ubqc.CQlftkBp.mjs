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
  a as l,
  c as u,
  g as ee,
  i as te,
  l as d,
  o as f,
  s as p,
  w as m,
  y as h,
} from "./react.CWoGm2_e.mjs";
import { C as g, a as _, n as ne, r as v, t as y } from "./motion.DjW49AAR.mjs";
import {
  A as re,
  Ct as ie,
  D as b,
  Et as x,
  H as S,
  I as C,
  Ot as w,
  P as T,
  S as E,
  St as D,
  T as ae,
  U as O,
  W as k,
  X as oe,
  _ as se,
  _t as ce,
  a as A,
  ct as le,
  dt as ue,
  f as de,
  ft as fe,
  h as pe,
  ht as me,
  i as j,
  j as M,
  kt as he,
  l as ge,
  m as N,
  mt as _e,
  n as ve,
  nt as P,
  o as F,
  st as ye,
  u as be,
  vt as xe,
  w as I,
  x as Se,
  xt as Ce,
} from "./framer.D9PtOJZM.mjs";
import { n as we, t as Te } from "./SlideShow.C8M3m8gr.mjs";
import { i as Ee, t as De } from "./vDz2snn78.DZVUjcrj.mjs";
import { n as Oe, t as L } from "./O91kqgIxk.BCBG6QJw.mjs";
import { a as ke, c as Ae, i as je, o as Me, r as Ne, s as Pe } from "./shared-lib.Cln7NIgD.mjs";
import { n as Fe, t as R } from "./d45iZ4nbf.DzNFo8IJ.mjs";
import { n as Ie, t as z } from "./PcZeB9dzj.lfd4RlWt.mjs";
import { i as Le, n as Re, r as ze, t as Be } from "./jajJzupWJ.Cqa78jPq.mjs";
import { i as Ve, n as He, r as Ue, t as We } from "./zWe8uO5eV.D_hz-QQE.mjs";
import { n as Ge, t as B } from "./Q2lmlORGh.mE3XBzWB.mjs";
import { n as Ke, t as V } from "./wuFmlW7jd.DUSVcwDX.mjs";
import { a as qe, i as Je, n as Ye } from "./h78sYrnAz.CN_Z4VaQ.mjs";
import Xe, { t as Ze } from "./P75ZUJpusQ0RJ0szWr1H42rLQJ3SO3EwUqWKau3wrbM.CSFs4ZbN.mjs";
function H(e) {
  let {
      text: n,
      color: a,
      font: s,
      fontSize: c,
      lineHeightUnit: l,
      lineHeightPx: ee,
      lineHeightEm: te,
      letterSpacingUnit: d,
      letterSpacingPx: f,
      letterSpacingEm: p,
      textAlign: m,
      fullRevealDistance: h,
      initialBlur: g,
      initialOpacity: _,
      initialScale: ne,
      verticalOffset: v,
      perspective: y,
      rotateX: re,
      revealMode: ie,
    } = e,
    b = t(null),
    x = ie === `word` ? n.match(/\S+|\s+/g) || [] : n.split(``),
    [S, C] = o(0),
    [w, T] = o(!1),
    E = I.current() === I.canvas;
  r(() => {
    if (E) return;
    let e = 0,
      t = 0,
      n = new IntersectionObserver(
        ([n]) => {
          if (n.isIntersecting) {
            T(!0);
            let a = n.boundingClientRect;
            ((e = i.scrollY + a.top), (t = a.height), r());
          } else T(!1);
        },
        { threshold: [0] }
      );
    b.current && n.observe(b.current);
    let r = () => {
      if (!w) return;
      let n = i.scrollY,
        r = e - n,
        a = (i.innerHeight - r - t) / (h - t);
      C(Math.max(0, Math.min(1, a)));
    };
    return (
      i.addEventListener(`scroll`, r, { passive: !0 }),
      () => {
        (i.removeEventListener(`scroll`, r), b.current && n.unobserve(b.current));
      }
    );
  }, [h, E, w]);
  let D = l === `px` ? `${ee}px` : `${te}em`,
    ae = d === `px` ? `${f}px` : `${p}em`;
  return u(`div`, {
    ref: b,
    style: {
      position: `sticky`,
      top: 0,
      color: a,
      fontFamily: s?.fontFamily,
      fontWeight: s?.fontWeight,
      fontSize: `${c}px`,
      lineHeight: D,
      letterSpacing: ae,
      textAlign: m,
      opacity: w || E ? 1 : 0,
      perspective: `${y}px`,
    },
    children: x.map((e, t) => {
      let n = E ? 1 : (S - t / x.length) * x.length,
        r = Math.max(0, Math.min(1, n)),
        i = g * (1 - r),
        a = _ + (1 - _) * r,
        o = ne + (1 - ne) * r,
        s = v * (1 - r),
        c = re * (1 - r);
      return u(
        `span`,
        {
          style: {
            display: `inline-block`,
            whiteSpace: `pre`,
            filter: `blur(${i}px)`,
            opacity: a,
            transform: `scale(${o}) translateY(${s}px) rotateX(${c}deg)`,
            transition: `filter 0.2s ease-out, opacity 0.2s ease-out, transform 0.2s ease-out`,
          },
          children: e,
        },
        t
      );
    }),
  });
}
var Qe = e(() => {
    (n(),
      f(),
      m(),
      oe(),
      (H.defaultProps = {
        text: `This text unblurs and fades in word by word as you scroll`,
        color: `#000000`,
        font: { fontFamily: `Inter`, fontWeight: 400 },
        fontSize: 24,
        lineHeightUnit: `px`,
        lineHeightPx: 36,
        lineHeightEm: 1.5,
        letterSpacingUnit: `px`,
        letterSpacingPx: 0,
        letterSpacingEm: 0,
        textAlign: `left`,
        fullRevealDistance: 1e3,
        initialBlur: 3,
        initialOpacity: 0.1,
        initialScale: 0.8,
        verticalOffset: 20,
        perspective: 1e3,
        rotateX: 45,
        revealMode: `word`,
      }),
      M(H, {
        text: { type: F.String, title: `Text`, displayTextArea: !0 },
        color: { type: F.Color, title: `Color` },
        font: { type: F.Font, title: `Font` },
        fontSize: { type: F.Number, title: `Font Size`, min: 1, max: 100 },
        lineHeightUnit: {
          type: F.Enum,
          title: `Line Height Unit`,
          options: [`px`, `em`],
          optionTitles: [`Pixels`, `Em`],
        },
        lineHeightPx: {
          type: F.Number,
          title: `Line Height (px)`,
          min: 1,
          max: 200,
          step: 1,
          hidden: (e) => e.lineHeightUnit !== `px`,
        },
        lineHeightEm: {
          type: F.Number,
          title: `Line Height (em)`,
          min: 0.5,
          max: 3,
          step: 0.1,
          hidden: (e) => e.lineHeightUnit !== `em`,
        },
        letterSpacingUnit: {
          type: F.Enum,
          title: `Letter Spacing Unit`,
          options: [`px`, `em`],
          optionTitles: [`Pixels`, `Em`],
        },
        letterSpacingPx: {
          type: F.Number,
          title: `Letter Spacing (px)`,
          min: -10,
          max: 50,
          step: 1,
          hidden: (e) => e.letterSpacingUnit !== `px`,
        },
        letterSpacingEm: {
          type: F.Number,
          title: `Letter Spacing (em)`,
          min: -0.5,
          max: 3,
          step: 0.01,
          hidden: (e) => e.letterSpacingUnit !== `em`,
        },
        textAlign: {
          type: F.Enum,
          title: `Text Align`,
          options: [`left`, `center`, `right`, `justify`],
          optionTitles: [`Left`, `Center`, `Right`, `Justify`],
        },
        fullRevealDistance: {
          type: F.Number,
          title: `Full Reveal Distance`,
          min: 100,
          max: 5e3,
          step: 10,
        },
        initialBlur: { type: F.Number, title: `Initial Blur`, min: 0, max: 10, step: 0.5 },
        initialOpacity: { type: F.Number, title: `Initial Opacity`, min: 0, max: 1, step: 0.05 },
        initialScale: { type: F.Number, title: `Initial Scale`, min: 0.5, max: 1, step: 0.05 },
        verticalOffset: { type: F.Number, title: `Vertical Offset`, min: -100, max: 100, step: 1 },
        perspective: { type: F.Number, title: `Perspective`, min: 100, max: 2e3, step: 50 },
        rotateX: { type: F.Number, title: `Rotate X`, min: -90, max: 90, step: 1 },
        revealMode: {
          type: F.Enum,
          title: `Reveal Mode`,
          options: [`word`, `letter`],
          optionTitles: [`Word`, `Letter`],
        },
      }));
  }),
  $e,
  U,
  et,
  tt,
  nt,
  W,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  ht,
  gt,
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
  Dt,
  Q,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  $,
  Ft;
e(() => {
  (f(),
    oe(),
    y(),
    m(),
    l(),
    Qe(),
    Ae(),
    we(),
    Fe(),
    Oe(),
    Ie(),
    Ge(),
    Ke(),
    qe(),
    Ee(),
    Me(),
    Le(),
    Ve(),
    Ze(),
    ($e = S(Te)),
    (U = he(g.section)),
    (et = S(z)),
    (tt = S(V)),
    (nt = S(H)),
    (W = w(g.div)),
    (rt = S(B)),
    (it = S(R)),
    (at = he(A)),
    (ot = S(L)),
    (st = S(Pe)),
    (ct = {
      M9w91sPhV: `(max-width: 809.98px)`,
      UyjEs4qrE: `(min-width: 810px) and (max-width: 1199.98px)`,
      WQLkyLRf1: `(min-width: 1200px)`,
    }),
    (lt = []),
    (ut = `framer-X9KIS`),
    (dt = {
      M9w91sPhV: `framer-v-1w30j09`,
      UyjEs4qrE: `framer-v-136mg49`,
      WQLkyLRf1: `framer-v-72rtr7`,
    }),
    (ft = (e, t, n) => (e && t ? `position` : n)),
    (pt = (e, t) => `translateY(-50%) ${t}`),
    (mt = {
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
    (G = {
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
    (K = {
      filter: `blur(10px)`,
      opacity: 0.001,
      rotate: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 10,
    }),
    (q = { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` }),
    (J = {
      effect: K,
      repeat: !1,
      startDelay: 0.5,
      tokenization: `character`,
      transition: q,
      trigger: `onMount`,
      type: `appear`,
    }),
    (Y = {
      effect: K,
      tokenization: `character`,
      transition: q,
      trigger: `onMount`,
      type: `appear`,
    }),
    (X = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (ht = (e, t) => `translateX(-50%) ${t}`),
    (gt = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
    (_t = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gt,
      x: 0,
      y: 30,
    }),
    (vt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gt,
      x: 0,
      y: 0,
    }),
    (yt = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 30,
    }),
    (bt = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (xt = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = Ce({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (St = () => ({
      from: { alias: `ZfJDcGmOu`, data: De, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `ZfJDcGmOu`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ct = () => ({
      from: { alias: `ZfJDcGmOu`, data: De, type: `Collection` },
      limit: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `ZfJDcGmOu`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `ZfJDcGmOu`, name: `id`, type: `Identifier` },
      ],
    })),
    (wt = ({ query: e, pageSize: t, children: n }) => n(D(e))),
    (Tt = {
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
    (Et = { bounce: 0.2, delay: 0, duration: 1, type: `spring` }),
    (Dt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.9, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Q = () => ({
      from: { alias: `qhkJv5Wjd`, data: Ye, type: `Collection` },
      orderBy: [{ collection: `qhkJv5Wjd`, name: `updatedAt`, type: `Identifier` }],
      select: [
        { collection: `qhkJv5Wjd`, name: `btGpJvFlp`, type: `Identifier` },
        { collection: `qhkJv5Wjd`, name: `i9ILnbAeX`, type: `Identifier` },
        { collection: `qhkJv5Wjd`, name: `MV8vbHLj9`, type: `Identifier` },
        { collection: `qhkJv5Wjd`, name: `AlH2wYsQg`, type: `Identifier` },
        { collection: `qhkJv5Wjd`, name: `id`, type: `Identifier` },
      ],
    })),
    (Ot = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = me(e, t, `qhkJv5Wjd`);
      return n(D(r), i, a);
    }),
    (kt = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 1.7, duration: 1, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (At = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 20,
    }),
    (jt = (e, t, n) => {
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
    (Mt = { Desktop: `WQLkyLRf1`, Phone: `M9w91sPhV`, Tablet: `UyjEs4qrE` }),
    (Nt = ({ value: e }) =>
      _e()
        ? null
        : u(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Pt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Mt[r.variant] ?? r.variant ?? `WQLkyLRf1`,
    })),
    ($ = x(
      ee(function (e, n) {
        let r = t(null),
          i = n ?? r,
          o = h(),
          { activeLocale: l, setLocale: ee } = ce(),
          f = le(),
          { style: m, className: y, layoutId: re, variant: x, ...S } = Pt(e);
        xe(c(() => Xe({}, l), [l]));
        let [C, w] = fe(x, ct, !1),
          { activeVariantCallback: D, delay: O } = ye(void 0),
          oe = ({ overlay: e }) =>
            D(async (...t) => {
              e.toggle();
            }),
          me = ({ overlay: e }) =>
            D(async (...t) => {
              e.hide();
            }),
          M = T(ut, Ne, We, Be),
          he = s(de)?.isLayoutTemplate,
          _e = !!s(_)?.transition?.layout,
          P = ft(he, _e),
          F = ie(`gRNwPk5S2`),
          I = t(null);
        return (
          ue({}),
          u(de.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Mt,
              primaryVariantId: `WQLkyLRf1`,
              variantClassNames: dt,
            },
            children: d(v, {
              id: re ?? o,
              children: [
                u(Nt, {
                  value: `html body { background: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)); }`,
                }),
                d(g.div, {
                  ...S,
                  className: T(M, `framer-72rtr7`, y),
                  ref: i,
                  style: { ...m },
                  children: [
                    d(g.header, {
                      className: `framer-1p2nftw`,
                      "data-framer-name": `Hero`,
                      layout: P,
                      children: [
                        u(`div`, { className: `framer-1fac5yo`, "data-framer-name": `Gradient` }),
                        u(j, {
                          children: u(A, {
                            className: `framer-c4fjdb-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            nodeId: `dr7r3gTPF`,
                            scopeId: `augiA20Il`,
                            children: u(E, {
                              breakpoint: C,
                              overrides: {
                                M9w91sPhV: { dragControl: !0 },
                                UyjEs4qrE: { dragControl: !0 },
                              },
                              children: u(Te, {
                                alignment: `center`,
                                arrowOptions: {
                                  arrowFill: `rgba(0, 0, 0, 0.2)`,
                                  arrowGap: 6,
                                  arrowPadding: 32,
                                  arrowPaddingBottom: 32,
                                  arrowPaddingLeft: 0,
                                  arrowPaddingRight: 32,
                                  arrowPaddingTop: 0,
                                  arrowPosition: `bottom-right`,
                                  arrowRadius: 8,
                                  arrowShouldFadeIn: !1,
                                  arrowShouldSpace: !1,
                                  arrowSize: 32,
                                  showMouseControls: !0,
                                },
                                autoPlayControl: !0,
                                borderRadius: 0,
                                direction: `left`,
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
                                id: `dr7r3gTPF`,
                                intervalControl: 3.4,
                                itemAmount: 1,
                                layoutId: `dr7r3gTPF`,
                                padding: 0,
                                paddingBottom: 0,
                                paddingLeft: 0,
                                paddingPerSide: !1,
                                paddingRight: 0,
                                paddingTop: 0,
                                progressOptions: {
                                  dotsActiveOpacity: 1,
                                  dotsBackground: `rgba(0, 0, 0, 0.24)`,
                                  dotsBlur: 4,
                                  dotsFill: `rgb(255, 255, 255)`,
                                  dotsGap: 8,
                                  dotsInset: 20,
                                  dotSize: 8,
                                  dotsOpacity: 0.5,
                                  dotsPadding: 8,
                                  dotsRadius: 8,
                                  showProgressDots: !1,
                                },
                                slots: [
                                  u(N, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1422,
                                      intrinsicWidth: 1064,
                                      pixelHeight: 1422,
                                      pixelWidth: 1064,
                                      positionX: `center`,
                                      positionY: `center`,
                                      sizes: `287px`,
                                      src: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png`,
                                      srcSet: `../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA.png 766w,../../assets/images/Zfmx5gctP1nlDOM4dcGf1iHVHEA-25284b.png 1064w`,
                                    },
                                    className: `framer-1rslm1u`,
                                    "data-framer-name": `Slideshow Image 1`,
                                  }),
                                  u(N, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1414,
                                      intrinsicWidth: 1128,
                                      pixelHeight: 1414,
                                      pixelWidth: 1128,
                                      positionX: `center`,
                                      positionY: `top`,
                                      sizes: `287px`,
                                      src: `../../assets/images/Eb5iltmvgH7mDQcjLhwbxRHVjM-6ac0dc.png`,
                                      srcSet: `../../assets/images/Eb5iltmvgH7mDQcjLhwbxRHVjM.png 816w,../../assets/images/Eb5iltmvgH7mDQcjLhwbxRHVjM-6ac0dc.png 1128w`,
                                    },
                                    className: `framer-10smxe9`,
                                    "data-framer-name": `Slideshow Image 2`,
                                  }),
                                  u(N, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      intrinsicHeight: 1418,
                                      intrinsicWidth: 1072,
                                      pixelHeight: 1418,
                                      pixelWidth: 1072,
                                      positionX: `47%`,
                                      positionY: `78.8%`,
                                      sizes: `287px`,
                                      src: `../../assets/images/wzjt7myF8RQAxzHWZth1XLaDsc-233d1d.png`,
                                      srcSet: `../../assets/images/wzjt7myF8RQAxzHWZth1XLaDsc.png 774w,../../assets/images/wzjt7myF8RQAxzHWZth1XLaDsc-233d1d.png 1072w`,
                                    },
                                    className: `framer-1jm69u3`,
                                    "data-framer-name": `Slideshow Image 3`,
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
                        d(U, {
                          animate: mt,
                          className: `framer-78cfpr`,
                          "data-framer-appear-id": `78cfpr`,
                          "data-framer-name": `Services`,
                          initial: G,
                          optimized: !0,
                          transformTemplate: pt,
                          children: [
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `14px`,
                                    "--framer-letter-spacing": `-0.01em`,
                                    "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `MODERN`,
                                }),
                              }),
                              className: `framer-1mcs431`,
                              fonts: [`GF;Fragment Mono-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `14px`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `HYDRATION`,
                                }),
                              }),
                              className: `framer-cbwatt`,
                              fonts: [`GF;Fragment Mono-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `13px`,
                                    "--framer-letter-spacing": `0.04em`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-alignment": `right`,
                                    "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `IN`,
                                }),
                              }),
                              className: `framer-1hmnf2g`,
                              fonts: [`GF;Fragment Mono-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                    "--framer-font-family": `"Fragment Mono", monospace`,
                                    "--framer-font-size": `13px`,
                                    "--framer-letter-spacing": `0.04em`,
                                    "--framer-line-height": `100%`,
                                    "--framer-text-alignment": `right`,
                                    "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                    "--framer-text-transform": `uppercase`,
                                  },
                                  children: `ACTION`,
                                }),
                              }),
                              className: `framer-hw5s24`,
                              fonts: [`GF;Fragment Mono-regular`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      ],
                    }),
                    d(g.section, {
                      className: `framer-e6i2qm`,
                      "data-framer-name": `Featured Products`,
                      layout: P,
                      children: [
                        d(`header`, {
                          className: `framer-gkg8bn`,
                          "data-framer-name": `Header`,
                          children: [
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`h2`, {
                                  className: `framer-styles-preset-ul51j9`,
                                  "data-styles-preset": `hPRt9GJWZ`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Products`,
                                }),
                              }),
                              className: `framer-1mivc4q`,
                              effect: J,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`h2`, {
                                  className: `framer-styles-preset-63r6z3`,
                                  "data-styles-preset": `zWe8uO5eV`,
                                  dir: `auto`,
                                  children: `Explore our selection`,
                                }),
                              }),
                              className: `framer-1vfcjv8`,
                              effect: Y,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        u(`div`, {
                          className: `framer-ixryy5`,
                          children: u(ve, {
                            children: u(E, {
                              breakpoint: C,
                              overrides: { UyjEs4qrE: { query: Ct() } },
                              children: u(wt, {
                                query: St(),
                                children: (e, t, n) =>
                                  u(p, {
                                    children: e?.map(
                                      (
                                        {
                                          bf_4Vezhu: e,
                                          EKLxfLWe8: t,
                                          FCIPIBRAL: n,
                                          Gv7QQejjQ: r,
                                          id: i,
                                          qtxO0uchm: a,
                                          SbAOTK1XD: o,
                                        },
                                        s
                                      ) => (
                                        (t ??= ``),
                                        (e ??= ``),
                                        (n ??= ``),
                                        (a ??= ``),
                                        (o ??= ``),
                                        u(
                                          v,
                                          {
                                            id: `ZfJDcGmOu-${i}`,
                                            children: u(Se.Provider, {
                                              value: { EKLxfLWe8: t },
                                              children: u(se, {
                                                href: {
                                                  pathVariables: { EKLxfLWe8: t },
                                                  webPageId: `unRZtzSgJ`,
                                                },
                                                motionChild: !0,
                                                nodeId: `DxSq4iVmA`,
                                                openInNewTab: !1,
                                                scopeId: `augiA20Il`,
                                                children: u(g.a, {
                                                  className: `framer-1ywcsms framer-lux5qc`,
                                                  children: u(xt, {
                                                    blockDocumentScrolling: !1,
                                                    dismissWithEsc: !0,
                                                    children: (i) =>
                                                      u(p, {
                                                        children: u(E, {
                                                          breakpoint: C,
                                                          overrides: {
                                                            M9w91sPhV: {
                                                              width: `max(max(min(${f?.width || `100vw`} - 48px, 1200px), 50px), 1px)`,
                                                            },
                                                            UyjEs4qrE: {
                                                              width: `max(max((min(${f?.width || `100vw`} - 64px, 1200px) - 12px) / 2, 50px), 1px)`,
                                                            },
                                                          },
                                                          children: u(j, {
                                                            height: 444,
                                                            width: `max(max((min(${f?.width || `100vw`} - 64px, 1200px) - 24px) / 3, 50px), 1px)`,
                                                            y:
                                                              (f?.y || 0) +
                                                              0 +
                                                              1e3 +
                                                              82 +
                                                              77.6 +
                                                              32 +
                                                              0 +
                                                              0,
                                                            children: d(A, {
                                                              className: `framer-8iqbbh-container`,
                                                              id: `${t}-8iqbbh`,
                                                              nodeId: `tR3Tkqb1T`,
                                                              scopeId: `augiA20Il`,
                                                              children: [
                                                                u(E, {
                                                                  breakpoint: C,
                                                                  overrides: {
                                                                    M9w91sPhV: {
                                                                      variant: Z(`F4L40vjcL`),
                                                                    },
                                                                  },
                                                                  children: u(z, {
                                                                    a8hn4hdTB: `View Product`,
                                                                    gzQ2Nlesr: a,
                                                                    height: `100%`,
                                                                    hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                    id: `tR3Tkqb1T`,
                                                                    layoutId: `tR3Tkqb1T`,
                                                                    nNQ5K9K0l: n,
                                                                    pDK2H0NwC: X(r),
                                                                    rHB2d7ei8: o,
                                                                    style: { width: `100%` },
                                                                    UTuSJqO5M: e,
                                                                    variant: Z(`gmSnlM4V7`),
                                                                    width: `100%`,
                                                                    XmbYcM2J4: oe({ overlay: i }),
                                                                  }),
                                                                }),
                                                                u(ne, {
                                                                  children:
                                                                    i.visible &&
                                                                    u(p, {
                                                                      children: te(
                                                                        u(pe, {
                                                                          triggerId: `${t}-8iqbbh`,
                                                                          children: d(ae, {
                                                                            children: [
                                                                              u(
                                                                                g.div,
                                                                                {
                                                                                  animate: {
                                                                                    opacity: 1,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.5, 0,
                                                                                        0.88, 0.77,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  className: T(
                                                                                    M,
                                                                                    `framer-fkrxcr`
                                                                                  ),
                                                                                  "data-framer-portal-id": `${t}-8iqbbh`,
                                                                                  exit: {
                                                                                    opacity: 0,
                                                                                    transition: {
                                                                                      delay: 0,
                                                                                      duration: 0,
                                                                                      ease: [
                                                                                        0.12, 0.23,
                                                                                        0.5, 1,
                                                                                      ],
                                                                                      type: `tween`,
                                                                                    },
                                                                                  },
                                                                                  initial: {
                                                                                    opacity: 0,
                                                                                  },
                                                                                  onTap: () =>
                                                                                    i.hide(),
                                                                                },
                                                                                `w1d3SzSTC`
                                                                              ),
                                                                              u(g.div, {
                                                                                className: T(
                                                                                  M,
                                                                                  `framer-18tglxm`
                                                                                ),
                                                                                "data-framer-portal-id": `${t}-8iqbbh`,
                                                                                transformTemplate:
                                                                                  ht,
                                                                                children: u(j, {
                                                                                  width: `max(min(100vw - 40px, 400px), 200px)`,
                                                                                  children: u(A, {
                                                                                    animate: vt,
                                                                                    className: `framer-xhqrod-container`,
                                                                                    exit: _t,
                                                                                    inComponentSlot:
                                                                                      !0,
                                                                                    initial: yt,
                                                                                    nodeId: `GonSRM78o`,
                                                                                    rendersWithMotion:
                                                                                      !0,
                                                                                    scopeId: `augiA20Il`,
                                                                                    children: u(V, {
                                                                                      HblJYYmXZ: me(
                                                                                        {
                                                                                          overlay:
                                                                                            i,
                                                                                        }
                                                                                      ),
                                                                                      height: `100%`,
                                                                                      id: `GonSRM78o`,
                                                                                      layoutId: `GonSRM78o`,
                                                                                      style: {
                                                                                        maxWidth: `100%`,
                                                                                        width: `100%`,
                                                                                      },
                                                                                      width: `100%`,
                                                                                    }),
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            ],
                                                                          }),
                                                                        }),
                                                                        bt()
                                                                      ),
                                                                    }),
                                                                }),
                                                              ],
                                                            }),
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
                        }),
                      ],
                    }),
                    d(g.section, {
                      className: `framer-taquhu`,
                      "data-framer-name": `Philosophy`,
                      layout: P,
                      children: [
                        u(W, {
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-1mlfdt4`,
                          "data-framer-name": `Content`,
                          children: u(W, {
                            __framer__animate: { transition: Et },
                            __framer__animateOnce: !0,
                            __framer__enter: Tt,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-21ntu6`,
                            "data-framer-name": `Container`,
                            children: d(`div`, {
                              className: `framer-18y3018`,
                              "data-framer-name": `Wrapper`,
                              children: [
                                u(j, {
                                  children: u(A, {
                                    className: `framer-hm1r1o-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    nodeId: `TP7YYjCuT`,
                                    scopeId: `augiA20Il`,
                                    children: u(E, {
                                      breakpoint: C,
                                      overrides: {
                                        M9w91sPhV: { fontSize: 28 },
                                        UyjEs4qrE: { fontSize: 36 },
                                      },
                                      children: u(H, {
                                        color: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                        },
                                        fontSize: 18,
                                        fullRevealDistance: 1500,
                                        height: `100%`,
                                        id: `TP7YYjCuT`,
                                        initialBlur: 5,
                                        initialOpacity: 0.2,
                                        initialScale: 1,
                                        layoutId: `TP7YYjCuT`,
                                        letterSpacingEm: -0.06,
                                        letterSpacingPx: 0,
                                        letterSpacingUnit: `em`,
                                        lineHeightEm: 1.1,
                                        lineHeightPx: 36,
                                        lineHeightUnit: `em`,
                                        perspective: 1e3,
                                        revealMode: `word`,
                                        rotateX: 0,
                                        style: { maxWidth: `100%`, width: `100%` },
                                        text: `Modern drink culture turned water into sugary sodas. Bubbli® changes that: sparkling water with 100% real fruit juice—nothing artificial, nothing extra—just clean bubbles, real fruit, and natural refreshment.`,
                                        textAlign: `center`,
                                        verticalOffset: 0,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                                u(b, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-letter-spacing": `-0.05em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-bb4f5811-e511-4fd8-a2e3-7a79d4c7f4f2, rgb(139, 138, 138))`,
                                      },
                                      children: `© シュワシュワ Bubbli®`,
                                    }),
                                  }),
                                  className: `framer-1r97ruo`,
                                  "data-framer-name": `Name`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                        }),
                        u(`div`, {
                          className: `framer-bf0kbn`,
                          "data-framer-name": `Images`,
                          children: d(`div`, {
                            className: `framer-1dclhkk`,
                            "data-framer-name": `Content`,
                            children: [
                              d(`div`, {
                                className: `framer-1b5uiw8`,
                                "data-framer-name": `1 & 2`,
                                children: [
                                  u(`div`, {
                                    className: `framer-1lzzzf3`,
                                    "data-framer-name": `Image 2`,
                                    children: u(E, {
                                      breakpoint: C,
                                      overrides: {
                                        M9w91sPhV: {
                                          background: {
                                            alt: `Women`,
                                            fit: `fill`,
                                            intrinsicHeight: 904,
                                            intrinsicWidth: 1200,
                                            loading: k(
                                              (f?.y || 0) +
                                                0 +
                                                2629.6 +
                                                0 +
                                                1e3 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                206 +
                                                0
                                            ),
                                            pixelHeight: 904,
                                            pixelWidth: 1200,
                                            sizes: `max((max(min(${f?.width || `100vw`} - 48px, 1440px), 1px) - 24px) / 2, 1px)`,
                                            src: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg`,
                                            srcSet: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ.jpg 512w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-9f06eb.jpg 1024w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg 1200w`,
                                          },
                                        },
                                      },
                                      children: u(N, {
                                        background: {
                                          alt: `Women`,
                                          fit: `fill`,
                                          intrinsicHeight: 904,
                                          intrinsicWidth: 1200,
                                          loading: k(
                                            (f?.y || 0) +
                                              0 +
                                              2173.6 +
                                              0 +
                                              1e3 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              206 +
                                              0
                                          ),
                                          pixelHeight: 904,
                                          pixelWidth: 1200,
                                          sizes: `264px`,
                                          src: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg`,
                                          srcSet: `../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ.jpg 512w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-9f06eb.jpg 1024w,../../assets/images/jM4LbFZsm3SjiRzVElOxTevcfQ-d08e23.jpg 1200w`,
                                        },
                                        className: `framer-jy8m5g`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  }),
                                  u(`div`, {
                                    className: `framer-14bxutd`,
                                    "data-framer-name": `Image 1`,
                                    children: u(E, {
                                      breakpoint: C,
                                      overrides: {
                                        M9w91sPhV: {
                                          background: {
                                            alt: `Dram`,
                                            fit: `fill`,
                                            intrinsicHeight: 914,
                                            intrinsicWidth: 1634,
                                            loading: k(
                                              (f?.y || 0) +
                                                0 +
                                                2629.6 +
                                                0 +
                                                1e3 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 914,
                                            pixelWidth: 1634,
                                            sizes: `max((max(min(${f?.width || `100vw`} - 48px, 1440px), 1px) - 24px) / 2, 1px)`,
                                            src: `../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-49ff1d.png`,
                                            srcSet: `../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g.png 512w,../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-52d403.png 1024w,../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-49ff1d.png 1634w`,
                                          },
                                        },
                                      },
                                      children: u(N, {
                                        background: {
                                          alt: `Dram`,
                                          fit: `fill`,
                                          intrinsicHeight: 914,
                                          intrinsicWidth: 1634,
                                          loading: k(
                                            (f?.y || 0) +
                                              0 +
                                              2173.6 +
                                              0 +
                                              1e3 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 914,
                                          pixelWidth: 1634,
                                          sizes: `403px`,
                                          src: `../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-49ff1d.png`,
                                          srcSet: `../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g.png 512w,../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-52d403.png 1024w,../../assets/images/IDeXPrnolbPrv0W0ySqdaodU8g-49ff1d.png 1634w`,
                                        },
                                        className: `framer-1c5rp05`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                              u(`div`, {
                                className: `framer-185uzea`,
                                "data-framer-name": `3`,
                                children: u(E, {
                                  breakpoint: C,
                                  overrides: {
                                    M9w91sPhV: {
                                      background: {
                                        alt: `Portrait`,
                                        fit: `fill`,
                                        intrinsicHeight: 1420,
                                        intrinsicWidth: 1062,
                                        loading: k(
                                          (f?.y || 0) + 0 + 2629.6 + 0 + 1e3 + 0 + 0 + 733 + 0
                                        ),
                                        pixelHeight: 1420,
                                        pixelWidth: 1062,
                                        sizes: `max(min(${f?.width || `100vw`} - 48px, 1440px), 1px)`,
                                        src: `../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw-dae012.png`,
                                        srcSet: `../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw.png 765w,../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw-dae012.png 1062w`,
                                      },
                                    },
                                  },
                                  children: u(N, {
                                    background: {
                                      alt: `Portrait`,
                                      fit: `fill`,
                                      intrinsicHeight: 1420,
                                      intrinsicWidth: 1062,
                                      loading: k(
                                        (f?.y || 0) + 0 + 2173.6 + 0 + 1e3 + 0 + 0 + 733 + 0
                                      ),
                                      pixelHeight: 1420,
                                      pixelWidth: 1062,
                                      sizes: `536.0406px`,
                                      src: `../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw-dae012.png`,
                                      srcSet: `../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw.png 765w,../../assets/images/MfyElWoGZaJl5X1x13zMGVoAw-dae012.png 1062w`,
                                    },
                                    className: `framer-16z1rdy`,
                                    "data-framer-name": `Image`,
                                  }),
                                }),
                              }),
                              d(`div`, {
                                className: `framer-xiyz31`,
                                "data-framer-name": `4 & 5`,
                                children: [
                                  u(`div`, {
                                    className: `framer-7kk0f4`,
                                    "data-framer-name": `Image 5`,
                                    children: u(E, {
                                      breakpoint: C,
                                      overrides: {
                                        M9w91sPhV: {
                                          background: {
                                            alt: `Women Motion Blur`,
                                            fit: `fill`,
                                            intrinsicHeight: 1232,
                                            intrinsicWidth: 1634,
                                            loading: k(
                                              (f?.y || 0) +
                                                0 +
                                                2629.6 +
                                                0 +
                                                1e3 +
                                                0 +
                                                0 +
                                                1333 +
                                                0 +
                                                0 +
                                                0
                                            ),
                                            pixelHeight: 1232,
                                            pixelWidth: 1634,
                                            sizes: `max((max(min(${f?.width || `100vw`} - 48px, 1440px), 1px) - 24px) / 2, 1px)`,
                                            src: `../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-c9a30b.png`,
                                            srcSet: `../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig.png 512w,../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-8333d9.png 1024w,../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-c9a30b.png 1634w`,
                                          },
                                        },
                                      },
                                      children: u(N, {
                                        background: {
                                          alt: `Women Motion Blur`,
                                          fit: `fill`,
                                          intrinsicHeight: 1232,
                                          intrinsicWidth: 1634,
                                          loading: k(
                                            (f?.y || 0) +
                                              0 +
                                              2173.6 +
                                              0 +
                                              1e3 +
                                              0 +
                                              0 +
                                              1333 +
                                              0 +
                                              0 +
                                              0
                                          ),
                                          pixelHeight: 1232,
                                          pixelWidth: 1634,
                                          sizes: `442px`,
                                          src: `../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-c9a30b.png`,
                                          srcSet: `../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig.png 512w,../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-8333d9.png 1024w,../../assets/images/IskabE2gpHSq1mOGIDwXYh0gig-c9a30b.png 1634w`,
                                        },
                                        className: `framer-1hbay7j`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  }),
                                  u(`div`, {
                                    className: `framer-1p109z6`,
                                    "data-framer-name": `Image 4`,
                                    children: u(E, {
                                      breakpoint: C,
                                      overrides: {
                                        M9w91sPhV: {
                                          background: {
                                            alt: `Women On Neon Background`,
                                            fit: `fill`,
                                            intrinsicHeight: 1420,
                                            intrinsicWidth: 1082,
                                            loading: k(
                                              (f?.y || 0) +
                                                0 +
                                                2629.6 +
                                                0 +
                                                1e3 +
                                                0 +
                                                0 +
                                                1333 +
                                                0 +
                                                110 +
                                                0
                                            ),
                                            pixelHeight: 1420,
                                            pixelWidth: 1082,
                                            sizes: `max((max(min(${f?.width || `100vw`} - 48px, 1440px), 1px) - 24px) / 2, 1px)`,
                                            src: `../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA-0ed2b8.png`,
                                            srcSet: `../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA.png 780w,../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA-0ed2b8.png 1082w`,
                                          },
                                        },
                                      },
                                      children: u(N, {
                                        background: {
                                          alt: `Women On Neon Background`,
                                          fit: `fill`,
                                          intrinsicHeight: 1420,
                                          intrinsicWidth: 1082,
                                          loading: k(
                                            (f?.y || 0) +
                                              0 +
                                              2173.6 +
                                              0 +
                                              1e3 +
                                              0 +
                                              0 +
                                              1333 +
                                              0 +
                                              110 +
                                              0
                                          ),
                                          pixelHeight: 1420,
                                          pixelWidth: 1082,
                                          sizes: `294.8223px`,
                                          src: `../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA-0ed2b8.png`,
                                          srcSet: `../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA.png 780w,../../assets/images/hmCkkv8aqfRvdKtA0ltC0CGtBA-0ed2b8.png 1082w`,
                                        },
                                        className: `framer-5xklaf`,
                                        "data-framer-name": `Image`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    d(U, {
                      animate: Dt,
                      className: `framer-1q37w2a`,
                      "data-framer-appear-id": `1q37w2a`,
                      "data-framer-name": `Blog`,
                      initial: G,
                      layout: P,
                      optimized: !0,
                      children: [
                        d(`header`, {
                          className: `framer-64m6ca`,
                          "data-framer-name": `Header`,
                          children: [
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`h2`, {
                                  className: `framer-styles-preset-ul51j9`,
                                  "data-styles-preset": `hPRt9GJWZ`,
                                  dir: `auto`,
                                  style: { "--framer-text-alignment": `center` },
                                  children: `Our Blog`,
                                }),
                              }),
                              className: `framer-hhbyh9`,
                              effect: J,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`h2`, {
                                  className: `framer-styles-preset-63r6z3`,
                                  "data-styles-preset": `zWe8uO5eV`,
                                  dir: `auto`,
                                  children: `Explore our selection`,
                                }),
                              }),
                              className: `framer-mqnm23`,
                              effect: Y,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        u(`div`, {
                          className: `framer-1to0qwz`,
                          "data-framer-name": `Blog`,
                          children: u(ve, {
                            children: u(E, {
                              breakpoint: C,
                              overrides: { UyjEs4qrE: { pageSize: 4, query: Q() } },
                              children: u(Ot, {
                                pageSize: 3,
                                query: Q(),
                                children: (e, t, n) =>
                                  u(p, {
                                    children: e?.map(
                                      (
                                        {
                                          AlH2wYsQg: e,
                                          btGpJvFlp: t,
                                          i9ILnbAeX: n,
                                          id: r,
                                          MV8vbHLj9: i,
                                        },
                                        a
                                      ) => (
                                        (t ??= ``),
                                        (i ??= ``),
                                        u(
                                          v,
                                          {
                                            id: `qhkJv5Wjd-${r}`,
                                            children: u(Se.Provider, {
                                              value: { btGpJvFlp: t },
                                              children: u(se, {
                                                href: {
                                                  pathVariables: { btGpJvFlp: t },
                                                  webPageId: `GW53l1Are`,
                                                },
                                                motionChild: !0,
                                                nodeId: `aKPwbb_9K`,
                                                openInNewTab: !1,
                                                scopeId: `augiA20Il`,
                                                children: u(g.a, {
                                                  className: `framer-1tmtb2e framer-lux5qc`,
                                                  children: u(E, {
                                                    breakpoint: C,
                                                    overrides: {
                                                      M9w91sPhV: {
                                                        width: `326px`,
                                                        y:
                                                          (f?.y || 0) +
                                                          0 +
                                                          5374.6 +
                                                          82 +
                                                          77.6 +
                                                          0 +
                                                          788 +
                                                          0 +
                                                          0,
                                                      },
                                                      UyjEs4qrE: {
                                                        width: `max(max((min(${f?.width || `100vw`}, 1200px) - 76px) / 2, 260px), 50px)`,
                                                      },
                                                    },
                                                    children: u(j, {
                                                      height: 382,
                                                      width: `max(max((min(${f?.width || `100vw`}, 1200px) - 88px) / 3, 260px), 50px)`,
                                                      y:
                                                        (f?.y || 0) +
                                                        0 +
                                                        4918.6 +
                                                        82 +
                                                        77.6 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0,
                                                      children: u(A, {
                                                        className: `framer-ucsubu-container`,
                                                        "data-framer-name": `Blog Card`,
                                                        name: `Blog Card`,
                                                        nodeId: `YqcRhqhyD`,
                                                        scopeId: `augiA20Il`,
                                                        children: u(B, {
                                                          G28a3xS1l: X(n),
                                                          height: `100%`,
                                                          id: `YqcRhqhyD`,
                                                          layoutId: `YqcRhqhyD`,
                                                          name: `Blog Card`,
                                                          Pjf9geszM: Je.AlH2wYsQg?.(e, l),
                                                          style: { width: `100%` },
                                                          variant: Z(`PCX51OaaK`),
                                                          VtVUt2K0x: i,
                                                          width: `100%`,
                                                          zMelyq2xf: `1 min`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                              }),
                                            }),
                                          },
                                          r
                                        )
                                      )
                                    ),
                                  }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    u(g.section, {
                      className: `framer-396s1n`,
                      "data-framer-name": `FAQs`,
                      id: F,
                      layout: P,
                      ref: I,
                      children: d(`div`, {
                        className: `framer-1dy0l2g`,
                        "data-framer-name": `Container`,
                        children: [
                          u(`div`, {
                            className: `framer-1pp18kn`,
                            "data-framer-name": `Container`,
                            children: u(`header`, {
                              className: `framer-43kgx2`,
                              "data-framer-name": `Header`,
                              children: u(`div`, {
                                className: `framer-1wf3hn8`,
                                "data-framer-name": `head container`,
                                children: u(b, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(`h2`, {
                                      className: `framer-styles-preset-ul51j9`,
                                      "data-styles-preset": `hPRt9GJWZ`,
                                      dir: `auto`,
                                      children: `Our FAQ's`,
                                    }),
                                  }),
                                  className: `framer-13gvoer`,
                                  "data-framer-name": `Title`,
                                  effect: J,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            }),
                          }),
                          d(`div`, {
                            className: `framer-4khxf6`,
                            "data-framer-name": `Content`,
                            children: [
                              u(`div`, {
                                className: `framer-osit8x`,
                                "data-framer-name": `Subtitle`,
                                children: u(b, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(`h3`, {
                                      className: `framer-styles-preset-1942lag`,
                                      "data-styles-preset": `jajJzupWJ`,
                                      dir: `auto`,
                                      children: `You have questions, we have answers.`,
                                    }),
                                  }),
                                  className: `framer-1c94isr`,
                                  "data-framer-name": `Explore our selection`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                              u(`div`, {
                                className: `framer-1lu2ggv`,
                                "data-framer-name": `Container`,
                                children: u(E, {
                                  breakpoint: C,
                                  overrides: {
                                    M9w91sPhV: {
                                      width: `min(min(${f?.width || `100vw`}, 1440px) - 48px, 1440px)`,
                                      y:
                                        (f?.y || 0) +
                                        0 +
                                        6704.2 +
                                        0 +
                                        0 +
                                        0 +
                                        153.6 +
                                        112 +
                                        45 +
                                        0 +
                                        0,
                                    },
                                    UyjEs4qrE: {
                                      width: `min(max((min(min(${f?.width || `100vw`}, 1440px) - 64px, 1440px) - 24px) / 2, 1px), 840px)`,
                                    },
                                  },
                                  children: u(j, {
                                    height: 135,
                                    width: `min(max((min(min(${f?.width || `100vw`}, 1440px) - 64px, 1440px) - 24px) / 2, 1px), 630px)`,
                                    y: (f?.y || 0) + 0 + 5854.2 + 0 + 0 + 0 + 153.6 + 112 + 0 + 0,
                                    children: u(at, {
                                      animate: kt,
                                      className: `framer-z7yt3l-container`,
                                      "data-framer-appear-id": `z7yt3l`,
                                      initial: At,
                                      nodeId: `GyoNbsQOn`,
                                      optimized: !0,
                                      rendersWithMotion: !0,
                                      scopeId: `augiA20Il`,
                                      children: u(R, {
                                        f6MCfUa9_: `Yes! Bubbli offers a subscription option so you can have your favorite sparkling water delivered regularly. You can choose your delivery frequency and easily modify or cancel your subscription anytime.`,
                                        height: `100%`,
                                        HfER0Vust: `Can I subscribe for regular deliveries?`,
                                        hx0b_8Yll: `How long does delivery take?`,
                                        id: `GyoNbsQOn`,
                                        kr50LjJ8n: {
                                          bounce: 0.2,
                                          delay: 0,
                                          duration: 0.4,
                                          type: `spring`,
                                        },
                                        layoutId: `GyoNbsQOn`,
                                        lvMeUTpra: `Bubbli offers refreshing sparkling water made with high-quality ingredients and natural flavors. It’s free from added sugars and artificial sweeteners, making it a healthier alternative to sugary drinks.`,
                                        N1DFKMWNl: `What makes Bubbli sparkling water different?`,
                                        nNR17NJf8: `Orders are typically processed within 1–2 business days and delivered within 3–5 business days, depending on your location. You’ll receive a tracking link once your order has been shipped.`,
                                        style: { width: `100%` },
                                        variant: Z(`qUmuv1rgg`),
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
                    u(g.section, {
                      className: `framer-1dgrrvn`,
                      "data-framer-name": `CTA`,
                      layout: P,
                      children: u(E, {
                        breakpoint: C,
                        overrides: {
                          M9w91sPhV: {
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 1848,
                              intrinsicWidth: 2366,
                              loading: k((f?.y || 0) + 0 + 7173.8 + 64 + 0),
                              pixelHeight: 1848,
                              pixelWidth: 2366,
                              positionX: `center`,
                              positionY: `top`,
                              sizes: f?.width || `100vw`,
                              src: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png`,
                              srcSet: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-6df931.png 512w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-c2c62b.png 1024w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI.png 2048w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png 2366w`,
                            },
                          },
                        },
                        children: d(N, {
                          background: {
                            alt: ``,
                            fit: `fill`,
                            intrinsicHeight: 1848,
                            intrinsicWidth: 2366,
                            loading: k((f?.y || 0) + 0 + 6286.8 + 64 + 0),
                            pixelHeight: 1848,
                            pixelWidth: 2366,
                            positionX: `center`,
                            positionY: `top`,
                            sizes: f?.width || `100vw`,
                            src: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png`,
                            srcSet: `../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-6df931.png 512w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-c2c62b.png 1024w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI.png 2048w,../../assets/images/XLJHNwjH6a9Lwi0GbezfZP1f7wI-085be0.png 2366w`,
                          },
                          className: `framer-19f6fc4`,
                          "data-framer-name": `Container`,
                          children: [
                            d(`div`, {
                              className: `framer-1qqgl0h`,
                              "data-framer-name": `Header+ Form`,
                              children: [
                                u(b, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(`p`, {
                                      dir: `auto`,
                                      style: {
                                        "--framer-font-size": `20px`,
                                        "--framer-letter-spacing": `-0.05em`,
                                        "--framer-line-height": `1em`,
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                      },
                                      children: `Subscribe to our newsletter for 10% off.`,
                                    }),
                                  }),
                                  className: `framer-ocyzi7`,
                                  effect: Y,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                                u(ge, {
                                  action: `https://api.framer.com/forms/v1/forms/30ff3130-4510-4d17-94f9-d5b14171d76f/submit`,
                                  className: `framer-teh23p`,
                                  nodeId: `Z2ZMPjaQj`,
                                  children: (e) =>
                                    d(p, {
                                      children: [
                                        u(`label`, {
                                          className: `framer-1o83cxl`,
                                          "data-framer-name": `Email`,
                                          children: u(be, {
                                            className: `framer-206qrx`,
                                            inputName: `Email`,
                                            placeholder: `YOUR EMAIL ADDRESS`,
                                            required: !0,
                                            type: `email`,
                                          }),
                                        }),
                                        u(E, {
                                          breakpoint: C,
                                          overrides: {
                                            M9w91sPhV: {
                                              y:
                                                (f?.y || 0) +
                                                0 +
                                                7173.8 +
                                                64 +
                                                0 +
                                                0 +
                                                145.5 +
                                                0 +
                                                112 +
                                                0,
                                            },
                                          },
                                          children: u(j, {
                                            height: 25,
                                            y:
                                              (f?.y || 0) +
                                              0 +
                                              6286.8 +
                                              64 +
                                              0 +
                                              0 +
                                              145.5 +
                                              0 +
                                              112 +
                                              0,
                                            children: u(A, {
                                              className: `framer-1o6tdj6-container`,
                                              nodeId: `eJd3DAnOk`,
                                              scopeId: `augiA20Il`,
                                              children: u(L, {
                                                height: `100%`,
                                                id: `eJd3DAnOk`,
                                                layoutId: `eJd3DAnOk`,
                                                style: { height: `100%` },
                                                type: `submit`,
                                                variant: jt(
                                                  e,
                                                  {
                                                    error: `FR5D4yuMj`,
                                                    incomplete: `c7sqOOdhc`,
                                                    pending: `RflMXf_z4`,
                                                    success: `iHv2yqCIN`,
                                                  },
                                                  Z(`c7sqOOdhc`)
                                                ),
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                }),
                              ],
                            }),
                            u(b, {
                              __fromCanvasComponent: !0,
                              children: u(a, {
                                children: u(`p`, {
                                  dir: `auto`,
                                  style: {
                                    "--framer-font-size": `12px`,
                                    "--framer-letter-spacing": `-0.05em`,
                                    "--framer-line-height": `1em`,
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                  },
                                  children: `We never send spam.`,
                                }),
                              }),
                              className: `framer-11dk6yr`,
                              effect: Y,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                      }),
                    }),
                    u(j, {
                      children: u(A, {
                        className: `framer-6cntyf-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: P,
                        nodeId: `isbihlO72`,
                        scopeId: `augiA20Il`,
                        children: u(Pe, {
                          height: `100%`,
                          id: `isbihlO72`,
                          intensity: 10,
                          layoutId: `isbihlO72`,
                          width: `100%`,
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
        `.framer-X9KIS.framer-lux5qc, .framer-X9KIS .framer-lux5qc { display: block; }`,
        `.framer-X9KIS.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-X9KIS .framer-1p2nftw, .framer-X9KIS .framer-gkg8bn, .framer-X9KIS .framer-64m6ca { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1fac5yo { background: linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(255, 255, 255, 0) 100%); flex: none; height: 190px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; z-index: 5; }`,
        `.framer-X9KIS .framer-c4fjdb-container { flex: none; height: 100vh; position: relative; width: 100%; z-index: 4; }`,
        `.framer-X9KIS .framer-1rslm1u, .framer-X9KIS .framer-10smxe9, .framer-X9KIS .framer-1jm69u3 { height: 175px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 287px; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-X9KIS .framer-78cfpr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 32px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 32px; top: 51%; transform: translateY(-50%); will-change: var(--framer-will-change-effect-override, transform); z-index: 4; }`,
        `.framer-X9KIS .framer-1mcs431, .framer-X9KIS .framer-cbwatt, .framer-X9KIS .framer-1hmnf2g, .framer-X9KIS .framer-hw5s24 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-e6i2qm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 82px 32px 82px 32px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1mivc4q, .framer-X9KIS .framer-1vfcjv8, .framer-X9KIS .framer-hhbyh9, .framer-X9KIS .framer-mqnm23, .framer-X9KIS .framer-ocyzi7 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-ixryy5 { display: grid; flex: none; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; max-width: 1200px; padding: 32px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1ywcsms { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-X9KIS .framer-8iqbbh-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-X9KIS.framer-fkrxcr { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-X9KIS.framer-18tglxm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 20px; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-X9KIS .framer-xhqrod-container { flex: none; height: auto; max-width: 400px; min-width: 200px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-X9KIS .framer-taquhu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px 32px 82px 32px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-X9KIS .framer-1mlfdt4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px; height: 100vh; justify-content: center; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
        `.framer-X9KIS .framer-21ntu6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1440px; min-height: 50vh; overflow: visible; padding: 0px; position: sticky; top: 0px; width: 1px; }`,
        `.framer-X9KIS .framer-18y3018 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-hm1r1o-container { flex: none; height: auto; max-width: 575px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1r97ruo { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-bf0kbn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 4; }`,
        `.framer-X9KIS .framer-1dclhkk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 200px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-X9KIS .framer-1b5uiw8, .framer-X9KIS .framer-xiyz31 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; z-index: 0; }`,
        `.framer-X9KIS .framer-1lzzzf3 { align-content: center; align-items: center; aspect-ratio: 0.8073394495412844 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 264px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-X9KIS .framer-jy8m5g, .framer-X9KIS .framer-1c5rp05, .framer-X9KIS .framer-16z1rdy, .framer-X9KIS .framer-1hbay7j, .framer-X9KIS .framer-5xklaf { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: 1 0 0px; height: 100%; overflow: visible; position: relative; width: 1px; }`,
        `.framer-X9KIS .framer-14bxutd { align-content: center; align-items: center; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 533px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 403px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-X9KIS .framer-185uzea { align-content: center; align-items: center; aspect-ratio: 1.3401015228426396 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 536px; will-change: var(--framer-will-change-override, transform); z-index: 3; }`,
        `.framer-X9KIS .framer-7kk0f4 { align-content: center; align-items: center; aspect-ratio: 1.3401015228426396 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 442px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-X9KIS .framer-1p109z6 { align-content: center; align-items: center; aspect-ratio: 1.3401015228426396 / 1; border-bottom-left-radius: 1px; border-bottom-right-radius: 1px; border-top-left-radius: 1px; border-top-right-radius: 1px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 295px; will-change: var(--framer-will-change-override, transform); }`,
        `.framer-X9KIS .framer-1q37w2a { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 82px 32px 0px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-X9KIS .framer-1to0qwz { display: grid; flex: none; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(260px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1tmtb2e { align-self: start; display: grid; flex: none; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-X9KIS .framer-ucsubu-container { align-self: start; flex: none; grid-column: span 1; height: auto; justify-self: start; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-396s1n { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1440px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 32px 32px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1dy0l2g { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; max-width: 1440px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-1pp18kn { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 132px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-43kgx2, .framer-X9KIS .framer-1wf3hn8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-13gvoer { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-4khxf6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 112px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-osit8x { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-X9KIS .framer-1c94isr { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-1lu2ggv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 36px; height: min-content; justify-content: center; max-width: 630px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-X9KIS .framer-z7yt3l-container { flex: none; height: auto; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-X9KIS .framer-1dgrrvn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 64px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-19f6fc4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: 50vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-X9KIS .framer-1qqgl0h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-X9KIS .framer-teh23p { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 400px; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        `.framer-X9KIS .framer-1o83cxl { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: min-content; }`,
        `.framer-X9KIS .framer-206qrx { --framer-input-border-bottom-width: 1px; --framer-input-border-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); --framer-input-border-left-width: 0px; --framer-input-border-right-width: 0px; --framer-input-border-style: solid; --framer-input-border-top-width: 0px; --framer-input-focused-border-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-focused-transition: all 0.1s cubic-bezier(0,0,1,1) 0s; --framer-input-font-color: var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, #ffffff); --framer-input-font-family: "Fragment Mono"; --framer-input-font-letter-spacing: -0.01em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 12px; --framer-input-font-weight: 400; --framer-input-icon-mask-image: none; --framer-input-padding: 0px; --framer-input-placeholder-color: rgba(255, 255, 255, 0.64); flex: none; height: 25px; position: relative; width: 296px; }`,
        `.framer-X9KIS .framer-1o6tdj6-container { align-self: stretch; flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-X9KIS .framer-11dk6yr { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; opacity: 0.54; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-X9KIS .framer-6cntyf-container { flex: none; height: auto; position: relative; width: auto; }`,
        ...je,
        ...He,
        ...Re,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-X9KIS.framer-72rtr7 { width: 810px; } .framer-X9KIS .framer-78cfpr { flex-direction: column; top: 51%; } .framer-X9KIS .framer-1mcs431, .framer-X9KIS .framer-cbwatt, .framer-X9KIS .framer-1hmnf2g, .framer-X9KIS .framer-hw5s24 { flex: none; width: 100%; } .framer-X9KIS .framer-ixryy5 { grid-template-columns: repeat(2, minmax(50px, 1fr)); } .framer-X9KIS .framer-21ntu6 { min-height: 100vh; } .framer-X9KIS .framer-1to0qwz { grid-template-columns: repeat(2, minmax(260px, 1fr)); } .framer-X9KIS .framer-1lu2ggv { max-width: 840px; }}`,
        `@media (max-width: 809.98px) { .framer-X9KIS.framer-72rtr7 { width: 390px; } .framer-X9KIS .framer-78cfpr { flex-direction: column; left: 24px; right: 24px; top: 50%; } .framer-X9KIS .framer-1mcs431, .framer-X9KIS .framer-cbwatt, .framer-X9KIS .framer-1hmnf2g, .framer-X9KIS .framer-hw5s24, .framer-X9KIS .framer-osit8x { flex: none; width: 100%; } .framer-X9KIS .framer-e6i2qm { padding: 82px 24px 82px 24px; } .framer-X9KIS .framer-ixryy5 { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-X9KIS .framer-taquhu { padding: 0px 24px 82px 24px; } .framer-X9KIS .framer-21ntu6 { min-height: 100vh; } .framer-X9KIS .framer-1b5uiw8, .framer-X9KIS .framer-xiyz31 { gap: 24px; justify-content: center; } .framer-X9KIS .framer-1lzzzf3, .framer-X9KIS .framer-14bxutd, .framer-X9KIS .framer-1p109z6 { flex: 1 0 0px; width: 1px; } .framer-X9KIS .framer-185uzea { width: 100%; } .framer-X9KIS .framer-7kk0f4 { flex: 1 0 0px; gap: 24px; width: 1px; } .framer-X9KIS .framer-1q37w2a { padding: 82px 24px 0px 24px; } .framer-X9KIS .framer-1to0qwz { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; width: 326px; } .framer-X9KIS .framer-1tmtb2e { align-self: unset; } .framer-X9KIS .framer-396s1n { padding: 0px 24px 24px 24px; } .framer-X9KIS .framer-4khxf6 { flex-direction: column; } .framer-X9KIS .framer-1lu2ggv { flex: none; max-width: unset; width: 100%; }}`,
      ],
      `framer-X9KIS`
    )),
    ($.displayName = `Home`),
    ($.defaultProps = { height: 6301, width: 1200 }),
    re(
      $,
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
        ...$e,
        ...et,
        ...tt,
        ...nt,
        ...rt,
        ...it,
        ...ot,
        ...st,
        ...O(ke),
        ...O(Ue),
        ...O(ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = P.get(St(), n),
          i = P.get(Ct(), n),
          a = P.get(Q(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          a.preload(),
          C(R, {}, t),
          C(L, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [C(z, {}, t), C(V, {}, t)]));
          })(),
          (async () => {
            let e = (await a.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => C(B, {}, t)));
          })(),
        ]);
      },
    }),
    (Ft = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FrameraugiA20Il`,
          slots: [],
          annotations: {
            framerDisplayContentsDiv: `false`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"UyjEs4qrE":{"layout":["fixed","auto"]},"M9w91sPhV":{"layout":["fixed","auto"]}}}`,
            framerAcceptsLayoutTemplate: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `6301`,
            framerScrollSections: `{"gRNwPk5S2":{"pattern":":gRNwPk5S2","name":"faq"}}`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerComponentViewportWidth: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Ft as __FramerMetadata__, $ as default, lt as queryParamNames };
//# sourceMappingURL=3WCXBeAPoXoV3n5PIxEu3EtR_u23ZB-7AEW2Pp4Ubqc.CQlftkBp.mjs.map
