import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  j as a,
  l as o,
  s,
  u as ee,
  v as c,
  x as l,
} from "./react.ClsXD4bF.mjs";
import { a as u, r as d, t as f, w as p } from "./motion.ClyXVVeQ.mjs";
import {
  At as m,
  Dt as h,
  F as g,
  M as _,
  Mt as v,
  O as y,
  Ot as b,
  W as x,
  Z as S,
  _ as C,
  dt as te,
  ft as w,
  j as T,
  o as E,
  yt as D,
} from "./framer.CbUxDv78.mjs";
import { i as O, n as k, r as A, t as ne } from "./DvIQKtnpQ.vN-Iv-RN.mjs";
import { i as j, n as M, r as N, t as P } from "./wEX21mXRe.BeCcrLA7.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
  z,
  B,
  V,
  H,
  U,
  W,
  G,
  K,
  re = e(() => {
    (s(),
      S(),
      f(),
      t(),
      j(),
      (I = { KCCZvNB6a: { hover: !0 }, Mkt_PyDB5: { hover: !0 } }),
      (L = [
        `Mkt_PyDB5`,
        `ll9j_htnd`,
        `DLV0OIv0V`,
        `xsd1cgohu`,
        `KCCZvNB6a`,
        `fyKYSup1J`,
        `LAw0PVQJM`,
        `tEacWDczw`,
      ]),
      (R = `framer-3Xs8n`),
      (z = {
        DLV0OIv0V: `framer-v-1c6b6fr`,
        fyKYSup1J: `framer-v-7yzbah`,
        KCCZvNB6a: `framer-v-hkg58u`,
        LAw0PVQJM: `framer-v-znhi2k`,
        ll9j_htnd: `framer-v-1phyonn`,
        Mkt_PyDB5: `framer-v-18vi7n3`,
        tEacWDczw: `framer-v-upt3sp`,
        xsd1cgohu: `framer-v-9t3oq7`,
      }),
      (B = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (V = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (H = p.create(n)),
      (U = {
        "Active - Small": `xsd1cgohu`,
        "Blog - Active - Small": `tEacWDczw`,
        "Blog - Active": `fyKYSup1J`,
        "Blog - Inactive - Small": `LAw0PVQJM`,
        "Blog - Inactive": `KCCZvNB6a`,
        "Inactive - Small": `DLV0OIv0V`,
        Active: `ll9j_htnd`,
        Inactive: `Mkt_PyDB5`,
      }),
      (W = ({ click: e, height: t, id: n, link: r, text: i, width: a, ...o }) => ({
        ...o,
        dAmnBwE83: e ?? o.dAmnBwE83,
        t7ayk6mJk: r ?? o.t7ayk6mJk,
        Uf5iL5Knc: i ?? o.Uf5iL5Knc ?? `Agency`,
        variant: U[o.variant] ?? o.variant ?? `Mkt_PyDB5`,
      })),
      (G = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = b(
        c(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = l(),
            { activeLocale: ee, setLocale: c } = D();
          w();
          let {
              style: u,
              className: f,
              layoutId: m,
              variant: _,
              Uf5iL5Knc: v,
              t7ayk6mJk: b,
              dAmnBwE83: x,
              ...S
            } = W(e),
            {
              baseVariant: T,
              classNames: E,
              clearLoadingGesture: O,
              gestureHandlers: k,
              gestureVariant: A,
              isLoading: ne,
              setGestureState: j,
              setVariant: M,
              variants: N,
            } = h({
              cycleOrder: L,
              defaultVariant: `Mkt_PyDB5`,
              enabledGestures: I,
              ref: i,
              variant: _,
              variantClassNames: z,
            }),
            U = G(e, N),
            { activeVariantCallback: K, delay: re } = te(T),
            q = K(async (...e) => {
              if ((j({ isPressed: !1 }), x && (await x(...e)) === !1)) return !1;
            }),
            J = g(R, P);
          return o(d, {
            id: m ?? s,
            children: o(H, {
              animate: N,
              initial: !1,
              children: o(V, {
                value: B,
                children: o(C, {
                  href: b,
                  motionChild: !0,
                  nodeId: `Mkt_PyDB5`,
                  scopeId: `Fi_yrA0Wt`,
                  smoothScroll: !0,
                  ...F(
                    {
                      "KCCZvNB6a-hover": { href: void 0 },
                      fyKYSup1J: { href: void 0 },
                      KCCZvNB6a: { href: void 0 },
                      LAw0PVQJM: { href: void 0 },
                      tEacWDczw: { href: void 0 },
                    },
                    T,
                    A
                  ),
                  children: o(p.a, {
                    ...S,
                    ...k,
                    className: `${g(J, `framer-18vi7n3`, f, E)} framer-1n8qtwv`,
                    "data-border": !0,
                    "data-framer-name": `Inactive`,
                    "data-highlight": !0,
                    layoutDependency: U,
                    layoutId: `Mkt_PyDB5`,
                    onTap: q,
                    ref: i,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      backgroundColor: `rgba(0, 0, 0, 0)`,
                      borderBottomLeftRadius: 80,
                      borderBottomRightRadius: 80,
                      borderTopLeftRadius: 80,
                      borderTopRightRadius: 80,
                      ...u,
                    },
                    variants: {
                      "KCCZvNB6a-hover": {
                        "--border-color": `rgba(232, 235, 226, 0)`,
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                      "Mkt_PyDB5-hover": {
                        backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      },
                      DLV0OIv0V: { backgroundColor: `rgba(0, 0, 0, 0)` },
                      fyKYSup1J: {
                        "--border-color": `rgba(232, 235, 226, 0)`,
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                      },
                      KCCZvNB6a: {
                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                      },
                      LAw0PVQJM: {
                        backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                      },
                      ll9j_htnd: {
                        backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      },
                      tEacWDczw: {
                        "--border-color": `rgba(232, 235, 226, 0)`,
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        borderBottomLeftRadius: 60,
                        borderBottomRightRadius: 60,
                        borderTopLeftRadius: 60,
                        borderTopRightRadius: 60,
                      },
                      xsd1cgohu: {
                        backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      },
                    },
                    ...F(
                      {
                        "KCCZvNB6a-hover": { "data-framer-name": void 0 },
                        "Mkt_PyDB5-hover": { "data-framer-name": void 0 },
                        DLV0OIv0V: { "data-framer-name": `Inactive - Small` },
                        fyKYSup1J: { "data-framer-name": `Blog - Active` },
                        KCCZvNB6a: { "data-framer-name": `Blog - Inactive` },
                        LAw0PVQJM: { "data-framer-name": `Blog - Inactive - Small` },
                        ll9j_htnd: { "data-framer-name": `Active` },
                        tEacWDczw: { "data-framer-name": `Blog - Active - Small` },
                        xsd1cgohu: { "data-framer-name": `Active - Small` },
                      },
                      T,
                      A
                    ),
                    children: o(y, {
                      __fromCanvasComponent: !0,
                      children: o(n, {
                        children: o(p.p, {
                          className: `framer-styles-preset-1pumtl1`,
                          "data-styles-preset": `wEX21mXRe`,
                          style: {
                            "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                          },
                          children: `Agency`,
                        }),
                      }),
                      className: `framer-1w78lq`,
                      "data-framer-name": `Tag`,
                      fonts: [`Inter`],
                      layoutDependency: U,
                      layoutId: `l6M_MVQMT`,
                      style: {
                        "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                        "--framer-link-text-color": `rgb(0, 153, 255)`,
                        "--framer-link-text-decoration": `underline`,
                      },
                      text: v,
                      variants: {
                        "KCCZvNB6a-hover": {
                          "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        },
                        fyKYSup1J: {
                          "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        },
                        tEacWDczw: {
                          "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                        },
                      },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                      ...F(
                        {
                          "KCCZvNB6a-hover": {
                            children: o(n, {
                              children: o(p.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                },
                                children: `Agency`,
                              }),
                            }),
                          },
                          fyKYSup1J: {
                            children: o(n, {
                              children: o(p.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                },
                                children: `Agency`,
                              }),
                            }),
                          },
                          KCCZvNB6a: {
                            children: o(n, {
                              children: o(p.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-alignment": `center`,
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                                },
                                children: `Agency`,
                              }),
                            }),
                          },
                          tEacWDczw: {
                            children: o(n, {
                              children: o(p.p, {
                                className: `framer-styles-preset-1pumtl1`,
                                "data-styles-preset": `wEX21mXRe`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                },
                                children: `Agency`,
                              }),
                            }),
                          },
                        },
                        T,
                        A
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
          `.framer-3Xs8n.framer-1n8qtwv, .framer-3Xs8n .framer-1n8qtwv { display: block; }`,
          `.framer-3Xs8n.framer-18vi7n3 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 20px 10px 20px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-3Xs8n .framer-1w78lq { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-3Xs8n.framer-18vi7n3 { gap: 0px; } .framer-3Xs8n.framer-18vi7n3 > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-3Xs8n.framer-18vi7n3 > :first-child { margin-left: 0px; } .framer-3Xs8n.framer-18vi7n3 > :last-child { margin-right: 0px; } }`,
          `.framer-3Xs8n.framer-v-1c6b6fr.framer-18vi7n3, .framer-3Xs8n.framer-v-9t3oq7.framer-18vi7n3 { padding: 10px 12px 10px 12px; }`,
          `.framer-3Xs8n.framer-v-hkg58u.framer-18vi7n3, .framer-3Xs8n.framer-v-7yzbah.framer-18vi7n3 { padding: 12px 24px 12px 24px; }`,
          `.framer-3Xs8n.framer-v-znhi2k.framer-18vi7n3, .framer-3Xs8n.framer-v-upt3sp.framer-18vi7n3 { padding: 8px 16px 8px 16px; }`,
          ...M,
          `.framer-3Xs8n[data-border="true"]::after, .framer-3Xs8n [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-3Xs8n`
      )),
      (K.displayName = `Filter Nav Item`),
      (K.defaultProps = { height: 40, width: 94 }),
      _(K, {
        variant: {
          options: [
            `Mkt_PyDB5`,
            `ll9j_htnd`,
            `DLV0OIv0V`,
            `xsd1cgohu`,
            `KCCZvNB6a`,
            `fyKYSup1J`,
            `LAw0PVQJM`,
            `tEacWDczw`,
          ],
          optionTitles: [
            `Inactive`,
            `Active`,
            `Inactive - Small`,
            `Active - Small`,
            `Blog - Inactive`,
            `Blog - Active`,
            `Blog - Inactive - Small`,
            `Blog - Active - Small`,
          ],
          title: `Variant`,
          type: E.Enum,
        },
        Uf5iL5Knc: { defaultValue: `Agency`, displayTextArea: !1, title: `Text`, type: E.String },
        t7ayk6mJk: { title: `Link`, type: E.Link },
        dAmnBwE83: { title: `Click`, type: E.EventHandler },
      }),
      T(
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
          ...x(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var J,
  ie,
  Y,
  X,
  Z,
  Q,
  ae,
  oe,
  se,
  ce,
  le,
  ue,
  de,
  fe,
  pe,
  me,
  $,
  he = e(() => {
    (s(),
      S(),
      f(),
      t(),
      O(),
      (J = m(p.div)),
      (ie = v(m(p.div))),
      (Y = { P9t0j5QoH: { hover: !0 } }),
      (X = [`P9t0j5QoH`, `LDWqWY6Ab`, `znBzTNqoD`, `ayfIpN8tZ`]),
      (Z = `framer-xrTFg`),
      (Q = {
        ayfIpN8tZ: `framer-v-walfru`,
        LDWqWY6Ab: `framer-v-isgk0a`,
        P9t0j5QoH: `framer-v-18ywsqi`,
        znBzTNqoD: `framer-v-b51f51`,
      }),
      (ae = { duration: 0, type: `tween` }),
      (oe = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` },
        x: 0,
        y: 0,
      }),
      (se = {
        opacity: 0.001,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 0,
      }),
      (ce = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
      (le = {
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
      (ue = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (de = p.create(n)),
      (fe = {
        Default: `P9t0j5QoH`,
        Hidden: `znBzTNqoD`,
        Loading: `LDWqWY6Ab`,
        Small: `ayfIpN8tZ`,
      }),
      (pe = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: fe[i.variant] ?? i.variant ?? `P9t0j5QoH`,
        Wld3NDzSj: e ?? i.Wld3NDzSj,
      })),
      (me = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = b(
        c(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = l(),
            { activeLocale: c, setLocale: u } = D();
          w();
          let { style: f, className: m, layoutId: _, variant: v, Wld3NDzSj: b, ...x } = pe(e),
            {
              baseVariant: S,
              classNames: C,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: O,
              isLoading: k,
              setGestureState: A,
              setVariant: j,
              variants: M,
            } = h({
              cycleOrder: X,
              defaultVariant: `P9t0j5QoH`,
              enabledGestures: Y,
              ref: i,
              variant: v,
              variantClassNames: Q,
            }),
            N = me(e, M),
            { activeVariantCallback: P, delay: F } = te(S),
            I = P(async (...e) => {
              if ((A({ isPressed: !1 }), b && (await b(...e)) === !1)) return !1;
            }),
            L = [ne],
            R = () => S !== `znBzTNqoD`,
            z = g(Z, ...L),
            B = () => S !== `LDWqWY6Ab`,
            V = () => S === `LDWqWY6Ab`;
          return o(d, {
            id: _ ?? s,
            children: o(de, {
              animate: M,
              initial: !1,
              children:
                R() &&
                o(ue, {
                  value: ae,
                  children: ee(p.div, {
                    ...x,
                    ...E,
                    className: g(z, `framer-18ywsqi`, m, C),
                    "data-framer-name": `Default`,
                    "data-highlight": !0,
                    layoutDependency: N,
                    layoutId: `P9t0j5QoH`,
                    onTap: I,
                    ref: i,
                    style: {
                      backgroundColor: `var(--token-c13496af-9d74-466a-bd24-b702e33e6193, rgb(173, 255, 0))`,
                      borderBottomLeftRadius: 500,
                      borderBottomRightRadius: 500,
                      borderTopLeftRadius: 500,
                      borderTopRightRadius: 500,
                      ...f,
                    },
                    variants: {
                      "P9t0j5QoH-hover": {
                        backgroundColor: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                      },
                    },
                    ...q(
                      {
                        "P9t0j5QoH-hover": { "data-framer-name": void 0 },
                        ayfIpN8tZ: { "data-framer-name": `Small` },
                        LDWqWY6Ab: { "data-framer-name": `Loading` },
                      },
                      S,
                      O
                    ),
                    children: [
                      B() &&
                        o(y, {
                          __fromCanvasComponent: !0,
                          children: o(n, {
                            children: o(p.p, {
                              className: `framer-styles-preset-1hhv5k3`,
                              "data-styles-preset": `DvIQKtnpQ`,
                              style: {
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)))`,
                              },
                              children: `Load More`,
                            }),
                          }),
                          className: `framer-pydaqv`,
                          fonts: [`Inter`],
                          layoutDependency: N,
                          layoutId: `fjAtH8tMz`,
                          style: {
                            "--extracted-r6o4lv": `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                          },
                          variants: {
                            "P9t0j5QoH-hover": {
                              "--extracted-r6o4lv": `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                            },
                          },
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                          ...q(
                            {
                              "P9t0j5QoH-hover": {
                                children: o(n, {
                                  children: o(p.p, {
                                    className: `framer-styles-preset-1hhv5k3`,
                                    "data-styles-preset": `DvIQKtnpQ`,
                                    style: {
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255)))`,
                                    },
                                    children: `Load More`,
                                  }),
                                }),
                              },
                            },
                            S,
                            O
                          ),
                        }),
                      V() &&
                        o(ie, {
                          __perspectiveFX: !1,
                          __smartComponentFX: !0,
                          __targetOpacity: 1,
                          animate: oe,
                          className: `framer-d5ku2z`,
                          "data-framer-appear-id": `d5ku2z`,
                          "data-framer-name": `Spinner`,
                          initial: se,
                          layoutDependency: N,
                          layoutId: `rhrJg9lor`,
                          optimized: !0,
                          style: {
                            mask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                            WebkitMask: `url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
                          },
                          children: o(J, {
                            __framer__loop: le,
                            __framer__loopEffectEnabled: !0,
                            __framer__loopRepeatDelay: 0,
                            __framer__loopRepeatType: `loop`,
                            __framer__loopTransition: ce,
                            __perspectiveFX: !1,
                            __smartComponentFX: !0,
                            __targetOpacity: 1,
                            className: `framer-1rslnnc`,
                            "data-framer-name": `Conic`,
                            layoutDependency: N,
                            layoutId: `eBYdqPAS7`,
                            style: {
                              background: `conic-gradient(from 0deg at 50% 50%, var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3)) /* {"name":"Black"} */ 0deg, rgb(255, 255, 255) 342deg)`,
                            },
                            children: o(p.div, {
                              className: `framer-1d4bq7q`,
                              "data-framer-name": `Round`,
                              layoutDependency: N,
                              layoutId: `nqZEb9cT9`,
                              style: {
                                backgroundColor: `rgb(255, 255, 255)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
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
          `.framer-xrTFg.framer-jpw84n, .framer-xrTFg .framer-jpw84n { display: block; }`,
          `.framer-xrTFg.framer-18ywsqi { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 12px 21px 12px 21px; position: relative; width: min-content; }`,
          `.framer-xrTFg .framer-pydaqv { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-xrTFg .framer-d5ku2z { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
          `.framer-xrTFg .framer-1rslnnc { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
          `.framer-xrTFg .framer-1d4bq7q { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-xrTFg.framer-18ywsqi { gap: 0px; } .framer-xrTFg.framer-18ywsqi > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-xrTFg.framer-18ywsqi > :first-child { margin-left: 0px; } .framer-xrTFg.framer-18ywsqi > :last-child { margin-right: 0px; } }`,
          ...k,
        ],
        `framer-xrTFg`
      )),
      ($.displayName = `Load More`),
      ($.defaultProps = { height: 48, width: 127 }),
      _($, {
        variant: {
          options: [`P9t0j5QoH`, `LDWqWY6Ab`, `znBzTNqoD`, `ayfIpN8tZ`],
          optionTitles: [`Default`, `Loading`, `Hidden`, `Small`],
          title: `Variant`,
          type: E.Enum,
        },
        Wld3NDzSj: { title: `Click`, type: E.EventHandler },
      }),
      T(
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
            ],
          },
          ...x(A),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { re as i, he as n, K as r, $ as t };
//# sourceMappingURL=UG26Ix8eM.CJdBkykD.mjs.map
