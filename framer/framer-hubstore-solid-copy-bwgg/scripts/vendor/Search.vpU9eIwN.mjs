import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  D as r,
  F as i,
  H as a,
  I as o,
  P as s,
  R as c,
  S as l,
  T as u,
  V as d,
  b as f,
  i as p,
  j as m,
  l as h,
  o as g,
  s as _,
  u as v,
  v as ee,
  w as y,
} from "./react.ClsXD4bF.mjs";
import { P as b, h as x, n as S, t as C, w } from "./motion.ClyXVVeQ.mjs";
import {
  M as T,
  Ot as E,
  T as D,
  Tt as te,
  Y as ne,
  Z as re,
  o as O,
  yt as ie,
} from "./framer.CbUxDv78.mjs";
function k(e) {
  return h(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 256 256`,
    width: e.width,
    height: e.height,
    style: { ...e.style, color: e.color },
    children: h(`path`, {
      d: `M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z`,
      fill: `currentColor`,
    }),
  });
}
function A(e) {
  return v(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    viewBox: `0 0 256 256`,
    ...e,
    children: [
      h(`rect`, { width: `256`, height: `256`, fill: `none` }),
      h(`path`, {
        d: `M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z`,
        fill: `currentColor`,
      }),
    ],
  });
}
function ae(e) {
  return v(`div`, {
    style: { position: `relative`, ...e.style },
    children: [
      h(w.div, {
        animate: { rotate: 360 },
        transition: { ease: `linear`, duration: 1, repeat: 1 / 0 },
        style: {
          borderRadius: 100,
          backgroundImage: `conic-gradient(from 270deg, transparent 0%, ${e.color} 100%)`,
          width: `100%`,
          height: `100%`,
        },
      }),
      h(`div`, {
        style: {
          backgroundColor: e.backgroundColor,
          borderRadius: 100,
          position: `absolute`,
          top: 3,
          left: 3,
          bottom: 3,
          right: 3,
        },
      }),
    ],
  });
}
var j = e(() => {
  (_(), C());
});
function M(e) {
  this.ready = new Promise((e, t) => {
    var n = a.indexedDB.open(location.origin);
    ((n.onupgradeneeded = (e) => {
      ((this.db = e.target.result), this.db.createObjectStore(`store`));
    }),
      (n.onsuccess = (t) => {
        ((this.db = t.target.result), e());
      }),
      (n.onerror = (e) => {
        ((this.db = e.target.result), t(e));
      }));
  });
}
var oe = e(() => {
  (n(),
    (M.prototype.get = function (e) {
      return this.ready.then(
        () =>
          new Promise((t, n) => {
            var r = this.getStore().get(e);
            ((r.onsuccess = (e) => t(e.target.result)), (r.onerror = n));
          })
      );
    }),
    (M.prototype.getStore = function () {
      return this.db.transaction([`store`], `readwrite`).objectStore(`store`);
    }),
    (M.prototype.set = function (e, t) {
      return this.ready.then(
        () =>
          new Promise((n, r) => {
            var i = this.getStore().put(t, e);
            ((i.onsuccess = n), (i.onerror = r));
          })
      );
    }),
    (M.prototype.delete = function (e, t) {
      a.indexedDB.deleteDatabase(location.origin);
    }));
});
async function N(e, t, n = new M(`cache`)) {
  let r = e;
  await n.set(r, t);
}
async function P(e, t = new M(`cache`)) {
  let n = e;
  return (await t.get(n)) || null;
}
var se = e(() => {
    oe();
  }),
  ce = e(() => {
    se();
  });
function F(e) {
  return !e || e === "default";
}
function I(e) {
  return F(e) ? de : `${de}-${e}`;
}
function L(e) {
  return F(e) ? fe : `${fe}-${e}`;
}
async function R(e, t) {
  let n = L(e),
    r = I(e),
    [i, a] = await Promise.all([P(n), P(r)]);
  return a
    ? { status: t && i?.indexHash === t ? `fresh` : `stale`, searchIndex: a }
    : { status: `miss` };
}
function le(e, t, n) {
  N(I(e), t);
  let r = { version: ue, timestamp: Date.now(), indexHash: n };
  N(L(e), r);
}
var ue,
  de,
  fe,
  pe = e(() => {
    (ce(), (ue = 1), (de = `searchIndexCache`), (fe = `searchCacheMetadata`));
  }),
  me,
  he = e(() => {
    me = {
      "/": {
        version: 1,
        title: `Example Search Result`,
        description: `Description of search result.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/`,
        codeblock: [],
      },
      "/example-1": {
        version: 1,
        title: `Publish your Site to Search`,
        description: `Try Site Search to instantly search your Framer site content.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/1/`,
        codeblock: [],
      },
      "/example-2": {
        version: 1,
        title: `Customise your Site Search`,
        description: `Personalize everything from corner radius, to icon weight.`,
        keywords: ``,
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        p: [],
        url: `/example-url/2/`,
        codeblock: [],
      },
    };
  }),
  z,
  ge,
  _e,
  B,
  ve = e(() => {
    ((z = new Uint32Array(65536)),
      (ge = (e, t) => {
        let n = e.length,
          r = t.length,
          i = 1 << (n - 1),
          a = -1,
          o = 0,
          s = n,
          c = n;
        for (; c--;) z[e.charCodeAt(c)] |= 1 << c;
        for (c = 0; c < r; c++) {
          let e = z[t.charCodeAt(c)],
            n = e | o;
          ((e |= ((e & a) + a) ^ a),
            (o |= ~(e | a)),
            (a &= e),
            o & i && s++,
            a & i && s--,
            (o = (o << 1) | 1),
            (a = (a << 1) | ~(n | o)),
            (o &= n));
        }
        for (c = n; c--;) z[e.charCodeAt(c)] = 0;
        return s;
      }),
      (_e = (e, t) => {
        let n = t.length,
          r = e.length,
          i = [],
          a = [],
          o = Math.ceil(n / 32),
          s = Math.ceil(r / 32);
        for (let e = 0; e < o; e++) ((a[e] = -1), (i[e] = 0));
        let c = 0;
        for (; c < s - 1; c++) {
          let o = 0,
            s = -1,
            l = c * 32,
            u = Math.min(32, r) + l;
          for (let t = l; t < u; t++) z[e.charCodeAt(t)] |= 1 << t;
          for (let e = 0; e < n; e++) {
            let n = z[t.charCodeAt(e)],
              r = (a[(e / 32) | 0] >>> e) & 1,
              c = (i[(e / 32) | 0] >>> e) & 1,
              l = n | o,
              u = ((((n | c) & s) + s) ^ s) | n | c,
              d = o | ~(u | s),
              f = s & u;
            ((d >>> 31) ^ r && (a[(e / 32) | 0] ^= 1 << e),
              (f >>> 31) ^ c && (i[(e / 32) | 0] ^= 1 << e),
              (d = (d << 1) | r),
              (f = (f << 1) | c),
              (s = f | ~(l | d)),
              (o = d & l));
          }
          for (let t = l; t < u; t++) z[e.charCodeAt(t)] = 0;
        }
        let l = 0,
          u = -1,
          d = c * 32,
          f = Math.min(32, r - d) + d;
        for (let t = d; t < f; t++) z[e.charCodeAt(t)] |= 1 << t;
        let p = r;
        for (let e = 0; e < n; e++) {
          let n = z[t.charCodeAt(e)],
            o = (a[(e / 32) | 0] >>> e) & 1,
            s = (i[(e / 32) | 0] >>> e) & 1,
            c = n | l,
            d = ((((n | s) & u) + u) ^ u) | n | s,
            f = l | ~(d | u),
            m = u & d;
          ((p += (f >>> (r - 1)) & 1),
            (p -= (m >>> (r - 1)) & 1),
            (f >>> 31) ^ o && (a[(e / 32) | 0] ^= 1 << e),
            (m >>> 31) ^ s && (i[(e / 32) | 0] ^= 1 << e),
            (f = (f << 1) | o),
            (m = (m << 1) | s),
            (u = m | ~(c | f)),
            (l = f & c));
        }
        for (let t = d; t < f; t++) z[e.charCodeAt(t)] = 0;
        return p;
      }),
      (B = (e, t) => {
        if (e.length < t.length) {
          let n = t;
          ((t = e), (e = n));
        }
        return t.length === 0 ? e.length : e.length <= 32 ? ge(e, t) : _e(e, t);
      }));
  });
function ye(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function V(e) {
  return (e.match(Oe) || []).map(ye).join(` `);
}
function be(e, t) {
  let n = e.length;
  if (n <= t) return e;
  let r = e.slice(0, t);
  return n > t ? r + `…` : r;
}
function xe(e) {
  return Object.keys(e).length === 0;
}
function Se(e) {
  function t(...e) {
    console.log(Date.now(), ...e);
  }
  function n(e) {
    console.time(e);
  }
  function r(e) {
    console.timeEnd(e);
  }
  function i() {}
  return e ? { log: t, time: n, timeEnd: r } : { log: i, time: i, timeEnd: i };
}
function Ce(e) {
  return e.inputFont?.fontFamily
    ? e.inputFont.fontFamily
    : e.titleFont?.fontFamily
      ? e.titleFont.fontFamily
      : e.subtitleFont?.fontFamily
        ? e.subtitleFont.fontFamily
        : U;
}
function H(e) {
  return `${e}Animation`;
}
function we() {
  let e = ke?.querySelector(je);
  if (e) return e.getAttribute(`content`);
}
function Te(e, t) {
  if (!t) return e;
  let n = `/${t}`;
  if (e.startsWith(n)) return e.slice(n.length);
}
function Ee(e) {
  if (`scheduler` in a) {
    let t = { priority: e ? `user-blocking` : `user-visible` };
    if (`yield` in scheduler) return scheduler.yield(t);
    if (`postTask` in scheduler) return scheduler.postTask(() => {}, t);
  }
  return e
    ? Promise.resolve()
    : new Promise((e) => {
        setTimeout(e, 0);
      });
}
var De,
  Oe,
  U,
  ke,
  Ae,
  je,
  Me,
  Ne = e(() => {
    (n(),
      (De = a !== void 0 && a.localStorage.getItem(`__framerDebugSearch`) === `true`),
      (Oe = /[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]\d*|\d+/gu),
      (U = `"Inter", system-ui, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`),
      (ke = typeof document < `u` ? document : null),
      (Ae = a === void 0 ? null : a),
      (je = `meta[name="framer-search-index"]`),
      (Me = () => we() === `limit-reached`));
  });
function Pe(e) {
  try {
    return (new URL(e), !0);
  } catch {
    return !1;
  }
}
function Fe(e) {
  return e.split(Je);
}
function W(e) {
  let t = Fe(e).filter((e) => e.trim() && e.length > 0);
  return new Set(t);
}
function G(e) {
  return Array.isArray(e) ? e.map(G) : e.normalize(`NFD`).replace(Ye, ``).toLowerCase();
}
function Ie(e) {
  let t = Xe.get(e);
  if (t) return t;
  let n = Le(e);
  return (Xe.set(e, n), n);
}
function Le(e) {
  let t = {};
  for (let n in e)
    if (e.hasOwnProperty(n)) {
      let r = e[n];
      if (typeof r == `string`) {
        t[n] = G(r);
        continue;
      }
      if (Array.isArray(r)) {
        t[n] = G(r);
        continue;
      }
      t[n] = r;
    }
  return t;
}
function Re(e, t, n) {
  let r = { ...e };
  return (t < r.start && (r.start = t), n > r.end && (r.end = n), r);
}
function ze(e, t, n, r) {
  let i = 0,
    a = { title: { start: 1 / 0, end: 0 }, description: { start: 1 / 0, end: 0 } },
    o = W(e.url);
  if (
    (o.has(t) && (i += 10),
    n.size === 1 && o.size === 1 && o.values().next().value === t && (i += i * 5),
    i > 0)
  ) {
    let t = e.url.split(`/`).length;
    i += x(10 - t, 0, t);
  }
  let s = W(e.title);
  s.has(t) && (i += 10);
  let c = e.title.indexOf(t);
  (c !== -1 && ((i += 10), (a.title = Re(a.title, c, c + t.length))),
    B(e.title, r) <= 2 && (i += i * 10));
  for (let e of s) B(t, e) <= 2 && (i += 10);
  let l = [...e.h1, ...e.h2, ...e.h3, ...e.h4, ...e.h5, ...e.h6];
  for (let e of l) {
    let n = W(e);
    (B(e, r) <= 2 && (i += i * 10),
      e.startsWith(t) && (i += 10),
      n.has(t) && (i += 10),
      e.includes(t) && (i += 1));
    for (let e of n) B(t, e) <= 2 && (i += 1);
  }
  let u = e.description.indexOf(t);
  u !== -1 && ((i += 10), (a.description = Re(a.description, u, u + t.length)));
  for (let n of e.p) n.includes(t) && (i += 0.5);
  for (let n of e.codeblock)
    (B(n, r) <= 2 && (i *= 10), n.includes(r) && (i += 10), n.includes(t) && (i += 0.5));
  return { score: i, match: a };
}
function Be(e, t) {
  let n = Ie(e),
    r = W(t),
    i = 0;
  for (let e of r) {
    let { score: a } = ze(n, e, r, t);
    i += a;
  }
  return i;
}
function Ve(e, t, n) {
  let r = m(null),
    [i, a] = c(null),
    [, o] = f();
  return (
    s(() => {
      if (!t || !e) return;
      r.current && r.current.abort();
      let i = new AbortController();
      ((r.current = i),
        He(e, t, n, r.current.signal).then((e) => {
          i.signal.aborted ||
            ((r.current = null),
            o(() => {
              a(e);
            }));
        }));
    }, [e, t]),
    { results: i ?? [] }
  );
}
async function He(e, t, n, r) {
  let i = Ae?.location.pathname;
  Ke(`query`);
  let a = G(t),
    o = [],
    s = Object.values(e),
    c = performance.now() + q;
  async function l() {
    performance.now() >= c && (await Ee(), (c = performance.now() + q));
  }
  for (let e = 0; e < s.length; ++e) {
    if ((performance.now() >= c && (await l(), (c = performance.now() + q)), r?.aborted)) return [];
    let t = s[e],
      u = Be(t, a);
    if (u > (n.minimumScore || 0) && (!i || t.url !== i)) {
      let e = t.h1.length && t.h1[0],
        r = n?.titleType === Z.Title ? t.title : e || t.title;
      o.push({
        url: t.url,
        title: r,
        description: t.description,
        body: [...t.p, t.codeblock].join(` `),
        score: u,
      });
    }
  }
  return (
    await l(),
    r?.aborted || (o.sort((e, t) => t.score - e.score), qe(`query`), await l(), r?.aborted)
      ? []
      : o.slice(0, 20)
  );
}
function Ue(e, t, n) {
  let r = {},
    i = t.includes(`:`),
    a = t.split(`:`)[0],
    o = a.length > 1 ? a : ``;
  for (let t in e) Te(t, n).startsWith(o) && ((i && t.length <= o.length) || (r[t] = e[t]));
  return r;
}
function We(e, t) {
  let [n, r] = c({}),
    [i, a] = c(`loading`),
    { results: s } = Ve(n, e, t),
    { activeLocale: l } = ie(),
    u = l?.id;
  function d(e, n = { ignoreScope: !1 }) {
    let i = e;
    (t.urlScope &&
      !n.ignoreScope &&
      ((i = Ue(e, t.urlScope, l?.slug)), K(`Using URL scope`, t.urlScope)),
      r(i));
  }
  return (
    o(() => {
      async function e() {
        a(`loading`);
        let e = ke?.querySelector(`meta[name="framer-search-index"]`);
        if (!e) {
          (a(`no-meta-tag-found`), d(me, { ignoreScope: !0 }), K(`No meta tag found`));
          return;
        }
        let t = e.getAttribute(`content`),
          n = await R(u, t),
          r = t === `limit-reached`;
        if (
          (r && K(`Page limit for plan exceeded`),
          n.status !== `miss` &&
            !r &&
            (d(n.searchIndex),
            a(`loading-with-cache`),
            K(`Using cached index`),
            n.status === `fresh`))
        )
          return;
        if (!t || !Pe(t)) {
          (K(`Meta tag exists but URL is not valid yet`),
            n.status === `miss`
              ? (a(`pending-index-generation`),
                K(`No cache to use, page reload required to check for meta tag`))
              : K(`Continue using cache`));
          return;
        }
        let i = Ge(t, u),
          o = await fetch(i);
        if (!o.ok) throw Error(o.statusText);
        let s = await o.json();
        (d(s), le(u, s, t), a(`success`), K(`Using downloaded index`));
      }
      e().catch((e) => {
        (a(`error`), K(`Failed to load search index`, e));
      });
    }, [u]),
    K({ status: i, results: s }),
    { results: s, status: i }
  );
}
function Ge(e, t) {
  return F(t) ? e : e.replace(`.json`, `-${t}.json`);
}
var K,
  Ke,
  qe,
  Je,
  Ye,
  Xe,
  q,
  Ze = e(() => {
    (re(),
      C(),
      r(),
      kt(),
      pe(),
      he(),
      ve(),
      Ne(),
      ({ log: K, time: Ke, timeEnd: qe } = Se(De)),
      (Je = (() => {
        try {
          let e = RegExp(`[\\s.,;!?\\p{P}\\p{Z}]+(?<!\\p{L}&)(?!&\\p{L})`, `u`);
          return (``.split(e), e);
        } catch {
          return (
            K(`Falling back to regex without lookbehind`),
            RegExp(`[\\s.,;!?\\p{P}\\p{Z}]+`, `u`)
          );
        }
      })()),
      (Ye = /[\u0300-\u036f]/g),
      (Xe = new WeakMap()),
      (q = 32));
  }),
  J,
  Qe = e(() => {
    (n(),
      (function (e) {
        var t = (e.isTouch = () => `ontouchstart` in a || d.maxTouchPoints > 0),
          n = (e.isChrome = () => d.userAgent.toLowerCase().includes(`chrome/`)),
          r = (e.isWebKit = () => d.userAgent.toLowerCase().includes(`applewebkit/`)),
          i = (e.isSafari = () => r() && !n());
        ((e.isSafariDesktop = () => i() && !t()),
          (e.isWindows = () => /Win/.test(d.platform)),
          (e.isMacOS = () => /Mac/.test(d.platform)));
      })((J ||= {})));
  }),
  $e,
  et = e(() => {
    (r(),
      Qe(),
      ($e = (e, t) => {
        let n = m(null);
        return i(
          (r) => {
            if (!J.isSafari()) return e(r);
            let i = t || n,
              { clientX: a, clientY: o } = r,
              s = i.current;
            if (((i.current = { x: a, y: o }), s && (s.x !== a || s.y !== o))) return e(r);
          },
          [t, e]
        );
      }));
  });
function tt(e, t, { offsetTop: n, offsetBottom: r }) {
  let i = e.getBoundingClientRect(),
    a = t.getBoundingClientRect();
  if (i.top < a.top) {
    let e = a.top - i.top;
    t.scrollTop = t.scrollTop - e - n;
  } else if (i.bottom > a.bottom) {
    let e = a.top - i.top,
      o = t.scrollTop - e - n,
      s = i.bottom - a.bottom,
      c = t.scrollTop + s + r;
    t.scrollTop = Math.min(o, c);
  }
}
var nt = e(() => {});
function rt({ theme: e, type: t, onClick: n, text: r }) {
  let i =
    t === `icon`
      ? h(A, {
          style: { color: e.inputIconColor, width: e.inputIconSize, height: e.inputIconSize },
        })
      : r;
  return h(`div`, {
    style: {
      flexShrink: 0,
      fontSize: e && e.titleFont && e.titleFont.fontSize ? e.titleFont.fontSize : 15,
    },
    children: h(`button`, {
      className: `__framer-search-clear-button`,
      onClick: n,
      style: {
        fontFamily: `inherit`,
        border: `none`,
        background: `none`,
        cursor: `pointer`,
        display: `flex`,
        textTransform: `uppercase`,
        color: e.inputIconColor,
        fontSize: `0.75em`,
        padding: 0,
      },
      children: i,
    }),
  });
}
function it({ theme: e, type: t }) {
  let n = { background: e.foregroundColor, height: 1, flexShrink: 0, opacity: 0.05 };
  return (
    t === `contained` &&
      e &&
      ((n.marginLeft = e.horizontalSpacing), (n.marginRight = e.horizontalSpacing)),
    h(`div`, { style: n })
  );
}
function at({ onClick: e }) {
  return h(`div`, { style: { width: `100%`, flexBasis: `20vh` }, onClick: e });
}
function ot({ layoutType: e, theme: t, onKeyDown: n, onDismiss: r, children: i, modalOptions: a }) {
  let o = lt(e, t),
    s = {
      ..._t,
      ...o,
      willChange: `transform`,
      marginTop: e === `FixedTop` ? t.offsetTop : 0,
      height: e === `Sidebar` ? `100%` : `auto`,
      maxHeight: e === `QuickMenu` ? `100%` : `none`,
      justifyContent: e === `Sidebar` ? `flex-end` : `flex-start`,
      flexDirection: e === `Sidebar` ? `column-reverse` : `column`,
    },
    c = {
      ..._t,
      ...o,
      height: e === `Sidebar` ? `100%` : `auto`,
      maxHeight: e === `QuickMenu` ? `100%` : `none`,
      gap: e === `Sidebar` ? 0 : t.gapBetweenStatusAndSearch,
      backgroundColor: e === `Sidebar` ? t.backgroundColor : `transparent`,
      justifyContent: e === `Sidebar` ? `flex-end` : `flex-start`,
      flexDirection: e === `Sidebar` ? `column-reverse` : `column`,
      originX: 0.5,
      originY: 0.5,
    };
  function l() {
    switch (e) {
      case `FixedTop`: {
        let e = H(`FixedTop`);
        return (
          (a ? a[e] : void 0) || {
            y: -10,
            opacity: 0.2,
            transition: { duration: J.isTouch() ? 0 : 0.15 },
          }
        );
      }
      case `QuickMenu`: {
        let e = H(`QuickMenu`);
        return (
          (a ? a[e] : void 0) || {
            scale: 0.95,
            opacity: 0,
            y: 0,
            x: 0,
            rotate: 0,
            transition: { type: `spring`, stiffness: 600, damping: 40 },
          }
        );
      }
      case `Sidebar`: {
        let e = H(`Sidebar`);
        return (a ? a[e] : void 0) || { x: -10, opacity: 0, transition: { duration: 0.15 } };
      }
    }
  }
  let u = l();
  return v(`div`, {
    style: s,
    onKeyDown: n,
    onClick: (e) => e.stopPropagation(),
    children: [
      e === `QuickMenu` && h(at, { onClick: r }),
      h(w.div, {
        initial: u,
        animate: { opacity: 1, scale: 1, x: 0, y: 0, rotate: 0 },
        transition: u ? u.transition : void 0,
        exit: { opacity: 0, transition: { duration: 0 } },
        style: c,
        children: i,
      }),
    ],
  });
}
function st({
  layoutType: e,
  theme: t,
  children: n,
  heightIsStatic: r,
  heightTransition: i,
  heightDeps: a,
}) {
  let o = {
      willChange: `transform`,
      backgroundColor: t.backgroundColor,
      color: t.foregroundColor,
      borderRadius: e === `QuickMenu` ? t.borderRadius : 0,
      width: `100%`,
      display: `flex`,
      flexDirection: `column`,
      overflow: `hidden`,
      boxShadow: e === `Sidebar` ? void 0 : t.shadow,
      maxHeight: e === `QuickMenu` ? `min(${ft}px, calc(100vh - 30px))` : void 0,
    },
    [s, c] = b();
  return (
    u(() => {
      if (e !== `QuickMenu` || r) return;
      let t = s.current.offsetHeight;
      s.current.style.height = `auto`;
      let n = s.current.offsetHeight;
      ((s.current.style.height = t + `px`), c(s.current, { height: [t, n] }, i));
    }, a),
    h(`div`, {
      ref: s,
      role: `dialog`,
      className: e === `FixedTop` ? `__framer-max-height-80dvh` : void 0,
      style: o,
      children: n,
    })
  );
}
function ct({ status: e, layoutType: t, theme: n }) {
  let r = Math.floor(n ? n.horizontalSpacing * Y : 0),
    i = {
      ...yt,
      userSelect: `none`,
      fontFamily: Ce(n),
      paddingLeft: n && n.horizontalSpacing,
      paddingRight: n && n.horizontalSpacing,
      fontWeight: 500,
      lineHeight: `calc(${n.inputFontSize} * 2)`,
      paddingTop: r,
      paddingBottom: r,
      ...n.titleFont,
      zIndex: n.zIndex + 1,
      maxWidth: t === `FixedTop` ? `none` : n.width,
      width: t === `FixedTop` ? `calc(100% - ${r * 2}px` : `100%`,
      boxShadow: t !== `Sidebar` && yt.boxShadow,
      borderRadius: t !== `Sidebar` && n.borderRadius,
    };
  return e === `no-meta-tag-found`
    ? h(`div`, {
        style: i,
        children: t === `FixedTop` ? `Preview Mode` : `Preview Mode. Publish your Site to Search.`,
      })
    : e === `pending-index-generation`
      ? h(`div`, { style: i, children: `Site is being indexed` })
      : null;
}
function lt(e, t) {
  switch (e) {
    case `Sidebar`:
      return { ...St, width: t.width };
    case `FixedTop`:
      return Ct;
    case `QuickMenu`:
      return { ...wt, width: t.width };
  }
}
function ut(e) {
  let {
      layoutType: n,
      theme: r,
      urlScope: s,
      inputOptions: l,
      backdropOptions: u,
      modalOptions: d,
      resultOptions: f,
      onDismiss: p,
    } = e,
    { activeLocale: g } = ie();
  g?.id;
  let _ = g?.slug,
    ee = m(),
    y = m(),
    b = m(),
    [S, C] = c({ index: 0, scroll: !0 }),
    w = m(null),
    [T, E] = c(J.isTouch),
    [D, re] = c(``),
    O = t(D),
    { results: k, status: A } = We(O, { minimumScore: 0, urlScope: s, titleType: f.titleType }),
    ae = k[S.index],
    j = Math.floor(r ? r.horizontalSpacing * Y : 0);
  o(() => {
    C({ index: 0, scroll: !0 });
  }, [O]);
  let M = i((e, t) => {
      e.pointerType === `touch` && (E(!0), C({ index: t, scroll: !1 }));
    }, []),
    oe = i((e, t) => {
      C((e) => (e.index === t ? e : { index: t, scroll: !1 }));
    }, []),
    N = te(),
    P = i(
      async (e) => {
        if (A !== `no-meta-tag-found`)
          try {
            let { routeId: t, pathVariables: n } = ne(N.routes, e),
              r = N.getRoute?.(t);
            (p(), await r?.page?.preload?.(), N.navigate?.(t, null, n, !1));
          } catch {
            a.location.href = e;
          }
      },
      [A]
    ),
    se = (e) => {
      let t = k.length - 1;
      switch (e.code) {
        case `ArrowUp`:
          if ((e.preventDefault(), T)) {
            E(!1);
            break;
          }
          C((e) => ({ index: x(0, t, e.index - 1), scroll: !0 }));
          break;
        case `ArrowDown`:
          if ((e.preventDefault(), T)) {
            E(!1);
            break;
          }
          C((e) => ({ index: x(0, t, e.index + 1), scroll: !0 }));
          break;
        case `Escape`:
          break;
        case `Enter`:
          ae && P(ae.url);
          break;
        default:
          e.stopPropagation();
      }
    },
    ce = k.length === 0 && O.length > 1 && A !== `loading`,
    F = !!(
      ((O.length > 0 && k.length > 0) || ce) &&
      A !== `loading` &&
      e.inputOptions &&
      e.inputOptions.dividerType !== `none`
    ),
    I = !!(e.resultOptions && e.resultOptions.itemType === `contained`),
    L = I ? r.spacing : 10,
    R = F && I ? L + r.gapBetweenResults * 2 : 0;
  return (
    o(() => {
      if (!S.scroll) return;
      let e = y.current;
      e && tt(e, b.current, { offsetTop: F && I ? R : 0, offsetBottom: I ? L : 0 });
    }, [S]),
    v(ot, {
      layoutType: n,
      modalOptions: d,
      theme: r,
      onKeyDown: se,
      onDismiss: p,
      children: [
        v(st, {
          layoutType: n,
          theme: r,
          heightIsStatic: d.heightIsStatic,
          heightTransition: d.heightTransition,
          heightDeps: [k.length, ce],
          children: [
            h(pt, {
              autofocus: !0,
              ref: ee,
              onChange: re,
              value: D,
              theme: r,
              status: A,
              iconType: l.iconOptions.iconType,
              placeholder: l.placeholderOptions.placeholderText,
              clearButtonType: l ? l.clearButtonType : void 0,
              clearButtonText: l.clearButtonText,
            }),
            F && h(it, { theme: r, type: l.dividerType }),
            h(vt, {
              ref: b,
              theme: r,
              children: v(`ul`, {
                "aria-live": `polite`,
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  width: `calc(100% - ${r.scrollBarWidth}px)`,
                  padding: 0,
                  paddingTop: R,
                  paddingBottom: k.length && I ? L : 0,
                  gap: r.gapBetweenResults,
                  margin: 0,
                },
                children: [
                  k.map((t, n) => {
                    let i = n === S.index;
                    return h(
                      gt,
                      {
                        ref: i ? y : null,
                        index: n,
                        result: t,
                        prevMousePositionRef: w,
                        selected: !T && i,
                        type: e.resultOptions.itemType,
                        subtitleType: e.resultOptions.subtitleOptions.subtitleType,
                        theme: r,
                        localeSlug: _,
                        onMouseMove: oe,
                        onPointerDown: M,
                        onNavigateTo: P,
                      },
                      t.url
                    );
                  }),
                  ce &&
                    h(`li`, {
                      style: {
                        paddingTop: j - R,
                        paddingBottom: j,
                        lineHeight: `2em`,
                        paddingLeft: r && r.horizontalSpacing,
                        paddingRight: r && r.horizontalSpacing,
                        height: `100%`,
                      },
                      children: h(`h3`, {
                        style: {
                          ...bt,
                          textAlign: `center`,
                          lineHeight: `calc(${r.inputFontSize} * 2)`,
                          color: r.subtitleColor,
                          ...r.titleFont,
                        },
                        children: `No results`,
                      }),
                    }),
                ],
              }),
            }),
          ],
        }),
        h(ct, { status: A, layoutType: n, theme: r }),
      ],
    })
  );
}
var dt,
  ft,
  Y,
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
  Ct,
  wt,
  X,
  Tt,
  Z,
  Et,
  Dt,
  Q,
  Ot,
  $,
  kt = e(() => {
    (n(),
      _(),
      Ze(),
      r(),
      Qe(),
      C(),
      j(),
      Ne(),
      et(),
      nt(),
      re(),
      (dt = 120),
      (ft = 496),
      (Y = 0.6),
      (pt = ee(function (e, t) {
        let {
            value: n = ``,
            status: r,
            autofocus: i,
            theme: a,
            placeholder: s,
            iconType: u,
            clearButtonType: d,
            onChange: f,
          } = e,
          [p, g] = c(n),
          [_, ee] = c(!1),
          b = m();
        (l(t, () => b.current),
          y.useLayoutEffect(
            () => () => {
              let e = b.current;
              !e || e !== document.activeElement || e.blur();
            },
            []
          ));
        let x = () => {
            b.current && b.current.focus();
          },
          S = () => {
            g(``);
          };
        (o(() => {
          f(p);
        }, [p]),
          p.length);
        let C = p.length > 0 && d && d !== `none`,
          w = Math.floor(a ? a.horizontalSpacing * Y : 0),
          T =
            u === `custom` && a.inputIconImage
              ? h(`img`, {
                  alt: `icon alongside the Site Search input`,
                  src: a.inputIconImage.src,
                  width: a.inputIconSize,
                  height: a.inputIconSize,
                  decoding: `async`,
                })
              : h(k, { color: a.inputIconColor, width: a.inputIconSize, height: a.inputIconSize });
        return v(`div`, {
          role: `search`,
          style: {
            ...mt,
            fontFamily: Ce(a),
            paddingLeft: a && a.horizontalSpacing,
            paddingRight: a && a.horizontalSpacing,
            gap: 12,
            paddingTop: w,
            paddingBottom: w,
            touchAction: `none`,
          },
          onClick: x,
          children: [
            h(`div`, {
              style: { flexShrink: 0, display: `flex` },
              children:
                r === `loading` && p
                  ? h(ae, {
                      color: a.inputIconColor,
                      backgroundColor: a.backgroundColor,
                      style: { height: a && a.inputIconSize, width: a && a.inputIconSize },
                    })
                  : T,
            }),
            h(`input`, {
              ref: b,
              spellCheck: !1,
              autoFocus: i,
              style: {
                ...ht,
                WebkitTapHighlightColor: `rgba(0,0,0,0)`,
                color: a.foregroundColor,
                lineHeight: `2em`,
                verticalAlign: `baseline`,
                ...a.titleFont,
                ...a.inputFont,
                fontSize: a.inputFontSize,
                "--framer-search-placeholder-color": a.placeholderColor,
              },
              onFocus: () => {
                let e = document.documentElement.scrollTop;
                document.documentElement.scrollTop = e;
              },
              placeholder: s,
              value: p,
              onChange: () => g(b.current.value),
            }),
            C && h(rt, { theme: a, type: e.clearButtonType, text: e.clearButtonText, onClick: S }),
          ],
        });
      })),
      (mt = { display: `inline-flex`, alignItems: `center`, flexShrink: 0 }),
      (ht = {
        outline: `none`,
        border: `none`,
        background: `transparent`,
        fontWeight: 500,
        height: `2em`,
        padding: 0,
        width: `100%`,
      }),
      (gt = y.memo(
        y.forwardRef(function (e, t) {
          let {
              index: n,
              result: r,
              prevMousePositionRef: i,
              type: a = `contained`,
              subtitleType: o = `path`,
              selected: c = !1,
              theme: l,
              localeSlug: u,
              style: d,
              onMouseMove: f,
              onPointerDown: p,
              onNavigateTo: m,
            } = e,
            { url: g, title: _, score: ee } = r,
            y = s(() => Te(g, u), [g, u]),
            b = $e((e) => f(e, n), i),
            S = a === `contained`,
            C = S ? x(0, 1 / 0, l.borderRadius - l.spacing) : 0,
            w = o === `path` ? y : be(r.description, dt);
          return h(`a`, {
            ref: t,
            style: { textDecoration: `none` },
            href: r.url,
            onClick: (e) => {
              (e.preventDefault(), m(r.url));
            },
            onMouseMove: b,
            onMouseDown: (e) => {
              e.preventDefault();
            },
            onPointerDown: (e) => p(e, n),
            children: v(
              `li`,
              {
                style: {
                  ...xt,
                  ...d,
                  paddingTop: S ? 12 : 16,
                  paddingBottom: S ? 12 : 16,
                  color: l.foregroundColor,
                  position: `relative`,
                  paddingLeft: l && l.horizontalSpacing,
                  paddingRight: l && l.horizontalSpacing,
                },
                children: [
                  h(`div`, {
                    style: {
                      backgroundColor: l.foregroundColor,
                      position: `absolute`,
                      opacity: c ? 0.06 : 0,
                      borderRadius: C,
                      left: l && S ? l.spacing : 0,
                      right: l && S ? l.spacing : 0,
                      top: 0,
                      bottom: 0,
                    },
                  }),
                  v(`div`, {
                    style: { display: `flex`, flexDirection: `column`, overflow: `hidden`, gap: 4 },
                    children: [
                      h(`h3`, {
                        style: { ...bt, ...l.titleFont, lineHeight: `1.4em` },
                        children: _,
                      }),
                      v(`p`, {
                        style: {
                          margin: 0,
                          color: l.subtitleColor,
                          ...l.subtitleFont,
                          whiteSpace: `nowrap`,
                          overflow: `hidden`,
                          textOverflow: `ellipsis`,
                          lineHeight: `1.4em`,
                        },
                        children: [De ? ee : ``, ` `, w],
                      }),
                    ],
                  }),
                ],
              },
              r.url
            ),
          });
        })
      )),
      (_t = {
        display: `flex`,
        flexDirection: `column`,
        alignItems: `center`,
        justifyContent: `flex-start`,
        gap: 15,
        overflow: `visible`,
      }),
      (vt = y.forwardRef(function ({ theme: e, children: t }, n) {
        let r = J.isTouch(),
          [i, a] = y.useState(!0);
        return (
          y.useEffect(() => {
            if (!r) return;
            let e = n.current;
            e && a(e.scrollHeight > e.clientHeight);
          }),
          h(`div`, {
            ref: n,
            style: {
              width: `calc(100% + ${e.scrollBarWidth}px)`,
              overflowY: `scroll`,
              overflowX: `hidden`,
              overscrollBehavior: `contain`,
              touchAction: i ? void 0 : `none`,
              marginTop: -1,
            },
            children: t,
          })
        );
      })),
      (yt = {
        backgroundColor: `#B5B5B5`,
        color: `#FFF`,
        boxShadow: `0px 20px 40px 0px rgba(0, 0, 0, 0.25)`,
        fontFamily: `inherit`,
        textAlign: `center`,
        fontSize: 13,
        padding: `8px 0`,
      }),
      (bt = {
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        overflow: `hidden`,
        fontWeight: 500,
        whiteSpace: `nowrap`,
        flex: 1,
        margin: 0,
      }),
      (xt = { padding: `16px 20px`, listStyle: `none`, fontWeight: 500 }),
      (St = { left: 0, width: 500 }),
      (Ct = { top: 0, width: `100%` }),
      (wt = { width: 500 }),
      (function (e) {
        ((e.Icon = `icon`), (e.Text = `text`), (e.None = `none`));
      })((X ||= {})),
      (function (e) {
        ((e.None = `none`), (e.FullWidth = `fullWidth`), (e.Contained = `contained`));
      })((Tt ||= {})),
      (function (e) {
        ((e.H1 = `h1`), (e.Title = `title`));
      })((Z ||= {})),
      (function (e) {
        ((e.Description = `description`), (e.Path = `path`));
      })((Et ||= {})),
      (function (e) {
        ((e.FullWidth = `fullWidth`), (e.Contained = `contained`));
      })((Dt ||= {})),
      (function (e) {
        ((e.Sidebar = `Sidebar`), (e.FixedTop = `FixedTop`), (e.QuickMenu = `QuickMenu`));
      })((Q ||= {})),
      (function (e) {
        ((e.Icon = `icon`), (e.Text = `text`));
      })((Ot ||= {})),
      (function (e) {
        ((e.Default = `default`), (e.Custom = `custom`));
      })(($ ||= {})));
  });
