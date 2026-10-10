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
  f as d,
  g as f,
  j as p,
  l as ee,
  o as m,
  w as h,
  y as te,
} from "./react.CWoGm2_e.mjs";
import { C as g, a as _, r as v, t as y } from "./motion.DjW49AAR.mjs";
import {
  A as b,
  D as x,
  Et as S,
  H as ne,
  O as C,
  P as w,
  Tt as re,
  U as ie,
  X as T,
  _t as E,
  ct as D,
  i as O,
  j as k,
  k as A,
  o as j,
  w as ae,
} from "./framer.D9PtOJZM.mjs";
import { i as M, n as oe, r as se, t as N } from "./J6OXVPwtV.C1CsVzE5.mjs";
import { i as ce, t as le } from "./lodash.Dqvych0p.mjs";
var P,
  ue,
  de,
  F = e(() => {
    ((P = (e, t = !1) => {
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
      (ue = (e) => {
        let t = {
          collection: { active: !1, values: [] },
          product_type: { active: !1, values: [] },
          product_tag: { active: !1, values: [] },
          variant: { active: !1, values: [] },
          variant_Color: { active: !1, value: null },
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
              let e = P(n),
                i = r.split(`,`).filter(Boolean);
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
                (r.toLowerCase() === `color` &&
                  ((t.variant_Color.active = !0), (t.variant_Color.value = e.trim())),
                  e
                    .split(`,`)
                    .filter(Boolean)
                    .forEach((e) => {
                      t.variant.values.push({ name: r, value: e.trim() });
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
      (de = (e, t) => {
        if (
          (Array.from(t.searchParams.keys())
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
              t.searchParams.set(n, e[n].values.join(`,`));
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
              t.searchParams.set(e, n.join(`,`));
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
function I(e) {
  if (typeof e == `string`) {
    let t = e.match(/\d{12,}/);
    return t ? t[0] : null;
  }
  if (!e || typeof e != `object`) return null;
  for (let t in e)
    if (Array.isArray(e[t]) || typeof e[t] == `object`) {
      let n = I(e[t]);
      if (n) return n;
    } else if (typeof e[t] == `string`) {
      let n = e[t].match(/\d{12,}/);
      if (n) return n[0];
    }
  return null;
}
function L(e) {
  let t = [];
  return (
    e?.title && t.push(`title`),
    e?.productType && t.push(`productType`),
    e?.productTag && t.push(`tags`),
    e?.collection && t.push(`collections`),
    e?.vendor && t.push(`vendor`),
    e?.variants && t.push(`variants`),
    t
  );
}
function R(e) {
  let [n, a] = o(!0),
    [s, f] = o(null),
    [m, h] = o([]),
    [te, g] = o([]),
    [_, v] = o([]),
    [y, b] = o(!1),
    [x, S] = o(!1);
  Object.keys(e);
  let { Collection: ne, pageType: C, Metafields: w } = e,
    re = w?.include || !1,
    ie = e.Products?.show === `in_stock`,
    T = ie && s === null && m.length === 0,
    E = t(null),
    D = t(null),
    O = t(null),
    k = i === void 0 ? new URLSearchParams() : new URLSearchParams(i.location.search),
    [A, j] = o(() => {
      if (i !== void 0) {
        let e = k.get(`page`);
        return e ? parseInt(e) : 1;
      }
      return 1;
    }),
    [M, oe] = o(!1);
  t(null);
  let se = t(null),
    N = c(() => e.Pagination?.items || 8, [e.Pagination?.items]),
    [le, P] = o([]),
    [de, F] = o([]),
    [R, z] = o(0),
    [V, H] = o(() => {
      if (i !== void 0) {
        let t = new URLSearchParams(i.location.search).get(`search`);
        if (t) return { term: t, fields: L(e.Search?.Scope), active: !0 };
      }
      return { term: ``, fields: L(e.Search?.Scope), active: !1 };
    });
  (r(() => {
    H((t) => ({ ...t, fields: L(e.Search?.Scope) }));
  }, [e.Search?.Scope]),
    r(() => {
      e.Search.initialSearchState === `none` &&
        e.Search.enableSearch &&
        !V.term &&
        (f([]),
        setTimeout(() => {
          if (e.Pagination?.type === `load_more`) {
            let e = new CustomEvent(`hide-loadmore-button`, { detail: { hasMoreItems: !1 } });
            document.dispatchEvent(e);
          } else if (e.Pagination?.type === `next_prev`) {
            let t = new CustomEvent(`update_next_prev_buttons`, {
              detail: { hasMoreItems: !1, type: e.Pagination?.type, currentPage: 1 },
            });
            document.dispatchEvent(t);
          }
        }, 100));
    }, [e.Search.initialSearchState, e.Search.enableSearch, V.term]));
  let pe = l(
    (t) => {
      if (!e.Pagination?.enable || !Array.isArray(t)) return t;
      let n, r, i;
      switch (e.Pagination.type) {
        case `load_more`:
          ((n = 0), (r = A * N), (i = t.slice(n, r)));
          let a = r < t.length;
          if ((oe(a), !a)) {
            let e = new CustomEvent(`hide-loadmore-button`, { detail: { hasMoreItems: a } });
            document.dispatchEvent(e);
          }
          break;
        case `next_prev`:
          ((n = (A - 1) * N), (r = n + N), (i = t.slice(n, r)));
          let o = r < t.length;
          oe(o);
          let s = new CustomEvent(`update_next_prev_buttons`, {
            detail: { hasMoreItems: o, type: e.Pagination?.type, currentPage: A },
          });
          (document.dispatchEvent(s),
            console.log(`[CMS Pagination] Next/Previous:`, {
              itemsPerPage: N,
              currentPage: A,
              startIndex: n,
              endIndex: r,
              paginatedProducts: i,
              hasMoreNextPrev: o,
            }));
          break;
        case `infinite`:
          ((n = 0), (r = A * N), (i = t.slice(n, r)));
          let c = r < t.length;
          oe(c);
          break;
        default:
          return t;
      }
      return i;
    },
    [A, N, e.Pagination?.enable, e.Pagination?.type]
  );
  (r(() => {
    if (i === void 0 || !e.Pagination?.enable) return;
    let t = new URL(i.location.href),
      n = new URLSearchParams(t.search);
    A > 1 ? n.set(`page`, A.toString()) : n.delete(`page`);
    let r = `${t.pathname}?${n.toString()}`;
    r !== i.location.pathname + i.location.search && i.history.pushState({ page: A }, ``, r);
  }, [A, e.Pagination?.enable]),
    r(() => {
      if (!e.Pagination?.enable || e.Pagination?.type !== `infinite` || i === void 0) return;
      let t = new IntersectionObserver(
        (e) => {
          e[0].isIntersecting && M && !n && j((e) => e + 1);
        },
        { root: null, rootMargin: `100px`, threshold: 0.1 }
      );
      return (
        se.current && t.observe(se.current),
        () => {
          t && t.disconnect();
        }
      );
    }, [M, e.Pagination?.enable, e.Pagination?.type, n, A]));
  let me = (t) => {
      if (!t) {
        console.warn(`[CMS] Received null/undefined children`);
        return;
      }
      P(t);
      let n = pe(t);
      (e.Pagination?.enable &&
        e.Pagination?.type === `infinite` &&
        M &&
        n.length > 0 &&
        n.push(
          u(
            `div`,
            {
              ref: se,
              style: {
                width: `100%`,
                height: `50px`,
                gridColumn: `1 / -1`,
                opacity: 0,
                pointerEvents: `none`,
              },
            },
            `infinite-scroll-trigger`
          )
        ),
        t.length,
        n.length);
      let r = Date.now();
      (O.current && r - O.current < 100
        ? (S(!0),
          D.current && clearTimeout(D.current),
          (D.current = setTimeout(() => {
            (S(!1), F(n), Z(n));
          }, 150)))
        : (F(n), Z(n)),
        (O.current = r));
    },
    [U, W] = o(() => {
      if (i !== void 0) {
        let e = new URLSearchParams(i.location.search).get(`sort`);
        if (e)
          switch (e) {
            case `relevance`:
              return { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
            case `title_asc`:
              return { type: `name`, sortBy: `name`, sortDirection: `aToZ` };
            case `title_desc`:
              return { type: `name`, sortBy: `name`, sortDirection: `zToA` };
            case `price_asc`:
              return { type: `price`, sortBy: `price`, sortDirection: `lowToHigh` };
            case `price_desc`:
              return { type: `price`, sortBy: `price`, sortDirection: `highToLow` };
            case `newest`:
              return { type: `created`, sortBy: `created`, sortDirection: `newest` };
            case `best_selling`:
              return { type: `best-selling`, sortBy: `best-selling`, sortDirection: null };
          }
        let t = sessionStorage.getItem(`sortBy`);
        if (t)
          switch (t) {
            case `relevance`:
              return { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
            case `title_asc`:
              return { type: `name`, sortBy: `name`, sortDirection: `aToZ` };
            case `title_desc`:
              return { type: `name`, sortBy: `name`, sortDirection: `zToA` };
            case `price_asc`:
              return { type: `price`, sortBy: `price`, sortDirection: `lowToHigh` };
            case `price_desc`:
              return { type: `price`, sortBy: `price`, sortDirection: `highToLow` };
            case `newest`:
              return { type: `created`, sortBy: `created`, sortDirection: `newest` };
            case `best_selling`:
              return { type: `best-selling`, sortBy: `best-selling`, sortDirection: null };
          }
      }
      switch (e.defaultSort) {
        case `relevance`:
          return { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
        case `title_asc`:
          return { type: `name`, sortBy: `name`, sortDirection: `aToZ` };
        case `title_desc`:
          return { type: `name`, sortBy: `name`, sortDirection: `zToA` };
        case `price_asc`:
          return { type: `price`, sortBy: `price`, sortDirection: `lowToHigh` };
        case `price_desc`:
          return { type: `price`, sortBy: `price`, sortDirection: `highToLow` };
        case `newest`:
          return { type: `created`, sortBy: `created`, sortDirection: `newest` };
        case `best_selling`:
          return { type: `best-selling`, sortBy: `best-selling`, sortDirection: null };
        default:
          return { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
      }
    }),
    [G, K] = o(() => {
      let t = {
        collection: {
          active: !!(e.display === `Collection` && e.value),
          values: e.display === `Collection` && e.value ? [e.value] : [],
        },
        product_type: {
          active: !!(e.display === `Product Type` && e.value),
          values: e.display === `Product Type` && e.value ? [e.value] : [],
        },
        product_tag: {
          active: !!(e.display === `Product Tag` && e.value),
          values: e.display === `Product Tag` && e.value ? [e.value] : [],
        },
        on_sale: { active: !1, value: !0 },
        in_stock: { active: !1, value: !0 },
        bundle: { active: !1, value: !0 },
        subscription: { active: !1, value: !0 },
        price: { active: !1, values: [] },
        discount_amount: { active: !1, values: [] },
        discount_percent: { active: !1, values: [] },
        variant: { active: !1, values: [] },
      };
      if (
        (e.display,
        e.value,
        Object.entries(t)
          .filter(([e, t]) => t.active)
          .reduce((e, [t, n]) => ({ ...e, [t]: n }), {}),
        i !== void 0)
      ) {
        let n = new URL(i.location.href);
        (n.toString(), n.search);
        try {
          let r = ue(n.searchParams);
          if (r && Object.keys(r).length > 0) {
            let n = Object.entries(r)
              .filter(([e, t]) => t.active)
              .reduce((e, [t, n]) => ({ ...e, [t]: n }), {});
            if (Object.keys(n).length > 0) {
              let n = { ...t };
              return (
                e.display === `Collection` && e.value
                  ? (n.collection = { active: !0, values: [e.value] })
                  : e.display === `Product Type` && e.value
                    ? (n.product_type = { active: !0, values: [e.value] })
                    : e.display === `Product Tag` &&
                      e.value &&
                      (n.product_tag = { active: !0, values: [e.value] }),
                Object.entries(r).forEach(([t, r]) => {
                  (t === `collection` && e.display === `Collection` && e.value) ||
                  (t === `product_type` && e.display === `Product Type` && e.value) ||
                  (t === `product_tag` && e.display === `Product Tag` && e.value)
                    ? (n[t] = {
                        active: !0,
                        values: [...new Set([...n[t].values, ...(r.values || [])])],
                      })
                    : (n[t] = r);
                }),
                n
              );
            }
          }
        } catch (e) {
          console.error(`❌ Error parsing URL filters:`, e);
        }
      }
      return t;
    }),
    q = l(
      (t) => {
        (t.type,
          i !== void 0 && i.shopXtools,
          i !== void 0 && i.shopXtools?.products?.length,
          i !== void 0 && i.shopXtools?.products
            ? (h(i.shopXtools.products),
              g([]),
              e.Products?.show === `in_stock` && f(null),
              V.active && V.term && f(null))
            : Array.isArray(t.detail.products) &&
              (h(t.detail.products),
              g([]),
              e.Products?.show === `in_stock` && f(null),
              V.active && V.term && f(null)));
      },
      [V, e.Products?.show]
    ),
    J = l((e) => {
      (W(e.detail), f(null));
    }, []),
    Y = l(
      (t) => {
        if (t?.detail?.resetToInitialScope === !0) {
          let t = {
            collection: {
              active: !!(e.display === `Collection` && e.value),
              values: e.display === `Collection` && e.value ? [e.value] : [],
            },
            product_type: {
              active: !!(e.display === `Product Type` && e.value),
              values: e.display === `Product Type` && e.value ? [e.value] : [],
            },
            product_tag: {
              active: !!(e.display === `Product Tag` && e.value),
              values: e.display === `Product Tag` && e.value ? [e.value] : [],
            },
            on_sale: { active: !1, value: !0 },
            in_stock: { active: !1, value: !0 },
            bundle: { active: !1, value: !0 },
            subscription: { active: !1, value: !0 },
            price: { active: !1, values: [] },
            discount_amount: { active: !1, values: [] },
            discount_percent: { active: !1, values: [] },
            variant: { active: !1, values: [] },
          };
          K(t);
        } else
          K({
            collection: { active: !1, values: [] },
            product_type: { active: !1, values: [] },
            product_tag: { active: !1, values: [] },
            on_sale: { active: !1, value: !0 },
            in_stock: { active: !1, value: !0 },
            bundle: { active: !1, value: !0 },
            subscription: { active: !1, value: !0 },
            price: { active: !1, values: [] },
            discount_amount: { active: !1, values: [] },
            discount_percent: { active: !1, values: [] },
            variant: { active: !1, values: [] },
          });
        f(null);
      },
      [e.display, e.value]
    ),
    X = l(
      (t) => {
        let { type: n, value: r, active: i } = t.detail;
        (t.detail.type,
          t.detail.group,
          t.detail.active,
          t.detail.value,
          t.detail.filterType,
          t.detail.componentId,
          !(
            ((n === `collection` && e.display === `Collection` && e.value === r) ||
              (n === `product_type` && e.display === `Product Type` && e.value === r) ||
              (n === `product_tag` && e.display === `Product Tag` && e.value === r)) &&
            !i
          ) &&
            (K((e) => {
              let n = { ...e },
                {
                  type: r,
                  group: i,
                  active: a,
                  value: o,
                  filterType: s,
                  variantStockFilter: c,
                } = t.detail;
              if ((e[r], r.startsWith(`variant_`))) {
                let e = r.replace(`variant_`, ``);
                if (a) {
                  n.variant
                    ? c && (n.variant.variantStockFilter = c)
                    : (n.variant = { active: !0, values: [], variantStockFilter: c || void 0 });
                  let t = o;
                  (typeof o == `string` && (t = decodeURIComponent(o)),
                    typeof t == `string` && t.includes(`,`)
                      ? t
                          .split(`,`)
                          .filter(Boolean)
                          .forEach((t) => {
                            n.variant.values.some(
                              (n) =>
                                n.name.toLowerCase() === e.toLowerCase() &&
                                n.value.toLowerCase() === t.trim().toLowerCase()
                            ) || n.variant.values.push({ name: e, value: t.trim() });
                          })
                      : n.variant.values.some(
                          (n) =>
                            n.name.toLowerCase() === e.toLowerCase() &&
                            n.value.toLowerCase() === String(t).toLowerCase()
                        ) || n.variant.values.push({ name: e, value: t }),
                    (n.variant.active = !0));
                } else if (n.variant && n.variant.values) {
                  let t = o;
                  (typeof o == `string` && (t = decodeURIComponent(o)),
                    typeof t == `string` && t.includes(`,`) && t.split(`,`).filter(Boolean),
                    (n.variant.values = n.variant.values.filter((n) => {
                      let r = n.name.toLowerCase() === e.toLowerCase(),
                        i = n.value.toLowerCase() === String(t).toLowerCase();
                      return !(r && i);
                    })),
                    (n.variant.active = n.variant.values.length > 0));
                }
              } else
                switch (r) {
                  case `product_type`:
                  case `product_tag`:
                  case `collection`:
                    (`${r}`,
                      n[r].values,
                      a
                        ? (n[r].values = [...(n[r].values || []), o])
                        : (n[r].values = n[r].values.filter((e) => e !== o)),
                      (n[r].active = n[r].values.length > 0),
                      `${r}`,
                      n[r].active,
                      n[r].values);
                    break;
                  case `price`:
                    if (a) {
                      ((n.price ||= { active: a, values: [] }), (n.price.active = a));
                      let e = o?.values?.[0];
                      if (e) {
                        let t = {
                          priceType: e.priceType,
                          min: e.priceType === `Under` ? null : e.min,
                          max: e.priceType === `Over` ? null : e.max,
                        };
                        n.price.values.some(
                          (e) => e.priceType === t.priceType && e.min === t.min && e.max === t.max
                        ) || n.price.values.push(t);
                      }
                    } else
                      (n.price.active &&
                        n.price.values &&
                        o.values?.forEach((e) => {
                          n.price.values = n.price.values.filter(
                            (t) =>
                              !(t.priceType === e.priceType && t.min === e.min && t.max === e.max)
                          );
                        }),
                        (n.price.active = n.price.values.length > 0));
                    break;
                  case `discount_amount`:
                  case `discount_percent`:
                    let e = r;
                    (n[e] || (n[e] = { active: !1, values: [] }),
                      a
                        ? n[e].values.push(...o.values)
                        : (n[e].values = n[e].values.filter(
                            (e) => !o.values.some((t) => t.min === e.min && t.max === e.max)
                          )),
                      (n[e].active = n[e].values.length > 0));
                    break;
                  case `on_sale`:
                  case `in_stock`:
                  case `bundle`:
                  case `subscription`:
                    n[r] = { active: a, value: !0 };
                    break;
                  default:
                    console.warn(`Unhandled filter type:`, r);
                }
              return (
                n[r],
                Object.entries(n)
                  .filter(([e, t]) => t.active)
                  .reduce((e, [t, n]) => ({ ...e, [t]: n }), {}),
                n
              );
            }),
            f(null)));
      },
      [e.display, e.value]
    ),
    he = l(
      (t) => {
        e.Search?.enableSearch &&
          (H({ term: t.detail.term, fields: L(e.Search?.Scope), active: !!t.detail.term }),
          f(null));
      },
      [e.Search?.enableSearch, e.Search?.Scope]
    );
  (r(() => {
    if (i === void 0) return;
    let e = () => {
      let e = JSON.parse(localStorage.getItem(`favorites`) || `[]`);
      v(e);
    };
    e();
    let t = (t) => {
      let { favorites: n, action: r, productId: i } = t.detail || {};
      (C === `favorites` && r === `remove` && b(!0),
        r === `remove` && i
          ? v((e) => {
              let t = e.filter((e) => e !== i);
              if (C === `favorites`)
                if (s && s.length > 0) {
                  let e = s.filter((e) => (e.key || ``) !== i);
                  e.length > 0 ? Z(e) : f(null);
                } else f(null);
              return t;
            })
          : r === `add` && i
            ? v((e) => {
                let t = [...e, i];
                return (C === `favorites` && f(null), t);
              })
            : (e(), C === `favorites` && f(null)));
    };
    return (
      document.addEventListener(`favorites-updated`, t),
      () => {
        document.removeEventListener(`favorites-updated`, t);
      }
    );
  }, [C, s]),
    r(() => {
      B.instances.add(`FC_CatalogDisplay`);
      let e = (e) => {
          let t = e;
          (t.detail?.products, t.detail?.products?.length, q(t));
        },
        t = (e) => {
          let t = e;
          (t.detail, J(t));
        },
        n = (e) => {
          let t = e;
          (t.detail, Y(t));
        },
        r = (e) => {
          let t = e;
          (t.detail, X(t));
        },
        i = (e) => {
          let t = e;
          (t.detail, he(t));
        };
      return (
        document.addEventListener(`filter-reset`, n),
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`product-sort-change`, t),
        document.addEventListener(`product-filter-change`, r),
        document.addEventListener(`product-search-change`, i),
        () => {
          (B.instances.delete(`FC_CatalogDisplay`),
            document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product-sort-change`, t),
            document.removeEventListener(`product-filter-change`, r),
            document.removeEventListener(`product-search-change`, i),
            document.removeEventListener(`filter-reset`, n));
        }
      );
    }, [q, J, X, he, Y]),
    r(() => {
      if (m.length > 0 && G.product_type?.active) {
        let e = G.product_type.values;
        m.filter((t) => {
          let n = t.node?.productType;
          return n ? e.some((e) => n.toLowerCase().includes(e.toLowerCase())) : !1;
        });
      }
    }, [m]),
    l(
      (e) => {
        (`${e}`, m.length, i !== void 0 && i.shopXtools);
        let t = `gid://shopify/Product/${e}`,
          n;
        return (
          i !== void 0 &&
            i.shopXtools?.products &&
            ((n = i.shopXtools.products.find(({ node: e }) => e.id === t)?.node),
            n && (n.id, n.title)),
          (n ||= m.find(({ node: e }) => e.id === t)?.node),
          n
            ? (n.id,
              n.title,
              n.productType,
              n.tags,
              n.collections,
              i.shopXtools,
              {
                id: n.id,
                title: n.title || ``,
                price: n.priceRange?.minVariantPrice?.amount
                  ? parseFloat(n.priceRange.minVariantPrice.amount)
                  : 0,
                productType: n.productType || ``,
                tags: n.tags || [],
                compareAtPrice: n.compareAtPriceRange?.minVariantPrice?.amount
                  ? parseFloat(n.compareAtPriceRange.minVariantPrice.amount)
                  : 0,
                isOnSale: n.compareAtPriceRange?.minVariantPrice?.amount
                  ? parseFloat(n.compareAtPriceRange.minVariantPrice.amount) >
                    parseFloat(n.priceRange?.minVariantPrice?.amount || `0`)
                  : !1,
                collections: Array.isArray(n.collections) ? n.collections.map((e) => e.title) : [],
                options: n.options || [],
                variants: n.variants?.edges || [],
                sellingPlanGroups: n.sellingPlanGroups?.edges || [],
                hasProductLevelPlans: n.sellingPlanGroups?.edges?.length > 0,
                hasVariantLevelPlans: n.variants?.edges?.some(
                  (e) => e.node.sellingPlanAllocations?.edges?.length > 0
                ),
              })
            : {
                id: ``,
                title: ``,
                price: 0,
                productType: ``,
                tags: [],
                compareAtPrice: 0,
                isOnSale: !1,
                collections: [],
                options: [],
                variants: [],
                sellingPlanGroups: [],
                hasProductLevelPlans: !1,
                hasVariantLevelPlans: !1,
              }
        );
      },
      [m]
    ));
  let Z = (e) => {
    (e && e.length,
      E.current && clearTimeout(E.current),
      b(!0),
      f(e),
      setTimeout(() => {
        (b(!1), S(!1));
      }, 200));
  };
  r(
    () => () => {
      (E.current && clearTimeout(E.current), D.current && clearTimeout(D.current));
    },
    []
  );
  let ge = l(
    (t) => {
      let n = {},
        r = {
          search: V.active ? { term: V.term, fields: V.fields } : null,
          collection: G.collection?.active ? { values: G.collection.values } : null,
          product_type: G.product_type?.active ? { values: G.product_type.values } : null,
          product_tag: G.product_tag?.active ? { values: G.product_tag.values } : null,
          price: G.price?.active ? { values: G.price.values } : null,
          on_sale: G.on_sale?.active || null,
          in_stock: G.in_stock?.active || null,
          bundle: G.bundle?.active || null,
          subscription: G.subscription?.active || null,
          variant: G.variant?.active ? { values: G.variant.values } : null,
          discount_amount: G.discount_amount?.active ? { values: G.discount_amount.values } : null,
          discount_percent: G.discount_percent?.active
            ? { values: G.discount_percent.values }
            : null,
        };
      if (
        (Object.values(r).some((e) => e !== null), V.active && V.term && e.Search?.enableSearch)
      ) {
        let e = V.term.toLowerCase(),
          r = !1;
        for (let n of V.fields) {
          switch (n) {
            case `variants`:
              if (t?.variants?.edges && Array.isArray(t.variants.edges))
                try {
                  let n = t.variants.edges.some((t) =>
                      !t?.node?.selectedOptions || !Array.isArray(t.node.selectedOptions)
                        ? !1
                        : t.node.selectedOptions.some(
                            (t) =>
                              t?.value &&
                              typeof t.value == `string` &&
                              t.value.toLowerCase().includes(e)
                          )
                    ),
                    i = !1;
                  (re &&
                    t?.metafields &&
                    Array.isArray(t.metafields) &&
                    (i = t.metafields.some((t) => {
                      if (
                        t &&
                        t.namespace === `custom` &&
                        t.key.startsWith(`fc_`) &&
                        typeof t.value == `string`
                      ) {
                        let n = [];
                        try {
                          let e = JSON.parse(t.value);
                          Array.isArray(e)
                            ? (n = e?.map((e) => e.toLowerCase()) || [])
                            : typeof e == `string` && (n = [e.toLowerCase()]);
                        } catch {
                          n = [t.value.toLowerCase()];
                        }
                        return n.some((t) => t.includes(e));
                      }
                      return !1;
                    })),
                    (r = r || n || i));
                } catch (e) {
                  return (console.error(`Error searching variants and custom color:`, e), !1);
                }
              break;
            case `title`:
              if (t.title) {
                let n = t.title.toLowerCase().includes(e);
                r ||= n;
              }
              break;
            case `productType`:
              if (t.productType) {
                let n = t.productType.toLowerCase().includes(e);
                r ||= n;
              }
              break;
            case `tags`:
              if (Array.isArray(t.tags)) {
                let n = t.tags.some((t) => t && t.toLowerCase().includes(e));
                r ||= n;
              }
              break;
            case `collections`:
              if (Array.isArray(t.collections)) {
                let n = t.collections.some((t) => {
                  let n = t?.title || t;
                  return typeof n == `string` && n.toLowerCase().includes(e);
                });
                r ||= n;
              }
              break;
            case `vendor`:
              if (t.vendor) {
                let n = t.vendor.toLowerCase().includes(e);
                r ||= n;
              }
              break;
          }
          if (r) break;
        }
        if (((n.search = { active: !0, term: V.term, matches: r }), !r))
          return { matches: !1, filterResults: n };
      }
      if (G.collection?.active && G.collection.values?.length > 0) {
        let r = G.collection.values,
          i = !1,
          a = Array.isArray(t?.collections)
            ? t.collections.map((e) => e?.node?.title || e?.node?.handle || e).filter(Boolean)
            : [];
        if (
          ((i =
            e.display === `Collection`
              ? r.every((e) => a.some((t) => t?.toLowerCase() === e?.toLowerCase()))
              : r.some((e) => a.some((t) => t?.toLowerCase() === e?.toLowerCase()))),
          (n.collection = { active: !0, values: r, matches: i }),
          !i)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.product_type?.active && G.product_type.values?.length > 0) {
        let r = G.product_type.values,
          i = !1,
          a = t?.productType || ``;
        if (
          (a &&
            (i =
              e.display === `Product Type`
                ? r.every((e) => a.toLowerCase() === e.toLowerCase())
                : r.some((e) => a.toLowerCase() === e.toLowerCase())),
          (n.product_type = { active: !0, values: r, matches: i }),
          !i)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.product_tag?.active && G.product_tag.values?.length > 0) {
        let r = G.product_tag.values,
          i = !1,
          a = Array.isArray(t?.tags) ? t.tags.map((e) => e?.toLowerCase()).filter(Boolean) : [];
        if (
          (a.length > 0 &&
            (i =
              e.display === `Product Tag`
                ? r.every((e) => a.some((t) => t === e.toLowerCase()))
                : r.some((e) => a.some((t) => t === e.toLowerCase()))),
          (n.product_tag = { active: !0, values: r, matches: i }),
          !i)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.price?.active && G.price.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = !1;
        if (
          ((r = G.price.values.some((t) =>
            t.min === null ? e <= t.max : t.max === null ? e >= t.min : e >= t.min && e <= t.max
          )),
          (n.price = { active: !0, values: G.price.values, productPrice: e, matches: r }),
          !r)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_amount?.active && G.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = G.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: G.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_percent?.active && G.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = G.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: G.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_amount?.active && G.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = G.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: G.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_percent?.active && G.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = G.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: G.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_amount?.active && G.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = G.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: G.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.discount_percent?.active && G.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = G.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: G.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.on_sale?.active) {
        let e = !1;
        if (
          (t.compareAtPriceRange?.minVariantPrice?.amount &&
            t.priceRange?.minVariantPrice?.amount &&
            (e =
              parseFloat(t.compareAtPriceRange.minVariantPrice.amount) >
              parseFloat(t.priceRange.minVariantPrice.amount)),
          (n.on_sale = { active: !0, matches: e }),
          !e)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.in_stock?.active) {
        let e = !1;
        if (
          (t.variants?.edges?.some((e) => e.node.availableForSale) && (e = !0),
          (n.in_stock = { active: !0, matches: e }),
          !e)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.subscription?.active) {
        let e = !1;
        if (
          (t.sellingPlanGroups?.edges,
          t.sellingPlanGroups?.edges?.length > 0 && (e = !0),
          t.variants?.edges?.some((e) => e.node.sellingPlanAllocations?.edges?.length > 0) &&
            (e = !0),
          (n.subscription = { active: !0, matches: e }),
          !e)
        )
          return { matches: !1, filterResults: n };
      }
      if (G.variant?.active && G.variant.values?.length > 0) {
        let e = G.variant.values,
          r = !1;
        if (
          (t.variants?.edges &&
            ((r = t.variants.edges.some((t) => {
              let n = t.node;
              if (!n.selectedOptions) return !1;
              let r = G.variant?.variantStockFilter === `in_stock`,
                i = n.availableForSale;
              if (r && !i) return !1;
              let a = {};
              return (
                e.forEach((e) => {
                  (a[e.name] || (a[e.name] = []), a[e.name].push(e.value));
                }),
                Object.entries(a)
                  .map(([e, t]) => {
                    let r = n.selectedOptions.find((t) => t.name.toLowerCase() === e.toLowerCase());
                    return r ? t.some((e) => r.value.toLowerCase() === e.toLowerCase()) : !1;
                  })
                  .every((e) => e)
              );
            })),
            re &&
              t.metafields &&
              Array.isArray(t.metafields) &&
              e.forEach((e) => {
                let n = `fc_${e.name.toLowerCase()}`,
                  i = t.metafields.find(
                    (e) =>
                      e && e.namespace === `custom` && e.key === n && typeof e.value == `string`
                  );
                if (i) {
                  let t = [];
                  try {
                    let e = JSON.parse(i.value);
                    Array.isArray(e)
                      ? (t = e.map((e) => e.toLowerCase()))
                      : typeof e == `string` && (t = [e.toLowerCase()]);
                  } catch {
                    t = [i.value.toLowerCase()];
                  }
                  t.length > 0 && e.value && t.includes(e.value.toLowerCase()) && (r = !0);
                }
              })),
          (n.variant = { active: !0, values: e, matches: r }),
          !r)
        )
          return { matches: !1, filterResults: n };
      }
      return { matches: !0, filterResults: n };
    },
    [G, V]
  );
  (r(() => {
    if ((s && V.active) || !V.active) {
      let t = e.Search?.enableSearch && e.Search?.initialSearchState === `custom` && !V.term,
        n = 0;
      n = t ? 0 : R > 0 ? R : Array.isArray(m) && m.length > 0 ? m.length : 0;
      let r = new CustomEvent(`product-search-results`, {
        detail: { count: n, term: V.term || `` },
      });
      document.dispatchEvent(r);
    }
  }, [m, s, V.active, R]),
    r(() => {
      if (i === void 0) return;
      i.shopXtools;
      let e = i.shopXtools?.products;
      e && h(e);
    }, []));
  let _e = (e.displayMode === `Desktop` ? e.Collection : e.phoneInstance)?.[0],
    ve = e.displayMode === `Desktop` ? e.EmptyState?.[0] : e.EmptyStatePhone?.[0];
  if (!_e)
    return ee(`div`, {
      style: {
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: `#666`,
        fontSize: `14px`,
      },
      children: [`Connect `, e.displayMode, ` instance`],
    });
  let ye = p(_e, { style: { ...(_e.props?.style || {}), width: `100%`, height: `100%` } }),
    Q = {};
  if (e.layout) {
    let t = e.layout;
    switch (
      (t.background && (Q.backgroundColor = t.background),
      t.radius &&
        (t.radiusPerSide
          ? (Q.borderRadius = `${t.radiusTopLeft}px ${t.radiusTopRight}px ${t.radiusBottomRight}px ${t.radiusBottomLeft}px`)
          : (Q.borderRadius = `${t.radius}px`)),
      t.type)
    ) {
      case `stack`:
        let e = t.direction === `vertical`;
        Q = {
          ...Q,
          display: `flex`,
          flexDirection: e ? `column` : `row`,
          flexWrap: t.wrap ? `wrap` : `nowrap`,
          alignItems: e ? t.align : t.alignH,
          justifyContent: t.distribute,
          gap: t.gap,
          padding: t.paddingPerSide
            ? `${t.paddingTop}px ${t.paddingRight}px ${t.paddingBottom}px ${t.paddingLeft}px`
            : `${t.padding}px`,
          width: `100%`,
          "& > *": { minWidth: t.stackMinWidth, flexGrow: 1, flexShrink: 1, flexBasis: 0 },
        };
        break;
      case `grid`:
        let n = ``;
        ((n =
          t.columns === `auto`
            ? `repeat(auto-fit, minmax(max(${t.gridWidth}px, calc((100% - ${t.gap * (t.maxColumns - 1)}px) / ${t.maxColumns})), 1fr))`
            : `repeat(${t.columnCount}, 1fr)`),
          (Q = {
            ...Q,
            display: `grid`,
            gridTemplateColumns: n,
            justifyItems: t.gridAlign,
            gap: t.gapY && t.gapY > 0 ? `${t.gapY}px ${t.gap}px` : `${t.gap}px`,
            padding: t.paddingPerSide
              ? `${t.paddingTop}px ${t.paddingRight}px ${t.paddingBottom}px ${t.paddingLeft}px`
              : `${t.padding}px`,
            width: `100%`,
          }));
        break;
    }
  }
  let $ = p(ye, { style: { ...ye.props.style, ...Q } });
  if (ae.current() === ae.canvas) return $;
  r(() => {
    if (i === void 0) return;
    let e = (e) => {
      let t = new URL(i.location.href),
        n = new URLSearchParams(t.search).get(`page`),
        r = n ? parseInt(n, 10) : 1;
      (r !== A && (j(r), f(null)),
        a(!0),
        e.type === `popstate` && (e.stopImmediatePropagation(), i.location.reload()),
        setTimeout(() => {
          a(!1);
        }, 150));
    };
    return (
      e({}),
      i.addEventListener(`popstate`, e),
      document.addEventListener(`product-pagination-change`, e),
      () => {
        (i.removeEventListener(`popstate`, e),
          document.removeEventListener(`product-pagination-change`, e));
      }
    );
  }, [A]);
  try {
    let t = (e, t) => {
        let n = !1,
          r = (e) => {
            if (!d(e)) return e;
            let i = e.props?.children;
            if (typeof i == `function` && !n)
              return ((n = !0), p(e, { ...e.props, children: t(i) }));
            if (Array.isArray(i) && i.length) {
              let t = i.map((e) => (n ? e : r(e)));
              return n ? p(e, { ...e.props, children: t }) : e;
            }
            if (d(i) && !n) {
              let t = r(i);
              if (t !== i) return p(e, { ...e.props, children: t });
            }
            return e;
          };
        return { node: r(e), replaced: n };
      },
      r = (t) => (n) => {
        let r = (e) => (s === null ? (ie ? [] : e) : s),
          i = t(n);
        if (!i?.props?.children)
          return d(i) ? p(i, { style: { ...(i.props?.style || {}), ...Q } }) : i;
        if (
          e.Search?.enableSearch &&
          e.Search?.initialSearchState === `custom` &&
          !V.term &&
          e.CustomInitialState?.[0]
        ) {
          let t = p(e.CustomInitialState[0], {
              style: {
                ...(e.CustomInitialState[0].props?.style || {}),
                width: `100%`,
                height: `100%`,
                maxWidth: `100%`,
                transform: `none`,
              },
            }),
            n = () =>
              u(`div`, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  display: `flex`,
                  justifyContent: `center`,
                  alignItems: `center`,
                  padding: e.layout?.padding ? `${e.layout.padding}px` : `0px`,
                  gridColumn: `1 / -1`,
                  gridRow: `1 / -1`,
                  position: `relative`,
                  minWidth: `100%`,
                  maxWidth: `100%`,
                },
                children: t,
              });
          return {
            ...i,
            props: { ...i.props, style: { ...(i.props?.style || {}), ...Q }, children: u(n, {}) },
          };
        }
        if (!s && m.length > 0) {
          let t = m.filter(({ node: e }) => (e ? ge(e).matches : !1)),
            a = e.Products?.show === `in_stock` ? t.filter(({ node: e }) => fe(e)) : t,
            o =
              C === `favorites`
                ? a.filter(({ node: e }) => {
                    let t = I(e);
                    return t && _.includes(t);
                  })
                : a;
          if ((z(o.length), o.length === 0)) {
            if ((z(0), typeof document < `u`)) {
              let e = new CustomEvent(`product-search-results`, {
                detail: { count: 0, term: V.term || `` },
              });
              document.dispatchEvent(e);
            }
            if (ve) {
              let t = p(ve, {
                  style: {
                    ...(ve.props?.style || {}),
                    width: `100%`,
                    height: `100%`,
                    maxWidth: `100%`,
                    transform: `none`,
                  },
                }),
                n = () =>
                  u(`div`, {
                    style: {
                      width: `100%`,
                      height: `100%`,
                      display: `flex`,
                      justifyContent: `center`,
                      alignItems: `center`,
                      padding: e.layout?.padding ? `${e.layout.padding}px` : `0px`,
                      gridColumn: `1 / -1`,
                      gridRow: `1 / -1`,
                      position: `relative`,
                      minWidth: `100%`,
                      maxWidth: `100%`,
                    },
                    children: t,
                  });
              return {
                ...i,
                props: {
                  ...i.props,
                  style: {
                    ...Q,
                    ...i.props.style,
                    display: `flex`,
                    gridTemplateColumns: `none`,
                    gridAutoColumns: `none`,
                    gridTemplateRows: `none`,
                    gap: 0,
                  },
                  children: u(n, {}),
                },
              };
            }
            return null;
          }
          let s = [];
          ((s =
            e.DuplicateVariants?.enable && e.DuplicateVariants?.variantTitles?.length > 0
              ? o
                  .map(({ node: e }, t) => {
                    let r = i.props.children.find((t) => {
                      let r = n.find((e) => e.id === t.key),
                        i = `gid://shopify/Product/${r ? I(r) : null}`,
                        a = e.id,
                        o = a.split(`_`)[0];
                      return (
                        console.log(`🔍 Matching child:`, {
                          originalFullId: i,
                          duplicatedProductId: a,
                          originalProductId: o,
                          matches: i === o,
                        }),
                        i === o
                      );
                    });
                    return r
                      ? {
                          child: p(r, { key: e.id, ...e._variantData }),
                          productId: e.id,
                          price: e.priceRange?.minVariantPrice?.amount
                            ? parseFloat(e.priceRange.minVariantPrice.amount)
                            : 0,
                          title: e.title || ``,
                          originalIndex: t,
                          details: {
                            id: e.id,
                            title: e.title || ``,
                            price: e.priceRange?.minVariantPrice?.amount
                              ? parseFloat(e.priceRange.minVariantPrice.amount)
                              : 0,
                            productType: e.productType || ``,
                            tags: e.tags || [],
                            compareAtPrice: e.compareAtPriceRange?.minVariantPrice?.amount
                              ? parseFloat(e.compareAtPriceRange.minVariantPrice.amount)
                              : 0,
                            collections: Array.isArray(e.collections)
                              ? e.collections.map((e) => e.node.title)
                              : [],
                          },
                        }
                      : null;
                  })
                  .filter(Boolean)
              : i.props.children
                  .map((e) => {
                    let t = n.find((t) => t.id === e.key),
                      r = t ? I(t) : null,
                      a = `gid://shopify/Product/${r}`,
                      s = o.find(({ node: e }) => e.id === a);
                    if (!s) return null;
                    let c = {
                      id: s.node.id,
                      title: s.node.title || ``,
                      price: s.node.priceRange?.minVariantPrice?.amount
                        ? parseFloat(s.node.priceRange.minVariantPrice.amount)
                        : 0,
                      productType: s.node.productType || ``,
                      tags: s.node.tags || [],
                      compareAtPrice: s.node.compareAtPriceRange?.minVariantPrice?.amount
                        ? parseFloat(s.node.compareAtPriceRange.minVariantPrice.amount)
                        : 0,
                      collections: Array.isArray(s.node.collections)
                        ? s.node.collections.map((e) => e.node.title)
                        : [],
                    };
                    return {
                      child: e,
                      productId: r || `0`,
                      price: c.price,
                      title: c.title,
                      originalIndex: i.props.children.indexOf(e),
                      details: c,
                    };
                  })
                  .filter(Boolean)),
            m.length,
            o.length,
            s.length,
            s[0] && (s[0].title, s[0].details.productType),
            l(
              ce((e) => {
                W(e);
              }, 150),
              []
            ),
            l(
              ce((e) => {
                K(e);
              }, 150),
              []
            ));
          let c = (e) => ({
              ...e,
              opacity: y || x ? 0 : 1,
              transition: `opacity ${x ? `0.5s` : `0.3s`} ease-in-out`,
              pointerEvents: y || x ? `none` : `auto`,
            }),
            d = [...s]
              .sort((e, t) => {
                if (U.type === `relevancy`) return e.originalIndex - t.originalIndex;
                if (U.type === `price`)
                  return (
                    (U.sortDirection === `highToLow` ? t.price - e.price : e.price - t.price) ||
                    e.originalIndex - t.originalIndex
                  );
                if (U.type === `name`)
                  return (
                    (U.sortDirection === `aToZ`
                      ? e.title.localeCompare(t.title)
                      : t.title.localeCompare(e.title)) || e.originalIndex - t.originalIndex
                  );
                if (U.type === `created`) {
                  let n = parseInt(e.productId),
                    r = parseInt(t.productId);
                  return !isNaN(n) && !isNaN(r) ? r - n : e.originalIndex - t.originalIndex;
                } else if (U.type === `best-selling`) return e.originalIndex - t.originalIndex;
                else return e.originalIndex - t.originalIndex;
              })
              .map((e) =>
                p(e.child, { style: c(e.child.props.style), key: e.productId || e.originalIndex })
              );
          return (
            me(d),
            {
              ...i,
              props: {
                ...i.props,
                style: { ...(i.props?.style || {}), ...Q },
                children: r(i.props.children),
              },
            }
          );
        }
        return {
          ...i,
          props: {
            ...i.props,
            style: { ...(i.props?.style || {}), ...Q },
            children: r(i.props.children),
          },
        };
      },
      i = (e) => {
        if (!d(e)) return e;
        let t = e.props?.children;
        if (e.props?.query && typeof t != `function`)
          return p(e, { ...e.props, children: () => t });
        if (Array.isArray(t)) {
          let n = t.map((e) => i(e));
          return p(e, { ...e.props, children: n });
        }
        if (d(t)) {
          let n = i(t);
          if (n !== t) return p(e, { ...e.props, children: n });
        }
        return e;
      },
      a = t(i($.props.children), r);
    return p($, {
      ...$.props,
      style: {
        ...$.props.style,
        opacity: n || T ? 0 : 1,
        transition: `opacity 0.2s ease-in-out`,
        visibility: n || T ? `hidden` : `visible`,
      },
      children: a.node,
    });
  } catch (e) {
    return (console.error(`Error in ProductSort:`, e), e.message, $);
  }
}
var z,
  fe,
  B,
  V = e(() => {
    (n(),
      m(),
      h(),
      T(),
      le(),
      F(),
      (z = (e) => (e ? (e.availableForSale ? !0 : (e.quantityAvailable || 0) > 0) : !1)),
      (fe = (e) =>
        e?.variants?.edges?.length ? e.variants.edges.some(({ node: e }) => z(e)) : !1),
      (B = {
        instances: new Set(),
        eventListeners: new Map(),
        cleanup: () => {
          (B.instances.clear(),
            B.eventListeners.forEach((e, t) => {
              i.removeEventListener(t, e);
            }),
            B.eventListeners.clear());
        },
        lastUrl: i === void 0 ? `` : i.location.href,
        isBackToFilter: !1,
      }),
      i !== void 0 && i.addEventListener(`beforeunload`, B.cleanup),
      k(R, {
        Collection: { type: j.ComponentInstance, title: `CMS (L)` },
        phoneInstance: {
          type: j.ComponentInstance,
          title: `CMS (S)`,
          description: `Connect to CMS collection off-page with no filters. Inside, use a single component with Product ID set.  

 (S optional)`,
        },
        EmptyState: { type: j.ComponentInstance, title: `Empty (L)` },
        EmptyStatePhone: {
          type: j.ComponentInstance,
          title: `Empty (S)`,
          description: `Connect to empty state design off-page. 

 (S optional)`,
        },
        CustomInitialState: {
          type: j.ComponentInstance,
          title: `Initial State`,
          description: `Initial state for Search. Connect to design off-page.`,
          hidden: (e) => !e.Search?.enableSearch || e.Search?.initialSearchState !== `custom`,
        },
        displayMode: {
          type: j.Enum,
          title: `Responsive`,
          defaultValue: `Desktop`,
          options: [`Desktop`, `Phone`],
          optionTitles: [`L`, `S`],
          displaySegmentedControl: !0,
          description: `Display the Large (L) or Small (S) designs connected above.`,
        },
        pageType: {
          type: j.Enum,
          title: `Display`,
          options: [`default`, `favorites`],
          optionTitles: [`All`, `Favorites`],
          defaultValue: `default`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
        display: {
          type: j.Enum,
          title: `Filter Type`,
          options: [`All`, `Collection`, `Product Tag`, `Product Type`],
          defaultValue: `All`,
        },
        value: { type: j.String, title: `Filter Value`, placeholder: `New Arrivals` },
        defaultSort: {
          type: j.Enum,
          title: `Default Sort`,
          options: [
            `relevance`,
            `title_asc`,
            `title_desc`,
            `price_asc`,
            `price_desc`,
            `newest`,
            `best_selling`,
          ],
          optionTitles: [
            `Relevance`,
            `Title A-Z`,
            `Title Z-A`,
            `Price Low-High`,
            `Price High-Low`,
            `Newest`,
            `Best Selling`,
          ],
          defaultValue: `relevance`,
        },
        Search: {
          type: j.Object,
          title: `Search`,
          controls: {
            enableSearch: {
              type: j.Boolean,
              title: `Allow`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            initialSearchState: {
              type: j.Enum,
              title: `Initial State`,
              options: [`all`, `none`, `custom`],
              optionTitles: [`Full`, `Empty`, `Custom`],
              defaultValue: `all`,
              description: `Use custom to display product or search suggestions. Connect your component on the main panel.`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: (e) => !e.enableSearch,
            },
            Scope: {
              type: j.Object,
              title: `Scope`,
              hidden: (e) => !e.enableSearch,
              controls: {
                title: {
                  type: j.Boolean,
                  title: `Title`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                productType: {
                  type: j.Boolean,
                  title: `Product Type`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                productTag: {
                  type: j.Boolean,
                  title: `Tags`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                collection: {
                  type: j.Boolean,
                  title: `Collections`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                vendor: {
                  type: j.Boolean,
                  title: `Vendor`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                variants: {
                  type: j.Boolean,
                  title: `Variants`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
              },
            },
          },
        },
        Metafields: {
          type: j.Object,
          title: `Metafields`,
          controls: {
            include: {
              type: j.Boolean,
              title: `Include`,
              defaultValue: !1,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
              description: `Searching or filtering by Variant: Color will also check custom metafields using custom.fc_color. 
 [Learn more](https://framercommerce.com/resources/docs/components/catalog#catalog-display)`,
            },
          },
        },
        Products: {
          type: j.Object,
          title: `Products`,
          controls: {
            show: {
              type: j.Enum,
              title: `Show`,
              options: [`all`, `in_stock`],
              optionTitles: [`All`, `In Stock Only`],
              defaultValue: `all`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
          },
        },
        Pagination: {
          type: j.Object,
          title: `Pagination`,
          controls: {
            enable: {
              type: j.Boolean,
              title: `Enable`,
              defaultValue: !1,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            type: {
              type: j.Enum,
              title: `Type`,
              options: [`load_more`, `next_prev`],
              optionTitles: [`Load More`, `Next/Prev`],
              defaultValue: `load_more`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: ({ enable: e }) => !e,
            },
            items: {
              type: j.Number,
              title: `Items`,
              defaultValue: 12,
              min: 1,
              step: 1,
              displayStepper: !0,
              hidden: ({ enable: e }) => !e,
              description: `Insert our Pagination button from the plugin.`,
            },
          },
        },
        layout: {
          type: j.Object,
          optional: !0,
          controls: {
            type: {
              type: j.Enum,
              defaultValue: `grid`,
              options: [`stack`, `grid`],
              optionTitles: [`Stack`, `Grid`],
              displaySegmentedControl: !0,
            },
            direction: {
              type: j.Enum,
              defaultValue: `vertical`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `stack`,
            },
            wrap: {
              type: j.Boolean,
              defaultValue: !1,
              title: `Wrap`,
              hidden: (e) => e.type !== `stack`,
            },
            stackMinWidth: {
              type: j.Number,
              defaultValue: 200,
              min: 1,
              max: 1e3,
              step: 1,
              title: `Min Width`,
              hidden: (e) => e.type !== `stack` || !e.wrap,
            },
            distribute: {
              type: j.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`, `space-between`, `space-around`, `space-evenly`],
              optionTitles: [
                `Start`,
                `Center`,
                `End`,
                `Space Between`,
                `Space Around`,
                `Space Evenly`,
              ],
              hidden: (e) => e.type !== `stack`,
            },
            align: {
              type: j.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Start`, `Center`, `End`],
              optionIcons: [`align-left`, `align-center`, `align-right`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `stack` || e.direction !== `vertical`,
            },
            alignH: {
              type: j.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Top`, `Center`, `Bottom`],
              optionIcons: [`align-top`, `align-middle`, `align-bottom`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type !== `stack` || e.direction !== `horizontal`,
            },
            columns: {
              type: j.Enum,
              defaultValue: `fixed`,
              options: [`auto`, `fixed`],
              optionTitles: [`Auto`, `Fixed`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `grid`,
            },
            columnCount: {
              type: j.Number,
              defaultValue: 3,
              min: 1,
              step: 1,
              displayStepper: !0,
              title: `Columns`,
              hidden: (e) => e.type !== `grid` || e.columns === `auto`,
            },
            gridWidth: {
              type: j.Number,
              defaultValue: 300,
              min: 1,
              max: 1e3,
              step: 1,
              title: `Min Width`,
              hidden: (e) => e.type !== `grid` || e.columns === `fixed`,
            },
            maxColumns: {
              type: j.Number,
              defaultValue: 4,
              min: 1,
              step: 1,
              title: `Max Col`,
              displayStepper: !0,
              hidden: (e) => e.type !== `grid` || e.columns === `fixed`,
            },
            gridAlign: {
              type: j.Enum,
              defaultValue: `center`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type !== `grid`,
            },
            gap: { type: j.Number, defaultValue: 24, min: 0, step: 1, title: `Gap` },
            gapY: {
              type: j.Number,
              defaultValue: 24,
              min: 0,
              step: 1,
              title: `Gap Y`,
              hidden: (e) => e.type !== `grid`,
            },
            padding: {
              type: j.FusedNumber,
              title: `Padding`,
              defaultValue: 0,
              min: 0,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
            },
            radius: {
              type: j.FusedNumber,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              toggleKey: `radiusPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [
                `radiusTopLeft`,
                `radiusTopRight`,
                `radiusBottomRight`,
                `radiusBottomLeft`,
              ],
              valueLabels: [`TL`, `TR`, `BR`, `BL`],
            },
            background: { type: j.Color, title: `Background`, defaultValue: `#FFFFFF00` },
          },
        },
      }));
  });
function H(e) {
  let {
      DropdownVisual: n,
      relevanceText: a = `Relevance`,
      titleAscText: s = `A-Z`,
      titleDescText: f = `Z-A`,
      priceAscText: m = `Price (lowest first)`,
      priceDescText: h = `Price (highest first)`,
      newestText: te = `Newest`,
      bestSellingText: g = `Best Selling`,
      defaultSort: _ = `relevance`,
    } = e,
    v = t(null),
    [y, b] = o(_),
    x = () => {
      if (v.current) {
        v.current.focus();
        let e = new MouseEvent(`mousedown`, { bubbles: !0, cancelable: !0, view: i });
        v.current.dispatchEvent(e);
      }
    },
    S = c(
      () =>
        [
          { value: `relevance`, text: a },
          { value: `title_asc`, text: s },
          { value: `title_desc`, text: f },
          { value: `price_asc`, text: m },
          { value: `price_desc`, text: h },
          { value: `newest`, text: te },
          { value: `best_selling`, text: g },
        ].filter((e) => e.text),
      [a, s, f, m, h, te, g]
    ),
    ne = l(() => S.find((e) => e.value === y)?.text || a, [y, S, a]),
    C = (e) => {
      if (!e || typeof e != `object`) return e;
      if (Array.isArray(e)) return e.map((e) => C(e));
      if (!d(e)) return e;
      let { children: t, ...n } = e.props;
      if (e.type?.displayName?.includes(`Text`)) {
        let t = (e.props.text || ``).replace(/{{param}}/g, ne());
        return p(e, { ...n, text: t });
      }
      let r = t;
      return (
        t &&
          (typeof t == `string`
            ? (r = t.replace(/{{param}}/g, ne()))
            : (d(t) || Array.isArray(t)) && (r = C(t))),
        p(e, { ...n, children: r })
      );
    },
    w = l((e) => {
      let t = e.target.value;
      (b(t), i !== void 0 && sessionStorage.setItem(`sortBy`, t));
      let n;
      switch (t) {
        case `relevance`:
          n = { type: `relevancy`, sortBy: `relevancy`, sortDirection: null };
          break;
        case `title_asc`:
          n = { type: `name`, sortBy: `name`, sortDirection: `aToZ` };
          break;
        case `title_desc`:
          n = { type: `name`, sortBy: `name`, sortDirection: `zToA` };
          break;
        case `price_asc`:
          n = { type: `price`, sortBy: `price`, sortDirection: `lowToHigh` };
          break;
        case `price_desc`:
          n = { type: `price`, sortBy: `price`, sortDirection: `highToLow` };
          break;
        case `newest`:
          n = { type: `created`, sortBy: `created`, sortDirection: `newest` };
          break;
        case `best_selling`:
          n = { type: `best-selling`, sortBy: `best-selling`, sortDirection: null };
          break;
      }
      if (i !== void 0) {
        let e = new URL(i.location.href);
        (e.searchParams.set(`sort`, t), i.history.pushState({ sortConfig: n }, ``, e.toString()));
      }
      document.dispatchEvent(new CustomEvent(`product-sort-change`, { detail: n }));
    }, []);
  return (
    r(() => {
      if (i === void 0) return;
      let e = () => {
        let e = new URLSearchParams(i.location.search).get(`sort`);
        if (e && S.some((t) => t.value === e)) (b(e), sessionStorage.setItem(`sortBy`, e));
        else {
          let e = sessionStorage.getItem(`sortBy`);
          if (e && S.some((t) => t.value === e)) {
            b(e);
            let t = new URL(i.location.href);
            (t.searchParams.set(`sort`, e), i.history.pushState({ sort: e }, ``, t.toString()));
          }
        }
      };
      return (
        e(),
        i.addEventListener(`popstate`, e),
        () => {
          i.removeEventListener(`popstate`, e);
        }
      );
    }, [S]),
    ee(`div`, {
      style: { position: `relative`, width: `100%`, height: `100%`, cursor: `pointer` },
      onClick: x,
      children: [
        u(`div`, {
          style: { width: `100%`, height: `100%`, pointerEvents: `none` },
          children: C(n),
        }),
        u(`select`, {
          ref: v,
          value: y,
          onChange: w,
          style: {
            position: `absolute`,
            top: 0,
            left: 0,
            width: `100%`,
            height: `100%`,
            opacity: 0,
            cursor: `pointer`,
          },
          children: S.map((e) => u(`option`, { value: e.value, children: e.text }, e.value)),
        }),
      ],
    })
  );
}
var pe = e(() => {
  (n(),
    m(),
    h(),
    T(),
    k(H, {
      DropdownVisual: {
        type: j.ComponentInstance,
        title: `Component`,
        description: `Connect to native Framer component, on-canvas but off-page. Use {{param}} in text to show the current sort option`,
      },
      defaultSort: {
        type: j.Enum,
        title: `Default Sort`,
        options: [
          `relevance`,
          `title_asc`,
          `title_desc`,
          `price_asc`,
          `price_desc`,
          `newest`,
          `best_selling`,
        ],
        optionTitles: [
          `Relevance`,
          `Title A-Z`,
          `Title Z-A`,
          `Price Low-High`,
          `Price High-Low`,
          `Newest`,
          `Best Selling`,
        ],
        defaultValue: `relevance`,
      },
      relevanceText: { type: j.String, title: `Relevance`, defaultValue: `Relevance` },
      titleAscText: { type: j.String, title: `Title (A-Z)`, defaultValue: `A-Z` },
      titleDescText: { type: j.String, title: `Title (Z-A)`, defaultValue: `Z-A` },
      priceAscText: { type: j.String, title: `Price (Low)`, defaultValue: `Price (lowest first)` },
      priceDescText: {
        type: j.String,
        title: `Price (High)`,
        defaultValue: `Price (highest first)`,
      },
      newestText: { type: j.String, title: `Newest`, defaultValue: `Newest` },
      bestSellingText: {
        type: j.String,
        title: `Best Selling`,
        defaultValue: `Best Selling`,
        description: `Empty fields won't be displayed`,
      },
    }));
});
function me(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var U,
  W,
  G,
  K,
  q,
  J,
  Y,
  X,
  he,
  Z,
  ge = e(() => {
    (m(),
      T(),
      y(),
      h(),
      pe(),
      M(),
      (U = ne(H)),
      (W = { HJ2A6IYsR: { hover: !0 } }),
      (G = `framer-RbT7Q`),
      (K = { HJ2A6IYsR: `framer-v-1fey9yv` }),
      (q = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
      (J = ({ value: e, children: t }) => {
        let n = s(_),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return u(_.Provider, { value: i, children: t });
      }),
      (Y = g.create(a)),
      (X = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
      (he = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (Z = S(
        f(function (e, n) {
          let r = t(null),
            i = n ?? r,
            o = te(),
            { activeLocale: s, setLocale: c } = E();
          D();
          let { style: l, className: d, layoutId: f, variant: p, ...m } = X(e),
            {
              baseVariant: h,
              classNames: _,
              clearLoadingGesture: y,
              gestureHandlers: b,
              gestureVariant: S,
              isLoading: ne,
              setGestureState: ie,
              setVariant: T,
              variants: k,
            } = re({
              defaultVariant: `HJ2A6IYsR`,
              enabledGestures: W,
              ref: i,
              variant: p,
              variantClassNames: K,
            }),
            j = he(e, k),
            ae = w(G, N);
          return u(v, {
            id: f ?? o,
            children: u(Y, {
              animate: k,
              initial: !1,
              children: u(J, {
                value: q,
                children: u(g.div, {
                  ...m,
                  ...b,
                  className: w(ae, `framer-1fey9yv`, d, _),
                  "data-framer-name": `default`,
                  layoutDependency: j,
                  layoutId: `HJ2A6IYsR`,
                  ref: i,
                  style: { ...l },
                  ...me({ "HJ2A6IYsR-hover": { "data-framer-name": void 0 } }, h, S),
                  children: u(O, {
                    children: u(A, {
                      className: `framer-1jjyfqa-container`,
                      isAuthoredByUser: !0,
                      isModuleExternal: !0,
                      layoutDependency: j,
                      layoutId: `JtF6nVNxH-container`,
                      nodeId: `JtF6nVNxH`,
                      rendersWithMotion: !0,
                      scopeId: `aaovIUHpV`,
                      children: u(H, {
                        bestSellingText: `Best Selling`,
                        defaultSort: `relevance`,
                        DropdownVisual: [
                          ee(g.div, {
                            className: `framer-mvg5zv`,
                            "data-framer-name": `settings`,
                            layoutDependency: j,
                            layoutId: `E5_QKDr76`,
                            style: {
                              borderBottomLeftRadius: 8,
                              borderBottomRightRadius: 8,
                              borderTopLeftRadius: 8,
                              borderTopRightRadius: 8,
                            },
                            children: [
                              u(C, {
                                className: `framer-neyr8t`,
                                fill: `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)) /* {"name":"Black"} */`,
                                intrinsicHeight: 32,
                                intrinsicWidth: 32,
                                layoutDependency: j,
                                layoutId: `WISk1ndQA`,
                                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path d="m213.66 101.66-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 164.69l74.34-74.35a8 8 0 0 1 11.32 11.32Z"/></svg>`,
                                withExternalLayout: !0,
                              }),
                              u(g.div, {
                                className: `framer-mdrhk3`,
                                "data-framer-name": `Title`,
                                layoutDependency: j,
                                layoutId: `IxrErZefk`,
                                children: u(x, {
                                  __fromCanvasComponent: !0,
                                  children: u(a, {
                                    children: u(g.p, {
                                      className: `framer-styles-preset-1ud5dr1`,
                                      "data-styles-preset": `J6OXVPwtV`,
                                      dir: `auto`,
                                      style: {
                                        "--framer-text-color": `var(--extracted-r6o4lv, var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0)))`,
                                      },
                                      children: `Sort {{param}}`,
                                    }),
                                  }),
                                  className: `framer-rpmrwn`,
                                  fonts: [`Inter`],
                                  layoutDependency: j,
                                  layoutId: `y5YDMKlc2`,
                                  style: {
                                    "--extracted-r6o4lv": `var(--token-12d96bbe-9281-45ae-950a-0eb862c7533f, rgb(0, 0, 0))`,
                                    "--framer-link-text-color": `rgb(0, 153, 255)`,
                                    "--framer-link-text-decoration": `underline`,
                                  },
                                  verticalAlignment: `top`,
                                  withExternalLayout: !0,
                                }),
                              }),
                            ],
                          }),
                        ],
                        height: `100%`,
                        id: `JtF6nVNxH`,
                        layoutId: `JtF6nVNxH`,
                        newestText: `Newest`,
                        priceAscText: `Price (lowest first)`,
                        priceDescText: `Price (highest first)`,
                        relevanceText: `Relevance`,
                        titleAscText: `A-Z`,
                        titleDescText: `Z-A`,
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
          `.framer-RbT7Q.framer-l9ct81, .framer-RbT7Q .framer-l9ct81 { display: block; }`,
          `.framer-RbT7Q.framer-1fey9yv { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }`,
          `.framer-RbT7Q .framer-1jjyfqa-container { flex: none; height: auto; position: relative; width: auto; }`,
          `.framer-RbT7Q .framer-mvg5zv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 4px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
          `.framer-RbT7Q .framer-neyr8t { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
          `.framer-RbT7Q .framer-mdrhk3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: visible; padding: 1px 0px 0px 0px; position: relative; width: min-content; }`,
          `.framer-RbT7Q .framer-rpmrwn { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
          ...oe,
        ],
        `framer-RbT7Q`
      )),
      (Z.displayName = `catalog-sort.button 2`),
      (Z.defaultProps = { height: 16, width: 107.5 }),
      b(
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
          ...U,
          ...ie(se),
        ],
        { supportsExplicitInterCodegen: !0 }
      ));
  });
export { P as a, de as c, V as i, ge as n, F as o, R as r, ue as s, Z as t };
//# sourceMappingURL=aaovIUHpV.CditPMM4.mjs.map
