import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  C as n,
  D as r,
  E as i,
  H as a,
  L as o,
  N as s,
  P as c,
  R as l,
  S as u,
  a as d,
  c as f,
  f as p,
  h as m,
  j as h,
  l as g,
  m as _,
  o as v,
  s as y,
  u as b,
  x,
  y as S,
} from "./react.BtSUcPAM.mjs";
import { P as C, i as w, n as ee, o as T, t as E } from "./motion.B_UOAosx.mjs";
import {
  A as D,
  At as O,
  C as k,
  D as A,
  E as j,
  Et as M,
  Ft as N,
  G as P,
  I as F,
  J as te,
  L as ne,
  M as I,
  Mt as re,
  N as L,
  Nt as ie,
  O as R,
  Ot as z,
  Pt as B,
  Q as V,
  R as H,
  S as ae,
  T as oe,
  Tt as se,
  W as U,
  a as ce,
  at as le,
  f as ue,
  g as de,
  gt as W,
  h as fe,
  ht as pe,
  i as G,
  jt as K,
  kt as me,
  n as he,
  o as q,
  pt as ge,
  q as _e,
  r as ve,
  t as ye,
  v as be,
  vt as xe,
  w as Se,
  xt as Ce,
  y as we,
  yt as Te,
} from "./framer.DuFjdl15.mjs";
import {
  H as Ee,
  J as De,
  M as Oe,
  N as ke,
  P as Ae,
  S as je,
  U as Me,
  V as Ne,
  a as Pe,
  c as Fe,
  i as Ie,
  j as Le,
  n as Re,
  o as ze,
  r as Be,
  s as Ve,
  t as He,
  x as Ue,
} from "./uMfPNtWsK.Ef5pNhkD.mjs";
import { i as We, r as Ge } from "./T6200DqYJ.DDATVUMg.mjs";
import { i as Ke, n as qe, r as Je, t as Ye } from "./MYFsM6f0k.DfnOeWKh.mjs";
import {
  a as Xe,
  c as Ze,
  i as Qe,
  n as $e,
  o as et,
  r as tt,
  s as nt,
  t as rt,
} from "./nPgMT6_MJ.D2I9CMU9.mjs";
import { i as it, n as at, r as ot, t as st } from "./UOFERiKNL.BLQejQ4n.mjs";
import { a as ct, i as lt, n as ut, o as dt, r as ft, t as pt } from "./jqlnmWM57.B2NfWqcv.mjs";
import { i as mt, n as ht, r as gt, t as _t } from "./O7___hs0c.B0mkyocV.mjs";
import {
  a as vt,
  c as yt,
  d as bt,
  f as xt,
  i as St,
  l as Ct,
  n as wt,
  o as Tt,
  r as Et,
  s as Dt,
  t as Ot,
  u as kt,
} from "./CMS_Slider.DMhH8qwC.mjs";
import { a as At, i as jt, n as Mt, o as Nt, r as Pt, t as Ft } from "./S3WzxrIrx.C6dgk-ax.mjs";
import { n as It, t as Lt } from "./hGHQ5rEun.Dh_Aq6Qp.mjs";
import { i as Rt, n as zt, r as Bt, t as Vt } from "./OrFaou4jp.DoaP9WJQ.mjs";
import { i as Ht, n as Ut, r as Wt, t as Gt } from "./AeW2_n5fC.D-uaYwh6.mjs";
import { n as Kt, t as qt } from "./AvoidLayoutJumping_Prod.Cx5lsArE.mjs";
import { i as Jt, n as Yt, r as Xt, t as Zt } from "./T34TeK0BY.B6r-M3CG.mjs";
import {
  a as Qt,
  c as $t,
  i as en,
  n as tn,
  o as nn,
  r as rn,
  s as an,
  t as on,
} from "./nGyXqu_19.Cc8jxYcO.mjs";
import sn, { t as cn } from "./a1I4iMq8VgANbd720jTO7zPCWw5KMcfjYyuw9L_dUTU.B8UGZQv7.mjs";
function ln(e) {
  let [t, n] = S(!1),
    [r, i] = S(0),
    [a, o] = S(0),
    [s, c] = S([]),
    [u, d] = S(!1),
    [f, p] = S(!1),
    m = e.direction === `left`;
  (x(() => {
    let e = (e) => {
        let t = e.detail?.imageNumber;
        if (t) {
          let e = s.indexOf(t),
            n;
          if (e !== -1) n = e;
          else if (s.length > 0) return;
          else n = t - 1;
          i(n);
        }
      },
      t = (e) => {
        let t = e.detail?.count;
        typeof t == `number` && o(t);
      },
      n = (e) => {
        let t = e.detail?.visibleImages;
        if (Array.isArray(t)) {
          let e = t.map((e) => e.imageNumber).filter(Boolean);
          c(e);
        }
      },
      r = (e) => {
        let { currentIndex: t, totalImages: n, canGoPrevious: r, canGoNext: a } = e.detail || {};
        (typeof t == `number` && i(t),
          typeof n == `number` && o(n),
          typeof r == `boolean` && d(r),
          typeof a == `boolean` && p(a));
      };
    return (
      document.addEventListener(`image__number__selected`, e),
      document.addEventListener(`image__tap`, e),
      document.addEventListener(`images__loaded`, t),
      document.addEventListener(`visible__images__update`, n),
      document.addEventListener(`slideshow__navigation__state`, r),
      () => {
        (document.removeEventListener(`image__number__selected`, e),
          document.removeEventListener(`image__tap`, e),
          document.removeEventListener(`images__loaded`, t),
          document.removeEventListener(`visible__images__update`, n),
          document.removeEventListener(`slideshow__navigation__state`, r));
      }
    );
  }, []),
    x(() => {
      n(m ? !u : !f);
    }, [r, a, m, u, f]));
  let h = () => {
      if (t) return;
      let e = new CustomEvent(`slideshow__navigate`, {
        detail: { direction: m ? `previous` : `next`, currentIndex: r, visibleImageNumbers: s },
      });
      document.dispatchEvent(e);
    },
    g = (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), h());
    },
    _ = e.defaultContent?.[0],
    v = e.disabledContent?.[0];
  return y(`div`, {
    role: `button`,
    tabIndex: 0,
    onClick: (e) => {
      t || h();
    },
    onKeyDown: g,
    style: {
      width: `100%`,
      height: `100%`,
      cursor: t ? `default` : `pointer`,
      pointerEvents: t ? `none` : `auto`,
    },
    "aria-label": `${m ? `Previous` : `Next`} image`,
    "aria-disabled": t,
    children:
      !_ || !v
        ? y(`div`, {
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
        : l(t ? v : _, {
            style: {
              ...(t ? v.props?.style : _.props?.style || {}),
              width: `100%`,
              height: `100%`,
            },
          }),
  });
}
var un = e(() => {
  (f(),
    r(),
    V(),
    (ln.defaultProps = { direction: `left` }),
    L(ln, {
      direction: {
        type: q.Enum,
        title: `Direction`,
        options: [`left`, `right`],
        optionTitles: [`←`, `→`],
        defaultValue: `left`,
        displaySegmentedControl: !0,
      },
      defaultContent: { type: q.ComponentInstance, title: `Default` },
      disabledContent: { type: q.ComponentInstance, title: `Disabled` },
    }));
});
function dn(e) {
  let [t, r] = S(0),
    [i, o] = S(0),
    [s, c] = S(null),
    [l, d] = S({}),
    f = u(null),
    p = u(null),
    m = u(null),
    h = n.useCallback(() => {
      let e = Object.entries(l).map(([e, t]) => ({ name: e, value: t }));
      return e.length > 0 ? { selectedOptions: e } : null;
    }, [l]),
    g = n.useCallback(() => {
      if (!e.shopifyProductID || a === void 0) return;
      let t = a.shopXtools?.products?.find((t) => t.node.handle === e.shopifyProductID);
      if (t?.node?.options) {
        let e = {};
        (t.node.options.forEach((t) => {
          t.values && t.values.length === 1 && (e[t.name] = t.values[0]);
        }),
          Object.keys(e).length > 0 && d(e));
      }
    }, [e.shopifyProductID]),
    _ = n.useMemo(() => {
      let t = [],
        n = e.images || 24;
      for (let r = 1; r <= n; r++) {
        let n = e[`image${r}`];
        n && t.push({ image: n, imageNumber: r });
      }
      return t;
    }, [e.images]),
    v = n.useCallback(
      (t, n) => {
        if (!t || !n || !t.selectedOptions || t.selectedOptions.length === 0) return !0;
        let r = t.selectedOptions.map((e) => e.value.toLowerCase()),
          i = n.toLowerCase(),
          a = r.map((e) => {
            let t = e.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`);
            return [
              RegExp(`\\b${t}\\b`, `i`),
              RegExp(`\\(${t}\\)`, `i`),
              RegExp(`\\s${t}\\s`, `i`),
              RegExp(`^${t}\\s`, `i`),
              RegExp(`\\s${t}$`, `i`),
              RegExp(`^${t}$`, `i`),
            ].some((e) => e.test(i));
          }),
          o = !1;
        return (
          (o =
            e.FilterVariants?.filterMatch === `All`
              ? a.every((e) => e === !0)
              : a.some((e) => e === !0)),
          o
        );
      },
      [e.FilterVariants?.filterMatch]
    ),
    C = n.useMemo(() => {
      let t =
          e.FilterVariants?.filterVariants === `If Active Variant` ||
          e.FilterVariants?.filterVariants === `Only Active Variant`,
        n = s || Object.keys(l).length > 0;
      return !t || !n
        ? _
        : _.filter((e) => {
            let t = (typeof e.image == `object` && e.image.alt) || ``,
              n = [s, h()].filter(Boolean),
              r = !0;
            return (n.length > 0 && (r = n.some((e) => v(e, t))), r);
          });
    }, [_, e.FilterVariants?.filterVariants, e.FilterVariants?.filterMatch, s, l, h, v]);
  (x(() => {
    let t = (e) => {
        e.detail &&
          (c(e.detail),
          e.detail.isCompleteVariant === !0 &&
            e.detail.selectedOptions &&
            e.detail.selectedOptions.length > 0 &&
            d({}));
      },
      n = (t) => {
        t.detail &&
          t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` &&
          (d((e) => ({ ...e, [t.detail.optionName]: t.detail.value })),
          Object.keys(l).length === 0 && c(null));
      },
      r = (t) => {
        t.detail &&
          t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` &&
          d(t.detail.selectedOptions || {});
      },
      i = (t) => {
        t.detail &&
          t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` &&
          d(t.detail.selectedOptions || {});
      },
      a = (t) => {
        if (e.shopifyProductID) {
          let t = `fc_active_variant_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t);
          if (n)
            try {
              let e = JSON.parse(n);
              e.selectedOptions && d(e.selectedOptions);
            } catch {}
          else g();
        }
      },
      o = (t) => {
        if (
          t.detail &&
          t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` &&
          e.shopifyProductID
        ) {
          let t = `fc_active_variant_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t);
          if (n)
            try {
              let e = JSON.parse(n);
              e.selectedOptions && d(e.selectedOptions);
            } catch {}
          else g();
        }
      },
      s = (t) => {
        t.detail &&
          t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` &&
          t.detail.selectedOptions &&
          d(t.detail.selectedOptions);
      };
    (document.addEventListener(`product__active-variant__changed`, t),
      document.addEventListener(`variant_option_selected`, n),
      document.addEventListener(`variant__options__sync`, r),
      document.addEventListener(`variant__visual__sync`, i),
      document.addEventListener(`data__products-ready`, a),
      document.addEventListener(`retry-auto-select`, o),
      document.addEventListener(`variant__image__match`, s));
    try {
      let t = new CustomEvent(`variant__visual__sync`, {
        detail: {
          productId: e.shopifyProductID ? `gid://shopify/Product/${e.shopifyProductID}` : void 0,
        },
      });
      document.dispatchEvent(t);
    } catch {}
    return () => {
      (document.removeEventListener(`product__active-variant__changed`, t),
        document.removeEventListener(`variant_option_selected`, n),
        document.removeEventListener(`variant__options__sync`, r),
        document.removeEventListener(`variant__visual__sync`, i),
        document.removeEventListener(`data__products-ready`, a),
        document.removeEventListener(`retry-auto-select`, o),
        document.removeEventListener(`variant__image__match`, s));
    };
  }, [e.shopifyProductID, g]),
    x(() => {
      if (a !== void 0 && e.shopifyProductID) {
        let t = `fc_active_variant_${e.shopifyProductID}`,
          n = sessionStorage.getItem(t);
        if (n)
          try {
            let e = JSON.parse(n);
            e.selectedOptions && d(e.selectedOptions);
          } catch {}
      }
    }, [e.shopifyProductID]),
    x(() => {
      let n = (n) => {
          if (e.FilterVariants?.filterVariants === `If Active Variant`) {
            if (n.type === `variant__image__match`) {
              let e = C[t]?.imageNumber;
              if (typeof e == `number` && C.some((t) => t.imageNumber === e)) return;
              let i = n.detail?.imageNumber;
              if (i && C.length) {
                let e = C.findIndex((e) => e.imageNumber === i);
                if (e !== -1) {
                  r(e);
                  return;
                } else return;
              }
            }
            if (n.type === `image__number__selected`) {
              let e = n.detail?.imageNumber;
              if (e && C.length) {
                let t = C.findIndex((t) => t.imageNumber === e);
                if (t !== -1) {
                  r(t);
                  return;
                } else return;
              }
            }
            return;
          }
          let i = n.detail?.imageNumber;
          if (i && C.length) {
            let e = C.findIndex((e) => e.imageNumber === i);
            e !== -1 && r(e);
          }
        },
        i = (e) => {
          if (e.detail?.direction && C.length > 0) {
            let n = t;
            (e.detail.direction === `next` && t < C.length - 1
              ? (n = t + 1)
              : e.detail.direction === `previous` && t > 0 && (n = t - 1),
              n !== t && r(n));
          }
        };
      return (
        document.addEventListener(`image__number__selected`, n),
        document.addEventListener(`image__tap`, n),
        document.addEventListener(`variant__image__match`, n),
        document.addEventListener(`slideshow__navigate`, i),
        () => {
          (document.removeEventListener(`image__number__selected`, n),
            document.removeEventListener(`image__tap`, n),
            document.removeEventListener(`variant__image__match`, n),
            document.removeEventListener(`slideshow__navigate`, i));
        }
      );
    }, [C, t, e.FilterVariants?.filterVariants]),
    x(() => {
      (C.length === 0 || t >= C.length) && r(0);
    }, [C.length, t]),
    x(() => {
      if (C.length > 0 && t < C.length) {
        let e = C[t]?.imageNumber;
        m.current = typeof e == `number` ? e : null;
      }
    }, [C, t]),
    x(() => {
      let e = m.current;
      if (e == null) return;
      let n = C.findIndex((t) => t.imageNumber === e);
      n !== -1 && n !== t && r(n);
    }, [C]),
    x(() => {
      let n = new CustomEvent(`images__loaded`, { detail: { count: C.length } });
      document.dispatchEvent(n);
      let r = new CustomEvent(`visible__images__update`, {
        detail: { visibleImages: C.map((e) => ({ imageNumber: e.imageNumber })) },
      });
      document.dispatchEvent(r);
      let i = new CustomEvent(`slideshow__navigation__state`, {
        detail: {
          currentIndex: t,
          totalImages: C.length,
          canGoPrevious: t > 0,
          canGoNext: t < C.length - 1,
        },
      });
      if ((document.dispatchEvent(i), C.length > 0 && t < C.length)) {
        let n = C[t];
        if (n && e.FilterVariants?.filterVariants !== `If Active Variant`) {
          let e = new CustomEvent(`image__number__selected`, {
            detail: { imageNumber: n.imageNumber },
          });
          document.dispatchEvent(e);
        }
      }
    }, [C.length, t]));
  let w = () => {
      if (f.current !== null) return;
      let n = C[t];
      if (n && e.FilterVariants?.filterVariants !== `If Active Variant`) {
        let e = new CustomEvent(`image__tap`, { detail: { imageNumber: n.imageNumber } });
        document.dispatchEvent(e);
        let t = new CustomEvent(`image__number__selected`, {
          detail: { imageNumber: n.imageNumber },
        });
        document.dispatchEvent(t);
      }
    },
    ee = (e) => {
      (e.preventDefault(), e.stopPropagation());
      let t = `touches` in e ? e.touches[0].clientX : e.clientX;
      ((f.current = t), o(0));
    },
    T = (e) => {
      if ((e.preventDefault(), e.stopPropagation(), f.current === null)) return;
      let n = (`touches` in e ? e.touches[0].clientX : e.clientX) - f.current;
      if ((p.current?.offsetWidth, (t === 0 && n > 0) || (t === C.length - 1 && n < 0))) {
        let e = Math.sign(n) * Math.abs(n) ** 0.75 * 1.5;
        o(e);
      } else o(n);
    },
    E = (n) => {
      if ((n.preventDefault(), n.stopPropagation(), f.current === null)) return;
      let i = (`touches` in n ? n.changedTouches[0].clientX : n.clientX) - f.current,
        a = Math.abs(i) / 100;
      if (Math.abs(i) > 50 || a > 0.5) {
        let n = t;
        if ((i < 0 && t < C.length - 1 ? (n = t + 1) : i > 0 && t > 0 && (n = t - 1), n !== t)) {
          r(n);
          let t = C[n];
          if (t && e.FilterVariants?.filterVariants !== `If Active Variant`) {
            let e = new CustomEvent(`image__tap`, { detail: { imageNumber: t.imageNumber } });
            document.dispatchEvent(e);
            let n = new CustomEvent(`image__number__selected`, {
              detail: { imageNumber: t.imageNumber },
            });
            document.dispatchEvent(n);
          }
        }
      }
      ((f.current = null), o(0));
    };
  return C.length === 0
    ? y(`div`, {
        style: {
          width: e.style.type === `Fill` ? `100%` : `fit-content`,
          height: `100%`,
          position: `relative`,
          overflow: `hidden`,
          padding: e.style.paddingPerSide
            ? `${e.style.paddingTop}px ${e.style.paddingRight}px ${e.style.paddingBottom}px ${e.style.paddingLeft}px`
            : `${e.style.padding}px`,
          borderRadius: e.style.radius,
          backgroundColor: `#f5f5f5`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: y(`div`, {
          style: { color: `#999`, fontSize: `14px` },
          children: `No images available for selected variant`,
        }),
      })
    : C.length === 1
      ? y(`div`, {
          style: {
            width: e.style.type === `Fill` ? `100%` : `fit-content`,
            height: `100%`,
            position: `relative`,
            overflow: `hidden`,
            padding: e.style.paddingPerSide
              ? `${e.style.paddingTop}px ${e.style.paddingRight}px ${e.style.paddingBottom}px ${e.style.paddingLeft}px`
              : `${e.style.padding}px`,
            borderRadius: e.style.radius,
            touchAction: `manipulation`,
            transform: `translateZ(0)`,
            WebkitTransform: `translateZ(0)`,
            willChange: `transform`,
          },
          onClick: w,
          children:
            C[0]?.image &&
            y(`img`, {
              src: typeof C[0].image == `string` ? C[0].image : C[0].image.src,
              alt: typeof C[0].image == `string` ? `` : C[0].image.alt,
              style: {
                width: `100%`,
                height: `100%`,
                objectFit: e.style.type === `Fill` ? `cover` : `contain`,
                borderRadius: e.style.radius,
                transform: `translateZ(0)`,
                WebkitTransform: `translateZ(0)`,
                willChange: `transform`,
              },
            }),
        })
      : b(`div`, {
          style: {
            width: e.style.type === `Fill` ? `100%` : `fit-content`,
            height: `100%`,
            position: `relative`,
            overflow: e.style.overflow ? `visible` : `hidden`,
            padding: e.style.paddingPerSide
              ? `${e.style.paddingTop}px ${e.style.paddingRight}px ${e.style.paddingBottom}px ${e.style.paddingLeft}px`
              : `${e.style.padding}px`,
            borderRadius: e.style.radius,
            touchAction: `pan-y`,
            userSelect: `none`,
            WebkitUserSelect: `none`,
            WebkitTouchCallout: `none`,
            transform: `translateZ(0)`,
            WebkitTransform: `translateZ(0)`,
            willChange: `transform`,
            boxSizing: `border-box`,
            display: `flex`,
            alignItems: `stretch`,
            lineHeight: 0,
            fontSize: 0,
          },
          children: [
            y(`div`, {
              ref: p,
              style: {
                display: `flex`,
                width: `100%`,
                height: `100%`,
                gap: `${e.style.gap}px`,
                transform: `${(() => {
                  let n = p.current?.offsetWidth || 1,
                    r = 100 / Math.max(1, e.style.items),
                    a = r + (e.style.gap / n) * 100,
                    o = 0;
                  return (
                    (o = t === 0 ? 0 : t === C.length - 1 ? 100 - r : (100 - r) / 2),
                    `translateX(calc(${-(t * a - o)}% + ${(i / n) * 100}%))`
                  );
                })()} translateZ(0)`,
                transition:
                  f.current === null ? `transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)` : `none`,
                cursor: f.current === null ? `grab` : `grabbing`,
                touchAction: `pan-y`,
                willChange: `transform`,
                WebkitTransform: `translateZ(0)`,
                boxSizing: `border-box`,
                flexShrink: 0,
                lineHeight: 0,
                fontSize: 0,
              },
              onMouseDown: ee,
              onMouseMove: T,
              onMouseUp: E,
              onMouseLeave: E,
              onTouchStart: ee,
              onTouchMove: T,
              onTouchEnd: E,
              children: C.map(({ image: t }, n) =>
                y(
                  `div`,
                  {
                    style: {
                      flexShrink: 0,
                      width: `${100 / Math.max(1, e.style.items)}%`,
                      height: `100%`,
                      position: `relative`,
                      overflow: `hidden`,
                      transform: `translateZ(0)`,
                      WebkitTransform: `translateZ(0)`,
                      willChange: `transform`,
                    },
                    children: y(`img`, {
                      src: typeof t == `string` ? t : t.src,
                      alt: typeof t == `string` ? `` : t.alt,
                      style: {
                        width: `100%`,
                        height: `100%`,
                        objectFit: e.style.type === `Fill` ? `cover` : `contain`,
                        userSelect: `none`,
                        pointerEvents: `none`,
                        borderRadius: e.style.radius,
                        WebkitUserSelect: `none`,
                        transform: `translateZ(0)`,
                        WebkitTransform: `translateZ(0)`,
                        willChange: `transform`,
                      },
                      draggable: !1,
                    }),
                  },
                  n
                )
              ),
            }),
            e.dots.show &&
              y(`div`, {
                style: {
                  position: `absolute`,
                  bottom: e.dots.inset,
                  left: `50%`,
                  transform: `translateX(-50%)`,
                  display: `flex`,
                  alignItems: `center`,
                  gap: e.dots.gap,
                  padding: e.dots.padding,
                  borderRadius: e.dots.radius,
                  backgroundColor: e.dots.backdrop,
                  backdropFilter: `blur(${e.dots.blur}px)`,
                },
                children: C.map((n, i) => {
                  let a = i === t,
                    o = a ? e.dots.active : e.dots.inactive;
                  return y(
                    `button`,
                    {
                      onClick: () => {
                        r(i);
                      },
                      style: {
                        width: o.width,
                        height: o.height,
                        padding: 0,
                        border: `none`,
                        borderRadius: o.radius,
                        backgroundColor: o.color,
                        cursor: `pointer`,
                        transition: `all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`,
                        transform: `translateZ(0)`,
                        WebkitTransform: `translateZ(0)`,
                        willChange: `width, height, background-color, border-radius`,
                        display: `block`,
                        flexShrink: 0,
                      },
                      onMouseEnter: (t) => {
                        a || (t.currentTarget.style.backgroundColor = e.dots.inactive.hoverColor);
                      },
                      onMouseLeave: (t) => {
                        a || (t.currentTarget.style.backgroundColor = e.dots.inactive.color);
                      },
                      "aria-label": `Go to slide ${i + 1}`,
                    },
                    i
                  );
                }),
              }),
          ],
        });
}
var fn,
  pn,
  mn,
  hn = e(() => {
    (t(),
      f(),
      r(),
      V(),
      (fn = {
        shopifyProductID: { type: q.String, title: `Product ID` },
        FilterVariants: {
          type: q.Object,
          title: `Visibility`,
          controls: {
            filterVariants: {
              type: q.Enum,
              title: `Visibility`,
              options: [`Show All`, `Only Active Variant`],
              defaultValue: `Always`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              description: `*Only Active Variant:* Hide images if a variant is selected and the value is not found in the image's Alt Text in CMS (from Shopify).`,
            },
            filterMatch: {
              type: q.Enum,
              title: `Match Rule`,
              options: [`Any`, `All`],
              defaultValue: `Any`,
              displaySegmentedControl: !0,
              description: `*Example:* If selected variant = 'Red' and 'Small'. 
 
 *Any* → 'T Shirt (Red)' or 'T Shirt (Small)' shows. 
 
 *All* → Only 'T Shirt (Red, Small)' shows.`,
              hidden: ({ filterVariants: e }) => e === `Always`,
            },
          },
        },
        style: {
          type: q.Object,
          title: `Style`,
          controls: {
            type: {
              type: q.Enum,
              title: `Type`,
              options: [`Fill`, `Fit`],
              defaultValue: `Fill`,
              displaySegmentedControl: !0,
            },
            items: {
              type: q.Number,
              title: `Items`,
              defaultValue: 1,
              min: 0.25,
              max: 5,
              step: 0.25,
              displayStepper: !0,
            },
            overflow: {
              type: q.Boolean,
              title: `Overflow`,
              defaultValue: !1,
              enabledTitle: `Visible`,
              disabledTitle: `Hidden`,
            },
            padding: {
              type: q.FusedNumber,
              title: `Padding`,
              defaultValue: 8,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            gap: {
              type: q.Number,
              title: `Gap`,
              defaultValue: 0,
              min: 0,
              step: 1,
              displayStepper: !0,
            },
            radius: {
              type: q.Number,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              step: 1,
              displayStepper: !0,
            },
          },
        },
        dots: {
          type: q.Object,
          title: `Dots`,
          controls: {
            show: {
              type: q.Boolean,
              title: `Show`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            active: {
              type: q.Object,
              title: `Active`,
              controls: {
                width: {
                  type: q.Number,
                  title: `Width`,
                  defaultValue: 8,
                  min: 1,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                height: {
                  type: q.Number,
                  title: `Height`,
                  defaultValue: 8,
                  min: 1,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                radius: {
                  type: q.Number,
                  title: `Radius`,
                  defaultValue: 8,
                  min: 0,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                color: { type: q.Color, title: `Color`, defaultValue: `#FFFFFF` },
              },
              hidden: (e) => !e.dots.show,
            },
            inactive: {
              type: q.Object,
              title: `Inactive`,
              controls: {
                width: {
                  type: q.Number,
                  title: `Width`,
                  defaultValue: 8,
                  min: 1,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                height: {
                  type: q.Number,
                  title: `Height`,
                  defaultValue: 8,
                  min: 1,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                radius: {
                  type: q.Number,
                  title: `Radius`,
                  defaultValue: 8,
                  min: 0,
                  max: 100,
                  step: 1,
                  displayStepper: !0,
                },
                color: { type: q.Color, title: `Color`, defaultValue: `#999999` },
                hoverColor: { type: q.Color, title: `Hover`, defaultValue: `#666666` },
              },
              hidden: (e) => !e.dots.show,
            },
            inset: {
              type: q.Number,
              title: `Inset`,
              defaultValue: 8,
              min: 0,
              step: 1,
              displayStepper: !0,
              hidden: (e) => !e.dots.show,
            },
            gap: {
              type: q.Number,
              title: `Gap`,
              defaultValue: 4,
              min: 0,
              step: 1,
              displayStepper: !0,
              hidden: (e) => !e.dots.show,
            },
            padding: {
              type: q.Number,
              title: `Padding`,
              defaultValue: 8,
              min: 0,
              step: 1,
              displayStepper: !0,
              hidden: (e) => !e.dots.show,
            },
            backdrop: {
              type: q.Color,
              title: `BG`,
              defaultValue: `#C4C4C4`,
              hidden: (e) => !e.dots.show,
            },
            radius: {
              type: q.Number,
              title: `Radius`,
              defaultValue: 16,
              min: 0,
              step: 1,
              displayStepper: !0,
              hidden: (e) => !e.dots.show,
            },
            blur: {
              type: q.Number,
              title: `Blur`,
              defaultValue: 16,
              min: 0,
              step: 1,
              displayStepper: !0,
              hidden: (e) => !e.dots.show,
            },
          },
        },
        images: {
          type: q.Number,
          title: `Images`,
          defaultValue: 24,
          min: 1,
          max: 100,
          step: 1,
          displayStepper: !0,
        },
      }),
      (pn = 100));
    for (let e = 1; e <= pn; e++)
      fn[`image${e}`] = {
        type: q.ResponsiveImage,
        title: `Image ${e}`,
        hidden: (t) => !t.images || e > t.images,
      };
    (L(dn, fn),
      (mn = {
        style: {
          padding: 8,
          paddingPerSide: !1,
          paddingTop: 8,
          paddingRight: 8,
          paddingBottom: 8,
          paddingLeft: 8,
          gap: 0,
          items: 1,
          radius: 0,
          overflow: !1,
          type: `Fill`,
        },
        dots: {
          show: !0,
          active: { width: 8, height: 8, radius: 8, color: `#FFFFFF` },
          inactive: { width: 8, height: 8, radius: 8, color: `#999999`, hoverColor: `#666666` },
          inset: 8,
          gap: 4,
          padding: 8,
          backdrop: `#C4C4C4`,
          radius: 16,
          blur: 16,
        },
        shopifyProductID: ``,
        FilterVariants: { filterVariants: `Always`, filterMatch: `Any` },
        images: 24,
      }));
    for (let e = 1; e <= 100; e++) mn[`image${e}`] = ``;
    dn.defaultProps = mn;
  });
function gn(e) {
  let t = Ee();
  t && a.shopXtools;
  let [r, i] = n.useState(null),
    [o, s] = n.useState(!0),
    [c, l] = n.useState(!1),
    [u, d] = n.useState(1),
    [f, p] = n.useState(!1),
    m = n.useRef(e.triggerImageTap);
  m.current = e.triggerImageTap;
  let [h, g] = n.useState({}),
    _ = n.useRef(!1),
    v = n.useCallback(() => {
      let e = Object.entries(h).map(([e, t]) => ({ name: e, value: t }));
      return e.length > 0 ? { selectedOptions: e } : null;
    }, [h]);
  n.useEffect(() => {
    if (!t || _.current) return;
    _.current = !0;
    let n = `fc_active_variant_${e.shopifyProductID}`,
      r = () => {
        try {
          let e = sessionStorage.getItem(n);
          if (!e) return !1;
          let t = JSON.parse(e);
          if (t?.selectedOptions) return (g(t.selectedOptions), !0);
        } catch {}
        return !1;
      };
    (r() && p(!0), new URLSearchParams(a.location.search).get(`variant`));
    try {
      let t = new CustomEvent(`variant__visual__sync`, {
        detail: {
          productId: e.shopifyProductID ? `gid://shopify/Product/${e.shopifyProductID}` : void 0,
        },
      });
      document.dispatchEvent(t);
    } catch {}
    let i = setTimeout(() => {
        r() && p(!0);
      }, 0),
      o = setTimeout(() => {
        r() && p(!0);
      }, 200),
      s = setTimeout(() => {
        r() && p(!0);
      }, 600),
      c = setTimeout(() => {
        r() && p(!0);
      }, 1200),
      l = setTimeout(() => p(!0), 900);
    return () => {
      (clearTimeout(i), clearTimeout(o), clearTimeout(s), clearTimeout(c), clearTimeout(l));
    };
  }, [t, e.shopifyProductID]);
  let S = n.useCallback(
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
  (n.useEffect(() => {
    if (e.FilterVariants?.filterVariants === `If Active Variant` && e.image) {
      let t = (typeof e.image == `object` && e.image.alt) || ``,
        n = [r, v()].filter(Boolean),
        i = !0;
      (n.length > 0 && (i = n.some((e) => S(e, t))), s(i));
    } else s(!0);
  }, [r, h, e.FilterVariants?.filterVariants, e.FilterVariants?.filterMatch, e.image, S, v]),
    x(() => {
      if (!t) return;
      function n(t) {
        if (t.detail) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (i(t.detail), t.detail.isCompleteVariant === !0 && g({}));
        }
      }
      function r(t) {
        if (t.detail && t.detail.optionName && t.detail.value) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (g((e) => ({ ...e, [t.detail.optionName]: t.detail.value })), i(null));
        }
      }
      function o(t) {
        if (t.detail && t.detail.selectedOptions) {
          if (
            t.detail.productId &&
            t.detail.productId !== `gid://shopify/Product/${e.shopifyProductID}`
          )
            return;
          (g(t.detail.selectedOptions), i(null));
        }
      }
      function s(t) {
        let n = `fc_active_variant_${e.shopifyProductID}`,
          r = sessionStorage.getItem(n);
        if (r)
          try {
            let e = JSON.parse(r);
            e.selectedOptions && (g(e.selectedOptions), i(null));
          } catch {}
        else l();
      }
      function c(t) {
        t.detail && t.detail.productId === `gid://shopify/Product/${e.shopifyProductID}` && l();
      }
      function l() {
        if (!a.shopXtools?.products) return;
        let t = a.shopXtools.products.find(
          (t) => t.node.id === `gid://shopify/Product/${e.shopifyProductID}`
        );
        if (!t?.node?.variants?.edges) return;
        let n = t.node.variants.edges.find(({ node: e }) => e.availableForSale);
        if (n?.node?.selectedOptions) {
          let e = {};
          (n.node.selectedOptions.forEach((t) => {
            e[t.name] = t.value;
          }),
            g(e),
            i(null));
        }
      }
      function u(t) {
        (t.detail &&
          String(t.detail.imageNumber) === String(e.imageNumber) &&
          typeof m.current == `function` &&
          m.current(),
          t.detail && t.detail.imageNumber && d(t.detail.imageNumber));
      }
      (document.addEventListener(`product__active-variant__changed`, n),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`variant__options__sync`, o),
        document.addEventListener(`variant__visual__sync`, o));
      try {
        let t = new CustomEvent(`variant__visual__sync`, {
          detail: {
            productId: e.shopifyProductID ? `gid://shopify/Product/${e.shopifyProductID}` : void 0,
          },
        });
        document.dispatchEvent(t);
      } catch {}
      return (
        document.addEventListener(`data__products-ready`, s),
        document.addEventListener(`retry-auto-select`, c),
        document.addEventListener(`variant__image__match`, u),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, n),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`variant__options__sync`, o),
            document.removeEventListener(`variant__visual__sync`, o),
            document.removeEventListener(`data__products-ready`, s),
            document.removeEventListener(`retry-auto-select`, c),
            document.removeEventListener(`variant__image__match`, u));
        }
      );
    }, [t, e.imageNumber]));
  let C = () => {
    if (t) {
      if (e.Thumbnail?.clickAction === `Scroll Section`) {
        let t = new URL(a.location.href);
        ((t.hash = `image-${e.imageNumber}`), a.history.pushState(null, ``, t.toString()));
        let n = document.getElementById(`image-${e.imageNumber}`);
        n && n.scrollIntoView({ behavior: `smooth` });
      } else if (e.Thumbnail?.clickAction === `Tap Event`) {
        typeof m.current == `function` && m.current();
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
  if (!t) return y(`div`, { style: { width: `100%`, height: `100%` } });
  let w = e.Thumbnail?.thumbnailMode === `Yes`,
    ee = w && u === e.imageNumber,
    T = w
      ? ee
        ? e.Thumbnail?.Active?.activeBorder
        : c
          ? e.Thumbnail?.Hover?.hoverBorder
          : e.Style?.inactiveBorder
      : e.Style?.inactiveBorder,
    E = Number(T?.borderTopWidth ?? 0),
    D = Number(T?.borderRightWidth ?? 0),
    O = Number(T?.borderBottomWidth ?? 0),
    k = Number(T?.borderLeftWidth ?? 0),
    A = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusTopLeft ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    j = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusTopRight ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    M = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusBottomRight ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    N = e.Style?.radiusPerCorner
      ? Number(e.Style?.radiusBottomLeft ?? 0)
      : Number(e.Style?.borderRadius ?? 0),
    P = `${A}px ${j}px ${M}px ${N}px`,
    F = 1;
  F = w
    ? ee
      ? (e.Thumbnail?.Active?.activeScale ?? e.Style?.inactiveScale ?? 1)
      : c
        ? (e.Thumbnail?.Hover?.hoverScale ?? e.Style?.inactiveScale ?? 1)
        : (e.Style?.inactiveScale ?? 1)
    : (e.Style?.inactiveScale ?? 1);
  let te = 1.25,
    ne = Math.max(0, A - Math.max(E, k)),
    I = Math.max(0, j - Math.max(E, D)),
    re = Math.max(0, M - Math.max(O, D)),
    L = Math.max(0, N - Math.max(O, k)),
    ie = Math.max(F, 0.001),
    R = te + 0.25 * Math.max(E, k),
    z = te + 0.25 * Math.max(E, D),
    B = te + 0.25 * Math.max(O, D),
    V = te + 0.25 * Math.max(O, k),
    H = `${Math.max(0, (ne - R) / ie)}px ${Math.max(0, (I - z) / ie)}px ${Math.max(0, (re - B) / ie)}px ${Math.max(0, (L - V) / ie)}px`;
  return y(`div`, {
    style: {
      height:
        o && (e.Style?.size === `Standard` || e.Style?.heightMode === `Fill`) ? `100%` : `auto`,
      padding: o
        ? e.Style?.outsidePaddingPerSide
          ? `${e.Style?.outsidePaddingTop}px ${e.Style?.outsidePaddingRight}px ${e.Style?.outsidePaddingBottom}px ${e.Style?.outsidePaddingLeft}px`
          : e.Style?.outsidePadding
        : `0px`,
      opacity:
        e.Thumbnail?.thumbnailMode === `Yes`
          ? u === e.imageNumber
            ? (e.Thumbnail?.Active?.activeOpacity ?? e.Style?.inactiveOpacity ?? 1)
            : c
              ? (e.Thumbnail?.Hover?.hoverOpacity ?? e.Style?.inactiveOpacity ?? 1)
              : (e.Style?.inactiveOpacity ?? 1)
          : (e.Style?.inactiveOpacity ?? 1),
      transition:
        e.Thumbnail?.thumbnailMode === `Yes` && e.Thumbnail?.transition
          ? `opacity ${e.Thumbnail.transition.duration || 0.3}s ${e.Thumbnail.transition.ease || `ease-in-out`}`
          : `none`,
    },
    children: y(`div`, {
      onClick: e.Thumbnail?.clickAction === `None` ? void 0 : C,
      onMouseEnter: e.Thumbnail?.thumbnailMode === `Yes` ? () => l(!0) : void 0,
      onMouseLeave: e.Thumbnail?.thumbnailMode === `Yes` ? () => l(!1) : void 0,
      style: {
        width: o
          ? e.Style?.size === `Standard` || e.Style?.widthMode === `Fill`
            ? `100%`
            : e.Style?.widthMode === `Fit`
              ? `auto`
              : `${e.Style?.thumbnailWidth || 64}px`
          : `0px`,
        height: o
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
              ? u === e.imageNumber
                ? e.Thumbnail?.Active?.activeBackgroundColor ||
                  e.Style?.inactiveBackgroundColor ||
                  `transparent`
                : c
                  ? e.Thumbnail?.Hover?.hoverBackgroundColor ||
                    e.Style?.inactiveBackgroundColor ||
                    `transparent`
                  : e.Style?.inactiveBackgroundColor || (e.image ? `transparent` : `#f5f5f5`)
              : e.Style?.inactiveBackgroundColor || (e.image ? `transparent` : `#f5f5f5`),
        ...(o
          ? e.Thumbnail?.thumbnailMode === `Yes`
            ? u === e.imageNumber
              ? e.Thumbnail?.Active?.activeBorder
              : c
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
        borderRadius: P,
        padding: `0px`,
        overflow: `hidden`,
        backgroundClip: `padding-box`,
      },
      children:
        e.image && o
          ? y(`img`, {
              src: typeof e.image == `string` ? e.image : e.image.src,
              alt: typeof e.image == `string` ? `` : e.image.alt,
              style: {
                width: `100%`,
                height: `100%`,
                objectFit: e.Style?.type === `Fill` ? `cover` : `contain`,
                borderRadius: H,
                transform: `scale(${F})`,
                transition:
                  e.Thumbnail?.thumbnailMode === `Yes` && e.Thumbnail?.transition
                    ? `transform ${e.Thumbnail.transition.duration || 0.3}s ${e.Thumbnail.transition.ease || `ease-in-out`}`
                    : `none`,
              },
            })
          : a !== void 0 &&
            a.location.hostname.includes(`framercanvas.com`) &&
            b(`svg`, {
              width: `40%`,
              height: `40%`,
              viewBox: `0 0 24 24`,
              fill: `none`,
              stroke: `#9e9e9e`,
              strokeWidth: `2`,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
              children: [
                y(`rect`, { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, ry: `2` }),
                y(`circle`, { cx: `8.5`, cy: `8.5`, r: `1.5` }),
                y(`polyline`, { points: `21 15 16 10 5 21` }),
              ],
            }),
    }),
  });
}
var _n = e(() => {
  (t(),
    f(),
    r(),
    V(),
    Ne(),
    (gn.defaultProps = {
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
    L(gn, {
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
function vn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  J,
  An = e(() => {
    (f(),
      V(),
      E(),
      r(),
      _n(),
      (yn = U(gn)),
      (bn = [`OeNyoqBTz`, `MlCxBdAWR`]),
      (xn = `framer-7V1Pf`),
      (Sn = { MlCxBdAWR: `framer-v-4a4etf`, OeNyoqBTz: `framer-v-hlo2f9` }),
      (Cn = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (wn = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Tn = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (En = { Desktop: `OeNyoqBTz`, Tablet: `MlCxBdAWR` }),
      (Dn = C.create(o)),
      (On = ({
        height: e,
        id: t,
        image: n,
        imageNumber: r,
        productID: i,
        triggerImageTap: a,
        width: o,
        ...s
      }) => ({
        ...s,
        FivUXEobF: a ?? s.FivUXEobF,
        fzODsMOPP: i ?? s.fzODsMOPP,
        k4H1827Jh: n ??
          s.k4H1827Jh ?? {
            pixelHeight: 1254,
            pixelWidth: 1254,
            src: `https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?width=1254&height=1254`,
            srcSet: `https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?scale-down-to=512&width=1254&height=1254 512w,https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?scale-down-to=1024&width=1254&height=1254 1024w,https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?width=1254&height=1254 1254w`,
          },
        KrTFB4kFC: r ?? s.KrTFB4kFC ?? 1,
        variant: En[s.variant] ?? s.variant ?? `OeNyoqBTz`,
      })),
      (kn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              k4H1827Jh: p,
              FivUXEobF: m,
              KrTFB4kFC: h,
              fzODsMOPP: g,
              ..._
            } = On(e),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: T,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = B({
              cycleOrder: bn,
              defaultVariant: `OeNyoqBTz`,
              ref: r,
              variant: f,
              variantClassNames: Sn,
            }),
            A = kn(e, k),
            { activeVariantCallback: j, delay: M } = ge(v),
            N = j(async (...e) => {
              if (m && (await m(...e)) === !1) return !1;
            }),
            P = F(xn);
          return y(w, {
            id: d ?? a,
            children: y(Dn, {
              animate: k,
              initial: !1,
              children: y(Tn, {
                value: Cn,
                children: y(C.div, {
                  ..._,
                  ...S,
                  className: F(P, `framer-hlo2f9`, l, b),
                  "data-border": !0,
                  "data-framer-name": `Desktop`,
                  layoutDependency: A,
                  layoutId: `OeNyoqBTz`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgba(3, 7, 8, 0)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-08c0a1b2-6453-4e0b-b1db-f0593e85b925, rgb(245, 245, 245))`,
                    borderBottomLeftRadius: 8,
                    borderBottomRightRadius: 8,
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    ...c,
                  },
                  variants: {
                    MlCxBdAWR: {
                      borderBottomLeftRadius: 6,
                      borderBottomRightRadius: 6,
                      borderTopLeftRadius: 6,
                      borderTopRightRadius: 6,
                    },
                  },
                  ...vn({ MlCxBdAWR: { "data-framer-name": `Tablet` } }, v, ee),
                  children: y(G, {
                    children: y(D, {
                      className: `framer-mihstw-container`,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `ne9TyFHMi-container`,
                      nodeId: `ne9TyFHMi`,
                      rendersWithMotion: !0,
                      scopeId: `DrwkfMMpA`,
                      children: y(gn, {
                        FilterVariants: { filterMatch: `Any`, filterVariants: `Always` },
                        height: `100%`,
                        id: `ne9TyFHMi`,
                        image: wn(p),
                        imageNumber: h,
                        layoutId: `ne9TyFHMi`,
                        shopifyProductID: g,
                        Style: {
                          borderRadius: 8,
                          heightMode: `Fixed`,
                          inactiveBackgroundColor: `rgb(245, 245, 245)`,
                          inactiveBorder: {
                            borderColor: `rgba(0, 0, 0, 0)`,
                            borderStyle: `solid`,
                            borderWidth: 1,
                          },
                          inactiveOpacity: 1,
                          inactiveScale: 1,
                          outsidePadding: 0,
                          outsidePaddingBottom: 0,
                          outsidePaddingLeft: 0,
                          outsidePaddingPerSide: !1,
                          outsidePaddingRight: 0,
                          outsidePaddingTop: 0,
                          radiusBottomLeft: 8,
                          radiusBottomRight: 8,
                          radiusPerCorner: !1,
                          radiusTopLeft: 8,
                          radiusTopRight: 8,
                          size: `Standard`,
                          thumbnailHeight: 64,
                          thumbnailWidth: 64,
                          type: `Fit`,
                          widthMode: `Fixed`,
                        },
                        style: { height: `100%`, width: `100%` },
                        Thumbnail: {
                          Active: {
                            activeBackgroundColor: `rgb(245, 245, 245)`,
                            activeBorder: {
                              borderColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                              borderStyle: `solid`,
                              borderWidth: 1,
                            },
                            activeOpacity: 1,
                            activeScale: 1,
                          },
                          clickAction: `Tap Event`,
                          Hover: {
                            hoverBackgroundColor: `rgb(245, 245, 245)`,
                            hoverBorder: {
                              borderColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                              borderStyle: `solid`,
                              borderWidth: 1,
                            },
                            hoverOpacity: 1,
                            hoverScale: 1,
                          },
                          thumbnailMode: `Yes`,
                          transition: {
                            damping: 100,
                            delay: 0,
                            mass: 1,
                            stiffness: 300,
                            type: `spring`,
                          },
                        },
                        triggerImageTap: N,
                        width: `100%`,
                        ...vn(
                          {
                            MlCxBdAWR: {
                              Style: {
                                borderRadius: 6,
                                heightMode: `Fixed`,
                                inactiveBackgroundColor: `rgb(245, 245, 245)`,
                                inactiveBorder: {
                                  borderColor: `rgba(0, 0, 0, 0)`,
                                  borderStyle: `solid`,
                                  borderWidth: 1,
                                },
                                inactiveOpacity: 1,
                                inactiveScale: 1,
                                outsidePadding: 0,
                                outsidePaddingBottom: 0,
                                outsidePaddingLeft: 0,
                                outsidePaddingPerSide: !1,
                                outsidePaddingRight: 0,
                                outsidePaddingTop: 0,
                                radiusBottomLeft: 6,
                                radiusBottomRight: 6,
                                radiusPerCorner: !1,
                                radiusTopLeft: 6,
                                radiusTopRight: 6,
                                size: `Standard`,
                                thumbnailHeight: 64,
                                thumbnailWidth: 64,
                                type: `Fit`,
                                widthMode: `Fixed`,
                              },
                            },
                          },
                          v,
                          ee
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
          `.framer-7V1Pf.framer-vo656s, .framer-7V1Pf .framer-vo656s { display: block; }`,
          `.framer-7V1Pf.framer-hlo2f9 { height: 80px; overflow: hidden; position: relative; width: 80px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-7V1Pf .framer-mihstw-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; }`,
          `.framer-7V1Pf[data-border="true"]::after, .framer-7V1Pf [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-7V1Pf`
      )),
      (J.displayName = `Product Thumbnail`),
      (J.defaultProps = { height: 80, width: 80 }),
      L(J, {
        variant: {
          options: [`OeNyoqBTz`, `MlCxBdAWR`],
          optionTitles: [`Desktop`, `Tablet`],
          title: `Variant`,
          type: q.Enum,
        },
        k4H1827Jh: {
          __defaultAssetReference: `data:framer/asset-reference,Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?originalFilename=ChatGPT+Image+Jun+22%2C+2026%2C+12_14_43+AM.png&width=1254&height=1254`,
          title: `Image`,
          type: q.ResponsiveImage,
        },
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
        onKrTFB4kFCChange: { changes: `KrTFB4kFC`, type: q.ChangeHandler },
        fzODsMOPP: { defaultValue: ``, title: `Product ID`, type: q.String },
        onfzODsMOPPChange: { changes: `fzODsMOPP`, type: q.ChangeHandler },
      }),
      I(J, [{ explicitInter: !0, fonts: [] }, ...yn], { supportsExplicitInterCodegen: !0 }));
  });
function jn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn = e(() => {
    (f(),
      V(),
      E(),
      r(),
      dt(),
      (Mn = U(ct)),
      (Nn = [
        `pkXrkKWjI`,
        `nTRKIs1Et`,
        `xAFTrW5s1`,
        `JflN0RPhk`,
        `vEsuTjLLX`,
        `Se3Ov2tMC`,
        `gL0sfPlVu`,
        `TKCDgqERq`,
      ]),
      (Pn = `framer-tFRDW`),
      (Fn = {
        gL0sfPlVu: `framer-v-1nnodxp`,
        JflN0RPhk: `framer-v-1ez5wmw`,
        nTRKIs1Et: `framer-v-15qx8fs`,
        pkXrkKWjI: `framer-v-1hwa07w`,
        Se3Ov2tMC: `framer-v-o8g5ks`,
        TKCDgqERq: `framer-v-vox4nt`,
        vEsuTjLLX: `framer-v-1xp7kiu`,
        xAFTrW5s1: `framer-v-1ok5258`,
      }),
      (In = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ln = (e, t) => `translate(-50%, -50%) ${t}`),
      (Rn = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (zn = {
        "Next - Disabled": `JflN0RPhk`,
        "Previous - Disabled": `xAFTrW5s1`,
        "Tablet - Next - Disabled": `TKCDgqERq`,
        "Tablet - Next": `Se3Ov2tMC`,
        "Tablet - Previous - Disabled": `gL0sfPlVu`,
        "Tablet - Previous": `vEsuTjLLX`,
        Next: `nTRKIs1Et`,
        Pervious: `pkXrkKWjI`,
      }),
      (Bn = C.create(o)),
      (Vn = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: zn[r.variant] ?? r.variant ?? `pkXrkKWjI`,
      })),
      (Hn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Un = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let { style: c, className: l, layoutId: d, variant: f, ...p } = Vn(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: ee,
            } = B({
              cycleOrder: Nn,
              defaultVariant: `pkXrkKWjI`,
              ref: r,
              variant: f,
              variantClassNames: Fn,
            }),
            T = Hn(e, ee),
            E = F(Pn);
          return y(w, {
            id: d ?? a,
            children: y(Bn, {
              animate: ee,
              initial: !1,
              children: y(Rn, {
                value: In,
                children: y(C.div, {
                  ...p,
                  ..._,
                  className: F(E, `framer-1hwa07w`, l, h),
                  "data-border": !0,
                  "data-framer-name": `Pervious`,
                  layoutDependency: T,
                  layoutId: `pkXrkKWjI`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-6179ba6b-69d8-4266-899c-508da03f0f15, rgba(3, 6, 7, 0.08))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backdropFilter: `blur(16px)`,
                    backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    opacity: 1,
                    WebkitBackdropFilter: `blur(16px)`,
                    ...c,
                  },
                  variants: {
                    gL0sfPlVu: { opacity: 0.7 },
                    JflN0RPhk: { opacity: 0.7 },
                    Se3Ov2tMC: { opacity: 1 },
                    TKCDgqERq: { opacity: 0.7 },
                    vEsuTjLLX: { opacity: 1 },
                    xAFTrW5s1: { opacity: 0.7 },
                  },
                  ...jn(
                    {
                      gL0sfPlVu: { "data-framer-name": `Tablet - Previous - Disabled` },
                      JflN0RPhk: { "data-framer-name": `Next - Disabled` },
                      nTRKIs1Et: { "data-framer-name": `Next` },
                      Se3Ov2tMC: { "data-framer-name": `Tablet - Next` },
                      TKCDgqERq: { "data-framer-name": `Tablet - Next - Disabled` },
                      vEsuTjLLX: { "data-framer-name": `Tablet - Previous` },
                      xAFTrW5s1: { "data-framer-name": `Previous - Disabled` },
                    },
                    m,
                    v
                  ),
                  children: y(ct, {
                    animated: !0,
                    className: `framer-1rt62rc`,
                    layoutDependency: T,
                    layoutId: `TgmCiYuU4`,
                    style: {
                      "--d1m4u3": 1.6,
                      "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                      rotate: 90,
                    },
                    transformTemplate: Ln,
                    variants: {
                      JflN0RPhk: { rotate: -90 },
                      nTRKIs1Et: { rotate: -90 },
                      Se3Ov2tMC: { rotate: -90 },
                      TKCDgqERq: { rotate: -90 },
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-tFRDW.framer-1scfy26, .framer-tFRDW .framer-1scfy26 { display: block; }`,
          `.framer-tFRDW.framer-1hwa07w { height: 40px; overflow: hidden; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-tFRDW .framer-1rt62rc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); left: 50%; position: absolute; top: 50%; width: 18px; }`,
          `.framer-tFRDW.framer-v-1xp7kiu.framer-1hwa07w { height: 34px; width: 34px; }`,
          `.framer-tFRDW.framer-v-1xp7kiu .framer-1rt62rc, .framer-tFRDW.framer-v-o8g5ks .framer-1rt62rc, .framer-tFRDW.framer-v-1nnodxp .framer-1rt62rc, .framer-tFRDW.framer-v-vox4nt .framer-1rt62rc { height: var(--framer-aspect-ratio-supported, 15px); width: 15px; }`,
          `.framer-tFRDW.framer-v-o8g5ks.framer-1hwa07w, .framer-tFRDW.framer-v-1nnodxp.framer-1hwa07w, .framer-tFRDW.framer-v-vox4nt.framer-1hwa07w { height: 32px; width: 32px; }`,
          `.framer-tFRDW[data-border="true"]::after, .framer-tFRDW [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-tFRDW`
      )),
      (Un.displayName = `Product Slideshow Arrow`),
      (Un.defaultProps = { height: 40, width: 40 }),
      L(Un, {
        variant: {
          options: [
            `pkXrkKWjI`,
            `nTRKIs1Et`,
            `xAFTrW5s1`,
            `JflN0RPhk`,
            `vEsuTjLLX`,
            `Se3Ov2tMC`,
            `gL0sfPlVu`,
            `TKCDgqERq`,
          ],
          optionTitles: [
            `Pervious`,
            `Next`,
            `Previous - Disabled`,
            `Next - Disabled`,
            `Tablet - Previous`,
            `Tablet - Next`,
            `Tablet - Previous - Disabled`,
            `Tablet - Next - Disabled`,
          ],
          title: `Variant`,
          type: q.Enum,
        },
      }),
      I(Un, [{ explicitInter: !0, fonts: [] }, ...Mn], { supportsExplicitInterCodegen: !0 }));
  });
function Gn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Fe(),
      (Kn = [`ZUMY2mO6X`, `C6QhkurCB`]),
      (qn = `framer-6bX0z`),
      (Jn = { C6QhkurCB: `framer-v-1r15z57`, ZUMY2mO6X: `framer-v-m33meq` }),
      (Yn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Xn = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Zn = { New: `ZUMY2mO6X`, Popular: `C6QhkurCB` }),
      (Qn = C.create(o)),
      ($n = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: Zn[r.variant] ?? r.variant ?? `ZUMY2mO6X`,
      })),
      (er = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (tr = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let { style: l, className: d, layoutId: f, variant: p, ...m } = $n(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: b,
              isLoading: x,
              setGestureState: S,
              setVariant: ee,
              variants: T,
            } = B({
              cycleOrder: Kn,
              defaultVariant: `ZUMY2mO6X`,
              ref: r,
              variant: p,
              variantClassNames: Jn,
            }),
            E = er(e, T),
            D = F(qn, Pe);
          return y(w, {
            id: f ?? a,
            children: y(Qn, {
              animate: T,
              initial: !1,
              children: y(Xn, {
                value: Yn,
                children: y(C.div, {
                  ...m,
                  ...v,
                  className: F(D, `framer-m33meq`, d, g),
                  "data-border": !0,
                  "data-framer-name": `New`,
                  layoutDependency: E,
                  layoutId: `ZUMY2mO6X`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-042b2c85-d47f-4328-a709-b08971e77652)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 200,
                    borderBottomRightRadius: 200,
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    ...l,
                  },
                  ...Gn({ C6QhkurCB: { "data-framer-name": `Popular` } }, h, b),
                  children: y(R, {
                    __fromCanvasComponent: !0,
                    children: y(o, {
                      children: y(C.p, {
                        className: `framer-styles-preset-nxm789`,
                        "data-styles-preset": `oaj5XbvbS`,
                        dir: `auto`,
                        children: `New`,
                      }),
                    }),
                    className: `framer-d2ni6g`,
                    fonts: [`Inter`],
                    layoutDependency: E,
                    layoutId: `XvonOeeiz`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...Gn(
                      {
                        C6QhkurCB: {
                          children: y(o, {
                            children: y(C.p, {
                              className: `framer-styles-preset-nxm789`,
                              "data-styles-preset": `oaj5XbvbS`,
                              dir: `auto`,
                              children: `Popular`,
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
          `.framer-6bX0z.framer-8t9srf, .framer-6bX0z .framer-8t9srf { display: block; }`,
          `.framer-6bX0z.framer-m33meq { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 24px; justify-content: center; padding: 4px 10px 4px 10px; position: relative; width: min-content; }`,
          `.framer-6bX0z .framer-d2ni6g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...ze,
          `.framer-6bX0z[data-border="true"]::after, .framer-6bX0z [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-6bX0z`
      )),
      (tr.displayName = `Product Tags`),
      (tr.defaultProps = { height: 24, width: 45 }),
      L(tr, {
        variant: {
          options: [`ZUMY2mO6X`, `C6QhkurCB`],
          optionTitles: [`New`, `Popular`],
          title: `Variant`,
          type: q.Enum,
        },
      }),
      I(
        tr,
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
          ...P(Ve),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function Y(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rr,
  ir,
  ar,
  or,
  sr,
  cr,
  lr,
  ur,
  dr,
  fr,
  X,
  Z,
  pr,
  mr,
  hr,
  gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr = e(() => {
    (f(),
      V(),
      E(),
      r(),
      un(),
      hn(),
      An(),
      Wn(),
      nr(),
      (rr = U(J)),
      (ir = U(tr)),
      (ar = U(dn)),
      (or = U(Un)),
      (sr = U(ln)),
      (cr = _e(Un)),
      (lr = [`k31Ummoy0`, `znFsOMeKa`, `Jt10xpoWT`]),
      (ur = `framer-BSCJf`),
      (dr = {
        Jt10xpoWT: `framer-v-lylj2l`,
        k31Ummoy0: `framer-v-6ck3rv`,
        znFsOMeKa: `framer-v-16v6x48`,
      }),
      (fr = { damping: 64, delay: 0, mass: 2, stiffness: 250, type: `spring` }),
      (X = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Z = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (pr = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
      (mr = (e, t) => `translateY(-50%) ${t}`),
      (hr = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (gr = { Desktop: `k31Ummoy0`, Phone: `Jt10xpoWT`, Tablet: `znFsOMeKa` }),
      (_r = C.create(o)),
      (vr = {
        "Next - Disabled": `JflN0RPhk`,
        "Previous - Disabled": `xAFTrW5s1`,
        "Tablet - Next - Disabled": `TKCDgqERq`,
        "Tablet - Next": `Se3Ov2tMC`,
        "Tablet - Previous - Disabled": `gL0sfPlVu`,
        "Tablet - Previous": `vEsuTjLLX`,
        Next: `nTRKIs1Et`,
        Pervious: `pkXrkKWjI`,
      }),
      (yr = (e, t) => {
        let [n, r] = S(e),
          [i, a] = S(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (br = ({
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
        nextArrow: v,
        nextDisabledArrow: y,
        previousArrow: b,
        previousDisabledArrow: x,
        productID: S,
        width: C,
        ...w
      }) => ({
        ...w,
        BxrZjnsRx: s ?? w.BxrZjnsRx,
        E_YyIj1Fq: n ??
          w.E_YyIj1Fq ?? {
            pixelHeight: 1254,
            pixelWidth: 1254,
            src: `https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?width=1254&height=1254`,
            srcSet: `https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?scale-down-to=512&width=1254&height=1254 512w,https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?scale-down-to=1024&width=1254&height=1254 1024w,https://framerusercontent.com/images/Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?width=1254&height=1254 1254w`,
          },
        EGr7oOYYz: m ?? w.EGr7oOYYz,
        GSvdbC9PE: a ?? w.GSvdbC9PE,
        HJqPRAK0q: S ?? w.HJqPRAK0q,
        Ij0s1WbYG: i ?? w.Ij0s1WbYG,
        L_htVpkkW: c ?? w.L_htVpkkW,
        L3lHBq7ad: f ?? w.L3lHBq7ad,
        L5VWCFaBd: vr[v] ?? v ?? w.L5VWCFaBd ?? `nTRKIs1Et`,
        L75eUgVoI: h ?? w.L75eUgVoI,
        LPo6c9k2x: u ??
          w.LPo6c9k2x ?? {
            pixelHeight: 1254,
            pixelWidth: 1254,
            src: `https://framerusercontent.com/images/QQkgIInaqPNW43dsdO9wenVy1Pw.png?width=1254&height=1254`,
            srcSet: `https://framerusercontent.com/images/QQkgIInaqPNW43dsdO9wenVy1Pw.png?scale-down-to=512&width=1254&height=1254 512w,https://framerusercontent.com/images/QQkgIInaqPNW43dsdO9wenVy1Pw.png?scale-down-to=1024&width=1254&height=1254 1024w,https://framerusercontent.com/images/QQkgIInaqPNW43dsdO9wenVy1Pw.png?width=1254&height=1254 1254w`,
          },
        Lv0pcL2PA: g ?? w.Lv0pcL2PA,
        NYnCWZ4H3: _ ?? w.NYnCWZ4H3,
        ow53u_e9t: vr[b] ?? b ?? w.ow53u_e9t ?? `pkXrkKWjI`,
        pyPwi9F3j: l ?? w.pyPwi9F3j,
        R6m8zmVV6: vr[x] ?? x ?? w.R6m8zmVV6 ?? `xAFTrW5s1`,
        t2OoN8jbE: o ?? w.t2OoN8jbE,
        TgnFjdak3: vr[y] ?? y ?? w.TgnFjdak3 ?? `JflN0RPhk`,
        TncXZgqPB: r ?? w.TncXZgqPB,
        variant: gr[w.variant] ?? w.variant ?? `k31Ummoy0`,
        YjWpMatn8: p ?? w.YjWpMatn8,
        zw0_cPFar: d ?? w.zw0_cPFar,
      })),
      (xr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Sr = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se(),
            c = pe(),
            {
              style: l,
              className: d,
              layoutId: f,
              variant: p,
              E_YyIj1Fq: m,
              LPo6c9k2x: h,
              zw0_cPFar: g,
              L3lHBq7ad: _,
              YjWpMatn8: v,
              EGr7oOYYz: x,
              L75eUgVoI: S,
              Lv0pcL2PA: ee,
              NYnCWZ4H3: T,
              TncXZgqPB: E,
              Ij0s1WbYG: O,
              GSvdbC9PE: k,
              t2OoN8jbE: A,
              BxrZjnsRx: j,
              L_htVpkkW: M,
              pyPwi9F3j: N,
              HJqPRAK0q: P,
              onHJqPRAK0qChange: te,
              ow53u_e9t: ne,
              L5VWCFaBd: I,
              R6m8zmVV6: re,
              TgnFjdak3: L,
              ...ie
            } = br(e),
            [R, z] = yr(P, te),
            {
              baseVariant: V,
              classNames: H,
              clearLoadingGesture: ae,
              gestureHandlers: oe,
              gestureVariant: U,
              isLoading: ce,
              setGestureState: le,
              setVariant: ue,
              variants: de,
            } = B({
              cycleOrder: lr,
              defaultVariant: `k31Ummoy0`,
              ref: r,
              variant: p,
              variantClassNames: dr,
            }),
            W = xr(e, de),
            fe = F(ur),
            K = () => V !== `Jt10xpoWT`,
            me = pr(h),
            he = pr(g),
            q = pr(_),
            ge = pr(v),
            _e = pr(x),
            ve = pr(S),
            ye = pr(ee),
            be = pr(T),
            xe = pr(E),
            Se = pr(O),
            Ce = pr(k),
            we = pr(A),
            Te = pr(j),
            Ee = pr(M),
            De = pr(N);
          return y(w, {
            id: f ?? a,
            children: y(_r, {
              animate: de,
              initial: !1,
              children: y(hr, {
                value: fr,
                children: y(C.div, {
                  ...ie,
                  ...oe,
                  className: F(fe, `framer-6ck3rv`, d, H),
                  "data-framer-name": `Desktop`,
                  layoutDependency: W,
                  layoutId: `k31Ummoy0`,
                  ref: r,
                  style: { ...l },
                  ...Y(
                    {
                      Jt10xpoWT: { "data-framer-name": `Phone` },
                      znFsOMeKa: { "data-framer-name": `Tablet` },
                    },
                    V,
                    U
                  ),
                  children: b(C.div, {
                    className: `framer-3xiowv`,
                    "data-framer-name": `Wrap`,
                    layoutDependency: W,
                    layoutId: `VzQXIitnd`,
                    children: [
                      K() &&
                        y(C.div, {
                          className: `framer-1r01ui9`,
                          "data-framer-name": `Thumbnails Wrap`,
                          layoutDependency: W,
                          layoutId: `dxuVZw4sD`,
                          children: b(C.div, {
                            className: `framer-sgvvh6`,
                            "data-framer-name": `Thumbnails`,
                            layoutDependency: W,
                            layoutId: `TfoSxTzbt`,
                            children: [
                              y(G, {
                                height: 72,
                                width: `72px`,
                                y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 0,
                                ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                children: y(D, {
                                  className: `framer-26bsma-container`,
                                  "data-framer-name": `1`,
                                  layoutDependency: W,
                                  layoutId: `j1_MfKuAW-container`,
                                  name: `1`,
                                  nodeId: `j1_MfKuAW`,
                                  rendersWithMotion: !0,
                                  scopeId: `DjDCzuhGc`,
                                  children: y(J, {
                                    fzODsMOPP: R,
                                    height: `100%`,
                                    id: `j1_MfKuAW`,
                                    k4H1827Jh: X(m),
                                    KrTFB4kFC: 1,
                                    layoutId: `j1_MfKuAW`,
                                    name: `1`,
                                    onfzODsMOPPChange: z,
                                    style: { height: `100%`, width: `100%` },
                                    variant: Z(`OeNyoqBTz`),
                                    width: `100%`,
                                    ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                  }),
                                }),
                              }),
                              me !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1orxa3u-container`,
                                    "data-framer-name": `2`,
                                    layoutDependency: W,
                                    layoutId: `WUPNsnfpD-container`,
                                    name: `2`,
                                    nodeId: `WUPNsnfpD`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `WUPNsnfpD`,
                                      k4H1827Jh: X(h),
                                      KrTFB4kFC: 2,
                                      layoutId: `WUPNsnfpD`,
                                      name: `2`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              he !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-11g37e9-container`,
                                    "data-framer-name": `3`,
                                    layoutDependency: W,
                                    layoutId: `mz1Rag0Mo-container`,
                                    name: `3`,
                                    nodeId: `mz1Rag0Mo`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `mz1Rag0Mo`,
                                      k4H1827Jh: X(g),
                                      KrTFB4kFC: 3,
                                      layoutId: `mz1Rag0Mo`,
                                      name: `3`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              q !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1lw9l3j-container`,
                                    "data-framer-name": `4`,
                                    layoutDependency: W,
                                    layoutId: `vICIww1wM-container`,
                                    name: `4`,
                                    nodeId: `vICIww1wM`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `vICIww1wM`,
                                      k4H1827Jh: X(_),
                                      KrTFB4kFC: 4,
                                      layoutId: `vICIww1wM`,
                                      name: `4`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              ge !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-ie95o9-container`,
                                    "data-framer-name": `5`,
                                    layoutDependency: W,
                                    layoutId: `tvgND2rCc-container`,
                                    name: `5`,
                                    nodeId: `tvgND2rCc`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `tvgND2rCc`,
                                      k4H1827Jh: X(v),
                                      KrTFB4kFC: 5,
                                      layoutId: `tvgND2rCc`,
                                      name: `5`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              _e !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1pzsiy1-container`,
                                    "data-framer-name": `6`,
                                    layoutDependency: W,
                                    layoutId: `cVifqm9HJ-container`,
                                    name: `6`,
                                    nodeId: `cVifqm9HJ`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `cVifqm9HJ`,
                                      k4H1827Jh: X(x),
                                      KrTFB4kFC: 6,
                                      layoutId: `cVifqm9HJ`,
                                      name: `6`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              ve !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-ictnfm-container`,
                                    "data-framer-name": `7`,
                                    layoutDependency: W,
                                    layoutId: `LK6EBc3yf-container`,
                                    name: `7`,
                                    nodeId: `LK6EBc3yf`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `LK6EBc3yf`,
                                      k4H1827Jh: X(S),
                                      KrTFB4kFC: 7,
                                      layoutId: `LK6EBc3yf`,
                                      name: `7`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              ye !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-vtf8ww-container`,
                                    "data-framer-name": `8`,
                                    layoutDependency: W,
                                    layoutId: `XDh3kc4su-container`,
                                    name: `8`,
                                    nodeId: `XDh3kc4su`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `XDh3kc4su`,
                                      k4H1827Jh: X(ee),
                                      KrTFB4kFC: 8,
                                      layoutId: `XDh3kc4su`,
                                      name: `8`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              be !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-kp9xoa-container`,
                                    "data-framer-name": `9`,
                                    layoutDependency: W,
                                    layoutId: `s_OrAP8f6-container`,
                                    name: `9`,
                                    nodeId: `s_OrAP8f6`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `s_OrAP8f6`,
                                      k4H1827Jh: X(T),
                                      KrTFB4kFC: 9,
                                      layoutId: `s_OrAP8f6`,
                                      name: `9`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              xe !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-94onsi-container`,
                                    "data-framer-name": `10`,
                                    layoutDependency: W,
                                    layoutId: `nb5A0xqWp-container`,
                                    name: `10`,
                                    nodeId: `nb5A0xqWp`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `nb5A0xqWp`,
                                      k4H1827Jh: X(E),
                                      KrTFB4kFC: 10,
                                      layoutId: `nb5A0xqWp`,
                                      name: `10`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              Se !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-10n3dkr-container`,
                                    "data-framer-name": `11`,
                                    layoutDependency: W,
                                    layoutId: `TlTuSfZNg-container`,
                                    name: `11`,
                                    nodeId: `TlTuSfZNg`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `TlTuSfZNg`,
                                      k4H1827Jh: X(O),
                                      KrTFB4kFC: 11,
                                      layoutId: `TlTuSfZNg`,
                                      name: `11`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              Ce !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1w2tgwb-container`,
                                    "data-framer-name": `12`,
                                    layoutDependency: W,
                                    layoutId: `N3GdWndR7-container`,
                                    name: `12`,
                                    nodeId: `N3GdWndR7`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `N3GdWndR7`,
                                      k4H1827Jh: X(k),
                                      KrTFB4kFC: 12,
                                      layoutId: `N3GdWndR7`,
                                      name: `12`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              we !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-lzaorv-container`,
                                    "data-framer-name": `13`,
                                    layoutDependency: W,
                                    layoutId: `AMDkFWB7m-container`,
                                    name: `13`,
                                    nodeId: `AMDkFWB7m`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `AMDkFWB7m`,
                                      k4H1827Jh: X(A),
                                      KrTFB4kFC: 13,
                                      layoutId: `AMDkFWB7m`,
                                      name: `13`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              Te !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-3fgyqd-container`,
                                    "data-framer-name": `14`,
                                    layoutDependency: W,
                                    layoutId: `pcLL2Aki4-container`,
                                    name: `14`,
                                    nodeId: `pcLL2Aki4`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `pcLL2Aki4`,
                                      k4H1827Jh: X(j),
                                      KrTFB4kFC: 14,
                                      layoutId: `pcLL2Aki4`,
                                      name: `14`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              Ee !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1j2wnn2-container`,
                                    "data-framer-name": `15`,
                                    layoutDependency: W,
                                    layoutId: `WvilHQsUV-container`,
                                    name: `15`,
                                    nodeId: `WvilHQsUV`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `WvilHQsUV`,
                                      k4H1827Jh: X(M),
                                      KrTFB4kFC: 15,
                                      layoutId: `WvilHQsUV`,
                                      name: `15`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                              De !== !1 &&
                                y(G, {
                                  height: 72,
                                  width: `72px`,
                                  y: (c?.y || 0) + 0 + 0 + 0 + 0 + 0 + 0 + 80,
                                  ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                                  children: y(D, {
                                    className: `framer-1algcb-container`,
                                    "data-framer-name": `16`,
                                    layoutDependency: W,
                                    layoutId: `QAsr8ryhZ-container`,
                                    name: `16`,
                                    nodeId: `QAsr8ryhZ`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(J, {
                                      fzODsMOPP: R,
                                      height: `100%`,
                                      id: `QAsr8ryhZ`,
                                      k4H1827Jh: X(N),
                                      KrTFB4kFC: 16,
                                      layoutId: `QAsr8ryhZ`,
                                      name: `16`,
                                      onfzODsMOPPChange: z,
                                      style: { height: `100%`, width: `100%` },
                                      variant: Z(`OeNyoqBTz`),
                                      width: `100%`,
                                      ...Y({ znFsOMeKa: { variant: Z(`MlCxBdAWR`) } }, V, U),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                      b(C.div, {
                        className: `framer-1lpj66j`,
                        "data-framer-name": `Main`,
                        layoutDependency: W,
                        layoutId: `NJQJot_8Y`,
                        style: {
                          backgroundColor: `var(--token-08c0a1b2-6453-4e0b-b1db-f0593e85b925, rgb(245, 245, 245))`,
                          borderBottomLeftRadius: 8,
                          borderBottomRightRadius: 8,
                          borderTopLeftRadius: 8,
                          borderTopRightRadius: 8,
                        },
                        children: [
                          y(C.div, {
                            className: `framer-ezpa2s`,
                            "data-framer-name": `Tags`,
                            layoutDependency: W,
                            layoutId: `TH1H2CwJw`,
                            children: y(G, {
                              height: 24,
                              y: (c?.y || 0) + 0 + 0 + 0 + 20 + 0,
                              ...Y({ znFsOMeKa: { y: void 0 } }, V, U),
                              children: y(D, {
                                className: `framer-1jrkftv-container`,
                                "data-framer-name": `New Arrivals Tag`,
                                layoutDependency: W,
                                layoutId: `F9FOtGqAT-container`,
                                name: `New Arrivals Tag`,
                                nodeId: `F9FOtGqAT`,
                                rendersWithMotion: !0,
                                scopeId: `DjDCzuhGc`,
                                children: y(tr, {
                                  height: `100%`,
                                  id: `F9FOtGqAT`,
                                  layoutId: `F9FOtGqAT`,
                                  name: `New Arrivals Tag`,
                                  variant: Z(`ZUMY2mO6X`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          y(G, {
                            children: y(D, {
                              className: `framer-1u2kqc3-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: W,
                              layoutId: `PfWYKpdoQ-container`,
                              nodeId: `PfWYKpdoQ`,
                              rendersWithMotion: !0,
                              scopeId: `DjDCzuhGc`,
                              children: y(dn, {
                                dots: {
                                  active: {
                                    color: `var(--token-f87ea788-5cdc-4aac-9d76-b9ca5ca31f6c, rgb(3, 6, 7))`,
                                    height: 4,
                                    radius: 32,
                                    width: 20,
                                  },
                                  backdrop: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                  blur: 0,
                                  gap: 6,
                                  inactive: {
                                    color: `var(--token-e5213a88-c8a8-4a64-9b46-3bc358bc8063, rgba(3, 6, 7, 0.2))`,
                                    height: 4,
                                    hoverColor: `var(--token-f87ea788-5cdc-4aac-9d76-b9ca5ca31f6c, rgb(3, 6, 7))`,
                                    radius: 32,
                                    width: 4,
                                  },
                                  inset: 12,
                                  padding: 8,
                                  radius: 96,
                                  show: !1,
                                },
                                FilterVariants: { filterMatch: `Any`, filterVariants: `Show All` },
                                height: `100%`,
                                id: `PfWYKpdoQ`,
                                image1: X(m),
                                image10: X(E),
                                image11: X(O),
                                image12: X(k),
                                image13: X(A),
                                image14: X(j),
                                image15: X(M),
                                image16: X(N),
                                image2: X(h),
                                image3: X(g),
                                image4: X(_),
                                image5: X(v),
                                image6: X(x),
                                image7: X(S),
                                image8: X(ee),
                                image9: X(T),
                                images: 16,
                                layoutId: `PfWYKpdoQ`,
                                shopifyProductID: R,
                                style: {
                                  gap: 4,
                                  items: 1,
                                  overflow: !0,
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 9,
                                  paddingTop: 0,
                                  radius: 0,
                                  type: `Fill`,
                                },
                                width: `100%`,
                                ...Y(
                                  {
                                    Jt10xpoWT: {
                                      dots: {
                                        active: {
                                          color: `var(--token-f87ea788-5cdc-4aac-9d76-b9ca5ca31f6c, rgb(3, 6, 7))`,
                                          height: 4,
                                          radius: 32,
                                          width: 20,
                                        },
                                        backdrop: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                        blur: 0,
                                        gap: 6,
                                        inactive: {
                                          color: `var(--token-e5213a88-c8a8-4a64-9b46-3bc358bc8063, rgba(3, 6, 7, 0.2))`,
                                          height: 4,
                                          hoverColor: `var(--token-f87ea788-5cdc-4aac-9d76-b9ca5ca31f6c, rgb(3, 6, 7))`,
                                          radius: 32,
                                          width: 4,
                                        },
                                        inset: 12,
                                        padding: 8,
                                        radius: 96,
                                        show: !0,
                                      },
                                    },
                                  },
                                  V,
                                  U
                                ),
                              }),
                            }),
                          }),
                          K() &&
                            b(C.div, {
                              className: `framer-183wbqr`,
                              "data-framer-name": `Arrows`,
                              layoutDependency: W,
                              layoutId: `xvbMeJZbA`,
                              transformTemplate: mr,
                              children: [
                                y(G, {
                                  children: y(D, {
                                    className: `framer-xndm8b-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: W,
                                    layoutId: `H9yfHbzKR-container`,
                                    nodeId: `H9yfHbzKR`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(ln, {
                                      defaultContent: [
                                        y(G, {
                                          height: 40,
                                          width: `40px`,
                                          children: y(D, {
                                            className: `framer-1v9gr6q-container`,
                                            "data-framer-name": `Previous`,
                                            inComponentSlot: !0,
                                            layoutDependency: W,
                                            layoutId: `rimSVOEsn-container`,
                                            name: `Previous`,
                                            nodeId: `rimSVOEsn`,
                                            rendersWithMotion: !0,
                                            scopeId: `DjDCzuhGc`,
                                            children: y(Un, {
                                              height: `100%`,
                                              id: `rimSVOEsn`,
                                              layoutId: `rimSVOEsn`,
                                              name: `Previous`,
                                              variant: Z(ne),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                      direction: `left`,
                                      disabledContent: [
                                        y(G, {
                                          height: 40,
                                          width: `40px`,
                                          children: y(D, {
                                            className: `framer-ssa7m3-container`,
                                            "data-framer-name": `Previous - Disabled`,
                                            inComponentSlot: !0,
                                            layoutDependency: W,
                                            layoutId: `fQtSPKMju-container`,
                                            name: `Previous - Disabled`,
                                            nodeId: `fQtSPKMju`,
                                            rendersWithMotion: !0,
                                            scopeId: `DjDCzuhGc`,
                                            children: y(Un, {
                                              height: `100%`,
                                              id: `fQtSPKMju`,
                                              layoutId: `fQtSPKMju`,
                                              name: `Previous - Disabled`,
                                              variant: Z(re),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                      height: `100%`,
                                      id: `H9yfHbzKR`,
                                      layoutId: `H9yfHbzKR`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                y(G, {
                                  children: y(D, {
                                    className: `framer-1gzsece-container`,
                                    isModuleExternal: !0,
                                    layoutDependency: W,
                                    layoutId: `QUxjEVeW7-container`,
                                    nodeId: `QUxjEVeW7`,
                                    rendersWithMotion: !0,
                                    scopeId: `DjDCzuhGc`,
                                    children: y(ln, {
                                      defaultContent: [
                                        y(G, {
                                          height: 40,
                                          width: `40px`,
                                          children: y(D, {
                                            className: `framer-jbxywe-container`,
                                            "data-framer-name": `Next`,
                                            inComponentSlot: !0,
                                            layoutDependency: W,
                                            layoutId: `glJEpEnUD-container`,
                                            name: `Next`,
                                            nodeId: `glJEpEnUD`,
                                            rendersWithMotion: !0,
                                            scopeId: `DjDCzuhGc`,
                                            children: y(Un, {
                                              height: `100%`,
                                              id: `glJEpEnUD`,
                                              layoutId: `glJEpEnUD`,
                                              name: `Next`,
                                              variant: Z(I),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                      direction: `right`,
                                      disabledContent: [
                                        y(G, {
                                          height: 40,
                                          width: `40px`,
                                          children: y(D, {
                                            className: `framer-1fypgma-container`,
                                            "data-framer-name": `Next - Disabled`,
                                            inComponentSlot: !0,
                                            layoutDependency: W,
                                            layoutId: `jMz0CSgMd-container`,
                                            name: `Next - Disabled`,
                                            nodeId: `jMz0CSgMd`,
                                            rendersWithMotion: !0,
                                            scopeId: `DjDCzuhGc`,
                                            children: y(Un, {
                                              height: `100%`,
                                              id: `jMz0CSgMd`,
                                              layoutId: `jMz0CSgMd`,
                                              name: `Next - Disabled`,
                                              variant: Z(L),
                                              width: `100%`,
                                            }),
                                          }),
                                        }),
                                      ],
                                      height: `100%`,
                                      id: `QUxjEVeW7`,
                                      layoutId: `QUxjEVeW7`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              ],
                            }),
                        ],
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
          `.framer-BSCJf.framer-13wbdvy, .framer-BSCJf .framer-13wbdvy { display: block; }`,
          `.framer-BSCJf.framer-6ck3rv { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 0px; height: 430px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 500px; }`,
          `.framer-BSCJf .framer-3xiowv { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 12px; height: 1px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-BSCJf .framer-1r01ui9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 420px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-BSCJf .framer-sgvvh6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-BSCJf .framer-26bsma-container { flex: none; height: 72px; position: relative; width: 72px; }`,
          `.framer-BSCJf .framer-1orxa3u-container, .framer-BSCJf .framer-11g37e9-container, .framer-BSCJf .framer-1lw9l3j-container, .framer-BSCJf .framer-ie95o9-container, .framer-BSCJf .framer-1pzsiy1-container, .framer-BSCJf .framer-ictnfm-container, .framer-BSCJf .framer-vtf8ww-container, .framer-BSCJf .framer-kp9xoa-container, .framer-BSCJf .framer-94onsi-container, .framer-BSCJf .framer-10n3dkr-container, .framer-BSCJf .framer-1w2tgwb-container, .framer-BSCJf .framer-lzaorv-container, .framer-BSCJf .framer-3fgyqd-container, .framer-BSCJf .framer-1j2wnn2-container, .framer-BSCJf .framer-1algcb-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 72px); position: relative; width: 72px; }`,
          `.framer-BSCJf .framer-1lpj66j { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 100%; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
          `.framer-BSCJf .framer-ezpa2s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: absolute; right: 20px; top: 20px; width: min-content; z-index: 2; }`,
          `.framer-BSCJf .framer-1jrkftv-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-BSCJf .framer-1u2kqc3-container { flex: 1 0 0px; height: 100%; position: relative; width: 1px; }`,
          `.framer-BSCJf .framer-183wbqr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; left: 20px; overflow: visible; padding: 0px; position: absolute; right: 20px; top: 50%; z-index: 3; }`,
          `.framer-BSCJf .framer-xndm8b-container, .framer-BSCJf .framer-1gzsece-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
          `.framer-BSCJf .framer-1v9gr6q-container, .framer-BSCJf .framer-ssa7m3-container, .framer-BSCJf .framer-jbxywe-container, .framer-BSCJf .framer-1fypgma-container { height: auto; position: relative; width: auto; }`,
          `.framer-BSCJf.framer-v-16v6x48.framer-6ck3rv { height: min-content; width: 460px; }`,
          `.framer-BSCJf.framer-v-16v6x48 .framer-3xiowv { flex: none; flex-direction: column; height: min-content; }`,
          `.framer-BSCJf.framer-v-16v6x48 .framer-1r01ui9 { align-content: flex-start; align-items: flex-start; height: min-content; order: 1; width: 100%; }`,
          `.framer-BSCJf.framer-v-16v6x48 .framer-sgvvh6 { flex-direction: row; flex-wrap: wrap; width: 100%; }`,
          `.framer-BSCJf.framer-v-16v6x48 .framer-1lpj66j { flex: none; height: 451px; order: 0; width: 100%; }`,
          `.framer-BSCJf.framer-v-16v6x48 .framer-183wbqr { left: 16px; right: 16px; top: 50%; }`,
          `.framer-BSCJf.framer-v-lylj2l.framer-6ck3rv { height: 392px; width: 392px; }`,
        ],
        `framer-BSCJf`
      )),
      (Sr.displayName = `Product Image Gallery`),
      (Sr.defaultProps = { height: 430, width: 500 }),
      L(Sr, {
        variant: {
          options: [`k31Ummoy0`, `znFsOMeKa`, `Jt10xpoWT`],
          optionTitles: [`Desktop`, `Tablet`, `Phone`],
          title: `Variant`,
          type: q.Enum,
        },
        E_YyIj1Fq: {
          __defaultAssetReference: `data:framer/asset-reference,Uqg4Zu09g6RfH0LF1xieKS2q2Q.png?originalFilename=ChatGPT+Image+Jun+22%2C+2026%2C+12_14_43+AM.png&width=1254&height=1254`,
          title: `Image 1`,
          type: q.ResponsiveImage,
        },
        LPo6c9k2x: {
          __defaultAssetReference: `data:framer/asset-reference,QQkgIInaqPNW43dsdO9wenVy1Pw.png?originalFilename=ChatGPT+Image+Jun+22%2C+2026%2C+12_47_33+AM.png&width=1254&height=1254`,
          title: `Image 2`,
          type: q.ResponsiveImage,
        },
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
        HJqPRAK0q: { defaultValue: ``, title: `Product ID`, type: q.String },
        onHJqPRAK0qChange: { changes: `HJqPRAK0q`, type: q.ChangeHandler },
        ow53u_e9t: cr?.variant && {
          ...cr.variant,
          defaultValue: `pkXrkKWjI`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Previous Arrow`,
        },
        onow53u_e9tChange: { changes: `ow53u_e9t`, type: q.ChangeHandler },
        L5VWCFaBd: cr?.variant && {
          ...cr.variant,
          defaultValue: `nTRKIs1Et`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Next Arrow`,
        },
        onL5VWCFaBdChange: { changes: `L5VWCFaBd`, type: q.ChangeHandler },
        R6m8zmVV6: cr?.variant && {
          ...cr.variant,
          defaultValue: `xAFTrW5s1`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Previous Disabled Arrow`,
        },
        onR6m8zmVV6Change: { changes: `R6m8zmVV6`, type: q.ChangeHandler },
        TgnFjdak3: cr?.variant && {
          ...cr.variant,
          defaultValue: `JflN0RPhk`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Next Disabled Arrow`,
        },
        onTgnFjdak3Change: { changes: `TgnFjdak3`, type: q.ChangeHandler },
      }),
      I(Sr, [{ explicitInter: !0, fonts: [] }, ...rr, ...ir, ...ar, ...or, ...sr], {
        supportsExplicitInterCodegen: !0,
      }),
      (Sr.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([H(J, {}, t), H(tr, {}, t), H(Un, {}, t)])),
      }));
  }),
  wr,
  Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  zr,
  Br = e(() => {
    (f(),
      V(),
      E(),
      r(),
      wt(),
      Ge(),
      Mt(),
      (wr = U(Ft)),
      (Tr = U(Ot)),
      (Er = _e(Ot)),
      (Dr = `framer-aQUtP`),
      (Or = { jUvVZCFnI: `framer-v-ybjobo` }),
      (kr = (e) => {
        if (typeof e != `number`) return e;
        if (Number.isFinite(e)) return Math.max(0, e) + `px`;
      }),
      (Ar = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (jr = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (Mr = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Nr = (e) => ({
        from: { alias: `AdY3CVjzi`, data: We, type: `Collection` },
        orderBy: [
          { collection: `AdY3CVjzi`, direction: `desc`, name: `updatedAt`, type: `Identifier` },
        ],
        select: [
          { collection: `AdY3CVjzi`, name: `vJoj3qvid`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `Sn3Ji2zLH`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `UxQ8VtfSI`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `l2PesJvCE`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `eVfKYnlqn`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `Jry1OPs1q`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `StWb4Z9jo`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `K6GheEMTC`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `sGLDCFVI5`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `u8osWsFhh`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `EdlK9s4od`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `k8owwKEx3`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `JZfMFKc2o`, type: `Identifier` },
          { collection: `AdY3CVjzi`, name: `id`, type: `Identifier` },
        ],
        where: {
          operator: `not`,
          type: `UnaryOperation`,
          value: {
            left: { collection: `AdY3CVjzi`, name: `Sn3Ji2zLH`, type: `Identifier` },
            operator: `==`,
            right: { type: `LiteralValue`, value: e },
            type: `BinaryOperation`,
          },
        },
      })),
      (Pr = ({ query: e, pageSize: t, children: n }) => n(me(e))),
      (Fr = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Ir = C.create(o)),
      (Lr = ({
        arrowAlignment: e,
        arrowOffsetX: t,
        arrowOffsetY: n,
        arrowSize: r,
        cardsInView: i,
        height: a,
        id: o,
        productID: s,
        sliderPadding: c,
        width: l,
        ...u
      }) => ({
        ...u,
        bbPhpFyz4: c ?? u.bbPhpFyz4 ?? `56px 0px 0px 0px`,
        dz4MSQ8fY: r ?? u.dz4MSQ8fY ?? 34,
        FzNt31JRU: s ?? u.FzNt31JRU ?? ``,
        hGOjA9tFf: e ?? u.hGOjA9tFf ?? `Top Right`,
        OKWNOnfQH: t ?? u.OKWNOnfQH ?? 0,
        TtWh_V9f5: i ?? u.TtWh_V9f5 ?? 4,
        vGsIgQJfN: n ?? u.vGsIgQJfN ?? -55,
      })),
      (Rr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (zr = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              FzNt31JRU: p,
              bbPhpFyz4: m,
              TtWh_V9f5: h,
              hGOjA9tFf: _,
              dz4MSQ8fY: v,
              OKWNOnfQH: b,
              vGsIgQJfN: x,
              ...S
            } = Lr(e),
            {
              baseVariant: ee,
              classNames: T,
              clearLoadingGesture: E,
              gestureHandlers: O,
              gestureVariant: k,
              isLoading: j,
              setGestureState: M,
              setVariant: N,
              variants: P,
            } = B({ defaultVariant: `jUvVZCFnI`, ref: r, variant: f, variantClassNames: Or }),
            te = Rr(e, P),
            ne = F(Dr);
          return (
            K(),
            y(w, {
              id: d ?? a,
              children: y(Ir, {
                animate: P,
                initial: !1,
                children: y(Fr, {
                  value: Ar,
                  children: y(C.div, {
                    ...S,
                    ...O,
                    className: F(ne, `framer-ybjobo`, l, T),
                    "data-framer-name": `Variant 1`,
                    layoutDependency: te,
                    layoutId: `jUvVZCFnI`,
                    ref: r,
                    style: { "--12jf342": kr(m), ...c },
                    children: y(G, {
                      children: y(D, {
                        className: `framer-41dei8-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: te,
                        layoutId: `LyJ1MfkCt-container`,
                        nodeId: `LyJ1MfkCt`,
                        rendersWithMotion: !0,
                        scopeId: `FK0hgwRy_`,
                        children: y(Ot, {
                          animationOptions: {
                            delay: 0,
                            duration: 0.6,
                            ease: [0.44, 0, 0.56, 1],
                            type: `tween`,
                          },
                          appear: {
                            distance: 24,
                            duration: 0.4,
                            mode: `Stagger`,
                            stagger: 0.06,
                            type: `Fade`,
                          },
                          arrowAlignment: _,
                          arrowOffsetX: b,
                          arrowOffsetY: x,
                          arrows: {
                            backdrop: `rgb(255, 255, 255)`,
                            borderColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                            borderWidth: 1,
                            disabledOpacity: 0.6,
                            fadeIn: !1,
                            fill: `rgb(68, 68, 68)`,
                            gap: 8,
                            inset: 0,
                            nextImage: `../../assets/images/qShOc5ZwaKa7q4lE4yTUYyYdZL4.png`,
                            prevImage: `../../assets/images/dC3PnSK42DE1Ed5jx5GxE2F0io.png`,
                            radius: 50,
                            shadow: !1,
                            shadowBlur: 10,
                            shadowColor: `rgba(0, 0, 0, 0.2)`,
                            show: !0,
                            type: `Grouped`,
                            variant: `Fill`,
                          },
                          arrowSize: v,
                          autoPlay: !1,
                          centerFocus: {
                            activeScale: 1.08,
                            enabled: !1,
                            inactiveOpacity: 0.5,
                            inactiveScale: 0.92,
                            transitionSpeed: 0.35,
                          },
                          content: [
                            y(C.div, {
                              className: `framer-ojbkde`,
                              "data-framer-name": `Products - All`,
                              layoutDependency: te,
                              layoutId: `AdY3CVjzi`,
                              children: y(he, {
                                children: y(Pr, {
                                  query: Nr(p),
                                  children: (e, t, n) =>
                                    y(g, {
                                      children: e?.map(
                                        (
                                          {
                                            EdlK9s4od: e,
                                            eVfKYnlqn: t,
                                            id: n,
                                            Jry1OPs1q: r,
                                            JZfMFKc2o: i,
                                            K6GheEMTC: a,
                                            k8owwKEx3: o,
                                            l2PesJvCE: s,
                                            sGLDCFVI5: c,
                                            Sn3Ji2zLH: l,
                                            StWb4Z9jo: u,
                                            u8osWsFhh: d,
                                            UxQ8VtfSI: f,
                                            vJoj3qvid: p,
                                          },
                                          m
                                        ) => (
                                          (p ??= ``),
                                          (l ??= ``),
                                          (f ??= ``),
                                          (s ??= ``),
                                          (e ??= ``),
                                          (o ??= ``),
                                          (i ??= ``),
                                          y(
                                            w,
                                            {
                                              id: `AdY3CVjzi-${n}`,
                                              children: y(ae.Provider, {
                                                value: { JZfMFKc2o: i },
                                                children: y(A, {
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
                                                    y(G, {
                                                      height: 336,
                                                      width: `297px`,
                                                      children: y(D, {
                                                        className: `framer-1od13ny-container`,
                                                        inComponentSlot: !0,
                                                        layoutDependency: te,
                                                        layoutId: `SwTWF8xxk-container`,
                                                        nodeId: `SwTWF8xxk`,
                                                        rendersWithMotion: !0,
                                                        scopeId: `FK0hgwRy_`,
                                                        children: y(Ft, {
                                                          FgMmIZmJw: `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
                                                          grTamTNk1: jr(c),
                                                          height: `100%`,
                                                          hFy2PLFBG: l,
                                                          HwypVSMEi: !1,
                                                          id: `SwTWF8xxk`,
                                                          II0fWsmjM: `12px`,
                                                          layoutId: `SwTWF8xxk`,
                                                          MGgAvDoA0: n[0],
                                                          O9ZyioqcS: jr(t),
                                                          OKvEEQQFQ: !1,
                                                          q1Wa9MpBb: jr(d),
                                                          Qb7mSHgLh: o,
                                                          QjM5BTCWQ: !0,
                                                          SKBNP2vvn: !1,
                                                          style: { height: `100%`, width: `100%` },
                                                          TCGQti0b7: f,
                                                          tJ0RQfmJy: e,
                                                          TWjfUBTmo: jr(u),
                                                          ub4buTzaB: jr(r),
                                                          variant: Mr(`anAebR9ik`),
                                                          width: `100%`,
                                                          wsSEriDkC: s,
                                                          xYhX6dOGf: {
                                                            borderColor: `rgb(206, 206, 206)`,
                                                            borderStyle: `solid`,
                                                            borderWidth: 0,
                                                          },
                                                          YdL5oV0XS: jr(a),
                                                          Zg3vnZECo: p,
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
                          direction: `Left`,
                          dots: {
                            activeFill: `rgb(255, 255, 255)`,
                            alignment: `Bottom Center`,
                            backdrop: `rgba(0, 0, 0, 0.4)`,
                            blur: 4,
                            compact: !1,
                            compactVisible: 3,
                            fill: `rgba(255, 255, 255, 0.4)`,
                            gap: 8,
                            inset: 20,
                            offsetX: 0,
                            offsetY: 0,
                            opacity: 0.5,
                            padding: 10,
                            progressWidth: 200,
                            radius: 20,
                            size: 10,
                            type: `None`,
                          },
                          height: `100%`,
                          id: `LyJ1MfkCt`,
                          items: h,
                          layout: {
                            align: `Stretch`,
                            aspectRatio: 0.8,
                            bleed: `None`,
                            fit: `Fill`,
                            gap: 16,
                            padding: 0,
                          },
                          layoutId: `LyJ1MfkCt`,
                          navigation: { draggable: !0, keyboard: !0, step: `Single` },
                          playback: {
                            interval: 3,
                            loop: !0,
                            pauseOnHover: !0,
                            startAt: `Start`,
                            tapToPause: !1,
                          },
                          slideMode: `Non-infinite`,
                          style: { width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                  }),
                }),
              }),
            })
          );
        }),
        [
          `.framer-aQUtP.framer-fjhb3m, .framer-aQUtP .framer-fjhb3m { display: block; }`,
          `.framer-aQUtP.framer-ybjobo { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--12jf342); position: relative; width: 1100px; }`,
          `.framer-aQUtP .framer-41dei8-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-aQUtP .framer-ojbkde { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 4px; position: relative; width: min-content; }`,
          `.framer-aQUtP .framer-1od13ny-container { flex: none; height: 336px; position: relative; width: 297px; }`,
        ],
        `framer-aQUtP`
      )),
      (zr.displayName = `Related Product Carousel`),
      (zr.defaultProps = { height: 390, width: 1100 }),
      L(zr, {
        FzNt31JRU: { defaultValue: ``, title: `Product ID`, type: q.String },
        onFzNt31JRUChange: { changes: `FzNt31JRU`, type: q.ChangeHandler },
        bbPhpFyz4: { defaultValue: `56px 0px 0px 0px`, title: `Slider Padding`, type: q.Padding },
        TtWh_V9f5: {
          defaultValue: 4,
          displayStepper: !0,
          max: 8,
          min: 1,
          step: 1,
          title: `Cards In View`,
          type: q.Number,
        },
        onTtWh_V9f5Change: { changes: `TtWh_V9f5`, type: q.ChangeHandler },
        hGOjA9tFf: Er?.arrowAlignment && {
          ...Er.arrowAlignment,
          defaultValue: `Top Right`,
          description: void 0,
          hidden: void 0,
          optional: void 0,
          title: `Arrow Alignment`,
        },
        onhGOjA9tFfChange: { changes: `hGOjA9tFf`, type: q.ChangeHandler },
        dz4MSQ8fY: {
          defaultValue: 34,
          max: 88,
          min: 24,
          step: 2,
          title: `Arrow Size`,
          type: q.Number,
        },
        ondz4MSQ8fYChange: { changes: `dz4MSQ8fY`, type: q.ChangeHandler },
        OKWNOnfQH: {
          defaultValue: 0,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset X`,
          type: q.Number,
        },
        onOKWNOnfQHChange: { changes: `OKWNOnfQH`, type: q.ChangeHandler },
        vGsIgQJfN: {
          defaultValue: -55,
          max: 500,
          min: -500,
          step: 5,
          title: `Arrow Offset Y`,
          type: q.Number,
        },
        onvGsIgQJfNChange: { changes: `vGsIgQJfN`, type: q.ChangeHandler },
      }),
      I(zr, [{ explicitInter: !0, fonts: [] }, ...wr, ...Tr], {
        supportsExplicitInterCodegen: !0,
      }));
  });
function Vr(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Kt(),
      Ht(),
      lt(),
      dt(),
      (Hr = U(qt)),
      (Ur = U(ct)),
      (Wr = [`nso08tuzl`, `wSm9XKsL5`]),
      (Gr = `framer-JFKsC`),
      (Kr = { nso08tuzl: `framer-v-3huyw8`, wSm9XKsL5: `framer-v-1hl7pbs` }),
      (qr = { delay: 0, duration: 0.3, ease: [0.12, 0.23, 0.5, 1], type: `tween` }),
      (Jr = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Yr = { Closed: `wSm9XKsL5`, Open: `nso08tuzl` }),
      (Xr = C.create(o)),
      (Zr = ({ description: e, height: t, id: n, title: r, width: i, ...a }) => ({
        ...a,
        CnlZi3y5a:
          e ??
          a.CnlZi3y5a ??
          `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
        do45skV7Q: r ?? a.do45skV7Q ?? `Title`,
        variant: Yr[a.variant] ?? a.variant ?? `nso08tuzl`,
      })),
      (Qr = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($r = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let {
              style: l,
              className: d,
              layoutId: f,
              variant: p,
              do45skV7Q: m,
              CnlZi3y5a: h,
              ...g
            } = Zr(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: T,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = B({
              cycleOrder: Wr,
              defaultVariant: `nso08tuzl`,
              ref: r,
              variant: p,
              variantClassNames: Kr,
            }),
            A = Qr(e, k),
            j = [Gt, pt],
            { activeVariantCallback: M, delay: N } = ge(_),
            P = M(async (...e) => {
              (E({ isPressed: !1 }), O(`wSm9XKsL5`));
            }),
            te = F(Gr, ...j),
            ne = M(async (...e) => {
              (E({ isPressed: !1 }), O(`nso08tuzl`));
            });
          return y(w, {
            id: f ?? a,
            children: y(Xr, {
              animate: k,
              initial: !1,
              children: y(Jr, {
                value: qr,
                children: b(C.div, {
                  ...g,
                  ...S,
                  className: F(te, `framer-3huyw8`, d, v),
                  "data-framer-name": `Open`,
                  "data-highlight": !0,
                  layoutDependency: A,
                  layoutId: `nso08tuzl`,
                  onTap: P,
                  ref: r,
                  style: { ...l },
                  ...Vr({ wSm9XKsL5: { "data-framer-name": `Closed`, onTap: ne } }, _, ee),
                  children: [
                    y(G, {
                      children: y(D, {
                        className: `framer-1g28odo-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: A,
                        layoutId: `lfNyedtPF-container`,
                        nodeId: `lfNyedtPF`,
                        rendersWithMotion: !0,
                        scopeId: `fWjdZJAdl`,
                        children: y(qt, {
                          direction: `vertical`,
                          height: `100%`,
                          id: `lfNyedtPF`,
                          layoutId: `lfNyedtPF`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    b(C.div, {
                      className: `framer-1jlqgic`,
                      "data-framer-name": `Wrap`,
                      layoutDependency: A,
                      layoutId: `Kp5E1Vxse`,
                      children: [
                        b(C.div, {
                          className: `framer-1m7lc3v`,
                          "data-framer-name": `Title Wrap`,
                          layoutDependency: A,
                          layoutId: `JxGkWyPb_`,
                          children: [
                            y(R, {
                              __fromCanvasComponent: !0,
                              children: y(o, {
                                children: y(C.p, {
                                  className: `framer-styles-preset-g91u7x`,
                                  "data-styles-preset": `AeW2_n5fC`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                                  },
                                  children: `Title`,
                                }),
                              }),
                              className: `framer-o8mde6`,
                              fonts: [`Inter`],
                              layoutDependency: A,
                              layoutId: `jHSTys976`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              text: m,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            y(C.div, {
                              className: `framer-1afjmjm`,
                              "data-framer-name": `Icon`,
                              layoutDependency: A,
                              layoutId: `KXkpp_h1q`,
                              children: y(ct, {
                                animated: !0,
                                className: `framer-1go9eig`,
                                layoutDependency: A,
                                layoutId: `memZDQvVL`,
                                style: {
                                  "--d1m4u3": 1.4,
                                  "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                  rotate: 180,
                                },
                                variants: { wSm9XKsL5: { rotate: 0 } },
                              }),
                            }),
                          ],
                        }),
                        y(C.div, {
                          className: `framer-11m1a3b`,
                          "data-framer-name": `Description Wrap`,
                          layoutDependency: A,
                          layoutId: `LxzsRSYfL`,
                          style: { opacity: 1 },
                          variants: { wSm9XKsL5: { opacity: 0 } },
                          children: y(R, {
                            __fromCanvasComponent: !0,
                            children: y(o, {
                              children: y(C.p, {
                                className: `framer-styles-preset-hhy7lj`,
                                "data-styles-preset": `jqlnmWM57`,
                                dir: `auto`,
                                children: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
                              }),
                            }),
                            className: `framer-ejehxm`,
                            "data-framer-name": `Description`,
                            fonts: [`Inter`],
                            layoutDependency: A,
                            layoutId: `CsR3pADpF`,
                            style: {
                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                              "--framer-link-text-decoration": `underline`,
                            },
                            text: h,
                            verticalAlignment: `top`,
                            withExternalLayout: !0,
                          }),
                        }),
                      ],
                    }),
                    y(C.div, {
                      className: `framer-14r3p5`,
                      "data-framer-name": `Line`,
                      layoutDependency: A,
                      layoutId: `T7j_Zq6Pq`,
                      style: {
                        backgroundColor: `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                      },
                      variants: { wSm9XKsL5: { backgroundColor: `rgb(227, 227, 227)` } },
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `.framer-JFKsC.framer-nl6pn3, .framer-JFKsC .framer-nl6pn3 { display: block; }`,
          `.framer-JFKsC.framer-3huyw8 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 22px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 385px; }`,
          `.framer-JFKsC .framer-1g28odo-container { flex: none; height: auto; left: 0px; position: absolute; top: 0px; width: auto; z-index: 1; }`,
          `.framer-JFKsC .framer-1jlqgic { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
          `.framer-JFKsC .framer-1m7lc3v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-JFKsC .framer-o8mde6 { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JFKsC .framer-1afjmjm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 0px 10px; position: relative; width: min-content; }`,
          `.framer-JFKsC .framer-1go9eig { aspect-ratio: 1 / 1; flex: none; height: auto; position: relative; width: 18px; }`,
          `.framer-JFKsC .framer-11m1a3b { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-JFKsC .framer-ejehxm { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
          `.framer-JFKsC .framer-14r3p5 { flex: none; height: 2px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-JFKsC.framer-v-1hl7pbs .framer-11m1a3b { bottom: 0px; height: 1px; left: 0px; position: absolute; right: 0px; width: unset; z-index: 1; }`,
          ...Ut,
          ...ut,
        ],
        `framer-JFKsC`
      )),
      ($r.displayName = `FAQ Item`),
      ($r.defaultProps = { height: 115, width: 385 }),
      L($r, {
        variant: {
          options: [`nso08tuzl`, `wSm9XKsL5`],
          optionTitles: [`Open`, `Closed`],
          title: `Variant`,
          type: q.Enum,
        },
        do45skV7Q: { defaultValue: `Title`, displayTextArea: !1, title: `Title`, type: q.String },
        ondo45skV7QChange: { changes: `do45skV7Q`, type: q.ChangeHandler },
        CnlZi3y5a: {
          defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. `,
          displayTextArea: !0,
          title: `Description`,
          type: q.String,
        },
        onCnlZi3y5aChange: { changes: `CnlZi3y5a`, type: q.ChangeHandler },
      }),
      I(
        $r,
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
          ...Hr,
          ...Ur,
          ...P(Wt),
          ...P(ft),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ti(e) {
  return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Q(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function ni(e) {
  throw Error(`Unexpected value: ${e}`);
}
function ri(e) {
  return typeof e == `string`;
}
function ii(e) {
  return Number.isFinite(e);
}
function ai(e) {
  return e === null;
}
function oi(e) {
  if (ai(e)) return 0;
  switch (e.type) {
    case q.Array:
      return 1;
    case q.Boolean:
      return 2;
    case q.Color:
      return 3;
    case q.Date:
      return 4;
    case q.Enum:
      return 5;
    case q.File:
      return 6;
    case q.ResponsiveImage:
      return 10;
    case q.Link:
      return 7;
    case q.Number:
      return 8;
    case q.Object:
      return 9;
    case q.RichText:
      return 11;
    case q.String:
      return 12;
    case q.VectorSetItem:
      return 13;
    default:
      ni(e);
  }
}
function si(e) {
  let t = e.readUint16(),
    n = [];
  for (let r = 0; r < t; r++) {
    let t = Xi.read(e);
    n.push(t);
  }
  return { type: q.Array, value: n };
}
function ci(e, t) {
  for (let n of (e.writeUint16(t.value.length), t.value)) Xi.write(e, n);
}
function li(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = Xi.compare(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function ui(e) {
  return { type: q.Boolean, value: e.readUint8() !== 0 };
}
function di(e, t) {
  e.writeUint8(+!!t.value);
}
function fi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function pi(e) {
  return { type: q.Color, value: e.readString() };
}
function mi(e, t) {
  e.writeString(t.value);
}
function hi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function gi(e) {
  let t = e.readInt64(),
    n = new Date(t);
  return { type: q.Date, value: n.toISOString() };
}
function _i(e, t) {
  let n = new Date(t.value).getTime();
  e.writeInt64(n);
}
function vi(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function yi(e) {
  return { type: q.Enum, value: e.readString() };
}
function bi(e, t) {
  e.writeString(t.value);
}
function xi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Si(e) {
  return { type: q.File, value: e.readString() };
}
function Ci(e, t) {
  e.writeString(t.value);
}
function wi(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Ti(e) {
  return { type: q.Link, value: e.readJson() };
}
function Ei(e, t) {
  e.writeJson(t.value);
}
function Di(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Oi(e) {
  return { type: q.Number, value: e.readFloat64() };
}
function ki(e, t) {
  e.writeFloat64(t.value);
}
function Ai(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ji(e) {
  let t = e.readUint16(),
    n = {};
  for (let r = 0; r < t; r++) {
    let t = e.readString();
    n[t] = Xi.read(e);
  }
  return { type: q.Object, value: n };
}
function Mi(e, t) {
  let n = Object.entries(t.value);
  for (let [t, r] of (e.writeUint16(n.length), n)) (e.writeString(t), Xi.write(e, r));
}
function Ni(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = e.value[o] ?? null,
      l = t.value[s] ?? null,
      u = Xi.compare(c, l, n);
    if (u !== 0) return u;
  }
  return 0;
}
function Pi(e) {
  return { type: q.ResponsiveImage, value: e.readJson() };
}
function Fi(e, t) {
  e.writeJson(t.value);
}
function Ii(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Li(e) {
  let t = e.readInt8();
  if (t === 0) return { type: q.RichText, value: e.readUint32() };
  if (t === 1) return { type: q.RichText, value: e.readString() };
  throw Error(`Invalid rich text pointer`);
}
function Ri(e, t) {
  if (ii(t.value)) {
    (e.writeInt8(0), e.writeUint32(t.value));
    return;
  }
  if (ri(t.value)) {
    (e.writeInt8(1), e.writeString(t.value));
    return;
  }
  throw Error(`Invalid rich text pointer`);
}
function zi(e, t) {
  let n = e.value,
    r = t.value;
  if ((ii(n) && ii(r)) || (ri(n) && ri(r))) return n < r ? -1 : +(n > r);
  throw Error(`Invalid rich text pointer`);
}
function Bi(e) {
  return { type: q.String, value: e.readString() };
}
function Vi(e, t) {
  e.writeString(t.value);
}
function Hi(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function Ui(e) {
  return { type: q.VectorSetItem, value: e.readUint32() };
}
function Wi(e, t) {
  e.writeUint32(t.value);
}
function Gi(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
async function Ki(e) {
  let t = Math.floor(ha * (Math.random() + 1) * 2 ** (e - 1));
  await new Promise((e) => {
    setTimeout(e, t);
  });
}
async function qi(e, t) {
  let n = Yi(t),
    r = [],
    i = 0;
  for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
  let a = new URL(e),
    o = r.join(`,`);
  a.searchParams.set(`range`, o);
  let s = await _a(a);
  if (s.status !== 200) throw Error(`Request failed: ${s.status} ${s.statusText}`);
  let c = await s.arrayBuffer(),
    l = new Uint8Array(c);
  if (l.length !== i) throw Error(`Request failed: Unexpected response length`);
  let u = new va(),
    d = 0;
  for (let e of n) {
    let t = e.to - e.from,
      n = d + t,
      r = l.subarray(d, n);
    (u.write(e.from, r), (d = n));
  }
  return t.map((e) => u.read(e.from, e.to - e.from));
}
function Ji(e, t) {
  let n = e.length + t.length,
    r = new Uint8Array(n);
  return (r.set(e, 0), r.set(t, e.length), r);
}
function Yi(e) {
  Q(e.length > 0, `Must have at least one range`);
  let t = [...e].sort((e, t) => e.from - t.from),
    n = [];
  for (let e of t) {
    let t = n.length - 1,
      r = n[t];
    r && e.from <= r.to ? (n[t] = { from: r.from, to: Math.max(r.to, e.to) }) : n.push(e);
  }
  return n;
}
var Xi,
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
  $,
  sa,
  ca,
  la,
  ua,
  da,
  fa,
  pa,
  ma,
  ha,
  ga,
  _a,
  va,
  ya,
  ba,
  xa,
  Sa = e(() => {
    (t(),
      V(),
      (Zi = Object.create),
      (Qi = Object.defineProperty),
      ($i = Object.getOwnPropertyDescriptor),
      (ea = Object.getOwnPropertyNames),
      (ta = Object.getPrototypeOf),
      (na = Object.prototype.hasOwnProperty),
      (ra = (e, t, n) =>
        t in e
          ? Qi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
          : (e[t] = n)),
      (ia = (e, t) =>
        function () {
          try {
            return (t || (0, e[ea(e)[0]])((t = { exports: {} }).exports, t), t.exports);
          } catch (e) {
            throw ((t = 0), e);
          }
        }),
      (aa = (e, t, n, r) => {
        if ((t && typeof t == `object`) || typeof t == `function`)
          for (let i of ea(t))
            na.call(e, i) ||
              i === n ||
              Qi(e, i, { get: () => t[i], enumerable: !(r = $i(t, i)) || r.enumerable });
        return e;
      }),
      (oa = (e, t, n) => (
        (n = e == null ? {} : Zi(ta(e))),
        aa(!t && e && e.__esModule ? n : Qi(n, `default`, { value: e, enumerable: !0 }), e)
      )),
      ($ = (e, t, n) => ra(e, typeof t == `symbol` ? t : t + ``, n)),
      (sa = oa(
        ia({
          "../../../node_modules/dataloader/index.js"(e, t) {
            var n,
              r = (function () {
                function e(e, t) {
                  if (typeof e != `function`)
                    throw TypeError(
                      `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
                        e +
                        `.`
                    );
                  ((this._batchLoadFn = e),
                    (this._maxBatchSize = (function (e) {
                      if (!(!e || !1 !== e.batch)) return 1;
                      var t = e && e.maxBatchSize;
                      if (t === void 0) return 1 / 0;
                      if (typeof t != `number` || t < 1)
                        throw TypeError(`maxBatchSize must be a positive number: ` + t);
                      return t;
                    })(t)),
                    (this._batchScheduleFn = (function (e) {
                      var t = e && e.batchScheduleFn;
                      if (t === void 0) return i;
                      if (typeof t != `function`)
                        throw TypeError(`batchScheduleFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheKeyFn = (function (e) {
                      var t = e && e.cacheKeyFn;
                      if (t === void 0)
                        return function (e) {
                          return e;
                        };
                      if (typeof t != `function`)
                        throw TypeError(`cacheKeyFn must be a function: ` + t);
                      return t;
                    })(t)),
                    (this._cacheMap = (function (e) {
                      if (!(!e || !1 !== e.cache)) return null;
                      var t = e && e.cacheMap;
                      if (t === void 0) return new Map();
                      if (t !== null) {
                        var n = [`get`, `set`, `delete`, `clear`].filter(function (e) {
                          return t && typeof t[e] != `function`;
                        });
                        if (n.length !== 0)
                          throw TypeError(`Custom cacheMap missing methods: ` + n.join(`, `));
                      }
                      return t;
                    })(t)),
                    (this._batch = null),
                    (this.name = t && t.name ? t.name : null));
                }
                var t = e.prototype;
                return (
                  (t.load = function (e) {
                    if (e == null)
                      throw TypeError(
                        `The loader.load() function must be called with a value, but got: ` +
                          String(e) +
                          `.`
                      );
                    var t = (function (e) {
                        var t = e._batch;
                        if (t !== null && !t.hasDispatched && t.keys.length < e._maxBatchSize)
                          return t;
                        var n = { hasDispatched: !1, keys: [], callbacks: [] };
                        return (
                          (e._batch = n),
                          e._batchScheduleFn(function () {
                            (function (e, t) {
                              var n;
                              if (((t.hasDispatched = !0), t.keys.length === 0)) {
                                o(t);
                                return;
                              }
                              try {
                                n = e._batchLoadFn(t.keys);
                              } catch (n) {
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              }
                              if (!n || typeof n.then != `function`)
                                return a(
                                  e,
                                  t,
                                  TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
                                      String(n) +
                                      `.`
                                  )
                                );
                              n.then(function (e) {
                                if (!s(e))
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
                                      String(e) +
                                      `.`
                                  );
                                if (e.length !== t.keys.length)
                                  throw TypeError(
                                    `DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
                                      String(t.keys) +
                                      `

Values:
` +
                                      String(e)
                                  );
                                o(t);
                                for (var n = 0; n < t.callbacks.length; n++) {
                                  var r = e[n];
                                  r instanceof Error
                                    ? t.callbacks[n].reject(r)
                                    : t.callbacks[n].resolve(r);
                                }
                              }).catch(function (n) {
                                a(e, t, n);
                              });
                            })(e, n);
                          }),
                          n
                        );
                      })(this),
                      n = this._cacheMap,
                      r = this._cacheKeyFn(e);
                    if (n) {
                      var i = n.get(r);
                      if (i) {
                        var c = (t.cacheHits ||= []);
                        return new Promise(function (e) {
                          c.push(function () {
                            e(i);
                          });
                        });
                      }
                    }
                    t.keys.push(e);
                    var l = new Promise(function (e, n) {
                      t.callbacks.push({ resolve: e, reject: n });
                    });
                    return (n && n.set(r, l), l);
                  }),
                  (t.loadMany = function (e) {
                    if (!s(e))
                      throw TypeError(
                        `The loader.loadMany() function must be called with Array<key> but got: ` +
                          e +
                          `.`
                      );
                    for (var t = [], n = 0; n < e.length; n++)
                      t.push(
                        this.load(e[n]).catch(function (e) {
                          return e;
                        })
                      );
                    return Promise.all(t);
                  }),
                  (t.clear = function (e) {
                    var t = this._cacheMap;
                    if (t) {
                      var n = this._cacheKeyFn(e);
                      t.delete(n);
                    }
                    return this;
                  }),
                  (t.clearAll = function () {
                    var e = this._cacheMap;
                    return (e && e.clear(), this);
                  }),
                  (t.prime = function (e, t) {
                    var n = this._cacheMap;
                    if (n) {
                      var r,
                        i = this._cacheKeyFn(e);
                      n.get(i) === void 0 &&
                        (t instanceof Error
                          ? (r = Promise.reject(t)).catch(function () {})
                          : (r = Promise.resolve(t)),
                        n.set(i, r));
                    }
                    return this;
                  }),
                  e
                );
              })(),
              i =
                typeof process == `object` && typeof process.nextTick == `function`
                  ? function (e) {
                      ((n ||= Promise.resolve()),
                        n.then(function () {
                          process.nextTick(e);
                        }));
                    }
                  : typeof setImmediate == `function`
                    ? function (e) {
                        setImmediate(e);
                      }
                    : function (e) {
                        setTimeout(e);
                      };
            function a(e, t, n) {
              o(t);
              for (var r = 0; r < t.keys.length; r++)
                (e.clear(t.keys[r]), t.callbacks[r].reject(n));
            }
            function o(e) {
              if (e.cacheHits) for (var t = 0; t < e.cacheHits.length; t++) e.cacheHits[t]();
            }
            function s(e) {
              return (
                typeof e == `object` &&
                !!e &&
                typeof e.length == `number` &&
                (e.length === 0 ||
                  (e.length > 0 && Object.prototype.hasOwnProperty.call(e, e.length - 1)))
              );
            }
            t.exports = r;
          },
        })(),
        1
      )),
      (ca = {
        Uint8: 1,
        Uint16: 2,
        Uint32: 4,
        BigUint64: 8,
        Int8: 1,
        Int16: 2,
        Int32: 4,
        BigInt64: 8,
        Float32: 4,
        Float64: 8,
      }),
      (la = class {
        getOffset() {
          return this.offset;
        }
        ensureLength(e) {
          let t = this.bytes.length;
          if (!(this.offset + e <= t)) throw Error(`Reading out of bounds`);
        }
        readUint8() {
          let e = ca.Uint8;
          this.ensureLength(e);
          let t = this.view.getUint8(this.offset);
          return ((this.offset += e), t);
        }
        readUint16() {
          let e = ca.Uint16;
          this.ensureLength(e);
          let t = this.view.getUint16(this.offset);
          return ((this.offset += e), t);
        }
        readUint32() {
          let e = ca.Uint32;
          this.ensureLength(e);
          let t = this.view.getUint32(this.offset);
          return ((this.offset += e), t);
        }
        readUint64() {
          let e = this.readBigUint64();
          return Number(e);
        }
        readBigUint64() {
          let e = ca.BigUint64;
          this.ensureLength(e);
          let t = this.view.getBigUint64(this.offset);
          return ((this.offset += e), t);
        }
        readInt8() {
          let e = ca.Int8;
          this.ensureLength(e);
          let t = this.view.getInt8(this.offset);
          return ((this.offset += e), t);
        }
        readInt16() {
          let e = ca.Int16;
          this.ensureLength(e);
          let t = this.view.getInt16(this.offset);
          return ((this.offset += e), t);
        }
        readInt32() {
          let e = ca.Int32;
          this.ensureLength(e);
          let t = this.view.getInt32(this.offset);
          return ((this.offset += e), t);
        }
        readInt64() {
          let e = this.readBigInt64();
          return Number(e);
        }
        readBigInt64() {
          let e = ca.BigInt64;
          this.ensureLength(e);
          let t = this.view.getBigInt64(this.offset);
          return ((this.offset += e), t);
        }
        readFloat32() {
          let e = ca.Float32;
          this.ensureLength(e);
          let t = this.view.getFloat32(this.offset);
          return ((this.offset += e), t);
        }
        readFloat64() {
          let e = ca.Float64;
          this.ensureLength(e);
          let t = this.view.getFloat64(this.offset);
          return ((this.offset += e), t);
        }
        readBytes(e) {
          let t = this.offset,
            n = t + e,
            r = this.bytes.subarray(t, n);
          return ((this.offset = n), r);
        }
        readString() {
          let e = this.readUint32(),
            t = this.readBytes(e);
          return this.decoder.decode(t);
        }
        readJson() {
          let e = this.readString();
          return JSON.parse(e);
        }
        constructor(e) {
          ($(this, `bytes`, e),
            $(this, `offset`, 0),
            $(this, `view`),
            $(this, `decoder`, new TextDecoder()),
            (this.view = ti(this.bytes)));
        }
      }),
      a !== void 0 && a.requestIdleCallback,
      (ua = (e) => 2 ** e - 1),
      (da = (e) => -(2 ** (e - 1))),
      (fa = (e) => 2 ** (e - 1) - 1),
      da(8),
      da(16),
      da(32),
      -(BigInt(2) ** BigInt(63)),
      ua(8),
      ua(16),
      ua(32),
      BigInt(2) ** BigInt(64) - BigInt(1),
      fa(8),
      fa(16),
      fa(32),
      BigInt(2) ** BigInt(63) - BigInt(1),
      (pa = class e {
        static fromString(t) {
          let [n, r, i] = t.split(`/`).map(Number);
          return (
            Q(ii(n), `Invalid chunkId`),
            Q(ii(r), `Invalid offset`),
            Q(ii(i), `Invalid length`),
            new e(n, r, i)
          );
        }
        toString() {
          return `${this.chunkId}/${this.offset}/${this.length}`;
        }
        static read(t) {
          let n = t.readUint16(),
            r = t.readUint32(),
            i = t.readUint32();
          return new e(n, r, i);
        }
        write(e) {
          (e.writeUint16(this.chunkId), e.writeUint32(this.offset), e.writeUint32(this.length));
        }
        compare(e) {
          return this.chunkId < e.chunkId
            ? -1
            : this.chunkId > e.chunkId
              ? 1
              : this.offset < e.offset
                ? -1
                : this.offset > e.offset
                  ? 1
                  : (Q(this.length === e.length), 0);
        }
        constructor(e, t, n) {
          ($(this, `chunkId`, e), $(this, `offset`, t), $(this, `length`, n));
        }
      }),
      ((e) => {
        ((e.read = function (e) {
          let t = e.readUint8();
          switch (t) {
            case 0:
              return null;
            case 1:
              return si(e);
            case 2:
              return ui(e);
            case 3:
              return pi(e);
            case 4:
              return gi(e);
            case 5:
              return yi(e);
            case 6:
              return Si(e);
            case 7:
              return Ti(e);
            case 8:
              return Oi(e);
            case 9:
              return ji(e);
            case 10:
              return Pi(e);
            case 11:
              return Li(e);
            case 12:
              return Bi(e);
            case 13:
              return Ui(e);
            default:
              ni(t);
          }
        }),
          (e.write = function (e, t) {
            let n = oi(t);
            if ((e.writeUint8(n), !ai(t)))
              switch (t.type) {
                case q.Array:
                  return ci(e, t);
                case q.Boolean:
                  return di(e, t);
                case q.Color:
                  return mi(e, t);
                case q.Date:
                  return _i(e, t);
                case q.Enum:
                  return bi(e, t);
                case q.File:
                  return Ci(e, t);
                case q.Link:
                  return Ei(e, t);
                case q.Number:
                  return ki(e, t);
                case q.Object:
                  return Mi(e, t);
                case q.ResponsiveImage:
                  return Fi(e, t);
                case q.RichText:
                  return Ri(e, t);
                case q.VectorSetItem:
                  return Wi(e, t);
                case q.String:
                  return Vi(e, t);
                default:
                  ni(t);
              }
          }),
          (e.compare = function (e, t, n) {
            let r = oi(e),
              i = oi(t);
            if (r < i) return -1;
            if (r > i) return 1;
            if (ai(e) || ai(t)) return 0;
            switch (e.type) {
              case q.Array:
                return (Q(t.type === q.Array), li(e, t, n));
              case q.Boolean:
                return (Q(t.type === q.Boolean), fi(e, t));
              case q.Color:
                return (Q(t.type === q.Color), hi(e, t));
              case q.Date:
                return (Q(t.type === q.Date), vi(e, t));
              case q.Enum:
                return (Q(t.type === q.Enum), xi(e, t));
              case q.File:
                return (Q(t.type === q.File), wi(e, t));
              case q.Link:
                return (Q(t.type === q.Link), Di(e, t));
              case q.Number:
                return (Q(t.type === q.Number), Ai(e, t));
              case q.Object:
                return (Q(t.type === q.Object), Ni(e, t, n));
              case q.ResponsiveImage:
                return (Q(t.type === q.ResponsiveImage), Ii(e, t));
              case q.RichText:
                return (Q(t.type === q.RichText), zi(e, t));
              case q.VectorSetItem:
                return (Q(t.type === q.VectorSetItem), Gi(e, t));
              case q.String:
                return (Q(t.type === q.String), Hi(e, t, n));
              default:
                ni(e);
            }
          }));
      })((Xi ||= {})),
      (ma = 3),
      (ha = 250),
      (ga = [408, 429, 500, 502, 503, 504]),
      (_a = async (e, t) => {
        let n = 0;
        for (;;) {
          try {
            let r = await fetch(e, t);
            if (!ga.includes(r.status) || ++n > ma) return r;
          } catch (e) {
            if (t?.signal?.aborted || ++n > ma) throw e;
          }
          await Ki(n);
        }
      }),
      (va = class {
        read(e, t) {
          for (let n of this.chunks) {
            if (e < n.start) break;
            if (e > n.end) continue;
            if (e + t > n.end) break;
            let r = e - n.start,
              i = r + t;
            return n.data.slice(r, i);
          }
          throw Error(`Missing data`);
        }
        write(e, t) {
          let n = e,
            r = n + t.length,
            i = 0,
            a = this.chunks.length;
          for (; i < a; i++) {
            let e = this.chunks[i];
            if ((Q(e, `Missing chunk`), !(n > e.end))) {
              if (n > e.start) {
                let r = n - e.start;
                ((t = Ji(e.data.subarray(0, r), t)), (n = e.start));
              }
              break;
            }
          }
          for (; a > i; a--) {
            let e = this.chunks[a - 1];
            if ((Q(e, `Missing chunk`), !(r < e.start))) {
              if (r < e.end) {
                let n = r - e.start,
                  i = e.data.subarray(n);
                ((t = Ji(t, i)), (r = e.end));
              }
              break;
            }
          }
          let o = { start: n, end: r, data: t },
            s = a - i;
          this.chunks.splice(i, s, o);
        }
        constructor() {
          $(this, `chunks`, []);
        }
      }),
      (ya = class e {
        static read(t) {
          let n = new e(),
            r = t.readUint16();
          for (let e = 0; e < r; e++) {
            let e = t.readString(),
              r = Xi.read(t);
            n.setField(e, r);
          }
          return n;
        }
        write(e) {
          for (let [t, n] of (e.writeUint16(this.fields.size), this.fields))
            (e.writeString(t), Xi.write(e, n));
        }
        getData() {
          let e = {};
          for (let [t, n] of this.fields) e[t] = n;
          return e;
        }
        setField(e, t) {
          this.fields.set(e, t);
        }
        getField(e) {
          return this.fields.get(e);
        }
        constructor() {
          $(this, `fields`, new Map());
        }
      }),
      (ba = class {
        scanItems() {
          return (
            (this.itemsPromise ??= _a(this.url).then(async (e) => {
              if (!e.ok) throw Error(`Request failed: ${e.status} ${e.statusText}`);
              let t = await e.arrayBuffer(),
                n = new la(new Uint8Array(t)),
                r = [],
                i = n.readUint32();
              for (let e = 0; e < i; e++) {
                let e = n.getOffset(),
                  t = ya.read(n),
                  i = n.getOffset() - e,
                  a = new pa(this.id, e, i).toString(),
                  o = { pointer: a, data: t.getData() };
                (this.itemLoader.prime(a, o), r.push(o));
              }
              return r;
            })),
            this.itemsPromise
          );
        }
        resolveItem(e) {
          return this.itemLoader.load(e);
        }
        constructor(e, t) {
          ($(this, `id`, e),
            $(this, `url`, t),
            $(this, `itemsPromise`),
            $(
              this,
              `itemLoader`,
              new sa.default(
                async (e) => {
                  let t = e.map((e) => {
                    let t = pa.fromString(e);
                    return { from: t.offset, to: t.offset + t.length };
                  });
                  return (await qi(this.url, t)).map((t, n) => {
                    let r = new la(t),
                      i = ya.read(r),
                      a = e[n];
                    return (Q(a, `Missing pointer`), { pointer: a, data: i.getData() });
                  });
                },
                { maxBatchSize: 250 }
              )
            ));
        }
      }),
      (xa = class {
        async scanItems() {
          return (await Promise.all(this.chunks.map(async (e) => e.scanItems()))).flat();
        }
        resolveItems(e) {
          return Promise.all(
            e.map((e) => {
              let t = pa.fromString(e),
                n = this.chunks[t.chunkId];
              return (Q(n, `Missing chunk`), n.resolveItem(e));
            })
          );
        }
        compareItems(e, t) {
          let n = pa.fromString(e.pointer),
            r = pa.fromString(t.pointer);
          return n.compare(r);
        }
        compareValues(e, t, n) {
          return Xi.compare(e, t, n);
        }
        constructor(e) {
          ($(this, `options`, e),
            $(this, `id`),
            $(this, `schema`),
            $(this, `indexes`),
            $(this, `resolveRichText`),
            $(this, `resolveVectorSetItem`),
            $(this, `chunks`),
            (this.chunks = this.options.chunks.map((e, t) => new ba(t, e))),
            (this.schema = e.schema),
            (this.indexes = e.indexes),
            (this.resolveRichText = e.resolveRichText),
            (this.resolveVectorSetItem = e.resolveVectorSetItem),
            (this.id = e.id));
        }
      }));
  });
function Ca(e) {
  return typeof e == `object` && !!e && !m(e) && Da in e;
}
function wa(e, ...t) {
  if (!e) throw Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
}
function Ta(e) {
  let t = new Map();
  return (n) => {
    let r = t.get(n);
    if (r) return r;
    let i = (function t(n) {
      switch (n[0]) {
        case 1: {
          let [, ...e] = n;
          return p(o, void 0, ...e.map(t));
        }
        case 2: {
          let [, e, ...r] = n;
          return p(be, e, ...r.map(t));
        }
        case 3: {
          let [, r, i, a, o] = n;
          for (let e of a) {
            let n = i[e];
            n && (i[e] = t(n));
          }
          for (let t of o) {
            let n = i[t];
            if (typeof n != `string`) continue;
            let r = e[n];
            r && (Ca(r) && r.preload(), (i[t] = r));
          }
          let s = e[r];
          return (
            wa(s, `Module not found`),
            Ca(s) && s.preload(),
            y(ve, {
              componentIdentifier: r,
              children: (e) => y(ye, { component: s, props: { ...e, ...i } }),
            })
          );
        }
        case 4: {
          let [, e, r, ...i] = n,
            a = i.map(t);
          return p(e === `a` ? C.a : e, r, ...a);
        }
        case 5: {
          let [, e] = n;
          return e;
        }
      }
    })(JSON.parse(n));
    return (t.set(n, i), i);
  };
}
var Ea,
  Da,
  Oa,
  ka = e(() => {
    (t(),
      f(),
      V(),
      r(),
      a !== void 0 && a.requestIdleCallback,
      (Da = `preload`),
      (Oa =
        (((Ea = Oa || {})[(Ea.Fragment = 1)] = `Fragment`),
        (Ea[(Ea.Link = 2)] = `Link`),
        (Ea[(Ea.Module = 3)] = `Module`),
        (Ea[(Ea.Tag = 4)] = `Tag`),
        (Ea[(Ea.Text = 5)] = `Text`),
        Ea)));
  }),
  Aa,
  ja,
  Ma,
  Na,
  Pa,
  Fa = e(() => {
    (V(),
      Sa(),
      ka(),
      (Aa = {
        createdAt: { isNullable: !0, type: q.Date },
        id: { isNullable: !1, type: q.String },
        K7kltBInH: { isNullable: !0, type: q.RichText },
        LNdEco9oD: { isNullable: !0, type: q.String },
        nextItemId: { isNullable: !0, type: q.String },
        previousItemId: { isNullable: !0, type: q.String },
        updatedAt: { isNullable: !0, type: q.Date },
      }),
      (ja = []),
      (Ma = (e) => {
        let t = ja[e];
        if (t) return t().then((e) => e.default);
      }),
      (Na = Ta({})),
      new Se(),
      (Pa = {
        collectionByLocaleId: {
          default: new xa({
            chunks: [
              new URL(
                `./JOu7nv6Bs-chunk-default-0.framercms`,
                `https://framerusercontent.com/modules/uYNpUpfVgQ2X2aFuQPm7/sxBLwtkORJlFDrpvzLdg/JOu7nv6Bs.js`
              ).href.replace(`/modules/`, `/cms/`),
            ],
            id: `3d9916cc-7ea5-4c31-bb64-92ebdf8f97cadefault`,
            indexes: [],
            resolveRichText: Na,
            resolveVectorSetItem: Ma,
            schema: Aa,
          }),
        },
        displayName: `Size Guide`,
        id: `3d9916cc-7ea5-4c31-bb64-92ebdf8f97ca`,
      }),
      L(Pa, {
        LNdEco9oD: { preventLocalization: !1, title: `Slug`, type: q.String },
        K7kltBInH: { defaultValue: ``, title: `Content`, type: q.RichText },
        createdAt: { title: `Created`, type: q.Date },
        updatedAt: { title: `Updated`, type: q.Date },
        previousItemId: {
          dataIdentifier: `local-module:collection/JOu7nv6Bs:default`,
          title: `Previous`,
          type: q.CollectionReference,
        },
        nextItemId: {
          dataIdentifier: `local-module:collection/JOu7nv6Bs:default`,
          title: `Next`,
          type: q.CollectionReference,
        },
      }));
  }),
  Ia,
  La,
  Ra,
  za,
  Ba = e(() => {
    (V(),
      ne.loadFonts([
        `FS;General Sans-variable`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
      ]),
      (Ia = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (La = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: Ia,
              weight: `400`,
            },
          ],
        },
      ]),
      (Ra = [
        `.framer-uVODT .framer-styles-preset-xbs9hk:not(.rich-text-wrapper), .framer-uVODT .framer-styles-preset-xbs9hk.rich-text-wrapper h4 { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 450; --framer-font-variation-axes-bold: "wght" 450; --framer-font-variation-axes-bold-italic: "wght" 450; --framer-font-variation-axes-italic: "wght" 450; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.4em; --framer-paragraph-spacing: 30px; --framer-text-alignment: start; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #080a10); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
      ]),
      (za = `framer-uVODT`));
  }),
  Va,
  Ha,
  Ua,
  Wa,
  Ga,
  Ka,
  qa,
  Ja,
  Ya,
  Xa,
  Za,
  Qa = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Fa(),
      $t(),
      Ke(),
      en(),
      Ba(),
      it(),
      Ze(),
      (Va = U(nt)),
      (Ha = `framer-cPBcM`),
      (Ua = { i3EVv0Qmr: `framer-v-66pyf3` }),
      (Wa = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Ga = () => ({
        from: { alias: `OB3iaS_NI`, data: Pa, type: `Collection` },
        limit: { type: `LiteralValue`, value: 10 },
        select: [
          { collection: `OB3iaS_NI`, name: `K7kltBInH`, type: `Identifier` },
          { collection: `OB3iaS_NI`, name: `LNdEco9oD`, type: `Identifier` },
          { collection: `OB3iaS_NI`, name: `id`, type: `Identifier` },
        ],
      })),
      (Ka = ({ query: e, pageSize: t, children: n }) => n(me(e))),
      (qa = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Ja = C.create(o)),
      (Ya = ({ clickOnX: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        ApsWRZchW: e ?? i.ApsWRZchW,
      })),
      (Xa = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Za = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se(),
            l = pe(),
            { style: d, className: f, layoutId: p, variant: m, ApsWRZchW: h, ..._ } = Ya(e),
            {
              baseVariant: v,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: ee,
              gestureVariant: T,
              isLoading: E,
              setGestureState: O,
              setVariant: k,
              variants: A,
            } = B({ defaultVariant: `i3EVv0Qmr`, ref: r, variant: m, variantClassNames: Ua }),
            j = Xa(e, A),
            { activeVariantCallback: M, delay: N } = ge(v),
            P = M(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            te = M(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            ne = F(Ha, Ye, za, st, on, Qt);
          return y(w, {
            id: p ?? a,
            children: y(Ja, {
              animate: A,
              initial: !1,
              children: y(qa, {
                value: Wa,
                children: b(C.div, {
                  ..._,
                  ...ee,
                  className: F(ne, `framer-66pyf3`, f, x),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: j,
                  layoutId: `i3EVv0Qmr`,
                  ref: r,
                  style: { ...d },
                  children: [
                    y(C.div, {
                      className: `framer-14ym0j2`,
                      "data-framer-name": `Close Overlay`,
                      "data-highlight": !0,
                      layoutDependency: j,
                      layoutId: `qcERPxcS8`,
                      onTap: P,
                    }),
                    b(C.div, {
                      className: `framer-1m9k7x2`,
                      "data-framer-name": `Sidebar`,
                      layoutDependency: j,
                      layoutId: `R1T9gBgXe`,
                      style: {
                        backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                      },
                      children: [
                        b(C.div, {
                          className: `framer-1olhfgu`,
                          "data-border": !0,
                          "data-framer-name": `Header`,
                          layoutDependency: j,
                          layoutId: `AgejnoQ7M`,
                          style: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `var(--token-e568eaca-76fb-4a8a-85c4-ef6c471fbdfe, rgba(33, 26, 26, 0.06))`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                            backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                          },
                          children: [
                            y(C.div, {
                              className: `framer-16jp5d3`,
                              "data-framer-name": `Header Text`,
                              layoutDependency: j,
                              layoutId: `UmHh0TiQs`,
                              children: y(R, {
                                __fromCanvasComponent: !0,
                                children: y(o, {
                                  children: y(C.p, {
                                    className: `framer-styles-preset-8kmloq`,
                                    "data-styles-preset": `MYFsM6f0k`,
                                    dir: `auto`,
                                    children: `Size Guide Chart`,
                                  }),
                                }),
                                className: `framer-88e9e4`,
                                fonts: [`Inter`],
                                layoutDependency: j,
                                layoutId: `DeWhEiJTr`,
                                style: {
                                  "--framer-link-text-color": `rgb(0, 153, 255)`,
                                  "--framer-link-text-decoration": `underline`,
                                },
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            y(G, {
                              height: 32,
                              width: `32px`,
                              y:
                                (l?.y || 0) +
                                0 +
                                (((l?.height || 800) -
                                  0 -
                                  (Math.max(0, ((l?.height || 800) - 0 - 0) / 1) * 1 + 0)) /
                                  2 +
                                  0 +
                                  0) +
                                0 +
                                0 +
                                16,
                              children: y(D, {
                                className: `framer-e4jy1c-container`,
                                "data-framer-name": `Cart Close Button`,
                                layoutDependency: j,
                                layoutId: `RUXf_mskY-container`,
                                name: `Cart Close Button`,
                                nodeId: `RUXf_mskY`,
                                rendersWithMotion: !0,
                                scopeId: `nOAlXXI6b`,
                                children: y(nt, {
                                  height: `100%`,
                                  id: `RUXf_mskY`,
                                  layoutId: `RUXf_mskY`,
                                  name: `Cart Close Button`,
                                  sJ3RhKUYy: te,
                                  style: { height: `100%`, width: `100%` },
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                        }),
                        y(C.div, {
                          className: `framer-s7u56c`,
                          "data-framer-name": `Content`,
                          layoutDependency: j,
                          layoutId: `E38tquCjz`,
                          children: y(C.div, {
                            className: `framer-6lpo3i`,
                            layoutDependency: j,
                            layoutId: `OB3iaS_NI`,
                            children: y(he, {
                              children: y(Ka, {
                                query: Ga(),
                                children: (e, t, n) =>
                                  y(g, {
                                    children: e?.map(
                                      ({ id: e, K7kltBInH: t, LNdEco9oD: n }, r) => (
                                        (t ??= ``),
                                        (n ??= ``),
                                        y(
                                          w,
                                          {
                                            id: `OB3iaS_NI-${e}`,
                                            children: y(ae.Provider, {
                                              value: { LNdEco9oD: n },
                                              children: y(C.div, {
                                                className: `framer-o24oe0`,
                                                layoutDependency: j,
                                                layoutId: `zJ5RBWr9B`,
                                                children: y(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: t,
                                                  className: `framer-1cdin2k`,
                                                  "data-framer-name": `Content`,
                                                  fonts: [`Inter`],
                                                  layoutDependency: j,
                                                  layoutId: `pRuCTZBe4`,
                                                  style: { "--framer-paragraph-spacing": `10px` },
                                                  stylesPresetsClassNames: {
                                                    a: `framer-styles-preset-13a33eg`,
                                                    h4: `framer-styles-preset-xbs9hk`,
                                                    p: `framer-styles-preset-arb5du`,
                                                    table: `framer-styles-preset-y6r4i3`,
                                                  },
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
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
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-cPBcM.framer-1wz9kb, .framer-cPBcM .framer-1wz9kb { display: block; }`,
          `.framer-cPBcM.framer-66pyf3 { align-content: flex-end; align-items: flex-end; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 800px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
          `.framer-cPBcM .framer-14ym0j2 { bottom: 0px; cursor: pointer; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-cPBcM .framer-1m9k7x2 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 1px; justify-content: flex-start; max-width: 470px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }`,
          `.framer-cPBcM .framer-1olhfgu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 16px; position: sticky; top: 0px; width: 100%; z-index: 1; }`,
          `.framer-cPBcM .framer-16jp5d3 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
          `.framer-cPBcM .framer-88e9e4 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-cPBcM .framer-e4jy1c-container { flex: none; height: 32px; position: relative; width: 32px; }`,
          `.framer-cPBcM .framer-s7u56c { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: 1px; justify-content: flex-start; overflow: auto; padding: 24px 20px 50px 20px; position: relative; width: 100%; }`,
          `.framer-cPBcM .framer-6lpo3i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
          `.framer-cPBcM .framer-o24oe0 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
          `.framer-cPBcM .framer-1cdin2k { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          ...qe,
          ...Ra,
          ...at,
          ...tn,
          ...nn,
          `.framer-cPBcM[data-border="true"]::after, .framer-cPBcM [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-cPBcM`
      )),
      (Za.displayName = `Size Guide Popup`),
      (Za.defaultProps = { height: 800, width: 1200 }),
      L(Za, { ApsWRZchW: { title: `Click on X`, type: q.EventHandler } }),
      I(
        Za,
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
          ...Va,
          ...P(Je),
          ...P(La),
          ...P(ot),
          ...P(rn),
          ...P(an),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Za.loader = {
        load: (e, t) => {
          let n = t.locale,
            r = le.get(Ga(), n);
          return Promise.allSettled([r.preload(), H(nt, {}, t)]);
        },
      }));
  });
function $a(e) {
  if (oe.current() === oe.canvas)
    return e.showAboveThreshold
      ? y(`div`, { style: { opacity: 1 }, children: e.aboveThresholdComponent })
      : e.showBelowThreshold
        ? y(`div`, { style: { opacity: 1 }, children: e.belowThresholdComponent })
        : e.showOutOfStock
          ? y(`div`, { style: { opacity: 1 }, children: e.outOfStockComponent })
          : y(`div`, { style: { opacity: 1 } });
  let {
      threshold: t,
      aboveThresholdComponent: r,
      belowThresholdComponent: i,
      outOfStockComponent: o,
      showTotalInventory: s,
      showOutOfStock: c,
      showAboveThreshold: l,
      showBelowThreshold: d,
    } = e,
    [f, p] = S(null),
    [m, h] = S(!1),
    [g, _] = S(null),
    [v, b] = S(!1),
    C = u(null),
    [w, ee] = S(!1),
    T = u(null);
  (x(() => {
    let t = (t) => {
      let n = t.detail?.productId,
        r = `gid://shopify/Product/${e.shopifyProductID}`;
      if (
        !(n && n !== r) &&
        !t.detail?.isPurchaseAction &&
        !(t.detail?.isCompleteVariant && t.detail?.allOptionsSelected) &&
        !(C.current && !t.detail?.isCompleteVariant) &&
        t.detail?.optionName &&
        t.detail?.value
      ) {
        let n = { [t.detail.optionName]: t.detail.value },
          r = a.shopXtools?.products.find(
            ({ node: t }) => t.id === `gid://shopify/Product/${e.shopifyProductID}`
          );
        if (r) {
          let e = r.node?.variants?.edges.filter(({ node: e }) =>
            e?.selectedOptions?.every((e) => {
              let t = n[e.name];
              return !t || t === e.value;
            })
          );
          if (e.length > 0) {
            let t = e
              .map(({ node: e }) => e.quantityAvailable || 0)
              .filter((e) => e > 0)
              .reduce((e, t) => e + t, 0);
            (console.log(`Total Quantity:`, t), (T.current = t), p(t), h(!0));
            return;
          }
        }
      }
    };
    return (
      document.addEventListener(`variant_option_selected`, t),
      () => {
        document.removeEventListener(`variant_option_selected`, t);
      }
    );
  }, [e.shopifyProductID]),
    x(() => {
      let t = (t) => {
        let n = t.detail,
          r = `gid://shopify/Product/${e.shopifyProductID}`;
        !n?.productId ||
          n.productId !== r ||
          t.detail.onClickAction === `purchase` ||
          ((C.current = n.id), (T.current = n.quantityAvailable), p(n.quantityAvailable), h(!0));
      };
      return (
        document.addEventListener(`product__active-variant__changed`, t),
        () => {
          document.removeEventListener(`product__active-variant__changed`, t);
        }
      );
    }, [e.shopifyProductID]),
    x(() => {
      let e = (e) => {
        if (!e.detail) return;
        let t = T.current;
        t != null && (p(t), h(!0));
      };
      return (
        a.addEventListener(`currency_changed`, e),
        () => {
          a.removeEventListener(`currency_changed`, e);
        }
      );
    }, [e.shopifyProductID]),
    x(() => {
      let t = (e) => {
          let t = e.variants.edges.map((e) => e.node) || [],
            n = t.length > 1,
            r = t.some((e) => e.availableForSale && e.quantityAvailable <= 0),
            i = e.variants.edges.reduce((e, { node: t }) => e + (t.quantityAvailable || 0), 0);
          (_(i), p(i), (T.current = i), h(!n), b(r || (e.availableForSale && i === 0)));
        },
        n = (n) => {
          if (!C.current && !T.current && Array.isArray(n.detail.products)) {
            let r = n.detail.products.find(
              ({ node: t }) => t.id === `gid://shopify/Product/${e.shopifyProductID}`
            );
            if (r) {
              let e = C.current;
              if (e) {
                let t = r.node.variants.edges.find(({ node: t }) => t.id === e)?.node;
                if (t) {
                  (p(t.quantityAvailable), h(!0));
                  return;
                }
              }
              if (w) {
                let e = r.node.variants.edges[0]?.node;
                if (e) {
                  ((C.current = e.id), p(e.quantityAvailable), h(!0));
                  return;
                }
              }
              t(r.node);
            }
          }
        };
      if (a?.shopXtools?.products && Array.isArray(a.shopXtools.products)) {
        let n = a.shopXtools.products.find(
          ({ node: t }) => t.id === `gid://shopify/Product/${e.shopifyProductID}`
        );
        if (n) {
          let e = C.current;
          if (e) {
            let t = n.node.variants.edges.find(({ node: t }) => t.id === e)?.node;
            if (t) {
              (p(t.quantityAvailable), (T.current = t.quantityAvailable), h(!0));
              return;
            }
          }
          if (w) {
            let e = n.node.variants.edges.find((e) => e.node.availableForSale)?.node;
            if (e) {
              ((C.current = e.id),
                p(e.quantityAvailable),
                (T.current = e.quantityAvailable),
                h(!0));
              return;
            }
          }
          !w && !e && t(n.node);
        }
      }
      let r = (t) => {
        t.detail.shopifyProductID === `gid://shopify/Product/${e.shopifyProductID}` &&
          ee(t.detail.autoSelectFirst);
      };
      return (
        document.addEventListener(`data__products-ready`, n),
        document.addEventListener(`auto_select_first_flag`, r),
        () => {
          (document.removeEventListener(`data__products-ready`, n),
            document.removeEventListener(`auto_select_first_flag`, r));
        }
      );
    }, [e.shopifyProductID, w]));
  let E = () => {
      let e = m && C.current ? f : g;
      return e <= 0 && !v ? (c ? o : null) : v || e >= t ? (l ? r : null) : d ? i : null;
    },
    D = !s && !m,
    O = {
      opacity: +!D,
      transition: `opacity 0.2s ease-in-out`,
      userSelect: D ? `none` : `auto`,
      visibility: D ? `hidden` : `visible`,
    },
    k = E(),
    A = Array.isArray(k) ? k[0] : k,
    j = et(A);
  return !j || !n.isValidElement(j)
    ? y(`div`, { style: O, "aria-hidden": D })
    : y(`div`, {
        style: O,
        "aria-hidden": D,
        children: n.cloneElement(j, { style: { ...(A.props?.style || {}) } }),
      });
}
var eo = e(() => {
  (t(),
    f(),
    r(),
    V(),
    Xe(),
    ($a.defaultProps = {
      shopifyProductID: ``,
      threshold: 10,
      showTotalInventory: !1,
      showOutOfStock: !1,
      showAboveThreshold: !0,
      showBelowThreshold: !0,
    }),
    L($a, {
      shopifyProductID: { type: q.String, title: `Product ID` },
      threshold: { type: q.Number, title: `Threshold`, defaultValue: 10, min: 0 },
      showAboveThreshold: {
        type: q.Boolean,
        title: `Above Threshold`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
      aboveThresholdComponent: {
        type: q.ComponentInstance,
        title: `↳ Instance`,
        required: !0,
        hidden: (e) => !e.showAboveThreshold,
      },
      showBelowThreshold: {
        type: q.Boolean,
        title: `Below Threshold`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
      belowThresholdComponent: {
        type: q.ComponentInstance,
        title: `↳ Instance`,
        required: !0,
        hidden: (e) => !e.showBelowThreshold,
      },
      showOutOfStock: {
        type: q.Boolean,
        title: `Out of Stock`,
        defaultValue: !1,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
      outOfStockComponent: {
        type: q.ComponentInstance,
        title: `↳ Instance`,
        required: !0,
        hidden: (e) => !e.showOutOfStock,
      },
      showTotalInventory: {
        type: q.Boolean,
        title: `No variant selected`,
        description: `When a product has variants and none are selected, show the total inventory available, or hide until a variant is selected`,
        defaultValue: !1,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
    }));
});
function to(e) {
  if (oe.current() === oe.canvas)
    return y(`div`, {
      style: {
        display: `inline-flex`,
        width: `auto`,
        boxSizing: `border-box`,
        alignItems: `center`,
        justifyContent: `center`,
        flexShrink: 0,
        flexGrow: 0,
      },
      children: y(`p`, {
        style: {
          ...e.font,
          color: e.textColor,
          margin: 0,
          padding: 0,
          lineHeight: 1,
          whiteSpace: `nowrap`,
        },
        children: e.textFormat.replace(`{{inventory}}`, `5`),
      }),
    });
  let { shopifyProductID: t, showOutOfStock: n, outOfStockText: r, noLimitText: i } = e,
    [o, s] = S(null),
    [c, l] = S(!1),
    d = u(null),
    [f, p] = S(!1),
    [m, g] = S({}),
    _ = u(null);
  (x(() => {
    let t = (t) => {
      let n = t.detail?.productId,
        r = `gid://shopify/Product/${e.shopifyProductID}`;
      if (
        !(n && n !== r) &&
        !t.detail?.isPurchaseAction &&
        !(t.detail?.isCompleteVariant && t.detail?.allOptionsSelected) &&
        !(d.current && !t.detail?.isCompleteVariant) &&
        t.detail?.optionName &&
        t.detail?.value
      ) {
        g({ [t.detail.optionName]: t.detail.value });
        let n = { [t.detail.optionName]: t.detail.value },
          r = a.shopXtools?.products.find(
            ({ node: t }) => t.id === `gid://shopify/Product/${e.shopifyProductID}`
          );
        if (r) {
          let e = r.node?.variants?.edges.filter(({ node: e }) =>
            e?.selectedOptions?.every((e) => {
              let t = n[e.name];
              return !t || t === e.value;
            })
          );
          if (e.length > 0) {
            let t = e
              .map(({ node: e }) => e.quantityAvailable || 0)
              .filter((e) => e > 0)
              .reduce((e, t) => e + t, 0);
            ((_.current = t), s(t), l(!0));
            return;
          }
        }
      }
    };
    return (
      document.addEventListener(`variant_option_selected`, t),
      () => {
        document.removeEventListener(`variant_option_selected`, t);
      }
    );
  }, [e.shopifyProductID]),
    x(() => {
      let e = (e) => {
        if (!e.detail) return;
        let t = _.current;
        t != null && (s(t), l(!0));
      };
      return (
        a.addEventListener(`currency_changed`, e),
        () => {
          a.removeEventListener(`currency_changed`, e);
        }
      );
    }, [e.shopifyProductID]),
    x(() => {
      let e = (e) => {
        let n = e.detail,
          r = `gid://shopify/Product/${t}`;
        if (!n?.productId || n.productId !== r || e.detail.onClickAction === `purchase`) return;
        let i = n?.quantityAvailable;
        ((d.current = n.id), (_.current = n.quantityAvailable), l(!0), s(i), g({}));
      };
      return (
        document.addEventListener(`product__active-variant__changed`, e),
        () => {
          document.removeEventListener(`product__active-variant__changed`, e);
        }
      );
    }, [e.shopifyProductID]),
    x(() => {
      let e = (e) => {
        if (!d.current && !_.current && Array.isArray(e.detail.products)) {
          let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
          if (n) {
            let e = d.current;
            if (e) {
              let t = n.node.variants.edges.find(({ node: t }) => t.id === e)?.node;
              if (t) {
                (s(t.quantityAvailable), l(!0));
                return;
              }
            }
            if (f) {
              let e = n.node.variants.edges[0]?.node;
              if (e) {
                ((d.current = e.id), s(e.quantityAvailable), l(!0));
                return;
              }
            }
            if (!f && !d.current) {
              let e = n.node;
              if (e?.variants?.edges) {
                let t = e.variants.edges.map((e) => e.node),
                  n = t.length > 1,
                  r = t.reduce((e, t) => e + (t.quantityAvailable || 0), 0);
                (s(r), l(!n));
              }
            }
          }
        }
      };
      if (a?.shopXtools?.products && Array.isArray(a.shopXtools.products)) {
        let e = a.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        if (e?.node) {
          let t = e.node,
            n = d.current;
          if (n) {
            let e = t.variants.edges.find(({ node: e }) => e.id === n)?.node;
            if (e) {
              (s(e.quantityAvailable), (_.current = e.quantityAvailable), l(!0));
              return;
            }
          }
          if (f) {
            let t = e.node.variants.edges.find((e) => e.node.availableForSale)?.node;
            if (t) {
              ((d.current = t.id),
                s(t.quantityAvailable),
                (_.current = t.quantityAvailable),
                l(!0));
              return;
            }
          }
          if (!f && !n && t?.variants?.edges) {
            let e = t.variants.edges.map((e) => e.node),
              n = e.length > 1,
              r = e.reduce((e, t) => e + (t.quantityAvailable || 0), 0);
            (s(r), (_.current = r), l(!n));
          }
        }
      }
      let n = (e) => {
        e.detail.shopifyProductID === `gid://shopify/Product/${t}` && p(e.detail.autoSelectFirst);
      };
      return (
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`auto_select_first_flag`, n),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`auto_select_first_flag`, n));
        }
      );
    }, [t, f]));
  let v = h(
    (e, o) => {
      if (o == null) return null;
      let s = a?.shopXtools?.products
        ?.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`)
        ?.node?.variants?.edges?.some(
          ({ node: e }) => e.availableForSale && e.quantityAvailable <= 0
        );
      return o <= 0
        ? s
          ? i
          : n
            ? r
            : null
        : e?.replace(`{{inventory}}`, o) || `${o} left in stock`;
    },
    [n, r, i, t]
  );
  return o === null && !n
    ? null
    : y(`div`, {
        style: {
          display: `inline-flex`,
          width: `auto`,
          boxSizing: `border-box`,
          alignItems: `center`,
          justifyContent: `center`,
          flexShrink: 0,
          flexGrow: 0,
        },
        children: y(`p`, {
          style: {
            ...e.font,
            color: e.textColor,
            margin: 0,
            padding: 0,
            lineHeight: 1,
            whiteSpace: `nowrap`,
          },
          children: v(e.textFormat, o),
        }),
      });
}
var no = e(() => {
    (t(),
      f(),
      V(),
      r(),
      (to.defaultProps = {
        shopifyProductID: ``,
        font: void 0,
        textColor: `#000`,
        textFormat: `{{inventory}} left in stock`,
        showOutOfStock: !0,
        outOfStockText: `Out of stock`,
        noLimitText: `In Stock`,
      }),
      L(to, {
        shopifyProductID: { type: q.String, title: `Product ID`, description: `Connect to CMS` },
        font: { type: q.Font, title: `Font`, controls: `extended` },
        textColor: { type: q.Color, title: `Color`, defaultValue: `#000` },
        textFormat: {
          type: q.String,
          title: `Text Format`,
          defaultValue: `{{inventory}} left in stock`,
          description: `Use {{inventory}} to display the stock count`,
        },
        showOutOfStock: {
          type: q.Boolean,
          title: `Out of Stock`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        outOfStockText: {
          type: q.String,
          title: `Out of Stock Text`,
          defaultValue: `Out of Stock`,
          hidden: (e) => !e.showOutOfStock,
        },
        noLimitText: {
          type: q.String,
          title: `No Limit Text`,
          defaultValue: `In Stock`,
          description: `If you have "Continue Selling When Out Of Stock" selected on Shopify, and the inventory reaches 0.`,
        },
      }));
  }),
  ro,
  io,
  ao,
  oo,
  so,
  co,
  lo,
  uo,
  fo,
  po,
  mo = e(() => {
    (f(),
      V(),
      E(),
      r(),
      eo(),
      no(),
      (ro = U(to)),
      (io = U($a)),
      (ao = `framer-dxgQX`),
      (oo = { ZnFMFm8gO: `framer-v-g2sup7` }),
      (so = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (co = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (lo = C.create(o)),
      (uo = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        C4U1l_gbD: n ?? i.C4U1l_gbD ?? `9914856309030`,
      })),
      (fo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (po = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let { style: c, className: l, layoutId: d, variant: f, C4U1l_gbD: p, ...m } = uo(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = B({ defaultVariant: `ZnFMFm8gO`, ref: r, variant: f, variantClassNames: oo }),
            O = fo(e, E),
            k = F(ao);
          return y(w, {
            id: d ?? a,
            children: y(lo, {
              animate: E,
              initial: !1,
              children: y(co, {
                value: so,
                children: y(C.div, {
                  ...m,
                  ...v,
                  className: F(k, `framer-g2sup7`, l, g),
                  "data-framer-name": `Component`,
                  layoutDependency: O,
                  layoutId: `ZnFMFm8gO`,
                  ref: r,
                  style: { ...c },
                  children: y(G, {
                    children: y(D, {
                      className: `framer-41oprq-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: O,
                      layoutId: `PcrgXJz72-container`,
                      nodeId: `PcrgXJz72`,
                      rendersWithMotion: !0,
                      scopeId: `PQpZsVSFx`,
                      children: y($a, {
                        aboveThresholdComponent: [
                          b(C.div, {
                            className: `framer-o7kcze`,
                            "data-framer-name": `Over`,
                            layoutDependency: O,
                            layoutId: `OfH638plv`,
                            children: [
                              y(C.div, {
                                className: `framer-1mbco86`,
                                "data-framer-name": `In Stock`,
                                layoutDependency: O,
                                layoutId: `JKt5rAu1c`,
                                style: {
                                  backgroundColor: `var(--token-1edb8df3-3c73-4290-97a5-3ae0c501b735)`,
                                  borderBottomLeftRadius: 80,
                                  borderBottomRightRadius: 80,
                                  borderTopLeftRadius: 80,
                                  borderTopRightRadius: 80,
                                },
                              }),
                              y(G, {
                                children: y(D, {
                                  className: `framer-1d7uj6o-container`,
                                  inComponentSlot: !0,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: O,
                                  layoutId: `iUpt63Sfn-container`,
                                  nodeId: `iUpt63Sfn`,
                                  rendersWithMotion: !0,
                                  scopeId: `PQpZsVSFx`,
                                  children: y(to, {
                                    font: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `-0.04em`,
                                      lineHeight: `1em`,
                                    },
                                    height: `100%`,
                                    id: `iUpt63Sfn`,
                                    layoutId: `iUpt63Sfn`,
                                    noLimitText: `In Stock`,
                                    outOfStockText: `Out of Stock`,
                                    shopifyProductID: p,
                                    showOutOfStock: !0,
                                    textColor: `rgb(0, 0, 0)`,
                                    textFormat: `{{inventory}} in stock`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                        belowThresholdComponent: [
                          b(C.div, {
                            className: `framer-jqmprh`,
                            "data-framer-name": `Under`,
                            layoutDependency: O,
                            layoutId: `PWnD9hHyY`,
                            children: [
                              y(C.div, {
                                className: `framer-15se7y2`,
                                "data-framer-name": `Out of Stock`,
                                layoutDependency: O,
                                layoutId: `iI8_mfW9c`,
                                style: {
                                  backgroundColor: `var(--token-9089a53a-9afe-4ac8-ae09-58a1d8e7606c)`,
                                  borderBottomLeftRadius: 80,
                                  borderBottomRightRadius: 80,
                                  borderTopLeftRadius: 80,
                                  borderTopRightRadius: 80,
                                },
                              }),
                              y(G, {
                                children: y(D, {
                                  className: `framer-amhy1q-container`,
                                  inComponentSlot: !0,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  layoutDependency: O,
                                  layoutId: `SWiicrGRJ-container`,
                                  nodeId: `SWiicrGRJ`,
                                  rendersWithMotion: !0,
                                  scopeId: `PQpZsVSFx`,
                                  children: y(to, {
                                    font: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `16px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `-0.04em`,
                                      lineHeight: `1em`,
                                    },
                                    height: `100%`,
                                    id: `SWiicrGRJ`,
                                    layoutId: `SWiicrGRJ`,
                                    noLimitText: `In Stock`,
                                    outOfStockText: `Out of Stock`,
                                    shopifyProductID: p,
                                    showOutOfStock: !0,
                                    textColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    textFormat: `Hurry! Only {{inventory}} left in stock`,
                                    width: `100%`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                        height: `100%`,
                        id: `PcrgXJz72`,
                        layoutId: `PcrgXJz72`,
                        outOfStockComponent: [],
                        shopifyProductID: p,
                        showAboveThreshold: !0,
                        showBelowThreshold: !0,
                        showOutOfStock: !1,
                        showTotalInventory: !1,
                        threshold: 5,
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
          `.framer-dxgQX.framer-13t4yxh, .framer-dxgQX .framer-13t4yxh { display: block; }`,
          `.framer-dxgQX.framer-g2sup7 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-dxgQX .framer-41oprq-container, .framer-dxgQX .framer-1d7uj6o-container, .framer-dxgQX .framer-amhy1q-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-dxgQX .framer-o7kcze { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 4px; position: relative; width: min-content; }`,
          `.framer-dxgQX .framer-1mbco86, .framer-dxgQX .framer-15se7y2 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 4px); overflow: visible; position: relative; width: 4px; }`,
          `.framer-dxgQX .framer-jqmprh { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 4px; position: relative; width: min-content; }`,
        ],
        `framer-dxgQX`
      )),
      (po.displayName = `Stock Status`),
      (po.defaultProps = { height: 25, width: 83.5 }),
      L(po, {
        C4U1l_gbD: { defaultValue: `9914856309030`, title: `Product ID`, type: q.String },
        onC4U1l_gbDChange: { changes: `C4U1l_gbD`, type: q.ChangeHandler },
      }),
      I(
        po,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
            ],
          },
          ...ro,
          ...io,
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function ho(e) {
  let { font: t, textColor: n = `#000000` } = e,
    { shopifyProductID: r } = e,
    [i, o] = S(1),
    [s, c] = S(0),
    [l, u] = S(null),
    d = a !== void 0,
    [f, p] = S(null);
  (x(() => {
    (o(1), c(0), u(null));
  }, [r]),
    x(() => {
      f && o(1);
    }, [f]),
    x(() => {
      if (!d) return;
      let e = (e) => {
        if (e.detail) {
          if (e.detail.productId !== `gid://shopify/Product/${r}`) return;
          p(e.detail);
          let t;
          (e.detail.quantityAvailable >= 0
            ? (t = e.detail.quantityAvailable)
            : e.detail.quantityAvailable < 0 && (t = 100),
            c(t),
            o(1),
            m(1));
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
    }, [d, r, i]),
    x(() => {
      if (!d) return;
      let t = (t) => {
          if (t.detail?.productId && t.detail.productId !== r) return;
          let n = t.detail?.maxInventory,
            u = Math.min(l === null ? 1 / 0 : l, n === void 0 ? s : n);
          if ((c(u), i < u)) {
            let t = Math.min(i + 1, u);
            (o(t),
              m(t),
              t >= u &&
                a.dispatchEvent(
                  new CustomEvent(`quantityMaxReached`, {
                    detail: { productId: e.shopifyProductID, maxQuantity: u },
                  })
                ));
          } else
            a.dispatchEvent(
              new CustomEvent(`quantityMaxReached`, {
                detail: { productId: e.shopifyProductID, maxQuantity: u },
              })
            );
        },
        n = () => {
          let e = Math.max(i - 1, 1);
          (o(e), m(e));
        };
      return (
        a.addEventListener(`FcQuantityIncrement`, t),
        a.addEventListener(`FcQuantityDecrement`, n),
        () => {
          (a.removeEventListener(`FcQuantityIncrement`, t),
            a.removeEventListener(`FcQuantityDecrement`, n));
        }
      );
    }, [i, s, l, d, e.shopifyProductID]),
    x(() => {
      l !== null && i >= l && (o(l), m(l));
    }, [l, i]),
    x(() => {
      d &&
        a.dispatchEvent(
          new CustomEvent(`FcQuantityStateUpdate`, {
            detail: { currentQuantity: i, maxInventory: s, activeVariant: f },
          })
        );
    }, [i, s, d, f]),
    x(() => {
      let t = (t) => {
        let { productId: n, maxQuantity: r } = t.detail;
        n === e.shopifyProductID && u(r === 0 ? r : (r ?? null));
      };
      return (
        a.addEventListener(`setMaxQuantity`, t),
        () => a.removeEventListener(`setMaxQuantity`, t)
      );
    }, [e.shopifyProductID]),
    x(() => {
      let e = () => {
        (u(null), o(1), m(1));
      };
      return (
        a.addEventListener(`shopXtools-cart-update`, e),
        () => a.removeEventListener(`shopXtools-cart-update`, e)
      );
    }, []));
  let m = (e) => {
    d && a.dispatchEvent(new CustomEvent(`FcQuantitySelectorchanges`, { detail: e }));
  };
  return y(`div`, {
    style: {
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
      width: `100%`,
      height: `100%`,
    },
    children: y(`p`, { style: { margin: `0`, textAlign: `center`, color: n, ...t }, children: i }),
  });
}
var go = e(() => {
  (t(),
    f(),
    r(),
    V(),
    (ho.defaultProps = { textColor: `#000000` }),
    L(ho, {
      shopifyProductID: { type: q.String, title: `Product ID`, description: `Connect to CMS` },
      textColor: { type: q.Color, title: `Text Color` },
      font: { type: q.Font, title: `Font`, controls: `extended` },
    }));
});
function _o(e) {
  let { isPlus: t, activeContent: n, disabledContent: r, shopifyProductID: i } = e,
    o = t === `plus`,
    [s, c] = S(!0),
    [u, d] = S(0),
    [f, p] = S(1),
    [m, h] = S(null),
    [g, _] = S(!0),
    [v, b] = S(!1);
  x(() => {
    let e = (e) => {
      e.detail.shopifyProductID === `gid://shopify/Product/${i}` && b(e.detail.autoSelectFirst);
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
    if (a !== void 0 && a?.shopXtools?.products) {
      let r = Array.isArray(a.shopXtools?.products)
          ? a.shopXtools.products
          : Object.values(a.shopXtools?.products || {}),
        o = `gid://shopify/Product/${i}`,
        s = r.find((e) => e?.node?.id === o),
        c;
      s?.node?.variants?.edges?.length === 1
        ? ((c = s?.node?.variants?.edges[0]?.node), h(c))
        : ((c = e.detail.activeVariant), h(c));
      let l = c?.availableForSale ?? s?.node?.availableForSale ?? !0,
        u = n;
      if ((l && n <= 0 ? (u = 100) : l || (u = 0), l && s?.node?.handle))
        try {
          let e = await a.shopXtools?.handleCartMutation?.(Ue, { handle: s.node.handle }),
            n = e?.product?.metafield_order_max?.value,
            r = a.shopXtools?.cart,
            i = e.product;
          if (n > 0) {
            if (r && i) {
              let e =
                  a.shopXtools.products
                    .find(({ node: e }) => e.id === i.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                o =
                  n -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              ((u = Math.max(0, Math.min(o, u))), d(u), p(t || 1), _(o === 0 || o === 1 ? !1 : l));
              return;
            }
            u = Math.min(parseInt(n, 10), u);
          } else if (r) {
            let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === c.id);
            if (e) {
              let t = e.node.quantity,
                n = c?.quantityAvailable <= 0 && c?.availableForSale ? 100 : c?.quantityAvailable,
                r = Math.max(0, n - t);
              ((u = Math.max(0, Math.min(r, u))), d(u), _(r === 0 || r === 1 ? !1 : l));
            }
          }
        } catch {}
      (d(u), p(t || 1), _(l));
    }
  };
  (x(() => {
    let e = async () => {
      if (a !== void 0 && a?.shopXtools?.products) {
        let e = Array.isArray(a.shopXtools?.products)
            ? a.shopXtools.products
            : Object.values(a.shopXtools?.products || {}),
          t = `gid://shopify/Product/${i}`,
          n = e.find((e) => e?.node?.id === t);
        if (n?.node?.handle)
          try {
            let e = await a.shopXtools?.handleCartMutation?.(Ue, { handle: n.node.handle }),
              t = e?.product?.metafield_order_max?.value,
              r = a.shopXtools?.cart,
              i = e.product;
            if (t > 0 && r && i) {
              let e =
                  a.shopXtools.products
                    .find(({ node: e }) => e.id === i.id)
                    ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                n =
                  t -
                  (
                    r?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                  ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
              (d(Math.max(0, Math.min(n, 100))), _(!(n === 0 || n === 1)));
            } else if (!t && m && r) {
              let e = r?.lines?.edges?.find((e) => e?.node?.merchandise?.id === m.id);
              if (e) {
                let t = e.node.quantity,
                  n = m.quantityAvailable <= 0 && m.availableForSale ? 100 : m.quantityAvailable,
                  r = Math.max(0, n - t);
                (d(Math.max(0, Math.min(r, 100))), _(!(r === 0 || r === 1)));
              }
            }
          } catch (e) {
            console.error(`Error updating quantity button state:`, e);
          }
      }
    };
    return (
      a.addEventListener(`shopXtools-cart-update`, e),
      () => {
        a.removeEventListener(`shopXtools-cart-update`, e);
      }
    );
  }, [i, m]),
    x(() => {
      let e = async (e) => {
        if (e.detail.productId !== `gid://shopify/Product/${i}`) return;
        let t = e.detail;
        if ((h(t), a !== void 0 && a?.shopXtools?.products)) {
          let e = Array.isArray(a.shopXtools?.products)
              ? a.shopXtools.products
              : Object.values(a.shopXtools?.products || {}),
            n = `gid://shopify/Product/${i}`,
            r = e.find((e) => e?.node?.id === n),
            o = t?.quantityAvailable ?? r?.node?.variants?.edges?.[0]?.node?.quantityAvailable ?? 0,
            s = t?.availableForSale ?? r?.node?.availableForSale ?? !0,
            c = o;
          if ((s && o <= 0 ? (c = 100) : s || (c = 0), s && r?.node?.handle))
            try {
              let e = await a.shopXtools?.handleCartMutation?.(Ue, { handle: r.node.handle }),
                n = e?.product?.metafield_order_max?.value,
                i = a.shopXtools?.cart,
                o = e.product;
              if (n > 0) {
                if (i && o) {
                  let e =
                      a.shopXtools.products
                        .find(({ node: e }) => e.id === o.id)
                        ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                    t =
                      n -
                      (
                        i?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                      ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                  ((c = Math.max(0, Math.min(t, c))), d(c), _(t === 0 || t === 1 ? !1 : s));
                  return;
                }
                c = Math.min(parseInt(n, 10), c);
              } else if (i) {
                let e = i?.lines?.edges?.find((e) => e?.node?.merchandise?.id === t.id);
                if (e) {
                  let n = e.node.quantity,
                    r =
                      t?.quantityAvailable <= 0 && t?.availableForSale ? 100 : t?.quantityAvailable,
                    i = Math.max(0, r - n);
                  ((c = Math.max(0, Math.min(i, c))), d(c), _(i === 0 || i === 1 ? !1 : s));
                } else (d(c), _(s));
              }
            } catch {}
          (d(c), _(s));
        }
      };
      return (
        (async () => {
          if (a !== void 0 && a?.shopXtools?.products) {
            let e = Array.isArray(a.shopXtools?.products)
                ? a.shopXtools.products
                : Object.values(a.shopXtools?.products || {}),
              t = `gid://shopify/Product/${i}`,
              n = e.find((e) => e?.node?.id === t),
              r,
              o,
              s;
            v || n?.node?.variants?.edges?.length === 1
              ? ((r = n?.node?.variants?.edges[0]?.node),
                (o = r?.quantityAvailable ?? 0),
                (s = r?.availableForSale ?? !0),
                m || h(r))
              : n?.node?.variants?.edges?.length > 1 &&
                ((r = void 0),
                (o = (n?.node?.variants?.edges ?? []).reduce(
                  (e, { node: t }) => e + (t.quantityAvailable || 0),
                  0
                )),
                (s = n?.node?.availableForSale ?? !0),
                m || h(r));
            let c = o;
            if ((s && o <= 0 ? (c = 100) : s || (c = 0), s && n?.node?.handle))
              try {
                let e = await a.shopXtools?.handleCartMutation?.(Ue, { handle: n.node.handle }),
                  t = e?.product?.metafield_order_max?.value,
                  i = a.shopXtools?.cart,
                  o = e.product;
                if (t > 0) {
                  if (i && o) {
                    let e =
                        a.shopXtools.products
                          .find(({ node: e }) => e.id === o.id)
                          ?.node?.variants?.edges?.map((e) => e?.node?.id) ?? [],
                      n =
                        t -
                        (
                          i?.lines?.edges?.filter((t) => e.includes(t?.node?.merchandise?.id)) ?? []
                        ).reduce((e, t) => e + (t?.node?.quantity || 0), 0);
                    ((c = Math.max(0, Math.min(n, c))), d(c), _(n === 0 || n === 1 ? !1 : s));
                    return;
                  }
                  c = Math.min(parseInt(t, 10), c);
                } else if (i) {
                  let e = i?.lines?.edges?.find((e) => e?.node?.merchandise?.id === r.id);
                  if (e) {
                    let t = e.node.quantity,
                      n =
                        r?.quantityAvailable <= 0 && r?.availableForSale
                          ? 100
                          : r?.quantityAvailable,
                      i = Math.max(0, n - t);
                    ((c = Math.max(0, Math.min(i, c))), d(c), _(i === 0 || i === 1 ? !1 : s));
                  } else (d(c), _(s));
                }
              } catch {}
          }
        })(),
        document.addEventListener(`product__active-variant__changed`, e),
        a.addEventListener(`FcQuantityStateUpdate`, C),
        () => {
          (document.removeEventListener(`product__active-variant__changed`, e),
            a.removeEventListener(`FcQuantityStateUpdate`, C));
        }
      );
    }, [o, i, v]),
    x(() => {
      c(o ? !(g && f < u) : f <= 1);
    }, [f, u, g, o]));
  let w = async () => {
    if (!s && a !== void 0) {
      let e = Array.isArray(a.shopXtools?.products)
          ? a.shopXtools.products
          : Object.values(a.shopXtools?.products || {}),
        t = `gid://shopify/Product/${i}`;
      e.find((e) => e?.node?.id === t);
      let n = m;
      (n || (!n && a !== void 0 && a?.shopXtools?.products)) &&
        ((o && f < u) || (!o && f > 1)) &&
        (o ? f + 1 : f - 1,
        a.dispatchEvent(
          new CustomEvent(o ? `FcQuantityIncrement` : `FcQuantityDecrement`, {
            detail: { maxInventory: u, variantId: n?.id || null, productId: i, currentQuantity: f },
          })
        ));
    }
  };
  return y(`div`, {
    role: `button`,
    tabIndex: 0,
    style: { flex: 1, height: `100%`, cursor: s ? `not-allowed` : `pointer` },
    onClick: () => {
      s || w();
    },
    onKeyPress: (e) => {
      (e.key === `Enter` || e.key === ` `) && !s && w();
    },
    "aria-disabled": s,
    "aria-label": s ? `Button disabled` : `Button active`,
    children:
      !n?.[0] || !r?.[0]
        ? y(`div`, {
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
        : l(s ? r[0] : n[0], {
            style: {
              ...(s ? r[0].props?.style : n[0].props?.style || {}),
              width: `100%`,
              height: `100%`,
            },
          }),
  });
}
var vo = e(() => {
    (t(),
      f(),
      r(),
      V(),
      je(),
      (_o.defaultProps = { shopifyProductID: ``, isPlus: `plus` }),
      L(_o, {
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
  yo,
  bo,
  xo,
  So,
  Co,
  wo,
  To,
  Eo = e(() => {
    (f(),
      V(),
      r(),
      (yo = `var(--framer-icon-mask)`),
      (bo = _(function (e, t) {
        return y(`svg`, { ...e, ref: t, children: e.children });
      })),
      (xo = C.create(bo)),
      (So = _((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? y(xo, { ...a, layoutId: r, ref: t, children: i })
          : y(`svg`, { ...a, ref: t, children: i });
      })),
      (Co = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 16 0" fill="transparent" height="1px" id="PtGzXZtvA" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(2 10)" width="16px"/></svg>`),
      (wo = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (To = N(
        _(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = wo(e),
            l = re(`4053988269`, Co);
          return y(So, {
            ...c,
            className: F(`framer-hjAxT`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: y(`use`, { href: l }),
          });
        }),
        [
          `.framer-hjAxT { -webkit-mask: ${yo}; aspect-ratio: 1; display: block; mask: ${yo}; width: 20px; }`,
        ],
        `framer-hjAxT`
      )),
      (To.displayName = `Minus`),
      L(To, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: q.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: q.Number },
      }));
  });
function Do(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Oo,
  ko,
  Ao,
  jo,
  Mo,
  No,
  Po,
  Fo,
  Io,
  Lo,
  Ro = e(() => {
    (f(),
      V(),
      E(),
      r(),
      $e(),
      Eo(),
      (Oo = [`FlmWT3s_i`, `SBlxRZuDk`, `RBRutC5oT`, `pdZy5BrE8`]),
      (ko = `framer-t1Jws`),
      (Ao = {
        FlmWT3s_i: `framer-v-u84k2a`,
        pdZy5BrE8: `framer-v-1pci1ms`,
        RBRutC5oT: `framer-v-1tgnpc8`,
        SBlxRZuDk: `framer-v-dcad3s`,
      }),
      (jo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Mo = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (No = {
        "Minus Disabled": `pdZy5BrE8`,
        "Plus Disabled": `RBRutC5oT`,
        Minus: `SBlxRZuDk`,
        Plus: `FlmWT3s_i`,
      }),
      (Po = C.create(o)),
      (Fo = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: No[r.variant] ?? r.variant ?? `FlmWT3s_i`,
      })),
      (Io = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Lo = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let { style: c, className: l, layoutId: d, variant: f, ...p } = Fo(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: b,
              setGestureState: x,
              setVariant: S,
              variants: ee,
            } = B({
              cycleOrder: Oo,
              defaultVariant: `FlmWT3s_i`,
              ref: r,
              variant: f,
              variantClassNames: Ao,
            }),
            T = Io(e, ee),
            E = F(ko);
          return y(w, {
            id: d ?? a,
            children: y(Po, {
              animate: ee,
              initial: !1,
              children: y(Mo, {
                value: jo,
                children: y(C.div, {
                  ...p,
                  ..._,
                  className: F(E, `framer-u84k2a`, l, h),
                  "data-framer-name": `Plus`,
                  layoutDependency: T,
                  layoutId: `FlmWT3s_i`,
                  ref: r,
                  style: {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    ...c,
                  },
                  variants: {
                    pdZy5BrE8: {
                      borderBottomLeftRadius: 800,
                      borderBottomRightRadius: 800,
                      borderTopLeftRadius: 800,
                      borderTopRightRadius: 800,
                    },
                    RBRutC5oT: {
                      borderBottomLeftRadius: 800,
                      borderBottomRightRadius: 800,
                      borderTopLeftRadius: 800,
                      borderTopRightRadius: 800,
                    },
                    SBlxRZuDk: {
                      borderBottomLeftRadius: 800,
                      borderBottomRightRadius: 800,
                      borderTopLeftRadius: 800,
                      borderTopRightRadius: 800,
                    },
                  },
                  ...Do(
                    {
                      pdZy5BrE8: { "data-framer-name": `Minus Disabled` },
                      RBRutC5oT: { "data-framer-name": `Plus Disabled` },
                      SBlxRZuDk: { "data-framer-name": `Minus` },
                    },
                    m,
                    v
                  ),
                  children: y(de, {
                    animated: !0,
                    className: `framer-wdb63d`,
                    Component: rt,
                    layoutDependency: T,
                    layoutId: `PZg7wBESj`,
                    style: {
                      "--d1m4u3": 1.8,
                      "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    },
                    variants: {
                      pdZy5BrE8: { "--v9s4l2": `rgb(148, 148, 148)` },
                      RBRutC5oT: { "--v9s4l2": `rgb(148, 148, 148)` },
                    },
                    ...Do({ pdZy5BrE8: { Component: To }, SBlxRZuDk: { Component: To } }, m, v),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-t1Jws.framer-16nlr7g, .framer-t1Jws .framer-16nlr7g { display: block; }`,
          `.framer-t1Jws.framer-u84k2a { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 34px; }`,
          `.framer-t1Jws .framer-wdb63d { flex: none; height: var(--framer-aspect-ratio-supported, 14px); position: relative; width: 14px; }`,
          `.framer-t1Jws.framer-v-dcad3s.framer-u84k2a, .framer-t1Jws.framer-v-1tgnpc8.framer-u84k2a, .framer-t1Jws.framer-v-1pci1ms.framer-u84k2a { will-change: var(--framer-will-change-override, transform); }`,
        ],
        `framer-t1Jws`
      )),
      (Lo.displayName = `Quantity Buttons Design`),
      (Lo.defaultProps = { height: 32, width: 34 }),
      L(Lo, {
        variant: {
          options: [`FlmWT3s_i`, `SBlxRZuDk`, `RBRutC5oT`, `pdZy5BrE8`],
          optionTitles: [`Plus`, `Minus`, `Plus Disabled`, `Minus Disabled`],
          title: `Variant`,
          type: q.Enum,
        },
      }),
      I(Lo, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  zo,
  Bo,
  Vo,
  Ho,
  Uo,
  Wo,
  Go,
  Ko,
  qo,
  Jo,
  Yo,
  Xo,
  Zo = e(() => {
    (f(),
      V(),
      E(),
      r(),
      go(),
      vo(),
      Ro(),
      (zo = U(Lo)),
      (Bo = U(_o)),
      (Vo = U(ho)),
      (Ho = `framer-SbN5R`),
      (Uo = { hJB6i3MYB: `framer-v-tklov6` }),
      (Wo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Go = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ko = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (qo = C.create(o)),
      (Jo = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        bVhYNmEzi: n ?? i.bVhYNmEzi,
      })),
      (Yo = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Xo = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let { style: c, className: l, layoutId: d, variant: f, bVhYNmEzi: p, ...m } = Jo(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: v,
              gestureVariant: x,
              isLoading: S,
              setGestureState: ee,
              setVariant: T,
              variants: E,
            } = B({ defaultVariant: `hJB6i3MYB`, ref: r, variant: f, variantClassNames: Uo }),
            O = Yo(e, E),
            k = F(Ho);
          return y(w, {
            id: d ?? a,
            children: y(qo, {
              animate: E,
              initial: !1,
              children: y(Ko, {
                value: Wo,
                children: b(C.div, {
                  ...m,
                  ...v,
                  className: F(k, `framer-tklov6`, l, g),
                  "data-border": !0,
                  "data-framer-name": `Component`,
                  layoutDependency: O,
                  layoutId: `hJB6i3MYB`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `rgb(226, 225, 225)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-d35e5398-af28-4f97-8e2e-13717c50156f, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 200,
                    borderBottomRightRadius: 200,
                    borderTopLeftRadius: 200,
                    borderTopRightRadius: 200,
                    ...c,
                  },
                  children: [
                    y(G, {
                      children: y(D, {
                        className: `framer-1j5td0j-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `XM2vpyft7-container`,
                        nodeId: `XM2vpyft7`,
                        rendersWithMotion: !0,
                        scopeId: `qirYZJaKD`,
                        children: y(_o, {
                          activeContent: [
                            y(G, {
                              height: 32,
                              width: `34px`,
                              children: y(D, {
                                className: `framer-21sbyr-container`,
                                "data-framer-name": `Minus - Active`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `bgIVeXF5a-container`,
                                name: `Minus - Active`,
                                nodeId: `bgIVeXF5a`,
                                rendersWithMotion: !0,
                                scopeId: `qirYZJaKD`,
                                children: y(Lo, {
                                  height: `100%`,
                                  id: `bgIVeXF5a`,
                                  layoutId: `bgIVeXF5a`,
                                  name: `Minus - Active`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Go(`SBlxRZuDk`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          disabledContent: [
                            y(G, {
                              height: 32,
                              width: `34px`,
                              children: y(D, {
                                className: `framer-ao5qr7-container`,
                                "data-framer-name": `Minus - Disabled`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `I6yaiPuNq-container`,
                                name: `Minus - Disabled`,
                                nodeId: `I6yaiPuNq`,
                                rendersWithMotion: !0,
                                scopeId: `qirYZJaKD`,
                                children: y(Lo, {
                                  height: `100%`,
                                  id: `I6yaiPuNq`,
                                  layoutId: `I6yaiPuNq`,
                                  name: `Minus - Disabled`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Go(`pdZy5BrE8`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          height: `100%`,
                          id: `XM2vpyft7`,
                          isPlus: `minus`,
                          layoutId: `XM2vpyft7`,
                          shopifyProductID: p,
                          style: { height: `100%`, width: `100%` },
                          width: `100%`,
                        }),
                      }),
                    }),
                    y(G, {
                      children: y(D, {
                        className: `framer-jpkq07-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `SyYgSM5ja-container`,
                        nodeId: `SyYgSM5ja`,
                        rendersWithMotion: !0,
                        scopeId: `qirYZJaKD`,
                        children: y(ho, {
                          font: {
                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                            fontSize: `16px`,
                            fontStyle: `normal`,
                            fontWeight: 600,
                            letterSpacing: `0em`,
                            lineHeight: `1em`,
                          },
                          height: `100%`,
                          id: `SyYgSM5ja`,
                          layoutId: `SyYgSM5ja`,
                          shopifyProductID: p,
                          style: { width: `100%` },
                          textColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    y(G, {
                      children: y(D, {
                        className: `framer-1fhk4c3-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: O,
                        layoutId: `VHi91lomz-container`,
                        nodeId: `VHi91lomz`,
                        rendersWithMotion: !0,
                        scopeId: `qirYZJaKD`,
                        children: y(_o, {
                          activeContent: [
                            y(G, {
                              height: 32,
                              width: `34px`,
                              children: y(D, {
                                className: `framer-1yodkbk-container`,
                                "data-framer-name": `Plus - Active`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `YSenREK3P-container`,
                                name: `Plus - Active`,
                                nodeId: `YSenREK3P`,
                                rendersWithMotion: !0,
                                scopeId: `qirYZJaKD`,
                                children: y(Lo, {
                                  height: `100%`,
                                  id: `YSenREK3P`,
                                  layoutId: `YSenREK3P`,
                                  name: `Plus - Active`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Go(`FlmWT3s_i`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          disabledContent: [
                            y(G, {
                              height: 32,
                              width: `34px`,
                              children: y(D, {
                                className: `framer-10iad9b-container`,
                                "data-framer-name": `Plus - Disabled`,
                                inComponentSlot: !0,
                                layoutDependency: O,
                                layoutId: `c2FO_48Yp-container`,
                                name: `Plus - Disabled`,
                                nodeId: `c2FO_48Yp`,
                                rendersWithMotion: !0,
                                scopeId: `qirYZJaKD`,
                                children: y(Lo, {
                                  height: `100%`,
                                  id: `c2FO_48Yp`,
                                  layoutId: `c2FO_48Yp`,
                                  name: `Plus - Disabled`,
                                  style: { height: `100%`, width: `100%` },
                                  variant: Go(`RBRutC5oT`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          ],
                          height: `100%`,
                          id: `VHi91lomz`,
                          isPlus: `plus`,
                          layoutId: `VHi91lomz`,
                          shopifyProductID: p,
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
          `.framer-SbN5R.framer-a369pe, .framer-SbN5R .framer-a369pe { display: block; }`,
          `.framer-SbN5R.framer-tklov6 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-SbN5R .framer-1j5td0j-container, .framer-SbN5R .framer-1fhk4c3-container { flex: none; height: 36px; position: relative; width: 38px; }`,
          `.framer-SbN5R .framer-21sbyr-container, .framer-SbN5R .framer-ao5qr7-container, .framer-SbN5R .framer-1yodkbk-container, .framer-SbN5R .framer-10iad9b-container { height: 32px; position: relative; width: 34px; }`,
          `.framer-SbN5R .framer-jpkq07-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 8px; }`,
          `.framer-SbN5R[data-border="true"]::after, .framer-SbN5R [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-SbN5R`
      )),
      (Xo.displayName = `Quantity Selector`),
      (Xo.defaultProps = { height: 36, width: 84 }),
      L(Xo, {
        bVhYNmEzi: { defaultValue: ``, title: `Product ID`, type: q.String },
        onbVhYNmEziChange: { changes: `bVhYNmEzi`, type: q.ChangeHandler },
      }),
      I(
        Xo,
        [
          {
            explicitInter: !0,
            fonts: [
              {
                cssFamilyName: `General Sans`,
                source: `fontshare`,
                style: `normal`,
                uiFamilyName: `General Sans`,
                url: `../../assets/misc/3ZLMEXZEQPLTEPMHTQDAUXP5ZZXCZAEN.woff2`,
                weight: `600`,
              },
            ],
          },
          ...zo,
          ...Bo,
          ...Vo,
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (Xo.loader = { load: (e, t) => (t.locale, Promise.allSettled([H(Lo, {}, t)])) }));
  }),
  Qo,
  $o,
  es,
  ts,
  ns,
  rs,
  is,
  as = e(() => {
    (f(),
      V(),
      r(),
      (Qo = `var(--framer-icon-mask)`),
      ($o = _(function (e, t) {
        return y(`svg`, { ...e, ref: t, children: e.children });
      })),
      (es = C.create($o)),
      (ts = _((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? y(es, { ...a, layoutId: r, ref: t, children: i })
          : y(`svg`, { ...a, ref: t, children: i });
      })),
      (ns = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 15.436 10.637 C 15.797 10.997 16 11.487 16 11.997 C 16 12.507 15.797 12.996 15.436 13.356 L 13.356 15.436 C 12.996 15.797 12.507 16 11.997 16 C 11.487 16 10.997 15.797 10.637 15.436 L 0.561 5.359 C -0.187 4.607 -0.187 3.392 0.561 2.64 L 2.64 0.561 C 3.392 -0.187 4.607 -0.187 5.359 0.561 Z M 9.998 8.398 L 11.597 6.799 M 7.598 5.999 L 9.198 4.4 M 5.199 3.6 L 6.799 2.001 M 12.397 10.797 L 13.996 9.198" fill="transparent" height="16px" id="V2GwD41eI" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(1.994 2.007)" width="16px"/></svg>`),
      (rs = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (is = N(
        _(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = rs(e),
            l = re(`246638098`, ns);
          return y(ts, {
            ...c,
            className: F(`framer-3Cux7`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: y(`use`, { href: l }),
          });
        }),
        [
          `.framer-3Cux7 { -webkit-mask: ${Qo}; aspect-ratio: 1; display: block; mask: ${Qo}; width: 20px; }`,
        ],
        `framer-3Cux7`
      )),
      (is.displayName = `Size`),
      L(is, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: q.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: q.Number },
      }));
  }),
  os,
  ss,
  cs,
  ls,
  us,
  ds,
  fs,
  ps,
  ms,
  hs = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Ke(),
      as(),
      (os = U(is)),
      (ss = `framer-9BMQ5`),
      (cs = { w9Q_96w3z: `framer-v-1sfxwoa` }),
      (ls = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (us = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (ds = C.create(o)),
      (fs = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        XBNnZPHxM: e ?? i.XBNnZPHxM,
      })),
      (ps = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ms = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let { style: l, className: d, layoutId: f, variant: p, XBNnZPHxM: m, ...h } = fs(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({ defaultVariant: `w9Q_96w3z`, ref: r, variant: p, variantClassNames: cs }),
            O = ps(e, D),
            { activeVariantCallback: k, delay: A } = ge(g),
            j = k(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            M = F(ss, Ye);
          return y(w, {
            id: f ?? a,
            children: y(ds, {
              animate: D,
              initial: !1,
              children: y(us, {
                value: ls,
                children: b(C.div, {
                  ...h,
                  ...x,
                  className: F(M, `framer-1sfxwoa`, d, _),
                  "data-framer-name": `Variant 1`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `w9Q_96w3z`,
                  onTap: j,
                  ref: r,
                  style: { ...l },
                  children: [
                    y(is, {
                      animated: !0,
                      className: `framer-e59l3r`,
                      layoutDependency: O,
                      layoutId: `cx6rQKQFV`,
                      style: {
                        "--d1m4u3": 1.2,
                        "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      },
                    }),
                    y(R, {
                      __fromCanvasComponent: !0,
                      children: y(o, {
                        children: y(C.p, {
                          className: `framer-styles-preset-8kmloq`,
                          "data-styles-preset": `MYFsM6f0k`,
                          dir: `auto`,
                          children: `Size guide`,
                        }),
                      }),
                      className: `framer-1qaeaxp`,
                      "data-framer-name": `Text`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `ko82EN8R2`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-9BMQ5.framer-14g9pcq, .framer-9BMQ5 .framer-14g9pcq { display: block; }`,
          `.framer-9BMQ5.framer-1sfxwoa { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
          `.framer-9BMQ5 .framer-e59l3r { flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-9BMQ5 .framer-1qaeaxp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...qe,
        ],
        `framer-9BMQ5`
      )),
      (ms.displayName = `Size Guide Button`),
      (ms.defaultProps = { height: 20, width: 99 }),
      L(ms, { XBNnZPHxM: { title: `Click`, type: q.EventHandler } }),
      I(
        ms,
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
          ...os,
          ...P(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function gs(e) {
  let { shopifyProductID: t, textTemplate: n } = e,
    [r, i] = S(),
    [o, s] = S({}),
    c = h((e) => {
      s((t) => ({ ...t, [e.detail.optionName]: e.detail.value }));
    }, []);
  (x(() => {
    if (a.shopXtools && Array.isArray(a.shopXtools.products)) {
      let e = a.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
      i(e ? e.node : `404`);
    } else
      document.addEventListener(`data__products-ready`, (e) => {
        if (Array.isArray(e.detail.products)) {
          let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
          i(n ? n.node : `404`);
        }
      });
    return (
      document.addEventListener(`variant_option_selected`, c),
      () => {
        document.removeEventListener(`variant_option_selected`, c);
      }
    );
  }, [t, c]),
    x(() => {
      let e = (e) => {
        let { currency: n } = e.detail;
        if (a.shopXtools && Array.isArray(a.shopXtools.products)) {
          let e = a.shopXtools.products.find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          e && i(e.node);
        }
      };
      return (
        a.addEventListener(`currency_changed`, e),
        () => {
          a.removeEventListener(`currency_changed`, e);
        }
      );
    }, [t]));
  let l = De(r, `options`, [])
      .filter((e) => !o[e.name])
      .map((e) => e.name),
    u =
      a === void 0 || !a.shopXtools
        ? n.replace(`{{variant}}`, `Size`)
        : l.length === 0
          ? ``
          : n.replace(`{{variant}}`, l.join(`, `));
  return u
    ? y(`div`, {
        style: {
          width: `100%`,
          height: `100%`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
        },
        children: y(`p`, {
          style: {
            ...e.font,
            color: e.color,
            margin: 0,
            textAlign: `center`,
            textTransform: e.textTransform,
          },
          children: u,
        }),
      })
    : y(`div`, { style: { width: `100%`, height: `100%` } });
}
var _s = e(() => {
  (t(),
    f(),
    V(),
    r(),
    Me(),
    (gs.defaultProps = {
      shopifyProductID: ``,
      textTemplate: `Select {{variant}}`,
      textTransform: `none`,
      color: `#000000`,
    }),
    L(gs, {
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
});
function vs(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ys,
  bs,
  xs,
  Ss,
  Cs,
  ws,
  Ts,
  Es,
  Ds,
  Os,
  ks,
  As,
  js = e(() => {
    (f(),
      V(),
      E(),
      r(),
      _s(),
      lt(),
      it(),
      (ys = U(gs)),
      (bs = { EkQAUbY55: { hover: !0 } }),
      (xs = [`EkQAUbY55`, `Sw1VK99If`, `NvzA2y1jT`]),
      (Ss = `framer-IlY4e`),
      (Cs = {
        EkQAUbY55: `framer-v-1yg7oen`,
        NvzA2y1jT: `framer-v-nmmt7r`,
        Sw1VK99If: `framer-v-11u861b`,
      }),
      (ws = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (Ts = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Es = {
        "Add to Cart": `EkQAUbY55`,
        "Out of stock": `NvzA2y1jT`,
        "Select variant": `Sw1VK99If`,
      }),
      (Ds = C.create(o)),
      (Os = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        elgRTGdr9: n ?? i.elgRTGdr9,
        variant: Es[i.variant] ?? i.variant ?? `EkQAUbY55`,
      })),
      (ks = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (As = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let { style: l, className: d, layoutId: f, variant: p, elgRTGdr9: m, ...h } = Os(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = B({
              cycleOrder: xs,
              defaultVariant: `EkQAUbY55`,
              enabledGestures: bs,
              ref: r,
              variant: p,
              variantClassNames: Cs,
            }),
            k = ks(e, O),
            A = F(Ss, pt, st),
            j = () => ![`Sw1VK99If`, `NvzA2y1jT`].includes(g),
            M = () => g === `Sw1VK99If`,
            N = () => g === `NvzA2y1jT`;
          return y(w, {
            id: f ?? a,
            children: y(Ds, {
              animate: O,
              initial: !1,
              children: y(Ts, {
                value: ws,
                children: b(C.div, {
                  ...h,
                  ...x,
                  className: F(A, `framer-1yg7oen`, d, _),
                  "data-border": !0,
                  "data-framer-name": `Add to Cart`,
                  layoutDependency: k,
                  layoutId: `EkQAUbY55`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...l,
                  },
                  variants: {
                    "EkQAUbY55-hover": { backgroundColor: `rgb(250, 250, 250)` },
                    NvzA2y1jT: {
                      "--border-color": `var(--token-b3479329-b25f-4976-b856-8a2d77be83ae, rgb(219, 219, 219))`,
                      backgroundColor: `var(--token-6179ba6b-69d8-4266-899c-508da03f0f15)`,
                    },
                    Sw1VK99If: { backgroundColor: `rgba(0, 0, 0, 0)` },
                  },
                  ...vs(
                    {
                      "EkQAUbY55-hover": { "data-framer-name": void 0 },
                      NvzA2y1jT: { "data-framer-name": `Out of stock` },
                      Sw1VK99If: { "data-framer-name": `Select variant` },
                    },
                    g,
                    S
                  ),
                  children: [
                    j() &&
                      y(R, {
                        __fromCanvasComponent: !0,
                        children: y(o, {
                          children: y(C.p, {
                            className: `framer-styles-preset-hhy7lj`,
                            "data-styles-preset": `jqlnmWM57`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26)))`,
                            },
                            children: `Add to Cart`,
                          }),
                        }),
                        className: `framer-15qfdr0`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `WDq31RYaa`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    M() &&
                      y(G, {
                        children: y(D, {
                          className: `framer-17ns6db-container`,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `sg5idIfsO-container`,
                          nodeId: `sg5idIfsO`,
                          rendersWithMotion: !0,
                          scopeId: `og9GL1k8_`,
                          children: y(gs, {
                            color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                            font: {
                              fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 500,
                              letterSpacing: `0em`,
                              lineHeight: `110%`,
                            },
                            height: `100%`,
                            id: `sg5idIfsO`,
                            layoutId: `sg5idIfsO`,
                            shopifyProductID: m,
                            textTemplate: `Select {{variant}}`,
                            textTransform: `None`,
                            width: `100%`,
                          }),
                        }),
                      }),
                    N() &&
                      y(R, {
                        __fromCanvasComponent: !0,
                        children: y(o, {
                          children: y(C.p, {
                            className: `framer-styles-preset-arb5du`,
                            "data-styles-preset": `UOFERiKNL`,
                            dir: `auto`,
                            style: {
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117)))`,
                            },
                            children: `Out of Stock`,
                          }),
                        }),
                        className: `framer-bpam6p`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `WcdFBccpP`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-IlY4e.framer-vxxnn8, .framer-IlY4e .framer-vxxnn8 { display: block; }`,
          `.framer-IlY4e.framer-1yg7oen { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-IlY4e .framer-15qfdr0 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-IlY4e .framer-17ns6db-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: auto; }`,
          `.framer-IlY4e .framer-bpam6p { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
          `.framer-IlY4e.framer-v-11u861b.framer-1yg7oen, .framer-IlY4e.framer-v-nmmt7r.framer-1yg7oen { cursor: unset; }`,
          ...ut,
          ...at,
          `.framer-IlY4e[data-border="true"]::after, .framer-IlY4e [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-IlY4e`
      )),
      (As.displayName = `ATC Design`),
      (As.defaultProps = { height: 48, width: 300 }),
      L(As, {
        variant: {
          options: [`EkQAUbY55`, `Sw1VK99If`, `NvzA2y1jT`],
          optionTitles: [`Add to Cart`, `Select variant`, `Out of stock`],
          title: `Variant`,
          type: q.Enum,
        },
        elgRTGdr9: { defaultValue: ``, title: `Product ID`, type: q.String },
        onelgRTGdr9Change: { changes: `elgRTGdr9`, type: q.ChangeHandler },
      }),
      I(
        As,
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
                cssFamilyName: `Instrument Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Instrument Sans`,
                url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npST3-QfwmS0v3_7Y.woff2`,
                weight: `500`,
              },
            ],
          },
          ...ys,
          ...P(ft),
          ...P(ot),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ms,
  Ns,
  Ps,
  Fs,
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Qe(),
      js(),
      (Ms = U(As)),
      (Ns = U(tt)),
      (Ps = `framer-XLBHL`),
      (Fs = { hAi0QoaYG: `framer-v-1yktgnk` }),
      (Is = { damping: 30, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (Ls = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Rs = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (zs = C.create(o)),
      (Bs = (e, t) => {
        let [n, r] = S(e),
          [i, a] = S(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Vs = ({ click: e, height: t, hover: n, id: r, productID: i, width: a, ...o }) => ({
        ...o,
        cPhlh1BR3: n ?? o.cPhlh1BR3,
        Nt_kadLvR: i ?? o.Nt_kadLvR,
        WIFKe4Qkr: e ?? o.WIFKe4Qkr,
      })),
      (Hs = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Us = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              Nt_kadLvR: p,
              onNt_kadLvRChange: m,
              cPhlh1BR3: h,
              WIFKe4Qkr: g,
              ..._
            } = Vs(e),
            [v, b] = Bs(p, m),
            {
              baseVariant: x,
              classNames: S,
              clearLoadingGesture: ee,
              gestureHandlers: T,
              gestureVariant: E,
              isLoading: O,
              setGestureState: k,
              setVariant: A,
              variants: j,
            } = B({ defaultVariant: `hAi0QoaYG`, ref: r, variant: f, variantClassNames: Fs }),
            M = Hs(e, j),
            { activeVariantCallback: N, delay: P } = ge(x),
            te = N(async (...e) => {
              if ((k({ isPressed: !1 }), g && (await g(...e)) === !1)) return !1;
            }),
            ne = N(async (...e) => {
              if ((k({ isHovered: !0 }), h && (await h(...e)) === !1)) return !1;
            }),
            I = F(Ps);
          return y(w, {
            id: d ?? a,
            children: y(zs, {
              animate: j,
              initial: !1,
              children: y(Rs, {
                value: Is,
                children: y(C.div, {
                  ..._,
                  ...T,
                  className: F(I, `framer-1yktgnk`, l, S),
                  "data-framer-name": `Default`,
                  "data-highlight": !0,
                  layoutDependency: M,
                  layoutId: `hAi0QoaYG`,
                  onMouseEnter: ne,
                  onTap: te,
                  ref: r,
                  style: { ...c },
                  children: y(G, {
                    children: y(D, {
                      className: `framer-cmv9x6-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: M,
                      layoutId: `usO0A1238-container`,
                      nodeId: `usO0A1238`,
                      rendersWithMotion: !0,
                      scopeId: `wNOcWuLws`,
                      children: y(tt, {
                        available: [
                          y(G, {
                            height: 48,
                            width: `300px`,
                            children: y(D, {
                              className: `framer-1jel9tf-container`,
                              "data-framer-name": `Avaliable`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `QiZrBnBgu-container`,
                              name: `Avaliable`,
                              nodeId: `QiZrBnBgu`,
                              rendersWithMotion: !0,
                              scopeId: `wNOcWuLws`,
                              children: y(As, {
                                elgRTGdr9: v,
                                height: `100%`,
                                id: `QiZrBnBgu`,
                                layoutId: `QiZrBnBgu`,
                                name: `Avaliable`,
                                onelgRTGdr9Change: b,
                                style: { height: `100%`, width: `100%` },
                                variant: Ls(`EkQAUbY55`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        BuyNowATC: !1,
                        focus: { color: `rgb(0, 122, 255)`, padding: 2, radius: 0, width: 2 },
                        height: `100%`,
                        id: `usO0A1238`,
                        layoutId: `usO0A1238`,
                        LoadingState: [],
                        maxQuantity: [],
                        openCart: !0,
                        OutOfStock: [
                          y(G, {
                            height: 48,
                            width: `300px`,
                            children: y(D, {
                              className: `framer-zn6srt-container`,
                              "data-framer-name": `Out of stock`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `Qw0pCBufS-container`,
                              name: `Out of stock`,
                              nodeId: `Qw0pCBufS`,
                              rendersWithMotion: !0,
                              scopeId: `wNOcWuLws`,
                              children: y(As, {
                                elgRTGdr9: v,
                                height: `100%`,
                                id: `Qw0pCBufS`,
                                layoutId: `Qw0pCBufS`,
                                name: `Out of stock`,
                                onelgRTGdr9Change: b,
                                style: { width: `100%` },
                                variant: Ls(`NvzA2y1jT`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        SelectVariant: [
                          y(G, {
                            height: 48,
                            width: `300px`,
                            children: y(D, {
                              className: `framer-18n95ax-container`,
                              "data-framer-name": `Select variant`,
                              inComponentSlot: !0,
                              layoutDependency: M,
                              layoutId: `xB8j0X3yz-container`,
                              name: `Select variant`,
                              nodeId: `xB8j0X3yz`,
                              rendersWithMotion: !0,
                              scopeId: `wNOcWuLws`,
                              children: y(As, {
                                elgRTGdr9: v,
                                height: `100%`,
                                id: `xB8j0X3yz`,
                                layoutId: `xB8j0X3yz`,
                                name: `Select variant`,
                                onelgRTGdr9Change: b,
                                style: { width: `100%` },
                                variant: Ls(`Sw1VK99If`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        shopifyProductID: v,
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
          `.framer-XLBHL.framer-1hf3wme, .framer-XLBHL .framer-1hf3wme { display: block; }`,
          `.framer-XLBHL.framer-1yktgnk { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-XLBHL .framer-cmv9x6-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-XLBHL .framer-1jel9tf-container { height: 48px; position: relative; width: 300px; }`,
          `.framer-XLBHL .framer-18n95ax-container, .framer-XLBHL .framer-zn6srt-container { height: auto; position: relative; width: 300px; }`,
        ],
        `framer-XLBHL`
      )),
      (Us.displayName = `ATC button`),
      (Us.defaultProps = { height: 48, width: 300 }),
      L(Us, {
        Nt_kadLvR: { defaultValue: ``, title: `Product ID`, type: q.String },
        onNt_kadLvRChange: { changes: `Nt_kadLvR`, type: q.ChangeHandler },
        cPhlh1BR3: { title: `Hover`, type: q.EventHandler },
        WIFKe4Qkr: { title: `Click`, type: q.EventHandler },
      }),
      I(Us, [{ explicitInter: !0, fonts: [] }, ...Ms, ...Ns], { supportsExplicitInterCodegen: !0 }),
      (Us.loader = { load: (e, t) => (t.locale, Promise.allSettled([H(As, {}, t)])) }));
  });
function Gs(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s,
  ec,
  tc,
  nc,
  rc,
  ic = e(() => {
    (f(),
      V(),
      E(),
      r(),
      _s(),
      Ke(),
      (Ks = U(gs)),
      (qs = { voDxDON8K: { hover: !0 } }),
      (Js = [`voDxDON8K`, `mF9aAwGYK`]),
      (Ys = `framer-2AoHc`),
      (Xs = { mF9aAwGYK: `framer-v-1gerxgo`, voDxDON8K: `framer-v-h9caqf` }),
      (Zs = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (Qs = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      ($s = { "Add to cart": `voDxDON8K`, "Select variant": `mF9aAwGYK` }),
      (ec = C.create(o)),
      (tc = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        elgRTGdr9: n ?? i.elgRTGdr9,
        variant: $s[i.variant] ?? i.variant ?? `voDxDON8K`,
      })),
      (nc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (rc = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let { style: l, className: d, layoutId: f, variant: p, elgRTGdr9: m, ...h } = tc(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = B({
              cycleOrder: Js,
              defaultVariant: `voDxDON8K`,
              enabledGestures: qs,
              ref: r,
              variant: p,
              variantClassNames: Xs,
            }),
            k = nc(e, O),
            A = F(Ys, Ye),
            j = () => g !== `mF9aAwGYK`,
            M = () => g === `mF9aAwGYK`;
          return y(w, {
            id: f ?? a,
            children: y(ec, {
              animate: O,
              initial: !1,
              children: y(Qs, {
                value: Zs,
                children: b(C.div, {
                  ...h,
                  ...x,
                  className: F(A, `framer-h9caqf`, d, _),
                  "data-border": !0,
                  "data-framer-name": `Add to cart`,
                  layoutDependency: k,
                  layoutId: `voDxDON8K`,
                  ref: r,
                  style: {
                    "--border-bottom-width": `1px`,
                    "--border-color": `var(--token-6179ba6b-69d8-4266-899c-508da03f0f15)`,
                    "--border-left-width": `1px`,
                    "--border-right-width": `1px`,
                    "--border-style": `solid`,
                    "--border-top-width": `1px`,
                    backgroundColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                    borderBottomLeftRadius: 100,
                    borderBottomRightRadius: 100,
                    borderTopLeftRadius: 100,
                    borderTopRightRadius: 100,
                    ...l,
                  },
                  variants: {
                    "voDxDON8K-hover": {
                      backgroundColor: `var(--token-603d7e0f-6fcc-45a2-988c-5eb69e68e97f, rgb(46, 46, 46))`,
                    },
                  },
                  ...Gs(
                    {
                      "voDxDON8K-hover": { "data-framer-name": void 0 },
                      mF9aAwGYK: { "data-framer-name": `Select variant` },
                    },
                    g,
                    S
                  ),
                  children: [
                    j() &&
                      y(R, {
                        __fromCanvasComponent: !0,
                        children: y(o, {
                          children: y(C.p, {
                            className: `framer-styles-preset-8kmloq`,
                            "data-styles-preset": `MYFsM6f0k`,
                            dir: `auto`,
                            style: {
                              "--framer-text-alignment": `start`,
                              "--framer-text-color": `var(--extracted-r6o4lv, var(--token-b1f89d39-57aa-4efb-8816-14116952e648))`,
                            },
                            children: `Buy Now`,
                          }),
                        }),
                        className: `framer-1fr7wsl`,
                        fonts: [`Inter`],
                        layoutDependency: k,
                        layoutId: `b1aDjAdgm`,
                        style: {
                          "--extracted-r6o4lv": `var(--token-b1f89d39-57aa-4efb-8816-14116952e648)`,
                          "--framer-link-text-color": `rgb(0, 153, 255)`,
                          "--framer-link-text-decoration": `underline`,
                        },
                        verticalAlignment: `top`,
                        withExternalLayout: !0,
                      }),
                    M() &&
                      y(G, {
                        children: y(D, {
                          className: `framer-zr3uwy-container`,
                          isAuthoredByUser: !0,
                          isModuleExternal: !0,
                          layoutDependency: k,
                          layoutId: `MrTtIkSjt-container`,
                          nodeId: `MrTtIkSjt`,
                          rendersWithMotion: !0,
                          scopeId: `GoQBgTK5J`,
                          children: y(gs, {
                            color: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                            font: {
                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                              fontSize: `16px`,
                              fontStyle: `normal`,
                              fontWeight: 500,
                              letterSpacing: `0em`,
                              lineHeight: `1em`,
                            },
                            height: `100%`,
                            id: `MrTtIkSjt`,
                            layoutId: `MrTtIkSjt`,
                            shopifyProductID: m,
                            textTemplate: `Select {{variant}}`,
                            textTransform: `None`,
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
          `.framer-2AoHc.framer-onp374, .framer-2AoHc .framer-onp374 { display: block; }`,
          `.framer-2AoHc.framer-h9caqf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 48px; justify-content: center; overflow: hidden; padding: 0px 24px 0px 24px; position: relative; width: 300px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-2AoHc .framer-1fr7wsl { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 1; }`,
          `.framer-2AoHc .framer-zr3uwy-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: auto; }`,
          `.framer-2AoHc.framer-v-1gerxgo.framer-h9caqf { cursor: unset; }`,
          ...qe,
          `.framer-2AoHc[data-border="true"]::after, .framer-2AoHc [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-2AoHc`
      )),
      (rc.displayName = `Buy Button Design`),
      (rc.defaultProps = { height: 48, width: 300 }),
      L(rc, {
        variant: {
          options: [`voDxDON8K`, `mF9aAwGYK`],
          optionTitles: [`Add to cart`, `Select variant`],
          title: `Variant`,
          type: q.Enum,
        },
        elgRTGdr9: { defaultValue: ``, title: `Product ID`, type: q.String },
        onelgRTGdr9Change: { changes: `elgRTGdr9`, type: q.ChangeHandler },
      }),
      I(
        rc,
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
                url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
                weight: `500`,
              },
            ],
          },
          ...Ks,
          ...P(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  ac,
  oc,
  sc,
  cc,
  lc,
  uc,
  dc,
  fc,
  pc,
  mc,
  hc,
  gc,
  _c = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Qe(),
      ic(),
      (ac = U(rc)),
      (oc = U(tt)),
      (sc = `framer-svKM9`),
      (cc = { bYIadFxSP: `framer-v-4gb7nl` }),
      (lc = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (uc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (dc = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (fc = C.create(o)),
      (pc = (e, t) => {
        let [n, r] = S(e),
          [i, a] = S(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (mc = ({ height: e, id: t, productID: n, width: r, ...i }) => ({
        ...i,
        Nt_kadLvR: n ?? i.Nt_kadLvR,
      })),
      (hc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (gc = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              Nt_kadLvR: p,
              onNt_kadLvRChange: m,
              ...h
            } = mc(e),
            [g, _] = pc(p, m),
            {
              baseVariant: v,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: S,
              gestureVariant: ee,
              isLoading: T,
              setGestureState: E,
              setVariant: O,
              variants: k,
            } = B({ defaultVariant: `bYIadFxSP`, ref: r, variant: f, variantClassNames: cc }),
            A = hc(e, k),
            j = F(sc);
          return y(w, {
            id: d ?? a,
            children: y(fc, {
              animate: k,
              initial: !1,
              children: y(dc, {
                value: lc,
                children: y(C.div, {
                  ...h,
                  ...S,
                  className: F(j, `framer-4gb7nl`, l, b),
                  "data-framer-name": `Default`,
                  layoutDependency: A,
                  layoutId: `bYIadFxSP`,
                  ref: r,
                  style: { ...c },
                  children: y(G, {
                    children: y(D, {
                      className: `framer-ko1euc-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `ezjPJ6XrV-container`,
                      nodeId: `ezjPJ6XrV`,
                      rendersWithMotion: !0,
                      scopeId: `xnqqYx7J7`,
                      children: y(tt, {
                        available: [
                          y(G, {
                            height: 48,
                            width: `300px`,
                            children: y(D, {
                              className: `framer-uexgo5-container`,
                              "data-framer-name": `Avaliable`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `vzHdbYjRB-container`,
                              name: `Avaliable`,
                              nodeId: `vzHdbYjRB`,
                              rendersWithMotion: !0,
                              scopeId: `xnqqYx7J7`,
                              children: y(rc, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `vzHdbYjRB`,
                                layoutId: `vzHdbYjRB`,
                                name: `Avaliable`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: uc(`voDxDON8K`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        BuyNowATC: !0,
                        focus: { color: `rgb(0, 122, 255)`, padding: 2, radius: 0, width: 2 },
                        height: `100%`,
                        id: `ezjPJ6XrV`,
                        layoutId: `ezjPJ6XrV`,
                        LoadingState: [],
                        maxQuantity: [],
                        openCart: !1,
                        OutOfStock: [],
                        SelectVariant: [
                          y(G, {
                            height: 48,
                            width: `300px`,
                            children: y(D, {
                              className: `framer-fp2564-container`,
                              "data-framer-name": `Select size`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `qmmwXGOU0-container`,
                              name: `Select size`,
                              nodeId: `qmmwXGOU0`,
                              rendersWithMotion: !0,
                              scopeId: `xnqqYx7J7`,
                              children: y(rc, {
                                elgRTGdr9: g,
                                height: `100%`,
                                id: `qmmwXGOU0`,
                                layoutId: `qmmwXGOU0`,
                                name: `Select size`,
                                onelgRTGdr9Change: _,
                                style: { height: `100%`, width: `100%` },
                                variant: uc(`mF9aAwGYK`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        shopifyProductID: g,
                        shopifyProductVariantId: ``,
                        skipLoading: !0,
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
          `.framer-svKM9.framer-oc11rg, .framer-svKM9 .framer-oc11rg { display: block; }`,
          `.framer-svKM9.framer-4gb7nl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 48px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 300px; }`,
          `.framer-svKM9 .framer-ko1euc-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
          `.framer-svKM9 .framer-uexgo5-container, .framer-svKM9 .framer-fp2564-container { height: 48px; position: relative; width: 300px; }`,
        ],
        `framer-svKM9`
      )),
      (gc.displayName = `Buy Button`),
      (gc.defaultProps = { height: 48, width: 300 }),
      L(gc, {
        Nt_kadLvR: { defaultValue: ``, title: `Product ID`, type: q.String },
        onNt_kadLvRChange: { changes: `Nt_kadLvR`, type: q.ChangeHandler },
      }),
      I(gc, [{ explicitInter: !0, fonts: [] }, ...ac, ...oc], { supportsExplicitInterCodegen: !0 }),
      (gc.loader = { load: (e, t) => (t.locale, Promise.allSettled([H(rc, {}, t)])) }));
  });
function vc(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var yc,
  bc,
  xc,
  Sc,
  Cc,
  wc,
  Tc,
  Ec,
  Dc,
  Oc,
  kc = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Ke(),
      jt(),
      Re(),
      (yc = [`hTFp210Gh`, `qhsn1AZfC`]),
      (bc = `framer-3kfSO`),
      (xc = { hTFp210Gh: `framer-v-cvjssa`, qhsn1AZfC: `framer-v-1j73f2i` }),
      (Sc = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (Cc = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (wc = { Active: `qhsn1AZfC`, Inactive: `hTFp210Gh` }),
      (Tc = C.create(o)),
      (Ec = ({ clickOnFav: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        variant: wc[i.variant] ?? i.variant ?? `hTFp210Gh`,
        wmiBHVBkg: e ?? i.wmiBHVBkg,
      })),
      (Dc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Oc = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: s, setLocale: c } = se();
          pe();
          let { style: l, className: d, layoutId: f, variant: p, wmiBHVBkg: m, ...h } = Ec(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: D,
            } = B({
              cycleOrder: yc,
              defaultVariant: `hTFp210Gh`,
              ref: r,
              variant: p,
              variantClassNames: xc,
            }),
            O = Dc(e, D),
            { activeVariantCallback: k, delay: A } = ge(g),
            j = k(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            M = F(bc, Ye);
          return y(w, {
            id: f ?? a,
            children: y(Tc, {
              animate: D,
              initial: !1,
              children: y(Cc, {
                value: Sc,
                children: b(C.div, {
                  ...h,
                  ...x,
                  className: F(M, `framer-cvjssa`, d, _),
                  "data-framer-name": `Inactive`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `hTFp210Gh`,
                  onTap: j,
                  ref: r,
                  style: { ...l },
                  ...vc(
                    {
                      qhsn1AZfC: {
                        "data-framer-name": `Active`,
                        "data-highlight": void 0,
                        onTap: void 0,
                      },
                    },
                    g,
                    S
                  ),
                  children: [
                    y(de, {
                      animated: !0,
                      className: `framer-tnqbi2`,
                      Component: He,
                      layoutDependency: O,
                      layoutId: `Y3Nh1pqAl`,
                      style: {
                        "--d1m4u3": 1.2,
                        "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      },
                      variants: { qhsn1AZfC: { "--v9s4l2": `rgb(255, 0, 0)` } },
                      ...vc({ qhsn1AZfC: { Component: Pt } }, g, S),
                    }),
                    y(R, {
                      __fromCanvasComponent: !0,
                      children: y(o, {
                        children: y(C.p, {
                          className: `framer-styles-preset-8kmloq`,
                          "data-styles-preset": `MYFsM6f0k`,
                          dir: `auto`,
                          children: `Add to wishlist`,
                        }),
                      }),
                      className: `framer-1exru5k`,
                      "data-framer-name": `Add to wishlist`,
                      fonts: [`Inter`],
                      layoutDependency: O,
                      layoutId: `i7RHtEvL4`,
                      style: { "--framer-paragraph-spacing": `0px` },
                      verticalAlignment: `top`,
                      withExternalLayout: !0,
                    }),
                  ],
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-3kfSO.framer-1qimazs, .framer-3kfSO .framer-1qimazs { display: block; }`,
          `.framer-3kfSO.framer-cvjssa { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-3kfSO .framer-tnqbi2 { flex: none; height: var(--framer-aspect-ratio-supported, 20px); position: relative; width: 20px; }`,
          `.framer-3kfSO .framer-1exru5k { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-3kfSO.framer-v-1j73f2i.framer-cvjssa { cursor: unset; }`,
          ...qe,
        ],
        `framer-3kfSO`
      )),
      (Oc.displayName = `Add to Fav Button Design`),
      (Oc.defaultProps = { height: 20, width: 130 }),
      L(Oc, {
        variant: {
          options: [`hTFp210Gh`, `qhsn1AZfC`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: q.Enum,
        },
        wmiBHVBkg: { title: `Click on Fav`, type: q.EventHandler },
      }),
      I(
        Oc,
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
          ...P(Je),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ac,
  jc,
  Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc,
  Bc,
  Vc = e(() => {
    (f(),
      V(),
      E(),
      r(),
      Nt(),
      kc(),
      (Ac = U(Oc)),
      (jc = U(At)),
      (Mc = `framer-zQ46i`),
      (Nc = { sE6ln_GHC: `framer-v-60j9sf` }),
      (Pc = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (Fc = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (Ic = ({ value: e, children: t }) => {
        let n = s(T),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return y(T.Provider, { value: i, children: t });
      }),
      (Lc = C.create(o)),
      (Rc = ({ click: e, clickOnFav: t, height: n, id: r, productID: i, width: a, ...o }) => ({
        ...o,
        b9CpCLGHS: e ?? o.b9CpCLGHS,
        hpTCa5Ntv: i ?? o.hpTCa5Ntv,
        v1gLl57m8: t ?? o.v1gLl57m8,
      })),
      (zc = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bc = N(
        _(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = se();
          pe();
          let {
              style: c,
              className: l,
              layoutId: d,
              variant: f,
              hpTCa5Ntv: p,
              b9CpCLGHS: m,
              v1gLl57m8: h,
              ...g
            } = Rc(e),
            {
              baseVariant: _,
              classNames: v,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: ee,
              setGestureState: T,
              setVariant: E,
              variants: O,
            } = B({ defaultVariant: `sE6ln_GHC`, ref: r, variant: f, variantClassNames: Nc }),
            k = zc(e, O),
            { activeVariantCallback: A, delay: j } = ge(_),
            M = A(async (...e) => {
              if ((T({ isPressed: !1 }), m && (await m(...e)) === !1)) return !1;
            }),
            N = A(async (...e) => {
              if (h && (await h(...e)) === !1) return !1;
            }),
            P = F(Mc);
          return y(w, {
            id: d ?? a,
            children: y(Lc, {
              animate: O,
              initial: !1,
              children: y(Ic, {
                value: Pc,
                children: y(C.div, {
                  ...g,
                  ...x,
                  className: F(P, `framer-60j9sf`, l, v),
                  "data-framer-name": `Component`,
                  "data-highlight": !0,
                  layoutDependency: k,
                  layoutId: `sE6ln_GHC`,
                  onTap: M,
                  ref: r,
                  style: { ...c },
                  children: y(G, {
                    children: y(D, {
                      className: `framer-2ofrpj-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: k,
                      layoutId: `sPRgBsX8X-container`,
                      nodeId: `sPRgBsX8X`,
                      rendersWithMotion: !0,
                      scopeId: `YSmSkCvC2`,
                      children: y(At, {
                        ActiveState: [
                          y(G, {
                            height: 20,
                            width: `130px`,
                            children: y(D, {
                              className: `framer-14xxr08-container`,
                              "data-framer-name": `Active`,
                              inComponentSlot: !0,
                              layoutDependency: k,
                              layoutId: `xm7Gy5FBd-container`,
                              name: `Active`,
                              nodeId: `xm7Gy5FBd`,
                              rendersWithMotion: !0,
                              scopeId: `YSmSkCvC2`,
                              children: y(Oc, {
                                height: `100%`,
                                id: `xm7Gy5FBd`,
                                layoutId: `xm7Gy5FBd`,
                                name: `Active`,
                                variant: Fc(`qhsn1AZfC`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        DefaultState: [
                          y(G, {
                            height: 20,
                            width: `130px`,
                            children: y(D, {
                              className: `framer-16wgpld-container`,
                              "data-framer-name": `Inactive`,
                              inComponentSlot: !0,
                              layoutDependency: k,
                              layoutId: `R8ssQU80A-container`,
                              name: `Inactive`,
                              nodeId: `R8ssQU80A`,
                              rendersWithMotion: !0,
                              scopeId: `YSmSkCvC2`,
                              children: y(Oc, {
                                height: `100%`,
                                id: `R8ssQU80A`,
                                layoutId: `R8ssQU80A`,
                                name: `Inactive`,
                                variant: Fc(`hTFp210Gh`),
                                width: `100%`,
                                wmiBHVBkg: N,
                              }),
                            }),
                          }),
                        ],
                        height: `100%`,
                        id: `sPRgBsX8X`,
                        layoutId: `sPRgBsX8X`,
                        productId: p,
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
          `.framer-zQ46i.framer-8idwdc, .framer-zQ46i .framer-8idwdc { display: block; }`,
          `.framer-zQ46i.framer-60j9sf { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-zQ46i .framer-2ofrpj-container { flex: none; height: auto; position: relative; width: auto; z-index: 10; }`,
          `.framer-zQ46i .framer-16wgpld-container, .framer-zQ46i .framer-14xxr08-container { height: auto; position: relative; width: auto; z-index: 10; }`,
        ],
        `framer-zQ46i`
      )),
      (Bc.displayName = `Add to Fav Button`),
      (Bc.defaultProps = { height: 20, width: 130 }),
      L(Bc, {
        hpTCa5Ntv: { defaultValue: ``, title: `Product ID`, type: q.String },
        onhpTCa5NtvChange: { changes: `hpTCa5Ntv`, type: q.ChangeHandler },
        b9CpCLGHS: { title: `Click`, type: q.EventHandler },
        v1gLl57m8: { title: `Click on Fav`, type: q.EventHandler },
      }),
      I(Bc, [{ explicitInter: !0, fonts: [] }, ...Ac, ...jc], { supportsExplicitInterCodegen: !0 }),
      (Bc.loader = { load: (e, t) => (t.locale, Promise.allSettled([H(Oc, {}, t)])) }));
  }),
  Hc,
  Uc,
  Wc,
  Gc,
  Kc = e(() => {
    (V(),
      ne.loadFonts([
        `FS;General Sans-variable`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
        `FS;General Sans-variableVF=IndnaHQiIDQ1MA==`,
      ]),
      (Hc = [{ defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` }]),
      (Uc = [
        {
          explicitInter: !0,
          fonts: [
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: Hc,
              weight: `400`,
            },
          ],
        },
      ]),
      (Wc = [
        `.framer-JWUct .framer-styles-preset-uaf0kp:not(.rich-text-wrapper), .framer-JWUct .framer-styles-preset-uaf0kp.rich-text-wrapper h1 { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 32px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 450; --framer-font-variation-axes-bold: "wght" 450; --framer-font-variation-axes-bold-italic: "wght" 450; --framer-font-variation-axes-italic: "wght" 450; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
        `@media (max-width: 1199px) and (min-width: 810px) { .framer-JWUct .framer-styles-preset-uaf0kp:not(.rich-text-wrapper), .framer-JWUct .framer-styles-preset-uaf0kp.rich-text-wrapper h1 { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 30px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 450; --framer-font-variation-axes-bold: "wght" 450; --framer-font-variation-axes-bold-italic: "wght" 450; --framer-font-variation-axes-italic: "wght" 450; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
        `@media (max-width: 809px) and (min-width: 0px) { .framer-JWUct .framer-styles-preset-uaf0kp:not(.rich-text-wrapper), .framer-JWUct .framer-styles-preset-uaf0kp.rich-text-wrapper h1 { --framer-font-family: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-bold-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-family-italic: "General Sans Variable", "General Sans Variable Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: normal; --framer-font-style-italic: normal; --framer-font-variation-axes: "wght" 450; --framer-font-variation-axes-bold: "wght" 450; --framer-font-variation-axes-bold-italic: "wght" 450; --framer-font-variation-axes-italic: "wght" 450; --framer-font-weight: 400; --framer-font-weight-bold: 400; --framer-font-weight-bold-italic: 400; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.03em; --framer-line-height: 1.1em; --framer-paragraph-spacing: 0px; --framer-text-alignment: left; --framer-text-color: var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, #1a1a1a); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }`,
      ]),
      (Gc = `framer-JWUct`));
  }),
  qc,
  Jc,
  Yc,
  Xc,
  Zc,
  Qc,
  $c,
  el,
  tl,
  nl,
  rl,
  il,
  al,
  ol,
  sl,
  cl,
  ll,
  ul,
  dl,
  fl,
  pl,
  ml,
  hl,
  gl,
  _l,
  vl,
  yl,
  bl,
  xl,
  Sl,
  Cl,
  wl,
  Tl,
  El,
  Dl,
  Ol,
  kl,
  Al;
e(() => {
  (f(),
    V(),
    E(),
    r(),
    v(),
    xt(),
    Ie(),
    Ae(),
    kt(),
    yt(),
    Tt(),
    Oe(),
    Cr(),
    St(),
    Br(),
    ei(),
    It(),
    Qa(),
    mo(),
    Zo(),
    hs(),
    Ws(),
    _c(),
    Vc(),
    Ge(),
    $t(),
    lt(),
    Kc(),
    mt(),
    Rt(),
    Jt(),
    cn(),
    (qc = U(Sr)),
    (Jc = U(ke)),
    (Yc = U(Le)),
    (Xc = U(Be)),
    (Zc = U(Xo)),
    (Qc = U(Us)),
    ($c = U(gc)),
    (el = U(Bc)),
    (tl = U(Lt)),
    (nl = U(ms)),
    (rl = U(Za)),
    (il = U(po)),
    (al = U($r)),
    (ol = U(Et)),
    (sl = U(zr)),
    (cl = {
      aOD2tARsU: `(min-width: 1200px)`,
      Qo4Ye1P70: `(max-width: 809.98px)`,
      Y3p36rk5m: `(min-width: 810px) and (max-width: 1199.98px)`,
    }),
    (ll = []),
    (ul = `framer-Wju5q`),
    (dl = {
      aOD2tARsU: `framer-v-x280fk`,
      Qo4Ye1P70: `framer-v-tpquj6`,
      Y3p36rk5m: `framer-v-1gxvyon`,
    }),
    (fl = (e, t, n) => (e && t ? `position` : n)),
    (pl = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (ml = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (hl = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
    (gl = { delay: 0, duration: 0.35, ease: [0.45, 0, 0.55, 1], type: `tween` }),
    (_l = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gl,
      x: 0,
      y: 30,
    }),
    (vl = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: gl,
      x: 0,
      y: 0,
    }),
    (yl = {
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
    (bl = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (xl = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = z({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (Sl = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 40, delay: 0, mass: 1, stiffness: 300, type: `spring` },
      x: 440,
      y: 0,
    }),
    (Cl = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { damping: 40, delay: 0.3, mass: 1, stiffness: 300, type: `spring` },
      x: 0,
      y: 0,
    }),
    (wl = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 440,
      y: 0,
    }),
    (Tl = { Desktop: `aOD2tARsU`, Phone: `Qo4Ye1P70`, Tablet: `Y3p36rk5m` }),
    (El = ({ value: e }) =>
      Ce()
        ? null
        : y(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (Dl = (e) => ({
      from: { alias: `vmJrVFRkR`, data: We, type: `Collection` },
      select: [
        { collection: `vmJrVFRkR`, name: `vJoj3qvid`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `Sn3Ji2zLH`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `UxQ8VtfSI`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `l2PesJvCE`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `eVfKYnlqn`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `Jry1OPs1q`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `StWb4Z9jo`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `K6GheEMTC`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `sGLDCFVI5`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `u8osWsFhh`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `EdlK9s4od`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `k8owwKEx3`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `ibBYHz2ZT`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `jUaWCseQj`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `MzhzcoVnx`, type: `Identifier` },
        { collection: `vmJrVFRkR`, name: `PZahwkbb4`, type: `Identifier` },
      ],
      where: e,
    })),
    (Ol = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: Tl[r.variant] ?? r.variant ?? `aOD2tARsU`,
    })),
    (kl = N(
      _(function (e, t) {
        let n = u(null),
          r = t ?? n,
          a = i(),
          { activeLocale: l, setLocale: f } = se(),
          p = pe(),
          m = W(),
          [h] = me(Dl(te(m, `vmJrVFRkR`))),
          _ = (e) => {
            if (!h) throw new we(`No data matches path variables: ${JSON.stringify(m)}`);
            return h[e];
          },
          {
            style: v,
            className: x,
            layoutId: S,
            variant: E,
            vJoj3qvid: D = _(`vJoj3qvid`) ?? ``,
            Sn3Ji2zLH: A = _(`Sn3Ji2zLH`) ?? ``,
            UxQ8VtfSI: N = _(`UxQ8VtfSI`) ?? ``,
            l2PesJvCE: P = _(`l2PesJvCE`) ?? ``,
            eVfKYnlqn: ne = _(`eVfKYnlqn`),
            Jry1OPs1q: I = _(`Jry1OPs1q`),
            StWb4Z9jo: re = _(`StWb4Z9jo`),
            K6GheEMTC: L = _(`K6GheEMTC`),
            sGLDCFVI5: z = _(`sGLDCFVI5`),
            u8osWsFhh: B = _(`u8osWsFhh`),
            EdlK9s4od: V = _(`EdlK9s4od`) ?? ``,
            k8owwKEx3: H = _(`k8owwKEx3`) ?? ``,
            ibBYHz2ZT: ae = _(`ibBYHz2ZT`) ?? ``,
            jUaWCseQj: oe = _(`jUaWCseQj`) ?? ``,
            MzhzcoVnx: U = _(`MzhzcoVnx`) ?? ``,
            PZahwkbb4: le = _(`PZahwkbb4`) ?? ``,
            ...de
          } = Ol(e);
        M(c(() => sn({ MzhzcoVnx: U, PZahwkbb4: le }, l), [U, le, l]));
        let [K, he] = Te(E, cl, !1),
          { activeVariantCallback: q, delay: _e } = ge(void 0),
          ve = ({ overlay: e }) =>
            q(async (...t) => {
              e.toggle();
            }),
          ye = ({ overlay: e }) =>
            q(async (...t) => {
              e.hide();
            }),
          Se = ({ overlay: e }) =>
            q(async (...t) => {
              e.toggle();
            }),
          Ce = ({ overlay: e }) =>
            q(async (...t) => {
              e.hide();
            }),
          Ee = F(ul, _t, Zt, Gc, pt, Qt, Vt),
          De = s(ue)?.isLayoutTemplate,
          Oe = !!s(T)?.transition?.layout,
          Ae = fl(De, Oe),
          je = hl(H),
          Me = O(`ZdJs013Mb`),
          Ne = ie();
        return (
          xe({}),
          y(ue.Provider, {
            value: {
              activeVariantId: K,
              humanReadableVariantMap: Tl,
              primaryVariantId: `aOD2tARsU`,
              variantClassNames: dl,
            },
            children: b(w, {
              id: S ?? a,
              children: [
                y(El, { value: `html body { background: rgb(0, 0, 0); }` }),
                y(C.div, {
                  ...de,
                  className: F(Ee, `framer-x280fk`, x),
                  ref: r,
                  style: { ...v },
                  children: b(C.main, {
                    className: `framer-7mix9i`,
                    "data-framer-name": `Main`,
                    layout: Ae,
                    children: [
                      b(`section`, {
                        className: `framer-gwu1w3`,
                        "data-framer-name": `Section - Main Content`,
                        children: [
                          b(`section`, {
                            className: `framer-j3uhn1`,
                            "data-framer-name": `Content`,
                            children: [
                              b(`div`, {
                                className: `framer-3wwbjd`,
                                "data-framer-name": `Breadcrumb`,
                                children: [
                                  y(R, {
                                    __fromCanvasComponent: !0,
                                    children: y(o, {
                                      children: y(`p`, {
                                        className: `framer-styles-preset-1ta8qgd`,
                                        "data-styles-preset": `O7___hs0c`,
                                        dir: `auto`,
                                        children: y(be, {
                                          href: { webPageId: `augiA20Il` },
                                          motionChild: !0,
                                          nodeId: `oxZmMavbi`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `vmJrVFRkR`,
                                          smoothScroll: !1,
                                          children: y(C.a, {
                                            className: `framer-styles-preset-1vtrfr3`,
                                            "data-styles-preset": `T34TeK0BY`,
                                            children: `Home  > `,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-13zf5d6`,
                                    "data-framer-name": `Home >`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  y(R, {
                                    __fromCanvasComponent: !0,
                                    children: y(o, {
                                      children: y(`p`, {
                                        className: `framer-styles-preset-1ta8qgd`,
                                        "data-styles-preset": `O7___hs0c`,
                                        dir: `auto`,
                                        children: y(be, {
                                          href: {
                                            pathVariables: { r1NU_IZRR: `all` },
                                            unresolvedPathSlugs: {
                                              r1NU_IZRR: {
                                                collectionId: `r8bgkClkr`,
                                                collectionItemId: `etZVUn8cA`,
                                              },
                                            },
                                            webPageId: `NntD4buY8`,
                                          },
                                          motionChild: !0,
                                          nodeId: `DobR7US3J`,
                                          openInNewTab: !1,
                                          relValues: [],
                                          scopeId: `vmJrVFRkR`,
                                          smoothScroll: !1,
                                          children: y(C.a, {
                                            className: `framer-styles-preset-1vtrfr3`,
                                            "data-styles-preset": `T34TeK0BY`,
                                            children: `Product >`,
                                          }),
                                        }),
                                      }),
                                    }),
                                    className: `framer-1038f70`,
                                    "data-framer-name": `Product >`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                  y(R, {
                                    __fromCanvasComponent: !0,
                                    children: y(o, {
                                      children: y(`p`, {
                                        className: `framer-styles-preset-1ta8qgd`,
                                        "data-styles-preset": `O7___hs0c`,
                                        dir: `auto`,
                                        style: {
                                          "--framer-text-color": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(26, 26, 26))`,
                                        },
                                        children: `Jacket`,
                                      }),
                                    }),
                                    className: `framer-nxu6a2`,
                                    "data-framer-name": `Men’s`,
                                    fonts: [`Inter`],
                                    text: oe,
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                ],
                              }),
                              b(`div`, {
                                className: `framer-z4xvre`,
                                "data-framer-name": `Wrap`,
                                children: [
                                  y(`div`, {
                                    className: `framer-1a7zltt`,
                                    "data-framer-name": `Left`,
                                    children: y(k, {
                                      breakpoint: K,
                                      overrides: {
                                        Qo4Ye1P70: {
                                          height: 360,
                                          width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                                        },
                                        Y3p36rk5m: {
                                          height: 430,
                                          width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 80px)`,
                                        },
                                      },
                                      children: y(G, {
                                        height: 650,
                                        width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 7 + 96px)`,
                                        children: y(ce, {
                                          className: `framer-9tq5e8-container`,
                                          nodeId: `n6omDyE9k`,
                                          scopeId: `vmJrVFRkR`,
                                          children: y(k, {
                                            breakpoint: K,
                                            overrides: {
                                              Qo4Ye1P70: { variant: ml(`Jt10xpoWT`) },
                                              Y3p36rk5m: {
                                                L5VWCFaBd: `Se3Ov2tMC`,
                                                ow53u_e9t: `vEsuTjLLX`,
                                                R6m8zmVV6: `gL0sfPlVu`,
                                                style: { width: `100%` },
                                                TgnFjdak3: `TKCDgqERq`,
                                                variant: ml(`znFsOMeKa`),
                                              },
                                            },
                                            children: y(Sr, {
                                              E_YyIj1Fq: pl(ne),
                                              EGr7oOYYz: pl(B),
                                              height: `100%`,
                                              HJqPRAK0q: ``,
                                              id: `n6omDyE9k`,
                                              L3lHBq7ad: pl(L),
                                              L5VWCFaBd: `nTRKIs1Et`,
                                              layoutId: `n6omDyE9k`,
                                              LPo6c9k2x: pl(I),
                                              ow53u_e9t: `pkXrkKWjI`,
                                              R6m8zmVV6: `xAFTrW5s1`,
                                              style: { height: `100%`, width: `100%` },
                                              TgnFjdak3: `JflN0RPhk`,
                                              variant: ml(`k31Ummoy0`),
                                              width: `100%`,
                                              YjWpMatn8: pl(z),
                                              zw0_cPFar: pl(re),
                                            }),
                                          }),
                                        }),
                                      }),
                                    }),
                                  }),
                                  b(`div`, {
                                    className: `framer-1szs9k1`,
                                    "data-framer-name": `Right`,
                                    children: [
                                      y(`div`, {
                                        className: `framer-1qjzla7`,
                                        "data-framer-name": `Text`,
                                        children: b(`div`, {
                                          className: `framer-1blsept`,
                                          "data-framer-name": `Wrap`,
                                          children: [
                                            b(`div`, {
                                              className: `framer-puapqq`,
                                              "data-framer-name": `Title + Price`,
                                              children: [
                                                y(R, {
                                                  __fromCanvasComponent: !0,
                                                  children: y(o, {
                                                    children: y(`h1`, {
                                                      className: `framer-styles-preset-uaf0kp`,
                                                      "data-styles-preset": `KtkCpXp2U`,
                                                      dir: `auto`,
                                                      children: `Lightweight Jacket`,
                                                    }),
                                                  }),
                                                  className: `framer-10i6ede`,
                                                  "data-framer-name": `Title`,
                                                  fonts: [`Inter`],
                                                  text: D,
                                                  verticalAlignment: `top`,
                                                  withExternalLayout: !0,
                                                }),
                                                b(`div`, {
                                                  className: `framer-14usrih`,
                                                  "data-framer-name": `Price`,
                                                  children: [
                                                    y(G, {
                                                      children: y(ce, {
                                                        className: `framer-1nkofoo-container`,
                                                        isModuleExternal: !0,
                                                        nodeId: `r9xDR06UE`,
                                                        scopeId: `vmJrVFRkR`,
                                                        children: y(k, {
                                                          breakpoint: K,
                                                          overrides: {
                                                            Qo4Ye1P70: {
                                                              regularFont: {
                                                                fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                                fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                                fontSize: `22px`,
                                                                fontStyle: `normal`,
                                                                fontWeight: 500,
                                                                letterSpacing: `0em`,
                                                                lineHeight: `1em`,
                                                              },
                                                              saleFont: {
                                                                fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                                fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                                fontSize: `22px`,
                                                                fontStyle: `normal`,
                                                                fontWeight: 500,
                                                                letterSpacing: `0em`,
                                                                lineHeight: `1em`,
                                                              },
                                                            },
                                                          },
                                                          children: y(ke, {
                                                            canvasPrice: V,
                                                            displayPrice: `minimum price`,
                                                            format: {
                                                              currencyCode: `USD`,
                                                              showCurrency: !1,
                                                              showDecimals: `Always show`,
                                                              showSymbol: !0,
                                                            },
                                                            fromText: ``,
                                                            height: `100%`,
                                                            id: `r9xDR06UE`,
                                                            layoutId: `r9xDR06UE`,
                                                            regularColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                            regularFont: {
                                                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                              fontSize: `24px`,
                                                              fontStyle: `normal`,
                                                              fontWeight: 500,
                                                              letterSpacing: `0em`,
                                                              lineHeight: `1em`,
                                                            },
                                                            saleColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                            saleFont: {
                                                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                              fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                              fontSize: `24px`,
                                                              fontStyle: `normal`,
                                                              fontWeight: 500,
                                                              letterSpacing: `0em`,
                                                              lineHeight: `1em`,
                                                            },
                                                            shopifyProductID: A,
                                                            width: `100%`,
                                                          }),
                                                        }),
                                                      }),
                                                    }),
                                                    je !== !1 &&
                                                      y(G, {
                                                        children: y(ce, {
                                                          className: `framer-ya2lug-container`,
                                                          isModuleExternal: !0,
                                                          nodeId: `QSX3IlHF8`,
                                                          scopeId: `vmJrVFRkR`,
                                                          children: y(k, {
                                                            breakpoint: K,
                                                            overrides: {
                                                              Qo4Ye1P70: {
                                                                font: {
                                                                  fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                                  fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                                  fontSize: `22px`,
                                                                  fontStyle: `normal`,
                                                                  fontWeight: 500,
                                                                  letterSpacing: `0em`,
                                                                  lineHeight: `1em`,
                                                                  textAlign: `left`,
                                                                },
                                                              },
                                                            },
                                                            children: y(Le, {
                                                              canvasPrice: H,
                                                              color: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                                              compareAtPrefix: ``,
                                                              font: {
                                                                fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                                fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                                                fontSize: `24px`,
                                                                fontStyle: `normal`,
                                                                fontWeight: 500,
                                                                letterSpacing: `0em`,
                                                                lineHeight: `1em`,
                                                                textAlign: `left`,
                                                              },
                                                              format: {
                                                                currencyCode: `USD`,
                                                                showCurrency: !1,
                                                                showDecimals: `Always show`,
                                                                showSymbol: !0,
                                                              },
                                                              height: `100%`,
                                                              id: `QSX3IlHF8`,
                                                              layoutId: `QSX3IlHF8`,
                                                              shopifyProductID: A,
                                                              strikethrough: !0,
                                                              strikethroughColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                                              strikethroughSize: 1.9,
                                                              width: `100%`,
                                                            }),
                                                          }),
                                                        }),
                                                      }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            y(R, {
                                              __fromCanvasComponent: !0,
                                              children: ae,
                                              className: `framer-rq9w8k`,
                                              "data-framer-name": `Description`,
                                              fonts: [`FS;General Sans-variable`],
                                              stylesPresetsClassNames: {
                                                blockquote: `framer-styles-preset-1tinack`,
                                                code: `framer-styles-preset-1mzs6pv`,
                                                p: `framer-styles-preset-hhy7lj`,
                                                table: `framer-styles-preset-y6r4i3`,
                                              },
                                              verticalAlignment: `top`,
                                              withExternalLayout: !0,
                                            }),
                                          ],
                                        }),
                                      }),
                                      b(`div`, {
                                        className: `framer-1o7kw4i`,
                                        "data-framer-name": `Variant + Button`,
                                        children: [
                                          y(G, {
                                            children: y(ce, {
                                              className: `framer-kgncqv-container`,
                                              isModuleExternal: !0,
                                              nodeId: `M_Rj8fKlx`,
                                              scopeId: `vmJrVFRkR`,
                                              children: y(k, {
                                                breakpoint: K,
                                                overrides: {
                                                  Qo4Ye1P70: {
                                                    buttonConfigs: {
                                                      columnCount: 6,
                                                      columns: `fixed`,
                                                      direction: `horizontal`,
                                                      gap: 6,
                                                      gapY: 6,
                                                      gridWidth: 100,
                                                      hovered: {
                                                        background: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                                        border: {
                                                          borderColor: `rgb(0, 0, 0)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                        color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                        font: {
                                                          fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                          fontSize: `15px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 400,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        textTransform: `None`,
                                                      },
                                                      layout: `grid`,
                                                      maxColumns: 4,
                                                      outOfStock: {
                                                        background: `rgba(0, 0, 0, 0.08)`,
                                                        border: {
                                                          borderColor: `rgb(255, 255, 255)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                        color: `rgba(0, 0, 0, 0.4)`,
                                                        font: {
                                                          fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                          fontSize: `15px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 500,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        preview: !1,
                                                        strike: {
                                                          color: `rgba(0, 0, 0, 0.16)`,
                                                          direction: `diagonal-down`,
                                                          line: !1,
                                                          size: `container`,
                                                        },
                                                        textTransform: `None`,
                                                      },
                                                      padding: `6px 22px 6px 22px`,
                                                      radius: `200px`,
                                                      selected: {
                                                        background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                                        border: {
                                                          borderColor: `rgb(26, 26, 26)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                        color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                        font: {
                                                          fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                          fontSize: `15px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 500,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        textTransform: `None`,
                                                      },
                                                      unselected: {
                                                        background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                                        border: {
                                                          borderColor: `rgb(227, 227, 227)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                        color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                        font: {
                                                          fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                          fontSize: `15px`,
                                                          fontStyle: `normal`,
                                                          fontWeight: 500,
                                                          letterSpacing: `0em`,
                                                          lineHeight: `1em`,
                                                        },
                                                        textTransform: `None`,
                                                      },
                                                      width: !1,
                                                    },
                                                    swatches: {
                                                      colorEnabled: !0,
                                                      gap: 4,
                                                      height: 32,
                                                      hovered: {
                                                        background: `rgb(255, 255, 255)`,
                                                        border: {
                                                          borderColor: `rgb(130, 130, 130)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                      },
                                                      outOfStock: {
                                                        background: `rgba(255, 255, 255, 0)`,
                                                        border: {
                                                          borderColor: `rgba(0, 0, 0, 0.09)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                        opacity: 0.5,
                                                        strike: {
                                                          color: `rgba(0, 0, 0, 0.16)`,
                                                          direction: `diagonal-down`,
                                                          line: !0,
                                                        },
                                                      },
                                                      padding: `2px`,
                                                      radius: `50%`,
                                                      selected: {
                                                        background: `rgb(255, 255, 255)`,
                                                        border: {
                                                          borderColor: `rgb(130, 130, 130)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                      },
                                                      unselected: {
                                                        background: `rgba(255, 255, 255, 0)`,
                                                        border: {
                                                          borderColor: `rgba(0, 0, 0, 0.09)`,
                                                          borderStyle: `solid`,
                                                          borderWidth: 1,
                                                          bottom: 1,
                                                          isMixed: !1,
                                                          left: 1,
                                                          right: 1,
                                                          top: 1,
                                                        },
                                                      },
                                                      width: 32,
                                                    },
                                                    titleConfigs: {
                                                      color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                      display: `Select {{Option}}`,
                                                      font: {
                                                        fontFamily: `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                                        fontSize: `14px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 400,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      gap: 8,
                                                      textTransform: `None`,
                                                      visible: !0,
                                                    },
                                                  },
                                                },
                                                children: y(Be, {
                                                  behaviorConfigs: {
                                                    action: `Update Active`,
                                                    autoSelectFirst: !0,
                                                    filterVariants: {
                                                      variantGroups: `all`,
                                                      variantTitles: [],
                                                    },
                                                    productPage: !0,
                                                    selectOutOfStock: !1,
                                                    showSingleVariants: !1,
                                                    triggerCart: !0,
                                                  },
                                                  buttonConfigs: {
                                                    columnCount: 6,
                                                    columns: `fixed`,
                                                    direction: `horizontal`,
                                                    gap: 6,
                                                    gapY: 6,
                                                    gridWidth: 100,
                                                    hovered: {
                                                      background: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                                      border: {
                                                        borderColor: `rgb(0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                      font: {
                                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                        fontSize: `15px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 400,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      textTransform: `None`,
                                                    },
                                                    layout: `grid`,
                                                    maxColumns: 4,
                                                    outOfStock: {
                                                      background: `rgba(0, 0, 0, 0.08)`,
                                                      border: {
                                                        borderColor: `rgb(255, 255, 255)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `rgba(0, 0, 0, 0.4)`,
                                                      font: {
                                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                        fontSize: `15px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      preview: !1,
                                                      strike: {
                                                        color: `rgba(0, 0, 0, 0.16)`,
                                                        direction: `diagonal-down`,
                                                        line: !1,
                                                        size: `container`,
                                                      },
                                                      textTransform: `None`,
                                                    },
                                                    padding: `10px 22px 10px 22px`,
                                                    radius: `200px`,
                                                    selected: {
                                                      background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                                      border: {
                                                        borderColor: `rgb(26, 26, 26)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                      font: {
                                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                        fontSize: `15px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      textTransform: `None`,
                                                    },
                                                    unselected: {
                                                      background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                                                      border: {
                                                        borderColor: `rgb(227, 227, 227)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                      font: {
                                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                                        fontSize: `15px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 500,
                                                        letterSpacing: `0em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      textTransform: `None`,
                                                    },
                                                    width: !1,
                                                  },
                                                  colors: [
                                                    { hex: `rgb(36, 35, 34)`, name: `Black` },
                                                    { hex: `rgb(206, 202, 199)`, name: `Gray` },
                                                    {
                                                      hex: `rgb(224, 211, 184)`,
                                                      name: `Stone Taupe`,
                                                    },
                                                    {
                                                      hex: `rgb(128, 128, 128)`,
                                                      name: `Charcoal Gray`,
                                                    },
                                                    { hex: `rgb(255, 138, 0)`, name: `Orange` },
                                                    {
                                                      hex: `rgb(137, 200, 158)`,
                                                      name: `Sage Green`,
                                                    },
                                                    { hex: `rgb(70, 82, 119)`, name: `Steel Blue` },
                                                    { hex: `rgb(228, 186, 237)`, name: `Lavender` },
                                                    { hex: `rgb(28, 51, 40)`, name: `Dark Green` },
                                                    { hex: `rgb(255, 192, 203)`, name: `Pink` },
                                                    { hex: `rgb(255, 229, 0)`, name: `Yellow` },
                                                    { hex: `rgb(255, 255, 255)`, name: `White` },
                                                    { hex: `rgb(246, 31, 31)`, name: `Red` },
                                                    { hex: `rgb(5, 170, 61)`, name: `Green` },
                                                    { hex: `rgb(154, 86, 48)`, name: `Brown` },
                                                    { hex: `rgb(0, 91, 211)`, name: `Blue` },
                                                    { hex: `rgb(234, 216, 171)`, name: `Beige` },
                                                    { hex: `rgb(40, 32, 153)`, name: `Navy` },
                                                  ],
                                                  colorTitles: [`Color`],
                                                  containerConfigs: {
                                                    background: `rgba(255, 255, 255, 0)`,
                                                    direction: `vertical`,
                                                    gap: 24,
                                                    gap2: 12,
                                                    padding: `0px`,
                                                    radius: `0px`,
                                                  },
                                                  dropdownConfigs: {
                                                    focus: {
                                                      color: `rgb(0, 153, 255)`,
                                                      offset: 2,
                                                      width: 2,
                                                    },
                                                    font: {},
                                                    hover: {
                                                      background: `rgba(0, 0, 0, 0.04)`,
                                                      border: {
                                                        borderColor: `rgb(0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `rgb(0, 0, 0)`,
                                                    },
                                                    icon: {
                                                      color: `rgb(0, 0, 0)`,
                                                      size: 12,
                                                      type: `default`,
                                                      weight: 2,
                                                    },
                                                    padding: `16px 16px 16px 16px`,
                                                    radius: `4px`,
                                                    selected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.16)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `rgb(0, 0, 0)`,
                                                    },
                                                    textTransform: `None`,
                                                    unselected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.08)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      color: `rgba(0, 0, 0, 0.48)`,
                                                      text: `Select {{variant}}`,
                                                    },
                                                  },
                                                  height: `100%`,
                                                  id: `M_Rj8fKlx`,
                                                  images: {
                                                    imageChange: !0,
                                                    imageTrigger: `Gallery`,
                                                    offsetY: 0,
                                                  },
                                                  imageSwatches: {
                                                    image: !1,
                                                    imageGap: 8,
                                                    imageHeight: 40,
                                                    imageHovered: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.16)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageOutOfStock: {
                                                      background: `rgba(255, 255, 255, 0)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      opacity: 0.5,
                                                      strike: {
                                                        color: `rgba(0, 0, 0, 0.16)`,
                                                        direction: `diagonal-down`,
                                                        line: !1,
                                                      },
                                                    },
                                                    imagePadding: `2px`,
                                                    imageRadius: `50%`,
                                                    imageSelected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageStyles: `inherit`,
                                                    imageUnselected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(255, 255, 255)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageWidth: 40,
                                                  },
                                                  imageTitles: [],
                                                  layoutId: `M_Rj8fKlx`,
                                                  selectedConfigs: {
                                                    color: `rgb(0, 0, 0)`,
                                                    emptyText: `Select {{Option Value}}`,
                                                    emptyVisible: !0,
                                                    font: {},
                                                    gap: 8,
                                                    textTransform: `None`,
                                                    visible: !1,
                                                  },
                                                  shopifyProductID: A,
                                                  style: `Buttons`,
                                                  swatches: {
                                                    colorEnabled: !0,
                                                    gap: 4,
                                                    height: 36,
                                                    hovered: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(130, 130, 130)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    outOfStock: {
                                                      background: `rgba(255, 255, 255, 0)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.09)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      opacity: 0.5,
                                                      strike: {
                                                        color: `rgba(0, 0, 0, 0.16)`,
                                                        direction: `diagonal-down`,
                                                        line: !0,
                                                      },
                                                    },
                                                    padding: `2px`,
                                                    radius: `50%`,
                                                    selected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(130, 130, 130)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    unselected: {
                                                      background: `rgba(255, 255, 255, 0)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.09)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    width: 36,
                                                  },
                                                  swatchImages: [],
                                                  titleConfigs: {
                                                    color: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                                    display: `Select {{Option}}`,
                                                    font: {
                                                      fontFamily: `"General Sans Variable", "General Sans Variable Placeholder", sans-serif`,
                                                      fontSize: `15px`,
                                                      fontStyle: `normal`,
                                                      fontWeight: 400,
                                                      letterSpacing: `0em`,
                                                      lineHeight: `1em`,
                                                    },
                                                    gap: 8,
                                                    textTransform: `None`,
                                                    visible: !0,
                                                  },
                                                  variantImageIds: P,
                                                  variantImages: {
                                                    image: !1,
                                                    imageGap: 8,
                                                    imageHeight: 40,
                                                    imageHovered: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0.16)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageOutOfStock: {
                                                      background: `rgba(255, 255, 255, 0)`,
                                                      border: {
                                                        borderColor: `rgba(0, 0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                      opacity: 0.5,
                                                      strike: {
                                                        color: `rgba(0, 0, 0, 0.16)`,
                                                        direction: `diagonal-down`,
                                                        line: !1,
                                                      },
                                                    },
                                                    imagePadding: `2px`,
                                                    imageRadius: `50%`,
                                                    imageSelected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(0, 0, 0)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageStyles: `inherit`,
                                                    imageUnselected: {
                                                      background: `rgb(255, 255, 255)`,
                                                      border: {
                                                        borderColor: `rgb(255, 255, 255)`,
                                                        borderStyle: `solid`,
                                                        borderWidth: 1,
                                                        bottom: 1,
                                                        isMixed: !1,
                                                        left: 1,
                                                        right: 1,
                                                        top: 1,
                                                      },
                                                    },
                                                    imageWidth: 40,
                                                  },
                                                  variantImageTitles: [],
                                                  variants: N,
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          b(`div`, {
                                            className: `framer-1rajvc6`,
                                            "data-framer-name": `Quantity Selector`,
                                            children: [
                                              y(R, {
                                                __fromCanvasComponent: !0,
                                                children: y(o, {
                                                  children: y(`p`, {
                                                    className: `framer-styles-preset-hhy7lj`,
                                                    "data-styles-preset": `jqlnmWM57`,
                                                    dir: `auto`,
                                                    children: `Quantity`,
                                                  }),
                                                }),
                                                className: `framer-1jpdryl`,
                                                "data-framer-name": `Quantity`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                              y(G, {
                                                height: 36,
                                                children: y(ce, {
                                                  className: `framer-jx5kyx-container`,
                                                  nodeId: `kYw3t5edf`,
                                                  scopeId: `vmJrVFRkR`,
                                                  children: y(Xo, {
                                                    bVhYNmEzi: A,
                                                    height: `100%`,
                                                    id: `kYw3t5edf`,
                                                    layoutId: `kYw3t5edf`,
                                                    width: `100%`,
                                                  }),
                                                }),
                                              }),
                                            ],
                                          }),
                                          b(`div`, {
                                            className: `framer-1h5kqb9`,
                                            "data-framer-name": `Wrap`,
                                            children: [
                                              b(`div`, {
                                                className: `framer-9yzgy1`,
                                                "data-framer-name": `ATC + Buy Buttons`,
                                                children: [
                                                  y(k, {
                                                    breakpoint: K,
                                                    overrides: {
                                                      Qo4Ye1P70: {
                                                        height: 44,
                                                        width: `min(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 48px) / 2, 1px), 166px)`,
                                                      },
                                                      Y3p36rk5m: {
                                                        height: 46,
                                                        width: `min(max((max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 72px) / 2, 1px), 166px)`,
                                                      },
                                                    },
                                                    children: y(G, {
                                                      height: 48,
                                                      width: `min(max((max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 5 + 24px) / 2, 1px), 166px)`,
                                                      children: y(ce, {
                                                        className: `framer-6nz9z5-container`,
                                                        nodeId: `g1zJDw7B2`,
                                                        scopeId: `vmJrVFRkR`,
                                                        children: y(Us, {
                                                          height: `100%`,
                                                          id: `g1zJDw7B2`,
                                                          layoutId: `g1zJDw7B2`,
                                                          Nt_kadLvR: A,
                                                          style: {
                                                            height: `100%`,
                                                            maxWidth: `100%`,
                                                            width: `100%`,
                                                          },
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                  y(k, {
                                                    breakpoint: K,
                                                    overrides: {
                                                      Qo4Ye1P70: {
                                                        height: 44,
                                                        width: `min(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 48px) / 2, 1px), 166px)`,
                                                      },
                                                      Y3p36rk5m: {
                                                        height: 46,
                                                        width: `min(max((max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 72px) / 2, 1px), 166px)`,
                                                      },
                                                    },
                                                    children: y(G, {
                                                      height: 48,
                                                      width: `min(max((max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 5 + 24px) / 2, 1px), 166px)`,
                                                      children: y(ce, {
                                                        className: `framer-1qncb9v-container`,
                                                        nodeId: `aN60wGEK0`,
                                                        scopeId: `vmJrVFRkR`,
                                                        children: y(gc, {
                                                          height: `100%`,
                                                          id: `aN60wGEK0`,
                                                          layoutId: `aN60wGEK0`,
                                                          Nt_kadLvR: A,
                                                          style: {
                                                            height: `100%`,
                                                            maxWidth: `100%`,
                                                            width: `100%`,
                                                          },
                                                          width: `100%`,
                                                        }),
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                              b(`div`, {
                                                className: `framer-cdut2s`,
                                                "data-framer-name": `Bottom`,
                                                children: [
                                                  y(xl, {
                                                    blockDocumentScrolling: !1,
                                                    dismissWithEsc: !0,
                                                    children: (e) =>
                                                      y(g, {
                                                        children: y(G, {
                                                          height: 20,
                                                          children: b(ce, {
                                                            className: `framer-7kyywd-container`,
                                                            id: `7kyywd`,
                                                            nodeId: `zIV6GhGzN`,
                                                            scopeId: `vmJrVFRkR`,
                                                            children: [
                                                              y(Bc, {
                                                                height: `100%`,
                                                                hpTCa5Ntv: A,
                                                                id: `zIV6GhGzN`,
                                                                layoutId: `zIV6GhGzN`,
                                                                v1gLl57m8: ve({ overlay: e }),
                                                                width: `100%`,
                                                              }),
                                                              y(ee, {
                                                                children:
                                                                  e.visible &&
                                                                  y(g, {
                                                                    children: d(
                                                                      y(fe, {
                                                                        triggerId: `7kyywd`,
                                                                        children: b(j, {
                                                                          children: [
                                                                            y(
                                                                              C.div,
                                                                              {
                                                                                animate: {
                                                                                  opacity: 1,
                                                                                  transition: {
                                                                                    delay: 0,
                                                                                    duration: 0.34,
                                                                                    ease: [
                                                                                      0.45, 0, 0.55,
                                                                                      1,
                                                                                    ],
                                                                                    type: `tween`,
                                                                                  },
                                                                                },
                                                                                className: F(
                                                                                  Ee,
                                                                                  `framer-1bt9zre`
                                                                                ),
                                                                                "data-framer-portal-id": `7kyywd`,
                                                                                exit: {
                                                                                  opacity: 0,
                                                                                  transition: {
                                                                                    delay: 0,
                                                                                    duration: 0.34,
                                                                                    ease: [
                                                                                      0.45, 0, 0.55,
                                                                                      1,
                                                                                    ],
                                                                                    type: `tween`,
                                                                                  },
                                                                                },
                                                                                initial: {
                                                                                  opacity: 0,
                                                                                },
                                                                                onTap: () =>
                                                                                  e.hide(),
                                                                              },
                                                                              `eTmjS_AHa`
                                                                            ),
                                                                            y(C.div, {
                                                                              className: F(
                                                                                Ee,
                                                                                `framer-1myk1aq`
                                                                              ),
                                                                              "data-framer-name": `Wrap`,
                                                                              "data-framer-portal-id": `7kyywd`,
                                                                              children: y(G, {
                                                                                width: `400px`,
                                                                                children: y(ce, {
                                                                                  animate: vl,
                                                                                  className: `framer-asfxrw-container`,
                                                                                  exit: _l,
                                                                                  inComponentSlot:
                                                                                    !0,
                                                                                  initial: yl,
                                                                                  nodeId: `um22ui114`,
                                                                                  rendersWithMotion:
                                                                                    !0,
                                                                                  scopeId: `vmJrVFRkR`,
                                                                                  children: y(Lt, {
                                                                                    HblJYYmXZ: ye({
                                                                                      overlay: e,
                                                                                    }),
                                                                                    height: `100%`,
                                                                                    id: `um22ui114`,
                                                                                    layoutId: `um22ui114`,
                                                                                    style: {
                                                                                      width: `100%`,
                                                                                    },
                                                                                    width: `100%`,
                                                                                  }),
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          ],
                                                                        }),
                                                                      }),
                                                                      bl()
                                                                    ),
                                                                  }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                  y(xl, {
                                                    dismissWithEsc: !0,
                                                    children: (e) =>
                                                      y(g, {
                                                        children: y(G, {
                                                          height: 20,
                                                          children: b(ce, {
                                                            className: `framer-17mj5zt-container`,
                                                            id: `17mj5zt`,
                                                            nodeId: `G8n3TKOPv`,
                                                            scopeId: `vmJrVFRkR`,
                                                            children: [
                                                              y(ms, {
                                                                height: `100%`,
                                                                id: `G8n3TKOPv`,
                                                                layoutId: `G8n3TKOPv`,
                                                                width: `100%`,
                                                                XBNnZPHxM: Se({ overlay: e }),
                                                              }),
                                                              y(ee, {
                                                                children:
                                                                  e.visible &&
                                                                  y(g, {
                                                                    children: d(
                                                                      y(fe, {
                                                                        triggerId: `17mj5zt`,
                                                                        children: b(j, {
                                                                          children: [
                                                                            y(
                                                                              C.div,
                                                                              {
                                                                                animate: {
                                                                                  opacity: 1,
                                                                                  transition: {
                                                                                    damping: 40,
                                                                                    delay: 0,
                                                                                    mass: 1,
                                                                                    stiffness: 300,
                                                                                    type: `spring`,
                                                                                  },
                                                                                },
                                                                                className: F(
                                                                                  Ee,
                                                                                  `framer-1prgqih`
                                                                                ),
                                                                                "data-framer-name": `Size Guide Popup`,
                                                                                "data-framer-portal-id": `17mj5zt`,
                                                                                exit: {
                                                                                  opacity: 0,
                                                                                  transition: {
                                                                                    damping: 40,
                                                                                    delay: 0.3,
                                                                                    mass: 1,
                                                                                    stiffness: 300,
                                                                                    type: `spring`,
                                                                                  },
                                                                                },
                                                                                initial: {
                                                                                  opacity: 0,
                                                                                },
                                                                                onTap: () =>
                                                                                  e.hide(),
                                                                              },
                                                                              `AknU5ciA6`
                                                                            ),
                                                                            y(G, {
                                                                              width: `100vw`,
                                                                              children: y(ce, {
                                                                                animate: Cl,
                                                                                className: F(
                                                                                  Ee,
                                                                                  `framer-lwklvo-container`
                                                                                ),
                                                                                "data-framer-portal-id": `17mj5zt`,
                                                                                exit: Sl,
                                                                                inComponentSlot: !0,
                                                                                initial: wl,
                                                                                nodeId: `sHejWdWYh`,
                                                                                rendersWithMotion:
                                                                                  !0,
                                                                                scopeId: `vmJrVFRkR`,
                                                                                children: y(Za, {
                                                                                  ApsWRZchW: Ce({
                                                                                    overlay: e,
                                                                                  }),
                                                                                  height: `100%`,
                                                                                  id: `sHejWdWYh`,
                                                                                  layoutId: `sHejWdWYh`,
                                                                                  style: {
                                                                                    height: `100%`,
                                                                                    width: `100%`,
                                                                                  },
                                                                                  width: `100%`,
                                                                                }),
                                                                              }),
                                                                            }),
                                                                          ],
                                                                        }),
                                                                      }),
                                                                      bl()
                                                                    ),
                                                                  }),
                                                              }),
                                                            ],
                                                          }),
                                                        }),
                                                      }),
                                                  }),
                                                  y(G, {
                                                    height: 25,
                                                    children: y(ce, {
                                                      className: `framer-1s87obl-container`,
                                                      nodeId: `gpBS9u3bV`,
                                                      scopeId: `vmJrVFRkR`,
                                                      children: y(po, {
                                                        C4U1l_gbD: A,
                                                        height: `100%`,
                                                        id: `gpBS9u3bV`,
                                                        layoutId: `gpBS9u3bV`,
                                                        width: `100%`,
                                                      }),
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                      b(`div`, {
                                        className: `framer-1lf7r1l`,
                                        "data-framer-name": `FAQ Question`,
                                        children: [
                                          y(k, {
                                            breakpoint: K,
                                            overrides: {
                                              Qo4Ye1P70: {
                                                width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                                              },
                                              Y3p36rk5m: {
                                                width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 80px)`,
                                              },
                                            },
                                            children: y(G, {
                                              height: 115,
                                              width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 5 + 32px)`,
                                              children: y(ce, {
                                                className: `framer-1rm08to-container`,
                                                nodeId: `VGwpdbvuz`,
                                                scopeId: `vmJrVFRkR`,
                                                children: y($r, {
                                                  CnlZi3y5a: `We offer reliable worldwide shipping on eligible orders, making it easier to shop your favorite styles no matter where you are located.`,
                                                  do45skV7Q: `Free Shipping Worldwide`,
                                                  height: `100%`,
                                                  id: `VGwpdbvuz`,
                                                  layoutId: `VGwpdbvuz`,
                                                  style: { width: `100%` },
                                                  variant: ml(`wSm9XKsL5`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          y(k, {
                                            breakpoint: K,
                                            overrides: {
                                              Qo4Ye1P70: {
                                                width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                                              },
                                              Y3p36rk5m: {
                                                width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 80px)`,
                                              },
                                            },
                                            children: y(G, {
                                              height: 115,
                                              width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 5 + 32px)`,
                                              children: y(ce, {
                                                className: `framer-pdwazk-container`,
                                                nodeId: `xvQnsGtO_`,
                                                scopeId: `vmJrVFRkR`,
                                                children: y($r, {
                                                  CnlZi3y5a: `If your purchase isn't quite right, you can request a return or exchange within our return period, subject to our policy terms.`,
                                                  do45skV7Q: `Easy Returns & Exchanges`,
                                                  height: `100%`,
                                                  id: `xvQnsGtO_`,
                                                  layoutId: `xvQnsGtO_`,
                                                  style: { width: `100%` },
                                                  variant: ml(`wSm9XKsL5`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                          y(k, {
                                            breakpoint: K,
                                            overrides: {
                                              Qo4Ye1P70: {
                                                width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                                              },
                                              Y3p36rk5m: {
                                                width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 236px) / 12, 1px) * 6 + 80px)`,
                                              },
                                            },
                                            children: y(G, {
                                              height: 115,
                                              width: `calc(max((min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 276px) / 12, 1px) * 5 + 32px)`,
                                              children: y(ce, {
                                                className: `framer-xulf1h-container`,
                                                nodeId: `Q_nrt_gny`,
                                                scopeId: `vmJrVFRkR`,
                                                children: y($r, {
                                                  CnlZi3y5a: `Every piece is thoughtfully crafted using carefully selected materials, delivering lasting comfort, durability, and a premium feel for everyday wear.`,
                                                  do45skV7Q: `Premium Quality Materials`,
                                                  height: `100%`,
                                                  id: `Q_nrt_gny`,
                                                  layoutId: `Q_nrt_gny`,
                                                  style: { width: `100%` },
                                                  variant: ml(`wSm9XKsL5`),
                                                  width: `100%`,
                                                }),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          y(`div`, {
                            className: `framer-1456qpo`,
                            "data-framer-name": `Nav Trigger`,
                            id: Me,
                            ref: Ne(Me),
                          }),
                        ],
                      }),
                      y(`section`, {
                        className: `framer-1d66apx`,
                        "data-framer-name": `Section - USP`,
                        children: y(k, {
                          breakpoint: K,
                          overrides: {
                            Qo4Ye1P70: {
                              width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                            },
                            Y3p36rk5m: {
                              width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 60px)`,
                            },
                          },
                          children: y(G, {
                            height: 321,
                            width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 100px)`,
                            children: y(ce, {
                              className: `framer-13vp2ac-container`,
                              nodeId: `d1KkFJD38`,
                              scopeId: `vmJrVFRkR`,
                              children: y(k, {
                                breakpoint: K,
                                overrides: {
                                  Qo4Ye1P70: { variant: ml(`n9TzDIhO2`) },
                                  Y3p36rk5m: { variant: ml(`F5sb8i3JD`) },
                                },
                                children: y(Et, {
                                  DfcF0tAQO: `Free 30 Days Returns`,
                                  FoWaAjIxI: `We ship to over 100 countries with fast and reliable delivery. Track your order and get it wherever you are.`,
                                  Fw5a1sfJT: `Secure Payments`,
                                  hC6AEh6Cb: `Sustainable Cloths`,
                                  height: `100%`,
                                  id: `d1KkFJD38`,
                                  iOL2_YcPF: bt,
                                  layoutId: `d1KkFJD38`,
                                  mrZof3VPr: Dt,
                                  style: { width: `100%` },
                                  TDgn8aGF5: Ct,
                                  TJcUIYvxP: `Shop With Confidence`,
                                  UoO6ML1Xo: `Shop safely with encrypted checkout. We support all major payment methods for your convenience.`,
                                  variant: ml(`R3_z1VI2c`),
                                  vhRGHsvJ0: `Not satisfied? Return within 30 days for a full refund. No questions asked, totally hassle-free.`,
                                  width: `100%`,
                                  wsw_E_Efx: `Worldwide Shipping`,
                                  WYgbEzxeh: vt,
                                  y0w8cG1_S: `Every piece is made from responsibly sourced materials. Wear with purpose, live with less impact.`,
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                      y(`section`, {
                        className: `framer-1n0qlw5`,
                        "data-framer-name": `Section - Related Prodct`,
                        children: b(`section`, {
                          className: `framer-1na3hcx`,
                          "data-framer-name": `Content`,
                          children: [
                            b(`div`, {
                              className: `framer-x6pogm`,
                              "data-framer-name": `Headline Wrap`,
                              children: [
                                y(k, {
                                  breakpoint: K,
                                  overrides: {
                                    Qo4Ye1P70: {
                                      children: y(o, {
                                        children: y(`h2`, {
                                          className: `framer-styles-preset-1lt80ed`,
                                          "data-styles-preset": `OrFaou4jp`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `You May Also Like`,
                                        }),
                                      }),
                                    },
                                    Y3p36rk5m: {
                                      children: y(o, {
                                        children: y(`h2`, {
                                          className: `framer-styles-preset-1lt80ed`,
                                          "data-styles-preset": `OrFaou4jp`,
                                          dir: `auto`,
                                          style: { "--framer-text-alignment": `start` },
                                          children: `You May Also Like`,
                                        }),
                                      }),
                                    },
                                  },
                                  children: y(R, {
                                    __fromCanvasComponent: !0,
                                    children: y(o, {
                                      children: y(`h2`, {
                                        className: `framer-styles-preset-1lt80ed`,
                                        "data-styles-preset": `OrFaou4jp`,
                                        dir: `auto`,
                                        children: `You May Also Like`,
                                      }),
                                    }),
                                    className: `framer-14m0gv8`,
                                    "data-framer-name": `Headline`,
                                    fonts: [`Inter`],
                                    verticalAlignment: `top`,
                                    withExternalLayout: !0,
                                  }),
                                }),
                                y(R, {
                                  __fromCanvasComponent: !0,
                                  children: y(o, {
                                    children: y(`p`, {
                                      className: `framer-styles-preset-1ta8qgd`,
                                      "data-styles-preset": `O7___hs0c`,
                                      dir: `auto`,
                                      children: `Discover more styles curated just for you based on your interests and recent favorites.`,
                                    }),
                                  }),
                                  className: `framer-pmlkb6`,
                                  "data-framer-name": `Text`,
                                  fonts: [`Inter`],
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                            y(k, {
                              breakpoint: K,
                              overrides: {
                                Qo4Ye1P70: {
                                  width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 40px)`,
                                },
                                Y3p36rk5m: {
                                  width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 60px)`,
                                },
                              },
                              children: y(G, {
                                height: 390,
                                width: `calc(min(min(${p?.width || `100vw`} - 40px, 1600px), 1360px) - 100px)`,
                                children: y(ce, {
                                  className: `framer-ezg1z-container`,
                                  nodeId: `kz1FyAU7H`,
                                  scopeId: `vmJrVFRkR`,
                                  children: y(k, {
                                    breakpoint: K,
                                    overrides: {
                                      Qo4Ye1P70: {
                                        bbPhpFyz4: `0px 0px 60px 0px`,
                                        dz4MSQ8fY: 38,
                                        hGOjA9tFf: `Bottom Center`,
                                        TtWh_V9f5: 1,
                                        vGsIgQJfN: 55,
                                      },
                                      Y3p36rk5m: { TtWh_V9f5: 2 },
                                    },
                                    children: y(zr, {
                                      bbPhpFyz4: `56px 0px 0px 0px`,
                                      dz4MSQ8fY: 34,
                                      FzNt31JRU: A,
                                      height: `100%`,
                                      hGOjA9tFf: `Top Right`,
                                      id: `kz1FyAU7H`,
                                      layoutId: `kz1FyAU7H`,
                                      OKWNOnfQH: 0,
                                      style: { width: `100%` },
                                      TtWh_V9f5: 4,
                                      vGsIgQJfN: -55,
                                      width: `100%`,
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
                }),
                y(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-Wju5q.framer-16vwzvl, .framer-Wju5q .framer-16vwzvl { display: block; }`,
        `.framer-Wju5q.framer-x280fk { align-content: center; align-items: center; background-color: #000000; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
        `.framer-Wju5q .framer-7mix9i { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-gwu1w3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 148px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-j3uhn1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-3wwbjd { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-13zf5d6, .framer-Wju5q .framer-1038f70, .framer-Wju5q .framer-nxu6a2, .framer-Wju5q .framer-1jpdryl, .framer-Wju5q .framer-14m0gv8 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
        `.framer-Wju5q .framer-z4xvre { display: grid; flex: none; gap: 16px 16px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(12, minmax(1px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1a7zltt { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; grid-column: span 7; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: sticky; top: 144px; width: 100%; z-index: 1; }`,
        `.framer-Wju5q .framer-9tq5e8-container { flex: none; height: 650px; position: relative; width: 100%; z-index: 1; }`,
        `.framer-Wju5q .framer-1szs9k1 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; grid-column: span 5; height: min-content; justify-content: flex-start; justify-self: start; overflow: hidden; padding: 0px 0px 0px 32px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1qjzla7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1blsept { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-puapqq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-10i6ede { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wju5q .framer-14usrih { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1nkofoo-container, .framer-Wju5q .framer-ya2lug-container, .framer-Wju5q .framer-jx5kyx-container, .framer-Wju5q .framer-17mj5zt-container, .framer-Wju5q .framer-1s87obl-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-Wju5q .framer-rq9w8k { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-Wju5q .framer-1o7kw4i { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 24px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-kgncqv-container, .framer-Wju5q .framer-1rm08to-container, .framer-Wju5q .framer-pdwazk-container, .framer-Wju5q .framer-xulf1h-container, .framer-Wju5q .framer-13vp2ac-container, .framer-Wju5q .framer-ezg1z-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1rajvc6 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1h5kqb9 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-9yzgy1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-6nz9z5-container, .framer-Wju5q .framer-1qncb9v-container { flex: 1 0 0px; height: 48px; max-width: 166px; position: relative; width: 1px; }`,
        `.framer-Wju5q .framer-cdut2s { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 4px 16px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-7kyywd-container { flex: none; height: auto; position: relative; width: auto; z-index: 0; }`,
        `.framer-Wju5q.framer-1bt9zre { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Wju5q.framer-1myk1aq { align-content: center; align-items: center; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; left: 0px; overflow: var(--overflow-clip-fallback, clip); padding: 40px 20px 40px 20px; position: fixed; right: 0px; z-index: 10; }`,
        `.framer-Wju5q .framer-asfxrw-container { flex: none; height: auto; position: relative; width: 400px; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-Wju5q.framer-1prgqih { background-color: rgba(0, 0, 0, 0.4); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-Wju5q.framer-lwklvo-container { bottom: 0px; flex: none; position: fixed; right: 0px; top: 0px; width: 100%; will-change: var(--framer-will-change-effect-override, transform); z-index: 10; }`,
        `.framer-Wju5q .framer-1lf7r1l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 16px 0px 0px 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1456qpo { flex: none; height: 1px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 80px; z-index: 1; }`,
        `.framer-Wju5q .framer-1d66apx { align-content: center; align-items: center; background-color: var(--token-b1f89d39-57aa-4efb-8816-14116952e648); display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1n0qlw5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; max-width: 1360px; overflow: var(--overflow-clip-fallback, clip); padding: 84px 50px 84px 50px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-1na3hcx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-x6pogm { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
        `.framer-Wju5q .framer-pmlkb6 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 489px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        ...ht,
        ...Yt,
        ...Wc,
        ...ut,
        ...nn,
        ...zt,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Wju5q.framer-x280fk { width: 810px; } .framer-Wju5q .framer-gwu1w3 { padding: 148px 30px 76px 30px; } .framer-Wju5q .framer-1a7zltt { grid-column: span 6; } .framer-Wju5q .framer-9tq5e8-container { height: auto; } .framer-Wju5q .framer-1szs9k1 { grid-column: span 6; padding: 0px; } .framer-Wju5q .framer-6nz9z5-container, .framer-Wju5q .framer-1qncb9v-container { height: 46px; } .framer-Wju5q .framer-1d66apx, .framer-Wju5q .framer-1n0qlw5 { padding: 76px 30px 76px 30px; } .framer-Wju5q .framer-14m0gv8 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-Wju5q .framer-pmlkb6 { max-width: 430px; }}`,
        `@media (max-width: 809.98px) { .framer-Wju5q.framer-x280fk { width: 390px; } .framer-Wju5q .framer-gwu1w3 { padding: 138px 20px 68px 20px; } .framer-Wju5q .framer-j3uhn1 { gap: 20px; } .framer-Wju5q .framer-z4xvre { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 36px; justify-content: flex-start; } .framer-Wju5q .framer-1a7zltt { align-self: unset; position: relative; top: unset; } .framer-Wju5q .framer-9tq5e8-container { height: 360px; } .framer-Wju5q .framer-1szs9k1 { align-self: unset; padding: 0px; } .framer-Wju5q .framer-6nz9z5-container, .framer-Wju5q .framer-1qncb9v-container { height: 44px; } .framer-Wju5q .framer-cdut2s { gap: 4px 14px; } .framer-Wju5q .framer-1d66apx, .framer-Wju5q .framer-1n0qlw5 { padding: 68px 20px 68px 20px; } .framer-Wju5q .framer-1na3hcx { gap: 28px; } .framer-Wju5q .framer-14m0gv8 { white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; } .framer-Wju5q .framer-pmlkb6 { max-width: 280px; }}`,
      ],
      `framer-Wju5q`
    )),
    (kl.displayName = `Products`),
    (kl.defaultProps = { height: 4690, width: 1200 }),
    I(
      kl,
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
              url: `../../assets/misc/SB2OEB6IKZPRR6JT4GFJ2TFT6HBB6AZN.woff2`,
              weight: `500`,
            },
            {
              cssFamilyName: `General Sans Variable`,
              source: `fontshare`,
              style: `normal`,
              uiFamilyName: `General Sans`,
              url: `../../assets/misc/JA3IZUEMJ2J6WWT2OQVJOAWDXO3YL4YG.woff2`,
              variationAxes: [
                { defaultValue: 700, maxValue: 700, minValue: 200, name: `Weight`, tag: `wght` },
              ],
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
        ...qc,
        ...Jc,
        ...Yc,
        ...Xc,
        ...Zc,
        ...Qc,
        ...$c,
        ...el,
        ...tl,
        ...nl,
        ...rl,
        ...il,
        ...al,
        ...ol,
        ...sl,
        ...P(gt),
        ...P(Xt),
        ...P(Uc),
        ...P(ft),
        ...P(an),
        ...P(Bt),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (kl.loader = {
      load: (e, t) => {
        let n = t.locale;
        return Promise.allSettled([
          le.get(Dl(te(t.pathVariables, `vmJrVFRkR`)), n).preload(),
          H(Sr, {}, t),
          H(Xo, {}, t),
          H(Us, {}, t),
          H(gc, {}, t),
          H(Bc, {}, t),
          H(Lt, {}, t),
          H(ms, {}, t),
          H(Za, {}, t),
          H(po, {}, t),
          H($r, {}, t),
          H(Et, {}, t),
          H(zr, {}, t),
        ]);
      },
    }),
    (Al = {
      exports: {
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        default: {
          type: `reactComponent`,
          name: `FramervmJrVFRkR`,
          slots: [],
          annotations: {
            framerAcceptsLayoutTemplate: `true`,
            framerContractVersion: `1`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Y3p36rk5m":{"layout":["fixed","auto"]},"Qo4Ye1P70":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicHeight: `4690`,
            framerAutoSizeImages: `true`,
            framerScrollSections: `{"ZdJs013Mb":{"pattern":":ZdJs013Mb","name":"Nav Trigger"}}`,
            framerResponsiveScreen: `true`,
            framerLayoutTemplateFlowEffect: `true`,
            framerImmutableVariables: `true`,
            framerIntrinsicWidth: `1200`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerColorSyntax: `true`,
          },
        },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { Al as __FramerMetadata__, kl as default, ll as queryParamNames };
//# sourceMappingURL=xZJMLsDyFzMResnN9HcfLDd03NfmDlOm75Lr3lydccU.BRf9IK6M.mjs.map
