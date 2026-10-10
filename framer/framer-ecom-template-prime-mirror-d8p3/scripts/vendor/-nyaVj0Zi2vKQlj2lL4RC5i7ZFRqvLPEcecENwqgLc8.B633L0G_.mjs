import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  a as s,
  c,
  l,
  m as u,
  o as d,
  s as f,
  u as p,
} from "./react.BtSUcPAM.mjs";
import { P as m, i as h, n as g, o as _, t as v } from "./motion.B_UOAosx.mjs";
import {
  At as ee,
  C as y,
  D as te,
  E as b,
  Et as ne,
  Ft as re,
  G as x,
  I as S,
  K as ie,
  Lt as C,
  M as ae,
  O as oe,
  Ot as se,
  Q as ce,
  R as w,
  S as le,
  Tt as ue,
  W as T,
  a as E,
  at as de,
  f as fe,
  h as D,
  ht as pe,
  i as O,
  jt as me,
  k as he,
  kt as k,
  m as ge,
  n as _e,
  pt as ve,
  vt as ye,
  xt as be,
  yt as xe,
} from "./framer.DuFjdl15.mjs";
import { n as Se, t as Ce } from "./nijsUfsP7.ClHFTjWA.mjs";
import { i as A, r as we } from "./uXshcXf0K.STxmH728.mjs";
import { n as j, t as Te } from "./FC_CatalogSearch.CwBn-Ave.mjs";
import { i as M, r as Ee } from "./T6200DqYJ.DDATVUMg.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./jqlnmWM57.B2NfWqcv.mjs";
import { n as je, t as Me } from "./FC_CatalogResultCounter.B0lgMo4v.mjs";
import { n as N, t as P } from "./S3WzxrIrx.C6dgk-ax.mjs";
import { n as Ne, t as F } from "./hGHQ5rEun.Dh_Aq6Qp.mjs";
import { i as Pe, n as Fe, r as I, t as L } from "./h9MxdvA8e.1EV1m79h.mjs";
import { a as R, i as Ie, n as Le, o as Re, r as ze, t as Be } from "./nroXb4hnj.DtuyY2pj.mjs";
import Ve, { t as He } from "./0Voko4Jr8wt57BK9UFMF4GSwdnSwtcCWpL227mBWONM.B5PB5jQG.mjs";
var Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  z,
  nt,
  rt,
  it,
  at,
  B,
  V,
  H,
  U,
  ot,
  st,
  ct,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  Q,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  $,
  ht;
