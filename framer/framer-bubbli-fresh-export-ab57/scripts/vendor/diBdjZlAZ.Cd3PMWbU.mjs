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
  P as l,
  c as u,
  g as d,
  j as f,
  l as p,
  o as m,
  w as h,
  y as g,
} from "./react.CWoGm2_e.mjs";
import { C as _, a as v, r as y, t as b } from "./motion.DjW49AAR.mjs";
import {
  A as x,
  D as S,
  Et as C,
  H as w,
  I as T,
  P as E,
  Tt as ee,
  U as D,
  X as O,
  _ as k,
  _t as te,
  ct as ne,
  i as A,
  j,
  k as M,
  o as N,
  st as re,
  w as P,
} from "./framer.D9PtOJZM.mjs";
import { i as F, n as ie, r as ae, t as oe } from "./J6OXVPwtV.C1CsVzE5.mjs";
import { o as se, r as I, t as ce } from "./lodash.Dqvych0p.mjs";
import { n as L, t as R } from "./IsBrowser.bF6aX4Tz.mjs";
function z(e) {
  if (P.current() === P.canvas)
    return u(`div`, {
      style: {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        width: `100%`,
        height: `100%`,
      },
      children: u(`p`, {
        style: {
          ...e.font,
          color: e.color,
          backgroundColor: e.backgroundColor,
          ...e.border,
          borderRadius: e.radius,
          padding: e.padding,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          margin: 0,
          width: `100%`,
          height: e.fixedHeight ? `${e.heightPx}px` : `100%`,
          lineHeight: 1,
          fontSize: e.font?.fontSize || `inherit`,
        },
        children: `0`,
      }),
    });
  {
    let [n, a] = o(!1),
      [s, c] = o(0),
      [d, f] = o(!0),
      [p, m] = o(!1),
      h = t(!1),
      g = t(!1);
    r(() => {
      a(!0);
    }, []);
    let _ = l(
        (e, t = 100, n = 1e4) =>
          new Promise((r, i) => {
            let a = Date.now(),
              o = () => {
                e()
                  ? r()
                  : Date.now() - a >= n
                    ? i(Error(`Condition not met within timeout`))
                    : setTimeout(o, t);
              };
            o();
          }),
        []
      ),
      v = l(
        async (e) => {
          if (!h.current) {
            ((h.current = !0), g.current || (f(!0), m(!1)));
            try {
              await _(() => i.shopXtools && i.shopXtools.fetchCart);
              let t = await i.shopXtools.fetchCart(e);
              if (t && t.lines && t.lines.edges && t.lines.edges.length > 0) {
                let e = t.lines.edges.reduce((e, t) => e + (t.node.quantity || 0), 0);
                c(e);
              } else (c(0), f(!1), m(!0), (g.current = !0));
            } catch {
              (c(0), f(!1), m(!0), (g.current = !0));
            } finally {
              ((h.current = !1),
                g.current || (f(!1), (g.current = !0), setTimeout(() => m(!0), 50)));
            }
          }
        },
        [_]
      ),
      y = l(
        I(async () => {
          if (!n) return;
          let e = i.shopXtools?.cart?.id;
          if (!e)
            try {
              e = localStorage.getItem(`shopX_cart_id`);
            } catch {}
          e ? await v(e) : (c(0), f(!1), m(!0), (g.current = !0));
        }, 1e3),
        [v, n]
      );
    return (
      r(() => {
        if (n)
          return (
            i.addEventListener(`shopXtools-cart-update`, y),
            y(),
            () => {
              i.removeEventListener(`shopXtools-cart-update`, y);
            }
          );
      }, [y, n]),
      e.hideIf0 && s === 0
        ? null
        : u(`div`, {
            style: {
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              width: `100%`,
              height: `100%`,
            },
            children: u(`p`, {
              style: {
                ...e.font,
                color: e.color,
                backgroundColor: e.backgroundColor,
                ...e.border,
                borderRadius: e.radius,
                padding: e.padding,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                margin: 0,
                width: `100%`,
                height: e.fixedHeight ? `${e.heightPx}px` : `100%`,
                opacity: +!!p,
                transition: `opacity 0.3s ease-in-out`,
                visibility: d ? `hidden` : `visible`,
                lineHeight: 1,
                fontSize: e.font?.fontSize || `inherit`,
              },
              children: n ? s.toString() : `0`,
            }),
          })
    );
  }
}
var B = e(() => {
  (n(),
    m(),
    h(),
    O(),
    ce(),
    (z.defaultProps = {
      hideIf0: !1,
      font: void 0,
      color: `#000`,
      backgroundColor: `#FFFFFF00`,
      backgroundOpacity: 0,
      border: {
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderStyle: `solid`,
        borderColor: `rgba(0, 0, 0, 0.5)`,
      },
      radius: 0,
      padding: 0,
      fixedHeight: !1,
      heightPx: 40,
    }),
    j(z, {
      hideIf0: {
        type: N.Boolean,
        title: `When 0`,
        defaultValue: !1,
        enabledTitle: `Hide`,
        disabledTitle: `Show`,
        description: `For browser only, canvas will always display 0.`,
      },
      font: { type: N.Font, controls: `extended`, title: `Font` },
      color: { type: N.Color, defaultValue: `#000`, title: `Color` },
      backgroundColor: { type: N.Color, title: `BG`, defaultValue: `rgba(255, 255, 255, 0)` },
      border: {
        type: N.Border,
        title: `Border`,
        defaultValue: {
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 0,
          borderStyle: `solid`,
          borderColor: `rgba(0, 0, 0, 0.5)`,
        },
      },
      padding: {
        type: N.FusedNumber,
        title: `Padding`,
        defaultValue: 0,
        toggleKey: `paddingPerSide`,
        toggleTitles: [`All`, `Sides`],
        valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
        valueLabels: [`T`, `R`, `B`, `L`],
        min: 0,
      },
      radius: {
        type: N.FusedNumber,
        title: `Radius`,
        defaultValue: 0,
        toggleKey: `radiusPerCorner`,
        toggleTitles: [`All`, `Corners`],
        valueKeys: [`topLeft`, `topRight`, `bottomRight`, `bottomLeft`],
        valueLabels: [`TL`, `TR`, `BR`, `BL`],
        min: 0,
      },
    }));
});
function V(e) {
  let { Component: n, EmptyComponent: a, emptyBehavior: s, triggerShopifyCartModal: c } = e,
    d = L(),
    [p, m] = o([]),
    h = t(!1);
  (P.current(), P.canvas);
  let g = l(
      async (e) => {
        if (!(h.current || !d)) {
          h.current = !0;
          try {
            let t = await i?.shopXtools?.fetchCart?.(e);
            m((t && t.lines?.edges) || []);
          } catch {
            m([]);
          } finally {
            h.current = !1;
          }
        }
      },
      [d]
    ),
    _ = l(async () => {
      if (!d) return;
      let e;
      try {
        ((e = i?.shopXtools?.cart?.id), (e ||= localStorage.getItem(`shopX_cart_id`)));
      } catch {
        return;
      }
      e ? await g(e) : m([]);
    }, [g, d]);
  r(() => {
    if (!d) return;
    (_(), i.addEventListener(`shopXtools-cart-update`, _));
    function e(e) {
      e.detail && se(e, `detail.__triggerCartModal`) !== !1 && typeof c == `function` && c();
    }
    return (
      document.addEventListener(`checkout__changed`, e),
      () => {
        (i.removeEventListener(`shopXtools-cart-update`, _),
          document.removeEventListener(`checkout__changed`, e));
      }
    );
  }, [_, d, c]);
  let v = () => {
      if (d && typeof c == `function`) {
        if (typeof i.fcTrackGAEvent == `function` && p.length > 0) {
          let e = p.map(({ node: e }) => {
              let t = e.merchandise,
                n = t.product || {};
              return {
                item_id: t.id?.split(`/`).pop() || ``,
                item_name: n.title || ``,
                item_variant: t.title || ``,
                price: parseFloat(t.price?.amount || `0`),
                quantity: e.quantity,
                item_brand: n.vendor || null,
                item_category: n.productType || null,
                SKU: t.id?.split(`/`).pop() || ``,
                "Item Name": n.title || ``,
              };
            }),
            t = e.reduce((e, t) => e + t.price * t.quantity, 0),
            n = {
              currency: p[0]?.node?.merchandise?.price?.currencyCode || `USD`,
              value: t,
              items: e,
            };
          i.fcTrackGAEvent(`view_cart`, n);
        }
        c();
      }
    },
    y = (e = `Connect Instance`) =>
      u(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          color: `#666`,
          fontSize: `14px`,
        },
        children: e,
      }),
    b = p.length === 0,
    x = null;
  if (P.current() === P.canvas) x = n?.[0] || null;
  else if (b)
    switch (s) {
      case `None`:
        x = n?.[0] || null;
        break;
      case `Component`:
        if (((x = a?.[0] || null), !x && P.current() === P.canvas)) return y(`Connect Empty State`);
        break;
      case `Hide`:
        return null;
      default:
        x = n?.[0] || null;
    }
  else x = n?.[0] || null;
  return x
    ? u(`div`, {
        onClick: v,
        style: { cursor: `pointer`, display: `block`, width: `fit-content`, height: `fit-content` },
        children: f(x, { style: { ...(x.props?.style || {}) } }),
      })
    : y();
}
var le = e(() => {
    (n(),
      m(),
      h(),
      O(),
      ce(),
      R(),
      (V.defaultProps = {
        Component: null,
        EmptyComponent: null,
        emptyBehavior: `None`,
        triggerShopifyCartModal: () => {},
      }),
      j(V, {
        Component: {
          type: N.ComponentInstance,
          title: `Default`,
          description: `Design to render when there are items in the cart.`,
        },
        emptyBehavior: {
          type: N.Enum,
          title: `When Empty`,
          options: [`None`, `Component`, `Hide`],
          optionTitles: [`Use Default`, `Empty State`, `Hide`],
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          defaultValue: `None`,
        },
        EmptyComponent: {
          type: N.ComponentInstance,
          title: `Empty State`,
          description: `Design to render when cart is empty.`,
          hidden: (e) => e.emptyBehavior !== `Component`,
        },
        triggerShopifyCartModal: { type: N.EventHandler, title: `CartModal` },
      }));
  }),
  H,
  U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  Z,
  ue = e(() => {
    (m(),
      O(),
      b(),
      h(),
      B(),
      le(),
      (H = w(z)),
      (U = w(V)),
      (W = `framer-7wWSs`),
      (G = { NcGyAsANg: `framer-v-v4b17e` }),
      (K = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (q = ({ value: e, children: t }) => {
        let n = s(v),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(v.Provider, { value: i, children: t });
      }),
      (J = _.create(a)),
      (Y = ({ cartCounterColor: e, cartEvent: t, height: n, id: r, width: i, ...a }) => ({
        ...a,
        wNgb6IVkN:
          e ??
          a.wNgb6IVkN ??
          `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
        xyG0fDCYV: t ?? a.xyG0fDCYV,
      })),
      (X = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = C(
        d(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = g(),
            { activeLocale: o, setLocale: s } = te();
          ne();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              xyG0fDCYV: p,
              wNgb6IVkN: m,
              ...h
            } = Y(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: C,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = ee({ defaultVariant: `NcGyAsANg`, ref: i, variant: f, variantClassNames: G }),
            k = X(e, O),
            { activeVariantCallback: j, delay: N } = re(v),
            P = j(async (...e) => {
              if (p && (await p(...e)) === !1) return !1;
            }),
            F = E(W);
          return u(y, {
            id: d ?? a,
            children: u(J, {
              animate: O,
              initial: !1,
              children: u(q, {
                value: K,
                children: u(_.div, {
                  ...h,
                  ...S,
                  className: E(F, `framer-v4b17e`, l, b),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: k,
                  layoutId: `NcGyAsANg`,
                  ref: i,
                  style: { ...c },
                  children: u(A, {
                    children: u(M, {
                      className: `framer-yjyb77-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: `k7TERPzh4-container`,
                      nodeId: `k7TERPzh4`,
                      rendersWithMotion: !0,
                      scopeId: `AC8pHLU8R`,
                      children: u(V, {
                        Component: [
                          u(_.div, {
                            className: `framer-ilhl1w`,
                            "data-framer-name": `Design`,
                            layoutDependency: k,
                            layoutId: `QfBRvLPpC`,
                            children: u(A, {
                              children: u(M, {
                                className: `framer-18kez1q-container`,
                                inComponentSlot: !0,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: k,
                                layoutId: `c4BrE9hth-container`,
                                nodeId: `c4BrE9hth`,
                                rendersWithMotion: !0,
                                scopeId: `AC8pHLU8R`,
                                children: u(z, {
                                  backgroundColor: `rgba(255, 255, 255, 0)`,
                                  border: {
                                    borderBottomWidth: 0,
                                    borderColor: `rgba(0, 0, 0, 0.5)`,
                                    borderLeftWidth: 0,
                                    borderRightWidth: 0,
                                    borderStyle: `solid`,
                                    borderTopWidth: 0,
                                  },
                                  bottomLeft: 0,
                                  bottomRight: 0,
                                  color: m,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `14px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `-0.05em`,
                                    lineHeight: `1.2em`,
                                  },
                                  height: `100%`,
                                  hideIf0: !1,
                                  id: `c4BrE9hth`,
                                  layoutId: `c4BrE9hth`,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  radius: 0,
                                  radiusPerCorner: !1,
                                  topLeft: 0,
                                  topRight: 0,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                        ],
                        emptyBehavior: `None`,
                        EmptyComponent: [],
                        height: `100%`,
                        id: `k7TERPzh4`,
                        layoutId: `k7TERPzh4`,
                        triggerShopifyCartModal: P,
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
          `.framer-7wWSs.framer-165m1nb, .framer-7wWSs .framer-165m1nb { display: block; }`,
          `.framer-7wWSs.framer-v4b17e { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-7wWSs .framer-yjyb77-container, .framer-7wWSs .framer-18kez1q-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-7wWSs .framer-ilhl1w { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
        ],
        `framer-7wWSs`
      )),
      (Z.displayName = `FC Cart Trigger`),
      (Z.defaultProps = { height: 14, width: 8 }),
      j(Z, {
        xyG0fDCYV: { title: `CartEvent`, type: N.EventHandler },
        wNgb6IVkN: {
          defaultValue: `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Cart Counter Color`,
          type: N.Color,
        },
      }),
      x(
        Z,
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
          ...H,
          ...U,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Q(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var de,
  fe,
  pe,
  me,
  he,
  ge,
  _e,
  ve,
  ye,
  be,
  xe,
  $,
  Se = e(() => {
    (m(),
      O(),
      b(),
      h(),
      F(),
      ue(),
      (de = w(Z)),
      (fe = { ZJ2TO9InY: { hover: !0 } }),
      (pe = [`U9ygOezcy`, `ybqOF8Bn2`, `TCOyb_nl_`, `ZJ2TO9InY`]),
      (me = `framer-eOx2y`),
      (he = {
        TCOyb_nl_: `framer-v-11w0pjf`,
        U9ygOezcy: `framer-v-14u9dbm`,
        ybqOF8Bn2: `framer-v-1419hyz`,
        ZJ2TO9InY: `framer-v-1ejcrp0`,
      }),
      (ge = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (_e = ({ value: e, children: t }) => {
        let n = s(v),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(v.Provider, { value: i, children: t });
      }),
      (ve = {
        "Text Link - Active": `ybqOF8Bn2`,
        "Text Link - Tablet/Mobile": `TCOyb_nl_`,
        "Text Link": `U9ygOezcy`,
        Bag: `ZJ2TO9InY`,
      }),
      (ye = _.create(a)),
      (be = ({
        cart: e,
        cartCounterColor: t,
        cartText: n,
        click: r,
        color: i,
        height: a,
        hover: o,
        hover2: s,
        id: c,
        link: l,
        newTab: u,
        title: d,
        width: f,
        ...p
      }) => ({
        ...p,
        ANIdPmhh1:
          i ??
          p.ANIdPmhh1 ??
          `var(--token-c3a55a0f-d2a0-4565-bb3a-bbd6f1087b74, rgb(255, 255, 255))`,
        EivEgVXC6: s ?? p.EivEgVXC6,
        GOwtSdU4j: e ?? p.GOwtSdU4j,
        lQ_FXk_nD: u ?? p.lQ_FXk_nD,
        pN5qcoZCL: l ?? p.pN5qcoZCL,
        PrPXMleLB: n ?? p.PrPXMleLB ?? `Cart`,
        QLnVuY7rT: o ?? p.QLnVuY7rT,
        Rotj5CktJ: r ?? p.Rotj5CktJ,
        UvO00kpP1: d ?? p.UvO00kpP1 ?? `Label`,
        variant: ve[p.variant] ?? p.variant ?? `U9ygOezcy`,
        xkJ1dpnu8:
          t ??
          p.xkJ1dpnu8 ??
          `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255))`,
      })),
      (xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        d(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = g(),
            { activeLocale: s, setLocale: c } = te(),
            l = ne(),
            {
              style: d,
              className: f,
              layoutId: m,
              variant: h,
              UvO00kpP1: v,
              pN5qcoZCL: b,
              lQ_FXk_nD: x,
              ANIdPmhh1: C,
              Rotj5CktJ: w,
              QLnVuY7rT: T,
              EivEgVXC6: D,
              PrPXMleLB: O,
              xkJ1dpnu8: j,
              GOwtSdU4j: N,
              ...P
            } = be(e),
            {
              baseVariant: F,
              classNames: ie,
              clearLoadingGesture: ae,
              gestureHandlers: se,
              gestureVariant: I,
              isLoading: ce,
              setGestureState: L,
              setVariant: R,
              variants: z,
            } = ee({
              cycleOrder: pe,
              defaultVariant: `U9ygOezcy`,
              enabledGestures: fe,
              ref: i,
              variant: h,
              variantClassNames: he,
            }),
            B = xe(e, z),
            { activeVariantCallback: V, delay: le } = re(F),
            H = V(async (...e) => {
              (L({ isHovered: !0 }), R(`ybqOF8Bn2`));
            }),
            U = V(async (...e) => {
              (L({ isHovered: !1 }), R(`U9ygOezcy`));
            }),
            W = V(async (...e) => {
              if ((L({ isPressed: !1 }), w && (await w(...e)) === !1)) return !1;
            }),
            G = V(async (...e) => {
              if (
                (L({ isHovered: !0 }),
                (T && (await T(...e)) === !1) || (D && (await D(...e)) === !1))
              )
                return !1;
            }),
            K = V(async (...e) => {
              (L({ isHovered: !0 }), R(`ZJ2TO9InY`));
            }),
            q = V(async (...e) => {
              if (N && (await N(...e)) === !1) return !1;
            }),
            J = V(async (...e) => {}),
            Y = E(me, oe),
            X = () => I === `ZJ2TO9InY-hover` || F === `ZJ2TO9InY`;
          return u(y, {
            id: m ?? o,
            children: u(ye, {
              animate: z,
              initial: !1,
              children: u(_e, {
                value: ge,
                children: u(k, {
                  href: b,
                  motionChild: !0,
                  nodeId: `U9ygOezcy`,
                  openInNewTab: x,
                  scopeId: `diBdjZlAZ`,
                  children: p(_.a, {
                    ...P,
                    ...se,
                    className: `${E(Y, `framer-14u9dbm`, f, ie)} framer-lohugq`,
                    "data-framer-name": `Text Link`,
                    "data-highlight": !0,
                    layoutDependency: B,
                    layoutId: `U9ygOezcy`,
                    onMouseEnter: H,
                    ref: i,
                    style: { ...d },
                    ...Q(
                      {
                        "ZJ2TO9InY-hover": { "data-framer-name": void 0 },
                        TCOyb_nl_: {
                          "data-framer-name": `Text Link - Tablet/Mobile`,
                          onMouseEnter: G,
                          onTap: W,
                        },
                        ybqOF8Bn2: { "data-framer-name": `Text Link - Active`, onMouseLeave: U },
                        ZJ2TO9InY: { "data-framer-name": `Bag`, onMouseEnter: K },
                      },
                      F,
                      I
                    ),
                    children: [
                      u(S, {
                        __fromCanvasComponent: !0,
                        children: u(a, {
                          children: u(_.p, {
                            className: `framer-styles-preset-1ud5dr1`,
                            "data-styles-preset": `J6OXVPwtV`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ANIdPmhh1-diBdjZlAZ))`,
                            },
                            children: `Label`,
                          }),
                        }),
                        className: `framer-174xm0h`,
                        fonts: [`Inter`],
                        layoutDependency: B,
                        layoutId: `SJ24rnGhe`,
                        style: {
                          "--extracted-r6o4lv": `var(--variable-reference-ANIdPmhh1-diBdjZlAZ)`,
                          "--variable-reference-ANIdPmhh1-diBdjZlAZ": C,
                        },
                        text: v,
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Q(
                          {
                            TCOyb_nl_: {
                              children: u(a, {
                                children: u(_.p, {
                                  className: `framer-styles-preset-1ud5dr1`,
                                  "data-styles-preset": `J6OXVPwtV`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ANIdPmhh1-diBdjZlAZ))`,
                                  },
                                  children: `Label`,
                                }),
                              }),
                            },
                            ZJ2TO9InY: { "data-highlight": !0, onTap: q, text: O },
                          },
                          F,
                          I
                        ),
                      }),
                      X() &&
                        p(_.div, {
                          className: `framer-lsymed`,
                          "data-framer-name": `Content`,
                          layoutDependency: B,
                          layoutId: `XCb71RFyL`,
                          children: [
                            u(A, {
                              height: 14,
                              ...Q({ ZJ2TO9InY: { y: (l?.y || 0) + 4 + 1.4 } }, F, I),
                              children: u(M, {
                                className: `framer-izz5jf-container`,
                                layoutDependency: B,
                                layoutId: `YC7tNZ6X_-container`,
                                nodeId: `YC7tNZ6X_`,
                                rendersWithMotion: !0,
                                scopeId: `diBdjZlAZ`,
                                children: u(Z, {
                                  height: `100%`,
                                  id: `YC7tNZ6X_`,
                                  layoutId: `YC7tNZ6X_`,
                                  width: `100%`,
                                  wNgb6IVkN: j,
                                  xyG0fDCYV: J,
                                }),
                              }),
                            }),
                            X() &&
                              u(S, {
                                __fromCanvasComponent: !0,
                                children: u(a, {
                                  children: u(_.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                      "--framer-font-family": `"Fragment Mono", monospace`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ANIdPmhh1-diBdjZlAZ))`,
                                      "--framer-text-transform": `inherit`,
                                    },
                                    children: `(`,
                                  }),
                                }),
                                className: `framer-vi1wqs`,
                                fonts: [`GF;Fragment Mono-regular`],
                                layoutDependency: B,
                                layoutId: `z3JfWYEvk`,
                                style: {
                                  "--extracted-r6o4lv": `var(--variable-reference-ANIdPmhh1-diBdjZlAZ)`,
                                  "--variable-reference-ANIdPmhh1-diBdjZlAZ": C,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            X() &&
                              u(S, {
                                __fromCanvasComponent: !0,
                                children: u(a, {
                                  children: u(_.p, {
                                    dir: `auto`,
                                    style: {
                                      "--font-selector": `R0Y7RnJhZ21lbnQgTW9uby1yZWd1bGFy`,
                                      "--framer-font-family": `"Fragment Mono", monospace`,
                                      "--framer-font-size": `14px`,
                                      "--framer-letter-spacing": `-0.02em`,
                                      "--framer-text-alignment": `left`,
                                      "--framer-text-color": `var(--extracted-r6o4lv, var(--variable-reference-ANIdPmhh1-diBdjZlAZ))`,
                                      "--framer-text-transform": `inherit`,
                                    },
                                    children: `)`,
                                  }),
                                }),
                                className: `framer-ns5f8m`,
                                fonts: [`GF;Fragment Mono-regular`],
                                layoutDependency: B,
                                layoutId: `t0QXny1b6`,
                                style: {
                                  "--extracted-r6o4lv": `var(--variable-reference-ANIdPmhh1-diBdjZlAZ)`,
                                  "--variable-reference-ANIdPmhh1-diBdjZlAZ": C,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                          ],
                        }),
                      u(_.div, {
                        className: `framer-88u1c`,
                        "data-framer-name": `Line`,
                        layoutDependency: B,
                        layoutId: `k1rtMSGDH`,
                        style: { backgroundColor: C },
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
          `.framer-eOx2y.framer-lohugq, .framer-eOx2y .framer-lohugq { display: block; }`,
          `.framer-eOx2y.framer-14u9dbm { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 4px 0px 4px 0px; position: relative; text-decoration: none; width: min-content; }`,
          `.framer-eOx2y .framer-174xm0h, .framer-eOx2y .framer-vi1wqs, .framer-eOx2y .framer-ns5f8m { -webkit-user-select: none; flex: none; height: auto; pointer-events: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-eOx2y .framer-lsymed { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-eOx2y .framer-izz5jf-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-eOx2y .framer-88u1c { bottom: 0px; flex: none; height: 1px; left: -60px; overflow: hidden; position: absolute; width: 53px; z-index: 1; }`,
          `.framer-eOx2y.framer-v-1419hyz .framer-88u1c, .framer-eOx2y.framer-v-1ejcrp0.hover .framer-88u1c { left: 1px; right: 0px; width: unset; }`,
          `.framer-eOx2y.framer-v-11w0pjf.framer-14u9dbm { cursor: pointer; }`,
          `.framer-eOx2y.framer-v-1ejcrp0.framer-14u9dbm { cursor: pointer; flex-direction: row; gap: 6px; padding: 4px 0px 1px 0px; }`,
          `.framer-eOx2y.framer-v-1ejcrp0 .framer-174xm0h { cursor: pointer; order: 0; }`,
          `.framer-eOx2y.framer-v-1ejcrp0 .framer-lsymed, .framer-eOx2y.framer-v-1ejcrp0 .framer-ns5f8m { order: 2; }`,
          `.framer-eOx2y.framer-v-1ejcrp0 .framer-izz5jf-container, .framer-eOx2y.framer-v-1ejcrp0 .framer-88u1c { order: 1; }`,
          `.framer-eOx2y.framer-v-1ejcrp0 .framer-vi1wqs { order: 0; }`,
          ...ie,
        ],
        `framer-eOx2y`
      )),
      ($.displayName = `Text Link`),
      ($.defaultProps = { height: 22, width: 32.5 }),
      j($, {
        variant: {
          options: [`U9ygOezcy`, `ybqOF8Bn2`, `TCOyb_nl_`, `ZJ2TO9InY`],
          optionTitles: [`Text Link`, `Text Link - Active`, `Text Link - Tablet/Mobile`, `Bag`],
          title: `Variant`,
          type: N.Enum,
        },
        UvO00kpP1: { defaultValue: `Label`, displayTextArea: !1, title: `Title`, type: N.String },
        onUvO00kpP1Change: { changes: `UvO00kpP1`, type: N.ChangeHandler },
        pN5qcoZCL: { title: `Link`, type: N.Link },
        lQ_FXk_nD: { defaultValue: !1, title: `New Tab`, type: N.Boolean },
        onlQ_FXk_nDChange: { changes: `lQ_FXk_nD`, type: N.ChangeHandler },
        ANIdPmhh1: {
          defaultValue: `var(--token-c3a55a0f-d2a0-4565-bb3a-bbd6f1087b74, rgb(255, 255, 255))`,
          title: `Color`,
          type: N.Color,
        },
        Rotj5CktJ: { title: `Click`, type: N.EventHandler },
        QLnVuY7rT: { title: `Hover`, type: N.EventHandler },
        EivEgVXC6: { title: `Hover 2`, type: N.EventHandler },
        PrPXMleLB: {
          defaultValue: `Cart`,
          displayTextArea: !1,
          title: `Cart Text`,
          type: N.String,
        },
        onPrPXMleLBChange: { changes: `PrPXMleLB`, type: N.ChangeHandler },
        xkJ1dpnu8: {
          defaultValue: `var(--token-69387b71-1810-485d-bba9-35a03cb6a98f, rgb(255, 255, 255)) /* {"name":"White"} */`,
          title: `Cart Counter Color`,
          type: N.Color,
        },
        GOwtSdU4j: { title: `Cart`, type: N.EventHandler },
      }),
      x(
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
                cssFamilyName: `Fragment Mono`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Fragment Mono`,
                url: `https://fonts.gstatic.com/s/fragmentmono/v6/4iCr6K5wfMRRjxp0DA6-2CLnN4FNh4UI_1U.woff2`,
                weight: `400`,
              },
            ],
          },
          ...de,
          ...D(ae),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([T(Z, {}, t)])) }));
  });
export { B as i, Se as n, z as r, $ as t };
//# sourceMappingURL=diBdjZlAZ.Cd3PMWbU.mjs.map
