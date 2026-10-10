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
  a as u,
  c as d,
  g as f,
  i as p,
  j as m,
  l as h,
  o as g,
  s as _,
  w as v,
  y,
} from "./react.CWoGm2_e.mjs";
import { C as b, a as x, n as S, r as C, t as w } from "./motion.DjW49AAR.mjs";
import {
  A as T,
  D as E,
  Et as D,
  H as O,
  I as k,
  O as A,
  Ot as j,
  P as M,
  S as N,
  St as P,
  T as F,
  Tt as I,
  U as L,
  X as R,
  _ as ee,
  _t as z,
  a as B,
  ct as V,
  dt as te,
  f as ne,
  ft as re,
  h as ie,
  i as H,
  j as U,
  k as W,
  kt as ae,
  mt as oe,
  n as se,
  nt as ce,
  o as G,
  st as le,
  vt as ue,
  w as de,
  x as fe,
  xt as pe,
} from "./framer.D9PtOJZM.mjs";
import { i as me, n as K, r as q, t as J } from "./J6OXVPwtV.C1CsVzE5.mjs";
import { i as Y, t as he } from "./vDz2snn78.DZVUjcrj.mjs";
import { i as ge, n as X, r as _e, t as Z } from "./KeRkDnnjN.vcMReJ0n.mjs";
import { a as Q, c as $, i as ve, o as ye, r as be, s as xe } from "./shared-lib.Cln7NIgD.mjs";
import { n as Se, t as Ce } from "./PcZeB9dzj.lfd4RlWt.mjs";
import { i as we, n as Te, r as Ee, t as De } from "./zWe8uO5eV.D_hz-QQE.mjs";
import { n as Oe, t as ke } from "./Phosphor.DhdvwZO7.mjs";
import { n as Ae, t as je } from "./wuFmlW7jd.DUSVcwDX.mjs";
import {
  a as Me,
  c as Ne,
  i as Pe,
  n as Fe,
  o as Ie,
  r as Le,
  s as Re,
  t as ze,
} from "./aaovIUHpV.CditPMM4.mjs";
import Be, { t as Ve } from "./qvYF8bD47STdJNJc-TflQgn3TD6Sy4OZ9-gyhuuGF4E.BR-7MEEO.mjs";
function He(e) {
  let {
      type: t,
      content: n,
      font: a,
      color: s,
      transform: c,
      noQuery: l,
      searchText: u,
      noFavorites: f,
      favoritesText: p,
      noResults: m,
      defaultText: h,
      preview: g,
    } = e,
    [_, v] = o(``),
    [y, b] = o(0),
    [x, S] = o(!1),
    [C, w] = o(!1),
    T = () => {
      if (i === void 0) return !1;
      try {
        return (
          i.document?.location?.href.includes(`framer`) ||
          i.document?.location?.pathname.includes(`preview`) ||
          !i.document?.location?.host ||
          i.parent !== i
        );
      } catch {
        return !0;
      }
    },
    E = (e, t) => {
      switch (t) {
        case `Uppercase`:
          return e.toUpperCase();
        case `Lowercase`:
          return e.toLowerCase();
        case `Capitalize`:
          return e
            .split(` `)
            .map((e) => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
            .join(` `);
        default:
          return e;
      }
    },
    D = (e) => {
      let t = T() && !_ ? `term` : _;
      return e.replace(/\{\{term\}\}/g, t).replace(/\{\{\#\}\}/g, y.toString());
    },
    O = () => i !== void 0 && new URLSearchParams(i.location.search).has(`search`),
    k = () => {
      if (de.current() === de.canvas) {
        if (g === `Empty`) {
          if (t === `Search`) return (l === `Show` && u) || ``;
          if (t === `Favorites`) return (f === `Show` && p) || ``;
          if (t === `Default`) return (m === `Show` && h) || ``;
        }
        if (g === `Results`) return n;
      }
      return t === `Search` && !O()
        ? (l === `Show` && u) || ``
        : t === `Favorites` && y === 0
          ? (f === `Show` && p) || ``
          : t === `Default` && y === 0
            ? !T() && !x
              ? ``
              : (m === `Show` && h) || ``
            : n;
    },
    A = () => {
      if (i === void 0) return 0;
      try {
        return JSON.parse(localStorage.getItem(`favorites`) || `[]`).length;
      } catch {
        return 0;
      }
    };
  (r(() => {
    if (de.current() === de.canvas) {
      w(!0);
      return;
    }
    let e = setTimeout(() => {
      w(!0);
    }, 500);
    return () => clearTimeout(e);
  }, []),
    r(() => {
      t === `Favorites` && b(A());
      let e = (e) => {
          e.detail;
          let n = e.detail.term || e.detail.search;
          (v(n), e.detail.term === `` && e.detail.count && t !== `Favorites` && b(e.detail.count));
        },
        n = (e) => {
          if ((e.detail, t !== `Favorites`)) {
            let t = e.detail.count || 0;
            (b(t), e.detail.search === `` && b(e.detail.count), t > 0 && S(!0));
          }
        },
        r = (e) => {
          if (t === `Favorites`) {
            let { favorites: t } = e.detail || {},
              n = t && Array.isArray(t) ? t.length : null;
            if (n !== null) (b(n), n > 0 && S(!0));
            else {
              let e = A();
              (b(e), e > 0 && S(!0));
            }
          }
        },
        a = () => {
          if (i !== void 0) {
            let e = new URLSearchParams(i.location.search).get(`search`);
            e && v(e);
          }
        };
      return (
        a(),
        i.addEventListener(`popstate`, a),
        t !== `Favorites` &&
          (document.addEventListener(`product-search-change`, e),
          document.addEventListener(`filter-navigation`, e),
          document.addEventListener(`product-search-results`, n)),
        t === `Favorites` && document.addEventListener(`favorites-updated`, r),
        () => {
          (i.removeEventListener(`popstate`, a),
            t !== `Favorites` &&
              (document.removeEventListener(`product-search-change`, e),
              document.removeEventListener(`filter-navigation`, e),
              document.removeEventListener(`product-search-results`, n)),
            t === `Favorites` && document.removeEventListener(`favorites-updated`, r));
        }
      );
    }, [t]));
  let j = { width: `100%`, height: `100%`, display: `flex`, alignItems: `center` },
    M = { ...a, color: s, textTransform: c.toLowerCase() };
  return d(`div`, {
    style: { ...j, opacity: +!!C, transition: `opacity 0.3s ease-in-out` },
    children: d(`span`, { style: M, children: E(D(k()), c) }),
  });
}
var Ue = e(() => {
  (n(),
    g(),
    R(),
    v(),
    (He.defaultProps = {
      type: `Default`,
      content: `{{#}} items`,
      font: { family: `Inter`, fontSize: 16, weight: 400 },
      color: `#000000`,
      transform: `None`,
      noQuery: `Hide`,
      searchText: ``,
      noFavorites: `Hide`,
      favoritesText: ``,
      noResults: `Hide`,
      defaultText: ``,
      preview: `Results`,
    }),
    U(He, {
      preview: {
        type: G.Enum,
        title: `Preview`,
        options: [`Results`, `Empty`],
        defaultValue: `Results`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        description: `For canvas preview only. Framer Preview won't show true behavior; test in real browser.`,
      },
      font: { type: G.Font, title: `Font`, controls: `extended` },
      color: { type: G.Color, title: `Color`, defaultValue: `#000000` },
      transform: {
        type: G.Enum,
        title: `Transform`,
        options: [`None`, `Uppercase`, `Lowercase`, `Capitalize`],
        defaultValue: `None`,
      },
      type: {
        type: G.Enum,
        title: `Type`,
        options: [`Default`, `Search`, `Favorites`],
        displaySegmentedControl: !0,
        segmentedControlDirection: `vertical`,
        defaultValue: `Default`,
      },
      content: {
        type: G.String,
        title: `↳ Text`,
        defaultValue: `{{#}} items`,
        description: `Use {{#}} for item count. 
 
 If on a dedicated Search page, use {{term}} for the search value.`,
      },
      noQuery: {
        type: G.Enum,
        title: `No Query`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Search`,
        description: `Text to display if no query param exists.`,
      },
      searchText: {
        type: G.String,
        title: `↳ Text`,
        defaultValue: `Start your search...`,
        hidden: (e) => e.type !== `Search` || e.noQuery === `Hide`,
      },
      noFavorites: {
        type: G.Enum,
        title: `No Favorites`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Favorites`,
        description: `Text to display if no favorites exist.`,
      },
      favoritesText: {
        type: G.String,
        title: `↳ Text`,
        defaultValue: `No favorites yet...`,
        hidden: (e) => e.type !== `Favorites` || e.noFavorites === `Hide`,
      },
      noResults: {
        type: G.Enum,
        title: `No Results`,
        options: [`Show`, `Hide`],
        defaultValue: `Hide`,
        displaySegmentedControl: !0,
        segmentedControlDirection: `horizontal`,
        hidden: (e) => e.type !== `Default`,
        description: `Text to display if no results exist.`,
      },
      defaultText: {
        type: G.String,
        title: `↳ Text`,
        defaultValue: `No results found...`,
        hidden: (e) => e.type !== `Default` || e.noResults === `Hide`,
      },
    }));
});
function We(e) {
  let {
      filterType: n = `shopify`,
      property: a = `price`,
      displayText: s = ``,
      value: u = ``,
      priceType: f = `Under`,
      priceThreshold: p = 100,
      priceOver: m = 50,
      priceLow: g = 50,
      priceHigh: _ = 100,
      discountType: v = `Percent`,
      discountValueType: y = `Over`,
      discountThreshold: b = 100,
      discountLow: x = 50,
      discountHigh: S = 100,
      variantTitle: C = `Size`,
      variantValue: w = `Large`,
      showVariantTitle: T = !0,
      showVariantValue: E = !0,
      variantStockFilter: D = `all`,
      variantDisplayText: O = ``,
      showText: k = !0,
      cmsTitle: A = `Category`,
      cmsValue: j = `fashion`,
      font: M = {
        fontSize: 16,
        fontWeight: 400,
        fontFamily: `Inter`,
        fontStyle: `normal`,
        lineHeight: 1.2,
        letterSpacing: 0,
        textAlign: `left`,
        textDecoration: `none`,
      },
      style: {
        type: N = `checkbox`,
        width: P = 20,
        height: F = 20,
        radius: I = 4,
        radiusPerSide: L = !1,
        radiusTopLeft: R = 4,
        radiusTopRight: ee = 4,
        radiusBottomRight: z = 4,
        radiusBottomLeft: B = 4,
        swatchType: V = `color`,
        swatchImage: te = ``,
        swatchColor: ne = `#000000`,
        swatchBorder: re = 4,
        icon: {
          type: ie = `default`,
          color: H = `#000000`,
          weight: U = 2,
          edge: W = `round`,
          size: ae = 12,
          customIcon: oe = ``,
        } = {},
        gap: se = 8,
        padding: ce = 8,
        paddingPerSide: G = !1,
        paddingTop: le = 8,
        paddingRight: ue = 8,
        paddingBottom: fe = 8,
        paddingLeft: pe = 8,
        direction: me = `horizontal`,
      } = {},
      default: K = {
        textColor: `#000000`,
        border: {
          color: `#000000`,
          width: { top: 2, right: 2, bottom: 2, left: 2 },
          style: `solid`,
        },
        background: `transparent`,
      },
      hover: q = {
        textColor: `#333333`,
        border: {
          color: `#333333`,
          width: { top: 2, right: 2, bottom: 2, left: 2 },
          style: `solid`,
        },
        background: `rgba(0,0,0,0.05)`,
      },
      selected: J = {
        textColor: `#000000`,
        border: {
          color: `#000000`,
          width: { top: 2, right: 2, bottom: 2, left: 2 },
          style: `solid`,
        },
        background: `rgba(255, 255, 255, 0)`,
      },
    } = e,
    Y = t(`filter-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`).current,
    he = t(null),
    ge = t(!0),
    [X, _e] = o(!1),
    [Z, Q] = o(!1),
    $ = t(!1),
    ve = c(
      () =>
        n === `cms`
          ? `cms`
          : {
              "product-type": `product_type`,
              "product-tag": `product_tag`,
              "on-sale": `on_sale`,
              "in-stock": `in_stock`,
              bundles: `bundle`,
              subscriptions: `subscription`,
              variant: `variant`,
              price: `price`,
              discount: v === `Percent` ? `discount_percent` : `discount_amount`,
            }[a] || a,
      [a, n, v]
    ),
    ye = l(() => {
      try {
        if (n === `cms`) return { title: A, value: j, type: `cms` };
        if (a === `variant`) return { name: C, value: w };
        if (a === `price`) {
          let e = [];
          return (
            f === `Under` && e.push({ priceType: f, min: null, max: p }),
            f === `Over` && e.push({ priceType: f, min: m, max: null }),
            f === `Range` && e.push({ priceType: f, min: g, max: _ }),
            { values: e }
          );
        }
        return a === `discount`
          ? {
              type: v === `Percent` ? `discount_percent` : `discount_amount`,
              values: [{ min: y === `Over` ? b : x, max: y === `Over` ? null : S }],
            }
          : [`on-sale`, `in-stock`, `bundles`, `subscriptions`].includes(a)
            ? !0
            : u;
      } catch (e) {
        return (console.error(`Error getting filter value:`, e), ``);
      }
    }, [n, a, u, f, p, g, _, v, y, b, x, S, C, w, A, j, ve]),
    be = l(() => {
      try {
        if (i === void 0) return !1;
        let e = new URL(i.location.href),
          t = ye();
        if ((e.toString(), n === `cms`))
          try {
            return JSON.parse(e.searchParams.get(`cms-filter`) || `[]`).some(
              (e) => e.title === A && e.value === j
            );
          } catch (e) {
            return (console.error(`Error parsing CMS filters from URL:`, e), !1);
          }
        let r = Re(e.searchParams);
        switch (a) {
          case `collection`:
          case `product-type`:
          case `product-tag`: {
            let e = Me(a);
            return r[e]?.active && r[e].values.includes(t);
          }
          case `variant`:
            return r.variant?.active
              ? r.variant.values.some((e) => e.name === C && e.value === w)
              : !1;
          case `price`: {
            if (!r.price?.active) return !1;
            let n = t.values[0];
            if (n.priceType === `Under`)
              return (e.searchParams.get(`price_max`)?.split(`,`).map(Number) || []).includes(
                n.max
              );
            if (n.priceType === `Over`)
              return (e.searchParams.get(`price_min`)?.split(`,`).map(Number) || []).includes(
                n.min
              );
            {
              let t = e.searchParams.get(`price`)?.split(`,`).filter(Boolean) || [],
                r = `${n.min}-${n.max}`;
              return t.includes(r);
            }
          }
          case `discount`: {
            let e = v === `Percent` ? `discount_percent` : `discount_amount`;
            if (!r[e]?.active) return !1;
            let t = { min: y === `Over` ? b : x, max: y === `Over` ? null : S };
            return r[e].values
              ? r[e].values.some((e) => e.min === t.min && e.max === t.max)
              : y === `Over` && r[e].min
                ? r[e].min.includes(b)
                : !1;
          }
          case `on-sale`:
          case `in-stock`:
          case `bundles`:
          case `subscriptions`:
            return r[Me(a)]?.active;
          default:
            return !1;
        }
      } catch (e) {
        return (console.error(`Error checking URL state:`, e), !1);
      }
    }, [n, a, ve, ye, C, w, A, j, f, p, g, _, v, y, b, x, S]),
    xe = l(
      (e) => {
        try {
          let t = ye(),
            r = new URL(i.location.href),
            o = Re(r.searchParams);
          if (n === `cms`)
            try {
              let t = JSON.parse(r.searchParams.get(`cms-filter`) || `[]`);
              if (e)
                t.some((e) => e.title === A && e.value === j) ||
                  (t.push({ title: A, value: j, type: `cms` }),
                  r.searchParams.set(`cms-filter`, JSON.stringify(t)),
                  t.length);
              else {
                let e = t.filter((e) => !(e.title === A && e.value === j));
                (e.length > 0
                  ? r.searchParams.set(`cms-filter`, JSON.stringify(e))
                  : r.searchParams.delete(`cms-filter`),
                  e.length);
              }
            } catch (e) {
              console.error(`Error updating CMS filters in URL:`, e);
            }
          else {
            switch (a) {
              case `collection`:
              case `product-type`:
              case `product-tag`: {
                let n = Me(a);
                e
                  ? (o[n] || (o[n] = { active: !0, values: [] }),
                    o[n].values.includes(t) || o[n].values.push(t),
                    (o[n].active = !0))
                  : o[n] &&
                    o[n].values &&
                    ((o[n].values = o[n].values.filter((e) => e !== t)),
                    (o[n].active = o[n].values.length > 0));
                break;
              }
              case `variant`:
                if (e) {
                  ((o.variant ||= { active: !0, values: [] }),
                    o.variant.values.some((e) => e.name === C && e.value === w) ||
                      o.variant.values.push({ name: C, value: w }),
                    (o.variant.active = o.variant.values.length > 0));
                  let e = `variant_${C}`;
                  if (r.searchParams.has(e)) {
                    let t = r.searchParams.get(e);
                    if (t) {
                      let n = decodeURIComponent(t).split(`,`).filter(Boolean);
                      n.some((e) => e.toLowerCase() === w.toLowerCase()) ||
                        (n.push(w), r.searchParams.set(e, n.join(`,`)));
                    }
                  } else r.searchParams.set(e, w);
                } else if (o.variant && o.variant.values) {
                  ((o.variant.values = o.variant.values.filter(
                    (e) => !(e.name === C && e.value === w)
                  )),
                    o.variant.values.length > 0 && (o.variant.active = !0));
                  let e = `variant_${C}`;
                  if (r.searchParams.has(e)) {
                    let t = r.searchParams.get(e);
                    if (t) {
                      let n = t
                        .split(`,`)
                        .filter(Boolean)
                        .filter((e) => e !== w);
                      n.length > 0 ? r.searchParams.set(e, n.join(`,`)) : r.searchParams.delete(e);
                    }
                  }
                }
                break;
              case `price`: {
                let n = t.values[0];
                if (n.priceType === `Under`) {
                  let t = r.searchParams.get(`price_max`)?.split(`,`).map(Number) || [];
                  if (e) t.includes(n.max) || t.push(n.max);
                  else {
                    let e = t.indexOf(n.max);
                    e > -1 && t.splice(e, 1);
                  }
                  t.length > 0
                    ? r.searchParams.set(`price_max`, t.join(`,`))
                    : r.searchParams.delete(`price_max`);
                } else if (n.priceType === `Over`) {
                  let t = r.searchParams.get(`price_min`)?.split(`,`).map(Number) || [];
                  if (e) t.includes(n.min) || t.push(n.min);
                  else {
                    let e = t.indexOf(n.min);
                    e > -1 && t.splice(e, 1);
                  }
                  t.length > 0
                    ? r.searchParams.set(`price_min`, t.join(`,`))
                    : r.searchParams.delete(`price_min`);
                } else {
                  let t = r.searchParams.get(`price`)?.split(`,`).filter(Boolean) || [],
                    i = `${n.min}-${n.max}`;
                  if (e) t.includes(i) || t.push(i);
                  else {
                    let e = t.indexOf(i);
                    e > -1 && t.splice(e, 1);
                  }
                  t.length > 0
                    ? r.searchParams.set(`price`, t.join(`,`))
                    : r.searchParams.delete(`price`);
                }
                o.price = { active: !1, values: [] };
                let i = r.searchParams.get(`price`)?.split(`,`).filter(Boolean) || [];
                i.length > 0 &&
                  o.price.values.push(
                    ...i.map((e) => {
                      let [t, n] = e.split(`-`).map(Number);
                      return {
                        min: isNaN(t) ? null : t,
                        max: isNaN(n) ? null : n,
                        priceType: `Range`,
                      };
                    })
                  );
                let a = r.searchParams.get(`price_max`)?.split(`,`).map(Number) || [];
                a.length > 0 &&
                  o.price.values.push(...a.map((e) => ({ min: null, max: e, priceType: `Under` })));
                let s = r.searchParams.get(`price_min`)?.split(`,`).map(Number) || [];
                (s.length > 0 &&
                  o.price.values.push(...s.map((e) => ({ min: e, max: null, priceType: `Over` }))),
                  (o.price.active = o.price.values.length > 0));
                break;
              }
              case `discount`: {
                let t = v === `Percent` ? `discount_percent` : `discount_amount`;
                if (e) {
                  let e = { min: y === `Over` ? b : x, max: y === `Over` ? null : S };
                  (o[t] || (o[t] = { active: !0, values: [] }),
                    o[t].values.push(e),
                    (o[t].active = !0));
                } else if (o[t]) {
                  let e = { min: y === `Over` ? b : x, max: y === `Over` ? null : S };
                  ((o[t].values = o[t].values.filter((t) => !(t.min === e.min && t.max === e.max))),
                    (o[t].active = o[t].values.length > 0));
                }
                break;
              }
              case `on-sale`:
              case `in-stock`:
              case `bundles`:
              case `subscriptions`: {
                let t = Me(a);
                e ? (o[t] = { active: !0, value: !0 }) : (o[t] = { active: !1, value: !0 });
                break;
              }
            }
            Ne(o, r);
          }
          i.history.pushState({}, ``, r.toString());
          let s = n === `cms` ? `cms` : ve,
            c = new CustomEvent(`filter-navigation`, {
              detail: { filters: o, sourceComponentId: Y },
            });
          document.dispatchEvent(c);
          let l = s,
            u = t;
          if (a === `variant`)
            if (((l = `variant_${C}`), !e)) u = w;
            else {
              let e = `variant_${C}`;
              if (r.searchParams.has(e)) {
                let t = r.searchParams.get(e);
                u = t ? decodeURIComponent(t) : w;
              } else u = w;
            }
          let d = new CustomEvent(`product-filter-change`, {
            detail: {
              type: l,
              group: a === `variant` ? C : void 0,
              active: e,
              value: u,
              componentId: Y,
              filterType: n,
              variantStockFilter: a === `variant` ? D : void 0,
            },
          });
          (document.dispatchEvent(d), r.toString());
        } catch (e) {
          console.error(`Error dispatching filter change:`, e);
        }
      },
      [Y, a, ve, C, w, ye, n, A, j, f, p, g, _, v, y, b, x, S, D]
    );
  r(() => {
    if (!ge.current) return;
    let e = (e) => {
        let t = be();
        t !== $.current && (Q(t), ($.current = t));
      },
      t = (e) => {
        let t = i.location.pathname.split(`/`).filter(Boolean).pop();
        if (
          i.shopXtools?.products &&
          Array.isArray(i.shopXtools.products) &&
          i.shopXtools.products.some(({ node: e }) => e.handle === t)
        )
          return;
        let n = be();
        (Q(n), ($.current = n));
      };
    return (
      e({}),
      i.addEventListener(`popstate`, t),
      document.addEventListener(`filter-navigation`, e),
      () => {
        ge.current &&
          (i.removeEventListener(`popstate`, t),
          document.removeEventListener(`filter-navigation`, e));
      }
    );
  }, [Y, be]);
  let Se = l(() => {
    try {
      let e = !$.current;
      ($.current, Q(e), ($.current = e), xe(e));
    } catch (e) {
      console.error(`Error handling filter change:`, e);
    }
  }, [xe, Y, a]);
  (r(() => {
    if (he.current)
      try {
        return (
          Ge.instances.add(Y),
          he.current.setAttribute(`data-filter-id`, Y),
          () => {
            ((ge.current = !1), Ge.instances.delete(Y), Ge.instances.size === 0 && Ge.cleanup());
          }
        );
      } catch (e) {
        console.error(`Error registering filter component:`, e);
      }
  }, [Y, a, n]),
    r(() => {
      if (ge.current)
        try {
          i !== void 0 && i.location.href;
          let e = [
            {
              name: `filter-reset`,
              handler: (e) => {
                (Q(!1), ($.current = !1));
              },
            },
            {
              name: `product-filter-change`,
              handler: (e) => {
                if (e.detail.componentId !== Y) {
                  if (n === `cms` && e.detail.type === `cms`)
                    e.detail.value?.title === A &&
                      e.detail.value?.value === j &&
                      (e.detail.active, Q(e.detail.active), ($.current = e.detail.active));
                  else if (n === `shopify`) {
                    let t = Me(a);
                    if (t === Me(e.detail.type)) {
                      if (![`variant`, `price`, `discount_amount`, `discount_percent`].includes(t))
                        [`collection`, `product_type`, `product_tag`].includes(t)
                          ? e.detail.value === u &&
                            (e.detail.active, Q(e.detail.active), ($.current = e.detail.active))
                          : (e.detail.active, Q(e.detail.active), ($.current = e.detail.active));
                      else if (
                        t === `variant` &&
                        e.detail.group === C &&
                        e.detail.value?.optionValue === w
                      )
                        (e.detail.active, Q(e.detail.active), ($.current = e.detail.active));
                      else if ([`price`, `discount_amount`, `discount_percent`].includes(t)) {
                        let t = ye();
                        if (!t || !e.detail.value) return;
                        JSON.stringify(t) === JSON.stringify(e.detail.value) &&
                          (e.detail.active, Q(e.detail.active), ($.current = e.detail.active));
                      }
                    }
                  }
                }
              },
            },
          ];
          return (
            e.forEach(({ name: e, handler: t }) => {
              (document.addEventListener(e, t), `${e}`);
            }),
            () => {
              ge.current &&
                e.forEach(({ name: e, handler: t }) => {
                  document.removeEventListener(e, t);
                });
            }
          );
        } catch (e) {
          console.error(`Error initializing filter:`, e);
        }
    }, [Y, a, ye, C, w, A, j, n, ve, u]));
  let Ce = l(
      (e) => {
        (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), Se());
      },
      [Se]
    ),
    we = l(() => {
      try {
        if (n === `cms`) return s || `${A}: ${j}`;
        switch (a) {
          case `variant`:
            return O || w;
          case `price`:
            return f === `Under` ? `Under $${p}` : `$${g} - $${_}`;
          case `discount`:
            let e = v === `Percent` ? `%` : `$`;
            return y === `Over` ? `Over ${b}${e} Off` : `${x}${e} - ${S}${e} Off`;
          case `on-sale`:
            return s || `On Sale`;
          case `in-stock`:
            return s || `In Stock`;
          case `subscriptions`:
            return s || `Subscriptions`;
          default:
            return s || u || ``;
        }
      } catch (e) {
        return (console.error(`Error generating display text:`, e), s || u || ``);
      }
    }, [n, A, j, a, s, u, w, O, f, p, g, _, v, y, b, x, S]),
    Te = l(() => {
      try {
        return L ? `${R}px ${ee}px ${z}px ${B}px` : `${I}px`;
      } catch (e) {
        return (console.error(`Error generating radius style:`, e), `${I}px`);
      }
    }, [I, L, R, ee, z, B]),
    Ee = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    De = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    Oe = (e) =>
      e.isMixed
        ? {
            borderTop: `${e.top}px ${e.style} ${e.color}`,
            borderRight: `${e.right}px ${e.style} ${e.color}`,
            borderBottom: `${e.bottom}px ${e.style} ${e.color}`,
            borderLeft: `${e.left}px ${e.style} ${e.color}`,
          }
        : { border: `${e.width}px ${e.style} ${e.color}` },
    ke = c(() => {
      try {
        let t = Z ? J : X ? q : K;
        return {
          display: `flex`,
          flexDirection: e.style?.stacked === `vertical` ? `column` : `row`,
          alignItems: `center`,
          justifyContent: `center`,
          width: `100%`,
          height: `100%`,
          position: `relative`,
          boxSizing: `border-box`,
          padding: G ? `${le}px ${ue}px ${fe}px ${pe}px` : `${ce}px`,
          ...(e.style?.type === `button` && {
            ...(Z ? Oe(J.border) : X ? De(q.border) : Ee(K.border)),
            background: t.background,
            borderRadius: Te(),
          }),
          transition: `all 0.2s ease-in-out`,
          cursor: `pointer`,
          overflow: `hidden`,
          flexShrink: 0,
          flexGrow: 0,
        };
      } catch (e) {
        return (
          console.error(`Error generating container style:`, e),
          {
            display: `flex`,
            width: `100%`,
            height: `100%`,
            position: `relative`,
            boxSizing: `border-box`,
          }
        );
      }
    }, [e.style?.type, e.style?.stacked, ce, G, le, ue, fe, pe, Te, X, Z, K, q, J]),
    Ae = c(
      () => ({
        margin: 0,
        padding: 0,
        ...M,
        color: Z ? J.textColor : X ? q.textColor : K.textColor,
        display: `block`,
        width: `100%`,
        userSelect: `none`,
        marginLeft: e.style?.type !== `button` && e.style?.stacked !== `vertical` ? se : 0,
        marginTop: e.style?.type !== `button` && e.style?.stacked === `vertical` ? se : 0,
        textAlign: M.textAlign || `left`,
        transition: `color 0.2s ease-in-out`,
        justifyContent:
          M.textAlign === `center` ? `center` : M.textAlign === `right` ? `flex-end` : `flex-start`,
        alignItems: `center`,
      }),
      [M, K.textColor, q.textColor, J.textColor, Z, X, e.style?.type, e.style?.stacked, se]
    ),
    je = c(() => {
      try {
        let t = Z ? J : X ? q : K;
        return {
          width: P,
          height: F,
          transition: `all 0.2s ease-in-out`,
          cursor: `pointer`,
          display: e.style?.type === `checkbox` ? `flex` : `none`,
          alignItems: `center`,
          justifyContent: `center`,
          borderRadius: Te(),
          flexShrink: 0,
          ...(Z ? Oe(J.border) : X ? De(q.border) : Ee(K.border)),
          background: t.background,
        };
      } catch (t) {
        return (
          console.error(`Error generating checkbox style:`, t),
          { width: P, height: F, display: e.style?.type === `checkbox` ? `flex` : `none` }
        );
      }
    }, [P, F, Te, X, Z, K, q, J, e.style?.type]),
    Pe = l(() => {
      try {
        let t = e.style?.icon?.preview && de.current() === `CANVAS`;
        if ((!Z && !t) || e.style?.type !== `checkbox`) return null;
        if (ie === `custom` && oe)
          return d(`img`, {
            src: oe,
            width: ae,
            height: ae,
            style: { objectFit: `contain` },
            alt: `Custom checkbox icon`,
          });
        let n = W === `round` ? `round` : `square`,
          r = W === `round` ? `round` : `miter`,
          i = Math.max(1, Math.min(4, U));
        return d(`svg`, {
          width: ae,
          height: ae,
          viewBox: `0 0 12 12`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          "aria-hidden": `true`,
          style: { shapeRendering: `crispEdges`, strokeWidth: `${i}px` },
          children: d(`path`, {
            d: `M10 3L4.5 8.5L2 6`,
            stroke: H,
            strokeWidth: i,
            strokeLinecap: n,
            strokeLinejoin: r,
          }),
        });
      } catch (e) {
        return (console.error(`Error rendering icon:`, e), null);
      }
    }, [Z, e.style?.type, e.style?.icon?.preview, ie, oe, ae, W, H, U]),
    Fe = l(() => {
      try {
        let t = Z ? J : X ? q : K,
          n = t.border,
          r = L ? `${R}px ${ee}px ${z}px ${B}px` : `${I}px`,
          o = n.width.isMixed ? n.width.top : (n.width.defaultValue ?? 1),
          s = n.width.isMixed ? n.width.right : (n.width.defaultValue ?? 1),
          c = n.width.isMixed ? n.width.bottom : (n.width.defaultValue ?? 1),
          l = n.width.isMixed ? n.width.left : (n.width.defaultValue ?? 1),
          u = l + s,
          f = o + c,
          p = re * 2,
          m = Math.max(0, P - u - p),
          h = Math.max(0, F - f - p),
          g = L
            ? `${Math.max(0, R - re - o)}px ${Math.max(0, ee - re - s)}px ${Math.max(0, z - re - c)}px ${Math.max(0, B - re - l)}px`
            : `${Math.max(0, I - re - o)}px`,
          _ = {
            borderTop: `${o}px ${n.style} ${n.color}`,
            borderRight: `${s}px ${n.style} ${n.color}`,
            borderBottom: `${c}px ${n.style} ${n.color}`,
            borderLeft: `${l}px ${n.style} ${n.color}`,
          };
        if (V === `image` && te)
          return d(`div`, {
            style: {
              width: P,
              height: F,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              borderRadius: r,
              ..._,
              background: t.background,
              boxSizing: `border-box`,
              flexShrink: 0,
              transition: `all 0.2s ease-in-out`,
              overflow: `hidden`,
              position: `relative`,
            },
            children: d(`div`, {
              style: {
                width: m,
                height: h,
                position: `absolute`,
                top: `50%`,
                left: `50%`,
                transform: `translate(-50%, -50%)`,
                borderRadius: g,
                overflow: `hidden`,
              },
              children: d(`img`, {
                src: te,
                alt: `Swatch for ${we()}`,
                style: { width: `100%`, height: `100%`, objectFit: `cover` },
              }),
            }),
          });
        let v = ne;
        if (V === `color` && e.style?.swatchColorType === `dynamic`) {
          if (de.current() === `CANVAS`) v = `#8A8A8A`;
          else if (i !== void 0 && i.__FcCheckoutConfigs?.variantColorValues)
            try {
              if (a === `variant`) {
                let e = w.toLowerCase(),
                  t = i.__FcCheckoutConfigs.variantColorValues.find(
                    (t) => t.name.toLowerCase() === e
                  );
                t?.hex && (v = t.hex);
              }
            } catch (e) {
              console.error(`Error getting dynamic color:`, e);
            }
        }
        return d(`div`, {
          style: {
            width: P,
            height: F,
            display: `flex`,
            alignItems: `center`,
            justifyContent: `center`,
            borderRadius: r,
            ..._,
            background: t.background,
            boxSizing: `border-box`,
            flexShrink: 0,
            transition: `all 0.2s ease-in-out`,
            overflow: `hidden`,
            position: `relative`,
          },
          children: d(`div`, {
            style: {
              width: m,
              height: h,
              position: `absolute`,
              top: `50%`,
              left: `50%`,
              transform: `translate(-50%, -50%)`,
              backgroundColor: v,
              borderRadius: g,
              minWidth: 0,
              minHeight: 0,
            },
          }),
        });
      } catch (e) {
        return (console.error(`Error rendering swatch:`, e), null);
      }
    }, [P, F, V, te, ne, re, I, L, R, ee, z, B, Z, X, K, q, J, we, e.style?.swatchColorType, a, w]);
  try {
    return h(`div`, {
      style: ke,
      ref: he,
      onClick: Se,
      onKeyDown: Ce,
      role: `checkbox`,
      "aria-checked": Z,
      tabIndex: 0,
      "data-filter-id": Y,
      "data-filter-type": ve,
      "data-filter-value": typeof u == `string` ? u : JSON.stringify(ye()),
      onMouseEnter: () => _e(!0),
      onMouseLeave: () => _e(!1),
      onTouchStart: () => _e(!0),
      onTouchEnd: () => _e(!1),
      onTouchCancel: () => _e(!1),
      "aria-label": `Filter by ${we()}`,
      children: [
        e.style?.type === `checkbox` && d(`div`, { style: je, children: Pe() }),
        e.style?.type === `swatch` && Fe(),
        k && d(`p`, { style: Ae, children: a === `variant` ? we() : s || we() }),
      ],
    });
  } catch (e) {
    return (
      console.error(`Error rendering filter component:`, e),
      d(`div`, {
        style: { padding: `10px`, color: `red` },
        children: `Error rendering filter component`,
      })
    );
  }
}
var Ge,
  Ke = e(() => {
    (n(),
      g(),
      v(),
      R(),
      Ie(),
      (Ge = {
        instances: new Set(),
        eventListeners: new Map(),
        cleanup: () => {
          (Ge.instances.clear(),
            Ge.eventListeners.forEach((e, t) => {
              i.removeEventListener(t, e);
            }),
            Ge.eventListeners.clear());
        },
      }),
      i !== void 0 && i.addEventListener(`beforeunload`, Ge.cleanup),
      U(We, {
        style: {
          type: G.Object,
          title: `Style`,
          controls: {
            type: {
              type: G.Enum,
              title: `Type`,
              options: [`checkbox`, `swatch`, `button`],
              optionTitles: [`Checkbox`, `Swatch`, `Button`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              defaultValue: `checkbox`,
            },
            width: {
              type: G.Number,
              title: `Width`,
              defaultValue: 24,
              min: 8,
              max: 104,
              step: 8,
              displayStepper: !0,
              hidden: ({ type: e }) => e === `button`,
            },
            height: {
              type: G.Number,
              title: `Height`,
              defaultValue: 24,
              min: 8,
              max: 104,
              step: 8,
              displayStepper: !0,
              hidden: ({ type: e }) => e === `button`,
            },
            radius: {
              type: G.FusedNumber,
              title: `Radius`,
              defaultValue: 4,
              toggleKey: `radiusPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [
                `radiusTopLeft`,
                `radiusTopRight`,
                `radiusBottomRight`,
                `radiusBottomLeft`,
              ],
              valueLabels: [`TL`, `TR`, `BR`, `BL`],
              min: 0,
            },
            swatchType: {
              type: G.Enum,
              title: `Swatch`,
              options: [`image`, `color`],
              optionTitles: [`Image`, `Color`],
              defaultValue: `color`,
              displaySegmentedControl: !0,
              hidden: ({ type: e }) => e !== `swatch`,
            },
            swatchColorType: {
              type: G.Enum,
              title: `Color`,
              options: [`hex`, `dynamic`],
              optionTitles: [`Hex`, `Dynamic`],
              defaultValue: `hex`,
              displaySegmentedControl: !0,
              description: `Set hex code or use dynamic variant colors set in the plugin.`,
              hidden: ({ type: e, swatchType: t }) => e !== `swatch` || t !== `color`,
            },
            swatchImage: {
              type: G.Image,
              title: `Image`,
              hidden: ({ type: e, swatchType: t }) => e !== `swatch` || t !== `image`,
            },
            swatchColor: {
              type: G.Color,
              title: `Hex`,
              defaultValue: `#000000`,
              hidden: ({ type: e, swatchType: t, swatchColorType: n }) =>
                e !== `swatch` || t !== `color` || n !== `hex`,
            },
            swatchBorder: {
              type: G.Number,
              title: `Space`,
              defaultValue: 4,
              min: 0,
              max: 20,
              step: 1,
              description: `Space around swatch and border`,
              hidden: ({ type: e }) => e !== `swatch`,
            },
            icon: {
              type: G.Object,
              title: `Icon`,
              hidden: ({ type: e }) => e !== `checkbox`,
              controls: {
                preview: { type: G.Boolean, title: `Preview`, defaultValue: !1 },
                type: {
                  type: G.Enum,
                  title: `Icon`,
                  options: [`default`, `custom`],
                  optionTitles: [`Default`, `Custom`],
                  defaultValue: `default`,
                  displaySegmentedControl: !0,
                },
                color: {
                  type: G.Color,
                  title: `Color`,
                  defaultValue: `#000000`,
                  hidden: ({ type: e }) => e !== "default",
                },
                weight: {
                  type: G.Number,
                  title: `Weight`,
                  defaultValue: 2,
                  min: 0.5,
                  max: 4,
                  step: 0.5,
                  hidden: ({ type: e }) => e !== "default",
                },
                edge: {
                  type: G.Enum,
                  title: `Edge`,
                  options: [`hard`, `round`],
                  optionTitles: [`Hard`, `Round`],
                  defaultValue: `round`,
                  displaySegmentedControl: !0,
                  hidden: ({ type: e }) => e !== "default",
                },
                size: { type: G.Number, title: `Size`, defaultValue: 12, min: 8, max: 24, step: 1 },
                customIcon: {
                  type: G.Image,
                  title: `Image`,
                  hidden: ({ type: e }) => e !== `custom`,
                },
              },
            },
            gap: {
              type: G.Number,
              title: `Gap`,
              defaultValue: 8,
              min: 0,
              max: 40,
              step: 1,
              hidden: ({ type: e }) => e === `button`,
            },
            padding: {
              type: G.FusedNumber,
              title: `Padding`,
              defaultValue: 8,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
              min: 0,
            },
            stacked: {
              type: G.Enum,
              title: `Layout`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              defaultValue: `horizontal`,
              hidden: ({ type: e }) => e === `button`,
            },
          },
        },
        font: { type: G.Font, title: `Font`, controls: `extended` },
        default: {
          type: G.Object,
          title: `Default`,
          controls: {
            textColor: { type: G.Color, title: `Text Color`, defaultValue: `#000000` },
            border: {
              type: G.Object,
              title: `Border`,
              controls: {
                color: { type: G.Color, title: `Color`, defaultValue: `#000000` },
                width: {
                  type: G.FusedNumber,
                  title: `Width`,
                  toggleKey: `isMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`top`, `right`, `bottom`, `left`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                  defaultValue: 1,
                },
                style: {
                  type: G.Enum,
                  title: `Style`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                  defaultValue: `solid`,
                },
              },
            },
            background: { type: G.Color, title: `Background`, defaultValue: `#FFFFFF` },
          },
        },
        hover: {
          type: G.Object,
          title: `Hover`,
          controls: {
            textColor: { type: G.Color, title: `Text Color`, defaultValue: `#333333` },
            border: {
              type: G.Object,
              title: `Border`,
              controls: {
                color: { type: G.Color, title: `Color`, defaultValue: `#000000` },
                width: {
                  type: G.FusedNumber,
                  title: `Width`,
                  toggleKey: `isMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`top`, `right`, `bottom`, `left`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                  defaultValue: 1,
                },
                style: {
                  type: G.Enum,
                  title: `Style`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                  defaultValue: `solid`,
                },
              },
            },
            background: { type: G.Color, title: `Background`, defaultValue: `#FFFFFF` },
          },
        },
        selected: {
          type: G.Object,
          title: `Selected`,
          controls: {
            textColor: { type: G.Color, title: `Text Color`, defaultValue: `#000000` },
            border: {
              type: G.Object,
              title: `Border`,
              controls: {
                color: { type: G.Color, title: `Color`, defaultValue: `#000000` },
                width: {
                  type: G.FusedNumber,
                  title: `Width`,
                  toggleKey: `isMixed`,
                  toggleTitles: [`All`, `Individual`],
                  valueKeys: [`top`, `right`, `bottom`, `left`],
                  valueLabels: [`T`, `R`, `B`, `L`],
                  min: 0,
                  defaultValue: 1,
                },
                style: {
                  type: G.Enum,
                  title: `Style`,
                  options: [`solid`, `dashed`, `dotted`, `double`],
                  optionTitles: [`Solid`, `Dashed`, `Dotted`, `Double`],
                  defaultValue: `solid`,
                },
              },
            },
            background: {
              type: G.Color,
              title: `Background`,
              defaultValue: `rgba(255, 255, 255, 0)`,
            },
          },
        },
        property: {
          type: G.Enum,
          title: `Property`,
          options: [
            `variant`,
            `product-type`,
            `product-tag`,
            `collection`,
            `price`,
            `on-sale`,
            `discount`,
            `in-stock`,
            `subscriptions`,
          ],
          optionTitles: [
            `Variant`,
            `Product Type`,
            `Product Tag`,
            `Collection`,
            `Price`,
            `On Sale`,
            `Discount`,
            `In Stock`,
            `Subscriptions`,
          ],
          defaultValue: `price`,
          hidden: (e) => e.filterType === `cms`,
        },
        value: {
          type: G.String,
          title: `Value`,
          defaultValue: ``,
          hidden: (e) =>
            e.filterType === `cms` ||
            ![`collection`, `product-type`, `product-tag`].includes(String(e.property)),
        },
        displayText: {
          type: G.String,
          title: `Display Text`,
          description: `If not set, value will be used.`,
          hidden: (e) => e.property === `variant`,
        },
        priceType: {
          type: G.Enum,
          title: `Type`,
          options: [`Range`, `Under`, `Over`],
          optionTitles: [`Range`, `Under`, `Over`],
          defaultValue: `Under`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          hidden: (e) => e.property !== `price` || e.filterType === `cms`,
        },
        priceThreshold: {
          type: G.Number,
          title: `Under`,
          defaultValue: 100,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `price` || e.priceType !== `Under` || e.filterType === `cms`,
        },
        priceOver: {
          type: G.Number,
          title: `Over`,
          defaultValue: 50,
          min: 0,
          step: 1,
          hidden: (e) => e.property !== `price` || e.priceType !== `Over` || e.filterType === `cms`,
        },
        priceLow: {
          type: G.Number,
          title: `Price Low`,
          defaultValue: 50,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `price` || e.priceType !== `Range` || e.filterType === `cms`,
        },
        priceHigh: {
          type: G.Number,
          title: `Price High`,
          defaultValue: 100,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `price` || e.priceType !== `Range` || e.filterType === `cms`,
        },
        discountType: {
          type: G.Enum,
          title: `Discount`,
          options: [`Percent`, `Amount`],
          optionTitles: [`Percent`, `Amount`],
          defaultValue: `Percent`,
          displaySegmentedControl: !0,
          hidden: (e) => e.property !== `discount` || e.filterType === `cms`,
        },
        discountValueType: {
          type: G.Enum,
          title: `Type`,
          options: [`Range`, `Over`],
          optionTitles: [`Range`, `Over`],
          defaultValue: `Over`,
          displaySegmentedControl: !0,
          hidden: (e) => e.property !== `discount` || e.filterType === `cms`,
        },
        discountThreshold: {
          type: G.Number,
          title: `Discount Threshold`,
          defaultValue: 100,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `discount` || e.discountValueType !== `Over` || e.filterType === `cms`,
        },
        discountLow: {
          type: G.Number,
          title: `Discount Low`,
          defaultValue: 50,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `discount` || e.discountValueType !== `Range` || e.filterType === `cms`,
        },
        discountHigh: {
          type: G.Number,
          title: `Discount High`,
          defaultValue: 100,
          min: 0,
          step: 1,
          hidden: (e) =>
            e.property !== `discount` || e.discountValueType !== `Range` || e.filterType === `cms`,
        },
        variantTitle: {
          type: G.String,
          title: `Title`,
          defaultValue: `Size`,
          hidden: (e) =>
            e.property !== `variant` || e.filterType === `cms` || e.variantType === `Metafield`,
        },
        variantValue: {
          type: G.String,
          title: `Value`,
          defaultValue: `Large`,
          hidden: (e) => e.property !== `variant` || e.filterType === `cms`,
        },
        variantDisplayText: {
          type: G.String,
          title: `Display Text`,
          description: `If not set, Value will be displayed.`,
          hidden: (e) => e.property !== `variant` || e.filterType === `cms`,
        },
        showText: {
          type: G.Boolean,
          title: `Show Text`,
          defaultValue: !0,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          hidden: (e) => e.property !== `variant` || e.filterType === `cms`,
        },
        variantStockFilter: {
          type: G.Enum,
          title: `In Stock Only`,
          options: [`all`, `in_stock`],
          optionTitles: [`No`, `Yes`],
          defaultValue: `all`,
          displaySegmentedControl: !0,
          hidden: (e) => e.property !== `variant` || e.filterType === `cms`,
        },
      }));
  });
function qe(e) {
  let {
      type: t = `all`,
      property: n,
      variantTitle: a,
      hideIfZero: s = !1,
      font: c,
      color: u = `#000`,
      displayFormat: f = `{{value}}`,
    } = e,
    [p, m] = o(0),
    [h, g] = o(!1),
    _ = l(() => {
      if (i === void 0) return 0;
      try {
        let e = new URL(i.location.href).searchParams;
        if (t === `property` && n) {
          let t = Me(n, !1);
          if (n === `variant`)
            return a
              ? (e.get(`variant_${a}`)?.split(`,`).filter(Boolean) || []).length
              : Array.from(e.entries())
                  .filter(([e]) => e.startsWith(`variant_`))
                  .reduce((e, [t, n]) => e + n.split(`,`).filter(Boolean).length, 0);
          if (n && Je.BOOLEAN.includes(n)) return +(e.get(t) === `true`);
          if (n && Je.RANGE.includes(n)) {
            let r = Re(e);
            if (n === `discount_amount` || n === `discount_percent`) {
              let e = 0;
              return (
                r.discount_amount?.active &&
                  r.discount_amount.values &&
                  (e += r.discount_amount.values.length),
                r.discount_percent?.active &&
                  r.discount_percent.values &&
                  (e += r.discount_percent.values.length),
                e
              );
            }
            let i = r[t];
            return i?.active && i.values ? i.values.length : 0;
          }
          return n && Je.LIST.includes(n) ? (e.get(t)?.split(`,`).filter(Boolean) || []).length : 0;
        }
        if (t === `all`) {
          let t = Re(e),
            n = 0;
          return (
            Je.LIST.forEach((e) => {
              t[e]?.active && (n += t[e].values.length);
            }),
            t.variant?.active && (n += t.variant.values.length),
            Je.RANGE.forEach((e) => {
              t[e]?.active && t[e].values && (n += t[e].values.length);
            }),
            Je.BOOLEAN.forEach((e) => {
              t[e]?.active && (n += 1);
            }),
            n
          );
        }
        return 0;
      } catch (e) {
        return (console.error(`Error counting filters:`, e), 0);
      }
    }, [t, n, a]);
  r(() => {
    if (i === void 0) return;
    let e = () => {
      let e = _();
      m(e);
    };
    e();
    let t = () => {
        e();
      },
      n = () => {
        m(0);
      };
    return (
      i.addEventListener(`popstate`, e),
      document.addEventListener(`product-filter-change`, t),
      document.addEventListener(`filter-reset`, n),
      document.addEventListener(`filter-navigation`, t),
      () => {
        (i.removeEventListener(`popstate`, e),
          document.removeEventListener(`product-filter-change`, t),
          document.removeEventListener(`filter-reset`, n),
          document.removeEventListener(`filter-navigation`, t));
      }
    );
  }, [_, t, n]);
  let v = {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `center`,
    },
    y = {
      ...c,
      opacity: s && p === 0 ? 0 : 1,
      userSelect: s && p === 0 ? `none` : `auto`,
      color: u,
    },
    b = p,
    x = f.replace(`{{value}}`, b.toString());
  return de.current() === de.canvas
    ? d(`div`, {
        style: v,
        "data-filter-count": `canvas`,
        children: d(`span`, { style: y, children: x }),
      })
    : d(`div`, {
        style: v,
        "data-filter-count": `browser`,
        children: d(`span`, { style: y, children: x }),
      });
}
var Je,
  Ye = e(() => {
    (n(),
      g(),
      R(),
      v(),
      Ie(),
      (Je = {
        LIST: [`collection`, `product_type`, `product_tag`],
        RANGE: [`price`, `discount_amount`, `discount_percent`],
        BOOLEAN: [`on_sale`, `in_stock`],
      }),
      U(qe, {
        type: {
          type: G.SegmentedEnum,
          title: `Type`,
          options: [`all`, `property`],
          optionTitles: [`All`, `Property`],
          defaultValue: `all`,
        },
        property: {
          type: G.Enum,
          title: `Property`,
          options: [`variant`, ...Je.LIST, ...Je.RANGE, ...Je.BOOLEAN],
          defaultValue: `variant`,
          hidden: (e) => e.type !== `property`,
        },
        variantTitle: {
          type: G.String,
          title: `Variant Title`,
          defaultValue: ``,
          hidden: (e) => e.type !== `property` || e.property !== `variant`,
        },
        hideIfZero: {
          type: G.Boolean,
          title: `When 0`,
          enabledTitle: `Hide`,
          disabledTitle: `Show`,
          defaultValue: !1,
        },
        font: { type: G.Font, controls: `extended` },
        color: { type: G.Color, title: `Color`, defaultValue: `#000` },
        displayFormat: {
          type: G.String,
          title: `Format`,
          defaultValue: `{{value}}`,
          description: `Use {{value}} as to display the number.`,
        },
      }));
  });
function Xe(e) {
  let { Default: n, showWhenNoFilters: a } = e,
    [, s] = o(0),
    c = t(`filter-reset-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`).current,
    u = t(!0);
  r(() => {
    if (!u.current) return;
    let e = () => {
      s((e) => e + 1);
    };
    (document.addEventListener(`product-filter-change`, e),
      document.addEventListener(`filter-reset`, e),
      document.addEventListener(`product-sort-change`, e),
      document.addEventListener(`filter-navigation`, e));
    let t = new MutationObserver(() => {
        u.current && e();
      }),
      n = document.querySelector(`body`);
    return (
      n && t.observe(n, { subtree: !0, childList: !0 }),
      () => {
        ((u.current = !1),
          document.removeEventListener(`product-filter-change`, e),
          document.removeEventListener(`filter-reset`, e),
          document.removeEventListener(`product-sort-change`, e),
          document.removeEventListener(`filter-navigation`, e),
          t.disconnect());
      }
    );
  }, []);
  let f = l(() => {
    try {
      let e = new URL(i.location.href);
      Re(e.searchParams);
      let t = {
        collection: { active: !1, values: [] },
        product_type: { active: !1, values: [] },
        product_tag: { active: !1, values: [] },
        variant: { active: !1, values: [] },
        price: { active: !1, values: [] },
        discount_amount: { active: !1, values: [] },
        discount_percent: { active: !1, values: [] },
        on_sale: { active: !1, value: !0 },
        in_stock: { active: !1, value: !0 },
        bundle: { active: !1, value: !0 },
        subscription: { active: !1, value: !0 },
      };
      (Ne(t, e),
        i.history.pushState({}, ``, e.toString()),
        [
          `collection`,
          `product_type`,
          `product_tag`,
          `price`,
          `discount_amount`,
          `discount_percent`,
          `variant`,
          `on_sale`,
          `in_stock`,
          `bundle`,
          `subscription`,
        ].forEach((e) => {
          let t = Me(e, !0);
          `${e}${t}`;
          let n = { type: t, active: !1, componentId: c };
          ((n =
            e === `discount_amount` || e === `discount_percent`
              ? { ...n, value: { values: [] } }
              : e === `variant`
                ? { ...n, value: ``, values: [] }
                : e === `price`
                  ? { ...n, value: { values: [] } }
                  : { ...n, value: ``, values: [] }),
            document.dispatchEvent(new CustomEvent(`product-filter-change`, { detail: n })));
        }),
        document.dispatchEvent(
          new CustomEvent(`filter-reset`, {
            detail: { timestamp: Date.now(), componentId: c, resetToInitialScope: !0 },
          })
        ),
        document.dispatchEvent(
          new CustomEvent(`product-sort-change`, {
            detail: { type: `relevancy`, sortBy: `relevancy`, sortDirection: null, componentId: c },
          })
        ),
        document.dispatchEvent(
          new CustomEvent(`filter-navigation`, { detail: { filters: t, sourceComponentId: c } })
        ));
    } catch (e) {
      console.error(`Error resetting filters:`, e);
    }
  }, [c]);
  r(
    () => () => {
      u.current = !1;
    },
    []
  );
  let p = n?.[0] || null;
  if (!p) return null;
  let h = m(p, {
    style: { ...(p.props?.style || {}), width: `100%`, height: `100%`, cursor: `pointer` },
    onClick: f,
    "aria-label": `Reset all filters`,
    role: `button`,
    tabIndex: 0,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), f());
    },
  });
  return i === void 0 || i.location.href.includes(`framercanvas`)
    ? d(`div`, { style: { height: `100%`, width: `100%` }, children: h })
    : !Ze() && !a
      ? null
      : d(`div`, { style: { height: `100%`, width: `100%` }, children: h });
}
function Ze() {
  if (i === void 0) return !1;
  try {
    let e = Re(new URL(i.location.href).searchParams);
    return Object.values(e).some((e) => e.active);
  } catch (e) {
    return (console.error(`Error checking active filters:`, e), !1);
  }
}
var Qe = e(() => {
  (n(),
    g(),
    v(),
    R(),
    Ie(),
    (Xe.defaultProps = { Default: null, showWhenNoFilters: !0 }),
    U(Xe, {
      Default: { type: G.ComponentInstance, title: `Button Design` },
      showWhenNoFilters: {
        type: G.Boolean,
        title: `No Filters`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
    }));
});
function $e(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var et,
  tt,
  nt,
  rt,
  it,
  at,
  ot,
  st,
  ct,
  lt,
  ut,
  dt = e(() => {
    (g(),
      R(),
      w(),
      v(),
      (et = { qvCosr5N4: { hover: !0 } }),
      (tt = [`qvCosr5N4`, `ViymFEayA`]),
      (nt = `framer-KZ65J`),
      (rt = { qvCosr5N4: `framer-v-1nz3d6e`, ViymFEayA: `framer-v-1nxcuow` }),
      (it = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (at = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (ot = { Active: `qvCosr5N4`, Inactive: `ViymFEayA` }),
      (st = b.create(a)),
      (ct = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        jjSKNLKz0: n ?? i.jjSKNLKz0 ?? `Clear filtrers`,
        variant: ot[i.variant] ?? i.variant ?? `qvCosr5N4`,
      })),
      (lt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (ut = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = z();
          V();
          let { style: l, className: u, layoutId: f, variant: p, jjSKNLKz0: m, ...h } = ct(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = I({
              cycleOrder: tt,
              defaultVariant: `qvCosr5N4`,
              enabledGestures: et,
              ref: i,
              variant: p,
              variantClassNames: rt,
            }),
            k = lt(e, O),
            A = M(nt);
          return d(C, {
            id: f ?? o,
            children: d(st, {
              animate: O,
              initial: !1,
              children: d(at, {
                value: it,
                children: d(b.div, {
                  ...h,
                  ...x,
                  className: M(A, `framer-1nz3d6e`, u, _),
                  "data-framer-name": `Active`,
                  layoutDependency: k,
                  layoutId: `qvCosr5N4`,
                  ref: i,
                  style: {
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    ...l,
                  },
                  ...$e(
                    {
                      "qvCosr5N4-hover": { "data-framer-name": void 0 },
                      ViymFEayA: { "data-framer-name": `Inactive` },
                    },
                    g,
                    S
                  ),
                  children: d(E, {
                    __fromCanvasComponent: !0,
                    children: d(a, {
                      children: d(b.p, {
                        dir: `auto`,
                        style: {
                          "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                          "--framer-font-size": `14px`,
                          "--framer-letter-spacing": `-0.05em`,
                          "--framer-text-color": `var(--extracted-r6o4lv, rgb(3, 6, 7))`,
                        },
                        children: `Clear filtrers`,
                      }),
                    }),
                    className: `framer-1q408cs`,
                    fonts: [`Inter`],
                    layoutDependency: k,
                    layoutId: `DZCpksfCh`,
                    style: {
                      "--extracted-r6o4lv": `rgb(3, 6, 7)`,
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: m,
                    variants: {
                      "qvCosr5N4-hover": {
                        "--extracted-r6o4lv": `var(--token-c48d383f-9060-4848-866e-a44cd05720a2, rgba(3, 6, 7, 0.59))`,
                      },
                      ViymFEayA: {
                        "--extracted-r6o4lv": `var(--token-e5213a88-c8a8-4a64-9b46-3bc358bc8063, rgba(3, 6, 7, 0.2))`,
                      },
                    },
                    verticalAlignment: `top`,
                    withExternalLayout: !0,
                    ...$e(
                      {
                        "qvCosr5N4-hover": {
                          children: d(a, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.05em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-c48d383f-9060-4848-866e-a44cd05720a2, rgba(3, 6, 7, 0.59)))`,
                              },
                              children: `Clear filtrers`,
                            }),
                          }),
                        },
                        ViymFEayA: {
                          children: d(a, {
                            children: d(b.p, {
                              dir: `auto`,
                              style: {
                                "--framer-font-open-type-features": `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                "--framer-font-size": `14px`,
                                "--framer-letter-spacing": `-0.05em`,
                                "--framer-text-color": `var(--extracted-r6o4lv, var(--token-e5213a88-c8a8-4a64-9b46-3bc358bc8063, rgba(3, 6, 7, 0.2)))`,
                              },
                              children: `Clear filtrers`,
                            }),
                          }),
                        },
                      },
                      g,
                      S
                    ),
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-KZ65J.framer-1bjy8dz, .framer-KZ65J .framer-1bjy8dz { display: block; }`,
          `.framer-KZ65J.framer-1nz3d6e { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-KZ65J .framer-1q408cs { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-KZ65J.framer-v-1nxcuow.framer-1nz3d6e { cursor: unset; }`,
        ],
        `framer-KZ65J`
      )),
      (ut.displayName = `clear.filters`),
      (ut.defaultProps = { height: 17, width: 72 }),
      U(ut, {
        variant: {
          options: [`qvCosr5N4`, `ViymFEayA`],
          optionTitles: [`Active`, `Inactive`],
          title: `Variant`,
          type: G.Enum,
        },
        jjSKNLKz0: {
          defaultValue: `Clear filtrers`,
          displayTextArea: !1,
          title: `Title`,
          type: G.String,
        },
        onjjSKNLKz0Change: { changes: `jjSKNLKz0`, type: G.ChangeHandler },
      }),
      T(
        ut,
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
  }),
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
  Ct = e(() => {
    (g(),
      R(),
      w(),
      v(),
      Qe(),
      dt(),
      (ft = O(ut)),
      (pt = O(Xe)),
      (mt = `framer-I3i5K`),
      (ht = { s1fioL9iw: `framer-v-bo1514` }),
      (gt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (_t = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (vt = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (yt = b.create(a)),
      (bt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (St = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = y(),
            { activeLocale: o, setLocale: s } = z();
          V();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = bt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: x,
              setGestureState: S,
              setVariant: w,
              variants: T,
            } = I({ defaultVariant: `s1fioL9iw`, ref: i, variant: f, variantClassNames: ht }),
            E = xt(e, T),
            D = M(mt);
          return d(C, {
            id: u ?? a,
            children: d(yt, {
              animate: T,
              initial: !1,
              children: d(vt, {
                value: gt,
                children: d(b.div, {
                  ...p,
                  ..._,
                  className: M(D, `framer-bo1514`, l, h),
                  "data-framer-name": `Variant 1`,
                  layoutDependency: E,
                  layoutId: `s1fioL9iw`,
                  ref: i,
                  style: { ...c },
                  children: d(H, {
                    children: d(W, {
                      className: `framer-1scrq7j-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: `Utok8_lXG-container`,
                      nodeId: `Utok8_lXG`,
                      rendersWithMotion: !0,
                      scopeId: `G_CstMchm`,
                      children: d(Xe, {
                        Default: [
                          d(H, {
                            height: 17,
                            children: d(W, {
                              className: `framer-1ni6v5h-container`,
                              "data-framer-name": `Button`,
                              inComponentSlot: !0,
                              layoutDependency: E,
                              layoutId: `MRN9FYX49-container`,
                              name: `Button`,
                              nodeId: `MRN9FYX49`,
                              rendersWithMotion: !0,
                              scopeId: `G_CstMchm`,
                              children: d(ut, {
                                height: `100%`,
                                id: `MRN9FYX49`,
                                jjSKNLKz0: `Clear filters`,
                                layoutId: `MRN9FYX49`,
                                name: `Button`,
                                variant: _t(`qvCosr5N4`),
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        height: `100%`,
                        id: `Utok8_lXG`,
                        layoutId: `Utok8_lXG`,
                        showWhenNoFilters: !1,
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
          `.framer-I3i5K.framer-1ekr07d, .framer-I3i5K .framer-1ekr07d { display: block; }`,
          `.framer-I3i5K.framer-bo1514 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-I3i5K .framer-1scrq7j-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-I3i5K .framer-1ni6v5h-container { height: auto; position: relative; width: auto; }`,
        ],
        `framer-I3i5K`
      )),
      (St.displayName = `clear.filters-settings`),
      (St.defaultProps = { height: 15, width: 75 }),
      T(St, [{ explicitInter: !0, fonts: [] }, ...ft, ...pt], { supportsExplicitInterCodegen: !0 }),
      (St.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(ut, {}, t)])) }));
  }),
  wt,
  Tt,
  Et,
  Dt = e(() => {
    ((wt = (e, t = !1) => {
      let n = {
        product_type: `product-type`,
        product_tag: `product-tag`,
        on_sale: `on-sale`,
        in_stock: `in-stock`,
        bundle: `bundles`,
        subscription: `subscriptions`,
      };
      if (t) return n[e] || e;
      {
        let t = {};
        return (
          Object.entries(n).forEach(([e, n]) => {
            t[n] = e;
          }),
          t[e] || e
        );
      }
    }),
      (Tt = (e) => {
        console.log(`Parsing URL filters from:`, e.toString());
        let t = {
          collection: { active: !1, values: [] },
          product_type: { active: !1, values: [] },
          product_tag: { active: !1, values: [] },
          variant: { active: !1, values: [] },
          price: { active: !1, values: [] },
          discount_amount: { active: !1, values: [] },
          discount_percent: { active: !1, values: [] },
          on_sale: { active: !1, value: !0 },
          in_stock: { active: !1, value: !0 },
          bundle: { active: !1, value: !0 },
          subscription: { active: !1, value: !0 },
        };
        ([`collection`, `product_type`, `product_tag`, `product-type`, `product-tag`].forEach(
          (n) => {
            let r = e.get(n);
            if (r) {
              let e = wt(n);
              console.log(`Found filter ${n}, normalized to ${e}:`, r);
              let i = r.split(`,`).filter(Boolean);
              ((t[e].values = i), (t[e].active = i.length > 0));
            }
          }
        ),
          Array.from(e.keys()).forEach((n) => {
            if (n.startsWith(`variant_`)) {
              let r = n.replace(`variant_`, ``),
                i = e.get(n);
              if (i) {
                let e = decodeURIComponent(i);
                console.log(`Parsing variant filter ${n}:`, {
                  rawValue: i,
                  decodedValue: e,
                  isMultiValue: e.includes(`,`),
                });
                let a = e.split(`,`).filter(Boolean);
                (a.forEach((e) => {
                  t.variant.values.push({ name: r, value: e.trim() });
                }),
                  console.log(`Found variant filter ${n}:`, {
                    values: a,
                    orLogic: `Values within same variant type use OR logic`,
                  }));
              }
            }
          }),
          (t.variant.active = t.variant.values.length > 0));
        let n = e.get(`price`),
          r = e.get(`price_max`),
          i = e.get(`price_min`);
        if (((t.price = { active: !1, values: [] }), n)) {
          let e = n.split(`,`).map((e) => {
            let [t, n] = e.split(`-`).map(Number);
            return { min: t, max: n, priceType: `Range` };
          });
          (t.price.values.push(...e), (t.price.active = !0));
        }
        if (r) {
          let e = r
            .split(`,`)
            .map(Number)
            .map((e) => ({ min: null, max: e, priceType: `Under` }));
          (t.price.values.push(...e), (t.price.active = !0));
        }
        i &&
          (i
            .split(`,`)
            .map(Number)
            .forEach((e) => {
              t.price.values.push({ min: e, max: null, priceType: `Over` });
            }),
          (t.price.active = !0));
        let a = e.get(`discount_amount`);
        a &&
          (t.discount_amount = {
            active: !0,
            values: a.split(`,`).map((e) => {
              let [t, n] = e.split(`-`).map(Number);
              return { min: t, max: n };
            }),
          });
        let o = e.get(`discount_amount_min`);
        if (o) {
          let e = o.split(`,`).map(Number);
          ((t.discount_amount ||= { active: !0, values: [] }),
            e.forEach((e) => {
              t.discount_amount.values.push({ min: e, max: null });
            }),
            (t.discount_amount.active = !0));
        }
        let s = e.get(`discount_percent`);
        s &&
          (t.discount_percent = {
            active: !0,
            values: s.split(`,`).map((e) => {
              let [t, n] = e.split(`-`).map(Number);
              return { min: t, max: n };
            }),
          });
        let c = e.get(`discount_percent_min`);
        if (c) {
          let e = c.split(`,`).map(Number);
          ((t.discount_percent ||= { active: !0, values: [] }),
            e.forEach((e) => {
              t.discount_percent.values.push({ min: e, max: null });
            }),
            (t.discount_percent.active = !0));
        }
        return (
          [`on_sale`, `in_stock`, `bundle`, `subscription`].forEach((n) => {
            e.get(n) === `true` && (t[n] = { active: !0, value: !0 });
          }),
          t
        );
      }),
      (Et = (e, t) => {
        if (
          (console.log(`Updating URL with filters:`, e),
          Array.from(t.searchParams.keys())
            .filter(
              (e) =>
                e.startsWith(`variant_`) ||
                [
                  `product_type`,
                  `product_tag`,
                  `collection`,
                  `price`,
                  `price_min`,
                  `price_max`,
                  `discount_amount`,
                  `discount_amount_min`,
                  `discount_percent`,
                  `discount_percent_min`,
                  `on_sale`,
                  `in_stock`,
                  `bundle`,
                  `subscription`,
                  `product-type`,
                  `product-tag`,
                  `on-sale`,
                  `in-stock`,
                  `bundles`,
                  `subscriptions`,
                ].includes(e)
            )
            .forEach((e) => t.searchParams.delete(e)),
          [`collection`, `product_type`, `product_tag`].forEach((n) => {
            e[n]?.active &&
              e[n]?.values?.length > 0 &&
              (t.searchParams.set(n, e[n].values.join(`,`)),
              console.log(`Set URL param ${n}=`, e[n].values.join(`,`)));
          }),
          e.variant?.active && e.variant?.values?.length > 0)
        ) {
          let n = {};
          (e.variant.values.forEach((e) => {
            let t = `variant_${e.name}`;
            (n[t] || (n[t] = []),
              n[t].some((t) => t.toLowerCase() === e.value.toLowerCase()) || n[t].push(e.value));
          }),
            Object.entries(n).forEach(([e, n]) => {
              (t.searchParams.set(e, n.join(`,`)),
                console.log(`Set URL param ${e}=`, n.join(`,`), `(OR logic between values)`));
            }));
        }
        if (e.price?.active && e.price.values?.length > 0) {
          let n = [],
            r = [],
            i = [];
          (e.price.values.forEach((e) => {
            e.priceType === `Under`
              ? r.push(e.max)
              : e.priceType === `Over`
                ? i.push(e.min)
                : n.push(`${e.min}-${e.max}`);
          }),
            n.length > 0 && t.searchParams.set(`price`, n.join(`,`)),
            r.length > 0 && t.searchParams.set(`price_max`, r.join(`,`)),
            i.length > 0 && t.searchParams.set(`price_min`, i.join(`,`)));
        }
        if (e.discount_amount?.active && e.discount_amount.values?.length > 0) {
          let n = [],
            r = [];
          (e.discount_amount.values.forEach((e) => {
            e.max === null ? r.push(e.min) : n.push(`${e.min}-${e.max}`);
          }),
            n.length > 0 && t.searchParams.set(`discount_amount`, n.join(`,`)),
            r.length > 0 && t.searchParams.set(`discount_amount_min`, r.join(`,`)));
        }
        if (e.discount_percent?.active && e.discount_percent.values?.length > 0) {
          let n = [],
            r = [];
          (e.discount_percent.values.forEach((e) => {
            e.max === null ? r.push(e.min) : n.push(`${e.min}-${e.max}`);
          }),
            n.length > 0 && t.searchParams.set(`discount_percent`, n.join(`,`)),
            r.length > 0 && t.searchParams.set(`discount_percent_min`, r.join(`,`)));
        }
        [`on_sale`, `in_stock`, `bundle`, `subscription`].forEach((n) => {
          e[n]?.active && t.searchParams.set(n, `true`);
        });
      }));
  });
function Ot(e) {
  let { Default: n, showWhenNoFilters: a } = e,
    [, s] = o(0),
    c = t(`filter-reset-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`).current,
    u = t(!0);
  r(() => {
    if (!u.current) return;
    let e = () => {
      s((e) => e + 1);
    };
    (document.addEventListener(`product-filter-change`, e),
      document.addEventListener(`filter-reset`, e),
      document.addEventListener(`product-sort-change`, e),
      document.addEventListener(`filter-navigation`, e));
    let t = new MutationObserver(() => {
        u.current && e();
      }),
      n = document.querySelector(`body`);
    return (
      n && t.observe(n, { subtree: !0, childList: !0 }),
      () => {
        ((u.current = !1),
          document.removeEventListener(`product-filter-change`, e),
          document.removeEventListener(`filter-reset`, e),
          document.removeEventListener(`product-sort-change`, e),
          document.removeEventListener(`filter-navigation`, e),
          t.disconnect());
      }
    );
  }, []);
  let f = l(() => {
    try {
      let e = new URL(i.location.href);
      Tt(e.searchParams);
      let t = {
        collection: { active: !1, values: [] },
        product_type: { active: !1, values: [] },
        product_tag: { active: !1, values: [] },
        variant: { active: !1, values: [] },
        price: { active: !1, values: [] },
        discount_amount: { active: !1, values: [] },
        discount_percent: { active: !1, values: [] },
        on_sale: { active: !1, value: !0 },
        in_stock: { active: !1, value: !0 },
        bundle: { active: !1, value: !0 },
        subscription: { active: !1, value: !0 },
      };
      (Et(t, e),
        i.history.pushState({}, ``, e.toString()),
        [
          `collection`,
          `product_type`,
          `product_tag`,
          `price`,
          `discount_amount`,
          `discount_percent`,
          `variant`,
          `on_sale`,
          `in_stock`,
          `bundle`,
          `subscription`,
        ].forEach((e) => {
          let t = wt(e, !0);
          `${e}${t}`;
          let n = { type: t, active: !1, componentId: c };
          ((n =
            e === `discount_amount` || e === `discount_percent`
              ? { ...n, value: { values: [] } }
              : e === `variant`
                ? { ...n, value: ``, values: [] }
                : e === `price`
                  ? { ...n, value: { values: [] } }
                  : { ...n, value: ``, values: [] }),
            document.dispatchEvent(new CustomEvent(`product-filter-change`, { detail: n })));
        }),
        document.dispatchEvent(
          new CustomEvent(`filter-reset`, {
            detail: { timestamp: Date.now(), componentId: c, resetToInitialScope: !0 },
          })
        ),
        document.dispatchEvent(
          new CustomEvent(`product-sort-change`, {
            detail: { type: `relevancy`, sortBy: `relevancy`, sortDirection: null, componentId: c },
          })
        ),
        document.dispatchEvent(
          new CustomEvent(`filter-navigation`, { detail: { filters: t, sourceComponentId: c } })
        ));
    } catch (e) {
      console.error(`Error resetting filters:`, e);
    }
  }, [c]);
  r(
    () => () => {
      u.current = !1;
    },
    []
  );
  let p = n?.[0] || null;
  if (!p) return null;
  let h = m(p, {
    style: { ...(p.props?.style || {}), width: `100%`, height: `100%`, cursor: `pointer` },
    onClick: f,
    "aria-label": `Reset all filters`,
    role: `button`,
    tabIndex: 0,
    onKeyDown: (e) => {
      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), f());
    },
  });
  return i === void 0 || i.location.href.includes(`framercanvas`)
    ? d(`div`, { style: { height: `100%`, width: `100%` }, children: h })
    : !kt() && !a
      ? null
      : d(`div`, { style: { height: `100%`, width: `100%` }, children: h });
}
function kt() {
  if (i === void 0) return !1;
  try {
    let e = Tt(new URL(i.location.href).searchParams);
    return Object.values(e).some((e) => e.active);
  } catch (e) {
    return (console.error(`Error checking active filters:`, e), !1);
  }
}
var At = e(() => {
  (n(),
    g(),
    v(),
    R(),
    Dt(),
    (Ot.defaultProps = { Default: null, showWhenNoFilters: !0 }),
    U(Ot, {
      Default: { type: G.ComponentInstance, title: `Button Design` },
      showWhenNoFilters: {
        type: G.Boolean,
        title: `No Filters`,
        defaultValue: !0,
        enabledTitle: `Show`,
        disabledTitle: `Hide`,
      },
    }));
});
function jt(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt = e(() => {
    (g(),
      R(),
      w(),
      v(),
      me(),
      (Mt = { N0FkkSAgq: { hover: !0 } }),
      (Nt = `framer-dMPhs`),
      (Pt = { N0FkkSAgq: `framer-v-pi16qj` }),
      (Ft = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (It = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (Lt = b.create(a)),
      (Rt = ({ height: e, id: t, title: n, width: r, ...i }) => ({
        ...i,
        jjSKNLKz0: n ?? i.jjSKNLKz0 ?? `Clear Filters`,
      })),
      (zt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Bt = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = z();
          V();
          let { style: l, className: u, layoutId: f, variant: p, jjSKNLKz0: m, ...h } = Rt(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = I({
              defaultVariant: `N0FkkSAgq`,
              enabledGestures: Mt,
              ref: i,
              variant: p,
              variantClassNames: Pt,
            }),
            k = zt(e, O),
            A = M(Nt, J);
          return d(C, {
            id: f ?? o,
            children: d(Lt, {
              animate: O,
              initial: !1,
              children: d(It, {
                value: Ft,
                children: d(b.div, {
                  ...h,
                  ...x,
                  className: M(A, `framer-pi16qj`, u, _),
                  "data-framer-name": `default`,
                  layoutDependency: k,
                  layoutId: `N0FkkSAgq`,
                  ref: i,
                  style: {
                    backgroundColor: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                    borderBottomLeftRadius: 80,
                    borderBottomRightRadius: 80,
                    borderTopLeftRadius: 80,
                    borderTopRightRadius: 80,
                    ...l,
                  },
                  variants: {
                    "N0FkkSAgq-hover": {
                      backgroundColor: `var(--token-c48d383f-9060-4848-866e-a44cd05720a2, rgba(3, 6, 7, 0.59))`,
                    },
                  },
                  ...jt({ "N0FkkSAgq-hover": { "data-framer-name": void 0 } }, g, S),
                  children: d(E, {
                    __fromCanvasComponent: !0,
                    children: d(a, {
                      children: d(b.p, {
                        className: `framer-styles-preset-1ud5dr1`,
                        "data-styles-preset": `J6OXVPwtV`,
                        dir: `auto`,
                        children: `Change title`,
                      }),
                    }),
                    className: `framer-7yww9g`,
                    fonts: [`Inter`],
                    layoutDependency: k,
                    layoutId: `arskMD4z6`,
                    style: {
                      "--framer-link-text-color": `rgb(0, 153, 255)`,
                      "--framer-link-text-decoration": `underline`,
                    },
                    text: m,
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
          `.framer-dMPhs.framer-waf8ot, .framer-dMPhs .framer-waf8ot { display: block; }`,
          `.framer-dMPhs.framer-pi16qj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 16px 10px 16px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
          `.framer-dMPhs .framer-7yww9g { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...K,
        ],
        `framer-dMPhs`
      )),
      (Bt.displayName = `clear.filters.filled-settings`),
      (Bt.defaultProps = { height: 34, width: 102.5 }),
      U(Bt, {
        jjSKNLKz0: {
          defaultValue: `Clear Filters`,
          displayTextArea: !1,
          title: `Title`,
          type: G.String,
        },
        onjjSKNLKz0Change: { changes: `jjSKNLKz0`, type: G.ChangeHandler },
      }),
      T(
        Bt,
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
          ...L(q),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  }),
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt,
  Xt,
  Zt,
  Qt = e(() => {
    (g(),
      R(),
      w(),
      v(),
      At(),
      Vt(),
      (Ht = O(Bt)),
      (Ut = O(Ot)),
      (Wt = `framer-4Zy8o`),
      (Gt = { IovaMCqh9: `framer-v-131pp4l` }),
      (Kt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (qt = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (Jt = b.create(a)),
      (Yt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (Xt = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Zt = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            a = y(),
            { activeLocale: o, setLocale: s } = z();
          V();
          let { style: c, className: l, layoutId: u, variant: f, ...p } = Yt(e),
            {
              baseVariant: m,
              classNames: h,
              clearLoadingGesture: g,
              gestureHandlers: _,
              gestureVariant: v,
              isLoading: x,
              setGestureState: S,
              setVariant: w,
              variants: T,
            } = I({ defaultVariant: `IovaMCqh9`, ref: i, variant: f, variantClassNames: Gt }),
            E = Xt(e, T),
            D = M(Wt);
          return d(C, {
            id: u ?? a,
            children: d(Jt, {
              animate: T,
              initial: !1,
              children: d(qt, {
                value: Kt,
                children: d(b.div, {
                  ...p,
                  ..._,
                  className: M(D, `framer-131pp4l`, l, h),
                  "data-framer-name": `default`,
                  layoutDependency: E,
                  layoutId: `IovaMCqh9`,
                  ref: i,
                  style: { ...c },
                  children: d(H, {
                    children: d(W, {
                      className: `framer-1d18g02-container`,
                      isModuleExternal: !0,
                      layoutDependency: E,
                      layoutId: `npafeTrys-container`,
                      nodeId: `npafeTrys`,
                      rendersWithMotion: !0,
                      scopeId: `Lk3RU0LXv`,
                      children: d(Ot, {
                        Default: [
                          d(H, {
                            height: 34,
                            width: `200px`,
                            children: d(W, {
                              className: `framer-10cevqb-container`,
                              "data-framer-name": `button`,
                              inComponentSlot: !0,
                              layoutDependency: E,
                              layoutId: `s1K1jq87q-container`,
                              name: `button`,
                              nodeId: `s1K1jq87q`,
                              rendersWithMotion: !0,
                              scopeId: `Lk3RU0LXv`,
                              children: d(Bt, {
                                height: `100%`,
                                id: `s1K1jq87q`,
                                jjSKNLKz0: `Clear all filters`,
                                layoutId: `s1K1jq87q`,
                                name: `button`,
                                style: { width: `100%` },
                                width: `100%`,
                              }),
                            }),
                          }),
                        ],
                        height: `100%`,
                        id: `npafeTrys`,
                        layoutId: `npafeTrys`,
                        showWhenNoFilters: !1,
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
          `.framer-4Zy8o.framer-1m57958, .framer-4Zy8o .framer-1m57958 { display: block; }`,
          `.framer-4Zy8o.framer-131pp4l { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-4Zy8o .framer-1d18g02-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-4Zy8o .framer-10cevqb-container { height: auto; position: relative; width: 200px; }`,
        ],
        `framer-4Zy8o`
      )),
      (Zt.displayName = `clear.filters.filled-button`),
      (Zt.defaultProps = { height: 34, width: 114 }),
      T(Zt, [{ explicitInter: !0, fonts: [] }, ...Ht, ...Ut], { supportsExplicitInterCodegen: !0 }),
      (Zt.loader = { load: (e, t) => (t.locale, Promise.allSettled([k(Bt, {}, t)])) }));
  });
function $t(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var en,
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
  pn = e(() => {
    (g(),
      R(),
      w(),
      v(),
      Ke(),
      Ye(),
      we(),
      (en = O(qe)),
      (tn = O(We)),
      (nn = [`KJLHtNhaC`, `EcSXRiDU7`, `jTDQ6pobS`]),
      (rn = `framer-kDQXG`),
      (an = {
        EcSXRiDU7: `framer-v-1nzvud1`,
        jTDQ6pobS: `framer-v-hvh8cc`,
        KJLHtNhaC: `framer-v-1cxw5xp`,
      }),
      (on = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (sn = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (cn = { closed: `KJLHtNhaC`, open: `EcSXRiDU7`, static: `jTDQ6pobS` }),
      (ln = b.create(a)),
      (un = ({ height: e, id: t, width: n, ...r }) => ({
        ...r,
        variant: cn[r.variant] ?? r.variant ?? `KJLHtNhaC`,
      })),
      (dn = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (fn = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = z();
          V();
          let { style: l, className: u, layoutId: f, variant: p, ...m } = un(e),
            {
              baseVariant: g,
              classNames: _,
              clearLoadingGesture: v,
              gestureHandlers: x,
              gestureVariant: S,
              isLoading: w,
              setGestureState: T,
              setVariant: D,
              variants: O,
            } = I({
              cycleOrder: nn,
              defaultVariant: `KJLHtNhaC`,
              ref: i,
              variant: p,
              variantClassNames: an,
            }),
            k = dn(e, O),
            { activeVariantCallback: j, delay: N } = le(g),
            P = j(async (...e) => {
              D(`EcSXRiDU7`);
            }),
            F = j(async (...e) => {
              D(`KJLHtNhaC`);
            }),
            L = M(rn, De),
            R = () => ![`EcSXRiDU7`, `jTDQ6pobS`].includes(g),
            ee = () => g === `EcSXRiDU7`,
            B = () => !![`EcSXRiDU7`, `jTDQ6pobS`].includes(g);
          return d(C, {
            id: f ?? o,
            children: d(ln, {
              animate: O,
              initial: !1,
              children: d(sn, {
                value: on,
                children: h(b.div, {
                  ...m,
                  ...x,
                  className: M(L, `framer-1cxw5xp`, u, _),
                  "data-framer-name": `closed`,
                  layoutDependency: k,
                  layoutId: `KJLHtNhaC`,
                  ref: i,
                  style: { ...l },
                  ...$t(
                    {
                      EcSXRiDU7: { "data-framer-name": `open` },
                      jTDQ6pobS: { "data-framer-name": `static` },
                    },
                    g,
                    S
                  ),
                  children: [
                    h(b.div, {
                      className: `framer-y3dmh9`,
                      "data-highlight": !0,
                      layoutDependency: k,
                      layoutId: `jyJa8wVfo`,
                      onTap: P,
                      ...$t(
                        {
                          EcSXRiDU7: { onTap: F },
                          jTDQ6pobS: { "data-highlight": void 0, onTap: void 0 },
                        },
                        g,
                        S
                      ),
                      children: [
                        h(b.div, {
                          className: `framer-1jwt0jp`,
                          layoutDependency: k,
                          layoutId: `scR2nFPtP`,
                          children: [
                            d(E, {
                              __fromCanvasComponent: !0,
                              children: d(a, {
                                children: d(b.h2, {
                                  className: `framer-styles-preset-63r6z3`,
                                  "data-styles-preset": `zWe8uO5eV`,
                                  dir: `auto`,
                                  style: {
                                    "--framer-text-color": `var(--extracted-1of0zx5, var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)))`,
                                  },
                                  children: `Price`,
                                }),
                              }),
                              className: `framer-vxbhrr`,
                              fonts: [`Inter`],
                              layoutDependency: k,
                              layoutId: `S0qP4fHUC`,
                              style: {
                                "--extracted-1of0zx5": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                "--framer-link-text-color": `rgb(0, 153, 255)`,
                                "--framer-link-text-decoration": `underline`,
                              },
                              verticalAlignment: `top`,
                              withExternalLayout: !0,
                            }),
                            d(H, {
                              children: d(W, {
                                className: `framer-1ojws4k-container`,
                                isAuthoredByUser: !0,
                                isModuleExternal: !0,
                                layoutDependency: k,
                                layoutId: `hqlNODPao-container`,
                                nodeId: `hqlNODPao`,
                                rendersWithMotion: !0,
                                scopeId: `uDivEX7rz`,
                                children: d(qe, {
                                  color: `rgb(3, 6, 7)`,
                                  displayFormat: `({{value}})`,
                                  font: {
                                    fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                    fontSize: `16px`,
                                    fontStyle: `normal`,
                                    fontWeight: 400,
                                    letterSpacing: `-0.05em`,
                                    lineHeight: `1em`,
                                  },
                                  height: `100%`,
                                  hideIfZero: !1,
                                  id: `hqlNODPao`,
                                  layoutId: `hqlNODPao`,
                                  property: `price`,
                                  type: `property`,
                                  variantTitle: ``,
                                  width: `100%`,
                                  ...$t(
                                    {
                                      jTDQ6pobS: {
                                        font: {
                                          fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                          fontFeatureSettings: `'ss01' on, 'ss02' on, 'ss03' on, 'ss04' on`,
                                          fontSize: `15px`,
                                          fontStyle: `normal`,
                                          fontWeight: 500,
                                          letterSpacing: `0em`,
                                          lineHeight: `110%`,
                                        },
                                      },
                                    },
                                    g,
                                    S
                                  ),
                                }),
                              }),
                            }),
                          ],
                        }),
                        R() &&
                          d(A, {
                            className: `framer-1bptmo3`,
                            "data-framer-name": `plus`,
                            fill: `rgb(3, 6, 7)`,
                            intrinsicHeight: 32,
                            intrinsicWidth: 32,
                            layoutDependency: k,
                            layoutId: `UVHGx1vtx`,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"/></svg>`,
                            withExternalLayout: !0,
                          }),
                        ee() &&
                          d(A, {
                            className: `framer-1mwlpp4`,
                            "data-framer-name": `minus`,
                            fill: `rgb(3, 6, 7)`,
                            intrinsicHeight: 32,
                            intrinsicWidth: 32,
                            layoutDependency: k,
                            layoutId: `yhmQEyZ_b`,
                            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z"/></svg>`,
                            withExternalLayout: !0,
                          }),
                      ],
                    }),
                    B() &&
                      h(b.div, {
                        className: `framer-10ygrz8`,
                        layoutDependency: k,
                        layoutId: `vdwJLyZ3d`,
                        children: [
                          d(H, {
                            children: d(W, {
                              className: `framer-1q7jx38-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: `R4IWLPNuG-container`,
                              nodeId: `R4IWLPNuG`,
                              rendersWithMotion: !0,
                              scopeId: `uDivEX7rz`,
                              children: d(We, {
                                default: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgba(3, 6, 7, 0.12)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                discountHigh: 100,
                                discountLow: 50,
                                discountThreshold: 100,
                                discountType: `Percent`,
                                discountValueType: `Over`,
                                displayText: ``,
                                font: {
                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                  fontSize: `14px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `-0.05em`,
                                  lineHeight: `1em`,
                                },
                                height: `100%`,
                                hover: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(51, 51, 51)`,
                                },
                                id: `R4IWLPNuG`,
                                layoutId: `R4IWLPNuG`,
                                priceHigh: 100,
                                priceLow: 50,
                                priceOver: 50,
                                priceThreshold: 15,
                                priceType: `Under`,
                                property: `price`,
                                selected: {
                                  background: `rgba(255, 255, 255, 0)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                showText: !0,
                                style: {
                                  gap: 10,
                                  height: 20,
                                  icon: {
                                    color: `rgb(3, 6, 7)`,
                                    edge: `round`,
                                    preview: !1,
                                    size: 12,
                                    type: `default`,
                                    weight: 2,
                                  },
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  radius: 4,
                                  radiusBottomLeft: 4,
                                  radiusBottomRight: 4,
                                  radiusPerSide: !1,
                                  radiusTopLeft: 4,
                                  radiusTopRight: 4,
                                  stacked: `horizontal`,
                                  swatchBorder: 4,
                                  swatchColor: `rgb(0, 0, 0)`,
                                  swatchColorType: `hex`,
                                  swatchType: `color`,
                                  type: `checkbox`,
                                  width: 20,
                                },
                                value: `New`,
                                variantDisplayText: ``,
                                variantStockFilter: `in_stock`,
                                variantTitle: `Size`,
                                variantValue: `Large`,
                                width: `100%`,
                                ...$t(
                                  {
                                    EcSXRiDU7: {
                                      selected: {
                                        background: `rgb(255, 255, 255)`,
                                        border: {
                                          bottom: 1,
                                          color: `rgb(0, 0, 0)`,
                                          isMixed: !1,
                                          left: 1,
                                          right: 1,
                                          style: `solid`,
                                          top: 1,
                                          width: 1,
                                        },
                                        textColor: `rgb(0, 0, 0)`,
                                      },
                                    },
                                    jTDQ6pobS: {
                                      font: {
                                        fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                        fontSize: `13px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `0em`,
                                        lineHeight: `100%`,
                                      },
                                      selected: {
                                        background: `rgb(255, 255, 255)`,
                                        border: {
                                          bottom: 1,
                                          color: `rgb(0, 0, 0)`,
                                          isMixed: !1,
                                          left: 1,
                                          right: 1,
                                          style: `solid`,
                                          top: 1,
                                          width: 1,
                                        },
                                        textColor: `rgb(0, 0, 0)`,
                                      },
                                      style: {
                                        gap: 8,
                                        height: 20,
                                        icon: {
                                          color: `rgb(3, 6, 7)`,
                                          edge: `round`,
                                          preview: !1,
                                          size: 12,
                                          type: `default`,
                                          weight: 2,
                                        },
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        radius: 4,
                                        radiusBottomLeft: 4,
                                        radiusBottomRight: 4,
                                        radiusPerSide: !1,
                                        radiusTopLeft: 4,
                                        radiusTopRight: 4,
                                        stacked: `horizontal`,
                                        swatchBorder: 4,
                                        swatchColor: `rgb(0, 0, 0)`,
                                        swatchColorType: `hex`,
                                        swatchType: `color`,
                                        type: `checkbox`,
                                        width: 20,
                                      },
                                    },
                                  },
                                  g,
                                  S
                                ),
                              }),
                            }),
                          }),
                          d(H, {
                            children: d(W, {
                              className: `framer-182n300-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: `gKl2r87F4-container`,
                              nodeId: `gKl2r87F4`,
                              rendersWithMotion: !0,
                              scopeId: `uDivEX7rz`,
                              children: d(We, {
                                default: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgba(3, 6, 7, 0.12)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                discountHigh: 100,
                                discountLow: 50,
                                discountThreshold: 100,
                                discountType: `Percent`,
                                discountValueType: `Over`,
                                displayText: ``,
                                font: {
                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                  fontSize: `14px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `-0.05em`,
                                  lineHeight: `1em`,
                                },
                                height: `100%`,
                                hover: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(51, 51, 51)`,
                                },
                                id: `gKl2r87F4`,
                                layoutId: `gKl2r87F4`,
                                priceHigh: 50,
                                priceLow: 16,
                                priceOver: 200,
                                priceThreshold: 100,
                                priceType: `Range`,
                                property: `price`,
                                selected: {
                                  background: `rgba(255, 255, 255, 0)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                showText: !0,
                                style: {
                                  gap: 10,
                                  height: 20,
                                  icon: {
                                    color: `rgb(3, 6, 7)`,
                                    edge: `round`,
                                    preview: !1,
                                    size: 12,
                                    type: `default`,
                                    weight: 2,
                                  },
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  radius: 4,
                                  radiusBottomLeft: 4,
                                  radiusBottomRight: 4,
                                  radiusPerSide: !1,
                                  radiusTopLeft: 4,
                                  radiusTopRight: 4,
                                  stacked: `horizontal`,
                                  swatchBorder: 4,
                                  swatchColor: `rgb(0, 0, 0)`,
                                  swatchColorType: `hex`,
                                  swatchType: `color`,
                                  type: `checkbox`,
                                  width: 20,
                                },
                                value: `New`,
                                variantDisplayText: ``,
                                variantStockFilter: `in_stock`,
                                variantTitle: `Size`,
                                variantValue: `Large`,
                                width: `100%`,
                                ...$t(
                                  {
                                    EcSXRiDU7: {
                                      selected: {
                                        background: `rgb(255, 255, 255)`,
                                        border: {
                                          bottom: 1,
                                          color: `rgb(0, 0, 0)`,
                                          isMixed: !1,
                                          left: 1,
                                          right: 1,
                                          style: `solid`,
                                          top: 1,
                                          width: 1,
                                        },
                                        textColor: `rgb(0, 0, 0)`,
                                      },
                                    },
                                    jTDQ6pobS: {
                                      font: {
                                        fontFamily: `"Instrument Sans", "Instrument Sans Placeholder", sans-serif`,
                                        fontSize: `13px`,
                                        fontStyle: `normal`,
                                        fontWeight: 400,
                                        letterSpacing: `0em`,
                                        lineHeight: `100%`,
                                      },
                                      selected: {
                                        background: `rgb(255, 255, 255)`,
                                        border: {
                                          bottom: 1,
                                          color: `rgb(0, 0, 0)`,
                                          isMixed: !1,
                                          left: 1,
                                          right: 1,
                                          style: `solid`,
                                          top: 1,
                                          width: 1,
                                        },
                                        textColor: `rgb(0, 0, 0)`,
                                      },
                                      style: {
                                        gap: 8,
                                        height: 20,
                                        icon: {
                                          color: `rgb(3, 6, 7)`,
                                          edge: `round`,
                                          preview: !1,
                                          size: 12,
                                          type: `default`,
                                          weight: 2,
                                        },
                                        padding: 0,
                                        paddingBottom: 0,
                                        paddingLeft: 0,
                                        paddingPerSide: !1,
                                        paddingRight: 0,
                                        paddingTop: 0,
                                        radius: 4,
                                        radiusBottomLeft: 4,
                                        radiusBottomRight: 4,
                                        radiusPerSide: !1,
                                        radiusTopLeft: 4,
                                        radiusTopRight: 4,
                                        stacked: `horizontal`,
                                        swatchBorder: 4,
                                        swatchColor: `rgb(0, 0, 0)`,
                                        swatchColorType: `hex`,
                                        swatchType: `color`,
                                        type: `checkbox`,
                                        width: 20,
                                      },
                                    },
                                  },
                                  g,
                                  S
                                ),
                              }),
                            }),
                          }),
                          d(H, {
                            children: d(W, {
                              className: `framer-ekcb29-container`,
                              isAuthoredByUser: !0,
                              isModuleExternal: !0,
                              layoutDependency: k,
                              layoutId: `qcbYs8D1W-container`,
                              nodeId: `qcbYs8D1W`,
                              rendersWithMotion: !0,
                              scopeId: `uDivEX7rz`,
                              children: d(We, {
                                default: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgba(3, 6, 7, 0.12)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                discountHigh: 100,
                                discountLow: 50,
                                discountThreshold: 100,
                                discountType: `Percent`,
                                discountValueType: `Over`,
                                displayText: ``,
                                font: {
                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                  fontSize: `14px`,
                                  fontStyle: `normal`,
                                  fontWeight: 400,
                                  letterSpacing: `-0.05em`,
                                  lineHeight: `1em`,
                                },
                                height: `100%`,
                                hover: {
                                  background: `rgb(255, 255, 255)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(51, 51, 51)`,
                                },
                                id: `qcbYs8D1W`,
                                layoutId: `qcbYs8D1W`,
                                priceHigh: 100,
                                priceLow: 50,
                                priceOver: 50,
                                priceThreshold: 15,
                                priceType: `Over`,
                                property: `price`,
                                selected: {
                                  background: `rgba(255, 255, 255, 0)`,
                                  border: {
                                    bottom: 1,
                                    color: `rgb(0, 0, 0)`,
                                    isMixed: !1,
                                    left: 1,
                                    right: 1,
                                    style: `solid`,
                                    top: 1,
                                    width: 1,
                                  },
                                  textColor: `rgb(0, 0, 0)`,
                                },
                                showText: !0,
                                style: {
                                  gap: 10,
                                  height: 20,
                                  icon: {
                                    color: `rgb(3, 6, 7)`,
                                    edge: `round`,
                                    preview: !1,
                                    size: 12,
                                    type: `default`,
                                    weight: 2,
                                  },
                                  padding: 0,
                                  paddingBottom: 0,
                                  paddingLeft: 0,
                                  paddingPerSide: !1,
                                  paddingRight: 0,
                                  paddingTop: 0,
                                  radius: 4,
                                  radiusBottomLeft: 4,
                                  radiusBottomRight: 4,
                                  radiusPerSide: !1,
                                  radiusTopLeft: 4,
                                  radiusTopRight: 4,
                                  stacked: `horizontal`,
                                  swatchBorder: 4,
                                  swatchColor: `rgb(0, 0, 0)`,
                                  swatchColorType: `hex`,
                                  swatchType: `color`,
                                  type: `checkbox`,
                                  width: 20,
                                },
                                value: `New`,
                                variantDisplayText: ``,
                                variantStockFilter: `in_stock`,
                                variantTitle: `Size`,
                                variantValue: `Large`,
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
          `.framer-kDQXG.framer-1yb6kyu, .framer-kDQXG .framer-1yb6kyu { display: block; }`,
          `.framer-kDQXG.framer-1cxw5xp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 240px; }`,
          `.framer-kDQXG .framer-y3dmh9 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kDQXG .framer-1jwt0jp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
          `.framer-kDQXG .framer-vxbhrr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-kDQXG .framer-1ojws4k-container, .framer-kDQXG .framer-1q7jx38-container, .framer-kDQXG .framer-182n300-container, .framer-kDQXG .framer-ekcb29-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-kDQXG .framer-1bptmo3, .framer-kDQXG .framer-1mwlpp4 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 18px; }`,
          `.framer-kDQXG .framer-10ygrz8 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-kDQXG.framer-v-1nzvud1.framer-1cxw5xp { gap: 16px; }`,
          `.framer-kDQXG.framer-v-1nzvud1 .framer-1q7jx38-container, .framer-kDQXG.framer-v-hvh8cc .framer-1q7jx38-container { order: 0; }`,
          `.framer-kDQXG.framer-v-1nzvud1 .framer-182n300-container, .framer-kDQXG.framer-v-hvh8cc .framer-ekcb29-container { order: 1; }`,
          `.framer-kDQXG.framer-v-1nzvud1 .framer-ekcb29-container, .framer-kDQXG.framer-v-hvh8cc .framer-182n300-container { order: 2; }`,
          `.framer-kDQXG.framer-v-hvh8cc.framer-1cxw5xp { gap: 12px; }`,
          `.framer-kDQXG.framer-v-hvh8cc .framer-y3dmh9 { cursor: unset; }`,
          `.framer-kDQXG.framer-v-hvh8cc .framer-10ygrz8 { gap: 8px; }`,
          ...Te,
        ],
        `framer-kDQXG`
      )),
      (fn.displayName = `shop.filters-price`),
      (fn.defaultProps = { height: 24, width: 240 }),
      U(fn, {
        variant: {
          options: [`KJLHtNhaC`, `EcSXRiDU7`, `jTDQ6pobS`],
          optionTitles: [`closed`, `open`, `static`],
          title: `Variant`,
          type: G.Enum,
        },
      }),
      T(
        fn,
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
              {
                cssFamilyName: `Instrument Sans`,
                source: `google`,
                style: `normal`,
                uiFamilyName: `Instrument Sans`,
                url: `https://fonts.gstatic.com/s/instrumentsans/v4/pximypc9vsFDm051Uf6KVwgkfoSxQ0GsQv8ToedPibnr-yp2JGEJOH9npSTF-QfwmS0v3_7Y.woff2`,
                weight: `400`,
              },
            ],
          },
          ...en,
          ...tn,
          ...L(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
function mn(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var hn,
  gn,
  _n,
  vn,
  yn,
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
  An,
  jn,
  Mn = e(() => {
    (g(),
      R(),
      w(),
      v(),
      Ke(),
      Ye(),
      Oe(),
      ge(),
      we(),
      Ct(),
      Qt(),
      pn(),
      (hn = O(ke)),
      (gn = O(St)),
      (_n = O(qe)),
      (vn = O(We)),
      (yn = O(fn)),
      (bn = O(Zt)),
      (xn = [`aPLq0waJX`, `NsafrS8jK`, `HUQwTRbum`]),
      (Sn = `framer-3tcaJ`),
      (Cn = {
        aPLq0waJX: `framer-v-ezmszy`,
        HUQwTRbum: `framer-v-1771kya`,
        NsafrS8jK: `framer-v-1bqbztk`,
      }),
      (wn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (Tn = (...e) => {
        for (let t of e) if (t && typeof t == `string`) return t;
      }),
      (En = ({ value: e, children: t }) => {
        let n = s(x),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return d(x.Provider, { value: i, children: t });
      }),
      (Dn = { "mobile-closed": `HUQwTRbum`, "mobile-open": `NsafrS8jK`, desktop: `aPLq0waJX` }),
      (On = b.create(a)),
      (kn = ({ gender: e, height: t, id: n, width: r, ...i }) => ({
        ...i,
        kIwnBVTUp: e ?? i.kIwnBVTUp ?? !0,
        variant: Dn[i.variant] ?? i.variant ?? `aPLq0waJX`,
      })),
      (An = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (jn = D(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = y(),
            { activeLocale: s, setLocale: c } = z(),
            l = V(),
            { style: u, className: f, layoutId: p, variant: m, kIwnBVTUp: g, ..._ } = kn(e),
            {
              baseVariant: v,
              classNames: x,
              clearLoadingGesture: S,
              gestureHandlers: w,
              gestureVariant: T,
              isLoading: D,
              setGestureState: O,
              setVariant: k,
              variants: j,
            } = I({
              cycleOrder: xn,
              defaultVariant: `aPLq0waJX`,
              ref: i,
              variant: m,
              variantClassNames: Cn,
            }),
            N = An(e, j),
            { activeVariantCallback: P, delay: F } = le(v),
            L = P(async (...e) => {
              k(`HUQwTRbum`);
            }),
            R = P(async (...e) => {
              k(`NsafrS8jK`);
            }),
            ee = M(Sn, Z, De),
            B = () => ![`NsafrS8jK`, `HUQwTRbum`].includes(v),
            te = () => v === `HUQwTRbum`,
            ne = () => v === `NsafrS8jK`,
            re = () => v !== `HUQwTRbum`;
          return d(C, {
            id: p ?? o,
            children: d(On, {
              animate: j,
              initial: !1,
              children: d(En, {
                value: wn,
                children: h(b.div, {
                  ..._,
                  ...w,
                  className: M(ee, `framer-ezmszy`, f, x),
                  "data-framer-name": `desktop`,
                  layoutDependency: N,
                  layoutId: `aPLq0waJX`,
                  ref: i,
                  style: { backgroundColor: `rgb(255, 255, 255)`, ...u },
                  ...mn(
                    {
                      HUQwTRbum: { "data-framer-name": `mobile-closed` },
                      NsafrS8jK: { "data-framer-name": `mobile-open` },
                    },
                    v,
                    T
                  ),
                  children: [
                    d(b.div, {
                      className: `framer-1prempi`,
                      layoutDependency: N,
                      layoutId: `fF9y7oIj_`,
                      children: h(b.div, {
                        className: `framer-8qe64n`,
                        "data-framer-name": `filters`,
                        layoutDependency: N,
                        layoutId: `UiD1VJFsj`,
                        style: {
                          "--border-bottom-width": `0px`,
                          "--border-color": `rgba(0, 0, 0, 0)`,
                          "--border-left-width": `0px`,
                          "--border-right-width": `0px`,
                          "--border-style": `solid`,
                          "--border-top-width": `0px`,
                        },
                        variants: {
                          HUQwTRbum: {
                            "--border-bottom-width": `1px`,
                            "--border-color": `rgba(3, 6, 7, 0.08)`,
                            "--border-left-width": `0px`,
                            "--border-right-width": `0px`,
                            "--border-style": `solid`,
                            "--border-top-width": `0px`,
                          },
                        },
                        ...mn(
                          {
                            HUQwTRbum: { "data-border": !0, "data-highlight": !0, onTap: R },
                            NsafrS8jK: { "data-highlight": !0, onTap: L },
                          },
                          v,
                          T
                        ),
                        children: [
                          d(b.div, {
                            className: `framer-1769tmq`,
                            layoutDependency: N,
                            layoutId: `rsVTnvRWq`,
                            children: h(b.div, {
                              className: `framer-1hmjxkt`,
                              layoutDependency: N,
                              layoutId: `XxUj4vMSe`,
                              children: [
                                d(H, {
                                  children: d(W, {
                                    className: `framer-q5jz5e-container`,
                                    isAuthoredByUser: !0,
                                    isModuleExternal: !0,
                                    layoutDependency: N,
                                    layoutId: `b8brwSbLQ-container`,
                                    nodeId: `b8brwSbLQ`,
                                    rendersWithMotion: !0,
                                    scopeId: `feZIc9UJP`,
                                    children: d(ke, {
                                      color: `rgb(3, 6, 7)`,
                                      height: `100%`,
                                      iconSearch: `House`,
                                      iconSelection: `FadersHorizontal`,
                                      id: `b8brwSbLQ`,
                                      layoutId: `b8brwSbLQ`,
                                      mirrored: !1,
                                      selectByList: !0,
                                      style: { height: `100%`, width: `100%` },
                                      weight: `regular`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                                d(E, {
                                  __fromCanvasComponent: !0,
                                  children: d(a, {
                                    children: d(b.h1, {
                                      className: `framer-styles-preset-fg5t9o`,
                                      "data-styles-preset": `KeRkDnnjN`,
                                      dir: `auto`,
                                      children: `Filter`,
                                    }),
                                  }),
                                  className: `framer-10e977z`,
                                  fonts: [`Inter`],
                                  layoutDependency: N,
                                  layoutId: `Z_OF1rsBY`,
                                  style: {
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              ],
                            }),
                          }),
                          B() &&
                            d(H, {
                              height: 15,
                              y: (l?.y || 0) + 0 + 0 + 0 + 6,
                              children: d(W, {
                                className: `framer-odhdfe-container`,
                                layoutDependency: N,
                                layoutId: `gMFYlH2Lr-container`,
                                nodeId: `gMFYlH2Lr`,
                                rendersWithMotion: !0,
                                scopeId: `feZIc9UJP`,
                                children: d(St, {
                                  height: `100%`,
                                  id: `gMFYlH2Lr`,
                                  layoutId: `gMFYlH2Lr`,
                                  width: `100%`,
                                }),
                              }),
                            }),
                          te() &&
                            d(A, {
                              className: `framer-1jq95g2`,
                              "data-framer-name": `plus`,
                              fill: `rgb(3, 6, 7)`,
                              intrinsicHeight: 32,
                              intrinsicWidth: 32,
                              layoutDependency: N,
                              layoutId: `kCROPugit`,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8Z"/></svg>`,
                              withExternalLayout: !0,
                            }),
                          ne() &&
                            d(A, {
                              className: `framer-1tsgnav`,
                              "data-framer-name": `minus`,
                              fill: `rgb(3, 6, 7)`,
                              intrinsicHeight: 32,
                              intrinsicWidth: 32,
                              layoutDependency: N,
                              layoutId: `UAYS_TWTl`,
                              svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8Z"/></svg>`,
                              withExternalLayout: !0,
                            }),
                        ],
                      }),
                    }),
                    re() &&
                      h(b.div, {
                        className: `framer-t5uys7`,
                        layoutDependency: N,
                        layoutId: `WaAvoruuJ`,
                        children: [
                          g !== !1 &&
                            h(b.div, {
                              className: `framer-1ls5v2o`,
                              layoutDependency: N,
                              layoutId: `u2R0wSI0s`,
                              children: [
                                d(b.div, {
                                  className: `framer-1wq260o`,
                                  layoutDependency: N,
                                  layoutId: `sqil65ILi`,
                                  style: { backgroundColor: `rgba(3, 6, 7, 0.08)` },
                                }),
                                g !== !1 &&
                                  h(b.div, {
                                    className: `framer-4fjm56`,
                                    layoutDependency: N,
                                    layoutId: `JNepyKm61`,
                                    children: [
                                      h(b.div, {
                                        className: `framer-3zvy40`,
                                        layoutDependency: N,
                                        layoutId: `Ah7weOkjR`,
                                        children: [
                                          d(E, {
                                            __fromCanvasComponent: !0,
                                            children: d(a, {
                                              children: d(b.h2, {
                                                className: `framer-styles-preset-63r6z3`,
                                                "data-styles-preset": `zWe8uO5eV`,
                                                dir: `auto`,
                                                style: {
                                                  "--framer-text-color": `var(--extracted-1of0zx5, var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)))`,
                                                },
                                                children: `Type`,
                                              }),
                                            }),
                                            className: `framer-i6u8og`,
                                            fonts: [`Inter`],
                                            layoutDependency: N,
                                            layoutId: `oHwFbd62k`,
                                            style: {
                                              "--extracted-1of0zx5": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                              "--framer-link-text-color": `rgb(0, 153, 255)`,
                                              "--framer-link-text-decoration": `underline`,
                                            },
                                            verticalAlignment: `top`,
                                            withExternalLayout: !0,
                                          }),
                                          d(H, {
                                            children: d(W, {
                                              className: `framer-hpgopp-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              layoutDependency: N,
                                              layoutId: `KlUc94HyX-container`,
                                              nodeId: `KlUc94HyX`,
                                              rendersWithMotion: !0,
                                              scopeId: `feZIc9UJP`,
                                              children: d(qe, {
                                                color: `rgb(3, 6, 7)`,
                                                displayFormat: `({{value}})`,
                                                font: {
                                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                  fontSize: `16px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `-0.05em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hideIfZero: !1,
                                                id: `KlUc94HyX`,
                                                layoutId: `KlUc94HyX`,
                                                property: `product_type`,
                                                type: `property`,
                                                variantTitle: ``,
                                                width: `100%`,
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                      h(b.div, {
                                        className: `framer-1c2436f`,
                                        layoutDependency: N,
                                        layoutId: `dVuRfoTkg`,
                                        children: [
                                          d(H, {
                                            children: d(W, {
                                              className: `framer-196tc37-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              layoutDependency: N,
                                              layoutId: `CJbTP3lii-container`,
                                              nodeId: `CJbTP3lii`,
                                              rendersWithMotion: !0,
                                              scopeId: `feZIc9UJP`,
                                              children: d(We, {
                                                default: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgba(3, 6, 7, 0.12)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                discountHigh: 100,
                                                discountLow: 50,
                                                discountThreshold: 100,
                                                discountType: `Percent`,
                                                discountValueType: `Over`,
                                                displayText: `All`,
                                                font: {
                                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                  fontSize: `14px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `-0.05em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hover: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(51, 51, 51)`,
                                                },
                                                id: `CJbTP3lii`,
                                                layoutId: `CJbTP3lii`,
                                                priceHigh: 100,
                                                priceLow: 50,
                                                priceOver: 50,
                                                priceThreshold: 100,
                                                priceType: `Range`,
                                                property: `in-stock`,
                                                selected: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                showText: !0,
                                                style: {
                                                  gap: 10,
                                                  height: 20,
                                                  icon: {
                                                    color: `rgb(3, 6, 7)`,
                                                    edge: `round`,
                                                    preview: !1,
                                                    size: 12,
                                                    type: `default`,
                                                    weight: 2,
                                                  },
                                                  padding: 0,
                                                  paddingBottom: 0,
                                                  paddingLeft: 0,
                                                  paddingPerSide: !1,
                                                  paddingRight: 0,
                                                  paddingTop: 0,
                                                  radius: 4,
                                                  radiusBottomLeft: 4,
                                                  radiusBottomRight: 4,
                                                  radiusPerSide: !1,
                                                  radiusTopLeft: 4,
                                                  radiusTopRight: 4,
                                                  stacked: `horizontal`,
                                                  swatchBorder: 4,
                                                  swatchColor: `rgb(0, 0, 0)`,
                                                  swatchColorType: `hex`,
                                                  swatchType: `color`,
                                                  type: `checkbox`,
                                                  width: 20,
                                                },
                                                value: `All`,
                                                variantDisplayText: ``,
                                                variantStockFilter: `all`,
                                                variantTitle: `Size`,
                                                variantValue: `Large`,
                                                width: `100%`,
                                                ...mn(
                                                  {
                                                    NsafrS8jK: {
                                                      font: {
                                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                        fontSize: `13px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 400,
                                                        letterSpacing: `-0.05em`,
                                                        lineHeight: `1em`,
                                                        textAlign: `left`,
                                                      },
                                                    },
                                                  },
                                                  v,
                                                  T
                                                ),
                                              }),
                                            }),
                                          }),
                                          d(H, {
                                            children: d(W, {
                                              className: `framer-i7sc4v-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              layoutDependency: N,
                                              layoutId: `W1tUj_G4F-container`,
                                              nodeId: `W1tUj_G4F`,
                                              rendersWithMotion: !0,
                                              scopeId: `feZIc9UJP`,
                                              children: d(We, {
                                                default: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgba(3, 6, 7, 0.12)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                discountHigh: 100,
                                                discountLow: 50,
                                                discountThreshold: 100,
                                                discountType: `Percent`,
                                                discountValueType: `Over`,
                                                displayText: `Sparkling Water`,
                                                font: {
                                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                  fontSize: `14px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `-0.05em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hover: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(51, 51, 51)`,
                                                },
                                                id: `W1tUj_G4F`,
                                                layoutId: `W1tUj_G4F`,
                                                priceHigh: 100,
                                                priceLow: 50,
                                                priceOver: 50,
                                                priceThreshold: 100,
                                                priceType: `Range`,
                                                property: `product-type`,
                                                selected: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                showText: !0,
                                                style: {
                                                  gap: 10,
                                                  height: 20,
                                                  icon: {
                                                    color: `rgb(3, 6, 7)`,
                                                    edge: `round`,
                                                    preview: !1,
                                                    size: 12,
                                                    type: `default`,
                                                    weight: 2,
                                                  },
                                                  padding: 0,
                                                  paddingBottom: 0,
                                                  paddingLeft: 0,
                                                  paddingPerSide: !1,
                                                  paddingRight: 0,
                                                  paddingTop: 0,
                                                  radius: 4,
                                                  radiusBottomLeft: 4,
                                                  radiusBottomRight: 4,
                                                  radiusPerSide: !1,
                                                  radiusTopLeft: 4,
                                                  radiusTopRight: 4,
                                                  stacked: `horizontal`,
                                                  swatchBorder: 4,
                                                  swatchColor: `rgb(0, 0, 0)`,
                                                  swatchColorType: `hex`,
                                                  swatchType: `color`,
                                                  type: `checkbox`,
                                                  width: 20,
                                                },
                                                value: `Sparkling Water`,
                                                variantDisplayText: ``,
                                                variantStockFilter: `all`,
                                                variantTitle: `Size`,
                                                variantValue: `Large`,
                                                width: `100%`,
                                                ...mn(
                                                  {
                                                    NsafrS8jK: {
                                                      font: {
                                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                        fontSize: `13px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 400,
                                                        letterSpacing: `-0.05em`,
                                                        lineHeight: `1em`,
                                                      },
                                                    },
                                                  },
                                                  v,
                                                  T
                                                ),
                                              }),
                                            }),
                                          }),
                                          d(H, {
                                            children: d(W, {
                                              className: `framer-l6k8om-container`,
                                              isAuthoredByUser: !0,
                                              isModuleExternal: !0,
                                              layoutDependency: N,
                                              layoutId: `aTlg_xwFG-container`,
                                              nodeId: `aTlg_xwFG`,
                                              rendersWithMotion: !0,
                                              scopeId: `feZIc9UJP`,
                                              children: d(We, {
                                                default: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgba(3, 6, 7, 0.12)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                discountHigh: 100,
                                                discountLow: 50,
                                                discountThreshold: 100,
                                                discountType: `Percent`,
                                                discountValueType: `Over`,
                                                displayText: `Gift Card`,
                                                font: {
                                                  fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                  fontSize: `14px`,
                                                  fontStyle: `normal`,
                                                  fontWeight: 400,
                                                  letterSpacing: `-0.05em`,
                                                  lineHeight: `1em`,
                                                },
                                                height: `100%`,
                                                hover: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(51, 51, 51)`,
                                                },
                                                id: `aTlg_xwFG`,
                                                layoutId: `aTlg_xwFG`,
                                                priceHigh: 100,
                                                priceLow: 50,
                                                priceOver: 50,
                                                priceThreshold: 100,
                                                priceType: `Range`,
                                                property: `product-type`,
                                                selected: {
                                                  background: `rgb(255, 255, 255)`,
                                                  border: {
                                                    bottom: 1,
                                                    color: `rgb(0, 0, 0)`,
                                                    isMixed: !1,
                                                    left: 1,
                                                    right: 1,
                                                    style: `solid`,
                                                    top: 1,
                                                    width: 1,
                                                  },
                                                  textColor: `rgb(0, 0, 0)`,
                                                },
                                                showText: !0,
                                                style: {
                                                  gap: 10,
                                                  height: 20,
                                                  icon: {
                                                    color: `rgb(3, 6, 7)`,
                                                    edge: `round`,
                                                    preview: !1,
                                                    size: 12,
                                                    type: `default`,
                                                    weight: 2,
                                                  },
                                                  padding: 0,
                                                  paddingBottom: 0,
                                                  paddingLeft: 0,
                                                  paddingPerSide: !1,
                                                  paddingRight: 0,
                                                  paddingTop: 0,
                                                  radius: 4,
                                                  radiusBottomLeft: 4,
                                                  radiusBottomRight: 4,
                                                  radiusPerSide: !1,
                                                  radiusTopLeft: 4,
                                                  radiusTopRight: 4,
                                                  stacked: `horizontal`,
                                                  swatchBorder: 4,
                                                  swatchColor: `rgb(0, 0, 0)`,
                                                  swatchColorType: `hex`,
                                                  swatchType: `color`,
                                                  type: `checkbox`,
                                                  width: 20,
                                                },
                                                value: `Gift Card`,
                                                variantDisplayText: ``,
                                                variantStockFilter: `all`,
                                                variantTitle: `Size`,
                                                variantValue: `Large`,
                                                width: `100%`,
                                                ...mn(
                                                  {
                                                    NsafrS8jK: {
                                                      font: {
                                                        fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                                        fontSize: `13px`,
                                                        fontStyle: `normal`,
                                                        fontWeight: 400,
                                                        letterSpacing: `-0.05em`,
                                                        lineHeight: `1em`,
                                                      },
                                                      style: {
                                                        gap: 8,
                                                        height: 20,
                                                        icon: {
                                                          color: `rgb(3, 6, 7)`,
                                                          edge: `round`,
                                                          preview: !1,
                                                          size: 12,
                                                          type: `default`,
                                                          weight: 2,
                                                        },
                                                        padding: 0,
                                                        paddingBottom: 0,
                                                        paddingLeft: 0,
                                                        paddingPerSide: !1,
                                                        paddingRight: 0,
                                                        paddingTop: 0,
                                                        radius: 4,
                                                        radiusBottomLeft: 4,
                                                        radiusBottomRight: 4,
                                                        radiusPerSide: !1,
                                                        radiusTopLeft: 4,
                                                        radiusTopRight: 4,
                                                        stacked: `horizontal`,
                                                        swatchBorder: 4,
                                                        swatchColor: `rgb(0, 0, 0)`,
                                                        swatchColorType: `hex`,
                                                        swatchType: `color`,
                                                        type: `checkbox`,
                                                        width: 20,
                                                      },
                                                    },
                                                  },
                                                  v,
                                                  T
                                                ),
                                              }),
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                              ],
                            }),
                          d(b.div, {
                            className: `framer-1elgpaz`,
                            "data-framer-name": `Spacer`,
                            layoutDependency: N,
                            layoutId: `B27ooY9vc`,
                            style: { backgroundColor: `rgba(3, 6, 7, 0.08)` },
                          }),
                          d(b.div, {
                            className: `framer-g9gndk`,
                            layoutDependency: N,
                            layoutId: `D3u9szVxH`,
                            children: d(H, {
                              height: 24,
                              width: `max(${l?.width || `100vw`}, 1px)`,
                              y: (l?.y || 0) + 0 + 51 + 0 + 455.5 + 0,
                              children: d(W, {
                                className: `framer-5ym3v0-container`,
                                layoutDependency: N,
                                layoutId: `J0F1l8oxN-container`,
                                nodeId: `J0F1l8oxN`,
                                rendersWithMotion: !0,
                                scopeId: `feZIc9UJP`,
                                children: d(fn, {
                                  height: `100%`,
                                  id: `J0F1l8oxN`,
                                  layoutId: `J0F1l8oxN`,
                                  style: { width: `100%` },
                                  variant: Tn(`KJLHtNhaC`),
                                  width: `100%`,
                                }),
                              }),
                            }),
                          }),
                          ne() &&
                            d(b.div, {
                              className: `framer-1x3df7k`,
                              "data-framer-name": `Clear Filter Button`,
                              layoutDependency: N,
                              layoutId: `WkOgQozwB`,
                              children: d(H, {
                                height: 34,
                                ...mn(
                                  { NsafrS8jK: { y: (l?.y || 0) + 0 + 51 + 0 + 499.5 + 0 + 0 } },
                                  v,
                                  T
                                ),
                                children: d(W, {
                                  className: `framer-wzj290-container`,
                                  layoutDependency: N,
                                  layoutId: `REjD1Ct7x-container`,
                                  nodeId: `REjD1Ct7x`,
                                  rendersWithMotion: !0,
                                  scopeId: `feZIc9UJP`,
                                  children: d(Zt, {
                                    height: `100%`,
                                    id: `REjD1Ct7x`,
                                    layoutId: `REjD1Ct7x`,
                                    width: `100%`,
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
          `.framer-3tcaJ.framer-1wrooy4, .framer-3tcaJ .framer-1wrooy4 { display: block; }`,
          `.framer-3tcaJ.framer-ezmszy { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 240px; }`,
          `.framer-3tcaJ .framer-1prempi, .framer-3tcaJ .framer-g9gndk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3tcaJ .framer-8qe64n { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px 0px 24px 0px; position: relative; width: 1px; }`,
          `.framer-3tcaJ .framer-1769tmq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-3tcaJ .framer-1hmjxkt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-3tcaJ .framer-q5jz5e-container { flex: none; height: 20px; position: relative; width: 20px; }`,
          `.framer-3tcaJ .framer-10e977z, .framer-3tcaJ .framer-i6u8og { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          `.framer-3tcaJ .framer-odhdfe-container, .framer-3tcaJ .framer-hpgopp-container, .framer-3tcaJ .framer-196tc37-container, .framer-3tcaJ .framer-i7sc4v-container, .framer-3tcaJ .framer-l6k8om-container, .framer-3tcaJ .framer-wzj290-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-3tcaJ .framer-1jq95g2, .framer-3tcaJ .framer-1tsgnav { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 18px); position: relative; width: 18px; }`,
          `.framer-3tcaJ .framer-t5uys7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3tcaJ .framer-1ls5v2o { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-3tcaJ .framer-1wq260o { flex: none; height: 1px; overflow: hidden; position: relative; width: 240px; }`,
          `.framer-3tcaJ .framer-4fjm56 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 4px 0px; position: relative; width: 240px; }`,
          `.framer-3tcaJ .framer-3zvy40 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3tcaJ .framer-1c2436f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 12px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3tcaJ .framer-1elgpaz { flex: none; height: 1px; overflow: hidden; position: relative; width: 100%; }`,
          `.framer-3tcaJ .framer-5ym3v0-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
          `.framer-3tcaJ .framer-1x3df7k { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-8qe64n, .framer-3tcaJ.framer-v-1771kya .framer-8qe64n { cursor: pointer; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-1769tmq, .framer-3tcaJ.framer-v-1bqbztk .framer-196tc37-container { order: 0; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-q5jz5e-container, .framer-3tcaJ.framer-v-1771kya .framer-q5jz5e-container { height: 18px; width: 18px; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-1tsgnav { order: 3; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-t5uys7 { gap: 20px; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-1ls5v2o { gap: 20px; width: 100%; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-1wq260o { width: 100%; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-4fjm56 { gap: 12px; padding: 0px; width: 100%; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-3zvy40 { padding: 0px 20px 0px 20px; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-1c2436f { gap: 8px; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-i7sc4v-container { order: 1; }`,
          `.framer-3tcaJ.framer-v-1bqbztk .framer-l6k8om-container { order: 2; }`,
          ...X,
          ...Te,
          `.framer-3tcaJ[data-border="true"]::after, .framer-3tcaJ [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        ],
        `framer-3tcaJ`
      )),
      (jn.displayName = `shop-filters`),
      (jn.defaultProps = { height: 253, width: 240 }),
      U(jn, {
        variant: {
          options: [`aPLq0waJX`, `NsafrS8jK`, `HUQwTRbum`],
          optionTitles: [`desktop`, `mobile-open`, `mobile-closed`],
          title: `Variant`,
          type: G.Enum,
        },
        kIwnBVTUp: { defaultValue: !0, title: `Gender`, type: G.Boolean },
        onkIwnBVTUpChange: { changes: `kIwnBVTUp`, type: G.ChangeHandler },
      }),
      T(
        jn,
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
          ...hn,
          ...gn,
          ..._n,
          ...vn,
          ...yn,
          ...bn,
          ...L(_e),
          ...L(Ee),
        ],
        { supportsExplicitInterCodegen: !0 }
      ),
      (jn.loader = {
        load: (e, t) => (t.locale, Promise.allSettled([k(St, {}, t), k(fn, {}, t), k(Zt, {}, t)])),
      }));
  }),
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
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
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
  dr,
  fr,
  pr,
  mr,
  hr,
  gr;
e(() => {
  (g(),
    R(),
    w(),
    v(),
    u(),
    Pe(),
    Ue(),
    $(),
    Fe(),
    Mn(),
    Se(),
    Ae(),
    Y(),
    ye(),
    we(),
    Ve(),
    (Nn = ae(E)),
    (Pn = O(He)),
    (Fn = O(ze)),
    (In = O(jn)),
    (Ln = O(Ce)),
    (Rn = O(je)),
    (zn = j(b.div)),
    (Bn = O(Le)),
    (Vn = ae(b.main)),
    (Hn = O(xe)),
    (Un = {
      HWF_scNGZ: `(min-width: 810px) and (max-width: 1199.98px)`,
      taHwDPZ1m: `(min-width: 1200px)`,
      wzzJO5lTQ: `(max-width: 809.98px)`,
    }),
    (Wn = () => typeof document < `u`),
    (Gn = []),
    (Kn = `framer-rjsW3`),
    (qn = {
      HWF_scNGZ: `framer-v-7ievhx`,
      taHwDPZ1m: `framer-v-i0f4c3`,
      wzzJO5lTQ: `framer-v-arg0jc`,
    }),
    (Jn = (e, t, n) => (e && t ? `position` : n)),
    (Yn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.3, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Xn = {
      opacity: 0.001,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      x: 0,
      y: 80,
    }),
    (Zn = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: { delay: 0.4, duration: 2, ease: [0.23, 0.98, 0.56, 1], type: `tween` },
      x: 0,
      y: 0,
    }),
    (Qn = {
      effect: {
        filter: `blur(10px)`,
        opacity: 0.001,
        rotate: 0,
        scale: 1,
        skewX: 0,
        skewY: 0,
        x: 0,
        y: 10,
      },
      repeat: !1,
      startDelay: 0.9,
      tokenization: `character`,
      transition: { bounce: 0, delay: 0.05, duration: 0.4, type: `spring` },
      trigger: `onMount`,
      type: `appear`,
    }),
    ($n = (...e) => {
      for (let t of e) if (t && typeof t == `string`) return t;
    }),
    (er = (e) =>
      typeof e == `object` && e && typeof e.src == `string`
        ? e
        : typeof e == `string`
          ? { src: e }
          : void 0),
    (tr = (e, t) => `translateX(-50%) ${t}`),
    (nr = { delay: 0, duration: 0.4, ease: [0.4, 0, 0.2, 1], type: `tween` }),
    (rr = {
      opacity: 0,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: nr,
      x: 0,
      y: 30,
    }),
    (ir = {
      opacity: 1,
      rotate: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      skewX: 0,
      skewY: 0,
      transition: nr,
      x: 0,
      y: 0,
    }),
    (ar = {
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
    (or = () =>
      document.querySelector(`#template-overlay`) ??
      document.querySelector(`#overlay`) ??
      document.body),
    (sr = ({ children: e, blockDocumentScrolling: t, dismissWithEsc: n, enabled: r = !0 }) => {
      let [i, a] = pe({ blockDocumentScrolling: t, dismissWithEsc: r && n });
      return e({ hide: () => a(!1), show: () => a(!0), toggle: () => a(!i), visible: r && i });
    }),
    (cr = () => ({
      from: { alias: `G_6fyJ6A5`, data: he, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `G_6fyJ6A5`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `G_6fyJ6A5`, name: `id`, type: `Identifier` },
      ],
    })),
    (lr = ({ query: e, pageSize: t, children: n }) => n(P(e))),
    (ur = () => ({
      from: { alias: `HZ_dPbKrh`, data: he, type: `Collection` },
      limit: { type: `LiteralValue`, value: 10 },
      select: [
        { collection: `HZ_dPbKrh`, name: `EKLxfLWe8`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `bf_4Vezhu`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `Gv7QQejjQ`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `FCIPIBRAL`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `qtxO0uchm`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `SbAOTK1XD`, type: `Identifier` },
        { collection: `HZ_dPbKrh`, name: `id`, type: `Identifier` },
      ],
    })),
    (dr = { damping: 40, delay: 0, mass: 1, stiffness: 180, type: `spring` }),
    (fr = { Desktop: `taHwDPZ1m`, Phone: `wzzJO5lTQ`, Tablet: `HWF_scNGZ` }),
    (pr = ({ value: e }) =>
      oe()
        ? null
        : d(`style`, { dangerouslySetInnerHTML: { __html: e }, "data-framer-html-style": `` })),
    (mr = ({ height: e, id: t, width: n, ...r }) => ({
      ...r,
      variant: fr[r.variant] ?? r.variant ?? `taHwDPZ1m`,
    })),
    (hr = D(
      f(function (e, n) {
        let r = t(null),
          i = n ?? r,
          o = y(),
          { activeLocale: l, setLocale: u } = z(),
          f = V(),
          { style: m, className: g, layoutId: v, variant: w, ...T } = mr(e);
        ue(c(() => Be({}, l), [l]));
        let [D, O] = re(w, Un, !1),
          { activeVariantCallback: k, delay: A } = le(void 0),
          j = ({ overlay: e }) =>
            k(async (...t) => {
              e.toggle();
            }),
          P = ({ overlay: e }) =>
            k(async (...t) => {
              e.hide();
            }),
          I = M(Kn, be, De),
          L = s(ne)?.isLayoutTemplate,
          R = !!s(x)?.transition?.layout,
          U = Jn(L, R),
          W = () => !Wn() || ![`HWF_scNGZ`, `wzzJO5lTQ`].includes(D),
          ae = () => !!(!Wn() || [`HWF_scNGZ`, `wzzJO5lTQ`].includes(D));
        return (
          te({}),
          d(ne.Provider, {
            value: {
              activeVariantId: D,
              humanReadableVariantMap: fr,
              primaryVariantId: `taHwDPZ1m`,
              variantClassNames: qn,
            },
            children: h(C, {
              id: v ?? o,
              children: [
                d(pr, { value: `html body { background: rgb(255, 255, 255); }` }),
                h(b.div, {
                  ...T,
                  className: M(I, `framer-i0f4c3`, g),
                  ref: i,
                  style: { ...m },
                  children: [
                    h(Vn, {
                      animate: Yn,
                      className: `framer-kzxahg`,
                      "data-framer-appear-id": `kzxahg`,
                      "data-framer-name": `Main`,
                      initial: Xn,
                      layout: U,
                      optimized: !0,
                      children: [
                        h(`header`, {
                          className: `framer-oulqya`,
                          "data-framer-name": `Header`,
                          children: [
                            d(`div`, {
                              className: `framer-2pp6ro`,
                              "data-border": !0,
                              "data-framer-name": `Headline`,
                              children: d(Nn, {
                                __fromCanvasComponent: !0,
                                animate: Zn,
                                children: d(a, {
                                  children: d(`h1`, {
                                    className: `framer-styles-preset-ul51j9`,
                                    "data-styles-preset": `hPRt9GJWZ`,
                                    dir: `auto`,
                                    children: `Shop All`,
                                  }),
                                }),
                                className: `framer-1xek9yi`,
                                "data-framer-appear-id": `1xek9yi`,
                                effect: Qn,
                                fonts: [`Inter`],
                                initial: Xn,
                                optimized: !0,
                                verticalAlignment: `top`,
                                withExternalLayout: !0,
                              }),
                            }),
                            W() &&
                              h(`div`, {
                                className: `framer-gu41ub hidden-7ievhx hidden-arg0jc`,
                                "data-framer-name": `Bar`,
                                children: [
                                  d(H, {
                                    children: d(B, {
                                      className: `framer-524vr-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `glkZnXDYU`,
                                      scopeId: `hvdIzGXZC`,
                                      children: d(He, {
                                        color: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                        content: `{{#}} total`,
                                        defaultText: `No results found...`,
                                        favoritesText: `No favorites yet...`,
                                        font: {
                                          fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                          fontSize: `15px`,
                                          fontStyle: `normal`,
                                          fontWeight: 400,
                                          letterSpacing: `-0.05em`,
                                          lineHeight: `1em`,
                                        },
                                        height: `100%`,
                                        id: `glkZnXDYU`,
                                        layoutId: `glkZnXDYU`,
                                        noFavorites: `Hide`,
                                        noQuery: `Hide`,
                                        noResults: `Show`,
                                        preview: `Results`,
                                        searchText: `Start your search...`,
                                        transform: `None`,
                                        type: `Default`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                  d(H, {
                                    height: 16,
                                    y: (f?.y || 0) + 0 + 0 + 128 + 0 + 0 + 85.6 + 0,
                                    children: d(B, {
                                      className: `framer-aqxrdu-container`,
                                      "data-framer-name": `Catalog Sort Button`,
                                      name: `Catalog Sort Button`,
                                      nodeId: `gWn_ox5Hu`,
                                      scopeId: `hvdIzGXZC`,
                                      children: d(ze, {
                                        height: `100%`,
                                        id: `gWn_ox5Hu`,
                                        layoutId: `gWn_ox5Hu`,
                                        name: `Catalog Sort Button`,
                                        width: `100%`,
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                          ],
                        }),
                        h(`div`, {
                          className: `framer-z29upi`,
                          "data-framer-name": `Content`,
                          children: [
                            d(N, {
                              breakpoint: D,
                              overrides: {
                                HWF_scNGZ: {
                                  width: `calc(${f?.width || `100vw`} - 64px)`,
                                  y: (f?.y || 0) + 0 + 0 + 128 + 53.6 + 32 + 0,
                                },
                                wzzJO5lTQ: {
                                  width: `calc(${f?.width || `100vw`} - 48px)`,
                                  y: (f?.y || 0) + 0 + 0 + 128 + 53.6 + 24 + 0,
                                },
                              },
                              children: d(H, {
                                height: 253,
                                y: (f?.y || 0) + 0 + 0 + 128 + 285.6 + 32,
                                children: d(B, {
                                  className: `framer-zabmep-container`,
                                  nodeId: `OwD8WuGmL`,
                                  scopeId: `hvdIzGXZC`,
                                  children: d(N, {
                                    breakpoint: D,
                                    overrides: {
                                      HWF_scNGZ: {
                                        style: { width: `100%` },
                                        variant: $n(`NsafrS8jK`),
                                      },
                                      wzzJO5lTQ: {
                                        style: { width: `100%` },
                                        variant: $n(`NsafrS8jK`),
                                      },
                                    },
                                    children: d(jn, {
                                      height: `100%`,
                                      id: `OwD8WuGmL`,
                                      kIwnBVTUp: !0,
                                      layoutId: `OwD8WuGmL`,
                                      variant: $n(`aPLq0waJX`),
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            d(`div`, {
                              className: `framer-2xo0u`,
                              "data-framer-name": `Product Cards`,
                              children: d(H, {
                                children: d(B, {
                                  className: `framer-6od0cw-container`,
                                  isAuthoredByUser: !0,
                                  isModuleExternal: !0,
                                  nodeId: `DDaYDx9R9`,
                                  scopeId: `hvdIzGXZC`,
                                  children: d(N, {
                                    breakpoint: D,
                                    overrides: {
                                      HWF_scNGZ: {
                                        displayMode: `Phone`,
                                        layout: {
                                          align: `start`,
                                          alignH: `start`,
                                          background: `rgba(255, 255, 255, 0)`,
                                          columnCount: 2,
                                          columns: `fixed`,
                                          direction: `vertical`,
                                          distribute: `start`,
                                          gap: 12,
                                          gapY: 16,
                                          gridAlign: `center`,
                                          gridWidth: 300,
                                          maxColumns: 4,
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
                                      wzzJO5lTQ: {
                                        displayMode: `Phone`,
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
                                          gridWidth: 200,
                                          maxColumns: 4,
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
                                    children: d(Le, {
                                      Collection: [
                                        d(b.div, {
                                          className: `framer-wr7nvc`,
                                          "data-framer-name": `Products L`,
                                          children: d(se, {
                                            children: d(lr, {
                                              query: cr(),
                                              children: (e, t, n) =>
                                                d(_, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        bf_4Vezhu: e,
                                                        EKLxfLWe8: t,
                                                        FCIPIBRAL: n,
                                                        Gv7QQejjQ: r,
                                                        id: i,
                                                        qtxO0uchm: a,
                                                        SbAOTK1XD: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (t ??= ``),
                                                      (e ??= ``),
                                                      (n ??= ``),
                                                      (a ??= ``),
                                                      (o ??= ``),
                                                      d(
                                                        C,
                                                        {
                                                          id: `G_6fyJ6A5-${i}`,
                                                          children: d(fe.Provider, {
                                                            value: { EKLxfLWe8: t },
                                                            children: d(ee, {
                                                              href: {
                                                                pathVariables: { EKLxfLWe8: t },
                                                                webPageId: `unRZtzSgJ`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `wEVizwofC`,
                                                              scopeId: `hvdIzGXZC`,
                                                              children: d(b.a, {
                                                                className: `framer-1je657 framer-19s0ktl`,
                                                                children: d(sr, {
                                                                  blockDocumentScrolling: !1,
                                                                  dismissWithEsc: !0,
                                                                  children: (i) =>
                                                                    d(_, {
                                                                      children: d(H, {
                                                                        height: 444,
                                                                        width: `290.6667px`,
                                                                        children: h(B, {
                                                                          className: `framer-f99hdj-container`,
                                                                          id: `${t}-f99hdj`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `meSqPDUN5`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `hvdIzGXZC`,
                                                                          children: [
                                                                            d(Ce, {
                                                                              a8hn4hdTB: `View Product`,
                                                                              gzQ2Nlesr: a,
                                                                              height: `100%`,
                                                                              hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                              id: `meSqPDUN5`,
                                                                              layoutId: `meSqPDUN5`,
                                                                              nNQ5K9K0l: n,
                                                                              pDK2H0NwC: er(r),
                                                                              rHB2d7ei8: o,
                                                                              style: {
                                                                                width: `100%`,
                                                                              },
                                                                              UTuSJqO5M: e,
                                                                              variant:
                                                                                $n(`gmSnlM4V7`),
                                                                              width: `100%`,
                                                                              XmbYcM2J4: j({
                                                                                overlay: i,
                                                                              }),
                                                                            }),
                                                                            d(S, {
                                                                              children:
                                                                                i.visible &&
                                                                                d(_, {
                                                                                  children: p(
                                                                                    d(ie, {
                                                                                      triggerId: `${t}-f99hdj`,
                                                                                      children: h(
                                                                                        F,
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              d(
                                                                                                b.div,
                                                                                                {
                                                                                                  animate:
                                                                                                    {
                                                                                                      opacity: 1,
                                                                                                      transition:
                                                                                                        {
                                                                                                          delay: 0,
                                                                                                          duration: 0,
                                                                                                          ease: [
                                                                                                            0.5,
                                                                                                            0,
                                                                                                            0.88,
                                                                                                            0.77,
                                                                                                          ],
                                                                                                          type: `tween`,
                                                                                                        },
                                                                                                    },
                                                                                                  className:
                                                                                                    M(
                                                                                                      I,
                                                                                                      `framer-1pdv5sh`
                                                                                                    ),
                                                                                                  "data-framer-portal-id": `${t}-f99hdj`,
                                                                                                  exit: {
                                                                                                    opacity: 0,
                                                                                                    transition:
                                                                                                      {
                                                                                                        delay: 0,
                                                                                                        duration: 0,
                                                                                                        ease: [
                                                                                                          0.12,
                                                                                                          0.23,
                                                                                                          0.5,
                                                                                                          1,
                                                                                                        ],
                                                                                                        type: `tween`,
                                                                                                      },
                                                                                                  },
                                                                                                  initial:
                                                                                                    {
                                                                                                      opacity: 0,
                                                                                                    },
                                                                                                  onTap:
                                                                                                    () =>
                                                                                                      i.hide(),
                                                                                                },
                                                                                                `uY_yZry74`
                                                                                              ),
                                                                                              d(
                                                                                                b.div,
                                                                                                {
                                                                                                  className:
                                                                                                    M(
                                                                                                      I,
                                                                                                      `framer-m075sh`
                                                                                                    ),
                                                                                                  "data-framer-portal-id": `${t}-f99hdj`,
                                                                                                  transformTemplate:
                                                                                                    tr,
                                                                                                  children:
                                                                                                    d(
                                                                                                      H,
                                                                                                      {
                                                                                                        width: `max(min(100vw - 40px, 400px), 200px)`,
                                                                                                        children:
                                                                                                          d(
                                                                                                            B,
                                                                                                            {
                                                                                                              animate:
                                                                                                                ir,
                                                                                                              className: `framer-14hteu5-container`,
                                                                                                              exit: rr,
                                                                                                              inComponentSlot:
                                                                                                                !0,
                                                                                                              initial:
                                                                                                                ar,
                                                                                                              nodeId: `ikyYVNV5e`,
                                                                                                              rendersWithMotion:
                                                                                                                !0,
                                                                                                              scopeId: `hvdIzGXZC`,
                                                                                                              children:
                                                                                                                d(
                                                                                                                  je,
                                                                                                                  {
                                                                                                                    HblJYYmXZ:
                                                                                                                      P(
                                                                                                                        {
                                                                                                                          overlay:
                                                                                                                            i,
                                                                                                                        }
                                                                                                                      ),
                                                                                                                    height: `100%`,
                                                                                                                    id: `ikyYVNV5e`,
                                                                                                                    layoutId: `ikyYVNV5e`,
                                                                                                                    style:
                                                                                                                      {
                                                                                                                        maxWidth: `100%`,
                                                                                                                        width: `100%`,
                                                                                                                      },
                                                                                                                    width: `100%`,
                                                                                                                  }
                                                                                                                ),
                                                                                                            }
                                                                                                          ),
                                                                                                      }
                                                                                                    ),
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    or()
                                                                                  ),
                                                                                }),
                                                                            }),
                                                                          ],
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        i
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
                                        d(zn, {
                                          __framer__animate: { transition: dr },
                                          __framer__animateOnce: !0,
                                          __framer__enter: ar,
                                          __framer__styleAppearEffectEnabled: !0,
                                          __framer__threshold: 0.5,
                                          __perspectiveFX: !1,
                                          __targetOpacity: 1,
                                          className: `framer-o08lfd`,
                                          "data-framer-name": `empty-state`,
                                          children: d(b.div, {
                                            className: `framer-3oa1ua`,
                                            "data-framer-name": `content`,
                                            children: d(b.div, {
                                              className: `framer-h6jvsc`,
                                              "data-framer-name": `headline`,
                                              children: d(E, {
                                                __fromCanvasComponent: !0,
                                                children: d(a, {
                                                  children: d(`h2`, {
                                                    className: `framer-styles-preset-63r6z3`,
                                                    "data-styles-preset": `zWe8uO5eV`,
                                                    dir: `auto`,
                                                    style: {
                                                      "--framer-text-color": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                                    },
                                                    children: `No items found.`,
                                                  }),
                                                }),
                                                className: `framer-73gzle`,
                                                fonts: [`Inter`],
                                                verticalAlignment: `top`,
                                                withExternalLayout: !0,
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                      EmptyStatePhone: [],
                                      height: `100%`,
                                      id: `DDaYDx9R9`,
                                      layout: {
                                        align: `start`,
                                        alignH: `start`,
                                        background: `rgba(255, 255, 255, 0)`,
                                        columnCount: 3,
                                        columns: `fixed`,
                                        direction: `vertical`,
                                        distribute: `start`,
                                        gap: 14,
                                        gapY: 24,
                                        gridAlign: `center`,
                                        gridWidth: 300,
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
                                      layoutId: `DDaYDx9R9`,
                                      Metafields: { include: !0 },
                                      pageType: `default`,
                                      Pagination: { enable: !1, items: 12, type: `load_more` },
                                      phoneInstance: [
                                        d(b.div, {
                                          className: `framer-1ysu3pz`,
                                          "data-framer-name": `Products S`,
                                          children: d(se, {
                                            children: d(lr, {
                                              query: ur(),
                                              children: (e, t, n) =>
                                                d(_, {
                                                  children: e?.map(
                                                    (
                                                      {
                                                        bf_4Vezhu: e,
                                                        EKLxfLWe8: t,
                                                        FCIPIBRAL: n,
                                                        Gv7QQejjQ: r,
                                                        id: i,
                                                        qtxO0uchm: a,
                                                        SbAOTK1XD: o,
                                                      },
                                                      s
                                                    ) => (
                                                      (t ??= ``),
                                                      (e ??= ``),
                                                      (n ??= ``),
                                                      (a ??= ``),
                                                      (o ??= ``),
                                                      d(
                                                        C,
                                                        {
                                                          id: `HZ_dPbKrh-${i}`,
                                                          children: d(fe.Provider, {
                                                            value: { EKLxfLWe8: t },
                                                            children: d(ee, {
                                                              href: {
                                                                pathVariables: { EKLxfLWe8: t },
                                                                webPageId: `unRZtzSgJ`,
                                                              },
                                                              motionChild: !0,
                                                              nodeId: `zl6Z_9cPT`,
                                                              scopeId: `hvdIzGXZC`,
                                                              children: d(b.a, {
                                                                className: `framer-145l7p2 framer-19s0ktl`,
                                                                children: d(sr, {
                                                                  blockDocumentScrolling: !1,
                                                                  dismissWithEsc: !0,
                                                                  children: (i) =>
                                                                    d(_, {
                                                                      children: d(H, {
                                                                        height: 444,
                                                                        width: `896px`,
                                                                        children: h(B, {
                                                                          className: `framer-1oj42fm-container`,
                                                                          id: `${t}-1oj42fm`,
                                                                          inComponentSlot: !0,
                                                                          nodeId: `YiCFH8tAZ`,
                                                                          rendersWithMotion: !0,
                                                                          scopeId: `hvdIzGXZC`,
                                                                          children: [
                                                                            d(Ce, {
                                                                              a8hn4hdTB: `View Product`,
                                                                              gzQ2Nlesr: a,
                                                                              height: `100%`,
                                                                              hmewFyoeR: `100% Natural Sparkling Juice`,
                                                                              id: `YiCFH8tAZ`,
                                                                              layoutId: `YiCFH8tAZ`,
                                                                              nNQ5K9K0l: n,
                                                                              pDK2H0NwC: er(r),
                                                                              rHB2d7ei8: o,
                                                                              style: {
                                                                                width: `100%`,
                                                                              },
                                                                              UTuSJqO5M: e,
                                                                              variant:
                                                                                $n(`F4L40vjcL`),
                                                                              width: `100%`,
                                                                              XmbYcM2J4: j({
                                                                                overlay: i,
                                                                              }),
                                                                            }),
                                                                            d(S, {
                                                                              children:
                                                                                i.visible &&
                                                                                d(_, {
                                                                                  children: p(
                                                                                    d(ie, {
                                                                                      triggerId: `${t}-1oj42fm`,
                                                                                      children: h(
                                                                                        F,
                                                                                        {
                                                                                          children:
                                                                                            [
                                                                                              d(
                                                                                                b.div,
                                                                                                {
                                                                                                  animate:
                                                                                                    {
                                                                                                      opacity: 1,
                                                                                                      transition:
                                                                                                        {
                                                                                                          delay: 0,
                                                                                                          duration: 0,
                                                                                                          ease: [
                                                                                                            0.5,
                                                                                                            0,
                                                                                                            0.88,
                                                                                                            0.77,
                                                                                                          ],
                                                                                                          type: `tween`,
                                                                                                        },
                                                                                                    },
                                                                                                  className:
                                                                                                    M(
                                                                                                      I,
                                                                                                      `framer-uqrm9w`
                                                                                                    ),
                                                                                                  "data-framer-portal-id": `${t}-1oj42fm`,
                                                                                                  exit: {
                                                                                                    opacity: 0,
                                                                                                    transition:
                                                                                                      {
                                                                                                        delay: 0,
                                                                                                        duration: 0,
                                                                                                        ease: [
                                                                                                          0.12,
                                                                                                          0.23,
                                                                                                          0.5,
                                                                                                          1,
                                                                                                        ],
                                                                                                        type: `tween`,
                                                                                                      },
                                                                                                  },
                                                                                                  initial:
                                                                                                    {
                                                                                                      opacity: 0,
                                                                                                    },
                                                                                                  onTap:
                                                                                                    () =>
                                                                                                      i.hide(),
                                                                                                },
                                                                                                `MrOptzNUb`
                                                                                              ),
                                                                                              d(
                                                                                                b.div,
                                                                                                {
                                                                                                  className:
                                                                                                    M(
                                                                                                      I,
                                                                                                      `framer-1bg5qlz`
                                                                                                    ),
                                                                                                  "data-framer-portal-id": `${t}-1oj42fm`,
                                                                                                  transformTemplate:
                                                                                                    tr,
                                                                                                  children:
                                                                                                    d(
                                                                                                      H,
                                                                                                      {
                                                                                                        width: `max(min(100vw - 40px, 400px), 200px)`,
                                                                                                        children:
                                                                                                          d(
                                                                                                            B,
                                                                                                            {
                                                                                                              animate:
                                                                                                                ir,
                                                                                                              className: `framer-ymxc3s-container`,
                                                                                                              exit: rr,
                                                                                                              inComponentSlot:
                                                                                                                !0,
                                                                                                              initial:
                                                                                                                ar,
                                                                                                              nodeId: `ej1QT6wTj`,
                                                                                                              rendersWithMotion:
                                                                                                                !0,
                                                                                                              scopeId: `hvdIzGXZC`,
                                                                                                              children:
                                                                                                                d(
                                                                                                                  je,
                                                                                                                  {
                                                                                                                    HblJYYmXZ:
                                                                                                                      P(
                                                                                                                        {
                                                                                                                          overlay:
                                                                                                                            i,
                                                                                                                        }
                                                                                                                      ),
                                                                                                                    height: `100%`,
                                                                                                                    id: `ej1QT6wTj`,
                                                                                                                    layoutId: `ej1QT6wTj`,
                                                                                                                    style:
                                                                                                                      {
                                                                                                                        maxWidth: `100%`,
                                                                                                                        width: `100%`,
                                                                                                                      },
                                                                                                                    width: `100%`,
                                                                                                                  }
                                                                                                                ),
                                                                                                            }
                                                                                                          ),
                                                                                                      }
                                                                                                    ),
                                                                                                }
                                                                                              ),
                                                                                            ],
                                                                                        }
                                                                                      ),
                                                                                    }),
                                                                                    or()
                                                                                  ),
                                                                                }),
                                                                            }),
                                                                          ],
                                                                        }),
                                                                      }),
                                                                    }),
                                                                }),
                                                              }),
                                                            }),
                                                          }),
                                                        },
                                                        i
                                                      )
                                                    )
                                                  ),
                                                }),
                                            }),
                                          }),
                                        }),
                                      ],
                                      Products: { show: `all` },
                                      Search: {
                                        enableSearch: !1,
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
                                      value: `New`,
                                      width: `100%`,
                                    }),
                                  }),
                                }),
                              }),
                            }),
                            ae() &&
                              h(`div`, {
                                className: `framer-1x3cp0m hidden-i0f4c3`,
                                "data-border": !0,
                                "data-framer-name": `Mobile Bar`,
                                children: [
                                  d(H, {
                                    children: d(B, {
                                      className: `framer-482smh-container`,
                                      isAuthoredByUser: !0,
                                      isModuleExternal: !0,
                                      nodeId: `NW2GbZmqW`,
                                      scopeId: `hvdIzGXZC`,
                                      children: d(N, {
                                        breakpoint: D,
                                        overrides: {
                                          HWF_scNGZ: {
                                            font: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `13px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `-0.02em`,
                                              lineHeight: `110%`,
                                            },
                                          },
                                          wzzJO5lTQ: {
                                            font: {
                                              fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                              fontSize: `12px`,
                                              fontStyle: `normal`,
                                              fontWeight: 400,
                                              letterSpacing: `-0.02em`,
                                              lineHeight: `110%`,
                                            },
                                          },
                                        },
                                        children: d(He, {
                                          color: `rgba(3, 6, 7, 0.59)`,
                                          content: `{{#}} total`,
                                          defaultText: `No results found...`,
                                          favoritesText: `No favorites yet...`,
                                          font: {
                                            fontFamily: `"Inter", "Inter Placeholder", sans-serif`,
                                            fontSize: `15px`,
                                            fontStyle: `normal`,
                                            fontWeight: 400,
                                            letterSpacing: `-0.05em`,
                                            lineHeight: `1em`,
                                          },
                                          height: `100%`,
                                          id: `NW2GbZmqW`,
                                          layoutId: `NW2GbZmqW`,
                                          noFavorites: `Hide`,
                                          noQuery: `Hide`,
                                          noResults: `Show`,
                                          preview: `Results`,
                                          searchText: `Start your search...`,
                                          transform: `None`,
                                          type: `Default`,
                                          width: `100%`,
                                        }),
                                      }),
                                    }),
                                  }),
                                  d(N, {
                                    breakpoint: D,
                                    overrides: {
                                      HWF_scNGZ: {
                                        y: (f?.y || 0) + 0 + 0 + 128 + 53.6 + 32 + 253 + 108,
                                      },
                                      wzzJO5lTQ: {
                                        y: (f?.y || 0) + 0 + 0 + 128 + 53.6 + 24 + 277 + 112,
                                      },
                                    },
                                    children: d(H, {
                                      height: 16,
                                      children: d(B, {
                                        className: `framer-1i963fw-container`,
                                        "data-framer-name": `Catalog Sort Button`,
                                        name: `Catalog Sort Button`,
                                        nodeId: `EfhxwXpc5`,
                                        scopeId: `hvdIzGXZC`,
                                        children: d(ze, {
                                          height: `100%`,
                                          id: `EfhxwXpc5`,
                                          layoutId: `EfhxwXpc5`,
                                          name: `Catalog Sort Button`,
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
                    d(H, {
                      children: d(B, {
                        className: `framer-1hsixu4-container`,
                        isAuthoredByUser: !0,
                        isModuleExternal: !0,
                        layout: U,
                        nodeId: `lY6udQjgz`,
                        scopeId: `hvdIzGXZC`,
                        children: d(xe, {
                          height: `100%`,
                          id: `lY6udQjgz`,
                          intensity: 10,
                          layoutId: `lY6udQjgz`,
                          width: `100%`,
                        }),
                      }),
                    }),
                  ],
                }),
                d(`div`, { id: `overlay` }),
              ],
            }),
          })
        );
      }),
      [
        `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
        `.framer-rjsW3.framer-19s0ktl, .framer-rjsW3 .framer-19s0ktl { display: block; }`,
        `.framer-rjsW3.framer-i0f4c3 { align-content: center; align-items: center; background-color: #ffffff; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
        `.framer-rjsW3 .framer-kzxahg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 128px 0px 0px 0px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-rjsW3 .framer-oulqya { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 0px 32px; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-2pp6ro { --border-bottom-width: 1px; --border-color: rgba(3, 6, 7, 0.08); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: hidden; padding: 0px 0px 32px 0px; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-1xek9yi { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
        `.framer-rjsW3 .framer-gu41ub { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-524vr-container { flex: none; height: auto; opacity: 0.54; position: relative; width: auto; }`,
        `.framer-rjsW3 .framer-aqxrdu-container, .framer-rjsW3 .framer-482smh-container, .framer-rjsW3 .framer-1i963fw-container, .framer-rjsW3 .framer-1hsixu4-container { flex: none; height: auto; position: relative; width: auto; }`,
        `.framer-rjsW3 .framer-z29upi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: center; overflow: visible; padding: 32px; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-zabmep-container { flex: none; height: auto; position: sticky; top: 144px; width: auto; z-index: 1; }`,
        `.framer-rjsW3 .framer-2xo0u { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }`,
        `.framer-rjsW3 .framer-6od0cw-container { flex: none; height: auto; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-wr7nvc { display: grid; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 896px; }`,
        `.framer-rjsW3 .framer-1je657, .framer-rjsW3 .framer-145l7p2 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
        `.framer-rjsW3 .framer-f99hdj-container, .framer-rjsW3 .framer-1oj42fm-container { flex: 1 0 0px; height: auto; position: relative; width: 1px; }`,
        `.framer-rjsW3.framer-1pdv5sh, .framer-rjsW3.framer-uqrm9w { background-color: rgba(0, 0, 0, 0); inset: 0px; position: fixed; user-select: none; z-index: 10; }`,
        `.framer-rjsW3.framer-m075sh, .framer-rjsW3.framer-1bg5qlz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: center; left: 50%; overflow: hidden; padding: 20px; position: fixed; top: 0px; transform: translateX(-50%); width: 100%; z-index: 10; }`,
        `.framer-rjsW3 .framer-14hteu5-container, .framer-rjsW3 .framer-ymxc3s-container { flex: none; height: auto; max-width: 400px; min-width: 200px; position: relative; width: 100%; will-change: var(--framer-will-change-effect-override, transform); }`,
        `.framer-rjsW3 .framer-1ysu3pz { display: grid; gap: 12px 12px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(1, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: 0px; position: relative; width: 896px; }`,
        `.framer-rjsW3 .framer-o08lfd { align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 24px; position: relative; width: 896px; }`,
        `.framer-rjsW3 .framer-3oa1ua, .framer-rjsW3 .framer-h6jvsc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
        `.framer-rjsW3 .framer-73gzle { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
        `.framer-rjsW3 .framer-1x3cp0m { --border-bottom-width: 1px; --border-color: rgba(3, 6, 7, 0.08); --border-left-width: 0px; --border-right-width: 0px; --border-style: solid; --border-top-width: 0px; align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: hidden; padding: 20px; position: relative; width: 1px; }`,
        ...ve,
        ...Te,
        `.framer-rjsW3[data-border="true"]::after, .framer-rjsW3 [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; corner-shape: inherit; pointer-events: none; }`,
        `@media (min-width: 810px) and (max-width: 1199.98px) { .framer-rjsW3.framer-i0f4c3 { width: 810px; } .framer-rjsW3 .framer-z29upi { flex-direction: column; gap: 0px; } .framer-rjsW3 .framer-zabmep-container { order: 0; position: relative; top: unset; width: 100%; } .framer-rjsW3 .framer-2xo0u { flex: none; order: 2; padding: 32px 20px 60px 20px; width: 100%; } .framer-rjsW3 .framer-1x3cp0m { flex: none; order: 1; padding: 16px 20px 16px 20px; width: 100%; }}`,
        `@media (max-width: 809.98px) { .framer-rjsW3.framer-i0f4c3 { width: 390px; } .framer-rjsW3 .framer-oulqya { padding: 0px 24px 0px 24px; } .framer-rjsW3 .framer-z29upi { flex-direction: column; gap: 24px; padding: 24px; } .framer-rjsW3 .framer-zabmep-container { order: 0; position: relative; top: unset; width: 100%; } .framer-rjsW3 .framer-2xo0u { flex: none; order: 2; width: 100%; } .framer-rjsW3 .framer-1x3cp0m { flex: none; order: 1; width: 100%; }}`,
      ],
      `framer-rjsW3`
    )),
    (hr.displayName = `Framer Commerce`),
    (hr.defaultProps = { height: 1519, width: 1200 }),
    T(
      hr,
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
        ...Pn,
        ...Fn,
        ...In,
        ...Ln,
        ...Rn,
        ...Bn,
        ...Hn,
        ...L(Q),
        ...L(Ee),
      ],
      { supportsExplicitInterCodegen: !0 }
    ),
    (hr.loader = {
      load: (e, t) => {
        let n = t.locale,
          r = ce.get(cr(), n),
          i = ce.get(ur(), n);
        return Promise.allSettled([
          r.preload(),
          i.preload(),
          k(ze, {}, t),
          k(jn, {}, t),
          (async () => {
            let e = (await r.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [k(Ce, {}, t), k(je, {}, t)]));
          })(),
          (async () => {
            let e = (await i.readMaybeAsync()) ?? [];
            return Promise.allSettled(e.flatMap((e) => [k(Ce, {}, t), k(je, {}, t)]));
          })(),
        ]);
      },
    }),
    (gr = {
      exports: {
        default: {
          type: `reactComponent`,
          name: `FramerhvdIzGXZC`,
          slots: [],
          annotations: {
            framerColorSyntax: `true`,
            framerIntrinsicHeight: `1519`,
            framerScrollSections: `false`,
            framerResponsiveScreen: `true`,
            framerDisplayContentsDiv: `false`,
            framerComponentViewportWidth: `true`,
            framerContractVersion: `1`,
            framerAcceptsLayoutTemplate: `true`,
            framerAutoSizeImages: `true`,
            framerImmutableVariables: `true`,
            framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HWF_scNGZ":{"layout":["fixed","auto"]},"wzzJO5lTQ":{"layout":["fixed","auto"]}}}`,
            framerIntrinsicWidth: `1200`,
            framerLayoutTemplateFlowEffect: `true`,
          },
        },
        queryParamNames: { type: `variable`, annotations: { framerContractVersion: `1` } },
        Props: { type: `tsType`, annotations: { framerContractVersion: `1` } },
        __FramerMetadata__: { type: `variable` },
      },
    }));
})();
export { gr as __FramerMetadata__, hr as default, Gn as queryParamNames };
//# sourceMappingURL=XKhCg1NaXsQ-zB-7ef8dJTxJhW8fO_laWJbbkCmUQtg.wuVkzkeM.mjs.map
