import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  I as n,
  M as r,
  N as i,
  a,
  c as o,
  g as s,
  i as ee,
  l as c,
  o as l,
  s as u,
  w as te,
  y as ne,
} from "./react.CWoGm2_e.mjs";
import { C as d, a as re, n as ie, r as f, t as p } from "./motion.DjW49AAR.mjs";
import {
  A as ae,
  D as m,
  E as oe,
  Et as h,
  H as g,
  I as _,
  Ot as v,
  P as y,
  S as b,
  St as x,
  T as se,
  U as S,
  X as C,
  _t as ce,
  a as w,
  ct as le,
  dt as ue,
  f as de,
  ft as fe,
  h as pe,
  i as T,
  kt as me,
  mt as E,
  n as he,
  nt as D,
  st as ge,
  vt as _e,
  wt as ve,
  x as ye,
  xt as O,
} from "./framer.D9PtOJZM.mjs";
import { n as k, t as A } from "./diBdjZlAZ.Cd3PMWbU.mjs";
import { i as j, t as M } from "./vDz2snn78.DZVUjcrj.mjs";
import { a as N, c as P, i as be, o as xe, r as Se, s as F } from "./shared-lib.Cln7NIgD.mjs";
import { n as Ce, t as I } from "./PcZeB9dzj.lfd4RlWt.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./zWe8uO5eV.D_hz-QQE.mjs";
import { n as Oe, t as L } from "./wuFmlW7jd.DUSVcwDX.mjs";
import ke, { t as Ae } from "./0Vy5_CzRMfRTXSNq1gqbt4W-fZUrU-RPkPfth1nWa2c.BBlE87_E.mjs";
var R,
  z,
  B,
  V,
  je,
  H,
  U,
  W,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  G,
  Le,
  Re,
  K,
  ze,
  Be,
  q,
  Ve,
  He,
  J,
  Ue,
  Y,
  X,
  We,
  Z,
  Ge,
  Ke,
  Q,
  $;
