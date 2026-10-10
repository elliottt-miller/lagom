import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  D as n,
  F as r,
  I as i,
  M as a,
  N as o,
  P as s,
  S as c,
  T as l,
  V as u,
  a as d,
  c as f,
  g as p,
  i as m,
  j as h,
  k as g,
  l as _,
  o as v,
  s as y,
  y as b,
  z as x,
} from "./react.BSDwOlon.mjs";
import { P as S, S as C, a as w, n as T, r as ee, t as E } from "./motion.CxF0nSu_.mjs";
import {
  A as D,
  At as O,
  C as k,
  D as A,
  Dt as j,
  E as M,
  Et as te,
  F as N,
  G as ne,
  H as P,
  Mt as F,
  N as I,
  O as re,
  Pt as ie,
  St as L,
  T as R,
  U as z,
  V as B,
  Y as V,
  _ as H,
  a as ae,
  b as U,
  ct as oe,
  f as W,
  ft as G,
  ht as se,
  i as K,
  k as ce,
  kt as le,
  lt as ue,
  mt as de,
  n as fe,
  o as q,
  p as pe,
  pt as me,
  tt as J,
  u as he,
  ut as ge,
  vt as _e,
  w as ve,
  wt as ye,
  x as Y,
  xt as be,
  yt as xe,
} from "./framer.qahQ4u2X.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./Bg6moUAf0.CGQMS69i.mjs";
import { a as Ee, i as De, o as Oe, r as ke } from "./shared-lib.C3NetiJi.mjs";
import {
  S as Ae,
  T as je,
  _ as Me,
  a as Ne,
  b as Pe,
  c as Fe,
  d as Ie,
  f as Le,
  g as Re,
  h as ze,
  i as Be,
  l as Ve,
  m as He,
  n as Ue,
  o as We,
  p as Ge,
  r as Ke,
  s as qe,
  t as Je,
  u as Ye,
  v as Xe,
  x as Ze,
  y as Qe,
} from "./us_cwshCV.CrnwM77I.mjs";
import { i as $e, n as et, r as tt, t as nt } from "./KRUEduuRo.CVOp9RB9.mjs";
import { i as rt, n as it, r as at, t as ot } from "./nqYznXGVD.CwEAfUBz.mjs";
import {
  a as st,
  c as ct,
  i as lt,
  n as ut,
  o as dt,
  r as ft,
  s as pt,
  t as mt,
} from "./kJFpmPtbb.CdkxtvXM.mjs";
import { i as ht, n as gt, r as _t, t as vt } from "./zfGqUZJYU.Dkhslrla.mjs";
import { n as yt, t as bt } from "./JG_j3MT2u.JUuCAjku.mjs";
import { i as xt, t as St } from "./lmAnavhxT.BYm9uwFY.mjs";
import { i as Ct, n as wt, r as Tt, t as Et } from "./BAtYGGHfj.BY5etf3l.mjs";
import { i as Dt, n as Ot, r as kt, t as At } from "./Hh_dqeJaF.BrX4P4ez.mjs";
import jt, { t as Mt } from "./qXrYgfLhZkMmJWX6gb70vtPUzy3xHxnQDmwQ2_o74AQ.B7H2UWT8.mjs";
function Nt(e) {
  let t = Le();
  t && u.shopXtools;
  let [n, r] = c.useState(null),
    [i, a] = c.useState(!0),
    [o, l] = c.useState(!1),
    [d, p] = c.useState(1),
    [m, h] = c.useState(!1),
    g = c.useRef(e.triggerImageTap);
  g.current = e.triggerImageTap;
  let [v, y] = c.useState({}),
    b = c.useRef(!1),
    x = c.useCallback(() => {
      let e = Object.entries(v).map(([e, t]) => ({ name: e, value: t }));
      return e.length > 0 ? { selectedOptions: e } : null;
    }, [v]);
  c.useEffect(() => {
    if (!t || b.current) return;
    b.current = !0;
    let n = `fc_active_variant_${e.shopifyProductID}`,
      r = () => {
        try {
          let e = sessionStorage.getItem(n);
          if (!e) return !1;
          let t = JSON.parse(e);
          if (t?.selectedOptions) return (y(t.selectedOptions), !0);
        } catch {}
        return !1;
      };
    (r() && h(!0), new URLSearchParams(u.location.search).get(`variant`));
    try {
      let t = new CustomEvent(`variant__visual__sync`, {
        detail: {
          productId: e.shopifyProductID ? `gid://shopify/Product/${e.shopifyProductID}` : void 0,
        },
      });
      document.dispatchEvent(t);
    } catch {}
    let i = setTimeout(() => {
        r() && h(!0);
      }, 0),
      a = setTimeout(() => {
        r() && h(!0);
      }, 200),
      o = setTimeout(() => {
        r() && h(!0);
      }, 600),
      s = setTimeout(() => {
        r() && h(!0);
      }, 1200),
      c = setTimeout(() => h(!0), 900);
    return () => {
      (clearTimeout(i), clearTimeout(a), clearTimeout(o), clearTimeout(s), clearTimeout(c));
    };
  }, [t, e.shopifyProductID]);
  let S = c.useCallback(
    (t, n) => {
      if (!t || !n || !t.selectedOptions || t.selectedOptions.length === 0) return !0;
      let r = (e) =>
          e == null
            ? ``
            : typeof e == `string` || typeof e == `number`
              ? String(e)
              : typeof e == `object` && `value` in e
                ? r(e.value)
                : ``,
        i = t.selectedOptions
          .map((e) => r(e))
          .filter(Boolean)
          .map((e) => e.toLowerCase()),
        a = n.toLowerCase(),
        o = i.map((e) => {
          let t = e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
          return [
            RegExp(`\\b${t}\\b`, `i`),
            RegExp(`\\(${t}\\)`, `i`),
            RegExp(`\\s${t}\\s`, `i`),
            RegExp(`^${t}\\s`, `i`),
            RegExp(`\\s${t}$`, `i`),
            RegExp(`^${t}$`, `i`),
          ].some((e) => e.test(a));
        }),
        s = !1;
      return (
        (s =
          e.FilterVariants?.filterMatch === `All`
            ? o.every((e) => e === !0)
            : o.some((e) => e === !0)),
        s
      );
    },
    [e.imageNumber, e.FilterVariants?.filterMatch]
  );
  (c.useEffect(() => {
    if (e.FilterVariants?.filterVariants === `If Active Variant` && e.image) {
      let t = (typeof e.image == `object` && e.image.alt) || ``,
        r = [n, x()].filter(Boolean),
        i = !0;
      (r.length > 0 && (i = r.some((e) => S(e, t))), a(i));
    } else a(!0);
  }, [n, v, e.FilterVariants?.filterVariants, e.FilterVariants?.filterMatch, e.image, S, x]),
    s(() => {
      if (!t) return;
      function n(t) {
        if (t.detail) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (r(t.detail), t.detail.isCompleteVariant === !0 && y({}));
        }
      }
      function i(t) {
        if (t.detail && t.detail.optionName && t.detail.value) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (y((e) => ({ ...e, [t.detail.optionName]: t.detail.value })), r(null));
        }
      }
      function a(t) {
        if (t.detail && t.detail.selectedOptions) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (y(t.detail.selectedOptions), r(null));
        }
      }
      function o(t) {
        let n = `fc_active_variant_${e.shopifyProductID}`,
          i = sessionStorage.getItem(n);
        if (i)
          try {
            let e = JSON.parse(i);
            e.selectedOptions && (y(e.selectedOptions), r(null));
          } catch {}
        else c();
      }
      function s(t) {
        t.detail && t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` && c();
      }
      function c() {
        if (!u.shopXtools?.products) return;
        let t = u.shopXtools.products.find(
          (t) => t.node.id === `gid://shopify/Product/${e.shopifyProductID}`
        );
        if (!t?.node?.variants?.edges) return;
        let n = t.node.variants.edges.find(({ node: e }) => e.availableForSale);
        if (n?.node?.selectedOptions) {
          let e = {};
          (n.node.selectedOptions.forEach((t) => {
            e[t.name] = t.value;
          }),
            y(e),
            r(null));
        }
      }
      function l(t) {
        (t.detail &&
          String(t.detail.imageNumber) === String(e.imageNumber) &&
          typeof g.current == `function` &&
          g.current(),
          t.detail && t.detail.imageNumber && p(t.detail.imageNumber));
      }
      (document.addEventListener(`product__active-variant__changed`, n),
        document.addEventListener(`variant_option_selected`, i),
        document.addEventListener(`variant__options__sync`, a),
        document.addEventListener(`variant__visual__sync`, a));
      try {
        let t = new CustomEvent(`variant__visual__sync`, {
          detail: {
            productId: e.shopifyProductID ? `gid://shopify/Product/${e.shopifyProductID}` : void 0,
          },
        });
        document.dispatchEvent(t);
      } catch {}
      return (
        document.addEventListener(`data__products-ready`, o),
        document.addEventListener(`retry-auto-select`, s),
        document.addEventListener(`variant__image__match`, l),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, n),
            document.removeEventListener(`variant_option_selected`, i),
            document.removeEventListener(`variant__options__sync`, a),
            document.removeEventListener(`variant__visual__sync`, a),
            document.removeEventListener(`data__products-ready`, o),
            document.removeEventListener(`retry-auto-select`, s),
            document.removeEventListener(`variant__image__match`, l));
        }
      );
    }, [t, e.imageNumber]));
  let C = () => {
    if (t) {
      if (e.Thumbnail?.clickAction === `Scroll Section`) {
        let t = new URL(u.location.href);
        ((t.hash = `image-${e.imageNumber}`), u.history.pushState(null, ``, t.toString()));
        let n = document.getElementById(`image-${e.imageNumber}`);
        n && n.scrollIntoView({ behavior: `smooth` });
      } else if (e.Thumbnail?.clickAction === `Tap Event`) {
        typeof g.current == `function` && g.current();
        let t = new CustomEvent(`variant__image__match`, {
          detail: {
            imageNumber: e.imageNumber,
            shopifyProductID: e.shopifyProductID
              ? `gid://shopify/Product/${e.shopifyProductID}`
              : void 0,
          },
        });
        document.dispatchEvent(t);
        let n = new CustomEvent(`image__number__selected`, {
          detail: { imageNumber: e.imageNumber },
        });
        document.dispatchEvent(n);
      }
    }
  };
  if (!t) return f(`div`, { style: { width: `100%`, height: `100%` } });
  let w = e.Thumbnail?.thumbnailMode === `Yes`,
    T = w && d === e.imageNumber,
    ee = w
      ? T
        ? e.Thumbnail?.Active?.activeBorder
        : o
          ? e.Thumbnail?.Hover?.hoverBorder
          : e.Style?.inactiveBorder
      : e.Style?.inactiveBorder,
    E = Number(ee?.borderTopWidth ?? 0),
    D = Number(ee?.borderRightWidth ?? 0),
    O = Number(ee?.borderBottomWidth ?? 0),
    k = Number(ee?.borderLeftWidth ?? 0),
    A = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusTopLeft ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    j = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusTopRight ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    M = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusBottomRight ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    te = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusBottomLeft ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    N = `${A}px ${j}px ${M}px ${te}px`,
    ne = 1;
  ne = w
    ? T
      ? (e.Thumbnail?.Active?.activeScale ?? e.Style?.inactiveScale ?? 1)
      : o
        ? (e.Thumbnail?.Hover?.hoverScale ?? e.Style?.inactiveScale ?? 1)
        : (e.Style?.inactiveScale ?? 1)
    : (e.Style?.inactiveScale ?? 1);
  let P = 1.25,
    F = Math.max(0, A - Math.max(E, k)),
    I = Math.max(0, j - Math.max(E, D)),
    re = Math.max(0, M - Math.max(O, D)),
    ie = Math.max(0, te - Math.max(O, k)),
    L = Math.max(ne, 0.001),
    R = P + 0.25 * Math.max(E, k),
    z = P + 0.25 * Math.max(E, D),
    B = P + 0.25 * Math.max(O, D),
    V = P + 0.25 * Math.max(O, k),
    H = `${Math.max(0, (F - R) / L)}px ${Math.max(0, (I - z) / L)}px ${Math.max(0, (re - B) / L)}px ${Math.max(0, (ie - V) / L)}px`;
  return f(`div`, {
    style: {
      height:
        i && (e.Style?.size === `Standard` || e.Style?.heightMode === `Fill`) ? `100%` : `auto`,
      padding: i
        ? e.Style?.outsidePaddingPerSide
          ? `${e.Style?.outsidePaddingTop}px ${e.Style?.outsidePaddingRight}px ${e.Style?.outsidePaddingBottom}px ${e.Style?.outsidePaddingLeft}px`
          : e.Style?.outsidePadding
        : `0px`,
      opacity:
        e.Thumbnail?.thumbnailMode === `Yes`
          ? d === e.imageNumber
            ? (e.Thumbnail?.Active?.activeOpacity ?? e.Style?.inactiveOpacity ?? 1)
            : o
              ? (e.Thumbnail?.Hover?.hoverOpacity ?? e.Style?.inactiveOpacity ?? 1)
              : (e.Style?.inactiveOpacity ?? 1)
          : (e.Style?.inactiveOpacity ?? 1),
      transition:
        e.Thumbnail?.thumbnailMode === `Yes` && e.Thumbnail?.transition
          ? `opacity ${e.Thumbnail.transition.duration || 0.3}s ${e.Thumbnail.transition.ease || `ease-in-out`}`
          : `none`,
    },
    children: f(`div`, {
      onClick: e.Thumbnail?.clickAction === `None` ? void 0 : C,
      onMouseEnter: e.Thumbnail?.thumbnailMode === `Yes` ? () => l(!0) : void 0,
      onMouseLeave: e.Thumbnail?.thumbnailMode === `Yes` ? () => l(!1) : void 0,
      style: {
        width: i
          ? e.Style?.size === `Standard` || e.Style?.widthMode === `Fill`
            ? `100%`
            : e.Style?.widthMode === `Fit`
              ? `auto`
              : `${e.Style?.thumbnailWidth || 64}px`
          : `0px`,
        height: i
          ? e.Style?.size === `Standard` || e.Style?.heightMode === `Fill`
            ? `100%`
            : e.Style?.heightMode === `Fit`
              ? `auto`
              : `${e.Style?.thumbnailHeight || 64}px`
          : `0px`,
        cursor: e.Thumbnail?.clickAction === `None` ? `default` : `pointer`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        backgroundColor:
          e.image && e.Style?.type === `Fill`
            ? `transparent`
            : e.Thumbnail?.thumbnailMode === `Yes`
              ? d === e.imageNumber
                ? e.Thumbnail?.Active?.activeBackgroundColor ||
                  e.Style?.inactiveBackgroundColor ||
                  `transparent`
                : o
                  ? e.Thumbnail?.Hover?.hoverBackgroundColor ||
                    e.Style?.inactiveBackgroundColor ||
                    `transparent`
                  : e.Style?.inactiveBackgroundColor || (e.image ? `transparent` : `#f5f5f5`)
              : e.Style?.inactiveBackgroundColor || (e.image ? `transparent` : `#f5f5f5`),
        ...(i
          ? e.Thumbnail?.thumbnailMode === `Yes`
            ? d === e.imageNumber
              ? e.Thumbnail?.Active?.activeBorder
              : o
                ? e.Thumbnail?.Hover?.hoverBorder
                : e.Style?.inactiveBorder
            : e.Style?.inactiveBorder || {}
          : {
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderStyle: `solid`,
              borderColor: `transparent`,
            }),
        borderRadius: N,
        padding: `0px`,
        overflow: `hidden`,
        backgroundClip: `padding-box`,
      },
      children:
        e.image && i
          ? f(`img`, {
              src: typeof e.image == `string` ? e.image : e.image.src,
              alt: typeof e.image == `string` ? `` : e.image.alt,
              style: {
                width: `100%`,
                height: `100%`,
                objectFit: e.Style?.type === `Fill` ? `cover` : `contain`,
                borderRadius: H,
                transform: `scale(${ne})`,
                transition:
                  e.Thumbnail?.thumbnailMode === `Yes` && e.Thumbnail?.transition
                    ? `transform ${e.Thumbnail.transition.duration || 0.3}s ${e.Thumbnail.transition.ease || `ease-in-out`}`
                    : `none`,
              },
            })
          : u !== void 0 &&
            u.location.hostname.includes(`framercanvas.com`) &&
            _(`svg`, {
              width: `40%`,
              height: `40%`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `#9e9e9e`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: [
                f(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, ry: `2` }),
                f(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
                f(`polyline`, { points: `21 15 16 10 5 21` }),
              ],
            }),
    }),
  });
}
var Pt = e(() => {
  (x(),
    v(),
    l(),
    V(),
    Ie(),
    (Nt.defaultProps = {
      image: ``,
      imageNumber: 1,
      type: `Fill`,
      filterVariants: `No`,
      filterMatch: `Any`,
      thumbnailHeight: 64,
      thumbnailWidth: 64,
      backgroundColor: `#f5f5f5`,
      borderRadius: 0,
      padding: 0,
      outsidePadding: 0,
    }),
    D(Nt, {
      shopifyProductID: { type: q.String, title: `Product ID` },
      image: { type: q.ResponsiveImage, title: `Image`, description: `Connect to CMS` },
      imageNumber: {
        type: q.Number,
        title: `Image Number`,
        defaultValue: 1,
        min: 1,
        max: 250,
        step: 1,
        displayStepper: !0,
      },
      FilterVariants: {
        type: q.Object,
        title: `Visibility`,
        controls: {
          filterVariants: {
            type: q.Enum,
            title: `Visibility`,
            options: [`Always`, `If Active Variant`],
            defaultValue: `Always`,
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
            description: `*If Active Variant:* Hide this image if a variant is selected and the value is not found in the image’s Alt Text in CMS (from Shopify).`,
          },
          filterMatch: {
            type: q.Enum,
            title: `Match Rule`,
            options: [`Any`, `All`],
            defaultValue: `Any`,
            displaySegmentedControl: !0,
            description: `*Example:* If selected variant = 'Red' and 'Small'. 
 
 *Any* → 'T Shirt (Red)' or 'T Shirt (Small)'shows. 
 
 *All* → Only 'T Shirt (Red, Small)' shows.`,
            hidden: ({ filterVariants: e }) => e === `Always`,
          },
        },
      },
      Thumbnail: {
        type: q.Object,
        title: `Thumbnail`,
        controls: {
          thumbnailMode: {
            type: q.Enum,
            title: `Thumbnail`,
            options: [`Yes`, `No`],
            defaultValue: `Yes`,
            displaySegmentedControl: !0,
          },
          clickAction: {
            type: q.Enum,
            title: `On Click`,
            options: [`Tap Event`, `Scroll Section`, `None`],
            defaultValue: `Tap Event`,
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
          Hover: {
            type: q.Object,
            title: `Hover`,
            hidden: ({ thumbnailMode: e }) => e === `No`,
            controls: {
              hoverBackgroundColor: { type: q.Color, title: `BG`, defaultValue: `#f5f5f5` },
              hoverBorder: {
                type: q.Border,
                title: `Border`,
                defaultValue: {
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderStyle: `solid`,
                  borderColor: `transparent`,
                },
              },
              hoverOpacity: {
                type: q.Number,
                title: `Opacity`,
                defaultValue: 1,
                min: 0,
                max: 1,
                step: 0.01,
                displayStepper: !0,
              },
              hoverScale: {
                type: q.Number,
                title: `Scale`,
                defaultValue: 1,
                min: 0.1,
                max: 2,
                step: 0.01,
                displayStepper: !0,
              },
            },
          },
          Active: {
            type: q.Object,
            title: `Active`,
            hidden: ({ thumbnailMode: e }) => e === `No`,
            controls: {
              activeBackgroundColor: { type: q.Color, title: `BG`, defaultValue: `#f5f5f5` },
              activeBorder: {
                type: q.Border,
                title: `Border`,
                defaultValue: {
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  borderBottomWidth: 0,
                  borderLeftWidth: 0,
                  borderStyle: `solid`,
                  borderColor: `transparent`,
                },
              },
              activeOpacity: {
                type: q.Number,
                title: `Opacity`,
                defaultValue: 1,
                min: 0,
                max: 1,
                step: 0.01,
                displayStepper: !0,
              },
              activeScale: {
                type: q.Number,
                title: `Scale`,
                defaultValue: 1,
                min: 0.1,
                max: 2,
                step: 0.01,
                displayStepper: !0,
              },
            },
          },
          transition: {
            type: q.Transition,
            title: `Transition`,
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
        },
      },
      Style: {
        type: q.Object,
        title: `Style`,
        controls: {
          type: {
            type: q.Enum,
            title: `Image`,
            options: [`Fill`, `Fit`],
            defaultValue: `Fill`,
            displaySegmentedControl: !0,
          },
          size: {
            type: q.Enum,
            title: `Size`,
            options: [`Standard`, `Advanced`],
            defaultValue: `Standard`,
            displaySegmentedControl: !0,
            segmentedControlDirection: `vertical`,
            description: `Use Advanced when filtering active variants.`,
          },
          widthMode: {
            type: q.Enum,
            title: `Width`,
            options: [`Fill`, `Fit`, `Fixed`],
            defaultValue: `Fixed`,
            hidden: ({ size: e }) => e === `Standard`,
          },
          thumbnailWidth: {
            type: q.Number,
            title: `Width`,
            defaultValue: 64,
            min: 4,
            step: 1,
            unit: `px`,
            displayStepper: !0,
            description: `Set your component Width to Fit.`,
            hidden: ({ size: e, widthMode: t }) => e === `Standard` || t === `Fill` || t === `Fit`,
          },
          heightMode: {
            type: q.Enum,
            title: `Height`,
            options: [`Fill`, `Fit`, `Fixed`],
            defaultValue: `Fixed`,
            hidden: ({ size: e }) => e === `Standard`,
          },
          thumbnailHeight: {
            type: q.Number,
            title: `Height`,
            defaultValue: 64,
            min: 4,
            step: 1,
            unit: `px`,
            displayStepper: !0,
            description: `Set your component Height to Fit.`,
            hidden: ({ size: e, heightMode: t }) => e === `Standard` || t === `Fill` || t === `Fit`,
          },
          outsidePadding: {
            type: q.FusedNumber,
            title: `Padding`,
            defaultValue: 0,
            toggleKey: `outsidePaddingPerSide`,
            toggleTitles: [`All`, `Sides`],
            valueKeys: [
              `outsidePaddingTop`,
              `outsidePaddingRight`,
              `outsidePaddingBottom`,
              `outsidePaddingLeft`,
            ],
            valueLabels: [`T`, `R`, `B`, `L`],
            min: 0,
            description: `Use isolated padding instead of Gaps when filtering active variants.`,
          },
          borderRadius: {
            type: q.FusedNumber,
            title: `Radius`,
            defaultValue: 0,
            toggleKey: `radiusPerCorner`,
            toggleTitles: [`All`, `Corners`],
            valueKeys: [`radiusTopLeft`, `radiusTopRight`, `radiusBottomRight`, `radiusBottomLeft`],
            valueLabels: [`TL`, `TR`, `BR`, `BL`],
            min: 0,
          },
          inactiveBackgroundColor: {
            type: q.Color,
            title: `BG`,
            defaultValue: `#f5f5f5`,
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
          inactiveBorder: {
            type: q.Border,
            title: `Border`,
            defaultValue: {
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderBottomWidth: 0,
              borderLeftWidth: 0,
              borderStyle: `solid`,
              borderColor: `transparent`,
            },
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
          inactiveOpacity: {
            type: q.Number,
            title: `Opacity`,
            defaultValue: 1,
            min: 0,
            max: 1,
            step: 0.01,
            displayStepper: !0,
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
          inactiveScale: {
            type: q.Number,
            title: `Scale`,
            defaultValue: 1,
            min: 0.1,
            max: 2,
            step: 0.01,
            displayStepper: !0,
            hidden: ({ thumbnailMode: e }) => e === `No`,
          },
        },
      },
      triggerImageTap: { type: q.EventHandler, title: `triggerImageTap` },
    }));
});
function Ft(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  X,
  Jt = e(() => {
    (v(),
      V(),
      E(),
      l(),
      Pt(),
      (It = B(Nt)),
      (Lt = { etSmyKkW2: { hover: !0 } }),
      (Rt = [`etSmyKkW2`, `jsvh0G5OD`]),
      (zt = `framer-MVidO`),
      (Bt = { etSmyKkW2: `framer-v-1ni4fg3`, jsvh0G5OD: `framer-v-dmgnef` }),
      (Vt = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ht = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Ut = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (Wt = C.create(r)),
      (Gt = { Active: `jsvh0G5OD`, Inactive: `etSmyKkW2` }),
      (Kt = ({
        height: e,
        id: t,
        image: n,
        imageNumber: r,
        triggerImageTap: i,
        width: a,
        ...o
      }) => ({
        ...o,
        FivUXEobF: i ?? o.FivUXEobF,
        k4H1827Jh: n ?? o.k4H1827Jh,
        KrTFB4kFC: r ?? o.KrTFB4kFC ?? 1,
        variant: Gt[o.variant] ?? o.variant ?? `etSmyKkW2`,
      })),
      (qt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = j(
        p(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: o } = _e();
          ue();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              k4H1827Jh: d,
              FivUXEobF: p,
              KrTFB4kFC: m,
              ...h
            } = Kt(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = te({
              cycleOrder: Rt,
              defaultVariant: `etSmyKkW2`,
              enabledGestures: Lt,
              ref: r,
              variant: u,
              variantClassNames: Bt,
            }),
            O = qt(e, D),
            { activeVariantCallback: k, delay: j } = oe(_),
            M = k(async (...e) => {
              if (p && (await p(...e)) === !1) return !1;
            }),
            N = I(zt);
          return f(ee, {
            id: l ?? i,
            children: f(Wt, {
              animate: D,
              initial: !1,
              children: f(Ut, {
                value: Vt,
                children: f(C.div, {
                  ...h,
                  ...x,
                  className: I(N, `framer-1ni4fg3`, c, v),
                  "data-border": !0,
                  "data-framer-name": `Inactive`,
                  layoutDependency: O,
                  layoutId: `etSmyKkW2`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `2px`,
                    "--border-color": `var(--token-f1b8eb01-83ac-4f1a-aa3c-b07c7d0c9e66, rgb(255, 255, 255))`,
                    "--border-left-width": `2px`,
                    "--border-right-width": `2px`,
                    "--border-style": `solid`,
                    "--border-top-width": `2px`,
                    backgroundColor: `var(--token-a4304d8d-9a8f-4745-bb81-e6b535b3d359, rgb(242, 242, 242))`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...s,
                  },
                  variants: {
                    jsvh0G5OD: {
                      "--border-color": `var(--token-e27ec8d7-0a24-42ca-9cf5-e8b5eaf0f0d9, rgb(0, 0, 0))`,
                    },
                  },
                  ...Ft(
                    {
                      "etSmyKkW2-hover": { "data-framer-name": void 0 },
                      jsvh0G5OD: { "data-framer-name": `Active` },
                    },
                    _,
                    S
                  ),
                  children: f(K, {
                    children: f(A, {
                      className: `framer-1wkkaor-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: O,
                      layoutId: `q060gQ5Eu-container`,
                      nodeId: `q060gQ5Eu`,
                      rendersWithMotion: !0,
                      scopeId: `Qm2kdxz25`,
                      children: f(Nt, {
                        FilterVariants: { filterMatch: `Any`, filterVariants: `Always` },
                        height: `100%`,
                        id: `q060gQ5Eu`,
                        image: Ht(d),
                        imageNumber: m,
                        layoutId: `q060gQ5Eu`,
                        shopifyProductID: ``,
                        Style: {
                          borderRadius: 0,
                          heightMode: `Fixed`,
                          inactiveBackgroundColor: `rgb(245, 245, 245)`,
                          inactiveBorder: {
                            borderBottomWidth: 0,
                            borderColor: `rgba(0, 0, 0, 0)`,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderStyle: `solid`,
                            borderTopWidth: 0,
                          },
                          inactiveOpacity: 1,
                          inactiveScale: 1,
                          outsidePadding: 0,
                          outsidePaddingBottom: 0,
                          outsidePaddingLeft: 0,
                          outsidePaddingPerSide: !1,
                          outsidePaddingRight: 0,
                          outsidePaddingTop: 0,
                          radiusBottomLeft: 0,
                          radiusBottomRight: 0,
                          radiusPerCorner: !1,
                          radiusTopLeft: 0,
                          radiusTopRight: 0,
                          size: `Standard`,
                          thumbnailHeight: 64,
                          thumbnailWidth: 64,
                          type: `Fill`,
                          widthMode: `Fixed`,
                        },
                        style: { height: `100%`, width: `100%` },
                        Thumbnail: {
                          Active: {
                            activeBackgroundColor: `rgb(245, 245, 245)`,
                            activeBorder: {
                              borderBottomWidth: 0,
                              borderColor: `rgba(0, 0, 0, 0)`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            activeOpacity: 1,
                            activeScale: 1,
                          },
                          clickAction: `Tap Event`,
                          Hover: {
                            hoverBackgroundColor: `rgb(245, 245, 245)`,
                            hoverBorder: {
                              borderBottomWidth: 0,
                              borderColor: `rgba(0, 0, 0, 0)`,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderStyle: `solid`,
                              borderTopWidth: 0,
                            },
                            hoverOpacity: 1,
                            hoverScale: 1,
                          },
                          thumbnailMode: `Yes`,
                          transition: {
                            damping: 60,
                            delay: 0,
                            mass: 1,
                            stiffness: 500,
                            type: `spring`,
                          },
                        },
                        triggerImageTap: M,
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
          `.framer-MVidO.framer-cwrkxh, .framer-MVidO .framer-cwrkxh { display: block; }`,
          `.framer-MVidO.framer-1ni4fg3 { cursor: pointer; height: 80px; overflow: hidden; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-MVidO .framer-1wkkaor-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
          `.framer-MVidO.framer-v-dmgnef.framer-1ni4fg3 { aspect-ratio: 1 / 1; cursor: unset; height: var(--framer-aspect-ratio-supported, 80px); }`,
          `.framer-MVidO.framer-v-1ni4fg3.hover.framer-1ni4fg3 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 80px); }`,
          `.framer-MVidO[data-border="true"]::after, .framer-MVidO [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-MVidO`
      )),
      (X.displayName = `FC Thumbnail`),
      (X.defaultProps = { height: 80, width: 80 }),
      D(X, {
        variant: {
          options: [`etSmyKkW2`, `jsvh0G5OD`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: q.Enum,
        },
        k4H1827Jh: { title: `Image`, type: q.ResponsiveImage },
        FivUXEobF: { title: `triggerImageTap`, type: q.EventHandler },
        KrTFB4kFC: {
          defaultValue: 1,
          displayStepper: !0,
          max: 100,
          min: 1,
          step: 1,
          title: `Image Number`,
          type: q.Number,
        },
      }),
      ce(X, [{ explicitInter: !0, fonts: [] }, ...It], { supportsExplicitInterCodegen: !0 }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yt,
  Xt,
  Zt,
  Qt,
  $t,
  en,
  tn,
  nn,
  Q,
  $,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn = e(() => {
    (v(),
      V(),
      E(),
      l(),
      Jt(),
      (Yt = B(X)),
      (Xt = le(C.div)),
      (Zt = [
        `kWPFv_ZEj`,
        `KRehx8tz3`,
        `JG6MTeZSX`,
        `FJs2xfJOP`,
        `YIci6U3u0`,
        `VBtOs_D1X`,
        `A1T6zA6AZ`,
        `RnYY_5TS1`,
        `x_rBZff4q`,
        `P7c3Ld3Xi`,
        `BqojBbZ0w`,
        `xQbI5Y__Z`,
        `jjKG_Z_Z8`,
        `aDyYCZsOE`,
        `BnXzMMEUh`,
        `vcmxfQozu`,
      ]),
      (Qt = `framer-2aD5r`),
      ($t = {
        A1T6zA6AZ: `framer-v-q2gj7z`,
        aDyYCZsOE: `framer-v-1r04ifp`,
        BnXzMMEUh: `framer-v-1ijdu1k`,
        BqojBbZ0w: `framer-v-gqretx`,
        FJs2xfJOP: `framer-v-sfwegu`,
        JG6MTeZSX: `framer-v-tgvbtd`,
        jjKG_Z_Z8: `framer-v-162g2rc`,
        KRehx8tz3: `framer-v-dfn264`,
        kWPFv_ZEj: `framer-v-jejado`,
        P7c3Ld3Xi: `framer-v-ros7lk`,
        RnYY_5TS1: `framer-v-57b0wb`,
        VBtOs_D1X: `framer-v-1nu1xml`,
        vcmxfQozu: `framer-v-1v0fvxs`,
        x_rBZff4q: `framer-v-f1lovz`,
        xQbI5Y__Z: `framer-v-1kic0a6`,
        YIci6U3u0: `framer-v-1n2tlu`,
      }),
      (en = { damping: 64, delay: 0, mass: 2, stiffness: 250, type: `spring` }),
      (tn = (e) => !e),
      (nn = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      ($ = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (rn = (e, t) => `translateY(-50%) ${t}`),
      (an = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (on = {
        1: `kWPFv_ZEj`,
        10: `P7c3Ld3Xi`,
        11: `BqojBbZ0w`,
        12: `xQbI5Y__Z`,
        13: `jjKG_Z_Z8`,
        14: `aDyYCZsOE`,
        15: `BnXzMMEUh`,
        16: `vcmxfQozu`,
        2: `KRehx8tz3`,
        3: `JG6MTeZSX`,
        4: `FJs2xfJOP`,
        5: `YIci6U3u0`,
        6: `VBtOs_D1X`,
        7: `A1T6zA6AZ`,
        8: `RnYY_5TS1`,
        9: `x_rBZff4q`,
      }),
      (sn = C.create(r)),
      (cn = ({
        height: e,
        id: t,
        image1: n,
        image10: r,
        image11: i,
        image12: a,
        image13: o,
        image14: s,
        image15: c,
        image16: l,
        image2: u,
        image3: d,
        image4: f,
        image5: p,
        image6: m,
        image7: h,
        image8: g,
        image9: _,
        phone: v,
        width: y,
        ...b
      }) => ({
        ...b,
        BxrZjnsRx: s ?? b.BxrZjnsRx,
        E_YyIj1Fq: n ?? b.E_YyIj1Fq,
        EGr7oOYYz: m ?? b.EGr7oOYYz,
        GSvdbC9PE: a ?? b.GSvdbC9PE,
        Ij0s1WbYG: i ?? b.Ij0s1WbYG,
        L_htVpkkW: c ?? b.L_htVpkkW,
        L3lHBq7ad: f ?? b.L3lHBq7ad,
        L75eUgVoI: h ?? b.L75eUgVoI,
        LPo6c9k2x: u ?? b.LPo6c9k2x,
        Lv0pcL2PA: g ?? b.Lv0pcL2PA,
        NYnCWZ4H3: _ ?? b.NYnCWZ4H3,
        pyPwi9F3j: l ?? b.pyPwi9F3j,
        t2OoN8jbE: o ?? b.t2OoN8jbE,
        TncXZgqPB: r ?? b.TncXZgqPB,
        variant: on[b.variant] ?? b.variant ?? `kWPFv_ZEj`,
        XbXpWCKKc: v ?? b.XbXpWCKKc ?? !0,
        YjWpMatn8: p ?? b.YjWpMatn8,
        zw0_cPFar: d ?? b.zw0_cPFar,
      })),
      (ln = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (un = j(
        p(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: o } = _e(),
            s = ue(),
            {
              style: c,
              className: l,
              layoutId: u,
              variant: d,
              XbXpWCKKc: p,
              E_YyIj1Fq: m,
              LPo6c9k2x: h,
              zw0_cPFar: v,
              L3lHBq7ad: y,
              YjWpMatn8: x,
              EGr7oOYYz: S,
              L75eUgVoI: w,
              Lv0pcL2PA: T,
              NYnCWZ4H3: E,
              TncXZgqPB: D,
              Ij0s1WbYG: O,
              GSvdbC9PE: k,
              t2OoN8jbE: j,
              BxrZjnsRx: M,
              L_htVpkkW: N,
              pyPwi9F3j: ne,
              ...P
            } = cn(e),
            {
              baseVariant: F,
              classNames: re,
              clearLoadingGesture: ie,
              gestureHandlers: L,
              gestureVariant: R,
              isLoading: B,
              setGestureState: V,
              setVariant: H,
              variants: ae,
            } = te({
              cycleOrder: Zt,
              defaultVariant: `kWPFv_ZEj`,
              ref: r,
              variant: d,
              variantClassNames: $t,
            }),
            U = ln(e, ae),
            { activeVariantCallback: G, delay: se } = oe(F),
            ce = G(async (...e) => {
              H(`kWPFv_ZEj`);
            }),
            le = G(async (...e) => {
              H(`KRehx8tz3`);
            }),
            de = G(async (...e) => {
              H(`JG6MTeZSX`);
            }),
            fe = G(async (...e) => {
              H(`FJs2xfJOP`);
            }),
            q = G(async (...e) => {
              H(`YIci6U3u0`);
            }),
            pe = G(async (...e) => {
              H(`VBtOs_D1X`);
            }),
            me = G(async (...e) => {
              H(`A1T6zA6AZ`);
            }),
            J = G(async (...e) => {
              H(`RnYY_5TS1`);
            }),
            he = G(async (...e) => {
              H(`x_rBZff4q`);
            }),
            ge = G(async (...e) => {
              H(`P7c3Ld3Xi`);
            }),
            ve = G(async (...e) => {
              H(`BqojBbZ0w`);
            }),
            ye = G(async (...e) => {
              H(`xQbI5Y__Z`);
            }),
            Y = G(async (...e) => {
              H(`jjKG_Z_Z8`);
            }),
            be = G(async (...e) => {
              H(`aDyYCZsOE`);
            }),
            xe = G(async (...e) => {
              H(`BnXzMMEUh`);
            }),
            Se = G(async (...e) => {
              H(`vcmxfQozu`);
            }),
            Ce = I(Qt),
            we = tn(p),
            Te = nn(h),
            Ee = nn(v),
            De = nn(y),
            Oe = nn(x),
            ke = nn(S),
            Ae = nn(w),
            je = nn(T),
            Me = nn(E),
            Ne = nn(D),
            Pe = nn(O),
            Fe = nn(k),
            Ie = nn(j),
            Le = nn(M),
            Re = nn(N),
            ze = nn(ne);
          return f(ee, {
            id: u ?? i,
            children: f(sn, {
              animate: ae,
              initial: !1,
              children: f(an, {
                value: en,
                children: _(C.div, {
                  ...P,
                  ...L,
                  className: I(Ce, `framer-jejado`, l, re),
                  "data-framer-name": `1`,
                  layoutDependency: U,
                  layoutId: `kWPFv_ZEj`,
                  ref: r,
                  style: { ...c },
                  ...Z(
                    {
                      A1T6zA6AZ: { "data-framer-name": `7` },
                      aDyYCZsOE: { "data-framer-name": `14` },
                      BnXzMMEUh: { "data-framer-name": `15` },
                      BqojBbZ0w: { "data-framer-name": `11` },
                      FJs2xfJOP: { "data-framer-name": `4` },
                      JG6MTeZSX: { "data-framer-name": `3` },
                      jjKG_Z_Z8: { "data-framer-name": `13` },
                      KRehx8tz3: { "data-framer-name": `2` },
                      P7c3Ld3Xi: { "data-framer-name": `10` },
                      RnYY_5TS1: { "data-framer-name": `8` },
                      VBtOs_D1X: { "data-framer-name": `6` },
                      vcmxfQozu: { "data-framer-name": `16` },
                      x_rBZff4q: { "data-framer-name": `9` },
                      xQbI5Y__Z: { "data-framer-name": `12` },
                      YIci6U3u0: { "data-framer-name": `5` },
                    },
                    F,
                    R
                  ),
                  children: [
                    we !== !1 &&
                      _(C.div, {
                        className: `framer-1g8938r`,
                        "data-framer-name": `desktop`,
                        layoutDependency: U,
                        layoutId: `NymzJWpmJ`,
                        children: [
                          Te !== !1 &&
                            f(C.div, {
                              className: `framer-1gkwa4o`,
                              "data-framer-name": `thumbnails-container`,
                              layoutDependency: U,
                              layoutId: `AjUJ6gBSm`,
                              children: _(C.div, {
                                className: `framer-1pizpc4`,
                                "data-framer-name": `thumbnails`,
                                layoutDependency: U,
                                layoutId: `qQYvZsosA`,
                                children: [
                                  f(K, {
                                    height: 72,
                                    width: `72px`,
                                    y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0,
                                    children: f(A, {
                                      className: `framer-5am78-container`,
                                      "data-framer-name": `1`,
                                      isModuleExternal: !0,
                                      layoutDependency: U,
                                      layoutId: `KWgIStQu0-container`,
                                      name: `1`,
                                      nodeId: `KWgIStQu0`,
                                      rendersWithMotion: !0,
                                      scopeId: `cHylrdLbG`,
                                      children: f(X, {
                                        FivUXEobF: ce,
                                        height: `100%`,
                                        id: `KWgIStQu0`,
                                        k4H1827Jh: Q(m),
                                        KrTFB4kFC: 1,
                                        layoutId: `KWgIStQu0`,
                                        name: `1`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`jsvh0G5OD`),
                                        width: `100%`,
                                        ...Z(
                                          {
                                            A1T6zA6AZ: { variant: $(`etSmyKkW2`) },
                                            aDyYCZsOE: { variant: $(`etSmyKkW2`) },
                                            BnXzMMEUh: { variant: $(`etSmyKkW2`) },
                                            BqojBbZ0w: { variant: $(`etSmyKkW2`) },
                                            FJs2xfJOP: { variant: $(`etSmyKkW2`) },
                                            JG6MTeZSX: { variant: $(`etSmyKkW2`) },
                                            jjKG_Z_Z8: { variant: $(`etSmyKkW2`) },
                                            KRehx8tz3: { variant: $(`etSmyKkW2`) },
                                            P7c3Ld3Xi: { variant: $(`etSmyKkW2`) },
                                            RnYY_5TS1: { variant: $(`etSmyKkW2`) },
                                            VBtOs_D1X: { variant: $(`etSmyKkW2`) },
                                            vcmxfQozu: { variant: $(`etSmyKkW2`) },
                                            x_rBZff4q: { variant: $(`etSmyKkW2`) },
                                            xQbI5Y__Z: { variant: $(`etSmyKkW2`) },
                                            YIci6U3u0: { variant: $(`etSmyKkW2`) },
                                          },
                                          F,
                                          R
                                        ),
                                      }),
                                    }),
                                  }),
                                  Te !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-1fo9uam-container`,
                                        "data-framer-name": `2`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `UHWPinlIR-container`,
                                        name: `2`,
                                        nodeId: `UHWPinlIR`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: le,
                                          height: `100%`,
                                          id: `UHWPinlIR`,
                                          k4H1827Jh: Q(h),
                                          KrTFB4kFC: 2,
                                          layoutId: `UHWPinlIR`,
                                          name: `2`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ KRehx8tz3: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ee !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-4d6zye-container`,
                                        "data-framer-name": `3`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `zLP47ZL_j-container`,
                                        name: `3`,
                                        nodeId: `zLP47ZL_j`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: de,
                                          height: `100%`,
                                          id: `zLP47ZL_j`,
                                          k4H1827Jh: Q(v),
                                          KrTFB4kFC: 3,
                                          layoutId: `zLP47ZL_j`,
                                          name: `3`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ JG6MTeZSX: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  De !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-16yyk02-container`,
                                        "data-framer-name": `4`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `eV6ysrAzi-container`,
                                        name: `4`,
                                        nodeId: `eV6ysrAzi`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: fe,
                                          height: `100%`,
                                          id: `eV6ysrAzi`,
                                          k4H1827Jh: Q(y),
                                          KrTFB4kFC: 4,
                                          layoutId: `eV6ysrAzi`,
                                          name: `4`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ FJs2xfJOP: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Oe !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-1dbuehd-container`,
                                        "data-framer-name": `5`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `RtfyJwdA5-container`,
                                        name: `5`,
                                        nodeId: `RtfyJwdA5`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: q,
                                          height: `100%`,
                                          id: `RtfyJwdA5`,
                                          k4H1827Jh: Q(x),
                                          KrTFB4kFC: 5,
                                          layoutId: `RtfyJwdA5`,
                                          name: `5`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ YIci6U3u0: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  ke !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-hxyfwk-container`,
                                        "data-framer-name": `6`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `IUcNyjXZR-container`,
                                        name: `6`,
                                        nodeId: `IUcNyjXZR`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: pe,
                                          height: `100%`,
                                          id: `IUcNyjXZR`,
                                          k4H1827Jh: Q(S),
                                          KrTFB4kFC: 6,
                                          layoutId: `IUcNyjXZR`,
                                          name: `6`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ VBtOs_D1X: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ae !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-7333y0-container`,
                                        "data-framer-name": `7`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `yFgyAIvJ5-container`,
                                        name: `7`,
                                        nodeId: `yFgyAIvJ5`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: me,
                                          height: `100%`,
                                          id: `yFgyAIvJ5`,
                                          k4H1827Jh: Q(w),
                                          KrTFB4kFC: 7,
                                          layoutId: `yFgyAIvJ5`,
                                          name: `7`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ A1T6zA6AZ: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  je !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-1gdlwqz-container`,
                                        "data-framer-name": `8`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `tmO4OehLr-container`,
                                        name: `8`,
                                        nodeId: `tmO4OehLr`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: J,
                                          height: `100%`,
                                          id: `tmO4OehLr`,
                                          k4H1827Jh: Q(T),
                                          KrTFB4kFC: 8,
                                          layoutId: `tmO4OehLr`,
                                          name: `8`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ RnYY_5TS1: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Me !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-weegt-container`,
                                        "data-framer-name": `9`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `SX2EUlF3q-container`,
                                        name: `9`,
                                        nodeId: `SX2EUlF3q`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: he,
                                          height: `100%`,
                                          id: `SX2EUlF3q`,
                                          k4H1827Jh: Q(E),
                                          KrTFB4kFC: 9,
                                          layoutId: `SX2EUlF3q`,
                                          name: `9`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ x_rBZff4q: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ne !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-lseg68-container`,
                                        "data-framer-name": `10`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `IYGNk8iUs-container`,
                                        name: `10`,
                                        nodeId: `IYGNk8iUs`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ge,
                                          height: `100%`,
                                          id: `IYGNk8iUs`,
                                          k4H1827Jh: Q(D),
                                          KrTFB4kFC: 10,
                                          layoutId: `IYGNk8iUs`,
                                          name: `10`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ P7c3Ld3Xi: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Pe !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-1bbo8lr-container`,
                                        "data-framer-name": `11`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `ZwZcOlxUh-container`,
                                        name: `11`,
                                        nodeId: `ZwZcOlxUh`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ve,
                                          height: `100%`,
                                          id: `ZwZcOlxUh`,
                                          k4H1827Jh: Q(O),
                                          KrTFB4kFC: 11,
                                          layoutId: `ZwZcOlxUh`,
                                          name: `11`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ BqojBbZ0w: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Fe !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-i13c9l-container`,
                                        "data-framer-name": `12`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `RshzJxvtP-container`,
                                        name: `12`,
                                        nodeId: `RshzJxvtP`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ye,
                                          height: `100%`,
                                          id: `RshzJxvtP`,
                                          k4H1827Jh: Q(k),
                                          KrTFB4kFC: 12,
                                          layoutId: `RshzJxvtP`,
                                          name: `12`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ xQbI5Y__Z: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ie !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-1xzov-container`,
                                        "data-framer-name": `13`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `wyHYHq1jv-container`,
                                        name: `13`,
                                        nodeId: `wyHYHq1jv`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: Y,
                                          height: `100%`,
                                          id: `wyHYHq1jv`,
                                          k4H1827Jh: Q(j),
                                          KrTFB4kFC: 13,
                                          layoutId: `wyHYHq1jv`,
                                          name: `13`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ jjKG_Z_Z8: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Le !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-bh0us9-container`,
                                        "data-framer-name": `14`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `Ajed4aNeV-container`,
                                        name: `14`,
                                        nodeId: `Ajed4aNeV`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: be,
                                          height: `100%`,
                                          id: `Ajed4aNeV`,
                                          k4H1827Jh: Q(M),
                                          KrTFB4kFC: 14,
                                          layoutId: `Ajed4aNeV`,
                                          name: `14`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ aDyYCZsOE: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Re !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-125jz7-container`,
                                        "data-framer-name": `15`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `KaZcTWEsj-container`,
                                        name: `15`,
                                        nodeId: `KaZcTWEsj`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: xe,
                                          height: `100%`,
                                          id: `KaZcTWEsj`,
                                          k4H1827Jh: Q(N),
                                          KrTFB4kFC: 15,
                                          layoutId: `KaZcTWEsj`,
                                          name: `15`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ BnXzMMEUh: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  ze !== !1 &&
                                    f(K, {
                                      height: 72,
                                      width: `72px`,
                                      y: (s?.y || 0) + 0 + 0 + 0 + 0 + 0 + 80,
                                      children: f(A, {
                                        className: `framer-nbrj5o-container`,
                                        "data-framer-name": `16`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `i27dplrLG-container`,
                                        name: `16`,
                                        nodeId: `i27dplrLG`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: Se,
                                          height: `100%`,
                                          id: `i27dplrLG`,
                                          k4H1827Jh: Q(ne),
                                          KrTFB4kFC: 16,
                                          layoutId: `i27dplrLG`,
                                          name: `16`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ vcmxfQozu: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                ],
                              }),
                            }),
                          f(C.div, {
                            className: `framer-6gskte`,
                            "data-framer-name": `main`,
                            layoutDependency: U,
                            layoutId: `jgoAQBm0W`,
                            style: {
                              backgroundColor: `rgba(0, 0, 0, 0.06)`,
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            children: f(W, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                sizes: `max(${s?.width || `100vw`}, 1px)`,
                                ...Q(m),
                              },
                              className: `framer-144pugs`,
                              "data-framer-name": `img`,
                              layoutDependency: U,
                              layoutId: `ZrA6LvapY`,
                              transformTemplate: rn,
                              ...Z(
                                {
                                  A1T6zA6AZ: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(w),
                                    },
                                  },
                                  aDyYCZsOE: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(M),
                                    },
                                  },
                                  BnXzMMEUh: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(N),
                                    },
                                  },
                                  BqojBbZ0w: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(O),
                                    },
                                  },
                                  FJs2xfJOP: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(y),
                                    },
                                  },
                                  JG6MTeZSX: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(v),
                                    },
                                  },
                                  jjKG_Z_Z8: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(j),
                                    },
                                  },
                                  KRehx8tz3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(h),
                                    },
                                  },
                                  P7c3Ld3Xi: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(D),
                                    },
                                  },
                                  RnYY_5TS1: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(T),
                                    },
                                  },
                                  VBtOs_D1X: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(S),
                                    },
                                  },
                                  vcmxfQozu: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(ne),
                                    },
                                  },
                                  x_rBZff4q: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(E),
                                    },
                                  },
                                  xQbI5Y__Z: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(k),
                                    },
                                  },
                                  YIci6U3u0: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 201.4925),
                                      sizes: `max(${s?.width || `100vw`}, 1px)`,
                                      ...Q(x),
                                    },
                                  },
                                },
                                F,
                                R
                              ),
                            }),
                          }),
                        ],
                      }),
                    p !== !1 &&
                      _(C.div, {
                        className: `framer-glz76m`,
                        "data-framer-name": `phone`,
                        layoutDependency: U,
                        layoutId: `c5R3GXfN3`,
                        children: [
                          f(C.div, {
                            className: `framer-175q366`,
                            "data-framer-name": `main`,
                            layoutDependency: U,
                            layoutId: `NV5xs8JW5`,
                            style: {
                              borderBottomLeftRadius: 16,
                              borderBottomRightRadius: 16,
                              borderTopLeftRadius: 16,
                              borderTopRightRadius: 16,
                            },
                            children: f(W, {
                              background: {
                                alt: ``,
                                fit: `fill`,
                                loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                sizes: s?.width || `100vw`,
                                ...Q(m),
                              },
                              className: `framer-1y5tb97`,
                              "data-framer-name": `img`,
                              layoutDependency: U,
                              layoutId: `rcNkpm7ji`,
                              ...Z(
                                {
                                  A1T6zA6AZ: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(w),
                                    },
                                  },
                                  aDyYCZsOE: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(M),
                                    },
                                  },
                                  BnXzMMEUh: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(N),
                                    },
                                  },
                                  BqojBbZ0w: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(O),
                                    },
                                  },
                                  FJs2xfJOP: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(y),
                                    },
                                  },
                                  JG6MTeZSX: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(v),
                                    },
                                  },
                                  jjKG_Z_Z8: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(j),
                                    },
                                  },
                                  KRehx8tz3: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(h),
                                    },
                                  },
                                  P7c3Ld3Xi: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(D),
                                    },
                                  },
                                  RnYY_5TS1: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(T),
                                    },
                                  },
                                  VBtOs_D1X: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(S),
                                    },
                                  },
                                  vcmxfQozu: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(ne),
                                    },
                                  },
                                  x_rBZff4q: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(E),
                                    },
                                  },
                                  xQbI5Y__Z: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(k),
                                    },
                                  },
                                  YIci6U3u0: {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((s?.y || 0) + 0 + 0 + 0 + 0),
                                      sizes: s?.width || `100vw`,
                                      ...Q(x),
                                    },
                                  },
                                },
                                F,
                                R
                              ),
                            }),
                          }),
                          Te !== !1 &&
                            f(C.div, {
                              className: `framer-1m3yr8k`,
                              "data-framer-name": `thumbnails-container`,
                              "data-hide-scrollbars": !0,
                              layoutDependency: U,
                              layoutId: `NC2Jf3qIm`,
                              children: _(Xt, {
                                className: `framer-1nb1txs`,
                                columnMasonryLayoutEnabled: !0,
                                "data-framer-name": `thumbnails`,
                                layoutDependency: U,
                                layoutId: `kDyG0ncDs`,
                                parentIsDataRepeater: !1,
                                rowGap: 8,
                                trackCount: 8,
                                children: [
                                  f(K, {
                                    height: 200,
                                    width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                    y: (s?.y || 0) + 0 + 0 + 816 + 0 + 0 + 0,
                                    children: f(A, {
                                      className: `framer-1nsryu0-container`,
                                      "data-framer-name": `1`,
                                      isModuleExternal: !0,
                                      layoutDependency: U,
                                      layoutId: `CZTz0KyLk-container`,
                                      name: `1`,
                                      nodeId: `CZTz0KyLk`,
                                      rendersWithMotion: !0,
                                      scopeId: `cHylrdLbG`,
                                      children: f(X, {
                                        FivUXEobF: ce,
                                        height: `100%`,
                                        id: `CZTz0KyLk`,
                                        k4H1827Jh: Q(m),
                                        KrTFB4kFC: 1,
                                        layoutId: `CZTz0KyLk`,
                                        name: `1`,
                                        style: { height: `100%`, width: `100%` },
                                        variant: $(`jsvh0G5OD`),
                                        width: `100%`,
                                        ...Z(
                                          {
                                            A1T6zA6AZ: { variant: $(`etSmyKkW2`) },
                                            FJs2xfJOP: { variant: $(`etSmyKkW2`) },
                                            JG6MTeZSX: { variant: $(`etSmyKkW2`) },
                                            KRehx8tz3: { variant: $(`etSmyKkW2`) },
                                            RnYY_5TS1: { variant: $(`etSmyKkW2`) },
                                            VBtOs_D1X: { variant: $(`etSmyKkW2`) },
                                            YIci6U3u0: { variant: $(`etSmyKkW2`) },
                                          },
                                          F,
                                          R
                                        ),
                                      }),
                                    }),
                                  }),
                                  Te !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1nmuv0t-container`,
                                        "data-framer-name": `2`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `DNZWL497u-container`,
                                        name: `2`,
                                        nodeId: `DNZWL497u`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: le,
                                          height: `100%`,
                                          id: `DNZWL497u`,
                                          k4H1827Jh: Q(h),
                                          KrTFB4kFC: 2,
                                          layoutId: `DNZWL497u`,
                                          name: `2`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ KRehx8tz3: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ee !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1sxz4z0-container`,
                                        "data-framer-name": `3`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `ewYkxVrzI-container`,
                                        name: `3`,
                                        nodeId: `ewYkxVrzI`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: de,
                                          height: `100%`,
                                          id: `ewYkxVrzI`,
                                          k4H1827Jh: Q(v),
                                          KrTFB4kFC: 3,
                                          layoutId: `ewYkxVrzI`,
                                          name: `3`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ JG6MTeZSX: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  De !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-8zu6e1-container`,
                                        "data-framer-name": `4`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `PbZvQeZOs-container`,
                                        name: `4`,
                                        nodeId: `PbZvQeZOs`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: fe,
                                          height: `100%`,
                                          id: `PbZvQeZOs`,
                                          k4H1827Jh: Q(y),
                                          KrTFB4kFC: 4,
                                          layoutId: `PbZvQeZOs`,
                                          name: `4`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ FJs2xfJOP: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Oe !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1pt3wh9-container`,
                                        "data-framer-name": `5`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `Pc_QY560K-container`,
                                        name: `5`,
                                        nodeId: `Pc_QY560K`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: q,
                                          height: `100%`,
                                          id: `Pc_QY560K`,
                                          k4H1827Jh: Q(x),
                                          KrTFB4kFC: 5,
                                          layoutId: `Pc_QY560K`,
                                          name: `5`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ YIci6U3u0: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  ke !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-py3blm-container`,
                                        "data-framer-name": `6`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `Kp_sUXI1u-container`,
                                        name: `6`,
                                        nodeId: `Kp_sUXI1u`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: pe,
                                          height: `100%`,
                                          id: `Kp_sUXI1u`,
                                          k4H1827Jh: Q(S),
                                          KrTFB4kFC: 6,
                                          layoutId: `Kp_sUXI1u`,
                                          name: `6`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ VBtOs_D1X: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ae !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-a97psq-container`,
                                        "data-framer-name": `7`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `iigRPjISk-container`,
                                        name: `7`,
                                        nodeId: `iigRPjISk`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: me,
                                          height: `100%`,
                                          id: `iigRPjISk`,
                                          k4H1827Jh: Q(w),
                                          KrTFB4kFC: 7,
                                          layoutId: `iigRPjISk`,
                                          name: `7`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ A1T6zA6AZ: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  je !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-noionh-container`,
                                        "data-framer-name": `8`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `yAtiPaEa6-container`,
                                        name: `8`,
                                        nodeId: `yAtiPaEa6`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: J,
                                          height: `100%`,
                                          id: `yAtiPaEa6`,
                                          k4H1827Jh: Q(T),
                                          KrTFB4kFC: 8,
                                          layoutId: `yAtiPaEa6`,
                                          name: `8`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ RnYY_5TS1: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Me !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-41rja8-container`,
                                        "data-framer-name": `9`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `bL16NVYlM-container`,
                                        name: `9`,
                                        nodeId: `bL16NVYlM`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: he,
                                          height: `100%`,
                                          id: `bL16NVYlM`,
                                          k4H1827Jh: Q(E),
                                          KrTFB4kFC: 9,
                                          layoutId: `bL16NVYlM`,
                                          name: `9`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  Ne !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-lzhwor-container`,
                                        "data-framer-name": `10`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `GuxWuYBOS-container`,
                                        name: `10`,
                                        nodeId: `GuxWuYBOS`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ge,
                                          height: `100%`,
                                          id: `GuxWuYBOS`,
                                          k4H1827Jh: Q(D),
                                          KrTFB4kFC: 10,
                                          layoutId: `GuxWuYBOS`,
                                          name: `10`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ P7c3Ld3Xi: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Pe !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1m7ip55-container`,
                                        "data-framer-name": `11`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `ZCGakNGUR-container`,
                                        name: `11`,
                                        nodeId: `ZCGakNGUR`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ve,
                                          height: `100%`,
                                          id: `ZCGakNGUR`,
                                          k4H1827Jh: Q(O),
                                          KrTFB4kFC: 11,
                                          layoutId: `ZCGakNGUR`,
                                          name: `11`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ BqojBbZ0w: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Fe !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-p3pxy0-container`,
                                        "data-framer-name": `12`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `zvql2AKsQ-container`,
                                        name: `12`,
                                        nodeId: `zvql2AKsQ`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: ye,
                                          height: `100%`,
                                          id: `zvql2AKsQ`,
                                          k4H1827Jh: Q(k),
                                          KrTFB4kFC: 12,
                                          layoutId: `zvql2AKsQ`,
                                          name: `12`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ xQbI5Y__Z: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Ie !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-buurkj-container`,
                                        "data-framer-name": `13`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `kErXg6JlR-container`,
                                        name: `13`,
                                        nodeId: `kErXg6JlR`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: Y,
                                          height: `100%`,
                                          id: `kErXg6JlR`,
                                          k4H1827Jh: Q(j),
                                          KrTFB4kFC: 13,
                                          layoutId: `kErXg6JlR`,
                                          name: `13`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ jjKG_Z_Z8: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Le !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1pn8awq-container`,
                                        "data-framer-name": `14`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `GoGhqWYWX-container`,
                                        name: `14`,
                                        nodeId: `GoGhqWYWX`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: be,
                                          height: `100%`,
                                          id: `GoGhqWYWX`,
                                          k4H1827Jh: Q(M),
                                          KrTFB4kFC: 14,
                                          layoutId: `GoGhqWYWX`,
                                          name: `14`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ aDyYCZsOE: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  Re !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-1a9tci9-container`,
                                        "data-framer-name": `15`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `CNzKNTB_e-container`,
                                        name: `15`,
                                        nodeId: `CNzKNTB_e`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: xe,
                                          height: `100%`,
                                          id: `CNzKNTB_e`,
                                          k4H1827Jh: Q(N),
                                          KrTFB4kFC: 15,
                                          layoutId: `CNzKNTB_e`,
                                          name: `15`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ BnXzMMEUh: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                  ze !== !1 &&
                                    f(K, {
                                      height: 200,
                                      width: `max((max(${s?.width || `100vw`}, 1px) - 56px) / 8, 48px)`,
                                      children: f(A, {
                                        className: `framer-d92au2-container`,
                                        "data-framer-name": `16`,
                                        isModuleExternal: !0,
                                        layoutDependency: U,
                                        layoutId: `dmKDN_u9U-container`,
                                        name: `16`,
                                        nodeId: `dmKDN_u9U`,
                                        rendersWithMotion: !0,
                                        scopeId: `cHylrdLbG`,
                                        children: f(X, {
                                          FivUXEobF: Se,
                                          height: `100%`,
                                          id: `dmKDN_u9U`,
                                          k4H1827Jh: Q(ne),
                                          KrTFB4kFC: 16,
                                          layoutId: `dmKDN_u9U`,
                                          name: `16`,
                                          style: { height: `100%`, width: `100%` },
                                          variant: $(`etSmyKkW2`),
                                          width: `100%`,
                                          ...Z({ vcmxfQozu: { variant: $(`jsvh0G5OD`) } }, F, R),
                                        }),
                                      }),
                                    }),
                                ],
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
          `.framer-2aD5r.framer-11o77ru, .framer-2aD5r .framer-11o77ru { display: block; }`,
          `.framer-2aD5r.framer-jejado { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 600px; }`,
          `.framer-2aD5r .framer-1g8938r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 40px 0px; position: relative; width: 1px; }`,
          `.framer-2aD5r .framer-1gkwa4o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: sticky; top: 72px; width: min-content; z-index: 1; }`,
          `.framer-2aD5r .framer-1pizpc4 { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }`,
          `.framer-2aD5r .framer-5am78-container, .framer-2aD5r .framer-1fo9uam-container, .framer-2aD5r .framer-4d6zye-container, .framer-2aD5r .framer-16yyk02-container, .framer-2aD5r .framer-1dbuehd-container, .framer-2aD5r .framer-hxyfwk-container, .framer-2aD5r .framer-7333y0-container, .framer-2aD5r .framer-1gdlwqz-container, .framer-2aD5r .framer-weegt-container, .framer-2aD5r .framer-lseg68-container, .framer-2aD5r .framer-1bbo8lr-container, .framer-2aD5r .framer-i13c9l-container, .framer-2aD5r .framer-1xzov-container, .framer-2aD5r .framer-bh0us9-container, .framer-2aD5r .framer-125jz7-container, .framer-2aD5r .framer-nbrj5o-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 72px); position: relative; width: 72px; }`,
          `.framer-2aD5r .framer-6gskte { aspect-ratio: 1 / 1; flex: 1 0 0px; height: var(--framer-aspect-ratio-supported, 200px); overflow: hidden; position: sticky; top: 40px; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-2aD5r .framer-144pugs { aspect-ratio: 1 / 1; flex: none; gap: 0px; height: var(--framer-aspect-ratio-supported, 200px); overflow: hidden; position: absolute; right: 0px; top: 50%; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-2aD5r .framer-glz76m { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2aD5r .framer-175q366 { aspect-ratio: 0.75 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 800px); overflow: hidden; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2aD5r .framer-1y5tb97 { flex: none; gap: 0px; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: hidden; position: absolute; top: 0px; width: 100%; will-change: var(--framer-will-change-filter-override, filter); z-index: 1; }`,
          `.framer-2aD5r .framer-1m3yr8k { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; overflow-x: auto; padding: 0px; position: relative; width: 100%; z-index: 1; }`,
          `.framer-2aD5r .framer-1nb1txs { display: grid; flex: 1 0 0px; gap: 8px; height: min-content; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-2aD5r .framer-1nsryu0-container, .framer-2aD5r .framer-1nmuv0t-container, .framer-2aD5r .framer-1sxz4z0-container, .framer-2aD5r .framer-8zu6e1-container, .framer-2aD5r .framer-1pt3wh9-container, .framer-2aD5r .framer-py3blm-container, .framer-2aD5r .framer-a97psq-container, .framer-2aD5r .framer-noionh-container, .framer-2aD5r .framer-41rja8-container, .framer-2aD5r .framer-lzhwor-container, .framer-2aD5r .framer-1m7ip55-container, .framer-2aD5r .framer-p3pxy0-container, .framer-2aD5r .framer-buurkj-container, .framer-2aD5r .framer-1pn8awq-container, .framer-2aD5r .framer-1a9tci9-container, .framer-2aD5r .framer-d92au2-container { align-self: start; aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); justify-self: start; position: relative; width: 100%; }`,
          `.framer-2aD5r.framer-v-tgvbtd .framer-175q366, .framer-2aD5r.framer-v-sfwegu .framer-175q366, .framer-2aD5r.framer-v-1n2tlu .framer-175q366 { height: var(--framer-aspect-ratio-supported, 600px); }`,
          `.framer-2aD5r.framer-v-1n2tlu .framer-1gkwa4o, .framer-2aD5r.framer-v-1nu1xml .framer-1gkwa4o, .framer-2aD5r.framer-v-q2gj7z .framer-1gkwa4o, .framer-2aD5r.framer-v-57b0wb .framer-1gkwa4o, .framer-2aD5r.framer-v-f1lovz .framer-1gkwa4o, .framer-2aD5r.framer-v-ros7lk .framer-1gkwa4o, .framer-2aD5r.framer-v-gqretx .framer-1gkwa4o, .framer-2aD5r.framer-v-1kic0a6 .framer-1gkwa4o, .framer-2aD5r.framer-v-162g2rc .framer-1gkwa4o, .framer-2aD5r.framer-v-1r04ifp .framer-1gkwa4o, .framer-2aD5r.framer-v-1ijdu1k .framer-1gkwa4o, .framer-2aD5r.framer-v-1v0fvxs .framer-1gkwa4o { align-self: stretch; height: auto; }`,
          `.framer-2aD5r.framer-v-1nu1xml .framer-175q366, .framer-2aD5r.framer-v-q2gj7z .framer-175q366, .framer-2aD5r.framer-v-57b0wb .framer-175q366, .framer-2aD5r.framer-v-f1lovz .framer-175q366, .framer-2aD5r.framer-v-ros7lk .framer-175q366, .framer-2aD5r.framer-v-gqretx .framer-175q366, .framer-2aD5r.framer-v-1kic0a6 .framer-175q366, .framer-2aD5r.framer-v-162g2rc .framer-175q366, .framer-2aD5r.framer-v-1r04ifp .framer-175q366, .framer-2aD5r.framer-v-1ijdu1k .framer-175q366, .framer-2aD5r.framer-v-1v0fvxs .framer-175q366 { height: var(--framer-aspect-ratio-supported, 267px); }`,
          `.framer-2aD5r[data-hide-scrollbars="true"]::-webkit-scrollbar, .framer-2aD5r [data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
          `.framer-2aD5r[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb, .framer-2aD5r [data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
          `.framer-2aD5r[data-hide-scrollbars="true"], .framer-2aD5r [data-hide-scrollbars="true"] { scrollbar-width: none; }`,
        ],
        `framer-2aD5r`
      )),
      (un.displayName = `FC Gallery`),
      (un.defaultProps = { height: 800, width: 600 }),
      D(un, {
        variant: {
          options: [
            `kWPFv_ZEj`,
            `KRehx8tz3`,
            `JG6MTeZSX`,
            `FJs2xfJOP`,
            `YIci6U3u0`,
            `VBtOs_D1X`,
            `A1T6zA6AZ`,
            `RnYY_5TS1`,
            `x_rBZff4q`,
            `P7c3Ld3Xi`,
            `BqojBbZ0w`,
            `xQbI5Y__Z`,
            `jjKG_Z_Z8`,
            `aDyYCZsOE`,
            `BnXzMMEUh`,
            `vcmxfQozu`,
          ],
          optionTitles: [
            `1`,
            `2`,
            `3`,
            `4`,
            `5`,
            `6`,
            `7`,
            `8`,
            `9`,
            `10`,
            `11`,
            `12`,
            `13`,
            `14`,
            `15`,
            `16`,
          ],
          title: `Variant`,
          type: q.Enum,
        },
        XbXpWCKKc: { defaultValue: !0, title: `Phone`, type: q.Boolean },
        onXbXpWCKKcChange: { changes: `XbXpWCKKc`, type: q.ChangeHandler },
        E_YyIj1Fq: { title: `Image 1`, type: q.ResponsiveImage },
        LPo6c9k2x: { title: `Image 2`, type: q.ResponsiveImage },
        zw0_cPFar: { title: `Image 3`, type: q.ResponsiveImage },
        L3lHBq7ad: { title: `Image 4`, type: q.ResponsiveImage },
        YjWpMatn8: { title: `Image 5`, type: q.ResponsiveImage },
        EGr7oOYYz: { title: `Image 6`, type: q.ResponsiveImage },
        L75eUgVoI: { title: `Image 7`, type: q.ResponsiveImage },
        Lv0pcL2PA: { title: `Image 8`, type: q.ResponsiveImage },
        NYnCWZ4H3: { title: `Image 9`, type: q.ResponsiveImage },
        TncXZgqPB: { title: `Image 10`, type: q.ResponsiveImage },
        Ij0s1WbYG: { title: `Image 11`, type: q.ResponsiveImage },
        GSvdbC9PE: { title: `Image 12`, type: q.ResponsiveImage },
        t2OoN8jbE: { title: `Image 13`, type: q.ResponsiveImage },
        BxrZjnsRx: { title: `Image 14`, type: q.ResponsiveImage },
        L_htVpkkW: { title: `Image 15`, type: q.ResponsiveImage },
        pyPwi9F3j: { title: `Image 16`, type: q.ResponsiveImage },
      }),
      ce(un, [{ explicitInter: !0, fonts: [] }, ...Yt], { supportsExplicitInterCodegen: !0 }),
      (un.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(X, {}, t)])) }));
  });
