import { t as e } from "./rolldown-runtime.CdC8uIGZ.mjs";
import { C as t, I as n, M as r, P as i, R as a, b as o } from "./react.CAGFp8w4.mjs";
import { K as s, x as c } from "./framer.yhOKXYuv.mjs";
function l() {
  if (f) return m;
  f = 1;
  let e = (e) => {
    let t,
      n = new Set(),
      r = (e, r) => {
        let i = typeof e == `function` ? e(t) : e;
        if (!Object.is(i, t)) {
          let e = t;
          ((t = (r ?? (typeof i != `object` || !i)) ? i : Object.assign({}, t, i)),
            n.forEach((n) => n(t, e)));
        }
      },
      i = () => t,
      a = {
        setState: r,
        getState: i,
        getInitialState: () => o,
        subscribe: (e) => (n.add(e), () => n.delete(e)),
      },
      o = (t = e(r, i, a));
    return a;
  };
  return ((m.createStore = (t) => (t ? e(t) : e)), m);
}
function u() {
  if (h) return _;
  h = 1;
  var e = o,
    t = l();
  let n = (e) => e;
  function r(t, r = n) {
    let i = e.useSyncExternalStore(
      t.subscribe,
      e.useCallback(() => r(t.getState()), [t, r]),
      e.useCallback(() => r(t.getInitialState()), [t, r])
    );
    return (e.useDebugValue(i), i);
  }
  let i = (e) => {
    let n = t.createStore(e),
      i = (e) => r(n, e);
    return (Object.assign(i, n), i);
  };
  return ((_.create = (e) => (e ? i(e) : i)), (_.useStore = r), _);
}
function d() {
  return (
    g ||
      ((g = 1),
      (function (e) {
        var t = l(),
          n = u();
        (Object.keys(t).forEach(function (n) {
          n === `default` ||
            Object.prototype.hasOwnProperty.call(e, n) ||
            Object.defineProperty(e, n, {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            });
        }),
          Object.keys(n).forEach(function (t) {
            t === `default` ||
              Object.prototype.hasOwnProperty.call(e, t) ||
              Object.defineProperty(e, t, {
                enumerable: !0,
                get: function () {
                  return n[t];
                },
              });
          }));
      })(p)),
    p
  );
}
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    (t(), (p = {}), (m = {}), (_ = {}), (v = d().create));
  });
function b() {
  return c.hasRestrictions();
}
function x() {
  return a !== void 0;
}
function S() {
  let [e, t] = i(!1);
  return (
    r(() => {
      a !== void 0 && t(a.location.href.includes(`framercanvas.com`));
    }, []),
    e
  );
}
var C = e(() => {
  (n(), s(), t());
});
function w() {
  if (!x()) return null;
  if (D) return D;
  let e = document.getElementById(`frameship-shopify-config`);
  if (e?.textContent)
    try {
      if (((D = JSON.parse(e.textContent)), D?.shop && D?.storefrontToken)) return D;
    } catch (e) {
      return (console.error(`Error parsing Shopify config:`, e), null);
    }
  return null;
}
function T() {
  return w()?.licenseId || null;
}
function E() {
  return w()?.ff_include_selling_plans === !0;
}
var D,
  O = e(() => {
    (C(), (D = null));
  });
async function k({ query: e, variables: t }) {
  try {
    let n = w();
    if (!n || !n.shop || !n.storefrontToken)
      return {
        data: null,
        errors: [
          {
            message: `Shopify configuration is not available. Make sure the frameship-shopify-config script is present on the page.`,
          },
        ],
      };
    let r = `https://${n.shop}/api/${n.apiVersion}/graphql.json`,
      i = { query: e, ...(t && { variables: t }) },
      a = await fetch(r, {
        method: `POST`,
        headers: {
          "Content-Type": `application/json`,
          "X-Shopify-Storefront-Access-Token": n.storefrontToken,
        },
        body: JSON.stringify(i),
      });
    if (!a.ok)
      return {
        data: null,
        errors: [{ message: `Shopify API request failed: ${a.status} ${a.statusText}` }],
      };
    let o = await a.json();
    return o.errors && o.errors.length > 0
      ? {
          data: null,
          errors: [{ message: `GraphQL errors: ${o.errors.map((e) => e.message).join(`, `)}` }],
        }
      : { data: o.data, errors: [] };
  } catch (e) {
    return { data: null, errors: [{ message: `Unexpected error occurred: ${String(e)}` }] };
  }
}
var A = e(() => {
  O();
});
export { O as a, b as c, y as d, T as i, S as l, k as n, C as o, E as r, x as s, A as t, v as u };
//# sourceMappingURL=Shopify_client.C7pIHrtI.mjs.map
