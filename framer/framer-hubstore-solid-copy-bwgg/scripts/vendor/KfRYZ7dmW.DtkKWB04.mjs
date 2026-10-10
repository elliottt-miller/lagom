import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  L as n,
  N as r,
  P as i,
  j as a,
  l as o,
  s,
  u as c,
  v as l,
  x as ee,
} from "./react.ClsXD4bF.mjs";
import { a as u, r as te, t as d, w as f } from "./motion.ClyXVVeQ.mjs";
import {
  A as p,
  Dt as ne,
  F as m,
  K as h,
  M as g,
  O as _,
  Ot as v,
  U as y,
  W as b,
  Z as x,
  dt as re,
  ft as ie,
  i as S,
  j as C,
  o as w,
  yt as T,
} from "./framer.CbUxDv78.mjs";
import { i as E, n as D, r as O, t as ae } from "./KKnW9Hd3v.TmuhifDy.mjs";
import { n as k, t as A } from "./Feather.DX1xroew.mjs";
import { i as j, n as M, r as N, t as P } from "./wEX21mXRe.BeCcrLA7.mjs";
function F(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var I,
  L,
  R,
  z,
  oe,
  B,
  se,
  ce,
  V,
  H,
  U,
  W,
  le,
  G,
  K = e(() => {
    (s(),
      x(),
      d(),
      t(),
      k(),
      E(),
      j(),
      (I = y(A)),
      (L = [`jQ6DZcoMn`, `Lja6XVKw8`]),
      (R = `framer-r8naH`),
      (z = { jQ6DZcoMn: `framer-v-3fl3kb`, Lja6XVKw8: `framer-v-32ztkp` }),
      (oe = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (B = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (se = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (ce = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (V = f.create(n)),
      (H = { Center: `center`, End: `flex-end`, Start: `flex-start` }),
      (U = { "Accordian - Close": `Lja6XVKw8`, "Accordian Open": `jQ6DZcoMn` }),
      (W = ({
        align: e,
        answer: t,
        click: n,
        height: r,
        id: i,
        padding: a,
        question: o,
        radius: s,
        width: c,
        ...l
      }) => ({
        ...l,
        Bg1VyyErG: a ?? l.Bg1VyyErG ?? `20px 24px 20px 24px`,
        IzKrIMSlD: s ?? l.IzKrIMSlD ?? `16px 16px 0px 0px`,
        JHdB4tlI8: o ?? l.JHdB4tlI8 ?? `What is included in the free plan?`,
        variant: U[l.variant] ?? l.variant ?? `jQ6DZcoMn`,
        vB6wANmJj: H[e] ?? e ?? l.vB6wANmJj ?? `center`,
        Vf8VZL915:
          t ??
          l.Vf8VZL915 ??
          `The free plan gives you access to a limited selection of templates and components to help you get started with Framer. You’ll also receive basic updates to the free library. Also our Team Plan allows up to 5 users to access the full library, collaborate on projects, and share templates. It’s perfect for agencies or design teams.`,
        yUVQ9FlF8: n ?? l.yUVQ9FlF8,
      })),
      (le = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = v(
        l(function (e, t) {
          let r = a(null),
            i = t ?? r,
            s = ee(),
            { activeLocale: l, setLocale: u } = T();
          ie();
          let {
              style: d,
              className: h,
              layoutId: g,
              variant: v,
              JHdB4tlI8: y,
              Vf8VZL915: b,
              Bg1VyyErG: x,
              IzKrIMSlD: C,
              yUVQ9FlF8: w,
              vB6wANmJj: E,
              ...D
            } = W(e),
            {
              baseVariant: O,
              classNames: k,
              clearLoadingGesture: j,
              gestureHandlers: M,
              gestureVariant: N,
              isLoading: I,
              setGestureState: H,
              setVariant: U,
              variants: G,
            } = ne({
              cycleOrder: L,
              defaultVariant: `jQ6DZcoMn`,
              ref: i,
              variant: v,
              variantClassNames: z,
            }),
            K = le(e, G),
            { activeVariantCallback: q, delay: ue } = re(O),
            J = q(async (...e) => {
              if ((H({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
              U(`Lja6XVKw8`);
            }),
            Y = q(async (...e) => {
              if ((H({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
              U(`jQ6DZcoMn`);
            }),
            X = m(R, ae, P);
          return o(te, {
            id: g ?? s,
            children: o(V, {
              animate: G,
              initial: !1,
              children: o(ce, {
                value: se,
                children: c(f.div, {
                  ...D,
                  ...M,
                  className: m(X, `framer-3fl3kb`, h, k),
                  "data-border": !0,
                  "data-framer-name": `Accordian Open`,
                  "data-highlight": !0,
                  layoutDependency: K,
                  layoutId: `jQ6DZcoMn`,
                  onTap: J,
                  ref: i,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-b3769ab4-fc8f-4532-8f1b-a65da66ddc45, rgb(232, 235, 226))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    "--hfcdsq": oe(x),
                    backgroundColor: `var(--token-7ca52d9c-5525-47b6-8616-f38f6039184e, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: B(C, 3),
                    borderBottomRightRadius: B(C, 2),
                    borderTopLeftRadius: B(C, 0),
                    borderTopRightRadius: B(C, 1),
                    ...d,
                  },
                  ...F({ Lja6XVKw8: { "data-framer-name": `Accordian - Close`, onTap: Y } }, O, N),
                  children: [
                    c(f.div, {
                      className: `framer-c28kis`,
                      "data-framer-name": `Accordian Question Block`,
                      layoutDependency: K,
                      layoutId: `iIlNQl2mn`,
                      style: { "--vjej98": E },
                      children: [
                        o(_, {
                          __fromCanvasComponent: !0,
                          children: o(n, {
                            children: o(f.p, {
                              className: `framer-styles-preset-1kyzkuu`,
                              "data-styles-preset": `KKnW9Hd3v`,
                              children: `What is included in the free plan?`,
                            }),
                          }),
                          className: `framer-fhbkcl`,
                          "data-framer-name": `Question`,
                          fonts: [`Inter`],
                          layoutDependency: K,
                          layoutId: `xxyhIm56W`,
                          style: { "--framer-paragraph-spacing": `0px` },
                          text: y,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                        o(S, {
                          children: o(p, {
                            className: `framer-1gt50tm-container`,
                            isAuthoredByUser: !0,
                            isModuleExternal: !0,
                            layoutDependency: K,
                            layoutId: `VRBmggXPg-container`,
                            nodeId: `VRBmggXPg`,
                            rendersWithMotion: !0,
                            scopeId: `RR3XNFGJm`,
                            children: o(A, {
                              color: `var(--token-e8de277c-f546-4f1f-a910-e81390dcf9af, rgb(16, 23, 3))`,
                              height: `100%`,
                              iconSearch: `Home`,
                              iconSelection: `minus`,
                              id: `VRBmggXPg`,
                              layoutId: `VRBmggXPg`,
                              mirrored: !1,
                              selectByList: !0,
                              style: { height: `100%`, width: `100%` },
                              width: `100%`,
                              ...F({ Lja6XVKw8: { iconSelection: `plus` } }, O, N),
                            }),
                          }),
                        }),
                      ],
                    }),
                    o(f.div, {
                      className: `framer-1v5mlw0`,
                      "data-framer-name": `Accordian Answer Block`,
                      layoutDependency: K,
                      layoutId: `y4DCJeZH2`,
                      children: o(_, {
                        __fromCanvasComponent: !0,
                        children: o(n, {
                          children: o(f.p, {
                            className: `framer-styles-preset-1pumtl1`,
                            "data-styles-preset": `wEX21mXRe`,
                            style: {
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52)))`,
                            },
                            children: `The free plan gives you access to a limited selection of templates and components to help you get started with Framer. You’ll also receive basic updates to the free library. Also our Team Plan allows up to 5 users to access the full library, collaborate on projects, and share templates. It’s perfect for agencies or design teams.`,
                          }),
                        }),
                        className: `framer-c1waya`,
                        "data-framer-name": `Answer`,
                        fonts: [`Inter`],
                        layoutDependency: K,
                        layoutId: `yBgloEEfa`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-158118d5-63c3-4529-a125-9d6da44a4118, rgb(55, 57, 52))`,
                          "--framer-paragraph-spacing": `0px`,
                        },
                        text: b,
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
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-r8naH.framer-1964yrt, .framer-r8naH .framer-1964yrt { display: block; }`,
          `.framer-r8naH.framer-3fl3kb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: var(--hfcdsq); position: relative; width: 612px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-r8naH .framer-c28kis { align-content: var(--vjej98); align-items: var(--vjej98); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-r8naH .framer-fhbkcl { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-r8naH .framer-1gt50tm-container { flex: none; height: 24px; position: relative; width: 24px; }`,
          `.framer-r8naH .framer-1v5mlw0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-r8naH .framer-c1waya { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-r8naH.framer-3fl3kb, .framer-r8naH .framer-c28kis, .framer-r8naH .framer-1v5mlw0 { gap: 0px; } .framer-r8naH.framer-3fl3kb > * { margin: 0px; margin-bottom: calc(12px / 2); margin-top: calc(12px / 2); } .framer-r8naH.framer-3fl3kb > :first-child, .framer-r8naH .framer-1v5mlw0 > :first-child { margin-top: 0px; } .framer-r8naH.framer-3fl3kb > :last-child, .framer-r8naH .framer-1v5mlw0 > :last-child { margin-bottom: 0px; } .framer-r8naH .framer-c28kis > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-r8naH .framer-c28kis > :first-child { margin-left: 0px; } .framer-r8naH .framer-c28kis > :last-child { margin-right: 0px; } .framer-r8naH .framer-1v5mlw0 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }`,
          `.framer-r8naH.framer-v-32ztkp.framer-3fl3kb { gap: 0px; }`,
          `.framer-r8naH.framer-v-32ztkp .framer-c1waya { height: 1px; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-r8naH.framer-v-32ztkp.framer-3fl3kb { gap: 0px; } .framer-r8naH.framer-v-32ztkp.framer-3fl3kb > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-r8naH.framer-v-32ztkp.framer-3fl3kb > :first-child { margin-top: 0px; } .framer-r8naH.framer-v-32ztkp.framer-3fl3kb > :last-child { margin-bottom: 0px; } }`,
          ...D,
          ...M,
          `.framer-r8naH[data-border="true"]::after, .framer-r8naH [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }`,
        ],
        `framer-r8naH`
      )),
      (G.displayName = `Accordian`),
      (G.defaultProps = { height: 172, width: 612 }),
      g(G, {
        variant: {
          options: [`jQ6DZcoMn`, `Lja6XVKw8`],
          optionTitles: [`Accordian Open`, `Accordian - Close`],
          title: `Variant`,
          type: w.Enum,
        },
        JHdB4tlI8: {
          defaultValue: `What is included in the free plan?`,
          displayTextArea: !1,
          title: `Question`,
          type: w.String,
        },
        Vf8VZL915: {
          defaultValue: `The free plan gives you access to a limited selection of templates and components to help you get started with Framer. You’ll also receive basic updates to the free library. Also our Team Plan allows up to 5 users to access the full library, collaborate on projects, and share templates. It’s perfect for agencies or design teams.`,
          displayTextArea: !1,
          title: `Answer`,
          type: w.String,
        },
        Bg1VyyErG: { defaultValue: `20px 24px 20px 24px`, title: `Padding`, type: w.Padding },
        IzKrIMSlD: { defaultValue: `16px 16px 0px 0px`, title: `Radius`, type: w.BorderRadius },
        yUVQ9FlF8: { title: `Click`, type: w.EventHandler },
        vB6wANmJj: {
          defaultValue: `center`,
          options: [`flex-start`, `center`, `flex-end`],
          optionTitles: [`Start`, `Center`, `End`],
          title: `Align`,
          type: w.Enum,
        },
      }),
      C(
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
          ...I,
          ...b(O),
          ...b(N),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ue,
  J,
  Y,
  X,
  de,
  fe,
  Z,
  pe,
  Q,
  me,
  he,
  ge,
  _e,
  $,
  ve = e(() => {
    (s(),
      x(),
      d(),
      t(),
      K(),
      (ue = y(G)),
      (J = h(G)),
      (Y = [`gQnWFyKKs`, `zjRBNsmcy`, `xqMoTQmXO`, `wtszSagSf`, `aHt9QzBDX`]),
      (X = `framer-edjlY`),
      (de = {
        aHt9QzBDX: `framer-v-178mvmz`,
        gQnWFyKKs: `framer-v-6onoti`,
        wtszSagSf: `framer-v-1r7jqua`,
        xqMoTQmXO: `framer-v-1dqu16x`,
        zjRBNsmcy: `framer-v-1li2crs`,
      }),
      (fe = { bounce: 0, delay: 0, duration: 0.4, type: `spring` }),
      (Z = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (pe = ({ value: e, children: t }) => {
        let n = r(u),
          a = e ?? n.transition,
          s = i(() => ({ ...n, transition: a }), [JSON.stringify(a)]);
        return o(u.Provider, { value: s, children: t });
      }),
      (Q = f.create(n)),
      (me = { Center: `center`, End: `flex-end`, Start: `flex-start` }),
      (he = {
        "Step -01": `gQnWFyKKs`,
        "Step -02": `zjRBNsmcy`,
        "Step -03": `xqMoTQmXO`,
        "Step -04": `wtszSagSf`,
        "Step -05": `aHt9QzBDX`,
      }),
      (ge = ({ align: e, height: t, id: n, padding: r, width: i, ...a }) => ({
        ...a,
        cwClqIRYW: r ?? a.cwClqIRYW ?? `20px 24px 20px 24px`,
        foUjP7Jao: me[e] ?? e ?? a.foUjP7Jao ?? `center`,
        variant: he[a.variant] ?? a.variant ?? `gQnWFyKKs`,
      })),
      (_e = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = v(
        l(function (e, t) {
          let n = a(null),
            r = t ?? n,
            i = ee(),
            { activeLocale: s, setLocale: l } = T(),
            u = ie(),
            {
              style: d,
              className: h,
              layoutId: g,
              variant: _,
              cwClqIRYW: v,
              foUjP7Jao: y,
              ...b
            } = ge(e),
            {
              baseVariant: x,
              classNames: C,
              clearLoadingGesture: w,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: O,
              setGestureState: ae,
              setVariant: k,
              variants: A,
            } = ne({
              cycleOrder: Y,
              defaultVariant: `gQnWFyKKs`,
              ref: r,
              variant: _,
              variantClassNames: de,
            }),
            j = _e(e, A),
            { activeVariantCallback: M, delay: N } = re(x),
            P = M(async (...e) => {
              k(`gQnWFyKKs`);
            }),
            F = M(async (...e) => {
              k(`zjRBNsmcy`);
            }),
            I = M(async (...e) => {
              k(`xqMoTQmXO`);
            }),
            L = M(async (...e) => {
              k(`wtszSagSf`);
            }),
            R = M(async (...e) => {
              k(`aHt9QzBDX`);
            }),
            z = m(X);
          return o(te, {
            id: g ?? i,
            children: o(Q, {
              animate: A,
              initial: !1,
              children: o(pe, {
                value: fe,
                children: c(f.div, {
                  ...b,
                  ...E,
                  className: m(z, `framer-6onoti`, h, C),
                  "data-framer-name": `Step -01`,
                  layoutDependency: j,
                  layoutId: `gQnWFyKKs`,
                  ref: r,
                  style: { ...d },
                  ...q(
                    {
                      aHt9QzBDX: { "data-framer-name": `Step -05` },
                      wtszSagSf: { "data-framer-name": `Step -04` },
                      xqMoTQmXO: { "data-framer-name": `Step -03` },
                      zjRBNsmcy: { "data-framer-name": `Step -02` },
                    },
                    x,
                    D
                  ),
                  children: [
                    o(S, {
                      height: 172,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + (((u?.height || 416) - 0 - 860) / 2 + 0 + 0),
                      ...q(
                        {
                          aHt9QzBDX: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 0 + 0),
                          },
                          wtszSagSf: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 0 + 0),
                          },
                          xqMoTQmXO: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 0 + 0),
                          },
                          zjRBNsmcy: {
                            y: (u?.y || 0) + 0 + (((u?.height || 396) - 0 - 860) / 2 + 0 + 0),
                          },
                        },
                        x,
                        D
                      ),
                      children: o(p, {
                        className: `framer-5gx7sy-container`,
                        layoutDependency: j,
                        layoutId: `Pm1tPpgxF-container`,
                        nodeId: `Pm1tPpgxF`,
                        rendersWithMotion: !0,
                        scopeId: `KfRYZ7dmW`,
                        children: o(G, {
                          Bg1VyyErG: Z(v),
                          height: `100%`,
                          id: `Pm1tPpgxF`,
                          IzKrIMSlD: `16px 16px 0px 0px`,
                          JHdB4tlI8: `What is included in the free plan?`,
                          layoutId: `Pm1tPpgxF`,
                          style: { width: `100%` },
                          variant: `jQ6DZcoMn`,
                          vB6wANmJj: y,
                          Vf8VZL915: `The free plan gives you access to a limited selection of templates and components to help you get started with website. You’ll also receive basic updates to the free library. Also our Team Plan allows up to 5 users to access the full library, collaborate on projects, and share templates. It’s perfect for agencies or design teams.`,
                          width: `100%`,
                          yUVQ9FlF8: P,
                          ...q(
                            {
                              aHt9QzBDX: { variant: `Lja6XVKw8` },
                              wtszSagSf: { variant: `Lja6XVKw8` },
                              xqMoTQmXO: { variant: `Lja6XVKw8` },
                              zjRBNsmcy: { variant: `Lja6XVKw8` },
                            },
                            x,
                            D
                          ),
                        }),
                      }),
                    }),
                    o(S, {
                      height: 172,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + (((u?.height || 416) - 0 - 860) / 2 + 172 + 0),
                      ...q(
                        {
                          aHt9QzBDX: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 172 + 0),
                          },
                          wtszSagSf: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 172 + 0),
                          },
                          xqMoTQmXO: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 172 + 0),
                          },
                          zjRBNsmcy: {
                            y: (u?.y || 0) + 0 + (((u?.height || 396) - 0 - 860) / 2 + 172 + 0),
                          },
                        },
                        x,
                        D
                      ),
                      children: o(p, {
                        className: `framer-yoz46v-container`,
                        layoutDependency: j,
                        layoutId: `KQTJvmLHr-container`,
                        nodeId: `KQTJvmLHr`,
                        rendersWithMotion: !0,
                        scopeId: `KfRYZ7dmW`,
                        children: o(G, {
                          Bg1VyyErG: Z(v),
                          height: `100%`,
                          id: `KQTJvmLHr`,
                          IzKrIMSlD: `0px`,
                          JHdB4tlI8: `What do I get with the Pro Plan?`,
                          layoutId: `KQTJvmLHr`,
                          style: { width: `100%` },
                          variant: `Lja6XVKw8`,
                          vB6wANmJj: y,
                          Vf8VZL915: `The Pro Plan unlocks the full library of templates and components, giving you complete creative freedom in Framer. You’ll also enjoy advanced features like custom interactions, priority support, and premium updates.`,
                          width: `100%`,
                          yUVQ9FlF8: F,
                          ...q(
                            {
                              zjRBNsmcy: {
                                variant: `jQ6DZcoMn`,
                                Vf8VZL915: `The Pro Plan unlocks the full library of templates and components, giving you complete creative freedom in design. You’ll also enjoy advanced features like custom interactions, priority support, and premium updates.`,
                              },
                            },
                            x,
                            D
                          ),
                        }),
                      }),
                    }),
                    o(S, {
                      height: 172,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + (((u?.height || 416) - 0 - 860) / 2 + 344 + 0),
                      ...q(
                        {
                          aHt9QzBDX: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 344 + 0),
                          },
                          wtszSagSf: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 344 + 0),
                          },
                          xqMoTQmXO: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 344 + 0),
                          },
                          zjRBNsmcy: {
                            y: (u?.y || 0) + 0 + (((u?.height || 396) - 0 - 860) / 2 + 344 + 0),
                          },
                        },
                        x,
                        D
                      ),
                      children: o(p, {
                        className: `framer-y40os0-container`,
                        layoutDependency: j,
                        layoutId: `aUIQJVfbO-container`,
                        nodeId: `aUIQJVfbO`,
                        rendersWithMotion: !0,
                        scopeId: `KfRYZ7dmW`,
                        children: o(G, {
                          Bg1VyyErG: Z(v),
                          height: `100%`,
                          id: `aUIQJVfbO`,
                          IzKrIMSlD: `0px`,
                          JHdB4tlI8: `Can I upgrade or downgrade my plan at any time?`,
                          layoutId: `aUIQJVfbO`,
                          style: { width: `100%` },
                          variant: `Lja6XVKw8`,
                          vB6wANmJj: y,
                          Vf8VZL915: `Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and any price adjustments are prorated based on your billing cycle.`,
                          width: `100%`,
                          yUVQ9FlF8: I,
                          ...q({ xqMoTQmXO: { variant: `jQ6DZcoMn` } }, x, D),
                        }),
                      }),
                    }),
                    o(S, {
                      height: 172,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + (((u?.height || 416) - 0 - 860) / 2 + 516 + 0),
                      ...q(
                        {
                          aHt9QzBDX: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 516 + 0),
                          },
                          wtszSagSf: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 516 + 0),
                          },
                          xqMoTQmXO: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 516 + 0),
                          },
                          zjRBNsmcy: {
                            y: (u?.y || 0) + 0 + (((u?.height || 396) - 0 - 860) / 2 + 516 + 0),
                          },
                        },
                        x,
                        D
                      ),
                      children: o(p, {
                        className: `framer-1abietk-container`,
                        layoutDependency: j,
                        layoutId: `j4uIvrZr3-container`,
                        nodeId: `j4uIvrZr3`,
                        rendersWithMotion: !0,
                        scopeId: `KfRYZ7dmW`,
                        children: o(G, {
                          Bg1VyyErG: Z(v),
                          height: `100%`,
                          id: `j4uIvrZr3`,
                          IzKrIMSlD: `0px`,
                          JHdB4tlI8: `Do you offer a team plan for multiple users?`,
                          layoutId: `j4uIvrZr3`,
                          style: { width: `100%` },
                          variant: `Lja6XVKw8`,
                          vB6wANmJj: `center`,
                          Vf8VZL915: `Yes! Our Team Plan allows up to 5 users to access the full library, collaborate on projects, and share templates. It’s perfect for agencies or design teams.`,
                          width: `100%`,
                          yUVQ9FlF8: L,
                          ...q({ wtszSagSf: { variant: `jQ6DZcoMn` } }, x, D),
                        }),
                      }),
                    }),
                    o(S, {
                      height: 172,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + (((u?.height || 416) - 0 - 860) / 2 + 688 + 0),
                      ...q(
                        {
                          aHt9QzBDX: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 688 + 0),
                          },
                          wtszSagSf: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 688 + 0),
                          },
                          xqMoTQmXO: {
                            y: (u?.y || 0) + 0 + (((u?.height || 376) - 0 - 860) / 2 + 688 + 0),
                          },
                          zjRBNsmcy: {
                            y: (u?.y || 0) + 0 + (((u?.height || 396) - 0 - 860) / 2 + 688 + 0),
                          },
                        },
                        x,
                        D
                      ),
                      children: o(p, {
                        className: `framer-1cwtp0u-container`,
                        layoutDependency: j,
                        layoutId: `izx0zKrTt-container`,
                        nodeId: `izx0zKrTt`,
                        rendersWithMotion: !0,
                        scopeId: `KfRYZ7dmW`,
                        children: o(G, {
                          Bg1VyyErG: Z(v),
                          height: `100%`,
                          id: `izx0zKrTt`,
                          IzKrIMSlD: `0px 0px 16px 16px`,
                          JHdB4tlI8: `How often are new templates added?`,
                          layoutId: `izx0zKrTt`,
                          style: { width: `100%` },
                          variant: `Lja6XVKw8`,
                          vB6wANmJj: y,
                          Vf8VZL915: `New templates are added regularly to keep your designs fresh and up to date. With a Pro or Team Plan, you’ll get instant access to the latest additions.`,
                          width: `100%`,
                          yUVQ9FlF8: R,
                          ...q({ aHt9QzBDX: { variant: `jQ6DZcoMn` } }, x, D),
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
          `.framer-edjlY.framer-tooa7r, .framer-edjlY .framer-tooa7r { display: block; }`,
          `.framer-edjlY.framer-6onoti { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 696px; }`,
          `.framer-edjlY .framer-5gx7sy-container, .framer-edjlY .framer-yoz46v-container, .framer-edjlY .framer-y40os0-container, .framer-edjlY .framer-1abietk-container, .framer-edjlY .framer-1cwtp0u-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-edjlY.framer-6onoti { gap: 0px; } .framer-edjlY.framer-6onoti > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-edjlY.framer-6onoti > :first-child { margin-top: 0px; } .framer-edjlY.framer-6onoti > :last-child { margin-bottom: 0px; } }`,
        ],
        `framer-edjlY`
      )),
      ($.displayName = `Faq Block`),
      ($.defaultProps = { height: 416, width: 696 }),
      g($, {
        variant: {
          options: [`gQnWFyKKs`, `zjRBNsmcy`, `xqMoTQmXO`, `wtszSagSf`, `aHt9QzBDX`],
          optionTitles: [`Step -01`, `Step -02`, `Step -03`, `Step -04`, `Step -05`],
          title: `Variant`,
          type: w.Enum,
        },
        cwClqIRYW: { defaultValue: `20px 24px 20px 24px`, title: `Padding`, type: w.Padding },
        foUjP7Jao: J?.vB6wANmJj && {
          ...J.vB6wANmJj,
          defaultValue: `center`,
          description: void 0,
          hidden: void 0,
          title: `Align`,
        },
      }),
      C($, [{ explicitInter: !0, fonts: [] }, ...ue], { supportsExplicitInterCodegen: !0 }));
  });
export { ve as n, $ as t };
//# sourceMappingURL=KfRYZ7dmW.DtkKWB04.mjs.map