e(() => {
  (l(),
    C(),
    p(),
    te(),
    a(),
    P(),
    k(),
    Ce(),
    Oe(),
    j(),
    xe(),
    we(),
    Ae(),
    (R = g(A)),
    (z = v(d.div)),
    (B = g(I)),
    (V = g(L)),
    (je = me(d.main)),
    (H = g(F)),
    (U = {
      OqOmP3K6v: `(min-width: 1200px)`,
      puvsWeZyD: `(max-width: 809.98px)`,
      UGd5Thuuk: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (W = []),
    (Me = `framer-6pk8n`),
    (Ne = {
      OqOmP3K6v: `framer-v-drudjj`,
      puvsWeZyD: `framer-v-1pesqph`,
      UGd5Thuuk: `framer-v-ny89l6`,
    }),
    (Pe = (e, t, n) => (e && t ? `position` : n)),
    (Fe = {
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
    (Ie = {
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
    (G = {
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
    (Le = { delay: 0, duration: 0.35, ease: [0.45, 0, 0.55, 1], type: `tween` }),
    (Re = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      repeat: !1,
      startDelay: 0.5,
      tokenization: `character`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (K = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (ze = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Be = (e, t) => `translateX(-50%) ${t}`),
    (q = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
    (Ve = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 30,
    }),
    (He = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: q,
      x: 0,
      y: 0,
    }),
    (J = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (Ue = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = O({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Y = () => ({
      from: { alias: `V8oCGDqIO`, data: M, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `V8oCGDqIO`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `id`, type: `Identifier` },
      ],
    })),
    (X = () => ({
      from: { alias: `V8oCGDqIO`, data: M, type: `Collection` },
      limit: { type: `LiteralValue`, value: 2 },
      select: [
        { collection: `V8oCGDqIO`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `V8oCGDqIO`, name: `id`, type: `Identifier` },
      ],
    })),
    (We = ({ query: e, pageSize: t, children: n }) => n(x(e))),
    (Z = { Desktop: `OqOmP3K6v`, Phone: `puvsWeZyD`, Tablet: `UGd5Thuuk` }),
    (Ge = ({ value: e }) =>
      E()
        ? null
        : o(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Ke = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `OqOmP3K6v`,
    })),
    (Q = h(
      s(function (e, a) {
        let s = t(null),
          l = a ?? s,
          te = ne(),
          { activeLocale: p, setLocale: ae } = ce(),
          h = le(),
          { style: g, className: _, layoutId: v, variant: x, ...S } = Ke(e);
        _e(i(() => ke({}, p), [p]));
        let [C, me] = fe(x, U, !1),
          { activeVariantCallback: E, delay: D } = ge(void 0),
          O = ({ overlay: e }) =>
            E(async (...t) => {
              e.toggle();
            }),
          k = ({ overlay: e }) =>
            E(async (...t) => {
              e.hide();
            }),
          j = y(Me, Se, De),
          M = r(de)?.isLayoutTemplate,
          N = !!r(re)?.transition?.layout,
          P = Pe(M, N);
        return (
          ve(),
          ue({}),
          o(de.Provider, {
            value: {
              activeVariantId: C,
              humanReadableVariantMap: Z,
              primaryVariantId: `OqOmP3K6v`,
              variantClassNames: Ne,
            },
            children: c(f, {
              id: v ?? te,
              children: [
                o(Ge, { value: `html body { background: rgb(255, 255, 255); }` }),
                c(d.div, {
                  ...S,
                  className: y(j, `framer-drudjj`, _),
                  ref: l,
                  style: { ...g },
                  children: [
                    c(je, {
                      animate: Fe,
                      className: `framer-1eaq5jv`,
                      "data-framer-appear-id": `1eaq5jv`,
                      "data-framer-name": `Main`,
                      initial: Ie,
                      layout: P,
                      optimized: !0,
                      children: [
                        o(`header`, {
                          className: `framer-kbpxuo`,
                          "data-framer-name": `Header`,
                          children: c(z, {
                            __framer__animate: { transition: Le },
                            __framer__animateOnce: !0,
                            __framer__enter: G,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-m7bfxk`,
                            "data-framer-name": `Container`,
                            children: [
                              c(`div`, {
                                className: `framer-17asgag`,
                                "data-framer-name": `Wrapper`,
                                children: [
                                  o(m, {
                                    __fromCanvasComponent: !0,
                                    children: o(n, {
                                      children: o(`h1`, {
                                        className: `framer-styles-preset-ul51j9`,
                                        "data-styles-preset": `hPRt9GJWZ`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `center` },
                                        children: `Oops! You're lost.`,
                                      }),
                                    }),
                                    className: `framer-1lqoftk`,
                                    effect: Re,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  o(m, {
                                    __fromCanvasComponent: !0,
                                    children: o(n, {
                                      children: o(`h2`, {
                                        className: `framer-styles-preset-63r6z3`,
                                        "data-styles-preset": `zWe8uO5eV`,
                                        dir: `auto`,
                                        children: `This page was not found or has relocated.`,
                                      }),
                                    }),
                                    className: `framer-6tdu6k`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              o(oe, {
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
                                  o(T, {
                                    height: 22,
                                    y: (h?.y || 0) + 0 + 0 + 176 + 0 + 0 + 0 + 0 + 69.6,
                                    children: o(w, {
                                      className: `framer-1w6o1n4-container`,
                                      nodeId: `PLsH8e2yl`,
                                      scopeId: `M7sb1hBQ5`,
                                      children: o(b, {
                                        breakpoint: C,
                                        overrides: {
                                          puvsWeZyD: { pN5qcoZCL: e[2], variant: K(`TCOyb_nl_`) },
                                          UGd5Thuuk: { pN5qcoZCL: e[1], variant: K(`TCOyb_nl_`) },
                                        },
                                        children: o(A, {
                                          ANIdPmhh1: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                          height: `100%`,
                                          id: `PLsH8e2yl`,
                                          layoutId: `PLsH8e2yl`,
                                          lQ_FXk_nD: !1,
                                          pN5qcoZCL: e[0],
                                          PrPXMleLB: `Cart`,
                                          UvO00kpP1: `Go Home`,
                                          variant: K(`U9ygOezcy`),
                                          width: `100%`,
                                          xkJ1dpnu8: `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
                                        }),
                                      }),
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        }),
                        c(`section`, {
                          className: `framer-1sxtzh8`,
                          "data-framer-name": `Featured Products`,
                          children: [
                            o(m, {
                              __fromCanvasComponent: !0,
                              children: o(n, {
                                children: o(`h1`, {
                                  className: `framer-styles-preset-ul51j9`,
                                  "data-styles-preset": `hPRt9GJWZ`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                  },
                                  children: `Featured Products`,
                                }),
                              }),
                              className: `framer-1t820by`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            o(`div`, {
                              className: `framer-1totrdm`,
                              "data-framer-name": `Product Cards`,
                              children: o(`div`, {
                                className: `framer-p5dqgf`,
                                children: o(he, {
                                  children: o(b, {
                                    breakpoint: C,
                                    overrides: { UGd5Thuuk: { query: X() } },
                                    children: o(We, {
                                      query: Y(),
                                      children: (e, t, n) =>
                                        o(u, {
                                          children: e?.map(
                                            (
                                              {
                                                bf_4Vezhu: e,
                                                EKLxfLWe8: t,
                                                FCIPIBRAL: n,
                                                Gv7QQejjQ: r,
                                                id: i,
                                                qtxO0uchm: a,
                                                SbAOTK1XD: s,
                                              },
                                              l
                                            ) => (
                                              (e ??= ``),
                                              (n ??= ``),
                                              (a ??= ``),
                                              (s ??= ``),
                                              (t ??= ``),
                                              o(
                                                f,
                                                {
                                                  id: `V8oCGDqIO-${i}`,
                                                  children: o(ye.Provider, {
                                                    value: { EKLxfLWe8: t },
                                                    children: o(Ue, {
                                                      blockDocumentScrolling: !1,
                                                      dismissWithEsc: !0,
                                                      children: (i) =>
                                                        o(u, {
                                                          children: o(b, {
                                                            breakpoint: C,
                                                            overrides: {
                                                              puvsWeZyD: {
                                                                width: `max(min(${h?.width || `100vw`} - 48px, 1200px), 1px)`,
                                                                y:
                                                                  (h?.y || 0) +
                                                                  0 +
                                                                  0 +
                                                                  176 +
                                                                  211.6 +
                                                                  0 +
                                                                  53.6 +
                                                                  0 +
                                                                  0 +
                                                                  0,
                                                              },
                                                            },
                                                            children: o(T, {
                                                              height: 444,
                                                              width: `max(min(${h?.width || `100vw`} - 64px, 1200px), 1px)`,
                                                              y:
                                                                (h?.y || 0) +
                                                                0 +
                                                                0 +
                                                                176 +
                                                                211.6 +
                                                                0 +
                                                                53.6 +
                                                                0 +
                                                                0,
                                                              children: c(w, {
                                                                className: `framer-q5e50j-container`,
                                                                id: `${t}-q5e50j`,
                                                                nodeId: `ikPLNwXrr`,
                                                                scopeId: `M7sb1hBQ5`,
                                                                children: [
                                                                  o(I, {
                                                                    a8hn4hdTB: `View Product`,
                                                                    gzQ2Nlesr: a,
                                                                    height: `100%`,
                                                                    hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                    id: `ikPLNwXrr`,
                                                                    layoutId: `ikPLNwXrr`,
                                                                    nNQ5K9K0l: n,
                                                                    pDK2H0NwC: ze(r),
                                                                    rHB2d7ei8: s,
                                                                    style: { width: `100%` },
                                                                    UTuSJqO5M: e,
                                                                    variant: K(`gmSnlM4V7`),
                                                                    width: `100%`,
                                                                    XmbYcM2J4: O({ overlay: i }),
                                                                  }),
                                                                  o(ie, {
                                                                    children:
                                                                      i.visible &&
                                                                      o(u, {
                                                                        children: ee(
                                                                          o(pe, {
                                                                            triggerId: `${t}-q5e50j`,
                                                                            children: c(se, {
                                                                              children: [
                                                                                o(
                                                                                  d.div,
                                                                                  {
                                                                                    animate: {
                                                                                      opacity: 1,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.5, 0,
                                                                                          0.88,
                                                                                          0.77,
                                                                                        ],
                                                                                        type: `tween`,
                                                                                      },
                                                                                    },
                                                                                    className: y(
                                                                                      j,
                                                                                      `framer-g4odaz`
                                                                                    ),
                                                                                    "data-framer-portal-id": `${t}-q5e50j`,
                                                                                    exit: {
                                                                                      opacity: 0,
                                                                                      transition: {
                                                                                        delay: 0,
                                                                                        duration: 0,
                                                                                        ease: [
                                                                                          0.12,
                                                                                          0.23, 0.5,
                                                                                          1,
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
                                                                                  `wyrnpOFiq`
                                                                                ),
                                                                                o(d.div, {
                                                                                  className: y(
                                                                                    j,
                                                                                    `framer-1hodzav`
                                                                                  ),
                                                                                  "data-framer-portal-id": `${t}-q5e50j`,
                                                                                  transformTemplate:
                                                                                    Be,
                                                                                  children: o(T, {
                                                                                    width: `max(min(100vw - 40px, 400px), 200px)`,
                                                                                    children: o(w, {
                                                                                      animate: He,
                                                                                      className: `framer-1l2jbc2-container`,
                                                                                      exit: Ve,
                                                                                      inComponentSlot:
                                                                                        !0,
                                                                                      initial: G,
                                                                                      nodeId: `IFATkMj51`,
                                                                                      rendersWithMotion:
                                                                                        !0,
                                                                                      scopeId: `M7sb1hBQ5`,
                                                                                      children: o(
                                                                                        L,
                                                                                        {
                                                                                          HblJYYmXZ:
                                                                                            k({
                                                                                              overlay:
                                                                                                i,
                                                                                            }),
                                                                                          height: `100%`,
                                                                                          id: `IFATkMj51`,
                                                                                          layoutId: `IFATkMj51`,
                                                                                          style: {
                                                                                            maxWidth: `100%`,
                                                                                            width: `100%`,
                                                                                          },
                                                                                          width: `100%`,
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                  }),
                                                                                }),
                                                                              ],
                                                                            }),
                                                                          }),
                                                                          J()
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
                                                i
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
                      ],
                    }),
                    o(T, {
                      children: o(w, {
                        className: `framer-tmynje-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: P,
                        nodeId: `jWU3oAGHk`,
                        scopeId: `M7sb1hBQ5`,
                        children: o(F, {
                          height: `100%`,
                          id: `jWU3oAGHk`,
                          intensity: 10,
                          layoutId: `jWU3oAGHk`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                o(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-6pk8n.framer-1kht8vb, .framer-6pk8n .framer-1kht8vb { display: block; }`,
        `.framer-6pk8n.framer-drudjj { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-6pk8n .framer-1eaq5jv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 120px; height: min-content; justify-content: center; overflow: hidden; padding: 176px 32px 32px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 0; }`,
        `.framer-6pk8n .framer-kbpxuo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; max-width: 1080px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6pk8n .framer-m7bfxk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6pk8n .framer-17asgag { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6pk8n .framer-1lqoftk, .framer-6pk8n .framer-6tdu6k, .framer-6pk8n .framer-1t820by { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-6pk8n .framer-1w6o1n4-container, .framer-6pk8n .framer-tmynje-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-6pk8n .framer-1sxtzh8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; max-width: 1200px; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6pk8n .framer-1totrdm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-6pk8n .framer-p5dqgf { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
        `.framer-6pk8n .framer-q5e50j-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-6pk8n.framer-g4odaz { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-6pk8n.framer-1hodzav { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 20px; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-6pk8n .framer-1l2jbc2-container { flex: none; height: auto; max-width: 400px; min-width: 200px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        ...be,
        ...Te,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-6pk8n.framer-drudjj { width: 810px; } .framer-6pk8n .framer-p5dqgf { gap: 12px; }}`,
        `@media (max-width: 809.98px) { .framer-6pk8n.framer-drudjj { width: 390px; } .framer-6pk8n .framer-1eaq5jv { padding: 176px 24px 32px 24px; } .framer-6pk8n .framer-p5dqgf { flex-direction: column; gap: 12px; } .framer-6pk8n .framer-q5e50j-container { flex: none; width: 100%; }}`,
      ],
      `framer-6pk8n`
    )),
    (Q.displayName = `404`),
    (Q.defaultProps = { height: 1402, width: 1200 }),
    ae(
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
        ...R,
        ...B,
        ...V,
        ...H,
        ...S(N),
        ...S(Ee),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (Q.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = D.get(Y(), n),
          i = D.get(X(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          _(A, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [_(I, {}, t), _(L, {}, t)]));
          })(),
        ]);
      },
    }),
    ($ = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerM7sb1hBQ5`,
          slots: [],
          annotations: {
            framerIntrinsicHeight: `1402`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
            framerAutoSizeImages: `true`,
            framerContractVersion: `1`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerDisplayContentsDiv: `false`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"UGd5Thuuk":{"layout":["fixed","fixed"]},"puvsWeZyD":{"layout":["fixed","fixed"]}}}`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { $ as __FramerMetadata__, Q as default, W as queryParamNames };
//# sourceMappingURL=q89Po5hdeb4-V-WocOkK8tQxPlEeMBRBWeEbsXKttcM.D2TCJ23x.mjs.map
