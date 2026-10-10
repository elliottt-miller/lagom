import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  F as r,
  H as i,
  L as a,
  N as o,
  P as s,
  V as c,
  c as l,
  l as u,
  o as d,
  w as f,
} from "./react.CWoGm2_e.mjs";
import { X as p, j as m, o as h, w as g } from "./framer.D9PtOJZM.mjs";
import { o as _, t as v } from "./lodash.Dqvych0p.mjs";
import { n as ee, t as y } from "./IsBrowser.bF6aX4Tz.mjs";
var b,
  x = e(() => {
    b =
      `CHF.PLN.SEK.NOK.DKK.CZK.HUF.RON.HRK.BGN.ISK.MDL.BYN.KZT.AMD.UZS.TJS.KGS.MNT.GEL.AFN.MRU.RWF.XAF.XOF.XPF`.split(
        `.`
      );
  }),
  S,
  C,
  w,
  T = e(() => {
    (n(),
      (S = () => {
        if (i === void 0) return `en`;
        let e = i.location.pathname.split(`/`).filter(Boolean),
          t =
            `ar.bg.bn.cs.da.de.el.en.es.fi.fr.he.hi.hr.hu.id.it.ja.ko.lt.ms.nb.nl.pl.ro.ru.sk.sl.sr.sv.ta.th.tr.uk.vi.pt-BR.pt-PT.zh-CN.zh-TW`.split(
              `.`
            ),
          n = (e) => {
            let t = e.toLowerCase();
            return t === `pt` || t.startsWith(`pt-`)
              ? t.length === 2
                ? `pt-BR`
                : `pt-${e.substring(3).toUpperCase()}`
              : t === `zh` || t.startsWith(`zh-`)
                ? t.length === 2
                  ? `zh-CN`
                  : `zh-${e.substring(3).toUpperCase()}`
                : t;
          };
        if (e[0]) {
          let r = n(e[0]);
          if (t.includes(r)) return r;
        }
        let r = sessionStorage.getItem(`checkoutLocale`);
        if (r) {
          let e = n(r);
          if (t.includes(e)) return e;
        }
        let a = localStorage.getItem(`checkoutLocale`);
        if (a) {
          let e = n(a);
          if (t.includes(e)) return e;
        }
        if (i.__FcCheckoutConfigs?.locale) {
          let e = n(i.__FcCheckoutConfigs.locale);
          if (t.includes(e)) return e;
        }
        return `en`;
      }),
      (C = (e) => {
        if (!e) return e;
        try {
          let t = new URL(e),
            n = S();
          return (
            t.searchParams.delete(`locale`),
            t.searchParams.append(`locale`, n),
            t.toString()
          );
        } catch (t) {
          return (console.error(`Error in appendLanguageToUrl:`, t), e);
        }
      }),
      (w = (e) => {
        if (e)
          return (
            {
              US: `en-US`,
              CA: `en-CA`,
              QC: `fr-CA`,
              GB: `en-GB`,
              FR: `fr-FR`,
              DE: `de-DE`,
              IT: `it-IT`,
              ES: `es-ES`,
              PT: `pt-PT`,
              NL: `nl-NL`,
              BE: `fr-BE`,
              LU: `fr-LU`,
              CH: `de-CH`,
              AT: `de-AT`,
              SE: `sv-SE`,
              NO: `nb-NO`,
              DK: `da-DK`,
              FI: `fi-FI`,
              PL: `pl-PL`,
              CZ: `cs-CZ`,
              HU: `hu-HU`,
              RU: `ru-RU`,
              CN: `zh-CN`,
              JP: `ja-JP`,
              KR: `ko-KR`,
              IN: `en-IN`,
              AU: `en-AU`,
              NZ: `en-NZ`,
              MX: `es-MX`,
              BR: `pt-BR`,
              AR: `es-AR`,
              CL: `es-CL`,
              CO: `es-CO`,
              PE: `es-PE`,
              AE: `ar-AE`,
              SA: `ar-SA`,
              ZA: `en-ZA`,
              IL: `he-IL`,
            }[e] || void 0
          );
      }));
  }),
  E,
  D,
  O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I = e(() => {
    ((E = `
  mutation createCart($lines: [CartLineInput!]!, $countryCode: CountryCode) {
    cartCreate(input: { lines: $lines, buyerIdentity: { countryCode: $countryCode } }) {
      cart {
        id
        checkoutUrl
        buyerIdentity {
          countryCode
        }
        attributes {
          key
          value
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
              merchandise {
                ... on ProductVariant {
                  id
                }
              }
            }
          }
        }
        cost {
          subtotalAmount {
            amount
            currencyCode
          }
          totalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      (D = `
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        id
        checkoutUrl
        buyerIdentity {
          countryCode
        }
        attributes {
          key
          value
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    id
                    title
                    metafields(
                      identifiers: [
                        { namespace: "custom", key: "order_max" }
                      ]
                    ) {
                      namespace
                      key
                      value
                    }
                  }
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                  }
                  selectedOptions {
                    name
                    value
                  }
                }
              }
              cost {
                totalAmount {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
          subtotalAmount {
            amount
            currencyCode
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      (O = `
  mutation cartAttributesUpdate($cartId: ID!, $attributes: [AttributeInput!]!) {
    cartAttributesUpdate(cartId: $cartId, attributes: $attributes) {
      cart {
        id
        attributes {
          key
          value
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`),
      (k = `
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        id
        buyerIdentity {
          countryCode
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  product {
                    id
                    handle
                    title
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`),
      (A = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          sellingPlanAllocation{ 
                              checkoutChargeAmount{
                                  amount
                                  currencyCode
                                  }
                          }
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                      selectedOptions
                            {
                              name
                              value
                            }
                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (j = `mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
      cartLinesUpdate(cartId: $cartId, lines: $lines) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              cost {
                  totalAmount {
                      amount
                      currencyCode
                  }
                  subtotalAmount {
                      amount
                      currencyCode
                  }
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                  selectedOptions
                                  {
                              name
                              value
                            }

                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (M = `mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
      cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
          cart {
              id
              buyerIdentity {
                countryCode
              }
              lines(first: 250) {
                  edges {
                      node {
                          id
                          quantity
                          cost {
                              totalAmount {
                                  amount
                                  currencyCode
                              }
                              subtotalAmount {
                                  amount
                                  currencyCode
                              }
                          }
                          merchandise {
                              ... on ProductVariant {
                                  id
                                  title
                                  product {
                                      id
                                      title
                                  }
                                  price {
                                      amount
                                      currencyCode
                                  }
                                  image {
                                      url
                                  }
                                      selectedOptions
                            {
                              name
                              value
                            }
                              }
                          }
                      }
                  }
              }
          }
          userErrors {
              field
              message
          }
      }
  }`),
      (N = `
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      id
      checkoutUrl
      buyerIdentity {
        countryCode
      }
      attributes {
        key
        value
      }
      lines(first: 100) {
        edges {
          node {
            id
            quantity
            attributes {
              key
              value
            }
            merchandise {
              ... on ProductVariant {
                id
                product {
                  id
                  title
                  metafields(
                    identifiers: [
                      { namespace: "custom", key: "order_max" }
                    ]
                  ) {
                    namespace
                    key
                    value
                  }
                }
                price {
                  amount
                  currencyCode
                }
                image {
                  url
                }
                selectedOptions {
                  name
                  value
                }
              }
            }
            sellingPlanAllocation {
              sellingPlan {
                id
                name
              }
              checkoutChargeAmount {
                amount
                currencyCode
              }
            }
            cost {
              totalAmount {
                amount
                currencyCode
              }
            }
          }
        }
      }
      cost {
        totalAmount {
          amount
          currencyCode
        }
        subtotalAmount {
          amount
          currencyCode
        }
      }
    }
  }
`),
      (P = `
  query getProductMetafields($handle: String!) {
    product(handle: $handle) {
      id
      metafield_order_max: metafield(namespace: "custom", key: "order_max") {
        value
        type
      }
    }
  }
`),
      (F = `
  mutation updateCartCurrency($cartId: ID!, $countryCode: CountryCode) {
    cartBuyerIdentityUpdate(cartId: $cartId, buyerIdentity: { countryCode: $countryCode }) {
      cart {
        id
        buyerIdentity {
          countryCode
        }
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
      }
    }
  }
`));
  }),
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    (n(),
      (L = (e) => e?.split(`/`).pop() || ``),
      (R = () =>
        i !== void 0 && i.FCConsentManager ? i.FCConsentManager.getConsent().marketing === !0 : !0),
      (z = (e) => {
        if (!R()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { variant: t, product: n, quantity: r = 1, currency: i = `USD` } = e;
        if (!t || !n) {
          console.warn(`Missing variant or product data for Facebook Pixel tracking`);
          return;
        }
        let a = L(t.id),
          o = n.title || ``;
        t.title;
        let s = parseFloat(t.price?.amount || `0`),
          c = s * r,
          l = t.price?.currencyCode || i;
        if (!a || !o || s <= 0) {
          console.warn(`❌ Skipping Facebook Pixel AddToCart: missing required data`, {
            item_id: a,
            item_name: o,
            price: s,
            value: c,
          });
          return;
        }
        let u = {
          content_type: `product`,
          content_ids: [a],
          content_name: o,
          content_category: n.productType || ``,
          content_brand: n.vendor || ``,
          value: parseFloat(c.toFixed(2)),
          currency: l,
          contents: [{ id: a, price: parseFloat(s.toFixed(2)), quantity: parseInt(r.toString()) }],
        };
        fbq(`track`, `AddToCart`, u, { eventID: `addtocart_` + Date.now() });
      }),
      (B = (e) => {
        if (!R()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let {
            variant: t,
            product: n,
            quantity: r = 1,
            currency: i = `USD`,
            value: a,
            content_ids: o,
            content_name: s,
            num_items: c,
          } = e,
          l = { content_type: `product`, currency: i };
        if (t && n) {
          let e = L(t.id),
            a = n.title || ``,
            o = parseFloat(t.price?.amount || `0`),
            s = o * r,
            c = t.price?.currencyCode || i;
          if (!e || !a || o <= 0) {
            console.warn(`❌ Skipping Facebook Pixel InitiateCheckout: missing required data`, {
              item_id: e,
              item_name: a,
              price: o,
              calculatedValue: s,
            });
            return;
          }
          l = {
            content_type: `product`,
            content_ids: [e],
            content_name: a,
            content_category: n.productType || ``,
            content_brand: n.vendor || ``,
            value: parseFloat(s.toFixed(2)),
            currency: c,
            num_items: parseInt(r.toString()),
          };
        } else if (o && a !== void 0)
          l = {
            content_type: `product`,
            content_ids: o,
            content_name: s || `Checkout`,
            value: parseFloat((typeof a == `number` ? a : parseFloat(a) || 0).toFixed(2)),
            currency: i,
            num_items: parseInt((c || 1).toString()),
          };
        else {
          console.warn(`❌ Skipping Facebook Pixel InitiateCheckout: insufficient data`, e);
          return;
        }
        let u = { eventID: `initiatecheckout_` + Date.now() };
        e.useBeacon
          ? fbq(`track`, `InitiateCheckout`, l, { ...u, transport: `beacon` })
          : fbq(`track`, `InitiateCheckout`, l, u);
      }),
      (V = (e) => {
        if (!R()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { lineItem: t, currency: n = `USD` } = e;
        if (!t) {
          console.warn(`Missing lineItem data for Facebook Pixel RemoveFromCart tracking`);
          return;
        }
        let r = L(t.merchandise.id),
          i = t.merchandise.product?.title || ``;
        t.merchandise.title;
        let a = parseFloat(t.cost.subtotalAmount.amount || `0`),
          o = t.quantity || 1,
          s = a * o,
          c = t.cost.subtotalAmount.currencyCode || n;
        if (!r || !i || a <= 0) {
          console.warn(`❌ Skipping Facebook Pixel RemoveFromCart: missing required data`, {
            item_id: r,
            item_name: i,
            price: a,
            value: s,
            quantity: o,
          });
          return;
        }
        let l = {
          content_type: `product`,
          content_ids: [r],
          content_name: i,
          content_category: t.merchandise.product?.productType || ``,
          content_brand: t.merchandise.product?.vendor || ``,
          value: parseFloat(s.toFixed(2)),
          currency: c,
          contents: [{ id: r, price: parseFloat(a.toFixed(2)), quantity: parseInt(o.toString()) }],
        };
        fbq(`track`, `RemoveFromCart`, l, { eventID: `removefromcart_` + Date.now() });
      }),
      (H = (e) => {
        if (!R()) return;
        if (typeof fbq != `function`) {
          console.warn(`Facebook Pixel not available`);
          return;
        }
        let { variant: t, product: n, currency: r = `USD` } = e;
        if (!n) {
          console.warn(`Missing product data for Facebook Pixel ViewContent tracking`);
          return;
        }
        let i = L(t ? t.id : n.id),
          a = n.title || ``;
        t?.title;
        let o = parseFloat(
            t ? t.price?.amount || `0` : n.priceRange?.minVariantPrice?.amount || `0`
          ),
          s = t?.price?.currencyCode || n.priceRange?.minVariantPrice?.currencyCode || r;
        if (!i || !a || o <= 0) {
          console.warn(`❌ Skipping Facebook Pixel ViewContent: missing required data`, {
            item_id: i,
            item_name: a,
            price: o,
          });
          return;
        }
        let c = {
          content_type: `product`,
          content_ids: [i],
          content_name: a,
          content_category: n.productType || ``,
          content_brand: n.vendor || ``,
          value: parseFloat(o.toFixed(2)),
          currency: s,
        };
        fbq(`track`, `ViewContent`, c, { eventID: `viewcontent_` + Date.now() });
      }));
  });
function W(e, t, n = 30) {
  let r = new Date();
  r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
  let a = `expires=${r.toUTCString()}`,
    o = i.location.protocol === `https:` ? `;secure` : ``;
  document.cookie = `${e}=${t};${a};path=/${o}`;
}
function G(e) {
  let t = `${e}=`,
    n = document.cookie.split(`;`);
  for (let e = 0; e < n.length; e++) {
    let r = n[e];
    for (; r.charAt(0) === ` `;) r = r.substring(1);
    if (r.indexOf(t) === 0) return r.substring(t.length, r.length);
  }
  return null;
}
function K() {
  let e = new URLSearchParams(i.location.search),
    t = {};
  if (
    ([`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`].forEach((n) => {
      let r = e.get(n);
      r && (t[n] = r);
    }),
    Object.keys(t).length > 0)
  )
    try {
      (Object.entries(t).forEach(([e, t]) => {
        W(e, t);
      }),
        W(`_shopify_utm`, JSON.stringify(t)),
        (i.utmParams = t));
    } catch (e) {
      console.error(`Error storing UTM parameters:`, e);
    }
  return t;
}
function q() {
  let e = new URLSearchParams(i.location.search),
    t = {};
  if (
    ([`sca_ref`, `sca_source`, `sca_medium`, `sca_campaign`, `sca_term`, `sca_content`].forEach(
      (n) => {
        let r = e.get(n);
        r && (t[n] = r);
      }
    ),
    Object.keys(t).length > 0)
  )
    try {
      (Object.entries(t).forEach(([e, t]) => {
        W(e, t);
      }),
        W(`_shopify_sca_ref`, JSON.stringify(t)),
        (i.scaRefParams = t));
    } catch (e) {
      console.error(`Error storing SCA ref parameters:`, e);
    }
  return t;
}
function J() {
  if (i.utmParams && Object.keys(i.utmParams).length > 0) return i.utmParams;
  try {
    let e = G(`_shopify_utm`);
    if (e)
      try {
        let t = JSON.parse(e);
        return ((i.utmParams = t), t);
      } catch (e) {
        console.error(`Error parsing Shopify UTM params:`, e);
      }
    let t = {};
    if (
      ([`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`].forEach((e) => {
        let n = G(e);
        n && (t[e] = n);
      }),
      Object.keys(t).length > 0)
    )
      return ((i.utmParams = t), t);
  } catch (e) {
    console.error(`Error retrieving stored UTM parameters:`, e);
  }
  return {};
}
function Y() {
  if (i.scaRefParams && Object.keys(i.scaRefParams).length > 0) return i.scaRefParams;
  try {
    let e = G(`_shopify_sca_ref`);
    if (e)
      try {
        let t = JSON.parse(e);
        return ((i.scaRefParams = t), t);
      } catch (e) {
        console.error(`Error parsing Shopify SCA ref params:`, e);
      }
    let t = {};
    if (
      ([`sca_ref`, `sca_source`, `sca_medium`, `sca_campaign`, `sca_term`, `sca_content`].forEach(
        (e) => {
          let n = G(e);
          n && (t[e] = n);
        }
      ),
      Object.keys(t).length > 0)
    )
      return ((i.scaRefParams = t), t);
  } catch (e) {
    console.error(`Error retrieving stored SCA ref parameters:`, e);
  }
  return {};
}
function X(e) {
  if (!e) return e;
  let t = J();
  Object.keys(t).length === 0 && K();
  let n = J();
  if (Object.keys(n).length > 0)
    try {
      let t = new URL(e);
      return (
        Object.keys(n).forEach((e) => {
          t.searchParams.has(e) || t.searchParams.append(e, n[e]);
        }),
        t.toString()
      );
    } catch (t) {
      return (console.error(`Error appending UTM params to URL:`, t), e);
    }
  return e;
}
function Z(e) {
  if (!e) return e;
  let t = Y();
  Object.keys(t).length === 0 && q();
  let n = Y();
  if (Object.keys(n).length > 0)
    try {
      let t = new URL(e);
      return (
        Object.keys(n).forEach((e) => {
          t.searchParams.has(e) || t.searchParams.append(e, n[e]);
        }),
        t.toString()
      );
    } catch (t) {
      return (console.error(`Error appending SCA ref params to URL:`, t), e);
    }
  return e;
}
function Q(e) {
  return !e || typeof e != `string` || e.length > 50 ? !1 : /^[a-zA-Z0-9_-]+$/.test(e);
}
function $() {
  if (i === void 0 || typeof sessionStorage > `u`) return null;
  try {
    let e = new URLSearchParams(i.location.search).get(`discount`);
    return e
      ? Q(e)
        ? (sessionStorage.setItem(`fc_discount_code`, e), e)
        : (console.warn(
            `Invalid discount code format. Only alphanumeric characters, hyphens, and underscores are allowed. Max length: 50 characters.`
          ),
          null)
      : null;
  } catch (e) {
    return (console.error(`Error parsing discount code from URL:`, e), null);
  }
}
function te() {
  if (i === void 0 || typeof sessionStorage > `u`) return null;
  try {
    let e = sessionStorage.getItem(`fc_discount_code`);
    return e && Q(e) ? e : (e && sessionStorage.removeItem(`fc_discount_code`), null);
  } catch (e) {
    return (console.error(`Error retrieving stored discount code:`, e), null);
  }
}
function ne(e) {
  if (!e) return e;
  let t = te();
  if (t)
    try {
      let n = new URL(e);
      return (n.searchParams.has(`discount`) || n.searchParams.append(`discount`, t), n.toString());
    } catch (t) {
      return (console.error(`Error appending discount code to URL:`, t), e);
    }
  return e;
}
function re(e) {
  if (!e) return e;
  let t = e;
  return ((t = X(t)), (t = Z(t)), (t = ne(t)), t);
}
var ie = e(() => {
  (n(),
    i !== void 0 &&
      (document.readyState === `complete`
        ? (K(), q(), $())
        : i.addEventListener(`load`, () => {
            (K(), q(), $());
          })));
});
function ae(e) {
  let {
      shopifyProductID: t,
      canvasPrice: n,
      format: { showCurrency: d, showSymbol: f, showDecimals: p, currencyCode: m } = {},
      fromText: h = `from`,
    } = e,
    v = ee(),
    [y, b] = a(),
    [x, S] = a(),
    [C, T] = a(() => {
      if (i !== void 0) {
        let e = i.__fc_activeSubscription?.[t];
        if (e?.price) return e.price;
      }
      return null;
    }),
    [E, D] = a(``),
    [O, k] = a(``),
    [A, j] = a(``),
    [M, N] = a(!1),
    [P, F] = a({}),
    [I, L] = a(``),
    [R, z] = a(!1),
    [B, V] = a(!1),
    [H, U] = a({ min: null, max: null }),
    W = s(
      (e, t = !1) => {
        if (!e) return { min: null, max: null };
        let n = t ? `compareAtPriceRange` : `priceRange`,
          r = _(e, `${n}.minVariantPrice.amount`),
          i = _(e, `${n}.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let n = e?.variants?.edges || [];
          if (n.length > 0) {
            let { min: e, max: r } = n.reduce(
              (e, { node: n }) => {
                if (!n) return e;
                let r = _(n, t ? `compareAtPrice.amount` : `price.amount`),
                  i = r ? parseFloat(r) : NaN;
                return (
                  !isNaN(i) &&
                    i > 0 &&
                    ((e.min === null || i < e.min) && (e.min = i),
                    (e.max === null || i > e.max) && (e.max = i)),
                  e
                );
              },
              { min: null, max: null }
            );
            ((a = e), (o = r));
          }
        }
        return {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
      },
      [E]
    );
  (r(() => {
    if (!y || B) return;
    let e = () => {
      let e = W(y, !1);
      (U(e), V(!0));
    };
    `requestIdleCallback` in i ? requestIdleCallback(e, { timeout: 200 }) : setTimeout(e, 100);
  }, [y, B, W]),
    r(() => {
      y && (V(!1), U({ min: null, max: null }));
    }, [y]),
    r(() => {
      if (!v) return;
      let e = localStorage.getItem(`selectedCurrency`),
        t = localStorage.getItem(`selectedCountryCode`),
        n = localStorage.getItem(`selectedCountry`);
      (D(e || `USD`), k(t || `US`), j(n || `United States`));
    }, [v]));
  let G = s(
      async (e) => {
        if (
          !e.detail?.isPurchaseAction &&
          !(!e.detail || e.detail.productId !== `gid://shopify/Product/${t}`)
        ) {
          (L(e.detail.onClickAction), z(!1), N(!0));
          try {
            let n = (i.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${t}`
            );
            if (n) {
              b(n.node);
              let t = n.node?.variants?.edges?.find(({ node: t }) =>
                t.selectedOptions.every((t) =>
                  e.detail.selectedOptions.find((e) => e.name === t.name && e.value === t.value)
                )
              );
              if (t)
                if (e.detail.onClickAction === `purchase`)
                  (S(null),
                    F({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }));
                else if (e.detail?.isCompleteVariant === !1) {
                  if ((S(null), Array.isArray(e.detail.selectedOptions))) {
                    let t = {};
                    (e.detail.selectedOptions.forEach((e) => {
                      e?.name && (t[e.name] = e.value);
                    }),
                      F(t));
                  }
                } else (S(t.node), F({}));
            }
          } catch {
            if (e.detail?.isCompleteVariant)
              (S(e.detail), e.detail.onClickAction !== `purchase` && F({}));
            else if ((S(null), Array.isArray(e.detail?.selectedOptions))) {
              let t = {};
              (e.detail.selectedOptions.forEach((e) => {
                e?.name && (t[e.name] = e.value);
              }),
                F(t));
            }
          } finally {
            N(!1);
          }
        }
      },
      [t]
    ),
    K = s(
      (e) => {
        N(!0);
        let { currency: n, countryCode: r, country: a } = e.detail;
        (D(n), k(r), j(a));
        try {
          let e = (i.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${t}`
          );
          if (e && (b(e.node), x)) {
            let t = e.node.variants?.edges.find(({ node: e }) =>
              e.selectedOptions.every((e) =>
                x.selectedOptions.find((t) => t.name === e.name && t.value === e.value)
              )
            );
            t && S(t.node);
          }
        } catch {
        } finally {
          N(!1);
        }
      },
      [t, x]
    );
  (r(() => {
    if (v)
      return (
        i.addEventListener(`currency_changed`, K),
        () => {
          i.removeEventListener(`currency_changed`, K);
        }
      );
  }, [v, K]),
    r(() => {
      if (!v) return;
      let e = (e) => {
        if ((y && y.id === `gid://shopify/Product/${t}`) || !Array.isArray(e.detail?.products))
          return;
        let n = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${t}`);
        n && (b(n.node), n.node?.variants?.edges?.length === 1 && S(n.node.variants.edges[0].node));
      };
      return (
        document.addEventListener(`data__products-ready`, e),
        document.addEventListener(`product__active-variant__changed`, G),
        () => {
          (document.removeEventListener(`data__products-ready`, e),
            document.removeEventListener(`product__active-variant__changed`, G));
        }
      );
    }, [v, t, E, O, y]));
  let q = async () => {
    try {
      let e = (Array.isArray(i?.shopXtools?.products) ? i.shopXtools.products : []).find(
        ({ node: e }) => e.id === `gid://shopify/Product/${t}`
      );
      e
        ? (b(e.node), e.node?.variants?.edges?.length === 1 && S(e.node.variants.edges[0].node))
        : i?.shopXtools?.getProducts && i.shopXtools.getProducts(t);
    } catch (e) {
      console.error(`Error loading product:`, e);
    }
  };
  (r(() => {
    v && q();
  }, [v]),
    r(() => {
      if (!v || !y || !(y.variants?.edges?.length > 1)) return;
      z(!0);
      let e = setTimeout(() => {
        z(!1);
      }, 1e3);
      return () => {
        clearTimeout(e);
      };
    }, [v, y]),
    r(() => {
      if (!v) return;
      let e = i.__fc_activeSubscription?.[t];
      e?.price && !C && T(e.price);
      let n = (e) => {
          (e.detail?.productId && e.detail.productId !== t) ||
            (e.detail?.price ? T(e.detail.price) : T(null));
        },
        r = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let n = e.detail?.productId,
            r = `gid://shopify/Product/${t}`;
          (n && n !== r) ||
            (z(!1),
            N(!0),
            e.detail?.optionName && e.detail?.value && F({ [e.detail.optionName]: e.detail.value }),
            N(!1));
        };
      return (
        document.addEventListener(`subscription__price-update`, n),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`__variant_option_selected`, r),
        () => {
          (document.removeEventListener(`subscription__price-update`, n),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`__variant_option_selected`, r));
        }
      );
    }, [v, t]),
    o(() => {
      let e = _(x, `price.currencyCode`),
        t = _(y, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [x, y]));
  let J = o(
      () => g.current() === g.canvas || (v && i.location.origin.endsWith(`framercanvas.com`)),
      [v]
    ),
    Y = (e, t) => {
      let n = oe(t),
        r = w(O),
        a =
          p === `Always show` || (p !== `Never show` && (p !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!f && !d)
        return new Intl.NumberFormat(r, {
          style: `decimal`,
          minimumFractionDigits: a,
          maximumFractionDigits: a,
        }).format(e);
      if (t === `USD` && f)
        if (v && /iPad|iPhone|iPod/.test(c.userAgent) && !i.MSStream) {
          let t = new Intl.NumberFormat(r, {
              style: `decimal`,
              minimumFractionDigits: a,
              maximumFractionDigits: a,
            }).format(e),
            n;
          return ((n = d ? `$${t} USD` : `$${t}`), n);
        } else {
          let t;
          return (
            (t = d
              ? `${new Intl.NumberFormat(r, { style: `currency`, currency: `USD`, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} USD`
              : new Intl.NumberFormat(r, {
                  style: `currency`,
                  currency: `USD`,
                  minimumFractionDigits: a,
                  maximumFractionDigits: a,
                  currencyDisplay: `narrowSymbol`,
                }).format(e)),
            t
          );
        }
      return n && ((d && !f) || (f && !d) || (d && f))
        ? `${t} ${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)}`
        : !f && d
          ? `${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)} ${t}`
          : f && !d
            ? new Intl.NumberFormat(r, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(r, { style: `currency`, currency: t, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    X = o(() => {
      if (!v) return ``;
      if (g !== void 0 && (g.current() === g.canvas || J)) {
        let t, r;
        if (n) {
          let e = n.split(`-`);
          e.length === 2 ? ((t = e[0].trim()), (r = e[1].trim())) : ((t = n), (r = n));
        }
        let i = parseFloat(t),
          a = parseFloat(r),
          o = m || `USD`,
          s = Y(i, o);
        if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? s : `${h} ${s}`;
        if (e.displayPrice === `range`) {
          let e = Y(a, o);
          return Math.abs(i - a) < 0.01 ? s : `${s} - ${e}`;
        }
        return s;
      }
      let t = C || (x && _(x, `price.amount`));
      if (!t && !x && !y?.priceRange) return ``;
      let r = E || m || `USD`,
        { min: i, max: a } = H.min === null ? W(y, !1) : H;
      if (t) {
        let e = parseFloat(t);
        return isNaN(e) ? `` : Y(e, r);
      }
      if (y?.variants?.edges?.length === 1 && !x) {
        let e = y.variants.edges[0].node;
        if (e?.price?.amount) {
          let t = parseFloat(e.price.amount);
          if (!isNaN(t)) return Y(t, r);
        }
      }
      let o = Object.keys(P).length > 0,
        s = x && x.selectedOptions?.length > 0;
      if (o && !s && y?.variants?.edges?.length && I !== `purchase`) {
        let t = y.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !P[e.name] || P[e.name] === e.value)
        );
        if (t.length > 0) {
          let n = t.map(({ node: e }) => parseFloat(e.price?.amount || `0`)).filter((e) => e > 0);
          if (n.length > 0) {
            let t = Math.min(...n),
              i = Math.max(...n),
              a = Y(t, r);
            if (e.displayPrice === `range`) return Math.abs(t - i) < 0.01 ? a : `${a} - ${Y(i, r)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(t - i) < 0.01 ? a : `${h} ${a}`;
          }
        }
      }
      if ((!x && y?.priceRange) || (I === `purchase` && y?.priceRange)) {
        if (R) return ``;
        if (i) {
          let t = Y(i, r);
          if (a && Math.abs(i - a) > 0.01) {
            if (e.displayPrice === `range`) return `${t} - ${Y(a, r)}`;
            if (e.displayPrice === `minimum price`) return Math.abs(i - a) < 0.01 ? t : `${h} ${t}`;
          }
          return e.displayPrice === `range` || (a && Math.abs(i - a) < 0.01) ? t : `${h} ${t}`;
        }
        let t = _(y, `priceRange.minVariantPrice.amount`),
          n = _(y, `priceRange.maxVariantPrice.amount`);
        if (t) {
          let i = parseFloat(t);
          if (!isNaN(i) && i > 0) {
            let t = Y(i, r);
            if (e.displayPrice === `range`) {
              if (n) {
                let e = parseFloat(n);
                if (!isNaN(e) && e > 0 && Math.abs(i - e) > 0.01) return `${t} - ${Y(e, r)}`;
              }
              return t;
            }
            if (n) {
              let e = parseFloat(n);
              if (!isNaN(e) && Math.abs(i - e) < 0.01) return t;
            }
            return `${h} ${t}`;
          }
        }
      }
      return ``;
    }, [v, J, x, y, n, d, f, m, p, E, O, C, e.displayPrice, P, I, h, R, W]),
    Z = o(() => {
      if (Object.keys(P).length > 0 && y?.variants?.edges?.length) {
        let e = y.variants.edges.filter(({ node: e }) =>
          e.selectedOptions.every((e) => !P[e.name] || P[e.name] === e.value)
        );
        if (
          !e.every(({ node: e }) => {
            let t = _(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let t = e
          .map(({ node: e }) => parseFloat(_(e, `compareAtPrice.amount`) || `0`))
          .filter((e) => e > 0);
        if (t.length > 0) {
          let e = Math.min(...t);
          return Y(e, E || m || `USD`);
        }
      }
      if (x) {
        let e = _(x, `compareAtPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : Y(t, E || m || `USD`);
      }
      if (y?.variants?.edges?.length) {
        if (
          !y.variants.edges.every(({ node: e }) => {
            let t = _(e, `compareAtPrice.amount`);
            return t && parseFloat(t) > 0;
          })
        )
          return ``;
        let e = _(y, `compareAtPriceRange.minVariantPrice.amount`);
        if (!e) return ``;
        let t = parseFloat(e);
        return isNaN(t) || t <= 0 ? `` : Y(t, E || m || `USD`);
      }
      return ``;
    }, [x, y, P, m, d, f, p, E, O, J, e.format]),
    Q = o(() => parseFloat(Z.replace(/[^\d.-]/g, ``)), [Z]),
    $ = !isNaN(Q) && Q > 0;
  o(() => {
    if (J) return !0;
    if (!X) return !1;
    let e = parseFloat(X.replace(/[^\d.-]/g, ``));
    return !isNaN(e) && e > 0;
  }, [X, J]);
  let te = o(() => {
    let t = {
        margin: 0,
        padding: 0,
        lineHeight: 1,
        whiteSpace: `nowrap`,
        display: `inline-block`,
        width: `auto`,
      },
      n = $ ? e.saleFont : e.regularFont,
      r = $ ? e.saleColor : e.regularColor;
    return { ...t, ...n, color: r };
  }, [$, e.saleFont, e.regularFont, e.saleColor, e.regularColor]);
  if (!v || M || (!y && !x && !C && !J)) return l(`div`, { style: { display: `none` } });
  let ne = y && !B && y.variants?.edges?.length > 1;
  return l(`div`, {
    style: {
      display: `inline-block`,
      maxWidth: `100%`,
      width: `auto`,
      whiteSpace: `nowrap`,
      overflow: `visible`,
      transform: `none`,
      transition: `none`,
      animation: `none`,
      willChange: `auto`,
    },
    children: u(`p`, {
      style: {
        ...te,
        transform: `none`,
        transition: `none`,
        animation: `none`,
        willChange: `auto`,
      },
      children: [
        X,
        ne &&
          l(`span`, {
            style: { opacity: 0.6, fontSize: `0.8em`, marginLeft: `4px` },
            children: `...`,
          }),
      ],
    }),
  });
}
var oe,
  se = e(() => {
    (n(),
      d(),
      f(),
      p(),
      v(),
      y(),
      x(),
      T(),
      (oe = (e) => {
        if (!e) return !1;
        if (b.includes(e)) return !0;
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
      (ae.defaultProps = {
        shopifyProductID: ``,
        canvasPrice: `50.00`,
        fromText: `from`,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      m(ae, {
        shopifyProductID: {
          type: h.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: h.String,
          title: `Price`,
          defaultValue: `50.00`,
          description: `Connect to CMS (for canvas preview only).`,
        },
        displayPrice: {
          type: h.Enum,
          title: `Varying Prices`,
          options: [`minimum price`, `range`],
          optionTitles: [`Minimum Price`, `Range`],
          defaultValue: `minimum price`,
          displaySegmentedControl: !0,
          segmentedControlDirection: `vertical`,
          description: `When a product has multiple prices and a variant has not been selected.`,
        },
        fromText: {
          type: h.String,
          title: `Prefix`,
          placeholder: `from`,
          defaultValue: `from`,
          hidden: (e) => e.displayPrice !== `minimum price`,
        },
        format: {
          type: h.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: h.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: h.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: h.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: h.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency is for canvas preview only.`,
            },
          },
        },
        regularFont: { type: h.Font, title: `Regular`, controls: `extended` },
        regularColor: { type: h.Color, title: `↳ Color`, defaultValue: `#000` },
        saleFont: { type: h.Font, title: `Sale`, controls: `extended` },
        saleColor: { type: h.Color, title: `↳ Color`, defaultValue: `#FF0000` },
      }));
  });
function ce(e) {
  let {
      shopifyProductID: n,
      canvasPrice: u,
      format: { showCurrency: d, showSymbol: f, showDecimals: p, currencyCode: m } = {},
      strikethrough: h,
      strikethroughColor: v,
      strikethroughSize: y,
      font: b,
      color: x,
      compareAtPrefix: S = ``,
    } = e,
    [C, w] = a(),
    [T, E] = a(),
    [D, O] = a(``),
    [k, A] = a(``),
    [j, M] = a(``),
    [N, P] = a({}),
    [F, I] = a(``),
    L = ee(),
    R = s((e) => {
      if (!e) return e;
      let t = e?.variants?.edges;
      return Array.isArray(t)
        ? e
        : { ...e, variants: { ...(e.variants || {}), edges: Array.isArray(t) ? t : [] } };
    }, []);
  r(() => {
    if (!L) return;
    let e = localStorage.getItem(`selectedCurrency`),
      t = localStorage.getItem(`selectedCountryCode`),
      n = localStorage.getItem(`selectedCountry`);
    (O(e || `USD`), A(t || `US`), M(n || `United States`));
  }, [L]);
  let z = o(() => {
      let e = _(T, `price.currencyCode`),
        t = _(C, `priceRange.minVariantPrice.currencyCode`);
      return e || t || `USD`;
    }, [T, C]),
    B = o(
      () =>
        g !== void 0 &&
        (g.current() === g.canvas || (L && i.location.origin.endsWith(`framercanvas.com`))),
      [L]
    ),
    V = t(new Map()),
    H = s(
      (e) => {
        if (!e) return { min: null, max: null };
        let t = z || D || `USD`,
          n = `${e.id || `no-id`}-${t}-compare`;
        if (V.current.has(n)) return V.current.get(n);
        let r = _(e, `compareAtPriceRange.minVariantPrice.amount`),
          i = _(e, `compareAtPriceRange.maxVariantPrice.amount`),
          a = r ? parseFloat(r) : null,
          o = i ? parseFloat(i) : null;
        if (a === null || isNaN(a) || o === null || isNaN(o)) {
          let t = e?.variants?.edges || [];
          for (let e = 0; e < (Array.isArray(t) ? t.length : 0); e++) {
            let n = t[e]?.node;
            if (!n) continue;
            let r = _(n, `compareAtPrice.amount`),
              i = r ? parseFloat(r) : NaN;
            !isNaN(i) &&
              i > 0 &&
              ((a === null || i < a) && (a = i), (o === null || i > o) && (o = i));
          }
        }
        let s = {
          min: typeof a == `number` && !isNaN(a) ? a : null,
          max: typeof o == `number` && !isNaN(o) ? o : null,
        };
        return (V.current.set(n, s), s);
      },
      [z, D]
    ),
    U = o(() => H(C), [C, H]),
    W = (e, t) => {
      let n = ue(t),
        r = le(k),
        a =
          p === `Always show` || (p !== `Never show` && (p !== `Hide when .00` || e % 1 != 0))
            ? 2
            : 0;
      if (!f && !d)
        return new Intl.NumberFormat(r, {
          style: `decimal`,
          minimumFractionDigits: a,
          maximumFractionDigits: a,
        }).format(e);
      if (t === `USD` && f)
        if (L && /iPad|iPhone|iPod/.test(c.userAgent) && !(`MSStream` in i)) {
          let t = new Intl.NumberFormat(r, {
            style: `decimal`,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
          }).format(e);
          return d ? `$${t} USD` : `$${t}`;
        } else if (d)
          return `${new Intl.NumberFormat(r, { style: `currency`, currency: `USD`, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} USD`;
        else
          return new Intl.NumberFormat(r, {
            style: `currency`,
            currency: `USD`,
            minimumFractionDigits: a,
            maximumFractionDigits: a,
            currencyDisplay: `narrowSymbol`,
          }).format(e);
      return n && ((d && !f) || (f && !d) || (d && f))
        ? `${t} ${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)}`
        : !f && d
          ? `${new Intl.NumberFormat(r, { style: `decimal`, minimumFractionDigits: a, maximumFractionDigits: a }).format(e)} ${t}`
          : f && !d
            ? new Intl.NumberFormat(r, {
                style: `currency`,
                currency: t,
                minimumFractionDigits: a,
                maximumFractionDigits: a,
                currencyDisplay: `narrowSymbol`,
              }).format(e)
            : `${new Intl.NumberFormat(r, { style: `currency`, currency: t, minimumFractionDigits: a, maximumFractionDigits: a, currencyDisplay: `narrowSymbol` }).format(e)} ${t}`;
    },
    G = o(() => {
      if (!L) return ``;
      if (g !== void 0 && (g.current() === g.canvas || B)) {
        let e, t;
        if (u) {
          let n = u.split(`-`);
          Array.isArray(n) && n.length === 2
            ? ((e = n[0].trim()), (t = n[1].trim()))
            : ((e = u), (t = u));
        }
        let n = parseFloat(e),
          r = parseFloat(t),
          i = m || `USD`;
        if (n === r && n > 0 && r > 0) {
          let e = W(n, i);
          return S ? `${S} ${e}` : e;
        } else return ``;
      }
      let e = T && _(T, `compareAtPrice.amount`),
        { min: t, max: n } = U;
      if (!e && !T && !C?.compareAtPriceRange && !(t && n)) return ``;
      let r = D || m || `USD`;
      if (e) {
        let t = parseFloat(e);
        if (isNaN(t)) return ``;
        let n = W(t, r);
        return S ? `${S} ${n}` : n;
      }
      let i = Object.keys(N || {}).length > 0,
        a = T && Array.isArray(T.selectedOptions) && T.selectedOptions.length > 0;
      if (a && F === `purchase` && C?.variants?.edges?.length) return ``;
      let o = Array.isArray(C?.variants?.edges) && (C?.variants?.edges?.length || 0) > 0;
      if (i && !a && o) {
        let e = (C?.variants?.edges || []).filter(({ node: e }) =>
          e.selectedOptions.every((e) => !N[e.name] || N[e.name] === e.value)
        );
        if (Array.isArray(e) && e.length > 0) {
          let t = e
            .map(({ node: e }) => _(e, `compareAtPrice.amount`))
            .filter((e) => e && e !== `0` && e !== `0.00`);
          if (
            !Array.isArray(t) ||
            t.length === 0 ||
            !e.every(({ node: e }) => {
              let t = _(e, `compareAtPrice.amount`);
              return t && t !== `0` && t !== `0.00`;
            })
          )
            return ``;
          let n = t.map((e) => parseFloat(e)).filter((e) => !isNaN(e) && e > 0);
          if (!Array.isArray(n) || n.length === 0) return ``;
          let i = Math.min(...n),
            a = Math.max(...n);
          if (Math.abs(i - a) < 0.01) {
            let e = W(i, r);
            return S ? `${S} ${e}` : e;
          } else return ``;
        }
      }
      if (!T && !i && o) {
        if (
          !(C?.variants?.edges || []).every(({ node: e }) => {
            let t = _(e, `compareAtPrice.amount`);
            return t && t !== `0` && t !== `0.00`;
          })
        )
          return ``;
        let e = t,
          i = n;
        if (e && i)
          if (Math.abs(e - i) < 0.01) {
            let t = W(e, r);
            return S ? `${S} ${t}` : t;
          } else return ``;
        return ``;
      }
      return ``;
    }, [L, B, T, C, u, d, f, m, p, D, k, N, F, S, e.format]),
    K = o(() => (B ? u && u.trim() !== `` : G && G.trim() !== ``), [B, u, G]);
  return (
    r(() => {
      if (!L) return;
      let e = (e) => {
        let { currency: t, countryCode: r, country: a } = e.detail;
        (O(t), A(r), M(a));
        try {
          let e = (i.shopXtools?.products || []).find(
            ({ node: e }) => e.id === `gid://shopify/Product/${n}`
          );
          if (e && (w(R(e.node)), T)) {
            let t = (e?.node?.variants?.edges || []).find(({ node: e }) => {
              let t = Array.isArray(e?.selectedOptions) ? e.selectedOptions : [],
                n = Array.isArray(T?.selectedOptions) ? T.selectedOptions : [];
              return t.every((e) => n.some((t) => t?.name === e?.name && t?.value === e?.value));
            });
            t && E(t.node);
          }
        } catch {}
      };
      return (
        i.addEventListener(`currency_changed`, e),
        () => {
          i.removeEventListener(`currency_changed`, e);
        }
      );
    }, [L, n, T, D, k]),
    r(() => {
      if (!L) return;
      let e = (e) => {
          if (!(e.detail?.isPurchaseAction || e.detail?.onClickAction === `purchase`))
            try {
              let t = `gid://shopify/Product/${n}`;
              if (e.detail && (!e.detail.productId || e.detail.productId !== t)) return;
              if (
                (e.detail.productId !== t && I(e.detail.onClickAction),
                e.detail?.isCompleteVariant === !1)
              ) {
                if ((E(null), Array.isArray(e.detail.selectedOptions))) {
                  let t = {};
                  (e.detail.selectedOptions.forEach((e) => {
                    e?.name && (t[e.name] = e.value);
                  }),
                    P(t));
                }
                return;
              }
              let r = (i.shopXtools?.products || []).find(
                ({ node: e }) => e.id === `gid://shopify/Product/${n}`
              );
              if (r) {
                w(R(r.node));
                let t = (r?.node?.variants?.edges || []).find(({ node: t }) => {
                  let n = Array.isArray(t?.selectedOptions) ? t.selectedOptions : [],
                    r = Array.isArray(e.detail?.selectedOptions) ? e.detail.selectedOptions : [];
                  return n.every((e) =>
                    r.some((t) => t?.name === e?.name && t?.value === e?.value)
                  );
                });
                t
                  ? e.detail.onClickAction === `purchase`
                    ? (E(null),
                      P({ [e.detail.selectedOptions[0].name]: e.detail.selectedOptions[0].value }))
                    : (E(t.node), P({}))
                  : e.detail?.isCompleteVariant &&
                    (E(e.detail), e.detail.onClickAction !== `purchase` && P({}));
              }
            } catch {
              if (e.detail?.isCompleteVariant)
                (E(e.detail), e.detail.onClickAction !== `purchase` && P({}));
              else if ((E(null), Array.isArray(e.detail?.selectedOptions))) {
                let t = {};
                (e.detail.selectedOptions.forEach((e) => {
                  e?.name && (t[e.name] = e.value);
                }),
                  P(t));
              }
            }
        },
        t = (e) => {
          if (Array.isArray(e.detail.products)) {
            let t = e.detail.products.find(({ node: e }) => e.id === `gid://shopify/Product/${n}`);
            (w(t ? R(t.node) : null),
              Array.isArray(t?.node?.variants?.edges) &&
                (t?.node?.variants?.edges?.length || 0) === 1 &&
                E(t.node.variants.edges[0].node));
          }
        },
        r = (e) => {
          if (e.detail?.isPurchaseAction) return;
          let t = e.detail?.productId,
            r = `gid://shopify/Product/${n}`;
          (t && t !== r) ||
            (e.detail?.optionName &&
              e.detail?.value &&
              P({ [e.detail.optionName]: e.detail.value }));
        };
      if (
        ((async () => {
          try {
            let e = (i.shopXtools?.products || []).find(
              ({ node: e }) => e.id === `gid://shopify/Product/${n}`
            );
            e &&
              (w(R(e.node)),
              Array.isArray(e.node?.variants?.edges) &&
                (e?.node?.variants?.edges?.length || 0) === 1 &&
                E(e.node.variants.edges[0].node));
          } catch {}
        })(),
        i.shopXtools?.products)
      ) {
        let e = i.shopXtools.products;
        if (Array.isArray(e) && e.length > 0) {
          let t = e.find(({ node: e }) => e?.id === `gid://shopify/Product/${n}`);
          t?.node
            ? (w(R(t.node)),
              Array.isArray(t.node?.variants?.edges) &&
                (t?.node?.variants?.edges?.length || 0) === 1 &&
                E(t.node.variants.edges[0].node))
            : w(null);
        }
      }
      return (
        document.addEventListener(`data__products-ready`, t),
        document.addEventListener(`product__active-variant__changed`, e),
        document.addEventListener(`variant_option_selected`, r),
        document.addEventListener(`__variant_option_selected`, r),
        () => {
          (document.removeEventListener(`data__products-ready`, t),
            document.removeEventListener(`product__active-variant__changed`, e),
            document.removeEventListener(`variant_option_selected`, r),
            document.removeEventListener(`__variant_option_selected`, r));
        }
      );
    }, [L, n, D]),
    L
      ? K
        ? l(`div`, {
            style: {
              display: `inline-block`,
              maxWidth: `100%`,
              width: `auto`,
              whiteSpace: `nowrap`,
              overflow: `visible`,
              transform: `none`,
              transition: `none`,
              animation: `none`,
              willChange: `auto`,
            },
            children: l(`p`, {
              style: {
                ...b,
                color: x,
                margin: 0,
                padding: 0,
                lineHeight: 1,
                textDecoration: h ? `line-through` : `none`,
                textDecorationColor: v,
                textDecorationThickness: h ? `${y}px` : void 0,
                whiteSpace: `nowrap`,
                display: `inline-block`,
                width: `auto`,
                transform: `none`,
                transition: `none`,
                animation: `none`,
                willChange: `auto`,
              },
              children: G,
            }),
          })
        : null
      : l(`div`, { style: { display: `none` } })
  );
}
var le,
  ue,
  de = e(() => {
    (n(),
      d(),
      f(),
      p(),
      v(),
      y(),
      x(),
      (le = (e) => {
        if (e)
          return (
            {
              US: `en-US`,
              CA: `en-CA`,
              QC: `fr-CA`,
              GB: `en-GB`,
              FR: `fr-FR`,
              DE: `de-DE`,
              IT: `it-IT`,
              ES: `es-ES`,
              PT: `pt-PT`,
              NL: `nl-NL`,
              BE: `fr-BE`,
              LU: `fr-LU`,
              CH: `de-CH`,
              AT: `de-AT`,
              SE: `sv-SE`,
              NO: `nb-NO`,
              DK: `da-DK`,
              FI: `fi-FI`,
              PL: `pl-PL`,
              CZ: `cs-CZ`,
              HU: `hu-HU`,
              RU: `ru-RU`,
              CN: `zh-CN`,
              JP: `ja-JP`,
              KR: `ko-KR`,
              IN: `en-IN`,
              AU: `en-AU`,
              NZ: `en-NZ`,
              MX: `es-MX`,
              BR: `pt-BR`,
              AR: `es-AR`,
              CL: `es-CL`,
              CO: `es-CO`,
              PE: `es-PE`,
              AE: `ar-AE`,
              SA: `ar-SA`,
              ZA: `en-ZA`,
              IL: `he-IL`,
            }[e] || void 0
          );
      }),
      (ue = (e) => {
        if (!e) return !1;
        if (b.includes(e)) return !0;
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
      (ce.defaultProps = {
        shopifyProductID: ``,
        strikethrough: !0,
        strikethroughColor: `#000000`,
        strikethroughSize: 1,
        canvasPrice: `75.00`,
        compareAtPrefix: ``,
        format: {
          showCurrency: !0,
          showSymbol: !0,
          currencyCode: `USD`,
          showDecimals: `Always show`,
        },
      }),
      m(ce, {
        shopifyProductID: {
          type: h.String,
          title: `Product ID`,
          description: `Connect to CMS (required).`,
        },
        canvasPrice: {
          type: h.String,
          title: `Compare Price`,
          description: `Connect to CMS (for canvas preview only).`,
          defaultValue: `75.00`,
        },
        compareAtPrefix: { type: h.String, title: `Prefix`, placeholder: `was`, defaultValue: `` },
        format: {
          type: h.Object,
          title: `Format`,
          controls: {
            showSymbol: {
              type: h.Boolean,
              title: `Symbol`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `$, £, €, etc.`,
            },
            showCurrency: {
              type: h.Boolean,
              title: `Code`,
              defaultValue: !0,
              enabledTitle: `Show`,
              disabledTitle: `Hide`,
              description: `USD, EUR, CHF, etc.`,
            },
            showDecimals: {
              type: h.Enum,
              title: `Decimals`,
              defaultValue: `Always show`,
              options: [`Always show`, `Never show`, `Hide when .00`],
              optionTitles: [`Always show`, `Never show`, `Hide when .00`],
              displaySegmentedControl: !0,
              segmentedControlDirection: `vertical`,
            },
            currencyCode: {
              type: h.Enum,
              title: `Preview`,
              defaultValue: `USD`,
              options:
                `USD.EUR.GBP.CHF.JPY.CAD.AUD.CNY.HKD.NZD.SEK.KRW.SGD.NOK.MXN.INR.RUB.ZAR.TRY.BRL.TWD.DKK.PLN.THB.IDR.HUF.CZK.ILS.CLP.PHP.AED.COP.SAR.MYR.RON`.split(
                  `.`
                ),
              description: `Currency on your site is automatic, this is only shown in canvas preview.`,
            },
          },
        },
        font: { type: h.Font, title: `Font`, controls: `extended` },
        color: { type: h.Color, title: `Color`, defaultValue: `#000` },
        strikethrough: { type: h.Boolean, title: `Strike`, defaultValue: !0 },
        strikethroughSize: {
          type: h.Number,
          title: `↳ Size`,
          defaultValue: 1,
          min: 0,
          max: 8,
          step: 0.1,
          hidden: (e) => !e.strikethrough,
        },
        strikethroughColor: {
          type: h.Color,
          title: `↳ Color`,
          defaultValue: `#000000`,
          hidden: (e) => !e.strikethrough,
        },
      }));
  });
export {
  k as C,
  T as D,
  w as E,
  x as O,
  F as S,
  C as T,
  P as _,
  re as a,
  M as b,
  ie as c,
  B as d,
  V as f,
  E as g,
  N as h,
  se as i,
  b as k,
  U as l,
  D as m,
  de as n,
  q as o,
  H as p,
  ae as r,
  K as s,
  ce as t,
  z as u,
  I as v,
  j as w,
  O as x,
  A as y,
};
//# sourceMappingURL=FC_ProductPriceCompare.Cn_pDsnu.mjs.map
