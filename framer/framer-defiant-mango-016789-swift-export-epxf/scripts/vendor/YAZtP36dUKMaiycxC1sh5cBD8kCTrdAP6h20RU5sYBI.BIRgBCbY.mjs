import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  D as t,
  E as n,
  L as r,
  N as i,
  P as a,
  S as o,
  c as s,
  m as c,
  s as l,
  u,
} from "./react.D0omlcQg.mjs";
import { M as d, a as f, r as p, t as m } from "./motion.Bi2Azsus.mjs";
import {
  B as h,
  Ct as ee,
  Dt as te,
  Et as ne,
  It as g,
  J as _,
  K as v,
  L as y,
  Lt as b,
  Mt as x,
  N as S,
  O as C,
  P as w,
  Pt as T,
  St as re,
  Tt as ie,
  X as E,
  _t as ae,
  a as D,
  at as oe,
  b as se,
  bt as ce,
  et as O,
  h as le,
  i as k,
  k as A,
  o as j,
  p as ue,
  q as M,
  st as N,
  vt as de,
  w as P,
  y as F,
} from "./framer.zRtTBSC3.mjs";
import { i as I, n as L, r as R, t as z } from "./kw43ePOKN.CcGVtzUA.mjs";
import { i as fe, n as B, r as V, t as H } from "./CT_DBbR5R.CmeCM4mC.mjs";
import { i as U, n as pe, r as me, t as he } from "./X4l3QYsOx.BTlB7_wH.mjs";
import { i as W, n as ge, r as _e, t as ve } from "./nV6XvMHlN.6LAm4Vcv.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./pN_gL4Xds.CPj-Oone.mjs";
import { i as Ce, n as we, r as Te, t as Ee } from "./RoRGeZoiF.Dyk3V9gY.mjs";
import { i as De, n as Oe, r as ke, t as Ae } from "./Hme2S1hiD.DgYAjN68.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./tdkiMToHV.DZJwg1wh.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./DAYH3uYfF.CyGAyeDQ.mjs";
import { i as ze, n as Be, r as Ve, t as He } from "./hcX8gSJpR.DMQ-zQgz.mjs";
import { i as Ue, n as We, r as Ge, t as Ke } from "./QawiXOoTj.1RoXDsb2.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./RFw1qTA_c.C6xI8Tzc.mjs";
import { i as Ze, n as Qe, r as $e, t as et } from "./tzSCYd6Qc.dsek_Sf0.mjs";
import { i as tt, t as G } from "./TWHZahxMp.mGjwl4ec.mjs";
import { n as nt, t as rt } from "./ivqmiAz7z.DqsxATKj.mjs";
import it, { t as at } from "./UgCbJF5iK0keQlvl9SL6xcFEEJaHbTwpjW-CrDocWH8.0BJmCrVW.mjs";
function ot(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var st,
  ct,
  lt,
  ut,
  dt,
  K,
  ft,
  pt,
  mt,
  ht,
  q,
  gt = e(() => {
    (s(),
      O(),
      m(),
      t(),
      fe(),
      I(),
      nt(),
      (st = v(rt)),
      (ct = { xMV_Mb8oG: { hover: !0 } }),
      (lt = `framer-GXXta`),
      (ut = { xMV_Mb8oG: `framer-v-dbkt25` }),
      oe(),
      (dt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (K = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (ft = ({ value: e, children: t }) => {
        let n = i(f),
          r = e ?? n.transition,
          o = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return l(f.Provider, { value: o, children: t });
      }),
      (pt = d.create(r)),
      (mt = ({
        height: e,
        id: t,
        link: n,
        tagline: r,
        thumbnail: i,
        title: a,
        width: o,
        ...s
      }) => ({
        ...s,
        CgcQZEDSC: n ?? s.CgcQZEDSC,
        JdYmFyJrx: a ?? s.JdYmFyJrx ?? `Title`,
        KwXsuHY84: i ?? s.KwXsuHY84,
        tqWHGUCz3: r ?? s.tqWHGUCz3 ?? `Previous`,
      })),
      (ht = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = b(
        c(function (e, t) {
          let i = o(null),
            a = t ?? i,
            s = n(),
            { activeLocale: c, setLocale: f } = ne(),
            m = ae(),
            {
              style: h,
              className: ee,
              layoutId: te,
              variant: v,
              CgcQZEDSC: b,
              KwXsuHY84: x,
              tqWHGUCz3: S,
              JdYmFyJrx: C,
              ...w
            } = mt(e),
            {
              baseVariant: T,
              classNames: re,
              clearLoadingGesture: ie,
              gestureHandlers: E,
              gestureVariant: D,
              isLoading: oe,
              setGestureState: se,
              setVariant: ce,
              variants: O,
            } = g({
              defaultVariant: `xMV_Mb8oG`,
              enabledGestures: ct,
              ref: a,
              variant: v,
              variantClassNames: ut,
            }),
            k = ht(e, O),
            j = y(lt, z, H);
          return l(p, {
            id: te ?? s,
            children: l(pt, {
              animate: O,
              initial: !1,
              children: l(ft, {
                value: dt,
                children: l(F, {
                  href: b,
                  motionChild: !0,
                  nodeId: `xMV_Mb8oG`,
                  openInNewTab: !1,
                  scopeId: `j7kSnk1tp`,
                  children: u(d.a, {
                    ...w,
                    ...E,
                    className: `${y(j, `framer-dbkt25`, ee, re)} framer-10fw0il`,
                    "data-border": !0,
                    "data-framer-name": `Variant 1`,
                    draggable: `false`,
                    layoutDependency: k,
                    layoutId: `xMV_Mb8oG`,
                    ref: a,
                    style: {
                      "--border-bottom-width": `1px`,
                      "--border-color": `var(--token-914b1e49-c6dc-49fc-93ac-369519474e4f, rgb(227, 227, 227))`,
                      "--border-left-width": `1px`,
                      "--border-right-width": `1px`,
                      "--border-style": `solid`,
                      "--border-top-width": `1px`,
                      "--corner-shape-fallback": 0.796,
                      backgroundColor: `var(--token-c81209ee-d76c-46df-b8d5-cc628e2f35fa, rgb(250, 250, 250))`,
                      borderBottomLeftRadius: `calc(29px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderBottomRightRadius: `calc(29px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopLeftRadius: `calc(29px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      borderTopRightRadius: `calc(29px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                      cornerShape: `superellipse(1.4)`,
                      ...h,
                    },
                    variants: {
                      "xMV_Mb8oG-hover": {
                        backgroundColor: `var(--token-f01462ef-eed7-451f-81c9-11ad0be4b3de, rgb(245, 245, 245))`,
                      },
                    },
                    ...ot({ "xMV_Mb8oG-hover": { "data-framer-name": void 0 } }, T, D),
                    children: [
                      l(le, {
                        background: {
                          alt: ``,
                          fit: `fill`,
                          loading: _((m?.y || 0) + (16 + ((m?.height || 200) - 32 - 41) / 2)),
                          sizes: `41px`,
                          ...K(x),
                        },
                        className: `framer-40qb0q`,
                        layoutDependency: k,
                        layoutId: `mEI4iBfeh`,
                        style: {
                          "--corner-shape-fallback": 0.796,
                          borderBottomLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderBottomRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopLeftRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          borderTopRightRadius: `calc(12px*var(--one-if-corner-shape-supported,var(--corner-shape-fallback,1)))`,
                          cornerShape: `superellipse(1.4)`,
                        },
                        ...ot(
                          {
                            "xMV_Mb8oG-hover": {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: _((m?.y || 0) + (16 + ((m?.height || 73) - 32 - 41) / 2)),
                                sizes: `41px`,
                                ...K(x),
                              },
                            },
                          },
                          T,
                          D
                        ),
                      }),
                      u(d.div, {
                        className: `framer-1rci4b9`,
                        "data-framer-name": `Title & Published`,
                        layoutDependency: k,
                        layoutId: `QEA4_1Wgd`,
                        children: [
                          l(A, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(d.p, {
                                className: `framer-styles-preset-10suf4d`,
                                "data-styles-preset": `kw43ePOKN`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122)))`,
                                },
                                children: `Previous`,
                              }),
                            }),
                            className: `framer-18sbmi8`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `lKGIHtbk_`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                            },
                            text: S,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          l(A, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(d.p, {
                                className: `framer-styles-preset-5rfdkx`,
                                "data-styles-preset": `CT_DBbR5R`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-color": `var(--extracted-r6o4lv, var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41)))`,
                                },
                                children: `Title`,
                              }),
                            }),
                            className: `framer-x5ut9y`,
                            "data-framer-name": `Title`,
                            fonts: [`Inter`],
                            layoutDependency: k,
                            layoutId: `QRTeOmV1A`,
                            style: {
                              "--extracted-r6o4lv": `var(--token-6d07e840-0908-44af-b7b3-055ece1d0a4b, rgb(41, 41, 41))`,
                            },
                            text: C,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        ],
                      }),
                      l(rt, {
                        animated: !0,
                        className: `framer-1fnunsp`,
                        layoutDependency: k,
                        layoutId: `QZfan209Q`,
                        style: {
                          "--118a55": `var(--token-27377471-6d4a-46b0-90a8-188d33236a38, rgb(133, 133, 133))`,
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
          `.framer-GXXta.framer-10fw0il, .framer-GXXta .framer-10fw0il { display: block; }`,
          `.framer-GXXta.framer-dbkt25 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px; position: relative; text-decoration: none; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GXXta .framer-40qb0q { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 41px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 41px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-GXXta .framer-1rci4b9 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 6px 0px 0px; position: relative; width: 1px; }`,
          `.framer-GXXta .framer-18sbmi8, .framer-GXXta .framer-x5ut9y { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-GXXta .framer-1fnunsp { flex: none; height: var(--framer-aspect-ratio-supported, 12px); position: relative; width: 12px; }`,
          ...L,
          ...B,
          `.framer-GXXta[data-border="true"]::after, .framer-GXXta [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-GXXta`
      )),
      (q.displayName = `Magazine Navigator`),
      (q.defaultProps = { height: 73, width: 300 }),
      w(q, {
        CgcQZEDSC: { title: `Link`, type: j.Link },
        KwXsuHY84: { title: `Thumbnail`, type: j.ResponsiveImage },
        tqWHGUCz3: {
          defaultValue: `Previous`,
          displayTextArea: !1,
          title: `Tagline`,
          type: j.String,
        },
        ontqWHGUCz3Change: { changes: `tqWHGUCz3`, type: j.ChangeHandler },
        JdYmFyJrx: { defaultValue: `Title`, title: `Title`, type: j.String },
        onJdYmFyJrxChange: { changes: `JdYmFyJrx`, type: j.ChangeHandler },
      }),
      S(
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
          ...st,
          ...M(R),
          ...M(V),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  _t,
  vt,
  yt,
  bt,
  xt,
  St,
  Ct,
  wt,
  J,
  Y,
  X,
  Z,
  Tt,
  Q,
  Et,
  $,
  Dt;
e(() => {
  (s(),
    O(),
    m(),
    t(),
    gt(),
    tt(),
    Fe(),
    ze(),
    De(),
    W(),
    ye(),
    Ue(),
    qe(),
    Ce(),
    je(),
    Ze(),
    U(),
    at(),
    (_t = v(q)),
    (vt = {
      dJXZP_vSJ: `(max-width: 809.98px)`,
      I1DAjTqLj: `(min-width: 810px) and (max-width: 1199.98px)`,
      rb1OStcST: `(min-width: 1200px)`,
    }),
    (yt = []),
    (bt = `framer-ribw0`),
    (xt = {
      dJXZP_vSJ: `framer-v-yp22b1`,
      I1DAjTqLj: `framer-v-15rjrr9`,
      rb1OStcST: `framer-v-qtp1fi`,
    }),
    (St = (e, t, n) => (e && t ? `position` : n)),
    (Ct = (e, t, n) => {
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
    (wt = { dateStyle: `medium`, timeZone: `UTC` }),
    (J = (e, t) => Ct(e, wt, t)),
    (Y = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (X = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (Z = { Desktop: `rb1OStcST`, Phone: `dJXZP_vSJ`, Tablet: `I1DAjTqLj` }),
    (Tt = ({ value: e }) =>
      ee()
        ? null
        : l(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Q = (e) => ({
      from: {
        constraint: {
          left: { collection: `ja8Mitsv9`, name: `nextItemId`, type: `Identifier` },
          operator: `==`,
          right: { collection: `nextItemId`, name: `id`, type: `Identifier` },
          type: `BinaryOperation`,
        },
        left: {
          constraint: {
            left: { collection: `ja8Mitsv9`, name: `previousItemId`, type: `Identifier` },
            operator: `==`,
            right: { collection: `previousItemId`, name: `id`, type: `Identifier` },
            type: `BinaryOperation`,
          },
          left: { alias: `ja8Mitsv9`, data: G, type: `Collection` },
          right: { alias: `previousItemId`, data: G, type: `Collection` },
          type: `LeftJoin`,
        },
        right: { alias: `nextItemId`, data: G, type: `Collection` },
        type: `LeftJoin`,
      },
      select: [
        { collection: `ja8Mitsv9`, name: `TW6CR4xWI`, type: `Identifier` },
        { collection: `ja8Mitsv9`, name: `ewNw3V74U`, type: `Identifier` },
        { collection: `ja8Mitsv9`, name: `csLuHnld1`, type: `Identifier` },
        { collection: `ja8Mitsv9`, name: `Kh8Gry2oe`, type: `Identifier` },
        { collection: `ja8Mitsv9`, name: `rX8w5QpCr`, type: `Identifier` },
        {
          alias: `previousItemId.TW6CR4xWI`,
          collection: `previousItemId`,
          name: `TW6CR4xWI`,
          type: `Identifier`,
        },
        {
          alias: `previousItemId.XLYJvQM4P`,
          collection: `previousItemId`,
          name: `XLYJvQM4P`,
          type: `Identifier`,
        },
        {
          alias: `previousItemId.ewNw3V74U`,
          collection: `previousItemId`,
          name: `ewNw3V74U`,
          type: `Identifier`,
        },
        { alias: `previousItemId`, collection: `previousItemId`, name: `id`, type: `Identifier` },
        {
          alias: `nextItemId.TW6CR4xWI`,
          collection: `nextItemId`,
          name: `TW6CR4xWI`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.XLYJvQM4P`,
          collection: `nextItemId`,
          name: `XLYJvQM4P`,
          type: `Identifier`,
        },
        {
          alias: `nextItemId.ewNw3V74U`,
          collection: `nextItemId`,
          name: `ewNw3V74U`,
          type: `Identifier`,
        },
        { alias: `nextItemId`, collection: `nextItemId`, name: `id`, type: `Identifier` },
      ],
      where: e,
    })),
    (Et = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Z[r.variant] ?? r.variant ?? `rb1OStcST`,
    })),
    ($ = b(
      c(function (e, t) {
        let s = o(null),
          c = t ?? s,
          m = n(),
          { activeLocale: h, setLocale: ee } = ne(),
          g = ae(),
          v = de(),
          [b] = x(Q(E(v, `ja8Mitsv9`))),
          S = (e) => {
            if (!b) throw new se(`No data matches path variables: ${JSON.stringify(v)}`);
            return b[e];
          },
          {
            style: w,
            className: oe,
            layoutId: O,
            variant: j,
            TW6CR4xWI: M = S(`TW6CR4xWI`) ?? ``,
            ewNw3V74U: N = S(`ewNw3V74U`),
            csLuHnld1: F = S(`csLuHnld1`),
            Kh8Gry2oe: I = S(`Kh8Gry2oe`) ?? ``,
            rX8w5QpCr: L = S(`rX8w5QpCr`) ?? ``,
            previousItemId_TW6CR4xWI: R = S(`previousItemId.TW6CR4xWI`) ?? ``,
            previousItemId_XLYJvQM4P: z = S(`previousItemId.XLYJvQM4P`) ?? ``,
            previousItemId_ewNw3V74U: fe = S(`previousItemId.ewNw3V74U`),
            previousItemId: B = S(`previousItemId`),
            nextItemId_TW6CR4xWI: V = S(`nextItemId.TW6CR4xWI`) ?? ``,
            nextItemId_XLYJvQM4P: H = S(`nextItemId.XLYJvQM4P`) ?? ``,
            nextItemId_ewNw3V74U: U = S(`nextItemId.ewNw3V74U`),
            nextItemId: pe = S(`nextItemId`),
            ...me
          } = Et(e);
        te(a(() => it({ Kh8Gry2oe: I, TW6CR4xWI: M }, h), [M, I, h]));
        let [W, ge] = re(j, vt, !1),
          _e = y(bt, Ae, ve, he, Ee, Pe, Se, et, He, Xe, Ke, Re),
          ye = i(ue)?.isLayoutTemplate,
          be = !!i(f)?.transition?.layout,
          xe = St(ye, be),
          Ce = ie(),
          we = J(F, Ce),
          Te = X(B);
        T();
        let De = X(pe);
        return (
          ce({}),
          l(ue.Provider, {
            value: {
              activeVariantId: W,
              humanReadableVariantMap: Z,
              primaryVariantId: `rb1OStcST`,
              variantClassNames: xt,
            },
            children: u(p, {
              id: O ?? m,
              children: [
                l(Tt, {
                  value: `html body { background: var(--token-9039c660-569a-421b-a527-9ac056ae9951, rgb(255, 255, 255)); }`,
                }),
                l(d.div, {
                  ...me,
                  className: y(_e, `framer-qtp1fi`, oe),
                  ref: c,
                  style: { ...w },
                  children: u(d.main, {
                    className: `framer-1dg6l5h`,
                    "data-framer-name": `Main`,
                    layout: xe,
                    children: [
                      u(`div`, {
                        className: `framer-22xru6`,
                        "data-framer-name": `Header`,
                        children: [
                          l(A, {
                            __fromCanvasComponent: !0,
                            children: l(r, {
                              children: l(`p`, {
                                className: `framer-styles-preset-bnfmu7`,
                                "data-styles-preset": `Hme2S1hiD`,
                                dir: `auto`,
                                style: {
                                  "--framer-text-alignment": `left`,
                                  "--framer-text-color": `var(--token-d53ec7b6-ca11-471f-93d4-6939f860246e, rgb(0, 0, 0))`,
                                },
                                children: `May 11, 2026`,
                              }),
                            }),
                            className: `framer-10gxqct`,
                            fonts: [`Inter`],
                            text: l(`time`, { dateTime: F, children: we }),
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          u(`div`, {
                            className: `framer-1fjl89z`,
                            "data-framer-name": `Title`,
                            children: [
                              l(A, {
                                __fromCanvasComponent: !0,
                                children: l(r, {
                                  children: l(`p`, {
                                    className: `framer-styles-preset-bnfmu7`,
                                    "data-styles-preset": `Hme2S1hiD`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--token-31c75237-3696-4093-9011-7822eb8b6641, rgb(122, 122, 122))`,
                                    },
                                    children: `The Sneaks`,
                                  }),
                                }),
                                className: `framer-1mho5xw`,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              l(P, {
                                breakpoint: W,
                                overrides: {
                                  dJXZP_vSJ: {
                                    children: l(r, {
                                      children: l(`h6`, {
                                        className: `framer-styles-preset-1cs224s`,
                                        "data-styles-preset": `nV6XvMHlN`,
                                        dir: `auto`,
                                        style: { "--framer-text-alignment": `left` },
                                        children: `The After Dark Tour Is Back: A Global Race Series Built for Women, Powered by Nike`,
                                      }),
                                    }),
                                  },
                                },
                                children: l(A, {
                                  __fromCanvasComponent: !0,
                                  children: l(r, {
                                    children: l(`h3`, {
                                      className: `framer-styles-preset-1cs224s`,
                                      "data-styles-preset": `nV6XvMHlN`,
                                      dir: `auto`,
                                      style: { "--framer-text-alignment": `left` },
                                      children: `The After Dark Tour Is Back: A Global Race Series Built for Women, Powered by Nike`,
                                    }),
                                  }),
                                  className: `framer-u96asp`,
                                  fonts: [`Inter`],
                                  text: M,
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      l(P, {
                        breakpoint: W,
                        overrides: {
                          dJXZP_vSJ: {
                            background: {
                              alt: `Nike Is Serving Athletes Faster Through AI-Powered Shopping on Google`,
                              fit: `fill`,
                              loading: _((g?.y || 0) + 140 + 0 + 0 + 438.4),
                              pixelHeight: 1024,
                              pixelWidth: 1536,
                              sizes: `calc(${g?.width || `100vw`} - 40px)`,
                              ...Y(N),
                            },
                          },
                        },
                        children: l(le, {
                          as: `figure`,
                          background: {
                            alt: `Nike Is Serving Athletes Faster Through AI-Powered Shopping on Google`,
                            fit: `fill`,
                            loading: _((g?.y || 0) + 140 + 0 + 0 + 400),
                            pixelHeight: 1024,
                            pixelWidth: 1536,
                            sizes: `calc(${g?.width || `100vw`} - 40px)`,
                            ...Y(N),
                          },
                          className: `framer-1kt2w1`,
                          "data-framer-name": `Thumbnail`,
                          draggable: `false`,
                        }),
                      }),
                      l(`div`, {
                        className: `framer-13f8hvq`,
                        "data-framer-name": `Body`,
                        children: u(`div`, {
                          className: `framer-1w5nk3l`,
                          "data-framer-name": `Content`,
                          children: [
                            u(`aside`, {
                              className: `framer-1wiqw3z`,
                              "data-framer-name": `Navigators`,
                              children: [
                                Te !== !1 &&
                                  l(C, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: z },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: z },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: z },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      l(P, {
                                        breakpoint: W,
                                        overrides: {
                                          dJXZP_vSJ: {
                                            width: `min(max(min(${g?.width || `100vw`} - 40px, 500px) - 56px, 1px), 950px)`,
                                            y:
                                              (g?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              1438.4 +
                                              28 +
                                              0 +
                                              120 +
                                              0 +
                                              41.5,
                                          },
                                        },
                                        children: l(k, {
                                          height: 73,
                                          width: `300px`,
                                          y: (g?.y || 0) + 140 + 0 + 0 + 1400 + 64 + 0 + 0 + 41.5,
                                          children: l(D, {
                                            className: `framer-11itd54-container`,
                                            draggable: `false`,
                                            nodeId: `SO1RkQpBB`,
                                            scopeId: `ja8Mitsv9`,
                                            children: l(P, {
                                              breakpoint: W,
                                              overrides: {
                                                dJXZP_vSJ: { CgcQZEDSC: e[2] },
                                                I1DAjTqLj: { CgcQZEDSC: e[1] },
                                              },
                                              children: l(q, {
                                                CgcQZEDSC: e[0],
                                                height: `100%`,
                                                id: `SO1RkQpBB`,
                                                JdYmFyJrx: R,
                                                KwXsuHY84: Y(fe),
                                                layoutId: `SO1RkQpBB`,
                                                style: { width: `100%` },
                                                tqWHGUCz3: `Previous`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                                De !== !1 &&
                                  l(C, {
                                    links: [
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: H },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: H },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                      {
                                        href: {
                                          pathVariables: { XLYJvQM4P: H },
                                          webPageId: `ja8Mitsv9`,
                                        },
                                        implicitPathVariables: void 0,
                                      },
                                    ],
                                    children: (e) =>
                                      l(P, {
                                        breakpoint: W,
                                        overrides: {
                                          dJXZP_vSJ: {
                                            width: `min(max(min(${g?.width || `100vw`} - 40px, 500px) - 56px, 1px), 950px)`,
                                            y:
                                              (g?.y || 0) +
                                              140 +
                                              0 +
                                              0 +
                                              1438.4 +
                                              28 +
                                              0 +
                                              120 +
                                              0 +
                                              41.5,
                                          },
                                        },
                                        children: l(k, {
                                          height: 73,
                                          width: `300px`,
                                          y: (g?.y || 0) + 140 + 0 + 0 + 1400 + 64 + 0 + 0 + 41.5,
                                          children: l(D, {
                                            className: `framer-svmfhu-container`,
                                            draggable: `false`,
                                            nodeId: `wRN0NKt3r`,
                                            scopeId: `ja8Mitsv9`,
                                            children: l(P, {
                                              breakpoint: W,
                                              overrides: {
                                                dJXZP_vSJ: { CgcQZEDSC: e[2] },
                                                I1DAjTqLj: { CgcQZEDSC: e[1] },
                                              },
                                              children: l(q, {
                                                CgcQZEDSC: e[0],
                                                height: `100%`,
                                                id: `wRN0NKt3r`,
                                                JdYmFyJrx: V,
                                                KwXsuHY84: Y(U),
                                                layoutId: `wRN0NKt3r`,
                                                style: { width: `100%` },
                                                tqWHGUCz3: `Next`,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        }),
                                      }),
                                  }),
                              ],
                            }),
                            l(A, {
                              __fromCanvasComponent: !0,
                              children: L,
                              className: `framer-1e78zpw`,
                              fonts: [`Inter`],
                              stylesPresetsClassNames: {
                                a: `framer-styles-preset-1eqj9u`,
                                h1: `framer-styles-preset-1r5o7uy`,
                                h2: `framer-styles-preset-tsnpik`,
                                h3: `framer-styles-preset-rzow5z`,
                                h4: `framer-styles-preset-19ynewv`,
                                h5: `framer-styles-preset-1lkvzko`,
                                h6: `framer-styles-preset-1mts5yh`,
                                p: `framer-styles-preset-1ozkt1o`,
                                table: `framer-styles-preset-176fugv`,
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
                l(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-ribw0.framer-1u9k6d6, .framer-ribw0 .framer-1u9k6d6 { display: block; }`,
        `.framer-ribw0.framer-qtp1fi { align-content: center; align-items: center; background-color: var(--token-9039c660-569a-421b-a527-9ac056ae9951, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-ribw0 .framer-1dg6l5h { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-ribw0 .framer-22xru6 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 1200px; min-height: 40vh; overflow: var(--overflow-clip-fallback, clip); padding: 120px 64px 44px 64px; position: relative; width: 100%; }`,
        `.framer-ribw0 .framer-10gxqct { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ribw0 .framer-1fjl89z { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-ribw0 .framer-1mho5xw, .framer-ribw0 .framer-u96asp { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-ribw0 .framer-1kt2w1 { -webkit-user-select: none; flex: none; gap: 10px; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: relative; user-select: none; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-ribw0 .framer-13f8hvq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 1200px; overflow: var(--overflow-clip-fallback, clip); padding: 64px 28px 64px 28px; position: relative; width: 100%; }`,
        `.framer-ribw0 .framer-1w5nk3l { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; max-width: 950px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-ribw0 .framer-1wiqw3z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: sticky; top: 44px; width: 300px; z-index: 1; }`,
        `.framer-ribw0 .framer-11itd54-container, .framer-ribw0 .framer-svmfhu-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-ribw0 .framer-1e78zpw { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
        ...Oe,
        ...ge,
        ...pe,
        ...we,
        ...Me,
        ...be,
        ...Qe,
        ...Be,
        ...Je,
        ...We,
        ...Ie,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-ribw0.framer-qtp1fi { width: 810px; } .framer-ribw0 .framer-22xru6 { padding: 120px 44px 44px 44px; }}`,
        `@media (max-width: 809.98px) { .framer-ribw0.framer-qtp1fi { width: 390px; } .framer-ribw0 .framer-22xru6 { flex-direction: column; gap: 24px; max-width: 500px; padding: 120px 28px 28px 28px; } .framer-ribw0 .framer-10gxqct { flex: none; order: 1; width: 100%; } .framer-ribw0 .framer-1fjl89z, .framer-ribw0 .framer-1e78zpw { flex: none; order: 0; width: 100%; } .framer-ribw0 .framer-13f8hvq { max-width: 500px; padding: 28px 28px 64px 28px; } .framer-ribw0 .framer-1w5nk3l { flex-direction: column; gap: 24px; } .framer-ribw0 .framer-1wiqw3z { order: 1; position: relative; top: unset; width: 100%; }}`,
      ],
      `framer-ribw0`
    )),
    ($.displayName = `Magazine`),
    ($.defaultProps = { height: 2859, width: 1200 }),
    S(
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
        ..._t,
        ...M(ke),
        ...M(_e),
        ...M(me),
        ...M(Te),
        ...M(Ne),
        ...M(xe),
        ...M($e),
        ...M(Ve),
        ...M(Ye),
        ...M(Ge),
        ...M(Le),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          N.get(Q(E(t.pathVariables, `ja8Mitsv9`)), n).preload(),
          h(q, {}, t),
        ]);
      },
    }),
    (Dt = {
      exports: {
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `Framerja8Mitsv9`,
          slots: [],
          annotations: {
            framerIntrinsicWidth: `1200`,
            framerColorSyntax: `true`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerIntrinsicHeight: `2859`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `false`,
            framerDisplayContentsDiv: `false`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"I1DAjTqLj":{"layout":["fixed","auto"]},"dJXZP_vSJ":{"layout":["fixed","auto"]}}}`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerResponsiveScreen: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Dt as __FramerMetadata__, $ as default, yt as queryParamNames };
//# sourceMappingURL=YAZtP36dUKMaiycxC1sh5cBD8kCTrdAP6h20RU5sYBI.BIRgBCbY.mjs.map
