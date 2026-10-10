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
  V as u,
  c as d,
  h as f,
  m as p,
  s as m,
  u as h,
  x as g,
  y as _,
} from "./react.BtSUcPAM.mjs";
import { P as v, i as y, o as b, t as x } from "./motion.B_UOAosx.mjs";
import {
  A as S,
  Ft as C,
  G as w,
  I as T,
  M as E,
  N as D,
  O,
  Pt as ee,
  Q as k,
  R as A,
  T as j,
  Tt as M,
  W as N,
  g as P,
  ht as F,
  i as I,
  o as L,
  pt as te,
  v as ne,
} from "./framer.DuFjdl15.mjs";
import {
  A as re,
  B as ie,
  H as ae,
  I as oe,
  J as R,
  L as se,
  M as ce,
  N as le,
  P as z,
  R as ue,
  U as de,
  V as fe,
  a as pe,
  c as me,
  i as B,
  j as he,
  k as ge,
  n as V,
  o as _e,
  r as ve,
  s as ye,
  t as be,
  z as H,
} from "./uMfPNtWsK.Ef5pNhkD.mjs";
function xe(e) {
  let {
      shopifyProductID: t,
      discountType: n,
      format: { showCurrency: r, showSymbol: a, showDecimals: o, currencyCode: c } = {},
      textFormat: l,
      previewPrice: d,
      previewComparePrice: f,
      discountPrefix: p = `Up to`,
    } = e,
    [h, v] = _(),
    [y, b] = _(),
    [x, S] = _(() => R(h, `priceRange.minVariantPrice.currencyCode`) || `USD`),
    [C, w] = _(``),
    [T, E] = _(``),
    [D, O] = _({}),
    [ee, k] = _(``),
    A = ae(),
    M = s(
      () =>
        j !== void 0 &&
        (j.current() === j.canvas || (A && i.location.origin.endsWith(`framercanvas.com`))),
      [A]
    );
  (g(() => {
    h && S(R(h, `priceRange.minVariantPrice.currencyCode`) || `USD`);
  }, [h]),
    g(() => {
      if (!A) return;
      let e = localStorage.getItem(`selectedCurrency`),
        t = localStorage.getItem(`selectedCountryCode`),
        n = localStorage.getItem(`selectedCountry`);
      (S(e || `USD`), w(t || `US`), E(n || `United States`));
    }, [A]),
    g(() => {
      if (!A) return;
      let e = (e) => {
          try {
            if (e.detail) {
              if (e.detail.isPurchaseAction || e.detail.onClickAction === `purchase`) return;
              let n = `gid://shopify/Product/${t}`;
              if (!e.detail.productId || e.detail.productId !== n) return;
            }
            k(e.detail.onClickAction);
            let n = (i.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            if (n) {
              v(n.node);
              let t = n.node?.variants?.edges?.find(({ node: t }) =>
                t.selectedOptions.every((t) =>
                  e.detail.selectedOptions.find((e) => e.name === t.name && e.value === t.value)
                )
              );
              if (t)
                if (e.detail.onClickAction === `purchase`)
                  (b(null),
                    O({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }));
                else if (e.detail?.isCompleteVariant === !1) {
                  if ((b(null), Array.isArray(e.detail.selectedOptions))) {
                    let t = {};
                    (e.detail.selectedOptions.forEach((e) => {
                      e?.name && (t[e.name] = e.value);
                    }),
                      O(t));
                  }
                } else (b(t.node), O({}));
              else
                e.detail?.isCompleteVariant &&
                  (b(e.detail), e.detail.onClickAction !== `purchase` && O({}));
            }
          } catch {
            if (e.detail?.isCompleteVariant)
              (b(e.detail), e.detail.onClickAction !== `purchase` && O({}));
            else if ((b(null), Array.isArray(e.detail?.selectedOptions))) {
              let t = {};
              (e.detail.selectedOptions.forEach((e) => {
                e?.name && (t[e.name] = e.value);
              }),
                O(t));
            }
          }
        },
        n = (e) => {
          if (Array.isArray(e.detail.products)) {
            let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
            if ((v(n ? n.node : null), n?.node?.variants?.edges?.length === 1)) {
              let e = n.node.variants.edges[0].node;
              b(e);
            }
          }
        },
        r = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (e.detail?.optionName &&
              e.detail?.value &&
              O((t) => ({ ...t, [e.detail.optionName]: e.detail.value })));
        };
      if (
        ((async () => {
          try {
            let e = (i.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            e &&
              (v(e.node),
              e.node?.variants?.edges?.length === 1 && b(e.node.variants.edges[0].node));
          } catch {}
        })(),
        i.shopXtools?.products && Array.isArray(i.shopXtools.products))
      ) {
        let e = i.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        (v(e ? e.node : null),
          e?.node?.variants?.edges?.length === 1 && b(e.node.variants.edges[0].node));
      }
      return (
        document.addEventListener(`data__products-ready`, n),
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`__variant_option_selected`, r),
        () => {
          (document.removeEventListener(`data__products-ready`, n),
            document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`__variant_option_selected`, r));
        }
      );
    }, [A, t, x]),
    g(() => {
      if (!A) return;
      let e = (e) => {
        let { currency: n, countryCode: r, country: a } = e.detail;
        (S(n), w(r), E(a));
        try {
          let e = (i.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (v(e.node), y)) {
            let t = e.node?.variants?.edges?.find(({ node: e }) =>
              e.selectedOptions.every((e) =>
                y.selectedOptions.find((t) => t.name === e.name && t.value === e.value)
              )
            );
            t && b(t.node);
          }
        } catch {}
      };
      return (
        i.addEventListener(`currency_changed`, e),
        () => {
          i.removeEventListener(`currency_changed`, e);
        }
      );
    }, [A, t, y, h]),
    s(
      () =>
        i === void 0
          ? { position: `Before`, showCode: !1, symbol: `$` }
          : {
              position: i?.__FcCurrencyConfigs?.currencyPosition || `Before`,
              showCode: i?.__FcCurrencyConfigs?.currencyPosition !== `Hide`,
              symbol: ue[x] || `$`,
            },
      [x]
    ));
  let N = (e, t) => {
      let n = Se(t),
        s = oe(C),
        c =
          o === `Always show` || (o !== `Never show` && (o !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!a && !r)
        return new Intl.NumberFormat(s, {
          style: `decimal`,
          minimumFractionDigits: c,
          maximumFractionDigits: c,
        }).format(e);
      if (t === `USD` && a)
        if (A && /iPad|iPhone|iPod/.test(u.userAgent) && !i.MSStream) {
          let t = new Intl.NumberFormat(s, {
            style: `decimal`,
            minimumFractionDigits: c,
            maximumFractionDigits: c,
          }).format(e);
          return r ? `$${t} USD` : `$${t}`;
        } else if (r)
          return `${new Intl.NumberFormat(s, { style: `currency`, currency: `USD`, minimumFractionDigits: c, maximumFractionDigits: c, currencyDisplay: `narrowSymbol` }).format(e)} USD`;
        else
          return new Intl.NumberFormat(s, {
            style: `currency`,
            currency: `USD`,
            minimumFractionDigits: c,
            maximumFractionDigits: c,
            currencyDisplay: `narrowSymbol`,
          }).format(e);
      return n && ((r && !a) || (a && !r) || (r && a))
        ? `${t} ${new Intl.NumberFormat(s, { style: `decimal`, minimumFractionDigits: c, maximumFractionDigits: c }).format(e)}`
        : !a && r
          ? `${new Intl.NumberFormat(s, { style: `decimal`, minimumFractionDigits: c, maximumFractionDigits: c }).format(e)} ${t}`
          : a && !r
            ? new Intl.NumberFormat(s, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: c,
                maximumFractionDigits: c,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(s, { style: `currency`, currency: t, minimumFractionDigits: c, maximumFractionDigits: c, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    P = (e) => (l ? l.replace(/\{\{discount\}\}/g, e) : e),
    F = s(() => {
      if (!A) return ``;
      let e = (e, t) => {
        if (!e) return { min: null, max: null };
        let n = R(e, `${t}.minVariantPrice.amount`),
          r = R(e, `${t}.maxVariantPrice.amount`),
          i = n ? parseFloat(n) : null,
          a = r ? parseFloat(r) : null;
        if (i === null || isNaN(i) || a === null || isNaN(a)) {
          let n = e?.variants?.edges || [];
          for (let e = 0; e < n.length; e++) {
            let r = n[e]?.node;
            if (!r) continue;
            let o = R(r, t.includes(`compareAt`) ? `compareAtPrice.amount` : `price.amount`),
              s = o ? parseFloat(o) : NaN;
            !isNaN(s) &&
              s > 0 &&
              ((i === null || s < i) && (i = s), (a === null || s > a) && (a = s));
          }
        }
        return {
          min: typeof i == `number` && !isNaN(i) ? i : null,
          max: typeof a == `number` && !isNaN(a) ? a : null,
        };
      };
      if (j !== void 0 && (j.current() === j.canvas || M)) {
        let e;
        if (d) {
          let t = d.split(`-`);
          t.length === 2 ? ((e = t[0].trim()), t[1].trim()) : (e = d);
        }
        let t;
        if (f) {
          let e = f.split(`-`);
          e.length === 2 ? (e[0].trim(), (t = e[1].trim())) : (t = f);
        }
        let r = parseFloat(e),
          i = parseFloat(t);
        if (!r || !i || r >= i) return ``;
        let a = i - r;
        if (a <= 0) return ``;
        if (n === `Percentage`) {
          let e = (a / i) * 100,
            t = `${p} ${Math.round(e)}%`;
          return P(t);
        } else {
          let e = N(a, c || `USD`),
            t = `${p} ${e}`;
          return P(t);
        }
      }
      let t = y && R(y, `price.amount`),
        r = y && R(y, `compareAtPrice.amount`);
      if (!t && !r && !y && !h?.variants?.edges?.length) return ``;
      let i = x || c || `USD`;
      if (t && r) {
        let e = parseFloat(t),
          a = parseFloat(r);
        if (e > 0 && a > 0 && a > e)
          if (n === `Percentage`) {
            let t = ((a - e) / a) * 100,
              n = `${Math.round(t)}%`;
            return P(n);
          } else {
            let t = a - e,
              n = N(t, i);
            return P(n);
          }
        return ``;
      }
      let a = Object.keys(D).length > 0,
        o = y && y.selectedOptions?.length > 0,
        s = Array.isArray(h?.variants?.edges) && h.variants.edges.length > 0;
      if (a && !o && s) {
        let e = (h?.variants?.edges || []).filter(({ node: e }) =>
          e.selectedOptions.every((e) => !D[e.name] || D[e.name] === e.value)
        );
        if (e.length > 0) {
          let t = e
            .map(({ node: e }) => {
              let t = parseFloat(R(e, `price.amount`) || `0`),
                r = parseFloat(R(e, `compareAtPrice.amount`) || `0`),
                i = r > t && r > 0;
              return {
                price: t,
                compareAtPrice: r,
                discount: i ? (n === `Percentage` ? ((r - t) / r) * 100 : r - t) : 0,
                isDiscounted: i,
              };
            })
            .filter((e) => e.price > 0);
          t.map((e) => e.price);
          let r = t.map((e) => e.discount);
          if (!r.some((e) => e > 0)) return ``;
          let i = Math.max(...r),
            a = Math.min(...r),
            o = x || c || `USD`,
            s = a !== i;
          if (n === `Percentage`) {
            let e = Math.round(i),
              t = s ? `${p} ${e}%` : `${e}%`;
            return P(t);
          } else {
            let e = N(i, o),
              t = s ? `${p} ${e}` : `${e}`;
            return P(t);
          }
        }
      }
      if (!y && !a && s) {
        let t = x || c || `USD`,
          { min: r, max: i } = e(h, `priceRange`),
          { min: a, max: o } = e(h, `compareAtPriceRange`);
        if (r && i && a && o) {
          let e = Math.max(o - r, a - i);
          if (e > 0)
            if (n === `Percentage`) {
              let t = Math.max(o, a),
                n = t > 0 ? Math.round((e / t) * 100) : 0,
                s = n > 0 ? (r === i && a === o ? `${n}%` : `${p} ${n}%`) : ``;
              return P(s);
            } else {
              let n = N(e, t),
                s = r === i && a === o ? `${n}` : `${p} ${n}`;
              return P(s);
            }
        }
        let s = (h?.variants?.edges || [])
          .map(({ node: e }) => {
            let t = parseFloat(R(e, `price.amount`) || `0`),
              r = parseFloat(R(e, `compareAtPrice.amount`) || `0`),
              i = r > t && r > 0;
            return {
              price: t,
              compareAtPrice: r,
              discount: i ? (n === `Percentage` ? ((r - t) / r) * 100 : r - t) : 0,
              isDiscounted: i,
            };
          })
          .filter((e) => e.price > 0);
        if (!s.length) return ``;
        s.map((e) => e.price);
        let l = s.map((e) => e.discount);
        if (!l.some((e) => e > 0)) return ``;
        let u = Math.max(...l),
          d = Math.min(...l) !== u;
        if (n === `Percentage`) {
          let e = Math.round(u),
            t = d ? `${p} ${e}%` : `${e}%`;
          return P(t);
        } else {
          let e = N(u, t),
            n = d ? `${p} ${e}` : `${e}`;
          return P(n);
        }
      }
      return ``;
    }, [A, M, y, h, D, ee, n, d, f, x, C, c, r, a, o, p, l]);
  return A
    ? F
      ? m(`div`, {
          style: {
            display: `flex`,
            width: `100%`,
            height: `100%`,
            backgroundColor: e.backgroundColor,
            padding: e.paddingPerSide
              ? `${e.paddingTop}px ${e.paddingRight}px ${e.paddingBottom}px ${e.paddingLeft}px`
              : e.padding,
            borderRadius: e.radiusPerCorner
              ? `${e.radiusTopLeft}px ${e.radiusTopRight}px ${e.radiusBottomRight}px ${e.radiusBottomLeft}px`
              : e.borderRadius,
            boxSizing: `border-box`,
            alignItems: `center`,
            justifyContent: `center`,
          },
          children: m(`p`, {
            style: { ...e.font, color: e.textColor, margin: 0, padding: 0, whiteSpace: `nowrap` },
            children: F,
          }),
        })
      : null
    : m(`div`, { style: { display: `none` } });
}
var Se,
  Ce = e(() => {
    (t(),
      d(),
      n(),
      k(),
      de(),
      fe(),
      H(),
      se(),
      (Se = (e) => {
        if (!e) return !1;
        if (ie.includes(e)) return !0;
        try {
          return (
            new Intl.NumberFormat(void 0, {
              style: `currency`,
              currency: e,
              currencyDisplay: `narrowSymbol`,
            })
              .format(0)
              .replace(/[0-9.,\s]/g, ``) === e
          );
        } catch {
          return !1;
        }
      }),
      (xe.defaultProps = {
        shopifyProductID: ``,
        backgroundColor: `transparent`,
        padding: 8,
        borderRadius: 0,
        font: void 0,
        textColor: `#000`,
        discountPrefix: `Up to`,
        textFormat: `{{discount}} OFF`,
        discountType: `Percentage`,
        previewPrice: `50`,
        previewComparePrice: `75`,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      D(xe, {
        shopifyProductID: {
          type: L.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        previewPrice: {
          type: L.String,
          title: `Price`,
          defaultValue: `50`,
          description: `Connect to CMS (canvas preview only).`,
        },
        previewComparePrice: {
          type: L.String,
          title: `Compare Price`,
          defaultValue: `75`,
          description: `Connect to CMS (canvas preview only).`,
        },
        discountType: {
          type: L.Enum,
          title: `Type`,
          options: [`Percentage`, `Amount`],
          optionTitles: [`%`, `Amount`],
          defaultValue: `Percentage`,
          displaySegmentedControl: !0,
        },
        format: {
          type: L.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: L.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: L.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: L.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: L.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency on your site is automatic, this is only shown in canvas preview.`,
            },
          },
          hidden: (e) => e.discountType !== `Amount`,
        },
        textFormat: {
          type: L.String,
          title: `Text Format`,
          defaultValue: `{{discount}} OFF`,
          description: `Use {{discount}} to display the discount value`,
        },
        discountPrefix: {
          type: L.String,
          title: `Varying Prefix`,
          description: `When a product has multiple discount values and a variant has not been selected.`,
          defaultValue: `Up to`,
        },
        font: { type: L.Font, title: `Font`, controls: `extended` },
        textColor: { type: L.Color, title: `Color`, defaultValue: `#000` },
        backgroundColor: { type: L.Color, title: `BG` },
        padding: {
          type: L.FusedNumber,
          title: `Padding`,
          defaultValue: 8,
          toggleKey: `paddingPerSide`,
          toggleTitles: [`All`, `Sides`],
          valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
          valueLabels: [`T`, `R`, `B`, `L`],
          min: 0,
        },
        borderRadius: {
          type: L.FusedNumber,
          title: `Radius`,
          defaultValue: 0,
          toggleKey: `radiusPerCorner`,
          toggleTitles: [`All`, `Corners`],
          valueKeys: [`radiusTopLeft`, `radiusTopRight`, `radiusBottomRight`, `radiusBottomLeft`],
          valueLabels: [`TL`, `TR`, `BR`, `BL`],
          min: 0,
          max: 100,
          unit: `px`,
        },
      }));
  });
function U(e) {
  let { DefaultState: t, ActiveState: n, productId: r } = e,
    i = l(null),
    [a, o] = _(() => W.getState(r)),
    s = l(!0);
  g(() => {
    let e = i.current;
    if (!e) return;
    let t = (e) => {
      (e.preventDefault(), e.stopPropagation(), o(!a), W.toggle(r));
    };
    e.addEventListener(`click`, t, { capture: !0 });
    let n = W.subscribe(r, (e) => {
      if (s.current) {
        s.current = !1;
        return;
      }
      a !== e && o(e);
    });
    return () => {
      (e.removeEventListener(`click`, t, { capture: !0 }), n());
    };
  }, [r, a]);
  let u = a ? n : t,
    d = Array.isArray(u) ? u[0] : u;
  if (!d || !f(d))
    return m(`div`, {
      ref: i,
      style: {
        width: `100%`,
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `#666`,
        fontSize: `14px`,
        transform: `none`,
      },
      children: `Connect Instance`,
    });
  let p = c(d, {
    style: { ...(d.props?.style || {}), width: `100%`, height: `100%`, transform: `none` },
  });
  return j.current() === j.canvas
    ? m(`div`, { ref: i, style: { height: `100%`, width: `100%`, transform: `none` }, children: p })
    : m(`div`, {
        ref: i,
        style: { height: `100%`, width: `100%`, transform: `none`, cursor: `pointer` },
        children: p,
      });
}
var W,
  G = e(() => {
    (d(),
      n(),
      k(),
      (W = {
        element: typeof document < `u` ? document.createElement(`div`) : null,
        getState(e) {
          if (!this.element) return !1;
          try {
            return JSON.parse(localStorage.getItem(`favorites`) || `[]`).includes(e);
          } catch {
            return !1;
          }
        },
        toggle(e) {
          if (this.element)
            try {
              let t = JSON.parse(localStorage.getItem(`favorites`) || `[]`),
                n = t.includes(e),
                r = n ? t.filter((t) => t !== e) : [...t, e];
              localStorage.setItem(`favorites`, JSON.stringify(r));
              let i = new CustomEvent(`favorite-changed`, {
                detail: { productId: e, isActive: !n },
              });
              this.element.dispatchEvent(i);
              let a = new CustomEvent(`favorites-updated`, {
                detail: { favorites: r, productId: e, action: n ? `remove` : `add` },
              });
              document.dispatchEvent(a);
            } catch (e) {
              console.error(`Error updating favorites:`, e);
            }
        },
        subscribe(e, t) {
          if (!this.element) return () => {};
          let n = (n) => {
            n.detail.productId === e && t(n.detail.isActive);
          };
          return (
            this.element.addEventListener(`favorite-changed`, n),
            () => {
              this.element.removeEventListener(`favorite-changed`, n);
            }
          );
        },
      }),
      D(U, {
        productId: { type: L.String, title: `Product ID`, description: `Connect to CMS` },
        DefaultState: { type: L.ComponentInstance, title: `Default State` },
        ActiveState: { type: L.ComponentInstance, title: `Active State` },
      }));
  }),
  K,
  we,
  Te,
  Ee,
  De = e(() => {
    (d(),
      k(),
      n(),
      (K = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 4.863 C 0 2.855 1.264 1.054 3.178 0.336 C 5.093 -0.383 7.262 0.129 8.632 1.622 C 8.727 1.722 8.86 1.779 9 1.779 C 9.139 1.779 9.273 1.722 9.368 1.622 C 10.734 0.119 12.908 -0.4 14.827 0.321 C 16.746 1.041 18.01 2.85 18 4.863 C 18 6.881 16.65 8.389 15.3 9.711 L 10.357 14.395 C 10.018 14.776 9.528 14.997 9.011 15 C 8.494 15.003 8.001 14.789 7.657 14.411 L 2.7 9.711 C 1.35 8.389 0 6.89 0 4.863" fill="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" height="15.000000000000007px" id="QBqdscFOC" transform="translate(1 2.49)" width="18px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
      (we = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n ? m(v.div, { ...a, layoutId: r, ref: t }) : m(`div`, { ...a, ref: t });
      })),
      (Te = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (Ee = C(
        p(function (e, t) {
          let {
            style: n,
            className: r,
            layoutId: i,
            variant: a,
            R8PWEQPqW: o,
            r2cPmBIrU: s,
            ...c
          } = Te(e);
          return m(we, {
            ...c,
            className: T(`framer-YdCBB`, r),
            layoutId: i,
            ref: t,
            style: { "--v9s4l2": o, ...n },
          });
        }),
        [
          `.framer-YdCBB { -webkit-mask: ${K}; aspect-ratio: 1; background-color: var(--v9s4l2); mask: ${K}; width: 20px; }`,
        ],
        `framer-YdCBB`
      )),
      (Ee.displayName = `Heart Fill`),
      D(Ee, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: L.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !0, min: 0, title: `Stroke`, type: L.Number },
      }));
  });
function Oe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ke,
  Ae,
  je,
  Me,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  q,
  Be = e(() => {
    (d(),
      k(),
      x(),
      n(),
      De(),
      V(),
      (ke = { bvld_CKqO: { hover: !0 }, iOC1Es72H: { hover: !0 } }),
      (Ae = [`bvld_CKqO`, `iOC1Es72H`]),
      (je = `framer-AtPBQ`),
      (Me = { bvld_CKqO: `framer-v-917vhv`, iOC1Es72H: `framer-v-g4ngqs` }),
      (Ne = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Pe = (e, t) => `translate(-50%, -50%) ${t}`),
      (Fe = ({ value: e, children: t }) => {
        let n = o(b),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (Ie = { Active: `iOC1Es72H`, Inactive: `bvld_CKqO` }),
      (Le = v.create(a)),
      (Re = ({ click: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        HoGh4aBtF: e ?? i.HoGh4aBtF,
        variant: Ie[i.variant] ?? i.variant ?? `bvld_CKqO`,
      })),
      (ze = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (q = C(
        p(function (e, t) {
          let n = l(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: s } = M();
          F();
          let { style: c, className: u, layoutId: d, variant: f, HoGh4aBtF: p, ...h } = Re(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: b,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: C,
              setGestureState: w,
              setVariant: E,
              variants: D,
            } = ee({
              cycleOrder: Ae,
              defaultVariant: `bvld_CKqO`,
              enabledGestures: ke,
              ref: i,
              variant: f,
              variantClassNames: Me,
            }),
            O = ze(e, D),
            { activeVariantCallback: k, delay: A } = te(g),
            j = k(async (...e) => {
              if ((w({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
            }),
            N = T(je);
          return m(y, {
            id: d ?? a,
            children: m(Le, {
              animate: D,
              initial: !1,
              children: m(Fe, {
                value: Ne,
                children: m(v.div, {
                  ...h,
                  ...x,
                  className: T(N, `framer-917vhv`, u, _),
                  "data-border": !0,
                  "data-framer-name": `Inactive`,
                  "data-highlight": !0,
                  layoutDependency: O,
                  layoutId: `bvld_CKqO`,
                  onTap: j,
                  ref: i,
                  style: {
                    "--border-bottom-width": `0.9px`,
                    "--border-color": `var(--token-042b2c85-d47f-4328-a709-b08971e77652)`,
                    "--border-left-width": `0.9px`,
                    "--border-right-width": `0.9px`,
                    "--border-style": `solid`,
                    "--border-top-width": `0.9px`,
                    backgroundColor: `rgb(255, 255, 255)`,
                    borderBottomLeftRadius: `50%`,
                    borderBottomRightRadius: `50%`,
                    borderTopLeftRadius: `50%`,
                    borderTopRightRadius: `50%`,
                    ...c,
                  },
                  variants: {
                    "bvld_CKqO-hover": { "--border-color": `rgb(196, 195, 194)` },
                    "iOC1Es72H-hover": { "--border-color": `rgb(196, 195, 194)` },
                  },
                  ...Oe(
                    {
                      "bvld_CKqO-hover": { "data-framer-name": void 0 },
                      "iOC1Es72H-hover": { "data-framer-name": void 0 },
                      iOC1Es72H: { "data-framer-name": `Active` },
                    },
                    g,
                    S
                  ),
                  children: m(P, {
                    animated: !0,
                    className: `framer-11741ew`,
                    Component: be,
                    layoutDependency: O,
                    layoutId: `EjrmQdILZ`,
                    style: { "--d1m4u3": 1.2, "--v9s4l2": `rgb(68, 68, 68)` },
                    transformTemplate: Pe,
                    variants: { iOC1Es72H: { "--v9s4l2": `rgb(214, 24, 24)` } },
                    ...Oe({ iOC1Es72H: { Component: Ee } }, g, S),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-AtPBQ.framer-t69f7f, .framer-AtPBQ .framer-t69f7f { display: block; }`,
          `.framer-AtPBQ.framer-917vhv { cursor: pointer; height: 36px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 36px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-AtPBQ .framer-11741ew { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 21px); left: 50%; position: absolute; top: 53%; width: 20px; }`,
          `.framer-AtPBQ[data-border="true"]::after, .framer-AtPBQ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-AtPBQ`
      )),
      (q.displayName = `Add to Wish Icons`),
      (q.defaultProps = { height: 36, width: 36 }),
      D(q, {
        variant: {
          options: [`bvld_CKqO`, `iOC1Es72H`],
          optionTitles: [`Inactive`, `Active`],
          title: `Variant`,
          type: L.Enum,
        },
        HoGh4aBtF: { title: `Click`, type: L.EventHandler },
      }),
      E(q, [{ explicitInter: !0, fonts: [] }], { supportsExplicitInterCodegen: !0 }));
  }),
  Ve,
  He,
  Ue,
  We,
  Ge,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  J,
  Ze = e(() => {
    (d(),
      k(),
      x(),
      n(),
      G(),
      Be(),
      (Ve = N(q)),
      (He = N(U)),
      (Ue = `framer-i3YcL`),
      (We = { jmsI0kVZy: `framer-v-6ou2lf` }),
      (Ge = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
      (Ke = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (qe = ({ value: e, children: t }) => {
        let n = o(b),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (Je = v.create(a)),
      (Ye = ({ height: e, id: t, productID: n, width: r, wishlistClick: i, ...a }) => ({
        ...a,
        hpTCa5Ntv: n ?? a.hpTCa5Ntv,
        xsFze4nLO: i ?? a.xsFze4nLO,
      })),
      (Xe = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (J = C(
        p(function (e, t) {
          let n = l(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: s } = M();
          F();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              xsFze4nLO: p,
              hpTCa5Ntv: h,
              ...g
            } = Ye(e),
            {
              baseVariant: _,
              classNames: b,
              clearLoadingGesture: x,
              gestureHandlers: C,
              gestureVariant: w,
              isLoading: E,
              setGestureState: D,
              setVariant: O,
              variants: k,
            } = ee({ defaultVariant: `jmsI0kVZy`, ref: i, variant: f, variantClassNames: We }),
            A = Xe(e, k),
            { activeVariantCallback: j, delay: N } = te(_),
            P = j(async (...e) => {
              if (p && (await p(...e)) === !1) return !1;
            }),
            L = T(Ue);
          return m(y, {
            id: d ?? a,
            children: m(Je, {
              animate: k,
              initial: !1,
              children: m(qe, {
                value: Ge,
                children: m(v.div, {
                  ...g,
                  ...C,
                  className: T(L, `framer-6ou2lf`, u, b),
                  "data-framer-name": `Component`,
                  layoutDependency: A,
                  layoutId: `jmsI0kVZy`,
                  ref: i,
                  style: { ...c },
                  children: m(I, {
                    children: m(S, {
                      className: `framer-q8ppqu-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: A,
                      layoutId: `ptQaN3_iP-container`,
                      nodeId: `ptQaN3_iP`,
                      rendersWithMotion: !0,
                      scopeId: `e4k97MLlm`,
                      children: m(U, {
                        ActiveState: [
                          m(I, {
                            height: 40,
                            width: `40px`,
                            children: m(S, {
                              className: `framer-1vswhi5-container`,
                              "data-framer-name": `Active`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `G5Q_ESFHH-container`,
                              name: `Active`,
                              nodeId: `G5Q_ESFHH`,
                              rendersWithMotion: !0,
                              scopeId: `e4k97MLlm`,
                              children: m(q, {
                                height: `100%`,
                                id: `G5Q_ESFHH`,
                                layoutId: `G5Q_ESFHH`,
                                name: `Active`,
                                style: { height: `100%`, width: `100%` },
                                variant: Ke(`iOC1Es72H`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        DefaultState: [
                          m(I, {
                            height: 40,
                            width: `40px`,
                            children: m(S, {
                              className: `framer-1u2lw9t-container`,
                              "data-framer-name": `Inactive`,
                              inComponentSlot: !0,
                              layoutDependency: A,
                              layoutId: `UDRPlPKta-container`,
                              name: `Inactive`,
                              nodeId: `UDRPlPKta`,
                              rendersWithMotion: !0,
                              scopeId: `e4k97MLlm`,
                              children: m(q, {
                                height: `100%`,
                                HoGh4aBtF: P,
                                id: `UDRPlPKta`,
                                layoutId: `UDRPlPKta`,
                                name: `Inactive`,
                                style: { height: `100%`, width: `100%` },
                                variant: Ke(`bvld_CKqO`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        height: `100%`,
                        id: `ptQaN3_iP`,
                        layoutId: `ptQaN3_iP`,
                        productId: h,
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
          `.framer-i3YcL.framer-kn4s3a, .framer-i3YcL .framer-kn4s3a { display: block; }`,
          `.framer-i3YcL.framer-6ou2lf { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-i3YcL .framer-q8ppqu-container { flex: none; height: 36px; position: relative; width: 36px; z-index: 10; }`,
          `.framer-i3YcL .framer-1u2lw9t-container, .framer-i3YcL .framer-1vswhi5-container { height: 40px; position: relative; width: 40px; }`,
        ],
        `framer-i3YcL`
      )),
      (J.displayName = `Wish Icon`),
      (J.defaultProps = { height: 36, width: 36 }),
      D(J, {
        xsFze4nLO: { title: `Wishlist Click`, type: L.EventHandler },
        hpTCa5Ntv: { defaultValue: ``, title: `Product ID`, type: L.String },
        onhpTCa5NtvChange: { changes: `hpTCa5Ntv`, type: L.ChangeHandler },
      }),
      E(J, [{ explicitInter: !0, fonts: [] }, ...Ve, ...He], { supportsExplicitInterCodegen: !0 }),
      (J.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(q, {}, t)])) }));
  });
function Qe(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var $e,
  et,
  tt,
  nt,
  rt,
  Y,
  it,
  at,
  ot,
  st,
  ct,
  X,
  lt = e(() => {
    (d(),
      k(),
      x(),
      n(),
      re(),
      ($e = N(ge)),
      (et = [`Bac0PhjJ8`, `IYz6_XE8i`]),
      (tt = `framer-JO3Ih`),
      (nt = { Bac0PhjJ8: `framer-v-al6lmd`, IYz6_XE8i: `framer-v-dow6dj` }),
      (rt = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: `tween` }),
      (Y = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e.src
          : typeof e == `string`
            ? e
            : void 0),
      (it = ({ value: e, children: t }) => {
        let n = o(b),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (at = { "Image 1": `Bac0PhjJ8`, "Image 2 - Hover": `IYz6_XE8i` }),
      (ot = v.create(a)),
      (st = ({
        height: e,
        id: t,
        image1: n,
        image2Hover: r,
        image3: i,
        image4: a,
        image5: o,
        image6: s,
        image7: c,
        image8: l,
        productID: u,
        width: d,
        ...f
      }) => ({
        ...f,
        gWxU8B3Xc: s ?? f.gWxU8B3Xc,
        LJaJk5uHw: u ?? f.LJaJk5uHw,
        mhWYB6zak: r ??
          f.mhWYB6zak ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/Mp2ngH9TxghNfxOSSP4T0HUib8.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/Mp2ngH9TxghNfxOSSP4T0HUib8.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/Mp2ngH9TxghNfxOSSP4T0HUib8.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/Mp2ngH9TxghNfxOSSP4T0HUib8.png?width=1660&height=1656 1660w`,
          },
        Ock4JIJlD: c ?? f.Ock4JIJlD,
        pBnZbYcTQ: o ?? f.pBnZbYcTQ,
        SC74k342B: n ??
          f.SC74k342B ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656 1660w`,
          },
        Uqk8sR_wQ: i ?? f.Uqk8sR_wQ,
        variant: at[f.variant] ?? f.variant ?? `Bac0PhjJ8`,
        YCqaFJoff: a ?? f.YCqaFJoff,
        yxNkxmKMl: l ?? f.yxNkxmKMl,
      })),
      (ct = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (X = C(
        p(function (e, t) {
          let n = l(null),
            i = t ?? n,
            a = r(),
            { activeLocale: o, setLocale: s } = M();
          F();
          let {
              style: c,
              className: u,
              layoutId: d,
              variant: f,
              LJaJk5uHw: p,
              SC74k342B: g,
              mhWYB6zak: _,
              Uqk8sR_wQ: b,
              YCqaFJoff: x,
              pBnZbYcTQ: C,
              gWxU8B3Xc: w,
              Ock4JIJlD: E,
              yxNkxmKMl: D,
              ...O
            } = st(e),
            {
              baseVariant: k,
              classNames: A,
              clearLoadingGesture: j,
              gestureHandlers: N,
              gestureVariant: P,
              isLoading: L,
              setGestureState: te,
              setVariant: ne,
              variants: re,
            } = ee({
              cycleOrder: et,
              defaultVariant: `Bac0PhjJ8`,
              ref: i,
              variant: f,
              variantClassNames: nt,
            }),
            ie = ct(e, re),
            ae = T(tt);
          return m(y, {
            id: d ?? a,
            children: m(ot, {
              animate: re,
              initial: !1,
              children: m(it, {
                value: rt,
                children: h(v.div, {
                  ...O,
                  ...N,
                  className: T(ae, `framer-al6lmd`, u, A),
                  "data-framer-name": `Image 1`,
                  layoutDependency: ie,
                  layoutId: `Bac0PhjJ8`,
                  ref: i,
                  style: { ...c },
                  ...Qe({ IYz6_XE8i: { "data-framer-name": `Image 2 - Hover` } }, k, P),
                  children: [
                    m(I, {
                      children: m(S, {
                        className: `framer-1k1fwb7-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: ie,
                        layoutId: `UAEYKd6vA-container`,
                        nodeId: `UAEYKd6vA`,
                        rendersWithMotion: !0,
                        scopeId: `XBNsctVg5`,
                        style: { opacity: 1 },
                        variants: { IYz6_XE8i: { opacity: 0 } },
                        children: m(ge, {
                          amount: 8,
                          height: `100%`,
                          id: `UAEYKd6vA`,
                          image1: Y(g),
                          image2: Y(_),
                          image3: Y(b),
                          image4: Y(x),
                          image5: Y(C),
                          image6: Y(w),
                          image7: Y(E),
                          image8: Y(D),
                          images: `Set`,
                          layoutId: `UAEYKd6vA`,
                          shopifyProductID: p,
                          Style: {
                            backgroundColor: `rgb(245, 245, 245)`,
                            borderRadius: 0,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            radiusBottomLeft: 0,
                            radiusBottomRight: 0,
                            radiusPerCorner: !1,
                            radiusTopLeft: 0,
                            radiusTopRight: 0,
                          },
                          style: { height: `100%`, width: `100%` },
                          type: `Fill`,
                          width: `100%`,
                        }),
                      }),
                    }),
                    m(I, {
                      children: m(S, {
                        className: `framer-19sjt7j-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layoutDependency: ie,
                        layoutId: `HYEH8w327-container`,
                        nodeId: `HYEH8w327`,
                        rendersWithMotion: !0,
                        scopeId: `XBNsctVg5`,
                        children: m(ge, {
                          amount: 8,
                          height: `100%`,
                          id: `HYEH8w327`,
                          image1: Y(_),
                          image2: Y(g),
                          image3: Y(b),
                          image4: Y(x),
                          image5: Y(C),
                          image6: Y(w),
                          image7: Y(E),
                          image8: Y(D),
                          images: `Set`,
                          layoutId: `HYEH8w327`,
                          shopifyProductID: p,
                          Style: {
                            backgroundColor: `rgb(245, 245, 245)`,
                            borderRadius: 0,
                            padding: 0,
                            paddingBottom: 0,
                            paddingLeft: 0,
                            paddingPerSide: !1,
                            paddingRight: 0,
                            paddingTop: 0,
                            radiusBottomLeft: 0,
                            radiusBottomRight: 0,
                            radiusPerCorner: !1,
                            radiusTopLeft: 0,
                            radiusTopRight: 0,
                          },
                          style: { height: `100%`, width: `100%` },
                          type: `Fill`,
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
          `.framer-JO3Ih.framer-es0umr, .framer-JO3Ih .framer-es0umr { display: block; }`,
          `.framer-JO3Ih.framer-al6lmd { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 400px; }`,
          `.framer-JO3Ih .framer-1k1fwb7-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 1; }`,
          `.framer-JO3Ih .framer-19sjt7j-container { bottom: 0px; flex: none; left: 0px; position: absolute; right: 0px; top: 0px; z-index: 0; }`,
        ],
        `framer-JO3Ih`
      )),
      (X.displayName = `Product Image`),
      (X.defaultProps = { height: 400, width: 400 }),
      D(X, {
        variant: {
          options: [`Bac0PhjJ8`, `IYz6_XE8i`],
          optionTitles: [`Image 1`, `Image 2 - Hover`],
          title: `Variant`,
          type: L.Enum,
        },
        LJaJk5uHw: { defaultValue: ``, title: `Product ID`, type: L.String },
        onLJaJk5uHwChange: { changes: `LJaJk5uHw`, type: L.ChangeHandler },
        SC74k342B: {
          __defaultAssetReference: `data:framer/asset-reference,3U4jonUoubpsiLRUColgcAgaKsE.png?originalFilename=Frame+6372.png&width=1660&height=1656`,
          title: `Image 1`,
          type: L.ResponsiveImage,
        },
        mhWYB6zak: {
          __defaultAssetReference: `data:framer/asset-reference,Mp2ngH9TxghNfxOSSP4T0HUib8.png?originalFilename=Frame+6374.png&width=1660&height=1656`,
          title: `Image 2 - Hover`,
          type: L.ResponsiveImage,
        },
        Uqk8sR_wQ: { title: `Image 3`, type: L.ResponsiveImage },
        YCqaFJoff: { title: `Image 4`, type: L.ResponsiveImage },
        pBnZbYcTQ: { title: `Image 5`, type: L.ResponsiveImage },
        gWxU8B3Xc: { title: `Image 6`, type: L.ResponsiveImage },
        Ock4JIJlD: { title: `Image 7`, type: L.ResponsiveImage },
        yxNkxmKMl: { title: `Image 8`, type: L.ResponsiveImage },
      }),
      E(X, [{ explicitInter: !0, fonts: [] }, ...$e], { supportsExplicitInterCodegen: !0 }));
  });
function Z(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ut,
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
  Q,
  xt,
  St,
  Ct,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  $,
  kt = e(() => {
    (d(),
      k(),
      x(),
      n(),
      Ce(),
      B(),
      z(),
      ce(),
      me(),
      Ze(),
      lt(),
      (ut = N(xe)),
      (dt = N(J)),
      (ft = N(X)),
      (pt = N(le)),
      (mt = N(he)),
      (ht = N(ve)),
      (gt = [`anAebR9ik`, `VEZYULeNG`, `sKec7jYlr`, `L3q4GRYFN`]),
      (_t = `framer-75IJs`),
      (vt = {
        anAebR9ik: `framer-v-1d6qvpu`,
        L3q4GRYFN: `framer-v-fopauv`,
        sKec7jYlr: `framer-v-12zk4j2`,
        VEZYULeNG: `framer-v-1a7hkfm`,
      }),
      (yt = (e, t) => {
        if (typeof e == `number` && Number.isFinite(e)) return Math.max(0, e) + `px`;
        if (typeof e != `string` || typeof t != `number`) return;
        let n = e.split(` `);
        return n[t] || n[t - 2] || n[0];
      }),
      (bt = { duration: 0, type: `tween` }),
      (Q = (e) =>
        typeof e == `object` && e && typeof e.src == `string`
          ? e
          : typeof e == `string`
            ? { src: e }
            : void 0),
      (xt = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (St = (e) => !e),
      (Ct = ({ value: e, children: t }) => {
        let n = o(b),
          r = e ?? n.transition,
          i = s(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(b.Provider, { value: i, children: t });
      }),
      (wt = {
        "Card - Hover": `VEZYULeNG`,
        "Tablet/Phone - Card - Hover": `L3q4GRYFN`,
        "Tablet/Phone - Card": `sKec7jYlr`,
        Card: `anAebR9ik`,
      }),
      (Tt = v.create(a)),
      (Et = (e, t) => {
        let [n, r] = _(e),
          [i, a] = _(e);
        return t ? [e, t] : (e !== i && (r(e), a(e)), [n, r]);
      }),
      (Dt = ({
        border: e,
        comparePrice: t,
        discountTag: n,
        height: r,
        hideComparePrice: i,
        id: a,
        image1: o,
        image2: s,
        image3: c,
        image4: l,
        image5: u,
        image6: d,
        image7: f,
        image8: p,
        imageID: m,
        newArrivalTag: h,
        newTab: g,
        price: _,
        productID: v,
        productLink: y,
        productTitle: b,
        radius: x,
        shadow: S,
        variants: C,
        width: w,
        wishlistClick: T,
        ...E
      }) => ({
        ...E,
        c7pUNAJD5: p ?? E.c7pUNAJD5,
        CTjlm1DJ8: f ?? E.CTjlm1DJ8,
        CtxCtZRbF: T ?? E.CtxCtZRbF,
        FgMmIZmJw:
          S ??
          E.FgMmIZmJw ??
          `0px 0px 3.8px 1px rgba(0, 0, 0, 0.04), 0px 0px 0px 1px rgba(0, 0, 0, 0.04)`,
        grTamTNk1: u ??
          E.grTamTNk1 ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656 1660w`,
          },
        hFy2PLFBG: v ?? E.hFy2PLFBG,
        HwypVSMEi: g ?? E.HwypVSMEi,
        II0fWsmjM: x ?? E.II0fWsmjM ?? `12px`,
        MGgAvDoA0: y ?? E.MGgAvDoA0,
        O9ZyioqcS: o ?? E.O9ZyioqcS,
        OKvEEQQFQ: h ?? E.OKvEEQQFQ ?? !0,
        q1Wa9MpBb: d ??
          E.q1Wa9MpBb ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656 1660w`,
          },
        Qb7mSHgLh: t ?? E.Qb7mSHgLh ?? `75.00`,
        QjM5BTCWQ: n ?? E.QjM5BTCWQ ?? !0,
        SKBNP2vvn: i ?? E.SKBNP2vvn,
        TCGQti0b7: C ?? E.TCGQti0b7,
        tJ0RQfmJy: _ ?? E.tJ0RQfmJy ?? `50.00`,
        TWjfUBTmo: c ??
          E.TWjfUBTmo ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656 1660w`,
          },
        ub4buTzaB: s ?? E.ub4buTzaB,
        variant: wt[E.variant] ?? E.variant ?? `anAebR9ik`,
        wsSEriDkC: m ?? E.wsSEriDkC,
        xYhX6dOGf: e ??
          E.xYhX6dOGf ?? {
            borderColor: `rgb(206, 206, 206)`,
            borderStyle: `solid`,
            borderWidth: 0,
          },
        YdL5oV0XS: l ??
          E.YdL5oV0XS ?? {
            pixelHeight: 1656,
            pixelWidth: 1660,
            src: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656`,
            srcSet: `https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=512&width=1660&height=1656 512w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?scale-down-to=1024&width=1660&height=1656 1024w,https://framerusercontent.com/images/3U4jonUoubpsiLRUColgcAgaKsE.png?width=1660&height=1656 1660w`,
          },
        Zg3vnZECo: b ?? E.Zg3vnZECo ?? `Product Title`,
      })),
      (Ot = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      ($ = C(
        p(function (e, t) {
          let n = l(null),
            i = t ?? n,
            o = r(),
            { activeLocale: s, setLocale: c } = M(),
            u = F(),
            {
              style: d,
              className: f,
              layoutId: p,
              variant: g,
              CtxCtZRbF: _,
              Zg3vnZECo: b,
              hFy2PLFBG: x,
              onhFy2PLFBGChange: C,
              TCGQti0b7: w,
              wsSEriDkC: E,
              O9ZyioqcS: D,
              ub4buTzaB: k,
              TWjfUBTmo: A,
              YdL5oV0XS: j,
              grTamTNk1: N,
              q1Wa9MpBb: P,
              CTjlm1DJ8: L,
              c7pUNAJD5: re,
              tJ0RQfmJy: ie,
              Qb7mSHgLh: ae,
              OKvEEQQFQ: oe,
              QjM5BTCWQ: R,
              MGgAvDoA0: se,
              HwypVSMEi: ce,
              xYhX6dOGf: z,
              II0fWsmjM: ue,
              FgMmIZmJw: de,
              SKBNP2vvn: fe,
              ...me
            } = Dt(e),
            [B, ge] = Et(x, C),
            {
              baseVariant: V,
              classNames: _e,
              clearLoadingGesture: ye,
              gestureHandlers: be,
              gestureVariant: H,
              isLoading: Se,
              setGestureState: Ce,
              setVariant: U,
              variants: W,
            } = ee({
              cycleOrder: gt,
              defaultVariant: `anAebR9ik`,
              ref: i,
              variant: g,
              variantClassNames: vt,
            }),
            G = Ot(e, W),
            { activeVariantCallback: K, delay: we } = te(V),
            Te = K(async (...e) => {
              if (_ && (await _(...e)) === !1) return !1;
            }),
            Ee = K(async (...e) => {
              U(`VEZYULeNG`);
            }),
            De = K(async (...e) => {
              U(`anAebR9ik`);
            }),
            Oe = K(async (...e) => {
              U(`L3q4GRYFN`);
            }),
            ke = K(async (...e) => {
              U(`sKec7jYlr`);
            }),
            Ae = T(_t, pe),
            je = St(fe);
          return m(y, {
            id: p ?? o,
            children: m(Tt, {
              animate: W,
              initial: !1,
              children: m(Ct, {
                value: bt,
                children: h(v.div, {
                  ...me,
                  ...be,
                  className: T(Ae, `framer-1d6qvpu`, f, _e),
                  "data-border": !0,
                  "data-framer-name": `Card`,
                  layoutDependency: G,
                  layoutId: `anAebR9ik`,
                  ref: i,
                  style: {
                    "--87u0ua": de,
                    "--border-bottom-width": (z?.borderBottomWidth ?? z?.borderWidth) + `px`,
                    "--border-color": z?.borderColor,
                    "--border-left-width": (z?.borderLeftWidth ?? z?.borderWidth) + `px`,
                    "--border-right-width": (z?.borderRightWidth ?? z?.borderWidth) + `px`,
                    "--border-style": z?.borderStyle,
                    "--border-top-width": (z?.borderTopWidth ?? z?.borderWidth) + `px`,
                    backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                    borderBottomLeftRadius: yt(ue, 3),
                    borderBottomRightRadius: yt(ue, 2),
                    borderTopLeftRadius: yt(ue, 0),
                    borderTopRightRadius: yt(ue, 1),
                    boxShadow: `var(--87u0ua)`,
                    ...d,
                  },
                  ...Z(
                    {
                      L3q4GRYFN: { "data-framer-name": `Tablet/Phone - Card - Hover` },
                      sKec7jYlr: { "data-framer-name": `Tablet/Phone - Card` },
                      VEZYULeNG: { "data-framer-name": `Card - Hover` },
                    },
                    V,
                    H
                  ),
                  children: [
                    h(v.div, {
                      className: `framer-55teke`,
                      "data-framer-name": `Tag Wrap`,
                      layoutDependency: G,
                      layoutId: `DJWpG1uL4`,
                      children: [
                        R !== !1 &&
                          m(I, {
                            children: m(S, {
                              className: `framer-1nqoldg-container`,
                              isModuleExternal: !0,
                              layoutDependency: G,
                              layoutId: `EwAVifHqr-container`,
                              nodeId: `EwAVifHqr`,
                              rendersWithMotion: !0,
                              scopeId: `S3WzxrIrx`,
                              children: m(xe, {
                                backgroundColor: `var(--token-63eb5426-0520-4a32-bacd-b64a01e98808, rgb(211, 34, 34))`,
                                borderRadius: 200,
                                discountPrefix: ``,
                                discountType: `Percentage`,
                                font: {
                                  fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                  fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss04' on, 'ss03' on`,
                                  fontSize: `12px`,
                                  fontStyle: `normal`,
                                  fontWeight: 500,
                                  letterSpacing: `0em`,
                                  lineHeight: `1.1em`,
                                },
                                format: {
                                  currencyCode: `USD`,
                                  showCurrency: !0,
                                  showDecimals: `Always show`,
                                  showSymbol: !0,
                                },
                                height: `100%`,
                                id: `EwAVifHqr`,
                                layoutId: `EwAVifHqr`,
                                padding: 6,
                                paddingBottom: 4,
                                paddingLeft: 8,
                                paddingPerSide: !0,
                                paddingRight: 8,
                                paddingTop: 4,
                                previewComparePrice: ae,
                                previewPrice: ie,
                                radiusBottomLeft: 200,
                                radiusBottomRight: 200,
                                radiusPerCorner: !1,
                                radiusTopLeft: 200,
                                radiusTopRight: 200,
                                shopifyProductID: B,
                                textColor: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                textFormat: `-{{discount}}`,
                                width: `100%`,
                              }),
                            }),
                          }),
                        oe !== !1 &&
                          m(v.div, {
                            className: `framer-khyrgc`,
                            "data-border": !0,
                            "data-framer-name": `New`,
                            layoutDependency: G,
                            layoutId: `GVtwsTroS`,
                            style: {
                              "--border-bottom-width": `0.95px`,
                              "--border-color": `var(--token-042b2c85-d47f-4328-a709-b08971e77652)`,
                              "--border-left-width": `0.95px`,
                              "--border-right-width": `0.95px`,
                              "--border-style": `solid`,
                              "--border-top-width": `0.95px`,
                              backgroundColor: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
                              borderBottomLeftRadius: 200,
                              borderBottomRightRadius: 200,
                              borderTopLeftRadius: 200,
                              borderTopRightRadius: 200,
                            },
                            children: m(O, {
                              __fromCanvasComponent: !0,
                              children: m(a, {
                                children: m(v.p, {
                                  className: `framer-styles-preset-nxm789`,
                                  "data-styles-preset": `oaj5XbvbS`,
                                  dir: `auto`,
                                  children: `New`,
                                }),
                              }),
                              className: `framer-17y4scp`,
                              "data-framer-name": `New`,
                              fonts: [`Inter`],
                              layoutDependency: G,
                              layoutId: `L85a1H4RU`,
                              style: { "--framer-paragraph-spacing": `0px` },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                          }),
                      ],
                    }),
                    m(I, {
                      height: 36,
                      y: (u?.y || 0) + 12,
                      children: m(S, {
                        className: `framer-1l75bub-container`,
                        layoutDependency: G,
                        layoutId: `eDRtC2f0l-container`,
                        nodeId: `eDRtC2f0l`,
                        rendersWithMotion: !0,
                        scopeId: `S3WzxrIrx`,
                        children: m(J, {
                          height: `100%`,
                          hpTCa5Ntv: B,
                          id: `eDRtC2f0l`,
                          layoutId: `eDRtC2f0l`,
                          onhpTCa5NtvChange: ge,
                          width: `100%`,
                          xsFze4nLO: Te,
                        }),
                      }),
                    }),
                    m(I, {
                      height: Math.max(0, ((u?.height || 474) - 0 - 345) / 1) * 1,
                      width: u?.width || `100vw`,
                      y: (u?.y || 0) + 0 + 0,
                      ...Z(
                        {
                          L3q4GRYFN: {
                            height: Math.max(0, ((u?.height || 401) - 0 - 333) / 1) * 1,
                          },
                          sKec7jYlr: {
                            height: Math.max(0, ((u?.height || 401) - 0 - 333) / 1) * 1,
                          },
                        },
                        V,
                        H
                      ),
                      children: m(S, {
                        className: `framer-18tmxtf-container`,
                        layoutDependency: G,
                        layoutId: `gGly0uX_D-container`,
                        nodeId: `gGly0uX_D`,
                        rendersWithMotion: !0,
                        scopeId: `S3WzxrIrx`,
                        children: m(X, {
                          gWxU8B3Xc: Q(P),
                          height: `100%`,
                          id: `gGly0uX_D`,
                          layoutId: `gGly0uX_D`,
                          LJaJk5uHw: B,
                          mhWYB6zak: Q(k),
                          Ock4JIJlD: Q(L),
                          onLJaJk5uHwChange: ge,
                          pBnZbYcTQ: Q(N),
                          SC74k342B: Q(D),
                          style: { height: `100%`, width: `100%` },
                          Uqk8sR_wQ: Q(A),
                          variant: xt(`Bac0PhjJ8`),
                          width: `100%`,
                          YCqaFJoff: Q(j),
                          yxNkxmKMl: Q(re),
                          ...Z(
                            {
                              L3q4GRYFN: { variant: xt(`IYz6_XE8i`) },
                              VEZYULeNG: { variant: xt(`IYz6_XE8i`) },
                            },
                            V,
                            H
                          ),
                        }),
                      }),
                    }),
                    h(v.div, {
                      className: `framer-1vfooqe`,
                      "data-framer-name": `Bottom`,
                      layoutDependency: G,
                      layoutId: `Du2Ye9DkD`,
                      children: [
                        m(ne, {
                          href: se,
                          motionChild: !0,
                          nodeId: `IHOe4mkhE`,
                          openInNewTab: ce,
                          scopeId: `S3WzxrIrx`,
                          children: m(v.a, {
                            className: `framer-13ei68y framer-1ddjle9`,
                            "data-framer-name": `Product Title`,
                            layoutDependency: G,
                            layoutId: `IHOe4mkhE`,
                            children: m(O, {
                              __fromCanvasComponent: !0,
                              children: m(a, {
                                children: m(v.p, {
                                  dir: `auto`,
                                  style: {
                                    "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                    "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                    "--framer-font-size": `18px`,
                                    "--framer-font-weight": `500`,
                                    "--framer-text-alignment": `left`,
                                    "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                    "--framer-text-transform": `inherit`,
                                  },
                                  children: `Product Title`,
                                }),
                              }),
                              className: `framer-gjj7yv`,
                              "data-framer-name": `Text`,
                              fonts: [`FS;General Sans-medium`],
                              layoutDependency: G,
                              layoutId: `gD6deHDRP`,
                              style: {
                                "--extracted-r6o4lv": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                "--framer-paragraph-spacing": `0px`,
                              },
                              text: b,
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                              ...Z(
                                {
                                  L3q4GRYFN: {
                                    children: m(a, {
                                      children: m(v.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                          "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                          "--framer-text-transform": `inherit`,
                                        },
                                        children: `Product Title`,
                                      }),
                                    }),
                                  },
                                  sKec7jYlr: {
                                    children: m(a, {
                                      children: m(v.p, {
                                        dir: `auto`,
                                        style: {
                                          "--font-selector": `RlM7R2VuZXJhbCBTYW5zLW1lZGl1bQ==`,
                                          "--framer-font-family": `"General Sans", "General Sans Placeholder", sans-serif`,
                                          "--framer-font-weight": `500`,
                                          "--framer-text-alignment": `left`,
                                          "--framer-text-color": `var(--extracted-r6o4lv, var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16)))`,
                                          "--framer-text-transform": `inherit`,
                                        },
                                        children: `Product Title`,
                                      }),
                                    }),
                                  },
                                },
                                V,
                                H
                              ),
                            }),
                          }),
                        }),
                        m(ne, {
                          href: se,
                          motionChild: !0,
                          nodeId: `wRqNfJaZ_`,
                          openInNewTab: ce,
                          scopeId: `S3WzxrIrx`,
                          children: h(v.a, {
                            className: `framer-58ci71 framer-1ddjle9`,
                            "data-framer-name": `Price`,
                            layoutDependency: G,
                            layoutId: `wRqNfJaZ_`,
                            children: [
                              m(I, {
                                children: m(S, {
                                  className: `framer-d7omee-container`,
                                  "data-framer-name": `Product Price`,
                                  isModuleExternal: !0,
                                  layoutDependency: G,
                                  layoutId: `uTiAq9Cpy-container`,
                                  name: `Product Price`,
                                  nodeId: `uTiAq9Cpy`,
                                  rendersWithMotion: !0,
                                  scopeId: `S3WzxrIrx`,
                                  children: m(le, {
                                    canvasPrice: ie,
                                    displayPrice: `minimum price`,
                                    format: {
                                      currencyCode: `USD`,
                                      showCurrency: !1,
                                      showDecimals: `Always show`,
                                      showSymbol: !0,
                                    },
                                    fromText: `from`,
                                    height: `100%`,
                                    id: `uTiAq9Cpy`,
                                    layoutId: `uTiAq9Cpy`,
                                    name: `Product Price`,
                                    regularColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    regularFont: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `18px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `0em`,
                                      lineHeight: `1.1em`,
                                      textAlign: `left`,
                                    },
                                    saleColor: `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                                    saleFont: {
                                      fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                      fontSize: `18px`,
                                      fontStyle: `normal`,
                                      fontWeight: 500,
                                      letterSpacing: `0em`,
                                      lineHeight: `1.1em`,
                                      textAlign: `left`,
                                    },
                                    shopifyProductID: B,
                                    width: `100%`,
                                    ...Z(
                                      {
                                        L3q4GRYFN: {
                                          regularFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                          saleFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                        },
                                        sKec7jYlr: {
                                          regularFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                          saleFont: {
                                            fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                            fontSize: `16px`,
                                            fontStyle: `normal`,
                                            fontWeight: 500,
                                            letterSpacing: `0em`,
                                            lineHeight: `1.1em`,
                                            textAlign: `left`,
                                          },
                                        },
                                      },
                                      V,
                                      H
                                    ),
                                  }),
                                }),
                              }),
                              je !== !1 &&
                                m(I, {
                                  children: m(S, {
                                    className: `framer-1ohtyrw-container`,
                                    "data-framer-name": `Product Compare Price`,
                                    isModuleExternal: !0,
                                    layoutDependency: G,
                                    layoutId: `Glo0HBgyl-container`,
                                    name: `Product Compare Price`,
                                    nodeId: `Glo0HBgyl`,
                                    rendersWithMotion: !0,
                                    scopeId: `S3WzxrIrx`,
                                    children: m(he, {
                                      canvasPrice: ae,
                                      color: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                      compareAtPrefix: ``,
                                      font: {
                                        fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                        fontSize: `18px`,
                                        fontStyle: `normal`,
                                        fontWeight: 500,
                                        letterSpacing: `-0.02em`,
                                        lineHeight: `1.1em`,
                                        textAlign: `left`,
                                      },
                                      format: {
                                        currencyCode: `USD`,
                                        showCurrency: !1,
                                        showDecimals: `Always show`,
                                        showSymbol: !0,
                                      },
                                      height: `100%`,
                                      id: `Glo0HBgyl`,
                                      layoutId: `Glo0HBgyl`,
                                      name: `Product Compare Price`,
                                      shopifyProductID: B,
                                      strikethrough: !0,
                                      strikethroughColor: `var(--token-50116fd7-0a9d-4c95-ab55-4e84f12ed99b, rgb(117, 117, 117))`,
                                      strikethroughSize: 1.5,
                                      width: `100%`,
                                      ...Z(
                                        {
                                          L3q4GRYFN: {
                                            font: {
                                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                              fontSize: `16px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `-0.02em`,
                                              lineHeight: `1.1em`,
                                              textAlign: `left`,
                                            },
                                          },
                                          sKec7jYlr: {
                                            font: {
                                              fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                              fontSize: `16px`,
                                              fontStyle: `normal`,
                                              fontWeight: 500,
                                              letterSpacing: `-0.02em`,
                                              lineHeight: `1.1em`,
                                              textAlign: `left`,
                                            },
                                          },
                                        },
                                        V,
                                        H
                                      ),
                                    }),
                                  }),
                                }),
                            ],
                          }),
                        }),
                        m(I, {
                          children: m(S, {
                            className: `framer-1gjphnl-container`,
                            isModuleExternal: !0,
                            layoutDependency: G,
                            layoutId: `eU3CHgOFt-container`,
                            nodeId: `eU3CHgOFt`,
                            rendersWithMotion: !0,
                            scopeId: `S3WzxrIrx`,
                            children: m(ve, {
                              behaviorConfigs: {
                                action: `Update Active`,
                                autoSelectFirst: !0,
                                filterVariants: {
                                  variantGroups: `equals`,
                                  variantTitles: [`Color`],
                                },
                                productPage: !1,
                                selectOutOfStock: !1,
                                showSingleVariants: !0,
                                triggerCart: !0,
                              },
                              buttonConfigs: {
                                columnCount: 3,
                                columns: `auto`,
                                direction: `horizontal`,
                                gap: 0,
                                gapY: 0,
                                gridWidth: 40,
                                hovered: {
                                  background: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                  border: {
                                    borderColor: `var(--token-f87ea788-5cdc-4aac-9d76-b9ca5ca31f6c, rgb(3, 6, 7))`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                    bottom: 1,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    top: 1,
                                  },
                                  color: `rgb(0, 0, 0)`,
                                  font: {},
                                  textTransform: `None`,
                                },
                                layout: `stack`,
                                maxColumns: 6,
                                outOfStock: {
                                  background: `var(--token-5cd51282-a57c-464e-be3b-a84a36f4dfa4, rgba(3, 6, 7, 0.08))`,
                                  border: {
                                    borderColor: `rgba(255, 255, 255, 0)`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                    bottom: 1,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    top: 1,
                                  },
                                  color: `var(--token-c48d383f-9060-4848-866e-a44cd05720a2, rgba(3, 6, 7, 0.59))`,
                                  font: {
                                    fontFamily: `"General Sans", "General Sans Placeholder", sans-serif`,
                                    fontSize: `14px`,
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
                                padding: `0px`,
                                radius: `0px`,
                                selected: {
                                  background: `rgb(0, 0, 0)`,
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
                                  color: `rgb(255, 255, 255)`,
                                  font: {},
                                  textTransform: `None`,
                                },
                                unselected: {
                                  background: `var(--token-5d7827db-2504-44e9-9d0e-b4057d91463b, rgb(255, 255, 255))`,
                                  border: {
                                    borderColor: `var(--token-5cd51282-a57c-464e-be3b-a84a36f4dfa4, rgba(3, 6, 7, 0.08))`,
                                    borderStyle: `solid`,
                                    borderWidth: 1,
                                    bottom: 1,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    top: 1,
                                  },
                                  color: `rgb(0, 0, 0)`,
                                  font: {},
                                  textTransform: `None`,
                                },
                                width: !1,
                              },
                              colors: [
                                { hex: `rgb(36, 35, 34)`, name: `Black` },
                                { hex: `rgb(206, 202, 199)`, name: `Gray` },
                                { hex: `rgb(224, 211, 184)`, name: `Stone Taupe` },
                                { hex: `rgb(128, 128, 128)`, name: `Charcoal Gray` },
                                { hex: `rgb(255, 138, 0)`, name: `Orange` },
                                { hex: `rgb(137, 200, 158)`, name: `Sage Green` },
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
                                gap: 0,
                                gap2: 0,
                                padding: `0px`,
                                radius: `0px`,
                              },
                              dropdownConfigs: {
                                focus: { color: `rgb(0, 153, 255)`, offset: 2, width: 2 },
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
                              id: `eU3CHgOFt`,
                              images: { imageChange: !1, imageTrigger: `Gallery`, offsetY: 0 },
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
                              layoutId: `eU3CHgOFt`,
                              selectedConfigs: {
                                color: `rgb(0, 0, 0)`,
                                emptyText: `Select {{Option Value}}`,
                                emptyVisible: !0,
                                font: {},
                                gap: 8,
                                textTransform: `None`,
                                visible: !1,
                              },
                              shopifyProductID: B,
                              style: `Buttons`,
                              swatches: {
                                colorEnabled: !0,
                                gap: 4,
                                height: 24,
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
                                padding: `1px`,
                                radius: `200px`,
                                selected: {
                                  background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
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
                                width: 24,
                              },
                              swatchImages: [],
                              titleConfigs: {
                                color: `rgb(0, 0, 0)`,
                                display: `{{Option}}`,
                                font: {},
                                gap: 8,
                                textTransform: `None`,
                                visible: !1,
                              },
                              variantImageIds: E,
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
                              variants: w,
                              width: `100%`,
                              ...Z(
                                {
                                  L3q4GRYFN: {
                                    swatches: {
                                      colorEnabled: !0,
                                      gap: 4,
                                      height: 22,
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
                                      padding: `1px`,
                                      radius: `200px`,
                                      selected: {
                                        background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
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
                                      width: 22,
                                    },
                                  },
                                  sKec7jYlr: {
                                    swatches: {
                                      colorEnabled: !0,
                                      gap: 4,
                                      height: 22,
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
                                      padding: `1px`,
                                      radius: `200px`,
                                      selected: {
                                        background: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
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
                                      width: 22,
                                    },
                                  },
                                },
                                V,
                                H
                              ),
                            }),
                          }),
                        }),
                        m(ne, {
                          href: se,
                          motionChild: !0,
                          nodeId: `QktD1Pguh`,
                          openInNewTab: ce,
                          scopeId: `S3WzxrIrx`,
                          children: m(v.a, {
                            className: `framer-1bme5in framer-1ddjle9`,
                            "data-framer-name": `Product Link`,
                            layoutDependency: G,
                            layoutId: `QktD1Pguh`,
                          }),
                        }),
                      ],
                    }),
                    m(ne, {
                      href: se,
                      motionChild: !0,
                      nodeId: `grU3c6O1e`,
                      openInNewTab: ce,
                      scopeId: `S3WzxrIrx`,
                      children: m(v.a, {
                        className: `framer-1przpqi framer-1ddjle9`,
                        "data-framer-name": `Img Change Trigger & Link`,
                        "data-highlight": !0,
                        layoutDependency: G,
                        layoutId: `grU3c6O1e`,
                        onMouseEnter: Ee,
                        ...Z(
                          {
                            L3q4GRYFN: { onMouseEnter: Oe, onMouseLeave: ke },
                            sKec7jYlr: { onMouseEnter: Oe },
                            VEZYULeNG: { onMouseLeave: De },
                          },
                          V,
                          H
                        ),
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
          `.framer-75IJs.framer-1ddjle9, .framer-75IJs .framer-1ddjle9 { display: block; }`,
          `.framer-75IJs.framer-1d6qvpu { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 474px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 400px; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-75IJs .framer-55teke { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; left: 0px; overflow: visible; padding: 15px 0px 0px 15px; position: absolute; right: 0px; top: 0px; z-index: 3; }`,
          `.framer-75IJs .framer-1nqoldg-container, .framer-75IJs .framer-d7omee-container, .framer-75IJs .framer-1ohtyrw-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-75IJs .framer-khyrgc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 4px 12px 3px 12px; position: relative; width: min-content; z-index: 1; }`,
          `.framer-75IJs .framer-17y4scp { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-75IJs .framer-1l75bub-container { flex: none; height: auto; position: absolute; right: 12px; top: 12px; width: auto; z-index: 3; }`,
          `.framer-75IJs .framer-18tmxtf-container { -webkit-user-select: none; flex: 1 0 0px; height: 1px; position: relative; user-select: none; width: 100%; z-index: 0; }`,
          `.framer-75IJs .framer-1vfooqe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 16px 16px 15px 16px; position: relative; width: 100%; z-index: 3; }`,
          `.framer-75IJs .framer-13ei68y { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; user-select: none; width: 100%; z-index: 2; }`,
          `.framer-75IJs .framer-gjj7yv { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 1; display: -webkit-box; flex: 1 0 0px; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 1px; word-break: break-word; word-wrap: break-word; }`,
          `.framer-75IJs .framer-58ci71 { -webkit-user-select: none; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; text-decoration: none; user-select: none; width: min-content; z-index: 2; }`,
          `.framer-75IJs .framer-1gjphnl-container { bottom: 10px; flex: none; height: auto; position: absolute; right: 12px; width: auto; z-index: 2; }`,
          `.framer-75IJs .framer-1bme5in { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; text-decoration: none; top: 0px; z-index: 1; }`,
          `.framer-75IJs .framer-1przpqi { bottom: 0px; flex: none; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; text-decoration: none; top: 0px; z-index: 2; }`,
          `.framer-75IJs.framer-v-12zk4j2.framer-1d6qvpu, .framer-75IJs.framer-v-fopauv.framer-1d6qvpu { height: 401px; width: 320px; }`,
          ..._e,
          `.framer-75IJs[data-border="true"]::after, .framer-75IJs [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-75IJs`
      )),
      ($.displayName = `Product Card`),
      ($.defaultProps = { height: 474, width: 400 }),
      D($, {
        variant: {
          options: [`anAebR9ik`, `VEZYULeNG`, `sKec7jYlr`, `L3q4GRYFN`],
          optionTitles: [
            `Card`,
            `Card - Hover`,
            `Tablet/Phone - Card`,
            `Tablet/Phone - Card - Hover`,
          ],
          title: `Variant`,
          type: L.Enum,
        },
        CtxCtZRbF: { title: `Wishlist Click`, type: L.EventHandler },
        Zg3vnZECo: {
          defaultValue: `Product Title`,
          displayTextArea: !1,
          title: `Product Title`,
          type: L.String,
        },
        onZg3vnZECoChange: { changes: `Zg3vnZECo`, type: L.ChangeHandler },
        hFy2PLFBG: { defaultValue: ``, title: `Product ID`, type: L.String },
        onhFy2PLFBGChange: { changes: `hFy2PLFBG`, type: L.ChangeHandler },
        TCGQti0b7: { defaultValue: ``, title: `Variants`, type: L.String },
        onTCGQti0b7Change: { changes: `TCGQti0b7`, type: L.ChangeHandler },
        wsSEriDkC: { defaultValue: ``, title: `Image ID`, type: L.String },
        onwsSEriDkCChange: { changes: `wsSEriDkC`, type: L.ChangeHandler },
        O9ZyioqcS: { title: `Image 1`, type: L.ResponsiveImage },
        ub4buTzaB: { title: `Image 2`, type: L.ResponsiveImage },
        TWjfUBTmo: {
          __defaultAssetReference: `data:framer/asset-reference,3U4jonUoubpsiLRUColgcAgaKsE.png?originalFilename=Frame+6372.png&width=1660&height=1656`,
          title: `Image 3`,
          type: L.ResponsiveImage,
        },
        YdL5oV0XS: {
          __defaultAssetReference: `data:framer/asset-reference,3U4jonUoubpsiLRUColgcAgaKsE.png?originalFilename=Frame+6372.png&width=1660&height=1656`,
          title: `Image 4`,
          type: L.ResponsiveImage,
        },
        grTamTNk1: {
          __defaultAssetReference: `data:framer/asset-reference,3U4jonUoubpsiLRUColgcAgaKsE.png?originalFilename=Frame+6372.png&width=1660&height=1656`,
          title: `Image 5`,
          type: L.ResponsiveImage,
        },
        q1Wa9MpBb: {
          __defaultAssetReference: `data:framer/asset-reference,3U4jonUoubpsiLRUColgcAgaKsE.png?originalFilename=Frame+6372.png&width=1660&height=1656`,
          title: `Image 6`,
          type: L.ResponsiveImage,
        },
        CTjlm1DJ8: { title: `Image 7`, type: L.ResponsiveImage },
        c7pUNAJD5: { title: `Image 8`, type: L.ResponsiveImage },
        tJ0RQfmJy: { defaultValue: `50.00`, title: `Price`, type: L.String },
        ontJ0RQfmJyChange: { changes: `tJ0RQfmJy`, type: L.ChangeHandler },
        Qb7mSHgLh: { defaultValue: `75.00`, title: `Compare Price`, type: L.String },
        onQb7mSHgLhChange: { changes: `Qb7mSHgLh`, type: L.ChangeHandler },
        OKvEEQQFQ: { defaultValue: !0, title: `New Arrival Tag`, type: L.Boolean },
        onOKvEEQQFQChange: { changes: `OKvEEQQFQ`, type: L.ChangeHandler },
        QjM5BTCWQ: { defaultValue: !0, title: `Discount Tag`, type: L.Boolean },
        onQjM5BTCWQChange: { changes: `QjM5BTCWQ`, type: L.ChangeHandler },
        MGgAvDoA0: { title: `Product Link`, type: L.Link },
        HwypVSMEi: { defaultValue: !1, title: `New Tab`, type: L.Boolean },
        onHwypVSMEiChange: { changes: `HwypVSMEi`, type: L.ChangeHandler },
        xYhX6dOGf: {
          defaultValue: { borderColor: `rgb(206, 206, 206)`, borderStyle: `solid`, borderWidth: 0 },
          title: `Border`,
          type: L.Border,
        },
        II0fWsmjM: { defaultValue: `12px`, title: `Radius`, type: L.BorderRadius },
        FgMmIZmJw: {
          defaultValue: [
            {
              blur: 3.8,
              color: `rgba(0, 0, 0, 0.03999999910593033)`,
              diffusion: 0.5,
              focus: 0.5,
              inset: !1,
              spread: 1,
              type: `box`,
              x: 0,
              y: 0,
            },
            {
              blur: 0,
              color: `rgba(0, 0, 0, 0.03999999910593033)`,
              diffusion: 0.5,
              focus: 0.5,
              inset: !1,
              spread: 1,
              type: `box`,
              x: 0,
              y: 0,
            },
          ],
          title: `Shadow`,
          type: L.BoxShadow,
        },
        SKBNP2vvn: { defaultValue: !1, title: `Hide Compare Price`, type: L.Boolean },
        onSKBNP2vvnChange: { changes: `SKBNP2vvn`, type: L.ChangeHandler },
      }),
      E(
        $,
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
          ...ut,
          ...dt,
          ...ft,
          ...pt,
          ...mt,
          ...ht,
          ...w(ye),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      ($.loader = { load: (e, t) => (t.locale, Promise.allSettled([A(J, {}, t), A(X, {}, t)])) }));
  });
export { U as a, De as i, kt as n, G as o, Ee as r, $ as t };
//# sourceMappingURL=S3WzxrIrx.C6dgk-ax.mjs.map
