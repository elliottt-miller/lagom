import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  B as t,
  D as n,
  H as r,
  P as i,
  R as a,
  S as o,
  c as s,
  h as c,
  j as l,
  m as u,
  s as d,
  u as ee,
  x as f,
  y as p,
} from "./react.BtSUcPAM.mjs";
import { P as m } from "./motion.B_UOAosx.mjs";
import { Ft as h, I as te, Mt as g, N as _, Q as v, T as ne, o as y } from "./framer.DuFjdl15.mjs";
import { K as re, U as b } from "./uMfPNtWsK.Ef5pNhkD.mjs";
var x,
  S,
  C,
  ie = e(() => {
    ((x = (e, t = !1) => {
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
      (S = (e) => {
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
              let e = x(n),
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
      (C = (e, t) => {
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
function w(e) {
  if (typeof e == `string`) {
    let t = e.match(/\d{12,}/);
    return t ? t[0] : null;
  }
  if (!e || typeof e != `object`) return null;
  for (let t in e)
    if (Array.isArray(e[t]) || typeof e[t] == `object`) {
      let n = w(e[t]);
      if (n) return n;
    } else if (typeof e[t] == `string`) {
      let n = e[t].match(/\d{12,}/);
      if (n) return n[0];
    }
  return null;
}
function T(e) {
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
function E(e) {
  let [t, n] = p(!0),
    [s, u] = p(null),
    [m, h] = p([]),
    [te, g] = p([]),
    [_, v] = p([]),
    [y, b] = p(!1),
    [x, C] = p(!1);
  Object.keys(e);
  let { Collection: ie, pageType: E, Metafields: D } = e,
    k = D?.include || !1,
    A = e.Products?.show === `in_stock`,
    j = A && s === null && m.length === 0,
    M = o(null),
    N = o(null),
    P = o(null),
    F = r === void 0 ? new URLSearchParams() : new URLSearchParams(r.location.search),
    [I, L] = p(() => {
      if (r !== void 0) {
        let e = F.get(`page`);
        return e ? parseInt(e) : 1;
      }
      return 1;
    }),
    [R, z] = p(!1);
  o(null);
  let B = o(null),
    V = i(() => e.Pagination?.items || 8, [e.Pagination?.items]),
    [oe, se] = p([]),
    [ce, le] = p([]),
    [H, U] = p(0),
    [W, ue] = p(() => {
      if (r !== void 0) {
        let t = new URLSearchParams(r.location.search).get(`search`);
        if (t) return { term: t, fields: T(e.Search?.Scope), active: !0 };
      }
      return { term: ``, fields: T(e.Search?.Scope), active: !1 };
    });
  (f(() => {
    ue((t) => ({ ...t, fields: T(e.Search?.Scope) }));
  }, [e.Search?.Scope]),
    f(() => {
      e.Search.initialSearchState === `none` &&
        e.Search.enableSearch &&
        !W.term &&
        (u([]),
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
    }, [e.Search.initialSearchState, e.Search.enableSearch, W.term]));
  let de = l(
    (t) => {
      if (!e.Pagination?.enable || !Array.isArray(t)) return t;
      let n, r, i;
      switch (e.Pagination.type) {
        case `load_more`:
          ((n = 0), (r = I * V), (i = t.slice(n, r)));
          let a = r < t.length;
          if ((z(a), !a)) {
            let e = new CustomEvent(`hide-loadmore-button`, { detail: { hasMoreItems: a } });
            document.dispatchEvent(e);
          }
          break;
        case `next_prev`:
          ((n = (I - 1) * V), (r = n + V), (i = t.slice(n, r)));
          let o = r < t.length;
          z(o);
          let s = new CustomEvent(`update_next_prev_buttons`, {
            detail: { hasMoreItems: o, type: e.Pagination?.type, currentPage: I },
          });
          (document.dispatchEvent(s),
            console.log(`[CMS Pagination] Next/Previous:`, {
              itemsPerPage: V,
              currentPage: I,
              startIndex: n,
              endIndex: r,
              paginatedProducts: i,
              hasMoreNextPrev: o,
            }));
          break;
        case `infinite`:
          ((n = 0), (r = I * V), (i = t.slice(n, r)));
          let c = r < t.length;
          z(c);
          break;
        default:
          return t;
      }
      return i;
    },
    [I, V, e.Pagination?.enable, e.Pagination?.type]
  );
  (f(() => {
    if (r === void 0 || !e.Pagination?.enable) return;
    let t = new URL(r.location.href),
      n = new URLSearchParams(t.search);
    I > 1 ? n.set(`page`, I.toString()) : n.delete(`page`);
    let i = `${t.pathname}?${n.toString()}`;
    i !== r.location.pathname + r.location.search && r.history.pushState({ page: I }, ``, i);
  }, [I, e.Pagination?.enable]),
    f(() => {
      if (!e.Pagination?.enable || e.Pagination?.type !== `infinite` || r === void 0) return;
      let n = new IntersectionObserver(
        (e) => {
          e[0].isIntersecting && R && !t && L((e) => e + 1);
        },
        { root: null, rootMargin: `100px`, threshold: 0.1 }
      );
      return (
        B.current && n.observe(B.current),
        () => {
          n && n.disconnect();
        }
      );
    }, [R, e.Pagination?.enable, e.Pagination?.type, t, I]));
  let fe = (t) => {
      if (!t) {
        console.warn(`[CMS] Received null/undefined children`);
        return;
      }
      se(t);
      let n = de(t);
      (e.Pagination?.enable &&
        e.Pagination?.type === `infinite` &&
        R &&
        n.length > 0 &&
        n.push(
          d(
            `div`,
            {
              ref: B,
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
      (P.current && r - P.current < 100
        ? (C(!0),
          N.current && clearTimeout(N.current),
          (N.current = setTimeout(() => {
            (C(!1), le(n), Y(n));
          }, 150)))
        : (le(n), Y(n)),
        (P.current = r));
    },
    [G, pe] = p(() => {
      if (r !== void 0) {
        let e = new URLSearchParams(r.location.search).get(`sort`);
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
    [K, q] = p(() => {
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
        r !== void 0)
      ) {
        let n = new URL(r.location.href);
        (n.toString(), n.search);
        try {
          let r = S(n.searchParams);
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
    me = l(
      (t) => {
        (t.type,
          r !== void 0 && r.shopXtools,
          r !== void 0 && r.shopXtools?.products?.length,
          r !== void 0 && r.shopXtools?.products
            ? (h(r.shopXtools.products),
              g([]),
              e.Products?.show === `in_stock` && u(null),
              W.active && W.term && u(null))
            : Array.isArray(t.detail.products) &&
              (h(t.detail.products),
              g([]),
              e.Products?.show === `in_stock` && u(null),
              W.active && W.term && u(null)));
      },
      [W, e.Products?.show]
    ),
    he = l((e) => {
      (pe(e.detail), u(null));
    }, []),
    J = l(
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
          q(t);
        } else
          q({
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
        u(null);
      },
      [e.display, e.value]
    ),
    ge = l(
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
            (q((e) => {
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
            u(null)));
      },
      [e.display, e.value]
    ),
    _e = l(
      (t) => {
        e.Search?.enableSearch &&
          (ue({ term: t.detail.term, fields: T(e.Search?.Scope), active: !!t.detail.term }),
          u(null));
      },
      [e.Search?.enableSearch, e.Search?.Scope]
    );
  (f(() => {
    if (r === void 0) return;
    let e = () => {
      let e = JSON.parse(localStorage.getItem(`favorites`) || `[]`);
      v(e);
    };
    e();
    let t = (t) => {
      let { favorites: n, action: r, productId: i } = t.detail || {};
      (E === `favorites` && r === `remove` && b(!0),
        r === `remove` && i
          ? v((e) => {
              let t = e.filter((e) => e !== i);
              if (E === `favorites`)
                if (s && s.length > 0) {
                  let e = s.filter((e) => (e.key || ``) !== i);
                  e.length > 0 ? Y(e) : u(null);
                } else u(null);
              return t;
            })
          : r === `add` && i
            ? v((e) => {
                let t = [...e, i];
                return (E === `favorites` && u(null), t);
              })
            : (e(), E === `favorites` && u(null)));
    };
    return (
      document.addEventListener(`favorites-updated`, t),
      () => {
        document.removeEventListener(`favorites-updated`, t);
      }
    );
  }, [E, s]),
    f(() => {
      O.instances.add(`FC_CatalogDisplay`);
      let e = (e) => {
          let t = e;
          (t.detail?.products, t.detail?.products?.length, me(t));
        },
        t = (e) => {
          let t = e;
          (t.detail, he(t));
        },
        n = (e) => {
          let t = e;
          (t.detail, J(t));
        },
        r = (e) => {
          let t = e;
          (t.detail, ge(t));
        },
        i = (e) => {
          let t = e;
          (t.detail, _e(t));
        };
      return (
        document.addEventListener(`filter-reset`, n),
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`product-sort-change`, t),
        document.addEventListener(`product-filter-change`, r),
        document.addEventListener(`product-search-change`, i),
        () => {
          (O.instances.delete(`FC_CatalogDisplay`),
            document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product-sort-change`, t),
            document.removeEventListener(`product-filter-change`, r),
            document.removeEventListener(`product-search-change`, i),
            document.removeEventListener(`filter-reset`, n));
        }
      );
    }, [me, he, ge, _e, J]),
    f(() => {
      if (m.length > 0 && K.product_type?.active) {
        let e = K.product_type.values;
        m.filter((t) => {
          let n = t.node?.productType;
          return n ? e.some((e) => n.toLowerCase().includes(e.toLowerCase())) : !1;
        });
      }
    }, [m]),
    l(
      (e) => {
        (`${e}`, m.length, r !== void 0 && r.shopXtools);
        let t = `gid://shopify/Product/${e}`,
          n;
        return (
          r !== void 0 &&
            r.shopXtools?.products &&
            ((n = r.shopXtools.products.find(({ node: e }) => e.id === t)?.node),
            n && (n.id, n.title)),
          (n ||= m.find(({ node: e }) => e.id === t)?.node),
          n
            ? (n.id,
              n.title,
              n.productType,
              n.tags,
              n.collections,
              r.shopXtools,
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
  let Y = (e) => {
    (e && e.length,
      M.current && clearTimeout(M.current),
      b(!0),
      u(e),
      setTimeout(() => {
        (b(!1), C(!1));
      }, 200));
  };
  f(
    () => () => {
      (M.current && clearTimeout(M.current), N.current && clearTimeout(N.current));
    },
    []
  );
  let ve = l(
    (t) => {
      let n = {},
        r = {
          search: W.active ? { term: W.term, fields: W.fields } : null,
          collection: K.collection?.active ? { values: K.collection.values } : null,
          product_type: K.product_type?.active ? { values: K.product_type.values } : null,
          product_tag: K.product_tag?.active ? { values: K.product_tag.values } : null,
          price: K.price?.active ? { values: K.price.values } : null,
          on_sale: K.on_sale?.active || null,
          in_stock: K.in_stock?.active || null,
          bundle: K.bundle?.active || null,
          subscription: K.subscription?.active || null,
          variant: K.variant?.active ? { values: K.variant.values } : null,
          discount_amount: K.discount_amount?.active ? { values: K.discount_amount.values } : null,
          discount_percent: K.discount_percent?.active
            ? { values: K.discount_percent.values }
            : null,
        };
      if (
        (Object.values(r).some((e) => e !== null), W.active && W.term && e.Search?.enableSearch)
      ) {
        let e = W.term.toLowerCase(),
          r = !1;
        for (let n of W.fields) {
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
                  (k &&
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
        if (((n.search = { active: !0, term: W.term, matches: r }), !r))
          return { matches: !1, filterResults: n };
      }
      if (K.collection?.active && K.collection.values?.length > 0) {
        let r = K.collection.values,
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
      if (K.product_type?.active && K.product_type.values?.length > 0) {
        let r = K.product_type.values,
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
      if (K.product_tag?.active && K.product_tag.values?.length > 0) {
        let r = K.product_tag.values,
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
      if (K.price?.active && K.price.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = !1;
        if (
          ((r = K.price.values.some((t) =>
            t.min === null ? e <= t.max : t.max === null ? e >= t.min : e >= t.min && e <= t.max
          )),
          (n.price = { active: !0, values: K.price.values, productPrice: e, matches: r }),
          !r)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_amount?.active && K.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = K.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: K.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_percent?.active && K.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = K.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: K.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_amount?.active && K.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = K.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: K.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_percent?.active && K.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = K.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: K.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_amount?.active && K.discount_amount.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? r - e : 0,
          a = !1;
        if (
          ((a = K.discount_amount.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_amount = {
            active: !0,
            values: K.discount_amount.values,
            discountAmount: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.discount_percent?.active && K.discount_percent.values?.length > 0) {
        let e = parseFloat(t.priceRange?.minVariantPrice?.amount || `0`),
          r = parseFloat(t.compareAtPriceRange?.minVariantPrice?.amount || `0`),
          i = r > e ? ((r - e) / r) * 100 : 0,
          a = !1;
        if (
          ((a = K.discount_percent.values.some((e) =>
            e.min === null ? i <= e.max : e.max === null ? i >= e.min : i >= e.min && i <= e.max
          )),
          (n.discount_percent = {
            active: !0,
            values: K.discount_percent.values,
            discountPercent: i,
            matches: a,
          }),
          !a)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.on_sale?.active) {
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
      if (K.in_stock?.active) {
        let e = !1;
        if (
          (t.variants?.edges?.some((e) => e.node.availableForSale) && (e = !0),
          (n.in_stock = { active: !0, matches: e }),
          !e)
        )
          return { matches: !1, filterResults: n };
      }
      if (K.subscription?.active) {
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
      if (K.variant?.active && K.variant.values?.length > 0) {
        let e = K.variant.values,
          r = !1;
        if (
          (t.variants?.edges &&
            ((r = t.variants.edges.some((t) => {
              let n = t.node;
              if (!n.selectedOptions) return !1;
              let r = K.variant?.variantStockFilter === `in_stock`,
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
            k &&
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
    [K, W]
  );
  (f(() => {
    if ((s && W.active) || !W.active) {
      let t = e.Search?.enableSearch && e.Search?.initialSearchState === `custom` && !W.term,
        n = 0;
      n = t ? 0 : H > 0 ? H : Array.isArray(m) && m.length > 0 ? m.length : 0;
      let r = new CustomEvent(`product-search-results`, {
        detail: { count: n, term: W.term || `` },
      });
      document.dispatchEvent(r);
    }
  }, [m, s, W.active, H]),
    f(() => {
      if (r === void 0) return;
      r.shopXtools;
      let e = r.shopXtools?.products;
      e && h(e);
    }, []));
  let X = (e.displayMode === `Desktop` ? e.Collection : e.phoneInstance)?.[0],
    Z = e.displayMode === `Desktop` ? e.EmptyState?.[0] : e.EmptyStatePhone?.[0];
  if (!X)
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
  let ye = a(X, { style: { ...(X.props?.style || {}), width: `100%`, height: `100%` } }),
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
  let $ = a(ye, { style: { ...ye.props.style, ...Q } });
  if (ne.current() === ne.canvas) return $;
  f(() => {
    if (r === void 0) return;
    let e = (e) => {
      let t = new URL(r.location.href),
        i = new URLSearchParams(t.search).get(`page`),
        a = i ? parseInt(i, 10) : 1;
      (a !== I && (L(a), u(null)),
        n(!0),
        e.type === `popstate` && (e.stopImmediatePropagation(), r.location.reload()),
        setTimeout(() => {
          n(!1);
        }, 150));
    };
    return (
      e({}),
      r.addEventListener(`popstate`, e),
      document.addEventListener(`product-pagination-change`, e),
      () => {
        (r.removeEventListener(`popstate`, e),
          document.removeEventListener(`product-pagination-change`, e));
      }
    );
  }, [I]);
  try {
    let n = (e, t) => {
        let n = !1,
          r = (e) => {
            if (!c(e)) return e;
            let i = e.props?.children;
            if (typeof i == `function` && !n)
              return ((n = !0), a(e, { ...e.props, children: t(i) }));
            if (Array.isArray(i) && i.length) {
              let t = i.map((e) => (n ? e : r(e)));
              return n ? a(e, { ...e.props, children: t }) : e;
            }
            if (c(i) && !n) {
              let t = r(i);
              if (t !== i) return a(e, { ...e.props, children: t });
            }
            return e;
          };
        return { node: r(e), replaced: n };
      },
      r = (t) => (n) => {
        let r = (e) => (s === null ? (A ? [] : e) : s),
          i = t(n);
        if (!i?.props?.children)
          return c(i) ? a(i, { style: { ...(i.props?.style || {}), ...Q } }) : i;
        if (
          e.Search?.enableSearch &&
          e.Search?.initialSearchState === `custom` &&
          !W.term &&
          e.CustomInitialState?.[0]
        ) {
          let t = a(e.CustomInitialState[0], {
              style: {
                ...(e.CustomInitialState[0].props?.style || {}),
                width: `100%`,
                height: `100%`,
                maxWidth: `100%`,
                transform: `none`,
              },
            }),
            n = () =>
              d(`div`, {
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
            props: { ...i.props, style: { ...(i.props?.style || {}), ...Q }, children: d(n, {}) },
          };
        }
        if (!s && m.length > 0) {
          let t = m.filter(({ node: e }) => (e ? ve(e).matches : !1)),
            o = e.Products?.show === `in_stock` ? t.filter(({ node: e }) => ae(e)) : t,
            s =
              E === `favorites`
                ? o.filter(({ node: e }) => {
                    let t = w(e);
                    return t && _.includes(t);
                  })
                : o;
          if ((U(s.length), s.length === 0)) {
            if ((U(0), typeof document < `u`)) {
              let e = new CustomEvent(`product-search-results`, {
                detail: { count: 0, term: W.term || `` },
              });
              document.dispatchEvent(e);
            }
            if (Z) {
              let t = a(Z, {
                  style: {
                    ...(Z.props?.style || {}),
                    width: `100%`,
                    height: `100%`,
                    maxWidth: `100%`,
                    transform: `none`,
                  },
                }),
                n = () =>
                  d(`div`, {
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
                  children: d(n, {}),
                },
              };
            }
            return null;
          }
          let c = [];
          ((c =
            e.DuplicateVariants?.enable && e.DuplicateVariants?.variantTitles?.length > 0
              ? s
                  .map(({ node: e }, t) => {
                    let r = i.props.children.find((t) => {
                      let r = n.find((e) => e.id === t.key),
                        i = `gid://shopify/Product/${r ? w(r) : null}`,
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
                          child: a(r, { key: e.id, ...e._variantData }),
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
                      r = t ? w(t) : null,
                      a = `gid://shopify/Product/${r}`,
                      o = s.find(({ node: e }) => e.id === a);
                    if (!o) return null;
                    let c = {
                      id: o.node.id,
                      title: o.node.title || ``,
                      price: o.node.priceRange?.minVariantPrice?.amount
                        ? parseFloat(o.node.priceRange.minVariantPrice.amount)
                        : 0,
                      productType: o.node.productType || ``,
                      tags: o.node.tags || [],
                      compareAtPrice: o.node.compareAtPriceRange?.minVariantPrice?.amount
                        ? parseFloat(o.node.compareAtPriceRange.minVariantPrice.amount)
                        : 0,
                      collections: Array.isArray(o.node.collections)
                        ? o.node.collections.map((e) => e.node.title)
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
            s.length,
            c.length,
            c[0] && (c[0].title, c[0].details.productType),
            l(
              re((e) => {
                pe(e);
              }, 150),
              []
            ),
            l(
              re((e) => {
                q(e);
              }, 150),
              []
            ));
          let u = (e) => ({
              ...e,
              opacity: y || x ? 0 : 1,
              transition: `opacity ${x ? `0.5s` : `0.3s`} ease-in-out`,
              pointerEvents: y || x ? `none` : `auto`,
            }),
            ee = [...c]
              .sort((e, t) => {
                if (G.type === `relevancy`) return e.originalIndex - t.originalIndex;
                if (G.type === `price`)
                  return (
                    (G.sortDirection === `highToLow` ? t.price - e.price : e.price - t.price) ||
                    e.originalIndex - t.originalIndex
                  );
                if (G.type === `name`)
                  return (
                    (G.sortDirection === `aToZ`
                      ? e.title.localeCompare(t.title)
                      : t.title.localeCompare(e.title)) || e.originalIndex - t.originalIndex
                  );
                if (G.type === `created`) {
                  let n = parseInt(e.productId),
                    r = parseInt(t.productId);
                  return !isNaN(n) && !isNaN(r) ? r - n : e.originalIndex - t.originalIndex;
                } else if (G.type === `best-selling`) return e.originalIndex - t.originalIndex;
                else return e.originalIndex - t.originalIndex;
              })
              .map((e) =>
                a(e.child, { style: u(e.child.props.style), key: e.productId || e.originalIndex })
              );
          return (
            fe(ee),
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
        if (!c(e)) return e;
        let t = e.props?.children;
        if (e.props?.query && typeof t != `function`)
          return a(e, { ...e.props, children: () => t });
        if (Array.isArray(t)) {
          let n = t.map((e) => i(e));
          return a(e, { ...e.props, children: n });
        }
        if (c(t)) {
          let n = i(t);
          if (n !== t) return a(e, { ...e.props, children: n });
        }
        return e;
      },
      o = n(i($.props.children), r);
    return a($, {
      ...$.props,
      style: {
        ...$.props.style,
        opacity: t || j ? 0 : 1,
        transition: `opacity 0.2s ease-in-out`,
        visibility: t || j ? `hidden` : `visible`,
      },
      children: o.node,
    });
  } catch (e) {
    return (console.error(`Error in ProductSort:`, e), e.message, $);
  }
}
var D,
  ae,
  O,
  k = e(() => {
    (t(),
      s(),
      n(),
      v(),
      b(),
      ie(),
      (D = (e) => (e ? (e.availableForSale ? !0 : (e.quantityAvailable || 0) > 0) : !1)),
      (ae = (e) =>
        e?.variants?.edges?.length ? e.variants.edges.some(({ node: e }) => D(e)) : !1),
      (O = {
        instances: new Set(),
        eventListeners: new Map(),
        cleanup: () => {
          (O.instances.clear(),
            O.eventListeners.forEach((e, t) => {
              r.removeEventListener(t, e);
            }),
            O.eventListeners.clear());
        },
        lastUrl: r === void 0 ? `` : r.location.href,
        isBackToFilter: !1,
      }),
      r !== void 0 && r.addEventListener(`beforeunload`, O.cleanup),
      _(E, {
        Collection: { type: y.ComponentInstance, title: `CMS (L)` },
        phoneInstance: {
          type: y.ComponentInstance,
          title: `CMS (S)`,
          description: `Connect to CMS collection off-page with no filters. Inside, use a single component with Product ID set.  

 (S optional)`,
        },
        EmptyState: { type: y.ComponentInstance, title: `Empty (L)` },
        EmptyStatePhone: {
          type: y.ComponentInstance,
          title: `Empty (S)`,
          description: `Connect to empty state design off-page. 

 (S optional)`,
        },
        CustomInitialState: {
          type: y.ComponentInstance,
          title: `Initial State`,
          description: `Initial state for Search. Connect to design off-page.`,
          hidden: (e) => !e.Search?.enableSearch || e.Search?.initialSearchState !== `custom`,
        },
        displayMode: {
          type: y.Enum,
          title: `Responsive`,
          defaultValue: `Desktop`,
          options: [`Desktop`, `Phone`],
          optionTitles: [`L`, `S`],
          displaySegmentedControl: !0,
          description: `Display the Large (L) or Small (S) designs connected above.`,
        },
        pageType: {
          type: y.Enum,
          title: `Display`,
          options: [`default`, `favorites`],
          optionTitles: [`All`, `Favorites`],
          defaultValue: `default`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
        },
        display: {
          type: y.Enum,
          title: `Filter Type`,
          options: [`All`, `Collection`, `Product Tag`, `Product Type`],
          defaultValue: `All`,
        },
        value: { type: y.String, title: `Filter Value`, placeholder: `New Arrivals` },
        defaultSort: {
          type: y.Enum,
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
          type: y.Object,
          title: `Search`,
          controls: {
            enableSearch: {
              type: y.Boolean,
              title: `Allow`,
              defaultValue: !0,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            initialSearchState: {
              type: y.Enum,
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
              type: y.Object,
              title: `Scope`,
              hidden: (e) => !e.enableSearch,
              controls: {
                title: {
                  type: y.Boolean,
                  title: `Title`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                productType: {
                  type: y.Boolean,
                  title: `Product Type`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                productTag: {
                  type: y.Boolean,
                  title: `Tags`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                collection: {
                  type: y.Boolean,
                  title: `Collections`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                vendor: {
                  type: y.Boolean,
                  title: `Vendor`,
                  defaultValue: !0,
                  enabledTitle: `Yes`,
                  disabledTitle: `No`,
                },
                variants: {
                  type: y.Boolean,
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
          type: y.Object,
          title: `Metafields`,
          controls: {
            include: {
              type: y.Boolean,
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
          type: y.Object,
          title: `Products`,
          controls: {
            show: {
              type: y.Enum,
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
          type: y.Object,
          title: `Pagination`,
          controls: {
            enable: {
              type: y.Boolean,
              title: `Enable`,
              defaultValue: !1,
              enabledTitle: `Yes`,
              disabledTitle: `No`,
            },
            type: {
              type: y.Enum,
              title: `Type`,
              options: [`load_more`, `next_prev`],
              optionTitles: [`Load More`, `Next/Prev`],
              defaultValue: `load_more`,
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
              hidden: ({ enable: e }) => !e,
            },
            items: {
              type: y.Number,
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
          type: y.Object,
          optional: !0,
          controls: {
            type: {
              type: y.Enum,
              defaultValue: `grid`,
              options: [`stack`, `grid`],
              optionTitles: [`Stack`, `Grid`],
              displaySegmentedControl: !0,
            },
            direction: {
              type: y.Enum,
              defaultValue: `vertical`,
              options: [`horizontal`, `vertical`],
              optionTitles: [`Horizontal`, `Vertical`],
              optionIcons: [`direction-horizontal`, `direction-vertical`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `stack`,
            },
            wrap: {
              type: y.Boolean,
              defaultValue: !1,
              title: `Wrap`,
              hidden: (e) => e.type !== `stack`,
            },
            stackMinWidth: {
              type: y.Number,
              defaultValue: 200,
              min: 1,
              max: 1e3,
              step: 1,
              title: `Min Width`,
              hidden: (e) => e.type !== `stack` || !e.wrap,
            },
            distribute: {
              type: y.Enum,
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
              type: y.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Start`, `Center`, `End`],
              optionIcons: [`align-left`, `align-center`, `align-right`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `stack` || e.direction !== `vertical`,
            },
            alignH: {
              type: y.Enum,
              defaultValue: `start`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Top`, `Center`, `Bottom`],
              optionIcons: [`align-top`, `align-middle`, `align-bottom`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type !== `stack` || e.direction !== `horizontal`,
            },
            columns: {
              type: y.Enum,
              defaultValue: `fixed`,
              options: [`auto`, `fixed`],
              optionTitles: [`Auto`, `Fixed`],
              displaySegmentedControl: !0,
              hidden: (e) => e.type !== `grid`,
            },
            columnCount: {
              type: y.Number,
              defaultValue: 3,
              min: 1,
              step: 1,
              displayStepper: !0,
              title: `Columns`,
              hidden: (e) => e.type !== `grid` || e.columns === `auto`,
            },
            gridWidth: {
              type: y.Number,
              defaultValue: 300,
              min: 1,
              max: 1e3,
              step: 1,
              title: `Min Width`,
              hidden: (e) => e.type !== `grid` || e.columns === `fixed`,
            },
            maxColumns: {
              type: y.Number,
              defaultValue: 4,
              min: 1,
              step: 1,
              title: `Max Col`,
              displayStepper: !0,
              hidden: (e) => e.type !== `grid` || e.columns === `fixed`,
            },
            gridAlign: {
              type: y.Enum,
              defaultValue: `center`,
              options: [`start`, `center`, `end`],
              optionTitles: [`Left`, `Center`, `Right`],
              displaySegmentedControl: !0,
              title: `Align`,
              hidden: (e) => e.type !== `grid`,
            },
            gap: { type: y.Number, defaultValue: 24, min: 0, step: 1, title: `Gap` },
            gapY: {
              type: y.Number,
              defaultValue: 24,
              min: 0,
              step: 1,
              title: `Gap Y`,
              hidden: (e) => e.type !== `grid`,
            },
            padding: {
              type: y.FusedNumber,
              title: `Padding`,
              defaultValue: 0,
              min: 0,
              toggleKey: `paddingPerSide`,
              toggleTitles: [`All`, `Sides`],
              valueKeys: [`paddingTop`, `paddingRight`, `paddingBottom`, `paddingLeft`],
              valueLabels: [`T`, `R`, `B`, `L`],
            },
            radius: {
              type: y.FusedNumber,
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
            background: { type: y.Color, title: `Background`, defaultValue: `#FFFFFF00` },
          },
        },
      }));
  }),
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L = e(() => {
    (s(),
      v(),
      n(),
      (A = `var(--framer-icon-mask)`),
      (j = u(function (e, t) {
        return d(`svg`, { ...e, ref: t, children: e.children });
      })),
      (M = m.create(j)),
      (N = u((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? d(M, { ...a, layoutId: r, ref: t, children: i })
          : d(`svg`, { ...a, ref: t, children: i });
      })),
      (P = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g d="M 4.491 17.1 C 4.491 16.603 4.893 16.2 5.389 16.2 C 5.885 16.2 6.287 16.603 6.287 17.1 C 6.287 17.597 5.885 18 5.389 18 C 4.893 18 4.491 17.597 4.491 17.1 Z M 14.371 17.1 C 14.371 16.603 14.773 16.2 15.269 16.2 C 15.766 16.2 16.168 16.603 16.168 17.1 C 16.168 17.597 15.766 18 15.269 18 C 14.773 18 14.371 17.597 14.371 17.1 Z M 0 0 L 1.796 0 L 4.186 11.178 C 4.366 12.022 5.12 12.619 5.982 12.6 L 14.766 12.6 C 15.609 12.599 16.337 12.011 16.518 11.187 L 18 4.5 L 2.757 4.5" fill="transparent" height="18.00000081546783px" id="dFXYIk0Lw" transform="translate(1 1.02)" width="18px"><path d="M 0 0.9 C 0 0.403 0.402 0 0.898 0 C 1.394 0 1.796 0.403 1.796 0.9 C 1.796 1.397 1.394 1.8 0.898 1.8 C 0.402 1.8 0 1.397 0 0.9 Z" fill="transparent" height="1.8000000525283752px" id="nQASVbs9J" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(4.491 16.2)" width="1.7964071856287234px"/><path d="M 0 0.9 C 0 0.403 0.402 0 0.898 0 C 1.394 0 1.796 0.403 1.796 0.9 C 1.796 1.397 1.394 1.8 0.898 1.8 C 0.402 1.8 0 1.397 0 0.9 Z" fill="transparent" height="1.8000000525283752px" id="iN0kx9dUu" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(14.371 16.2)" width="1.7964071856287092px"/><path d="M 0 0 L 1.796 0 L 4.186 11.178 C 4.366 12.022 5.12 12.619 5.982 12.6 L 14.766 12.6 C 15.609 12.599 16.337 12.011 16.518 11.187 L 18 4.5 L 2.757 4.5" fill="transparent" height="12.600451209965454px" id="q0_4ncvHH" stroke-dasharray="0" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" width="18px"/></g></svg>`),
      (F = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (I = h(
        u(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = F(e),
            l = g(`4103476861`, P);
          return d(N, {
            ...c,
            className: te(`framer-mGKjh`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: d(`use`, { href: l }),
          });
        }),
        [
          `.framer-mGKjh { -webkit-mask: ${A}; aspect-ratio: 1; display: block; mask: ${A}; width: 20px; }`,
        ],
        `framer-mGKjh`
      )),
      (I.displayName = `Cart`),
      _(I, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: y.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: y.Number },
      }));
  });
export { x as a, C as c, k as i, L as n, ie as o, E as r, S as s, I as t };
//# sourceMappingURL=uXshcXf0K.STxmH728.mjs.map