function fn(e) {
  let { font: t, textColor: n = `#000000` } = e,
    { shopifyProductID: r } = e,
    [a, o] = i(1),
    [c, l] = i(0),
    [d, p] = i(null),
    m = u !== void 0,
    [h, g] = i(null);
  (s(() => {
    (o(1), l(0), p(null));
  }, [r]),
    s(() => {
      h && o(1);
    }, [h]),
    s(() => {
      if (!m) return;
      let e = (e) => {
        if (e.detail) {
          if (e.detail.productId !== `gid://shopify/Product/${r}`) return;
          g(e.detail);
          let t;
          (e.detail.quantityAvailable >= 0
            ? (t = e.detail.quantityAvailable)
            : e.detail.quantityAvailable < 0 && (t = 100),
            l(t),
            o(1),
            _(1));
        }
      };
      return (
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`product__inventory__changed`, e),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`product__inventory__changed`, e));
        }
      );
    }, [m, r, a]),
    s(() => {
      if (!m) return;
      let t = (t) => {
          if (t.detail?.productId && t.detail.productId !== r) return;
          let n = t.detail?.maxInventory,
            i = Math.min(d === null ? 1 / 0 : d, n === void 0 ? c : n);
          if ((l(i), a < i)) {
            let t = Math.min(a + 1, i);
            (o(t),
              _(t),
              t >= i &&
                u.dispatchEvent(
                  new CustomEvent(`quantityMaxReached`, {
                    detail: { productId: e.shopifyProductID, maxQuantity: i },
                  })
                ));
          } else
            u.dispatchEvent(
              new CustomEvent(`quantityMaxReached`, {
                detail: { productId: e.shopifyProductID, maxQuantity: i },
              })
            );
        },
        n = () => {
          let e = Math.max(a - 1, 1);
          (o(e), _(e));
        };
      return (
        u.addEventListener(`FcQuantityIncrement`, t),
        u.addEventListener(`FcQuantityDecrement`, n),
        () => {
          (u.removeEventListener(`FcQuantityIncrement`, t),
            u.removeEventListener(`FcQuantityDecrement`, n));
        }
      );
    }, [a, c, d, m, e.shopifyProductID]),
    s(() => {
      d !== null && a >= d && (o(d), _(d));
    }, [d, a]),
    s(() => {
      m &&
        u.dispatchEvent(
          new CustomEvent(`FcQuantityStateUpdate`, {
            detail: { currentQuantity: a, maxInventory: c, activeVariant: h },
          })
        );
    }, [a, c, m, h]),
    s(() => {
      let t = (t) => {
        let { productId: n, maxQuantity: r } = t.detail;
        n === e.shopifyProductID && p(r === 0 ? r : (r ?? null));
      };
      return (
        u.addEventListener(`setMaxQuantity`, t),
        () => u.removeEventListener(`setMaxQuantity`, t)
      );
    }, [e.shopifyProductID]),
    s(() => {
      let e = () => {
        (p(null), o(1), _(1));
      };
      return (
        u.addEventListener(`shopXtools-cart-update`, e),
        () => u.removeEventListener(`shopXtools-cart-update`, e)
      );
    }, []));
  let _ = (e) => {
    m && u.dispatchEvent(new CustomEvent(`FcQuantitySelectorchanges`, { detail: e }));
  };
  return f(`div`, {
    style: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `100%`,
      height: `100%`,
    },
    children: f(`p`, { style: { margin: `0`, textAlign: `center`, color: n, ...t }, children: a }),
  });
}
var pn = e(() => {
  (x(),
    v(),
    l(),
    V(),
    (fn.defaultProps = { textColor: `#000000` }),
    D(fn, {
      shopifyProductID: { type: q.String, title: `Product ID`, description: `Connect to CMS` },
      textColor: { type: q.Color, title: `Text Color` },
      font: { type: q.Font, title: `Font`, controls: `extended` },
    }));
});
function mn(e) {
  let { isPlus: n, activeContent: r, disabledContent: a, shopifyProductID: o } = e,
    c = n === `plus`,
    [l, d] = i(!0),
    [p, m] = i(0),
    [h, g] = i(1),
    [_, v] = i(null),
    [y, b] = i(!0),
    [x, S] = i(!1);
  s(() => {
    let e = (e) => {
      e.detail.shopifyProductID === `gid://shopify/Product/${o}` && S(e.detail.autoSelectFirst);
    };
    return (
      document.addEventListener(`auto_select_first_flag`, e),
      () => {
        document.removeEventListener(`auto_select_first_flag`, e);
      }
    );
  }, []);
  let C = async (e) => {
    let t = e.detail.currentQuantity || 0,
      n = e.detail.maxInventory || 0;
    if (u !== void 0 && u?.shopXtools?.products) {
      let r = Array.isArray(u.shopXtools?.products)
          ? u.shopXtools.products
          : Object.values(u.shopXtools?.products || {}),
        i = `gid://shopify/Product/${o}`,
        a = r.find((e) => e?.node?.id === i),
        s;
      a?.node?.variants?.edges?.length === 1
        ? ((s = a?.node?.variants?.edges[0]?.node), v(s))
        : ((s = e.detail.activeVariant), v(s));
      let c = s?.availableForSale ?? a?.node?.availableForSale ?? !0,
        l = n;
      if ((c && n <= 0 ? (l = 100) : c || (l = 0), c && a?.node?.handle))
        try {
          let e = await u.shopXtools?.handleCartMutation?.(Re, { handle: a.node.handle }),
            n = e?.product?.metafield_order_max?.value,
            r = u.shopXtools?.cart,
            i = e.product;
          if (n > 0) {
            if (r && i) {
              let e =
                  u.shopXtools.products
                    .find(({ node: e }) => e.id === i.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                a =
                  n -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              ((l = Math.max(0, Math.min(a, l))), m(l), g(t || 1), b(a === 0 || a === 1 ? !1 : c));
              return;
            }
            l = Math.min(parseInt(n, 10), l);
          } else if (r) {
            let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === s.id);
            if (e) {
              let t = e.node.quantity,
                n = s?.quantityAvailable <= 0 && s?.availableForSale ? 100 : s?.quantityAvailable,
                r = Math.max(0, n - t);
              ((l = Math.max(0, Math.min(r, l))), m(l), b(r === 0 || r === 1 ? !1 : c));
            }
          }
        } catch {}
      (m(l), g(t || 1), b(c));
    }
  };
  (s(() => {
    let e = async () => {
      if (u !== void 0 && u?.shopXtools?.products) {
        let e = Array.isArray(u.shopXtools?.products)
            ? u.shopXtools.products
            : Object.values(u.shopXtools?.products || {}),
          t = `gid://shopify/Product/${o}`,
          n = e.find((e) => e?.node?.id === t);
        if (n?.node?.handle)
          try {
            let e = await u.shopXtools?.handleCartMutation?.(Re, { handle: n.node.handle }),
              t = e?.product?.metafield_order_max?.value,
              r = u.shopXtools?.cart,
              i = e.product;
            if (t > 0 && r && i) {
              let e =
                  u.shopXtools.products
                    .find(({ node: e }) => e.id === i.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                n =
                  t -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              (m(Math.max(0, Math.min(n, 100))), b(!(n === 0 || n === 1)));
            } else if (!t && _ && r) {
              let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === _.id);
              if (e) {
                let t = e.node.quantity,
                  n = _.quantityAvailable <= 0 && _.availableForSale ? 100 : _.quantityAvailable,
                  r = Math.max(0, n - t);
                (m(Math.max(0, Math.min(r, 100))), b(!(r === 0 || r === 1)));
              }
            }
          } catch (e) {
            console.error(`Error updating quantity button state:`, e);
          }
      }
    };
    return (
      u.addEventListener(`shopXtools-cart-update`, e),
      () => {
        u.removeEventListener(`shopXtools-cart-update`, e);
      }
    );
  }, [o, _]),
    s(() => {
      let e = async (e) => {
        if (e.detail.productId !== `gid://shopify/Product/${o}`) return;
        let t = e.detail;
        if ((v(t), u !== void 0 && u?.shopXtools?.products)) {
          let e = Array.isArray(u.shopXtools?.products)
              ? u.shopXtools.products
              : Object.values(u.shopXtools?.products || {}),
            n = `gid://shopify/Product/${o}`,
            r = e.find((e) => e?.node?.id === n),
            i = t?.quantityAvailable ?? r?.node?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0,
            a = t?.availableForSale ?? r?.node?.availableForSale ?? !0,
            s = i;
          if ((a && i <= 0 ? (s = 100) : a || (s = 0), a && r?.node?.handle))
            try {
              let e = await u.shopXtools?.handleCartMutation?.(Re, { handle: r.node.handle }),
                n = e?.product?.metafield_order_max?.value,
                i = u.shopXtools?.cart,
                o = e.product;
              if (n > 0) {
                if (i && o) {
                  let e =
                      u.shopXtools.products
                        .find(({ node: e }) => e.id === o.id)
                        ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                    t =
                      n -
                      (
                        i?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                      ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                  ((s = Math.max(0, Math.min(t, s))), m(s), b(t === 0 || t === 1 ? !1 : a));
                  return;
                }
                s = Math.min(parseInt(n, 10), s);
              } else if (i) {
                let e = i?.lines?.edges?.find((e) => e?.node?.merchandise?.id === t.id);
                if (e) {
                  let n = e.node.quantity,
                    r =
                      t?.quantityAvailable <= 0 && t?.availableForSale ? 100 : t?.quantityAvailable,
                    i = Math.max(0, r - n);
                  ((s = Math.max(0, Math.min(i, s))), m(s), b(i === 0 || i === 1 ? !1 : a));
                } else (m(s), b(a));
              }
            } catch {}
          (m(s), b(a));
        }
      };
      return (
        (async () => {
          if (u !== void 0 && u?.shopXtools?.products) {
            let e = Array.isArray(u.shopXtools?.products)
                ? u.shopXtools.products
                : Object.values(u.shopXtools?.products || {}),
              t = `gid://shopify/Product/${o}`,
              n = e.find((e) => e?.node?.id === t),
              r,
              i,
              a;
            x || n?.node?.variants?.edges?.length === 1
              ? ((r = n?.node?.variants?.edges[0]?.node),
                (i = r?.quantityAvailable ?? 0),
                (a = r?.availableForSale ?? !0),
                _ || v(r))
              : n?.node?.variants?.edges?.length > 1 &&
                ((r = void 0),
                (i = (n?.node?.variants?.edges ?? []).reduce(
                  (e, { node: t }) => e + (t.quantityAvailable || 0),
                  0
                )),
                (a = n?.node?.availableForSale ?? !0),
                _ || v(r));
            let s = i;
            if ((a && i <= 0 ? (s = 100) : a || (s = 0), a && n?.node?.handle))
              try {
                let e = await u.shopXtools?.handleCartMutation?.(Re, { handle: n.node.handle }),
                  t = e?.product?.metafield_order_max?.value,
                  i = u.shopXtools?.cart,
                  o = e.product;
                if (t > 0) {
                  if (i && o) {
                    let e =
                        u.shopXtools.products
                          .find(({ node: e }) => e.id === o.id)
                          ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                      n =
                        t -
                        (
                          i?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                        ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                    ((s = Math.max(0, Math.min(n, s))), m(s), b(n === 0 || n === 1 ? !1 : a));
                    return;
                  }
                  s = Math.min(parseInt(t, 10), s);
                } else if (i) {
                  let e = i?.lines?.edges?.find((e) => e?.node?.merchandise?.id === r.id);
                  if (e) {
                    let t = e.node.quantity,
                      n =
                        r?.quantityAvailable <= 0 && r?.availableForSale
                          ? 100
                          : r?.quantityAvailable,
                      i = Math.max(0, n - t);
                    ((s = Math.max(0, Math.min(i, s))), m(s), b(i === 0 || i === 1 ? !1 : a));
                  } else (m(s), b(a));
                }
              } catch {}
          }
        })(),
        document.addEventListener(`product__active-variant__changed`, e),
        u.addEventListener(`FcQuantityStateUpdate`, C),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, e),
            u.removeEventListener(`FcQuantityStateUpdate`, C));
        }
      );
    }, [c, o, x]),
    s(() => {
      d(c ? !(y && h < p) : h <= 1);
    }, [h, p, y, c]));
  let w = async () => {
    if (!l && u !== void 0) {
      let e = Array.isArray(u.shopXtools?.products)
          ? u.shopXtools.products
          : Object.values(u.shopXtools?.products || {}),
        t = `gid://shopify/Product/${o}`;
      e.find((e) => e?.node?.id === t);
      let n = _;
      (n || (!n && u !== void 0 && u?.shopXtools?.products)) &&
        ((c && h < p) || (!c && h > 1)) &&
        (c ? h + 1 : h - 1,
        u.dispatchEvent(
          new CustomEvent(c ? `FcQuantityIncrement` : `FcQuantityDecrement`, {
            detail: { maxInventory: p, variantId: n?.id || null, productId: o, currentQuantity: h },
          })
        ));
    }
  };
  return f(`div`, {
    role: `button`,
    tabIndex: 0,
    style: { flex: 1, height: `100%`, cursor: l ? `not-allowed` : `pointer` },
    onClick: () => {
      l || w();
    },
    onKeyPress: (e) => {
      (e.key === `Enter` || e.key === ` `) && !l && w();
    },
    "aria-disabled": l,
    "aria-label": l ? `Button disabled` : `Button active`,
    children:
      !r?.[0] || !a?.[0]
        ? f(`div`, {
            style: {
              width: `100%`,
              height: `100%`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              color: `#666`,
              fontSize: `14px`,
            },
            children: `Connect Instance`,
          })
        : t(l ? a[0] : r[0], {
            style: {
              ...(l ? a[0].props?.style : r[0].props?.style || {}),
              width: `100%`,
              height: `100%`,
            },
          }),
  });
}
var hn = e(() => {
    (x(),
      v(),
      l(),
      V(),
      Me(),
      (mn.defaultProps = { shopifyProductID: ``, isPlus: `plus` }),
      D(mn, {
        shopifyProductID: { type: q.String, title: `Product ID`, description: `Connect to CMS` },
        isPlus: {
          type: q.Enum,
          title: `Action`,
          options: [`minus`, `plus`],
          optionTitles: [`➖`, `➕`],
          defaultValue: `plus`,
          displaySegmentedControl: !0,
        },
        activeContent: { type: q.ComponentInstance, title: `Active Button` },
        disabledContent: { type: q.ComponentInstance, title: `Disabled Button` },
      }));
  }),
  gn,
  _n,
  vn,
  yn = e(() => {
    (v(),
      l(),
      (gn = {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      (_n = {
        ...gn,
        borderRadius: 6,
        background: `rgba(149, 149, 149, 0.1)`,
        border: `1px dashed rgba(149, 149, 149, 0.15)`,
        color: `#a5a5a5`,
        flexDirection: `column`,
      }),
      (vn = p((e, t) => f(`div`, { style: _n, ref: t }))));
  }),
  bn = e(() => {
    yn();
  }),
  xn,
  Sn,
  Cn,
  wn = e(() => {
    ((xn = (e) => e),
      (Cn = (e) => (
        (Sn ||= xn(e.createElement(`path`, { d: `M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z` }), `Home`)),
        Sn
      )));
  }),
  Tn = e(() => {
    (wn(), wn());
  });
function En(e, t, n = ``, r, i) {
  if (t) return r;
  if (n == null || n?.length === 0) return null;
  let a = n.toLowerCase().replace(/-|\s/g, ``);
  return i[a] ?? kn(e, a);
}
function Dn(e, t, n = ``, r, i) {
  let o = a(() => {
    if (n == null || n?.length === 0) return null;
    let t = n.toLowerCase().replace(/-|\s/g, ``);
    return i[t] ?? kn(e, t);
  }, [r, n]);
  return t ? r : o;
}
var On,
  kn,
  An = e(() => {
    (l(),
      V(),
      (On = {
        onClick: { type: q.EventHandler },
        onMouseDown: { type: q.EventHandler },
        onMouseUp: { type: q.EventHandler },
        onMouseEnter: { type: q.EventHandler },
        onMouseLeave: { type: q.EventHandler },
      }),
      (kn = (e, t) => e.find((e) => e.toLowerCase().includes(t))));
  });
function jn(e) {
  let {
      color: t,
      selectByList: r,
      iconSearch: o,
      iconSelection: c,
      onClick: l,
      onMouseDown: u,
      onMouseUp: d,
      onMouseEnter: p,
      onMouseLeave: m,
      mirrored: h,
      style: _,
    } = e,
    v = g(!1),
    y = Dn(Fn, r, o, c, Rn),
    b = Ln.map((t) => e[t]),
    x = a(() => {
      let t = Pn[y];
      if (!t) return;
      let n = e[`iconStyle${t}`];
      if (n !== `Filled`) return n;
    }, [...b]),
    [S, w] = i(y === `Home` ? Cn(n) : null);
  async function T() {
    if (typeof Pn[y] != `number`) {
      w(null);
      return;
    }
    try {
      let e = await import(`${Nn}${y}${x || ``}.js@0.0.32`);
      v.current && w(e.default(n));
    } catch {
      v.current && w(null);
    }
  }
  s(
    () => (
      (v.current = !0),
      T(),
      () => {
        v.current = !1;
      }
    ),
    [y, ...b]
  );
  let ee = k.current() === k.canvas ? f(vn, {}) : null;
  return f(C.div, {
    style: { display: `contents` },
    onClick: l,
    onMouseEnter: p,
    onMouseLeave: m,
    onMouseDown: u,
    onMouseUp: d,
    children: S
      ? f(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          style: {
            userSelect: `none`,
            width: `100%`,
            height: `100%`,
            display: `inline-block`,
            fill: t,
            flexShrink: 0,
            transform: h ? `scale(-1, 1)` : void 0,
            ..._,
          },
          focusable: `false`,
          viewBox: `0 0 24 24`,
          color: t,
          children: S,
        })
      : ee,
  });
}
function Mn(e, t) {
  let { selectByList: n, iconSearch: r, iconSelection: i } = e,
    a = parseInt(t),
    o = En(Fn, n, r, i, Rn),
    s = Pn[o];
  return !s || a === 0 || s !== a;
}
var Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn = e(() => {
    (v(),
      l(),
      V(),
      bn(),
      Tn(),
      An(),
      (Nn = `https://framer.com/m/material-icons/`),
      (Pn = {
        AcUnit: 15,
        AccessAlarm: 15,
        AccessAlarms: 15,
        AccessTime: 15,
        AccessTimeFilled: 0,
        Accessibility: 7,
        AccessibilityNew: 0,
        Accessible: 15,
        AccessibleForward: 0,
        AccountBalance: 2,
        AccountBalanceWallet: 0,
        AccountBox: 15,
        AccountCircle: 7,
        AccountTree: 15,
        AdUnits: 15,
        Adb: 15,
        Add: 15,
        AddAPhoto: 15,
        AddAlarm: 15,
        AddAlert: 15,
        AddBox: 15,
        AddBusiness: 15,
        AddCircle: 15,
        AddCircleOutline: 0,
        AddComment: 15,
        AddIcCall: 15,
        AddLink: 15,
        AddLocation: 15,
        AddLocationAlt: 2,
        AddModerator: 15,
        AddPhotoAlternate: 0,
        AddReaction: 15,
        AddRoad: 15,
        AddShoppingCart: 2,
        AddTask: 15,
        AddToDrive: 15,
        AddToHomeScreen: 2,
        AddToPhotos: 15,
        AddToQueue: 15,
        Addchart: 15,
        Adjust: 15,
        AdminPanelSettings: 0,
        Agriculture: 15,
        Air: 15,
        AirlineSeatFlat: 2,
        AirplaneTicket: 2,
        AirplanemodeActive: 0,
        AirplanemodeInactive: 0,
        Airplay: 15,
        AirportShuttle: 2,
        Alarm: 15,
        AlarmAdd: 15,
        AlarmOff: 15,
        AlarmOn: 15,
        Album: 15,
        AlignHorizontalLeft: 0,
        AlignHorizontalRight: 0,
        AlignVerticalBottom: 0,
        AlignVerticalCenter: 0,
        AlignVerticalTop: 0,
        AllInbox: 15,
        AllInclusive: 15,
        AllOut: 15,
        AltRoute: 15,
        AlternateEmail: 2,
        Analytics: 15,
        Anchor: 15,
        Android: 15,
        Animation: 15,
        Announcement: 15,
        Aod: 15,
        Apartment: 15,
        Api: 15,
        AppBlocking: 15,
        AppRegistration: 2,
        AppSettingsAlt: 2,
        Apple: 0,
        Approval: 15,
        Apps: 15,
        Architecture: 15,
        Archive: 15,
        ArrowBack: 15,
        ArrowBackIos: 15,
        ArrowBackIosNew: 2,
        ArrowCircleDown: 2,
        ArrowCircleUp: 7,
        ArrowDownward: 7,
        ArrowDropDown: 7,
        ArrowDropDownCircle: 0,
        ArrowDropUp: 15,
        ArrowForward: 15,
        ArrowForwardIos: 2,
        ArrowLeft: 15,
        ArrowRight: 15,
        ArrowRightAlt: 7,
        ArrowUpward: 15,
        ArtTrack: 15,
        Article: 15,
        AspectRatio: 15,
        Assessment: 15,
        Assignment: 15,
        AssignmentInd: 7,
        AssignmentLate: 2,
        AssignmentReturn: 0,
        AssignmentReturned: 0,
        AssignmentTurnedIn: 0,
        Assistant: 15,
        AssistantDirection: 0,
        AssistantPhoto: 2,
        Atm: 15,
        AttachEmail: 15,
        AttachFile: 15,
        AttachMoney: 15,
        Attachment: 15,
        Attractions: 15,
        Attribution: 15,
        Audiotrack: 15,
        AutoAwesome: 15,
        AutoAwesomeMosaic: 0,
        AutoAwesomeMotion: 0,
        AutoDelete: 15,
        AutoFixHigh: 15,
        AutoFixNormal: 7,
        AutoFixOff: 15,
        AutoGraph: 15,
        AutoStories: 15,
        AutofpsSelect: 7,
        Autorenew: 15,
        AvTimer: 15,
        BabyChangingStation: 0,
        Backpack: 15,
        Backspace: 15,
        Backup: 15,
        BackupTable: 15,
        Badge: 15,
        BakeryDining: 15,
        Balcony: 15,
        Ballot: 15,
        BarChart: 15,
        BatchPrediction: 2,
        Bathroom: 15,
        Bathtub: 15,
        Battery20: 15,
        Battery30: 15,
        Battery50: 15,
        Battery60: 15,
        Battery80: 15,
        Battery90: 15,
        BatteryAlert: 15,
        BatteryCharging20: 0,
        BatteryCharging30: 0,
        BatteryCharging50: 0,
        BatteryCharging60: 0,
        BatteryCharging80: 0,
        BatteryCharging90: 0,
        BatteryChargingFull: 0,
        BatteryFull: 15,
        BatterySaver: 15,
        BatteryStd: 15,
        BatteryUnknown: 2,
        BeachAccess: 15,
        Bed: 15,
        BedroomBaby: 15,
        BedroomChild: 15,
        BedroomParent: 7,
        Bedtime: 15,
        Beenhere: 15,
        Bento: 15,
        BikeScooter: 15,
        Biotech: 15,
        Blender: 15,
        Block: 15,
        Bloodtype: 15,
        Bluetooth: 15,
        BluetoothAudio: 2,
        BluetoothConnected: 0,
        BluetoothDisabled: 0,
        BluetoothDrive: 2,
        BluetoothSearching: 0,
        BlurCircular: 15,
        BlurLinear: 15,
        BlurOff: 15,
        BlurOn: 15,
        Bolt: 15,
        Book: 15,
        BookOnline: 15,
        Bookmark: 15,
        BookmarkAdd: 15,
        BookmarkAdded: 7,
        BookmarkBorder: 2,
        BookmarkRemove: 2,
        Bookmarks: 15,
        BorderAll: 15,
        BorderBottom: 15,
        BorderClear: 15,
        BorderColor: 15,
        BorderHorizontal: 0,
        BorderInner: 15,
        BorderLeft: 15,
        BorderOuter: 15,
        BorderRight: 15,
        BorderStyle: 15,
        BorderTop: 15,
        BorderVertical: 2,
        BrandingWatermark: 0,
        BreakfastDining: 2,
        Brightness1: 15,
        Brightness2: 15,
        Brightness3: 15,
        Brightness4: 15,
        Brightness5: 15,
        Brightness6: 15,
        Brightness7: 15,
        BrightnessAuto: 2,
        BrightnessHigh: 2,
        BrightnessLow: 7,
        BrightnessMedium: 0,
        BrokenImage: 15,
        BrowserNotSupported: 0,
        BrunchDining: 15,
        Brush: 15,
        BubbleChart: 15,
        BugReport: 15,
        Build: 15,
        BuildCircle: 15,
        Bungalow: 15,
        BurstMode: 15,
        BusAlert: 15,
        Business: 15,
        BusinessCenter: 2,
        Cabin: 15,
        Cable: 15,
        Cached: 15,
        Cake: 15,
        Calculate: 15,
        CalendarToday: 7,
        CalendarViewDay: 2,
        CalendarViewMonth: 0,
        CalendarViewWeek: 0,
        Call: 15,
        CallEnd: 15,
        CallMade: 15,
        CallMerge: 15,
        CallMissed: 15,
        CallMissedOutgoing: 0,
        CallReceived: 15,
        CallSplit: 15,
        CallToAction: 15,
        Camera: 15,
        CameraAlt: 15,
        CameraEnhance: 7,
        CameraFront: 15,
        CameraIndoor: 15,
        CameraOutdoor: 7,
        CameraRear: 15,
        CameraRoll: 15,
        Cameraswitch: 15,
        Campaign: 15,
        Cancel: 15,
        CancelPresentation: 0,
        CancelScheduleSend: 0,
        CarRental: 15,
        CarRepair: 15,
        CardGiftcard: 15,
        CardMembership: 2,
        CardTravel: 15,
        Carpenter: 15,
        Cases: 15,
        Casino: 15,
        Cast: 15,
        CastConnected: 7,
        CastForEducation: 0,
        CatchingPokemon: 2,
        Category: 15,
        Celebration: 15,
        CellWifi: 15,
        CenterFocusStrong: 0,
        CenterFocusWeak: 2,
        Chair: 15,
        ChairAlt: 15,
        Chalet: 15,
        ChangeCircle: 15,
        ChangeHistory: 7,
        ChargingStation: 2,
        Chat: 15,
        ChatBubble: 15,
        ChatBubbleOutline: 0,
        Check: 15,
        CheckBox: 15,
        CheckBoxOutlineBlank: 0,
        CheckCircle: 15,
        CheckCircleOutline: 0,
        Checkroom: 15,
        ChevronLeft: 15,
        ChevronRight: 15,
        ChildCare: 15,
        ChildFriendly: 7,
        ChromeReaderMode: 0,
        Circle: 15,
        CircleNotifications: 0,
        Class: 15,
        CleanHands: 15,
        CleaningServices: 0,
        Clear: 15,
        ClearAll: 15,
        Close: 15,
        CloseFullscreen: 2,
        ClosedCaption: 7,
        ClosedCaptionOff: 0,
        Cloud: 15,
        CloudCircle: 15,
        CloudDone: 15,
        CloudDownload: 7,
        CloudOff: 15,
        CloudQueue: 15,
        CloudUpload: 15,
        Code: 15,
        CodeOff: 15,
        Coffee: 15,
        CoffeeMaker: 15,
        Collections: 15,
        CollectionsBookmark: 0,
        ColorLens: 15,
        Colorize: 15,
        Comment: 15,
        CommentBank: 15,
        Commute: 15,
        Compare: 15,
        CompareArrows: 7,
        CompassCalibration: 0,
        Compress: 15,
        Computer: 15,
        ConfirmationNumber: 0,
        ConnectedTv: 15,
        Construction: 15,
        ContactMail: 15,
        ContactPage: 15,
        ContactPhone: 15,
        ContactSupport: 2,
        Contactless: 15,
        Contacts: 15,
        ContentCopy: 15,
        ContentCut: 15,
        ContentPaste: 15,
        ContentPasteOff: 2,
        ControlCamera: 7,
        ControlPoint: 15,
        CopyAll: 15,
        Copyright: 15,
        Coronavirus: 15,
        CorporateFare: 7,
        Cottage: 15,
        Countertops: 15,
        Create: 15,
        CreateNewFolder: 2,
        CreditCard: 15,
        CreditCardOff: 7,
        CreditScore: 15,
        Crib: 15,
        Crop: 15,
        Crop169: 15,
        Crop32: 15,
        Crop54: 15,
        Crop75: 15,
        CropDin: 15,
        CropFree: 15,
        CropLandscape: 7,
        CropOriginal: 15,
        CropPortrait: 15,
        CropRotate: 15,
        CropSquare: 15,
        Dangerous: 15,
        DarkMode: 15,
        Dashboard: 15,
        DashboardCustomize: 0,
        DataSaverOff: 15,
        DataSaverOn: 15,
        DataUsage: 15,
        DateRange: 15,
        Deck: 15,
        Dehaze: 15,
        Delete: 15,
        DeleteForever: 7,
        DeleteOutline: 7,
        DeleteSweep: 15,
        DeliveryDining: 2,
        DepartureBoard: 2,
        Description: 15,
        DesignServices: 2,
        DesktopMac: 15,
        DesktopWindows: 2,
        Details: 15,
        DeveloperBoard: 2,
        DeveloperBoardOff: 0,
        DeveloperMode: 7,
        DeviceHub: 15,
        DeviceThermostat: 0,
        DeviceUnknown: 7,
        Devices: 15,
        DevicesOther: 15,
        DialerSip: 15,
        Dialpad: 15,
        Dining: 15,
        DinnerDining: 15,
        Directions: 15,
        DirectionsBike: 2,
        DirectionsBoat: 2,
        DirectionsBoatFilled: 0,
        DirectionsBus: 7,
        DirectionsBusFilled: 0,
        DirectionsCar: 7,
        DirectionsCarFilled: 0,
        DirectionsOff: 7,
        DirectionsRailway: 0,
        DirectionsRun: 7,
        DirectionsSubway: 0,
        DirectionsTransit: 0,
        DirectionsWalk: 2,
        DirtyLens: 15,
        DisabledByDefault: 0,
        DiscFull: 15,
        Dns: 15,
        DoDisturb: 15,
        DoDisturbAlt: 15,
        DoDisturbOff: 15,
        DoDisturbOn: 15,
        DoNotDisturb: 15,
        DoNotDisturbAlt: 2,
        DoNotDisturbOff: 2,
        DoNotDisturbOn: 2,
        DoNotStep: 15,
        DoNotTouch: 15,
        Dock: 15,
        DocumentScanner: 2,
        Domain: 15,
        DomainDisabled: 2,
        DomainVerification: 0,
        Done: 15,
        DoneAll: 15,
        DoneOutline: 15,
        DonutLarge: 15,
        DonutSmall: 15,
        DoorBack: 15,
        DoorFront: 15,
        DoorSliding: 15,
        Doorbell: 15,
        DoubleArrow: 15,
        DownhillSkiing: 2,
        Download: 15,
        DownloadDone: 15,
        DownloadForOffline: 0,
        Downloading: 15,
        Drafts: 15,
        DragHandle: 15,
        DragIndicator: 7,
        DriveEta: 15,
        DriveFileMove: 7,
        DriveFolderUpload: 0,
        Dry: 15,
        DryCleaning: 15,
        Duo: 15,
        Dvr: 15,
        DynamicFeed: 15,
        DynamicForm: 15,
        EMobiledata: 15,
        Earbuds: 15,
        EarbudsBattery: 2,
        East: 15,
        Eco: 15,
        EdgesensorHigh: 2,
        EdgesensorLow: 7,
        Edit: 15,
        EditAttributes: 2,
        EditLocation: 15,
        EditLocationAlt: 2,
        EditNotifications: 0,
        EditOff: 15,
        EditRoad: 15,
        EightK: 15,
        EightKPlus: 15,
        EightMp: 15,
        EightteenMp: 15,
        Eject: 15,
        Elderly: 15,
        ElectricBike: 15,
        ElectricCar: 15,
        ElectricMoped: 7,
        ElectricRickshaw: 0,
        ElectricScooter: 2,
        ElectricalServices: 0,
        Elevator: 15,
        ElevenMp: 15,
        Email: 15,
        EmojiEmotions: 7,
        EmojiEvents: 15,
        EmojiFlags: 15,
        EmojiFoodBeverage: 0,
        EmojiNature: 15,
        EmojiObjects: 15,
        EmojiPeople: 15,
        EmojiSymbols: 15,
        EmojiTransportation: 0,
        Engineering: 15,
        EnhancedEncryption: 0,
        Equalizer: 15,
        Error: 15,
        ErrorOutline: 15,
        Escalator: 15,
        EscalatorWarning: 0,
        Euro: 15,
        EuroSymbol: 15,
        EvStation: 15,
        Event: 15,
        EventAvailable: 2,
        EventBusy: 15,
        EventNote: 15,
        EventSeat: 15,
        ExitToApp: 15,
        Expand: 15,
        ExpandLess: 15,
        ExpandMore: 15,
        Explicit: 15,
        Explore: 15,
        ExploreOff: 15,
        Exposure: 15,
        Extension: 15,
        ExtensionOff: 15,
        Face: 15,
        FaceRetouchingOff: 0,
        Facebook: 15,
        FactCheck: 15,
        FamilyRestroom: 2,
        FastForward: 15,
        FastRewind: 15,
        Fastfood: 15,
        Favorite: 15,
        FavoriteBorder: 2,
        FeaturedPlayList: 0,
        FeaturedVideo: 7,
        Feed: 15,
        Feedback: 15,
        Female: 15,
        Fence: 15,
        Festival: 15,
        FiberDvr: 15,
        FiberManualRecord: 0,
        FiberNew: 15,
        FiberPin: 15,
        FiberSmartRecord: 0,
        FileCopy: 15,
        FileDownload: 15,
        FileDownloadDone: 0,
        FileDownloadOff: 2,
        FilePresent: 15,
        FileUpload: 15,
        Filter: 15,
        Filter1: 15,
        Filter2: 15,
        Filter3: 15,
        Filter4: 15,
        Filter5: 15,
        Filter6: 15,
        Filter7: 15,
        Filter8: 15,
        Filter9: 15,
        Filter9Plus: 15,
        FilterAlt: 15,
        FilterBAndW: 15,
        FilterCenterFocus: 0,
        FilterDrama: 15,
        FilterFrames: 15,
        FilterHdr: 15,
        FilterList: 15,
        FilterNone: 15,
        FilterTiltShift: 2,
        FilterVintage: 7,
        FindInPage: 15,
        FindReplace: 15,
        Fingerprint: 15,
        FireExtinguisher: 0,
        Fireplace: 15,
        FirstPage: 15,
        FitScreen: 15,
        FitnessCenter: 7,
        FiveG: 15,
        FiveK: 15,
        FiveKPlus: 15,
        FiveMp: 15,
        FivteenMp: 15,
        Flag: 15,
        Flaky: 15,
        Flare: 15,
        FlashAuto: 15,
        FlashOff: 15,
        FlashOn: 15,
        FlashlightOff: 7,
        FlashlightOn: 15,
        Flatware: 15,
        Flight: 15,
        FlightLand: 15,
        FlightTakeoff: 7,
        Flip: 15,
        FlipCameraAndroid: 0,
        FlipCameraIos: 7,
        FlipToBack: 15,
        FlipToFront: 15,
        Flourescent: 15,
        FlutterDash: 15,
        FmdBad: 15,
        FmdGood: 15,
        Folder: 15,
        FolderOpen: 15,
        FolderShared: 15,
        FolderSpecial: 7,
        FollowTheSigns: 2,
        FontDownload: 15,
        FontDownloadOff: 2,
        FoodBank: 15,
        FormatAlignCenter: 0,
        FormatAlignJustify: 0,
        FormatAlignLeft: 2,
        FormatAlignRight: 0,
        FormatBold: 15,
        FormatClear: 15,
        FormatColorFill: 2,
        FormatColorReset: 0,
        FormatColorText: 2,
        FormatIndentDecrease: 0,
        FormatIndentIncrease: 0,
        FormatItalic: 15,
        FormatLineSpacing: 0,
        FormatListBulleted: 0,
        FormatListNumbered: 0,
        FormatPaint: 15,
        FormatQuote: 15,
        FormatShapes: 15,
        FormatSize: 15,
        FormatStrikethrough: 0,
        FormatUnderlined: 0,
        Forum: 15,
        Forward: 15,
        Forward10: 15,
        Forward30: 15,
        Forward5: 15,
        ForwardToInbox: 2,
        Foundation: 15,
        FourGMobiledata: 2,
        FourGPlusMobiledata: 0,
        FourK: 15,
        FourKPlus: 15,
        FourMp: 15,
        FourteenMp: 15,
        FreeBreakfast: 7,
        Fullscreen: 15,
        FullscreenExit: 2,
        Functions: 15,
        GMobiledata: 15,
        GTranslate: 15,
        Gamepad: 15,
        Games: 15,
        Garage: 15,
        Gavel: 15,
        Gesture: 15,
        GetApp: 15,
        Gif: 15,
        GitHub: 0,
        Gite: 15,
        GolfCourse: 15,
        Google: 0,
        GppBad: 15,
        GppGood: 15,
        GppMaybe: 15,
        GpsFixed: 15,
        GpsNotFixed: 15,
        GpsOff: 15,
        Grade: 15,
        Gradient: 15,
        Grading: 15,
        Grain: 15,
        GraphicEq: 15,
        Grass: 15,
        Grid3x3: 15,
        Grid4x4: 15,
        GridGoldenratio: 2,
        GridOff: 15,
        GridOn: 15,
        GridView: 15,
        Group: 15,
        GroupAdd: 15,
        GroupWork: 15,
        Groups: 15,
        HMobiledata: 15,
        HPlusMobiledata: 2,
        Hail: 15,
        Handyman: 15,
        Hardware: 15,
        Hd: 15,
        HdrAuto: 15,
        HdrAutoSelect: 7,
        HdrEnhancedSelect: 0,
        HdrOff: 15,
        HdrOffSelect: 15,
        HdrOn: 15,
        HdrOnSelect: 15,
        HdrPlus: 15,
        HdrStrong: 15,
        HdrWeak: 15,
        Headphones: 15,
        HeadphonesBattery: 0,
        Headset: 15,
        HeadsetMic: 15,
        HeadsetOff: 15,
        Healing: 15,
        HealthAndSafety: 2,
        Hearing: 15,
        HearingDisabled: 2,
        Height: 15,
        Help: 15,
        HelpCenter: 15,
        HelpOutline: 15,
        Hevc: 15,
        HideImage: 15,
        HideSource: 15,
        HighQuality: 15,
        Highlight: 15,
        HighlightAlt: 15,
        HighlightOff: 15,
        Hiking: 15,
        History: 15,
        HistoryEdu: 15,
        HistoryToggleOff: 0,
        HolidayVillage: 2,
        Home: 15,
        HomeMax: 15,
        HomeMini: 15,
        HomeRepairService: 0,
        HomeWork: 15,
        HorizontalRule: 2,
        HorizontalSplit: 2,
        HotTub: 15,
        Hotel: 15,
        HourglassBottom: 2,
        HourglassDisabled: 0,
        HourglassEmpty: 2,
        HourglassFull: 7,
        HourglassTop: 15,
        House: 15,
        HouseSiding: 15,
        Houseboat: 15,
        HowToReg: 15,
        HowToVote: 15,
        Http: 15,
        Https: 15,
        Hvac: 15,
        IceSkating: 15,
        Icecream: 15,
        Image: 15,
        ImageAspectRatio: 0,
        ImageNotSupported: 0,
        ImageSearch: 15,
        ImagesearchRoller: 0,
        ImportContacts: 2,
        ImportExport: 15,
        ImportantDevices: 0,
        Inbox: 15,
        Info: 15,
        Input: 15,
        InsertChart: 15,
        InsertComment: 7,
        InsertDriveFile: 2,
        InsertEmoticon: 2,
        InsertInvitation: 0,
        InsertLink: 15,
        InsertPhoto: 15,
        Insights: 15,
        Instagram: 0,
        Inventory: 15,
        Inventory2: 15,
        InvertColors: 15,
        InvertColorsOff: 2,
        IosShare: 15,
        Iron: 15,
        Iso: 15,
        Kayaking: 15,
        Keyboard: 15,
        KeyboardAlt: 15,
        KeyboardArrowDown: 0,
        KeyboardArrowLeft: 0,
        KeyboardArrowRight: 0,
        KeyboardArrowUp: 2,
        KeyboardBackspace: 0,
        KeyboardCapslock: 0,
        KeyboardHide: 15,
        KeyboardReturn: 2,
        KeyboardTab: 15,
        KeyboardVoice: 7,
        KingBed: 15,
        Kitchen: 15,
        Kitesurfing: 15,
        Label: 15,
        LabelImportant: 2,
        LabelOff: 15,
        Landscape: 15,
        Language: 15,
        Laptop: 15,
        LaptopChromebook: 0,
        LaptopMac: 15,
        LaptopWindows: 7,
        LastPage: 15,
        Launch: 15,
        Layers: 15,
        LayersClear: 15,
        Leaderboard: 15,
        LeakAdd: 15,
        LeakRemove: 15,
        LegendToggle: 15,
        Lens: 15,
        LensBlur: 15,
        LibraryAdd: 15,
        LibraryAddCheck: 2,
        LibraryBooks: 15,
        LibraryMusic: 15,
        Light: 15,
        LightMode: 15,
        Lightbulb: 15,
        LineStyle: 15,
        LineWeight: 15,
        LinearScale: 15,
        Link: 15,
        LinkOff: 15,
        LinkedCamera: 15,
        LinkedIn: 0,
        Liquor: 15,
        List: 15,
        ListAlt: 15,
        LiveHelp: 15,
        LiveTv: 15,
        Living: 15,
        LocalActivity: 7,
        LocalAirport: 15,
        LocalAtm: 15,
        LocalBar: 15,
        LocalCafe: 15,
        LocalCarWash: 15,
        LocalDining: 15,
        LocalDrink: 15,
        LocalFireDepartment: 0,
        LocalFlorist: 15,
        LocalGasStation: 2,
        LocalGroceryStore: 0,
        LocalHospital: 7,
        LocalHotel: 15,
        LocalLaundryService: 0,
        LocalLibrary: 15,
        LocalMall: 15,
        LocalMovies: 15,
        LocalOffer: 15,
        LocalParking: 15,
        LocalPharmacy: 7,
        LocalPhone: 15,
        LocalPizza: 15,
        LocalPlay: 15,
        LocalPolice: 15,
        LocalPostOffice: 2,
        LocalPrintshop: 2,
        LocalSee: 15,
        LocalShipping: 7,
        LocalTaxi: 15,
        LocationCity: 15,
        LocationDisabled: 0,
        LocationOff: 15,
        LocationOn: 15,
        LocationSearching: 0,
        Lock: 15,
        LockClock: 15,
        LockOpen: 15,
        Login: 15,
        Logout: 15,
        Looks: 15,
        Looks3: 15,
        Looks4: 15,
        Looks5: 15,
        Looks6: 15,
        LooksOne: 15,
        LooksTwo: 15,
        Loop: 15,
        Loupe: 15,
        LowPriority: 15,
        Loyalty: 15,
        LteMobiledata: 7,
        LtePlusMobiledata: 0,
        Luggage: 15,
        LunchDining: 15,
        Mail: 15,
        MailOutline: 15,
        Male: 15,
        ManageAccounts: 2,
        ManageSearch: 15,
        Map: 15,
        MapsHomeWork: 15,
        MapsUgc: 15,
        Margin: 15,
        MarkAsUnread: 15,
        MarkChatRead: 15,
        MarkChatUnread: 2,
        MarkEmailRead: 7,
        MarkEmailUnread: 2,
        Markunread: 15,
        MarkunreadMailbox: 0,
        Masks: 15,
        Maximize: 15,
        MediaBluetoothOff: 0,
        MediaBluetoothOn: 0,
        Mediation: 15,
        MedicalServices: 2,
        Medication: 15,
        MeetingRoom: 15,
        Memory: 15,
        Menu: 15,
        MenuBook: 15,
        MenuOpen: 15,
        MergeType: 15,
        Message: 15,
        Mic: 15,
        MicExternalOff: 2,
        MicExternalOn: 7,
        MicNone: 15,
        MicOff: 15,
        Microwave: 15,
        MilitaryTech: 15,
        Minimize: 15,
        MissedVideoCall: 2,
        Mms: 15,
        MobileFriendly: 2,
        MobileOff: 15,
        MobileScreenShare: 0,
        MobiledataOff: 7,
        Mode: 15,
        ModeComment: 15,
        ModeEdit: 15,
        ModeEditOutline: 2,
        ModeNight: 15,
        ModeStandby: 15,
        ModelTraining: 7,
        MonetizationOn: 2,
        Money: 15,
        MoneyOff: 15,
        MoneyOffCsred: 7,
        Monitor: 15,
        MonitorWeight: 7,
        MonochromePhotos: 0,
        Mood: 15,
        MoodBad: 15,
        Moped: 15,
        More: 15,
        MoreHoriz: 15,
        MoreTime: 15,
        MoreVert: 15,
        MotionPhotosAuto: 0,
        MotionPhotosOff: 2,
        Mouse: 15,
        MoveToInbox: 15,
        Movie: 15,
        MovieCreation: 7,
        MovieFilter: 15,
        Moving: 15,
        Mp: 15,
        MultilineChart: 2,
        MultipleStop: 15,
        Museum: 15,
        MusicNote: 15,
        MusicOff: 15,
        MusicVideo: 15,
        MyLocation: 15,
        Nat: 15,
        Nature: 15,
        NaturePeople: 15,
        NavigateBefore: 2,
        NavigateNext: 15,
        Navigation: 15,
        NearMe: 15,
        NearMeDisabled: 2,
        NearbyError: 15,
        NearbyOff: 15,
        NetworkCell: 15,
        NetworkCheck: 15,
        NetworkLocked: 7,
        NetworkWifi: 15,
        NewReleases: 15,
        NextPlan: 15,
        NextWeek: 15,
        Nfc: 15,
        NightShelter: 15,
        Nightlife: 15,
        Nightlight: 15,
        NightlightRound: 2,
        NightsStay: 15,
        NineK: 15,
        NineKPlus: 15,
        NineMp: 15,
        NineteenMp: 15,
        NoAccounts: 15,
        NoBackpack: 15,
        NoCell: 15,
        NoDrinks: 15,
        NoEncryption: 15,
        NoFlash: 15,
        NoFood: 15,
        NoLuggage: 15,
        NoMeals: 15,
        NoMeetingRoom: 7,
        NoPhotography: 7,
        NoSim: 15,
        NoStroller: 15,
        NoTransfer: 15,
        NordicWalking: 7,
        North: 15,
        NorthEast: 15,
        NorthWest: 15,
        NotAccessible: 7,
        NotInterested: 7,
        NotListedLocation: 0,
        NotStarted: 15,
        Note: 15,
        NoteAdd: 15,
        NoteAlt: 15,
        Notes: 15,
        NotificationAdd: 2,
        Notifications: 7,
        NotificationsActive: 0,
        NotificationsNone: 0,
        NotificationsOff: 0,
        NotificationsPaused: 0,
        OfflineBolt: 15,
        OfflinePin: 15,
        OfflineShare: 15,
        OndemandVideo: 7,
        OneK: 15,
        OneKPlus: 15,
        OneKk: 15,
        OnlinePrediction: 0,
        Opacity: 15,
        OpenInBrowser: 7,
        OpenInFull: 15,
        OpenInNew: 15,
        OpenInNewOff: 15,
        OpenWith: 15,
        OtherHouses: 15,
        Outbound: 15,
        Outbox: 15,
        OutdoorGrill: 15,
        Outlet: 15,
        Padding: 15,
        Pages: 15,
        Pageview: 15,
        Paid: 15,
        Palette: 15,
        PanTool: 15,
        Panorama: 15,
        PanoramaFishEye: 2,
        PanoramaHorizontal: 0,
        PanoramaPhotosphere: 0,
        PanoramaVertical: 0,
        PanoramaWideAngle: 0,
        Paragliding: 15,
        Park: 15,
        PartyMode: 15,
        Password: 15,
        Pattern: 15,
        Pause: 15,
        PauseCircle: 15,
        PauseCircleFilled: 0,
        PauseCircleOutline: 0,
        PausePresentation: 0,
        Payment: 15,
        Payments: 15,
        PedalBike: 15,
        Pending: 15,
        PendingActions: 2,
        People: 15,
        PeopleAlt: 15,
        PeopleOutline: 7,
        PermCameraMic: 7,
        PermContactCalendar: 0,
        PermDataSetting: 2,
        PermIdentity: 15,
        PermMedia: 15,
        PermPhoneMsg: 15,
        PermScanWifi: 15,
        Person: 15,
        PersonAdd: 15,
        PersonAddAlt: 15,
        PersonAddAlt1: 7,
        PersonAddDisabled: 0,
        PersonOff: 15,
        PersonOutline: 7,
        PersonPin: 15,
        PersonPinCircle: 2,
        PersonRemove: 15,
        PersonRemoveAlt1: 0,
        PersonSearch: 15,
        PersonalVideo: 7,
        PestControl: 15,
        PestControlRodent: 0,
        Pets: 15,
        Phone: 15,
        PhoneAndroid: 15,
        PhoneCallback: 7,
        PhoneDisabled: 7,
        PhoneEnabled: 15,
        PhoneForwarded: 2,
        PhoneInTalk: 15,
        PhoneIphone: 15,
        PhoneLocked: 15,
        PhoneMissed: 15,
        PhonePaused: 15,
        Phonelink: 15,
        PhonelinkErase: 2,
        PhonelinkLock: 7,
        PhonelinkOff: 15,
        PhonelinkRing: 7,
        PhonelinkSetup: 2,
        Photo: 15,
        PhotoAlbum: 15,
        PhotoCamera: 15,
        PhotoCameraBack: 2,
        PhotoCameraFront: 0,
        PhotoFilter: 15,
        PhotoLibrary: 15,
        PhotoSizeSelectLarge: 0,
        PhotoSizeSelectSmall: 0,
        Piano: 15,
        PianoOff: 15,
        PictureAsPdf: 15,
        PictureInPicture: 0,
        PictureInPictureAlt: 0,
        PieChart: 15,
        PieChartOutline: 2,
        Pin: 15,
        PinDrop: 15,
        Pinterest: 0,
        PivotTableChart: 2,
        Place: 15,
        Plagiarism: 15,
        PlayArrow: 15,
        PlayCircle: 15,
        PlayCircleFilled: 0,
        PlayCircleOutline: 0,
        PlayDisabled: 15,
        PlayForWork: 15,
        PlayLesson: 15,
        PlaylistAdd: 15,
        PlaylistAddCheck: 0,
        PlaylistPlay: 15,
        Plumbing: 15,
        PlusOne: 15,
        Podcasts: 15,
        PointOfSale: 15,
        Policy: 15,
        Poll: 15,
        Pool: 15,
        PortableWifiOff: 2,
        Portrait: 15,
        PostAdd: 15,
        Power: 15,
        PowerInput: 15,
        PowerOff: 15,
        PowerSettingsNew: 0,
        PregnantWoman: 7,
        PresentToAll: 15,
        Preview: 15,
        PriceChange: 15,
        PriceCheck: 15,
        Print: 15,
        PrintDisabled: 7,
        PriorityHigh: 15,
        PrivacyTip: 15,
        Psychology: 15,
        Public: 15,
        PublicOff: 15,
        Publish: 15,
        PublishedWithChanges: 0,
        PushPin: 15,
        QrCode: 15,
        QrCode2: 15,
        QrCodeScanner: 7,
        QueryBuilder: 15,
        QueryStats: 15,
        QuestionAnswer: 2,
        Queue: 15,
        QueueMusic: 15,
        QueuePlayNext: 7,
        Quickreply: 15,
        Quiz: 15,
        RMobiledata: 15,
        Radar: 15,
        Radio: 15,
        RadioButtonChecked: 0,
        RadioButtonUnchecked: 0,
        RailwayAlert: 15,
        RamenDining: 15,
        RateReview: 15,
        RawOff: 15,
        RawOn: 15,
        ReadMore: 15,
        Receipt: 15,
        ReceiptLong: 15,
        RecentActors: 15,
        Recommend: 15,
        RecordVoiceOver: 2,
        Reddit: 0,
        Redeem: 15,
        Redo: 15,
        ReduceCapacity: 2,
        Refresh: 15,
        RememberMe: 15,
        Remove: 15,
        RemoveCircle: 15,
        RemoveCircleOutline: 0,
        RemoveDone: 15,
        RemoveFromQueue: 2,
        RemoveModerator: 2,
        RemoveRedEye: 15,
        RemoveShoppingCart: 0,
        Reorder: 15,
        Repeat: 15,
        RepeatOn: 15,
        RepeatOne: 15,
        RepeatOneOn: 15,
        Replay: 15,
        Replay10: 15,
        Replay30: 15,
        Replay5: 15,
        ReplayCircleFilled: 0,
        Reply: 15,
        ReplyAll: 15,
        Report: 15,
        ReportGmailerrorred: 0,
        ReportOff: 15,
        ReportProblem: 7,
        RequestPage: 15,
        RequestQuote: 15,
        ResetTv: 15,
        RestartAlt: 15,
        Restaurant: 15,
        RestaurantMenu: 2,
        Restore: 15,
        RestoreFromTrash: 0,
        RestorePage: 15,
        Reviews: 15,
        RiceBowl: 15,
        RingVolume: 15,
        Roofing: 15,
        Room: 15,
        RoomPreferences: 2,
        RoomService: 15,
        Rotate90DegreesCcw: 0,
        RotateLeft: 15,
        RotateRight: 15,
        Router: 15,
        Rowing: 15,
        RssFeed: 15,
        Rsvp: 15,
        Rtt: 15,
        Rule: 15,
        RuleFolder: 15,
        RunCircle: 15,
        RunningWithErrors: 0,
        RvHookup: 15,
        SafetyDivider: 7,
        Sailing: 15,
        Sanitizer: 15,
        Satellite: 15,
        Save: 15,
        SaveAlt: 15,
        SavedSearch: 15,
        Savings: 15,
        Scanner: 15,
        ScatterPlot: 15,
        Schedule: 15,
        ScheduleSend: 15,
        Schema: 15,
        School: 15,
        Science: 15,
        Score: 15,
        ScreenLockLandscape: 0,
        ScreenLockPortrait: 0,
        ScreenLockRotation: 0,
        ScreenRotation: 2,
        ScreenSearchDesktop: 0,
        ScreenShare: 15,
        Screenshot: 15,
        Sd: 15,
        SdCard: 15,
        SdCardAlert: 15,
        SdStorage: 15,
        Search: 15,
        SearchOff: 15,
        Security: 15,
        SecurityUpdate: 2,
        SecurityUpdateGood: 0,
        Segment: 15,
        SelectAll: 15,
        SelfImprovement: 2,
        Sell: 15,
        Send: 15,
        SendAndArchive: 2,
        SendToMobile: 15,
        SensorDoor: 15,
        SensorWindow: 15,
        Sensors: 15,
        SensorsOff: 15,
        SentimentNeutral: 0,
        SentimentSatisfied: 0,
        SetMeal: 15,
        Settings: 15,
        SettingsApplications: 0,
        SettingsBluetooth: 0,
        SettingsBrightness: 0,
        SettingsCell: 15,
        SettingsEthernet: 0,
        SettingsInputAntenna: 0,
        SettingsInputHdmi: 0,
        SettingsInputSvideo: 0,
        SettingsOverscan: 0,
        SettingsPhone: 7,
        SettingsPower: 7,
        SettingsRemote: 2,
        SettingsSuggest: 2,
        SettingsVoice: 7,
        SevenK: 15,
        SevenKPlus: 15,
        SevenMp: 15,
        SeventeenMp: 15,
        Share: 15,
        ShareLocation: 7,
        Shield: 15,
        Shop: 15,
        Shop2: 15,
        ShopTwo: 15,
        ShoppingBag: 15,
        ShoppingBasket: 2,
        ShoppingCart: 15,
        ShortText: 15,
        Shortcut: 15,
        ShowChart: 15,
        Shower: 15,
        Shuffle: 15,
        ShuffleOn: 15,
        ShutterSpeed: 15,
        Sick: 15,
        SignalCellular0Bar: 0,
        SignalCellular1Bar: 0,
        SignalCellular2Bar: 0,
        SignalCellular3Bar: 0,
        SignalCellular4Bar: 0,
        SignalCellularAlt: 0,
        SignalCellularNoSim: 0,
        SignalCellularNodata: 0,
        SignalCellularNull: 0,
        SignalCellularOff: 0,
        SignalWifi0Bar: 2,
        SignalWifi1Bar: 2,
        SignalWifi1BarLock: 0,
        SignalWifi2Bar: 2,
        SignalWifi2BarLock: 0,
        SignalWifi3Bar: 2,
        SignalWifi3BarLock: 0,
        SignalWifi4Bar: 2,
        SignalWifi4BarLock: 0,
        SignalWifiBad: 7,
        SignalWifiOff: 7,
        SimCard: 15,
        SimCardAlert: 15,
        SimCardDownload: 2,
        SingleBed: 15,
        Sip: 15,
        SixK: 15,
        SixKPlus: 15,
        SixMp: 15,
        SixteenMp: 15,
        SixtyFps: 15,
        SixtyFpsSelect: 2,
        Skateboarding: 7,
        SkipNext: 15,
        SkipPrevious: 15,
        Sledding: 15,
        Slideshow: 15,
        SlowMotionVideo: 2,
        SmartButton: 15,
        SmartDisplay: 15,
        SmartScreen: 15,
        SmartToy: 15,
        Smartphone: 15,
        SmokeFree: 15,
        SmokingRooms: 15,
        Sms: 15,
        SmsFailed: 15,
        SnippetFolder: 7,
        Snooze: 15,
        Snowboarding: 15,
        Snowmobile: 15,
        Snowshoeing: 15,
        Soap: 15,
        SocialDistance: 2,
        Sort: 15,
        SortByAlpha: 15,
        Source: 15,
        South: 15,
        SouthEast: 15,
        SouthWest: 15,
        Spa: 15,
        SpaceBar: 15,
        Speaker: 15,
        SpeakerGroup: 15,
        SpeakerNotes: 15,
        SpeakerNotesOff: 2,
        SpeakerPhone: 15,
        Speed: 15,
        Spellcheck: 15,
        Splitscreen: 15,
        Sports: 15,
        SportsBar: 15,
        SportsBaseball: 2,
        SportsBasketball: 0,
        SportsCricket: 7,
        SportsEsports: 7,
        SportsFootball: 2,
        SportsGolf: 15,
        SportsHandball: 2,
        SportsHockey: 15,
        SportsKabaddi: 7,
        SportsMma: 15,
        SportsMotorsports: 0,
        SportsRugby: 15,
        SportsScore: 15,
        SportsSoccer: 15,
        SportsTennis: 15,
        SportsVolleyball: 0,
        SquareFoot: 15,
        StackedBarChart: 2,
        StackedLineChart: 0,
        Stairs: 15,
        Star: 15,
        StarBorder: 15,
        StarBorderPurple500: 0,
        StarHalf: 15,
        StarOutline: 15,
        StarPurple500: 7,
        StarRate: 15,
        Stars: 15,
        StayCurrentLandscape: 0,
        StayCurrentPortrait: 0,
        StayPrimaryLandscape: 0,
        StayPrimaryPortrait: 0,
        StickyNote2: 15,
        Stop: 15,
        StopCircle: 15,
        StopScreenShare: 2,
        Storage: 15,
        Store: 15,
        StoreMallDirectory: 0,
        Storefront: 15,
        Storm: 15,
        Straighten: 15,
        Stream: 15,
        Streetview: 15,
        StrikethroughS: 2,
        Stroller: 15,
        Style: 15,
        Subject: 15,
        Subscript: 15,
        Subscriptions: 7,
        Subtitles: 15,
        SubtitlesOff: 15,
        Subway: 15,
        Summarize: 15,
        Superscript: 15,
        SupervisedUserCircle: 0,
        SupervisorAccount: 0,
        Support: 15,
        SupportAgent: 15,
        Surfing: 15,
        SurroundSound: 7,
        SwapCalls: 15,
        SwapHoriz: 15,
        SwapHorizontalCircle: 0,
        SwapVert: 15,
        SwapVerticalCircle: 0,
        Swipe: 15,
        SwitchAccount: 7,
        SwitchCamera: 15,
        SwitchLeft: 15,
        SwitchRight: 15,
        SwitchVideo: 15,
        Sync: 15,
        SyncAlt: 15,
        SyncDisabled: 15,
        SyncProblem: 15,
        SystemSecurityUpdate: 0,
        SystemUpdate: 15,
        SystemUpdateAlt: 2,
        Tab: 15,
        TabUnselected: 7,
        TableChart: 15,
        TableRows: 15,
        TableView: 15,
        Tablet: 15,
        TabletAndroid: 7,
        TabletMac: 15,
        Tag: 15,
        TagFaces: 15,
        TakeoutDining: 7,
        TapAndPlay: 15,
        Tapas: 15,
        Task: 15,
        TaskAlt: 15,
        TaxiAlert: 15,
        Telegram: 0,
        TenMp: 15,
        Terrain: 15,
        TextFields: 15,
        TextFormat: 15,
        TextRotateUp: 15,
        TextRotateVertical: 0,
        TextRotationAngleup: 0,
        TextRotationDown: 0,
        TextRotationNone: 0,
        TextSnippet: 15,
        Textsms: 15,
        Texture: 15,
        TheaterComedy: 7,
        Theaters: 15,
        Thermostat: 15,
        ThermostatAuto: 2,
        ThirteenMp: 15,
        ThirtyFps: 15,
        ThirtyFpsSelect: 2,
        ThreeDRotation: 2,
        ThreeGMobiledata: 0,
        ThreeK: 15,
        ThreeKPlus: 15,
        ThreeMp: 15,
        ThreeP: 15,
        ThreeSixty: 15,
        ThumbDown: 15,
        ThumbDownAlt: 15,
        ThumbDownOffAlt: 2,
        ThumbUp: 15,
        ThumbUpAlt: 15,
        ThumbUpOffAlt: 7,
        ThumbsUpDown: 15,
        TimeToLeave: 15,
        Timelapse: 15,
        Timeline: 15,
        Timer: 15,
        Timer10: 15,
        Timer10Select: 7,
        Timer3: 15,
        Timer3Select: 15,
        TimerOff: 15,
        TimesOneMobiledata: 0,
        Title: 15,
        Toc: 15,
        Today: 15,
        ToggleOff: 15,
        ToggleOn: 15,
        Toll: 15,
        Tonality: 15,
        Topic: 15,
        TouchApp: 15,
        Tour: 15,
        Toys: 15,
        TrackChanges: 15,
        Traffic: 15,
        Train: 15,
        Tram: 15,
        Transform: 15,
        Transgender: 15,
        TransitEnterexit: 0,
        Translate: 15,
        TravelExplore: 7,
        TrendingDown: 15,
        TrendingFlat: 15,
        TrendingUp: 15,
        TripOrigin: 15,
        Try: 15,
        Tty: 15,
        Tune: 15,
        Tungsten: 15,
        TurnedIn: 15,
        TurnedInNot: 15,
        Tv: 15,
        TvOff: 15,
        TwelveMp: 15,
        TwentyFourMp: 15,
        TwentyOneMp: 15,
        TwentyThreeMp: 7,
        TwentyTwoMp: 15,
        TwentyZeroMp: 15,
        Twitter: 0,
        TwoK: 15,
        TwoKPlus: 15,
        TwoMp: 15,
        TwoWheeler: 15,
        Umbrella: 15,
        Unarchive: 15,
        Undo: 15,
        UnfoldLess: 15,
        UnfoldMore: 15,
        Unpublished: 15,
        Unsubscribe: 15,
        Upcoming: 15,
        Update: 15,
        UpdateDisabled: 2,
        Upgrade: 15,
        Upload: 15,
        UploadFile: 15,
        Usb: 15,
        UsbOff: 15,
        Verified: 15,
        VerifiedUser: 15,
        VerticalAlignBottom: 0,
        VerticalAlignCenter: 0,
        VerticalAlignTop: 0,
        VerticalSplit: 7,
        Vibration: 15,
        VideoCall: 15,
        VideoCameraBack: 2,
        VideoCameraFront: 0,
        VideoLabel: 15,
        VideoLibrary: 15,
        VideoSettings: 7,
        VideoStable: 15,
        Videocam: 15,
        VideocamOff: 15,
        VideogameAsset: 2,
        VideogameAssetOff: 0,
        ViewAgenda: 15,
        ViewArray: 15,
        ViewCarousel: 15,
        ViewColumn: 15,
        ViewComfy: 15,
        ViewCompact: 15,
        ViewDay: 15,
        ViewHeadline: 15,
        ViewInAr: 15,
        ViewList: 15,
        ViewModule: 15,
        ViewQuilt: 15,
        ViewSidebar: 15,
        ViewStream: 15,
        ViewWeek: 15,
        Vignette: 15,
        Villa: 15,
        Visibility: 15,
        VisibilityOff: 7,
        VoiceChat: 15,
        VoiceOverOff: 15,
        Voicemail: 15,
        VolumeDown: 15,
        VolumeMute: 15,
        VolumeOff: 15,
        VolumeUp: 15,
        VolunteerActivism: 0,
        VpnKey: 15,
        VpnLock: 15,
        Vrpano: 15,
        Wallpaper: 15,
        Warning: 15,
        WarningAmber: 15,
        Wash: 15,
        Watch: 15,
        WatchLater: 15,
        Water: 15,
        WaterDamage: 15,
        WaterfallChart: 2,
        Waves: 15,
        WbAuto: 15,
        WbCloudy: 15,
        WbIncandescent: 2,
        WbIridescent: 15,
        WbShade: 15,
        WbSunny: 15,
        WbTwilight: 15,
        Wc: 15,
        Web: 15,
        WebAsset: 15,
        WebAssetOff: 15,
        Weekend: 15,
        West: 15,
        WhatsApp: 0,
        Whatshot: 15,
        WheelchairPickup: 0,
        WhereToVote: 15,
        Widgets: 15,
        Wifi: 15,
        WifiCalling: 15,
        WifiCalling3: 15,
        WifiLock: 15,
        WifiOff: 15,
        WifiProtectedSetup: 0,
        WifiTethering: 7,
        WifiTetheringOff: 0,
        Window: 15,
        WineBar: 15,
        Work: 15,
        WorkOff: 15,
        WorkOutline: 15,
        Workspaces: 15,
        WrapText: 15,
        WrongLocation: 7,
        Wysiwyg: 15,
        Yard: 15,
        YouTube: 0,
        YoutubeSearchedFor: 0,
        ZoomIn: 15,
        ZoomOut: 15,
        ZoomOutMap: 15,
      }),
      (Fn = Object.keys(Pn)),
      (In = {
        15: [`Filled`, `TwoTone`, `Sharp`, `Rounded`, `Outlined`],
        7: [`Filled`, `TwoTone`, `Sharp`, `Rounded`],
        2: [`Filled`, `Sharp`],
      }),
      (Ln = Object.keys(In).map((e) => `iconStyle${e}`)),
      (Rn = Fn.reduce((e, t) => ((e[t.toLowerCase()] = t), e), {})),
      (jn.displayName = `Material`),
      (jn.defaultProps = {
        width: 24,
        height: 24,
        iconSelection: `Home`,
        iconSearch: `Home`,
        color: `#66F`,
        selectByList: !0,
        weight: `Filled`,
        mirrored: !1,
      }),
      D(jn, {
        selectByList: {
          type: q.Boolean,
          title: `Select`,
          enabledTitle: `List`,
          disabledTitle: `Search`,
          defaultValue: jn.defaultProps.selectByList,
        },
        iconSelection: {
          type: q.Enum,
          options: Fn,
          defaultValue: jn.defaultProps.iconSelection,
          title: `Name`,
          hidden: ({ selectByList: e }) => !e,
          description: `Find every icon name on the [Material site](https://fonts.google.com/icons)`,
        },
        iconSearch: {
          type: q.String,
          title: `Name`,
          placeholder: `Menu, Wifi, Box…`,
          hidden: ({ selectByList: e }) => e,
        },
        mirrored: {
          type: q.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: jn.defaultProps.mirrored,
        },
        color: { type: q.Color, title: `Color`, defaultValue: jn.defaultProps.color },
        ...Object.keys(In).reduce(
          (e, t) => (
            (e[`iconStyle${t}`] = {
              type: q.Enum,
              title: `Style`,
              defaultValue: `Filled`,
              options: In[t],
              hidden: (e) => Mn(e, t),
            }),
            e
          ),
          {}
        ),
        ...On,
      }));
  });
function Bn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn = e(() => {
    (v(),
      V(),
      E(),
      l(),
      zn(),
      (Vn = B(jn)),
      (Hn = [`YSh1YrWnF`, `OlksfmTMw`, `ziOmD16nz`, `EuQx_ZRas`]),
      (Un = `framer-AwrgX`),
      (Wn = {
        EuQx_ZRas: `framer-v-vvsmkv`,
        OlksfmTMw: `framer-v-1wwt652`,
        YSh1YrWnF: `framer-v-1apkc3c`,
        ziOmD16nz: `framer-v-1i6tiss`,
      }),
      (Gn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Kn = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (qn = {
        "minus-disabled": `EuQx_ZRas`,
        "plus-disabled": `ziOmD16nz`,
        minus: `OlksfmTMw`,
        plus: `YSh1YrWnF`,
      }),
      (Jn = C.create(r)),
      (Yn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: qn[r.variant] ?? r.variant ?? `YSh1YrWnF`,
      })),
      (Xn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Zn = j(
        p(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: o } = _e();
          ue();
          let { style: s, className: c, layoutId: l, variant: u, ...d } = Yn(e),
            {
              baseVariant: p,
              classNames: m,
              clearLoadingGesture: h,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: y,
              setGestureState: x,
              setVariant: S,
              variants: w,
            } = te({
              cycleOrder: Hn,
              defaultVariant: `YSh1YrWnF`,
              ref: r,
              variant: u,
              variantClassNames: Wn,
            }),
            T = Xn(e, w),
            E = I(Un);
          return f(ee, {
            id: l ?? i,
            children: f(Jn, {
              animate: w,
              initial: !1,
              children: f(Kn, {
                value: Gn,
                children: f(C.div, {
                  ...d,
                  ..._,
                  className: I(E, `framer-1apkc3c`, c, m),
                  "data-framer-name": `plus`,
                  layoutDependency: T,
                  layoutId: `YSh1YrWnF`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...s,
                  },
                  ...Bn(
                    {
                      EuQx_ZRas: { "data-framer-name": `minus-disabled` },
                      OlksfmTMw: { "data-framer-name": `minus` },
                      ziOmD16nz: { "data-framer-name": `plus-disabled` },
                    },
                    p,
                    v
                  ),
                  children: f(K, {
                    children: f(A, {
                      className: `framer-1ptt6tj-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: T,
                      layoutId: `S2LbTfYVg-container`,
                      nodeId: `S2LbTfYVg`,
                      rendersWithMotion: !0,
                      scopeId: `edqZIY9mg`,
                      children: f(jn, {
                        color: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                        height: `100%`,
                        iconSearch: `Home`,
                        iconSelection: `Add`,
                        iconStyle15: `Sharp`,
                        iconStyle2: `Filled`,
                        iconStyle7: `Filled`,
                        id: `S2LbTfYVg`,
                        layoutId: `S2LbTfYVg`,
                        mirrored: !1,
                        selectByList: !0,
                        style: { height: `100%`, width: `100%` },
                        width: `100%`,
                        ...Bn(
                          {
                            EuQx_ZRas: {
                              color: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(245, 163, 190))`,
                              iconSelection: `Remove`,
                            },
                            OlksfmTMw: { iconSelection: `Remove` },
                            ziOmD16nz: {
                              color: `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(245, 163, 190))`,
                            },
                          },
                          p,
                          v
                        ),
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
          `.framer-AwrgX.framer-1tg6hzx, .framer-AwrgX .framer-1tg6hzx { display: block; }`,
          `.framer-AwrgX.framer-1apkc3c { height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AwrgX .framer-1ptt6tj-container { flex: none; height: 18px; left: calc(50.00000000000002% - 18px / 2); position: absolute; top: calc(50.00000000000002% - 18px / 2); width: 18px; }`,
        ],
        `framer-AwrgX`
      )),
      (Zn.displayName = `FC Quantity / UI Buttons`),
      (Zn.defaultProps = { height: 40, width: 40 }),
      D(Zn, {
        variant: {
          options: [`YSh1YrWnF`, `OlksfmTMw`, `ziOmD16nz`, `EuQx_ZRas`],
          optionTitles: [`plus`, `minus`, `plus-disabled`, `minus-disabled`],
          title: `Variant`,
          type: q.Enum,
        },
      }),
      ce(Zn, [{ explicitInter: !0, fonts: [] }, ...Vn], { supportsExplicitInterCodegen: !0 }));
  }),
  $n,
  er,
  tr,
  nr,
  rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr = e(() => {
    (v(),
      V(),
      E(),
      l(),
      pn(),
      hn(),
      Qn(),
      ($n = B(Zn)),
      (er = B(mn)),
      (tr = B(fn)),
      (nr = `framer-bpiwL`),
      (rr = { Mwrox037f: `framer-v-1qf1sg3` }),
      (ir = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (ar = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (or = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (sr = C.create(r)),
      (cr = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        bVhYNmEzi: n ?? i.bVhYNmEzi,
      })),
      (lr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ur = j(
        p(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: o } = _e();
          ue();
          let { style: s, className: c, layoutId: l, variant: u, bVhYNmEzi: d, ...p } = cr(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: v,
              gestureHandlers: y,
              gestureVariant: x,
              isLoading: S,
              setGestureState: w,
              setVariant: T,
              variants: E,
            } = te({ defaultVariant: `Mwrox037f`, ref: r, variant: u, variantClassNames: rr }),
            D = lr(e, E),
            O = I(nr);
          return f(ee, {
            id: l ?? i,
            children: f(sr, {
              animate: E,
              initial: !1,
              children: f(or, {
                value: ir,
                children: _(C.div, {
                  ...p,
                  ...y,
                  className: I(O, `framer-1qf1sg3`, c, h),
                  "data-border": !0,
                  "data-framer-name": `Variant 1`,
                  layoutDependency: D,
                  layoutId: `Mwrox037f`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-ae8ee2a3-db43-4346-aa65-c9685dfafd51, rgba(231, 236, 229, 0.64))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    ...s,
                  },
                  children: [
                    f(K, {
                      children: f(A, {
                        className: `framer-svwfll-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `xxJ3GUZlF-container`,
                        nodeId: `xxJ3GUZlF`,
                        rendersWithMotion: !0,
                        scopeId: `CHZlnmGrY`,
                        children: f(mn, {
                          activeContent: [
                            f(K, {
                              height: 40,
                              width: `40px`,
                              children: f(A, {
                                className: `framer-1itl6v4-container`,
                                "data-framer-name": `minus-active`,
                                inComponentSlot: !0,
                                layoutDependency: D,
                                layoutId: `H6hi73cTr-container`,
                                name: `minus-active`,
                                nodeId: `H6hi73cTr`,
                                rendersWithMotion: !0,
                                scopeId: `CHZlnmGrY`,
                                children: f(Zn, {
                                  height: `100%`,
                                  id: `H6hi73cTr`,
                                  layoutId: `H6hi73cTr`,
                                  name: `minus-active`,
                                  variant: ar(`OlksfmTMw`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          disabledContent: [
                            f(K, {
                              height: 40,
                              width: `40px`,
                              children: f(A, {
                                className: `framer-dn47hk-container`,
                                "data-framer-name": `minus-disabled`,
                                inComponentSlot: !0,
                                layoutDependency: D,
                                layoutId: `dGiU4uJv9-container`,
                                name: `minus-disabled`,
                                nodeId: `dGiU4uJv9`,
                                rendersWithMotion: !0,
                                scopeId: `CHZlnmGrY`,
                                children: f(Zn, {
                                  height: `100%`,
                                  id: `dGiU4uJv9`,
                                  layoutId: `dGiU4uJv9`,
                                  name: `minus-disabled`,
                                  variant: ar(`EuQx_ZRas`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          height: `100%`,
                          id: `xxJ3GUZlF`,
                          isPlus: `minus`,
                          layoutId: `xxJ3GUZlF`,
                          shopifyProductID: d,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(K, {
                      children: f(A, {
                        className: `framer-8oqc20-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `pdd_HkALN-container`,
                        nodeId: `pdd_HkALN`,
                        rendersWithMotion: !0,
                        scopeId: `CHZlnmGrY`,
                        children: f(fn, {
                          font: {
                            fontFamily: `"Chillax", "Chillax Placeholder", sans-serif`,
                            fontSize: `20px`,
                            fontStyle: `normal`,
                            fontWeight: 500,
                            letterSpacing: `0em`,
                            lineHeight: `1em`,
                          },
                          height: `100%`,
                          id: `pdd_HkALN`,
                          layoutId: `pdd_HkALN`,
                          shopifyProductID: d,
                          style: { height: `100%`, width: `100%` },
                          textColor: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    f(K, {
                      children: f(A, {
                        className: `framer-1n0l2y5-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: D,
                        layoutId: `gYRhU5ckB-container`,
                        nodeId: `gYRhU5ckB`,
                        rendersWithMotion: !0,
                        scopeId: `CHZlnmGrY`,
                        children: f(mn, {
                          activeContent: [
                            f(K, {
                              height: 40,
                              width: `40px`,
                              children: f(A, {
                                className: `framer-ld28pd-container`,
                                "data-framer-name": `plus-active`,
                                inComponentSlot: !0,
                                layoutDependency: D,
                                layoutId: `an04XgmMp-container`,
                                name: `plus-active`,
                                nodeId: `an04XgmMp`,
                                rendersWithMotion: !0,
                                scopeId: `CHZlnmGrY`,
                                children: f(Zn, {
                                  height: `100%`,
                                  id: `an04XgmMp`,
                                  layoutId: `an04XgmMp`,
                                  name: `plus-active`,
                                  variant: ar(`YSh1YrWnF`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          disabledContent: [
                            f(K, {
                              height: 40,
                              width: `40px`,
                              children: f(A, {
                                className: `framer-34pcvo-container`,
                                "data-framer-name": `plus-disabled`,
                                inComponentSlot: !0,
                                layoutDependency: D,
                                layoutId: `Wsp0S9ow5-container`,
                                name: `plus-disabled`,
                                nodeId: `Wsp0S9ow5`,
                                rendersWithMotion: !0,
                                scopeId: `CHZlnmGrY`,
                                children: f(Zn, {
                                  height: `100%`,
                                  id: `Wsp0S9ow5`,
                                  layoutId: `Wsp0S9ow5`,
                                  name: `plus-disabled`,
                                  variant: ar(`ziOmD16nz`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          height: `100%`,
                          id: `gYRhU5ckB`,
                          isPlus: `plus`,
                          layoutId: `gYRhU5ckB`,
                          shopifyProductID: d,
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
          `.framer-bpiwL.framer-8m8lym, .framer-bpiwL .framer-8m8lym { display: block; }`,
          `.framer-bpiwL.framer-1qf1sg3 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 56px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 165px; }`,
          `.framer-bpiwL .framer-svwfll-container, .framer-bpiwL .framer-1n0l2y5-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-bpiwL .framer-1itl6v4-container, .framer-bpiwL .framer-dn47hk-container, .framer-bpiwL .framer-ld28pd-container, .framer-bpiwL .framer-34pcvo-container { height: auto; position: relative; width: auto; }`,
          `.framer-bpiwL .framer-8oqc20-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-bpiwL[data-border="true"]::after, .framer-bpiwL [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-bpiwL`
      )),
      (ur.displayName = `FC Quantity / Quantity Selector`),
      (ur.defaultProps = { height: 56, width: 165 }),
      D(ur, {
        bVhYNmEzi: { defaultValue: ``, title: `Product ID`, type: q.String },
        onbVhYNmEziChange: { changes: `bVhYNmEzi`, type: q.ChangeHandler },
      }),
      ce(
        ur,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `Chillax`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Chillax`,
                url: `../../assets/misc/WZY5PMNTII6NKOB2TTIAX7QVAWMSY2DQ.woff2`,
                weight: `500`,
              },
            ],
          },
          ...$n,
          ...er,
          ...tr,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (ur.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(Zn, {}, t)])) }));
  });
function fr(e) {
  if (!c.isValidElement(e)) return e;
  let t = { ...e.props, rendersWithMotion: !1, layoutId: void 0, scopeId: void 0 };
  return (
    e.props.children && (t.children = c.Children.map(e.props.children, fr)),
    c.cloneElement(e, t)
  );
}
var pr = e(() => {
  l();
});
function mr() {
  if (u !== void 0) {
    (Ne(), Be());
    try {
      let e = history.pushState,
        t = history.replaceState;
      ((history.pushState = function () {
        (e.apply(this, arguments), Ne(), Be());
      }),
        (history.replaceState = function () {
          (t.apply(this, arguments), Ne(), Be());
        }),
        u.addEventListener(`popstate`, () => {
          (Ne(), Be());
        }));
    } catch (e) {
      console.error(`Error setting up history listeners:`, e);
    }
  }
}
var hr = e(() => {
  (x(), We(), mr());
});
function gr(e) {
  let {
      shopifyProductID: n,
      available: r,
      OutOfStock: a,
      SelectVariant: c,
      LoadingState: l,
      maxQuantity: d,
      shopifyProductVariantId: p,
      BuyNowATC: m,
      title: h = `Add to Cart`,
      required: v = !1,
      openCart: y = !0,
    } = e,
    [b, x] = i(),
    [S, C] = i(),
    [w, T] = i(!0),
    [ee, E] = i(!1),
    [D, O] = i(!0),
    [A, j] = i(!1),
    [M, te] = i(),
    N = Le(),
    [ne, P] = i(() => {
      if (u !== void 0) {
        let e = u.__fc_activeSubscription?.[n];
        if (e?.subscriptionId) return e.subscriptionId;
      }
      return `one-time`;
    }),
    [F, I] = i(),
    [re, ie] = i(),
    [L, R] = i(1),
    z = g(!1),
    [B, V] = i(!1),
    [H, ae] = i(!1),
    [U, oe] = i(!1),
    [W, G] = i(0);
  s(() => {
    if (!N) return;
    let t = (t) => {
      t.detail.shopifyProductID === `gid://shopify/Product/${e.shopifyProductID}` &&
        (V(t.detail.autoSelectFirst), (u.__fc_autoSelectFirst = t.detail.autoSelectFirst));
    };
    return (
      document.addEventListener(`auto_select_first_flag`, t),
      () => {
        document.removeEventListener(`auto_select_first_flag`, t);
      }
    );
  }, [N]);
  let se = o(
      (e) =>
        !e || e === `404`
          ? 0
          : typeof e.totalInventory == `number`
            ? e.totalInventory
            : je(e, `variants.edges`, []).reduce(
                (e, { node: t }) => e + (t.quantityAvailable || 0),
                0
              ),
      []
    ),
    K = o((e) => (e ? (e.availableForSale ? !0 : e.quantityAvailable > 0) : !1), []);
  (s(() => {
    if (re && N) {
      let e = new CustomEvent(`errorChanged`, { detail: re });
      u.dispatchEvent(e);
    }
  }, [re]),
    s(() => {
      if (!N || !u.shopXtools) return;
      let e = localStorage.getItem(`shopX_cart_id`);
      e &&
        u.shopXtools
          .handleCartMutation(He, { cartId: e })
          .then((e) => {
            e?.cart &&
              (I(e.cart),
              (u.shopXtools.cart = e.cart),
              localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cart)));
          })
          .catch((e) => {
            (localStorage.removeItem(`shopX_cart_id`), localStorage.removeItem(`shopXtools.cart`));
          });
      let t = u.__fc_activeSubscription?.[n];
      t?.subscriptionId && P(t.subscriptionId);
      let r = (e) => {
        (e.detail?.productId && e.detail.productId !== n) || P(e.detail.subscriptionId);
      };
      return (
        document.addEventListener(`subscription__selection-sync`, r),
        () => document.removeEventListener(`subscription__selection-sync`, r)
      );
    }, [N, n]));
  let ce = (e) => {
    R(e.detail);
  };
  (s(() => {
    if (N)
      return (
        u.addEventListener(`FcQuantitySelectorchanges`, ce),
        () => {
          u.removeEventListener(`FcQuantitySelectorchanges`, ce);
        }
      );
  }, [N]),
    s(() => {
      !N ||
        !b ||
        z.current ||
        ((S || b.variants?.edges?.length > 0) &&
          (Ye({
            variant: S || b.variants?.edges?.[0]?.node,
            product: b,
            currency:
              S?.price?.currencyCode || b.variants?.edges?.[0]?.node?.price?.currencyCode || `USD`,
          }),
          (z.current = !0)));
    }, [N, b, S]),
    s(() => {
      if (!N) return;
      let e = async (e) => {
        let { countryCode: t } = e.detail;
        te(t);
        let n = localStorage.getItem(`shopX_cart_id`);
        if (n)
          try {
            let e = await u.shopXtools.handleCartMutation(Qe, { cartId: n, countryCode: t });
            e?.cartBuyerIdentityUpdate?.cart
              ? ((u.shopXtools.cart = e.cartBuyerIdentityUpdate.cart),
                u.dispatchEvent(new Event(`shopXtools-cart-update`)))
              : u.dispatchEvent(
                  new CustomEvent(`errorChanged`, {
                    detail: `Failed to update cart with new country code`,
                  })
                );
          } catch (e) {
            u.dispatchEvent(
              new CustomEvent(`errorChanged`, {
                detail: e.message || `Failed to update cart currency`,
              })
            );
          }
      };
      return (
        u.addEventListener(`currency_changed`, e),
        () => {
          u.removeEventListener(`currency_changed`, e);
        }
      );
    }, [N]),
    s(() => {
      if (!N) return;
      let e = (e) => {
          if (!e) return !1;
          let t = je(e, `variants.edges`, []);
          if (t.length === 1) {
            let e = t[0].node;
            return (C(e), H || (u.__fc_activeVariantId = e.id), T(K(e)), E(!1), !0);
          }
          return !1;
        },
        t = (t) => {
          if (b && b !== `404`) {
            let e = b?.id,
              n = t?.node?.id;
            if (e && n && e === n) return;
          }
          if (t) {
            let n = t.node;
            if ((x(n || `404`), n?.handle && me(n.handle), p && n)) {
              let e = `gid://shopify/ProductVariant/${p}`,
                t = je(n, `variants.edges`, []).find(({ node: t }) => t.id === e);
              if (t) {
                (C(t.node), H || (u.__fc_activeVariantId = t.node.id), T(K(t.node)), E(!1));
                return;
              }
            }
            if (e(n)) return;
            if (B && !H) {
              let e = n.variants.edges.find((e) => e.node.availableForSale)?.node;
              if (e) {
                (C(e), H || (u.__fc_activeVariantId = e.id), T(K(e)), E(!1));
                return;
              }
            }
            let r = je(n, `variants.edges`, []),
              i = r.length > 1;
            (je(n, `options`, []).length, S || E(!B && i ? !0 : !p && i));
            let a = r.some(({ node: e }) => K(e));
            (T(a), a || E(!1));
          } else (x(`404`), T(!1));
        };
      if (u.shopXtools?.products && Array.isArray(u.shopXtools.products) && !b) {
        let e = u.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
        e && t(e);
      }
      let r = () => {
          if (u?.shopXtools?.products) {
            let e = u.shopXtools.products.find(
              ({ node: e }) => e.id === `gid://shopify/Product/${n}`
            );
            (!b || b === `404`) && t(e);
          }
        },
        i = (e) => {
          if (e.detail.productId === `gid://shopify/Product/${n}` && e.detail) {
            let t = je(b, `options`, []) || [],
              n = Array.isArray(e.detail.selectedOptions) ? e.detail.selectedOptions : [],
              r = new Set(n.map((e) => e?.name).filter(Boolean)),
              i = t.length > 0 && t.every((e) => r.has(e.name)),
              a = e.detail.isCompleteVariant === !0 || i;
            if (!a) {
              (ae(!0), C(null), (u.__fc_activeVariantId = void 0), E(!0));
              return;
            }
            (C(e.detail),
              ae(!0),
              (u.__fc_activeVariantId = e.detail.id),
              T(e.detail.quantityAvailable > 0),
              J(e.detail.id) === e.detail.quantityAvailable && e.detail.quantityAvailable > 0
                ? oe(!0)
                : oe(!1),
              E(!a));
          }
        };
      return (
        document.addEventListener(`data__products-ready`, r),
        document.addEventListener(`product__active-variant__changed`, i),
        () => {
          (document.removeEventListener(`data__products-ready`, r),
            document.removeEventListener(`product__active-variant__changed`, i));
        }
      );
    }, [n, p, S, N, se, B, b]),
    s(() => {
      if (!b || b === `404`) return;
      let e = je(b, `variants.edges`, []).length > 1;
      E(e && !S && !p);
    }, [b, S, p]));
  let [le, ue] = i(!1),
    de = () => {
      if (!e.required) return (e.required, !0);
      let t = `fc_cart_attributes_${e.shopifyProductID}`,
        n = sessionStorage.getItem(t);
      if (!n) return !1;
      try {
        let e = JSON.parse(n);
        return Object.values(e).some((e) => e && String(e).trim() !== ``);
      } catch {
        return !1;
      }
    };
  (s(() => {
    if (e.required) {
      let t = de();
      (e.required, ue(!t));
    }
  }, [e.required, e.shopifyProductID]),
    s(() => {
      if (e.required) {
        let e = (e) => {
          e.detail;
          let t = de();
          ue(!t);
        };
        return (
          u.addEventListener(`orderFieldChanged`, e),
          () => u.removeEventListener(`orderFieldChanged`, e)
        );
      }
    }, [e.required]));
  let [fe, q] = i(!1);
  s(() => {
    let e = () => {
      let e = `fc_input_config_${n}`,
        t = sessionStorage.getItem(e);
      if (t) {
        let { required: e } = JSON.parse(t);
        q(e);
      } else q(!1);
    };
    return (
      e(),
      u.addEventListener(`inputConfigChanged`, e),
      () => u.removeEventListener(`inputConfigChanged`, e)
    );
  }, [n]);
  let pe = () => {
      let t =
        S?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null);
      if (!t) throw Error(`No valid product variant selected`);
      let n = { merchandiseId: t, quantity: L };
      ne && ne !== `one-time` && (n.sellingPlanId = ne);
      try {
        let t = `fc_cart_attributes_${e.shopifyProductID}`,
          r = sessionStorage.getItem(t);
        if (!r) return n;
        let i = JSON.parse(r),
          a = [];
        (Object.entries(i).forEach(([e, t]) => {
          t && String(t).trim() && a.push({ key: e, value: String(t).trim() });
        }),
          a.length > 0 && (n.attributes = a));
      } catch (e) {
        console.error(`Error adding attributes to cart item:`, e);
      }
      return n;
    },
    me = o(async (e) => {
      if (e)
        try {
          let t = await u.shopXtools?.handleCartMutation?.(Re, { handle: e }),
            n = parseInt(t?.product?.metafield_order_max?.value, 10);
          G(!isNaN(n) && n > 0 ? n : 0);
        } catch (e) {
          (console.warn(`Could not fetch product metafields for order_max:`, e), G(0));
        }
    }, []),
    J = o(
      (e) => {
        let t = u?.shopXtools?.cart;
        I(t);
        let n = t?.lines?.edges;
        if (!n) return 0;
        if (b?.handle && W > 0) {
          let e = je(b, `variants.edges`, []).map(({ node: e }) => e.id);
          return n.reduce(
            (t, { node: n }) => (e.includes(n.merchandise.id) ? t + n.quantity : t),
            0
          );
        }
        return n.reduce((t, { node: n }) => (n.merchandise.id === e ? t + n.quantity : t), 0);
      },
      [b, W]
    ),
    he = async () => {
      try {
        if (!N) return;
        let t =
            S?.id ||
            (e.shopifyProductVariantId
              ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
              : null),
          n = J(t);
        if (W > 0 && n >= W) {
          oe(!0);
          return;
        }
        if (W === 0 && S && S.quantityAvailable > 0 && n >= S.quantityAvailable) {
          oe(!0);
          return;
        }
        if (e.required || fe) {
          let t = `fc_cart_attributes_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t),
            r = document.querySelector(`[data-product-id="${e.shopifyProductID}"]`),
            i = r?.value || ``;
          if (r && i && n)
            try {
              let t = JSON.parse(n);
              if (!Object.values(t).some((e) => String(e).trim() === i.trim())) {
                u.dispatchEvent(
                  new CustomEvent(`inputValidationFailed`, {
                    detail: {
                      productId: e.shopifyProductID,
                      message: `Please save your input before adding to cart`,
                    },
                  })
                );
                return;
              }
            } catch {
              u.dispatchEvent(
                new CustomEvent(`inputValidationFailed`, {
                  detail: {
                    productId: e.shopifyProductID,
                    message: `Please fill in all required fields`,
                  },
                })
              );
              return;
            }
          if (!n) {
            u.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please fill in all required fields`,
                },
              })
            );
            return;
          }
          try {
            let t = JSON.parse(n);
            if (!Object.values(t).some((e) => e && String(e).trim() !== ``)) {
              u.dispatchEvent(
                new CustomEvent(`inputValidationFailed`, {
                  detail: {
                    productId: e.shopifyProductID,
                    message: `Please fill in all required fields`,
                  },
                })
              );
              return;
            }
          } catch {
            u.dispatchEvent(
              new CustomEvent(`inputValidationFailed`, {
                detail: {
                  productId: e.shopifyProductID,
                  message: `Please fill in all required fields`,
                },
              })
            );
            return;
          }
        }
        let r = [pe()],
          i = localStorage.getItem(`selectedCountryCode`),
          a = localStorage.getItem(`shopX_cart_id`);
        if (!m) {
          if (a)
            try {
              (await u.shopXtools.handleCartMutation(He, { cartId: a }))?.cart ||
                (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (a = null));
            } catch {
              (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (a = null));
            }
          if (a) {
            let e = await u.shopXtools.handleCartMutation(Ge, { cartId: a, lines: r });
            if (e?.cartLinesAdd?.cart) {
              (localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartLinesAdd.cart)),
                (u.shopXtools.cart = e.cartLinesAdd.cart),
                I(u.shopXtools.cart),
                u.dispatchEvent(new Event(`shopXtools-cart-update`)));
              let t = S?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(S?.price?.amount || `0`) * L).toFixed(2)),
                r = _r(S?.id),
                i = b?.title || ``,
                a = S?.selectedOptions
                  ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                o = parseFloat(S?.price?.amount || `0`);
              if (r && i && a && o > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: i,
                      item_variant: a,
                      price: o,
                      item_brand: b?.vendor || null,
                      item_category: b?.productType || null,
                      quantity: L,
                      SKU: r,
                      "Item Name": i,
                    },
                  ],
                };
                typeof u.fcTrackGAEvent == `function` && u.fcTrackGAEvent(`add_to_cart`, e);
              } else
                console.warn(`❌ Skipping add_to_cart: missing item data`, {
                  item_id: r,
                  item_name: i,
                  item_variant: a,
                  price: o,
                  value: n,
                });
              (Fe({ variant: S, product: b, quantity: L, currency: t }),
                u.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: y }));
            } else
              u.dispatchEvent(new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` }));
          } else
            try {
              let e = await u.shopXtools.handleCartMutation(ze, { lines: r, countryCode: i });
              if (e?.cartCreate?.cart?.id) {
                (localStorage.setItem(`shopX_cart_id`, e.cartCreate.cart.id),
                  localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartCreate.cart)),
                  (u.shopXtools.cart = e.cartCreate.cart),
                  I(u.shopXtools.cart),
                  u.dispatchEvent(new Event(`shopXtools-cart-update`)));
                let t = S?.price?.currencyCode || `USD`,
                  n = parseFloat((parseFloat(S?.price?.amount || `0`) * L).toFixed(2)),
                  r = _r(S?.id),
                  i = b?.title || ``,
                  a = S?.selectedOptions
                    ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                    : ``,
                  o = parseFloat(S?.price?.amount || `0`);
                if (r && i && a && o > 0) {
                  let e = {
                    currency: t,
                    value: n,
                    items: [
                      {
                        item_id: r,
                        item_name: i,
                        item_variant: a,
                        price: o,
                        item_brand: b?.vendor || null,
                        item_category: b?.productType || null,
                        quantity: L,
                        SKU: r,
                        "Item Name": i,
                      },
                    ],
                  };
                  typeof u.fcTrackGAEvent == `function` && u.fcTrackGAEvent(`add_to_cart`, e);
                } else
                  console.warn(`❌ Skipping add_to_cart: missing item data`, {
                    item_id: r,
                    item_name: i,
                    item_variant: a,
                    price: o,
                    value: n,
                  });
                (Fe({ variant: S, product: b, quantity: L, currency: t }),
                  u.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: y }));
              } else
                u.dispatchEvent(
                  new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` })
                );
            } catch (e) {
              u.dispatchEvent(
                new CustomEvent(`errorChanged`, {
                  detail: e.message || `Failed to create new cart`,
                })
              );
            }
        }
        if (m) {
          let e = { lines: r, countryCode: i },
            t = (await u.shopXtools?.handleTemporaryCartMutation(ze, e)).cartCreate.cart
              .checkoutUrl;
          if (t) {
            let e = t;
            if (e) {
              let t = S?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(S?.price?.amount || `0`) * L).toFixed(2)),
                r = _r(S?.id),
                i = b?.title || ``,
                a = S?.selectedOptions
                  ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                o = parseFloat(S?.price?.amount || `0`);
              if (r && i && a && o > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: i,
                      item_variant: a,
                      price: o,
                      item_brand: b?.vendor || null,
                      item_category: b?.productType || null,
                      quantity: L,
                      SKU: r,
                      "Item Name": i,
                    },
                  ],
                };
                typeof u.fcTrackGAEvent == `function` && u.fcTrackGAEvent(`begin_checkout`, e);
              } else
                console.warn(`❌ Skipping begin_checkout: missing item data`, {
                  item_id: r,
                  item_name: i,
                  item_variant: a,
                  price: o,
                  value: n,
                });
              (Ve({ variant: S, product: b, quantity: L, currency: t, useBeacon: !0 }),
                (e = Ke(e)),
                (e = Pe(e)),
                u.location.assign(e));
            }
          } else
            u.dispatchEvent(
              new CustomEvent(`errorChanged`, { detail: `Failed to create cart for checkout` })
            );
        }
        if (r[0].attributes) {
          let e = a;
          await u.shopXtools.handleCartMutation(Xe, { cartId: e, attributes: r[0].attributes });
        }
      } catch (e) {
        u.dispatchEvent(
          new CustomEvent(`errorChanged`, { detail: e.message || `Failed to add item to cart` })
        );
      }
    };
  (s(() => {
    b && O(!1);
  }, [b]),
    s(() => {
      if (!A && (b || n)) {
        let e = setTimeout(() => {
          j(!0);
        }, 50);
        return () => clearTimeout(e);
      }
    }, [b]));
  let ge = k.current() === k.canvas,
    _e = null;
  _e = ge
    ? r?.[0] || null
    : A
      ? U && d?.[0]
        ? d?.[0] || null
        : (!w && !S?.availableForSale) ||
            (S && !K(S)) ||
            (b && !je(b, `variants.edges`, []).some(({ node: e }) => K(e))) ||
            (e.required && le)
          ? a?.[0] || null
          : ee
            ? c?.[0] || null
            : r?.[0] || null
      : null;
  let ve = (w || (S && S.availableForSale)) && !ee && !U && (!e.required || !le),
    ye = (e) => {
      ve && he();
    };
  (s(() => {
    let t =
        S?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null),
      n = J(t),
      r = !1;
    (W > 0
      ? (r = n >= W)
      : W === 0 &&
        S &&
        S.quantityAvailable > 0 &&
        S.availableForSale &&
        (r = n >= S.quantityAvailable),
      r !== U && oe(r));
  }, [W, S, e.shopifyProductVariantId, U, J]),
    s(() => {
      W > 0 &&
        u.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: W },
          })
        );
    }, [W, e.shopifyProductID]),
    s(() => {
      let t =
          S?.id ||
          (e.shopifyProductVariantId
            ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
            : null),
        n = J(t);
      if (W > 0 && F) {
        let t = Math.max(0, W - n);
        u.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      } else if (W === 0 && S && F && S.quantityAvailable > 0 && S.availableForSale) {
        let t = Math.max(0, S.quantityAvailable - n);
        u.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      }
    }, [F, W, S, e.shopifyProductVariantId, J, L]),
    s(() => {
      let t = () => {
        let t = S?.id || null,
          n = J(t);
        if (W > 0) oe(n >= W);
        else if (W === 0 && S && S.quantityAvailable > 0) {
          let e = n >= S.quantityAvailable;
          oe(e);
        } else oe(!1);
        let r = Math.max(0, W - n),
          i = S?.quantityAvailable <= 0 && S?.availableForSale ? 100 : S?.quantityAvailable,
          a = Math.max(0, i - n);
        u.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: W > 0 ? r : a },
          })
        );
      };
      return (
        u.addEventListener(`shopXtools-cart-update`, t),
        () => u.removeEventListener(`shopXtools-cart-update`, t)
      );
    }, [S, W, J, e.shopifyProductID]),
    s(() => {
      if (!N) return;
      let e = () => {
        if (
          (u !== void 0 && u.__fc_autoSelectFirst !== void 0 && V(u.__fc_autoSelectFirst),
          u !== void 0 && u.__fc_activeVariantId !== void 0)
        ) {
          let e = u.__fc_activeVariantId;
          if (e) {
            let t = je(b, `variants.edges`, []).find(({ node: t }) => t.id === e);
            t && C(t.node);
          }
        }
        if (b) {
          let e = je(b, `variants.edges`, []).length > 1;
          E(B || S ? !1 : !B && e ? !0 : !p && e);
        }
      };
      return (
        u.addEventListener(`resize`, e),
        () => {
          u.removeEventListener(`resize`, e);
        }
      );
    }, [N, b, S, B, p]));
  let Y = g(),
    be = g(!1);
  (s(() => {
    if (!b) return;
    let e = b.vendor || null,
      t = b.productType || null;
    if (!be.current) {
      (_r(b.id), b.title);
      let e = je(b, `variants.edges`, [])[0]?.node;
      (e
        ? (e.price?.currencyCode,
          parseFloat(e.price?.amount || `0`),
          _r(e.id),
          e.title,
          parseFloat(e.price?.amount || `0`),
          _r(e.id))
        : (b.priceRange?.minVariantPrice?.currencyCode,
          parseFloat(b.priceRange?.minVariantPrice?.amount || `0`),
          parseFloat(b.priceRange?.minVariantPrice?.amount || `0`)),
        (be.current = !0));
    }
    if (S && b?.title) {
      let n = _r(S.id),
        r = b.title,
        i = S?.selectedOptions
          ? S.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
          : ``,
        a = parseFloat(S.price?.amount || `0`),
        o = S.price?.currencyCode || `USD`,
        s = a;
      if (n && r && i && a > 0 && Y.current !== n) {
        let c = {
          currency: o,
          value: s,
          items: [
            {
              item_id: n,
              item_name: r,
              item_variant: i,
              price: a,
              item_brand: e,
              item_category: t,
              quantity: 1,
              SKU: n,
              "Item Name": r,
            },
          ],
        };
        c.items &&
          c.items.length > 0 &&
          c.items[0].item_id &&
          c.items[0].item_name &&
          (u.fcTrackGAEvent && u.fcTrackGAEvent(`view_item`, c), (Y.current = n));
      }
    }
  }, [b, S]),
    s(() => {
      let e = document.activeElement;
      e && e.closest(`.fc-purchase-button-container`) && e.blur();
    }, [_e]));
  let xe = null;
  ge &&
    (r?.[0]
      ? (xe = r[0])
      : c?.[0]
        ? (xe = c[0])
        : a?.[0]
          ? (xe = a[0])
          : d?.[0]
            ? (xe = d[0])
            : l?.[0] && (xe = l[0]));
  let Se = r?.[0] || c?.[0] || a?.[0] || d?.[0] || l?.[0];
  if (ge && !Se)
    return f(`div`, {
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
    });
  let Ce = (u === void 0 ? `` : u.location.href).includes(`framercanvas.com`),
    we = xe ? fr(xe) : null,
    Te = l?.[0] ? fr(l[0]) : null,
    Ee = _e ? fr(_e) : null;
  return _(`div`, {
    style: { height: `100%`, position: `relative` },
    role: `none`,
    className: `fc-purchase-button-container`,
    children: [
      f(`style`, {
        children: `
                .fc-purchase-button-container :focus-visible {
                    outline: ${e.focus.width}px solid ${e.focus.color} !important;
                    outline-offset: ${e.focus.padding}px !important;
                    border-radius: ${e.focus.radius}px !important;
                }
            `,
      }),
      ge
        ? we &&
          t(we, {
            style: {
              ...(xe?.props?.style || {}),
              width: `100%`,
              height: `100%`,
              cursor: `pointer`,
              outline: `none`,
            },
            onClick: ye,
            role: `button`,
            "aria-label":
              xe === r?.[0]
                ? e.BuyNowATC
                  ? `Buy now`
                  : `Add to cart`
                : xe === c?.[0]
                  ? `Select variant`
                  : xe === a?.[0]
                    ? `Out of stock`
                    : xe === d?.[0]
                      ? `Max quantity reached`
                      : `Loading`,
          })
        : D && !e.skipLoading && Te && !Ce
          ? t(Te, {
              style: {
                ...(l[0].props?.style || {}),
                width: `100%`,
                height: `100%`,
                outline: `none`,
              },
              role: `status`,
              "aria-label": `Loading ${e.BuyNowATC ? `buy now` : `add to cart`} button`,
              "aria-live": `polite`,
              tabIndex: -1,
            })
          : Ee
            ? t(Ee, {
                style: {
                  ...(_e?.props?.style || {}),
                  width: `100%`,
                  height: `100%`,
                  cursor: ve ? `pointer` : `not-allowed`,
                  outline: `none`,
                },
                onClick: ve ? ye : void 0,
                onKeyDown: ve
                  ? (e) => {
                      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), ye(e));
                    }
                  : void 0,
                role: `button`,
                "aria-disabled": !ve,
                "aria-label":
                  _e === r?.[0]
                    ? e.BuyNowATC
                      ? `Buy now`
                      : `Add to cart`
                    : _e === c?.[0]
                      ? `Select variant`
                      : _e === a?.[0]
                        ? `Out of stock`
                        : `Max quantity reached`,
                tabIndex: A ? 0 : -1,
              })
            : null,
    ],
  });
}
var _r,
  vr = e(() => {
    (x(),
      v(),
      l(),
      Me(),
      V(),
      Ae(),
      We(),
      Ze(),
      Ie(),
      qe(),
      pr(),
      hr(),
      D(gr, {
        shopifyProductID: {
          type: q.String,
          title: `Product ID`,
          description: `Connect to CMS (required)`,
        },
        LoadingState: {
          type: q.ComponentInstance,
          title: `Loading`,
          hidden: (e) => e.skipLoading,
          description: `Display when product/variant is determining state to show.`,
        },
        available: {
          type: q.ComponentInstance,
          title: `Available`,
          description: `Display when product/variant is available (Add to Cart or Buy Now).`,
        },
        SelectVariant: {
          type: q.ComponentInstance,
          title: `Select Variant`,
          description: `Display when product/variant requires a variant selection.`,
        },
        OutOfStock: {
          type: q.ComponentInstance,
          title: `Out of Stock`,
          description: `Display when product/variant is out of stock.`,
        },
        maxQuantity: {
          type: q.ComponentInstance,
          title: `Limit Reached`,
          description: `Display when maximum cart quantity is reached.  

 –––– 

 Connect each state to button component off-page. 

 If you detatch the button component, you'll need to reconnect the states.`,
        },
        BuyNowATC: {
          title: `Buy Now`,
          type: q.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !1,
        },
        skipLoading: {
          title: `Loading State`,
          type: q.Boolean,
          enabledTitle: `No`,
          disabledTitle: `Yes`,
          defaultValue: !1,
        },
        openCart: {
          title: `Trigger Cart`,
          description: `If button is inside the cart, select No to keep the cart open.`,
          type: q.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !0,
          hidden: (e) => e.BuyNowATC,
        },
        focus: {
          type: q.Object,
          title: `Focus`,
          controls: {
            radius: {
              type: q.Number,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
            },
            width: {
              type: q.Number,
              title: `Width`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            padding: {
              type: q.Number,
              title: `Padding`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            color: { type: q.Color, title: `Color`, defaultValue: `#007AFF` },
          },
        },
        shopifyProductVariantId: {
          type: q.String,
          title: `Variant ID`,
          description: `Advanced: Manually set a specific product variant ID (optional).`,
        },
      }),
      (_r = (e) => e?.split(`/`).pop()));
  });
function yr(e) {
  let { shopifyProductID: t, textTemplate: n } = e,
    [r, a] = i(),
    [c, l] = i({}),
    d = o((e) => {
      l((t) => ({ ...t, [e.detail.optionName]: e.detail.value }));
    }, []);
  (s(() => {
    if (u.shopXtools && Array.isArray(u.shopXtools.products)) {
      let e = u.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
      a(e ? e.node : `404`);
    } else
      document.addEventListener(`data__products-ready`, (e) => {
        if (Array.isArray(e.detail.products)) {
          let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
          a(n ? n.node : `404`);
        }
      });
    return (
      document.addEventListener(`variant_option_selected`, d),
      () => {
        document.removeEventListener(`variant_option_selected`, d);
      }
    );
  }, [t, d]),
    s(() => {
      let e = (e) => {
        let { currency: n } = e.detail;
        if (u.shopXtools && Array.isArray(u.shopXtools.products)) {
          let e = u.shopXtools.products.find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          e && a(e.node);
        }
      };
      return (
        u.addEventListener(`currency_changed`, e),
        () => {
          u.removeEventListener(`currency_changed`, e);
        }
      );
    }, [t]));
  let p = je(r, `options`, [])
      .filter((e) => !c[e.name])
      .map((e) => e.name),
    m =
      u === void 0 || !u.shopXtools
        ? n.replace(`{{variant}}`, `Size`)
        : p.length === 0
          ? ``
          : n.replace(`{{variant}}`, p.join(`, `));
  return m
    ? f(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: f(`p`, {
          style: {
            ...e.font,
            color: e.color,
            margin: 0,
            textAlign: `center`,
            textTransform: e.textTransform,
          },
          children: m,
        }),
      })
    : f(`div`, { style: { width: `100%`, height: `100%` } });
}
var br = e(() => {
    (x(),
      v(),
      V(),
      l(),
      Ae(),
      (yr.defaultProps = {
        shopifyProductID: ``,
        textTemplate: `Select {{variant}}`,
        textTransform: `none`,
        color: `#000000`,
      }),
      D(yr, {
        shopifyProductID: { type: q.String, title: `Product ID` },
        textTemplate: {
          type: q.String,
          title: `Format`,
          description: `Use {{variant}} to insert the variant name`,
        },
        font: { type: q.Font, title: `Font`, controls: `extended` },
        color: { type: q.Color, title: `Color`, defaultValue: `#000000` },
        textTransform: {
          type: q.Enum,
          title: `Transform`,
          options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
          defaultValue: `none`,
        },
      }));
  }),
  xr,
  Sr,
  Cr = e(() => {
    (V(),
      (xr = {
        position: `relative`,
        width: `100%`,
        height: `100%`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
      }),
      { ...xr },
      (Sr = {
        onClick: { type: q.EventHandler },
        onMouseEnter: { type: q.EventHandler },
        onMouseLeave: { type: q.EventHandler },
      }),
      q.Number,
      q.Boolean,
      q.String,
      q.Enum);
  });
function wr(e, t) {
  return Er(!0, e, t);
}
function Tr(e, t) {
  return Er(!1, e, t);
}
function Er(e, t, n = !0) {
  let r = de();
  s(() => {
    n && r === e && t();
  }, [r]);
}
var Dr = e(() => {
    (V(), l());
  }),
  Or = e(() => {
    l();
  }),
  kr = e(() => {
    V();
  }),
  Ar = e(() => {
    V();
  }),
  jr = e(() => {
    l();
  }),
  Mr = e(() => {
    V();
  }),
  Nr = e(() => {
    (x(), l());
  }),
  Pr = e(() => {
    (l(), Ar());
  }),
  Fr = e(() => {
    (l(), V(), Ar(), Or());
  }),
  Ir = e(() => {
    (V(), l(), Cr());
  }),
  Lr = e(() => {
    (l(), V());
  }),
  Rr = e(() => {
    l();
  }),
  zr = e(() => {
    (l(), V(), q.FusedNumber, q.FusedNumber);
  }),
  Br = e(() => {
    (Cr(), Dr(), Or(), kr(), Ar(), jr(), Mr(), Nr(), Pr(), Fr(), Ir(), Lr(), Rr(), zr());
  }),
  Vr = e(() => {
    Br();
  });
function Hr({ color: e, animation: t }) {
  let n = [0, 1, 2],
    { delay: r, ease: i, duration: a, ...o } = t,
    s = t.type === `spring` ? o : { ...o, ease: i, duration: a };
  return f(C.svg, {
    style: { height: `85%`, width: `85%` },
    viewBox: `0 0 30 30`,
    variants: { show: { transition: { delayChildren: 0.1, staggerChildren: 0.12 } } },
    animate: `show`,
    children: n.map((t) =>
      f(
        C.circle,
        {
          style: { fill: e },
          variants: { hidden: { y: 0 }, show: { y: [0, 0, 0, -10, 0, 0, 0] } },
          transition: { ...s, yoyo: 1 / 0 },
          r: 3,
          cx: t * 10 + 5,
          cy: 15,
        },
        t
      )
    ),
  });
}
function Ur({ color: e, animation: t }) {
  return f(C.svg, {
    style: { height: `85%`, width: `85%`, overflow: `visible`, originX: `50%`, originY: `50%` },
    animate: { rotate: 360 },
    transition: { ease: `linear`, loop: 1 / 0, duration: 2 },
    viewBox: `25 25 50 50`,
    children: f(C.circle, {
      style: { stroke: e, strokeLinecap: `round` },
      animate: {
        strokeDasharray: [`1, 200`, `89, 200`, `89, 200`],
        strokeDashoffset: [0, -35, -124],
      },
      transition: { ...t, loop: 1 / 0, ease: `easeInOut` },
      cx: `50`,
      cy: `50`,
      r: `20`,
      fill: `none`,
      strokeWidth: 2,
      strokeMiterlimit: `10`,
    }),
  });
}
function Wr({ color: e, animation: t }) {
  let n = (e, t) => e.slice(t, e.length).concat(e.slice(0, t)),
    r = [...Array(12)].map((e, t) => (0.9 / 12) * t + 0.1).reverse(),
    i = r.map((e, t) => n(r, t));
  return f(C.svg, {
    viewBox: `-15 -15 30 30`,
    style: { width: `100%`, height: `100%` },
    children: i.map((n, r) =>
      f(
        C.g,
        {
          initial: { opacity: n[0] },
          animate: { opacity: n },
          transition: { ...t, loop: 1 / 0, repeatDelay: 5e-4 },
          children: f(`rect`, {
            style: {
              width: 7,
              height: 2,
              fill: e,
              transform: `rotate(${((12 - r) / 12) * 360 - 90}deg)`,
            },
            x: 5,
            y: -1,
            rx: 1,
          }),
        },
        r
      )
    ),
  });
}
function Gr(e, t) {
  switch (e) {
    case Jr.DotWave:
      return f(Hr, { ...t });
    case Jr.Material:
      return f(Ur, { ...t });
    case Jr.IOS:
      return f(Wr, { ...t });
    default:
      return f(Hr, { ...t });
  }
}
function Kr(e, t) {
  let n = setTimeout(t, e * 1e3);
  return () => clearTimeout(n);
}
function qr(e) {
  let {
      duration: t,
      onTimeout: n,
      fadeOut: r,
      hasDuration: i,
      indicator: a,
      onClick: c,
      onMouseDown: l,
      onMouseUp: u,
      onMouseEnter: d,
      onMouseLeave: p,
      style: m,
    } = e,
    h = S(),
    _ = r ? Math.min(t, 0.35) : 0,
    v = r ? t - _ : t,
    y = Gr(a, e),
    b = g([]),
    x = o(() => {
      i && h.start({ opacity: 0, transition: { duration: _, ease: `easeIn` } });
    }, [i, _]),
    w = async () => {
      h.set({ opacity: 1 });
    };
  return (
    wr(() => {
      (w(), i && (b.current = [Kr(t, n), Kr(v, x)]));
    }),
    Tr(() => b.current.forEach((e) => e)),
    s(() => () => b.current.forEach((e) => e), []),
    f(C.div, {
      onClick: c,
      onMouseDown: l,
      onMouseUp: u,
      onMouseEnter: d,
      onMouseLeave: p,
      animate: h,
      style: {
        position: `relative`,
        overflow: `show`,
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        ...m,
      },
      children: y,
    })
  );
}
var Jr,
  Yr = e(() => {
    (v(),
      l(),
      V(),
      Vr(),
      (function (e) {
        ((e.DotWave = `Dots`), (e.Material = `Material`), (e.IOS = `iOS`));
      })((Jr ||= {})),
      (qr.defaultProps = {
        height: 40,
        width: 40,
        duration: 2,
        color: `#888`,
        animation: { type: `tween`, ease: `linear`, duration: 1.3 },
        hasDuration: !1,
      }),
      D(qr, {
        indicator: { title: `Indicator`, type: q.Enum, options: Object.keys(Jr).map((e) => Jr[e]) },
        color: { type: q.Color, defaultValue: `#888` },
        hasDuration: {
          title: `Duration`,
          type: q.Boolean,
          defaultValue: qr.defaultProps.hasDuration,
          enabledTitle: `Timeout`,
          disabledTitle: `Infinity`,
        },
        duration: {
          title: `Time`,
          hidden: ({ hasDuration: e }) => !e,
          min: 0.1,
          max: 10,
          defaultValue: qr.defaultProps.duration,
          type: q.Number,
          step: 0.1,
        },
        animation: { type: q.Transition },
        fadeOut: {
          title: `Fade Out`,
          hidden: ({ hasDuration: e }) => !e,
          type: q.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
        },
        onTimeout: { type: q.EventHandler },
        ...Sr,
      }));
  });
function Xr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di = e(() => {
    (v(),
      V(),
      E(),
      l(),
      br(),
      Yr(),
      $e(),
      (Zr = B(yr)),
      (Qr = B(qr)),
      ($r = { JYNRvuv5s: { hover: !0 } }),
      (ei = [`JYNRvuv5s`, `fWU1NyLN5`, `NT8ssciOr`, `yvmuza7Lx`, `eCJplQQp4`]),
      (ti = `framer-1TCIy`),
      (ni = {
        eCJplQQp4: `framer-v-1nk0k4f`,
        fWU1NyLN5: `framer-v-1h8yw0c`,
        JYNRvuv5s: `framer-v-139f5u8`,
        NT8ssciOr: `framer-v-l7mcw8`,
        yvmuza7Lx: `framer-v-1y929u7`,
      }),
      (ri = { delay: 0, duration: 0.3, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (ii = (e, t) => `translate(-50%, -50%) ${t}`),
      (ai = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (oi = {
        "Add to Cart": `JYNRvuv5s`,
        "Max Reached": `yvmuza7Lx`,
        "Out of Stock": `NT8ssciOr`,
        "Select Variant": `fWU1NyLN5`,
        Loading: `eCJplQQp4`,
      }),
      (si = C.create(r)),
      (ci = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        elgRTGdr9: n ?? i.elgRTGdr9,
        variant: oi[i.variant] ?? i.variant ?? `JYNRvuv5s`,
      })),
      (li = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ui = j(
        p(function (e, t) {
          let n = g(null),
            i = t ?? n,
            a = b(),
            { activeLocale: o, setLocale: s } = _e();
          ue();
          let { style: c, className: l, layoutId: u, variant: d, elgRTGdr9: p, ...m } = ci(e),
            {
              baseVariant: h,
              classNames: v,
              clearLoadingGesture: y,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = te({
              cycleOrder: ei,
              defaultVariant: `JYNRvuv5s`,
              enabledGestures: $r,
              ref: i,
              variant: d,
              variantClassNames: ni,
            }),
            O = li(e, D),
            k = I(ti, nt),
            j = () => h !== `fWU1NyLN5`,
            N = () => h === `fWU1NyLN5`,
            ne = () => h === `eCJplQQp4`;
          return f(ee, {
            id: u ?? a,
            children: f(si, {
              animate: D,
              initial: !1,
              children: f(ai, {
                value: ri,
                children: _(C.div, {
                  ...m,
                  ...x,
                  className: I(k, `framer-139f5u8`, l, v),
                  "data-framer-name": `Add to Cart`,
                  layoutDependency: O,
                  layoutId: `JYNRvuv5s`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                    ...c,
                  },
                  variants: {
                    "JYNRvuv5s-hover": {
                      backgroundColor: `var(--token-955a487d-0233-4fc4-9ec9-1e13d781a048, rgb(75, 88, 155))`,
                    },
                  },
                  ...Xr(
                    {
                      "JYNRvuv5s-hover": { "data-framer-name": void 0 },
                      eCJplQQp4: { "data-framer-name": `Loading` },
                      fWU1NyLN5: { "data-framer-name": `Select Variant` },
                      NT8ssciOr: { "data-framer-name": `Out of Stock` },
                      yvmuza7Lx: { "data-framer-name": `Max Reached` },
                    },
                    h,
                    S
                  ),
                  children: [
                    j() &&
                      f(M, {
                        __fromCanvasComponent: !0,
                        children: f(r, {
                          children: f(C.h5, {
                            className: `framer-styles-preset-uis2r6`,
                            "data-styles-preset": `KRUEduuRo`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `center`,
                              "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131)))`,
                            },
                            children: `ADD TO CART`,
                          }),
                        }),
                        className: `framer-mud1pd`,
                        fonts: [`Inter`],
                        layoutDependency: O,
                        layoutId: `Aasb8xkYF`,
                        style: {
                          "--extracted-1lwpl3i": `var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, rgb(219, 87, 131))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                          opacity: 1,
                        },
                        variants: {
                          "JYNRvuv5s-hover": {
                            "--extracted-1lwpl3i": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                            opacity: 1,
                          },
                          eCJplQQp4: { opacity: 0 },
                          NT8ssciOr: {
                            "--extracted-1lwpl3i": `var(--token-9f934226-8073-4603-9f51-fca416659f29, rgb(191, 191, 191))`,
                          },
                          yvmuza7Lx: {
                            "--extracted-1lwpl3i": `var(--token-9f934226-8073-4603-9f51-fca416659f29, rgb(191, 191, 191))`,
                          },
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                        ...Xr(
                          {
                            "JYNRvuv5s-hover": {
                              children: f(r, {
                                children: f(C.h5, {
                                  className: `framer-styles-preset-uis2r6`,
                                  "data-styles-preset": `KRUEduuRo`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)))`,
                                  },
                                  children: `ADD TO CART`,
                                }),
                              }),
                            },
                            NT8ssciOr: {
                              children: f(r, {
                                children: f(C.h5, {
                                  className: `framer-styles-preset-uis2r6`,
                                  "data-styles-preset": `KRUEduuRo`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-9f934226-8073-4603-9f51-fca416659f29, rgb(191, 191, 191)))`,
                                  },
                                  children: `OUT OF STOCK`,
                                }),
                              }),
                            },
                            yvmuza7Lx: {
                              children: f(r, {
                                children: f(C.h5, {
                                  className: `framer-styles-preset-uis2r6`,
                                  "data-styles-preset": `KRUEduuRo`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-alignment": `center`,
                                    "--framer-text-color": `var(--extracted-1lwpl3i, var(--token-9f934226-8073-4603-9f51-fca416659f29, rgb(191, 191, 191)))`,
                                  },
                                  children: `MAX QUANTITY REACHED`,
                                }),
                              }),
                            },
                          },
                          h,
                          S
                        ),
                      }),
                    N() &&
                      f(K, {
                        children: f(A, {
                          className: `framer-1bccnk7-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: O,
                          layoutId: `GFCE0_Zt8-container`,
                          nodeId: `GFCE0_Zt8`,
                          rendersWithMotion: !0,
                          scopeId: `JzgVEqmEA`,
                          children: f(yr, {
                            color: `var(--token-9f934226-8073-4603-9f51-fca416659f29, rgb(191, 191, 191))`,
                            font: {
                              fontFamily: `"Chillax", "Chillax Placeholder", sans-serif`,
                              fontSize: `20px`,
                              fontStyle: `normal`,
                              fontWeight: 500,
                              letterSpacing: `0em`,
                              lineHeight: `1.4em`,
                            },
                            height: `100%`,
                            id: `GFCE0_Zt8`,
                            layoutId: `GFCE0_Zt8`,
                            shopifyProductID: p,
                            style: { width: `100%` },
                            textTemplate: `Select {{variant}}`,
                            textTransform: `Uppercase`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    ne() &&
                      f(K, {
                        children: f(A, {
                          className: `framer-ekgyr9-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: O,
                          layoutId: `ocgxrXEIn-container`,
                          nodeId: `ocgxrXEIn`,
                          rendersWithMotion: !0,
                          scopeId: `JzgVEqmEA`,
                          transformTemplate: ii,
                          children: f(qr, {
                            animation: {
                              delay: 0,
                              duration: 1.3,
                              ease: [0.44, 0, 0.56, 1],
                              type: `tween`,
                            },
                            color: `var(--token-32039339-f64a-42c6-a8f4-f7fdfa12eb53, rgba(0, 0, 0, 0.16))`,
                            duration: 2,
                            fadeOut: !0,
                            hasDuration: !1,
                            height: `100%`,
                            id: `ocgxrXEIn`,
                            indicator: `Material`,
                            layoutId: `ocgxrXEIn`,
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
          `.framer-1TCIy.framer-fsv678, .framer-1TCIy .framer-fsv678 { display: block; }`,
          `.framer-1TCIy.framer-139f5u8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; height: 56px; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-1TCIy .framer-mud1pd { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; z-index: 1; }`,
          `.framer-1TCIy .framer-1bccnk7-container { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; width: 1px; }`,
          `.framer-1TCIy .framer-ekgyr9-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 32px); left: 50%; position: absolute; top: 50%; width: 24px; z-index: 1; }`,
          `.framer-1TCIy.framer-v-1h8yw0c.framer-139f5u8, .framer-1TCIy.framer-v-l7mcw8.framer-139f5u8, .framer-1TCIy.framer-v-1y929u7.framer-139f5u8, .framer-1TCIy.framer-v-1nk0k4f.framer-139f5u8 { cursor: unset; gap: 0px; justify-content: center; }`,
          ...et,
        ],
        `framer-1TCIy`
      )),
      (ui.displayName = `FC Purchase Button / Button States`),
      (ui.defaultProps = { height: 56, width: 300 }),
      D(ui, {
        variant: {
          options: [`JYNRvuv5s`, `fWU1NyLN5`, `NT8ssciOr`, `yvmuza7Lx`, `eCJplQQp4`],
          optionTitles: [`Add to Cart`, `Select Variant`, `Out of Stock`, `Max Reached`, `Loading`],
          title: `Variant`,
          type: q.Enum,
        },
        elgRTGdr9: { defaultValue: ``, title: `Product ID`, type: q.String },
        onelgRTGdr9Change: { changes: `elgRTGdr9`, type: q.ChangeHandler },
      }),
      ce(
        ui,
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
                cssFamilyName: `Chillax`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `Chillax`,
                url: `../../assets/misc/WZY5PMNTII6NKOB2TTIAX7QVAWMSY2DQ.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Zr,
          ...Qr,
          ...P(tt),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi = e(() => {
    (v(),
      V(),
      E(),
      l(),
      vr(),
      di(),
      (fi = B(ui)),
      (pi = B(gr)),
      (mi = `framer-Niyh3`),
      (hi = { Bf_h5guUY: `framer-v-8502f7` }),
      (gi = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_i = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vi = ({ value: e, children: t }) => {
        let n = h(w),
          r = e ?? n.transition,
          i = a(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return f(w.Provider, { value: i, children: t });
      }),
      (yi = C.create(r)),
      (bi = (e, t) => {
        let [n, r] = i(e),
          [a, o] = i(e);
        return t ? [e, t] : (e !== a && (r(e), o(e)), [n, r]);
      }),
      (xi = ({ click: e, height: t, id: n, productID: r, width: i, ...a }) => ({
        ...a,
        Nt_kadLvR: r ?? a.Nt_kadLvR,
        ZqSKVdAb2: e ?? a.ZqSKVdAb2,
      })),
      (Si = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Ci = j(
        p(function (e, t) {
          let n = g(null),
            r = t ?? n,
            i = b(),
            { activeLocale: a, setLocale: o } = _e();
          ue();
          let {
              style: s,
              className: c,
              layoutId: l,
              variant: u,
              Nt_kadLvR: d,
              onNt_kadLvRChange: p,
              ZqSKVdAb2: m,
              ...h
            } = xi(e),
            [_, v] = bi(d, p),
            {
              baseVariant: y,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = te({ defaultVariant: `Bf_h5guUY`, ref: r, variant: u, variantClassNames: hi }),
            j = Si(e, k),
            { activeVariantCallback: M, delay: N } = oe(y),
            ne = M(async (...e) => {
              if ((D({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            P = I(mi);
          return f(ee, {
            id: l ?? i,
            children: f(yi, {
              animate: k,
              initial: !1,
              children: f(vi, {
                value: gi,
                children: f(C.div, {
                  ...h,
                  ...w,
                  className: I(P, `framer-8502f7`, c, x),
                  "data-framer-name": `Button`,
                  "data-highlight": !0,
                  layoutDependency: j,
                  layoutId: `Bf_h5guUY`,
                  onTap: ne,
                  ref: r,
                  style: { ...s },
                  children: f(K, {
                    children: f(A, {
                      className: `framer-14msxtz-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: j,
                      layoutId: `v8aZTeuDM-container`,
                      nodeId: `v8aZTeuDM`,
                      rendersWithMotion: !0,
                      scopeId: `FRVdJG6ih`,
                      children: f(gr, {
                        available: [
                          f(K, {
                            height: 56,
                            width: `300px`,
                            children: f(A, {
                              className: `framer-d0m1ux-container`,
                              "data-framer-name": `Available`,
                              inComponentSlot: !0,
                              layoutDependency: j,
                              layoutId: `K2Qzv9Vmo-container`,
                              name: `Available`,
                              nodeId: `K2Qzv9Vmo`,
                              rendersWithMotion: !0,
                              scopeId: `FRVdJG6ih`,
                              children: f(ui, {
                                elgRTGdr9: _,
                                height: `100%`,
                                id: `K2Qzv9Vmo`,
                                layoutId: `K2Qzv9Vmo`,
                                name: `Available`,
                                onelgRTGdr9Change: v,
                                style: { height: `100%`, width: `100%` },
                                variant: _i(`JYNRvuv5s`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        BuyNowATC: !1,
                        focus: { color: `rgb(0, 122, 255)`, padding: 2, radius: 0, width: 2 },
                        height: `100%`,
                        id: `v8aZTeuDM`,
                        layoutId: `v8aZTeuDM`,
                        LoadingState: [
                          f(K, {
                            height: 56,
                            width: `300px`,
                            children: f(A, {
                              className: `framer-1ndf3r0-container`,
                              "data-framer-name": `Loading`,
                              inComponentSlot: !0,
                              layoutDependency: j,
                              layoutId: `q86F6V4nm-container`,
                              name: `Loading`,
                              nodeId: `q86F6V4nm`,
                              rendersWithMotion: !0,
                              scopeId: `FRVdJG6ih`,
                              children: f(ui, {
                                elgRTGdr9: _,
                                height: `100%`,
                                id: `q86F6V4nm`,
                                layoutId: `q86F6V4nm`,
                                name: `Loading`,
                                onelgRTGdr9Change: v,
                                style: { height: `100%`, width: `100%` },
                                variant: _i(`eCJplQQp4`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        maxQuantity: [
                          f(K, {
                            height: 56,
                            width: `300px`,
                            children: f(A, {
                              className: `framer-877nhz-container`,
                              "data-framer-name": `Max Reached`,
                              inComponentSlot: !0,
                              layoutDependency: j,
                              layoutId: `SrpRDuHc5-container`,
                              name: `Max Reached`,
                              nodeId: `SrpRDuHc5`,
                              rendersWithMotion: !0,
                              scopeId: `FRVdJG6ih`,
                              children: f(ui, {
                                elgRTGdr9: _,
                                height: `100%`,
                                id: `SrpRDuHc5`,
                                layoutId: `SrpRDuHc5`,
                                name: `Max Reached`,
                                onelgRTGdr9Change: v,
                                style: { height: `100%`, width: `100%` },
                                variant: _i(`yvmuza7Lx`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        openCart: !0,
                        OutOfStock: [
                          f(K, {
                            height: 56,
                            width: `300px`,
                            children: f(A, {
                              className: `framer-1wtbyfz-container`,
                              "data-framer-name": `Out of Stock`,
                              inComponentSlot: !0,
                              layoutDependency: j,
                              layoutId: `iKR7o4KeT-container`,
                              name: `Out of Stock`,
                              nodeId: `iKR7o4KeT`,
                              rendersWithMotion: !0,
                              scopeId: `FRVdJG6ih`,
                              children: f(ui, {
                                elgRTGdr9: _,
                                height: `100%`,
                                id: `iKR7o4KeT`,
                                layoutId: `iKR7o4KeT`,
                                name: `Out of Stock`,
                                onelgRTGdr9Change: v,
                                style: { height: `100%`, width: `100%` },
                                variant: _i(`NT8ssciOr`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        SelectVariant: [
                          f(K, {
                            height: 56,
                            width: `300px`,
                            children: f(A, {
                              className: `framer-16a9lbu-container`,
                              "data-framer-name": `Select Variant`,
                              inComponentSlot: !0,
                              layoutDependency: j,
                              layoutId: `GjPZS7kn0-container`,
                              name: `Select Variant`,
                              nodeId: `GjPZS7kn0`,
                              rendersWithMotion: !0,
                              scopeId: `FRVdJG6ih`,
                              children: f(ui, {
                                elgRTGdr9: _,
                                height: `100%`,
                                id: `GjPZS7kn0`,
                                layoutId: `GjPZS7kn0`,
                                name: `Select Variant`,
                                onelgRTGdr9Change: v,
                                style: { height: `100%`, width: `100%` },
                                variant: _i(`fWU1NyLN5`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        shopifyProductID: _,
                        shopifyProductVariantId: ``,
                        skipLoading: !1,
                        style: { height: `100%`, width: `100%` },
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
          `.framer-Niyh3.framer-1dhu32x, .framer-Niyh3 .framer-1dhu32x { display: block; }`,
          `.framer-Niyh3.framer-8502f7 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 56px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-Niyh3 .framer-14msxtz-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-Niyh3 .framer-1ndf3r0-container, .framer-Niyh3 .framer-d0m1ux-container, .framer-Niyh3 .framer-16a9lbu-container, .framer-Niyh3 .framer-1wtbyfz-container, .framer-Niyh3 .framer-877nhz-container { height: 56px; position: relative; width: 300px; }`,
        ],
        `framer-Niyh3`
      )),
      (Ci.displayName = `FC Purchase Button`),
      (Ci.defaultProps = { height: 56, width: 300 }),
      D(Ci, {
        Nt_kadLvR: { defaultValue: ``, title: `Product ID`, type: q.String },
        onNt_kadLvRChange: { changes: `Nt_kadLvR`, type: q.ChangeHandler },
        ZqSKVdAb2: { title: `Click`, type: q.EventHandler },
      }),
      ce(Ci, [{ explicitInter: !0, fonts: [] }, ...fi, ...pi], {
        supportsExplicitInterCodegen: !0,
      }),
      (Ci.loader = { load: (e, t) => (t.locale, Promise.allSettled([N(ui, {}, t)])) }));
  }),
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  Ni,
  Pi,
  Fi,
  Ii,
  Li,
  Ri,
  zi,
  Bi,
  Vi,
  Hi,
  Ui,
  Wi,
  Gi,
  Ki,
  qi,
  Ji,
  Yi,
  Xi,
  Zi,
  Qi,
  $i,
  ea,
  ta,
  na,
  ra,
  ia,
  aa,
  oa,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha;
e(() => {
  (v(),
    V(),
    E(),
    l(),
    d(),
    dn(),
    dr(),
    wi(),
    yt(),
    Ue(),
    xt(),
    Ct(),
    Se(),
    Oe(),
    ct(),
    Dt(),
    lt(),
    $e(),
    rt(),
    ht(),
    Mt(),
    (Ti = B(un)),
    (Ei = F(ae)),
    (Di = F(C.div)),
    (Oi = F(M)),
    (ki = B(Ci)),
    (Ai = B(Je)),
    (ji = B(ur)),
    (Mi = ie(C.div)),
    (Ni = O(M)),
    (Pi = B(bt)),
    (Fi = O(ae)),
    (Ii = {
      dhIECIGOG: `(max-width: 809.98px)`,
      nmgd5gtxB: `(min-width: 1200px)`,
      TeU9Yksoz: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (Li = () => typeof document < `u`),
    (Ri = []),
    (zi = `framer-aGrd6`),
    (Bi = {
      dhIECIGOG: `framer-v-9mw72s`,
      nmgd5gtxB: `framer-v-1coi8vx`,
      TeU9Yksoz: `framer-v-1fb5svf`,
    }),
    (Vi = (e, t, n) => (e && t ? `position` : n)),
    (Hi = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (Ui = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (Wi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0, duration: 0.5, ease: [0.44, 0, 0.22, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Gi = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 50,
    }),
    (Ki = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: -80,
      y: 0,
    }),
    (qi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.1, duration: 0.5, ease: [0.44, 0, 0.22, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Ji = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.2, duration: 0.5, ease: [0.44, 0, 0.22, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Yi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 0.5, ease: [0.44, 0, 0.22, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Xi = { delay: 0, duration: 0.5, ease: [0.12, 0.23, 0, 1], type: `tween` }),
    (Zi = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Xi,
      x: 450,
      y: 0,
    }),
    (Qi = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: Xi,
      x: 0,
      y: 0,
    }),
    ($i = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 450,
      y: 0,
    }),
    (ea = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (ta = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = be({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (na = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 60,
    }),
    (ra = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.18, 0.98], type: `tween` }),
    (ia = { delay: 0, duration: 0.5, ease: [0.44, 0, 0.04, 1], type: `tween` }),
    (aa = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
    (oa = (e, t) => {
      switch (typeof e == `string` ? e.toLowerCase() : e) {
        case `soft baked`:
          return `QXmAHKumC`;
        case `cream filled`:
          return `NPNMwdere`;
        case `extra glazed`:
          return `LSs_Qyvsg`;
        default:
          return `QXmAHKumC`;
      }
    }),
    (sa = (e) => ({
      from: { alias: `AHDL7zR0W`, data: St, type: `Collection` },
      limit: { type: `LiteralValue`, value: 3 },
      select: [
        { collection: `AHDL7zR0W`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `AHDL7zR0W`, name: `umB1EKw1L`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (ca = (e) => ({
      from: { alias: `AHDL7zR0W`, data: St, type: `Collection` },
      limit: { type: `LiteralValue`, value: 4 },
      select: [
        { collection: `AHDL7zR0W`, name: `vIcxxiuyk`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `QvNWOjBr7`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `zzQZUhJ6B`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `AHDL7zR0W`, name: `id`, type: `Identifier` },
      ],
      where: {
        operator: `not`,
        type: `UnaryOperation`,
        value: {
          left: { collection: `AHDL7zR0W`, name: `umB1EKw1L`, type: `Identifier` },
          operator: `==`,
          right: { type: `LiteralValue`, value: e },
          type: `BinaryOperation`,
        },
      },
    })),
    (la = ({ query: e, pageSize: t, children: n }) => n(L(e))),
    (ua = { Desktop: `nmgd5gtxB`, Phone: `dhIECIGOG`, Tablet: `TeU9Yksoz` }),
    (da = ({ value: e }) =>
      se()
        ? null
        : f(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (fa = (e) => ({
      from: { alias: `hsuD1wdR7`, data: St, type: `Collection` },
      select: [
        { collection: `hsuD1wdR7`, name: `umB1EKw1L`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `LAQiHD1E6`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `y01rka4C5`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `pL1EtHXz9`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `RK2gpYVvl`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `iRZDSJ_6A`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `Meh67ADUX`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `EC6QG0vWL`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `kOZXGa5vU`, type: `Identifier` },
        { collection: `hsuD1wdR7`, name: `vIcxxiuyk`, type: `Identifier` },
      ],
      where: e,
    })),
    (pa = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: ua[r.variant] ?? r.variant ?? `nmgd5gtxB`,
    })),
    (ma = j(
      p(function (e, t) {
        let n = g(null),
          i = t ?? n,
          o = b(),
          { activeLocale: s, setLocale: c } = _e(),
          l = ue(),
          u = ge(),
          [d] = L(fa(ne(u, `hsuD1wdR7`))),
          p = (e) => {
            if (!d) throw new H(`No data matches path variables: ${JSON.stringify(u)}`);
            return d[e];
          },
          {
            style: v,
            className: x,
            layoutId: S,
            variant: E,
            umB1EKw1L: D = p(`umB1EKw1L`) ?? ``,
            LAQiHD1E6: O = p(`LAQiHD1E6`) ?? ``,
            y01rka4C5: k = p(`y01rka4C5`),
            pL1EtHXz9: A = p(`pL1EtHXz9`),
            RK2gpYVvl: j = p(`RK2gpYVvl`),
            iRZDSJ_6A: te = p(`iRZDSJ_6A`),
            Meh67ADUX: N = p(`Meh67ADUX`) ?? ``,
            EC6QG0vWL: P = p(`EC6QG0vWL`) ?? ``,
            kOZXGa5vU: F = p(`kOZXGa5vU`) ?? ``,
            vIcxxiuyk: ie = p(`vIcxxiuyk`) ?? ``,
            ...B
          } = pa(e);
        xe(a(() => jt({ umB1EKw1L: D }, s), [D, s]));
        let [V, se] = me(E, Ii, !1),
          { activeVariantCallback: ce, delay: le } = oe(void 0),
          de = ({ overlay: e }) =>
            ce(async (...t) => {
              e.toggle();
            }),
          q = ({ overlay: e }) =>
            ce(async (...t) => {
              e.hide();
            }),
          J = I(zi, Et, Te, st, vt, At, nt, mt, ke, ot),
          be = h(he)?.isLayoutTemplate,
          Se = !!h(w)?.transition?.layout,
          Ce = Vi(be, Se),
          we = () => !Li() || ![`TeU9Yksoz`, `dhIECIGOG`].includes(V),
          Ee = () => !!(!Li() || [`TeU9Yksoz`, `dhIECIGOG`].includes(V));
        return (
          ye(),
          G({}),
          f(he.Provider, {
            value: {
              activeVariantId: V,
              humanReadableVariantMap: ua,
              primaryVariantId: `nmgd5gtxB`,
              variantClassNames: Bi,
            },
            children: _(ee, {
              id: S ?? o,
              children: [
                f(da, {
                  value: `html body { background: var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255)); }`,
                }),
                _(C.div, {
                  ...B,
                  className: I(J, `framer-1coi8vx`, x),
                  ref: i,
                  style: { ...v },
                  children: [
                    _(C.section, {
                      className: `framer-xd5jc4`,
                      "data-framer-name": `Section: Hero`,
                      layout: Ce,
                      children: [
                        _(`div`, {
                          className: `framer-do71xt`,
                          "data-framer-name": `Image`,
                          children: [
                            we() &&
                              f(`div`, {
                                className: `framer-131wcv3 hidden-1fb5svf hidden-9mw72s`,
                                "data-framer-name": `Space`,
                              }),
                            we() &&
                              _(`div`, {
                                className: `framer-1l8no6t hidden-1fb5svf hidden-9mw72s`,
                                "data-framer-name": `Image`,
                                children: [
                                  f(W, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((l?.y || 0) + 140 + 0 + 0 + 0 + 0 + 0),
                                      pixelHeight: 1402,
                                      pixelWidth: 1122,
                                      sizes: `calc(max(${l?.width || `100vw`} - 40px, 1px) / 2)`,
                                      ...Hi(k),
                                    },
                                    className: `framer-648wxs`,
                                  }),
                                  f(W, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((l?.y || 0) + 140 + 0 + 0 + 0 + 0 + 1e3),
                                      pixelHeight: 1402,
                                      pixelWidth: 1122,
                                      sizes: `calc(max(${l?.width || `100vw`} - 40px, 1px) / 2)`,
                                      ...Hi(A),
                                    },
                                    className: `framer-poq70h`,
                                  }),
                                  f(W, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((l?.y || 0) + 140 + 0 + 0 + 0 + 0 + 2e3),
                                      pixelHeight: 1402,
                                      pixelWidth: 1122,
                                      sizes: `calc(max(${l?.width || `100vw`} - 40px, 1px) / 2)`,
                                      ...Hi(j),
                                    },
                                    className: `framer-7awab9`,
                                  }),
                                  f(W, {
                                    background: {
                                      alt: ``,
                                      fit: `fill`,
                                      loading: z((l?.y || 0) + 140 + 0 + 0 + 0 + 0 + 3e3),
                                      pixelHeight: 1402,
                                      pixelWidth: 1122,
                                      sizes: `calc(max(${l?.width || `100vw`} - 40px, 1px) / 2)`,
                                      ...Hi(te),
                                    },
                                    className: `framer-1pesrpl`,
                                  }),
                                ],
                              }),
                            Ee() &&
                              f(Y, {
                                breakpoint: V,
                                overrides: {
                                  dhIECIGOG: {
                                    height: 800,
                                    width: `max(${l?.width || `100vw`} - 80px, 1px)`,
                                    y: (l?.y || 0) + 140 + 0 + 150 + 0 + 0,
                                  },
                                  TeU9Yksoz: {
                                    height: 800,
                                    width: `max(${l?.width || `100vw`} - 104px, 1px)`,
                                    y: (l?.y || 0) + 140 + 0 + 150 + 0 + 0,
                                  },
                                },
                                children: f(K, {
                                  children: f(Y, {
                                    breakpoint: V,
                                    overrides: {
                                      dhIECIGOG: { animate: Wi, initial: Gi, optimized: !0 },
                                      TeU9Yksoz: { animate: Wi, initial: Gi, optimized: !0 },
                                    },
                                    children: f(Ei, {
                                      className: `framer-17i07xv-container hidden-1coi8vx`,
                                      "data-framer-appear-id": `17i07xv`,
                                      nodeId: `bwArMTpax`,
                                      rendersWithMotion: !0,
                                      scopeId: `hsuD1wdR7`,
                                      children: f(un, {
                                        E_YyIj1Fq: Hi(k),
                                        height: `100%`,
                                        id: `bwArMTpax`,
                                        L3lHBq7ad: Hi(te),
                                        layoutId: `bwArMTpax`,
                                        LPo6c9k2x: Hi(A),
                                        style: { width: `100%` },
                                        variant: Ui(`kWPFv_ZEj`),
                                        width: `100%`,
                                        XbXpWCKKc: !0,
                                        zw0_cPFar: Hi(j),
                                      }),
                                    }),
                                  }),
                                }),
                              }),
                          ],
                        }),
                        f(`div`, {
                          className: `framer-1lby9mf`,
                          "data-framer-name": `Contents`,
                          children: _(`div`, {
                            className: `framer-8q9sye`,
                            "data-framer-name": `Container`,
                            children: [
                              _(`div`, {
                                className: `framer-16lxk6r`,
                                "data-framer-name": `Text`,
                                children: [
                                  f(`div`, {
                                    className: `framer-18zyahk`,
                                    "data-framer-name": `Tile & Sub Title`,
                                    children: f(Y, {
                                      breakpoint: V,
                                      overrides: {
                                        dhIECIGOG: { initial: Gi },
                                        TeU9Yksoz: { initial: Gi },
                                      },
                                      children: _(Di, {
                                        animate: Wi,
                                        className: `framer-1ij612q`,
                                        "data-framer-appear-id": `1ij612q`,
                                        "data-framer-name": `Title`,
                                        initial: Ki,
                                        optimized: !0,
                                        children: [
                                          f(M, {
                                            __fromCanvasComponent: !0,
                                            children: f(r, {
                                              children: f(`p`, {
                                                className: `framer-styles-preset-11a3buf`,
                                                "data-styles-preset": `BAtYGGHfj`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                                },
                                                children: `CREAM FILLED`,
                                              }),
                                            }),
                                            className: `framer-kb99b`,
                                            fonts: [`Inter`],
                                            text: ie,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          f(M, {
                                            __fromCanvasComponent: !0,
                                            children: f(r, {
                                              children: f(`h1`, {
                                                className: `framer-styles-preset-i9bl33`,
                                                "data-styles-preset": `Bg6moUAf0`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                                },
                                                children: `Sugar Cloud`,
                                              }),
                                            }),
                                            className: `framer-1ncssme`,
                                            fonts: [`Inter`],
                                            text: D,
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  f(Y, {
                                    breakpoint: V,
                                    overrides: {
                                      dhIECIGOG: { initial: Gi },
                                      TeU9Yksoz: { initial: Gi },
                                    },
                                    children: f(Oi, {
                                      __fromCanvasComponent: !0,
                                      animate: qi,
                                      children: F,
                                      className: `framer-125q0lb`,
                                      "data-framer-appear-id": `125q0lb`,
                                      fonts: [`Inter`],
                                      initial: Ki,
                                      optimized: !0,
                                      stylesPresetsClassNames: {
                                        h1: `framer-styles-preset-i9bl33`,
                                        h2: `framer-styles-preset-15fb0k4`,
                                        h3: `framer-styles-preset-1ik37uq`,
                                        h4: `framer-styles-preset-ca5nwb`,
                                        h5: `framer-styles-preset-uis2r6`,
                                        p: `framer-styles-preset-11a3buf`,
                                      },
                                      verticalAlignment: `top`,
                                      withExternalLayout: !0,
                                    }),
                                  }),
                                  _(`div`, {
                                    className: `framer-1p8p7vw`,
                                    "data-framer-name": `CTA`,
                                    children: [
                                      f(Y, {
                                        breakpoint: V,
                                        overrides: {
                                          dhIECIGOG: { initial: Gi },
                                          TeU9Yksoz: { initial: Gi },
                                        },
                                        children: _(Di, {
                                          animate: Ji,
                                          className: `framer-1r4qht1`,
                                          "data-framer-appear-id": `1r4qht1`,
                                          "data-framer-name": `Price`,
                                          initial: Ki,
                                          optimized: !0,
                                          children: [
                                            _(`div`, {
                                              className: `framer-5zl5dc`,
                                              "data-framer-name": `Price`,
                                              children: [
                                                f(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(r, {
                                                    children: f(`p`, {
                                                      className: `framer-styles-preset-1ik37uq`,
                                                      "data-styles-preset": `zfGqUZJYU`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                                      },
                                                      children: `$`,
                                                    }),
                                                  }),
                                                  className: `framer-1xzmdap`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                f(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(r, {
                                                    children: f(`p`, {
                                                      className: `framer-styles-preset-1ik37uq`,
                                                      "data-styles-preset": `zfGqUZJYU`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                                      },
                                                      children: `17.50`,
                                                    }),
                                                  }),
                                                  className: `framer-6ybn83`,
                                                  fonts: [`Inter`],
                                                  text: N,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                              ],
                                            }),
                                            _(`div`, {
                                              className: `framer-jzvmiq`,
                                              "data-framer-name": `Compare Price`,
                                              children: [
                                                f(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(r, {
                                                    children: f(`p`, {
                                                      className: `framer-styles-preset-1u3gdcs`,
                                                      "data-styles-preset": `kJFpmPtbb`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(245, 163, 190))`,
                                                      },
                                                      children: `$`,
                                                    }),
                                                  }),
                                                  className: `framer-1xmvms`,
                                                  fonts: [`Inter`],
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                f(M, {
                                                  __fromCanvasComponent: !0,
                                                  children: f(r, {
                                                    children: f(`p`, {
                                                      className: `framer-styles-preset-1u3gdcs`,
                                                      "data-styles-preset": `kJFpmPtbb`,
                                                      dir: `auto`,
                                                      style: {
                                                        "--framer-text-color": `var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, rgb(245, 163, 190))`,
                                                      },
                                                      children: `19.00`,
                                                    }),
                                                  }),
                                                  className: `framer-15okigf`,
                                                  fonts: [`Inter`],
                                                  text: P,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                f(`div`, {
                                                  className: `framer-1r4wc9a`,
                                                  "data-framer-name": `Line`,
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      }),
                                      f(Y, {
                                        breakpoint: V,
                                        overrides: {
                                          dhIECIGOG: { initial: Gi },
                                          TeU9Yksoz: { initial: Gi },
                                        },
                                        children: _(Di, {
                                          animate: Yi,
                                          className: `framer-lxm57`,
                                          "data-framer-appear-id": `lxm57`,
                                          "data-framer-name": `Button`,
                                          initial: Ki,
                                          optimized: !0,
                                          children: [
                                            f(ta, {
                                              dismissWithEsc: !0,
                                              children: (e) =>
                                                f(y, {
                                                  children: f(Y, {
                                                    breakpoint: V,
                                                    overrides: {
                                                      dhIECIGOG: {
                                                        width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1920px), 1px)`,
                                                        y:
                                                          (l?.y || 0) +
                                                          140 +
                                                          0 +
                                                          150 +
                                                          860 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          369.6 +
                                                          0 +
                                                          64.8 +
                                                          0 +
                                                          76,
                                                      },
                                                      TeU9Yksoz: {
                                                        width: `max((max(min(max(${l?.width || `100vw`} - 104px, 1px), 1920px), 1px) - 20px) / 2, 1px)`,
                                                        y:
                                                          (l?.y || 0) +
                                                          140 +
                                                          0 +
                                                          150 +
                                                          880 +
                                                          0 +
                                                          0 +
                                                          0 +
                                                          353.6 +
                                                          0 +
                                                          64.8 +
                                                          0,
                                                      },
                                                    },
                                                    children: f(K, {
                                                      height: 56,
                                                      width: `max((min(max(min(max(${l?.width || `100vw`} - 40px, 1px), 1920px) / 2, 1px), 800px) - 100px) / 2, 1px)`,
                                                      y:
                                                        (l?.y || 0) +
                                                        140 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        0 +
                                                        150 +
                                                        409.6 +
                                                        0 +
                                                        64.8 +
                                                        0,
                                                      children: _(ae, {
                                                        className: `framer-d6ejr0-container`,
                                                        id: `d6ejr0`,
                                                        nodeId: `DT19wp9Xy`,
                                                        scopeId: `hsuD1wdR7`,
                                                        children: [
                                                          f(Ci, {
                                                            height: `100%`,
                                                            id: `DT19wp9Xy`,
                                                            layoutId: `DT19wp9Xy`,
                                                            Nt_kadLvR: O,
                                                            style: { width: `100%` },
                                                            width: `100%`,
                                                            ZqSKVdAb2: de({ overlay: e }),
                                                          }),
                                                          f(T, {
                                                            children:
                                                              e.visible &&
                                                              f(y, {
                                                                children: m(
                                                                  f(pe, {
                                                                    triggerId: `d6ejr0`,
                                                                    children: _(ve, {
                                                                      children: [
                                                                        f(
                                                                          C.div,
                                                                          {
                                                                            animate: {
                                                                              opacity: 1,
                                                                              transition: {
                                                                                delay: 0,
                                                                                duration: 0,
                                                                                ease: [
                                                                                  0.5, 0, 0.88,
                                                                                  0.77,
                                                                                ],
                                                                                type: `tween`,
                                                                              },
                                                                            },
                                                                            className: I(
                                                                              J,
                                                                              `framer-15v665s`
                                                                            ),
                                                                            "data-framer-portal-id": `d6ejr0`,
                                                                            exit: {
                                                                              opacity: 0,
                                                                              transition: {
                                                                                delay: 0,
                                                                                duration: 0,
                                                                                ease: [
                                                                                  0.12, 0.23, 0.5,
                                                                                  1,
                                                                                ],
                                                                                type: `tween`,
                                                                              },
                                                                            },
                                                                            initial: { opacity: 0 },
                                                                            onTap: () => e.hide(),
                                                                          },
                                                                          `F4JOd3uS_`
                                                                        ),
                                                                        f(Y, {
                                                                          breakpoint: V,
                                                                          overrides: {
                                                                            dhIECIGOG: {
                                                                              width: `100vw`,
                                                                            },
                                                                            TeU9Yksoz: {
                                                                              width: `450px`,
                                                                            },
                                                                          },
                                                                          children: f(K, {
                                                                            width: `500px`,
                                                                            children: f(ae, {
                                                                              animate: Qi,
                                                                              className: I(
                                                                                J,
                                                                                `framer-wi3uwn-container`
                                                                              ),
                                                                              "data-framer-portal-id": `d6ejr0`,
                                                                              exit: Zi,
                                                                              inComponentSlot: !0,
                                                                              initial: $i,
                                                                              nodeId: `T7k8DpDKs`,
                                                                              rendersWithMotion: !0,
                                                                              scopeId: `hsuD1wdR7`,
                                                                              children: f(Y, {
                                                                                breakpoint: V,
                                                                                overrides: {
                                                                                  dhIECIGOG: {
                                                                                    WzYQugjV7: `16px 20px 16px 20px`,
                                                                                  },
                                                                                  TeU9Yksoz: {
                                                                                    WzYQugjV7: `16px 32px 16px 32px`,
                                                                                  },
                                                                                },
                                                                                children: f(Je, {
                                                                                  height: `100%`,
                                                                                  id: `T7k8DpDKs`,
                                                                                  layoutId: `T7k8DpDKs`,
                                                                                  mVII5M5cP: q({
                                                                                    overlay: e,
                                                                                  }),
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  width: `100%`,
                                                                                  WzYQugjV7: `16px 40px 16px 40px`,
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          }),
                                                                        }),
                                                                      ],
                                                                    }),
                                                                  }),
                                                                  ea()
                                                                ),
                                                              }),
                                                          }),
                                                        ],
                                                      }),
                                                    }),
                                                  }),
                                                }),
                                            }),
                                            f(Y, {
                                              breakpoint: V,
                                              overrides: {
                                                dhIECIGOG: {
                                                  width: `max(min(max(${l?.width || `100vw`} - 80px, 1px), 1920px), 1px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    140 +
                                                    0 +
                                                    150 +
                                                    860 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    369.6 +
                                                    0 +
                                                    64.8 +
                                                    0 +
                                                    0,
                                                },
                                                TeU9Yksoz: {
                                                  width: `max((max(min(max(${l?.width || `100vw`} - 104px, 1px), 1920px), 1px) - 20px) / 2, 1px)`,
                                                  y:
                                                    (l?.y || 0) +
                                                    140 +
                                                    0 +
                                                    150 +
                                                    880 +
                                                    0 +
                                                    0 +
                                                    0 +
                                                    353.6 +
                                                    0 +
                                                    64.8 +
                                                    0,
                                                },
                                              },
                                              children: f(K, {
                                                height: 56,
                                                width: `max((min(max(min(max(${l?.width || `100vw`} - 40px, 1px), 1920px) / 2, 1px), 800px) - 100px) / 2, 1px)`,
                                                y:
                                                  (l?.y || 0) +
                                                  140 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  0 +
                                                  150 +
                                                  409.6 +
                                                  0 +
                                                  64.8 +
                                                  0,
                                                children: f(ae, {
                                                  className: `framer-80nlld-container`,
                                                  nodeId: `msTVuegpc`,
                                                  scopeId: `hsuD1wdR7`,
                                                  children: f(ur, {
                                                    bVhYNmEzi: O,
                                                    height: `100%`,
                                                    id: `msTVuegpc`,
                                                    layoutId: `msTVuegpc`,
                                                    style: { width: `100%` },
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              we() &&
                                f(`div`, {
                                  className: `framer-1uhp3u6 hidden-1fb5svf hidden-9mw72s`,
                                  "data-framer-name": `Space`,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    f(C.section, {
                      className: `framer-5frhb0`,
                      "data-framer-name": `Section: Ticker`,
                      layout: Ce,
                      children: _(Mi, {
                        className: `framer-1ez88hn`,
                        tickerEffectAlign: `center`,
                        tickerEffectDirectionModifier: `default`,
                        tickerEffectDraggable: !1,
                        tickerEffectEnabled: !0,
                        tickerEffectGap: `100px`,
                        tickerEffectHoverModifier: 100,
                        tickerEffectOverflow: `clip`,
                        tickerEffectPosition: `relative`,
                        tickerEffectStackDirection: `row`,
                        tickerEffectVelocity: 60,
                        children: [
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-7rccvt`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-emygoq`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-1apfnqo`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-1220s0k`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-8r7l4y`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-6ny02w`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                          f(re, {
                            children: f(M, {
                              __fromCanvasComponent: !0,
                              children: f(r, {
                                children: f(`p`, {
                                  className: `framer-styles-preset-653p1z`,
                                  "data-styles-preset": `cRhro8yAF`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--token-45051b95-95f4-4500-8ea4-680290236b85, rgb(255, 255, 255))`,
                                  },
                                  children: `SWEET MORELS`,
                                }),
                              }),
                              className: `framer-wzl1cy`,
                              fonts: [`Inter`],
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                        ],
                      }),
                    }),
                    f(C.section, {
                      className: `framer-1fc51ql`,
                      "data-framer-name": `Section: Show more`,
                      layout: Ce,
                      children: _(`div`, {
                        className: `framer-1ab4byx`,
                        "data-framer-name": `Container`,
                        children: [
                          f(Ni, {
                            __framer__animate: { transition: ra },
                            __framer__animateOnce: !0,
                            __framer__enter: na,
                            __framer__styleAppearEffectEnabled: !0,
                            __framer__threshold: 0.5,
                            __fromCanvasComponent: !0,
                            __perspectiveFX: !1,
                            __targetOpacity: 1,
                            children: f(r, {
                              children: f(`h2`, {
                                className: `framer-styles-preset-gadxkx`,
                                "data-styles-preset": `nqYznXGVD`,
                                dir: `auto`,
                                children: `MAYBE YOU LOVE IT`,
                              }),
                            }),
                            className: `framer-jy0ae3`,
                            fonts: [`Inter`],
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                          f(`div`, {
                            className: `framer-4gb5d5`,
                            children: f(fe, {
                              children: f(Y, {
                                breakpoint: V,
                                overrides: {
                                  dhIECIGOG: { query: ca(D) },
                                  TeU9Yksoz: { query: ca(D) },
                                },
                                children: f(la, {
                                  query: sa(D),
                                  children: (e, t, n) =>
                                    f(y, {
                                      children: e?.map(
                                        (
                                          {
                                            id: e,
                                            Meh67ADUX: t,
                                            QvNWOjBr7: n,
                                            umB1EKw1L: r,
                                            vIcxxiuyk: i,
                                            zzQZUhJ6B: a,
                                          },
                                          o
                                        ) => (
                                          (i ??= ``),
                                          (n ??= ``),
                                          (r ??= ``),
                                          (t ??= ``),
                                          f(
                                            ee,
                                            {
                                              id: `AHDL7zR0W-${e}`,
                                              children: f(U.Provider, {
                                                value: { QvNWOjBr7: n },
                                                children: f(R, {
                                                  links: [
                                                    {
                                                      href: {
                                                        pathVariables: { QvNWOjBr7: n },
                                                        webPageId: `hsuD1wdR7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { QvNWOjBr7: n },
                                                        webPageId: `hsuD1wdR7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                    {
                                                      href: {
                                                        pathVariables: { QvNWOjBr7: n },
                                                        webPageId: `hsuD1wdR7`,
                                                      },
                                                      implicitPathVariables: void 0,
                                                    },
                                                  ],
                                                  children: (e) =>
                                                    f(Y, {
                                                      breakpoint: V,
                                                      overrides: {
                                                        dhIECIGOG: {
                                                          width: `max(min(${l?.width || `100vw`} - 40px, 1920px) - 40px, 50px)`,
                                                          y:
                                                            (l?.y || 0) +
                                                            140 +
                                                            2058.8 +
                                                            0 +
                                                            0 +
                                                            100 +
                                                            172 +
                                                            0 +
                                                            0,
                                                        },
                                                        TeU9Yksoz: {
                                                          width: `max((min(max(${l?.width || `100vw`} - 40px, 1px), 1920px) - 84px) / 2, 50px)`,
                                                          y:
                                                            (l?.y || 0) +
                                                            140 +
                                                            2006.8 +
                                                            0 +
                                                            120 +
                                                            192 +
                                                            0 +
                                                            0,
                                                        },
                                                      },
                                                      children: f(K, {
                                                        height: 579,
                                                        width: `max((min(max(${l?.width || `100vw`} - 40px, 1px), 1920px) - 120px) / 3, 50px)`,
                                                        y:
                                                          (l?.y || 0) +
                                                          140 +
                                                          4382.4 +
                                                          0 +
                                                          150 +
                                                          212 +
                                                          0 +
                                                          0,
                                                        children: f(Fi, {
                                                          __framer__animate: {
                                                            transition: aa(ia, o * 0.2),
                                                          },
                                                          __framer__animateOnce: !0,
                                                          __framer__enter: na,
                                                          __framer__styleAppearEffectEnabled: !0,
                                                          __framer__threshold: 0.5,
                                                          __perspectiveFX: !1,
                                                          __targetOpacity: 1,
                                                          className: `framer-r6bl7p-container`,
                                                          nodeId: `n4woFg6Gf`,
                                                          rendersWithMotion: !0,
                                                          scopeId: `hsuD1wdR7`,
                                                          children: f(Y, {
                                                            breakpoint: V,
                                                            overrides: {
                                                              dhIECIGOG: { zNomss0Hu: e[2] },
                                                              TeU9Yksoz: { zNomss0Hu: e[1] },
                                                            },
                                                            children: f(bt, {
                                                              dQFljyQ1P: t,
                                                              height: `100%`,
                                                              id: `n4woFg6Gf`,
                                                              layoutId: `n4woFg6Gf`,
                                                              OY08iNrnQ: r,
                                                              style: { width: `100%` },
                                                              t_wCHCu3L: Hi(a),
                                                              variant: Ui(oa(i, s)),
                                                              width: `100%`,
                                                              zbLf7nA9u: i,
                                                              zNomss0Hu: e[0],
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                }),
                                              }),
                                            },
                                            e
                                          )
                                        )
                                      ),
                                    }),
                                }),
                              }),
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                f(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `.framer-aGrd6.framer-1y4f5cx, .framer-aGrd6 .framer-1y4f5cx { display: block; }`,
        `.framer-aGrd6.framer-1coi8vx { align-content: center; align-items: center; background-color: var(--token-45051b95-95f4-4500-8ea4-680290236b85, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-aGrd6 .framer-xd5jc4, .framer-aGrd6 .framer-1fc51ql { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-aGrd6 .framer-do71xt { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1px; z-index: 2; }`,
        `.framer-aGrd6 .framer-131wcv3 { background-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); flex: 1 0 0px; gap: 0px; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-aGrd6 .framer-1l8no6t { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 50%; }`,
        `.framer-aGrd6 .framer-648wxs, .framer-aGrd6 .framer-poq70h, .framer-aGrd6 .framer-7awab9, .framer-aGrd6 .framer-1pesrpl { flex: none; height: 100vh; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; will-change: var(--framer-will-change-filter-override, filter); }`,
        `.framer-aGrd6 .framer-17i07xv-container, .framer-aGrd6 .framer-d6ejr0-container, .framer-aGrd6 .framer-80nlld-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-aGrd6 .framer-1lby9mf { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: 0px; width: 100%; z-index: 2; }`,
        `.framer-aGrd6 .framer-8q9sye { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 100%; justify-content: flex-start; max-width: 1920px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
        `.framer-aGrd6 .framer-16lxk6r { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 52px; height: 100vh; justify-content: flex-start; max-width: 800px; overflow: visible; padding: 150px 40px 100px 40px; position: sticky; top: 0px; width: 1px; z-index: 1; }`,
        `.framer-aGrd6 .framer-18zyahk, .framer-aGrd6 .framer-1p8p7vw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aGrd6 .framer-1ij612q { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-aGrd6 .framer-kb99b, .framer-aGrd6 .framer-1ncssme, .framer-aGrd6 .framer-jy0ae3 { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-aGrd6 .framer-125q0lb { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-aGrd6 .framer-1r4qht1 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-aGrd6 .framer-5zl5dc, .framer-aGrd6 .framer-jzvmiq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
        `.framer-aGrd6 .framer-1xzmdap, .framer-aGrd6 .framer-6ybn83, .framer-aGrd6 .framer-1xmvms, .framer-aGrd6 .framer-15okigf, .framer-aGrd6 .framer-7rccvt, .framer-aGrd6 .framer-emygoq, .framer-aGrd6 .framer-1apfnqo, .framer-aGrd6 .framer-1220s0k, .framer-aGrd6 .framer-8r7l4y, .framer-aGrd6 .framer-6ny02w, .framer-aGrd6 .framer-wzl1cy { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-aGrd6 .framer-1r4wc9a { background-color: var(--token-0f1215d1-a939-4d93-b5f3-fa7d349fb892, #f5a3be); flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(45.00000000000002% - 1px / 2); width: 100%; z-index: 1; }`,
        `.framer-aGrd6 .framer-lxm57 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-aGrd6.framer-15v665s { background-color: rgba(0, 0, 0, 0.8); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-aGrd6.framer-wi3uwn-container { flex: none; height: 100vh; position: fixed; right: 0px; top: 0px; width: 500px; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-aGrd6 .framer-1uhp3u6 { flex: none; gap: 0px; height: 100%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 50%; }`,
        `.framer-aGrd6 .framer-5frhb0 { align-content: center; align-items: center; background-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 20px 0px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-aGrd6 .framer-1ez88hn { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
        `.framer-aGrd6 .framer-1ab4byx { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 100px; height: min-content; justify-content: center; max-width: 1920px; overflow: visible; padding: 150px 40px 150px 40px; position: relative; width: 1px; }`,
        `.framer-aGrd6 .framer-4gb5d5 { display: grid; flex: none; gap: 40px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-aGrd6 .framer-r6bl7p-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
        ...wt,
        ...Ce,
        ...dt,
        ...gt,
        ...Ot,
        ...et,
        ...ut,
        ...De,
        ...it,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-aGrd6.framer-1coi8vx { width: 810px; } .framer-aGrd6 .framer-xd5jc4 { background-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); flex-direction: column; gap: 80px; padding: 150px 32px 120px 32px; } .framer-aGrd6 .framer-do71xt { flex: none; width: 100%; } .framer-aGrd6 .framer-17i07xv-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-aGrd6 .framer-1lby9mf { height: min-content; left: unset; position: relative; top: unset; } .framer-aGrd6 .framer-8q9sye { height: min-content; } .framer-aGrd6 .framer-16lxk6r { gap: 24px; height: min-content; max-width: unset; padding: 0px; position: relative; top: unset; } .framer-aGrd6.framer-wi3uwn-container { width: 450px; } .framer-aGrd6 .framer-1ab4byx { gap: 80px; padding: 120px 32px 120px 32px; } .framer-aGrd6 .framer-4gb5d5 { grid-template-columns: repeat(2, minmax(50px, 1fr)); }}`,
        `@media (max-width: 809.98px) { .framer-aGrd6.framer-1coi8vx { width: 390px; } .framer-aGrd6 .framer-xd5jc4 { background-color: var(--token-6bb30bad-8756-4356-9c41-728d60b200cc, #db5783); flex-direction: column; gap: 60px; padding: 150px 20px 100px 20px; } .framer-aGrd6 .framer-do71xt, .framer-aGrd6 .framer-1ez88hn { flex: none; width: 100%; } .framer-aGrd6 .framer-17i07xv-container { will-change: var(--framer-will-change-effect-override, transform); } .framer-aGrd6 .framer-1lby9mf { height: min-content; left: unset; position: relative; top: unset; } .framer-aGrd6 .framer-8q9sye { height: min-content; } .framer-aGrd6 .framer-16lxk6r { gap: 32px; height: min-content; max-width: unset; padding: 0px; position: relative; top: unset; } .framer-aGrd6 .framer-lxm57, .framer-aGrd6 .framer-5frhb0, .framer-aGrd6 .framer-1fc51ql { flex-direction: column; } .framer-aGrd6 .framer-d6ejr0-container { flex: none; order: 1; width: 100%; } .framer-aGrd6.framer-wi3uwn-container { width: 100%; } .framer-aGrd6 .framer-80nlld-container { flex: none; order: 0; width: 100%; } .framer-aGrd6 .framer-1ab4byx { flex: none; gap: 60px; padding: 100px 20px 100px 20px; width: 100%; } .framer-aGrd6 .framer-4gb5d5 { gap: 20px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }}`,
      ],
      `framer-aGrd6`
    )),
    (ma.displayName = `Framer Commerce`),
    (ma.defaultProps = { height: 4744, width: 1200 }),
    ce(
      ma,
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
        ...Ti,
        ...ki,
        ...Ai,
        ...ji,
        ...Pi,
        ...P(Tt),
        ...P(we),
        ...P(pt),
        ...P(_t),
        ...P(kt),
        ...P(tt),
        ...P(ft),
        ...P(Ee),
        ...P(at),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (ma.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = J.get(fa(ne(t.pathVariables, `hsuD1wdR7`)), n).readMaybeAsync();
        return Promise.allSettled([
          N(un, {}, t),
          N(Ci, {}, t),
          N(Je, {}, t),
          N(ur, {}, t),
          (async () => {
            let [e] = (await r) ?? [];
            return Promise.allSettled([
              J.get(sa(e?.umB1EKw1L), n).preload(),
              J.get(ca(e?.umB1EKw1L), n).preload(),
            ]);
          })(),
          (async () => {
            let [e] = (await r) ?? [],
              i = (await J.get(sa(e?.umB1EKw1L), n).readMaybeAsync()) ?? [];
            return Promise.allSettled(i.flatMap((e) => N(bt, {}, t)));
          })(),
        ]);
      },
    }),
    (ha = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerhsuD1wdR7`,
          slots: [],
          annotations: {
            framerScrollSections: `false`,
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerDisplayContentsDiv: `false`,
            framerIntrinsicHeight: `4744`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
            framerColorSyntax: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"TeU9Yksoz":{"layout":["fixed","auto"]},"dhIECIGOG":{"layout":["fixed","auto"]}}}`,
            framerResponsiveScreen: `true`,
            framerComponentViewportWidth: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { ha as __FramerMetadata__, ma as default, Ri as queryParamNames };
//# sourceMappingURL=o1a9tqCsRNdXFMwYNI5GnwoX010MBPg2yF4m_igM3_U.6LXtTu-1.mjs.map
