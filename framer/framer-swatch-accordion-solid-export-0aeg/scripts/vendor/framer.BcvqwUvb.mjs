import { t as e } from "./rolldown-runtime.Dh6celcD.mjs";
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
  R as f,
  S as p,
  T as m,
  _ as h,
  a as g,
  b as _,
  c as v,
  d as y,
  f as b,
  h as x,
  i as S,
  j as C,
  l as w,
  m as T,
  o as E,
  p as D,
  s as ee,
  u as O,
  v as te,
  w as k,
  x as A,
  y as j,
} from "./react.iNMCLRE-.mjs";
import {
  A as ne,
  B as re,
  C as M,
  D as ie,
  E as ae,
  F as oe,
  G as se,
  H as ce,
  I as le,
  J as ue,
  L as de,
  M as fe,
  N as pe,
  O as me,
  P as he,
  Q as ge,
  R as _e,
  S as ve,
  T as N,
  U as ye,
  W as be,
  X as xe,
  Y as Se,
  Z as Ce,
  _ as P,
  a as we,
  b as Te,
  c as Ee,
  d as De,
  f as Oe,
  g as ke,
  h as Ae,
  i as je,
  j as Me,
  k as Ne,
  l as Pe,
  m as Fe,
  n as Ie,
  o as Le,
  p as Re,
  q as ze,
  r as Be,
  s as Ve,
  u as He,
  v as Ue,
  w as We,
  x as Ge,
  y as Ke,
  z as qe,
} from "./motion.CNAiqviP.mjs";
function Je(e) {
  return typeof e == `function`;
}
function Ye(e) {
  return typeof e == `boolean`;
}
function F(e) {
  return typeof e == `string`;
}
function I(e) {
  return Number.isFinite(e);
}
function Xe(e) {
  return Array.isArray(e);
}
function L(e) {
  return typeof e == `object` && !!e && !Xe(e);
}
function Ze(e) {
  for (let t in e) return !1;
  return !0;
}
function Qe(e) {
  return e === void 0;
}
function $e(e) {
  return e === null;
}
function et(e) {
  return e == null;
}
function tt(e) {
  return e instanceof Date && !Number.isNaN(e.getTime());
}
function nt(e) {
  return L(e) && Je(e.return);
}
function rt(e) {
  return L(e) && Je(e.then);
}
function it(e) {
  return e instanceof Promise;
}
function at(e) {
  return `url('${ot(e)}')`;
}
function ot(e) {
  return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function st(e, t) {
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
function ct(e, t, n) {
  if (Mh.has(e)) return;
  let r = Promise.resolve()
    .then(t)
    .then((t) => (Mh.set(e, t), t))
    .catch((t) => {
      throw (Mh.delete(e), console.warn(`Failed to preload lazy module from ${n}`, t), t);
    });
  (r.catch(wh), Mh.set(e, r));
}
function lt(e, t) {
  Th && (Nh.set(e, t), Ph.has(e) && ct(e, t, `registered loader ${e}`));
}
function ut() {
  if (!Th) return;
  let e = document.querySelectorAll(`[rel="modulepreload"][data-framer-lazy]`);
  for (let t of e) {
    let e = t.getAttribute(`data-framer-lazy`),
      n = t.getAttribute(`href`);
    if (!e || !n) continue;
    let r = e.startsWith(Fh),
      i = r ? e.slice(Fh.length) : e;
    if (!i) continue;
    Ph.add(i);
    let a = Nh.get(i);
    a ? ct(i, a, `registered loader ${i}`) : r && ct(i, () => import(n), n);
  }
}
function dt(e) {
  return typeof e == `object` && !!e && !T(e) && Lh in e;
}
function ft(e, t) {
  if (t in e) return e[t];
  throw Error(`Module does not contain export '${t}'`);
}
function pt(e, t = `default`, n) {
  n && lt(n, e);
  let r,
    i,
    a,
    o = () => {
      if (i || !n || !Mh.has(n)) return;
      let e = Mh.get(n);
      it(e) ? s(() => e) : (i = ft(e, t));
    },
    s = (e) =>
      i
        ? Promise.resolve(i)
        : ((r ||= e()
            .then((e) => {
              let n = ft(e, t);
              return ((i = n), n);
            })
            .catch((e) => {
              a = e;
            })),
          r),
    c = !1,
    l = D(function (t, r) {
      if (
        (j(() => {
          c = !0;
        }, []),
        a)
      )
        throw a;
      if ((o(), n !== void 0 && Ih !== void 0 && Ih.add(n), !i)) throw s(e);
      return E(i, { ref: r, ...t });
    });
  return (
    (l.preload = () => (o(), s(e))),
    (l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
    l
  );
}
function mt(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function ht(e) {
  return e === null || !(zh in e) ? !1 : typeof e.equals == `function`;
}
function gt(e, t) {
  return e === t || (e !== e && t !== t);
}
function _t(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!gt(e[r], t[r])) return !1;
  return !0;
}
function vt(e, t) {
  let n = e.length;
  if (n !== t.length) return !1;
  for (let r = n; r-- !== 0;) if (!wt(e[r], t[r], !0)) return !1;
  return !0;
}
function yt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!gt(r, t.get(n))) return !1;
  return !0;
}
function bt(e, t) {
  if (e.size !== t.size) return !1;
  for (let [n, r] of e.entries()) if (!wt(r, t.get(n), !0)) return !1;
  return !0;
}
function xt(e, t) {
  if (e.size !== t.size) return !1;
  for (let n of e.keys()) if (!t.has(n)) return !1;
  return !0;
}
function St(e, t) {
  let n = Rh(e);
  if (n.length !== Rh(t).length) return !1;
  for (let r of n)
    if (!mt(t, r) || (!(r === `_owner` && mt(e, `$$typeof`) && e.$$typeof) && !gt(e[r], t[r])))
      return !1;
  return !0;
}
function Ct(e, t) {
  let n = Rh(e);
  if (n.length !== Rh(t).length) return !1;
  for (let r of n)
    if (!mt(t, r) || (!(r === `_owner` && mt(e, `$$typeof`) && e.$$typeof) && !wt(e[r], t[r], !0)))
      return !1;
  return !0;
}
function wt(e, t, n) {
  if (e === t) return !0;
  if (!e || !t) return e !== e && t !== t;
  let r = typeof e;
  if (r !== typeof t || r !== `object`) return !1;
  let i = Array.isArray(e),
    a = Array.isArray(t);
  if (i && a) return n ? vt(e, t) : _t(e, t);
  if (i !== a) return !1;
  let o = e instanceof Map,
    s = t instanceof Map;
  if (o && s) return n ? bt(e, t) : yt(e, t);
  if (o !== s) return !1;
  let c = e instanceof Set,
    l = t instanceof Set;
  if (c && l) return xt(e, t);
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
      ? ht(e) && ht(t)
        ? e.equals(t)
        : n
          ? Ct(e, t)
          : St(e, t)
      : !1;
}
function Tt(e, t, n = !0) {
  try {
    return wt(e, t, n);
  } catch (e) {
    if (e instanceof Error && /stack|recursion/iu.exec(e.message))
      return (
        console.warn(`Warning: isEqual does not handle circular references.`, e.name, e.message),
        !1
      );
    throw e;
  }
}
function Et(e) {
  return A.useCallback((t) => e[t], [e]);
}
function Dt({ api: e, children: t }) {
  return E(Bh.Provider, { value: e, children: t });
}
function Ot() {
  return A.useContext(Bh);
}
function kt({ routes: e, children: t }) {
  let n = Et(e),
    r = C(() => ({ getRoute: n }), [n]);
  return E(Bh.Provider, { value: r, children: t });
}
function At() {
  let e = Ot(),
    n = t(Vh),
    r = n?.routeId ?? e.currentRouteId,
    i = n?.routeId ? n.pathVariables : e.currentPathVariables,
    a = n?.routeId ? void 0 : e.currentCanonicalPathVariables,
    o = r ? e.getRoute?.(r) : void 0;
  return C(() => {
    if (!(!r || !o)) return { ...o, id: r, pathVariables: i, canonicalPathVariables: a };
  }, [a, r, i, o]);
}
function jt() {
  let e = At();
  if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Mt(e) {
  let t = At(),
    n = A.useRef(t);
  Tt(n.current, t) || !t || ((n.current = t), e(t));
}
function Nt(e, t) {
  if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Pt(e) {
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
function R(e, t) {
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
function z(e, t) {
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
function Ft(e) {
  let t = Object.getPrototypeOf(e);
  return (
    t === Object.prototype ||
    t === null ||
    Object.getPrototypeOf(t) === null ||
    Object.getOwnPropertyNames(t).sort().join(`\0`) === ng
  );
}
function It(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function Lt(e) {
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
function Rt(e) {
  let t = ``,
    n = 0,
    r = e.length;
  for (let i = 0; i < r; i += 1) {
    let r = e[i],
      a = Lt(r);
    a && ((t += e.slice(n, i) + a), (n = i + 1));
  }
  return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function zt(e) {
  return Object.getOwnPropertySymbols(e).filter(
    (t) => Object.getOwnPropertyDescriptor(e, t).enumerable
  );
}
function Bt(e) {
  return rg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Vt(e) {
  return !(!Number.isInteger(e) || e < 0 || e > eg);
}
function Ht(e) {
  return !(!Number.isInteger(e) || e < 0 || e > $h);
}
function Ut(e) {
  if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
  for (let t = 0; t < e.length; t++) {
    let n = e.charCodeAt(t);
    if (n < 48 || n > 57) return !1;
  }
  return Vt(+e);
}
function Wt(e) {
  for (var t = e.length - 1; t >= 0 && !Ut(e[t]); t--);
  return t + 1;
}
function Gt(e) {
  let t = Object.keys(e);
  return ((t.length = Wt(t)), t);
}
function Kt(e) {
  return new Uint8Array(e).toBase64();
}
function qt(e) {
  return Uint8Array.fromBase64(e).buffer;
}
function Jt(e) {
  return Buffer.from(e).toString(`base64`);
}
function Yt(e) {
  return Uint8Array.from(Buffer.from(e, `base64`)).buffer;
}
function Xt(e) {
  let t = new Uint8Array(e),
    n = ``,
    r = 32768;
  for (let e = 0; e < t.length; e += r) {
    let i = t.subarray(e, e + r);
    n += String.fromCharCode.apply(null, i);
  }
  return btoa(n);
}
function Zt(e) {
  let t = atob(e),
    n = t.length,
    r = new Uint8Array(n);
  for (let e = 0; e < n; e++) r[e] = t.charCodeAt(e);
  return r.buffer;
}
function Qt(e, t) {
  if (!t) return e;
  let n = {};
  for (let r of Object.keys(e)) n[r] = t[r] ?? e[r];
  return n;
}
function $t(e, t, n) {
  return en(JSON.parse(e), t, n);
}
function en(e, t, n) {
  let r = Qt(dg, n?.operations);
  if (typeof e == `number`) return s(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
  let i = e,
    a = Array(i.length),
    o = null;
  function s(e, n = !1) {
    if (e === Kh) return r.fromPrimitive(void 0);
    if (e === Jh) return r.fromPrimitive(NaN);
    if (e === Yh) return r.fromPrimitive(1 / 0);
    if (e === Xh) return r.fromPrimitive(-1 / 0);
    if (e === Zh) return r.fromPrimitive(-0);
    if (n || typeof e != `number`) throw Error(`Invalid input`);
    if (e in a) return a[e];
    let c = i[e];
    if (!c || typeof c != `object`) a[e] = r.fromPrimitive(c);
    else if (Array.isArray(c))
      if (typeof c[0] == `string`) {
        let n = c[0],
          l = t && Object.hasOwn(t, n) ? t[n] : void 0;
        if (l) {
          let t = c[1];
          if ((typeof t != `number` && (t = i.push(c[1]) - 1), Object.hasOwn(a, t)))
            return (a[e] = l(a[t]));
          if (((o ??= new Set()), o.has(t))) throw Error(`Invalid circular reference`);
          return (o.add(t), (a[e] = l(s(t))), o.delete(t), a[e]);
        }
        switch (n) {
          case `Date`:
            a[e] = r.fromISOString(c[1]);
            break;
          case `Set`:
            let t = r.createSet();
            a[e] = t;
            for (let e = 1; e < c.length; e += 1) r.addValue(t, s(c[e]));
            break;
          case `Map`:
            let o = r.createMap();
            a[e] = o;
            for (let e = 1; e < c.length; e += 2) r.addEntry(o, s(c[e]), s(c[e + 1]));
            break;
          case `RegExp`:
            a[e] = r.fromRegExpInfo(c[1], c[2]);
            break;
          case `Object`: {
            let t = c[1];
            if (typeof i[t] == `object` && i[t][0] !== `BigInt`) throw Error(`Invalid input`);
            a[e] = r.box(s(t));
            break;
          }
          case `BigInt`:
            a[e] = r.fromPrimitive(BigInt(c[1]));
            break;
          case `null`:
            let l = r.createNullPrototypeObject();
            a[e] = l;
            for (let e = 1; e < c.length; e += 2) {
              if (c[e] === `__proto__`)
                throw Error("Cannot parse an object with a `__proto__` property");
              r.set(l, c[e], s(c[e + 1]));
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
            if (i[c[1]][0] !== `ArrayBuffer`) throw Error(`Invalid data`);
            let t = s(c[1]);
            a[e] = r.fromViewInfo(n, t, c[2], c[3]);
            break;
          }
          case `ArrayBuffer`: {
            let t = c[1];
            if (typeof t != `string`) throw Error(`Invalid ArrayBuffer encoding`);
            a[e] = r.fromArrayBuffer(sg(t));
            break;
          }
          case `URL`:
          case `URLSearchParams`:
          case `Temporal.Duration`:
          case `Temporal.Instant`:
          case `Temporal.PlainDate`:
          case `Temporal.PlainTime`:
          case `Temporal.PlainDateTime`:
          case `Temporal.PlainMonthDay`:
          case `Temporal.PlainYearMonth`:
          case `Temporal.ZonedDateTime`:
            a[e] = r.fromStringValue(n, c[1]);
            break;
          default:
            throw Error(`Unknown type ${n}`);
        }
      } else if (c[0] === Qh) {
        let t = c[1];
        if (!Ht(t)) throw Error(`Invalid input`);
        let n = r.createSparseArray(t);
        a[e] = n;
        for (let e = 2; e < c.length; e += 2) {
          let i = c[e];
          if (!Vt(i) || i >= t) throw Error(`Invalid input`);
          r.set(n, i, s(c[e + 1]));
        }
      } else {
        let t = r.createArray(c.length);
        a[e] = t;
        for (let e = 0; e < c.length; e += 1) {
          let n = c[e];
          n !== qh && r.set(t, e, s(n));
        }
      }
    else {
      let t = r.createObject();
      a[e] = t;
      for (let e of Object.keys(c)) {
        if (e === `__proto__`) throw Error("Cannot parse an object with a `__proto__` property");
        r.set(t, e, s(c[e]));
      }
    }
    return a[e];
  }
  return s(0);
}
function tn(e, t, n) {
  let r = nn(!1, e, t, n);
  return typeof r == `string` ? r : `[${r.join(`,`)}]`;
}
function nn(e, t, n, r) {
  let i = Qt(ug, r?.operations),
    a = [],
    o = new Map(),
    s = [];
  if (n) for (let e of Object.getOwnPropertyNames(n)) s.push({ key: e, fn: n[e] });
  let c = [],
    l = 0;
  function u(n, r) {
    let d = i.typeOf(n);
    if (d === `undefined`) return Kh;
    let f;
    if (d === `number`) {
      if (((f = i.toPrimitive(n)), Number.isNaN(f))) return Jh;
      if (f === 1 / 0) return Yh;
      if (f === -1 / 0) return Xh;
      if (f === 0 && 1 / f < 0) return Zh;
    }
    let p = i.identify(n);
    if (o.has(p)) return o.get(p);
    ((r ??= l++), o.set(p, r));
    for (let { key: e, fn: t } of s) {
      let i = t(n);
      if (i) return ((a[r] = `["${e}",${u(i)}]`), r);
    }
    if (d === `function`) throw new tg(`Cannot stringify a function`, c, n, t);
    if (d === `symbol`) throw new tg(`Cannot stringify a Symbol primitive`, c, n, t);
    let m = ``;
    if (d !== `object`) m = rn(d === `number` ? f : i.toPrimitive(n));
    else if (i.isThenable(n)) {
      if (!e)
        throw new tg(
          `Cannot stringify a Promise or thenable — use stringifyAsync instead`,
          c,
          n,
          t
        );
      m = i.toPromise(n).then((e) => {
        let t = u(e, r);
        t < 0 && (a[r] = t);
      });
    } else {
      let e = i.tagOf(n);
      switch (e) {
        case `Number`:
        case `String`:
        case `Boolean`:
        case `BigInt`:
          m = `["Object",${u(i.unbox(n))}]`;
          break;
        case `Date`:
          m = `["Date","${i.toISOString(n)}"]`;
          break;
        case `URL`:
          m = `["URL",${Rt(i.toStringValue(n))}]`;
          break;
        case `URLSearchParams`:
          m = `["URLSearchParams",${Rt(i.toStringValue(n))}]`;
          break;
        case `RegExp`:
          let { source: r, flags: a } = i.regExpInfo(n);
          m = a ? `["RegExp",${Rt(r)},"${a}"]` : `["RegExp",${Rt(r)}]`;
          break;
        case `Array`: {
          let e = !1,
            t = i.lengthOf(n);
          m = `[`;
          for (let r = 0; r < t; r += 1)
            if ((r > 0 && (m += `,`), i.hasOwn(n, r)))
              (c.push(`[${r}]`), (m += u(i.get(n, r))), c.pop());
            else if (e) m += qh;
            else {
              let r = i.indicesOf(n),
                a = r.length,
                o = String(t).length;
              if ((t - a) * 3 > 4 + o + a * (o + 1)) {
                m = `[` + Qh + `,` + t;
                for (let e = 0; e < r.length; e++) {
                  let t = r[e];
                  (c.push(`[${t}]`), (m += `,` + t + `,` + u(i.get(n, t))), c.pop());
                }
                break;
              } else ((e = !0), (m += qh));
            }
          m += `]`;
          break;
        }
        case `Set`:
          m = `["Set"`;
          for (let e of i.valuesOf(n)) m += `,${u(e)}`;
          m += `]`;
          break;
        case `Map`:
          m = `["Map"`;
          for (let [e, t] of i.entriesOf(n)) {
            let n = i.typeOf(e),
              r = n !== `object` && n !== `function` && n !== `symbol`;
            (c.push(`.get(${r ? rn(i.toPrimitive(e)) : `...`})`),
              (m += `,${u(e)},${u(t)}`),
              c.pop());
          }
          m += `]`;
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
        case `BigUint64Array`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.length}`),
            (m += `]`));
          break;
        }
        case `DataView`: {
          let t = i.viewInfo(n);
          ((m = `["` + e + `",` + u(t.buffer)),
            t.byteLength !== t.bufferByteLength && (m += `,${t.byteOffset},${t.byteLength}`),
            (m += `]`));
          break;
        }
        case `ArrayBuffer`:
          m = `["ArrayBuffer","${og(i.toArrayBuffer(n))}"]`;
          break;
        case `Temporal.Duration`:
        case `Temporal.Instant`:
        case `Temporal.PlainDate`:
        case `Temporal.PlainTime`:
        case `Temporal.PlainDateTime`:
        case `Temporal.PlainMonthDay`:
        case `Temporal.PlainYearMonth`:
        case `Temporal.ZonedDateTime`:
          m = `["${e}",${Rt(i.toStringValue(n))}]`;
          break;
        default: {
          let e = i.shapeOf(n);
          if (e.kind === `not-plain`) throw new tg(`Cannot stringify arbitrary non-POJOs`, c, n, t);
          if (e.kind === `symbol-keys`)
            throw new tg(`Cannot stringify POJOs with symbolic keys`, c, n, t);
          if (e.kind === `null-proto`) {
            m = `["null"`;
            for (let r of e.keys) {
              if (r === `__proto__`)
                throw new tg(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (c.push(Bt(r)), (m += `,${Rt(r)},${u(i.get(n, r))}`), c.pop());
            }
            m += `]`;
          } else {
            m = `{`;
            let r = !1;
            for (let a of e.keys) {
              if (a === `__proto__`)
                throw new tg(`Cannot stringify objects with __proto__ keys`, c, n, t);
              (r && (m += `,`),
                (r = !0),
                c.push(Bt(a)),
                (m += `${Rt(a)}:${u(i.get(n, a))}`),
                c.pop());
            }
            m += `}`;
          }
        }
      }
    }
    return ((a[r] = m), r);
  }
  let d = u(t);
  return d < 0 ? `${d}` : a;
}
function rn(e) {
  let t = typeof e;
  return t === `string`
    ? Rt(e)
    : e === void 0
      ? Kh.toString()
      : e === 0 && 1 / e < 0
        ? Zh.toString()
        : t === `bigint`
          ? `["BigInt","${e}"]`
          : String(e);
}
function an(e, t, n = `lazy`) {
  switch ((W.__framer_events?.push([e, t, n]), e)) {
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
function on(e) {
  return F(e) && (e === `` || pg.test(e));
}
function sn() {
  return { [mg.QueryCache]: new Map(), [mg.CollectionUtilsCache]: new Map() };
}
function cn() {
  if (!Th) return;
  if (hg !== void 0) return hg;
  let e = document.getElementById(`__framer__handoverData`);
  if (e) {
    try {
      hg = $t(e.text) ?? sn();
    } catch (e) {
      ((hg = sn()), console.warn(`Failed to parse handover data. Falling back to network.`, e));
    }
    return (
      Oh(() => {
        (e?.remove(), (e = null));
      }),
      hg
    );
  }
}
function ln(e, t) {
  let n = cn();
  return n ? n[e].has(t) : !1;
}
function un(e, t) {
  let n = cn();
  if (!n) return;
  let r = n[e];
  if (!r.has(t)) return;
  let i = r.get(t);
  return (r.delete(t), i);
}
function dn(e) {
  return e?.id ?? Uh;
}
function fn(e, t, n, r) {
  return `${e}|${t}|${n}|${r}`;
}
function pn(e) {
  return (t) => {
    if (!e) return;
    let n = e[t];
    if (!n) return;
    if (yg.has(n)) return yg.get(n);
    let r = new xg(n, t);
    return (yg.set(n, r), r);
  };
}
function mn({ children: e, collectionUtils: t }) {
  let n = C(() => ({ get: pn(t) }), [t]);
  return E(bg.Provider, { value: n, children: e });
}
function hn() {
  return t(bg);
}
function gn(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function _n() {
  return s === void 0 ? void 0 : s;
}
function vn() {
  let e = _n();
  return e ? Sg.test(e.platform) : !1;
}
function yn() {
  let e = _n();
  return e
    ? Cg.test(e.platform)
      ? !0
      : wg.test(e.platform) && e.maxTouchPoints != null && e.maxTouchPoints > 2
    : !1;
}
function bn() {
  return vn() || yn();
}
function xn() {
  let e = _n();
  return e ? Tg.test(e.userAgent) : !1;
}
function Sn() {
  let e = _n();
  return e ? Eg.test(e.userAgent) && Dg.test(e.vendor) && !xn() : !1;
}
function Cn() {
  let e = _n();
  return e ? Og.test(e.userAgent) && kg.test(e.vendor) : !1;
}
function wn() {
  let e = _n();
  return e ? Ag.test(e.userAgent) : !1;
}
function Tn() {
  return typeof document == `object`;
}
function En() {
  let e = _n();
  if (!e) return -1;
  let t = jg.exec(e.userAgent);
  return t?.[1] ? parseFloat(t[1]) : -1;
}
function Dn() {
  let e = _n();
  return e ? Mg.test(e.userAgent) : !1;
}
function On() {
  return !1;
}
function kn() {
  let e = _n();
  return e && Ng.test(e.userAgent) ? `tablet` : e && Pg.test(e.userAgent) ? `phone` : `desktop`;
}
function An() {
  return kn() === `desktop`;
}
function jn(e) {
  return bn() ? e.metaKey : e.ctrlKey;
}
function Mn() {}
async function Nn() {}
function Pn(e) {
  return typeof e == `function` ? e() : e;
}
function Fn() {
  if (!(typeof scheduler > `u`)) return scheduler;
}
function In(e, t) {
  let n = e?.priority,
    r = Fn();
  return n === `background`
    ? (t?.() ?? gn(1))
    : r?.yield
      ? r.yield(e).catch(Mn)
      : r?.postTask
        ? r.postTask(Mn, e).catch(Mn)
        : t
          ? t()
          : n === `user-blocking`
            ? Rg
            : gn(0);
}
function Ln(e, t, n) {
  let r = -1 / 0,
    i,
    a = new Set();
  function o() {
    for (let e of a) e();
    a.clear();
  }
  function s() {
    return document.hidden ? (o(), !0) : !1;
  }
  function c() {
    Tn() && (document.addEventListener(`visibilitychange`, s), f.addEventListener(`pagehide`, o));
  }
  function l(n) {
    return new Promise((r) => {
      (setTimeout(r, zg),
        e(() => {
          In(n, t).then(r);
        }));
    });
  }
  function u(e) {
    return Tn()
      ? new Promise((t) => {
          let n = !0,
            r = () => {
              n && ((n = !1), a.delete(r), t());
            };
          (a.add(r), s() || c(), e.then(r, r));
        })
      : e;
  }
  function d(e, n) {
    let { continueAfter: r, ensureContinueBeforeUnload: i, ...a } = e,
      o = (n ?? r === `paint`) ? l(a) : In(a, t);
    return i ? u(o) : o;
  }
  function p(e, t, n) {
    n && e.pendingPaintYieldCount++;
    let a = d(t, n),
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
        o = t ?? (e.priority === `user-blocking` ? Fg : Ig),
        s = Tn() && document.hidden ? Lg : o;
      if (n - r < s) return;
      ((a = { pendingPaintYieldCount: 0 }), (i = a));
    }
    let o = e.continueAfter === `paint` && (a.pendingPaintYieldCount > 0 || n?.() !== !1);
    return p(a, e, o);
  }
  function h(e) {
    let { batch: n, batchDuration: r, ...i } = e ?? {};
    return !Tn() && !t ? (n ? void 0 : Rg) : n ? m(i, r) : d(i);
  }
  return h;
}
function Rn(e, t = !1) {
  let n = ``;
  if (f !== void 0)
    if (t) n = f.location.search;
    else {
      let e = f.history?.state?.queryParamBackAnchorSearch;
      n = e === void 0 ? f.location.search : e === `` ? `` : `?${e}`;
    }
  return n ? zn(n, e) : e;
}
function zn(e, t) {
  let n = t.indexOf(`#`),
    r = n === -1 ? t : t.substring(0, n),
    i = n === -1 ? `` : t.substring(n),
    a = r.indexOf(`?`),
    o = a === -1 ? r : r.substring(0, a),
    s = a === -1 ? `` : r.substring(a),
    c = new URLSearchParams(s),
    l = new URLSearchParams(e);
  for (let [e, t] of l) c.has(e) || (e !== Hg && c.append(e, t));
  let u = c.toString();
  return u === `` ? r + i : o + `?` + u + i;
}
async function Bn(e, t, n, r, i, a, o) {
  let s = e,
    c = !1,
    l = { ...a },
    u = Array.from(s.matchAll(Ug)),
    d = await Promise.all(
      u.map(async (e) => {
        let s = e?.[0],
          u = e?.[1];
        if (!s || !u) throw Error(`Failed to replace path variables: unexpected regex match group`);
        let d = a[u];
        if (!d || !F(d)) throw Error(`No slug found for path variable ${u}`);
        let f = o?.get(i);
        if (!f || !t) return d;
        let p = f.getRecordIdBySlug(d, t),
          m = it(p) ? await p : p;
        if (!m) return d;
        let h = f.getSlugByRecordId(m, n),
          g = it(h) ? await h : h;
        if (!g) {
          c = !0;
          let e = f.getSlugByRecordId(m, r),
            t = it(e) ? await e : e;
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
function Vn(e, t) {
  return t ? `/${t}${e}` : e;
}
async function Hn({
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
      u = await Bn(l, e, t, n, r.collectionId, i, a);
    } catch {}
  return (
    u.path !== void 0 && (u.path = Vn(u.path, t.slug)),
    o && u.path && (u.path = Rn(u.path, !0)),
    u
  );
}
async function Un({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a || !r || !n?.path) return;
  let o = Array.from(n.path.matchAll(Ug)).at(-1)?.[1];
  if (!o) return;
  let s = r[o];
  if (F(s)) return a.getRecordIdBySlug(s, e ?? void 0);
}
async function Wn({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r }) {
  if (!e || e.id === Uh) return;
  let i = n?.collectionId;
  if (!i) return;
  let a = t?.get(i);
  if (!a?.getContentLocaleIdByRecordId) return;
  let o = await Un({ activeLocale: e, collectionUtils: t, currentRoute: n, pathVariables: r });
  if (o) return a.getContentLocaleIdByRecordId(o, e);
}
async function Gn({
  activeLocale: e,
  defaultLocale: t,
  collectionUtilsCache: n,
  locales: r,
  pathVariables: i,
  route: a,
  routeId: o,
}) {
  if (!e || !a) return {};
  let s =
      (await Wn({ activeLocale: e, collectionUtils: n, currentRoute: a, pathVariables: i })) ??
      a.canonicalLocaleIdByLocaleId?.[e.id],
    c = s ? r.find(({ id: e }) => e === s) : void 0;
  if (!c || c.id === e.id) return { contentLocaleId: s };
  let { pathVariables: l } = await Hn({
    currentLocale: e,
    nextLocale: c,
    defaultLocale: t,
    route: a,
    routeId: o,
    pathVariables: i,
    collectionUtils: n,
    preserveQueryParams: !1,
  });
  return Tt(l ?? {}, i ?? {}, !1)
    ? { contentLocaleId: s }
    : { contentLocaleId: s, canonicalPathVariables: l };
}
function Kn() {
  return A.useContext(Kg);
}
function qn() {
  let e = hn(),
    { getRoute: t } = Ot(),
    { activeLocale: n, locales: r } = Kn();
  return u(
    (i, a, o) => {
      if (!i || !t) return;
      let s = t(i),
        { pathVariables: c } = a;
      return Yn(
        s,
        {
          routeId: i,
          pathVariables: c,
          locale: a.locale ?? n ?? void 0,
          locales: r,
          collectionUtils: e,
        },
        o
      );
    },
    [t, e, n, r]
  );
}
function Jn(e, t = !0) {
  let n = qn();
  j(() => {
    if (!(!t || !Jg)) for (let t of e) n(t, {});
  }, [e, t, n]);
}
async function Yn(e, t, n = {}) {
  if (!Jg || !e) return;
  let { priority: r = `background`, yieldBeforePreload: i = !0, shouldLoadRouteData: a = !0 } = n,
    o = e.page;
  if (!o || !dt(o)) return;
  let s = a && !!t;
  if (!(o.getStatus().hasLoaded && !s)) {
    i && (await Vg({ priority: r }));
    try {
      let n = await o.preload();
      s && t && n && (await Xn(n, e, t, r));
    } catch {}
  }
}
async function Xn(e, t, n, r) {
  let i = e.loader;
  if (!i?.load) return;
  let { canonicalPathVariables: a } = await Gn({
      activeLocale: n.locale ?? null,
      defaultLocale: n.locales?.find((e) => e.id === Uh),
      collectionUtilsCache: n.collectionUtils,
      locales: n.locales ?? [],
      pathVariables: n.pathVariables,
      route: t,
      routeId: n.routeId,
    }),
    o = {
      signal: n.signal ?? new AbortController().signal,
      pathVariables: n.pathVariables ?? {},
      canonicalPathVariables: a,
      routeId: n.routeId,
      locale: n.locale,
      priority: r,
      collectionUtils: n.collectionUtils,
    };
  try {
    await i.load({}, o);
  } catch {}
}
function Zn(e, t) {
  return e.replace(Ug, (e, n) => {
    let r = t[n];
    return typeof r != `string` || r.length === 0 ? e : encodeURIComponent(r);
  });
}
function Qn() {
  if (Yg) return;
  Yg = !0;
  let e = !1,
    t = () => {
      e = !0;
    };
  (f.addEventListener(`popstate`, t, { once: !0 }),
    queueMicrotask(() => {
      if ((f.removeEventListener(`popstate`, t), e)) {
        let e = `Popstate called synchronously during pushState(). Please report this to the Framer team.`;
        (console.error(e), an(`published_site_load_recoverable_error`, { message: e }));
      }
    }));
}
function $n({ children: e, value: t }) {
  return E(Xg.Provider, { value: t, children: e });
}
function er() {
  return A.useContext(Xg);
}
function tr(e, t, { global: n, routes: r }) {
  return r[e]?.[t] || n;
}
function nr(e) {
  let t = Zg,
    n = e.next(0),
    r = [n.value];
  for (; !n.done && t < Qg;) ((n = e.next(t)), r.push(n.value), (t += Zg));
  return (
    r.length === 1 && r.push(n.value),
    { easing: `linear(${r.join(`,`)})`, duration: t - Zg }
  );
}
function rr(e) {
  return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function ir(e) {
  let { innerWidth: t, innerHeight: n } = f,
    [r, i] = rr(e.x),
    [a, o] = rr(e.y);
  return { x: i === `px` ? r : (r / 100) * t, y: o === `px` ? a : (a / 100) * n };
}
function ar(e) {
  let [t, n] = rr(e);
  return n === `px` ? `calc(100% - ${t}px)` : `${100 - t}%`;
}
function or(e) {
  let { x: t, y: n } = ir(e);
  return Math.hypot(Math.max(t, f.innerWidth - t), Math.max(n, f.innerHeight - n));
}
function sr(e, t, n, r) {
  let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
  return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function cr(e) {
  return e ? t_[e] : void 0;
}
function lr(e, { transition: t, ...n }) {
  let r = `view-transition-` + e,
    i = { duration: `0s`, easing: `linear` };
  if (t.type === `tween`)
    ((i.duration = t.duration + `s`), (i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
  else if (ur(t)) {
    let { easing: e, duration: n } = nr(
      oe({ keyframes: [0, 1], ...dr(t), restDelta: 0.001, restSpeed: 1e-4 })
    );
    ((i.duration = n + `ms`), (i.easing = e));
  }
  let a = cr(n?.mask?.type),
    o = sr(n, `start`, e, a),
    s = sr({ ...n_, mask: n.mask }, `end`, e, a);
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
function ur(e) {
  return e.type === `spring`;
}
function dr(e) {
  return e.durationBasedSpring
    ? { duration: e.duration * 1e3, bounce: e.bounce }
    : { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function fr({ exit: e = i_, enter: t }) {
  let n = document.createElement(`style`);
  n.id = r_;
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
    (r += lr(`exit`, e)),
    (r += lr(`enter`, t)),
    (n.textContent = r),
    document.head.appendChild(n));
}
function pr() {
  Oh(() => {
    We.render(() => {
      performance.mark(`framer-vt-remove`);
      let e = document.getElementById(r_);
      e && document.head.removeChild(e);
    });
  });
}
function mr() {
  return !!document.startViewTransition;
}
function hr(e) {
  return new Promise((t) => {
    We.render(() => {
      (performance.mark(`framer-vt-style`), fr(e), t());
    });
  });
}
async function gr(e, t, n) {
  if (!mr()) {
    e();
    return;
  }
  if ((await hr(t), n?.aborted)) return;
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
      .catch(a_),
    Promise.all([r.ready, r.finished])
      .then(() => {
        (performance.mark(`framer-vt-finished`), pr());
      })
      .catch(a_),
    r
  );
}
function _r() {
  let e = er(),
    t = _(void 0);
  return (
    j(() => {
      t.current &&= (t.current(), void 0);
    }),
    u(
      (n, r, i, a) => {
        let o = tr(n, r, e);
        if (o) {
          let e = new Promise((e) => {
            t.current = e;
          });
          return gr(
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
function vr(e, t) {
  Oh(() => {
    let n = document.querySelector(`link[rel='canonical']`);
    if (!n) return;
    let r = new URL(e, t);
    ((r.search = ``), n.setAttribute(`href`, r.toString()));
  });
}
function yr(e, t) {
  Oh(() => {
    let n = document.querySelector(`link[rel='canonical'][data-framer-generated-canonical]`);
    if (
      !e ||
      document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)
    ) {
      n?.remove();
      return;
    }
    let r = new URL(e, t ?? document.baseURI);
    ((r.search = ``), (r.hash = ``));
    let i = n ?? document.createElement(`link`);
    (i.setAttribute(`rel`, `canonical`),
      i.setAttribute(`data-framer-generated-canonical`, ``),
      i.setAttribute(`href`, r.toString()),
      document.head.append(i));
  });
}
function br(e) {
  Oh(() => {
    let t = Array.from(
      document.querySelectorAll(`link[rel='alternate'][hreflang][data-framer-generated-hreflang]`)
    );
    if (document.querySelector(`link[rel='canonical']:not([data-framer-generated-canonical])`)) {
      for (let e of t) e.remove();
      return;
    }
    let n = new Map();
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      t && n.set(t, e);
    }
    let r = new Set();
    for (let { href: t, hrefLang: i } of e) {
      r.add(i);
      let e = n.get(i) ?? document.createElement(`link`);
      (e.setAttribute(`rel`, `alternate`),
        e.setAttribute(`data-framer-generated-hreflang`, ``),
        e.setAttribute(`href`, t),
        e.setAttribute(`hreflang`, i),
        document.head.append(e));
    }
    for (let e of t) {
      let t = e.getAttribute(`hreflang`);
      (!t || !r.has(t)) && e.remove();
    }
  });
}
function xr(e, t, n, r = i) {
  r(() => {
    let t = async (e) => (await Vg({ ...n, continueAfter: `paint` }), e()),
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
  let t = _(new Set());
  return (
    xr(
      () => {
        for (let e of t.current) e();
        t.current.clear();
      },
      void 0,
      { priority: `user-blocking` }
    ),
    u(
      (n) => {
        let r,
          i = new Promise((e) => {
            ((r = e), t.current.add(e));
          });
        if (!e) return { promise: i, measureDetail: n, ignore: null };
        let a = `${e}-start`,
          o = `${e}-end`,
          s = !1;
        return (
          performance.mark(a),
          i
            .finally(() => {
              s || (performance.mark(o), performance.measure(e, { start: a, end: o, detail: n }));
            })
            .catch((e) => {
              console.error(e);
            }),
          {
            promise: i,
            measureDetail: n,
            ignore: () => {
              ((s = !0), r && (t.current.delete(r), r()));
            },
          }
        );
      },
      [e]
    )
  );
}
function Cr(e) {
  return L(e) && `routeId` in e;
}
function wr(e = f.history.state) {
  return Cr(e) ? e : void 0;
}
function Tr(e) {
  return e?.entryId;
}
function Er(e) {
  c_ = e;
}
function Dr() {
  return c_;
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
function jr(e, t) {
  (performance.mark(`framer-history-replace`), Er(kr(e, wr())), t && vr(t, f.location.href));
  let n =
    !t || t === f.location.href
      ? f.History.prototype.replaceState.bind(f.history)
      : f.history.replaceState.bind(f.history);
  try {
    n(c_, ``, t);
  } catch {}
}
function Mr(e) {
  (performance.mark(`framer-history-replace`),
    Er(Ar(e)),
    History.prototype.replaceState.call(f.history, c_, ``, void 0));
}
function Nr(e, t) {
  (performance.mark(`framer-history-push`), Er(Ar(e)), vr(t, f.location.href), Qn());
  try {
    f.history.pushState(c_, ``, t);
  } catch {}
}
function Pr({
  disabled: e,
  routeId: t,
  initialPathVariables: n,
  initialLocaleId: r,
  initialContentLocaleId: a,
  initialCanonicalPathVariables: o,
}) {
  i(() => {
    if (e) return;
    performance.mark(`framer-history-set-initial-state`);
    let i = f.location.hash ? f.location.hash.slice(1) : void 0;
    jr({
      ...wr(),
      routeId: t,
      hash: i,
      pathVariables: n,
      localeId: r,
      contentLocaleId: a,
      canonicalPathVariables: o,
    });
  }, []);
}
function Fr(e, t, n) {
  let r = _r(),
    i = Sr(`framer-route-change`),
    { onHistoryTraversal: a, usesCustomScrollRestoration: o } = e,
    s = o ? `manual` : `after-transition`,
    c = _(void 0),
    l = u(() => {
      (c.current?.resolve(), (c.current = void 0));
    }, []),
    d = u(
      async ({ state: e }) => {
        if (!Cr(e)) return;
        let o = i({ popstate: !0 }),
          c = Pt();
        (o.promise.finally(c), Tr(Dr()) !== (Tr(e) ?? Tr(wr())) && a(), Er(e));
        let {
            routeId: u,
            hash: d,
            pathVariables: p,
            localeId: m,
            contentLocaleId: h,
            canonicalPathVariables: g,
          } = e,
          _ = F(d) ? d : f.location.hash ? f.location.hash.slice(1) : void 0,
          v = !1,
          y = () => {
            v ||=
              (n(
                u,
                F(m) ? m : void 0,
                _,
                f.location.pathname + f.location.search + f.location.hash,
                L(p) ? p : void 0,
                h,
                g,
                !0,
                o,
                !1
              ),
              !0);
          },
          b = s === `after-transition`;
        (await Promise.resolve(r(t.current, u, y))
          .then((e) => e?.updateCallbackDone)
          .catch(y)
          .finally(() => {
            b || l();
          }),
          await o.promise,
          b && l(),
          await f.navigation?.transition?.finished.catch(wh),
          s_(),
          vr(f.location.href));
      },
      [t, i, a, l, n, r, s]
    ),
    p = u(
      (e) => {
        if (e.navigationType !== `traverse` || !e.canIntercept) return;
        let t = e.destination?.getState();
        Cr(t) &&
          e.intercept({
            async handler() {
              (await new Promise((e, t) => {
                c.current = { resolve: e, reject: t };
              }),
                (c.current = void 0));
            },
            scroll: s,
          });
      },
      [s]
    );
  j(
    () => (
      f.addEventListener(`popstate`, d),
      l_ && f.navigation.addEventListener(`navigate`, p),
      () => {
        (f.removeEventListener(`popstate`, d),
          l_ && f.navigation.removeEventListener(`navigate`, p));
      }
    ),
    [d, p]
  );
}
async function Ir(e, t, n, r) {
  if (!e.path || !t) return !1;
  let i = r + Vn(Zn(e.path, t), n.slug);
  return (await fetch(i, { method: `HEAD`, redirect: `manual` })).type === `opaqueredirect`
    ? ((f.location.href = f.location.origin + i), !0)
    : !1;
}
function Lr() {
  let e = hn();
  return u((t) => Rr({ ...t, collectionUtils: e }), [e]);
}
async function Rr({ sitePrefix: e, ...t }) {
  let n = await Hn(t);
  if (n) {
    try {
      localStorage.preferredLocale = t.nextLocale.code;
    } catch {}
    try {
      if (!F(n.path)) throw Error(`Expected result.path to be a string`);
      if (n.isMissingInLocale && (await Ir(t.route, n.pathVariables, t.nextLocale, e))) return;
    } catch {}
    return n;
  }
}
function zr(e) {
  let t = _(Promise.resolve()),
    n = _(),
    r = u(
      (r) => {
        if (r.navigationType === `traverse` || !r.canIntercept) return;
        let i = n.current;
        (i?.signal.addEventListener(`abort`, () => {
          i.abort(`user aborted`);
        }),
          r.intercept({ handler: () => t.current, scroll: e ? `manual` : `after-transition` }));
      },
      [e]
    );
  return u(
    (e, i, a) => {
      if (!l_) {
        a?.();
        return;
      }
      ((t.current = e),
        (n.current = i),
        f.navigation.addEventListener(`navigate`, r),
        a?.(),
        e.finally(() => {
          t.current === e &&
            ((n.current = void 0), f.navigation.removeEventListener(`navigate`, r));
        }));
    },
    [r]
  );
}
function Br(e) {
  let t = 0,
    n = e.length;
  for (; t < n && e[t] === `-`;) t++;
  for (; n > t && e[n - 1] === `-`;) n--;
  return e.slice(t, n);
}
function Vr(e) {
  return Br(e.trim().toLowerCase().replace(u_, `-`));
}
function Hr({ children: e, value: t }) {
  return E(f_.Provider, { value: t, children: e });
}
function Ur() {
  return t(f_);
}
function Wr(e, t) {
  let n = h(() => ({ inputs: t, result: e() }))[0],
    r = _(!0),
    i = _(n),
    a =
      r.current || (t && i.current.inputs && Tt(t, i.current.inputs, !1))
        ? i.current
        : { inputs: t, result: e() };
  return (
    j(() => {
      ((r.current = !1), (i.current = a));
    }, [a]),
    a.result
  );
}
function Gr(e, t) {
  return Wr(() => e, t);
}
function Kr() {
  return f.location.search;
}
function qr() {
  return ``;
}
function Jr(e) {
  return (
    m_.add(e),
    f.addEventListener(`popstate`, e),
    () => {
      (m_.delete(e), f.removeEventListener(`popstate`, e));
    }
  );
}
function Yr() {
  for (let e of m_) e();
}
function Xr({ children: e, routerRenderKey: t, isNavigationCommitPending: n }) {
  let i = Ur() === `preview`,
    [a, o] = h(``),
    s = _(t);
  p_(() => {
    s.current = t;
  }, [t]);
  let c = r(Jr, Kr, qr),
    d = te(c),
    p = t !== te(t),
    m = i ? a : p ? c : d,
    g = u(
      async (e) => {
        if (i) {
          l(() => {
            o((t) => e(new URLSearchParams(t)).toString());
          });
          return;
        }
        let r = n(),
          a = t;
        if ((await Vg({ continueAfter: `paint` }), r || n() || s.current !== a)) return;
        let c = wr();
        if (!c) return;
        let u = new URL(f.location.href),
          d = e(u.searchParams).toString();
        u.search = d;
        let p = c.queryParamBackAnchorSearch,
          m = f.location.search.slice(1),
          h = p === void 0 && d !== m,
          g = p !== void 0 && d === p,
          _ = { ...c, queryParamBackAnchorSearch: g ? void 0 : (p ?? (h ? m : void 0)) },
          v = u.toString();
        (h || g ? Nr(_, v) : jr(_, v), Yr());
      },
      [n, i, t]
    ),
    v = Wr(() => ({ urlSearchParams: new URLSearchParams(m), replaceSearchParams: g }), [m, g]);
  return E(h_.Provider, { value: v, children: e });
}
function Zr(e, t) {
  if (!e.startsWith(`/`) || !t.startsWith(`/`))
    throw Error(`from/to paths are expected to be absolute`);
  let [n] = Qr(e),
    [r, i] = Qr(t),
    a = $r(n, r);
  return (
    a === `` && (a = `.`),
    !a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
    a + `/` + i
  );
}
function Qr(e) {
  let t = e.lastIndexOf(`/`);
  return [e.substring(0, t + 1), e.substring(t + 1)];
}
function $r(e, t) {
  if (e === t || ((e = `/` + ei(e)), (t = `/` + ei(t)), e === t)) return ``;
  let n = e.length,
    r = n - 1,
    i = t.length - 1,
    a = r < i ? r : i,
    o = -1,
    s = 0;
  for (; s < a; s++) {
    let n = v_(e, 1 + s);
    if (n !== v_(t, 1 + s)) break;
    n === __ && (o = s);
  }
  if (s === a)
    if (i > a) {
      if (v_(t, 1 + s) === __) return b_(t, 1 + s + 1);
      if (s === 0) return b_(t, 1 + s);
    } else r > a && (v_(e, 1 + s) === __ ? (o = s) : s === 0 && (o = 0));
  let c = ``;
  for (s = 1 + o + 1; s <= n; ++s)
    (s === n || v_(e, s) === __) && (c += c.length === 0 ? `..` : `/..`);
  return `${c}${b_(t, 1 + o)}`;
}
function ei(e) {
  let t = ``,
    n = 0,
    r = -1,
    i = 0,
    a = 0;
  for (let o = 0; o <= e.length; ++o) {
    if (o < e.length) a = v_(e, o);
    else if (C_(a)) break;
    else a = __;
    if (C_(a)) {
      if (!(r === o - 1 || i === 1))
        if (i === 2) {
          if (t.length < 2 || n !== 2 || v_(t, t.length - 1) !== g_ || v_(t, t.length - 2) !== g_) {
            if (t.length > 2) {
              let e = y_(t, S_);
              (e === -1 ? ((t = ``), (n = 0)) : ((t = b_(t, 0, e)), (n = t.length - 1 - y_(t, S_))),
                (r = o),
                (i = 0));
              continue;
            } else if (t.length !== 0) {
              ((t = ``), (n = 0), (r = o), (i = 0));
              continue;
            }
          }
          x_ && ((t += t.length > 0 ? `${S_}..` : `..`), (n = 2));
        } else
          (t.length > 0 ? (t += `${S_}${b_(e, r + 1, o)}`) : (t = b_(e, r + 1, o)),
            (n = o - r - 1));
      ((r = o), (i = 0));
    } else a === g_ && i !== -1 ? ++i : (i = -1);
  }
  return t;
}
function ti(e) {
  if (!e) return ``;
  let t;
  try {
    t = new URL(e);
  } catch {
    return ``;
  }
  return t.pathname === `/` || f.location.origin !== t.origin
    ? ``
    : t.pathname.endsWith(`/`)
      ? t.pathname.slice(0, -1)
      : t.pathname;
}
function ni(e, t) {
  let n = e.replace(Ug, (e, n) => t[n] ?? e);
  if (!n.includes(`:`)) return n;
}
function ri(e, t, n) {
  let r = Object.assign({}, t.elements, n);
  if (e.startsWith(`:`)) {
    let n = e.slice(1),
      i = t.elementPatterns?.[n];
    if (i) return ni(i, r);
  }
  if (e.includes(`:`)) return ni(e, r);
  let i = t.elements?.[e];
  return i ? ni(i, r) : e;
}
function ii(
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
    localeSlug: p,
  }
) {
  let m;
  if ((i && e && (m = ri(i, e, o)), l)) return m ?? ``;
  let h = t ?? `/`;
  (n && d && (h = n[d] ?? h), r && (h = h.replace(Ug, (e, t) => String(r[t] || e))));
  let g = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
  a && (g = g.replace(Ug, (e, t) => String(a[t] || e)));
  let _ = !!(h === g && m),
    v = !_ && a !== void 0 && t !== void 0 && e?.path !== void 0 && t === e.path && h !== g;
  if (s)
    if (w_.has(h) && f !== void 0) {
      let e = ti(u);
      g = Zr(f.location.pathname, e + g);
    } else g = Zr(h, g);
  else g = Vn(g, p);
  let y = _ || v;
  return ((c || y) && (g = Rn(g, y)), m && (g = `${g}#${m}`), g);
}
function ai(e) {
  return T_ in e && e[T_] === 1;
}
function oi() {
  if (!E_) return;
  ((O_ = !0), performance.mark(`framer-react-event-handling-start`));
  let e = { capture: !0 },
    t = document.body;
  E_.forEach((n) => t.addEventListener(n, D_, e));
}
function si() {
  return (
    j(() => {
      if (!O_ || !E_) return;
      let e = { capture: !0 },
        t = document.body;
      (E_.forEach((n) => t.removeEventListener(n, D_, e)),
        (E_ = void 0),
        performance.mark(`framer-react-event-handling-end`));
    }, []),
    null
  );
}
function ci(e) {
  let t = !1;
  return function (...n) {
    if (!t) return ((t = !0), e.apply(this, n));
  };
}
function li(e, t, n) {
  try {
    performance.measure(e, t, n);
  } catch (t) {
    console.warn(`Could not measure ${e}`, t);
  }
}
function ui() {
  ((J_ = new q_()), J_.render.markStart());
}
function di() {
  (c(() => {
    J_?.useInsertionEffects.markRouterStart();
  }, []),
    i(() => {
      J_?.useLayoutEffects.markRouterStart();
    }, []),
    j(() => {
      J_?.useEffects.markRouterStart();
    }, []));
}
function fi() {
  (c(() => {
    (J_?.render.markEnd(), J_?.useInsertionEffects.markStart());
  }, []),
    i(() => {
      if ((J_?.useLayoutEffects.markStart(), document.visibilityState !== `visible`)) {
        Y_ = !0;
        return;
      }
      We.read(() => {
        (J_?.browserRendering.requestAnimationFrame.markStart(),
          J_?.unattributedHydrationOverhead.measure());
      });
    }, []),
    j(() => {
      (J_?.useEffects.markStart(),
        J_?.browserRendering.hasStarted ||
          (J_?.mutationEffects.measure(), J_?.useEffects.markAreSynchronous()));
    }, []));
}
function pi() {
  (c(() => {
    J_?.useInsertionEffects.markEnd();
  }, []),
    i(() => {
      (J_?.useLayoutEffects.markEnd(),
        !(Y_ || document.visibilityState !== `visible`) &&
          We.read(() => {
            (J_?.browserRendering.requestAnimationFrame.markEnd(),
              Vg().then(() => {
                J_?.browserRendering.layoutStylePaint.markEnd();
              }));
          }));
    }, []),
    j(() => {
      J_?.useEffects.markEnd();
    }, []));
}
function mi() {
  return (fi(), null);
}
function hi() {
  return (pi(), null);
}
function gi(e, t) {
  let n = { style: t, "data-framer-root": `` };
  return A.isValidElement(e) ? A.cloneElement(e, n) : E(e, { ...n });
}
function _i() {
  return $_;
}
function vi(e) {
  if (ev?.lastRoutes !== e) {
    let t = {},
      n = {},
      r = [],
      i = {},
      a = e;
    for (let r in e) {
      let i = e[r];
      R(i, `route must be defined`);
      let { path: a, pathLocalized: o } = i;
      if (a && ((t[a] = { path: a, depth: xi(a), routeId: r }), o))
        for (let e in o) {
          let t = o[e];
          R(t, `localizedPath must be defined`);
          let i = xi(t),
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
    ev = { pathRoutes: t, pathRoutesLocalized: n, paths: r, pathsLocalized: i, lastRoutes: a };
  }
  return {
    pathRoutes: ev.pathRoutes,
    paths: ev.paths,
    pathRoutesLocalized: ev.pathRoutesLocalized,
    pathsLocalized: ev.pathsLocalized,
  };
}
function yi(e, t, n = !0, r = _i()) {
  return bi(e, t, r, n);
}
function bi(e, t, n, r = !0) {
  let { pathRoutes: i, paths: a, pathRoutesLocalized: o, pathsLocalized: s } = vi(e),
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
      let e = Si(t, n.path);
      if (e.isMatch) return { routeId: n.routeId, localeId: l, pathVariables: e.pathVariables };
    }
  }
  let d = i[t];
  if (d) {
    let e = Si(t, d.path);
    if (e.isMatch) return { routeId: d.routeId, localeId: l, pathVariables: e.pathVariables };
  }
  if (l && u) {
    let e = s[l];
    if (e)
      for (let { path: n, routeId: r } of e) {
        let e = Si(t, n);
        if (e.isMatch) return { routeId: r, localeId: l, pathVariables: e.pathVariables };
      }
  }
  for (let { path: e, routeId: n } of a) {
    let r = Si(t, e);
    if (r.isMatch) return { routeId: n, localeId: l, pathVariables: r.pathVariables };
  }
  if (!r) throw Error(`No exact match found for path`);
  let f = i[`/`];
  if (f) return { routeId: f.routeId, localeId: l };
  let p = Object.keys(e)[0];
  if (!p) throw Error(`Router should not have undefined routes`);
  return { routeId: p, localeId: l };
}
function xi(e) {
  let t = e.replace(/^\/|\/$/gu, ``);
  return t === `` ? 0 : t.split(`/`).length;
}
function Si(e, t) {
  let n = [],
    r = Ci(t).replace(Ug, (e, t) => (n.push(t), `([^/]+)`)),
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
function Ci(e) {
  return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function wi(e) {
  return e.startsWith(`"`) && e.endsWith(`"`) ? e.slice(1, -1) : e;
}
function Ti(e) {
  let t = new Map();
  if (!e) return t;
  for (let n of e.split(`,`)) {
    let [e, ...r] = n.split(`;`),
      i = e?.trim().toLowerCase();
    if (!i) continue;
    let a = ``;
    for (let e of r) {
      let t = e.indexOf(`=`);
      t !== -1 && e.slice(0, t).trim().toLowerCase() === `desc` && (a = wi(e.slice(t + 1).trim()));
    }
    t.set(i, a);
  }
  return t;
}
function Ei(e, t) {
  let n = e.toLowerCase(),
    r = Ti(t).get(n);
  if (r !== void 0) return { name: n, description: r };
}
function Di(e) {
  if (f === void 0 || typeof performance > `u` || !(`PerformanceServerTiming` in f)) return;
  let t = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
  if (!t || t.length === 0) return;
  let n = t.find((t) => t.name === e);
  if (n) return { name: n.name, description: n.description };
}
function Oi() {
  let e = Di(`abtests`);
  return new URLSearchParams(e?.description);
}
function ki(e, t, n) {
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
function Ai(e, t) {
  for (let [n, r] of t) ki(e, n, r);
}
function ji(e) {
  for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function Mi(e, t) {
  if (!e[t] || !e[t].abTestingParentId) return;
  let n = e[t].abTestingParentId,
    r = e[n],
    { abTestingParentId: i, ...a } = e[t],
    o = r?.elements || a.elements ? { ...r?.elements, ...a.elements } : void 0;
  e[n] = { ...a, includedLocales: r?.includedLocales, elements: o, abTestingVariantId: t };
}
function Ni(e, t) {
  if (f === void 0) return t;
  let n = t;
  if (t) {
    Mi(e, t);
    let r = e[t]?.abTestingParentId;
    r && (n = r);
  }
  return (Ai(e, Oi()), ji(e), n);
}
function Pi(e) {
  (j(() => {
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
    c(() => {
      ((document.title = e.title || ``),
        e.viewport &&
          document.querySelector(`meta[name="viewport"]`)?.setAttribute(`content`, e.viewport));
    }, [e.title, e.viewport]));
}
function Fi(e, ...t) {
  tv.has(e) || (tv.add(e), console.warn(e, ...t));
}
function Ii(e, t, n) {
  Fi(`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`);
}
function Li(e) {
  return (
    typeof e == `object` &&
    !!e &&
    iv in e &&
    e[iv] instanceof Function &&
    av in e &&
    e[av] instanceof Function
  );
}
function Ri(e, t) {
  return {
    interpolate(e, n) {
      let r = e.get(),
        i = n.get(),
        a = rv(r);
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
function zi(e, t) {
  let n = 10 ** Math.round(Math.abs(t));
  return Math.round(e * n) / n;
}
function Bi(e, t) {
  return t === 0 ? Math.round(e) : ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function Vi(e) {
  return Math.round(e * 2) / 2;
}
function Hi(e, t) {
  return { x: e, y: t };
}
function Ui(e, t, n, r = !1) {
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
function Wi(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Gi(e) {
  let t = Ki(e);
  return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function Ki(e) {
  let t = /\d?\.?\d+/u.exec(e);
  return t ? Number(t[0]) : void 0;
}
function qi(e, t, n) {
  return (
    (lv.rgb_r = e / 255),
    (lv.rgb_g = t / 255),
    (lv.rgb_b = n / 255),
    lv.rgbToHsluv(),
    { h: lv.hsluv_h, s: lv.hsluv_s, l: lv.hsluv_l }
  );
}
function Ji(e, t, n, r = 1) {
  return (
    (lv.hsluv_h = e),
    (lv.hsluv_s = t),
    (lv.hsluv_l = n),
    lv.hsluvToRgb(),
    { r: lv.rgb_r * 255, g: lv.rgb_g * 255, b: lv.rgb_b * 255, a: r }
  );
}
function Yi(e, t, n, r) {
  let i = Math.round(e),
    a = Math.round(t * 100),
    o = Math.round(n * 100);
  return r === void 0 || r === 1
    ? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
    : `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function Xi(e, t, n) {
  return {
    r: Wi(e) ? ra(e, 255) * 255 : 0,
    g: Wi(t) ? ra(t, 255) * 255 : 0,
    b: Wi(n) ? ra(n, 255) * 255 : 0,
  };
}
function Zi(e, t, n, r) {
  let i = [
    oa(Math.round(e).toString(16)),
    oa(Math.round(t).toString(16)),
    oa(Math.round(n).toString(16)),
  ];
  return r &&
    i[0].charAt(0) === i[0].charAt(1) &&
    i[1].charAt(0) === i[1].charAt(1) &&
    i[2].charAt(0) === i[2].charAt(1)
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join(``);
}
function Qi(e, t, n) {
  let r,
    i,
    a = ra(e, 255),
    o = ra(t, 255),
    s = ra(n, 255),
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
function $i(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && --n,
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
  );
}
function ea(e, t, n) {
  let r, i, a;
  if (((e = ra(e, 360)), (t = ra(t * 100, 100)), (n = ra(n * 100, 100)), t === 0)) r = i = a = n;
  else {
    let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - o;
    ((r = $i(s, o, e + 1 / 3)), (i = $i(s, o, e)), (a = $i(s, o, e - 1 / 3)));
  }
  return { r: r * 255, g: i * 255, b: a * 255 };
}
function ta(e, t, n) {
  ((e = ra(e, 255)), (t = ra(t, 255)), (n = ra(n, 255)));
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
function na(e, t, n) {
  ((e = ra(e, 360) * 6), (t = ra(t * 100, 100)), (n = ra(n * 100, 100)));
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
function ra(e, t) {
  let n, r;
  if (((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)) {
    ia(e) && (e = `100%`);
    let t = aa(e);
    ((r = Math.min(n, Math.max(0, parseFloat(e)))), t && (r = Math.floor(r * n) / 100));
  } else r = e;
  return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function ia(e) {
  return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function aa(e) {
  return typeof e == `string` && e.includes(`%`);
}
function oa(e) {
  return e.length === 1 ? `0` + e : `` + e;
}
function sa(e) {
  if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
  let t = e
      .replace(/^[\s,#]+/u, ``)
      .trimEnd()
      .toLowerCase(),
    n = sv[t];
  if ((n && (t = n), t === `transparent`)) return { r: 0, g: 0, b: 0, a: 0, format: `name` };
  let r;
  return (r = uv.rgb.exec(t))
    ? {
        r: parseInt(r[1] ?? ``),
        g: parseInt(r[2] ?? ``),
        b: parseInt(r[3] ?? ``),
        a: 1,
        format: `rgb`,
      }
    : (r = uv.rgba.exec(t))
      ? {
          r: parseInt(r[1] ?? ``),
          g: parseInt(r[2] ?? ``),
          b: parseInt(r[3] ?? ``),
          a: parseFloat(r[4] ?? ``),
          format: `rgb`,
        }
      : (r = uv.hsl.exec(t))
        ? { h: parseInt(r[1] ?? ``), s: Gi(r[2] ?? ``), l: Gi(r[3] ?? ``), a: 1, format: `hsl` }
        : (r = uv.hsla.exec(t))
          ? {
              h: parseInt(r[1] ?? ``),
              s: Gi(r[2] ?? ``),
              l: Gi(r[3] ?? ``),
              a: parseFloat(r[4] ?? ``),
              format: `hsl`,
            }
          : (r = uv.hsv.exec(t))
            ? { h: parseInt(r[1] ?? ``), s: Gi(r[2] ?? ``), v: Gi(r[3] ?? ``), a: 1, format: `hsv` }
            : (r = uv.hsva.exec(t))
              ? {
                  h: parseInt(r[1] ?? ``),
                  s: Gi(r[2] ?? ``),
                  v: Gi(r[3] ?? ``),
                  a: parseFloat(r[4] ?? ``),
                  format: `hsv`,
                }
              : (r = uv.hex8.exec(t))
                ? {
                    r: ca(r[1] ?? ``),
                    g: ca(r[2] ?? ``),
                    b: ca(r[3] ?? ``),
                    a: la(r[4] ?? ``),
                    format: n ? `name` : `hex`,
                  }
                : (r = uv.hex6.exec(t))
                  ? {
                      r: ca(r[1] ?? ``),
                      g: ca(r[2] ?? ``),
                      b: ca(r[3] ?? ``),
                      a: 1,
                      format: n ? `name` : `hex`,
                    }
                  : (r = uv.hex4.exec(t))
                    ? {
                        r: ca(`${r[1]}${r[1]}`),
                        g: ca(`${r[2]}${r[2]}`),
                        b: ca(`${r[3]}${r[3]}`),
                        a: la(r[4] + `` + r[4]),
                        format: n ? `name` : `hex`,
                      }
                    : (r = uv.hex3.exec(t))
                      ? {
                          r: ca(`${r[1]}${r[1]}`),
                          g: ca(`${r[2]}${r[2]}`),
                          b: ca(`${r[3]}${r[3]}`),
                          a: 1,
                          format: n ? `name` : `hex`,
                        }
                      : !1;
}
function ca(e) {
  return parseInt(e, 16);
}
function la(e) {
  return ca(e) / 255;
}
function ua(e) {
  let t = dv.exec(e);
  if (!t) return null;
  let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
  return { r: parseFloat(n), g: parseFloat(r), b: parseFloat(i), a: a ? parseFloat(a) : 1 };
}
function da(e = 0) {
  let t = Math.abs(e);
  return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function fa({ r: e, g: t, b: n, a: r }) {
  return { r: da(e), g: da(t), b: da(n), a: r };
}
function pa(e = 0) {
  let t = Math.abs(e);
  return t > 0.0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055) : e * 12.92;
}
function ma({ r: e, g: t, b: n, a: r }) {
  return { r: pa(e), g: pa(t), b: pa(n), a: r };
}
function ha({ r: e, g: t, b: n, a: r }) {
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
function ga(e) {
  return (e %= 360) < 0 ? e + 360 : e;
}
function _a({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
  let i = ga(e),
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
function va(e) {
  return hv(mv(e));
}
function ya(e) {
  return pv(fv(e));
}
function ba(e, t, n, r = 1) {
  let i;
  return (
    typeof e == `number` &&
    !Number.isNaN(e) &&
    typeof t == `number` &&
    !Number.isNaN(t) &&
    typeof n == `number` &&
    !Number.isNaN(n)
      ? (i = Ca({ r: e, g: t, b: n, a: r }))
      : typeof e == `string`
        ? (i = xa(e))
        : typeof e == `object` &&
          (i =
            e.hasOwnProperty(`r`) && e.hasOwnProperty(`g`) && e.hasOwnProperty(`b`)
              ? Ca(e)
              : wa(e)),
    i
  );
}
function xa(e) {
  let t = sa(e);
  if (t) return t.format === `hsl` ? wa(t) : t.format === `hsv` ? Sa(t) : Ca(t);
}
function Sa(e) {
  let t = na(e.h, e.s, e.v);
  return { ...Qi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ta(e.a) };
}
function Ca(e) {
  let t = Xi(e.r, e.g, e.b);
  return { ...Qi(t.r, t.g, t.b), ...t, format: `rgb`, a: e.a === void 0 ? 1 : Ta(e.a) };
}
function wa(e) {
  let t,
    n,
    r,
    i = { r: 0, g: 0, b: 0 },
    a = { h: 0, s: 0, l: 0 };
  return (
    (t = Wi(e.h) ? e.h : 0),
    (t = (t + 360) % 360),
    (n = Wi(e.s) ? e.s : 1),
    typeof e.s == `string` && (n = Ki(e.s)),
    (r = Wi(e.l) ? e.l : 0.5),
    typeof e.l == `string` && (r = Ki(e.l)),
    (i = ea(t, n, r)),
    (a = { h: t, s: n, l: r }),
    { ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
  );
}
function Ta(e) {
  return ((e = parseFloat(e)), e < 0 && (e = 0), (Number.isNaN(e) || e > 1) && (e = 1), e);
}
function Ea() {
  return W.location.origin === `https://screenshot.framer.invalid`;
}
function Da({ children: e }) {
  if (t(kv).top) return E(v, { children: e });
  let n = _({
      byId: {},
      byName: {},
      byLastId: {},
      byPossibleId: {},
      byLastName: {},
      byLayoutId: {},
      count: { byId: {}, byName: {} },
    }),
    r = _({ byId: {}, byName: {}, byLastId: {}, byPossibleId: {}, byLastName: {}, byLayoutId: {} }),
    i = _(new Set()).current,
    a = _({
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
            R(!!c, `duplicatedId must be defined`);
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
          { layoutId: m, value: h } = Oa(p, (n.current.count[o][p] ?? -1) + 1, i);
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
  return E(kv.Provider, { value: a, children: e });
}
function Oa(e, t, n) {
  let r = t,
    i = r ? `${e}-${r}` : e;
  for (; n.has(i);) (r++, (i = `${e}-${r}`));
  return { layoutId: i, value: r };
}
function ka({ enabled: e = !0, ...n }) {
  let r = t(kv),
    i = C(() => ({ ...r, enabled: e }), [e]);
  return E(kv.Provider, { ...n, value: i });
}
function Aa(e) {
  let t = _(null);
  return (t.current === null && (t.current = e()), t.current);
}
function ja(e) {
  let { error: t, file: n } = e,
    r = n ? `Error in ${Ma(n)}` : `Error`,
    i = t instanceof Error ? t.message : `` + t;
  return w(`div`, {
    style: jv,
    children: [
      E(`div`, { className: `text`, style: Nv, children: r }),
      i && E(`div`, { className: `text`, style: Pv, children: i }),
    ],
  });
}
function Ma(e) {
  return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function Na() {
  let e = K.current();
  return e === K.canvas || e === K.export;
}
function Pa() {
  let [e] = h(() => Na());
  return e;
}
function Fa(e) {
  let t = Object.create(Object.prototype);
  return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function Ia(e, t) {
  if (e === void 0 || t === void 0) return;
  let n = e,
    r = t,
    i = 0;
  t > e && ((n = t), (r = e), (i = 1));
  let a = n / r,
    o = [];
  for (let e of Gv) {
    if (n <= e) return o;
    o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
  }
  return o;
}
function La(e, t) {
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
function Ra(e, t, n) {
  if (!n || n.length === 0 || !t.pixelWidth) return;
  let r = [];
  for (let t of n) {
    if (t.width < Kv) continue;
    let n = La(e, t.maxSideSize);
    r.push(`${n} ${t.width}w`);
  }
  return (r.push(`${La(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function za(e, t, n) {
  if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
  let r = [],
    i = Math.max(t.pixelWidth, t.pixelHeight),
    a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
  for (let t of Wv) {
    let n = La(e, Math.round(i * t * a));
    r.push({ src: n, scale: t });
  }
  return r;
}
function Ba(e, t, n) {
  if (![`auto`, `lossless`].includes(t.preferredSize ?? ``)) return { src: n, srcSet: void 0 };
  if (e) {
    let r = za(n, t, e);
    if (!r?.length) return { src: n, srcSet: void 0 };
    let [i, ...a] = r;
    return { src: i?.src, srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `) };
  } else return { src: n, srcSet: Ra(n, t, Ia(t.pixelWidth, t.pixelHeight)) };
}
function Va() {
  return {
    backgroundRepeat: `repeat`,
    backgroundPosition: `left top`,
    backgroundSize: `64px auto`,
    backgroundImage: at(q.imagePlaceholderSvg),
  };
}
function Ha(e) {
  switch (e) {
    case `fit`:
      return `contain`;
    case `stretch`:
      return `fill`;
    default:
      return `cover`;
  }
}
function Ua(e, t) {
  let n = e ?? `center`,
    r = t ?? `center`;
  return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function Wa(e) {
  return {
    display: `block`,
    width: `100%`,
    height: `100%`,
    ...Uv,
    objectPosition: Ua(e.positionX, e.positionY),
    objectFit: Ha(e.fit),
  };
}
function Ga(e) {
  let t = A.useRef(e ? `auto` : `async`),
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
function Ka({
  image: e,
  containerSize: t,
  nodeId: n,
  alt: r,
  draggable: i,
  avoidAsyncDecoding: a,
}) {
  let o = q.useImageSource(e, t, n),
    s = Wa(e),
    { decoding: c, onImageLoad: l, onImageMount: u } = Ga(a),
    { srcSet: d, src: f } =
      `srcSet` in e ? { src: o, srcSet: e.srcSet } : Ba(e.nodeFixedSize, e, o);
  return E(`img`, {
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
function qa({ image: e, containerSize: t, nodeId: n }) {
  let r = A.useRef(null),
    i = q.useImageElement(e, t, n),
    a = Wa(e);
  return (
    A.useLayoutEffect(() => {
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
    E(`div`, { ref: r, style: { display: `contents`, ...Uv } })
  );
}
function Ja({ nodeId: e, image: t, containerSize: n }) {
  let r = A.useRef(null),
    i = q.useImageSource(t, n, e);
  return (
    A.useLayoutEffect(() => {
      let n = r.current;
      if (n === null) return;
      let a = Wa(t);
      q.renderOptimizedCanvasImage(n, i, a, e);
    }, [e, t, i]),
    E(`div`, { ref: r, style: { display: `contents`, ...Uv } })
  );
}
function Ya({ layoutId: e, image: t, ...n }) {
  e && (e += `-background`);
  let r = null,
    i = !!e,
    a = null;
  if (F(t.src))
    if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
      let e = I(t.backgroundSize) ? t.backgroundSize : 1,
        n = { width: Math.round(e * t.pixelWidth), height: Math.round(e * t.pixelHeight) },
        o = Vi(e * (t.pixelWidth / 2)),
        s = q.useImageSource(t, n);
      ((r = {
        ...qv,
        backgroundImage: `url(${s})`,
        backgroundRepeat: `repeat`,
        backgroundPosition: Ua(t.positionX, t.positionY),
        opacity: void 0,
        border: 0,
        backgroundSize: `${o}px auto`,
      }),
        (a = null),
        (i = !0));
    } else
      a =
        K.current() === K.canvas
          ? q.canRenderOptimizedCanvasImage(q.useImageSource(t))
            ? E(Ja, { image: t, ...n })
            : E(qa, { image: t, ...n })
          : E(Ka, { image: t, avoidAsyncDecoding: K.current() === K.export, ...n });
  let o = a ? qv : (r ?? { ...qv, ...Va() });
  return i
    ? E(ne.div, { layoutId: e, style: o, "data-framer-background-image-wrapper": !0, children: a })
    : E(`div`, { style: o, "data-framer-background-image-wrapper": !0, children: a });
}
function Xa(e, t, n = !0) {
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
function Za(e) {
  let t = e.layoutId ? `${e.layoutId}-border` : void 0;
  if (!e.borderWidth) return null;
  let n = {
    position: `absolute`,
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...Uv,
    pointerEvents: `none`,
  };
  return e.border
    ? ((n.border = e.border), E(ne.div, { style: n }))
    : (Xa(e, n, !1), E(ne.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function Qa(e, t) {
  let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
    a = n ?? i,
    o = r && a ? r[a] : void 0;
  return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function $a(e) {
  let { background: t, image: n } = e;
  if (n !== void 0 && t && !Yv.isImageObject(t)) return;
  let r = null;
  if (((r = F(n) ? { alt: ``, src: n } : rv.get(t, null)), Yv.isImageObject(r))) return Qa(r, e);
}
function eo(e) {
  return !e || (!Object.keys(e).length && e.constructor === Object);
}
function to(e) {
  return typeof e != `string` && typeof e != `number`;
}
function no(e) {
  return e != null && typeof e != `boolean` && !eo(e);
}
function B(e) {
  return Number.isFinite(e);
}
function ro(e) {
  return (Math.PI / 180) * e;
}
function io(e) {
  return Qe(e) ? !1 : e === 2 || e === 5;
}
function ao(e) {
  if (typeof e == `string`) {
    let t = e.trim();
    if (t === `auto`) return 2;
    if (t.endsWith(`fr`)) return 3;
    if (t.endsWith(`%`)) return 1;
    if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
  }
  return 0;
}
function oo(e, t, n, r) {
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
      if (!r) return so(e);
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
function so(e) {
  switch (e) {
    case `minWidth`:
    case `minHeight`:
      return -1 / 0;
    case `maxWidth`:
    case `maxHeight`:
      return 1 / 0;
    default:
      z(e, `unknown constraint key`);
  }
}
function co(e, t, n, r) {
  return (
    t.minHeight && (e = Math.max(oo(`minHeight`, t.minHeight, n, r), e)),
    t.maxHeight && (e = Math.min(oo(`maxHeight`, t.maxHeight, n, r), e)),
    e
  );
}
function lo(e, t, n, r) {
  return (
    t.minWidth && (e = Math.max(oo(`minWidth`, t.minWidth, n, r), e)),
    t.maxWidth && (e = Math.min(oo(`maxWidth`, t.maxWidth, n, r), e)),
    e
  );
}
function uo(e, t, n, r, i) {
  let a = lo(B(e) ? e : ey, n, r, i),
    o = co(B(t) ? t : ty, n, r, i);
  return (
    B(n.aspectRatio) &&
      n.aspectRatio > 0 &&
      (B(n.left) && B(n.right)
        ? (o = a / n.aspectRatio)
        : (B(n.top) && B(n.bottom)) || n.widthType === 0
          ? (a = o * n.aspectRatio)
          : (o = a / n.aspectRatio)),
    { width: a, height: o }
  );
}
function fo(e, t) {
  return !B(e) || !B(t) ? null : e + t;
}
function po(e) {
  return (
    typeof e.right == `string` ||
    typeof e.bottom == `string` ||
    (typeof e.left == `string` && (!e.center || e.center === `y`)) ||
    (typeof e.top == `string` && (!e.center || e.center === `x`))
  );
}
function mo(e) {
  return !e._constraints || po(e) ? !1 : e._constraints.enabled;
}
function ho(e) {
  let { size: t } = e,
    { width: n, height: r } = e;
  return (
    B(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
    B(n) && B(r) ? { width: n, height: r } : null
  );
}
function go(e) {
  let t = ho(e);
  if (t === null) return null;
  let { left: n, top: r } = e;
  return B(n) && B(r) ? { x: n, y: r, ...t } : null;
}
function _o(e, t, n = !0) {
  if (e.positionFixed || e.positionAbsolute) return null;
  let r = t === 1 || t === 2;
  if (!mo(e) || r) return go(e);
  let i = vo(e),
    a = yo(t),
    o = a ? { sizing: a, positioning: a, viewport: null } : null;
  return $v.toRect(i, o, null, n, null);
}
function vo(e) {
  let { left: t, right: n, top: r, bottom: i, center: a, _constraints: o, size: s } = e,
    { width: c, height: l } = e;
  (c === void 0 && (c = s), l === void 0 && (l = s));
  let { aspectRatio: u, autoSize: d } = o,
    f = Qv.quickfix({
      left: B(t),
      right: B(n),
      top: B(r),
      bottom: B(i),
      widthType: ao(c),
      heightType: ao(l),
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
function yo(e) {
  return e === 0 || e === 1 || e === 2 ? null : e;
}
function bo() {
  return A.useContext(ny).parentSize;
}
function xo(e) {
  return typeof e == `object`;
}
function So(e) {
  return xo(e) ? e.width : e;
}
function Co(e) {
  return xo(e) ? e.height : e;
}
function wo(e, t) {
  return E(ry, { parentSize: t, children: e });
}
function To(e) {
  return _o(e, bo(), !0);
}
function Eo({ width: e, height: t }) {
  return e === `auto` || e === `min-content` || t === `auto` || t === `min-content`;
}
function Do(e) {
  if (e) {
    if (e.pixelHeight && e.pixelWidth) return { width: e.pixelWidth, height: e.pixelHeight };
    if (e.src === void 0) return { width: 1, height: 1 };
  }
}
function Oo(e) {
  return e && e !== `search` && e !== `slot` && e !== `template` ? ne[e] : ne.div;
}
function ko(e) {
  let t = !1,
    n;
  return {
    get value() {
      return ((t ||= ((n = e()), !0)), n);
    },
  };
}
function Ao(e, t, n = ay) {
  if (!(!e || n.has(e) || typeof document > `u`)) {
    if ((n.add(e), !t)) {
      if (!oy) {
        let e = document.createElement(`style`);
        if (
          (e.setAttribute(`type`, `text/css`),
          e.setAttribute(`data-framer-css`, `true`),
          !document.head)
        ) {
          console.warn(`not injecting CSS: the document is missing a <head> element`);
          return;
        }
        if ((document.head.appendChild(e), e.sheet)) oy = e.sheet;
        else {
          console.warn(`not injecting CSS: injected <style> element does not have a sheet`, e);
          return;
        }
      }
      t = oy;
    }
    try {
      t.insertRule(e, t.cssRules.length);
    } catch {}
  }
}
function jo() {
  return Ea() ? K.preview : K.current();
}
function Mo(e) {
  return typeof e == `number` ? e : e.startsWith(`--`) ? xy.variable(e) : e === `` ? `""` : e;
}
function No(e, t, n) {
  let r = e + Math.max(t, 1) - 1;
  switch (n) {
    case `decimal`:
      return Po(r);
    case `lower-alpha`:
    case `upper-alpha`:
    case `lower-latin`:
    case `upper-latin`:
      return Fo(r);
    case `lower-roman`:
    case `upper-roman`:
      return Lo(r);
    default:
      return Po(r);
  }
}
function Po(e) {
  return String(e).length;
}
function Fo(e) {
  let t = 1;
  for (; Io(t) < e;) t++;
  return t;
}
function Io(e) {
  let t = 0;
  for (let n = 0; n < e; n++) t += 26 ** (n + 1);
  return t;
}
function Lo(e) {
  let t = 0;
  for (let n of wy) {
    if (e < n) return t;
    t++;
  }
  let n = Math.floor((e - 888) / 1e3);
  return n >= 1 ? Math.max(t, n + 12) : t;
}
function Ro(e, t) {
  return xy.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function zo(e, t) {
  return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function Bo() {
  return K.current() === K.preview ? Ry.value : Ly.value;
}
function Vo(e) {
  return uy(e, Bo, `framer-lib-combinedCSSRules`);
}
function Ho(e, t, n) {
  ((e[`data-framer-layout-hint-center-x`] = t === !0 || t === `x` || void 0),
    (e[`data-framer-layout-hint-center-y`] = t === !0 || t === `y` || void 0),
    (e[`data-framer-layout-hint-x`] = n?.x),
    (e[`data-framer-layout-hint-y`] = n?.y));
}
function Uo(e, t) {
  let n = {};
  return (
    K.current() === K.canvas &&
      Ho(n, zy ? e : void 0, {
        x: typeof t?.x == `number` ? t.x : void 0,
        y: typeof t?.y == `number` ? t.y : void 0,
      }),
    n
  );
}
function Wo(e) {
  return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Go(e, t) {
  if (!t && ((t = e.children), !t)) return { props: e, children: t };
  let n = e._forwardedOverrides;
  return (
    n &&
      (t = A.Children.map(t, (e) =>
        A.isValidElement(e) ? A.cloneElement(e, { _forwardedOverrides: n }) : e
      )),
    { props: e, children: t }
  );
}
function Ko(e) {
  return (t, n) =>
    e === !0
      ? `translate(-50%, -50%) ${n}`
      : e === `x`
        ? `translateX(-50%) ${n}`
        : e === `y`
          ? `translateY(-50%) ${n}`
          : n || `none`;
}
function qo(e, { specificLayoutId: n, postfix: r } = {}) {
  let { name: i, layoutIdKey: a, duplicatedFrom: o, __fromCodeComponentNode: s = !1, drag: c } = e,
    { getLayoutId: l, enabled: u } = t(kv);
  return C(() => {
    if (!u) return e.layoutId;
    let t = n || e.layoutId;
    if (!t && (c || !a || s)) return;
    let d = t || l({ id: a, name: i, duplicatedFrom: o });
    if (d) return r ? `${d}-${r}` : d;
  }, [u]);
}
function Jo() {
  let [e, t] = A.useState(0);
  return A.useCallback(() => t((e) => e + 1), []);
}
function Yo(e) {
  let t = Jo();
  j(() => {
    let n = e?.current;
    if (n)
      return (
        Hy?.observeElementWithCallback(e.current, t),
        () => {
          Hy?.unobserve(n);
        }
      );
  }, [e, t]);
}
function Xo(e) {
  return [
    ...(e.firstElementChild && e.firstElementChild.hasAttribute(Uy)
      ? e.firstElementChild.children
      : e.children),
  ]
    .filter(Zo)
    .map(Qo);
}
function Zo(e) {
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
function Qo(e) {
  if (!(e instanceof HTMLElement) || e.children.length === 0 || e.style.display !== `contents`)
    return e;
  let t = [...e.children].find(Zo);
  return t ? Qo(t) : e;
}
function $o(e, n, r = () => [], i = {}) {
  let { id: a, visible: o, _needsMeasure: s } = e,
    { skipHook: c = !1 } = i,
    l = t(By),
    u = K.current() === K.canvas;
  p_(() => {
    !u ||
      l ||
      c ||
      (n.current && a && o && s && q.queueMeasureRequest(Wo(a), n.current, r(n.current)));
  });
}
function es(e) {
  let t = e.closest(`[data-framer-component-container]`);
  t && q.queueMeasureRequest(Wo(t.id), t, Xo(t));
}
function ts(e) {
  e.willChange = `transform`;
  let t = K.current() === K.canvas;
  Ky && t && (e.translateZ = Wy);
}
function ns(e) {
  ((e.willChange = `transform`), rs(e, !0));
}
function rs(e, t) {
  let n = K.current() === K.canvas;
  if (!Ky || !n) return;
  let r = (F(e.transform) && e.transform) || ``;
  t ? r.includes(Gy) || (e.transform = r + Gy) : (e.transform = r.replace(Gy, ``));
}
function is(e, t, n, r = !0) {
  if (!e) return;
  let i = Fv(e.style),
    a = n || i[t],
    o = () => {
      as(a) && (i[t] = a);
    };
  ((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function as(e) {
  return F(e) || I(e) || $e(e);
}
function os(e, t) {
  if (e.size < t) return;
  let n = Math.round(Math.random());
  for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function ss(e, t, n, r) {
  let i = t.get(n);
  if (i) return i;
  os(t, e);
  let a = r(n);
  return (t.set(n, a), a);
}
function cs(e, t) {
  let n = [e, t];
  return Xy.test(e) ? e : ss(1e3, Zy, n, () => Yy.multiplyAlpha(e, t));
}
function ls(e, t = 1) {
  let n;
  return (
    (n =
      `stops` in e
        ? e.stops
        : [
            { value: e.start, position: 0 },
            { value: e.end, position: 1 },
          ]),
    t === 1 ? n : n.map((e) => ({ ...e, value: cs(e.value, t) }))
  );
}
function us(e, t) {
  let n = 0;
  return (
    ls(e, t).forEach((e) => {
      n ^= Jy(e.value) ^ e.position;
    }),
    n
  );
}
function ds(e) {
  return e && Qy.every((t) => t in e);
}
function fs(e) {
  return e && $y.every((t) => t in e);
}
function ps({ background: e, backgroundColor: t }, n) {
  t
    ? typeof t == `string` || vv(t)
      ? (n.backgroundColor = t)
      : G.isColorObject(e) && (n.backgroundColor = e.initialValue || G.toRgbString(e))
    : e &&
      ((e = rv.get(e, null)),
      typeof e == `string` || vv(e)
        ? (n.background = e)
        : tb.isLinearGradient(e)
          ? (n.background = tb.toCSS(e))
          : rb.isRadialGradient(e)
            ? (n.background = rb.toCSS(e))
            : G.isColorObject(e) && (n.backgroundColor = e.initialValue || G.toRgbString(e)));
}
function V(e, t, n, r) {
  if ((r === void 0 && (r = t), e[t] !== void 0)) {
    n[r] = e[t];
    return;
  }
}
function ms(e) {
  return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function hs(e) {
  return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function gs(e) {
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
    me(n)
      ? (t.cornerShape = _e(() => `superellipse(${n.get()})`))
      : n !== void 0 && (t.cornerShape = `superellipse(${n})`),
    V(e, `size`, t),
    V(e, `width`, t),
    V(e, `height`, t),
    V(e, `minWidth`, t),
    V(e, `minHeight`, t),
    V(e, `top`, t),
    V(e, `right`, t),
    V(e, `bottom`, t),
    V(e, `left`, t),
    V(e, `position`, t),
    V(e, `overflow`, t),
    V(e, `opacity`, t),
    e._border?.borderWidth || V(e, `border`, t),
    V(e, `borderRadius`, t),
    V(e, `radius`, t, `borderRadius`),
    V(e, `color`, t),
    V(e, `shadow`, t, `boxShadow`),
    V(e, `x`, t),
    V(e, `y`, t),
    V(e, `z`, t),
    V(e, `rotate`, t),
    V(e, `rotateX`, t),
    V(e, `rotateY`, t),
    V(e, `rotateZ`, t),
    V(e, `scale`, t),
    V(e, `scaleX`, t),
    V(e, `scaleY`, t),
    V(e, `skew`, t),
    V(e, `skewX`, t),
    V(e, `skewY`, t),
    V(e, `originX`, t),
    V(e, `originY`, t),
    V(e, `originZ`, t),
    ps(e, t),
    t
  );
}
function _s(e) {
  for (let t in e)
    if (
      t === `drag` ||
      t.startsWith(`while`) ||
      (typeof Fv(e)[t] == `function` && t.startsWith(`on`) && !t.includes(`Animation`))
    )
      return !0;
  return !1;
}
function vs(e) {
  if (e.drag) return `grab`;
  for (let t in e) if (ab.has(t)) return `pointer`;
}
function ys(e) {
  return bs(e) ? !0 : e.style ? !!bs(e.style) : !1;
}
function bs(e) {
  return ob in e && (e[ob] === `scroll` || e[ob] === `auto`);
}
function xs(e) {
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
    m = pe(e.minWidth),
    h = pe(e.minHeight),
    g = pe(e.maxWidth),
    _ = pe(e.maxHeight);
  return {
    top: pe(n),
    left: pe(t),
    bottom: pe(r),
    right: pe(i),
    width: pe(a),
    height: pe(o),
    size: pe(l),
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
function Ss(e) {
  let n = t(By),
    { style: r, _initialStyle: i, __fromCanvasComponent: a, size: o } = e,
    s = xs(e),
    c = To(s),
    l = {
      display: `block`,
      flex: r?.flex ?? `0 0 auto`,
      userSelect: K.current() === K.preview ? void 0 : `none`,
    };
  e.__fromCanvasComponent ||
    (l.backgroundColor = e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
  let u = !_s(e) && !e.__fromCanvasComponent && !ys(e),
    d = !e.style || !(`pointerEvents` in e.style);
  u && d && (l.pointerEvents = `none`);
  let f = A.Children.count(e.children) > 0 &&
      A.Children.toArray(e.children).every((e) => typeof e == `string` || typeof e == `number`) && {
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        textAlign: `center`,
      },
    p = gs(e);
  (o === void 0 && !a && (ms(p) || (l.width = sb.width), hs(p) || (l.height = sb.height)),
    s.minWidth !== void 0 && (l.minWidth = s.minWidth),
    s.minHeight !== void 0 && (l.minHeight = s.minHeight));
  let m = {};
  (mo(s) &&
    c &&
    !Eo(e) &&
    (m = { left: c.x, top: c.y, width: c.width, height: c.height, right: void 0, bottom: void 0 }),
    Object.assign(l, f, i, p, m, r),
    Object.assign(l, {
      overflowX: l.overflowX ?? l.overflow,
      overflowY: l.overflowY ?? l.overflow,
      overflow: void 0,
    }),
    qy.applyWillChange(e, l, !0));
  let h = l;
  l.transform || (h = { x: 0, y: 0, ...l });
  let g = Na();
  return (
    e.positionSticky
      ? (!g || q.isOnPageCanvas || n) &&
        ((h.position = `sticky`),
        (h.willChange = `transform`),
        (h.top = e.positionStickyTop),
        (h.right = e.positionStickyRight),
        (h.bottom = e.positionStickyBottom),
        (h.left = e.positionStickyLeft))
      : g &&
        (e.positionFixed
          ? (h.position = q.isOnPageCanvas ? `fixed` : `absolute`)
          : e.positionAbsolute && (h.position = `absolute`)),
    `rotate` in h && h.rotate === void 0 && delete h.rotate,
    [h, c]
  );
}
function Cs(e) {
  let t = {};
  for (let n in e)
    (Ne(n) || Lv(n)) && !cb.has(n)
      ? (t[n] = Fv(e)[n])
      : (n === `positionTransition` || n === `layoutTransition`) &&
        ((t.layout = !0),
        typeof Fv(e)[n] != `boolean` && !e.transition && (t.transition = Fv(e)[n]));
  return t;
}
function ws(e) {
  return `data-framer-name` in e;
}
function Ts(e, t, n, r) {
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
function Es(e) {
  return E(ne.div, { layoutId: db, style: mb, children: e.children });
}
function Ds(e, t) {
  Je(e) ? e(t) : Os(e) && (e.current = t);
}
function Os(e) {
  return L(e) && `current` in e;
}
function ks() {
  let e = Aa(() => new Set()),
    t = Aa(() => new Map());
  return Aa(() => (n, r) => ({
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
function As(e) {
  let t = _(null),
    n = ks();
  return Aa(() => (Os(e) ? n(e) : Je(e) ? n(t, e) : n(t)));
}
function js(e, t, n) {
  let r = _(),
    i = _();
  (Wr(
    () => {
      i.current !== void 0 && (i.current = !0);
    },
    n ?? [{}]
  ),
    e &&
      i.current !== !1 &&
      ((i.current = !1), e.unobserve(r.current), e.observe(t), (r.current = t)));
}
function Ms(e, t, n, r, i, a, o) {
  let s = e.get(t);
  return (
    (!s || s.root !== r?.current) &&
      ((s = new hb({ root: r?.current, rootMargin: a, threshold: o })), e.set(t, s)),
    s.observeElementWithCallback(n, i),
    () => {
      s.unobserve(n);
    }
  );
}
function Ns(e, n, r) {
  let i = Aa(() => `${r.rootMargin}`),
    a = t(gb),
    { enabled: o, root: s, rootMargin: c, threshold: l } = r;
  js(
    e,
    (e) => {
      if (o && e !== null) return Ms(a, i, e, s, n, c, l);
    },
    [o, n, s, c, l]
  );
}
function Ps(e, t, n) {
  let r = A.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
    { enabled: i, animateOnce: a, threshold: o, rootMargin: s = `0px 0px 0px 0px` } = n;
  _b(
    e,
    A.useCallback(
      (e) => {
        let { isInView: n, hasAnimatedOnce: i } = r.current,
          s = Is(e, o?.y ?? 0);
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
    { threshold: vb, rootMargin: s, enabled: i ?? !0 }
  );
}
function Fs(e, t) {
  return t.height === 0 ? 0 : e.height / Math.min(t.height, W.innerHeight);
}
function Is({ boundingClientRect: e, intersectionRect: t, isIntersecting: n }, r) {
  return e.height === 0 ? n : n && Fs(t, e) >= r;
}
function Ls() {
  return new Map();
}
function Rs() {
  return Aa(Ls);
}
function zs(e, t) {
  return !(
    t.isCurrent === void 0 ||
    e.isCurrent !== t.isCurrent ||
    e.isPrevious !== t.isPrevious ||
    (t.isCurrent && e.isOverlayed !== t.isOverlayed)
  );
}
function Bs(e, t, n) {
  let r = { ...e };
  return (
    t &&
      (B(t.originX) && (r.originX = t.originX),
      B(t.originY) && (r.originY = t.originY),
      B(t.originZ) && (r.originZ = t.originZ)),
    n &&
      (B(n.originX) && (r.originX = n.originX),
      B(n.originY) && (r.originY = n.originY),
      B(n.originZ) && (r.originZ = n.originZ)),
    r
  );
}
function Vs(e) {
  if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
  let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
    n =
      e?.transition?.rotateX.from !== 0 ||
      e?.transition?.rotateY.from !== 0 ||
      e?.transition?.z.from !== 0;
  return t || n;
}
function Hs(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `right`) {
    case `right`:
      return kb.PushLeft;
    case `left`:
      return kb.PushRight;
    case `bottom`:
      return kb.PushUp;
    case `top`:
      return kb.PushDown;
  }
}
function Us(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return kb.OverlayLeft;
    case `left`:
      return kb.OverlayRight;
    case `bottom`:
      return kb.OverlayUp;
    case `top`:
      return kb.OverlayDown;
  }
}
function Ws(e) {
  switch (e?.appearsFrom ? e.appearsFrom : `bottom`) {
    case `right`:
      return kb.FlipLeft;
    case `left`:
      return kb.FlipRight;
    case `bottom`:
      return kb.FlipUp;
    case `top`:
      return kb.FlipDown;
  }
}
function Gs(e, t) {
  switch (t.type) {
    case `addOverlay`:
      return qs(e, t.transition, t.component);
    case `removeOverlay`:
      return Js(e);
    case `add`:
      return Ys(e, t.key, t.transition, t.component);
    case `remove`:
      return Qs(e);
    case `update`:
      return Ks(e, t.key, t.component);
    case `back`:
      return Xs(e);
    case `forward`:
      return Zs(e);
    default:
      return;
  }
}
function Ks(e, t, n) {
  return { ...e, containers: { ...e.containers, [t]: n } };
}
function qs(e, t, n) {
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
function Js(e) {
  return { ...e, overlayStack: [], currentOverlay: -1, previousOverlay: e.currentOverlay };
}
function Ys(e, t, n, r) {
  (e.containers[t] || (e.containers[t] = r),
    (e.history = e.history.slice(0, e.current + 1)),
    (e.visualIndex = Math.max(e.history.length, 0)));
  let i = e.history[e.history.length - 1],
    a = i?.key === t;
  if (((e.overlayStack = []), a && e.currentOverlay > -1))
    return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
  if (a) return;
  let o = e.containerVisualIndex[t],
    s = e.containerIsRemoved[t],
    c = i?.key && n.withMagicMotion ? rc(t, o, s, e.history) : !0;
  e.history.push({
    key: t,
    transition: n,
    visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
  });
  let l = e.current + 1,
    u = e.current;
  for (let t in e.containerIndex)
    e.containerIndex[t] === l && (e.containerIndex[t] = tc(t, e.history));
  e.containerIndex[t] = l;
  let { containerVisualIndex: d, containerIsRemoved: f } = $s(e, t, c),
    p = nc(l, u, e.history, e.containerIndex, e.transitionForContainer);
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
function Xs(e) {
  let t = { ...e.containers },
    n = Qs(e);
  if (n) return ((n.containers = t), n);
}
function Zs(e) {
  let t = e.history[e.current + 1];
  if (!t) return;
  let { key: n, transition: r, component: i } = t,
    a = [...e.history],
    o = Ys(e, n, r, i);
  if (o) return ((o.history = a), o);
}
function Qs(e) {
  let t = e.history.slice(0, e.current + 1);
  if (t.length === 1) return;
  let n = t.pop();
  if (!n) return;
  let r = t[t.length - 1];
  (R(r, `The navigation history must have at least one component`),
    (e.containerIndex[r.key] = t.length - 1),
    t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
  let i = e.current - 1,
    a = e.current,
    {
      containerIsRemoved: o,
      containerVisualIndex: s,
      previousTransition: c,
      visualIndex: l,
    } = ec(e, r, n),
    u = nc(i, a, e.history, e.containerIndex, e.transitionForContainer);
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
function $s(e, t, n) {
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
function ec(e, t, n) {
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
function tc(e, t) {
  for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
  return -1;
}
function nc(e, t, n, r, i) {
  let a = { ...i };
  for (let [i, o] of Object.entries(r)) {
    let r = ic(o, { current: e, previous: t, history: n });
    r && (a[i] = r);
  }
  return a;
}
function rc(e, t, n, r) {
  return n || t === void 0
    ? !0
    : t === 0
      ? !1
      : r.slice(t, r.length).findIndex((t) => t.key === e) > -1 ||
        !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function ic(e, t) {
  let { current: n, previous: r, history: i } = t;
  if (!(e !== n && e !== r)) {
    if (e === n && n > r) {
      let t = i[e];
      return ac(`enter`, t?.transition.enter, t?.transition.animation);
    }
    if (e === r && n > r) {
      let t = i[e + 1];
      return ac(`exit`, t?.transition.exit, t?.transition.animation);
    }
    if (e === n && n < r) {
      let t = i[e + 1];
      return ac(`enter`, t?.transition.exit, t?.transition.animation);
    }
    if (e === r && n < r) {
      let t = i[e];
      return ac(`exit`, t?.transition.enter, t?.transition.animation);
    }
  }
}
function ac(e, t, n) {
  let r = {},
    i = {};
  return (
    jb.forEach((e) => {
      ((r[e] = Eb[e]), (i[e] = { ...n, from: Eb[e] }));
    }),
    t &&
      Object.keys(t).forEach((a) => {
        if (t[a] === void 0) return;
        let o = t[a],
          s = typeof t[a] == `string` ? `${Fv(Eb)[a]}%` : Fv(Eb)[a];
        ((Fv(r)[a] = e === `enter` ? s : o),
          (i[a] = { ...n, from: e === `enter` ? o : s, velocity: 0 }));
      }),
    { ...r, transition: { ...i } }
  );
}
function oc(e) {
  let t, n;
  return (
    e.current === -1 ? (n = e.history[e.previous]) : (t = e.history[e.current]),
    { currentOverlayItem: t, previousOverlayItem: n }
  );
}
function sc({ currentOverlayItem: e }) {
  return e?.transition?.exit;
}
function cc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e?.transition?.animation
    ? e.transition.animation
    : t?.transition?.animation
      ? t.transition.animation
      : Fb;
}
function lc({ currentOverlayItem: e, previousOverlayItem: t }) {
  return e ? e.transition.backfaceVisible : t?.transition?.backfaceVisible;
}
function uc(e) {
  if (e.backdropColor) return e.backdropColor;
  if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function dc(e, t) {
  let { current: n, history: r } = t;
  if (e === n) {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  } else if (e < n) {
    let t = r[e + 1];
    return !t?.transition || t.transition.backfaceVisible;
  } else {
    let t = r[e];
    return !t?.transition || t.transition.backfaceVisible;
  }
}
function fc(e, t) {
  let n = t.history[e];
  if (n) return n.transition.enter;
}
function pc(e, t) {
  let { current: n, previous: r, history: i } = t;
  return (e === r && n > r) || (e === n && n < r)
    ? i[e + 1]?.transition?.backfaceVisible
    : i[e]?.transition?.backfaceVisible;
}
function mc(e, t) {
  let { current: n, history: r } = t;
  if (e !== n)
    if (e < n) {
      let t = r[e + 1];
      if (t?.transition) return t.transition.exit;
    } else {
      let t = r[e];
      if (t?.transition) return t.transition.enter;
    }
}
function hc(e, t) {
  let { current: n, previous: r, history: i } = t,
    a = r > n ? r : n;
  if (e < a) {
    let t = i[e + 1];
    if (t?.transition?.animation) return t.transition.animation;
  } else if (e !== a) {
    let t = i[e];
    if (t?.transition?.animation) return t.transition.animation;
  } else {
    let t = i[e];
    if (t?.transition.animation) return t.transition.animation;
  }
  return Fb;
}
function gc(e, t, n) {
  let { current: r, previous: i, history: a } = t;
  return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function _c(e, t) {
  let { current: n, previous: r } = t;
  return e > n && e > r ? !1 : e === n;
}
function vc(e) {
  return A.Children.map(e.component, (t) => {
    if (!no(t) || !to(t) || !t.props) return t;
    let n = { style: t.props.style ?? {} },
      r = e?.transition?.position,
      i = !r || (r.left !== void 0 && r.right !== void 0),
      a = !r || (r.top !== void 0 && r.bottom !== void 0),
      o = `style` in t.props ? L(t.props.style) : !0;
    return (
      i && (`width` in t.props && (n.width = `100%`), o && (n.style.width = `100%`)),
      a && (`height` in t.props && (n.height = `100%`), o && (n.style.height = `100%`)),
      A.cloneElement(t, n)
    );
  });
}
function yc(e, t) {
  if (e.goBackOnTapOutside !== !1) return t;
}
function bc(e, t) {
  let n = ue(),
    r = ce();
  return E(Pb, {
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
function xc(e) {
  return L(e) || Je(e);
}
function Sc(e) {
  return !!e && Rb in e && e[Rb] === !0;
}
function Cc(e) {
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
      case `dimension`:
        return F(e.defaultValue) ? e.defaultValue : void 0;
      case `boolean`:
        return Ye(e.defaultValue) ? e.defaultValue : void 0;
      case `enum`:
        return Qe(e.defaultValue)
          ? void 0
          : e.options.includes(e.defaultValue)
            ? e.defaultValue
            : void 0;
      case `fusednumber`:
      case `number`:
        return I(e.defaultValue) ? e.defaultValue : void 0;
      case `transition`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `border`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `font`:
      case `location`:
        return L(e.defaultValue) ? e.defaultValue : void 0;
      case `linkrelvalues`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `multicollectionreference`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
      case `object`: {
        let t = L(e.defaultValue) ? e.defaultValue : {};
        return (L(e.controls) && wc(t, e.controls), t);
      }
      case `array`:
        return Xe(e.defaultValue) ? e.defaultValue : void 0;
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
function wc(e, t) {
  for (let n in t) {
    let r = t[n];
    if (!r) continue;
    let i = e[n];
    if (!Qe(i) || Sc(r)) continue;
    let a = Cc(r);
    Qe(a) || (e[n] = a);
  }
}
function Tc(e) {
  if (L(e.defaultProps)) return e.defaultProps;
  let t = {};
  return ((e.defaultProps = t), t);
}
function Ec(e, t) {
  xc(e) && wc(Tc(e), t);
}
function Dc(e, t) {
  Object.assign(e, { [zb]: t });
}
function Oc(e, t, n) {
  (Object.assign(e, { propertyControls: t }), Ec(e, t), n !== void 0 && Dc(e, n));
}
function kc(e) {
  return e.propertyControls;
}
function Ac(e) {
  let t = [];
  if (e && e.length) {
    let n = e.map((e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`);
    t.push(...n);
  }
  return t;
}
function jc(e, t) {
  if (!e.shadows || e.shadows.length === 0) return;
  let n = e.shadows.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`).join(`, `);
  n && (t.textShadow = n);
}
function Mc(e, t) {
  let n = [];
  (B(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
    B(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
    B(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
    B(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
    B(e.invert) && n.push(`invert(${e.invert / 100})`),
    B(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
    B(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
    B(e.blur) && n.push(`blur(${e.blur}px)`),
    e.dropShadows && n.push(...Ac(e.dropShadows)),
    n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function Nc(e, t) {
  B(e.backgroundBlur) &&
    (t.backdropFilter = t.WebkitBackdropFilter = `blur(${e.backgroundBlur}px)`);
}
function Pc(e, t) {
  (Nc(e, t), Mc(e, t));
}
function Fc(e, t) {
  let n,
    r = (...r) => {
      (W.clearTimeout(n), (n = W.setTimeout(e, t, ...r)));
    };
  return (
    (r.cancel = () => {
      W.clearTimeout(n);
    }),
    r
  );
}
function Ic(...e) {
  return e.filter(Boolean).join(` `);
}
function Lc(e) {
  if (e.startsWith(Yb)) return e.substr(Xb);
}
function Rc(e, t, n) {
  let r = m.map(e, (e) => (T(e) ? a(e, t) : e));
  return n ? r : E(v, { children: r });
}
function zc(e) {
  let t = Aa(() => Bc(e));
  return (t.useSetup(e), t.cloneAsElement);
}
function Bc(e) {
  let t = { forwardedRef: e, childRef: null, ref: null };
  t.ref = Vc(t);
  let n = (e, n) => {
      if (!t.forwardedRef && t.forwardedRef === e) {
        t.ref = n;
        return;
      }
      let r = !1;
      (t.childRef !== n && ((t.childRef = n), (r = !0)),
        t.forwardedRef !== e && ((t.forwardedRef = e), (r = !0)),
        r && (t.ref = Vc(t)));
    },
    r = !1;
  function i(i, o) {
    if (r)
      throw ReferenceError(
        `useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`
      );
    return (
      (r = !0),
      m.count(i) > 1 && e && ((t.forwardedRef = void 0), (t.ref = t.childRef)),
      m.map(i, (e) => {
        if (T(e)) {
          let r = `ref` in e ? e.ref : void 0;
          n(t.forwardedRef, r);
          let i = Je(o) ? o(e.props) : o;
          return a(e, t.ref === r ? i : { ...i, ref: t.ref });
        }
        return e;
      })
    );
  }
  let o = function (e, t) {
    return E(v, { children: i(e, t) });
  };
  return (
    (o.cloneAsArray = i),
    {
      useSetup: (e) => {
        ((r = !1), n(e, t.childRef));
      },
      cloneAsElement: o,
    }
  );
}
function Vc(e) {
  if (!e.forwardedRef) return e.childRef;
  let { forwardedRef: t, childRef: n } = e;
  return (e) => {
    (Ds(n, e), Ds(t, e));
  };
}
function Hc(e, t, n, r, i, a, o, s) {
  let c = A.Children.toArray(t),
    l = c[0];
  if (c.length !== 1 || !A.isValidElement(l))
    return (
      console.warn(`PropertyOverrides: expected exactly one React element for a child`, t),
      o(t, n)
    );
  let u = [],
    d = [];
  for (let [t] of Object.entries(r)) {
    if (t === i) continue;
    let n = e[t];
    if (!n || !Kc(l.props, n)) {
      d.push(t);
      continue;
    }
    let r = Gc([t], a);
    r.length && u.push({ variants: r, propOverrides: n });
  }
  if (u.length === 0) return o(l, n);
  let f = Gc([i, ...d], a);
  f.length && u.unshift({ variants: f });
  let p = [];
  for (let { variants: e, propOverrides: t } of u) {
    if (s && !e.includes(s)) continue;
    let c = s ? `active-branch` : e.join(`+`),
      d = E(
        Qb.Provider,
        {
          value: { primaryVariantId: i, variants: new Set(e) },
          children: o(l, t ? { ...n, ...t } : n),
        },
        c
      ),
      f = Wc(e, a, r);
    (f.length
      ? (R(u.length > 1, `Must branch out when there are hiddenClassNames`),
        (d = E(
          `div`,
          { className: `${$b} ${f.join(` `)}`, suppressHydrationWarning: !0, children: d },
          c
        )))
      : R(u.length === 1, `Cannot branch out when hiddenClassNames is empty`),
      p.push(d));
  }
  return (
    R(!s || p.length === 1, `Must render exactly one branch when activeVariantId is given`),
    s ? p : [...p, E(`div`, { className: ex }, `property-overrides-separator`)]
  );
}
function Uc(e) {
  return e.split(`-`)[2];
}
function Wc(e, t, n) {
  let r = [];
  for (let [i, a] of Object.entries(n)) {
    let n = t && !t.has(i);
    e.includes(i) || n || r.push(`hidden-${Uc(a)}`);
  }
  return r;
}
function Gc(e, t) {
  return t ? e.filter((e) => t.has(e)) : e;
}
function Kc(e, t) {
  for (let n of Object.keys(t)) if (!Tt(e[n], t[n], !0)) return !0;
  return !1;
}
function qc(e, t, n) {
  return !n || !e ? t : { ...t, ...n[e] };
}
function Jc(e) {
  return A.forwardRef(({ optimized: t, ...n }, r) => {
    let i = A.useContext(Zb),
      a = A.useContext(Qb)?.variants,
      o = n[cx];
    o && !Tn() && ox.setAll(o, a, t ? n : null, i);
    let s = ux(n);
    return E(e, { ref: r, ...n, ...s });
  });
}
function Yc(e) {
  return F(e) || Array.isArray(e);
}
function Xc(e) {
  return e in Y;
}
function Zc(e, t) {
  let n = Aa(() => ({ values: fx(t ? e : void 0) }));
  return (
    A.useEffect(() => {
      if (!t)
        for (let e of dx) {
          let t = Y[e];
          Qe(t) || n.values[e].set(t);
        }
    }, [t]),
    n
  );
}
function Qc(
  {
    loopEffectEnabled: e,
    loopRepeatDelay: t,
    loopTransition: n,
    loopRepeatType: r,
    loop: i,
    loopPauseOffscreen: a,
  },
  o
) {
  let s = ze(),
    c = Aa(fx),
    d = _(!1),
    f = gx(),
    p = _(null),
    m = u(async () => {
      if (!i) return;
      let e = n || void 0,
        t = d.current && r === `mirror`,
        a = t ? Y : i,
        o = t ? i : Y;
      return (
        (d.current = !d.current),
        (p.current = Promise.all(
          dx.map((t) => {
            if (!(s && t !== `opacity`))
              return (
                c[t].jump(o[t] ?? Y[t]),
                new Promise((n) => {
                  let r = { ...e, onComplete: () => n() },
                    i = a[t] ?? o[t];
                  typeof i == `number` && Ge(c[t], i, r);
                })
              );
          })
        )),
        p.current
      );
    }, [i, r, n, s]),
    [g, v] = h(!1),
    y = _(!1),
    b = u(async () => {
      !e || !y.current || (await m(), await f(t ?? 0), b());
    }, [m, f, e, t]),
    x = u(() => {
      y.current || ((y.current = !0), l(() => v(!0)), b());
    }, [b]),
    S = u((e = !0) => {
      (dx.forEach((e) => {
        c[e].stop();
      }),
        dx.forEach((e) => {
          c[e].set(Y[e]);
        }),
        (d.current = !1),
        e && ((y.current = !1), l(() => v(!1))));
    }, []),
    w = e && i,
    T = u(() => {
      document.hidden ? S(!1) : y.current && ((y.current = !1), x());
    }, [x, S]);
  (j(() => {
    if (w)
      return (
        document.addEventListener(`visibilitychange`, T),
        () => {
          document.removeEventListener(`visibilitychange`, T);
        }
      );
  }, [w, T]),
    j(() => {
      (w && a) || (w ? x() : S());
    }, [x, S, a, w]),
    j(() => () => S(), [S]));
  let E = _(!1),
    D = u(async () => {
      p.current && (await p.current, !E.current && S());
    }, [S]);
  _b(
    o,
    u(
      (e) => {
        e.isIntersecting ? ((E.current = !0), x()) : ((E.current = !1), D());
      },
      [x, D]
    ),
    { enabled: w && a }
  );
  let ee = g || !a;
  return C(() => ({ values: c, style: w && ee ? px : mx }), [w, ee]);
}
function $c(e, t, n, r, i) {
  let a = n / 100 - 1;
  return (i ? (t - r) * a : 0) + -e * a;
}
function el(e, n, r) {
  let { speed: i = 100, offset: a = 0, adjustPosition: o = !1, parallaxTransformEnabled: s } = e,
    c = A.useRef(null),
    l = ze(),
    u = A.useCallback(
      (e) => (c.current === null || i === 100 ? 0 : $c(e, c.current, i, a, o)),
      [i, a, o]
    ),
    { scrollY: d } = Se(),
    f = Ce(d, u),
    p = be(o && c.current === null ? `hidden` : r),
    m = be(0),
    h = t(gb);
  return (
    js(
      n,
      (e) => {
        if (e === null || !s) return;
        let t = Ms(h, `undefined`, e, null, (e) => {
          ((c.current = e.boundingClientRect.top),
            We.update(() => {
              (f.set(u(d.get())), o && p.set(r ?? `initial`));
            }),
            t());
        });
        return t;
      },
      [o, s]
    ),
    Mt(() => {
      s && f.set(0);
    }),
    { values: { y: l || !s ? m : f }, style: s ? { ...px, visibility: p } : mx }
  );
}
function tl(e) {
  return typeof e == `object` && !!e;
}
function nl(e) {
  if (tl(e)) return e?.transition;
}
function rl(e, t, n, r, i, a) {
  let o = nl(e);
  return Promise.all(
    dx.map(
      (s) =>
        new Promise((c) => {
          if (n && s !== `opacity`) return c();
          let l = t.values[s];
          l.stop();
          let u = tl(e) ? (e?.[s] ?? Y[s]) : Y[s];
          if ((me(u) && (u = u.get()), !I(u))) return c();
          let d = ge.get(r.current);
          d && d.setBaseTarget(s, u);
          let f;
          if (F(i) && !l?.hasAnimated && W.MotionHandoffAnimation) {
            let e = W.MotionHandoffAnimation(i, s, We);
            e && (f = e);
          }
          a ? l.set(u) : Ge(l, u, { ...o, velocity: 0, startTime: f, onComplete: () => c() });
        })
    )
  );
}
function il(
  { initial: e, animate: t, exit: n, presenceInitial: r, presenceAnimate: i, presenceExit: a },
  o,
  s,
  c,
  l
) {
  let u = r ?? e,
    d = i ?? t,
    f = a ?? n,
    [p, m] = se(),
    h = _({ lastPresence: !1, lastAnimate: d, hasMounted: !1, running: !1 }),
    g = Aa(() => {
      let e = u ?? c;
      if (!L(e)) return { values: fx() };
      let t = {};
      for (let n in e) {
        let r = L(e) ? e[n] : void 0;
        I(r) && (t[n] = r);
      }
      return { values: fx(t) };
    });
  js(
    o,
    (e) => {
      let { hasMounted: t } = h.current;
      if (t && d) return;
      let n = ge.get(e);
      if (n) {
        Object.assign(h.current, { hasMounted: !0 });
        for (let e in g.values) {
          if (!Xc(e)) continue;
          let t = c?.[e];
          n.setBaseTarget(e, I(t) ? t : Y[e]);
        }
      }
    },
    [d]
  );
  let v = ze();
  js(o, (e) => {
    if (!s) {
      m?.();
      return;
    }
    if (e === null) return;
    if (p !== h.current.lastPresence) {
      (Object.assign(h.current, { lastPresence: p }),
        p
          ? u &&
            d &&
            (Object.assign(h.current, { running: !0 }),
            rl(d, g, v, o, l).then(() => Object.assign(h.current, { running: !1 })))
          : f
            ? (Object.assign(h.current, { running: !0 }),
              rl(f, g, v, o, l)
                .then(() => Object.assign(h.current, { running: !1 }))
                .then(() => m()))
            : m());
      return;
    }
    let { lastAnimate: t, running: n } = h.current;
    Tt(d, t) ||
      !d ||
      (Object.assign(h.current, { lastAnimate: d }),
      rl(d, g, v, o, l, !n).then(() => Object.assign(h.current, { running: !1 })));
  });
  let y = s && d;
  return C(() => ({ values: g.values, style: y ? px : mx }), [y]);
}
function al(e, t) {
  let n = 0,
    r = e;
  for (; r && r !== t && r instanceof HTMLElement;) ((n += r.offsetTop), (r = r.offsetParent));
  return n;
}
function ol(e, t = 0, n) {
  let r = [],
    i = [];
  for (let a = e.length; a >= 0; a--) {
    let { ref: o, offset: s } = e[a] ?? {};
    if (!o?.current) continue;
    let c = al(o.current, document.documentElement) - yx - (s ?? 0) - t,
      l = o.current?.clientHeight ?? 0,
      u = r[r.length - 1],
      d = Math.max(c + l, 0);
    (r.push(c),
      i.unshift(Math.max(c, 0), u === void 0 ? d : Math.min(d, Math.max(u - 1, 0))),
      n?.(a));
  }
  return i;
}
function sl(e, t = 0) {
  return e < t ? `up` : `down`;
}
function cl(e, t, n = {}) {
  let { direction: r, target: i } = e ?? {},
    { repeat: a = !0, enabled: o = !0 } = n,
    s = jt();
  A.useEffect(() => {
    if (!r || !o) return;
    let e,
      n = 0,
      s,
      c;
    return he((o, { y: l }) => {
      if ((!a && c === i) || l.current > l.scrollLength || l.current < 0) return;
      let u = sl(l.current, e);
      e = l.current;
      let d = u !== s;
      if (((s = u), d)) n = l.current;
      else {
        if (Math.abs(l.current - n) < bx) return;
        let e = u === r ? i : void 0;
        (e !== c && t(e), (c = e));
      }
    });
  }, [s, r, a, i, o, t]);
}
function ll(e, t, n) {
  let r = ol(e, t),
    i = [...Sx],
    a = r[0];
  if (!I(a)) return Cx;
  if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
    let e = r[r.length - 1];
    if (!I(e)) return Cx;
    (r.push(e + 1), i.push(`exit`));
  }
  return { inputRange: r, outputRange: i };
}
function ul(e) {
  return {
    x: e?.x ?? Y.x,
    y: e?.y ?? Y.y,
    scale: e?.scale ?? Y.scale,
    opacity: e?.opacity ?? Y.opacity,
    transformPerspective: e?.transformPerspective ?? Y.transformPerspective,
    rotate: e?.rotate ?? Y.rotate,
    rotateX: e?.rotateX ?? Y.rotateX,
    rotateY: e?.rotateY ?? Y.rotateY,
    skewX: e?.skewX ?? Y.skewX,
    skewY: e?.skewY ?? Y.skewY,
    transition: e?.transition ?? void 0,
  };
}
function dl({ opacity: e, targetOpacity: t, perspective: n, enter: r, exit: i, animate: a, ...o }) {
  return A.useMemo(
    () => ({
      initial: r ?? ul({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
      animate: a ?? ul({ opacity: t }),
      exit: i ?? ul(),
    }),
    [a, o, r, i, e, t, n]
  );
}
function fl(e, t) {
  let n = ze(),
    r = dl(e),
    i = e.styleAppearEffectEnabled,
    a = Zc(i ? r.initial : r.animate, i),
    o = A.useRef({
      isPlaying: !1,
      scheduledAppearState: void 0,
      lastAppearState: !e.styleAppearEffectEnabled,
    }),
    s = jt(),
    c = A.useRef(),
    l = A.useCallback(async ({ transition: i, ...o }, s) => {
      let l = i ?? r.animate.transition ?? e.transition;
      await c.current;
      let u = ge.get(t.current);
      c.current = Promise.all(
        dx.map((e) => {
          s && a.values[e].set(r.initial[e] ?? Y[e]);
          let t = o[e] ?? Y[e];
          return (
            u && typeof t != `object` && u.setBaseTarget(e, t),
            new Promise((r) => {
              if (n && e !== `opacity`) (I(t) && a.values[e].set(t), r());
              else {
                let n = { restDelta: e === `scale` ? 0.001 : void 0, ...l, onComplete: () => r() };
                typeof t == `number` && Ge(a.values[e], t, n);
              }
            })
          );
        })
      );
    }, []),
    u = e.animateOnce && o.current.lastAppearState === !0;
  Ps(
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
    A.useEffect(() => {
      if (!d) return;
      let t = { initial: !0 },
        n = `initial`;
      return he((i, { y: a }) => {
        let { targets: o } = e;
        if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
        let { inputRange: s, outputRange: c } = ll(
          o,
          (e.threshold ?? 0) * a.containerLength,
          !!e.exit
        );
        if (s.length === 0 || s.length !== c.length) return;
        let u = de(a.current, s, c);
        if ((e.animateOnce && t[u]) || ((t[u] = !0), n === u)) return;
        n = u;
        let d = Fv(r)[u];
        d && l(d);
      });
    }, [s, d]),
    cl(e.scrollDirection, (e) => void l(e ?? r.animate), { enabled: i, repeat: !e.animateOnce }),
    Mt(() => {
      if (i && !(!e.targets && !e.scrollDirection))
        for (let e of dx) a.values[e].set(r.initial?.[e] ?? Y[e]);
    }),
    C(() => ({ values: a.values, style: i ? px : mx }), [i])
  );
}
function pl(e, t) {
  let n = A.useRef({});
  A.useEffect(() => {
    if (t !== void 0)
      for (let r of Rh(e)) {
        let i = function () {
            let e = n.current[r];
            (e && e.stop(),
              (n.current[r] = ve({
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
        a.attach((e, t) => ((s = e), (o = t), We.postRender(i), a.get()));
      }
  }, [JSON.stringify(t)]);
}
function ml(e, t) {
  let n = Ex();
  return {
    inputRange: ol(e, t, (t) => {
      let r = e[t - 1]?.target,
        i = e[t]?.target;
      for (let e of dx) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
    }),
    effectKeyOutputRange: n,
  };
}
function hl(e) {
  let t = Ex();
  for (let { target: n } of e) for (let e of dx) t[e]?.push(n[e]);
  return t;
}
function gl(
  {
    transformTrigger: e,
    styleTransformEffectEnabled: t,
    transformTargets: n,
    spring: r,
    transformViewportThreshold: a = 0,
  },
  o
) {
  let s = ze(),
    c = Zc(Tx(n, s), t),
    l = !t || !n,
    u = e === `onScrollTarget`,
    d = jt();
  return (
    i(() => {
      if (!(l || !u))
        return he((e, { y: t }) => {
          if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
          let { inputRange: r, effectKeyOutputRange: i } = ml(n, a * t.containerLength);
          if (r.length !== 0)
            for (let e of dx)
              (s && e !== `opacity`) ||
                (r.length === i[e].length &&
                  i[e][0] !== void 0 &&
                  c.values[e].set(de(t.current, r, i[e])));
        });
    }, [s, u, a, n, l]),
    js(
      o,
      (t) => {
        if (l || u || t === null) return;
        let r = hl(n);
        return he(
          (e, { y: t }) => {
            for (let e of dx)
              (s && e !== `opacity`) ||
                (Dx.length === r[e].length &&
                  r[e][0] !== void 0 &&
                  c.values[e].set(de(t.progress, Dx, r[e])));
          },
          e === `onInView` ? { target: t ?? void 0, offset: [`start end`, `end end`] } : void 0
        );
      },
      [d, s, e, u, n, l]
    ),
    pl(c.values, r),
    Mt(() => {
      if (l) return;
      let e = Tx(n, s);
      for (let t of dx) c.values[t].set(e?.[t] ?? Y[t]);
    }),
    A.useMemo(() => ({ values: c.values, style: t ? px : mx }), [t])
  );
}
function _l(e, t, n) {
  return (!(e in n) && t in n) || n[e] === !0;
}
function vl(e) {
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
    let r = Lc(n);
    if (r) {
      for (let i of kx)
        if (Ox[i]?.has(r)) {
          t[i][r] = Fv(e)[n];
          break;
        }
    } else t.forwardedProps[n] = Fv(e)[n];
  }
  return (
    (t.parallax.parallaxTransformEnabled = _l(`parallaxTransformEnabled`, `speed`, t.parallax)),
    (t.styleAppear.styleAppearEffectEnabled = _l(
      `styleAppearEffectEnabled`,
      `animateOnce`,
      t.styleAppear
    )),
    t
  );
}
function yl(e) {
  return L(e) && Mx in e;
}
function bl(e, t) {
  if (!e || !L(e)) return t;
  for (let n in e) {
    let r = e[n];
    !me(r) || !Xc(n) || (I(r.get()) && t[n].push(r));
  }
}
function xl(e) {
  return F(e) || Array.isArray(e);
}
function Sl() {
  return A.useContext(Px);
}
function Cl(e) {
  return (
    e instanceof Error &&
    (e.message.includes(`A component suspended while responding to synchronous input.`) ||
      e.message.includes(`Minified React error #426`))
  );
}
function wl() {
  if (f === void 0 || Bx)
    return E(`div`, {
      hidden: !0,
      dangerouslySetInnerHTML: { __html: `<!-- SuspenseThatPreservesDOM fallback rendered -->` },
    });
  throw Hx;
}
function Tl({ children: e }) {
  return t(Wx) ? E(v, { children: e }) : E(x, { fallback: Ux, children: e });
}
function El() {
  return E(`div`, {
    hidden: !0,
    dangerouslySetInnerHTML: { __html: `<!-- Code boundary fallback rendered -->` },
  });
}
function Dl(e, t) {
  if (!Th || Math.random() > 0.01) return;
  let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
    r = t?.componentStack;
  an(`published_site_load_recoverable_error`, {
    message: String(e),
    stack: n,
    componentStack: n ? void 0 : r,
  });
}
function Ol(...e) {
  console.error(...e);
}
function kl() {
  return K.current() !== K.canvas;
}
function Al({ getErrorMessage: e, fallback: t, children: n }) {
  return kl()
    ? E(jl, { fallback: t, children: E(Kx, { fallback: t, getErrorMessage: e, children: n }) })
    : n;
}
function jl({ children: e, fallback: t = Gx }) {
  return f === void 0 ? E(x, { fallback: t, children: e }) : E(Tl, { children: e });
}
function Ml() {
  return A.useContext(Jx);
}
function Nl() {
  let e = Ml();
  return A.useMemo(() => {
    if (!e) return;
    let t = e;
    for (; t.parent && t.parent.level > 0;) t = t.parent;
    return t;
  }, [e]);
}
function Pl({ children: e, scopeId: t, nodeId: n }) {
  let r = Ml(),
    i = A.useMemo(
      () => ({ level: (r?.level ?? 0) + 1, scopeId: t, nodeId: n, parent: r }),
      [t, n, r]
    );
  return E(Jx.Provider, { value: i, children: e });
}
function Fl(e, t) {
  return `${Yx}${e}:${t}`;
}
function Il(e, t) {
  return Rl(`component`, e, t);
}
function Ll(e, t) {
  return Rl(`override`, e, t);
}
function Rl(e, t, n) {
  return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Fl(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function zl(e, t, n, r, i, a) {
  let o = Vl(e, t, n, a);
  return (o && !i && r) || (o && i);
}
function Bl(e, t, n, r) {
  return Vl(e, t, n, r);
}
function Vl(e, t, n, r) {
  return !!(Qe(n) || (n === 1 && r && e === t));
}
function Hl(e, t, n, r, i, a) {
  let o = Ml();
  if (Qe(t) || Qe(n)) return E(qx, { children: e });
  let { disableCustomCode: s } = Rx();
  return s && r
    ? E(`div`, {
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
    : (zl(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
        (e = E(Al, { getErrorMessage: Il.bind(null, t, n), fallback: null, children: e })),
      i && (e = E(Pl, { scopeId: t, nodeId: n, children: e })),
      e);
}
function Ul() {
  if (Zx !== void 0 || f === void 0) return;
  let e = W.matchMedia(`(any-hover: hover)`);
  ((Zx = e.matches),
    e.addEventListener(`change`, function (e) {
      let t = e.matches;
      if (t !== Zx) {
        Zx = t;
        for (let e of Qx) e();
      }
    }));
}
function Wl() {
  return (Ul(), Gl());
}
function Gl() {
  return Zx ?? !1;
}
function Kl(e) {
  return (
    Qx.add(e),
    Ul(),
    () => {
      Qx.delete(e);
    }
  );
}
function ql(e = !1) {
  let [t, n] = h(e);
  return (
    p_(function () {
      function e(e = !0) {
        let t = Gl();
        e ? l(() => n(t)) : n(t);
      }
      let t = Kl(e);
      return (e(!1), t);
    }, []),
    t
  );
}
function Jl(e, t, n) {
  let r = {};
  for (let [, i] of e)
    for (let e of i) {
      let i = r[e] ?? t[e] ?? n[e];
      i && (r[e] = i);
    }
  return r;
}
function Yl(e) {
  return !(!e || e.placement || e.alignment);
}
function Xl(e) {
  switch (e) {
    case `start`:
      return `0%`;
    case `center`:
      return `-50%`;
    case `end`:
      return `-100%`;
    default:
      z(e);
  }
}
function Zl(e, t = `center`) {
  switch (e) {
    case `top`:
      return `${Xl(t)}, -100%`;
    case `right`:
      return `0%, ${Xl(t)}`;
    case `bottom`:
      return `${Xl(t)}, 0%`;
    case `left`:
      return `-100%, ${Xl(t)}`;
    default:
      return `-50%, -50%`;
  }
}
function Ql(e, t) {
  let n = document.elementFromPoint(e, t);
  for (; n;) {
    if (n === document.body) return;
    let e = n.getAttribute(`data-framer-cursor`);
    if (e) return e;
    if (n.hasAttribute(aS)) {
      let e = n.getAttribute(aS);
      ((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
    } else n = n.parentElement;
  }
}
function $l(e) {
  let { registerCursors: r } = t($x),
    a = Aa(() => e),
    o = n();
  i(() => r(a, o), [r, o]);
}
function eu(e) {
  return !!(e && typeof e == `object` && sS in e);
}
function tu(e) {
  return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function nu() {
  return K.current() === K.canvas;
}
function ru(e) {
  return e !== void 0 && !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function iu(e, t) {
  try {
    return !!new URL(e).protocol;
  } catch {}
  return t;
}
function au(e, t, n, r) {
  if (F(e)) {
    let i = ru(e);
    if (!t.routes || !t.getRoute || !n || !i) return;
    let [a] = e.split(`#`, 2);
    if (a === void 0) return;
    let [o] = a.split(`?`, 2);
    if (o === void 0) return;
    try {
      let { routeId: e } = yi(t.routes, o, o === ``, r);
      return t.getRoute(e);
    } catch {
      return;
    }
  }
  let { webPageId: i } = e;
  return t.getRoute?.(i);
}
function ou(e) {
  return F(e) && e.startsWith(`data:${mS}`);
}
function su(e) {
  if (ou(e))
    try {
      let t = new URL(e),
        n = t.pathname.substring(mS.length),
        r = t.searchParams,
        i = r.has(uS) ? r.get(uS) : void 0,
        a,
        o = r.get(dS),
        s = r.get(fS),
        c = r.get(pS);
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
function cu(e, t, n) {
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
    let n = su(e);
    if (!n?.target) return !1;
    ((r = n.target), (i = n.element ?? void 0), (a = n.collectionItem?.pathVariables));
  }
  let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
  return (e(r, i, Object.assign({}, n, a), o), !0);
}
function lu(e) {
  if (!ou(e)) return e;
  let t = su(e);
  if (!t) return;
  let { target: n, element: r, collectionItem: i } = t;
  if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: uu(i) };
}
function uu(e) {
  if (!e) return;
  let t = {};
  for (let n in e.pathVariables) {
    let r = e.pathVariables[n];
    r && (t[n] = r);
  }
  return t;
}
function du(e, n, r, i, a, o) {
  let s = t(hS),
    c = Nl(),
    l = C(() => ({ scopeId: n, nodeId: r, furthestExternalComponent: c }), [n, r, c]),
    d = Ot(),
    f = At(),
    { locales: p } = Kn(),
    h = C(() => {
      let e = eu(i) ? i : lu(i);
      if (e) return au(e, d, f, p);
    }, [f, i, d, p]),
    g = !!(!nu() && s?.nodeId && l.nodeId),
    _ = u(
      (e) => {
        if (a.href) {
          if ((e.preventDefault(), e.stopPropagation(), jn(e))) {
            mu(a.href, ``, `_blank`);
            return;
          }
          h ? a.navigate?.() : mu(a.href, a.rel, a.target);
        }
      },
      [a, h]
    ),
    v = u(
      (e) => {
        a.href && (e.preventDefault(), e.stopPropagation(), mu(a.href, ``, `_blank`));
      },
      [a]
    ),
    b = u(
      (e) => {
        a.href &&
          e.key === `Enter` &&
          (e.preventDefault(),
          e.stopPropagation(),
          h ? a.navigate?.() : mu(a.href, a.rel, a.target));
      },
      [a, h]
    );
  js(
    o,
    (e) => {
      e !== null && g && (e.dataset.hydrated = `true`);
    },
    [g]
  );
  let x = e;
  return (
    g &&
      (m.forEach(e, (e) => {
        pu(e) &&
          (R(
            fu(s),
            "outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          R(
            fu(l),
            "innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above"
          ),
          lS.collectNestedLink(s, l));
      }),
      (x = m.map(e, (e) => {
        if (!pu(e)) return e;
        let t = hu(e.type),
          { children: n, ...r } = e.props,
          i = {
            ...r,
            "data-nested-link": !0,
            role: `link`,
            tabIndex: 0,
            onClick: _,
            onAuxClick: v,
            onKeyDown: b,
            as: r.as && hu(r.as),
          },
          a = `ref` in e ? e.ref : void 0;
        return y(t, { ...i, ref: a }, n);
      }))),
    E(hS.Provider, { value: l, children: x })
  );
}
function fu(e) {
  return !Qe(e?.nodeId);
}
function pu(e) {
  return T(e) && (hu(e.type) !== e.type || hu(e.props.as) !== e.props.as);
}
function mu(e, t, n) {
  let r = document.createElement(`a`);
  ((r.href = e),
    t && (r.rel = t),
    n && (r.target = n),
    document.body.appendChild(r),
    r.click(),
    r.remove());
}
function hu(e) {
  return e === `a` ? `span` : ie(e) && qe(e) === `a` ? ne.span : e;
}
function gu(e) {
  yS = e;
}
function _u() {
  return yS;
}
function vu(e, t) {
  return e instanceof HTMLAnchorElement
    ? e
    : e instanceof Element
      ? e === t
        ? null
        : vu(e.parentElement, t)
      : null;
}
function yu({ children: e }) {
  return E(Tl, { children: e });
}
function bu(e) {
  return D(function (t, n) {
    return E(yu, { children: E(e, { ...t, ref: n }) });
  });
}
function xu(e, t, n, r, i, a) {
  let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
  return Cu(e, t, o, s, a, c, l, i, r);
}
function Su(e, t, n, r) {
  if (!(!e.routes || !e.getRoute) && ru(t))
    try {
      let [i, a] = t.split(`#`, 2);
      R(i !== void 0, `A href must have a defined pathname.`);
      let [o] = i.split(`?`, 2);
      R(o !== void 0, `A href must have a defined pathname.`);
      let s = o === ``,
        { routeId: c, pathVariables: l, localeId: u } = yi(e.routes, o, s, r),
        d = e.getRoute(c);
      if (d)
        return {
          routeId: c,
          route: d,
          href: t,
          elementId: a,
          pathVariables: Object.assign({}, n, l),
          locale: u ? r?.find(({ id: e }) => e === u) : void 0,
        };
    } catch {}
}
function Cu(e, t, n, r, i, a, o, s, c) {
  let l = { ...i, ...a, ...s?.path },
    u = { ...i, ...o, ...s?.hash },
    d = e.getRoute?.(n),
    f = ii(d, {
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
function wu() {
  let e = t(xS),
    n = At()?.pathVariables;
  return e || n;
}
function Tu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
  if (t !== e.id || n) return !1;
  if (e.path && e.pathVariables) {
    let t = Object.assign({}, i, r);
    for (let [, n] of e.path.matchAll(bS)) if (!n || e.pathVariables[n] !== t[n]) return !1;
  }
  return !0;
}
function Eu() {
  return !!Di(`ss-only-routes`);
}
function Du(e) {
  if (f === void 0) return;
  let t = f.location.href,
    n;
  try {
    n = new URL(e, t);
  } catch {
    return;
  }
  return ((n.hash = ``), n);
}
function Ou(e) {
  return Ei(`rewrite`, e)?.description === `external`;
}
function ku() {
  if (!Rx().checkServerSideRouter) return !1;
  if (TS === void 0) {
    let e = Eu();
    ((ES = !e && Cn() && En() < 16.4), (TS = e || ES));
  }
  return TS;
}
function Au(e, t) {
  if (e.type === `opaqueredirect` || !e.ok) return { decision: `server` };
  let n = e.headers.get(`Framer-Location`);
  if (n)
    try {
      return { decision: `server`, redirectUrl: new URL(n, t).href };
    } catch {
      return { decision: `server` };
    }
  let r = e.headers.get(`Framer-Site-Id`);
  return r === null
    ? { decision: Ou(e.headers.get(`server-timing`)) ? `server` : `client` }
    : { decision: r === _u() ? `client` : `server` };
}
async function ju(e) {
  let t = await fetch(e, {
    method: `HEAD`,
    redirect: `manual`,
    credentials: `same-origin`,
    headers: { "Framer-Navigation": `true` },
  });
  if (
    (ES &&
      t.type !== `opaqueredirect` &&
      t.status !== 0 &&
      t.ok &&
      !t.headers.has(`Framer-Location`) &&
      ((ES = !1), Ei(`ss-only-routes`, t.headers.get(`server-timing`)) || (TS = !1)),
    t.status >= 500)
  )
    throw Error(`Transient response status ${t.status}`);
  return Au(t, e);
}
function Mu(e, t) {
  SS.has(e) && SS.set(e, t);
}
async function Nu(e) {
  await gn(CS);
  try {
    Mu(e, await ju(e));
  } catch {
    SS.delete(e);
  }
}
async function Pu(e) {
  try {
    let t = await ju(e);
    return (Mu(e, t), t);
  } catch {
    return (Nu(e), { decision: `server` });
  }
}
function Fu(e) {
  if (!ku()) return;
  let t = Du(e);
  if (!t || t.origin !== f.location.origin) return;
  let n = t.href;
  SS.has(n) || SS.set(n, Pu(n));
}
function Iu(e) {
  let t = Du(e);
  if (!t) return;
  let n = SS.get(t.href);
  return n && !it(n) ? n : void 0;
}
async function Lu(e) {
  let t = Du(e);
  if (!t) return;
  let n = SS.get(t.href);
  if (n) return it(n) ? Promise.race([n, gn(wS).then(() => void 0)]) : n;
}
function Ru() {
  let e = s.connection || s.mozConnection || s.webkitConnection || {},
    t = s.deviceMemory && s.deviceMemory > kS,
    n,
    r,
    i;
  function a() {
    ((n = e.effectiveType || ``),
      (r = e.saveData || n.includes(`2g`)),
      (i = n === `3g` || t ? AS : jS));
  }
  (e.addEventListener?.(`change`, a), a());
  let o = new IntersectionObserver(u, { threshold: OS }),
    c = 0;
  async function l(e, t) {
    if (r) return;
    Fu(e.navigationUrl);
    let { id: n, preload: i } = e,
      a = PS.get(n);
    if (!a?.size || NS.has(n)) return;
    (++c, NS.add(n));
    let s = i()?.catch(() => {});
    (o.unobserve(t), MS.delete(t));
    for (let e of a) (o.unobserve(e), MS.delete(e));
    (a.clear(), PS.delete(n), await s, --c);
  }
  function u(e) {
    for (let t of e) {
      let e = t.target,
        n = MS.get(e);
      if (!n || NS.has(n.id)) {
        (o.unobserve(e), MS.delete(e));
        continue;
      }
      let r = n.id,
        a = PS.get(r),
        s = PS.get(r)?.size ?? 0;
      if (t.isIntersecting) {
        if (c >= i) continue;
        (a ? a.add(e) : PS.set(r, new Set([e])), setTimeout(l, DS, n, e));
      } else (a && a.delete(e), s <= 1 && PS.delete(r));
    }
  }
  return (e, t, n, r) => {
    if (!NS.has(n))
      return (
        MS.set(e, { id: n, preload: t, navigationUrl: r }),
        o.observe(e),
        () => {
          (MS.delete(e), o.unobserve(e));
        }
      );
  };
}
function zu(e, t) {
  let n = ru(e),
    r = {
      href: e === `` || iu(e, n) ? e : `https://${e}`,
      target: Bu(t?.openInNewTab, n),
      rel: n ? void 0 : t?.rel,
    };
  return (
    t?.preserveParams && ((r.href = Rn(r.href ?? e)), (r[`data-framer-preserve-params`] = !0)),
    t?.trackLinkClick &&
      (r.onClick = () => {
        t.trackLinkClick(e);
      }),
    r
  );
}
function Bu(e, t) {
  return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Vu(e, t) {
  console.warn(
    st(`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`)
  );
}
function Hu(e, t, n) {
  try {
    let r = t?.get(e.collectionId);
    if (!r)
      return Vu(void 0, `Couldn't find collection utils for collection id: "${e.collectionId}"`);
    let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
    return it(i) ? i.catch(Vu) : i;
  } catch (e) {
    Vu(e);
  }
}
function Uu(e, t, n, r, i = []) {
  function a(e) {
    if (!e) return;
    let t = {};
    for (let a in e) {
      let o = e[a];
      if (!o) continue;
      let s = Hu(o, r, n);
      it(s) ? i.push(s) : s && (t[a] = s);
    }
    return t;
  }
  let o = { path: a(e), hash: a(t) };
  return i.length > 0 ? Promise.allSettled(i) : o;
}
function Wu() {
  let e = hn();
  return u((t, n, r, i = []) => Uu(t, n, r, e, i), [e]);
}
function Gu({ nodeId: e, clickTrackingId: t, router: n, href: r, activeLocale: i }) {
  let a = hn();
  return u(
    async (o) => {
      if (!n.pageviewEventData?.current) return;
      let s =
          n.pageviewEventData.current instanceof Promise
            ? await n.pageviewEventData.current
            : n.pageviewEventData.current,
        c = eu(r) ? r : lu(r);
      if (!eu(c))
        return an(
          `published_site_click`,
          {
            ...s,
            href: o ? Ku(o) : null,
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
        if (F(t)) {
          let n = e.getRecordIdBySlug(t, i || void 0);
          f = (it(n) ? await n : n) ?? null;
        }
      }
      return an(
        `published_site_click`,
        {
          ...s,
          href: o ? Ku(o) : null,
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
function Ku(e) {
  try {
    let t = new URL(e, W.document.baseURI);
    return t.origin === W.location.origin ? t.pathname + t.search + t.hash : t.href;
  } catch {
    return e;
  }
}
function qu(e, t, n, r, i, a, o) {
  (n(), e.navigate?.(t, r, i, a, o));
}
function Ju(e, t, n) {
  return async (r) => {
    let i = jn(r),
      a = vu(r.target),
      o = !a || a.getAttribute(`target`) === `_blank`,
      s = !i && !o,
      c = () => void t(e);
    if (!s) {
      (await Vg({
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
function Yu(e, t, n) {
  return async (r) => {
    let i = await Xu(t);
    if (i.decision === `client`) {
      n(r);
      return;
    }
    Zu(t ?? e, r, i.redirectUrl);
  };
}
async function Xu(e) {
  return !e || !ku()
    ? { decision: `client` }
    : Iu(e) || (Fu(e), (await Lu(e)) ?? { decision: `server` });
}
async function Zu(e, t, n) {
  (await Vg({ priority: `user-blocking`, ensureContinueBeforeUnload: !0, continueAfter: `paint` }),
    t?.(),
    f.location.assign(Qu(e, n)));
}
function Qu(e, t) {
  if (!t) return e;
  try {
    let n = new URL(e, f.location.href),
      r = new URL(t);
    return (n.hash && !r.hash && (r.hash = n.hash), r.href);
  } catch {
    return t;
  }
}
function $u(e) {
  let t = ti(e);
  if (t && f.location.pathname === t) {
    let e = new URL(f.location.href);
    return ((e.pathname = `${t}/`), e.href);
  }
  return f.location.href;
}
function ed(e, t, n) {
  if (t || f === void 0) return;
  let r = $u(n),
    i;
  try {
    i = new URL(e, r);
  } catch {
    return;
  }
  let a = new URL(r);
  if (i.origin === a.origin && !(i.pathname === a.pathname && i.search === a.search)) return i.href;
}
function td(e, t, n, r, i, a, o, s) {
  if (!n) return zu(e, r);
  let c = Su(t, e, s, o);
  if (!c) return zu(e, r);
  let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
  if (!u) return zu(e, r);
  let m = ii(u, {
      currentRoutePath: n.path,
      currentRoutePathLocalized: n.pathLocalized,
      currentPathVariables: n.pathVariables,
      hash: d,
      pathVariables: f,
      preserveQueryParams: t.preserveQueryParams && !Eh,
      siteCanonicalURL: t.siteCanonicalURL,
      localeId: a,
    }),
    h = Bu(r.openInNewTab, !0),
    g = h === `_blank`,
    _ = ed(m, g, t.siteCanonicalURL),
    v = { pathVariables: f, locale: p },
    y = Yu(m, _, (e) =>
      qu(
        t,
        l,
        () =>
          i(l, v, { priority: `user-blocking`, yieldBeforePreload: !1, shouldLoadRouteData: !g }),
        d,
        f,
        r.smoothScroll,
        e
      )
    );
  return {
    href: m,
    target: h,
    onClick: Ju(m, r.trackLinkClick, y),
    navigate: y,
    "data-framer-page-link-current":
      (n && Tu(n, { webPageId: l, hash: d, pathVariables: f }, s)) || void 0,
    preload: () =>
      i(l, v, { priority: `background`, yieldBeforePreload: !0, shouldLoadRouteData: !g }),
    _routeId: l,
    _pathVariables: f,
    _locale: p,
    _navigationUrl: _,
  };
}
function nd(e, t, n) {
  let r = rd(e.style, t.style),
    i = { ...e, ...t, ...(r && { style: r }), ref: n },
    { onTap: a, onClick: o } = t;
  if (!a && !o) return i;
  let { onClick: s, onTap: c } = e;
  return {
    ...i,
    onClick:
      o || s
        ? (e) => {
            (Je(s) && s?.(e), o?.(e));
          }
        : void 0,
    onTap:
      a || c
        ? (e, t) => {
            (Je(c) && c?.(e, t), a?.(e, t));
          }
        : void 0,
  };
}
function rd(e, t) {
  let n = L(e) ? e : void 0,
    r = n && !Ze(n),
    i = t && !Ze(t);
  if (!(!r && !i)) return { ...n, ...t };
}
function id(e, t, n) {
  if (!(t && yn())) return e;
  let { onClick: r, ...i } = e;
  return r ? (n ? { ...i, onTap: r, onClick: ad } : { ...i, onTap: r }) : e;
}
function ad(e) {
  let t = vu(e.target);
  !t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function od({ EditorBar: e, fast: n = !1 }) {
  let i = t(LS),
    a = r(kh, n ? BS : VS, jh),
    o = Rx(),
    s = C(() => {
      let e = {},
        t;
      for (t in o)
        o.hasOwnProperty(t) &&
          (t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
          (e[t] = o[t]);
      return e;
    }, [o]);
  return !e || !i || !a
    ? null
    : E(zS, { children: E(x, { children: E(e, { framerSiteId: i, features: s }) }) });
}
function sd({ currentRoutePath: e, routerAPI: t, children: n }) {
  let r = _(),
    i = _(),
    a = _(t),
    o = _(null);
  ((a.current = t),
    j(() => {
      e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
    }, [e]));
  let [s] = h(() => ({
    getInitialState: () => ({
      visitedPages: r.current ?? new Set(),
      getCurrentRoutePath: () =>
        a.current ? ld(a.current, a.current.currentRouteId, a.current.currentPathVariables) : ``,
      resolveRoute: (e) => (a.current ? ld(a.current, e.webPageId, e.pathVariables) : ``),
      setRouteChangeHandler: (e) => {
        i.current = e;
      },
      sendTrackingEvent: async (e) => {
        a.current && cd(a.current.pageviewEventData.current, e);
      },
    }),
    triggerStateRef: o,
  }));
  return E(HS.Provider, { value: s, children: n });
}
async function cd(e, t) {
  if (!on(t.trackingId)) return;
  let n = e instanceof Promise ? await e : e;
  n &&
    an(`published_site_trigger_invoke`, { ...n, ...t, trackingId: t.trackingId || null }, `lazy`);
}
function ld(e, t, n) {
  let r = e.getRoute(t);
  return r?.path ? (n ? Zn(r.path, n) : r.path) : ``;
}
function ud(e, t) {
  if (e.routeId !== t.routeId) return !1;
  if (e.pathVariables === t.pathVariables) return !0;
  let n = e.pathVariables || {},
    r = t.pathVariables || {};
  return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function dd() {
  let e = Intl.DateTimeFormat().resolvedOptions();
  ((US = e.timeZone), (WS = e.locale));
}
function fd({
  routeId: e,
  url: t,
  pathVariables: n,
  localeId: r,
  contentLocaleId: i,
  canonicalPathVariables: a,
}) {
  Nr(
    {
      routeId: e,
      pathVariables: n,
      localeId: r,
      paginationInfo: wr()?.paginationInfo,
      contentLocaleId: i,
      canonicalPathVariables: a,
    },
    t
  );
}
function pd(e, t, n) {
  let { path: r } = t;
  if (!r) return;
  let {
      historyPath: i,
      hash: a,
      pathVariables: o,
      localeId: s,
      currentRoutePath: c,
      contentLocaleId: l,
      canonicalPathVariables: u,
    } = n,
    d = c !== void 0 && c === r,
    f = wr();
  Nr(
    {
      routeId: e,
      hash: a,
      pathVariables: o,
      contentLocaleId: l,
      canonicalPathVariables: u,
      localeId: s,
      queryParamBackAnchorSearch: d ? f?.queryParamBackAnchorSearch : void 0,
    },
    i
  );
}
function md(e, t, n, r) {
  let i = wr();
  !t.path ||
    i?.hash === n.hash ||
    (r?.(),
    Nr(
      {
        routeId: e,
        hash: n.hash,
        pathVariables: n.pathVariables,
        localeId: n.localeId,
        queryParamBackAnchorSearch: i?.queryParamBackAnchorSearch,
        paginationInfo: i?.paginationInfo,
        contentLocaleId: i?.contentLocaleId,
        canonicalPathVariables: i?.canonicalPathVariables,
      },
      ii(t, n)
    ));
}
function hd() {
  return En() >= 17 ? JS : qS;
}
function gd(e = Sd) {
  let t = (e) => {
    e.persisted && Td();
  };
  Cn() && (f.addEventListener(`pageshow`, t), (KS = Date.now() - hd()));
  let n = _d(),
    r = Cd(e);
  return function () {
    (f.removeEventListener(`pageshow`, t), n(), r());
  };
}
function _d() {
  let e = f.history.scrollRestoration;
  return (
    (f.history.scrollRestoration = `manual`),
    function () {
      f.history.scrollRestoration = e;
    }
  );
}
function vd(e) {
  return L(e) && typeof e.x == `number` && typeof e.y == `number`;
}
function yd() {
  return { x: f.scrollX, y: f.scrollY };
}
function bd() {
  let e = wr();
  if (!e) return;
  let { scrollPosition: t } = e;
  if (vd(t)) return t;
}
function xd(e) {
  let t = wr();
  t && (jr({ ...t, scrollPosition: e }), Cn() && (KS = Date.now()));
}
function Sd(e, t = !1) {
  let n = bd();
  if (!n || n.x !== e.x || n.y !== e.y) {
    if (Cn() && !t) {
      let e = hd();
      if (Date.now() - KS < e) return;
    }
    xd(e);
  }
}
function Cd(e) {
  let t = () => {
      e(yd());
    },
    n = () => {
      e(yd(), !0);
    },
    r = () => {
      document.visibilityState === `hidden` && n();
    };
  (document.addEventListener(`visibilitychange`, r), f.addEventListener(`pagehide`, n));
  let i = () => {
    (document.removeEventListener(`visibilitychange`, r), f.removeEventListener(`pagehide`, n));
  };
  if (!(`onscrollend` in f)) {
    let e = wd(t);
    return function () {
      (i(), e());
    };
  }
  return (
    f.addEventListener(`scrollend`, t),
    function () {
      (i(), f.removeEventListener(`scrollend`, t));
    }
  );
}
function wd(e) {
  let t, n;
  function r() {
    (clearTimeout(t), (t = void 0), (n = void 0));
  }
  let i = () => {
      let t = n;
      (r(), !(t === void 0 || Tr(wr()) !== t) && e());
    },
    a = () => {
      let e = Tr(wr());
      if (e === void 0) {
        r();
        return;
      }
      (clearTimeout(t), (n = e));
      let a = Cn() ? hd() : 100;
      t = f.setTimeout(i, a);
    };
  return (
    f.addEventListener(`scroll`, a),
    function () {
      (f.removeEventListener(`scroll`, a), r());
    }
  );
}
function Td() {
  let e = bd();
  return e ? (f.scrollTo(e.x, e.y), !0) : !1;
}
function Ed(e, t) {
  let n = t ? { behavior: `smooth`, block: `start`, inline: `nearest` } : void 0;
  e.scrollIntoView(n);
}
function Dd(e, t) {
  let n = e && document.getElementById(e);
  if (n) return (Ed(n, t), !0);
}
function Od(e, t, n) {
  n !== `preserve-scroll-position` &&
    We.render(
      () => {
        (n === `restore-scroll-position` && Td()) || Dd(e, t) || f.scrollTo(0, 0);
      },
      !1,
      !0
    );
}
function kd(e, t) {
  We.read(() => {
    f.scrollY !== 0 ||
      f.scrollX !== 0 ||
      We.render(
        () => {
          Td() || Dd(e, t);
        },
        !1,
        !0
      );
  });
}
function Ad(e) {
  let t = Rx().scrollRestoration,
    n = _(void 0),
    r = _(!1),
    a = !!(t && !e),
    o = u(
      (e) => {
        ((n.current = e), a && (r.current = !0));
      },
      [a]
    ),
    s = u((e, t = !1) => {
      r.current || Sd(e, t);
    }, []),
    c = u(() => {
      a && (r.current = !0);
    }, [a]),
    l = u(() => n.current !== void 0 || r.current, []),
    d = u((e, t) => {
      let i = n.current;
      !i ||
        i.routeId !== e ||
        i.remountKey !== t ||
        ((n.current = void 0), (r.current = !1), Od(i.hash, i.shouldSmoothScroll, i.behavior));
    }, []);
  return (
    i(() => {
      if (a) return gd(s);
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
function jd({ currentRouteId: e, remountKey: t, scrollRestoration: n }) {
  let { commitNavigationScroll: r, usesCustomScrollRestoration: a } = n;
  return (
    i(() => {
      r(e, t);
    }),
    j(() => {
      a && kd(f.location.hash.slice(1) || void 0, !1);
    }, []),
    null
  );
}
function Md() {
  let [e, t] = A.useState(0);
  return [e, A.useCallback(() => t((e) => e + 1), [])];
}
function Nd({ children: e, loadSnippetsModule: t }) {
  return E(aC.Provider, { value: t, children: e });
}
function Pd() {
  return A.useContext(aC);
}
function Fd(e) {
  return { start: `<!-- Snippet: ${e} -->`, end: `<!-- SnippetEnd: ${e} -->` };
}
async function Id(e, t, n = `beforeend`) {
  let r, i;
  switch (n) {
    case `beforebegin`:
      (R(t.parentNode, `Can't use 'beforebegin' with a referenceNode at the top level`),
        (r = t.parentNode),
        (i = t));
      break;
    case `afterend`:
      (R(t.parentNode, `Can't use 'afterend' with a referenceNode at the top level`),
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
      z(n);
  }
  let a = document.createRange();
  (a.selectNodeContents(r), await Ld(a.createContextualFragment(e), r, i));
}
async function Ld(e, t, n) {
  for (let r = e.firstChild; r; r = r.nextSibling) {
    if (r instanceof HTMLScriptElement) {
      let e = Rd(r, t, n);
      e !== void 0 && (await e);
      continue;
    }
    let e = r.cloneNode(!1);
    (t.insertBefore(e, n), r.firstChild && (await Ld(r, e, null)));
  }
}
function Rd(e, t, n) {
  let r = e.cloneNode(!0);
  if (
    !e.hasAttribute(`src`) ||
    e.hasAttribute(`async`) ||
    e.hasAttribute(`defer`) ||
    e.getAttribute(`type`)?.toLowerCase() === `module`
  )
    t.insertBefore(r, n);
  else return zd(r, t, n);
}
function zd(e, t, n) {
  return new Promise((r) => {
    ((e.onload = e.onerror = r), t.insertBefore(e, n));
  });
}
function Bd(e) {
  let t, n;
  switch (e) {
    case `bodyStart`:
      ((t = tC), (n = nC));
      break;
    case `bodyEnd`:
      ((t = rC), (n = iC));
      break;
    case `headStart`:
      ((t = ZS), (n = QS));
      break;
    case `headEnd`:
      ((t = $S), (n = eC));
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
function Vd(e, t, n) {
  if (!t || !n) return { start: null, end: null };
  let r = null,
    i = null,
    { start: a, end: o } = Fd(e),
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
async function Hd(e, t, n) {
  if (t.length === 0) return;
  let { start: r, end: i } = Bd(e),
    a = e === `bodyStart` || e === `bodyEnd` ? document.body : document.head;
  for (let e of t) {
    let { start: t, end: o } = Vd(e.id, r, i),
      s = t && o;
    if (s && e.loadMode === `once`) continue;
    if ((Ud(t, o), s)) {
      await Id(e.code, o, `beforebegin`);
      continue;
    }
    let { start: c, end: l } = Fd(e.id),
      u = `${c}
${e.code}
${l}`,
      d = Gd(e.id, n, r, i);
    d ? await Id(u, d, `afterend`) : await Id(u, r ?? a, r ? `afterend` : `beforeend`);
  }
}
function Ud(e, t) {
  if (!e || !t) return;
  let n = e.nextSibling;
  for (; n && n !== t;) {
    let e = n.nextSibling;
    (Wd(n) && n.remove(), (n = e));
  }
}
function Wd(e) {
  if (e.nodeType !== Node.ELEMENT_NODE) return !0;
  if (e.nodeName === `SCRIPT`) {
    let t = e.type;
    if (!t || t === `text/javascript` || t === `module`) return !1;
  }
  return !0;
}
function Gd(e, t, n, r) {
  let i = t.indexOf(e) - 1;
  if (i < 0) return null;
  for (let e = i; e >= 0; e--) {
    let i = t[e];
    if (!i) continue;
    let a = Vd(i, n, r).end;
    if (a) return a;
  }
  return null;
}
function Kd() {
  let e = Pd();
  return u(
    async (t, n, r, i) => {
      if (!e) return;
      let a = document.getElementById(YS)?.dataset[XS] !== void 0;
      if (i && a) return;
      let { getSnippets: o, snippetsSorting: s } = await e.readMaybeAsync(),
        c = await o(t, n, r);
      for (let e in c) {
        let t = e,
          n = c[t],
          r = s[t];
        await Hd(t, n, r);
      }
    },
    [e]
  );
}
function qd(e, t) {
  e.startsWith(`/`) && (e = `.` + e);
  let n = new URL(t);
  return (n.pathname.endsWith(`/`) || (n.pathname += `/`), new URL(e, n).href);
}
async function Jd({
  siteCanonicalURL: e,
  activeLocale: t,
  contentLocale: n,
  currentRoute: r,
  currentRouteId: i,
  currentPathVariables: a,
  locales: o,
  collectionUtils: s,
}) {
  if (!e || !t || !n || !r) return;
  let c,
    l = [],
    u = o.find((e) => e.id === Uh),
    { path: d } = await Hn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
  d && (c = qd(d, e));
  let p;
  for (let n of o) {
    if (r.includedLocales && !r.includedLocales.includes(n.id)) continue;
    let { path: o } = await Hn({
      currentLocale: t,
      nextLocale: n,
      defaultLocale: u,
      route: r,
      routeId: i,
      pathVariables: a,
      collectionUtils: s,
      preserveQueryParams: !1,
    });
    if (!o) continue;
    let c = qd(o, e);
    (l.push({ href: c, hrefLang: n.code }), n.id === Uh && (p = c));
  }
  return (
    p && l.push({ href: p, hrefLang: `x-default` }),
    () => {
      (yr(c, f.location.href), br(l));
    }
  );
}
function Yd({
  activeLocale: e,
  contentLocale: t,
  currentPathVariables: n,
  currentRoute: r,
  currentRouteId: i,
  isInitialNavigation: a,
  locales: o,
  siteCanonicalURL: s,
}) {
  let c = hn(),
    l = Kd();
  j(() => {
    let u = !0,
      d = () => void (u = !1);
    return !e || !t
      ? (l(i, n ?? {}, e, a).catch((e) => {
          u && Dl(e);
        }),
        d)
      : ((e.id === t.id
          ? Nn()
          : Hn({
              currentLocale: e,
              nextLocale: t,
              defaultLocale: o.find(({ id: e }) => e === Uh),
              route: r,
              routeId: i,
              pathVariables: n,
              collectionUtils: c,
              preserveQueryParams: !1,
            })
        )
          .then(async (d) => {
            if (!u) return;
            let f = d ? d.pathVariables : n;
            if ((await l(i, f ?? {}, t, a), !u)) return;
            let p = await Jd({
              siteCanonicalURL: s,
              activeLocale: e,
              contentLocale: t,
              currentRoute: r,
              currentRouteId: i,
              currentPathVariables: n,
              locales: o,
              collectionUtils: c,
            });
            u && p?.();
          })
          .catch((e) => {
            u && Dl(e);
          }),
        d);
  }, [e, c, t, n, r, i, a, l, o, s]);
}
function Xd(e) {
  if (!e) return wh;
  let t = !1;
  return () => {
    t || ((t = !0), e?.());
  };
}
function Zd(e) {
  let t = zr(e),
    n = _(void 0),
    r = u(() => {
      (n.current?.abort(), (n.current = void 0));
    }, []);
  return {
    startNavigation: u(
      async (e, i, a, o = !0) => {
        r();
        let s = o ? new AbortController() : void 0;
        n.current = s;
        let c = s?.signal,
          l = Pt(c);
        if ((i.promise.finally(l), a === void 0)) return (e(c), i.promise);
        let u,
          d = new Promise((e, t) => {
            ((u = e), c?.addEventListener(`abort`, t));
          }).catch(wh);
        if ((t(d, s, a), e(c), await i.promise, c?.aborted)) return;
        let p = f.navigation?.transition;
        u();
        try {
          await p?.finished;
        } catch (e) {
          console.error(`Navigation transition failed`, e);
        }
        c?.aborted || s_();
      },
      [r, t]
    ),
    cancelPendingNavigation: r,
  };
}
function Qd({
  defaultPageStyle: e,
  disableHistory: t,
  initialPathVariables: n,
  initialRoute: r,
  notFoundPage: a,
  collectionUtils: o,
  routes: s,
  initialLocaleId: c,
  initialCollectionItemId: p,
  initialContentLocaleIdOverride: m,
  locales: h = Hh,
  initialCanonicalPathVariables: g,
  preserveQueryParams: v = !1,
  LayoutTemplate: y,
  EditorBar: b,
  siteCanonicalURL: x,
  adaptLayoutToTextDirection: S,
}) {
  (di(),
    Pr({
      disabled: t,
      routeId: r,
      initialPathVariables: n,
      initialLocaleId: c,
      initialContentLocaleId: m,
      initialCanonicalPathVariables: g,
    }));
  let T = _r(),
    [D, ee] = Md(),
    O = Sr(`framer-route-change`),
    te = C(() => (!Rx().synchronousNavigationOnDesktop || !An() ? l : (e) => e()), []),
    k = _(!0),
    A = _(),
    ne = _(0),
    re = _(r),
    M = _(n),
    ie = _(),
    ae = _(c),
    oe = Ad(t),
    { isNavigationCommitPending: se, usesCustomScrollRestoration: ce } = oe,
    { startNavigation: le, cancelPendingNavigation: ue } = Zd(ce),
    de = hn(),
    fe = oe.scheduleScroll,
    pe = ae.current,
    me = re.current,
    he = M.current,
    ge = s[me],
    _e = ge?.path;
  if (!ge) throw Error(`Router cannot find route for ${me}`);
  let ve = C(() => h.find(({ id: e }) => e === Uh), [h]),
    N = C(() => h.find(({ id: e }) => (pe ? e === pe : e === Uh)) ?? null, [pe, h]),
    {
      contentLocale: ye,
      currentCanonicalPathVariables: be,
      pageExistsInCurrentLocale: xe,
      setRouteContentState: Se,
    } = ef({
      activeLocale: N,
      currentRoute: ge,
      initialCanonicalPathVariables: g,
      initialContentLocaleIdOverride: m,
      locales: h,
      routes: s,
    }),
    Ce = N?.textDirection ?? `ltr`,
    P = S ? Ce : `ltr`;
  i(() => {
    S && document.documentElement.setAttribute(`dir`, Ce);
  }, [Ce, S]);
  let we = Lr(),
    Te = C(
      () => ({
        activeLocale: N,
        contentLocale: ye,
        locales: h,
        setLocale: async (e) => {
          let n = ++ne.current,
            r = O({ localized: !0 });
          if ((await Vg({ priority: `user-blocking`, continueAfter: `paint` }), n !== ne.current)) {
            r.ignore?.();
            return;
          }
          let i;
          F(e) ? (i = e) : L(e) && (i = e.id);
          let a = h.find(({ id: e }) => e === i);
          if (!a) {
            r.ignore?.();
            return;
          }
          let o = re.current,
            c = s[o];
          if (!c) {
            r.ignore?.();
            return;
          }
          let l = ti(x);
          try {
            let e = await we({
              currentLocale: N,
              nextLocale: a,
              route: c,
              routeId: o,
              defaultLocale: ve,
              pathVariables: M.current,
              preserveQueryParams: v,
              sitePrefix: l,
            });
            if (!e || n !== ne.current) {
              r.ignore?.();
              return;
            }
            let i = e.path && l + e.path,
              { contentLocaleId: s, canonicalPathVariables: u } = await Gn({
                activeLocale: a,
                defaultLocale: ve,
                collectionUtilsCache: de,
                locales: h,
                pathVariables: e.pathVariables,
                route: c,
                routeId: o,
              });
            if (n !== ne.current) {
              r.ignore?.();
              return;
            }
            ((k.current = !1),
              (ae.current = a.id),
              (A.current = i),
              (M.current = e.pathVariables),
              Se(s, u));
            let d = c.path && e.pathVariables ? Zn(c.path, e.pathVariables) : c.path;
            (fe({
              routeId: o,
              remountKey: `${a.id}${d}`,
              hash: void 0,
              shouldSmoothScroll: !1,
              behavior: `preserve-scroll-position`,
            }),
              le(
                () => {
                  T(o, o, () => te(ee));
                },
                r,
                t
                  ? void 0
                  : i
                    ? () => {
                        fd({
                          routeId: o,
                          url: i,
                          pathVariables: e.pathVariables,
                          localeId: a.id,
                          contentLocaleId: s,
                          canonicalPathVariables: u,
                        });
                      }
                    : void 0,
                !1
              ));
          } catch {
            r.ignore?.();
          }
        },
      }),
      [N, ve, ye, t, ee, h, v, Se, s, fe, le, T, O, te, we, de, x]
    ),
    Ee = u(
      (e, t, n, r, i, a, o, c, l, u, d) => {
        k.current = !1;
        let f = re.current,
          p = s[e],
          m = Nt(p, n),
          h = p?.path && i ? Zn(p.path, i) : p?.path;
        if (
          ((re.current = e),
          (ae.current = t),
          (M.current = i),
          (ie.current = void 0),
          Se(a, o),
          (A.current = r),
          fe({
            routeId: e,
            remountKey: `${t}${h}`,
            hash: m,
            shouldSmoothScroll: u ?? !1,
            behavior: c
              ? ce
                ? `restore-scroll-position`
                : `preserve-scroll-position`
              : `scroll-to-hash-or-top`,
          }),
          c)
        ) {
          (ue(), te(ee));
          return;
        }
        le(
          (t) => {
            T(f, e, () => te(ee), t);
          },
          l,
          d,
          !0
        );
      },
      [ee, Se, s, ce, fe, le, T, te, ue]
    );
  (Fr(oe, re, Ee),
    j(() => {
      if (t) return;
      let e = () => {
        let e = wr(),
          t = f.location.hash === `` ? void 0 : f.location.hash.slice(1);
        (e && Nt(s[e.routeId], e.hash) === t) ||
          Mr({
            ...(e ||
              (Dr() ?? { routeId: re.current, pathVariables: M.current, localeId: ae.current })),
            hash: t,
            scrollPosition: void 0,
          });
      };
      return (f.addEventListener(`hashchange`, e), () => f.removeEventListener(`hashchange`, e));
    }, [t, s]));
  let De = u(
      async (e, n, r, i, a) => {
        let o = s[e],
          c = dt(o?.page) ? o.page.getStatus() : void 0,
          l = c?.hasRendered,
          u = O({ cached: l, preloaded: l ? void 0 : c?.hasLoaded }),
          d = Xd(a);
        if (
          (Vg({
            priority: `background`,
            ensureContinueBeforeUnload: !0,
            continueAfter: `paint`,
          }).then(d),
          await Vg({ priority: `user-blocking`, continueAfter: `paint` }),
          r)
        ) {
          let e = new Set(),
            t = o?.path ?? `/`;
          for (let n of t.matchAll(Ug)) {
            let t = n[1];
            if (t === void 0) throw Error(`A matching path variable should not be undefined`);
            e.add(t);
          }
          r = Object.fromEntries(Object.entries(r).filter(([t]) => e.has(t)));
        }
        let f = Nt(o, n),
          p = M.current,
          m = ae.current;
        if (
          ie.current === void 0 &&
          ud({ routeId: re.current, pathVariables: p }, { routeId: e, pathVariables: r })
        ) {
          let a = se();
          if (a) {
            let t = o?.path && r ? Zn(o.path, r) : o?.path;
            fe({
              routeId: e,
              remountKey: `${m}${t}`,
              hash: f,
              shouldSmoothScroll: i ?? !1,
              behavior: `scroll-to-hash-or-top`,
            });
          } else ue();
          (u.ignore?.(), !a && ce && Od(f, i, `scroll-to-hash-or-top`));
          let c = s[e];
          (!t &&
            c &&
            md(
              e,
              c,
              {
                currentRoutePath: c.path,
                currentRoutePathLocalized: c.pathLocalized,
                currentPathVariables: p,
                pathVariables: r,
                hash: n,
                localeId: m,
                preserveQueryParams: v,
                siteCanonicalURL: x,
              },
              d
            ),
            !a && !ce && Od(f, i, `scroll-to-hash-or-top`));
          return;
        }
        if (!o) return;
        let g = s[re.current],
          _ =
            ti(x) +
            ii(o, {
              currentRoutePath: g?.path,
              currentRoutePathLocalized: g?.pathLocalized,
              currentPathVariables: p,
              hash: n,
              pathVariables: r,
              localeId: m,
              localeSlug: h.find(({ id: e }) => e === m)?.slug,
              preserveQueryParams: v,
              relative: !1,
              siteCanonicalURL: x,
            }),
          y = {};
        ie.current = y;
        let { contentLocaleId: b, canonicalPathVariables: S } = await Gn({
          activeLocale: N,
          defaultLocale: ve,
          collectionUtilsCache: de,
          locales: h,
          pathVariables: r,
          route: o,
          routeId: e,
        });
        ie.current === y &&
          Ee(
            e,
            m,
            n,
            _,
            r,
            b,
            S,
            !1,
            u,
            i,
            t
              ? void 0
              : () => {
                  (d(),
                    pd(e, o, {
                      historyPath: _,
                      currentRoutePath: g?.path,
                      hash: n,
                      pathVariables: r,
                      contentLocaleId: b,
                      canonicalPathVariables: S,
                      localeId: m,
                    }));
                }
          );
      },
      [ue, s, h, Ee, t, v, x, O, ce, se, fe, de, ve, N]
    ),
    Oe = Et(s),
    ke = A.current,
    Ae = GS(ge, me, ke, he, N, p),
    je = k.current;
  Yd({
    activeLocale: N,
    contentLocale: ye,
    currentPathVariables: he,
    currentRoute: ge,
    currentRouteId: me,
    isInitialNavigation: je,
    locales: h,
    siteCanonicalURL: x,
  });
  let Me = C(
      () => ({
        navigate: De,
        getRoute: Oe,
        currentRouteId: me,
        currentPathVariables: he,
        currentCanonicalPathVariables: be,
        routes: s,
        collectionUtils: o,
        preserveQueryParams: v,
        pageviewEventData: Ae,
        siteCanonicalURL: x,
        isInitialNavigation: je,
      }),
      [De, Oe, me, he, be, s, o, v, x, Ae, je]
    ),
    Ne = _e && he ? Zn(_e, he) : _e,
    Pe = `${pe}${Ne}`,
    Fe = Aa(() => ({ ...e, display: `contents` }));
  return E(Dt, {
    api: Me,
    children: E(Kg.Provider, {
      value: Te,
      children: E(qg.Provider, {
        value: P,
        children: E(rS, {
          children: E(Xr, {
            routerRenderKey: D,
            isNavigationCommitPending: oe.isNavigationCommitPending,
            children: w(sd, {
              currentRoutePath: Ne,
              routerAPI: Me,
              children: [
                b && E(od, { EditorBar: b, fast: !0 }),
                E(Vx, {
                  children: w(Tl, {
                    children: [
                      E(X_.Start, {}),
                      E(jd, { currentRouteId: me, remountKey: Pe, scrollRestoration: oe }),
                      E(Q_, {
                        notFoundPage: a,
                        defaultPageStyle: e,
                        routerRenderKey: D,
                        children: E($d, {
                          LayoutTemplate: y,
                          webPageId: ge?.abTestingVariantId ?? me,
                          style: e,
                          children: (t) =>
                            E(d, { children: xe ? gi(ge.page, t ? Fe : e) : a && gi(a, e) }, Pe),
                        }),
                      }),
                      b && E(od, { EditorBar: b }),
                      E(si, {}),
                      E(X_.End, {}),
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
function $d({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
  return e ? E(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function ef({
  activeLocale: e,
  currentRoute: t,
  initialCanonicalPathVariables: n,
  initialContentLocaleIdOverride: r,
  locales: i,
  routes: a,
}) {
  let o = _(n),
    s = _(r),
    c = s.current,
    l = !e || !t.includedLocales || t.includedLocales.includes(e.id),
    d = C(() => {
      if (!e) return null;
      let n;
      return (
        (n = l
          ? (c ?? t?.canonicalLocaleIdByLocaleId?.[e.id])
          : Object.values(a).find((e) => e.path && w_.has(e.path))?.canonicalLocaleIdByLocaleId?.[
              e.id
            ]),
        n ? (i.find(({ id: e }) => e === n) ?? e) : e
      );
    }, [e, t, i, c, l, a]),
    f = u((e, t) => {
      ((s.current = e), (o.current = t));
    }, []);
  return {
    contentLocale: d,
    currentCanonicalPathVariables: o.current,
    pageExistsInCurrentLocale: l,
    setRouteContentState: f,
  };
}
function tf(e) {
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
function nf(e) {
  return typeof e == `object` && !!e;
}
function rf(e, t) {
  if (t === ``) return e;
  let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
    r = e;
  for (let e of n) {
    if (!nf(r)) return;
    r = r[e];
  }
  return r;
}
function af(e) {
  return `${e.credentials}:${e.url}`;
}
function of(e) {
  return F(e) && !Number.isNaN(Number(e));
}
function sf(e, t) {
  switch (e) {
    case `string`:
      return F(t) || I(t);
    case `color`:
      return F(t);
    case `boolean`:
      return Ye(t);
    case `number`:
      return I(t) || of(t);
    case `link`:
    case `image`:
      return F(t) && iu(t, !1);
    default:
      return !1;
  }
}
function cf(e, t) {
  if (e.status === `loading`) return t.fallbackValue;
  if (e.status === `error`) throw e.error;
  let n = rf(e.data, t.resultKeyPath);
  if (Qe(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
  if (!sf(t.resultOutputType, n))
    throw Error(`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`);
  return n;
}
function lf(e, t) {
  if (K.current() === K.canvas) return !1;
  let n = Math.max(t * 1e3, sC);
  return Date.now() >= e + n;
}
function uf({ client: e, children: t }) {
  return E(pC.Provider, { value: e, children: t });
}
function df(e) {
  let {
    RootComponent: t,
    isWebsite: n,
    environment: r,
    routeId: i,
    framerSiteId: a,
    pathVariables: o,
    canonicalPathVariables: s,
    routes: c,
    collectionUtils: l,
    serverDatabaseClient: u,
    notFoundPage: d,
    isReducedMotion: f = !1,
    skipAnimations: p = !1,
    includeDataObserver: m = !1,
    localeId: h,
    locales: g,
    preserveQueryParams: _,
    EditorBar: v,
    defaultPageStyle: y,
    disableHistory: b,
    LayoutTemplate: x,
    siteCanonicalURL: S,
    adaptLayoutToTextDirection: C,
    loadSnippetsModule: w,
    initialCollectionItemId: T,
    initialContentLocaleIdOverride: D,
  } = e;
  return (
    A.useEffect(() => {
      n || Ev.start();
    }, []),
    n
      ? E(Hr, {
          value: r ?? `preview`,
          children: E(je, {
            reducedMotion: p ? `always` : f ? `user` : `never`,
            skipAnimations: p,
            children: E(mn, {
              collectionUtils: l,
              children: E(uf, {
                client: u,
                children: E(fC, {
                  children: E(LS.Provider, {
                    value: a,
                    children: E(Nd, {
                      loadSnippetsModule: w,
                      children: E(Qd, {
                        initialRoute: i,
                        initialPathVariables: o,
                        initialCanonicalPathVariables: s,
                        initialLocaleId: h,
                        initialCollectionItemId: T,
                        initialContentLocaleIdOverride: D,
                        routes: c,
                        collectionUtils: l,
                        notFoundPage: d,
                        locales: g,
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
          }),
        })
      : E(m ? Jb : A.Fragment, {
          children: E(kt, {
            routes: c,
            children: E(Ib, { children: A.isValidElement(t) ? t : A.createElement(t, { key: i }) }),
          }),
        })
  );
}
function ff(e) {
  return {
    trace(...t) {
      return q.getLogger(e)?.trace(...t);
    },
    debug(...t) {
      return q.getLogger(e)?.debug(...t);
    },
    info(...t) {
      return q.getLogger(e)?.info(...t);
    },
    warn(...t) {
      return q.getLogger(e)?.warn(...t);
    },
    error(...t) {
      return q.getLogger(e)?.error(...t);
    },
    get enabled() {
      return q.getLogger(e) !== void 0;
    },
  };
}
function pf() {
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
function mf() {
  return mC.priority;
}
function hf(e) {
  let t = mC;
  return (
    (mC = e),
    {
      [pf()]() {
        mC = t;
      },
    }
  );
}
function gf(e = mC.priority, t = mC.canYield) {
  if (!(!t || e === void 0)) return Vg({ batch: !0, priority: Pn(e) });
}
function _f(e) {
  var t = [];
  try {
    Ke(t, hf({ priority: mC.priority, canYield: !1 }));
    let n = e.next();
    return (R(n.done, `Generator must not yield`), n.value);
  } catch (e) {
    var n = e,
      r = !0;
  } finally {
    De(t, n, r);
  }
}
async function vf(e, t, n = mC.priority, r = mC.canYield) {
  let i = { priority: n, canYield: r },
    a = t;
  if (a === void 0) {
    var o = [];
    try {
      (Ke(o, hf(i)), (a = e.next()));
    } catch (e) {
      var s = e,
        c = !0;
    } finally {
      De(o, s, c);
    }
  }
  for (; !a.done;) {
    var l = [];
    try {
      let t = await a.value,
        o = gf(n, r);
      (o && (await o), Ke(l, hf(i)), (a = e.next(t)));
    } catch (e) {
      var u = e,
        d = !0;
    } finally {
      De(l, u, d);
    }
  }
  return a.value;
}
function yf(e, t = mC.priority, n = mC.canYield) {
  var r = [];
  try {
    Ke(r, hf({ priority: t, canYield: n }));
    let i = e.next();
    return i.done ? i.value : vf(e, i, t, n);
  } catch (e) {
    var i = e,
      a = !0;
  } finally {
    De(r, i, a);
  }
}
function* H(e, t = mC.priority) {
  let n = {},
    r = Object.keys(e),
    i = [];
  for (let a of r) {
    let r = e[a];
    if (nt(r)) {
      let e = r.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            vf(r, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = r;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function* bf(e, t = mC.priority) {
  let n = [],
    r = e.keys(),
    i = [];
  for (let a of r) {
    let r = gf(t);
    r && (yield r);
    let o = e[a];
    if (nt(o)) {
      let e = o.next();
      e.done
        ? (n[a] = e.value)
        : i.push(
            vf(o, e, t).then((e) => {
              n[a] = e;
            })
          );
    } else n[a] = o;
  }
  return (i.length > 0 && (yield Promise.all(i)), n);
}
function xf(e) {
  return wf(e) || Df(e);
}
function Sf(e) {
  return Xe(e) && e.every(L);
}
function Cf(e) {
  return L(e) && Je(e.read) && Je(e.preload);
}
function wf(e) {
  return Sf(e) || Cf(e);
}
function Tf(e) {
  return L(e) && L(e.schema);
}
function Ef(e) {
  return L(e) && L(e.collectionByLocaleId);
}
function Df(e) {
  return Tf(e) || Ef(e);
}
function Of(e, t, n) {
  let r = e.value.length,
    i = t.value.length;
  if (r < i) return -1;
  if (r > i) return 1;
  for (let i = 0; i < r; i++) {
    let r = e.value[i],
      a = t.value[i],
      o = rp(r, a, n);
    if (o !== 0) return o;
  }
  return 0;
}
function kf(e, t) {
  switch (e?.type) {
    case `array`:
      return { type: `array`, value: e.value.map((e) => X.cast(e, t.definition)) };
  }
  return null;
}
function Af(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function jf(e) {
  switch (e?.type) {
    case `boolean`:
      return e;
    case `number`:
    case `string`:
      return { type: `boolean`, value: !!e.value };
  }
  return null;
}
function Mf(e) {
  return jf(e)?.value ?? !1;
}
function Nf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Pf(e) {
  switch (e?.type) {
    case `color`:
      return e;
  }
  return null;
}
function Ff(e, t) {
  let n = new Date(e.value),
    r = new Date(t.value);
  return n < r ? -1 : +(n > r);
}
function If(e) {
  switch (e?.type) {
    case `date`:
      return e;
    case `number`:
    case `string`: {
      let t = new Date(e.value);
      return tt(t) ? { type: `date`, value: t.toISOString() } : null;
    }
  }
  return null;
}
function Lf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Rf(e) {
  switch (e?.type) {
    case `enum`:
      return e;
    case `string`:
      return { type: `enum`, value: e.value };
  }
  return null;
}
function zf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Bf(e) {
  switch (e?.type) {
    case `file`:
      return e;
  }
  return null;
}
function Vf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Hf(e) {
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
function Uf(e, t) {
  return e.value < t.value ? -1 : +(e.value > t.value);
}
function Wf(e) {
  switch (e?.type) {
    case `number`:
    case `string`: {
      let t = Number(e.value);
      return Number.isFinite(t) ? { type: `number`, value: t } : null;
    }
  }
  return null;
}
function Gf(e) {
  return Wf(e)?.value ?? null;
}
function Kf(e, t, n) {
  let r = Object.keys(e.value).sort(),
    i = Object.keys(t.value).sort();
  if (r.length < i.length) return -1;
  if (r.length > i.length) return 1;
  for (let a = 0; a < r.length; a++) {
    let o = r[a],
      s = i[a];
    if (o < s) return -1;
    if (o > s) return 1;
    let c = rp(e.value[o] ?? null, t.value[s] ?? null, n);
    if (c !== 0) return c;
  }
  return 0;
}
function qf(e, t) {
  switch (e?.type) {
    case `object`: {
      let n = {},
        r = Object.entries(t.definitions);
      for (let [t, i] of r) {
        let r = e.value[t] ?? null;
        n[t] = X.cast(r, i);
      }
      return { type: `object`, value: n };
    }
  }
  return null;
}
function Jf(e, t) {
  let n = JSON.stringify(e.value),
    r = JSON.stringify(t.value);
  return n < r ? -1 : +(n > r);
}
function Yf(e) {
  switch (e?.type) {
    case `responsiveimage`:
      return e;
  }
  return null;
}
function Xf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function Zf(e) {
  switch (e?.type) {
    case `richtext`:
      return e;
  }
  return null;
}
function Qf(e, t) {
  let n = e.value,
    r = t.value;
  return n < r ? -1 : +(n > r);
}
function $f(e) {
  switch (e?.type) {
    case `vectorsetitem`:
      return e;
  }
  return null;
}
function ep(e, t, n) {
  let r = e.value,
    i = t.value;
  return (
    n.type === 0 && ((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
    r < i ? -1 : +(r > i)
  );
}
function tp(e) {
  switch (e?.type) {
    case `string`:
      return e;
    case `number`:
      return { type: `string`, value: String(e.value) };
  }
  return null;
}
function np(e) {
  return tp(e)?.value ?? null;
}
function rp(e, t, n) {
  if ($e(e) || $e(t)) return (R(e === t), 0);
  switch (e.type) {
    case `array`:
      return (R(e.type === t.type), Of(e, t, n));
    case `boolean`:
      return (R(e.type === t.type), Af(e, t));
    case `color`:
      return (R(e.type === t.type), Nf(e, t));
    case `date`:
      return (R(e.type === t.type), Ff(e, t));
    case `enum`:
      return (R(e.type === t.type), Lf(e, t));
    case `file`:
      return (R(e.type === t.type), zf(e, t));
    case `link`:
      return (R(e.type === t.type), Vf(e, t));
    case `number`:
      return (R(e.type === t.type), Uf(e, t));
    case `object`:
      return (R(e.type === t.type), Kf(e, t, n));
    case `responsiveimage`:
      return (R(e.type === t.type), Jf(e, t));
    case `richtext`:
      return (R(e.type === t.type), Xf(e, t));
    case `vectorsetitem`:
      return (R(e.type === t.type), Qf(e, t));
    case `string`:
      return (R(e.type === t.type), ep(e, t, n));
    default:
      z(e);
  }
}
async function ip(e, t) {
  return Cf(e) ? (await e.preload(t), e.read(t)) : e;
}
function ap(e) {
  if (!Df(e) || !e.id) return;
  let t = _C.get(e.id);
  if (!t) return (_C.set(e.id, new WeakRef(e)), e.id);
  if (t.deref() === e) return e.id;
}
function op(e) {
  let t = ap(e);
  if (t) return t;
  let n = vC.get(e);
  if (n) return n;
  let r = `${yC}${Math.random().toString(16).slice(2)}`;
  return (vC.set(e, r), r);
}
function sp(e, t) {
  if (wf(e)) {
    let n = op(e) + (t?.id ?? Uh),
      r = bC.get(n);
    if (r) return r;
    let i = new gC(e, t);
    return (bC.set(n, i), i);
  }
  if (Tf(e)) return e;
  if (Ef(e)) {
    for (; t;) {
      let n = e.collectionByLocaleId[t.id];
      if (n) return n;
      t = t.fallback;
    }
    return e.collectionByLocaleId.default;
  }
  z(e, `Unsupported collection type`);
}
function cp(e) {
  return e;
}
function lp(e) {
  return Je(e.getHash);
}
function U(e, ...t) {
  let n = `${e}(`;
  for (let e = 0; e < t.length; e++) {
    e > 0 && (n += `, `);
    let r = t[e];
    if (L(r) && lp(r)) {
      n += r.getHash();
      continue;
    }
    n += JSON.stringify(r) ?? ``;
  }
  return cp(`${n})`);
}
function up(e) {
  if (e === void 0) return;
  if (typeof e != `function`) return e;
  let t = e();
  return () => e() ?? t;
}
function dp(e, t) {
  return { collectionId: op(e), pointer: t };
}
function fp(e) {
  return L(e) && F(e.collectionId);
}
function pp(e, t) {
  return { collectionId: op(e), pointer: t };
}
function mp(e) {
  return L(e) && F(e.collectionId);
}
function hp(e, t) {
  let n = new Map();
  function r(e) {
    if (L(e))
      if (e.type === `Collection` && xf(e.data)) {
        let r = sp(e.data, t),
          i = op(r);
        n.set(i, r);
      } else
        for (let t in e) {
          let n = e[t];
          r(n);
        }
    else if (Xe(e)) for (let t of e) r(t);
  }
  return (r(e), n);
}
function gp(e) {
  return e;
}
function _p(e) {
  return e;
}
function vp(e) {
  return e;
}
function yp() {
  return 25;
}
function bp() {
  return 12500;
}
function xp(e) {
  return Array(e).fill({ type: `All` });
}
function Sp(e) {
  return e;
}
function Cp(e, t) {
  if (e) return;
  if (typeof t == `function`)
    try {
      t = t();
    } catch {
      t = `(assert message threw)`;
    }
  typeof t == `string` && t.length > 2048 && (t = t.slice(0, 2048) + `…`);
  let n = new Ew(t ? `Assertion Error: ` + t : `Assertion Error`);
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
function wp(e) {
  let t = new Set();
  if (!e) return t;
  Cp(e.type === `array`, () => `ScalarIntersection expects an array, got: ${e.type}`);
  for (let n of e.value)
    n &&
      (Cp(
        n.type === `string`,
        () => `ScalarIntersection expects an array of strings, got an array with: ${n.type}`
      ),
      t.add(n.value));
  return t;
}
function Tp(e, t) {
  switch (e?.type) {
    case `array`:
      for (let n of e.value) Tp(n, t);
      return;
    case `object`:
      for (let n in e.value) Tp(e.value[n], t);
      return;
    case `richtext`:
      t.preloadRichTextValue(e);
      return;
    case `vectorsetitem`:
      t.preloadVectorSetItemValue(e);
      return;
  }
}
function Ep(e) {
  return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function Dp(e) {
  return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function Op(e) {
  return `${e.functionName}(${e.arguments.map((e) => Np(e)).join(`, `)})`;
}
function kp(e) {
  let t = `CASE`;
  e.value && (t += ` ${Np(e.value)}`);
  for (let n of e.conditions) t += ` WHEN ${Np(n.when)} THEN ${Np(n.then)}`;
  return (e.else && (t += ` ELSE ${Np(e.else)}`), (t += ` END`), t);
}
function Ap(e) {
  let t = Np(e.value);
  return `${e.operator.toUpperCase()} ${t}`;
}
function jp(e) {
  let t = Np(e.left),
    n = Np(e.right);
  return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function Mp(e) {
  return `CAST(${Np(e.value)} as ${e.dataType})`;
}
function Np(e) {
  switch (e.type) {
    case `Identifier`:
      return Ep(e);
    case `LiteralValue`:
      return Dp(e);
    case `FunctionCall`:
      return Op(e);
    case `Case`:
      return kp(e);
    case `UnaryOperation`:
      return Ap(e);
    case `BinaryOperation`:
      return jp(e);
    case `TypeCast`:
      return Mp(e);
    case `Select`:
      return `${Rp(e)}`;
    default:
      z(e);
  }
}
function Pp(e) {
  return Tf(e.data)
    ? `Collection`
    : e.alias
      ? `"${e.data.displayName}" AS "${e.alias}"`
      : `"${e.data.displayName}"`;
}
function Fp(e) {
  let t = `${Ip(e.left)} LEFT JOIN ${Ip(e.right)}`;
  return (e.constraint && (t += ` ON ${Np(e.constraint)}`), t);
}
function Ip(e) {
  switch (e.type) {
    case `Collection`:
      return Pp(e);
    case `LeftJoin`:
      return Fp(e);
    default:
      z(e);
  }
}
function Lp(e) {
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
function Rp(e) {
  let t = ``;
  return (
    (t += `SELECT ${e.select
      .map((e) => {
        let t = Np(e);
        return e.alias ? `${t} AS "${e.alias}"` : t;
      })
      .join(`, `)}`),
    (t += ` FROM ${Ip(e.from)}`),
    e.where && (t += ` WHERE ${Np(e.where)}`),
    e.orderBy &&
      (t += ` ORDER BY ${e.orderBy.map((e) => `${Np(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
    e.limit && (t += ` LIMIT ${Np(e.limit)}`),
    e.offset && (t += ` OFFSET ${Np(e.offset)}`),
    Lp(t)
  );
}
function zp(e, t) {
  let n = Object.entries(e ?? {})
    .filter(([, e]) => !(Qe(e) || L(e)))
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
function Bp(e) {
  let t = _(e);
  return (
    c(() => {
      t.current = e;
    }, [e]),
    Gr((...e) => {
      let n = t.current;
      return n(...e);
    }, [])
  );
}
function Vp(e, t, n) {
  return A.useCallback(
    (r) => (!n || !e ? {} : t ? Object.assign({}, n[e]?.[r], n[t]?.[r]) : n[e]?.[r] || {}),
    [e, t, n]
  );
}
function Hp(e) {
  for (let [t, n] of Object.entries(e)) if (W.matchMedia(n).matches) return t;
}
function Up(e) {
  let t = [];
  for (let { hash: n, mediaQuery: r } of e) r && W.matchMedia(r).matches && t.push(n);
  if (t.length > 0) return t;
  let n = e[0]?.hash;
  if (n) return [n];
}
function Wp(e, n, r = !0) {
  let i = t(Nb),
    a = Pa(),
    o = Ea(),
    s = Tn() && (!a || o),
    c = _(s ? (Hp(n) ?? e) : e),
    d = _(r && i ? e : c.current),
    f = Jo(),
    p = ye(),
    m = u(
      (e) => {
        if (e !== c.current || e !== d.current) {
          let t = function () {
            ((c.current = d.current = e),
              l(() => {
                f();
              }));
          };
          a
            ? t()
            : p(() => {
                t();
              });
        }
      },
      [p, f, a]
    );
  return (
    p_(() => {
      if (a) {
        if (o) {
          m(Hp(n) ?? e);
          return;
        }
        m(e);
      }
    }, [e, o, a, n, m]),
    p_(() => {
      !r || i !== !0 || m(c.current);
    }, []),
    j(() => {
      if (!s || o) return;
      let e = [];
      for (let [t, r] of Object.entries(n)) {
        let n = W.matchMedia(r),
          i = (e) => {
            e.matches && m(t);
          };
        (Gp(n, i), e.push([n, i]));
      }
      return () => e.forEach(([e, t]) => Kp(e, t));
    }, [o, n, m, s]),
    [c.current, d.current]
  );
}
function Gp(e, t) {
  e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Kp(e, t) {
  e.removeEventListener ? e.removeEventListener(`change`, t) : e.removeListener(t);
}
function qp(e) {
  setTimeout(e, 1);
}
function Jp(e) {
  let t = new Set(),
    n = Up(e);
  if (n)
    for (let e of n)
      for (let n of document.querySelectorAll(`.hidden-` + e))
        (Yp(n.previousSibling) && t.add(n.previousSibling), n.parentNode?.removeChild(n));
  (Dh ? W.requestIdleCallback : qp)(() => {
    document.querySelector(Vw)?.remove();
  });
  for (let e of document.querySelectorAll(`.ssr-variant:empty`))
    (Yp(e.previousSibling) && t.add(e.previousSibling), e.parentNode?.removeChild(e));
  for (let e of t)
    Xp(e.nextSibling) && (e.parentNode?.removeChild(e.nextSibling), e.parentNode?.removeChild(e));
}
function Yp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Xp(e) {
  return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Zp(e) {
  return L(e) && Hw in e && e.page !== void 0;
}
function Qp(e, t) {
  return `${e}-${t}`;
}
function $p(e, t) {
  let n = e.indexOf(t) + 1;
  n >= e.length && (n = 0);
  let r = e[n];
  return (R(r !== void 0, `nextVariant should be defined`), r);
}
function em(e, t) {
  if (e) {
    if (t) {
      let n = e[t];
      if (n) return n;
    }
    return e.default;
  }
}
function tm(e, t, n, r, i) {
  let { hover: a, pressed: o, loading: s, error: c } = e || {};
  if (c && i) return `error`;
  if (s && r) return `loading`;
  if (o && n) return `pressed`;
  if (a && t) return `hover`;
}
function nm(e, t) {
  return t[e] || `framer-v-${e}`;
}
function rm(e, t, n) {
  return e && n.has(e) ? e : t;
}
function im() {
  let e = _(),
    t = _(),
    n = u(() => {
      e.current &&
        (document.removeEventListener(`visibilitychange`, e.current),
        (e.current = void 0),
        (t.current = void 0));
    }, []);
  return (
    j(
      () => () => {
        n();
      },
      [n]
    ),
    u(
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
function am() {
  let e = _(),
    n = _(!1),
    r = _(),
    i = t(gb);
  return (
    j(
      () => () => {
        (e.current?.(), (r.current = void 0), (e.current = void 0));
      },
      []
    ),
    u(
      (t, a) => {
        if (!a?.current || n.current) {
          t();
          return;
        }
        if (((r.current = t), e.current)) return;
        let o = !1;
        e.current = Ms(i, `undefined`, a.current, null, (e) => {
          ((n.current = e.isIntersecting),
            !o &&
              ((o = !0),
              queueMicrotask(() => {
                ((o = !1), n.current && r.current?.());
              })));
        });
      },
      [i]
    )
  );
}
function om(e) {
  let t = im(),
    n = am();
  return u(
    (r, i = !1) => {
      if (Eh) {
        r();
        return;
      }
      t(i && e ? () => n(r, e) : r);
    },
    [t, n, e]
  );
}
async function sm() {
  return new Promise((e) => {
    let t = e;
    (setTimeout(() => {
      t && (performance.mark(`wait-for-click-fallback`), t());
    }, 150),
      (Gw = () => {
        (e(), (t = void 0));
      }));
  });
}
function cm(e) {
  e.button === 0 && (performance.mark(`pointerdown-listener`), (Ww = sm()));
}
function lm() {
  (performance.mark(`click-received-listener`), (Ww = void 0), Gw?.(), (Gw = void 0));
}
function um(e = !1) {
  j(() => {
    e &&
      (document.addEventListener(`pointerup`, cm, !0),
      document.__proto__.addEventListener.call(document, `click`, lm, !0));
  }, [e]);
}
function dm({
  variant: e,
  defaultVariant: t,
  transitions: n,
  enabledGestures: r,
  cycleOrder: i = [],
  variantProps: a = {},
  variantClassNames: o = {},
  ref: s,
}) {
  let c = Jo(),
    d = nu(),
    f = Aa(() => new Set(i));
  um(Rx().yieldOnTap);
  let p = om(s),
    m = _({
      isHovered: !1,
      isHoveredHasUpdated: !1,
      isPressed: !1,
      isPressedHasUpdated: !1,
      isError: !1,
      hasPressedVariants: !0,
      baseVariant: rm(e, t, f),
      lastVariant: e,
      gestureVariant: void 0,
      loadedBaseVariant: {},
      defaultVariant: t,
      enabledGestures: r,
      cycleOrder: i,
      transitions: n,
    }),
    h = u((e) => {
      let {
          isHovered: t,
          isPressed: n,
          isError: r,
          enabledGestures: i,
          defaultVariant: a,
        } = m.current,
        o = rm(e, a, f),
        s = tm(i?.[o], t, n, !1, r);
      return [o, s ? Qp(o, s) : void 0];
    }, []),
    g = u(
      async (e, t, n, r, i = !1, a = !1) => {
        let [o, s] = h(r);
        if (o === e && s === t) return;
        (a && (m.current.isError = !1),
          (m.current.baseVariant = o || n),
          (m.current.gestureVariant = s));
        let u = Rx().yieldOnTap && m.current.isPressedHasUpdated;
        (u &&
          Ww &&
          (performance.mark(`wait-for-tap-start`),
          await Ww,
          performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
          u &&
            (performance.mark(`yield-on-tap-start`),
            await Vg({ priority: `user-blocking`, continueAfter: `paint` }),
            performance.measure(`yield-on-tap`, `yield-on-tap-start`)));
        let {
          isHovered: d,
          isPressed: f,
          isHoveredHasUpdated: g,
          isPressedHasUpdated: _,
        } = m.current;
        if (d || g || f || _) {
          l(c);
          return;
        }
        p(() => l(c), i);
      },
      [h, c, p]
    ),
    v = u(
      ({ isHovered: e, isPressed: t, isError: n }) => {
        e && !d && Rx().disableHoverOnMobile && !Wl() && (e = !1);
        let r = t !== m.current.isPressed,
          i = e !== m.current.isHovered;
        (e !== void 0 && (m.current.isHovered = e),
          t !== void 0 && (m.current.isPressed = t),
          n !== void 0 && (m.current.isError = n));
        let { baseVariant: a, gestureVariant: o, defaultVariant: s } = m.current;
        ((m.current.isPressedHasUpdated = r),
          (m.current.isHoveredHasUpdated = i),
          g(a, o, s, a, !1));
      },
      [g, d]
    ),
    y = u(
      (e, t = !1) => {
        let { defaultVariant: n, cycleOrder: r, baseVariant: i, gestureVariant: a } = m.current,
          o = e === Uw ? $p(r || [], i || n) : e;
        g(i, a, n, o, t, !0);
      },
      [g]
    ),
    b = u(() => {
      let { baseVariant: e } = m.current;
      ((m.current.loadedBaseVariant[e] = !0), p(() => l(c), !0));
    }, [c, p]);
  if (e !== m.current.lastVariant) {
    let [t, n] = h(e);
    ((m.current.lastVariant = t),
      (t !== m.current.baseVariant || n !== m.current.gestureVariant) &&
        ((m.current.baseVariant = t), (m.current.gestureVariant = n)));
  }
  let {
      baseVariant: x,
      gestureVariant: S,
      defaultVariant: w,
      enabledGestures: T,
      isHovered: E,
      isPressed: D,
      isError: ee,
      loadedBaseVariant: O,
    } = m.current,
    te = Vp(m.current.baseVariant, m.current.gestureVariant, a);
  return C(() => {
    let e = [];
    x !== w && e.push(x);
    let t = T?.[x]?.loading,
      n = !ee && !d && !!t && !O[x],
      r = n ? Qp(x, `loading`) : S;
    r && e.push(r);
    let i = T?.[x],
      a = { onMouseEnter: () => v({ isHovered: !0 }), onMouseLeave: () => v({ isHovered: !1 }) };
    return (
      i?.pressed &&
        Object.assign(a, {
          onTapStart: () => v({ isPressed: !0 }),
          onTapCancel: () => v({ isPressed: !1 }),
          onTap: () => v({ isPressed: !1 }),
        }),
      {
        variants: e,
        baseVariant: x,
        gestureVariant: r,
        isLoading: n,
        transition: em(m.current.transitions, x),
        setVariant: y,
        setGestureState: v,
        clearLoadingGesture: b,
        addVariantProps: te,
        gestureHandlers: a,
        classNames: Ic(nm(x, o), tm(i, E, D, n, ee)),
      }
    );
  }, [x, S, E, D, O, te, y, w, T, v, b, o]);
}
function fm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
  if (!kl()) return r(e);
  let a = pm(e, r),
    o = !1;
  function s(r, s) {
    let c = Ml(),
      { disableCustomCode: l } = Rx();
    if (l) return E(e, { ...r, ref: s });
    if (Bl(t, c?.scopeId, c?.level, i ?? !1))
      return a.status === `success`
        ? E(d_.Provider, {
            value: n,
            children: E(Al, {
              getErrorMessage: Ll.bind(null, t, n),
              fallback: E(e, { ...r, ref: s }),
              children: E(a.Component, { ...r, ref: s }),
            }),
          })
        : ((o ||= (Ol(a.error), Ol(Ll(t, n)), Dl(a.error), !0)), E(e, { ...r, ref: s }));
    if (a.status === `success`)
      return E(d_.Provider, { value: n, children: E(a.Component, { ...r, ref: s }) });
    throw a.error;
  }
  return A.forwardRef(s);
}
function pm(e, t) {
  try {
    return { status: `success`, Component: t(e) };
  } catch (e) {
    return { status: `error`, error: e };
  }
}
function mm(e, t) {
  j(() => {
    function n(n) {
      n.key === `Escape` && e && (n.preventDefault(), n.stopPropagation(), t());
    }
    return (f.addEventListener(`keyup`, n), () => f.removeEventListener(`keyup`, n));
  }, [e, t]);
}
function hm(e, t, n, r) {
  let i = f.innerHeight - r,
    a = Math.min(f.innerWidth - n, t),
    o = i / e;
  return Math.min(a, o);
}
function gm(e, { width: t, height: n }) {
  if (!e.src || !e.srcSet) return;
  let r = new f.Image();
  return (
    (r.src = e.src),
    (r.srcset = e.srcSet),
    (r.sizes = e.sizes || ``),
    (r.width = t),
    (r.height = n),
    r.decode()
  );
}
function _m() {
  return document.getElementById(_S) ?? document.getElementById(gS) ?? document.body;
}
function vm(e, t) {
  return I(e) ? e : (t ?? 0);
}
function ym(e) {
  return vm(e?.paddingTop, e?.padding) + vm(e?.paddingBottom, e?.padding);
}
function bm(e) {
  return vm(e?.paddingLeft, e?.padding) + vm(e?.paddingRight, e?.padding);
}
function xm(e, t) {
  if (!e || !t?.src) return t;
  let n = new URL(t.src);
  return (
    n.searchParams.delete(`scale-down-to`),
    n.searchParams.delete(`lossless`),
    {
      ...t,
      sizes: `min(100vw, ${e.maxWidth - bm(e)}px)`,
      srcSet: Ba(t.nodeFixedSize, t, t.src).srcSet,
    }
  );
}
function Sm(e) {
  if (!e) return !1;
  for (let t in e) {
    if (!(t in qw)) continue;
    let n = qw[t],
      r = e[t];
    if (!(!I(n) || !I(r)) && n !== r) return !0;
  }
  return !1;
}
function Cm(e) {
  let t = ge.get(e.current);
  if (!t) return !1;
  if (Sm(t.projection?.latestValues)) return !0;
  let n = t.projection?.path;
  if (!n || n.length === 0) return !1;
  for (let e of n) if (Sm(e.latestValues)) return !0;
  return !1;
}
function wm(e) {
  return D(function ({ lightbox: r, lightboxClassName: i, onClick: a, ...o }, s) {
    let c = t(we),
      f = t(Kw),
      p = !!f,
      m = _(null),
      g = s ?? m,
      y = _(),
      b = C(() => xm(r, o.background), [r, o.background]),
      [x, T] = h(!1),
      [D, ee] = h(),
      O = u(() => {
        if (r) {
          if (x) {
            l(() => {
              T(!0);
            });
            return;
          }
          We.read(() => {
            if (!g.current) return;
            let e = getComputedStyle(g.current),
              t =
                g.current.getAttribute(`data-border`) === `true`
                  ? getComputedStyle(g.current, `::after`)
                  : void 0,
              n = g.current.offsetWidth ?? 1,
              i = g.current.offsetHeight ?? 1,
              a = Cm(g) || p ? { duration: 0 } : r.transition;
            l(() => {
              (ee({
                borderRadius: e.borderRadius,
                aspectRatio: n / (i || 1),
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
      }, [r, x, g, f?.stop, p]),
      te = D?.aspectRatio ?? 1,
      k = Bp(() => {
        if (!r || !b?.src) return;
        let e = y.current?.[b.src];
        if (e) return e;
        let t = hm(te, r.maxWidth, bm(r), ym(r)),
          n = gm(b, { width: t, height: t * te });
        return ((y.current = { [b.src]: n }), n);
      }),
      A = u(
        async (e) => {
          (a?.(e), !(x || !r || !b) && (await k(), O()));
        },
        [a, O, x, b, r, k]
      ),
      re = u((e) => {
        (e?.stopPropagation(),
          l(() => {
            T(!1);
          }));
      }, []);
    (mm(x, re),
      j(() => {
        if (!r) return;
        let e;
        function t() {
          e = setTimeout(() => {
            k();
          }, 50);
        }
        function n() {
          clearTimeout(e);
        }
        let i = g.current;
        return (
          i?.addEventListener(`mouseenter`, t),
          i?.addEventListener(`mouseleave`, n),
          i?.addEventListener(`pointerdown`, k),
          () => {
            (n(),
              i?.removeEventListener(`mouseenter`, t),
              i?.removeEventListener(`mouseleave`, n),
              i?.removeEventListener(`pointerdown`, k));
          }
        );
      }, [k, g, r]));
    let M = n(),
      ie = D?.transition ?? o.transition ?? c.transition,
      ae = D?.borderRadius,
      oe = D?.imageRendering,
      se = D?.filter,
      ce = D?.borderTop,
      le = D?.borderRight,
      ue = D?.borderBottom,
      de = D?.borderLeft,
      fe = D?.borderStyle,
      pe = D?.borderColor,
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
      ge = { [aS]: o.id },
      _e = vm(r?.paddingTop, r?.padding),
      ve = vm(r?.paddingBottom, r?.padding),
      N = vm(r?.paddingLeft, r?.padding),
      ye = vm(r?.paddingRight, r?.padding),
      be = D?.borderRadius ? { ...o.style, borderRadius: D.borderRadius } : o.style,
      xe = x ? (o.layoutDependency ? `${o.layoutDependency}-open` : `open`) : o.layoutDependency,
      Se = p && x ? void 0 : (o.layoutId ?? (r ? M : void 0));
    return w(v, {
      children: [
        E(e, {
          ...o,
          style: be,
          onClick: A,
          layoutId: Se,
          ref: g,
          layoutDependency: xe,
          transition: ie,
        }),
        E(Ie, {
          onExitComplete: () => {
            l(() => {
              (ee(void 0), f?.start());
            });
          },
          children:
            x &&
            r &&
            b &&
            E(
              d,
              {
                children: S(
                  w(v, {
                    children: [
                      E(ne.div, {
                        ...ge,
                        className: i,
                        onClick: re,
                        style: {
                          position: `fixed`,
                          inset: 0,
                          zIndex: r.zIndex,
                          backgroundColor: r.backdrop ?? `transparent`,
                        },
                        transition: ie,
                        initial: Jw,
                        animate: Yw,
                        exit: Jw,
                      }),
                      E(ne.div, {
                        ...ge,
                        className: i,
                        style: {
                          alignItems: `center`,
                          display: `flex`,
                          inset: `${_e}px ${ye}px ${ve}px ${N}px`,
                          justifyContent: `center`,
                          pointerEvents: `none`,
                          position: `fixed`,
                          zIndex: r.zIndex,
                        },
                        children: E(`div`, {
                          style: {
                            alignItems: `center`,
                            aspectRatio: te,
                            display: `flex`,
                            justifyContent: `center`,
                            maxHeight: `100%`,
                            position: `relative`,
                            width: `100%`,
                            maxWidth: r.maxWidth,
                          },
                          children: E(ne.div, {
                            layoutId: Se,
                            transition: ie,
                            onClick: O,
                            className: `framer-lightbox-container`,
                            "data-border": me,
                            style: {
                              aspectRatio: te,
                              borderRadius: ae,
                              bottom: 0,
                              position: `absolute`,
                              top: 0,
                              userSelect: `none`,
                              imageRendering: oe,
                              filter: se,
                              ...he,
                            },
                            children: E(Ya, { image: b, alt: b.alt, draggable: o.draggable }),
                          }),
                        }),
                      }),
                    ],
                  }),
                  _m()
                ),
              },
              `backdrop`
            ),
        }),
      ],
    });
  });
}
function Tm(e, t) {
  return Qw && !t
    ? Document.parseHTMLUnsafe(e)
    : ((Zw ??= new DOMParser()), Zw.parseFromString(e, t ?? `text/html`));
}
function Em(e) {
  return e
    .replaceAll(`&`, `&amp;`)
    .replaceAll(`<`, `&lt;`)
    .replaceAll(`>`, `&gt;`)
    .replaceAll(`"`, `&quot;`)
    .replaceAll(`'`, `&#39;`);
}
function Dm(e, t, n, r) {
  return e.replace($w, (e, i, a, o, s, c, l) => {
    if (a.toLowerCase() !== `a`) return e;
    let u = s || c,
      d = su(u.replace(/&amp;/gu, `&`));
    if (!d?.target) return e;
    let f = t(d.target);
    if (!Zp(f) || !Zp(n)) return e;
    let p = f.path,
      m = n.path;
    if (!p || !m) return e;
    let h = ` data-framer-page-link-target="${d.target}"`,
      g = Nt(f, d.element ?? void 0);
    g && (h += ` data-framer-page-link-element="${d.element}"`);
    let _ = lu(u);
    if (!_ || F(_)) return e;
    Tu(n, _, r) && (h += ` data-framer-page-link-current`);
    let v = p,
      y = Object.assign({}, r, d.collectionItem?.pathVariables);
    if (
      (Object.keys(y).length > 0 && (v = v.replace(bS, (e, t) => `` + y[t])),
      d.collectionItem?.pathVariables)
    ) {
      let e = new URLSearchParams(d.collectionItem.pathVariables);
      h += ` data-framer-page-link-path-variables="${e}"`;
    }
    return ((v = Zr(m, v)), i + o + `"${Em(v + (g ? `#${g}` : ``))}"` + h + l);
  });
}
function Om(e, t) {
  return e.length === t.length && e.every((e, n) => e === t[n]);
}
function km(e) {
  switch (e) {
    case `top`:
      return `flex-start`;
    case `center`:
      return `center`;
    case `bottom`:
      return `flex-end`;
  }
}
function Am(e, t, n) {
  let r = _([]);
  Om(r.current, e) ||
    ((r.current = e),
    q.fontStore.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
      !t || !n.current || K.current() !== K.canvas || (e > 0 && es(n.current));
    }));
}
function jm() {
  return { current: null };
}
async function Mm(e, t) {
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
function Nm(e) {
  return e in rT;
}
function Pm(e, t) {
  let n = {};
  for (let r in e) {
    if (!Nm(r)) continue;
    let i = e[r],
      a = rT[r];
    Qe(i) || Qe(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
  }
  return n;
}
function Fm(e, t = `character`, n, r, i) {
  if (r) {
    let t = jm();
    return (n.add(t), E(`span`, { ref: t, style: i, children: e }));
  }
  switch (t) {
    case `character`:
    case `line`: {
      let t = e.split(` `),
        r = t.length - 1;
      return t.map((e, t) => {
        let a = t === r;
        return w(
          d,
          {
            children: [
              E(`span`, {
                style: { whiteSpace: e.length <= 12 ? `nowrap` : `unset` },
                children: e.match(iT)?.map((e, t) => {
                  let r = jm();
                  return (n.add(r), E(`span`, { ref: r, style: i, children: e }, e + t));
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
          o = jm();
        return (
          n.add(o),
          w(
            d,
            { children: [E(`span`, { ref: o, style: i, children: e }), a ? null : ` `] },
            e + t + a
          )
        );
      });
    }
    default:
      return e;
  }
}
function Im(e) {
  let t = e.type;
  switch (t) {
    case `appear`:
      return e.tokenization ?? `character`;
    default:
      z(t);
  }
}
function Lm(e) {
  let t = [];
  return (
    I(e.x) && t.push(`translateX(${e.x}px)`),
    I(e.y) && t.push(`translateY(${e.y}px)`),
    I(e.scale) && t.push(`scale(${e.scale})`),
    I(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
    I(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
    I(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
    I(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
    I(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
    t.join(` `)
  );
}
function Rm(e, t, n, r) {
  if (!n?.effect) return;
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
                transform: r ? void 0 : Lm(n.effect),
              };
        default:
          return !e || !t
            ? { display: `inline-block` }
            : {
                display: `inline-block`,
                opacity: n.effect.opacity,
                filter: r ? void 0 : n.effect.filter,
                transform: r ? void 0 : Lm(n.effect),
              };
      }
    default:
      z(i);
  }
}
function zm(e, t, n) {
  let r = Aa(() => new Set()),
    i = Na(),
    a = n || !i,
    o = ze(),
    s = _({ hasMounted: !1, hasAnimatedOnce: !1, isAnimating: !1, effect: e });
  s.current.effect = e;
  let c = e?.trigger ?? `onMount`,
    l = e?.target,
    u = e?.threshold;
  j(() => {
    if (!a || n) return;
    s.current.hasMounted = !0;
    function e() {
      let { effect: e } = s.current;
      if (
        !a ||
        !e ||
        (e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
        (e?.type === `appear` && s.current.isAnimating)
      )
        return;
      Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
      let t = e.type;
      switch (t) {
        case `appear`: {
          let { transition: t, startDelay: n, repeat: i, tokenization: a } = e,
            c = { current: void 0 };
          return (
            Vm(
              a,
              e.effect,
              r,
              t,
              n,
              i,
              o,
              () => {
                Object.assign(s.current, { isAnimating: !1 });
              },
              c
            ),
            () => c.current?.()
          );
        }
        default:
          z(t);
      }
    }
    switch (c) {
      case `onMount`:
        e();
        return;
      case `onInView`: {
        let n = t?.current;
        return n ? N(n, e, { amount: u ?? 0 }) : void 0;
      }
      case `onScrollTarget`: {
        let t = l?.ref?.current;
        return t
          ? N(t, e, {
              amount: u ?? 0,
              root: document,
              margin: l?.offset ? `${l.offset}px 0px 0px 0px` : void 0,
            })
          : void 0;
      }
      default:
        z(c);
    }
  }, [a, r, n, t, l, u, c]);
  let d = !!e,
    f = e ? Im(e) : void 0;
  return C(
    () => ({
      getTokenizer: () => {
        if ((r.clear(), !d)) return;
        let { hasMounted: e, hasAnimatedOnce: t, effect: i } = s.current,
          c = Rm(a, n || Bm(e, t, i), s.current.effect, o);
        return {
          text: (e) => Fm(e, f, r, o, c),
          props: (e) => {
            if (i?.tokenization !== `element`) return;
            let t = jm();
            return (r.add(t), { ref: t, style: { ...e, ...c } });
          },
        };
      },
      play: () => {
        let { effect: e } = s.current;
        if (!e) return;
        let t = e.type;
        switch (t) {
          case `appear`: {
            let { transition: t, startDelay: n } = e;
            Vm(f, e.effect, r, t, n, !1, o);
            break;
          }
          default:
            z(t);
        }
      },
    }),
    [a, d, r, n, f]
  );
}
function Bm(e, t, n) {
  return !(
    (e && n?.trigger === `onMount`) ||
    (t && !n?.repeat && (n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
  );
}
async function Vm(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
  let l = Pm(t, o),
    u = new AbortController();
  switch ((c && (c.current = () => u.abort()), e)) {
    case `character`:
    case `element`:
    case `word`: {
      let e = await Hm(n, u);
      if (
        e === null ||
        (Ge(e, l, { ...r, restDelta: 0.001, delay: le(r?.delay ?? 0, { startDelay: i }) }).then(
          () => s?.()
        ),
        !a || !c)
      )
        return;
      c.current = () => {
        let n = o ? { opacity: t.opacity } : t;
        Ge(e, n, { ...r, restDelta: 0.001, delay: le(r?.delay ?? 0, { startDelay: i }) });
      };
      return;
    }
    case `line`: {
      try {
        for (let e of n) await Mm(e, u);
      } catch {
        return;
      }
      let e;
      if (
        (We.read(() => {
          ((e = Um(n)),
            e.length !== 0 &&
              We.update(() => {
                let t = e.map((e, t) =>
                  Ge(e, l, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) })
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
          Ge(e, n, { ...r, restDelta: 0.001, delay: i + t * (r?.delay ?? 0) });
        });
      };
      return;
    }
    default:
      z(e);
  }
}
async function Hm(e, t) {
  if (e.size === 0) return null;
  let n = [];
  for (let r of e)
    try {
      let e = await Mm(r, t);
      e && n.push(e);
    } catch {
      return null;
    }
  return n;
}
function Um(e) {
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
function Wm(e) {
  let t = {};
  for (let n in e) (Ne(n) || Lv(n)) && (t[n] = e[n]);
  return t;
}
function Gm(e) {
  return e.type === d;
}
function Km(e) {
  return e.type === `br`;
}
function qm(e, t, n, r, i = {}, o, s = Gm(e) ? -1 : 0) {
  let c = m.toArray(e.props.children);
  Qe(n) || (c = c.slice(0, 1));
  let l = !0;
  c = c.map((e) => {
    if (((!T(e) || !Km(e)) && (l = !1), T(e))) return qm(e, t, n, r, i, o, s + 1);
    let a = Qe(n) ? e : n;
    return F(a) && o ? o.text(a) : a;
  });
  let { "data-preset-tag": u, ...d } = e.props;
  if (F(e.type) || ie(e.type)) {
    let n = qe(e.type) || e.type,
      a = u || n,
      f = F(a) ? t?.[a] : void 0;
    ((d.className = Ic(`framer-text`, d.className, f)),
      o && s === 0 && !l && Object.assign(d, o.props(d.style)));
    let p = n === `h1` || n === `h2` || n === `h3` || n === `h4` || n === `h5` || n === `h6`,
      h = t?.anchor;
    if (p && h) {
      let e = Jm(c, i);
      d.id = e;
      let t = Ic(`framer-text`, h),
        n = E(`a`, { href: `#${e}`, className: t, children: c });
      ((d.style = { ...d.style, scrollMarginTop: r }), (c = [n]));
    }
    a === `ol` &&
      (d.style = { ...d.style, [Cy]: Xm(d.start ?? 1, m.count(d.children), d.style?.[Sy] ?? ``) });
  }
  return a(e, d, ...c);
}
function Jm(e, t) {
  let n = Vr(e.map(Ym).join(``)),
    r = t[n] ?? 0;
  return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function Ym(e) {
  return F(e) || I(e)
    ? e.toString()
    : T(e)
      ? Ym(e.props.children)
      : Array.isArray(e)
        ? e.map(Ym).join(``)
        : ``;
}
function Xm(e, t, n) {
  return No(Number(e) || 1, t, n);
}
function Zm(e, t) {
  return (j(() => gT.subscribeToTemplate(e), [e]), gT.template(e, t));
}
function Qm(e) {
  try {
    let t = Tm(e).getElementsByTagName(`svg`)[0];
    if (!t) throw Error(`no svg element found`);
    return t;
  } catch {
    return;
  }
}
function $m(e, t) {
  th(e, eh(t));
}
function eh(e) {
  return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function th(e, t) {
  (nh(e, t),
    Array.from(e.children).forEach((e) => {
      th(e, t);
    }));
}
function nh(e, t) {
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
function rh(e) {
  if (!e) return;
  let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
  if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
    return Math.round(parseFloat(t[1]) * (_T[t[2]] || 1));
}
function ih(e) {
  let t = rh(e.getAttribute(`width`)),
    n = rh(e.getAttribute(`height`));
  if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
    return { width: t, height: n };
}
function ah(e) {
  return e > vT ? `lazy` : void 0;
}
function oh(e, t, n) {
  let r = lh(t);
  (!n?.supportsExplicitInterCodegen &&
    !r.some((e) => e.explicitInter === !1) &&
    r.push({ explicitInter: !1, fonts: [] }),
    Object.assign(e, { fonts: r }));
}
function sh(e) {
  return e ? (e.fonts ?? _i()) : _i();
}
function ch(e) {
  return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : lh(e);
}
function lh(e) {
  let t = { explicitInter: !1, fonts: [] },
    n = [];
  for (let r of e)
    uh(r)
      ? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(dh) })
      : t.fonts.push(dh(r));
  return (t.fonts.length > 0 && n.push(t), n);
}
function uh(e) {
  return bT in e;
}
function dh(e) {
  let t = fh(e) || ph(e) ? e : mh(e);
  return ph(t) ? t : hh(t);
}
function fh(e) {
  return `source` in e;
}
function ph(e) {
  return `cssFamilyName` in e;
}
function mh(e) {
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
function hh(e) {
  let { family: t, ...n } = e,
    r = e.variationAxes && e.source !== `custom` ? `${t} ${yT}` : t;
  return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function gh(e, t) {
  let n = `${e}-start`;
  (performance.mark(n), t());
  let r = `${e}-end`;
  (performance.mark(r), performance.measure(e, n, r));
}
function _h(e) {
  return e.loader;
}
function vh(e, t, n) {
  let r = _h(e);
  return r ? r.load(t, n) : Promise.resolve(void 0);
}
var yh,
  bh,
  xh,
  Sh,
  Ch,
  wh,
  Th,
  Eh,
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
  W,
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
  G,
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
  K,
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
  q,
  Hv,
  Uv,
  Wv,
  Gv,
  Kv,
  qv,
  Jv,
  Yv,
  Xv,
  J,
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
  Y,
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
  X,
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
  Z,
  OC,
  kC,
  AC,
  jC,
  MC,
  Q,
  NC,
  PC,
  FC,
  IC,
  LC,
  RC,
  zC,
  $,
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
  xT = e(() => {
    (o(),
      ae(),
      k(),
      ee(),
      g(),
      (yh = Oe({
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
      (bh = Oe({
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
      (xh = Oe({
        "../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(e, t) {
          t.exports = bh();
        },
      })),
      (Sh = Oe({
        "../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(e, t) {
          var n = xh(),
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
      (Ch = Oe({
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
                (n ||= f),
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
            function p(e) {
              return (
                l === null &&
                  (m(e) && /Apple/.test(f.navigator.vendor)
                    ? ((e = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
                        f.navigator.userAgent
                      )),
                      (l = !!e && 603 > parseInt(e[1], 10)))
                    : (l = !1)),
                l
              );
            }
            function m(e) {
              return (d === null && (d = !!e.document.fonts), d);
            }
            function h(e, t) {
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
                if (m(a.context) && !p(a.context)) {
                  var g = new Promise(function (e, t) {
                      function n() {
                        new Date().getTime() - d >= u
                          ? t(Error(`` + u + `ms timeout exceeded`))
                          : a.context.document.fonts
                              .load(h(a, `"` + a.family + `"`), s)
                              .then(function (t) {
                                1 <= t.length ? e() : setTimeout(n, 25);
                              }, t);
                      }
                      n();
                    }),
                    _ = new Promise(function (e, t) {
                      l = setTimeout(function () {
                        t(Error(`` + u + `ms timeout exceeded`));
                      }, u);
                    });
                  Promise.race([_, g]).then(function () {
                    (clearTimeout(l), e(a));
                  }, t);
                } else
                  n(function () {
                    function n() {
                      var t;
                      ((t = (v != -1 && y != -1) || (v != -1 && b != -1) || (y != -1 && b != -1)) &&
                        ((t = v != y && v != b && y != b) ||
                          (c === null &&
                            ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
                              f.navigator.userAgent
                            )),
                            (c =
                              !!t &&
                              (536 > parseInt(t[1], 10) ||
                                (parseInt(t[1], 10) === 536 && 11 >= parseInt(t[2], 10))))),
                          (t =
                            c &&
                            ((v == x && y == x && b == x) ||
                              (v == S && y == S && b == S) ||
                              (v == C && y == C && b == C)))),
                        (t = !t)),
                        t &&
                          (w.parentNode !== null && w.parentNode.removeChild(w),
                          clearTimeout(l),
                          e(a)));
                    }
                    function p() {
                      if (new Date().getTime() - d >= u)
                        (w.parentNode !== null && w.parentNode.removeChild(w),
                          t(Error(`` + u + `ms timeout exceeded`)));
                      else {
                        var e = a.context.document.hidden;
                        ((!0 === e || e === void 0) &&
                          ((v = m.g.offsetWidth),
                          (y = g.g.offsetWidth),
                          (b = _.g.offsetWidth),
                          n()),
                          (l = setTimeout(p, 50)));
                      }
                    }
                    var m = new r(s),
                      g = new r(s),
                      _ = new r(s),
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
                ? (t.exports = s)
                : ((f.FontFaceObserver = s),
                  (f.FontFaceObserver.prototype.load = s.prototype.load)));
          })();
        },
      })),
      (wh = () => {}),
      (Th = f !== void 0),
      (Eh =
        Th &&
        (s.webdriver || /bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(s.userAgent))),
      (Dh = Th && typeof f.requestIdleCallback == `function`),
      (Oh = Dh ? f.requestIdleCallback : setTimeout),
      (kh = () => wh),
      (Ah = () => !0),
      (jh = () => !1),
      (Mh = new Map()),
      (Nh = new Map()),
      (Ph = new Set()),
      (Fh = `:`),
      (Ih = Th ? void 0 : new Set()),
      (Lh = `preload`),
      (Rh = Object.keys),
      (zh = `equals`),
      (Bh = A.createContext({})),
      (Vh = A.createContext({})),
      (Hh = []),
      (Uh = `default`),
      (Wh = { Pending: `pending`, Fulfilled: `fulfilled`, Rejected: `rejected` }),
      (Gh = class e {
        constructor(e, t) {
          ((this.resolver = e), (this.cacheHash = t), t !== void 0 && lt(t, e));
        }
        resolver;
        cacheHash;
        static is(t) {
          return t instanceof e;
        }
        promiseState = Wh.Pending;
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
          return this.promiseState === Wh.Fulfilled
            ? Promise.resolve(this.value).then(e, t)
            : this.promiseState === Wh.Rejected
              ? Promise.reject(this.reason).then(e, t)
              : this.readAsync().then(e, t);
        }
        preload() {
          if (this.promiseState !== Wh.Pending) return;
          if (this.preloadPromise) return this.preloadPromise;
          this.cacheHash !== void 0 && Ih !== void 0 && Ih.add(this.cacheHash);
          let e = (e) => {
              ((this.promiseState = Wh.Fulfilled), (this.value = e));
            },
            t = (e) => {
              ((this.promiseState = Wh.Rejected), (this.reason = e));
            },
            n;
          try {
            n = this.cacheHash && Mh.has(this.cacheHash) ? Mh.get(this.cacheHash) : this.resolver();
          } catch (e) {
            t(e);
            return;
          }
          if (!it(n)) {
            e(n);
            return;
          }
          let r = n.then(e, t);
          return ((this.preloadPromise = r), r);
        }
        read = () => {
          if (this.promiseState === Wh.Fulfilled) return this.value;
          throw this.promiseState === Wh.Rejected
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
      (Kh = -1),
      (qh = -2),
      (Jh = -3),
      (Yh = -4),
      (Xh = -5),
      (Zh = -6),
      (Qh = -7),
      ($h = 2 ** 32 - 1),
      (eg = $h - 1),
      (tg = class extends Error {
        constructor(e, t, n, r) {
          (super(e),
            (this.name = `DevalueError`),
            (this.path = t.join(``)),
            (this.value = n),
            (this.root = r));
        }
      }),
      (ng = Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`)),
      (rg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
      (ig = typeof Uint8Array.fromBase64 == `function`),
      (ag = typeof process == `object` && process.versions?.node !== void 0),
      (og = ig ? Kt : ag ? Jt : Xt),
      (sg = ig ? qt : ag ? Yt : Zt),
      (cg = Object.freeze({ kind: `not-plain` })),
      (lg = Object.freeze({ kind: `symbol-keys` })),
      (ug = Object.freeze({
        identify: (e) => e,
        typeOf: (e) => (e === null ? `null` : typeof e),
        toPrimitive: (e) => e,
        tagOf: (e) => It(e),
        isThenable: (e) => typeof e.then == `function`,
        toPromise: (e) => Promise.resolve(e),
        unbox: (e) => e.valueOf(),
        toISOString: (e) => (isNaN(e.getDate()) ? `` : e.toISOString()),
        toStringValue: (e) => e.toString(),
        regExpInfo: (e) => ({ source: e.source, flags: e.flags }),
        valuesOf: (e) => e,
        entriesOf: (e) => e,
        viewInfo: (e) => ({
          buffer: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength,
          length: e.length,
          bufferByteLength: e.buffer.byteLength,
        }),
        toArrayBuffer: (e) => e,
        lengthOf: (e) => e.length,
        hasOwn: (e, t) => Object.hasOwn(e, t),
        indicesOf: (e) => Gt(e),
        shapeOf: (e) =>
          Ft(e)
            ? zt(e).length > 0
              ? lg
              : {
                  kind: Object.getPrototypeOf(e) === null ? `null-proto` : `plain`,
                  keys: Object.keys(e),
                }
            : cg,
        get: (e, t) => e[t],
      })),
      (dg = Object.freeze({
        fromPrimitive: (e) => e,
        fromISOString: (e) => new Date(e),
        fromStringValue: (e, t) =>
          e === `URL`
            ? new URL(t)
            : e === `URLSearchParams`
              ? new URLSearchParams(t)
              : Temporal[e.slice(9)].from(t),
        fromArrayBuffer: (e) => e,
        fromRegExpInfo: (e, t) => new RegExp(e, t),
        fromViewInfo: (e, t, n, r) => {
          let i = globalThis[e];
          return n === void 0 ? new i(t) : new i(t, n, r);
        },
        box: (e) => Object(e),
        createArray: (e) => Array(e),
        createSparseArray: (e) => {
          let t = [];
          return ((t[eg] = void 0), delete t[eg], (t.length = e), t);
        },
        createObject: () => ({}),
        createNullPrototypeObject: () => Object.create(null),
        createSet: () => new Set(),
        createMap: () => new Map(),
        set: (e, t, n) => {
          e[t] = n;
        },
        addValue: (e, t) => {
          e.add(t);
        },
        addEntry: (e, t, n) => {
          e.set(t, n);
        },
      })),
      (W = Th
        ? f
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
      (fg = 2),
      (pg = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
      (mg = { QueryCache: 0, CollectionUtilsCache: 1 }),
      (gg = class {
        payload = sn();
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
      (_g = Th ? void 0 : new gg()),
      (vg = mg.CollectionUtilsCache),
      (yg = new WeakMap()),
      (bg = O(void 0)),
      (xg = class {
        constructor(e, t) {
          ((this.collectionId = t),
            (this.module = new Gh(async () => {
              try {
                let t = await e();
                return (R(t, `Couldn't find CollectionUtils`), t);
              } catch (e) {
                console.error(st(`Failed to import collection module.`, e));
                return;
              }
            })));
        }
        collectionId;
        module;
        cacheMap = new Map();
        callUtilsMethod(e, t, n) {
          let r = dn(n),
            i = fn(e, this.collectionId, r, t);
          if (this.cacheMap.has(i)) {
            let e = this.cacheMap.get(i)?.readMaybeAsync();
            if (_g !== void 0) {
              if (it(e)) return e.then((e) => (_g.set(vg, i, e), e));
              _g.set(vg, i, e);
            }
            return e;
          }
          if (ln(vg, i)) {
            let e = un(vg, i);
            return (this.cacheMap.set(i, new Gh(() => e)), e);
          }
          let a = this.module.readMaybeAsync(),
            o = it(a),
            s;
          try {
            s = o ? a.then((r) => r?.[e]?.(t, n)) : a?.[e]?.(t, n);
          } catch (e) {
            (console.error(st(`Failed to call CollectionUtils method.`, e)), (s = void 0));
          }
          if (s === void 0) {
            (_g !== void 0 && _g.set(vg, i, s), this.cacheMap.set(i, s));
            return;
          }
          let c = new Gh(async () => {
            try {
              let e = it(s) ? await s : s;
              return (_g !== void 0 && _g.set(vg, i, e), e);
            } catch (e) {
              console.error(st(`Failed to call CollectionUtils method.`, e));
              return;
            }
          });
          return (this.cacheMap.set(i, c), c.readMaybeAsync());
        }
        getSlugByRecordId(e, t) {
          return this.callUtilsMethod(`getSlugByRecordId`, e, t);
        }
        getRecordIdBySlug(e, t) {
          return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
        }
        getContentLocaleIdByRecordId(e, t) {
          return this.callUtilsMethod(`getContentLocaleIdByRecordId`, e, t);
        }
      }),
      (Sg = /Mac/u),
      (Cg = /iPhone|iPod|iPad/iu),
      (wg = /MacIntel/iu),
      (Tg = /Edg\//u),
      (Eg = /Chrome/u),
      (Dg = /Google Inc/u),
      (Og = /Safari/u),
      (kg = /Apple Computer/u),
      (Ag = /Firefox\/\d+\.\d+$/u),
      (jg = /Version\/([\d.]+)/u),
      (Mg = /FramerX/u),
      (Ng = /tablet|iPad|Nexus 9/iu),
      (Pg = /mobi/iu),
      (Fg = 1e3 / 60),
      (Ig = 1e3 / 25),
      (Lg = 500),
      (Rg = Promise.resolve()),
      (zg = 100),
      (Bg = (e) => {
        We.read(e, !1, !0);
      }),
      (Vg = Ln(Bg)),
      (Hg = `framer_variant`),
      (Ug = RegExp(`:([a-z]\\w*)`, `gi`)),
      (Wg = async () => {}),
      (Gg = { contentLocale: null, activeLocale: null, locales: [], setLocale: Wg }),
      (Kg = (() => {
        let e = A.createContext(Gg);
        return ((e.displayName = `LocaleInfoContext`), e);
      })()),
      (qg = (() => {
        let e = A.createContext(`ltr`);
        return ((e.displayName = `LayoutDirectionContext`), e);
      })()),
      (Jg = !Eh),
      (Yg = !1),
      (Xg = A.createContext({ global: void 0, routes: {} })),
      (Zg = 10),
      (Qg = 1e4),
      ($g = (e) => `--view-transition-${e}`),
      (e_ = {
        makeKeyframe: (e, t, n) => {
          let r = 0;
          return (
            ((n === `exit` && e.angularDirection === `clockwise` && t === `start`) ||
              (n === `exit` && e.angularDirection === `counter-clockwise` && t === `end`) ||
              (n === `enter` && e.angularDirection === `counter-clockwise` && t === `start`) ||
              (n === `enter` && e.angularDirection === `clockwise` && t === `end`)) &&
              (r = (e.sweepAngle / 360) * 100),
            `${$g(`conic-offset`)}: ${r}%;`
          );
        },
        makeStyles: (e, t) => {
          let n = `var(${$g(`conic-offset`)})`,
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
        @property ${$g(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
      }),
      (t_ = {
        circle: {
          makeKeyframe: (e, t) => `${$g(`circle-progress`)}: ${t === `start` ? 0 : 1};`,
          makeStyles: (e) => {
            let t = `calc(100% * ${`var(${$g(`circle-progress`)})`})`,
              n = `radial-gradient(circle ${or(e)}px at ${e.x} ${e.y}, black ${t}, transparent ${t})`;
            return `mask-image: ${n}; -webkit-mask-image: ${n};`;
          },
          makePropertyRules: () => `
        @property ${$g(`circle-progress`)} {
            syntax: '<number>';
            initial-value: 0;
            inherits: false;
        }
    `,
        },
        conic: e_,
        inset: {
          makeKeyframe: (e, t) =>
            t === `start`
              ? `clip-path: inset(${e.y} ${ar(e.x)} ${ar(e.y)} ${e.x} round ${e.round}px);`
              : `clip-path: inset(0 round 0);`,
        },
        blinds: {
          makeKeyframe: (e, t, n) => {
            let [, r] = rr(e.width),
              i = `0${r}`;
            return (
              ((t === `start` && n === `exit`) || (t === `end` && n === `enter`)) && (i = e.width),
              `${$g(`blinds-width`)}: ${i};`
            );
          },
          makeStyles: (e, t) => {
            let n = `var(${$g(`blinds-width`)})`,
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
            @property ${$g(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
        },
        wipe: {
          makeKeyframe: (e, t, n) => {
            let r = +((t === `start` && n === `exit`) || (t === `end` && n === `enter`));
            return `${$g(`wipe-offset`)}: ${r};`;
          },
          makeStyles: (e, t) => {
            let n = `var(${$g(`wipe-offset`)})`,
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
            @property ${$g(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
        },
      }),
      (n_ = {
        opacity: 1,
        x: `0px`,
        y: `0px`,
        scale: 1,
        rotate: 0,
        rotateX: 0,
        rotateY: 0,
        mask: void 0,
      }),
      (r_ = `view-transition-styles`),
      (i_ = {
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
      (a_ = () => {}),
      (s_ = () => {
        let e = document.title;
        if (e) {
          if (document.ariaNotify) {
            document.ariaNotify(e, { priority: `high` });
            return;
          }
          (o_ ||
            ((o_ = document.createElement(`div`)),
            o_.setAttribute(`aria-live`, `assertive`),
            o_.setAttribute(`aria-atomic`, `true`),
            (o_.style.position = `absolute`),
            (o_.style.transform = `scale(0)`),
            document.body.append(o_)),
            setTimeout(() => {
              o_.textContent = e;
            }, 60));
        }
      }),
      (l_ =
        Th &&
        typeof f.navigation?.back == `function` &&
        !(() => {
          if (s === void 0) return !1;
          let e = s.userAgent,
            t = e.indexOf(`Chrome/`),
            n = +e.slice(t + 7, e.indexOf(`.`, t));
          return n > 101 && n < 128;
        })() &&
        !Cn()),
      (u_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
      (d_ = A.createContext(null)),
      (f_ = (() => {
        let e = O(`preview`);
        return ((e.displayName = `RenderTargetEnvironmentContext`), e);
      })()),
      (p_ = typeof document < `u` ? i : j),
      (m_ = new Set()),
      (h_ = (() => {
        let e = O({ urlSearchParams: new URLSearchParams(), replaceSearchParams: async () => {} });
        return ((e.displayName = `URLSearchParamsContext`), e);
      })()),
      (g_ = 46),
      (__ = 47),
      (v_ = (e, t) => e.charCodeAt(t)),
      (y_ = (e, t) => e.lastIndexOf(t)),
      (b_ = (e, t, n) => e.slice(t, n)),
      (x_ = !1),
      (S_ = `/`),
      (C_ = (e) => e === __),
      (w_ = new Set([`/404.html`, `/404`, `/404/`])),
      (T_ = `__f_replay`),
      (E_ =
        `mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
          `.`
        )),
      (D_ = (e) => {
        e.target?.closest?.(`#main`) &&
          (ai(e) ||
            (e.stopPropagation(), performance.mark(`framer-react-event-handling-prevented`)));
      }),
      (O_ = !1),
      (G_ = [ci]),
      (W_ = [ci]),
      (U_ = [ci]),
      (H_ = [ci]),
      (V_ = [ci]),
      (B_ = [ci]),
      (z_ = [ci]),
      (R_ = [ci]),
      (L_ = [ci]),
      (I_ = [ci]),
      (F_ = [ci]),
      (P_ = [ci]),
      (N_ = [ci]),
      (M_ = [ci]),
      (j_ = [ci]),
      (A_ = [ci]),
      (k_ = [ci]),
      (q_ = class {
        constructor() {
          (P(K_, 5, this),
            ke(this, `render`, {
              markStart: () => this.markRenderStart(),
              markEnd: () => this.markRenderEnd(),
            }),
            ke(this, `mutationEffects`, { measure: () => this.measureMutationEffects() }),
            ke(this, `useInsertionEffects`, {
              markStart: () => this.markUseInsertionEffectsStart(),
              markRouterStart: () => this.markUseInsertionEffectRouterStart(),
              markEnd: () => this.markUseInsertionEffectsEnd(),
            }),
            ke(this, `useLayoutEffects`, {
              markStart: () => this.markUseLayoutEffectsStart(),
              markRouterStart: () => this.markRouterUseLayoutEffectStart(),
              markEnd: () => this.markUseLayoutEffectsEnd(),
            }),
            ke(this, `useEffects`, {
              markStart: () => this.markUseEffectsStart(),
              markRouterStart: () => this.markUseEffectsRouterStart(),
              markEnd: () => this.markUseEffectsEnd(),
              markAreSynchronous: () => this.markUseEffectsAreSynchronous(),
            }),
            ke(this, `browserRendering`, {
              hasStarted: !1,
              requestAnimationFrame: {
                markStart: () => this.markRafStart(),
                markEnd: () => this.markRafEnd(),
              },
              layoutStylePaint: { markEnd: () => this.markLayoutStylePaintEnd() },
            }),
            ke(this, `unattributedHydrationOverhead`, {
              measure: () => this.measureUnattributedHydrationOverhead(),
            }));
        }
        markRenderStart() {
          performance.mark(`framer-hydration-start`);
        }
        markRenderEnd() {
          (performance.mark(`framer-hydration-render-end`),
            li(`framer-hydration-render`, `framer-hydration-start`, `framer-hydration-render-end`));
        }
        markUseInsertionEffectsStart() {
          performance.mark(`framer-hydration-insertion-effects-start`);
        }
        markUseInsertionEffectRouterStart() {
          performance.mark(`framer-hydration-router-insertion-effect`);
        }
        markUseInsertionEffectsEnd() {
          (performance.mark(`framer-hydration-insertion-effects-end`),
            li(
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
            li(
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
            li(
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
            li(
              `framer-hydration-raf`,
              `framer-hydration-browser-render-start`,
              `framer-hydration-browser-raf-end`
            ));
        }
        markLayoutStylePaintEnd() {
          (performance.mark(`framer-hydration-first-paint`),
            li(
              `framer-hydration-time-to-first-paint`,
              `framer-hydration-start`,
              `framer-hydration-first-paint`
            ),
            li(
              `framer-hydration-browser-render`,
              `framer-hydration-browser-raf-end`,
              `framer-hydration-first-paint`
            ));
        }
        measureMutationEffects() {
          li(
            `framer-hydration-commit`,
            `framer-hydration-layout-effects-end`,
            `framer-hydration-effects-start`
          );
        }
        measureUnattributedHydrationOverhead() {
          li(
            `framer-hydration-uho`,
            performance.getEntriesByName(`framer-hydration-effects-end`)[0]?.name ??
              performance.getEntriesByName(`framer-hydration-layout-effects-end`)[0]?.name,
            `framer-hydration-browser-render-start`
          );
        }
      }),
      (K_ = Ae(null)),
      Re(K_, 1, `markRenderStart`, G_, q_),
      Re(K_, 1, `markRenderEnd`, W_, q_),
      Re(K_, 1, `markUseInsertionEffectsStart`, U_, q_),
      Re(K_, 1, `markUseInsertionEffectRouterStart`, H_, q_),
      Re(K_, 1, `markUseInsertionEffectsEnd`, V_, q_),
      Re(K_, 1, `markUseLayoutEffectsStart`, B_, q_),
      Re(K_, 1, `markRouterUseLayoutEffectStart`, z_, q_),
      Re(K_, 1, `markUseLayoutEffectsEnd`, R_, q_),
      Re(K_, 1, `markUseEffectsStart`, L_, q_),
      Re(K_, 1, `markUseEffectsRouterStart`, I_, q_),
      Re(K_, 1, `markUseEffectsAreSynchronous`, F_, q_),
      Re(K_, 1, `markUseEffectsEnd`, P_, q_),
      Re(K_, 1, `markRafStart`, N_, q_),
      Re(K_, 1, `markRafEnd`, M_, q_),
      Re(K_, 1, `markLayoutStylePaintEnd`, j_, q_),
      Re(K_, 1, `measureMutationEffects`, A_, q_),
      Re(K_, 1, `measureUnattributedHydrationOverhead`, k_, q_),
      Fe(K_, q_),
      (Y_ = !1),
      (X_ = { Start: mi, End: hi }),
      (Z_ = class extends Error {}),
      (Q_ = class extends b {
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
          if (!(this.state.error instanceof Z_)) throw this.state.error;
          let { notFoundPage: e, defaultPageStyle: t } = this.props;
          if (!e) throw this.state.error;
          return gi(e, t);
        }
      }),
      ($_ = Object.freeze([])),
      (tv = new Set()),
      (nv = class {
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
      (rv = (() => {
        function e(e) {
          return (
            Ii(
              `Animatable()`,
              `2.0.0`,
              `the new animation API (https://www.framer.com/api/animation/)`
            ),
            Li(e) ? e : new ov(e)
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
          (e.get = (e, t) => (e == null ? t : Li(e) ? e.get() : e)),
          (e.objectToValues = (e) => {
            if (!e) return e;
            let t = {};
            for (let n in e) {
              let r = e[n];
              Li(r) ? (t[n] = r.get()) : (t[n] = r);
            }
            return t;
          }),
          e
        );
      })()),
      (iv = `onUpdate`),
      (av = `finishTransaction`),
      (ov = class {
        constructor(e) {
          this.value = e;
        }
        value;
        observers = new nv();
        static interpolationFor(e, t) {
          if (Li(e)) return Ri(e, t);
        }
        get() {
          return this.value;
        }
        set(e, t) {
          let n = this.value;
          (Li(e) && (e = e.get()), (this.value = e));
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
          (e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({ x: Bi(e.x, t.x), y: Bi(e.y, t.y) })),
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
      })((Hi ||= {})),
      (sv = {
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
      (cv = class e {
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
            ((this.lch_h = (e * 180) / Math.PI), this.lch_h < 0 && (this.lch_h = 360 + this.lch_h));
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
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHsluv());
        }
        rgbToHpluv() {
          (this.rgbToXyz(), this.xyzToLuv(), this.luvToLch(), this.lchToHpluv(), this.lchToHpluv());
        }
        hexToHsluv() {
          (this.hexToRgb(), this.rgbToHsluv());
        }
        hexToHpluv() {
          (this.hexToRgb(), this.rgbToHpluv());
        }
      }),
      (cv.hexChars = `0123456789abcdef`),
      (cv.refY = 1),
      (cv.refU = 0.19783000664283),
      (cv.refV = 0.46831999493879),
      (cv.kappa = 903.2962962),
      (cv.epsilon = 0.0088564516),
      (cv.m_r0 = 3.240969941904521),
      (cv.m_r1 = -1.537383177570093),
      (cv.m_r2 = -0.498610760293),
      (cv.m_g0 = -0.96924363628087),
      (cv.m_g1 = 1.87596750150772),
      (cv.m_g2 = 0.041555057407175),
      (cv.m_b0 = 0.055630079696993),
      (cv.m_b1 = -0.20397695888897),
      (cv.m_b2 = 1.056971514242878),
      (lv = new cv()),
      (uv = {
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
      (dv =
        /^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
      (fv = (e) => {
        let { r: t, g: n, b: r, a: i } = fa(e);
        return {
          x: 0.486570948648216 * t + 0.265667693169093 * n + 0.1982172852343625 * r,
          y: 0.2289745640697487 * t + 0.6917385218365062 * n + 0.079286914093745 * r,
          z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
          a: i,
        };
      }),
      (pv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ma({
          r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * n,
          g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * n,
          b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * n,
          a: r,
        })),
      (mv = (e) => {
        let { r: t, g: n, b: r, a: i } = fa(e);
        return {
          x: 0.4123907992659593 * t + 0.357584339383878 * n + 0.1804807884018343 * r,
          y: 0.2126390058715102 * t + 0.715168678767756 * n + 0.0721923153607337 * r,
          z: 0.0193308187155918 * t + 0.119194779794626 * n + 0.9505321522496607 * r,
          a: i,
        };
      }),
      (hv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
        ma({
          r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * n,
          g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * n,
          b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * n,
          a: r,
        })),
      (gv = class e {
        format = `p3`;
        r;
        g;
        b;
        a;
        constructor(e) {
          ((this.r = e.r ?? 0), (this.g = e.g ?? 0), (this.b = e.b ?? 0), (this.a = e.a ?? 1));
        }
        hsv() {
          return ha(this);
        }
        rgb() {
          return ya(this);
        }
        hsl() {
          return Qi(this.r, this.g, this.b);
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
              return new e(_a(t));
            case `srgb`:
              return new e(va(_a(t)));
          }
        }
        static fromRGB(t) {
          return new e(
            va({
              r: Math.round((t.r / 255) * 1e4) / 1e4,
              g: Math.round((t.g / 255) * 1e4) / 1e4,
              b: Math.round((t.b / 255) * 1e4) / 1e4,
              a: t.a ?? 1,
            })
          );
        }
        static fromRGBString(t) {
          let n = G(t);
          if (n) return e.fromRGB(n);
        }
        static fromString(t) {
          if (!e.isP3String(t)) return;
          let n = ua(t);
          if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
        }
        static srgbFromValue(t) {
          if (!F(t) || !G.isP3String(t)) return t;
          let n = e.fromString(t);
          return n ? n.toString(`srgb`) : t;
        }
        static multiplyAlpha(t, n) {
          return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
        }
      }),
      (_v = new Map()),
      (G = (() => {
        function e(n, r, i, a) {
          if (typeof n == `string`) {
            let r = _v.get(n);
            return (
              r || ((r = t(n)), r === void 0 ? { ...e(`black`), isValid: !1 } : (_v.set(n, r), r))
            );
          }
          let o = t(n, r, i, a);
          return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
        }
        function t(t, n, r, i) {
          if (t === ``) return;
          let a = ba(t, n, r, i);
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
          (e.isColorString = (e) => typeof e == `string` && sa(e) !== !1),
          (e.isColorObject = (e) =>
            L(e) &&
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
          (e.toHex = (e, t = !1) => Zi(e.r, e.g, e.b, t)),
          (e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
          (e.isP3String = (e) => typeof e == `string` && gv.isP3String(e)),
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
          (e.toHusl = (e) => ({ ...qi(e.r, e.g, e.b), a: e.roundA })),
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
            let t = ta(e.r, e.g, e.b);
            return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
          }),
          (e.toHsvString = (e) => {
            let t = ta(e.r, e.g, e.b),
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
            let t = Zi(e.r, e.g, e.b, !0);
            for (let e of Object.keys(sv)) if (sv[e] === t) return e;
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
                r: Ui(i, [0, 1], [t.r, r.r], a),
                g: Ui(i, [0, 1], [t.g, r.g], a),
                b: Ui(i, [0, 1], [t.b, r.b], a),
                a: Ui(i, [0, 1], [t.a, r.a], a),
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
                h: Ui(i, [0, 1], [u, u + f], a),
                s: Ui(i, [0, 1], [c.s, l.s], a),
                l: Ui(i, [0, 1], [c.l, l.l], a),
                a: Ui(i, [0, 1], [t.a, r.a], a),
              };
              s = n.isHSL(o) ? e(p) : e(Ji(p.h, p.s, p.l, p.a));
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
          (e.rgbToHsl = (e, t, n) => Qi(e, t, n)),
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
      (vv = (e) => e instanceof Ve),
      (yv = yh().EventEmitter),
      (bv = class {
        _emitter = new yv();
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
      (xv = (e) => {
        setTimeout(e, 1 / 60);
      }),
      (Sv = W.requestAnimationFrame || xv),
      (Cv = (e) => Sv(e)),
      (wv = 1 / 60),
      (Tv = class extends bv {
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
          wv = e;
        }
        static get TimeStep() {
          return wv;
        }
        constructor(e = !1) {
          (super(), e && this.start());
        }
        start() {
          return this._started
            ? this
            : ((this._frame = 0), (this._started = !0), Cv(this.tick), this);
        }
        stop() {
          return ((this._started = !1), this);
        }
        get frame() {
          return this._frame;
        }
        get time() {
          return this._frame * wv;
        }
        tick = () => {
          this._started &&
            (Cv(this.tick),
            this.emit(`update`, this._frame, wv),
            this.emit(`render`, this._frame, wv),
            this._processFrameTasks(),
            this._frame++);
        };
      }),
      (Ev = new Tv()),
      (Dv = { target: Ea() ? `EXPORT` : `PREVIEW`, zoom: 1 }),
      (K = {
        canvas: `CANVAS`,
        export: `EXPORT`,
        thumbnail: `THUMBNAIL`,
        preview: `PREVIEW`,
        current: () => Dv.target,
        hasRestrictions: () => {
          let e = Dv.target;
          return e === `CANVAS` || e === `EXPORT`;
        },
      }),
      (Ov = (e) => ({
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
        borderTopWidth: Ov(`y`),
        borderLeftWidth: Ov(`x`),
        borderRightWidth: Ov(`x`),
        borderBottomWidth: Ov(`y`),
      }),
      (kv = A.createContext({
        getLayoutId: (e) => null,
        persistLayoutIdCache: () => {},
        top: !1,
        enabled: !0,
      })),
      (Av = {
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
      (jv = {
        ...Av,
        border: `1px solid rgba(149, 149, 149, 0.15)`,
        borderRadius: 6,
        fontSize: `12px`,
        backgroundColor: `rgba(149, 149, 149, 0.1)`,
        color: `#a5a5a5`,
      }),
      (Mv = {
        overflow: `hidden`,
        whiteSpace: `nowrap`,
        textOverflow: `ellipsis`,
        maxWidth: `100%`,
        flexShrink: 0,
        padding: `0 10px`,
      }),
      (Nv = { ...Mv, fontWeight: 500 }),
      (Pv = {
        ...Mv,
        whiteSpace: `pre`,
        maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
        WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
      }),
      (Fv = (e) => e),
      (Iv =
        /^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
      (Lv = Fa(
        (e) =>
          Iv.test(e) || (e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91)
      )),
      (Rv = (e) => () => {
        Fi(e);
      }),
      (zv = () => () => {}),
      (Bv = {
        imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
        useImageSource(e) {
          return e.src ?? ``;
        },
        useImageElement(e, t, n) {
          let r = q.useImageSource(e, t, n);
          return C(() => {
            let t = new Image();
            return ((t.src = r), e.srcSet && (t.srcset = e.srcSet), t);
          }, [r, e.srcSet]);
        },
        canRenderOptimizedCanvasImage() {
          return !1;
        },
        fontStore: {
          isSelectorLoaded() {
            return !0;
          },
          async loadFonts() {
            return { newlyLoadedFontCount: 0 };
          },
          async loadWebFontsFromSelectors() {
            return [];
          },
          async loadMissingFonts() {},
        },
        isOnPageCanvas: !1,
      }),
      (Vv = !1),
      (q = new Proxy(Bv, {
        get(e, t, n) {
          return Reflect.has(e, t)
            ? Reflect.get(e, t, n)
            : [`getLogger`].includes(String(t))
              ? zv()
              : Rv(
                  Vv
                    ? `${String(t)} is not available in this version of Framer.`
                    : `${String(t)} is only available inside of Framer. https://www.framer.com/`
                );
        },
      })),
      (Hv = {
        isSelectorLoaded(e) {
          return q.fontStore.isSelectorLoaded(e);
        },
        loadFonts(e) {
          return q.fontStore.loadFonts(e);
        },
        loadWebFontsFromSelectors(e) {
          return q.fontStore.loadWebFontsFromSelectors(e);
        },
        loadMissingFonts(e, t) {
          return q.fontStore.loadMissingFonts(e, t);
        },
      }),
      (Uv = { borderRadius: `inherit`, cornerShape: `inherit` }),
      (Wv = [1, 2, 2.2]),
      (Gv = [512, 1024, 2048, 4096]),
      (Kv = 512),
      (qv = { position: `absolute`, ...Uv, top: 0, right: 0, bottom: 0, left: 0 }),
      (Jv = `src`),
      (Yv = {
        isImageObject: function (e) {
          return !e || typeof e == `string` ? !1 : typeof e == `object` && Jv in e;
        },
      }),
      (Xv = (() => {
        function e(e, t) {
          return { a: e, b: t };
        }
        return (
          (e.offset = (t, n) => {
            let r = ro(Hi.angleFromX(t.a, t.b)),
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
            return e(Hi(n.x - i, n.y + r), n);
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
          (e.distance = (e) => Hi.distance(e.a, e.b)),
          e
        );
      })()),
      (J = {
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
        divide: (e, t) => J.multiply(e, 1 / t),
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
          x: zi(e.x, t),
          y: zi(e.y, t),
          width: zi(e.width, t),
          height: zi(e.height, t),
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
          maxX: J.maxX(e),
          minY: e.y,
          midY: e.y + e.height / 2,
          maxY: J.maxY(e),
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
          return { x: a, y: o, width: Hi.distance(t, n), height: Hi.distance(t, i) };
        },
        merge: (...e) => {
          let t = { x: Math.min(...e.map(J.minX)), y: Math.min(...e.map(J.minY)) },
            n = { x: Math.max(...e.map(J.maxX)), y: Math.max(...e.map(J.maxY)) };
          return J.fromTwoPoints(t, n);
        },
        intersection: (e, t) => {
          let n = Math.max(e.x, t.x),
            r = Math.min(e.x + e.width, t.x + t.width),
            i = Math.max(e.y, t.y),
            a = Math.min(e.y + e.height, t.y + t.height);
          return { x: n, y: i, width: r - n, height: a - i };
        },
        points: (e) => [
          { x: J.minX(e), y: J.minY(e) },
          { x: J.minX(e), y: J.maxY(e) },
          { x: J.maxX(e), y: J.minY(e) },
          { x: J.maxX(e), y: J.maxY(e) },
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
            t.x < J.minX(e) ||
            t.x > J.maxX(e) ||
            t.y < J.minY(e) ||
            t.y > J.maxY(e) ||
            Number.isNaN(e.x) ||
            Number.isNaN(e.y)
          ),
        containsRect: (e, t) => {
          for (let n of J.points(t)) if (!J.containsPoint(e, n)) return !1;
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
          !(t.x >= J.maxX(e) || J.maxX(t) <= e.x || t.y >= J.maxY(e) || J.maxY(t) <= e.y),
        overlapHorizontally: (e, t) => {
          let n = J.maxX(e),
            r = J.maxX(t);
          return n > t.x && r > e.x;
        },
        overlapVertically: (e, t) => {
          let n = J.maxY(e),
            r = J.maxY(t);
          return n > t.y && r > e.y;
        },
        doesNotIntersect: (e, t) => t.find((t) => J.intersects(t, e)) === void 0,
        isEqual: (e, t) => J.equals(e, t),
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
            t.x < e.x ? (n = e.x - t.x) : t.x > J.maxX(e) && (n = t.x - J.maxX(e)),
            t.y < e.y ? (r = e.y - t.y) : t.y > J.maxY(e) && (r = t.y - J.maxY(e)),
            Hi.distance({ x: n, y: r }, { x: 0, y: 0 })
          );
        },
        delta: (e, t) => {
          let n = { x: J.minX(e), y: J.minY(e) },
            r = { x: J.minX(t), y: J.minY(t) };
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
          let n = J.minX(e),
            r = J.minY(e),
            i = J.maxX(e),
            a = J.maxY(e);
          for (let e of t) if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
          return !1;
        },
        edges: (e) => {
          let [t, n, r, i] = J.cornerPoints(e);
          return [Xv(t, n), Xv(n, r), Xv(r, i), Xv(i, t)];
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
                  z(r);
              }
              break;
            case `left`:
              i.x = t.x - e.width;
              break;
            case `right`:
              i.x = t.x + t.width;
              break;
            default:
              z(n);
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
                  z(r);
              }
              break;
            case `top`:
              i.y = t.y - e.height;
              break;
            case `bottom`:
              i.y = t.y + t.height;
              break;
            default:
              z(n);
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
          let n = Xv(t, J.center(e)),
            r = J.edges(e);
          for (let e = 0; e < r.length; e++) {
            let t = r[e];
            if (t && Xv.intersection(n, t, !0)) {
              let n = Zv[e];
              return (R(n, () => `Invalid edge name: ${JSON.stringify(Zv)}`), { edge: t, name: n });
            }
          }
        },
        closestRect: (e, t) => {
          let n = 0,
            r = e[0];
          R(r, `Rect array is empty`);
          let i = J.pointDistance(r, t);
          for (let a = 1; a < e.length; a += 1) {
            let o = e[a];
            R(o);
            let s = J.pointDistance(o, t);
            if ((s < i && ((n = a), (r = o), (i = s)), i === 0)) break;
          }
          return { rect: r, index: n };
        },
      }),
      (Zv = [`top`, `right`, `bottom`, `left`]),
      (Qv = {
        quickfix: (e) => (
          (io(e.widthType) || io(e.heightType)) && (e.aspectRatio = null),
          B(e.aspectRatio) &&
            (e.left && e.right && (e.widthType = 0),
            e.top && e.bottom && (e.heightType = 0),
            e.left && e.right && e.top && e.bottom && (e.bottom = !1),
            e.widthType !== 0 && e.heightType !== 0 && (e.heightType = 0)),
          e.left &&
            e.right &&
            ((e.fixedSize || io(e.widthType) || B(e.maxWidth)) && (e.right = !1),
            (e.widthType = 0)),
          e.top &&
            e.bottom &&
            ((e.fixedSize || io(e.heightType) || B(e.maxHeight)) && (e.bottom = !1),
            (e.heightType = 0)),
          e
        ),
      }),
      ($v = {
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
            d = Qv.quickfix({
              left: B(t) || Li(t),
              right: B(n) || Li(n),
              top: B(r) || Li(r),
              bottom: B(i) || Li(i),
              widthType: ao(a),
              heightType: ao(o),
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
          } else a !== void 0 && typeof a != `string` && (f = rv.getNumber(a));
          if (d.heightType !== 0 && typeof o == `string`) {
            let e = parseFloat(o);
            o.endsWith(`fr`)
              ? ((h = 3), (p = e))
              : o === `auto`
                ? (h = 2)
                : ((h = 1), (p = parseFloat(o) / 100));
          } else o !== void 0 && typeof o != `string` && (p = rv.getNumber(o));
          let g = 0.5,
            _ = 0.5;
          return (
            s && (g = parseFloat(s) / 100),
            c && (_ = parseFloat(c) / 100),
            {
              left: d.left ? rv.getNumber(t) : null,
              right: d.right ? rv.getNumber(n) : null,
              top: d.top ? rv.getNumber(r) : null,
              bottom: d.bottom ? rv.getNumber(i) : null,
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
            o = t?.sizing ? rv.getNumber(t?.sizing.width) : null,
            s = t?.sizing ? rv.getNumber(t?.sizing.height) : null,
            c = fo(e.left, e.right);
          if (o && B(c)) i = o - c;
          else if (n && io(e.widthType)) i = n.width;
          else if (B(e.width))
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
                z(e.widthType);
            }
          let l = fo(e.top, e.bottom);
          if (s && B(l)) a = s - l;
          else if (n && io(e.heightType)) a = n.height;
          else if (B(e.height))
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
                z(e.heightType);
            }
          return uo(i, a, e, { height: s ?? 0, width: o ?? 0 }, t?.viewport);
        },
        toRect: (e, t = null, n = null, r = !1, i = null) => {
          let a = e.left || 0,
            o = e.top || 0,
            { width: s, height: c } = $v.toSize(e, t, n, i),
            l = t?.positioning ?? null,
            u = l ? rv.getNumber(l.width) : null,
            d = l ? rv.getNumber(l.height) : null;
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
          return r ? J.pixelAligned(f) : f;
        },
      }),
      (ey = 200),
      (ty = 200),
      (ny = A.createContext({ parentSize: 0 })),
      (ry = (e) => {
        let t = bo(),
          { parentSize: n, children: r } = e,
          i = A.useMemo(() => ({ parentSize: n }), [So(n), Co(n)]);
        return t === 1
          ? r
            ? E(v, { children: r })
            : null
          : E(ny.Provider, { value: i, children: r });
      }),
      (iy = A.createContext(void 0)),
      (ay = new Set()),
      (sy = `style[data-framer-css-ssr-minified]`),
      (cy = (() => {
        if (!Tn()) return new Set();
        let e = document.querySelector(sy)?.getAttribute(`data-framer-components`);
        return e ? new Set(e.split(` `)) : new Set();
      })()),
      (ly = `data-framer-css-ssr`),
      (uy = (e, t, n) =>
        A.forwardRef((r, i) => {
          let { sheet: a, cache: o } = A.useContext(iy) ?? {},
            s = n;
          if (!Tn()) {
            Je(t) && (t = t(jo(), r));
            let e = Array.isArray(t)
              ? t.join(`
`)
              : t;
            fy.add(e, s);
          }
          return (
            c(() => {
              (s && cy.has(s)) ||
                (Je(t)
                  ? t(jo(), r)
                  : Array.isArray(t)
                    ? t
                    : t.split(`
`)
                ).forEach((e) => e && Ao(e, a, o));
            }, []),
            E(e, { ...r, ref: i })
          );
        })),
      (dy = class {
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
      (fy = new dy()),
      (py = `--framer-will-change-override`),
      (my = `--framer-will-change-effect-override`),
      (hy = `--framer-will-change-filter-override`),
      (gy = `--overflow-clip-fallback`),
      (_y = `--one-if-corner-shape-supported`),
      (vy = [
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
      (yy = ((e) => (
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
      ))(yy || {})),
      (by = yy),
      (xy = (() => {
        function e(e, t) {
          let n = ` `;
          for (let e in t) {
            let r = t[e];
            (R(r !== void 0, "Encountered `undefined` in CSSDeclaration"),
              (n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${Mo(r)}; `));
          }
          return e + ` {` + n + `}`;
        }
        return (
          (e.variable = (...e) => {
            let t = e[e.length - 1];
            R(t !== void 0, "Zero variables passed to `css.variable`");
            let n = t.startsWith(`--`) ? `var(${t})` : t;
            for (let t = e.length - 2; t >= 0; t--) n = `var(${e[t]}, ${n})`;
            return n;
          }),
          e
        );
      })()),
      `${by.BorderTopWidth}${by.BorderRightWidth}${by.BorderBottomWidth}${by.BorderLeftWidth}`,
      (Sy = `--list-style-type`),
      (Cy = `--max-list-digits`),
      (wy = [1, 2, 3, 8, 18, 28, 38, 88, 188, 288, 388, 888]),
      (Ty = { display: `flex`, flexDirection: `column`, justifyContent: `flex-start` }),
      (Ey = { display: `inline-block` }),
      (Dy = { display: `block` }),
      (Oy = [
        `
        [data-framer-component-type="RichTextContainer"] {
            display: ${Ty.display};
            flex-direction: ${Ty.flexDirection};
            justify-content: ${Ty.justifyContent};
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
                color: ${Ro([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Ro([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Ro([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
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
            display: ${Ey.display};
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
                color: ${Ro([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ro([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ro([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ro([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ro([`--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
            color: ${Ro([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Ro([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Ro([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
            color: ${Ro([`--framer-link-hover-text-color`, `--framer-link-text-color`, `--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
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
                color: ${Ro([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ro([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Ro([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ro([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ro([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
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
                color: ${Ro([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ro([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Ro([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
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
                color: ${Ro([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Ro([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
        `
        .framer-image.framer-text {
            display: ${Dy.display};
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
            list-style: "";
            padding-inline-start: 2ch;
        }
    `,
        `
        ol.framer-text > li.framer-text {
            padding-inline-start: calc(calc(var(${Cy}, 1) + 1) * 1ch);
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
        ${zo(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
      ]),
      (ky = `--text-truncation-display-inline-for-safari-16`),
      (Ay = `--text-truncation-display-none-for-safari-16`),
      (jy = `--text-truncation-line-break-for-safari-16`),
      (My = [
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
      (Ny = `(background: -webkit-named-image(i))`),
      (Py = `(contain-intrinsic-size: inherit)`),
      (Fy = [
        `@supports ${Ny} and (not ${Py}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${My.join(`, `)} { display: var(${ky}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${My.map((e) => `${e}::after`).join(`, `)} { content: var(${jy}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${Ay}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${ky}, ${Ey.display}) }
    }`,
      ]),
      (Iy = (e) => {
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
                  `body { ${py}: none; }`,
                  `@supports ${s} and (not (grid-template-rows: subgrid)) { body { ${py}: transform; } }`,
                ]
              : [`body { ${py}: none; ${my}: none; }`],
          l = (e) =>
            e
              ? [
                  `body { ${hy}: none; }`,
                  `@supports ${s} and (not (position-area: top right)) { body { ${hy}: filter; } }`,
                ]
              : [`body { ${hy}: none; }`],
          u = (e) => (e ? a : []),
          d = `@supports (not (overflow: clip)) {
        :root { ${gy}: hidden; }
    }`,
          f = `@supports (corner-shape: superellipse(2)) { :root { ${_y}: 1 } }`;
        return [
          ...c(e),
          ...l(e),
          `[data-framer-component-type] { position: absolute; }`,
          ...t,
          ...Oy,
          ...vy,
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
          ...Fy,
          f,
        ];
      }),
      (Ly = ko(() => Iy(!1))),
      (Ry = ko(() => Iy(!0))),
      (zy = Sn()),
      (By = A.createContext(!1)),
      (Vy = class {
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
      (Hy = Tn() ? new Vy() : void 0),
      (Uy = `data-framer-size-compatibility-wrapper`),
      (Wy = `0.000001px`),
      (Gy = ` translateZ(${Wy})`),
      (Ky = Dn() || Cn() || On()),
      (qy = (() => {
        class e extends b {
          static defaultProps = {};
          static applyWillChange(e, t, n) {
            e.willChangeTransform && (n ? ts(t) : ns(t));
          }
          layerElement = null;
          setLayerElement = (e) => {
            this.layerElement = e;
          };
          shouldComponentUpdate(e, t) {
            return e._needsMeasure || this.state !== t || !Tt(this.props, e);
          }
          componentDidUpdate(e) {
            Fv(this.props).clip &&
              Fv(this.props).radius === 0 &&
              Fv(e).radius !== 0 &&
              is(this.layerElement, `overflow`, `hidden`, !1);
          }
        }
        return e;
      })()),
      (Jy = (e) => {
        let t = 0,
          n,
          r;
        if (e.length === 0) return t;
        for (n = 0; n < e.length; n++) ((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
        return t;
      }),
      (Yy = {
        hueRotate: (e, t) => G.toHslString(G.hueRotate(G(e), t)),
        setAlpha: (e, t) => G.toRgbString(G.alpha(G(e), t)),
        getAlpha: (e) => {
          let t = sa(e);
          return t ? t.a : 1;
        },
        multiplyAlpha: (e, t) => G.toRgbString(G.multiplyAlpha(G(e), t)),
        toHexValue: (e) => G.toHex(G(e)).toUpperCase(),
        toHex: (e) => G.toHexString(G(e)).toUpperCase(),
        toRgb: (e) => G.toRgb(G(e)),
        toRgbString: (e) => G.toRgbString(G(e)),
        toHSV: (e) => G.toHsv(G(e)),
        toHSL: (e) => G.toHsl(G(e)),
        toHslString: (e) => G.toHslString(G(e)),
        toHsvString: (e) => G.toHsvString(G(e)),
        hsvToHSLString: (e) => G.toHslString(G(Yi(e.h, e.s, e.v, e.a))),
        hsvToHexValue: (e) => G.toHex(G(Yi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToHex: (e) => G.toHexString(G(Yi(e.h, e.s, e.v, e.a))).toUpperCase(),
        hsvToRgbString: (e) => G.toRgbString(G(Yi(e.h, e.s, e.v, e.a))),
        hsvToString: (e) => Yi(e.h, e.s, e.v),
        rgbaToString: (e) => G.toRgbString(G(e)),
        rgbToHexValue: (e) => G.toHex(G(e)),
        rgbToHexString: (e) => G.toHexString(G(e)),
        hslToString: (e) => G.toHslString(G(e)),
        hslToRgbString: (e) => G.toRgbString(G(e)),
        toColorPickerSquare: (e) => G.toRgbString(G({ h: e, s: 1, l: 0.5, a: 1 })),
        isValid: (e) => G(e).isValid !== !1,
        equals: (e, t) =>
          G.isP3String(e) || G.isP3String(t)
            ? e === t
            : (typeof e == `string` && (e = G(e)),
              typeof t == `string` && (t = G(t)),
              G.equal(e, t)),
        toHexOrRgbaString: (e) => {
          let t = G(e);
          return t.a === 1 ? G.toHexString(t) : G.toRgbString(t);
        },
        toFormatString: (e) => (G.isP3String(e) ? e : G.toRgbString(G(e))),
      }),
      (Xy = /var\(.+\)/u),
      (Zy = new Map()),
      (Qy = [`stops`]),
      ($y = [`start`, `end`]),
      (eb = [`angle`, `alpha`]),
      (tb = {
        isLinearGradient: (e) => L(e) && eb.every((t) => t in e) && (fs(e) || ds(e)),
        hash: (e) => e.angle ^ us(e, e.alpha),
        toCSS: (e, t, n) => {
          let r = ls(e, e.alpha),
            i = t === void 0 ? e.angle : t;
          return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
        },
      }),
      (nb = [`widthFactor`, `heightFactor`, `centerAnchorX`, `centerAnchorY`, `alpha`]),
      (rb = {
        isRadialGradient: (e) => L(e) && nb.every((t) => t in e) && (fs(e) || ds(e)),
        hash: (e) =>
          e.centerAnchorX ^ e.centerAnchorY ^ e.widthFactor ^ e.heightFactor ^ us(e, e.alpha),
        toCSS: (e, t) => {
          let { alpha: n, widthFactor: r, heightFactor: i, centerAnchorX: a, centerAnchorY: o } = e,
            s = ls(e, n),
            c = s.map((e, n) => {
              let r = s[n + 1],
                i = e.position === 1 && r?.position === 1 ? e.position - 1e-4 : e.position;
              return `${t?.(e.value) ?? e.value} ${i * 100}%`;
            });
          return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
        },
      }),
      (ib = [
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
      (ab = new Set([...ib, ...ib.map((e) => `${e}Capture`)])),
      (ob = `overflow`),
      (sb = { x: 0, y: 0, width: 200, height: 200 }),
      (cb = new Set([
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
      (lb = D(function (e, n) {
        let { name: r, center: i, border: a, _border: o, __portal: s } = e,
          { props: c, children: l } = Go(e),
          u = Cs(c),
          d = qo(e),
          f = vs(e),
          p = _(null),
          m = n ?? p,
          h = {
            "data-framer-component-type": e.componentType ?? `Frame`,
            "data-framer-cursor": f,
            "data-framer-highlight": f === `pointer` || void 0,
            "data-layoutid": d,
            "data-framer-offset-parent-id": Fv(e)[`data-framer-offset-parent-id`],
          };
        !ws(e) && r && (Fv(h)[`data-framer-name`] = r);
        let [g, y] = Ss(c),
          b = xs(c),
          x = Eo(b),
          S = i && !(y && !x && mo(b)) ? i : void 0;
        (S ? (u.transformTemplate ||= Ko(i)) : (u.transformTemplate ||= void 0),
          Object.assign(h, Uo(S, c.style)),
          $o(e, m));
        let C = $a(e),
          T = Ts(c, b, y, t(By)),
          D = wo(
            w(v, {
              children: [
                C
                  ? E(Ya, {
                      alt: e.alt ?? ``,
                      image: C,
                      containerSize: y ?? void 0,
                      nodeId: e.id && Wo(e.id),
                      layoutId: d,
                    })
                  : null,
                l,
                E(Za, { ...o, border: a, layoutId: d }),
              ],
            }),
            T
          ),
          ee = Oo(e.as),
          O = Do(C);
        return (
          e.fitImageDimension &&
            O &&
            ((g[e.fitImageDimension] = `auto`), (g.aspectRatio = O.width / O.height)),
          w(ee, { ...h, ...u, layoutId: d, style: g, ref: m, children: [D, s] })
        );
      })),
      (ub = Vo(
        D(function (e, t) {
          let { visible: n = !0 } = e;
          return n ? E(lb, { ...e, ref: t }) : null;
        })
      )),
      (db = `__LAYOUT_TREE_ROOT`),
      (fb = A.createContext({
        schedulePromoteTree: () => {},
        scheduleProjectionDidUpdate: () => {},
        initLead: () => {},
      })),
      (pb = class extends b {
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
                preserveFollowOpacity: t.options.layoutId === db && !this.follow?.isExiting,
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
          return E(fb.Provider, { value: this.sharedLayoutContext, children: this.props.children });
        }
      }),
      (mb = { width: `100%`, height: `100%`, backgroundColor: `none` }),
      (hb = class {
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
      (gb = O(new Map())),
      (_b = typeof IntersectionObserver > `u` ? wh : Ns),
      (vb = Array(100)
        .fill(void 0)
        .map((e, t) => t * 0.01)),
      (yb = A.createContext(null)),
      (bb = class extends b {
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
        shouldPreserveFollowOpacity = (e) => e.options.layoutId === db && !this.props.isExiting;
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
          return E(Pe.Provider, {
            value: this.switchLayoutGroupContext,
            children: this.props.children,
          });
        }
      }),
      (xb = (e) => {
        let t = A.useContext(fb);
        return E(bb, { ...e, sharedLayoutContext: t });
      }),
      (Sb = A.createContext(!0)),
      (Cb = O({ register: () => {}, deregister: () => {} })),
      (wb = ({ isCurrent: e, isOverlayed: t, children: n }) => {
        let r = Rs(),
          i = _({
            register: u(
              (e) => {
                if (r.has(e)) {
                  console.warn(`NavigationTargetWrapper: already registered`);
                  return;
                }
                r.set(e, void 0);
              },
              [r]
            ),
            deregister: u(
              (e) => {
                (r.get(e)?.(), r.delete(e));
              },
              [r]
            ),
          }).current;
        return (
          j(
            () => (
              r.forEach((n, i) => {
                let a = i(e, t);
                r.set(i, Je(a) ? a : void 0);
              }),
              () => {
                r.forEach((e, t) => {
                  e && (e(), r.set(t, void 0));
                });
              }
            ),
            [e, t, r]
          ),
          E(Cb.Provider, { value: i, children: n })
        );
      }),
      (Tb = A.memo(function ({
        isLayeredContainer: e,
        isCurrent: n,
        isPrevious: r,
        isOverlayed: i = !1,
        visible: a,
        transitionProps: o,
        children: s,
        backdropColor: c,
        onTapBackdrop: l,
        backfaceVisible: u,
        exitBackfaceVisible: d,
        animation: f,
        exitAnimation: p,
        instant: m,
        initialProps: h,
        exitProps: g,
        position: v = { top: 0, right: 0, bottom: 0, left: 0 },
        withMagicMotion: y,
        index: b,
        areMagicMotionLayersPresent: x,
        id: S,
        isInitial: C,
      }) {
        let T = re(),
          D = t(Ee),
          { persistLayoutIdCache: ee } = t(kv),
          O = _({
            wasCurrent: void 0,
            wasPrevious: !1,
            wasBeingRemoved: !1,
            wasReset: !0,
            origins: Bs({}, h, o),
          }),
          te = _(null),
          k = D !== null && !D.isPresent;
        (n && O.current.wasCurrent === void 0 && ee(),
          j(() => {
            if (e || !T) return;
            if (k) {
              O.current = { ...O.current, wasBeingRemoved: k };
              return;
            }
            let { wasPrevious: t, wasCurrent: i } = O.current,
              a = (n && !i) || (!k && O.current.wasBeingRemoved && n),
              s = r && !t,
              c = Bs(O.current.origins, h, o),
              l = O.current.wasReset;
            (a || s
              ? (T.stop(), T.start({ zIndex: b, ...c, ...o }), (l = !1))
              : l === !1 && (T.stop(), T.set({ zIndex: b, ...Eb, opacity: 0 }), (l = !0)),
              (O.current = {
                wasCurrent: !!n,
                wasPrevious: !!r,
                wasBeingRemoved: !1,
                wasReset: l,
                origins: c,
              }));
          }, [n, r, k]));
        let A = m ? { type: !1 } : `velocity` in f ? { ...f, velocity: 0 } : f,
          ne = m ? { type: !1 } : p || f,
          M = { ...v };
        ((M.left === void 0 || M.right === void 0) && (M.width = `auto`),
          (M.top === void 0 || M.bottom === void 0) && (M.height = `auto`));
        let ie = (Vs(o) || Vs(h)) && (e || n || r) ? 1200 : void 0,
          ae = { ...Eb, ...O.current.origins },
          oe = e
            ? {
                initial: { ...ae, ...h },
                animate: { ...ae, ...o, transition: A },
                exit: { ...ae, ...g, transition: f },
              }
            : { animate: T, exit: { ...ae, ...g, transition: ne } },
          se = !(k || x === !1),
          ce = !!n && se,
          le = n && C;
        return w(ub, {
          "data-framer-component-type": `NavigationContainerWrapper`,
          width: `100%`,
          height: `100%`,
          style: {
            position: `absolute`,
            transformStyle: `flat`,
            backgroundColor: `transparent`,
            overflow: `hidden`,
            zIndex: e || k || (n && y) ? b : void 0,
            pointerEvents: void 0,
            visibility: a ? `visible` : `hidden`,
            perspective: ie,
          },
          children: [
            e &&
              E(ub, {
                width: `100%`,
                height: `100%`,
                "data-framer-component-type": `NavigationContainerBackdrop`,
                transition: f,
                initial: { opacity: m && a ? 1 : 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                backgroundColor: c || `transparent`,
                onTap: k ? void 0 : l,
              }),
            E(ub, {
              ...M,
              ...oe,
              transition: {
                default: A,
                originX: { type: !1 },
                originY: { type: !1 },
                originZ: { type: !1 },
              },
              backgroundColor: `transparent`,
              backfaceVisible: k ? d : u,
              "data-framer-component-type": `NavigationContainer`,
              "data-framer-is-current-navigation-target": !!n,
              style: { pointerEvents: void 0, opacity: le || e || (n && y) ? 1 : 0 },
              "data-is-present": se ? void 0 : !1,
              ref: te,
              children: E(yb.Provider, {
                value: te,
                children: E(Sb.Provider, {
                  value: ce,
                  children: E(wb, {
                    isCurrent: ce,
                    isOverlayed: i,
                    children: E(xb, {
                      isLead: n,
                      animatesLayout: !!y,
                      transition: A,
                      isExiting: !se,
                      isOverlayed: i,
                      id: S,
                      children: s,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }, zs)),
      (Eb = {
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
      (Db = class {
        warning = () => {
          Fi(`The Navigator API is only available inside of Framer: https://www.framer.com/`);
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
      (Ob = O(new Db())),
      (kb = {
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
      (Ab = () => ({
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
      (jb = Rh(Eb)),
      (Mb = A.createContext(void 0)),
      (Nb = A.createContext(void 0)),
      (Pb = (() => {
        class e extends b {
          #e = null;
          state = Ab();
          static defaultProps = { enabled: !0 };
          static contextType = Mb;
          constructor(e) {
            super(e);
            let t = this.props.children;
            if (!t || !no(t) || !to(t)) return;
            let n = { ...kb.Instant },
              r = {
                type: `add`,
                key: t.key?.toString() || `stack-${this.state.historyItemId + 1}`,
                transition: n,
                component: t,
              },
              i = Gs(this.state, r);
            i && (this.state = i);
          }
          componentDidMount() {
            let e = this.state.history[this.state.current];
            e && this.context?.(e.key);
          }
          UNSAFE_componentWillReceiveProps(e) {
            let t = e.children;
            if (!no(t) || !to(t)) return;
            let n = t.key?.toString();
            n &&
              (this.state.history.length === 0
                ? this.#i(t, kb.Instant)
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
            let t = Gs(this.state, e);
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
              ((this.#e = globalThis.event?.timeStamp || null), !e || !no(e) || !to(e))
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
            this.#i(e, kb.Instant, void 0);
          }
          fade(e, t) {
            this.#i(e, kb.Fade, t);
          }
          push(e, t) {
            this.#i(e, Hs(t), t);
          }
          modal(e, t) {
            this.#i(e, kb.Modal, t);
          }
          overlay(e, t) {
            this.#i(e, Us(t), t);
          }
          flip(e, t) {
            this.#i(e, Ws(t), t);
          }
          magicMotion(e, t) {
            this.#i(e, kb.MagicMotion, t);
          }
          customTransition(e, t) {
            this.#i(e, t);
          }
          render() {
            let e = this.#t({ overCurrentContext: !1 }),
              t = this.#t({ overCurrentContext: !0 }),
              n = oc(t),
              r = t.current > -1,
              i = this.state.history.length === 1,
              a = [];
            for (let [t, n] of Object.entries(this.state.containers)) {
              let o = this.state.containerIndex[t];
              R(o !== void 0, `Container's index must be registered`);
              let s = this.state.containerVisualIndex[t];
              R(s !== void 0, `Container's visual index must be registered`);
              let c = this.state.containerIsRemoved[t],
                l = this.state.history[o],
                u = this.state.transitionForContainer[t],
                d = o === this.state.current,
                f = o === this.state.previous,
                p = !d && c,
                m = l?.transition?.withMagicMotion || (d && !!this.state.previousTransition);
              a.push(
                E(
                  Tb,
                  {
                    id: t,
                    index: s,
                    isInitial: i,
                    isCurrent: d,
                    isPrevious: f,
                    isOverlayed: r,
                    visible: d || f,
                    position: l?.transition?.position,
                    instant: gc(o, e),
                    transitionProps: u,
                    animation: hc(o, e),
                    backfaceVisible: pc(o, e),
                    exitAnimation: l?.transition?.animation,
                    exitBackfaceVisible: l?.transition?.backfaceVisible,
                    exitProps: l?.transition?.enter,
                    withMagicMotion: m,
                    areMagicMotionLayersPresent: !p && void 0,
                    children: E(Es, { children: vc({ component: n, transition: l?.transition }) }),
                  },
                  t
                )
              );
            }
            let o = this.state.overlayStack.map((e, n) =>
              E(
                Tb,
                {
                  isLayeredContainer: !0,
                  isCurrent: n === this.state.currentOverlay,
                  position: e.transition.position,
                  initialProps: fc(n, t),
                  transitionProps: mc(n, t),
                  instant: gc(n, t, !0),
                  animation: hc(n, t),
                  exitProps: e.transition.enter,
                  visible: _c(n, t),
                  backdropColor: uc(e.transition),
                  backfaceVisible: dc(n, t),
                  onTapBackdrop: yc(e.transition, this.goBack),
                  index: this.state.current + 1 + n,
                  children: vc({ component: e.component, transition: e.transition }),
                },
                e.key
              )
            );
            return E(ub, {
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
              children: E(Ob.Provider, {
                value: this,
                children: w(Nb.Provider, {
                  value: i,
                  children: [
                    E(Tb, {
                      isLayeredContainer: !0,
                      position: void 0,
                      initialProps: {},
                      instant: !1,
                      transitionProps: sc(n),
                      animation: cc(n),
                      backfaceVisible: lc(n),
                      visible: !0,
                      backdropColor: void 0,
                      onTapBackdrop: void 0,
                      index: 0,
                      children: E(Da, {
                        children: E(pb, {
                          children: E(Ie, { presenceAffectsLayout: !1, children: a }),
                        }),
                      }),
                    }),
                    E(Ie, { children: o }),
                  ],
                }),
              }),
            });
          }
        }
        return e;
      })()),
      (Fb = { stiffness: 500, damping: 50, restDelta: 1, type: `spring` }),
      (Ib = Vo(A.forwardRef(bc))),
      Ue(Sh(), 1),
      (Lb = ((e) => (
        (e.Boolean = `boolean`),
        (e.Number = `number`),
        (e.Dimension = `dimension`),
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
      ))(Lb || {})),
      (Rb = `optional`),
      (zb = `outputControls`),
      Ue(Sh(), 1),
      Ue(Sh(), 1),
      (Bb = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
      (Vb = Symbol(`private`)),
      (Hb = (() => {
        function e(e = {}, t = !1, n = !0) {
          let r = {
              [Vb]: {
                makeAnimatables: t,
                observeAnimatables: n,
                observers: new nv(),
                reset() {
                  for (let t in i)
                    if (Bb(i, t)) {
                      let n = Bb(e, t) ? Fv(e)[t] : void 0;
                      n === void 0 ? delete i[t] : (i[t] = n);
                    }
                },
                transactions: new Set(),
              },
            },
            i = new Proxy(r, Wb);
          return (Object.assign(i, e), i);
        }
        return (
          (e.resetObject = (e) => e[Vb].reset()),
          (e.addObserver = (e, t) => e[Vb].observers.add(t)),
          e
        );
      })()),
      (Ub = class {
        set = (e, t, n, r) => {
          if (t === Vb) return !1;
          let i = e[Vb],
            a,
            o;
          if (
            (Li(n) ? ((a = n), (o = a.get())) : (o = n),
            i.makeAnimatables &&
              typeof n != `function` &&
              typeof n != `object` &&
              !a &&
              (a = rv(n)),
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
            l = Fv(e)[t];
          if (l !== void 0) {
            Li(l) ? ((c = l.get() !== o), l.set(o)) : ((c = l !== o), (Fv(e)[t] = o));
            let n = typeof o == `object` && !!o;
            ((Array.isArray(o) || n) && (c = !0), (s = !0));
          } else (a && (n = a), (s = Reflect.set(e, t, n)));
          return (c && i.observers.notify({ value: r }), s);
        };
        get = (e, t, n) => {
          if (t === Vb) return Fv(e)[t];
          let r = Reflect.get(e, t, n);
          return typeof r == `function` ? r.bind(n) : r;
        };
        deleteProperty(e, t) {
          let n = Reflect.deleteProperty(e, t);
          return (e[Vb].observers.notify({ value: e }), n);
        }
        ownKeys(e) {
          let t = Reflect.ownKeys(e),
            n = t.indexOf(Vb);
          return (n !== -1 && t.splice(n, 1), t);
        }
        getOwnPropertyDescriptor(e, t) {
          if (t !== Vb) return Reflect.getOwnPropertyDescriptor(e, t);
        }
      }),
      (Wb = new Ub()),
      (Gb = (() => {
        function e(t = {}) {
          let n = Hb(t, !1, !1);
          return (e.addData(n), n);
        }
        return (
          (e._stores = []),
          (e.addData = (t) => {
            e._stores.push(t);
          }),
          (e.reset = () => {
            e._stores.forEach((e) => Hb.resetObject(e));
          }),
          (e.addObserver = (e, t) => Hb.addObserver(e, t)),
          e
        );
      })()),
      (Kb = { update: 0 }),
      (qb = A.createContext({ update: NaN })),
      (Jb = class extends b {
        observers = [];
        state = Kb;
        taskAdded = !1;
        frameTask = () => {
          (this.setState({ update: this.state.update + 1 }), (this.taskAdded = !1));
        };
        observer = () => {
          this.taskAdded || ((this.taskAdded = !0), Ev.addFrameTask(this.frameTask));
        };
        componentWillUnmount() {
          (this.observers.map((e) => e()), Gb.reset());
        }
        render() {
          let { children: e } = this.props;
          return (
            this.observers.map((e) => e()),
            (this.observers = []),
            Gb._stores.forEach((e) => {
              let t = Gb.addObserver(e, this.observer);
              this.observers.push(t);
            }),
            E(qb.Provider, { value: { ...this.state }, children: e })
          );
        }
      }),
      Ue(Sh(), 1),
      (Yb = `__framer__`),
      (Xb = Yb.length),
      (Zb = A.createContext(void 0)),
      (Qb = A.createContext(void 0)),
      ($b = `ssr-variant`),
      (ex = `ssr-variant-group-separator`),
      (tx = A.forwardRef(function (e, t) {
        let n = zc(t),
          r = A.useContext(Qb),
          i = A.useSyncExternalStore(kh, jh, Ah),
          a = Aa(() => (i ? (Tn() ? 1 : 2) : 0)),
          o = A.useContext(Zb);
        return Wr(() => {
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
              return n(s, qc(t, c, i));
            case 1:
              return Hc(i, s, c, u, l, d, n, t);
            case 2:
              return Hc(i, s, c, u, l, d, Rc, void 0);
            default:
              z(a);
          }
        }, [o, r, n, e]);
      })),
      (nx = uy(tx, `.${$b} { display: contents }`, `PropertyOverrides`)),
      (rx = `default`),
      (ix = new Set([rx])),
      (ax = class {
        entries = new Map();
        set(e, t, n, r) {
          switch (t) {
            case `transformTemplate`:
              (R(typeof n == `string`, `transformTemplate must be a string, received: ${n}`),
                this.setHash(e, r, { transformTemplate: n, legacy: !0 }));
              break;
            case `initial`:
            case `animate`:
              (R(typeof n == `object`, `${t} must be a valid object, received: ${n}`),
                this.setHash(e, r, { [t]: n, legacy: !0 }));
              break;
            default:
              break;
          }
        }
        setHash(e, t = rx, n) {
          let r = this.entries.get(e) ?? {},
            i = r[t] ?? {};
          ((r[t] = n === null ? null : { ...i, ...n }), this.entries.set(e, r));
        }
        #e = {};
        variantHash(e, t) {
          if (e === t?.primaryVariantId) return rx;
          let n = this.#e[e];
          if (n) return n;
          let r = t?.variantClassNames[e];
          return r ? (this.#e[e] = Uc(r)) : rx;
        }
        setAll(e, t = ix, n, r) {
          if (n === null) {
            for (let n of t) this.setHash(e, this.variantHash(n, r), null);
            return;
          }
          let i = Je(n.transformTemplate) ? n.transformTemplate?.({}, sx) : void 0,
            a = n.__framer__presenceInitial ?? n.initial,
            o = n.__framer__presenceAnimate ?? n.animate,
            s = {
              initial: L(a) ? a : void 0,
              animate: L(o) ? o : void 0,
              transformTemplate: F(i) ? i : void 0,
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
      (ox = new ax()),
      (sx = `__Appear_Animation_Transform__`),
      (cx = `data-framer-appear-id`),
      (lx = `data-framer-appear-animation`),
      (ux = (e) => {
        if (Na())
          return {
            animate: Yc(e.animate) ? e.animate : void 0,
            initial: Yc(e.initial) ? e.initial : void 0,
            exit: void 0,
          };
      }),
      (dx = [
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
      (fx = (e) => ({
        x: Me(e?.x ?? 0),
        y: Me(e?.y ?? 0),
        opacity: Me(e?.opacity ?? 1),
        scale: Me(e?.scale ?? 1),
        rotate: Me(e?.rotate ?? 0),
        rotateX: Me(e?.rotateX ?? 0),
        rotateY: Me(e?.rotateY ?? 0),
        skewX: Me(e?.skewX ?? 0),
        skewY: Me(e?.skewY ?? 0),
        transformPerspective: Me(e?.transformPerspective ?? 0),
      })),
      (Y = {
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
      (px = { willChange: `transform` }),
      Object.freeze(px),
      (mx = {}),
      Object.freeze(mx),
      (hx = new Set([
        `loopEffectEnabled`,
        `loopTransition`,
        `loop`,
        `loopRepeatType`,
        `loopRepeatDelay`,
        `loopPauseOffscreen`,
      ])),
      (gx = () => {
        let e = _();
        return (
          j(
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
      (_x = new Set([`speed`, `adjustPosition`, `offset`, `parallaxTransformEnabled`])),
      (vx = new Set([`presenceInitial`, `presenceAnimate`, `presenceExit`])),
      (yx = 1),
      (bx = 4),
      (xx = new Set([
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
      (Sx = [`animate`, `animate`]),
      (Cx = { inputRange: [], outputRange: [] }),
      (wx = new Set([
        `transformViewportThreshold`,
        `styleTransformEffectEnabled`,
        `transformTargets`,
        `spring`,
        `transformTrigger`,
      ])),
      (Tx = (e, t) => {
        let n = e?.[0]?.target;
        return t ? { opacity: n?.opacity ?? 1 } : n;
      }),
      (Ex = () => ({
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
      (Dx = [0, 1]),
      (Ox = { parallax: _x, styleAppear: xx, styleTransform: wx, loop: hx, presence: vx }),
      (kx = Rh(Ox)),
      (Ax = (e) => e.reduce((e, t) => (e += t), 0)),
      (jx = (e) => e.reduce((e, t) => (e *= t), 1)),
      (Mx = `current`),
      (Nx = (e) =>
        A.forwardRef((t, n) => {
          if (t.__withFX)
            return E(e, { ...t, animate: void 0, initial: void 0, exit: void 0, ref: n });
          let r = ux(t);
          if (r) return E(e, { ...t, ...r, ref: n });
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
            } = vl(t),
            p = As(n),
            { values: m, style: h } = il(s, p, f, t.style, t[fe]),
            { values: g, style: _ } = el(i, p, t.style?.visibility),
            { values: v, style: y } = gl(o, p),
            { values: b, style: x } = fl(a, p),
            { values: S, style: C } = Qc(c, p),
            w = A.useMemo(() => {
              let e = new Ve(u ?? 1);
              return {
                scale: [b.scale, S.scale, m.scale, v.scale],
                opacity: [b.opacity, S.opacity, m.opacity, e, v.opacity],
                x: [b.x, S.x, m.x, v.x],
                y: [b.y, S.y, g.y, m.y, v.y],
                rotate: [b.rotate, S.rotate, m.rotate, v.rotate],
                rotateX: [b.rotateX, S.rotateX, m.rotateX, v.rotateX],
                rotateY: [b.rotateY, S.rotateY, m.rotateY, v.rotateY],
                skewX: [b.skewX, S.skewX, m.skewX, v.skewX],
                skewY: [b.skewY, S.skewY, m.skewY, v.skewY],
                transformPerspective: [v.transformPerspective, b.transformPerspective],
              };
            }, [u, v, g, b, S, m]);
          bl(t.style, w);
          let T = Ce(w.scale, jx),
            D = Ce(w.opacity, jx),
            ee = Ce(w.x, Ax),
            O = Ce(w.y, Ax),
            te = Ce(w.rotate, Ax),
            k = Ce(w.rotateX, Ax),
            j = Ce(w.rotateY, Ax),
            ne = Ce(w.skewX, Ax),
            re = Ce(w.skewY, Ax),
            M = Ce(w.transformPerspective, Ax),
            { drag: ie, dragConstraints: ae } = l;
          Yo(ie && yl(ae) ? ae : void 0);
          let oe = {
            opacity: D,
            scale: T,
            x: ee,
            y: O,
            rotate: te,
            rotateX: k,
            rotateY: j,
            skewX: ne,
            skewY: re,
          };
          Qe(d) && (oe.transformPerspective = M);
          let se = xl(t.animate) ? t.animate : void 0,
            ce = xl(t.initial) ? t.initial : void 0,
            le = xl(t.exit) ? t.exit : void 0,
            ue = f && !s.presenceInitial ? { initial: ce, animate: se, exit: le } : {};
          return E(e, {
            ...l,
            ...ue,
            __withFX: !0,
            style: { ...t.style, ..._, ...y, ...C, ...oe, ...x, ...h },
            values: m,
            ref: p,
          });
        })),
      (Px = A.createContext({})),
      (Fx = A.forwardRef(function ({ width: e, height: t, y: n, children: r, ...i }, a) {
        let o = A.useMemo(() => ({ width: e, height: t, y: n }), [e, t, n]),
          s = zc(a);
        return E(Px.Provider, { value: o, children: s(r, i) });
      })),
      (Ix = (e) =>
        A.forwardRef((t, n) =>
          E(e, { layoutId: qo(t), ...t, layoutIdKey: void 0, duplicatedFrom: void 0, ref: n })
        )),
      (Lx = {}),
      (Rx = () => Lx),
      (zx = (e) => {
        Lx = e;
      }),
      (Bx = !1),
      (Vx = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e, t) {
          if (!Cl(e)) return;
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
              st(
                `If you are the author of this website, update external components and check recently added custom code or code overrides.`
              )
          );
          let r = e instanceof Error && typeof e.stack == `string` ? e.stack : void 0;
          an(`published_site_load_recoverable_error`, {
            message: String(e),
            stack: r,
            componentStack: r ? void 0 : n,
          });
        }
        render() {
          let e = this.state.error;
          if (e === void 0) return this.props.children;
          if (!Cl(e)) throw e;
          return ((Bx = !0), this.props.children);
        }
      }),
      (Hx = f === void 0 ? null : new Promise(() => {})),
      (Ux = E(wl, {})),
      (Wx = O(!1)),
      (Wx.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
      (Gx = E(El, {})),
      (Kx = class extends b {
        state = { hasError: !1 };
        static getDerivedStateFromError() {
          return { hasError: !0 };
        }
        componentDidCatch(e, t) {
          (Ol(this.props.getErrorMessage(), t?.componentStack), Dl(e, t));
        }
        render() {
          let { children: e, fallback: t = Gx } = this.props,
            { hasError: n } = this.state;
          return n ? t : e;
        }
      }),
      (qx = class extends b {
        state = { hasError: !1 };
        componentDidCatch(e, t) {
          let n = t?.componentStack;
          (console.error(
            `Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
            n
          ),
            this.setState({ hasError: !0 }),
            Dl(e, t));
        }
        render() {
          let { children: e } = this.props,
            { hasError: t } = this.state;
          return t ? null : e;
        }
      }),
      (Jx = A.createContext(void 0)),
      (Yx = `code-crash:`),
      (Xx = Ix(
        A.forwardRef(function (
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
          let u = Aa(() => (t ? `${t}-container` : void 0)),
            d = Oo(n),
            f = Hl(
              A.Children.map(e, (e) =>
                A.isValidElement(e) ? A.cloneElement(e, { layoutId: t }) : e
              ),
              r,
              i,
              a,
              o,
              s
            );
          return E(d, {
            layoutId: u,
            ...c,
            ref: l,
            children: E(By.Provider, {
              value: !0,
              children: E(d_.Provider, {
                value: i ?? null,
                children: E(ka, {
                  enabled: !1,
                  children: E(Be, { id: t ?? ``, inherit: c.layout ? !0 : `id`, children: f }),
                }),
              }),
            }),
          });
        })
      )),
      (Qx = new Set()),
      ($x = O({ onRegisterCursors: () => () => {}, registerCursors: () => {} })),
      (eS = `framer-cursor-none`),
      (tS = `framer-pointer-events-none`),
      (nS = p(function ({ children: e }) {
        let t = Aa(() => {
            let e = new Set(),
              t = {},
              n = new Map();
            return {
              onRegisterCursors: (n) => (n(t), e.add(n), () => e.delete(n)),
              registerCursors: (r, i) => {
                (n.set(i, Object.keys(r)), (t = Jl(n, t, r)));
                for (let n of e) n(t);
                return () => {
                  n.delete(i);
                };
              },
            };
          }),
          n = ze();
        return w($x.Provider, { value: t, children: [e, !n && E(oS, {})] });
      })),
      (rS = uy(
        nS,
        [
          `.${eS}, .${eS} * { cursor: none !important; }`,
          `.${tS}, .${tS} * { pointer-events: none !important; }`,
        ],
        `framer-lib-cursors-host`
      )),
      (iS = { position: `fixed`, top: 0, left: 0, zIndex: 13, pointerEvents: `none` }),
      (aS = `data-framer-portal-id`),
      (oS = p(function () {
        let { onRegisterCursors: e } = t($x),
          n = ql(!1),
          r = be(0),
          a = be(0),
          o = be(0),
          s = _(null),
          c = _({ cursors: {}, cursorHash: void 0 }),
          l = Jo();
        (j(() => {
          if (!n) return;
          let e = 0,
            t = 0;
          function i() {
            (r.set(e), a.set(t), Ge(o, 1, { type: `tween`, duration: 0.2 }));
          }
          let u = () => {
            if (Ze(c.current.cursors)) return;
            let n = Ql(e, t);
            n !== c.current.cursorHash && ((c.current.cursorHash = n), We.update(() => l()));
          };
          function d(n) {
            if (n.pointerType === `touch`) {
              M(u);
              return;
            }
            (We.read(u, !0), (e = n.clientX), (t = n.clientY), We.update(i));
          }
          function f(e) {
            if (e.target === s.current || !s.current) return;
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
            We.update(() => {
              s.current?.dispatchEvent(t);
            });
          }
          return (
            W.addEventListener(`pointermove`, d),
            document.addEventListener(`pointerdown`, f),
            document.addEventListener(`pointerup`, f),
            We.read(u, !0),
            () => {
              (W.removeEventListener(`pointermove`, d),
                document.removeEventListener(`pointerdown`, f),
                document.removeEventListener(`pointerup`, f),
                M(u));
            }
          );
        }, [o, r, a, l, n]),
          j(() => {
            if (!n) return;
            function e() {
              Ge(o, 0, { type: `tween`, duration: 0.2 });
            }
            return (
              document.addEventListener(`mouseleave`, e),
              W.addEventListener(`blur`, e),
              () => {
                (document.removeEventListener(`mouseleave`, e), W.removeEventListener(`blur`, e));
              }
            );
          }, [o, n]),
          i(() => {
            function t(e) {
              ((c.current.cursors = e),
                (c.current.cursorHash = Ze(e) ? null : Ql(r.get(), a.get())),
                l());
            }
            let n = e(t);
            return () => {
              (n(), document.body.classList.toggle(eS, !1));
            };
          }, [r, a, e, l]));
        let { cursors: d, cursorHash: f } = c.current,
          p = f ? d[f] : null,
          m = Yl(p);
        i(() => {
          n && document.body.classList.toggle(eS, m);
        }, [m, n]);
        let h = p?.component,
          g = p?.transition ?? { duration: 0 },
          v = g.duration === void 0 ? g : { ...g, duration: g.duration * 1e3 },
          y = xe(r, v),
          b = xe(a, v),
          S = Ce(() => y.get() + (p?.offset?.x ?? 0)),
          C = Ce(() => b.get() + (p?.offset?.y ?? 0)),
          w = p?.alignment,
          T = p?.placement,
          D = u((e, t) => `translate(${Zl(T, w)}) ${t}`, [w, T]);
        return !n || !p || !h
          ? null
          : E(x, {
              children: E(h, {
                transformTemplate: D,
                style: { ...iS, x: S, y: C, opacity: o },
                globalTapTarget: !0,
                variant: p?.variant,
                ref: s,
                className: tS,
              }),
            });
      })),
      (sS = `webPageId`),
      (cS = class {
        collectedLinks = new Map();
        nestingInfo = new Map();
        clear() {
          (this.collectedLinks.clear(), this.nestingInfo.clear());
        }
        getLinks() {
          let e = new Map();
          for (let [t, n] of this.nestingInfo) {
            let r = this.collectedLinks.get(t);
            R(r, `Outer link not found: ${t}`);
            let i = Array.from(n).map((e) => {
              let t = this.collectedLinks.get(e);
              return (R(t, `Inner link not found: ${e}`), t);
            });
            e.set(r, i);
          }
          return e;
        }
        collectNestedLink(e, t) {
          if ((Th && !On()) || !e.nodeId || !t.nodeId) return;
          (this.collectedLinks.set(tu(e), e), this.collectedLinks.set(tu(t), t));
          let n = this.nestingInfo.get(tu(e)) ?? new Set();
          (n.add(tu(t)), this.nestingInfo.set(tu(e), n));
        }
      }),
      (lS = new cS()),
      (uS = `element`),
      (dS = `collection`),
      (fS = `collectionItemId`),
      (pS = `pathVariables`),
      (mS = `framer/page-link,`),
      (hS = O(void 0)),
      (gS = `overlay`),
      (_S = `template-overlay`),
      (vS = class extends b {
        state = { error: void 0 };
        message = `Made UI non-interactive due to an error.`;
        messageFatal = `Fatal error.`;
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        componentDidCatch(e) {
          if (
            ((f.__framer_hadFatalError = !0),
            `cause` in e && (e = e.cause),
            console.error(st(Eh ? this.message : this.messageFatal, e)),
            Math.random() > 0.5)
          )
            return;
          let t = e instanceof Error && typeof e.stack == `string` ? e.stack : null;
          an(`published_site_load_error`, { message: String(e), stack: t });
        }
        render() {
          let e = this.state.error;
          if (!e) return this.props.children;
          let t = `cause` in e ? e.cause : e,
            n = /-->/gu,
            r = (Eh && document.getElementById(`main`)?.innerHTML) || ``;
          return E(`div`, {
            style: { display: `contents` },
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: {
              __html:
                `<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${st()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
                r,
            },
          });
        }
      }),
      (bS = /:([a-z]\w*)/gi),
      (xS = O(void 0)),
      (SS = new Map()),
      (CS = 500),
      (wS = 500),
      (ES = !1),
      (DS = 500),
      (OS = 0.9),
      (kS = 1.7),
      (AS = 4),
      (jS = 1 / 0),
      (MS = new WeakMap()),
      (NS = new Set()),
      (PS = new Map()),
      (FS = !Jg || typeof IntersectionObserver > `u` ? null : Ru()),
      (IS = bu(
        D(function (
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
          let f = Ot(),
            p = At(),
            m = wu(),
            { activeLocale: h, locales: g } = Kn(),
            _ = Wu(),
            v = qn(),
            y = nu(),
            b = Gu({ nodeId: s, clickTrackingId: i, router: f, href: t, activeLocale: h }),
            x = C(() => {
              if (!t) return {};
              let e = eu(t) ? t : lu(t);
              if (!e) return {};
              if (F(e))
                return td(
                  e,
                  f,
                  p,
                  {
                    openInNewTab: n,
                    trackLinkClick: b,
                    rel: a?.join(` `),
                    preserveParams: o,
                    smoothScroll: r,
                  },
                  v,
                  h?.id,
                  g,
                  m
                );
              let { unresolvedPathSlugs: i, unresolvedHashSlugs: s } = e,
                c = _(i, s, h);
              if (it(c)) throw c;
              let {
                  routeId: l,
                  href: u,
                  elementId: d,
                  pathVariables: y,
                  locale: x,
                } = xu(f, p, e, h, c, m),
                S = Bu(n, !0),
                C = S === `_blank`,
                w = ed(u, C, f.siteCanonicalURL),
                T = { pathVariables: y, locale: x },
                E = Yu(u, w, (e) =>
                  qu(
                    f,
                    l,
                    () =>
                      v(l, T, {
                        priority: `user-blocking`,
                        yieldBeforePreload: !1,
                        shouldLoadRouteData: !C,
                      }),
                    d,
                    y,
                    r,
                    e
                  )
                );
              return {
                href: u,
                target: S,
                onClick: Ju(u, b, E),
                "data-framer-page-link-current": (p && Tu(p, e, m)) || void 0,
                navigate: E,
                preload: () =>
                  v(l, T, {
                    priority: `background`,
                    yieldBeforePreload: !0,
                    shouldLoadRouteData: !C,
                  }),
                _routeId: l,
                _pathVariables: y,
                _locale: x,
                _navigationUrl: w,
              };
            }, [t, f, h, m, n, p, r, b, a, g, o, _, v]),
            S = As(T(e) && `ref` in e ? e.ref : void 0),
            {
              navigate: w,
              preload: E,
              _routeId: D,
              _pathVariables: ee,
              _locale: O,
              _navigationUrl: te,
              ...k
            } = x;
          js(
            S,
            (e) => {
              if (!(e === null || !D || !E || !te || y))
                return FS?.(e, E, `${D}:${O?.id}:${JSON.stringify(ee)}`, te);
            },
            [E, D, ee, O, te, y]
          );
          let A = !!w;
          return du(
            zc(d).cloneAsArray(e, (e) => nd(e, { ...u, ...id(k, l, A) }, S)),
            c,
            s,
            t,
            x,
            S
          );
        })
      )),
      (LS = A.createContext(void 0)),
      (RS = `__framer_force_showing_editorbar_since`),
      (zS = class extends b {
        state = { error: void 0 };
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }),
      (BS = () => {
        try {
          return !!localStorage[RS];
        } catch {
          return !1;
        }
      }),
      (VS = () => !BS()),
      (HS = (() => {
        let e = O(void 0);
        return ((e.displayName = `TriggerStateContext`), e);
      })()),
      (US = null),
      (WS = null),
      Oh(dd),
      (GS = (e, n, r, i, a, o) => {
        let s = t(LS),
          c = _(),
          l = hn(),
          u = _(!0);
        return (
          j(() => {
            function t() {
              (!US || !WS) && dd();
              let t = r ? new URL(r, W.location.href) : W.location,
                c = {
                  version: fg,
                  abTestId: e?.abTestId,
                  framerSiteId: s ?? null,
                  webPageId: e?.abTestingVariantId ?? n,
                  routePath: e?.path || `/`,
                  collectionItemId: null,
                  framerLocale: a?.code || null,
                  referrer: null,
                  url: t.href,
                  hostname: t.hostname,
                  pathname: t.pathname,
                  search: t.search || null,
                  hash: t.hash || null,
                  timezone: US,
                  locale: WS,
                },
                d = u.current && o !== void 0 ? o : void 0;
              return e?.collectionId && i
                ? (async () => {
                    let t = d ?? null;
                    if (d === void 0) {
                      let n = e.collectionId && l?.get(e.collectionId),
                        [r] = Object.values(i);
                      if (n && F(r)) {
                        let e = n.getRecordIdBySlug(r, a || void 0);
                        t = (it(e) ? await e : e) ?? null;
                      }
                    }
                    return { ...c, collectionItemId: t };
                  })()
                : c;
            }
            (async () => {
              let e = (c.current = t()),
                n = e instanceof Promise ? await e : e;
              ((c.current = n),
                u.current ? (u.current = !1) : an(`published_site_pageview`, n, `eager`));
            })();
            let d = async (e) => {
              if (e.persisted) {
                let e = (c.current = t()),
                  n = e instanceof Promise ? await e : e;
                ((c.current = n), an(`published_site_pageview`, n, `eager`));
              }
            };
            return (
              f.addEventListener(`pageshow`, d),
              () => {
                f.removeEventListener(`pageshow`, d);
              }
            );
          }, [e, n, r, i, a, s, l, o]),
          c
        );
      }),
      (KS = 0),
      (qS = 500),
      (JS = 200),
      (YS = `main`),
      (XS = `framerGeneratedPage`),
      (ZS = `<!-- Start of headStart -->`),
      (QS = `<!-- End of headStart -->`),
      ($S = `<!-- Start of headEnd -->`),
      (eC = `<!-- End of headEnd -->`),
      (tC = `<!-- Start of bodyStart -->`),
      (nC = `<!-- End of bodyStart -->`),
      (rC = `<!-- Start of bodyEnd -->`),
      (iC = `<!-- End of bodyEnd -->`),
      (aC = A.createContext(void 0)),
      (oC = { status: `loading`, data: void 0 }),
      (sC = 5e3),
      (cC = () => {}),
      (lC = class e {
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
          let t = af(e),
            n = this.#a.get(t);
          n && (clearInterval(n), this.#a.delete(t));
        }
        startQueryRefetching(e) {
          let t = af(e),
            n = this.#a.get(t),
            r = this.#n.get(t);
          if (n || !r) return;
          let i = W.setInterval(() => {
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
              lf(r, i) ||
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
        persistCache = Fc(() => {
          let t = {};
          for (let [e, n] of this.responseValues) {
            if (!n || n.status !== `success`) continue;
            let r = this.#n.get(e);
            if (!r || r === 0) continue;
            let i = this.#r.get(e);
            i && ((i && lf(i, r)) || (t[e] = [i, r, n.data]));
          }
          try {
            localStorage.setItem(e.cacheKey, JSON.stringify(t));
          } catch {}
        }, 500);
        async prefetch(e) {
          if (!Tn() || !iu(e.url, !1)) return;
          let t = af(e);
          (this.#t.add(t), await this.fetchWithCache(e));
          let n = this.getValue(t);
          if (!n || n.status === `loading`) throw Error(`Unexpected result status for prefetch`);
          let r = this.#e.get(t);
          for (let e of r ?? []) e();
          let i = cf(n, e);
          return (e.resultOutputType === `image` && F(i) && (await tf(i).catch(cC)), i);
        }
        async fetchWithCache(e) {
          if (!Tn()) return;
          let t = af(e),
            n = this.#i.get(t);
          if (n) return n;
          let r = this.#r.get(t),
            i = r && lf(r, e.cacheDuration);
          if (this.responseValues.has(t) && !i) return;
          this.responseValues.get(t) || this.setResponseValue(t, oC);
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
          if (!iu(r, !1)) return cC;
          let a = af(e),
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
      (uC = O(void 0)),
      (dC = O(!0)),
      (fC = ({ children: e, client: t }) => {
        let [n] = h(() => t ?? new lC()),
          [r, i] = h(!0);
        return (
          j(
            () => (
              n.hydrateCache(),
              l(() => {
                i(!1);
              }),
              () => n.unmount()
            ),
            [n]
          ),
          E(dC.Provider, { value: r, children: E(uC.Provider, { value: n, children: e }) })
        );
      }),
      (pC = (() => {
        let e = O(void 0);
        return ((e.displayName = `ServerDatabaseClientContext`), e);
      })()),
      (Le.WillChange = He),
      (mC = { priority: void 0, canYield: !0 }),
      (X = {
        cast(e, t) {
          switch (t.type) {
            case `array`:
              return kf(e, t);
            case `boolean`:
              return jf(e);
            case `color`:
              return Pf(e);
            case `date`:
              return If(e);
            case `enum`:
              return Rf(e);
            case `file`:
              return Bf(e);
            case `link`:
              return Hf(e);
            case `number`:
              return Wf(e);
            case `object`:
              return qf(e, t);
            case `responsiveimage`:
              return Yf(e);
            case `richtext`:
              return Zf(e);
            case `string`:
              return tp(e);
            case `vectorsetitem`:
              return $f(e);
            case `unknown`:
              return e;
            default:
              z(t, `Unsupported cast`);
          }
        },
        parse(e) {
          return Ye(e)
            ? { type: `boolean`, value: e }
            : tt(e)
              ? { type: `date`, value: e.toISOString() }
              : I(e)
                ? { type: `number`, value: e }
                : F(e)
                  ? { type: `string`, value: e }
                  : Xe(e)
                    ? { type: `array`, value: e.map(X.parse) }
                    : null;
        },
        equal(e, t, n) {
          return e?.type === t?.type && rp(e, t, n) === 0;
        },
        lessThan(e, t, n) {
          return e?.type === t?.type && rp(e, t, n) < 0;
        },
        lessThanOrEqual(e, t, n) {
          return e?.type === t?.type && rp(e, t, n) <= 0;
        },
        greaterThan(e, t, n) {
          return e?.type === t?.type && rp(e, t, n) > 0;
        },
        greaterThanOrEqual(e, t, n) {
          return e?.type === t?.type && rp(e, t, n) >= 0;
        },
        in(e, t, n) {
          return t?.type === `array` && t.value.some((t) => X.equal(t, e, n));
        },
        indexOf(e, t, n) {
          return e?.type === `array` ? e.value.findIndex((e) => X.equal(e, t, n)) : -1;
        },
        contains(e, t, n) {
          let r = np(e),
            i = np(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.includes(i));
        },
        startsWith(e, t, n) {
          let r = np(e),
            i = np(t);
          return $e(r) || $e(i)
            ? !1
            : (n.type === 0 && ((r = r.toLowerCase()), (i = i.toLowerCase())), r.startsWith(i));
        },
        endsWith(e, t, n) {
          let r = np(e),
            i = np(t);
          return $e(r) || $e(i)
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
              return `[${e.value.map(X.stringify).join(`, `)}]`;
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
              return F(e.value) ? `'${e.value}' /* Link */` : `Link`;
            case `object`:
              return `Object`;
            default:
              z(e);
          }
        },
      }),
      (hC = { type: `unknown`, isNullable: !0 }),
      (gC = class {
        constructor(e, t) {
          ((this.collection = e), (this.locale = t));
          let n = kc(e);
          R(n, `Collection does not have properties`);
          let r = { id: { type: `string`, isNullable: !1 } },
            i = Object.entries(n);
          for (let [e, t] of i) {
            if (!t) continue;
            let n = t.type;
            (R(n !== `array`, `Array properties are not supported`),
              R(n !== `object`, `Object properties are not supported`),
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
            if (et(i)) continue;
            let a = this.schema[t];
            if (!Qe(a)) {
              if ((R(a.type !== `unknown`, `Invalid definition type`), a.type === `richtext`)) {
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
            r = (await ip(this.collection, this.locale))[t]?.[n];
          return Gh.is(r) ? r.readMaybeAsync() : r;
        }
        async scanItems(e) {
          let t = await ip(this.collection, this.locale),
            n = [];
          for (let r = 0; r < t.length; r++) {
            let i = gf(e);
            i && (await i);
            let a = t[r];
            R(a, `Can't find collection item`);
            let o = String(r);
            n.push(this.getDatabaseItem(a, o));
          }
          return n;
        }
        async resolveItems(e, t) {
          let n = await ip(this.collection, this.locale),
            r = [];
          for (let i of e) {
            let e = gf(t);
            e && (await e);
            let a = n[Number(i)];
            (R(a, `Can't find collection item`), r.push(this.getDatabaseItem(a, i)));
          }
          return r;
        }
        compareItems(e, t) {
          return Number(e.pointer) - Number(t.pointer);
        }
      }),
      (_C = new Map()),
      (vC = new WeakMap()),
      (yC = `$r_`),
      (bC = new Map()),
      (xC = class {
        collections;
        priority;
        constructor(e, t, n) {
          ((this.collections = hp(e, t)), (this.priority = up(n)));
        }
        *resolveArrayValue(e) {
          return yield* bf(e.value.map((e) => this.resolveValue(e)));
        }
        *resolveObjectValue(e) {
          let t = {};
          for (let n in e.value) {
            let r = e.value[n];
            t[n] = this.resolveValue(r);
          }
          return yield* H(t);
        }
        richTextCache = new WeakMap();
        loadRichTextValue(e) {
          let t = e.value;
          R(fp(t), `Rich text pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          R(n, `Can't find collection for rich text pointer`);
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
          return rt(t) ? yield t : t;
        }
        vectorSetItemCache = new WeakMap();
        loadVectorSetItemValue(e) {
          let t = e.value;
          R(mp(t), `Vector set item pointer must be wrapped`);
          let n = this.collections.get(t.collectionId);
          (R(n, `Can't find collection for vector set item pointer`),
            R(n.resolveVectorSetItem, `Can't resolve vector set item pointer`));
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
          return rt(t) ? yield t : t;
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
      (SC = `index`),
      (CC = class extends Set {
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
          return (e.sort((e, t) => e - t), U(this.name, ...e));
        }
      }),
      (wC = class {
        constructor(e, t, n) {
          ((this.id = e), (this.name = t), (this.data = n));
        }
        id;
        name;
        data;
        indexes = new EC();
        fields = new Z();
        fieldByName = new Map();
        addNamedField(e, t) {
          (this.fields.add(t), this.fieldByName.set(e, t));
        }
        getFieldByName(e) {
          return this.fieldByName.get(e);
        }
      }),
      (TC = class {
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
        resolvedFields = new Z();
      }),
      (EC = class extends CC {
        name = `Indexes`;
      }),
      (DC = class {
        constructor(e, t, n, r) {
          ((this.id = e), (this.name = t), (this.definition = n), (this.collection = r));
        }
        id;
        name;
        definition;
        collection;
        getValue(e) {
          R(this.name, `Can only get value of field with a name`);
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
                R(this.collection, `Rich text field must have a collection`),
                { type: `richtext`, value: dp(this.collection.data, e.value) }
              );
            case `vectorsetitem`:
              return (
                R(this.collection, `Vector set item field must have a collection`),
                { type: `vectorsetitem`, value: pp(this.collection.data, e.value) }
              );
          }
          return e;
        }
      }),
      (Z = class extends CC {
        name = `Fields`;
      }),
      (OC = class {
        constructor(e, t = `asc`) {
          ((this.field = e), (this.direction = t));
        }
        field;
        direction;
        getHash() {
          return U(`OrderingField`, this.field.id, this.direction);
        }
      }),
      (kC = class {
        fields = [];
        constructor(e) {
          e && this.merge(e);
        }
        get length() {
          return this.fields.length;
        }
        getHash() {
          return U(`Ordering`, ...this.fields);
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
          for (let { field: t } of this.fields) if (!e.has(t) && t.name !== SC) return !1;
          return !0;
        }
      }),
      (AC = class {
        constructor(e, t) {
          ((this.ordering = e), (this.resolvedFields = t));
        }
        ordering;
        resolvedFields;
        getHash() {
          return U(`RequiredProps`, this.ordering, this.resolvedFields);
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
      (jC = class e {
        constructor(e) {
          this.parent = e;
        }
        parent;
        node;
        takeNode() {
          let e = this.node;
          return (R(e, `Node is missing`), (this.node = void 0), e);
        }
        setNode(e) {
          (R(!this.node, `Node already set`), (this.node = e));
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
          return this.ordering ?? new kC();
        }
        getRequiredResolvedFields() {
          let e = new Z();
          for (let { field: t } of this.fields) t.collection && e.add(t);
          return e;
        }
        getRequiredProps() {
          return new AC(this.getRequiredOrdering(), this.getRequiredResolvedFields());
        }
        getNamedFields() {
          let e = {};
          for (let { name: t, field: n } of this.fields) e[t] = n;
          return e;
        }
        getSingleField() {
          R(this.fields.length === 1, `Scope must contain exactly one field`);
          let e = this.fields[0];
          return (R(e, `Field must exist`), e.field);
        }
      }),
      (MC = 1e3),
      (Q = class e {
        constructor(e) {
          this.network = e;
        }
        network;
        static estimate(t, n) {
          let r = yp(),
            i = bp(),
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
      (NC = class {
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
      (PC = class e {
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
      (FC = class {
        constructor(e) {
          this.isSynchronous = e;
        }
        isSynchronous;
      }),
      (IC = class extends FC {
        group;
        getGroup() {
          return (R(this.group, `Node must be in a group`), this.group);
        }
        setGroup(e) {
          (R(!this.group, `Node is already in a group`), (this.group = e));
        }
        evaluateSync() {
          return _f(this.evaluate(void 0));
        }
        evaluateAsync(e) {
          return vf(this.evaluate(void 0), void 0, e);
        }
      }),
      (LC = class {
        constructor(e, t) {
          ((this.input = e), (this.field = t));
        }
        input;
        field;
        getHash() {
          return U(`ProjectionField`, this.input, this.field.id);
        }
      }),
      (RC = class e extends IC {
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
          return U(`RelationalProject`, this.inputGroup.id, ...this.projections, this.passthrough);
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
          return new AC(e.ordering, t);
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
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.projections.map((e) => new LC(e.input.getOptimized(), e.field));
          return new e(r, i, this.passthrough);
        }
        *evaluate(e) {
          let t = this.getOutputFields(),
            n = yield* this.input.evaluate(e),
            r = yield* bf(
              n.tuples.map((t) =>
                bf(
                  this.projections.map((n) => H({ field: n.field, value: n.input.evaluate(e, t) }))
                )
              )
            );
          return n.map(t, (e, t) => {
            let n = new NC();
            n.mergePointers(e);
            for (let t of this.passthrough) {
              let r = e.getValue(t);
              n.addValue(t, r);
            }
            let i = r[t];
            R(i, `Projections must exist`);
            for (let { field: e, value: t } of i) n.addValue(e, t);
            return n;
          });
        }
      }),
      (zC = { type: 0 }),
      ($ = class extends FC {
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
          return _f(this.evaluate(void 0, void 0));
        }
        evaluateAsync() {
          return vf(this.evaluate(void 0, void 0));
        }
      }),
      (BC = { type: 0 }),
      (VC = class {
        constructor(e, t) {
          ((this.when = e), (this.then = t));
        }
        when;
        then;
        getHash() {
          return U(`CaseCondition`, this.when, this.then);
        }
      }),
      (HC = class e extends $ {
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
            (this.otherwise = n));
        }
        input;
        conditions;
        otherwise;
        definition = { type: `unknown`, isNullable: !0 };
        getHash() {
          return U(`ScalarCase`, this.input, ...this.conditions, this.otherwise);
        }
        optimize(e) {
          this.input?.optimize(e);
          for (let t of this.conditions) (t.when.optimize(e), t.then.optimize(e));
          return (this.otherwise?.optimize(e), new Q(0));
        }
        getOptimized() {
          let t = this.input?.getOptimized(),
            n = this.conditions.map((e) => new VC(e.when.getOptimized(), e.then.getOptimized())),
            r = this.otherwise?.getOptimized();
          return new e(t, n, r);
        }
        *evaluate(e, t) {
          let {
            input: n,
            conditions: r,
            otherwise: i,
          } = yield* H({
            input: this.input?.evaluate(e, t) ?? null,
            conditions: bf(
              this.conditions.map((n) =>
                H({ when: n.when.evaluate(e, t), then: n.then.evaluate(e, t) })
              )
            ),
            otherwise: this.otherwise?.evaluate(e, t) ?? null,
          });
          if (this.input) {
            for (let { when: e, then: t } of r) if (X.equal(n, e, BC)) return t;
          } else for (let { when: e, then: t } of r) if (Mf(e)) return t;
          return i;
        }
      }),
      (UC = class {
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
          let e = new jC();
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
            o = new kC();
            for (let e of t.orderBy)
              if (e.type === `Identifier`) {
                let t = n.resolveField(e.name, e.collection);
                if (Qe(t)) continue;
                a.add(t.field);
                let r = new OC(t.field, e.direction);
                o.push(r);
              } else {
                let t = this.buildExpression(n, e),
                  r = new DC(vp(this.fieldId++), void 0, t.definition, void 0),
                  a = new LC(t, r);
                i.push(a);
                let s = new OC(r, e.direction);
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
              if (Qe(t)) continue;
              (a.add(t.field), i.addField({ ...t, name: n.alias ?? t.name }));
            } else {
              let t = this.buildExpression(e, n);
              R(n.alias, `Subqueries should have an alias`);
              let r = vp(this.fieldId++),
                a = n.alias,
                s = new DC(r, a, t.definition, void 0),
                c = new LC(t, s);
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
              z(t, `Unsupported from type`);
          }
        }
        buildCollection(e, t) {
          let n = e.push(),
            r = sp(t.data, this.locale),
            i = t.alias,
            a = new wC(gp(this.collectionId++), i, r);
          for (let [e, t] of Object.entries(r.schema)) {
            let r = new DC(vp(this.fieldId++), e, t, a);
            (n.addField({ field: r, name: e, collectionName: i }), a.addNamedField(e, r));
          }
          {
            let e = new DC(vp(this.fieldId++), SC, { type: `number`, isNullable: !1 }, a);
            n.addField({ field: e, name: SC, collectionName: i });
            let t = new kC(),
              r = new OC(e);
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
            let i = new kC(),
              o = new TC(_p(this.indexId++), e, a, t, r, i);
            a.indexes.add(o);
          }
          let o = this.normalizer.newRelationalScan(a);
          return (n.setNode(o), n);
        }
        buildJoin(e, t) {
          let n = this.buildFrom(e, t.left),
            r = this.buildFrom(e, t.right),
            i = new kC(),
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
              z(t.type, `Unsupported join type`);
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
              z(t, `Unsupported expression`);
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
          return this.normalizer.newScalarConstant(hC, null);
        }
        buildLiteralValue(e) {
          let t = X.parse(e.value);
          return this.normalizer.newScalarConstant(hC, t);
        }
        buildFunctionCall(e, t) {
          let n = (n) => {
              let r = t.arguments[n];
              return (R(r, `Missing argument`), this.buildExpression(e, r));
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
                R(n, `Missing argument`),
                R(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryArray(e, n)
              );
            }
            case `FLAT_ARRAY`: {
              let n = t.arguments[0];
              return (
                R(n, `Missing argument`),
                R(n.type === `Select`, `Subqueries require a select expression`),
                this.buildSubqueryFlatArray(e, n)
              );
            }
            case `INTERSECT`: {
              let e = n(0),
                t = n(1);
              return this.normalizer.newScalarIntersection(e, t);
            }
            default:
              z(r, `Unsupported function name`);
          }
        }
        buildSubqueryArray(e, t) {
          try {
            let n = new WC(e);
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
            let n = new WC(e);
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
              (t) => new VC(this.buildExpression(e, t.when), this.buildExpression(e, t.then))
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
              z(t.operator, `Unsupported unary operator`);
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
              z(t.operator, `Unsupported binary operator`);
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
      (WC = class {
        constructor(e) {
          this.inScope = e;
        }
        inScope;
        referencedFields = new Z();
        referencedOuterFields = new Z();
      }),
      (GC = class e extends IC {
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
          return U(`RelationalFilter`, this.inputGroup.id, this.predicate);
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
          return (t.merge(this.predicate.referencedFields), new AC(e.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.predicate.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.predicate.getOptimized();
          return new e(r, i);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e),
            n = yield* bf(t.tuples.map((t) => this.predicate.evaluate(e, t)));
          return t.filter((e, t) => Mf(n[t] ?? null));
        }
      }),
      (KC = class e extends IC {
        constructor(e, t) {
          (super(!1), (this.index = e), (this.query = t));
        }
        index;
        query;
        getHash() {
          return U(`RelationalIndexLookup`, this.index.id, ...this.query);
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
          return Q.estimate(1, e ? 100 * MC : 50 * MC);
        }
        getOptimized() {
          return new e(this.index, this.query);
        }
        *evaluate() {
          let e = this.index,
            t = e.collection,
            n = this.getOutputFields(),
            r = yield e.data.lookupItems(this.query, mf()),
            i = mf(),
            a = [];
          for (let n of r) {
            let r = gf(i);
            r && (yield r);
            let o = new NC();
            for (let r of e.resolvedFields) {
              let e = r.getValue(n);
              (o.addPointer(t, n.pointer), o.addValue(r, e));
            }
            a.push(o);
          }
          return new PC(n, a);
        }
      }),
      (qC = class e extends IC {
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
          return U(`RelationalIntersection`, this.leftGroup.id, this.rightGroup.id);
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
          return new AC(new kC(), e.resolvedFields);
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
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* H({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.intersection(n);
        }
      }),
      (JC = class e extends IC {
        constructor(e) {
          (super(!1), (this.collection = e));
        }
        collection;
        getHash() {
          return U(`RelationalScan`, this.collection.id);
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
          return Q.estimate(1, 200 * MC);
        }
        getOptimized() {
          return new e(this.collection);
        }
        *evaluate() {
          let e = this.collection,
            t = this.getOutputFields(),
            n = yield e.data.scanItems(mf()),
            r = mf(),
            i = [];
          for (let a of n) {
            let n = gf(r);
            n && (yield n);
            let o = new NC();
            for (let n of t) {
              let t = n.getValue(a);
              (o.addPointer(e, a.pointer), o.addValue(n, t));
            }
            i.push(o);
          }
          return new PC(t, i);
        }
      }),
      (YC = class e extends IC {
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
          return U(`RelationalUnion`, this.leftGroup.id, this.rightGroup.id);
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
          return new AC(new kC(), e.resolvedFields);
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
            i = this.getChildRequiredProps(t),
            a = this.rightGroup.getOptimized(i);
          return new e(r, a);
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* H({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          return t.union(n);
        }
      }),
      (XC = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarAnd`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Mf(n) && Mf(r) };
        }
      }),
      (ZC = class extends $ {
        constructor(e, t) {
          let n = new Z(),
            r = new Z();
          (super(n, r, !0), (this.definition = e), (this.value = t));
        }
        definition;
        value;
        getHash() {
          return U(`ScalarConstant`, this.definition, this.value);
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
      (QC = { type: 0 }),
      ($C = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarContains`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* H({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.contains(n, r, QC) };
        }
      }),
      (ew = { type: 0 }),
      (tw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarEndsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* H({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.endsWith(n, r, ew) };
        }
      }),
      (nw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.equal(n, r, zC) };
        }
      }),
      (rw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarGreaterThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.greaterThan(n, r, zC) };
        }
      }),
      (iw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarGreaterThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.greaterThanOrEqual(n, r, zC) };
        }
      }),
      (aw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarLessThan`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.lessThan(n, r, zC) };
        }
      }),
      (ow = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarLessThanOrEqual`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.lessThanOrEqual(n, r, zC) };
        }
      }),
      (sw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarNotEquals`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !X.equal(n, r, zC) };
        }
      }),
      (cw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarOr`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: Mf(n) || Mf(r) };
        }
      }),
      (lw = { type: 0 }),
      (uw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarStartsWith`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* H({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `boolean`, value: X.startsWith(n, r, lw) };
        }
      }),
      (dw = class {
        constructor(e) {
          ((this.normalizer = e), (this.memo = e.memo));
        }
        normalizer;
        memo;
        explore(e) {
          let t = e.getGroup();
          if (e instanceof GC) {
            if (e.predicate instanceof XC) {
              let n = new qC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
            if (e.predicate instanceof cw) {
              let n = new YC(
                this.normalizer.newRelationalFilter(e.input, e.predicate.left),
                this.normalizer.newRelationalFilter(e.input, e.predicate.right)
              );
              this.memo.addRelational(n, t);
            }
          }
          if (e instanceof JC)
            for (let n of e.collection.indexes) {
              if (n.constraint) continue;
              let e = new KC(n, xp(n.lookupNodes.length));
              this.memo.addRelational(e, t);
            }
          if (e instanceof GC) {
            for (let n of e.inputGroup.nodes)
              if (n instanceof JC)
                for (let r of n.collection.indexes) {
                  if (
                    e.predicate instanceof nw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`Equals`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `Equals`, value: e.predicate.right.value };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof sw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`NotEquals`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `NotEquals`, value: e.predicate.right.value };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof aw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof ow &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`LessThan`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `LessThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof rw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !1 };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof iw &&
                    e.predicate.left === r.lookupNodes[0] &&
                    e.predicate.right instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`GreaterThan`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `GreaterThan`, value: e.predicate.right.value, inclusive: !0 };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof $C &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`Contains`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `Contains`, value: e.predicate.target.value };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof uw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`StartsWith`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `StartsWith`, value: e.predicate.target.value };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                  if (
                    e.predicate instanceof tw &&
                    e.predicate.source === r.lookupNodes[0] &&
                    e.predicate.target instanceof ZC &&
                    r.data.supportedLookupTypes.includes(`EndsWith`)
                  ) {
                    let n = xp(r.lookupNodes.length);
                    n[0] = { type: `EndsWith`, value: e.predicate.target.value };
                    let i = new KC(r, n);
                    this.memo.addRelational(i, t);
                  }
                }
          }
        }
      }),
      (fw = class {
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
          let r = new pw();
          return (this.winners.set(t, r), r);
        }
        getOptimized(e) {
          let t = this.getWinner(e);
          R(t.node, `Group not optimized`);
          let n = t.node.getOptimized(e);
          return (n.setGroup(this), n);
        }
      }),
      (pw = class {
        node;
        cost = new Q(1 / 0);
        nodes = [];
        update(e, t) {
          (this.nodes.push(e), Q.compare(t, this.cost) < 0 && ((this.node = e), (this.cost = t)));
        }
      }),
      (mw = class {
        constructor(e) {
          this.outputFields = e;
        }
        outputFields;
        isCompatible(e) {
          return this.outputFields.equals(e.outputFields);
        }
      }),
      (hw = class {
        nodes = new Map();
        groups = [];
        addGroup(e) {
          let t = new fw(Sp(this.groups.length), e);
          return (this.groups.push(t), t);
        }
        addRelational(e, t) {
          let n = e.getHash(),
            r = this.nodes.get(n);
          if (r) return r;
          this.nodes.set(n, e);
          let i = new mw(e.getOutputFields());
          return (
            (t ??= this.addGroup(i)),
            t.addNode(e),
            R(i.isCompatible(t.relational), `Group has inconsistent relational props`),
            e
          );
        }
        addScalar(e) {
          let t = e.getHash();
          return this.nodes.get(t) || (this.nodes.set(t, e), e);
        }
      }),
      (gw = class e extends IC {
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
          return U(`RelationalLeftJoin`, this.leftGroup.id, this.rightGroup.id, this.constraint);
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
          return new AC(new kC(), n);
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
          let o = new PC(this.getOutputFields());
          for (let t of e.tuples) {
            let e = yield* n.evaluate(i, t),
              r = JSON.stringify(e?.value ?? null),
              s = a.get(r) ?? [];
            if (s.length === 0) o.push(t);
            else
              for (let e of s) {
                let n = new NC();
                (n.merge(t), n.merge(e), o.push(n));
              }
          }
          return o;
        }
        *evaluate(e) {
          let { left: t, right: n } = yield* H({
            left: this.left.evaluate(e),
            right: this.right.evaluate(e),
          });
          if (this.constraint instanceof nw) {
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
          let r = new PC(this.getOutputFields());
          for (let i of t.tuples) {
            let t = !1;
            for (let a of n.tuples) {
              let n = new NC();
              (n.merge(i),
                n.merge(a),
                Mf(yield* this.constraint.evaluate(e, n)) && (r.push(n), (t = !0)));
            }
            t || r.push(i);
          }
          return r;
        }
      }),
      (_w = class e extends IC {
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
          return U(`RelationalLimit`, this.inputGroup.id, this.limit);
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
          return (t.merge(this.limit.referencedFields), new AC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.limit.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.limit.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, limit: n } = yield* H({
              input: this.input.evaluate(e),
              limit: this.limit.evaluate(e, void 0),
            }),
            r = Gf(n) ?? 1 / 0;
          return r === 1 / 0 ? t : t.slice(0, r);
        }
      }),
      (vw = class e extends IC {
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
          return U(`RelationalOffset`, this.inputGroup.id, this.offset);
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
          return (t.merge(this.offset.referencedFields), new AC(this.ordering, t));
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n),
            i = this.offset.optimize(e);
          return new Q(0).add(Q.max(r, i));
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n),
            i = this.offset.getOptimized();
          return new e(r, i, this.ordering);
        }
        *evaluate(e) {
          let { input: t, offset: n } = yield* H({
              input: this.input.evaluate(e),
              offset: this.offset.evaluate(e, void 0),
            }),
            r = Gf(n) ?? 0;
          return r === 0 ? t : t.slice(r);
        }
      }),
      (yw = class e extends $ {
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
          return U(
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
          for (let n of t) Qe(n.collection) || e.add(n);
          return new AC(this.ordering, e);
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
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
          let n = new NC();
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
      (bw = class e extends $ {
        constructor(e, t) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous),
            (this.input = e),
            (this.definition = t),
            R(t.isNullable, `Unsupported non-nullable cast`));
        }
        input;
        definition;
        getHash() {
          return U(`ScalarCast`, this.input, this.definition);
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
          return X.cast(n, this.definition);
        }
      }),
      (xw = class e extends $ {
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
          return U(
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
          return (Qe(this.field.collection) || e.add(this.field), new AC(this.ordering, e));
        }
        optimize(e) {
          let t = this.getInputRequiredProps(),
            n = e.optimizeGroup(this.inputGroup, t);
          return new Q(0).add(n);
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
          let n = new NC();
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
      (Sw = { type: 0 }),
      (Cw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: X.in(n, r, Sw) };
        }
      }),
      (ww = { type: 1 }),
      (Tw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.source = e), (this.target = t));
        }
        source;
        target;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return U(`ScalarIndexOf`, this.source, this.target);
        }
        optimize(e) {
          let t = this.source.optimize(e),
            n = this.target.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.source.getOptimized(),
            n = this.target.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { source: n, target: r } = yield* H({
            source: this.source.evaluate(e, t),
            target: this.target.evaluate(e, t),
          });
          return { type: `number`, value: X.indexOf(n, r, ww) };
        }
      }),
      (Ew = class extends Error {}),
      (Dw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
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
          return U(`ScalarIntersection`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
              left: this.left.evaluate(e, t),
              right: this.right.evaluate(e, t),
            }),
            i = wp(n),
            a = wp(r),
            o = [],
            s = i.size < a.size ? i : a,
            c = s === i ? a : i;
          for (let e of s) c.has(e) && o.push({ type: `string`, value: e });
          return { type: `array`, value: o };
        }
      }),
      (Ow = class e extends $ {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `number`, isNullable: !1 };
        getHash() {
          return U(`ScalarLength`, this.input);
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
          return { type: `number`, value: X.length(n) };
        }
      }),
      (kw = class e extends $ {
        constructor(e) {
          (super(e.referencedFields, e.referencedOuterFields, e.isSynchronous), (this.input = e));
        }
        input;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarNot`, this.input);
        }
        optimize(e) {
          return this.input.optimize(e);
        }
        getOptimized() {
          let t = this.input.getOptimized();
          return new e(t);
        }
        *evaluate(e, t) {
          return { type: `boolean`, value: !Mf(yield* this.input.evaluate(e, t)) };
        }
      }),
      (Aw = { type: 0 }),
      (jw = class e extends $ {
        constructor(e, t) {
          let n = new Z();
          (n.merge(e.referencedFields), n.merge(t.referencedFields));
          let r = new Z();
          (r.merge(e.referencedOuterFields), r.merge(t.referencedOuterFields));
          let i = e.isSynchronous && t.isSynchronous;
          (super(n, r, i), (this.left = e), (this.right = t));
        }
        left;
        right;
        definition = { type: `boolean`, isNullable: !1 };
        getHash() {
          return U(`ScalarNotIn`, this.left, this.right);
        }
        optimize(e) {
          let t = this.left.optimize(e),
            n = this.right.optimize(e);
          return Q.max(t, n);
        }
        getOptimized() {
          let t = this.left.getOptimized(),
            n = this.right.getOptimized();
          return new e(t, n);
        }
        *evaluate(e, t) {
          let { left: n, right: r } = yield* H({
            left: this.left.evaluate(e, t),
            right: this.right.evaluate(e, t),
          });
          return { type: `boolean`, value: !X.in(n, r, Aw) };
        }
      }),
      (Mw = class extends $ {
        constructor(e, t) {
          R(e.name !== SC, `Invalid field name`);
          let n = new Z(),
            r = new Z();
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
          return U(`ScalarVariable`, this.field.id, this.isOuterField);
        }
        optimize() {
          return new Q(0);
        }
        getOptimized() {
          return this;
        }
        *evaluate(e, t) {
          return this.isOuterField
            ? (R(e, `Context must exist`), e.getValue(this.field))
            : (R(t, `Tuple must exist`), t.getValue(this.field));
        }
      }),
      (Nw = class {
        constructor(e) {
          this.memo = e;
        }
        memo;
        finishRelational(e) {
          return this.memo.addRelational(e);
        }
        newRelationalScan(e) {
          let t = new JC(e);
          return this.finishRelational(t);
        }
        newRelationalIndexLookup(e, t) {
          let n = new KC(e, t);
          return this.finishRelational(n);
        }
        newRelationalLeftJoin(e, t, n) {
          let r = new gw(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalRightJoin(e, t, n) {
          return this.newRelationalLeftJoin(t, e, n);
        }
        newRelationalFilter(e, t) {
          if (t instanceof ZC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (e instanceof gw && t.referencedFields.subsetOf(e.leftGroup.relational.outputFields)) {
            let n = this.newRelationalFilter(e.left, t);
            return this.newRelationalLeftJoin(n, e.right, e.constraint);
          }
          let n = new GC(e, t);
          return this.finishRelational(n);
        }
        newRelationalProject(e, t, n) {
          let r = new RC(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalLimit(e, t, n) {
          if (
            e instanceof RC &&
            t.referencedFields.subsetOf(e.inputGroup.relational.outputFields) &&
            n.providedByFields(e.inputGroup.relational.outputFields)
          ) {
            let r = this.newRelationalLimit(e.input, t, n);
            return this.newRelationalProject(r, e.projections, e.passthrough);
          }
          let r = new _w(e, t, n);
          return this.finishRelational(r);
        }
        newRelationalOffset(e, t, n) {
          let r = new vw(e, t, n);
          return this.finishRelational(r);
        }
        finishScalar(e) {
          if (
            !(e instanceof ZC) &&
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
          let n = new Mw(e, t);
          return this.finishScalar(n);
        }
        newScalarConstant(e, t) {
          let n = new ZC(e, t);
          return this.finishScalar(n);
        }
        newScalarNot(e) {
          if (e instanceof kw)
            return e.input.definition.type === `boolean`
              ? e.input
              : this.newScalarCast(e.input, { type: `boolean`, isNullable: !0 });
          if (e instanceof nw) return this.newScalarNotEquals(e.left, e.right);
          if (e instanceof sw) return this.newScalarEquals(e.left, e.right);
          if (e instanceof aw) return this.newScalarGreaterThanOrEqual(e.left, e.right);
          if (e instanceof ow) return this.newScalarGreaterThan(e.left, e.right);
          if (e instanceof rw) return this.newScalarLessThanOrEqual(e.left, e.right);
          if (e instanceof iw) return this.newScalarLessThan(e.left, e.right);
          if (e instanceof XC) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarOr(t, n);
          }
          if (e instanceof cw) {
            let t = this.newScalarNot(e.left),
              n = this.newScalarNot(e.right);
            return this.newScalarAnd(t, n);
          }
          let t = new kw(e);
          return this.finishScalar(t);
        }
        newScalarAnd(e, t) {
          if (t instanceof ZC && t.value?.type === `boolean` && t.value.value === !0) return e;
          if (
            (e instanceof ZC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ZC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return t;
          if (e instanceof ZC && e.value?.type === `boolean` && e.value.value === !1) return e;
          let n = new XC(e, t);
          return this.finishScalar(n);
        }
        newScalarOr(e, t) {
          if (t instanceof ZC && t.value?.type === `boolean` && t.value.value === !0) return t;
          if (
            (e instanceof ZC && e.value?.type === `boolean` && e.value.value === !0) ||
            (t instanceof ZC && t.value?.type === `boolean` && t.value.value === !1)
          )
            return e;
          if (e instanceof ZC && e.value?.type === `boolean` && e.value.value === !1) return t;
          let n = new cw(e, t);
          return this.finishScalar(n);
        }
        newScalarEquals(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new nw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotEquals(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarNotEquals(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new sw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThan(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarGreaterThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new aw(e, t);
          return this.finishScalar(r);
        }
        newScalarLessThanOrEqual(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarGreaterThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new ow(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThan(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarLessThan(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new rw(e, t);
          return this.finishScalar(r);
        }
        newScalarGreaterThanOrEqual(e, t) {
          let n = e instanceof Mw;
          if (t instanceof Mw && !n) return this.newScalarLessThanOrEqual(t, e);
          ((e = this.removeUnknown(e, t.definition)), (t = this.removeUnknown(t, e.definition)));
          let r = new iw(e, t);
          return this.finishScalar(r);
        }
        newScalarIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new Cw(e, t);
          return this.finishScalar(r);
        }
        newScalarNotIn(e, t) {
          t.definition.type === `array` && (e = this.removeUnknown(e, t.definition.definition));
          let n = { type: `array`, isNullable: !0, definition: e.definition };
          t = this.removeUnknown(t, n);
          let r = new jw(e, t);
          return this.finishScalar(r);
        }
        newScalarCase(e, t, n) {
          if (e) {
            let n = [];
            for (let { when: r, then: i } of t) {
              let t = new VC(this.removeUnknown(r, e.definition), i);
              n.push(t);
            }
            t = n;
          }
          let r = new HC(e, t, n);
          return this.finishScalar(r);
        }
        newScalarContains(e, t) {
          let n = new $C(e, t);
          return this.finishScalar(n);
        }
        newScalarStartsWith(e, t) {
          let n = new uw(e, t);
          return this.finishScalar(n);
        }
        newScalarEndsWith(e, t) {
          let n = new tw(e, t);
          return this.finishScalar(n);
        }
        newScalarLength(e) {
          let t = new Ow(e);
          return this.finishScalar(t);
        }
        newScalarIndexOf(e, t) {
          let n = new Tw(e, t);
          return this.finishScalar(n);
        }
        newScalarArray(e, t, n, r, i) {
          let a = new yw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarFlatArray(e, t, n, r, i) {
          let a = new xw(e, t, n, r, i);
          return this.finishScalar(a);
        }
        newScalarIntersection(e, t) {
          let n = new Dw(e, t);
          return this.finishScalar(n);
        }
        newScalarCast(e, t) {
          if (e.definition.type === t.type) return e;
          let n = new bw(e, t);
          return this.finishScalar(n);
        }
      }),
      (Pw = class extends IC {}),
      (Fw = class e extends Pw {
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
          return U(`EnforcerResolve`, this.inputGroup.id, this.fields);
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
          return new AC(e.ordering, t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return Q.estimate(0, 100 * MC).add(r);
        }
        getOptimized(t) {
          let n = this.getInputRequiredProps(t),
            r = this.inputGroup.getOptimized(n);
          return new e(r, this.fields, this.resolver);
        }
        *evaluate(e) {
          let t = yield* this.input.evaluate(e);
          R(this.fields.subsetOf(t.fields), `Fields can't be resolved`);
          let n = new Map();
          for (let e of this.fields) {
            R(e.collection, `Collection required to resolve field`);
            let t = n.get(e.collection);
            (t || ((t = new Z()), n.set(e.collection, t)), t.add(e));
          }
          for (let e of t.tuples) for (let t of this.fields) Tp(e.getValue(t), this.resolver);
          let r = yield Promise.all(
            Array.from(n).map(async ([e, n]) => {
              let r = [];
              for (let n of t.tuples) {
                let t = n.getPointer(e);
                t && r.push(t);
              }
              let i = await e.data.resolveItems(r, this.resolver.priority);
              return (
                R(i.length === r.length, `Invalid number of items`),
                { collection: e, fields: n, items: i, nextItemIndex: 0 }
              );
            })
          );
          return t.map(t.fields, (e) => {
            let t = new NC();
            t.merge(e);
            for (let n of r) {
              let { collection: r, fields: i, items: a } = n,
                o = e.getPointer(r);
              if (!o) continue;
              let s = a[n.nextItemIndex++];
              (R(s, `Item not found`), R(s.pointer === o, `Pointer mismatch`));
              for (let e of i) {
                let n = e.getValue(s);
                t.addValue(e, n);
              }
            }
            return t;
          });
        }
      }),
      (Iw = { type: 0 }),
      (Lw = class e extends Pw {
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
          return U(`EnforcerSort`, this.inputGroup.id, this.ordering);
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
            e.name !== SC && (Qe(e.collection) || t.add(e));
          return new AC(new kC(), t);
        }
        optimize(e, t) {
          let n = this.getInputRequiredProps(t),
            r = e.optimizeGroup(this.inputGroup, n);
          return new Q(0).add(r);
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
              if (n.name === SC) {
                let r = n.collection;
                R(r, `Collection required for sorting`);
                let a = e.getPointer(r);
                R(a, `Pointer required for sorting`);
                let o = { pointer: a, data: {} },
                  s = t.getPointer(r);
                R(s, `Pointer required for sorting`);
                let c = { pointer: s, data: {} },
                  l = r.data.compareItems(o, c);
                return i ? l : -l;
              }
              let a = e.getValue(n),
                o = t.getValue(n);
              if (!X.equal(a, o, Iw)) {
                if ($e(a) || X.lessThan(a, o, Iw)) return i ? -1 : 1;
                if ($e(o) || X.greaterThan(a, o, Iw)) return i ? 1 : -1;
                throw Error(`Invalid comparison`);
              }
            }
            return 0;
          });
        }
      }),
      (Rw = class {
        constructor(e, t, n) {
          ((this.query = e), (this.locale = t), (this.resolver = n));
        }
        query;
        locale;
        resolver;
        memo = new hw();
        normalizer = new Nw(this.memo);
        explorer = new dw(this.normalizer);
        optimize(e) {
          let t = new UC(this.normalizer, this.query, this.locale).build(),
            n = gf(e);
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
          (R(r, `Normalized node not found`), this.createEnforcer(n, r, t));
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
            let r = new Fw(t, n.resolvedFields, this.resolver),
              i = r.optimize(this, n);
            e.update(r, i);
          }
          if (n.ordering.length > 0) {
            let r = new Lw(t, n.ordering),
              i = r.optimize(this, n);
            e.update(r, i);
          }
        }
      }),
      (zw = ff(`query-engine`)),
      (Bw = class {
        async evalQuery(e, t, n, r) {
          zw.enabled &&
            zw.debug(`Query:
${Rp(e)}`);
          let i = new xC(e, t, r),
            a = new Rw(e, t, i),
            o = gf(i.priority);
          o && (await o);
          let s = a.optimize(r),
            [c, l] = it(s) ? await s : s,
            u = gf(r);
          u && (await u);
          let d = await c.evaluateAsync(r),
            f = Object.entries(l),
            p = [],
            m = [];
          for (let e of d.tuples) {
            let t = gf(r);
            t && (await t);
            let a = {},
              o = {};
            for (let [t, r] of f) {
              let s = e.getValue(r);
              ((a[t] = i.resolveValue(s)), n && (o[t] = s));
            }
            (n && p.push(o), m.push(H(a, r)));
          }
          let h = yf(bf(m, r), r);
          return n ? [it(h) ? await h : h, p] : h;
        }
        async serializeableQuery(e, t, n) {
          return this.evalQuery(e, t, !0, n);
        }
        async query(e, t, n) {
          return this.evalQuery(e, t, !1, n);
        }
        resolveSerializableQueryResult(e, t, n, r) {
          let i = new xC(t, n, r);
          return yf(
            bf(
              e.map((e) => {
                let t = {},
                  n;
                for (n in e) {
                  let r = e[n];
                  t[n] = i.resolveValue(r);
                }
                return H(t);
              })
            ),
            void 0,
            !1
          );
        }
      }),
      (Vw = `style[data-framer-breakpoint-css]`),
      (Hw = `page`),
      (Uw = Symbol(`cycle`)),
      (Kw = (() => {
        let e = O(void 0);
        return ((e.displayName = `TickerContext`), e);
      })()),
      Ue(Ch(), 1),
      (qw = {
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
      (Jw = { opacity: 0 }),
      (Yw = { opacity: 1 }),
      (Xw = wm(
        A.forwardRef(function (e, t) {
          let {
              background: n,
              children: r,
              alt: i,
              draggable: a,
              fitImageDimension: o,
              style: s,
              ...c
            } = e,
            u = { ...s },
            d = C(() => Do(n), [n]),
            [f, p] = h();
          A.useEffect(() => {
            if (!n?.src || !o || d) return;
            let e = document.createElement(`img`);
            ((e.onload = () => {
              e.naturalWidth &&
                e.naturalHeight &&
                l(() => p({ width: e.naturalWidth, height: e.naturalHeight }));
            }),
              (e.src = n.src));
          }, [n?.src, o, d]);
          let m = d ?? f;
          return (
            o && m && ((u[o] = `auto`), (u.aspectRatio = m.width / m.height)),
            n && delete u.background,
            w(Oo(e.as), {
              ...c,
              style: u,
              ref: t,
              draggable: a,
              children: [n && E(Ya, { image: n, alt: i, draggable: a }), r],
            })
          );
        })
      )),
      (Qw = !wn() && typeof Document < `u` && typeof Document.parseHTMLUnsafe == `function`),
      ($w =
        /(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
      (eT = `{{ text-placeholder }}`),
      (tT = `rich-text-wrapper`),
      (nT = Vo(
        D(function (e, n) {
          let {
              id: r,
              name: i,
              html: a,
              htmlFromDesign: o,
              text: s,
              textFromDesign: c,
              fonts: l = [],
              width: u,
              height: d,
              left: f,
              right: p,
              top: m,
              bottom: h,
              center: g,
              className: v,
              stylesPresetsClassName: y,
              visible: b = !0,
              opacity: x,
              rotation: S = 0,
              verticalAlignment: w = `top`,
              isEditable: T = !1,
              environment: D = K.current,
              withExternalLayout: ee = !1,
              positionSticky: O,
              positionStickyTop: te,
              positionStickyRight: k,
              positionStickyBottom: A,
              positionStickyLeft: re,
              __htmlStructure: M,
              __fromCanvasComponent: ie = !1,
              _forwardedOverrideId: ae,
              _forwardedOverrides: oe,
              _usesDOMRect: se,
              children: ce,
              ...le
            } = e,
            ue = bo(),
            de = qo(e),
            fe = _(null),
            pe = n ?? fe,
            { navigate: me, getRoute: he } = Ot(),
            ge = At();
          (Jn(e.preload ?? []), $o(e, pe));
          let _e = t(By),
            ve = nu(),
            N = s,
            ye = ae ?? r;
          if (ye && oe) {
            let e = oe[ye];
            typeof e == `string` && (N = e);
          }
          let be = ``;
          if (N) {
            let e = Em(N);
            be = M ? M.replace(eT, e) : `<p>${e}</p>`;
          } else if (a) be = a;
          else if (c) {
            let e = Em(c);
            be = M ? M.replace(eT, e) : `<p>${e}</p>`;
          } else o && (be = o);
          let xe = wu(),
            Se = C(() => (ve || !he || !ge ? be : Dm(be, he, ge, xe)), [be, he, ge, xe]);
          if (
            (j(() => {
              let e = pe.current;
              if (e === null) return;
              function t(e) {
                let t = vu(e.target, pe.current);
                jn(e) ||
                  !me ||
                  !t ||
                  t.getAttribute(`target`) === `_blank` ||
                  (cu(me, t, xe) && e.preventDefault());
              }
              return (
                e.addEventListener(`click`, t),
                () => {
                  e.removeEventListener(`click`, t);
                }
              );
            }, [me, xe]),
            Am(l, ie, pe),
            !b)
          )
            return null;
          let Ce = T && D() === K.canvas,
            P = {
              outline: `none`,
              display: `flex`,
              flexDirection: `column`,
              justifyContent: km(w),
              opacity: Ce ? 0 : x,
              flexShrink: 0,
            },
            we = K.hasRestrictions(),
            Te = _o(e, ue || 0, !1),
            Ee = se && (u === `auto` || d === `auto`),
            De = !!e.transformTemplate || !Te || !we || ie || Ee,
            Oe = De ? (e.transformTemplate ?? Ko(g)) : void 0;
          if (!ee) {
            if (Te && we && !Ee) {
              let e = rv.getNumber(S).toFixed(4);
              ((P.transform = `translate(${Te.x}px, ${Te.y}px) rotate(${e}deg)`),
                (P.width = Te.width),
                (P.minWidth = Te.width),
                (P.height = Te.height));
            } else
              ((P.left = f),
                (P.right = p),
                (P.top = m),
                (P.bottom = h),
                (P.width = u),
                (P.height = d),
                (P.rotate = S));
            O
              ? (!ve || _e) &&
                ((P.position = `sticky`),
                (P.willChange = `transform`),
                (P.top = te),
                (P.right = k),
                (P.bottom = A),
                (P.left = re))
              : ve && (e.positionFixed || e.positionAbsolute) && (P.position = `absolute`);
          }
          return (
            Pc(e, P),
            jc(e, P),
            Object.assign(P, e.style),
            E(ne.div, {
              id: r,
              ref: pe,
              ...le,
              ...Uo(De ? g : void 0, e.style),
              style: P,
              layoutId: de,
              "data-framer-name": i,
              "data-framer-component-type": `DeprecatedRichText`,
              "data-center": g,
              className: Ic(v, y, tT),
              transformTemplate: Oe,
              dangerouslySetInnerHTML: { __html: Se },
            })
          );
        })
      )),
      (rT = {
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
      (iT = RegExp(
        `\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
        `gu`
      )),
      (aT = D(function (e, t) {
        return E(`svg`, { ...e, ref: t, children: e.children });
      })),
      (oT = ne.create(aT)),
      (sT = D(function ({ viewBoxScale: e, viewBox: t, children: n, ...r }, i) {
        return E(oT, {
          ...r,
          ref: i,
          viewBox: t,
          children: E(ne.foreignObject, {
            width: `100%`,
            height: `100%`,
            className: `framer-fit-text`,
            transform: `scale(${e})`,
            style: { overflow: `visible`, transformOrigin: `center center` },
            children: n,
          }),
        });
      })),
      (cT = []),
      (lT = `RichTextContainer`),
      (uT = D(function (e, n) {
        let {
            __fromCanvasComponent: r = !1,
            _forwardedOverrideId: i,
            _forwardedOverrides: a,
            _usesDOMRect: o,
            anchorLinkOffsetY: s,
            as: c,
            bottom: l,
            center: u,
            children: d,
            environment: f = K.current,
            fonts: p = cT,
            height: m,
            isEditable: h = !1,
            left: g,
            name: v,
            opacity: y,
            positionSticky: b,
            positionStickyBottom: x,
            positionStickyLeft: S,
            positionStickyRight: w,
            positionStickyTop: T,
            right: D,
            rotation: ee = 0,
            style: O,
            _initialStyle: te,
            stylesPresetsClassNames: k,
            text: A,
            top: j,
            verticalAlignment: ne = `top`,
            visible: re = !0,
            width: M,
            withExternalLayout: ie = !1,
            viewBox: ae,
            viewBoxScale: oe = 1,
            effect: se,
            ...ce
          } = e,
          le = bo(),
          ue = f(),
          de = ue === K.canvas,
          fe = de || ue === K.export,
          pe = t(By),
          me = qo(e),
          he = _(null),
          ge = n ?? he;
        ($o(e, ge), Am(p, r, ge));
        let _e = zm(se, ge),
          ve = C(() => {
            if (d) return qm(d, k, A, s, void 0, _e.getTokenizer());
          }, [d, k, A, s, _e]);
        if (!re) return null;
        let N = { opacity: h && de ? 0 : y },
          ye = km(ne);
        ye !== Ty.justifyContent && (N.justifyContent = ye);
        let be = {},
          xe = K.hasRestrictions(),
          Se = _o(e, le || 0, !1),
          Ce = o && (M === `auto` || m === `auto`),
          P = !!e.transformTemplate || !Se || !xe || r || Ce,
          we = P ? (e.transformTemplate ?? Ko(u)) : void 0;
        (ie ||
          (Se && xe && !Ce
            ? ((be.x = Se.x + (I(O?.x) ? O.x : 0)),
              (be.y = Se.y + (I(O?.y) ? O.y : 0)),
              (be.left = 0),
              (be.top = 0),
              (N.rotate = rv.getNumber(ee)),
              (N.width = Se.width),
              (N.minWidth = Se.width),
              (N.height = Se.height))
            : ((N.left = g),
              (N.right = D),
              (N.top = j),
              (N.bottom = l),
              (N.width = M),
              (N.height = m),
              (N.rotate = ee)),
          b
            ? (!fe || pe) &&
              ((N.position = `sticky`),
              (N.willChange = `transform`),
              (N.top = T),
              (N.right = w),
              (N.bottom = x),
              (N.left = S))
            : de && (e.positionFixed || e.positionAbsolute) && (N.position = `absolute`)),
          Pc(e, N),
          jc(e, N),
          Object.assign(N, te, O, be),
          me && (ce.layout = `preserve-aspect`));
        let Te = Oo(e.as),
          Ee = ce[`data-framer-name`] ?? v,
          De = de ? Wm(Fv(ce)) : ce,
          Oe = Uo(P ? u : void 0, O);
        return F(e.viewBox)
          ? e.as === void 0
            ? E(sT, {
                ...De,
                ...Oe,
                ref: ge,
                style: N,
                layoutId: me,
                viewBox: ae,
                viewBoxScale: oe,
                transformTemplate: we,
                "data-framer-name": Ee,
                "data-framer-component-type": lT,
                children: ve,
              })
            : E(Te, {
                ...De,
                ...Oe,
                ref: ge,
                style: N,
                layoutId: me,
                transformTemplate: we,
                "data-framer-name": Ee,
                "data-framer-component-type": lT,
                children: E(sT, {
                  viewBox: ae,
                  viewBoxScale: oe,
                  style: { width: `100%`, height: `100%` },
                  children: ve,
                }),
              })
          : E(Te, {
              ...De,
              ...Oe,
              ref: ge,
              style: N,
              layoutId: me,
              transformTemplate: we,
              "data-framer-name": Ee,
              "data-framer-component-type": lT,
              children: ve,
            });
      })),
      (dT = Vo(
        D(function ({ children: e, html: t, htmlFromDesign: n, ...r }, i) {
          let a = t || e || n;
          if (F(a)) {
            !r.stylesPresetsClassName &&
              L(r.stylesPresetsClassNames) &&
              (r.stylesPresetsClassName = Object.values(r.stylesPresetsClassNames).join(` `));
            let e = { [F(t) ? `html` : `htmlFromDesign`]: a };
            return E(nT, { ...r, ...e, ref: i });
          }
          if (!r.stylesPresetsClassNames && F(r.stylesPresetsClassName)) {
            let [e, t, n, i, a] = r.stylesPresetsClassName.split(` `);
            e === void 0 || t === void 0 || n === void 0 || i === void 0 || a === void 0
              ? console.warn(
                  `Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`
                )
              : (r.stylesPresetsClassNames = { h1: e, h2: t, h3: n, p: i, a });
          }
          return E(uT, { ...r, ref: i, children: T(a) ? a : void 0 });
        })
      )),
      (fT = Tn()),
      (pT = class {
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
      (mT = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
      (hT = class {
        entries = new Map();
        vectorSetItems = new Map();
        debugGetEntries() {
          return this.entries;
        }
        subscribe(e, t, n, r) {
          if (!e || e === ``) return ``;
          let i = this.entries.get(e);
          if (!i) {
            n ||= `svg${String(Jy(e))}_${String(e.length)}`;
            let a = e,
              o,
              s = Qm(e);
            (s &&
              (t && $m(s, n),
              (s.id = n),
              (o = ih(s)),
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
          fT && document?.getElementById(e.id)?.remove();
        }
        getOrCreateTemplateContainer() {
          let e = document.getElementById(`svg-templates`);
          if (e) return e;
          let t = document.createElement(`div`);
          return (
            (t.id = `svg-templates`),
            (t.ariaHidden = `true`),
            (t.style.cssText = mT),
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
          fT && this.maybeAppendTemplate(t, e);
          let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
            a = i ? ` viewBox="${i}"` : ``;
          return new pT(
            t,
            e,
            `<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
            i
          );
        }
        template(e, t) {
          return (
            this.vectorSetItems.get(e) ||
              (this.vectorSetItems.set(e, { svg: t, count: 0 }), !fT) ||
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
                        fT && document?.getElementById(e)?.remove());
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
            e.push(`<div id="svg-templates" style="${mT}" aria-hidden="true">`),
            this.entries.forEach((t) => e.push(t.svg)),
            this.vectorSetItems.forEach((t, n) => {
              let r = t.svg;
              e.push(r.includes(`id="${n}"`) ? r : r.replace(/^<svg/u, `<svg id="${n}"`));
            }),
            e.push(`</div>`),
            e.join(`
`)
          );
        }
      }),
      (gT = new hT()),
      (_T = {
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
      (vT = 1e3),
      (yT = `Variable`),
      (bT = `explicitInter`),
      (Ve.prototype.addChild = function ({ transformer: e = (e) => e }) {
        let t = Me(e(this.get()));
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
  Pi as $,
  ah as A,
  Ni as B,
  lx as C,
  ly as D,
  sx as E,
  xT as F,
  oi as G,
  gu as H,
  pt as I,
  $l as J,
  Sl as K,
  Ih as L,
  _g as M,
  yi as N,
  sh as O,
  ut as P,
  Kn as Q,
  ui as R,
  vh as S,
  cx as T,
  zx as U,
  Jp as V,
  gT as W,
  nu as X,
  Wp as Y,
  Pa as Z,
  Oc as _,
  Zb as a,
  Nx as at,
  Ic as b,
  Gh as c,
  Vg as ct,
  df as d,
  Ot as et,
  nx as f,
  oh as g,
  dT as h,
  ja as i,
  fm as it,
  zp as j,
  ch as k,
  IS as l,
  K as m,
  Xx as n,
  dm as nt,
  vS as o,
  Jc as ot,
  Bw as p,
  At as q,
  Lb as r,
  uy as rt,
  Xw as s,
  gh as st,
  Fx as t,
  Zm as tt,
  $n as u,
  Ry as v,
  ox as w,
  Hv as x,
  fy as y,
  lS as z,
};
//# sourceMappingURL=framer.BcvqwUvb.mjs.map
