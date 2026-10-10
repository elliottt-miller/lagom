import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  l as ee,
  m as c,
  s as l,
  u,
} from "./react.D0omlcQg.mjs";
import { M as d, a as f, r as p, t as m } from "./motion.Bi2Azsus.mjs";
import {
  B as h,
  C as g,
  Ct as _,
  Dt as te,
  Et as v,
  Ft as y,
  It as b,
  K as x,
  L as S,
  Lt as C,
  M as w,
  Mt as T,
  N as E,
  O as D,
  P as O,
  Pt as ne,
  St as k,
  Tt as A,
  Ut as j,
  Vt as M,
  _t as N,
  a as P,
  at as F,
  bt as re,
  et as I,
  f as L,
  ht as ie,
  i as R,
  k as z,
  n as ae,
  o as B,
  p as V,
  q as H,
  st as U,
  w as W,
  wt as oe,
  zt as G,
} from "./framer.zRtTBSC3.mjs";
import { i as se, n as K, r as ce, t as le } from "./amNEcipQY.BtEVe7io.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./b_m5Js9Ir.C0kksidw.mjs";
import { i as me, n as he, r as ge, t as _e } from "./CT_DBbR5R.CmeCM4mC.mjs";
import { i as ve, n as ye, r as be, t as xe } from "./nV6XvMHlN.6LAm4Vcv.mjs";
import { n as Se, t as Ce } from "./BbFuZPGaK.ZVDYkDQW.mjs";
import { n as we, t as Te } from "./rulyW4hkS.B6GaFbwO.mjs";
import { n as Ee, t as De } from "./sAat8iFw8.DVzxEiEg.mjs";
import { i as Oe, n as ke, r as Ae, t as je } from "./Hme2S1hiD.DgYAjN68.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./DAYH3uYfF.CyGAyeDQ.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./hcX8gSJpR.DMQ-zQgz.mjs";
import { i as Be, n as Ve, r as He, t as Ue } from "./tzSCYd6Qc.dsek_Sf0.mjs";
import { n as We, t as Ge } from "./Hrf2VVQ5F.CQOvGkgo.mjs";
import {
  a as Ke,
  c as qe,
  i as Je,
  n as Ye,
  o as Xe,
  r as Ze,
  s as q,
  t as Qe,
} from "./xpf5TMhJU.DsI2rYFs.mjs";
import { a as $e, r as et } from "./nRUBpiZY0.D2DPzPid.mjs";
import tt, { t as nt } from "./XtJzsgS1pVm3z5aGTF-iM0a5u46p8hHowyula-se8GQ.ByAuTg5y.mjs";
function rt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var it,
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
  ht,
  gt,
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  J,
  wt = e(() => {
    (s(),
      I(),
      m(),
      t(),
      qe(),
      se(),
      Xe(),
      Me(),
      Ie(),
      Oe(),
      Be(),
      ue(),
      de(),
      Se(),
      (it = x(q)),
      (at = x(Ce)),
      (ot = x(pe)),
      (st = j(G(w))),
      (ct = [`TBAcir2H4`, `SZZanYjav`, `oF5VsfZwB`]),
      (lt = `framer-JNPGv`),
      (ut = {
        oF5VsfZwB: `framer-v-1cp5wyj`,
        SZZanYjav: `framer-v-3y2p3x`,
        TBAcir2H4: `framer-v-11y8jg3`,
      }),
      F(),
      (dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ft = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pt = (e, t, n) => {
        if (typeof e != `string`) return ``;
        let r = new Date(e);
        if (isNaN(r.getTime())) return ``;
        let i = `en-US`;
        try {
          return r.toLocaleString(n || i, t);
        } catch {
          return r.toLocaleString(i, t);
        }
      }),
      (mt = { hour: `2-digit`, hour12: !0, minute: `2-digit`, timeZone: `UTC` }),
      (ht = (e, t) => pt(e, mt, t)),
      (gt = (e, t) =>
        typeof e == `string` && typeof t == `string`
          ? t + e
          : typeof e == `string`
            ? e
            : typeof t == `string`
              ? t
              : ``),
      (_t = {
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        transition: { bounce: 0, delay: 0, duration: 0.4, type: `spring` },
        x: 0,
        y: 0,
      }),
      (vt = {
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
      (yt = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (bt = { "Integrated Map": `oF5VsfZwB`, Base: `TBAcir2H4`, Selected: `SZZanYjav` }),
      (xt = d.create(r)),
      (St = ({
        closesAt: e,
        googleCoordinates: t,
        height: n,
        id: i,
        link: a,
        opensAt: o,
        storeAddress: s,
        storeName: ee,
        width: c,
        ...u
      }) => ({
        ...u,
        a2PH_U_lq: o ?? u.a2PH_U_lq ?? `1970-01-01T09:30:00.000Z`,
        FDCqm9z4a: ee ?? u.FDCqm9z4a ?? `Sneaks Miami Design District`,
        Fuurl_OdZ: a ?? u.Fuurl_OdZ,
        p4IsTOy6X: e ?? u.p4IsTOy6X ?? `1970-01-01T21:30:00.000Z`,
        SVp6vluqo: t ?? u.SVp6vluqo ?? `23.00541930770128, 72.60516262339667`,
        tYPOqSkzQ:
          s ??
          u.tYPOqSkzQ ??
          l(r, {
            children: l(d.p, { dir: `auto`, children: `151 NE 41st Street, Miami, FL 33137, USA` }),
          }),
        variant: bt[u.variant] ?? u.variant ?? `TBAcir2H4`,
      })),
      (Ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = C(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = v(),
            f = N(),
            {
              style: m,
              className: h,
              layoutId: g,
              variant: _,
              Fuurl_OdZ: te,
              FDCqm9z4a: y,
              tYPOqSkzQ: x,
              a2PH_U_lq: C,
              p4IsTOy6X: T,
              SVp6vluqo: E,
              ...D
            } = St(e),
            {
              baseVariant: O,
              classNames: ne,
              clearLoadingGesture: k,
              gestureHandlers: j,
              gestureVariant: M,
              isLoading: P,
              setGestureState: F,
              setVariant: re,
              variants: I,
            } = b({
              cycleOrder: ct,
              defaultVariant: `TBAcir2H4`,
              ref: a,
              variant: _,
              variantClassNames: ut,
            }),
            L = Ct(e, I),
            ie = S(lt, je, Ue, ze, Ze, Fe, le),
            ae = () => O === `oF5VsfZwB`,
            B = A(),
            V = gt(ht(C, B), `Opens  `),
            H = gt(ht(T, B), `Closes  `),
            U = () => !![`SZZanYjav`, `oF5VsfZwB`].includes(O);
          return l(p, {
            id: g ?? s,
            children: l(xt, {
              animate: I,
              initial: !1,
              children: l(yt, {
                value: dt,
                children: u(d.div, {
                  ...D,
                  ...j,
                  className: S(ie, `framer-11y8jg3`, h, ne),
                  "data-border": !0,
                  "data-framer-name": `Base`,
                  layoutDependency: L,
                  layoutId: `TBAcir2H4`,
                  ref: a,
                  style: {
                    "--border-bottom-width": `1.5px`,
                    "--border-color": `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                    "--border-left-width": `1.5px`,
                    "--border-right-width": `1.5px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1.5px`,
                    "--corner-shape-fallback": 0.796,
                    backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                    borderBottomLeftRadius: `calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderBottomRightRadius: `calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopLeftRadius: `calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    borderTopRightRadius: `calc(31px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                    cornerShape: `superellipse(1.4)`,
                    ...m,
                  },
                  variants: {
                    oF5VsfZwB: {
                      "--border-color": `var(--token-fef8ed21-2275-401e-b9be-ccc5aaee5e6f, rgb(237, 237, 237))`,
                      backgroundColor: `var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255))`,
                    },
                    SZZanYjav: {
                      "--border-color": `var(--token-2da0c940-421e-44a3-be8a-e5120d5d1053, rgb(0, 123, 255))`,
                    },
                  },
                  ...rt(
                    {
                      oF5VsfZwB: { "data-framer-name": `Integrated Map` },
                      SZZanYjav: { "data-framer-name": `Selected` },
                    },
                    O,
                    M
                  ),
                  children: [
                    ae() &&
                      l(R, {
                        children: l(w, {
                          className: `framer-2ohiwn-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: L,
                          layoutId: `ZNFwiT4_Y-container`,
                          nodeId: `ZNFwiT4_Y`,
                          rendersWithMotion: !0,
                          scopeId: `q2LtQikRu`,
                          children: l(q, {
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            coordinates: E,
                            height: `100%`,
                            id: `ZNFwiT4_Y`,
                            isMixedBorderRadius: !1,
                            layoutId: `ZNFwiT4_Y`,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            width: `100%`,
                            zoom: 15,
                          }),
                        }),
                      }),
                    u(d.div, {
                      className: `framer-1qo50y0`,
                      "data-framer-name": `Body`,
                      layoutDependency: L,
                      layoutId: `n4op0sVg_`,
                      children: [
                        u(d.div, {
                          className: `framer-zwvhb6`,
                          "data-framer-name": `Name & Address`,
                          layoutDependency: L,
                          layoutId: `CCnbuclWX`,
                          children: [
                            l(z, {
                              __fromCanvasComponent: !0,
                              children: l(r, {
                                children: l(d.p, {
                                  className: `framer-styles-preset-bnfmu7`,
                                  "data-styles-preset": `Hme2S1hiD`,
                                  dir: `auto`,
                                  children: `Adidas Store Delhi, Pacific Mall NSP Delhi`,
                                }),
                              }),
                              className: `framer-12ilio7`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `M2VdMkFP7`,
                              text: y,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            l(z, {
                              __fromCanvasComponent: !0,
                              children: x,
                              className: `framer-kuw317`,
                              fonts: [`Inter`],
                              layoutDependency: L,
                              layoutId: `NNRoyUl2W`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                              },
                              stylesPresetsClassNames: {
                                h5: `framer-styles-preset-1lkvzko`,
                                h6: `framer-styles-preset-1mts5yh`,
                                p: `framer-styles-preset-1hqmwka`,
                                table: `framer-styles-preset-176fugv`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          ],
                        }),
                        l(R, {
                          height: 1,
                          width: `calc(${f?.width || `100vw`} - 48px)`,
                          y: (f?.y || 0) + 0 + 0 + 24 + 230,
                          ...rt({ oF5VsfZwB: { y: (f?.y || 0) + 0 + 170 + 24 + 230 } }, O, M),
                          children: l(w, {
                            className: `framer-1jl4cxq-container`,
                            layoutDependency: L,
                            layoutId: `UaaRHSIJa-container`,
                            nodeId: `UaaRHSIJa`,
                            rendersWithMotion: !0,
                            scopeId: `q2LtQikRu`,
                            children: l(Ce, {
                              height: `100%`,
                              id: `UaaRHSIJa`,
                              layoutId: `UaaRHSIJa`,
                              style: { height: `100%`, width: `100%` },
                              variant: ft(`FveAb6f2W`),
                              width: `100%`,
                            }),
                          }),
                        }),
                        u(d.div, {
                          className: `framer-89olh4`,
                          "data-framer-name": `Opening Hours`,
                          layoutDependency: L,
                          layoutId: `STFAaMdLM`,
                          children: [
                            l(d.div, {
                              className: `framer-x86gvm`,
                              "data-framer-name": `Opens`,
                              layoutDependency: L,
                              layoutId: `zUk_Qo1gy`,
                              children: l(z, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(d.p, {
                                    className: `framer-styles-preset-9tj2n0`,
                                    "data-styles-preset": `amNEcipQY`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                                    },
                                    children: `Opens  09:30 AM`,
                                  }),
                                }),
                                className: `framer-17x71os`,
                                "data-framer-name": `Store Name`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `GvqynT9bf`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                },
                                text: l(`time`, { dateTime: C, children: V }),
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            l(d.div, {
                              className: `framer-1qff8l6`,
                              "data-framer-name": `Closes`,
                              layoutDependency: L,
                              layoutId: `RNtYKwtaQ`,
                              children: l(z, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(d.p, {
                                    className: `framer-styles-preset-9tj2n0`,
                                    "data-styles-preset": `amNEcipQY`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                                    },
                                    children: `Closes  09:30 PM`,
                                  }),
                                }),
                                className: `framer-134cpu8`,
                                "data-framer-name": `Store Name`,
                                fonts: [`Inter`],
                                layoutDependency: L,
                                layoutId: `TPaHtE1IN`,
                                style: {
                                  "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                },
                                text: l(`time`, { dateTime: T, children: H }),
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                          ],
                        }),
                        U() &&
                          l(R, {
                            ...rt(
                              {
                                oF5VsfZwB: {
                                  height: 27,
                                  width: `calc(${f?.width || `100vw`} - 48px)`,
                                  y: (f?.y || 0) + 0 + 170 + 24 + 284,
                                },
                                SZZanYjav: {
                                  height: 27,
                                  width: `calc(${f?.width || `100vw`} - 48px)`,
                                  y: (f?.y || 0) + 0 + 0 + 24 + 284,
                                },
                              },
                              O,
                              M
                            ),
                            children: l(st, {
                              __perspectiveFX: !1,
                              __smartComponentFX: !0,
                              __targetOpacity: 1,
                              animate: _t,
                              className: `framer-1ns3wjw-container`,
                              "data-framer-appear-id": `1ns3wjw`,
                              initial: vt,
                              layoutDependency: L,
                              layoutId: `cqSWp0JAl-container`,
                              nodeId: `cqSWp0JAl`,
                              optimized: !0,
                              rendersWithMotion: !0,
                              scopeId: `q2LtQikRu`,
                              children: l(pe, {
                                height: `100%`,
                                hZdVwdl_Y: !1,
                                id: `cqSWp0JAl`,
                                layoutId: `cqSWp0JAl`,
                                peKL8pfJA: fe,
                                style: { width: `100%` },
                                TDPWRYXxk: `View`,
                                variant: ft(`fGebBpVaS`),
                                vFRI3q06T: te,
                                width: `100%`,
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
          `.framer-JNPGv.framer-1vwb71c, .framer-JNPGv .framer-1vwb71c { display: block; }`,
          `.framer-JNPGv.framer-11y8jg3 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 344px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-JNPGv .framer-2ohiwn-container { flex: none; height: 170px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-JNPGv .framer-1qo50y0 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 100%; }`,
          `.framer-JNPGv .framer-zwvhb6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JNPGv .framer-12ilio7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JNPGv .framer-kuw317 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JNPGv .framer-1jl4cxq-container { flex: none; height: 1px; position: relative; width: 100%; }`,
          `.framer-JNPGv .framer-89olh4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JNPGv .framer-x86gvm, .framer-JNPGv .framer-1qff8l6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-JNPGv .framer-17x71os, .framer-JNPGv .framer-134cpu8 { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre; width: auto; }`,
          `.framer-JNPGv .framer-1ns3wjw-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-JNPGv.framer-v-3y2p3x .framer-1qo50y0 { padding: 24px 24px 19px 24px; }`,
          `.framer-JNPGv.framer-v-1cp5wyj .framer-1qo50y0 { padding: 24px 24px 20px 24px; }`,
          ...ke,
          ...Ve,
          ...Le,
          ...Je,
          ...Ne,
          ...K,
          `.framer-JNPGv[data-border="true"]::after, .framer-JNPGv [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-JNPGv`
      )),
      (J.displayName = `Store Card`),
      (J.defaultProps = { height: 151.5, width: 344 }),
      O(J, {
        variant: {
          options: [`TBAcir2H4`, `SZZanYjav`, `oF5VsfZwB`],
          optionTitles: [`Base`, `Selected`, `Integrated Map`],
          title: `Variant`,
          type: B.Enum,
        },
        Fuurl_OdZ: { title: `Link`, type: B.Link },
        FDCqm9z4a: {
          defaultValue: `Sneaks Miami Design District`,
          title: `Store Name`,
          type: B.String,
        },
        onFDCqm9z4aChange: { changes: `FDCqm9z4a`, type: B.ChangeHandler },
        tYPOqSkzQ: {
          defaultValue: `<p dir="auto">151 NE 41st Street, Miami, FL 33137, USA</p>`,
          title: `Store Address`,
          type: B.RichText,
        },
        a2PH_U_lq: { defaultValue: `1970-01-01T09:30:00.000Z`, title: `Opens At`, type: B.Date },
        ona2PH_U_lqChange: { changes: `a2PH_U_lq`, type: B.ChangeHandler },
        p4IsTOy6X: { defaultValue: `1970-01-01T21:30:00.000Z`, title: `Closes At`, type: B.Date },
        onp4IsTOy6XChange: { changes: `p4IsTOy6X`, type: B.ChangeHandler },
        SVp6vluqo: {
          defaultValue: `23.00541930770128, 72.60516262339667`,
          placeholder: `Framer B.V.`,
          title: `Google Coordinates`,
          type: B.String,
        },
        onSVp6vluqoChange: { changes: `SVp6vluqo`, type: B.ChangeHandler },
      }),
      E(
        J,
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
          ...it,
          ...at,
          ...ot,
          ...H(Ae),
          ...H(He),
          ...H(Re),
          ...H(Ke),
          ...H(Pe),
          ...H(ce),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (J.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([h(Ce, {}, t), h(pe, {}, t)])),
      }));
  }),
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At,
  jt,
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Y,
  Rt = e(() => {
    (s(),
      I(),
      m(),
      t(),
      we(),
      (Tt = x(Te)),
      (Et = G(Te)),
      (Dt = [`B61_BL_iz`, `YzeiBTjIT`]),
      (Ot = `framer-t9Ssb`),
      (kt = { B61_BL_iz: `framer-v-1nq8e1a`, YzeiBTjIT: `framer-v-1q8zkpo` }),
      (At = { duration: 0, type: `tween` }),
      (jt = { delay: 0, duration: 0.65, ease: [0, 0, 1, 1], type: `tween` }),
      (Mt = {
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
      (Nt = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (Pt = { Hidden: `YzeiBTjIT`, Loading: `B61_BL_iz` }),
      (Ft = d.create(r)),
      (It = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Pt[r.variant] ?? r.variant ?? `B61_BL_iz`,
      })),
      (Lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Y = C(
        c(function (e, t) {
          let r = o(null),
            i = t ?? r,
            a = n(),
            { activeLocale: s, setLocale: ee } = v();
          N();
          let { style: c, className: u, layoutId: f, variant: m, ...h } = It(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: te,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: C,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = b({
              cycleOrder: Dt,
              defaultVariant: `B61_BL_iz`,
              ref: i,
              variant: m,
              variantClassNames: kt,
            }),
            D = Lt(e, E),
            O = [],
            ne = () => g !== `YzeiBTjIT`,
            k = S(Ot, ...O);
          return l(p, {
            id: f ?? a,
            children: l(Ft, {
              animate: E,
              initial: !1,
              children:
                ne() &&
                l(Nt, {
                  value: At,
                  children: l(d.div, {
                    ...h,
                    ...y,
                    className: S(k, `framer-1nq8e1a`, u, _),
                    "data-framer-name": `Loading`,
                    layoutDependency: D,
                    layoutId: `B61_BL_iz`,
                    ref: i,
                    style: { ...c },
                    children: l(Et, {
                      __framer__loop: Mt,
                      __framer__loopEffectEnabled: !0,
                      __framer__loopRepeatDelay: 0,
                      __framer__loopRepeatType: `loop`,
                      __framer__loopTransition: jt,
                      __perspectiveFX: !1,
                      __smartComponentFX: !0,
                      __targetOpacity: 1,
                      animated: !0,
                      className: `framer-ptbnlq`,
                      layoutDependency: D,
                      layoutId: `YFk0vTjqr`,
                      style: {
                        "--118a55": `var(--token-20891e9f-0dd5-476a-bdd1-5f7056109a89, rgb(0, 0, 0))`,
                      },
                    }),
                  }),
                }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-t9Ssb.framer-e7rpc1, .framer-t9Ssb .framer-e7rpc1 { display: block; }`,
          `.framer-t9Ssb.framer-1nq8e1a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 40px; }`,
          `.framer-t9Ssb .framer-ptbnlq { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
        ],
        `framer-t9Ssb`
      )),
      (Y.displayName = `Store Pagination Spinner`),
      (Y.defaultProps = { height: 20, width: 40 }),
      O(Y, {
        variant: {
          options: [`B61_BL_iz`, `YzeiBTjIT`],
          optionTitles: [`Loading`, `Hidden`],
          title: `Variant`,
          type: B.Enum,
        },
      }),
      E(Y, [{ explicitInter: !0, fonts: [] }, ...Tt], { supportsExplicitInterCodegen: !0 }));
  });
function zt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
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
  X,
  Zt = e(() => {
    (s(),
      I(),
      m(),
      t(),
      qe(),
      me(),
      We(),
      (Bt = x(q)),
      (Vt = x(Ge)),
      (Ht = [`o3PwaQ7_V`, `h_6m_4lGN`]),
      (Ut = `framer-o2kgn`),
      (Wt = { h_6m_4lGN: `framer-v-1whvyy0`, o3PwaQ7_V: `framer-v-v8ux9g` }),
      (Gt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Kt = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (qt = { Active: `h_6m_4lGN`, Inactive: `o3PwaQ7_V` }),
      (Jt = d.create(r)),
      (Yt = ({ googleCoordinates: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: qt[i.variant] ?? i.variant ?? `o3PwaQ7_V`,
        waO0zPV5Z: e ?? i.waO0zPV5Z,
      })),
      (Xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: ee, setLocale: c } = v();
          N();
          let { style: f, className: m, layoutId: h, variant: g, waO0zPV5Z: _, ...te } = Yt(e),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: C,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: D,
              setGestureState: O,
              setVariant: ne,
              variants: k,
            } = b({
              cycleOrder: Ht,
              defaultVariant: `o3PwaQ7_V`,
              ref: a,
              variant: g,
              variantClassNames: Wt,
            }),
            A = Xt(e, k),
            j = S(Ut, _e),
            M = () => y === `h_6m_4lGN`,
            P = () => y !== `h_6m_4lGN`;
          return l(p, {
            id: h ?? s,
            children: l(Jt, {
              animate: k,
              initial: !1,
              children: l(Kt, {
                value: Gt,
                children: u(d.div, {
                  ...te,
                  ...T,
                  className: S(j, `framer-v8ux9g`, m, x),
                  "data-framer-name": `Inactive`,
                  layoutDependency: A,
                  layoutId: `o3PwaQ7_V`,
                  ref: a,
                  style: { ...f },
                  ...zt({ h_6m_4lGN: { "data-framer-name": `Active` } }, y, E),
                  children: [
                    M() &&
                      l(R, {
                        children: l(w, {
                          className: `framer-l2e04u-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: A,
                          layoutId: `S0UR2Kr_x-container`,
                          nodeId: `S0UR2Kr_x`,
                          rendersWithMotion: !0,
                          scopeId: `TUhvHjB8l`,
                          children: l(q, {
                            borderRadius: 0,
                            bottomLeftRadius: 0,
                            bottomRightRadius: 0,
                            coordinates: _,
                            height: `100%`,
                            id: `S0UR2Kr_x`,
                            isMixedBorderRadius: !1,
                            layoutId: `S0UR2Kr_x`,
                            style: { height: `100%`, width: `100%` },
                            topLeftRadius: 0,
                            topRightRadius: 0,
                            width: `100%`,
                            zoom: 15,
                          }),
                        }),
                      }),
                    P() &&
                      l(d.div, {
                        className: `framer-175co96`,
                        layoutDependency: A,
                        layoutId: `lB_D0_s0c`,
                        style: {
                          backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                        },
                        children: u(d.div, {
                          className: `framer-1vftgo3`,
                          "data-framer-name": `Icon & Text`,
                          layoutDependency: A,
                          layoutId: `uOxI1UGaz`,
                          children: [
                            l(Ge, {
                              animated: !0,
                              className: `framer-1ewabql`,
                              layoutDependency: A,
                              layoutId: `ZV5yzGdEw`,
                              style: {
                                "--118a55": `var(--token-318e7803-4327-4041-8ab7-5a5664c34c8f, rgb(179, 179, 179))`,
                              },
                            }),
                            l(z, {
                              __fromCanvasComponent: !0,
                              children: l(r, {
                                children: l(d.p, {
                                  className: `framer-styles-preset-5rfdkx`,
                                  "data-styles-preset": `CT_DBbR5R`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148)))`,
                                  },
                                  children: `Select a store to view it on map`,
                                }),
                              }),
                              className: `framer-1oxeuqg`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `JOJrZuYrL`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, rgb(148, 148, 148))`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
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
          `.framer-o2kgn.framer-1dlxcs1, .framer-o2kgn .framer-1dlxcs1 { display: block; }`,
          `.framer-o2kgn.framer-v8ux9g { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 820px; }`,
          `.framer-o2kgn .framer-l2e04u-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; z-index: 1; }`,
          `.framer-o2kgn .framer-175co96 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 28px; position: relative; width: 1px; }`,
          `.framer-o2kgn .framer-1vftgo3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-o2kgn .framer-1ewabql { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }`,
          `.framer-o2kgn .framer-1oxeuqg { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...he,
        ],
        `framer-o2kgn`
      )),
      (X.displayName = `Store Google Map`),
      (X.defaultProps = { height: 800, width: 820 }),
      O(X, {
        variant: {
          options: [`o3PwaQ7_V`, `h_6m_4lGN`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: B.Enum,
        },
        waO0zPV5Z: { optional: !0, title: `Google Coordinates`, type: B.String },
        onwaO0zPV5ZChange: { changes: `waO0zPV5Z`, type: B.ChangeHandler },
      }),
      E(
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
            ],
          },
          ...Bt,
          ...Vt,
          ...H(ge),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Qt,
  $t,
  en,
  tn,
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
  Z,
  mn,
  Q,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  $,
  xn;
e(() => {
  (s(),
    I(),
    m(),
    t(),
    wt(),
    Rt(),
    Ee(),
    Zt(),
    Ye(),
    et(),
    ve(),
    nt(),
    (Qt = x(De)),
    ($t = x(J)),
    (en = x(Y)),
    (tn = M(P)),
    (nn = x(X)),
    (rn = x(Qe)),
    (an = {
      bC7cL2r8j: `(min-width: 1200px)`,
      lL9o0fk8u: `(min-width: 810px) and (max-width: 1199.98px)`,
      sQKoGNYxL: `(max-width: 809.98px)`,
    }),
    (on = () => typeof document < `u`),
    (sn = [`current-coordinates`, `store-name`]),
    (cn = `framer-2ZzOi`),
    (ln = {
      bC7cL2r8j: `framer-v-1yjlnkx`,
      lL9o0fk8u: `framer-v-167f2a8`,
      sQKoGNYxL: `framer-v-ev91j9`,
    }),
    (un = void 0),
    (dn = (e, t, n) => (e && t ? `position` : n)),
    F(),
    (fn = (e, t) =>
      typeof e == `string` && typeof t == `string` ? e.toLowerCase() === t.toLowerCase() : e === t),
    (pn = (e, t) => {
      switch (e) {
        case !0:
          return `SZZanYjav`;
        case !1:
          return `TBAcir2H4`;
        default:
          return `TBAcir2H4`;
      }
    }),
    (Z = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (mn = (e, t, n) =>
      e.currentPage >= e.totalPages ? (t.disabled ?? n) : e.isLoading ? (t.loading ?? n) : n),
    (Q = (e) => ({
      from: { alias: `RRm6iXUcH`, data: $e, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `RRm6iXUcH`, name: `CFyGUV2JN`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `dQLMp3Snn`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `iHo87M7PO`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `T0OpxvaIF`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `qHzx1Qnq4`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `MS1Ep5QnQ`, type: `Identifier` },
        { collection: `RRm6iXUcH`, name: `id`, type: `Identifier` },
      ],
      where: {
        left: {
          left: { type: `LiteralValue`, value: e },
          operator: `==`,
          right: { type: `LiteralValue`, value: null },
          type: `BinaryOperation`,
        },
        operator: `or`,
        right: {
          arguments: [
            { collection: `RRm6iXUcH`, name: `iHo87M7PO`, type: `Identifier` },
            { type: `LiteralValue`, value: e },
          ],
          functionName: `CONTAINS`,
          type: `FunctionCall`,
        },
        type: `BinaryOperation`,
      },
    })),
    (hn = ({ query: e, pageSize: t, children: n }) => {
      let { paginatedQuery: r, paginationInfo: i, loadMore: a } = oe(e, t, `RRm6iXUcH`);
      return n(T(r), i, a);
    }),
    (gn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (_n = (e, t) => {
      switch (e) {
        case !0:
          return `h_6m_4lGN`;
        case !1:
          return `o3PwaQ7_V`;
        default:
          return `o3PwaQ7_V`;
      }
    }),
    (vn = { Desktop: `bC7cL2r8j`, Phone: `sQKoGNYxL`, Tablet: `lL9o0fk8u` }),
    (yn = ({ value: e }) =>
      _()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (bn = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: vn[r.variant] ?? r.variant ?? `bC7cL2r8j`,
    })),
    ($ = C(
      c(function (e, t) {
        let s = o(null),
          c = t ?? s,
          m = n(),
          { activeLocale: h, setLocale: _ } = v(),
          b = N(),
          [x, C] = y({ optional: !0, parameterName: `current-coordinates` }),
          [w, T] = y({ optional: !0, parameterName: `store-name` }),
          { style: E, className: O, layoutId: A, variant: j, ...M } = bn(e);
        te(a(() => tt({}, h), [h]));
        let [F, I] = k(j, an, !1),
          { activeVariantCallback: B, delay: H } = ie(void 0),
          U = ({ arg1vwmycx: e }) =>
            B(async (...t) => {
              C?.(e);
            }),
          oe = S(cn, xe),
          G = i(V)?.isLayoutTemplate,
          se = !!i(f)?.transition?.layout,
          K = dn(G, se);
        ne();
        let ce = o(null),
          le = () => !on() || F !== `sQKoGNYxL`;
        return (
          re({}),
          l(V.Provider, {
            value: {
              activeVariantId: F,
              humanReadableVariantMap: vn,
              primaryVariantId: `bC7cL2r8j`,
              variantClassNames: ln,
            },
            children: u(p, {
              id: A ?? m,
              children: [
                l(yn, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                u(d.div, {
                  ...M,
                  className: S(oe, `framer-1yjlnkx`, O),
                  ref: c,
                  style: { ...E },
                  children: [
                    u(d.main, {
                      className: `framer-btmigw`,
                      "data-framer-name": `Main`,
                      layout: K,
                      children: [
                        l(`div`, {
                          className: `framer-xzvrf6`,
                          "data-framer-name": `Store List`,
                          children: l(`div`, {
                            className: `framer-gpqaob`,
                            children: l(ae, {
                              children: l(hn, {
                                pageSize: 4,
                                query: Q(w),
                                children: (e, t, n) => {
                                  let i = e?.length ?? 0;
                                  return u(ee, {
                                    children: [
                                      u(`div`, {
                                        className: `framer-18gfgp9`,
                                        "data-framer-name": `Header`,
                                        children: [
                                          l(z, {
                                            __fromCanvasComponent: !0,
                                            children: l(r, {
                                              children: l(`h3`, {
                                                className: `framer-styles-preset-1cs224s`,
                                                "data-styles-preset": `nV6XvMHlN`,
                                                dir: `auto`,
                                                children: `Find stores`,
                                              }),
                                            }),
                                            className: `framer-1rc3d2w`,
                                            fonts: [`Inter`],
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          l(W, {
                                            breakpoint: F,
                                            overrides: {
                                              lL9o0fk8u: { width: `244px` },
                                              sQKoGNYxL: {
                                                width: `calc(max(${b?.width || `100vw`} - 40px, 1px) - 56px)`,
                                              },
                                            },
                                            children: l(R, {
                                              height: 21,
                                              width: `324px`,
                                              children: l(P, {
                                                className: `framer-26qg9t-container`,
                                                nodeId: `Xm6WwNgbX`,
                                                scopeId: `duGnOs2MS`,
                                                children: l(De, {
                                                  BwN_hqFrE: `results`,
                                                  height: `100%`,
                                                  id: `Xm6WwNgbX`,
                                                  layoutId: `Xm6WwNgbX`,
                                                  rGomIo08R: i,
                                                  style: { width: `100%` },
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      l(`label`, {
                                        className: `framer-1w3hs3y`,
                                        children: l(W, {
                                          breakpoint: F,
                                          overrides: {
                                            lL9o0fk8u: { inputName: `lL9o0fk8uRpPnoVYtr` },
                                            sQKoGNYxL: { inputName: `sQKoGNYxLRpPnoVYtr` },
                                          },
                                          children: l(L, {
                                            className: `framer-1ih9tir`,
                                            inputName: `RpPnoVYtr`,
                                            onChange: (e) => T(e.target.value || void 0),
                                            onClear: () => T(void 0),
                                            placeholder: `Search…`,
                                            type: `text`,
                                            value: w ?? ``,
                                          }),
                                        }),
                                      }),
                                      e?.map(
                                        (
                                          {
                                            CFyGUV2JN: e,
                                            dQLMp3Snn: t,
                                            id: n,
                                            iHo87M7PO: r,
                                            MS1Ep5QnQ: i,
                                            qHzx1Qnq4: a,
                                            T0OpxvaIF: o,
                                          },
                                          s
                                        ) => (
                                          (e ??= ``),
                                          (t ??= ``),
                                          (r ??= ``),
                                          (o ??= ``),
                                          l(
                                            p,
                                            {
                                              id: `RRm6iXUcH-${n}`,
                                              children: l(g.Provider, {
                                                value: { dQLMp3Snn: t },
                                                children: l(d.div, {
                                                  className: `framer-167e78q`,
                                                  onTap: U({ arg1vwmycx: e }),
                                                  children: l(D, {
                                                    links: [
                                                      {
                                                        href: {
                                                          pathVariables: { dQLMp3Snn: t },
                                                          webPageId: `hlb0hjsQy`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { dQLMp3Snn: t },
                                                          webPageId: `hlb0hjsQy`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                      {
                                                        href: {
                                                          pathVariables: { dQLMp3Snn: t },
                                                          webPageId: `hlb0hjsQy`,
                                                        },
                                                        implicitPathVariables: void 0,
                                                      },
                                                    ],
                                                    children: (t) =>
                                                      l(W, {
                                                        breakpoint: F,
                                                        overrides: {
                                                          lL9o0fk8u: { width: `244px` },
                                                          sQKoGNYxL: {
                                                            width: `max(max(${b?.width || `100vw`} - 40px, 1px) - 56px, 1px)`,
                                                          },
                                                        },
                                                        children: l(R, {
                                                          height: 151,
                                                          width: `324px`,
                                                          children: l(P, {
                                                            className: `framer-9qbe3x-container`,
                                                            nodeId: `mSdeXhn1U`,
                                                            scopeId: `duGnOs2MS`,
                                                            children: l(W, {
                                                              breakpoint: F,
                                                              overrides: {
                                                                lL9o0fk8u: { Fuurl_OdZ: t[1] },
                                                                sQKoGNYxL: {
                                                                  Fuurl_OdZ: t[2],
                                                                  SVp6vluqo: un,
                                                                  variant: Z(`oF5VsfZwB`),
                                                                },
                                                              },
                                                              children: l(J, {
                                                                a2PH_U_lq: a,
                                                                FDCqm9z4a: r,
                                                                Fuurl_OdZ: t[0],
                                                                height: `100%`,
                                                                id: `mSdeXhn1U`,
                                                                layoutId: `mSdeXhn1U`,
                                                                p4IsTOy6X: i,
                                                                style: { width: `100%` },
                                                                SVp6vluqo: e,
                                                                tYPOqSkzQ: o,
                                                                variant: Z(pn(fn(x, e), h)),
                                                                width: `100%`,
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
                                      l(W, {
                                        breakpoint: F,
                                        overrides: {
                                          lL9o0fk8u: { width: `244px` },
                                          sQKoGNYxL: {
                                            width: `calc(max(${b?.width || `100vw`} - 40px, 1px) - 56px)`,
                                          },
                                        },
                                        children: l(R, {
                                          height: 20,
                                          width: `324px`,
                                          children: l(tn, {
                                            __loadMore: n,
                                            __paginationInfo: t,
                                            className: `framer-1lzo4wx-container`,
                                            nodeId: `yjHPRcVtm`,
                                            ref: ce,
                                            scopeId: `duGnOs2MS`,
                                            children: l(Y, {
                                              height: `100%`,
                                              id: `yjHPRcVtm`,
                                              layoutId: `yjHPRcVtm`,
                                              style: { width: `100%` },
                                              variant: mn(
                                                t,
                                                { disabled: `YzeiBTjIT`, loading: `B61_BL_iz` },
                                                Z(`B61_BL_iz`)
                                              ),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  });
                                },
                              }),
                            }),
                          }),
                        }),
                        le() &&
                          l(W, {
                            breakpoint: F,
                            overrides: {
                              lL9o0fk8u: { width: `max(${b?.width || `100vw`} - 340px, 1px)` },
                            },
                            children: l(R, {
                              height: 1e3,
                              width: `max(${b?.width || `100vw`} - 420px, 1px)`,
                              children: l(P, {
                                className: `framer-kuszop-container hidden-ev91j9`,
                                nodeId: `Y0cKMPnKv`,
                                scopeId: `duGnOs2MS`,
                                children: l(X, {
                                  height: `100%`,
                                  id: `Y0cKMPnKv`,
                                  layoutId: `Y0cKMPnKv`,
                                  onwaO0zPV5ZChange: C,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Z(_n(gn(x), h)),
                                  waO0zPV5Z: x,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                      ],
                    }),
                    l(R, {
                      height: 37,
                      width: `100vw`,
                      y: 963,
                      children: l(P, {
                        className: `framer-1ibfnms-container`,
                        layout: K,
                        layoutScroll: !0,
                        nodeId: `XRkKE_EZW`,
                        scopeId: `duGnOs2MS`,
                        children: l(W, {
                          breakpoint: F,
                          overrides: {
                            sQKoGNYxL: { B85HEv4Ke: `10% discount when buying from store.` },
                          },
                          children: l(Qe, {
                            B85HEv4Ke: `Get a 10% discount when buying from the store.`,
                            height: `100%`,
                            id: `XRkKE_EZW`,
                            layoutId: `XRkKE_EZW`,
                            style: { width: `100%` },
                            variant: Z(`gndt8Odsu`),
                            width: `100%`,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-2ZzOi.framer-5a4ol, .framer-2ZzOi .framer-5a4ol { display: block; }`,
        `.framer-2ZzOi.framer-1yjlnkx { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 160px 20px 160px 20px; position: relative; width: 1200px; }`,
        `.framer-2ZzOi .framer-btmigw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-xzvrf6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; min-height: 100vh; overflow: var(--overflow-clip-fallback, clip); padding: 50px 28px 80px 28px; position: relative; width: 380px; }`,
        `.framer-2ZzOi .framer-gpqaob { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-18gfgp9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-1rc3d2w { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-2ZzOi .framer-26qg9t-container, .framer-2ZzOi .framer-1lzo4wx-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-1w3hs3y { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-1ih9tir { --corner-shape-fallback: 0.796; --framer-input-background: var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, #f5f5f5); --framer-input-border-radius-bottom-left: calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-bottom-right: calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-left: calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-border-radius-top-right: calc(11px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1))); --framer-input-corner-shape: superellipse(1.4); --framer-input-focused-box-shadow: 0px 0px 0px 2px var(--token-434336aa-a6fe-4798-9765-0e50c6ce5ef4, #007bff); --framer-input-focused-transition: all 0.2s cubic-bezier(0.44,0,0.56,1) 0s; --framer-input-font-color: var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, #000000); --framer-input-font-family: "Inter"; --framer-input-font-letter-spacing: 0em; --framer-input-font-line-height: 1.2em; --framer-input-font-size: 14px; --framer-input-font-weight: 400; --framer-input-icon-color: #999999; --framer-input-icon-content: ""; --framer-input-icon-mask-image: url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 fill=%22none%22><path d=%22M7 2.5a5 5 0 0 1 4.13 7.82l2.03 2.03a.75.75 0 0 1-1.06 1.06l-2-2A5 5 0 1 1 7 2.5Zm-3.5 5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0Z%22 fill=%22%23999%22/></svg>'); --framer-input-padding: 9px; --framer-input-placeholder-color: var(--token-7d0d6ded-a16b-44b0-b3c5-41032df0ed2d, #949494); --framer-input-wrapper-height: auto; flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-167e78q { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
        `.framer-2ZzOi .framer-9qbe3x-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-2ZzOi .framer-kuszop-container { flex: 1 0 0px; height: 100vh; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-2ZzOi .framer-1ibfnms-container { bottom: 0px; flex: none; height: auto; left: 0px; position: fixed; width: 100%; z-index: 10; }`,
        ...ye,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-2ZzOi.framer-1yjlnkx { width: 810px; } .framer-2ZzOi .framer-xzvrf6 { width: 300px; }}`,
        `@media (max-width: 809.98px) { .framer-2ZzOi.framer-1yjlnkx { width: 390px; } .framer-2ZzOi .framer-xzvrf6 { flex: 1 0 0px; padding: 100px 28px 80px 28px; width: 1px; }}`,
      ],
      `framer-2ZzOi`
    )),
    ($.displayName = `Stores`),
    ($.defaultProps = { height: 1e3, width: 1200 }),
    E(
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
        ...Qt,
        ...$t,
        ...en,
        ...nn,
        ...rn,
        ...H(be),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = (async () => ({ RmaoDli_c1: t.pathVariables?.[`store-name`] ?? void 0 }))();
        return Promise.allSettled([
          r.then(({ RmaoDli_c1: e }) => U.get(Q(e), n).preload()),
          h(X, {}, t),
          h(Qe, {}, t),
          (async () => {
            let { RmaoDli_c1: e } = await r,
              i = (await U.get(Q(e), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => [h(De, {}, t), h(J, {}, t), h(Y, {}, t)]));
          })(),
        ]);
      },
    }),
    (xn = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramerduGnOs2MS`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"lL9o0fk8u":{"layout":["fixed","auto"]},"sQKoGNYxL":{"layout":["fixed","auto"]}}}`,
            framerAutoSizeImages: `true`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerIntrinsicHeight: `1000`,
            framerComponentViewportWidth: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { xn as __FramerMetadata__, $ as default, sn as queryParamNames };
//# sourceMappingURL=JrwfShgiUraOTLNdyDnkg1o2GGDVH0XxQ7EGr502UYs.Z1GQ3xGo.mjs.map