e(() => {
  (c(),
    ce(),
    v(),
    t(),
    d(),
    A(),
    j(),
    je(),
    Pe(),
    Fe(),
    Ne(),
    Re(),
    N(),
    Ee(),
    De(),
    Ie(),
    Se(),
    He(),
    (Ue = T(Me)),
    (We = C(E)),
    (Ge = C(ge)),
    (Ke = T(R)),
    (qe = T(Ce)),
    (Je = T(L)),
    (Ye = T(Te)),
    (Xe = T(P)),
    (Ze = T(F)),
    (Qe = T(I)),
    ($e = T(we)),
    (et = C(m.div)),
    (tt = {
      CqfSaEtU_: `(max-width: 809.98px)`,
      L9mcYdQeY: `(min-width: 1200px)`,
      un6zUY1XS: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (z = () => typeof document < `u`),
    (nt = []),
    (rt = `framer-B7owE`),
    (it = {
      CqfSaEtU_: `framer-v-cde24t`,
      L9mcYdQeY: `framer-v-16kg1nk`,
      un6zUY1XS: `framer-v-3ixxme`,
    }),
    (at = (e, t, n) => (e && t ? `position` : n)),
    (B = {
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
    (V = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (H = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.4, ease: [0.44, 0, 0.34, 0.98], type: `tween` },
      x: 0,
      y: 0,
    }),
    (U = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
    (ot = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: U,
      x: 40,
      y: 0,
    }),
    (st = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: U,
      x: 0,
      y: 0,
    }),
    (ct = {
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
    (W = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (G = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = se({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (K = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (q = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase().includes(t.toLowerCase())
        : Array.isArray(e) && typeof t == `string`
          ? e.includes(t)
          : !1),
    (J = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Y = { delay: 0, duration: 0.35, ease: [0.45, 0, 0.55, 1], type: `tween` }),
    (X = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Y,
      x: 0,
      y: 30,
    }),
    (Z = {
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
    (Q = {
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
    (lt = () => ({
      from: { alias: `u5xCLERml`, data: M, type: `Collection` },
      select: [
        { collection: `u5xCLERml`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `sb5C2g1qc`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `u5xCLERml`, name: `id`, type: `Identifier` },
      ],
    })),
    (ut = ({ query: e, pageSize: t, children: n }) => n(k(e))),
    (dt = () => ({
      from: { alias: `jHSCjQVy6`, data: M, type: `Collection` },
      select: [
        { collection: `jHSCjQVy6`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `sb5C2g1qc`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `jHSCjQVy6`, name: `id`, type: `Identifier` },
      ],
    })),
    (ft = { Desktop: `L9mcYdQeY`, Phone: `CqfSaEtU_`, Tablet: `un6zUY1XS` }),
    (pt = ({ value: e }) =>
      be()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (mt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: ft[r.variant] ?? r.variant ?? `L9mcYdQeY`,
    })),
    ($ = re(
      u(function (e, t) {
        let c = o(null),
          u = t ?? c,
          d = n(),
          { activeLocale: v, setLocale: re } = ue(),
          x = pe(),
          { style: C, className: ae, layoutId: se, variant: ce, ...w } = mt(e);
        ne(a(() => Ve({}, v), [v]));
        let [T, de] = xe(ce, tt, !1),
          { activeVariantCallback: k, delay: ge } = ve(void 0),
          be = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          Se = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          A = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          j = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          M = S(rt, Ae, Be),
          Ee = i(fe)?.isLayoutTemplate,
          De = !!i(_)?.transition?.layout,
          Oe = at(Ee, De),
          ke = ee(`enRJsoY4o`),
          je = o(null),
          N = () => !z() || ![`un6zUY1XS`, `CqfSaEtU_`].includes(T),
          Ne = () => !!(!z() || [`un6zUY1XS`, `CqfSaEtU_`].includes(T));
        return (
          me(),
          ye({}),
          f(fe.Provider, {
            value: {
              activeVariantId: T,
              humanReadableVariantMap: ft,
              primaryVariantId: `L9mcYdQeY`,
              variantClassNames: it,
            },
            children: p(h, {
              id: se ?? d,
              children: [
                f(pt, { value: `html body { background: rgb(0, 0, 0); }` }),
                f(m.div, {
                  ...w,
                  className: S(M, `framer-16kg1nk`, ae),
                  ref: u,
                  style: { ...C },
                  children: p(m.main, {
                    className: `framer-1v0cmf`,
                    "data-framer-name": `Main`,
                    layout: Oe,
                    children: [
                      p(`section`, {
                        className: `framer-iy0o2h`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          f(`div`, {
                            className: `framer-ize7lr`,
                            "data-framer-name": `Content`,
                            children: f(O, {
                              children: f(We, {
                                __framer__animate: { transition: V },
                                __framer__animateOnce: !0,
                                __framer__enter: B,
                                __framer__exit: H,
                                __framer__styleAppearEffectEnabled: !0,
                                __framer__threshold: 0,
                                __perspectiveFX: !1,
                                __targetOpacity: 1,
                                className: `framer-rhvcx4-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                nodeId: `qXRribThz`,
                                rendersWithMotion: !0,
                                scopeId: `AhZGQnQh_`,
                                children: f(y, {
                                  breakpoint: T,
                                  overrides: {
                                    CqfSaEtU_: {
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `24px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `-0.03em`,
                                        lineHeight: `1em`,
                                      },
                                    },
                                    un6zUY1XS: {
                                      font: {
                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                        fontSize: `32px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `-0.03em`,
                                        lineHeight: `1em`,
                                      },
                                    },
                                  },
                                  children: f(Me, {
                                    color: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    content: `{{#}} results for "{{term}}"`,
                                    defaultText: `No results found...`,
                                    favoritesText: `No favorites yet...`,
                                    font: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `80px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `-0.03em`,
                                      lineHeight: `1em`,
                                      textAlign: `center`,
                                    },
                                    height: `100%`,
                                    id: `qXRribThz`,
                                    layoutId: `qXRribThz`,
                                    noFavorites: `Hide`,
                                    noQuery: `Hide`,
                                    noResults: `Show`,
                                    preview: `Results`,
                                    searchText: `Start your search...`,
                                    transform: `None`,
                                    type: `Default`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            }),
                          }),
                          f(Ge, {
                            __framer__adjustPosition: !1,
                            __framer__offset: 0,
                            __framer__parallaxTransformEnabled: !0,
                            __framer__speed: 60,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            background: {
                              alt: ``,
                              fit: `fill`,
                              intrinsicHeight: 698,
                              intrinsicWidth: 1440,
                              loading: ie((x?.y || 0) + 0 + 0 + 0 + 0 + 0),
                              pixelHeight: 698,
                              pixelWidth: 1440,
                              sizes: x?.width || `100vw`,
                              src: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png`,
                              srcSet: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-01c22e.png 512w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-33db11.png 1024w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png 1440w`,
                            },
                            className: `framer-1yuutrr`,
                            "data-framer-name": `BG`,
                          }),
                          f(`div`, {
                            className: `framer-1241l63`,
                            "data-framer-name": `Nav Trigger`,
                            id: ke,
                            ref: je,
                          }),
                        ],
                      }),
                      f(`section`, {
                        className: `framer-g03lkz`,
                        "data-framer-name": `Section - Content`,
                        children: p(et, {
                          __framer__animate: { transition: V },
                          __framer__animateOnce: !0,
                          __framer__enter: B,
                          __framer__exit: H,
                          __framer__styleAppearEffectEnabled: !0,
                          __framer__threshold: 0,
                          __perspectiveFX: !1,
                          __targetOpacity: 1,
                          className: `framer-u5m1yg`,
                          "data-framer-name": `Container`,
                          children: [
                            N() &&
                              f(`div`, {
                                className: `framer-142dxp3 hidden-3ixxme hidden-cde24t`,
                                "data-framer-name": `Left`,
                                children: f(O, {
                                  height: 740,
                                  y: (x?.y || 0) + 0 + 0 + 0 + 800 + 120 + 0 + 0 + 100,
                                  children: f(E, {
                                    className: `framer-6eofbx-container`,
                                    nodeId: `a36Yv6m59`,
                                    scopeId: `AhZGQnQh_`,
                                    children: f(R, {
                                      height: `100%`,
                                      hnBLcCL0d: !0,
                                      id: `a36Yv6m59`,
                                      layoutId: `a36Yv6m59`,
                                      LFkjYMLMC: !0,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            p(`div`, {
                              className: `framer-19duep`,
                              "data-framer-name": `Product`,
                              children: [
                                Ne() &&
                                  p(`div`, {
                                    className: `framer-k74tid hidden-16kg1nk`,
                                    "data-framer-name": `Mobile Filter Bar`,
                                    children: [
                                      f(G, {
                                        blockDocumentScrolling: !0,
                                        dismissWithEsc: !0,
                                        children: (e) =>
                                          f(l, {
                                            children: p(m.button, {
                                              className: `framer-1r75it5`,
                                              "data-border": !0,
                                              "data-framer-name": `Filter Trigger`,
                                              "data-reset": `button`,
                                              id: `1r75it5`,
                                              onTap: be({ overlay: e }),
                                              children: [
                                                f(oe, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(r, {
                                                    children: f(`p`, {
                                                      className: `framer-styles-preset-hhy7lj`,
                                                      "data-styles-preset": `jqlnmWM57`,
                                                      dir: `auto`,
                                                      children: `Filter`,
                                                    }),
                                                  }),
                                                  className: `framer-1xvmqsf`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                f(g, {
                                                  children:
                                                    e.visible &&
                                                    f(l, {
                                                      children: s(
                                                        f(D, {
                                                          triggerId: `1r75it5`,
                                                          children: p(b, {
                                                            children: [
                                                              f(
                                                                m.div,
                                                                {
                                                                  animate: {
                                                                    opacity: 1,
                                                                    transition: {
                                                                      delay: 0,
                                                                      duration: 0,
                                                                      ease: [0.5, 0, 0.88, 0.77],
                                                                      type: `tween`,
                                                                    },
                                                                  },
                                                                  className: S(M, `framer-1ip92fi`),
                                                                  "data-framer-portal-id": `1r75it5`,
                                                                  exit: {
                                                                    opacity: 0,
                                                                    transition: {
                                                                      delay: 0,
                                                                      duration: 0,
                                                                      ease: [0.12, 0.23, 0.5, 1],
                                                                      type: `tween`,
                                                                    },
                                                                  },
                                                                  initial: { opacity: 0 },
                                                                  onTap: () => e.hide(),
                                                                },
                                                                `jKqr5v9RE`
                                                              ),
                                                              p(m.div, {
                                                                animate: st,
                                                                className: S(M, `framer-1cvrj3y`),
                                                                "data-framer-name": `Drawer Panel`,
                                                                "data-framer-portal-id": `1r75it5`,
                                                                exit: ot,
                                                                initial: ct,
                                                                children: [
                                                                  p(`div`, {
                                                                    className: `framer-1g809of`,
                                                                    "data-framer-name": `Header`,
                                                                    children: [
                                                                      f(oe, {
                                                                        __fromCanvasComponent: !0,
                                                                        children: f(r, {
                                                                          children: f(`p`, {
                                                                            className: `framer-styles-preset-1bn2s4y`,
                                                                            "data-styles-preset": `nroXb4hnj`,
                                                                            dir: `auto`,
                                                                            children: `Filters`,
                                                                          }),
                                                                        }),
                                                                        className: `framer-1vronry`,
                                                                        fonts: [`Inter`],
                                                                        verticalAlignment: `top`,
                                                                        withExternalLayout: !0,
                                                                      }),
                                                                      f(m.button, {
                                                                        className: `framer-17be22b`,
                                                                        "data-framer-name": `Close`,
                                                                        "data-reset": `button`,
                                                                        onTap: Se({ overlay: e }),
                                                                        children: f(Ce, {
                                                                          animated: !1,
                                                                          className: `framer-1ed2gur`,
                                                                          layoutId: `XpgSTUuyW`,
                                                                          r2cPmBIrU: !0,
                                                                          R8PWEQPqW: !0,
                                                                        }),
                                                                      }),
                                                                    ],
                                                                  }),
                                                                  f(O, {
                                                                    width: `calc(min(360px, 88vw) - 48px)`,
                                                                    children: f(E, {
                                                                      className: `framer-178oxy4-container`,
                                                                      nodeId: `pU0su0Fcw`,
                                                                      scopeId: `AhZGQnQh_`,
                                                                      children: f(R, {
                                                                        height: `100%`,
                                                                        hnBLcCL0d: !1,
                                                                        id: `pU0su0Fcw`,
                                                                        layoutId: `pU0su0Fcw`,
                                                                        LFkjYMLMC: !0,
                                                                        style: { width: `100%` },
                                                                        width: `100%`,
                                                                      }),
                                                                    }),
                                                                  }),
                                                                ],
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                        W()
                                                      ),
                                                    }),
                                                }),
                                                f(`div`, {
                                                  className: `framer-13dvmcn`,
                                                  "data-framer-name": `Icon`,
                                                  children: f(he, {
                                                    className: `framer-14rm10i`,
                                                    requiresOverflowVisible: !0,
                                                    svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.998 14.167" overflow="visible"><path d="M 6 12.675 C 6 12.958 6.16 13.216 6.414 13.343 L 7.914 14.088 C 8.147 14.204 8.423 14.191 8.644 14.056 C 8.865 13.92 9 13.679 9 13.421 L 9 8.202 C 9 7.832 9.138 7.476 9.387 7.202 L 14.805 1.245 C 15.003 1.027 15.054 0.713 14.934 0.444 C 14.814 0.174 14.546 0.001 14.25 0 L 0.75 0 C 0.453 0 0.185 0.174 0.065 0.443 C -0.056 0.712 -0.005 1.026 0.193 1.245 L 5.612 7.202 C 5.861 7.476 6 7.832 6 8.202 Z" fill="transparent" stroke="var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)) /* {&quot;name&quot;:&quot;Dark&quot;} */" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray=""></path></svg>`,
                                                    withExternalLayout: !0,
                                                  }),
                                                }),
                                              ],
                                            }),
                                          }),
                                      }),
                                      f(y, {
                                        breakpoint: T,
                                        overrides: {
                                          CqfSaEtU_: {
                                            y:
                                              (x?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              550 +
                                              48 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0,
                                          },
                                          un6zUY1XS: {
                                            y:
                                              (x?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              700 +
                                              64 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0.1,
                                          },
                                        },
                                        children: f(O, {
                                          height: 39,
                                          children: f(E, {
                                            className: `framer-f1bb8f-container`,
                                            nodeId: `SxglkFwbm`,
                                            scopeId: `AhZGQnQh_`,
                                            children: f(y, {
                                              breakpoint: T,
                                              overrides: {
                                                CqfSaEtU_: { TsK1ncLbC: `9px 14px 9px 16px` },
                                              },
                                              children: f(L, {
                                                height: `100%`,
                                                id: `SxglkFwbm`,
                                                layoutId: `SxglkFwbm`,
                                                TsK1ncLbC: `10px 14px 10px 16px`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                p(`div`, {
                                  className: `framer-rhn17u`,
                                  "data-framer-name": `Wrap`,
                                  children: [
                                    p(`div`, {
                                      className: `framer-icf9gf`,
                                      "data-framer-name": `Top Bar`,
                                      children: [
                                        f(O, {
                                          children: f(E, {
                                            className: `framer-1jdu019-container`,
                                            isAuthoredByUser: !0,
                                            isModuleExternal: !0,
                                            nodeId: `IXsBD2gYB`,
                                            scopeId: `AhZGQnQh_`,
                                            children: f(y, {
                                              breakpoint: T,
                                              overrides: {
                                                CqfSaEtU_: { style: { width: `100%` } },
                                              },
                                              children: f(Te, {
                                                behavior: {
                                                  debounceDelay: 300,
                                                  page: !1,
                                                  realTime: !0,
                                                  slug: `search`,
                                                },
                                                clear: {
                                                  background: `rgb(247, 247, 247)`,
                                                  border: {
                                                    color: `rgb(0, 0, 0)`,
                                                    style: `solid`,
                                                    width: 0,
                                                  },
                                                  color: `rgb(153, 153, 153)`,
                                                  content: `Clear`,
                                                  font: {},
                                                  iconColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                                  iconIsCustom: !1,
                                                  iconSize: 12,
                                                  iconWeight: 1.5,
                                                  isText: !1,
                                                  padding: 4,
                                                  paddingBottom: 4,
                                                  paddingLeft: 4,
                                                  paddingPerSide: !1,
                                                  paddingRight: 4,
                                                  paddingTop: 4,
                                                  radius: 24,
                                                  radiusBottomLeft: 24,
                                                  radiusBottomRight: 24,
                                                  radiusPerCorner: !1,
                                                  radiusTopLeft: 24,
                                                  radiusTopRight: 24,
                                                  show: !0,
                                                  transform: `None`,
                                                },
                                                height: `100%`,
                                                id: `IXsBD2gYB`,
                                                layoutId: `IXsBD2gYB`,
                                                searchIcon: {
                                                  background: {
                                                    border: {
                                                      bottom: 1,
                                                      color: `rgb(235, 235, 235)`,
                                                      isMixed: !1,
                                                      left: 1,
                                                      right: 1,
                                                      style: `solid`,
                                                      top: 1,
                                                      width: 1,
                                                    },
                                                    color: `rgba(0, 0, 0, 0)`,
                                                    padding: 4,
                                                    paddingBottom: 4,
                                                    paddingLeft: 4,
                                                    paddingPerSide: !1,
                                                    paddingRight: 4,
                                                    paddingTop: 4,
                                                    radius: 4,
                                                    radiusBottomLeft: 4,
                                                    radiusBottomRight: 4,
                                                    radiusPerCorner: !1,
                                                    radiusTopLeft: 4,
                                                    radiusTopRight: 4,
                                                  },
                                                  color: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                                  isCustom: !1,
                                                  show: !0,
                                                  size: 16,
                                                  weight: 1.5,
                                                },
                                                style: { maxWidth: `100%`, width: `100%` },
                                                styles: {
                                                  background: {
                                                    border: {
                                                      bottom: 1,
                                                      color: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                                                      isMixed: !1,
                                                      left: 1,
                                                      right: 1,
                                                      style: `solid`,
                                                      top: 1,
                                                      width: 1,
                                                    },
                                                    color: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                                    focusBackground: `rgb(248, 248, 248)`,
                                                    focusBorder: {
                                                      bottom: 1,
                                                      color: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                                                      isMixed: !1,
                                                      left: 1,
                                                      right: 1,
                                                      style: `solid`,
                                                      top: 1,
                                                      width: 1,
                                                    },
                                                    hoverBackground: `rgb(248, 248, 248)`,
                                                    hoverBorder: {
                                                      bottom: 1,
                                                      color: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                                                      isMixed: !1,
                                                      left: 1,
                                                      right: 1,
                                                      style: `solid`,
                                                      top: 1,
                                                      width: 1,
                                                    },
                                                  },
                                                  borderRadius: 200,
                                                  gap: 12,
                                                  padding: 12,
                                                  paddingBottom: 10,
                                                  paddingLeft: 12,
                                                  paddingPerSide: !0,
                                                  paddingRight: 12,
                                                  paddingTop: 10,
                                                  radiusBottomLeft: 200,
                                                  radiusBottomRight: 200,
                                                  radiusPerCorner: !1,
                                                  radiusTopLeft: 200,
                                                  radiusTopRight: 200,
                                                },
                                                text: {
                                                  color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                                  font: {
                                                    fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                    fontSize: `16px`,
                                                    fontStyle: `normal`,
                                                    fontWeight: 400,
                                                    letterSpacing: `0em`,
                                                    lineHeight: `1em`,
                                                  },
                                                  placeholder: `Search...`,
                                                  placeholderColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                                },
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                        N() &&
                                          f(O, {
                                            height: 39,
                                            y:
                                              (x?.y || 0) +
                                              0 +
                                              0 +
                                              0 +
                                              800 +
                                              120 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              0 +
                                              80.5,
                                            children: f(E, {
                                              className: `framer-fsxuh8-container hidden-3ixxme hidden-cde24t`,
                                              nodeId: `iDpG6nI35`,
                                              scopeId: `AhZGQnQh_`,
                                              children: f(L, {
                                                height: `100%`,
                                                id: `iDpG6nI35`,
                                                layoutId: `iDpG6nI35`,
                                                TsK1ncLbC: `10px 14px 10px 16px`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                      ],
                                    }),
                                    f(O, {
                                      children: f(E, {
                                        className: `framer-16ckm3n-container`,
                                        isAuthoredByUser: !0,
                                        isModuleExternal: !0,
                                        nodeId: `xT9RSDm0t`,
                                        scopeId: `AhZGQnQh_`,
                                        children: f(y, {
                                          breakpoint: T,
                                          overrides: {
                                            CqfSaEtU_: {
                                              displayMode: `Phone`,
                                              layout: {
                                                align: `start`,
                                                alignH: `start`,
                                                background: `rgba(255, 255, 255, 0)`,
                                                columnCount: 2,
                                                columns: `fixed`,
                                                direction: `vertical`,
                                                distribute: `start`,
                                                gap: 20,
                                                gapY: 24,
                                                gridAlign: `center`,
                                                gridWidth: 300,
                                                maxColumns: 4,
                                                padding: 0,
                                                paddingBottom: 0,
                                                paddingLeft: 0,
                                                paddingPerSide: !1,
                                                paddingRight: 0,
                                                paddingTop: 0,
                                                radius: 0,
                                                radiusBottomLeft: 0,
                                                radiusBottomRight: 0,
                                                radiusPerSide: !1,
                                                radiusTopLeft: 0,
                                                radiusTopRight: 0,
                                                stackMinWidth: 200,
                                                type: `stack`,
                                                wrap: !1,
                                              },
                                            },
                                            un6zUY1XS: {
                                              layout: {
                                                align: `start`,
                                                alignH: `start`,
                                                background: `rgba(255, 255, 255, 0)`,
                                                columnCount: 2,
                                                columns: `fixed`,
                                                direction: `vertical`,
                                                distribute: `start`,
                                                gap: 20,
                                                gapY: 20,
                                                gridAlign: `center`,
                                                gridWidth: 300,
                                                maxColumns: 4,
                                                padding: 0,
                                                paddingBottom: 0,
                                                paddingLeft: 0,
                                                paddingPerSide: !1,
                                                paddingRight: 0,
                                                paddingTop: 0,
                                                radius: 0,
                                                radiusBottomLeft: 0,
                                                radiusBottomRight: 0,
                                                radiusPerSide: !1,
                                                radiusTopLeft: 0,
                                                radiusTopRight: 0,
                                                stackMinWidth: 200,
                                                type: `grid`,
                                                wrap: !1,
                                              },
                                            },
                                          },
                                          children: f(we, {
                                            Collection: [
                                              f(m.div, {
                                                className: `framer-jn6etk`,
                                                children: f(_e, {
                                                  children: f(ut, {
                                                    query: lt(),
                                                    children: (e, t, n) =>
                                                      f(l, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              EdlK9s4od: e,
                                                              eVfKYnlqn: t,
                                                              id: n,
                                                              Jry1OPs1q: r,
                                                              JZfMFKc2o: i,
                                                              k8owwKEx3: a,
                                                              l2PesJvCE: o,
                                                              sb5C2g1qc: c,
                                                              Sn3Ji2zLH: u,
                                                              UxQ8VtfSI: d,
                                                              vJoj3qvid: _,
                                                            },
                                                            v
                                                          ) => (
                                                            (_ ??= ``),
                                                            (u ??= ``),
                                                            (d ??= ``),
                                                            (o ??= ``),
                                                            (e ??= ``),
                                                            (a ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            f(
                                                              h,
                                                              {
                                                                id: `u5xCLERml-${n}`,
                                                                children: f(le.Provider, {
                                                                  value: { JZfMFKc2o: i },
                                                                  children: f(G, {
                                                                    blockDocumentScrolling: !1,
                                                                    dismissWithEsc: !0,
                                                                    children: (n) =>
                                                                      f(l, {
                                                                        children: f(te, {
                                                                          links: [
                                                                            {
                                                                              href: {
                                                                                pathVariables: {
                                                                                  JZfMFKc2o: i,
                                                                                },
                                                                                webPageId: `vmJrVFRkR`,
                                                                              },
                                                                              implicitPathVariables:
                                                                                void 0,
                                                                            },
                                                                          ],
                                                                          children: (h) =>
                                                                            f(O, {
                                                                              height: 390,
                                                                              width: `337.5px`,
                                                                              children: p(E, {
                                                                                className: `framer-1kfxw1f-container`,
                                                                                id: `${i}-1kfxw1f`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `Dkn1QpoqD`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `AhZGQnQh_`,
                                                                                children: [
                                                                                  f(P, {
                                                                                    CtxCtZRbF: A({
                                                                                      overlay: n,
                                                                                    }),
                                                                                    FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                                                    height: `100%`,
                                                                                    hFy2PLFBG: u,
                                                                                    HwypVSMEi: !1,
                                                                                    id: `Dkn1QpoqD`,
                                                                                    II0fWsmjM: `12px`,
                                                                                    layoutId: `Dkn1QpoqD`,
                                                                                    MGgAvDoA0: h[0],
                                                                                    O9ZyioqcS: K(t),
                                                                                    OKvEEQQFQ: q(
                                                                                      c,
                                                                                      `New Arrivals`
                                                                                    ),
                                                                                    Qb7mSHgLh: a,
                                                                                    QjM5BTCWQ: !1,
                                                                                    SKBNP2vvn: !1,
                                                                                    style: {
                                                                                      height: `100%`,
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TCGQti0b7: d,
                                                                                    tJ0RQfmJy: e,
                                                                                    ub4buTzaB: K(r),
                                                                                    variant:
                                                                                      J(
                                                                                        `anAebR9ik`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    wsSEriDkC: o,
                                                                                    xYhX6dOGf: {
                                                                                      borderColor: `rgb(206, 206, 206)`,
                                                                                      borderStyle: `solid`,
                                                                                      borderWidth: 0,
                                                                                    },
                                                                                    Zg3vnZECo: _,
                                                                                  }),
                                                                                  f(g, {
                                                                                    children:
                                                                                      n.visible &&
                                                                                      f(l, {
                                                                                        children: s(
                                                                                          f(D, {
                                                                                            triggerId: `${i}-1kfxw1f`,
                                                                                            children:
                                                                                              p(b, {
                                                                                                children:
                                                                                                  [
                                                                                                    f(
                                                                                                      m.div,
                                                                                                      {
                                                                                                        animate:
                                                                                                          {
                                                                                                            opacity: 1,
                                                                                                            transition:
                                                                                                              {
                                                                                                                delay: 0,
                                                                                                                duration: 0.34,
                                                                                                                ease: [
                                                                                                                  0.45,
                                                                                                                  0,
                                                                                                                  0.55,
                                                                                                                  1,
                                                                                                                ],
                                                                                                                type: `tween`,
                                                                                                              },
                                                                                                          },
                                                                                                        className:
                                                                                                          S(
                                                                                                            M,
                                                                                                            `framer-1c9fjfw`
                                                                                                          ),
                                                                                                        "data-framer-portal-id": `${i}-1kfxw1f`,
                                                                                                        exit: {
                                                                                                          opacity: 0,
                                                                                                          transition:
                                                                                                            {
                                                                                                              delay: 0,
                                                                                                              duration: 0.34,
                                                                                                              ease: [
                                                                                                                0.45,
                                                                                                                0,
                                                                                                                0.55,
                                                                                                                1,
                                                                                                              ],
                                                                                                              type: `tween`,
                                                                                                            },
                                                                                                        },
                                                                                                        initial:
                                                                                                          {
                                                                                                            opacity: 0,
                                                                                                          },
                                                                                                        onTap:
                                                                                                          () =>
                                                                                                            n.hide(),
                                                                                                      },
                                                                                                      `K6omNUcYU`
                                                                                                    ),
                                                                                                    f(
                                                                                                      m.div,
                                                                                                      {
                                                                                                        className:
                                                                                                          S(
                                                                                                            M,
                                                                                                            `framer-1dz6nvn`
                                                                                                          ),
                                                                                                        "data-framer-name": `Wrap`,
                                                                                                        "data-framer-portal-id": `${i}-1kfxw1f`,
                                                                                                        children:
                                                                                                          f(
                                                                                                            O,
                                                                                                            {
                                                                                                              width: `400px`,
                                                                                                              children:
                                                                                                                f(
                                                                                                                  E,
                                                                                                                  {
                                                                                                                    animate:
                                                                                                                      Z,
                                                                                                                    className: `framer-dq6tb9-container`,
                                                                                                                    exit: X,
                                                                                                                    inComponentSlot:
                                                                                                                      !0,
                                                                                                                    initial:
                                                                                                                      Q,
                                                                                                                    nodeId: `BoKquA1AJ`,
                                                                                                                    rendersWithMotion:
                                                                                                                      !0,
                                                                                                                    scopeId: `AhZGQnQh_`,
                                                                                                                    children:
                                                                                                                      f(
                                                                                                                        F,
                                                                                                                        {
                                                                                                                          HblJYYmXZ:
                                                                                                                            j(
                                                                                                                              {
                                                                                                                                overlay:
                                                                                                                                  n,
                                                                                                                              }
                                                                                                                            ),
                                                                                                                          height: `100%`,
                                                                                                                          id: `BoKquA1AJ`,
                                                                                                                          layoutId: `BoKquA1AJ`,
                                                                                                                          style:
                                                                                                                            {
                                                                                                                              width: `100%`,
                                                                                                                            },
                                                                                                                          width: `100%`,
                                                                                                                        }
                                                                                                                      ),
                                                                                                                  }
                                                                                                                ),
                                                                                                            }
                                                                                                          ),
                                                                                                      }
                                                                                                    ),
                                                                                                  ],
                                                                                              }),
                                                                                          }),
                                                                                          W()
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
                                            CustomInitialState: [],
                                            defaultSort: `relevance`,
                                            display: `All`,
                                            displayMode: `Desktop`,
                                            EmptyState: [],
                                            EmptyStatePhone: [
                                              f(O, {
                                                height: 373,
                                                width: `781px`,
                                                children: f(E, {
                                                  className: `framer-oypmvt-container`,
                                                  inComponentSlot: !0,
                                                  nodeId: `qNb4vgDi9`,
                                                  rendersWithMotion: !0,
                                                  scopeId: `AhZGQnQh_`,
                                                  children: f(I, {
                                                    height: `100%`,
                                                    id: `qNb4vgDi9`,
                                                    layoutId: `qNb4vgDi9`,
                                                    style: { width: `100%` },
                                                    variant: J(`LEK2sdhNy`),
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                            height: `100%`,
                                            id: `xT9RSDm0t`,
                                            layout: {
                                              align: `start`,
                                              alignH: `start`,
                                              background: `rgba(255, 255, 255, 0)`,
                                              columnCount: 3,
                                              columns: `fixed`,
                                              direction: `vertical`,
                                              distribute: `start`,
                                              gap: 16,
                                              gapY: 24,
                                              gridAlign: `center`,
                                              gridWidth: 300,
                                              maxColumns: 4,
                                              padding: 0,
                                              paddingBottom: 0,
                                              paddingLeft: 0,
                                              paddingPerSide: !1,
                                              paddingRight: 0,
                                              paddingTop: 0,
                                              radius: 0,
                                              radiusBottomLeft: 0,
                                              radiusBottomRight: 0,
                                              radiusPerSide: !1,
                                              radiusTopLeft: 0,
                                              radiusTopRight: 0,
                                              stackMinWidth: 200,
                                              type: `grid`,
                                              wrap: !1,
                                            },
                                            layoutId: `xT9RSDm0t`,
                                            Metafields: { include: !0 },
                                            pageType: `default`,
                                            Pagination: {
                                              enable: !1,
                                              items: 12,
                                              type: `load_more`,
                                            },
                                            phoneInstance: [
                                              f(m.div, {
                                                className: `framer-iz2rqa`,
                                                "data-framer-name": `Products - Phone`,
                                                children: f(_e, {
                                                  children: f(ut, {
                                                    query: dt(),
                                                    children: (e, t, n) =>
                                                      f(l, {
                                                        children: e?.map(
                                                          (
                                                            {
                                                              EdlK9s4od: e,
                                                              eVfKYnlqn: t,
                                                              id: n,
                                                              Jry1OPs1q: r,
                                                              JZfMFKc2o: i,
                                                              k8owwKEx3: a,
                                                              l2PesJvCE: o,
                                                              sb5C2g1qc: c,
                                                              Sn3Ji2zLH: u,
                                                              UxQ8VtfSI: d,
                                                              vJoj3qvid: _,
                                                            },
                                                            v
                                                          ) => (
                                                            (_ ??= ``),
                                                            (u ??= ``),
                                                            (d ??= ``),
                                                            (o ??= ``),
                                                            (e ??= ``),
                                                            (a ??= ``),
                                                            (c ??= ``),
                                                            (i ??= ``),
                                                            f(
                                                              h,
                                                              {
                                                                id: `jHSCjQVy6-${n}`,
                                                                children: f(le.Provider, {
                                                                  value: { JZfMFKc2o: i },
                                                                  children: f(G, {
                                                                    blockDocumentScrolling: !1,
                                                                    dismissWithEsc: !0,
                                                                    children: (n) =>
                                                                      f(l, {
                                                                        children: f(te, {
                                                                          links: [
                                                                            {
                                                                              href: {
                                                                                pathVariables: {
                                                                                  JZfMFKc2o: i,
                                                                                },
                                                                                webPageId: `vmJrVFRkR`,
                                                                              },
                                                                              implicitPathVariables:
                                                                                void 0,
                                                                            },
                                                                          ],
                                                                          children: (h) =>
                                                                            f(O, {
                                                                              height: 440,
                                                                              width: `361px`,
                                                                              children: p(E, {
                                                                                className: `framer-uoxlsw-container`,
                                                                                id: `${i}-uoxlsw`,
                                                                                inComponentSlot: !0,
                                                                                nodeId: `ClJXrVbH4`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `AhZGQnQh_`,
                                                                                children: [
                                                                                  f(P, {
                                                                                    CtxCtZRbF: A({
                                                                                      overlay: n,
                                                                                    }),
                                                                                    FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                                                    height: `100%`,
                                                                                    hFy2PLFBG: u,
                                                                                    HwypVSMEi: !1,
                                                                                    id: `ClJXrVbH4`,
                                                                                    II0fWsmjM: `12px`,
                                                                                    layoutId: `ClJXrVbH4`,
                                                                                    MGgAvDoA0: h[0],
                                                                                    O9ZyioqcS: K(t),
                                                                                    OKvEEQQFQ: q(
                                                                                      c,
                                                                                      `New Arrivals`
                                                                                    ),
                                                                                    Qb7mSHgLh: a,
                                                                                    QjM5BTCWQ: !1,
                                                                                    SKBNP2vvn: !1,
                                                                                    style: {
                                                                                      height: `100%`,
                                                                                      width: `100%`,
                                                                                    },
                                                                                    TCGQti0b7: d,
                                                                                    tJ0RQfmJy: e,
                                                                                    ub4buTzaB: K(r),
                                                                                    variant:
                                                                                      J(
                                                                                        `anAebR9ik`
                                                                                      ),
                                                                                    width: `100%`,
                                                                                    wsSEriDkC: o,
                                                                                    xYhX6dOGf: {
                                                                                      borderColor: `rgb(206, 206, 206)`,
                                                                                      borderStyle: `solid`,
                                                                                      borderWidth: 0,
                                                                                    },
                                                                                    Zg3vnZECo: _,
                                                                                  }),
                                                                                  f(g, {
                                                                                    children:
                                                                                      n.visible &&
                                                                                      f(l, {
                                                                                        children: s(
                                                                                          f(D, {
                                                                                            triggerId: `${i}-uoxlsw`,
                                                                                            children:
                                                                                              p(b, {
                                                                                                children:
                                                                                                  [
                                                                                                    f(
                                                                                                      m.div,
                                                                                                      {
                                                                                                        animate:
                                                                                                          {
                                                                                                            opacity: 1,
                                                                                                            transition:
                                                                                                              {
                                                                                                                delay: 0,
                                                                                                                duration: 0.34,
                                                                                                                ease: [
                                                                                                                  0.45,
                                                                                                                  0,
                                                                                                                  0.55,
                                                                                                                  1,
                                                                                                                ],
                                                                                                                type: `tween`,
                                                                                                              },
                                                                                                          },
                                                                                                        className:
                                                                                                          S(
                                                                                                            M,
                                                                                                            `framer-mjcloy`
                                                                                                          ),
                                                                                                        "data-framer-portal-id": `${i}-uoxlsw`,
                                                                                                        exit: {
                                                                                                          opacity: 0,
                                                                                                          transition:
                                                                                                            {
                                                                                                              delay: 0,
                                                                                                              duration: 0.34,
                                                                                                              ease: [
                                                                                                                0.45,
                                                                                                                0,
                                                                                                                0.55,
                                                                                                                1,
                                                                                                              ],
                                                                                                              type: `tween`,
                                                                                                            },
                                                                                                        },
                                                                                                        initial:
                                                                                                          {
                                                                                                            opacity: 0,
                                                                                                          },
                                                                                                        onTap:
                                                                                                          () =>
                                                                                                            n.hide(),
                                                                                                      },
                                                                                                      `OQCvb6VSZ`
                                                                                                    ),
                                                                                                    f(
                                                                                                      m.div,
                                                                                                      {
                                                                                                        className:
                                                                                                          S(
                                                                                                            M,
                                                                                                            `framer-hmeir5`
                                                                                                          ),
                                                                                                        "data-framer-name": `Wrap`,
                                                                                                        "data-framer-portal-id": `${i}-uoxlsw`,
                                                                                                        children:
                                                                                                          f(
                                                                                                            O,
                                                                                                            {
                                                                                                              width: `400px`,
                                                                                                              children:
                                                                                                                f(
                                                                                                                  E,
                                                                                                                  {
                                                                                                                    animate:
                                                                                                                      Z,
                                                                                                                    className: `framer-120hcms-container`,
                                                                                                                    exit: X,
                                                                                                                    inComponentSlot:
                                                                                                                      !0,
                                                                                                                    initial:
                                                                                                                      Q,
                                                                                                                    nodeId: `wEGotfZzj`,
                                                                                                                    rendersWithMotion:
                                                                                                                      !0,
                                                                                                                    scopeId: `AhZGQnQh_`,
                                                                                                                    children:
                                                                                                                      f(
                                                                                                                        F,
                                                                                                                        {
                                                                                                                          HblJYYmXZ:
                                                                                                                            j(
                                                                                                                              {
                                                                                                                                overlay:
                                                                                                                                  n,
                                                                                                                              }
                                                                                                                            ),
                                                                                                                          height: `100%`,
                                                                                                                          id: `wEGotfZzj`,
                                                                                                                          layoutId: `wEGotfZzj`,
                                                                                                                          style:
                                                                                                                            {
                                                                                                                              width: `100%`,
                                                                                                                            },
                                                                                                                          width: `100%`,
                                                                                                                        }
                                                                                                                      ),
                                                                                                                  }
                                                                                                                ),
                                                                                                            }
                                                                                                          ),
                                                                                                      }
                                                                                                    ),
                                                                                                  ],
                                                                                              }),
                                                                                          }),
                                                                                          W()
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
                                            Products: { show: `all` },
                                            Search: {
                                              enableSearch: !0,
                                              initialSearchState: `all`,
                                              Scope: {
                                                collection: !0,
                                                productTag: !0,
                                                productType: !0,
                                                title: !0,
                                                variants: !0,
                                                vendor: !0,
                                              },
                                            },
                                            style: { width: `100%` },
                                            value: ``,
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
                      }),
                    ],
                  }),
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-B7owE.framer-xty0dt, .framer-B7owE .framer-xty0dt { display: block; }`,
        `.framer-B7owE.framer-16kg1nk { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1080px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-B7owE .framer-1v0cmf { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-iy0o2h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 80vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 108px 50px 108px 50px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-ize7lr { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-B7owE .framer-rhvcx4-container, .framer-B7owE .framer-f1bb8f-container, .framer-B7owE .framer-fsxuh8-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-B7owE .framer-1yuutrr { -webkit-filter: brightness(0.85); bottom: 0px; filter: brightness(0.85); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-B7owE .framer-1241l63 { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-B7owE .framer-g03lkz { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 120px 50px 128px 50px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-u5m1yg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 48px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-142dxp3 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 100px 0px 0px 0px; position: sticky; width: min-content; }`,
        `.framer-B7owE .framer-6eofbx-container { flex: none; height: auto; position: relative; width: auto; z-index: 1; }`,
        `.framer-B7owE .framer-19duep { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-B7owE .framer-k74tid, .framer-B7owE .framer-1g809of { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; padding: 0px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-1r75it5 { --border-bottom-width: 1px; --border-color: var(--token-b3479329-b25f-4976-b856-8a2d77be83ae); --border-left-width: 1px; --border-right-width: 1px; --border-style: solid; --border-top-width: 1px; align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); border-bottom-left-radius: 200px; border-bottom-right-radius: 200px; border-top-left-radius: 200px; border-top-right-radius: 200px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; padding: 10px 20px 10px 20px; position: relative; width: min-content; }`,
        `.framer-B7owE .framer-1xvmqsf, .framer-B7owE .framer-1vronry { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-B7owE.framer-1ip92fi { background-color: rgba(0, 0, 0, 0.4); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-B7owE.framer-1cvrj3y { align-content: flex-start; align-items: flex-start; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); bottom: 0px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; justify-content: flex-start; max-width: 88%; overflow: auto; overscroll-behavior: contain; padding: 24px 24px 40px 24px; position: fixed; right: 0px; top: 0px; width: 360px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-B7owE .framer-17be22b { align-content: center; align-items: center; background-color: var(--token-6179ba6b-69d8-4266-899c-508da03f0f15, rgba(3, 6, 7, 0.08)); border-bottom-left-radius: 200px; border-bottom-right-radius: 200px; border-top-left-radius: 200px; border-top-right-radius: 200px; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 36px; justify-content: center; padding: 0px; position: relative; width: 36px; }`,
        `.framer-B7owE .framer-1ed2gur { --d1m4u3: 1.4; --v9s4l2: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45); flex: none; height: auto; position: relative; width: 20px; }`,
        `.framer-B7owE .framer-178oxy4-container, .framer-B7owE .framer-16ckm3n-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-13dvmcn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
        `.framer-B7owE .framer-14rm10i { height: 14px; position: relative; width: 15px; }`,
        `.framer-B7owE .framer-rhn17u { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 62px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-icf9gf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-1jdu019-container { flex: 1 0 0px; height: auto; max-width: 328px; position: relative; width: 1px; }`,
        `.framer-B7owE .framer-jn6etk { display: grid; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(1px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 695px; }`,
        `.framer-B7owE .framer-1kfxw1f-container { align-self: start; flex: none; height: 390px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-B7owE.framer-1c9fjfw, .framer-B7owE.framer-mjcloy { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-B7owE.framer-1dz6nvn, .framer-B7owE.framer-hmeir5 { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 20px 40px 20px; position: fixed; right: 0px; z-index: 10; }`,
        `.framer-B7owE .framer-dq6tb9-container, .framer-B7owE .framer-120hcms-container { flex: none; height: auto; position: relative; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-B7owE .framer-iz2rqa { display: grid; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(1px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 361px; }`,
        `.framer-B7owE .framer-uoxlsw-container { align-self: start; flex: none; height: 440px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-B7owE .framer-oypmvt-container { height: auto; position: relative; width: 781px; }`,
        ...Oe,
        ...Le,
        `.framer-B7owE[data-border="true"]::after, .framer-B7owE [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-B7owE.framer-16kg1nk { width: 810px; } .framer-B7owE .framer-iy0o2h { height: 70vh; max-height: 756px; padding: 80px 32px 80px 32px; } .framer-B7owE .framer-g03lkz { padding: 64px 32px 80px 32px; } .framer-B7owE .framer-u5m1yg { max-width: 680px; } .framer-B7owE .framer-19duep { gap: 43px; } .framer-B7owE .framer-rhn17u { gap: 36px; } .framer-B7owE .framer-1jdu019-container { max-width: 358px; }}`,
        `@media (max-width: 809.98px) { .framer-B7owE.framer-16kg1nk { width: 390px; } .framer-B7owE .framer-iy0o2h { height: 65vh; max-height: 550px; padding: 64px 20px 64px 20px; } .framer-B7owE .framer-g03lkz { padding: 48px 20px 56px 20px; } .framer-B7owE .framer-u5m1yg { max-width: 380px; padding: 0px 0px 56px 0px; } .framer-B7owE .framer-19duep { gap: 34px; } .framer-B7owE .framer-1r75it5 { padding: 9px 20px 9px 20px; } .framer-B7owE .framer-rhn17u { gap: 32px; } .framer-B7owE .framer-1jdu019-container { max-width: unset; }}`,
      ],
      `framer-B7owE`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 5441.5, width: 1200 }),
    ae(
      $,
      [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
              weight: `500`,
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
            {
              cssFamilyName: `General Sans`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/7YY3ZAAE3TRV2LANYOLXNHTPHLXVWTKH.woff2`,
              weight: `400`,
            },
          ],
        },
        ...Ue,
        ...Ke,
        ...qe,
        ...Je,
        ...Ye,
        ...Xe,
        ...Ze,
        ...Qe,
        ...$e,
        ...x(ke),
        ...x(ze),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = de.get(lt(), n),
          i = de.get(dt(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          w(R, {}, t),
          w(L, {}, t),
          w(I, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [w(P, {}, t), w(F, {}, t)]));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [w(P, {}, t), w(F, {}, t)]));
          })(),
        ]);
      },
    }),
    (ht = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerAhZGQnQh_`,
          slots: [],
          annotations: {
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"un6zUY1XS":{"layout":["fixed","fixed"]},"CqfSaEtU_":{"layout":["fixed","fixed"]}}}`,
            framerColorSyntax: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerDisplayContentsDiv: `false`,
            framerScrollSections: `{"enRJsoY4o":{"pattern":":enRJsoY4o","name":"Nav Trigger"}}`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerImmutableVariables: `true`,
            framerContractVersion: `1`,
            framerIntrinsicHeight: `5441.5`,
            framerAutoSizeImages: `true`,
            framerAcceptsLayoutTemplate: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ht as __FramerMetadata__, $ as default, nt as queryParamNames };
//# sourceMappingURL=-nyaVj0Zi2vKQlj2lL4RC5i7ZFRqvLPEcecENwqgLc8.B633L0G_.mjs.map
