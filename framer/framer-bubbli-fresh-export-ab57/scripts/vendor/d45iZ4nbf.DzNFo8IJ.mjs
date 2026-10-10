import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  F as n,
  I as r,
  L as i,
  M as a,
  N as o,
  c as s,
  g as c,
  l,
  o as u,
  w as d,
  y as ee,
} from "./react.CWoGm2_e.mjs";
import { C as f, a as p, r as te, t as m } from "./motion.DjW49AAR.mjs";
import {
  A as h,
  D as g,
  Et as _,
  H as v,
  I as y,
  P as b,
  Tt as ne,
  X as x,
  _t as re,
  ct as ie,
  i as S,
  j as C,
  k as w,
  o as T,
  st as ae,
  w as E,
} from "./framer.D9PtOJZM.mjs";
function D({ direction: e, style: r }) {
  let i = E.current() === E.canvas,
    a = t(null),
    o = t(),
    c = e === `vertical` || e === `both`,
    l = e === `horizontal` || e === `both`;
  return (
    n(() => {
      if (i) return;
      let e = a.current?.parentElement?.parentElement;
      if (!e) return;
      let t = e.parentElement;
      if (!t) return;
      let n = () => {
        let r = e.getBoundingClientRect();
        (l && (t.style.width = `${r.width}px`),
          c && (t.style.height = `${r.height}px`),
          (o.current = requestAnimationFrame(n)));
      };
      return (
        (o.current = requestAnimationFrame(n)),
        () => {
          (o.current && cancelAnimationFrame(o.current),
            t && (l && (t.style.width = ``), c && (t.style.height = ``)));
        }
      );
    }, [e]),
    s(`div`, { ref: a, style: { ...r } })
  );
}
var oe = e(() => {
  (u(),
    x(),
    d(),
    (D.displayName = `Layout Jump Preventer`),
    C(D, {
      direction: {
        type: T.Enum,
        defaultValue: `vertical`,
        options: [`vertical`, `horizontal`, `both`],
        optionTitles: [`Vertical`, `Horizontal`, `Both`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        optionIcons: [`direction-vertical`, `direction-horizontal`, `direction-all`],
        description: `More components at [Framer University](https://frameruni.link/cc).`,
      },
    }));
});
function O(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R = e(() => {
    (u(),
      x(),
      m(),
      d(),
      (k = [`yXBi4F8Qs`, `TfBmNKc2O`]),
      (A = `framer-Ty7Gy`),
      (j = { TfBmNKc2O: `framer-v-17gwbgn`, yXBi4F8Qs: `framer-v-1wlzipl` }),
      (M = ({ value: e, children: t }) => {
        let n = a(p),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(p.Provider, { value: i, children: t });
      }),
      (N = { Closed: `TfBmNKc2O`, Open: `yXBi4F8Qs` }),
      (P = f.create(r)),
      (F = ({
        answer2: e,
        click: t,
        height: n,
        id: r,
        question: i,
        transition: a,
        width: o,
        ...s
      }) => ({
        ...s,
        C4OcAfU0Y: t ?? s.C4OcAfU0Y,
        I6WQqOURu: a ?? s.I6WQqOURu ?? { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        n9YOVtVav: i ?? s.n9YOVtVav ?? `Does Framer support XYZ?`,
        tJ_bRU_pm:
          e ??
          s.tJ_bRU_pm ??
          `To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas.`,
        variant: N[s.variant] ?? s.variant ?? `yXBi4F8Qs`,
      })),
      (I = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (L = _(
        c(function (e, n) {
          let i = t(null),
            a = n ?? i,
            o = ee(),
            { activeLocale: c, setLocale: u } = re();
          ie();
          let {
              style: d,
              className: p,
              layoutId: m,
              variant: h,
              n9YOVtVav: _,
              tJ_bRU_pm: v,
              I6WQqOURu: y,
              C4OcAfU0Y: x,
              ...S
            } = F(e),
            {
              baseVariant: C,
              classNames: w,
              clearLoadingGesture: T,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: oe,
              setGestureState: N,
              setVariant: L,
              variants: R,
            } = ne({
              cycleOrder: k,
              defaultVariant: `yXBi4F8Qs`,
              ref: a,
              variant: h,
              variantClassNames: j,
            }),
            z = I(e, R),
            { activeVariantCallback: B, delay: V } = ae(C),
            H = B(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
              L(`TfBmNKc2O`);
            }),
            U = B(async (...e) => {
              if (x && (await x(...e)) === !1) return !1;
              L(`yXBi4F8Qs`);
            }),
            W = b(A),
            G = () => C === `TfBmNKc2O`;
          return s(te, {
            id: m ?? o,
            children: s(P, {
              animate: R,
              initial: !1,
              children: s(M, {
                value: y,
                children: l(f.div, {
                  ...S,
                  ...E,
                  className: b(W, `framer-1wlzipl`, p, w),
                  "data-framer-name": `Open`,
                  layoutDependency: z,
                  layoutId: `yXBi4F8Qs`,
                  ref: a,
                  style: {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...d,
                  },
                  ...O({ TfBmNKc2O: { "data-framer-name": `Closed` } }, C, D),
                  children: [
                    l(f.div, {
                      className: `framer-exlxce`,
                      "data-framer-name": `Top`,
                      "data-highlight": !0,
                      layoutDependency: z,
                      layoutId: `P3SCo_xGE`,
                      onTap: H,
                      ...O({ TfBmNKc2O: { onTap: U } }, C, D),
                      children: [
                        l(f.div, {
                          className: `framer-14f74m5`,
                          layoutDependency: z,
                          layoutId: `WN00wEiaW`,
                          children: [
                            s(f.div, {
                              className: `framer-oqd8yj`,
                              layoutDependency: z,
                              layoutId: `Kyy_ttKWU`,
                              style: {
                                backgroundColor: `rgb(153, 153, 153)`,
                                borderBottomLeftRadius: 1,
                                borderBottomRightRadius: 1,
                                borderTopLeftRadius: 1,
                                borderTopRightRadius: 1,
                              },
                            }),
                            G() &&
                              s(f.div, {
                                className: `framer-2pw8yb`,
                                layoutDependency: z,
                                layoutId: `FYoCd6X4c`,
                                style: {
                                  backgroundColor: `rgb(153, 153, 153)`,
                                  borderBottomLeftRadius: 10,
                                  borderBottomRightRadius: 10,
                                  borderTopLeftRadius: 10,
                                  borderTopRightRadius: 10,
                                },
                              }),
                          ],
                        }),
                        s(g, {
                          __fromCanvasComponent: !0,
                          children: s(r, {
                            children: s(f.p, {
                              dir: `auto`,
                              style: {
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.05em`,
                                "--framer-line-height": `1em`,
                                "--framer-text-alignment": `center`,
                              },
                              children: `Does Framer support XYZ?`,
                            }),
                          }),
                          className: `framer-9lc2pn`,
                          fonts: [`Inter`],
                          layoutDependency: z,
                          layoutId: `sQzjwZjZW`,
                          style: {
                            "--framer-link-text-color": `rgb(0, 153, 255)`,
                            "--framer-link-text-decoration": `underline`,
                          },
                          text: _,
                          verticalAlignment: `top`,
                          withExternalLayout: !0,
                        }),
                      ],
                    }),
                    s(f.div, {
                      className: `framer-nuc8ts`,
                      "data-framer-name": `Answer`,
                      layoutDependency: z,
                      layoutId: `HP3aWMI8J`,
                      style: { opacity: 1 },
                      variants: { TfBmNKc2O: { opacity: 0 } },
                      children: s(g, {
                        __fromCanvasComponent: !0,
                        children: s(r, {
                          children: s(f.p, {
                            dir: `auto`,
                            style: {
                              "--framer-font-size": `14px`,
                              "--framer-letter-spacing": `-0.05em`,
                              "--framer-line-height": `1.3em`,
                              "--framer-text-alignment": `left`,
                              "--framer-text-color": `var(--extracted-r6o4lv, rgb(153, 153, 153))`,
                            },
                            children: `To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas.`,
                          }),
                        }),
                        className: `framer-vvit6t`,
                        fonts: [`Inter`],
                        layoutDependency: z,
                        layoutId: `oYG24OFOJ`,
                        style: {
                          "--extracted-r6o4lv": `rgb(153, 153, 153)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        text: v,
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
          `.framer-Ty7Gy.framer-11ohb1w, .framer-Ty7Gy .framer-11ohb1w { display: block; }`,
          `.framer-Ty7Gy.framer-1wlzipl { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-Ty7Gy .framer-exlxce { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ty7Gy .framer-14f74m5 { flex: none; height: 40px; overflow: visible; position: relative; width: 40px; }`,
          `.framer-Ty7Gy .framer-oqd8yj { flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; top: calc(50.00000000000002% - 1px / 2); width: 14px; }`,
          `.framer-Ty7Gy .framer-2pw8yb { flex: none; height: 14px; left: 6px; overflow: visible; position: absolute; top: calc(50.00000000000002% - 14px / 2); width: 1px; }`,
          `.framer-Ty7Gy .framer-9lc2pn { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-Ty7Gy .framer-nuc8ts { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-Ty7Gy .framer-vvit6t { --framer-text-wrap: balance; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-Ty7Gy.framer-v-17gwbgn.framer-1wlzipl { height: 40px; }`,
          `.framer-Ty7Gy.framer-v-17gwbgn .framer-14f74m5 { width: 30px; }`,
        ],
        `framer-Ty7Gy`
      )),
      (L.displayName = `Question`),
      (L.defaultProps = { height: 94.5, width: 400 }),
      C(L, {
        variant: {
          options: [`yXBi4F8Qs`, `TfBmNKc2O`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: T.Enum,
        },
        n9YOVtVav: {
          defaultValue: `Does Framer support XYZ?`,
          displayTextArea: !1,
          title: `Question`,
          type: T.String,
        },
        onn9YOVtVavChange: { changes: `n9YOVtVav`, type: T.ChangeHandler },
        tJ_bRU_pm: {
          defaultValue: `To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas.`,
          displayTextArea: !0,
          title: `Answer 2`,
          type: T.String,
        },
        ontJ_bRU_pmChange: { changes: `tJ_bRU_pm`, type: T.ChangeHandler },
        I6WQqOURu: {
          defaultValue: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
          title: `Transition`,
          type: T.Transition,
        },
        C4OcAfU0Y: { title: `Click`, type: T.EventHandler },
      }),
      h(
        L,
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
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var B,
  V,
  H,
  U,
  W,
  G,
  se,
  K,
  ce,
  q,
  le,
  ue,
  J,
  de = e(() => {
    (u(),
      x(),
      m(),
      d(),
      oe(),
      R(),
      (B = v(L)),
      (V = v(D)),
      (H = [`qUmuv1rgg`, `r3jm1JXGg`, `YaDdpE0x4`, `ggSGYB_rA`]),
      (U = `framer-QkSuS`),
      (W = {
        ggSGYB_rA: `framer-v-17mjmgq`,
        qUmuv1rgg: `framer-v-19bvaxe`,
        r3jm1JXGg: `framer-v-1rfn9qp`,
        YaDdpE0x4: `framer-v-hcrpor`,
      }),
      (G = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (se = ({ value: e, children: t }) => {
        let n = a(p),
          r = e ?? n.transition,
          i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return s(p.Provider, { value: i, children: t });
      }),
      (K = {
        "Variant 1": `qUmuv1rgg`,
        "Variant 2": `r3jm1JXGg`,
        "Variant 3": `YaDdpE0x4`,
        "Variant 4": `ggSGYB_rA`,
      }),
      (ce = f.create(r)),
      (q = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (le = ({
        answer1: e,
        answer2: t,
        answer3: n,
        height: r,
        id: i,
        question1: a,
        question2: o,
        question3: s,
        transition: c,
        width: l,
        ...u
      }) => ({
        ...u,
        f6MCfUa9_:
          n ??
          u.f6MCfUa9_ ??
          `To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas.`,
        HfER0Vust: s ?? u.HfER0Vust ?? `How do I add videos?`,
        hx0b_8Yll: o ?? u.hx0b_8Yll ?? `How do I add images?`,
        kr50LjJ8n: c ?? u.kr50LjJ8n ?? { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
        lvMeUTpra:
          e ??
          u.lvMeUTpra ??
          `To draw a Frame, click on Layout in the Toolbar, then select Frame. Now, you can click and drag anywhere on the Canvas.`,
        N1DFKMWNl: a ?? u.N1DFKMWNl ?? `How do I draw Frames?`,
        nNR17NJf8:
          t ??
          u.nNR17NJf8 ??
          `To add an image, select any Frame, and either double-click on it, or go to the Fill property. In the Fill property, switch to the image icon. Here, you can upload images.`,
        variant: K[u.variant] ?? u.variant ?? `qUmuv1rgg`,
      })),
      (ue = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = _(
        c(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = ee(),
            { activeLocale: o, setLocale: c } = re(),
            u = ie(),
            {
              style: d,
              className: p,
              layoutId: m,
              variant: h,
              N1DFKMWNl: g,
              onN1DFKMWNlChange: _,
              lvMeUTpra: v,
              onlvMeUTpraChange: y,
              kr50LjJ8n: x,
              hx0b_8Yll: C,
              onhx0b_8YllChange: T,
              nNR17NJf8: E,
              onnNR17NJf8Change: oe,
              HfER0Vust: O,
              onHfER0VustChange: k,
              f6MCfUa9_: A,
              onf6MCfUa9_Change: j,
              ...M
            } = le(e),
            [N, P] = q(g, _),
            [F, I] = q(v, y),
            [R, B] = q(C, T),
            [V, K] = q(E, oe),
            [J, de] = q(O, k),
            [fe, pe] = q(A, j),
            {
              baseVariant: Y,
              classNames: me,
              clearLoadingGesture: he,
              gestureHandlers: ge,
              gestureVariant: X,
              isLoading: _e,
              setGestureState: ve,
              setVariant: Z,
              variants: ye,
            } = ne({
              cycleOrder: H,
              defaultVariant: `qUmuv1rgg`,
              ref: i,
              variant: h,
              variantClassNames: W,
            }),
            Q = ue(e, ye),
            { activeVariantCallback: $, delay: be } = ae(Y),
            xe = $(async (...e) => {
              Z(`r3jm1JXGg`);
            }),
            Se = $(async (...e) => {
              Z(`YaDdpE0x4`);
            }),
            Ce = $(async (...e) => {
              Z(`ggSGYB_rA`);
            }),
            we = b(U);
          return s(te, {
            id: m ?? a,
            children: s(ce, {
              animate: ye,
              initial: !1,
              children: s(se, {
                value: x,
                children: l(f.div, {
                  ...M,
                  ...ge,
                  className: b(we, `framer-19bvaxe`, p, me),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: Q,
                  layoutId: `qUmuv1rgg`,
                  ref: i,
                  style: { ...d },
                  ...z(
                    {
                      ggSGYB_rA: { "data-framer-name": `Variant 4` },
                      r3jm1JXGg: { "data-framer-name": `Variant 2` },
                      YaDdpE0x4: { "data-framer-name": `Variant 3` },
                    },
                    Y,
                    X
                  ),
                  children: [
                    s(S, {
                      height: 108,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + 0,
                      children: s(w, {
                        className: `framer-14f1e5y-container`,
                        layoutDependency: Q,
                        layoutId: `PlK6b4Ufs-container`,
                        nodeId: `PlK6b4Ufs`,
                        rendersWithMotion: !0,
                        scopeId: `d45iZ4nbf`,
                        children: s(L, {
                          C4OcAfU0Y: xe,
                          height: `100%`,
                          I6WQqOURu: x,
                          id: `PlK6b4Ufs`,
                          layoutId: `PlK6b4Ufs`,
                          n9YOVtVav: N,
                          onn9YOVtVavChange: P,
                          ontJ_bRU_pmChange: I,
                          style: { width: `100%` },
                          tJ_bRU_pm: F,
                          variant: G(`TfBmNKc2O`),
                          width: `100%`,
                          ...z({ r3jm1JXGg: { variant: G(`yXBi4F8Qs`) } }, Y, X),
                        }),
                      }),
                    }),
                    s(S, {
                      height: 108,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + 113,
                      children: s(w, {
                        className: `framer-gf64y0-container`,
                        layoutDependency: Q,
                        layoutId: `cVZ6Nh_20-container`,
                        nodeId: `cVZ6Nh_20`,
                        rendersWithMotion: !0,
                        scopeId: `d45iZ4nbf`,
                        children: s(L, {
                          C4OcAfU0Y: Se,
                          height: `100%`,
                          I6WQqOURu: x,
                          id: `cVZ6Nh_20`,
                          layoutId: `cVZ6Nh_20`,
                          n9YOVtVav: R,
                          onn9YOVtVavChange: B,
                          ontJ_bRU_pmChange: K,
                          style: { width: `100%` },
                          tJ_bRU_pm: V,
                          variant: G(`TfBmNKc2O`),
                          width: `100%`,
                          ...z({ YaDdpE0x4: { variant: G(`yXBi4F8Qs`) } }, Y, X),
                        }),
                      }),
                    }),
                    s(S, {
                      height: 108,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + 226,
                      children: s(w, {
                        className: `framer-15nop4o-container`,
                        layoutDependency: Q,
                        layoutId: `uyiBlsdtE-container`,
                        nodeId: `uyiBlsdtE`,
                        rendersWithMotion: !0,
                        scopeId: `d45iZ4nbf`,
                        children: s(L, {
                          C4OcAfU0Y: Ce,
                          height: `100%`,
                          I6WQqOURu: x,
                          id: `uyiBlsdtE`,
                          layoutId: `uyiBlsdtE`,
                          n9YOVtVav: J,
                          onn9YOVtVavChange: de,
                          ontJ_bRU_pmChange: pe,
                          style: { width: `100%` },
                          tJ_bRU_pm: fe,
                          variant: G(`TfBmNKc2O`),
                          width: `100%`,
                          ...z({ ggSGYB_rA: { variant: G(`yXBi4F8Qs`) } }, Y, X),
                        }),
                      }),
                    }),
                    s(S, {
                      children: s(w, {
                        className: `framer-afrmtu-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: Q,
                        layoutId: `aYf_Ovqsx-container`,
                        nodeId: `aYf_Ovqsx`,
                        rendersWithMotion: !0,
                        scopeId: `d45iZ4nbf`,
                        children: s(D, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `aYf_Ovqsx`,
                          layoutId: `aYf_Ovqsx`,
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
          `.framer-QkSuS.framer-1aul352, .framer-QkSuS .framer-1aul352 { display: block; }`,
          `.framer-QkSuS.framer-19bvaxe { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 340px; }`,
          `.framer-QkSuS .framer-14f1e5y-container, .framer-QkSuS .framer-gf64y0-container, .framer-QkSuS .framer-15nop4o-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-QkSuS .framer-afrmtu-container { flex: none; height: auto; position: relative; width: auto; }`,
        ],
        `framer-QkSuS`
      )),
      (J.displayName = `Accordion`),
      (J.defaultProps = { height: 135, width: 340 }),
      C(J, {
        variant: {
          options: [`qUmuv1rgg`, `r3jm1JXGg`, `YaDdpE0x4`, `ggSGYB_rA`],
          optionTitles: [`Variant 1`, `Variant 2`, `Variant 3`, `Variant 4`],
          title: `Variant`,
          type: T.Enum,
        },
        N1DFKMWNl: {
          defaultValue: `How do I draw Frames?`,
          displayTextArea: !1,
          title: `Question 1`,
          type: T.String,
        },
        onN1DFKMWNlChange: { changes: `N1DFKMWNl`, type: T.ChangeHandler },
        lvMeUTpra: {
          defaultValue: `To draw a Frame, click on Layout in the Toolbar, then select Frame. Now, you can click and drag anywhere on the Canvas.`,
          displayTextArea: !0,
          title: `Answer 1`,
          type: T.String,
        },
        onlvMeUTpraChange: { changes: `lvMeUTpra`, type: T.ChangeHandler },
        kr50LjJ8n: {
          defaultValue: { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` },
          title: `Transition`,
          type: T.Transition,
        },
        hx0b_8Yll: {
          defaultValue: `How do I add images?`,
          displayTextArea: !1,
          title: `Question 2`,
          type: T.String,
        },
        onhx0b_8YllChange: { changes: `hx0b_8Yll`, type: T.ChangeHandler },
        nNR17NJf8: {
          defaultValue: `To add an image, select any Frame, and either double-click on it, or go to the Fill property. In the Fill property, switch to the image icon. Here, you can upload images.`,
          displayTextArea: !0,
          title: `Answer 2`,
          type: T.String,
        },
        onnNR17NJf8Change: { changes: `nNR17NJf8`, type: T.ChangeHandler },
        HfER0Vust: {
          defaultValue: `How do I add videos?`,
          displayTextArea: !1,
          title: `Question 3`,
          type: T.String,
        },
        onHfER0VustChange: { changes: `HfER0Vust`, type: T.ChangeHandler },
        f6MCfUa9_: {
          defaultValue: `To add a video to your site, click the “Insert” button and navigate to the “Media” section. Then, drag and drop a video component onto the Canvas.`,
          displayTextArea: !0,
          title: `Answer 3`,
          type: T.String,
        },
        onf6MCfUa9_Change: { changes: `f6MCfUa9_`, type: T.ChangeHandler },
      }),
      h(J, [{ explicitInter: !0, fonts: [] }, ...B, ...V], { supportsExplicitInterCodegen: !0 }),
      (J.loader = { load: (e, t) => (t.locale, Promise.allSettled([y(L, {}, t)])) }));
  });
export { de as n, J as t };
//# sourceMappingURL=d45iZ4nbf.DzNFo8IJ.mjs.map
