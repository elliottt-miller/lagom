import { t as e } from "./rolldown-runtime.D3cOTcPh.mjs";
import {
  A as t,
  C as n,
  D as r,
  E as i,
  F as a,
  I as o,
  L as s,
  M as c,
  N as l,
  O as u,
  P as d,
  S as f,
  _ as p,
  a as m,
  b as h,
  c as g,
  d as _,
  f as v,
  g as y,
  h as b,
  j as x,
  k as S,
  l as C,
  m as w,
  o as T,
  s as E,
  u as D,
  v as O,
  w as ee,
  x as k,
  y as te,
} from "./react.G3EGc0ga.mjs";
import {
  $ as ne,
  A as re,
  B as ie,
  C as ae,
  D as oe,
  E as se,
  F as ce,
  G as le,
  H as ue,
  I as de,
  J as fe,
  K as pe,
  L as me,
  M as he,
  N as ge,
  O as _e,
  P as ve,
  Q as ye,
  R as be,
  S as xe,
  T as Se,
  U as Ce,
  V as we,
  W as Te,
  X as A,
  Y as Ee,
  Z as De,
  _ as Oe,
  b as ke,
  c as Ae,
  d as je,
  f as Me,
  g as Ne,
  h as Pe,
  i as Fe,
  j as Ie,
  k as Le,
  l as Re,
  m as ze,
  n as Be,
  o as Ve,
  p as He,
  q as j,
  r as Ue,
  s as We,
  u as Ge,
  v as Ke,
  w as qe,
  x as Je,
  y as Ye,
  z as Xe,
} from "./motion.D-ANfwF1.mjs";
function Ze(e) {
  return typeof e == `function`;
}
function Qe(e) {
  return typeof e == `boolean`;
}
function M(e) {
  return typeof e == `string`;
}
function $e(e) {
  return Number.isFinite(e);
}
function et(e) {
  return Array.isArray(e);
}
function N(e) {
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
  return N(e) && Ze(e.return);
}
function st(e) {
  return N(e) && Ze(e.then);
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
  if (!ip) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = import(n)
      .then((t) => (up.set(e, t), t))
      .catch((t) => {
        throw (up.delete(e), console.warn(`Failed to import lazy module: ${n}`, t), t);
      });
    (r.catch(rp), up.set(e, r));
  }
}
function pt(e) {
  return typeof e == `object` && !!e && !v(e) && fp in e;
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
      if (i || !n || !up.has(n)) return;
      let e = up.get(n);
      ct(e) ? s(() => e) : (i = mt(e, t));
    },
    s = (e) =>
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
    c = !1,
    l = y(function (t, r) {
      if (
        (x(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && dp !== void 0 && dp.add(n), !i)) throw s(e);
      return g(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function gt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function _t(e) {
  return e === null || !(mp in e) ? !1 : typeof e.equals == `function`;
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
  let n = pp(e);
  if (n.length !== pp(t).length) return !1;
  for (let r of n)
    if (!gt(t, r) || (!(r === `_owner` && gt(e, `$$typeof`) && e.$$typeof) && !vt(e[r], t[r])))
      return !1;
  return !0;
}
function Tt(e, t) {
  let n = pp(e);
  if (n.length !== pp(t).length) return !1;
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
  return g(hp.Provider, { value: e, children: t });
}
function At() {
  return h.useContext(hp);
}
function jt({ routes: e, children: t }) {
  let n = Ot(e),
    r = S(() => ({ getRoute: n }), [n]);
  return g(hp.Provider, { value: r, children: t });
}
function Mt() {
  let e = At(),
    t = u(gp),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return S(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
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
function Ft(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function It(e) {
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
function P(e, ...t) {
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
function F(e, t) {
  throw t || Error(e ? `Unexpected value: ${e}` : `Application entered invalid state`);
}
function Lt(e) {
  return Object(e) !== e;
}
function Rt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === Tp
  );
}
function zt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Bt(e) {
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
function Vt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Bt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Ht(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Ut(e) {
  return Ep.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Wt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  let t = +e;
  return !(t >= 2 ** 32 - 1 || t < 0);
}
function Gt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Wt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Kt(e) {
  let t = new DataView(e),
    n = ``;
  for (let r = 0; r < e.byteLength; r++) n += String.fromCharCode(t.getUint8(r));
  return Yt(n);
}
function qt(e) {
  let t = Jt(e),
    n = new ArrayBuffer(t.length),
    r = new DataView(n);
  for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
  return n;
}
function Jt(e) {
  e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
  let t = ``,
    n = 0,
    r = 0;
  for (let i = 0; i < e.length; i++)
    ((n <<= 6),
      (n |= Dp.indexOf(e[i])),
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
function Yt(e) {
  let t = ``;
  for (let n = 0; n < e.length; n += 3) {
    let r = [void 0, void 0, void 0, void 0];
    ((r[0] = e.charCodeAt(n) >> 2),
      (r[1] = (e.charCodeAt(n) & 3) << 4),
      e.length > n + 1 &&
        ((r[1] |= e.charCodeAt(n + 1) >> 4), (r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
      e.length > n + 2 && ((r[2] |= e.charCodeAt(n + 2) >> 6), (r[3] = e.charCodeAt(n + 2) & 63)));
    for (let e = 0; e < r.length; e++) r[e] === void 0 ? (t += `=`) : (t += Dp[r[e]]);
  }
  return t;
}
function Xt(e, t) {
  return Zt(JSON.parse(e), t);
}
function Zt(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === Op) return;
    if (e === Ap) return NaN;
    if (e === jp) return 1 / 0;
    if (e === Mp) return -1 / 0;
    if (e === Np) return -0;
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
            r[e] = qt(t);
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
      } else if (s[0] === Pp) {
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
          n !== kp && (t[e] = a(n));
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
function Qt(e, t) {
  let n = [],
    r = new Map(),
    i = [];
  if (t) for (let e of Object.getOwnPropertyNames(t)) i.push({ key: e, fn: t[e] });
  let a = [],
    o = 0;
  function s(t) {
    if (t === void 0) return Op;
    if (Number.isNaN(t)) return Ap;
    if (t === 1 / 0) return jp;
    if (t === -1 / 0) return Mp;
    if (t === 0 && 1 / t < 0) return Np;
    if (r.has(t)) return r.get(t);
    let c = o++;
    r.set(t, c);
    for (let { key: e, fn: r } of i) {
      let i = r(t);
      if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
    }
    if (typeof t == `function`) throw new wp(`Cannot stringify a function`, a, t, e);
    let l = ``;
    if (Lt(t)) l = $t(t);
    else {
      let n = zt(t);
      switch (n) {
        case `Number`:
        case `String`:
        case `Boolean`:
          l = `["Object",${$t(t)}]`;
          break;
        case `BigInt`:
          l = `["BigInt",${t}]`;
          break;
        case `Date`:
          l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
          break;
        case `URL`:
          l = `["URL",${Vt(t.toString())}]`;
          break;
        case `URLSearchParams`:
          l = `["URLSearchParams",${Vt(t.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = t;
          l = i ? `["RegExp",${Vt(r)},"${i}"]` : `["RegExp",${Vt(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          l = `[`;
          for (let n = 0; n < t.length; n += 1)
            if ((n > 0 && (l += `,`), Object.hasOwn(t, n)))
              (a.push(`[${n}]`), (l += s(t[n])), a.pop());
            else if (e) l += kp;
            else {
              let n = Gt(t),
                r = n.length,
                i = String(t.length).length;
              if ((t.length - r) * 3 > 4 + i + r * (i + 1)) {
                l = `[` + Pp + `,` + t.length;
                for (let e = 0; e < n.length; e++) {
                  let r = n[e];
                  (a.push(`[${r}]`), (l += `,` + r + `,` + s(t[r])), a.pop());
                }
                break;
              } else ((e = !0), (l += kp));
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
            (a.push(`.get(${Lt(e) ? $t(e) : `...`})`), (l += `,${s(e)},${s(n)}`), a.pop());
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
          l = `["ArrayBuffer","${Kt(t)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          l = `["${n}",${Vt(t.toString())}]`;
          break;
        default:
          if (!Rt(t)) throw new wp(`Cannot stringify arbitrary non-POJOs`, a, t, e);
          if (Ht(t).length > 0) throw new wp(`Cannot stringify POJOs with symbolic keys`, a, t, e);
          if (Object.getPrototypeOf(t) === null) {
            l = `["null"`;
            for (let n of Object.keys(t)) {
              if (n === `__proto__`)
                throw new wp(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (a.push(Ut(n)), (l += `,${Vt(n)},${s(t[n])}`), a.pop());
            }
            l += `]`;
          } else {
            l = `{`;
            let n = !1;
            for (let r of Object.keys(t)) {
              if (r === `__proto__`)
                throw new wp(`Cannot stringify objects with __proto__ keys`, a, t, e);
              (n && (l += `,`), (n = !0), a.push(Ut(r)), (l += `${Vt(r)}:${s(t[r])}`), a.pop());
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
function $t(e) {
  let t = typeof e;
  return t === `string`
    ? Vt(e)
    : e instanceof String
      ? Vt(e.toString())
      : e === void 0
        ? Op.toString()
        : e === 0 && 1 / e < 0
          ? Np.toString()
          : t === `bigint`
            ? `["BigInt","${e}"]`
            : String(e);
}
function en(e, t, n = `lazy`) {
  switch ((V.__framer_events?.push([e, t, n]), e)) {
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
function tn(e) {
  return M(e) && (e === `` || Ip.test(e));
}
function nn() {
  return { [Lp.QueryCache]: new Map(), [Lp.CollectionUtilsCache]: new Map() };
}
function rn() {
  if (!ip) return;
  if (Rp !== void 0) return Rp;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      Rp = Xt(e.text) ?? nn();
    } catch (e) {
      ((Rp = nn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      sp(() => {
        (e?.remove(), (e = null));
      }),
      Rp
    );
  }
}
function an(e, t) {
  let n = rn();
  return n ? n[e].has(t) : !1;
}
function on(e, t) {
  let n = rn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function sn(e) {
  return e?.id ?? xp;
}
function cn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function ln(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (Hp.has(n)) return Hp.get(n);
    let r = new Wp(n, t);
    return (Hp.set(n, r), r);
  };
}
function un({ children: e, collectionUtils: t }) {
  let n = S(() => ({ get: ln(t) }), [t]);
  return g(Up.Provider, { value: n, children: e });
}
function dn() {
  return u(Up);
}
function fn() {
  for (let e of qp) e();
  qp.clear();
}
function pn(e) {
  return new Promise((t) => {
    if ((qp.add(t), document.hidden)) {
      fn();
      return;
    }
    (document.addEventListener(`visibilitychange`, fn),
      document.addEventListener(`pagehide`, fn),
      Pe.read(() => {
        hn(e).then(() => {
          (qp.delete(t), !e?.signal?.aborted && t());
        });
      }));
  });
}
function mn(e) {
  return new Promise((t) => {
    (setTimeout(t, 100),
      Pe.read(
        () => {
          hn(e).then(t);
        },
        !1,
        !0
      ));
  });
}
function hn(e) {
  let t = e?.priority;
  return Gp || Kp
    ? t === `background`
      ? new Promise((e) => {
          setTimeout(e, 1);
        })
      : Gp
        ? V.scheduler.yield(e).catch(rp)
        : V.scheduler.postTask(() => {}, e).catch(rp)
    : t === `user-blocking`
      ? Promise.resolve()
      : new Promise((e) => {
          setTimeout(e, t === `background` ? 1 : 0);
        });
}
function gn(e) {
  let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
  return n ? pn(r) : t === `paint` ? mn(r) : hn(r);
}
function _n() {
  let e = dn(),
    { autobahnNavigation: n } = bp(),
    { getRoute: r } = At();
  return t(
    (t, i, a = !0, o = !0) => {
      if (!t || !r) return;
      let s = r(t),
        { pathVariables: c, locale: l } = i;
      return vn(s, { routeId: t, pathVariables: c, locale: l, collectionUtils: e }, a, o && n);
    },
    [r, e, n]
  );
}
async function vn(e, t, n = !0, r = !0) {
  if (!Jp || !e) return;
  let i = e.page;
  if (!(!i || !pt(i))) {
    n && (await gn());
    try {
      let e = await i.preload();
      r && t && e && (await yn(e, t));
    } catch {}
  }
}
async function yn(e, t) {
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
function bn(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = xn(e),
    [r, i] = xn(t),
    a = Sn(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function xn(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function Sn(e, t) {
  if (e === t || ((e = `/` + Cn(e)), (t = `/` + Cn(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = Zp(e, 1 + s);
    if (n !== Zp(t, 1 + s)) break;
    n === Xp && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (Zp(t, 1 + s) === Xp) return $p(t, 1 + s + 1);
      if (s === 0) return $p(t, 1 + s);
    } else r > a && (Zp(e, 1 + s) === Xp ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || Zp(e, s) === Xp) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${$p(t, 1 + o)}`;
}
function Cn(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = Zp(e, o);
    else if (nm(a)) break;
    else a = Xp;
    if (nm(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || Zp(t, t.length - 1) !== Yp || Zp(t, t.length - 2) !== Yp) {
            if (t.length > 2) {
              let e = Qp(t, tm);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = $p(t, 0, e)), (n = t.length - 1 - Qp(t, tm))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          em && ((t += t.length > 0 ? `${tm}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${tm}${$p(e, r + 1, o)}`) : (t = $p(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === Yp && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function wn(e, t) {
  return e.replace(im, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Tn(e, t = !1) {
  let n = ``;
  if (s !== void 0)
    if (t) n = s.location.search;
    else {
      let e = s.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? s.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? En(n, e) : e;
}
function En(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== am && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Dn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(im)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !M(d)) throw Error(`No slug found for path variable ${u}`);
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
async function On({
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
      u = await Dn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (t.slug && (u.path = `/` + t.slug + u.path), o && u.path && (u.path = Tn(u.path, !0)), u);
}
function kn(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || s.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function An({ children: e, value: t }) {
  return g(om.Provider, { value: t, children: e });
}
function jn() {
  return h.useContext(om);
}
function Mn(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function Nn(e) {
  let t = sm,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < cm;) ((n = e.next(t)), r.push(n.value), (t += sm));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - sm }
  );
}
function Pn(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Fn(e) {
  let { innerWidth: t, innerHeight: n } = s,
    [r, i] = Pn(e.x),
    [a, o] = Pn(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function In(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function Ln(e) {
  return e ? um[e] : void 0;
}
function Rn(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (zn(t)) {
    let { easing: e, duration: n } = Nn(
      oe({ keyframes: [0, 1], ...Bn(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = Ln(n?.mask?.type),
    o = In(n, `start`, e, a),
    s = In({ ...dm, mask: n.mask }, `end`, e, a);
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
function zn(e) {
  return e.type === `spring`;
}
function Bn(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Vn({ exit: e = pm, enter: t }) {
  let n = document.createElement(`style`);
  n.id = fm;
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
    (r += Rn(`exit`, e)),
    (r += Rn(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function Hn() {
  sp(() => {
    Pe.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(fm);
      e && document.head.removeChild(e);
    });
  });
}
function Un() {
  return !!document.startViewTransition;
}
function Wn(e) {
  return new Promise((t) => {
    Pe.render(() => {
      (performance.mark(`framer-vt-style`), Vn(e), t());
    });
  });
}
async function Gn(e, t, n) {
  if (!Un()) {
    e();
    return;
  }
  if ((await Wn(t), n?.aborted)) return;
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
      .catch(mm),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), Hn());
      })
      .catch(mm),
    r
  );
}
function Kn() {
  let e = jn(),
    n = i(void 0);
  return (
    x(() => {
      n.current &&= (n.current(), void 0);
    }),
    t(
      (t, r, i, a) => {
        let o = Mn(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return Gn(
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
function qn(e, t) {
  sp(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function Jn(e, t, n, r = k) {
  r(() => {
    let t = async (e) => (await gn({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Yn(e) {
  let n = i(void 0);
  return (
    Jn(
      () => {
        n.current &&= (n.current(), void 0);
      },
      void 0,
      { priority: `user-blocking` }
    ),
    t(
      (t) => {
        let r = new Promise((e) => {
          n.current = e;
        });
        if (!e) return { promise: r, measureDetail: t, ignore: null };
        let i = `${e}-start`,
          a = `${e}-end`,
          o = !1;
        return (
          performance.mark(i),
          r
            .finally(() => {
              o || (performance.mark(a), performance.measure(e, { start: i, end: a, detail: t }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: r,
            measureDetail: t,
            ignore: () => {
              ((o = !0), n.current?.(), (n.current = void 0));
            },
          }
        );
      },
      [e]
    )
  );
}
async function Xn(
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
  let f = rr(t, {
    currentRoutePath: n,
    currentRoutePathLocalized: r,
    currentPathVariables: i,
    hash: a,
    pathVariables: o,
    preserveQueryParams: c,
    siteCanonicalURL: l,
    localeId: s,
  });
  try {
    return await $n({ routeId: e, hash: a, pathVariables: o, localeId: s }, f, u);
  } catch {}
}
function Zn(e) {
  return N(e) && M(e.routeId);
}
function Qn(e, t, n = !1) {
  (performance.mark(`framer-history-replace`),
    t && qn(t, s.location.href),
    (n ? s.history.__proto__.replaceState : s.history.replaceState).call(s.history, e, ``, t));
}
async function $n(e, t, n = !1) {
  if ((performance.mark(`framer-history-push`), qn(t, s.location.href), !n)) {
    s.history.pushState(e, ``, t);
    return;
  }
  let r = !1,
    i;
  (_m &&
    ((i = () => {
      if (((r = !0), vm)) return;
      let e = `Popstate called after intercept(). Please report this to the Framer team.`;
      (console.error(e), en(`published_site_load_recoverable_error`, { message: e }));
    }),
    s.addEventListener(`popstate`, i, { once: !0 })),
    vm && _m
      ? s.history.__proto__.pushState.call(s.history, e, ``, t)
      : s.history.pushState(e, ``, t),
    _m &&
      queueMicrotask(() => {
        r || ((_m = !1), s.removeEventListener(`popstate`, i));
      }));
}
function er({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  k(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = N(s.history.state) ? s.history.state : {},
      a = s.location.hash ? s.location.hash.slice(1) : void 0;
    Qn({ ...i, routeId: t, hash: a, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function tr(e, n) {
  let r = Kn(),
    a = Yn(`framer-route-change`),
    o = i(void 0),
    c = t(
      async ({ state: t }) => {
        if (
          (s.navigation?.transition && s.navigation?.transition?.navigationType !== `traverse`) ||
          !N(t)
        )
          return;
        let { routeId: i, hash: c, pathVariables: l, localeId: u } = t;
        if (!M(i)) return;
        let d = a({ popstate: !0 }),
          f = It();
        d.promise.finally(f);
        let p = await r(e.current, i, () => {
            n(
              i,
              M(u) ? u : void 0,
              M(c) ? c : void 0,
              s.location.pathname + s.location.search + s.location.hash,
              N(l) ? l : void 0,
              !0,
              d,
              !1
            );
          }),
          m = s.navigation?.transition;
        (await (p?.updateCallbackDone ?? Promise.resolve())
          .then(o.current?.resolve)
          .catch(o.current?.reject),
          await d.promise);
        try {
          await m?.finished;
        } catch (e) {
          console.warn(`Popstate transition failed`, e);
        }
        (gm(), qn(s.location.href));
      },
      [e, a, n, r]
    ),
    l = t((e) => {
      e.navigationType !== `traverse` ||
        !e.canIntercept ||
        e.intercept({
          async handler() {
            (await new Promise((e, t) => {
              o.current = { resolve: e, reject: t };
            }),
              (o.current = void 0));
          },
          scroll: `after-transition`,
        });
    }, []);
  x(
    () => (
      s.addEventListener(`popstate`, c),
      ym && s.navigation.addEventListener(`navigate`, l),
      () => {
        (s.removeEventListener(`popstate`, c),
          ym && s.navigation.removeEventListener(`navigate`, l));
      }
    ),
    [c, l]
  );
}
function nr(e, t, n) {
  let r = Ft(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(im, (e, t) => i[t] ?? e);
}
function rr(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: a,
    hashVariables: o,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
  }
) {
  let p = nr(i, e, o);
  if (u) return p ?? ``;
  let m = t ?? `/`;
  (n && f && (m = n[f] ?? m), r && (m = m.replace(im, (e, t) => String(r[t] || e))));
  let h = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  a && (h = h.replace(im, (e, t) => String(a[t] || e)));
  let g = !!(m === h && p);
  if (c)
    if (rm.has(m) && s !== void 0) {
      let e = kn(d);
      h = bn(s.location.pathname, e + h);
    } else h = bn(m, h);
  return ((l || g) && (h = Tn(h, g)), p && (h = `${h}#${p}`), h);
}
async function ir(e, t, n) {
  if (!e.path || !t) return !1;
  let r = `${n.slug ? `/${n.slug}` : ``}${wn(e.path, t)}`;
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((s.location.href = s.location.origin + r), !0)
    : !1;
}
function ar() {
  let e = dn();
  return t((t) => or({ ...t, collectionUtils: e }), [e]);
}
async function or(e) {
  let t = await On(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!M(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await ir(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function sr() {
  let e = i(Promise.resolve()),
    n = i(),
    r = t((t) => {
      if (t.navigationType === `traverse` || !t.canIntercept) return;
      let r = n.current;
      (r?.signal.addEventListener(`abort`, () => {
        r.abort(`user aborted`);
      }),
        t.intercept({ handler: () => e.current }));
    }, []);
  return t(
    (t, i, a) => {
      if (!ym) {
        i();
        return;
      }
      ((e.current = t),
        (n.current = a),
        s.navigation.addEventListener(`navigate`, r),
        i(!0),
        t.finally(() => {
          s.navigation.removeEventListener(`navigate`, r);
        }));
    },
    [r]
  );
}
function cr({ children: e, value: t }) {
  return g(xm.Provider, { value: t, children: e });
}
function lr() {
  return u(xm);
}
function ur(e, t) {
  let n = l(() => ({ inputs: t, result: e() }))[0],
    r = i(!0),
    a = i(n),
    o =
      r.current || (t && a.current.inputs && Dt(t, a.current.inputs, !1))
        ? a.current
        : { inputs: t, result: e() };
  return (
    x(() => {
      ((r.current = !1), (a.current = o));
    }, [o]),
    o.result
  );
}
function dr() {
  return h.useContext(wm);
}
function fr({ children: e }) {
  let [n, r] = l(``),
    i = lr();
  x(() => {
    if (i === `preview`) return;
    p(() => {
      r(s.location.search);
    });
    let e = () => {
      p(() => {
        r(s.location.search);
      });
    };
    return (
      s.addEventListener(`popstate`, e),
      () => {
        s.removeEventListener(`popstate`, e);
      }
    );
  }, []);
  let a = t(async (e) => {
      if (i === `preview`) {
        p(() => {
          r((t) => e(new URLSearchParams(t)).toString());
        });
        return;
      }
      await gn({ continueAfter: `paint` });
      let t = s.history.state,
        n = new URL(s.location.href),
        a = e(n.searchParams).toString();
      n.search = a;
      let o = t?.queryParamBackAnchorSearch,
        c = s.location.search.slice(1),
        l = o === void 0 && a !== c,
        u = o !== void 0 && a === o,
        d = { ...t, queryParamBackAnchorSearch: u ? void 0 : (o ?? (l ? c : void 0)) },
        f = n.toString();
      (l || u ? await $n(d, f) : Qn(d, f),
        p(() => {
          r(a);
        }));
    }, []),
    o = ur(() => ({ urlSearchParams: new URLSearchParams(n), replaceSearchParams: a }), [n, a]);
  return g(Em.Provider, { value: o, children: e });
}
function pr(e) {
  return Dm in e && e[Dm] === 1;
}
function mr() {
  if (!Om) return;
  ((Am = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  Om.forEach((n) => t.addEventListener(n, km, e));
}
function hr() {
  return (
    x(() => {
      if (!Am || !Om) return;
      let e = { capture: !0 },
        t = document.body;
      (Om.forEach((n) => t.removeEventListener(n, km, e)),
        (Om = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function gr(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function _r(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function vr() {
  ((Jm = new U()), Jm.render.markStart());
}
function yr() {
  (f(() => {
    Jm?.useInsertionEffects.markRouterStart();
  }, []),
    k(() => {
      Jm?.useLayoutEffects.markRouterStart();
    }, []),
    x(() => {
      Jm?.useEffects.markRouterStart();
    }, []));
}
function br() {
  (f(() => {
    (Jm?.render.markEnd(), Jm?.useInsertionEffects.markStart());
  }, []),
    k(() => {
      if ((Jm?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Ym = !0;
        return;
      }
      Pe.read(() => {
        (Jm?.browserRendering.requestAnimationFrame.markStart(),
          Jm?.unattributedHydrationOverhead.measure());
      });
    }, []),
    x(() => {
      (Jm?.useEffects.markStart(),
        Jm?.browserRendering.hasStarted ||
          (Jm?.mutationEffects.measure(), Jm?.useEffects.markAreSynchronous()));
    }, []));
}
function xr() {
  (f(() => {
    Jm?.useInsertionEffects.markEnd();
  }, []),
    k(() => {
      (Jm?.useLayoutEffects.markEnd(),
        !(Ym || document.visibilityState !== `visible`) &&
          Pe.read(() => {
            (Jm?.browserRendering.requestAnimationFrame.markEnd(),
              gn().then(() => {
                Jm?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    x(() => {
      Jm?.useEffects.markEnd();
    }, []));
}
function Sr() {
  return (br(), null);
}
function Cr() {
  return (xr(), null);
}
function wr(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return h.isValidElement(e) ? h.cloneElement(e, n) : g(e, { ...n });
}
function Tr() {
  return $m;
}
function Er(e) {
  if (eh?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      P(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: kr(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          P(t, `localizedPath must be defined`);
          let i = kr(t),
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
    eh = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: eh.pathRoutes,
    paths: eh.paths,
    pathRoutesLocalized: eh.pathRoutesLocalized,
    pathsLocalized: eh.pathsLocalized,
  };
}
function Dr(e, t, n = !0, r = Tr()) {
  return Or(e, t, r, n);
}
function Or(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Er(e),
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
      let e = Ar(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ar(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ar(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ar(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function kr(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ar(e, t) {
  let n = [],
    r = jr(t).replace(im, (e, t) => (n.push(t), `([^/]+)`)),
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
function jr(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Mr() {
  if (`PerformanceServerTiming` in s) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Nr(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n;
  if (!e[i]) return;
  let { abTestingParentId: a, ...o } = r,
    s = e[i].elements || r.elements ? { ...e[i].elements, ...r.elements } : void 0;
  e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Pr(e, t) {
  for (let [n, r] of t) Nr(e, n, r);
}
function Fr(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ir(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    { abTestingParentId: r, ...i } = e[t],
    a = e[n]?.elements || i.elements ? { ...e[n]?.elements, ...i.elements } : void 0;
  e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function Lr(e, t) {
  if (s === void 0) return t;
  let n = t;
  if (t) {
    Ir(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Pr(e, Mr()), Fr(e), n);
}
function Rr(e) {
  (x(() => {
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
function zr(e, ...t) {
  th.has(e) || (th.add(e), console.warn(e, ...t));
}
function Br(e, t, n) {
  zr(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Vr(e) {
  return (
    typeof e == `object` &&
    !!e &&
    ih in e &&
    e[ih] instanceof Function &&
    ah in e &&
    e[ah] instanceof Function
  );
}
function Hr(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = rh(r);
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
function Ur(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Wr(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Gr(e) {
  return Math.round(e * 2) / 2;
}
function Kr(e, t) {
  return { x: e, y: t };
}
function qr(e, t, n, r = !1) {
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
function Jr(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Yr(e) {
  let t = Xr(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Xr(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Zr(e, t, n) {
  return (
    (ch.rgb_r = e / 255),
    (ch.rgb_g = t / 255),
    (ch.rgb_b = n / 255),
    ch.rgbToHsluv(),
    { h: ch.hsluv_h, s: ch.hsluv_s, l: ch.hsluv_l }
  );
}
function Qr(e, t, n, r = 1) {
  return (
    (ch.hsluv_h = e),
    (ch.hsluv_s = t),
    (ch.hsluv_l = n),
    ch.hsluvToRgb(),
    { r: ch.rgb_r * 255, g: ch.rgb_g * 255, b: ch.rgb_b * 255, a: r }
  );
}
function $r(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ei(e, t, n) {
  return {
    r: Jr(e) ? si(e, 255) * 255 : 0,
    g: Jr(t) ? si(t, 255) * 255 : 0,
    b: Jr(n) ? si(n, 255) * 255 : 0,
  };
}
function ti(e, t, n, r) {
  let i = [
    ui(Math.round(e).toString(16)),
    ui(Math.round(t).toString(16)),
    ui(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function ni(e, t, n) {
  let r,
    i,
    a = si(e, 255),
    o = si(t, 255),
    s = si(n, 255),
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
function ri(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ii(e, t, n) {
  let r, i, a;
  if (((e = si(e, 360)), (t = si(t * 100, 100)), (n = si(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ri(s, o, e + 1 / 3)), (i = ri(s, o, e)), (a = ri(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ai(e, t, n) {
  ((e = si(e, 255)), (t = si(t, 255)), (n = si(n, 255)));
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
function oi(e, t, n) {
  ((e = si(e, 360) * 6), (t = si(t * 100, 100)), (n = si(n * 100, 100)));
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
function si(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ci(e) && (e = `100%`);
    let t = li(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ci(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function li(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ui(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function di(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = sh[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = lh.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = lh.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = lh.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Yr(r[2] ?? ``), l: Yr(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = lh.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Yr(r[2] ?? ``),
              l: Yr(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = lh.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Yr(r[2] ?? ``), v: Yr(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = lh.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Yr(r[2] ?? ``),
                  v: Yr(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = lh.hex8.exec(t))
                ? {
                    r: fi(r[1] ?? ``),
                    g: fi(r[2] ?? ``),
                    b: fi(r[3] ?? ``),
                    a: pi(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = lh.hex6.exec(t))
                  ? {
                      r: fi(r[1] ?? ``),
                      g: fi(r[2] ?? ``),
                      b: fi(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = lh.hex4.exec(t))
                    ? {
                        r: fi(`${r[1]}${r[1]}`),
                        g: fi(`${r[2]}${r[2]}`),
                        b: fi(`${r[3]}${r[3]}`),
                        a: pi(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = lh.hex3.exec(t))
                      ? {
                          r: fi(`${r[1]}${r[1]}`),
                          g: fi(`${r[2]}${r[2]}`),
                          b: fi(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function fi(e) {
  return parseInt(e, 16);
}
function pi(e) {
  return fi(e) / 255;
}
function mi(e) {
  let t = uh.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function hi(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function gi({ r: e, g: t, b: n, a: r }) {
  return { r: hi(e), g: hi(t), b: hi(n), a: r };
}
function _i(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function vi({ r: e, g: t, b: n, a: r }) {
  return { r: _i(e), g: _i(t), b: _i(n), a: r };
}
function yi({ r: e, g: t, b: n, a: r }) {
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
function bi(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function xi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = bi(e),
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
function Si(e) {
  return mh(ph(e));
}
function Ci(e) {
  return fh(dh(e));
}
function wi(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Di({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ti(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Di(e)
              : Oi(e)),
    i
  );
}
function Ti(e) {
  let t = di(e);
  if (t) return t.format === `hsl` ? Oi(t) : t.format === `hsv` ? Ei(t) : Di(t);
}
function Ei(e) {
  let t = oi(e.h, e.s, e.v);
  return { ...ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ki(e.a) };
}
function Di(e) {
  let t = ei(e.r, e.g, e.b);
  return { ...ni(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ki(e.a) };
}
function Oi(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Jr(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Jr(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Xr(e.s)),
    (r = Jr(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Xr(e.l)),
    (i = ii(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ki(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ai() {
  Oh || ((Oh = !0), je(Mh));
}
function ji(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
function Mi(e, t) {
  return `${kh}${e}%${Ah}${t.join(Ah)}`;
}
function Ni({ children: e }) {
  if (u(Nh).top) return g(E, { children: e });
  let n = i({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = i({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    a = i(new Set()).current,
    o = i({
      getLayoutId: t(({ id: e, name: t, duplicatedFrom: i }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!i && !a.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            a.add(c),
            c
          );
        let l;
        if (i?.length)
          for (let s = i.length - 1; s >= 0; s--) {
            let c = i[s];
            P(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !a.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !a.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), a.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !a.has(u)) return (a.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), a.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !a.has(d)) return (a.add(d), (r.current.byId[e] = d), d);
        let f = i?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Pi(p, (n.current.count[o][p] ?? -1) + 1, a);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), i?.length && !t)) {
          let e = i[i.length - 1];
          if ((e && (r.current.byLastId[e] = m), i.length > 1))
            for (let e = 0; e < i.length - 1; e++) {
              let t = i[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), a.add(m), m);
      }, []),
      persistLayoutIdCache: t(() => {
        ((n.current = {
          byId: { ...n.current.byId, ...r.current.byId },
          byLastId: { ...n.current.byLastId, ...r.current.byLastId },
          byPossibleId: { ...n.current.byPossibleId, ...r.current.byPossibleId },
          byName: { ...n.current.byName, ...r.current.byName },
          byLastName: { ...n.current.byLastName, ...r.current.byLastName },
          byLayoutId: { ...n.current.byLayoutId, ...r.current.byLayoutId },
          count: { ...n.current.count, byName: {} },
        }),
          (r.current = {
            byId: {},
            byName: {},
            byLastId: {},
            byPossibleId: {},
            byLastName: {},
            byLayoutId: {},
          }),
          a.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return g(Nh.Provider, { value: o, children: e });
}
function Pi(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Fi({ enabled: e = !0, ...t }) {
  let n = u(Nh),
    r = S(() => ({ ...n, enabled: e }), [e]);
  return g(Nh.Provider, { ...t, value: r });
}
function Ii(e) {
  let t = i(null);
  return (t.current === null && (t.current = e()), t.current);
}
function Li(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ri(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return C(`div`, {
    style: Fh,
    children: [
      g(`div`, { className: `text`, style: Lh, children: r }),
      i && g(`div`, { className: `text`, style: Rh, children: i }),
    ],
  });
}
function Ri(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function I(e) {
  return Number.isFinite(e);
}
function zi(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Bi(e) {
  return typeof e != `string` && typeof e != `number`;
}
function Vi(e) {
  return e != null && typeof e != `boolean` && !zi(e);
}
function Hi(e) {
  return e * (Math.PI / 180);
}
function Ui(e) {
  return nt(e) ? !1 : e === 2 || e === 5;
}
function Wi(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Gi(e, t, n, r) {
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
      if (!r) return Ki(e);
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
function Ki(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      F(e, `unknown constraint key`);
  }
}
function qi(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Gi(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Gi(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function Ji(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Gi(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Gi(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Yi(e, t, n, r, i) {
  let a = Ji(I(e) ? e : Uh, n, r, i),
    o = qi(I(t) ? t : Wh, n, r, i);
  return (
    I(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (I(n.left) && I(n.right)
        ? (o = a / n.aspectRatio)
        : (I(n.top) && I(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Xi(e, t) {
  return !I(e) || !I(t) ? null : e + t;
}
function Zi(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Qi(e) {
  return !e._constraints || Zi(e) ? !1 : e._constraints.enabled;
}
function $i(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    I(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    I(n) && I(r) ? { width: n, height: r } : null
  );
}
function ea(e) {
  let t = $i(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return I(n) && I(r) ? { x: n, y: r, ...t } : null;
}
function ta(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Qi(e) || r) return ea(e);
  let i = na(e),
    a = ra(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Hh.toRect(i, o, null, n, null);
}
function na(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Vh.quickfix({
      left: I(t),
      right: I(n),
      top: I(r),
      bottom: I(i),
      widthType: Wi(c),
      heightType: Wi(l),
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
function ra(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ia() {
  return h.useContext(Gh).parentSize;
}
function aa(e) {
  return typeof e == `object`;
}
function oa(e) {
  return aa(e) ? e.width : e;
}
function sa(e) {
  return aa(e) ? e.height : e;
}
function ca(e, t) {
  return g(Kh, { parentSize: t, children: e });
}
function la(e) {
  return ta(e, ia(), !0);
}
function ua({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function da() {
  return o === void 0 ? void 0 : o;
}
function fa() {
  let e = da();
  return e ? Jh.test(e.platform) : !1;
}
function pa() {
  let e = da();
  return e
    ? Yh.test(e.platform)
      ? !0
      : Xh.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function ma() {
  return fa() || pa();
}
function ha() {
  let e = da();
  return e ? Zh.test(e.userAgent) : !1;
}
function ga() {
  let e = da();
  return e ? Qh.test(e.userAgent) && $h.test(e.vendor) && !ha() : !1;
}
function _a() {
  let e = da();
  return e ? eg.test(e.userAgent) && tg.test(e.vendor) : !1;
}
function va() {
  let e = da();
  return e ? ng.test(e.userAgent) : !1;
}
function ya() {
  return typeof document == `object`;
}
function ba() {
  let e = da();
  return e ? rg.test(e.userAgent) : !1;
}
function xa() {
  return !1;
}
function Sa() {
  let e = da();
  return e && ig.test(e.userAgent) ? `tablet` : e && ag.test(e.userAgent) ? `phone` : `desktop`;
}
function Ca() {
  return Sa() === `desktop`;
}
function wa(e) {
  return ma() ? e.metaKey : e.ctrlKey;
}
function Ta(e, t, n = sg) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!cg) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) cg = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = cg;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function Ea() {
  if (hg !== void 0) return hg;
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
  return (e.parentNode && e.parentNode.removeChild(e), (hg = t), t);
}
function Da() {
  _g || ((_g = !0), !Ea() && document.body.classList.add(gg));
}
function Oa(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? xg.variable(e) : e === `` ? `""` : e;
}
function L(e, t) {
  return xg.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function ka(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Aa() {
  return G.current() === G.preview ? m_ : p_;
}
function ja(e) {
  return fg(e, Aa, `framer-lib-combinedCSSRules`);
}
function Ma(e) {
  return N(e) || Ze(e);
}
function Na(e) {
  return !!e && h_ in e && e[h_] === !0;
}
function Pa(e) {
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
        return M(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Qe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return nt(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return $e(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return N(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return N(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return N(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return et(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = N(e.defaultValue) ? e.defaultValue : {};
        return (N(e.controls) && Fa(t, e.controls), t);
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
function Fa(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!nt(i) || Na(r)) continue;
    let a = Pa(r);
    nt(a) || (e[n] = a);
  }
}
function Ia(e) {
  if (N(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function La(e, t) {
  Ma(e) && Fa(Ia(e), t);
}
function Ra(e, t) {
  (Object.assign(e, { propertyControls: t }), La(e, t));
}
function za(e) {
  return e.propertyControls;
}
function Ba() {
  let e = G.current();
  return e === G.canvas || e === G.export;
}
function Va() {
  let [e] = l(() => Ba());
  return e;
}
function Ha(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ua(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of T_) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function Wa(e, t) {
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
function Ga(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < E_) continue;
    let n = Wa(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${Wa(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Ka(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of w_) {
    let n = Wa(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function qa(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Ka(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ga(n, t, Ua(t.pixelWidth, t.pixelHeight)) };
}
function Ja() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: lt(S_.imagePlaceholderSvg),
  };
}
function Ya(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Xa(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Za(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...C_,
    objectPosition: Xa(e.positionX, e.positionY),
    objectFit: Ya(e.fit),
  };
}
function Qa(e) {
  let n = h.useRef(e ? `auto` : `async`),
    r = t((e) => {
      ((n.current = `auto`), (e.decoding = `auto`));
    }, []),
    i = t(
      (e) => {
        r(e.currentTarget);
      },
      [r]
    ),
    a = t(
      (e) => {
        e?.complete && r(e);
      },
      [r]
    );
  return { decoding: n.current, onImageLoad: i, onImageMount: a };
}
function $a({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = S_.useImageSource(e, t, n),
    s = Za(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Qa(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : qa(e.nodeFixedSize, e, o);
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
function eo({ image: e, containerSize: t, nodeId: n }) {
  let r = h.useRef(null),
    i = S_.useImageElement(e, t, n),
    a = Za(e);
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
    g(`div`, { ref: r, style: { display: `contents`, ...C_ } })
  );
}
function to({ nodeId: e, image: t, containerSize: n }) {
  let r = h.useRef(null),
    i = S_.useImageSource(t, n, e);
  return (
    h.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Za(t);
      S_.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    g(`div`, { ref: r, style: { display: `contents`, ...C_ } })
  );
}
function no({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (M(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = $e(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Gr(e * (t.pixelWidth / 2)),
        s = S_.useImageSource(t, n);
      ((r = {
        ...D_,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Xa(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        G.current() === G.canvas
          ? S_.canRenderOptimizedCanvasImage(S_.useImageSource(t))
            ? g(to, { image: t, ...n })
            : g(eo, { image: t, ...n })
          : g($a, { image: t, avoidAsyncDecoding: G.current() === G.export, ...n });
  let o = a ? D_ : (r ?? { ...D_, ...Ja() });
  return i
    ? g(Je.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : g(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function ro(e, t, n = !0) {
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
function io(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...C_,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), g(Je.div, { style: n }))
    : (ro(e, n, !1), g(Je.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ao(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function oo(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !k_.isImageObject(t)) return;
  let r = null;
  if (((r = M(n) ? { alt: ``, src: n } : rh.get(t, null)), k_.isImageObject(r))) return ao(r, e);
}
function so(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function co(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? Je[e] : Je.div;
}
function lo(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` ? !0 : void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` ? !0 : void 0));
}
function uo(e) {
  let t = {};
  return (!e || !A_ || G.current() !== G.canvas || lo(t, e), t);
}
function fo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function po(e, t) {
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
function mo(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ho(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: c, enabled: l } = u(Nh);
  return S(() => {
    if (!l) return e.layoutId;
    let u = t || e.layoutId;
    if (!u && (s || !i || o)) return;
    let d = u || c({ id: i, name: r, duplicatedFrom: a });
    if (d) return n ? `${d}-${n}` : d;
  }, [l]);
}
function go() {
  let [e, t] = h.useState(0);
  return h.useCallback(() => t((e) => e + 1), []);
}
function _o(e) {
  let t = go();
  x(() => {
    let n = e?.current;
    if (n)
      return (
        P_?.observeElementWithCallback(e.current, t),
        () => {
          P_?.unobserve(n);
        }
      );
  }, [e, t]);
}
function vo(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    c = u(M_),
    l = G.current() === G.canvas;
  j_(() => {
    !l ||
      c ||
      s ||
      (t.current && i && a && o && S_.queueMeasureRequest(fo(i), t.current, n(t.current)));
  });
}
function yo(e) {
  e.willChange = `transform`;
  let t = G.current() === G.canvas;
  L_ && t && (e.translateZ = F_);
}
function bo(e) {
  ((e.willChange = `transform`), xo(e, !0));
}
function xo(e, t) {
  let n = G.current() === G.canvas;
  if (!L_ || !n) return;
  let r = (M(e.transform) && e.transform) || ``;
  t ? r.includes(I_) || (e.transform = r + I_) : (e.transform = r.replace(I_, ``));
}
function So(e, t, n, r = !0) {
  if (!e) return;
  let i = q(e.style),
    a = n || i[t],
    o = () => {
      Co(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Co(e) {
  return M(e) || $e(e) || rt(e);
}
function wo(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function To(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  wo(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function Eo(e, t) {
  let n = [e, t];
  return V_.test(e) ? e : To(1e3, H_, n, () => B_.multiplyAlpha(e, t));
}
function Do(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: Eo(e.value, t) }))
  );
}
function Oo(e, t) {
  let n = 0;
  return (
    Do(e, t).forEach((e) => {
      n ^= z_(e.value) ^ e.position;
    }),
    n
  );
}
function ko(e) {
  return e && U_.every((t) => t in e);
}
function Ao(e) {
  return e && W_.every((t) => t in e);
}
function jo({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || _h(t)
      ? (n.backgroundColor = t)
      : W.isColorObject(e) && (n.backgroundColor = e.initialValue || W.toRgbString(e))
    : e &&
      ((e = rh.get(e, null)),
      typeof e == `string` || _h(e)
        ? (n.background = e)
        : K_.isLinearGradient(e)
          ? (n.background = K_.toCSS(e))
          : J_.isRadialGradient(e)
            ? (n.background = J_.toCSS(e))
            : W.isColorObject(e) && (n.backgroundColor = e.initialValue || W.toRgbString(e)));
}
function R(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function Mo(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function No(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Po(e) {
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
      ? (t.cornerShape = Le(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    R(e, `size`, t),
    R(e, `width`, t),
    R(e, `height`, t),
    R(e, `minWidth`, t),
    R(e, `minHeight`, t),
    R(e, `top`, t),
    R(e, `right`, t),
    R(e, `bottom`, t),
    R(e, `left`, t),
    R(e, `position`, t),
    R(e, `overflow`, t),
    R(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && R(e, `border`, t),
    R(e, `borderRadius`, t),
    R(e, `radius`, t, `borderRadius`),
    R(e, `color`, t),
    R(e, `shadow`, t, `boxShadow`),
    R(e, `x`, t),
    R(e, `y`, t),
    R(e, `z`, t),
    R(e, `rotate`, t),
    R(e, `rotateX`, t),
    R(e, `rotateY`, t),
    R(e, `rotateZ`, t),
    R(e, `scale`, t),
    R(e, `scaleX`, t),
    R(e, `scaleY`, t),
    R(e, `skew`, t),
    R(e, `skewX`, t),
    R(e, `skewY`, t),
    R(e, `originX`, t),
    R(e, `originY`, t),
    R(e, `originZ`, t),
    jo(e, t),
    t
  );
}
function Fo(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof q(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Io(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (X_.has(t)) return `pointer`;
}
function Lo(e) {
  return Ro(e) ? !0 : e.style ? !!Ro(e.style) : !1;
}
function Ro(e) {
  return Z_ in e && (e[Z_] === `scroll` || e[Z_] === `auto`);
}
function zo(e) {
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
    m = Se(e.minWidth),
    h = Se(e.minHeight),
    g = Se(e.maxWidth),
    _ = Se(e.maxHeight);
  return {
    top: Se(n),
    left: Se(t),
    bottom: Se(r),
    right: Se(i),
    width: Se(a),
    height: Se(o),
    size: Se(l),
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
function Bo(e) {
  let t = u(M_),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = zo(e),
    s = la(o),
    c = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: G.current() === G.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (c.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let l = !Fo(e) && !e.__fromCanvasComponent && !Lo(e),
    d = e.style ? !(`pointerEvents` in e.style) : !0;
  l && d && (c.pointerEvents = `none`);
  let f = h.Children.count(e.children) > 0 &&
      h.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Po(e);
  (a === void 0 && !i && (Mo(p) || (c.width = Q_.width), No(p) || (c.height = Q_.height)),
    o.minWidth !== void 0 && (c.minWidth = o.minWidth),
    o.minHeight !== void 0 && (c.minHeight = o.minHeight));
  let m = {};
  (Qi(o) &&
    s &&
    !ua(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(c, f, r, p, m, n),
    Object.assign(c, {
      overflowX: c.overflowX ?? c.overflow,
      overflowY: c.overflowY ?? c.overflow,
      overflow: void 0,
    }),
    R_.applyWillChange(e, c, !0));
  let g = c;
  c.transform || (g = { x: 0, y: 0, ...c });
  let _ = Ba();
  return (
    e.positionSticky
      ? (!_ || S_.isOnPageCanvas || t) &&
        ((g.position = `sticky`),
        (g.willChange = `transform`),
        (g.zIndex = 1),
        (g.top = e.positionStickyTop),
        (g.right = e.positionStickyRight),
        (g.bottom = e.positionStickyBottom),
        (g.left = e.positionStickyLeft))
      : _ &&
        (e.positionFixed
          ? (g.position = S_.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (g.position = `absolute`)),
    `rotate` in g && g.rotate === void 0 && delete g.rotate,
    [g, s]
  );
}
function Vo(e) {
  let t = {};
  for (let n in e)
    (ke(n) || __(n)) && !$_.has(n)
      ? (t[n] = q(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0), typeof q(e)[n] != `boolean` && !e.transition && (t.transition = q(e)[n]));
  return t;
}
function Ho(e) {
  return `data-framer-name` in e;
}
function Uo(e, t, n, r) {
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
function Wo(e) {
  return g(Je.div, { layoutId: nv, style: av, children: e.children });
}
function Go(e, t) {
  Ze(e) ? e(t) : Ko(e) && (e.current = t);
}
function Ko(e) {
  return N(e) && `current` in e;
}
function qo() {
  let e = Ii(() => new Set()),
    t = Ii(() => new Map());
  return Ii(() => (n, r) => ({
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
function Jo(e) {
  let t = i(null),
    n = qo();
  return Ii(() => (Ko(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function Yo(e, t, n) {
  let r = i(),
    a = i();
  (ur(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Xo(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new ov({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Zo(e, t, n) {
  let r = Ii(() => `${n.rootMargin}`),
    i = u(sv),
    { enabled: a, root: o, rootMargin: s, threshold: c } = n;
  Yo(
    e,
    (e) => {
      if (a && e !== null) return Xo(i, r, e, o, t, s, c);
    },
    [a, t, o, s, c]
  );
}
function Qo(e, t, n) {
  let r = h.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  cv(
    e,
    h.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = es(e, o?.y ?? 0);
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
    { threshold: lv, rootMargin: s, enabled: i ?? !0 }
  );
}
function $o(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, V.innerHeight);
}
function es({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && $o(t, e) >= r;
}
function ts() {
  return new Map();
}
function ns() {
  return Ii(ts);
}
function rs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function is(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (I(t.originX) && (r.originX = t.originX),
      I(t.originY) && (r.originY = t.originY),
      I(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (I(n.originX) && (r.originX = n.originX),
      I(n.originY) && (r.originY = n.originY),
      I(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function as(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function os(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return bv.PushLeft;
    case `left`:
      return bv.PushRight;
    case `bottom`:
      return bv.PushUp;
    case `top`:
      return bv.PushDown;
  }
}
function ss(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return bv.OverlayLeft;
    case `left`:
      return bv.OverlayRight;
    case `bottom`:
      return bv.OverlayUp;
    case `top`:
      return bv.OverlayDown;
  }
}
function cs(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return bv.FlipLeft;
    case `left`:
      return bv.FlipRight;
    case `bottom`:
      return bv.FlipUp;
    case `top`:
      return bv.FlipDown;
  }
}
function ls(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return ds(e, t.transition, t.component);
    case `removeOverlay`:
      return fs(e);
    case `add`:
      return ps(e, t.key, t.transition, t.component);
    case `remove`:
      return gs(e);
    case `update`:
      return us(e, t.key, t.component);
    case `back`:
      return ms(e);
    case `forward`:
      return hs(e);
    default:
      return;
  }
}
function us(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function ds(e, t, n) {
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
function fs(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function ps(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? xs(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = ys(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = _s(e, t, c),
    p = bs(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function ms(e) {
  let t = { ...e.containers },
    n = gs(e);
  if (n) return ((n.containers = t), n);
}
function hs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = ps(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function gs(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (P(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = vs(e, r, n),
    u = bs(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function _s(e, t, n) {
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
function vs(e, t, n) {
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
function ys(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function bs(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Ss(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function xs(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1
        ? !0
        : !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Ss(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Cs(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Cs(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Cs(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Cs(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Cs(e, t, n) {
  let r = {},
    i = {};
  return (
    Sv.forEach((e) => {
      ((r[e] = _v[e]), (i[e] = { ...n, from: _v[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${q(_v)[a]}%` : q(_v)[a];
        ((q(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function ws(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Ts({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Es({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : Ev;
}
function Ds({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Os(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function ks(e, t) {
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
function As(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function js(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Ms(e, t) {
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
function Ns(e, t) {
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
  return Ev;
}
function Ps(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Fs(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Is(e) {
  return h.Children.map(e.component, (t) => {
    if (!Vi(t) || !Bi(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? N(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      h.cloneElement(t, n)
    );
  });
}
function Ls(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Rs(e) {
  let t = me(),
    n = he();
  return g(Tv, { ...e, resetProjection: t, skipLayoutAnimation: n, children: e.children });
}
function zs(e) {
  return Nv in e;
}
function Bs(e, t) {
  if (!zs(e)) return;
  let n = rh.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Vs(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Hs(e, t) {
  let n = [];
  (I(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    I(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    I(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    I(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    I(e.invert) && n.push(`invert(${e.invert / 100})`),
    I(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    I(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    I(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Vs(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Us(e, t) {
  I(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Ws(e, t) {
  (Us(e, t), Hs(e, t));
}
function Gs(e, t) {
  let n,
    r = (...r) => {
      (V.clearTimeout(n), (n = V.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      V.clearTimeout(n);
    }),
    r
  );
}
function Ks(...e) {
  return e.filter(Boolean).join(` `);
}
function qs(e) {
  if (e.startsWith(Rv)) return e.substr(zv);
}
function Js(e) {
  let t = Ii(() => Ys(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Ys(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Xs(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Xs(t)));
    },
    i = !1;
  function a(a, o) {
    if (i)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (i = !0),
      ee.count(a) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      ee.map(a, (e) => {
        if (v(e)) {
          let i = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, i);
          let a = Ze(o) ? o(e.props) : o;
          return r(e, t.ref === i ? a : { ...a, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return g(E, { children: a(e, t) });
  };
  return (
    (o.cloneAsArray = a),
    {
      useSetup: (e) => {
        ((i = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Xs(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Go(n, e), Go(t, e));
  };
}
function Zs(e) {
  return e.split(`-`)[2];
}
function Qs(e) {
  return h.forwardRef(({ optimized: t, ...n }, r) => {
    let i = h.useContext(Bv),
      a = h.useContext(Vv)?.variants,
      o = n[Jv];
    o && !ya() && Kv.setAll(o, a, t ? n : null, i);
    let s = Xv(n);
    return g(e, { ref: r, ...n, ...s });
  });
}
function $s(e) {
  return M(e) || Array.isArray(e);
}
function ec(e) {
  return e in J;
}
function tc(e, t) {
  let n = Ii(() => ({ values: Qv(t ? e : void 0) }));
  return (
    h.useEffect(() => {
      if (!t)
        for (let e of Zv) {
          let t = J[e];
          nt(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function nc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: s,
  },
  c
) {
  let u = de(),
    d = Ii(Qv),
    f = i(!1),
    m = ny(),
    h = i(null),
    g = t(async () => {
      if (!o) return;
      let e = r || void 0,
        t = f.current && a === `mirror`,
        n = t ? J : o,
        i = t ? o : J;
      return (
        (f.current = !f.current),
        (h.current = Promise.all(
          Zv.map((t) => {
            if (!(u && t !== `opacity`))
              return (
                d[t].jump(i[t] ?? J[t]),
                new Promise((r) => {
                  let a = { ...e, onComplete: () => r() },
                    o = n[t] ?? i[t];
                  typeof o == `number` && Me(d[t], o, a);
                })
              );
          })
        )),
        h.current
      );
    }, [o, a, r, u]),
    [_, v] = l(!1),
    y = i(!1),
    b = t(async () => {
      !e || !y.current || (await g(), await m(n ?? 0), b());
    }, [g, m, e, n]),
    C = t(() => {
      y.current || ((y.current = !0), p(() => v(!0)), b());
    }, [b]),
    w = t((e = !0) => {
      (Zv.forEach((e) => {
        d[e].stop();
      }),
        Zv.forEach((e) => {
          d[e].set(J[e]);
        }),
        (f.current = !1),
        e && ((y.current = !1), p(() => v(!1))));
    }, []),
    T = e && o,
    E = t(() => {
      document.hidden ? w(!1) : y.current && ((y.current = !1), C());
    }, [C, w]);
  (x(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    x(() => {
      (T && s) || (T ? C() : w());
    }, [C, w, s, T]),
    x(() => () => w(), [w]));
  let D = i(!1),
    O = t(async () => {
      h.current && (await h.current, !D.current && w());
    }, [w]);
  cv(
    c,
    t(
      (e) => {
        e.isIntersecting ? ((D.current = !0), C()) : ((D.current = !1), O());
      },
      [C, O]
    ),
    { enabled: T && s }
  );
  let ee = _ || !s;
  return S(() => ({ values: d, style: T && ee ? $v : ey }), [T, ee]);
}
function rc(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function ic(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = h.useRef(null),
    c = de(),
    l = h.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : rc(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = be(),
    f = ie(d, l),
    p = ve(a && s.current === null ? `hidden` : n),
    m = ve(0),
    g = u(sv);
  return (
    Yo(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Xo(g, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            Pe.update(() => {
              (f.set(l(d.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Pt(() => {
      o && f.set(0);
    }),
    { values: { y: c || !o ? m : f }, style: o ? { ...$v, visibility: p } : ey }
  );
}
function ac(e) {
  return typeof e == `object` && !!e;
}
function oc(e) {
  if (ac(e)) return e?.transition;
}
function sc(e, t, n, r, i, a) {
  let o = oc(e);
  return Promise.all(
    Zv.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = ac(e) ? (e?.[s] ?? J[s]) : J[s];
          if ((Ye(u) && (u = u.get()), !$e(u))) return c();
          let d = we.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (M(i) && !l?.hasAnimated && V.MotionHandoffAnimation) {
            let e = V.MotionHandoffAnimation(i, s, Pe);
            e && (f = e);
          }
          a ? l.set(u) : Me(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function cc(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: a, presenceExit: o },
  s,
  c,
  l,
  u
) {
  let d = r ?? e,
    f = a ?? t,
    p = o ?? n,
    [m, h] = ce(),
    g = i({ lastPresence: !1, lastAnimate: f, hasMounted: !1, running: !1 }),
    _ = Ii(() => {
      let e = d ?? l;
      if (!N(e)) return { values: Qv() };
      let t = {};
      for (let n in e) {
        let r = N(e) ? e[n] : void 0;
        $e(r) && (t[n] = r);
      }
      return { values: Qv(t) };
    });
  Yo(
    s,
    (e) => {
      let { hasMounted: t } = g.current;
      if (t && f) return;
      let n = we.get(e);
      if (n)
        for (let e in (Object.assign(g.current, { hasMounted: !0 }), _.values)) {
          if (!ec(e)) continue;
          let t = l?.[e];
          n.setBaseTarget(e, $e(t) ? t : J[e]);
        }
    },
    [f]
  );
  let v = de();
  Yo(s, (e) => {
    if (!c) {
      h?.();
      return;
    }
    if (e === null) return;
    if (m !== g.current.lastPresence) {
      (Object.assign(g.current, { lastPresence: m }),
        m
          ? d &&
            f &&
            (Object.assign(g.current, { running: !0 }),
            sc(f, _, v, s, u).then(() => Object.assign(g.current, { running: !1 })))
          : p
            ? (Object.assign(g.current, { running: !0 }),
              sc(p, _, v, s, u)
                .then(() => Object.assign(g.current, { running: !1 }))
                .then(() => h()))
            : h());
      return;
    }
    let { lastAnimate: t, running: n } = g.current;
    Dt(f, t) ||
      !f ||
      (Object.assign(g.current, { lastAnimate: f }),
      sc(f, _, v, s, u, !n).then(() => Object.assign(g.current, { running: !1 })));
  });
  let y = c && f;
  return S(() => ({ values: _.values, style: y ? $v : ey }), [y]);
}
function lc(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function uc(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = lc(o.current, document.documentElement) - ay - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function dc(e, t = 0) {
  return e < t ? `up` : `down`;
}
function fc(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Nt();
  h.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return se((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = dc(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < oy) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function pc(e, t, n) {
  let r = uc(e, t),
    i = [...cy],
    a = r[0];
  if (!$e(a)) return ly;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!$e(e)) return ly;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function mc(e) {
  return {
    x: e?.x ?? J.x,
    y: e?.y ?? J.y,
    scale: e?.scale ?? J.scale,
    opacity: e?.opacity ?? J.opacity,
    transformPerspective: e?.transformPerspective ?? J.transformPerspective,
    rotate: e?.rotate ?? J.rotate,
    rotateX: e?.rotateX ?? J.rotateX,
    rotateY: e?.rotateY ?? J.rotateY,
    skewX: e?.skewX ?? J.skewX,
    skewY: e?.skewY ?? J.skewY,
    transition: e?.transition ?? void 0,
  };
}
function hc({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return h.useMemo(
    () => ({
      initial: r ?? mc({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? mc({ opacity: t }),
      exit: i ?? mc(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function gc(e, t) {
  let n = de(),
    r = hc(e),
    i = e.styleAppearEffectEnabled,
    a = tc(i ? r.initial : r.animate, i),
    o = h.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Nt(),
    c = h.useRef(),
    l = h.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = we.get(t.current);
      c.current = Promise.all(
        Zv.map((e) => {
          s && a.values[e].set(r.initial[e] ?? J[e]);
          let t = o[e] ?? J[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) ($e(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Me(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Qo(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && l(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !u,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let d = e.targets && i && !e.scrollDirection;
  return (
    h.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return se((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = pc(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = _e(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = q(r)[u];
        d && l(d);
      });
    }, [s, d]),
    fc(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Pt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of Zv) a.values[e].set(r.initial?.[e] ?? J[e]);
    }),
    S(() => ({ values: a.values, style: i ? $v : ey }), [i])
  );
}
function _c(e, t) {
  let n = h.useRef({});
  h.useEffect(() => {
    if (t !== void 0)
      for (let r of pp(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = He({
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
        a.attach((e, t) => ((s = e), (o = t), Pe.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function vc(e, t) {
  let n = fy();
  return {
    inputRange: uc(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of Zv) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function yc(e) {
  let t = fy();
  for (let { target: n } of e) for (let e of Zv) t[e]?.push(n[e]);
  return t;
}
function bc(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = de(),
    s = tc(dy(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Nt();
  return (
    k(() => {
      if (!(c || !l))
        return se((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = vc(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of Zv)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(_e(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    Yo(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = yc(n);
        return se(
          (e, { y: t }) => {
            for (let e of Zv)
              (o && e !== `opacity`) ||
                (py.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(_e(t.progress, py, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    _c(s.values, r),
    Pt(() => {
      if (c) return;
      let e = dy(n, o);
      for (let t of Zv) s.values[t].set(e?.[t] ?? J[t]);
    }),
    h.useMemo(() => ({ values: s.values, style: t ? $v : ey }), [t])
  );
}
function xc(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Sc(e) {
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
    let r = qs(n);
    if (r) {
      for (let i of hy)
        if (my[i]?.has(r)) {
          t[i][r] = q(e)[n];
          break;
        }
    } else t.forwardedProps[n] = q(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = xc(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = xc(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Cc(e) {
  return N(e) && vy in e;
}
function wc(e, t) {
  if (!e || !N(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ye(r) || !ec(n) || ($e(r.get()) && t[n].push(r));
  }
}
function Tc(e) {
  return M(e) || Array.isArray(e);
}
function Ec() {
  return h.useContext(by);
}
function Dc(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function Oc() {
  if (s === void 0 || Cy)
    return g(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Ty;
}
function kc({ children: e }) {
  return u(Dy) ? g(E, { children: e }) : g(w, { fallback: Ey, children: e });
}
function Ac() {
  return g(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function jc(e, t) {
  if (!ip || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  en(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Mc(...e) {
  console.error(...e);
}
function Nc() {
  return G.current() !== G.canvas;
}
function Pc({ getErrorMessage: e, fallback: t, children: n }) {
  return Nc()
    ? g(Fc, { fallback: t, children: g(ky, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function Fc({ children: e, fallback: t = Oy }) {
  return s === void 0 ? g(w, { fallback: t, children: e }) : g(kc, { children: e });
}
function Ic() {
  return h.useContext(jy);
}
function Lc() {
  let e = Ic();
  return h.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Rc({ children: e, scopeId: t, nodeId: n }) {
  let r = Ic(),
    i = h.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return g(jy.Provider, { value: i, children: e });
}
function zc(e, t) {
  return `${My}${e}:${t}`;
}
function Bc(e, t) {
  return Hc(`component`, e, t);
}
function Vc(e, t) {
  return Hc(`override`, e, t);
}
function Hc(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${zc(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function Uc(e, t, n, r, i, a) {
  let o = Gc(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Wc(e, t, n, r) {
  return Gc(e, t, n, r);
}
function Gc(e, t, n, r) {
  return !!(nt(n) || (n === 1 && r && e === t));
}
function Kc(e, t, n, r, i, a) {
  let o = Ic();
  return nt(t) || nt(n)
    ? g(Ay, { children: e })
    : (Uc(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = g(Pc, { getErrorMessage: Bc.bind(null, t, n), fallback: null, children: e })),
      i && (e = g(Rc, { scopeId: t, nodeId: n, children: e })),
      e);
}
function qc(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Jc(e) {
  return !(!e || e.placement || e.alignment);
}
function Yc(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      F(e);
  }
}
function Xc(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Yc(t)}, -100%`;
    case `right`:
      return `0%, ${Yc(t)}`;
    case `bottom`:
      return `${Yc(t)}, 0%`;
    case `left`:
      return `-100%, ${Yc(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Zc(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(By)) {
      let e = n.getAttribute(By);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Qc(e) {
  let { registerCursors: t } = u(Py),
    n = Ii(() => e),
    r = O();
  k(() => t(n, r), [t, r]);
}
function $c(e) {
  return !!(e && typeof e == `object` && Hy in e);
}
function el(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function tl() {
  return G.current() === G.canvas;
}
function nl(e) {
  return e === void 0 ? !1 : !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function rl(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function il(e, t, n, r) {
  if (M(e)) {
    let i = nl(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Dr(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function al(e) {
  return M(e) && e.startsWith(`data:${Yy}`);
}
function ol(e) {
  if (al(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Yy.length),
        r = t.searchParams,
        i = r.has(Gy) ? r.get(Gy) : void 0,
        a,
        o = r.get(Ky),
        s = r.get(qy),
        c = r.get(Jy);
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
function sl(e) {
  if (!al(e)) return e;
  let t = ol(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: cl(i) };
}
function cl(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function ll(e, n, r, i, a, o) {
  let s = u(Xy),
    c = Lc(),
    l = S(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    d = At(),
    f = Mt(),
    { locales: p } = dr(),
    m = S(() => {
      let e = $c(i) ? i : sl(i);
      if (e) return il(e, d, f, p);
    }, [f, i, d, p]),
    h = !!(!tl() && s?.nodeId && l.nodeId),
    _ = t(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), wa(e))) {
            fl(a.href, ``, `_blank`);
            return;
          }
          m ? a.navigate?.() : fl(a.href, a.rel, a.target);
        }
      },
      [a, m]
    ),
    v = t(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), fl(a.href, ``, `_blank`));
      },
      [a]
    ),
    y = t(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          m ? a.navigate?.() : fl(a.href, a.rel, a.target));
      },
      [a, m]
    );
  Yo(
    o,
    (e) => {
      e !== null && h && (e.dataset.hydrated = `true`);
    },
    [h]
  );
  let b = e;
  return (
    h &&
      (ee.forEach(e, (e) => {
        dl(e) &&
          (P(
            ul(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          P(
            ul(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          Wy.collectNestedLink(s, l));
      }),
      (b = ee.map(e, (e) => {
        if (!dl(e)) return e;
        let t = pl(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: y,
            as: r.as && pl(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return D(t, { ...i, ref: a }, n);
      }))),
    g(Xy.Provider, { value: l, children: b })
  );
}
function ul(e) {
  return !nt(e?.nodeId);
}
function dl(e) {
  return v(e) && (pl(e.type) !== e.type || pl(e.props.as) !== e.props.as);
}
function fl(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function pl(e) {
  return e === `a` ? `span` : Ke(e) && re(e) === `a` ? Je.span : e;
}
function ml(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : ml(e.parentElement, t)
      : null;
}
function hl({ children: e }) {
  return g(kc, { children: e });
}
function gl(e) {
  return y(function (t, n) {
    return g(hl, { children: g(e, { ...t, ref: n }) });
  });
}
function _l(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return yl(e, t, o, s, a, c, l, i, r);
}
function vl(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && nl(t))
    try {
      let [i, a] = t.split(`#`, 2);
      P(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      P(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Dr(e.routes, o, void 0, r),
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
function yl(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = rr(d, {
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
function bl() {
  let e = u($y),
    t = Mt()?.pathVariables;
  return e || t;
}
function xl(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Qy)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Sl() {
  let e = o.connection || o.mozConnection || o.webkitConnection || {},
    t = o.deviceMemory && o.deviceMemory > nb,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? rb : ib));
  }
  (e.addEventListener?.(`change`, a), a());
  let s = new IntersectionObserver(u, { threshold: tb }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = sb.get(n);
    if (!a?.size || ob.has(n)) return;
    (++c, ob.add(n));
    let o = i()?.catch(() => {});
    (s.unobserve(t), ab.delete(t));
    for (let e of a) (s.unobserve(e), ab.delete(e));
    (a.clear(), sb.delete(n), await o, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = ab.get(e);
      if (!n || ob.has(n.id)) {
        (s.unobserve(e), ab.delete(e));
        continue;
      }
      let r = n.id,
        a = sb.get(r),
        o = sb.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : sb.set(r, new Set([e])), setTimeout(l, eb, n, e));
      } else (a && a.delete(e), o <= 1 && sb.delete(r));
    }
  }
  return (e, t, n) => {
    if (!ob.has(n))
      return (
        ab.set(e, { id: n, preload: t }),
        s.observe(e),
        () => {
          (ab.delete(e), s.unobserve(e));
        }
      );
  };
}
function Cl(e, t) {
  let n = nl(e),
    r = {
      href: e === `` || rl(e, n) ? e : `https://${e}`,
      target: wl(t?.openInNewTab, n),
      rel: n ? void 0 : Tl(`noopener`, t?.rel),
    };
  return (
    t?.preserveParams && ((r.href = Tn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function wl(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Tl(e, t) {
  if (e && !t) return e;
  if (!e && t) return t;
  if (e && t) return `${e} ${t}`;
}
function El(e, t) {
  console.warn(
    dt(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Dl(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return El(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return ct(i) ? i.catch(El) : i;
  } catch (e) {
    El(e);
  }
}
function Ol(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Dl(o, r, n);
      ct(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function kl() {
  let e = dn();
  return t((t, n, r, i = []) => Ol(t, n, r, e, i), [e]);
}
function Al({ nodeId: e, clickTrackingId: n, router: r, href: i, activeLocale: a }) {
  let o = dn();
  return t(
    async (t) => {
      if (!r.pageviewEventData?.current) return;
      let s =
          r.pageviewEventData.current instanceof Promise
            ? await r.pageviewEventData.current
            : r.pageviewEventData.current,
        c = $c(i) ? i : sl(i);
      if (!$c(c))
        return en(
          `published_site_click`,
          {
            ...s,
            href: t ? jl(t) : null,
            nodeId: e ?? null,
            trackingId: n || null,
            targetRoutePath: null,
            targetWebPageId: null,
            targetCollectionItemId: null,
          },
          `eager`
        );
      let l = c.webPageId,
        u = r?.getRoute?.(l),
        d = u?.path ?? null,
        f = null;
      if (u?.collectionId && c.pathVariables) {
        let e = o?.get(u.collectionId);
        if (!e) return;
        let [t] = Object.values(c.pathVariables);
        if (M(t)) {
          let n = e.getRecordIdBySlug(t, a || void 0);
          f = (ct(n) ? await n : n) ?? null;
        }
      }
      return en(
        `published_site_click`,
        {
          ...s,
          href: t ? jl(t) : null,
          nodeId: e ?? null,
          trackingId: n ?? null,
          targetRoutePath: d,
          targetWebPageId: l,
          targetCollectionItemId: f,
        },
        `eager`
      );
    },
    [e, n, r, i, a, o]
  );
}
function jl(e) {
  try {
    let t = new URL(e, V.document.baseURI);
    return t.origin === V.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function Ml(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Nl(e, t, n) {
  return async (r) => {
    let i = wa(r),
      a = ml(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await gn({
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
function Pl(e, t, n, r, i, a, o, s) {
  if (!n) return Cl(e, r);
  let c = vl(t, e, s, o);
  if (!c) return Cl(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return Cl(e, r);
  let m = rr(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !ap,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = wl(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => Ml(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: Nl(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && xl(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function Fl(e, t, n) {
  let r = Il(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ze(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ze(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function Il(e, t) {
  let n = N(e) ? e : void 0,
    r = n && !tt(n),
    i = t && !tt(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function Ll(e, t, n) {
  if (!(t && pa())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: Rl } : { ...i, onTap: r }) : e;
}
function Rl(e) {
  let t = ml(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function zl({ EditorBar: e, fast: t = !1 }) {
  let n = bp(),
    r = u(ub),
    i = te(cp, t ? pb : mb, lp),
    a = S(() => {
      let e = {},
        t;
      for (t in n)
        n.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = n[t]);
      return e;
    }, [n]);
  return !e || !r || !i
    ? null
    : g(fb, { children: g(w, { children: g(e, { framerSiteId: r, features: a }) }) });
}
function Bl({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = i(),
    a = i(),
    o = i(t),
    s = i(null);
  ((o.current = t),
    x(() => {
      e && ((r.current ??= new Set()), r.current.add(e), a.current?.(e));
    }, [e]));
  let [c] = l(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        o.current ? Hl(o.current, o.current.currentRouteId, o.current.currentPathVariables) : ``,
      resolveRoute: (e) => (o.current ? Hl(o.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        a.current = e;
      },
      sendTrackingEvent: async (e) => {
        o.current && Vl(o.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: s,
  }));
  return g(hb.Provider, { value: c, children: n });
}
async function Vl(e, t) {
  if (!tn(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    en(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Hl(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? wn(r.path, n) : r.path;
}
function Ul({ children: e, loadSnippetsModule: t }) {
  return g(Eb.Provider, { value: t, children: e });
}
function Wl() {
  return h.useContext(Eb);
}
function Gl(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Kl(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (P(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (P(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      F(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await ql(a.createContextualFragment(e), r, i));
}
async function ql(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Jl(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await ql(r, e, null)));
  }
}
function Jl(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return Yl(r, t, n);
}
function Yl(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Xl(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = Sb), (n = Cb));
      break;
    case `bodyEnd`:
      ((t = wb), (n = Tb));
      break;
    case `headStart`:
      ((t = vb), (n = yb));
      break;
    case `headEnd`:
      ((t = bb), (n = xb));
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
function Zl(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Gl(e),
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
async function Ql(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Xl(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Zl(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if (($l(t, o), s)) {
      await Kl(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Gl(e.id),
      u = `${c}
${e.code}
${l}`,
      d = tu(e.id, n, r, i);
    d ? await Kl(u, d, `afterend`) : await Kl(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function $l(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (eu(n) && n.remove(), (n = e));
  }
}
function eu(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function tu(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Zl(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function nu() {
  let e = Wl();
  return t(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(gb),
        o = a && a.dataset[_b] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Ql(t, n, r);
      }
    },
    [e]
  );
}
function ru(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function iu() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((Db = e.timeZone), (Ob = e.locale));
}
function au() {
  let [e, t] = h.useState(0);
  return [e, h.useCallback(() => t((e) => e + 1), [])];
}
function ou(e, t, n) {
  let r = e && document.getElementById(e);
  if (r) {
    fu(r, t);
    return;
  }
  n || s.scrollTo(0, 0);
}
function su(e) {
  let n = i([]);
  return (
    k(() => {
      n.current?.length && (n.current.forEach((e) => e()), (n.current = []));
    }, [e]),
    t((e) => {
      n.current.push(e);
    }, [])
  );
}
function cu(e) {
  if (!e) return rp;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function lu() {
  let e = sr(),
    n = i(void 0);
  return t(
    async (t, r, i, a = !0) => {
      let o = i !== void 0;
      n.current?.abort();
      let c = a ? new AbortController() : void 0;
      n.current = c;
      let l = c?.signal,
        u = It(l);
      if ((r.promise.finally(u), !o)) return ((n.current = void 0), t(l), r.promise);
      t(l);
      let d;
      if (
        (e(
          new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(rp),
          i,
          c
        ),
        await r.promise,
        l?.aborted)
      )
        return;
      let f = s.navigation?.transition;
      d();
      try {
        await f?.finished;
      } catch (e) {
        console.error(`Navigation transition failed`, e);
      }
      l?.aborted || gm();
    },
    [e]
  );
}
function uu({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: r,
  initialRoute: a,
  notFoundPage: o,
  collectionUtils: l,
  routes: u,
  initialLocaleId: d,
  initialCollectionItemId: f,
  locales: m = _p,
  preserveQueryParams: h = !1,
  LayoutTemplate: _,
  EditorBar: v,
  siteCanonicalURL: y,
  adaptLayoutToTextDirection: b,
}) {
  (yr(), er({ disabled: n, routeId: a, initialPathVariables: r, initialLocaleId: d }));
  let w = Kn(),
    [T, E] = au(),
    D = su(T),
    O = lu(),
    ee = Yn(`framer-route-change`),
    { synchronousNavigationOnDesktop: te } = bp(),
    ne = S(() => (!te || !Ca() ? p : (e) => e()), [te]),
    re = nu(),
    ie = i(!0),
    ae = i(),
    oe = i(a),
    se = i(r),
    ce = i(d),
    le = ce.current,
    ue = S(() => m.find(({ id: e }) => (le ? e === le : e === xp)) ?? null, [le, m]),
    de = ue?.textDirection ?? `ltr`,
    fe = b ? de : `ltr`;
  k(() => {
    b && document.documentElement.setAttribute(`dir`, de);
  }, [de, b]);
  let pe = ar(),
    me = S(
      () => ({
        activeLocale: ue,
        locales: m,
        setLocale: async (e) => {
          let t = ee({ localized: !0 });
          await gn({ priority: `user-blocking`, continueAfter: `paint` });
          let n;
          M(e) ? (n = e) : N(e) && (n = e.id);
          let r = m.find(({ id: e }) => e === xp),
            i = m.find(({ id: e }) => e === n);
          if (!i) return;
          let a = oe.current,
            o = u[a];
          if (o)
            try {
              let e = await pe({
                currentLocale: ue,
                nextLocale: i,
                route: o,
                routeId: a,
                defaultLocale: r,
                pathVariables: se.current,
                preserveQueryParams: h,
              });
              if (!e) return;
              let n = Zn(s.history.state) ? s.history.state.paginationInfo : void 0,
                c = e.path;
              ((ie.current = !1),
                (se.current = e.pathVariables),
                (ce.current = i.id),
                O(
                  () => {
                    w(a, a, () => ne(E));
                  },
                  t,
                  async (t = !1) => {
                    if (c)
                      return $n(
                        {
                          routeId: a,
                          pathVariables: e.pathVariables,
                          localeId: i.id,
                          paginationInfo: n,
                        },
                        c,
                        t
                      );
                  },
                  !1
                ));
            } catch {}
        },
      }),
      [ue, E, m, h, u, O, w, ee, ne, pe]
    ),
    he = t(
      (e, t, n, r, i, a, o, s = !1, c) => {
        ie.current = !1;
        let l = oe.current;
        if (
          ((oe.current = e),
          (se.current = i),
          (ce.current = t),
          (ae.current = r),
          D(() => {
            ou(n, s, a);
          }),
          a)
        ) {
          ne(E);
          return;
        }
        O(
          (t) => {
            w(l, e, () => ne(E), t);
          },
          o,
          c,
          !0
        );
      },
      [E, D, O, w, ne]
    );
  tr(oe, he);
  let ge = t(
      async (e, t, r, i, a) => {
        let o = u[e],
          c = pt(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          d = ee({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          f = cu(a);
        if (
          (gn({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(f),
          await gn({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(im)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let p = Ft(o, t),
          m = se.current,
          g = ce.current;
        if (ru({ routeId: oe.current, pathVariables: m }, { routeId: e, pathVariables: r })) {
          d.ignore?.();
          let a = u[e];
          (s.history.state?.hash !== t &&
            !n &&
            a &&
            (f(),
            await Xn(e, a, {
              currentRoutePath: a.path,
              currentPathVariables: m,
              pathVariables: r,
              hash: t,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              currentRoutePathLocalized: a.pathLocalized,
            })),
            ou(p, i, !1));
          return;
        }
        if (!o) return;
        let _ = u[oe.current];
        he(
          e,
          g,
          p,
          kn(y) +
            rr(o, {
              currentRoutePath: _?.path,
              currentRoutePathLocalized: _?.pathLocalized,
              currentPathVariables: m,
              hash: t,
              pathVariables: r,
              localeId: g,
              preserveQueryParams: h,
              siteCanonicalURL: y,
              relative: !1,
            }),
          r,
          !1,
          d,
          i,
          n
            ? void 0
            : async (n = !1) => (
                f(),
                Xn(
                  e,
                  o,
                  {
                    currentRoutePath: _?.path,
                    currentPathVariables: m,
                    currentRoutePathLocalized: _?.pathLocalized,
                    hash: t,
                    pathVariables: r,
                    localeId: g,
                    preserveQueryParams: h,
                    siteCanonicalURL: y,
                  },
                  n
                )
              )
        );
      },
      [u, he, n, h, y, ee]
    ),
    _e = Ot(u),
    ve = oe.current,
    ye = ae.current,
    be = se.current,
    xe = u[ve],
    Se = xe?.path,
    Ce = kb(xe, ve, ye, be, ue, f),
    we = ie.current;
  x(() => {
    re(ve, be ?? {}, me.activeLocale, we);
  }, [re, ve, be, me, we]);
  let Te = S(
    () => ({
      navigate: ge,
      getRoute: _e,
      currentRouteId: ve,
      currentPathVariables: be,
      routes: u,
      collectionUtils: l,
      preserveQueryParams: h,
      pageviewEventData: Ce,
      siteCanonicalURL: y,
      isInitialNavigation: we,
    }),
    [ge, _e, ve, be, u, l, h, y, Ce, we]
  );
  if (!xe) throw Error(`Router cannot find route for ${ve}`);
  let A = !ue || !xe.includedLocales || xe.includedLocales.includes(ue.id),
    Ee = Se && be ? wn(Se, be) : Se,
    De = String(le) + Ee,
    Oe = Ii(() => ({ ...e, display: `contents` }));
  return g(kt, {
    api: Te,
    children: g(wm.Provider, {
      value: me,
      children: g(Tm.Provider, {
        value: fe,
        children: g(Ry, {
          children: g(fr, {
            children: C(Bl, {
              currentRoutePath: Ee,
              routerAPI: Te,
              children: [
                v && g(zl, { EditorBar: v, fast: !0 }),
                g(wy, {
                  children: C(kc, {
                    children: [
                      C(Qm, {
                        notFoundPage: o,
                        defaultPageStyle: e,
                        forceUpdateKey: T,
                        children: [
                          g(Xm.Start, {}),
                          g(du, {
                            LayoutTemplate: _,
                            webPageId: xe?.abTestingVariantId ?? ve,
                            style: e,
                            children: (t) =>
                              g(c, { children: A ? wr(xe.page, t ? Oe : e) : o && wr(o, e) }, De),
                          }),
                        ],
                      }),
                      v && g(zl, { EditorBar: v }),
                      g(hr, {}),
                      g(Xm.End, {}),
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
function du({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? g(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function fu(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function pu(e) {
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
function mu(e) {
  return typeof e == `object` && !!e;
}
function hu(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!mu(r)) return;
    r = r[e];
  }
  return r;
}
function gu(e) {
  return `${e.credentials}:${e.url}`;
}
function _u(e) {
  return M(e) && !Number.isNaN(Number(e));
}
function vu(e, t) {
  switch (e) {
    case `string`:
      return M(t) || $e(t);
    case `color`:
      return M(t);
    case `boolean`:
      return Qe(t);
    case `number`:
      return $e(t) || _u(t);
    case `link`:
    case `image`:
      return M(t) && rl(t, !1);
    default:
      return !1;
  }
}
function yu(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = hu(e.data, t.resultKeyPath);
  if (nt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!vu(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function bu(e, t) {
  if (G.current() === G.canvas) return !1;
  let n = Math.max(t * 1e3, jb);
  return Date.now() >= e + n;
}
function xu(e) {
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
    includeDataObserver: d = !1,
    localeId: f,
    locales: p,
    preserveQueryParams: m,
    EditorBar: _,
    defaultPageStyle: v,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    h.useEffect(() => {
      n || Th.start();
    }, []),
    n
      ? g(cr, {
          value: r ?? `preview`,
          children: g(Fe, {
            reducedMotion: u ? `user` : `never`,
            children: g(un, {
              collectionUtils: c,
              children: g(Ub, {
                children: g(ub.Provider, {
                  value: a,
                  children: g(Ul, {
                    loadSnippetsModule: C,
                    children: g(uu, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: f,
                      initialCollectionItemId: w,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: p,
                      defaultPageStyle: v ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: m,
                      EditorBar: _,
                      disableHistory: y,
                      LayoutTemplate: b,
                      siteCanonicalURL: x,
                      adaptLayoutToTextDirection: S,
                    }),
                  }),
                }),
              }),
            }),
          }),
        })
      : g(d ? Lv : h.Fragment, {
          children: g(jt, {
            routes: s,
            children: g(Dv, { children: h.isValidElement(t) ? t : h.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Su(e) {
  return {
    trace(...t) {
      return S_.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return S_.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return S_.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return S_.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return S_.getLogger(e)?.error(...t);
    },
    get enabled() {
      return S_.getLogger(e) !== void 0;
    },
  };
}
function Cu(e) {
  let t = e.next();
  return (P(t.done, `Generator must not yield`), t.value);
}
async function wu(e, t = e.next()) {
  for (; !t.done;) {
    let n = await t.value;
    t = e.next(n);
  }
  return t.value;
}
function Tu(e) {
  let t = e.next();
  return t.done ? t.value : wu(e, t);
}
function* z(e) {
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
            wu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function* Eu(e) {
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
            wu(n, e).then((e) => {
              t[i] = e;
            })
          );
    } else t[i] = n;
  }
  return (r.length > 0 && (yield Promise.all(r)), t);
}
function Du(e) {
  return Au(e) || Nu(e);
}
function Ou(e) {
  return et(e) && e.every(N);
}
function ku(e) {
  return N(e) && Ze(e.read) && Ze(e.preload);
}
function Au(e) {
  return Ou(e) || ku(e);
}
function ju(e) {
  return N(e) && N(e.schema);
}
function Mu(e) {
  return N(e) && N(e.collectionByLocaleId);
}
function Nu(e) {
  return ju(e) || Mu(e);
}
function Pu(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = ld(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function Fu(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => Y.cast(e, t.definition)) };
  }
  return null;
}
function Iu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Lu(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Ru(e) {
  return Lu(e)?.value ?? !1;
}
function zu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Bu(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Vu(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Hu(e) {
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
function Uu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Wu(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function Gu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ku(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function qu(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function Ju(e) {
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
function Yu(e, t) {
  return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Xu(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Zu(e) {
  return Xu(e)?.value ?? null;
}
function Qu(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = ld(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function $u(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = Y.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function ed(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : n > r ? 1 : 0;
}
function td(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function nd(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function rd(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function id(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : n > r ? 1 : 0;
}
function ad(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function od(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : r > i ? 1 : 0
  );
}
function sd(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function cd(e) {
  return sd(e)?.value ?? null;
}
function ld(e, t, n) {
  if (rt(e) || rt(t)) return (P(e === t), 0);
  switch (e.type) {
    case `array`:
      return (P(e.type === t.type), Pu(e, t, n));
    case `boolean`:
      return (P(e.type === t.type), Iu(e, t));
    case `color`:
      return (P(e.type === t.type), zu(e, t));
    case `date`:
      return (P(e.type === t.type), Vu(e, t));
    case `enum`:
      return (P(e.type === t.type), Uu(e, t));
    case `file`:
      return (P(e.type === t.type), Gu(e, t));
    case `link`:
      return (P(e.type === t.type), qu(e, t));
    case `number`:
      return (P(e.type === t.type), Yu(e, t));
    case `object`:
      return (P(e.type === t.type), Qu(e, t, n));
    case `responsiveimage`:
      return (P(e.type === t.type), ed(e, t));
    case `richtext`:
      return (P(e.type === t.type), nd(e, t));
    case `vectorsetitem`:
      return (P(e.type === t.type), id(e, t));
    case `string`:
      return (P(e.type === t.type), od(e, t, n));
    default:
      F(e);
  }
}
async function ud(e, t) {
  return ku(e) ? (await e.preload(t), e.read(t)) : e;
}
function dd(e) {
  if (!Nu(e) || !e.id) return;
  let t = Kb.get(e.id);
  if (!t) return (Kb.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function fd(e) {
  let t = dd(e);
  if (t) return t;
  let n = qb.get(e);
  if (n) return n;
  let r = `${Jb}${Math.random().toString(16).slice(2)}`;
  return (qb.set(e, r), r);
}
function pd(e, t) {
  if (Au(e)) {
    let n = fd(e) + (t?.id ?? xp),
      r = Yb.get(n);
    if (r) return r;
    let i = new Gb(e, t);
    return (Yb.set(n, i), i);
  }
  if (ju(e)) return e;
  if (Mu(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  F(e, `Unsupported collection type`);
}
function md() {
  return 25;
}
function hd() {
  return 12500;
}
function gd(e) {
  return e;
}
function _d(e) {
  return e;
}
function vd(e) {
  return N(e) && Ze(e.getHash);
}
function B(e, ...t) {
  return _d(
    `${e}(${t.map((e) => (P(!(e instanceof ix), `Pass CollectionMetadata.id instead`), P(!(e instanceof sx), `Pass FieldMetadata.id instead`), P(!(e instanceof ax), `Pass IndexMetadata.id instead`), P(!(e instanceof ex), `Pass RelationalNode.group.id instead`), P(!(e instanceof Zb), `Pass Group.id instead`), vd(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`
  );
}
function yd(e, t) {
  return { collectionId: fd(e), pointer: t };
}
function bd(e) {
  return N(e) && M(e.collectionId);
}
function xd(e, t) {
  return { collectionId: fd(e), pointer: t };
}
function Sd(e) {
  return N(e) && M(e.collectionId);
}
function Cd(e, t) {
  let n = new Map();
  function r(e) {
    if (N(e))
      if (e.type === `Collection` && Du(e.data)) {
        let r = pd(e.data, t),
          i = fd(r);
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
function wd(e) {
  return e;
}
function Td(e) {
  return e;
}
function Ed(e) {
  return e;
}
function Dd(e) {
  return Array(e).fill({ type: `All` });
}
function Od(e, ...t) {
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
function kd(e) {
  let t = new Set();
  if (!e) return t;
  Od(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
  for (let n of e.value)
    n &&
      (Od(
        n.type === `string`,
        `ScalarIntersection expects an array of strings, got an array with:`,
        n.type
      ),
      t.add(n.value));
  return t;
}
function Ad(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function jd(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Md(e) {
  return `${e.functionName}(${e.arguments.map((e) => Ld(e)).join(`, `)})`;
}
function Nd(e) {
  let t = `CASE`;
  e.value && (t += ` ${Ld(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Ld(n.when)} THEN ${Ld(n.then)}`;
  return (e.else && (t += ` ELSE ${Ld(e.else)}`), (t += ` END`), t);
}
function Pd(e) {
  let t = Ld(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function Fd(e) {
  let t = Ld(e.left),
    n = Ld(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Id(e) {
  return `CAST(${Ld(e.value)} as ${e.dataType})`;
}
function Ld(e) {
  switch (e.type) {
    case `Identifier`:
      return Ad(e);
    case `LiteralValue`:
      return jd(e);
    case `FunctionCall`:
      return Md(e);
    case `Case`:
      return Nd(e);
    case `UnaryOperation`:
      return Pd(e);
    case `BinaryOperation`:
      return Fd(e);
    case `TypeCast`:
      return Id(e);
    case `Select`:
      return `${Hd(e)}`;
    default:
      F(e);
  }
}
function Rd(e) {
  return ju(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function zd(e) {
  let t = `${Bd(e.left)} LEFT JOIN ${Bd(e.right)}`;
  return (e.constraint && (t += ` ON ${Ld(e.constraint)}`), t);
}
function Bd(e) {
  switch (e.type) {
    case `Collection`:
      return Rd(e);
    case `LeftJoin`:
      return zd(e);
    default:
      F(e);
  }
}
function Vd(e) {
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
function Hd(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Ld(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Bd(e.from)}`),
    e.where && (t += ` WHERE ${Ld(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Ld(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Ld(e.limit)}`),
    e.offset && (t += ` OFFSET ${Ld(e.offset)}`),
    Vd(t)
  );
}
function Ud(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(nt(e) || N(e)))
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
function Wd(e, t, n) {
  return h.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Gd(e) {
  for (let [t, n] of Object.entries(e)) if (V.matchMedia(n).matches) return t;
}
function Kd(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && V.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function qd(e, n, r = !0) {
  let a = u(wv),
    o = Va(),
    s = i(!o && ya() ? (Gd(n) ?? e) : e),
    c = i(r && a ? e : s.current),
    l = go(),
    d = ge(),
    f = t(
      (e) => {
        if (e !== s.current || e !== c.current) {
          let t = function () {
            ((s.current = c.current = e),
              p(() => {
                l();
              }));
          };
          o
            ? t()
            : d(() => {
                t();
              });
        }
      },
      [d, l, o]
    );
  return (
    j_(() => {
      o && f(e);
    }, [e, o, f]),
    j_(() => {
      !r || a !== !0 || f(s.current);
    }, []),
    x(() => {
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = V.matchMedia(r),
          i = (e) => {
            e.matches && f(t);
          };
        (Jd(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Yd(e, t));
    }, [n, f]),
    [s.current, c.current]
  );
}
function Jd(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Yd(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function Xd(e) {
  setTimeout(e, 1);
}
function Zd(e) {
  let t = new Set(),
    n = Kd(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Qd(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (op ? V.requestIdleCallback : Xd)(() => {
    document.querySelector(mS)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Qd(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    $d(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Qd(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function $d(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function ef(e, t) {
  return `${e}-${t}`;
}
function tf(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (P(r !== void 0, `nextVariant should be defined`), r);
}
function nf(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function rf(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function af(e, t) {
  return t[e] || `framer-v-${e}`;
}
function of(e, t, n) {
  return e && n.has(e) ? e : t;
}
function sf() {
  let e = i(),
    n = i(),
    r = t(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    x(
      () => () => {
        r();
      },
      [r]
    ),
    t(
      (t) => {
        if (!document.hidden) {
          (t(), r());
          return;
        }
        if (((n.current = t), e.current)) return;
        let i = () => {
          document.hidden || (n.current?.(), r());
        };
        ((e.current = i), document.addEventListener(`visibilitychange`, i));
      },
      [r]
    )
  );
}
function cf() {
  let e = i(),
    n = i(!1),
    r = i(),
    a = u(sv);
  return (
    x(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    t(
      (t, i) => {
        if (!i?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Xo(a, `undefined`, i.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [a]
    )
  );
}
function lf(e) {
  let n = sf(),
    r = cf();
  return t(
    (t, i = !1) => {
      if (ap) {
        t();
        return;
      }
      n(i && e ? () => r(t, e) : t);
    },
    [n, r, e]
  );
}
async function uf() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (_S = () => {
        (e(), (t = void 0));
      }));
  });
}
function df(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (gS = uf()));
}
function ff() {
  (performance.mark(`click-received-listener`), (gS = void 0), _S?.(), (_S = void 0));
}
function pf(e = !1) {
  x(() => {
    e &&
      (document.addEventListener(`pointerup`, df, !0),
      document.__proto__.addEventListener.call(document, `click`, ff, !0));
  }, [e]);
}
function mf({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: a,
  cycleOrder: o = [],
  variantProps: s = {},
  variantClassNames: c = {},
  ref: l,
}) {
  let u = go(),
    d = tl(),
    f = Ii(() => new Set(o)),
    { yieldOnTap: m } = bp();
  pf(m);
  let h = lf(l),
    g = i({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: of(e, n, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: a,
      cycleOrder: o,
      transitions: r,
    }),
    _ = t((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = g.current,
        o = of(e, a, f),
        s = rf(i?.[o], t, n, !1, r);
      return [o, s ? ef(o, s) : void 0];
    }, []),
    v = t(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = _(r);
        if (o === e && s === t) return;
        (a && (g.current.isError = !1),
          (g.current.baseVariant = o || n),
          (g.current.gestureVariant = s));
        let c = m && g.current.isPressedHasUpdated;
        (c &&
          gS &&
          (performance.mark(`wait-for-tap-start`),
          await gS,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await gn({ priority: `user-blocking`, continueAfter: `paint` }),
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
    y = t(
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
    b = t(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = g.current;
        v(i, a, n, e === hS ? tf(r || [], i || n) : e, t, !0);
      },
      [v]
    ),
    x = t(() => {
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
      isError: ee,
      loadedBaseVariant: k,
    } = g.current,
    te = Wd(g.current.baseVariant, g.current.gestureVariant, s);
  return S(() => {
    let e = [];
    C !== T && e.push(C);
    let t = E?.[C]?.loading,
      n = !ee && !d && !!t && !k[C],
      r = n ? ef(C, `loading`) : w;
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
        transition: nf(g.current.transitions, C),
        setVariant: b,
        setGestureState: y,
        clearLoadingGesture: x,
        addVariantProps: te,
        gestureHandlers: a,
        classNames: Ks(af(C, c), rf(i, D, O, n, ee)),
      }
    );
  }, [C, w, D, O, k, te, b, T, E, y, x, c]);
}
function hf(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!Nc()) return r(e);
  let a = gf(e, r),
    o = !1;
  function s(r, s) {
    let c = Ic();
    if (Wc(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? g(bm.Provider, {
            value: n,
            children: g(Pc, {
              getErrorMessage: Vc.bind(null, t, n),
              fallback: g(e, { ...r, ref: s }),
              children: g(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Mc(a.error), Mc(Vc(t, n)), jc(a.error), !0)), g(e, { ...r, ref: s }));
    if (a.status === `success`)
      return g(bm.Provider, { value: n, children: g(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return h.forwardRef(s);
}
function gf(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function _f(e, t) {
  return SS && !t
    ? Document.parseHTMLUnsafe(e)
    : ((xS ??= new DOMParser()), xS.parseFromString(e, t ?? `text/html`));
}
function vf(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Kr(n.x, n.y),
    i = zh(Kr(0.5, 0.5), r),
    a = K.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Kr.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  P(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Kr.isEqual(e, s) && !Kr.isEqual(e, c));
  P(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = zh.intersection(i, zh(s, c)),
    f = zh.intersection(i, zh(l, u));
  return (P(d && f, `linearGradientLine: Must have a start and end point.`), zh(d, f));
}
function yf(e, t) {
  let n = vf(e.angle),
    r = Do(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = zh.pointAtPercentDistance(n, i),
    s = zh.pointAtPercentDistance(n, a),
    c = Oe([i, a], [0, 1]);
  return {
    id: `id${t}g${K_.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: B_.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function bf(e, t) {
  return {
    id: `id${t}g${J_.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Do(e).map((t) => ({
      color: t.value,
      alpha: B_.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function xf(e) {
  if (!M(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return $e(parseFloat(t));
}
function Sf(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return $e(n) ? n : 50;
}
function Cf(e) {
  return xf(e) ? Sf(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function wf(e) {
  return xf(e) ? Sf(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Tf(e, t, n, r) {
  if (((e = rh.get(e, `#09F`)), !k_.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * Cf(e.positionX) + f),
        (d = (t.height - l) * wf(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * wf(e.positionY)))
        : ((n = g), (u = (1 - g) * Cf(e.positionX))),
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
function Ef(e) {
  return e.startsWith(`data:${CS}`);
}
function Df(e, t) {
  if (/^\w+:/u.test(e) && !Ef(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = G.current() === G.export;
  return S_.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Of(e) {
  try {
    let t = _f(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function kf(e, t) {
  jf(e, Af(t));
}
function Af(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function jf(e, t) {
  (Mf(e, t),
    Array.from(e.children).forEach((e) => {
      jf(e, t);
    }));
}
function Mf(e, t) {
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
function Nf(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (AS[t[2]] || 1));
}
function Pf(e) {
  let t = Nf(e.getAttribute(`width`)),
    n = Nf(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function Ff(e) {
  return e.indexOf(`image`) >= 0;
}
function If(e) {
  return e.indexOf(`var(--`) >= 0;
}
function Lf(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function Rf(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? V,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = kS.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Qi(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    I(s) &&
    I(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function zf(e, t, n) {
  let r = Vf(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function Bf(e) {
  return e ? (e.fonts ?? Tr()) : Tr();
}
function Vf(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    Hf(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(Uf) })
      : t.fonts.push(Uf(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function Hf(e) {
  return FS in e;
}
function Uf(e) {
  let t = Wf(e) || Gf(e) ? e : Kf(e);
  return Gf(t) ? t : qf(t);
}
function Wf(e) {
  return `source` in e;
}
function Gf(e) {
  return `cssFamilyName` in e;
}
function Kf(e) {
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
function qf(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${bS}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function Jf(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function Yf(e) {
  return e.loader;
}
function Xf(e, t, n) {
  let r = Yf(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var Zf,
  Qf,
  $f,
  ep,
  tp,
  np,
  rp,
  ip,
  ap,
  op,
  sp,
  cp,
  lp,
  up,
  dp,
  fp,
  pp,
  mp,
  hp,
  gp,
  _p,
  vp,
  yp,
  bp,
  xp,
  Sp,
  Cp,
  wp,
  Tp,
  Ep,
  Dp,
  Op,
  kp,
  Ap,
  jp,
  Mp,
  Np,
  Pp,
  V,
  Fp,
  Ip,
  Lp,
  Rp,
  zp,
  Bp,
  Vp,
  Hp,
  Up,
  Wp,
  Gp,
  Kp,
  qp,
  Jp,
  Yp,
  Xp,
  Zp,
  Qp,
  $p,
  em,
  tm,
  nm,
  rm,
  im,
  am,
  om,
  sm,
  cm,
  lm,
  um,
  dm,
  fm,
  pm,
  mm,
  hm,
  gm,
  _m,
  vm,
  ym,
  bm,
  xm,
  Sm,
  Cm,
  wm,
  Tm,
  Em,
  Dm,
  Om,
  km,
  Am,
  jm,
  Mm,
  Nm,
  Pm,
  Fm,
  Im,
  Lm,
  Rm,
  zm,
  Bm,
  Vm,
  Hm,
  Um,
  Wm,
  Gm,
  Km,
  qm,
  H,
  U,
  Jm,
  Ym,
  Xm,
  Zm,
  Qm,
  $m,
  eh,
  th,
  nh,
  rh,
  ih,
  ah,
  oh,
  sh,
  ch,
  lh,
  uh,
  dh,
  fh,
  ph,
  mh,
  hh,
  gh,
  W,
  _h,
  vh,
  yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
  G,
  Dh,
  Oh,
  kh,
  Ah,
  jh,
  Mh,
  Nh,
  Ph,
  Fh,
  Ih,
  Lh,
  Rh,
  zh,
  K,
  Bh,
  Vh,
  Hh,
  Uh,
  Wh,
  Gh,
  Kh,
  qh,
  Jh,
  Yh,
  Xh,
  Zh,
  Qh,
  $h,
  eg,
  tg,
  ng,
  rg,
  ig,
  ag,
  og,
  sg,
  cg,
  lg,
  ug,
  dg,
  fg,
  pg,
  mg,
  hg,
  gg,
  _g,
  vg,
  yg,
  bg,
  xg,
  Sg,
  Cg,
  wg,
  Tg,
  Eg,
  Dg,
  Og,
  kg,
  Ag,
  jg,
  Mg,
  Ng,
  Pg,
  Fg,
  Ig,
  Lg,
  Rg,
  zg,
  Bg,
  Vg,
  Hg,
  Ug,
  Wg,
  Gg,
  Kg,
  qg,
  Jg,
  Yg,
  Xg,
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
  q,
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
  J,
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
  Y,
  Wb,
  Gb,
  Kb,
  qb,
  Jb,
  Yb,
  Xb,
  X,
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
  Z,
  cx,
  lx,
  ux,
  dx,
  fx,
  px,
  mx,
  hx,
  gx,
  Q,
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
  $,
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
  IS = e(() => {
    (a(
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
      Ne(),
      ne(),
      n(),
      T(),
      m(),
      (Zf = ue({
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
      (Qf = ue({
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
      ($f = ue({
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
      (ep = ue({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = $f();
        },
      })),
      (tp = ue({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = ep(),
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
      (np = ue({
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
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= s),
                (this.family = e),
                (this.style = t.style || `normal`),
                (this.weight = t.weight || `normal`),
                (this.stretch = t.stretch || `normal`),
                (this.context = n));
            }
            var l = null,
              u = null,
              d = null,
              f = null;
            function p(e) {
              return (
                u === null &&
                  (m(e) && /Apple/.test(s.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        s.navigator.userAgent
                      )),
                      (u = !!e && 603 > parseInt(e[1], 10)))
                    : (u = !1)),
                u
              );
            }
            function m(e) {
              return (f === null && (f = !!e.document.fonts), f);
            }
            function h(e, t) {
              var n = e.style,
                r = e.weight;
              if (d === null) {
                var i = document.createElement(`div`);
                try {
                  i.style.font = `condensed 100px sans-serif`;
                } catch {}
                d = i.style.font !== ``;
              }
              return [n, r, d ? e.stretch : ``, `100px`, t].join(` `);
            }
            ((c.prototype.load = function (e, t) {
              var a = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), c)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      u = setTimeout(function () {
                        t(Error(`` + d + `ms timeout exceeded`));
                      }, d);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(u), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              s.navigator.userAgent
                            )),
                            (l =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            l &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(u),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (u = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(c),
                      g = new r(c),
                      _ = new r(c),
                      v = -1,
                      y = -1,
                      b = -1,
                      x = -1,
                      S = -1,
                      C = -1,
                      w = document.createElement(`div`);
                    ((w.dir = `ltr`),
                      i(m, h(a, `sans-serif`)),
                      i(g, h(a, `serif`)),
                      i(_, h(a, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      a.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      o(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(a, `"` + a.family + `",sans-serif`)),
                      o(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(a, `"` + a.family + `",serif`)),
                      o(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(a, `"` + a.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((s.FontFaceObserver = c),
                  (s.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (rp = () => {}),
      (ip = s !== void 0),
      (ap = (() =>
        ip &&
        (o.webdriver ||
          /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(o.userAgent)))()),
      (op = ip && typeof s.requestIdleCallback == `function`),
      (sp = (() => (op ? s.requestIdleCallback : setTimeout))()),
      (cp = () => () => {}),
      (lp = () => !1),
      (up = new Map()),
      (dp = ip ? void 0 : new Set()),
      (fp = `preload`),
      (pp = Object.keys),
      (mp = `equals`),
      (hp = (() => h.createContext({}))()),
      (gp = (() => h.createContext({}))()),
      (_p = []),
      (vp = h.createContext(void 0)),
      (vp.displayName = `LibraryFeaturesContext`),
      (yp = (() => vp.Provider)()),
      (bp = () => h.useContext(vp) ?? {}),
      (xp = `default`),
      (Sp = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Cp = class e {
        constructor(e, t) {
          ((this.resolver = e),
            (this.cacheHash = t),
            A(this, `promiseState`, Sp.Pending),
            A(this, `preloadPromise`),
            A(this, `value`),
            A(this, `reason`),
            A(this, `read`, () => {
              if (this.promiseState === Sp.Fulfilled) return this.value;
              throw this.promiseState === Sp.Rejected
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
          return this.promiseState === Sp.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Sp.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Sp.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && dp !== void 0 && dp.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Sp.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Sp.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && up.has(this.cacheHash) ? up.get(this.cacheHash) : this.resolver();
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
      (wp = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (Tp = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (Ep = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (Dp = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
      (Op = -1),
      (kp = -2),
      (Ap = -3),
      (jp = -4),
      (Mp = -5),
      (Np = -6),
      (Pp = -7),
      (V = ip
        ? s
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
      (Fp = 2),
      (Ip = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (Lp = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (zp = class {
        constructor() {
          (A(this, `payload`, nn()), A(this, `isEmpty`, !0));
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
              return Qt(this.payload);
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
      (Bp = (() => (ip ? void 0 : new zp()))()),
      (Vp = (() => Lp.CollectionUtilsCache)()),
      (Hp = new WeakMap()),
      (Up = d(void 0)),
      (Wp = class {
        constructor(e, t) {
          ((this.collectionId = t),
            A(this, `module`),
            A(this, `cacheMap`, new Map()),
            (this.module = new Cp(async () => {
              try {
                let t = await e();
                return (P(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(dt(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        callUtilsMethod(e, t, n) {
          let r = sn(n),
            i = cn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (Bp !== void 0) {
              if (ct(e)) return e.then((e) => (Bp.set(Vp, i, e), e));
              Bp.set(Vp, i, e);
            }
            return e;
          }
          if (an(Vp, i)) {
            let e = on(Vp, i);
            return (this.cacheMap.set(i, new Cp(() => e)), e);
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
            (Bp !== void 0 && Bp.set(Vp, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Cp(() =>
            s
              .then((e) => (Bp !== void 0 && Bp.set(Vp, i, e), e))
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
      (Gp = (() => V.scheduler && `yield` in V.scheduler)()),
      (Kp = (() => V.scheduler && `postTask` in V.scheduler)()),
      (qp = new Set()),
      (Jp = !ap),
      (Yp = 46),
      (Xp = 47),
      (Zp = (e, t) => e.charCodeAt(t)),
      (Qp = (e, t) => e.lastIndexOf(t)),
      ($p = (e, t, n) => e.slice(t, n)),
      (em = !1),
      (tm = `/`),
      (nm = (e) => e === Xp),
      (rm = new Set([`/404.html`, `/404`, `/404/`])),
      (im = RegExp(`:([a-z]\\w*)`, `gi`)),
      (am = `framer_variant`),
      (om = h.createContext({ global: void 0, routes: {} })),
      (sm = 10),
      (cm = 1e4),
      (lm = (e) => `--view-transition-${e}`),
      (um = {
        circle: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Fn(e);
            return t === `start`
              ? `clip-path: circle(0 at ${n}px ${r}px);`
              : `clip-path: circle(${Math.hypot(Math.max(n, s.innerWidth - n), Math.max(r, s.innerHeight - r))}px at ${n}px ${r}px);`;
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
              `${lm(`conic-offset`)}: ${r}%;`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${lm(`conic-offset`)})`,
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
        @property ${lm(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
        },
        inset: {
          makeKeyframe: (e, t) => {
            let { x: n, y: r } = Fn(e),
              i = s.innerHeight - r,
              a = s.innerWidth - n;
            return t === `start`
              ? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
              : `clip-path: inset(0 round 0);`;
          },
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = Pn(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${lm(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${lm(`blinds-width`)})`,
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
            @property ${lm(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = (t === `start` && n === `exit`) || (t === `end` && n === `enter`) ? 1 : 0;
            return `${lm(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${lm(`wipe-offset`)})`,
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
            @property ${lm(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (dm = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (fm = `view-transition-styles`),
      (pm = {
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
      (mm = () => {}),
      (gm = () => {
        (hm ||
          ((hm = document.createElement(`div`)),
          hm.setAttribute(`aria-live`, `assertive`),
          hm.setAttribute(`aria-atomic`, `true`),
          (hm.style.position = `absolute`),
          (hm.style.transform = `scale(0)`),
          document.body.append(hm)),
          setTimeout(() => {
            hm.textContent = document.title;
          }, 60));
      }),
      (_m = !0),
      (vm = (() => {
        if (o === void 0) return !1;
        let e = o.userAgent,
          t = e.indexOf(`Chrome/`),
          n = +e.slice(t + 7, e.indexOf(`.`, t));
        return n > 101 && n < 128;
      })()),
      (ym = (() => ip && typeof s.navigation?.back == `function`)()),
      (bm = h.createContext(null)),
      (xm = (() => {
        let e = d(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (Sm = async () => {}),
      (Cm = { activeLocale: null, locales: [], setLocale: Sm }),
      (wm = (() => {
        let e = h.createContext(Cm);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (Tm = (() => {
        let e = h.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Em = (() => {
        let e = d({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (Dm = `__f_replay`),
      (Om =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (km = (e) => {
        e.target?.closest?.(`#main`) &&
          (pr(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (Am = !1),
      (qm = [gr]),
      (Km = [gr]),
      (Gm = [gr]),
      (Wm = [gr]),
      (Um = [gr]),
      (Hm = [gr]),
      (Vm = [gr]),
      (Bm = [gr]),
      (zm = [gr]),
      (Rm = [gr]),
      (Lm = [gr]),
      (Im = [gr]),
      (Fm = [gr]),
      (Pm = [gr]),
      (Nm = [gr]),
      (Mm = [gr]),
      (jm = [gr]),
      (U = class {
        constructor() {
          (De(H, 5, this),
            A(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            A(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            A(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            A(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            A(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            A(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            A(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            _r(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            _r(
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
            _r(
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
            _r(
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
            _r(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            _r(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            _r(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          _r(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          _r(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (H = le(null)),
      Ce(H, 1, `markRenderStart`, qm, U),
      Ce(H, 1, `markRenderEnd`, Km, U),
      Ce(H, 1, `markUseInsertionEffectsStart`, Gm, U),
      Ce(H, 1, `markUseInsertionEffectRouterStart`, Wm, U),
      Ce(H, 1, `markUseInsertionEffectsEnd`, Um, U),
      Ce(H, 1, `markUseLayoutEffectsStart`, Hm, U),
      Ce(H, 1, `markRouterUseLayoutEffectStart`, Vm, U),
      Ce(H, 1, `markUseLayoutEffectsEnd`, Bm, U),
      Ce(H, 1, `markUseEffectsStart`, zm, U),
      Ce(H, 1, `markUseEffectsRouterStart`, Rm, U),
      Ce(H, 1, `markUseEffectsAreSynchronous`, Lm, U),
      Ce(H, 1, `markUseEffectsEnd`, Im, U),
      Ce(H, 1, `markRafStart`, Fm, U),
      Ce(H, 1, `markRafEnd`, Pm, U),
      Ce(H, 1, `markLayoutStylePaintEnd`, Nm, U),
      Ce(H, 1, `measureMutationEffects`, Mm, U),
      Ce(H, 1, `measureUnattributedHydrationOverhead`, jm, U),
      Te(H, U),
      (Ym = !1),
      (Xm = { Start: Sr, End: Cr }),
      (Zm = class extends Error {}),
      (Qm = class extends _ {
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
          if (!(this.state.error instanceof Zm)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return wr(e, t);
        }
      }),
      ($m = Object.freeze([])),
      (th = new Set()),
      (nh = class {
        constructor() {
          (A(this, `observers`, new Set()), A(this, `transactions`, {}));
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
      (rh = (() => {
        function e(e) {
          return (
            Br(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Vr(e) ? e : new oh(e)
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
          (e.get = (e, t) => (e == null ? t : Vr(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Vr(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (ih = `onUpdate`),
      (ah = `finishTransaction`),
      (oh = class {
        constructor(e) {
          ((this.value = e), A(this, `observers`, new nh()));
        }
        static interpolationFor(e, t) {
          if (Vr(e)) return Hr(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Vr(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Wr(e.x, t.x), y: Wr(e.y, t.y) })),
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
      })((Kr ||= {})),
      (sh = {
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
      (ch = new ((() => Zf().Hsluv)())()),
      (lh = (() => {
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
      (uh =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (dh = (e) => {
        let { r: t, g: n, b: r, a: i } = gi(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (fh = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        vi({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (ph = (e) => {
        let { r: t, g: n, b: r, a: i } = gi(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (mh = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        vi({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (hh = class e {
        constructor(e) {
          (A(this, `format`, `p3`),
            A(this, `r`),
            A(this, `g`),
            A(this, `b`),
            A(this, `a`),
            (this.r = e.r ?? 0),
            (this.g = e.g ?? 0),
            (this.b = e.b ?? 0),
            (this.a = e.a ?? 1));
        }
        hsv() {
          return yi(this);
        }
        rgb() {
          return Ci(this);
        }
        hsl() {
          return ni(this.r, this.g, this.b);
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
              return new e(xi(t));
            case `srgb`:
              return new e(Si(xi(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Si({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = W(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = mi(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!M(t) || !W.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (gh = new Map()),
      (W = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = gh.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (gh.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = wi(t, n, r, i);
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
          (e.isColorString = (e) => (typeof e == `string` ? di(e) !== !1 : !1)),
          (e.isColorObject = (e) =>
            N(e) &&
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
          (e.toHex = (e, t = !1) => ti(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => (typeof e == `string` ? hh.isP3String(e) : !1)),
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
          (e.toHusl = (e) => ({ ...Zr(e.r, e.g, e.b), a: e.roundA })),
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
            let t = ai(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ai(e.r, e.g, e.b),
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
            let t = ti(e.r, e.g, e.b, !0);
            for (let e of Object.keys(sh)) if (sh[e] === t) return e;
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
                r: qr(i, [0, 1], [t.r, r.r], a),
                g: qr(i, [0, 1], [t.g, r.g], a),
                b: qr(i, [0, 1], [t.b, r.b], a),
                a: qr(i, [0, 1], [t.a, r.a], a),
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
                h: qr(i, [0, 1], [u, u + f], a),
                s: qr(i, [0, 1], [c.s, l.s], a),
                l: qr(i, [0, 1], [c.l, l.l], a),
                a: qr(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Qr(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => ni(e, t, n)),
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
        let r = Oe([0, 255], [0, 1]);
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
      (_h = (e) => e instanceof We),
      (vh = (() => Qf().EventEmitter)()),
      (yh = class {
        constructor() {
          A(this, `_emitter`, new vh());
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
      (bh = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (xh = (() => V.requestAnimationFrame || bh)()),
      (Sh = (e) => xh(e)),
      (Ch = (() => 1 / 60)()),
      (wh = class extends yh {
        constructor(e = !1) {
          (super(),
            A(this, `_started`, !1),
            A(this, `_frame`, 0),
            A(this, `_frameTasks`, []),
            A(this, `tick`, () => {
              this._started &&
                (Sh(this.tick),
                this.emit(`update`, this._frame, Ch),
                this.emit(`render`, this._frame, Ch),
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
          Ch = e;
        }
        static get TimeStep() {
          return Ch;
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Sh(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Ch;
        }
      }),
      (Th = new wh()),
      (Eh = {
        target: V.location.origin === `https://screenshot.framer.invalid` ? `EXPORT` : `PREVIEW`,
        zoom: 1,
      }),
      (G = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Eh.target,
        hasRestrictions: () => {
          let e = Eh.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Dh = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      je({
        borderTopWidth: Dh(`y`),
        borderLeftWidth: Dh(`x`),
        borderRightWidth: Dh(`x`),
        borderBottomWidth: Dh(`y`),
      }),
      (Oh = !1),
      (kh = `calc(`),
      (Ah = `*`),
      (jh = {
        correct: (e, t) => {
          if (!t.target) return e;
          if (typeof e == `string`) {
            if (e.startsWith(kh)) {
              let [n, ...r] = e.slice(kh.length).split(Ah);
              if (nt(n) || !qe.test(n.trim())) return e;
              let i = parseFloat(n),
                a = ji(i, t.target.x),
                o = ji(i, t.target.y);
              return `${Mi(a, r)} ${Mi(o, r)}`;
            }
            if (qe.test(e)) e = parseFloat(e);
            else return e;
          }
          return `${ji(e, t.target.x)}% ${ji(e, t.target.y)}%`;
        },
      }),
      (Mh = (() => ({
        borderRadius: {
          ...jh,
          applyTo: [
            `borderTopLeftRadius`,
            `borderTopRightRadius`,
            `borderBottomLeftRadius`,
            `borderBottomRightRadius`,
          ],
        },
        borderTopLeftRadius: jh,
        borderTopRightRadius: jh,
        borderBottomLeftRadius: jh,
        borderBottomRightRadius: jh,
      }))()),
      (Nh = h.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Ph = {
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
      (Fh = (() => ({
        ...Ph,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }))()),
      (Ih = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Lh = (() => ({ ...Ih, fontWeight: 500 }))()),
      (Rh = (() => ({
        ...Ih,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }))()),
      (zh = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Hi(Kr.angleFromX(t.a, t.b)),
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
            return e(Kr(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Kr.distance(e.a, e.b)),
          e
        );
      })()),
      (K = {
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
        divide: (e, t) => K.multiply(e, 1 / t),
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
          x: Ur(e.x, t),
          y: Ur(e.y, t),
          width: Ur(e.width, t),
          height: Ur(e.height, t),
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
          maxX: K.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: K.maxY(e),
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
          return { x: a, y: o, width: Kr.distance(t, n), height: Kr.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(K.minX)), y: Math.min(...e.map(K.minY)) },
            n = { x: Math.max(...e.map(K.maxX)), y: Math.max(...e.map(K.maxY)) };
          return K.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: K.minX(e), y: K.minY(e) },
          { x: K.minX(e), y: K.maxY(e) },
          { x: K.maxX(e), y: K.minY(e) },
          { x: K.maxX(e), y: K.maxY(e) },
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
            t.x < K.minX(e) ||
            t.x > K.maxX(e) ||
            t.y < K.minY(e) ||
            t.y > K.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of K.points(t)) if (!K.containsPoint(e, n)) return !1;
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
          !(t.x >= K.maxX(e) || K.maxX(t) <= e.x || t.y >= K.maxY(e) || K.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = K.maxX(e),
            r = K.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = K.maxY(e),
            r = K.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => K.intersects(t, e)) === void 0,
        isEqual: (e, t) => K.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > K.maxX(e) && (n = t.x - K.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > K.maxY(e) && (r = t.y - K.maxY(e)),
            Kr.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: K.minX(e), y: K.minY(e) },
            r = { x: K.minX(t), y: K.minY(t) };
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
          let n = K.minX(e),
            r = K.minY(e),
            i = K.maxX(e),
            a = K.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = K.cornerPoints(e);
          return [zh(t, n), zh(n, r), zh(r, i), zh(i, t)];
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
                  F(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              F(n);
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
                  F(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              F(n);
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
          let n = zh(t, K.center(e)),
            r = K.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && zh.intersection(n, t, !0)) {
              let n = Bh[e];
              return (P(n, `Invalid edge name`, Bh), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          P(r, `Rect array is empty`);
          let i = K.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            P(o);
            let s = K.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Bh = [`top`, `right`, `bottom`, `left`]),
      (Vh = {
        quickfix: (e) => (
          (Ui(e.widthType) || Ui(e.heightType)) && (e.aspectRatio = null),
          I(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Ui(e.widthType) || I(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Ui(e.heightType) || I(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Hh = {
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
            d = Vh.quickfix({
              left: I(t) || Vr(t),
              right: I(n) || Vr(n),
              top: I(r) || Vr(r),
              bottom: I(i) || Vr(i),
              widthType: Wi(a),
              heightType: Wi(o),
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
          } else a !== void 0 && typeof a != `string` && (f = rh.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = rh.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? rh.getNumber(t) : null,
              right: d.right ? rh.getNumber(n) : null,
              top: d.top ? rh.getNumber(r) : null,
              bottom: d.bottom ? rh.getNumber(i) : null,
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
            o = t?.sizing ? rh.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? rh.getNumber(t?.sizing.height) : null,
            c = Xi(e.left, e.right);
          if (o && I(c)) i = o - c;
          else if (n && Ui(e.widthType)) i = n.width;
          else if (I(e.width))
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
                F(e.widthType);
            }
          let l = Xi(e.top, e.bottom);
          if (s && I(l)) a = s - l;
          else if (n && Ui(e.heightType)) a = n.height;
          else if (I(e.height))
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
                F(e.heightType);
            }
          return Yi(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Hh.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? rh.getNumber(l.width) : null,
            d = l ? rh.getNumber(l.height) : null;
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
          return r ? K.pixelAligned(f) : f;
        },
      }),
      (Uh = 200),
      (Wh = 200),
      (Gh = h.createContext({ parentSize: 0 })),
      (Kh = (e) => {
        let t = ia(),
          { parentSize: n, children: r } = e,
          i = h.useMemo(() => ({ parentSize: n }), [oa(n), sa(n)]);
        return t === 1
          ? r
            ? g(E, { children: r })
            : null
          : g(Gh.Provider, { value: i, children: r });
      }),
      (qh = ((e) => (
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
      ))(qh || {})),
      (Jh = /Mac/u),
      (Yh = /iPhone|iPod|iPad/iu),
      (Xh = /MacIntel/iu),
      (Zh = /Edg\//u),
      (Qh = /Chrome/u),
      ($h = /Google Inc/u),
      (eg = /Safari/u),
      (tg = /Apple Computer/u),
      (ng = /Firefox\/\d+\.\d+$/u),
      (rg = /FramerX/u),
      (ig = /tablet|iPad|Nexus 9/iu),
      (ag = /mobi/iu),
      (og = h.createContext(void 0)),
      (sg = new Set()),
      (lg = `style[data-framer-css-ssr-minified]`),
      (ug = (() => {
        if (!ya()) return new Set();
        let e = document.querySelector(lg)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (dg = `data-framer-css-ssr`),
      (fg = (e, t, n) =>
        h.forwardRef((r, i) => {
          let { sheet: a, cache: o } = h.useContext(og) ?? {},
            s = n;
          if (!ya()) {
            Ze(t) && (t = t(G.current(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            mg.add(e, s);
          }
          return (
            f(() => {
              (s && ug.has(s)) ||
                (Ze(t)
                  ? t(G.current(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Ta(e, a, o));
            }, []),
            g(e, { ...r, ref: i })
          );
        })),
      (pg = class {
        constructor() {
          (A(this, `styles`, new Set()), A(this, `componentIds`, new Set()));
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
      (mg = new pg()),
      (gg = `flexbox-gap-not-supported`),
      (_g = !1),
      (vg = [
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
      (yg = ((e) => (
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
      ))(yg || {})),
      (bg = yg),
      (xg = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (P(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Oa(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            P(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${bg.BorderTopWidth}${bg.BorderRightWidth}${bg.BorderBottomWidth}${bg.BorderLeftWidth}`,
      (Sg = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Cg = { display: `inline-block` }),
      (wg = { display: `block` }),
      (Tg = (() => [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Sg.display};
            flex-direction: ${Sg.flexDirection};
            justify-content: ${Sg.justifyContent};
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
                color: ${L([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${L([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${L([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Cg.display};
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
                color: ${L([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${L([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${L([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${L([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${L([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${L([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${L([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${L([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${L([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${L([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${L([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${L([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${L([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${L([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${L([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${L([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${L([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${L([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${L([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${wg.display};
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
        ${ka(`.framer-text-module[data-width="fill"]`, `:first-child`)},
        ${ka(`.framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"] {
                position: relative !important;
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            .framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]::before {
                content: "";
                display: block;
                padding-bottom: calc(100% / calc(var(--aspect-ratio)));
            }
        }
    `,
        `
        @supports not (aspect-ratio: 1) {
            ${ka(`.framer-text-module[data-width="fill"]`, `:first-child`)},
            ${ka(`.framer-text-module:not([data-width="fit"])[style*="aspect-ratio"]`, `:first-child`)} {
                position: absolute;
                top: 0;
                left: 0;
                height: 100% !important;
            }
        }
    `,
      ])()),
      (Eg = `--text-truncation-display-inline-for-safari-16`),
      (Dg = `--text-truncation-display-none-for-safari-16`),
      (Og = `--text-truncation-line-break-for-safari-16`),
      (kg = [
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
      (Ag = `(background: -webkit-named-image(i))`),
      (jg = `(contain-intrinsic-size: inherit)`),
      (Mg = (() => [
        `@supports ${Ag} and (not ${jg}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${kg.join(`, `)} { display: var(${Eg}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${kg.map((e) => `${e}::after`).join(`, `)} { content: var(${Og}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Dg}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Eg}, ${Cg.display}) }
    }`,
      ])()),
      (Ng = [`[data-framer-component-type] { position: absolute; }`]),
      (Pg = [
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
      (Fg = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
      (Ig = (() => [
        `[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
        `.${gg} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
      ])()),
      (Lg = (() => `
.${gg} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
      (Rg = (() => `
.${gg}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${gg}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
      (zg = (() => `
.${gg}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${gg}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
      (Bg = (() => [Fg, Lg, ...Ig, Rg, zg])()),
      (Vg = [
        `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
      ]),
      (Hg = [
        `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
        `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
      ]),
      (Ug = [
        `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
        `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
        `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
        `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
        `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
      ]),
      (Wg = [
        `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
      ]),
      (Gg = [
        `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
      ]),
      (Kg = [
        `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
      ]),
      (qg = [
        `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
      ]),
      (Jg = [
        `[data-framer-cursor="pointer"] { cursor: pointer; }`,
        `[data-framer-cursor="grab"] { cursor: grab; }`,
        `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
      ]),
      (Yg = [
        `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
        `[data-framer-generated] * { pointer-events: unset }`,
      ]),
      (Xg = [
        `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
      ]),
      (Zg = [
        `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
        `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
        `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
      ]),
      (Qg = `--framer-will-change-override`),
      ($g = `--framer-will-change-effect-override`),
      (e_ = `--framer-will-change-filter-override`),
      (t_ = `(background: -webkit-named-image(i))`),
      (n_ = `(grid-template-rows: subgrid)`),
      (r_ = `(position-area: top right)`),
      (i_ = (e) =>
        e
          ? [
              `body { ${Qg}: none; }`,
              `@supports ${t_} and (not ${n_}) { body { ${Qg}: transform; } }`,
            ]
          : [`body { ${Qg}: none; ${$g}: none; }`]),
      (a_ = (e) =>
        e
          ? [`body { ${e_}: none; }`, `@supports ${t_} and (not ${r_}) { body { ${e_}: filter; } }`]
          : [`body { ${e_}: none; }`]),
      (o_ = (e) => (e ? Yg : [])),
      (s_ = [`.svgContainer svg { display: block; }`]),
      (c_ = `--overflow-clip-fallback`),
      (l_ = (() => [
        `@supports (not (overflow: clip)) {
        :root { ${c_}: hidden; }
    }`,
      ])()),
      (u_ = `--one-if-corner-shape-supported`),
      (d_ = (() => [`@supports (corner-shape: superellipse(2)) { :root { ${u_}: 1 } }`])()),
      (f_ = (e) => [
        ...i_(e),
        ...a_(e),
        ...Ng,
        ...Pg,
        ...Tg,
        ...vg,
        ...Bg,
        ...Vg,
        ...Hg,
        ...Ug,
        ...Gg,
        ...Wg,
        ...Kg,
        ...Jg,
        ...o_(e),
        ...s_,
        ...Xg,
        ...Zg,
        ...l_,
        ...qg,
        ...Mg,
        ...d_,
      ]),
      (p_ = f_(!1)),
      (m_ = f_(!0)),
      (h_ = `optional`),
      (q = (e) => e),
      (g_ =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (__ = Ha(
        (e) =>
          g_.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (v_ = (e) => () => {
        zr(e);
      }),
      (y_ = () => () => {}),
      (b_ = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = S_.useImageSource(e, t, n);
          return S(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (x_ = !1),
      (S_ = new Proxy(b_, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? y_()
              : v_(
                  x_
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (C_ = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (w_ = [1, 2, 2.2]),
      (T_ = [512, 1024, 2048, 4096]),
      (E_ = 512),
      (D_ = (() => ({ position: `absolute`, ...C_, top: 0, right: 0, bottom: 0, left: 0 }))()),
      (O_ = `src`),
      (k_ = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && O_ in e;
        },
      }),
      (A_ = ga()),
      (j_ = typeof document < `u` ? k : x),
      (M_ = h.createContext(!1)),
      (N_ = class {
        constructor() {
          (A(this, `sharedResizeObserver`),
            A(this, `callbacks`, new WeakMap()),
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
      (P_ = (() => (ya() ? new N_() : void 0))()),
      (F_ = `0.000001px`),
      (I_ = (() => ` translateZ(${F_})`)()),
      (L_ = (() => ba() || _a() || xa())()),
      (R_ = (() => {
        class e extends _ {
          constructor() {
            (super(...arguments),
              A(this, `layerElement`, null),
              A(this, `setLayerElement`, (e) => {
                this.layerElement = e;
              }));
          }
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? yo(t) : bo(t));
          }
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Dt(this.props, e);
          }
          componentDidUpdate(e) {
            q(this.props).clip &&
              q(this.props).radius === 0 &&
              q(e).radius !== 0 &&
              So(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return (A(e, `defaultProps`, {}), e);
      })()),
      (z_ = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (B_ = {
        hueRotate: (e, t) => W.toHslString(W.hueRotate(W(e), t)),
        setAlpha: (e, t) => W.toRgbString(W.alpha(W(e), t)),
        getAlpha: (e) => {
          let t = di(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => W.toRgbString(W.multiplyAlpha(W(e), t)),
        toHexValue: (e) => W.toHex(W(e)).toUpperCase(),
        toHex: (e) => W.toHexString(W(e)).toUpperCase(),
        toRgb: (e) => W.toRgb(W(e)),
        toRgbString: (e) => W.toRgbString(W(e)),
        toHSV: (e) => W.toHsv(W(e)),
        toHSL: (e) => W.toHsl(W(e)),
        toHslString: (e) => W.toHslString(W(e)),
        toHsvString: (e) => W.toHsvString(W(e)),
        hsvToHSLString: (e) => W.toHslString(W($r(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => W.toHex(W($r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => W.toHexString(W($r(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => W.toRgbString(W($r(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => $r(e.h, e.s, e.v),
        rgbaToString: (e) => W.toRgbString(W(e)),
        rgbToHexValue: (e) => W.toHex(W(e)),
        rgbToHexString: (e) => W.toHexString(W(e)),
        hslToString: (e) => W.toHslString(W(e)),
        hslToRgbString: (e) => W.toRgbString(W(e)),
        toColorPickerSquare: (e) => W.toRgbString(W({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => W(e).isValid !== !1,
        equals: (e, t) =>
          W.isP3String(e) || W.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = W(e)),
              typeof t == `string` && (t = W(t)),
              W.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = W(e);
          return t.a === 1 ? W.toHexString(t) : W.toRgbString(t);
        },
        toFormatString: (e) => (W.isP3String(e) ? e : W.toRgbString(W(e))),
      }),
      (V_ = /var\(.+\)/u),
      (H_ = new Map()),
      (U_ = [`stops`]),
      (W_ = [`start`, `end`]),
      (G_ = [`angle`, `alpha`]),
      (K_ = {
        isLinearGradient: (e) => N(e) && G_.every((t) => t in e) && (Ao(e) || ko(e)),
        hash: (e) => e.angle ^ Oo(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Do(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (q_ = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (J_ = {
        isRadialGradient: (e) => N(e) && q_.every((t) => t in e) && (Ao(e) || ko(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Oo(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Do(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (Y_ = [
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
      (X_ = (() => new Set([...Y_, ...Y_.map((e) => `${e}Capture`)]))()),
      (Z_ = `overflow`),
      (Q_ = { x: 0, y: 0, width: 200, height: 200 }),
      ($_ = new Set([
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
      (ev = y(function (e, t) {
        let { name: n, center: r, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = po(e),
          d = Vo(c),
          f = ho(e),
          p = Io(e),
          m = i(null),
          h = t ?? m,
          _ = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` ? !0 : void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": q(e)[`data-framer-offset-parent-id`],
          };
        !Ho(e) && n && (q(_)[`data-framer-name`] = n);
        let [v, y] = Bo(c),
          b = zo(c),
          x = ua(b);
        (r && !(y && !x && Qi(b))
          ? ((d.transformTemplate ||= mo(r)), Object.assign(_, uo(r)))
          : (d.transformTemplate ||= void 0),
          vo(e, h));
        let S = oo(e),
          w = Uo(c, b, y, u(M_)),
          T = ca(
            C(E, {
              children: [
                S
                  ? g(no, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && fo(e.id),
                      layoutId: f,
                    })
                  : null,
                l,
                g(io, { ...o, border: a, layoutId: f }),
              ],
            }),
            w
          ),
          D = co(e.as),
          O = so(S);
        return (
          e.fitImageDimension &&
            O &&
            ((v[e.fitImageDimension] = `auto`), (v.aspectRatio = O.width / O.height)),
          C(D, { ..._, ...d, layoutId: f, style: v, ref: h, children: [T, s] })
        );
      })),
      (tv = ja(
        y(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? g(ev, { ...e, ref: t }) : null;
        })
      )),
      (nv = `__LAYOUT_TREE_ROOT`),
      (rv = h.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (iv = class extends _ {
        constructor() {
          (super(...arguments),
            A(this, `shouldAnimate`, !1),
            A(this, `transition`),
            A(this, `lead`),
            A(this, `follow`),
            A(this, `scheduledPromotion`, !1),
            A(this, `scheduledDidUpdate`, !1),
            A(this, `scheduleProjectionDidUpdate`, () => {
              this.scheduledDidUpdate = !0;
            }),
            A(this, `schedulePromoteTree`, (e, t, n) => {
              ((this.follow = this.lead),
                (this.shouldAnimate = n),
                (this.lead = e),
                (this.transition = t),
                (this.scheduledPromotion = !0));
            }),
            A(this, `initLead`, (e, t) => {
              ((this.follow = this.lead),
                (this.lead = e),
                this.follow && t && (this.follow.layoutMaybeMutated = !0));
            }),
            A(this, `sharedLayoutContext`, {
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
                preserveFollowOpacity: t.options.layoutId === nv && !this.follow?.isExiting,
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
          return g(rv.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (av = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (ov = class {
        constructor(e) {
          (A(this, `sharedIntersectionObserver`),
            A(this, `callbacks`, new WeakMap()),
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
      (sv = d(new Map())),
      (cv = typeof IntersectionObserver > `u` ? rp : Zo),
      (lv = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (uv = h.createContext(null)),
      (dv = class extends _ {
        constructor() {
          (super(...arguments),
            A(this, `layoutMaybeMutated`, !1),
            A(this, `projectionNodes`, new Map()),
            A(this, `rootProjectionNode`),
            A(this, `isExiting`),
            A(
              this,
              `shouldPreserveFollowOpacity`,
              (e) => e.options.layoutId === nv && !this.props.isExiting
            ),
            A(this, `switchLayoutGroupContext`, {
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
          return g(Re.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (fv = (e) => {
        let t = h.useContext(rv);
        return g(dv, { ...e, sharedLayoutContext: t });
      }),
      (pv = h.createContext(!0)),
      (mv = d({ register: () => {}, deregister: () => {} })),
      (hv = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let a = ns(),
          o = i({
            register: t(
              (e) => {
                if (a.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                a.set(e, void 0);
              },
              [a]
            ),
            deregister: t(
              (e) => {
                (a.get(e)?.(), a.delete(e));
              },
              [a]
            ),
          }).current;
        return (
          x(
            () => (
              a.forEach((t, r) => {
                let i = r(e, n);
                a.set(r, Ze(i) ? i : void 0);
              }),
              () => {
                a.forEach((e, t) => {
                  e && (e(), a.set(t, void 0));
                });
              }
            ),
            [e, n, a]
          ),
          g(mv.Provider, { value: o, children: r })
        );
      }),
      (gv = h.memo(function ({
        isLayeredContainer: e,
        isCurrent: t,
        isPrevious: n,
        isOverlayed: r = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: c,
        onTapBackdrop: l,
        backfaceVisible: d,
        exitBackfaceVisible: f,
        animation: p,
        exitAnimation: m,
        instant: h,
        initialProps: _,
        exitProps: v,
        position: y = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: b,
        index: S,
        areMagicMotionLayersPresent: w,
        id: T,
        isInitial: E,
      }) {
        let D = Ie(),
          O = u(Ae),
          { persistLayoutIdCache: ee } = u(Nh),
          k = i({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: is({}, _, o),
          }),
          te = i(null),
          ne = O !== null && !O.isPresent;
        (t && k.current.wasCurrent === void 0 && ee(),
          x(() => {
            if (e || !D) return;
            if (ne) {
              k.current = { ...k.current, wasBeingRemoved: ne };
              return;
            }
            let { wasPrevious: r, wasCurrent: i } = k.current,
              a = (t && !i) || (!ne && k.current.wasBeingRemoved && t),
              s = n && !r,
              c = is(k.current.origins, _, o),
              l = k.current.wasReset;
            (a || s
              ? (D.stop(), D.start({ zIndex: S, ...c, ...o }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ..._v, opacity: 0 }), (l = !0)),
              (k.current = {
                wasCurrent: !!t,
                wasPrevious: !!n,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [t, n, ne]));
        let re = h ? { type: !1 } : `velocity` in p ? { ...p, velocity: 0 } : p,
          ie = h ? { type: !1 } : m || p,
          ae = { ...y };
        ((ae.left === void 0 || ae.right === void 0) && (ae.width = `auto`),
          (ae.top === void 0 || ae.bottom === void 0) && (ae.height = `auto`));
        let oe = (as(o) || as(_)) && (e || t || n) ? 1200 : void 0,
          se = { ..._v, ...k.current.origins },
          ce = e
            ? {
                initial: { ...se, ..._ },
                animate: { ...se, ...o, transition: re },
                exit: { ...se, ...v, transition: p },
              }
            : { animate: D, exit: { ...se, ...v, transition: ie } },
          le = !(ne || w === !1),
          ue = !!t && le,
          de = t && E;
        return C(tv, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || ne || (t && b) ? S : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: oe,
          },
          children: [
            e &&
              g(tv, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: p,
                initial: { opacity: h && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: c || `transparent`,
                onTap: ne ? void 0 : l,
              }),
            g(tv, {
              ...ae,
              ...ce,
              transition: {
                default: re,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: ne ? f : d,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!t,
              style: { pointerEvents: void 0, opacity: de || e || (t && b) ? 1 : 0 },
              "data-is-present": le ? void 0 : !1,
              ref: te,
              children: g(uv.Provider, {
                value: te,
                children: g(pv.Provider, {
                  value: ue,
                  children: g(hv, {
                    isCurrent: ue,
                    isOverlayed: r,
                    children: g(fv, {
                      isLead: t,
                      animatesLayout: !!b,
                      transition: re,
                      isExiting: !le,
                      isOverlayed: r,
                      id: T,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, rs)),
      (_v = {
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
      (vv = class {
        constructor() {
          (A(this, `warning`, () => {
            zr(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
          }),
            A(this, `goBack`, () => this.warning()),
            A(this, `instant`, () => this.warning()),
            A(this, `fade`, () => this.warning()),
            A(this, `push`, () => this.warning()),
            A(this, `modal`, () => this.warning()),
            A(this, `overlay`, () => this.warning()),
            A(this, `flip`, () => this.warning()),
            A(this, `customTransition`, () => this.warning()),
            A(this, `magicMotion`, () => this.warning()));
        }
      }),
      (yv = d(new vv())),
      (bv = {
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
      (xv = () => ({
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
      (Sv = pp(_v)),
      (Cv = h.createContext(void 0)),
      (wv = h.createContext(void 0)),
      (Tv = (() => {
        var e, t, n, r, i, a, o;
        return (
          (t = class extends _ {
            constructor(t) {
              (super(t),
                pe(this, n),
                pe(this, e, null),
                A(this, `state`, xv()),
                pe(this, a, (e) => {
                  if (!this.props.enabled && this.state.history.length > 0) return;
                  let t = ls(this.state, e);
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
                A(this, `goBack`, () => {
                  if (!fe(this, n, i).call(this))
                    return (
                      Ee(this, e, globalThis.event?.timeStamp || null),
                      this.state.currentOverlay === -1
                        ? j(this, a).call(this, { type: `remove` })
                        : j(this, a).call(this, { type: `removeOverlay` })
                    );
                }));
              let r = this.props.children;
              if (!r || !Vi(r) || !Bi(r)) return;
              let o = { ...bv.Instant },
                s = {
                  type: `add`,
                  key: r.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                  transition: o,
                  component: r,
                },
                c = ls(this.state, s);
              c && (this.state = c);
            }
            componentDidMount() {
              let e = this.state.history[this.state.current];
              e && this.context?.(e.key);
            }
            UNSAFE_componentWillReceiveProps(e) {
              let t = e.children;
              if (!Vi(t) || !Bi(t)) return;
              let r = t.key?.toString();
              r &&
                (this.state.history.length === 0
                  ? fe(this, n, o).call(this, t, bv.Instant)
                  : j(this, a).call(this, { type: `update`, key: r, component: t }));
            }
            componentWillUnmount() {
              this.props.resetProjection?.();
            }
            instant(e) {
              fe(this, n, o).call(this, e, bv.Instant, void 0);
            }
            fade(e, t) {
              fe(this, n, o).call(this, e, bv.Fade, t);
            }
            push(e, t) {
              fe(this, n, o).call(this, e, os(t), t);
            }
            modal(e, t) {
              fe(this, n, o).call(this, e, bv.Modal, t);
            }
            overlay(e, t) {
              fe(this, n, o).call(this, e, ss(t), t);
            }
            flip(e, t) {
              fe(this, n, o).call(this, e, cs(t), t);
            }
            magicMotion(e, t) {
              fe(this, n, o).call(this, e, bv.MagicMotion, t);
            }
            customTransition(e, t) {
              fe(this, n, o).call(this, e, t);
            }
            render() {
              let e = fe(this, n, r).call(this, { overCurrentContext: !1 }),
                t = fe(this, n, r).call(this, { overCurrentContext: !0 }),
                i = ws(t),
                a = t.current > -1,
                o = this.state.history.length === 1,
                s = [];
              for (let [t, n] of Object.entries(this.state.containers)) {
                let r = this.state.containerIndex[t];
                P(r !== void 0, `Container's index must be registered`);
                let i = this.state.containerVisualIndex[t];
                P(i !== void 0, `Container's visual index must be registered`);
                let c = this.state.containerIsRemoved[t],
                  l = this.state.history[r],
                  u = this.state.transitionForContainer[t],
                  d = r === this.state.current,
                  f = r === this.state.previous,
                  p = d ? !1 : c,
                  m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
                s.push(
                  g(
                    gv,
                    {
                      id: t,
                      index: i,
                      isInitial: o,
                      isCurrent: d,
                      isPrevious: f,
                      isOverlayed: a,
                      visible: d || f,
                      position: l?.transition?.position,
                      instant: Ps(r, e),
                      transitionProps: u,
                      animation: Ns(r, e),
                      backfaceVisible: js(r, e),
                      exitAnimation: l?.transition?.animation,
                      exitBackfaceVisible: l?.transition?.backfaceVisible,
                      exitProps: l?.transition?.enter,
                      withMagicMotion: m,
                      areMagicMotionLayersPresent: p ? !1 : void 0,
                      children: g(Wo, {
                        children: Is({ component: n, transition: l?.transition }),
                      }),
                    },
                    t
                  )
                );
              }
              let c = this.state.overlayStack.map((e, n) =>
                g(
                  gv,
                  {
                    isLayeredContainer: !0,
                    isCurrent: n === this.state.currentOverlay,
                    position: e.transition.position,
                    initialProps: As(n, t),
                    transitionProps: Ms(n, t),
                    instant: Ps(n, t, !0),
                    animation: Ns(n, t),
                    exitProps: e.transition.enter,
                    visible: Fs(n, t),
                    backdropColor: Os(e.transition),
                    backfaceVisible: ks(n, t),
                    onTapBackdrop: Ls(e.transition, this.goBack),
                    index: this.state.current + 1 + n,
                    children: Is({ component: e.component, transition: e.transition }),
                  },
                  e.key
                )
              );
              return g(tv, {
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
                children: g(yv.Provider, {
                  value: this,
                  children: C(wv.Provider, {
                    value: o,
                    children: [
                      g(gv, {
                        isLayeredContainer: !0,
                        position: void 0,
                        initialProps: {},
                        instant: !1,
                        transitionProps: Ts(i),
                        animation: Es(i),
                        backfaceVisible: Ds(i),
                        visible: !0,
                        backdropColor: void 0,
                        onTapBackdrop: void 0,
                        index: 0,
                        children: g(Ni, {
                          children: g(iv, {
                            children: g(Be, { presenceAffectsLayout: !1, children: s }),
                          }),
                        }),
                      }),
                      g(Be, { children: c }),
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
            return globalThis.event ? j(this, e) === globalThis.event.timeStamp : !1;
          }),
          (a = new WeakMap()),
          (o = function (t, r, o) {
            if (
              fe(this, n, i).call(this) ||
              (Ee(this, e, globalThis.event?.timeStamp || null), !t || !Vi(t) || !Bi(t))
            )
              return;
            let s = { ...r, ...o };
            if (s.overCurrentContext)
              return j(this, a).call(this, { type: `addOverlay`, transition: s, component: t });
            let c = t.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            j(this, a).call(this, { type: `add`, key: c, transition: s, component: t });
          }),
          A(t, `defaultProps`, { enabled: !0 }),
          A(t, `contextType`, Cv),
          t
        );
      })()),
      (Ev = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Dv = ja(Rs)),
      ye(tp(), 1),
      ye(tp(), 1),
      ye(tp(), 1),
      (Ov = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (kv = Symbol(`private`)),
      (Av = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [kv]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new nh(),
                reset() {
                  for (let t in i)
                    if (Ov(i, t)) {
                      let n = Ov(e, t) ? q(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Mv);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[kv].reset()),
          (e.addObserver = (e, t) => e[kv].observers.add(t)),
          e
        );
      })()),
      (jv = class {
        constructor() {
          (A(this, `set`, (e, t, n, r) => {
            if (t === kv) return !1;
            let i = e[kv],
              a,
              o;
            if (
              (Vr(n) ? ((a = n), (o = a.get())) : (o = n),
              i.makeAnimatables &&
                typeof n != `function` &&
                typeof n != `object` &&
                !a &&
                (a = rh(n)),
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
              l = q(e)[t];
            if (l !== void 0) {
              Vr(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (q(e)[t] = o));
              let n = typeof o == `object` && !!o;
              ((Array.isArray(o) || n) && (c = !0), (s = !0));
            } else (a && (n = a), (s = Reflect.set(e, t, n)));
            return (c && i.observers.notify({ value: r }), s);
          }),
            A(this, `get`, (e, t, n) => {
              if (t === kv) return q(e)[t];
              let r = Reflect.get(e, t, n);
              return typeof r == `function` ? r.bind(n) : r;
            }));
        }
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[kv].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(kv);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== kv) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Mv = new jv()),
      (Nv = `opacity`),
      (Pv = (() => {
        function e(t = {}) {
          let n = Av(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Av.resetObject(e));
          }),
          (e.addObserver = (e, t) => Av.addObserver(e, t)),
          e
        );
      })()),
      (Fv = { update: 0 }),
      (Iv = h.createContext({ update: NaN })),
      (Lv = class extends _ {
        constructor() {
          (super(...arguments),
            A(this, `observers`, []),
            A(this, `state`, Fv),
            A(this, `taskAdded`, !1),
            A(this, `frameTask`, () => {
              (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
            }),
            A(this, `observer`, () => {
              this.taskAdded || ((this.taskAdded = !0), Th.addFrameTask(this.frameTask));
            }));
        }
        componentWillUnmount() {
          (this.observers.map((e) => e()), Pv.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Pv._stores.forEach((e) => {
              let t = Pv.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            g(Iv.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      ye(tp(), 1),
      (Rv = `__framer__`),
      (zv = (() => Rv.length)()),
      (Bv = h.createContext(void 0)),
      (Vv = h.createContext(void 0)),
      (Hv = `default`),
      (Uv = new Set([Hv])),
      (Gv = class {
        constructor() {
          (A(this, `entries`, new Map()), pe(this, Wv, {}));
        }
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (P(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (P(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = Hv, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return Hv;
          let n = j(this, Wv)[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (j(this, Wv)[e] = Zs(r)) : Hv;
        }
        setAll(e, t = Uv, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ze(n.transformTemplate) ? n.transformTemplate?.({}, qv) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: N(a) ? a : void 0,
              animate: N(o) ? o : void 0,
              transformTemplate: M(i) ? i : void 0,
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
      (Wv = new WeakMap()),
      (Kv = new Gv()),
      (qv = `__Appear_Animation_Transform__`),
      (Jv = `data-framer-appear-id`),
      (Yv = `data-framer-appear-animation`),
      (Xv = (e) => {
        if (Ba())
          return {
            animate: $s(e.animate) ? e.animate : void 0,
            initial: $s(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (Zv = [
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
      (Qv = (e) => ({
        x: xe(e?.x ?? 0),
        y: xe(e?.y ?? 0),
        opacity: xe(e?.opacity ?? 1),
        scale: xe(e?.scale ?? 1),
        rotate: xe(e?.rotate ?? 0),
        rotateX: xe(e?.rotateX ?? 0),
        rotateY: xe(e?.rotateY ?? 0),
        skewX: xe(e?.skewX ?? 0),
        skewY: xe(e?.skewY ?? 0),
        transformPerspective: xe(e?.transformPerspective ?? 0),
      })),
      (J = {
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
      ($v = { willChange: `transform` }),
      Object.freeze($v),
      (ey = {}),
      Object.freeze(ey),
      (ty = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (ny = () => {
        let e = i();
        return (
          x(
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
      (ry = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (iy = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (ay = 1),
      (oy = 4),
      (sy = new Set([
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
      (cy = [`animate`, `animate`]),
      (ly = { inputRange: [], outputRange: [] }),
      (uy = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (dy = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (fy = () => ({
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
      (py = [0, 1]),
      (my = { parallax: ry, styleAppear: sy, styleTransform: uy, loop: ty, presence: iy }),
      (hy = pp(my)),
      (gy = (e) => e.reduce((e, t) => (e += t), 0)),
      (_y = (e) => e.reduce((e, t) => (e *= t), 1)),
      (vy = `current`),
      (yy = (e) =>
        h.forwardRef((t, n) => {
          if (t.__withFX)
            return g(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = Xv(t);
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
            } = Sc(t),
            p = Jo(n),
            { values: m, style: _ } = cc(s, p, f, t.style, t[ae]),
            { values: v, style: y } = ic(i, p, t.style?.visibility),
            { values: b, style: x } = bc(o, p),
            { values: S, style: C } = gc(a, p),
            { values: w, style: T } = nc(c, p),
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
          wc(t.style, E);
          let D = ie(E.scale, _y),
            O = ie(E.opacity, _y),
            ee = ie(E.x, gy),
            k = ie(E.y, gy),
            te = ie(E.rotate, gy),
            ne = ie(E.rotateX, gy),
            re = ie(E.rotateY, gy),
            oe = ie(E.skewX, gy),
            se = ie(E.skewY, gy),
            ce = ie(E.transformPerspective, gy),
            { drag: le, dragConstraints: ue } = l;
          _o(le && Cc(ue) ? ue : void 0);
          let de = {
            opacity: O,
            scale: D,
            x: ee,
            y: k,
            rotate: te,
            rotateX: ne,
            rotateY: re,
            skewX: oe,
            skewY: se,
          };
          nt(d) && (de.transformPerspective = ce);
          let fe = Tc(t.animate) ? t.animate : void 0,
            pe = Tc(t.initial) ? t.initial : void 0,
            me = Tc(t.exit) ? t.exit : void 0,
            he = f && !s.presenceInitial ? { initial: pe, animate: fe, exit: me } : {};
          return g(e, {
            ...l,
            ...he,
            __withFX: !0,
            style: { ...t.style, ...y, ...x, ...T, ...de, ...C, ..._ },
            values: m,
            ref: p,
          });
        })),
      (by = h.createContext({})),
      (xy = h.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = h.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = Js(a);
        return g(by.Provider, { value: o, children: s(r, i) });
      })),
      (Sy = (e) =>
        h.forwardRef((t, n) =>
          g(e, { layoutId: ho(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Cy = !1),
      (wy = class extends _ {
        constructor() {
          (super(...arguments), A(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Dc(e)) return;
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
          en(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Dc(e)) throw e;
          return ((Cy = !0), this.props.children);
        }
      }),
      (Ty = (() => (s === void 0 ? null : new Promise(() => {})))()),
      (Ey = g(Oc, {})),
      (Dy = d(!1)),
      (Dy.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Oy = g(Ac, {})),
      (ky = class extends _ {
        constructor() {
          (super(...arguments), A(this, `state`, { hasError: !1 }));
        }
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Mc(this.props.getErrorMessage(), t?.componentStack), jc(e, t));
        }
        render() {
          let { children: e, fallback: t = Oy } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (Ay = class extends _ {
        constructor() {
          (super(...arguments), A(this, `state`, { hasError: !1 }));
        }
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            jc(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (jy = (() => h.createContext(void 0))()),
      (My = `code-crash:`),
      (Ny = Sy(
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
          let u = Ii(() => (t ? `${t}-container` : void 0)),
            d = co(n),
            f = Kc(
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
            children: g(M_.Provider, {
              value: !0,
              children: g(bm.Provider, {
                value: i ?? null,
                children: g(Fi, {
                  enabled: !1,
                  children: g(Ue, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (Py = d({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Fy = `framer-cursor-none`),
      (Iy = `framer-pointer-events-none`),
      (Ly = b(function ({ children: e }) {
        let t = Ii(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = qc(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = de();
        return C(Py.Provider, { value: t, children: [e, !n && g(Vy, {})] });
      })),
      (Ry = (() =>
        fg(
          Ly,
          [
            `.${Fy}, .${Fy} * { cursor: none !important; }`,
            `.${Iy}, .${Iy} * { pointer-events: none !important; }`,
          ],
          `framer-lib-cursors-host`
        ))()),
      (zy = (() => ({ position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }))()),
      (By = `data-framer-portal-id`),
      (Vy = b(function () {
        let { onRegisterCursors: e } = u(Py),
          [n, r] = l(!1),
          a = ve(0),
          o = ve(0),
          s = ve(0),
          c = i(null),
          d = i({ cursors: {}, cursorHash: void 0 }),
          f = go();
        (k(() => {
          let e = V.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? p(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          x(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), Me(s, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (tt(d.current.cursors)) return;
              let n = Zc(e, t);
              n !== d.current.cursorHash && ((d.current.cursorHash = n), Pe.update(() => f()));
            };
            function l(n) {
              if (n.pointerType === `touch`) {
                ze(i);
                return;
              }
              (Pe.read(i, !0), (e = n.clientX), (t = n.clientY), Pe.update(r));
            }
            function u(e) {
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
              Pe.update(() => {
                c.current?.dispatchEvent(t);
              });
            }
            return (
              V.addEventListener(`pointermove`, l),
              document.addEventListener(`pointerdown`, u),
              document.addEventListener(`pointerup`, u),
              Pe.read(i, !0),
              () => {
                (V.removeEventListener(`pointermove`, l),
                  document.removeEventListener(`pointerdown`, u),
                  document.removeEventListener(`pointerup`, u),
                  ze(i));
              }
            );
          }, [s, a, o, f, n]),
          x(() => {
            if (!n) return;
            function e() {
              Me(s, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              V.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), V.removeEventListener(`blur`, e));
              }
            );
          }, [s, n]),
          k(() => {
            function t(e) {
              ((d.current.cursors = e),
                (d.current.cursorHash = tt(e) ? null : Zc(a.get(), o.get())),
                f());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Fy, !1));
            };
          }, [a, o, e, f]));
        let { cursors: m, cursorHash: h } = d.current,
          _ = h ? m[h] : null,
          v = Jc(_);
        k(() => {
          n && document.body.classList.toggle(Fy, v);
        }, [v, n]);
        let y = _?.component,
          b = _?.transition ?? { duration: 0 },
          S = b.duration === void 0 ? b : { ...b, duration: b.duration * 1e3 },
          C = Xe(a, S),
          T = Xe(o, S),
          E = ie(() => C.get() + (_?.offset?.x ?? 0)),
          D = ie(() => T.get() + (_?.offset?.y ?? 0)),
          O = _?.alignment,
          ee = _?.placement,
          te = t((e, t) => `translate(${Xc(ee, O)}) ${t}`, [O, ee]);
        return !n || !_ || !y
          ? null
          : g(w, {
              children: g(y, {
                transformTemplate: te,
                style: { ...zy, x: E, y: D, opacity: s },
                globalTapTarget: !0,
                variant: _?.variant,
                ref: c,
                className: Iy,
              }),
            });
      })),
      (Hy = `webPageId`),
      (Uy = class {
        constructor() {
          (A(this, `collectedLinks`, new Map()), A(this, `nestingInfo`, new Map()));
        }
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            P(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (P(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((ip && !xa()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(el(e), e), this.collectedLinks.set(el(t), t));
          let n = this.nestingInfo.get(el(e)) ?? new Set();
          (n.add(el(t)), this.nestingInfo.set(el(e), n));
        }
      }),
      (Wy = new Uy()),
      (Gy = `element`),
      (Ky = `collection`),
      (qy = `collectionItemId`),
      (Jy = `pathVariables`),
      (Yy = `framer/page-link,`),
      (Xy = d(void 0)),
      (Zy = class extends _ {
        constructor() {
          (super(...arguments),
            A(this, `state`, { error: void 0 }),
            A(this, `message`, `Made UI non-interactive due to an error.`),
            A(this, `messageFatal`, `Fatal error.`));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((s.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(dt(ap ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          en(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (ap && document.getElementById(`main`)?.innerHTML) || ``;
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
      (Qy = /:([a-z]\w*)/gi),
      ($y = d(void 0)),
      (eb = 500),
      (tb = 0.9),
      (nb = 1.7),
      (rb = 4),
      (ib = 1 / 0),
      (ab = new WeakMap()),
      (ob = new Set()),
      (sb = new Map()),
      (cb = !Jp || typeof IntersectionObserver > `u` ? null : Sl()),
      (lb = gl(
        y(function (
          {
            children: e,
            href: t,
            openInNewTab: n,
            smoothScroll: r,
            clickTrackingId: i,
            relValues: a,
            preserveParams: o,
            nodeId: s,
            scopeId: c,
            motionChild: l,
            ...u
          },
          d
        ) {
          let f = At(),
            p = Mt(),
            m = bl(),
            { activeLocale: h, locales: g } = dr(),
            _ = kl(),
            y = _n(),
            b = tl(),
            x = Al({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            C = S(() => {
              if (!t) return {};
              let e = $c(t) ? t : sl(t);
              if (!e) return {};
              if (M(e))
                return Pl(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: x,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (ct(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: v,
                  locale: b,
                } = _l(f, p, e, h, c, m),
                S = wl(n, !0),
                C = S === `_blank`,
                w = { pathVariables: v, locale: b },
                T = (e) => Ml(f, l, () => y(l, w, !1, !C), d, v, r, e);
              return {
                href: u,
                target: S,
                onClick: Nl(u, x, T),
                "data-framer-page-link-current": (p && xl(p, e, m)) || void 0,
                navigate: T,
                preload: () => y(l, w, !0, !C),
                _routeId: l,
                _pathVariables: v,
                _locale: b,
              };
            }, [t, f, h, m, n, p, r, x, a, g, o, _, y]),
            w = Jo(v(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: ee, ...k } = C;
          Yo(
            w,
            (e) => {
              if (!(e === null || !D || !E || b))
                return cb?.(e, E, `${D}:${ee?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, ee]
          );
          let te = !!T;
          return ll(
            Js(d).cloneAsArray(e, (e) => Fl(e, { ...u, ...Ll(k, l, te) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (ub = h.createContext(void 0)),
      (db = `__framer_force_showing_editorbar_since`),
      (fb = class extends _ {
        constructor() {
          (super(...arguments), A(this, `state`, { error: void 0 }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (pb = () => {
        try {
          return !!localStorage[db];
        } catch {
          return !1;
        }
      }),
      (mb = () => !pb()),
      (hb = (() => {
        let e = d(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (gb = `main`),
      (_b = `framerGeneratedPage`),
      (vb = `<!-- Start of headStart -->`),
      (yb = `<!-- End of headStart -->`),
      (bb = `<!-- Start of headEnd -->`),
      (xb = `<!-- End of headEnd -->`),
      (Sb = `<!-- Start of bodyStart -->`),
      (Cb = `<!-- End of bodyStart -->`),
      (wb = `<!-- Start of bodyEnd -->`),
      (Tb = `<!-- End of bodyEnd -->`),
      (Eb = (() => h.createContext(void 0))()),
      (Db = null),
      (Ob = null),
      sp(iu),
      (kb = (e, t, n, r, a, o) => {
        let c = u(ub),
          l = i(),
          d = dn(),
          f = i(!0);
        return (
          x(() => {
            function i() {
              (!Db || !Ob) && iu();
              let i = n ? new URL(V.location.origin + n) : V.location,
                s = {
                  version: Fp,
                  abTestId: e?.abTestId,
                  framerSiteId: c ?? null,
                  webPageId: e?.abTestingVariantId ?? t,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: i.href,
                  hostname: i.hostname,
                  pathname: i.pathname,
                  search: i.search || null,
                  hash: i.hash || null,
                  timezone: Db,
                  locale: Ob,
                },
                l = f.current && o !== void 0 ? o : void 0;
              return e?.collectionId && r
                ? (async () => {
                    let t = l ?? null;
                    if (l === void 0) {
                      let n = e.collectionId && d?.get(e.collectionId),
                        [i] = Object.values(r);
                      if (n && M(i)) {
                        let e = n.getRecordIdBySlug(i, a || void 0);
                        t = (ct(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...s, collectionItemId: t };
                  })()
                : s;
            }
            (async () => {
              let e = (l.current = i()),
                t = e instanceof Promise ? await e : e;
              ((l.current = t),
                f.current ? (f.current = !1) : en(`published_site_pageview`, t, `eager`));
            })();
            let u = async (e) => {
              if (e.persisted) {
                let e = (l.current = i()),
                  t = e instanceof Promise ? await e : e;
                ((l.current = t), en(`published_site_pageview`, t, `eager`));
              }
            };
            return (
              s.addEventListener(`pageshow`, u),
              () => {
                s.removeEventListener(`pageshow`, u);
              }
            );
          }, [e, t, n, r, a, c, d, o]),
          l
        );
      }),
      (Ab = { status: `loading`, data: void 0 }),
      (jb = 5e3),
      (Mb = () => {}),
      (zb = class e {
        constructor() {
          (A(this, `responseValues`, new Map()),
            pe(this, Nb, new Map()),
            pe(this, Pb, new Set()),
            pe(this, Fb, new Map()),
            pe(this, Ib, new Map()),
            pe(this, Lb, new Map()),
            pe(this, Rb, new Map()),
            A(
              this,
              `persistCache`,
              Gs(() => {
                let t = {};
                for (let [e, n] of this.responseValues) {
                  if (!n || n.status !== `success`) continue;
                  let r = j(this, Fb).get(e);
                  if (!r || r === 0) continue;
                  let i = j(this, Ib).get(e);
                  i && ((i && bu(i, r)) || (t[e] = [i, r, n.data]));
                }
                try {
                  localStorage.setItem(e.cacheKey, JSON.stringify(t));
                } catch {}
              }, 500)
            ));
        }
        unmount() {
          for (let [e, t] of j(this, Rb)) (clearInterval(t), j(this, Rb).delete(e));
        }
        stopQueryRefetching(e) {
          let t = gu(e),
            n = j(this, Rb).get(t);
          n && (clearInterval(n), j(this, Rb).delete(t));
        }
        startQueryRefetching(e) {
          let t = gu(e),
            n = j(this, Rb).get(t),
            r = j(this, Fb).get(t);
          if (n || !r) return;
          let i = V.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = j(this, Ib).get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          j(this, Rb).set(t, i);
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
              bu(r, i) ||
                (j(this, Ib).set(e, r),
                j(this, Fb).set(e, i),
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
          let n = j(this, Nb).get(e);
          if (n) for (let e of n) e();
        }
        async prefetch(e) {
          if (!ya() || !rl(e.url, !1)) return;
          let t = gu(e);
          (j(this, Pb).add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = j(this, Nb).get(t);
          for (let e of r ?? []) e();
          let i = yu(n, e);
          return (e.resultOutputType === `image` && M(i) && (await pu(i).catch(Mb)), i);
        }
        async fetchWithCache(e) {
          if (!ya()) return;
          let t = gu(e),
            n = j(this, Lb).get(t);
          if (n) return n;
          let r = j(this, Ib).get(t),
            i = r && bu(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, Ab);
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
                j(this, Ib).set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            j(this, Lb).set(t, a),
            a.finally(() => {
              j(this, Lb).delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !j(this, Pb).has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!rl(r, !1)) return Mb;
          let a = gu(e),
            o = j(this, Fb).get(a);
          ((!o || i < o) && j(this, Fb).set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = j(this, Nb).get(a) ?? new Set();
          return (
            s.add(t),
            j(this, Nb).set(a, s),
            () => {
              let n = j(this, Nb).get(a);
              n &&
                (n.delete(t),
                n.size === 0 && j(this, Nb).delete(a),
                j(this, Nb).size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (Nb = new WeakMap()),
      (Pb = new WeakMap()),
      (Fb = new WeakMap()),
      (Ib = new WeakMap()),
      (Lb = new WeakMap()),
      (Rb = new WeakMap()),
      A(zb, `cacheKey`, `framer-fetch-client-cache`),
      (Bb = zb),
      (Vb = d(void 0)),
      (Hb = d(!0)),
      (Ub = ({ children: e, client: t }) => {
        let [n] = l(() => t ?? new Bb()),
          [r, i] = l(!0);
        return (
          x(
            () => (
              n.hydrateCache(),
              p(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          g(Hb.Provider, { value: r, children: g(Vb.Provider, { value: n, children: e }) })
        );
      }),
      (Ve.WillChange = Ge),
      (Y = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return Fu(e, t);
            case `boolean`:
              return Lu(e);
            case `color`:
              return Bu(e);
            case `date`:
              return Hu(e);
            case `enum`:
              return Wu(e);
            case `file`:
              return Ku(e);
            case `link`:
              return Ju(e);
            case `number`:
              return Xu(e);
            case `object`:
              return $u(e, t);
            case `responsiveimage`:
              return td(e);
            case `richtext`:
              return rd(e);
            case `string`:
              return sd(e);
            case `vectorsetitem`:
              return ad(e);
            case `unknown`:
              return e;
            default:
              F(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Qe(e)
            ? { type: `boolean`, value: e }
            : at(e)
              ? { type: `date`, value: e.toISOString() }
              : $e(e)
                ? { type: `number`, value: e }
                : M(e)
                  ? { type: `string`, value: e }
                  : et(e)
                    ? { type: `array`, value: e.map(Y.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type ? ld(e, t, n) === 0 : !1;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type ? ld(e, t, n) < 0 : !1;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type ? ld(e, t, n) <= 0 : !1;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type ? ld(e, t, n) > 0 : !1;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type ? ld(e, t, n) >= 0 : !1;
        },
        in(e, t, n) {
          return t?.type === `array` ? t.value.some((t) => Y.equal(t, e, n)) : !1;
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => Y.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = cd(e),
            i = cd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = cd(e),
            i = cd(t);
          return rt(r) || rt(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = cd(e),
            i = cd(t);
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
              return `[${e.value.map(Y.stringify).join(`, `)}]`;
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
              return M(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              F(e);
          }
        },
      }),
      (Wb = { type: `unknown`, isNullable: !0 }),
      (Gb = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t), A(this, `schema`), A(this, `indexes`, []));
          let n = za(e);
          P(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (P(n !== `array`, `Array properties are not supported`),
              P(n !== `object`, `Object properties are not supported`),
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
              if ((P(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await ud(this.collection, this.locale))[t]?.[n];
          return Cp.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems() {
          return (await ud(this.collection, this.locale)).map((e, t) => {
            let n = String(t);
            return this.getDatabaseItem(e, n);
          });
        }
        async resolveItems(e) {
          let t = await ud(this.collection, this.locale);
          return e.map((e) => {
            let n = t[Number(e)];
            return (P(n, `Can't find collection item`), this.getDatabaseItem(n, e));
          });
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (Kb = new Map()),
      (qb = new WeakMap()),
      (Jb = `$r_`),
      (Yb = new Map()),
      (Xb = 1e3),
      (X = class e {
        constructor(e) {
          this.network = e;
        }
        static estimate(t, n) {
          let r = md(),
            i = hd();
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
      (Zb = class {
        constructor(e, t) {
          ((this.id = e),
            (this.relational = t),
            A(this, `nodes`, []),
            A(this, `winners`, new Map()));
        }
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new Qb();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          P(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (Qb = class {
        constructor() {
          (A(this, `node`), A(this, `cost`, new X(1 / 0)), A(this, `nodes`, []));
        }
        update(e, t) {
          (this.nodes.push(e), X.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      ($b = class {
        constructor(e) {
          this.isSynchronous = e;
        }
      }),
      (ex = class extends $b {
        constructor() {
          (super(...arguments), A(this, `group`));
        }
        getGroup() {
          return (P(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (P(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Cu(this.evaluate(void 0));
        }
        evaluateAsync() {
          return wu(this.evaluate(void 0));
        }
      }),
      (tx = class {
        constructor(e, t) {
          (A(this, `collections`),
            A(this, `richTextCache`, new WeakMap()),
            A(this, `vectorSetItemCache`, new WeakMap()),
            (this.collections = Cd(e, t)));
        }
        *resolveArrayValue(e) {
          return yield* Eu(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* z(t);
        }
        loadRichTextValue(e) {
          let t = e.value;
          P(bd(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          P(n, `Can't find collection for rich text pointer`);
          let r = this.richTextCache.get(n) ?? new Map();
          this.richTextCache.set(n, r);
          let i = r.get(t.pointer);
          if (i) return i;
          let a = n.resolveRichText(t.pointer);
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
          P(Sd(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (P(n, `Can't find collection for vector set item pointer`),
            P(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
      (nx = `index`),
      (rx = class extends Set {
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
          return (e.sort((e, t) => e - t), B(this.name, ...e));
        }
      }),
      (ix = class {
        constructor(e, t, n) {
          ((this.id = e),
            (this.name = t),
            (this.data = n),
            A(this, `indexes`, new ox()),
            A(this, `fields`, new Z()));
        }
      }),
      (ax = class {
        constructor(e, t, n, r, i, a) {
          for (let o in ((this.id = e),
          (this.data = t),
          (this.collection = n),
          (this.lookupNodes = r),
          (this.constraint = i),
          (this.ordering = a),
          A(this, `resolvedFields`, new Z()),
          t.schema))
            for (let e of n.fields) e.name === o && this.resolvedFields.add(e);
        }
      }),
      (ox = class extends rx {
        constructor() {
          (super(...arguments), A(this, `name`, `Indexes`));
        }
      }),
      (sx = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        getValue(e) {
          P(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          switch (t?.type) {
            case `richtext`:
              return (
                P(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: yd(this.collection.data, t.value) }
              );
            case `vectorsetitem`:
              return (
                P(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: xd(this.collection.data, t.value) }
              );
          }
          return t ?? null;
        }
      }),
      (Z = class extends rx {
        constructor() {
          (super(...arguments), A(this, `name`, `Fields`));
        }
      }),
      (cx = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        getHash() {
          return B(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (lx = class {
        constructor(e) {
          (A(this, `fields`, []), e && this.merge(e));
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return B(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== nx) return !1;
          return !0;
        }
      }),
      (ux = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        getHash() {
          return B(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (dx = class e {
        constructor(e) {
          ((this.parent = e), A(this, `node`), A(this, `ordering`), A(this, `fields`, []));
        }
        takeNode() {
          let e = this.node;
          return (P(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (P(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new lx();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new ux(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          P(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (P(e, `Field must exist`), e.field);
        }
      }),
      (fx = class {
        constructor() {
          (A(this, `pointers`, new Map()), A(this, `values`, new Map()));
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
      (px = class e {
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
          let n = new Z();
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
          let n = new Z();
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
      (mx = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        getHash() {
          return B(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (hx = class e extends ex {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Z();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Z();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Z(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new ux(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new X(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = X.max(i, n);
          }
          return new X(0).add(X.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(
            this.inputGroup.getOptimized(n),
            this.projections.map((e) => new mx(e.input.getOptimized(), e.field)),
            this.passthrough
          );
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Eu(
              n.tuples.map((t) =>
                Eu(
                  this.projections.map((n) => z({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new fx();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            P(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (gx = { type: 0 }),
      (Q = class extends $b {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        evaluateSync() {
          return Cu(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return wu(this.evaluate(void 0, void 0));
        }
      }),
      (_x = { type: 0 }),
      (vx = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        getHash() {
          return B(`CaseCondition`, this.when, this.then);
        }
      }),
      (yx = class e extends Q {
        constructor(e, t, n) {
          let r = new Z(),
            i = new Z(),
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
            A(this, `definition`, { type: `unknown`, isNullable: !0 }));
        }
        getHash() {
          return B(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new X(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new vx(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* z({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Eu(
              this.conditions.map((n) =>
                z({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (Y.equal(n, e, _x)) return t;
          } else for (let { when: e, then: t } of r) if (Ru(e)) return t;
          return i;
        }
      }),
      (bx = class {
        constructor(e, t, n) {
          ((this.normalizer = e),
            (this.query = t),
            (this.locale = n),
            A(this, `collectionId`, 0),
            A(this, `indexId`, 0),
            A(this, `fieldId`, 0),
            A(this, `subqueries`, []));
        }
        build() {
          let e = new dx();
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
            a = new Z(),
            o;
          if (t.orderBy) {
            o = new lx();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (nt(t)) continue;
                a.add(t.field);
                let r = new cx(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new sx(Ed(this.fieldId++), void 0, t.definition, void 0),
                  a = new mx(t, r);
                i.push(a);
                let s = new cx(r, e.direction);
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
            a = new Z(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if (nt(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              P(n.alias, `Subqueries should have an alias`);
              let r = Ed(this.fieldId++),
                a = n.alias,
                s = new sx(r, a, t.definition, void 0),
                c = new mx(t, s);
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
              F(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = pd(t.data, this.locale),
            i = t.alias,
            a = new ix(wd(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new sx(Ed(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.fields.add(r));
          }
          {
            let e = new sx(Ed(this.fieldId++), nx, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: nx, collectionName: i });
            let t = new lx(),
              r = new cx(e);
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
            let i = new lx(),
              o = new ax(Td(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new lx(),
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
              F(t.type, `Unsupported join type`);
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
              F(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(Wb, null);
        }
        buildLiteralValue(e) {
          let t = Y.parse(e.value);
          return this.normalizer.newScalarConstant(Wb, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (P(r, `Missing argument`), this.buildExpression(e, r));
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
                P(n, `Missing argument`),
                P(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                P(n, `Missing argument`),
                P(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              F(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new xx(e);
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
            let n = new xx(e);
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
              (t) => new vx(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              F(t.operator, `Unsupported unary operator`);
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
              F(t.operator, `Unsupported binary operator`);
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
      (xx = class {
        constructor(e) {
          ((this.inScope = e),
            A(this, `referencedFields`, new Z()),
            A(this, `referencedOuterFields`, new Z()));
        }
      }),
      (Sx = class e extends ex {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          let t = new Z(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new ux(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new X(0).add(X.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.predicate.getOptimized());
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Eu(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Ru(n[t] ?? null));
        }
      }),
      (Cx = class e extends ex {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        getHash() {
          return B(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return X.estimate(1, e ? 100 * Xb : 50 * Xb);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection;
          return new px(
            this.getOutputFields(),
            (yield e.data.lookupItems(this.query)).map((n) => {
              let r = new fx();
              for (let i of e.resolvedFields) {
                let e = i.getValue(n);
                (r.addPointer(t, n.pointer), r.addValue(i, e));
              }
              return r;
            })
          );
        }
      }),
      (wx = class e extends ex {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            A(this, `leftGroup`),
            A(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return B(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
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
          return new ux(new lx(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return X.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* z({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (Tx = class e extends ex {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        getHash() {
          return B(`RelationalScan`, this.collection.id);
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
          return X.estimate(1, 200 * Xb);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields();
          return new px(
            t,
            (yield e.data.scanItems()).map((n) => {
              let r = new fx();
              for (let i of t) {
                let t = i.getValue(n);
                (r.addPointer(e, n.pointer), r.addValue(i, t));
              }
              return r;
            })
          );
        }
      }),
      (Ex = class e extends ex {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            A(this, `leftGroup`),
            A(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return B(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Z(),
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
          return new ux(new lx(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return X.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t);
          return new e(r, this.rightGroup.getOptimized(i));
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* z({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (Dx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Ru(n) && Ru(r) };
        }
      }),
      ($ = class extends Q {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        getHash() {
          return B(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new X(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (Ox = { type: 0 }),
      (kx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* z({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.contains(n, r, Ox) };
        }
      }),
      (Ax = { type: 0 }),
      (jx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* z({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.endsWith(n, r, Ax) };
        }
      }),
      (Mx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.equal(n, r, gx) };
        }
      }),
      (Nx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.greaterThan(n, r, gx) };
        }
      }),
      (Px = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.greaterThanOrEqual(n, r, gx) };
        }
      }),
      (Fx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.lessThan(n, r, gx) };
        }
      }),
      (Ix = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.lessThanOrEqual(n, r, gx) };
        }
      }),
      (Lx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Y.equal(n, r, gx) };
        }
      }),
      (Rx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Ru(n) || Ru(r) };
        }
      }),
      (zx = { type: 0 }),
      (Bx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* z({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.startsWith(n, r, zx) };
        }
      }),
      (Vx = class {
        constructor(e) {
          ((this.normalizer = e), A(this, `memo`), (this.memo = e.memo));
        }
        explore(e) {
          let t = e.getGroup();
          if (e instanceof Sx) {
            if (e.predicate instanceof Dx) {
              let n = new wx(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof Rx) {
              let n = new Ex(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof Tx)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new Cx(n, Dd(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof Sx) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof Tx)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof Mx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Lx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Fx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Ix &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Nx &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Px &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof $ &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof kx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof Bx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof jx &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof $ &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Dd(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new Cx(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (Hx = class {
        constructor(e) {
          this.outputFields = e;
        }
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (Ux = class {
        constructor() {
          (A(this, `nodes`, new Map()), A(this, `groups`, []));
        }
        addGroup(e) {
          let t = new Zb(gd(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new Hx(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            P(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (Wx = class e extends ex {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            A(this, `leftGroup`),
            A(this, `rightGroup`),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        getHash() {
          return B(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Z();
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
          let n = new Z(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new ux(new lx(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return X.max(X.max(r, a), o);
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
          let o = new px(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new fx();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* z({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof Mx) {
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
          let r = new px(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new fx();
              (n.merge(i),
                n.merge(a),
                Ru(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (Gx = class e extends ex {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          let t = new Z(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new ux(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new X(0).add(X.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.limit.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* z({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Zu(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (Kx = class e extends ex {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          let t = new Z(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new ux(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new X(0).add(X.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.offset.getOptimized(), this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* z({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Zu(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (qx = class e extends Q {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            A(this, `inputGroup`),
            A(this, `definition`),
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
          return B(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z(),
            t = Object.values(this.namedFields);
          for (let n of t) nt(n.collection) || e.add(n);
          return new ux(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new X(0).add(n);
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
          let n = new fx();
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
      (Jx = class e extends Q {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            P(t.isNullable, `Unsupported non-nullable cast`));
        }
        getHash() {
          return B(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized(), this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return Y.cast(n, this.definition);
        }
      }),
      (Yx = class e extends Q {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            A(this, `inputGroup`),
            A(this, `definition`),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        getHash() {
          return B(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Z();
          return (nt(this.field.collection) || e.add(this.field), new ux(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new X(0).add(n);
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
          let n = new fx();
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
      (Xx = { type: 0 }),
      (Zx = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Y.in(n, r, Xx) };
        }
      }),
      (Qx = { type: 1 }),
      ($x = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.source = e),
            (this.target = t),
            A(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.source.getOptimized(), this.target.getOptimized());
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* z({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: Y.indexOf(n, r, Qx) };
        }
      }),
      (eS = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, {
              type: `array`,
              definition: { type: `string`, isNullable: !1 },
              isNullable: !1,
            }));
        }
        getHash() {
          return B(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = kd(n),
            a = kd(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (tS = class e extends Q {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            A(this, `definition`, { type: `number`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: Y.length(n) };
        }
      }),
      (nS = class e extends Q {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          return new e(this.input.getOptimized());
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Ru(yield* this.input.evaluate(e, t)) };
        }
      }),
      (rS = { type: 0 }),
      (iS = class e extends Q {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i),
            (this.left = e),
            (this.right = t),
            A(this, `definition`, { type: `boolean`, isNullable: !1 }));
        }
        getHash() {
          return B(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return X.max(t, n);
        }
        getOptimized() {
          return new e(this.left.getOptimized(), this.right.getOptimized());
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* z({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !Y.in(n, r, rS) };
        }
      }),
      (aS = class extends Q {
        constructor(e, t) {
          P(e.name !== nx, `Invalid field name`);
          let n = new Z(),
            r = new Z();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            A(this, `definition`),
            (this.definition = e.definition));
        }
        getHash() {
          return B(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new X(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (P(e, `Context must exist`), e.getValue(this.field))
            : (P(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (oS = class {
        constructor(e) {
          this.memo = e;
        }
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new Tx(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new Cx(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new Wx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof $ && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof Wx && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new Sx(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new hx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof hx &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new Gx(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new Kx(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof $) &&
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
          let n = new aS(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new $(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof nS)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof Mx) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof Lx) return this.newScalarEquals(e.left, e.right);
          if (e instanceof Fx) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof Ix) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof Nx) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof Px) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof Dx) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof Rx) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new nS(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof $ && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof $ && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof $ && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof $ && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new Dx(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof $ && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof $ && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof $ && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof $ && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new Rx(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Mx(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Lx(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Fx(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Ix(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Nx(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof aS;
          if (t instanceof aS && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new Px(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Zx(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new iS(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new vx(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new yx(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new kx(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new Bx(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new jx(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new tS(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new $x(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new qx(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new Yx(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new eS(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new Jx(e, t);
          return this.finishScalar(n);
        }
      }),
      (sS = class extends ex {}),
      (cS = class e extends sS {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          let t = new Z();
          return new ux(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return X.estimate(0, 100 * Xb).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          P(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Set();
          for (let e of this.fields)
            (P(e.collection, `Collection required to resolve field`), n.add(e.collection));
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
              return (P(r.length === n.length, `Invalid number of items`), [e, r]);
            })
          );
          return t.map(t.fields, (e) => {
            let t = new fx();
            t.merge(e);
            for (let [n, i] of r) {
              let r = e.getPointer(n);
              if (!r) continue;
              let a = i.shift();
              (P(a, `Item not found`), P(a.pointer === r, `Pointer mismatch`));
              for (let e of n.fields) {
                let n = e.getValue(a);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (lS = { type: 0 }),
      (uS = class e extends sS {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            A(this, `inputGroup`),
            (this.inputGroup = e.getGroup()));
        }
        getHash() {
          return B(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
          let t = new Z(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== nx && (nt(e.collection) || t.add(e));
          return new ux(new lx(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new X(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t);
          return new e(this.inputGroup.getOptimized(n), this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === nx) {
                let r = n.collection;
                P(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                P(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                P(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!Y.equal(a, o, lS)) {
                if (rt(a) || Y.lessThan(a, o, lS)) return i ? -1 : 1;
                if (rt(o) || Y.greaterThan(a, o, lS)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (dS = class {
        constructor(e, t, n) {
          ((this.query = e),
            (this.locale = t),
            (this.resolver = n),
            A(this, `memo`, new Ux()),
            A(this, `normalizer`, new oS(this.memo)),
            A(this, `explorer`, new Vx(this.normalizer)));
        }
        optimize() {
          let e = new bx(this.normalizer, this.query, this.locale).build(),
            t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (P(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new cS(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new uS(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (fS = Su(`query-engine`)),
      (pS = class {
        async evalQuery(e, t, n) {
          fS.enabled &&
            fS.debug(`Query:
${Hd(e)}`);
          let r = new tx(e, t),
            [i, a] = new dS(e, t, r).optimize(),
            o = await i.evaluateAsync(),
            s = Object.entries(a),
            c = [],
            l = Tu(
              Eu(
                o.tuples.map((e) => {
                  let t = {},
                    i = {};
                  for (let [a, o] of s) {
                    let s = e.getValue(o);
                    ((t[a] = r.resolveValue(s)), n && (i[a] = s));
                  }
                  return (n && c.push(i), z(t));
                })
              )
            );
          return n ? [ct(l) ? await l : l, c] : l;
        }
        async serializeableQuery(e, t) {
          return this.evalQuery(e, t, !0);
        }
        async query(e, t) {
          return this.evalQuery(e, t, !1);
        }
        resolveSerializableQueryResult(e, t, n) {
          let r = new tx(t, n);
          return Tu(
            Eu(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let i = e[n];
                  t[n] = r.resolveValue(i);
                }
                return z(t);
              })
            )
          );
        }
      }),
      (mS = `style[data-framer-breakpoint-css]`),
      (hS = Symbol(`cycle`)),
      (vS = h.createContext(void 0)),
      (yS = () => h.useContext(vS)),
      (bS = `Variable`),
      ye(np(), 1),
      (SS = (() =>
        !va() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`)()),
      (CS = `framer/asset-reference,`),
      (wS = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = Df(t);
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
      (TS = ya()),
      (ES = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
      }),
      (DS = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (OS = class {
        constructor() {
          (A(this, `entries`, new Map()), A(this, `vectorSetItems`, new Map()));
        }
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(z_(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Of(e);
            (s &&
              (t && kf(s, n),
              (s.id = n),
              (o = Pf(s)),
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
          TS && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = DS),
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
          TS && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new ES(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !TS) ||
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
                        TS && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${DS}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t) => e.push(t.svg)),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (kS = new OS()),
      (AS = (() => ({
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
      (jS = y(function (e, t) {
        let n = ia(),
          r = ho(e),
          i = h.useRef(null),
          a = t ?? i,
          o = yS();
        return (
          vo(e, i),
          g(NS, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (MS = 5e4),
      (NS = (() => {
        var e;
        return (
          (e = class extends R_ {
            constructor() {
              (super(...arguments),
                A(this, `container`, h.createRef()),
                A(this, `svgElement`, null),
                A(this, `setSVGElement`, (e) => {
                  ((this.svgElement = e), this.setLayerElement(e));
                }),
                A(this, `previouslyRenderedSVG`, ``),
                A(this, `unmountedSVG`, ``));
            }
            static frame(e) {
              return ta(e, e.parentSize || 0);
            }
            get frame() {
              return ta(this.props, this.props.parentSize || 0);
            }
            componentDidMount() {
              if (this.unmountedSVG) {
                let { svgContentId: e } = this.props,
                  t = e ? `svg${e}` : null;
                (kS.subscribe(this.unmountedSVG, !e, t),
                  (this.previouslyRenderedSVG = this.unmountedSVG));
              }
              this.props.svgContentId || Rf(this.container, this.props);
            }
            componentWillUnmount() {
              (kS.unsubscribe(this.previouslyRenderedSVG),
                (this.unmountedSVG = this.previouslyRenderedSVG),
                (this.previouslyRenderedSVG = ``));
            }
            componentDidUpdate(e) {
              if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
              let { fill: t } = this.props;
              (k_.isImageObject(t) &&
                k_.isImageObject(e.fill) &&
                t.src !== e.fill.src &&
                So(this.svgElement, `fill`, null, !1),
                Rf(this.container, this.props));
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
                c = rh.getNumber(r);
              if (
                ((e.opacity = I(this.props.opacity) ? this.props.opacity : 1),
                G.hasRestrictions() && n)
              ) {
                (Object.assign(e, {
                  transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
                  width: `${n.width}px`,
                  height: `${n.height}px`,
                }),
                  Qi(this.props) && (e.position = `absolute`));
                let r = n.width / (i || 1),
                  o = n.height / (a || 1);
                t.transformOrigin = `top left`;
                let { zoom: s, target: l } = Eh;
                if (l === G.export) {
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
                w = S || { width: o || 100, height: a || 100 },
                T = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
                D = {};
              (this.collectLayout(T, D),
                Bs(this.props, T),
                Ws(this.props, T),
                R_.applyWillChange(this.props, T, !1));
              let O = null;
              if (typeof r == `string` || W.isColorObject(r)) {
                let e = W.isColorObject(r) ? r.initialValue || W.toRgbString(r) : r;
                ((T.fill = e), (T.color = e));
              } else if (K_.isLinearGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${K_.hash(t)}`;
                T.fill = `url(#${n})`;
                let { stops: i, x1: a, x2: o, y1: s, y2: c } = yf(t, x);
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
              } else if (J_.isRadialGradient(r)) {
                let t = r,
                  n = `${encodeURI(e || ``)}g${J_.hash(t)}`;
                T.fill = `url(#${n})`;
                let i = bf(t, x);
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
              } else if (k_.isImageObject(r)) {
                let e = Tf(r, w, x);
                e &&
                  ((T.fill = `url(#${e.id})`),
                  (O = g(`svg`, {
                    ref: this.setSVGElement,
                    width: `100%`,
                    height: `100%`,
                    style: { position: `absolute` },
                    role: `presentation`,
                    children: g(`defs`, { children: g(wS, { ...e }) }),
                  })));
              }
              let ee = { "data-framer-component-type": `SVG` },
                k = !S;
              k && Object.assign(ee, uo(this.props.center));
              let te =
                  !y &&
                  !O &&
                  !T.fill &&
                  !T.background &&
                  !T.backgroundImage &&
                  i.length < MS &&
                  !Ff(i) &&
                  !If(i),
                ne = null;
              if (te)
                ((T.backgroundSize = `100% 100%`),
                  (T.backgroundImage = lt(i)),
                  kS.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = ``));
              else {
                let e = m ? `svg${m}` : null,
                  t = kS.subscribe(i, !m, e, y);
                (kS.unsubscribe(this.previouslyRenderedSVG),
                  (this.previouslyRenderedSVG = i),
                  Lf(T) && (T.overflow = `hidden`),
                  (ne = C(E, {
                    children: [
                      O,
                      g(
                        `div`,
                        {
                          className: `svgContainer`,
                          style: D,
                          ref: this.container,
                          dangerouslySetInnerHTML: { __html: t },
                        },
                        k_.isImageObject(r) ? r.src : ``
                      ),
                    ],
                  })));
              }
              let re = co(this.props.as),
                { href: ie, target: ae, rel: oe, onClick: se, onTap: ce } = this.props,
                le = s || c;
              return g(re, {
                ...ee,
                ...b,
                layoutId: l,
                transformTemplate: k ? mo(this.props.center) : void 0,
                id: e,
                ref: p,
                style: T,
                className: u,
                variants: d,
                tabIndex: this.props.tabIndex,
                role: le ? `img` : void 0,
                "aria-label": s,
                "aria-description": c,
                "aria-hidden": le ? void 0 : `true`,
                onTap: ce,
                onClick: se,
                href: ie,
                target: ae,
                rel: oe,
                children: ne,
              });
            }
          }),
          A(e, `supportsConstraints`, !0),
          A(e, `defaultSVGProps`, {
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
          A(e, `defaultProps`, { ...R_.defaultProps, ...e.defaultSVGProps }),
          e
        );
      })()),
      (PS = ja(jS)),
      (FS = `explicitInter`),
      (We.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = xe(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
export {
  yy as $,
  ft as A,
  kS as B,
  Jv as C,
  Ud as D,
  Bf as E,
  vr as F,
  qd as G,
  Ec as H,
  Wy as I,
  Rr as J,
  tl as K,
  Ai as L,
  Da as M,
  ht as N,
  Bp as O,
  dp as P,
  hf as Q,
  Lr as R,
  Kv as S,
  dg as T,
  Mt as U,
  mr as V,
  Qc as W,
  mf as X,
  At as Y,
  fg as Z,
  m_ as _,
  Bv as a,
  Xf as b,
  yp as c,
  xu as d,
  Qs as et,
  pS as f,
  Ra as g,
  zf as h,
  Li as i,
  IS as j,
  Dr as k,
  lb as l,
  PS as m,
  Ny as n,
  gn as nt,
  Zy as o,
  G as p,
  dr as q,
  qh as r,
  Cp as s,
  xy as t,
  Jf as tt,
  An as u,
  mg as v,
  qv as w,
  Yv as x,
  Ks as y,
  Zd as z,
};
//# sourceMappingURL=framer.BfNjQ3gp.mjs.map
