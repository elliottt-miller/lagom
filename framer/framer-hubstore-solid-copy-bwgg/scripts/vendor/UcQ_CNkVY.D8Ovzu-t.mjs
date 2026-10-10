import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  F as r,
  H as i,
  I as ee,
  L as a,
  M as o,
  N as s,
  O as c,
  P as l,
  R as u,
  T as d,
  _ as f,
  j as p,
  l as m,
  s as h,
  u as g,
  v as _,
  x as v,
  y,
} from "./react.ClsXD4bF.mjs";
import {
  B as b,
  C as te,
  L as ne,
  Y as x,
  a as S,
  f as C,
  g as w,
  q as T,
  r as re,
  t as E,
  w as D,
} from "./motion.ClyXVVeQ.mjs";
import {
  A as O,
  Dt as k,
  F as A,
  G as ie,
  L as j,
  M,
  O as ae,
  Ot as oe,
  T as se,
  U as N,
  W as P,
  Z as ce,
  dt as le,
  ft as ue,
  i as F,
  j as I,
  m as L,
  o as R,
  yt as de,
} from "./framer.CbUxDv78.mjs";
import { i as fe, n as pe, r as me, t as z } from "./KKnW9Hd3v.TmuhifDy.mjs";
import { i as he, n as ge, r as _e, t as ve } from "./nWUDA6LQ3.CzRvIxSa.mjs";
import { i as ye, n as be, r as B, t as xe } from "./ojujRXx3G.BsxJ58M0.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./qgNkKXaGR.sTDu0gXI.mjs";
import { a as Ee, i as De, n as Oe, o as ke, r as Ae, t as V } from "./Ticker.Dle-YLHL.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./wEX21mXRe.BeCcrLA7.mjs";
import { n as Fe, t as Ie } from "./ActionButton.gOvWkmhh.mjs";
import { i as Le, n as Re, r as ze, t as H } from "./uYUgOfNpa.CpQT0pAt.mjs";
import { n as Be, t as U } from "./kQEMcmtw4.DU6hy3T2.mjs";
function W(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ve,
  He,
  Ue,
  We,
  G,
  Ge,
  Ke,
  qe,
  Je,
  K,
  Ye = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      fe(),
      Se(),
      (Ve = [
        `ezt9Gn0Qa`,
        `COOdFg7NP`,
        `eomcLQ0E0`,
        `fIXpBfq9v`,
        `J8uVXuizu`,
        `yWZ8IUMfH`,
        `XPe1G1REj`,
        `Bu_Vp1AMT`,
      ]),
      (He = `framer-aP173`),
      (Ue = {
        Bu_Vp1AMT: `framer-v-1nhm42i`,
        COOdFg7NP: `framer-v-40q9r8`,
        eomcLQ0E0: `framer-v-1ggup65`,
        ezt9Gn0Qa: `framer-v-mqcgea`,
        fIXpBfq9v: `framer-v-m75sab`,
        J8uVXuizu: `framer-v-1tjdps9`,
        XPe1G1REj: `framer-v-1lzchqn`,
        yWZ8IUMfH: `framer-v-lmiyd5`,
      }),
      (We = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (G = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (Ge = D.create(a)),
      (Ke = {
        "Price Token": `fIXpBfq9v`,
        "Primary - Small": `J8uVXuizu`,
        "Secondary - Small": `yWZ8IUMfH`,
        Orange: `XPe1G1REj`,
        Primary: `ezt9Gn0Qa`,
        Purple: `Bu_Vp1AMT`,
        Secondary: `COOdFg7NP`,
        Tertiary: `eomcLQ0E0`,
      }),
      (qe = ({ height: e, id: t, text: n, width: r, ...i }) => ({
        ...i,
        RLbnsIta9: n ?? i.RLbnsIta9 ?? `Monthly Billing`,
        variant: Ke[i.variant] ?? i.variant ?? `ezt9Gn0Qa`,
      })),
      (Je = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: o } = de();
          ue();
          let { style: s, className: c, layoutId: l, variant: u, RLbnsIta9: d, ...f } = qe(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: x,
              variants: S,
            } = k({
              cycleOrder: Ve,
              defaultVariant: `ezt9Gn0Qa`,
              ref: r,
              variant: u,
              variantClassNames: Ue,
            }),
            C = Je(e, S),
            w = A(He, z, Te);
          return m(re, {
            id: l ?? i,
            children: m(Ge, {
              animate: S,
              initial: !1,
              children: m(G, {
                value: We,
                children: m(D.div, {
                  ...f,
                  ...y,
                  className: A(w, `framer-mqcgea`, c, g),
                  "data-framer-name": `Primary`,
                  layoutDependency: C,
                  layoutId: `ezt9Gn0Qa`,
                  ref: r,
                  style: {
                    backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    ...s,
                  },
                  variants: {
                    Bu_Vp1AMT: {
                      backgroundColor: `var(--token-0faec452-7155-4fad-b5ee-fd61d756c4fc, rgb(117, 33, 251))`,
                    },
                    COOdFg7NP: { backgroundColor: `rgba(0, 0, 0, 0)` },
                    eomcLQ0E0: {
                      backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                    },
                    fIXpBfq9v: {
                      backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                    },
                    XPe1G1REj: {
                      backgroundColor: `var(--token-b396bdfc-f34d-4e75-a9d1-98260694e307, rgb(255, 124, 51))`,
                    },
                    yWZ8IUMfH: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  },
                  ...W(
                    {
                      Bu_Vp1AMT: { "data-framer-name": `Purple` },
                      COOdFg7NP: { "data-framer-name": `Secondary` },
                      eomcLQ0E0: { "data-framer-name": `Tertiary` },
                      fIXpBfq9v: { "data-framer-name": `Price Token` },
                      J8uVXuizu: { "data-framer-name": `Primary - Small` },
                      XPe1G1REj: { "data-framer-name": `Orange` },
                      yWZ8IUMfH: { "data-framer-name": `Secondary - Small` },
                    },
                    h,
                    b
                  ),
                  children: m(ae, {
                    __fromCanvasComponent: !0,
                    children: m(a, {
                      children: m(D.p, {
                        className: `framer-styles-preset-1kyzkuu`,
                        "data-styles-preset": `KKnW9Hd3v`,
                        style: {
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                        },
                        children: `Monthly Billing`,
                      }),
                    }),
                    className: `framer-1y5vjri`,
                    "data-framer-name": `Text`,
                    fonts: [`Inter`],
                    layoutDependency: C,
                    layoutId: `xM1Tjra4A`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: d,
                    variants: {
                      COOdFg7NP: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      eomcLQ0E0: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      fIXpBfq9v: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      yWZ8IUMfH: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...W(
                      {
                        COOdFg7NP: {
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-1kyzkuu`,
                              "data-styles-preset": `KKnW9Hd3v`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `Monthly Billing`,
                            }),
                          }),
                        },
                        eomcLQ0E0: {
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-1kyzkuu`,
                              "data-styles-preset": `KKnW9Hd3v`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `Monthly Billing`,
                            }),
                          }),
                        },
                        fIXpBfq9v: {
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-158a7l3`,
                              "data-styles-preset": `qgNkKXaGR`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `Monthly Billing`,
                            }),
                          }),
                        },
                        yWZ8IUMfH: {
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-1kyzkuu`,
                              "data-styles-preset": `KKnW9Hd3v`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `Monthly Billing`,
                            }),
                          }),
                        },
                      },
                      h,
                      b
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-aP173.framer-1rtpb6e, .framer-aP173 .framer-1rtpb6e { display: block; }`,
          `.framer-aP173.framer-mqcgea { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 24px 16px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-aP173 .framer-1y5vjri { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-aP173.framer-mqcgea { gap: 0px; } .framer-aP173.framer-mqcgea > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-aP173.framer-mqcgea > :first-child { margin-left: 0px; } .framer-aP173.framer-mqcgea > :last-child { margin-right: 0px; } }`,
          `.framer-aP173.framer-v-1ggup65.framer-mqcgea, .framer-aP173.framer-v-1lzchqn.framer-mqcgea, .framer-aP173.framer-v-1nhm42i.framer-mqcgea { padding: 12px 24px 12px 24px; }`,
          `.framer-aP173.framer-v-m75sab.framer-mqcgea { padding: 8px 16px 8px 16px; }`,
          `.framer-aP173.framer-v-1tjdps9.framer-mqcgea, .framer-aP173.framer-v-lmiyd5.framer-mqcgea { padding: 12px 20px 12px 20px; }`,
          ...pe,
          ...Ce,
        ],
        `framer-aP173`
      )),
      (K.displayName = `Pricing  Toggle Button`),
      (K.defaultProps = { height: 56, width: 166 }),
      M(K, {
        variant: {
          options: [
            `ezt9Gn0Qa`,
            `COOdFg7NP`,
            `eomcLQ0E0`,
            `fIXpBfq9v`,
            `J8uVXuizu`,
            `yWZ8IUMfH`,
            `XPe1G1REj`,
            `Bu_Vp1AMT`,
          ],
          optionTitles: [
            `Primary`,
            `Secondary`,
            `Tertiary`,
            `Price Token`,
            `Primary - Small`,
            `Secondary - Small`,
            `Orange`,
            `Purple`,
          ],
          title: `Variant`,
          type: R.Enum,
        },
        RLbnsIta9: {
          defaultValue: `Monthly Billing`,
          displayTextArea: !1,
          title: `Text`,
          type: R.String,
        },
      }),
      I(
        K,
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
          ...P(me),
          ...P(we),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Xe,
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  J,
  rt,
  it,
  at,
  ot,
  Y,
  X,
  st = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      Fe(),
      fe(),
      Le(),
      Be(),
      Ye(),
      (Xe = N(K)),
      (Ze = N(U)),
      (Qe = N(Ie)),
      ($e = [`MYZVA4OZE`, `tLwYMifM4`, `z5auii1nW`, `sqKxrOlig`, `KuurAEZLR`, `qDvQxHiu0`]),
      (et = `framer-89upM`),
      (tt = {
        KuurAEZLR: `framer-v-jklvci`,
        MYZVA4OZE: `framer-v-16oxrz4`,
        qDvQxHiu0: `framer-v-1jsfsoo`,
        sqKxrOlig: `framer-v-1fhhj4q`,
        tLwYMifM4: `framer-v-1qnh7ps`,
        z5auii1nW: `framer-v-y7cfxj`,
      }),
      (nt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (it = {
        "Exclusive Plan - Small": `qDvQxHiu0`,
        "Exclusive Plan": `z5auii1nW`,
        "Free- Small": `sqKxrOlig`,
        "Standard Plan - Small": `KuurAEZLR`,
        "Standard Plan": `tLwYMifM4`,
        Free: `MYZVA4OZE`,
      }),
      (at = D.create(a)),
      (ot = ({
        height: e,
        id: t,
        labelText: n,
        list1: r,
        list2: i,
        list3: ee,
        list4: a,
        list5: o,
        price: s,
        saveText: c,
        subtitle: l,
        width: u,
        ...d
      }) => ({
        ...d,
        A4V7s4oEC: ee ?? d.A4V7s4oEC ?? `Basic AI project planning`,
        Fj3aBtIrC: i ?? d.Fj3aBtIrC ?? `Basic customization options`,
        lZAPA0R8N: c ?? d.lZAPA0R8N ?? `35% Save`,
        OJ89dal5F: l ?? d.OJ89dal5F ?? `Free plan for basic users`,
        pbH1RAZWj: a ?? d.pbH1RAZWj ?? `Community support`,
        PeW6LGgzI: n ?? d.PeW6LGgzI ?? `Basic`,
        S2dgST0hv: r ?? d.S2dgST0hv ?? `Access to 5 free templates`,
        UO4cAb2Jo: s ?? d.UO4cAb2Jo ?? `Free`,
        variant: it[d.variant] ?? d.variant ?? `MYZVA4OZE`,
        VzUypixaM: o ?? d.VzUypixaM ?? `Real-time design customization`,
      })),
      (Y = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: o } = de(),
            s = ue(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              UO4cAb2Jo: f,
              PeW6LGgzI: h,
              OJ89dal5F: _,
              S2dgST0hv: y,
              Fj3aBtIrC: b,
              A4V7s4oEC: te,
              pbH1RAZWj: ne,
              VzUypixaM: x,
              lZAPA0R8N: S,
              ...C
            } = ot(e),
            {
              baseVariant: w,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: ie,
              gestureVariant: j,
              isLoading: M,
              setGestureState: oe,
              setVariant: se,
              variants: N,
            } = k({
              cycleOrder: $e,
              defaultVariant: `MYZVA4OZE`,
              ref: r,
              variant: d,
              variantClassNames: tt,
            }),
            P = Y(e, N),
            ce = A(et, H, z),
            le = () => !![`tLwYMifM4`, `z5auii1nW`, `KuurAEZLR`, `qDvQxHiu0`].includes(w),
            I = () => ![`tLwYMifM4`, `z5auii1nW`, `KuurAEZLR`, `qDvQxHiu0`].includes(w),
            L = () => !![`tLwYMifM4`, `KuurAEZLR`].includes(w),
            R = () => !![`z5auii1nW`, `qDvQxHiu0`].includes(w);
          return m(re, {
            id: u ?? i,
            children: m(at, {
              animate: N,
              initial: !1,
              children: m(rt, {
                value: nt,
                children: g(D.div, {
                  ...C,
                  ...ie,
                  className: A(ce, `framer-16oxrz4`, l, T),
                  "data-border": !0,
                  "data-framer-name": `Free`,
                  layoutDependency: P,
                  layoutId: `MYZVA4OZE`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 24,
                    borderBottomRightRadius: 24,
                    borderTopLeftRadius: 24,
                    borderTopRightRadius: 24,
                    boxShadow: `0px 1px 16px 0px rgba(1, 32, 92, 0.04)`,
                    ...c,
                  },
                  variants: {
                    KuurAEZLR: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    qDvQxHiu0: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                    sqKxrOlig: {
                      borderBottomLeftRadius: 16,
                      borderBottomRightRadius: 16,
                      borderTopLeftRadius: 16,
                      borderTopRightRadius: 16,
                    },
                  },
                  ...q(
                    {
                      KuurAEZLR: { "data-framer-name": `Standard Plan - Small` },
                      qDvQxHiu0: { "data-framer-name": `Exclusive Plan - Small` },
                      sqKxrOlig: { "data-framer-name": `Free- Small` },
                      tLwYMifM4: { "data-framer-name": `Standard Plan` },
                      z5auii1nW: { "data-framer-name": `Exclusive Plan` },
                    },
                    w,
                    j
                  ),
                  children: [
                    g(D.div, {
                      className: `framer-1ku2vsh`,
                      "data-framer-name": `Card Head`,
                      layoutDependency: P,
                      layoutId: `WmaiK8hTW`,
                      children: [
                        g(D.div, {
                          className: `framer-189w4xn`,
                          "data-framer-name": `Card Description`,
                          layoutDependency: P,
                          layoutId: `udwEAPmP2`,
                          children: [
                            m(F, {
                              height: 56,
                              y:
                                (s?.y || 0) +
                                40 +
                                (((s?.height || 633) - 80 - 305) / 2 + 0 + 0) +
                                0 +
                                0 +
                                0 +
                                0,
                              ...q(
                                {
                                  KuurAEZLR: { y: (s?.y || 0) + 20 + 0 + 0 + 0 + 0 + 0 },
                                  qDvQxHiu0: {
                                    y:
                                      (s?.y || 0) +
                                      20 +
                                      (((s?.height || 541) - 40 - 285) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                  sqKxrOlig: {
                                    y:
                                      (s?.y || 0) +
                                      20 +
                                      (((s?.height || 541) - 40 - 285) / 2 + 0 + 0) +
                                      0 +
                                      0 +
                                      0 +
                                      0,
                                  },
                                },
                                w,
                                j
                              ),
                              children: m(O, {
                                className: `framer-1bvqsr1-container`,
                                layoutDependency: P,
                                layoutId: `NT4YDgyzT-container`,
                                nodeId: `NT4YDgyzT`,
                                rendersWithMotion: !0,
                                scopeId: `bpeOLdbvA`,
                                children: m(K, {
                                  height: `100%`,
                                  id: `NT4YDgyzT`,
                                  layoutId: `NT4YDgyzT`,
                                  RLbnsIta9: h,
                                  variant: J(`eomcLQ0E0`),
                                  width: `100%`,
                                  ...q(
                                    {
                                      KuurAEZLR: { RLbnsIta9: `Standard`, variant: J(`XPe1G1REj`) },
                                      qDvQxHiu0: {
                                        RLbnsIta9: `Exclusive`,
                                        variant: J(`Bu_Vp1AMT`),
                                      },
                                      tLwYMifM4: { variant: J(`Bu_Vp1AMT`) },
                                      z5auii1nW: { variant: J(`XPe1G1REj`) },
                                    },
                                    w,
                                    j
                                  ),
                                }),
                              }),
                            }),
                            g(D.div, {
                              className: `framer-k9dlz9`,
                              "data-framer-name": `Text Block`,
                              layoutDependency: P,
                              layoutId: `y9s8SVJW9`,
                              children: [
                                g(D.div, {
                                  className: `framer-1f9j4ab`,
                                  "data-framer-name": `Price Wrap`,
                                  layoutDependency: P,
                                  layoutId: `LK_E7dFSt`,
                                  children: [
                                    g(D.div, {
                                      className: `framer-1bsuf07`,
                                      "data-framer-name": `Price Block`,
                                      layoutDependency: P,
                                      layoutId: `qwc5rFSGP`,
                                      children: [
                                        le() &&
                                          m(ae, {
                                            __fromCanvasComponent: !0,
                                            children: m(a, {
                                              children: m(D.h2, {
                                                className: `framer-styles-preset-1mdyd08`,
                                                "data-styles-preset": `uYUgOfNpa`,
                                                children: `$`,
                                              }),
                                            }),
                                            className: `framer-v5qen`,
                                            "data-framer-name": `$`,
                                            fonts: [`Inter`],
                                            layoutDependency: P,
                                            layoutId: `OVBEO2woG`,
                                            style: { "--framer-paragraph-spacing": `0px` },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        m(ae, {
                                          __fromCanvasComponent: !0,
                                          children: m(a, {
                                            children: m(D.h2, {
                                              className: `framer-styles-preset-1mdyd08`,
                                              "data-styles-preset": `uYUgOfNpa`,
                                              children: `Free`,
                                            }),
                                          }),
                                          className: `framer-s082vm`,
                                          "data-framer-name": `Text`,
                                          fonts: [`Inter`],
                                          layoutDependency: P,
                                          layoutId: `xSiy2_pt5`,
                                          style: { "--framer-paragraph-spacing": `0px` },
                                          text: f,
                                          verticalAlignment: `top`,
                                          withExternalLayout: !0,
                                          ...q(
                                            {
                                              KuurAEZLR: {
                                                children: m(a, {
                                                  children: m(D.h2, {
                                                    className: `framer-styles-preset-1mdyd08`,
                                                    "data-styles-preset": `uYUgOfNpa`,
                                                    children: `$375`,
                                                  }),
                                                }),
                                              },
                                              qDvQxHiu0: {
                                                children: m(a, {
                                                  children: m(D.h2, {
                                                    className: `framer-styles-preset-1mdyd08`,
                                                    "data-styles-preset": `uYUgOfNpa`,
                                                    children: `$575`,
                                                  }),
                                                }),
                                              },
                                              tLwYMifM4: {
                                                children: m(a, {
                                                  children: m(D.h2, {
                                                    className: `framer-styles-preset-1mdyd08`,
                                                    "data-styles-preset": `uYUgOfNpa`,
                                                    children: `$375`,
                                                  }),
                                                }),
                                              },
                                              z5auii1nW: {
                                                children: m(a, {
                                                  children: m(D.h2, {
                                                    className: `framer-styles-preset-1mdyd08`,
                                                    "data-styles-preset": `uYUgOfNpa`,
                                                    children: `$575`,
                                                  }),
                                                }),
                                              },
                                            },
                                            w,
                                            j
                                          ),
                                        }),
                                      ],
                                    }),
                                    le() &&
                                      m(F, {
                                        ...q(
                                          {
                                            KuurAEZLR: {
                                              height: 56,
                                              y: (s?.y || 0) + 20 + 0 + 0 + 0 + 0 + 76 + 0 + 0 + 4,
                                            },
                                            qDvQxHiu0: {
                                              height: 56,
                                              y:
                                                (s?.y || 0) +
                                                20 +
                                                (((s?.height || 541) - 40 - 285) / 2 + 0 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                76 +
                                                0 +
                                                0 +
                                                4,
                                            },
                                            tLwYMifM4: {
                                              height: 56,
                                              y:
                                                (s?.y || 0) +
                                                40 +
                                                (((s?.height || 633) - 80 - 305) / 2 + 0 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                88 +
                                                0 +
                                                0 +
                                                4,
                                            },
                                            z5auii1nW: {
                                              height: 56,
                                              y:
                                                (s?.y || 0) +
                                                40 +
                                                (((s?.height || 633) - 80 - 305) / 2 + 0 + 0) +
                                                0 +
                                                0 +
                                                0 +
                                                88 +
                                                0 +
                                                0 +
                                                4,
                                            },
                                          },
                                          w,
                                          j
                                        ),
                                        children: m(O, {
                                          className: `framer-31z0bk-container`,
                                          layoutDependency: P,
                                          layoutId: `xXrS5aXs9-container`,
                                          nodeId: `xXrS5aXs9`,
                                          rendersWithMotion: !0,
                                          scopeId: `bpeOLdbvA`,
                                          children: m(K, {
                                            height: `100%`,
                                            id: `xXrS5aXs9`,
                                            layoutId: `xXrS5aXs9`,
                                            RLbnsIta9: `35% Save`,
                                            variant: J(`fIXpBfq9v`),
                                            width: `100%`,
                                            ...q(
                                              {
                                                KuurAEZLR: { RLbnsIta9: S },
                                                qDvQxHiu0: { RLbnsIta9: S },
                                                tLwYMifM4: { RLbnsIta9: S },
                                                z5auii1nW: { RLbnsIta9: S },
                                              },
                                              w,
                                              j
                                            ),
                                          }),
                                        }),
                                      }),
                                  ],
                                }),
                                m(ae, {
                                  __fromCanvasComponent: !0,
                                  children: m(a, {
                                    children: m(D.p, {
                                      className: `framer-styles-preset-1kyzkuu`,
                                      "data-styles-preset": `KKnW9Hd3v`,
                                      style: {
                                        "--framer-text-alignment": `center`,
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                      },
                                      children: `Free plan for basic users`,
                                    }),
                                  }),
                                  className: `framer-vkri0x`,
                                  "data-framer-name": `Title`,
                                  fonts: [`Inter`],
                                  layoutDependency: P,
                                  layoutId: `EfCYyqbur`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                    "--framer-paragraph-spacing": `0px`,
                                  },
                                  text: _,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                  ...q(
                                    {
                                      KuurAEZLR: {
                                        children: m(a, {
                                          children: m(D.p, {
                                            className: `framer-styles-preset-1kyzkuu`,
                                            "data-styles-preset": `KKnW9Hd3v`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Growing Team & Mid-sized`,
                                          }),
                                        }),
                                      },
                                      qDvQxHiu0: {
                                        children: m(a, {
                                          children: m(D.p, {
                                            className: `framer-styles-preset-1kyzkuu`,
                                            "data-styles-preset": `KKnW9Hd3v`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Large Projects & Organizations`,
                                          }),
                                        }),
                                      },
                                      tLwYMifM4: {
                                        children: m(a, {
                                          children: m(D.p, {
                                            className: `framer-styles-preset-1kyzkuu`,
                                            "data-styles-preset": `KKnW9Hd3v`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Growing Team & Mid-sized`,
                                          }),
                                        }),
                                      },
                                      z5auii1nW: {
                                        children: m(a, {
                                          children: m(D.p, {
                                            className: `framer-styles-preset-1kyzkuu`,
                                            "data-styles-preset": `KKnW9Hd3v`,
                                            style: { "--framer-text-alignment": `center` },
                                            children: `Large Projects & Organizations`,
                                          }),
                                        }),
                                      },
                                    },
                                    w,
                                    j
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        m(D.div, {
                          className: `framer-s2ep0q`,
                          "data-framer-name": `Divider`,
                          layoutDependency: P,
                          layoutId: `pxnA3wztd`,
                          style: {
                            backgroundColor: `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                          },
                        }),
                      ],
                    }),
                    g(D.div, {
                      className: `framer-1goi93a`,
                      "data-framer-name": `Features Items Block`,
                      layoutDependency: P,
                      layoutId: `kGRmA60jR`,
                      children: [
                        I() &&
                          m(F, {
                            height: 32,
                            width: `calc(${s?.width || `100vw`} - 64px)`,
                            y:
                              (s?.y || 0) +
                              40 +
                              (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                              0 +
                              0,
                            ...q(
                              {
                                sqKxrOlig: {
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-lbu6dh-container`,
                              layoutDependency: P,
                              layoutId: `funrtV2fa-container`,
                              nodeId: `funrtV2fa`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `funrtV2fa`,
                                layoutId: `funrtV2fa`,
                                style: { width: `100%` },
                                tmUhrLcx1: y,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        I() &&
                          m(F, {
                            height: 32,
                            width: `calc(${s?.width || `100vw`} - 64px)`,
                            y:
                              (s?.y || 0) +
                              40 +
                              (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                              0 +
                              48,
                            ...q(
                              {
                                sqKxrOlig: {
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    48,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-1hlcyu7-container`,
                              layoutDependency: P,
                              layoutId: `jmJ0RYJoD-container`,
                              nodeId: `jmJ0RYJoD`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `jmJ0RYJoD`,
                                layoutId: `jmJ0RYJoD`,
                                style: { width: `100%` },
                                tmUhrLcx1: b,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        I() &&
                          m(F, {
                            height: 32,
                            width: `calc(${s?.width || `100vw`} - 64px)`,
                            y:
                              (s?.y || 0) +
                              40 +
                              (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                              0 +
                              96,
                            ...q(
                              {
                                sqKxrOlig: {
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    96,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-16n0qb1-container`,
                              layoutDependency: P,
                              layoutId: `i3ZDJZeEg-container`,
                              nodeId: `i3ZDJZeEg`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `i3ZDJZeEg`,
                                layoutId: `i3ZDJZeEg`,
                                style: { width: `100%` },
                                tmUhrLcx1: te,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        I() &&
                          m(F, {
                            height: 32,
                            width: `calc(${s?.width || `100vw`} - 64px)`,
                            y:
                              (s?.y || 0) +
                              40 +
                              (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                              0 +
                              144,
                            ...q(
                              {
                                sqKxrOlig: {
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    144,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-r8gal0-container`,
                              layoutDependency: P,
                              layoutId: `FjSx2Jp1x-container`,
                              nodeId: `FjSx2Jp1x`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `FjSx2Jp1x`,
                                layoutId: `FjSx2Jp1x`,
                                style: { width: `100%` },
                                tmUhrLcx1: ne,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        I() &&
                          m(F, {
                            height: 32,
                            width: `calc(${s?.width || `100vw`} - 64px)`,
                            y:
                              (s?.y || 0) +
                              40 +
                              (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                              0 +
                              192,
                            ...q(
                              {
                                sqKxrOlig: {
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    192,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-eju26w-container`,
                              layoutDependency: P,
                              layoutId: `qRggejwlg-container`,
                              nodeId: `qRggejwlg`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `qRggejwlg`,
                                layoutId: `qRggejwlg`,
                                style: { width: `100%` },
                                tmUhrLcx1: x,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        le() &&
                          m(F, {
                            ...q(
                              {
                                KuurAEZLR: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y: (s?.y || 0) + 20 + 0 + 0 + 0,
                                },
                                qDvQxHiu0: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                tLwYMifM4: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                                z5auii1nW: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    0,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-8jvq0i-container`,
                              layoutDependency: P,
                              layoutId: `DWSHgd7Xe-container`,
                              nodeId: `DWSHgd7Xe`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `DWSHgd7Xe`,
                                layoutId: `DWSHgd7Xe`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Full access to all premium templates`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  {
                                    KuurAEZLR: { tmUhrLcx1: y },
                                    qDvQxHiu0: { tmUhrLcx1: y },
                                    tLwYMifM4: { tmUhrLcx1: y },
                                    z5auii1nW: { tmUhrLcx1: y },
                                  },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        le() &&
                          m(F, {
                            ...q(
                              {
                                KuurAEZLR: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y: (s?.y || 0) + 20 + 0 + 0 + 48,
                                },
                                qDvQxHiu0: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    48,
                                },
                                tLwYMifM4: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    48,
                                },
                                z5auii1nW: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    48,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-b0zey7-container`,
                              layoutDependency: P,
                              layoutId: `mxwCfsB_1-container`,
                              nodeId: `mxwCfsB_1`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `mxwCfsB_1`,
                                layoutId: `mxwCfsB_1`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Unlimited downloads`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  {
                                    KuurAEZLR: { tmUhrLcx1: b },
                                    qDvQxHiu0: { tmUhrLcx1: b },
                                    tLwYMifM4: { tmUhrLcx1: b },
                                    z5auii1nW: { tmUhrLcx1: b },
                                  },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        L() &&
                          m(F, {
                            ...q(
                              {
                                KuurAEZLR: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y: (s?.y || 0) + 20 + 0 + 0 + 96,
                                },
                                tLwYMifM4: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    96,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-14tsix4-container`,
                              layoutDependency: P,
                              layoutId: `EWwM8q3jq-container`,
                              nodeId: `EWwM8q3jq`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `EWwM8q3jq`,
                                layoutId: `EWwM8q3jq`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Basic AI project planning & timelines.`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  { KuurAEZLR: { tmUhrLcx1: te }, tLwYMifM4: { tmUhrLcx1: te } },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        le() &&
                          m(F, {
                            ...q(
                              {
                                KuurAEZLR: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y: (s?.y || 0) + 20 + 0 + 0 + 144,
                                },
                                qDvQxHiu0: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    144,
                                },
                                tLwYMifM4: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    144,
                                },
                                z5auii1nW: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    144,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-1wa40ga-container`,
                              layoutDependency: P,
                              layoutId: `ioRQmDfeP-container`,
                              nodeId: `ioRQmDfeP`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `ioRQmDfeP`,
                                layoutId: `ioRQmDfeP`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Advanced customization tools`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  {
                                    KuurAEZLR: { tmUhrLcx1: ne },
                                    qDvQxHiu0: { tmUhrLcx1: ne },
                                    tLwYMifM4: { tmUhrLcx1: ne },
                                    z5auii1nW: { tmUhrLcx1: ne },
                                  },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        L() &&
                          m(F, {
                            ...q(
                              {
                                KuurAEZLR: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y: (s?.y || 0) + 20 + 0 + 0 + 192,
                                },
                                tLwYMifM4: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    192,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-e2n00q-container`,
                              layoutDependency: P,
                              layoutId: `rFbWG0953-container`,
                              nodeId: `rFbWG0953`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `rFbWG0953`,
                                layoutId: `rFbWG0953`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Priority support`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  { KuurAEZLR: { tmUhrLcx1: x }, tLwYMifM4: { tmUhrLcx1: x } },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        R() &&
                          m(F, {
                            ...q(
                              {
                                qDvQxHiu0: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    96,
                                },
                                z5auii1nW: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    96,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-1e4q0ou-container`,
                              layoutDependency: P,
                              layoutId: `VLvnmx6R9-container`,
                              nodeId: `VLvnmx6R9`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `VLvnmx6R9`,
                                layoutId: `VLvnmx6R9`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Exclusive templates and components`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  { qDvQxHiu0: { tmUhrLcx1: te }, z5auii1nW: { tmUhrLcx1: te } },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                        R() &&
                          m(F, {
                            ...q(
                              {
                                qDvQxHiu0: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 32px)`,
                                  y:
                                    (s?.y || 0) +
                                    20 +
                                    (((s?.height || 541) - 40 - 309) / 2 + 0 + 0) +
                                    0 +
                                    192,
                                },
                                z5auii1nW: {
                                  height: 32,
                                  width: `calc(${s?.width || `100vw`} - 64px)`,
                                  y:
                                    (s?.y || 0) +
                                    40 +
                                    (((s?.height || 633) - 80 - 345) / 2 + 0 + 0) +
                                    0 +
                                    192,
                                },
                              },
                              w,
                              j
                            ),
                            children: m(O, {
                              className: `framer-1fc0tvr-container`,
                              layoutDependency: P,
                              layoutId: `U69Cp_wIO-container`,
                              nodeId: `U69Cp_wIO`,
                              rendersWithMotion: !0,
                              scopeId: `bpeOLdbvA`,
                              children: m(U, {
                                height: `100%`,
                                id: `U69Cp_wIO`,
                                layoutId: `U69Cp_wIO`,
                                style: { width: `100%` },
                                tmUhrLcx1: `Dedicated support`,
                                variant: J(`nwFGpMZoJ`),
                                width: `100%`,
                                ...q(
                                  { qDvQxHiu0: { tmUhrLcx1: x }, z5auii1nW: { tmUhrLcx1: x } },
                                  w,
                                  j
                                ),
                              }),
                            }),
                          }),
                      ],
                    }),
                    m(F, {
                      children: m(O, {
                        className: `framer-qg5spz-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: P,
                        layoutId: `vgntoOKFc-container`,
                        nodeId: `vgntoOKFc`,
                        rendersWithMotion: !0,
                        scopeId: `bpeOLdbvA`,
                        children: m(Ie, {
                          actionType: `store`,
                          authAction: `googleSignIn`,
                          button: {
                            borderObject: {
                              borderColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                              borderStyle: `solid`,
                              borderWidth: 1,
                            },
                            borderRadius: `48px`,
                            buttonFont: {
                              fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 400,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            buttonMargin: `0px`,
                            buttonPadding: `16px`,
                            buttonShadow: ``,
                            color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                            fill: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                          },
                          height: `100%`,
                          id: `vgntoOKFc`,
                          label: `Choose Your Plan`,
                          layoutId: `vgntoOKFc`,
                          newTab: !1,
                          pluginId: `stripe`,
                          priceId: `demo`,
                          quantity: 1,
                          storeAction: `checkout`,
                          style: { width: `100%` },
                          width: `100%`,
                          ...q(
                            {
                              qDvQxHiu0: {
                                button: {
                                  borderObject: {
                                    borderColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                  },
                                  borderRadius: `48px`,
                                  buttonFont: {
                                    fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  buttonMargin: `0px`,
                                  buttonPadding: `16px`,
                                  buttonShadow: ``,
                                  color: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                  fill: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                },
                              },
                              tLwYMifM4: {
                                button: {
                                  borderObject: {
                                    borderColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                  },
                                  borderRadius: `48px`,
                                  buttonFont: {
                                    fontFamily: `"DM Sans", "DM Sans Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `0em`,
                                    lineHeight: `1em`,
                                  },
                                  buttonMargin: `0px`,
                                  buttonPadding: `16px`,
                                  buttonShadow: ``,
                                  color: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                  fill: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                                },
                              },
                            },
                            w,
                            j
                          ),
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
          `.framer-89upM.framer-1vsx4t4, .framer-89upM .framer-1vsx4t4 { display: block; }`,
          `.framer-89upM.framer-16oxrz4 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: wrap; gap: 40px; height: min-content; justify-content: center; overflow: visible; padding: 40px 32px 40px 32px; position: relative; width: 405px; }`,
          `.framer-89upM .framer-1ku2vsh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-89upM .framer-189w4xn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-89upM .framer-1bvqsr1-container, .framer-89upM .framer-31z0bk-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-89upM .framer-k9dlz9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-89upM .framer-1f9j4ab { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-89upM .framer-1bsuf07 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-89upM .framer-v5qen, .framer-89upM .framer-s082vm { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-89upM .framer-vkri0x { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-89upM .framer-s2ep0q { flex: none; height: 1px; overflow: visible; position: relative; width: 100%; }`,
          `.framer-89upM .framer-1goi93a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-89upM .framer-lbu6dh-container, .framer-89upM .framer-1hlcyu7-container, .framer-89upM .framer-16n0qb1-container, .framer-89upM .framer-r8gal0-container, .framer-89upM .framer-eju26w-container, .framer-89upM .framer-8jvq0i-container, .framer-89upM .framer-b0zey7-container, .framer-89upM .framer-14tsix4-container, .framer-89upM .framer-1wa40ga-container, .framer-89upM .framer-e2n00q-container, .framer-89upM .framer-1e4q0ou-container, .framer-89upM .framer-1fc0tvr-container, .framer-89upM .framer-qg5spz-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-89upM.framer-v-y7cfxj .framer-8jvq0i-container, .framer-89upM.framer-v-1jsfsoo .framer-8jvq0i-container { order: 5; }`,
          `.framer-89upM.framer-v-y7cfxj .framer-b0zey7-container, .framer-89upM.framer-v-1jsfsoo .framer-b0zey7-container { order: 6; }`,
          `.framer-89upM.framer-v-y7cfxj .framer-1wa40ga-container, .framer-89upM.framer-v-1jsfsoo .framer-1wa40ga-container { order: 9; }`,
          `.framer-89upM.framer-v-y7cfxj .framer-1e4q0ou-container, .framer-89upM.framer-v-1jsfsoo .framer-1e4q0ou-container { order: 8; }`,
          `.framer-89upM.framer-v-y7cfxj .framer-1fc0tvr-container, .framer-89upM.framer-v-1jsfsoo .framer-1fc0tvr-container { order: 11; }`,
          `.framer-89upM.framer-v-1fhhj4q.framer-16oxrz4, .framer-89upM.framer-v-1jsfsoo.framer-16oxrz4 { gap: 24px; padding: 20px 16px 20px 16px; }`,
          `.framer-89upM.framer-v-1fhhj4q .framer-1ku2vsh, .framer-89upM.framer-v-jklvci .framer-1ku2vsh, .framer-89upM.framer-v-1jsfsoo .framer-1ku2vsh { gap: 16px; }`,
          `.framer-89upM.framer-v-1fhhj4q .framer-189w4xn, .framer-89upM.framer-v-jklvci .framer-189w4xn, .framer-89upM.framer-v-1jsfsoo .framer-189w4xn { gap: 20px; }`,
          `.framer-89upM.framer-v-jklvci.framer-16oxrz4 { gap: 24px; justify-content: flex-start; padding: 20px 16px 20px 16px; }`,
          ...Re,
          ...pe,
          `.framer-89upM[data-border="true"]::after, .framer-89upM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-89upM`
      )),
      (X.displayName = `Pricing Card`),
      (X.defaultProps = { height: 633, width: 405 }),
      M(X, {
        variant: {
          options: [`MYZVA4OZE`, `tLwYMifM4`, `z5auii1nW`, `sqKxrOlig`, `KuurAEZLR`, `qDvQxHiu0`],
          optionTitles: [
            `Free`,
            `Standard Plan`,
            `Exclusive Plan`,
            `Free- Small`,
            `Standard Plan - Small`,
            `Exclusive Plan - Small`,
          ],
          title: `Variant`,
          type: R.Enum,
        },
        UO4cAb2Jo: {
          defaultValue: `Free`,
          description: ``,
          displayTextArea: !1,
          placeholder: ``,
          title: `Price`,
          type: R.String,
        },
        onUO4cAb2JoChange: { changes: `UO4cAb2Jo`, type: R.ChangeHandler },
        PeW6LGgzI: {
          defaultValue: `Basic`,
          displayTextArea: !1,
          title: `Label Text`,
          type: R.String,
        },
        onPeW6LGgzIChange: { changes: `PeW6LGgzI`, type: R.ChangeHandler },
        OJ89dal5F: {
          defaultValue: `Free plan for basic users`,
          displayTextArea: !1,
          title: `Subtitle`,
          type: R.String,
        },
        onOJ89dal5FChange: { changes: `OJ89dal5F`, type: R.ChangeHandler },
        S2dgST0hv: {
          defaultValue: `Access to 5 free templates`,
          displayTextArea: !1,
          title: `List 1`,
          type: R.String,
        },
        onS2dgST0hvChange: { changes: `S2dgST0hv`, type: R.ChangeHandler },
        Fj3aBtIrC: {
          defaultValue: `Basic customization options`,
          displayTextArea: !1,
          title: `List 2`,
          type: R.String,
        },
        onFj3aBtIrCChange: { changes: `Fj3aBtIrC`, type: R.ChangeHandler },
        A4V7s4oEC: {
          defaultValue: `Basic AI project planning`,
          displayTextArea: !1,
          title: `List 3`,
          type: R.String,
        },
        onA4V7s4oECChange: { changes: `A4V7s4oEC`, type: R.ChangeHandler },
        pbH1RAZWj: {
          defaultValue: `Community support`,
          displayTextArea: !1,
          title: `List 4`,
          type: R.String,
        },
        onpbH1RAZWjChange: { changes: `pbH1RAZWj`, type: R.ChangeHandler },
        VzUypixaM: {
          defaultValue: `Real-time design customization`,
          displayTextArea: !1,
          title: `List 5`,
          type: R.String,
        },
        onVzUypixaMChange: { changes: `VzUypixaM`, type: R.ChangeHandler },
        lZAPA0R8N: {
          defaultValue: `35% Save`,
          displayTextArea: !1,
          title: `Save Text`,
          type: R.String,
        },
        onlZAPA0R8NChange: { changes: `lZAPA0R8N`, type: R.ChangeHandler },
      }),
      I(
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
              {
                cssFamilyName: `DM Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `DM Sans`,
                url: `https://fonts.gstatic.com/s/dmsans/v17/rP2tp2ywxg089UriI5-g4vlH9VoD8CmcqZG40F9JadbnoEwAopxhS2f3ZGMZpg.woff2`,
                weight: `400`,
              },
            ],
          },
          ...Xe,
          ...Ze,
          ...Qe,
          ...P(ze),
          ...P(me),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (X.loader = { load: (e, t) => (t.locale, Promise.allSettled([j(K, {}, t), j(U, {}, t)])) }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ct,
  lt,
  ut,
  dt,
  ft,
  pt,
  mt,
  ht,
  gt,
  _t,
  vt,
  yt,
  bt = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      st(),
      Ye(),
      (ct = N(K)),
      (lt = N(X)),
      (ut = [`nHQKlGf8N`, `NZybx7YBj`, `gTR8ZPk0t`, `ThlqYfT51`, `s6HnPTAey`, `kGaHS1NRI`]),
      (dt = `framer-D9zTw`),
      (ft = {
        gTR8ZPk0t: `framer-v-1vwmbz3`,
        kGaHS1NRI: `framer-v-1n0a0de`,
        nHQKlGf8N: `framer-v-buav6i`,
        NZybx7YBj: `framer-v-1n3lcw2`,
        s6HnPTAey: `framer-v-1dr0oz4`,
        ThlqYfT51: `framer-v-a7xepk`,
      }),
      (pt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (mt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (ht = D.create(a)),
      (gt = {
        "Montly Billing": `nHQKlGf8N`,
        "Phone - Montly Billing": `s6HnPTAey`,
        "Phone - Yearly Billing": `kGaHS1NRI`,
        "Tablet - Montly Billing": `gTR8ZPk0t`,
        "Tablet - Yearly Billing": `ThlqYfT51`,
        "Yearly Billing": `NZybx7YBj`,
      }),
      (_t = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: gt[r.variant] ?? r.variant ?? `nHQKlGf8N`,
      })),
      (vt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (yt = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: a } = de(),
            o = ue(),
            { style: s, className: c, layoutId: l, variant: u, ...d } = _t(e),
            {
              baseVariant: f,
              classNames: h,
              clearLoadingGesture: _,
              gestureHandlers: y,
              gestureVariant: b,
              isLoading: te,
              setGestureState: ne,
              setVariant: x,
              variants: S,
            } = k({
              cycleOrder: ut,
              defaultVariant: `nHQKlGf8N`,
              ref: r,
              variant: u,
              variantClassNames: ft,
            }),
            C = vt(e, S),
            { activeVariantCallback: w, delay: T } = le(f),
            E = w(async (...e) => {
              x(`NZybx7YBj`);
            }),
            ie = w(async (...e) => {
              x(`nHQKlGf8N`);
            }),
            j = w(async (...e) => {
              x(`ThlqYfT51`);
            }),
            M = w(async (...e) => {
              x(`gTR8ZPk0t`);
            }),
            ae = w(async (...e) => {
              x(`kGaHS1NRI`);
            }),
            oe = w(async (...e) => {
              x(`s6HnPTAey`);
            }),
            se = A(dt);
          return m(re, {
            id: l ?? i,
            children: m(ht, {
              animate: S,
              initial: !1,
              children: m(mt, {
                value: pt,
                children: g(D.div, {
                  ...d,
                  ...y,
                  className: A(se, `framer-buav6i`, c, h),
                  "data-framer-name": `Montly Billing`,
                  layoutDependency: C,
                  layoutId: `nHQKlGf8N`,
                  ref: r,
                  style: { ...s },
                  ...Z(
                    {
                      gTR8ZPk0t: { "data-framer-name": `Tablet - Montly Billing` },
                      kGaHS1NRI: { "data-framer-name": `Phone - Yearly Billing` },
                      NZybx7YBj: { "data-framer-name": `Yearly Billing` },
                      s6HnPTAey: { "data-framer-name": `Phone - Montly Billing` },
                      ThlqYfT51: { "data-framer-name": `Tablet - Yearly Billing` },
                    },
                    f,
                    b
                  ),
                  children: [
                    g(D.div, {
                      className: `framer-1j5rlom`,
                      "data-border": !0,
                      "data-framer-name": `Toggle Button`,
                      "data-highlight": !0,
                      layoutDependency: C,
                      layoutId: `upEdWOAG3`,
                      onTap: E,
                      style: {
                        "--border-bottom-width": `1px`,
                        "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                        "--border-left-width": `1px`,
                        "--border-right-width": `1px`,
                        "--border-style": `solid`,
                        "--border-top-width": `1px`,
                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 80,
                        borderBottomRightRadius: 80,
                        borderTopLeftRadius: 80,
                        borderTopRightRadius: 80,
                      },
                      ...Z(
                        {
                          gTR8ZPk0t: { onTap: j },
                          kGaHS1NRI: { onTap: oe },
                          NZybx7YBj: { onTap: ie },
                          s6HnPTAey: { onTap: ae },
                          ThlqYfT51: { onTap: M },
                        },
                        f,
                        b
                      ),
                      children: [
                        m(F, {
                          height: 56,
                          y: (o?.y || 0) + 0 + 0 + 8,
                          ...Z(
                            {
                              kGaHS1NRI: {
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 0 + 0) +
                                  8,
                              },
                              s6HnPTAey: {
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 0 + 0) +
                                  8,
                              },
                            },
                            f,
                            b
                          ),
                          children: m(O, {
                            className: `framer-11ixy1j-container`,
                            layoutDependency: C,
                            layoutId: `Qviq5K_7j-container`,
                            nodeId: `Qviq5K_7j`,
                            rendersWithMotion: !0,
                            scopeId: `DdfBvTCDl`,
                            children: m(K, {
                              height: `100%`,
                              id: `Qviq5K_7j`,
                              layoutId: `Qviq5K_7j`,
                              RLbnsIta9: `Monthly`,
                              variant: `ezt9Gn0Qa`,
                              width: `100%`,
                              ...Z(
                                {
                                  gTR8ZPk0t: { variant: `J8uVXuizu` },
                                  kGaHS1NRI: { variant: `yWZ8IUMfH` },
                                  NZybx7YBj: { variant: `COOdFg7NP` },
                                  s6HnPTAey: { variant: `J8uVXuizu` },
                                  ThlqYfT51: { variant: `yWZ8IUMfH` },
                                },
                                f,
                                b
                              ),
                            }),
                          }),
                        }),
                        m(F, {
                          height: 56,
                          y: (o?.y || 0) + 0 + 0 + 8,
                          ...Z(
                            {
                              kGaHS1NRI: {
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 0 + 0) +
                                  8,
                              },
                              s6HnPTAey: {
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 0 + 0) +
                                  8,
                              },
                            },
                            f,
                            b
                          ),
                          children: m(O, {
                            className: `framer-5le3k9-container`,
                            layoutDependency: C,
                            layoutId: `C9ka7nVP2-container`,
                            nodeId: `C9ka7nVP2`,
                            rendersWithMotion: !0,
                            scopeId: `DdfBvTCDl`,
                            children: m(K, {
                              height: `100%`,
                              id: `C9ka7nVP2`,
                              layoutId: `C9ka7nVP2`,
                              RLbnsIta9: `Yearly`,
                              variant: `COOdFg7NP`,
                              width: `100%`,
                              ...Z(
                                {
                                  gTR8ZPk0t: { variant: `yWZ8IUMfH` },
                                  kGaHS1NRI: { variant: `J8uVXuizu` },
                                  NZybx7YBj: { variant: `ezt9Gn0Qa` },
                                  s6HnPTAey: { variant: `yWZ8IUMfH` },
                                  ThlqYfT51: { variant: `J8uVXuizu` },
                                },
                                f,
                                b
                              ),
                            }),
                          }),
                        }),
                      ],
                    }),
                    g(D.div, {
                      className: `framer-snun78`,
                      "data-framer-name": `Pricing Card Block`,
                      layoutDependency: C,
                      layoutId: `f7uc3Mk_y`,
                      children: [
                        m(F, {
                          height: 633,
                          width: `max((${o?.width || `100vw`} - 48px) / 3, 10px)`,
                          y: (o?.y || 0) + 0 + 112 + 0 + 0,
                          ...Z(
                            {
                              gTR8ZPk0t: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 0,
                              },
                              kGaHS1NRI: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  0,
                              },
                              s6HnPTAey: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  0,
                              },
                              ThlqYfT51: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 0,
                              },
                            },
                            f,
                            b
                          ),
                          children: m(O, {
                            className: `framer-179bg6i-container`,
                            layoutDependency: C,
                            layoutId: `EtUyDoTcv-container`,
                            nodeId: `EtUyDoTcv`,
                            rendersWithMotion: !0,
                            scopeId: `DdfBvTCDl`,
                            children: m(X, {
                              A4V7s4oEC: `3 downloads a day`,
                              Fj3aBtIrC: `Basic customization`,
                              height: `100%`,
                              id: `EtUyDoTcv`,
                              layoutId: `EtUyDoTcv`,
                              lZAPA0R8N: `35% Save`,
                              OJ89dal5F: `Free plan for basic users`,
                              pbH1RAZWj: `Community support`,
                              PeW6LGgzI: `Basic`,
                              S2dgST0hv: `Access to 5 free templates`,
                              style: { height: `100%`, width: `100%` },
                              UO4cAb2Jo: `Free`,
                              variant: `MYZVA4OZE`,
                              VzUypixaM: `Basic templates`,
                              width: `100%`,
                              ...Z(
                                {
                                  gTR8ZPk0t: { variant: `sqKxrOlig` },
                                  kGaHS1NRI: { variant: `sqKxrOlig` },
                                  s6HnPTAey: { variant: `sqKxrOlig` },
                                  ThlqYfT51: { variant: `sqKxrOlig` },
                                },
                                f,
                                b
                              ),
                            }),
                          }),
                        }),
                        m(F, {
                          height: 633,
                          width: `max((${o?.width || `100vw`} - 48px) / 3, 10px)`,
                          y: (o?.y || 0) + 0 + 112 + 0 + 0,
                          ...Z(
                            {
                              gTR8ZPk0t: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 0,
                              },
                              kGaHS1NRI: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  657,
                              },
                              s6HnPTAey: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  657,
                              },
                              ThlqYfT51: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 0,
                              },
                            },
                            f,
                            b
                          ),
                          children: m(O, {
                            className: `framer-5nmfew-container`,
                            layoutDependency: C,
                            layoutId: `Jw8XCoptY-container`,
                            nodeId: `Jw8XCoptY`,
                            rendersWithMotion: !0,
                            scopeId: `DdfBvTCDl`,
                            children: m(X, {
                              A4V7s4oEC: `10 downloads a day`,
                              Fj3aBtIrC: `Advanced customization`,
                              height: `100%`,
                              id: `Jw8XCoptY`,
                              layoutId: `Jw8XCoptY`,
                              lZAPA0R8N: `35% Save`,
                              OJ89dal5F: `Growing Team & Mid-sized`,
                              pbH1RAZWj: `Priority support`,
                              PeW6LGgzI: `Standard`,
                              S2dgST0hv: `Access to 30 templates`,
                              style: { height: `100%`, width: `100%` },
                              UO4cAb2Jo: `29`,
                              variant: `tLwYMifM4`,
                              VzUypixaM: `Premium templates`,
                              width: `100%`,
                              ...Z(
                                {
                                  gTR8ZPk0t: { style: { width: `100%` }, variant: `KuurAEZLR` },
                                  kGaHS1NRI: {
                                    lZAPA0R8N: `45% Save`,
                                    style: { width: `100%` },
                                    UO4cAb2Jo: `19`,
                                    variant: `KuurAEZLR`,
                                  },
                                  NZybx7YBj: {
                                    A4V7s4oEC: `15 downloads a day`,
                                    lZAPA0R8N: `45% Save`,
                                    S2dgST0hv: `Access to 50 templates`,
                                    UO4cAb2Jo: `19`,
                                  },
                                  s6HnPTAey: { style: { width: `100%` }, variant: `KuurAEZLR` },
                                  ThlqYfT51: {
                                    A4V7s4oEC: `15 downloads a day`,
                                    lZAPA0R8N: `45% Save`,
                                    S2dgST0hv: `Access to 50 templates`,
                                    UO4cAb2Jo: `19`,
                                    variant: `KuurAEZLR`,
                                  },
                                },
                                f,
                                b
                              ),
                            }),
                          }),
                        }),
                        m(F, {
                          height: 633,
                          width: `max((${o?.width || `100vw`} - 48px) / 3, 10px)`,
                          y: (o?.y || 0) + 0 + 112 + 0 + 0,
                          ...Z(
                            {
                              gTR8ZPk0t: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 657,
                              },
                              kGaHS1NRI: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  1314,
                              },
                              s6HnPTAey: {
                                width: `max(${o?.width || `100vw`}, 10px)`,
                                y:
                                  (o?.y || 0) +
                                  0 +
                                  (((o?.height || 1757) - 0 - 2043) / 2 + 72 + 24) +
                                  0 +
                                  1314,
                              },
                              ThlqYfT51: {
                                width: `max((${o?.width || `100vw`} - 24px) / 2, 10px)`,
                                y: (o?.y || 0) + 0 + 102 + 0 + 657,
                              },
                            },
                            f,
                            b
                          ),
                          children: m(O, {
                            className: `framer-24u8e7-container`,
                            layoutDependency: C,
                            layoutId: `aT1VHoJah-container`,
                            nodeId: `aT1VHoJah`,
                            rendersWithMotion: !0,
                            scopeId: `DdfBvTCDl`,
                            children: m(X, {
                              A4V7s4oEC: `Unlimited downloads`,
                              Fj3aBtIrC: `Advanced customization`,
                              height: `100%`,
                              id: `aT1VHoJah`,
                              layoutId: `aT1VHoJah`,
                              lZAPA0R8N: `40% Save`,
                              OJ89dal5F: `Large Projects & Organizations`,
                              pbH1RAZWj: `Dedicated support 24/7`,
                              PeW6LGgzI: `Basic`,
                              S2dgST0hv: `Full access to all templates`,
                              style: { height: `100%`, width: `100%` },
                              UO4cAb2Jo: `49`,
                              variant: `z5auii1nW`,
                              VzUypixaM: `High-end templates`,
                              width: `100%`,
                              ...Z(
                                {
                                  gTR8ZPk0t: { variant: `qDvQxHiu0` },
                                  kGaHS1NRI: {
                                    lZAPA0R8N: `50% Save`,
                                    style: { width: `100%` },
                                    UO4cAb2Jo: `39`,
                                    variant: `qDvQxHiu0`,
                                  },
                                  NZybx7YBj: { lZAPA0R8N: `50% Save`, UO4cAb2Jo: `39` },
                                  s6HnPTAey: { style: { width: `100%` }, variant: `qDvQxHiu0` },
                                  ThlqYfT51: {
                                    lZAPA0R8N: `50% Save`,
                                    UO4cAb2Jo: `39`,
                                    variant: `qDvQxHiu0`,
                                  },
                                },
                                f,
                                b
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
          `.framer-D9zTw.framer-cbydnl, .framer-D9zTw .framer-cbydnl { display: block; }`,
          `.framer-D9zTw.framer-buav6i { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-D9zTw .framer-1j5rlom { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-D9zTw .framer-11ixy1j-container, .framer-D9zTw .framer-5le3k9-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-D9zTw .framer-snun78 { display: grid; flex: none; gap: 24px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(10px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-D9zTw .framer-179bg6i-container, .framer-D9zTw .framer-5nmfew-container, .framer-D9zTw .framer-24u8e7-container { align-self: start; flex: none; height: 100%; justify-self: start; position: relative; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D9zTw.framer-buav6i, .framer-D9zTw .framer-1j5rlom { gap: 0px; } .framer-D9zTw.framer-buav6i > * { margin: 0px; margin-bottom: calc(40px / 2); margin-top: calc(40px / 2); } .framer-D9zTw.framer-buav6i > :first-child { margin-top: 0px; } .framer-D9zTw.framer-buav6i > :last-child { margin-bottom: 0px; } .framer-D9zTw .framer-1j5rlom > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-D9zTw .framer-1j5rlom > :first-child { margin-left: 0px; } .framer-D9zTw .framer-1j5rlom > :last-child { margin-right: 0px; } }`,
          `.framer-D9zTw.framer-v-1vwmbz3.framer-buav6i, .framer-D9zTw.framer-v-a7xepk.framer-buav6i { gap: 30px; width: 810px; }`,
          `.framer-D9zTw.framer-v-1vwmbz3 .framer-snun78, .framer-D9zTw.framer-v-a7xepk .framer-snun78 { grid-template-columns: repeat(2, minmax(10px, 1fr)); }`,
          `.framer-D9zTw.framer-v-1vwmbz3 .framer-5nmfew-container, .framer-D9zTw.framer-v-1dr0oz4 .framer-5nmfew-container, .framer-D9zTw.framer-v-1dr0oz4 .framer-24u8e7-container, .framer-D9zTw.framer-v-1n0a0de .framer-5nmfew-container, .framer-D9zTw.framer-v-1n0a0de .framer-24u8e7-container { height: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D9zTw.framer-v-1vwmbz3.framer-buav6i { gap: 0px; } .framer-D9zTw.framer-v-1vwmbz3.framer-buav6i > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-D9zTw.framer-v-1vwmbz3.framer-buav6i > :first-child { margin-top: 0px; } .framer-D9zTw.framer-v-1vwmbz3.framer-buav6i > :last-child { margin-bottom: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D9zTw.framer-v-a7xepk.framer-buav6i { gap: 0px; } .framer-D9zTw.framer-v-a7xepk.framer-buav6i > * { margin: 0px; margin-bottom: calc(30px / 2); margin-top: calc(30px / 2); } .framer-D9zTw.framer-v-a7xepk.framer-buav6i > :first-child { margin-top: 0px; } .framer-D9zTw.framer-v-a7xepk.framer-buav6i > :last-child { margin-bottom: 0px; } }`,
          `.framer-D9zTw.framer-v-1dr0oz4.framer-buav6i, .framer-D9zTw.framer-v-1n0a0de.framer-buav6i { gap: 24px; justify-content: center; width: 320px; }`,
          `.framer-D9zTw.framer-v-1dr0oz4 .framer-snun78, .framer-D9zTw.framer-v-1n0a0de .framer-snun78 { grid-template-columns: repeat(1, minmax(10px, 1fr)); }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D9zTw.framer-v-1dr0oz4.framer-buav6i { gap: 0px; } .framer-D9zTw.framer-v-1dr0oz4.framer-buav6i > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-D9zTw.framer-v-1dr0oz4.framer-buav6i > :first-child { margin-top: 0px; } .framer-D9zTw.framer-v-1dr0oz4.framer-buav6i > :last-child { margin-bottom: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-D9zTw.framer-v-1n0a0de.framer-buav6i { gap: 0px; } .framer-D9zTw.framer-v-1n0a0de.framer-buav6i > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-D9zTw.framer-v-1n0a0de.framer-buav6i > :first-child { margin-top: 0px; } .framer-D9zTw.framer-v-1n0a0de.framer-buav6i > :last-child { margin-bottom: 0px; } }`,
          `.framer-D9zTw[data-border="true"]::after, .framer-D9zTw [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-D9zTw`
      )),
      (yt.displayName = `Pricing Deck`),
      (yt.defaultProps = { height: 745, width: 1200 }),
      M(yt, {
        variant: {
          options: [`nHQKlGf8N`, `NZybx7YBj`, `gTR8ZPk0t`, `ThlqYfT51`, `s6HnPTAey`, `kGaHS1NRI`],
          optionTitles: [
            `Montly Billing`,
            `Yearly Billing`,
            `Tablet - Montly Billing`,
            `Tablet - Yearly Billing`,
            `Phone - Montly Billing`,
            `Phone - Yearly Billing`,
          ],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      I(yt, [{ explicitInter: !0, fonts: [] }, ...ct, ...lt], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function xt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      Oe(),
      (St = N(V)),
      (Ct = [`apmwtwB94`, `uZTGSSaic`, `VnCcLkvvk`, `zYHRnzGxz`]),
      (wt = `framer-P2Yjr`),
      (Tt = {
        apmwtwB94: `framer-v-zeauej`,
        uZTGSSaic: `framer-v-9r36ps`,
        VnCcLkvvk: `framer-v-flm9f4`,
        zYHRnzGxz: `framer-v-wdfp3p`,
      }),
      (Et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Dt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (Ot = D.create(a)),
      (kt = {
        "Pricing - Small": `zYHRnzGxz`,
        Pricing: `VnCcLkvvk`,
        Primary: `apmwtwB94`,
        Small: `uZTGSSaic`,
      }),
      (At = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: kt[r.variant] ?? r.variant ?? `apmwtwB94`,
      })),
      (jt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Mt = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: a } = de();
          ue();
          let { style: o, className: s, layoutId: c, variant: l, ...u } = At(e),
            {
              baseVariant: d,
              classNames: f,
              clearLoadingGesture: h,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: b,
              setGestureState: te,
              setVariant: ne,
              variants: x,
            } = k({
              cycleOrder: Ct,
              defaultVariant: `apmwtwB94`,
              ref: r,
              variant: l,
              variantClassNames: Tt,
            }),
            S = jt(e, x),
            C = A(wt),
            w = () => ![`uZTGSSaic`, `VnCcLkvvk`, `zYHRnzGxz`].includes(d),
            T = () => d === `VnCcLkvvk`,
            E = () => d === `zYHRnzGxz`,
            ie = () => d === `uZTGSSaic`;
          return m(re, {
            id: c ?? i,
            children: m(Ot, {
              animate: x,
              initial: !1,
              children: m(Dt, {
                value: Et,
                children: g(D.div, {
                  ...u,
                  ..._,
                  className: A(C, `framer-zeauej`, s, f),
                  "data-framer-name": `Primary`,
                  layoutDependency: S,
                  layoutId: `apmwtwB94`,
                  ref: r,
                  style: { ...o },
                  ...xt(
                    {
                      uZTGSSaic: { "data-framer-name": `Small` },
                      VnCcLkvvk: { "data-framer-name": `Pricing` },
                      zYHRnzGxz: { "data-framer-name": `Pricing - Small` },
                    },
                    d,
                    y
                  ),
                  children: [
                    w() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-1x9l1r9-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `UfocOAasq-container`,
                          nodeId: `UfocOAasq`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `right`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 16,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `UfocOAasq`,
                            layoutId: `UfocOAasq`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `332px`,
                                  src: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg`,
                                  srcSet: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E.jpg 512w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg 1024w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-bd3cd7.jpg 2048w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg 2400w`,
                                },
                                className: `framer-1yzqlw9`,
                                "data-framer-name": `Image One`,
                                layoutDependency: S,
                                layoutId: `wXjhegmL9`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `332px`,
                                  src: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg`,
                                  srcSet: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY.jpg 512w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-cc15a5.jpg 1024w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-210561.jpg 2048w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg 2400w`,
                                },
                                className: `framer-z6vnaq`,
                                "data-framer-name": `Image Two`,
                                layoutDependency: S,
                                layoutId: `ovHeRJyhy`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `332px`,
                                  src: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg`,
                                  srcSet: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8.jpg 512w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a30a0b.jpg 1024w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a77480.jpg 2048w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg 2400w`,
                                },
                                className: `framer-zjkwqj`,
                                "data-framer-name": `Image Three`,
                                layoutDependency: S,
                                layoutId: `PcXnrNBIc`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `332px`,
                                  src: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg`,
                                  srcSet: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo.jpg 512w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-45a207.jpg 1024w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-150915.jpg 2048w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg 2400w`,
                                },
                                className: `framer-yutr94`,
                                "data-framer-name": `Image Four`,
                                layoutDependency: S,
                                layoutId: `cTyz8KDyU`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `332px`,
                                  src: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg`,
                                  srcSet: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g.jpg 512w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-d92c50.jpg 1024w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-53429a.jpg 2048w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg 2400w`,
                                },
                                className: `framer-1m949d3`,
                                "data-framer-name": `Image Five`,
                                layoutDependency: S,
                                layoutId: `FKPUv9M_q`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                            ],
                            speed: 50,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    w() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-sfx0q3-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `iemU0I7QL-container`,
                          nodeId: `iemU0I7QL`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `left`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 16,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `iemU0I7QL`,
                            layoutId: `iemU0I7QL`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `332px`,
                                  src: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg`,
                                  srcSet: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ.jpg 512w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-01f53f.jpg 1024w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-36bd10.jpg 2048w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg 2400w`,
                                },
                                className: `framer-11ul5j9`,
                                "data-framer-name": `Image Six`,
                                layoutDependency: S,
                                layoutId: `nLPbPQRsh`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `332px`,
                                  src: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg`,
                                  srcSet: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg.jpg 512w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-4113cf.jpg 1024w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-a2162c.jpg 2048w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg 2400w`,
                                },
                                className: `framer-mb0x1h`,
                                "data-framer-name": `Image Seven`,
                                layoutDependency: S,
                                layoutId: `PIuYp5mJA`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `332px`,
                                  src: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg`,
                                  srcSet: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw.jpg 512w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-79e43a.jpg 1024w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-5a8585.jpg 2048w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg 2400w`,
                                },
                                className: `framer-sk7obj`,
                                "data-framer-name": `Image Eight`,
                                layoutDependency: S,
                                layoutId: `FPrGyeOAV`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `332px`,
                                  src: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg`,
                                  srcSet: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M.jpg 512w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-4d1462.jpg 1024w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-a08da1.jpg 2048w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg 2400w`,
                                },
                                className: `framer-13meyp9`,
                                "data-framer-name": `Image Nine`,
                                layoutDependency: S,
                                layoutId: `kvMGM4ICi`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `332px`,
                                  src: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg`,
                                  srcSet: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q.jpg 512w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-fffcbd.jpg 1024w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-8f7f52.jpg 2048w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg 2400w`,
                                },
                                className: `framer-14ejc28`,
                                "data-framer-name": `Image Ten`,
                                layoutDependency: S,
                                layoutId: `E2moRoO18`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                            ],
                            speed: 50,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    T() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-1ksbgd9-container`,
                          "data-framer-name": `Pricing`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `WLvLgKcrY-container`,
                          name: `Pricing`,
                          nodeId: `WLvLgKcrY`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `right`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 7,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `WLvLgKcrY`,
                            layoutId: `WLvLgKcrY`,
                            name: `Pricing`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg`,
                                  srcSet: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E.jpg 512w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg 1024w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-bd3cd7.jpg 2048w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg 2400w`,
                                },
                                className: `framer-i8rhan`,
                                "data-framer-name": `Image One`,
                                layoutDependency: S,
                                layoutId: `RLYhMPZWY`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg`,
                                  srcSet: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY.jpg 512w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-cc15a5.jpg 1024w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-210561.jpg 2048w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg 2400w`,
                                },
                                className: `framer-1c9upqe`,
                                "data-framer-name": `Image Two`,
                                layoutDependency: S,
                                layoutId: `kAM8mj2Bx`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg`,
                                  srcSet: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8.jpg 512w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a30a0b.jpg 1024w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a77480.jpg 2048w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg 2400w`,
                                },
                                className: `framer-19dubr5`,
                                "data-framer-name": `Image Three`,
                                layoutDependency: S,
                                layoutId: `domU2Lsyp`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg`,
                                  srcSet: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo.jpg 512w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-45a207.jpg 1024w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-150915.jpg 2048w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg 2400w`,
                                },
                                className: `framer-4edz3e`,
                                "data-framer-name": `Image Four`,
                                layoutDependency: S,
                                layoutId: `vGfH6bFro`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg`,
                                  srcSet: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g.jpg 512w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-d92c50.jpg 1024w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-53429a.jpg 2048w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg 2400w`,
                                },
                                className: `framer-rbfwul`,
                                "data-framer-name": `Image Five`,
                                layoutDependency: S,
                                layoutId: `UxJAW1H9p`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                            ],
                            speed: 40,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    T() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-8zjl2n-container`,
                          "data-framer-name": `Pricing`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `VJ4kGFDsJ-container`,
                          name: `Pricing`,
                          nodeId: `VJ4kGFDsJ`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `left`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 7,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `VJ4kGFDsJ`,
                            layoutId: `VJ4kGFDsJ`,
                            name: `Pricing`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg`,
                                  srcSet: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ.jpg 512w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-01f53f.jpg 1024w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-36bd10.jpg 2048w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg 2400w`,
                                },
                                className: `framer-h2xlb2`,
                                "data-framer-name": `Image Six`,
                                layoutDependency: S,
                                layoutId: `PNLoX7OQ2`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg`,
                                  srcSet: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg.jpg 512w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-4113cf.jpg 1024w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-a2162c.jpg 2048w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg 2400w`,
                                },
                                className: `framer-wu9e50`,
                                "data-framer-name": `Image Seven`,
                                layoutDependency: S,
                                layoutId: `DzO6UsH7I`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg`,
                                  srcSet: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw.jpg 512w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-79e43a.jpg 1024w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-5a8585.jpg 2048w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg 2400w`,
                                },
                                className: `framer-1ulq3i1`,
                                "data-framer-name": `Image Eight`,
                                layoutDependency: S,
                                layoutId: `jaI89Bc2X`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg`,
                                  srcSet: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M.jpg 512w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-4d1462.jpg 1024w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-a08da1.jpg 2048w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg 2400w`,
                                },
                                className: `framer-mxb5cc`,
                                "data-framer-name": `Image Nine`,
                                layoutDependency: S,
                                layoutId: `G_RbM9lVU`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `142.6777px`,
                                  src: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg`,
                                  srcSet: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q.jpg 512w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-fffcbd.jpg 1024w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-8f7f52.jpg 2048w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg 2400w`,
                                },
                                className: `framer-1bvr53d`,
                                "data-framer-name": `Image Ten`,
                                layoutDependency: S,
                                layoutId: `jap5eNOmy`,
                                style: {
                                  borderBottomLeftRadius: 16,
                                  borderBottomRightRadius: 16,
                                  borderTopLeftRadius: 16,
                                  borderTopRightRadius: 16,
                                },
                              }),
                            ],
                            speed: 40,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    E() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-fd4s51-container`,
                          "data-framer-name": `Pricing - Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `toAiu1cgE-container`,
                          name: `Pricing - Small`,
                          nodeId: `toAiu1cgE`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `right`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 7,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `toAiu1cgE`,
                            layoutId: `toAiu1cgE`,
                            name: `Pricing - Small`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg`,
                                  srcSet: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E.jpg 512w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg 1024w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-bd3cd7.jpg 2048w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg 2400w`,
                                },
                                className: `framer-15hfytm`,
                                "data-framer-name": `Image One`,
                                layoutDependency: S,
                                layoutId: `XAe0F0MsE`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg`,
                                  srcSet: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY.jpg 512w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-cc15a5.jpg 1024w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-210561.jpg 2048w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg 2400w`,
                                },
                                className: `framer-f131zz`,
                                "data-framer-name": `Image Two`,
                                layoutDependency: S,
                                layoutId: `SS4TLEECs`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg`,
                                  srcSet: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8.jpg 512w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a30a0b.jpg 1024w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a77480.jpg 2048w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg 2400w`,
                                },
                                className: `framer-a55l5z`,
                                "data-framer-name": `Image Three`,
                                layoutDependency: S,
                                layoutId: `oixjzj0aa`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg`,
                                  srcSet: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo.jpg 512w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-45a207.jpg 1024w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-150915.jpg 2048w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg 2400w`,
                                },
                                className: `framer-33ru4n`,
                                "data-framer-name": `Image Four`,
                                layoutDependency: S,
                                layoutId: `RF2vuqkCq`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg`,
                                  srcSet: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g.jpg 512w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-d92c50.jpg 1024w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-53429a.jpg 2048w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg 2400w`,
                                },
                                className: `framer-d373ep`,
                                "data-framer-name": `Image Five`,
                                layoutDependency: S,
                                layoutId: `n9e92atng`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                            ],
                            speed: 50,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    E() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-26ywee-container`,
                          "data-framer-name": `Pricing - Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `RPMFpnkEa-container`,
                          name: `Pricing - Small`,
                          nodeId: `RPMFpnkEa`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `left`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 7,
                            height: `100%`,
                            hoverFactor: 1,
                            id: `RPMFpnkEa`,
                            layoutId: `RPMFpnkEa`,
                            name: `Pricing - Small`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg`,
                                  srcSet: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ.jpg 512w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-01f53f.jpg 1024w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-36bd10.jpg 2048w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg 2400w`,
                                },
                                className: `framer-1li4v32`,
                                "data-framer-name": `Image Six`,
                                layoutDependency: S,
                                layoutId: `Vv2VQK8qz`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg`,
                                  srcSet: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg.jpg 512w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-4113cf.jpg 1024w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-a2162c.jpg 2048w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg 2400w`,
                                },
                                className: `framer-a81m2f`,
                                "data-framer-name": `Image Seven`,
                                layoutDependency: S,
                                layoutId: `cy7IZNURc`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg`,
                                  srcSet: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw.jpg 512w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-79e43a.jpg 1024w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-5a8585.jpg 2048w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg 2400w`,
                                },
                                className: `framer-1hqlypb`,
                                "data-framer-name": `Image Eight`,
                                layoutDependency: S,
                                layoutId: `T19O3mawc`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg`,
                                  srcSet: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M.jpg 512w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-4d1462.jpg 1024w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-a08da1.jpg 2048w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg 2400w`,
                                },
                                className: `framer-l03a3e`,
                                "data-framer-name": `Image Nine`,
                                layoutDependency: S,
                                layoutId: `cHfhCTGxG`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `90.5455px`,
                                  src: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg`,
                                  srcSet: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q.jpg 512w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-fffcbd.jpg 1024w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-8f7f52.jpg 2048w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg 2400w`,
                                },
                                className: `framer-1mmajoz`,
                                "data-framer-name": `Image Ten`,
                                layoutDependency: S,
                                layoutId: `vHJpzh5s0`,
                                style: {
                                  borderBottomLeftRadius: 12,
                                  borderBottomRightRadius: 12,
                                  borderTopLeftRadius: 12,
                                  borderTopRightRadius: 12,
                                },
                              }),
                            ],
                            speed: 50,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ie() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-5fqndz-container`,
                          "data-framer-name": `Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `gOMUVexZb-container`,
                          name: `Small`,
                          nodeId: `gOMUVexZb`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `right`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 16,
                            height: `100%`,
                            hoverFactor: 0,
                            id: `gOMUVexZb`,
                            layoutId: `gOMUVexZb`,
                            name: `Small`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg`,
                                  srcSet: `../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E.jpg 512w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-ef258a.jpg 1024w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-bd3cd7.jpg 2048w,../../assets/images/hGL7BXqgqKl04n3duaYwyZA58E-5d724a.jpg 2400w`,
                                },
                                className: `framer-1cz2yo3`,
                                "data-framer-name": `Image One`,
                                layoutDependency: S,
                                layoutId: `KUFEogJsA`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg`,
                                  srcSet: `../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY.jpg 512w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-cc15a5.jpg 1024w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-210561.jpg 2048w,../../assets/images/zLxIDW4mJWzRcX90sSE8jnKI9TY-4f075a.jpg 2400w`,
                                },
                                className: `framer-uaxyef`,
                                "data-framer-name": `Image Two`,
                                layoutDependency: S,
                                layoutId: `HywFNKOl3`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg`,
                                  srcSet: `../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8.jpg 512w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a30a0b.jpg 1024w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-a77480.jpg 2048w,../../assets/images/6S8D7fK8d7cHn8S64m3LgvxkKg8-45493d.jpg 2400w`,
                                },
                                className: `framer-1kziwlt`,
                                "data-framer-name": `Image Three`,
                                layoutDependency: S,
                                layoutId: `Xb_HUgDPK`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg`,
                                  srcSet: `../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo.jpg 512w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-45a207.jpg 1024w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-150915.jpg 2048w,../../assets/images/mRiNGihF5M5NUfgprqWpnLgVdo-a773ee.jpg 2400w`,
                                },
                                className: `framer-5a0vfb`,
                                "data-framer-name": `Image Four`,
                                layoutDependency: S,
                                layoutId: `Ibfiinj5p`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg`,
                                  srcSet: `../../assets/images/FVs3ZZOva62DkhveRLVlJN87g.jpg 512w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-d92c50.jpg 1024w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-53429a.jpg 2048w,../../assets/images/FVs3ZZOva62DkhveRLVlJN87g-50eb52.jpg 2400w`,
                                },
                                className: `framer-6b0e1j`,
                                "data-framer-name": `Image Five`,
                                layoutDependency: S,
                                layoutId: `hgvEqe0iP`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                            ],
                            speed: 50,
                            style: { height: `100%`, width: `100%` },
                            width: `100%`,
                          }),
                        }),
                      }),
                    ie() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-8wjhxb-container`,
                          "data-framer-name": `Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `GmHDuD3rM-container`,
                          name: `Small`,
                          nodeId: `GmHDuD3rM`,
                          rendersWithMotion: !0,
                          scopeId: `DOcnbBrYW`,
                          children: m(V, {
                            alignment: `center`,
                            direction: `left`,
                            fadeOptions: {
                              fadeAlpha: 0,
                              fadeContent: !1,
                              fadeInset: 0,
                              fadeWidth: 25,
                              overflow: !1,
                            },
                            gap: 16,
                            height: `100%`,
                            hoverFactor: 0,
                            id: `GmHDuD3rM`,
                            layoutId: `GmHDuD3rM`,
                            name: `Small`,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            sizingOptions: { heightType: !0, widthType: !0 },
                            slots: [
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg`,
                                  srcSet: `../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ.jpg 512w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-01f53f.jpg 1024w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-36bd10.jpg 2048w,../../assets/images/lgDPlvbPTyEOOLXS0GBOSP9uhQ-29527f.jpg 2400w`,
                                },
                                className: `framer-1lhd62x`,
                                "data-framer-name": `Image Six`,
                                layoutDependency: S,
                                layoutId: `oTY8guP2U`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg`,
                                  srcSet: `../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg.jpg 512w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-4113cf.jpg 1024w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-a2162c.jpg 2048w,../../assets/images/qKsftis7M2zDG2OxB6dyCkiLEg-0abeed.jpg 2400w`,
                                },
                                className: `framer-18r5987`,
                                "data-framer-name": `Image Seven`,
                                layoutDependency: S,
                                layoutId: `WCORjYwSl`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `center`,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg`,
                                  srcSet: `../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw.jpg 512w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-79e43a.jpg 1024w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-5a8585.jpg 2048w,../../assets/images/Pz9OGGcN0SqZPlGNoBMwrjO8tBw-f5bddf.jpg 2400w`,
                                },
                                className: `framer-99a3rp`,
                                "data-framer-name": `Image Eight`,
                                layoutDependency: S,
                                layoutId: `dLRWu896I`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg`,
                                  srcSet: `../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M.jpg 512w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-4d1462.jpg 1024w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-a08da1.jpg 2048w,../../assets/images/iEjsdzrnAMCk9ougeNe2IR74h7M-974d84.jpg 2400w`,
                                },
                                className: `framer-365ava`,
                                "data-framer-name": `Image Nine`,
                                layoutDependency: S,
                                layoutId: `pS1RF64pz`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                              m(L, {
                                background: {
                                  alt: `Hero Image`,
                                  fit: `fill`,
                                  pixelHeight: 1800,
                                  pixelWidth: 2400,
                                  positionX: `center`,
                                  positionY: `top`,
                                  sizes: `219.5041px`,
                                  src: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg`,
                                  srcSet: `../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q.jpg 512w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-fffcbd.jpg 1024w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-8f7f52.jpg 2048w,../../assets/images/akTkxwdolsYCj60akUEX1zkcF9Q-c5305c.jpg 2400w`,
                                },
                                className: `framer-1fgjmc4`,
                                "data-framer-name": `Image Ten`,
                                layoutDependency: S,
                                layoutId: `a7i3ic8BP`,
                                style: {
                                  borderBottomLeftRadius: 24,
                                  borderBottomRightRadius: 24,
                                  borderTopLeftRadius: 24,
                                  borderTopRightRadius: 24,
                                },
                              }),
                            ],
                            speed: 50,
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
          `.framer-P2Yjr.framer-10j3nsy, .framer-P2Yjr .framer-10j3nsy { display: block; }`,
          `.framer-P2Yjr.framer-zeauej { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1440px; }`,
          `.framer-P2Yjr .framer-1x9l1r9-container, .framer-P2Yjr .framer-sfx0q3-container { flex: none; height: 242px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-P2Yjr .framer-1yzqlw9, .framer-P2Yjr .framer-z6vnaq, .framer-P2Yjr .framer-zjkwqj, .framer-P2Yjr .framer-yutr94, .framer-P2Yjr .framer-1m949d3, .framer-P2Yjr .framer-11ul5j9, .framer-P2Yjr .framer-mb0x1h, .framer-P2Yjr .framer-sk7obj, .framer-P2Yjr .framer-13meyp9, .framer-P2Yjr .framer-14ejc28 { aspect-ratio: 1.371900826446281 / 1; height: var(--framer-aspect-ratio-supported, 242px); overflow: visible; position: relative; width: 332px; }`,
          `.framer-P2Yjr .framer-1ksbgd9-container, .framer-P2Yjr .framer-8zjl2n-container { flex: none; height: 104px; position: relative; width: 100%; }`,
          `.framer-P2Yjr .framer-i8rhan, .framer-P2Yjr .framer-1c9upqe, .framer-P2Yjr .framer-19dubr5, .framer-P2Yjr .framer-4edz3e, .framer-P2Yjr .framer-rbfwul, .framer-P2Yjr .framer-h2xlb2, .framer-P2Yjr .framer-wu9e50, .framer-P2Yjr .framer-1ulq3i1, .framer-P2Yjr .framer-mxb5cc, .framer-P2Yjr .framer-1bvr53d { aspect-ratio: 1.371900826446281 / 1; height: var(--framer-aspect-ratio-supported, 104px); overflow: visible; position: relative; width: 143px; }`,
          `.framer-P2Yjr .framer-fd4s51-container, .framer-P2Yjr .framer-26ywee-container { flex: none; height: 66px; position: relative; width: 100%; }`,
          `.framer-P2Yjr .framer-15hfytm, .framer-P2Yjr .framer-f131zz, .framer-P2Yjr .framer-a55l5z, .framer-P2Yjr .framer-33ru4n, .framer-P2Yjr .framer-d373ep, .framer-P2Yjr .framer-1li4v32, .framer-P2Yjr .framer-a81m2f, .framer-P2Yjr .framer-1hqlypb, .framer-P2Yjr .framer-l03a3e, .framer-P2Yjr .framer-1mmajoz { aspect-ratio: 1.371900826446281 / 1; height: var(--framer-aspect-ratio-supported, 66px); overflow: visible; position: relative; width: 90px; }`,
          `.framer-P2Yjr .framer-5fqndz-container, .framer-P2Yjr .framer-8wjhxb-container { flex: none; height: 160px; position: relative; width: 100%; }`,
          `.framer-P2Yjr .framer-1cz2yo3, .framer-P2Yjr .framer-uaxyef, .framer-P2Yjr .framer-1kziwlt, .framer-P2Yjr .framer-5a0vfb, .framer-P2Yjr .framer-6b0e1j, .framer-P2Yjr .framer-1lhd62x, .framer-P2Yjr .framer-18r5987, .framer-P2Yjr .framer-99a3rp, .framer-P2Yjr .framer-365ava, .framer-P2Yjr .framer-1fgjmc4 { aspect-ratio: 1.371900826446281 / 1; height: var(--framer-aspect-ratio-supported, 160px); overflow: visible; position: relative; width: 220px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-P2Yjr.framer-zeauej { gap: 0px; } .framer-P2Yjr.framer-zeauej > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-P2Yjr.framer-zeauej > :first-child { margin-top: 0px; } .framer-P2Yjr.framer-zeauej > :last-child { margin-bottom: 0px; } }`,
          `.framer-P2Yjr.framer-v-9r36ps.framer-zeauej { width: 810px; }`,
          `.framer-P2Yjr.framer-v-flm9f4.framer-zeauej, .framer-P2Yjr.framer-v-wdfp3p.framer-zeauej { gap: 7px; width: 516px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-P2Yjr.framer-v-flm9f4.framer-zeauej { gap: 0px; } .framer-P2Yjr.framer-v-flm9f4.framer-zeauej > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-P2Yjr.framer-v-flm9f4.framer-zeauej > :first-child { margin-top: 0px; } .framer-P2Yjr.framer-v-flm9f4.framer-zeauej > :last-child { margin-bottom: 0px; } }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-P2Yjr.framer-v-wdfp3p.framer-zeauej { gap: 0px; } .framer-P2Yjr.framer-v-wdfp3p.framer-zeauej > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-P2Yjr.framer-v-wdfp3p.framer-zeauej > :first-child { margin-top: 0px; } .framer-P2Yjr.framer-v-wdfp3p.framer-zeauej > :last-child { margin-bottom: 0px; } }`,
        ],
        `framer-P2Yjr`
      )),
      (Mt.displayName = `Hero Ticker`),
      (Mt.defaultProps = { height: 500, width: 1440 }),
      M(Mt, {
        variant: {
          options: [`apmwtwB94`, `uZTGSSaic`, `VnCcLkvvk`, `zYHRnzGxz`],
          optionTitles: [`Primary`, `Small`, `Pricing`, `Pricing - Small`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      I(Mt, [{ explicitInter: !0, fonts: [] }, ...St], { supportsExplicitInterCodegen: !0 }));
  });
function Pt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Q,
  Gt = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      he(),
      ye(),
      je(),
      (Ft = [`oG9ZNCuNI`, `pmqchV8h8`]),
      (It = `framer-NpazZ`),
      (Lt = { oG9ZNCuNI: `framer-v-267zhb`, pmqchV8h8: `framer-v-154qutp` }),
      (Rt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (zt = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Bt = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (Vt = D.create(a)),
      (Ht = { Primary: `oG9ZNCuNI`, Small: `pmqchV8h8` }),
      (Ut = ({
        height: e,
        icon: t,
        id: n,
        reviewText: r,
        userName: i,
        userPosition: ee,
        width: a,
        ...o
      }) => ({
        ...o,
        AsYpL9IuO: t ??
          o.AsYpL9IuO ?? { src: `../../assets/images/QZDGJrEBgtlcDQzUZ4qH9SSso2g.png` },
        nbeI0lvzZ: i ?? o.nbeI0lvzZ ?? `Sophia Jordan`,
        nSBYREM8I:
          r ??
          o.nSBYREM8I ??
          `The templates and components from hubstore have completely transformed my workflow. What used to take me hours now only takes minutes. The designs are beautiful, responsive, and easy to customize. As a freelance designer, having access to such high-quality Framer components has been a game changer for delivering projects faster. Highly recommend it to any Framer user!"`,
        variant: Ht[o.variant] ?? o.variant ?? `oG9ZNCuNI`,
        YX28chkvJ: ee ?? o.YX28chkvJ ?? `Chief Technology Officer`,
      })),
      (Wt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Q = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: o } = de(),
            s = ue(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              AsYpL9IuO: f,
              nSBYREM8I: h,
              nbeI0lvzZ: _,
              YX28chkvJ: y,
              ...b
            } = Ut(e),
            {
              baseVariant: te,
              classNames: ne,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = k({
              cycleOrder: Ft,
              defaultVariant: `oG9ZNCuNI`,
              ref: r,
              variant: d,
              variantClassNames: Lt,
            }),
            j = Wt(e, O),
            M = A(It, xe, ve, Pe);
          return m(re, {
            id: u ?? i,
            children: m(Vt, {
              animate: O,
              initial: !1,
              children: m(Bt, {
                value: Rt,
                children: g(D.div, {
                  ...b,
                  ...S,
                  className: A(M, `framer-267zhb`, l, ne),
                  "data-border": !0,
                  "data-framer-name": `Primary`,
                  layoutDependency: j,
                  layoutId: `oG9ZNCuNI`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                    borderBottomLeftRadius: 40,
                    borderBottomRightRadius: 40,
                    borderTopLeftRadius: 40,
                    borderTopRightRadius: 40,
                    ...c,
                  },
                  variants: {
                    pmqchV8h8: {
                      borderBottomLeftRadius: 20,
                      borderBottomRightRadius: 20,
                      borderTopLeftRadius: 20,
                      borderTopRightRadius: 20,
                    },
                  },
                  ...Pt({ pmqchV8h8: { "data-framer-name": `Small` } }, te, C),
                  children: [
                    m(L, {
                      background: {
                        alt: ``,
                        fit: `fit`,
                        loading: ie((s?.y || 0) + 59 + 0),
                        pixelHeight: 44,
                        pixelWidth: 198,
                        sizes: `197px`,
                        ...zt(f),
                        positionX: `center`,
                        positionY: `center`,
                      },
                      className: `framer-qypdsp`,
                      layoutDependency: j,
                      layoutId: `WBIb_383c`,
                      ...Pt(
                        {
                          pmqchV8h8: {
                            background: {
                              alt: ``,
                              fit: `fit`,
                              loading: ie((s?.y || 0) + 24 + 0),
                              pixelHeight: 44,
                              pixelWidth: 198,
                              sizes: `197px`,
                              ...zt(f),
                              positionX: `center`,
                              positionY: `center`,
                            },
                          },
                        },
                        te,
                        C
                      ),
                    }),
                    g(D.div, {
                      className: `framer-1tkeh0c`,
                      "data-framer-name": `Card Body`,
                      layoutDependency: j,
                      layoutId: `neHNkO6xq`,
                      children: [
                        m(ae, {
                          __fromCanvasComponent: !0,
                          children: m(a, {
                            children: m(D.p, {
                              className: `framer-styles-preset-1n6rbyf`,
                              "data-styles-preset": `ojujRXx3G`,
                              style: {
                                "--framer-text-alignment": `left`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                              },
                              children: `The templates and components from Framertemp have completely transformed my workflow. What used to take me hours now only takes minutes. The designs are beautiful, responsive, and easy to customize. As a freelance designer, having access to such high-quality Framer components has been a game changer for delivering projects faster. Highly recommend it to any Framer user!"`,
                            }),
                          }),
                          className: `framer-1afqdxe`,
                          "data-framer-name": `Review Text`,
                          fonts: [`Inter`],
                          layoutDependency: j,
                          layoutId: `sDDfzSrf0`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: h,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        g(D.div, {
                          className: `framer-lnk6am`,
                          "data-framer-name": `User Info Block`,
                          layoutDependency: j,
                          layoutId: `WlpY3FLSe`,
                          children: [
                            m(ae, {
                              __fromCanvasComponent: !0,
                              children: m(a, {
                                children: m(D.h6, {
                                  className: `framer-styles-preset-vlman3`,
                                  "data-styles-preset": `nWUDA6LQ3`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1w1cjl5, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Sophia Jordan`,
                                }),
                              }),
                              className: `framer-jdio3h`,
                              "data-framer-name": `Name`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `JolU_ZLiX`,
                              style: {
                                "--extracted-1w1cjl5": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: _,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            m(ae, {
                              __fromCanvasComponent: !0,
                              children: m(a, {
                                children: m(D.p, {
                                  className: `framer-styles-preset-1pumtl1`,
                                  "data-styles-preset": `wEX21mXRe`,
                                  style: {
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                  },
                                  children: `Chief Technology Officer`,
                                }),
                              }),
                              className: `framer-rlk6fb`,
                              "data-framer-name": `Position`,
                              fonts: [`Inter`],
                              layoutDependency: j,
                              layoutId: `NLTTS0D0c`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: y,
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
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-NpazZ.framer-1uh4qu2, .framer-NpazZ .framer-1uh4qu2 { display: block; }`,
          `.framer-NpazZ.framer-267zhb { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 43px; height: min-content; justify-content: flex-start; overflow: visible; padding: 59px 72px 40px 72px; position: relative; width: 859px; }`,
          `.framer-NpazZ .framer-qypdsp { flex: none; height: 42px; overflow: hidden; position: relative; width: 197px; }`,
          `.framer-NpazZ .framer-1tkeh0c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-NpazZ .framer-1afqdxe, .framer-NpazZ .framer-jdio3h, .framer-NpazZ .framer-rlk6fb { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-NpazZ .framer-lnk6am { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NpazZ.framer-267zhb, .framer-NpazZ .framer-1tkeh0c, .framer-NpazZ .framer-lnk6am { gap: 0px; } .framer-NpazZ.framer-267zhb > * { margin: 0px; margin-bottom: calc(42.85px / 2); margin-top: calc(42.85px / 2); } .framer-NpazZ.framer-267zhb > :first-child, .framer-NpazZ .framer-1tkeh0c > :first-child, .framer-NpazZ .framer-lnk6am > :first-child { margin-top: 0px; } .framer-NpazZ.framer-267zhb > :last-child, .framer-NpazZ .framer-1tkeh0c > :last-child, .framer-NpazZ .framer-lnk6am > :last-child { margin-bottom: 0px; } .framer-NpazZ .framer-1tkeh0c > * { margin: 0px; margin-bottom: calc(32px / 2); margin-top: calc(32px / 2); } .framer-NpazZ .framer-lnk6am > * { margin: 0px; margin-bottom: calc(8px / 2); margin-top: calc(8px / 2); } }`,
          `.framer-NpazZ.framer-v-154qutp.framer-267zhb { gap: 24px; padding: 24px 24px 20px 24px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-NpazZ.framer-v-154qutp.framer-267zhb { gap: 0px; } .framer-NpazZ.framer-v-154qutp.framer-267zhb > * { margin: 0px; margin-bottom: calc(24px / 2); margin-top: calc(24px / 2); } .framer-NpazZ.framer-v-154qutp.framer-267zhb > :first-child { margin-top: 0px; } .framer-NpazZ.framer-v-154qutp.framer-267zhb > :last-child { margin-bottom: 0px; } }`,
          ...be,
          ...ge,
          ...Me,
          `.framer-NpazZ[data-border="true"]::after, .framer-NpazZ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-NpazZ`
      )),
      (Q.displayName = `Testimonial Card`),
      (Q.defaultProps = { height: 436, width: 859 }),
      M(Q, {
        variant: {
          options: [`oG9ZNCuNI`, `pmqchV8h8`],
          optionTitles: [`Primary`, `Small`],
          title: `Variant`,
          type: R.Enum,
        },
        AsYpL9IuO: {
          __defaultAssetReference: `data:framer/asset-reference,QZDGJrEBgtlcDQzUZ4qH9SSso2g.png?originalFilename=Logo+02%402x.png&preferredSize=auto`,
          title: `Icon`,
          type: R.ResponsiveImage,
        },
        nSBYREM8I: {
          defaultValue: `The templates and components from hubstore have completely transformed my workflow. What used to take me hours now only takes minutes. The designs are beautiful, responsive, and easy to customize. As a freelance designer, having access to such high-quality Framer components has been a game changer for delivering projects faster. Highly recommend it to any Framer user!"`,
          displayTextArea: !1,
          title: `Review Text`,
          type: R.String,
        },
        nbeI0lvzZ: {
          defaultValue: `Sophia Jordan`,
          displayTextArea: !1,
          title: `User Name`,
          type: R.String,
        },
        YX28chkvJ: {
          defaultValue: `Chief Technology Officer`,
          displayTextArea: !1,
          title: `User Position`,
          type: R.String,
        },
      }),
      I(
        Q,
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
          ...P(B),
          ...P(_e),
          ...P(Ne),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Kt(e, t) {
  let n,
    r = e.current;
  return (
    Object.defineProperty(e, "current", {
      get() {
        return r;
      },
      set(e) {
        if (((r = e), e === null)) {
          t.abort();
          return;
        }
        n?.(e);
      },
      configurable: !0,
    }),
    r ||
      new Promise((e, r) => {
        ((n = e), t.signal.addEventListener(`abort`, r));
      }).catch(() => {})
  );
}
function $(e) {
  let {
      slots: t = [],
      startFrom: n,
      direction: a,
      effectsOptions: o,
      autoPlayControl: s,
      dragControl: f,
      alignment: h,
      gap: _,
      padding: v,
      paddingPerSide: te,
      paddingTop: S,
      paddingRight: re,
      paddingBottom: E,
      paddingLeft: O,
      itemAmount: k,
      fadeOptions: A,
      intervalControl: ie,
      transitionControl: j,
      arrowOptions: M,
      borderRadius: ae,
      progressOptions: oe,
      style: N,
    } = e,
    {
      effectsOpacity: P,
      effectsScale: ce,
      effectsRotate: le,
      effectsPerspective: ue,
      effectsHover: F,
      playOffscreen: I,
    } = o,
    { fadeContent: L, overflow: R, fadeWidth: de, fadeInset: fe, fadeAlpha: pe } = A,
    {
      showMouseControls: me,
      arrowSize: z,
      arrowRadius: he,
      arrowFill: ge,
      leftArrow: _e,
      rightArrow: ve,
      arrowShouldSpace: ye = !0,
      arrowShouldFadeIn: be = !1,
      arrowPosition: B,
      arrowPadding: xe,
      arrowGap: Se,
      arrowPaddingTop: Ce,
      arrowPaddingRight: we,
      arrowPaddingBottom: Te,
      arrowPaddingLeft: Ee,
    } = M,
    {
      showProgressDots: Oe,
      dotSize: Ae,
      dotsInset: V,
      dotsRadius: je,
      dotsPadding: Me,
      dotsGap: Ne,
      dotsFill: Pe,
      dotsBackground: Fe,
      dotsActiveOpacity: Ie,
      dotsOpacity: Le,
      dotsBlur: Re,
    } = oe,
    ze = te ? `${S}px ${re}px ${E}px ${O}px` : `${v}px`,
    H = se.current() === se.canvas,
    Be = t.filter(Boolean),
    U = c.count(Be) > 0,
    W = a === `left` || a === `right`,
    Ve = a === `right` || a === `bottom`;
  if (!U)
    return g(`section`, {
      style: Yt,
      children: [
        m(`div`, { style: Xt, children: `⭐️` }),
        m(`p`, { style: Zt, children: `Connect to Content` }),
        m(`p`, {
          style: Qt,
          children: `Add layers or components to make infinite auto-playing slideshows.`,
        }),
      ],
    });
  let He = p(null),
    Ue = l(() => [{ current: null }, { current: null }], [Be]),
    We = p(void 0),
    [G, Ge] = u({
      parent: null,
      children: null,
      item: null,
      itemWidth: null,
      itemHeight: null,
      viewportLength: null,
    }),
    [Ke, qe] = u(!1),
    [Je, K] = u(s),
    [Ye, q] = u(!1),
    [Xe, Ze] = u(!1),
    Qe = [],
    $e = 4;
  H && ($e = 1);
  let et = r(() => {
      if (!He.current) return;
      let e = Ue[0].current,
        t = Ue[1].current,
        n = W ? He.current.offsetWidth : He.current.offsetHeight,
        r = e ? (W ? e.offsetLeft : e.offsetTop) : 0,
        ee = (t ? (W ? t.offsetLeft + t.offsetWidth : t.offsetTop + t.offsetHeight) : 0) - r + _,
        a = e ? (W ? e.offsetWidth : e.offsetHeight) : 0,
        o = e ? e.offsetWidth : 0,
        s = e ? e.offsetHeight : 0,
        c = W
          ? Math.max(
              document.documentElement.clientWidth || 0,
              i.innerWidth || 0,
              He.current.offsetWidth
            )
          : Math.max(
              document.documentElement.clientHeight || 0,
              i.innerHeight || 0,
              He.current.offsetHeight
            );
      Ge({ parent: n, children: ee, item: a, itemWidth: o, itemHeight: s, viewportLength: c });
    }, []),
    tt = r(async () => {
      let e = new AbortController(),
        [t, n] = Ue;
      if (!H && (!t.current || !n.current))
        try {
          await Promise.all([Kt(t, e), Kt(n, e)]);
        } catch {
          e.abort();
        }
      w.read(et, !1, !0);
    }, [et]);
  d(() => {
    tt();
  }, [k]);
  let nt = p(!0);
  (ee(
    () =>
      ke(He.current, ({ contentSize: e }) => {
        (!nt.current && (e.width || e.height) && (tt(), y(() => Ze(!0))), (nt.current = !1));
      }),
    []
  ),
    ee(() => {
      if (Xe) {
        let e = setTimeout(() => y(() => Ze(!1)), 500);
        return () => clearTimeout(e);
      }
    }, [Xe]));
  let J = Be?.length,
    rt = H ? 0 : G?.children,
    it = G?.item + _,
    at = n * it,
    [ot, Y] = u(n + J),
    [X, st] = u(!1);
  H && ot !== n && Y(n);
  let Z = p(null),
    ct = ne(Z),
    lt = De() && ct,
    ut = Ve ? 1 : -1,
    dt = b(rt),
    ft = W ? -n * (G?.itemWidth + _) : -n * (G?.itemHeight + _),
    pt = () => ut * ot * it,
    mt = H
      ? 0
      : T(dt, (e) => {
          let t = x(-rt, -rt * 2, e);
          return isNaN(t) ? 0 : t;
        }),
    ht = x(0, J, ot),
    gt = x(0, -J, ot);
  d(() => {
    G?.children !== null && !nt.current && Xe && dt.set(pt());
  }, [G, rt, ut, at, ot, it, Xe]);
  let _t = () => {
      H ||
        !U ||
        !G.parent ||
        X ||
        (dt.get() !== pt() && C(dt, pt(), j),
        s &&
          Je &&
          (I || lt) &&
          (We.current = setTimeout(() => {
            (y(() => Y((e) => e + 1)), _t());
          }, ie * 1e3)));
    },
    vt = (e, t = !1) => {
      Ve
        ? t
          ? y(() => Y((t) => t - e))
          : Y((t) => t - e)
        : t
          ? y(() => Y((t) => t + e))
          : Y((t) => t + e);
    },
    yt = (e) => {
      let t = x(0, J, ot),
        n = x(0, -J, ot),
        r = e - t,
        i = e - Math.abs(n);
      y(Ve ? () => Y((e) => e - i) : () => Y((e) => e + r));
    },
    bt = () => {
      y(() => st(!0));
    },
    xt = (e, { offset: t, velocity: n }) => {
      y(() => st(!1));
      let r = W ? t.x : t.y,
        i = W ? n.x : n.y,
        ee = r < -G.item / 2,
        a = r > G.item / 2,
        o = Math.round(Math.abs(r) / G.item),
        s = o === 0 ? 1 : o;
      i > 200 ? vt(-s, !0) : i < -200 ? vt(s, !0) : (ee && vt(o, !0), a && vt(-o, !0));
    };
  ee(() => {
    if (!(!lt || Xe)) return (_t(), () => We.current && clearTimeout(We.current));
  }, [Qe, lt, Xe]);
  let St = 0,
    Ct = `calc(${100 / k}% - ${_}px + ${_ / k}px)`;
  for (let e = 0; e < $e; e++)
    Qe = Qe.concat(
      c.map(Be, (t, n) => {
        let r;
        return (
          e === 0 && (n === 0 && (r = Ue[0]), n === Be.length - 1 && (r = Ue[1])),
          m(
            nn,
            {
              ref: r,
              slideKey: e + n + `lg`,
              index: e,
              width: W && k > 1 ? Ct : `100%`,
              height: W ? `100%` : k > 1 ? Ct : `100%`,
              size: G,
              child: t,
              numChildren: Be?.length,
              wrappedValue: mt,
              childCounter: St++,
              gap: _,
              isCanvas: H,
              isHorizontal: W,
              effectsOpacity: P,
              effectsScale: ce,
              effectsRotate: le,
              children: e + n,
            },
            e + n + `lg`
          )
        );
      })
    );
  let wt = W ? `to right` : `to bottom`,
    Tt = de / 2,
    Et = 100 - de / 2,
    Dt = `linear-gradient(${wt}, rgba(0, 0, 0, ${pe}) ${tn(fe, 0, Tt)}%, rgba(0, 0, 0, 1) ${Tt}%, rgba(0, 0, 0, 1) ${Et}%, rgba(0, 0, 0, ${pe}) ${100 - fe}%)`,
    Ot = [],
    kt = {};
  if (Oe) {
    for (let e = 0; e < Be?.length; e++)
      Ot.push(
        m(
          rn,
          {
            dotStyle: { ...on, width: Ae, height: Ae, backgroundColor: Pe },
            buttonStyle: $t,
            selectedOpacity: Ie,
            opacity: Le,
            onClick: () => yt(e),
            wrappedIndex: ht,
            wrappedIndexInverted: gt,
            total: J,
            index: e,
            gap: Ne,
            padding: Me,
            isHorizontal: W,
            isInverted: Ve,
          },
          e
        )
      );
    Re > 0 && (kt.backdropFilter = kt.WebkitBackdropFilter = `blur(${Re}px)`);
  }
  let At = f
      ? {
          drag: W ? `x` : `y`,
          onDragStart: bt,
          onDragEnd: xt,
          dragDirectionLock: !0,
          values: { x: dt, y: dt },
          dragMomentum: !1,
        }
      : {},
    jt = B === `top-left` || B === `top-mid` || B === `top-right`,
    Mt = B === `bottom-left` || B === `bottom-mid` || B === `bottom-right`,
    Nt = B === `top-left` || B === `bottom-left`,
    Pt = B === `top-right` || B === `bottom-right`,
    Ft = B === `top-mid` || B === `bottom-mid` || B === `auto`;
  return g(`section`, {
    style: {
      ...Jt,
      padding: ze,
      WebkitMaskImage: L ? Dt : void 0,
      maskImage: L ? Dt : void 0,
      opacity: G?.item === null ? qt : 1,
      userSelect: `none`,
    },
    onMouseEnter: () => {
      (qe(!0), F || K(!1));
    },
    onMouseLeave: () => {
      (qe(!1), F || K(!0));
    },
    onMouseDown: (e) => {
      (e.preventDefault(), y(() => q(!0)));
    },
    onMouseUp: () => y(() => q(!1)),
    ref: Z,
    children: [
      m(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          margin: 0,
          padding: `inherit`,
          position: `absolute`,
          inset: 0,
          overflow: R ? `visible` : `hidden`,
          borderRadius: ae,
          userSelect: `none`,
          perspective: H ? `none` : ue,
        },
        children: m(D.ul, {
          ref: He,
          ...At,
          style: {
            ...Jt,
            gap: _,
            placeItems: h,
            x: W ? (H ? ft : mt) : 0,
            y: W ? 0 : H ? ft : mt,
            flexDirection: W ? `row` : `column`,
            transformStyle: le !== 0 && !H ? `preserve-3d` : void 0,
            cursor: f ? (Ye ? `grabbing` : `grab`) : `auto`,
            userSelect: `none`,
            ...N,
          },
          children: Qe,
        }),
      }),
      g(`fieldset`, {
        style: { ...en },
        "aria-label": `Slideshow pagination controls`,
        className: `framer--slideshow-controls`,
        children: [
          g(D.div, {
            style: {
              position: `absolute`,
              display: `flex`,
              flexDirection: W ? `row` : `column`,
              justifyContent: ye ? `space-between` : `center`,
              gap: ye ? `unset` : Se,
              opacity: be ? qt : 1,
              alignItems: `center`,
              inset: xe,
              top: ye ? xe : jt ? Ce : `unset`,
              left: ye ? xe : Nt ? Ee : Ft ? 0 : `unset`,
              right: ye ? xe : Pt ? we : Ft ? 0 : `unset`,
              bottom: ye ? xe : Mt ? Te : `unset`,
            },
            animate: be && { opacity: Ke ? 1 : qt },
            transition: j,
            children: [
              m(D.button, {
                type: `button`,
                style: {
                  ...$t,
                  backgroundColor: ge,
                  width: z,
                  height: z,
                  borderRadius: he,
                  rotate: W ? 0 : 90,
                  display: me ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => vt(-1, !0),
                "aria-label": `Previous`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: m(`img`, {
                  decoding: `async`,
                  width: z,
                  height: z,
                  src: _e || `../../assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
                  alt: `Back Arrow`,
                }),
              }),
              m(D.button, {
                type: `button`,
                style: {
                  ...$t,
                  backgroundColor: ge,
                  width: z,
                  height: z,
                  borderRadius: he,
                  rotate: W ? 0 : 90,
                  display: me ? `block` : `none`,
                  pointerEvents: `auto`,
                },
                onClick: () => vt(1, !0),
                "aria-label": `Next`,
                whileTap: { scale: 0.9 },
                transition: { duration: 0.15 },
                children: m(`img`, {
                  decoding: `async`,
                  width: z,
                  height: z,
                  src: ve || `../../assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`,
                  alt: `Next Arrow`,
                }),
              }),
            ],
          }),
          Ot.length > 1
            ? m(`div`, {
                style: {
                  ...an,
                  left: W ? `50%` : V,
                  top: W ? `unset` : `50%`,
                  transform: W ? `translateX(-50%)` : `translateY(-50%)`,
                  flexDirection: W ? `row` : `column`,
                  bottom: W ? V : `unset`,
                  borderRadius: je,
                  backgroundColor: Fe,
                  userSelect: `none`,
                  ...kt,
                },
                children: Ot,
              })
            : null,
        ],
      }),
    ],
  });
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
  nn,
  rn,
  an,
  on,
  sn = e(() => {
    (t(),
      h(),
      Ee(),
      ce(),
      E(),
      n(),
      Ae(),
      (qt = 0.001),
      ($.defaultProps = {
        direction: `left`,
        dragControl: !1,
        startFrom: 0,
        itemAmount: 1,
        infinity: !0,
        gap: 10,
        padding: 10,
        autoPlayControl: !0,
        effectsOptions: {
          effectsOpacity: 1,
          effectsScale: 1,
          effectsRotate: 0,
          effectsPerspective: 1200,
          effectsHover: !0,
          playOffscreen: !1,
        },
        transitionControl: { type: `spring`, stiffness: 200, damping: 40 },
        fadeOptions: { fadeContent: !1, overflow: !1, fadeWidth: 25, fadeAlpha: 0, fadeInset: 0 },
        arrowOptions: {
          showMouseControls: !0,
          arrowShouldFadeIn: !1,
          arrowShouldSpace: !0,
          arrowFill: `rgba(0,0,0,0.2)`,
          arrowSize: 40,
        },
        progressOptions: { showProgressDots: !0 },
      }),
      M($, {
        slots: { type: R.Array, title: `Content`, control: { type: R.ComponentInstance } },
        direction: {
          type: R.Enum,
          title: `Direction`,
          options: [`left`, `right`, `top`, `bottom`],
          optionIcons: [`direction-left`, `direction-right`, `direction-up`, `direction-down`],
          optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
          displaySegmentedControl: !0,
          defaultValue: $.defaultProps.direction,
        },
        autoPlayControl: { type: R.Boolean, title: `Auto Play`, defaultValue: !0 },
        intervalControl: {
          type: R.Number,
          title: `Interval`,
          defaultValue: 1.5,
          min: 0.5,
          max: 10,
          step: 0.1,
          displayStepper: !0,
          unit: `s`,
          hidden: (e) => !e.autoPlayControl,
        },
        dragControl: { type: R.Boolean, title: `Draggable`, defaultValue: !1 },
        startFrom: {
          type: R.Number,
          title: `Current`,
          min: 0,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.startFrom,
        },
        effectsOptions: {
          type: R.Object,
          title: `Effects`,
          controls: {
            effectsOpacity: {
              type: R.Number,
              title: `Opacity`,
              defaultValue: $.defaultProps.effectsOptions.effectsOpacity,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsScale: {
              type: R.Number,
              title: `Scale`,
              defaultValue: $.defaultProps.effectsOptions.effectsScale,
              min: 0,
              max: 1,
              step: 0.01,
              displayStepper: !0,
            },
            effectsPerspective: {
              type: R.Number,
              title: `Perspective`,
              defaultValue: $.defaultProps.effectsOptions.effectsPerspective,
              min: 200,
              max: 2e3,
              step: 1,
            },
            effectsRotate: {
              type: R.Number,
              title: `Rotate`,
              defaultValue: $.defaultProps.effectsOptions.effectsRotate,
              min: -180,
              max: 180,
              step: 1,
            },
            effectsHover: {
              type: R.Boolean,
              title: `On Hover`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.effectsHover,
            },
            playOffscreen: {
              type: R.Boolean,
              title: `Offscreen`,
              enabledTitle: `Play`,
              disabledTitle: `Pause`,
              defaultValue: $.defaultProps.effectsOptions.playOffscreen,
            },
          },
        },
        alignment: {
          type: R.Enum,
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
        itemAmount: {
          type: R.Number,
          title: `Items`,
          min: 1,
          max: 10,
          displayStepper: !0,
          defaultValue: $.defaultProps.itemAmount,
        },
        gap: { type: R.Number, title: `Gap`, min: 0 },
        padding: {
          title: `Padding`,
          type: R.FusedNumber,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`Padding`, `Padding per side`],
          defaultValue: 0,
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: R.Number,
          title: `Radius`,
          min: 0,
          max: 500,
          displayStepper: !0,
          defaultValue: 0,
        },
        transitionControl: {
          type: R.Transition,
          defaultValue: $.defaultProps.transitionControl,
          title: `Transition`,
        },
        fadeOptions: {
          type: R.Object,
          title: `Clipping`,
          controls: {
            fadeContent: { type: R.Boolean, title: `Fade`, defaultValue: !1 },
            overflow: {
              type: R.Boolean,
              title: `Overflow`,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              defaultValue: !1,
              hidden(e) {
                return e.fadeContent === !0;
              },
            },
            fadeWidth: {
              type: R.Number,
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
              type: R.Number,
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
              type: R.Number,
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
        arrowOptions: {
          type: R.Object,
          title: `Arrows`,
          controls: {
            showMouseControls: {
              type: R.Boolean,
              title: `Show`,
              defaultValue: $.defaultProps.arrowOptions.showMouseControls,
            },
            arrowFill: {
              type: R.Color,
              title: `Fill`,
              hidden: (e) => !e.showMouseControls,
              defaultValue: $.defaultProps.arrowOptions.arrowFill,
            },
            leftArrow: { type: R.Image, title: `Previous`, hidden: (e) => !e.showMouseControls },
            rightArrow: { type: R.Image, title: `Next`, hidden: (e) => !e.showMouseControls },
            arrowSize: {
              type: R.Number,
              title: `Size`,
              min: 0,
              max: 200,
              displayStepper: !0,
              defaultValue: $.defaultProps.arrowOptions.arrowSize,
              hidden: (e) => !e.showMouseControls,
            },
            arrowRadius: {
              type: R.Number,
              title: `Radius`,
              min: 0,
              max: 500,
              defaultValue: 40,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldFadeIn: {
              type: R.Boolean,
              title: `Fade In`,
              defaultValue: !1,
              hidden: (e) => !e.showMouseControls,
            },
            arrowShouldSpace: {
              type: R.Boolean,
              title: `Distance`,
              enabledTitle: `Space`,
              disabledTitle: `Group`,
              defaultValue: $.defaultProps.arrowOptions.arrowShouldSpace,
              hidden: (e) => !e.showMouseControls,
            },
            arrowPosition: {
              type: R.Enum,
              title: `Position`,
              options: [
                `auto`,
                `top-left`,
                `top-mid`,
                `top-right`,
                `bottom-left`,
                `bottom-mid`,
                `bottom-right`,
              ],
              optionTitles: [
                `Center`,
                `Top Left`,
                `Top Middle`,
                `Top Right`,
                `Bottom Left`,
                `Bottom Middle`,
                `Bottom Right`,
              ],
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
            arrowPadding: {
              type: R.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 20,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || !e.arrowShouldSpace,
            },
            arrowPaddingTop: {
              type: R.Number,
              title: `Top`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `bottom-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-right`,
            },
            arrowPaddingBottom: {
              type: R.Number,
              title: `Bottom`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-right`,
            },
            arrowPaddingRight: {
              type: R.Number,
              title: `Right`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-left` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-left` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowPaddingLeft: {
              type: R.Number,
              title: `Left`,
              min: -500,
              max: 500,
              defaultValue: 0,
              displayStepper: !0,
              hidden: (e) =>
                !e.showMouseControls ||
                e.arrowShouldSpace ||
                e.arrowPosition === `auto` ||
                e.arrowPosition === `top-right` ||
                e.arrowPosition === `top-mid` ||
                e.arrowPosition === `bottom-right` ||
                e.arrowPosition === `bottom-mid`,
            },
            arrowGap: {
              type: R.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showMouseControls || e.arrowShouldSpace,
            },
          },
        },
        progressOptions: {
          type: R.Object,
          title: `Dots`,
          controls: {
            showProgressDots: { type: R.Boolean, title: `Show`, defaultValue: !1 },
            dotSize: {
              type: R.Number,
              title: `Size`,
              min: 1,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsInset: {
              type: R.Number,
              title: `Inset`,
              min: -100,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsGap: {
              type: R.Number,
              title: `Gap`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsPadding: {
              type: R.Number,
              title: `Padding`,
              min: 0,
              max: 100,
              defaultValue: 10,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsFill: {
              type: R.Color,
              title: `Fill`,
              defaultValue: `#fff`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBackground: {
              type: R.Color,
              title: `Backdrop`,
              defaultValue: `rgba(0,0,0,0.2)`,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsRadius: {
              type: R.Number,
              title: `Radius`,
              min: 0,
              max: 200,
              defaultValue: 50,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsOpacity: {
              type: R.Number,
              title: `Opacity`,
              min: 0,
              max: 1,
              defaultValue: 0.5,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsActiveOpacity: {
              type: R.Number,
              title: `Current`,
              min: 0,
              max: 1,
              defaultValue: 1,
              step: 0.1,
              displayStepper: !0,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
            dotsBlur: {
              type: R.Number,
              title: `Blur`,
              min: 0,
              max: 50,
              defaultValue: 0,
              step: 1,
              hidden: (e) => !e.showProgressDots || e.showScrollbar,
            },
          },
        },
      }),
      (Jt = {
        display: `flex`,
        flexDirection: `row`,
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
      (Yt = {
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
      (Xt = { fontSize: 32, marginBottom: 10 }),
      (Zt = { margin: 0, marginBottom: 10, fontWeight: 600, textAlign: `center` }),
      (Qt = { margin: 0, opacity: 0.7, maxWidth: 180, lineHeight: 1.5, textAlign: `center` }),
      ($t = {
        border: `none`,
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        background: `transparent`,
        cursor: `pointer`,
        margin: 0,
        padding: 0,
      }),
      (en = {
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
        position: `absolute`,
        pointerEvents: `none`,
        userSelect: `none`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: 0,
        padding: 0,
        margin: 0,
      }),
      (tn = (e, t, n) => Math.min(Math.max(e, t), n)),
      (nn = f(
        _(function (e, t) {
          let {
              slideKey: n,
              width: r,
              height: i,
              child: a,
              size: s,
              gap: c,
              wrappedValue: l,
              numChildren: u,
              childCounter: d,
              isCanvas: f,
              effects: h,
              effectsOpacity: g,
              effectsScale: _,
              effectsRotate: v,
              isHorizontal: y,
              isLast: b,
              index: ne,
            } = e,
            x = p(),
            S = (s?.item + c) * d,
            C = [-s?.item, 0, s?.parent - s?.item + c, s?.parent].map((e) => e - S),
            w = !f && T(l, C, [-v, 0, 0, v]),
            E = !f && T(l, C, [v, 0, 0, -v]),
            D = !f && T(l, C, [g, 1, 1, g]),
            O = !f && T(l, C, [_, 1, 1, _]),
            k = !f && T(l, C, [1, 1, 0, 0]),
            A = !f && T(l, (e) => e >= C[1] && e <= C[2]);
          ee(() => {
            if (A)
              return A.on(`change`, (e) => {
                (t?.current ?? x.current)?.setAttribute(`aria-hidden`, !e);
              });
          }, []);
          let ie = f
              ? `visible`
              : T(
                  l,
                  [C[0] - s.viewportLength, te(C[1], C[2], 0.5), C[3] + s.viewportLength],
                  [`hidden`, `visible`, `hidden`]
                ),
            j = n + `child`;
          return m(re, {
            inherit: `id`,
            id: j,
            children: m(`li`, {
              style: { display: `contents` },
              "aria-hidden": ne !== 0,
              children: o(a, {
                ref: t ?? x,
                key: j,
                style: {
                  ...a.props?.style,
                  flexShrink: 0,
                  userSelect: `none`,
                  width: r,
                  height: i,
                  opacity: D,
                  scale: O,
                  originX: y ? k : 0.5,
                  originY: y ? 0.5 : k,
                  rotateY: y ? w : 0,
                  rotateX: y ? 0 : E,
                  visibility: ie,
                },
                layoutId: a.props.layoutId ? a.props.layoutId + `-original-` + ne : void 0,
              }),
            }),
          });
        })
      )),
      (rn = f(function ({
        selectedOpacity: e,
        opacity: t,
        total: n,
        index: r,
        wrappedIndex: i,
        wrappedIndexInverted: ee,
        dotStyle: a,
        buttonStyle: o,
        gap: s,
        padding: c,
        isHorizontal: l,
        isInverted: u,
        ...d
      }) {
        let f = i === r;
        u && (f = Math.abs(ee) === r);
        let p = s / 2,
          h = !l && r > 0 ? p : c,
          g = !l && r !== n - 1 ? p : c,
          _ = l && r !== n - 1 ? p : c,
          v = l && r > 0 ? p : c;
        return m(`button`, {
          "aria-label": `Scroll to page ${r + 1}`,
          type: `button`,
          ...d,
          style: { ...o, padding: `${h}px ${_}px ${g}px ${v}px` },
          children: m(D.div, {
            style: { ...a },
            initial: !1,
            animate: { opacity: f ? e : t },
            transition: { duration: 0.3 },
          }),
        });
      })),
      (an = {
        display: `flex`,
        placeContent: `center`,
        placeItems: `center`,
        overflow: `hidden`,
        position: `absolute`,
        pointerEvents: `auto`,
      }),
      (on = {
        borderRadius: `50%`,
        background: `white`,
        cursor: `pointer`,
        border: `none`,
        placeContent: `center`,
        placeItems: `center`,
        padding: 0,
      }));
  });
function cn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ln,
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
  xn,
  Sn = e(() => {
    (h(),
      ce(),
      E(),
      n(),
      sn(),
      Gt(),
      (ln = N(Q)),
      (un = N($)),
      (dn = [`w2LlopRrH`, `A23XcIZt9`]),
      (fn = `framer-9zIb3`),
      (pn = { A23XcIZt9: `framer-v-1cozi06`, w2LlopRrH: `framer-v-1yd8jkk` }),
      (mn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (hn = (e, t) => {
        if (!(!e || typeof e != `object`)) return { ...e, alt: t };
      }),
      (gn = ({ value: e, children: t }) => {
        let n = s(S),
          r = e ?? n.transition,
          i = l(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(S.Provider, { value: i, children: t });
      }),
      (_n = D.create(a)),
      (vn = { Primary: `w2LlopRrH`, Small: `A23XcIZt9` }),
      (yn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: vn[r.variant] ?? r.variant ?? `w2LlopRrH`,
      })),
      (bn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (xn = oe(
        _(function (e, t) {
          let n = p(null),
            r = t ?? n,
            i = v(),
            { activeLocale: ee, setLocale: a } = de();
          ue();
          let { style: o, className: s, layoutId: c, variant: l, ...u } = yn(e),
            {
              baseVariant: d,
              classNames: f,
              clearLoadingGesture: h,
              gestureHandlers: _,
              gestureVariant: y,
              isLoading: b,
              setGestureState: te,
              setVariant: ne,
              variants: x,
            } = k({
              cycleOrder: dn,
              defaultVariant: `w2LlopRrH`,
              ref: r,
              variant: l,
              variantClassNames: pn,
            }),
            S = bn(e, x),
            C = A(fn),
            w = () => d !== `A23XcIZt9`,
            T = () => d === `A23XcIZt9`;
          return m(re, {
            id: c ?? i,
            children: m(_n, {
              animate: x,
              initial: !1,
              children: m(gn, {
                value: mn,
                children: g(D.div, {
                  ...u,
                  ..._,
                  className: A(C, `framer-1yd8jkk`, s, f),
                  "data-framer-name": `Primary`,
                  layoutDependency: S,
                  layoutId: `w2LlopRrH`,
                  ref: r,
                  style: { ...o },
                  ...cn({ A23XcIZt9: { "data-framer-name": `Small` } }, d, y),
                  children: [
                    w() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-1ccv8dh-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `Yj6UY4UX6-container`,
                          nodeId: `Yj6UY4UX6`,
                          rendersWithMotion: !0,
                          scopeId: `UcQ_CNkVY`,
                          children: m($, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(0, 0, 0, 0)`,
                              arrowGap: 12,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 40,
                              arrowPaddingTop: -104,
                              arrowPosition: `top-right`,
                              arrowRadius: 60,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !1,
                              arrowSize: 48,
                              leftArrow: `../../assets/images/6q2Hd0MRBPq5pInxkVMBhatV2ns.svg`,
                              rightArrow: `../../assets/images/5JuwfiBrgPbRunZtKPMl3pVO5bE.svg`,
                              showMouseControls: !0,
                            },
                            autoPlayControl: !1,
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
                              overflow: !0,
                            },
                            gap: 32,
                            height: `100%`,
                            id: `Yj6UY4UX6`,
                            intervalControl: 1.5,
                            itemAmount: 1.4,
                            layoutId: `Yj6UY4UX6`,
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
                              m(F, {
                                height: 436,
                                width: `859px`,
                                children: m(O, {
                                  className: `framer-110lret-container`,
                                  "data-framer-name": `Testimonial Card 01`,
                                  inComponentSlot: !0,
                                  layoutDependency: S,
                                  layoutId: `CX3upnvHV-container`,
                                  name: `Testimonial Card 01`,
                                  nodeId: `CX3upnvHV`,
                                  rendersWithMotion: !0,
                                  scopeId: `UcQ_CNkVY`,
                                  children: m(Q, {
                                    height: `100%`,
                                    id: `CX3upnvHV`,
                                    layoutId: `CX3upnvHV`,
                                    name: `Testimonial Card 01`,
                                    nbeI0lvzZ: `Sophia Jordan`,
                                    nSBYREM8I: `The templates and components from hubstore have completely transformed my workflow. What used to take me hours now only takes minutes. The designs are beautiful, responsive, and easy to customize. As a freelance designer, having access to such high-quality components has been a game changer for delivering projects faster. Highly recommend it to any user!"`,
                                    style: { width: `100%` },
                                    variant: `oG9ZNCuNI`,
                                    width: `100%`,
                                    YX28chkvJ: `Chief Technology Officer`,
                                  }),
                                }),
                              }),
                              m(F, {
                                height: 436,
                                width: `859px`,
                                children: m(O, {
                                  className: `framer-19yfg7u-container`,
                                  "data-framer-name": `Testimonial Card 02`,
                                  inComponentSlot: !0,
                                  layoutDependency: S,
                                  layoutId: `wFnpOKBmm-container`,
                                  name: `Testimonial Card 02`,
                                  nodeId: `wFnpOKBmm`,
                                  rendersWithMotion: !0,
                                  scopeId: `UcQ_CNkVY`,
                                  children: m(Q, {
                                    AsYpL9IuO: hn(
                                      { src: `../../assets/images/PGDuIBF5iExRVtG3ArQ50qs1mI.png` },
                                      `Slider Logo`
                                    ),
                                    height: `100%`,
                                    id: `wFnpOKBmm`,
                                    layoutId: `wFnpOKBmm`,
                                    name: `Testimonial Card 02`,
                                    nbeI0lvzZ: `James Langrantis`,
                                    nSBYREM8I: `I was blown away by the quality of the templates. They’re sleek, responsive, and easy to customize for my clients. It saved me so much time, and my clients love the final results! And I found the components intuitive and easy to implement. The detailed tutorials made it even easier to create something I’m proud of. I couldn’t have done it without this amazing resource!`,
                                    style: { width: `100%` },
                                    variant: `oG9ZNCuNI`,
                                    width: `100%`,
                                    YX28chkvJ: `Chief Executive Officer`,
                                  }),
                                }),
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
                    T() &&
                      m(F, {
                        children: m(O, {
                          className: `framer-xwwkve-container`,
                          "data-framer-name": `Small`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: S,
                          layoutId: `U1OP6_kzY-container`,
                          name: `Small`,
                          nodeId: `U1OP6_kzY`,
                          rendersWithMotion: !0,
                          scopeId: `UcQ_CNkVY`,
                          children: m($, {
                            alignment: `center`,
                            arrowOptions: {
                              arrowFill: `rgba(0, 0, 0, 0)`,
                              arrowGap: 12,
                              arrowPadding: 20,
                              arrowPaddingBottom: 0,
                              arrowPaddingLeft: 0,
                              arrowPaddingRight: 40,
                              arrowPaddingTop: -85,
                              arrowPosition: `top-right`,
                              arrowRadius: 60,
                              arrowShouldFadeIn: !1,
                              arrowShouldSpace: !1,
                              arrowSize: 48,
                              leftArrow: `../../assets/images/6q2Hd0MRBPq5pInxkVMBhatV2ns.svg`,
                              rightArrow: `../../assets/images/5JuwfiBrgPbRunZtKPMl3pVO5bE.svg`,
                              showMouseControls: !0,
                            },
                            autoPlayControl: !1,
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
                              overflow: !0,
                            },
                            gap: 16,
                            height: `100%`,
                            id: `U1OP6_kzY`,
                            intervalControl: 1.5,
                            itemAmount: 1.37,
                            layoutId: `U1OP6_kzY`,
                            name: `Small`,
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
                              m(F, {
                                height: 436,
                                width: `600px`,
                                children: m(O, {
                                  className: `framer-183yeh4-container`,
                                  "data-framer-name": `Testimonial Card 01 - Small`,
                                  inComponentSlot: !0,
                                  layoutDependency: S,
                                  layoutId: `yfbV37ER8-container`,
                                  name: `Testimonial Card 01 - Small`,
                                  nodeId: `yfbV37ER8`,
                                  rendersWithMotion: !0,
                                  scopeId: `UcQ_CNkVY`,
                                  children: m(Q, {
                                    height: `100%`,
                                    id: `yfbV37ER8`,
                                    layoutId: `yfbV37ER8`,
                                    name: `Testimonial Card 01 - Small`,
                                    nbeI0lvzZ: `Sophia Jordan`,
                                    nSBYREM8I: `The templates and components from hubstore have completely transformed my workflow. What used to take me hours now only takes minutes. The designs are beautiful, responsive, and easy to customize. As a freelance designer, having access to such high-quality Framer components has been a game changer for delivering projects faster. Highly recommend it to any Framer user!"`,
                                    style: { width: `100%` },
                                    variant: `pmqchV8h8`,
                                    width: `100%`,
                                    YX28chkvJ: `Chief Technology Officer`,
                                  }),
                                }),
                              }),
                              m(F, {
                                height: 436,
                                width: `600px`,
                                children: m(O, {
                                  className: `framer-9e2ewa-container`,
                                  "data-framer-name": `Testimonial Card 02 - Small`,
                                  inComponentSlot: !0,
                                  layoutDependency: S,
                                  layoutId: `Om3zv9PNo-container`,
                                  name: `Testimonial Card 02 - Small`,
                                  nodeId: `Om3zv9PNo`,
                                  rendersWithMotion: !0,
                                  scopeId: `UcQ_CNkVY`,
                                  children: m(Q, {
                                    AsYpL9IuO: hn(
                                      { src: `../../assets/images/PGDuIBF5iExRVtG3ArQ50qs1mI.png` },
                                      `Slider Logo`
                                    ),
                                    height: `100%`,
                                    id: `Om3zv9PNo`,
                                    layoutId: `Om3zv9PNo`,
                                    name: `Testimonial Card 02 - Small`,
                                    nbeI0lvzZ: `James Langrantis`,
                                    nSBYREM8I: `I was blown away by the quality of the templates. They’re sleek, responsive, and easy to customize for my clients. It saved me so much time, and my clients love the final results! And I found the components intuitive and easy to implement. The detailed tutorials made it even easier to create something I’m proud of. I couldn’t have done it without this amazing resource!`,
                                    style: { width: `100%` },
                                    variant: `pmqchV8h8`,
                                    width: `100%`,
                                    YX28chkvJ: `Chief Executive Officer`,
                                  }),
                                }),
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
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-9zIb3.framer-19zl273, .framer-9zIb3 .framer-19zl273 { display: block; }`,
          `.framer-9zIb3.framer-1yd8jkk { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 440px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1360px; }`,
          `.framer-9zIb3 .framer-1ccv8dh-container, .framer-9zIb3 .framer-xwwkve-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-9zIb3 .framer-110lret-container, .framer-9zIb3 .framer-19yfg7u-container { height: auto; position: relative; width: 859px; }`,
          `.framer-9zIb3 .framer-183yeh4-container, .framer-9zIb3 .framer-9e2ewa-container { height: auto; position: relative; width: 600px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9zIb3.framer-1yd8jkk { gap: 0px; } .framer-9zIb3.framer-1yd8jkk > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-9zIb3.framer-1yd8jkk > :first-child { margin-top: 0px; } .framer-9zIb3.framer-1yd8jkk > :last-child { margin-bottom: 0px; } }`,
          `.framer-9zIb3.framer-v-1cozi06.framer-1yd8jkk { height: 439px; width: 810px; }`,
        ],
        `framer-9zIb3`
      )),
      (xn.displayName = `Testiimonal Slider`),
      (xn.defaultProps = { height: 440, width: 1360 }),
      M(xn, {
        variant: {
          options: [`w2LlopRrH`, `A23XcIZt9`],
          optionTitles: [`Primary`, `Small`],
          title: `Variant`,
          type: R.Enum,
        },
      }),
      I(xn, [{ explicitInter: !0, fonts: [] }, ...ln, ...un], {
        supportsExplicitInterCodegen: !0,
      }));
  });
export { Mt as a, bt as c, Gt as i, Sn as n, Nt as o, Q as r, yt as s, xn as t };
//# sourceMappingURL=UcQ_CNkVY.D8Ovzu-t.mjs.map
