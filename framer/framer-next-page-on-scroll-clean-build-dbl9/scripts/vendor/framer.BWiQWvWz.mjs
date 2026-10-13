import { n as e } from "./rolldown-runtime.vRAu6p--.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  L as o,
  M as s,
  N as c,
  O as l,
  P as u,
  R as d,
  S as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  i as x,
  j as S,
  k as C,
  l as w,
  m as T,
  o as E,
  s as D,
  u as O,
  v as k,
  w as A,
  x as j,
  y as M,
  z as N,
} from "./react.D7gtL4Ec.mjs";
import {
  $ as P,
  A as F,
  B as ee,
  C as I,
  D as te,
  E as ne,
  F as re,
  G as L,
  H as ie,
  I as ae,
  J as oe,
  K as se,
  L as ce,
  M as le,
  N as ue,
  O as de,
  P as R,
  Q as fe,
  R as pe,
  S as me,
  T as he,
  U as ge,
  V as _e,
  W as ve,
  X as ye,
  Y as be,
  Z as xe,
  _ as Se,
  a as Ce,
  at as we,
  b as Te,
  c as Ee,
  d as De,
  et as Oe,
  f as ke,
  g as Ae,
  h as je,
  i as Me,
  it as Ne,
  j as Pe,
  k as Fe,
  l as Ie,
  m as Le,
  n as Re,
  nt as z,
  o as ze,
  p as Be,
  q as Ve,
  r as He,
  rt as Ue,
  s as We,
  tt as Ge,
  u as Ke,
  v as qe,
  w as Je,
  x as Ye,
  y as Xe,
  z as Ze,
} from "./motion.DC5Pkl7J.mjs";
function Qe(e) {
  return typeof e == `function`;
}
function $e(e) {
  return typeof e == `boolean`;
}
function B(e) {
  return typeof e == `string`;
}
function V(e) {
  return Number.isFinite(e);
}
function et(e) {
  return Array.isArray(e);
}
function H(e) {
  return typeof e == `object` && !!e && !et(e);
}
function tt(e) {
  for (let t in e) return !1;
  return !0;
}
function nt(e) {
  return e === void 0;
}
function rt(e) {
  return e === null;
}
function it(e) {
  return e == null;
}
function at(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function ot(e) {
  return H(e) && Qe(e.return);
}
function st(e) {
  return H(e) && Qe(e.then);
}
function ct(e) {
  return e instanceof Promise;
}
function lt(e) {
  return `url('${ut(e)}')`;
}
function ut(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function dt(e, t) {
  let n = t instanceof Error ? (t.stack ?? t.message) : t;
  return `${
    e
      ? `${e}
`
      : ``
  }In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
    n
      ? `:
${n}`
      : `.`
  }`;
}
function ft() {
  if (!r_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (u_.set(e, t), t))
      .catch((t) => {
        throw (u_.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(n_), u_.set(e, r));
  }
}
function pt(e) {
  return typeof e == `object` && !!e && !v(e) && f_ in e;
}
function mt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function ht(e, t = `default`, n) {
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !u_.has(n)) return;
      let e = u_.get(n);
      ct(e) ? c(() => e) : (i = mt(e, t));
    },
    c = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = mt(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    l = !1,
    u = y(function (t, r) {
      if (
        (s(() => {
          l = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && d_ !== void 0 && d_.add(n), !i)) throw c(e);
      return g(i, { ref: r, ...t });
    });
  return (
    (u.preload = () => (o(), c(e))),
    (u.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: l })),
    u
  );
}
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  return e === null || !(m_ in e) ? !1 : typeof e.equals == `function`;
}
function vt(e, t) {
  return e === t ? !0 : e !== e && t !== t;
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!vt(e[r], t[r])) return !1;
  return !0;
}
function bt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Et(e[r], t[r], !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!vt(r, t.get(n))) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Et(r, t.get(n), !0)) return !1;
  return !0;
}
function Ct(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function wt(e, t) {
  let n = p_(e);
  if (n.length !== p_(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r])))
      return !1;
  return !0;
}
function Tt(e, t) {
  let n = p_(e);
  if (n.length !== p_(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !Et(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Et(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? bt(e, t) : yt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? St(e, t) : xt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return Ct(e, t);
  if (c !== l) return !1;
  let u = e instanceof Date,
    d = t instanceof Date;
  if (u && d) return e.getTime() === t.getTime();
  if (u !== d) return !1;
  let f = e instanceof RegExp,
    p = t instanceof RegExp;
  return f && p
    ? e.toString() === t.toString()
    : f === p
      ? _t(e) && _t(t)
        ? e.equals(t)
        : n
          ? Tt(e, t)
          : wt(e, t)
      : !1;
}
function Dt(e, t, n = !0) {
  try {
    return Et(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Ot(e) {
  return h.useCallback((t) => e[t], [e]);
}
function kt({ api: e, children: t }) {
  return g(h_.Provider, { value: e, children: t });
}
function At() {
  return h.useContext(h_);
}
function jt({ routes: e, children: n }) {
  let r = Ot(e),
    i = t(() => ({ getRoute: r }), [r]);
  return g(h_.Provider, { value: i, children: n });
}
function Mt() {
  let e = At(),
    n = C(g_),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = r ? e.getRoute?.(r) : void 0;
  return t(() => {
    if (!(!r || !a)) return { ...a, id: r, pathVariables: i };
  }, [r, i, a]);
}
function Nt() {
  let e = Mt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Pt(e) {
  let t = Mt(),
    n = h.useRef(t);
  Dt(n.current, t) || !t || ((n.current = t), e(t));
}
function Ft(e) {
  let t = At();
  if (e) return t.getRoute?.(e);
}
function It(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Lt(e) {
  let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
    n = (e) => {
      let n = e.type;
      t.includes(n) && performance.mark(`framer-navigation-input`, { detail: { type: n } });
    };
  for (let r = 0; r < t.length; r++) document.addEventListener(t[r], n, { signal: e });
  return () => {
    for (let e = 0; e < t.length; e++) document.removeEventListener(t[e], n);
  };
}
function Rt(e, t) {
  let n = Mt(),
    r = Ft(t) ?? n;
  return h.useMemo(() => (r ? It(r, e) : e), [e, r]);
}
function zt() {
  return Mt()?.pathVariables;
}
function U(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function W(e, t) {
  throw t instanceof Error
    ? t
    : t === void 0
      ? Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`)
      : Error(String(t));
}
function Bt(e) {
  return Object(e) !== e;
}
function Vt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === T_
  );
}
function Ht(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ut(e) {
  switch (e) {
    case `"`:
      return `\\"`;
    case `<`:
      return `\\u003C`;
    case `\\`:
      return `\\\\`;
    case `
`:
      return `\\n`;
    case `\r`:
      return `\\r`;
    case `	`:
      return `\\t`;
    case `\b`:
      return `\\b`;
    case `\f`:
      return `\\f`;
    case `\u2028`:
      return `\\u2028`;
    case `\u2029`:
      return `\\u2029`;
    default:
      return e < ` ` ? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}` : ``;
  }
}
function Wt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ut(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Gt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Kt(e) {
  return E_.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function qt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  let t = +e;
  return !(t >= 2 ** 32 - 1 || t < 0);
}
function Jt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !qt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Yt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
  return Qt(n);
}
function Xt(e) {
  let t = Zt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function Zt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= D_.indexOf(e[i])),
      (r += 6),
      r === 24 &&
        ((t += String.fromCharCode((n & 16711680) >> 16)),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255)),
        (n = r = 0)));
  return (
    r === 12
      ? ((n >>= 4), (t += String.fromCharCode(n)))
      : r === 18 &&
        ((n >>= 2),
        (t += String.fromCharCode((n & 65280) >> 8)),
        (t += String.fromCharCode(n & 255))),
    t
  );
}
function Qt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++) r[e] === void 0 ? (t += `=`) : (t += D_[r[e]]);
  }
  return t;
}
function $t(e, t) {
  return en(JSON.parse(e), t);
}
function en(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === O_) return;
    if (e === A_) return NaN;
    if (e === j_) return 1 / 0;
    if (e === M_) return -1 / 0;
    if (e === N_) return -0;
    if (o || typeof e != `number`) throw Error(`Invalid input`);
    if (e in r) return r[e];
    let s = n[e];
    if (!s || typeof s != `object`) r[e] = s;
    else if (Array.isArray(s))
      if (typeof s[0] == `string`) {
        let o = s[0],
          c = t && Object.hasOwn(t, o) ? t[o] : void 0;
        if (c) {
          let t = s[1];
          if ((typeof t != `number` && (t = n.push(s[1]) - 1), (i ??= new Set()), i.has(t)))
            throw Error(`Invalid circular reference`);
          return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
        }
        switch (o) {
          case `Date`:
            r[e] = new Date(s[1]);
            break;
          case `Set`:
            let t = new Set();
            r[e] = t;
            for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
            break;
          case `Map`:
            let i = new Map();
            r[e] = i;
            for (let e = 1; e < s.length; e += 2) i.set(a(s[e]), a(s[e + 1]));
            break;
          case `RegExp`:
            r[e] = new RegExp(s[1], s[2]);
            break;
          case `Object`:
            let c = Object(s[1]);
            if (Object.hasOwn(c, `__proto__`))
              throw Error("Cannot parse an object with a `__proto__` property");
            r[e] = c;
            break;
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let l = Object.create(null);
            r[e] = l;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              l[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = new t(a(s[1]));
            r[e] = s[2] === void 0 ? i : i.subarray(s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            r[e] = Xt(t);
            break;
          }
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`: {
            let t = o.slice(9);
            r[e] = Temporal[t].from(s[1]);
            break;
          }
          case `URL`:
            r[e] = new URL(s[1]);
            break;
          case `URLSearchParams`:
            r[e] = new URLSearchParams(s[1]);
            break;
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === P_) {
        let t = s[1];
        if (!Number.isInteger(t) || t < 0) throw Error(`Invalid input`);
        let n = Array(t);
        r[e] = n;
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Number.isInteger(r) || r < 0 || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== k_ && (t[e] = a(n));
        }
      }
    else {
      let t = {};
      r[e] = t;
      for (let e of Object.keys(s)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        let n = s[e];
        t[e] = a(n);
      }
    }
    return r[e];
  }
  return a(0);
}
function tn(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t) for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(t) {
    if (t === void 0) return O_;
    if (Number.isNaN(t)) return A_;
    if (t === 1 / 0) return j_;
    if (t === -1 / 0) return M_;
    if (t === 0 && 1 / t < 0) return N_;
    if (r.has(t)) return r.get(t);
    let c = o++;
    r.set(t, c);
    for (let { key: e, fn: r } of i) {
      let i = r(t);
      if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
    }
    if (typeof t == `function`) throw new w_(`Cannot stringify a function`, a, t, e);
    let l = ``;
    if (Bt(t)) l = nn(t);
    else {
      let n = Ht(t);
      switch (n) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l = `["Object",${nn(t)}]`;
          break;
        case `BigInt`:
          l = `["BigInt",${t}]`;
          break;
        case `Date`:
          l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
          break;
        case `URL`:
          l = `["URL",${Wt(t.toString())}]`;
          break;
        case `URLSearchParams`:
          l = `["URLSearchParams",${Wt(t.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = t;
          l = i ? `["RegExp",${Wt(r)},"${i}"]` : `["RegExp",${Wt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          l = `[`;
          for (let n = 0; n < t.length; n += 1)
            if ((n > 0 && (l += `,`), Object.hasOwn(t, n)))
              (a.push(`[${n}]`), (l += s(t[n])), a.pop());
            else if (e) l += k_;
            else {
              let n = Jt(t),
                r = n.length,
                i = String(t.length).length;
              if ((t.length - r) * 3 > 4 + i + r * (i + 1)) {
                l = `[` + P_ + `,` + t.length;
                for (let e = 0; e < n.length; e++) {
                  let r = n[e];
                  (a.push(`[${r}]`), (l += `,` + r + `,` + s(t[r])), a.pop());
                }
                break;
              } else ((e = !0), (l += k_));
            }
          l += `]`;
          break;
        }
        case `Set`:
          l = `["Set"`;
          for (let e of t) l += `,${s(e)}`;
          l += `]`;
          break;
        case `Map`:
          l = `["Map"`;
          for (let [e, n] of t)
            (a.push(`.get(${Bt(e) ? nn(e) : `...`})`), (l += `,${s(e)},${s(n)}`), a.pop());
          l += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`: {
          let e = t;
          l = `["` + n + `",` + s(e.buffer);
          let r = t.byteOffset,
            i = r + t.byteLength;
          if (r > 0 || i !== e.buffer.byteLength) {
            let e = /(\d+)/.exec(n)[1] / 8;
            l += `,${r / e},${i / e}`;
          }
          l += `]`;
          break;
        }
        case `ArrayBuffer`:
          l = `["ArrayBuffer","${Yt(t)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l = `["${n}",${Wt(t.toString())}]`;
          break;
        default:
          if (!Vt(t)) throw new w_(`Cannot stringify arbitrary non-POJOs`, a, t, e);
          if (Gt(t).length > 0) throw new w_(`Cannot stringify POJOs with symbolic keys`, a, t, e);
          if (Object.getPrototypeOf(t) === null) {
            l = `["null"`;
            for (let n of Object.keys(t)) {
              if (n === `__proto__`)
                throw new w_(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (a.push(Kt(n)), (l += `,${Wt(n)},${s(t[n])}`), a.pop());
            }
            l += `]`;
          } else {
            l = `{`;
            let n = !1;
            for (let r of Object.keys(t)) {
              if (r === `__proto__`)
                throw new w_(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (n && (l += `,`), (n = !0), a.push(Kt(r)), (l += `${Wt(r)}:${s(t[r])}`), a.pop());
            }
            l += `}`;
          }
      }
    }
    return ((n[c] = l), c);
  }
  let c = s(e);
  return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function nn(e) {
  let t = typeof e;
  return t === `string`
    ? Wt(e)
    : e instanceof String
      ? Wt(e.toString())
      : e === void 0
        ? O_.toString()
        : e === 0 && 1 / e < 0
          ? N_.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function rn(e, t, n = `lazy`) {
  switch ((F_.__framer_events?.push([e, t, n]), e)) {
    case `published_site_click`: {
      let { trackingId: e, href: n } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:click`, { detail: { trackingId: e, href: n } })
        );
      break;
    }
    case `published_site_form_submit`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(new CustomEvent(`framer:formsubmit`, { detail: { trackingId: e } }));
      break;
    }
    case `published_site_pageview`: {
      let { framerLocale: e } = t;
      document.dispatchEvent(new CustomEvent(`framer:pageview`, { detail: { framerLocale: e } }));
      break;
    }
    case `published_site_trigger_invoke`: {
      let { trackingId: e } = t;
      e &&
        document.dispatchEvent(
          new CustomEvent(`framer:triggerinvoke`, { detail: { trackingId: e } })
        );
      break;
    }
  }
}
function an(e) {
  return B(e) && (e === `` || L_.test(e));
}
function on() {
  return { [R_.QueryCache]: new Map(), [R_.CollectionUtilsCache]: new Map() };
}
function sn() {
  if (!r_) return;
  if (z_ !== void 0) return z_;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      z_ = $t(e.text) ?? on();
    } catch (e) {
      ((z_ = on()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      o_(() => {
        (e?.remove(), (e = null));
      }),
      z_
    );
  }
}
function cn(e, t) {
  if (
    (console.warn(
      dt(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    rn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function ln(e, t) {
  let n = sn();
  return n ? n[e].has(t) : !1;
}
function un(e, t) {
  let n = sn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function dn(e) {
  return e?.id ?? x_;
}
function fn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function pn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (U_.has(n)) return U_.get(n);
    let r = new G_(n, t);
    return (U_.set(n, r), r);
  };
}
function mn({ children: e, collectionUtils: n }) {
  let r = t(() => ({ get: pn(n) }), [n]);
  return g(W_.Provider, { value: r, children: e });
}
function hn() {
  return C(W_);
}
function gn() {
  for (let e of J_) e();
  J_.clear();
}
function _n(e) {
  return new Promise((t) => {
    if ((J_.add(t), document.hidden)) {
      gn();
      return;
    }
    (document.addEventListener(`visibilitychange`, gn),
      document.addEventListener(`pagehide`, gn),
      je.read(() => {
        yn(e).then(() => {
          (J_.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function vn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      je.read(
        () => {
          yn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function yn(e) {
  let t = e?.priority;
  return K_ || q_
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : K_
        ? F_.scheduler.yield(e).catch(n_)
        : F_.scheduler.postTask(() => {}, e).catch(n_)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function bn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? _n(r) : t === `paint` ? vn(r) : yn(r);
}
function xn() {
  let e = hn(),
    { autobahnNavigation: t } = b_(),
    { getRoute: n } = At();
  return S(
    (r, i, a = !0, o = !0) => {
      if (!r || !n) return;
      let s = n(r),
        { pathVariables: c, locale: l } = i;
      return Cn(s, { routeId: r, pathVariables: c, locale: l, collectionUtils: e }, a, o && t);
    },
    [n, e, t]
  );
}
function Sn(e, t = !0) {
  let n = xn();
  s(() => {
    if (!(!t || !Y_)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Cn(e, t, n = !0, r = !0) {
  if (!Y_ || !e) return;
  let i = e.page;
  if (!(!i || !pt(i))) {
    n && (await bn());
    try {
      let e = await i.preload();
      r && t && e && (await wn(e, t));
    } catch {}
  }
}
async function wn(e, t) {
  let n = e.loader;
  if (!n?.load) return;
  let r = {
    signal: t.signal ?? new AbortController().signal,
    pathVariables: t.pathVariables ?? {},
    routeId: t.routeId,
    locale: t.locale,
    collectionUtils: t.collectionUtils,
  };
  try {
    await n.load({}, r);
  } catch {}
}
function Tn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = En(e),
    [r, i] = En(t),
    a = Dn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function En(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Dn(e, t) {
  if (e === t || ((e = `/` + On(e)), (t = `/` + On(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Q_(e, 1 + s);
    if (n !== Q_(t, 1 + s)) break;
    n === Z_ && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Q_(t, 1 + s) === Z_) return ev(t, 1 + s + 1);
      if (s === 0) return ev(t, 1 + s);
    } else r > a && (Q_(e, 1 + s) === Z_ ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Q_(e, s) === Z_) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${ev(t, 1 + o)}`;
}
function On(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Q_(e, o);
    else if (rv(a)) break;
    else a = Z_;
    if (rv(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Q_(t, t.length - 1) !== X_ || Q_(t, t.length - 2) !== X_) {
            if (t.length > 2) {
              let e = $_(t, nv);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = ev(t, 0, e)), (n = t.length - 1 - $_(t, nv))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          tv && ((t += t.length > 0 ? `${nv}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${nv}${ev(e, r + 1, o)}`) : (t = ev(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === X_ && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function kn(e, t) {
  return e.replace(av, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function An(e, t = !1) {
  let n = ``;
  if (N !== void 0)
    if (t) n = N.location.search;
    else {
      let e = N.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? N.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? jn(n, e) : e;
}
function jn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== ov && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Mn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(av)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !B(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = ct(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = ct(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = ct(e) ? await e : e;
          return (t && (l[u] = t), t ?? d);
        }
        return ((l[u] = g), g);
      })
    ),
    f = 0,
    p = ``,
    m = !1;
  for (let e = 0; e < u.length; e++) {
    let t = u[e],
      n = d[e];
    !t ||
      !n ||
      ((p += s.substring(f, t.index)),
      (f = (t.index ?? 0) + (t[0]?.length ?? 0)),
      (p += d[e]),
      (m = !0));
  }
  return (
    m && ((p += s.substring(f)), (s = p)),
    { path: s, pathVariables: l, isMissingInLocale: c }
  );
}
async function Nn({
  currentLocale: e,
  nextLocale: t,
  defaultLocale: n,
  route: r,
  pathVariables: i,
  collectionUtils: a,
  preserveQueryParams: o,
}) {
  let { path: s, pathLocalized: c } = r,
    l = c?.[t.id] ?? s,
    u = { path: l, pathVariables: i, isMissingInLocale: !1 };
  if (!l) return u;
  if (i && r.collectionId)
    try {
      u = await Mn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = An(u.path, !0)), u);
}
function Pn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || N.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function Fn({ children: e, value: t }) {
  return g(sv.Provider, { value: t, children: e });
}
function In() {
  return h.useContext(sv);
}
function Ln(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Rn(e) {
  let t = cv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < lv;) ((n = e.next(t)), r.push(n.value), (t += cv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - cv }
  );
}
function zn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Bn(e) {
  let { innerWidth: t, innerHeight: n } = N,
    [r, i] = zn(e.x),
    [a, o] = zn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function Vn(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Hn(e) {
  return e ? dv[e] : void 0;
}
function Un(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (Wn(t)) {
    let { easing: e, duration: n } = Rn(
      Pe({ keyframes: [0, 1], ...Gn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Hn(n?.mask?.type),
    o = Vn(n, `start`, e, a),
    s = Vn({ ...fv, mask: n.mask }, `end`, e, a);
  return (
    e === `exit` && ([o, s] = [s, o]),
    `
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
  );
}
function Wn(e) {
  return e.type === `spring`;
}
function Gn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Kn({ exit: e = mv, enter: t }) {
  let n = document.createElement(`style`);
  n.id = pv;
  let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
  ((e.mask || t.mask || e.opacity || t.opacity || e.transition.delay || t.transition.delay) &&
    (r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
    (r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
    (r += Un(`exit`, e)),
    (r += Un(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function qn() {
  o_(() => {
    je.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(pv);
      e && document.head.removeChild(e);
    });
  });
}
function Jn() {
  return !!document.startViewTransition;
}
function Yn(e) {
  return new Promise((t) => {
    je.render(() => {
      (performance.mark(`framer-vt-style`), Kn(e), t());
    });
  });
}
async function Xn(e, t, n) {
  if (!Jn()) {
    e();
    return;
  }
  if ((await Yn(t), n?.aborted)) return;
  performance.mark(`framer-vt`);
  let r = document.startViewTransition(async () => {
    (performance.mark(`framer-vt-freeze`),
      !n?.aborted && (n?.addEventListener(`abort`, () => r.skipTransition()), await e()));
  });
  return (
    r.updateCallbackDone
      .then(() => {
        performance.mark(`framer-vt-unfreeze`);
      })
      .catch(hv),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), qn());
      })
      .catch(hv),
    r
  );
}
function Zn() {
  let e = In(),
    t = r(void 0);
  return (
    s(() => {
      t.current &&= (t.current(), void 0);
    }),
    S(
      (n, r, i, a) => {
        let o = Ln(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return Xn(
            async () => {
              (i(), await e);
            },
            o,
            a
          );
        }
        i();
      },
      [e]
    )
  );
}
function Qn(e, t) {
  o_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function $n(e, t, n, r = j) {
  r(() => {
    let t = async (e) => (await bn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function er(e) {
  let t = r(void 0);
  return (
    $n(
      () => {
        t.current &&= (t.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    S(
      (n) => {
        let r = new Promise((e) => {
          t.current = e;
        });
        if (!e) return { promise: r, measureDetail: n, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: n,
            ignore: () => {
              ((o = !0), t.current?.(), (t.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
async function tr(
  e,
  t,
  {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    localeId: s,
    preserveQueryParams: c,
    siteCanonicalURL: l,
  },
  u = !1
) {
  let { path: d } = t;
  if (!d) return;
  let f = cr(t, {
      currentRoutePath: n,
      currentRoutePathLocalized: r,
      currentPathVariables: i,
      hash: a,
      pathVariables: o,
      preserveQueryParams: c,
      siteCanonicalURL: l,
      localeId: s,
    }),
    p = n !== void 0 && n === d,
    m = nr(N.history.state) ? N.history.state : void 0,
    h = p ? m?.queryParamBackAnchorSearch : void 0;
  try {
    return await ir(
      { routeId: e, hash: a, pathVariables: o, localeId: s, queryParamBackAnchorSearch: h },
      f,
      u
    );
  } catch {}
}
function nr(e) {
  return H(e) && B(e.routeId);
}
function rr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && Qn(t, N.location.href),
    (n ? N.history.__proto__.replaceState : N.history.replaceState).call(N.history, e, ``, t));
}
async function ir(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), Qn(t, N.location.href), !n)) {
    N.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (vv &&
    ((i = () => {
      if (((r = !0), yv)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), rn(`published_site_load_recoverable_error`, { message: e }));
    }),
    N.addEventListener(`popstate`, i, { once: !0 })),
    yv && vv
      ? N.history.__proto__.pushState.call(N.history, e, ``, t)
      : N.history.pushState(e, ``, t),
    vv &&
      queueMicrotask(() => {
        r || ((vv = !1), N.removeEventListener(`popstate`, i));
      }));
}
function ar({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  j(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = H(N.history.state) ? N.history.state : {},
      a = N.location.hash ? N.location.hash.slice(1) : void 0;
    rr({ ...i, routeId: t, hash: a, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function or(e, t) {
  let n = Zn(),
    i = er(`framer-route-change`),
    a = r(void 0),
    o = S(
      async ({ state: r }) => {
        if (
          (N.navigation?.transition && N.navigation?.transition?.navigationType !== `traverse`) ||
          !H(r)
        )
          return;
        let { routeId: o, hash: s, pathVariables: c, localeId: l } = r;
        if (!B(o)) return;
        let u = i({ popstate: !0 }),
          d = Lt();
        u.promise.finally(d);
        let f = await n(e.current, o, () => {
            t(
              o,
              B(l) ? l : void 0,
              B(s) ? s : void 0,
              N.location.pathname + N.location.search + N.location.hash,
              H(c) ? c : void 0,
              !0,
              u,
              !1
            );
          }),
          p = N.navigation?.transition;
        (await (f?.updateCallbackDone ?? Promise.resolve())
          .then(a.current?.resolve)
          .catch(a.current?.reject),
          await u.promise);
        try {
          await p?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (_v(), Qn(N.location.href));
      },
      [e, i, t, n]
    ),
    c = S((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              a.current = { resolve: e, reject: t };
            }),
              (a.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  s(
    () => (
      N.addEventListener(`popstate`, o),
      bv && N.navigation.addEventListener(`navigate`, c),
      () => {
        (N.removeEventListener(`popstate`, o),
          bv && N.navigation.removeEventListener(`navigate`, c));
      }
    ),
    [o, c]
  );
}
function sr(e, t, n) {
  let r = It(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(av, (e, t) => i[t] ?? e);
}
function cr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: s = !0,
    preserveQueryParams: c,
    onlyHash: l = !1,
    siteCanonicalURL: u,
    localeId: d,
  }
) {
  let f = sr(i, e, o);
  if (l) return f ?? ``;
  let p = t ?? `/`;
  (n && d && (p = n[d] ?? p), r && (p = p.replace(av, (e, t) => String(r[t] || e))));
  let m = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (m = m.replace(av, (e, t) => String(a[t] || e)));
  let h = !!(p === m && f),
    g = !h && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && p !== m;
  if (s)
    if (iv.has(p) && N !== void 0) {
      let e = Pn(u);
      m = Tn(N.location.pathname, e + m);
    } else m = Tn(p, m);
  let _ = h || g;
  return ((c || _) && (m = An(m, _)), f && (m = `${m}#${f}`), m);
}
async function lr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${kn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((N.location.href = N.location.origin + r), !0)
    : !1;
}
function ur() {
  let e = hn();
  return S((t) => dr({ ...t, collectionUtils: e }), [e]);
}
async function dr(e) {
  let t = await Nn(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!B(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await lr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function fr() {
  let e = r(Promise.resolve()),
    t = r(),
    n = S((n) => {
      if (n.navigationType === `traverse` || !n.canIntercept) return;
      let r = t.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        n.intercept({ handler: () => e.current }));
    }, []);
  return S(
    (r, i, a) => {
      if (!bv) {
        i();
        return;
      }
      ((e.current = r),
        (t.current = a),
        N.navigation.addEventListener(`navigate`, n),
        i(!0),
        r.finally(() => {
          N.navigation.removeEventListener(`navigate`, n);
        }));
    },
    [n]
  );
}
function pr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function mr(e) {
  return pr(e.trim().toLowerCase().replace(xv, `-`));
}
function hr({ children: e, value: t }) {
  return g(Cv.Provider, { value: t, children: e });
}
function gr() {
  return C(Cv);
}
function _r(e, t) {
  let n = u(() => ({ inputs: t, result: e() }))[0],
    i = r(!0),
    a = r(n),
    o =
      i.current || (t && a.current.inputs && Dt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    s(() => {
      ((i.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function vr(e, t) {
  return _r(() => e, t);
}
function yr() {
  return h.useContext(Ev);
}
function br() {
  return yr().activeLocale?.code ?? `en-US`;
}
function xr() {
  return N.location.search;
}
function Sr() {
  return ``;
}
function Cr(e) {
  return (
    Ov.add(e),
    N.addEventListener(`popstate`, e),
    () => {
      (Ov.delete(e), N.removeEventListener(`popstate`, e));
    }
  );
}
function wr() {
  for (let e of Ov) e();
}
function Tr({ children: e }) {
  let t = gr() === `preview`,
    [n, r] = u(``),
    a = i(M(Cr, xr, Sr));
  At();
  let o = t ? n : a,
    s = S(
      async (e) => {
        if (t) {
          p(() => {
            r((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        await bn({ continueAfter: `paint` });
        let n = N.history.state,
          i = new URL(N.location.href),
          a = e(i.searchParams).toString();
        i.search = a;
        let o = n?.queryParamBackAnchorSearch,
          s = N.location.search.slice(1),
          c = o === void 0 && a !== s,
          l = o !== void 0 && a === o,
          u = { ...n, queryParamBackAnchorSearch: l ? void 0 : (o ?? (c ? s : void 0)) },
          d = i.toString();
        (c || l ? await ir(u, d) : rr(u, d), wr());
      },
      [t]
    ),
    c = _r(() => ({ urlSearchParams: new URLSearchParams(o), replaceSearchParams: s }), [o, s]);
  return g(kv.Provider, { value: c, children: e });
}
function Er() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function Dr() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Av] = 1), e);
}
function Or(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function kr(e) {
  return Av in e && e[Av] === 1;
}
function Ar(e) {
  return jv in e.nativeEvent && e.nativeEvent[jv] === 1;
}
function jr(e) {
  let t = r(!1),
    n = r(null),
    i = M(s_, l_, Mv);
  return (
    s(() => {
      if (!i) return;
      let r = n.current;
      if (t.current || !r) return;
      t.current = !0;
      let a = Or(r),
        o = r[a];
      if (o === e) return;
      if (r.type === `radio` && o === !0) {
        ((r.checked = !1), r.dispatchEvent(Dr()));
        return;
      }
      if (a === `checked`) {
        let e = Dr();
        ((e[jv] = 1), r.dispatchEvent(e), r.dispatchEvent(Dr()));
        return;
      }
      if (r.nodeName === `SELECT`) {
        r.dispatchEvent(Er());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(r), a)?.set;
      if (!s) return;
      s.call(r, ``);
      let c = Er();
      ((c[jv] = 1),
        r.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(r, o), r.dispatchEvent(Er()));
        }));
    }, [i]),
    n
  );
}
function Mr() {
  if (!Nv) return;
  ((Fv = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Nv.forEach((n) => t.addEventListener(n, Pv, e));
}
function Nr() {
  return (
    s(() => {
      if (!Fv || !Nv) return;
      let e = { capture: !0 },
        t = document.body;
      (Nv.forEach((n) => t.removeEventListener(n, Pv, e)),
        (Nv = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function Pr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function Fr(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function Ir() {
  ((ty = new ey()), ty.render.markStart());
}
function Lr() {
  (f(() => {
    ty?.useInsertionEffects.markRouterStart();
  }, []),
    j(() => {
      ty?.useLayoutEffects.markRouterStart();
    }, []),
    s(() => {
      ty?.useEffects.markRouterStart();
    }, []));
}
function Rr() {
  (f(() => {
    (ty?.render.markEnd(), ty?.useInsertionEffects.markStart());
  }, []),
    j(() => {
      if ((ty?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        ny = !0;
        return;
      }
      je.read(() => {
        (ty?.browserRendering.requestAnimationFrame.markStart(),
          ty?.unattributedHydrationOverhead.measure());
      });
    }, []),
    s(() => {
      (ty?.useEffects.markStart(),
        ty?.browserRendering.hasStarted ||
          (ty?.mutationEffects.measure(), ty?.useEffects.markAreSynchronous()));
    }, []));
}
function zr() {
  (f(() => {
    ty?.useInsertionEffects.markEnd();
  }, []),
    j(() => {
      (ty?.useLayoutEffects.markEnd(),
        !(ny || document.visibilityState !== `visible`) &&
          je.read(() => {
            (ty?.browserRendering.requestAnimationFrame.markEnd(),
              bn().then(() => {
                ty?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    s(() => {
      ty?.useEffects.markEnd();
    }, []));
}
function Br() {
  return (Rr(), null);
}
function Vr() {
  return (zr(), null);
}
function Hr(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return h.isValidElement(e) ? h.cloneElement(e, n) : g(e, { ...n });
}
function Ur() {
  return oy;
}
function Wr(e) {
  if (sy?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      U(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: qr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          U(t, `localizedPath must be defined`);
          let i = qr(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    for (let e in ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e), n)) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    sy = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: sy.pathRoutes,
    paths: sy.paths,
    pathRoutesLocalized: sy.pathRoutesLocalized,
    pathsLocalized: sy.pathsLocalized,
  };
}
function Gr(e, t, n = !0, r = Ur()) {
  return Kr(e, t, r, n);
}
function Kr(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Wr(e),
    c,
    l,
    u = !1;
  if (n.length > 0) {
    let e = t.split(`/`).find(Boolean);
    if (
      (e &&
        ((c = n.find(({ slug: t }) => t === e)),
        c && ((l = c.id), (t = t.substring(c.slug.length + 1)), (u = !0))),
      !l)
    ) {
      let e = n.find(({ slug: e }) => e === ``);
      e && (l = e.id);
    }
  }
  if (l && u) {
    let e = o[l],
      n = e ? e[t] : void 0;
    if (n) {
      let e = Jr(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Jr(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Jr(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Jr(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function qr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Jr(e, t) {
  let n = [],
    r = Yr(t).replace(av, (e, t) => (n.push(t), `([^/]+)`)),
    i = RegExp(r + `$`),
    a = e.match(i);
  if (!a) return { isMatch: !1 };
  if (a.length === 1) return { isMatch: !0 };
  let o = {},
    s = a.slice(1);
  for (let e = 0; e < n.length; ++e) {
    let t = n[e];
    if (t === void 0) continue;
    let r = s[e],
      i = o[t];
    if (i) {
      if (i !== r) return { isMatch: !1 };
      continue;
    }
    if (r === void 0) throw Error(`Path variable values cannot be undefined`);
    o[t] = r;
  }
  return { isMatch: !0, pathVariables: o };
}
function Yr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Xr() {
  if (`PerformanceServerTiming` in N) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Zr(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Qr(e, t) {
  for (let [n, r] of t) Zr(e, n, r);
}
function $r(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function ei(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function ti(e, t) {
  if (N === void 0) return t;
  let n = t;
  if (t) {
    ei(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Qr(e, Xr()), $r(e), n);
}
function ni(e) {
  (s(() => {
    if (e.robots) {
      let t = document.querySelector(`meta[name="robots"]`);
      t
        ? t.setAttribute(`content`, e.robots)
        : ((t = document.createElement(`meta`)),
          t.setAttribute(`name`, `robots`),
          t.setAttribute(`content`, e.robots),
          document.head.appendChild(t));
    }
  }, [e.robots]),
    f(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function ri(e, ...t) {
  cy.has(e) || (cy.add(e), console.warn(e, ...t));
}
function ii(e, t, n) {
  ri(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function ai(e) {
  return (
    typeof e == `object` &&
    !!e &&
    dy in e &&
    e[dy] instanceof Function &&
    fy in e &&
    e[fy] instanceof Function
  );
}
function oi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = uy(r);
      return (e) => {
        let n = t.interpolate(r, i)(e);
        return (a.set(n), a);
      };
    },
    difference(e, n) {
      let r = e.get();
      return t.difference(r, n.get());
    },
  };
}
function si(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function ci(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function li(e) {
  return Math.round(e * 2) / 2;
}
function ui(e, t) {
  return { x: e, y: t };
}
function di(e, t, n, r = !1) {
  let [i, a] = t,
    [o, s] = n,
    c = a - i;
  if (c === 0) return (s + o) / 2;
  let l = s - o;
  if (l === 0) return o;
  let u = o + ((e - i) / c) * l;
  if (r === !0)
    if (o < s) {
      if (u < o) return o;
      if (u > s) return s;
    } else {
      if (u > o) return o;
      if (u < s) return s;
    }
  return u;
}
function fi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function pi(e) {
  let t = mi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function mi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function hi(e, t, n) {
  return (
    (hy.rgb_r = e / 255),
    (hy.rgb_g = t / 255),
    (hy.rgb_b = n / 255),
    hy.rgbToHsluv(),
    { h: hy.hsluv_h, s: hy.hsluv_s, l: hy.hsluv_l }
  );
}
function gi(e, t, n, r = 1) {
  return (
    (hy.hsluv_h = e),
    (hy.hsluv_s = t),
    (hy.hsluv_l = n),
    hy.hsluvToRgb(),
    { r: hy.rgb_r * 255, g: hy.rgb_g * 255, b: hy.rgb_b * 255, a: r }
  );
}
function _i(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function vi(e, t, n) {
  return {
    r: fi(e) ? Ti(e, 255) * 255 : 0,
    g: fi(t) ? Ti(t, 255) * 255 : 0,
    b: fi(n) ? Ti(n, 255) * 255 : 0,
  };
}
function yi(e, t, n, r) {
  let i = [
    Oi(Math.round(e).toString(16)),
    Oi(Math.round(t).toString(16)),
    Oi(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function bi(e, t, n) {
  let r,
    i,
    a = Ti(e, 255),
    o = Ti(t, 255),
    s = Ti(n, 255),
    c = Math.max(a, o, s),
    l = Math.min(a, o, s),
    u = (i = r = (c + l) / 2);
  if (c === l) u = i = 0;
  else {
    let e = c - l;
    switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
      case a:
        u = (o - s) / e + (o < s ? 6 : 0);
        break;
      case o:
        u = (s - a) / e + 2;
        break;
      case s:
        u = (a - o) / e + 4;
        break;
    }
    u /= 6;
  }
  return { h: u * 360, s: i, l: r };
}
function xi(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function Si(e, t, n) {
  let r, i, a;
  if (((e = Ti(e, 360)), (t = Ti(t * 100, 100)), (n = Ti(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = xi(s, o, e + 1 / 3)), (i = xi(s, o, e)), (a = xi(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ci(e, t, n) {
  ((e = Ti(e, 255)), (t = Ti(t, 255)), (n = Ti(n, 255)));
  let r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    a = r - i,
    o = 0,
    s = r === 0 ? 0 : a / r,
    c = r;
  if (r === i) o = 0;
  else {
    switch (r) {
      case e:
        o = (t - n) / a + (t < n ? 6 : 0);
        break;
      case t:
        o = (n - e) / a + 2;
        break;
      case n:
        o = (e - t) / a + 4;
        break;
    }
    o /= 6;
  }
  return { h: o, s, v: c };
}
function wi(e, t, n) {
  ((e = Ti(e, 360) * 6), (t = Ti(t * 100, 100)), (n = Ti(n * 100, 100)));
  let r = Math.floor(e),
    i = e - r,
    a = n * (1 - t),
    o = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    c = r % 6,
    l = [n, o, a, a, s, n][c],
    u = [s, n, n, o, a, a][c],
    d = [a, a, s, n, n, o][c];
  return { r: l * 255, g: u * 255, b: d * 255 };
}
function Ti(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    Ei(e) && (e = `100%`);
    let t = Di(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ei(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Di(e) {
  return typeof e == `string` && e.includes(`%`);
}
function Oi(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function ki(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = my[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = gy.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = gy.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = gy.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: pi(r[2] ?? ``), l: pi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = gy.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: pi(r[2] ?? ``),
              l: pi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = gy.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: pi(r[2] ?? ``), v: pi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = gy.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: pi(r[2] ?? ``),
                  v: pi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = gy.hex8.exec(t))
                ? {
                    r: Ai(r[1] ?? ``),
                    g: Ai(r[2] ?? ``),
                    b: Ai(r[3] ?? ``),
                    a: ji(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = gy.hex6.exec(t))
                  ? {
                      r: Ai(r[1] ?? ``),
                      g: Ai(r[2] ?? ``),
                      b: Ai(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = gy.hex4.exec(t))
                    ? {
                        r: Ai(`${r[1]}${r[1]}`),
                        g: Ai(`${r[2]}${r[2]}`),
                        b: Ai(`${r[3]}${r[3]}`),
                        a: ji(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = gy.hex3.exec(t))
                      ? {
                          r: Ai(`${r[1]}${r[1]}`),
                          g: Ai(`${r[2]}${r[2]}`),
                          b: Ai(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function Ai(e) {
  return parseInt(e, 16);
}
function ji(e) {
  return Ai(e) / 255;
}
function Mi(e) {
  let t = _y.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function Ni(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Pi({ r: e, g: t, b: n, a: r }) {
  return { r: Ni(e), g: Ni(t), b: Ni(n), a: r };
}
function Fi(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function Ii({ r: e, g: t, b: n, a: r }) {
  return { r: Fi(e), g: Fi(t), b: Fi(n), a: r };
}
function Li({ r: e, g: t, b: n, a: r }) {
  let i = Math.max(e, t, n),
    a = Math.min(e, t, n),
    o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
  return (
    i - a !== 0 &&
      (o.h =
        (i === e
          ? (t - n) / (i - a) + (t < n ? 6 : 0)
          : i === t
            ? (n - e) / (i - a) + 2
            : (e - t) / (i - a) + 4) * 60),
    o
  );
}
function Ri(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function zi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = Ri(e),
    a = Math.abs(((i / 60) % 2) - 1);
  switch (Math.floor(i / 60)) {
    case 0:
      return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
    case 1:
      return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
    case 2:
      return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
    case 3:
      return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
    case 4:
      return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
    case 5:
      return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
    default:
      return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
  }
}
function Bi(e) {
  return xy(by(e));
}
function Vi(e) {
  return yy(vy(e));
}
function Hi(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Gi({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ui(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Gi(e)
              : Ki(e)),
    i
  );
}
function Ui(e) {
  let t = ki(e);
  if (t) return t.format === `hsl` ? Ki(t) : t.format === `hsv` ? Wi(t) : Gi(t);
}
function Wi(e) {
  let t = wi(e.h, e.s, e.v);
  return { ...bi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : qi(e.a) };
}
function Gi(e) {
  let t = vi(e.r, e.g, e.b);
  return { ...bi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : qi(e.a) };
}
function Ki(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = fi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = fi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = mi(e.s)),
    (r = fi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = mi(e.l)),
    (i = Si(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function qi(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ji() {
  return F_.location.origin === `https://screenshot.framer.invalid`;
}
function Yi() {
  Fy || ((Fy = !0), De(zy));
}
function Xi(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Zi(e, t) {
  return `${Iy}${e}%${Ly}${t.join(Ly)}`;
}
function Qi({ children: e }) {
  if (C(By).top) return g(D, { children: e });
  let t = r({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    n = r({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = r(new Set()).current,
    a = r({
      getLayoutId: S(({ id: e, name: r, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = r ? `byName` : `byId`,
          s = t.current[o][e];
        if (s) return s;
        let c = r || e;
        if (!a && !i.has(c) && (!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c))
          return (
            t.current.count[o][c] === void 0 &&
              ((t.current.count[o][c] = 0), (t.current.byLayoutId[c] = c), (n.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            U(!!c, `duplicatedId must be defined`);
            let u = t.current[o][c],
              d = t.current.byLastId[c];
            if (d && !l) {
              let e = t.current.byLayoutId[d],
                n = !e || e === r;
              d && !i.has(d) && (!r || n) && (l = [d, c]);
            }
            let f = u ? t.current.byLayoutId[u] : void 0,
              p = !f || f === r;
            if (u && !i.has(u) && (!r || p))
              return ((n.current[o][e] = u), (n.current.byLastId[c] = u), i.add(u), u);
          }
        let u = t.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (n.current.byId[e] = u), u);
        if (l) {
          let [t, r] = l;
          return ((n.current[o][e] = t), (n.current.byLastId[r] = t), i.add(t), t);
        }
        let d = t.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (n.current.byId[e] = d), d);
        let f = a?.[0],
          p = r || f || e,
          { layoutId: m, value: h } = $i(p, (t.current.count[o][p] ?? -1) + 1, i);
        if (((t.current.count[o][p] = h), (n.current[o][e] = m), a?.length && !r)) {
          let e = a[a.length - 1];
          if ((e && (n.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (n.current.byPossibleId[t] || (n.current.byPossibleId[t] = m));
            }
        }
        return ((n.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: S(() => {
        ((t.current = {
          byId: { ...t.current.byId, ...n.current.byId },
          byLastId: { ...t.current.byLastId, ...n.current.byLastId },
          byPossibleId: { ...t.current.byPossibleId, ...n.current.byPossibleId },
          byName: { ...t.current.byName, ...n.current.byName },
          byLastName: { ...t.current.byLastName, ...n.current.byLastName },
          byLayoutId: { ...t.current.byLayoutId, ...n.current.byLayoutId },
          count: { ...t.current.count, byName: {} },
        }),
          (n.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return g(By.Provider, { value: a, children: e });
}
function $i(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function ea({ enabled: e = !0, ...n }) {
  let r = C(By),
    i = t(() => ({ ...r, enabled: e }), [e]);
  return g(By.Provider, { ...n, value: i });
}
function ta(e) {
  let t = r(null);
  return (t.current === null && (t.current = e()), t.current);
}
function na(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${ra(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: Hy,
    children: [
      g(`div`, { className: `text`, style: Wy, children: r }),
      i && g(`div`, { className: `text`, style: Gy, children: i }),
    ],
  });
}
function ra(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function G(e) {
  return Number.isFinite(e);
}
function ia(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function aa(e) {
  return typeof e != `string` && typeof e != `number`;
}
function oa(e) {
  return e != null && typeof e != `boolean` && !ia(e);
}
function sa(e) {
  return e * (Math.PI / 180);
}
function ca(e) {
  return nt(e) ? !1 : e === 2 || e === 5;
}
function la(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function ua(e, t, n, r) {
  if (typeof t == `string`) {
    if (t.endsWith(`%`) && n)
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * n.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * n.height;
        default:
          break;
      }
    if (t.endsWith(`vh`)) {
      if (!r) return da(e);
      switch (e) {
        case `maxWidth`:
        case `minWidth`:
          return (parseFloat(t) / 100) * r.width;
        case `maxHeight`:
        case `minHeight`:
          return (parseFloat(t) / 100) * r.height;
        default:
          break;
      }
    }
    return parseFloat(t);
  }
  return t;
}
function da(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      W(e, `unknown constraint key`);
  }
}
function fa(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(ua(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(ua(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function pa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(ua(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(ua(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function ma(e, t, n, r, i) {
  let a = pa(G(e) ? e : Xy, n, r, i),
    o = fa(G(t) ? t : Zy, n, r, i);
  return (
    G(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (G(n.left) && G(n.right)
        ? (o = a / n.aspectRatio)
        : (G(n.top) && G(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function ha(e, t) {
  return !G(e) || !G(t) ? null : e + t;
}
function ga(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function _a(e) {
  return !e._constraints || ga(e) ? !1 : e._constraints.enabled;
}
function va(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    G(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    G(n) && G(r) ? { width: n, height: r } : null
  );
}
function ya(e) {
  let t = va(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return G(n) && G(r) ? { x: n, y: r, ...t } : null;
}
function ba(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!_a(e) || r) return ya(e);
  let i = xa(e),
    a = Sa(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Yy.toRect(i, o, null, n, null);
}
function xa(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Jy.quickfix({
      left: G(t),
      right: G(n),
      top: G(r),
      bottom: G(i),
      widthType: la(c),
      heightType: la(l),
      aspectRatio: u || null,
      fixedSize: d === !0,
    }),
    p = null,
    m = null,
    h = 0,
    g = 0;
  if (f.widthType !== 0 && typeof c == `string`) {
    let e = parseFloat(c);
    c.endsWith(`fr`) ? ((h = 3), (p = e)) : c === `auto` ? (h = 2) : ((h = 1), (p = e / 100));
  } else c !== void 0 && typeof c != `string` && (p = c);
  if (f.heightType !== 0 && typeof l == `string`) {
    let e = parseFloat(l);
    l.endsWith(`fr`)
      ? ((g = 3), (m = e))
      : l === `auto`
        ? (g = 2)
        : ((g = 1), (m = parseFloat(l) / 100));
  } else l !== void 0 && typeof l != `string` && (m = l);
  let _ = 0.5,
    v = 0.5;
  return (
    (a === !0 || a === `x`) && ((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
    (a === !0 || a === `y`) && ((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
    {
      left: f.left ? t : null,
      right: f.right ? n : null,
      top: f.top ? r : null,
      bottom: f.bottom ? i : null,
      widthType: h,
      heightType: g,
      width: p,
      height: m,
      aspectRatio: f.aspectRatio || null,
      centerAnchorX: _,
      centerAnchorY: v,
      minHeight: e.minHeight,
      maxHeight: e.maxHeight,
      minWidth: e.minWidth,
      maxWidth: e.maxWidth,
    }
  );
}
function Sa(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function Ca() {
  return h.useContext(Qy).parentSize;
}
function wa(e) {
  return typeof e == `object`;
}
function Ta(e) {
  return wa(e) ? e.width : e;
}
function Ea(e) {
  return wa(e) ? e.height : e;
}
function Da(e, t) {
  return g($y, { parentSize: t, children: e });
}
function Oa(e) {
  return ba(e, Ca(), !0);
}
function ka({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Aa() {
  return d === void 0 ? void 0 : d;
}
function ja() {
  let e = Aa();
  return e ? tb.test(e.platform) : !1;
}
function Ma() {
  let e = Aa();
  return e
    ? nb.test(e.platform)
      ? !0
      : rb.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Na() {
  return ja() || Ma();
}
function Pa() {
  let e = Aa();
  return e ? ib.test(e.userAgent) : !1;
}
function Fa() {
  let e = Aa();
  return e ? ab.test(e.userAgent) && ob.test(e.vendor) && !Pa() : !1;
}
function Ia() {
  let e = Aa();
  return e ? sb.test(e.userAgent) && cb.test(e.vendor) : !1;
}
function La() {
  let e = Aa();
  return e ? lb.test(e.userAgent) : !1;
}
function Ra() {
  return typeof document == `object`;
}
function za() {
  let e = Aa();
  return e ? ub.test(e.userAgent) : !1;
}
function Ba() {
  return !1;
}
function Va() {
  let e = Aa();
  return e && db.test(e.userAgent) ? `tablet` : e && fb.test(e.userAgent) ? `phone` : `desktop`;
}
function Ha() {
  return Va() === `desktop`;
}
function Ua(e) {
  return Na() ? e.metaKey : e.ctrlKey;
}
function Wa(e, t, n = mb) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!hb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) hb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = hb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ga() {
  if (Sb !== void 0) return Sb;
  let e = document.createElement(`div`);
  (Object.assign(e.style, {
    position: `absolute`,
    display: `flex`,
    flexDirection: `column`,
    rowGap: `1px`,
  }),
    e.appendChild(document.createElement(`div`)),
    e.appendChild(document.createElement(`div`)),
    document.body.appendChild(e));
  let t = e.scrollHeight === 1;
  return (e.parentNode && e.parentNode.removeChild(e), (Sb = t), t);
}
function Ka() {
  wb || ((wb = !0), !Ga() && document.body.classList.add(Cb));
}
function qa(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function Ja(e) {
  return e !== Ib && e !== Lb;
}
function Ya(e) {
  for (let t in e) if (Ja(t) && e?.[t] === !0) return !0;
  return !1;
}
function Xa(e, t, n, r, i) {
  let a = h.useRef(null),
    o = h.useCallback(
      (e) => {
        t &&
          a.current !== !1 &&
          ((a.current = !1),
          e.currentTarget.setCustomValidity(` `),
          e.currentTarget.reportValidity(),
          t(e));
      },
      [t]
    ),
    s = h.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !Ya(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = h.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (Ya(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return h.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function Za(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Qa(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function $a() {
  return Y.current() === Y.preview ? Fx : Px;
}
function eo(e) {
  return yb(e, $a, `framer-lib-combinedCSSRules`);
}
function to(e) {
  return H(e) || Qe(e);
}
function no(e) {
  return !!e && Ix in e && e[Ix] === !0;
}
function ro(e) {
  try {
    switch (e.type) {
      case `string`:
      case `collectionreference`:
      case `color`:
      case `date`:
      case `link`:
      case `boxshadow`:
      case `padding`:
      case `borderradius`:
      case `gap`:
        return B(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return nt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return V(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return H(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = H(e.defaultValue) ? e.defaultValue : {};
        return (H(e.controls) && io(t, e.controls), t);
      }
      case `array`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `file`:
      case `image`:
      case `richtext`:
      case `pagescope`:
      case `eventhandler`:
      case `changehandler`:
      case `segmentedenum`:
      case `responsiveimage`:
      case `componentinstance`:
      case `slot`:
      case `scrollsectionref`:
      case `customcursor`:
      case `cursor`:
      case `trackingid`:
      case `vectorsetitem`:
        return;
      default:
        return;
    }
  } catch {
    return;
  }
}
function io(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!nt(i) || no(r)) continue;
    let a = ro(r);
    nt(a) || (e[n] = a);
  }
}
function ao(e) {
  if (H(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function oo(e, t) {
  to(e) && io(ao(e), t);
}
function so(e, t) {
  (Object.assign(e, { propertyControls: t }), oo(e, t));
}
function co(e) {
  return e.propertyControls;
}
function lo() {
  let e = Y.current();
  return e === Y.canvas || e === Y.export;
}
function uo() {
  let [e] = u(() => lo());
  return e;
}
function fo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function po(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of qx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function mo(e, t) {
  try {
    let n = new URL(e);
    return (
      t ? n.searchParams.set(`scale-down-to`, `${t}`) : n.searchParams.delete(`scale-down-to`),
      n.toString()
    );
  } catch {
    return e;
  }
}
function ho(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Jx) continue;
    let n = mo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${mo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function go(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Kx) {
    let n = mo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function _o(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = go(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: ho(n, t, po(t.pixelWidth, t.pixelHeight)) };
}
function vo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: lt(Wx.imagePlaceholderSvg),
  };
}
function yo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function bo(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function xo(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Gx,
    objectPosition: bo(e.positionX, e.positionY),
    objectFit: yo(e.fit),
  };
}
function So(e) {
  let t = h.useRef(e ? `auto` : `async`),
    n = S((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = S(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = S(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Co({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Wx.useImageSource(e, t, n),
    s = xo(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = So(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : _o(e.nodeFixedSize, e, o);
  return g(`img`, {
    suppressHydrationWarning: !0,
    ref: u,
    decoding: c,
    fetchpriority: e.fetchPriority,
    loading: e.loading,
    width: e.pixelWidth,
    height: e.pixelHeight,
    sizes: d ? e.sizes : void 0,
    srcSet: d,
    src: f,
    onLoad: l,
    alt: r ?? e.alt ?? ``,
    style: s,
    draggable: i,
  });
}
function wo({ image: e, containerSize: t, nodeId: n }) {
  let r = h.useRef(null),
    i = Wx.useImageElement(e, t, n),
    a = xo(e);
  return (
    h.useLayoutEffect(() => {
      let e = r.current;
      if (e !== null)
        return (
          e.appendChild(i),
          () => {
            e.removeChild(i);
          }
        );
    }, [i]),
    Object.assign(i.style, a),
    g(`div`, { ref: r, style: { display: `contents`, ...Gx } })
  );
}
function To({ nodeId: e, image: t, containerSize: n }) {
  let r = h.useRef(null),
    i = Wx.useImageSource(t, n, e);
  return (
    h.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = xo(t);
      Wx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    g(`div`, { ref: r, style: { display: `contents`, ...Gx } })
  );
}
function Eo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (B(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = V(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = li(e * (t.pixelWidth / 2)),
        s = Wx.useImageSource(t, n);
      ((r = {
        ...Yx,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: bo(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        Y.current() === Y.canvas
          ? Wx.canRenderOptimizedCanvasImage(Wx.useImageSource(t))
            ? g(To, { image: t, ...n })
            : g(wo, { image: t, ...n })
          : g(Co, { image: t, avoidAsyncDecoding: Y.current() === Y.export, ...n });
  let o = a ? Yx : (r ?? { ...Yx, ...vo() });
  return i
    ? g(I.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : g(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Do(e, t, n = !0) {
  let { borderWidth: r, borderStyle: i, borderColor: a } = e;
  if (!r) return;
  let o, s, c, l;
  if (
    (typeof r == `number`
      ? (o = s = c = l = r)
      : ((o = r.top || 0), (s = r.bottom || 0), (c = r.left || 0), (l = r.right || 0)),
    !(o === 0 && s === 0 && c === 0 && l === 0))
  ) {
    if (n && o === s && o === c && o === l) {
      t.border = `${o}px ${i} ${a}`;
      return;
    }
    ((t.borderStyle = e.borderStyle),
      (t.borderColor = e.borderColor),
      (t.borderTopWidth = `${o}px`),
      (t.borderBottomWidth = `${s}px`),
      (t.borderLeftWidth = `${c}px`),
      (t.borderRightWidth = `${l}px`));
  }
}
function Oo(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Gx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), g(I.div, { style: n }))
    : (Do(e, n, !1), g(I.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ko(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Ao(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Zx.isImageObject(t)) return;
  let r = null;
  if (((r = B(n) ? { alt: ``, src: n } : uy.get(t, null)), Zx.isImageObject(r))) return ko(r, e);
}
function jo(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Mo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? I[e] : I.div;
}
function No(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function Po(e) {
  let t = {};
  return (!e || !Qx || Y.current() !== Y.canvas || No(t, e), t);
}
function Fo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Io(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = h.Children.map(t, (e) =>
        h.isValidElement(e) ? h.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Lo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function Ro(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = C(By);
  return t(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function zo() {
  let [e, t] = h.useState(0);
  return h.useCallback(() => t((e) => e + 1), []);
}
function Bo(e) {
  let t = zo();
  s(() => {
    let n = e?.current;
    if (n)
      return (
        nS?.observeElementWithCallback(e.current, t),
        () => {
          nS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Vo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(rS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Ho)
    .map(Uo);
}
function Ho(e) {
  return e instanceof HTMLBaseElement ||
    e instanceof HTMLHeadElement ||
    e instanceof HTMLLinkElement ||
    e instanceof HTMLMetaElement ||
    e instanceof HTMLScriptElement ||
    e instanceof HTMLStyleElement ||
    e instanceof HTMLTitleElement
    ? !1
    : e instanceof HTMLElement || e instanceof SVGElement;
}
function Uo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Ho);
  return t ? Uo(t) : e;
}
function Wo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = C(eS),
    l = Y.current() === Y.canvas;
  $x(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && Wx.queueMeasureRequest(Fo(i), t.current, n(t.current)));
  });
}
function Go(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Wx.queueMeasureRequest(Fo(t.id), t, Vo(t));
}
function Ko(e) {
  e.willChange = `transform`;
  let t = Y.current() === Y.canvas;
  oS && t && (e.translateZ = iS);
}
function qo(e) {
  ((e.willChange = `transform`), Jo(e, !0));
}
function Jo(e, t) {
  let n = Y.current() === Y.canvas;
  if (!oS || !n) return;
  let r = (B(e.transform) && e.transform) || ``;
  t ? r.includes(aS) || (e.transform = r + aS) : (e.transform = r.replace(aS, ``));
}
function Yo(e, t, n, r = !0) {
  if (!e) return;
  let i = Lx(e.style),
    a = n || i[t],
    o = () => {
      Xo(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Xo(e) {
  return B(e) || V(e) || rt(e);
}
function Zo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Qo(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Zo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function $o(e, t) {
  let n = [e, t];
  return uS.test(e) ? e : Qo(1e3, dS, n, () => lS.multiplyAlpha(e, t));
}
function es(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: $o(e.value, t) }))
  );
}
function ts(e, t) {
  let n = 0;
  return (
    es(e, t).forEach((e) => {
      n ^= cS(e.value) ^ e.position;
    }),
    n
  );
}
function ns(e) {
  return e && fS.every((t) => t in e);
}
function rs(e) {
  return e && pS.every((t) => t in e);
}
function is({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || wy(t)
      ? (n.backgroundColor = t)
      : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e))
    : e &&
      ((e = uy.get(e, null)),
      typeof e == `string` || wy(e)
        ? (n.background = e)
        : hS.isLinearGradient(e)
          ? (n.background = hS.toCSS(e))
          : _S.isRadialGradient(e)
            ? (n.background = _S.toCSS(e))
            : J.isColorObject(e) && (n.backgroundColor = e.initialValue || J.toRgbString(e)));
}
function K(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function as(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function os(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ss(e) {
  if (!e) return {};
  let t = {};
  (e.preserve3d === !0
    ? (t.transformStyle = `preserve-3d`)
    : e.preserve3d === !1 && (t.transformStyle = `flat`),
    e.backfaceVisible === !0
      ? (t.backfaceVisibility = `visible`)
      : e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
    t.backfaceVisibility && (t.WebkitBackfaceVisibility = t.backfaceVisibility),
    e.perspective !== void 0 && (t.perspective = t.WebkitPerspective = e.perspective),
    e.__fromCanvasComponent ||
      (e.center === !0
        ? ((t.left = `50%`), (t.top = `50%`))
        : e.center === `x`
          ? (t.left = `50%`)
          : e.center === `y` && (t.top = `50%`)));
  let { cornerShape: n } = e;
  return (
    Ye(n)
      ? (t.cornerShape = R(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    K(e, `size`, t),
    K(e, `width`, t),
    K(e, `height`, t),
    K(e, `minWidth`, t),
    K(e, `minHeight`, t),
    K(e, `top`, t),
    K(e, `right`, t),
    K(e, `bottom`, t),
    K(e, `left`, t),
    K(e, `position`, t),
    K(e, `overflow`, t),
    K(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && K(e, `border`, t),
    K(e, `borderRadius`, t),
    K(e, `radius`, t, `borderRadius`),
    K(e, `color`, t),
    K(e, `shadow`, t, `boxShadow`),
    K(e, `x`, t),
    K(e, `y`, t),
    K(e, `z`, t),
    K(e, `rotate`, t),
    K(e, `rotateX`, t),
    K(e, `rotateY`, t),
    K(e, `rotateZ`, t),
    K(e, `scale`, t),
    K(e, `scaleX`, t),
    K(e, `scaleY`, t),
    K(e, `skew`, t),
    K(e, `skewX`, t),
    K(e, `skewY`, t),
    K(e, `originX`, t),
    K(e, `originY`, t),
    K(e, `originZ`, t),
    is(e, t),
    t
  );
}
function cs(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Lx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function ls(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (yS.has(t)) return `pointer`;
}
function us(e) {
  return ds(e) ? !0 : e.style ? !!ds(e.style) : !1;
}
function ds(e) {
  return bS in e && (e[bS] === `scroll` || e[bS] === `auto`);
}
function fs(e) {
  let {
      left: t,
      top: n,
      bottom: r,
      right: i,
      width: a,
      height: o,
      center: s,
      _constraints: c,
      size: l,
      widthType: u,
      heightType: d,
      positionFixed: f,
      positionAbsolute: p,
    } = e,
    m = Fe(e.minWidth),
    h = Fe(e.minHeight),
    g = Fe(e.maxWidth),
    _ = Fe(e.maxHeight);
  return {
    top: Fe(n),
    left: Fe(t),
    bottom: Fe(r),
    right: Fe(i),
    width: Fe(a),
    height: Fe(o),
    size: Fe(l),
    center: s,
    _constraints: c,
    widthType: u,
    heightType: d,
    positionFixed: f,
    positionAbsolute: p,
    minWidth: m,
    minHeight: h,
    maxWidth: g,
    maxHeight: _,
  };
}
function ps(e) {
  let t = C(eS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = fs(e),
    s = Oa(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: Y.current() === Y.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !cs(e) && !e.__fromCanvasComponent && !us(e),
    u = e.style ? !(`pointerEvents` in e.style) : !0;
  l && u && (c.pointerEvents = `none`);
  let d = h.Children.count(e.children) > 0 &&
      h.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    f = ss(e);
  (a === void 0 && !i && (as(f) || (c.width = xS.width), os(f) || (c.height = xS.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let p = {};
  (_a(o) &&
    s &&
    !ka(e) &&
    (p = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, d, r, f, p, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    sS.applyWillChange(e, c, !0));
  let m = c;
  c.transform || (m = { x: 0, y: 0, ...c });
  let g = lo();
  return (
    e.positionSticky
      ? (!g || Wx.isOnPageCanvas || t) &&
        ((m.position = `sticky`),
        (m.willChange = `transform`),
        (m.top = e.positionStickyTop),
        (m.right = e.positionStickyRight),
        (m.bottom = e.positionStickyBottom),
        (m.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (m.position = Wx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (m.position = `absolute`)),
    `rotate` in m && m.rotate === void 0 && delete m.rotate,
    [m, s]
  );
}
function ms(e) {
  let t = {};
  for (let n in e)
    (me(n) || zx(n)) && !SS.has(n)
      ? (t[n] = Lx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Lx(e)[n] != `boolean` && !e.transition && (t.transition = Lx(e)[n]));
  return t;
}
function hs(e) {
  return `data-framer-name` in e;
}
function gs(e, t, n, r) {
  if (r) return n ? { width: n.width, height: n.height } : 1;
  let { _usesDOMRect: i } = e,
    { widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
  return n && !i
    ? n
    : a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
      ? { width: s, height: c }
      : i || e.positionFixed || e.positionAbsolute
        ? 2
        : 0;
}
function _s(e) {
  return g(I.div, { layoutId: TS, style: OS, children: e.children });
}
function vs(e, t) {
  Qe(e) ? e(t) : ys(e) && (e.current = t);
}
function ys(e) {
  return H(e) && `current` in e;
}
function bs() {
  let e = ta(() => new Set()),
    t = ta(() => new Map());
  return ta(() => (n, r) => ({
    get current() {
      return n.current;
    },
    set current(i) {
      if (i !== n.current) {
        if (
          ((n.current = i),
          r && r(i),
          t.forEach((e, t) => {
            e ? e() : t(null);
          }),
          i === null)
        ) {
          (t.clear(), e.clear());
          return;
        }
        e.forEach((e) => {
          let n = e(i);
          t.set(e, n);
        });
      }
    },
    observe(r) {
      e.add(r);
      let i = n.current;
      if (i) {
        let e = r(i);
        t.set(r, e);
      }
    },
    unobserve(n) {
      if (!n || (e.delete(n), !t.has(n))) return;
      let r = t.get(n);
      (r ? r() : n(null), t.delete(n));
    },
  }));
}
function xs(e) {
  let t = r(null),
    n = bs();
  return ta(() => (ys(e) ? n(e) : Qe(e) ? n(t, e) : n(t)));
}
function Ss(e, t, n) {
  let i = r(),
    a = r();
  (_r(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(t), (i.current = t)));
}
function Cs(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new kS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function ws(e, t, n) {
  let r = ta(() => `${n.rootMargin}`),
    i = C(AS),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Ss(
    e,
    (e) => {
      if (a && e !== null) return Cs(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Ts(e, t, n) {
  let r = h.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  jS(
    e,
    h.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Ds(e, o?.y ?? 0);
        if (s && !n) {
          if (a && i) return;
          ((r.current.hasAnimatedOnce = !0), (r.current.isInView = !0), t(!0));
          return;
        }
        if (!s && n) {
          if (((r.current.isInView = !1), a)) return;
          t(!1);
          return;
        }
      },
      [a, o?.y, t]
    ),
    { threshold: MS, rootMargin: s, enabled: i ?? !0 }
  );
}
function Es(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, F_.innerHeight);
}
function Ds({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Es(t, e) >= r;
}
function Os() {
  return new Map();
}
function ks() {
  return ta(Os);
}
function As(e, t = []) {
  let { register: n, deregister: r } = C(LS);
  s(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function js(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Ms(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (G(t.originX) && (r.originX = t.originX),
      G(t.originY) && (r.originY = t.originY),
      G(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (G(n.originX) && (r.originX = n.originX),
      G(n.originY) && (r.originY = n.originY),
      G(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Ns(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Ps(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return US.PushLeft;
    case `left`:
      return US.PushRight;
    case `bottom`:
      return US.PushUp;
    case `top`:
      return US.PushDown;
  }
}
function Fs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return US.OverlayLeft;
    case `left`:
      return US.OverlayRight;
    case `bottom`:
      return US.OverlayUp;
    case `top`:
      return US.OverlayDown;
  }
}
function Is(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return US.FlipLeft;
    case `left`:
      return US.FlipRight;
    case `bottom`:
      return US.FlipUp;
    case `top`:
      return US.FlipDown;
  }
}
function Ls(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return zs(e, t.transition, t.component);
    case `removeOverlay`:
      return Bs(e);
    case `add`:
      return Vs(e, t.key, t.transition, t.component);
    case `remove`:
      return Ws(e);
    case `update`:
      return Rs(e, t.key, t.component);
    case `back`:
      return Hs(e);
    case `forward`:
      return Us(e);
    default:
      return;
  }
}
function Rs(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function zs(e, t, n) {
  let r = e.overlayStack[e.currentOverlay];
  if (r && r.component === n) return;
  let i = e.overlayItemId + 1,
    a = [...e.overlayStack, { key: `stack-${i}`, component: n, transition: t }];
  return {
    ...e,
    overlayStack: a,
    overlayItemId: i,
    currentOverlay: Math.max(0, Math.min(e.currentOverlay + 1, a.length - 1)),
    previousOverlay: e.currentOverlay,
  };
}
function Bs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Vs(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i && i.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? Ys(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = qs(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = Gs(e, t, c),
    p = Js(l, u, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: l,
    previous: u,
    containerVisualIndex: d,
    containerIsRemoved: f,
    transitionForContainer: p,
    previousTransition: null,
    currentOverlay: -1,
    historyItemId: e.historyItemId + 1,
    previousOverlay: e.currentOverlay,
  };
}
function Hs(e) {
  let t = { ...e.containers },
    n = Ws(e);
  if (n) return ((n.containers = t), n);
}
function Us(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Vs(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Ws(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (U(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = Ks(e, r, n),
    u = Js(i, a, e.history, e.containerIndex, e.transitionForContainer);
  return {
    ...e,
    current: i,
    previous: a,
    containerIsRemoved: o,
    containerVisualIndex: s,
    previousTransition: c,
    visualIndex: l,
    transitionForContainer: u,
  };
}
function Gs(e, t, n) {
  let r = {
    containerVisualIndex: { ...e.containerVisualIndex },
    containerIsRemoved: { ...e.containerIsRemoved },
  };
  if (n) ((r.containerVisualIndex[t] = e.history.length - 1), (r.containerIsRemoved[t] = !1));
  else {
    let n = e.containerVisualIndex[t];
    for (let [t, i] of Object.entries(e.containerVisualIndex))
      n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
  }
  return r;
}
function Ks(e, t, n) {
  let r = [t.key, n.key],
    i = e.history[e.history.length - 2],
    a = e.previousTransition === null ? null : { ...e.previousTransition },
    o = {
      containerIsRemoved: { ...e.containerIsRemoved },
      containerVisualIndex: { ...e.containerVisualIndex },
      previousTransition: a,
      visualIndex: e.visualIndex,
    };
  i && r.push(i.key);
  let s = e.containerVisualIndex[t.key],
    c = e.containerVisualIndex[n.key],
    l =
      (s !== void 0 && c !== void 0 && s <= c) ||
      (t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
    u = t.visualIndex;
  return (
    l
      ? ((o.containerIsRemoved[n.key] = !0),
        (o.containerVisualIndex[t.key] = u === void 0 ? e.history.length - 1 : u))
      : ((o.visualIndex = e.visualIndex + 1), (o.containerVisualIndex[t.key] = e.visualIndex + 1)),
    n.transition.withMagicMotion && (o.previousTransition = n.transition || null),
    (e.containerIsRemoved[t.key] = !1),
    o
  );
}
function qs(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function Js(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Xs(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function Ys(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Xs(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Zs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Zs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Zs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Zs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Zs(e, t, n) {
  let r = {},
    i = {};
  return (
    GS.forEach((e) => {
      ((r[e] = BS[e]), (i[e] = { ...n, from: BS[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Lx(BS)[a]}%` : Lx(BS)[a];
        ((Lx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function Qs(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function $s({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function ec({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : YS;
}
function tc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function nc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function rc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else if (e < n) {
    let t = r[e + 1];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  } else {
    let t = r[e];
    return t && t.transition ? t.transition.backfaceVisible : !0;
  }
}
function ic(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function ac(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function oc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t && t.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t && t.transition) return t.transition.enter;
    }
}
function sc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t && t.transition.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t && t.transition.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return YS;
}
function cc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function lc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function uc(e) {
  return h.Children.map(e.component, (t) => {
    if (!oa(t) || !aa(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? H(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      h.cloneElement(t, n)
    );
  });
}
function dc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function fc(e) {
  let t = ie(),
    n = ce();
  return g(JS, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function pc(e) {
  return nC in e;
}
function mc(e, t) {
  if (!pc(e)) return;
  let n = uy.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function hc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function gc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function _c(e, t) {
  let n = [];
  (G(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    G(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    G(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    G(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    G(e.invert) && n.push(`invert(${e.invert / 100})`),
    G(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    G(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    G(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...hc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function vc(e, t) {
  G(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function yc(e, t) {
  (vc(e, t), _c(e, t));
}
function bc(e, t) {
  let n,
    r = (...r) => {
      (F_.clearTimeout(n), (n = F_.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      F_.clearTimeout(n);
    }),
    r
  );
}
function xc(...e) {
  return e.filter(Boolean).join(` `);
}
function Sc(e, t) {
  let n = {},
    r = {};
  for (let i in e) {
    let a = Cc(i);
    if (a && t.has(a)) {
      n[a] = e[i];
      continue;
    }
    r[i] = e[i];
  }
  return [n, r];
}
function Cc(e) {
  if (e.startsWith(sC)) return e.substr(cC);
}
function wc(e, t, n) {
  let r = A.map(e, (e) => (v(e) ? l(e, t) : e));
  return n ? r : g(D, { children: r });
}
function Tc(e) {
  let t = ta(() => Ec(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Ec(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Dc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Dc(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      A.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      A.map(i, (e) => {
        if (v(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Qe(a) ? a(e.props) : a;
          return l(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return g(D, { children: i(e, t) });
  };
  return (
    (a.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: a,
    }
  );
}
function Dc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (vs(n, e), vs(t, e));
  };
}
function Oc(e, t, n, r, i, a, o, s) {
  let c = h.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !h.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Mc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = jc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = jc([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = g(
        uC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Ac(e, a, r);
    (f.length
      ? (U(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = g(
          `div`,
          { className: `${dC} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : U(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    U(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, g(`div`, { className: fC }, `property-overrides-separator`)]
  );
}
function kc(e) {
  return e.split(`-`)[2];
}
function Ac(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${kc(a)}`);
  }
  return r;
}
function jc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Mc(e, t) {
  for (let n of Object.keys(t)) if (!Dt(e[n], t[n], !0)) return !0;
  return !1;
}
function Nc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Pc(e) {
  return h.forwardRef(({ optimized: t, ...n }, r) => {
    let i = h.useContext(lC),
      a = h.useContext(uC)?.variants,
      o = n[xC];
    o && !Ra() && yC.setAll(o, a, t ? n : null, i);
    let s = CC(n);
    return g(e, { ref: r, ...n, ...s });
  });
}
function Fc(e) {
  return B(e) || Array.isArray(e);
}
function Ic(e) {
  return e in EC;
}
function Lc(e, t) {
  let n = ta(() => ({ values: TC(t ? e : void 0) }));
  return (
    h.useEffect(() => {
      if (!t)
        for (let e of wC) {
          let t = EC[e];
          nt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Rc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: i,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: c,
  },
  l
) {
  let d = _e(),
    f = ta(TC),
    m = r(!1),
    h = AC(),
    g = r(null),
    _ = S(async () => {
      if (!o) return;
      let e = i || void 0,
        t = m.current && a === `mirror`,
        n = t ? EC : o,
        r = t ? o : EC;
      return (
        (m.current = !m.current),
        (g.current = Promise.all(
          wC.map((t) => {
            if (!(d && t !== `opacity`))
              return (
                f[t].jump(r[t] ?? EC[t]),
                new Promise((i) => {
                  let a = { ...e, onComplete: () => i() },
                    o = n[t] ?? r[t];
                  typeof o == `number` && ke(f[t], o, a);
                })
              );
          })
        )),
        g.current
      );
    }, [o, a, i, d]),
    [v, y] = u(!1),
    b = r(!1),
    x = S(async () => {
      !e || !b.current || (await _(), await h(n ?? 0), x());
    }, [_, h, e, n]),
    C = S(() => {
      b.current || ((b.current = !0), p(() => y(!0)), x());
    }, [x]),
    w = S((e = !0) => {
      (wC.forEach((e) => {
        f[e].stop();
      }),
        wC.forEach((e) => {
          f[e].set(EC[e]);
        }),
        (m.current = !1),
        e && ((b.current = !1), p(() => y(!1))));
    }, []),
    T = e && o,
    E = S(() => {
      document.hidden ? w(!1) : b.current && ((b.current = !1), C());
    }, [C, w]);
  (s(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    s(() => {
      (T && c) || (T ? C() : w());
    }, [C, w, c, T]),
    s(() => () => w(), [w]));
  let D = r(!1),
    O = S(async () => {
      g.current && (await g.current, !D.current && w());
    }, [w]);
  jS(
    l,
    S(
      (e) => {
        e.isIntersecting ? ((D.current = !0), C()) : ((D.current = !1), O());
      },
      [C, O]
    ),
    { enabled: T && c }
  );
  let k = v || !c;
  return t(() => ({ values: f, style: T && k ? DC : OC }), [T, k]);
}
function zc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function Bc(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = h.useRef(null),
    c = _e(),
    l = h.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : zc(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: u } = ge(),
    d = L(u, l),
    f = Ze(a && s.current === null ? `hidden` : n),
    p = Ze(0),
    m = C(AS);
  return (
    Ss(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Cs(m, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            je.update(() => {
              (d.set(l(u.get())), a && f.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Pt(() => {
      o && d.set(0);
    }),
    { values: { y: c || !o ? p : d }, style: o ? { ...DC, visibility: f } : OC }
  );
}
function Vc(e) {
  return typeof e == `object` && !!e;
}
function Hc(e) {
  if (Vc(e)) return e?.transition;
}
function Uc(e, t, n, r, i, a) {
  let o = Hc(e);
  return Promise.all(
    wC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Vc(e) ? (e?.[s] ?? EC[s]) : EC[s];
          if ((Ye(u) && (u = u.get()), !V(u))) return c();
          let d = Ve.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (B(i) && !l?.hasAnimated && F_.MotionHandoffAnimation) {
            let e = F_.MotionHandoffAnimation(i, s, je);
            e && (f = e);
          }
          a ? l.set(u) : ke(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Wc(
  { initial: e, animate: n, exit: i, presenceInitial: a, presenceAnimate: o, presenceExit: s },
  c,
  l,
  u,
  d
) {
  let f = a ?? e,
    p = o ?? n,
    m = s ?? i,
    [h, g] = ee(),
    _ = r({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = ta(() => {
      let e = f ?? u;
      if (!H(e)) return { values: TC() };
      let t = {};
      for (let n in e) {
        let r = H(e) ? e[n] : void 0;
        V(r) && (t[n] = r);
      }
      return { values: TC(t) };
    });
  Ss(
    c,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = Ve.get(e);
      if (n)
        for (let e in (Object.assign(_.current, { hasMounted: !0 }), v.values)) {
          if (!Ic(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, V(t) ? t : EC[e]);
        }
    },
    [p]
  );
  let y = _e();
  Ss(c, (e) => {
    if (!l) {
      g?.();
      return;
    }
    if (e === null) return;
    if (h !== _.current.lastPresence) {
      (Object.assign(_.current, { lastPresence: h }),
        h
          ? f &&
            p &&
            (Object.assign(_.current, { running: !0 }),
            Uc(p, v, y, c, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              Uc(m, v, y, c, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Dt(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      Uc(p, v, y, c, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = l && p;
  return t(() => ({ values: v.values, style: b ? DC : OC }), [b]);
}
function Gc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Kc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = Gc(o.current, document.documentElement) - NC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function qc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function Jc(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Nt();
  h.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return F((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = qc(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < PC) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Yc(e, t, n) {
  let r = Kc(e, t),
    i = [...IC],
    a = r[0];
  if (!V(a)) return LC;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!V(e)) return LC;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Xc(e) {
  return {
    x: e?.x ?? EC.x,
    y: e?.y ?? EC.y,
    scale: e?.scale ?? EC.scale,
    opacity: e?.opacity ?? EC.opacity,
    transformPerspective: e?.transformPerspective ?? EC.transformPerspective,
    rotate: e?.rotate ?? EC.rotate,
    rotateX: e?.rotateX ?? EC.rotateX,
    rotateY: e?.rotateY ?? EC.rotateY,
    skewX: e?.skewX ?? EC.skewX,
    skewY: e?.skewY ?? EC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Zc({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return h.useMemo(
    () => ({
      initial: r ?? Xc({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Xc({ opacity: t }),
      exit: i ?? Xc(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Qc(e, n) {
  let r = _e(),
    i = Zc(e),
    a = e.styleAppearEffectEnabled,
    o = Lc(a ? i.initial : i.animate, a),
    s = h.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    c = Nt(),
    l = h.useRef(),
    u = h.useCallback(async ({ transition: t, ...a }, s) => {
      let c = t ?? i.animate.transition ?? e.transition;
      await l.current;
      let u = Ve.get(n.current);
      l.current = Promise.all(
        wC.map((e) => {
          s && o.values[e].set(i.initial[e] ?? EC[e]);
          let t = a[e] ?? EC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((n) => {
              if (r && e !== `opacity`) (V(t) && o.values[e].set(t), n());
              else {
                let r = { restDelta: e === `scale` ? 0.001 : void 0, ...c, onComplete: () => n() };
                typeof t == `number` && ke(o.values[e], t, r);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && s.current.lastAppearState === !0;
  Ts(
    n,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = s.current;
      if (t) {
        s.current.scheduledAppearState = e;
        return;
      }
      ((s.current.scheduledAppearState = void 0),
        (s.current.lastAppearState = e),
        n !== e && u(e ? i.animate : i.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && a && !e.scrollDirection;
  return (
    h.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return F((r, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Yc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = ue(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Lx(i)[l];
        d && u(d);
      });
    }, [c, f]),
    Jc(e.scrollDirection, (e) => void u(e ?? i.animate), { enabled: a, repeat: !e.animateOnce }),
    Pt(() => {
      if (a && !(!e.targets && !e.scrollDirection))
        for (let e of wC) o.values[e].set(i.initial?.[e] ?? EC[e]);
    }),
    t(() => ({ values: o.values, style: a ? DC : OC }), [a])
  );
}
function $c(e, t) {
  let n = h.useRef({});
  h.useEffect(() => {
    if (t !== void 0)
      for (let r of p_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Be({
                keyframes: [a.get(), s],
                velocity: a.getVelocity(),
                ...t,
                restDelta: 0.001,
                onUpdate: o,
              })));
          },
          a = e[r],
          o,
          s;
        a.attach((e, t) => ((s = e), (o = t), je.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function el(e, t) {
  let n = BC();
  return {
    inputRange: Kc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of wC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function tl(e) {
  let t = BC();
  for (let { target: n } of e) for (let e of wC) t[e]?.push(n[e]);
  return t;
}
function nl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = _e(),
    s = Lc(zC(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Nt();
  return (
    j(() => {
      if (!(c || !l))
        return F((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = el(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of wC)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(ue(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    Ss(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = tl(n);
        return F(
          (e, { y: t }) => {
            for (let e of wC)
              (o && e !== `opacity`) ||
                (VC.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(ue(t.progress, VC, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    $c(s.values, r),
    Pt(() => {
      if (c) return;
      let e = zC(n, o);
      for (let t of wC) s.values[t].set(e?.[t] ?? EC[t]);
    }),
    h.useMemo(() => ({ values: s.values, style: t ? DC : OC }), [t])
  );
}
function rl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function il(e) {
  let t = {
    parallax: {},
    styleAppear: {},
    styleTransform: {},
    presence: { animate: e.animate, initial: e.initial, exit: e.exit },
    loop: {},
    forwardedProps: {},
    targetOpacityValue: e.__targetOpacity,
    withPerspective: e.__perspectiveFX,
    inSmartComponent: e.__smartComponentFX,
  };
  for (let n in e) {
    if (n === `__targetOpacity` || n === `__perspectiveFX` || n === `__smartComponentFX`) continue;
    let r = Cc(n);
    if (r) {
      for (let i of UC)
        if (HC[i]?.has(r)) {
          t[i][r] = Lx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Lx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = rl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = rl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function al(e) {
  return H(e) && KC in e;
}
function ol(e, t) {
  if (!e || !H(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ye(r) || !Ic(n) || (V(r.get()) && t[n].push(r));
  }
}
function sl(e) {
  return B(e) || Array.isArray(e);
}
function cl({ componentIdentifier: e, children: t }) {
  return t(C(JC)[e] ?? {});
}
function ll() {
  return h.useContext(YC);
}
function ul(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function dl() {
  if (N === void 0 || QC)
    return g(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw ew;
}
function fl({ children: e }) {
  return C(nw) ? g(D, { children: e }) : g(T, { fallback: tw, children: e });
}
function pl() {
  return g(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function ml(e, t) {
  if (!r_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  rn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function hl(...e) {
  console.error(...e);
}
function gl() {
  return Y.current() !== Y.canvas;
}
function _l({ getErrorMessage: e, fallback: t, children: n }) {
  return gl()
    ? g(vl, { fallback: t, children: g(iw, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function vl({ children: e, fallback: t = rw }) {
  return N === void 0 ? g(T, { fallback: t, children: e }) : g(fl, { children: e });
}
function yl() {
  return h.useContext(ow);
}
function bl() {
  let e = yl();
  return h.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function xl({ children: e, scopeId: t, nodeId: n }) {
  let r = yl(),
    i = h.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return g(ow.Provider, { value: i, children: e });
}
function Sl(e, t) {
  return `${sw}${e}:${t}`;
}
function Cl(e, t) {
  return Tl(`component`, e, t);
}
function wl(e, t) {
  return Tl(`override`, e, t);
}
function Tl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Sl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function El(e, t, n, r, i, a) {
  let o = Ol(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Dl(e, t, n, r) {
  return Ol(e, t, n, r);
}
function Ol(e, t, n, r) {
  return !!(nt(n) || (n === 1 && r && e === t));
}
function kl(e, t, n, r, i, a) {
  let o = yl(),
    { disableCustomCode: s } = b_();
  return nt(t) || nt(n)
    ? g(aw, { children: e })
    : s && r
      ? g(`div`, {
          style: {
            padding: `12px 16px`,
            borderWidth: 1,
            borderRadius: 6,
            borderStyle: `solid`,
            borderColor: `rgba(149, 149, 149, 0.15)`,
            backgroundColor: `rgba(149, 149, 149, 0.1)`,
            fontSize: 12,
            color: `#a5a5a5`,
          },
          children: `Code component disabled`,
        })
      : (El(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
          (e = g(_l, { getErrorMessage: Cl.bind(null, t, n), fallback: null, children: e })),
        i && (e = g(xl, { scopeId: t, nodeId: n, children: e })),
        e);
}
function Al(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function jl(e) {
  return !(!e || e.placement || e.alignment);
}
function Ml(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      W(e);
  }
}
function Nl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Ml(t)}, -100%`;
    case `right`:
      return `0%, ${Ml(t)}`;
    case `bottom`:
      return `${Ml(t)}, 0%`;
    case `left`:
      return `-100%, ${Ml(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Pl(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(gw)) {
      let e = n.getAttribute(gw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Fl(e) {
  let { registerCursors: t } = C(uw),
    n = ta(() => e),
    r = k();
  j(() => t(n, r), [t, r]);
}
function Il(e) {
  return !!(e && typeof e == `object` && vw in e);
}
function Ll(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function Rl() {
  return Y.current() === Y.canvas;
}
function zl(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function Bl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Vl(e, t, n, r) {
  if (B(e)) {
    let i = zl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Gr(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Hl(e) {
  return B(e) && e.startsWith(`data:${Tw}`);
}
function Ul(e) {
  if (Hl(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Tw.length),
        r = t.searchParams,
        i = r.has(xw) ? r.get(xw) : void 0,
        a,
        o = r.get(Sw),
        s = r.get(Cw),
        c = r.get(ww);
      return (
        o &&
          s &&
          c &&
          (a = {
            collection: o,
            collectionItemId: s,
            pathVariables: Object.fromEntries(new URLSearchParams(c).entries()),
          }),
        { target: n === `none` ? null : n, element: i === `none` ? void 0 : i, collectionItem: a }
      );
    } catch {
      return;
    }
}
function Wl(e, t, n) {
  let r = t.getAttribute(`data-framer-page-link-target`),
    i,
    a;
  if (r) {
    i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
    let e = t.getAttribute(`data-framer-page-link-path-variables`);
    e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
  } else {
    let e = t.getAttribute(`href`);
    if (!e) return !1;
    let n = Ul(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Gl(e) {
  if (!Hl(e)) return e;
  let t = Ul(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Kl(i) };
}
function Kl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function ql(e, n, r, i, a, o) {
  let s = C(Ew),
    c = bl(),
    l = t(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    u = At(),
    d = Mt(),
    { locales: f } = yr(),
    p = t(() => {
      let e = Il(i) ? i : Gl(i);
      if (e) return Vl(e, u, d, f);
    }, [d, i, u, f]),
    m = !!(!Rl() && s?.nodeId && l.nodeId),
    h = S(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), Ua(e))) {
            Xl(a.href, ``, `_blank`);
            return;
          }
          p ? a.navigate?.() : Xl(a.href, a.rel, a.target);
        }
      },
      [a, p]
    ),
    _ = S(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), Xl(a.href, ``, `_blank`));
      },
      [a]
    ),
    v = S(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          p ? a.navigate?.() : Xl(a.href, a.rel, a.target));
      },
      [a, p]
    );
  Ss(
    o,
    (e) => {
      e !== null && m && (e.dataset.hydrated = `true`);
    },
    [m]
  );
  let y = e;
  return (
    m &&
      (A.forEach(e, (e) => {
        Yl(e) &&
          (U(
            Jl(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          U(
            Jl(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          bw.collectNestedLink(s, l));
      }),
      (y = A.map(e, (e) => {
        if (!Yl(e)) return e;
        let t = Zl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: h,
            onAuxClick: _,
            onKeyDown: v,
            as: r.as && Zl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return O(t, { ...i, ref: a }, n);
      }))),
    g(Ew.Provider, { value: l, children: y })
  );
}
function Jl(e) {
  return !nt(e?.nodeId);
}
function Yl(e) {
  return v(e) && (Zl(e.type) !== e.type || Zl(e.props.as) !== e.props.as);
}
function Xl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Zl(e) {
  return e === `a` ? `span` : Te(e) && re(e) === `a` ? I.span : e;
}
function Ql({ component: e, props: t }) {
  let n = C(lC),
    r = O(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return g(mC, { overrides: o, breakpoint: i, children: r });
}
function $l(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : $l(e.parentElement, t)
      : null;
}
function eu({ children: e }) {
  return g(fl, { children: e });
}
function tu(e) {
  return y(function (t, n) {
    return g(eu, { children: g(e, { ...t, ref: n }) });
  });
}
function nu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return iu(e, t, o, s, a, c, l, i, r);
}
function ru(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && zl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      U(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      U(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Gr(e.routes, o, void 0, r),
        u = e.getRoute(s);
      if (u)
        return {
          routeId: s,
          route: u,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, c),
          locale: l ? r?.find(({ id: e }) => e === l) : void 0,
        };
    } catch {}
}
function iu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = cr(d, {
      currentRoutePath: t?.path,
      currentRoutePathLocalized: t?.pathLocalized,
      currentPathVariables: t?.pathVariables,
      hash: r,
      pathVariables: l,
      hashVariables: u,
      preserveQueryParams: e.preserveQueryParams,
      siteCanonicalURL: e.siteCanonicalURL,
      localeId: c?.id,
    });
  return {
    routeId: n,
    route: d,
    href: f,
    elementId: f.split(`#`, 2)[1],
    pathVariables: l,
    locale: c ?? void 0,
  };
}
function au() {
  let e = C(jw),
    t = Mt()?.pathVariables;
  return e || t;
}
function ou(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Aw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function su() {
  let e = d.connection || d.mozConnection || d.webkitConnection || {},
    t = d.deviceMemory && d.deviceMemory > Pw,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? Fw : Iw));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: Nw }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = zw.get(n);
    if (!a?.size || Rw.has(n)) return;
    (++s, Rw.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), Lw.delete(t));
    for (let e of a) (o.unobserve(e), Lw.delete(e));
    (a.clear(), zw.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = Lw.get(e);
      if (!n || Rw.has(n.id)) {
        (o.unobserve(e), Lw.delete(e));
        continue;
      }
      let r = n.id,
        a = zw.get(r),
        l = zw.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : zw.set(r, new Set([e])), setTimeout(c, Mw, n, e));
      } else (a && a.delete(e), l <= 1 && zw.delete(r));
    }
  }
  return (e, t, n) => {
    if (!Rw.has(n))
      return (
        Lw.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (Lw.delete(e), o.unobserve(e));
        }
      );
  };
}
function cu(e, t) {
  let n = zl(e),
    r = {
      href: e === `` || Bl(e, n) ? e : `https://${e}`,
      target: lu(t?.openInNewTab, n),
      rel: n ? void 0 : uu(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = An(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function lu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function uu(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function du(e, t) {
  console.warn(
    dt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function fu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return du(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ct(i) ? i.catch(du) : i;
  } catch (e) {
    du(e);
  }
}
async function pu(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      U(a, `unresolvedSlug should be defined`);
      let o = fu(a, r, n),
        s = ct(o) ? await o : o;
      s && (t[i] = s);
    }
    return t;
  }
  let [a, o] = await Promise.allSettled([i(e), i(t)]);
  return {
    path: a.status === `fulfilled` ? a.value : void 0,
    hash: o.status === `fulfilled` ? o.value : void 0,
  };
}
function mu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = fu(o, r, n);
      ct(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function hu() {
  let e = hn();
  return S((t, n, r, i = []) => mu(t, n, r, e, i), [e]);
}
function gu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = hn();
  return S(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Il(r) ? r : Gl(r);
      if (!Il(c))
        return rn(
          `published_site_click`,
          {
            ...s,
            href: o ? _u(o) : null,
            nodeId: e ?? null,
            trackingId: t || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = n?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = a?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (B(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (ct(n) ? await n : n) ?? null;
        }
      }
      return rn(
        `published_site_click`,
        {
          ...s,
          href: o ? _u(o) : null,
          nodeId: e ?? null,
          trackingId: t ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, t, n, r, i, a]
  );
}
function _u(e) {
  try {
    let t = new URL(e, F_.document.baseURI);
    return t.origin === F_.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function vu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function yu(e, t, n) {
  return async (r) => {
    let i = Ua(r),
      a = $l(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await bn({
        priority: `user-blocking`,
        ensureContinueBeforeUnload: !0,
        continueAfter: `paint`,
      }),
        c());
      return;
    }
    (r.preventDefault(), n(c));
  };
}
function bu(e, t, n, r, i, a, o, s) {
  if (!n) return cu(e, r);
  let c = ru(t, e, s, o);
  if (!c) return cu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return cu(e, r);
  let m = cr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !i_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = lu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => vu(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: yu(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && ou(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function xu(e, t, n) {
  let r = Su(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Qe(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Qe(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Su(e, t) {
  let n = H(e) ? e : void 0,
    r = n && !tt(n),
    i = t && !tt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Cu(e, t, n) {
  if (!(t && Ma())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: wu } : { ...i, onTap: r }) : e;
}
function wu(e) {
  let t = $l(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Tu(e, t, n, r, i, a) {
  let o = Il(e) ? e : Gl(e);
  if (!Il(o)) return B(e) ? cu(e).href : void 0;
  if (!t.getRoute || !t.currentRouteId) return;
  let s = t.getRoute(t.currentRouteId),
    {
      webPageId: c,
      hash: l,
      pathVariables: u,
      hashVariables: d,
      unresolvedHashSlugs: f,
      unresolvedPathSlugs: p,
    } = o,
    m = t.getRoute(c),
    h = p || f ? a?.(p, f) : void 0;
  if (ct(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
    v = cr(m, {
      currentRoutePath: s?.path,
      currentRoutePathLocalized: s?.pathLocalized,
      currentPathVariables: t.currentPathVariables,
      hash: l,
      pathVariables: g,
      hashVariables: _,
      relative: !1,
      preserveQueryParams: t.preserveQueryParams,
      onlyHash: r,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: i?.id,
    });
  return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function Eu() {
  return function () {
    async function e(e) {
      let t = new TextEncoder().encode(e),
        n = await crypto.subtle.digest(`SHA-256`, t);
      return Array.from(new Uint8Array(n))
        .map((e) => e.toString(16).padStart(2, `0`))
        .join(``);
    }
    function t(e) {
      let t = ``;
      for (let n = 0; n < e; n++)
        t += `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
          Math.floor(Math.random() * 62)
        );
      return t;
    }
    addEventListener(`message`, async (n) => {
      let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
        s = `0`.repeat(i),
        c = performance.now(),
        l = !0;
      for (; l;) {
        if (performance.now() - c > o) {
          ((l = !1), postMessage({ success: !1 }));
          return;
        }
        let n = t(a),
          i = `${Date.now()}:${n}`,
          u = await e(r + i);
        if (u.startsWith(s)) {
          postMessage({ success: !0, secret: i, hash: u });
          return;
        }
      }
    });
  }.toString();
}
async function Du() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, Eu(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: Hw, difficulty: Uw, tokenLength: Ww, maxTime: Gw }));
  });
}
function Ou(e) {
  return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function ku(e, t) {
  try {
    let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
    if (n !== null && n[2]) {
      let t = JSON.parse(decodeURIComponent(n[2]));
      if (!t || typeof t != `object`) return;
      [`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`].forEach(
        (n) => {
          typeof t[n] == `string` && e.append(n, t[n]);
        }
      );
    }
  } catch {}
}
function Au(e) {
  let t = h.useContext(sT),
    n = h.useMemo(
      () =>
        e
          ? Jw.map((e) => ({
              inputRef: h.createRef(),
              originalName: e,
              methodsUsed: { setAttribute: !1, valueProperty: !1 },
            }))
          : [],
      [e]
    );
  return {
    states: n,
    convertHoneypotFieldsForSubmission: h.useCallback(() => {
      n.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${qw}_${e.originalName}`);
      });
    }, [n]),
    replaceHoneypotWithMetadata: h.useCallback(
      (r) => {
        if (!e) return;
        let i = n.length,
          a = 0,
          o = [];
        (n.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let n = t.name,
              i = t.value;
            if (i) {
              a++;
              let t = {
                [Xw.name]: e.originalName,
                [Xw.value]: i,
                [Xw.setAttribute]: e.methodsUsed.setAttribute,
                [Xw.valueProperty]: e.methodsUsed.valueProperty,
                [Xw.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [Xw.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [Xw.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              o.push(JSON.stringify(t));
            }
            (r.delete(n), (t.name = e.originalName));
          }
        }),
          r.append(`${qw}_${Zw.fieldData}`, `[${o.join(`,`)}]`),
          r.append(`${qw}_${Zw.fieldCount}`, i.toString()),
          r.append(`${qw}_${Zw.fieldFilledCount}`, a.toString()),
          r.append(`${qw}_${Zw.hpVersion}`, Kw),
          r.append(`${qw}_${Zw.siteId}`, t || ``),
          r.append(`${qw}_${Zw.timeToSubmissionSinceModuleLoad}`, Qw()));
      },
      [e, n, t]
    ),
  };
}
function ju({ states: e }) {
  return g(D, { children: e.map((e) => g($w, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function Mu({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          Nu(e, t, n);
        })
      : Nu(e.pageviewEventData.current, t, n));
}
function Nu(e, t, n) {
  return rn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Pu(e) {
  return `${eT}?render=${encodeURIComponent(e)}&badge=bottomleft`;
}
function Fu(e) {
  let t = tT.get(e);
  if (t) return t;
  let n = Pu(e);
  if (document.querySelector(`script[src="${n}"]`)) {
    let t = Promise.resolve();
    return (tT.set(e, t), t);
  }
  let r = new Promise((t, r) => {
    let i = document.createElement(`script`);
    ((i.src = n),
      (i.onload = () => t()),
      (i.onerror = () => {
        (tT.delete(e), i.remove(), r(Error(`Failed to load captcha script`)));
      }),
      document.head.appendChild(i));
  });
  return (tT.set(e, r), r);
}
function Iu(e, t) {
  return new Promise((t, n) => {
    let { grecaptcha: r } = N;
    if (!r) {
      n(Error(`Captcha script not available`));
      return;
    }
    r.ready(() => {
      r.execute(e).then(t, n);
    });
  });
}
function Lu({ provider: e, siteKey: t }) {
  return (
    h.useEffect(() => {
      e === `recaptcha_v3` &&
        t &&
        o_(() => {
          Fu(t).catch(() => {});
        });
    }, [e, t]),
    {
      executeChallenge: h.useCallback(
        async (n) => {
          if (!(e !== `recaptcha_v3` || !t)) return (await Fu(t), Iu(t, n));
        },
        [e, t]
      ),
    }
  );
}
function Ru({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? oT : aT;
    case `incomplete`:
      return e === `error` ? oT : iT;
    case `submit`:
      return nT;
    case `success`:
      return rT;
    case `error`:
      return oT;
    default:
      W(t);
  }
}
function zu({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Bu(e) {
  e.preventDefault();
}
function Vu(e, t) {
  let n = Bl(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Hu(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Hu(t)) return !0;
  return !1;
}
async function Uu(e, t, n, r) {
  let i = await Du();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = await r(`submit`),
    o = { "Framer-Site-Id": n, "Framer-POW": i.secret, "Framer-Form-Fields": Ou(t) };
  a && (o[`Framer-Captcha-Response`] = a);
  let s = await fetch(e, { body: t, method: `POST`, headers: o });
  if (s.ok) return s;
  {
    let e = await s.json(),
      t = `Failed to submit form`;
    throw Wu(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Wu(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    H(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Gu({ EditorBar: e, fast: n = !1 }) {
  let r = b_(),
    i = C(sT),
    a = M(s_, n ? dT : fT, l_),
    o = t(() => {
      let e = {},
        t;
      for (t in r)
        r.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = r[t]);
      return e;
    }, [r]);
  return !e || !i || !a
    ? null
    : g(uT, { children: g(T, { children: g(e, { framerSiteId: i, features: o }) }) });
}
function Ku({ currentRoutePath: e, routerAPI: t, children: n }) {
  let i = r(),
    a = r(),
    o = r(t),
    c = r(null);
  ((o.current = t),
    s(() => {
      e && ((i.current ??= new Set()), i.current.add(e), a.current?.(e));
    }, [e]));
  let [l] = u(() => ({
    getInitialState: () => ({
      visitedPages: i.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? Ju(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? Ju(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && qu(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: c,
  }));
  return g(pT.Provider, { value: l, children: n });
}
async function qu(e, t) {
  if (!an(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    rn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Ju(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? kn(r.path, n) : r.path;
}
function Yu({ children: e, loadSnippetsModule: t }) {
  return g(wT.Provider, { value: t, children: e });
}
function Xu() {
  return h.useContext(wT);
}
function Zu(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Qu(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (U(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (U(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t.nextSibling));
      break;
    case `afterbegin`:
      ((r = t), (i = t.firstChild));
      break;
    case `beforeend`:
      ((r = t), (i = null));
      break;
    default:
      W(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await $u(a.createContextualFragment(e), r, i));
}
async function $u(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = ed(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await $u(r, e, null)));
  }
}
function ed(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return td(r, t, n);
}
function td(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function nd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = bT), (n = xT));
      break;
    case `bodyEnd`:
      ((t = ST), (n = CT));
      break;
    case `headStart`:
      ((t = gT), (n = _T));
      break;
    case `headEnd`:
      ((t = vT), (n = yT));
      break;
  }
  let r = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head,
    i = null,
    a = null;
  for (let e of r.childNodes) {
    if (e.nodeType !== Node.COMMENT_NODE) continue;
    let r = `<!--${e.nodeValue}-->`;
    r === t ? (i = e) : r === n && (a = e);
  }
  return { start: i, end: a };
}
function rd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Zu(e),
    s = t.nextSibling;
  for (; s && s !== n;) {
    if (s.nodeType !== Node.COMMENT_NODE) {
      s = s.nextSibling;
      continue;
    }
    let e = `<!--${s.nodeValue}-->`;
    if (e === a) r = s;
    else if (e === o) {
      i = s;
      break;
    }
    s = s.nextSibling;
  }
  return { start: r, end: i };
}
async function id(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = nd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = rd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((ad(t, o), s)) {
      await Qu(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Zu(e.id),
      u = `${c}
${e.code}
${l}`,
      d = sd(e.id, n, r, i);
    d ? await Qu(u, d, `afterend`) : await Qu(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function ad(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (od(n) && n.remove(), (n = e));
  }
}
function od(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function sd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = rd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function cd() {
  let e = Xu();
  return S(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(mT),
        o = a && a.dataset[hT] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await id(t, n, r);
      }
    },
    [e]
  );
}
function ld(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function ud() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((TT = e.timeZone), (ET = e.locale));
}
function dd() {
  let [e, t] = h.useState(0);
  return [e, h.useCallback(() => t((e) => e + 1), [])];
}
function fd(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    vd(r, t);
    return;
  }
  n || N.scrollTo(0, 0);
}
function pd(e) {
  let t = r([]);
  return (
    j(() => {
      t.current?.length && (t.current.forEach((e) => e()), (t.current = []));
    }, [e]),
    S((e) => {
      t.current.push(e);
    }, [])
  );
}
function md(e) {
  if (!e) return n_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function hd() {
  let e = fr(),
    t = r(void 0);
  return S(
    async (n, r, i, a = !0) => {
      let o = i !== void 0;
      t.current?.abort();
      let s = a ? new AbortController() : void 0;
      t.current = s;
      let c = s?.signal,
        l = Lt(c);
      if ((r.promise.finally(l), !o)) return ((t.current = void 0), n(c), r.promise);
      n(c);
      let u;
      if (
        (e(
          new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(n_),
          i,
          s
        ),
        await r.promise,
        c?.aborted)
      )
        return;
      let d = N.navigation?.transition;
      u();
      try {
        await d?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      c?.aborted || _v();
    },
    [e]
  );
}
function gd({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: i,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: l,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: f,
  locales: m = __,
  preserveQueryParams: h = !1,
  LayoutTemplate: _,
  EditorBar: v,
  siteCanonicalURL: y,
  adaptLayoutToTextDirection: b,
}) {
  (Lr(), ar({ disabled: n, routeId: a, initialPathVariables: i, initialLocaleId: d }));
  let x = Zn(),
    [C, T] = dd(),
    E = pd(C),
    D = hd(),
    O = er(`framer-route-change`),
    { synchronousNavigationOnDesktop: k } = b_(),
    A = t(() => (!k || !Ha() ? p : (e) => e()), [k]),
    M = cd(),
    P = r(!0),
    F = r(),
    ee = r(a),
    I = r(i),
    te = r(d),
    ne = te.current,
    re = t(() => m.find(({ id: e }) => (ne ? e === ne : e === x_)) ?? null, [ne, m]),
    L = re?.textDirection ?? `ltr`,
    ie = b ? L : `ltr`;
  j(() => {
    b && document.documentElement.setAttribute(`dir`, L);
  }, [L, b]);
  let ae = ur(),
    oe = t(
      () => ({
        activeLocale: re,
        locales: m,
        setLocale: async (e) => {
          let t = O({ localized: !0 });
          await bn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          B(e) ? (n = e) : H(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === x_),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = ee.current,
            o = u[a];
          if (o)
            try {
              let e = await ae({
                currentLocale: re,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: I.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = nr(N.history.state) ? N.history.state.paginationInfo : void 0,
                s = e.path;
              ((P.current = !1),
                (I.current = e.pathVariables),
                (te.current = i.id),
                D(
                  () => {
                    x(a, a, () => A(T));
                  },
                  t,
                  async (t = !1) => {
                    if (s)
                      return ir(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        s,
                        t
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [re, T, m, h, u, D, x, O, A, ae]
    ),
    se = S(
      (e, t, n, r, i, a, o, s = !1, c) => {
        P.current = !1;
        let l = ee.current;
        if (
          ((ee.current = e),
          (I.current = i),
          (te.current = t),
          (F.current = r),
          E(() => {
            fd(n, s, a);
          }),
          a)
        ) {
          A(T);
          return;
        }
        D(
          (t) => {
            x(l, e, () => A(T), t);
          },
          o,
          c,
          !0
        );
      },
      [T, E, D, x, A]
    );
  or(ee, se);
  let ce = S(
      async (e, t, r, i, a) => {
        let o = u[e],
          s = pt(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          d = md(a);
        if (
          (bn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await bn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(av)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = It(o, t),
          p = I.current,
          m = te.current;
        if (ld({ routeId: ee.current, pathVariables: p }, { routeId: e, pathVariables: r })) {
          l.ignore?.();
          let a = u[e];
          (N.history.state?.hash !== t &&
            !n &&
            a &&
            (d(),
            await tr(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: p,
              pathVariables: r,
              hash: t,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            fd(f, i, !1));
          return;
        }
        if (!o) return;
        let g = u[ee.current];
        se(
          e,
          m,
          f,
          Pn(y) +
            cr(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: t,
              pathVariables: r,
              localeId: m,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              relative: !1,
            }),
          r,
          !1,
          l,
          i,
          n
            ? void 0
            : async (n = !1) => (
                d(),
                tr(
                  e,
                  o,
                  {
                    currentRoutePath: g?.path,
                    currentPathVariables: p,
                    currentRoutePathLocalized: g?.pathLocalized,
                    hash: t,
                    pathVariables: r,
                    localeId: m,
                    preserveQueryParams: h,
                    siteCanonicalURL: y,
                  },
                  n
                )
              )
        );
      },
      [u, se, n, h, y, O]
    ),
    le = Ot(u),
    ue = ee.current,
    de = F.current,
    R = I.current,
    fe = u[ue],
    pe = fe?.path,
    me = DT(fe, ue, de, R, re, f),
    he = P.current;
  s(() => {
    M(ue, R ?? {}, oe.activeLocale, he);
  }, [M, ue, R, oe, he]);
  let ge = t(
    () => ({
      navigate: ce,
      getRoute: le,
      currentRouteId: ue,
      currentPathVariables: R,
      routes: u,
      collectionUtils: l,
      preserveQueryParams: h,
      pageviewEventData: me,
      siteCanonicalURL: y,
      isInitialNavigation: he,
    }),
    [ce, le, ue, R, u, l, h, y, me, he]
  );
  if (!fe) throw Error(`Router cannot find route for ${ue}`);
  let _e = !re || !fe.includedLocales || fe.includedLocales.includes(re.id),
    ve = pe && R ? kn(pe, R) : pe,
    ye = String(ne) + ve,
    be = ta(() => ({ ...e, display: `contents` }));
  return g(kt, {
    api: ge,
    children: g(Ev.Provider, {
      value: oe,
      children: g(Dv.Provider, {
        value: ie,
        children: g(mw, {
          children: g(Tr, {
            children: w(Ku, {
              currentRoutePath: ve,
              routerAPI: ge,
              children: [
                v && g(Gu, { EditorBar: v, fast: !0 }),
                g($C, {
                  children: w(fl, {
                    children: [
                      w(ay, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        forceUpdateKey: C,
                        children: [
                          g(ry.Start, {}),
                          g(_d, {
                            LayoutTemplate: _,
                            webPageId: fe?.abTestingVariantId ?? ue,
                            style: e,
                            children: (t) =>
                              g(c, { children: _e ? Hr(fe.page, t ? be : e) : o && Hr(o, e) }, ye),
                          }),
                        ],
                      }),
                      v && g(Gu, { EditorBar: v }),
                      g(Nr, {}),
                      g(ry.End, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
      }),
    }),
  });
}
function _d({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? g(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function vd(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function yd(e) {
  return new Promise((t, n) => {
    try {
      new URL(e);
      let r = new Image();
      ((r.onload = () => t()), (r.onerror = n), (r.src = e));
    } catch (e) {
      n(e);
    }
  });
}
function bd(e) {
  return typeof e == `object` && !!e;
}
function xd(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!bd(r)) return;
    r = r[e];
  }
  return r;
}
function Sd(e) {
  return `${e.credentials}:${e.url}`;
}
function Cd(e) {
  return B(e) && !Number.isNaN(Number(e));
}
function wd(e, t) {
  switch (e) {
    case `string`:
      return B(t) || V(t);
    case `color`:
      return B(t);
    case `boolean`:
      return $e(t);
    case `number`:
      return V(t) || Cd(t);
    case `link`:
    case `image`:
      return B(t) && Bl(t, !1);
    default:
      return !1;
  }
}
function Td(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = xd(e.data, t.resultKeyPath);
  if (nt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!wd(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function Ed(e, t) {
  if (Y.current() === Y.canvas) return !1;
  let n = Math.max(t * 1e3, kT);
  return Date.now() >= e + n;
}
function Dd(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    routes: s,
    collectionUtils: c,
    notFoundPage: l,
    isReducedMotion: u = !1,
    skipAnimations: d = !1,
    includeDataObserver: f = !1,
    localeId: p,
    locales: m,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
  } = e;
  return (
    h.useEffect(() => {
      n || My.start();
    }, []),
    n
      ? g(hr, {
          value: r ?? `preview`,
          children: g(Me, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: g(mn, {
              collectionUtils: c,
              children: g(VT, {
                children: g(sT.Provider, {
                  value: a,
                  children: g(Yu, {
                    loadSnippetsModule: w,
                    children: g(gd, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: T,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: y ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: _,
                      EditorBar: v,
                      disableHistory: b,
                      LayoutTemplate: x,
                      siteCanonicalURL: S,
                      adaptLayoutToTextDirection: C,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : g(f ? oC : h.Fragment, {
          children: g(jt, {
            routes: s,
            children: g(XS, { children: h.isValidElement(t) ? t : h.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Od(e) {
  return {
    trace(...t) {
      return Wx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Wx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Wx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Wx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Wx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Wx.getLogger(e) !== void 0;
    },
  };
}
function kd(e) {
  let t = e.next();
  return (U(t.done, `Generator must not yield`), t.value);
}
async function Ad(e, t = e.next()) {
  for (; !t.done;) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function jd(e) {
  let t = e.next();
  return t.done ? t.value : Ad(e, t);
}
function* Md(e) {
  let t = {},
    n = Object.keys(e),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Ad(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Nd(e) {
  let t = [],
    n = e.keys(),
    r = [];
  for (let i of n) {
    let n = e[i];
    if (ot(n)) {
      let e = n.next();
      e.done
        ? (t[i] = e.value)
        : r.push(
            Ad(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Pd(e) {
  return Ld(e) || Bd(e);
}
function Fd(e) {
  return et(e) && e.every(H);
}
function Id(e) {
  return H(e) && Qe(e.read) && Qe(e.preload);
}
function Ld(e) {
  return Fd(e) || Id(e);
}
function Rd(e) {
  return H(e) && H(e.schema);
}
function zd(e) {
  return H(e) && H(e.collectionByLocaleId);
}
function Bd(e) {
  return Rd(e) || zd(e);
}
function Vd(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = _f(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Hd(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => UT.cast(e, t.definition)) };
  }
  return null;
}
function Ud(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Wd(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Gd(e) {
  return Wd(e)?.value ?? !1;
}
function Kd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function qd(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Jd(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Yd(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return at(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Xd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Zd(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Qd(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $d(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function ef(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function tf(e) {
  switch (e?.type) {
    case `link`:
      return e;
    case `string`:
      try {
        let { protocol: t } = new URL(e.value);
        return t === `http:` || t === `https:` ? { type: `link`, value: e.value } : null;
      } catch {
        return null;
      }
  }
  return null;
}
function nf(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function rf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function af(e) {
  return rf(e)?.value ?? null;
}
function of(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = _f(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function sf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = UT.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function cf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function lf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function uf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function df(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function ff(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function pf(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function mf(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function hf(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function gf(e) {
  return hf(e)?.value ?? null;
}
function _f(e, t, n) {
  if (rt(e) || rt(t)) return (U(e === t), 0);
  switch (e.type) {
    case `array`:
      return (U(e.type === t.type), Vd(e, t, n));
    case `boolean`:
      return (U(e.type === t.type), Ud(e, t));
    case `color`:
      return (U(e.type === t.type), Kd(e, t));
    case `date`:
      return (U(e.type === t.type), Jd(e, t));
    case `enum`:
      return (U(e.type === t.type), Xd(e, t));
    case `file`:
      return (U(e.type === t.type), Qd(e, t));
    case `link`:
      return (U(e.type === t.type), ef(e, t));
    case `number`:
      return (U(e.type === t.type), nf(e, t));
    case `object`:
      return (U(e.type === t.type), of(e, t, n));
    case `responsiveimage`:
      return (U(e.type === t.type), cf(e, t));
    case `richtext`:
      return (U(e.type === t.type), uf(e, t));
    case `vectorsetitem`:
      return (U(e.type === t.type), ff(e, t));
    case `string`:
      return (U(e.type === t.type), mf(e, t, n));
    default:
      W(e);
  }
}
async function vf(e, t) {
  return Id(e) ? (await e.preload(t), e.read(t)) : e;
}
function yf(e) {
  return e.includes(JT);
}
function bf(e) {
  if (!Bd(e) || !e.id) return;
  let t = KT.get(e.id);
  if (!t) return (KT.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function xf(e) {
  let t = bf(e);
  if (t) return t;
  let n = qT.get(e);
  if (n) return n;
  let r = `${JT}${Math.random().toString(16).slice(2)}`;
  return (qT.set(e, r), r);
}
function Sf(e, t) {
  if (Ld(e)) {
    let n = xf(e) + (t?.id ?? x_),
      r = YT.get(n);
    if (r) return r;
    let i = new GT(e, t);
    return (YT.set(n, i), i);
  }
  if (Rd(e)) return e;
  if (zd(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  W(e, `Unsupported collection type`);
}
function Cf() {
  return 25;
}
function wf() {
  return 12500;
}
function Tf(e) {
  return e;
}
function Ef(e) {
  return e;
}
function Df(e) {
  return H(e) && Qe(e.getHash);
}
function q(e, ...t) {
  return Ef(
    `${e}(${t.map((e) => (U(!(e instanceof iE), `Pass CollectionMetadata.id instead`), U(!(e instanceof sE), `Pass FieldMetadata.id instead`), U(!(e instanceof aE), `Pass IndexMetadata.id instead`), U(!(e instanceof eE), `Pass RelationalNode.group.id instead`), U(!(e instanceof ZT), `Pass Group.id instead`), Df(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function Of(e, t) {
  return { collectionId: xf(e), pointer: t };
}
function kf(e) {
  return H(e) && B(e.collectionId);
}
function Af(e, t) {
  return { collectionId: xf(e), pointer: t };
}
function jf(e) {
  return H(e) && B(e.collectionId);
}
function Mf(e, t) {
  let n = new Map();
  function r(e) {
    if (H(e))
      if (e.type === `Collection` && Pd(e.data)) {
        let r = Sf(e.data, t),
          i = xf(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (et(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Nf(e) {
  return e;
}
function Pf(e) {
  return e;
}
function Ff(e) {
  return e;
}
function If(e) {
  return Array(e).fill({ type: `All` });
}
function Lf(e, ...t) {
  if (e) return;
  let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
  if (n.stack)
    try {
      let e = n.stack.split(`
`);
      e[1]?.includes(`assert`)
        ? (e.splice(1, 1),
          (n.stack = e.join(`
`)))
        : e[0]?.includes(`assert`) &&
          (e.splice(0, 1),
          (n.stack = e.join(`
`)));
    } catch {}
  throw n;
}
function Rf(e) {
  let t = new Set();
  if (!e) return t;
  Lf(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (Lf(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function zf(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Bf(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Vf(e) {
  return `${e.functionName}(${e.arguments.map((e) => Kf(e)).join(`, `)})`;
}
function Hf(e) {
  let t = `CASE`;
  e.value && (t += ` ${Kf(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Kf(n.when)} THEN ${Kf(n.then)}`;
  return (e.else && (t += ` ELSE ${Kf(e.else)}`), (t += ` END`), t);
}
function Uf(e) {
  let t = Kf(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Wf(e) {
  let t = Kf(e.left),
    n = Kf(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Gf(e) {
  return `CAST(${Kf(e.value)} as ${e.dataType})`;
}
function Kf(e) {
  switch (e.type) {
    case `Identifier`:
      return zf(e);
    case `LiteralValue`:
      return Bf(e);
    case `FunctionCall`:
      return Vf(e);
    case `Case`:
      return Hf(e);
    case `UnaryOperation`:
      return Uf(e);
    case `BinaryOperation`:
      return Wf(e);
    case `TypeCast`:
      return Gf(e);
    case `Select`:
      return `${Zf(e)}`;
    default:
      W(e);
  }
}
function qf(e) {
  return Rd(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Jf(e) {
  let t = `${Yf(e.left)} LEFT JOIN ${Yf(e.right)}`;
  return (e.constraint && (t += ` ON ${Kf(e.constraint)}`), t);
}
function Yf(e) {
  switch (e.type) {
    case `Collection`:
      return qf(e);
    case `LeftJoin`:
      return Jf(e);
    default:
      W(e);
  }
}
function Xf(e) {
  let t = ``;
  return (
    e.split(/\s+/u).forEach((e) => {
      e !== `` &&
        ([`SELECT`, `FROM`, `WHERE`, `ORDER`, `LIMIT`, `OFFSET`].includes(e)
          ? (t += `
${e}`)
          : [`AND`, `OR`].includes(e)
            ? (t += `
	${e}`)
            : (t += ` ${e}`));
    }),
    t.trim()
  );
}
function Zf(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Kf(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Yf(e.from)}`),
    e.where && (t += ` WHERE ${Kf(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Kf(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Kf(e.limit)}`),
    e.offset && (t += ` OFFSET ${Kf(e.offset)}`),
    Xf(t)
  );
}
function Qf(e) {
  return H(e) && e.type === `Collection`;
}
function $f(e, t) {
  return Qf(t) && Pd(t.data) ? xf(t.data) : t;
}
function ep(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, $f) + n;
}
function tp(e) {
  let { activeLocale: t } = yr();
  return vD.get(e, t).use();
}
function np(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(nt(e) || H(e)))
    .map(([e, n]) => ({
      type: `BinaryOperation`,
      operator: `==`,
      left: {
        type: `TypeCast`,
        value: { type: `Identifier`, name: e, collection: t },
        dataType: `STRING`,
      },
      right: { type: `LiteralValue`, value: String(n) },
    }));
  return n.length === 0
    ? { type: `LiteralValue`, value: !1 }
    : n.reduce((e, t) => ({ type: `BinaryOperation`, operator: `and`, left: e, right: t }));
}
function rp(e) {
  let t = r(e);
  return (
    f(() => {
      t.current = e;
    }, [e]),
    vr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function ip(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function ap() {
  return new Set();
}
function op(e) {
  let t = ta(ap),
    n = ta(ap);
  return (
    As(() => () => ip(n, t)),
    s(() => () => ip(n, t), []),
    s(() => {
      ip(n, t);
    }, [e]),
    r({
      activeVariantCallback:
        (e) =>
        async (...n) =>
          new Promise((r, i) => {
            (t.add(i), e(...n).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          n.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function sp(e, t, n) {
  return h.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function cp(e) {
  for (let [t, n] of Object.entries(e)) if (F_.matchMedia(n).matches) return t;
}
function lp(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && F_.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function up(e, t, n = !0) {
  let i = C(qS),
    a = uo(),
    o = Ji(),
    c = Ra() && (!a || o),
    l = r(c ? (cp(t) ?? e) : e),
    u = r(n && i ? e : l.current),
    d = zo(),
    f = pe(),
    m = S(
      (e) => {
        if (e !== l.current || e !== u.current) {
          let t = function () {
            ((l.current = u.current = e),
              p(() => {
                d();
              }));
          };
          a
            ? t()
            : f(() => {
                t();
              });
        }
      },
      [f, d, a]
    );
  return (
    $x(() => {
      if (a) {
        if (o) {
          m(cp(t) ?? e);
          return;
        }
        m(e);
      }
    }, [e, o, a, t, m]),
    $x(() => {
      !n || i !== !0 || m(l.current);
    }, []),
    s(() => {
      if (!c || o) return;
      let e = [];
      for (let [n, r] of Object.entries(t)) {
        let t = F_.matchMedia(r),
          i = (e) => {
            e.matches && m(n);
          };
        (dp(t, i), e.push([t, i]));
      }
      return () => e.forEach(([e, t]) => fp(e, t));
    }, [o, t, m, c]),
    [l.current, u.current]
  );
}
function dp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function fp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function pp(e) {
  setTimeout(e, 1);
}
function mp(e) {
  let t = new Set(),
    n = lp(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (hp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (a_ ? F_.requestIdleCallback : pp)(() => {
    document.querySelector(yD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (hp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    gp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function hp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function gp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function _p(e) {
  return H(e) && bD in e && e.page !== void 0;
}
function vp(e, t) {
  return `${e}-${t}`;
}
function yp(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (U(r !== void 0, `nextVariant should be defined`), r);
}
function bp(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function xp(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Sp(e, t) {
  return t[e] || `framer-v-${e}`;
}
function Cp(e, t, n) {
  return e && n.has(e) ? e : t;
}
function wp() {
  let e = r(),
    t = r(),
    n = S(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    s(
      () => () => {
        n();
      },
      [n]
    ),
    S(
      (r) => {
        if (!document.hidden) {
          (r(), n());
          return;
        }
        if (((t.current = r), e.current)) return;
        let i = () => {
          document.hidden || (t.current?.(), n());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [n]
    )
  );
}
function Tp() {
  let e = r(),
    t = r(!1),
    n = r(),
    i = C(AS);
  return (
    s(
      () => () => {
        (e.current?.(), (n.current = void 0), (e.current = void 0));
      },
      []
    ),
    S(
      (r, a) => {
        if (!a?.current || t.current) {
          r();
          return;
        }
        if (((n.current = r), e.current)) return;
        let o = !1;
        e.current = Cs(i, `undefined`, a.current, null, (e) => {
          ((t.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), t.current && n.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function Ep(e) {
  let t = wp(),
    n = Tp();
  return S(
    (r, i = !1) => {
      if (i_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Dp() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (CD = () => {
        (e(), (t = void 0));
      }));
  });
}
function Op(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (SD = Dp()));
}
function kp() {
  (performance.mark(`click-received-listener`), (SD = void 0), CD?.(), (CD = void 0));
}
function Ap(e = !1) {
  s(() => {
    e &&
      (document.addEventListener(`pointerup`, Op, !0),
      document.__proto__.addEventListener.call(document, `click`, kp, !0));
  }, [e]);
}
function jp({
  variant: e,
  defaultVariant: n,
  transitions: i,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let u = zo(),
    d = Rl(),
    f = ta(() => new Set(o)),
    { yieldOnTap: m } = b_();
  Ap(m);
  let h = Ep(l),
    g = r({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: Cp(e, n, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: i,
    }),
    _ = S((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = g.current,
        o = Cp(e, a, f),
        s = xp(i?.[o], t, n, !1, r);
      return [o, s ? vp(o, s) : void 0];
    }, []),
    v = S(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = _(r);
        if (o === e && s === t) return;
        (a && (g.current.isError = !1),
          (g.current.baseVariant = o || n),
          (g.current.gestureVariant = s));
        let c = m && g.current.isPressedHasUpdated;
        (c &&
          SD &&
          (performance.mark(`wait-for-tap-start`),
          await SD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await bn({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: d,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: v,
        } = g.current;
        if (l || f || d || v) {
          p(u);
          return;
        }
        h(() => p(u), i);
      },
      [_, u, h, m]
    ),
    y = S(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        let r = t !== g.current.isPressed,
          i = e !== g.current.isHovered;
        (e !== void 0 && (g.current.isHovered = e),
          t !== void 0 && (g.current.isPressed = t),
          n !== void 0 && (g.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = g.current;
        ((g.current.isPressedHasUpdated = r),
          (g.current.isHoveredHasUpdated = i),
          v(a, o, s, a, !1));
      },
      [v]
    ),
    b = S(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = g.current;
        v(i, a, n, e === xD ? yp(r || [], i || n) : e, t, !0);
      },
      [v]
    ),
    x = S(() => {
      let { baseVariant: e } = g.current;
      ((g.current.loadedBaseVariant[e] = !0), h(() => p(u), !0));
    }, [u, h]);
  if (e !== g.current.lastVariant) {
    let [t, n] = _(e);
    ((g.current.lastVariant = t),
      (t !== g.current.baseVariant || n !== g.current.gestureVariant) &&
        ((g.current.baseVariant = t), (g.current.gestureVariant = n)));
  }
  let {
      baseVariant: C,
      gestureVariant: w,
      defaultVariant: T,
      enabledGestures: E,
      isHovered: D,
      isPressed: O,
      isError: k,
      loadedBaseVariant: A,
    } = g.current,
    j = sp(g.current.baseVariant, g.current.gestureVariant, s);
  return t(() => {
    let e = [];
    C !== T && e.push(C);
    let t = E?.[C]?.loading,
      n = !k && !d && !!t && !A[C],
      r = n ? vp(C, `loading`) : w;
    r && e.push(r);
    let i = E?.[C],
      a = { onMouseEnter: () => y({ isHovered: !0 }), onMouseLeave: () => y({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => y({ isPressed: !0 }),
          onTapCancel: () => y({ isPressed: !1 }),
          onTap: () => y({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: C,
        gestureVariant: r,
        isLoading: n,
        transition: bp(g.current.transitions, C),
        setVariant: b,
        setGestureState: y,
        clearLoadingGesture: x,
        addVariantProps: j,
        gestureHandlers: a,
        classNames: xc(Sp(C, c), xp(i, D, O, n, k)),
      }
    );
  }, [C, w, D, O, A, j, b, T, E, y, x, c]);
}
function Mp(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!gl()) return r(e);
  let a = Np(e, r),
    o = !1;
  function s(r, s) {
    let { disableCustomCode: c } = b_(),
      l = yl();
    if (c) return g(e, { ...r, ref: s });
    if (Dl(t, l?.scopeId, l?.level, i ?? !1))
      return a.status === `success`
        ? g(Sv.Provider, {
            value: n,
            children: g(_l, {
              getErrorMessage: wl.bind(null, t, n),
              fallback: g(e, { ...r, ref: s }),
              children: g(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (hl(a.error), hl(wl(t, n)), ml(a.error), !0)), g(e, { ...r, ref: s }));
    if (a.status === `success`)
      return g(Sv.Provider, { value: n, children: g(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return h.forwardRef(s);
}
function Np(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function Pp(e, t) {
  let n = e.createBuffer();
  if (!n) throw Error(`Failed to create buffer`);
  return (e.bindBuffer(e.ARRAY_BUFFER, n), e.bufferData(e.ARRAY_BUFFER, t, e.STATIC_DRAW), n);
}
function Fp(e, t, n, r) {
  let i = e.getAttribLocation(t, `a_position`);
  i >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, n),
    e.enableVertexAttribArray(i),
    e.vertexAttribPointer(i, 2, e.FLOAT, !1, 0, 0));
  let a = e.getAttribLocation(t, `a_texCoord`);
  a >= 0 &&
    (e.bindBuffer(e.ARRAY_BUFFER, r),
    e.enableVertexAttribArray(a),
    e.vertexAttribPointer(a, 2, e.FLOAT, !1, 0, 0));
}
function Ip(e, t) {
  return {
    [DD.time.name]: e.getUniformLocation(t, DD.time.name),
    [DD.resolution.name]: e.getUniformLocation(t, DD.resolution.name),
    [DD.deltaTime.name]: e.getUniformLocation(t, DD.deltaTime.name),
    [DD.pixelRatio.name]: e.getUniformLocation(t, DD.pixelRatio.name),
    [DD.mousePosition.name]: e.getUniformLocation(t, DD.mousePosition.name),
    [DD.mousePointerDown.name]: e.getUniformLocation(t, DD.mousePointerDown.name),
    [DD.mouseHover.name]: e.getUniformLocation(t, DD.mouseHover.name),
  };
}
function Lp(e, t) {
  let n = e.createTexture();
  if (!n) throw Error(`Failed to create buffer texture`);
  return (
    e.bindTexture(e.TEXTURE_2D, n),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, t),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE),
    e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE),
    n
  );
}
function Rp(e, t) {
  let n = e.createFramebuffer();
  if (!n) throw Error(`Failed to create buffer framebuffer`);
  return (
    e.bindFramebuffer(e.FRAMEBUFFER, n),
    e.framebufferTexture2D(e.FRAMEBUFFER, e.COLOR_ATTACHMENT0, e.TEXTURE_2D, t, 0),
    n
  );
}
function zp(e, t, n) {
  let r = e.checkFramebufferStatus(e.FRAMEBUFFER);
  if (r !== e.FRAMEBUFFER_COMPLETE)
    throw Error(
      `Shader buffer "${t}" framebuffer is incomplete (format: "${n}", status: 0x${r.toString(16)}).`
    );
}
function Bp(e, t) {
  switch (t) {
    case `rgba8`:
      return { internalFormat: e.RGBA8, uploadFormat: e.RGBA, pixelType: e.UNSIGNED_BYTE };
    case `r8`:
      return { internalFormat: e.R8, uploadFormat: e.RED, pixelType: e.UNSIGNED_BYTE };
    case `rg16f`:
      return { internalFormat: e.RG16F, uploadFormat: e.RG, pixelType: e.HALF_FLOAT };
    case `rgba16f`:
      return { internalFormat: e.RGBA16F, uploadFormat: e.RGBA, pixelType: e.HALF_FLOAT };
    case `rgba32f`:
      return { internalFormat: e.RGBA32F, uploadFormat: e.RGBA, pixelType: e.FLOAT };
  }
}
function Vp(e) {
  return e === `rg16f` || e === `rgba16f` || e === `rgba32f`;
}
function Hp(e) {
  return e.startsWith(TD) && e.length > TD.length;
}
function Up(e) {
  return Hp(e) && e.endsWith(jD);
}
function Wp(e) {
  return Hp(e) && e.endsWith(MD);
}
function Gp(e) {
  return Hp(e) && e.endsWith(ND);
}
function Kp(e) {
  return e.replace(PD, `_`);
}
function qp(e) {
  return `${TD}${Kp(e)}`;
}
function Jp(e) {
  return `${e}${MD}`;
}
function Yp(e) {
  return `${TD}${Kp(e)}${jD}`;
}
function Xp(e) {
  return `${TD}${Kp(e)}${ND}`;
}
function Zp(e) {
  return `NUM_${Kp(e)
    .replace(/[a-z0-9](?=[A-Z])/g, `$&_`)
    .toUpperCase()}`;
}
function Qp(e) {
  switch (e) {
    case `number`:
    case `enum`:
      return `float`;
    case `boolean`:
      return `float`;
    case `color`:
      return `vec4`;
    case `responsiveimage`:
      return `sampler2D`;
    default:
      W(e);
  }
}
function $p(e = {}) {
  let { propertyControls: t, heightmapSource: n, bufferNames: r } = e,
    i = [FD, ID, ``, LD, RD],
    a = t ? Object.values(t) : [];
  if (a.length > 0) {
    if (a.some((e) => e?.type === `array`))
      for (let e in (i.push(``), t)) {
        let n = t[e];
        if (!(!n || n.type !== `array`)) {
          if (n.control?.type !== `color`)
            throw Error(
              `Shader array control "${e}" is not supported. Only color arrays may be defined.`
            );
          if (!V(n.maxCount)) throw Error(`Shader array control "${e}" must have a maxCount.`);
          i.push(`#define ${Zp(e)} ${n.maxCount}`);
        }
      }
    for (let e in (i.push(``), t)) {
      let n = t[e];
      if (n)
        if (n.type === `array`) {
          let t = qp(e);
          (i.push(`uniform vec4 ${t}[${Zp(e)}];`), i.push(`uniform int ${Jp(t)};`));
        } else {
          let t = Qp(n.type);
          i.push(`uniform ${t} ${qp(e)};`);
        }
    }
  }
  if ((n && i.push(`uniform sampler2D ${Yp(n)};`), r && r.length > 0)) {
    i.push(``);
    for (let e of r) i.push(`uniform sampler2D ${Xp(e)};`);
  }
  i.push(``);
  for (let e of Object.values(DD)) i.push(`uniform ${e.glslType} ${e.name};`);
  return (
    i.push(``),
    i.join(`
`)
  );
}
function em(e, t, n = {}) {
  let r = $p(n);
  return t
    ? `${r}${t}
${e}`
    : r + e;
}
function tm(e, t, n) {
  if (e)
    return e.map((e) => ({
      uniformName: Xp(e.name),
      fragment: em(e.fragment, t, n),
      resolutionScale: e.resolutionScale ?? zD,
      format: e.format ?? BD,
    }));
}
function nm(e) {
  rm(e);
  let t = e.buffers ? e.buffers.map((e) => e.name) : void 0,
    n = em(e.fragment, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    }),
    r = tm(e.buffers, e.common, {
      propertyControls: e.propertyControls,
      heightmapSource: e.heightmapSource,
      bufferNames: t,
    });
  return { ...e, fragment: n, buffers: r, [VD]: !0 };
}
function rm(e) {
  let t = new Map();
  if (e.propertyControls)
    for (let n in e.propertyControls) {
      if (Hp(n) || n === TD)
        throw Error(`Property control key "${n}" must not start with "${TD}".`);
      let e = qp(n);
      if (Up(e)) throw Error(`Property control key "${n}" must not end with "_heightmap".`);
      if (Wp(e)) throw Error(`Property control key "${n}" must not end with "_length".`);
      if (Gp(e)) throw Error(`Property control key "${n}" must not end with "_buffer".`);
      let r = t.get(e);
      if (r !== void 0)
        throw Error(
          `Property control keys "${r}" and "${n}" both resolve to the same uniform "${e}".`
        );
      t.set(e, n);
    }
  if (e.heightmapSource) {
    let t = e.propertyControls?.[e.heightmapSource];
    if (!t || t.type !== `responsiveimage`)
      throw Error(
        `heightmapSource "${e.heightmapSource}" must reference a ResponsiveImage property control.`
      );
  }
  if (e.buffers)
    for (let n of e.buffers) {
      if (Hp(n.name)) throw Error(`Shader buffer name "${n.name}" must not start with "${TD}".`);
      let e = Xp(n.name),
        r = t.get(e);
      if (r !== void 0)
        throw Error(
          r === n.name
            ? `Duplicate shader buffer name "${n.name}".`
            : `Shader buffer names "${r}" and "${n.name}" both resolve to the same uniform "${e}".`
        );
      if (
        (t.set(e, n.name),
        n.resolutionScale !== void 0 &&
          (!V(n.resolutionScale) || n.resolutionScale <= 0 || n.resolutionScale > 1))
      )
        throw Error(
          `Shader buffer "${n.name}" has invalid resolutionScale ${n.resolutionScale}. Must be in the range (0, 1].`
        );
      if (n.format !== void 0 && !ED.has(n.format))
        throw Error(
          `Shader buffer "${n.name}" has invalid format "${n.format}". Must be one of: ${[...ED].join(`, `)}.`
        );
    }
}
function im(e, t = 0) {
  let n = e.indexOf(`var(`, t);
  if (n === -1) return null;
  let r = n + 4,
    i = 1,
    a;
  for (let t = r; t < e.length; t++)
    if (e[t] === `(`) i++;
    else if (e[t] === `)`) {
      if ((i--, i === 0)) return { start: n, end: t + 1, commaIndex: a };
    } else a === void 0 && e[t] === `,` && (a = t);
  return null;
}
function am(e, t) {
  if (!t) return {};
  let { start: n, end: r, commaIndex: i } = t,
    a = e.substring(r).trim();
  return i
    ? {
        customProperty: e.substring(n + 4, i),
        fallback: e.substring(i + 1, r - 1).trim(),
        metadata: a,
      }
    : { customProperty: e.substring(n + 4, r - 1), metadata: a };
}
function om(e) {
  return am(e, im(e));
}
function sm(e, t) {
  if (e.size < t) return;
  let n = e.keys().next().value;
  n !== void 0 && e.delete(n);
}
function cm(e, t) {
  if (!pm(e)) return;
  let n = t?.();
  if (!n) return lm(e);
  let r = KD.generate(n, () => lm(e));
  if (r instanceof HTMLCanvasElement) return r;
}
function lm(e) {
  let t = fm(e);
  if (!t) return;
  let n = qD / Math.min(t.width, t.height),
    r = qD * qD,
    i = t.width * n * (t.height * n);
  i > r && (n *= Math.sqrt(r / i));
  let a = Math.max(1, Math.round(t.width * n)),
    o = Math.max(1, Math.round(t.height * n)),
    s = document.createElement(`canvas`);
  ((s.width = a), (s.height = o));
  let c = s.getContext(`2d`);
  if (!c) return;
  c.drawImage(t.source, 0, 0, a, o);
  let l = c.getImageData(0, 0, a, o).data,
    u = a * o,
    d = new Uint8Array(u);
  for (let e = 0; e < u; e++) d[e] = (l[e * 4 + 3] ?? 0) > 0 ? 1 : 0;
  let f = new Uint8Array(u);
  for (let e = 0; e < u; e++) {
    if (d[e] === 0) continue;
    let t = e % a,
      n = Math.floor(e / a);
    if (t === 0 || t === a - 1 || n === 0 || n === o - 1) continue;
    let r = !1;
    for (let e = -1; e <= 1 && !r; e++)
      for (let i = -1; i <= 1 && !r; i++)
        (i === 0 && e === 0) || (d[(n + e) * a + (t + i)] === 0 && (r = !0));
    r || (f[e] = 1);
  }
  let p = um(f, a, o),
    m = 0;
  for (let e = 0; e < u; e++) {
    let t = p[e] ?? 0;
    t > m && (m = t);
  }
  let h = document.createElement(`canvas`);
  ((h.width = a), (h.height = o));
  let g = h.getContext(`2d`);
  if (!g) return;
  let _ = g.createImageData(a, o);
  for (let e = 0; e < u; e++) {
    let t = m > 0 ? (p[e] ?? 0) / m : 0;
    ((_.data[e * 4] = Math.round(t * 255)),
      (_.data[e * 4 + 1] = 255 - (l[e * 4 + 3] ?? 0)),
      (_.data[e * 4 + 2] = d[e] ? 255 : 0),
      (_.data[e * 4 + 3] = 255));
  }
  g.putImageData(_, 0, 0);
  let v = document.createElement(`canvas`);
  ((v.width = t.width), (v.height = t.height));
  let y = v.getContext(`2d`);
  if (y) return ((y.imageSmoothingEnabled = !0), y.drawImage(h, 0, 0, t.width, t.height), v);
}
function um(e, t, n) {
  let r = t * n,
    i = new Float32Array(r),
    a = 1.95,
    o = 0.01,
    s = [],
    c = [];
  for (let i = 0; i < r; i++) {
    if (e[i] === 0) continue;
    let r = i % t,
      a = Math.floor(i / t);
    ((r + a) % 2 == 0 ? s : c).push(
      i,
      a > 0 ? i - t : -1,
      a < n - 1 ? i + t : -1,
      r > 0 ? i - 1 : -1,
      r < t - 1 ? i + 1 : -1
    );
  }
  let l = new Int32Array(s),
    u = new Int32Array(c),
    d = 1 - a,
    f = a / 4;
  for (let e = 0; e < 50; e++) (dm(l, i, d, f, o), dm(u, i, d, f, o));
  return i;
}
function dm(e, t, n, r, i) {
  for (let a = 0; a < e.length; a += 5) {
    let o = e[a] ?? 0,
      s = e[a + 1] ?? -1,
      c = e[a + 2] ?? -1,
      l = e[a + 3] ?? -1,
      u = e[a + 4] ?? -1,
      d = s >= 0 ? (t[s] ?? 0) : 0,
      f = c >= 0 ? (t[c] ?? 0) : 0,
      p = l >= 0 ? (t[l] ?? 0) : 0,
      m = u >= 0 ? (t[u] ?? 0) : 0;
    t[o] = n * (t[o] ?? 0) + r * (i + d + f + p + m);
  }
}
function fm(e) {
  if (e instanceof HTMLImageElement) {
    let t = e.naturalWidth,
      n = e.naturalHeight;
    return t > 0 && n > 0 ? { source: e, width: t, height: n } : void 0;
  }
  if (e instanceof HTMLCanvasElement)
    return e.width > 0 && e.height > 0 ? { source: e, width: e.width, height: e.height } : void 0;
}
function pm(e) {
  return e instanceof HTMLImageElement || e instanceof HTMLCanvasElement;
}
function mm(e, t) {
  let n = om(e);
  if (!n.customProperty) return e;
  if (t) {
    let e = getComputedStyle(t).getPropertyValue(n.customProperty).trim();
    if (e) return Sy.srgbFromValue(e);
  }
  return Sy.srgbFromValue(n.fallback ?? e);
}
function hm(e, t) {
  let n = mm(e, t),
    r = J.toRgb(J(n));
  return [r.r / 255, r.g / 255, r.b / 255, r.a];
}
function gm(e) {
  return KD.load(e, () => _m(e));
}
function _m(e) {
  return new Promise((t, n) => {
    let r = new Image();
    ((r.crossOrigin = `anonymous`),
      (r.onload = () => t(ym(r) ?? r)),
      (r.onerror = (t) => {
        let r =
          t instanceof ErrorEvent && t.message
            ? `Failed to load texture from "${e}": ${t.message}`
            : `Failed to load texture from "${e}"`;
        n(Error(r));
      }),
      (r.src = e));
  });
}
function vm(e) {
  if (e instanceof HTMLImageElement) return e.src || void 0;
  if (e instanceof HTMLCanvasElement) return e.dataset.src || void 0;
}
function ym(e) {
  if (!bm(e.src)) return;
  let t = e.naturalWidth,
    n = e.naturalHeight;
  if (t <= 0 || n <= 0) return;
  let r = $D / Math.max(t, n),
    i = Math.max(1, Math.round(t * r)),
    a = Math.max(1, Math.round(n * r)),
    o = document.createElement(`canvas`);
  ((o.width = i), (o.height = a));
  let s = o.getContext(`2d`);
  if (s) return (s.drawImage(e, 0, 0, i, a), (o.dataset.src = e.src), o);
}
function bm(e) {
  try {
    return new URL(e, `https://placeholder`).pathname.toLowerCase().endsWith(QD);
  } catch {
    return e.toLowerCase().includes(QD);
  }
}
async function xm(e, t) {
  switch (e.type) {
    case `number`:
    case `enum`:
      return { type: `float`, value: e.value };
    case `boolean`:
      return { type: `boolean`, value: e.value };
    case `color`:
      return { type: `vec4`, value: hm(e.value, t) };
    case `responsiveimage`: {
      let t;
      return (
        B(e.value) ? (t = e.value) : H(e.value) && `src` in e.value && (t = e.value.src),
        t ? { type: `sampler2D`, value: await gm(t) } : void 0
      );
    }
    case `array`:
      return { type: `vec4[]`, value: e.value.map((e) => hm(e, t)) };
    default:
      W(e);
  }
}
async function Sm(e, t, n) {
  let r = {},
    i = n ? qp(n) : void 0;
  for (let [a, o] of Object.entries(e)) {
    let e = await xm(o, t);
    if (
      e &&
      ((r[a] = e),
      o.type === `array` && (r[Jp(a)] = { type: `int`, value: o.value.length }),
      n && i && a === i && e.type === `sampler2D`)
    ) {
      let t = cm(e.value, () => vm(e.value));
      t && (r[Yp(n)] = { type: `sampler2D`, value: t });
    }
  }
  return r;
}
function Cm(e) {
  for (let t of Object.values(e))
    t.type === `sampler2D` && t.value instanceof ImageBitmap && t.value.close();
}
function wm(e) {
  return typeof e == `number` ? e : e === `performance` ? 0.75 : e === `consistent` ? 0 : 1;
}
function Tm(e, t, n) {
  let r = e * YD;
  return { currentTime: r, elapsedTime: r - t, deltaTime: n === t ? 1 / 60 : r - n };
}
function Em() {
  return C(oO);
}
function Dm(e, t, n, r, i) {
  let [a, o] = u({}),
    [c, l] = u(e === void 0);
  return (
    s(() => {
      if (!e) {
        p(() => l(!0));
        return;
      }
      let a = !1;
      return (
        Sm(e, t.current, n)
          .then((e) => {
            if (a) {
              Cm(e);
              return;
            }
            (p(() => {
              (o(e), l(!0));
            }),
              r?.());
          })
          .catch(() => {
            a || i?.();
          }),
        () => {
          a = !0;
        }
      );
    }, [e, t, n, r, i]),
    { resolvedUniforms: a, haveUniformsResolved: c }
  );
}
function Om(e, t) {
  (s(() => {
    let n = e.current;
    if (!n) return;
    let r = new ResizeObserver(t);
    return (
      r.observe(n),
      () => {
        r.disconnect();
      }
    );
  }, [e, t]),
    km(t));
}
function km(e) {
  s(() => {
    let t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`),
      n = () => {
        (e(),
          t.removeEventListener(`change`, n),
          (t = matchMedia(`(resolution: ${N.devicePixelRatio}dppx)`)),
          t.addEventListener(`change`, n));
      };
    return (
      t.addEventListener(`change`, n),
      () => {
        t.removeEventListener(`change`, n);
      }
    );
  }, [e]);
}
function Am(e, t, n, i, a, o, s, c) {
  let l = _e() === !0 || Y.current() === Y.export,
    d = s || l,
    f,
    m,
    h,
    g;
  if (e !== null) {
    let r = e !== aO.noSlot;
    ((f = !r), (m = (o ?? !0) && t && !n && !l && !c), (h = r && !m), (g = `instant`));
  } else ((f = a === `fallback` || !i), (m = (o ?? !0) && !l && !c), (h = !m), (g = a));
  let [_, v] = u(!1),
    y = S(() => {
      p(() => v(!0));
    }, []);
  (j(() => {
    _ && t && p(() => v(!1));
  }, [_, t]),
    _ && (f = !0));
  let [b, x] = u(!1),
    C = S(() => {
      p(() => x(!0));
    }, []),
    w = S(() => {
      p(() => x(!1));
    }, []),
    T = r(t);
  return (
    j(() => {
      let e = !T.current && t;
      ((T.current = t), e && b && w());
    }, [b, t, w]),
    b && (f = !0),
    a !== `fallback` && s && !_ && !b && i && e !== aO.noSlot && (f = !1),
    {
      isFallbackOnly: f,
      effectiveAnimated: m,
      effectiveSingleFrame: h,
      effectiveMode: g,
      shouldSkipFallbackOverlay: d,
      onContextLost: y,
      onUniformResolutionSucceeded: w,
      onUniformResolutionFailed: C,
    }
  );
}
function jm(e = !0) {
  let [t, n] = u(!e);
  return (
    $x(() => {
      if (!e) {
        p(() => n(!0));
        return;
      }
      p(() => n(!1));
      let t = N.setTimeout(() => {
        p(() => n(!0));
      }, sO);
      return () => {
        clearTimeout(t);
      };
    }, [e]),
    t
  );
}
function Mm({
  vertexShader: e = rO,
  fragmentShader: t = iO,
  animated: n = !0,
  resolutionScale: i,
  uniforms: a,
  onError: o,
  onReady: c,
  onContextLost: l,
  onUniformResolutionSucceeded: u,
  onUniformResolutionFailed: d,
  singleFrame: f = !1,
  heightmapSource: p,
  mouseDataRef: m,
  buffers: h,
}) {
  let _ = r(null),
    v = r(null),
    y = r(0),
    b = r(0),
    x = r(0),
    C = r(null),
    w = r(c);
  j(() => {
    w.current = c;
  }, [c]);
  let T = r(l);
  j(() => {
    T.current = l;
  }, [l]);
  let { resolvedUniforms: E, haveUniformsResolved: D } = Dm(a, _, p, u, d),
    O = r(E),
    k = r(n);
  j(() => {
    k.current = n;
  }, [n]);
  let A = r(f);
  j(() => {
    A.current = f;
  }, [f]);
  let M = r(!1),
    P = S(() => {
      M.current ||
        !D ||
        ((M.current = !0),
        w.current?.(),
        (C.current = requestAnimationFrame(() => {
          ((C.current = null), performance.mark?.(`shader_rendered`));
        })));
    }, [D]),
    F = r({ width: 0, height: 0, dpr: 0 }),
    ee = r({ width: 0, height: 0, dpr: 0 }),
    I = S(() => {
      let e = _.current;
      e && (F.current = { width: e.offsetWidth, height: e.offsetHeight, dpr: N.devicePixelRatio });
    }, []),
    te = S(() => {
      let e = v.current;
      if (!e) return;
      let t = F.current,
        n = ee.current;
      (t.width === n.width && t.height === n.height && t.dpr === n.dpr) ||
        (e.resize(), (ee.current = { ...t }));
    }, []),
    ne = S(
      (e) => {
        let t = v.current;
        if (!t) return;
        if (A.current) {
          if (!D) return;
          (te(), t.render(0, 0, O.current, m?.current ?? ZD), P());
          return;
        }
        if (!D) {
          y.current = requestAnimationFrame(ne);
          return;
        }
        (M.current || ((b.current = e * YD), (x.current = b.current)), te());
        let { currentTime: n, elapsedTime: r, deltaTime: i } = Tm(e, b.current, x.current);
        ((x.current = n),
          t.render(r, i, O.current, m?.current ?? ZD),
          P(),
          !A.current && k.current && (y.current = requestAnimationFrame(ne)));
      },
      [D, P, m, te]
    ),
    re = S(() => {
      let e = v.current;
      !e || !D || (te(), e.render(0, 0, O.current, m?.current ?? ZD), P());
    }, [D, m, P, te]);
  (j(() => {
    ((O.current = E), A.current && v.current && re());
  }, [E, re]),
    s(() => {
      let n = _.current;
      if (!(!n || !D)) {
        M.current = !1;
        try {
          ((v.current = new AD(n, e, t, wm(i), T.current, h)),
            (ee.current = { width: 0, height: 0, dpr: 0 }),
            I(),
            te(),
            (b.current = performance.now() * YD),
            (x.current = b.current),
            A.current ? re() : (y.current = requestAnimationFrame(ne)));
        } catch (e) {
          o && e instanceof Error && o(e);
        }
        return () => {
          (cancelAnimationFrame(y.current),
            C.current !== null && cancelAnimationFrame(C.current),
            v.current?.dispose(),
            (v.current = null));
        };
      }
    }, [e, t, i, ne, re, o, h, D, I, te]));
  let L = r(n),
    ie = r(f);
  return (
    s(() => {
      let e = n && !L.current,
        t = !f && ie.current;
      ((e || t) &&
        v.current &&
        ((b.current = performance.now() * YD),
        (x.current = b.current),
        (y.current = requestAnimationFrame(ne))),
        (L.current = n),
        (ie.current = f));
    }, [n, f, ne]),
    Om(
      _,
      S(() => {
        let e = v.current;
        if (!e || !D) return;
        if ((I(), A.current)) {
          re();
          return;
        }
        te();
        let {
          currentTime: t,
          elapsedTime: n,
          deltaTime: r,
        } = Tm(performance.now(), b.current, x.current);
        ((x.current = t), e.render(n, r, O.current, m?.current ?? ZD));
      }, [D, m, re, I, te])
    ),
    g(`canvas`, { ref: _, style: cO, draggable: !1 })
  );
}
function Nm() {
  ((dO = Je(0)), (fO = Je(0)));
  let e = 0,
    t = 0;
  function n() {
    !dO || !fO || (dO.set(e), fO.set(t));
  }
  N !== void 0 &&
    (N.addEventListener(
      `pointermove`,
      Fm((r) => {
        ((e = r.clientX), (t = r.clientY), je.update(n));
      })
    ),
    N.addEventListener(`dragover`, (r) => {
      ((e = r.clientX), (t = r.clientY), je.update(n));
    }));
}
function Pm(e = !0) {
  return (e && !dO && Nm(), { x: dO, y: fO });
}
function Fm(e) {
  return (t) => {
    t.pointerType === `mouse` && e(t);
  };
}
function Im(e) {
  let t = e ?? pO;
  return t.duration === void 0 ? t : { ...t, duration: t.duration * 1e3 };
}
function Lm(e, t, n) {
  return !e || e.width <= 0 || e.height <= 0
    ? [XD, XD]
    : [(t - e.left) / e.width, 1 - (n - e.top) / e.height];
}
function Rm(e, t) {
  let n = r(ZD),
    i = t?.enabled ?? !1,
    a = Im(t?.springOptions),
    o = r(null),
    c = S(() => {
      let t = e.current;
      t && (o.current = t.getBoundingClientRect());
    }, [e]),
    { x: l, y: u } = Pm(i),
    d = Ze(0),
    f = Ze(0),
    p = l ?? d,
    m = u ?? f,
    h = L(p, (e) => Lm(o.current, e, m.get())[0]),
    g = L(m, (e) => Lm(o.current, p.get(), e)[1]),
    _ = Ze(0),
    v = Ze(0),
    y = ve(h, a),
    b = ve(g, a),
    x = ve(_, a),
    C = ve(v, a),
    w = se(y),
    T = se(b);
  return (
    s(() => {
      if (!i) return;
      let t = e.current;
      if (!t) return;
      c();
      let r = !1;
      N.addEventListener(`scroll`, c, { passive: !0, capture: !0 });
      let a = de(t, c),
        o = Ae(
          t,
          () => (
            r || ((r = !0), y.jump(h.get()), b.jump(g.get())),
            je.update(() => v.set(1)),
            () => je.update(() => v.set(0))
          )
        ),
        s = ne(t, () => (je.update(() => _.set(1)), () => je.update(() => _.set(0))));
      return () => {
        (N.removeEventListener(`scroll`, c, { capture: !0 }), a(), o(), s(), (n.current = ZD));
      };
    }, [i, e, h, g, _, v, y, b, c]),
    zm(
      i,
      S(() => {
        n.current = {
          position: [y.get(), b.get(), w.get(), T.get()],
          pointerDown: x.get(),
          hover: C.get(),
        };
      }, [y, b, x, C, w, T])
    ),
    n
  );
}
function zm(e, t) {
  s(() => {
    if (!e) return;
    let n = 0,
      r = performance.now();
    function i(e) {
      (t(e, e - r), (r = e), (n = requestAnimationFrame(i)));
    }
    return ((n = requestAnimationFrame(i)), () => cancelAnimationFrame(n));
  }, [e, t]);
}
function Bm(e, t, n) {
  let r = Em(),
    i = t ? mO.high : n ? mO.medium : mO.low,
    [a, o] = u(aO.noSlot);
  return (
    s(() => {
      if (!r || !e) return;
      (r.register(e, i), p(() => o(r.getSlotStatus(e))));
      let t = r.subscribe(e, () => {
        p(() => o(r.getSlotStatus(e)));
      });
      return () => {
        t();
      };
    }, [r, e, i]),
    s(() => {
      if (!(!r || !e))
        return () => {
          r.deregister(e);
        };
    }, [r, e]),
    r ? a : null
  );
}
function Vm(e, t, n) {
  let r = [],
    i = Kc(e, t, (e) => r.unshift(e, e));
  if (n) {
    let e = i[i.length - 1];
    if (!V(e)) return vO;
    (i.push(e + 1), r.push(-1));
  }
  let a = i[0];
  return V(a)
    ? a <= 1
      ? { inputRange: i, outputRange: r }
      : { inputRange: [0, Math.max(a - 1, 0), ...i], outputRange: [-1, -1, ...r] }
    : vO;
}
function Hm(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function Um(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${DO[e]}` : `${DO[e]} ${n}`;
}
function Wm() {
  return N === void 0 ? {} : kO || ((kO = Gm()), kO);
}
function Gm() {
  let e = N.location,
    t = N?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = N.top.location.origin), (t = N.top?.bootstrap?.services), t)) return t;
  } catch {}
  if (n && n !== e.origin) throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
  if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
    throw Error(`ServiceMap data was not provided in document`);
  try {
    let n =
      new URLSearchParams(e.search).get(`services`) ||
      new URLSearchParams(e.hash.substring(1)).get(`services`);
    n && (t = JSON.parse(n));
  } catch {}
  if (t && typeof t == `object` && t.api) return t;
  throw Error(`ServiceMap requested but not available`);
}
function Km(e) {
  return e.key + e.extension;
}
function qm(e) {
  return `${Wm().userContent}/assets/${e}`;
}
function Jm(e) {
  return qm(Km(e));
}
function Ym(e, t) {
  return t ? `${e} ${AO}` : e;
}
function Xm(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return Ym(e.name, e.isVariable);
  }
}
function Zm(e) {
  return !!(e && Array.isArray(e));
}
function Qm(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    eh(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function $m(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function eh(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`name` in e && typeof e.name != `string`) ||
    !(`minValue` in e) ||
    typeof e.minValue != `number` ||
    !(`maxValue` in e) ||
    typeof e.maxValue != `number` ||
    !(`defaultValue` in e) ||
    typeof e.defaultValue != `number`
  );
}
function th(e) {
  return NO[nh(e)];
}
function nh(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function rh(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function ih(e, t) {
  return { ...ah(e, t), ...oh(e, t) };
}
function ah(e, t) {
  if (t.length === 0)
    return { variantBold: void 0, variantBoldItalic: void 0, variantItalic: void 0 };
  let { weight: n, style: r } = e,
    i = new Map(),
    a = new Map();
  for (let r of t)
    r.isVariable === e.isVariable &&
      (i.set(`${r.weight}-${r.style}`, r),
      !(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
  let o = a.get(r),
    s = a.get(`italic`),
    c = e.weight;
  c <= 300
    ? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
    : c <= 500
      ? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
      : ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
  let l = i.get(`${n}-italic`);
  return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function oh(e, t) {
  if (t.length === 0) return { variantVariable: void 0, variantVariableItalic: void 0 };
  let n, r, i, a;
  for (let o of t) {
    if (!o.isVariable) continue;
    let t = o.weight === e.weight,
      s = o.weight === 400;
    o.style === `normal`
      ? t
        ? (n = o)
        : s
          ? (i = o)
          : (i ||= o)
      : o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
  }
  return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function sh(e) {
  return !!e.variationAxes;
}
function ch(e) {
  return lh(e) || uh(e);
}
function lh(e) {
  return e.startsWith(IO);
}
function uh(e) {
  return e.startsWith(FO);
}
function dh(e, t) {
  for (let n = 0; n < e.length; n++) {
    let r = e[n];
    if (r) {
      if (r.owner !== t.owner && r.file === t.file)
        return { existingFont: r, index: n, projectDuplicate: !0 };
      if (r && r.selector === t.selector)
        return { existingFont: r, index: n, projectDuplicate: !1 };
    }
  }
}
function fh(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? AO : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function ph({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = Qm(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function mh(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: sh(e), selector: e.selector };
}
function hh(e) {
  let t = e.fonts.map((e) => mh(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = mh(n);
    if (!e) continue;
    let r = ih(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function gh(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function _h(e) {
  switch (e) {
    case `google`:
      return (await import("./google-3SZHWBC6.Cms63_Sy.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-B2QLD7YB.BAg_fSiH.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function vh(e) {
  switch (e) {
    case `google`:
      return (await import("./google-3FCAKCAC.BHWbau7I.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-4THNDPMZ.BEdpiMiP.mjs")).default;
    case `framer`:
      return (await import("./framer-font-45AI7UCZ.vBuwkCN_.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function yh(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(bh);
}
function bh(e) {
  return RO.includes(e);
}
function xh(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = yh(e)[0];
  return n && t[n];
}
function Sh(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Ch(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function wh(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = `${r}-${c}-${s}-${i}`;
  if (!ek.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: B(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), Th(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < QO) return wh(e, t, n + 1);
          throw new $O(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    ek.set(l, d);
  }
  await ek.get(l);
}
async function Th(e, t, n) {
  let r = `${e}-${t}-${n}`;
  if (!tk.has(r)) {
    let i = new XO.default(e, { style: t, weight: n }).load(null, ZO);
    tk.set(r, i);
  }
  try {
    await tk.get(r);
  } catch {
    throw new $O(
      `Failed to check if font is ready (${ZO}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function Eh(e) {
  try {
    if (e === `framer`) return Dh(rk) ? rk : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import("./google-GXDJLGJB.Ck--h91I.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-O22OBJ3D.Dfx2QOk9.mjs")).default;
          default:
            W(e);
        }
      })();
      return Dh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Dh(e) {
  return H(e) && Object.values(e).every(kh);
}
function Oh(e) {
  return H(e) && B(e.tag);
}
function kh(e) {
  return Array.isArray(e) && e.every(Oh);
}
function Ah(e, t, n, r = ok) {
  let [i, a] = h.useState(e),
    [o, s] = h.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      h.useCallback(
        (e) => {
          Ar(e) ||
            (t && a(r(e)),
            n &&
              h.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function jh(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Mh() {
  return g(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: g(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function Nh(e, t) {
  s(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (N.addEventListener(`keyup`, n), () => N.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function Ph(e, t, n, r) {
  let i = N.innerHeight - r,
    a = Math.min(N.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function Fh(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new N.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function Ih() {
  return document.getElementById(Ow) ?? document.getElementById(Dw) ?? document.body;
}
function Lh(e, t) {
  return V(e) ? e : (t ?? 0);
}
function Rh(e) {
  return Lh(e?.paddingTop, e?.padding) + Lh(e?.paddingBottom, e?.padding);
}
function zh(e) {
  return Lh(e?.paddingLeft, e?.padding) + Lh(e?.paddingRight, e?.padding);
}
function Bh(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - zh(e)}px)`,
      srcSet: _o(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Vh(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in vk)) continue;
    let n = vk[t],
      r = e[t];
    if (!(!V(n) || !V(r)) && n !== r) return !0;
  }
  return !1;
}
function Hh(e) {
  let t = Ve.get(e.current);
  if (!t) return !1;
  if (Vh(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Vh(e.latestValues)) return !0;
  return !1;
}
function Uh(e) {
  return y(function ({ lightbox: n, lightboxClassName: i, onClick: a, ...o }, l) {
    let d = C(Ce),
      f = C(wD),
      m = !!f,
      h = r(null),
      _ = l ?? h,
      v = r(),
      y = t(() => Bh(n, o.background), [n, o.background]),
      [b, T] = u(!1),
      [E, O] = u(),
      A = S(() => {
        if (n) {
          if (b) {
            p(() => {
              T(!0);
            });
            return;
          }
          je.read(() => {
            if (!_.current) return;
            let e = getComputedStyle(_.current),
              t =
                _.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(_.current, `::after`)
                  : void 0,
              r = _.current.offsetWidth ?? 1,
              i = _.current.offsetHeight ?? 1,
              a = Hh(_) || m ? { duration: 0 } : n.transition;
            p(() => {
              (O({
                borderRadius: e.borderRadius,
                aspectRatio: r / (i || 1),
                borderTop: t?.borderTopWidth,
                borderRight: t?.borderRightWidth,
                borderBottom: t?.borderBottomWidth,
                borderLeft: t?.borderLeftWidth,
                borderStyle: t?.borderStyle,
                borderColor: t?.borderColor,
                transition: a,
                imageRendering: e.imageRendering,
                filter: e.filter,
              }),
                T(!0),
                f?.stop());
            });
          });
        }
      }, [n, b, _, f?.stop, m]),
      j = E?.aspectRatio ?? 1,
      M = rp(() => {
        if (!n || !y || !y.src) return;
        let e = v.current?.[y.src];
        if (e) return e;
        let t = Ph(j, n.maxWidth, zh(n), Rh(n)),
          r = Fh(y, { width: t, height: t * j });
        return ((v.current = { [y.src]: r }), r);
      }),
      N = S(
        async (e) => {
          (a?.(e), !(b || !n || !y) && (await M(), A()));
        },
        [a, A, b, y, n, M]
      ),
      P = S((e) => {
        (e?.stopPropagation(),
          p(() => {
            T(!1);
          }));
      }, []);
    (Nh(b, P),
      s(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            M();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = _.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, M),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, M));
          }
        );
      }, [M, _, n]));
    let F = k(),
      ee = E?.transition ?? o.transition ?? d.transition,
      te = E?.borderRadius,
      ne = E?.imageRendering,
      re = E?.filter,
      L = E?.borderTop,
      ie = E?.borderRight,
      ae = E?.borderBottom,
      oe = E?.borderLeft,
      se = E?.borderStyle,
      ce = E?.borderColor,
      le = !!(L || ie || ae || oe || se || ce),
      ue = le
        ? {
            "--border-top-width": L,
            "--border-right-width": ie,
            "--border-bottom-width": ae,
            "--border-left-width": oe,
            "--border-style": se,
            "--border-color": ce,
          }
        : void 0,
      de = { [gw]: o.id },
      R = Lh(n?.paddingTop, n?.padding),
      fe = Lh(n?.paddingBottom, n?.padding),
      pe = Lh(n?.paddingLeft, n?.padding),
      me = Lh(n?.paddingRight, n?.padding),
      he = E?.borderRadius ? { ...o.style, borderRadius: E.borderRadius } : o.style,
      ge = b ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      _e = m && b ? void 0 : (o.layoutId ?? (n ? F : void 0));
    return w(D, {
      children: [
        g(e, {
          ...o,
          style: he,
          onClick: N,
          layoutId: _e,
          ref: _,
          layoutDependency: ge,
          transition: ee,
        }),
        g(Re, {
          onExitComplete: () => {
            p(() => {
              (O(void 0), f?.start());
            });
          },
          children:
            b &&
            n &&
            y &&
            g(
              c,
              {
                children: x(
                  w(D, {
                    children: [
                      g(I.div, {
                        ...de,
                        className: i,
                        onClick: P,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ee,
                        initial: yk,
                        animate: bk,
                        exit: yk,
                      }),
                      g(I.div, {
                        ...de,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${R}px ${me}px ${fe}px ${pe}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: g(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: j,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: g(I.div, {
                            layoutId: _e,
                            transition: ee,
                            onClick: A,
                            className: `framer-lightbox-container`,
                            "data-border": le,
                            style: {
                              aspectRatio: j,
                              borderRadius: te,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: ne,
                              filter: re,
                              ...ue,
                            },
                            children: g(Eo, { image: y, alt: y.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  Ih()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Wh(e, t) {
  return Ck && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Sk ??= new DOMParser()), Sk.parseFromString(e, t ?? `text/html`));
}
function Gh(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Kh(e, t, n, r) {
  return e.replace(wk, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Ul(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!_p(f) || !_p(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = It(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Gl(u);
    if (!_ || B(_)) return e;
    ou(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Aw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Tn(m, v)), i + o + `"${Gh(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function qh(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function Jh(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Yh(e, t, n) {
  let i = r([]);
  qh(i.current, e) ||
    ((i.current = e),
    ak.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || Y.current() !== Y.canvas || (e > 0 && Go(n.current));
    }));
}
function Xh() {
  return { current: null };
}
async function Zh(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, `current`, {
      get() {
        return n;
      },
      set(e) {
        if (((n = e), e === null)) {
          t.abort();
          return;
        }
        r(e);
      },
      configurable: !0,
    }),
    i
  );
}
function Qh(e) {
  return e in Ok;
}
function $h(e, t) {
  let n = {};
  for (let r in e) {
    if (!Qh(r)) continue;
    let i = e[r],
      a = Ok[r];
    nt(i) || nt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function eg(e, t = `character`, n, r, i) {
  if (r) {
    let t = Xh();
    return (n.add(t), g(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return w(
          c,
          {
            children: [
              g(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(kk)?.map((e, t) => {
                  let r = Xh();
                  return (n.add(r), g(`span`, { ref: r, style: i, children: e }, e + t));
                }),
              }),
              a ? null : ` `,
            ],
          },
          e + t + a
        );
      });
    }
    case `word`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r,
          o = Xh();
        return (
          n.add(o),
          w(
            c,
            { children: [g(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    case `element`:
    default:
      return e;
  }
}
function tg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      W(t);
  }
}
function ng(e) {
  let t = [];
  return (
    V(e.x) && t.push(`translateX(${e.x}px)`),
    V(e.y) && t.push(`translateY(${e.y}px)`),
    V(e.scale) && t.push(`scale(${e.scale})`),
    V(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    V(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    V(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    V(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    V(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function rg(e, t, n, r) {
  if (!n || !n.effect) return;
  let i = n.type;
  switch (i) {
    case `appear`:
      switch (n.tokenization) {
        case `element`:
          return !e || !t
            ? void 0
            : {
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : ng(n.effect),
              };
        case `line`:
        case `word`:
        case `character`:
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : ng(n.effect),
              };
      }
    default:
      W(i);
  }
}
function ig(e, n, i) {
  let a = ta(() => new Set()),
    o = lo(),
    c = i || !o,
    l = _e(),
    u = r({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  u.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  s(() => {
    if (!c || i) return;
    u.current.hasMounted = !0;
    function e() {
      let { effect: e } = u.current;
      if (
        !c ||
        !e ||
        (e?.repeat !== !0 && u.current.hasAnimatedOnce) ||
        (e?.type === `appear` && u.current.isAnimating)
      )
        return;
      Object.assign(u.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: r, tokenization: i } = e,
            o = { current: void 0 };
          return (
            og(
              i,
              e.effect,
              a,
              t,
              n,
              r,
              l,
              () => {
                Object.assign(u.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          W(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Se(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? Se(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        W(d);
    }
  }, [c, a, i, n, f, p, d]);
  let m = !!e,
    h = e ? tg(e) : void 0;
  return t(
    () => ({
      getTokenizer: () => {
        if ((a.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          r = rg(c, i || ag(e, t, n), u.current.effect, l);
        return {
          text: (e) => eg(e, h, a, l, r),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = Xh();
            return (a.add(t), { ref: t, style: { ...e, ...r } });
          },
        };
      },
      play: () => {
        let { effect: e } = u.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            og(h, e.effect, a, t, n, !1, l);
            break;
          }
          default:
            W(t);
        }
      },
    }),
    [c, m, a, i, h]
  );
}
function ag(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function og(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = $h(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await sg(n, u);
      if (
        e === null ||
        (ke(e, l, { ...r, restDelta: 0.001, delay: le(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        ke(e, o ? { opacity: t.opacity } : t, {
          ...r,
          restDelta: 0.001,
          delay: le(r?.delay ?? 0, { startDelay: i }),
        });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Zh(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (je.read(() => {
          ((e = cg(n)),
            e.length !== 0 &&
              je.update(() => {
                let t = e.map((e, t) =>
                  ke(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
                );
                Promise.all(t).then(() => s?.());
              }));
        }),
        !a || !c)
      )
        return;
      c.current = () => {
        if (e.length === 0) return;
        let n = o ? { opacity: t.opacity } : t;
        e.forEach((e, t) => {
          ke(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      W(e);
  }
}
async function sg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Zh(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function cg(e) {
  let t = [],
    n = [],
    r = null;
  for (let i of e) {
    if (!i.current) continue;
    let e = i.current.offsetTop,
      a = i.current.offsetHeight;
    (!a || r === null || e === r ? n.push(i.current) : (t.push(n), (n = [i.current])),
      a && (r = e));
  }
  return (t.push(n), t);
}
function lg(e) {
  let t = {};
  for (let n in e) (me(n) || zx(n)) && (t[n] = e[n]);
  return t;
}
function ug(e) {
  return e.type === c;
}
function dg(e) {
  return e.type === `br`;
}
function fg(e, t, n, r, i = {}, a, o = ug(e) ? -1 : 0) {
  let s = A.toArray(e.props.children);
  nt(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!v(e) || !dg(e)) && (c = !1), v(e))) return fg(e, t, n, r, i, a, o + 1);
    let s = nt(n) ? e : n;
    return B(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (B(e.type) || Te(e.type)) {
    let n = re(e.type) || e.type,
      l = u || n,
      f = B(l) ? t?.[l] : void 0;
    ((d.className = xc(`framer-text`, d.className, f)),
      a && o === 0 && !c && Object.assign(d, a.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      m = t?.anchor;
    if (p && m) {
      let e = pg(s, i);
      d.id = e;
      let t = xc(`framer-text`, m),
        n = g(`a`, { href: `#${e}`, className: t, children: s });
      ((d.style = { ...(d.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
  }
  return l(e, d, ...s);
}
function pg(e, t) {
  let n = mr(e.map(mg).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function mg(e) {
  return B(e) || V(e)
    ? e.toString()
    : v(e)
      ? mg(e.props.children)
      : Array.isArray(e)
        ? e.map(mg).join(``)
        : ``;
}
function hg(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = ui(n.x, n.y),
    i = Ky(ui(0.5, 0.5), r),
    a = X.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: ui.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  U(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !ui.isEqual(e, s) && !ui.isEqual(e, c));
  U(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Ky.intersection(i, Ky(s, c)),
    f = Ky.intersection(i, Ky(l, u));
  return (U(d && f, `linearGradientLine: Must have a start and end point.`), Ky(d, f));
}
function gg(e, t) {
  let n = hg(e.angle),
    r = es(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Ky.pointAtPercentDistance(n, i),
    s = Ky.pointAtPercentDistance(n, a),
    c = Xe([i, a], [0, 1]);
  return {
    id: `id${t}g${hS.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: lS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function _g(e, t) {
  return {
    id: `id${t}g${_S.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: es(e).map((t) => ({
      color: t.value,
      alpha: lS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function vg(e) {
  if (!B(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return V(parseFloat(t));
}
function yg(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return V(n) ? n : 50;
}
function bg(e) {
  return vg(e) ? yg(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function xg(e) {
  return vg(e) ? yg(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Sg(e, t, n, r) {
  if (((e = uy.get(e, `#09F`)), !Zx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
  let i = e.pixelWidth,
    a = e.pixelHeight,
    o,
    { fit: s } = e,
    c = 1,
    l = 1,
    u = 0,
    d = 0;
  if (s === `fill` || s === `fit` || s === `tile` || !s) {
    let n = 1,
      f = 1,
      p = i / a,
      m = t.height * p,
      h = t.width / p,
      g = m / t.width,
      _ = h / t.height;
    if (s === `tile`) {
      ((e.backgroundSize ??= 1),
        (c = Math.round(e.backgroundSize * (i / 2))),
        (l = Math.round(e.backgroundSize * (a / 2))));
      let n = t.x ?? 0,
        s = t.y ?? 0,
        f = 0,
        p = 0;
      (r && ((f = n), (p = s)),
        (u = (t.width - c) * bg(e.positionX) + f),
        (d = (t.height - l) * xg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * xg(e.positionY)))
        : ((n = g), (u = (1 - g) * bg(e.positionX))),
        (o = `translate(${u}, ${d}) scale(${n}, ${f})`));
  }
  return {
    id: `id${n}g-fillImage`,
    path: e.src ?? ``,
    transform: o,
    width: c,
    height: l,
    offsetX: u,
    offsetY: d,
  };
}
function Cg(e) {
  return e.startsWith(`data:${Lk}`);
}
function wg(e, t) {
  if (/^\w+:/u.test(e) && !Cg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = Y.current() === Y.export;
  return Wx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Tg(e) {
  try {
    let t = Wh(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Eg(e, t) {
  Og(e, Dg(t));
}
function Dg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Og(e, t) {
  (kg(e, t),
    Array.from(e.children).forEach((e) => {
      Og(e, t);
    }));
}
function kg(e, t) {
  e.getAttributeNames().forEach((n) => {
    let r = e.getAttribute(n);
    if (!r) return;
    if ((n === `id` && e.setAttribute(n, `${t}_${r}`), n === `href` || n === `xlink:href`)) {
      let [i, a] = r.split(`#`);
      if (i) return;
      e.setAttribute(n, `#${t}_${a}`);
      return;
    }
    let i = `url(#`;
    if (r.includes(i)) {
      let a = r.replace(i, `${i}${t}_`);
      e.setAttribute(n, a);
    }
  });
}
function Ag(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (Wk[t[2]] || 1));
}
function jg(e) {
  let t = Ag(e.getAttribute(`width`)),
    n = Ag(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Mg(e) {
  return e.indexOf(`image`) >= 0;
}
function Ng(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Pg(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Fg(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? F_,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = Uk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && _a(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    G(s) &&
    G(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function Ig(e) {
  return e > Yk ? `lazy` : void 0;
}
function Lg(e, t, n) {
  let r = Bg(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Rg(e) {
  return e ? (e.fonts ?? Ur()) : Ur();
}
function zg(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : Bg(e);
}
function Bg(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Vg(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Hg) })
      : t.fonts.push(Hg(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Vg(e) {
  return Xk in e;
}
function Hg(e) {
  let t = Ug(e) || Wg(e) ? e : Gg(e);
  return Wg(t) ? t : Kg(t);
}
function Ug(e) {
  return `source` in e;
}
function Wg(e) {
  return `cssFamilyName` in e;
}
function Gg(e) {
  let t;
  return (
    (t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
      ? `google`
      : e.url.startsWith(`https://framerusercontent.com/third-party-assets/fontshare/`)
        ? `fontshare`
        : `custom`),
    { ...e, source: t }
  );
}
function Kg(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${AO}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function qg(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Jg(e) {
  return e.loader;
}
function Yg(e, t, n) {
  let r = Jg(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Xg,
  Zg,
  Qg,
  $g,
  e_,
  t_,
  n_,
  r_,
  i_,
  a_,
  o_,
  s_,
  c_,
  l_,
  u_,
  d_,
  f_,
  p_,
  m_,
  h_,
  g_,
  __,
  v_,
  y_,
  b_,
  x_,
  S_,
  C_,
  w_,
  T_,
  E_,
  D_,
  O_,
  k_,
  A_,
  j_,
  M_,
  N_,
  P_,
  F_,
  I_,
  L_,
  R_,
  z_,
  B_,
  V_,
  H_,
  U_,
  W_,
  G_,
  K_,
  q_,
  J_,
  Y_,
  X_,
  Z_,
  Q_,
  $_,
  ev,
  tv,
  nv,
  rv,
  iv,
  av,
  ov,
  sv,
  cv,
  lv,
  uv,
  dv,
  fv,
  pv,
  mv,
  hv,
  gv,
  _v,
  vv,
  yv,
  bv,
  xv,
  Sv,
  Cv,
  wv,
  Tv,
  Ev,
  Dv,
  Ov,
  kv,
  Av,
  jv,
  Mv,
  Nv,
  Pv,
  Fv,
  Iv,
  Lv,
  Rv,
  zv,
  Bv,
  Vv,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  Zv,
  Qv,
  $v,
  ey,
  ty,
  ny,
  ry,
  iy,
  ay,
  oy,
  sy,
  cy,
  ly,
  uy,
  dy,
  fy,
  py,
  my,
  hy,
  gy,
  _y,
  vy,
  yy,
  by,
  xy,
  Sy,
  Cy,
  J,
  wy,
  Ty,
  Ey,
  Dy,
  Oy,
  ky,
  Ay,
  jy,
  My,
  Ny,
  Y,
  Py,
  Fy,
  Iy,
  Ly,
  Ry,
  zy,
  By,
  Vy,
  Hy,
  Uy,
  Wy,
  Gy,
  Ky,
  X,
  qy,
  Jy,
  Yy,
  Xy,
  Zy,
  Qy,
  $y,
  eb,
  tb,
  nb,
  rb,
  ib,
  ab,
  ob,
  sb,
  cb,
  lb,
  ub,
  db,
  fb,
  pb,
  mb,
  hb,
  gb,
  _b,
  vb,
  yb,
  bb,
  xb,
  Sb,
  Cb,
  wb,
  Tb,
  Eb,
  Db,
  Ob,
  kb,
  Ab,
  jb,
  Z,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Lb,
  Rb,
  zb,
  Bb,
  Vb,
  Hb,
  Ub,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  Zb,
  Qb,
  $b,
  ex,
  tx,
  nx,
  rx,
  ix,
  ax,
  ox,
  sx,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  _x,
  vx,
  yx,
  bx,
  xx,
  Sx,
  Cx,
  wx,
  Tx,
  Ex,
  Dx,
  Ox,
  kx,
  Ax,
  jx,
  Mx,
  Nx,
  Px,
  Fx,
  Ix,
  Lx,
  Rx,
  zx,
  Bx,
  Vx,
  Hx,
  Ux,
  Wx,
  Gx,
  Kx,
  qx,
  Jx,
  Yx,
  Xx,
  Zx,
  Qx,
  $x,
  eS,
  tS,
  nS,
  rS,
  iS,
  aS,
  oS,
  sS,
  cS,
  lS,
  uS,
  dS,
  fS,
  pS,
  mS,
  hS,
  gS,
  _S,
  vS,
  yS,
  bS,
  xS,
  SS,
  CS,
  wS,
  TS,
  ES,
  DS,
  OS,
  kS,
  AS,
  jS,
  MS,
  NS,
  PS,
  FS,
  IS,
  LS,
  RS,
  zS,
  BS,
  VS,
  HS,
  US,
  WS,
  GS,
  KS,
  qS,
  JS,
  YS,
  XS,
  ZS,
  QS,
  $S,
  eC,
  tC,
  nC,
  rC,
  iC,
  aC,
  oC,
  sC,
  cC,
  lC,
  uC,
  dC,
  fC,
  pC,
  mC,
  hC,
  gC,
  _C,
  vC,
  yC,
  bC,
  xC,
  SC,
  CC,
  wC,
  TC,
  EC,
  DC,
  OC,
  kC,
  AC,
  jC,
  MC,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  BC,
  VC,
  HC,
  UC,
  WC,
  GC,
  KC,
  qC,
  JC,
  YC,
  XC,
  ZC,
  QC,
  $C,
  ew,
  tw,
  nw,
  rw,
  iw,
  aw,
  ow,
  sw,
  cw,
  lw,
  uw,
  dw,
  fw,
  pw,
  mw,
  hw,
  gw,
  _w,
  vw,
  yw,
  bw,
  xw,
  Sw,
  Cw,
  ww,
  Tw,
  Ew,
  Dw,
  Ow,
  kw,
  Aw,
  jw,
  Mw,
  Nw,
  Pw,
  Fw,
  Iw,
  Lw,
  Rw,
  zw,
  Bw,
  Vw,
  Hw,
  Uw,
  Ww,
  Gw,
  Kw,
  qw,
  Jw,
  Yw,
  Xw,
  Zw,
  Qw,
  $w,
  eT,
  tT,
  nT,
  rT,
  iT,
  aT,
  oT,
  sT,
  cT,
  lT,
  uT,
  dT,
  fT,
  pT,
  mT,
  hT,
  gT,
  _T,
  vT,
  yT,
  bT,
  xT,
  ST,
  CT,
  wT,
  TT,
  ET,
  DT,
  OT,
  kT,
  AT,
  jT,
  MT,
  NT,
  PT,
  FT,
  IT,
  LT,
  RT,
  zT,
  BT,
  VT,
  HT,
  UT,
  WT,
  GT,
  KT,
  qT,
  JT,
  YT,
  XT,
  Q,
  ZT,
  QT,
  $T,
  eE,
  tE,
  nE,
  rE,
  iE,
  aE,
  oE,
  sE,
  $,
  cE,
  lE,
  uE,
  dE,
  fE,
  pE,
  mE,
  hE,
  gE,
  _E,
  vE,
  yE,
  bE,
  xE,
  SE,
  CE,
  wE,
  TE,
  EE,
  DE,
  OE,
  kE,
  AE,
  jE,
  ME,
  NE,
  PE,
  FE,
  IE,
  LE,
  RE,
  zE,
  BE,
  VE,
  HE,
  UE,
  WE,
  GE,
  KE,
  qE,
  JE,
  YE,
  XE,
  ZE,
  QE,
  $E,
  eD,
  tD,
  nD,
  rD,
  iD,
  aD,
  oD,
  sD,
  cD,
  lD,
  uD,
  dD,
  fD,
  pD,
  mD,
  hD,
  gD,
  _D,
  vD,
  yD,
  bD,
  xD,
  SD,
  CD,
  wD,
  TD,
  ED,
  DD,
  OD,
  kD,
  AD,
  jD,
  MD,
  ND,
  PD,
  FD,
  ID,
  LD,
  RD,
  zD,
  BD,
  VD,
  HD,
  UD,
  WD,
  GD,
  KD,
  qD,
  JD,
  YD,
  XD,
  ZD,
  QD,
  $D,
  eO,
  tO,
  nO,
  rO,
  iO,
  aO,
  oO,
  sO,
  cO,
  lO,
  uO,
  dO,
  fO,
  pO,
  mO,
  hO,
  gO,
  _O,
  vO,
  yO,
  bO,
  xO,
  SO,
  CO,
  wO,
  TO,
  EO,
  DO,
  OO,
  kO,
  AO,
  jO,
  MO,
  NO,
  PO,
  FO,
  IO,
  LO,
  RO,
  zO,
  BO,
  VO,
  HO,
  UO,
  WO,
  GO,
  KO,
  qO,
  JO,
  YO,
  XO,
  ZO,
  QO,
  $O,
  ek,
  tk,
  nk,
  rk,
  ik,
  ak,
  ok,
  sk,
  ck,
  lk,
  uk,
  dk,
  fk,
  pk,
  mk,
  hk,
  gk,
  _k,
  vk,
  yk,
  bk,
  xk,
  Sk,
  Ck,
  wk,
  Tk,
  Ek,
  Dk,
  Ok,
  kk,
  Ak,
  jk,
  Mk,
  Nk,
  Pk,
  Fk,
  Ik,
  Lk,
  Rk,
  zk,
  Bk,
  Vk,
  Hk,
  Uk,
  Wk,
  Gk,
  Kk,
  qk,
  Jk,
  Yk,
  Xk,
  Zk = e(() => {
    (o(
      //! Credit to Astro | MIT License
      /**
       * @license Emotion v11.0.0
       * MIT License
       *
       * Copyright (c) Emotion team and other contributors
       *
       * Permission is hereby granted, free of charge, to any person obtaining a copy
       * of this software and associated documentation files (the "Software"), to deal
       * in the Software without restriction, including without limitation the rights
       * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
       * copies of the Software, and to permit persons to whom the Software is
       * furnished to do so, subject to the following conditions:
       *
       * The above copyright notice and this permission notice shall be included in all
       * copies or substantial portions of the Software.
       *
       * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
       * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
       * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
       * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
       * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
       * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
       * SOFTWARE.
       */
      /*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
    ),
      qe(),
      we(),
      n(),
      E(),
      m(),
      (Xg = oe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, `__esModule`, { value: !0 }), (e.Hsluv = void 0));
          var t = class e {
            constructor() {
              ((this.hex = `#000000`),
                (this.rgb_r = 0),
                (this.rgb_g = 0),
                (this.rgb_b = 0),
                (this.xyz_x = 0),
                (this.xyz_y = 0),
                (this.xyz_z = 0),
                (this.luv_l = 0),
                (this.luv_u = 0),
                (this.luv_v = 0),
                (this.lch_l = 0),
                (this.lch_c = 0),
                (this.lch_h = 0),
                (this.hsluv_h = 0),
                (this.hsluv_s = 0),
                (this.hsluv_l = 0),
                (this.hpluv_h = 0),
                (this.hpluv_p = 0),
                (this.hpluv_l = 0),
                (this.r0s = 0),
                (this.r0i = 0),
                (this.r1s = 0),
                (this.r1i = 0),
                (this.g0s = 0),
                (this.g0i = 0),
                (this.g1s = 0),
                (this.g1i = 0),
                (this.b0s = 0),
                (this.b0i = 0),
                (this.b1s = 0),
                (this.b1i = 0));
            }
            static fromLinear(e) {
              return e <= 0.0031308 ? 12.92 * e : 1.055 * e ** (1 / 2.4) - 0.055;
            }
            static toLinear(e) {
              return e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
            }
            static yToL(t) {
              return t <= e.epsilon ? (t / e.refY) * e.kappa : 116 * (t / e.refY) ** (1 / 3) - 16;
            }
            static lToY(t) {
              return t <= 8 ? (e.refY * t) / e.kappa : e.refY * ((t + 16) / 116) ** 3;
            }
            static rgbChannelToHex(t) {
              let n = Math.round(t * 255),
                r = n % 16,
                i = ((n - r) / 16) | 0;
              return e.hexChars.charAt(i) + e.hexChars.charAt(r);
            }
            static hexToRgbChannel(t, n) {
              let r = e.hexChars.indexOf(t.charAt(n)),
                i = e.hexChars.indexOf(t.charAt(n + 1));
              return (r * 16 + i) / 255;
            }
            static distanceFromOriginAngle(e, t, n) {
              let r = t / (Math.sin(n) - e * Math.cos(n));
              return r < 0 ? 1 / 0 : r;
            }
            static distanceFromOrigin(e, t) {
              return Math.abs(t) / Math.sqrt(e ** 2 + 1);
            }
            static min6(e, t, n, r, i, a) {
              return Math.min(e, Math.min(t, Math.min(n, Math.min(r, Math.min(i, a)))));
            }
            rgbToHex() {
              ((this.hex = `#`),
                (this.hex += e.rgbChannelToHex(this.rgb_r)),
                (this.hex += e.rgbChannelToHex(this.rgb_g)),
                (this.hex += e.rgbChannelToHex(this.rgb_b)));
            }
            hexToRgb() {
              ((this.hex = this.hex.toLowerCase()),
                (this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
                (this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
                (this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
            }
            xyzToRgb() {
              ((this.rgb_r = e.fromLinear(
                e.m_r0 * this.xyz_x + e.m_r1 * this.xyz_y + e.m_r2 * this.xyz_z
              )),
                (this.rgb_g = e.fromLinear(
                  e.m_g0 * this.xyz_x + e.m_g1 * this.xyz_y + e.m_g2 * this.xyz_z
                )),
                (this.rgb_b = e.fromLinear(
                  e.m_b0 * this.xyz_x + e.m_b1 * this.xyz_y + e.m_b2 * this.xyz_z
                )));
            }
            rgbToXyz() {
              let t = e.toLinear(this.rgb_r),
                n = e.toLinear(this.rgb_g),
                r = e.toLinear(this.rgb_b);
              ((this.xyz_x = 0.41239079926595 * t + 0.35758433938387 * n + 0.18048078840183 * r),
                (this.xyz_y = 0.21263900587151 * t + 0.71516867876775 * n + 0.072192315360733 * r),
                (this.xyz_z = 0.019330818715591 * t + 0.11919477979462 * n + 0.95053215224966 * r));
            }
            xyzToLuv() {
              let t = this.xyz_x + 15 * this.xyz_y + 3 * this.xyz_z,
                n = 4 * this.xyz_x,
                r = 9 * this.xyz_y;
              (t === 0 ? ((n = NaN), (r = NaN)) : ((n /= t), (r /= t)),
                (this.luv_l = e.yToL(this.xyz_y)),
                this.luv_l === 0
                  ? ((this.luv_u = 0), (this.luv_v = 0))
                  : ((this.luv_u = 13 * this.luv_l * (n - e.refU)),
                    (this.luv_v = 13 * this.luv_l * (r - e.refV))));
            }
            luvToXyz() {
              if (this.luv_l === 0) {
                ((this.xyz_x = 0), (this.xyz_y = 0), (this.xyz_z = 0));
                return;
              }
              let t = this.luv_u / (13 * this.luv_l) + e.refU,
                n = this.luv_v / (13 * this.luv_l) + e.refV;
              ((this.xyz_y = e.lToY(this.luv_l)),
                (this.xyz_x = 0 - (9 * this.xyz_y * t) / ((t - 4) * n - t * n)),
                (this.xyz_z = (9 * this.xyz_y - 15 * n * this.xyz_y - n * this.xyz_x) / (3 * n)));
            }
            luvToLch() {
              ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8
                  ? (this.lch_h = 0)
                  : ((this.lch_h = (Math.atan2(this.luv_v, this.luv_u) * 180) / Math.PI),
                    this.lch_h < 0 && (this.lch_h = 360 + this.lch_h)));
            }
            lchToLuv() {
              let e = (this.lch_h / 180) * Math.PI;
              ((this.luv_l = this.lch_l),
                (this.luv_u = Math.cos(e) * this.lch_c),
                (this.luv_v = Math.sin(e) * this.lch_c));
            }
            calculateBoundingLines(t) {
              let n = (t + 16) ** 3 / 1560896,
                r = n > e.epsilon ? n : t / e.kappa,
                i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
                a = r * (838422 * e.m_r2 + 769860 * e.m_r1 + 731718 * e.m_r0),
                o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
                s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
                c = r * (838422 * e.m_g2 + 769860 * e.m_g1 + 731718 * e.m_g0),
                l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
                u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
                d = r * (838422 * e.m_b2 + 769860 * e.m_b1 + 731718 * e.m_b0),
                f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
              ((this.r0s = i / o),
                (this.r0i = (a * t) / o),
                (this.r1s = i / (o + 126452)),
                (this.r1i = ((a - 769860) * t) / (o + 126452)),
                (this.g0s = s / l),
                (this.g0i = (c * t) / l),
                (this.g1s = s / (l + 126452)),
                (this.g1i = ((c - 769860) * t) / (l + 126452)),
                (this.b0s = u / f),
                (this.b0i = (d * t) / f),
                (this.b1s = u / (f + 126452)),
                (this.b1i = ((d - 769860) * t) / (f + 126452)));
            }
            calcMaxChromaHpluv() {
              let t = e.distanceFromOrigin(this.r0s, this.r0i),
                n = e.distanceFromOrigin(this.r1s, this.r1i),
                r = e.distanceFromOrigin(this.g0s, this.g0i),
                i = e.distanceFromOrigin(this.g1s, this.g1i),
                a = e.distanceFromOrigin(this.b0s, this.b0i),
                o = e.distanceFromOrigin(this.b1s, this.b1i);
              return e.min6(t, n, r, i, a, o);
            }
            calcMaxChromaHsluv(t) {
              let n = (t / 360) * Math.PI * 2,
                r = e.distanceFromOriginAngle(this.r0s, this.r0i, n),
                i = e.distanceFromOriginAngle(this.r1s, this.r1i, n),
                a = e.distanceFromOriginAngle(this.g0s, this.g0i, n),
                o = e.distanceFromOriginAngle(this.g1s, this.g1i, n),
                s = e.distanceFromOriginAngle(this.b0s, this.b0i, n),
                c = e.distanceFromOriginAngle(this.b1s, this.b1i, n);
              return e.min6(r, i, a, o, s, c);
            }
            hsluvToLch() {
              (this.hsluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hsluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hsluv_l),
                    this.calculateBoundingLines(this.hsluv_l),
                    (this.lch_c = (this.calcMaxChromaHsluv(this.hsluv_h) / 100) * this.hsluv_s)),
                (this.lch_h = this.hsluv_h));
            }
            lchToHsluv() {
              if (this.lch_l > 99.9999999) ((this.hsluv_s = 0), (this.hsluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hsluv_s = 0), (this.hsluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHsluv(this.lch_h);
                ((this.hsluv_s = (this.lch_c / e) * 100), (this.hsluv_l = this.lch_l));
              }
              this.hsluv_h = this.lch_h;
            }
            hpluvToLch() {
              (this.hpluv_l > 99.9999999
                ? ((this.lch_l = 100), (this.lch_c = 0))
                : this.hpluv_l < 1e-8
                  ? ((this.lch_l = 0), (this.lch_c = 0))
                  : ((this.lch_l = this.hpluv_l),
                    this.calculateBoundingLines(this.hpluv_l),
                    (this.lch_c = (this.calcMaxChromaHpluv() / 100) * this.hpluv_p)),
                (this.lch_h = this.hpluv_h));
            }
            lchToHpluv() {
              if (this.lch_l > 99.9999999) ((this.hpluv_p = 0), (this.hpluv_l = 100));
              else if (this.lch_l < 1e-8) ((this.hpluv_p = 0), (this.hpluv_l = 0));
              else {
                this.calculateBoundingLines(this.lch_l);
                let e = this.calcMaxChromaHpluv();
                ((this.hpluv_p = (this.lch_c / e) * 100), (this.hpluv_l = this.lch_l));
              }
              this.hpluv_h = this.lch_h;
            }
            hsluvToRgb() {
              (this.hsluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hpluvToRgb() {
              (this.hpluvToLch(), this.lchToLuv(), this.luvToXyz(), this.xyzToRgb());
            }
            hsluvToHex() {
              (this.hsluvToRgb(), this.rgbToHex());
            }
            hpluvToHex() {
              (this.hpluvToRgb(), this.rgbToHex());
            }
            rgbToHsluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHsluv());
            }
            rgbToHpluv() {
              (this.rgbToXyz(),
                this.xyzToLuv(),
                this.luvToLch(),
                this.lchToHpluv(),
                this.lchToHpluv());
            }
            hexToHsluv() {
              (this.hexToRgb(), this.rgbToHsluv());
            }
            hexToHpluv() {
              (this.hexToRgb(), this.rgbToHpluv());
            }
          };
          ((e.Hsluv = t),
            (t.hexChars = `0123456789abcdef`),
            (t.refY = 1),
            (t.refU = 0.19783000664283),
            (t.refV = 0.46831999493879),
            (t.kappa = 903.2962962),
            (t.epsilon = 0.0088564516),
            (t.m_r0 = 3.240969941904521),
            (t.m_r1 = -1.537383177570093),
            (t.m_r2 = -0.498610760293),
            (t.m_g0 = -0.96924363628087),
            (t.m_g1 = 1.87596750150772),
            (t.m_g2 = 0.041555057407175),
            (t.m_b0 = 0.055630079696993),
            (t.m_b1 = -0.20397695888897),
            (t.m_b2 = 1.056971514242878));
        },
      })),
      (Zg = oe({
        "../../../node_modules/eventemitter3/index.js"(e, t) {
          var n = Object.prototype.hasOwnProperty,
            r = `~`;
          function i() {}
          Object.create && ((i.prototype = Object.create(null)), new i().__proto__ || (r = !1));
          function a(e, t, n) {
            ((this.fn = e), (this.context = t), (this.once = n || !1));
          }
          function o(e, t, n, i, o) {
            if (typeof n != `function`) throw TypeError(`The listener must be a function`);
            var s = new a(n, i || e, o),
              c = r ? r + t : t;
            return (
              e._events[c]
                ? e._events[c].fn
                  ? (e._events[c] = [e._events[c], s])
                  : e._events[c].push(s)
                : ((e._events[c] = s), e._eventsCount++),
              e
            );
          }
          function s(e, t) {
            --e._eventsCount === 0 ? (e._events = new i()) : delete e._events[t];
          }
          function c() {
            ((this._events = new i()), (this._eventsCount = 0));
          }
          ((c.prototype.eventNames = function () {
            var e = [],
              t,
              i;
            if (this._eventsCount === 0) return e;
            for (i in (t = this._events)) n.call(t, i) && e.push(r ? i.slice(1) : i);
            return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
          }),
            (c.prototype.listeners = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              if (!n) return [];
              if (n.fn) return [n.fn];
              for (var i = 0, a = n.length, o = Array(a); i < a; i++) o[i] = n[i].fn;
              return o;
            }),
            (c.prototype.listenerCount = function (e) {
              var t = r ? r + e : e,
                n = this._events[t];
              return n ? (n.fn ? 1 : n.length) : 0;
            }),
            (c.prototype.emit = function (e, t, n, i, a, o) {
              var s = r ? r + e : e;
              if (!this._events[s]) return !1;
              var c = this._events[s],
                l = arguments.length,
                u,
                d;
              if (c.fn) {
                switch ((c.once && this.removeListener(e, c.fn, void 0, !0), l)) {
                  case 1:
                    return (c.fn.call(c.context), !0);
                  case 2:
                    return (c.fn.call(c.context, t), !0);
                  case 3:
                    return (c.fn.call(c.context, t, n), !0);
                  case 4:
                    return (c.fn.call(c.context, t, n, i), !0);
                  case 5:
                    return (c.fn.call(c.context, t, n, i, a), !0);
                  case 6:
                    return (c.fn.call(c.context, t, n, i, a, o), !0);
                }
                for (d = 1, u = Array(l - 1); d < l; d++) u[d - 1] = arguments[d];
                c.fn.apply(c.context, u);
              } else {
                var f = c.length,
                  p;
                for (d = 0; d < f; d++)
                  switch ((c[d].once && this.removeListener(e, c[d].fn, void 0, !0), l)) {
                    case 1:
                      c[d].fn.call(c[d].context);
                      break;
                    case 2:
                      c[d].fn.call(c[d].context, t);
                      break;
                    case 3:
                      c[d].fn.call(c[d].context, t, n);
                      break;
                    case 4:
                      c[d].fn.call(c[d].context, t, n, i);
                      break;
                    default:
                      if (!u) for (p = 1, u = Array(l - 1); p < l; p++) u[p - 1] = arguments[p];
                      c[d].fn.apply(c[d].context, u);
                  }
              }
              return !0;
            }),
            (c.prototype.on = function (e, t, n) {
              return o(this, e, t, n, !1);
            }),
            (c.prototype.once = function (e, t, n) {
              return o(this, e, t, n, !0);
            }),
            (c.prototype.removeListener = function (e, t, n, i) {
              var a = r ? r + e : e;
              if (!this._events[a]) return this;
              if (!t) return (s(this, a), this);
              var o = this._events[a];
              if (o.fn) o.fn === t && (!i || o.once) && (!n || o.context === n) && s(this, a);
              else {
                for (var c = 0, l = [], u = o.length; c < u; c++)
                  (o[c].fn !== t || (i && !o[c].once) || (n && o[c].context !== n)) && l.push(o[c]);
                l.length ? (this._events[a] = l.length === 1 ? l[0] : l) : s(this, a);
              }
              return this;
            }),
            (c.prototype.removeAllListeners = function (e) {
              var t;
              return (
                e
                  ? ((t = r ? r + e : e), this._events[t] && s(this, t))
                  : ((this._events = new i()), (this._eventsCount = 0)),
                this
              );
            }),
            (c.prototype.off = c.prototype.removeListener),
            (c.prototype.addListener = c.prototype.on),
            (c.prefixed = r),
            (c.EventEmitter = c),
            t !== void 0 && (t.exports = c));
        },
      })),
      (Qg = oe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
          e
        ) {
          var t = typeof Symbol == `function` && Symbol.for,
            n = t ? Symbol.for(`react.element`) : 60103,
            r = t ? Symbol.for(`react.portal`) : 60106,
            i = t ? Symbol.for(`react.fragment`) : 60107,
            a = t ? Symbol.for(`react.strict_mode`) : 60108,
            o = t ? Symbol.for(`react.profiler`) : 60114,
            s = t ? Symbol.for(`react.provider`) : 60109,
            c = t ? Symbol.for(`react.context`) : 60110,
            l = t ? Symbol.for(`react.async_mode`) : 60111,
            u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
            d = t ? Symbol.for(`react.forward_ref`) : 60112,
            f = t ? Symbol.for(`react.suspense`) : 60113,
            p = t ? Symbol.for(`react.suspense_list`) : 60120,
            m = t ? Symbol.for(`react.memo`) : 60115,
            h = t ? Symbol.for(`react.lazy`) : 60116,
            g = t ? Symbol.for(`react.block`) : 60121,
            _ = t ? Symbol.for(`react.fundamental`) : 60117,
            v = t ? Symbol.for(`react.responder`) : 60118,
            y = t ? Symbol.for(`react.scope`) : 60119;
          function b(e) {
            if (typeof e == `object` && e) {
              var t = e.$$typeof;
              switch (t) {
                case n:
                  switch (((e = e.type), e)) {
                    case l:
                    case u:
                    case i:
                    case o:
                    case a:
                    case f:
                      return e;
                    default:
                      switch (((e &&= e.$$typeof), e)) {
                        case c:
                        case d:
                        case h:
                        case m:
                        case s:
                          return e;
                        default:
                          return t;
                      }
                  }
                case r:
                  return t;
              }
            }
          }
          function x(e) {
            return b(e) === u;
          }
          ((e.AsyncMode = l),
            (e.ConcurrentMode = u),
            (e.ContextConsumer = c),
            (e.ContextProvider = s),
            (e.Element = n),
            (e.ForwardRef = d),
            (e.Fragment = i),
            (e.Lazy = h),
            (e.Memo = m),
            (e.Portal = r),
            (e.Profiler = o),
            (e.StrictMode = a),
            (e.Suspense = f),
            (e.isAsyncMode = function (e) {
              return x(e) || b(e) === l;
            }),
            (e.isConcurrentMode = x),
            (e.isContextConsumer = function (e) {
              return b(e) === c;
            }),
            (e.isContextProvider = function (e) {
              return b(e) === s;
            }),
            (e.isElement = function (e) {
              return typeof e == `object` && !!e && e.$$typeof === n;
            }),
            (e.isForwardRef = function (e) {
              return b(e) === d;
            }),
            (e.isFragment = function (e) {
              return b(e) === i;
            }),
            (e.isLazy = function (e) {
              return b(e) === h;
            }),
            (e.isMemo = function (e) {
              return b(e) === m;
            }),
            (e.isPortal = function (e) {
              return b(e) === r;
            }),
            (e.isProfiler = function (e) {
              return b(e) === o;
            }),
            (e.isStrictMode = function (e) {
              return b(e) === a;
            }),
            (e.isSuspense = function (e) {
              return b(e) === f;
            }),
            (e.isValidElementType = function (e) {
              return (
                typeof e == `string` ||
                typeof e == `function` ||
                e === i ||
                e === u ||
                e === o ||
                e === a ||
                e === f ||
                e === p ||
                (typeof e == `object` &&
                  !!e &&
                  (e.$$typeof === h ||
                    e.$$typeof === m ||
                    e.$$typeof === s ||
                    e.$$typeof === c ||
                    e.$$typeof === d ||
                    e.$$typeof === _ ||
                    e.$$typeof === v ||
                    e.$$typeof === y ||
                    e.$$typeof === g))
              );
            }),
            (e.typeOf = b));
        },
      })),
      ($g = oe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = Qg();
        },
      })),
      (e_ = oe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = $g(),
            r = {
              childContextTypes: !0,
              contextType: !0,
              contextTypes: !0,
              defaultProps: !0,
              displayName: !0,
              getDefaultProps: !0,
              getDerivedStateFromError: !0,
              getDerivedStateFromProps: !0,
              mixins: !0,
              propTypes: !0,
              type: !0,
            },
            i = {
              name: !0,
              length: !0,
              prototype: !0,
              caller: !0,
              callee: !0,
              arguments: !0,
              arity: !0,
            },
            a = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 },
            o = {
              $$typeof: !0,
              compare: !0,
              defaultProps: !0,
              displayName: !0,
              propTypes: !0,
              type: !0,
            },
            s = {};
          ((s[n.ForwardRef] = a), (s[n.Memo] = o));
          function c(e) {
            return n.isMemo(e) ? o : s[e.$$typeof] || r;
          }
          var l = Object.defineProperty,
            u = Object.getOwnPropertyNames,
            d = Object.getOwnPropertySymbols,
            f = Object.getOwnPropertyDescriptor,
            p = Object.getPrototypeOf,
            m = Object.prototype;
          function h(e, t, n) {
            if (typeof t != `string`) {
              if (m) {
                var r = p(t);
                r && r !== m && h(e, r, n);
              }
              var a = u(t);
              d && (a = a.concat(d(t)));
              for (var o = c(e), s = c(t), g = 0; g < a.length; ++g) {
                var _ = a[g];
                if (!i[_] && !(n && n[_]) && !(s && s[_]) && !(o && o[_])) {
                  var v = f(t, _);
                  try {
                    l(e, _, v);
                  } catch {}
                }
              }
            }
            return e;
          }
          t.exports = h;
        },
      })),
      (t_ = oe({
        "../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(e, t) {
          (function () {
            function e(e, t) {
              document.addEventListener
                ? e.addEventListener(`scroll`, t, !1)
                : e.attachEvent(`scroll`, t);
            }
            function n(e) {
              document.body
                ? e()
                : document.addEventListener
                  ? document.addEventListener(`DOMContentLoaded`, function t() {
                      (document.removeEventListener(`DOMContentLoaded`, t), e());
                    })
                  : document.attachEvent(`onreadystatechange`, function t() {
                      (document.readyState == `interactive` || document.readyState == `complete`) &&
                        (document.detachEvent(`onreadystatechange`, t), e());
                    });
            }
            function r(e) {
              ((this.g = document.createElement(`div`)),
                this.g.setAttribute(`aria-hidden`, `true`),
                this.g.appendChild(document.createTextNode(e)),
                (this.h = document.createElement(`span`)),
                (this.i = document.createElement(`span`)),
                (this.m = document.createElement(`span`)),
                (this.j = document.createElement(`span`)),
                (this.l = -1),
                (this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
                (this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
                this.h.appendChild(this.m),
                this.i.appendChild(this.j),
                this.g.appendChild(this.h),
                this.g.appendChild(this.i));
            }
            function i(e, t) {
              e.g.style.cssText =
                `max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
                t +
                `;`;
            }
            function a(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function o(t, n) {
              function r() {
                var e = i;
                a(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), a(t));
            }
            function s(e, t, n) {
              ((t ||= {}),
                (n ||= N),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var c = null,
              l = null,
              u = null,
              d = null;
            function f(e) {
              return (
                l === null &&
                  (p(e) && /Apple/.test(N.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        N.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function p(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function m(e, t) {
              var n = e.style,
                r = e.weight;
              if (u === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                u = i.style.font !== ``;
              }
              return [n, r, u ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((s.prototype.load = function (e, t) {
              var a = this,
                s = e || `BESbswy`,
                l = 0,
                u = t || 3e3,
                d = new Date().getTime();
              return new Promise(function (e, t) {
                if (p(a.context) && !f(a.context)) {
                  var h = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(m(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    g = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([g, h]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (_ != -1 && v != -1) || (_ != -1 && y != -1) || (v != -1 && y != -1)) &&
                        ((t = _ != v && _ != y && v != y) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              N.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((_ == b && v == b && y == b) ||
                              (_ == x && v == x && y == x) ||
                              (_ == S && v == S && y == S)))),
                        (t = !t)),
                        t &&
                          (C.parentNode !== null && C.parentNode.removeChild(C),
                          clearTimeout(l),
                          e(a)));
                    }
                    function f() {
                      if (new Date().getTime() - d >= u)
                        (C.parentNode !== null && C.parentNode.removeChild(C),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((_ = p.g.offsetWidth),
                          (v = h.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          n()),
                          (l = setTimeout(f, 50)));
                      }
                    }
                    var p = new r(s),
                      h = new r(s),
                      g = new r(s),
                      _ = -1,
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = document.createElement(`div`);
                    ((C.dir = `ltr`),
                      i(p, m(a, `sans-serif`)),
                      i(h, m(a, `serif`)),
                      i(g, m(a, `monospace`)),
                      C.appendChild(p.g),
                      C.appendChild(h.g),
                      C.appendChild(g.g),
                      a.context.document.body.appendChild(C),
                      (b = p.g.offsetWidth),
                      (x = h.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      f(),
                      o(p, function (e) {
                        ((_ = e), n());
                      }),
                      i(p, m(a, `"` + a.family + `",sans-serif`)),
                      o(h, function (e) {
                        ((v = e), n());
                      }),
                      i(h, m(a, `"` + a.family + `",serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, m(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = s)
                : ((N.FontFaceObserver = s),
                  (N.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (n_ = () => {}),
      (r_ = N !== void 0),
      (i_ = (() =>
        r_ &&
        (d.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(d.userAgent)))()),
      (a_ = r_ && typeof N.requestIdleCallback == `function`),
      (o_ = (() => (a_ ? N.requestIdleCallback : setTimeout))()),
      (s_ = () => () => {}),
      (c_ = () => !0),
      (l_ = () => !1),
      (u_ = new Map()),
      (d_ = r_ ? void 0 : new Set()),
      (f_ = `preload`),
      (p_ = Object.keys),
      (m_ = `equals`),
      (h_ = (() => h.createContext({}))()),
      (g_ = (() => h.createContext({}))()),
      (__ = []),
      (v_ = h.createContext(void 0)),
      (v_.displayName = `LibraryFeaturesContext`),
      (y_ = (() => v_.Provider)()),
      (b_ = () => h.useContext(v_) ?? {}),
      (x_ = `default`),
      (S_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (C_ = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            z(this, `promiseState`, S_.Pending),
            z(this, `preloadPromise`),
            z(this, `value`),
            z(this, `reason`),
            z(this, `read`, () => {
              if (this.promiseState === S_.Fulfilled) return this.value;
              throw this.promiseState === S_.Rejected
                ? this.reason
                : Error(`Need to call preload() before read()`);
            }));
        }
        static is(t) {
          return t instanceof e;
        }
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === S_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === S_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== S_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && d_ !== void 0 && d_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = S_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = S_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && u_.has(this.cacheHash) ? u_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!ct(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        async readAsync() {
          return this.readMaybeAsync();
        }
        readMaybeAsync() {
          let e = this.preload();
          return e ? e.then(this.read) : this.read();
        }
        use() {
          let e = this.preload();
          if (e) throw e;
          return this.read();
        }
      }),
      (w_ = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (T_ = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (E_ = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (D_ = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (O_ = -1),
      (k_ = -2),
      (A_ = -3),
      (j_ = -4),
      (M_ = -5),
      (N_ = -6),
      (P_ = -7),
      (F_ = r_
        ? N
        : {
            addEventListener: () => {},
            removeEventListener: () => {},
            dispatchEvent: () => !1,
            ResizeObserver: void 0,
            onpointerdown: !1,
            onpointermove: !1,
            onpointerup: !1,
            ontouchstart: !1,
            ontouchmove: !1,
            ontouchend: !1,
            onmousedown: !1,
            onmousemove: !1,
            onmouseup: !1,
            devicePixelRatio: 1,
            scrollX: 0,
            scrollY: 0,
            location: { hash: ``, hostname: ``, href: ``, origin: ``, pathname: ``, search: `` },
            document: { baseURI: ``, cookie: ``, referrer: null },
            setTimeout: () => 0,
            clearTimeout: () => {},
            setInterval: () => 0,
            clearInterval: () => {},
            requestAnimationFrame: () => 0,
            cancelAnimationFrame: () => {},
            requestIdleCallback: () => 0,
            getSelection: () => null,
            matchMedia: (e) => ({
              matches: !1,
              media: e,
              onchange: () => {},
              addEventListener: () => {},
              removeEventListener: () => {},
              addListener: () => {},
              removeListener: () => {},
              dispatchEvent: () => !1,
            }),
            innerHeight: 0,
            innerWidth: 0,
            SVGSVGElement: {},
            scheduler: void 0,
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (I_ = 2),
      (L_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (R_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (B_ = class {
        constructor() {
          (z(this, `payload`, on()), z(this, `isEmpty`, !0));
        }
        set(e, t, n) {
          (this.payload[e].set(t, n), (this.isEmpty = !1));
        }
        has(e, t) {
          return this.payload[e].has(t);
        }
        get(e, t) {
          return this.payload[e].get(t);
        }
        toString() {
          if (!this.isEmpty)
            try {
              return tn(this.payload);
            } catch (e) {
              console.error(`Failed to serialize handover data.`, e);
              return;
            }
        }
        clear() {
          for (let e of Object.values(this.payload)) e.clear();
          this.isEmpty = !0;
        }
      }),
      (V_ = (() => (r_ ? void 0 : new B_()))()),
      (H_ = (() => R_.CollectionUtilsCache)()),
      (U_ = new WeakMap()),
      (W_ = a(void 0)),
      (G_ = class {
        constructor(e, t) {
          ((this.collectionId = t),
            z(this, `module`),
            z(this, `cacheMap`, new Map()),
            (this.module = new C_(async () => {
              try {
                let t = await e();
                return (U(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(dt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = dn(n),
            i = fn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (V_ !== void 0) {
              if (ct(e)) return e.then((e) => (V_.set(H_, i, e), e));
              V_.set(H_, i, e);
            }
            return e;
          }
          if (ln(H_, i)) {
            let e = un(H_, i);
            return (this.cacheMap.set(i, new C_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = ct(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(dt(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (V_ !== void 0 && V_.set(H_, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new C_(() =>
            s
              .then((e) => (V_ !== void 0 && V_.set(H_, i, e), e))
              .catch((e) => {
                console.error(dt(`Failed to call CollectionUtils method.`, e));
              })
          );
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
      }),
      (K_ = (() => F_.scheduler && `yield` in F_.scheduler)()),
      (q_ = (() => F_.scheduler && `postTask` in F_.scheduler)()),
      (J_ = new Set()),
      (Y_ = !i_),
      (X_ = 46),
      (Z_ = 47),
      (Q_ = (e, t) => e.charCodeAt(t)),
      ($_ = (e, t) => e.lastIndexOf(t)),
      (ev = (e, t, n) => e.slice(t, n)),
      (tv = !1),
      (nv = `/`),
      (rv = (e) => e === Z_),
      (iv = new Set([`/404.html`, `/404`, `/404/`])),
      (av = RegExp(`:([a-z]\\w*)`, `gi`)),
      (ov = `framer_variant`),
      (sv = h.createContext({ global: void 0, routes: {} })),
      (cv = 10),
      (lv = 1e4),
      (uv = (e) => `--view-transition-${e}`),
      (dv = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Bn(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, N.innerWidth - n), Math.max(r, N.innerHeight - r))}px at ${n}px ${r}px);`;
          },
        },
        conic: {
          makeKeyframe: (e, t, n) => {
            let r = 0;
            return (
              ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
                (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
                (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
                (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
                (r = (e.sweepAngle / 360) * 100),
              `${uv(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`conic-offset`)})`,
              r =
                (t === `exit` && e.angularDirection === `clockwise`) ||
                (t === `enter` && e.angularDirection === `counter-clockwise`),
              i = r ? `transparent` : `black`,
              a = r ? `black` : `transparent`,
              o = `conic-gradient(from `;
            return (
              (o += `${e.angle}deg at ${e.x} ${e.y}, `),
              (o += `${i} 0%, ${i} ${n}, `),
              (o += `${a} ${n}, ${a} 100%)`),
              `mask-image: ${o}; -webkit-mask-image: ${o};`
            );
          },
          makePropertyRules: () => `
        @property ${uv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Bn(e),
              i = N.innerHeight - r,
              a = N.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = zn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${uv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`blinds-width`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `repeating-linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} 0px, ${r} ${n}, `),
              (a += `${i} ${n}, ${i} ${e.width})`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${uv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${uv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${uv(`wipe-offset`)})`,
              r = t === `exit` ? `transparent` : `black`,
              i = t === `exit` ? `black` : `transparent`,
              a = `linear-gradient(`;
            return (
              (a += e.angle + 90 + `deg, `),
              (a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
              (a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
              `mask-image: ${a}; -webkit-mask-image: ${a};`
            );
          },
          makePropertyRules: () => `
            @property ${uv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (fv = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (pv = `view-transition-styles`),
      (mv = {
        x: `0px`,
        y: `0px`,
        scale: 1,
        opacity: 1,
        rotate3d: !1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
        transition: {
          type: `tween`,
          delay: 0,
          duration: 0.2,
          ease: [0.27, 0, 0.51, 1],
          stiffness: 400,
          damping: 30,
          mass: 1,
        },
      }),
      (hv = () => {}),
      (_v = () => {
        (gv ||
          ((gv = document.createElement(`div`)),
          gv.setAttribute(`aria-live`, `assertive`),
          gv.setAttribute(`aria-atomic`, `true`),
          (gv.style.position = `absolute`),
          (gv.style.transform = `scale(0)`),
          document.body.append(gv)),
          setTimeout(() => {
            gv.textContent = document.title;
          }, 60));
      }),
      (vv = !0),
      (yv = (() => {
        if (d === void 0) return !1;
        let e = d.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (bv = (() => r_ && typeof N.navigation?.back == `function`)()),
      (xv = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (Sv = h.createContext(null)),
      (Cv = (() => {
        let e = a(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (wv = async () => {}),
      (Tv = { activeLocale: null, locales: [], setLocale: wv }),
      (Ev = (() => {
        let e = h.createContext(Tv);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Dv = (() => {
        let e = h.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Ov = new Set()),
      (kv = (() => {
        let e = a({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Av = `__f_replay`),
      (jv = `__f_replay_ignore`),
      (Mv = () => r_),
      (Nv =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Pv = (e) => {
        e.target?.closest?.(`#main`) &&
          (kr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Fv = !1),
      (Qv = [Pr]),
      (Zv = [Pr]),
      (Xv = [Pr]),
      (Yv = [Pr]),
      (Jv = [Pr]),
      (qv = [Pr]),
      (Kv = [Pr]),
      (Gv = [Pr]),
      (Wv = [Pr]),
      (Uv = [Pr]),
      (Hv = [Pr]),
      (Vv = [Pr]),
      (Bv = [Pr]),
      (zv = [Pr]),
      (Rv = [Pr]),
      (Lv = [Pr]),
      (Iv = [Pr]),
      (ey = class {
        constructor() {
          (Ue($v, 5, this),
            z(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            z(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            z(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            z(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            z(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            z(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            z(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            Fr(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            Fr(
              `framer-hydration-insertion-effects`,
              `framer-hydration-insertion-effects-start`,
              `framer-hydration-insertion-effects-end`
            ));
        }
        markUseLayoutEffectsStart() {
          performance.mark(`framer-hydration-layout-effects-start`);
        }
        markRouterUseLayoutEffectStart() {
          performance.mark(`framer-hydration-router-layout-effect`);
        }
        markUseLayoutEffectsEnd() {
          (performance.mark(`framer-hydration-layout-effects-end`),
            Fr(
              `framer-hydration-layout-effects`,
              `framer-hydration-layout-effects-start`,
              `framer-hydration-layout-effects-end`
            ));
        }
        markUseEffectsStart() {
          performance.mark(`framer-hydration-effects-start`);
        }
        markUseEffectsRouterStart() {
          performance.mark(`framer-hydration-router-effect`);
        }
        markUseEffectsAreSynchronous() {
          performance.mark(`framer-hydration-effects-sync`);
        }
        markUseEffectsEnd() {
          (performance.mark(`framer-hydration-effects-end`),
            Fr(
              `framer-hydration-effects`,
              performance.getEntriesByName(`framer-hydration-first-paint`)[0]?.name ??
                performance.getEntriesByName(`framer-hydration-effects-start`)[0]?.name,
              `framer-hydration-effects-end`
            ));
        }
        markRafStart() {
          ((this.browserRendering.hasStarted = !0),
            performance.mark(`framer-hydration-browser-render-start`));
        }
        markRafEnd() {
          (performance.mark(`framer-hydration-browser-raf-end`),
            Fr(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            Fr(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            Fr(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          Fr(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          Fr(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      ($v = xe(null)),
      be($v, 1, `markRenderStart`, Qv, ey),
      be($v, 1, `markRenderEnd`, Zv, ey),
      be($v, 1, `markUseInsertionEffectsStart`, Xv, ey),
      be($v, 1, `markUseInsertionEffectRouterStart`, Yv, ey),
      be($v, 1, `markUseInsertionEffectsEnd`, Jv, ey),
      be($v, 1, `markUseLayoutEffectsStart`, qv, ey),
      be($v, 1, `markRouterUseLayoutEffectStart`, Kv, ey),
      be($v, 1, `markUseLayoutEffectsEnd`, Gv, ey),
      be($v, 1, `markUseEffectsStart`, Wv, ey),
      be($v, 1, `markUseEffectsRouterStart`, Uv, ey),
      be($v, 1, `markUseEffectsAreSynchronous`, Hv, ey),
      be($v, 1, `markUseEffectsEnd`, Vv, ey),
      be($v, 1, `markRafStart`, Bv, ey),
      be($v, 1, `markRafEnd`, zv, ey),
      be($v, 1, `markLayoutStylePaintEnd`, Rv, ey),
      be($v, 1, `measureMutationEffects`, Lv, ey),
      be($v, 1, `measureUnattributedHydrationOverhead`, Iv, ey),
      ye($v, ey),
      (ny = !1),
      (ry = { Start: Br, End: Vr }),
      (iy = class extends Error {}),
      (ay = class extends _ {
        constructor(e) {
          (super(e), (this.state = { error: void 0, forceUpdateKey: e.forceUpdateKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.forceUpdateKey !== t.forceUpdateKey) {
            let n = { forceUpdateKey: e.forceUpdateKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof iy)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return Hr(e, t);
        }
      }),
      (oy = Object.freeze([])),
      (cy = new Set()),
      (ly = class {
        constructor() {
          (z(this, `observers`, new Set()), z(this, `transactions`, {}));
        }
        add(e) {
          this.observers.add(e);
          let t = !1;
          return () => {
            t || ((t = !0), this.remove(e));
          };
        }
        remove(e) {
          this.observers.delete(e);
        }
        notify(e, t) {
          if (t) {
            let n = this.transactions[t] || e;
            ((n.value = e.value), (this.transactions[t] = n));
          } else this.callObservers(e);
        }
        finishTransaction(e) {
          let t = this.transactions[e];
          return (delete this.transactions[e], this.callObservers(t, e));
        }
        callObservers(e, t) {
          let n = [];
          return (
            new Set(this.observers).forEach((r) => {
              typeof r == `function` ? r(e, t) : (r.update(e, t), n.push(r.finish));
            }),
            n
          );
        }
      }),
      (uy = (() => {
        function e(e) {
          return (
            ii(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            ai(e) ? e : new py(e)
          );
        }
        return (
          (e.transaction = (e) => {
            let t = Math.random(),
              n = new Set();
            e((e, r) => {
              (e.set(r, t), n.add(e));
            }, t);
            let r = [];
            (n.forEach((e) => {
              r.push(...e.finishTransaction(t));
            }),
              r.forEach((e) => {
                e(t);
              }));
          }),
          (e.getNumber = (t, n = 0) => e.get(t, n)),
          (e.get = (e, t) => (e == null ? t : ai(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              ai(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (dy = `onUpdate`),
      (fy = `finishTransaction`),
      (py = class {
        constructor(e) {
          ((this.value = e), z(this, `observers`, new ly()));
        }
        static interpolationFor(e, t) {
          if (ai(e)) return oi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (ai(e) && (e = e.get()), (this.value = e));
          let r = { value: e, oldValue: n };
          this.observers.notify(r, t);
        }
        finishTransaction(e) {
          return this.observers.finishTransaction(e);
        }
        onUpdate(e) {
          return this.observers.add(e);
        }
      }),
      ((e) => {
        ((e.isQuadrilateralPoints = (e) => e?.length === 4),
          (e.add = (...e) => e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), { x: 0, y: 0 })),
          (e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
          (e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
          (e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
          (e.absolute = (e) => ({ x: Math.abs(e.x), y: Math.abs(e.y) })),
          (e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: ci(e.x, t.x), y: ci(e.y, t.y) })),
          (e.distance = (e, t) => {
            let n = Math.abs(e.x - t.x),
              r = Math.abs(e.y - t.y);
            return Math.sqrt(n * n + r * r);
          }),
          (e.angle = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI - 90),
          (e.angleFromX = (e, t) => (Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
          (e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
          (e.rotationNormalizer = () => {
            let e;
            return (t) => {
              typeof e != `number` && (e = t);
              let n = e - t,
                r = Math.abs(n) + 180,
                i = Math.floor(r / 360);
              return (n < 180 && (t -= i * 360), n > 180 && (t += i * 360), (e = t), t);
            };
          }));
        function t(e, t) {
          return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
        }
        e.center = t;
        function n(e) {
          let t = 0,
            n = 0;
          return (
            e.forEach((e) => {
              ((t += e.x), (n += e.y));
            }),
            { x: t / e.length, y: n / e.length }
          );
        }
        e.centroid = n;
        function r(t) {
          let n = e.centroid(t),
            r = new Map();
          for (let e = 0; e < t.length; e++) {
            let i = t[e];
            i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
          }
          return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
        }
        e.sortClockwise = r;
      })((ui ||= {})),
      (my = {
        aliceblue: `f0f8ff`,
        antiquewhite: `faebd7`,
        aqua: `0ff`,
        aquamarine: `7fffd4`,
        azure: `f0ffff`,
        beige: `f5f5dc`,
        bisque: `ffe4c4`,
        black: `000`,
        blanchedalmond: `ffebcd`,
        blue: `00f`,
        blueviolet: `8a2be2`,
        brown: `a52a2a`,
        burlywood: `deb887`,
        burntsienna: `ea7e5d`,
        cadetblue: `5f9ea0`,
        chartreuse: `7fff00`,
        chocolate: `d2691e`,
        coral: `ff7f50`,
        cornflowerblue: `6495ed`,
        cornsilk: `fff8dc`,
        crimson: `dc143c`,
        cyan: `0ff`,
        darkblue: `00008b`,
        darkcyan: `008b8b`,
        darkgoldenrod: `b8860b`,
        darkgray: `a9a9a9`,
        darkgreen: `006400`,
        darkgrey: `a9a9a9`,
        darkkhaki: `bdb76b`,
        darkmagenta: `8b008b`,
        darkolivegreen: `556b2f`,
        darkorange: `ff8c00`,
        darkorchid: `9932cc`,
        darkred: `8b0000`,
        darksalmon: `e9967a`,
        darkseagreen: `8fbc8f`,
        darkslateblue: `483d8b`,
        darkslategray: `2f4f4f`,
        darkslategrey: `2f4f4f`,
        darkturquoise: `00ced1`,
        darkviolet: `9400d3`,
        deeppink: `ff1493`,
        deepskyblue: `00bfff`,
        dimgray: `696969`,
        dimgrey: `696969`,
        dodgerblue: `1e90ff`,
        firebrick: `b22222`,
        floralwhite: `fffaf0`,
        forestgreen: `228b22`,
        fuchsia: `f0f`,
        gainsboro: `dcdcdc`,
        ghostwhite: `f8f8ff`,
        gold: `ffd700`,
        goldenrod: `daa520`,
        gray: `808080`,
        green: `008000`,
        greenyellow: `adff2f`,
        grey: `808080`,
        honeydew: `f0fff0`,
        hotpink: `ff69b4`,
        indianred: `cd5c5c`,
        indigo: `4b0082`,
        ivory: `fffff0`,
        khaki: `f0e68c`,
        lavender: `e6e6fa`,
        lavenderblush: `fff0f5`,
        lawngreen: `7cfc00`,
        lemonchiffon: `fffacd`,
        lightblue: `add8e6`,
        lightcoral: `f08080`,
        lightcyan: `e0ffff`,
        lightgoldenrodyellow: `fafad2`,
        lightgray: `d3d3d3`,
        lightgreen: `90ee90`,
        lightgrey: `d3d3d3`,
        lightpink: `ffb6c1`,
        lightsalmon: `ffa07a`,
        lightseagreen: `20b2aa`,
        lightskyblue: `87cefa`,
        lightslategray: `789`,
        lightslategrey: `789`,
        lightsteelblue: `b0c4de`,
        lightyellow: `ffffe0`,
        lime: `0f0`,
        limegreen: `32cd32`,
        linen: `faf0e6`,
        magenta: `f0f`,
        maroon: `800000`,
        mediumaquamarine: `66cdaa`,
        mediumblue: `0000cd`,
        mediumorchid: `ba55d3`,
        mediumpurple: `9370db`,
        mediumseagreen: `3cb371`,
        mediumslateblue: `7b68ee`,
        mediumspringgreen: `00fa9a`,
        mediumturquoise: `48d1cc`,
        mediumvioletred: `c71585`,
        midnightblue: `191970`,
        mintcream: `f5fffa`,
        mistyrose: `ffe4e1`,
        moccasin: `ffe4b5`,
        navajowhite: `ffdead`,
        navy: `000080`,
        oldlace: `fdf5e6`,
        olive: `808000`,
        olivedrab: `6b8e23`,
        orange: `ffa500`,
        orangered: `ff4500`,
        orchid: `da70d6`,
        palegoldenrod: `eee8aa`,
        palegreen: `98fb98`,
        paleturquoise: `afeeee`,
        palevioletred: `db7093`,
        papayawhip: `ffefd5`,
        peachpuff: `ffdab9`,
        peru: `cd853f`,
        pink: `ffc0cb`,
        plum: `dda0dd`,
        powderblue: `b0e0e6`,
        purple: `800080`,
        rebeccapurple: `663399`,
        red: `f00`,
        rosybrown: `bc8f8f`,
        royalblue: `4169e1`,
        saddlebrown: `8b4513`,
        salmon: `fa8072`,
        sandybrown: `f4a460`,
        seagreen: `2e8b57`,
        seashell: `fff5ee`,
        sienna: `a0522d`,
        silver: `c0c0c0`,
        skyblue: `87ceeb`,
        slateblue: `6a5acd`,
        slategray: `708090`,
        slategrey: `708090`,
        snow: `fffafa`,
        springgreen: `00ff7f`,
        steelblue: `4682b4`,
        tan: `d2b48c`,
        teal: `008080`,
        thistle: `d8bfd8`,
        tomato: `ff6347`,
        turquoise: `40e0d0`,
        violet: `ee82ee`,
        wheat: `f5deb3`,
        white: `fff`,
        whitesmoke: `f5f5f5`,
        yellow: `ff0`,
        yellowgreen: `9acd32`,
      }),
      (hy = new ((() => Xg().Hsluv)())()),
      (gy = (() => {
        let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
          t =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
          n =
            `[\\s|\\(]+(` +
            e +
            `)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
        return {
          rgb: RegExp(`rgb` + t),
          rgba: RegExp(`rgba` + n),
          hsl: RegExp(`hsl` + t),
          hsla: RegExp(`hsla` + n),
          hsv: RegExp(`hsv` + t),
          hsva: RegExp(`hsva` + n),
          hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
          hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
          hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
          hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        };
      })()),
      (_y =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (vy = (e) => {
        let { r: t, g: n, b: r, a: i } = Pi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (yy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ii({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (by = (e) => {
        let { r: t, g: n, b: r, a: i } = Pi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (xy = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        Ii({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (Sy = class e {
        constructor(e) {
          (z(this, `format`, `p3`),
            z(this, `r`),
            z(this, `g`),
            z(this, `b`),
            z(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return Li(this);
        }
        rgb() {
          return Vi(this);
        }
        hsl() {
          return bi(this.r, this.g, this.b);
        }
        toString(e = `p3`, t) {
          switch (e) {
            case `p3`: {
              let e = t?.r ?? this.r,
                n = t?.g ?? this.g,
                r = t?.b ?? this.b,
                i = t?.a ?? this.a;
              return i === 1
                ? `color(display-p3 ${e} ${n} ${r})`
                : `color(display-p3 ${e} ${n} ${r} / ${i})`;
            }
            case `srgb`: {
              let e = this.rgb(),
                n = Math.round(Math.max(0, Math.min(e.r, 1)) * 100) / 100,
                r = Math.round(Math.max(0, Math.min(e.g, 1)) * 100) / 100,
                i = Math.round(Math.max(0, Math.min(e.b, 1)) * 100) / 100,
                a = t?.r ?? n * 255,
                o = t?.g ?? r * 255,
                s = t?.b ?? i * 255,
                c = t?.a ?? e.a ?? 1;
              return c === 1 ? `rgb(${a}, ${o}, ${s})` : `rgba(${a}, ${o}, ${s}, ${c})`;
            }
          }
        }
        static isP3String(e) {
          return e.startsWith(`color(display-p3`);
        }
        static fromHSV(t, n = `p3`) {
          switch (n) {
            case `p3`:
              return new e(zi(t));
            case `srgb`:
              return new e(Bi(zi(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Bi({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = J(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = Mi(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!B(t) || !J.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (Cy = new Map()),
      (J = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = Cy.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (Cy.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = Hi(t, n, r, i);
          if (a) {
            let n = {
              r: a.r,
              g: a.g,
              b: a.b,
              a: a.a,
              h: a.h,
              s: a.s,
              l: a.l,
              initialValue: typeof t == `string` && a.format !== `hsv` ? t : void 0,
              roundA: Math.round(100 * a.a) / 100,
              format: a.format,
              mix: e.mix,
              toValue: () => e.toRgbString(n),
            };
            return n;
          } else return;
        }
        let n = {
          isRGB(e) {
            return e === `rgb` || e === `rgba`;
          },
          isHSL(e) {
            return e === `hsl` || e === `hsla`;
          },
        };
        ((e.inspect = (e, t) =>
          e.format === `hsl`
            ? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
            : e.format === `hex` || e.format === `name`
              ? `<${e.constructor.name} "${t}">`
              : `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
          (e.isColor = (t) => (typeof t == `string` ? e.isColorString(t) : e.isColorObject(t))),
          (e.isColorString = (e) => (typeof e == `string` ? ki(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            H(e) &&
            typeof e.r == `number` &&
            typeof e.g == `number` &&
            typeof e.b == `number` &&
            typeof e.h == `number` &&
            typeof e.s == `number` &&
            typeof e.l == `number` &&
            typeof e.a == `number` &&
            typeof e.roundA == `number` &&
            typeof e.format == `string`),
          (e.toString = (t) => e.toRgbString(t)),
          (e.toHex = (e, t = !1) => yi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? Sy.isP3String(e) : !1)),
          (e.toRgbString = (e) =>
            e.a === 1
              ? `rgb(` + Math.round(e.r) + `, ` + Math.round(e.g) + `, ` + Math.round(e.b) + `)`
              : `rgba(` +
                Math.round(e.r) +
                `, ` +
                Math.round(e.g) +
                `, ` +
                Math.round(e.b) +
                `, ` +
                e.roundA +
                `)`),
          (e.toHusl = (e) => ({ ...hi(e.r, e.g, e.b), a: e.roundA })),
          (e.toHslString = (t) => {
            let n = e.toHsl(t),
              r = Math.round(n.h),
              i = Math.round(n.s * 100),
              a = Math.round(n.l * 100);
            return t.a === 1
              ? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
              : `hsla(` + r + `, ` + i + `%, ` + a + `%, ` + t.roundA + `)`;
          }),
          (e.toHsv = (e) => {
            let t = Ci(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = Ci(e.r, e.g, e.b),
              n = Math.round(t.h * 360),
              r = Math.round(t.s * 100),
              i = Math.round(t.v * 100);
            return e.a === 1
              ? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
              : `hsva(` + n + `, ` + r + `%, ` + i + `%, ` + e.roundA + `)`;
          }),
          (e.toName = (e) => {
            if (e.a === 0) return `transparent`;
            if (e.a < 1) return !1;
            let t = yi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(my)) if (my[e] === t) return e;
            return !1;
          }),
          (e.toHsl = (e) => ({ h: Math.round(e.h), s: e.s, l: e.l, a: e.a })),
          (e.toRgb = (e) => ({
            r: Math.round(e.r),
            g: Math.round(e.g),
            b: Math.round(e.b),
            a: e.a,
          })),
          (e.brighten = (t, n = 10) => {
            let r = e.toRgb(t);
            return (
              (r.r = Math.max(0, Math.min(255, r.r - Math.round(255 * -(n / 100))))),
              (r.g = Math.max(0, Math.min(255, r.g - Math.round(255 * -(n / 100))))),
              (r.b = Math.max(0, Math.min(255, r.b - Math.round(255 * -(n / 100))))),
              e(r)
            );
          }),
          (e.lighten = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l += n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.darken = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.l -= n / 100), (r.l = Math.min(1, Math.max(0, r.l))), e(r));
          }),
          (e.saturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s += n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.desaturate = (t, n = 10) => {
            let r = e.toHsl(t);
            return ((r.s -= n / 100), (r.s = Math.min(1, Math.max(0, r.s))), e(r));
          }),
          (e.grayscale = (t) => e.desaturate(t, 100)),
          (e.hueRotate = (t, n) => {
            let r = e.toHsl(t);
            return ((r.h += n), (r.h = r.h > 360 ? r.h - 360 : r.h), e(r));
          }),
          (e.alpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: n })),
          (e.transparent = (t) => e.alpha(t, 0)),
          (e.multiplyAlpha = (t, n = 1) => e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
          (e.alphaComposite = (t, n) => {
            if (t.a === 1) return t;
            if (n.a < 1)
              throw Error(
                "Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`"
              );
            return t.a === 0
              ? n
              : e({
                  r: Math.round(t.r * t.a + n.r * (1 - t.a)),
                  g: Math.round(t.g * t.a + n.g * (1 - t.a)),
                  b: Math.round(t.b * t.a + n.b * (1 - t.a)),
                  a: 1,
                });
          }),
          (e.interpolate = (t, n, r = `rgb`) => {
            if (!e.isColorObject(t) || !e.isColorObject(n))
              throw TypeError(`Both arguments for Color.interpolate must be Color objects`);
            return (i) => e.mixAsColor(t, n, i, !1, r);
          }),
          (e.mix = (t, n, { model: r = `rgb` } = {}) => {
            let i = typeof t == `string` ? e(t) : t,
              a = e.interpolate(i, n, r);
            return (t) => e.toRgbString(a(t));
          }),
          (e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
            let s = null;
            if (n.isRGB(o))
              s = e({
                r: di(i, [0, 1], [t.r, r.r], a),
                g: di(i, [0, 1], [t.g, r.g], a),
                b: di(i, [0, 1], [t.b, r.b], a),
                a: di(i, [0, 1], [t.a, r.a], a),
              });
            else {
              let c, l;
              (n.isHSL(o)
                ? ((c = e.toHsl(t)), (l = e.toHsl(r)))
                : ((c = e.toHusl(t)), (l = e.toHusl(r))),
                c.s === 0 ? (c.h = l.h) : l.s === 0 && (l.h = c.h));
              let u = c.h,
                d = l.h,
                f = d - u;
              f > 180 ? (f = d - 360 - u) : f < -180 && (f = d + 360 - u);
              let p = {
                h: di(i, [0, 1], [u, u + f], a),
                s: di(i, [0, 1], [c.s, l.s], a),
                l: di(i, [0, 1], [c.l, l.l], a),
                a: di(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(gi(p.h, p.s, p.l, p.a));
            }
            return s;
          }),
          (e.random = (t = 1) => {
            function n() {
              return Math.floor(Math.random() * 255);
            }
            return e(`rgba(` + n() + `, ` + n() + `, ` + n() + `, ` + t + `)`);
          }),
          (e.grey = (t = 0.5, n = 1) => (
            (t = Math.floor(t * 255)),
            e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
          )),
          (e.gray = e.grey),
          (e.rgbToHsl = (e, t, n) => bi(e, t, n)),
          (e.isValidColorProperty = (t, n) =>
            !!(
              (t.toLowerCase().slice(-5) === `color` || t === `fill` || t === `stroke`) &&
              typeof n == `string` &&
              e.isColorString(n)
            )),
          (e.difference = (e, t) => {
            let n = (e.r + t.r) / 2,
              r = e.r - t.r,
              i = e.g - t.g,
              a = e.b - t.b,
              o = r ** 2,
              s = i ** 2,
              c = a ** 2;
            return Math.sqrt(2 * o + 4 * s + 3 * c + (n * (o - c)) / 256);
          }),
          (e.equal = (e, t, n = 0.1) =>
            !(
              Math.abs(e.r - t.r) >= n ||
              Math.abs(e.g - t.g) >= n ||
              Math.abs(e.b - t.b) >= n ||
              Math.abs(e.a - t.a) * 256 >= n
            )));
        let r = Xe([0, 255], [0, 1]);
        function i(e) {
          e = r(e);
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: r, b: a } = e.toRgb(t);
            return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (wy = (e) => e instanceof We),
      (Ty = (() => Zg().EventEmitter)()),
      (Ey = class {
        constructor() {
          z(this, `_emitter`, new Ty());
        }
        eventNames() {
          return this._emitter.eventNames();
        }
        eventListeners() {
          let e = {};
          for (let t of this._emitter.eventNames()) e[t] = this._emitter.listeners(t);
          return e;
        }
        on(e, t) {
          this.addEventListener(e, t, !1, !1, this);
        }
        off(e, t) {
          this.removeEventListeners(e, t);
        }
        once(e, t) {
          this.addEventListener(e, t, !0, !1, this);
        }
        unique(e, t) {
          this.addEventListener(e, t, !1, !0, this);
        }
        addEventListener(e, t, n, r, i) {
          if (r) {
            for (let e of this._emitter.eventNames()) if (t === this._emitter.listeners(e)) return;
          }
          n === !0 ? this._emitter.once(e, t, i) : this._emitter.addListener(e, t, i);
        }
        removeEventListeners(e, t) {
          e ? this._emitter.removeListener(e, t) : this.removeAllEventListeners();
        }
        removeAllEventListeners() {
          this._emitter.removeAllListeners();
        }
        countEventListeners(e) {
          if (e) return this._emitter.listeners(e).length;
          {
            let e = 0;
            for (let t of this._emitter.eventNames()) e += this._emitter.listeners(t).length;
            return e;
          }
        }
        emit(e, ...t) {
          this._emitter.emit(e, ...t);
        }
      }),
      (Dy = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Oy = (() => F_.requestAnimationFrame || Dy)()),
      (ky = (e) => Oy(e)),
      (Ay = (() => 1 / 60)()),
      (jy = class extends Ey {
        constructor(e = !1) {
          (super(),
            z(this, `_started`, !1),
            z(this, `_frame`, 0),
            z(this, `_frameTasks`, []),
            z(this, `tick`, () => {
              this._started &&
                (ky(this.tick),
                this.emit(`update`, this._frame, Ay),
                this.emit(`render`, this._frame, Ay),
                this._processFrameTasks(),
                this._frame++);
            }),
            e && this.start());
        }
        addFrameTask(e) {
          this._frameTasks.push(e);
        }
        _processFrameTasks() {
          let e = this._frameTasks,
            t = e.length;
          if (t !== 0) {
            for (let n = 0; n < t; n++) e[n]?.();
            e.length = 0;
          }
        }
        static set TimeStep(e) {
          Ay = e;
        }
        static get TimeStep() {
          return Ay;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), ky(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Ay;
        }
      }),
      (My = new jy()),
      (Ny = { target: Ji() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (Y = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ny.target,
        hasRestrictions: () => {
          let e = Ny.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Py = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      De({
        borderTopWidth: Py(`y`),
        borderLeftWidth: Py(`x`),
        borderRightWidth: Py(`x`),
        borderBottomWidth: Py(`y`),
      }),
      (Fy = !1),
      (Iy = `calc(`),
      (Ly = `*`),
      (Ry = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (e.startsWith(Iy)) {
              let [n, ...r] = e.slice(Iy.length).split(Ly);
              if (nt(n) || !te.test(n.trim())) return e;
              let i = parseFloat(n),
                a = Xi(i, t.target.x),
                o = Xi(i, t.target.y);
              return `${Zi(a, r)} ${Zi(o, r)}`;
            }
            if (te.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${Xi(e, t.target.x)}% ${Xi(e, t.target.y)}%`;
        },
      }),
      (zy = (() => ({
        borderRadius: {
          ...Ry,
          applyTo: [
            `borderTopLeftRadius`,
            `borderTopRightRadius`,
            `borderBottomLeftRadius`,
            `borderBottomRightRadius`,
          ],
        },
        borderTopLeftRadius: Ry,
        borderTopRightRadius: Ry,
        borderBottomLeftRadius: Ry,
        borderBottomRightRadius: Ry,
      }))()),
      (By = h.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Vy = {
        background: void 0,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`,
        alignItems: `center`,
        lineHeight: `1.4em`,
        textOverflow: `ellipsis`,
        overflow: `hidden`,
        minHeight: 0,
        width: `100%`,
        height: `100%`,
      }),
      (Hy = (() => ({
        ...Vy,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (Uy = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Wy = (() => ({ ...Uy, fontWeight: 500 }))()),
      (Gy = (() => ({
        ...Uy,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (Ky = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = sa(ui.angleFromX(t.a, t.b)),
              i = n * Math.sin(r),
              a = n * Math.cos(r);
            return e({ x: t.a.x + i, y: t.a.y - a }, { x: t.b.x + i, y: t.b.y - a });
          }),
          (e.intersection = (e, t, n) => {
            let r = e.a.x,
              i = e.a.y,
              a = e.b.x,
              o = e.b.y,
              s = t.a.x,
              c = t.a.y,
              l = t.b.x,
              u = t.b.y,
              d = (l - s) * (c - i) - (u - c) * (s - r),
              f = (l - s) * (o - i) - (u - c) * (a - r),
              p = (a - r) * (c - i) - (o - i) * (s - r);
            if ((d === 0 && f === 0) || f === 0) return null;
            let m = d / f,
              h = p / f;
            return n && (m < 0 || m > 1 || h < 0 || h > 1)
              ? null
              : { x: r + m * (a - r), y: i + m * (o - i) };
          }),
          (e.intersectionAngle = (e, t) => {
            let n = e.b.x - e.a.x,
              r = e.b.y - e.a.y,
              i = t.b.x - t.a.x,
              a = t.b.y - t.a.y;
            return Math.atan2(n * a - r * i, n * i + r * a) * (180 / Math.PI);
          }),
          (e.isOrthogonal = (e) => e.a.x === e.b.x || e.a.y === e.b.y),
          (e.perpendicular = (t, n) => {
            let r = t.a.x - t.b.x,
              i = t.a.y - t.b.y;
            return e(ui(n.x - i, n.y + r), n);
          }),
          (e.projectPoint = (t, n) => {
            let r = e.perpendicular(t, n);
            return e.intersection(t, r);
          }),
          (e.pointAtPercentDistance = (t, n) => {
            let r = e.distance(t),
              i = (n * r) / r;
            return { x: i * t.b.x + (1 - i) * t.a.x, y: i * t.b.y + (1 - i) * t.a.y };
          }),
          (e.distance = (e) => ui.distance(e.a, e.b)),
          e
        );
      })()),
      (X = {
        equals: function (e, t) {
          return e === t
            ? !0
            : !e || !t
              ? !1
              : e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
        },
        from: (e) => ({ x: e.x, y: e.y, width: e.width, height: e.height }),
        atOrigin: (e) => ({ x: 0, y: 0, width: e.width, height: e.height }),
        fromTwoPoints: (e, t) => ({
          x: Math.min(e.x, t.x),
          y: Math.min(e.y, t.y),
          width: Math.abs(e.x - t.x),
          height: Math.abs(e.y - t.y),
        }),
        fromRect: (e) => ({
          x: e.left,
          y: e.top,
          width: e.right - e.left,
          height: e.bottom - e.top,
        }),
        multiply: (e, t) => ({ x: e.x * t, y: e.y * t, width: e.width * t, height: e.height * t }),
        divide: (e, t) => X.multiply(e, 1 / t),
        offset: (e, t) => {
          let n = typeof t.x == `number` ? t.x : 0,
            r = typeof t.y == `number` ? t.y : 0;
          return { ...e, x: e.x + n, y: e.y + r };
        },
        inflate: (e, t) => {
          if (t === 0) return e;
          let n = 2 * t;
          return { x: e.x - t, y: e.y - t, width: e.width + n, height: e.height + n };
        },
        pixelAligned: (e) => {
          let t = Math.round(e.x),
            n = Math.round(e.y),
            r = Math.round(e.x + e.width),
            i = Math.round(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        halfPixelAligned: (e) => {
          let t = Math.round(e.x * 2) / 2,
            n = Math.round(e.y * 2) / 2,
            r = Math.round((e.x + e.width) * 2) / 2,
            i = Math.round((e.y + e.height) * 2) / 2;
          return { x: t, y: n, width: Math.max(r - t, 1), height: Math.max(i - n, 1) };
        },
        round: (e, t = 0) => ({
          x: si(e.x, t),
          y: si(e.y, t),
          width: si(e.width, t),
          height: si(e.height, t),
        }),
        roundToOutside: (e) => {
          let t = Math.floor(e.x),
            n = Math.floor(e.y),
            r = Math.ceil(e.x + e.width),
            i = Math.ceil(e.y + e.height);
          return { x: t, y: n, width: Math.max(r - t, 0), height: Math.max(i - n, 0) };
        },
        minX: (e) => e.x,
        maxX: (e) => e.x + e.width,
        minY: (e) => e.y,
        maxY: (e) => e.y + e.height,
        positions: (e) => ({
          minX: e.x,
          midX: e.x + e.width / 2,
          maxX: X.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: X.maxY(e),
        }),
        center: (e) => ({ x: e.x + e.width / 2, y: e.y + e.height / 2 }),
        boundingRectFromPoints: (e) => {
          let t = 1 / 0,
            n = -1 / 0,
            r = 1 / 0,
            i = -1 / 0;
          for (let a = 0; a < e.length; a++) {
            let o = e[a];
            ((t = Math.min(t, o.x)),
              (n = Math.max(n, o.x)),
              (r = Math.min(r, o.y)),
              (i = Math.max(i, o.y)));
          }
          return { x: t, y: r, width: n - t, height: i - r };
        },
        fromPoints: (e) => {
          let [t, n, r, i] = e,
            { x: a, y: o } = t;
          return { x: a, y: o, width: ui.distance(t, n), height: ui.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(X.minX)), y: Math.min(...e.map(X.minY)) },
            n = { x: Math.max(...e.map(X.maxX)), y: Math.max(...e.map(X.maxY)) };
          return X.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: X.minX(e), y: X.minY(e) },
          { x: X.minX(e), y: X.maxY(e) },
          { x: X.maxX(e), y: X.minY(e) },
          { x: X.maxX(e), y: X.maxY(e) },
        ],
        pointsAtOrigin: (e) => [
          { x: 0, y: 0 },
          { x: e.width, y: 0 },
          { x: e.width, y: e.height },
          { x: 0, y: e.height },
        ],
        transform: (e, t) => {
          let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
            { x: i, y: a } = t.transformPoint({ x: e.x + e.width, y: e.y }),
            { x: o, y: s } = t.transformPoint({ x: e.x + e.width, y: e.y + e.height }),
            { x: c, y: l } = t.transformPoint({ x: e.x, y: e.y + e.height }),
            u = Math.min(n, i, o, c),
            d = Math.max(n, i, o, c) - u,
            f = Math.min(r, a, s, l);
          return { x: u, y: f, width: d, height: Math.max(r, a, s, l) - f };
        },
        containsPoint: (e, t) =>
          !(
            t.x < X.minX(e) ||
            t.x > X.maxX(e) ||
            t.y < X.minY(e) ||
            t.y > X.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of X.points(t)) if (!X.containsPoint(e, n)) return !1;
          return !0;
        },
        toCSS: (e) => ({
          display: `block`,
          transform: `translate(${e.x}px, ${e.y}px)`,
          width: `${e.width}px`,
          height: `${e.height}px`,
        }),
        inset: (e, t) => ({
          x: e.x + t,
          y: e.y + t,
          width: Math.max(0, e.width - 2 * t),
          height: Math.max(0, e.height - 2 * t),
        }),
        intersects: (e, t) =>
          !(t.x >= X.maxX(e) || X.maxX(t) <= e.x || t.y >= X.maxY(e) || X.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = X.maxX(e),
            r = X.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = X.maxY(e),
            r = X.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => X.intersects(t, e)) === void 0,
        isEqual: (e, t) => X.equals(e, t),
        cornerPoints: (e) => {
          let t = e.x,
            n = e.x + e.width,
            r = e.y,
            i = e.y + e.height;
          return [
            { x: t, y: r },
            { x: n, y: r },
            { x: n, y: i },
            { x: t, y: i },
          ];
        },
        midPoints: (e) => {
          let t = e.x,
            n = e.x + e.width / 2,
            r = e.x + e.width,
            i = e.y,
            a = e.y + e.height / 2,
            o = e.y + e.height;
          return [
            { x: n, y: i },
            { x: r, y: a },
            { x: n, y: o },
            { x: t, y: a },
          ];
        },
        pointDistance: (e, t) => {
          let n = 0,
            r = 0;
          return (
            t.x < e.x ? (n = e.x - t.x) : t.x > X.maxX(e) && (n = t.x - X.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > X.maxY(e) && (r = t.y - X.maxY(e)),
            ui.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: X.minX(e), y: X.minY(e) },
            r = { x: X.minX(t), y: X.minY(t) };
          return { x: n.x - r.x, y: n.y - r.y };
        },
        withMinSize: (e, t) => {
          let { width: n, height: r } = t,
            i = e.width - n,
            a = e.height - r;
          return {
            width: Math.max(e.width, n),
            height: Math.max(e.height, r),
            x: e.width < n ? e.x + i / 2 : e.x,
            y: e.height < r ? e.y + a / 2 : e.y,
          };
        },
        anyPointsOutsideRect: (e, t) => {
          let n = X.minX(e),
            r = X.minY(e),
            i = X.maxX(e),
            a = X.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = X.cornerPoints(e);
          return [Ky(t, n), Ky(n, r), Ky(r, i), Ky(i, t)];
        },
        rebaseRectOnto: (e, t, n, r) => {
          let i = { ...e };
          switch (n) {
            case `bottom`:
            case `top`:
              switch (r) {
                case `start`:
                  i.x = t.x;
                  break;
                case `center`:
                  i.x = t.x + t.width / 2 - e.width / 2;
                  break;
                case `end`:
                  i.x = t.x + t.width - e.width;
                  break;
                default:
                  W(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              W(n);
          }
          switch (n) {
            case `left`:
            case `right`:
              switch (r) {
                case `start`:
                  i.y = t.y;
                  break;
                case `center`:
                  i.y = t.y + t.height / 2 - e.height / 2;
                  break;
                case `end`:
                  i.y = t.y + t.height - e.height;
                  break;
                default:
                  W(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              W(n);
          }
          return i;
        },
        constrain: (e, t) => {
          if (!t) return e;
          let n = Math.max(e.y, t.y);
          n = Math.min(n, t.y + t.height - e.height);
          let r = Math.max(e.x, t.x);
          return (
            (r = Math.min(r, t.x + t.width - e.width)),
            { x: r, y: n, width: e.width, height: e.height }
          );
        },
        closestEdge: (e, t) => {
          let n = Ky(t, X.center(e)),
            r = X.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Ky.intersection(n, t, !0)) {
              let n = qy[e];
              return (U(n, `Invalid edge name`, qy), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          U(r, `Rect array is empty`);
          let i = X.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            U(o);
            let s = X.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (qy = [`top`, `right`, `bottom`, `left`]),
      (Jy = {
        quickfix: (e) => (
          (ca(e.widthType) || ca(e.heightType)) && (e.aspectRatio = null),
          G(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || ca(e.widthType) || G(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || ca(e.heightType) || G(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Yy = {
        fromProperties: (e) => {
          let {
              left: t,
              right: n,
              top: r,
              bottom: i,
              width: a,
              height: o,
              centerX: s,
              centerY: c,
              aspectRatio: l,
              autoSize: u,
            } = e,
            d = Jy.quickfix({
              left: G(t) || ai(t),
              right: G(n) || ai(n),
              top: G(r) || ai(r),
              bottom: G(i) || ai(i),
              widthType: la(a),
              heightType: la(o),
              aspectRatio: l || null,
              fixedSize: u === !0,
            }),
            f = null,
            p = null,
            m = 0,
            h = 0;
          if (d.widthType !== 0 && typeof a == `string`) {
            let e = parseFloat(a);
            a.endsWith(`fr`)
              ? ((m = 3), (f = e))
              : a === `auto`
                ? (m = 2)
                : ((m = 1), (f = e / 100));
          } else a !== void 0 && typeof a != `string` && (f = uy.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = uy.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? uy.getNumber(t) : null,
              right: d.right ? uy.getNumber(n) : null,
              top: d.top ? uy.getNumber(r) : null,
              bottom: d.bottom ? uy.getNumber(i) : null,
              widthType: m,
              heightType: h,
              width: f,
              height: p,
              aspectRatio: d.aspectRatio || null,
              centerAnchorX: g,
              centerAnchorY: _,
            }
          );
        },
        toSize: (e, t, n, r) => {
          let i = null,
            a = null,
            o = t?.sizing ? uy.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? uy.getNumber(t?.sizing.height) : null,
            c = ha(e.left, e.right);
          if (o && G(c)) i = o - c;
          else if (n && ca(e.widthType)) i = n.width;
          else if (G(e.width))
            switch (e.widthType) {
              case 0:
                i = e.width;
                break;
              case 3:
                i = r ? (r.freeSpaceInParent.width / r.freeSpaceUnitDivisor.width) * e.width : null;
                break;
              case 1:
              case 4:
                o && (i = o * e.width);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.widthType);
            }
          let l = ha(e.top, e.bottom);
          if (s && G(l)) a = s - l;
          else if (n && ca(e.heightType)) a = n.height;
          else if (G(e.height))
            switch (e.heightType) {
              case 0:
                a = e.height;
                break;
              case 3:
                a = r
                  ? (r.freeSpaceInParent.height / r.freeSpaceUnitDivisor.height) * e.height
                  : null;
                break;
              case 1:
              case 4:
                s && (a = s * e.height);
                break;
              case 2:
              case 5:
                break;
              default:
                W(e.heightType);
            }
          return ma(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Yy.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? uy.getNumber(l.width) : null,
            d = l ? uy.getNumber(l.height) : null;
          (e.left === null
            ? u && e.right !== null
              ? (a = u - e.right - s)
              : u && (a = e.centerAnchorX * u - s / 2)
            : (a = e.left),
            e.top === null
              ? d && e.bottom !== null
                ? (o = d - e.bottom - c)
                : d && (o = e.centerAnchorY * d - c / 2)
              : (o = e.top));
          let f = { x: a, y: o, width: s, height: c };
          return r ? X.pixelAligned(f) : f;
        },
      }),
      (Xy = 200),
      (Zy = 200),
      (Qy = h.createContext({ parentSize: 0 })),
      ($y = (e) => {
        let t = Ca(),
          { parentSize: n, children: r } = e,
          i = h.useMemo(() => ({ parentSize: n }), [Ta(n), Ea(n)]);
        return t === 1
          ? r
            ? g(D, { children: r })
            : null
          : g(Qy.Provider, { value: i, children: r });
      }),
      (eb = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.String = `string`),
        (e.RichText = `richtext`),
        (e.FusedNumber = `fusednumber`),
        (e.Enum = `enum`),
        (e.SegmentedEnum = `segmentedenum`),
        (e.Color = `color`),
        (e.Image = `image`),
        (e.ResponsiveImage = `responsiveimage`),
        (e.File = `file`),
        (e.ComponentInstance = `componentinstance`),
        (e.Slot = `slot`),
        (e.Array = `array`),
        (e.EventHandler = `eventhandler`),
        (e.ChangeHandler = `changehandler`),
        (e.Transition = `transition`),
        (e.BoxShadow = `boxshadow`),
        (e.Link = `link`),
        (e.Date = `date`),
        (e.Object = `object`),
        (e.Font = `font`),
        (e.PageScope = `pagescope`),
        (e.ScrollSectionRef = `scrollsectionref`),
        (e.CustomCursor = `customcursor`),
        (e.Border = `border`),
        (e.Cursor = `cursor`),
        (e.Padding = `padding`),
        (e.BorderRadius = `borderradius`),
        (e.Gap = `gap`),
        (e.CollectionReference = `collectionreference`),
        (e.MultiCollectionReference = `multicollectionreference`),
        (e.TrackingId = `trackingid`),
        (e.VectorSetItem = `vectorsetitem`),
        (e.LinkRelValues = `linkrelvalues`),
        (e.Location = `location`),
        e
      ))(eb || {})),
      (tb = /Mac/u),
      (nb = /iPhone|iPod|iPad/iu),
      (rb = /MacIntel/iu),
      (ib = /Edg\//u),
      (ab = /Chrome/u),
      (ob = /Google Inc/u),
      (sb = /Safari/u),
      (cb = /Apple Computer/u),
      (lb = /Firefox\/\d+\.\d+$/u),
      (ub = /FramerX/u),
      (db = /tablet|iPad|Nexus 9/iu),
      (fb = /mobi/iu),
      (pb = h.createContext(void 0)),
      (mb = new Set()),
      (gb = `style[data-framer-css-ssr-minified]`),
      (_b = (() => {
        if (!Ra()) return new Set();
        let e = document.querySelector(gb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (vb = `data-framer-css-ssr`),
      (yb = (e, t, n) =>
        h.forwardRef((r, i) => {
          let { sheet: a, cache: o } = h.useContext(pb) ?? {},
            s = n;
          if (!Ra()) {
            Qe(t) && (t = t(Y.current(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            xb.add(e, s);
          }
          return (
            f(() => {
              (s && _b.has(s)) ||
                (Qe(t)
                  ? t(Y.current(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Wa(e, a, o));
            }, []),
            g(e, { ...r, ref: i })
          );
        })),
      (bb = class {
        constructor() {
          (z(this, `styles`, new Set()), z(this, `componentIds`, new Set()));
        }
        add(e, t) {
          (this.styles.add(e), t && this.componentIds.add(t));
        }
        getStyles() {
          return this.styles;
        }
        getComponentIds() {
          return this.componentIds;
        }
        clear() {
          (this.styles.clear(), this.componentIds.clear());
        }
      }),
      (xb = new bb()),
      (Cb = `flexbox-gap-not-supported`),
      (wb = !1),
      (Tb = [
        `[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
        `
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
        `
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
      ]),
      (Eb = ((e) => (
        (e.Padding = `--framer-input-padding`),
        (e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
        (e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
        (e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
        (e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
        (e.CornerShape = `--framer-input-corner-shape`),
        (e.BorderColor = `--framer-input-border-color`),
        (e.BorderTopWidth = `--framer-input-border-top-width`),
        (e.BorderRightWidth = `--framer-input-border-right-width`),
        (e.BorderBottomWidth = `--framer-input-border-bottom-width`),
        (e.BorderLeftWidth = `--framer-input-border-left-width`),
        (e.BorderStyle = `--framer-input-border-style`),
        (e.Background = `--framer-input-background`),
        (e.FontFamily = `--framer-input-font-family`),
        (e.FontWeight = `--framer-input-font-weight`),
        (e.FontSize = `--framer-input-font-size`),
        (e.FontColor = `--framer-input-font-color`),
        (e.FontStyle = `--framer-input-font-style`),
        (e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
        (e.FontTextAlignment = `--framer-input-font-text-alignment`),
        (e.FontLineHeight = `--framer-input-font-line-height`),
        (e.FontOpenType = `--framer-input-font-open-type-features`),
        (e.FontVariationAxes = `--framer-input-font-variation-axes`),
        (e.PlaceholderColor = `--framer-input-placeholder-color`),
        (e.BoxShadow = `--framer-input-box-shadow`),
        (e.FocusedBorderColor = `--framer-input-focused-border-color`),
        (e.FocusedBorderWidth = `--framer-input-focused-border-width`),
        (e.FocusedBorderStyle = `--framer-input-focused-border-style`),
        (e.FocusedBackground = `--framer-input-focused-background`),
        (e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
        (e.FocusedTransition = `--framer-input-focused-transition`),
        (e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
        (e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
        (e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
        (e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
        (e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
        (e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
        (e.InvalidTextColor = `--framer-input-invalid-text-color`),
        (e.IconBackgroundImage = `--framer-input-icon-image`),
        (e.IconMaskImage = `--framer-input-icon-mask-image`),
        (e.IconColor = `--framer-input-icon-color`),
        (e.IconContent = `--framer-input-icon-content`),
        (e.WrapperHeight = `--framer-input-wrapper-height`),
        e
      ))(Eb || {})),
      (Db = Eb),
      (Ob = `framer-form-input`),
      (kb = `framer-form-input-wrapper`),
      (Ab = `framer-form-input-empty`),
      (jb = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (U(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${qa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            U(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (Mb = (() => [
        Z(`.${Ob}`, {
          padding: Z.variable(Db.Padding),
          background: `transparent`,
          fontFamily: Z.variable(Db.FontFamily),
          fontWeight: Z.variable(Db.FontWeight),
          fontSize: Z.variable(Db.FontSize),
          fontStyle: Z.variable(Db.FontStyle),
          color: Z.variable(Db.FontColor),
          fontFeatureSettings: Z.variable(Db.FontOpenType),
          fontVariationSettings: Z.variable(Db.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(Db.WrapperHeight, `100%`),
          letterSpacing: Z.variable(Db.FontLetterSpacing),
          textAlign: Z.variable(Db.FontTextAlignment),
          lineHeight: Z.variable(Db.FontLineHeight),
        }),
        Z(`.${Ob}:focus-visible`, { outline: `none` }),
      ])()),
      (Nb = (() => [Z(`.${kb}`, { overflow: `hidden` })])()),
      (Pb = `var(${Db.BorderTopWidth}) var(${Db.BorderRightWidth}) var(${Db.BorderBottomWidth}) var(${Db.BorderLeftWidth})`),
      (Fb = (() => [
        `.${kb}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${Db.BorderRadiusTopLeft});
        border-top-right-radius: var(${Db.BorderRadiusTopRight});
        border-bottom-right-radius: var(${Db.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${Db.BorderRadiusBottomLeft});
        corner-shape: var(${Db.CornerShape});
        border-color: var(${Db.BorderColor});
        border-top-width: var(${Db.BorderTopWidth});
        border-right-width: var(${Db.BorderRightWidth});
        border-bottom-width: var(${Db.BorderBottomWidth});
        border-left-width: var(${Db.BorderLeftWidth});
        border-style: var(${Db.BorderStyle});
        transition: var(${Db.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ])()),
      (Ib = `customError`),
      (Lb = `valid`),
      (Rb = 10),
      (zb = 8),
      (Bb = 16),
      (Vb = (() => ({
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${Bb}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${Bb}px`,
        backgroundColor: Z.variable(Db.IconColor),
      }))()),
      (Hb = (() => ({
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${Bb}px`,
        boxSizing: `content-box`,
        padding: Z.variable(Db.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...Vb,
      }))()),
      (Ub = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Wb = { display: `inline-block` }),
      (Gb = { display: `block` }),
      (Kb = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Ub.display};
            flex-direction: ${Ub.flexDirection};
            justify-content: ${Ub.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
        `
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
        `
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Za([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Za([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
        `
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
        `
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
        `
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
        `
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
        `
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
        `
        .framer-text[data-text-fill] {
            display: ${Wb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
        `
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
        `
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
        `
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
        `
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
        `
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Za([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Za([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Za([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Za([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
        `
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Za([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Za([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
        `
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Gb.display};
            max-width: 100%;
            height: auto;
        }
    `,
        `
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
        `
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
        `
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
        `
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `,
        `
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `,
        `
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
        `
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
        `
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
        `
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
        `
        ${Qa(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ])()),
      (qb = `--text-truncation-display-inline-for-safari-16`),
      (Jb = `--text-truncation-display-none-for-safari-16`),
      (Yb = `--text-truncation-line-break-for-safari-16`),
      (Xb = [
        `div.framer-text`,
        `p.framer-text`,
        `h1.framer-text`,
        `h2.framer-text`,
        `h3.framer-text`,
        `h4.framer-text`,
        `h5.framer-text`,
        `h6.framer-text`,
        `ol.framer-text`,
        `ul.framer-text`,
        `li.framer-text`,
        `blockquote.framer-text`,
        `.framer-text.framer-image`,
      ]),
      (Zb = `(background: -webkit-named-image(i))`),
      (Qb = `(contain-intrinsic-size: inherit)`),
      ($b = (() => [
        `@supports ${Zb} and (not ${Qb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Xb.join(`, `)} { display: var(${qb}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Xb.map((e) => `${e}::after`).join(`, `)} { content: var(${Yb}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Jb}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${qb}, ${Wb.display}) }
    }`,
      ])()),
      (ex = [`[data-framer-component-type] { position: absolute; }`]),
      (tx = [
        `[data-framer-component-type="Text"] { cursor: inherit; }`,
        `[data-framer-component-text-autosized] * { white-space: pre; }`,
        `
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
        `
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
        `
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
        `
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
        `
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
        `
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
        `
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
      ]),
      (nx = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (rx = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${Cb} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (ix = (() => `
.${Cb} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (ax = (() => `
.${Cb}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Cb}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (ox = (() => `
.${Cb}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Cb}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (sx = (() => [nx, ix, ...rx, ax, ox])()),
      (cx = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (lx = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (ux = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (dx = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (fx = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (px = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (mx = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (hx = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (gx = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (_x = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (vx = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (yx = `--framer-will-change-override`),
      (bx = `--framer-will-change-effect-override`),
      (xx = `--framer-will-change-filter-override`),
      (Sx = `(background: -webkit-named-image(i))`),
      (Cx = `(grid-template-rows: subgrid)`),
      (wx = `(position-area: top right)`),
      (Tx = (e) =>
        e
          ? [
              `body { ${yx}: none; }`,
              `@supports ${Sx} and (not ${Cx}) { body { ${yx}: transform; } }`,
            ]
          : [`body { ${yx}: none; ${bx}: none; }`]),
      (Ex = (e) =>
        e
          ? [`body { ${xx}: none; }`, `@supports ${Sx} and (not ${wx}) { body { ${xx}: filter; } }`]
          : [`body { ${xx}: none; }`]),
      (Dx = (e) => (e ? gx : [])),
      (Ox = [`.svgContainer svg { display: block; }`]),
      (kx = `--overflow-clip-fallback`),
      (Ax = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${kx}: hidden; }
    }`,
      ])()),
      (jx = `--one-if-corner-shape-supported`),
      (Mx = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${jx}: 1 } }`])()),
      (Nx = (e) => [
        ...Tx(e),
        ...Ex(e),
        ...ex,
        ...tx,
        ...Kb,
        ...Tb,
        ...sx,
        ...cx,
        ...lx,
        ...ux,
        ...fx,
        ...dx,
        ...px,
        ...hx,
        ...Dx(e),
        ...Ox,
        ..._x,
        ...vx,
        ...Ax,
        ...mx,
        ...$b,
        ...Mx,
      ]),
      (Px = Nx(!1)),
      (Fx = Nx(!0)),
      (Ix = `optional`),
      (Lx = (e) => e),
      (Rx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (zx = fo(
        (e) =>
          Rx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Bx = (e) => () => {
        ri(e);
      }),
      (Vx = () => () => {}),
      (Hx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, n, r) {
          let i = Wx.useImageSource(e, n, r);
          return t(() => {
            let t = new Image();
            return ((t.src = i), e.srcSet && (t.srcset = e.srcSet), t);
          }, [i, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (Ux = !1),
      (Wx = new Proxy(Hx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Vx()
              : Bx(
                  Ux
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Gx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Kx = [1, 2, 2.2]),
      (qx = [512, 1024, 2048, 4096]),
      (Jx = 512),
      (Yx = (() => ({ position: `absolute`, ...Gx, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (Xx = `src`),
      (Zx = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Xx in e;
        },
      }),
      (Qx = Fa()),
      ($x = typeof document < `u` ? j : s),
      (eS = h.createContext(!1)),
      (tS = class {
        constructor() {
          (z(this, `sharedResizeObserver`),
            z(this, `callbacks`, new WeakMap()),
            (this.sharedResizeObserver = new ResizeObserver(
              this.updateResizedElements.bind(this)
            )));
        }
        updateResizedElements(e) {
          for (let t of e) {
            let e = this.callbacks.get(t.target);
            e && e(t.contentRect);
          }
        }
        observeElementWithCallback(e, t) {
          (this.sharedResizeObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          (this.sharedResizeObserver.unobserve(e), this.callbacks.delete(e));
        }
      }),
      (nS = (() => (Ra() ? new tS() : void 0))()),
      (rS = `data-framer-size-compatibility-wrapper`),
      (iS = `0.000001px`),
      (aS = (() => ` translateZ(${iS})`)()),
      (oS = (() => za() || Ia() || Ba())()),
      (sS = (() => {
        class e extends _ {
          constructor() {
            (super(...arguments),
              z(this, `layerElement`, null),
              z(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? Ko(t) : qo(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Dt(this.props, e);
          }
          componentDidUpdate(e) {
            Lx(this.props).clip &&
              Lx(this.props).radius === 0 &&
              Lx(e).radius !== 0 &&
              Yo(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (z(e, `defaultProps`, {}), e);
      })()),
      (cS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (lS = {
        hueRotate: (e, t) => J.toHslString(J.hueRotate(J(e), t)),
        setAlpha: (e, t) => J.toRgbString(J.alpha(J(e), t)),
        getAlpha: (e) => {
          let t = ki(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => J.toRgbString(J.multiplyAlpha(J(e), t)),
        toHexValue: (e) => J.toHex(J(e)).toUpperCase(),
        toHex: (e) => J.toHexString(J(e)).toUpperCase(),
        toRgb: (e) => J.toRgb(J(e)),
        toRgbString: (e) => J.toRgbString(J(e)),
        toHSV: (e) => J.toHsv(J(e)),
        toHSL: (e) => J.toHsl(J(e)),
        toHslString: (e) => J.toHslString(J(e)),
        toHsvString: (e) => J.toHsvString(J(e)),
        hsvToHSLString: (e) => J.toHslString(J(_i(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => J.toHex(J(_i(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => J.toHexString(J(_i(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => J.toRgbString(J(_i(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => _i(e.h, e.s, e.v),
        rgbaToString: (e) => J.toRgbString(J(e)),
        rgbToHexValue: (e) => J.toHex(J(e)),
        rgbToHexString: (e) => J.toHexString(J(e)),
        hslToString: (e) => J.toHslString(J(e)),
        hslToRgbString: (e) => J.toRgbString(J(e)),
        toColorPickerSquare: (e) => J.toRgbString(J({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => J(e).isValid !== !1,
        equals: (e, t) =>
          J.isP3String(e) || J.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = J(e)),
              typeof t == `string` && (t = J(t)),
              J.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = J(e);
          return t.a === 1 ? J.toHexString(t) : J.toRgbString(t);
        },
        toFormatString: (e) => (J.isP3String(e) ? e : J.toRgbString(J(e))),
      }),
      (uS = /var\(.+\)/u),
      (dS = new Map()),
      (fS = [`stops`]),
      (pS = [`start`, `end`]),
      (mS = [`angle`, `alpha`]),
      (hS = {
        isLinearGradient: (e) => H(e) && mS.every((t) => t in e) && (rs(e) || ns(e)),
        hash: (e) => e.angle ^ ts(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = es(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (gS = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (_S = {
        isRadialGradient: (e) => H(e) && gS.every((t) => t in e) && (rs(e) || ns(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ ts(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = es(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (vS = [
        `onClick`,
        `onDoubleClick`,
        `onMouse`,
        `onMouseDown`,
        `onMouseUp`,
        `onTapDown`,
        `onTap`,
        `onTapUp`,
        `onPointer`,
        `onPointerDown`,
        `onPointerUp`,
        `onTouch`,
        `onTouchDown`,
        `onTouchUp`,
      ]),
      (yS = (() => new Set([...vS, ...vS.map((e) => `${e}Capture`)]))()),
      (bS = `overflow`),
      (xS = { x: 0, y: 0, width: 200, height: 200 }),
      (SS = new Set([
        `width`,
        `height`,
        `opacity`,
        `overflow`,
        `radius`,
        `background`,
        `color`,
        `x`,
        `y`,
        `z`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `rotateZ`,
        `scale`,
        `scaleX`,
        `scaleY`,
        `skew`,
        `skewX`,
        `skewY`,
        `originX`,
        `originY`,
        `originZ`,
      ])),
      (CS = y(function (e, t) {
        let { name: n, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = Io(e),
          u = ms(c),
          d = Ro(e),
          f = ls(e),
          p = r(null),
          m = t ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` ? !0 : void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Lx(e)[`data-framer-offset-parent-id`],
          };
        !hs(e) && n && (Lx(h)[`data-framer-name`] = n);
        let [_, v] = ps(c),
          y = fs(c),
          b = ka(y);
        (i && !(v && !b && _a(y))
          ? ((u.transformTemplate ||= Lo(i)), Object.assign(h, Po(i)))
          : (u.transformTemplate ||= void 0),
          Wo(e, m));
        let x = Ao(e),
          S = gs(c, y, v, C(eS)),
          T = Da(
            w(D, {
              children: [
                x
                  ? g(Eo, {
                      alt: e.alt ?? ``,
                      image: x,
                      containerSize: v ?? void 0,
                      nodeId: e.id && Fo(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                g(Oo, { ...o, border: a, layoutId: d }),
              ],
            }),
            S
          ),
          E = Mo(e.as),
          O = jo(x);
        return (
          e.fitImageDimension &&
            O &&
            ((_[e.fitImageDimension] = `auto`), (_.aspectRatio = O.width / O.height)),
          w(E, { ...h, ...u, layoutId: d, style: _, ref: m, children: [T, s] })
        );
      })),
      (wS = eo(
        y(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? g(CS, { ...e, ref: t }) : null;
        })
      )),
      (TS = `__LAYOUT_TREE_ROOT`),
      (ES = h.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (DS = class extends _ {
        constructor() {
          (super(...arguments),
            z(this, `shouldAnimate`, !1),
            z(this, `transition`),
            z(this, `lead`),
            z(this, `follow`),
            z(this, `scheduledPromotion`, !1),
            z(this, `scheduledDidUpdate`, !1),
            z(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            z(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            z(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            z(this, `sharedLayoutContext`, {
              schedulePromoteTree: this.schedulePromoteTree,
              scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
              initLead: this.initLead,
            }));
        }
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === TS && !this.follow?.isExiting,
              });
            }),
            this.shouldAnimate
              ? (this.follow.layoutMaybeMutated = !0)
              : this.scheduleProjectionDidUpdate(),
            (this.lead.layoutMaybeMutated = !1),
            (this.transition = void 0),
            (this.scheduledPromotion = !1),
            null
          );
        }
        componentDidUpdate() {
          if (!this.lead) return null;
          this.scheduledDidUpdate &&= (this.lead.rootProjectionNode?.root?.didUpdate(), !1);
        }
        render() {
          return g(ES.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (OS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (kS = class {
        constructor(e) {
          (z(this, `sharedIntersectionObserver`),
            z(this, `callbacks`, new WeakMap()),
            (this.sharedIntersectionObserver = new IntersectionObserver(
              this.intersectionObserverCallback.bind(this),
              e
            )));
        }
        intersectionObserverCallback(e, t) {
          for (let n of e) {
            let e = this.callbacks.get(n.target);
            e && e(n, t);
          }
        }
        observeElementWithCallback(e, t) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.observe(e), this.callbacks.set(e, t));
        }
        unobserve(e) {
          this.sharedIntersectionObserver &&
            (this.sharedIntersectionObserver.unobserve(e), this.callbacks.delete(e));
        }
        get root() {
          return this.sharedIntersectionObserver?.root;
        }
      }),
      (AS = a(new Map())),
      (jS = typeof IntersectionObserver > `u` ? n_ : ws),
      (MS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (NS = h.createContext(null)),
      (PS = class extends _ {
        constructor() {
          (super(...arguments),
            z(this, `layoutMaybeMutated`, !1),
            z(this, `projectionNodes`, new Map()),
            z(this, `rootProjectionNode`),
            z(this, `isExiting`),
            z(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === TS && !this.props.isExiting
            ),
            z(this, `switchLayoutGroupContext`, {
              register: (e) => this.addChild(e),
              deregister: (e) => this.removeChild(e),
              transition:
                this.props.isLead !== void 0 && this.props.animatesLayout
                  ? this.props.transition
                  : void 0,
              shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
            }));
        }
        componentDidMount() {
          this.props.isLead &&
            this.props.sharedLayoutContext.initLead(this, !!this.props.animatesLayout);
        }
        shouldComponentUpdate(e) {
          let {
            isLead: t,
            isExiting: n,
            isOverlayed: r,
            animatesLayout: i,
            transition: a,
            sharedLayoutContext: o,
          } = e;
          if (((this.isExiting = n), t === void 0)) return !0;
          let s = !this.props.isLead && t,
            c = this.props.isExiting && !n,
            l = s || c,
            u = !!this.props.isLead && !t,
            d = this.props.isOverlayed !== r;
          return (
            (l || u) && this.projectionNodes.forEach((e) => e?.willUpdate()),
            l ? o.schedulePromoteTree(this, a, !!i) : d && o.scheduleProjectionDidUpdate(),
            !!l && !!i
          );
        }
        addChild(e) {
          let t = e.options.layoutId;
          t && (this.projectionNodes.set(t, e), this.setRootChild(e));
        }
        setRootChild(e) {
          if (!this.rootProjectionNode) return (this.rootProjectionNode = e);
          this.rootProjectionNode =
            this.rootProjectionNode.depth < e.depth ? this.rootProjectionNode : e;
        }
        removeChild(e) {
          let t = e.options.layoutId;
          t && this.projectionNodes.delete(t);
        }
        render() {
          return g(Ie.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (FS = (e) => {
        let t = h.useContext(ES);
        return g(PS, { ...e, sharedLayoutContext: t });
      }),
      (IS = h.createContext(!0)),
      (LS = a({ register: () => {}, deregister: () => {} })),
      (RS = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let i = ks(),
          a = r({
            register: S(
              (e) => {
                if (i.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                i.set(e, void 0);
              },
              [i]
            ),
            deregister: S(
              (e) => {
                (i.get(e)?.(), i.delete(e));
              },
              [i]
            ),
          }).current;
        return (
          s(
            () => (
              i.forEach((n, r) => {
                let a = r(e, t);
                i.set(r, Qe(a) ? a : void 0);
              }),
              () => {
                i.forEach((e, t) => {
                  e && (e(), i.set(t, void 0));
                });
              }
            ),
            [e, t, i]
          ),
          g(LS.Provider, { value: a, children: n })
        );
      }),
      (zS = h.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: c,
        backdropColor: l,
        onTapBackdrop: u,
        backfaceVisible: d,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: _,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: x,
        areMagicMotionLayersPresent: S,
        id: T,
        isInitial: E,
      }) {
        let D = ae(),
          O = C(Ee),
          { persistLayoutIdCache: k } = C(By),
          A = r({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Ms({}, _, o),
          }),
          j = r(null),
          M = O !== null && !O.isPresent;
        (t && A.current.wasCurrent === void 0 && k(),
          s(() => {
            if (e || !D) return;
            if (M) {
              A.current = { ...A.current, wasBeingRemoved: M };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = A.current,
              a = (t && !i) || (!M && A.current.wasBeingRemoved && t),
              s = n && !r,
              c = Ms(A.current.origins, _, o),
              l = A.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: x, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: x, ...BS, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, M]));
        let N = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          P = h ? { type: !1 } : m || p,
          F = { ...y };
        ((F.left === void 0 || F.right === void 0) && (F.width = `auto`),
          (F.top === void 0 || F.bottom === void 0) && (F.height = `auto`));
        let ee = (Ns(o) || Ns(_)) && (e || t || n) ? 1200 : void 0,
          I = { ...BS, ...A.current.origins },
          te = e
            ? {
                initial: { ...I, ..._ },
                animate: { ...I, ...o, transition: N },
                exit: { ...I, ...v, transition: p },
              }
            : { animate: D, exit: { ...I, ...v, transition: P } },
          ne = !(M || S === !1),
          re = !!t && ne,
          L = t && E;
        return w(wS, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || M || (t && b) ? x : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ee,
          },
          children: [
            e &&
              g(wS, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: l || `transparent`,
                onTap: M ? void 0 : u,
              }),
            g(wS, {
              ...F,
              ...te,
              transition: {
                default: N,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: M ? f : d,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: L || e || (t && b) ? 1 : 0 },
              "data-is-present": ne ? void 0 : !1,
              ref: j,
              children: g(NS.Provider, {
                value: j,
                children: g(IS.Provider, {
                  value: re,
                  children: g(RS, {
                    isCurrent: re,
                    isOverlayed: i,
                    children: g(FS, {
                      isLead: t,
                      animatesLayout: !!b,
                      transition: N,
                      isExiting: !ne,
                      isOverlayed: i,
                      id: T,
                      children: c,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, js)),
      (BS = {
        x: 0,
        y: 0,
        z: 0,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: 0.5,
        originY: 0.5,
        originZ: 0,
        opacity: 1,
      }),
      (VS = class {
        constructor() {
          (z(this, `warning`, () => {
            ri(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            z(this, `goBack`, () => this.warning()),
            z(this, `instant`, () => this.warning()),
            z(this, `fade`, () => this.warning()),
            z(this, `push`, () => this.warning()),
            z(this, `modal`, () => this.warning()),
            z(this, `overlay`, () => this.warning()),
            z(this, `flip`, () => this.warning()),
            z(this, `customTransition`, () => this.warning()),
            z(this, `magicMotion`, () => this.warning()));
        }
      }),
      (HS = a(new VS())),
      (US = {
        Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
        PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
        PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
        PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
        PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
        Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
        Modal: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { center: !0 },
          enter: { opacity: 0, scale: 1.2 },
        },
        OverlayLeft: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { right: 0, top: 0, bottom: 0 },
          enter: { x: `100%` },
        },
        OverlayRight: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { left: 0, top: 0, bottom: 0 },
          enter: { x: `-100%` },
        },
        OverlayUp: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { bottom: 0, left: 0, right: 0 },
          enter: { y: `100%` },
        },
        OverlayDown: {
          overCurrentContext: !0,
          goBackOnTapOutside: !0,
          position: { top: 0, left: 0, right: 0 },
          enter: { y: `-100%` },
        },
        FlipLeft: { backfaceVisible: !1, exit: { rotateY: -180 }, enter: { rotateY: 180 } },
        FlipRight: { backfaceVisible: !1, exit: { rotateY: 180 }, enter: { rotateY: -180 } },
        FlipUp: { backfaceVisible: !1, exit: { rotateX: 180 }, enter: { rotateX: -180 } },
        FlipDown: { backfaceVisible: !1, exit: { rotateX: -180 }, enter: { rotateX: 180 } },
        MagicMotion: { withMagicMotion: !0 },
      }),
      (WS = () => ({
        current: -1,
        previous: -1,
        currentOverlay: -1,
        previousOverlay: -1,
        visualIndex: 0,
        overlayItemId: 0,
        historyItemId: 0,
        history: [],
        overlayStack: [],
        containers: {},
        containerIndex: {},
        containerVisualIndex: {},
        containerIsRemoved: {},
        transitionForContainer: {},
        previousTransition: null,
      })),
      (GS = p_(BS)),
      (KS = h.createContext(void 0)),
      (qS = h.createContext(void 0)),
      (JS = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends _ {
            constructor(t) {
              (super(t),
                fe(this, n),
                fe(this, e, null),
                z(this, `state`, WS()),
                fe(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = Ls(this.state, e);
                  if (!t) return;
                  let { skipLayoutAnimation: n } = this.props,
                    r = t.history[t.current],
                    i =
                      (e.type === `add` && e.transition.withMagicMotion) ||
                      (e.type === `forward` && r?.transition.withMagicMotion) ||
                      (e.type === `remove` && !!t.previousTransition),
                    a = () => {
                      (this.setState(t), r?.key && this.context?.(r.key));
                    };
                  n && !i ? n(a) : a();
                }),
                z(this, `goBack`, () => {
                  if (!Oe(this, n, i).call(this))
                    return (
                      Ge(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? P(this, a).call(this, { type: `remove` })
                        : P(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !oa(r) || !aa(r)) return;
              let o = { ...US.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = Ls(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!oa(t) || !aa(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? Oe(this, n, o).call(this, t, US.Instant)
                  : P(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              Oe(this, n, o).call(this, e, US.Instant, void 0);
            }
            fade(e, t) {
              Oe(this, n, o).call(this, e, US.Fade, t);
            }
            push(e, t) {
              Oe(this, n, o).call(this, e, Ps(t), t);
            }
            modal(e, t) {
              Oe(this, n, o).call(this, e, US.Modal, t);
            }
            overlay(e, t) {
              Oe(this, n, o).call(this, e, Fs(t), t);
            }
            flip(e, t) {
              Oe(this, n, o).call(this, e, Is(t), t);
            }
            magicMotion(e, t) {
              Oe(this, n, o).call(this, e, US.MagicMotion, t);
            }
            customTransition(e, t) {
              Oe(this, n, o).call(this, e, t);
            }
            render() {
              let e = Oe(this, n, r).call(this, { overCurrentContext: !1 }),
                t = Oe(this, n, r).call(this, { overCurrentContext: !0 }),
                i = Qs(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                U(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                U(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  g(
                    zS,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: cc(r, e),
                      transitionProps: u,
                      animation: sc(r, e),
                      backfaceVisible: ac(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: g(_s, {
                        children: uc({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                g(
                  zS,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: ic(n, t),
                    transitionProps: oc(n, t),
                    instant: cc(n, t, !0),
                    animation: sc(n, t),
                    exitProps: e.transition.enter,
                    visible: lc(n, t),
                    backdropColor: nc(e.transition),
                    backfaceVisible: rc(n, t),
                    onTapBackdrop: dc(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: uc({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return g(wS, {
                "data-framer-component-type": `NavigationRoot`,
                top: 0,
                left: 0,
                width: `100%`,
                height: `100%`,
                position: `relative`,
                style: {
                  overflow: `hidden`,
                  backgroundColor: `unset`,
                  pointerEvents: void 0,
                  ...this.props.style,
                },
                children: g(HS.Provider, {
                  value: this,
                  children: w(qS.Provider, {
                    value: o,
                    children: [
                      g(zS, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: $s(i),
                        animation: ec(i),
                        backfaceVisible: tc(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: g(Qi, {
                          children: g(DS, {
                            children: g(Re, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      g(Re, { children: c }),
                    ],
                  }),
                }),
              });
            }
          }),
          (e = new WeakMap()),
          (n = new WeakSet()),
          (r = function (e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }),
          (i = function () {
            return globalThis.event ? P(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              Oe(this, n, i).call(this) ||
              (Ge(this, e, globalThis.event?.timeStamp || null), !t || !oa(t) || !aa(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return P(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            P(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          z(t, `defaultProps`, { enabled: !0 }),
          z(t, `contextType`, KS),
          t
        );
      })()),
      (YS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (XS = eo(fc)),
      Ne(e_(), 1),
      Ne(e_(), 1),
      Ne(e_(), 1),
      (ZS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (QS = Symbol(`private`)),
      ($S = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [QS]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new ly(),
                reset() {
                  for (let t in i)
                    if (ZS(i, t)) {
                      let n = ZS(e, t) ? Lx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, tC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[QS].reset()),
          (e.addObserver = (e, t) => e[QS].observers.add(t)),
          e
        );
      })()),
      (eC = class {
        constructor() {
          (z(this, `set`, (e, t, n, r) => {
            if (t === QS) return !1;
            let i = e[QS],
              a,
              o;
            if (
              (ai(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = uy(n)),
              i.observeAnimatables && a)
            ) {
              let e = i.transactions;
              a.onUpdate({
                update: (t, n) => {
                  (n && e.add(n), i.observers.notify({ value: r }, n));
                },
                finish: (t) => {
                  e.delete(t) && i.observers.finishTransaction(t);
                },
              });
            }
            let s = !1,
              c = !0,
              l = Lx(e)[t];
            if (l !== void 0) {
              ai(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Lx(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            z(this, `get`, (e, t, n) => {
              if (t === QS) return Lx(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[QS].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(QS);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== QS) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (tC = new eC()),
      (nC = `opacity`),
      (rC = (() => {
        function e(t = {}) {
          let n = $S(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => $S.resetObject(e));
          }),
          (e.addObserver = (e, t) => $S.addObserver(e, t)),
          e
        );
      })()),
      (iC = { update: 0 }),
      (aC = h.createContext({ update: NaN })),
      (oC = class extends _ {
        constructor() {
          (super(...arguments),
            z(this, `observers`, []),
            z(this, `state`, iC),
            z(this, `taskAdded`, !1),
            z(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            z(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), My.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), rC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            rC._stores.forEach((e) => {
              let t = rC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            g(aC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ne(e_(), 1),
      (sC = `__framer__`),
      (cC = (() => sC.length)()),
      (lC = h.createContext(void 0)),
      (uC = h.createContext(void 0)),
      (dC = `ssr-variant`),
      (fC = `ssr-variant-group-separator`),
      (pC = h.forwardRef(function (e, t) {
        let n = Tc(t),
          r = h.useContext(uC),
          i = h.useSyncExternalStore(s_, l_, c_),
          a = ta(() => (i ? (Ra() ? 1 : 2) : 0)),
          o = h.useContext(lC);
        return _r(() => {
          let { breakpoint: t, overrides: i, children: s, ...c } = e;
          if (!o)
            return (
              console.warn(`PropertyOverrides is missing GeneratedComponentContext`),
              n(s, c)
            );
          let { primaryVariantId: l, variantClassNames: u } = o,
            d = r?.primaryVariantId === l ? r?.variants : void 0;
          switch (a) {
            case 0:
              return n(s, Nc(t, c, i));
            case 1:
              return Oc(i, s, c, u, l, d, n, t);
            case 2:
              return Oc(i, s, c, u, l, d, wc, void 0);
            default:
              W(a);
          }
        }, [o, r, n, e]);
      })),
      (mC = (() => yb(pC, `.${dC} { display: contents }`, `PropertyOverrides`))()),
      (hC = `default`),
      (gC = new Set([hC])),
      (vC = class {
        constructor() {
          (z(this, `entries`, new Map()), fe(this, _C, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (U(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (U(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = hC, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return hC;
          let n = P(this, _C)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (P(this, _C)[e] = kc(r)) : hC;
        }
        setAll(e, t = gC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Qe(n.transformTemplate) ? n.transformTemplate?.({}, bC) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: H(a) ? a : void 0,
              animate: H(o) ? o : void 0,
              transformTemplate: B(i) ? i : void 0,
            };
          for (let n of t) this.setHash(e, this.variantHash(n, r), s);
        }
        clear() {
          this.entries.clear();
        }
        toObject() {
          return Object.fromEntries(this.entries);
        }
      }),
      (_C = new WeakMap()),
      (yC = new vC()),
      (bC = `__Appear_Animation_Transform__`),
      (xC = `data-framer-appear-id`),
      (SC = `data-framer-appear-animation`),
      (CC = (e) => {
        if (lo())
          return {
            animate: Fc(e.animate) ? e.animate : void 0,
            initial: Fc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (wC = [
        `opacity`,
        `x`,
        `y`,
        `scale`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `skewX`,
        `skewY`,
        `transformPerspective`,
      ]),
      (TC = (e) => ({
        x: Je(e?.x ?? 0),
        y: Je(e?.y ?? 0),
        opacity: Je(e?.opacity ?? 1),
        scale: Je(e?.scale ?? 1),
        rotate: Je(e?.rotate ?? 0),
        rotateX: Je(e?.rotateX ?? 0),
        rotateY: Je(e?.rotateY ?? 0),
        skewX: Je(e?.skewX ?? 0),
        skewY: Je(e?.skewY ?? 0),
        transformPerspective: Je(e?.transformPerspective ?? 0),
      })),
      (EC = {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        transformPerspective: 0,
      }),
      (DC = { willChange: `transform` }),
      Object.freeze(DC),
      (OC = {}),
      Object.freeze(OC),
      (kC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (AC = () => {
        let e = r();
        return (
          s(
            () => () => {
              clearTimeout(e.current);
            },
            []
          ),
          async (t) =>
            new Promise((n) => {
              e.current = setTimeout(() => {
                n(!0);
              }, t * 1e3);
            })
        );
      }),
      (jC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (MC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (NC = 1),
      (PC = 4),
      (FC = new Set([
        `threshold`,
        `animateOnce`,
        `opacity`,
        `targetOpacity`,
        `x`,
        `y`,
        `scale`,
        `transition`,
        `rotate`,
        `rotateX`,
        `rotateY`,
        `perspective`,
        `enter`,
        `exit`,
        `animate`,
        `styleAppearEffectEnabled`,
        `targets`,
        `scrollDirection`,
      ])),
      (IC = [`animate`, `animate`]),
      (LC = { inputRange: [], outputRange: [] }),
      (RC = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (zC = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (BC = () => ({
        opacity: [],
        x: [],
        y: [],
        scale: [],
        rotate: [],
        rotateX: [],
        rotateY: [],
        skewX: [],
        skewY: [],
        transformPerspective: [],
      })),
      (VC = [0, 1]),
      (HC = { parallax: jC, styleAppear: FC, styleTransform: RC, loop: kC, presence: MC }),
      (UC = p_(HC)),
      (WC = (e) => e.reduce((e, t) => (e += t), 0)),
      (GC = (e) => e.reduce((e, t) => (e *= t), 1)),
      (KC = `current`),
      (qC = (e) =>
        h.forwardRef((t, n) => {
          if (t.__withFX)
            return g(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = CC(t);
          if (r) return g(e, { ...t, ...r, ref: n });
          let {
              parallax: i = {},
              styleAppear: a = {},
              styleTransform: o = {},
              presence: s = {},
              loop: c = {},
              forwardedProps: l,
              targetOpacityValue: u,
              withPerspective: d,
              inSmartComponent: f = !1,
            } = il(t),
            p = xs(n),
            { values: m, style: _ } = Wc(s, p, f, t.style, t[he]),
            { values: v, style: y } = Bc(i, p, t.style?.visibility),
            { values: b, style: x } = nl(o, p),
            { values: S, style: C } = Qc(a, p),
            { values: w, style: T } = Rc(c, p),
            E = h.useMemo(() => {
              let e = new We(u ?? 1);
              return {
                scale: [S.scale, w.scale, m.scale, b.scale],
                opacity: [S.opacity, w.opacity, m.opacity, e, b.opacity],
                x: [S.x, w.x, m.x, b.x],
                y: [S.y, w.y, v.y, m.y, b.y],
                rotate: [S.rotate, w.rotate, m.rotate, b.rotate],
                rotateX: [S.rotateX, w.rotateX, m.rotateX, b.rotateX],
                rotateY: [S.rotateY, w.rotateY, m.rotateY, b.rotateY],
                skewX: [S.skewX, w.skewX, m.skewX, b.skewX],
                skewY: [S.skewY, w.skewY, m.skewY, b.skewY],
                transformPerspective: [b.transformPerspective, S.transformPerspective],
              };
            }, [u, b, v, S, w, m]);
          ol(t.style, E);
          let D = L(E.scale, GC),
            O = L(E.opacity, GC),
            k = L(E.x, WC),
            A = L(E.y, WC),
            j = L(E.rotate, WC),
            M = L(E.rotateX, WC),
            N = L(E.rotateY, WC),
            P = L(E.skewX, WC),
            F = L(E.skewY, WC),
            ee = L(E.transformPerspective, WC),
            { drag: I, dragConstraints: te } = l;
          Bo(I && al(te) ? te : void 0);
          let ne = {
            opacity: O,
            scale: D,
            x: k,
            y: A,
            rotate: j,
            rotateX: M,
            rotateY: N,
            skewX: P,
            skewY: F,
          };
          nt(d) && (ne.transformPerspective = ee);
          let re = sl(t.animate) ? t.animate : void 0,
            ie = sl(t.initial) ? t.initial : void 0,
            ae = sl(t.exit) ? t.exit : void 0,
            oe = f && !s.presenceInitial ? { initial: ie, animate: re, exit: ae } : {};
          return g(e, {
            ...l,
            ...oe,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...ne, ...C, ..._ },
            values: m,
            ref: p,
          });
        })),
      (JC = a({})),
      (YC = h.createContext({})),
      (XC = h.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = h.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Tc(a);
        return g(YC.Provider, { value: o, children: s(r, i) });
      })),
      (ZC = (e) =>
        h.forwardRef((t, n) =>
          g(e, { layoutId: Ro(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (QC = !1),
      ($C = class extends _ {
        constructor() {
          (super(...arguments), z(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!ul(e)) return;
          let n = t?.componentStack;
          console.error(
            `Caught an error in SynchronousSuspenseErrorBoundary:

`,
            e,
            `

Component stack:
`,
            n,
            `

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
              dt(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          rn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!ul(e)) throw e;
          return ((QC = !0), this.props.children);
        }
      }),
      (ew = (() => (N === void 0 ? null : new Promise(() => {})))()),
      (tw = g(dl, {})),
      (nw = a(!1)),
      (nw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (rw = g(pl, {})),
      (iw = class extends _ {
        constructor() {
          (super(...arguments), z(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (hl(this.props.getErrorMessage(), t?.componentStack), ml(e, t));
        }
        render() {
          let { children: e, fallback: t = rw } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (aw = class extends _ {
        constructor() {
          (super(...arguments), z(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            ml(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (ow = (() => h.createContext(void 0))()),
      (sw = `code-crash:`),
      (cw = ZC(
        h.forwardRef(function (
          {
            children: e,
            layoutId: t,
            as: n,
            scopeId: r,
            nodeId: i,
            isAuthoredByUser: a,
            isModuleExternal: o,
            inComponentSlot: s,
            ...c
          },
          l
        ) {
          let u = ta(() => (t ? `${t}-container` : void 0)),
            d = Mo(n),
            f = kl(
              h.Children.map(e, (e) =>
                h.isValidElement(e) ? h.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return g(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: g(eS.Provider, {
              value: !0,
              children: g(Sv.Provider, {
                value: i ?? null,
                children: g(ea, {
                  enabled: !1,
                  children: g(He, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (lw = h.forwardRef(function (e, t) {
        let {
            as: n,
            children: r,
            scopeId: i,
            nodeId: a,
            isAuthoredByUser: o,
            rendersWithMotion: s,
            isModuleExternal: c,
            inComponentSlot: l,
            ...u
          } = e,
          d = kl(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = Mo(f);
          return g(Sv.Provider, {
            value: a ?? null,
            children: g(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return g(Sv.Provider, {
            value: a ?? null,
            children: g(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (uw = a({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (dw = `framer-cursor-none`),
      (fw = `framer-pointer-events-none`),
      (pw = b(function ({ children: e }) {
        let t = ta(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Al(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = _e();
        return w(uw.Provider, { value: t, children: [e, !n && g(_w, {})] });
      })),
      (mw = (() =>
        yb(
          pw,
          [
            `.${dw}, .${dw} * { cursor: none !important; }`,
            `.${fw}, .${fw} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (hw = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (gw = `data-framer-portal-id`),
      (_w = b(function () {
        let { onRegisterCursors: e } = C(uw),
          [t, n] = u(!1),
          i = Ze(0),
          a = Ze(0),
          o = Ze(0),
          c = r(null),
          l = r({ cursors: {}, cursorHash: void 0 }),
          d = zo();
        (j(() => {
          let e = F_.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? p(() => n(!1)) : n(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || n(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          s(() => {
            if (!t) return;
            let e = 0,
              n = 0;
            function r() {
              (i.set(e), a.set(n), ke(o, 1, { type: `tween`, duration: 0.2 }));
            }
            let s = () => {
              if (tt(l.current.cursors)) return;
              let t = Pl(e, n);
              t !== l.current.cursorHash && ((l.current.cursorHash = t), je.update(() => d()));
            };
            function u(t) {
              if (t.pointerType === `touch`) {
                Le(s);
                return;
              }
              (je.read(s, !0), (e = t.clientX), (n = t.clientY), je.update(r));
            }
            function f(e) {
              if (e.target === c.current || !c.current) return;
              let t = new PointerEvent(e.type, {
                bubbles: !0,
                cancelable: e.cancelable,
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                composed: e.composed,
                isPrimary: e.isPrimary,
                buttons: e.buttons,
                button: e.button,
              });
              je.update(() => {
                c.current?.dispatchEvent(t);
              });
            }
            return (
              F_.addEventListener(`pointermove`, u),
              document.addEventListener(`pointerdown`, f),
              document.addEventListener(`pointerup`, f),
              je.read(s, !0),
              () => {
                (F_.removeEventListener(`pointermove`, u),
                  document.removeEventListener(`pointerdown`, f),
                  document.removeEventListener(`pointerup`, f),
                  Le(s));
              }
            );
          }, [o, i, a, d, t]),
          s(() => {
            if (!t) return;
            function e() {
              ke(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              F_.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), F_.removeEventListener(`blur`, e));
              }
            );
          }, [o, t]),
          j(() => {
            function t(e) {
              ((l.current.cursors = e),
                (l.current.cursorHash = tt(e) ? null : Pl(i.get(), a.get())),
                d());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(dw, !1));
            };
          }, [i, a, e, d]));
        let { cursors: f, cursorHash: m } = l.current,
          h = m ? f[m] : null,
          _ = jl(h);
        j(() => {
          t && document.body.classList.toggle(dw, _);
        }, [_, t]);
        let v = h?.component,
          y = h?.transition ?? { duration: 0 },
          b = y.duration === void 0 ? y : { ...y, duration: y.duration * 1e3 },
          x = ve(i, b),
          w = ve(a, b),
          E = L(() => x.get() + (h?.offset?.x ?? 0)),
          D = L(() => w.get() + (h?.offset?.y ?? 0)),
          O = h?.alignment,
          k = h?.placement,
          A = S((e, t) => `translate(${Nl(k, O)}) ${t}`, [O, k]);
        return !t || !h || !v
          ? null
          : g(T, {
              children: g(v, {
                transformTemplate: A,
                style: { ...hw, x: E, y: D, opacity: o },
                globalTapTarget: !0,
                variant: h?.variant,
                ref: c,
                className: fw,
              }),
            });
      })),
      (vw = `webPageId`),
      (yw = class {
        constructor() {
          (z(this, `collectedLinks`, new Map()), z(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            U(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (U(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((r_ && !Ba()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Ll(e), e), this.collectedLinks.set(Ll(t), t));
          let n = this.nestingInfo.get(Ll(e)) ?? new Set();
          (n.add(Ll(t)), this.nestingInfo.set(Ll(e), n));
        }
      }),
      (bw = new yw()),
      (xw = `element`),
      (Sw = `collection`),
      (Cw = `collectionItemId`),
      (ww = `pathVariables`),
      (Tw = `framer/page-link,`),
      (Ew = a(void 0)),
      (Dw = `overlay`),
      (Ow = `template-overlay`),
      (kw = class extends _ {
        constructor() {
          (super(...arguments),
            z(this, `state`, { error: void 0 }),
            z(this, `message`, `Made UI non-interactive due to an error.`),
            z(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((N.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(dt(i_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          rn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (i_ && document.getElementById(`main`)?.innerHTML) || ``;
          return g(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${dt()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Aw = /:([a-z]\w*)/gi),
      (jw = a(void 0)),
      (Mw = 500),
      (Nw = 0.9),
      (Pw = 1.7),
      (Fw = 4),
      (Iw = 1 / 0),
      (Lw = new WeakMap()),
      (Rw = new Set()),
      (zw = new Map()),
      (Bw = !Y_ || typeof IntersectionObserver > `u` ? null : su()),
      (Vw = tu(
        y(function (
          {
            children: e,
            href: n,
            openInNewTab: r,
            smoothScroll: i,
            clickTrackingId: a,
            relValues: o,
            preserveParams: s,
            nodeId: c,
            scopeId: l,
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = At(),
            m = Mt(),
            h = au(),
            { activeLocale: g, locales: _ } = yr(),
            y = hu(),
            b = xn(),
            x = Rl(),
            S = gu({ nodeId: c, clickTrackingId: a, router: p, href: n, activeLocale: g }),
            C = t(() => {
              if (!n) return {};
              let e = Il(n) ? n : Gl(n);
              if (!e) return {};
              if (B(e))
                return bu(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: r,
                    trackLinkClick: S,
                    rel: o?.join(` `),
                    preserveParams: s,
                    smoothScroll: i,
                  },
                  b,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: t, unresolvedHashSlugs: a } = e,
                c = y(t, a, g);
              if (ct(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: v,
                } = nu(p, m, e, g, c, h),
                x = lu(r, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: v },
                T = (e) => vu(p, l, () => b(l, w, !1, !C), d, f, i, e);
              return {
                href: u,
                target: x,
                onClick: yu(u, S, T),
                "data-framer-page-link-current": (m && ou(m, e, h)) || void 0,
                navigate: T,
                preload: () => b(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: v,
              };
            }, [n, p, g, h, r, m, i, S, o, _, s, y, b]),
            w = xs(v(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          Ss(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return Bw?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k]
          );
          let j = !!T;
          return ql(
            Tc(f).cloneAsArray(e, (e) => xu(e, { ...d, ...Cu(A, u, j) }, w)),
            l,
            c,
            n,
            C,
            w
          );
        })
      )),
      (Hw = `framer`),
      (Uw = 3),
      (Ww = 30),
      (Gw = 1e4),
      (Kw = `3`),
      (qw = `__framer`),
      (Jw = [
        `website`,
        `company`,
        `message`,
        `subject`,
        `title`,
        `description`,
        `feedback`,
        `notes`,
        `details`,
        `remarks`,
        `comments`,
      ]),
      (Yw = (() => Date.now())()),
      (Xw = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (Zw = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (Qw = () => ((Date.now() - Yw) / 1e3).toFixed(2)),
      ($w = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          h.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          h.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = Qw())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, `value`, {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = Qw()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = Qw()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, `value`, o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          g(`input`, {
            ref: t,
            type: `text`,
            name: n,
            suppressHydrationWarning: !0,
            tabIndex: -1,
            autoComplete: `one-time-code`,
            "aria-hidden": `true`,
            style: { position: `absolute`, transform: `scale(0)` },
            defaultValue: ``,
            "data-1p-ignore": !0,
            "data-lpignore": `true`,
            "data-form-type": `other`,
            "data-bwignore": !0,
          })
        );
      }),
      (eT = `https://www.google.com/recaptcha/api.js`),
      (tT = new Map()),
      (nT = { state: `pending` }),
      (rT = { state: `success` }),
      (iT = { state: `incomplete` }),
      (aT = { state: `complete` }),
      (oT = { state: `error` }),
      (sT = h.createContext(void 0)),
      (cT = h.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          formCaptchaProvider: c,
          formCaptchaSiteKey: l,
          ...u
        },
        d
      ) {
        let f = h.useRef(null),
          m = d ?? f,
          _ = !(c && l),
          {
            states: v,
            convertHoneypotFieldsForSubmission: y,
            replaceHoneypotWithMetadata: b,
          } = Au(_),
          x = At(),
          S = Mt(),
          T = au(),
          E = hn(),
          { executeChallenge: D } = Lu({ provider: c, siteKey: l }),
          [O, k] = h.useReducer(Ru, iT),
          { activeLocale: A, locales: j } = yr(),
          M = C(sT),
          N = h.useRef({ onSuccess: r, onError: i, onLoading: a });
        N.current = { onSuccess: r, onError: i, onLoading: a };
        let P = h.useRef(!1);
        async function F(e) {
          if (B(e)) {
            let t = ru(x, e, T, j);
            if (!t) {
              Vu(e, m);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            x.navigate?.(n, r, i);
            return;
          }
          U(Il(e), `Expected link to be either a LinkToWebPage or a string`, e);
          let {
            routeId: t,
            elementId: n,
            pathVariables: r,
          } = nu(x, S, e, A, await pu(e.unresolvedPathSlugs, e.unresolvedHashSlugs, A, E), T);
          x.navigate?.(t, n, r);
        }
        let ee = async (t) => {
            if ((t.preventDefault(), !e || !M || P.current)) return;
            ((P.current = !0), y());
            let r = new FormData(t.currentTarget);
            (await bn({ priority: `user-visible`, continueAfter: `paint` }),
              b(r),
              p(() => k({ type: `submit` })),
              ku(r, F_.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (N.current.onLoading?.(),
                Mu({ router: x, nodeId: s, submitTrackingId: o, activeLocale: A }),
                await Uu(e, r, M, D),
                p(() => k({ type: `success` })),
                N.current.onSuccess?.(),
                n && (await F(n)));
            } catch (e) {
              (p(() => k({ type: `error` })), N.current.onError?.(), console.error(e));
            }
            P.current = !1;
          },
          te = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), ee(e)));
          },
          ne = async (e) => {
            let t = e.currentTarget;
            (await bn({ priority: `background`, continueAfter: `paint` }),
              p(() => k({ type: Hu(t) ? `incomplete` : `complete` })));
          };
        return w(I.form, {
          ...u,
          onSubmit: zu(O) ? ee : Bu,
          onKeyDown: te,
          onChange: ne,
          ref: m,
          children: [t(O), _ && g(ju, { states: v })],
        });
      })),
      (lT = `__framer_force_showing_editorbar_since`),
      (uT = class extends _ {
        constructor() {
          (super(...arguments), z(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (dT = () => {
        try {
          return !!localStorage[lT];
        } catch {
          return !1;
        }
      }),
      (fT = () => !dT()),
      (pT = (() => {
        let e = a(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (mT = `main`),
      (hT = `framerGeneratedPage`),
      (gT = `<!-- Start of headStart -->`),
      (_T = `<!-- End of headStart -->`),
      (vT = `<!-- Start of headEnd -->`),
      (yT = `<!-- End of headEnd -->`),
      (bT = `<!-- Start of bodyStart -->`),
      (xT = `<!-- End of bodyStart -->`),
      (ST = `<!-- Start of bodyEnd -->`),
      (CT = `<!-- End of bodyEnd -->`),
      (wT = (() => h.createContext(void 0))()),
      (TT = null),
      (ET = null),
      o_(ud),
      (DT = (e, t, n, i, a, o) => {
        let c = C(sT),
          l = r(),
          u = hn(),
          d = r(!0);
        return (
          s(() => {
            function r() {
              (!TT || !ET) && ud();
              let r = n ? new URL(F_.location.origin + n) : F_.location,
                s = {
                  version: I_,
                  abTestId: e?.abTestId,
                  framerSiteId: c ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: r.href,
                  hostname: r.hostname,
                  pathname: r.pathname,
                  search: r.search || null,
                  hash: r.hash || null,
                  timezone: TT,
                  locale: ET,
                },
                l = d.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && u?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && B(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (ct(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...s, collectionItemId: t };
                  })()
                : s;
            }
            (async () => {
              let e = (l.current = r()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                d.current ? (d.current = !1) : rn(`published_site_pageview`, t, `eager`));
            })();
            let s = async (e) => {
              if (e.persisted) {
                let e = (l.current = r()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), rn(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              N.addEventListener(`pageshow`, s),
              () => {
                N.removeEventListener(`pageshow`, s);
              }
            );
          }, [e, t, n, i, a, c, u, o]),
          l
        );
      }),
      (OT = { status: `loading`, data: void 0 }),
      (kT = 5e3),
      (AT = () => {}),
      (LT = class e {
        constructor() {
          (z(this, `responseValues`, new Map()),
            fe(this, jT, new Map()),
            fe(this, MT, new Set()),
            fe(this, NT, new Map()),
            fe(this, PT, new Map()),
            fe(this, FT, new Map()),
            fe(this, IT, new Map()),
            z(
              this,
              `persistCache`,
              bc(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = P(this, NT).get(e);
                  if (!r || r === 0) continue;
                  let i = P(this, PT).get(e);
                  i && ((i && Ed(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of P(this, IT)) (clearInterval(t), P(this, IT).delete(e));
        }
        stopQueryRefetching(e) {
          let t = Sd(e),
            n = P(this, IT).get(t);
          n && (clearInterval(n), P(this, IT).delete(t));
        }
        startQueryRefetching(e) {
          let t = Sd(e),
            n = P(this, IT).get(t),
            r = P(this, NT).get(t);
          if (n || !r) return;
          let i = F_.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = P(this, PT).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          P(this, IT).set(t, i);
        }
        hydrateCache() {
          try {
            let t = localStorage.getItem(e.cacheKey);
            if (!t) return;
            let n = JSON.parse(t);
            if (typeof n != `object`) throw Error(`Invalid cache data`);
            for (let e in n) {
              let t = n[e];
              if (!Array.isArray(t) || t.length !== 3) throw Error(`Invalid cache data`);
              let [r, i, a] = t;
              Ed(r, i) ||
                (P(this, PT).set(e, r),
                P(this, NT).set(e, i),
                this.responseValues.set(e, { status: `success`, data: a }));
            }
          } catch {
            try {
              localStorage.removeItem(e.cacheKey);
            } catch {}
          }
        }
        setResponseValue(e, t) {
          (this.responseValues.set(e, t), this.persistCache());
          let n = P(this, jT).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!Ra() || !Bl(e.url, !1)) return;
          let t = Sd(e);
          (P(this, MT).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = P(this, jT).get(t);
          for (let e of r ?? []) e();
          let i = Td(n, e);
          return (e.resultOutputType === `image` && B(i) && (await yd(i).catch(AT)), i);
        }
        async fetchWithCache(e) {
          if (!Ra()) return;
          let t = Sd(e),
            n = P(this, FT).get(t);
          if (n) return n;
          let r = P(this, PT).get(t),
            i = r && Ed(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, OT);
          let a = (async () => {
            try {
              let n = await fetch(e.url, { method: `GET`, credentials: e.credentials });
              if (!n.ok) {
                this.setResponseValue(t, {
                  status: `error`,
                  error: Error(`Invalid Response Status`),
                  data: void 0,
                });
                return;
              }
              let r = await n.json();
              (this.setResponseValue(t, { status: `success`, data: r }),
                P(this, PT).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            P(this, FT).set(t, a),
            a.finally(() => {
              P(this, FT).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !P(this, MT).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!Bl(r, !1)) return AT;
          let a = Sd(e),
            o = P(this, NT).get(a);
          ((!o || i < o) && P(this, NT).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = P(this, jT).get(a) ?? new Set();
          return (
            s.add(t),
            P(this, jT).set(a, s),
            () => {
              let n = P(this, jT).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && P(this, jT).delete(a),
                P(this, jT).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (jT = new WeakMap()),
      (MT = new WeakMap()),
      (NT = new WeakMap()),
      (PT = new WeakMap()),
      (FT = new WeakMap()),
      (IT = new WeakMap()),
      z(LT, `cacheKey`, `framer-fetch-client-cache`),
      (RT = LT),
      (zT = a(void 0)),
      (BT = a(!0)),
      (VT = ({ children: e, client: t }) => {
        let [n] = u(() => t ?? new RT()),
          [r, i] = u(!0);
        return (
          s(
            () => (
              n.hydrateCache(),
              p(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          g(BT.Provider, { value: r, children: g(zT.Provider, { value: n, children: e }) })
        );
      }),
      (ze.WillChange = Ke),
      (HT = tu(
        y(function ({ links: e, children: t, ...n }, r) {
          let i = At(),
            { activeLocale: a } = yr(),
            o = Tc(r),
            s = hu(),
            c = [],
            l = e.map((e) => {
              if (e)
                return B(e)
                  ? Tu(e, i, void 0, void 0, a)
                  : Tu(e.href, i, e.implicitPathVariables, e.refKey, a, (e, t) => s(e, t, a, c));
            });
          if (c.length > 0) throw Promise.allSettled(c);
          return o(t(l), n);
        })
      )),
      (UT = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Hd(e, t);
            case `boolean`:
              return Wd(e);
            case `color`:
              return qd(e);
            case `date`:
              return Yd(e);
            case `enum`:
              return Zd(e);
            case `file`:
              return $d(e);
            case `link`:
              return tf(e);
            case `number`:
              return rf(e);
            case `object`:
              return sf(e, t);
            case `responsiveimage`:
              return lf(e);
            case `richtext`:
              return df(e);
            case `string`:
              return hf(e);
            case `vectorsetitem`:
              return pf(e);
            case `unknown`:
              return e;
            default:
              W(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return $e(e)
            ? { type: `boolean`, value: e }
            : at(e)
              ? { type: `date`, value: e.toISOString() }
              : V(e)
                ? { type: `number`, value: e }
                : B(e)
                  ? { type: `string`, value: e }
                  : et(e)
                    ? { type: `array`, value: e.map(UT.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? _f(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? _f(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? _f(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? _f(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? _f(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => UT.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => UT.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = gf(e),
            i = gf(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = gf(e),
            i = gf(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = gf(e),
            i = gf(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.endsWith(i));
        },
        length(e) {
          switch (e?.type) {
            case `array`:
              return e.value.length;
          }
          return 0;
        },
        stringify(e) {
          if (e === null) return `null`;
          switch (e.type) {
            case `array`:
              return `[${e.value.map(UT.stringify).join(`, `)}]`;
            case `boolean`:
            case `number`:
              return String(e.value);
            case `string`:
              return `'${e.value}'`;
            case `enum`:
              return `'${e.value}' /* Enum */`;
            case `color`:
              return `'${e.value}' /* Color */`;
            case `date`:
              return `'${e.value}' /* Date */`;
            case `richtext`:
              return `RichText`;
            case `vectorsetitem`:
              return `VectorSetItem`;
            case `responsiveimage`:
              return `ResponsiveImage`;
            case `file`:
              return `File`;
            case `link`:
              return B(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              W(e);
          }
        },
      }),
      (WT = { type: `unknown`, isNullable: !0 }),
      (GT = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t), z(this, `schema`), z(this, `indexes`, []));
          let n = co(e);
          U(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (U(n !== `array`, `Array properties are not supported`),
              U(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (it(i)) continue;
            let a = this.schema[t];
            if (!nt(a)) {
              if ((U(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
                n[t] = { type: a.type, value: { itemIndex: r, key: t } };
                continue;
              }
              n[t] = { type: a.type, value: i };
            }
          }
          return { pointer: t, data: n };
        }
        async resolveRichText(e) {
          let { itemIndex: t, key: n } = e,
            r = (await vf(this.collection, this.locale))[t]?.[n];
          return C_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await vf(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await vf(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (U(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (KT = new Map()),
      (qT = new WeakMap()),
      (JT = `$r_`),
      (YT = new Map()),
      (XT = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = Cf(),
            i = wf();
          return new e(t * r + n / i);
        }
        static max(t, n) {
          return new e(Math.max(t.network, n.network));
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : e.network > t.network ? 1 : 0;
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (ZT = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            z(this, `nodes`, []),
            z(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new QT();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          U(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (QT = class {
        constructor() {
          (z(this, `node`), z(this, `cost`, new Q(1 / 0)), z(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      ($T = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (eE = class extends $T {
        constructor() {
          (super(...arguments), z(this, `group`));
        }
        getGroup() {
          return (U(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (U(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return kd(this.evaluate(void 0));
        }
        evaluateAsync() {
          return Ad(this.evaluate(void 0));
        }
      }),
      (tE = class {
        constructor(e, t, n = {}) {
          ((this.options = n),
            z(this, `collections`),
            z(this, `richTextCache`, new WeakMap()),
            z(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Mf(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Nd(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* Md(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          U(kf(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          U(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = this.options.richTextMode === `raw` ? t.pointer : n.resolveRichText(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadRichTextValue(e) {
          this.loadRichTextValue(e);
        }
        *resolveRichTextValue(e) {
          let t = this.loadRichTextValue(e);
          return st(t) ? yield t : t;
        }
        loadVectorSetItemValue(e) {
          let t = e.value;
          U(jf(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (U(n, `Can't find collection for vector set item pointer`),
            U(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
          let r = this.vectorSetItemCache.get(n) ?? new Map();
          this.vectorSetItemCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveVectorSetItem(t.pointer);
          return (r.set(t.pointer, a), a);
        }
        preloadVectorSetItemValue(e) {
          this.loadVectorSetItemValue(e);
        }
        *resolveVectorSetItemValue(e) {
          let t = this.loadVectorSetItemValue(e);
          return st(t) ? yield t : t;
        }
        *resolveValue(e) {
          switch (e?.type) {
            case `array`:
              return yield* this.resolveArrayValue(e);
            case `object`:
              return yield* this.resolveObjectValue(e);
            case `richtext`:
              return yield* this.resolveRichTextValue(e);
            case `vectorsetitem`:
              return yield* this.resolveVectorSetItemValue(e);
          }
          return e?.value ?? null;
        }
      }),
      (nE = `index`),
      (rE = class extends Set {
        merge(e) {
          for (let t of e) this.add(t);
        }
        equals(e) {
          if (this === e) return !0;
          if (this.size !== e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        subsetOf(e) {
          if (this === e) return !0;
          if (this.size > e.size) return !1;
          for (let t of this) if (!e.has(t)) return !1;
          return !0;
        }
        getHash() {
          let e = [];
          for (let t of this) e.push(t.id);
          return (e.sort((e, t) => e - t), q(this.name, ...e));
        }
      }),
      (iE = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            z(this, `indexes`, new oE()),
            z(this, `fields`, new $()));
        }
      }),
      (aE = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          z(this, `resolvedFields`, new $()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (oE = class extends rE {
        constructor() {
          (super(...arguments), z(this, `name`, `Indexes`));
        }
      }),
      (sE = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          U(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                U(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Of(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                U(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Af(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      ($ = class extends rE {
        constructor() {
          (super(...arguments), z(this, `name`, `Fields`));
        }
      }),
      (cE = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return q(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (lE = class {
        constructor(e) {
          (z(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return q(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e ? !0 : this.length === e.length ? this.getHash() === e.getHash() : !1;
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== nE) return !1;
          return !0;
        }
      }),
      (uE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return q(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 ? !0 : e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0
            ? !0
            : e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (dE = class e {
        constructor(e) {
          ((this.parent = e), z(this, `node`), z(this, `ordering`), z(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (U(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (U(!this.node, `Node already set`), (this.node = e));
        }
        setOrdering(e) {
          this.ordering = e;
        }
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.addField(t);
        }
        resolveField(e, t) {
          let n = [];
          for (let r of this.fields) r.name === e && ((t && r.collectionName !== t) || n.push(r));
          if (n.length === 1) return n[0];
          if (n.length > 1) throw Error(`Ambiguous fields`);
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fields.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new lE();
        }
        getRequiredResolvedFields() {
          let e = new $();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new uE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          U(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (U(e, `Field must exist`), e.field);
        }
      }),
      (fE = class {
        constructor() {
          (z(this, `pointers`, new Map()), z(this, `values`, new Map()));
        }
        getKey() {
          let e = [];
          for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
          return e.sort().join(`-`);
        }
        addValue(e, t) {
          this.values.set(e, t);
        }
        getValue(e) {
          return this.values.get(e) ?? null;
        }
        mergeValues(e) {
          for (let [t, n] of e.values) this.addValue(t, n);
        }
        addPointer(e, t) {
          this.pointers.set(e, t);
        }
        getPointer(e) {
          return this.pointers.get(e);
        }
        mergePointers(e) {
          for (let [t, n] of e.pointers) this.addPointer(t, n);
        }
        merge(e) {
          (this.mergeValues(e), this.mergePointers(e));
        }
      }),
      (pE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          return new e(t, this.tuples.map(n));
        }
        sort(t) {
          let n = Array.from(this.tuples).sort(t);
          return new e(this.fields, n);
        }
        slice(t, n) {
          let r = this.tuples.slice(t, n);
          return new e(this.fields, r);
        }
        union(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            (r.add(t), i.push(e));
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) || i.push(e);
          }
          return i;
        }
        intersection(t) {
          let n = new $();
          for (let e of this.fields) t.fields.has(e) && n.add(e);
          let r = new Set(),
            i = new e(n);
          for (let e of this.tuples) {
            let t = e.getKey();
            r.add(t);
          }
          for (let e of t.tuples) {
            let t = e.getKey();
            r.has(t) && i.push(e);
          }
          return i;
        }
      }),
      (mE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return q(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (hE = class e extends eE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new $();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new $();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new uE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new Q(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = Q.max(i, n);
          }
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map((e) => new mE(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Nd(
              n.tuples.map((t) =>
                Nd(
                  this.projections.map((n) => Md({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new fE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            U(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (gE = { type: 0 }),
      (_E = class extends $T {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return kd(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Ad(this.evaluate(void 0, void 0));
        }
      }),
      (vE = { type: 0 }),
      (yE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return q(`CaseCondition`, this.when, this.then);
        }
      }),
      (bE = class e extends _E {
        constructor(e, t, n) {
          let r = new $(),
            i = new $(),
            a = !0;
          e &&
            (r.merge(e.referencedFields),
            i.merge(e.referencedOuterFields),
            (a &&= e.isSynchronous));
          for (let { when: e, then: n } of t)
            (r.merge(e.referencedFields),
              i.merge(e.referencedOuterFields),
              (a &&= e.isSynchronous),
              r.merge(n.referencedFields),
              i.merge(n.referencedOuterFields),
              (a &&= n.isSynchronous));
          (n &&
            (r.merge(n.referencedFields),
            i.merge(n.referencedOuterFields),
            (a &&= n.isSynchronous)),
            super(r, i, a),
            (this.input = e),
            (this.conditions = t),
            (this.otherwise = n),
            z(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return q(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new yE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* Md({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Nd(
              this.conditions.map((n) =>
                Md({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (UT.equal(n, e, vE)) return t;
          } else for (let { when: e, then: t } of r) if (Gd(e)) return t;
          return i;
        }
      }),
      (xE = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            z(this, `collectionId`, 0),
            z(this, `indexId`, 0),
            z(this, `fieldId`, 0),
            z(this, `subqueries`, []));
        }
        build() {
          let e = new dE();
          return this.buildQuery(e, this.query);
        }
        buildQuery(e, t) {
          let n = { type: `Select`, ...t };
          return this.buildSelect(e, n);
        }
        buildSelect(e, t) {
          let n = this.buildFrom(e, t.from),
            r = n.getRequiredOrdering();
          if (t.where) {
            let e = n.takeNode(),
              r = this.buildExpression(n, t.where),
              i = this.normalizer.newRelationalFilter(e, r);
            n.setNode(i);
          }
          let i = [],
            a = new $(),
            o;
          if (t.orderBy) {
            o = new lE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (nt(t)) continue;
                a.add(t.field);
                let r = new cE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new sE(Ff(this.fieldId++), void 0, t.definition, void 0),
                  a = new mE(t, r);
                i.push(a);
                let s = new cE(r, e.direction);
                o.push(s);
              }
            o.merge(r);
          } else o = r;
          let s = this.buildSelectList(n, t.select, a, i);
          if ((s.setOrdering(o), t.offset)) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.offset),
              i = this.normalizer.newRelationalOffset(n, r, o);
            s.setNode(i);
          }
          if (t.limit) {
            let n = s.takeNode(),
              r = this.buildExpression(e, t.limit),
              i = this.normalizer.newRelationalLimit(n, r, o);
            s.setNode(i);
          }
          return s;
        }
        buildSelectList(e, t, n, r) {
          let i = e.push(),
            a = new $(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (nt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              U(n.alias, `Subqueries should have an alias`);
              let r = Ff(this.fieldId++),
                a = n.alias,
                s = new sE(r, a, t.definition, void 0),
                c = new mE(t, s);
              (o.push(c), i.addField({ field: s, name: a }));
            }
          let s = e.takeNode(),
            c = this.normalizer.newRelationalProject(s, o, a);
          return (i.setNode(c), i);
        }
        buildFrom(e, t) {
          switch (t.type) {
            case `Collection`:
              return this.buildCollection(e, t);
            case `LeftJoin`:
              return this.buildJoin(e, t);
            default:
              W(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Sf(t.data, this.locale),
            i = t.alias,
            a = new iE(Nf(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new sE(Ff(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new sE(Ff(this.fieldId++), nE, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: nE, collectionName: i });
            let t = new lE(),
              r = new cE(e);
            (t.push(r), n.setOrdering(t));
          }
          for (let e of r.indexes) {
            let t = [];
            for (let r of e.fields) {
              let e = this.buildExpression(n, r);
              t.push(e);
            }
            let r;
            e.where && (r = this.buildExpression(n, e.where));
            let i = new lE(),
              o = new aE(Pf(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new lE(),
            a = n.getRequiredOrdering();
          i.merge(a);
          let o = r.getRequiredOrdering();
          i.merge(o);
          let s = e.push();
          (s.addFieldsFromScope(n), s.addFieldsFromScope(r), s.setOrdering(i));
          let c = this.buildExpression(s, t.constraint),
            l = n.takeNode(),
            u = r.takeNode(),
            d;
          switch (t.type) {
            case `LeftJoin`:
              d = this.normalizer.newRelationalLeftJoin(l, u, c);
              break;
            default:
              W(t.type, `Unsupported join type`);
          }
          return (s.setNode(d), s);
        }
        buildExpression(e, t) {
          switch (t.type) {
            case `Identifier`:
              return this.buildIdentifier(e, t);
            case `LiteralValue`:
              return this.buildLiteralValue(t);
            case `FunctionCall`:
              return this.buildFunctionCall(e, t);
            case `Case`:
              return this.buildCase(e, t);
            case `UnaryOperation`:
              return this.buildUnaryOperation(e, t);
            case `BinaryOperation`:
              return this.buildBinaryOperation(e, t);
            case `TypeCast`:
              return this.buildTypeCast(e, t);
            case `Select`:
              throw Error(`Subqueries are only supported inside subquery function calls`);
            default:
              W(t, `Unsupported expression`);
          }
        }
        buildIdentifier(e, t) {
          let n = e.resolveField(t.name, t.collection);
          if (n) {
            let e = !1;
            for (let t of this.subqueries)
              e
                ? t.referencedOuterFields.add(n.field)
                : ((e = t.inScope.has(n)), e && t.referencedFields.add(n.field));
            return this.normalizer.newScalarVariable(n.field, e);
          }
          return this.normalizer.newScalarConstant(WT, null);
        }
        buildLiteralValue(e) {
          let t = UT.parse(e.value);
          return this.normalizer.newScalarConstant(WT, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (U(r, `Missing argument`), this.buildExpression(e, r));
            },
            r = t.functionName;
          switch (r) {
            case `CONTAINS`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarContains(e, t);
            }
            case `STARTS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarStartsWith(e, t);
            }
            case `ENDS_WITH`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarEndsWith(e, t);
            }
            case `LENGTH`: {
              let e = n(0);
              return this.normalizer.newScalarLength(e);
            }
            case `INDEX_OF`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIndexOf(e, t);
            }
            case `ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                U(n, `Missing argument`),
                U(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              W(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new SE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getNamedFields(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildSubqueryFlatArray(e, t) {
          try {
            let n = new SE(e);
            this.subqueries.push(n);
            let r = this.buildSelect(e, t),
              i = r.takeNode(),
              a = r.getSingleField(),
              o = r.getRequiredOrdering(),
              s = n.referencedFields,
              c = n.referencedOuterFields;
            return this.normalizer.newScalarFlatArray(i, a, o, s, c);
          } finally {
            this.subqueries.pop();
          }
        }
        buildCase(e, t) {
          let n;
          t.value && (n = this.buildExpression(e, t.value));
          let r = t.conditions.map(
              (t) => new yE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
            ),
            i;
          return (
            t.else && (i = this.buildExpression(e, t.else)),
            this.normalizer.newScalarCase(n, r, i)
          );
        }
        buildUnaryOperation(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.operator) {
            case `not`:
              return this.normalizer.newScalarNot(n);
            default:
              W(t.operator, `Unsupported unary operator`);
          }
        }
        buildBinaryOperation(e, t) {
          let n = this.buildExpression(e, t.left),
            r = this.buildExpression(e, t.right);
          switch (t.operator) {
            case `and`:
              return this.normalizer.newScalarAnd(n, r);
            case `or`:
              return this.normalizer.newScalarOr(n, r);
            case `==`:
              return this.normalizer.newScalarEquals(n, r);
            case `!=`:
              return this.normalizer.newScalarNotEquals(n, r);
            case `<`:
              return this.normalizer.newScalarLessThan(n, r);
            case `<=`:
              return this.normalizer.newScalarLessThanOrEqual(n, r);
            case `>`:
              return this.normalizer.newScalarGreaterThan(n, r);
            case `>=`:
              return this.normalizer.newScalarGreaterThanOrEqual(n, r);
            case `in`:
              return this.normalizer.newScalarIn(n, r);
            default:
              W(t.operator, `Unsupported binary operator`);
          }
        }
        buildTypeCast(e, t) {
          let n = this.buildExpression(e, t.value);
          switch (t.dataType) {
            case `BOOLEAN`:
              return this.normalizer.newScalarCast(n, { type: `boolean`, isNullable: !0 });
            case `DATE`:
              return this.normalizer.newScalarCast(n, { type: `date`, isNullable: !0 });
            case `NUMBER`:
              return this.normalizer.newScalarCast(n, { type: `number`, isNullable: !0 });
            case `STRING`:
              return this.normalizer.newScalarCast(n, { type: `string`, isNullable: !0 });
            default:
              throw Error(`Unsupported data type`);
          }
        }
      }),
      (SE = class {
        constructor(e) {
          ((this.inScope = e),
            z(this, `referencedFields`, new $()),
            z(this, `referencedOuterFields`, new $()));
        }
      }),
      (CE = class e extends eE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`RelationalFilter`, this.inputGroup.id, this.predicate);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new uE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.predicate.getOptimized());
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Nd(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Gd(n[t] ?? null));
        }
      }),
      (wE = class e extends eE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return q(`RelationalIndexLookup`, this.index.id, ...this.query);
        }
        getOutputFields() {
          return this.index.collection.fields;
        }
        canProvideOrdering(e) {
          return e.equals(this.index.ordering);
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.index.resolvedFields);
        }
        optimize() {
          let e = this.query.every((e) => e.type === `All`);
          return Q.estimate(1, e ? 100 * XT : 50 * XT);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new pE(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new fE();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (TE = class e extends eE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            z(this, `leftGroup`),
            z(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return q(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new uE(new lE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Md({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (EE = class e extends eE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return q(`RelationalScan`, this.collection.id);
        }
        getOutputFields() {
          return this.collection.fields;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.collection.fields);
        }
        optimize() {
          return Q.estimate(1, 200 * XT);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new pE(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new fE();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (DE = class e extends eE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            z(this, `leftGroup`),
            z(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return q(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new $(),
            t = this.leftGroup.relational.outputFields,
            n = this.rightGroup.relational.outputFields;
          for (let r of t) n.has(r) && e.add(r);
          return e;
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e) {
          return new uE(new lE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return Q.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Md({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (OE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Gd(n) && Gd(r) };
        }
      }),
      (kE = class extends _E {
        constructor(e, t) {
          let n = new $(),
            r = new $();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return q(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (AE = { type: 0 }),
      (jE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Md({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.contains(n, r, AE) };
        }
      }),
      (ME = { type: 0 }),
      (NE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Md({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.endsWith(n, r, ME) };
        }
      }),
      (PE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.equal(n, r, gE) };
        }
      }),
      (FE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.greaterThan(n, r, gE) };
        }
      }),
      (IE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.greaterThanOrEqual(n, r, gE) };
        }
      }),
      (LE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.lessThan(n, r, gE) };
        }
      }),
      (RE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.lessThanOrEqual(n, r, gE) };
        }
      }),
      (zE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !UT.equal(n, r, gE) };
        }
      }),
      (BE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Gd(n) || Gd(r) };
        }
      }),
      (VE = { type: 0 }),
      (HE = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Md({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.startsWith(n, r, VE) };
        }
      }),
      (UE = class {
        constructor(e) {
          ((this.normalizer = e), z(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof CE) {
            if (e.predicate instanceof OE) {
              let n = new TE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof BE) {
              let n = new DE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof EE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new wE(n, If(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof CE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof EE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof PE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof zE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof LE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof RE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof FE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof IE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof kE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof HE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof NE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof kE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = If(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new wE(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (WE = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (GE = class {
        constructor() {
          (z(this, `nodes`, new Map()), z(this, `groups`, []));
        }
        addGroup(e) {
          let t = new ZT(Tf(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new WE(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            U(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (KE = class e extends eE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            z(this, `leftGroup`),
            z(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return q(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new $();
          return (
            e.merge(this.leftGroup.relational.outputFields),
            e.merge(this.rightGroup.relational.outputFields),
            e
          );
        }
        canProvideOrdering() {
          return !1;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getChildRequiredProps(e, t) {
          let n = new $(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new uE(new lE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return Q.max(Q.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t);
          return new e(r, this.rightGroup.getOptimized(i), this.constraint.getOptimized());
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new pE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new fE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* Md({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof PE) {
            if (
              this.constraint.left.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.right.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.left,
                this.constraint.right,
                e
              );
            if (
              this.constraint.right.referencedFields.subsetOf(
                this.leftGroup.relational.outputFields
              ) &&
              this.constraint.left.referencedFields.subsetOf(
                this.rightGroup.relational.outputFields
              )
            )
              return yield* this.evaluateScalarEquals(
                t,
                n,
                this.constraint.right,
                this.constraint.left,
                e
              );
          }
          let r = new pE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new fE();
              (n.merge(i),
                n.merge(a),
                Gd(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (qE = class e extends eE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`RelationalLimit`, this.inputGroup.id, this.limit);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new uE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.limit.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* Md({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = af(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (JE = class e extends eE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`RelationalOffset`, this.inputGroup.id, this.offset);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new uE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.offset.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* Md({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = af(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (YE = class e extends _E {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            z(this, `inputGroup`),
            z(this, `definition`),
            (this.inputGroup = e.getGroup()));
          let a = {},
            o = Object.entries(t);
          for (let [e, t] of o) a[e] = t.definition;
          this.definition = {
            type: `array`,
            isNullable: !1,
            definition: { type: `object`, isNullable: !1, definitions: a },
          };
        }
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return q(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $(),
            t = Object.values(this.namedFields);
          for (let n of t) nt(n.collection) || e.add(n);
          return new uE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new fE();
          (e && n.merge(e), t && n.merge(t));
          let r = yield* this.input.evaluate(n),
            i = Object.entries(this.namedFields);
          return {
            type: `array`,
            value: r.tuples.map((e) => {
              let t = {};
              for (let [n, r] of i) t[n] = e.getValue(r);
              return { type: `object`, value: t };
            }),
          };
        }
      }),
      (XE = class e extends _E {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            U(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return q(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return UT.cast(n, this.definition);
        }
      }),
      (ZE = class e extends _E {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            z(this, `inputGroup`),
            z(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return q(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new $();
          return (nt(this.field.collection) || e.add(this.field), new uE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps();
          return new e(
            this.inputGroup.getOptimized(t),
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new fE();
          return (
            e && n.merge(e),
            t && n.merge(t),
            {
              type: `array`,
              value: (yield* this.input.evaluate(n)).tuples.map((e) => e.getValue(this.field)),
            }
          );
        }
      }),
      (QE = { type: 0 }),
      ($E = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: UT.in(n, r, QE) };
        }
      }),
      (eD = { type: 1 }),
      (tD = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            z(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* Md({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: UT.indexOf(n, r, eD) };
        }
      }),
      (nD = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return q(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = Rf(n),
            a = Rf(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (rD = class e extends _E {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            z(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: UT.length(n) };
        }
      }),
      (iD = class e extends _E {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Gd(yield* this.input.evaluate(e, t)) };
        }
      }),
      (aD = { type: 0 }),
      (oD = class e extends _E {
        constructor(e, t) {
          let n = new $();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new $();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            z(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return q(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* Md({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !UT.in(n, r, aD) };
        }
      }),
      (sD = class extends _E {
        constructor(e, t) {
          U(e.name !== nE, `Invalid field name`);
          let n = new $(),
            r = new $();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            z(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return q(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (U(e, `Context must exist`), e.getValue(this.field))
            : (U(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (cD = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new EE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new wE(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new KE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof kE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof KE && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new CE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new hE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof hE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new qE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new JE(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof kE) &&
            e.isSynchronous &&
            e.referencedFields.size === 0 &&
            e.referencedOuterFields.size === 0
          ) {
            let t = e.evaluateSync();
            return this.newScalarConstant(e.definition, t);
          }
          return this.memo.addScalar(e);
        }
        removeUnknown(e, t) {
          if (e.definition.type !== `unknown` || t.type === `unknown`) return e;
          let n = { ...t, isNullable: !0 };
          return this.newScalarCast(e, n);
        }
        newScalarVariable(e, t) {
          let n = new sD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new kE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof iD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof PE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof zE) return this.newScalarEquals(e.left, e.right);
          if (e instanceof LE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof RE) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof FE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof IE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof OE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof BE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new iD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof kE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof kE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof kE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof kE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new OE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof kE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof kE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof kE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof kE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new BE(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new PE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new zE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new LE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new RE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new FE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof sD;
          if (t instanceof sD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new IE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new $E(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new oD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new yE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new bE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new jE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new HE(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new NE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new rD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new tD(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new YE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new ZE(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new nD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new XE(e, t);
          return this.finishScalar(n);
        }
      }),
      (lD = class extends eE {}),
      (uD = class e extends lD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`EnforcerResolve`, this.inputGroup.id, this.fields);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering() {
          return !0;
        }
        canProvideResolvedFields(e) {
          return e.subsetOf(this.fields);
        }
        getInputRequiredProps(e) {
          let t = new $();
          return new uE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * XT).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          U(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (U(e.collection, `Collection required to resolve field`), n.add(e.collection));
          for (let e of t.tuples)
            for (let t of this.fields) {
              let n = e.getValue(t);
              n?.type === `richtext`
                ? this.resolver.preloadRichTextValue(n)
                : n?.type === `vectorsetitem` && this.resolver.preloadVectorSetItemValue(n);
            }
          let r = yield Promise.all(
            Array.from(n).map(async (e) => {
              let n = [];
              for (let r of t.tuples) {
                let t = r.getPointer(e);
                t && n.push(t);
              }
              let r = await e.data.resolveItems(n);
              return (U(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new fE();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (U(a, `Item not found`), U(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (dD = { type: 0 }),
      (fD = class e extends lD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            z(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return q(`EnforcerSort`, this.inputGroup.id, this.ordering);
        }
        getOutputFields() {
          return this.inputGroup.relational.outputFields;
        }
        canProvideOrdering(e) {
          return e.equals(this.ordering);
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new $(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== nE && (nt(e.collection) || t.add(e));
          return new uE(new lE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === nE) {
                let r = n.collection;
                U(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                U(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                U(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!UT.equal(a, o, dD)) {
                if (rt(a) || UT.lessThan(a, o, dD)) return i ? -1 : 1;
                if (rt(o) || UT.greaterThan(a, o, dD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (pD = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            z(this, `memo`, new GE()),
            z(this, `normalizer`, new cD(this.memo)),
            z(this, `explorer`, new UE(this.normalizer)));
        }
        optimize() {
          let e = new xE(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (U(r, `Normalized node not found`), this.createEnforcer(n, r, t));
          for (let r of e.nodes) {
            if (t.canProvide(r)) {
              let e = r.optimize(this, t);
              n.update(r, e);
            }
            t.isMinimal && this.explorer.explore(r);
          }
          return n.cost;
        }
        createEnforcer(e, t, n) {
          if (n.resolvedFields.size > 0) {
            let r = new uD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new fD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (mD = Od(`query-engine`)),
      (hD = class {
        async evalQuery(e, t, n, r = {}) {
          mD.enabled &&
            mD.debug(`Query:
${Zf(e)}`);
          let i = new tE(e, t, r),
            [a, o] = new pD(e, t, i).optimize(),
            s = await a.evaluateAsync(),
            c = Object.entries(o),
            l = [],
            u = jd(
              Nd(
                s.tuples.map((e) => {
                  let t = {},
                    r = {};
                  for (let [a, o] of c) {
                    let s = e.getValue(o);
                    ((t[a] = i.resolveValue(s)), n && (r[a] = s));
                  }
                  return (n && l.push(r), Md(t));
                })
              )
            );
          return n ? [ct(u) ? await u : u, l] : u;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new tE(t, n);
          return jd(
            Nd(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return Md(t);
              })
            )
          );
        }
      }),
      (gD = (() => R_.QueryCache)()),
      (_D = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e),
            (this.maxSize = t),
            z(this, `cache`, new Map()),
            z(this, `serializedCache`, V_ === void 0 ? void 0 : new Map()));
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.state !== `pending` && (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t) {
          let n = ep(e, t),
            r = this.cache.get(n);
          if (r) {
            if (
              (this.cache.delete(n),
              this.cache.set(n, r),
              V_ !== void 0 && this.serializedCache !== void 0 && !yf(n) && r.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(n);
              e !== void 0 && V_.set(gD, n, e);
            }
            return r;
          }
          let i = new C_(() => {
            let r = yf(n),
              i = r ? void 0 : un(gD, n);
            if (i)
              try {
                return this.queryEngine.resolveSerializableQueryResult(i, e, t);
              } catch (e) {
                cn(e, n);
              }
            return V_ !== void 0 && !r
              ? this.queryEngine
                  .serializeableQuery(e, t)
                  .then(([e, t]) => (this.serializedCache?.set(n, t), V_.set(gD, n, t), e))
              : this.queryEngine.query(e, t);
          });
          return (this.cache.set(n, i), this.prune(), i);
        }
      }),
      (vD = new _D(new hD())),
      (yD = `style[data-framer-breakpoint-css]`),
      (bD = `page`),
      (xD = Symbol(`cycle`)),
      (wD = (() => {
        let e = a(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (TD = `u_`),
      (ED = new Set([`rgba8`, `r8`, `rg16f`, `rgba16f`, `rgba32f`])),
      (DD = {
        time: { name: `u_time`, glslType: `float` },
        resolution: { name: `u_resolution`, glslType: `vec2` },
        deltaTime: { name: `u_deltaTime`, glslType: `float` },
        pixelRatio: { name: `u_pixelRatio`, glslType: `float` },
        mousePosition: { name: `u_mousePosition`, glslType: `vec4` },
        mousePointerDown: { name: `u_mousePointerDown`, glslType: `float` },
        mouseHover: { name: `u_mouseHover`, glslType: `float` },
      }),
      (OD = `webglcontextlost`),
      (kD = () => {}),
      (AD = class {
        constructor(e, t, n, r, i = kD, a = []) {
          (z(this, `gl`),
            z(this, `canvas`),
            z(this, `contextLostHandler`),
            z(this, `disposed`, !1),
            z(this, `pixelRatio`, N === void 0 ? 1 : N.devicePixelRatio),
            z(this, `resolutionScale`),
            z(this, `lastBufferWidth`, 0),
            z(this, `lastBufferHeight`, 0),
            z(this, `onContextLost`),
            z(this, `resources`),
            z(this, `textures`, new Map()),
            (this.resolutionScale = r),
            (this.canvas = e),
            (this.onContextLost = i));
          let o = e.getContext(`webgl2`, {
            alpha: !0,
            premultipliedAlpha: !1,
            antialias: !1,
            powerPreference: `default`,
            preserveDrawingBuffer: e instanceof OffscreenCanvas,
          });
          if (!o) throw Error(`WebGL2 not supported`);
          ((this.gl = o),
            (this.contextLostHandler = (e) => {
              (e.preventDefault(), this.dispose(), this.onContextLost?.());
            }),
            e.addEventListener(OD, this.contextLostHandler));
          try {
            this.resources = this.buildResources(t, n, a);
          } catch (t) {
            throw (e.removeEventListener(OD, this.contextLostHandler), t);
          }
          let { mainPass: s, bufferPasses: c } = this.resources;
          (o.clearColor(0, 0, 0, 0),
            c.length === 0 && (o.useProgram(s.program), o.bindVertexArray(s.vao)));
        }
        get customTextureUnitBase() {
          return this.resources.bufferPasses.length;
        }
        buildResources(e, t, n) {
          let { gl: r, canvas: i } = this,
            a = n.find((e) => Vp(e.format));
          if (a && !r.getExtension(`EXT_color_buffer_float`))
            throw Error(
              `Shader buffer "${a.uniformName}" requested format "${a.format}" but the EXT_color_buffer_float extension is not available.`
            );
          let o = !a || !!r.getExtension(`OES_texture_float_linear`),
            s = this.compileShader(r.VERTEX_SHADER, e),
            c,
            l = [],
            u,
            d,
            f,
            p = [];
          try {
            c = this.linkFragmentProgram(s, t);
            for (let e of n) l.push([this.linkFragmentProgram(s, e.fragment), e]);
            ((u = Pp(r, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]))),
              (d = Pp(r, new Float32Array([0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1]))),
              (f = this.buildPassState(c, n, u, d)));
            for (let e = 0; e < l.length; e++) {
              let t = l[e];
              if (!t) continue;
              let [r, i] = t;
              p.push(this.buildBufferPass(r, i, n, o, e, u, d));
            }
            return (
              this.allocateBufferPassStorages(p, i.width, i.height),
              this.bindStaticSamplerUnits(f, p),
              { positionBuffer: u, texCoordBuffer: d, mainPass: f, bufferPasses: p }
            );
          } catch (e) {
            for (let e of p) this.disposeBufferPass(e);
            for (let e = p.length; e < l.length; e++) {
              let t = l[e];
              t && r.deleteProgram(t[0]);
            }
            throw (
              f ? this.disposePass(f) : c && r.deleteProgram(c),
              d && r.deleteBuffer(d),
              u && r.deleteBuffer(u),
              e
            );
          } finally {
            r.deleteShader(s);
          }
        }
        render(e, t, n, r) {
          if (!this.disposed) {
            if (this.resources.bufferPasses.length === 0) {
              this.renderSinglePass(e, t, n, r);
              return;
            }
            this.renderMultiPass(e, t, n, r);
          }
        }
        renderSinglePass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o },
          } = this;
          (this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, this.customTextureUnitBase),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        renderMultiPass(e, t, n, r) {
          let {
            gl: i,
            canvas: a,
            resources: { mainPass: o, bufferPasses: s },
            customTextureUnitBase: c,
          } = this;
          for (let e of s)
            (i.activeTexture(i.TEXTURE0 + e.textureUnit),
              i.bindTexture(i.TEXTURE_2D, e.textures[e.writeIdx === 0 ? 1 : 0]));
          for (let a of s)
            (i.useProgram(a.program),
              i.bindVertexArray(a.vao),
              this.updatePassBuiltIns(a, e, t, r, a.width, a.height),
              this.applyCustomUniforms(a, n, c),
              i.bindFramebuffer(i.FRAMEBUFFER, a.fbos[a.writeIdx]),
              i.viewport(0, 0, a.width, a.height),
              i.clear(i.COLOR_BUFFER_BIT),
              i.drawArrays(i.TRIANGLES, 0, 6),
              i.activeTexture(i.TEXTURE0 + a.textureUnit),
              i.bindTexture(i.TEXTURE_2D, a.textures[a.writeIdx]),
              (a.writeIdx = a.writeIdx === 0 ? 1 : 0));
          (i.useProgram(o.program),
            i.bindVertexArray(o.vao),
            this.updatePassBuiltIns(o, e, t, r, a.width, a.height),
            this.applyCustomUniforms(o, n, c),
            i.bindFramebuffer(i.FRAMEBUFFER, null),
            i.viewport(0, 0, a.width, a.height),
            i.clear(i.COLOR_BUFFER_BIT),
            i.drawArrays(i.TRIANGLES, 0, 6));
        }
        resize() {
          if (this.disposed) return;
          let { canvas: e } = this;
          if (e instanceof OffscreenCanvas)
            throw Error(`resize() is not supported for OffscreenCanvas.`);
          let t = e.offsetWidth,
            n = e.offsetHeight,
            r = N.devicePixelRatio,
            i = Math.max(r * this.resolutionScale, 1);
          this.pixelRatio = i;
          let a = t * i,
            o = n * i;
          if (!(a === this.lastBufferWidth && o === this.lastBufferHeight)) {
            ((this.lastBufferWidth = a),
              (this.lastBufferHeight = o),
              (e.width = a),
              (e.height = o),
              this.gl.viewport(0, 0, a, o));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, a, o);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        resizeOffscreenCanvas(e, t, n) {
          if (!this.disposed) {
            (n !== void 0 && (this.pixelRatio = n), this.gl.viewport(0, 0, e, t));
            try {
              this.allocateBufferPassStorages(this.resources.bufferPasses, e, t);
            } catch (e) {
              throw (this.dispose(), e);
            }
          }
        }
        finish() {
          this.disposed || this.gl.finish();
        }
        dispose() {
          if (
            this.disposed ||
            ((this.disposed = !0),
            this.canvas.removeEventListener(OD, this.contextLostHandler),
            this.gl.isContextLost())
          )
            return;
          let { gl: e, resources: t } = this;
          for (let e of t.bufferPasses) this.disposeBufferPass(e);
          (this.disposePass(t.mainPass),
            e.deleteBuffer(t.positionBuffer),
            e.deleteBuffer(t.texCoordBuffer));
          for (let [, t] of this.textures) e.deleteTexture(t.texture);
          this.textures.clear();
        }
        disposePass(e) {
          let { gl: t } = this;
          (t.deleteVertexArray(e.vao), t.deleteProgram(e.program));
        }
        disposeBufferPass(e) {
          let { gl: t } = this;
          this.disposePass(e);
          for (let n of e.textures) t.deleteTexture(n);
          for (let n of e.fbos) t.deleteFramebuffer(n);
        }
        buildPassState(e, t, n, r) {
          let { gl: i } = this,
            a = i.createVertexArray();
          if (!a) throw Error(`Failed to create vertex array object`);
          (i.bindVertexArray(a), Fp(i, e, n, r), i.bindVertexArray(null));
          let o = Ip(i, e),
            s = new Map();
          for (let n of t) s.set(n.uniformName, i.getUniformLocation(e, n.uniformName));
          return {
            program: e,
            vao: a,
            builtInLocations: o,
            customLocations: new Map(),
            bufferSamplerLocations: s,
          };
        }
        buildBufferPass(e, t, n, r, i, a, o) {
          let s = this.buildPassState(e, n, a, o),
            { gl: c } = this,
            l = Bp(c, t.format),
            u = Vp(t.format) && !r ? c.NEAREST : c.LINEAR,
            d = Lp(c, u),
            f = Lp(c, u),
            p = Rp(c, d),
            m = Rp(c, f);
          return (
            c.bindFramebuffer(c.FRAMEBUFFER, null),
            c.bindTexture(c.TEXTURE_2D, null),
            {
              ...s,
              uniformName: t.uniformName,
              resolutionScale: t.resolutionScale,
              format: t.format,
              internalFormat: l.internalFormat,
              uploadFormat: l.uploadFormat,
              pixelType: l.pixelType,
              width: 0,
              height: 0,
              textures: [d, f],
              fbos: [p, m],
              writeIdx: 0,
              textureUnit: i,
            }
          );
        }
        bindStaticSamplerUnits(e, t) {
          let { gl: n } = this,
            r = [e, ...t];
          for (let e of r) {
            n.useProgram(e.program);
            for (let r of t) {
              let t = e.bufferSamplerLocations.get(r.uniformName);
              t && n.uniform1i(t, r.textureUnit);
            }
          }
        }
        allocateBufferPassStorages(e, t, n) {
          for (let r of e) this.allocateBufferPassStorage(r, t, n);
        }
        allocateBufferPassStorage(e, t, n) {
          let { gl: r } = this,
            i = Math.max(1, Math.floor(t * e.resolutionScale)),
            a = Math.max(1, Math.floor(n * e.resolutionScale));
          if (i === e.width && a === e.height) return;
          ((e.width = i), (e.height = a));
          for (let t of e.textures)
            (r.bindTexture(r.TEXTURE_2D, t),
              r.texImage2D(
                r.TEXTURE_2D,
                0,
                e.internalFormat,
                i,
                a,
                0,
                e.uploadFormat,
                e.pixelType,
                null
              ));
          r.bindTexture(r.TEXTURE_2D, null);
          let [o, s, c, l] = r.getParameter(r.VIEWPORT);
          for (let t of e.fbos)
            (r.bindFramebuffer(r.FRAMEBUFFER, t),
              zp(r, e.uniformName, e.format),
              r.viewport(0, 0, i, a),
              r.clear(r.COLOR_BUFFER_BIT));
          (r.bindFramebuffer(r.FRAMEBUFFER, null), r.viewport(o, s, c, l));
        }
        compileShader(e, t) {
          let { gl: n } = this,
            r = n.createShader(e);
          if (!r) throw Error(`Failed to create shader`);
          if (
            (n.shaderSource(r, t), n.compileShader(r), !n.getShaderParameter(r, n.COMPILE_STATUS))
          ) {
            let t = n.getShaderInfoLog(r);
            n.deleteShader(r);
            let i = e === n.VERTEX_SHADER ? `Vertex` : `Fragment`;
            throw Error(`${i} shader compilation failed: ${t}`);
          }
          return r;
        }
        linkFragmentProgram(e, t) {
          let { gl: n } = this,
            r = this.compileShader(n.FRAGMENT_SHADER, t);
          try {
            let t = n.createProgram();
            if (!t) throw Error(`Failed to create program`);
            if (
              (n.attachShader(t, e),
              n.attachShader(t, r),
              n.linkProgram(t),
              !n.getProgramParameter(t, n.LINK_STATUS))
            ) {
              let e = n.getProgramInfoLog(t);
              throw (n.deleteProgram(t), Error(`Program linking failed: ${e}`));
            }
            return t;
          } finally {
            n.deleteShader(r);
          }
        }
        setUniform(e, t) {
          if (e !== null)
            switch (t.type) {
              case `boolean`:
                this.gl.uniform1f(e, t.value ? 1 : 0);
                break;
              case `float`:
                this.gl.uniform1f(e, t.value);
                break;
              case `int`:
                this.gl.uniform1i(e, t.value);
                break;
              case `vec2`:
                this.gl.uniform2fv(e, t.value);
                break;
              case `vec4`:
                this.gl.uniform4fv(e, t.value);
                break;
              case `vec4[]`:
                this.gl.uniform4fv(e, t.value.flat());
                break;
            }
        }
        bindTexture(e, t, n) {
          let { gl: r, textures: i } = this,
            a = i.get(e),
            o = !a;
          if (o) {
            let t = r.createTexture();
            if (!t) return;
            ((a = { texture: t, image: null }), i.set(e, a));
          }
          a &&
            (r.activeTexture(r.TEXTURE0 + n),
            r.bindTexture(r.TEXTURE_2D, a.texture),
            (o || a.image !== t) &&
              (a.image instanceof ImageBitmap && a.image.close(),
              (a.image = t),
              r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, t),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_S, r.CLAMP_TO_EDGE),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_WRAP_T, r.CLAMP_TO_EDGE),
              r.generateMipmap(r.TEXTURE_2D),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MIN_FILTER, r.LINEAR_MIPMAP_LINEAR),
              r.texParameteri(r.TEXTURE_2D, r.TEXTURE_MAG_FILTER, r.LINEAR)));
        }
        applyCustomUniforms(e, t, n) {
          if (!t) return;
          let { gl: r } = this,
            i = n;
          for (let n in t) {
            let a = t[n];
            if (!a) continue;
            let o = e.customLocations.get(n);
            (o === void 0 &&
              ((o = r.getUniformLocation(e.program, n)), e.customLocations.set(n, o)),
              a.type === `sampler2D`
                ? (this.bindTexture(n, a.value, i), o !== null && r.uniform1i(o, i), i++)
                : this.setUniform(o, a));
          }
        }
        updatePassBuiltIns(e, t, n, r, i, a) {
          let { gl: o, pixelRatio: s } = this,
            c = e.builtInLocations;
          (c[DD.time.name] !== null && o.uniform1f(c[DD.time.name], t),
            c[DD.resolution.name] !== null && o.uniform2f(c[DD.resolution.name], i, a),
            c[DD.deltaTime.name] !== null && o.uniform1f(c[DD.deltaTime.name], n),
            c[DD.pixelRatio.name] !== null && o.uniform1f(c[DD.pixelRatio.name], s),
            c[DD.mousePosition.name] !== null && o.uniform4fv(c[DD.mousePosition.name], r.position),
            c[DD.mousePointerDown.name] !== null &&
              o.uniform1f(c[DD.mousePointerDown.name], r.pointerDown),
            c[DD.mouseHover.name] !== null && o.uniform1f(c[DD.mouseHover.name], r.hover));
        }
      }),
      (jD = `_heightmap`),
      (MD = `_length`),
      (ND = `_buffer`),
      (PD = /\W/gu),
      (FD = `#version 300 es`),
      (ID = `precision highp float;`),
      (LD = `in vec2 v_uv;`),
      (RD = `out vec4 fragColor;`),
      (zD = 0.5),
      (BD = `rgba8`),
      (VD = `__framer_shaderConfig__`),
      (HD = b(function ({ src: e }) {
        return e
          ? g(Eo, { image: { src: e, fit: `fill`, loading: `lazy` }, draggable: !1, alt: `` })
          : null;
      })),
      (UD = 30),
      (WD = 20),
      (GD = class {
        constructor() {
          (z(this, `loaders`, new Map()), z(this, `generated`, new Map()));
        }
        load(e, t) {
          let n = this.loaders.get(e);
          if (n) return n;
          let r = t();
          return (
            r.catch(() => {
              this.loaders.get(e) === r && this.loaders.delete(e);
            }),
            sm(this.loaders, UD),
            this.loaders.set(e, r),
            r
          );
        }
        generate(e, t) {
          let n = this.generated.get(e);
          if (n) return n;
          let r = t();
          if (r) return (sm(this.generated, WD), this.generated.set(e, r), r);
        }
        clear() {
          (this.loaders.clear(), this.generated.clear());
        }
        get loadedSize() {
          return this.loaders.size;
        }
        get generatedSize() {
          return this.generated.size;
        }
      }),
      (KD = new GD()),
      (qD = 1024),
      (JD = { position: `absolute`, inset: 0, width: `100%`, height: `100%` }),
      (YD = 0.001),
      (XD = -999),
      (ZD = { position: [XD, XD, 0, 0], pointerDown: 0, hover: 0 }),
      (QD = `.svg`),
      ($D = 4096),
      (eO = {
        display: `block`,
        width: `100%`,
        height: `100%`,
        objectFit: `cover`,
        position: `absolute`,
        inset: 0,
      }),
      (tO = { position: `absolute`, inset: 0 }),
      (nO = b(function ({ src: e, hidden: t = !1, onDisplaySrcChange: n }) {
        let [i, a] = u(e),
          [o, c] = u(void 0),
          l = r(null),
          d = r(n);
        j(() => {
          d.current = n;
        }, [n]);
        let f = r(!0);
        (j(() => {
          if (f.current) {
            f.current = !1;
            return;
          }
          m.current || d.current?.();
        }, [i]),
          s(() => {
            if (e === i) return;
            let t = !0;
            if (e) {
              let n = new Image();
              n.src = e;
              let r = () => (t ? p(() => a(e)) : void 0);
              typeof n.decode == `function` ? n.decode().then(r).catch(r) : (n.onload = r);
            } else p(() => a(void 0));
            return () => {
              t = !1;
            };
          }, [e, i]));
        let m = r(i);
        return (
          j(() => {
            (i !== m.current && m.current && c(m.current), (m.current = i));
          }, [i]),
          s(() => {
            let e = l.current;
            if (!e || !o) return;
            let t = !1,
              n = e.animate([{ opacity: 0 }, { opacity: 1 }], {
                duration: 300,
                easing: `ease-in-out`,
                fill: `forwards`,
              });
            return (
              (n.onfinish = () => {
                t || (p(() => c(void 0)), d.current?.());
              }),
              () => {
                ((t = !0), n.cancel());
              }
            );
          }, [o]),
          i
            ? w(`div`, {
                style: { ...JD, opacity: t ? 0 : 1, pointerEvents: t ? `none` : void 0 },
                children: [
                  o &&
                    g(
                      `img`,
                      { src: o, decoding: `async`, style: eO, draggable: !1, alt: `` },
                      `prev-${o}`
                    ),
                  g(
                    `div`,
                    {
                      ref: o ? l : void 0,
                      style: tO,
                      children: g(`img`, {
                        src: i,
                        style: eO,
                        decoding: `async`,
                        draggable: !1,
                        alt: ``,
                      }),
                    },
                    i
                  ),
                ],
              })
            : null
        );
      })),
      (rO = `#version 300 es
precision highp float;

in vec2 a_position;
in vec2 a_texCoord;

out vec2 v_uv;

void main() {
    v_uv = a_texCoord;
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`),
      (iO = `#version 300 es
precision highp float;

in vec2 v_uv;
out vec4 fragColor;

void main() {
    fragColor = vec4(0.0);
}
`),
      (aO = { noSlot: 0, singleFrame: 1, animate: 2 }),
      (oO = a(null)),
      (sO = 300),
      (cO = { display: `block`, width: `100%`, height: `100%` }),
      (lO = 250),
      (uO = b(function ({
        mode: e,
        fallbackImage: t,
        skipInitialFallback: n,
        vertexShader: i,
        fragmentShader: a,
        animated: o,
        resolutionScale: c,
        uniforms: l,
        onError: d,
        onReady: f,
        singleFrame: m,
        onContextLost: h,
        onUniformResolutionSucceeded: _,
        onUniformResolutionFailed: v,
        heightmapSource: y,
        mouseDataRef: b,
        buffers: x,
      }) {
        let [C, T] = u(!1),
          [E, O] = u(!1),
          k = e === `progressive`,
          A = !!t,
          M = !!(n && A),
          P = k && A && !M,
          F = jm(P),
          ee = r(f);
        j(() => {
          ee.current = f;
        }, [f]);
        let I = S(() => {
          (p(() => T(!0)), ee.current?.());
        }, []);
        s(() => {
          if (!k || !C || !F) return;
          let e = N.setTimeout(() => {
            p(() => O(!0));
          }, lO);
          return () => {
            clearTimeout(e);
          };
        }, [k, F, C]);
        let te = P && !F,
          ne = m || te || (k && !M && !E),
          re = A && !M && (!F || !C);
        return w(D, {
          children: [
            g(`div`, {
              style: { ...JD, opacity: te ? 0 : 1 },
              children: g(Mm, {
                vertexShader: i,
                fragmentShader: a,
                animated: o,
                resolutionScale: c,
                singleFrame: ne,
                uniforms: l,
                onError: d,
                onReady: I,
                onContextLost: h,
                onUniformResolutionSucceeded: _,
                onUniformResolutionFailed: v,
                heightmapSource: y,
                mouseDataRef: b,
                buffers: x,
              }),
            }),
            t &&
              !M &&
              g(`div`, {
                style: {
                  ...JD,
                  opacity: re ? 1 : 0,
                  transition: `opacity 200ms ease-in-out`,
                  pointerEvents: `none`,
                },
                children: g(HD, { src: t }),
              }),
          ],
        });
      })),
      (pO = { duration: 0 }),
      (mO = { low: 0, medium: 1, high: 2 }),
      (hO = y(function (
        {
          mode: e = `instant`,
          fallbackImage: t,
          skipInitialFallback: n,
          placeholder: r,
          style: i,
          width: a,
          height: o,
          vertexShader: c,
          fragmentShader: l,
          animated: d,
          uniforms: f,
          onError: m,
          onReady: h,
          resolutionScale: _,
          poolId: v,
          isSelected: y = !1,
          isMultiSelected: b = !1,
          isPreviewActive: x = !1,
          heightmapSource: C,
          mouse: T,
          buffers: E,
          ...D
        },
        O
      ) {
        let A = xs(O),
          M = gr(),
          N = Y.current() === Y.preview && M === `preview`,
          P = !!(t && (n || N)),
          F = Rl(),
          ee = Rm(A, F ? void 0 : T),
          [I, te] = u(P);
        jS(
          A,
          S((e) => {
            p(() => te(e.isIntersecting));
          }, []),
          { threshold: 0, enabled: !0 }
        );
        let ne = k(),
          re = Bm(v ?? ne, y, I);
        s(() => {
          performance.mark?.(`shader_register`);
        }, []);
        let {
            isFallbackOnly: L,
            effectiveAnimated: ie,
            effectiveSingleFrame: ae,
            effectiveMode: oe,
            shouldSkipFallbackOverlay: se,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
          } = Am(re, y, b, I, e, d, P, x),
          [de, R] = u(!1);
        j(() => {
          L && p(() => R(!1));
        }, [L]);
        let fe = S(() => {
            (p(() => R(!0)), h?.());
          }, [h]),
          pe = {
            vertexShader: c,
            fragmentShader: l,
            uniforms: f,
            resolutionScale: _,
            onError: m,
            onContextLost: ce,
            onUniformResolutionSucceeded: le,
            onUniformResolutionFailed: ue,
            heightmapSource: C,
            buffers: E,
          },
          me = { style: i, width: a, height: o, ...D };
        if (F) {
          let e = !L && (P || de);
          return w(gO, {
            ref: A,
            ...me,
            children: [
              !L &&
                g(uO, {
                  mode: oe,
                  skipInitialFallback: se,
                  onReady: fe,
                  ...pe,
                  animated: ie,
                  singleFrame: ae,
                  mouseDataRef: ee,
                }),
              g(nO, { src: t, hidden: e }),
              L && !t && r,
            ],
          });
        }
        return L
          ? g(gO, { ref: A, ...me, children: se && !I ? null : g(HD, { src: t }) })
          : g(gO, {
              ref: A,
              ...me,
              children: g(uO, {
                mode: oe,
                fallbackImage: t,
                skipInitialFallback: se,
                onReady: h,
                ...pe,
                animated: ie,
                singleFrame: ae,
                mouseDataRef: ee,
              }),
            });
      })),
      (gO = y(function ({ children: e, style: t, ...n }, r) {
        return g(wS, {
          ref: r,
          __fromCanvasComponent: !0,
          style: { borderRadius: `inherit`, cornerShape: `inherit`, ...t, overflow: `hidden` },
          ...n,
          componentType: `Shader`,
          children: e,
        });
      })),
      (_O = new Set([
        `visibleVariantId`,
        `obscuredVariantId`,
        `threshold`,
        `animateOnce`,
        `variantAppearEffectEnabled`,
        `targets`,
        `exitTarget`,
        `scrollDirection`,
      ])),
      (vO = { inputRange: [], outputRange: [] }),
      (yO = (e) =>
        h.forwardRef((t, n) => {
          if (Y.current() === Y.canvas) return g(e, { ...t, ref: n });
          let [r, i] = Sc(t, _O),
            {
              visibleVariantId: a,
              obscuredVariantId: o,
              animateOnce: s,
              threshold: c,
              variantAppearEffectEnabled: l,
              targets: u,
              exitTarget: d,
              scrollDirection: f,
            } = r,
            [p, m] = h.useState(o),
            _ = h.useRef(!1),
            v = xs(n);
          Ts(
            v,
            (e) => {
              r.targets ||
                r.scrollDirection ||
                (s && _.current === !0) ||
                (_.current !== e &&
                  ((_.current = e),
                  h.startTransition(() => {
                    m(e ? a : o);
                  })));
            },
            { enabled: l, animateOnce: s, threshold: { y: c } }
          );
          let y = Nt(),
            b = h.useRef(y);
          return (
            h.useEffect(() => {
              if (f || !u) return;
              b.current !== y && ((b.current = y), h.startTransition(() => m(o)));
              let e = {},
                t;
              return F((n, { y: r }) => {
                if (!u[0] || (u[0].ref && !u[0].ref.current)) return;
                let { inputRange: i, outputRange: a } = Vm(u, (c ?? 0) * r.containerLength, d);
                if (i.length === 0 || i.length !== a.length) return;
                let o = Math.floor(ue(r.current, i, a));
                if (s && e[o]) return;
                e[o] = !0;
                let l = u[o]?.target ?? void 0;
                l !== t &&
                  ((t = l),
                  h.startTransition(() => {
                    m(l);
                  }));
              });
            }, [y, s, c, u, t.variant, f, d]),
            Jc(f, (e) => h.startTransition(() => m(e)), { enabled: l, repeat: !s }),
            Pt(() => {
              if (!l) return;
              let e = !r.targets && !r.scrollDirection ? r.obscuredVariantId : void 0;
              h.startTransition(() => m(e));
            }),
            !(`variantAppearEffectEnabled` in r) || l === !0
              ? g(e, { ...i, variant: p ?? t.variant, ref: v })
              : g(e, { ...i })
          );
        })),
      (bO = h.createContext(void 0)),
      (xO = () => h.useContext(bO)),
      (SO = {
        Arial: {
          Regular: { selector: `Arial`, weight: void 0 },
          Black: { selector: `Arial-Black`, weight: void 0 },
          Narrow: { selector: `Arial Narrow`, weight: void 0 },
          "Rounded Bold": { selector: `Arial Rounded MT Bold`, weight: void 0 },
        },
        Avenir: {
          Book: { selector: `Avenir`, weight: void 0 },
          Light: { selector: `Avenir-Light`, weight: void 0 },
          Medium: { selector: `Avenir-Medium`, weight: void 0 },
          Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
          Black: { selector: `Avenir-Black`, weight: void 0 },
        },
        "Avenir Next": {
          Regular: { selector: `Avenir Next`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNext-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNext-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
        },
        "Avenir Next Condensed": {
          Regular: { selector: `Avenir Next Condensed`, weight: void 0 },
          "Ultra Light": { selector: `AvenirNextCondensed-UltraLight`, weight: void 0 },
          Medium: { selector: `AvenirNextCondensed-Medium`, weight: void 0 },
          "Demi Bold": { selector: `AvenirNextCondensed-DemiBold`, weight: void 0 },
          Heavy: { selector: `AvenirNextCondensed-Heavy`, weight: void 0 },
        },
        Baskerville: {
          Regular: { selector: `Baskerville`, weight: void 0 },
          "Semi Bold": { selector: `Baskerville-SemiBold`, weight: void 0 },
        },
        "Bodoni 72": {
          Book: { selector: `Bodoni 72`, weight: void 0 },
          Oldstyle: { selector: `Bodoni 72 Oldstyle`, weight: void 0 },
          Smallcaps: { selector: `Bodoni 72 Smallcaps`, weight: void 0 },
        },
        Courier: { Regular: { selector: `Courier`, weight: void 0 } },
        "Courier New": { Regular: { selector: `Courier New`, weight: void 0 } },
        Futura: {
          Medium: { selector: `Futura`, weight: void 0 },
          Condensed: { selector: `Futura-CondensedMedium`, weight: void 0 },
          "Condensed ExtraBold": { selector: `Futura-CondensedExtraBold`, weight: void 0 },
        },
        Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
        "Gill Sans": {
          Regular: { selector: `Gill Sans`, weight: void 0 },
          Light: { selector: `GillSans-Light`, weight: void 0 },
          SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
          UltraBold: { selector: `GillSans-UltraBold`, weight: void 0 },
        },
        Helvetica: {
          Regular: { selector: `Helvetica`, weight: void 0 },
          Light: { selector: `Helvetica-Light`, weight: void 0 },
          Bold: { selector: `Helvetica-Bold`, weight: void 0 },
          Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
          "Light Oblique": { selector: `Helvetica-LightOblique`, weight: void 0 },
          "Bold Oblique": { selector: `Helvetica-BoldOblique`, weight: void 0 },
        },
        "Helvetica Neue": {
          Regular: { selector: `Helvetica Neue`, weight: void 0 },
          UltraLight: { selector: `HelveticaNeue-UltraLight`, weight: void 0 },
          Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
          Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
          Medium: { selector: `HelveticaNeue-Medium`, weight: void 0 },
          Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
          Italic: { selector: `HelveticaNeue-Italic`, weight: void 0 },
          "UltraLight Italic": { selector: `HelveticaNeue-UltraLightItalic`, weight: void 0 },
          "Thin Italic": { selector: `HelveticaNeue-ThinItalic`, weight: void 0 },
          "Light Italic": { selector: `HelveticaNeue-LightItalic`, weight: void 0 },
          "Medium Italic": { selector: `HelveticaNeue-MediumItalic`, weight: void 0 },
          "Bold Italic": { selector: `HelveticaNeue-BoldItalic`, weight: void 0 },
          "Condensed Bold": { selector: `HelveticaNeue-CondensedBold`, weight: void 0 },
          "Condensed Black": { selector: `HelveticaNeue-CondensedBlack`, weight: void 0 },
        },
        "Hoefler Text": { Regular: { selector: `Hoefler Text`, weight: void 0 } },
        Impact: { Regular: { selector: `Impact`, weight: void 0 } },
        "Lucida Grande": { Regular: { selector: `Lucida Grande`, weight: void 0 } },
        Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
        Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
        Optima: {
          Regular: { selector: `Optima`, weight: void 0 },
          ExtraBlack: { selector: `Optima-ExtraBlack`, weight: void 0 },
        },
        Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
        "SF Pro Display": {
          Regular: { selector: `__SF-UI-Display-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
          Italic: { selector: `__SF-UI-Display-Italic__`, weight: 400 },
          "Ultralight Italic": { selector: `__SF-UI-Display-Ultralight-Italic__`, weight: 100 },
          "Thin Italic": { selector: `__SF-UI-Display-Thin-Italic__`, weight: 200 },
          "Light Italic": { selector: `__SF-UI-Display-Light-Italic__`, weight: 300 },
          "Medium Italic": { selector: `__SF-UI-Display-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Display-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Display-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Display-Heavy-Italic__`, weight: 800 },
          "Black Italic": { selector: `__SF-UI-Display-Black-Italic__`, weight: 900 },
        },
        "SF Pro Display Condensed": {
          Regular: { selector: `__SF-UI-Display-Condensed-Regular__`, weight: 400 },
          Ultralight: { selector: `__SF-UI-Display-Condensed-Ultralight__`, weight: 100 },
          Thin: { selector: `__SF-UI-Display-Condensed-Thin__`, weight: 200 },
          Light: { selector: `__SF-UI-Display-Condensed-Light__`, weight: 300 },
          Medium: { selector: `__SF-UI-Display-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Display-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Display-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Display-Condensed-Heavy__`, weight: 800 },
          Black: { selector: `__SF-UI-Display-Condensed-Black__`, weight: 900 },
        },
        "SF Pro Text": {
          Regular: { selector: `__SF-UI-Text-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
          Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
          "Light Italic": { selector: `__SF-UI-Text-Light-Italic__`, weight: 200 },
          "Medium Italic": { selector: `__SF-UI-Text-Medium-Italic__`, weight: 500 },
          "Semibold Italic": { selector: `__SF-UI-Text-Semibold-Italic__`, weight: 600 },
          "Bold Italic": { selector: `__SF-UI-Text-Bold-Italic__`, weight: 700 },
          "Heavy Italic": { selector: `__SF-UI-Text-Heavy-Italic__`, weight: 800 },
        },
        "SF Pro Text Condensed": {
          Regular: { selector: `__SF-UI-Text-Condensed-Regular__`, weight: 400 },
          Light: { selector: `__SF-UI-Text-Condensed-Light__`, weight: 200 },
          Medium: { selector: `__SF-UI-Text-Condensed-Medium__`, weight: 500 },
          Semibold: { selector: `__SF-UI-Text-Condensed-Semibold__`, weight: 600 },
          Bold: { selector: `__SF-UI-Text-Condensed-Bold__`, weight: 700 },
          Heavy: { selector: `__SF-UI-Text-Condensed-Heavy__`, weight: 800 },
        },
        Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
        Times: { Regular: { selector: `Times`, weight: void 0 } },
        "Times New Roman": { Regular: { selector: `Times New Roman`, weight: void 0 } },
        Trebuchet: { Regular: { selector: `Trebuchet MS`, weight: void 0 } },
        Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
      }),
      (CO = {
        "__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
        "__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
        "__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
        "__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
        "__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
        "__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
        "__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
        "__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
        "__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
        "__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
        "__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
        "__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
        "__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
        "__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
        "__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
        "__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
        "__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
        "__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
        "__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
        "__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
        "__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
        "__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
        "__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
        "__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
        "__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
        "__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
        "__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
        "__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
        "__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
        "__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
        "__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
        "__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
        "__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
        "__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
        "__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
        "__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
        "__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
        "__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
        "__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
        "__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
        "__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
        "__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
        "__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
        "__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
        "__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
        "__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
        "__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
        "__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
        "__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
        "__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
        "__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
        "__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
        "__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
        "__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
        "__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
        "__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
        "__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
        "__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
        "__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
        "__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
        "__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
        "__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
        "__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
        "__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
        "__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
        "__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
        "__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
        "__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
        "__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
        "__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
        "__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
        "__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
        "__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
        "__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
        "__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
      }),
      (wO = SO),
      (TO = `System Default`),
      (EO = class {
        constructor() {
          (z(this, `name`, `local`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()),
            z(this, `fontAliasBySelector`, new Map()),
            z(this, `fontAliases`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.addFontFamily(t), t);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        importFonts() {
          let e = [];
          for (let t of Object.keys(wO)) {
            let n = wO[t];
            if (!n) continue;
            let r = this.createFontFamily(t);
            for (let e of Object.keys(n)) {
              let t = n[e];
              if (!t) continue;
              let { selector: i, weight: a } = t,
                o = { variant: e, selector: i, weight: a, family: r, cssFamilyName: r.name };
              r.fonts.push(o);
            }
            e.push(...r.fonts);
          }
          for (let [e, t] of Object.entries(CO)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: TO, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = Um(i, r),
                a = `__SystemDefault-${i}-${r}__`,
                o = {
                  variant: n,
                  selector: a,
                  style: r,
                  weight: i,
                  family: e,
                  cssFamilyName: e.name,
                };
              (e.fonts.push(o),
                t.set(
                  a,
                  `system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`
                ));
            }
          return { fontFamily: e, aliases: t };
        }
        getFontAliasBySelector(e) {
          return this.fontAliasBySelector.get(e) || null;
        }
        getFontSelectorByAlias(e) {
          return this.fontAliases.get(e) || null;
        }
        isFontFamilyAlias(e) {
          return !!(e && /^__.*__$/u.exec(e));
        }
      }),
      (DO = {
        100: `Thin`,
        200: `Extra Light`,
        300: `Light`,
        400: `Normal`,
        500: `Medium`,
        600: `Semi Bold`,
        700: `Bold`,
        800: `Extra Bold`,
        900: `Black`,
      }),
      (OO = class extends Map {
        constructor() {
          (super(...arguments), z(this, `_hash`, 0));
        }
        get hash() {
          return this._hash;
        }
        set(e, t) {
          return (this._hash++, super.set(e, t));
        }
        delete(e) {
          return (this._hash++, super.delete(e));
        }
        clear() {
          return (this._hash++, super.clear());
        }
      }),
      (AO = `Variable`),
      (jO = `BI;`),
      (MO = class {
        constructor() {
          (z(this, `name`, `builtIn`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()),
            z(this, `assetByKey`, new Map()));
        }
        importFonts(e) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetByKey.clear());
          let t = [];
          for (let n of e) {
            if (!this.isValidBuiltInFont(n)) continue;
            let { properties: e } = n,
              r = e.font.fontFamily,
              i = this.createFontFamily(r, e.font.foundryName, e.font.fontVersion),
              a = e.font.openTypeData,
              o = e.font.variationAxes,
              s = Array.isArray(o),
              c = s ? `variable` : e.font.fontSubFamily || `regular`,
              l = Jm(n),
              u = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: Zm(a),
                variationAxes: Qm(o),
                category: e.font.fontCategory,
                weight: th(c),
                style: rh(c),
                cssFamilyName: Ym(r, s),
              };
            (i.fonts.push(u), this.assetByKey.set(n.key, n), t.push(u));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = th(e.variant),
                r = th(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          return { weight: NO[nh(e)], style: rh(e) };
        }
        getFontBySelector(e) {
          let t = this.parseSelector(e);
          if (!t) return;
          let n = this.getFontFamilyByName(t.name);
          if (n) return n.fonts.find((t) => t.selector === e);
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        createFontFamily(e, t, n) {
          let r = this.byFamilyName.get(e);
          if (r && r.version === n) return r;
          let i = { source: this.name, name: e, fonts: [], foundryName: t, version: n };
          return (this.addFontFamily(i), i);
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Zm(t)
            ? t?.map((e) => {
                if ($m(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        isValidBuiltInFont(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font ||
            !e.properties.font.fontVersion ||
            !e.properties.font.fontFamily
            ? !1
            : `fontFamily` in e.properties.font;
        }
        createSelector(e, t, n) {
          return `${jO}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(jO)) return null;
          let [t, n] = e.split(jO);
          if (n === void 0) return null;
          let [r, i, a] = n.split(`/`);
          return !r || !i || !a
            ? null
            : {
                name: r,
                variant: i,
                source: this.name,
                isVariable: i.toLowerCase().includes(`variable`),
              };
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
      }),
      (NO = {
        ultralight: 100,
        "ultralight-italic": 100,
        thin: 200,
        "thin-italic": 200,
        demi: 200,
        light: 300,
        "light-italic": 300,
        normal: 350,
        base: 400,
        regular: 400,
        classic: 400,
        "regular-slanted": 400,
        italic: 400,
        oblique: 400,
        dense: 400,
        brukt: 300,
        book: 400,
        "book-italic": 400,
        text: 400,
        "text-italic": 400,
        medium: 500,
        solid: 500,
        "medium-oblique": 500,
        "medium-italic": 500,
        mittel: 500,
        semibold: 600,
        "semibold-italic": 600,
        bold: 700,
        "bold-italic": 700,
        "bold-oblique": 700,
        fett: 700,
        ultrabold: 800,
        "ultrabold-italic": 800,
        extrabold: 800,
        "extrabold-italic": 800,
        black: 900,
        extralight: 100,
        "extralight-italic": 100,
        "black-italic": 900,
        "extra-italic": 900,
        "extra-italic-bold": 900,
        satt: 900,
        heavy: 900,
        "heavy-italic": 900,
        serif: 100,
        school: 200,
        expanded: 300,
        gothique: 500,
        "dense-light": 200,
        "dense-regular": 300,
        "dense-medium": 400,
        "dense-bold": 500,
        "solid-light": 600,
        "solid-regular": 700,
        "solid-medium": 800,
        "solid-bold": 900,
        53: 400,
        55: 600,
        "narrow-regular": 350,
        "narrow-black": 850,
        variable: 1e3,
        "variable-italic": 1e3,
      }),
      (PO = Od(`custom-font-source`)),
      (FO = `CUSTOM;`),
      (IO = `CUSTOMV2;`),
      (LO = class e {
        constructor() {
          (z(this, `name`, `custom`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()),
            z(this, `assetsByKey`, new Map()));
        }
        deprecatedImportFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = [];
          for (let r of t) {
            if (!this.isValidCustomFontAsset(r)) continue;
            let t = r.properties?.font.variationAxes,
              i = Array.isArray(t),
              a = fh(r.properties),
              o = this.createFontFamily(a),
              s = r.properties?.font.openTypeData,
              c = i ? `variable` : this.inferVariantName(a),
              l = Jm(r),
              u = e.createLegacySelector(a),
              { family: d, variant: f } = ph(r.properties.font),
              p = e.createSelector(d, f),
              m = {
                assetKey: r.key,
                family: o,
                selector: u,
                variant: c,
                file: l,
                hasOpenTypeFeatures: Zm(s),
                variationAxes: Qm(t),
                owner: gh(r),
                cssFamilyName: e.cssFontFamilyFromSelector(u),
                alternativeSelectors: {
                  [p]: { variant: f, cssFamilyName: e.cssFontFamilyFromSelector(p) },
                },
              };
            (o.fonts.push(m), this.assetsByKey.set(r.key, r), n.push(...o.fonts));
          }
          return n;
        }
        importFonts(t, n) {
          if (!n) return this.deprecatedImportFonts(t);
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let r = {};
          for (let n of t) {
            if (!this.isValidCustomFontAsset(n)) continue;
            let { family: t, variant: i, weight: a, style: o } = ph(n.properties.font),
              s = n.properties.font.variationAxes,
              c = Array.isArray(s),
              l = n.properties.font.openTypeData,
              u = Jm(n),
              d = gh(n),
              f = fh(n.properties),
              p = e.createLegacySelector(f),
              m = this.createFontFamily(t),
              h = e.createSelector(m.name, i),
              g = {
                assetKey: n.key,
                family: m,
                selector: h,
                variant: i,
                weight: a,
                style: o,
                file: u,
                hasOpenTypeFeatures: Zm(l),
                variationAxes: Qm(s),
                owner: d,
                alternativeSelectors: {
                  [p]: {
                    variant: c ? `variable` : this.inferVariantName(f),
                    cssFamilyName: e.cssFontFamilyFromSelector(p),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(h),
              },
              _ = dh(m.fonts, g);
            if (_?.projectDuplicate) g.owner === `project` && ((m.fonts[_.index] = g), (r[h] = g));
            else if (_) {
              PO.debug(`Duplicate font found for:`, g, `with existing font:`, _.existingFont);
              let e = _.existingFont,
                t = g.file?.endsWith(`.woff2`) ?? !1,
                n = e.file?.endsWith(`.woff2`) ?? !1;
              t && !n && ((m.fonts[_.index] = g), (r[h] = g));
            } else (m.fonts.push(g), (r[h] = g));
            this.assetsByKey.set(n.key, n);
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && hh(e);
          return Object.values(r);
        }
        static createSelector(e, t) {
          return `${IO}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${FO}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            U(ch(e), `Selector must be a custom font selector`),
            uh(e) ? e.slice(FO.length) : e.slice(IO.length)
          );
        }
        isValidCustomFontAsset(e) {
          return !e.mimeType.startsWith(`font/`) ||
            e.properties?.kind !== `font` ||
            !e.properties.font
            ? !1
            : `fontFamily` in e.properties.font;
        }
        getOpenTypeFeatures(e) {
          U(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return Zm(t)
            ? t?.map((e) => {
                if ($m(e)) return { tag: e.tag, coverage: e.coverage };
              })
            : [];
        }
        inferVariantName(e) {
          let t = [
              `thin`,
              `ultra light`,
              `extra light`,
              `light`,
              `normal`,
              `medium`,
              `semi bold`,
              `bold`,
              `extra bold`,
              `black`,
            ],
            n = [...t.map((e) => `${e} italic`), ...t],
            r = e.toLowerCase(),
            i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
            a = n.find((e) => i.includes(e) || i.includes(e.replace(/\s+/gu, ``)));
          return a ? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase()) : `Regular`;
        }
        createFontFamily(e) {
          let t = this.byFamilyName.get(e);
          if (t) return t;
          let n = { source: this.name, name: e, fonts: [] };
          return (this.addFontFamily(n), n);
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) || null;
        }
      }),
      (RO = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (zO = `FS;`),
      (BO = {
        thin: 100,
        hairline: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        ultra: 800,
        black: 900,
        heavy: 900,
      }),
      (VO = Object.keys(BO)),
      (HO = (() => RegExp(`^(?:${[...VO, `italic`, `variable`].join(`|`)})`, `u`))()),
      (UO = class e {
        constructor() {
          (z(this, `name`, `fontshare`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = VO.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && BO[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(zO)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(zO, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${zO}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${zO}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await _h(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!HO.exec(t) || t.split(` `).includes(`wide`));
                })
                .map((t) => ({
                  ...e.parseVariant(t.name),
                  selector: e.createSelector(a.name, t.name),
                  isVariable: t.is_variable,
                  fontshareVariantName: t.name,
                  file: t.file,
                })),
              o = e.createMetadataSelector(a.name),
              s = n?.[o],
              c = a.name,
              l = this.getFontFamilyByName(c);
            l || ((l = { name: c, fonts: [], source: this.name }), this.addFontFamily(l));
            let u = r[e.createMetadataSelector(a.name)];
            for (let e of t) {
              let {
                  variantBold: n,
                  variantBoldItalic: r,
                  variantItalic: o,
                  variantVariable: c,
                  variantVariableItalic: d,
                } = ih(e, t),
                f = {
                  family: l,
                  variant: e.fontshareVariantName.toLowerCase(),
                  selector: e.selector,
                  selectorBold: n?.selector,
                  selectorBoldItalic: r?.selector,
                  selectorItalic: o?.selector,
                  selectorVariable: c?.selector,
                  selectorVariableItalic: d?.selector,
                  weight: e.weight,
                  style: e.style,
                  file: e.file,
                  category: xh(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: Ym(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await vh(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (WO = `Inter`),
      (GO = `FR;`),
      (KO = {
        Thin: 100,
        ExtraLight: 200,
        Light: 300,
        "": 400,
        Medium: 500,
        SemiBold: 600,
        Bold: 700,
        ExtraBold: 800,
        Black: 900,
      }),
      (qO = class e {
        constructor() {
          (z(this, `name`, `framer`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(GO) && !e.startsWith(WO)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && KO[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${GO}${e}`;
        }
        importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = [];
          return (
            t.forEach((t) => {
              let { uiFamilyName: i, ...a } = t,
                o = e.createMetadataSelector(t.uiFamilyName),
                s = n?.[o],
                c = this.getFontFamilyByName(i);
              c ||= this.addFontFamily(i);
              let l = t.selector === t.selectorVariable || t.selector === t.selectorVariableItalic,
                u = { ...a, family: c, variationAxes: l ? s : void 0 };
              (c.fonts.push(u), r.push(u));
            }),
            r
          );
        }
        async getOpenTypeFeatures(t) {
          return (await vh(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (JO = `GF;`),
      (YO = class e {
        constructor() {
          (z(this, `name`, `google`),
            z(this, `fontFamilies`, []),
            z(this, `byFamilyName`, new Map()));
        }
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(JO)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(JO, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${JO}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${JO}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let i = await _h(`google`),
            a = [],
            o = Ch(t, (e) => e.family),
            s = Ch(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            let c = this.getFontFamilyByName(n.family);
            c ||= this.addFontFamily(n.family);
            let l = n.variants.map((r) => ({
                ...e.parseVariant(r),
                googleFontsVariantName: r,
                selector: e.createSelector(t, r, !1),
                isVariable: !1,
                file: n.files[r],
              })),
              u = s[t],
              d = u?.axes
                ? u.variants.map((n) => ({
                    ...e.parseVariant(n),
                    googleFontsVariantName: n,
                    selector: e.createSelector(t, n, !0),
                    isVariable: !0,
                    file: u.files[n],
                  }))
                : [],
              f = e.createMetadataSelector(n.family),
              p = r?.[f],
              m = [...l, ...d],
              h = m.filter(Hm),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (Hm(e) ? ih(e, h) : void 0) ?? {},
                m = {
                  family: c,
                  variant: o,
                  selector: i,
                  selectorBold: s?.selector,
                  selectorBoldItalic: u?.selector,
                  selectorItalic: l?.selector,
                  selectorVariable: d?.selector,
                  selectorVariableItalic: f?.selector,
                  weight: t,
                  style: r,
                  category: Sh(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: Ym(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await vh(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (XO = Ne(t_(), 1)),
      (ZO = 5e3),
      (QO = 3),
      ($O = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (ek = new Map()),
      (tk = new Map()),
      (nk = (e, t) => wh(e, t)),
      (rk = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (ik = class {
        constructor() {
          (z(this, `enabled`, !1),
            z(this, `bySelector`, new OO()),
            z(this, `loadedSelectors`, new Set()),
            z(this, `getGoogleFontsListPromise`),
            z(this, `getFontshareFontsListPromise`),
            z(this, `getBuiltInFontsListPromise`),
            z(
              this,
              `customFontsImportPromise`,
              new Promise((e) => {
                this.resolveCustomFontsImportPromise = e;
              })
            ),
            z(this, `local`),
            z(this, `google`),
            z(this, `fontshare`),
            z(this, `builtIn`),
            z(this, `framer`),
            z(this, `custom`),
            z(this, `bySelectorValuesCache`),
            z(this, `testing`, { addFont: this.addFont.bind(this) }),
            (this.local = new EO()),
            (this.google = new YO()),
            (this.fontshare = new UO()),
            (this.framer = new qO()),
            (this.custom = new LO()),
            (this.builtIn = new MO()),
            this.importLocalFonts());
        }
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        getAvailableFonts() {
          if (
            !this.bySelectorValuesCache ||
            this.bySelectorValuesCache.hash !== this.bySelector.hash
          ) {
            let e = new Map();
            for (let t of this.bySelector.values()) e.set(t, !0);
            this.bySelectorValuesCache = {
              result: Array.from(e.keys()),
              hash: this.bySelector.hash,
            };
          }
          return this.bySelectorValuesCache.result;
        }
        importLocalFonts() {
          for (let e of this.local.importFonts()) (this.addFont(e), this.loadFont(e.selector));
        }
        async importGoogleFonts() {
          return (
            (this.getGoogleFontsListPromise ||= Promise.resolve().then(async () => {
              let { staticFonts: e, variableFonts: t } = await Wx.fetchGoogleFontsList(),
                n = await Eh(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Wx.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Eh(`fontshare`);
            for (let n of await this.fontshare.importFonts(e, t)) this.addFont(n);
          }
          return this.getFontshareFontsListPromise;
        }
        async importAllWebFonts() {
          await Promise.all([
            this.importGoogleFonts(),
            this.importFontshareFonts(),
            this.importBuiltInFonts(),
          ]);
        }
        async importBuiltInFonts() {
          if (!this.getBuiltInFontsListPromise) {
            this.getBuiltInFontsListPromise = Wx.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Eh(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e, t) {
          this.bySelector.forEach((e, t) => {
            ch(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e, t);
          for (let e of n) this.addFont(e);
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getFontFamily(e) {
          return this[e.source].getFontFamilyByName(e.name);
        }
        getFontBySelector(e) {
          if (!e) return;
          let t;
          if (((t = this.bySelector.get(e)), t))
            return t.alternativeSelectors && e in t.alternativeSelectors
              ? { ...t, ...t.alternativeSelectors[e] }
              : t;
        }
        getDraftPropertiesBySelector(e) {
          let t = this.getFontBySelector(e);
          if (t)
            return {
              style: t.style,
              weight: t.weight,
              variant: t.variant,
              cssFamilyName: t.cssFamilyName,
              source: t.family.source,
              category: t.category,
            };
          let n = this.google.parseSelector(e);
          if (n) {
            let e = YO.parseVariant(n.variant);
            if (Hm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: Xm(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = UO.parseVariant(r.variant);
            if (Hm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: Xm(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = MO.parseVariant(i.variant);
            if (Hm(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: Xm(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return qO.getDraftFontPropertiesBySelector(e) || null;
        }
        isSelectorLoaded(e) {
          return this.loadedSelectors.has(e);
        }
        async loadFont(e) {
          let t = this.getFontBySelector(e);
          if (!t) return 2;
          if (this.loadedSelectors.has(e)) return 0;
          let n = t.cssFamilyName,
            r = t.family.source,
            i = sh(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Ba() || (await Th(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await nk({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`:
              return t.file
                ? (await nk({ family: n, url: t.file, weight: t.weight, style: t.style }, document),
                  this.loadedSelectors.add(e),
                  1)
                : Promise.reject(`Unable to load font: ${e}`);
            default:
              W(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(zO)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                ri(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(JO)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  ri(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(jO)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  ri(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(ch) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  ri(`Failed to load custom fonts:`, e);
                })
              ),
            t.length > 0 && (await Promise.all(t)));
          let n = [];
          for (let t of e) n.push(this.loadFont(t));
          return Promise.allSettled(n);
        }
        async loadFonts(e) {
          return {
            newlyLoadedFontCount: (await this.loadFontsFromSelectors(e)).filter(
              (e) => e.status === `fulfilled` && e.value === 1
            ).length,
          };
        }
        async loadMissingFonts(e, t) {
          let n = e.filter((e) => !ak.loadedSelectors.has(e));
          n.length !== 0 &&
            (await ak.loadWebFontsFromSelectors(n),
            n.every((e) => ak.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (U(e, `Can’t find Inter font`), e);
        }
      }),
      (ak = new ik()),
      (ok = (e) => e.target.value),
      (sk = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (ck = y(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: s,
            required: c,
            step: l,
            style: u,
            type: d,
            maxLength: f,
            value: m,
            defaultValue: h,
            autofillEnabled: _,
            onChange: v,
            onBlur: y,
            onInvalid: b,
            onFocus: x,
            onValid: C,
            onClear: T,
            ...E
          } = e,
          D = jh(m ?? h, d),
          [O, k, A] = Ah(D ?? ``, !0, v),
          j = jr(D),
          M = S(() => {
            (k(``), T && p(() => T()));
          }, [T, k]),
          N = Xa(C, b, A, y, x),
          P = S(
            (e) => {
              e.target === e.currentTarget && j.current?.focus();
            },
            [j]
          );
        if (d === `hidden`) return g(I.input, { type: `hidden`, name: i, defaultValue: h });
        let F = _ === !1 ? sk : void 0,
          ee = !!O,
          te = !!T && ee,
          ne = xc(lk, kb, r, d === `text` && uk, d === `textarea` && dk);
        return w(I.div, {
          ref: t,
          onClick: P,
          style: u,
          className: ne,
          ...E,
          children: [
            d === `textarea`
              ? g(I.textarea, {
                  ref: j,
                  ...F,
                  ...N,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: Ob,
                  value: O,
                  maxLength: f,
                })
              : g(I.input, {
                  ref: j,
                  ...F,
                  ...N,
                  type: d,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: xc(Ob, !ee && Ab),
                  value: O,
                  min: o,
                  max: a,
                  step: l,
                  maxLength: f,
                }),
            te &&
              g(`button`, {
                type: `button`,
                className: fk,
                onClick: M,
                "aria-label": `Clear`,
                children: g(Mh, {}),
              }),
          ],
        });
      })),
      (lk = `framer-form-text-input`),
      (uk = `framer-form-text-input-type`),
      (dk = `framer-form-textarea-input-type`),
      (fk = `framer-form-text-input-clear`),
      (pk = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (mk = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (hk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (gk = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (_k = yb(
        ck,
        (() => [
          ...Mb,
          ...Fb,
          ...Nb,
          Z(`.${kb}`, {
            boxShadow: Z.variable(`--framer-input-box-shadow`),
            borderTopLeftRadius: Z.variable(`--framer-input-border-radius-top-left`),
            borderTopRightRadius: Z.variable(`--framer-input-border-radius-top-right`),
            borderBottomRightRadius: Z.variable(`--framer-input-border-radius-bottom-right`),
            borderBottomLeftRadius: Z.variable(`--framer-input-border-radius-bottom-left`),
            cornerShape: Z.variable(`--framer-input-corner-shape`),
            background: Z.variable(`--framer-input-background`),
            transition: Z.variable(`--framer-input-focused-transition`),
            transitionProperty: `background, box-shadow`,
          }),
          Z(`.${lk} .${Ob}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${lk}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${lk} .${Ob}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${lk}.${dk}`, { padding: 0 }),
          Z(`.${lk}.${dk} textarea.${Ob}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${lk} .${Ob}[type="date"], .${lk} .${Ob}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${lk} .${Ob}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${lk} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${lk} textarea::-webkit-resizer`, { background: `no-repeat ${lt(pk)}` }),
          Z(`.${lk}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${lt(mk)}` }),
          Z(`.${lk} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${lk} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${lk} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${lk} .${Ob}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${lk} .${Ob}.${Ab}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${lk}.${uk}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${Bb}px`,
            height: `${Bb}px`,
            marginRight: `${zb}px`,
            ...Vb,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${lk} .${Ob}[type="date"]::before, .${lk} .${Ob}[type="time"]::before`, {
            ...Hb,
            paddingLeft: `${Rb}px`,
            maskPosition: `${Rb}px center`,
            backgroundPosition: `${Rb}px center`,
          }),
          Z(`.${lk} .${Ob}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, lt(hk)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${lk} .${Ob}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, lt(gk)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${lk} .${Ob}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${Bb}px`,
            height: `100%`,
          }),
          Z(`.${lk}:focus-within, .${lk}.${jb}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${lk}:focus-within::after, .${lk}.${jb}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, Pb),
          }),
          Z(`.${fk}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${Bb}px`,
            height: `${Bb}px`,
            marginLeft: `${zb}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${fk}:hover, .${fk}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ])(),
        `framer-lib-form-plain-text-input`
      )),
      (vk = (() => ({
        x: void 0,
        y: void 0,
        z: 0,
        translateX: void 0,
        translateY: void 0,
        translateZ: 0,
        rotate: void 0,
        rotateX: 0,
        rotateY: 0,
        rotateZ: void 0,
        scale: 1,
        scaleX: 1,
        scaleY: 1,
        scaleZ: 1,
        skew: 0,
        skewX: 0,
        skewY: 0,
        originX: void 0,
        originY: void 0,
        originZ: void 0,
        perspective: 0,
        transformPerspective: 0,
      }))()),
      (yk = { opacity: 0 }),
      (bk = { opacity: 1 }),
      (xk = Uh(
        h.forwardRef(function (e, n) {
          let {
              background: r,
              children: i,
              alt: a,
              draggable: o,
              fitImageDimension: s,
              style: c,
              ...l
            } = e,
            d = { ...c },
            f = t(() => jo(r), [r]),
            [p, m] = u();
          h.useLayoutEffect(() => {
            if (!r?.src || !s || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                m({ width: e.naturalWidth, height: e.naturalHeight });
            }),
              (e.src = r.src));
          }, [r?.src, s, f]);
          let _ = f ?? p;
          return (
            s && _ && ((d[s] = `auto`), (d.aspectRatio = _.width / _.height)),
            r && delete d.background,
            w(Mo(e.as), {
              ...l,
              style: d,
              ref: n,
              draggable: o,
              children: [r && g(Eo, { image: r, alt: a, draggable: o }), i],
            })
          );
        })
      )),
      (Ck = (() =>
        !La() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (wk =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (Tk = `{{ text-placeholder }}`),
      (Ek = `rich-text-wrapper`),
      (Dk = eo(
        y(function (e, n) {
          let {
              id: i,
              name: a,
              html: o,
              htmlFromDesign: c,
              text: l,
              textFromDesign: u,
              fonts: d = [],
              width: f,
              height: p,
              left: m,
              right: h,
              top: _,
              bottom: v,
              center: y,
              className: b,
              stylesPresetsClassName: x,
              visible: S = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = Y.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: j,
              positionStickyRight: M,
              positionStickyBottom: N,
              positionStickyLeft: P,
              __htmlStructure: F,
              __fromCanvasComponent: ee = !1,
              _forwardedOverrideId: te,
              _forwardedOverrides: ne,
              _usesDOMRect: re,
              children: L,
              ...ie
            } = e,
            ae = Ca(),
            oe = Ro(e),
            se = r(null),
            ce = n ?? se,
            { navigate: le, getRoute: ue } = At(),
            de = Mt();
          (Sn(e.preload ?? []), Wo(e, ce));
          let R = C(eS),
            fe = Rl(),
            pe = l,
            me = te ?? i;
          if (me && ne) {
            let e = ne[me];
            typeof e == `string` && (pe = e);
          }
          let he = ``;
          if (pe) {
            let e = Gh(pe);
            he = F ? F.replace(Tk, e) : `<p>${e}</p>`;
          } else if (o) he = o;
          else if (u) {
            let e = Gh(u);
            he = F ? F.replace(Tk, e) : `<p>${e}</p>`;
          } else c && (he = c);
          let ge = au(),
            _e = t(() => (fe || !ue || !de ? he : Kh(he, ue, de, ge)), [he, ue, de, ge]);
          if (
            (s(() => {
              let e = ce.current;
              if (e === null) return;
              function t(e) {
                let t = $l(e.target, ce.current);
                Ua(e) ||
                  !le ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Wl(le, t, ge) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [le, ge]),
            Yh(d, ee, ce),
            !S)
          )
            return null;
          let ve = D && O() === Y.canvas,
            ye = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: Jh(E),
              opacity: ve ? 0 : w,
              flexShrink: 0,
            },
            be = Y.hasRestrictions(),
            xe = ba(e, ae || 0, !1),
            Se = re && (f === `auto` || p === `auto`),
            Ce =
              e.transformTemplate || !xe || !be || ee || Se
                ? (e.transformTemplate ?? Lo(y))
                : void 0;
          if (!k) {
            if (xe && be && !Se) {
              let e = uy.getNumber(T).toFixed(4);
              ((ye.transform = `translate(${xe.x}px, ${xe.y}px) rotate(${e}deg)`),
                (ye.width = xe.width),
                (ye.minWidth = xe.width),
                (ye.height = xe.height));
            } else
              ((ye.left = m),
                (ye.right = h),
                (ye.top = _),
                (ye.bottom = v),
                (ye.width = f),
                (ye.height = p),
                (ye.rotate = T));
            A
              ? (!fe || R) &&
                ((ye.position = `sticky`),
                (ye.willChange = `transform`),
                (ye.top = j),
                (ye.right = M),
                (ye.bottom = N),
                (ye.left = P))
              : fe && (e.positionFixed || e.positionAbsolute) && (ye.position = `absolute`);
          }
          return (
            yc(e, ye),
            gc(e, ye),
            Object.assign(ye, e.style),
            g(I.div, {
              id: i,
              ref: ce,
              ...ie,
              style: ye,
              layoutId: oe,
              "data-framer-name": a,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": y,
              className: xc(b, x, Ek),
              transformTemplate: Ce,
              dangerouslySetInnerHTML: { __html: _e },
            })
          );
        })
      )),
      (Ok = {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        skewX: 0,
        skewY: 0,
        filter: `none`,
      }),
      (kk = (() =>
        RegExp(
          `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
          `gu`
        ))()),
      (Ak = y(function (e, t) {
        return g(`svg`, { ...e, ref: t, children: e.children });
      })),
      (jk = I.create(Ak)),
      (Mk = y(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return g(jk, {
          ...r,
          ref: i,
          viewBox: t,
          children: g(I.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (Nk = []),
      (Pk = `RichTextContainer`),
      (Fk = y(function (e, n) {
        let {
            __fromCanvasComponent: i = !1,
            _forwardedOverrideId: a,
            _forwardedOverrides: o,
            _usesDOMRect: s,
            anchorLinkOffsetY: c,
            as: l,
            bottom: u,
            center: d,
            children: f,
            environment: p = Y.current,
            fonts: m = Nk,
            height: h,
            isEditable: _ = !1,
            left: v,
            name: y,
            opacity: b,
            positionSticky: x,
            positionStickyBottom: S,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: j,
            text: M,
            top: N,
            verticalAlignment: P = `top`,
            visible: F = !0,
            width: ee,
            withExternalLayout: I = !1,
            viewBox: te,
            viewBoxScale: ne = 1,
            effect: re,
            ...L
          } = e,
          ie = Ca(),
          ae = p() === Y.canvas,
          oe = C(eS),
          se = Ro(e),
          ce = r(null),
          le = n ?? ce;
        (Wo(e, le), Yh(m, i, le));
        let ue = ig(re, le),
          de = t(() => {
            if (f) return fg(f, j, M, c, void 0, ue.getTokenizer());
          }, [f, j, M, c, ue]);
        if (!F) return null;
        let R = { opacity: _ && ae ? 0 : b },
          fe = Jh(P);
        fe !== Ub.justifyContent && (R.justifyContent = fe);
        let pe = {},
          me = Y.hasRestrictions(),
          he = ba(e, ie || 0, !1),
          ge = s && (ee === `auto` || h === `auto`),
          _e =
            e.transformTemplate || !he || !me || i || ge ? (e.transformTemplate ?? Lo(d)) : void 0;
        (I ||
          (he && me && !ge
            ? ((pe.x = he.x + (V(k?.x) ? k.x : 0)),
              (pe.y = he.y + (V(k?.y) ? k.y : 0)),
              (pe.left = 0),
              (pe.top = 0),
              (R.rotate = uy.getNumber(O)),
              (R.width = he.width),
              (R.minWidth = he.width),
              (R.height = he.height))
            : ((R.left = v),
              (R.right = D),
              (R.top = N),
              (R.bottom = u),
              (R.width = ee),
              (R.height = h),
              (R.rotate = O)),
          x
            ? (!ae || oe) &&
              ((R.position = `sticky`),
              (R.willChange = `transform`),
              (R.top = E),
              (R.right = T),
              (R.bottom = S),
              (R.left = w))
            : ae && (e.positionFixed || e.positionAbsolute) && (R.position = `absolute`)),
          yc(e, R),
          gc(e, R),
          Object.assign(R, A, k, pe),
          se && (L.layout = `preserve-aspect`));
        let ve = Mo(e.as),
          ye = L[`data-framer-name`] ?? y,
          be = ae ? lg(Lx(L)) : L;
        return B(e.viewBox)
          ? e.as === void 0
            ? g(Mk, {
                ...be,
                ref: le,
                style: R,
                layoutId: se,
                viewBox: te,
                viewBoxScale: ne,
                transformTemplate: _e,
                "data-framer-name": ye,
                "data-framer-component-type": Pk,
                children: de,
              })
            : g(ve, {
                ...be,
                ref: le,
                style: R,
                layoutId: se,
                transformTemplate: _e,
                "data-framer-name": ye,
                "data-framer-component-type": Pk,
                children: g(Mk, {
                  viewBox: te,
                  viewBoxScale: ne,
                  style: { width: `100%`, height: `100%` },
                  children: de,
                }),
              })
          : g(ve, {
              ...be,
              ref: le,
              style: R,
              layoutId: se,
              transformTemplate: _e,
              "data-framer-name": ye,
              "data-framer-component-type": Pk,
              children: de,
            });
      })),
      (Ik = eo(
        y(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (B(a)) {
            !r.stylesPresetsClassName &&
              H(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [B(t) ? `html` : `htmlFromDesign`]: a };
            return g(Dk, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && B(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return g(Fk, { ...r, ref: i, children: v(a) ? a : void 0 });
        })
      )),
      (Lk = `framer/asset-reference,`),
      (Rk = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = wg(t);
        return g(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: g(
            `image`,
            {
              width: r ? i : 1,
              height: r ? a : 1,
              href: c,
              preserveAspectRatio: `none`,
              transform: r ? void 0 : n,
              x: r ? 0 : void 0,
              y: r ? 0 : void 0,
            },
            c
          ),
        });
      }),
      (zk = Ra()),
      (Bk = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (Vk = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (Hk = class {
        constructor() {
          (z(this, `entries`, new Map()), z(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(cS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Tg(e);
            (s &&
              (t && Eg(s, n),
              (s.id = n),
              (o = jg(s)),
              s.removeAttribute(`xmlns`),
              s.removeAttribute(`xlink`),
              s.removeAttribute(`xmlns:xlink`),
              (a = s.outerHTML)),
              (i = this.createDOMElementFor(a, n, o, r)),
              this.entries.set(e, i));
          }
          return ((i.count += 1), i.innerHTML);
        }
        getViewBox(e) {
          if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
        }
        unsubscribe(e) {
          if (!e || e === ``) return;
          let t = this.entries.get(e);
          t && (--t.count, !(t.count > 0) && setTimeout(() => this.maybeRemoveEntry(e), 5e3));
        }
        maybeRemoveEntry(e) {
          let t = this.entries.get(e);
          t && (t.count > 0 || (this.entries.delete(e), this.removeDOMElement(t)));
        }
        removeDOMElement(e) {
          zk && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = Vk),
            document.body.appendChild(t),
            t
          );
        }
        maybeAppendTemplate(e, t) {
          if (document.getElementById(e)) return;
          let n = document.createElement(`div`);
          n.innerHTML = t;
          let r = n.firstElementChild;
          r && ((r.id = e), this.getOrCreateTemplateContainer().appendChild(r));
        }
        createDOMElementFor(e, t, n, r) {
          zk && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new Bk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !zk) ||
              this.maybeAppendTemplate(e, t),
            `#${e}`
          );
        }
        subscribeToTemplate(e) {
          let t = this.vectorSetItems.get(e);
          if (t)
            return (
              t.count++,
              () => {
                let t = this.vectorSetItems.get(e);
                t &&
                  (t.count--,
                  !(t.count > 0) &&
                    setTimeout(() => {
                      this.vectorSetItems.get(e)?.count ||
                        (this.vectorSetItems.delete(e),
                        zk && document?.getElementById(e)?.remove());
                    }, 5e3));
              }
            );
        }
        clear() {
          this.entries.clear();
        }
        generateTemplates() {
          let e = [];
          return (
            e.push(`<div id="svg-templates" style="${Vk}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (Uk = new Hk()),
      (Wk = (() => ({
        cm: 96 / 2.54,
        mm: 96 / 2.54 / 10,
        Q: 96 / 2.54 / 40,
        in: 96,
        pc: 96 / 6,
        pt: 96 / 72,
        px: 1,
        em: 16,
        ex: 8,
        ch: 8,
        rem: 16,
      }))()),
      (Gk = y(function (e, t) {
        let n = Ca(),
          r = Ro(e),
          i = h.useRef(null),
          a = t ?? i,
          o = xO();
        return (
          Wo(e, i),
          g(qk, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (Kk = 5e4),
      (qk = (() => {
        var e;
        return (
          (e = class extends sS {
            constructor() {
              (super(...arguments),
                z(this, `container`, h.createRef()),
                z(this, `svgElement`, null),
                z(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                z(this, `previouslyRenderedSVG`, ``),
                z(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return ba(e, e.parentSize || 0);
            }
            get frame() {
              return ba(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (Uk.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Fg(this.container, this.props);
            }
            componentWillUnmount() {
              (Uk.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (Zx.isImageObject(t) &&
                Zx.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                Yo(this.svgElement, `fill`, null, !1),
                Fg(this.container, this.props));
            }
            collectLayout(e, t) {
              if (this.props.withExternalLayout) {
                ((t.width = `100%`), (t.height = `100%`), (t.aspectRatio = `inherit`));
                return;
              }
              let n = this.frame,
                {
                  rotation: r,
                  intrinsicWidth: i,
                  intrinsicHeight: a,
                  width: o,
                  height: s,
                } = this.props,
                c = uy.getNumber(r);
              if (
                ((e.opacity = G(this.props.opacity) ? this.props.opacity : 1),
                Y.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  _a(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Ny;
                if (l === Y.export) {
                  let e = s > 1 ? s : 1;
                  ((t.transform = `scale(${r * e}, ${o * e})`), (t.zoom = 1 / e));
                } else t.transform = `scale(${r}, ${o})`;
                i && a && ((t.width = i), (t.height = a));
                return;
              }
              let { left: l, right: u, top: d, bottom: f } = this.props;
              (Object.assign(e, {
                left: l,
                right: u,
                top: d,
                bottom: f,
                width: o,
                height: s,
                rotate: c,
              }),
                Object.assign(t, { left: 0, top: 0, bottom: 0, right: 0, position: `absolute` }));
            }
            render() {
              let {
                id: e,
                visible: t,
                style: n,
                fill: r,
                svg: i,
                intrinsicHeight: a,
                intrinsicWidth: o,
                title: s,
                description: c,
                layoutId: l,
                className: u,
                variants: d,
                withExternalLayout: f,
                innerRef: p,
                svgContentId: m,
                height: h,
                opacity: _,
                width: v,
                requiresOverflowVisible: y,
                ...b
              } = this.props;
              if (!f && (!t || !e)) return null;
              let x = e ?? l ?? `svg`,
                S = this.frame,
                C = S || { width: o || 100, height: a || 100 },
                T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                E = {};
              (this.collectLayout(T, E),
                mc(this.props, T),
                yc(this.props, T),
                sS.applyWillChange(this.props, T, !1));
              let O = null;
              if (typeof r == `string` || J.isColorObject(r)) {
                let e = J.isColorObject(r) ? r.initialValue || J.toRgbString(r) : r;
                ((T.fill = e), (T.color = e));
              } else if (hS.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${hS.hash(t)}`;
                T.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = gg(t, x);
                O = g(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: g(`linearGradient`, {
                    id: n,
                    x1: a,
                    x2: o,
                    y1: s,
                    y2: c,
                    children: i.map((e, t) =>
                      g(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (_S.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${_S.hash(t)}`;
                T.fill = `url(#${n})`;
                let i = _g(t, x);
                O = g(`svg`, {
                  ref: this.setSVGElement,
                  width: `100%`,
                  height: `100%`,
                  style: { position: `absolute` },
                  role: `presentation`,
                  children: g(`radialGradient`, {
                    id: n,
                    cy: t.centerAnchorY,
                    cx: t.centerAnchorX,
                    r: t.widthFactor,
                    children: i.stops.map((e, t) =>
                      g(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                    ),
                  }),
                });
              } else if (Zx.isImageObject(r)) {
                let e = Sg(r, C, x);
                e &&
                  ((T.fill = `url(#${e.id})`),
                  (O = g(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: g(`defs`, { children: g(Rk, { ...e }) }),
                  })));
              }
              let k = { "data-framer-component-type": `SVG` },
                A = !S;
              A && Object.assign(k, Po(this.props.center));
              let j =
                  !y &&
                  !O &&
                  !T.fill &&
                  !T.background &&
                  !T.backgroundImage &&
                  i.length < Kk &&
                  !Mg(i) &&
                  !Ng(i),
                M = null;
              if (j)
                ((T.backgroundSize = `100% 100%`),
                  (T.backgroundImage = lt(i)),
                  Uk.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = Uk.subscribe(i, !m, e, y);
                (Uk.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Pg(T) && (T.overflow = `hidden`),
                  (M = w(D, {
                    children: [
                      O,
                      g(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: E,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        Zx.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let N = Mo(this.props.as),
                { href: P, target: F, rel: ee, onClick: I, onTap: te } = this.props,
                ne = s || c;
              return g(N, {
                ...k,
                ...b,
                layoutId: l,
                transformTemplate: A ? Lo(this.props.center) : void 0,
                id: e,
                ref: p,
                style: T,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: ne ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": ne ? void 0 : `true`,
                onTap: te,
                onClick: I,
                href: P,
                target: F,
                rel: ee,
                children: M,
              });
            }
          }),
          z(e, `supportsConstraints`, !0),
          z(e, `defaultSVGProps`, {
            left: void 0,
            right: void 0,
            top: void 0,
            bottom: void 0,
            style: void 0,
            _constraints: { enabled: !0, aspectRatio: null },
            parentSize: 0,
            rotation: 0,
            visible: !0,
            svg: ``,
            shadows: [],
          }),
          z(e, `defaultProps`, { ...sS.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (Jk = eo(Gk)),
      (Yk = 1e3),
      (Xk = `explicitInter`),
      (We.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = Je(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  Yi as $,
  xb as A,
  Rg as B,
  Ik as C,
  Pc as Ct,
  Lg as D,
  lw as E,
  bn as Et,
  SC as F,
  Gr as G,
  Ig as H,
  yC as I,
  Ka as J,
  ft as K,
  xC as L,
  nm as M,
  ak as N,
  so as O,
  Yg as P,
  bw as Q,
  bC as R,
  HT as S,
  qC as St,
  hO as T,
  yO as Tt,
  np as U,
  zg as V,
  V_ as W,
  d_ as X,
  ht as Y,
  Ir as Z,
  Fn as _,
  Rt as _t,
  cw as a,
  op as at,
  hD as b,
  yb as bt,
  cT as c,
  Mt as ct,
  kw as d,
  Rl as dt,
  ti as et,
  xk as f,
  uo as ft,
  iy as g,
  tp as gt,
  Vw as h,
  ni as ht,
  XC as i,
  Mr as it,
  xc as j,
  Fx as k,
  _k as l,
  Fl as lt,
  y_ as m,
  yr as mt,
  eu as n,
  mp as nt,
  eb as o,
  ll as ot,
  C_ as p,
  br as pt,
  Zk as q,
  cl as r,
  Uk as rt,
  na as s,
  zt as st,
  Ql as t,
  vD as tt,
  lC as u,
  up as ut,
  Dd as v,
  At as vt,
  Jk as w,
  qg as wt,
  Y as x,
  Mp as xt,
  jw as y,
  jp as yt,
  vb as z,
};
//# sourceMappingURL=framer.BWiQWvWz.mjs.map
