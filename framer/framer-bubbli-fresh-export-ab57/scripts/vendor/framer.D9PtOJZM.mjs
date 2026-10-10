import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
import {
  A as t,
  B as n,
  C as r,
  F as i,
  H as a,
  I as o,
  L as s,
  M as c,
  N as l,
  P as u,
  R as d,
  S as f,
  T as p,
  V as m,
  _ as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  g as x,
  h as S,
  i as C,
  j as w,
  k as T,
  l as E,
  m as D,
  o as O,
  s as k,
  u as A,
  v as ee,
  w as te,
  x as j,
  y as ne,
} from "./react.CWoGm2_e.mjs";
import {
  $ as re,
  A as ie,
  B as ae,
  C as M,
  D as oe,
  E as se,
  F as ce,
  G as le,
  H as ue,
  I as de,
  J as fe,
  L as pe,
  M as me,
  N as he,
  O as ge,
  Q as _e,
  T as ve,
  U as N,
  V as ye,
  W as P,
  X as be,
  Y as F,
  Z as xe,
  _ as I,
  a as Se,
  b as Ce,
  c as we,
  d as Te,
  et as Ee,
  f as De,
  g as Oe,
  h as ke,
  i as Ae,
  j as je,
  k as Me,
  l as Ne,
  m as Pe,
  n as Fe,
  nt as Ie,
  o as Le,
  p as Re,
  q as ze,
  r as Be,
  s as Ve,
  tt as He,
  u as Ue,
  v as We,
  w as Ge,
  x as Ke,
  y as qe,
  z as Je,
} from "./motion.DjW49AAR.mjs";
function Ye(e) {
  return typeof e == `function`;
}
function Xe(e) {
  return typeof e == `boolean`;
}
function L(e) {
  return typeof e == `string`;
}
function R(e) {
  return Number.isFinite(e);
}
function Ze(e) {
  return Array.isArray(e);
}
function z(e) {
  return typeof e == `object` && !!e && !Ze(e);
}
function Qe(e) {
  for (let t in e) return !1;
  return !0;
}
function $e(e) {
  return e === void 0;
}
function et(e) {
  return e === null;
}
function tt(e) {
  return e == null;
}
function nt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function rt(e) {
  return z(e) && Ye(e.return);
}
function it(e) {
  return z(e) && Ye(e.then);
}
function at(e) {
  return e instanceof Promise;
}
function ot(e) {
  return `url('${st(e)}')`;
}
function st(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ct(e, t) {
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
function lt(e, t, n) {
  if (N_.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (N_.set(e, t), t))
    .catch((t) => {
      throw (N_.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(T_), N_.set(e, r));
}
function ut(e, t) {
  E_ && (P_.set(e, t), F_.has(e) && lt(e, t, `registered loader ${e}`));
}
function dt() {
  if (!E_) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(I_),
      i = r ? e.slice(I_.length) : e;
    if (!i) continue;
    F_.add(i);
    let a = P_.get(i);
    a ? lt(i, a, `registered loader ${i}`) : r && lt(i, () => import(n), n);
  }
}
function ft(e) {
  return typeof e == `object` && !!e && !b(e) && R_ in e;
}
function pt(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function mt(e, t = `default`, n) {
  n && ut(n, e);
  let r,
    a,
    o,
    s = () => {
      if (a || !n || !N_.has(n)) return;
      let e = N_.get(n);
      at(e) ? c(() => e) : (a = pt(e, t));
    },
    c = (e) =>
      a
        ? Promise.resolve(a)
        : ((r ||= e()
            .then((e) => {
              let n = pt(e, t);
              return ((a = n), n);
            })
            .catch((e) => {
              o = e;
            })),
          r),
    l = !1,
    u = x(function (t, r) {
      if (
        (i(() => {
          l = !0;
        }, []),
        o)
      )
        throw o;
      if ((s(), n !== void 0 && L_ !== void 0 && L_.add(n), !a)) throw c(e);
      return v(a, { ref: r, ...t });
    });
  return (
    (u.preload = () => (s(), c(e))),
    (u.getStatus = () => ({ hasLoaded: a !== void 0, hasRendered: l })),
    u
  );
}
function ht(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function gt(e) {
  return e === null || !(B_ in e) ? !1 : typeof e.equals == `function`;
}
function _t(e, t) {
  return e === t || (e !== e && t !== t);
}
function vt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!_t(e[r], t[r])) return !1;
  return !0;
}
function yt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!Tt(e[r], t[r], !0)) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!_t(r, t.get(n))) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!Tt(r, t.get(n), !0)) return !1;
  return !0;
}
function St(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function Ct(e, t) {
  let n = z_(e);
  if (n.length !== z_(t).length) return !1;
  for (let r of n)
    if (!ht(t, r) || (!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) && !_t(e[r], t[r])))
      return !1;
  return !0;
}
function wt(e, t) {
  let n = z_(e);
  if (n.length !== z_(t).length) return !1;
  for (let r of n)
    if (!ht(t, r) || (!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) && !Tt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function Tt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? yt(e, t) : vt(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? xt(e, t) : bt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return St(e, t);
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
      ? gt(e) && gt(t)
        ? e.equals(t)
        : n
          ? wt(e, t)
          : Ct(e, t)
      : !1;
}
function Et(e, t, n = !0) {
  try {
    return Tt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Dt(e) {
  return j.useCallback((t) => e[t], [e]);
}
function Ot({ api: e, children: t }) {
  return v(V_.Provider, { value: e, children: t });
}
function kt() {
  return j.useContext(V_);
}
function At({ routes: e, children: t }) {
  let n = Dt(e),
    r = l(() => ({ getRoute: n }), [n]);
  return v(V_.Provider, { value: r, children: t });
}
function jt() {
  let e = kt(),
    t = c(H_),
    n = t?.routeId ?? e.currentRouteId,
    r = t?.routeId ? t.pathVariables : e.currentPathVariables,
    i = n ? e.getRoute?.(n) : void 0;
  return l(() => {
    if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
  }, [n, r, i]);
}
function Mt() {
  let e = jt();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Nt(e) {
  let t = jt(),
    n = j.useRef(t);
  Et(n.current, t) || !t || ((n.current = t), e(t));
}
function Pt(e) {
  let t = kt();
  if (e) return t.getRoute?.(e);
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
function Lt(e, t) {
  let n = jt(),
    r = Pt(t) ?? n;
  return j.useMemo(() => (r ? Ft(r, e) : e), [e, r]);
}
function Rt() {
  return jt()?.pathVariables;
}
function B(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = Error(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function V(e, t) {
  throw t instanceof Error
    ? t
    : Error(
        t === void 0
          ? e
            ? `Unexpected value: ${e}`
            : `Application entered invalid state`
          : String(t)
      );
}
function zt(e) {
  return e === null || (typeof e != `object` && typeof e != `function`);
}
function Bt(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === rv
  );
}
function Vt(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Ht(e) {
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
function Ut(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Ht(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Wt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Gt(e) {
  return iv.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Kt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > tv);
}
function qt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > ev);
}
function Jt(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Kt(+e);
}
function Yt(e) {
  let t = Object.keys(e);
  for (var n = t.length - 1; n >= 0 && !Jt(t[n]); n--);
  return ((t.length = n + 1), t);
}
function Xt(e) {
  return new Uint8Array(e).toBase64();
}
function Zt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Qt(e) {
  return Buffer.from(e).toString(`base64`);
}
function $t(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function en(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function tn(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function nn(e, t) {
  return rn(JSON.parse(e), t);
}
function rn(e, t) {
  if (typeof e == `number`) return a(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let n = e,
    r = Array(n.length),
    i = null;
  function a(e, o = !1) {
    if (e === q_) return;
    if (e === Y_) return NaN;
    if (e === X_) return 1 / 0;
    if (e === Z_) return -1 / 0;
    if (e === Q_) return -0;
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
          case `Object`: {
            let t = s[1];
            if (typeof n[t] == `object` && n[t][0] !== `BigInt`) throw Error(`Invalid input`);
            r[e] = Object(a(t));
            break;
          }
          case `BigInt`:
            r[e] = BigInt(s[1]);
            break;
          case `null`:
            let c = Object.create(null);
            r[e] = c;
            for (let e = 1; e < s.length; e += 2) {
              if (s[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              c[s[e]] = a(s[e + 1]);
            }
            break;
          case `Int8Array`:
          case `Uint8Array`:
          case `Uint8ClampedArray`:
          case `Int16Array`:
          case `Uint16Array`:
          case `Float16Array`:
          case `Int32Array`:
          case `Uint32Array`:
          case `Float32Array`:
          case `Float64Array`:
          case `BigInt64Array`:
          case `BigUint64Array`:
          case `DataView`: {
            if (n[s[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = globalThis[o],
              i = a(s[1]);
            r[e] = s[2] === void 0 ? new t(i) : new t(i, s[2], s[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = s[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            let n = cv(t);
            r[e] = n;
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
          case `URL`: {
            let t = new URL(s[1]);
            r[e] = t;
            break;
          }
          case `URLSearchParams`: {
            let t = new URLSearchParams(s[1]);
            r[e] = t;
            break;
          }
          default:
            throw Error(`Unknown type ${o}`);
        }
      } else if (s[0] === $_) {
        let t = s[1];
        if (!qt(t)) throw Error(`Invalid input`);
        let n = [];
        ((r[e] = n), (n[tv] = void 0), delete n[tv]);
        for (let e = 2; e < s.length; e += 2) {
          let r = s[e];
          if (!Kt(r) || r >= t) throw Error(`Invalid input`);
          n[r] = a(s[e + 1]);
        }
        n.length = t;
      } else {
        let t = Array(s.length);
        r[e] = t;
        for (let e = 0; e < s.length; e += 1) {
          let n = s[e];
          n !== J_ && (t[e] = a(n));
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
function an(e, t) {
  let n = on(!1, e, t);
  return typeof n == `string` ? n : `[${n.join(`,`)}]`;
}
function on(e, t, n) {
  let r = [],
    i = new Map(),
    a = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) a.push({ key: e, fn: n[e] });
  let o = [],
    s = 0;
  function c(n, l) {
    if (n === void 0) return q_;
    if (Number.isNaN(n)) return Y_;
    if (n === 1 / 0) return X_;
    if (n === -1 / 0) return Z_;
    if (n === 0 && 1 / n < 0) return Q_;
    if (i.has(n)) return i.get(n);
    ((l ??= s++), i.set(n, l));
    for (let { key: e, fn: t } of a) {
      let i = t(n);
      if (i) return ((r[l] = `["${e}",${c(i)}]`), l);
    }
    if (typeof n == `function`) throw new nv(`Cannot stringify a function`, o, n, t);
    if (typeof n == `symbol`) throw new nv(`Cannot stringify a Symbol primitive`, o, n, t);
    let u = ``;
    if (zt(n)) u = sn(n);
    else if (typeof n.then == `function`) {
      if (!e)
        throw new nv(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          o,
          n,
          t
        );
      u = Promise.resolve(n).then((e) => {
        let t = c(e, l);
        t < 0 && (r[l] = t);
      });
    } else {
      let e = Vt(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          u = `["Object",${c(n.valueOf())}]`;
          break;
        case `Date`:
          u = `["Date","${isNaN(n.getDate()) ? `` : n.toISOString()}"]`;
          break;
        case `URL`:
          u = `["URL",${Ut(n.toString())}]`;
          break;
        case `URLSearchParams`:
          u = `["URLSearchParams",${Ut(n.toString())}]`;
          break;
        case `RegExp`:
          let { source: r, flags: i } = n;
          u = i ? `["RegExp",${Ut(r)},"${i}"]` : `["RegExp",${Ut(r)}]`;
          break;
        case `Array`: {
          let e = !1;
          u = `[`;
          for (let t = 0; t < n.length; t += 1)
            if ((t > 0 && (u += `,`), Object.hasOwn(n, t)))
              (o.push(`[${t}]`), (u += c(n[t])), o.pop());
            else if (e) u += J_;
            else {
              let t = Yt(n),
                r = t.length,
                i = String(n.length).length;
              if ((n.length - r) * 3 > 4 + i + r * (i + 1)) {
                u = `[` + $_ + `,` + n.length;
                for (let e = 0; e < t.length; e++) {
                  let r = t[e];
                  (o.push(`[${r}]`), (u += `,` + r + `,` + c(n[r])), o.pop());
                }
                break;
              } else ((e = !0), (u += J_));
            }
          u += `]`;
          break;
        }
        case `Set`:
          u = `["Set"`;
          for (let e of n) u += `,${c(e)}`;
          u += `]`;
          break;
        case `Map`:
          u = `["Map"`;
          for (let [e, t] of n)
            (o.push(`.get(${zt(e) ? sn(e) : `...`})`), (u += `,${c(e)},${c(t)}`), o.pop());
          u += `]`;
          break;
        case `Int8Array`:
        case `Uint8Array`:
        case `Uint8ClampedArray`:
        case `Int16Array`:
        case `Uint16Array`:
        case `Float16Array`:
        case `Int32Array`:
        case `Uint32Array`:
        case `Float32Array`:
        case `Float64Array`:
        case `BigInt64Array`:
        case `BigUint64Array`:
        case `DataView`: {
          let t = n;
          ((u = `["` + e + `",` + c(t.buffer)),
            t.byteLength !== t.buffer.byteLength && (u += `,${t.byteOffset},${t.length}`),
            (u += `]`));
          break;
        }
        case `ArrayBuffer`:
          u = `["ArrayBuffer","${sv(n)}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          u = `["${e}",${Ut(n.toString())}]`;
          break;
        default:
          if (!Bt(n)) throw new nv(`Cannot stringify arbitrary non-POJOs`, o, n, t);
          if (Wt(n).length > 0) throw new nv(`Cannot stringify POJOs with symbolic keys`, o, n, t);
          if (Object.getPrototypeOf(n) === null) {
            u = `["null"`;
            for (let e of Object.keys(n)) {
              if (e === `__proto__`)
                throw new nv(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (o.push(Gt(e)), (u += `,${Ut(e)},${c(n[e])}`), o.pop());
            }
            u += `]`;
          } else {
            u = `{`;
            let e = !1;
            for (let r of Object.keys(n)) {
              if (r === `__proto__`)
                throw new nv(`Cannot stringify objects with __proto__ keys`, o, n, t);
              (e && (u += `,`), (e = !0), o.push(Gt(r)), (u += `${Ut(r)}:${c(n[r])}`), o.pop());
            }
            u += `}`;
          }
      }
    }
    return ((r[l] = u), l);
  }
  let l = c(t);
  return l < 0 ? `${l}` : r;
}
function sn(e) {
  let t = typeof e;
  return t === `string`
    ? Ut(e)
    : e === void 0
      ? q_.toString()
      : e === 0 && 1 / e < 0
        ? Q_.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function cn(e, t, n = `lazy`) {
  switch ((G.__framer_events?.push([e, t, n]), e)) {
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
function ln(e) {
  return L(e) && (e === `` || uv.test(e));
}
function un() {
  return { [dv.QueryCache]: new Map(), [dv.CollectionUtilsCache]: new Map() };
}
function dn() {
  if (!E_) return;
  if (fv !== void 0) return fv;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      fv = nn(e.text) ?? un();
    } catch (e) {
      ((fv = un()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      k_(() => {
        (e?.remove(), (e = null));
      }),
      fv
    );
  }
}
function fn(e, t) {
  if (
    (console.warn(
      ct(
        `Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`
      )
    ),
    Math.random() < 0.01)
  ) {
    let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
    cn(`published_site_load_error`, { message: String(e), stack: t });
  }
}
function pn(e, t) {
  let n = dn();
  return n ? n[e].has(t) : !1;
}
function mn(e, t) {
  let n = dn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function hn(e) {
  return e?.id ?? W_;
}
function gn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function _n(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (gv.has(n)) return gv.get(n);
    let r = new vv(n, t);
    return (gv.set(n, r), r);
  };
}
function vn({ children: e, collectionUtils: t }) {
  let n = l(() => ({ get: _n(t) }), [t]);
  return v(_v.Provider, { value: n, children: e });
}
function yn() {
  return c(_v);
}
function bn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function xn() {
  return m === void 0 ? void 0 : m;
}
function Sn() {
  return a === void 0 ? void 0 : a;
}
function Cn() {
  let e = xn();
  return e ? yv.test(e.platform) : !1;
}
function wn() {
  let e = xn();
  return e
    ? bv.test(e.platform)
      ? !0
      : xv.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function Tn() {
  return Cn() || wn();
}
function En() {
  let e = xn();
  return e ? Sv.test(e.userAgent) : !1;
}
function Dn() {
  let e = xn();
  return e ? Cv.test(e.userAgent) && wv.test(e.vendor) && !En() : !1;
}
function On() {
  let e = xn();
  return e ? Tv.test(e.userAgent) && Ev.test(e.vendor) : !1;
}
function kn() {
  let e = xn();
  return e ? Dv.test(e.userAgent) : !1;
}
function An() {
  return typeof document == `object`;
}
function jn() {
  let e = xn();
  if (!e) return -1;
  let t = Ov.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Mn() {
  let e = xn();
  return e ? kv.test(e.userAgent) : !1;
}
function Nn() {
  return !1;
}
function Pn() {
  let e = Sn(),
    t = xn();
  return !e || !t ? !1 : `ontouchstart` in e || t.maxTouchPoints > 0;
}
function Fn() {
  let e = xn();
  return e && Av.test(e.userAgent) ? `tablet` : e && jv.test(e.userAgent) ? `phone` : `desktop`;
}
function In() {
  return Fn() === `desktop`;
}
function Ln(e) {
  return Tn() ? e.metaKey : e.ctrlKey;
}
function Rn() {}
function zn(e) {
  return typeof e == `function` ? e() : e;
}
function Bn(e, t) {
  return Fv[e] > Fv[t];
}
function Vn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function Hn(e, t) {
  let n = e?.priority,
    r = Vn();
  return n === `background`
    ? (t?.() ?? bn(1))
    : r?.yield
      ? r.yield(e).catch(Rn)
      : r?.postTask
        ? r.postTask(Rn, e).catch(Rn)
        : t
          ? t()
          : n === `user-blocking`
            ? Iv
            : bn(0);
}
function Un(e, t, n) {
  let r = -1 / 0,
    i,
    o = new Set();
  function s() {
    for (let e of o) e();
    o.clear();
  }
  function c() {
    return document.hidden ? (s(), !0) : !1;
  }
  function l() {
    An() && (document.addEventListener(`visibilitychange`, c), a.addEventListener(`pagehide`, s));
  }
  function u(n) {
    return new Promise((r) => {
      (setTimeout(r, Lv),
        e(() => {
          Hn(n, t).then(r);
        }));
    });
  }
  function d(e) {
    return An()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), o.delete(r), t());
            };
          (o.add(r), c() || l(), e.then(r, r));
        })
      : e;
  }
  function f(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? u(a) : Hn(a, t);
    return i ? d(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = f(t, n),
      o = t.signal,
      s = !0,
      c = (t) => {
        s &&
          ((s = !1),
          o?.removeEventListener(`abort`, l),
          t && (r = performance.now()),
          n && e.pendingPaintYieldCount--,
          i === e && e.pendingPaintYieldCount === 0 && (i = void 0));
      },
      l = () => c(!1);
    return (
      o?.aborted ? l() : o?.addEventListener(`abort`, l, { once: !0 }),
      a.then(
        () => c(!0),
        () => c(!0)
      ),
      a
    );
  }
  function m(e, t) {
    let a = i;
    if (!a) {
      let n = performance.now(),
        o = t ?? (e.priority === `user-blocking` ? Mv : Nv),
        s = An() && document.hidden ? Pv : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !An() && !t ? (n ? void 0 : Iv) : n ? m(i, r) : f(i);
  }
  return h;
}
function Wn() {
  let e = yn(),
    { getRoute: t } = kt();
  return u(
    (n, r, i = !0, a = !0) => {
      if (!n || !t) return;
      let o = t(n),
        { pathVariables: s, locale: c } = r;
      return Kn(o, { routeId: n, pathVariables: s, locale: c, collectionUtils: e }, i, a);
    },
    [t, e]
  );
}
function Gn(e, t = !0) {
  let n = Wn();
  i(() => {
    if (!(!t || !Bv)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Kn(e, t, n = !0, r = !0) {
  if (!Bv || !e) return;
  let i = e.page;
  if (!(!i || !ft(i))) {
    n && (await zv());
    try {
      let e = await i.preload();
      r && t && e && (await qn(e, t));
    } catch {}
  }
}
async function qn(e, t) {
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
function Jn(e, t) {
  return e.replace(Wv, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Yn(e, t = !1) {
  let n = ``;
  if (a !== void 0)
    if (t) n = a.location.search;
    else {
      let e = a.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? a.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? Xn(n, e) : e;
}
function Xn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Gv && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Zn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Wv)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !L(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = at(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = at(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = at(e) ? await e : e;
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
function Qn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function $n({
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
      u = await Zn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Qn(u.path, t.slug)),
    o && u.path && (u.path = Yn(u.path, !0)),
    u
  );
}
function er() {
  if (Kv) return;
  Kv = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (a.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((a.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), cn(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function tr({ children: e, value: t }) {
  return v(qv.Provider, { value: t, children: e });
}
function nr() {
  return j.useContext(qv);
}
function rr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function ir(e) {
  let t = Jv,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Yv;) ((n = e.next(t)), r.push(n.value), (t += Jv));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Jv }
  );
}
function ar(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function or(e) {
  let { innerWidth: t, innerHeight: n } = a,
    [r, i] = ar(e.x),
    [o, s] = ar(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: s === `px` ? o : (o / 100) * n };
}
function sr(e) {
  let [t, n] = ar(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function cr(e) {
  let { x: t, y: n } = or(e);
  return Math.hypot(Math.max(t, a.innerWidth - t), Math.max(n, a.innerHeight - n));
}
function lr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function ur(e) {
  return e ? Qv[e] : void 0;
}
function dr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (fr(t)) {
    let { easing: e, duration: n } = ir(
      ge({ keyframes: [0, 1], ...pr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = ur(n?.mask?.type),
    o = lr(n, `start`, e, a),
    s = lr({ ...$v, mask: n.mask }, `end`, e, a);
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
function fr(e) {
  return e.type === `spring`;
}
function pr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function mr({ exit: e = ty, enter: t }) {
  let n = document.createElement(`style`);
  n.id = ey;
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
    (r += dr(`exit`, e)),
    (r += dr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function hr() {
  k_(() => {
    ke.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(ey);
      e && document.head.removeChild(e);
    });
  });
}
function gr() {
  return !!document.startViewTransition;
}
function _r(e) {
  return new Promise((t) => {
    ke.render(() => {
      (performance.mark(`framer-vt-style`), mr(e), t());
    });
  });
}
async function vr(e, t, n) {
  if (!gr()) {
    e();
    return;
  }
  if ((await _r(t), n?.aborted)) return;
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
      .catch(ny),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), hr());
      })
      .catch(ny),
    r
  );
}
function yr() {
  let e = nr(),
    n = t(void 0);
  return (
    i(() => {
      n.current &&= (n.current(), void 0);
    }),
    u(
      (t, r, i, a) => {
        let o = rr(t, r, e);
        if (o) {
          let e = new Promise((e) => {
            n.current = e;
          });
          return vr(
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
function br(e, t) {
  k_(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function xr(e, t, n, r = f) {
  r(() => {
    let t = async (e) => (await zv({ ...n, continueAfter: `paint` }), e()),
      r = t(e);
    return () => {
      (async () => {
        let e = await r;
        e && t(e);
      })();
    };
  }, t);
}
function Sr(e) {
  let n = t(new Set());
  return (
    xr(
      () => {
        for (let e of n.current) e();
        n.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    u(
      (t) => {
        let r,
          i = new Promise((e) => {
            ((r = e), n.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: t, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: t }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: t,
            ignore: () => {
              ((s = !0), r && (n.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Cr(e) {
  return z(e) && `routeId` in e;
}
function wr(e = a.history.state) {
  return Cr(e) ? e : void 0;
}
function Tr(e) {
  return e?.entryId;
}
function Er(e) {
  ay = e;
}
function Dr() {
  return ay;
}
function Or() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}
function kr(e, t) {
  return Ar(e, Tr(e) ?? Tr(t));
}
function Ar(e, t = Or()) {
  return { ...e, entryId: t };
}
function jr(e, t, n = !1) {
  (performance.mark(`framer-history-replace`), Er(kr(e, wr())), t && br(t, a.location.href));
  let r;
  r = Hv().privateRouterReplaceState
    ? !t || t === a.location.href
      ? a.History.prototype.replaceState
      : a.history.replaceState
    : n
      ? a.History.prototype.replaceState
      : a.history.replaceState;
  try {
    r.call(a.history, ay, ``, t);
  } catch {}
}
function Mr(e) {
  (performance.mark(`framer-history-replace`),
    Er(Ar(e)),
    History.prototype.replaceState.call(a.history, ay, ``, void 0));
}
function Nr(e) {
  let t = a.navigation?.transition;
  if (!t) {
    e();
    return;
  }
  let n = () => {
    let n = a.navigation.transition;
    if (n && n !== t) {
      Nr(e);
      return;
    }
    e();
  };
  t.finished.then(n, n);
}
function Pr(e, t) {
  (performance.mark(`framer-history-push`), Er(Ar(e)), br(t, a.location.href), er());
  try {
    a.history.pushState(ay, ``, t);
  } catch {}
}
function Fr({ disabled: e, routeId: t, initialPathVariables: n, initialLocaleId: r }) {
  f(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = a.location.hash ? a.location.hash.slice(1) : void 0;
    jr({ ...wr(), routeId: t, hash: i, pathVariables: n, localeId: r }, void 0, !0);
  }, []);
}
function Ir(e, n, r) {
  let o = yr(),
    s = Sr(`framer-route-change`),
    { onHistoryTraversal: c, usesCustomScrollRestoration: l } = e,
    d = l ? `manual` : `after-transition`,
    f = t(void 0),
    p = u(() => {
      (f.current?.resolve(), (f.current = void 0));
    }, []),
    m = u(
      async ({ state: e }) => {
        if (!Cr(e)) return;
        let t = s({ popstate: !0 }),
          i = It();
        (t.promise.finally(i), Tr(Dr()) !== (Tr(e) ?? Tr(wr())) && c(), Er(e));
        let { routeId: l, hash: u, pathVariables: f, localeId: m } = e,
          h = L(u) ? u : a.location.hash ? a.location.hash.slice(1) : void 0,
          g = !1,
          _ = () => {
            g ||=
              (r(
                l,
                L(m) ? m : void 0,
                h,
                a.location.pathname + a.location.search + a.location.hash,
                z(f) ? f : void 0,
                !0,
                t,
                !1
              ),
              !0);
          },
          v = d === `after-transition`;
        (await Promise.resolve(o(n.current, l, _))
          .then((e) => e?.updateCallbackDone)
          .catch(_)
          .finally(() => {
            v || p();
          }),
          await t.promise,
          v && p(),
          await a.navigation?.transition?.finished.catch(T_),
          iy(),
          br(a.location.href));
      },
      [n, s, c, p, r, o, d]
    ),
    h = u(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Cr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                f.current = { resolve: e, reject: t };
              }),
                (f.current = void 0));
            },
            scroll: d,
          });
      },
      [d]
    );
  i(
    () => (
      a.addEventListener(`popstate`, m),
      oy && a.navigation.addEventListener(`navigate`, h),
      () => {
        (a.removeEventListener(`popstate`, m),
          oy && a.navigation.removeEventListener(`navigate`, h));
      }
    ),
    [m, h]
  );
}
async function Lr(e, t, n) {
  if (!e.path || !t) return !1;
  let r = Qn(Jn(e.path, t), n.slug);
  return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((a.location.href = a.location.origin + r), !0)
    : !1;
}
function Rr() {
  let e = yn();
  return u((t) => zr({ ...t, collectionUtils: e }), [e]);
}
async function zr(e) {
  let t = await $n(e);
  if (t) {
    try {
      localStorage.preferredLocale = e.nextLocale.code;
    } catch {}
    try {
      if (!L(t.path)) throw Error(`Expected result.path to be a string`);
      if (t.isMissingInLocale && (await Lr(e.route, t.pathVariables, e.nextLocale))) return;
    } catch {}
    return t;
  }
}
function Br(e, t) {
  let n = Tr(wr());
  n &&
    Nr(() => {
      let r = wr();
      if (!r || Tr(r) !== n) return;
      let i = r.paginationInfo === void 0 || r.paginationInfo[e] === void 0,
        a = { ...r.paginationInfo, [e]: t };
      jr({ ...r, paginationInfo: a }, void 0, i);
    });
}
function Vr(e) {
  let n = t(Promise.resolve()),
    r = t(),
    i = u(
      (t) => {
        if (t.navigationType === `traverse` || !t.canIntercept) return;
        let i = r.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          t.intercept({ handler: () => n.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return u(
    (e, t, o) => {
      if (!oy) {
        o?.();
        return;
      }
      ((n.current = e),
        (r.current = t),
        a.navigation.addEventListener(`navigate`, i),
        o?.(),
        e.finally(() => {
          n.current === e &&
            ((r.current = void 0), a.navigation.removeEventListener(`navigate`, i));
        }));
    },
    [i]
  );
}
function Hr(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Ur(e) {
  return Hr(e.trim().toLowerCase().replace(sy, `-`));
}
function Wr({ children: e, value: t }) {
  return v(ly.Provider, { value: t, children: e });
}
function Gr() {
  return c(ly);
}
function Kr(e, n) {
  let r = s(() => ({ inputs: n, result: e() }))[0],
    a = t(!0),
    o = t(r),
    c =
      a.current || (n && o.current.inputs && Et(n, o.current.inputs, !1))
        ? o.current
        : { inputs: n, result: e() };
  return (
    i(() => {
      ((a.current = !1), (o.current = c));
    }, [c]),
    c.result
  );
}
function qr(e, t) {
  return Kr(() => e, t);
}
function Jr() {
  return j.useContext(py);
}
function Yr() {
  return Jr().activeLocale?.code ?? `en-US`;
}
function Xr() {
  return a.location.search;
}
function Zr() {
  return ``;
}
function Qr(e) {
  return (
    hy.add(e),
    a.addEventListener(`popstate`, e),
    () => {
      (hy.delete(e), a.removeEventListener(`popstate`, e));
    }
  );
}
function $r() {
  for (let e of hy) e();
}
function ei({ children: e, routerRenderKey: n, isNavigationCommitPending: r }) {
  let i = Gr() === `preview`,
    [o, c] = s(``),
    l = t(n);
  uy(() => {
    l.current = n;
  }, [n]);
  let d = _(Qr, Xr, Zr),
    f = T(d),
    p = n !== T(n),
    m = i ? o : p ? d : f,
    g = u(
      async (e) => {
        if (i) {
          h(() => {
            c((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let t = r(),
          o = n;
        if ((await zv({ continueAfter: `paint` }), t || r() || l.current !== o)) return;
        let s = wr();
        if (!s) return;
        let u = new URL(a.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let f = s.queryParamBackAnchorSearch,
          p = a.location.search.slice(1),
          m = f === void 0 && d !== p,
          g = f !== void 0 && d === f,
          _ = { ...s, queryParamBackAnchorSearch: g ? void 0 : (f ?? (m ? p : void 0)) },
          v = u.toString();
        (m || g ? Pr(_, v) : jr(_, v), $r());
      },
      [r, i, n]
    ),
    y = Kr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: g }), [m, g]);
  return v(gy.Provider, { value: y, children: e });
}
function ti(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = ni(e),
    [r, i] = ni(t),
    a = ri(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function ni(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function ri(e, t) {
  if (e === t || ((e = `/` + ii(e)), (t = `/` + ii(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = yy(e, 1 + s);
    if (n !== yy(t, 1 + s)) break;
    n === vy && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (yy(t, 1 + s) === vy) return xy(t, 1 + s + 1);
      if (s === 0) return xy(t, 1 + s);
    } else r > a && (yy(e, 1 + s) === vy ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || yy(e, s) === vy) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${xy(t, 1 + o)}`;
}
function ii(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = yy(e, o);
    else if (wy(a)) break;
    else a = vy;
    if (wy(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || yy(t, t.length - 1) !== _y || yy(t, t.length - 2) !== _y) {
            if (t.length > 2) {
              let e = by(t, Cy);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = xy(t, 0, e)), (n = t.length - 1 - by(t, Cy))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          Sy && ((t += t.length > 0 ? `${Cy}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${Cy}${xy(e, r + 1, o)}`) : (t = xy(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === _y && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ai(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || a.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function oi(e, t, n) {
  let r = Ft(t, e);
  if (!r) return;
  let i = Object.assign({}, t?.elements, n);
  return r.replace(Wv, (e, t) => i[t] ?? e);
}
function si(
  e,
  {
    currentRoutePath: t,
    currentRoutePathLocalized: n,
    currentPathVariables: r,
    hash: i,
    pathVariables: o,
    hashVariables: s,
    relative: c = !0,
    preserveQueryParams: l,
    onlyHash: u = !1,
    siteCanonicalURL: d,
    localeId: f,
    localeSlug: p,
  }
) {
  let m = oi(i, e, s);
  if (u) return m ?? ``;
  let h = t ?? `/`;
  (n && f && (h = n[f] ?? h), r && (h = h.replace(Wv, (e, t) => String(r[t] || e))));
  let g = (f ? e?.pathLocalized?.[f] : void 0) ?? e?.path ?? `/`;
  o && (g = g.replace(Wv, (e, t) => String(o[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && o !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (c)
    if (Ty.has(h) && a !== void 0) {
      let e = ai(d);
      g = ti(a.location.pathname, e + g);
    } else g = ti(h, g);
  else g = Qn(g, p);
  let y = _ || v;
  return ((l || y) && (g = Yn(g, y)), m && (g = `${g}#${m}`), g);
}
function ci() {
  let e = new Event(`change`, { bubbles: !0 });
  return ((e[Ey] = 1), e);
}
function li() {
  let e = new MouseEvent(`click`, { bubbles: !0 });
  return ((e[Ey] = 1), e);
}
function ui(e) {
  return e instanceof HTMLInputElement && (e.type === `checkbox` || e.type === `radio`)
    ? `checked`
    : `value`;
}
function di(e) {
  return Ey in e && e[Ey] === 1;
}
function fi(e) {
  return Dy in e.nativeEvent && e.nativeEvent[Dy] === 1;
}
function pi(e) {
  let n = t(!1),
    r = t(null),
    a = _(A_, M_, Oy);
  return (
    i(() => {
      if (!a) return;
      let t = r.current;
      if (n.current || !t) return;
      n.current = !0;
      let i = ui(t),
        o = t[i];
      if (o === e) return;
      if (t.type === `radio` && o === !0) {
        ((t.checked = !1), t.dispatchEvent(li()));
        return;
      }
      if (i === `checked`) {
        let e = li();
        ((e[Dy] = 1), t.dispatchEvent(e), t.dispatchEvent(li()));
        return;
      }
      if (t.nodeName === `SELECT`) {
        t.dispatchEvent(ci());
        return;
      }
      let s = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t), i)?.set;
      if (!s) return;
      s.call(t, ``);
      let c = ci();
      ((c[Dy] = 1),
        t.dispatchEvent(c),
        queueMicrotask(() => {
          (s.call(t, o), t.dispatchEvent(ci()));
        }));
    }, [a]),
    r
  );
}
function mi() {
  if (!ky) return;
  ((jy = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  ky.forEach((n) => t.addEventListener(n, Ay, e));
}
function hi() {
  return (
    i(() => {
      if (!jy || !ky) return;
      let e = { capture: !0 },
        t = document.body;
      (ky.forEach((n) => t.removeEventListener(n, Ay, e)),
        (ky = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function gi(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function _i(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function vi() {
  ((Zy = new Xy()), Zy.render.markStart());
}
function yi() {
  (r(() => {
    Zy?.useInsertionEffects.markRouterStart();
  }, []),
    f(() => {
      Zy?.useLayoutEffects.markRouterStart();
    }, []),
    i(() => {
      Zy?.useEffects.markRouterStart();
    }, []));
}
function bi() {
  (r(() => {
    (Zy?.render.markEnd(), Zy?.useInsertionEffects.markStart());
  }, []),
    f(() => {
      if ((Zy?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Qy = !0;
        return;
      }
      ke.read(() => {
        (Zy?.browserRendering.requestAnimationFrame.markStart(),
          Zy?.unattributedHydrationOverhead.measure());
      });
    }, []),
    i(() => {
      (Zy?.useEffects.markStart(),
        Zy?.browserRendering.hasStarted ||
          (Zy?.mutationEffects.measure(), Zy?.useEffects.markAreSynchronous()));
    }, []));
}
function xi() {
  (r(() => {
    Zy?.useInsertionEffects.markEnd();
  }, []),
    f(() => {
      (Zy?.useLayoutEffects.markEnd(),
        !(Qy || document.visibilityState !== `visible`) &&
          ke.read(() => {
            (Zy?.browserRendering.requestAnimationFrame.markEnd(),
              zv().then(() => {
                Zy?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    i(() => {
      Zy?.useEffects.markEnd();
    }, []));
}
function Si() {
  return (bi(), null);
}
function Ci() {
  return (xi(), null);
}
function wi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return j.isValidElement(e) ? j.cloneElement(e, n) : v(e, { ...n });
}
function Ti() {
  return nb;
}
function Ei(e) {
  if (rb?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      B(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: ki(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          B(t, `localizedPath must be defined`);
          let i = ki(t),
            a = (n[e] ||= {});
          a[t] = { path: t, depth: i, routeId: r };
        }
    }
    ((r = Object.values(t)), r.sort(({ depth: e }, { depth: t }) => t - e));
    for (let e in n) {
      let t = n[e];
      if (!t) continue;
      let r = Object.values(t);
      (r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
    }
    rb = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: rb.pathRoutes,
    paths: rb.paths,
    pathRoutesLocalized: rb.pathRoutesLocalized,
    pathsLocalized: rb.pathsLocalized,
  };
}
function Di(e, t, n = !0, r = Ti()) {
  return Oi(e, t, r, n);
}
function Oi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = Ei(e),
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
      let e = Ai(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Ai(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Ai(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Ai(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function ki(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Ai(e, t) {
  let n = [],
    r = ji(t).replace(Wv, (e, t) => (n.push(t), `([^/]+)`)),
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
function ji(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Mi() {
  if (`PerformanceServerTiming` in a) {
    let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
    if (!e || e.length === 0) return new URLSearchParams();
    let t = e.find((e) => e.name === `abtests`);
    return t ? new URLSearchParams(t.description) : new URLSearchParams();
  }
  return new URLSearchParams();
}
function Ni(e, t, n) {
  let r = e[n];
  if (!r) return;
  let i = r.abTestingParentId ?? n,
    a = e[i];
  if (!a) return;
  let { abTestingParentId: o, ...s } = r,
    c = a.elements || r.elements ? { ...a.elements, ...r.elements } : void 0;
  e[i] = {
    ...s,
    includedLocales: a.includedLocales,
    elements: c,
    abTestingVariantId: n,
    abTestId: t,
  };
}
function Pi(e, t) {
  for (let [n, r] of t) Ni(e, n, r);
}
function Fi(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Ii(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Li(e, t) {
  if (a === void 0) return t;
  let n = t;
  if (t) {
    Ii(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Pi(e, Mi()), Fi(e), n);
}
function Ri(e) {
  (i(() => {
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
    r(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function zi(e, ...t) {
  ib.has(e) || (ib.add(e), console.warn(e, ...t));
}
function Bi(e, t, n) {
  zi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Vi(e) {
  return (
    typeof e == `object` &&
    !!e &&
    ob in e &&
    e[ob] instanceof Function &&
    sb in e &&
    e[sb] instanceof Function
  );
}
function Hi(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = K(r);
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
function Ui(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Wi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Gi(e) {
  return Math.round(e * 2) / 2;
}
function Ki(e, t) {
  return { x: e, y: t };
}
function qi(e, t, n, r = !1) {
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
function Ji(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Yi(e) {
  let t = Xi(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Xi(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function Zi(e, t, n) {
  return (
    (ub.rgb_r = e / 255),
    (ub.rgb_g = t / 255),
    (ub.rgb_b = n / 255),
    ub.rgbToHsluv(),
    { h: ub.hsluv_h, s: ub.hsluv_s, l: ub.hsluv_l }
  );
}
function Qi(e, t, n, r = 1) {
  return (
    (ub.hsluv_h = e),
    (ub.hsluv_s = t),
    (ub.hsluv_l = n),
    ub.hsluvToRgb(),
    { r: ub.rgb_r * 255, g: ub.rgb_g * 255, b: ub.rgb_b * 255, a: r }
  );
}
function $i(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function ea(e, t, n) {
  return {
    r: Ji(e) ? sa(e, 255) * 255 : 0,
    g: Ji(t) ? sa(t, 255) * 255 : 0,
    b: Ji(n) ? sa(n, 255) * 255 : 0,
  };
}
function ta(e, t, n, r) {
  let i = [
    ua(Math.round(e).toString(16)),
    ua(Math.round(t).toString(16)),
    ua(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function na(e, t, n) {
  let r,
    i,
    a = sa(e, 255),
    o = sa(t, 255),
    s = sa(n, 255),
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
function ra(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ia(e, t, n) {
  let r, i, a;
  if (((e = sa(e, 360)), (t = sa(t * 100, 100)), (n = sa(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = ra(s, o, e + 1 / 3)), (i = ra(s, o, e)), (a = ra(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function aa(e, t, n) {
  ((e = sa(e, 255)), (t = sa(t, 255)), (n = sa(n, 255)));
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
function oa(e, t, n) {
  ((e = sa(e, 360) * 6), (t = sa(t * 100, 100)), (n = sa(n * 100, 100)));
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
function sa(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ca(e) && (e = `100%`);
    let t = la(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ca(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function la(e) {
  return typeof e == `string` && e.includes(`%`);
}
function ua(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function da(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = lb[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = db.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = db.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = db.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Yi(r[2] ?? ``), l: Yi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = db.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Yi(r[2] ?? ``),
              l: Yi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = db.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Yi(r[2] ?? ``), v: Yi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = db.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Yi(r[2] ?? ``),
                  v: Yi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = db.hex8.exec(t))
                ? {
                    r: fa(r[1] ?? ``),
                    g: fa(r[2] ?? ``),
                    b: fa(r[3] ?? ``),
                    a: pa(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = db.hex6.exec(t))
                  ? {
                      r: fa(r[1] ?? ``),
                      g: fa(r[2] ?? ``),
                      b: fa(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = db.hex4.exec(t))
                    ? {
                        r: fa(`${r[1]}${r[1]}`),
                        g: fa(`${r[2]}${r[2]}`),
                        b: fa(`${r[3]}${r[3]}`),
                        a: pa(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = db.hex3.exec(t))
                      ? {
                          r: fa(`${r[1]}${r[1]}`),
                          g: fa(`${r[2]}${r[2]}`),
                          b: fa(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function fa(e) {
  return parseInt(e, 16);
}
function pa(e) {
  return fa(e) / 255;
}
function ma(e) {
  let t = fb.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function ha(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function ga({ r: e, g: t, b: n, a: r }) {
  return { r: ha(e), g: ha(t), b: ha(n), a: r };
}
function _a(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function va({ r: e, g: t, b: n, a: r }) {
  return { r: _a(e), g: _a(t), b: _a(n), a: r };
}
function ya({ r: e, g: t, b: n, a: r }) {
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
function ba(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function xa({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ba(e),
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
function Sa(e) {
  return gb(hb(e));
}
function Ca(e) {
  return mb(pb(e));
}
function wa(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Da({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = Ta(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Da(e)
              : Oa(e)),
    i
  );
}
function Ta(e) {
  let t = da(e);
  if (t) return t.format === `hsl` ? Oa(t) : t.format === `hsv` ? Ea(t) : Da(t);
}
function Ea(e) {
  let t = oa(e.h, e.s, e.v);
  return { ...na(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ka(e.a) };
}
function Da(e) {
  let t = ea(e.r, e.g, e.b);
  return { ...na(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : ka(e.a) };
}
function Oa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Ji(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Ji(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Xi(e.s)),
    (r = Ji(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Xi(e.l)),
    (i = ia(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function ka(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Aa() {
  return G.location.origin === `https://screenshot.framer.invalid`;
}
function ja({ children: e }) {
  if (c(Ab).top) return v(k, { children: e });
  let n = t({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = t({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = t(new Set()).current,
    a = t({
      getLayoutId: u(({ id: e, name: t, duplicatedFrom: a }) => {
        if (!e) return null;
        let o = t ? `byName` : `byId`,
          s = n.current[o][e];
        if (s) return s;
        let c = t || e;
        if (!a && !i.has(c) && (!n.current.byLayoutId[c] || n.current.byLayoutId[c] === c))
          return (
            n.current.count[o][c] === void 0 &&
              ((n.current.count[o][c] = 0), (n.current.byLayoutId[c] = c), (r.current[o][e] = c)),
            i.add(c),
            c
          );
        let l;
        if (a?.length)
          for (let s = a.length - 1; s >= 0; s--) {
            let c = a[s];
            B(!!c, `duplicatedId must be defined`);
            let u = n.current[o][c],
              d = n.current.byLastId[c];
            if (d && !l) {
              let e = n.current.byLayoutId[d],
                r = !e || e === t;
              d && !i.has(d) && (!t || r) && (l = [d, c]);
            }
            let f = u ? n.current.byLayoutId[u] : void 0,
              p = !f || f === t;
            if (u && !i.has(u) && (!t || p))
              return ((r.current[o][e] = u), (r.current.byLastId[c] = u), i.add(u), u);
          }
        let u = n.current.byLastId[e];
        if (u && !i.has(u)) return (i.add(u), (r.current.byId[e] = u), u);
        if (l) {
          let [t, n] = l;
          return ((r.current[o][e] = t), (r.current.byLastId[n] = t), i.add(t), t);
        }
        let d = n.current.byPossibleId[e];
        if (d && !i.has(d)) return (i.add(d), (r.current.byId[e] = d), d);
        let f = a?.[0],
          p = t || f || e,
          { layoutId: m, value: h } = Ma(p, (n.current.count[o][p] ?? -1) + 1, i);
        if (((n.current.count[o][p] = h), (r.current[o][e] = m), a?.length && !t)) {
          let e = a[a.length - 1];
          if ((e && (r.current.byLastId[e] = m), a.length > 1))
            for (let e = 0; e < a.length - 1; e++) {
              let t = a[e];
              t !== void 0 && (r.current.byPossibleId[t] || (r.current.byPossibleId[t] = m));
            }
        }
        return ((r.current.byLayoutId[m] = c), i.add(m), m);
      }, []),
      persistLayoutIdCache: u(() => {
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
          i.clear());
      }, []),
      top: !0,
      enabled: !0,
    }).current;
  return v(Ab.Provider, { value: a, children: e });
}
function Ma(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function Na({ enabled: e = !0, ...t }) {
  let n = c(Ab),
    r = l(() => ({ ...n, enabled: e }), [e]);
  return v(Ab.Provider, { ...t, value: r });
}
function Pa(e) {
  let n = t(null);
  return (n.current === null && (n.current = e()), n.current);
}
function Fa(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ia(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return E(`div`, {
    style: Mb,
    children: [
      v(`div`, { className: `text`, style: Pb, children: r }),
      i && v(`div`, { className: `text`, style: Fb, children: i }),
    ],
  });
}
function Ia(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function H(e) {
  return Number.isFinite(e);
}
function La(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function Ra(e) {
  return typeof e != `string` && typeof e != `number`;
}
function za(e) {
  return e != null && typeof e != `boolean` && !La(e);
}
function Ba(e) {
  return (Math.PI / 180) * e;
}
function Va(e) {
  return $e(e) ? !1 : e === 2 || e === 5;
}
function Ha(e) {
  return !(!za(e) || !Ra(e));
}
function Ua(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function Wa(e, t, n, r) {
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
      if (!r) return Ga(e);
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
function Ga(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      V(e, `unknown constraint key`);
  }
}
function Ka(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(Wa(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(Wa(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function qa(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(Wa(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(Wa(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function Ja(e, t, n, r, i) {
  let a = qa(H(e) ? e : Vb, n, r, i),
    o = Ka(H(t) ? t : Hb, n, r, i);
  return (
    H(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (H(n.left) && H(n.right)
        ? (o = a / n.aspectRatio)
        : (H(n.top) && H(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function Ya(e, t) {
  return !H(e) || !H(t) ? null : e + t;
}
function Xa(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function Za(e) {
  return !e._constraints || Xa(e) ? !1 : e._constraints.enabled;
}
function Qa(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    H(n) && H(r) ? { width: n, height: r } : null
  );
}
function $a(e) {
  let t = Qa(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function eo(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!Za(e) || r) return $a(e);
  let i = to(e),
    a = no(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return Bb.toRect(i, o, null, n, null);
}
function to(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = zb.quickfix({
      left: H(t),
      right: H(n),
      top: H(r),
      bottom: H(i),
      widthType: Ua(c),
      heightType: Ua(l),
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
function no(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function ro() {
  return j.useContext(Ub).parentSize;
}
function io(e) {
  return typeof e == `object`;
}
function ao(e) {
  return io(e) ? e.width : e;
}
function oo(e) {
  return io(e) ? e.height : e;
}
function so(e, t) {
  return v(Wb, { parentSize: t, children: e });
}
function co(e) {
  return eo(e, ro(), !0);
}
function lo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function uo(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function fo(e, t, n = qb) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!Jb) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) Jb = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = Jb;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function po() {
  return Aa() ? J.preview : J.current();
}
function mo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? Z.variable(e) : e === `` ? `""` : e;
}
function ho(e) {
  return e !== dx && e !== fx;
}
function go(e) {
  for (let t in e) if (ho(t) && e?.[t] === !0) return !0;
  return !1;
}
function _o(e, t, n, r, i) {
  let a = j.useRef(null),
    o = j.useCallback(
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
    s = j.useCallback(
      (r) => {
        if ((n?.(r), !t && !e)) return;
        let i = r.target.validity;
        a.current === !1 &&
          !go(i) &&
          (r.currentTarget.setCustomValidity(``),
          r.target.reportValidity(),
          (a.current = !0),
          e?.());
      },
      [t, e, n]
    ),
    c = j.useCallback(
      (e) => {
        if (!t) {
          r?.(e);
          return;
        }
        if (a.current === !1) return;
        let n = e.currentTarget.validity;
        if (go(n)) {
          o(e);
          return;
        }
        r?.(e);
      },
      [o, r, t]
    );
  return j.useMemo(() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }), [o, s, c, i]);
}
function vo(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return yo(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return bo(r);
    case `lower-roman`:
    case `upper-roman`:
      return So(r);
    default:
      return yo(r);
  }
}
function yo(e) {
  return String(e).length;
}
function bo(e) {
  let t = 1;
  for (; xo(t) < e;) t++;
  return t;
}
function xo(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function So(e) {
  let t = 0;
  for (let n of bx) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Co(e, t) {
  return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function wo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function To() {
  return J.current() === J.preview ? zx.value : Rx.value;
}
function Eo(e) {
  return Qb(e, To, `framer-lib-combinedCSSRules`);
}
function Do(e) {
  return z(e) || Ye(e);
}
function Oo(e) {
  return !!e && Bx in e && e[Bx] === !0;
}
function ko(e) {
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
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return $e(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return R(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return z(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = z(e.defaultValue) ? e.defaultValue : {};
        return (z(e.controls) && Ao(t, e.controls), t);
      }
      case `array`:
        return Ze(e.defaultValue) ? e.defaultValue : void 0;
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
function Ao(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!$e(i) || Oo(r)) continue;
    let a = ko(r);
    $e(a) || (e[n] = a);
  }
}
function jo(e) {
  if (z(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Mo(e, t) {
  Do(e) && Ao(jo(e), t);
}
function No(e, t) {
  (Object.assign(e, { propertyControls: t }), Mo(e, t));
}
function Po(e) {
  return e.propertyControls;
}
function Fo() {
  let e = J.current();
  return e === J.canvas || e === J.export;
}
function Io() {
  let [e] = s(() => Fo());
  return e;
}
function Lo(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ro(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Zx) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function zo(e, t) {
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
function Bo(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Qx) continue;
    let n = zo(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${zo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function Vo(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Xx) {
    let n = zo(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ho(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = Vo(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Bo(n, t, Ro(t.pixelWidth, t.pixelHeight)) };
}
function Uo() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: ot(Jx.imagePlaceholderSvg),
  };
}
function Wo(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Go(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Ko(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Yx,
    objectPosition: Go(e.positionX, e.positionY),
    objectFit: Wo(e.fit),
  };
}
function qo(e) {
  let t = j.useRef(e ? `auto` : `async`),
    n = u((e) => {
      ((t.current = `auto`), (e.decoding = `auto`));
    }, []),
    r = u(
      (e) => {
        n(e.currentTarget);
      },
      [n]
    ),
    i = u(
      (e) => {
        e?.complete && n(e);
      },
      [n]
    );
  return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Jo({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = Jx.useImageSource(e, t, n),
    s = Ko(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = qo(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ho(e.nodeFixedSize, e, o);
  return v(`img`, {
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
function Yo({ image: e, containerSize: t, nodeId: n }) {
  let r = j.useRef(null),
    i = Jx.useImageElement(e, t, n),
    a = Ko(e);
  return (
    j.useLayoutEffect(() => {
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
    v(`div`, { ref: r, style: { display: `contents`, ...Yx } })
  );
}
function Xo({ nodeId: e, image: t, containerSize: n }) {
  let r = j.useRef(null),
    i = Jx.useImageSource(t, n, e);
  return (
    j.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Ko(t);
      Jx.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    v(`div`, { ref: r, style: { display: `contents`, ...Yx } })
  );
}
function Zo({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (L(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = R(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Gi(e * (t.pixelWidth / 2)),
        s = Jx.useImageSource(t, n);
      ((r = {
        ...$x,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Go(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        J.current() === J.canvas
          ? Jx.canRenderOptimizedCanvasImage(Jx.useImageSource(t))
            ? v(Xo, { image: t, ...n })
            : v(Yo, { image: t, ...n })
          : v(Jo, { image: t, avoidAsyncDecoding: J.current() === J.export, ...n });
  let o = a ? $x : (r ?? { ...$x, ...Uo() });
  return i
    ? v(M.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : v(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Qo(e, t, n = !0) {
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
function $o(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Yx,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), v(M.div, { style: n }))
    : (Qo(e, n, !1), v(M.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function es(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function ts(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !tS.isImageObject(t)) return;
  let r = null;
  if (((r = L(n) ? { alt: ``, src: n } : K.get(t, null)), tS.isImageObject(r))) return es(r, e);
}
function ns(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function rs(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? M[e] : M.div;
}
function is(e, t) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0));
}
function as(e) {
  let t = {};
  return (!e || !nS || J.current() !== J.canvas || is(t, e), t);
}
function os(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function ss(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = j.Children.map(t, (e) =>
        j.isValidElement(e) ? j.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function cs(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function ls(e, { specificLayoutId: t, postfix: n } = {}) {
  let { name: r, layoutIdKey: i, duplicatedFrom: a, __fromCodeComponentNode: o = !1, drag: s } = e,
    { getLayoutId: u, enabled: d } = c(Ab);
  return l(() => {
    if (!d) return e.layoutId;
    let c = t || e.layoutId;
    if (!c && (s || !i || o)) return;
    let l = c || u({ id: i, name: r, duplicatedFrom: a });
    if (l) return n ? `${l}-${n}` : l;
  }, [d]);
}
function us() {
  let [e, t] = j.useState(0);
  return j.useCallback(() => t((e) => e + 1), []);
}
function ds(e) {
  let t = us();
  i(() => {
    let n = e?.current;
    if (n)
      return (
        aS?.observeElementWithCallback(e.current, t),
        () => {
          aS?.unobserve(n);
        }
      );
  }, [e, t]);
}
function fs(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(oS)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(ps)
    .map(ms);
}
function ps(e) {
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
function ms(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(ps);
  return t ? ms(t) : e;
}
function hs(e, t, n = () => [], r = {}) {
  let { id: i, visible: a, _needsMeasure: o } = e,
    { skipHook: s = !1 } = r,
    l = c(rS),
    u = J.current() === J.canvas;
  uy(() => {
    !u ||
      l ||
      s ||
      (t.current && i && a && o && Jx.queueMeasureRequest(os(i), t.current, n(t.current)));
  });
}
function gs(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && Jx.queueMeasureRequest(os(t.id), t, fs(t));
}
function _s(e) {
  e.willChange = `transform`;
  let t = J.current() === J.canvas;
  lS && t && (e.translateZ = sS);
}
function vs(e) {
  ((e.willChange = `transform`), ys(e, !0));
}
function ys(e, t) {
  let n = J.current() === J.canvas;
  if (!lS || !n) return;
  let r = (L(e.transform) && e.transform) || ``;
  t ? r.includes(cS) || (e.transform = r + cS) : (e.transform = r.replace(cS, ``));
}
function bs(e, t, n, r = !0) {
  if (!e) return;
  let i = Vx(e.style),
    a = n || i[t],
    o = () => {
      xs(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function xs(e) {
  return L(e) || R(e) || et(e);
}
function Ss(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Cs(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  Ss(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function ws(e, t) {
  let n = [e, t];
  return pS.test(e) ? e : Cs(1e3, mS, n, () => fS.multiplyAlpha(e, t));
}
function Ts(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: ws(e.value, t) }))
  );
}
function Es(e, t) {
  let n = 0;
  return (
    Ts(e, t).forEach((e) => {
      n ^= dS(e.value) ^ e.position;
    }),
    n
  );
}
function Ds(e) {
  return e && hS.every((t) => t in e);
}
function Os(e) {
  return e && gS.every((t) => t in e);
}
function ks({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || yb(t)
      ? (n.backgroundColor = t)
      : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e))
    : e &&
      ((e = K.get(e, null)),
      typeof e == `string` || yb(e)
        ? (n.background = e)
        : vS.isLinearGradient(e)
          ? (n.background = vS.toCSS(e))
          : bS.isRadialGradient(e)
            ? (n.background = bS.toCSS(e))
            : q.isColorObject(e) && (n.backgroundColor = e.initialValue || q.toRgbString(e)));
}
function U(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function As(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function js(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function Ms(e) {
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
    Ce(n)
      ? (t.cornerShape = je(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    U(e, `size`, t),
    U(e, `width`, t),
    U(e, `height`, t),
    U(e, `minWidth`, t),
    U(e, `minHeight`, t),
    U(e, `top`, t),
    U(e, `right`, t),
    U(e, `bottom`, t),
    U(e, `left`, t),
    U(e, `position`, t),
    U(e, `overflow`, t),
    U(e, `opacity`, t),
    (!e._border || !e._border.borderWidth) && U(e, `border`, t),
    U(e, `borderRadius`, t),
    U(e, `radius`, t, `borderRadius`),
    U(e, `color`, t),
    U(e, `shadow`, t, `boxShadow`),
    U(e, `x`, t),
    U(e, `y`, t),
    U(e, `z`, t),
    U(e, `rotate`, t),
    U(e, `rotateX`, t),
    U(e, `rotateY`, t),
    U(e, `rotateZ`, t),
    U(e, `scale`, t),
    U(e, `scaleX`, t),
    U(e, `scaleY`, t),
    U(e, `skew`, t),
    U(e, `skewX`, t),
    U(e, `skewY`, t),
    U(e, `originX`, t),
    U(e, `originY`, t),
    U(e, `originZ`, t),
    ks(e, t),
    t
  );
}
function Ns(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Vx(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function Ps(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (SS.has(t)) return `pointer`;
}
function Fs(e) {
  return Is(e) ? !0 : e.style ? !!Is(e.style) : !1;
}
function Is(e) {
  return CS in e && (e[CS] === `scroll` || e[CS] === `auto`);
}
function Ls(e) {
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
    m = se(e.minWidth),
    h = se(e.minHeight),
    g = se(e.maxWidth),
    _ = se(e.maxHeight);
  return {
    top: se(n),
    left: se(t),
    bottom: se(r),
    right: se(i),
    width: se(a),
    height: se(o),
    size: se(l),
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
function Rs(e) {
  let t = c(rS),
    { style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
    o = Ls(e),
    s = co(o),
    l = {
      display: `block`,
      flex: n?.flex ?? `0 0 auto`,
      userSelect: J.current() === J.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !Ns(e) && !e.__fromCanvasComponent && !Fs(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = j.Children.count(e.children) > 0 &&
      j.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = Ms(e);
  (a === void 0 && !i && (As(p) || (l.width = wS.width), js(p) || (l.height = wS.height)),
    o.minWidth !== void 0 && (l.minWidth = o.minWidth),
    o.minHeight !== void 0 && (l.minHeight = o.minHeight));
  let m = {};
  (Za(o) &&
    s &&
    !lo(e) &&
    (m = { left: s.x, top: s.y, width: s.width, height: s.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, r, p, m, n),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    uS.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Fo();
  return (
    e.positionSticky
      ? (!g || Jx.isOnPageCanvas || t) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = Jx.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, s]
  );
}
function zs(e) {
  let t = {};
  for (let n in e)
    (Ke(n) || Ux(n)) && !TS.has(n)
      ? (t[n] = Vx(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Vx(e)[n] != `boolean` && !e.transition && (t.transition = Vx(e)[n]));
  return t;
}
function Bs(e) {
  return `data-framer-name` in e;
}
function Vs(e, t, n, r) {
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
function Hs(e) {
  return v(M.div, { layoutId: OS, style: jS, children: e.children });
}
function Us(e, t) {
  Ye(e) ? e(t) : Ws(e) && (e.current = t);
}
function Ws(e) {
  return z(e) && `current` in e;
}
function Gs() {
  let e = Pa(() => new Set()),
    t = Pa(() => new Map());
  return Pa(() => (n, r) => ({
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
function Ks(e) {
  let n = t(null),
    r = Gs();
  return Pa(() => (Ws(e) ? r(e) : Ye(e) ? r(n, e) : r(n)));
}
function qs(e, n, r) {
  let i = t(),
    a = t();
  (Kr(
    () => {
      a.current !== void 0 && (a.current = !0);
    },
    r ?? [{}]
  ),
    e &&
      a.current !== !1 &&
      ((a.current = !1), e.unobserve(i.current), e.observe(n), (i.current = n)));
}
function Js(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new MS({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ys(e, t, n) {
  let r = Pa(() => `${n.rootMargin}`),
    i = c(NS),
    { enabled: a, root: o, rootMargin: s, threshold: l } = n;
  qs(
    e,
    (e) => {
      if (a && e !== null) return Js(i, r, e, o, t, s, l);
    },
    [a, t, o, s, l]
  );
}
function Xs(e, t, n) {
  let r = j.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  PS(
    e,
    j.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Qs(e, o?.y ?? 0);
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
    { threshold: FS, rootMargin: s, enabled: i ?? !0 }
  );
}
function Zs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, G.innerHeight);
}
function Qs({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Zs(t, e) >= r;
}
function $s() {
  return c(zS);
}
function ec() {
  return new Map();
}
function tc() {
  return Pa(ec);
}
function nc(e, t = []) {
  let { register: n, deregister: r } = c(BS);
  i(() => {
    if (e) return (n(e), () => r(e));
  }, [n, r, ...t]);
}
function rc(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function ic(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (H(t.originX) && (r.originX = t.originX),
      H(t.originY) && (r.originY = t.originY),
      H(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (H(n.originX) && (r.originX = n.originX),
      H(n.originY) && (r.originY = n.originY),
      H(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function ac(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function oc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return KS.PushLeft;
    case `left`:
      return KS.PushRight;
    case `bottom`:
      return KS.PushUp;
    case `top`:
      return KS.PushDown;
  }
}
function sc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return KS.OverlayLeft;
    case `left`:
      return KS.OverlayRight;
    case `bottom`:
      return KS.OverlayUp;
    case `top`:
      return KS.OverlayDown;
  }
}
function cc(e) {
  switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return KS.FlipLeft;
    case `left`:
      return KS.FlipRight;
    case `bottom`:
      return KS.FlipUp;
    case `top`:
      return KS.FlipDown;
  }
}
function lc(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return dc(e, t.transition, t.component);
    case `removeOverlay`:
      return fc(e);
    case `add`:
      return pc(e, t.key, t.transition, t.component);
    case `remove`:
      return gc(e);
    case `update`:
      return uc(e, t.key, t.component);
    case `back`:
      return mc(e);
    case `forward`:
      return hc(e);
    default:
      return;
  }
}
function uc(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function dc(e, t, n) {
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
function fc(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function pc(e, t, n, r) {
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
    c = i?.key && n.withMagicMotion ? xc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = yc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = _c(e, t, c),
    p = bc(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function mc(e) {
  let t = { ...e.containers },
    n = gc(e);
  if (n) return ((n.containers = t), n);
}
function hc(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = pc(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function gc(e) {
  let t = [...e.history.slice(0, e.current + 1)];
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (B(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = vc(e, r, n),
    u = bc(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function _c(e, t, n) {
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
function vc(e, t, n) {
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
function yc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function bc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = Sc(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function xc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Sc(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return Cc(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return Cc(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return Cc(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return Cc(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function Cc(e, t, n) {
  let r = {},
    i = {};
  return (
    JS.forEach((e) => {
      ((r[e] = US[e]), (i[e] = { ...n, from: US[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Vx(US)[a]}%` : Vx(US)[a];
        ((Vx(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function wc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function Tc({ currentOverlayItem: e }) {
  return e && e.transition.exit;
}
function Ec({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e && e.transition.animation
    ? e.transition.animation
    : t && t.transition.animation
      ? t.transition.animation
      : QS;
}
function Dc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function Oc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function kc(e, t) {
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
function Ac(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function jc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function Mc(e, t) {
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
function Nc(e, t) {
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
  return QS;
}
function Pc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function Fc(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function Ic(e) {
  return j.Children.map(e.component, (t) => {
    if (!za(t) || !Ra(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? z(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      j.cloneElement(t, n)
    );
  });
}
function Lc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function Rc(e, t) {
  let n = ye(),
    r = ce();
  return v(ZS, {
    ref: (e) => {
      if (t) {
        if (typeof t == `function`) {
          t(e);
          return;
        }
        t.current = e;
      }
    },
    ...e,
    resetProjection: n,
    skipLayoutAnimation: r,
    children: e.children,
  });
}
function zc(e, t = null) {
  let n;
  if (
    (t instanceof HTMLElement && (n = t),
    !n && e.target instanceof HTMLElement && (n = e.target),
    !n)
  )
    return { x: e.pageX, y: e.pageY };
  if (typeof G.webkitConvertPointFromPageToNode == `function`) {
    let t = new G.WebKitPoint(e.pageX, e.pageY);
    return ((t = G.webkitConvertPointFromPageToNode(n, t)), { x: t.x, y: t.y });
  }
  let r = n.getBoundingClientRect(),
    i = parseFloat(n.style.width),
    a = parseFloat(n.style.height),
    o = { x: i ? i / r.width : 1, y: a ? a / r.height : 1 };
  return {
    x: o.x * (e.pageX - r.left - n.clientLeft + n.scrollLeft),
    y: o.y * (e.pageY - r.top - n.clientTop + n.scrollTop),
  };
}
function Bc(e) {
  let t = class extends j.Component {
    static defaultProps = Object.assign({}, e.defaultProps);
    shouldCancelTap = !1;
    activeEventListeners = new Map();
    get element() {
      return this.component.current && this.component.current.element;
    }
    hasFramerEventListener = !1;
    component = j.createRef();
    componentDidMount() {
      this.addEventListeners();
    }
    componentDidUpdate(e) {
      this.addEventListeners(e);
    }
    componentWillUnmount() {
      this.removeEventListeners();
    }
    addEventListeners(e) {
      this.element && !this.hasFramerEventListener
        ? (this.element.addEventListener(`FramerEvent`, ({ detail: e }) => {
            let t = e.type,
              n = e.event;
            this.handleEvent(t, n);
          }),
          iC.forEach((e) => this.addHoverEvent(e)),
          (this.hasFramerEventListener = !0))
        : this.element && e
          ? iC.forEach((t) => this.checkHoverEvent(t, e))
          : this.element || (this.hasFramerEventListener = !1);
    }
    removeEventListeners() {
      iC.forEach((e) => this.removeHoverEvent(e));
    }
    addHoverEvent(e) {
      let t = this.props[e];
      if (this.element && t) {
        let n = (e) => {
          let n = new tC(e);
          t(n);
        };
        this.activeEventListeners.set(e, n);
        let r = rC[e];
        this.element.addEventListener(r, n);
      }
    }
    removeHoverEvent(e) {
      let t = this.activeEventListeners.get(e);
      if (this.element && t) {
        let n = rC[e];
        (this.element.removeEventListener(n, t), this.activeEventListeners.delete(e));
      }
    }
    checkHoverEvent(e, t) {
      t[e] !== this.props[e] && (this.removeHoverEvent(e), this.addHoverEvent(e));
    }
    handleEvent(e, t) {
      let n = aC[e];
      n &&
        n.forEach((e) => {
          let n = this.props[e],
            r = this.shouldCancelTap && oC.has(e);
          n && !r && n(t);
        });
    }
    render() {
      return v(nC.Consumer, {
        children: (t) => (
          (this.shouldCancelTap = t.dragging),
          v(e, { ...this.props, ref: this.component })
        ),
      });
    }
  };
  return ((0, eC.default)(t, e), t);
}
function Vc(e, t) {
  !e.blendingMode || e.blendingMode === `normal` || (t.mixBlendMode = e.blendingMode);
}
function Hc(e) {
  return fC in e;
}
function Uc(e, t) {
  if (!Hc(e)) return;
  let n = K.getNumber(e.opacity);
  n !== 1 && (t.opacity = n);
}
function Wc(e, t) {
  e.overflow && (t.overflow = e.overflow);
}
function Gc(e) {
  return pC in e;
}
function Kc(e) {
  let t = Number(e);
  return typeof e == `string` && Number.isNaN(t)
    ? e
    : (Vi(e) && (t = K.getNumber(e)), t ? `${t}px` : `0`);
}
function qc(e) {
  return e && e !== `0`;
}
function Jc(e, t) {
  if (!Gc(e)) return;
  let { radius: n } = e;
  if (typeof n == `string` || Vi(n) || H(n)) {
    let e = Kc(n);
    qc(e) &&
      (t.borderTopLeftRadius =
        t.borderTopRightRadius =
        t.borderBottomRightRadius =
        t.borderBottomLeftRadius =
          e);
  } else if (n) {
    let e = Kc(n.topLeft),
      r = Kc(n.topRight),
      i = Kc(n.bottomRight),
      a = Kc(n.bottomLeft);
    (qc(e) || qc(r) || qc(i) || qc(a)) &&
      ((t.borderTopLeftRadius = e),
      (t.borderTopRightRadius = r),
      (t.borderBottomRightRadius = i),
      (t.borderBottomLeftRadius = a));
  }
}
function Yc(e, t) {
  let { color: n } = e;
  typeof n == `string`
    ? (t.color = n)
    : q.isColorObject(n) && (t.color = n.initialValue || q.toRgbString(n));
}
function Xc(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function Zc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Qc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => hC.toCSS(e)).join(`, `);
  n && (t.boxShadow = n);
}
function $c(e, t) {
  let n = [];
  (H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    H(e.invert) && n.push(`invert(${e.invert / 100})`),
    H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    H(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Xc(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function el(e, t) {
  H(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function tl(e, t) {
  (el(e, t), $c(e, t));
}
function nl(e, t, n = !1) {
  (ks(e, t), Jc(e, t), tl(e, t), Vc(e, t), Wc(e, t), Uc(e, t), Yc(e, t), n ? Zc(e, t) : Qc(e, t));
}
function rl(e, t) {
  return (typeof t == `string` && (t = parseFloat(t)), H(t) ? t : gC(e));
}
function il(e, t, n) {
  let r = n,
    i = typeof t.x == `number` ? `${t.x}px` : t.x,
    a = typeof t.y == `number` ? `${t.y}px` : t.y,
    o = gC(e.z),
    s = gC(e.scaleZ),
    c = gC(e.originZ),
    l = rl(e.rotationZ, se(r.rotateZ)),
    u = rl(e.rotationX, se(r.rotateX)),
    d = rl(e.rotationY, se(r.rotateY)),
    f = gC(e.scale),
    p = gC(e.scaleX),
    m = gC(e.scaleY),
    h = gC(e.skew),
    g = gC(e.skewX),
    _ = gC(e.skewY),
    v = rl(e.rotation, se(r.rotate));
  Ob.target === J.export || o !== 0 || s !== 1 || c !== 0 || l !== 0 || u !== 0 || d !== 0
    ? (n.transform = `
            ${`translate3d(${i}, ${a}, ${o}px)`}
            scale3d(${p * f}, ${m * f}, ${s})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            translateZ(${c}px)
            rotateX(${u}deg)
            rotateY(${d}deg)
            rotateZ(${(v + l).toFixed(4)}deg)
            translateZ(${-c}px)`)
    : (n.transform = `
            ${`translate(${i}, ${a})`}
            scale(${p * f}, ${m * f})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            rotate(${v.toFixed(4)}deg)`);
  let y = `${gC(e.originX) * 100}% ${gC(e.originY) * 100}%`;
  ((n.transformOrigin = y), (n.WebkitTransformOrigin = y));
}
function al(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `100% 100%`;
    default:
      return `cover`;
  }
}
function ol(e, t) {
  let n = ts(e);
  n &&
    ((t.backgroundImage = `url("${n.src}")`),
    (t.backgroundSize = al(n.fit)),
    (t.backgroundRepeat = `no-repeat`),
    (t.backgroundPosition = `center`));
}
function sl(e) {
  return H(e) ? `${e}px` : e;
}
function cl(e, t, n) {
  if (t[n] !== void 0) {
    let r = K.get(t[n], void 0);
    Vx(e)[n] = sl(r);
  }
}
function ll(e) {
  return v(`div`, {
    style: Object.assign(
      {},
      {
        height: `100%`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        fontFamily: `Helvetica`,
      },
      e.style || {}
    ),
    children: e.children,
  });
}
function ul(e) {
  for (let t in e) if (Vi(e[t])) return !0;
  for (let t of yC) if (e.hasOwnProperty(t)) return !1;
  for (let t of bC) if (e.hasOwnProperty(t)) return !0;
  return !1;
}
function dl(e, t) {
  let n,
    r = (...r) => {
      (G.clearTimeout(n), (n = G.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      G.clearTimeout(n);
    }),
    r
  );
}
function fl(...e) {
  return e.filter(Boolean).join(` `);
}
function pl() {
  let e = j.useContext(TC);
  return !Number.isNaN(e.update);
}
function ml(e) {
  if (e.startsWith(DC)) return e.substr(OC);
}
function hl(e, t, n) {
  let r = p.map(e, (e) => (b(e) ? w(e, t) : e));
  return n ? r : v(k, { children: r });
}
function gl(e) {
  let t = Pa(() => _l(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function _l(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = vl(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = vl(t)));
    },
    r = !1;
  function i(i, a) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      p.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      p.map(i, (e) => {
        if (b(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Ye(a) ? a(e.props) : a;
          return w(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let a = function (e, t) {
    return v(k, { children: i(e, t) });
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
function vl(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Us(n, e), Us(t, e));
  };
}
function yl(e, t, n, r, i, a, o, s) {
  let c = j.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !j.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Cl(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Sl([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Sl([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = v(
        AC.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = xl(e, a, r);
    (f.length
      ? (B(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = v(
          `div`,
          { className: `${jC} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : B(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    B(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, v(`div`, { className: MC }, `property-overrides-separator`)]
  );
}
function bl(e) {
  return e.split(`-`)[2];
}
function xl(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${bl(a)}`);
  }
  return r;
}
function Sl(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Cl(e, t) {
  for (let n of Object.keys(t)) if (!Et(e[n], t[n], !0)) return !0;
  return !1;
}
function wl(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Tl(e) {
  return j.forwardRef(({ optimized: t, ...n }, r) => {
    let i = j.useContext(kC),
      a = j.useContext(AC)?.variants,
      o = n[BC];
    o && !An() && RC.setAll(o, a, t ? n : null, i);
    let s = HC(n);
    return v(e, { ref: r, ...n, ...s });
  });
}
function El(e) {
  return L(e) || Array.isArray(e);
}
function Dl(e) {
  return e in GC;
}
function Ol(e, t) {
  let n = Pa(() => ({ values: WC(t ? e : void 0) }));
  return (
    j.useEffect(() => {
      if (!t)
        for (let e of UC) {
          let t = GC[e];
          $e(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function kl(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: n,
    loopTransition: r,
    loopRepeatType: a,
    loop: o,
    loopPauseOffscreen: c,
  },
  d
) {
  let f = ae(),
    p = Pa(WC),
    m = t(!1),
    g = YC(),
    _ = t(null),
    v = u(async () => {
      if (!o) return;
      let e = r || void 0,
        t = m.current && a === `mirror`,
        n = t ? GC : o,
        i = t ? o : GC;
      return (
        (m.current = !m.current),
        (_.current = Promise.all(
          UC.map((t) => {
            if (!(f && t !== `opacity`))
              return (
                p[t].jump(i[t] ?? GC[t]),
                new Promise((r) => {
                  let a = { ...e, onComplete: () => r() },
                    o = n[t] ?? i[t];
                  typeof o == `number` && De(p[t], o, a);
                })
              );
          })
        )),
        _.current
      );
    }, [o, a, r, f]),
    [y, b] = s(!1),
    x = t(!1),
    S = u(async () => {
      !e || !x.current || (await v(), await g(n ?? 0), S());
    }, [v, g, e, n]),
    C = u(() => {
      x.current || ((x.current = !0), h(() => b(!0)), S());
    }, [S]),
    w = u((e = !0) => {
      (UC.forEach((e) => {
        p[e].stop();
      }),
        UC.forEach((e) => {
          p[e].set(GC[e]);
        }),
        (m.current = !1),
        e && ((x.current = !1), h(() => b(!1))));
    }, []),
    T = e && o,
    E = u(() => {
      document.hidden ? w(!1) : x.current && ((x.current = !1), C());
    }, [C, w]);
  (i(() => {
    if (T)
      return (
        document.addEventListener(`visibilitychange`, E),
        () => {
          document.removeEventListener(`visibilitychange`, E);
        }
      );
  }, [T, E]),
    i(() => {
      (T && c) || (T ? C() : w());
    }, [C, w, c, T]),
    i(() => () => w(), [w]));
  let D = t(!1),
    O = u(async () => {
      _.current && (await _.current, !D.current && w());
    }, [w]);
  PS(
    d,
    u(
      (e) => {
        e.isIntersecting ? ((D.current = !0), C()) : ((D.current = !1), O());
      },
      [C, O]
    ),
    { enabled: T && c }
  );
  let k = y || !c;
  return l(() => ({ values: p, style: T && k ? KC : qC }), [T, k]);
}
function Al(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function jl(e, t, n) {
  let { speed: r = 100, offset: i = 0, adjustPosition: a = !1, parallaxTransformEnabled: o } = e,
    s = j.useRef(null),
    l = ae(),
    u = j.useCallback(
      (e) => (s.current === null || r === 100 ? 0 : Al(e, s.current, r, i, a)),
      [r, i, a]
    ),
    { scrollY: d } = ue(),
    f = P(d, u),
    p = pe(a && s.current === null ? `hidden` : n),
    m = pe(0),
    h = c(NS);
  return (
    qs(
      t,
      (e) => {
        if (e === null || !o) return;
        let t = Js(h, `undefined`, e, null, (e) => {
          ((s.current = e.boundingClientRect.top),
            ke.update(() => {
              (f.set(u(d.get())), a && p.set(n ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [a, o]
    ),
    Nt(() => {
      o && f.set(0);
    }),
    { values: { y: l || !o ? m : f }, style: o ? { ...KC, visibility: p } : qC }
  );
}
function Ml(e) {
  return typeof e == `object` && !!e;
}
function Nl(e) {
  if (Ml(e)) return e?.transition;
}
function Pl(e, t, n, r, i, a) {
  let o = Nl(e);
  return Promise.all(
    UC.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = Ml(e) ? (e?.[s] ?? GC[s]) : GC[s];
          if ((Ce(u) && (u = u.get()), !R(u))) return c();
          let d = le.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (L(i) && !l?.hasAnimated && G.MotionHandoffAnimation) {
            let e = G.MotionHandoffAnimation(i, s, ke);
            e && (f = e);
          }
          a ? l.set(u) : De(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function Fl(
  { initial: e, animate: n, exit: r, presenceInitial: i, presenceAnimate: a, presenceExit: o },
  s,
  c,
  u,
  d
) {
  let f = i ?? e,
    p = a ?? n,
    m = o ?? r,
    [h, g] = Je(),
    _ = t({ lastPresence: !1, lastAnimate: p, hasMounted: !1, running: !1 }),
    v = Pa(() => {
      let e = f ?? u;
      if (!z(e)) return { values: WC() };
      let t = {};
      for (let n in e) {
        let r = z(e) ? e[n] : void 0;
        R(r) && (t[n] = r);
      }
      return { values: WC(t) };
    });
  qs(
    s,
    (e) => {
      let { hasMounted: t } = _.current;
      if (t && p) return;
      let n = le.get(e);
      if (n) {
        Object.assign(_.current, { hasMounted: !0 });
        for (let e in v.values) {
          if (!Dl(e)) continue;
          let t = u?.[e];
          n.setBaseTarget(e, R(t) ? t : GC[e]);
        }
      }
    },
    [p]
  );
  let y = ae();
  qs(s, (e) => {
    if (!c) {
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
            Pl(p, v, y, s, d).then(() => Object.assign(_.current, { running: !1 })))
          : m
            ? (Object.assign(_.current, { running: !0 }),
              Pl(m, v, y, s, d)
                .then(() => Object.assign(_.current, { running: !1 }))
                .then(() => g()))
            : g());
      return;
    }
    let { lastAnimate: t, running: n } = _.current;
    Et(p, t) ||
      !p ||
      (Object.assign(_.current, { lastAnimate: p }),
      Pl(p, v, y, s, d, !n).then(() => Object.assign(_.current, { running: !1 })));
  });
  let b = c && p;
  return l(() => ({ values: v.values, style: b ? KC : qC }), [b]);
}
function Il(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function Ll(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o || !o.current) continue;
    let c = Il(o.current, document.documentElement) - QC - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function Rl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function zl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = Mt();
  j.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return oe((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = Rl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < $C) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function Bl(e, t, n) {
  let r = Ll(e, t),
    i = [...tw],
    a = r[0];
  if (!R(a)) return nw;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!R(e)) return nw;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function Vl(e) {
  return {
    x: e?.x ?? GC.x,
    y: e?.y ?? GC.y,
    scale: e?.scale ?? GC.scale,
    opacity: e?.opacity ?? GC.opacity,
    transformPerspective: e?.transformPerspective ?? GC.transformPerspective,
    rotate: e?.rotate ?? GC.rotate,
    rotateX: e?.rotateX ?? GC.rotateX,
    rotateY: e?.rotateY ?? GC.rotateY,
    skewX: e?.skewX ?? GC.skewX,
    skewY: e?.skewY ?? GC.skewY,
    transition: e?.transition ?? void 0,
  };
}
function Hl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return j.useMemo(
    () => ({
      initial: r ?? Vl({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? Vl({ opacity: t }),
      exit: i ?? Vl(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function Ul(e, t) {
  let n = ae(),
    r = Hl(e),
    i = e.styleAppearEffectEnabled,
    a = Ol(i ? r.initial : r.animate, i),
    o = j.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = Mt(),
    c = j.useRef(),
    u = j.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = le.get(t.current);
      c.current = Promise.all(
        UC.map((e) => {
          s && a.values[e].set(r.initial[e] ?? GC[e]);
          let t = o[e] ?? GC[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (R(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && De(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    d = e.animateOnce && o.current.lastAppearState === !0;
  Xs(
    t,
    (e) => {
      let { isPlaying: t, lastAppearState: n } = o.current;
      if (t) {
        o.current.scheduledAppearState = e;
        return;
      }
      ((o.current.scheduledAppearState = void 0),
        (o.current.lastAppearState = e),
        n !== e && u(e ? r.animate : r.exit, e));
    },
    {
      enabled: !e.targets && e.styleAppearEffectEnabled && !e.scrollDirection && !d,
      animateOnce: !!e.animateOnce,
      threshold: { y: e.threshold },
    }
  );
  let f = e.targets && i && !e.scrollDirection;
  return (
    j.useEffect(() => {
      if (!f) return;
      let t = { initial: !0 },
        n = `initial`;
      return oe((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = Bl(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let l = ie(a.current, s, c);
        if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
        n = l;
        let d = Vx(r)[l];
        d && u(d);
      });
    }, [s, f]),
    zl(e.scrollDirection, (e) => void u(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Nt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of UC) a.values[e].set(r.initial?.[e] ?? GC[e]);
    }),
    l(() => ({ values: a.values, style: i ? KC : qC }), [i])
  );
}
function Wl(e, t) {
  let n = j.useRef({});
  j.useEffect(() => {
    if (t !== void 0)
      for (let r of z_(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = Re({
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
        a.attach((e, t) => ((s = e), (o = t), ke.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function Gl(e, t) {
  let n = aw();
  return {
    inputRange: Ll(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of UC) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function Kl(e) {
  let t = aw();
  for (let { target: n } of e) for (let e of UC) t[e]?.push(n[e]);
  return t;
}
function ql(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: i = 0,
  },
  a
) {
  let o = ae(),
    s = Ol(iw(n, o), t),
    c = !t || !n,
    l = e === `onScrollTarget`,
    u = Mt();
  return (
    f(() => {
      if (!(c || !l))
        return oe((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: a } = Gl(n, i * t.containerLength);
          if (r.length !== 0)
            for (let e of UC)
              (o && e !== `opacity`) ||
                (r.length === a[e].length &&
                  a[e][0] !== void 0 &&
                  s.values[e].set(ie(t.current, r, a[e])));
        });
    }, [o, l, i, n, c]),
    qs(
      a,
      (t) => {
        if (c || l || t === null) return;
        let r = Kl(n);
        return oe(
          (e, { y: t }) => {
            for (let e of UC)
              (o && e !== `opacity`) ||
                (ow.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  s.values[e].set(ie(t.progress, ow, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [u, o, e, l, n, c]
    ),
    Wl(s.values, r),
    Nt(() => {
      if (c) return;
      let e = iw(n, o);
      for (let t of UC) s.values[t].set(e?.[t] ?? GC[t]);
    }),
    j.useMemo(() => ({ values: s.values, style: t ? KC : qC }), [t])
  );
}
function Jl(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function Yl(e) {
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
    let r = ml(n);
    if (r) {
      for (let i of cw)
        if (sw[i]?.has(r)) {
          t[i][r] = Vx(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Vx(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = Jl(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = Jl(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function Xl(e) {
  return z(e) && dw in e;
}
function Zl(e, t) {
  if (!e || !z(e)) return t;
  for (let n in e) {
    let r = e[n];
    !Ce(r) || !Dl(n) || (R(r.get()) && t[n].push(r));
  }
}
function Ql(e) {
  return L(e) || Array.isArray(e);
}
function $l({ componentIdentifier: e, children: t }) {
  return t(c(pw)[e] ?? {});
}
function eu() {
  return j.useContext(mw);
}
function tu(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function nu() {
  if (a === void 0 || _w)
    return v(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw yw;
}
function ru({ children: e }) {
  return c(xw) ? v(k, { children: e }) : v(D, { fallback: bw, children: e });
}
function iu() {
  return v(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function au(e, t) {
  if (!E_ || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  cn(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function ou(...e) {
  console.error(...e);
}
function su() {
  return J.current() !== J.canvas;
}
function cu({ getErrorMessage: e, fallback: t, children: n }) {
  return su()
    ? v(lu, { fallback: t, children: v(Cw, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function lu({ children: e, fallback: t = Sw }) {
  return a === void 0 ? v(D, { fallback: t, children: e }) : v(ru, { children: e });
}
function uu() {
  return j.useContext(Tw);
}
function du() {
  let e = uu();
  return j.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function fu({ children: e, scopeId: t, nodeId: n }) {
  let r = uu(),
    i = j.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return v(Tw.Provider, { value: i, children: e });
}
function pu(e, t) {
  return `${Ew}${e}:${t}`;
}
function mu(e, t) {
  return gu(`component`, e, t);
}
function hu(e, t) {
  return gu(`override`, e, t);
}
function gu(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${pu(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function _u(e, t, n, r, i, a) {
  let o = yu(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function vu(e, t, n, r) {
  return yu(e, t, n, r);
}
function yu(e, t, n, r) {
  return !!($e(n) || (n === 1 && r && e === t));
}
function bu(e, t, n, r, i, a) {
  let o = uu();
  if ($e(t) || $e(n)) return v(ww, { children: e });
  let { disableCustomCode: s } = Hv();
  return s && r
    ? v(`div`, {
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
    : (_u(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = v(cu, { getErrorMessage: mu.bind(null, t, n), fallback: null, children: e })),
      i && (e = v(fu, { scopeId: t, nodeId: n, children: e })),
      e);
}
function xu(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Su(e) {
  return !(!e || e.placement || e.alignment);
}
function Cu(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      V(e);
  }
}
function wu(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Cu(t)}, -100%`;
    case `right`:
      return `0%, ${Cu(t)}`;
    case `bottom`:
      return `${Cu(t)}, 0%`;
    case `left`:
      return `-100%, ${Cu(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Tu(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(Fw)) {
      let e = n.getAttribute(Fw);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function Eu(e) {
  let { registerCursors: t } = c(kw),
    n = Pa(() => e),
    r = ne();
  f(() => t(n, r), [t, r]);
}
function Du(e) {
  return !!(e && typeof e == `object` && Lw in e);
}
function Ou(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function ku() {
  return J.current() === J.canvas;
}
function Au(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function ju(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function Mu(e, t, n, r) {
  if (L(e)) {
    let i = Au(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    let { routeId: s } = Di(t.routes, o, void 0, r);
    return t.getRoute(s);
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function Nu(e) {
  return L(e) && e.startsWith(`data:${Ww}`);
}
function Pu(e) {
  if (Nu(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(Ww.length),
        r = t.searchParams,
        i = r.has(Bw) ? r.get(Bw) : void 0,
        a,
        o = r.get(Vw),
        s = r.get(Hw),
        c = r.get(Uw);
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
function Fu(e, t, n) {
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
    let n = Pu(e);
    if (!n || !n.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function Iu(e) {
  if (!Nu(e)) return e;
  let t = Pu(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: Lu(i) };
}
function Lu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function Ru({ children: e }) {
  return v(Gw.Provider, { value: void 0, children: e });
}
function zu(e, t, n, r, i, a) {
  let o = c(Gw),
    s = du(),
    d = l(() => ({ scopeId: t, nodeId: n, furthestExternalComponent: s }), [t, n, s]),
    f = kt(),
    m = jt(),
    { locales: h } = Jr(),
    g = l(() => {
      let e = Du(r) ? r : Iu(r);
      if (e) return Mu(e, f, m, h);
    }, [m, r, f, h]),
    _ = !!(!ku() && o?.nodeId && d.nodeId),
    y = u(
      (e) => {
        if (i.href) {
          if ((e.preventDefault(), e.stopPropagation(), Ln(e))) {
            Hu(i.href, ``, `_blank`);
            return;
          }
          g ? i.navigate?.() : Hu(i.href, i.rel, i.target);
        }
      },
      [i, g]
    ),
    b = u(
      (e) => {
        i.href && (e.preventDefault(), e.stopPropagation(), Hu(i.href, ``, `_blank`));
      },
      [i]
    ),
    x = u(
      (e) => {
        i.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          g ? i.navigate?.() : Hu(i.href, i.rel, i.target));
      },
      [i, g]
    );
  qs(
    a,
    (e) => {
      e !== null && _ && (e.dataset.hydrated = `true`);
    },
    [_]
  );
  let S = e;
  return (
    _ &&
      (p.forEach(e, (e) => {
        Vu(e) &&
          (B(
            Bu(o),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          B(
            Bu(d),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          zw.collectNestedLink(o, d));
      }),
      (S = p.map(e, (e) => {
        if (!Vu(e)) return e;
        let t = Uu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: y,
            onAuxClick: b,
            onKeyDown: x,
            as: r.as && Uu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return A(t, { ...i, ref: a }, n);
      }))),
    v(Gw.Provider, { value: d, children: S })
  );
}
function Bu(e) {
  return !$e(e?.nodeId);
}
function Vu(e) {
  return b(e) && (Uu(e.type) !== e.type || Uu(e.props.as) !== e.props.as);
}
function Hu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function Uu(e) {
  return e === `a` ? `span` : qe(e) && me(e) === `a` ? M.span : e;
}
function Wu(e) {
  e &&
    ke.read(() => {
      let t = document.getElementById(e);
      if (!t) return;
      let n = getComputedStyle(t),
        r = n.getPropertyValue(`--selection-color`).trim(),
        i = n.getPropertyValue(`--selection-background-color`).trim();
      ke.render(() => {
        let t = document.querySelectorAll(`[data-framer-portal-id="${e}"]`);
        t.length !== 0 &&
          (r && t.forEach((e) => e.style.setProperty(Kw, r)),
          i && t.forEach((e) => e.style.setProperty(qw, i)));
      });
    });
}
function Gu(e) {
  return [
    `[data-framer-portal-id="${e}"] * ::selection {
    color: var(${Kw});
    background-color: var(${qw});
}`,
  ];
}
function Ku({ triggerId: e, children: t }) {
  return (
    j.useLayoutEffect(() => {
      e && Wu(e);
    }, [e]),
    t
  );
}
function qu({ component: e, props: t }) {
  let n = c(kC),
    r = A(e, t);
  if ((`variant` in t && t.variant != null) || !n) return r;
  let { activeVariantId: i, humanReadableVariantMap: a } = n;
  if (!i || !a) return r;
  let o = {};
  for (let [e, t] of Object.entries(a)) o[t] = { variant: e };
  return v(PC, { overrides: o, breakpoint: i, children: r });
}
function Ju(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : Ju(e.parentElement, t)
      : null;
}
function Yu({ children: e }) {
  return v(ru, { children: e });
}
function Xu(e) {
  return x(function (t, n) {
    return v(Yu, { children: v(e, { ...t, ref: n }) });
  });
}
function Zu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return $u(e, t, o, s, a, c, l, i, r);
}
function Qu(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && Au(t))
    try {
      let [i, a] = t.split(`#`, 2);
      B(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      B(o !== void 0, `A href must have a defined pathname.`);
      let { routeId: s, pathVariables: c, localeId: l } = Di(e.routes, o, void 0, r),
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
function $u(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = si(d, {
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
function ed() {
  let e = c($w),
    t = jt()?.pathVariables;
  return e || t;
}
function td(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(Qw)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function nd() {
  let e = m.connection || m.mozConnection || m.webkitConnection || {},
    t = m.deviceMemory && m.deviceMemory > nT,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? rT : iT));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(l, { threshold: tT }),
    s = 0;
  async function c(e, t) {
    if (r) return;
    let { id: n, preload: i } = e,
      a = sT.get(n);
    if (!a?.size || oT.has(n)) return;
    (++s, oT.add(n));
    let c = i()?.catch(() => {});
    (o.unobserve(t), aT.delete(t));
    for (let e of a) (o.unobserve(e), aT.delete(e));
    (a.clear(), sT.delete(n), await c, --s);
  }
  function l(e) {
    for (let t of e) {
      let e = t.target,
        n = aT.get(e);
      if (!n || oT.has(n.id)) {
        (o.unobserve(e), aT.delete(e));
        continue;
      }
      let r = n.id,
        a = sT.get(r),
        l = sT.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (s >= i) continue;
        (a ? a.add(e) : sT.set(r, new Set([e])), setTimeout(c, eT, n, e));
      } else (a && a.delete(e), l <= 1 && sT.delete(r));
    }
  }
  return (e, t, n) => {
    if (!oT.has(n))
      return (
        aT.set(e, { id: n, preload: t }),
        o.observe(e),
        () => {
          (aT.delete(e), o.unobserve(e));
        }
      );
  };
}
function rd(e, t) {
  let n = Au(e),
    r = {
      href: e === `` || ju(e, n) ? e : `https://${e}`,
      target: id(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Yn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function id(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function ad(e, t) {
  console.warn(
    ct(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function od(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return ad(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return at(i) ? i.catch(ad) : i;
  } catch (e) {
    ad(e);
  }
}
async function sd(e, t, n, r) {
  async function i(e) {
    if (!e) return {};
    let t = {};
    for (let i in e) {
      let a = e[i];
      B(a, `unresolvedSlug should be defined`);
      let o = od(a, r, n),
        s = at(o) ? await o : o;
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
function cd(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = od(o, r, n);
      at(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function ld() {
  let e = yn();
  return u((t, n, r, i = []) => cd(t, n, r, e, i), [e]);
}
function ud({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = yn();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = Du(r) ? r : Iu(r);
      if (!Du(c))
        return cn(
          `published_site_click`,
          {
            ...s,
            href: o ? dd(o) : null,
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
        if (L(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (at(n) ? await n : n) ?? null;
        }
      }
      return cn(
        `published_site_click`,
        {
          ...s,
          href: o ? dd(o) : null,
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
function dd(e) {
  try {
    let t = new URL(e, G.document.baseURI);
    return t.origin === G.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function fd(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function pd(e, t, n) {
  return async (r) => {
    let i = Ln(r),
      a = Ju(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await zv({
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
function md(e, t, n, r, i, a, o, s) {
  if (!n) return rd(e, r);
  let c = Qu(t, e, s, o);
  if (!c) return rd(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return rd(e, r);
  let m = si(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !D_,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = id(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = { pathVariables: f, locale: p },
    v = (e) => fd(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
  return {
    href: m,
    target: h,
    onClick: pd(m, r.trackLinkClick, v),
    navigate: v,
    "data-framer-page-link-current":
      (n && td(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () => i(l, _, !0, !g),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
  };
}
function hd(e, t, n) {
  let r = gd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Ye(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Ye(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function gd(e, t) {
  let n = z(e) ? e : void 0,
    r = n && !Qe(n),
    i = t && !Qe(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function _d(e, t, n) {
  if (!(t && wn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: vd } : { ...i, onTap: r }) : e;
}
function vd(e) {
  let t = Ju(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function yd(e, t, n, r, i, a) {
  let o = Du(e) ? e : Iu(e);
  if (!Du(o)) return L(e) ? rd(e).href : void 0;
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
  if (at(h)) return;
  let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
    _ = Object.assign({}, t.currentPathVariables, n, d, h?.hash);
  return si(m, {
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
    localeSlug: i?.slug,
  });
}
function bd() {
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
async function xd() {
  return new Promise((e, t) => {
    let n = URL.createObjectURL(new Blob([`(`, bd(), `)()`], { type: `application/javascript` })),
      r = new Worker(n);
    ((r.onmessage = (t) => {
      (r.terminate(),
        URL.revokeObjectURL(n),
        t.data.success ? e({ secret: t.data.secret, hash: t.data.hash }) : e(void 0));
    }),
      (r.onerror = (e) => {
        (r.terminate(), URL.revokeObjectURL(n), t(e));
      }),
      r.postMessage({ salt: uT, difficulty: dT, tokenLength: fT, maxTime: pT }));
  });
}
function Sd(e) {
  let t = new Set();
  for (let n of e.elements)
    !Cd(n) || n.disabled || !n.name || n.name.startsWith(mT) || t.add(n.name);
  return Array.from(t);
}
function Cd(e) {
  return (
    e instanceof HTMLSelectElement ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLInputElement &&
      ![`file`, `submit`, `reset`, `button`, `image`].includes(e.type))
  );
}
function wd(e, t) {
  let n = Array.from(t.keys()).filter((t) => !e.includes(t));
  return [...e, ...n].map(encodeURIComponent).join(`,`);
}
function Td(e, t) {
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
function Ed() {
  let e = j.useContext(DT),
    t = j.useMemo(
      () =>
        gT.map((e) => ({
          inputRef: j.createRef(),
          originalName: e,
          methodsUsed: { setAttribute: !1, valueProperty: !1 },
        })),
      []
    );
  return {
    states: t,
    convertHoneypotFieldsForSubmission: j.useCallback(() => {
      t.forEach((e) => {
        let t = e.inputRef.current;
        t && (t.name = `${mT}_${e.originalName}`);
      });
    }, [t]),
    replaceHoneypotWithMetadata: j.useCallback(
      (n) => {
        let r = t.length,
          i = 0,
          a = [];
        (t.forEach((e) => {
          let t = e.inputRef.current;
          if (t) {
            let r = t.name,
              o = t.value;
            if (o) {
              i++;
              let t = {
                [vT.name]: e.originalName,
                [vT.value]: o,
                [vT.setAttribute]: e.methodsUsed.setAttribute,
                [vT.valueProperty]: e.methodsUsed.valueProperty,
                [vT.isInputEventTrusted]: e.methodsUsed.isInputEventTrusted,
                [vT.inputChangeTimeSinceModuleLoad]: e.methodsUsed.inputChangeTimeSinceModuleLoad,
                [vT.wasFilledBeforeHydration]: e.methodsUsed.wasFilledBeforeHydration,
              };
              a.push(JSON.stringify(t));
            }
            (n.delete(r), (t.name = e.originalName));
          }
        }),
          n.append(`${mT}_${yT.fieldData}`, `[${a.join(`,`)}]`),
          n.append(`${mT}_${yT.fieldCount}`, r.toString()),
          n.append(`${mT}_${yT.fieldFilledCount}`, i.toString()),
          n.append(`${mT}_${yT.hpVersion}`, hT),
          n.append(`${mT}_${yT.siteId}`, e || ``),
          n.append(`${mT}_${yT.timeToSubmissionSinceModuleLoad}`, bT()));
      },
      [t, e]
    ),
  };
}
function Dd({ states: e }) {
  return v(k, { children: e.map((e) => v(xT, { inputStateRef: e }, `hp_${e.originalName}`)) });
}
function Od({ router: e, nodeId: t, submitTrackingId: n }) {
  e?.pageviewEventData?.current &&
    (e.pageviewEventData.current instanceof Promise
      ? e.pageviewEventData.current.then((e) => {
          kd(e, t, n);
        })
      : kd(e.pageviewEventData.current, t, n));
}
function kd(e, t, n) {
  return cn(
    `published_site_form_submit`,
    { ...e, nodeId: t ?? null, trackingId: n || null },
    `eager`
  );
}
function Ad({ state: e }, { type: t }) {
  switch (t) {
    case `complete`:
      return e === `error` ? ET : TT;
    case `incomplete`:
      return e === `error` ? ET : wT;
    case `submit`:
      return ST;
    case `success`:
      return CT;
    case `error`:
      return ET;
    default:
      V(t);
  }
}
function jd({ state: e }) {
  return e === `incomplete` || e === `complete`;
}
function Md(e) {
  e.preventDefault();
}
function Nd(e, t) {
  let n = ju(e, !1) ? e : `https://${e}`,
    r = document.createElement(`a`);
  ((r.href = n),
    (r.target = `_self`),
    (r.style.display = `none`),
    `current` in t && t.current && (t.current.appendChild(r), r.click(), r.remove()));
}
function Pd(e) {
  if (e.children.length === 0) return !1;
  for (let t of e.children)
    if (
      t instanceof HTMLInputElement ||
      t instanceof HTMLTextAreaElement ||
      t instanceof HTMLSelectElement
    ) {
      if (t.required && t.value === ``) return !0;
    } else if (Pd(t)) return !0;
  return !1;
}
async function Fd(e, t, n, r) {
  let i = await xd();
  if (!i) throw Error(`Failed to calculate proof of work`);
  let a = { "Framer-Site-Id": r, "Framer-POW": i.secret, "Framer-Form-Fields": wd(n, t) },
    o = await fetch(e, { body: t, method: `POST`, headers: a });
  if (o.ok) return o;
  {
    let e = await o.json(),
      t = `Failed to submit form`;
    throw Id(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
  }
}
function Id(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `error` in e &&
    z(e.error) &&
    `message` in e.error &&
    typeof e.error.message == `string`
  );
}
function Ld({ EditorBar: e, fast: t = !1 }) {
  let n = c(DT),
    r = _(A_, t ? jT : MT, M_),
    i = Hv(),
    a = l(() => {
      let e = {},
        t;
      for (t in i)
        i.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = i[t]);
      return e;
    }, [i]);
  return !e || !n || !r
    ? null
    : v(AT, { children: v(D, { children: v(e, { framerSiteId: n, features: a }) }) });
}
function Rd({ currentRoutePath: e, routerAPI: n, children: r }) {
  let a = t(),
    o = t(),
    c = t(n),
    l = t(null);
  ((c.current = n),
    i(() => {
      e && ((a.current ??= new Set()), a.current.add(e), o.current?.(e));
    }, [e]));
  let [u] = s(() => ({
    getInitialState: () => ({
      visitedPages: a.current ?? new Set(),
      getCurrentRoutePath: () =>
        c.current ? Bd(c.current, c.current.currentRouteId, c.current.currentPathVariables) : ``,
      resolveRoute: (e) => (c.current ? Bd(c.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        o.current = e;
      },
      sendTrackingEvent: async (e) => {
        c.current && zd(c.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: l,
  }));
  return v(NT.Provider, { value: u, children: r });
}
async function zd(e, t) {
  if (!ln(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    cn(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function Bd(e, t, n) {
  let r = e.getRoute(t);
  return !r || !r.path ? `` : n ? Jn(r.path, n) : r.path;
}
function Vd({ children: e, loadSnippetsModule: t }) {
  return v(WT.Provider, { value: t, children: e });
}
function Hd() {
  return j.useContext(WT);
}
function Ud(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Wd(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (B(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (B(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      V(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Gd(a.createContextualFragment(e), r, i));
}
async function Gd(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Kd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Gd(r, e, null)));
  }
}
function Kd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return qd(r, t, n);
}
function qd(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Jd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = BT), (n = VT));
      break;
    case `bodyEnd`:
      ((t = HT), (n = UT));
      break;
    case `headStart`:
      ((t = IT), (n = LT));
      break;
    case `headEnd`:
      ((t = RT), (n = zT));
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
function Yd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Ud(e),
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
async function Xd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Jd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Yd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Zd(t, o), s)) {
      await Wd(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Ud(e.id),
      u = `${c}
${e.code}
${l}`,
      d = $d(e.id, n, r, i);
    d ? await Wd(u, d, `afterend`) : await Wd(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Zd(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Qd(n) && n.remove(), (n = e));
  }
}
function Qd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function $d(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Yd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function ef() {
  let e = Hd();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(PT),
        o = a && a.dataset[FT] !== void 0;
      if (i && o) return;
      let { getSnippets: s, snippetsSorting: c } = await e.readMaybeAsync(),
        l = await s(t, n, r);
      for (let e in l) {
        let t = e,
          n = l[t],
          r = c[t];
        await Xd(t, n, r);
      }
    },
    [e]
  );
}
function tf(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function nf() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((GT = e.timeZone), (KT = e.locale));
}
function rf({ routeId: e, url: t, pathVariables: n, localeId: r }) {
  Pr({ routeId: e, pathVariables: n, localeId: r, paginationInfo: wr()?.paginationInfo }, t);
}
function af(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let { historyPath: i, hash: a, pathVariables: o, localeId: s, currentRoutePath: c } = n,
    l = c !== void 0 && c === r,
    u = wr();
  Pr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      localeId: s,
      queryParamBackAnchorSearch: l ? u?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function of(e, t, n, r) {
  let i = wr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Pr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
      },
      si(t, n)
    ));
}
function sf() {
  return jn() >= 17 ? XT : YT;
}
function cf(e = mf) {
  let t = (e) => {
    e.persisted && _f();
  };
  On() && (a.addEventListener(`pageshow`, t), (JT = Date.now() - sf()));
  let n = lf(),
    r = hf(e);
  return function () {
    (a.removeEventListener(`pageshow`, t), n(), r());
  };
}
function lf() {
  let e = a.history.scrollRestoration;
  return (
    (a.history.scrollRestoration = `manual`),
    function () {
      a.history.scrollRestoration = e;
    }
  );
}
function uf(e) {
  return z(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function df() {
  return { x: a.scrollX, y: a.scrollY };
}
function ff() {
  let e = wr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (uf(t)) return t;
}
function pf(e) {
  let t = wr();
  t && (jr({ ...t, scrollPosition: e }, void 0, !0), On() && (JT = Date.now()));
}
function mf(e, t = !1) {
  let n = ff();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (On() && !t) {
      let e = sf();
      if (Date.now() - JT < e) return;
    }
    pf(e);
  }
}
function hf(e) {
  let t = () => {
      e(df());
    },
    n = () => {
      e(df(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), a.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), a.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in a)) {
    let e = gf(t);
    return function () {
      (i(), e());
    };
  }
  return (
    a.addEventListener(`scrollend`, t),
    function () {
      (i(), a.removeEventListener(`scrollend`, t));
    }
  );
}
function gf(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Tr(wr()) !== t) && e());
    },
    o = () => {
      let e = Tr(wr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let o = On() ? sf() : 100;
      t = a.setTimeout(i, o);
    };
  return (
    a.addEventListener(`scroll`, o),
    function () {
      (a.removeEventListener(`scroll`, o), r());
    }
  );
}
function _f() {
  let e = ff();
  return e ? (a.scrollTo(e.x, e.y), !0) : !1;
}
function vf(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function yf(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (vf(n, t), !0);
}
function bf(e, t, n) {
  n !== `preserve-scroll-position` &&
    ke.render(
      () => {
        (n === `restore-scroll-position` && _f()) || yf(e, t) || a.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function xf(e, t) {
  ke.read(() => {
    a.scrollY !== 0 ||
      a.scrollX !== 0 ||
      ke.render(
        () => {
          _f() || yf(e, t);
        },
        !1,
        !0
      );
  });
}
function Sf(e) {
  let n = Hv().scrollRestoration,
    r = t(void 0),
    i = t(!1),
    a = !!(n && !e),
    o = u(
      (e) => {
        ((r.current = e), a && (i.current = !0));
      },
      [a]
    ),
    s = u((e, t = !1) => {
      i.current || mf(e, t);
    }, []),
    c = u(() => {
      a && (i.current = !0);
    }, [a]),
    l = u(() => r.current !== void 0 || i.current, []),
    d = u((e, t) => {
      let n = r.current;
      !n ||
        n.routeId !== e ||
        n.remountKey !== t ||
        ((r.current = void 0), (i.current = !1), bf(n.hash, n.shouldSmoothScroll, n.behavior));
    }, []);
  return (
    f(() => {
      if (a) return cf(s);
    }, [a, s]),
    {
      usesCustomScrollRestoration: a,
      isNavigationCommitPending: l,
      onHistoryTraversal: c,
      scheduleScroll: o,
      commitNavigationScroll: d,
    }
  );
}
function Cf({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: o } = n;
  return (
    f(() => {
      r(e, t);
    }),
    i(() => {
      o && xf(a.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function wf() {
  let [e, t] = j.useState(0);
  return [e, j.useCallback(() => t((e) => e + 1), [])];
}
function Tf(e) {
  if (!e) return T_;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Ef(e) {
  let n = Vr(e),
    r = t(void 0),
    i = u(() => {
      (r.current?.abort(), (r.current = void 0));
    }, []);
  return {
    startNavigation: u(
      async (e, t, o, s = !0) => {
        i();
        let c = s ? new AbortController() : void 0;
        r.current = c;
        let l = c?.signal,
          u = It(l);
        if ((t.promise.finally(u), o === void 0)) return (e(l), t.promise);
        let d,
          f = new Promise((e, t) => {
            ((d = e), l?.addEventListener(`abort`, t));
          }).catch(T_);
        if ((n(f, c, o), e(l), await t.promise, l?.aborted)) return;
        let p = a.navigation?.transition;
        d();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        l?.aborted || iy();
      },
      [i, n]
    ),
    cancelPendingNavigation: i,
  };
}
function Df({
  defaultPageStyle: e,
  disableHistory: n,
  initialPathVariables: r,
  initialRoute: s,
  notFoundPage: c,
  collectionUtils: d,
  routes: p,
  initialLocaleId: m,
  initialCollectionItemId: g,
  locales: _ = U_,
  preserveQueryParams: y = !1,
  LayoutTemplate: b,
  EditorBar: x,
  siteCanonicalURL: S,
  adaptLayoutToTextDirection: C,
}) {
  (yi(), Fr({ disabled: n, routeId: s, initialPathVariables: r, initialLocaleId: m }));
  let w = yr(),
    [T, D] = wf(),
    O = Sr(`framer-route-change`),
    k = l(() => (!Hv().synchronousNavigationOnDesktop || !In() ? h : (e) => e()), []),
    A = ef(),
    ee = t(!0),
    te = t(),
    j = t(s),
    ne = t(r),
    re = t(m),
    ie = Sf(n),
    { isNavigationCommitPending: ae, usesCustomScrollRestoration: M } = ie,
    { startNavigation: oe, cancelPendingNavigation: se } = Ef(M),
    ce = ie.scheduleScroll,
    le = re.current,
    ue = l(() => _.find(({ id: e }) => (le ? e === le : e === W_)) ?? null, [le, _]),
    de = ue?.textDirection ?? `ltr`,
    fe = C ? de : `ltr`;
  f(() => {
    C && document.documentElement.setAttribute(`dir`, de);
  }, [de, C]);
  let pe = Rr(),
    me = l(
      () => ({
        activeLocale: ue,
        locales: _,
        setLocale: async (e) => {
          let t = O({ localized: !0 });
          await zv({ priority: `user-blocking`, continueAfter: `paint` });
          let r;
          L(e) ? (r = e) : z(e) && (r = e.id);
          let i = _.find(({ id: e }) => e === W_),
            a = _.find(({ id: e }) => e === r);
          if (!a) return;
          let o = j.current,
            s = p[o];
          if (s)
            try {
              let e = await pe({
                currentLocale: ue,
                nextLocale: a,
                route: s,
                routeId: o,
                defaultLocale: i,
                pathVariables: ne.current,
                preserveQueryParams: y,
              });
              if (!e) return;
              let r = e.path;
              ((ee.current = !1),
                (ne.current = e.pathVariables),
                (re.current = a.id),
                (te.current = r));
              let c = s.path && e.pathVariables ? Jn(s.path, e.pathVariables) : s.path;
              (ce({
                routeId: o,
                remountKey: `${a.id}${c}`,
                hash: void 0,
                shouldSmoothScroll: !1,
                behavior: `preserve-scroll-position`,
              }),
                oe(
                  () => {
                    w(o, o, () => k(D));
                  },
                  t,
                  n
                    ? void 0
                    : r
                      ? () => {
                          rf({
                            routeId: o,
                            url: r,
                            pathVariables: e.pathVariables,
                            localeId: a.id,
                          });
                        }
                      : void 0,
                  !1
                ));
            } catch {}
        },
      }),
      [ue, n, D, _, y, p, ce, oe, w, O, k, pe]
    ),
    he = u(
      (e, t, n, r, i, a, o, s, c) => {
        ee.current = !1;
        let l = j.current,
          u = p[e],
          d = Ft(u, n),
          f = u?.path && i ? Jn(u.path, i) : u?.path;
        if (
          ((j.current = e),
          (ne.current = i),
          (re.current = t),
          (te.current = r),
          ce({
            routeId: e,
            remountKey: `${t}${f}`,
            hash: d,
            shouldSmoothScroll: s ?? !1,
            behavior: a
              ? M
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          a)
        ) {
          (se(), k(D));
          return;
        }
        oe(
          (t) => {
            w(l, e, () => k(D), t);
          },
          o,
          c,
          !0
        );
      },
      [D, p, M, ce, oe, w, k, se]
    );
  (Ir(ie, j, he),
    i(() => {
      if (n) return;
      let e = () => {
        let e = wr(),
          t = a.location.hash === `` ? void 0 : a.location.hash.slice(1);
        (e && Ft(p[e.routeId], e.hash) === t) ||
          Mr({
            ...(e ||
              (Dr() ?? { routeId: j.current, pathVariables: ne.current, localeId: re.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (a.addEventListener(`hashchange`, e), () => a.removeEventListener(`hashchange`, e));
    }, [n, p]));
  let ge = u(
      async (e, t, r, i, a) => {
        let o = p[e],
          s = ft(o?.page) ? o.page.getStatus() : void 0,
          c = s?.hasRendered,
          l = O({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
          u = Tf(a);
        if (
          (zv({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(u),
          await zv({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Wv)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let d = Ft(o, t),
          f = ne.current,
          m = re.current;
        if (tf({ routeId: j.current, pathVariables: f }, { routeId: e, pathVariables: r })) {
          let a = ae();
          if (a) {
            let t = o?.path && r ? Jn(o.path, r) : o?.path;
            ce({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: d,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else se();
          (l.ignore?.(), !a && M && bf(d, i, `scroll-to-hash-or-top`));
          let s = p[e];
          (!n &&
            s &&
            of(
              e,
              s,
              {
                currentRoutePath: s.path,
                currentRoutePathLocalized: s.pathLocalized,
                currentPathVariables: f,
                pathVariables: r,
                hash: t,
                localeId: m,
                preserveQueryParams: y,
                siteCanonicalURL: S,
              },
              u
            ),
            !a && !M && bf(d, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let h = p[j.current],
          g =
            ai(S) +
            si(o, {
              currentRoutePath: h?.path,
              currentRoutePathLocalized: h?.pathLocalized,
              currentPathVariables: f,
              hash: t,
              pathVariables: r,
              localeId: m,
              localeSlug: _.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: y,
              relative: !1,
              siteCanonicalURL: S,
            });
        he(
          e,
          m,
          t,
          g,
          r,
          !1,
          l,
          i,
          n
            ? void 0
            : () => {
                (u(),
                  af(e, o, {
                    historyPath: g,
                    currentRoutePath: h?.path,
                    hash: t,
                    pathVariables: r,
                    localeId: m,
                  }));
              }
        );
      },
      [se, p, _, he, n, y, S, O, M, ae, ce]
    ),
    _e = Dt(p),
    ve = j.current,
    N = te.current,
    ye = ne.current,
    P = p[ve],
    be = P?.path,
    F = qT(P, ve, N, ye, ue, g),
    xe = ee.current;
  i(() => {
    A(ve, ye ?? {}, me.activeLocale, xe);
  }, [A, ve, ye, me, xe]);
  let I = l(
    () => ({
      navigate: ge,
      getRoute: _e,
      currentRouteId: ve,
      currentPathVariables: ye,
      routes: p,
      collectionUtils: d,
      preserveQueryParams: y,
      pageviewEventData: F,
      siteCanonicalURL: S,
      isInitialNavigation: xe,
    }),
    [ge, _e, ve, ye, p, d, y, S, F, xe]
  );
  if (!P) throw Error(`Router cannot find route for ${ve}`);
  let Se = !ue || !P.includedLocales || P.includedLocales.includes(ue.id),
    Ce = be && ye ? Jn(be, ye) : be,
    we = `${le}${Ce}`,
    Te = Pa(() => ({ ...e, display: `contents` }));
  return v(Ot, {
    api: I,
    children: v(py.Provider, {
      value: me,
      children: v(my.Provider, {
        value: fe,
        children: v(Nw, {
          children: v(ei, {
            routerRenderKey: T,
            isNavigationCommitPending: ie.isNavigationCommitPending,
            children: E(Rd, {
              currentRoutePath: Ce,
              routerAPI: I,
              children: [
                x && v(Ld, { EditorBar: x, fast: !0 }),
                v(vw, {
                  children: E(ru, {
                    children: [
                      v($y.Start, {}),
                      v(Cf, { currentRouteId: ve, remountKey: we, scrollRestoration: ie }),
                      v(tb, {
                        notFoundPage: c,
                        defaultPageStyle: e,
                        routerRenderKey: T,
                        children: v(Of, {
                          LayoutTemplate: b,
                          webPageId: P?.abTestingVariantId ?? ve,
                          style: e,
                          children: (t) =>
                            v(o, { children: Se ? wi(P.page, t ? Te : e) : c && wi(c, e) }, we),
                        }),
                      }),
                      x && v(Ld, { EditorBar: x }),
                      v(hi, {}),
                      v($y.End, {}),
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
function Of({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? v(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function kf(e) {
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
function Af(e) {
  return typeof e == `object` && !!e;
}
function jf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!Af(r)) return;
    r = r[e];
  }
  return r;
}
function Mf(e) {
  return `${e.credentials}:${e.url}`;
}
function Nf(e) {
  return L(e) && !Number.isNaN(Number(e));
}
function Pf(e, t) {
  switch (e) {
    case `string`:
      return L(t) || R(t);
    case `color`:
      return L(t);
    case `boolean`:
      return Xe(t);
    case `number`:
      return R(t) || Nf(t);
    case `link`:
    case `image`:
      return L(t) && ju(t, !1);
    default:
      return !1;
  }
}
function Ff(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = jf(e.data, t.resultKeyPath);
  if ($e(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!Pf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function If(e, t) {
  if (J.current() === J.canvas) return !1;
  let n = Math.max(t * 1e3, QT);
  return Date.now() >= e + n;
}
function Lf(e) {
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
    preserveQueryParams: h,
    EditorBar: g,
    defaultPageStyle: _,
    disableHistory: y,
    LayoutTemplate: b,
    siteCanonicalURL: x,
    adaptLayoutToTextDirection: S,
    loadSnippetsModule: C,
    initialCollectionItemId: w,
  } = e;
  return (
    j.useEffect(() => {
      n || Db.start();
    }, []),
    n
      ? v(Wr, {
          value: r ?? `preview`,
          children: v(Ae, {
            reducedMotion: d ? `always` : u ? `user` : `never`,
            skipAnimations: d,
            children: v(vn, {
              collectionUtils: c,
              children: v(rE, {
                children: v(DT.Provider, {
                  value: a,
                  children: v(Vd, {
                    loadSnippetsModule: C,
                    children: v(Df, {
                      initialRoute: i,
                      initialPathVariables: o,
                      initialLocaleId: p,
                      initialCollectionItemId: w,
                      routes: s,
                      collectionUtils: c,
                      notFoundPage: l,
                      locales: m,
                      defaultPageStyle: _ ?? { minHeight: `100vh`, width: `auto` },
                      preserveQueryParams: h,
                      EditorBar: g,
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
      : v(f ? EC : j.Fragment, {
          children: v(At, {
            routes: s,
            children: v($S, { children: j.isValidElement(t) ? t : j.createElement(t, { key: i }) }),
          }),
        })
  );
}
function Rf(e, t) {
  let n = kt(),
    { activeLocale: r } = Jr(),
    i = ld();
  return Kr(() => {
    let t = [],
      a = (e) => {
        if (e)
          return L(e) || Du(e)
            ? yd(e, n, void 0, void 0, r, o)
            : yd(e.href, n, e.implicitPathVariables, e.refKey, r, o);
      };
    function o(e, n) {
      return i(e, n, r, t);
    }
    let s = e(a);
    if (t.length > 0) throw Promise.allSettled(t);
    return s;
  }, [n, r, i, ...t]);
}
function zf(e) {
  return {
    trace(...t) {
      return Jx.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return Jx.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return Jx.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return Jx.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return Jx.getLogger(e)?.error(...t);
    },
    get enabled() {
      return Jx.getLogger(e) !== void 0;
    },
  };
}
function Bf() {
  return (
    Symbol.dispose ||
      Object.defineProperty(Symbol, "dispose", {
        value: Symbol.for(`Symbol.dispose`),
        writable: !1,
        enumerable: !1,
        configurable: !1,
      }),
    Symbol.dispose
  );
}
function Vf() {
  return aE.priority;
}
function Hf(e) {
  let t = aE;
  return (
    (aE = e),
    {
      [Bf()]() {
        aE = t;
      },
    }
  );
}
function Uf(e = aE.priority, t = aE.canYield) {
  if (!(!t || e === void 0)) return zv({ batch: !0, priority: zn(e) });
}
function Wf(e) {
  var t = [];
  try {
    He(t, Hf({ priority: aE.priority, canYield: !1 }));
    let n = e.next();
    return (B(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    ze(t, n, r);
  }
}
async function Gf(e, t, n = aE.priority, r = aE.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (He(o, Hf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      ze(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = Uf(n, r);
      (o && (await o), He(l, Hf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      ze(l, u, d);
    }
  }
  return a.value;
}
function Kf(e, t = aE.priority, n = aE.canYield) {
  var r = [];
  try {
    He(r, Hf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : Gf(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    ze(r, i, a);
  }
}
function* qf(e, t = aE.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (rt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Gf(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* Jf(e, t = aE.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = Uf(t);
    r && (yield r);
    let o = e[a];
    if (rt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            Gf(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function Yf(e) {
  return Qf(e) || tp(e);
}
function Xf(e) {
  return Ze(e) && e.every(z);
}
function Zf(e) {
  return z(e) && Ye(e.read) && Ye(e.preload);
}
function Qf(e) {
  return Xf(e) || Zf(e);
}
function $f(e) {
  return z(e) && z(e.schema);
}
function ep(e) {
  return z(e) && z(e.collectionByLocaleId);
}
function tp(e) {
  return $f(e) || ep(e);
}
function np(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = jp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function rp(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => oE.cast(e, t.definition)) };
  }
  return null;
}
function ip(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function ap(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function op(e) {
  return ap(e)?.value ?? !1;
}
function sp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function cp(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function lp(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function up(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return nt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function dp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function fp(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function pp(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function mp(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function hp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function gp(e) {
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
function _p(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function vp(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function yp(e) {
  return vp(e)?.value ?? null;
}
function bp(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = jp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function xp(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = oE.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Sp(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Cp(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function wp(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Tp(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Ep(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Dp(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function Op(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function kp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function Ap(e) {
  return kp(e)?.value ?? null;
}
function jp(e, t, n) {
  if (et(e) || et(t)) return (B(e === t), 0);
  switch (e.type) {
    case `array`:
      return (B(e.type === t.type), np(e, t, n));
    case `boolean`:
      return (B(e.type === t.type), ip(e, t));
    case `color`:
      return (B(e.type === t.type), sp(e, t));
    case `date`:
      return (B(e.type === t.type), lp(e, t));
    case `enum`:
      return (B(e.type === t.type), dp(e, t));
    case `file`:
      return (B(e.type === t.type), pp(e, t));
    case `link`:
      return (B(e.type === t.type), hp(e, t));
    case `number`:
      return (B(e.type === t.type), _p(e, t));
    case `object`:
      return (B(e.type === t.type), bp(e, t, n));
    case `responsiveimage`:
      return (B(e.type === t.type), Sp(e, t));
    case `richtext`:
      return (B(e.type === t.type), wp(e, t));
    case `vectorsetitem`:
      return (B(e.type === t.type), Ep(e, t));
    case `string`:
      return (B(e.type === t.type), Op(e, t, n));
    default:
      V(e);
  }
}
async function Mp(e, t) {
  return Zf(e) ? (await e.preload(t), e.read(t)) : e;
}
function Np(e) {
  return e.includes(dE);
}
function Pp(e) {
  if (!tp(e) || !e.id) return;
  let t = lE.get(e.id);
  if (!t) return (lE.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function Fp(e) {
  let t = Pp(e);
  if (t) return t;
  let n = uE.get(e);
  if (n) return n;
  let r = `${dE}${Math.random().toString(16).slice(2)}`;
  return (uE.set(e, r), r);
}
function Ip(e, t) {
  if (Qf(e)) {
    let n = Fp(e) + (t?.id ?? W_),
      r = fE.get(n);
    if (r) return r;
    let i = new cE(e, t);
    return (fE.set(n, i), i);
  }
  if ($f(e)) return e;
  if (ep(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  V(e, `Unsupported collection type`);
}
function Lp(e) {
  return e;
}
function Rp(e) {
  return Ye(e.getHash);
}
function W(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (z(r) && Rp(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return Lp(`${n})`);
}
function zp(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function Bp(e) {
  if (e !== void 0) return zn(e);
}
function Vp(e, t) {
  return { collectionId: Fp(e), pointer: t };
}
function Hp(e) {
  return z(e) && L(e.collectionId);
}
function Up(e, t) {
  return { collectionId: Fp(e), pointer: t };
}
function Wp(e) {
  return z(e) && L(e.collectionId);
}
function Gp(e, t) {
  let n = new Map();
  function r(e) {
    if (z(e))
      if (e.type === `Collection` && Yf(e.data)) {
        let r = Ip(e.data, t),
          i = Fp(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Ze(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function Kp(e) {
  return e;
}
function qp(e) {
  return e;
}
function Jp(e) {
  return e;
}
function Yp() {
  return 25;
}
function Xp() {
  return 12500;
}
function Zp(e) {
  return Array(e).fill({ type: `All` });
}
function Qp(e) {
  return e;
}
function $p(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new yD(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function em(e) {
  let t = new Set();
  if (!e) return t;
  $p(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      ($p(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function tm(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) tm(n, t);
      return;
    case `object`:
      for (let n in e.value) tm(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function nm(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function rm(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function im(e) {
  return `${e.functionName}(${e.arguments.map((e) => lm(e)).join(`, `)})`;
}
function am(e) {
  let t = `CASE`;
  e.value && (t += ` ${lm(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${lm(n.when)} THEN ${lm(n.then)}`;
  return (e.else && (t += ` ELSE ${lm(e.else)}`), (t += ` END`), t);
}
function om(e) {
  let t = lm(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function sm(e) {
  let t = lm(e.left),
    n = lm(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function cm(e) {
  return `CAST(${lm(e.value)} as ${e.dataType})`;
}
function lm(e) {
  switch (e.type) {
    case `Identifier`:
      return nm(e);
    case `LiteralValue`:
      return rm(e);
    case `FunctionCall`:
      return im(e);
    case `Case`:
      return am(e);
    case `UnaryOperation`:
      return om(e);
    case `BinaryOperation`:
      return sm(e);
    case `TypeCast`:
      return cm(e);
    case `Select`:
      return `${mm(e)}`;
    default:
      V(e);
  }
}
function um(e) {
  return $f(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function dm(e) {
  let t = `${fm(e.left)} LEFT JOIN ${fm(e.right)}`;
  return (e.constraint && (t += ` ON ${lm(e.constraint)}`), t);
}
function fm(e) {
  switch (e.type) {
    case `Collection`:
      return um(e);
    case `LeftJoin`:
      return dm(e);
    default:
      V(e);
  }
}
function pm(e) {
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
function mm(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = lm(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${fm(e.from)}`),
    e.where && (t += ` WHERE ${lm(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${lm(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${lm(e.limit)}`),
    e.offset && (t += ` OFFSET ${lm(e.offset)}`),
    pm(t)
  );
}
function hm(e) {
  return z(e) && e.type === `Collection`;
}
function gm(e, t) {
  return hm(t) && Yf(t.data) ? Fp(t.data) : t;
}
function _m(e, t) {
  let n = t?.id ?? `default`;
  return JSON.stringify(e, gm) + n;
}
function vm(e) {
  let { activeLocale: t } = Jr();
  return ID.get(e, t).use();
}
function ym(e) {
  return vm({ ...e, select: [] }).length;
}
function bm(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !($e(e) || z(e)))
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
function xm(e) {
  let n = t(e);
  return (
    r(() => {
      n.current = e;
    }, [e]),
    qr((...e) => {
      let t = n.current;
      return t(...e);
    }, [])
  );
}
function Sm(e, t) {
  (e.forEach((e) => clearTimeout(e)),
    e.clear(),
    t.forEach((e) => e?.(`Callback cancelled by variant change`)),
    t.clear());
}
function Cm() {
  return new Set();
}
function wm(e) {
  let n = Pa(Cm),
    r = Pa(Cm);
  return (
    nc(() => () => Sm(r, n)),
    i(() => () => Sm(r, n), []),
    i(() => {
      Sm(r, n);
    }, [e]),
    t({
      activeVariantCallback:
        (e) =>
        async (...t) =>
          new Promise((r, i) => {
            (n.add(i), e(...t).then(r));
          }).catch(() => {}),
      delay: async (e, t) => {
        (await new Promise((e) => {
          r.add(globalThis.setTimeout(() => e(!0), t));
        }),
          e());
      },
    }).current
  );
}
function Tm(e, t, n) {
  return j.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Em(e) {
  for (let [t, n] of Object.entries(e)) if (G.matchMedia(n).matches) return t;
}
function Dm(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && G.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Om(e, n, r = !0) {
  let a = c(XS),
    o = Io(),
    s = Aa(),
    l = An() && (!o || s),
    d = t(l ? (Em(n) ?? e) : e),
    f = t(r && a ? e : d.current),
    p = us(),
    m = de(),
    g = u(
      (e) => {
        if (e !== d.current || e !== f.current) {
          let t = function () {
            ((d.current = f.current = e),
              h(() => {
                p();
              }));
          };
          o
            ? t()
            : m(() => {
                t();
              });
        }
      },
      [m, p, o]
    );
  return (
    uy(() => {
      if (o) {
        if (s) {
          g(Em(n) ?? e);
          return;
        }
        g(e);
      }
    }, [e, s, o, n, g]),
    uy(() => {
      !r || a !== !0 || g(d.current);
    }, []),
    i(() => {
      if (!l || s) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = G.matchMedia(r),
          i = (e) => {
            e.matches && g(t);
          };
        (km(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Am(e, t));
    }, [s, n, g, l]),
    [d.current, f.current]
  );
}
function km(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Am(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function jm(e) {
  setTimeout(e, 1);
}
function Mm(e) {
  let t = new Set(),
    n = Dm(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Nm(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (O_ ? G.requestIdleCallback : jm)(() => {
    document.querySelector(LD)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Nm(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Pm(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Nm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Pm(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Fm(e, t) {
  if (e[t]) return e[t];
  if (!(t in e)) return e.default;
}
function Im(e, t) {
  if (Fo()) return;
  let n = j.useRef(!0),
    r = j.useRef(t);
  (nc((t, i) => {
    let a = t && !i;
    if (!n.current && a) {
      let t = Fm(r.current, e);
      t && t();
    }
    n.current = a;
  }, []),
    j.useEffect(() => {
      if (n.current) {
        let t = Fm(r.current, e);
        t && t();
      }
    }, [e]));
}
function Lm(e, t) {
  e !== !1 &&
    ke.render(() => {
      let e = document.documentElement.style;
      t ? e.setProperty(`overflow`, `hidden`) : e.removeProperty(`overflow`);
    });
}
function Rm({ blockDocumentScrolling: e = !0, dismissWithEsc: t = !1 } = {}) {
  let [n, r] = j.useState(!1),
    i = j.useCallback(
      async (t) => {
        (await zv({ priority: `user-blocking`, continueAfter: `paint` }), h(() => r(t)), Lm(e, t));
      },
      [e]
    );
  return (
    j.useEffect(
      () => () => {
        zv({ priority: `user-blocking`, continueAfter: `paint` }).then(() => {
          Lm(e, !1);
        });
      },
      [e]
    ),
    j.useEffect(() => {
      if (!t) return;
      let e = (e) => {
        e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), i(!1));
      };
      return (G.addEventListener(`keydown`, e), () => G.removeEventListener(`keydown`, e));
    }, [t, i]),
    [n, i]
  );
}
function zm(e) {
  return z(e) && RD in e && e.page !== void 0;
}
function Bm(e, n, r, i = !1) {
  let [a, o] = ee(),
    c = Math.ceil(e / n),
    [d, f] = s(globalThis?.history?.state?.paginationInfo?.[r]?.currentPage ?? 1),
    p = t(d),
    m = l(() => ({ currentPage: d, totalPages: c, isLoading: a }), [d, c, a]);
  uy(() => {
    Br(r, m);
  }, [r, m]);
  let g = ku();
  return {
    paginationInfo: m,
    loadMore: u(
      async () =>
        g ||
        p.current >= c ||
        (await zv({ priority: `user-blocking`, continueAfter: `paint` }), p.current >= c)
          ? void 0
          : ((e) => {
              let t = Math.min(p.current + 1, c);
              ((p.current = t),
                e(() => {
                  f(t);
                }));
            })(i ? o : h),
      [c, i]
    ),
  };
}
function Vm(e, t, n) {
  let { paginationInfo: r, loadMore: i } = Bm(ym(e), t, n, !0);
  return {
    paginatedQuery: l(() => {
      let n = t * r.currentPage;
      if (e.limit) {
        if (e.limit.type !== `LiteralValue` || typeof e.limit.value != `number`)
          throw Error(`Unexpected type for query limit`);
        n = Math.min(n, e.limit.value);
      }
      return { ...e, limit: { type: `LiteralValue`, value: n } };
    }, [e, t, r]),
    paginationInfo: r,
    loadMore: i,
  };
}
function Hm(e, t) {
  return `${e}-${t}`;
}
function Um(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Wm(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function Gm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function Km(e, t) {
  return t[e] || `framer-v-${e}`;
}
function qm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function Jm() {
  let e = t(),
    n = t(),
    r = u(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (n.current = void 0));
    }, []);
  return (
    i(
      () => () => {
        r();
      },
      [r]
    ),
    u(
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
function Ym() {
  let e = t(),
    n = t(!1),
    r = t(),
    a = c(NS);
  return (
    i(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    u(
      (t, i) => {
        if (!i?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Js(a, `undefined`, i.current, null, (e) => {
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
function Xm(e) {
  let t = Jm(),
    n = Ym();
  return u(
    (r, i = !1) => {
      if (D_) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function Zm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (VD = () => {
        (e(), (t = void 0));
      }));
  });
}
function Qm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (BD = Zm()));
}
function $m() {
  (performance.mark(`click-received-listener`), (BD = void 0), VD?.(), (VD = void 0));
}
function eh(e = !1) {
  i(() => {
    e &&
      (document.addEventListener(`pointerup`, Qm, !0),
      document.__proto__.addEventListener.call(document, `click`, $m, !0));
  }, [e]);
}
function th({
  variant: e,
  defaultVariant: n,
  transitions: r,
  enabledGestures: i,
  cycleOrder: a = [],
  variantProps: o = {},
  variantClassNames: s = {},
  ref: c,
}) {
  let d = us(),
    f = ku(),
    p = Pa(() => new Set(a));
  eh(Hv().yieldOnTap);
  let m = Xm(c),
    g = t({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: qm(e, n, p),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: n,
      enabledGestures: i,
      cycleOrder: a,
      transitions: r,
    }),
    _ = u((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = g.current,
        o = qm(e, a, p),
        s = Gm(i?.[o], t, n, !1, r);
      return [o, s ? Hm(o, s) : void 0];
    }, []),
    v = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = _(r);
        if (o === e && s === t) return;
        (a && (g.current.isError = !1),
          (g.current.baseVariant = o || n),
          (g.current.gestureVariant = s));
        let c = Hv().yieldOnTap && g.current.isPressedHasUpdated;
        (c &&
          BD &&
          (performance.mark(`wait-for-tap-start`),
          await BD,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          c &&
            (performance.mark(`yield-on-tap-start`),
            await zv({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: l,
          isPressed: u,
          isHoveredHasUpdated: f,
          isPressedHasUpdated: p,
        } = g.current;
        if (l || f || u || p) {
          h(d);
          return;
        }
        m(() => h(d), i);
      },
      [_, d, m]
    ),
    y = u(
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
    b = u(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = g.current,
          o = e === zD ? Um(r || [], i || n) : e;
        v(i, a, n, o, t, !0);
      },
      [v]
    ),
    x = u(() => {
      let { baseVariant: e } = g.current;
      ((g.current.loadedBaseVariant[e] = !0), m(() => h(d), !0));
    }, [d, m]);
  if (e !== g.current.lastVariant) {
    let [t, n] = _(e);
    ((g.current.lastVariant = t),
      (t !== g.current.baseVariant || n !== g.current.gestureVariant) &&
        ((g.current.baseVariant = t), (g.current.gestureVariant = n)));
  }
  let {
      baseVariant: S,
      gestureVariant: C,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: O,
      loadedBaseVariant: k,
    } = g.current,
    A = Tm(g.current.baseVariant, g.current.gestureVariant, o);
  return l(() => {
    let e = [];
    S !== w && e.push(S);
    let t = T?.[S]?.loading,
      n = !O && !f && !!t && !k[S],
      r = n ? Hm(S, `loading`) : C;
    r && e.push(r);
    let i = T?.[S],
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
        baseVariant: S,
        gestureVariant: r,
        isLoading: n,
        transition: Wm(g.current.transitions, S),
        setVariant: b,
        setGestureState: y,
        clearLoadingGesture: x,
        addVariantProps: A,
        gestureHandlers: a,
        classNames: fl(Km(S, s), Gm(i, E, D, n, O)),
      }
    );
  }, [S, C, E, D, k, A, b, w, T, y, x, s]);
}
function nh(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!su()) return r(e);
  let a = rh(e, r),
    o = !1;
  function s(r, s) {
    let c = uu(),
      { disableCustomCode: l } = Hv();
    if (l) return v(e, { ...r, ref: s });
    if (vu(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? v(cy.Provider, {
            value: n,
            children: v(cu, {
              getErrorMessage: hu.bind(null, t, n),
              fallback: v(e, { ...r, ref: s }),
              children: v(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (ou(a.error), ou(hu(t, n)), au(a.error), !0)), v(e, { ...r, ref: s }));
    if (a.status === `success`)
      return v(cy.Provider, { value: n, children: v(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return j.forwardRef(s);
}
function rh(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function ih(e) {
  return e.weight !== void 0 && e.style !== void 0;
}
function ah(e, t) {
  let n = t === `normal` ? `Regular` : `Italic`;
  return e === 400 ? n : t === `normal` ? `${XD[e]}` : `${XD[e]} ${n}`;
}
function oh() {
  return a === void 0 ? (QD ?? {}) : QD || ((QD = sh()), QD);
}
function sh() {
  let e = a.location,
    t = a?.bootstrap?.services;
  if (t) return t;
  let n;
  try {
    if (((n = a.top.location.origin), (t = a.top?.bootstrap?.services), t)) return t;
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
function ch(e) {
  return e.key + e.extension;
}
function lh(e) {
  return `${oh().userContent}/assets/${e}`;
}
function uh(e) {
  return lh(ch(e));
}
function dh(e, t) {
  return t ? `${e} ${$D}` : e;
}
function fh(e, t) {
  switch (t) {
    case `custom`:
      throw Error(`Custom fonts are not supported`);
    default:
      return dh(e.name, e.isVariable);
  }
}
function ph(e) {
  return !!(e && Array.isArray(e));
}
function mh(e) {
  if (!e || !Array.isArray(e)) return;
  let t = [];
  for (let n of e)
    gh(n) &&
      t.push({
        tag: n.tag,
        name: n.name,
        minValue: n.minValue,
        maxValue: n.maxValue,
        defaultValue: n.defaultValue,
      });
  return t;
}
function hh(e) {
  return !(
    typeof e != `object` ||
    !e ||
    !(`tag` in e) ||
    typeof e.tag != `string` ||
    (`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
  );
}
function gh(e) {
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
function _h(e) {
  return nO[yh(e)];
}
function vh(e, t) {
  let n = e?.find((e) => e.tag === `wght`)?.defaultValue;
  return n !== void 0 && n >= 1 && n <= 1e3 ? n : (t ?? _h(`variable`) ?? 500);
}
function yh(e) {
  return e.toLowerCase().replace(/\s+/gu, `-`);
}
function bh(e) {
  return (
    (e = e.toLowerCase()),
    e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`) ? `italic` : `normal`
  );
}
function xh(e, t) {
  return { ...Sh(e, t), ...Ch(e, t) };
}
function Sh(e, t) {
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
function Ch(e, t) {
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
function wh(e) {
  return !!e.variationAxes;
}
function Th(e) {
  return Eh(e) || Dh(e);
}
function Eh(e) {
  return e.startsWith(aO);
}
function Dh(e) {
  return e.startsWith(iO);
}
function Oh(e, t) {
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
function kh(e) {
  let { font: t } = e,
    n = t.fontFamily,
    r = Array.isArray(t.variationAxes);
  if (r && n.toLowerCase().includes(`variable`)) return n;
  let i = r ? $D : t.fontSubFamily.trim();
  return i === `` ? n : `${n} ${i}`;
}
function Ah({ fontFamily: e, fontSubFamily: t, variationAxes: n, faceDescriptors: r }) {
  let i = t.trim() || `Regular`,
    a = i.toLocaleLowerCase().includes(`variable`),
    o = mh(n) && !a ? `Variable ${i}` : i,
    s = `normal`,
    c = 400;
  return (
    r && ((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
    { family: e, variant: o, weight: c, style: s }
  );
}
function jh(e) {
  if (!(!e.weight || !e.style))
    return { weight: e.weight, style: e.style, isVariable: wh(e), selector: e.selector };
}
function Mh(e) {
  let t = e.fonts.map((e) => jh(e)).filter((e) => e !== void 0);
  for (let n of e.fonts) {
    let e = jh(n);
    if (!e) continue;
    let r = xh(e, t);
    ((n.selectorVariable = r.variantVariable?.selector),
      (n.selectorVariableItalic = r.variantVariableItalic?.selector),
      (n.selectorBold = r.variantBold?.selector),
      (n.selectorBoldItalic = r.variantBoldItalic?.selector),
      (n.selectorItalic = r.variantItalic?.selector));
  }
}
function Nh(e) {
  return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
function Ph(e, t, n) {
  let r = e.get(t);
  r || ((r = new Map()), e.set(t, r));
  let i = r.get(n);
  return (i || ((i = { fonts: [] }), r.set(n, i)), i);
}
function Fh(e, t) {
  return Array.from(e.entries())
    .sort(([e], [t]) => e.localeCompare(t))
    .map(([e, n]) => ({
      family: e,
      variants: Array.from(n.entries())
        .sort(([e], [t]) => e.localeCompare(t))
        .map(([, e]) => ({
          fonts: e.fonts.map((e) => ({
            ...e,
            selected:
              e.font.assetKey && e.font.owner ? t.has(`${e.font.assetKey}:${e.font.owner}`) : !1,
          })),
        })),
    }));
}
async function Ih(e) {
  switch (e) {
    case `google`:
      return (await import("./google-YSYBFRE6.BZ57zP5h.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-TIA7QUPT.CjCmvCKY.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
async function Lh(e) {
  switch (e) {
    case `google`:
      return (await import("./google-H6SFY4F5.5HW9yzMR.mjs")).default;
    case `fontshare`:
      return (await import("./fontshare-PZLWRK4B.CuFl42Lb.mjs")).default;
    case `framer`:
      return (await import("./framer-font-RD2SUPQH.BV4yRwNx.mjs")).default;
    default:
      throw Error(`Unknown font source: ${e}`);
  }
}
function Rh(e) {
  return e
    .split(`,`)
    .map((e) => e.trim().toLowerCase())
    .filter(zh);
}
function zh(e) {
  return sO.includes(e);
}
function Bh(e) {
  let t = {
      serif: `serif`,
      sans: `sans-serif`,
      slab: `slab`,
      display: `display`,
      handwritten: `handwriting`,
      script: `handwriting`,
    },
    n = Rh(e)[0];
  return n && t[n];
}
function Vh(e) {
  let t = {
    serif: `serif`,
    "sans-serif": `sans-serif`,
    display: `display`,
    handwriting: `handwriting`,
    monospace: `monospace`,
  };
  if (e) return t[e];
}
function Hh(e, t) {
  return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
function Uh(e, t, n, r) {
  return `${e}-${t}-${n}-${r}`;
}
function Wh(e, t, n) {
  return `${e}-${t}-${n}`;
}
async function Gh(e, t, n = 0) {
  let { family: r, url: i, stretch: a, unicodeRange: o } = e,
    s = e.weight,
    c = e.style || `normal`,
    l = Uh(r, c, s, i);
  if (!CO.has(l) || n > 0) {
    let u = new FontFace(r, `url(${i})`, {
        weight: L(s) ? s : s?.toString(),
        style: c,
        stretch: a,
        unicodeRange: o,
      }),
      d = u
        .load()
        .then(() => (t.fonts.add(u), TO.set(l, { fontFace: u, doc: t }), Kh(r, c, s)))
        .catch((l) => {
          if (l.name !== `NetworkError`) throw l;
          if (n < xO) return Gh(e, t, n + 1);
          throw new SO(
            `Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`
          );
        });
    CO.set(l, d);
  }
  await CO.get(l);
}
async function Kh(e, t, n) {
  let r = Wh(e, t, n);
  if (!wO.has(r)) {
    let i = new yO.default(e, { style: t, weight: n }).load(null, bO);
    wO.set(r, i);
  }
  try {
    await wO.get(r);
  } catch {
    throw new SO(
      `Failed to check if font is ready (${bO}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`
    );
  }
}
function qh(e) {
  let t = e.style || `normal`,
    { family: n, url: r, weight: i } = e,
    a = Uh(n, t, i, r),
    o = TO.get(a);
  (o && (o.doc.fonts.delete(o.fontFace), TO.delete(a)), CO.delete(a), wO.delete(Wh(n, t, i)));
}
function Jh(e) {
  try {
    if (e === `framer`) return Yh(DO) ? DO : void 0;
    {
      let t = (async () => {
        switch (e) {
          case `google`:
            return (await import("./google-EGNT223R.4Zga1324.mjs")).default;
          case `fontshare`:
            return (await import("./fontshare-SXU5BGFE.DwUZJPwH.mjs")).default;
          default:
            V(e);
        }
      })();
      return Yh(t) ? t : void 0;
    }
  } catch (e) {
    console.error(e);
    return;
  }
}
function Yh(e) {
  return z(e) && Object.values(e).every(Zh);
}
function Xh(e) {
  return z(e) && L(e.tag);
}
function Zh(e) {
  return Array.isArray(e) && e.every(Xh);
}
function Qh(e, t, n, r = AO) {
  let [i, a] = j.useState(e),
    [o, s] = j.useState(e);
  return (
    t && e !== o && (s(e), a(e)),
    [
      i,
      a,
      j.useCallback(
        (e) => {
          fi(e) ||
            (t && a(r(e)),
            n &&
              j.startTransition(() => {
                n(e);
              }));
        },
        [r, n, t]
      ),
    ]
  );
}
function $h(e, t) {
  return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function eg() {
  return v(`svg`, {
    xmlns: `http://www.w3.org/2000/svg`,
    width: `8`,
    height: `8`,
    viewBox: `0 0 8 8`,
    "aria-hidden": `true`,
    children: v(`path`, {
      d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.5`,
      strokeLinecap: `round`,
    }),
  });
}
function tg(e, t) {
  i(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (a.addEventListener(`keyup`, n), () => a.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function ng(e, t, n, r) {
  let i = a.innerHeight - r,
    o = Math.min(a.innerWidth - n, t),
    s = i / e;
  return Math.min(o, s);
}
function rg(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new a.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function ig() {
  return document.getElementById(Xw) ?? document.getElementById(Yw) ?? document.body;
}
function ag(e, t) {
  return R(e) ? e : (t ?? 0);
}
function og(e) {
  return ag(e?.paddingTop, e?.padding) + ag(e?.paddingBottom, e?.padding);
}
function sg(e) {
  return ag(e?.paddingLeft, e?.padding) + ag(e?.paddingRight, e?.padding);
}
function cg(e, t) {
  if (!e || !t || !t.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - sg(e)}px)`,
      srcSet: Ho(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function lg(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in HO)) continue;
    let n = HO[t],
      r = e[t];
    if (!(!R(n) || !R(r)) && n !== r) return !0;
  }
  return !1;
}
function ug(e) {
  let t = le.get(e.current);
  if (!t) return !1;
  if (lg(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (lg(e.latestValues)) return !0;
  return !1;
}
function dg(e) {
  return x(function ({ lightbox: n, lightboxClassName: r, onClick: a, ...d }, f) {
    let p = c(Se),
      m = c(HD),
      g = !!m,
      _ = t(null),
      y = f ?? _,
      b = t(),
      x = l(() => cg(n, d.background), [n, d.background]),
      [S, w] = s(!1),
      [T, D] = s(),
      O = u(() => {
        if (n) {
          if (S) {
            h(() => {
              w(!0);
            });
            return;
          }
          ke.read(() => {
            if (!y.current) return;
            let e = getComputedStyle(y.current),
              t =
                y.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(y.current, `::after`)
                  : void 0,
              r = y.current.offsetWidth ?? 1,
              i = y.current.offsetHeight ?? 1,
              a = ug(y) || g ? { duration: 0 } : n.transition;
            h(() => {
              (D({
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
                w(!0),
                m?.stop());
            });
          });
        }
      }, [n, S, y, m?.stop, g]),
      A = T?.aspectRatio ?? 1,
      ee = xm(() => {
        if (!n || !x || !x.src) return;
        let e = b.current?.[x.src];
        if (e) return e;
        let t = ng(A, n.maxWidth, sg(n), og(n)),
          r = rg(x, { width: t, height: t * A });
        return ((b.current = { [x.src]: r }), r);
      }),
      te = u(
        async (e) => {
          (a?.(e), !(S || !n || !x) && (await ee(), O()));
        },
        [a, O, S, x, n, ee]
      ),
      j = u((e) => {
        (e?.stopPropagation(),
          h(() => {
            w(!1);
          }));
      }, []);
    (tg(S, j),
      i(() => {
        if (!n) return;
        let e;
        function t() {
          e = setTimeout(() => {
            ee();
          }, 50);
        }
        function r() {
          clearTimeout(e);
        }
        let i = y.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, r),
          i?.addEventListener(`pointerdown`, ee),
          () => {
            (r(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, r),
              i?.removeEventListener(`pointerdown`, ee));
          }
        );
      }, [ee, y, n]));
    let re = ne(),
      ie = T?.transition ?? d.transition ?? p.transition,
      ae = T?.borderRadius,
      oe = T?.imageRendering,
      se = T?.filter,
      ce = T?.borderTop,
      le = T?.borderRight,
      ue = T?.borderBottom,
      de = T?.borderLeft,
      fe = T?.borderStyle,
      pe = T?.borderColor,
      me = !!(ce || le || ue || de || fe || pe),
      he = me
        ? {
            "--border-top-width": ce,
            "--border-right-width": le,
            "--border-bottom-width": ue,
            "--border-left-width": de,
            "--border-style": fe,
            "--border-color": pe,
          }
        : void 0,
      ge = { [Fw]: d.id },
      _e = ag(n?.paddingTop, n?.padding),
      ve = ag(n?.paddingBottom, n?.padding),
      N = ag(n?.paddingLeft, n?.padding),
      ye = ag(n?.paddingRight, n?.padding),
      P = T?.borderRadius ? { ...d.style, borderRadius: T.borderRadius } : d.style,
      be = S ? (d.layoutDependency ? `${d.layoutDependency}-open` : `open`) : d.layoutDependency,
      F = g && S ? void 0 : (d.layoutId ?? (n ? re : void 0));
    return E(k, {
      children: [
        v(e, {
          ...d,
          style: P,
          onClick: te,
          layoutId: F,
          ref: y,
          layoutDependency: be,
          transition: ie,
        }),
        v(Fe, {
          onExitComplete: () => {
            h(() => {
              (D(void 0), m?.start());
            });
          },
          children:
            S &&
            n &&
            x &&
            v(
              o,
              {
                children: C(
                  E(k, {
                    children: [
                      v(M.div, {
                        ...ge,
                        className: r,
                        onClick: j,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: n.zIndex,
                          backgroundColor: n.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: UO,
                        animate: WO,
                        exit: UO,
                      }),
                      v(M.div, {
                        ...ge,
                        className: r,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${_e}px ${ye}px ${ve}px ${N}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: n.zIndex,
                        },
                        children: v(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: A,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: n.maxWidth,
                          },
                          children: v(M.div, {
                            layoutId: F,
                            transition: ie,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": me,
                            style: {
                              aspectRatio: A,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: se,
                              ...he,
                            },
                            children: v(Zo, { image: x, alt: x.alt, draggable: d.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  ig()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function fg(e, t) {
  return qO && !t
    ? Document.parseHTMLUnsafe(e)
    : ((KO ??= new DOMParser()), KO.parseFromString(e, t ?? `text/html`));
}
function pg(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function mg(e, t, n, r) {
  return e.replace(JO, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = Pu(u.replace(/&amp;/gu, `&`));
    if (!d || !d.target) return e;
    let f = t(d.target);
    if (!zm(f) || !zm(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Ft(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = Iu(u);
    if (!_ || L(_)) return e;
    td(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(Qw, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = ti(m, v)), i + o + `"${pg(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function hg(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function gg(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function _g(e, n, r) {
  let i = t([]);
  hg(i.current, e) ||
    ((i.current = e),
    kO.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !n || !r.current || J.current() !== J.canvas || (e > 0 && gs(r.current));
    }));
}
function vg() {
  return { current: null };
}
async function yg(e, t) {
  let n = e.current;
  if (n) return n;
  let r,
    i = new Promise((e, n) => {
      ((r = e), t.signal.addEventListener(`abort`, () => n()));
    });
  return (
    Object.defineProperty(e, "current", {
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
function bg(e) {
  return e in QO;
}
function xg(e, t) {
  let n = {};
  for (let r in e) {
    if (!bg(r)) continue;
    let i = e[r],
      a = QO[r];
    $e(i) || $e(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Sg(e, t = `character`, n, r, i) {
  if (r) {
    let t = vg();
    return (n.add(t), v(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return E(
          o,
          {
            children: [
              v(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match($O)?.map((e, t) => {
                  let r = vg();
                  return (n.add(r), v(`span`, { ref: r, style: i, children: e }, e + t));
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
          s = vg();
        return (
          n.add(s),
          E(
            o,
            { children: [v(`span`, { ref: s, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Cg(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      V(t);
  }
}
function wg(e) {
  let t = [];
  return (
    R(e.x) && t.push(`translateX(${e.x}px)`),
    R(e.y) && t.push(`translateY(${e.y}px)`),
    R(e.scale) && t.push(`scale(${e.scale})`),
    R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Tg(e, t, n, r) {
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
                transform: r ? void 0 : wg(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : wg(n.effect),
              };
      }
    default:
      V(i);
  }
}
function Eg(e, n, r) {
  let a = Pa(() => new Set()),
    o = Fo(),
    s = r || !o,
    c = ae(),
    u = t({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  u.current.effect = e;
  let d = e?.trigger ?? `onMount`,
    f = e?.target,
    p = e?.threshold;
  i(() => {
    if (!s || r) return;
    u.current.hasMounted = !0;
    function e() {
      let { effect: e } = u.current;
      if (
        !s ||
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
            Og(
              i,
              e.effect,
              a,
              t,
              n,
              r,
              c,
              () => {
                Object.assign(u.current, { isAnimating: !1 });
              },
              o
            ),
            () => o.current?.()
          );
        }
        default:
          V(t);
      }
    }
    switch (d) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let t = n?.current;
        return t ? Oe(t, e, { amount: p ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = f?.ref?.current;
        return t
          ? Oe(t, e, {
              amount: p ?? 0,
              root: document,
              margin: f?.offset ? `${f.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        V(d);
    }
  }, [s, a, r, n, f, p, d]);
  let m = !!e,
    h = e ? Cg(e) : void 0;
  return l(
    () => ({
      getTokenizer: () => {
        if ((a.clear(), !m)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: n } = u.current,
          i = Tg(s, r || Dg(e, t, n), u.current.effect, c);
        return {
          text: (e) => Sg(e, h, a, c, i),
          props: (e) => {
            if (n?.tokenization !== `element`) return;
            let t = vg();
            return (a.add(t), { ref: t, style: { ...e, ...i } });
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
            Og(h, e.effect, a, t, n, !1, c);
            break;
          }
          default:
            V(t);
        }
      },
    }),
    [s, m, a, r, h]
  );
}
function Dg(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Og(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = xg(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await kg(n, u);
      if (
        e === null ||
        (De(e, l, { ...r, restDelta: 0.001, delay: Me(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        De(e, n, { ...r, restDelta: 0.001, delay: Me(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await yg(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (ke.read(() => {
          ((e = Ag(n)),
            e.length !== 0 &&
              ke.update(() => {
                let t = e.map((e, t) =>
                  De(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          De(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      V(e);
  }
}
async function kg(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await yg(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Ag(e) {
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
function jg(e) {
  let t = {};
  for (let n in e) (Ke(n) || Ux(n)) && (t[n] = e[n]);
  return t;
}
function Mg(e) {
  return e.type === o;
}
function Ng(e) {
  return e.type === `br`;
}
function Pg(e, t, n, r, i = {}, a, o = Mg(e) ? -1 : 0) {
  let s = p.toArray(e.props.children);
  $e(n) || (s = s.slice(0, 1));
  let c = !0;
  s = s.map((e) => {
    if (((!b(e) || !Ng(e)) && (c = !1), b(e))) return Pg(e, t, n, r, i, a, o + 1);
    let s = $e(n) ? e : n;
    return L(s) && a ? a.text(s) : s;
  });
  let { "data-preset-tag": l, ...u } = e.props;
  if (L(e.type) || qe(e.type)) {
    let n = me(e.type) || e.type,
      d = l || n,
      f = L(d) ? t?.[d] : void 0;
    ((u.className = fl(`framer-text`, u.className, f)),
      a && o === 0 && !c && Object.assign(u, a.props(u.style)));
    let m = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (m && h) {
      let e = Fg(s, i);
      u.id = e;
      let t = fl(`framer-text`, h),
        n = v(`a`, { href: `#${e}`, className: t, children: s });
      ((u.style = { ...(u.style ?? {}), scrollMarginTop: r }), (s = [n]));
    }
    d === `ol` &&
      (u.style = {
        ...(u.style ?? {}),
        [yx]: Lg(u.start ?? 1, p.count(u.children), u.style?.[vx] ?? ``),
      });
  }
  return w(e, u, ...s);
}
function Fg(e, t) {
  let n = Ur(e.map(Ig).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Ig(e) {
  return L(e) || R(e)
    ? e.toString()
    : b(e)
      ? Ig(e.props.children)
      : Array.isArray(e)
        ? e.map(Ig).join(``)
        : ``;
}
function Lg(e, t, n) {
  return vo(Number(e) || 1, t, n);
}
function Rg(e) {
  let t = (e * Math.PI) / 180,
    n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
    r = Ki(n.x, n.y),
    i = Ib(Ki(0.5, 0.5), r),
    a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
    o = a
      .map((e) => ({ point: e, distance: Ki.distance(r, e) }))
      .sort((e, t) => e.distance - t.distance),
    s = o[0]?.point,
    c = o[1]?.point;
  B(s && c, `linearGradientLine: Must have 2 closest points.`);
  let [l, u] = a.filter((e) => !Ki.isEqual(e, s) && !Ki.isEqual(e, c));
  B(l && u, `linearGradientLine: Must have 2 opposing points.`);
  let d = Ib.intersection(i, Ib(s, c)),
    f = Ib.intersection(i, Ib(l, u));
  return (B(d && f, `linearGradientLine: Must have a start and end point.`), Ib(d, f));
}
function zg(e, t) {
  let n = Rg(e.angle),
    r = Ts(e),
    i = r[0]?.position ?? 0,
    a = r[r.length - 1]?.position ?? 1,
    o = Ib.pointAtPercentDistance(n, i),
    s = Ib.pointAtPercentDistance(n, a),
    c = We([i, a], [0, 1]);
  return {
    id: `id${t}g${vS.hash(e)}`,
    x1: o.x,
    y1: o.y,
    x2: s.x,
    y2: s.y,
    stops: r.map((t) => ({
      color: t.value,
      alpha: fS.getAlpha(t.value) * e.alpha,
      position: c(t.position),
    })),
  };
}
function Bg(e, t) {
  return {
    id: `id${t}g${bS.hash(e)}`,
    widthFactor: e.widthFactor,
    heightFactor: e.heightFactor,
    centerAnchorX: e.centerAnchorX,
    centerAnchorY: e.centerAnchorY,
    stops: Ts(e).map((t) => ({
      color: t.value,
      alpha: fS.getAlpha(t.value) * e.alpha,
      position: t.position,
    })),
  };
}
function Vg(e) {
  if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
  let t = e.slice(0, -1);
  return R(parseFloat(t));
}
function Hg(e) {
  let t = e.slice(0, -1),
    n = parseFloat(t);
  return R(n) ? n : 50;
}
function Ug(e) {
  return Vg(e) ? Hg(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Wg(e) {
  return Vg(e) ? Hg(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function Gg(e, t, n, r) {
  if (((e = K.get(e, `#09F`)), !tS.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)) return;
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
        (u = (t.width - c) * Ug(e.positionX) + f),
        (d = (t.height - l) * Wg(e.positionY) + p),
        (o = `translate(${u + n}, ${d + s})`));
    } else
      ((s === `fill` || !s ? _ > g : _ < g)
        ? ((f = _), (d = (1 - _) * Wg(e.positionY)))
        : ((n = g), (u = (1 - g) * Ug(e.positionX))),
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
function Kg(e) {
  return e.startsWith(`data:${sk}`);
}
function qg(e, t) {
  if (/^\w+:/u.test(e) && !Kg(e)) return e;
  t = typeof t == `number` ? (t <= 512 ? 512 : t <= 1024 ? 1024 : t <= 2048 ? 2048 : 4096) : void 0;
  let n = J.current() === J.export;
  return Jx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Jg(e) {
  try {
    let t = fg(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function Yg(e, t) {
  Zg(e, Xg(t));
}
function Xg(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Zg(e, t) {
  (Qg(e, t),
    Array.from(e.children).forEach((e) => {
      Zg(e, t);
    }));
}
function Qg(e, t) {
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
function $g(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (mk[t[2]] || 1));
}
function e_(e) {
  let t = $g(e.getAttribute(`width`)),
    n = $g(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function t_(e) {
  return e.indexOf(`image`) >= 0;
}
function n_(e) {
  return e.indexOf(`var(--`) >= 0;
}
function r_(e) {
  return !!(
    e.borderRadius ||
    e.borderBottomLeftRadius ||
    e.borderBottomRightRadius ||
    e.borderTopLeftRadius ||
    e.borderTopRightRadius
  );
}
function i_(e, t) {
  let n = e.current;
  if (!n) return;
  let r = t.providedWindow ?? G,
    i = n.firstElementChild;
  if (!i || !(i instanceof r.SVGSVGElement)) return;
  if (!i.getAttribute(`viewBox`)) {
    let e = pk.getViewBox(t.svg);
    e && i.setAttribute(`viewBox`, e);
  }
  let { withExternalLayout: a, parentSize: o } = t;
  if (!a && Za(t) && o !== 1 && o !== 2) return;
  let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
  (i.viewBox?.baseVal?.width === 0 &&
    i.viewBox?.baseVal?.height === 0 &&
    H(s) &&
    H(c) &&
    i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
    l && l.aspectRatio
      ? i.setAttribute(`preserveAspectRatio`, ``)
      : i.setAttribute(`preserveAspectRatio`, `none`),
    i.setAttribute(`width`, `100%`),
    i.setAttribute(`height`, `100%`));
}
function a_(e) {
  return e > yk ? `lazy` : void 0;
}
function o_(e, t, n) {
  let r = l_(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function s_(e) {
  return e ? (e.fonts ?? Ti()) : Ti();
}
function c_(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : l_(e);
}
function l_(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    u_(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(d_) })
      : t.fonts.push(d_(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function u_(e) {
  return bk in e;
}
function d_(e) {
  let t = f_(e) || p_(e) ? e : m_(e);
  return p_(t) ? t : h_(t);
}
function f_(e) {
  return `source` in e;
}
function p_(e) {
  return `cssFamilyName` in e;
}
function m_(e) {
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
function h_(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${$D}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function g_(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function __(e) {
  return e.loader;
}
function v_(e, t, n) {
  let r = __(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var y_,
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
  G,
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
  K,
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
  q,
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
  J,
  kb,
  Ab,
  jb,
  Mb,
  Nb,
  Pb,
  Fb,
  Ib,
  Y,
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
  X,
  rx,
  ix,
  ax,
  ox,
  Z,
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
  Q,
  bE,
  xE,
  SE,
  CE,
  wE,
  $,
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
  xk = e(() => {
    (n(),
      I(),
      Ie(),
      te(),
      O(),
      g(),
      (y_ = fe({
        "../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
          (Object.defineProperty(e, "__esModule", { value: !0 }), (e.Hsluv = void 0));
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
              if (
                ((this.lch_l = this.luv_l),
                (this.lch_c = Math.sqrt(this.luv_u * this.luv_u + this.luv_v * this.luv_v)),
                this.lch_c < 1e-8)
              )
                this.lch_h = 0;
              else {
                let e = Math.atan2(this.luv_v, this.luv_u);
                ((this.lch_h = (e * 180) / Math.PI),
                  this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
              }
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
              if (this.hsluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hsluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hsluv_l), this.calculateBoundingLines(this.hsluv_l));
                let e = this.calcMaxChromaHsluv(this.hsluv_h);
                this.lch_c = (e / 100) * this.hsluv_s;
              }
              this.lch_h = this.hsluv_h;
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
              if (this.hpluv_l > 99.9999999) ((this.lch_l = 100), (this.lch_c = 0));
              else if (this.hpluv_l < 1e-8) ((this.lch_l = 0), (this.lch_c = 0));
              else {
                ((this.lch_l = this.hpluv_l), this.calculateBoundingLines(this.hpluv_l));
                let e = this.calcMaxChromaHpluv();
                this.lch_c = (e / 100) * this.hpluv_p;
              }
              this.lch_h = this.hpluv_h;
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
      (b_ = fe({
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
      (x_ = fe({
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
      (S_ = fe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = x_();
        },
      })),
      (C_ = fe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = S_(),
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
      (w_ = fe({
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
            function o(e) {
              var t = e.g.offsetWidth,
                n = t + 100;
              return (
                (e.j.style.width = n + `px`),
                (e.i.scrollLeft = n),
                (e.h.scrollLeft = e.h.scrollWidth + 100),
                e.l === t ? !1 : ((e.l = t), !0)
              );
            }
            function s(t, n) {
              function r() {
                var e = i;
                o(e) && e.g.parentNode !== null && n(e.l);
              }
              var i = t;
              (e(t.h, r), e(t.i, r), o(t));
            }
            function c(e, t, n) {
              ((t ||= {}),
                (n ||= a),
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
                  (m(e) && /Apple/.test(a.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        a.navigator.userAgent
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
              var o = this,
                c = e || `BESbswy`,
                u = 0,
                d = t || 3e3,
                f = new Date().getTime();
              return new Promise(function (e, t) {
                if (m(o.context) && !p(o.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - f >= d
                          ? t(Error(`` + d + `ms timeout exceeded`))
                          : o.context.document.fonts
                              .load(h(o, `"` + o.family + `"`), c)
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
                    (clearTimeout(u), e(o));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (l === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              a.navigator.userAgent
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
                          e(o)));
                    }
                    function p() {
                      if (new Date().getTime() - f >= d)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + d + `ms timeout exceeded`)));
                      else {
                        var e = o.context.document.hidden;
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
                      i(m, h(o, `sans-serif`)),
                      i(g, h(o, `serif`)),
                      i(_, h(o, `monospace`)),
                      w.appendChild(m.g),
                      w.appendChild(g.g),
                      w.appendChild(_.g),
                      o.context.document.body.appendChild(w),
                      (x = m.g.offsetWidth),
                      (S = g.g.offsetWidth),
                      (C = _.g.offsetWidth),
                      p(),
                      s(m, function (e) {
                        ((v = e), n());
                      }),
                      i(m, h(o, `"` + o.family + `",sans-serif`)),
                      s(g, function (e) {
                        ((y = e), n());
                      }),
                      i(g, h(o, `"` + o.family + `",serif`)),
                      s(_, function (e) {
                        ((b = e), n());
                      }),
                      i(_, h(o, `"` + o.family + `",monospace`)));
                  });
              });
            }),
              typeof t == `object`
                ? (t.exports = c)
                : ((a.FontFaceObserver = c),
                  (a.FontFaceObserver.prototype.load = c.prototype.load)));
          })();
        },
      })),
      (T_ = () => {}),
      (E_ = a !== void 0),
      (D_ =
        E_ &&
        (m.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(m.userAgent))),
      (O_ = E_ && typeof a.requestIdleCallback == `function`),
      (k_ = O_ ? a.requestIdleCallback : setTimeout),
      (A_ = () => T_),
      (j_ = () => !0),
      (M_ = () => !1),
      (N_ = new Map()),
      (P_ = new Map()),
      (F_ = new Set()),
      (I_ = `:`),
      (L_ = E_ ? void 0 : new Set()),
      (R_ = `preload`),
      (z_ = Object.keys),
      (B_ = `equals`),
      (V_ = j.createContext({})),
      (H_ = j.createContext({})),
      (U_ = []),
      (W_ = `default`),
      (G_ = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (K_ = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && ut(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = G_.Pending;
        preloadPromise;
        value;
        reason;
        get status() {
          return (this.preload(), this.state);
        }
        get state() {
          return this.promiseState;
        }
        then(e, t) {
          return this.promiseState === G_.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === G_.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== G_.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && L_ !== void 0 && L_.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = G_.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = G_.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && N_.has(this.cacheHash) ? N_.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!at(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === G_.Fulfilled) return this.value;
          throw this.promiseState === G_.Rejected
            ? this.reason
            : Error(`Need to call preload() before read()`);
        };
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
      (q_ = -1),
      (J_ = -2),
      (Y_ = -3),
      (X_ = -4),
      (Z_ = -5),
      (Q_ = -6),
      ($_ = -7),
      (ev = 2 ** 32 - 1),
      (tv = ev - 1),
      (nv = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (rv = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (iv = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (av = typeof Uint8Array.fromBase64 == `function`),
      (ov = typeof process == `object` && process.versions?.node !== void 0),
      (sv = av ? Xt : ov ? Qt : en),
      (cv = av ? Zt : ov ? $t : tn),
      (G = E_
        ? a
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
            open: function (e, t, n) {},
            __framer_events: [],
          }),
      (lv = 2),
      (uv = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (dv = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (pv = class {
        payload = un();
        isEmpty = !0;
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
              return an(this.payload);
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
      (mv = E_ ? void 0 : new pv()),
      (hv = dv.CollectionUtilsCache),
      (gv = new WeakMap()),
      (_v = d(void 0)),
      (vv = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new K_(async () => {
              try {
                let t = await e();
                return (B(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(ct(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = hn(n),
            i = gn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (mv !== void 0) {
              if (at(e)) return e.then((e) => (mv.set(hv, i, e), e));
              mv.set(hv, i, e);
            }
            return e;
          }
          if (pn(hv, i)) {
            let e = mn(hv, i);
            return (this.cacheMap.set(i, new K_(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = at(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
          } catch (e) {
            (console.error(ct(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (mv !== void 0 && mv.set(hv, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new K_(() =>
            s
              .then((e) => (mv !== void 0 && mv.set(hv, i, e), e))
              .catch((e) => {
                console.error(ct(`Failed to call CollectionUtils method.`, e));
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
      (yv = /Mac/u),
      (bv = /iPhone|iPod|iPad/iu),
      (xv = /MacIntel/iu),
      (Sv = /Edg\//u),
      (Cv = /Chrome/u),
      (wv = /Google Inc/u),
      (Tv = /Safari/u),
      (Ev = /Apple Computer/u),
      (Dv = /Firefox\/\d+\.\d+$/u),
      (Ov = /Version\/([\d.]+)/u),
      (kv = /FramerX/u),
      (Av = /tablet|iPad|Nexus 9/iu),
      (jv = /mobi/iu),
      (Mv = 1e3 / 60),
      (Nv = 1e3 / 25),
      (Pv = 500),
      (Fv = { background: 0, "user-visible": 1, "user-blocking": 2 }),
      (Iv = Promise.resolve()),
      (Lv = 100),
      (Rv = (e) => {
        ke.read(e, !1, !0);
      }),
      (zv = Un(Rv)),
      (Bv = !D_),
      (Vv = {}),
      (Hv = () => Vv),
      (Uv = (e) => {
        Vv = e;
      }),
      (Wv = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Gv = `framer_variant`),
      (Kv = !1),
      (qv = j.createContext({ global: void 0, routes: {} })),
      (Jv = 10),
      (Yv = 1e4),
      (Xv = (e) => `--view-transition-${e}`),
      (Zv = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${Xv(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${Xv(`conic-offset`)})`,
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
        @property ${Xv(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (Qv = {
        circle: {
          makeKeyframe: (e, t) => `${Xv(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${Xv(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${cr(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${Xv(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: Zv,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${sr(e.x)} ${sr(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = ar(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${Xv(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${Xv(`blinds-width`)})`,
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
            @property ${Xv(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${Xv(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${Xv(`wipe-offset`)})`,
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
            @property ${Xv(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      ($v = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (ey = `view-transition-styles`),
      (ty = {
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
      (ny = () => {}),
      (iy = () => {
        (ry ||
          ((ry = document.createElement(`div`)),
          ry.setAttribute(`aria-live`, `assertive`),
          ry.setAttribute(`aria-atomic`, `true`),
          (ry.style.position = `absolute`),
          (ry.style.transform = `scale(0)`),
          document.body.append(ry)),
          setTimeout(() => {
            ry.textContent = document.title;
          }, 60));
      }),
      (oy =
        E_ &&
        typeof a.navigation?.back == `function` &&
        !(() => {
          if (m === void 0) return !1;
          let e = m.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !On()),
      (sy = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (cy = j.createContext(null)),
      (ly = (() => {
        let e = d(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (uy = typeof document < `u` ? f : i),
      (dy = async () => {}),
      (fy = { activeLocale: null, locales: [], setLocale: dy }),
      (py = (() => {
        let e = j.createContext(fy);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (my = (() => {
        let e = j.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (hy = new Set()),
      (gy = (() => {
        let e = d({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (_y = 46),
      (vy = 47),
      (yy = (e, t) => e.charCodeAt(t)),
      (by = (e, t) => e.lastIndexOf(t)),
      (xy = (e, t, n) => e.slice(t, n)),
      (Sy = !1),
      (Cy = `/`),
      (wy = (e) => e === vy),
      (Ty = new Set([`/404.html`, `/404`, `/404/`])),
      (Ey = `__f_replay`),
      (Dy = `__f_replay_ignore`),
      (Oy = () => E_),
      (ky =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (Ay = (e) => {
        e.target?.closest?.(`#main`) &&
          (di(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (jy = !1),
      (Jy = [gi]),
      (qy = [gi]),
      (Ky = [gi]),
      (Gy = [gi]),
      (Wy = [gi]),
      (Uy = [gi]),
      (Hy = [gi]),
      (Vy = [gi]),
      (By = [gi]),
      (zy = [gi]),
      (Ry = [gi]),
      (Ly = [gi]),
      (Iy = [gi]),
      (Fy = [gi]),
      (Py = [gi]),
      (Ny = [gi]),
      (My = [gi]),
      (Xy = class {
        constructor() {
          (re(Yy, 5, this),
            _e(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            _e(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            _e(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            _e(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            _e(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            _e(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            _e(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            _i(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            _i(
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
            _i(
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
            _i(
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
            _i(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            _i(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            _i(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          _i(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          _i(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (Yy = xe(null)),
      F(Yy, 1, `markRenderStart`, Jy, Xy),
      F(Yy, 1, `markRenderEnd`, qy, Xy),
      F(Yy, 1, `markUseInsertionEffectsStart`, Ky, Xy),
      F(Yy, 1, `markUseInsertionEffectRouterStart`, Gy, Xy),
      F(Yy, 1, `markUseInsertionEffectsEnd`, Wy, Xy),
      F(Yy, 1, `markUseLayoutEffectsStart`, Uy, Xy),
      F(Yy, 1, `markRouterUseLayoutEffectStart`, Hy, Xy),
      F(Yy, 1, `markUseLayoutEffectsEnd`, Vy, Xy),
      F(Yy, 1, `markUseEffectsStart`, By, Xy),
      F(Yy, 1, `markUseEffectsRouterStart`, zy, Xy),
      F(Yy, 1, `markUseEffectsAreSynchronous`, Ry, Xy),
      F(Yy, 1, `markUseEffectsEnd`, Ly, Xy),
      F(Yy, 1, `markRafStart`, Iy, Xy),
      F(Yy, 1, `markRafEnd`, Fy, Xy),
      F(Yy, 1, `markLayoutStylePaintEnd`, Py, Xy),
      F(Yy, 1, `measureMutationEffects`, Ny, Xy),
      F(Yy, 1, `measureUnattributedHydrationOverhead`, My, Xy),
      be(Yy, Xy),
      (Qy = !1),
      ($y = { Start: Si, End: Ci }),
      (eb = class extends Error {}),
      (tb = class extends y {
        constructor(e) {
          (super(e), (this.state = { error: void 0, routerRenderKey: e.routerRenderKey }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          if (e.routerRenderKey !== t.routerRenderKey) {
            let n = { routerRenderKey: e.routerRenderKey };
            return (t.error && (n.error = void 0), n);
          }
          return null;
        }
        render() {
          if (this.state.error === void 0) return this.props.children;
          if (!(this.state.error instanceof eb)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return wi(e, t);
        }
      }),
      (nb = Object.freeze([])),
      (ib = new Set()),
      (ab = class {
        observers = new Set();
        transactions = {};
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
      (K = (() => {
        function e(e) {
          return (
            Bi(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Vi(e) ? e : new cb(e)
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
          (e.get = (e, t) => (e == null ? t : Vi(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Vi(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (ob = `onUpdate`),
      (sb = `finishTransaction`),
      (cb = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new ab();
        static interpolationFor(e, t) {
          if (Vi(e)) return Hi(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Vi(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Wi(e.x, t.x), y: Wi(e.y, t.y) })),
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
      })((Ki ||= {})),
      (lb = {
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
      (ub = new (y_().Hsluv)()),
      (db = {
        rgb: RegExp(
          `rgb[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        rgba: RegExp(
          `rgba[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsl: RegExp(
          `hsl[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsla: RegExp(
          `hsla[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsv: RegExp(
          `hsv[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hsva: RegExp(
          `hsva[\\s|\\(]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`
        ),
        hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
        hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
        hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
        hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
      }),
      (fb =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (pb = (e) => {
        let { r: t, g: n, b: r, a: i } = ga(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (mb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        va({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (hb = (e) => {
        let { r: t, g: n, b: r, a: i } = ga(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (gb = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        va({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (_b = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ya(this);
        }
        rgb() {
          return Ca(this);
        }
        hsl() {
          return na(this.r, this.g, this.b);
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
              return new e(xa(t));
            case `srgb`:
              return new e(Sa(xa(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            Sa({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = q(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ma(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!L(t) || !q.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (vb = new Map()),
      (q = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = vb.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (vb.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = wa(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && da(e) !== !1),
          (e.isColorObject = (e) =>
            z(e) &&
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
          (e.toHex = (e, t = !1) => ta(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && _b.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...Zi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = aa(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = aa(e.r, e.g, e.b),
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
            let t = ta(e.r, e.g, e.b, !0);
            for (let e of Object.keys(lb)) if (lb[e] === t) return e;
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
                r: qi(i, [0, 1], [t.r, r.r], a),
                g: qi(i, [0, 1], [t.g, r.g], a),
                b: qi(i, [0, 1], [t.b, r.b], a),
                a: qi(i, [0, 1], [t.a, r.a], a),
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
                h: qi(i, [0, 1], [u, u + f], a),
                s: qi(i, [0, 1], [c.s, l.s], a),
                l: qi(i, [0, 1], [c.l, l.l], a),
                a: qi(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Qi(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => na(e, t, n)),
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
        function r(e) {
          e /= 255;
          let t = Math.abs(e);
          return t < 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
        }
        return (
          (e.luminance = (t) => {
            let { r: n, g: i, b: a } = e.toRgb(t);
            return 0.2126 * r(n) + 0.7152 * r(i) + 0.0722 * r(a);
          }),
          (e.contrast = (t, n) => {
            let r = e.luminance(t),
              i = e.luminance(n);
            return (Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05);
          }),
          e
        );
      })()),
      (yb = (e) => e instanceof Ve),
      (bb = b_().EventEmitter),
      (xb = class {
        _emitter = new bb();
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
      (Sb = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Cb = G.requestAnimationFrame || Sb),
      (wb = (e) => Cb(e)),
      (Tb = 1 / 60),
      (Eb = class extends xb {
        _started = !1;
        _frame = 0;
        _frameTasks = [];
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
          Tb = e;
        }
        static get TimeStep() {
          return Tb;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), wb(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * Tb;
        }
        tick = () => {
          this._started &&
            (wb(this.tick),
            this.emit(`update`, this._frame, Tb),
            this.emit(`render`, this._frame, Tb),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Db = new Eb()),
      (Ob = { target: Aa() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (J = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Ob.target,
        hasRestrictions: () => {
          let e = Ob.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (kb = (e) => ({
        correct: (t, { projectionDelta: n, treeScale: r }) => {
          if ((typeof t == `string` && (t = parseFloat(t)), t === 0)) return `0px`;
          let i = t;
          return (
            n && r && ((i = Math.round(t / n[e].scale / r[e])), (i = Math.max(i, 1))),
            i + `px`
          );
        },
      })),
      Te({
        borderTopWidth: kb(`y`),
        borderLeftWidth: kb(`x`),
        borderRightWidth: kb(`x`),
        borderBottomWidth: kb(`y`),
      }),
      (Ab = j.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (jb = {
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
      (Mb = {
        ...jb,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Nb = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Pb = { ...Nb, fontWeight: 500 }),
      (Fb = {
        ...Nb,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Ib = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = Ba(Ki.angleFromX(t.a, t.b)),
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
            return e(Ki(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Ki.distance(e.a, e.b)),
          e
        );
      })()),
      (Y = {
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
        divide: (e, t) => Y.multiply(e, 1 / t),
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
          x: Ui(e.x, t),
          y: Ui(e.y, t),
          width: Ui(e.width, t),
          height: Ui(e.height, t),
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
          maxX: Y.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: Y.maxY(e),
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
          return { x: a, y: o, width: Ki.distance(t, n), height: Ki.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(Y.minX)), y: Math.min(...e.map(Y.minY)) },
            n = { x: Math.max(...e.map(Y.maxX)), y: Math.max(...e.map(Y.maxY)) };
          return Y.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: Y.minX(e), y: Y.minY(e) },
          { x: Y.minX(e), y: Y.maxY(e) },
          { x: Y.maxX(e), y: Y.minY(e) },
          { x: Y.maxX(e), y: Y.maxY(e) },
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
            t.x < Y.minX(e) ||
            t.x > Y.maxX(e) ||
            t.y < Y.minY(e) ||
            t.y > Y.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of Y.points(t)) if (!Y.containsPoint(e, n)) return !1;
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
          !(t.x >= Y.maxX(e) || Y.maxX(t) <= e.x || t.y >= Y.maxY(e) || Y.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = Y.maxX(e),
            r = Y.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = Y.maxY(e),
            r = Y.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => Y.intersects(t, e)) === void 0,
        isEqual: (e, t) => Y.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
            Ki.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: Y.minX(e), y: Y.minY(e) },
            r = { x: Y.minX(t), y: Y.minY(t) };
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
          let n = Y.minX(e),
            r = Y.minY(e),
            i = Y.maxX(e),
            a = Y.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = Y.cornerPoints(e);
          return [Ib(t, n), Ib(n, r), Ib(r, i), Ib(i, t)];
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
                  V(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              V(n);
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
                  V(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              V(n);
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
          let n = Ib(t, Y.center(e)),
            r = Y.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Ib.intersection(n, t, !0)) {
              let n = Lb[e];
              return (B(n, () => `Invalid edge name: ${JSON.stringify(Lb)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          B(r, `Rect array is empty`);
          let i = Y.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            B(o);
            let s = Y.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Lb = [`top`, `right`, `bottom`, `left`]),
      (Rb = {
        left: null,
        right: null,
        top: null,
        bottom: null,
        centerX: `50%`,
        centerY: `50%`,
        aspectRatio: null,
        parentSize: null,
        width: 100,
        height: 100,
      }),
      (zb = {
        quickfix: (e) => (
          (Va(e.widthType) || Va(e.heightType)) && (e.aspectRatio = null),
          H(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || Va(e.widthType) || H(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || Va(e.heightType) || H(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      (Bb = {
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
            d = zb.quickfix({
              left: H(t) || Vi(t),
              right: H(n) || Vi(n),
              top: H(r) || Vi(r),
              bottom: H(i) || Vi(i),
              widthType: Ua(a),
              heightType: Ua(o),
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
          } else a !== void 0 && typeof a != `string` && (f = K.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = K.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? K.getNumber(t) : null,
              right: d.right ? K.getNumber(n) : null,
              top: d.top ? K.getNumber(r) : null,
              bottom: d.bottom ? K.getNumber(i) : null,
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
            o = t?.sizing ? K.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? K.getNumber(t?.sizing.height) : null,
            c = Ya(e.left, e.right);
          if (o && H(c)) i = o - c;
          else if (n && Va(e.widthType)) i = n.width;
          else if (H(e.width))
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
                V(e.widthType);
            }
          let l = Ya(e.top, e.bottom);
          if (s && H(l)) a = s - l;
          else if (n && Va(e.heightType)) a = n.height;
          else if (H(e.height))
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
                V(e.heightType);
            }
          return Ja(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = Bb.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? K.getNumber(l.width) : null,
            d = l ? K.getNumber(l.height) : null;
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
          return r ? Y.pixelAligned(f) : f;
        },
      }),
      (Vb = 200),
      (Hb = 200),
      (Ub = j.createContext({ parentSize: 0 })),
      (Wb = (e) => {
        let t = ro(),
          { parentSize: n, children: r } = e,
          i = j.useMemo(() => ({ parentSize: n }), [ao(n), oo(n)]);
        return t === 1
          ? r
            ? v(k, { children: r })
            : null
          : v(Ub.Provider, { value: i, children: r });
      }),
      (Gb = ((e) => (
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
      ))(Gb || {})),
      (Kb = j.createContext(void 0)),
      (qb = new Set()),
      (Yb = `style[data-framer-css-ssr-minified]`),
      (Xb = (() => {
        if (!An()) return new Set();
        let e = document.querySelector(Yb)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (Zb = `data-framer-css-ssr`),
      (Qb = (e, t, n) =>
        j.forwardRef((i, a) => {
          let { sheet: o, cache: s } = j.useContext(Kb) ?? {},
            c = n;
          if (!An()) {
            Ye(t) && (t = t(po(), i));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            ex.add(e, c);
          }
          return (
            r(() => {
              (c && Xb.has(c)) ||
                (Ye(t)
                  ? t(po(), i)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && fo(e, o, s));
            }, []),
            v(e, { ...i, ref: a })
          );
        })),
      ($b = class {
        styles = new Set();
        componentIds = new Set();
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
      (ex = new $b()),
      (tx = [
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
      (nx = ((e) => (
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
      ))(nx || {})),
      (X = nx),
      (rx = `framer-form-input`),
      (ix = `framer-form-input-wrapper`),
      (ax = `framer-form-input-empty`),
      (ox = `framer-form-input-forced-focus`),
      (Z = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (B(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${mo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            B(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      (sx = [
        Z(`.${rx}`, {
          padding: Z.variable(X.Padding),
          background: `transparent`,
          fontFamily: Z.variable(X.FontFamily),
          fontWeight: Z.variable(X.FontWeight),
          fontSize: Z.variable(X.FontSize),
          fontStyle: Z.variable(X.FontStyle),
          color: Z.variable(X.FontColor),
          fontFeatureSettings: Z.variable(X.FontOpenType),
          fontVariationSettings: Z.variable(X.FontVariationAxes),
          border: `none`,
          textOverflow: `ellipsis`,
          whiteSpace: `nowrap`,
          overflow: `hidden`,
          width: `100%`,
          height: Z.variable(X.WrapperHeight, `100%`),
          letterSpacing: Z.variable(X.FontLetterSpacing),
          textAlign: Z.variable(X.FontTextAlignment),
          lineHeight: Z.variable(X.FontLineHeight),
        }),
        Z(`.${rx}:focus-visible`, { outline: `none` }),
      ]),
      (cx = [Z(`.${ix}`, { overflow: `hidden` })]),
      (lx = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
      (ux = [
        `.${ix}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
      ]),
      (dx = `customError`),
      (fx = `valid`),
      (px = 10),
      (mx = 8),
      (hx = 16),
      (gx = {
        backgroundRepeat: `no-repeat`,
        backgroundSize: `${hx}px`,
        maskRepeat: `no-repeat`,
        maskSize: `${hx}px`,
        backgroundColor: Z.variable(X.IconColor),
      }),
      (_x = {
        content: ``,
        display: `block`,
        position: `absolute`,
        right: 0,
        top: 0,
        bottom: 0,
        width: `${hx}px`,
        boxSizing: `content-box`,
        padding: Z.variable(X.Padding),
        border: `none`,
        pointerEvents: `none`,
        ...gx,
      }),
      (vx = `--list-style-type`),
      (yx = `--max-list-digits`),
      (bx = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (xx = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Sx = { display: `inline-block` }),
      (Cx = { display: `block` }),
      (wx = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${xx.display};
            flex-direction: ${xx.flexDirection};
            justify-content: ${xx.justifyContent};
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
                color: ${Co([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Co([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Co([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Sx.display};
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
                color: ${Co([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            font-family: var(--framer-font-family-preview, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none)));
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
            color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
        `
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Co([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
        color: var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Co([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
        `
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-blockquote-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-blockquote-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
        `
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Co([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Co([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
        `
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
        `
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Co([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Co([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Co([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${Co([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Co([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Co([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Co([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Cx.display};
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
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${yx}, 1) + 1) * 1ch);
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
            overflow-wrap: anywhere;
            vertical-align: top;
        }
    `,
        `
        ${wo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (Tx = `--text-truncation-display-inline-for-safari-16`),
      (Ex = `--text-truncation-display-none-for-safari-16`),
      (Dx = `--text-truncation-line-break-for-safari-16`),
      (Ox = [
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
      (kx = `(background: -webkit-named-image(i))`),
      (Ax = `(contain-intrinsic-size: inherit)`),
      (jx = [
        `@supports ${kx} and (not ${Ax}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${Ox.join(`, `)} { display: var(${Tx}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${Ox.map((e) => `${e}::after`).join(`, `)} { content: var(${Dx}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ex}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${Tx}, ${Sx.display}) }
    }`,
      ]),
      (Mx = `--framer-will-change-override`),
      (Nx = `--framer-will-change-effect-override`),
      (Px = `--framer-will-change-filter-override`),
      (Fx = `--overflow-clip-fallback`),
      (Ix = `--one-if-corner-shape-supported`),
      (Lx = (e) => {
        let t = [
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
          ],
          n = [
            `[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
            `[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
          ],
          r = [
            `[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
            `[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
            `[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
            `[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
            `[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
          ],
          i = [
            `[data-framer-cursor="pointer"] { cursor: pointer; }`,
            `[data-framer-cursor="grab"] { cursor: grab; }`,
            `[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
          ],
          a = [
            `[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
            `[data-framer-generated] * { pointer-events: unset }`,
          ],
          o = [
            `[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
            `[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
            `[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
          ],
          s = `(background: -webkit-named-image(i))`,
          c = (e) =>
            e
              ? [
                  `body { ${Mx}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${Mx}: transform; } }`,
                ]
              : [`body { ${Mx}: none; ${Nx}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${Px}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${Px}: filter; } }`,
                ]
              : [`body { ${Px}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${Fx}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${Ix}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...wx,
          ...tx,
          `
[data-framer-component-type="Stack"]:not([data-framer-generated]) > *,
[data-framer-component-type="Stack"]:not([data-framer-generated]) > [data-framer-component-type] {
    position: relative;
}`,
          `
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
          ...n,
          ...r,
          `[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
          `[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
          `[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
          ...i,
          ...u(e),
          `.svgContainer svg { display: block; }`,
          `[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
          ...o,
          d,
          `.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
          ...jx,
          f,
        ];
      }),
      (Rx = uo(() => Lx(!1))),
      (zx = uo(() => Lx(!0))),
      (Bx = `optional`),
      (Vx = (e) => e),
      (Hx =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Ux = Lo(
        (e) =>
          Hx.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Wx = (e) => () => {
        zi(e);
      }),
      (Gx = () => () => {}),
      (Kx = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = Jx.useImageSource(e, t, n);
          return l(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        isOnPageCanvas: !1,
      }),
      (qx = !1),
      (Jx = new Proxy(Kx, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? Gx()
              : Wx(
                  qx
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Yx = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Xx = [1, 2, 2.2]),
      (Zx = [512, 1024, 2048, 4096]),
      (Qx = 512),
      ($x = { position: `absolute`, ...Yx, top: 0, right: 0, bottom: 0, left: 0 }),
      (eS = `src`),
      (tS = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && eS in e;
        },
      }),
      (nS = Dn()),
      (rS = j.createContext(!1)),
      (iS = class {
        sharedResizeObserver;
        callbacks = new WeakMap();
        constructor() {
          this.sharedResizeObserver = new ResizeObserver(this.updateResizedElements.bind(this));
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
      (aS = An() ? new iS() : void 0),
      (oS = `data-framer-size-compatibility-wrapper`),
      (sS = `0.000001px`),
      (cS = ` translateZ(${sS})`),
      (lS = Mn() || On() || Nn()),
      (uS = (() => {
        class e extends y {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? _s(t) : vs(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Et(this.props, e);
          }
          componentDidUpdate(e) {
            Vx(this.props).clip &&
              Vx(this.props).radius === 0 &&
              Vx(e).radius !== 0 &&
              bs(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (dS = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (fS = {
        hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
        setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
        getAlpha: (e) => {
          let t = da(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => q.toRgbString(q.multiplyAlpha(q(e), t)),
        toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
        toHex: (e) => q.toHexString(q(e)).toUpperCase(),
        toRgb: (e) => q.toRgb(q(e)),
        toRgbString: (e) => q.toRgbString(q(e)),
        toHSV: (e) => q.toHsv(q(e)),
        toHSL: (e) => q.toHsl(q(e)),
        toHslString: (e) => q.toHslString(q(e)),
        toHsvString: (e) => q.toHsvString(q(e)),
        hsvToHSLString: (e) => q.toHslString(q($i(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => q.toHex(q($i(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => q.toHexString(q($i(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => q.toRgbString(q($i(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => $i(e.h, e.s, e.v),
        rgbaToString: (e) => q.toRgbString(q(e)),
        rgbToHexValue: (e) => q.toHex(q(e)),
        rgbToHexString: (e) => q.toHexString(q(e)),
        hslToString: (e) => q.toHslString(q(e)),
        hslToRgbString: (e) => q.toRgbString(q(e)),
        toColorPickerSquare: (e) => q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => q(e).isValid !== !1,
        equals: (e, t) =>
          q.isP3String(e) || q.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = q(e)),
              typeof t == `string` && (t = q(t)),
              q.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = q(e);
          return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
        },
        toFormatString: (e) => (q.isP3String(e) ? e : q.toRgbString(q(e))),
      }),
      (pS = /var\(.+\)/u),
      (mS = new Map()),
      (hS = [`stops`]),
      (gS = [`start`, `end`]),
      (_S = [`angle`, `alpha`]),
      (vS = {
        isLinearGradient: (e) => z(e) && _S.every((t) => t in e) && (Os(e) || Ds(e)),
        hash: (e) => e.angle ^ Es(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = Ts(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (yS = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (bS = {
        isRadialGradient: (e) => z(e) && yS.every((t) => t in e) && (Os(e) || Ds(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ Es(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = Ts(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (xS = [
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
      (SS = new Set([...xS, ...xS.map((e) => `${e}Capture`)])),
      (CS = `overflow`),
      (wS = { x: 0, y: 0, width: 200, height: 200 }),
      (TS = new Set([
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
      (ES = x(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: l, children: u } = ss(e),
          d = zs(l),
          f = ls(e),
          p = Ps(e),
          m = t(null),
          h = n ?? m,
          g = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": p,
            "data-framer-highlight": p === `pointer` || void 0,
            "data-layoutid": f,
            "data-framer-offset-parent-id": Vx(e)[`data-framer-offset-parent-id`],
          };
        !Bs(e) && r && (Vx(g)[`data-framer-name`] = r);
        let [_, y] = Rs(l),
          b = Ls(l),
          x = lo(b);
        (i && !(y && !x && Za(b))
          ? ((d.transformTemplate ||= cs(i)), Object.assign(g, as(i)))
          : (d.transformTemplate ||= void 0),
          hs(e, h));
        let S = ts(e),
          C = Vs(l, b, y, c(rS)),
          w = so(
            E(k, {
              children: [
                S
                  ? v(Zo, {
                      alt: e.alt ?? ``,
                      image: S,
                      containerSize: y ?? void 0,
                      nodeId: e.id && os(e.id),
                      layoutId: f,
                    })
                  : null,
                u,
                v($o, { ...o, border: a, layoutId: f }),
              ],
            }),
            C
          ),
          T = rs(e.as),
          D = ns(S);
        return (
          e.fitImageDimension &&
            D &&
            ((_[e.fitImageDimension] = `auto`), (_.aspectRatio = D.width / D.height)),
          E(T, { ...g, ...d, layoutId: f, style: _, ref: h, children: [w, s] })
        );
      })),
      (DS = Eo(
        x(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? v(ES, { ...e, ref: t }) : null;
        })
      )),
      (OS = `__LAYOUT_TREE_ROOT`),
      (kS = j.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (AS = class extends y {
        shouldAnimate = !1;
        transition;
        lead;
        follow;
        scheduledPromotion = !1;
        scheduledDidUpdate = !1;
        getSnapshotBeforeUpdate() {
          if (!this.scheduledPromotion || !this.lead || !this.follow) return null;
          let e = this.lead?.layoutMaybeMutated && !this.shouldAnimate;
          return (
            this.lead.projectionNodes.forEach((t) => {
              t?.promote({
                needsReset: e,
                transition: this.shouldAnimate ? this.transition : void 0,
                preserveFollowOpacity: t.options.layoutId === OS && !this.follow?.isExiting,
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
        scheduleProjectionDidUpdate = () => {
          this.scheduledDidUpdate = !0;
        };
        schedulePromoteTree = (e, t, n) => {
          ((this.follow = this.lead),
            (this.shouldAnimate = n),
            (this.lead = e),
            (this.transition = t),
            (this.scheduledPromotion = !0));
        };
        initLead = (e, t) => {
          ((this.follow = this.lead),
            (this.lead = e),
            this.follow && t && (this.follow.layoutMaybeMutated = !0));
        };
        sharedLayoutContext = {
          schedulePromoteTree: this.schedulePromoteTree,
          scheduleProjectionDidUpdate: this.scheduleProjectionDidUpdate,
          initLead: this.initLead,
        };
        render() {
          return v(kS.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (jS = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (MS = class {
        sharedIntersectionObserver;
        callbacks = new WeakMap();
        constructor(e) {
          this.sharedIntersectionObserver = new IntersectionObserver(
            this.intersectionObserverCallback.bind(this),
            e
          );
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
      (NS = d(new Map())),
      (PS = typeof IntersectionObserver > `u` ? T_ : Ys),
      (FS = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (IS = j.createContext(null)),
      (LS = class extends y {
        layoutMaybeMutated = !1;
        projectionNodes = new Map();
        rootProjectionNode;
        isExiting;
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === OS && !this.props.isExiting;
        switchLayoutGroupContext = {
          register: (e) => this.addChild(e),
          deregister: (e) => this.removeChild(e),
          transition:
            this.props.isLead !== void 0 && this.props.animatesLayout
              ? this.props.transition
              : void 0,
          shouldPreserveFollowOpacity: this.shouldPreserveFollowOpacity,
        };
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
          return v(Ne.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (RS = (e) => {
        let t = j.useContext(kS);
        return v(LS, { ...e, sharedLayoutContext: t });
      }),
      (zS = j.createContext(!0)),
      (BS = d({ register: () => {}, deregister: () => {} })),
      (VS = ({ isCurrent: e, isOverlayed: n, children: r }) => {
        let a = tc(),
          o = t({
            register: u(
              (e) => {
                if (a.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                a.set(e, void 0);
              },
              [a]
            ),
            deregister: u(
              (e) => {
                (a.get(e)?.(), a.delete(e));
              },
              [a]
            ),
          }).current;
        return (
          i(
            () => (
              a.forEach((t, r) => {
                let i = r(e, n);
                a.set(r, Ye(i) ? i : void 0);
              }),
              () => {
                a.forEach((e, t) => {
                  e && (e(), a.set(t, void 0));
                });
              }
            ),
            [e, n, a]
          ),
          v(BS.Provider, { value: o, children: r })
        );
      }),
      (HS = j.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: a = !1,
        visible: o,
        transitionProps: s,
        children: l,
        backdropColor: u,
        onTapBackdrop: d,
        backfaceVisible: f,
        exitBackfaceVisible: p,
        animation: m,
        exitAnimation: h,
        instant: g,
        initialProps: _,
        exitProps: y,
        position: b = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: x,
        index: S,
        areMagicMotionLayersPresent: C,
        id: w,
        isInitial: T,
      }) {
        let D = he(),
          O = c(we),
          { persistLayoutIdCache: k } = c(Ab),
          A = t({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: ic({}, _, s),
          }),
          ee = t(null),
          te = O !== null && !O.isPresent;
        (n && A.current.wasCurrent === void 0 && k(),
          i(() => {
            if (e || !D) return;
            if (te) {
              A.current = { ...A.current, wasBeingRemoved: te };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = A.current,
              a = (n && !i) || (!te && A.current.wasBeingRemoved && n),
              o = r && !t,
              c = ic(A.current.origins, _, s),
              l = A.current.wasReset;
            (a || o
              ? (D.stop(), D.start({ zIndex: S, ...c, ...s }), (l = !1))
              : l === !1 && (D.stop(), D.set({ zIndex: S, ...US, opacity: 0 }), (l = !0)),
              (A.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, te]));
        let j = g ? { type: !1 } : `velocity` in m ? { ...m, velocity: 0 } : m,
          ne = g ? { type: !1 } : h || m,
          re = { ...b };
        ((re.left === void 0 || re.right === void 0) && (re.width = `auto`),
          (re.top === void 0 || re.bottom === void 0) && (re.height = `auto`));
        let ie = (ac(s) || ac(_)) && (e || n || r) ? 1200 : void 0,
          ae = { ...US, ...A.current.origins },
          M = e
            ? {
                initial: { ...ae, ..._ },
                animate: { ...ae, ...s, transition: j },
                exit: { ...ae, ...y, transition: m },
              }
            : { animate: D, exit: { ...ae, ...y, transition: ne } },
          oe = !(te || C === !1),
          se = !!n && oe,
          ce = n && T;
        return E(DS, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || te || (n && x) ? S : void 0,
            pointerEvents: void 0,
            visibility: o ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              v(DS, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: m,
                initial: { opacity: g && o ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: u || `transparent`,
                onTap: te ? void 0 : d,
              }),
            v(DS, {
              ...re,
              ...M,
              transition: {
                default: j,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: te ? p : f,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: ce || e || (n && x) ? 1 : 0 },
              "data-is-present": oe ? void 0 : !1,
              ref: ee,
              children: v(IS.Provider, {
                value: ee,
                children: v(zS.Provider, {
                  value: se,
                  children: v(VS, {
                    isCurrent: se,
                    isOverlayed: a,
                    children: v(RS, {
                      isLead: n,
                      animatesLayout: !!x,
                      transition: j,
                      isExiting: !oe,
                      isOverlayed: a,
                      id: w,
                      children: l,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, rc)),
      (US = {
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
      (WS = class {
        warning = () => {
          zi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
        };
        goBack = () => this.warning();
        instant = () => this.warning();
        fade = () => this.warning();
        push = () => this.warning();
        modal = () => this.warning();
        overlay = () => this.warning();
        flip = () => this.warning();
        customTransition = () => this.warning();
        magicMotion = () => this.warning();
      }),
      (GS = d(new WS())),
      (KS = {
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
      (qS = () => ({
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
      (JS = z_(US)),
      (YS = j.createContext(void 0)),
      (XS = j.createContext(void 0)),
      (ZS = (() => {
        class e extends y {
          #e = null;
          state = qS();
          static defaultProps = { enabled: !0 };
          static contextType = YS;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !za(t) || !Ra(t)) return;
            let n = { ...KS.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = lc(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!za(t) || !Ra(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, KS.Instant)
                : this.#r({ type: `update`, key: n, component: t }));
          }
          componentWillUnmount() {
            this.props.resetProjection?.();
          }
          #t(e) {
            let { current: t, previous: n, currentOverlay: r, previousOverlay: i } = this.state;
            return e.overCurrentContext
              ? { current: r, previous: i, history: this.state.overlayStack }
              : { current: t, previous: n, history: this.state.history };
          }
          #n() {
            return globalThis.event ? this.#e === globalThis.event.timeStamp : !1;
          }
          #r = (e) => {
            if (!this.props.enabled && this.state.history.length > 0) return;
            let t = lc(this.state, e);
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
          };
          #i(e, t, n) {
            if (
              this.#n() ||
              ((this.#e = globalThis.event?.timeStamp || null), !e || !za(e) || !Ra(e))
            )
              return;
            let r = { ...t, ...n };
            if (r.overCurrentContext)
              return this.#r({ type: `addOverlay`, transition: r, component: e });
            let i = e.key?.toString() || `stack-${this.state.historyItemId + 1}`;
            this.#r({ type: `add`, key: i, transition: r, component: e });
          }
          goBack = () => {
            if (!this.#n())
              return (
                (this.#e = globalThis.event?.timeStamp || null),
                this.state.currentOverlay === -1
                  ? this.#r({ type: `remove` })
                  : this.#r({ type: `removeOverlay` })
              );
          };
          instant(e) {
            this.#i(e, KS.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, KS.Fade, t);
          }
          push(e, t) {
            this.#i(e, oc(t), t);
          }
          modal(e, t) {
            this.#i(e, KS.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, sc(t), t);
          }
          flip(e, t) {
            this.#i(e, cc(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, KS.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = wc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              B(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              B(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                v(
                  HS,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: Pc(o, e),
                    transitionProps: u,
                    animation: Nc(o, e),
                    backfaceVisible: jc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: v(Hs, { children: Ic({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              v(
                HS,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: Ac(n, t),
                  transitionProps: Mc(n, t),
                  instant: Pc(n, t, !0),
                  animation: Nc(n, t),
                  exitProps: e.transition.enter,
                  visible: Fc(n, t),
                  backdropColor: Oc(e.transition),
                  backfaceVisible: kc(n, t),
                  onTapBackdrop: Lc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: Ic({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return v(DS, {
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
              children: v(GS.Provider, {
                value: this,
                children: E(XS.Provider, {
                  value: i,
                  children: [
                    v(HS, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: Tc(n),
                      animation: Ec(n),
                      backfaceVisible: Dc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: v(ja, {
                        children: v(AS, {
                          children: v(Fe, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    v(Fe, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (QS = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      ($S = Eo(j.forwardRef(Rc))),
      Ee(C_(), 1),
      (eC = Ee(C_(), 1)),
      (tC = class e {
        constructor(t, n) {
          ((this.originalEvent = t), (this.session = n));
          let r = (n && n.startEvent && n.startEvent.target) || t.target,
            i = e.eventLikeFromOriginalEvent(t);
          this.point = zc(i, r);
          let a = n && n.originElement ? n.originElement : document.body;
          ((this.devicePoint = zc(i, a)), (this.target = t.target || null));
          let o = n && n.lastEvent;
          t instanceof WheelEvent
            ? (this.delta = { x: t.deltaX, y: t.deltaY })
            : o && this.devicePoint && o.devicePoint
              ? (this.delta = Ki.subtract(this.devicePoint, o.devicePoint))
              : (this.delta = { x: 0, y: 0 });
        }
        originalEvent;
        session;
        time = Date.now();
        loopTime = Db.time;
        point;
        devicePoint;
        target;
        delta;
        static eventLikeFromOriginalEvent(e) {
          if (`touches` in e) {
            let t = e.touches;
            (!t || !t.length) &&
              e.changedTouches &&
              e.changedTouches.length &&
              (t = e.changedTouches);
            let n = t[0];
            return !t || !n
              ? { pageX: 0, pageY: 0, target: null }
              : {
                  pageX: n.clientX || n.screenX || n.pageX,
                  pageY: n.clientY || n.screenY || n.pageY,
                  target: e.target,
                };
          }
          return e;
        }
        velocity(e) {
          return this.session ? this.session.velocity(e) : { x: 0, y: 0 };
        }
        get offset() {
          return this.session ? this.session.offset(this) : { x: 0, y: 0 };
        }
        get isLeftMouseClick() {
          if (!Pn())
            return (
              `button` in this.originalEvent &&
              `buttons` in this.originalEvent &&
              `ctrlKey` in this.originalEvent &&
              (this.originalEvent.button === 0 || this.originalEvent.buttons === 1) &&
              !this.originalEvent.ctrlKey
            );
        }
      }),
      Ee(C_(), 1),
      (nC = j.createContext({ dragging: !1 })),
      (rC = { onMouseEnter: `mouseenter`, onMouseLeave: `mouseleave` }),
      (iC = Object.keys(rC)),
      (aC = {
        panstart: [`onPanStart`],
        pan: [`onPan`],
        panend: [`onPanEnd`],
        tapstart: [`onTapStart`, `onMouseDown`],
        tap: [`onTap`, `onClick`],
        tapend: [`onTapEnd`, `onMouseUp`],
        mousewheelstart: [`onMouseWheelStart`],
        mousewheel: [`onMouseWheel`],
        mousewheelend: [`onMouseWheelEnd`],
      }),
      (oC = new Set([`tapstart`, `tap`, `tapend`])),
      (sC = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (cC = Symbol(`private`)),
      (lC = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [cC]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new ab(),
                reset() {
                  for (let t in i)
                    if (sC(i, t)) {
                      let n = sC(e, t) ? Vx(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, dC);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[cC].reset()),
          (e.addObserver = (e, t) => e[cC].observers.add(t)),
          e
        );
      })()),
      (uC = class {
        set = (e, t, n, r) => {
          if (t === cC) return !1;
          let i = e[cC],
            a,
            o;
          if (
            (Vi(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables && typeof n != `function` && typeof n != `object` && !a && (a = K(n)),
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
            l = Vx(e)[t];
          if (l !== void 0) {
            Vi(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Vx(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === cC) return Vx(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[cC].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(cC);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== cC) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (dC = new uC()),
      (fC = `opacity`),
      (pC = `radius`),
      (mC = [`x`, `y`, `color`, `inset`, `blur`, `spread`]),
      (hC = {
        is: (e) => e && mC.every((t) => t in e),
        toCSS: (e) =>
          `${e.inset ? `inset ` : ``}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
      }),
      (gC = K.getNumber),
      (_C = {
        z: 0,
        rotation: 0,
        rotationX: 0,
        rotationY: 0,
        rotationZ: 0,
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
      }),
      (vC = (() => {
        class e extends uS {
          static supportsConstraints = !0;
          static defaultFrameSpecificProps = {
            ...Rb,
            ..._C,
            opacity: 1,
            background: q(`rgba(0, 170, 255, 0.3)`),
            visible: !0,
            borderWidth: 0,
            borderColor: `#222`,
            borderStyle: `solid`,
          };
          static defaultProps = { ...uS.defaultProps, ...e.defaultFrameSpecificProps };
          static rect(e) {
            let t = Bb.fromProperties(e),
              n = e.parentSize
                ? { sizing: e.parentSize, positioning: e.parentSize, viewport: null }
                : null;
            return Bb.toRect(t, n, null, !0);
          }
          get rect() {
            return e.rect(this.props);
          }
          element = null;
          imageDidChange = !1;
          state = { size: null };
          static getDerivedStateFromProps(t, n) {
            let r = e.updatedSize(t, n),
              { target: i } = Ob;
            return t.background && tS.isImageObject(t.background) && t.background.src
              ? { size: r }
              : n.size &&
                  (i === J.preview || (n.size.width === r.width && n.size.height === r.height))
                ? null
                : { size: r };
          }
          static updatedSize(t, n) {
            let r = e.rect(t),
              i = n.size,
              a = { width: r.width, height: r.height },
              { target: o } = Ob;
            return (
              i
                ? Vi(i.width) && Vi(i.height)
                  ? (i.width.set(a.width), i.height.set(a.height))
                  : (i = a)
                : (i = o === J.preview ? lC(a, !0) : a),
              i
            );
          }
          getStyle() {
            let e = this.rect,
              t = {
                display: `block`,
                position: `absolute`,
                width: `${e.width}px`,
                height: `${e.height}px`,
                pointerEvents: void 0,
                userSelect: `none`,
              },
              n = K.get(this.props.left, void 0),
              r = K.get(this.props.top, void 0);
            Object.assign(t, this.props._initialStyle);
            let i = this.context.parentSize !== 1,
              a = K.get(this.props.perspective, void 0);
            ((t.perspective = a), (t.WebkitPerspective = a));
            let o,
              s = K.get(this.props.backfaceVisible, void 0);
            (s === !0 ? (o = `visible`) : s === !1 && (o = `hidden`),
              (t.backfaceVisibility = o),
              (t.WebkitBackfaceVisibility = o));
            let c = K.get(this.props.preserve3d, void 0);
            if (
              (c === !0
                ? (t.transformStyle = `preserve-3d`)
                : c === !1 && (t.transformStyle = `flat`),
              !i)
            ) {
              (cl(t, this.props, `right`), cl(t, this.props, `bottom`));
              let e = sl(K.get(this.props.width, void 0)),
                i = sl(K.get(this.props.height, void 0));
              (typeof n == `string` &&
                n.endsWith(`%`) &&
                this.props.right === null &&
                ((n = `calc(${n} - calc(${e}} / 2))`), (t.width = e)),
                typeof r == `string` &&
                  r.endsWith(`%`) &&
                  this.props.bottom === null &&
                  ((r = `calc(${r} - calc(${i} / 2))`), (t.height = i)),
                r !== void 0 && t.bottom !== void 0
                  ? ((t.height = void 0), (r = sl(K.get(this.props.top, void 0))))
                  : (t.height = i),
                n !== void 0 && t.right !== void 0
                  ? ((t.width = void 0), (n = sl(K.get(this.props.left, void 0))))
                  : (t.width = e));
            }
            let l = { ...e };
            return (
              n !== void 0 && (l.x = n),
              r !== void 0 && (l.y = r),
              il(this.props, l, t),
              nl(this.props, t),
              ol(this.props, t),
              uS.applyWillChange(this.props, t, !1),
              this.props.style && Object.assign(t, this.props.style),
              t
            );
          }
          updateStyle = () => {
            this.element && Object.assign(this.element.style, this.getStyle());
          };
          setElement = (e) => {
            ((this.element = e), this.setLayerElement(e));
          };
          propsObserver;
          propsObserverCancel;
          sizeObserver;
          sizeObserverCancel;
          componentDidMount() {
            let { target: e } = Ob;
            e === J.preview &&
              ((this.propsObserver = lC(this.props, !0)),
              (this.propsObserverCancel = lC.addObserver(this.propsObserver, this.onPropsChange)),
              this.props.parentSize &&
                Vi(this.props.parentSize.width) &&
                Vi(this.props.parentSize.height) &&
                ((this.sizeObserver = lC(this.props.parentSize, !0)),
                (this.sizeObserverCancel = lC.addObserver(this.sizeObserver, this.onSizeChange))));
          }
          componentDidUpdate() {
            let { target: e } = Ob;
            (this.propsObserverCancel && this.propsObserverCancel(),
              this.sizeObserverCancel && this.sizeObserverCancel(),
              e === J.preview &&
                ((this.propsObserver = lC(this.props, !0)),
                (this.propsObserverCancel = lC.addObserver(this.propsObserver, this.onPropsChange)),
                this.props.parentSize &&
                  Vi(this.props.parentSize.width) &&
                  Vi(this.props.parentSize.height) &&
                  ((this.sizeObserver = lC(this.props.parentSize, !0)),
                  (this.sizeObserverCancel = lC.addObserver(
                    this.sizeObserver,
                    this.onSizeChange
                  )))));
          }
          onPropsChange = (t) => {
            let n = e.rect(K.objectToValues(t.value));
            (this.state.size &&
              Vi(this.state.size.width) &&
              Vi(t.value.width) &&
              this.state.size.width.set(n.width),
              this.state.size &&
                Vi(this.state.size.height) &&
                Vi(t.value.height) &&
                this.state.size.height.set(n.height),
              this.updateStyle());
          };
          onSizeChange = () => {
            this.updateStyle();
          };
          componentWillUnmount() {
            (this.propsObserverCancel && this.propsObserverCancel(),
              (this.propsObserverCancel = void 0),
              this.sizeObserverCancel && this.sizeObserverCancel(),
              (this.sizeObserverCancel = void 0));
          }
          render() {
            let { visible: e, id: t, className: n } = this.props;
            if (!e) return null;
            let r = this.getStyle(),
              i = this.rect,
              a = { width: i.width, height: i.height };
            return E(`div`, {
              id: t,
              style: r,
              ref: this.setElement,
              className: n,
              children: [
                v(Wb, { parentSize: a, children: this.layoutChildren() }),
                v($o, { ...this.props }),
              ],
            });
          }
          layoutChildren() {
            let e = this.props._forwardedOverrides,
              t = j.Children.map(this.props.children, (t) =>
                Ha(t)
                  ? j.cloneElement(t, { parentSize: this.state.size, _forwardedOverrides: e })
                  : e && t
                    ? j.cloneElement(t, { _forwardedOverrides: e })
                    : t
              );
            return (
              t && t.length === 1 && typeof t[0] == `string` && (t = [v(ll, { children: t }, `0`)]),
              t
            );
          }
        }
        return ((e.contextType = Ub), e);
      })()),
      (yC =
        `_border._constraints.animate.initial.variants.transition.inherit.center.initial.transformTemplate.animate.variants.transition.onUpdate.onAnimationComplete.onPanSessionStart.onTapCancel.whileTap.whileHover.onHoverStart.onHoverEnd.drag.dragDirectionLock.dragPropagation.dragConstraints.dragElastic.dragMomentum.dragTransition.onDragStart.onDragEnd.onDrag.onDirectionLock.onDragTransitionEnd.x.y.rotate.rotateX.rotateY.rotateZ.position.border.borderRadius.cornerShape.shadow.size`.split(
          `.`
        )),
      (bC = [
        `autoSize`,
        `aspectRatio`,
        `borderWidth`,
        `borderStyle`,
        `borderColor`,
        `centerX`,
        `centerY`,
      ]),
      (xC = Bc(vC)),
      (SC = (() => {
        let e = x(function (e, t) {
          let n = ro();
          if (ul(e)) {
            let t = e.parentSize || no(n);
            return v(xC, { ...e, parentSize: t });
          }
          return v(DS, { ...e, ref: t });
        });
        return ((e.displayName = `Frame`), e);
      })()),
      (CC = (() => {
        function e(t = {}) {
          let n = lC(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => lC.resetObject(e));
          }),
          (e.addObserver = (e, t) => lC.addObserver(e, t)),
          e
        );
      })()),
      (wC = { update: 0 }),
      (TC = j.createContext({ update: NaN })),
      (EC = class extends y {
        observers = [];
        state = wC;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Db.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), CC.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            CC._stores.forEach((e) => {
              let t = CC.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            v(TC.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ee(C_(), 1),
      (DC = `__framer__`),
      (OC = DC.length),
      (kC = j.createContext(void 0)),
      (AC = j.createContext(void 0)),
      (jC = `ssr-variant`),
      (MC = `ssr-variant-group-separator`),
      (NC = j.forwardRef(function (e, t) {
        let n = gl(t),
          r = j.useContext(AC),
          i = j.useSyncExternalStore(A_, M_, j_),
          a = Pa(() => (i ? (An() ? 1 : 2) : 0)),
          o = j.useContext(kC);
        return Kr(() => {
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
              return n(s, wl(t, c, i));
            case 1:
              return yl(i, s, c, u, l, d, n, t);
            case 2:
              return yl(i, s, c, u, l, d, hl, void 0);
            default:
              V(a);
          }
        }, [o, r, n, e]);
      })),
      (PC = Qb(NC, `.${jC} { display: contents }`, `PropertyOverrides`)),
      (FC = `default`),
      (IC = new Set([FC])),
      (LC = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (B(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (B(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = FC, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return FC;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = bl(r)) : FC;
        }
        setAll(e, t = IC, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Ye(n.transformTemplate) ? n.transformTemplate?.({}, zC) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: z(a) ? a : void 0,
              animate: z(o) ? o : void 0,
              transformTemplate: L(i) ? i : void 0,
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
      (RC = new LC()),
      (zC = `__Appear_Animation_Transform__`),
      (BC = `data-framer-appear-id`),
      (VC = `data-framer-appear-animation`),
      (HC = (e) => {
        if (Fo())
          return {
            animate: El(e.animate) ? e.animate : void 0,
            initial: El(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (UC = [
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
      (WC = (e) => ({
        x: Ge(e?.x ?? 0),
        y: Ge(e?.y ?? 0),
        opacity: Ge(e?.opacity ?? 1),
        scale: Ge(e?.scale ?? 1),
        rotate: Ge(e?.rotate ?? 0),
        rotateX: Ge(e?.rotateX ?? 0),
        rotateY: Ge(e?.rotateY ?? 0),
        skewX: Ge(e?.skewX ?? 0),
        skewY: Ge(e?.skewY ?? 0),
        transformPerspective: Ge(e?.transformPerspective ?? 0),
      })),
      (GC = {
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
      (KC = { willChange: `transform` }),
      Object.freeze(KC),
      (qC = {}),
      Object.freeze(qC),
      (JC = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (YC = () => {
        let e = t();
        return (
          i(
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
      (XC = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (ZC = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (QC = 1),
      ($C = 4),
      (ew = new Set([
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
      (tw = [`animate`, `animate`]),
      (nw = { inputRange: [], outputRange: [] }),
      (rw = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (iw = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (aw = () => ({
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
      (ow = [0, 1]),
      (sw = { parallax: XC, styleAppear: ew, styleTransform: rw, loop: JC, presence: ZC }),
      (cw = z_(sw)),
      (lw = (e) => e.reduce((e, t) => (e += t), 0)),
      (uw = (e) => e.reduce((e, t) => (e *= t), 1)),
      (dw = `current`),
      (fw = (e) =>
        j.forwardRef((t, n) => {
          if (t.__withFX)
            return v(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = HC(t);
          if (r) return v(e, { ...t, ...r, ref: n });
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
            } = Yl(t),
            p = Ks(n),
            { values: m, style: h } = Fl(s, p, f, t.style, t[ve]),
            { values: g, style: _ } = jl(i, p, t.style?.visibility),
            { values: y, style: b } = ql(o, p),
            { values: x, style: S } = Ul(a, p),
            { values: C, style: w } = kl(c, p),
            T = j.useMemo(() => {
              let e = new Ve(u ?? 1);
              return {
                scale: [x.scale, C.scale, m.scale, y.scale],
                opacity: [x.opacity, C.opacity, m.opacity, e, y.opacity],
                x: [x.x, C.x, m.x, y.x],
                y: [x.y, C.y, g.y, m.y, y.y],
                rotate: [x.rotate, C.rotate, m.rotate, y.rotate],
                rotateX: [x.rotateX, C.rotateX, m.rotateX, y.rotateX],
                rotateY: [x.rotateY, C.rotateY, m.rotateY, y.rotateY],
                skewX: [x.skewX, C.skewX, m.skewX, y.skewX],
                skewY: [x.skewY, C.skewY, m.skewY, y.skewY],
                transformPerspective: [y.transformPerspective, x.transformPerspective],
              };
            }, [u, y, g, x, C, m]);
          Zl(t.style, T);
          let E = P(T.scale, uw),
            D = P(T.opacity, uw),
            O = P(T.x, lw),
            k = P(T.y, lw),
            A = P(T.rotate, lw),
            ee = P(T.rotateX, lw),
            te = P(T.rotateY, lw),
            ne = P(T.skewX, lw),
            re = P(T.skewY, lw),
            ie = P(T.transformPerspective, lw),
            { drag: ae, dragConstraints: M } = l;
          ds(ae && Xl(M) ? M : void 0);
          let oe = {
            opacity: D,
            scale: E,
            x: O,
            y: k,
            rotate: A,
            rotateX: ee,
            rotateY: te,
            skewX: ne,
            skewY: re,
          };
          $e(d) && (oe.transformPerspective = ie);
          let se = Ql(t.animate) ? t.animate : void 0,
            ce = Ql(t.initial) ? t.initial : void 0,
            le = Ql(t.exit) ? t.exit : void 0,
            ue = f && !s.presenceInitial ? { initial: ce, animate: se, exit: le } : {};
          return v(e, {
            ...l,
            ...ue,
            __withFX: !0,
            style: { ...t.style, ..._, ...b, ...w, ...oe, ...S, ...h },
            values: m,
            ref: p,
          });
        })),
      (pw = d({})),
      (mw = j.createContext({})),
      (hw = j.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = j.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = gl(a);
        return v(mw.Provider, { value: o, children: s(r, i) });
      })),
      (gw = (e) =>
        j.forwardRef((t, n) =>
          v(e, { layoutId: ls(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (_w = !1),
      (vw = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!tu(e)) return;
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
              ct(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          cn(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!tu(e)) throw e;
          return ((_w = !0), this.props.children);
        }
      }),
      (yw = a === void 0 ? null : new Promise(() => {})),
      (bw = v(nu, {})),
      (xw = d(!1)),
      (xw.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Sw = v(iu, {})),
      (Cw = class extends y {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (ou(this.props.getErrorMessage(), t?.componentStack), au(e, t));
        }
        render() {
          let { children: e, fallback: t = Sw } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (ww = class extends y {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            au(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (Tw = j.createContext(void 0)),
      (Ew = `code-crash:`),
      (Dw = gw(
        j.forwardRef(function (
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
          let u = Pa(() => (t ? `${t}-container` : void 0)),
            d = rs(n),
            f = bu(
              j.Children.map(e, (e) =>
                j.isValidElement(e) ? j.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return v(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: v(rS.Provider, {
              value: !0,
              children: v(cy.Provider, {
                value: i ?? null,
                children: v(Na, {
                  enabled: !1,
                  children: v(Be, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (Ow = j.forwardRef(function (e, t) {
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
          d = bu(r, i, a, o, c, l),
          f = e.as ?? `div`;
        if (e.rendersWithMotion) {
          let n = rs(f);
          return v(cy.Provider, {
            value: a ?? null,
            children: v(n, { ...u, ref: t, style: e.style, children: d }),
          });
        } else {
          let n = f,
            { layoutId: r, layoutDependency: i, ...o } = u;
          return v(cy.Provider, {
            value: a ?? null,
            children: v(n, { ...o, ref: t, style: e.style, children: d }),
          });
        }
      })),
      (kw = d({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (Aw = `framer-cursor-none`),
      (jw = `framer-pointer-events-none`),
      (Mw = S(function ({ children: e }) {
        let t = Pa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = xu(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ae();
        return E(kw.Provider, { value: t, children: [e, !n && v(Iw, {})] });
      })),
      (Nw = Qb(
        Mw,
        [
          `.${Aw}, .${Aw} * { cursor: none !important; }`,
          `.${jw}, .${jw} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (Pw = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (Fw = `data-framer-portal-id`),
      (Iw = S(function () {
        let { onRegisterCursors: e } = c(kw),
          [n, r] = s(!1),
          a = pe(0),
          o = pe(0),
          l = pe(0),
          d = t(null),
          p = t({ cursors: {}, cursorHash: void 0 }),
          m = us();
        (f(() => {
          let e = G.matchMedia(`(any-hover: none)`);
          function t(e) {
            e.matches ? h(() => r(!1)) : r(!0);
          }
          return (
            e.addEventListener(`change`, t),
            e.matches || r(!0),
            () => {
              e.removeEventListener(`change`, t);
            }
          );
        }, []),
          i(() => {
            if (!n) return;
            let e = 0,
              t = 0;
            function r() {
              (a.set(e), o.set(t), De(l, 1, { type: `tween`, duration: 0.2 }));
            }
            let i = () => {
              if (Qe(p.current.cursors)) return;
              let n = Tu(e, t);
              n !== p.current.cursorHash && ((p.current.cursorHash = n), ke.update(() => m()));
            };
            function s(n) {
              if (n.pointerType === `touch`) {
                Pe(i);
                return;
              }
              (ke.read(i, !0), (e = n.clientX), (t = n.clientY), ke.update(r));
            }
            function c(e) {
              if (e.target === d.current || !d.current) return;
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
              ke.update(() => {
                d.current?.dispatchEvent(t);
              });
            }
            return (
              G.addEventListener(`pointermove`, s),
              document.addEventListener(`pointerdown`, c),
              document.addEventListener(`pointerup`, c),
              ke.read(i, !0),
              () => {
                (G.removeEventListener(`pointermove`, s),
                  document.removeEventListener(`pointerdown`, c),
                  document.removeEventListener(`pointerup`, c),
                  Pe(i));
              }
            );
          }, [l, a, o, m, n]),
          i(() => {
            if (!n) return;
            function e() {
              De(l, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              G.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), G.removeEventListener(`blur`, e));
              }
            );
          }, [l, n]),
          f(() => {
            function t(e) {
              ((p.current.cursors = e),
                (p.current.cursorHash = Qe(e) ? null : Tu(a.get(), o.get())),
                m());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(Aw, !1));
            };
          }, [a, o, e, m]));
        let { cursors: g, cursorHash: _ } = p.current,
          y = _ ? g[_] : null,
          b = Su(y);
        f(() => {
          n && document.body.classList.toggle(Aw, b);
        }, [b, n]);
        let x = y?.component,
          S = y?.transition ?? { duration: 0 },
          C = S.duration === void 0 ? S : { ...S, duration: S.duration * 1e3 },
          w = N(a, C),
          T = N(o, C),
          E = P(() => w.get() + (y?.offset?.x ?? 0)),
          O = P(() => T.get() + (y?.offset?.y ?? 0)),
          k = y?.alignment,
          A = y?.placement,
          ee = u((e, t) => `translate(${wu(A, k)}) ${t}`, [k, A]);
        return !n || !y || !x
          ? null
          : v(D, {
              children: v(x, {
                transformTemplate: ee,
                style: { ...Pw, x: E, y: O, opacity: l },
                globalTapTarget: !0,
                variant: y?.variant,
                ref: d,
                className: jw,
              }),
            });
      })),
      (Lw = `webPageId`),
      (Rw = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            B(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (B(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((E_ && !Nn()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(Ou(e), e), this.collectedLinks.set(Ou(t), t));
          let n = this.nestingInfo.get(Ou(e)) ?? new Set();
          (n.add(Ou(t)), this.nestingInfo.set(Ou(e), n));
        }
      }),
      (zw = new Rw()),
      (Bw = `element`),
      (Vw = `collection`),
      (Hw = `collectionItemId`),
      (Uw = `pathVariables`),
      (Ww = `framer/page-link,`),
      (Gw = d(void 0)),
      (Kw = `--text-selection-color`),
      (qw = `--text-selection-background-color`),
      (Jw = Qb(Ku, (e, t) => Gu(t?.triggerId), `InjectSelectionStyle`)),
      (Yw = `overlay`),
      (Xw = `template-overlay`),
      (Zw = class extends y {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((a.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(ct(D_ ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          cn(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (D_ && document.getElementById(`main`)?.innerHTML) || ``;
          return v(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ct()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (Qw = /:([a-z]\w*)/gi),
      ($w = d(void 0)),
      (eT = 500),
      (tT = 0.9),
      (nT = 1.7),
      (rT = 4),
      (iT = 1 / 0),
      (aT = new WeakMap()),
      (oT = new Set()),
      (sT = new Map()),
      (cT = !Bv || typeof IntersectionObserver > `u` ? null : nd()),
      (lT = Xu(
        x(function (
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
            motionChild: u,
            ...d
          },
          f
        ) {
          let p = kt(),
            m = jt(),
            h = ed(),
            { activeLocale: g, locales: _ } = Jr(),
            v = ld(),
            y = Wn(),
            x = ku(),
            S = ud({ nodeId: s, clickTrackingId: i, router: p, href: t, activeLocale: g }),
            C = l(() => {
              if (!t) return {};
              let e = Du(t) ? t : Iu(t);
              if (!e) return {};
              if (L(e))
                return md(
                  e,
                  p,
                  m,
                  {
                    openInNewTab: n,
                    trackLinkClick: S,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  y,
                  g?.id,
                  _,
                  h
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = v(i, s, g);
              if (at(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: f,
                  locale: b,
                } = Zu(p, m, e, g, c, h),
                x = id(n, !0),
                C = x === `_blank`,
                w = { pathVariables: f, locale: b },
                T = (e) => fd(p, l, () => y(l, w, !1, !C), d, f, r, e);
              return {
                href: u,
                target: x,
                onClick: pd(u, S, T),
                "data-framer-page-link-current": (m && td(m, e, h)) || void 0,
                navigate: T,
                preload: () => y(l, w, !0, !C),
                _routeId: l,
                _pathVariables: f,
                _locale: b,
              };
            }, [t, p, g, h, n, m, r, S, a, _, o, v, y]),
            w = Ks(b(e) && `ref` in e ? e.ref : void 0),
            { navigate: T, preload: E, _routeId: D, _pathVariables: O, _locale: k, ...A } = C;
          qs(
            w,
            (e) => {
              if (!(e === null || !D || !E || x))
                return cT?.(e, E, `${D}:${k?.id}:${JSON.stringify(O)}`);
            },
            [E, D, O, k, x]
          );
          let ee = !!T;
          return zu(
            gl(f).cloneAsArray(e, (e) => hd(e, { ...d, ..._d(A, u, ee) }, w)),
            c,
            s,
            t,
            C,
            w
          );
        })
      )),
      (uT = `framer`),
      (dT = 3),
      (fT = 30),
      (pT = 1e4),
      (mT = `__framer`),
      (hT = `3`),
      (gT = [
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
      (_T = Date.now()),
      (vT = {
        name: 0,
        value: 1,
        setAttribute: 2,
        valueProperty: 3,
        isInputEventTrusted: 4,
        inputChangeTimeSinceModuleLoad: 5,
        wasFilledBeforeHydration: 6,
      }),
      (yT = {
        fieldData: 0,
        fieldCount: 1,
        fieldFilledCount: 2,
        hpVersion: 3,
        siteId: 4,
        timeToSubmissionSinceModuleLoad: 5,
      }),
      (bT = () => ((Date.now() - _T) / 1e3).toFixed(2)),
      (xT = ({ inputStateRef: e }) => {
        let { inputRef: t, originalName: n } = e;
        return (
          j.useLayoutEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed;
            n.value && (r.wasFilledBeforeHydration = !0);
          }, [t, e]),
          j.useEffect(() => {
            let n = t.current;
            if (!n) return;
            let r = e.methodsUsed,
              i = Element.prototype.setAttribute,
              a = i.bind(n);
            n.setAttribute = function (e, t) {
              (e === `value` && ((r.setAttribute = !0), (r.inputChangeTimeSinceModuleLoad = bT())),
                a(e, t));
            };
            let o = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, `value`);
            o &&
              Object.defineProperty(n, "value", {
                configurable: !0,
                enumerable: !0,
                get: function () {
                  return o.get?.call(this) ?? ``;
                },
                set: function (e) {
                  ((r.valueProperty = !0),
                    (r.inputChangeTimeSinceModuleLoad = bT()),
                    o.set?.call(this, e));
                },
              });
            let s = (e) => {
              ((r.isInputEventTrusted = e.isTrusted), (r.inputChangeTimeSinceModuleLoad = bT()));
            };
            return (
              n.addEventListener(`input`, s),
              () => {
                ((n.setAttribute = i.bind(n)),
                  o && Object.defineProperty(n, "value", o),
                  n.removeEventListener(`input`, s));
              }
            );
          }, [t, e]),
          v(`input`, {
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
      (ST = { state: `pending` }),
      (CT = { state: `success` }),
      (wT = { state: `incomplete` }),
      (TT = { state: `complete` }),
      (ET = { state: `error` }),
      (DT = j.createContext(void 0)),
      (OT = j.forwardRef(function (
        {
          action: e,
          children: t,
          redirectUrl: n,
          onSuccess: r,
          onError: i,
          onLoading: a,
          submitTrackingId: o,
          nodeId: s,
          ...l
        },
        u
      ) {
        let d = j.useRef(null),
          f = u ?? d,
          {
            states: p,
            convertHoneypotFieldsForSubmission: m,
            replaceHoneypotWithMetadata: g,
          } = Ed(),
          _ = kt(),
          y = jt(),
          b = ed(),
          x = yn(),
          [S, C] = j.useReducer(Ad, wT),
          { activeLocale: w, locales: T } = Jr(),
          D = c(DT),
          O = j.useRef({ onSuccess: r, onError: i, onLoading: a });
        O.current = { onSuccess: r, onError: i, onLoading: a };
        let k = j.useRef(!1);
        async function A(e) {
          if (L(e)) {
            let t = Qu(_, e, b, T);
            if (!t) {
              Nd(e, f);
              return;
            }
            let { routeId: n, elementId: r, pathVariables: i } = t;
            _.navigate?.(n, r, i);
            return;
          }
          B(
            Du(e),
            () => `Expected link to be either a LinkToWebPage or a string: ${JSON.stringify(e)}`
          );
          let t = await sd(e.unresolvedPathSlugs, e.unresolvedHashSlugs, w, x),
            { routeId: n, elementId: r, pathVariables: i } = Zu(_, y, e, w, t, b);
          _.navigate?.(n, r, i);
        }
        let ee = async (t) => {
            if ((t.preventDefault(), !e || !D || k.current)) return;
            ((k.current = !0), m());
            let r = new FormData(t.currentTarget),
              i = Sd(t.currentTarget);
            (await zv({ priority: `user-visible`, continueAfter: `paint` }),
              g(r),
              h(() => C({ type: `submit` })),
              Td(r, G.document));
            for (let [e, t] of r) t instanceof File && r.delete(e);
            try {
              (O.current.onLoading?.(),
                Od({ router: _, nodeId: s, submitTrackingId: o, activeLocale: w }),
                await Fd(e, r, i, D),
                h(() => C({ type: `success` })),
                O.current.onSuccess?.(),
                n && (await A(n)));
            } catch (e) {
              (h(() => C({ type: `error` })), O.current.onError?.(), console.error(e));
            }
            k.current = !1;
          },
          te = (e) => {
            let { target: t, currentTarget: n, key: r } = e;
            t instanceof HTMLTextAreaElement ||
              (r === `Enter` && n.checkValidity() && (e.preventDefault(), ee(e)));
          },
          ne = async (e) => {
            let t = e.currentTarget;
            (await zv({ priority: `background`, continueAfter: `paint` }),
              h(() => C({ type: Pd(t) ? `incomplete` : `complete` })));
          };
        return E(M.form, {
          ...l,
          onSubmit: jd(S) ? ee : Md,
          onKeyDown: te,
          onChange: ne,
          ref: f,
          children: [t(S), v(Dd, { states: p })],
        });
      })),
      (kT = `__framer_force_showing_editorbar_since`),
      (AT = class extends y {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (jT = () => {
        try {
          return !!localStorage[kT];
        } catch {
          return !1;
        }
      }),
      (MT = () => !jT()),
      (NT = (() => {
        let e = d(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (PT = `main`),
      (FT = `framerGeneratedPage`),
      (IT = `<!-- Start of headStart -->`),
      (LT = `<!-- End of headStart -->`),
      (RT = `<!-- Start of headEnd -->`),
      (zT = `<!-- End of headEnd -->`),
      (BT = `<!-- Start of bodyStart -->`),
      (VT = `<!-- End of bodyStart -->`),
      (HT = `<!-- Start of bodyEnd -->`),
      (UT = `<!-- End of bodyEnd -->`),
      (WT = j.createContext(void 0)),
      (GT = null),
      (KT = null),
      k_(nf),
      (qT = (e, n, r, o, s, l) => {
        let u = c(DT),
          d = t(),
          f = yn(),
          p = t(!0);
        return (
          i(() => {
            function t() {
              (!GT || !KT) && nf();
              let t = r ? new URL(r, G.location.href) : G.location,
                i = {
                  version: lv,
                  abTestId: e?.abTestId,
                  framerSiteId: u ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: s?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: GT,
                  locale: KT,
                },
                a = p.current && l !== void 0 ? l : void 0;
              return e?.collectionId && o
                ? (async () => {
                    let t = a ?? null;
                    if (a === void 0) {
                      let n = e.collectionId && f?.get(e.collectionId),
                        [r] = Object.values(o);
                      if (n && L(r)) {
                        let e = n.getRecordIdBySlug(r, s || void 0);
                        t = (at(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...i, collectionItemId: t };
                  })()
                : i;
            }
            (async () => {
              let e = (d.current = t()),
                n = e instanceof Promise ? await e : e;
              ((d.current = n),
                p.current ? (p.current = !1) : cn(`published_site_pageview`, n, `eager`));
            })();
            let i = async (e) => {
              if (e.persisted) {
                let e = (d.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((d.current = n), cn(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              a.addEventListener(`pageshow`, i),
              () => {
                a.removeEventListener(`pageshow`, i);
              }
            );
          }, [e, n, r, o, s, u, f, l]),
          d
        );
      }),
      (JT = 0),
      (YT = 500),
      (XT = 200),
      (ZT = { status: `loading`, data: void 0 }),
      (QT = 5e3),
      ($T = () => {}),
      (eE = class e {
        static cacheKey = `framer-fetch-client-cache`;
        responseValues = new Map();
        #e = new Map();
        #t = new Set();
        #n = new Map();
        #r = new Map();
        #i = new Map();
        #a = new Map();
        unmount() {
          for (let [e, t] of this.#a) (clearInterval(t), this.#a.delete(e));
        }
        stopQueryRefetching(e) {
          let t = Mf(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = Mf(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = G.setInterval(() => {
            if (document.visibilityState === `hidden`) return;
            let n = this.#r.get(t);
            !r || !n || this.fetchWithCache({ ...e, cacheDuration: r });
          }, r);
          this.#a.set(t, i);
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
              If(r, i) ||
                (this.#r.set(e, r),
                this.#n.set(e, i),
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
          let n = this.#e.get(e);
          if (n) for (let e of n) e();
        }
        persistCache = dl(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && If(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!An() || !ju(e.url, !1)) return;
          let t = Mf(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = Ff(n, e);
          return (e.resultOutputType === `image` && L(i) && (await kf(i).catch($T)), i);
        }
        async fetchWithCache(e) {
          if (!An()) return;
          let t = Mf(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && If(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, ZT);
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
                this.#r.set(t, Date.now()));
            } catch (e) {
              this.setResponseValue(t, { status: `error`, error: e, data: void 0 });
            }
          })();
          return (
            this.#i.set(t, a),
            a.finally(() => {
              this.#i.delete(t);
            }),
            a
          );
        }
        getValue(e, t = !1) {
          if (!(t && !this.#t.has(e))) return this.responseValues.get(e);
        }
        subscribe(e, t, n = !1) {
          let { url: r, cacheDuration: i } = e;
          if (!ju(r, !1)) return $T;
          let a = Mf(e),
            o = this.#n.get(a);
          ((!o || i < o) && this.#n.set(a, i),
            n || (this.startQueryRefetching(e), this.fetchWithCache(e)));
          let s = this.#e.get(a) ?? new Set();
          return (
            s.add(t),
            this.#e.set(a, s),
            () => {
              let n = this.#e.get(a);
              n &&
                (n.delete(t),
                n.size === 0 && this.#e.delete(a),
                this.#e.size === 0 && this.stopQueryRefetching(e));
            }
          );
        }
      }),
      (tE = d(void 0)),
      (nE = d(!0)),
      (rE = ({ children: e, client: t }) => {
        let [n] = s(() => t ?? new eE()),
          [r, a] = s(!0);
        return (
          i(
            () => (
              n.hydrateCache(),
              h(() => {
                a(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          v(nE.Provider, { value: r, children: v(tE.Provider, { value: n, children: e }) })
        );
      }),
      (Le.WillChange = Ue),
      (iE = Xu(
        x(function ({ links: e, children: t, ...n }, r) {
          return gl(r)(t(Rf((t) => e.map(t), [e])), n);
        })
      )),
      (aE = { priority: void 0, canYield: !0 }),
      (oE = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return rp(e, t);
            case `boolean`:
              return ap(e);
            case `color`:
              return cp(e);
            case `date`:
              return up(e);
            case `enum`:
              return fp(e);
            case `file`:
              return mp(e);
            case `link`:
              return gp(e);
            case `number`:
              return vp(e);
            case `object`:
              return xp(e, t);
            case `responsiveimage`:
              return Cp(e);
            case `richtext`:
              return Tp(e);
            case `string`:
              return kp(e);
            case `vectorsetitem`:
              return Dp(e);
            case `unknown`:
              return e;
            default:
              V(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Xe(e)
            ? { type: `boolean`, value: e }
            : nt(e)
              ? { type: `date`, value: e.toISOString() }
              : R(e)
                ? { type: `number`, value: e }
                : L(e)
                  ? { type: `string`, value: e }
                  : Ze(e)
                    ? { type: `array`, value: e.map(oE.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && jp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && jp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && jp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && jp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && jp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => oE.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => oE.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = Ap(e),
            i = Ap(t);
          return et(r) || et(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = Ap(e),
            i = Ap(t);
          return et(r) || et(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = Ap(e),
            i = Ap(t);
          return et(r) || et(i)
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
              return `[${e.value.map(oE.stringify).join(`, `)}]`;
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
              return L(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              V(e);
          }
        },
      }),
      (sE = { type: `unknown`, isNullable: !0 }),
      (cE = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = Po(e);
          B(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (B(n !== `array`, `Array properties are not supported`),
              B(n !== `object`, `Object properties are not supported`),
              (r[e] = { type: n, isNullable: !0 }));
          }
          this.schema = r;
        }
        collection;
        locale;
        schema;
        indexes = [];
        getDatabaseItem(e, t) {
          let n = {},
            r = Number(t);
          for (let t in this.schema) {
            let i = e[t];
            if (tt(i)) continue;
            let a = this.schema[t];
            if (!$e(a)) {
              if ((B(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await Mp(this.collection, this.locale))[t]?.[n];
          return K_.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await Mp(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = Uf(e);
            i && (await i);
            let a = t[r];
            B(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await Mp(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = Uf(t);
            e && (await e);
            let a = n[Number(i)];
            (B(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (lE = new Map()),
      (uE = new WeakMap()),
      (dE = `$r_`),
      (fE = new Map()),
      (pE = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = Gp(e, t)), (this.priority = zp(n)));
        }
        *resolveArrayValue(e) {
          return yield* Jf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* qf(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          B(Hp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          B(n, `Can't find collection for rich text pointer`);
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
          return it(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          B(Wp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (B(n, `Can't find collection for vector set item pointer`),
            B(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
          return it(t) ? yield t : t;
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
      (mE = `index`),
      (hE = class extends Set {
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
          return (e.sort((e, t) => e - t), W(this.name, ...e));
        }
      }),
      (gE = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new vE();
        fields = new Q();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (_E = class {
        constructor(e, t, n, r, i, a) {
          ((this.id = e),
            (this.data = t),
            (this.collection = n),
            (this.lookupNodes = r),
            (this.constraint = i),
            (this.ordering = a));
          for (let e in t.schema) {
            let t = n.getFieldByName(e);
            t && this.resolvedFields.add(t);
          }
        }
        id;
        data;
        collection;
        lookupNodes;
        constraint;
        ordering;
        resolvedFields = new Q();
      }),
      (vE = class extends hE {
        name = `Indexes`;
      }),
      (yE = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          B(this.name, `Can only get value of field with a name`);
          let t = e.data[this.name];
          return t ? this.wrapPointers(t) : null;
        }
        wrapPointers(e) {
          switch (e?.type) {
            case `array`:
              return { type: `array`, value: e.value.map((e) => this.wrapPointers(e)) };
            case `object`: {
              let t = {};
              for (let n in e.value) t[n] = this.wrapPointers(e.value[n]);
              return { type: `object`, value: t };
            }
            case `richtext`:
              return (
                B(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: Vp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                B(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: Up(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Q = class extends hE {
        name = `Fields`;
      }),
      (bE = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return W(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (xE = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return W(`Ordering`, ...this.fields);
        }
        push(e) {
          this.fields.push(e);
        }
        merge(e) {
          this.fields.push(...e.fields);
        }
        equals(e) {
          return this === e || (this.length === e.length && this.getHash() === e.getHash());
        }
        providedByFields(e) {
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== mE) return !1;
          return !0;
        }
      }),
      (SE = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return W(`RequiredProps`, this.ordering, this.resolvedFields);
        }
        get isMinimal() {
          return this.ordering.length === 0 && this.resolvedFields.size === 0;
        }
        canProvide(e) {
          return this.canProvideOrdering(e) && this.canProvideResolvedFields(e);
        }
        canProvideOrdering(e) {
          return this.ordering.length === 0 || e.canProvideOrdering(this.ordering);
        }
        canProvideResolvedFields(e) {
          return this.resolvedFields.size === 0 || e.canProvideResolvedFields(this.resolvedFields);
        }
      }),
      (CE = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (B(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (B(!this.node, `Node already set`), (this.node = e));
        }
        ordering;
        setOrdering(e) {
          this.ordering = e;
        }
        fields = [];
        fieldsByName = new Map();
        push() {
          return new e(this);
        }
        replace() {
          return new e(this.parent);
        }
        addField(e) {
          this.fields.push(e);
          let t = this.fieldsByName.get(e.name);
          t ? t.push(e) : this.fieldsByName.set(e.name, [e]);
        }
        addFieldsFromScope(e) {
          for (let t of e.fields) this.fields.push(t);
          for (let [t, n] of e.fieldsByName) {
            let e = this.fieldsByName.get(t);
            e ? e.push(...n) : this.fieldsByName.set(t, n.slice());
          }
        }
        resolveField(e, t) {
          let n = this.fieldsByName.get(e);
          if (n) {
            let e;
            for (let r of n)
              if (!(t && r.collectionName !== t)) {
                if (e) throw Error(`Ambiguous fields`);
                e = r;
              }
            if (e) return e;
          }
          return this.parent?.resolveField(e, t);
        }
        has(e) {
          return this.fieldsByName.get(e.name)?.includes(e) ? !0 : (this.parent?.has(e) ?? !1);
        }
        getRequiredOrdering() {
          return this.ordering ?? new xE();
        }
        getRequiredResolvedFields() {
          let e = new Q();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new SE(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          B(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (B(e, `Field must exist`), e.field);
        }
      }),
      (wE = 1e3),
      ($ = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = Yp(),
            i = Xp(),
            a = t * r + n / i;
          return new e(a);
        }
        static max(t, n) {
          let r = Math.max(t.network, n.network);
          return new e(r);
        }
        static compare(e, t) {
          return e.network < t.network ? -1 : +(e.network > t.network);
        }
        add(e) {
          return ((this.network += e.network), this);
        }
        toString() {
          return `${this.network}ms`;
        }
      }),
      (TE = class {
        pointers = new Map();
        values = new Map();
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
      (EE = class e {
        constructor(e, t = []) {
          ((this.fields = e), (this.tuples = t));
        }
        fields;
        tuples;
        push(e) {
          this.tuples.push(e);
        }
        filter(t) {
          let n = this.tuples.filter(t);
          return new e(this.fields, n);
        }
        map(t, n) {
          let r = this.tuples.map(n);
          return new e(t, r);
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
          let n = new Q();
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
          let n = new Q();
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
      (DE = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (OE = class extends DE {
        group;
        getGroup() {
          return (B(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (B(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return Wf(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return Gf(this.evaluate(void 0), void 0, e);
        }
      }),
      (kE = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return W(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (AE = class e extends OE {
        constructor(e, t, n) {
          let r = e.isSynchronous;
          for (let e of t) r &&= e.input.isSynchronous;
          (super(r),
            (this.input = e),
            (this.projections = t),
            (this.passthrough = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        projections;
        passthrough;
        inputGroup;
        getHash() {
          return W(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
        }
        getOutputFields() {
          let e = new Q();
          e.merge(this.passthrough);
          for (let t of this.projections) e.add(t.field);
          return e;
        }
        canProvideOrdering(e) {
          let t = new Q();
          for (let e of this.projections) t.add(e.field);
          for (let { field: n } of e.fields) if (t.has(n)) return !1;
          return !0;
        }
        canProvideResolvedFields() {
          return !0;
        }
        getInputRequiredProps(e) {
          let t = new Q(e.resolvedFields);
          for (let e of this.projections) (t.merge(e.input.referencedFields), t.delete(e.field));
          return new SE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = new $(0);
          for (let t of this.projections) {
            let n = t.input.optimize(e);
            i = $.max(i, n);
          }
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new kE(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* Jf(
              n.tuples.map((t) =>
                Jf(
                  this.projections.map((n) => qf({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new TE();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            B(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (jE = { type: 0 }),
      (ME = class extends DE {
        constructor(e, t, n) {
          (super(n),
            (this.referencedFields = e),
            (this.referencedOuterFields = t),
            (this.isSynchronous = n));
        }
        referencedFields;
        referencedOuterFields;
        isSynchronous;
        evaluateSync() {
          return Wf(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return Gf(this.evaluate(void 0, void 0));
        }
      }),
      (NE = { type: 0 }),
      (PE = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return W(`CaseCondition`, this.when, this.then);
        }
      }),
      (FE = class e extends ME {
        constructor(e, t, n) {
          let r = new Q(),
            i = new Q(),
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
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return W(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new $(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new PE(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* qf({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: Jf(
              this.conditions.map((n) =>
                qf({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (oE.equal(n, e, NE)) return t;
          } else for (let { when: e, then: t } of r) if (op(e)) return t;
          return i;
        }
      }),
      (IE = class {
        constructor(e, t, n) {
          ((this.normalizer = e), (this.query = t), (this.locale = n));
        }
        normalizer;
        query;
        locale;
        collectionId = 0;
        indexId = 0;
        fieldId = 0;
        subqueries = [];
        build() {
          let e = new CE();
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
            a = new Q(),
            o;
          if (t.orderBy) {
            o = new xE();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if ($e(t)) continue;
                a.add(t.field);
                let r = new bE(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new yE(Jp(this.fieldId++), void 0, t.definition, void 0),
                  a = new kE(t, r);
                i.push(a);
                let s = new bE(r, e.direction);
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
            a = new Q(n),
            o = [...r];
          for (let n of t)
            if (n.type === `Identifier`) {
              let t = e.resolveField(n.name, n.collection);
              if ($e(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              B(n.alias, `Subqueries should have an alias`);
              let r = Jp(this.fieldId++),
                a = n.alias,
                s = new yE(r, a, t.definition, void 0),
                c = new kE(t, s);
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
              V(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = Ip(t.data, this.locale),
            i = t.alias,
            a = new gE(Kp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new yE(Jp(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new yE(Jp(this.fieldId++), mE, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: mE, collectionName: i });
            let t = new xE(),
              r = new bE(e);
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
            let i = new xE(),
              o = new _E(qp(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new xE(),
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
              V(t.type, `Unsupported join type`);
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
              V(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(sE, null);
        }
        buildLiteralValue(e) {
          let t = oE.parse(e.value);
          return this.normalizer.newScalarConstant(sE, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (B(r, `Missing argument`), this.buildExpression(e, r));
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
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                B(n, `Missing argument`),
                B(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              V(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new LE(e);
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
            let n = new LE(e);
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
              (t) => new PE(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              V(t.operator, `Unsupported unary operator`);
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
              V(t.operator, `Unsupported binary operator`);
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
      (LE = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Q();
        referencedOuterFields = new Q();
      }),
      (RE = class e extends OE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.predicate = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        predicate;
        inputGroup;
        getHash() {
          return W(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          let t = new Q(e.resolvedFields);
          return (t.merge(this.predicate.referencedFields), new SE(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* Jf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => op(n[t] ?? null));
        }
      }),
      (zE = class e extends OE {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return W(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return $.estimate(1, e ? 100 * wE : 50 * wE);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, Vf()),
            i = Vf(),
            a = [];
          for (let n of r) {
            let r = Uf(i);
            r && (yield r);
            let o = new TE();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new EE(n, a);
        }
      }),
      (BE = class e extends OE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
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
          return new SE(new xE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* qf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (VE = class e extends OE {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return W(`RelationalScan`, this.collection.id);
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
          return $.estimate(1, 200 * wE);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(Vf()),
            r = Vf(),
            i = [];
          for (let a of n) {
            let n = Uf(r);
            n && (yield n);
            let o = new TE();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new EE(t, i);
        }
      }),
      (HE = class e extends OE {
        constructor(e, t) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
        }
        getOutputFields() {
          let e = new Q(),
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
          return new SE(new xE(), e.resolvedFields);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(t),
            a = e.optimizeGroup(this.rightGroup, i);
          return $.max(r, a);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* qf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (UE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: op(n) && op(r) };
        }
      }),
      (WE = class extends ME {
        constructor(e, t) {
          let n = new Q(),
            r = new Q();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return W(`ScalarConstant`, this.definition, this.value);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate() {
          return this.value;
        }
      }),
      (GE = { type: 0 }),
      (KE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* qf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.contains(n, r, GE) };
        }
      }),
      (qE = { type: 0 }),
      (JE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* qf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.endsWith(n, r, qE) };
        }
      }),
      (YE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.equal(n, r, jE) };
        }
      }),
      (XE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.greaterThan(n, r, jE) };
        }
      }),
      (ZE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.greaterThanOrEqual(n, r, jE) };
        }
      }),
      (QE = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.lessThan(n, r, jE) };
        }
      }),
      ($E = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.lessThanOrEqual(n, r, jE) };
        }
      }),
      (eD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !oE.equal(n, r, jE) };
        }
      }),
      (tD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: op(n) || op(r) };
        }
      }),
      (nD = { type: 0 }),
      (rD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* qf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.startsWith(n, r, nD) };
        }
      }),
      (iD = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof RE) {
            if (e.predicate instanceof UE) {
              let n = new BE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof tD) {
              let n = new HE(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof VE)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new zE(n, Zp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof RE) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof VE)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof YE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof eD &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof QE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $E &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof XE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ZE &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof WE &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof KE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WE &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rD &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WE &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof JE &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof WE &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = Zp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new zE(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (aD = class {
        constructor(e, t) {
          ((this.id = e), (this.relational = t));
        }
        id;
        relational;
        nodes = [];
        winners = new Map();
        addNode(e) {
          (this.nodes.push(e), e.setGroup(this));
        }
        getWinner(e) {
          let t = e.getHash(),
            n = this.winners.get(t);
          if (n) return n;
          let r = new oD();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          B(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (oD = class {
        node;
        cost = new $(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), $.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (sD = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (cD = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new aD(Qp(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new sD(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            B(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (lD = class e extends OE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous && n.isSynchronous),
            (this.left = e),
            (this.right = t),
            (this.constraint = n),
            (this.leftGroup = e.getGroup()),
            (this.rightGroup = t.getGroup()));
        }
        left;
        right;
        constraint;
        leftGroup;
        rightGroup;
        getHash() {
          return W(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
        }
        getOutputFields() {
          let e = new Q();
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
          let n = new Q(),
            r = e.relational.outputFields;
          for (let e of t.resolvedFields) r.has(e) && n.add(e);
          for (let e of this.constraint.referencedFields) r.has(e) && n.add(e);
          return new SE(new xE(), n);
        }
        optimize(e, t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = e.optimizeGroup(this.leftGroup, n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = e.optimizeGroup(this.rightGroup, i),
            o = this.constraint.optimize(e);
          return $.max($.max(r, a), o);
        }
        getOptimized(t) {
          let n = this.getChildRequiredProps(this.leftGroup, t),
            r = this.leftGroup.getOptimized(n),
            i = this.getChildRequiredProps(this.rightGroup, t),
            a = this.rightGroup.getOptimized(i),
            o = this.constraint.getOptimized();
          return new e(r, a, o);
        }
        *evaluateScalarEquals(e, t, n, r, i) {
          let a = new Map();
          for (let e of t.tuples) {
            let t = yield* r.evaluate(i, e),
              n = JSON.stringify(t?.value ?? null),
              o = a.get(n) ?? [];
            (o.push(e), a.set(n, o));
          }
          let o = new EE(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new TE();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* qf({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof YE) {
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
          let r = new EE(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new TE();
              (n.merge(i),
                n.merge(a),
                op(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (uD = class e extends OE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.limit = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        limit;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          let t = new Q(e.resolvedFields);
          return (t.merge(this.limit.referencedFields), new SE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* qf({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = yp(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (dD = class e extends OE {
        constructor(e, t, n) {
          (super(e.isSynchronous && t.isSynchronous),
            (this.input = e),
            (this.offset = t),
            (this.ordering = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        offset;
        ordering;
        inputGroup;
        getHash() {
          return W(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          let t = new Q(e.resolvedFields);
          return (t.merge(this.offset.referencedFields), new SE(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new $(0).add($.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* qf({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = yp(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (fD = class e extends ME {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.namedFields = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
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
        input;
        namedFields;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          let e = {},
            t = Object.entries(this.namedFields);
          for (let [n, r] of t) e[n] = r.id;
          return W(
            `ScalarArray`,
            this.inputGroup.id,
            e,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q(),
            t = Object.values(this.namedFields);
          for (let n of t) $e(n.collection) || e.add(n);
          return new SE(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.namedFields,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new TE();
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
      (pD = class e extends ME {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            B(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return W(`ScalarCast`, this.input, this.definition);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t, this.definition);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return oE.cast(n, this.definition);
        }
      }),
      (mD = class e extends ME {
        constructor(e, t, n, r, i) {
          (super(r, i, e.isSynchronous),
            (this.input = e),
            (this.field = t),
            (this.ordering = n),
            (this.referencedFields = r),
            (this.referencedOuterFields = i),
            (this.inputGroup = e.getGroup()),
            (this.definition = { type: `array`, isNullable: !1, definition: t.definition }));
        }
        input;
        field;
        ordering;
        referencedFields;
        referencedOuterFields;
        inputGroup;
        definition;
        getHash() {
          return W(
            `ScalarFlatArray`,
            this.inputGroup.id,
            this.field.id,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        getInputRequiredProps() {
          let e = new Q();
          return ($e(this.field.collection) || e.add(this.field), new SE(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new $(0).add(n);
        }
        getOptimized() {
          let t = this.getInputRequiredProps(),
            n = this.inputGroup.getOptimized(t);
          return new e(
            n,
            this.field,
            this.ordering,
            this.referencedFields,
            this.referencedOuterFields
          );
        }
        *evaluate(e, t) {
          let n = new TE();
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
      (hD = { type: 0 }),
      (gD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: oE.in(n, r, hD) };
        }
      }),
      (_D = { type: 1 }),
      (vD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* qf({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: oE.indexOf(n, r, _D) };
        }
      }),
      (yD = class extends Error {}),
      (bD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = {
          type: `array`,
          definition: { type: `string`, isNullable: !1 },
          isNullable: !1,
        };
        getHash() {
          return W(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = em(n),
            a = em(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (xD = class e extends ME {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return W(`ScalarLength`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          let n = yield* this.input.evaluate(e, t);
          return { type: `number`, value: oE.length(n) };
        }
      }),
      (SD = class e extends ME {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !op(yield* this.input.evaluate(e, t)) };
        }
      }),
      (CD = { type: 0 }),
      (wD = class e extends ME {
        constructor(e, t) {
          let n = new Q();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Q();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return W(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return $.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* qf({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !oE.in(n, r, CD) };
        }
      }),
      (TD = class extends ME {
        constructor(e, t) {
          B(e.name !== mE, `Invalid field name`);
          let n = new Q(),
            r = new Q();
          (t ? r.add(e) : n.add(e),
            super(n, r, !0),
            (this.field = e),
            (this.isOuterField = t),
            (this.definition = e.definition));
        }
        field;
        isOuterField;
        definition;
        getHash() {
          return W(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new $(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (B(e, `Context must exist`), e.getValue(this.field))
            : (B(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (ED = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new VE(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new zE(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new lD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof WE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof lD && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new RE(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new AE(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof AE &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new uD(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new dD(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof WE) &&
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
          let n = new TD(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new WE(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof SD)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof YE) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof eD) return this.newScalarEquals(e.left, e.right);
          if (e instanceof QE) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof $E) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof XE) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof ZE) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof UE) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof tD) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new SD(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof WE && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof WE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof WE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof WE && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new UE(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof WE && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof WE && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof WE && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof WE && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new tD(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new YE(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new eD(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new QE(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new $E(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new XE(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof TD;
          if (t instanceof TD && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ZE(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new gD(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new wD(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new PE(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new FE(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new KE(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new rD(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new JE(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new xD(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new vD(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new fD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new mD(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new bD(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new pD(e, t);
          return this.finishScalar(n);
        }
      }),
      (DD = class extends OE {}),
      (OD = class e extends DD {
        constructor(e, t, n) {
          (super(!1),
            (this.input = e),
            (this.fields = t),
            (this.resolver = n),
            (this.inputGroup = e.getGroup()));
        }
        input;
        fields;
        resolver;
        inputGroup;
        getHash() {
          return W(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          let t = new Q();
          return new SE(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return $.estimate(0, 100 * wE).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          B(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            B(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Q()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) tm(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                B(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new TE();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (B(s, `Item not found`), B(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (kD = { type: 0 }),
      (AD = class e extends DD {
        constructor(e, t) {
          (super(e.isSynchronous),
            (this.input = e),
            (this.ordering = t),
            (this.inputGroup = e.getGroup()));
        }
        input;
        ordering;
        inputGroup;
        getHash() {
          return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
          let t = new Q(e.resolvedFields);
          for (let { field: e } of this.ordering.fields)
            e.name !== mE && ($e(e.collection) || t.add(e));
          return new SE(new xE(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new $(0).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.ordering);
        }
        *evaluate(e) {
          return (yield* this.input.evaluate(e)).sort((e, t) => {
            for (let { field: n, direction: r } of this.ordering.fields) {
              let i = r === `asc`;
              if (n.name === mE) {
                let r = n.collection;
                B(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                B(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                B(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!oE.equal(a, o, kD)) {
                if (et(a) || oE.lessThan(a, o, kD)) return i ? -1 : 1;
                if (et(o) || oE.greaterThan(a, o, kD)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (jD = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new cD();
        normalizer = new ED(this.memo);
        explorer = new iD(this.normalizer);
        optimize(e) {
          let t = new IE(this.normalizer, this.query, this.locale).build(),
            n = Uf(e);
          return n ? n.then(() => this.optimizeBuiltQuery(t)) : this.optimizeBuiltQuery(t);
        }
        optimizeBuiltQuery(e) {
          let t = e.takeNode().getGroup(),
            n = e.getRequiredProps();
          return (this.optimizeGroup(t, n), [t.getOptimized(n), e.getNamedFields()]);
        }
        optimizeGroup(e, t) {
          let n = e.getWinner(t);
          if (n.node) return n.cost;
          let r = e.nodes[0];
          (B(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new OD(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new AD(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (MD = zf(`query-engine`)),
      (ND = class {
        async evalQuery(e, t, n, r) {
          MD.enabled &&
            MD.debug(`Query:
${mm(e)}`);
          let i = new pE(e, t, r),
            a = new jD(e, t, i),
            o = Uf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = at(s) ? await s : s,
            u = Uf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = Uf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(qf(a, r)));
          }
          let h = Kf(Jf(m, r), r);
          return n ? [at(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new pE(t, n, r);
          return Kf(
            Jf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return qf(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (PD = dv.QueryCache),
      (FD = class {
        constructor(e, t = 1 / 0) {
          ((this.queryEngine = e), (this.maxSize = t));
        }
        queryEngine;
        maxSize;
        cache = new Map();
        serializedCache = mv === void 0 ? void 0 : new Map();
        clear() {
          (this.cache.clear(), this.serializedCache?.clear());
        }
        prune() {
          if (!(this.cache.size <= this.maxSize))
            for (let [e, t] of this.cache) {
              if (this.cache.size <= this.maxSize) break;
              t.value.state !== `pending` &&
                (this.cache.delete(e), this.serializedCache?.delete(e));
            }
        }
        get(e, t, n) {
          let r = _m(e, t),
            i = this.cache.get(r);
          if (i) {
            let a = Bp(n) ?? `user-visible`,
              o = Bp(i.priority);
            if (o === void 0 && n !== void 0 && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, n));
            if (o !== void 0 && Bn(a, o) && i.value.state === `pending`)
              return (this.cache.delete(r), this.get(e, t, a));
            if (
              (this.cache.delete(r),
              this.cache.set(r, i),
              mv !== void 0 &&
                this.serializedCache !== void 0 &&
                !Np(r) &&
                i.value.state === `fulfilled`)
            ) {
              let e = this.serializedCache.get(r);
              e !== void 0 && mv.set(PD, r, e);
            }
            return i.value;
          }
          let a = new K_(() => {
            let i = Np(r),
              a = i ? void 0 : mn(PD, r);
            if (a)
              try {
                return this.queryEngine.resolveSerializableQueryResult(a, e, t);
              } catch (e) {
                fn(e, r);
              }
            return mv !== void 0 && !i
              ? this.queryEngine
                  .serializeableQuery(e, t, n)
                  .then(([e, t]) => (this.serializedCache?.set(r, t), mv.set(PD, r, t), e))
              : this.queryEngine.query(e, t, n);
          });
          return (this.cache.set(r, { value: a, priority: n }), this.prune(), a);
        }
      }),
      (ID = new FD(new ND())),
      (LD = `style[data-framer-breakpoint-css]`),
      (RD = `page`),
      (zD = Symbol(`cycle`)),
      (HD = (() => {
        let e = d(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      (UD = j.createContext(void 0)),
      (WD = () => j.useContext(UD)),
      (GD = {
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
      (KD = {
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
      (qD = GD),
      (JD = `System Default`),
      (YD = class {
        name = `local`;
        fontFamilies = [];
        byFamilyName = new Map();
        fontAliasBySelector = new Map();
        fontAliases = new Map();
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
          for (let t of Object.keys(qD)) {
            let n = qD[t];
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
          for (let [e, t] of Object.entries(KD)) this.addFontAlias(e, t);
          let { fontFamily: t, aliases: n } = this.getSystemFontFamily();
          this.addFontFamily(t);
          for (let [e, t] of n) this.addFontAlias(e, t);
          return (e.push(...t.fonts), e);
        }
        addFontAlias(e, t) {
          (this.fontAliases.set(e, t), this.fontAliasBySelector.set(t, e));
        }
        getSystemFontFamily() {
          let e = { name: JD, fonts: [], source: this.name },
            t = new Map(),
            n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
          for (let r of [`normal`, `italic`])
            for (let i of n) {
              let n = ah(i, r),
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
      (XD = {
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
      (ZD = class extends Map {
        _hash = 0;
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
      ($D = `Variable`),
      (eO = `BI;`),
      (tO = class {
        name = `builtIn`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetByKey = new Map();
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
              l = uh(n),
              u = mh(o),
              d = {
                assetKey: n.key,
                family: i,
                selector: this.createSelector(r, c, e.font.fontVersion),
                variant: c,
                file: l,
                hasOpenTypeFeatures: ph(a),
                variationAxes: u,
                category: e.font.fontCategory,
                weight: s ? vh(u, e.font.faceDescriptors?.weight) : _h(c),
                style: bh(c),
                cssFamilyName: dh(r, s),
              };
            (i.fonts.push(d), this.assetByKey.set(n.key, n), t.push(d));
          }
          for (let e of this.fontFamilies)
            e.fonts.sort((e, t) => {
              let n = _h(e.variant),
                r = _h(t.variant);
              return !n || !r ? 1 : n - r;
            });
          return t;
        }
        static parseVariant(e) {
          let t = yh(e);
          return {
            weight: t === `variable` || t === `variable-italic` ? 400 : nO[t],
            style: bh(e),
          };
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
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ph(t)
            ? t?.map((e) => {
                if (hh(e)) return { tag: e.tag, coverage: e.coverage };
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
          return `${eO}${e}/${t}/${n}`;
        }
        parseSelector(e) {
          if (!e.startsWith(eO)) return null;
          let [t, n] = e.split(eO);
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
      (nO = {
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
      (rO = zf(`custom-font-source`)),
      (iO = `CUSTOM;`),
      (aO = `CUSTOMV2;`),
      (oO = class e {
        name = `custom`;
        fontFamilies = [];
        byFamilyName = new Map();
        assetsByKey = new Map();
        debugByFamily = new Map();
        debugFamilies;
        importFonts(t) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear(), this.assetsByKey.clear());
          let n = {},
            r = new Map();
          for (let i of t) {
            if (!this.isValidCustomFontAsset(i)) continue;
            let { family: t, variant: a, weight: o, style: s } = Ah(i.properties.font),
              c = i.properties.font.variationAxes,
              l = Array.isArray(c),
              u = i.properties.font.openTypeData,
              d = uh(i),
              f = Nh(i),
              p = kh(i.properties),
              m = e.createLegacySelector(p),
              h = this.createFontFamily(t),
              g = e.createSelector(h.name, a),
              _ = {
                assetKey: i.key,
                family: h,
                selector: g,
                variant: a,
                weight: o,
                style: s,
                file: d,
                hasOpenTypeFeatures: ph(u),
                variationAxes: mh(c),
                owner: f,
                alternativeSelectors: {
                  [m]: {
                    variant: l ? `variable` : this.inferVariantName(p),
                    cssFamilyName: e.cssFontFamilyFromSelector(m),
                  },
                },
                cssFamilyName: e.cssFontFamilyFromSelector(g),
              },
              v = Oh(h.fonts, _);
            if (v?.projectDuplicate) _.owner === `team` && ((h.fonts[v.index] = _), (n[g] = _));
            else if (v) {
              rO.debug(`Duplicate font found for:`, _, `with existing font:`, v.existingFont);
              let e = v.existingFont,
                t = _.file?.endsWith(`.woff2`) ?? !1,
                r = e.file?.endsWith(`.woff2`) ?? !1,
                i = t && !r,
                a = t === r,
                o = _.owner === `team` || e.owner !== `team`;
              (i || (a && o)) && ((h.fonts[v.index] = _), (n[g] = _));
            } else (h.fonts.push(_), (n[g] = _));
            (this.assetsByKey.set(i.key, i),
              Ph(r, t, a).fonts.push({ font: _, asset: i, selected: !1 }));
          }
          for (let e of this.fontFamilies) e.fonts.length > 0 && Mh(e);
          return ((this.debugByFamily = r), (this.debugFamilies = void 0), Object.values(n));
        }
        getDebugFamilies() {
          if (this.debugFamilies) return this.debugFamilies;
          let e = new Set();
          for (let t of this.fontFamilies)
            for (let n of t.fonts) n.assetKey && n.owner && e.add(`${n.assetKey}:${n.owner}`);
          return ((this.debugFamilies = Fh(this.debugByFamily, e)), this.debugFamilies);
        }
        static createSelector(e, t) {
          return `${aO}${e}${t ? ` ${t}` : ``}`;
        }
        static createLegacySelector(e) {
          return `${iO}${e}`;
        }
        static cssFontFamilyFromSelector(e) {
          return (
            B(Th(e), `Selector must be a custom font selector`),
            Dh(e) ? e.slice(iO.length) : e.slice(aO.length)
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
          B(e.assetKey, `Font must have an asset key`);
          let t = this.assetsByKey.get(e.assetKey)?.properties?.font?.openTypeData;
          return ph(t)
            ? t?.map((e) => {
                if (hh(e)) return { tag: e.tag, coverage: e.coverage };
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
      (sO = [`display`, `sans`, `serif`, `slab`, `handwritten`, `script`]),
      (cO = `FS;`),
      (lO = {
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
      (uO = Object.keys(lO)),
      (dO = RegExp(`^(?:${[...uO, `italic`, `variable`].join(`|`)})`, `u`)),
      (fO = class e {
        name = `fontshare`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        static parseVariant(e) {
          let t = e.toLowerCase().split(` `),
            n = uO.find((e) => t.includes(e)),
            r = e.toLowerCase().includes(`italic`) ? `italic` : `normal`;
          return { weight: (n && lO[n]) || 400, style: r === `italic` ? r : `normal` };
        }
        parseSelector(e) {
          if (!e.startsWith(cO)) return null;
          let t = e.split(`-`);
          if (t.length !== 2) return null;
          let [n, r] = t;
          return !n || !r
            ? null
            : {
                name: n.replace(cO, ``),
                variant: r,
                source: this.name,
                isVariable: r.toLowerCase().includes(`variable`),
              };
        }
        static createSelector(e, t) {
          return `${cO}${e}-${t.toLowerCase()}`;
        }
        static createMetadataSelector(e) {
          return `${cO}${e}`;
        }
        addFontFamily(e) {
          (this.fontFamilies.push(e), this.byFamilyName.set(e.name, e));
        }
        async importFonts(t, n) {
          ((this.fontFamilies.length = 0), this.byFamilyName.clear());
          let r = await Ih(`fontshare`),
            i = [];
          for (let a of t) {
            let t = a.font_styles
                .filter((e) => {
                  let t = e.name.toLowerCase();
                  return !(!dO.exec(t) || t.split(` `).includes(`wide`));
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
                } = xh(e, t),
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
                  category: Bh(a.category),
                  hasOpenTypeFeatures: u,
                  variationAxes: e.isVariable ? s : void 0,
                  cssFamilyName: dh(l.name, e.isVariable),
                };
              (l.fonts.push(f), i.push(f));
            }
          }
          return i;
        }
        async getOpenTypeFeatures(t) {
          return (await Lh(`fontshare`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (pO = `Inter`),
      (mO = `FR;`),
      (hO = {
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
      (gO = class e {
        name = `framer`;
        fontFamilies = [];
        byFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        static getDraftFontPropertiesBySelector(e) {
          if (!e.startsWith(mO) && !e.startsWith(pO)) return null;
          let [t, n = ``] = e.split(`-`);
          if (!t) return null;
          let r = n.includes(`Italic`) ? `italic` : `normal`,
            i = n.replace(`Italic`, ``);
          return {
            cssFamilyName: t,
            style: r,
            weight: (i && hO[i]) || 400,
            source: `framer`,
            variant: void 0,
            category: `sans-serif`,
          };
        }
        static createMetadataSelector(e) {
          return `${mO}${e}`;
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
          return (await Lh(`framer`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (_O = `GF;`),
      (vO = class e {
        name = `google`;
        fontFamilies = [];
        byFamilyName = new Map();
        supportedSubsetsByFamilyName = new Map();
        getFontFamilyByName(e) {
          return this.byFamilyName.get(e) ?? null;
        }
        getSupportedSubsetsByFamilyName(e) {
          return this.supportedSubsetsByFamilyName.get(e) ?? [];
        }
        static parseVariant(e) {
          if (e === `regular`) return { style: `normal`, weight: 400 };
          let t = /(\d*)(normal|italic)?/u.exec(e);
          return t
            ? { weight: parseInt(t[1] || `400`), style: t[2] === `italic` ? `italic` : `normal` }
            : {};
        }
        parseSelector(e) {
          if (!e.startsWith(_O)) return null;
          let t = e.includes(`-variable-`),
            n = t ? e.split(`-variable-`) : e.split(`-`);
          if (n.length !== 2) return null;
          let [r, i] = n;
          return !r || !i
            ? null
            : { name: r.replace(_O, ``), variant: i, source: this.name, isVariable: t };
        }
        static createSelector(e, t, n) {
          return `${_O}${e}-${n ? `variable-` : ``}${t}`;
        }
        static createMetadataSelector(e) {
          return `${_O}${e}`;
        }
        addFontFamily(e) {
          let t = { name: e, fonts: [], source: this.name };
          return (this.fontFamilies.push(t), this.byFamilyName.set(t.name, t), t);
        }
        async importFonts(t, n, r) {
          ((this.fontFamilies.length = 0),
            this.byFamilyName.clear(),
            this.supportedSubsetsByFamilyName.clear());
          let i = await Ih(`google`),
            a = [],
            o = Hh(t, (e) => e.family),
            s = Hh(n, (e) => e.family);
          for (let t in o) {
            let n = o[t];
            if (!n) continue;
            this.supportedSubsetsByFamilyName.set(n.family, n.subsets ?? []);
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
              h = m.filter(ih),
              g = i[e.createMetadataSelector(t)];
            for (let e of m) {
              let { weight: t, style: r, selector: i, googleFontsVariantName: o } = e,
                {
                  variantBold: s,
                  variantItalic: l,
                  variantBoldItalic: u,
                  variantVariable: d,
                  variantVariableItalic: f,
                } = (ih(e) ? xh(e, h) : void 0) ?? {},
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
                  category: Vh(n.category),
                  file: e.file?.replace(`http://`, `https://`),
                  variationAxes: e.isVariable ? p : void 0,
                  hasOpenTypeFeatures: g,
                  cssFamilyName: dh(c.name, e.isVariable),
                };
              (c.fonts.push(m), a.push(m));
            }
          }
          return a;
        }
        async getOpenTypeFeatures(t) {
          return (await Lh(`google`))[e.createMetadataSelector(t.family.name)];
        }
      }),
      (yO = Ee(w_(), 1)),
      (bO = 5e3),
      (xO = 3),
      (SO = class extends Error {
        constructor(e) {
          (super(e), (this.name = `FontLoadingError`));
        }
      }),
      (CO = new Map()),
      (wO = new Map()),
      (TO = new Map()),
      (EO = (e, t) => Gh(e, t)),
      (DO = {
        "FR;Inter": [
          { tag: `opsz`, minValue: 14, maxValue: 32, defaultValue: 14, name: `Optical size` },
          { tag: `wght`, minValue: 100, maxValue: 900, defaultValue: 400, name: `Weight` },
        ],
      }),
      (OO = class {
        enabled = !1;
        bySelector = new ZD();
        loadedSelectors = new Set();
        getGoogleFontsListPromise;
        getFontshareFontsListPromise;
        getBuiltInFontsListPromise;
        customFontsImportPromise = new Promise((e) => {
          this.resolveCustomFontsImportPromise = e;
        });
        constructor() {
          ((this.local = new YD()),
            (this.google = new vO()),
            (this.fontshare = new fO()),
            (this.framer = new gO()),
            (this.custom = new oO()),
            (this.builtIn = new tO()),
            this.importLocalFonts());
        }
        local;
        google;
        fontshare;
        builtIn;
        framer;
        custom;
        get hash() {
          return this.bySelector.hash;
        }
        addFont(e) {
          if ((this.bySelector.set(e.selector, e), e.alternativeSelectors))
            for (let t of Object.keys(e.alternativeSelectors)) this.bySelector.set(t, e);
        }
        bySelectorValuesCache;
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
              let { staticFonts: e, variableFonts: t } = await Jx.fetchGoogleFontsList(),
                n = await Jh(`google`);
              for (let r of await this.google.importFonts(e, t, n)) this.addFont(r);
              return { staticFonts: e, variableFonts: t };
            })),
            this.getGoogleFontsListPromise
          );
        }
        async importFontshareFonts() {
          if (!this.getFontshareFontsListPromise) {
            this.getFontshareFontsListPromise = Jx.fetchFontshareFontsList();
            let e = await this.getFontshareFontsListPromise,
              t = await Jh(`fontshare`);
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
            this.getBuiltInFontsListPromise = Jx.fetchBuiltInFontsList();
            let e = await this.getBuiltInFontsListPromise;
            for (let t of await this.builtIn.importFonts(e)) this.addFont(t);
          }
          return this.getBuiltInFontsListPromise;
        }
        importFramerFonts(e) {
          let t = Jh(`framer`);
          this.framer.importFonts(e, t).forEach((e) => {
            this.addFont(e);
          });
        }
        importCustomFonts(e) {
          let t = new Map();
          for (let e of this.loadedSelectors) {
            if (!Th(e)) continue;
            let n = this.getFontBySelector(e);
            n && t.set(e, n);
          }
          this.bySelector.forEach((e, t) => {
            Th(t) && this.bySelector.delete(t);
          });
          let n = this.custom.importFonts(e);
          for (let e of n) this.addFont(e);
          for (let [e, n] of t) {
            let t = this.getFontBySelector(e);
            (t && t.file === n.file) ||
              (this.loadedSelectors.delete(e),
              n.file &&
                qh({ family: n.cssFamilyName, url: n.file, weight: n.weight, style: n.style }));
          }
          this.resolveCustomFontsImportPromise();
        }
        getCustomFontsImportPromise() {
          return this.customFontsImportPromise;
        }
        getCustomFontDebugFamilies() {
          return this.custom.getDebugFamilies();
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
            let e = vO.parseVariant(n.variant);
            if (ih(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: n.variant,
                cssFamilyName: fh(n, `google`),
                source: `google`,
                category: void 0,
              };
          }
          let r = this.fontshare.parseSelector(e);
          if (r) {
            let e = fO.parseVariant(r.variant);
            if (ih(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: r.variant,
                cssFamilyName: fh(r, `fontshare`),
                source: `fontshare`,
                category: void 0,
              };
          }
          let i = this.builtIn.parseSelector(e);
          if (i) {
            let e = tO.parseVariant(i.variant);
            if (ih(e))
              return {
                style: e.style,
                weight: e.weight,
                variant: i.variant,
                cssFamilyName: fh(i, `builtIn`),
                source: `builtIn`,
                category: void 0,
              };
          }
          return gO.getDraftFontPropertiesBySelector(e) || null;
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
            i = wh(t);
          switch (r) {
            case `local`:
              return (this.loadedSelectors.add(e), 1);
            case `framer`:
              if ((Nn() || (await Kh(t.family.name, t.style, t.weight)), i)) {
                if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
                await EO({ family: n, url: t.file, weight: t.weight, style: t.style }, document);
              }
              return (this.loadedSelectors.add(e), 1);
            case `google`:
            case `fontshare`:
            case `builtIn`:
            case `custom`: {
              if (!t.file) return Promise.reject(`Unable to load font: ${e}`);
              let r = t.file;
              await EO({ family: n, url: r, weight: t.weight, style: t.style }, document);
              let i = this.getFontBySelector(e);
              return !i || i.file !== r
                ? (qh({ family: n, url: r, weight: t.weight, style: t.style }), 2)
                : (this.loadedSelectors.add(e), 1);
            }
            default:
              V(r);
          }
        }
        async loadFontsFromSelectors(e) {
          if (!this.enabled) return [];
          let t = [];
          (e.some((e) => e.startsWith(cO)) &&
            t.push(
              this.importFontshareFonts().catch((e) => {
                zi(`Failed to load Fontshare fonts:`, e);
              })
            ),
            e.some((e) => e.startsWith(_O)) &&
              t.push(
                this.importGoogleFonts().catch((e) => {
                  zi(`Failed to load Google fonts:`, e);
                })
              ),
            e.some((e) => e.startsWith(eO)) &&
              t.push(
                this.importBuiltInFonts().catch((e) => {
                  zi(`Failed to load built-in fonts:`, e);
                })
              ),
            e.some(Th) &&
              t.push(
                this.customFontsImportPromise.catch((e) => {
                  zi(`Failed to load custom fonts:`, e);
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
          let n = e.filter((e) => !kO.loadedSelectors.has(e));
          n.length !== 0 &&
            (await kO.loadWebFontsFromSelectors(n),
            n.every((e) => kO.loadedSelectors.has(e)) && t && t());
        }
        async loadWebFontsFromSelectors(e) {
          return this.loadFontsFromSelectors(e);
        }
        get defaultFont() {
          let e = this.getFontBySelector(`Inter`);
          return (B(e, `Can’t find Inter font`), e);
        }
        testing = { addFont: this.addFont.bind(this) };
      }),
      (kO = new OO()),
      (AO = (e) => e.target.value),
      (jO = {
        "data-1p-ignore": !0,
        "data-lpignore": !0,
        "data-form-type": `other`,
        autocomplete: `off`,
      }),
      (MO = x(function (e, t) {
        let {
            autoFocus: n,
            className: r,
            inputName: i,
            max: a,
            min: o,
            placeholder: s,
            required: c,
            step: l,
            style: d,
            type: f,
            maxLength: p,
            value: m,
            defaultValue: g,
            autofillEnabled: _,
            onChange: y,
            onBlur: b,
            onInvalid: x,
            onFocus: S,
            onValid: C,
            onClear: w,
            ...T
          } = e,
          D = $h(m ?? g, f),
          [O, k, A] = Qh(D ?? ``, !0, y),
          ee = pi(D),
          te = u(() => {
            (k(``), w && h(() => w()));
          }, [w, k]),
          j = _o(C, x, A, b, S),
          ne = u(
            (e) => {
              e.target === e.currentTarget && ee.current?.focus();
            },
            [ee]
          );
        if (f === `hidden`) return v(M.input, { type: `hidden`, name: i, defaultValue: g });
        let re = _ === !1 ? jO : void 0,
          ie = !!O,
          ae = !!w && ie,
          oe = fl(NO, ix, r, f === `text` && PO, f === `textarea` && FO);
        return E(M.div, {
          ref: t,
          onClick: ne,
          style: d,
          className: oe,
          ...T,
          children: [
            f === `textarea`
              ? v(M.textarea, {
                  ref: ee,
                  ...re,
                  ...j,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: rx,
                  value: O,
                  maxLength: p,
                })
              : v(M.input, {
                  ref: ee,
                  ...re,
                  ...j,
                  type: f,
                  required: c,
                  autoFocus: n,
                  name: i,
                  placeholder: s,
                  className: fl(rx, !ie && ax),
                  value: O,
                  min: o,
                  max: a,
                  step: l,
                  maxLength: p,
                }),
            ae &&
              v(`button`, {
                type: `button`,
                className: IO,
                onClick: te,
                "aria-label": `Clear`,
                children: v(eg, {}),
              }),
          ],
        });
      })),
      (NO = `framer-form-text-input`),
      (PO = `framer-form-text-input-type`),
      (FO = `framer-form-textarea-input-type`),
      (IO = `framer-form-text-input-clear`),
      (LO = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (RO = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
      (zO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
      (BO = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
      (VO = Qb(
        MO,
        [
          ...sx,
          ...ux,
          ...cx,
          Z(`.${ix}`, {
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
          Z(`.${NO} .${rx}::placeholder`, {
            color: Z.variable(`--framer-input-placeholder-color`),
          }),
          Z(`.${NO}`, {
            display: `flex`,
            alignItems: `center`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${NO} .${rx}`, { flex: 1, minWidth: 0, width: `auto`, padding: 0 }),
          Z(`.${NO}.${FO}`, { padding: 0 }),
          Z(`.${NO}.${FO} textarea.${rx}`, {
            width: `100%`,
            padding: Z.variable(`--framer-input-padding`),
          }),
          Z(`.${NO} .${rx}[type="date"], .${NO} .${rx}[type="time"]`, {
            "-webkit-appearance": `none`,
            appearance: `none`,
          }),
          Z(`.${NO} .${rx}::-webkit-date-and-time-value`, { textAlign: `start` }),
          Z(`.${NO} textarea`, {
            display: `flex`,
            resize: Z.variable(`--framer-textarea-resize`),
            overflowY: `auto`,
            minHeight: `inherit`,
            maxHeight: `inherit`,
            whiteSpace: `break-spaces`,
          }),
          Z(`.${NO} textarea::-webkit-resizer`, { background: `no-repeat ${ot(LO)}` }),
          Z(`.${NO}:dir(rtl) textarea::-webkit-resizer`, { background: `no-repeat ${ot(RO)}` }),
          Z(`.${NO} textarea::-webkit-scrollbar`, { cursor: `pointer`, background: `transparent` }),
          Z(`.${NO} textarea::-webkit-scrollbar-thumb:window-inactive`, { opacity: 0 }),
          Z(`.${NO} textarea::-webkit-scrollbar-corner`, {
            background: `none`,
            backgroundColor: `transparent`,
            outline: `none`,
          }),
          Z(`.${NO} .${rx}::-webkit-datetime-edit`, {
            height: Z.variable(`--framer-input-font-line-height`),
          }),
          Z(`.${NO} .${rx}.${ax}::-webkit-datetime-edit`, {
            color: Z.variable(`--framer-input-placeholder-color`),
            "-webkit-text-fill-color": Z.variable(`--framer-input-placeholder-color`),
            overflow: `visible`,
          }),
          Z(`.${NO}.${PO}::before`, {
            content: Z.variable(`--framer-input-icon-content`, `none`),
            display: `block`,
            flexShrink: 0,
            width: `${hx}px`,
            height: `${hx}px`,
            marginRight: `${mx}px`,
            ...gx,
            backgroundPosition: `center`,
            maskPosition: `center`,
            maskImage: Z.variable(`--framer-input-icon-mask-image`),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${NO} .${rx}[type="date"]::before, .${NO} .${rx}[type="time"]::before`, {
            ..._x,
            paddingLeft: `${px}px`,
            maskPosition: `${px}px center`,
            backgroundPosition: `${px}px center`,
          }),
          Z(`.${NO} .${rx}[type="date"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ot(zO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${NO} .${rx}[type="time"]::before`, {
            maskImage: Z.variable(`--framer-input-icon-mask-image`, ot(BO)),
            backgroundImage: Z.variable(`--framer-input-icon-image`),
          }),
          Z(`.${NO} .${rx}::-webkit-calendar-picker-indicator`, {
            opacity: 0,
            position: `absolute`,
            right: 0,
            top: 0,
            bottom: 0,
            padding: Z.variable(`--framer-input-padding`),
            paddingTop: 0,
            paddingBottom: 0,
            width: `${hx}px`,
            height: `100%`,
          }),
          Z(`.${NO}:focus-within, .${NO}.${ox}`, {
            boxShadow: Z.variable(`--framer-input-focused-box-shadow`, `--framer-input-box-shadow`),
            background: Z.variable(
              `--framer-input-focused-background`,
              `--framer-input-background`
            ),
          }),
          Z(`.${NO}:focus-within::after, .${NO}.${ox}::after`, {
            borderColor: Z.variable(
              `--framer-input-focused-border-color`,
              `--framer-input-border-color`
            ),
            borderStyle: Z.variable(
              `--framer-input-focused-border-style`,
              `--framer-input-border-style`
            ),
            borderWidth: Z.variable(`--framer-input-focused-border-width`, lx),
          }),
          Z(`.${IO}`, {
            display: `flex`,
            order: 2,
            alignItems: `center`,
            justifyContent: `center`,
            flexShrink: 0,
            width: `${hx}px`,
            height: `${hx}px`,
            marginLeft: `${mx}px`,
            padding: 0,
            border: `none`,
            background: `transparent`,
            cursor: `pointer`,
            color: Z.variable(`--framer-input-placeholder-color`),
            transition: `color 0.15s ease`,
            outline: `none`,
          }),
          Z(`.${IO}:hover, .${IO}:focus-visible`, {
            color: Z.variable(`--framer-input-font-color`),
          }),
        ],
        `framer-lib-form-plain-text-input`
      )),
      (HO = {
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
      }),
      (UO = { opacity: 0 }),
      (WO = { opacity: 1 }),
      (GO = dg(
        j.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: c,
              ...u
            } = e,
            d = { ...c },
            f = l(() => ns(n), [n]),
            [p, m] = s();
          j.useEffect(() => {
            if (!n?.src || !o || f) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                h(() => m({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, f]);
          let g = f ?? p;
          return (
            o && g && ((d[o] = `auto`), (d.aspectRatio = g.width / g.height)),
            n && delete d.background,
            E(rs(e.as), {
              ...u,
              style: d,
              ref: t,
              draggable: a,
              children: [n && v(Zo, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (qO = !kn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      (JO =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (YO = `{{ text-placeholder }}`),
      (XO = `rich-text-wrapper`),
      (ZO = Eo(
        x(function (e, n) {
          let {
              id: r,
              name: a,
              html: o,
              htmlFromDesign: s,
              text: u,
              textFromDesign: d,
              fonts: f = [],
              width: p,
              height: m,
              left: h,
              right: g,
              top: _,
              bottom: y,
              center: b,
              className: x,
              stylesPresetsClassName: S,
              visible: C = !0,
              opacity: w,
              rotation: T = 0,
              verticalAlignment: E = `top`,
              isEditable: D = !1,
              environment: O = J.current,
              withExternalLayout: k = !1,
              positionSticky: A,
              positionStickyTop: ee,
              positionStickyRight: te,
              positionStickyBottom: j,
              positionStickyLeft: ne,
              __htmlStructure: re,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: se,
              children: ce,
              ...le
            } = e,
            ue = ro(),
            de = ls(e),
            fe = t(null),
            pe = n ?? fe,
            { navigate: me, getRoute: he } = kt(),
            ge = jt();
          (Gn(e.preload ?? []), hs(e, pe));
          let _e = c(rS),
            ve = ku(),
            N = u,
            ye = ae ?? r;
          if (ye && oe) {
            let e = oe[ye];
            typeof e == `string` && (N = e);
          }
          let P = ``;
          if (N) {
            let e = pg(N);
            P = re ? re.replace(YO, e) : `<p>${e}</p>`;
          } else if (o) P = o;
          else if (d) {
            let e = pg(d);
            P = re ? re.replace(YO, e) : `<p>${e}</p>`;
          } else s && (P = s);
          let be = ed(),
            F = l(() => (ve || !he || !ge ? P : mg(P, he, ge, be)), [P, he, ge, be]);
          if (
            (i(() => {
              let e = pe.current;
              if (e === null) return;
              function t(e) {
                let t = Ju(e.target, pe.current);
                Ln(e) ||
                  !me ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (Fu(me, t, be) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [me, be]),
            _g(f, ie, pe),
            !C)
          )
            return null;
          let xe = D && O() === J.canvas,
            I = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: gg(E),
              opacity: xe ? 0 : w,
              flexShrink: 0,
            },
            Se = J.hasRestrictions(),
            Ce = eo(e, ue || 0, !1),
            we = se && (p === `auto` || m === `auto`),
            Te =
              e.transformTemplate || !Ce || !Se || ie || we
                ? (e.transformTemplate ?? cs(b))
                : void 0;
          if (!k) {
            if (Ce && Se && !we) {
              let e = K.getNumber(T).toFixed(4);
              ((I.transform = `translate(${Ce.x}px, ${Ce.y}px) rotate(${e}deg)`),
                (I.width = Ce.width),
                (I.minWidth = Ce.width),
                (I.height = Ce.height));
            } else
              ((I.left = h),
                (I.right = g),
                (I.top = _),
                (I.bottom = y),
                (I.width = p),
                (I.height = m),
                (I.rotate = T));
            A
              ? (!ve || _e) &&
                ((I.position = `sticky`),
                (I.willChange = `transform`),
                (I.top = ee),
                (I.right = te),
                (I.bottom = j),
                (I.left = ne))
              : ve && (e.positionFixed || e.positionAbsolute) && (I.position = `absolute`);
          }
          return (
            tl(e, I),
            Zc(e, I),
            Object.assign(I, e.style),
            v(M.div, {
              id: r,
              ref: pe,
              ...le,
              style: I,
              layoutId: de,
              "data-framer-name": a,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": b,
              className: fl(x, S, XO),
              transformTemplate: Te,
              dangerouslySetInnerHTML: { __html: F },
            })
          );
        })
      )),
      (QO = {
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
      ($O = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (ek = x(function (e, t) {
        return v(`svg`, { ...e, ref: t, children: e.children });
      })),
      (tk = M.create(ek)),
      (nk = x(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return v(tk, {
          ...r,
          ref: i,
          viewBox: t,
          children: v(M.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (rk = []),
      (ik = `RichTextContainer`),
      (ak = x(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: u,
            bottom: d,
            center: f,
            children: p,
            environment: m = J.current,
            fonts: h = rk,
            height: g,
            isEditable: _ = !1,
            left: y,
            name: b,
            opacity: x,
            positionSticky: S,
            positionStickyBottom: C,
            positionStickyLeft: w,
            positionStickyRight: T,
            positionStickyTop: E,
            right: D,
            rotation: O = 0,
            style: k,
            _initialStyle: A,
            stylesPresetsClassNames: ee,
            text: te,
            top: j,
            verticalAlignment: ne = `top`,
            visible: re = !0,
            width: ie,
            withExternalLayout: ae = !1,
            viewBox: M,
            viewBoxScale: oe = 1,
            effect: se,
            ...ce
          } = e,
          le = ro(),
          ue = m(),
          de = ue === J.canvas,
          fe = de || ue === J.export,
          pe = c(rS),
          me = ls(e),
          he = t(null),
          ge = n ?? he;
        (hs(e, ge), _g(h, r, ge));
        let _e = Eg(se, ge),
          ve = l(() => {
            if (p) return Pg(p, ee, te, s, void 0, _e.getTokenizer());
          }, [p, ee, te, s, _e]);
        if (!re) return null;
        let N = { opacity: _ && de ? 0 : x },
          ye = gg(ne);
        ye !== xx.justifyContent && (N.justifyContent = ye);
        let P = {},
          be = J.hasRestrictions(),
          F = eo(e, le || 0, !1),
          xe = o && (ie === `auto` || g === `auto`),
          I = e.transformTemplate || !F || !be || r || xe ? (e.transformTemplate ?? cs(f)) : void 0;
        (ae ||
          (F && be && !xe
            ? ((P.x = F.x + (R(k?.x) ? k.x : 0)),
              (P.y = F.y + (R(k?.y) ? k.y : 0)),
              (P.left = 0),
              (P.top = 0),
              (N.rotate = K.getNumber(O)),
              (N.width = F.width),
              (N.minWidth = F.width),
              (N.height = F.height))
            : ((N.left = y),
              (N.right = D),
              (N.top = j),
              (N.bottom = d),
              (N.width = ie),
              (N.height = g),
              (N.rotate = O)),
          S
            ? (!fe || pe) &&
              ((N.position = `sticky`),
              (N.willChange = `transform`),
              (N.top = E),
              (N.right = T),
              (N.bottom = C),
              (N.left = w))
            : de && (e.positionFixed || e.positionAbsolute) && (N.position = `absolute`)),
          tl(e, N),
          Zc(e, N),
          Object.assign(N, A, k, P),
          me && (ce.layout = `preserve-aspect`));
        let Se = rs(e.as),
          Ce = ce[`data-framer-name`] ?? b,
          we = de ? jg(Vx(ce)) : ce;
        return L(e.viewBox)
          ? e.as === void 0
            ? v(nk, {
                ...we,
                ref: ge,
                style: N,
                layoutId: me,
                viewBox: M,
                viewBoxScale: oe,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": ik,
                children: ve,
              })
            : v(Se, {
                ...we,
                ref: ge,
                style: N,
                layoutId: me,
                transformTemplate: I,
                "data-framer-name": Ce,
                "data-framer-component-type": ik,
                children: v(nk, {
                  viewBox: M,
                  viewBoxScale: oe,
                  style: { width: `100%`, height: `100%` },
                  children: ve,
                }),
              })
          : v(Se, {
              ...we,
              ref: ge,
              style: N,
              layoutId: me,
              transformTemplate: I,
              "data-framer-name": Ce,
              "data-framer-component-type": ik,
              children: ve,
            });
      })),
      (ok = Eo(
        x(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (L(a)) {
            !r.stylesPresetsClassName &&
              z(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
            return v(ZO, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && L(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return v(ak, { ...r, ref: i, children: b(a) ? a : void 0 });
        })
      )),
      (sk = `framer/asset-reference,`),
      (ck = ({
        id: e,
        path: t,
        transform: n,
        repeat: r,
        width: i,
        height: a,
        offsetX: o,
        offsetY: s,
      }) => {
        let c = qg(t);
        return v(`pattern`, {
          id: e,
          width: r ? i : `100%`,
          height: r ? a : `100%`,
          patternContentUnits: r ? void 0 : `objectBoundingBox`,
          patternUnits: r ? `userSpaceOnUse` : void 0,
          x: r ? o : void 0,
          y: r ? s : void 0,
          children: v(
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
      (lk = An()),
      (uk = class {
        constructor(e, t, n, r, i = 0) {
          ((this.id = e),
            (this.svg = t),
            (this.innerHTML = n),
            (this.viewBox = r),
            (this.count = i));
        }
        id;
        svg;
        innerHTML;
        viewBox;
        count;
      }),
      (dk = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (fk = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(dS(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Jg(e);
            (s &&
              (t && Yg(s, n),
              (s.id = n),
              (o = e_(s)),
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
          lk && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = dk),
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
          lk && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new uk(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !lk) ||
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
                        lk && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${dk}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (pk = new fk()),
      (mk = {
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
      }),
      (hk = x(function (e, t) {
        let n = ro(),
          r = ls(e),
          i = j.useRef(null),
          a = t ?? i,
          o = WD();
        return (
          hs(e, i),
          v(_k, { ...e, innerRef: a, parentSize: n, layoutId: r, providedWindow: o })
        );
      })),
      (gk = 5e4),
      (_k = class e extends uS {
        static supportsConstraints = !0;
        static defaultSVGProps = {
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
        };
        static defaultProps = { ...uS.defaultProps, ...e.defaultSVGProps };
        static frame(e) {
          return eo(e, e.parentSize || 0);
        }
        container = j.createRef();
        svgElement = null;
        setSVGElement = (e) => {
          ((this.svgElement = e), this.setLayerElement(e));
        };
        previouslyRenderedSVG = ``;
        get frame() {
          return eo(this.props, this.props.parentSize || 0);
        }
        unmountedSVG = ``;
        componentDidMount() {
          if (this.unmountedSVG) {
            let { svgContentId: e } = this.props,
              t = e ? `svg${e}` : null;
            (pk.subscribe(this.unmountedSVG, !e, t),
              (this.previouslyRenderedSVG = this.unmountedSVG));
          }
          this.props.svgContentId || i_(this.container, this.props);
        }
        componentWillUnmount() {
          (pk.unsubscribe(this.previouslyRenderedSVG),
            (this.unmountedSVG = this.previouslyRenderedSVG),
            (this.previouslyRenderedSVG = ``));
        }
        componentDidUpdate(e) {
          if ((super.componentDidUpdate(e), this.props.svgContentId)) return;
          let { fill: t } = this.props;
          (tS.isImageObject(t) &&
            tS.isImageObject(e.fill) &&
            t.src !== e.fill.src &&
            bs(this.svgElement, `fill`, null, !1),
            i_(this.container, this.props));
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
            c = K.getNumber(r);
          if (
            ((e.opacity = H(this.props.opacity) ? this.props.opacity : 1), J.hasRestrictions() && n)
          ) {
            (Object.assign(e, {
              transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
              width: `${n.width}px`,
              height: `${n.height}px`,
            }),
              Za(this.props) && (e.position = `absolute`));
            let r = n.width / (i || 1),
              o = n.height / (a || 1);
            t.transformOrigin = `top left`;
            let { zoom: s, target: l } = Ob;
            if (l === J.export) {
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
            opacity: g,
            width: _,
            requiresOverflowVisible: y,
            ...b
          } = this.props;
          if (!f && (!t || !e)) return null;
          let x = e ?? l ?? `svg`,
            S = this.frame,
            C = S || { width: o || 100, height: a || 100 },
            w = { ...n, imageRendering: `pixelated`, flexShrink: 0 },
            T = {};
          (this.collectLayout(w, T),
            Uc(this.props, w),
            tl(this.props, w),
            uS.applyWillChange(this.props, w, !1));
          let D = null;
          if (typeof r == `string` || q.isColorObject(r)) {
            let e = q.isColorObject(r) ? r.initialValue || q.toRgbString(r) : r;
            ((w.fill = e), (w.color = e));
          } else if (vS.isLinearGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${vS.hash(t)}`;
            w.fill = `url(#${n})`;
            let { stops: i, x1: a, x2: o, y1: s, y2: c } = zg(t, x);
            D = v(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: v(`linearGradient`, {
                id: n,
                x1: a,
                x2: o,
                y1: s,
                y2: c,
                children: i.map((e, t) =>
                  v(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (bS.isRadialGradient(r)) {
            let t = r,
              n = `${encodeURI(e || ``)}g${bS.hash(t)}`;
            w.fill = `url(#${n})`;
            let i = Bg(t, x);
            D = v(`svg`, {
              ref: this.setSVGElement,
              width: `100%`,
              height: `100%`,
              style: { position: `absolute` },
              role: `presentation`,
              children: v(`radialGradient`, {
                id: n,
                cy: t.centerAnchorY,
                cx: t.centerAnchorX,
                r: t.widthFactor,
                children: i.stops.map((e, t) =>
                  v(`stop`, { offset: e.position, stopColor: e.color, stopOpacity: e.alpha }, t)
                ),
              }),
            });
          } else if (tS.isImageObject(r)) {
            let e = Gg(r, C, x);
            e &&
              ((w.fill = `url(#${e.id})`),
              (D = v(`svg`, {
                ref: this.setSVGElement,
                width: `100%`,
                height: `100%`,
                style: { position: `absolute` },
                role: `presentation`,
                children: v(`defs`, { children: v(ck, { ...e }) }),
              })));
          }
          let O = { "data-framer-component-type": `SVG` },
            A = !S;
          A && Object.assign(O, as(this.props.center));
          let ee =
              !y &&
              !D &&
              !w.fill &&
              !w.background &&
              !w.backgroundImage &&
              i.length < gk &&
              !t_(i) &&
              !n_(i),
            te = null;
          if (ee)
            ((w.backgroundSize = `100% 100%`),
              (w.backgroundImage = ot(i)),
              pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = ``));
          else {
            let e = m ? `svg${m}` : null,
              t = pk.subscribe(i, !m, e, y);
            (pk.unsubscribe(this.previouslyRenderedSVG),
              (this.previouslyRenderedSVG = i),
              r_(w) && (w.overflow = `hidden`),
              (te = E(k, {
                children: [
                  D,
                  v(
                    `div`,
                    {
                      className: `svgContainer`,
                      style: T,
                      ref: this.container,
                      dangerouslySetInnerHTML: { __html: t },
                    },
                    tS.isImageObject(r) ? r.src : ``
                  ),
                ],
              })));
          }
          let j = rs(this.props.as),
            { href: ne, target: re, rel: ie, onClick: ae, onTap: M } = this.props,
            oe = s || c;
          return v(j, {
            ...O,
            ...b,
            layoutId: l,
            transformTemplate: A ? cs(this.props.center) : void 0,
            id: e,
            ref: p,
            style: w,
            className: u,
            variants: d,
            tabIndex: this.props.tabIndex,
            role: oe ? `img` : void 0,
            "aria-label": s,
            "aria-description": c,
            "aria-hidden": oe ? void 0 : `true`,
            onTap: M,
            onClick: ae,
            href: ne,
            target: re,
            rel: ie,
            children: te,
          });
        }
      }),
      (vk = Eo(hk)),
      (yk = 1e3),
      (bk = `explicitInter`),
      (Ve.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = Ge(e(this.get()));
        return (this.onChange((n) => t.set(e(n))), t);
      }));
  });
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
export {
  vi as $,
  o_ as A,
  g_ as At,
  zC as B,
  ND as C,
  Lt as Ct,
  ok as D,
  nh as Dt,
  iE as E,
  Qb as Et,
  kO as F,
  Po as G,
  s_ as H,
  v_ as I,
  Di as J,
  bm as K,
  VC as L,
  zx as M,
  ex as N,
  vk as O,
  fw as Ot,
  fl as P,
  L_ as Q,
  RC as R,
  PC as S,
  vm as St,
  Ru as T,
  th as Tt,
  c_ as U,
  Zb as V,
  a_ as W,
  xk as X,
  dt as Y,
  mt as Z,
  lT as _,
  Jr as _t,
  Dw as a,
  pk as at,
  Lf as b,
  Im as bt,
  Fa as c,
  eu as ct,
  SC as d,
  Eu as dt,
  zw as et,
  kC as f,
  Om as ft,
  K_ as g,
  Yr as gt,
  Jw as h,
  Vm as ht,
  hw as i,
  Uv as it,
  No as j,
  zv as jt,
  Ow as k,
  Tl as kt,
  OT as l,
  Rt as lt,
  GO as m,
  ku as mt,
  Yu as n,
  ID as nt,
  Gb as o,
  mi as ot,
  Zw as p,
  $s as pt,
  mv as q,
  $l as r,
  Mm as rt,
  CC as s,
  wm as st,
  qu as t,
  Li as tt,
  VO as u,
  jt as ut,
  eb as v,
  Ri as vt,
  J as w,
  kt as wt,
  $w as x,
  Rm as xt,
  tr as y,
  pl as yt,
  BC as z,
};
//# sourceMappingURL=framer.D9PtOJZM.mjs.map
