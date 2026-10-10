import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  E as r,
  H as i,
  L as a,
  N as o,
  P as s,
  R as c,
  S as l,
  c as u,
  h as d,
  j as f,
  l as p,
  m,
  s as h,
  u as g,
  x as _,
  y as v,
} from "./react.BtSUcPAM.mjs";
import { P as y, i as b, o as x, t as S } from "./motion.B_UOAosx.mjs";
import {
  A as C,
  At as ee,
  C as w,
  D as T,
  Et as E,
  Ft as D,
  G as O,
  I as k,
  K as te,
  Lt as ne,
  M as A,
  N as re,
  Nt as ie,
  O as j,
  Pt as M,
  Q as N,
  R as P,
  S as ae,
  T as oe,
  Tt as F,
  W as I,
  a as L,
  at as se,
  f as ce,
  ht as R,
  i as z,
  jt as le,
  kt as ue,
  m as de,
  n as fe,
  o as B,
  vt as pe,
  xt as me,
  yt as he,
} from "./framer.DuFjdl15.mjs";
import { i as ge, r as _e } from "./uXshcXf0K.STxmH728.mjs";
import { i as ve, r as ye } from "./T6200DqYJ.DDATVUMg.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./UOFERiKNL.BLQejQ4n.mjs";
import { n as we, t as Te } from "./FC_CatalogResultCounter.B0lgMo4v.mjs";
import { n as Ee, t as V } from "./S3WzxrIrx.C6dgk-ax.mjs";
import { i as De, n as Oe, r as H, t as U } from "./h9MxdvA8e.1EV1m79h.mjs";
import { i as ke, n as Ae, r as je, t as Me } from "./AeW2_n5fC.D-uaYwh6.mjs";
import { i as Ne, n as Pe, r as Fe, t as Ie } from "./egz88BsrP.BIROQOPJ.mjs";
import Le, { t as Re } from "./9Tb6XyhV8LqRNKjEOlip6wbCHjB8cs-30p2TNECVSxI.VdOpEECw.mjs";
function W(e) {
  let { type: t = `Load More`, Instance: n, Disabled: r, isActive: a = !0 } = e,
    [o, s] = v(),
    [l, u] = v(a),
    [p, m] = v(!0);
  _(() => {
    let e = setTimeout(() => {
      m(!1);
    }, 50);
    return () => clearTimeout(e);
  }, []);
  let g = f(
    (e) => {
      (e.preventDefault(), e.stopPropagation(), (t === `Next` || t === `Previous`) && m(!0));
      let n = new URL(i.location.href),
        r = parseInt(n.searchParams.get(`page`) || `1`, 10),
        a = r;
      switch (t) {
        case `Load More`:
        case `Next`:
          a = r + 1;
          break;
        case `Previous`:
          a = Math.max(1, r - 1);
          break;
      }
      (n.searchParams.set(`page`, a.toString()),
        i.history.pushState({}, ``, n.toString()),
        document.dispatchEvent(
          new CustomEvent(`product-pagination-change`, {
            detail: { page: a, type: t.toLowerCase().replace(` `, `_`) },
          })
        ));
    },
    [t]
  );
  (_(() => {
    let e = (e) => {
      let t = e.detail.hasMoreItems;
      s(!t);
    };
    return (
      document.addEventListener(`hide-loadmore-button`, e),
      () => {
        document.removeEventListener(`hide-loadmore-button`, e);
      }
    );
  }, []),
    _(() => {
      let e = (e) => {
        let { hasMoreItems: n, currentPage: r } = e.detail;
        (t === `Previous` && (u(r > 1), m(!0)),
          t === `Next` && (u(n), m(!0)),
          setTimeout(() => {
            m(!1);
          }, 50));
      };
      return (
        document.addEventListener(`update_next_prev_buttons`, e),
        () => {
          document.removeEventListener(`update_next_prev_buttons`, e);
        }
      );
    }, [t]));
  let y = Array.isArray(n) ? n[0] : n,
    b = Array.isArray(r) ? r[0] : r;
  return (t === `Load More` && !l) || o || ((t === `Next` || t === `Previous`) && !l && !b) || p
    ? null
    : !y || !d(y)
      ? h(`div`, {
          style: {
            width: `100%`,
            height: `100%`,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            color: `#666`,
            fontSize: `14px`,
            border: `1px dashed #ccc`,
            borderRadius: `4px`,
          },
          children: `Connect Instance`,
        })
      : oe.current() === oe.canvas
        ? h(`div`, {
            style: { height: `100%`, width: `100%` },
            children: c(y, { style: { ...(y.props?.style || {}), width: `100%`, height: `100%` } }),
          })
        : h(`div`, {
            style: {
              width: `100%`,
              height: `100%`,
              cursor: l ? `pointer` : `not-allowed`,
              opacity: l ? 1 : 0.5,
              pointerEvents: l ? `auto` : `none`,
            },
            className: `fc-pagination-button-container`,
            onClick: l ? g : void 0,
            role: `button`,
            tabIndex: l ? 0 : -1,
            "aria-label": t,
            onKeyDown: (e) => {
              l && (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), g(e));
            },
            children:
              l && !p
                ? c(y, { style: { ...(y.props?.style || {}), width: `100%`, height: `100%` } })
                : b && d(b)
                  ? c(b, { style: { ...(b.props?.style || {}), width: `100%`, height: `100%` } })
                  : h(`div`, {
                      style: {
                        width: `100%`,
                        height: `100%`,
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `center`,
                        color: `#666`,
                        fontSize: `14px`,
                        border: `1px dashed #ccc`,
                        borderRadius: `4px`,
                      },
                      children: `Connect Instance`,
                    }),
          });
}
var ze,
  Be = e(() => {
    (t(),
      u(),
      n(),
      N(),
      (function (e) {
        ((e.LoadMore = `Load More`), (e.Next = `Next`), (e.Previous = `Previous`));
      })((ze ||= {})),
      re(W, {
        type: {
          type: B.Enum,
          title: `Type`,
          options: [`Load More`, `Next`, `Previous`],
          optionTitles: [`Load More`],
          defaultValue: `Load More`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
        Instance: { type: B.ComponentInstance, title: `Instance` },
        Disabled: {
          type: B.ComponentInstance,
          title: `Disabled`,
          description: `Button will hide when disabled if instance isn't set`,
          hidden: ({ type: e }) => e === `Load More`,
        },
      }));
  });
function Ve(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  G,
  Xe = e(() => {
    (u(),
      N(),
      S(),
      n(),
      be(),
      (He = { r9Hn8X5Jr: { hover: !0 } }),
      (Ue = `framer-RUsVz`),
      (We = { r9Hn8X5Jr: `framer-v-xkvhs4` }),
      (Ge = { delay: 0, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Ke = ({ value: e, children: t }) => {
        let n = o(x),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(x.Provider, { value: i, children: t });
      }),
      (qe = y.create(a)),
      (Je = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Ye = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (G = D(
        m(function (e, t) {
          let n = l(null),
            i = t ?? n,
            o = r(),
            { activeLocale: s, setLocale: c } = F();
          R();
          let { style: u, className: d, layoutId: f, variant: p, ...m } = Je(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = M({
              defaultVariant: `r9Hn8X5Jr`,
              enabledGestures: He,
              ref: i,
              variant: p,
              variantClassNames: We,
            }),
            E = Ye(e, T),
            D = k(Ue, Ce);
          return h(b, {
            id: f ?? o,
            children: h(qe, {
              animate: T,
              initial: !1,
              children: h(Ke, {
                value: Ge,
                children: h(y.div, {
                  ...m,
                  ...x,
                  className: k(D, `framer-xkvhs4`, d, _),
                  "data-framer-name": `Active`,
                  layoutDependency: E,
                  layoutId: `r9Hn8X5Jr`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    ...u,
                  },
                  variants: { "r9Hn8X5Jr-hover": { backgroundColor: `rgba(8, 10, 15, 0.77)` } },
                  ...Ve({ "r9Hn8X5Jr-hover": { "data-framer-name": void 0 } }, g, S),
                  children: h(j, {
                    __fromCanvasComponent: !0,
                    children: h(a, {
                      children: h(y.p, {
                        className: `framer-styles-preset-arb5du`,
                        "data-styles-preset": `UOFERiKNL`,
                        dir: `auto`,
                        style: {
                          "--framer-text-alignment": `start`,
                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                        },
                        children: `Load more`,
                      }),
                    }),
                    className: `framer-kuwugb`,
                    fonts: [`Inter`],
                    layoutDependency: E,
                    layoutId: `cOcG1y7QO`,
                    style: {
                      "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-RUsVz.framer-6seir4, .framer-RUsVz .framer-6seir4 { display: block; }`,
          `.framer-RUsVz.framer-xkvhs4 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-RUsVz .framer-kuwugb { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...xe,
        ],
        `framer-RUsVz`
      )),
      (G.displayName = `Fav Load More Button Design`),
      (G.defaultProps = { height: 40, width: 114 }),
      A(
        G,
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
          ...O(Se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ze,
  Qe,
  $e,
  et,
  tt,
  nt,
  rt,
  it,
  at,
  K,
  ot = e(() => {
    (u(),
      N(),
      S(),
      n(),
      Be(),
      Xe(),
      (Ze = I(G)),
      (Qe = I(W)),
      ($e = `framer-iKB3v`),
      (et = { dmZopAxaL: `framer-v-1t3anhq` }),
      (tt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (nt = ({ value: e, children: t }) => {
        let n = o(x),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return h(x.Provider, { value: i, children: t });
      }),
      (rt = y.create(a)),
      (it = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (at = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (K = D(
        m(function (e, t) {
          let n = l(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: s } = F();
          R();
          let { style: c, className: u, layoutId: d, variant: f, ...p } = it(e),
            {
              baseVariant: m,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: w,
              variants: T,
            } = M({ defaultVariant: `dmZopAxaL`, ref: i, variant: f, variantClassNames: et }),
            E = at(e, T),
            D = k($e);
          return h(b, {
            id: d ?? a,
            children: h(rt, {
              animate: T,
              initial: !1,
              children: h(nt, {
                value: tt,
                children: h(y.div, {
                  ...p,
                  ...v,
                  className: k(D, `framer-1t3anhq`, u, g),
                  "data-framer-name": `Component`,
                  layoutDependency: E,
                  layoutId: `dmZopAxaL`,
                  ref: i,
                  style: { ...c },
                  children: h(z, {
                    children: h(C, {
                      className: `framer-1ine0gj-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: `foRKiSXWU-container`,
                      nodeId: `foRKiSXWU`,
                      rendersWithMotion: !0,
                      scopeId: `VdPmSVSd1`,
                      children: h(W, {
                        Disabled: [],
                        height: `100%`,
                        id: `foRKiSXWU`,
                        Instance: [
                          h(z, {
                            height: 40,
                            width: `200px`,
                            children: h(C, {
                              className: `framer-1m9gaoq-container`,
                              "data-framer-name": `Button Design`,
                              inComponentSlot: !0,
                              layoutDependency: E,
                              layoutId: `iEYyXvOPb-container`,
                              name: `Button Design`,
                              nodeId: `iEYyXvOPb`,
                              rendersWithMotion: !0,
                              scopeId: `VdPmSVSd1`,
                              children: h(G, {
                                height: `100%`,
                                id: `iEYyXvOPb`,
                                layoutId: `iEYyXvOPb`,
                                name: `Button Design`,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        layoutId: `foRKiSXWU`,
                        style: { width: `100%` },
                        type: `Load More`,
                        width: `100%`,
                      }),
                    }),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-iKB3v.framer-125z7hd, .framer-iKB3v .framer-125z7hd { display: block; }`,
          `.framer-iKB3v.framer-1t3anhq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 161px; }`,
          `.framer-iKB3v .framer-1ine0gj-container { flex: none; height: auto; position: relative; width: 100%; }`,
          `.framer-iKB3v .framer-1m9gaoq-container { height: auto; position: relative; width: 200px; }`,
        ],
        `framer-iKB3v`
      )),
      (K.displayName = `Fav Load More Button`),
      (K.defaultProps = { height: 40, width: 161 }),
      A(K, [{ explicitInter: !0, fonts: [] }, ...Ze, ...Qe], { supportsExplicitInterCodegen: !0 }),
      (K.loader = { load: (e, t) => (t.locale, Promise.allSettled([P(G, {}, t)])) }));
  }),
  st,
  ct,
  lt,
  q,
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
  J,
  Y,
  X,
  Z,
  bt,
  Q,
  xt,
  St,
  Ct,
  wt,
  Tt,
  $,
  Et;
e(() => {
  (u(),
    N(),
    S(),
    n(),
    ge(),
    we(),
    De(),
    Oe(),
    Ee(),
    ot(),
    ye(),
    ke(),
    Ne(),
    Re(),
    (st = ne(de)),
    (ct = I(Te)),
    (lt = I(U)),
    (q = ne(y.div)),
    (ut = I(V)),
    (dt = I(H)),
    (ft = I(_e)),
    (pt = {
      JkQ_6uDFq: `(min-width: 1200px)`,
      KFpUohKZ7: `(max-width: 809.98px)`,
      PLjgEA4Zc: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (mt = []),
    (ht = `framer-bEiQZ`),
    (gt = {
      JkQ_6uDFq: `framer-v-1hwtp92`,
      KFpUohKZ7: `framer-v-jg03ng`,
      PLjgEA4Zc: `framer-v-1t2n5ej`,
    }),
    (_t = (e, t, n) => (e && t ? `position` : n)),
    (vt = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 20, y: 0 },
      repeat: !1,
      startDelay: 0,
      tokenization: `character`,
      transition: { delay: 0.05, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (yt = {
      effect: { opacity: 0.001, rotate: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 20 },
      repeat: !1,
      startDelay: 0.4,
      tokenization: `character`,
      transition: { delay: 0.01, duration: 0.4, ease: [0.44, 0, 0.56, 1], type: `tween` },
      trigger: `onMount`,
      type: `appear`,
    }),
    (J = {
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
    (Y = { delay: 0, duration: 0.8, ease: [0.44, 0, 0.34, 0.98], type: `tween` }),
    (X = {
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
    (Z = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (bt = (e, t) =>
      typeof e == `string` && typeof t == `string`
        ? e.toLowerCase().includes(t.toLowerCase())
        : Array.isArray(e) && typeof t == `string`
          ? e.includes(t)
          : !1),
    (Q = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (xt = () => ({
      from: { alias: `fJfofgreq`, data: ve, type: `Collection` },
      select: [
        { collection: `fJfofgreq`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `sb5C2g1qc`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `JZfMFKc2o`, type: `Identifier` },
        { collection: `fJfofgreq`, name: `id`, type: `Identifier` },
      ],
    })),
    (St = ({ query: e, pageSize: t, children: n }) => n(ue(e))),
    (Ct = { Desktop: `JkQ_6uDFq`, Phone: `KFpUohKZ7`, Tablet: `PLjgEA4Zc` }),
    (wt = ({ value: e }) =>
      me()
        ? null
        : h(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Tt = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Ct[r.variant] ?? r.variant ?? `JkQ_6uDFq`,
    })),
    ($ = D(
      m(function (e, t) {
        let n = l(null),
          i = t ?? n,
          c = r(),
          { activeLocale: u, setLocale: d } = F(),
          f = R(),
          { style: m, className: _, layoutId: v, variant: S, ...C } = Tt(e);
        E(s(() => Le({}, u), [u]));
        let [D, O] = he(S, pt, !1),
          ne = k(ht, Ie, Me),
          A = o(ce)?.isLayoutTemplate,
          re = !!o(x)?.transition?.layout,
          M = _t(A, re),
          N = ee(`yDO33Rq6g`),
          P = ie();
        return (
          le(),
          pe({}),
          h(ce.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: Ct,
              primaryVariantId: `JkQ_6uDFq`,
              variantClassNames: gt,
            },
            children: g(b, {
              id: v ?? c,
              children: [
                h(wt, { value: `html body { background: rgb(0, 0, 0); }` }),
                h(y.div, {
                  ...C,
                  className: k(ne, `framer-1hwtp92`, _),
                  ref: i,
                  style: { ...m },
                  children: g(y.main, {
                    className: `framer-r5tu6j`,
                    "data-framer-name": `Main`,
                    layout: M,
                    children: [
                      g(`section`, {
                        className: `framer-1i0em7f`,
                        "data-framer-name": `Section - Hero`,
                        children: [
                          g(`div`, {
                            className: `framer-1jxlrh0`,
                            "data-framer-name": `Content`,
                            children: [
                              h(j, {
                                __fromCanvasComponent: !0,
                                children: h(a, {
                                  children: h(`h1`, {
                                    className: `framer-styles-preset-6khajo`,
                                    "data-styles-preset": `egz88BsrP`,
                                    dir: `auto`,
                                    style: { "--framer-text-alignment": `center` },
                                    children: `Your Favorites`,
                                  }),
                                }),
                                className: `framer-elcjwv`,
                                "data-framer-name": `Title`,
                                effect: vt,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                              h(j, {
                                __fromCanvasComponent: !0,
                                children: h(a, {
                                  children: h(`p`, {
                                    className: `framer-styles-preset-g91u7x`,
                                    "data-styles-preset": `AeW2_n5fC`,
                                    dir: `auto`,
                                    style: {
                                      "--framer-text-alignment": `center`,
                                      "--framer-text-color": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                    },
                                    children: `A curated collection of the pieces you've saved for later, ready whenever inspiration strikes.`,
                                  }),
                                }),
                                className: `framer-1qnff4u`,
                                "data-framer-name": `Description`,
                                effect: yt,
                                fonts: [`Inter`],
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            ],
                          }),
                          h(st, {
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
                              loading: te((f?.y || 0) + 0 + 0 + 0 + 0 + 0),
                              pixelHeight: 698,
                              pixelWidth: 1440,
                              sizes: f?.width || `100vw`,
                              src: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png`,
                              srcSet: `../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-01c22e.png 512w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0-33db11.png 1024w,../../assets/images/ZKB4fWu4waKQDEeUJuY7xYwOsY0.png 1440w`,
                            },
                            className: `framer-x3vohr`,
                            "data-framer-name": `BG`,
                          }),
                          h(`div`, {
                            className: `framer-8g1tu0`,
                            "data-framer-name": `Nav Trigger`,
                            id: N,
                            ref: P(N),
                          }),
                        ],
                      }),
                      g(`section`, {
                        className: `framer-chkwfq`,
                        "data-framer-name": `Section - Content`,
                        children: [
                          g(q, {
                            __framer__animate: { transition: Y },
                            __framer__animateOnce: !0,
                            __framer__enter: J,
                            __framer__exit: X,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-1khxw8o`,
                            "data-framer-name": `Top Bar Wrap`,
                            children: [
                              h(z, {
                                children: h(L, {
                                  className: `framer-dtyr5u-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `RguyxwQ7x`,
                                  scopeId: `B8Xr2B7qH`,
                                  children: h(Te, {
                                    color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    content: `{{#}} total`,
                                    defaultText: `No results found...`,
                                    favoritesText: `No favorites yet...`,
                                    font: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 400,
                                      letterSpacing: `0em`,
                                      lineHeight: `110%`,
                                    },
                                    height: `100%`,
                                    id: `RguyxwQ7x`,
                                    layoutId: `RguyxwQ7x`,
                                    noFavorites: `Show`,
                                    noQuery: `Hide`,
                                    noResults: `Hide`,
                                    preview: `Results`,
                                    searchText: `Start your search...`,
                                    transform: `None`,
                                    type: `Favorites`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                              h(w, {
                                breakpoint: D,
                                overrides: {
                                  KFpUohKZ7: { y: (f?.y || 0) + 0 + 0 + 0 + 550 + 54 + 0 + 80.5 },
                                  PLjgEA4Zc: { y: (f?.y || 0) + 0 + 0 + 0 + 700 + 44 + 0 + 80.5 },
                                },
                                children: h(z, {
                                  height: 39,
                                  y: (f?.y || 0) + 0 + 0 + 0 + 800 + 54 + 0 + 80.5,
                                  children: h(L, {
                                    className: `framer-19ohcst-container`,
                                    nodeId: `BVzDdvawn`,
                                    scopeId: `B8Xr2B7qH`,
                                    children: h(w, {
                                      breakpoint: D,
                                      overrides: {
                                        KFpUohKZ7: { TsK1ncLbC: `8px 12px 8px 14px` },
                                        PLjgEA4Zc: { TsK1ncLbC: `9px 14px 9px 16px` },
                                      },
                                      children: h(U, {
                                        height: `100%`,
                                        id: `BVzDdvawn`,
                                        layoutId: `BVzDdvawn`,
                                        TsK1ncLbC: `10px 14px 10px 16px`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                            ],
                          }),
                          h(q, {
                            __framer__animate: { transition: Y },
                            __framer__animateOnce: !0,
                            __framer__enter: J,
                            __framer__exit: X,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            className: `framer-zqitl3`,
                            "data-framer-name": `Grid`,
                            children: h(z, {
                              children: h(L, {
                                className: `framer-1twn1yj-container`,
                                "data-framer-name": `Fav Product Catalog`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                name: `Fav Product Catalog`,
                                nodeId: `Z6vQxk8vA`,
                                scopeId: `B8Xr2B7qH`,
                                children: h(w, {
                                  breakpoint: D,
                                  overrides: {
                                    KFpUohKZ7: {
                                      layout: {
                                        align: `start`,
                                        alignH: `start`,
                                        background: `rgba(255, 255, 255, 0)`,
                                        columnCount: 1,
                                        columns: `fixed`,
                                        direction: `vertical`,
                                        distribute: `start`,
                                        gap: 16,
                                        gapY: 24,
                                        gridAlign: `center`,
                                        gridWidth: 296,
                                        maxColumns: 3,
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
                                    PLjgEA4Zc: {
                                      layout: {
                                        align: `start`,
                                        alignH: `start`,
                                        background: `rgba(255, 255, 255, 0)`,
                                        columnCount: 2,
                                        columns: `fixed`,
                                        direction: `vertical`,
                                        distribute: `start`,
                                        gap: 16,
                                        gapY: 24,
                                        gridAlign: `center`,
                                        gridWidth: 296,
                                        maxColumns: 3,
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
                                  children: h(_e, {
                                    Collection: [
                                      h(y.div, {
                                        className: `framer-1j2c2qf`,
                                        children: h(fe, {
                                          children: h(St, {
                                            query: xt(),
                                            children: (e, t, n) =>
                                              h(p, {
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
                                                      sb5C2g1qc: s,
                                                      Sn3Ji2zLH: c,
                                                      UxQ8VtfSI: l,
                                                      vJoj3qvid: u,
                                                    },
                                                    d
                                                  ) => (
                                                    (u ??= ``),
                                                    (c ??= ``),
                                                    (l ??= ``),
                                                    (o ??= ``),
                                                    (e ??= ``),
                                                    (a ??= ``),
                                                    (s ??= ``),
                                                    (i ??= ``),
                                                    h(
                                                      b,
                                                      {
                                                        id: `fJfofgreq-${n}`,
                                                        children: h(ae.Provider, {
                                                          value: { JZfMFKc2o: i },
                                                          children: h(T, {
                                                            links: [
                                                              {
                                                                href: {
                                                                  pathVariables: { JZfMFKc2o: i },
                                                                  webPageId: `vmJrVFRkR`,
                                                                },
                                                                implicitPathVariables: void 0,
                                                              },
                                                            ],
                                                            children: (n) =>
                                                              h(z, {
                                                                height: 428,
                                                                width: `380.5px`,
                                                                children: h(L, {
                                                                  className: `framer-1oebyme-container`,
                                                                  inComponentSlot: !0,
                                                                  nodeId: `bdyq88BqN`,
                                                                  rendersWithMotion: !0,
                                                                  scopeId: `B8Xr2B7qH`,
                                                                  children: h(V, {
                                                                    FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                                    height: `100%`,
                                                                    hFy2PLFBG: c,
                                                                    HwypVSMEi: !1,
                                                                    id: `bdyq88BqN`,
                                                                    II0fWsmjM: `12px`,
                                                                    layoutId: `bdyq88BqN`,
                                                                    MGgAvDoA0: n[0],
                                                                    O9ZyioqcS: Z(t),
                                                                    OKvEEQQFQ: bt(
                                                                      s,
                                                                      `New Arrivals`
                                                                    ),
                                                                    Qb7mSHgLh: a,
                                                                    QjM5BTCWQ: !0,
                                                                    SKBNP2vvn: !1,
                                                                    style: {
                                                                      height: `100%`,
                                                                      width: `100%`,
                                                                    },
                                                                    TCGQti0b7: l,
                                                                    tJ0RQfmJy: e,
                                                                    ub4buTzaB: Z(r),
                                                                    variant: Q(`anAebR9ik`),
                                                                    width: `100%`,
                                                                    wsSEriDkC: o,
                                                                    xYhX6dOGf: {
                                                                      borderColor: `rgb(206, 206, 206)`,
                                                                      borderStyle: `solid`,
                                                                      borderWidth: 0,
                                                                    },
                                                                    Zg3vnZECo: u,
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
                                    EmptyState: [
                                      h(z, {
                                        height: 373,
                                        width: `781px`,
                                        children: h(L, {
                                          className: `framer-10vect3-container`,
                                          inComponentSlot: !0,
                                          nodeId: `MoCLRFQfi`,
                                          rendersWithMotion: !0,
                                          scopeId: `B8Xr2B7qH`,
                                          children: h(H, {
                                            height: `100%`,
                                            id: `MoCLRFQfi`,
                                            layoutId: `MoCLRFQfi`,
                                            style: { width: `100%` },
                                            variant: Q(`emhr9oPWM`),
                                            width: `100%`,
                                          }),
                                        }),
                                      }),
                                    ],
                                    EmptyStatePhone: [],
                                    height: `100%`,
                                    id: `Z6vQxk8vA`,
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
                                      gridWidth: 296,
                                      maxColumns: 3,
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
                                    layoutId: `Z6vQxk8vA`,
                                    Metafields: { include: !1 },
                                    name: `Fav Product Catalog`,
                                    pageType: `favorites`,
                                    Pagination: { enable: !1, items: 1, type: `load_more` },
                                    phoneInstance: [],
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
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                h(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-bEiQZ.framer-11iamrm, .framer-bEiQZ .framer-11iamrm { display: block; }`,
        `.framer-bEiQZ.framer-1hwtp92 { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1000px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-bEiQZ .framer-r5tu6j { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-1i0em7f { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 80vh; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 108px 50px 108px 50px; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-1jxlrh0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: 1px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 30px 0px 0px 0px; position: relative; width: 100%; z-index: 2; }`,
        `.framer-bEiQZ .framer-elcjwv { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bEiQZ .framer-1qnff4u { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 473px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-bEiQZ .framer-x3vohr { -webkit-filter: brightness(0.85); bottom: 0px; filter: brightness(0.85); flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
        `.framer-bEiQZ .framer-8g1tu0 { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-bEiQZ .framer-chkwfq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: center; max-width: 1260px; overflow: var(--overflow-clip-fallback, clip); padding: 54px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-1khxw8o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-dtyr5u-container, .framer-bEiQZ .framer-19ohcst-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-bEiQZ .framer-zqitl3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 44px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-1twn1yj-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-1j2c2qf { display: grid; gap: 20px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(1px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 781px; }`,
        `.framer-bEiQZ .framer-1oebyme-container { align-self: start; flex: none; height: 428px; justify-self: start; position: relative; width: 100%; }`,
        `.framer-bEiQZ .framer-10vect3-container { height: auto; position: relative; width: 781px; }`,
        ...Pe,
        ...Ae,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-bEiQZ.framer-1hwtp92 { width: 810px; } .framer-bEiQZ .framer-1i0em7f { height: 70vh; max-height: 756px; } .framer-bEiQZ .framer-1qnff4u { max-width: 403px; } .framer-bEiQZ .framer-chkwfq { gap: 32px; padding: 44px 30px 76px 30px; } .framer-bEiQZ .framer-1khxw8o, .framer-bEiQZ .framer-zqitl3 { max-width: 700px; }}`,
        `@media (max-width: 809.98px) { .framer-bEiQZ.framer-1hwtp92 { width: 390px; } .framer-bEiQZ .framer-1i0em7f { height: 65vh; max-height: 550px; } .framer-bEiQZ .framer-chkwfq { gap: 28px; padding: 54px 20px 68px 20px; } .framer-bEiQZ .framer-1khxw8o, .framer-bEiQZ .framer-zqitl3 { max-width: 380px; }}`,
      ],
      `framer-bEiQZ`
    )),
    ($.displayName = `Page`),
    ($.defaultProps = { height: 5495.5, width: 1200 }),
    A(
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
        ...ct,
        ...lt,
        ...ut,
        ...dt,
        ...ft,
        ...O(Fe),
        ...O(je),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    ($.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = se.get(xt(), n);
        return Promise.allSettled([
          r.preload(),
          P(U, {}, t),
          P(H, {}, t),
          P(K, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => P(V, {}, t)));
          })(),
        ]);
      },
    }),
    (Et = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerB8Xr2B7qH`,
          slots: [],
          annotations: {
            framerContractVersion: `1`,
            framerComponentViewportWidth: `true`,
            framerIntrinsicWidth: `1200`,
            framerResponsiveScreen: `true`,
            framerAutoSizeImages: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"PLjgEA4Zc":{"layout":["fixed","fixed"]},"KFpUohKZ7":{"layout":["fixed","fixed"]}}}`,
            framerLayoutTemplateFlowEffect: `true`,
            framerScrollSections: `{"yDO33Rq6g":{"pattern":":yDO33Rq6g","name":"Nav Trigger"}}`,
            framerIntrinsicHeight: `5495.5`,
            framerDisplayContentsDiv: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerColorSyntax: `true`,
            framerImmutableVariables: `true`,
          },
        },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Et as __FramerMetadata__, $ as default, mt as queryParamNames };
//# sourceMappingURL=0zUjYQJFeC_Qh6QpFAvhL9qqiiT80mgi_FSxKkaaMlE.D_EBvGIN.mjs.map