function At() {
  return a === void 0 ? { width: 0, height: 0 } : { width: a.innerWidth, height: a.innerHeight };
}
function jt(e) {
  let [t, n] = c(() => e(At()));
  return (
    o(() => {
      let t = () => n(e(At()));
      return (
        a.addEventListener(`resize`, t),
        () => {
          a.removeEventListener(`resize`, t);
        }
      );
    }, []),
    t
  );
}
var Mt = e(() => {
  (n(), r());
});
function Nt(e, t = `none`) {
  if (!e) return t;
  let { x: n, y: r, blur: i, color: a, spread: o } = e;
  return `${n}px ${r}px ${i}px ${o}px ${a}`;
}
var Pt,
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt = e(() => {
    (n(),
      _(),
      g(),
      r(),
      C(),
      j(),
      re(),
      kt(),
      Mt(),
      Ne(),
      Qe(),
      (function (e) {
        ((e.icon = `Icon`), (e.input = `Input`));
      })((Pt ||= {})),
      (Ft = ee(function (e, t) {
        let { layoutType: n, theme: r, onDismiss: i } = e;
        return (
          o(() => {
            let e = (e) => {
                e.code === `Escape` && (e.stopPropagation(), i());
              },
              t = (e) => {
                e.pointerType === `touch` &&
                  ((e.target instanceof Element && e.target.closest(`[role=search]`)) ||
                    (document.activeElement instanceof HTMLInputElement &&
                      document.activeElement.blur()));
              };
            return (
              a.addEventListener(`keydown`, e),
              a.addEventListener(`pointerdown`, t, { capture: !0 }),
              document.body.classList.add(Rt),
              () => {
                (a.removeEventListener(`keydown`, e),
                  a.removeEventListener(`pointerdown`, t, { capture: !0 }),
                  document.body.classList.remove(Rt));
              }
            );
          }, []),
          p(
            v(`div`, {
              ref: t,
              className: `__framer-search-modal-container`,
              role: `presentation`,
              style: {
                ...It,
                zIndex: e.backdropOptions.zIndex,
                justifyContent: n === Q.Sidebar ? `flex-start` : `center`,
              },
              onClick: i,
              children: [
                h(w.div, {
                  role: `presentation`,
                  initial: { opacity: 0 },
                  animate: { opacity: 1 },
                  exit: { opacity: 0, transition: { duration: 0 } },
                  transition: r.overlayTransition,
                  style: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    width: `100%`,
                    height: `100%`,
                    boxSizing: `border-box`,
                    position: `absolute`,
                    touchAction: `none`,
                    backgroundColor: e.backdropOptions.backgroundColor,
                  },
                }),
                h(ut, {
                  urlScope: e.urlScope,
                  layoutType: n,
                  inputOptions: e.inputOptions,
                  resultOptions: e.resultOptions,
                  modalOptions: e.modalOptions,
                  backdropOptions: e.backdropOptions,
                  theme: e.theme,
                  onDismiss: i,
                }),
              ],
            }),
            document.body
          )
        );
      })),
      (It = {
        width: `100%`,
        boxSizing: `border-box`,
        willChange: `transform`,
        position: `fixed`,
        display: `flex`,
        alignItems: `flex-start`,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }),
      (Lt = {
        height: `100%`,
        display: `flex`,
        borderRadius: 10,
        cursor: `inherit`,
        overflow: `hidden`,
      }),
      (Rt = `__framer-overflow-hidden`),
      (zt = E(
        function (e) {
          let t = m(null),
            [n, r] = c(!1),
            [i, a] = c(!1),
            [s, l] = c(!1),
            [u] = c(() => D.current() === D.canvas);
          o(() => {
            (a(Me()), l(J.isSafari() && J.isTouch()));
          }, []);
          let d = e.inputOptions?.inputFont?.fontSize ? e.inputOptions.inputFont.fontSize : `16px`,
            f = s ? `max(16px, ${d})` : d,
            p = jt((t) =>
              t.width < e.modalOptions.width + 10
                ? Q.FixedTop
                : e.modalOptions.layoutType || e.layoutType
            ),
            g = {
              subtitleColor: e.resultOptions.subtitleOptions.subtitleColor,
              backgroundColor: e.modalOptions.backgroundColor,
              foregroundColor: e.resultOptions.titleColor,
              placeholderColor: e.inputOptions.placeholderOptions.placeholderColor,
              titleFont:
                e.resultOptions?.titleFont && !xe(e.resultOptions.titleFont)
                  ? e.resultOptions.titleFont
                  : { fontSize: 14, fontFamily: U, fontWeight: 500 },
              subtitleFont:
                e.resultOptions.subtitleOptions?.subtitleFont &&
                !xe(e.resultOptions.subtitleOptions.subtitleFont)
                  ? e.resultOptions.subtitleOptions.subtitleFont
                  : { fontSize: 12, fontFamily: U, fontWeight: 500 },
              inputFont:
                e.inputOptions?.inputFont && !xe(e.inputOptions.inputFont)
                  ? e.inputOptions.inputFont
                  : { fontSize: 16, fontFamily: U, fontWeight: 500 },
              inputFontSize: f,
              width: e.modalOptions.width,
              offsetTop: e.modalOptions.top,
              borderRadius: e.modalOptions.borderRadius,
              shadow: Nt(e.modalOptions.shadow),
              entryIconColor: e.iconColor,
              entryIconSize: e.iconSize,
              entryIconImage: e.iconImage,
              inputIconSize: e.inputOptions.iconOptions.iconSize,
              inputIconColor: e.inputOptions.iconOptions.iconColor,
              inputIconImage: e.inputOptions.iconOptions.iconImage,
              gapBetweenStatusAndSearch: 16,
              gapBetweenResults: 1,
              scrollBarWidth: 20,
              margin: 10,
              spacing: 8,
              zIndex: e.backdropOptions.zIndex,
              horizontalSpacing: 20,
              overlayTransition: e.backdropOptions.transition,
            },
            _ = (e) => {
              (e.preventDefault(), e.stopPropagation(), !i && r(!0));
            };
          return v(`div`, {
            style: { ...Lt, ...e.style, pointerEvents: i ? `none` : `auto`, opacity: i ? 0.4 : 1 },
            children: [
              h(`button`, {
                "aria-label": `Search Icon`,
                style: {
                  width: `100%`,
                  height: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  background: `none`,
                  cursor: `inherit`,
                  color: `inherit`,
                  border: `none`,
                  outline: `inherit`,
                  padding: 0,
                },
                onClick: _,
                children:
                  e.iconType === $.Custom && g.entryIconImage
                    ? h(`img`, {
                        alt: `icon entry point for Site Search`,
                        src: g.entryIconImage.src,
                        width: g.entryIconSize,
                        height: g.entryIconSize,
                      })
                    : h(k, {
                        color: g.entryIconColor,
                        width: g.entryIconSize,
                        height: g.entryIconSize,
                      }),
              }),
              h(S, {
                children:
                  n &&
                  !u &&
                  h(Ft, {
                    ref: t,
                    layoutType: p,
                    urlScope: e.urlScope,
                    inputOptions: e.inputOptions,
                    resultOptions: e.resultOptions,
                    backdropOptions: e.backdropOptions,
                    modalOptions: e.modalOptions,
                    theme: g,
                    onDismiss: () => r(!1),
                  }),
              }),
            ],
          });
        },
        [
          `
        @keyframes __framer-blink-input {
            0% { opacity: 0; }
            100% { opacity: 1; }
        }

        .__framer-search-modal-container input:focus {
            animation: __framer-blink-input 0.01s;
        }
        `,
          `
         .__framer-search-modal-container input::placeholder, 
         .__framer-search-modal-container input::-webkit-input-placeholder { 
            color: var(--framer-search-placeholder-color, #999999);
            opacity: 1;
        }
        `,
          `
        .__framer-search-modal-container {
            height: 100vh;
            height: 100dvh;
        }
        .__framer-search-modal-container .__framer-max-height-80dvh {
            max-height: 80vh;
            max-height: 80dvh;
        }
        `,
          `
        body.${Rt} {
            overflow: hidden;
        }`,
          `
        button.__framer-search-clear-button {
            position: relative;
        }
        button.__framer-search-clear-button::after {
            content: "";
            position: absolute;
            top: -10px;
            right: -10px;
            bottom: -10px;
            left: -10px;
        }`,
        ],
        `framer-lib-search`
      )),
      T(zt, {
        urlScope: { title: `Scope`, type: O.PageScope },
        iconType: {
          title: `Icon`,
          type: O.Enum,
          options: Object.values($),
          optionTitles: Object.values($).map(V),
          displaySegmentedControl: !0,
        },
        iconColor: {
          title: `Color`,
          type: O.Color,
          defaultValue: `#333`,
          hidden: (e) => e.iconType === $.Custom,
        },
        iconImage: {
          title: `File`,
          type: O.ResponsiveImage,
          allowedFileTypes: [`jpg`, `png`, `svg`],
          hidden: (e) => e.iconType === $.Default,
        },
        iconSize: { title: `Size`, type: O.Number, displayStepper: !0, defaultValue: 24 },
        inputOptions: {
          title: `Input`,
          type: O.Object,
          buttonTitle: `Icon, Styles`,
          controls: {
            iconOptions: {
              title: `Icon`,
              type: O.Object,
              buttonTitle: `Color, Size`,
              controls: {
                iconType: {
                  title: `Icon`,
                  type: O.Enum,
                  options: Object.values($),
                  optionTitles: Object.values($).map(V),
                  displaySegmentedControl: !0,
                },
                iconColor: {
                  title: `Color`,
                  type: O.Color,
                  defaultValue: `rgba(0, 0, 0, 0.45)`,
                  hidden: ({ iconType: e }) => e === $.Custom,
                },
                iconImage: {
                  title: `File`,
                  type: O.ResponsiveImage,
                  allowedFileTypes: [`jpg`, `png`, `svg`],
                  hidden: ({ iconType: e }) => e === $.Default,
                },
                iconSize: {
                  title: `Icon Size`,
                  type: O.Number,
                  displayStepper: !0,
                  defaultValue: 18,
                  min: 0,
                  max: 100,
                },
              },
            },
            inputFont: { title: `Font`, type: O.Font, displayFontSize: !0 },
            textColor: { title: `Color`, type: O.Color, defaultValue: `#333` },
            placeholderOptions: {
              title: `Placeholder`,
              type: O.Object,
              buttonTitle: `Color, Text`,
              controls: {
                placeholderText: { title: `Text`, type: O.String, defaultValue: `Search...` },
                placeholderColor: {
                  title: `Color`,
                  type: O.Color,
                  defaultValue: `rgba(0,0,0,0.4)`,
                },
              },
            },
            dividerType: {
              title: `Divider`,
              type: O.Enum,
              options: Object.values(Tt),
              optionTitles: Object.keys(Tt).map(V),
              defaultValue: Tt.FullWidth,
            },
            clearButtonType: {
              title: `Clear Type`,
              type: O.Enum,
              options: Object.values(X),
              optionTitles: Object.keys(X).map(V),
              defaultValue: X.Icon,
            },
            clearButtonText: {
              title: `Clear Text`,
              type: O.String,
              defaultValue: `Clear`,
              hidden: (e) => e.clearButtonType !== X.Text,
            },
          },
        },
        modalOptions: {
          title: `Modal`,
          buttonTitle: `Layout, Width`,
          type: O.Object,
          controls: {
            layoutType: {
              title: `Layout`,
              type: O.Enum,
              options: Object.keys(Q),
              optionTitles: Object.values(Q).map(V),
              defaultValue: Q.QuickMenu,
            },
            width: {
              title: `Width`,
              type: O.Number,
              defaultValue: 500,
              min: 200,
              max: 1e3,
              displayStepper: !0,
              step: 5,
              hidden: (e) => e.layoutType === Q.FixedTop,
            },
            top: {
              title: `Top`,
              type: O.Number,
              defaultValue: 0,
              min: 0,
              max: 1e3,
              displayStepper: !0,
              hidden: (e) => e.layoutType !== Q.FixedTop,
            },
            heightIsStatic: {
              title: `Height`,
              type: O.Boolean,
              enabledTitle: `Instant`,
              disabledTitle: `Animate`,
              hidden: ({ layoutType: e }) => e !== Q.QuickMenu,
            },
            heightTransition: {
              title: `Type`,
              type: O.Transition,
              defaultValue: { type: `spring`, stiffness: 800, damping: 60 },
              hidden: ({ heightIsStatic: e, layoutType: t }) => t !== Q.QuickMenu || e,
            },
            borderRadius: {
              title: `Radius`,
              type: O.Number,
              defaultValue: 16,
              displayStepper: !0,
              min: 0,
              hidden: ({ layoutType: e }) => e !== Q.QuickMenu,
            },
            shadow: {
              buttonTitle: `Options`,
              type: O.Object,
              defaultValue: { x: 0, y: 20, blur: 40, spread: 0, color: `rgba(0,0,0,0.2)` },
              controls: {
                color: { type: O.Color, defaultValue: `rgba(0,0,0,0.2)` },
                x: { type: O.Number, defaultValue: 0 },
                y: { type: O.Number, defaultValue: 20 },
                blur: { type: O.Number, defaultValue: 40 },
                spread: { type: O.Number, defaultValue: 0 },
              },
            },
            backgroundColor: { title: `Background`, type: O.Color, defaultValue: `#FFF` },
            [H(Q.QuickMenu)]: {
              title: `Animation`,
              type: O.Object,
              icon: `effect`,
              hidden: ({ layoutType: e }) => e !== Q.QuickMenu,
              optional: !0,
              buttonTitle: `Options`,
              controls: {
                opacity: { type: O.Number, defaultValue: 0.5, step: 0.1, min: 0, max: 1 },
                scale: { type: O.Number, defaultValue: 0.75, step: 0.1, min: 0, max: 2 },
                x: { type: O.Number, defaultValue: 0, min: -500, max: 500 },
                y: { type: O.Number, defaultValue: 0, min: -500, max: 500 },
                transition: { type: O.Transition },
              },
            },
            [H(Q.FixedTop)]: {
              title: `Animation`,
              type: O.Object,
              icon: `effect`,
              buttonTitle: `Options`,
              hidden: ({ layoutType: e }) => e !== Q.FixedTop,
              optional: !0,
              controls: {
                opacity: { type: O.Number, defaultValue: 0.8, step: 0.1, min: 0, max: 1 },
                y: { type: O.Number, defaultValue: 0, min: -100, max: 100 },
                transition: { type: O.Transition },
              },
            },
            [H(Q.Sidebar)]: {
              title: `Animation`,
              type: O.Object,
              icon: `effect`,
              buttonTitle: `Options`,
              hidden: ({ layoutType: e }) => e !== Q.Sidebar,
              optional: !0,
              controls: {
                opacity: { type: O.Number, defaultValue: 0.8, step: 0.1, min: 0, max: 1 },
                x: { type: O.Number, defaultValue: 0, min: -1e3, max: 1e3 },
                transition: { type: O.Transition },
              },
            },
          },
        },
        resultOptions: {
          title: `Results`,
          buttonTitle: `Fonts, Style`,
          type: O.Object,
          defaultValue: {},
          controls: {
            itemType: {
              title: `Style`,
              type: O.Enum,
              options: Object.values(Dt),
              optionTitles: Object.keys(Dt).map(V),
              defaultValue: Dt.FullWidth,
            },
            titleFont: {
              title: `Title`,
              type: O.Font,
              defaultValue: { fontSize: 15 },
              displayFontSize: !0,
            },
            titleColor: { title: `Color`, type: O.Color, defaultValue: `#333` },
            titleType: {
              title: `Content`,
              type: O.Enum,
              options: Object.values(Z),
              optionTitles: Object.keys(Z).map(V),
              defaultValue: Z.H1,
              displaySegmentedControl: !0,
            },
            subtitleOptions: {
              type: O.Object,
              title: `Subtitle`,
              buttonTitle: `Font, Content`,
              controls: {
                subtitleFont: {
                  title: `Font`,
                  type: O.Font,
                  defaultValue: { fontSize: 13 },
                  displayFontSize: !0,
                },
                subtitleColor: {
                  title: `Color`,
                  type: O.Color,
                  defaultValue: `rgba(0, 0, 0, 0.4)`,
                },
                subtitleType: {
                  title: `Content`,
                  type: O.Enum,
                  options: Object.values(Et),
                  optionTitles: Object.keys(Et).map(V),
                  defaultValue: Et.Path,
                },
              },
            },
          },
        },
        backdropOptions: {
          title: `Backdrop`,
          type: O.Object,
          buttonTitle: `Color, Z Index`,
          controls: {
            backgroundColor: { title: `Color`, type: O.Color, defaultValue: `rgba(0, 0, 0, 0.8)` },
            zIndex: {
              title: `Z Index`,
              type: O.Number,
              defaultValue: 10,
              displayStepper: !0,
              min: 0,
              max: 10,
            },
            transition: { type: O.Transition },
          },
        },
      }),
      (zt.displayName = `Search`));
  });
export { Bt as n, zt as t };
//# sourceMappingURL=Search.vpU9eIwN.mjs.map
