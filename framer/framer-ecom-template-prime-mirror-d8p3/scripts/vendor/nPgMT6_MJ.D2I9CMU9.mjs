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
  c as d,
  j as f,
  m as p,
  s as m,
  u as ee,
  x as h,
  y as g,
} from "./react.BtSUcPAM.mjs";
import { P as te, i as ne, o as _, t as re } from "./motion.B_UOAosx.mjs";
import {
  Ft as v,
  I as y,
  M as ie,
  Mt as b,
  N as x,
  Pt as S,
  Q as C,
  T as w,
  Tt as ae,
  W as T,
  ht as oe,
  o as E,
  pt as se,
} from "./framer.DuFjdl15.mjs";
import { n as D, t as O } from "./nijsUfsP7.ClHFTjWA.mjs";
import {
  E as ce,
  F as le,
  H as ue,
  J as k,
  L as de,
  S as fe,
  T as pe,
  U as A,
  V as me,
  _ as he,
  b as ge,
  d as j,
  f as M,
  h as _e,
  l as ve,
  m as ye,
  p as be,
  u as N,
  v as xe,
  x as Se,
  y as Ce,
} from "./uMfPNtWsK.Ef5pNhkD.mjs";
function P(e, ...t) {
  let n = {};
  return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
  I,
  L,
  R,
  z,
  B,
  V,
  we,
  H,
  U,
  Te = e(() => {
    (d(),
      C(),
      re(),
      r(),
      D(),
      (F = T(O)),
      (I = { E4dPAcaVs: { hover: !0, pressed: !0 } }),
      (L = `framer-KkGyu`),
      (R = { E4dPAcaVs: `framer-v-idih3o` }),
      (z = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: `spring` }),
      (B = ({ value: e, children: t }) => {
        let n = s(_),
          r = e ?? n.transition,
          i = c(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
        return m(_.Provider, { value: i, children: t });
      }),
      (V = te.create(o)),
      (we = ({ height: e, id: t, tap: n, width: r, ...i }) => ({
        ...i,
        sJ3RhKUYy: n ?? i.sJ3RhKUYy,
      })),
      (H = (e, t) => (e.layoutDependency ? t.join(`-`) + e.layoutDependency : t.join(`-`))),
      (U = v(
        p(function (e, t) {
          let n = u(null),
            r = t ?? n,
            a = i(),
            { activeLocale: o, setLocale: s } = ae();
          oe();
          let { style: c, className: l, layoutId: d, variant: f, sJ3RhKUYy: p, ...ee } = we(e),
            {
              baseVariant: h,
              classNames: g,
              clearLoadingGesture: _,
              gestureHandlers: re,
              gestureVariant: v,
              isLoading: ie,
              setGestureState: b,
              setVariant: x,
              variants: C,
            } = S({
              defaultVariant: `E4dPAcaVs`,
              enabledGestures: I,
              ref: r,
              variant: f,
              variantClassNames: R,
            }),
            w = H(e, C),
            { activeVariantCallback: T, delay: E } = se(h),
            D = T(async (...e) => {
              if ((b({ isPressed: !1 }), p && (await p(...e)) === !1)) return !1;
              x(`E4dPAcaVs`);
            }),
            ce = y(L);
          return m(ne, {
            id: d ?? a,
            children: m(V, {
              animate: C,
              initial: !1,
              children: m(B, {
                value: z,
                children: m(te.div, {
                  ...ee,
                  ...re,
                  className: y(ce, `framer-idih3o`, l, g),
                  "data-framer-name": `Close`,
                  "data-highlight": !0,
                  layoutDependency: w,
                  layoutId: `E4dPAcaVs`,
                  onTap: D,
                  ref: r,
                  style: { ...c },
                  ...P(
                    {
                      "E4dPAcaVs-hover": { "data-framer-name": void 0 },
                      "E4dPAcaVs-pressed": { "data-framer-name": void 0 },
                    },
                    h,
                    v
                  ),
                  children: m(O, {
                    animated: !0,
                    className: `framer-190t0r6`,
                    layoutDependency: w,
                    layoutId: `EztIQZHW_`,
                    style: {
                      "--d1m4u3": 2,
                      "--v9s4l2": `var(--token-1e51f8ac-91a3-4b96-a748-0907ede1ad45, rgb(8, 10, 16))`,
                      rotate: 0,
                    },
                    variants: {
                      "E4dPAcaVs-hover": { rotate: 90 },
                      "E4dPAcaVs-pressed": { rotate: 0 },
                    },
                  }),
                }),
              }),
            }),
          });
        }),
        [
          `@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
          `.framer-KkGyu.framer-nvv9vc, .framer-KkGyu .framer-nvv9vc { display: block; }`,
          `.framer-KkGyu.framer-idih3o { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 32px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 32px; }`,
          `.framer-KkGyu .framer-190t0r6 { flex: none; height: var(--framer-aspect-ratio-supported, 16px); position: relative; width: 16px; }`,
        ],
        `framer-KkGyu`
      )),
      (U.displayName = `Sidebar Close Button`),
      (U.defaultProps = { height: 32, width: 32 }),
      x(U, { sJ3RhKUYy: { title: `Tap`, type: E.EventHandler } }),
      ie(U, [{ explicitInter: !0, fonts: [] }, ...F], { supportsExplicitInterCodegen: !0 }));
  });
function W(e) {
  if (!n.isValidElement(e)) return e;
  let t = { ...e.props, rendersWithMotion: !1, layoutId: void 0, scopeId: void 0 };
  return (
    e.props.children && (t.children = n.Children.map(e.props.children, W)),
    n.cloneElement(e, t)
  );
}
var G = e(() => {
  r();
});
function Ee() {
  if (a !== void 0) {
    (j(), N());
    try {
      let e = history.pushState,
        t = history.replaceState;
      ((history.pushState = function () {
        (e.apply(this, arguments), j(), N());
      }),
        (history.replaceState = function () {
          (t.apply(this, arguments), j(), N());
        }),
        a.addEventListener(`popstate`, () => {
          (j(), N());
        }));
    } catch (e) {
      console.error(`Error setting up history listeners:`, e);
    }
  }
}
var De = e(() => {
  (t(), M(), Ee());
});
function Oe(e) {
  let {
      shopifyProductID: t,
      available: n,
      OutOfStock: r,
      SelectVariant: i,
      LoadingState: o,
      maxQuantity: s,
      shopifyProductVariantId: c,
      BuyNowATC: d,
      title: p = `Add to Cart`,
      required: te = !1,
      openCart: ne = !0,
    } = e,
    [_, re] = g(),
    [v, y] = g(),
    [ie, b] = g(!0),
    [x, S] = g(!1),
    [C, ae] = g(!0),
    [T, oe] = g(!1),
    [E, se] = g(),
    D = ue(),
    [O, de] = g(() => {
      if (a !== void 0) {
        let e = a.__fc_activeSubscription?.[t];
        if (e?.subscriptionId) return e.subscriptionId;
      }
      return `one-time`;
    }),
    [fe, A] = g(),
    [me, j] = g(),
    [M, be] = g(1),
    N = u(!1),
    [P, F] = g(!1),
    [I, L] = g(!1),
    [R, z] = g(!1),
    [B, V] = g(0);
  h(() => {
    if (!D) return;
    let t = (t) => {
      t.detail.shopifyProductID === `gid://shopify/Product/${e.shopifyProductID}` &&
        (F(t.detail.autoSelectFirst), (a.__fc_autoSelectFirst = t.detail.autoSelectFirst));
    };
    return (
      document.addEventListener(`auto_select_first_flag`, t),
      () => {
        document.removeEventListener(`auto_select_first_flag`, t);
      }
    );
  }, [D]);
  let we = f(
      (e) =>
        !e || e === `404`
          ? 0
          : typeof e.totalInventory == `number`
            ? e.totalInventory
            : k(e, `variants.edges`, []).reduce(
                (e, { node: t }) => e + (t.quantityAvailable || 0),
                0
              ),
      []
    ),
    H = f((e) => (e ? (e.availableForSale ? !0 : e.quantityAvailable > 0) : !1), []);
  (h(() => {
    if (me && D) {
      let e = new CustomEvent(`errorChanged`, { detail: me });
      a.dispatchEvent(e);
    }
  }, [me]),
    h(() => {
      if (!D || !a.shopXtools) return;
      let e = localStorage.getItem(`shopX_cart_id`);
      e &&
        a.shopXtools
          .handleCartMutation(Ce, { cartId: e })
          .then((e) => {
            e?.cart &&
              (A(e.cart),
              (a.shopXtools.cart = e.cart),
              localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cart)));
          })
          .catch((e) => {
            (localStorage.removeItem(`shopX_cart_id`), localStorage.removeItem(`shopXtools.cart`));
          });
      let n = a.__fc_activeSubscription?.[t];
      n?.subscriptionId && de(n.subscriptionId);
      let r = (e) => {
        (e.detail?.productId && e.detail.productId !== t) || de(e.detail.subscriptionId);
      };
      return (
        document.addEventListener(`subscription__selection-sync`, r),
        () => document.removeEventListener(`subscription__selection-sync`, r)
      );
    }, [D, t]));
  let U = (e) => {
    be(e.detail);
  };
  (h(() => {
    if (D)
      return (
        a.addEventListener(`FcQuantitySelectorchanges`, U),
        () => {
          a.removeEventListener(`FcQuantitySelectorchanges`, U);
        }
      );
  }, [D]),
    h(() => {
      !D ||
        !_ ||
        N.current ||
        ((v || _.variants?.edges?.length > 0) &&
          (he({
            variant: v || _.variants?.edges?.[0]?.node,
            product: _,
            currency:
              v?.price?.currencyCode || _.variants?.edges?.[0]?.node?.price?.currencyCode || `USD`,
          }),
          (N.current = !0)));
    }, [D, _, v]),
    h(() => {
      if (!D) return;
      let e = async (e) => {
        let { countryCode: t } = e.detail;
        se(t);
        let n = localStorage.getItem(`shopX_cart_id`);
        if (n)
          try {
            let e = await a.shopXtools.handleCartMutation(ce, { cartId: n, countryCode: t });
            e?.cartBuyerIdentityUpdate?.cart
              ? ((a.shopXtools.cart = e.cartBuyerIdentityUpdate.cart),
                a.dispatchEvent(new Event(`shopXtools-cart-update`)))
              : a.dispatchEvent(
                  new CustomEvent(`errorChanged`, {
                    detail: `Failed to update cart with new country code`,
                  })
                );
          } catch (e) {
            a.dispatchEvent(
              new CustomEvent(`errorChanged`, {
                detail: e.message || `Failed to update cart currency`,
              })
            );
          }
      };
      return (
        a.addEventListener(`currency_changed`, e),
        () => {
          a.removeEventListener(`currency_changed`, e);
        }
      );
    }, [D]),
    h(() => {
      if (!D) return;
      let e = (e) => {
          if (!e) return !1;
          let t = k(e, `variants.edges`, []);
          if (t.length === 1) {
            let e = t[0].node;
            return (y(e), I || (a.__fc_activeVariantId = e.id), b(H(e)), S(!1), !0);
          }
          return !1;
        },
        n = (t) => {
          if (_ && _ !== `404`) {
            let e = _?.id,
              n = t?.node?.id;
            if (e && n && e === n) return;
          }
          if (t) {
            let n = t.node;
            if ((re(n || `404`), n?.handle && q(n.handle), c && n)) {
              let e = `gid://shopify/ProductVariant/${c}`,
                t = k(n, `variants.edges`, []).find(({ node: t }) => t.id === e);
              if (t) {
                (y(t.node), I || (a.__fc_activeVariantId = t.node.id), b(H(t.node)), S(!1));
                return;
              }
            }
            if (e(n)) return;
            if (P && !I) {
              let e = n.variants.edges.find((e) => e.node.availableForSale)?.node;
              if (e) {
                (y(e), I || (a.__fc_activeVariantId = e.id), b(H(e)), S(!1));
                return;
              }
            }
            let r = k(n, `variants.edges`, []),
              i = r.length > 1;
            (k(n, `options`, []).length, v || S(!P && i ? !0 : !c && i));
            let o = r.some(({ node: e }) => H(e));
            (b(o), o || S(!1));
          } else (re(`404`), b(!1));
        };
      if (a.shopXtools?.products && Array.isArray(a.shopXtools.products) && !_) {
        let e = a.shopXtools.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        e && n(e);
      }
      let r = () => {
          if (a?.shopXtools?.products) {
            let e = a.shopXtools.products.find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            (!_ || _ === `404`) && n(e);
          }
        },
        i = (e) => {
          if (e.detail.productId === `gid://shopify/Product/${t}` && e.detail) {
            let t = k(_, `options`, []) || [],
              n = Array.isArray(e.detail.selectedOptions) ? e.detail.selectedOptions : [],
              r = new Set(n.map((e) => e?.name).filter(Boolean)),
              i = t.length > 0 && t.every((e) => r.has(e.name)),
              o = e.detail.isCompleteVariant === !0 || i;
            if (!o) {
              (L(!0), y(null), (a.__fc_activeVariantId = void 0), S(!0));
              return;
            }
            (y(e.detail),
              L(!0),
              (a.__fc_activeVariantId = e.detail.id),
              b(e.detail.quantityAvailable > 0),
              J(e.detail.id) === e.detail.quantityAvailable && e.detail.quantityAvailable > 0
                ? z(!0)
                : z(!1),
              S(!o));
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
    }, [t, c, v, D, we, P, _]),
    h(() => {
      if (!_ || _ === `404`) return;
      let e = k(_, `variants.edges`, []).length > 1;
      S(e && !v && !c);
    }, [_, v, c]));
  let [Te, G] = g(!1),
    Ee = () => {
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
  (h(() => {
    if (e.required) {
      let t = Ee();
      (e.required, G(!t));
    }
  }, [e.required, e.shopifyProductID]),
    h(() => {
      if (e.required) {
        let e = (e) => {
          e.detail;
          let t = Ee();
          G(!t);
        };
        return (
          a.addEventListener(`orderFieldChanged`, e),
          () => a.removeEventListener(`orderFieldChanged`, e)
        );
      }
    }, [e.required]));
  let [De, Oe] = g(!1);
  h(() => {
    let e = () => {
      let e = `fc_input_config_${t}`,
        n = sessionStorage.getItem(e);
      if (n) {
        let { required: e } = JSON.parse(n);
        Oe(e);
      } else Oe(!1);
    };
    return (
      e(),
      a.addEventListener(`inputConfigChanged`, e),
      () => a.removeEventListener(`inputConfigChanged`, e)
    );
  }, [t]);
  let ke = () => {
      let t =
        v?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null);
      if (!t) throw Error(`No valid product variant selected`);
      let n = { merchandiseId: t, quantity: M };
      O && O !== `one-time` && (n.sellingPlanId = O);
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
    q = f(async (e) => {
      if (e)
        try {
          let t = await a.shopXtools?.handleCartMutation?.(Se, { handle: e }),
            n = parseInt(t?.product?.metafield_order_max?.value, 10);
          V(!isNaN(n) && n > 0 ? n : 0);
        } catch (e) {
          (console.warn(`Could not fetch product metafields for order_max:`, e), V(0));
        }
    }, []),
    J = f(
      (e) => {
        let t = a?.shopXtools?.cart;
        A(t);
        let n = t?.lines?.edges;
        if (!n) return 0;
        if (_?.handle && B > 0) {
          let e = k(_, `variants.edges`, []).map(({ node: e }) => e.id);
          return n.reduce(
            (t, { node: n }) => (e.includes(n.merchandise.id) ? t + n.quantity : t),
            0
          );
        }
        return n.reduce((t, { node: n }) => (n.merchandise.id === e ? t + n.quantity : t), 0);
      },
      [_, B]
    ),
    Ae = async () => {
      try {
        if (!D) return;
        let t =
            v?.id ||
            (e.shopifyProductVariantId
              ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
              : null),
          n = J(t);
        if (B > 0 && n >= B) {
          z(!0);
          return;
        }
        if (B === 0 && v && v.quantityAvailable > 0 && n >= v.quantityAvailable) {
          z(!0);
          return;
        }
        if (e.required || De) {
          let t = `fc_cart_attributes_${e.shopifyProductID}`,
            n = sessionStorage.getItem(t),
            r = document.querySelector(`[data-product-id="${e.shopifyProductID}"]`),
            i = r?.value || ``;
          if (r && i && n)
            try {
              let t = JSON.parse(n);
              if (!Object.values(t).some((e) => String(e).trim() === i.trim())) {
                a.dispatchEvent(
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
              a.dispatchEvent(
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
            a.dispatchEvent(
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
              a.dispatchEvent(
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
            a.dispatchEvent(
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
        let r = [ke()],
          i = localStorage.getItem(`selectedCountryCode`),
          o = localStorage.getItem(`shopX_cart_id`);
        if (!d) {
          if (o)
            try {
              (await a.shopXtools.handleCartMutation(Ce, { cartId: o }))?.cart ||
                (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (o = null));
            } catch {
              (localStorage.removeItem(`shopX_cart_id`),
                localStorage.removeItem(`shopXtools.cart`),
                (o = null));
            }
          if (o) {
            let e = await a.shopXtools.handleCartMutation(xe, { cartId: o, lines: r });
            if (e?.cartLinesAdd?.cart) {
              (localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartLinesAdd.cart)),
                (a.shopXtools.cart = e.cartLinesAdd.cart),
                A(a.shopXtools.cart),
                a.dispatchEvent(new Event(`shopXtools-cart-update`)));
              let t = v?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(v?.price?.amount || `0`) * M).toFixed(2)),
                r = K(v?.id),
                i = _?.title || ``,
                o = v?.selectedOptions
                  ? v.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                s = parseFloat(v?.price?.amount || `0`);
              if (r && i && o && s > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: i,
                      item_variant: o,
                      price: s,
                      item_brand: _?.vendor || null,
                      item_category: _?.productType || null,
                      quantity: M,
                      SKU: r,
                      "Item Name": i,
                    },
                  ],
                };
                typeof a.fcTrackGAEvent == `function` && a.fcTrackGAEvent(`add_to_cart`, e);
              } else
                console.warn(`❌ Skipping add_to_cart: missing item data`, {
                  item_id: r,
                  item_name: i,
                  item_variant: o,
                  price: s,
                  value: n,
                });
              (ye({ variant: v, product: _, quantity: M, currency: t }),
                a.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: ne }));
            } else
              a.dispatchEvent(new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` }));
          } else
            try {
              let e = await a.shopXtools.handleCartMutation(ge, { lines: r, countryCode: i });
              if (e?.cartCreate?.cart?.id) {
                (localStorage.setItem(`shopX_cart_id`, e.cartCreate.cart.id),
                  localStorage.setItem(`shopXtools.cart`, JSON.stringify(e.cartCreate.cart)),
                  (a.shopXtools.cart = e.cartCreate.cart),
                  A(a.shopXtools.cart),
                  a.dispatchEvent(new Event(`shopXtools-cart-update`)));
                let t = v?.price?.currencyCode || `USD`,
                  n = parseFloat((parseFloat(v?.price?.amount || `0`) * M).toFixed(2)),
                  r = K(v?.id),
                  i = _?.title || ``,
                  o = v?.selectedOptions
                    ? v.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                    : ``,
                  s = parseFloat(v?.price?.amount || `0`);
                if (r && i && o && s > 0) {
                  let e = {
                    currency: t,
                    value: n,
                    items: [
                      {
                        item_id: r,
                        item_name: i,
                        item_variant: o,
                        price: s,
                        item_brand: _?.vendor || null,
                        item_category: _?.productType || null,
                        quantity: M,
                        SKU: r,
                        "Item Name": i,
                      },
                    ],
                  };
                  typeof a.fcTrackGAEvent == `function` && a.fcTrackGAEvent(`add_to_cart`, e);
                } else
                  console.warn(`❌ Skipping add_to_cart: missing item data`, {
                    item_id: r,
                    item_name: i,
                    item_variant: o,
                    price: s,
                    value: n,
                  });
                (ye({ variant: v, product: _, quantity: M, currency: t }),
                  a.shopXtools.dispatchEvent(`checkout__changed`, { __triggerCartModal: ne }));
              } else
                a.dispatchEvent(
                  new CustomEvent(`errorChanged`, { detail: `Failed to add to cart` })
                );
            } catch (e) {
              a.dispatchEvent(
                new CustomEvent(`errorChanged`, {
                  detail: e.message || `Failed to create new cart`,
                })
              );
            }
        }
        if (d) {
          let e = { lines: r, countryCode: i },
            t = (await a.shopXtools?.handleTemporaryCartMutation(ge, e)).cartCreate.cart
              .checkoutUrl;
          if (t) {
            let e = t;
            if (e) {
              let t = v?.price?.currencyCode || `USD`,
                n = parseFloat((parseFloat(v?.price?.amount || `0`) * M).toFixed(2)),
                r = K(v?.id),
                i = _?.title || ``,
                o = v?.selectedOptions
                  ? v.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
                  : ``,
                s = parseFloat(v?.price?.amount || `0`);
              if (r && i && o && s > 0) {
                let e = {
                  currency: t,
                  value: n,
                  items: [
                    {
                      item_id: r,
                      item_name: i,
                      item_variant: o,
                      price: s,
                      item_brand: _?.vendor || null,
                      item_category: _?.productType || null,
                      quantity: M,
                      SKU: r,
                      "Item Name": i,
                    },
                  ],
                };
                typeof a.fcTrackGAEvent == `function` && a.fcTrackGAEvent(`begin_checkout`, e);
              } else
                console.warn(`❌ Skipping begin_checkout: missing item data`, {
                  item_id: r,
                  item_name: i,
                  item_variant: o,
                  price: s,
                  value: n,
                });
              (_e({ variant: v, product: _, quantity: M, currency: t, useBeacon: !0 }),
                (e = ve(e)),
                (e = le(e)),
                a.location.assign(e));
            }
          } else
            a.dispatchEvent(
              new CustomEvent(`errorChanged`, { detail: `Failed to create cart for checkout` })
            );
        }
        if (r[0].attributes) {
          let e = o;
          await a.shopXtools.handleCartMutation(pe, { cartId: e, attributes: r[0].attributes });
        }
      } catch (e) {
        a.dispatchEvent(
          new CustomEvent(`errorChanged`, { detail: e.message || `Failed to add item to cart` })
        );
      }
    };
  (h(() => {
    _ && ae(!1);
  }, [_]),
    h(() => {
      if (!T && (_ || t)) {
        let e = setTimeout(() => {
          oe(!0);
        }, 50);
        return () => clearTimeout(e);
      }
    }, [_]));
  let Y = w.current() === w.canvas,
    X = null;
  X = Y
    ? n?.[0] || null
    : T
      ? R && s?.[0]
        ? s?.[0] || null
        : (!ie && !v?.availableForSale) ||
            (v && !H(v)) ||
            (_ && !k(_, `variants.edges`, []).some(({ node: e }) => H(e))) ||
            (e.required && Te)
          ? r?.[0] || null
          : x
            ? i?.[0] || null
            : n?.[0] || null
      : null;
  let Z = (ie || (v && v.availableForSale)) && !x && !R && (!e.required || !Te),
    Q = (e) => {
      Z && Ae();
    };
  (h(() => {
    let t =
        v?.id ||
        (e.shopifyProductVariantId
          ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
          : null),
      n = J(t),
      r = !1;
    (B > 0
      ? (r = n >= B)
      : B === 0 &&
        v &&
        v.quantityAvailable > 0 &&
        v.availableForSale &&
        (r = n >= v.quantityAvailable),
      r !== R && z(r));
  }, [B, v, e.shopifyProductVariantId, R, J]),
    h(() => {
      B > 0 &&
        a.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: B },
          })
        );
    }, [B, e.shopifyProductID]),
    h(() => {
      let t =
          v?.id ||
          (e.shopifyProductVariantId
            ? `gid://shopify/ProductVariant/${e.shopifyProductVariantId}`
            : null),
        n = J(t);
      if (B > 0 && fe) {
        let t = Math.max(0, B - n);
        a.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      } else if (B === 0 && v && fe && v.quantityAvailable > 0 && v.availableForSale) {
        let t = Math.max(0, v.quantityAvailable - n);
        a.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: t },
          })
        );
      }
    }, [fe, B, v, e.shopifyProductVariantId, J, M]),
    h(() => {
      let t = () => {
        let t = v?.id || null,
          n = J(t);
        if (B > 0) z(n >= B);
        else if (B === 0 && v && v.quantityAvailable > 0) {
          let e = n >= v.quantityAvailable;
          z(e);
        } else z(!1);
        let r = Math.max(0, B - n),
          i = v?.quantityAvailable <= 0 && v?.availableForSale ? 100 : v?.quantityAvailable,
          o = Math.max(0, i - n);
        a.dispatchEvent(
          new CustomEvent(`setMaxQuantity`, {
            detail: { productId: e.shopifyProductID, maxQuantity: B > 0 ? r : o },
          })
        );
      };
      return (
        a.addEventListener(`shopXtools-cart-update`, t),
        () => a.removeEventListener(`shopXtools-cart-update`, t)
      );
    }, [v, B, J, e.shopifyProductID]),
    h(() => {
      if (!D) return;
      let e = () => {
        if (
          (a !== void 0 && a.__fc_autoSelectFirst !== void 0 && F(a.__fc_autoSelectFirst),
          a !== void 0 && a.__fc_activeVariantId !== void 0)
        ) {
          let e = a.__fc_activeVariantId;
          if (e) {
            let t = k(_, `variants.edges`, []).find(({ node: t }) => t.id === e);
            t && y(t.node);
          }
        }
        if (_) {
          let e = k(_, `variants.edges`, []).length > 1;
          S(P || v ? !1 : !P && e ? !0 : !c && e);
        }
      };
      return (
        a.addEventListener(`resize`, e),
        () => {
          a.removeEventListener(`resize`, e);
        }
      );
    }, [D, _, v, P, c]));
  let je = u(),
    Me = u(!1);
  (h(() => {
    if (!_) return;
    let e = _.vendor || null,
      t = _.productType || null;
    if (!Me.current) {
      (K(_.id), _.title);
      let e = k(_, `variants.edges`, [])[0]?.node;
      (e
        ? (e.price?.currencyCode,
          parseFloat(e.price?.amount || `0`),
          K(e.id),
          e.title,
          parseFloat(e.price?.amount || `0`),
          K(e.id))
        : (_.priceRange?.minVariantPrice?.currencyCode,
          parseFloat(_.priceRange?.minVariantPrice?.amount || `0`),
          parseFloat(_.priceRange?.minVariantPrice?.amount || `0`)),
        (Me.current = !0));
    }
    if (v && _?.title) {
      let n = K(v.id),
        r = _.title,
        i = v?.selectedOptions
          ? v.selectedOptions.map((e) => `${e.name} ${e.value}`).join(` / `) || null
          : ``,
        o = parseFloat(v.price?.amount || `0`),
        s = v.price?.currencyCode || `USD`,
        c = o;
      if (n && r && i && o > 0 && je.current !== n) {
        let l = {
          currency: s,
          value: c,
          items: [
            {
              item_id: n,
              item_name: r,
              item_variant: i,
              price: o,
              item_brand: e,
              item_category: t,
              quantity: 1,
              SKU: n,
              "Item Name": r,
            },
          ],
        };
        l.items &&
          l.items.length > 0 &&
          l.items[0].item_id &&
          l.items[0].item_name &&
          (a.fcTrackGAEvent && a.fcTrackGAEvent(`view_item`, l), (je.current = n));
      }
    }
  }, [_, v]),
    h(() => {
      let e = document.activeElement;
      e && e.closest(`.fc-purchase-button-container`) && e.blur();
    }, [X]));
  let $ = null;
  Y &&
    (n?.[0]
      ? ($ = n[0])
      : i?.[0]
        ? ($ = i[0])
        : r?.[0]
          ? ($ = r[0])
          : s?.[0]
            ? ($ = s[0])
            : o?.[0] && ($ = o[0]));
  let Ne = n?.[0] || i?.[0] || r?.[0] || s?.[0] || o?.[0];
  if (Y && !Ne)
    return m(`div`, {
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
  let Pe = (a === void 0 ? `` : a.location.href).includes(`framercanvas.com`),
    Fe = $ ? W($) : null,
    Ie = o?.[0] ? W(o[0]) : null,
    Le = X ? W(X) : null;
  return ee(`div`, {
    style: { height: `100%`, position: `relative` },
    role: `none`,
    className: `fc-purchase-button-container`,
    children: [
      m(`style`, {
        children: `
                .fc-purchase-button-container :focus-visible {
                    outline: ${e.focus.width}px solid ${e.focus.color} !important;
                    outline-offset: ${e.focus.padding}px !important;
                    border-radius: ${e.focus.radius}px !important;
                }
            `,
      }),
      Y
        ? Fe &&
          l(Fe, {
            style: {
              ...($?.props?.style || {}),
              width: `100%`,
              height: `100%`,
              cursor: `pointer`,
              outline: `none`,
            },
            onClick: Q,
            role: `button`,
            "aria-label":
              $ === n?.[0]
                ? e.BuyNowATC
                  ? `Buy now`
                  : `Add to cart`
                : $ === i?.[0]
                  ? `Select variant`
                  : $ === r?.[0]
                    ? `Out of stock`
                    : $ === s?.[0]
                      ? `Max quantity reached`
                      : `Loading`,
          })
        : C && !e.skipLoading && Ie && !Pe
          ? l(Ie, {
              style: {
                ...(o[0].props?.style || {}),
                width: `100%`,
                height: `100%`,
                outline: `none`,
              },
              role: `status`,
              "aria-label": `Loading ${e.BuyNowATC ? `buy now` : `add to cart`} button`,
              "aria-live": `polite`,
              tabIndex: -1,
            })
          : Le
            ? l(Le, {
                style: {
                  ...(X?.props?.style || {}),
                  width: `100%`,
                  height: `100%`,
                  cursor: Z ? `pointer` : `not-allowed`,
                  outline: `none`,
                },
                onClick: Z ? Q : void 0,
                onKeyDown: Z
                  ? (e) => {
                      (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), Q(e));
                    }
                  : void 0,
                role: `button`,
                "aria-disabled": !Z,
                "aria-label":
                  X === n?.[0]
                    ? e.BuyNowATC
                      ? `Buy now`
                      : `Add to cart`
                    : X === i?.[0]
                      ? `Select variant`
                      : X === r?.[0]
                        ? `Out of stock`
                        : `Max quantity reached`,
                tabIndex: T ? 0 : -1,
              })
            : null,
    ],
  });
}
var K,
  ke = e(() => {
    (t(),
      d(),
      r(),
      fe(),
      C(),
      A(),
      M(),
      de(),
      me(),
      be(),
      G(),
      De(),
      x(Oe, {
        shopifyProductID: {
          type: E.String,
          title: `Product ID`,
          description: `Connect to CMS (required)`,
        },
        LoadingState: {
          type: E.ComponentInstance,
          title: `Loading`,
          hidden: (e) => e.skipLoading,
          description: `Display when product/variant is determining state to show.`,
        },
        available: {
          type: E.ComponentInstance,
          title: `Available`,
          description: `Display when product/variant is available (Add to Cart or Buy Now).`,
        },
        SelectVariant: {
          type: E.ComponentInstance,
          title: `Select Variant`,
          description: `Display when product/variant requires a variant selection.`,
        },
        OutOfStock: {
          type: E.ComponentInstance,
          title: `Out of Stock`,
          description: `Display when product/variant is out of stock.`,
        },
        maxQuantity: {
          type: E.ComponentInstance,
          title: `Limit Reached`,
          description: `Display when maximum cart quantity is reached.  

 –––– 

 Connect each state to button component off-page. 

 If you detatch the button component, you'll need to reconnect the states.`,
        },
        BuyNowATC: {
          title: `Buy Now`,
          type: E.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !1,
        },
        skipLoading: {
          title: `Loading State`,
          type: E.Boolean,
          enabledTitle: `No`,
          disabledTitle: `Yes`,
          defaultValue: !1,
        },
        openCart: {
          title: `Trigger Cart`,
          description: `If button is inside the cart, select No to keep the cart open.`,
          type: E.Boolean,
          enabledTitle: `Yes`,
          disabledTitle: `No`,
          defaultValue: !0,
          hidden: (e) => e.BuyNowATC,
        },
        focus: {
          type: E.Object,
          title: `Focus`,
          controls: {
            radius: {
              type: E.Number,
              title: `Radius`,
              defaultValue: 0,
              min: 0,
              max: 100,
              step: 1,
              displayStepper: !0,
            },
            width: {
              type: E.Number,
              title: `Width`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            padding: {
              type: E.Number,
              title: `Padding`,
              defaultValue: 2,
              min: 0,
              max: 20,
              step: 1,
              displayStepper: !0,
            },
            color: { type: E.Color, title: `Color`, defaultValue: `#007AFF` },
          },
        },
        shopifyProductVariantId: {
          type: E.String,
          title: `Variant ID`,
          description: `Advanced: Manually set a specific product variant ID (optional).`,
        },
      }),
      (K = (e) => e?.split(`/`).pop()));
  }),
  q,
  J,
  Ae,
  Y,
  X,
  Z,
  Q,
  je = e(() => {
    (d(),
      C(),
      r(),
      (q = `var(--framer-icon-mask)`),
      (J = p(function (e, t) {
        return m(`svg`, { ...e, ref: t, children: e.children });
      })),
      (Ae = te.create(J)),
      (Y = p((e, t) => {
        let { animated: n, layoutId: r, children: i, ...a } = e;
        return n
          ? m(Ae, { ...a, layoutId: r, ref: t, children: i })
          : m(`svg`, { ...a, ref: t, children: i });
      })),
      (X = `<svg display="block" role="presentation" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M 0 8 L 16 8 M 8 0 L 8 16" fill="transparent" height="16px" id="FXPvXVSeQ" stroke-dasharray="" stroke-linecap="round" stroke-linejoin="round" stroke-width="var(--d1m4u3, 1.2)" stroke="var(--v9s4l2, var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)))" transform="translate(2 2)" width="16px"/></svg>`),
      (Z = ({ color: e, height: t, id: n, stroke: r, width: i, ...a }) => ({
        ...a,
        r2cPmBIrU: r ?? a.r2cPmBIrU ?? 1.2,
        R8PWEQPqW:
          e ??
          a.R8PWEQPqW ??
          `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255))`,
      })),
      (Q = v(
        p(function (e, t) {
          let {
              style: n,
              className: r,
              layoutId: i,
              variant: a,
              R8PWEQPqW: o,
              r2cPmBIrU: s,
              ...c
            } = Z(e),
            l = b(`20776573`, X);
          return m(Y, {
            ...c,
            className: y(`framer-QeE8H`, r),
            layoutId: i,
            ref: t,
            role: `presentation`,
            style: { "--d1m4u3": s, "--v9s4l2": o, ...n },
            viewBox: `0 0 20 20`,
            children: m(`use`, { href: l }),
          });
        }),
        [
          `.framer-QeE8H { -webkit-mask: ${q}; aspect-ratio: 1; display: block; mask: ${q}; width: 20px; }`,
        ],
        `framer-QeE8H`
      )),
      (Q.displayName = `Plus`),
      x(Q, {
        R8PWEQPqW: {
          defaultValue: `var(--token-b1f89d39-57aa-4efb-8816-14116952e648, rgb(255, 255, 255)) /* {"name":"White"} */`,
          hidden: !1,
          title: `Color`,
          type: E.Color,
        },
        r2cPmBIrU: { defaultValue: 1.2, hidden: !1, min: 0, title: `Stroke`, type: E.Number },
      }));
  });
export { G as a, Te as c, ke as i, je as n, W as o, Oe as r, U as s, Q as t };
//# sourceMappingURL=nPgMT6_MJ.D2I9CMU9.mjs.map
